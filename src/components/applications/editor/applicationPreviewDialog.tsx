import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { SquarePlus } from "tabler-icons-react";
import { twMerge } from "tailwind-merge";

import Button from "~/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../shadcn_ui/dialog";

type PropType = {
  children?: JSX.Element | JSX.Element[];
  dialogDescription: string;
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const ApplicationPreviewDialog = (props: PropType) => {
  const { children, dialogDescription, openDialog, setOpenDialog } = props;

  return (
    <>
      <Dialog open={openDialog}>
        <DialogTrigger asChild>
          <button
            className="max-w-xs rounded-xl bg-white/10 px-4 py-4 backdrop-invert transition duration-300 ease-in-out hover:scale-110"
            onClick={() => setOpenDialog(true)}
          >
            <h1 className="tracking-none font-black uppercase text-white">
              Preview
            </h1>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle>Application Preview</DialogTitle>
            <DialogDescription className="py-4">
              {dialogDescription}
            </DialogDescription>
          </DialogHeader>
          <DialogPrimitive.Close
            className="focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none"
            onClick={() => setOpenDialog(false)}
          >
            <Cross2Icon className="h-8 w-8" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ApplicationPreviewDialog;
