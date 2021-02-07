import { Box, Button, Typography } from "@material-ui/core";
import { memo, ReactElement } from "react";

type Props = {
  onRefresh: () => void;
};

export const Error = memo(
  ({ onRefresh }: Props): ReactElement => (
    <Box textAlign="center">
      <Typography>Something went wrong</Typography>
      <Box m={1}>
        <Button variant="outlined" onClick={() => onRefresh()}>
          Try Again
        </Button>
      </Box>
    </Box>
  )
);
