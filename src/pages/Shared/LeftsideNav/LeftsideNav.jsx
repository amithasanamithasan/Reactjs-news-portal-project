import { MdOutlineSportsSoccer } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import moment from 'moment';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  category1  from "../../../assets/1.png";
import  category2  from "../../../assets/2.png";
import  category3  from "../../../assets/3.png";

const LeftsideNav = () => {
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
  fetch('categories.json')
  .then(res=> res.json())
  .then(data=> setCategories(data))


    }, [])



    return (
       <div>
 <h2 className="uppercase text-2xl font-serif text-lime-500 text-center ">All Caterogy</h2>
 <div className="border-collapse border-spacing-2 rounded-xl space-y-4">
   <h3 className="uppercase text-center py-11 font-serif  text-slate-400 text-3xl" >National_News</h3>
    {
        categories.map(categori=><Link className=" block ml-4 text-xl gap-10 text-blue-700"
         key={categori.id} 
         to={(`/categori/${categori.id}`)}>
         {categori.name} 
        </Link>)
    }
    <div>
        
     <h1>  <img src={category1} alt="" /> 
     Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
     <p className="flex gap-2 px-2 p-3 m-2">
    <MdOutlineSportsSoccer className="text-2xl">
    </MdOutlineSportsSoccer>sports</p> 
 <p className="flex "><CiCalendarDate className="m-1 text-3xl"></CiCalendarDate> 
          {moment().format("dddd, MMMM D YYYY ")} </p> 



     <h1>  <img src={category2} alt="" />
      Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
     <p className="flex gap-2 px-2 p-3 m-2"> 
     <MdOutlineSportsSoccer className="text-2xl">
        </MdOutlineSportsSoccer>sports</p> 
     <p className="flex ">
        <CiCalendarDate className="m-1 text-3xl"> </CiCalendarDate> 
        {moment().format("dddd, MMMM D YYYY ")} </p> 


     <h1>  <img src={category3} alt="" /> 
     Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
   <p className="flex gap-2 px-2 p-3 m-2">
     <MdOutlineSportsSoccer className="text-2xl">
        </MdOutlineSportsSoccer>sports</p> 
   <p className="flex"> <CiCalendarDate className="m-1 text-3xl"></CiCalendarDate> 
    {moment().format("dddd, MMMM D YYYY ")} </p> 
    </div> 
   </div>
 </div>
       
    );
};

export default LeftsideNav;