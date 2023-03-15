'use client'
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
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconVideo,
  IconMessage,
  IconWriting,
  IconChartBubble,
  IconEdit,
} from '@tabler/icons-react'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.white,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: 50,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `16px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
}))

const features = [
  {
    icon: IconVideo,
    title: 'A.I Powered Lessons',
    description:
      'Our video and written lessons are created by humans, edited by A.I',
    link: '/lessons',
  },
  {
    icon: IconBook,
    title: 'PrepPal - Exam Tools',
    description: 'PrepPal is our A.I tool that helps you prepare for exams.',
    link: '/preppal',
  },
  {
    icon: IconMessage,
    title: 'Zeda Chat',
    description: 'ChatGPT-like Chat, but with superpowers and personalities.',
    link: '/zeda-chat',
  },
  {
    icon: IconWriting,
    title: 'Zeda Writer',
    description: 'Essay, Letters & Reports writer powered by A.I. ',
    link: '/zeda-writer',
  },
  {
    icon: IconChartBubble,
    title: 'Smart Tools',
    description:
      'A.I Dictionary, Language Translator, Image Generator and more.',
    link: '/smart-tools',
  },
  {
    icon: IconEdit,
    title: 'Notes',
    description: 'Take your study notes with you anywhere you go.',
    link: '/notes',
  },
]

export function MainHeader() {
  const [
    drawerOpened,
    { toggle: toggleDrawer, close: closeDrawer },
  ] = useDisclosure(false)

  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)

  const { classes, theme } = useStyles()

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
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ))

  return (
    <Box>
      <Header fixed className="bg-gray-800" height={70} px="md">
        <Group
          className="mx-auto max-w-7xl w-full"
          position="apart"
          sx={{ height: '100%' }}
        >
          <img src="/logo.png" className="h-12" />

          <Group
            sx={{ height: '100%' }}
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

              <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                <Group position="apart" px="md">
                  <Text fw={500}>Features</Text>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" color="dimmed">
                        Sign in and improve your studies with our A.I powered
                        lessons.
                      </Text>
                    </div>
                    <Button
                      component={'a'}
                      href="https://classroom.geleza.app"
                      variant="default"
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
              href="https://classroom.geleza.app"
              variant="default"
              size="md"
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
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
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
          <Link href="/pricing" className={classes.link}>
            Pricing
          </Link>

          <Link href="/help" className={classes.link}>
            Help
          </Link>

          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Group position="center" grow pb="xl" px="md">
            <Button
              component={Link}
              href="https://classroom.geleza.app"
              variant="default"
              size="md"
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
  )
}
