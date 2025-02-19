import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({movie}) => {
    return (
        <>
            <div
                key={movie.id}
                className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
                <img
                    src={movie.link}
                    alt={movie.link}
                    className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                    <div className=' flex justify-between'>
                        <h3 className="font-semibold text-lg">{movie.name}</h3>
                        <p>{movie.timeSlot}</p>
                    </div>
                    <Link
                        to={`/booking/${movie._id}`}
                        className="mt-4 inline-block bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-300 text-center text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-500 transition-all duration-200 w-11/12
                        "
                    >
                        Book Tickets
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Card