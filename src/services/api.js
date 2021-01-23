const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const PATCH = 'PATCH';
const DELETE = 'DELETE';

module.exports = {
  async get( path ) {
    return await apiCall( path, GET );
  },

  async post( path ) {
    return await apiCall( path, POST );
  },

  async put( path ) {
    return await apiCall( path, PUT );
  },

  async patch( path ) {
    return await apiCall( path, PATCH );
  },

  async delete( path ) {
    return await apiCall( path, DELETE );
  },
};

async function apiCall( path, method ) {
  const data = await fetch(`https://jsonplaceholder.typicode.com${ path }`, {
    method,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return {
    success: data.ok,
    data: await data.json(),
  };
};

