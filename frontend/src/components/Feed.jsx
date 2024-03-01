import React, { useState, useEffect } from 'react';

function Feed({ cityName, hotelName, noOfMeals, status }) {
    const [activeDrives, setActiveDrives] = useState([]);
    const [completedDrives, setCompletedDrives] = useState([]);

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
                    <a key={i} href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100 mb-6">
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
                    <a key={i} href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100 mb-6">
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

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-black my-8">Active Drives</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {activeDrives}
            </div>

            <h1 className="text-3xl font-bold text-black my-8">Completed Drives</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {completedDrives}
            </div>
        </div>
    );
}

export default Feed;
