"use client";

import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandFacebook,
} from "@tabler/icons-react";
import Link, { LinkProps } from "next/link";
import footerStyles from "../../styles/footerStyles";

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export default function Footer({ data }: FooterLinksProps) {
  const { classes } = footerStyles();

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
    ));

    return (
      <div key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className="bg-gray-800 py-10">
      <div className="w-full mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <div>
            <img src="/logo.png" className="h-10 mb-3" />
            <Text size="sm" color="dimmed">
              Geleza is an AI-powered platform that combines multiple tools to
              help students, professionals, and businesses be more productive
              and efficient. <br /> <br /> Geleza is a product of Reavize
              Enterprises.
            </Text>
          </div>
          {groups}
          <div>
            <h1 className={classes.title}>Payments</h1>
            <p className="text-sm text-gray-300">
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
            <ActionIcon
              component="a"
              target="_blank"
              href="https://twitter.com/geleza_app"
              size="lg"
            >
              <IconBrandTwitter size={20} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              size="lg"
              component="a"
              target="_blank"
              href="https://www.tiktok.com/@geleza_app"
            >
              <IconBrandTiktok size={20} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              size="lg"
              component="a"
              target="_blank"
              href="https://www.instagram.com/geleza_app/"
            >
              <IconBrandInstagram size={20} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              size="lg"
              component="a"
              target="_blank"
              href="https://www.facebook.com/gelezaapp"
            >
              <IconBrandFacebook size={20} stroke={1.5} />
            </ActionIcon>
          </Group>
        </div>
      </div>
    </footer>
  );
}
