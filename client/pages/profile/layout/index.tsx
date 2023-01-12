import React, { Fragment, useEffect, useState } from "react";
import Dashboard from "../../../components/Dashboard";
import UseTabs from "../../../components/Tabs";
import { Box, CircularProgress, Paper } from "@mui/material";
import UseAccordion from "../../../components/Accordion";
import HeaderSelector from "./Components/Header-Selector";
import { useDispatch, useSelector } from "react-redux";
import { setState, setTemplates } from "../../../redux/slices/templates";
import api from "../../../hooks/Api";

import UseModal from "../../../components/Modal";
import ImageUploader from "../../../components/Image-Uploader";
import UseButton from "../../../components/Button";

const Layout = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState<number>(0);
  const state = useSelector((state: IState) => state?.templates);

  const array_operations = (action, array, item) => {
    let update;

    if (!array || !action || !item) return;

    action === "create"
      ? (update = [...array, item])
      : action === "templates"
      ? (update = [...item])
      : action === "update"
      ? (update = array?.map((p) =>
          p?._id?.toString() === item?._id?.toString() ? item : p
        ))
      : action === "delete"
      ? (update = array.filter(
          (p) => p?._id.toString() !== item?._id.toString()
        ))
      : update;

    return update;
  };

  const stateHandler = ({ method, payload, state, keep }) => {
    const update_state = {
      ...state,
      [method]: keep ? { ...state[method], ...payload } : payload,
    };
    dispatch(setState(update_state));
  };

  // REQUEST
  const request = async (action, method, input, id, path, message) => {
    // if (!action || !method || !input || !id || !path || !message) return;

    stateHandler({
      method: action,
      payload: { status: "", message: "", loading: true },
      state,
      keep: true,
    });
    try {
      const data = await api({
        method,
        path: `/${path}/${id}`,
        payload: input,
      });

      stateHandler({
        method: action,
        payload: { loading: false },
        state,
        keep: true,
      });

      const { error } = data;

      if (error) {
        stateHandler({
          method: action,
          payload: { status: "failed", message: error },
          state,
          keep: true,
        });
      } else {
        const updated_array = array_operations(action, state, data);

        let payload;

        action === "delete"
          ? (payload = {
              status: "success",
              message,
              modal: false,
            })
          : (payload = {
              status: "success",
              message,
              modal: false,
            });

        stateHandler({
          method: action,
          payload,
          state,
          keep: true,
        });

        dispatch(setTemplates(updated_array));
      }
    } catch (err) {
      stateHandler({
        method: action,
        payload: {
          status: "failed",
          message: "Algo salió mal, intente nuevamente!",
          loading: false,
        },
        state,
        keep: true,
      });
    }
  };

  useEffect(() => {
    request("templates", "get", {}, "", "templates", "");
  }, []);

  const tab_options = [
    "Home",
    "Compañia",
    "Emprendimientos",
    "Noticias",
    "Contacto",
  ];

  const items = [
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1658450788/sdp7axfl9ouoodgh2uhs.jpg",
      name: "Osten Tower",
      size: "1.5 MB",
    },
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430256/wqheyeka2askuihcx9ys.jpg",
      name: "Osten Tower",
      size: "1.5 MB",
    },
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430355/g7yz4ndlvgjjqvtidfa6.jpg",
      name: "Osten Tower",
      size: "1.5 MB",
    },
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657646579/hdlhr0yvuvbkyqbevrov.jpg",
      name: "Osten Tower",
      size: "1.5 MB",
    },
  ];

  return (
    <Box>
      <UseModal
        open={state?.create?.modal}
        handleClose={() => {
          stateHandler({
            method: "create",
            payload: { modal: false },
            state,
            keep: true,
          });
        }}
      >
        <Box sx={{ padding: "25px" }}>
          <ImageUploader
            value={state?.create?.template?.carousel ?? []}
            addImage={(value) =>
              stateHandler({
                method: "create",
                payload: {
                  template: {
                    ...state?.create?.template,
                    carousel: [...state?.create?.template?.carousel, value],
                  },
                },
                state,
                keep: true,
              })
            }
            removeImage={(value) =>
              stateHandler({
                method: "create",
                payload: {
                  template: {
                    ...state?.create?.template,
                    carousel: value,
                  },
                },
                state,
                keep: true,
              })
            }
          />

          <UseButton
            type="Primary"
            width="100%"
            onClickHandler={() =>
              request(
                "templates",
                "post",
                {
                  page: "home",
                  title: "",
                  description: "",
                  carousel: state?.create?.template?.carousel,
                },
                "",
                "template",
                ""
              )
            }
          >
            {state?.create?.loading ? (
              <CircularProgress style={{ color: "#fff" }} />
            ) : (
              "Agregar"
            )}
          </UseButton>
        </Box>
      </UseModal>
      <Dashboard>
        <Paper
          sx={{
            position: "relative",
            width: "100%",
            borderRadius: "10px",
            fontFamily: "Montserrat",
            boxShadow: "unset",
            border: "1px solid #e0e0e0",
          }}
        >
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "1000px",
              }}
            >
              <UseTabs value={tab} setValue={setTab} options={tab_options} />
            </Box>
          </Box>

          <Box sx={{ padding: "10px 10px 0px 10px" }}>
            <UseAccordion
              name="Header"
              content={() => (
                <HeaderSelector
                  items={state?.templates[0]?.carousel ?? []}
                  uploadImage={() => {
                    stateHandler({
                      method: "create",
                      payload: {
                        modal: true,
                        template: state.templates[0],
                      },
                      state,
                      keep: true,
                    });
                  }}
                />
              )}
            />
            <UseAccordion name="Sección 1" />
            <UseAccordion name="Sección 2" />
            <UseAccordion name="Sección 3" />
            <UseAccordion name="Sección 4" />
          </Box>
        </Paper>
      </Dashboard>
    </Box>
  );
};

export default Layout;
