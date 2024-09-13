import React from "react";
import PlaceCardItem from "./PlaceCardItem";

// function PlacesToVisit({ trip }) {
//   return (
//     <div>
//       <h2 className="font-bold text-lg">Places To Visit</h2>
//       <div>
//         {tripData?.Itinerary.map((item, index) => (
//                 <div className='grid grid-cols-2'>
//                   <h2 className='font-medium text-lg'>{item.Day}</h2>
//                   {item.Plan.map((place,index) => (
//                       <div className='my-3'>
//                         <h2 className='font-medium text-sm text-orange-500'>{place.time}</h2>
//                         <PlaceCardItem place={place}/>
//                       </div>
//                   ))}
//                 </div>
//             ))}

//       </div>
//     </div>
//   );
// }

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-lg">Places To Visit</h2>
      <div>
        {/* Access tripData from the trip prop */}
        {trip?.tripData?.itinerary &&
          Object.keys(trip.tripData.itinerary).map((dayKey, index) => {
            const dayPlan = trip.tripData.itinerary[dayKey];
            return (
              <div key={index} className="mt-5">
                {/* Display day name */}
                <h2 className="font-medium text-lg">{`Day ${index + 1}`}</h2>
                {/* Loop through morning, afternoon, and evening plans */}
                <div className="grid md:grid-cols-2 gap-5">
                  {["morning", "afternoon", "evening"].map(
                    (timeOfDay, placeIndex) => {
                      const place = dayPlan[timeOfDay];
                      return (
                        place && (
                          <div className="my-3" key={placeIndex}>
                            <h2 className="font-medium text-sm text-orange-500">
                              🕟 {place.time}
                            </h2>
                            {/* Pass place data to PlaceCardItem */}
                            <PlaceCardItem place={place} />
                          </div>
                        )
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default PlacesToVisit;
