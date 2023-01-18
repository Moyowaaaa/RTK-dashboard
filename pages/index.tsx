import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LoginForm from "../components/LoginForm";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-screen flex">
        <div className="main w-11/12 mx-auto flex items-center justify-center lg:w-6/12 lg:mx-0">
          <div className=" w-full lg:p-4 lg:w-7/12">
            <LoginForm />
          </div>
        </div>

        <div className="hidden login-page w-6/12 lg:flex "></div>
      </div>
    </div>
  );
};

export default Home;
