import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl">Places To Visit</h2>
      {/* <div>
        {trip?.tripData?.itinerary.map((item, index) => (
                <div className='grid grid-cols-2'>
                  <h2 className='font-medium text-lg'>{item.Day}</h2>
                  {item.Plan.map((place,index) => (
                      <div className='my-3'>
                        <h2 className='font-medium text-sm text-orange-500'>{place.time}</h2>
                        <PlaceCardItem place={place}/>
                      </div>
                  ))}
                </div>
            ))}

      </div> */}
      <div>
        {/* Check if itinerary exists and loop through the days */}
        {trip?.tripData?.itinerary &&
          Object.keys(trip.tripData.itinerary).map((dayKey, index) => (
            <div key={index} className="mt-5">
              {/* Display the day name */}
              <h2 className="font-medium text-lg">{`Day ${index + 1}`}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Loop through morning, afternoon, and evening */}
                {["morning", "afternoon", "evening"].map((timeOfDay) => {
                  const place = trip.tripData.itinerary[dayKey][timeOfDay];
                  return (
                    place && (
                      <div key={timeOfDay} className="my-3">
                        <h2 className="font-medium text-sm text-orange-500">
                          🕟 {place.time}
                        </h2>
                        <PlaceCardItem place={place} />
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

// function PlacesToVisit({ trip }) {
//   return (
//     <div>
//       <h2 className="font-bold text-lg">Places To Visit</h2>
//       <div>
//   {/* Check if itinerary data exists in the trip prop */}
//   {trip?.tripData?.itinerary &&
//     Object.keys(trip.tripData.itinerary).map((dayKey, index) => {
//       const dayPlan = trip.tripData.itinerary[dayKey];
//       return (
//         <div key={index} className="mt-5">
//           {/* Display day name */}
//           <h2 className="font-medium text-lg">{`Day ${index + 1}`}</h2>
//           {/* Loop through the list of places for each day */}
//           <div className="grid md:grid-cols-2 gap-5">
//             {dayPlan.map((place, placeIndex) => (
//               <div className="my-3" key={placeIndex}>
//                 <h2 className="font-medium text-sm text-orange-500">
//                   🕟 {place.time}
//                 </h2>
//                 {/* Display the place details using PlaceCardItem */}
//                 <PlaceCardItem place={place} />
//               </div>
//             ))}
//           </div>
//         </div>
//       );
//     })}
// </div>

//     </div>
//   );
// }

export default PlacesToVisit;
