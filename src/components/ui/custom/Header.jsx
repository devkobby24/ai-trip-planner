import React, { useState, useEffect } from "react";
import { Button } from "../button";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LiaDoorOpenSolid } from "react-icons/lia";

function Header() {
  // State to manage authentication and user profile data
  const [user, setUser] = useState(null);
  // const navigation=useNavigation()

  // Check localStorage for an existing user when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Handle Google Login
  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        // Fetch the user's profile information
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v1/userinfo",
          {
            headers: {
              Authorization: `Bearer ${codeResponse.access_token}`,
            },
          }
        );

        const userData = res.data;
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData)); // Save user data to localStorage
        window.location.reload();
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
      <a href="/">
      <img src="/logo.svg" alt="Logo" className="cursor-pointer w-14 md:w-16 lg:w-18 h-auto p-2" />
      </a>
      <div>
        {user ? (
          // Display user's profile picture when signed in
          <div className="flex flex-row gap-3">
  {/* Hamburger menu for mobile screens */}
  <div className="md:hidden">
    <Popover>
      <PopoverTrigger asChild>
        <button>
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-40 mx-4 my-2 pl-3 bg-white border rounded-lg">
        <a href="/create-trip">
          <Button variant="outline" className="rounded-full text-gray-700 mb-2">
            Create Trip
          </Button>
        </a>
        <a href="/my-trips">
          <Button variant="outline" className="rounded-full text-gray-700">
            My Trips
          </Button>
        </a>
      </PopoverContent>
    </Popover>
  </div>

  {/* Buttons for larger screens */}
  <div className="hidden md:flex flex-row gap-3">
    <a href="/create-trip">
      <Button variant="outline" className="rounded-full text-gray-700">
        Create Trip
      </Button>
    </a>
    <a href="/my-trips">
      <Button variant="outline" className="rounded-full text-gray-700">
        History
      </Button>
    </a>
  </div>

  {/* User Profile and Logout */}
  <Popover>
    <PopoverTrigger asChild>
      <img
        src={user.picture}
        alt="User Profile"
        className="rounded-full w-9 h-9"
      />
    </PopoverTrigger>
    <PopoverContent className="w-40 mx-4 my-2 pl-3 bg-transparent border-transparent">
      <a href="/">
        <Button
          onClick={() => {
            googleLogout();
            localStorage.clear();
            window.location.reload();
          }}
        >
          Log Out
          <LiaDoorOpenSolid size={20} />
        </Button>
      </a>
    </PopoverContent>
  </Popover>
</div>

        ) : (
          // Display the sign-in button when not signed in
          <Button onClick={login}>Sign In</Button>
        )}
      </div>
    </div>
  );
}

export default Header;
