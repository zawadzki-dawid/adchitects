import styles from './Newsletter.module.css'

// Components
import Form from './Form'

const Newsletter = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Sign up for Newsletter</h2>
      <Form />
    </section>
  )
}

export default Newsletter
