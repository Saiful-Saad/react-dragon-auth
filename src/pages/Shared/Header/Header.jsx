import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center my-10'>
           <img src={logo} alt="" />
           <p className="text-lg text-[#706F6F]">Journalism Without Fear or Favour</p>
           <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;