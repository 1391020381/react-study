/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import { useEffect,useState } from 'react'
import { IndexBar, List } from 'antd-mobile'
import {useHistory } from 'umi'
import {connect} from 'dva'
 function City(props:any) {
    const history = useHistory()
    const [list, setlist] = useState<any>([])
    const filterCity = (cities:any)=>{
        console.log(cities)
        const letterArr:Array<string> = []
        const newlist = []
        for(var i=65;i<91;i++){
            letterArr.push(String.fromCharCode(i))
        }
        // console.log()
        for(var m in letterArr){
            var cityitems:any = cities.filter( (item:any)=>item.pinyin.substring(0,1).toUpperCase()===letterArr[m])
            cityitems.length && newlist.push({
                title:letterArr[m],
                items:cityitems
            })
        }
        // console.log(newlist)

        return newlist
    }

    useEffect(() => {
        fetch("https://m.maizuo.com/gateway?k=2145459", {
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        })
        .then(res=>res.json())
        .then(res=>{
            // console.log(res.data.cities)

            setlist(filterCity(res.data.cities))

            
        })
    }, [])

    const changeCity = (item)=>{
        console.log(item.name,item.cityId)

        // 修改store state中的状态
        props.dispatch({
          type:"city/changeCity",
          payload:{
            cityName:item.name,
            cityId:item.cityId
          }
        })
        history.push("/cinema")
    }
    return (
        <div style={{ height: window.innerHeight }}>
        <IndexBar>
          {list.map( (item:any) => {
            const { title, items } = item
            return (
              <IndexBar.Panel
                index={title}
                title={title}
                key={title}
              >
                <List>
                  {items.map((item:any, index:number) => (
                    <List.Item key={index} onClick={()=>changeCity(item)}>{item.name}</List.Item>
                  ))}
                </List>
              </IndexBar.Panel>
            )
          })}
        </IndexBar>
      </div>
    )
}

export default connect(()=>({}))(City)