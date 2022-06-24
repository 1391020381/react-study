react全家桶学习
# base
* component 
* 组件样式
* 事件 this
* ref
* state  setState
* map
* dangerouslySetInnerHTML
* props
受控组件与非受控组件
# advanced
* 父组件 -> 子组件 props  若props 为函数 子组件中可以执行 this.props.event() 通知 父组件。 实现 父子通信
* 受控组件 非受控组件  ref  
* context
* 插槽  props
* 组件生命周期

* 挂载 
当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

constructor()
static getDerivedStateFromProps()
render()
componentDidMount()
* 更新
当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()
* 卸载
当组件从 DOM 中移除时会调用如下方法：

componentWillUnmount()
* 错误处理
当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：

static getDerivedStateFromError()
componentDidCatch()


# Hooks
总结一下,useEffect能够在下面四种时机去执行一个回调函数产生副作用
1. 每次 render后执行:不提供第二个依赖参数。比如 useEffect(()=>{})
2. 仅第一次render后执行:提供一个空数组作为依赖项。比如 useEffect(()=>{},[])
3. 第一次以及依赖项发生变化后执行:提供依赖项数组。比如 useEffect(()=>{},[deps])
4. 组件 unmount 后执行：返回一个回调函数。比如 useEffect(()=>{return ()=>{}),[])
# 依赖项总结
1. 依赖项中定义的变量一定是会在回调函数中用到的,否则声明依赖项其实是没有意义的。
2. 依赖项一般是一个常量数组,而不是一个变量。因为一般在创建callback的时候,你其实非常清楚其中要用到哪些依赖项了。
3. React会使用浅比较来对比依赖项是否发生变化,所以要特别注意数组或者对象类型。如果你是每次创建一个新对象,即使和之前的值是等价,也会被认为是依赖项发生了变化。
4. 
# 掌握Hooks的是用规则
Hooks的使用规则包括以下两个:
只能在函数组件的顶级作用域使用;
只能在函数组件或者其他Hooks中使用
* useMemo 缓存计算结果
* const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
* 返回一个 memoized 值。
* 把 创建 函数和依赖项数组作为参数传入 useMemo,它仅会在某个依赖项改变时才重新计算memoized值。这种优化有助于避免在每次渲染时都进行高开销的计算。

* useCallback 缓存一个函数

const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
* 返回 该回调函数的 memoized版本
* useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。

# useRef 在多次渲染之间共享数据
可以把 useRef看作是在 函数组件之外创建的一个容器空间。
在这个容器上,我们可以通过唯一的 current属性设置一个值,从而在函数组件的多次渲染之间共享这个值。

useRef还有一个重要的功能,就是保存某个DOM节点的引用。

能用state 去保存 window.setInterval()返回的timer
只是没有 useRef更优,因为在更新state值后会导致重新渲染
而 ref值发生变化时,是不会触发组件的重新渲染的。

# useContext 定义全局状态
React.createContext(initialValue)   useContext  Provider属性
Context看上就是一个全局的数据,为什么要设计这样一个复杂的机制,而不是直接用一个全局的变量去保存数据
其实就是为了能够进行数据的绑定。
当这个Context的数据发生变化时,使用这个数据的组件就能够自动刷新。如果只是一个全局变量,就很难实现。

在函数式组件中要思考的方式永远是:当某个状态发生变化时,我要做什么,而不再是在Class组件中的某个生命周期方法中我要做什么。

useEffect(()=>{
  // componentDidMount + componentDidUpdate
  console.log('这里基本等价于 componentDidMount + componentDidUpdate')
  return ()=>{
    // componentWillUnmount
    console.log('这里基本等价于 componentWillUnmount')
  }
},[deps])



hooks -> hoc

import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
export const withWindowSize  = (Comp) => {
  retrun props =>{
    const windowSize  = useWindowSize();
    return <Comp windowSize={windowSize} {...props} />
  }
}

import React from 'react'
import { withWindowSize } from './withWindowSize'

class MyComp {
  render(){
    const { windowSize } = this.props
  }
}

export default withWindowSize(MyComp)

# Redux