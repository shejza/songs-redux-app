export function requestHeaders() {

  const token = '';
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': token
  };
}