const makeUrl = (path: string) => {
  const serverUrl = "http://localhost:5000";
  return serverUrl + path;
};

export const authUrl = {
  register: makeUrl("/auth/register"),
};
