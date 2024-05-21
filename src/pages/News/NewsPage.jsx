import {  useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Rightsidenav from "../Shared/Rightsidenav/Rightsidenav";
import Navbar from "../Shared/Navbar/Navbar";
import  img7  from "../../assets/editorsInsight2.png";
import  img8  from "../../assets/bg1.png";

import  img6  from "../../assets/editorsInsight1.png";


const NewsPage = () => {


    const {id}=useParams();
    console.log(id);
    return (
    
       <div>
<Header></Header>
<Navbar></Navbar>
            <div className="grid md:grid-cols-4 mb-4">
            
           
            <div className="col-span-3 gap-4 mb-4" >
            <h3>new deyails</h3>
            <img src={img6} alt=""  />
            <h1>The latest news, videos, and discussion topics on mobile developer apps published, updated,
               or announced, plus the latest news from the app stores.</h1>
            <img src={img7} alt=""  />
            <h1>A news magazine is a typed, printed, and published magazine, radio, or television program, usually published weekly, consisting of articles about current events. News magazines generally discuss stories in greater depth than newspapers or newscasts do, and
               aim to give the consumer an understanding of the important .</h1>
            <img src={img8} alt=""  />
    <h1>Find the latest Graphic Design news from WIRED. See related science and technology articles, 
       photos, slideshows and videos.</h1>
            </div>
            <div>
     <Rightsidenav></Rightsidenav>
            </div>
            </div>
       </div>
    );
};

export default NewsPage;