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
import { formatBytes } from "../../../services/@formatters";

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
          secondaryTypographyProps={{ component: "div" }}
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
                <Typography variant="body2" color="textSecondary">
                  {`Status : ${status}`}
                </Typography>
                {message && (
                  <Typography variant="body2" color="textSecondary">
                    {`Reason : ${message}`}
                  </Typography>
                )}
              </Box>
            </>
          }
        />
        <ListItemSecondaryAction>{children}</ListItemSecondaryAction>
      </ListItem>
    );
  }
);
