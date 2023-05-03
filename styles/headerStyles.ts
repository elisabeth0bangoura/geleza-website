import { createStyles } from "@mantine/core";

const headerStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
    [theme.fn.smallerThan("sm")]: {
      height: 50,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
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

export default headerStyles;
