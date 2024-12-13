import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import { doc, deleteDoc } from "firebase/firestore";
import { MdDeleteSweep } from "react-icons/md";
import { toast } from "sonner";
import { db } from "@/service/firebaseConfig";
import { useParams, useNavigate } from "react-router-dom";
import { GrNext, GrPrevious } from "react-icons/gr";

function InfoSection({ trip }) {
  const { tripId } = useParams();
  const [photoUrls, setPhotoUrls] = useState([]); // Store multiple photos
  const [currentIndex, setCurrentIndex] = useState(0); // Track current photo
  const navigate = useNavigate();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  // Fetch place photos and store in state
  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      const photos = resp.data.places[0].photos.map((photo) =>
        PHOTO_REF_URL.replace("{NAME}", photo.name)
      );
      setPhotoUrls(photos); // Set all photos in state
    });
  };

  // Function to delete the trip document from Firebase
  const deleteTrip = async () => {
    try {
      const docRef = doc(db, "users", tripId);
      await deleteDoc(docRef);
      toast("Trip deleted successfully");
      navigate("/create-trip"); // Navigate to another page after deletion
    } catch (error) {
      toast.error("Error deleting trip");
      console.error("Error deleting document: ", error);
    }
  };

  // Function to go to the next photo
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photoUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous photo
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photoUrls.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      {/* Display current photo or placeholder if no photo */}
      <div className="relative w-full h-[350px]">
        {photoUrls.length > 0 ? (
          <>
            <img
              src={photoUrls[currentIndex]}
              alt={`Place ${currentIndex}`}
              className="h-[350px] w-full object-cover rounded-xl"
            />
            {/* Previous Button */}
            <Button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full focus:outline-none"
            >
             <GrPrevious />           
            </Button>

            {/* Next Button */}
            <Button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full focus:outline-none"
            >
            <GrNext />
            </Button>
          </>
        ) : (
          <img
            src="/city1.jpg"
            alt="placeholder"
            className="h-[350px] w-full object-cover rounded-xl"
          />
        )}
      </div>

      {/* Info Section */}
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

        {/* Delete Button */}
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
