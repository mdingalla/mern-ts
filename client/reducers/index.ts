import { combineReducers, Reducer } from "redux";
import todos from "./todos";
import { routerReducer, RouterState } from "react-router-redux";



export {RootState, RouterState};

interface RootState {
  todos: TodoStoreState;
}


export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  todos: todos
});
