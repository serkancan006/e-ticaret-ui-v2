import { useState, useEffect } from "react";
import * as userAuthService from "@/services/models/UserAuthService";

export const useUserAuth = (userNameOrEmail: string, password: string, successCalback?:() => void) => {
  const [data] = useState<{userNameOrEmail: string, password: string} | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    setLoading(true);
    setError(null); // Her yeni istek için hatayı sıfırlıyoruz

    try {
      userAuthService.login(userNameOrEmail, password, successCalback);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [userNameOrEmail, password, successCalback]);

  return { data, loading, error };
};
