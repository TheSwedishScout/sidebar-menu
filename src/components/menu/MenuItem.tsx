import { Link } from '@reach/router';
import { useEffect, useState } from 'react';
import { menuItemInterface } from './menuItemInterface';
import { MenuList } from './MenuList';

interface props {
  structure: menuItemInterface
  // open?: boolean
  depth: number
  currentPage: string
}



export const MenuItem = ( {structure, depth, currentPage} :props) => {
  const [open, setOpen] = useState(false)
  const hasChildren = structure.children && structure.children.length > 0

  const deepSearch = (childStructure: menuItemInterface) :boolean => {
    if(childStructure.name === currentPage) {
      console.log('TRUE', childStructure.name)
      return true
    }
    if (childStructure.children && childStructure.children.length > 0) {
      return childStructure.children.map(deepSearch).some(bool => bool === true)
    }
    return false
  }

  useEffect(() => {
    if(currentPage === structure.name) {
      setOpen(true)
    }
    if (structure.children && structure.children.length > 0) {
      const isChildActive = structure.children.map(deepSearch).some(bool => bool === true)
      if(isChildActive ) {
        setOpen(true)
      }
    }
  }, [currentPage])
  

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
      <div className={`text-wrapper ${currentPage === structure.name ? 'active' : ''}`} style={{paddingLeft: depth + 'rem'}}>
        <div className={`${open ? 'open' : 'closed'} ${hasChildren ? 'chevron' : 'spacer'}`}/>
        <Link  to={`/${structure.name}`}>{structure.name}</Link>
      </div>
      {structure.children && structure.children.length > 0 && <MenuList currentPage={currentPage} className={open ? 'open' : 'closed'} menuStructure={structure.children} depth={ depth+1 } />}
    </li>
  )
}
