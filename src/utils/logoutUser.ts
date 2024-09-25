import { authKey } from "@/constants/authKey";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const logoutUser = (router: AppRouterInstance) => {
  localStorage.removeItem(authKey);
  router.refresh();
  router.push("/");
  router.refresh();
  window.location.reload();
};
