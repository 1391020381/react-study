import { Button } from "antd";
import { createStore } from "redux";
import { Provider } from "react-redux";
import NiceModal, {
  createNiceModal,
  useNiceModal,
  modalReducer,
} from "./NiceModal";

// redux store
const store = createStore(modalReducer);

const MyModal = createNiceModal("my-modal", () => {
  return (
    <NiceModal id="my-modal" title="Nice Modal">
      Hello NiceModal!
    </NiceModal>
  );
});

function MyModalExample() {
  const modal = useNiceModal("my-modal");
  return (
    <>
      <Button type="primary" onClick={() => modal.show()}>
        Show Modal
      </Button>
      <MyModal />
    </>
  );
}
export default () => {
  return (
    <Provider store={store}>
      <h1>Nice Modal</h1>
      <MyModalExample />
    </Provider>
  );
};
