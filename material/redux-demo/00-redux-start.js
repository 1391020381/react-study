
const {createStore} = require('redux')
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}
// 创建 store 并初始化值
let store = createStore(todos, ['Use Redux'])
console.log('store:',store)
store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
})
store.dispatch({
    type:"ADD_TODO",
    text:'Read about the middleware'
})

function select(state){
   return state.some.deep.property
}
let currentValue
function handleChange(){
  let previousValue  = currentValue;
  currentValue = select(store.getState())
  if(previousValue !== currentValue){
    console.log('Some deep nested property changed from',previousValue,'to',currentValue)
  }
  console.log('handleChange')
}
const unsubscribe = store.subscribe(handleChange)
unsubscribe()
console.log(store.getState())
