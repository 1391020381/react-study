/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
// import ShallowRender from 'react-test-renderer/shallow'
import App from '../App'
import Enzyme, { shallow,mount } from 'enzyme' //需要适配器
import adpater from '@wojtekmaj/enzyme-adapter-react-17'
// enzyme-adpater-react-17

Enzyme.configure({adapter:new adpater()})

describe("react-test-render",function(){
    it("app 的名字事kerwin-todo",function(){
      let app = shallow(<App/>)
      expect(app.find("h1").text()).toEqual("kerwin-todo")
    })

    it("删除功能",function(){
       let app = mount(<App/>)
       let todolength = app.find("li").length;
       app.find("button.del").at(0).simulate('click');
       expect(app.find("li").length).toEqual(todolength-1)
    })

    it("添加功能",function(){
        let app = mount(<App/>)
        let todolength = app.find("li").length
        let addInput = app.find("input")
        addInput.value="kerwinaaaaa"
        app.find(".add").simulate("click")

        expect(app.find("li").length).toEqual(todolength+1)
    })
})