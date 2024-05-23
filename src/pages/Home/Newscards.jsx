import { Link } from "react-router-dom";


const Newscards = ({news}) => {
    const {_id,title,image_url,details,thumbnail_url,total_view,rating,author}=news;
    return (
        <div className="card card-compact  mb-4 bg-base-100 shadow-xl">
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {
          details.length > 200 
            ? (
                <p>
                  {details.slice(0, 200)}...
                  <Link to={`/news/${_id}`} className="text-orange-300">
                    Read more
                  </Link>
                </p>
              ) 
            : <p>{details}</p>
        }
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary"></button> */}
          </div>
        </div>
      </div>
    );
};

export default Newscards;