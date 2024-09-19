import React from 'react'
import HistoryContainer from './history-container'

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen p-2 fixed top-0 right-0 flex-col justify-center pb-24 hidden sm:flex">
      <HistoryContainer location="sidebar" />
    </div>
  )
}

export default Sidebar
