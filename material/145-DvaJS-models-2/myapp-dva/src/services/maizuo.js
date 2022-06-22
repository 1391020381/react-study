/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import request from '../utils/request'

export function getCinemaListService() {
    return request("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5386964", {
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    })
}