"use client";
import FormX, { FromXData } from "@/components/formx/formx";
import Inputx from "@/components/formx/inputx";
import React from "react";

const Page = () => {
  const formList: FromXData[] = [
    {
      columns: [
        {
          name: "Name",
          label: "Name",
          type: "text",
          errorText: "",
        },
      ],
    },
  ];
  return (
    <div className="p-4">
      <FormX data={formList} handleSubmit={(data) => {}} />
    </div>
  );
};

export default Page;
