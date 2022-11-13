import { useEffect, useState } from "react";
import LoadingScreen from "../../components/LoadingScreen/Index";

export const Loader = ({ children, delay }) => {
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

  if (loading) {
    return <LoadingScreen />;
  }

  return children;
};
