import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { ReactElement, useEffect, useState } from "react";

export interface Props {
  title: string;
  isOpen: boolean;
  textPages?: string[];
  onClose: () => void;
}

export const TextDialog = (props: Props): ReactElement => {
  const [open, setOpen] = useState(props.isOpen);

  const handleClose = () => {
    setOpen(false);
    props.onClose();
  };

  useEffect(() => {
    debugger;
    if (props.isOpen) {
      setOpen(true);
    }
  }, [props.isOpen]);
  return (
    <Dialog open={open} onClose={handleClose} scroll="paper">
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText component="div" tabIndex={-1}>
          {props.textPages?.map((page, index) => (
            <div key={index}>
              <Typography variant="h6" gutterBottom>
                Page {index + 1}
              </Typography>
              <Typography>{`${page}\n`}</Typography>
              <br />
            </div>
          ))}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
