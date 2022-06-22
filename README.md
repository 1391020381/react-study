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
