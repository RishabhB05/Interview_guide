import React from 'react'

const Authlayout = ({children}) => {
  return (
    <div className='flex flex-col items-center py-15 justify-center '>
     {children}
    </div> 
  )
}

export default Authlayout;