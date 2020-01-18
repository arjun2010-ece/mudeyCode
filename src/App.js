import React, {useState, useEffect} from 'react'
import {NestedLists} from './components/NestedLists'
import './App.css'
import axios from 'axios'


const App = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    init()
  }, [])

  const init =  async () => {
    setLoading(true)    
    await axios.get('http://localhost:3001/apiData').then(resp =>{
      setData(resp.data)
      unflatten(resp.data)      
    }).catch(err =>{
      setError(true)
      console.log(err)
    })
    setLoading(false)
  }

  const unflatten = indata => {
    let nodes
    if(indata){
      nodes = indata.sort((a, b) => a.id - b.id)
        .reduce((a, e) => {
          a[e.id] = a[e.id] || e
          a[e.parent_id] = a[e.parent_id] || {}
          const parent = a[e.parent_id]
          parent.children = parent.children || []
          parent.children.push(e)
          return a
        }, {})
   
      if(nodes){
        setFilteredData(Object.values(nodes).find(e => e.id === undefined).children)
        return Object.values(nodes).find(e => e.id === undefined).children
      }
    }
  }
  const showLoader = () => {
    if(loading){
      return (
        <p data-testid='loadingtestid'>Loading....</p>
      )
    }
  }
  const showError = () => {
    if(error){
      return (
        <p data-testid='errortestid'>There is some issue in getting the results. We will be back soon.</p>
      )
    }
  }

  return (
    <div className='container'>
      {showLoader()}
      {showError()}
      <h2 data-testid='firstList'>First list untouched</h2>
      <ul>
        {data.map((el, i) => (
          <li key={i}>{el.id}</li>
        ))}
      </ul>
      <h2 data-testid='secondList'>Second list Manipulated</h2>
      <NestedLists filteredData={filteredData} />
    </div>
  )
}
export default App