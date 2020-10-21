import React from 'react';
import { Redirect } from 'react-router-dom';
import View404 from './view/404view';
import ListView from './view/list';

const types = ["all","good","share","ask"]

const route_list = [
  {
    path: ["/","/all","/:type","/:type/:page"],
    exact: true,
    render(props) {
      const {type="all",page="1"} = props.match.params;
      if(types.includes(type)
        &&page>0
        &&parseInt(page)+"" === page){
          return <ListView {...props} />
        }
        // return <Redirect to=" /error/404/index" />
        return <Redirect to=" //" />
    }
  },{
    path: "",
    render(props){
      return <View404 {...props} />
    }
  },
];

const list_navs = [
  {
    title: "全部",
    to: "/all",
    exact: false,
    isActive(pathname){
      console.log(pathname)
        return pathname === "/" || pathname === "/all"
    }
  },
  {
    title: "精华",
    to: "/good",
    exact: false,
  }, {
    title: "分享",
    to: "/share",
    exact: false
  }, {
    title: "问答",
    to: "/ask",
    exact: false
  }
];


export { route_list, list_navs }

