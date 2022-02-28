import { useState } from 'react';
import { menuItemInterface } from './menuItemInterface';
import { MenuList } from './MenuList';

interface props {
  structure: menuItemInterface
  // open?: boolean
  depth: number
}

export const MenuItem = ({structure, depth} :props) => {
  const [open, setOpen] = useState(false)
  const hasChildren = structure.children && structure.children.length > 0
  return (
    <li 
      className = 'list-item'
      onClick={(event)=> {
        event.preventDefault()
        event.stopPropagation()
        console.log(structure)
        if (hasChildren) {
          setOpen(!open)
        }
      }}
    > 
      <div className="text-wrapper" style={{paddingLeft: depth + 'rem'}}>
        <div className={`${open ? 'open' : 'closed'} ${hasChildren ? 'chevron' : 'spacer'}`}/>
        <button>{structure.name}</button >
      </div>
      {structure.children && structure.children.length > 0 && <MenuList className={open ? 'open' : 'closed'} menuStructure={structure.children} depth={ depth+1 } />}
    </li>
  )
}
