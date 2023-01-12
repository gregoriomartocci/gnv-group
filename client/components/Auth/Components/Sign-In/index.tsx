import React, { Fragment, useState } from "react";
import { Alert, Box, CircularProgress } from "@mui/material";
import { StaticImageData } from "next/image";
import { useDispatch, useSelector } from "react-redux";
import InputGroup from "../../../Input";
import Toast from "../../../Alert";
import { AuthContainer, AuthImage, Login } from "../../Styles";
import { useRouter } from "next/router";
import UseButton from "../../../Button";
import { useMutation, useQuery } from "react-query";
import { setAlert, setAuth } from "../../../../redux/slices/auth";
import { LoginAuth } from "../../../../api/auth";
import { closeAlert } from "../../../../redux/slices/auth";

export interface IAuthProps {
  img: StaticImageData | string;
}

export type inputType = {
  email: string;
  password: string;
};

export type errorType = {
  auth: string;
  message: any;
};

const SignIn = ({ img }: IAuthProps) => {
  const [input, setInput] = useState<inputType>({
    email: "",
    password: "",
  });
  const state = useSelector((state) => state?.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  const { alert } = state;

  const { mutateAsync: LoginAuthMutation, isLoading: authLoading } =
    useMutation(LoginAuth, {
      onSuccess: (data) => {
        const { error } = data;
      
        if (error) {
          dispatch(
            setAlert({
              message: error,
              status: "error",
            })
          );
        } else {
          dispatch(
            setAlert({
              message: "Session iniciada con éxito",
              status: "success",
            })
          );
          localStorage.setItem("auth", JSON.stringify(data));
          dispatch(setAuth(data));
          router.push("/profile/ventures");
        }
      },
      onError: () => {
        dispatch(
          setAlert({
            message: "Algo salió mal. Intente nuevamente más tarde",
            status: "error",
          })
        );
      },
    });

  const onChangeHandler = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      {alert?.map(({ message, status }, index) => {
        return (
          <Toast
            key={index}
            message={message}
            type={status}
            action={() => dispatch(closeAlert(index))}
          />
        );
      })}

      <Box sx={Login}>
        <Fragment>
          <span
            style={{
              fontSize: "35px",
              fontWeight: 600,
              margin: "10px 0",
              color: "#424242",
            }}
          >
            Iniciar sesión
          </span>
          <InputGroup
            name="email"
            description="Enter your email"
            label="Email address"
            type="text"
            value={input.email}
            onChangeHandler={onChangeHandler}
          />
          <InputGroup
            name="password"
            description="Enter your password"
            label="Password"
            type="password"
            value={input.password}
            onChangeHandler={onChangeHandler}
          />

          <Box sx={{ margin: "10px 0px 0px 0px" }}>
            <UseButton
              type="Primary"
              width="100%"
              height="50px"
              onClickHandler={() => LoginAuthMutation({ ...input })}
            >
              {authLoading ? (
                <CircularProgress style={{ color: "#fff" }} />
              ) : (
                "Siguiente"
              )}
            </UseButton>
          </Box>
        </Fragment>
        {/* Es tu primera vez? Create una cuenta <span>Sign in</span> */}
      </Box>
    </Fragment>
  );
};

export default SignIn;

// const onSubmitHandler = async () => {
//   setError({ auth: "", message: "" });
//   setLoading(true);
//   try {
//     const data = await api({
//       method: "post",
//       path: "/signin",
//       payload: input,
//     });
//     setLoading(false);
//     if (data?.error) {
//       setError({ auth: "failed", message: data?.error });
//     } else {
//       setError({ ...error, auth: "success" });
//       localStorage.setItem("auth", JSON.stringify(data));
//       dispatch(setAuth(data));
//       router.push("/profile/ventures");
//     }
//   } catch (err) {
//     setError({ auth: "failed", message: "Something went wrong" });
//     setLoading(false);
//   }
// };
