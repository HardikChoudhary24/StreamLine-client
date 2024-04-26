"use client";
import { FcGoogle } from "react-icons/fc";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaCircleExclamation } from "react-icons/fa6";
import { register } from "module";
import { usePathname, useRouter } from "next/navigation";
const schema = z.object({
  email: z.string().email("Email address must be a valid email address."),
  password: z
    .string()
    .min(8, "Your password must contain 8 or more characters."),
  username: z.string().optional(),
});

type FormFields = z.infer<typeof schema>;

type formFields = {
  label: string;
  registerName: "email" | "password" | "username";
};
const signInFields: formFields[] = [
  { label: "Email", registerName: "email" },
  { label: "Password", registerName: "password" },
];
const signUpFields: formFields[] = [
  { label: "Username", registerName: "username" },
  ...signInFields,
];

const AuthenticationModal = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [formFields, setFormFields] = useState<
    | { label: string; registerName: "email" | "password" | "username" }[]
    | undefined
  >(undefined);

  useEffect(() => {
    if (pathName.includes("/sign-up")) {
      setFormFields(signUpFields);
    } else {
      setFormFields(signInFields);
    }
  }, [pathName]);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = (formData) => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-start items-start rounded-xl bg-white px-5 py-10 w-[75%] sm:w-[45%] md:w-[35%] gap-y-4">
      <div className="w-full">
        <p className="font-semibold text-2xl">
          {pathName === "/sign-up" ? "Sign Up" : "Sign In"}
        </p>
        <span className="font-normal text-[#555454]">
          to continue to StreamLine
        </span>
      </div>
      <button className="border border-[#d8d6d6] rounded-md py-2 px-2 w-full ">
        <div className="flex justify-center items-center gap-3">
          <FcGoogle />
          <span className="text-sm font-medium">Continue with Google</span>
        </div>
      </button>
      <div className="flex justify-between items-center gap-2 w-full">
        <hr className="w-full" />
        <span className="text-xs ">or</span>
        <hr className="w-full" />
      </div>
      <form
        action=""
        className="flex flex-col justify-start items-start gap-y-6 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        {formFields?.map((formField) => {
          return (
            <div
              className="flex flex-col justify-start items-start w-full gap-y-1"
              key={formField.label}
            >
              <label
                htmlFor={formField.registerName}
                className="text-[#302f2f] text-sm font-medium w-full"
              >
                {formField.label}
              </label>
              <input
                type={formField.registerName==="password"?"password":"text"}
                id={formField.registerName}
                className={`text-sm rounded-md outline-none border border-1 border-[#d8d6d6] text-black px-2 w-full py-2 ${
                  errors[formField.registerName]?.message
                    ? "border-red-500"
                    : ""
                }`}
                {...register(formField.registerName)}
              />
              {errors[formField.registerName]?.message && (
                <div className="flex items-center gap-x-2">
                  <FaCircleExclamation color="#eb5555" />
                  <span className="text-red-500 text-xs">
                    {errors[formField.registerName]?.message}
                  </span>
                </div>
              )}
            </div>
          );
        })}
        <button
          className="rounded-md bg-black font-medium text-xs py-2 text-white w-full"
          type="submit"
        >
          {pathName === "/sign-up" ? "CONTINUE" : "LOG IN"}
        </button>
      </form>
      <div className="flex justify-start items-center gap-x-1">
        <p className="text-[#555454] text-xs">Have an account?</p>
        <span
          className="text-xs font-medium cursor-pointer"
          onClick={() =>
            router.push(pathName === "/sign-up" ? "/sign-in" : "/sign-up")
          }
        >
          {pathName === "/sign-up" ? "Sign in" : "Sign up"}
        </span>
      </div>
    </div>
  );
};

export default AuthenticationModal;
