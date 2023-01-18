import { NextPage } from "next";
import React from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const SignUp: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <div className="w-full h-screen flex">
        <div className="signup-page w-6/12 hidden lg:block"></div>

        <div
          className="w-full  flex items-center justify-center lg:w-6/12 "
          id="signup-page"
        >
          <div className=" lg:w-8/12">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
