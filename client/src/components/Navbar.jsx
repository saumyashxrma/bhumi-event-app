import React from 'react'
import { Link } from 'react-router-dom'

function Navbar (){
    return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Bhumi</h1>
        <div className="space-x-4">
            <Link to="/" className='hover:underlline'>Home</Link>
            <Link to="/events" className='hover:underline'>Events</Link>
            <Link to="/donate" className='hover:underline'>Donate</Link>
            <Link to ="/feedback" className='hover:underline'>Feedbacl</Link>
            <Link to="/admin-login" className='hover:underline'>Admin</Link>
        </div>
    </nav>
    )
}

export default Navbar
