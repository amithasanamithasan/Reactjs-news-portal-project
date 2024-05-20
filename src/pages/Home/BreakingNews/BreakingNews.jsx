import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
          <button type="button" className="text-white bg-gradient-to-br
           from-pink-500 to-orange-400 hover:bg-gradient-to-bl 
           focus:ring-4 focus:outline-none focus:ring-pink-500
            hover:via-red-900 dark:focus:ring-pink-900 font-medium 
            rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Latest_News</button>
    <Marquee pauseOnHover speed={70} className="text-red-400 font-poppins font-semibold">
   <Link className="mr-7" to="/"> ইরানের প্রেসিডেন্ট ইব্রাহিম রাইসিকে বহনকারী হেলিকপ্টারটি পাওয়া যাওয়ার সংবাদ প্রকাশ করেছে দেশটির স্থানীয় সংবাদমাধ্যম। কিন্তু প্রেসিডেন্ট রাইসি এবং অন্যান্যদের অবস্থা সম্পর্কে কোনো তথ্য প্রকাশ করা হয়নি বলে জানিয়েছে বার্তাসংস্থা রয়টার্স।</Link>
   <Link className="mr-7"to="/"> দেশটা এখন মগের মুল্লুকে পরিণত হয়েছে বলে মন্তব্য করেছেন বিএনপি মহাসচিব মির্জা ফখরুল ইসলাম আলমগীর।.</Link>
   <Link className="mr-7" to="/">  কালশীতে পুলিশ-অটোরিকশা চালকদের ধাওয়া পাল্টা ধাওয়া</Link>
           </Marquee>
        </div>
    );
};

export default BreakingNews;