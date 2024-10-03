import React, { useState } from 'react'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Feeds from '../../components/feeds/Feeds'

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0)
  return (
    <div>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${sidebar?"":"large-container"}`}>
        <Feeds category={category} />
      </div>
    </div>
  )
}

export default Home