import React, { ReactNode } from "react";
import { HotToastContainer } from "@/services/notifications/HotToastrService";
import { ToastifyContainer } from "@/services/notifications/ToastifyService";
import CustomThemeProvider from "@/themes/CustomThemeProvider";
import NextTopLoader from "nextjs-toploader";
import DialogProvider from "./DialogProvider";

const ProviderContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      <CustomThemeProvider>
        <DialogProvider>
          <NextTopLoader
            color="#22C55E"
            initialPosition={0.08}
            crawlSpeed={300}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
          <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
          <ToastifyContainer />
          <HotToastContainer />
          {children}
        </DialogProvider>
      </CustomThemeProvider>
    </React.Fragment>
  );
};

export default ProviderContainer;
