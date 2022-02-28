import { RouteComponentProps } from '@reach/router'
import React, { useEffect } from 'react'
interface pageProps extends RouteComponentProps
{
	invoiceId?: string;
  page?: string
  setCurrentPage: (value: string) => void;
}
export const RandomPage = ({page, setCurrentPage}: pageProps) => {
  useEffect(() => {
    setCurrentPage(page || '/')
  
    return () => {
      setCurrentPage('/')
    }
  }, [page, setCurrentPage])
  
  return (
    <div>{page}</div>
  )
}
