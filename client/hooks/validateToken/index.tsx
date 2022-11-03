import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { verify } from "jsonwebtoken";

const useValidateToken = () => {
  const [validate, setValidate] = useState(false);
  const secret =
    typeof window !== "undefined" ? process.env.NEXT_PUBLIC_SECRET : "";
  const auth =
    typeof window !== "undefined" ? localStorage.getItem("auth") : {};
  const router = useRouter();

  useEffect(() => {
    if (auth) {
      const parse = JSON.parse(auth);
      const { token } = parse;
      if (secret) {
        verify(token, secret, (err, decoded) => {
          if (err || !decoded) {
            setValidate(false);
            router.push("/login");
          } else if (decoded) {
            setValidate(true);
          }
        });
      }
    } else {
      router.push("/login");
    }
  }, [auth]);

  return { validate };
};

export default useValidateToken;
