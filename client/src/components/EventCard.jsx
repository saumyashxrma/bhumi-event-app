import React from "react";

const EventCard=({title,date,location})=>{
    return (
        <div className="bg-white shadow-md rounded-md border max-w-sm">
            <h2 className="text-xl font bold text-blue-600">{title}</h2>
            <p className="text-gray-700">{date}</p>
            <p className="text-gray-700">{location}</p>
        </div>
    )
}
export default EventCard;