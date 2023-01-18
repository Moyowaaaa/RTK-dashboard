import React from "react";
import Image from "next/image";
import debitCard from "../../assets/images/Card.svg";
import cart from "../../assets/images/cart.svg";

// import bag from '../../assets/images/bag.svg'
import bag from "../../assets/images/bag.png";

import upArrow from "../../assets/images/upArrow.svg";
import activityRounded from "../../assets/images/roundedActivity.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const DebitCard: React.FC = () => {
  const userData = useSelector((state: RootState) => state.auth.userData);

  let lifetimeSales = userData[0]?.lifetime_sales
    ?.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const activities = [
    { name: "$2400, Purchase", date: "11 JUL 8:10 PM" },
    { name: "New order #8744152", date: "11 JUL 11 PM" },
    { name: "Affilate Payout", date: "11 JUL 7:64 PM" },
    { name: "New user added", date: "11 JUL 1:21 AM" },
    { name: "Product added", date: "11 JUL 4:50 AM" },
  ];
  return (
    <div className="flex w-full  flex-col gap-6 ">
      <div className="flex flex-col bg-[white] rounded-md shadow-md">
        <div className="rounded-md card-hero py-16  h-[20rem] flex flex-col items-center justify-center">
          {/* <Image src={debitCard} /> */}
        </div>

        <div className="py-4  px-4">
          <div className="flex gap-4">
            <div className="flex gap-2">
              <Image src={bag} alt="bag" />
              <div className="flex flex-col">
                <p>1153</p>
                <p className="text-sm text-[#8A92A6] font-[inter-light]">
                  Products
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <Image src={cart} />
              <div className="flex flex-col">
                <p>81K</p>
                <p className="text-sm text-[#8A92A6] font-[inter-light]">
                  Order Saved
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between  my-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-lg text-[#232D42] font-[inter-medium]">
                {lifetimeSales}
              </h1>
              <p className="text-[#08B1BA] font-[inter-regular]">
                Life time sales
              </p>
            </div>
          </div>

          <div className="px-6 flex justify-between pb-3">
            <button className="text-white rounded py-2 px-4 lg:px-6 bg-[#3A57E8]">
              View Project
            </button>
            <button className="text-white rounded py-2 px-6 bg-[#08B1BA]">
              Analytics
            </button>
          </div>
        </div>
      </div>

      <div className="flex py-6 bg-[white] my-4 py-4 rounded-md shadow-md">
        <div className="w-6/12 border-r-2 border-r-[#E9ECEF] ">
          <h1 className="text-center text-2xl font-medium font-[inter-regular]">
            {userData[0]?.web_visitors?.toLocaleString()}{" "}
          </h1>
          <p className="text-center text-[#8A92A6] ">Website Visitors</p>
        </div>

        <div className="w-6/12 border-l-2 border-l-[#E9ECEF]">
          <h1 className="text-center text-2xl font-medium font-[inter-regular]">
            {userData[0]?.new_customers?.toLocaleString()}
          </h1>
          <p className="text-center text-[#8A92A6]">New Customers</p>
        </div>
      </div>

      <div className=" py-4  bg-[white] mb-4 flex flex-col gap-2 rounded-md px-6 text-[#232D42] shadow-md">
        <h2 className="text-xl font-semibold">Activity overview</h2>

        <div className="flex items-center text-[#8A92A6]">
          <Image src={upArrow} />
          <h1>16% this month</h1>
        </div>

        {activities.map((activity, index) => (
          <div className="flex gap-2 py-2 " key={index}>
            <Image src={activityRounded} className="self-start" />

            <div className="flex flex-col gap-2">
              <h1 className=" text-[#232D42]">{activity.name}</h1>
              <p className="text-[#8A92A6]">{activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebitCard;
