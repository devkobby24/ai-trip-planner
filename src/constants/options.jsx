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
    amountRange: "$0 - $50 per day",
  },
  {
    id: 2,
    title: "Affordable",
    desc: "Great value without breaking the bank.",
    icon: "💰",
    amountRange: "$50 - $100 per day",
  },
  {
    id: 3,
    title: "Moderate",
    desc: "A balanced budget with a bit of comfort.",
    icon: "💵",
    amountRange: "$120 - $200 per day",
  },
  {
    id: 4,
    title: "Comfortable",
    desc: "A budget that allows for some extra amenities.",
    icon: "🏖️",
    amountRange: "$200 - $500 per day",
  },
  {
    id: 5,
    title: "Splurge",
    desc: "A budget for a more luxurious experience.",
    icon: "💳",
    amountRange: "$500+ per day",
  },
];

export const AI_PROMPT="Generate a travel plan for location: {location}, for {totalDays} days for {traveler} travelers with a budget of {budget}. Give me a Hotels options list with the hotelName, hotelAddress, price, hotelImageUrl, geoCoordinates, rating, and descriptions and suggest itinerary  with placeName, placeDetails, placeImageUrl, geoCoordinates, ticketPricing, rating and time to travel each of the location for {totalDays} days with each day plan with best time to visit JSON format.";

