import { DataState } from "../enum/deta-state.enum";

export interface AppState<T> {
    dataState : DataState;
    appData? :T;
    error? : string;
    
}