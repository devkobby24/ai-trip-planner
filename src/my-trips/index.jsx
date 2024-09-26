import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import UserTripCardItem from "./components/UserTripCardItem";
import Footer from "@/components/ui/custom/Footer";
import { Button } from "@/components/ui/button";

function MyTrips() {
  const navigate = useNavigate(); // Corrected from useNavigation to useNavigate
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    GetUserTrips();
  }, []);

  /** Used to get all user trips from firebase */
  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/"); // Navigate to the home page if the user is not found
      return;
    }

    const q = query(
      collection(db, "users"),
      where("userEmail", "==", user?.email)
    );

    const querySnapshot = await getDocs(q);
    setUserTrips([]); // Clear existing trips before adding new ones
    querySnapshot.forEach((doc) => {
      setUserTrips((prevVal) => [...prevVal, doc.data()]);
    });
    
    setLoading(false); // Set loading to false once the data is fetched
  };

  return (
    <div>
      <div className="px-5 mt-10 min-h-screen">
        <h2 className="font-bold text-3xl text-center mb-4">My Trips</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
          {loading ? (
            // Display the loading skeleton while trips are being fetched
            ["photo", "photo", "photo", "photo", "photo", "photo"].map(
              (item, index) => (
                <div
                  className="bg-slate-200 min-h-[200px] rounded-xl animate-pulse text-opacity-20 text-center w-full"
                  key={index}
                >
                  {item}
                </div>
              )
            )
          ) : userTrips?.length > 0 ? (
            // Display the trips if they exist
            userTrips.map((trip, index) => (
              <UserTripCardItem key={index} trip={trip} />
            ))
          ) : (
            // Show a message when no trips are found
            <div className="col-span-full text-center mt-10">
              <h3 className="text-xl font-semibold text-gray-500">
                No trips found!
              </h3>
              <p className="text-gray-400 mt-2">
                It looks like you haven't added any trips yet.
              </p>
              <Button
                className="mt-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600"
                onClick={() => navigate("/create-trip")} // Navigate to the trip creation page
              >
                Add a New Trip
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MyTrips;
