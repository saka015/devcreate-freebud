import "../styles/Home.css";
import banner from '../assets/banner.png'

import Button from "../components/Button";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <>
    <div className="flex mt-24 min-h-screen">
    <div className="w-1/2 p-4" >
      <h1 className="mt-20 text-blue-500 font-bold text-6xl text-center">
        Freelance Marketplace for Students
      </h1>
      <div className="flex justify-center mt-10">
        <button className='w-48 bg-blue-200 rounded-3xl p-3'>Explore</button>
      </div>
      </div>
      <div class="w-1/2 p-4">
       <img width='600' className="rounded-[70px] m-" src="https://cdn.dribbble.com/users/2401141/screenshots/5487982/media/9a946a4bf36643b0b9c7ece0eb478f83.gif" alt="" />
      </div>
      </div>
      <div className="mx-20 flex justify-center ">
        <img className="rounded-3xl mt-18 " width='1100' src={banner} alt="" />
      </div>
      
      <Hero/>
      </>
  );
};

export default Home;
