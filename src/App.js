import React, {useState} from 'react';
import {apiData} from './data/api';
import './App.css';


const App = () => {
  const [data, setData] = useState(apiData);

  const unflatten = indata => {
    let nodes;
    if(indata){
     nodes = indata.sort((a, b) => a.id - b.id)
      .reduce((a, e) => {
        a[e.id] = a[e.id] || e;
        a[e.parent_id] = a[e.parent_id] || {};
        const parent = a[e.parent_id];
        parent.children = parent.children || [];
        parent.children.push(e);
        return a;
      }, {});
   
    if(nodes){
        return Object.values(nodes)
        .find(e => e.id === undefined).children;
    }
  }
  };

  return (
    <div className="container">

       <h2>Second list touched or manipulated</h2>
       { JSON.stringify(unflatten()) }
      </div>
  )
}
export default App;