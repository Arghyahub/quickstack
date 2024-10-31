"use client";
import FormX, { FromXData } from "@/components/formx/formx";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  async function handleSubmit(data: Record<string, string>) {
    console.log(data);
  }

  const data: FromXData[] = [
    {
      columns: [
        {
          type: "text",
          name: "email",
          placeholder: "Email",
        },
      ],
    },
    {
      columns: [
        {
          type: "password",
          name: "password",
          placeholder: "Password",
        },
      ],
    },
  ];

  return (
    <FormX
      row={data}
      handleSubmit={handleSubmit}
      hasCancel={false}
      submitText="Login"
      defaultStyle={{
        buttonRow: "justify-center mt-4",
        form: "w-full gap-0 max-w-[350px] mb-4",
      }}
    />
  );
};

export default Login;
