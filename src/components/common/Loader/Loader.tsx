import {
  Box,
  CircularProgress,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React, { memo, ReactElement } from "react";
import { Error as ErrorState } from "../../../store/state";
import { Error } from "../Error";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
    },
  })
);

type Props = {
  children: React.ReactNode;
  state: ErrorState;
  onRefresh: () => void;
};

export const Loader = memo(
  ({ children, state, onRefresh }: Props): ReactElement => {
    const classes = useStyles();
    let rendering;
    rendering =
      state.error || state.loading ? (
        <Grid container justify="center" className={classes.root}>
          {state.error && <Error onRefresh={() => onRefresh()}></Error>}
          {state.loading && <CircularProgress />}
        </Grid>
      ) : (
        children
      );
    return <Box>{rendering}</Box>;
  }
);
