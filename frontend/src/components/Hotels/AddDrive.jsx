import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
const AddDrive = () => {
  const validate = (e) => {
    e.preventDefault();
    const food = document.getElementById('food').value;
    if (food.length < 3) {
      toast.error("Food name should atleast have length 3")
      return false
    }


    //database
    toast.success('Drive has been added successfully');
    return true;

  }
  return (
    <div className='flex-col justify-center p-4 w-full '>
      <p className="text-center h1 text-4xl font-bold mt-12">Add Drive</p>
      <div className="w-full my-5 flex justify-center">
        <div className="w-screen flex justify-center bg-white rounded-lg shadow drop-shadow-2xl md:mt-0 sm:max-w-full md:max-w-full sm:w-4/5 md:w-4/5 xl:p-0  border-l-4 border-l-purple-600 border-r-4 border-r-purple-600 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Add drive details
            </h1>
            <form method='post' onSubmit={validate} className="space-y-4 md:space-y-6" action="#">


              <div className='md:grid md:grid-cols-2'>
                <label htmlFor="food" className="block mb-2 text-xl font-medium text-gray-900">Food </label>
                <input type="textt" name="food" id="food" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-xl rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" placeholder="Rice" required />
                {/* <p className='text-purple-500' onClick={appendField}>Add more</p> */}
              </div>

              <div className='md:grid md:grid-cols-2'>
                <label htmlFor="meals" className="block mb-2 text-xl font-medium text-gray-900">Meals</label>
                <input type="number" name="meals" id="meals" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-xl rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" placeholder="10" required />
              </div>
              <div className='md:grid md:grid-cols-2'>
                <label htmlFor="meals" className="block mb-2 text-xl font-medium text-gray-900">Upload image</label>
              </div>

              <input className="block h-10 w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none" multiple id="default_size" required type="file" />


              <div className="flex">
                <div className="flex items-center h-5">
                  <input id="helper-radio2" required aria-describedby="helper-radio-text" type="checkbox" name="myRad" value="volunteer" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" />
                </div>

                <div className="ms-2 text-xl">
                  <label htmlFor="helper-radio2" className="font-medium text-gray-900 ">Consent</label>
                  <p id="helper-radio-text" className="text-xs font-normal text-gray-500">
                    I hereby declare the food I will be distributing are fresh.
                  </p>
                </div>
              </div>


              <button type="submit" className="w-full text-white bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center">Submit Application</button>
              <p className="text-xl font-light text-gray-500">
                Need help? <Link to="/ContactUs" className="font-medium text-purple-600 hover:underline">Contact</Link>
              </p>
            </form>
          </div>
        </div></div>
    </div>
  )
}

export default AddDrive
