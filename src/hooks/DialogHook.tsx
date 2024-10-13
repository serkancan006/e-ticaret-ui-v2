import { DialogContext } from "@/context/DialogProvider";
import { useContext } from "react";

export const useDialog = () => {
    const dialogContext = useContext(DialogContext)
    if(!dialogContext)
        throw new Error("DialogHook.tsx = context boş dönüyor!");
    return dialogContext;
}