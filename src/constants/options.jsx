export const SelectTraveleroptions = [
  {
    id: 1,
    title: "Solo Backpacking",
    desc: "An adventurous solo backpacking trip.",
    icon: "🎒",
    people: "1",
  },
  {
    id: 2,
    title: "Romantic Getaway",
    desc: "A couple's escape to a dreamy destination.",
    icon: "🌹",
    people: "2",
  },
  {
    id: 3,
    title: "Friends Road Trip",
    desc: "A spontaneous drive across scenic routes with friends.",
    icon: "🚗",
    people: "3",
  },
  {
    id: 4,
    title: "Family Adventure",
    desc: "A fun-filled journey for the whole family.",
    icon: "🏖️",
    people: "4",
  },
  {
    id: 5,
    title: "Group Tour",
    desc: "A guided tour with a large group.",
    icon: "🚌",
    people: "10",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs.",
    icon: "💸",
  },
  {
    id: 2,
    title: "Affordable",
    desc: "Great value without breaking the bank.",
    icon: "💰",
  },
  {
    id: 3,
    title: "Moderate",
    desc: "A balanced budget with a bit of comfort.",
    icon: "💵",
  },
  {
    id: 4,
    title: "Comfortable",
    desc: "A budget that allows for some extra amenities.",
    icon: "🏖️",
  },
  {
    id: 5,
    title: "Splurge",
    desc: "A budget for a more luxurious experience.",
    icon: "💳",
  },
];
export const AI_PROMPT="Generate a travel plan for location: {location}, for {totalDays} days for {traveler} travelers with a budget of {budget}. Provide a list of hotel options that includes the hotelName, hotelAddress, price, hotelImageUrl, geoCoordinates, rating, and descriptions. Suggest itineraries for each day with the placeName, placeDetails, placeImageUrl, geoCoordinates, ticketPricing, and time for each location. Organize the data such that each day has its own plan, with each plan divided into morning, afternoon, and evening activities. The plan for each day should be stored in an array under the 'day' variable, and the entire trip should be stored under the 'itinerary' variable. Ensure all variable names are in camelCase format and that the object structure is consistent in JSON format.";

