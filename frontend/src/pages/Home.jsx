import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Skeleton from "../components/layouts/Skeleton"

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://moviezone-sf85.onrender.com/api/v1/movies`
        );
        setItems(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-300 text-white py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Welcome to MovieZone 🎬
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Book tickets for the latest blockbusters in just a few clicks!
          </p>
        </div>
      </section>

      {/* Featured Movies Section */}
      <section className="py-20 bg-gray-50" id="movies">
        <div className="container mx-auto px-6" >
          <h2 className="text-4xl font-bold  text-center text-gray-800 mb-12">
            Featured Movies 
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {items.length > 0 ? (
              items.map((movie) => <Card key={movie.id} movie={movie} />)
            ) : (
              <>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-300 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready for the next movie experience?
          </h3>
          <p className="text-lg md:text-xl mb-6">
            Book your tickets in advance to get the best seats in the house!
          </p>
          <Link to="/#movies" className="bg-yellow-500 text-black px-8 py-3 text-xl font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-300">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
