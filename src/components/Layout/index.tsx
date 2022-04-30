import React from 'react'
import { Helmet } from 'react-helmet'

import * as styles from './layout.module.css'
interface Props {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <main className={styles.bgMain}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {children}
    </main>
  )
}
export default Layout
