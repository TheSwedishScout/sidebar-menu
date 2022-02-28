import React from 'react'
import { menuItemInterface } from './menuItemInterface';
import { MenuItem } from './MenuItem';

interface props {
  menuStructure: Array<menuItemInterface>
  className?: string
  depth?: number
}

export const MenuList = ({menuStructure, className, depth = 1}: props) => {
  return (
    <ul className={`${className || 'closed'} menu-list`} >
      {menuStructure.map(structure => {
          return <MenuItem key={structure.name} structure={structure} depth={depth} ></MenuItem>
      })}
    </ul>
  )
}


