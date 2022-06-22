/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import ShallowRender from 'react-test-renderer/shallow'
import App from '../App'
import ReactTestUtil from 'react-dom/test-utils'
describe("react-test-render",function(){
    it("app 的名字事kerwin-todo",function(){
        const render = new ShallowRender()
        render.render(<App/>)
        // console.log(render.getRenderOutput().props.children[0].type)
        
        expect(render.getRenderOutput().props.children[0].type).toBe("h1")
        expect(render.getRenderOutput().props.children[0].props.children).toBe("kerwin-todo")
    })

    it("删除功能",function(){
        const app = ReactTestUtil.renderIntoDocument(<App/>)
        let todoitems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,"li")
        console.log(todoitems.length)

        let detelteButton = todoitems[0].querySelector("button")

        ReactTestUtil.Simulate.click(detelteButton)

        let todoitemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,"li")

        expect(todoitems.length-1).toBe(todoitemsAfterClick.length)
    })

    it("添加功能",function(){
        const app = ReactTestUtil.renderIntoDocument(<App/>)
        let todoitems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,"li")
        console.log(todoitems.length)


        let addInput = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,"input")
        addInput.value = "kerwinaaaaaa"
        let addButton = ReactTestUtil.findRenderedDOMComponentWithClass(app,"add")

        ReactTestUtil.Simulate.click(addButton)

        let todoitemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,"li")

        expect(todoitemsAfterClick.length).toBe(todoitems.length+1)

    })
})