import React, { useState, useEffect } from 'react';
import {toast} from 'react-toastify';
function Feed() {
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
        
        const getElapsedTime=(time)=>{
            const timeDifference = currentTime - postTime;
            const elapsedMinutes = Math.floor(timeDifference / (1000 * 60));
            return  elapsedMinutes > 0 ? `${elapsedMinutes} minutes ago` : 'Just now';
        }
        const postTime=new Date(); //will be replaced the time received from db
        setActiveDrives([
            {cityName:'anand',hotelName:'abc',noOfMeals:12,timeElapsed:getElapsedTime(postTime)},
            {cityName:'surat',hotelName:'marriot',noOfMeals:12,timeElapsed:getElapsedTime(postTime)},
            {cityName:'anand',hotelName:'abc',noOfMeals:12,timeElapsed:getElapsedTime(postTime)},
            {cityName:'anand',hotelName:'abc',noOfMeals:12,timeElapsed:getElapsedTime(postTime)},
        ]);
        setCompletedDrives([
            {cityName:"auranga bad",hotelName:"something",noOfMeals:22,completed:postTime.toLocaleDateString('en-US'),posted:true},
            {cityName:"delhi",hotelName:"something",noOfMeals:22,completed:postTime.toLocaleDateString('en-US'),posted:false},
            {cityName:"alsdf",hotelName:"asfdd",noOfMeals:22,completed:postTime.toLocaleDateString('en-US'),posted:true},
            {cityName:" ahmedabad",hotelName:"aads",noOfMeals:22,completed:postTime.toLocaleDateString('en-US'),posted:false},
        ])

    },[]);
     // Function to generate card elements for active drives
     const generateActiveDrives = (ele) => {
       return (
                <a  href="#" className="block border-l-4 border-l-purple-500  rounded-lg p-4 shadow-2xl shadow-indigo-100 mb-6">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                        className="h-40 w-full rounded-md object-cover mb-2"
                    />
                    <div>
                        <p className="font-medium">City: {ele.cityName}</p>
                        <p className="font-medium">Hotel: {ele.hotelName}</p>
                        <p className="font-medium">No. of meals: {ele.noOfMeals}</p>
                        <p className="font-medium">Posted: {ele.timeElapsed}</p>
                        <button className='inline-flex text-white bg-purple-500 border-0 px-2 py-1 focus:outline-none hover:bg-purple-600 rounded my-1 text-md' onClick={consent}>Join drive</button>
                    </div>
                </a>
          )
    };

    // Function to generate card elements for completed drives
    const generateCompletedDrives = (ele) => {
       
          return (      <a  href="#" className="block border-l-4 border-l-purple-500 rounded-lg p-4 shadow-2xl shadow-indigo-100 mb-6">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                        className="h-40 w-full rounded-md object-cover mb-2"
                   />
                    <div>
                        <p className="font-medium">City: {ele.cityName}</p>
                        <p className="font-medium">Hotel: {ele.hotelName}</p>
                        <p className="font-medium">No. of meals: {ele.noOfMeals}</p>
                        <p className="font-medium">Completed: {ele.completed}</p>
                        {!ele.posted && <button className='inline-flex text-white bg-purple-500 border-0 px-2 py-1 focus:outline-none hover:bg-purple-600 rounded my-1 text-md' onClick={consent}>Post drive</button>}
                    </div>
                </a>
          )
    };


    return sessionStorage.getItem('id')?(<div className="container mx-auto px-4">
     
            <h1 className="text-3xl font-bold text-black my-8">Active Drives</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {activeDrives.map((ele)=>generateActiveDrives(ele))}
            </div>

            <h1 className="text-3xl font-bold text-black my-8">Completed Drives</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {completedDrives.map((ele)=>generateCompletedDrives(ele))}
            </div>
        </div>):toast.error("You are not logged in");
}

export default Feed;
