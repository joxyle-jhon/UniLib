import React from 'react'
import Navigation from '../navigation/Navigation'

const ProtectedRoute = () => {
  return (
    <div className='flex'>
      <div className='flex-[1.8] ring-1 ring-slate-200 min-h-screen'>
        <Navigation />
      </div>
      <div className='flex-[10.2] min-h-screen'>Content</div>
    </div>
  )
}

export default ProtectedRoute
