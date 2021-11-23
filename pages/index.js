import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/layout/Footer'

import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/client'

export default function Home() {
  const [session, loading] = useSession()
  console.log(session, loading)
  return (
    <div>
      {/* <h2 className={styles.home_content}> */}
      <h2>
        Hello {session ? session.user.name : 'Guest'}!<br />
        <br />
        <p>Welcome to Next Auth Home Page</p>
      </h2>
    </div>
  )
}

// Home.getLayout = function (page) {
//   return (
//     <>
//       <Navbar />
//       {page}
//     </>
//   )
// }
