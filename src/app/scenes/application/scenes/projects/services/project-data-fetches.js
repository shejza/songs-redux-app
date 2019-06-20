import {requestHeaders, apiUrl, handleResponse} from '../../../../../helpers';

export const projectDataFetches = {
  get,
  getById,
  create,
  update,
  delete: _delete
};

function get() {
  const requestOptions = {
    method: 'GET',
    headers: requestHeaders()
  };

  return fetch(`${apiUrl}projects`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: requestHeaders()
  };

  return fetch(`${apiUrl}projects/${id}`, requestOptions).then(handleResponse);
}

function create(training) {
  const requestOptions = {
    method: 'POST',
    headers: requestHeaders(),
    body: JSON.stringify(training)
  };

  return fetch(`${apiUrl}projects`, requestOptions).then(handleResponse);
}

function update(training) {
  const requestOptions = {
    method: 'POST',
    headers: requestHeaders(),
    body: JSON.stringify(training)
  };

  return fetch(`${apiUrl}projects/${training.id}`, requestOptions).then(handleResponse);
}

function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: requestHeaders(),
  };

  return fetch(`${apiUrl}projects/${id}`, requestOptions).then(handleResponse);
}