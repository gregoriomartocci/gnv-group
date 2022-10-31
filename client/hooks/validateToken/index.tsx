import { verify } from "jsonwebtoken";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

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
        const validatedToken = verify(token, secret);
        console.log(validatedToken, "Juan Roman Riquelme");
        if (validatedToken?._id) {
          setValidate(true);
        }
      }
    } else {
      router.push("/login");
    }
  }, [auth, router, secret]);

  return { validate };
};

export default useValidateToken;
