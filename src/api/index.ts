import { homeUrl } from './ApiUrls'
import request from '../utils/axios';

export const getHomeDatas = async (params:any)=>{
    debugger
    const datas = await request.get(homeUrl,params);
    debugger
    return datas
}   