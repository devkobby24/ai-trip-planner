import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTraveleroptions,
} from "@/constants/options";
import { chatSession } from "@/service/AIModal";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { GiEmptyHourglass } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import Footer from "@/view-trip/components/Footer";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log("Login Failed:", error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        OnGenerateTrip();
      });
  };

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      setOpenDialog(true);
      return;
    }

    if (
      (formData?.noOfdays > 5 && !formData?.location) ||
      !formData?.budget ||
      !formData?.NumberofTravelers
    ) {
      toast("Please fill all the fields.");
      return;
    } else {
      setLoading(true);
    }
      
    const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData?.location)
      .replace("{totalDays}", formData?.noOfdays)
      .replace("{traveler}", formData?.NumberofTravelers)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfdays);


    const result = await chatSession.sendMessage(FINAL_PROMPT);
    // console.log("--", result?.response?.text());
    setLoading(false);
    saveAiTrip(result?.response?.text());
  };

  const saveAiTrip = async (TripData) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();
    await setDoc(doc(db, "AI Trips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,
    });
    setLoading(false);
    navigate("/view-trip/" + docId);
  };
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="text-3xl font-bold">
        Tell us your travel preferences 🌴🏕️
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is the destination of choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                // console.log(v);
                handleInputChange("location", v?.label);
              },
            }}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip?
          </h2>

          <Input
            placeholder={"Ex.3"}
            type={"number"}
            min='1'
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (value > 0 && value < 6) {
                handleInputChange("noOfdays", value);
              } else {
                e.target.value = ""; // Clear the input if it's 0,negative or more than 5
              }
            }}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl my-3 font-medium">
          What is Your Budget?
        </h2>
        <h2 className="text-gray-600 text-lg">
        The budget is specifically reserved for activities and dining expenses.
        </h2>
        <div className="grid grid-cols-3 mt-5 gap-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("budget", item.title)}
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg  flex flex-col items-center md:items-start text-center md:text-left
                  ${
                    formData.budget === item.title && "shadow-lg border-black"
                  }  
                `}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-gray-500 text-sm">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-xl my-3 font-medium">
          Who do you plan to travel with on your next adventure?
        </h2>
        <div className="grid grid-cols-3 mt-5 gap-5">
          {SelectTraveleroptions.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                handleInputChange("NumberofTravelers", item.people)
              }
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg flex flex-col items-center md:items-start text-center md:text-left
                ${
                  formData.NumberofTravelers === item.people &&
                  "shadow-lg border-black"
                }  
              `}
            >
               <h2 className="text-4xl">{item.icon}</h2>
               <h2 className="font-bold text-lg ">{item.title}</h2>
               <h2 className="text-gray-500 text-sm ">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 items-center justify-center flex">
        <Button disabled={loading} onClick={OnGenerateTrip}>
          {loading ? (
            // <AiOutlineLoading3Quarters className="animate-spin h-7 w-7" />
            <GiEmptyHourglass className="animate-spin h-7 w-7" />
          ) : (
            "Generate Trip"
          )}
        </Button>
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" />
              <h2 className="font-bold text-lg mt-7">Sign In with Google</h2>
              <p>Sign in to the app with Google authentication</p>
              <Button
                onClick={login}
                className="mt-5 w-full flex gap-4 items-center"
              >
                <FcGoogle className="h-7 w-7" /> Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}

export default CreateTrip;
