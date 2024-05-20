
import logo from "../../../assets/logo.png";
import moment from 'moment';
const Header = () => {
    return (
        <div className="text-center py-3 mr-3 ">
         <img className="mx-auto" src={ logo} alt="" />
         <p className="font-poppins text-2xl text-orange-500">Journalism Without Fear or Favour</p>
         <p className="text-green-400 text-2xl">{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;