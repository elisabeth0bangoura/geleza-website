'use client'

import { createStyles, Text, Container, ActionIcon, Group } from '@mantine/core'
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from '@tabler/icons-react'
import Link, { LinkProps } from 'next/link'

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    // [theme.fn.smallerThan('md')]: {
    //   display: 'none',
    // },
  },

  link: {
    display: 'block',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('md')]: {
      marginTop: theme.spacing.xs,
    },
  },
}))

interface FooterLinksProps {
  data: {
    title: string
    links: { label: string; link: string }[]
  }[]
}

export default function Footer({ data }: FooterLinksProps) {
  const { classes } = useStyles()

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component={Link}
        href={link.link}
      >
        {link.label}
      </Text>
    ))

    return (
      <div key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    )
  })

  return (
    <footer className="bg-gray-800 py-10">
      <div className="w-full mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <div>
            <img src="/logo.png" className="h-10 mb-3" />
            <Text size="sm" color="dimmed">
              Geleza is a high school extra lessons platform that simplifies the
              way students learn. <br /> <br /> Geleza is a product of Reavize
              Enterprises.
            </Text>
          </div>
          {groups}
          <div>
            <h1 className={classes.title}>Payments</h1>
            <p className="text-sm">
              We do not store any payment details on our servers. All payments
              are handled by PayPal.
            </p>
            <img
              src="/images/paypal.webp"
              className="w-full object-contain mt-3"
            />
          </div>
        </div>
        <div className={classes.afterFooter}>
          <Text color="dimmed" size="sm">
            © {new Date().getFullYear()} geleza.app. A Reavize Company - All
            rights reserved.
          </Text>

          <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg">
              <IconBrandTwitter size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandYoutube size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandInstagram size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Group>
        </div>
      </div>
    </footer>
  )
}
