"use client";
import FormX, { FromXData } from "@/components/formx/formx";
import Inputx from "@/components/formx/inputx";
import React from "react";

const Page = () => {
  const formList: FromXData[] = [
    {
      columns: [
        {
          name: "first_name",
          label: "First Name",
          type: "text",
          errorText: "",
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          errorText: "",
        },
      ],
    },
    {
      columns: [
        {
          name: "select",
          label: "Select",
          type: "select",
          options: [
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
          ],
        },
      ],
    },
    {
      columns: [
        {
          name: "search",
          label: "Search",
          type: "search",
          options: [
            { label: "Option A", value: "1" },
            { label: "Option B", value: "2" },
            { label: "Option C", value: "3" },
            { label: "Option D", value: "4" },
          ],
        },
      ],
    },
  ];
  return (
    <div className="p-4">
      <FormX
        data={formList}
        handleSubmit={(data) => {}}
        hasCancel
        defaultStyle={{
          buttonRow: "justify-center gap-7",
        }}
      />
    </div>
  );
};

export default Page;
