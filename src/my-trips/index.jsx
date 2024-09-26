import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import UserTripCardItem from "./components/UserTripCardItem";
import Footer from "@/components/ui/custom/Footer";
import { Button } from "@/components/ui/button";

function MyTrips() {
  const navigation = useNavigation();
  const [userTrips, setUserTrips] = useState([]);
  useEffect(() => {
    GetUserTrips();
  }, []);

  /** Used to get all user trips from firebase */
  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (!user) {
      navigation("/");
      return;
    }

    const q = query(
      collection(db, "users"),
      where("userEmail", "==", user?.email)
    );

    const querySnapshot = await getDocs(q);
    setUserTrips([]);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setUserTrips((prevVal) => [...prevVal, doc.data()]);
    });
  };
  return (
    <div>
      <div className="px-5 mt-10 min-h-screen">
        <h2 className="font-bold text-3xl text-center mb-4">My Trips</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
          {userTrips?.length > 0 ? (
            userTrips.map((trip, index) => (
              <UserTripCardItem key={index} trip={trip} />
            ))
          ) : (
            <>
              {/* Placeholder skeleton while fetching trips */}
              {["photo", "photo", "photo", "photo", "photo", "photo"].map(
                (item, index) => (
                  <div
                    className="bg-slate-200 min-h-[200px] rounded-xl animate-pulse text-opacity-20 text-center w-full"
                    key={index}
                  >
                    {item}
                  </div>
                )
              )}
              {/* Message prompting user to add a trip */}
              <div className="col-span-full text-center mt-10">
                <h3 className="text-xl font-semibold text-gray-500">
                  No trips found!
                </h3>
                <p className="text-gray-400 mt-2">
                  It looks like you haven't added any trips yet.
                </p>
                <Button
                  className="mt-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600"
                  onClick={() => navigate("/create-trip")} // Replace with your route to add trips
                >
                  Add a New Trip
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MyTrips;
