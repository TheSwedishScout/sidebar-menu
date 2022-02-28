import React from 'react'
import { menuItemInterface } from './menuItemInterface';
import { MenuList } from './MenuList';

import './menu.scss'

interface props {
  menuStructure: Array<menuItemInterface>
  // open?: boolean
}

export const Menu = ({menuStructure}:props) => {
  return (
    <nav className="app-nav">
      <MenuList menuStructure = {menuStructure} className="open base" />
    </nav>
  )
}


