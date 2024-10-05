"use client";
import useToaster from "@/components/reusables/toaster";
import UserUtils from "@/lib/utils/user-utils";
import useUserStore from "@/store/user-store";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
const HomeBtn = () => {
  const User = useUserStore((state) => state.User);
  const setUser = useUserStore((state) => state.setUser);
  const Toaster = useToaster((state) => state.Toaster);

  const checkIfSignedIn = async () => {
    const user = await UserUtils.fetchUser();
    if (user) {
      setUser(user);
    }
  };

  useEffect(() => {
    checkIfSignedIn();
  }, []);

  return (
    <div className="flex flex-col gap-2 mt-2">
      {User.id != "" && (
        <Link
          href={"/dashboard"}
          className="flex flex-row items-center bg-secondary px-4 py-4 rounded-md text-lg"
        >
          To Dashboard <ArrowRight />
        </Link>
      )}
      <p>
        {User.id != "" && "Or you can"}{" "}
        <Link
          href={"/auth/login"}
          className="hover:shadow-sm text-blue-500 hover:text-purple-600"
        >
          Login
        </Link>{" "}
        or{" "}
        <Link
          href={"/auth/signin"}
          className="hover:shadow-sm text-blue-500 hover:text-purple-600"
        >
          Signup
        </Link>
        {" ..."}
      </p>
    </div>
  );
};

export default HomeBtn;
