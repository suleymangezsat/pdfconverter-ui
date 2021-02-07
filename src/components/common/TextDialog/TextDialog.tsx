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

export const TextDialog = ({
  title,
  isOpen,
  textPages,
  onClose,
}: Props): ReactElement => {
  const [open, setOpen] = useState(isOpen);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <Dialog open={open} onClose={handleClose} scroll="paper">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText component="div" tabIndex={-1}>
          {textPages?.map((page, index) => (
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
