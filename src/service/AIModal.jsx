
// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");
import { GoogleGenerativeAI,
         HarmCategory,
          HarmBlockThreshold }
           from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
//   async function run() {
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itineraries with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing,rating, Time  travel each of the location for 3 days with each day plan with best time to visit in JSON format.\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50 - $100 per night\",\n      \"hotelImageUrl\": \"https://www.theD.com/media/images/hotel/the-d-las-vegas-hotel-exterior.jpg\",\n      \"geoCoordinates\": \"36.1699, -115.1423\",\n      \"rating\": 4.0,\n      \"description\": \"Located in the heart of Fremont Street, The D offers affordable rooms, a casino, and a variety of dining options. It's a great choice for budget-minded travelers who want to be in the middle of the action.\"\n    },\n    {\n      \"hotelName\": \"Golden Nugget Las Vegas\",\n      \"hotelAddress\": \"129 E Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$75 - $150 per night\",\n      \"hotelImageUrl\": \"https://www.goldennugget.com/media/images/hotel/golden-nugget-las-vegas-hotel-exterior.jpg\",\n      \"geoCoordinates\": \"36.1688, -115.1425\",\n      \"rating\": 4.5,\n      \"description\": \"Known for its impressive shark tank, Golden Nugget offers a vibrant atmosphere, a variety of restaurants, and comfortable rooms. It's a good option for couples looking for a fun and lively experience.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"$40 - $80 per night\",\n      \"hotelImageUrl\": \"https://www.circuscircus.com/media/images/hotel/circus-circus-las-vegas-hotel-exterior.jpg\",\n      \"geoCoordinates\": \"36.1135, -115.1729\",\n      \"rating\": 3.5,\n      \"description\": \"Circus Circus is a classic Las Vegas experience with a family-friendly atmosphere, circus acts, and budget-friendly accommodations. It's a good option for those seeking a more affordable option on the Strip.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"morning\": {\n        \"placeName\": \"Fremont Street Experience\",\n        \"placeDetails\": \"Explore the vibrant pedestrian mall with its iconic canopy of lights, street performers, and casinos.\",\n        \"placeImageUrl\": \"https://www.fremontstreetexperience.com/sites/default/files/styles/featured_hero/public/hero_images/FremontStreetExperience-Hero.jpg\",\n        \"geoCoordinates\": \"36.1699, -115.1423\",\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.5,\n        \"time\": \"9:00 AM - 12:00 PM\"\n      },\n      \"afternoon\": {\n        \"placeName\": \"Pinball Hall of Fame\",\n        \"placeDetails\": \"Play classic pinball machines and enjoy a nostalgic experience.\",\n        \"placeImageUrl\": \"https://www.pinballhalloffame.org/images/Pinball_Hall_of_Fame_Exterior.jpg\",\n        \"geoCoordinates\": \"36.1620, -115.1426\",\n        \"ticketPricing\": \"$12.50 per person\",\n        \"rating\": 4.0,\n        \"time\": \"1:00 PM - 4:00 PM\"\n      },\n      \"evening\": {\n        \"placeName\": \"Golden Nugget Casino & Pool\",\n        \"placeDetails\": \"Enjoy the lively atmosphere of the casino and relax by the pool.\",\n        \"placeImageUrl\": \"https://www.goldennugget.com/media/images/casino/golden-nugget-las-vegas-casino-floor.jpg\",\n        \"geoCoordinates\": \"36.1688, -115.1425\",\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.5,\n        \"time\": \"5:00 PM - 9:00 PM\"\n      }\n    },\n    \"day2\": {\n      \"morning\": {\n        \"placeName\": \"Hoover Dam\",\n        \"placeDetails\": \"Take a day trip to the iconic Hoover Dam and admire its engineering marvel.\",\n        \"placeImageUrl\": \"https://www.nps.gov/hdam/learn/nature/images/hoover-dam-2015-0203_237.jpg\",\n        \"geoCoordinates\": \"36.0289, -114.9914\",\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.5,\n        \"time\": \"9:00 AM - 1:00 PM\"\n      },\n      \"afternoon\": {\n        \"placeName\": \"Las Vegas Strip\",\n        \"placeDetails\": \"Walk along the famous Strip and enjoy the lights, casinos, and atmosphere.\",\n        \"placeImageUrl\": \"https://www.visitlasvegas.com/sites/default/files/styles/featured_hero/public/images/hero_images/las-vegas-strip-hero.jpg\",\n        \"geoCoordinates\": \"36.1146, -115.1729\",\n        \"ticketPricing\": \"Free\",\n        \"rating\": 5.0,\n        \"time\": \"2:00 PM - 6:00 PM\"\n      },\n      \"evening\": {\n        \"placeName\": \"Bellagio Fountains Show\",\n        \"placeDetails\": \"Watch the spectacular water and light show at the Bellagio Hotel.\",\n        \"placeImageUrl\": \"https://www.bellagio.com/media/images/hotel/bellagio-las-vegas-hotel-exterior.jpg\",\n        \"geoCoordinates\": \"36.1143, -115.1735\",\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.5,\n        \"time\": \"7:00 PM - 9:00 PM\"\n      }\n    },\n    \"day3\": {\n      \"morning\": {\n        \"placeName\": \"The Neon Museum\",\n        \"placeDetails\": \"Explore a collection of vintage neon signs from Las Vegas's past.\",\n        \"placeImageUrl\": \"https://www.neonmuseum.org/wp-content/uploads/2020/01/NeonMuseum_Boneyard_Wide-1.jpg\",\n        \"geoCoordinates\": \"36.1670, -115.1456\",\n        \"ticketPricing\": \"$20 per person\",\n        \"rating\": 4.0,\n        \"time\": \"9:00 AM - 12:00 PM\"\n      },\n      \"afternoon\": {\n        \"placeName\": \"Red Rock Canyon National Conservation Area\",\n        \"placeDetails\": \"Enjoy scenic hiking trails and stunning desert views.\",\n        \"placeImageUrl\": \"https://www.nps.gov/redr/learn/nature/images/red-rock-canyon-national-conservation-area-2.jpg\",\n        \"geoCoordinates\": \"36.1636, -115.3043\",\n        \"ticketPricing\": \"$7 per vehicle\",\n        \"rating\": 4.5,\n        \"time\": \"1:00 PM - 5:00 PM\"\n      },\n      \"evening\": {\n        \"placeName\": \"Free Show at a Casino\",\n        \"placeDetails\": \"Enjoy a free concert or performance at one of the many casinos.\",\n        \"placeImageUrl\": \"https://www.visitlasvegas.com/sites/default/files/styles/featured_hero/public/images/hero_images/las-vegas-casino-hero.jpg\",\n        \"geoCoordinates\": \"36.1146, -115.1729\",\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.0,\n        \"time\": \"7:00 PM - 9:00 PM\"\n      }\n    }\n  }\n}\n```\n\n**Please note:**\n\n* This itinerary is just a suggestion and can be adjusted to fit your interests and preferences.\n* Prices for hotels and attractions can vary depending on the time of year and demand.\n* Be sure to check the websites of the hotels and attractions for the most up-to-date information.\n* This plan is based on a \"cheap\" budget, but you can always choose to upgrade your experiences. For example, you could splurge on a nice dinner or see a show.\n* There are many other things to see and do in Las Vegas. You can use this as a starting point and customize it to your liking.\n* This itinerary doesn't include transportation, but you can use public transportation, taxis, ride-sharing services, or even walk between locations. \n"},
          ],
        },
      ],
    });

  
  