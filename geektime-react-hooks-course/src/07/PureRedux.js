import { useState } from "react";
import { createStore } from "redux";

// 定义 Store 的初始值
const initialState = { value: 0 };

// Reducer，处理 Action 返回新的 State
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// 利用 Redux API 创建一个 Store，参数就是 Reducer
const store = createStore(counterReducer);

const output = [];
// Store 提供了 subscribe 用于监听数据变化
store.subscribe(() => console.log(store.getState()));
store.subscribe(() => output.push(store.getState()));
// 计数器加 1，用 Store 的 dispatch 方法分发一个 Action，由 Reducer 处理
const incrementAction = { type: "counter/incremented" };
// store.dispatch(incrementAction);
// 监听函数输出：{value: 1}

// 计数器减 1
const decrementAction = { type: "counter/decremented" };
// store.dispatch(decrementAction);
// 监听函数输出：{value: 0}

export default () => {
  const [, setValue] = useState(true);
  const forceUpdate = () => setValue((v) => !v);
  return (
    <div>
      <button onClick={() => store.dispatch(incrementAction) && forceUpdate()}>
        +
      </button>
      <button onClick={() => store.dispatch(decrementAction) && forceUpdate()}>
        -
      </button>
      <br />
      <textarea
        style={{ height: "500px" }}
        value={output.map((o) => JSON.stringify(o)).join("\n")}
        readOnly
      />
    </div>
  );
};
