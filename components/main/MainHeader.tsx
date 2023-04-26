"use client";
import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBook,
  IconChevronDown,
  IconVideo,
  IconMessage,
  IconWriting,
  IconChartBubble,
  IconEdit,
  IconBook2,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.white,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 50,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor: theme.colors.dark[5],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colors.dark[7],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colors.dark[7],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
}));

const features = [
  {
    icon: IconBook,
    title: "PrepPal - Exam Tools",
    description: "PrepPal is our A.I tool that helps you prepare for exams.",
    link: "/preppal",
  },
  {
    icon: IconMessage,
    title: "Zeda Chat",
    description: "ChatGPT-like Chat, but with superpowers and personalities.",
    link: "/zeda-chat",
  },
  {
    icon: IconWriting,
    title: "Zeda Writer",
    description: "Essay, Letters & Reports writer powered by A.I. ",
    link: "/zeda-writer",
  },

  {
    icon: IconEdit,
    title: "Assignment Writer",
    description: "Write your assignments with the help of Geleza AI",
    link: "/assignments",
  },
  {
    icon: IconBook2,
    title: "The Library",
    description: "Find anything to read from facts, articles, etc.",
    link: "/library",
  },
  {
    icon: IconChartBubble,
    title: "Smart Tools",
    description: "Task Manager, Documents Manager, Study Notes, and more.",
    link: "/smart-tools",
  },
];

export function MainHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const [linksOpened, { toggle: toggleLinks, close: closeLinks }] =
    useDisclosure(false);

  const { classes, theme } = useStyles();

  const links = features.map((item) => (
    <UnstyledButton
      component={Link}
      href={`/features${item.link}`}
      className={classes.subLink}
      key={item.title}
    >
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={20} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500} color={theme.white}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const path = usePathname();

  useEffect(() => {
    closeDrawer();
    closeLinks();
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <Box>
      <Header fixed className="bg-gray-800" height={70} px="md">
        <Group
          className="mx-auto max-w-7xl w-full"
          position="apart"
          sx={{ height: "100%" }}
        >
          <Link href="/">
            <img src="/logo.png" className="h-12" />
          </Link>

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link href="/" className={classes.link}>
              Home
            </Link>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown
                className="bg-dark border-dark"
                sx={{ overflow: "hidden" }}
              >
                <Group position="apart" px="md">
                  <Text fw={500} color={theme.white}>
                    Features
                  </Text>
                </Group>

                <Divider my="sm" mx="-md" color={"dark.5"} />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text fw={500} fz="sm" color={theme.white}>
                        Get started
                      </Text>
                      <Text size="xs" color="dimmed">
                        Sign in and improve your studies with our A.I powered
                        tools.
                      </Text>
                    </div>
                    <Button
                      component={"a"}
                      href="https://classroom.geleza.app"
                      variant="default"
                      className="bg-white"
                      target="_blank"
                    >
                      Get started
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            <Link href="/features/assignments" className={classes.link}>
              <h1 className="flex items-center gap-3">
                Assignment Writer{" "}
                <span className="bg-gradient-to-tr from-orange-600 to-yellow-600 px-2 rounded-full">
                  New 🌟
                </span>
              </h1>
            </Link>
            <Link href="/pricing" className={classes.link}>
              Pricing
            </Link>

            <Link href="/help" className={classes.link}>
              Help
            </Link>
          </Group>

          <Group className={classes.hiddenMobile}>
            <Button
              component={Link}
              href="https://classroom.geleza.app"
              variant="default"
              size="md"
              className="bg-white"
            >
              Log in
            </Button>
            <Button
              className="bg-gradient-to-tr from-indigo-500 to-purple-500 px-10"
              size="md"
              component={Link}
              href="https://classroom.geleza.app"
            >
              Sign up
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
            style={{
              color: "white",
              backgroundColor: "white",
            }}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menu"
        className={classes.hiddenDesktop}
        zIndex={1000000}
        style={{
          backgroundColor: "black",
        }}
        styles={{
          header: {
            backgroundColor: "#1F2937",
          },
          title: {
            color: "white",
          },
          content: {
            backgroundColor: "#1F2937",
          },
        }}
      >
        <ScrollArea mx="-md" className="bg-dark">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Link href="/" className={classes.link}>
            Home
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>
            <div className="p-4">{links}</div>
          </Collapse>
          <Link href="/features/zeda-chat" className={classes.link}>
            <h1 className="flex items-center gap-3">
              Zeda Chat{" "}
              <span className="bg-gradient-to-tr from-orange-600 to-yellow-600 px-2 rounded-full">
                New 🌟
              </span>
            </h1>
          </Link>
          <Link href="/pricing" className={classes.link}>
            Pricing
          </Link>

          <Link href="/help" className={classes.link}>
            Help
          </Link>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="xl" px="md">
            <Button
              component={Link}
              href="https://classroom.geleza.app"
              variant="default"
              size="md"
              className="bg-white"
            >
              Log in
            </Button>
            <Button
              className="bg-gradient-to-tr from-indigo-500 to-purple-500 px-10"
              size="md"
              component={Link}
              href="https://classroom.geleza.app"
            >
              Sign up
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
