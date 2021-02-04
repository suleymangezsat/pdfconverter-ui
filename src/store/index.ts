import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger, thunk } from "../middleware";
import { rootReducer } from "./reducers";
import { RootState } from "./state";

export function configureStore(initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(thunk, logger);

  if (process.env.NODE_ENV !== "production") {
    middleware = composeWithDevTools(middleware);
  }

  return createStore(
    rootReducer as any,
    initialState as any,
    middleware
  ) as Store<RootState>;
}
