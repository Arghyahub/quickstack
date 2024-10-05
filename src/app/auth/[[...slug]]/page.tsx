"use client";
import { useParams } from "next/navigation";
import React from "react";

const Auth = () => {
  const { slug } = useParams();
  return (
    <>
      {slug?.length > 0 && slug[0] == "login" ? <form></form> : <form></form>}
    </>
  );
};

export default Auth;
