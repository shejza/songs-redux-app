import { projectConstants } from '../constants';

export function projects(state = {}, action) {
  switch (action.type) {
    case projectConstants.GET_REQUEST:
      return {
        loading: true
      };
    case projectConstants.CREATE_REQUEST:
      return {
        creating: true
      };
    case projectConstants.UPDATE_REQUEST:
      return {
        updating: true
      };
    case projectConstants.GET_SUCCESS:
      return {
        projects: action.projects
      };
    case projectConstants.CREATE_SUCCESS:
    case projectConstants.UPDATE_SUCCESS:
      return {
        project: action.project
      };
    case projectConstants.DELETE_SUCCESS:
      return {
        project: state.projects.filter((project) => project.id !== action.id)
      };
    case projectConstants.GET_FAILURE:
    case projectConstants.CREATE_FAILURE:
    case projectConstants.UPDATE_FAILURE:
    case projectConstants.DELETE_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state;
  }
}