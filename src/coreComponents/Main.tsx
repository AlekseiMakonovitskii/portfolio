import React from 'react'
import styles from './styles/Main.module.css';

interface MainProps {
  children: React.ReactNode
}

function Main(props: MainProps) {
  const { children } = props;
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}

export default React.memo(Main);
