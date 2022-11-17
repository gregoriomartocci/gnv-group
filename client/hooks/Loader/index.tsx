import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import LoadingScreen from "../../components/LoadingScreen/Index";

export const Loader = ({ delay }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let setTimeoutInstance;
    if (setTimeoutInstance) {
      clearTimeout(setTimeoutInstance);
    }

    setTimeoutInstance = setTimeout(() => {
      setLoading(false);
    }, delay);
  }, [delay]);

  return <LoadingScreen loading={loading} />;
};
