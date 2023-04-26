"use client";
import Link from "next/link";
import React from "react";
import { createStyles, Paper, Text, Title, Button } from "@mantine/core";

type Props = {
  id: string;
  title: string;
  image: string;
  date: string;
};

const useStyles = createStyles((theme) => ({
  card: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    backgroundBlendMode: "overlay",
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

interface ArticleCardImageProps {
  image: string;
  title: string;
  category: string;
  id: string;
}

const PostItem = ({ image, title, category, id }: ArticleCardImageProps) => {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="lg"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
      component={Link}
      href={`/blog/${id}`}
    >
      <div>
        <Text className={classes.category} size="xs" lineClamp={1}>
          {category}
        </Text>
        <Title order={3} className={classes.title} lineClamp={3}>
          {title}
        </Title>
      </div>
      <Button variant="filled" className="bg-dark" color="dark">
        Read article
      </Button>
    </Paper>
  );
};

export default PostItem;
