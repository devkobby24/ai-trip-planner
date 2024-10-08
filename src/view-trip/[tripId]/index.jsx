import React, { useEffect, useState } from "react";
import { doc, getDoc} from "firebase/firestore";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { db } from "@/service/firebaseConfig";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import PlacesToVisit from "../components/PlacesToVisit";
import Footer from "../../components/ui/custom/Footer";

function Viewtrip() {
  
  const { tripId } = useParams();
  const [trip, setTrip] = useState([])

  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);
  /**
   * used to get trip information from firebase
   */
  const GetTripData = async () => {
    const docRef = doc(db, "users", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists) {
      // console.log("Document data:", docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No such document");
      toast("No trip found");
    }
  };
  return (
        <>
        <div className="p-10">
          {/* Information section */}
          <InfoSection trip={trip}/>
          {/* Recommended Hotels */}
          <Hotels trip={trip}/>
          {/* Itinerary section */}
          <PlacesToVisit trip={trip}/>
        </div>
        <Footer />

        </>
      )
}

export default Viewtrip;
