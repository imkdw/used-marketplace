const makeUrl = (path: string) => {
  const serverUrl = "http://dongeu47.iptime.org:5000";
  // const serverUrl = "http://localhost:5000";
  return serverUrl + path;
};

export const authUrl = {
  register: makeUrl("/auth/register"),
  login: makeUrl("/auth/login"),
};

export const geoUrl = {
  coordToAddress: makeUrl("/geo/coord-to-address"),
};
