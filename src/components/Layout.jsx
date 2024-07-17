import { useEffect } from "react"
import Footer from "./Footer"
import Header from "./Header"
// import PropTypes from 'prop-types'


export default function Layout( {children} ) {
  // Layout.propTypes = {
  //   children: PropTypes.any
  // }
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div>
      <Header/>
       <div className="content font-mont">{children}</div>
      <Footer />
    </div>
  )
}
