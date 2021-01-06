import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

type ProfileLayoutProps = {
  children: React.ReactNode;
  withoutPadding?: boolean;
  minHeight?: number;
};

const BoxLayout: React.FC<ProfileLayoutProps> = ({ children, withoutPadding, minHeight }) => {
  const classes = useStyles({ withoutPadding, minHeight });
  return (
    <Container className={classes.container} maxWidth="md">
      <Paper className={classes.paper} elevation={5} square>
        {children}
      </Paper>
    </Container>
  );
};

type StyleProps = {
  withoutPadding?: boolean;
  minHeight: number;
};

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  container: {
    position: "relative",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      padding: 0
    }
  },
  paper: (props) => ({
    padding: props.withoutPadding ? 0 : theme.spacing(3),
    minHeight: props.minHeight ? theme.spacing(props.minHeight) : 0
  })
}));

export default BoxLayout;
