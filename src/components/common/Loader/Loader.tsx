import {
  Box,
  CircularProgress,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
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
  empty: boolean;
  onRefresh: () => void;
};

export const Loader = memo(
  ({ children, loading, error, empty, onRefresh }: Props): ReactElement => {
    const classes = useStyles();
    let rendering;
    rendering =
      error || loading || empty ? (
        <Grid container justify="center" className={classes.root}>
          {error && <Error onRefresh={() => onRefresh()}></Error>}
          {loading && <CircularProgress />}
          {!error && !loading && empty && (
            <Typography component="span">No content yet</Typography>
          )}
        </Grid>
      ) : (
        children
      );
    return <Box>{rendering}</Box>;
  }
);
