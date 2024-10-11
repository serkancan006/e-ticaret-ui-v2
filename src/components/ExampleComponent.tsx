"use client";
import React from "react";
import * as hotToastrService from "@/services/notifications/HotToastrService";

const ExampleComponent = () => {
  const notify = () => {
    hotToastrService.messageHot("deneme", {
      type: "success",
    });
  };
  const notifyDismis = () => {
    hotToastrService.dismissAllHot();
  };
  return (
    <div>
      <button onClick={notify}>Toastify Example</button>
      <br />
      <button onClick={notifyDismis}>Toastify Dismiss</button>
    </div>
  );
};

export default ExampleComponent;
