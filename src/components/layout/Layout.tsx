import { type Page } from '../../api/pages'
import { type PageData } from '../../api/page'

// Components
import Nav from '../nav/Nav'
import Hero from '../hero/Hero'
import Newsletter from '../newsletter/Newsletter'
import Testimonial from '../testimonial/Testimonial'

interface Props extends Pick<PageData, 'sections'> {
  pages: Page[]
}

const getSectionElement = (section: PageData['sections'][0]): JSX.Element | undefined => {
  switch (section.type) {
    case 'hero':
      return (
        <Hero
          key={section.type}
          img={section.img}
          text={section.text}
        />
      )
    case 'testimonial':
      return (
        <Testimonial
          key={section.type}
          text={section.text}
          author={section.author}
        />
      )
    case 'newsletter':
      return <Newsletter key={section.type} />
    default:
      return undefined
  }
}

const Layout = ({ pages, sections }: Props) => {
  return (
    <>
      <Nav pages={pages} />
      {sections.map(getSectionElement).filter((section) => !!section)}
    </>
  )
}

export default Layout
