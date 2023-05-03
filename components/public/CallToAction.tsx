"use client";

import { createStyles, Title, Text, Button, Container } from "@mantine/core";
import Link from "next/link";
import catStyles from "../../styles/catStyles";
import Dots from "../ui/Dots";

export function CallToAction() {
  const { classes } = catStyles();

  return (
    <div className="bg-gradient-to-br from-gray-800 via-slate-900 to-blue-900">
      <Container className={classes.wrapper} size={1400}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            Smart AI Tools For <br />
            <Text
              component="span"
              className={
                "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600"
              }
              inherit
            >
              Smarter People,
            </Text>{" "}
            In One Place.
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" color="dimmed" className={classes.description}>
              Ready to experience the power of Geleza? Join us today and start
              transforming the way you work, learn, and innovate. Sign up now
              and discover the endless possibilities of AI.
            </Text>
          </Container>

          <div className={classes.controls}>
            <Button
              component={"a"}
              href="https://platform.geleza.app"
              className="bg-primary px-10"
              size="lg"
            >
              Try It For Free
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
