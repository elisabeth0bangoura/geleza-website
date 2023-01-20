'use client'

import { Drawer } from '@mantine/core'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiMenuAltLeft, BiUser } from 'react-icons/bi'
import { CLASS_URL } from '../../utils/urls'

const PublicLayout = ({ children }: any) => {
  const [open, setOpen] = useState(false)

  const MobileMenu = () => {
    return (
      <Drawer
        opened={open}
        onClose={() => setOpen(false)}
        padding={'lg'}
        title={<img src="/logo.png" className="h-10" />}
      >
        <hr className="mb-5" />
        <div className="flex flex-col gap-5 ">
          <Link href="/how-it-works">How it works</Link>
          <Link href="/teachers">Teachers</Link>
          <Link href="/groups">Groups</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQs</Link>
          <Link href="/help">Help</Link>
          <a
            href={CLASS_URL}
            target={'_blank'}
            className="flex justify-center items-center gap-5 bg-dark rounded-full text-white font-bold px-12 py-3"
          >
            <BiUser />
            <span>Go To Class</span>
          </a>
        </div>
      </Drawer>
    )
  }

  return (
    <>
      <header className="w-full mx-auto px-4 py-2 bg-gray-800 text-teal-50 fixed">
        <div className="w-full mx-auto max-w-7xl flex items-center justify-between">
          <BiMenuAltLeft
            size={30}
            className="lg:hidden cursor-pointer"
            onClick={() => setOpen(true)}
          />
          <Link href="/">
            <img src="/logo.png" className="h-10" />
          </Link>
          <div className="lg:flex items-center gap-5 hidden">
            <Link href="/how-it-works">How it works</Link>
            <Link href="/teachers">Teachers</Link>
            <Link href="/groups">Groups</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/faq">FAQs</Link>
            <Link href="/help">Help</Link>
          </div>
          <div>
            <a
              href={CLASS_URL}
              target={'_blank'}
              className="flex items-center gap-5 bg-white rounded-full text-dark font-bold md:px-8 px-3 py-3"
            >
              <BiUser />
              <span className="hidden md:inline">Go To Class</span>
            </a>
          </div>
        </div>
      </header>
      <MobileMenu />
      <div className="pt-16">{children}</div>
      <footer className="w-full mx-auto px-4 py-2 bg-gray-800 text-teal-50">
        <div className="w-full py-12 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
          <div>
            <Link href="/">
              <img src="/logo.png" className="h-10" />
            </Link>
            <p className="my-3">
              Zeta is a high school extra lessons platform that simplifies the
              way students learn and share their knowledge with each other.{' '}
              <br /> <br /> Zeta is a product of{' '}
              <a
                href="https://reavize.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-purple-500"
              >
                Reavize Pty Ltd
              </a>
              , and all rights and materials are licensed under Reavize.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-primary text-xl">Menu</h2>

            <hr className="my-2 border-gray-700" />
            <Link href="/how-it-works">How it works</Link>
            <Link href="/teachers">Teachers</Link>
            <Link href="/groups">Groups</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/faq">FAQs</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-primary text-xl">Payments</h2>

            <hr className="my-2 border-gray-700" />
            <p>
              All payments are processed by secure gateways and no payment
              information is stored on our servers.
            </p>
            <img src="payment.png" className="object-contain w-full" />
          </div>
        </div>
        <hr className="border-gray-600" />
        <p className="text-center  text-sm py-5">
          Zeta - A Reavize Company. All Rights Reserved ©{' '}
          {new Date().getFullYear()}
        </p>
      </footer>
    </>
  )
}

export default PublicLayout
