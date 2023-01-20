import Link from 'next/link'
import styles from 'styles/nav.module.css'

export default function Nav () {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href='/about'>
            About
          </Link>
        </li>
        <li>
          <Link href='/contents'>
            Contents
          </Link>
          <ul>
            <li><Link href='/submenu01'>Beans</Link></li>
            <li><Link href='/submenu02'>Coffee</Link></li>
          </ul>
        </li>
        <li>
          <Link href='/drip'>
            Drip
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}
