import react from "react";
import { useEffect, useState } from "react";

const UserProfile = (props) => {
    const [data, setdata] = useState(null);

    useEffect(() => {
        //fetch data using session id
        setdata({ name: "smit", role: "volunteer", mobile: 9586064225, email: "smitdhimar@gmail.com", age: 19, city: "bardoli", badges: "Diamond", points: 45 });
    }, []);
    return (
        <div className="w-full flex items-center my-4  justify-center">
           {data!==null&& <div className="bg-white max-w-full w-4/5  shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <span className="text-3xl mx-3 leading-6 font-medium text-gray-900">
                        {data.name.toUpperCase()}
                    </span>
                    <span className="text-gray-500">-{data.role}</span>
                    {/* <p className="mt-1 max-w-2xl text-xl text-gray-500">
                    Details and informations about user.
                </p> */}
                </div>
                <div className="border-t border-gray-200">

                    <dl>
                        <div className="flex justify-center ">
                            <div className="  mt-8 sm:mt-12 w-4/5">
                                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                                    <div className="flex flex-col rounded-lg bg-purple-50 px-4 py-8 text-center">
                                        <dt className="order-last text-lg font-medium text-gray-500">Badge</dt>

                                        <dd className="text-4xl font-extrabold text-purple-600 md:text-5xl">{data.badges}</dd>
                                    </div>

                                    <div className="flex flex-col rounded-lg bg-purple-50 px-4 py-8 text-center">
                                        <dt className="order-last text-lg font-medium text-gray-500">Points</dt>

                                        <dd className="text-4xl font-extrabold text-purple-600 md:text-5xl">{data.points}</dd>
                                    </div>
                                </dl>
                            </div>

                        </div>
                        <div className="bg-gray-50 my-2 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl font-medium text-gray-500">
                                Email address
                            </dt>
                            <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.email}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl font-medium text-gray-500">
                                Contact number
                            </dt>
                            <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.mobile}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl font-medium text-gray-500">
                                City
                            </dt>
                            <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.city}
                                </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl font-medium text-gray-500">
                                Age
                            </dt>
                            <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.age}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>}
            {data===null &&  <span className="text-3xl m-3 leading-6 font-medium text-gray-900">
                        Oops No data found
                    </span>}
        </div>);
};
export default UserProfile;
