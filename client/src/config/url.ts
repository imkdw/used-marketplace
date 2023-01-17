const makeUrl = (path: string) => {
  const serverUrl = "http://localhost:5000";
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

export const productUrl = {
  addProduct: makeUrl("/product/add"),
  myProducts: makeUrl("/product/my"),
  productInfo: makeUrl("/product"),
  allProduct: makeUrl("/product/all"),
};
