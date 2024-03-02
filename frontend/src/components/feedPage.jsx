import React from 'react'
import { useEffect,useState } from 'react'
import FeedCard from './feedCard';
const FeedPage = () => {
    // const [data, setdata] = useState([]);
    const data=[
      {name:"Smit Dhimar",
      photo:"https://img.freepik.com/free-photo/abstract-design-with-colorful-patterns-nature-leaf-generated-by-ai_188544-15573.jpg?w=1380&t=st=1709237528~exp=1709238128~hmac=96a28e2fef7f1ffbdae67d3cd752069f0f74b2c5d4bc24610e7e6355882b9b58",
      cityName:"Anand",
      description:"this image has been taken from something called freepik.com and i am writing short description for the same , thank you for reading.",
      time: "9:03AM 23 Feb"},
      {name:"Smit Dhimar",
      photo:"https://img.freepik.com/free-photo/abstract-design-with-colorful-patterns-nature-leaf-generated-by-ai_188544-15573.jpg?w=1380&t=st=1709237528~exp=1709238128~hmac=96a28e2fef7f1ffbdae67d3cd752069f0f74b2c5d4bc24610e7e6355882b9b58",
      cityName:"Anand",
      description:"this image has been taken from something called freepik.com and i am writing short description for the same , thank you for reading.",
      time: "9:03AM 23 Feb"},
      {name:"Smit Dhimar",
      photo:"https://img.freepik.com/free-photo/abstract-design-with-colorful-patterns-nature-leaf-generated-by-ai_188544-15573.jpg?w=1380&t=st=1709237528~exp=1709238128~hmac=96a28e2fef7f1ffbdae67d3cd752069f0f74b2c5d4bc24610e7e6355882b9b58",
      cityName:"Anand",
      description:"this image has been taken from something called freepik.com and i am writing short description for the same , thank you for reading.",
      time: "9:03AM 23 Feb"},
      {name:"Smit Dhimar",
      photo:"https://img.freepik.com/free-photo/abstract-design-with-colorful-patterns-nature-leaf-generated-by-ai_188544-15573.jpg?w=1380&t=st=1709237528~exp=1709238128~hmac=96a28e2fef7f1ffbdae67d3cd752069f0f74b2c5d4bc24610e7e6355882b9b58",
      cityName:"Anand",
      description:"this image has been taken from something called freepik.com and i am writing short description for the same , thank you for reading.",
      time: "9:03AM 23 Feb"},
      {name:"Smit Dhimar",
      photo:"https://img.freepik.com/free-photo/abstract-design-with-colorful-patterns-nature-leaf-generated-by-ai_188544-15573.jpg?w=1380&t=st=1709237528~exp=1709238128~hmac=96a28e2fef7f1ffbdae67d3cd752069f0f74b2c5d4bc24610e7e6355882b9b58",
      cityName:"Anand",
      description:"this image has been taken from something called freepik.com and i am writing short description for the same , thank you for reading.",
      time: "9:03AM 23 Feb"},
      {name:"Smit Dhimar",
      photo:"https://img.freepik.com/free-photo/abstract-design-with-colorful-patterns-nature-leaf-generated-by-ai_188544-15573.jpg?w=1380&t=st=1709237528~exp=1709238128~hmac=96a28e2fef7f1ffbdae67d3cd752069f0f74b2c5d4bc24610e7e6355882b9b58",
      cityName:"Anand",
      description:"this image has been taken from something called freepik.com and i am writing short description for the same , thank you for reading.",
      time: "9:03AM 23 Feb"},
      {name:"Smit Dhimar",
      photo:"https://img.freepik.com/free-photo/abstract-design-with-colorful-patterns-nature-leaf-generated-by-ai_188544-15573.jpg?w=1380&t=st=1709237528~exp=1709238128~hmac=96a28e2fef7f1ffbdae67d3cd752069f0f74b2c5d4bc24610e7e6355882b9b58",
      cityName:"Anand",
      description:"this image has been taken from something called freepik.com and i am writing short description for the same , thank you for reading.",
      time: "9:03AM 23 Feb"}
    ]
    useEffect(()=>{
      
    },[]);
  return (
    <div className='grid p-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 transition'>
      {data.map((ele)=>(
        <FeedCard  name={ele.name} photo={ele.photo} cityName={ele.cityName} description={ele.description} time={ele.time}/>)
      )}
    </div>
  )
}
// there will be a id for each feedcard component and that will be further be added when the response data is generated
export default FeedPage
