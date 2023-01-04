import { TypedUseSelectorHook, useSelector,useDispatch } from "react-redux";
import { IStateReduced ,IAppDispatch,ReduxState} from "./index";
import { Action, ThunkAction } from '@reduxjs/toolkit';

export const useAppSelector: TypedUseSelectorHook<IStateReduced> = useSelector;
export const useAppDispatch: () => IAppDispatch = useDispatch
export type TypedThunk<R = void> = ThunkAction<R, ReduxState, unknown, Action>;
export const useTypedDispatch = () => useDispatch<IAppDispatch>();
