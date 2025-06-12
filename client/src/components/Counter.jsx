import  React, {useState} from 'react';

const Counter =()=>{
    const [count,setCount] = useState(0);
    return (
        <div className="text-center mt-10">
            <h2 className='text-lg font-semibold'>Tickets :{count}</h2>
            <button 
            onClick={()=>setCount(count+1)}
            className='mt-2 px-4 py-2 bg-blue-500 text-white rounder-md hover:bg-blue-600'>
                Buy Ticket
            </button>
        </div>
    )
}

export default Counter;