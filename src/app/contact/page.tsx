"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        { from_name: data.name, from_email: data.email, message: data.message },
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false);
            reset();
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative mx-auto w-full max-w-md px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5  sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-red-800 font-Montserrat">
              Contact Me
            </h1>
          </div>
          <div className="mt-8">
            <form action="" className="group" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-gray-600"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2.5 placeholder-gray-300 shadow shadow-gray-100 focus:border-gray-500 focus:outline-none valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
                  required
                  {...register("name")}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-gray-600"
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  {...register("email")}
                  id="email"
                  placeholder="you@company.com"
                  className="w-full rounded-md border border-gray-300 px-3 py-2.5 placeholder-gray-300 shadow shadow-gray-100 focus:border-gray-500 focus:outline-none valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
                  required
                  pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <span className="mt-2 hidden text-sm text-red-400">
                  Please enter a valid email address.{" "}
                </span>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-gray-600"
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  placeholder="Your Message"
                  className="w-full rounded-md border border-gray-300 px-3 py-2.5 placeholder-gray-300 shadow shadow-gray-100 focus:border-gray-500 focus:outline-none valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
                  required
                />
              </div>

              <div className="mb-6 flex flex-col">
                <button
                  type="submit"
                  disabled={showModal}
                  className="w-full rounded-md bg-red-700 px-3 py-4 text-white focus:bg-red-800 focus:outline-none hover:bg-red-800"
                >
                  Submit
                </button>
                {showModal && (
                  <h3 className="text-green-500 mx-auto font-bold">
                    Submitted with success
                  </h3>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
