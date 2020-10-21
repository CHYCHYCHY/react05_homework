import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from "../data";

function Pagination() {
  const { type = "all", page = 1 } = useParams()
  let nowData1 = []
  if (type === '' || type === 'all') {
    for (const key in data) {
      for (const iterator of data[key]) {
        nowData1.push(iterator)
      }
    }
  } else {
    nowData1 = data[type];
  }
  const len = 5;
  const pageLen = Math.ceil(nowData1.length / len);
  function setNub() {
    let nubs = [];
    let newpage1 = parseInt(page)
    if (newpage1 !== 1) {
      nubs.push(<Link to={`/${type}/${newpage1 - 1}`} key={0}>上一页</Link>)
    }
    for (let i = 1; i <= pageLen; i++) {
      if (i === newpage1) {
        nubs.push(<span key={i}>{i}</span>);
      } else {
        nubs.push(<Link to={`/${type}/${i}`} key={i}>{i}</Link>);
      }

    }
    if (newpage1 !== pageLen) {
      nubs.push(<Link to={`/${type}/${newpage1 + 1}`} key={pageLen + 1}>下一页</Link>)
    }
    return nubs;
  }
  return <nav className="pagination">

    {setNub()}
  </nav>;
}
export default Pagination;
