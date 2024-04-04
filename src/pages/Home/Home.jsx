import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div  className='font-bold font-poppins'>
                <Header></Header>
                <BreakingNews></BreakingNews>
                <Navbar></Navbar>
            <h1 className='text-4xl'>This is home</h1>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                    <div className='border'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                    <div className='lg:col-span-2 border-red-500'>
                        <h2>news comming soon</h2>
                    </div>
                    <div className='border border-black'>
                        <RightSideNav></RightSideNav>
                    </div>
                </div>

        </div>
    );
};

export default Home;