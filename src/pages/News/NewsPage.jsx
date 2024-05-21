import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Rightsidenav from "../Shared/Rightsidenav/Rightsidenav";
import Navbar from "../Shared/Navbar/Navbar";



const NewsPage = () => {
    const {id}=useParams();
    return (
    
       <div>
<Header></Header>
<Navbar></Navbar>
            <div className="grid md:grid-cols-4">
            
           
            <div className="col-span-3" >
            <h3>new deyails</h3>
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