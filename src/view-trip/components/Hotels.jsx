import React from "react";
import { Link } from "react-router-dom";
import HotelCardItem from "./HotelCardItem";

function Hotels({ trip }) {
  return (
    <div className="font-bold text-xl mt-5">
      Hotel Recommendations
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {trip?.tripData?.hotelOptions?.map((hotel, index) => (
          <HotelCardItem hotel={hotel} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
