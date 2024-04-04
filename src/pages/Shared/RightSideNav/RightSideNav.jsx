import { FaGoogle, FaGithub,FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
import Qzone1 from '../../../assets/qZone1.png'

import Qzone2 from '../../../assets/qZone2.png'
import Qzone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div className="p-">

        
<div className="p-5 space-y-5">
          <h2 className='text-4xl font-semibold'>Login With</h2>
          <button className="btn w-full"><FaGoogle></FaGoogle>Login with Google</button>
          
          <button className="btn w-full"><FaGithub />Login with Github</button>
        </div>

        
        <div className="p-4  border">
          <h2 className='text-4xl mb-5 font-semibold'>Find on us</h2>
         <a className="no-underline flex border p-3 rounded-t-lg " href="">
            <FaFacebookF className="mr-4"></FaFacebookF>
            Facebook
         </a>
         <a className="no-underline flex border-x p-3  " href="">
            <FaTwitter className="mr-4"></FaTwitter>
            Twitter
         </a>
         <a className="no-underline flex border p-3 rounded-b-lg  " href="">
            <FaInstagram className="mr-4"></FaInstagram>
           Instagram
         </a>
        </div>

        <div className="p-5 space-y-5">
          <h2 className='text-4xl font-semibold'>Q Zone</h2>
         <img src={Qzone1} alt="" />
         <img src={Qzone2} alt="" />
         <img src={Qzone3} alt="" />
        </div>


        </div>
        
       
    );
};

export default RightSideNav;