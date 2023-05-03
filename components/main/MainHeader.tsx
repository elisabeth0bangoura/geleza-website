"use client";
import {
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
  IconChevronDown,
  IconRocket,
  IconBriefcase,
  IconBrandYoutube,
  IconSchool,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import headerStyles from "../../styles/headerStyles";

const features = [
  {
    icon: IconSchool,
    title: "For Students",
    description:
      "Learn how Geleza's set of AI tools can help students with their academics.",
    link: "/solutions/students",
  },
  {
    icon: IconRocket,
    title: "For Professionals",
    description: "Professionals all over the world use Geleza to work smarter.",
    link: "/solutions/professionals",
  },
  {
    icon: IconBriefcase,
    title: "For Businesses",
    description:
      "Learn how our set of AI tools can help you grow your business.",
    link: "/solutions/businesses",
  },

  {
    icon: IconBrandYoutube,
    title: "For Content Creators",
    description:
      "Creating content has never been this easy. Learn how Geleza can help.",
    link: "/solutions/creators",
  },
];

export function MainHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const [linksOpened, { toggle: toggleLinks, close: closeLinks }] =
    useDisclosure(false);

  const { classes, theme } = headerStyles();

  const links = features.map((item) => (
    <UnstyledButton
      component={Link}
      href={`${item.link}`}
      className={classes.subLink}
      key={item.title}
    >
      <Group noWrap align="flex-start">
        <ThemeIcon color={"indigo"} size={34} variant="filled" radius="md">
          <item.icon size={20} color={theme.white} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
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
    <div>
      <Header
        fixed
        withBorder={false}
        className="bg-gray-100"
        height={70}
        px="md"
      >
        <Group
          className="mx-auto max-w-7xl w-full"
          position="apart"
          sx={{ height: "100%" }}
        >
          <Link href="/">
            <img src="/icon-g.png" className="h-10" />
          </Link>

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link href="/" className={classes.link}>
              Home
            </Link>
            <Link href="/features" className={classes.link}>
              Features
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
                      Solutions
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text fw={500}>Solutions</Text>
                </Group>

                <Divider my="sm" mx="-md" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>
                <Divider my="sm" mx="-md" />

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" color="dimmed">
                        Sign in and improve your life with our A.I powered
                        tools.
                      </Text>
                    </div>
                    <Button
                      component={"a"}
                      href="https://platform.geleza.app"
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
              href="https://platform.geleza.app"
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
              href="https://platform.geleza.app"
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
      >
        <ScrollArea mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          <Link href="/" className={classes.link}>
            Home
          </Link>
          <Link href="/features" className={classes.link}>
            Features
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Solutions
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>
            <div className="p-4">{links}</div>
          </Collapse>

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
              href="https://platform.geleza.app"
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
              href="https://platform.geleza.app"
            >
              Sign up
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </div>
  );
}
