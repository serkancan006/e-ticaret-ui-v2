import { HotToastContainer } from "@/services/notifications/HotToastrService";
import { ToastifyContainer } from "@/services/notifications/ToastifyService";
import CustomThemeProvider from "@/themes/CustomThemeProvider";
import React, { ReactNode } from "react";

const ProviderContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      <CustomThemeProvider>
        <ToastifyContainer />
        <HotToastContainer />
        {children}
      </CustomThemeProvider>
    </React.Fragment>
  );
};

export default ProviderContainer;
