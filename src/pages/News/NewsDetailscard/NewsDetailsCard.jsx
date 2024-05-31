import { FaStreetView } from "react-icons/fa";
const NewsDetailsCard = ({anews}) => {
    const {_id,title,image_url,details,thumbnail_url,total_view,rating,author}=anews;
    return (
        <div className="hero min-h-screen bg-base-200  ">
            
        <div className="hero-content flex-col lg:flex-auto self-start ">
        <h1 className="text-5xl font-bold ">Box Office News!</h1>
          <img src={image_url} className="max-w-sm rounded-lg shadow-2xl w-[500px] h-[400px] md:w-[500] md:h-[300]" />
          <div className="">
    
            <p className="py-6">{details}</p>
              <div>
                 <h1  className="text-2xl font-bold text-lime-600  flex">{total_view} <FaStreetView className="text-3xl"> </FaStreetView>view   </h1> 
              </div>
          
          </div>
        </div>
      </div>
    );
};

export default NewsDetailsCard;