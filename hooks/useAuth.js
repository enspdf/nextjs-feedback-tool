import fetch from "isomorphic-unfetch";
import useSWR from "swr";
import Cookie from "js-cookie";

export default function useAuth(initialData) {
  const { data: user, mutate } = useSWR(
    "/api/user",
    async (route) => {
      const authRequest = await fetch(route, {
        headers: {
          authorization: Cookie.get("_wsp"),
        },
      });

      if (authRequest.ok) {
        return authRequest.json();
      } else {
        Cookie.remove("_wsp");

        return null;
      }
    },
    { initialData }
  );

  return {
    ...user,
    logout() {
      Cookie.remove("_wsp");
      mutate();
    },
  };
}
