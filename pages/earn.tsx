import { Badge } from '@mantine/core'
import Head from 'next/head'
import React from 'react'
import { BiDollar, BiUserCheck } from 'react-icons/bi'
import CallToAction from '../components/public/CallToAction'
import { CLASS_URL } from '../utils/urls'

const Earn = () => {
  return (
    <>
      <Head>
        <title>Geleza - High School Extra Lessons Made Easy.</title>
        <meta
          name="description"
          content="Make money with Geleza. Earn up to $55 monthly, and also get a free account until December. T&Cs Apply."
        />
        <meta
          name="og:title"
          content="Geleza - High School Extra Lessons Made Easy."
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:description"
          content="Make money with Geleza. Earn up to $55 monthly, and also get a free account until December. T&Cs Apply."
        />
        <meta name="og:url" content="https://geleza.app" />
        <meta name="og:image" content="https://www.geleza.app/cover.png" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
        <meta name="og:image:type" content="image/png" />
        <meta name="og:image:alt" content="Geleza" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Geleza" />
        <meta name="twitter:creator" content="@Geleza" />

        <meta
          name="twitter:title"
          content="Geleza - High School Extra Lessons Made Easy."
        />
        <meta
          name="twitter:description"
          content="Make money with Geleza. Earn up to $55 monthly, and also get a free account until December. T&Cs Apply."
        />
        <meta name="twitter:image" content="https://www.geleza.app/cover.png" />
        <meta name="twitter:image:alt" content="Geleza" />
      </Head>

      <div className="bg-white w-full !text-gray-800">
        <div className="w-full mx-auto max-w-4xl py-16 flex items-center justify-center flex-col px-6">
          <Badge size="lg" className="bg-orange-500 text-white mt-5">
            Get paid $55 for 3 month
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-black mt-5">
            Get <span className="text-primary">Free Account</span> And Earn
            <span className="text-primary"> $55</span> Monthly
          </h1>
          <p className="text-center font-light text-xl mt-5">
            Recruit 20 Students and get a free account until December, and get
            paid $55 for 3 months. Only students are allowed to enter this
            promo.
          </p>
          <a target={'_blank'} href={CLASS_URL} className="btn px-20 mt-5">
            Create Account Now
          </a>
        </div>
      </div>

      <div className="pb-16 bg-white">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div className=" lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
              <img
                src="/images/cash.webp"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-1/2">
              <h2 className="text-4xl md:text-5xl  font-black text-gray-900">
                How It Works
              </h2>

              <Badge size="md" className=" text-black mt-2.5">
                You will need 20 subscribed students.
              </Badge>

              <p className="my-8 text-gray-600 ">
                Create account as a student. Then recruit your school mates to
                sign up as well and subscribe to the Student Pro plan for $10
                (ZAR 179) / month. Add their email addresses under your{' '}
                <span className="font-bold">"Earn Account"</span>, then we will
                approve if they are subscribed.
              </p>
              <div className="divide-y space-y-4 divide-gray-100 ">
                <div className="mt-8 flex gap-4 md:items-center">
                  <div className="w-12 h-12  gap-4 rounded-full bg-indigo-500 flex flex-col items-center justify-center">
                    <BiDollar color="white" />
                  </div>
                  <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-gray-700 ">
                      $55 for 3 months.
                    </h4>
                    <p className="text-gray-500 ">
                      Once you reach 20 subscribed students, we will pay you $55
                      for 3 months.
                    </p>
                  </div>
                </div>
                <div className="pt-4 flex gap-4 md:items-center">
                  <div className="w-12 h-12 gap-4 rounded-full bg-teal-700 flex flex-col items-center justify-center">
                    <BiUserCheck color="white" />
                  </div>
                  <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-gray-700 ">
                      Free Account
                    </h4>
                    <p className="text-gray-500 ">
                      You will also get a free account until December.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
    </>
  )
}

export default Earn
