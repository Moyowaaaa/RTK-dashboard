import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import MobileNav from "../../components/dashboard/MobileNav";
import dynamic from "next/dynamic";
import Image from "next/image";
import announcements from "../../assets/images/announcements.svg";
import StatsSection from "../../components/dashboard/StatsSection";
import ChartsSection from "../../components/dashboard/ChartsSection";
import DebitCard from "../../components/dashboard/DebitCardSection";
import Footer from "../../components/dashboard/Footer";
import { useGetUsersDashboardQuery } from "../../redux/features/authApiSlice";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../redux/features/authSlice";
import Loader from "../../components/Loader";

const Dashboard = () => {
  const router = useRouter();
  const Navbar = dynamic(() => import("../../components/dashboard/Navbar"));
  const Sidebar = dynamic(() => import("../../components/dashboard/Sidebar"));
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const {data} = useGetUsersDashboardQuery(router.query.id)
  const dispatch = useDispatch()

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const isLoading = useSelector((state:RootState) => state.auth.loading)


  if(data){
    dispatch(currentUser(data))
}

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  });

  return (
    <div className="flex flex-col bg-[#e4e7ec]">
      <MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu} />

      
      {isLoading ? (<Loader />) : (
         <div className="flex">
         <Sidebar />
         <div className="flex flex-col w-full  lg:w-10/12">
           <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} />
 
           <div className="jumbotron w-full  w-full text-white rounded-b-2xl py-4 px-6 ">
             <div className="flex-col flex h-full justify-between lg:flex-row">
               <div className="w-full lg:w-max">
                 <h1 className="text-2xl lg:text-4xl font-[inter-bold]">
                   Hello Devs !
                 </h1>
                 <p className="text-lg text-justify lg:text-xl font-[inter-regular]">
                   We are on a mission to help developers like you to build
                   beautiful projects for free.
                 </p>
               </div>
               <div className="announcement flex h-max gap-2 py-3 px-4 text-sm  items-center justify-center">
                 <Image src={announcements} />
                 <p className="text-center lg:text-left">Announcements</p>
               </div>
             </div>
           </div>
 
 
           <div>
 
       
           <StatsSection />
           <div className="flex flex-col lg:flex-row mt-[14rem] lg:mt-[7rem] lg:px-4 gap-4">
             <div className=" px-2 w-full  flex gap-4 flex-col  w-screen  lg:w-8/12">
               <div className=" w-full">
                 <ChartsSection />
               </div>
             </div>
 
             <div className=" flex flex-row flex-col w-screen  lg:w-4/12">
               <DebitCard />
             </div>
           </div>
         </div>
         <Footer />
       </div>
 
  
       </div>
      )}
     
    </div>
  );
};

export default Dashboard;
