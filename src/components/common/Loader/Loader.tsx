import {
  Box,
  CircularProgress,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React, { memo, ReactElement } from "react";
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
  loading: boolean;
  error: boolean;
  onRefresh: () => void;
};

export const Loader = memo(
  ({ children, loading, error, onRefresh }: Props): ReactElement => {
    const classes = useStyles();
    let rendering;
    rendering =
      error || loading ? (
        <Grid container justify="center" className={classes.root}>
          {error && <Error onRefresh={() => onRefresh()}></Error>}
          {loading && <CircularProgress />}
        </Grid>
      ) : (
        children
      );
    return <Box>{rendering}</Box>;
  }
);
