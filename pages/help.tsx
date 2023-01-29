import { Button, Textarea, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import Subjects from '../components/homepage/Subjects'
import directus from '../utils/directus'
import { toast } from 'react-toastify'
import { FaFacebook, FaInstagram, FaMailBulk, FaTwitter } from 'react-icons/fa'

type Form = {
  name: string
  surname: string
  subject: string
  cellnumber: string
  message: string
}

const Help = () => {
  const [form, setForm] = useState<Form>({
    name: '',
    surname: '',
    cellnumber: '',
    message: '',
    subject: '',
  })

  const [loading, setLoading] = useState(false)

  const submit = async () => {
    if (
      form.cellnumber &&
      form.subject &&
      form.name &&
      form.surname &&
      form.message
    ) {
      setLoading(true)
      await directus
        .items('help')
        .createOne({
          name: form.name,
          surname: form.surname,
          cellnumber: form.cellnumber,
          subject: form.subject,
          message: form.message,
        })
        .then(() => {
          setLoading(false)
          setForm({
            name: '',
            surname: '',
            cellnumber: '',
            message: '',
            subject: '',
          })
          toast.success('Message sent! We will get in touch with you')
        })
        .catch(() => {
          toast.error('Something went wrong. Please try again')
        })
    } else {
      toast.error('Please fill all the required fields')
    }
  }

  return (
    <div>
      <div className="w-full max-w-7xl mx-auto px-5 py-20">
        <h1 className="text-center text-gray-100  md:text-5xl lg:text-6xl text-3xl font-black">
          Let's Get In Touch
        </h1>
        <p className="text-center text-gray-100 mt-5 text-xl">
          Do you have any questions or inquiries? We're here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
          <div>
            <h1 className="font-bold text-2xl">Get in touch</h1>
            <hr className="w-[45%] border-primary mt-2 mb-5" />
            <p>
              Geleza is a product of Reavize Enterprises, a global software
              company with branches in South Africa and Mozambique.
            </p>
            <br />
            <p className="flex items-center gap-5">
              <FaMailBulk size={20} />
              Email: support@geleza.app
            </p>
            <p className="flex items-center gap-5 mt-2">
              <FaFacebook size={20} />
              Facebook:{' '}
              <a target="_blank" href="https://facebook.com/geleza_app">
                Geleza_App
              </a>
            </p>
            <p className="flex items-center gap-5 mt-2">
              <FaInstagram size={20} />
              Instagram:{' '}
              <a target="_blank" href="https://www.instagram.com/geleza_app/">
                Geleza_App
              </a>
            </p>
            <p className="flex items-center gap-5 mt-2 mb-5">
              <FaTwitter size={20} />
              Twitter:{' '}
              <a target="_blank" href="https://twitter.com/geleza_app">
                Geleza App
              </a>
            </p>
            <p>
              For business and related inquiries, please contact our company
              (Reavize) at business@reavize.com or visit the website.
            </p>
            <br />
            <br />
            <a
              className="btn shadow-none bg-white text-gray-900"
              href="https://reavize.com/"
              target="_blank"
            >
              Visit reavize.com
            </a>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-5 mb-5">
              <TextInput
                value={form.name}
                required
                label="First name"
                placeholder="John"
                size="lg"
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
                placeholder="Doe"
                size="lg"
                onChange={(e) =>
                  setForm({
                    ...form,
                    surname: e.target.value,
                  })
                }
              />
            </div>
            <TextInput
              value={form.cellnumber}
              required
              label="Cell Number"
              className="mb-5"
              size="lg"
              onChange={(e) =>
                setForm({
                  ...form,
                  cellnumber: e.target.value,
                })
              }
            />
            <TextInput
              value={form.subject}
              required
              label="Subject"
              placeholder="How can we help?"
              size="lg"
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
              label="Message"
              className="mb-5"
              size="lg"
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
            />
            <Button
              className="btn shadow-none"
              size="xl"
              loading={loading}
              onClick={submit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      <Subjects />
    </div>
  )
}

export default Help
