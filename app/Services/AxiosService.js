// @ts-ignore
export const sandboxServer = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/",
  timeout: 3500,
});

// @ts-ignore
export const giphyServer = axios.create({
  baseURL: "https://api.giphy.com",
  timeout: 3500,
});

// export const sandboxServer = axios.create({
//   baseURL: '/The Url you want here/',
//   timeout:3500,

// })
