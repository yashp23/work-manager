import { httpAxios } from "@/helper/httpHelper";

export async function signUp(data) {
   const result = await httpAxios.post("/api/user", data).then((res) => res.data);
   return result;
}

export async function LoginUpData(logindata) {
   const result = await httpAxios.post("/api/login", logindata).then((res) => res.data);
   return result;
}

export async function currentUser() {
   const result = await httpAxios.get("/api/current").then((res) => res.data);
   return result;
}

export async function logout() {
   const result = await httpAxios
      .post("/api/logout")
      .then((response) => response.data);
   return result;
}