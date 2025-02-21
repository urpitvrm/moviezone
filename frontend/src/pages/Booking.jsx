import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Booking = () => {
  const { movieId } = useParams();
  const [user,setUser]=useState(null);
  const [bookedseat, setbookedseat] = useState([]); // Track booked seats
  const [selectedSeat, setSelectedSeat] = useState(null); // Track selected seat
  const navigate = useNavigate();

  const handlesubmit = async () => {
    try {
      if (!user) {
        alert("Please log in to book a ticket.");
        navigate("/signin");
        return;
      }
      await axios.post("https://moviezone-sf85.onrender.com/api/v1/book", {
        movieId: movieId,
        ticketId: selectedSeat,
        userId:user._id
      });
      alert("Ticket booked successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error booking the ticket:", error);
    }
  };

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(
          `https://moviezone-sf85.onrender.com/api/v1/movie/${movieId}`
        );
        console.log("Fetched movie data:", response.data);
        setbookedseat(response.data.ticketIds || []);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [movieId]);
  useEffect(() => {
      const fetchUser = async () => {
        try {
          const storedUser = localStorage.getItem("user");
          if (storedUser) {
            const data = JSON.parse(storedUser);
            setUser(data);
          }
        } catch (error) {
          console.error("Error parsing user data from localStorage:", error);
        }
      };
  
      fetchUser(); // Call the async function
    }, []);
  
  const seats = Array.from({ length: 50 }, (_, i) => i + 1);


  const handleSeatClick = (seat) => {
    setSelectedSeat(seat);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4 text-center">
        
        <div className="bg-gray-800 text-white text-center py-2 rounded-t-lg mb-6">
          <p className="font-semibold text-lg">SCREEN</p>
        </div>

        {/* Seat Selection Layout */}
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-4 justify-center items-center">
          {seats.map((seat) => (
            <button
              key={seat}
              className={`w-12 h-12 rounded-md flex items-center justify-center text-sm font-medium ${
                bookedseat.includes(seat)
                  ? "bg-red-500 text-white cursor-not-allowed" 
                  : selectedSeat === seat
                  ? "bg-green-500 text-white" 
                  : "bg-gray-300 hover:bg-blue-400 text-black" 
              }`}
              onClick={() => handleSeatClick(seat)}
              disabled={bookedseat.includes(seat)} 
            >
              {seat}
            </button>
          ))}
        </div>

        {selectedSeat && (
          <div className="mt-6 text-center">
            <p className="text-lg font-medium">
              You have selected <span className="text-blue-600">Seat {selectedSeat}</span>
            </p>
            <button
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition"
              onClick={handlesubmit}
            >
              Proceed to Confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
