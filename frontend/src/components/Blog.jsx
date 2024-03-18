import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios';
import ConString from "../ConnectionString";

function Blog() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${ConString}get_blog_post`,
                    {
                        withCredentials: true,
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                );
                setBlogs(response.data.allBlogs)
            } catch (error) {
                console.error('Error fetching data:', error);
                toast.error(error.response.data.message);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        {blogs.map((blog,i) => (
                            <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="font-semibold title-font text-gray-700">{blog.topic}</span>
                                    <span className="mt-1 text-gray-500 text-sm">{new Date(blog.updatedAt).toLocaleString("en-US", { timeZone: "Asia/Kolkata", hour12: false })}</span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{blog.title}</h2>
                                    <p className="leading-relaxed">{blog.message}</p>
                                    <a target='_blank' href={blog.url} className="text-purple-500 inline-flex items-center mt-4">Read More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Blog
