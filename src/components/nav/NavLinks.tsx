import Link from 'next/link'
import styles from './Nav.module.css'
import { type Page } from '../../api/pages'

const NavLink = ({ url }: Pick<Page, 'url'>) => {
  const text = url.replace('/', '')
  return (
    <Link
      href={url}
      className={styles.link}
    >
      {text}
    </Link>
  )
}

export interface Props {
  pages: Page[]
}

const NavLinks = ({ pages }: Props) => {
  const filteredPages = pages.filter(({ url }) => url !== '/')

  return (
    <div className={styles.links}>
      {filteredPages.map(({ id, url }) => (
        <NavLink
          key={id}
          url={url}
        />
      ))}
    </div>
  )
}

export default NavLinks
