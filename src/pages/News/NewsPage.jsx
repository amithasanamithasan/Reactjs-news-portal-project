import {  useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Rightsidenav from "../Shared/Rightsidenav/Rightsidenav";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import NewsDetailsCard from "./NewsDetailscard/NewsDetailsCard";


const NewsPage = () => {
 const[anews ,setNewsess]=useState({})
 const{id}=useParams()

 const news= useLoaderData();
 console.log(news);




useEffect(()=>{
  const findnews = news?.find ( anews=> anews._id == id)
  console.log(findnews);
  setNewsess(findnews);

    },[])
   


    return (
    
      <div>
      <Header />
      <Navbar />
      <div> 
        
           
            {/* parent div */}
            <div className="grid lg:grid-cols-2 gap-6 justify-between">
         
         
    

            <div className="  w-[1500px]  grid grid-cols-2  " >
            <NewsDetailsCard anews={anews}></NewsDetailsCard>
            <div>
            <Rightsidenav></Rightsidenav>
            </div>
          
       
         </div>


          
            </div>
        </div>
    
     </div>

  

  );
};

export default NewsPage;