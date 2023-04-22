import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { rootActions } from "../store/root-actions";

export const useStoreActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
