import { useRouter } from "next/router";
import { useStoreActions } from "../useStoreActions";

export const useLogout = () => {
  const { logout } = useStoreActions();
  const router = useRouter();

  const logoutFn = () => {
    router.push("/", "/");
    logout();
    setTimeout(() => {
      router.reload();
    }, 0);
  };
  return {
    logoutFn,
  };
};
