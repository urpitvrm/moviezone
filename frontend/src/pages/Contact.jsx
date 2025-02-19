import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            Have a question, suggestion, or issue? Fill out the form below, and we'll get back to you as soon as possible.
          </p>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full border-gray-300 outline-none rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border-gray-300 outline-none rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message here"
                className="w-full border-gray-300 outline-none rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            You can also reach out to us using the contact details below.
          </p>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center">
              <span className="text-blue-600 text-xl mr-3">📍</span>
              <p>
                <strong>Address:</strong> 123 Cinema Lane, MovieTown, CA 90210
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 text-xl mr-3">📞</span>
              <p>
                <strong>Phone:</strong> +1 234-567-890
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 text-xl mr-3">📧</span>
              <p>
                <strong>Email:</strong> support@moviezone.com
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 text-xl mr-3">⏰</span>
              <p>
                <strong>Working Hours:</strong> Mon - Fri, 9 AM - 6 PM
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition"
              >
                Facebook
              </a>
              <a
                href="#"
                className="bg-blue-400 text-white py-2 px-4 rounded-full hover:bg-blue-500 transition"
              >
                Twitter
              </a>
              <a
                href="#"
                className="bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition"
              >
                Instagram
              </a>
              <a
                href="#"
                className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
