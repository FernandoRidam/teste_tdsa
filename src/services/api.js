const API_URL = 'https://jsonplaceholder.typicode.com';
const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const PATCH = 'PATCH';
const DELETE = 'DELETE';

module.exports = {
  async get( path ) {
    return await apiCall( path, GET );
  },

  async post( path, data ) {
    return await apiCall( path, POST, data );
  },

  async put( path, data ) {
    return await apiCall( path, PUT, data );
  },

  async patch( path, data ) {
    return await apiCall( path, PATCH, data );
  },

  async delete( path ) {
    return await apiCall( path, DELETE );
  },
};

async function apiCall( path, method, body ) {
  const data = await fetch(`${ API_URL }${ path }`, {
    method,
    body,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return {
    success: data.ok,
    data: await data.json(),
  };
};

