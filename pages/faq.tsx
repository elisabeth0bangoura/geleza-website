import { Accordion } from '@mantine/core'
import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import React from 'react'
import Subjects from '../components/homepage/Subjects'
import CallToAction from '../components/public/CallToAction'
import directus from '../utils/directus'
import { CLASS_URL } from '../utils/urls'

const Faq = ({ faqs }: any) => {
  return (
    <>
      <Head>
        <title>Geleza - High School Extra Lessons Made Easy.</title>
        <meta
          name="description"
          content="Geleza is a South African online tutoring platforms that connects students with top educators, providing quality high school education as well as extra classes to help development skills."
        />
        <meta
          name="og:title"
          content="Geleza - High School Extra Lessons Made Easy."
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:description"
          content="Geleza is a South African online tutoring platforms that connects students with top educators, providing quality high school education as well as extra classes to help development skills."
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
          content="Geleza is a South African online tutoring platforms that connects students with top educators, providing quality high school education as well as extra classes to help development skills."
        />
        <meta name="twitter:image" content="https://www.geleza.app/cover.png" />
        <meta name="twitter:image:alt" content="Geleza" />
      </Head>
      <div className="w-full max-w-3xl mx-auto pb-10 px-5">
        <div className="py-20 flex flex-col justify-center items-center max-w-xl mx-auto">
          <span className="font-semibold text-lg text-primary mb-2 text-center">
            FAQs
          </span>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-center  mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-center text-body-color">
            Let us answer some of the questions we get asked the most about
            Geleza.
          </p>
        </div>

        <Accordion>
          {faqs?.map((faq: any, index: number) => {
            return (
              <Accordion.Item value={index.toString()}>
                <Accordion.Control>
                  <h2 className="font-bold">{faq?.question}</h2>
                </Accordion.Control>
                <Accordion.Panel>{faq.answer}</Accordion.Panel>
              </Accordion.Item>
            )
          })}
        </Accordion>
      </div>
      <CallToAction />
    </>
  )
}

export default Faq

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { data: faqs } = await directus.items('faq').readByQuery({})

  return {
    props: {
      faqs,
    },
  }
}
