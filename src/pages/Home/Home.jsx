import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftsideNav from "../Shared/LeftsideNav/LeftsideNav";
import Navbar from "../Shared/Navbar/Navbar";
import Rightsidenav from "../Shared/Rightsidenav/Rightsidenav";
import BreakingNews from "./BreakingNews/BreakingNews";
import Newscards from "./Newscards";


const Home = () => {
   const news=useLoaderData()
   console.log(news);



    return (
        <div> 
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           
            {/* parent div */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 justify-between">
            <div className="border   border-x-fuchsia-500   border-y-fuchsia-500">
             <LeftsideNav></LeftsideNav>
            </div>

            <div className=" md:grid-cols-3 max-w-3xl  ">
       {
        news.map(aNews=><Newscards key={aNews.id} news={aNews}></Newscards>)
       }
            </div>

            <div className="">
            <Rightsidenav></Rightsidenav>
            </div>
            </div>
        </div>
    );
};

export default Home;