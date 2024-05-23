import {  useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Rightsidenav from "../Shared/Rightsidenav/Rightsidenav";
import Navbar from "../Shared/Navbar/Navbar";


const NewsPage = () => {


    const {id}=useParams();
    console.log(id);
    const news= useLoaderData();
    console.log(news);


   


    return (
    
      <div>
      <Header />
      <Navbar />
      <div>
     
        <h1>{id}</h1>
      </div>
      <div className="grid md:grid-cols-4 mb-4">
      <Rightsidenav />
      
      </div>
      <div>
        
       
      </div>
    </div>
  );
};

export default NewsPage;