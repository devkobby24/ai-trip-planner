import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import UserTripCardItem from "./components/UserTripCardItem";
import Footer from "@/view-trip/components/Footer";

function MyTrips() {
  const navigation = useNavigation();
  const [userTrips, setUserTrips] = useState([]);
  useEffect(() => {
    GetUserTrips();
  }, []);

  /** Used to get all user trips from firebase */
  const GetUserTrips = async() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (!user) {
      navigation("/");
      return;
    }

    const q = query(
      collection(db, "AI Trips"),
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
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl text-center">My Trips</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-10">
        {userTrips?.length>0?userTrips.map((trip, index) => (
          <UserTripCardItem key={index} trip={trip}  />
        ))
      :[1,2,3,4,5,6].map((item,index) => (<div className="bg-gray-200 h-50 w-full rounded-xl animate-pulse" key={index}>{item}</div>))}
      </div> 
      <Footer/> 
    </div>
    
  );
}

export default MyTrips;
