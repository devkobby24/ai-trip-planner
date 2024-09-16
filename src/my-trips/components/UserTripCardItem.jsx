import React, { useEffect, useState } from "react";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import { Link } from "react-router-dom";

function UserTripCardItem({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);
  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip.userSelection.location,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      //   console.log(resp.data.places[0].photos[3].name);
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[4].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };
  return (
    <Link to={"/view-trip/" + trip.id} className={"text-gray-950"}>
    <div className="hover:scale-105 transition-all cursor-pointer">
      <img
        src={photoUrl ? photoUrl : "/placeholder.jpg"}
        className="object-cover rounded-xl w-full max-w-[300px] h-[200px]"
      />
      <div className="mt-4">
        <h2 className="font-bold text-lg">
          📍 {trip?.userSelection?.location}
        </h2>
        <h2 className="text-sm text-gray-500">
          🏞️ {trip.userSelection.noOfdays}-day trip with{" "}
          {trip.userSelection.budget} budget{" "}
        </h2>
      </div>
    </div>
    </Link>
  );
}

export default UserTripCardItem;
