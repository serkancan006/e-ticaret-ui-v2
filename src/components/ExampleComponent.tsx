"use client";
import React from "react";
import * as hotToastrService from "@/services/notifications/HotToastrService";
import * as dialogService from "@/services/DialogService";
import { useDialog } from "@/hooks/DialogHook";

const ExampleComponent = () => {
  const { showDialog } = useDialog();
  const notify = () => {
    hotToastrService.messageHot("deneme", {
      type: "success",
    });
  };
  const notifyDismis = () => {
    hotToastrService.dismissAllHot();
  };
  const showingDialog = () => {
    dialogService.showExampleDialog(showDialog);
  };

  return (
    <div>
      <button onClick={notify}>Toastify Example</button>
      <br />
      <button onClick={notifyDismis}>Toastify Dismiss</button>
      <br />
      <button onClick={showingDialog}>Dialog Example Show</button>
    </div>
  );
};

export default ExampleComponent;
