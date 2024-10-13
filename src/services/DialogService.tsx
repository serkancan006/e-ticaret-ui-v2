import type { DialogContextType } from "@/context/DialogProvider";
import ExampleDialog from "@/components/dialogs/ExampleDialog";
import ExampleDialogTwo from "@/components/dialogs/ExampleDialogTwo";

// show or close
export const showExampleDialog = (showDialog: DialogContextType['showDialog']) => {
   showDialog(<ExampleDialog />);
};

export const showExampleDialogTwo = (showDialog: (component: React.ReactElement) => void) => {
  showDialog(<ExampleDialogTwo />);
};
