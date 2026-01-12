import { useNavigate } from "react-router-dom";
import { useLoader } from "../contexts/loader/LoaderContext";

export const useDelayedNavigate = () => {
  const navigate = useNavigate();
  const { show, hide } = useLoader();

  return (path: string) => {
    show();

    const MIN_TIME = 600;
    const start = performance.now();

    setTimeout(() => {
      navigate(path);

      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_TIME - elapsed);

      setTimeout(() => hide(), remaining);
    }, 0);
  };
};
