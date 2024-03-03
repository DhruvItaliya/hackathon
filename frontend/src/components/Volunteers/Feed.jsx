import React, { useState, useEffect } from 'react';
import {toast} from 'react-toastify';
function Feed({ cityName, hotelName, noOfMeals, status }) {
    const [activeDrives, setActiveDrives] = useState([]);
    const [completedDrives, setCompletedDrives] = useState([]);
    const consent=()=>{
        const choice=window.confirm("Are you sure you want to join the drive?");
        if(choice)
        {
        }
        else{
            
        }
    }
    useEffect(() => {
        const currentTime = new Date();
        
        // Function to generate card elements for active drives
        const generateActiveDrives = () => {
            const newActiveDrives = [];
            for (let i = 0; i < 4; i++) {
                const postTime = new Date(); // Replace this with the actual post time fetched from backend
                const timeDifference = currentTime - postTime;
                const elapsedMinutes = Math.floor(timeDifference / (1000 * 60));
                const timeElapsed = elapsedMinutes > 0 ? `${elapsedMinutes} minutes ago` : 'Just now';
                newActiveDrives.push(
                    <a key={i} href="#" className="block border-l-4 border-l-purple-500  rounded-lg p-4 shadow-2xl shadow-indigo-100 mb-6">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                            className="h-40 w-full rounded-md object-cover mb-2"
                        />
                        <div>
                            <p className="font-medium">City: {cityName}</p>
                            <p className="font-medium">Hotel: {hotelName}</p>
                            <p className="font-medium">No. of meals: {noOfMeals}</p>
                            <p className="font-medium">Posted: {timeElapsed}</p>
                            <button className='inline-flex text-white bg-purple-500 border-0 px-2 py-1 focus:outline-none hover:bg-purple-600 rounded my-1 text-md' onClick={consent}>Join drive</button>
                        </div>
                    </a>
                );
            }
            return newActiveDrives;
        };

        // Function to generate card elements for completed drives
        const generateCompletedDrives = () => {
            const newCompletedDrives = [];
            for (let i = 0; i < 4; i++) {
                // Replace this with the actual completion date fetched from backend
                const completionDate = new Date(); 
                const formattedCompletionDate = completionDate.toLocaleDateString('en-US');
                newCompletedDrives.push(
                    <a key={i} href="#" className="block border-l-4 border-l-purple-500 rounded-lg p-4 shadow-2xl shadow-indigo-100 mb-6">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                            className="h-40 w-full rounded-md object-cover mb-2"
                        />
                        <div>
                            <p className="font-medium">City: {cityName}</p>
                            <p className="font-medium">Hotel: {hotelName}</p>
                            <p className="font-medium">No. of meals: {noOfMeals}</p>
                            <p className="font-medium">Completed: {formattedCompletionDate}</p>
                        </div>
                    </a>
                );
            }
            return newCompletedDrives;
        };

        setActiveDrives(generateActiveDrives());
        setCompletedDrives(generateCompletedDrives());
    }, [cityName, hotelName, noOfMeals]);

    return sessionStorage.getItem('id')?(<div className="container mx-auto px-4">
     
            <h1 className="text-3xl font-bold text-black my-8">Active Drives</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {activeDrives}
            </div>

            <h1 className="text-3xl font-bold text-black my-8">Completed Drives</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {completedDrives}
            </div>
        </div>):toast.error("You are not logged in");
}

export default Feed;
