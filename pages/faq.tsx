import { Accordion } from '@mantine/core'
import { GetServerSidePropsContext } from 'next'
import React from 'react'
import CallToAction from '../components/public/CallToAction'
import directus from '../utils/directus'
import { CLASS_URL } from '../utils/urls'

const Faq = ({ faqs }: any) => {
  return (
    <>
      <div className="w-full max-w-3xl mx-auto pb-10 px-5">
        <div className="py-20 flex flex-col justify-center items-center max-w-xl mx-auto">
          <span className="font-semibold text-lg text-primary mb-2">FAQs</span>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-center  mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-center text-body-color">
            Let us answer some of the questions we get asked the most about
            Zeta.
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
