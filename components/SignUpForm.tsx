import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SignUpForm: React.FC = () => {
  const router = useRouter()
  const [firstName, setFirstname] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phoneNo,setPhoneNo] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")


  


  return (
    <div className="flex flex-col lg:gap-4 py-12">
      <div className="flex flex-col gap-2 lg:gap-4 items-center">
        <h1 className="font-[inter-medium] text-2xl lg:text-3xl">Sign Up</h1>
        <p className="text-base lg:text-lg font-[inter-light] text-[#8A92A6]">
          Create your Hope UI account
        </p>
      </div>

      <form className="flex flex-col gap-2 py-2">
        <div className="w-full  flex flex-col gap-2 lg:gap-4 lg:justify-between lg:flex-row">
          <div className="flex flex-col w-full lg:w-6/12">
            <label className="font-[inter-light] text-[#8A92A6] py-2">
              First Name
            </label>
            <input
              className="p-1 rounded border-2 ouline-none border-[#3A57E8]"
              type="text"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full lg:w-6/12">
            <label className="font-[inter-light] text-[#8A92A6] py-2">
              Last Name
            </label>
            <input
              className="p-1 rounded border-2 ouline-none border-[#3A57E8]"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:gap-4 lg:justify-between lg:flex-row">
          <div className="flex flex-col w-full lg:w-6/12">
            <label className="font-[inter-light] text-[#8A92A6] py-2">
              Email
            </label>
            <input
              className="p-1 rounded border-2 ouline-none border-[#3A57E8]"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full lg:w-6/12">
            <label className="font-[inter-light] text-[#8A92A6] py-2">
              Phone No.
            </label>
            <input
              className="p-1 rounded border-2 ouline-none border-[#3A57E8]"
              type="text"
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:gap-4 lg:justify-between lg:flex-row">
          <div className="flex flex-col w-full lg:w-6/12">
            <label className="font-[inter-light] text-[#8A92A6] py-2">
              Password
            </label>
            <input
              className="p-1 rounded border-2 ouline-none border-[#3A57E8]"
              type="text"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full lg:w-6/12">
            <label className="font-[inter-light] text-[#8A92A6] py-2">
              Confirm password
            </label>
            <input
              className="p-1 rounded border-2 ouline-none border-[#3A57E8]"
              type="text"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="flex w-full flex flex-col items-center gap-2  text-sm lg:gap-4 lg:text-base">
          <div className="font-[inter-light] text-[#8A92A6]">
            <input type="checkbox" /> I agree with the terms of use
          </div>

      




          <button  className="mx-auto w-full text-center py-2 px-12 text-white bg-[#3A57E8] font-[inter-regular] rounded lg:w-max">
            Sign up
          </button>

          <p className="font-[inter-light]  text-[#232D42]">
            {" "}
            or sign up with other accounts?
          </p>

          <p className="font-[inter-light]  text-[#232D42] ">
            Already have an account?{" "}
            <Link href="/">
              <span className="text-[#3A57E8] cursor-pointer font-[inter-medium]">
                Sign in
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
