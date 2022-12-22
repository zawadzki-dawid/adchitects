import styles from './Testimonial.module.css'

// Components
import QuotationIcon from '../../icons/QuotationIcon'

export interface Props {
  text: string
  author: string
}

const Testimonial = ({ text, author }: Props) => {
  return (
    <section className={styles.section}>
      <blockquote className={styles.content}>
        <QuotationIcon />
        <p className={styles.quote}>{text}</p>
        <footer className={styles.author}>{author}</footer>
      </blockquote>
    </section>
  )
}

export default Testimonial
