import {
  Avatar,
  Box,
  createStyles,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import { memo } from "react";
import { formatBytes } from "../../../services/Formatter";

const useStyles = makeStyles(() =>
  createStyles({
    inline: {
      display: "inline",
    },
  })
);

type Props = {
  children: React.ReactNode;
  name: string;
  size: number;
  status: string;
  color?: "inherit" | "primary" | "secondary" | "action" | "disabled" | "error";
  createdAt?: Date;
  message?: string;
};

export const FileListItem = memo(
  ({ children, name, size, status, color, createdAt, message }: Props) => {
    const classes = useStyles();
    return (
      <ListItem divider>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon color={color} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <>
              <Box>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textSecondary"
                >
                  {formatBytes(size)}
                </Typography>
                {createdAt && (
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textSecondary"
                  >
                    {` · ${new Date(createdAt).toTimeString()}`}
                  </Typography>
                )}
              </Box>
              <Box>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textSecondary"
                >
                  {`Status : ${status}`}
                </Typography>
              </Box>
            </>
          }
        />
        <ListItemSecondaryAction>{children}</ListItemSecondaryAction>
      </ListItem>
    );
  }
);
