import Link from 'next/link'
import styles from './Nav.module.css'

// Components
import LogoIcon from '../../icons/LogoIcon'
import NavLinks, { Props as PropsNavLinks } from './NavLinks'

const Logo = () => {
  return (
    <Link
      href={'/'}
      className={styles.logo}
    >
      <LogoIcon />
    </Link>
  )
}

const ContactLink = () => {
  return (
    <Link
      href={'/contact'}
      className={`${styles.link} ${styles.button}`}
    >
      Contact us
    </Link>
  )
}

const Nav = ({ pages }: PropsNavLinks) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <Logo />
          <NavLinks pages={pages} />
        </div>
        <ContactLink />
      </div>
    </nav>
  )
}

export default Nav
