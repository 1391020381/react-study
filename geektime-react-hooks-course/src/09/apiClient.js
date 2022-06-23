import axios from "axios";

// Define possible endpoints
const endPoints = {
  test: "https://60b2643d62ab150017ae21de.mockapi.io/",
  prod: "https://prod.myapi.io/",
  staging: "https://staging.myapi.io/"
};

// Create an axios instnce
const instance = axios.create({
  // in real case, determine it dynamically
  baseURL: endPoints.test,
  timeout: 30000,
  // get token somewhere
  headers: { Authorization: "Bear mytoken" }
});

// Define interceptors to handle all requests.
instance.interceptors.response.use(
  (res) => {
    // You can add special logic for successful requests
    return res;
  },
  (err) => {
    if (err.response.status === 403) {
      // do something to show login UI
    }
    return Promise.reject(err);
  }
);

export default instance;
