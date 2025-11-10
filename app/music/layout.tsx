import React, { ReactNode } from 'react'

type CP = {
    children: ReactNode;
    sidebar: ReactNode;
}

const MusicLayout = ({children, sidebar}: CP) => {
  return (
    <div className='flex'>
      {sidebar}
      <div></div>
      {children}
    </div>
  )
}

export default MusicLayout