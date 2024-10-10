import * as httpClient from "@/services/HttpClient";

// export async function loginAsync(
//   data : LoginFormType,
//   succesCallBack?: () => void,
//   errorCallBack?: (errorMessage: string) => void
// ): Promise<void> {
//   try {
//     const response = await httpClient.postAsync(
//       {
//         controller: "products",
//       },
//       { userNameOrEmail: data.username, password: data.password }
//       // or { data }
//     );

//     console.log("Başarılı yanıt:", response.data);
//     succesCallBack?.(); // Başarılı yanıt alındığında succesCallBack fonksiyonunu çağır
//   } catch (error) {
//     console.error("Hata:", error);

//     const errorMessage = error.response?.data?.message || "Bir hata oluştu"; // Hata mesajını ayıkla
//     errorCallBack?.(errorMessage); // Opsiyonel zincirleme ile çağırma
//   }
// }

export function login(
  userNameOrEmail: string,
  password: string,
  succesCallBack?: () => void,
  errorCallBack?: (errorMessage: string) => void
) {
  httpClient
    .postAsync(
      {
        controller: "products",
      },
      { userNameOrEmail, password }
    )
    .then((response) => {
      console.log("UserAuthService: Başarılı yanıt:", response.data);
      succesCallBack?.();
    })
    .catch((error) => {
      console.error("UserAuthService: Hata:", error);

      const errorMessage = error.response?.data?.message || "UserAuthService: Bir hata oluştu";
      errorCallBack?.(errorMessage);
    });
}

// refleshTokenlogin
// googlelogin
// facebooklogin
// password reset
// verify reset token
// ....