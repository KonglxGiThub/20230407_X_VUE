import Mock from 'mockjs'
import homeApi from './mockServerData/home';

// Mock.mock('/api/home/getData',function(){
//     //拦截到請求後的處理邏輯
//     console.log('攔截到了')
// })

Mock.mock('/api/home/getData', homeApi.getResultData)