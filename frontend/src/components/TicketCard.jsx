import React from 'react'

const TicketCard = ({ticket}) => {
  return (
    <>
     <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md border border-gray-200 p-4">
      <h2 className="text-xl font-bold text-gray-800">{ticket.movieName}</h2>

      <div className="mt-4 space-y-2 text-gray-600">
        <p>
          <strong>Ticket ID:</strong> {ticket.ticketId}
        </p>
        <p>
          <strong>Seat Number:</strong> {ticket.seatNumber}
        </p>
        <p>
          <strong>Movie Time:</strong> {ticket.movieTime}
        </p>
        <p>
          <strong>Booking Time:</strong> {ticket.bookedAt}
        </p>
      </div>

    </div>
    </>
  )
}

export default TicketCard