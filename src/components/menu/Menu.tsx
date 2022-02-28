import useSWR from 'swr'
import { menuItemInterface } from './menuItemInterface';
import { MenuList } from './MenuList';

import './menu.scss'
import { Loader } from '../Loader/Loader';

interface props {
  currentPage: string
}

const fetcher = async  (
  input: RequestInfo,
  init?: RequestInit
): Promise<{data: Array<menuItemInterface>}> => {
  const res = await fetch(input, init)
  return res.json()
}

export const Menu = ({currentPage}:props) => {
  const { data, error } = useSWR('https://run.mocky.io/v3/3fe9a18c-4807-4751-95c9-4cfc6a179d29', fetcher)
  
  return (
    <nav className="app-nav">
      <Loader isLoading= {!error && !data} /> 
      {error && (
        <div>
          <h3>error</h3>
          <p>{error.message}</p>
        </div>
        )}
      {data && <MenuList currentPage={currentPage} menuStructure={data?.data || []} className="open base" />}
    </nav>
  )
}


