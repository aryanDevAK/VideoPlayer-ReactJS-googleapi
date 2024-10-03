import React from 'react'
import "./video.css"
import PlayVideo from '../../components/playvideo/PlayVideo'
import Sidebar from '../../components/sidebar/Sidebar'
import Recomend from '../../components/recommended/Recomend'
import { useParams } from 'react-router-dom'

const Video = () => {
  const {videoId,categoryId} = useParams()
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId} />
      <Recomend />
      </div>
  )
}

export default Video