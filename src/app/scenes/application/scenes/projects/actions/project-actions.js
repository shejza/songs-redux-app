import {projectConstants} from '../constants';
import {projectDataFetches} from './../services';

export const projectActions = {
  get,
  getById,
  create,
  update,
  delete: _delete
};

function get() {
  return dispatch => {
    dispatch(request());

    projectDataFetches.get()
      .then(
        projects => dispatch(success(projects.data)),
        error => dispatch(failure(error.status))
      );
  };

  function request() { return { type: projectConstants.GET_REQUEST } }
  function success(projects) { return { type: projectConstants.GET_SUCCESS, projects } }
  function failure(error) { return { type: projectConstants.GET_FAILURE, error } }
}

function getById(id) {
  return dispatch => {
    dispatch(request(id));

    projectDataFetches.getById(id)
      .then(
        project => dispatch(success(project.data)),
        error => dispatch(failure(error.status))
      );
  };

    function request(id) { return { type: projectConstants.GETBYID_REQUEST, id } }
    function success(project) { return { type: projectConstants.GETBYID_SUCCESS, project } }
    function failure(error) { return { type: projectConstants.GETBYID_FAILURE, error } }
}

function create(project) {
  return dispatch => {
    dispatch(request(project));

    projectDataFetches.create(project)
      .then(
        project => dispatch(success(project.data)),
        error => dispatch(failure(error.status))
      );
  };

  function request(project) { return { type: projectConstants.CREATE_REQUEST, project } }
  function success(project) { return { type: projectConstants.CREATE_SUCCESS, project } }
  function failure(error) { return { type: projectConstants.CREATE_FAILURE, error } }
}

function update(project) {
  return dispatch => {
    dispatch(request(project));

    projectDataFetches.update(project)
      .then(
        project => dispatch(success(project.data)),
        error => dispatch(failure(error.status))
      );
  };

  function request(project) { return { type: projectConstants.UPDATE_REQUEST, project } }
  function success(project) { return { type: projectConstants.UPDATE_SUCCESS, project } }
  function failure(error) { return { type: projectConstants.UPDATE_FAILURE, error } }
}

function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    projectDataFetches.delete(id)
      .then(
        () => dispatch(success(id)),
        error => dispatch(failure(error.status))
      );
  };

  function request(id) { return { type: projectConstants.DELETE_REQUEST, id } }
  function success(id) { return { type: projectConstants.DELETE_SUCCESS, id } }
  function failure(error) { return { type: projectConstants.DELETE_FAILURE, error } }
}