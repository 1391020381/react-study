import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},

  history:{
    type:"hash"
  },

  proxy:{
    "/api":{
      target:"https://i.maoyan.com",
      changeOrigin:true
    }
  },

  antd:{
    mobile:false
  }
});
