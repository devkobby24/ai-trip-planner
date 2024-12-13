import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  console.log(trip?.tripData);

  return (
    <div>
      <h2 className="font-bold text-xl">Places To Visit</h2>
      <div>
        {/* Check if itinerary exists and loop through the days */}
        {trip?.tripData?.itinerary &&
          Object.keys(trip.tripData.itinerary).map((dayKey, index) => {
            const dayData = trip.tripData.itinerary[dayKey];

            return (
              <div key={index} className="mt-5">
                {/* Display the day name */}
                <h2 className="font-medium text-lg">{`Day ${index + 1}`}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Check if dayData is an object and contains any valid activities */}
                  {dayData && typeof dayData === "object" ? (
                    Object.values(dayData).map((place, i) => {
                      // Check if place is an object and contains necessary details
                      if (place && place.placeName && place.time) {
                        return (
                          <div key={i} className="my-3">
                            <h2 className="font-medium text-sm text-orange-500">
                              🕐 {place.time || "No time specified"}
                            </h2>
                            <PlaceCardItem place={place} />
                          </div>
                        );
                      }
                      return null; // If data is missing, skip it
                    })
                  ) : (
                    <p>No activities available for this day.</p>
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
