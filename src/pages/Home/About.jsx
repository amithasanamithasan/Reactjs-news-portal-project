import fb from "../../assets/icon-fb.png";
import google from "../../assets/icon-google.png";
import twitter from "../../assets/icon-twitter.png";
import insta from "../../assets/icon-insta.png";
import youtub from "../../assets/icon-youtube.png";
import Navbar from "../Shared/Navbar/Navbar";


const About = () => {
    
    return (
        <div className="card-body bg-emerald-200">
            <Navbar></Navbar>
        <div className="col-span-12 bottom-3 stroke-lime-400  px-16  mt-8 ">
    <div className="columns-md">
        <h3 className ="border-b-4 text-4xl">About Us</h3>
            <img src="" align="left" /><span className="name">
                <font className="text-3xl text-green-600">Journalist</font>
                <font color="#fff">MAG</font></span>
            <p className="text-3xl text-teal-500">
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore
                 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                   in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.</p>
        </div>
        <div className="col-md-4">
        <div className="col-md-12">
            <h3><span className="text-2xl">Quick Links</span></h3>
            </div>    
            <div className="col-md-6">
            <div className="row-auto">
            <ul className="navbar">
    <li><a className="text-2xl">POLITICS</a></li>
    <li><a className="text-2xl">BUSINESS</a></li>
    <li><a className="text-2xl">ENTERTAINMENT</a></li>
    <li><a className="text-2xl">TECHNOLOGY</a></li>
        </ul> 
                </div>
            </div>
            <div className="col-md-6">
        <div className="row">
        <ul className="bg-neutral-300 border-spacing-2">		
        <li><a className="text-yellow-400 text-2xl" >SPORTS</a></li>
			<li><a className="text-lime-600 text-2xl">TRAVEL</a>
        </li><li className="text-pink-400 text-2xl"><a >STYLE</a></li>
		<li><a className="text-sky-800 text-2xl">HEALTH</a></li>	</ul> 
                </div>
            </div>    
        </div>
        <div className="row-span-6 flex">
        <h3 className=" mb-4"></h3>
       <h4 className="text-2xl mb-2">Follow us at:</h4>
 <img src={fb} />
<img src={google}/>
<img src={twitter}/>
<img src={insta} />
<img src= {youtub}/>
<span className="glyphicon glyphicon-arrow-up"></span>
        </div>
</div>
</div>

    );
};

export default About;