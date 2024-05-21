import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Rightsidenav from "../Shared/Rightsidenav/Rightsidenav";
import Navbar from "../Shared/Navbar/Navbar";
import  img6  from "../../assets/editorsInsight1.png";



const NewsPage = () => {


    const {id}=useParams();
    console.log(id);
    return (
    
       <div>
<Header></Header>
<Navbar></Navbar>
            <div className="grid md:grid-cols-4">
            
           
            <div className="col-span-3" >
            <h3>new deyails</h3>
            <img src={img6} alt=""  />
     
            <p>{id}</p>
            </div>
            <div>
     <Rightsidenav></Rightsidenav>
            </div>
            </div>
       </div>
    );
};

export default NewsPage;