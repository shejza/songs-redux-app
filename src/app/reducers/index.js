import { combineReducers } from "redux";

import { projects } from "../scenes/application/scenes/projects/reducers/projects-reducer";

const rootReducer = combineReducers({
  projects
});

export default rootReducer;
