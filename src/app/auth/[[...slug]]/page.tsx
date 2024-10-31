"use client";
import { useParams } from "next/navigation";
import React from "react";
import Login from "./components/login";
import Signup from "./components/signup";
import AuthImg from "@/public/authimg.jpg";
import Image from "next/image";
import Link from "next/link";

const Auth = () => {
  const { slug } = useParams();

  const isLogin = !slug || slug[0] == "login";

  return (
    <div className="flex flex-row w-full h-[100svh]">
      <div className="border border-r-2 w-0 md:w-1/2 lg:w-3/5 h-full">
        <Image
          src={AuthImg}
          alt="Auth Background Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-2 border border-r-2 w-full md:w-1/2 lg:w-2/5 h-full">
        <h2 className="font-sans">{isLogin ? "Login" : "Signup"}</h2>
        {isLogin ? <Login /> : <Signup />}
        {isLogin ? (
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link className="font-semibold text-blue-400" href="/auth/signup">
              Signup
            </Link>
          </p>
        ) : (
          <p className="text-sm">
            Already have an account?{" "}
            <Link className="font-semibold text-blue-400" href="/auth/login">
              Login
            </Link>
          </p>
        )}
      </div>
    </div>
  );
  // return <>{!slug || slug[0] == "login" ? <Login /> : <Signup />}</>;
};

export default Auth;
