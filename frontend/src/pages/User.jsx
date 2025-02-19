import React, { useEffect, useState } from 'react'
import TicketCard from '../components/TicketCard';
import axios from 'axios'
import { Link } from 'react-router-dom';

const User = () => {
   
   const [tickets, setTickets] = useState([]);
   useEffect(() => {
     const fetchTicket =async()=>{
        const  user =await JSON.parse(localStorage.getItem('user'));
        const userId = user._id;
        try {
            const responce =await axios.get(`https://moviezone-q639.onrender.com/api/v1/user/${userId}`);
            setTickets(responce.data.tickets);
        } catch (error) {
            console.log("Error fetching", error);
        }
     }
     fetchTicket();
   }, [])
   
  return (
    <>
    <h1 className='text-4xl text-center my-10'>Booked Tickets</h1>
    {
      tickets.length ===0 ?
      <div className='m-10 text-xl'>
        <h2 className='text-center font-bold text-6xl text-gray-300'>No tickets booked yet.</h2>
        <div className='text-center mt-10'>
        <Link to="/" className=' bg-yellow-300 py-3 px-6 rounded-md hover:bg-yellow-400 font-bold'> Book Now</Link>
        </div>
      </div>
      :<div className='grid md:grid-cols-4 sm:grid-cols-2 my-5'>
        {
            tickets.map(ticket => (
               <TicketCard ticket={ticket}/>
            ))
        }

    </div>
    }
    
    </>
  )
}

export default User