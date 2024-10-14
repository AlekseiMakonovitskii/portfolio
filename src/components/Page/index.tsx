import React from 'react'
import style from './Page.module.scss'

interface PageProps {
  children: React.ReactNode
}

function Page(props: PageProps) {
  const { children } = props;
  return (
    <div className={style.page}>{children}</div>
  )
}

export default React.memo(Page);
