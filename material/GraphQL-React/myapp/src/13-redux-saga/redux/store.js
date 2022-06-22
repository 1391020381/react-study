/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
import createSagaMidlleWare from 'redux-saga'
import watchSaga from './saga-every'

const SagaMidlleWare = createSagaMidlleWare()
const store = createStore(reducer,applyMiddleware(SagaMidlleWare))


SagaMidlleWare.run(watchSaga) //saga任务，
export default store