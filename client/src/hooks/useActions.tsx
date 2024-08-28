import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as muiActions } from "../store/mui";
import { actions as componentsActions } from "../store/components";
import { starWarsApi } from "../store/api";

const actionsAvailableInHook = { ...muiActions, ...componentsActions };

const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators(actionsAvailableInHook, dispatch),
    [dispatch]
  );
};

// attempt to rewrite
// const actionsAvailableInHook: { [key: string]: any } = {
//   mui: muiActions,
//   components: componentsActions,
// };

// const useActions = (): { [key: string]: object } => {
//   const dispatch = useDispatch();

//   return useMemo(() => {
//     const res: { [key: string]: object } = {};
//     for (let prop in actionsAvailableInHook) {
//       res[prop] = bindActionCreators(actionsAvailableInHook[prop], dispatch);
//     }
//     return res;
//   }, [dispatch]);
// };

export default useActions;
