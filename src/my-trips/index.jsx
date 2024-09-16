import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import UserTripCardItem from "./components/UserTripCardItem";
import Footer from "@/components/ui/custom/Footer";

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
    <div className="sm:px-10 lg:px-20  mt-10">
      <h2 className="font-bold text-3xl text-center">My Trips</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 my-10 px-5">
        {userTrips?.length>0?userTrips.map((trip, index) => (
          <UserTripCardItem key={index} trip={trip} />
        ))
      :['photo','photo','photo','photo','photo','photo'].map((item,index) => (<div className="bg-slate-200 min-h-[200px] w-full rounded-xl animate-pulse text-opacity-20 text-center" key={index}>{item}</div>))}
      </div> 
       
    </div>
    <Footer/>
    </div>
    
  );
}

export default MyTrips;
