"use client";

import { Button, Card, Textarea, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { toast } from "react-toastify";

type Form = {
  name: string;
  surname: string;
  subject: string;
  email: string;
  message: string;
};
const HelpForm = () => {
  const [form, setForm] = useState<Form>({
    name: "",
    surname: "",
    email: "",
    message: "",
    subject: "",
  });

  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (
      form.email &&
      form.subject &&
      form.name &&
      form.surname &&
      form.message
    ) {
      setLoading(true);
      setTimeout(() => {
        toast.success("Thank you. We will get back to you!");
      }, 3000);
    } else {
      toast.error("Please fill all the required fields");
    }
  };

  const inputStyle = {
    input: {
      background: "#fff",
      borderColor: "white",
      color: "#111",
    },
    label: {
      color: "white",
    },
    placeholder: {
      color: "white",
    },
  };

  return (
    <div className="bg-dark">
      <div className="w-full max-w-6xl mx-auto px-5 py-20">
        <div className="mb-8 flex items-center justify-center">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
        <h1 className="text-center text-gray-100  md:text-5xl lg:text-6xl text-3xl font-black">
          Let's Get In Touch
        </h1>
        <p className="text-center text-gray-100 mt-5 text-xl">
          Do you have any questions or inquiries? We're here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <Card className="p-10 text-dark">
            <h1 className="font-bold text-2xl">Where to find us</h1>
            <hr className="w-[45%] border-primary mt-2 mb-5" />
            <p>
              Geleza is a product of Reavize Enterprises, a global digital
              software company.
            </p>

            <h1 className="mt-6 mb-3 font-bold text-dark">Find us on...</h1>
            <div className="flex flex-wrap gap-3 items-center mb-6">
              <a
                className="bg-gradient-to-br from-blue-700 to-purple-700 px-10 py-2.5 flex items-center gap-3 font-bold text-white"
                target="_blank"
                href="https://www.tiktok.com/@geleza_app"
              >
                <FaTiktok size={20} />
                TikTok
              </a>
              <a
                className="bg-gradient-to-br from-pink-700 to-purple-700 px-10 py-2.5 flex items-center gap-3 font-bold text-white"
                target="_blank"
                href="https://www.instagram.com/geleza_app/"
              >
                <FaInstagram size={20} />
                Instagram
              </a>
              <a
                className="bg-primary px-10 py-2.5 flex items-center gap-3 font-bold text-white"
                target="_blank"
                href="https://twitter.com/geleza_app"
              >
                <FaTwitter size={20} />
                Twitter
              </a>
              <a
                className="bg-blue-600 px-10 py-2.5 flex items-center gap-3 font-bold text-white"
                target="_blank"
                href="https://www.facebook.com/gelezaapp"
              >
                <FaFacebook size={20} />
                Facebook
              </a>
            </div>

            <p>
              For business and related inquiries, please contact us on
              support@geleza.app or accounts@geleza.app.
            </p>
            <br />
            <br />
            <a
              className="btn shadow-none bg-white border-2 border-gray-800 rounded-xl text-gray-900"
              href="https://classroom.geleza.app/dashboard"
              target="_blank"
            >
              Go to class
            </a>
          </Card>
          <Card className="bg-primary p-10">
            <h1 className="font-bold text-2xl text-white">Talk to us</h1>
            <hr className="w-[45%] border-white mt-2 mb-5" />
            <div className="grid grid-cols-2 gap-5 mb-5">
              <TextInput
                value={form.name}
                required
                label="First name"
                styles={inputStyle}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />
              <TextInput
                value={form.surname}
                required
                label="Last name"
                styles={inputStyle}
                onChange={(e) =>
                  setForm({
                    ...form,
                    surname: e.target.value,
                  })
                }
              />
            </div>
            <TextInput
              value={form.email}
              required
              styles={inputStyle}
              label="Email Address"
              className="mb-5"
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />
            <TextInput
              value={form.subject}
              required
              styles={inputStyle}
              label="Subject"
              className="mb-5"
              onChange={(e) =>
                setForm({
                  ...form,
                  subject: e.target.value,
                })
              }
            />
            <Textarea
              value={form.message}
              required
              styles={inputStyle}
              label="Message"
              className="mb-5"
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
            />
            <Button
              className="bg-blue-500 px-10 border border-white"
              loading={loading}
              size="lg"
              onClick={submit}
            >
              Submit
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HelpForm;
