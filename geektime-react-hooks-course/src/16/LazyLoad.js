import Loadable from "react-loadable";

export default Loadable({
  loader: () => import("./HelloLazyLoad"),
  loading({ error }) {
    return error ? "Failed" : "Loading";
  },
});
