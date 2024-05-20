import Header from "../Shared/Header/Header";
import LeftsideNav from "../Shared/LeftsideNav/LeftsideNav";
import Navbar from "../Shared/Navbar/Navbar";
import Rightsidenav from "../Shared/Rightsidenav/Rightsidenav";
import BreakingNews from "./BreakingNews/BreakingNews";


const Home = () => {
    return (
        <div> 
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           
            {/* parent div */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 justify-between">
            <div className="border">
             <LeftsideNav></LeftsideNav>
            </div>

            <div className=" md:grid-cols-2 border ">
         <h1 className="text-4xl ">News comming soon.....</h1>
            </div>

            <div className="border  border-x-fuchsia-500   border-y-fuchsia-500">
            <Rightsidenav></Rightsidenav>
            </div>
            </div>
        </div>
    );
};

export default Home;