import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-10 px-6">
      {/* Container */}
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            🎥 Welcome to MovieZone!
          </h2>
          <p className="text-gray-700 text-lg">
            Your ultimate destination for booking movie tickets effortlessly. Dive into the world of cinema with just a few clicks and experience the magic! ✨
          </p>
        </div>

        {/* Why Choose Us? */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            🤔 Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              🎬 <strong>Extensive Collection:</strong> Movies from all genres, languages, and categories.
            </li>
            <li>
              ⚡ <strong>Instant Bookings:</strong> Reserve your seats in a flash.
            </li>
            <li>
              🔔 <strong>Real-Time Notifications:</strong> Stay updated with showtimes and offers.
            </li>
            <li>
              💳 <strong>Secure Payments:</strong> Seamless transactions with top-notch security.
            </li>
          </ul>
        </div>

        {/* Our Vision */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            🌟 Our Vision
          </h2>
          <p className="text-gray-700 text-lg">
            At MovieZone, we aim to redefine your movie-going experience. Our mission is to make ticket booking as magical as the movies themselves. 🎭✨
          </p>
        </div>

        {/* Features Highlights */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            🚀 Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🎟️</span>
              <p>
                <strong>Easy Ticket Booking:</strong> Book your seats without any hassle.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🌎</span>
              <p>
                <strong>Global Access:</strong> Explore movies from across the world.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">📅</span>
              <p>
                <strong>Plan Ahead:</strong> Schedule your movie outings effortlessly.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">💬</span>
              <p>
                <strong>Customer Support:</strong> 24/7 assistance for a seamless experience.
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold mb-4">🎉 Ready to Dive In?</h2>
          <p className="text-lg mb-4">
            Don't miss out on the latest releases and exclusive offers. Your next favorite movie is just a click away! 🎥✨
          </p>
          <a
            href="/"
            className="inline-block bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-100 transition"
          >
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
