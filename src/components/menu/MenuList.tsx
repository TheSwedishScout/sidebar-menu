import React from 'react'
import { menuItemInterface } from './menuItemInterface';
import { MenuItem } from './MenuItem';

interface props {
  menuStructure: Array<menuItemInterface>
  className?: string
  depth?: number
  currentPage: string
}

export const MenuList = ({menuStructure, className, depth = 1, currentPage}: props) => {
  return (
    <ul className={`${className || 'closed'} menu-list`} >
      {menuStructure.map(structure => {
          return <MenuItem currentPage={currentPage} key={structure.name} structure={structure} depth={depth} ></MenuItem>
      })}
    </ul>
  )
}


