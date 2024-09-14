import React from "react";
import { Link } from "react-router-dom";
import HotelCardItem from "./HotelCardItem";

function Hotels({ trip }) {
  return (
    <div className="font-bold text-xl my-5">
      <h2 className="text-xl my-5">Hotel Recommendations</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {trip?.tripData?.hotelOptions?.map((hotel, index) => (
          <HotelCardItem hotel={hotel} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
