import React from 'react'

import './loader.scss'

interface props {
  isLoading?: boolean
  darken?: boolean
}

export const Loader = ({isLoading = true, darken = true}: props) => {
  if(isLoading) {
    return (
      <div className='loader'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
  }
  return null
}
