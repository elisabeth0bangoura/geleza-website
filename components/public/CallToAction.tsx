'use client'

import { createStyles, Title, Text, Button, Container } from '@mantine/core'
import Link from 'next/link'
import Dots from '../ui/Dots'

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 120,
    paddingBottom: 80,

    [theme.fn.smallerThan('sm')]: {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  dots: {
    position: 'absolute',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      height: 42,
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}))

export function CallToAction() {
  const { classes } = useStyles()

  return (
    <div className="bg-gradient-to-br from-gray-800 via-slate-900 to-blue-900">
      <Container className={classes.wrapper} size={1400}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            Revolutionize Your Learning <br /> with{' '}
            <Text
              component="span"
              className={
                'text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600'
              }
              inherit
            >
              A.I-Driven
            </Text>{' '}
            Platform!
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" color="dimmed" className={classes.description}>
              Enroll now and discover why Geleza is the best investment you'll
              ever make in yourself. Get ready to ace your exams, impress your
              teachers, and achieve your dreams.
            </Text>
          </Container>

          <div className={classes.controls}>
            <Button
              component={'a'}
              href="https://classroom.geleza.app"
              className="bg-primary"
              size="lg"
            >
              Get Started For Free
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
