import {homeUrl} from '../api/ApiUrls';
import homeData from'./jsonData/home.json';
var Mock = require('mockjs')



var mockData = [
    [
        homeUrl,
        'get',
		{
			data: homeData
		}
    ]
]



// 输出结果
export default function (){
    mockData.forEach((item: any) => {
        item[0] = RegExp(item[0] + '.*');
       Mock.mock(...item)
    })
    console.log("Mock",Mock)
}