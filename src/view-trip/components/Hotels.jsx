import React from "react";
import HotelCardItem from "./HotelCardItem";

function Hotels({ trip }) {
  // Array of fallback images for the hotels
  const fallbackImages = [
    "/hotel.jpg", 
    "/hotel2.jpg", 
    "/hotel3.jpg"
  ];

  return (
    <div className="font-bold text-xl my-5">
      <h2 className="text-xl my-5">Hotel Recommendations</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {trip?.tripData?.hotelOptions?.map((hotel, index) => (
          <HotelCardItem 
            hotel={hotel} 
            key={index} 
            fallbackImages={fallbackImages} // Pass fallback images as prop
          />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
