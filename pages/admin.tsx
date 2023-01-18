import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import user from "../assets/images/userAvatar.svg";

import Link from "next/link";

const Admin: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <div className="w-full h-screen flex">
        <div className="main w-full flex gap-8 flex-col items-center justify-center text-sm lg:text-base lg:w-4/12 ">
          <Image src={user} />
          <div className="flex flex-col gap-6 w-full items-center">
            <div className="">
              <h2 className="font-[inter-bold] text-[#232D42] text-2xl text-center lg:text-3xl">
                Hi ! Austin Robertson
              </h2>
              <p className="font-[inter-light] text-[#8A92A6] text-xs text-center lg:text-sm">
                Enter your password to acess the admin.
              </p>
            </div>

            <div className="flex flex-col w-11/12 lg:w-8/12">
              <label className="font-[inter-light] text-[#8A92A6]">
                Password
              </label>
              <input
                className="p-1 rounded border-2 ouline-none border-[#3A57E8]"
                type="password"
              />

              <Link href="/dashboard">
                <button className="mx-auto w-max text-center py-2 mt-6 px-12 text-white bg-[#3A57E8] rounded cursor-pointer">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="signup-page w-8/12 hidden lg:block"></div>
      </div>
    </div>
  );
};

export default Admin;
