import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";

function InfoSection({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();
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
        resp.data.places[0].photos[0].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <div>
      <img
        src={photoUrl ? photoUrl : "/city.jpg"}
        alt="placeholder"
        className="h-[350px] w-full object-cover rounded-xl"
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-slate-200 rounded-full text-gray-400 text-xs md:text-md">
              📅 {trip?.userSelection?.noOfdays} Day(s)
            </h2>
            <h2 className="p-1 px-3 bg-slate-200 rounded-full text-gray-400 text-xs md:text-md">
              💰 {trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-slate-200 rounded-full text-gray-400 text-xs md:text-md">
              🥂 {trip?.userSelection?.NumberofTravelers} Traveler(s)
            </h2>
          </div>
        </div>

        <Button>
          <IoIosSend />
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
