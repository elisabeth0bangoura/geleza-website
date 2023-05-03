import { createStyles } from "@mantine/core";

const footerStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    // [theme.fn.smallerThan('md')]: {
    //   display: 'none',
    // },
  },

  link: {
    display: "block",
    color: theme.colors.dark[1],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.white,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("md")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export default footerStyles;
