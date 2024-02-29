import React, { useState, useEffect } from "react";

const LeaderBoard = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        //axios.fetch().then().then().catch();
        setData([
            { name: "smit", type: "volunteer", city: "anand", badge: "golden", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "pqer", type: "hotel", city: "surat", badge: "platinum", point: 5 },
            { name: "abc", type: "volunteer", city: "ahmedabad", badge: "diamond", point: 456 }
        ]);

    }, []);

    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="flex-col w-4/5">
                    <p className="text-center h1 text-4xl font-bold mt-12">Leader Board</p>
                    <p className="text-center my-4 h4 text-xl mt-12">
                         Statistics of people who are enrolled in the activity of helping people
                    </p>
                    <div className="relative overflow-x-auto shadow-2xl backdrop-blur-sm sm:rounded-xl">
                        <table className="w-full border-l-4 border-r-4 border-r-purple-500 border-l-purple-500 text-lg text-left rtl:text-right text-gray-500 ">
                            <thead className="text-xl my-4  text-gray-700 uppercase bg-gray-50 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Type
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        City
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Badge
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Point
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length && data.map((ele, index) => (
                                    <tr key={index} className={`odd:bg-opacity-30 hover:bg-gray-200 hover:bg-opacity- even:bg-opacity-30 my-2`}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {ele.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {ele.type}
                                        </td>
                                        <td className="px-6 py-4">
                                            {ele.city}
                                        </td>
                                        <td className="px-6 py-4">
                                            {ele.badge}
                                        </td>
                                        <td className="px-6 py-4">
                                            {ele.point}
                                        </td>
                                    </tr>
                                ))}
                                {data.length <= 0 && (
                                    <tr colSpan="5">
                                        <td><h1 className="text-center"> Oops! No data available for now.</h1>
                                    </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaderBoard;
