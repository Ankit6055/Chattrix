import React from 'react'
import { useParams } from 'react-router'

const Chat = () => {
  const params = useParams();  
  return (
    <div>Chat {params.uniqueId} </div>
  )
}

export default Chat