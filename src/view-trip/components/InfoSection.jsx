import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import { doc, deleteDoc } from "firebase/firestore";
import { MdDeleteSweep } from "react-icons/md";
import { toast } from "sonner";
import { db } from "@/service/firebaseConfig";
import { useParams, useNavigate } from "react-router-dom";

function InfoSection({ trip }) {
  const { tripId } = useParams();
  const [photoUrl, setPhotoUrl] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);
  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      // console.log(resp.data.places[0].photos[3].name);
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[7].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };

  const deleteTrip = async () => {
    try {
      const docRef = doc(db, "users", tripId);
      await deleteDoc(docRef);
      toast("Trip deleted successfully");
      navigate("/create-trip"); // Navigate to home or any other page after deletion
    } catch (error) {
      toast.error("Error deleting trip");
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div>
      <img
        src={photoUrl ? photoUrl : "/city.jpg"}
        alt="placeholder"
        className="h-[350px] w-full object-cover rounded-xl"
      />
      <div className="flex justify-between items-center gap-5">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location}
          </h2>
          <div className="flex xs:flex-col gap-2">
            <h2 className="p-1 px-3 bg-slate-200 rounded-full text-gray-400 text-xs md:text-md text-center">
              📅 {trip?.userSelection?.noOfdays} Day(s)
            </h2>
            <h2 className="py-1 px-1.5 bg-slate-200 rounded-full text-gray-400 text-xs md:text-md text-center">
              💰 {trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-slate-200 rounded-full text-gray-400 text-xs md:text-md text-center">
              🥂 {trip?.userSelection?.NumberofTravelers} Traveler(s)
            </h2>
          </div>
        </div>
        <Button
          onClick={deleteTrip}
          variant="destructive"
          className="rounded-full mt-9"
        >
          {/* Show icon on small screens, text on larger screens */}
          <span className="block sm:hidden">
            <MdDeleteSweep />
          </span>
          <span className="hidden sm:block">Delete</span>
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
