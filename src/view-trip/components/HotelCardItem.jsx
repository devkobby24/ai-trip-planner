import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";

function HotelCardItem({ hotel, fallbackImages }) {
  const [photoUrl, setPhotoUrl] = useState();
  
  useEffect(() => {
    // Fetch photo if needed or fallback to random image
    if (!photoUrl) {
      setPhotoUrl(fallbackImages[Math.floor(Math.random() * fallbackImages.length)]); // Randomly pick a fallback image
    }
  }, [hotel, photoUrl, fallbackImages]);

  // You can uncomment the code below if you want to fetch images from an API
  // useEffect(() => {
  //   hotel && GetPlacePhoto();
  // }, [hotel]);

  // const GetPlacePhoto = async () => {
  //   const data = { textQuery: hotel.hotelName };
  //   const result = await GetPlaceDetails(data).then((resp) => {
  //     const PhotoUrl = PHOTO_REF_URL.replace(
  //       "{NAME}",
  //       resp.data.places[0].photos[5].name
  //     );
  //     setPhotoUrl(PhotoUrl);
  //   });
  // };

  return (
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        hotel?.hotelName +
        "," +
        hotel?.hotelAddress
      }
      target="_blank"
      className="text-gray-950"
    >
      <div className="hover:scale-105 transition-all cursor-pointer">
        <img
          src={photoUrl ? photoUrl : fallbackImages[0]} // Use fallback image if no photoUrl is set
          className="rounded-xl h-[180px] w-full object-cover"
        />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium">{hotel.hotelName}</h2>
          <h2 className="font-medium text-sm text-gray-400">
            📍 {hotel?.hotelAddress}
          </h2>
          <h2 className="font-medium text-sm">💸 {hotel?.price}</h2>
          <h2 className="font-medium text-sm">⭐ {hotel?.rating}</h2>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItem;
