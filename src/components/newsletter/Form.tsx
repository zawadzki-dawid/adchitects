import { FormEvent, useState } from 'react'
import styles from './Newsletter.module.css'
import newsletterApi, { type JoinNewsletter } from '../../api/newsletter'

const Input = () => {
  return (
    <input
      type={'text'}
      name={'email'}
      className={styles.input}
      placeholder={'Type your email'}
    />
  )
}

const Button = () => {
  return (
    <button
      type={'submit'}
      className={styles.button}
    >
      Submit
    </button>
  )
}

const Response = ({ type, message }: JoinNewsletter) => {
  return <div className={`${styles.response} ${type === 'success' ? styles.success : styles.error}`}>{message}</div>
}

interface Elements extends HTMLFormControlsCollection {
  email: HTMLInputElement
}

interface Form extends HTMLFormElement {
  readonly elements: Elements
}

const Form = () => {
  const [response, setResponse] = useState<JoinNewsletter | null>(null)

  const onSubmit = async (event: FormEvent<Form>) => {
    event.preventDefault()
    const email = event.currentTarget.elements.email.value
    const data = await newsletterApi.join(email)
    setResponse(data)
  }

  return (
    <form
      onSubmit={onSubmit}
      className={styles.form}
    >
      <div className={styles.wrapper}>
        <Input />
        <Button />
      </div>
      {response && (
        <Response
          type={response.type}
          message={response.message}
        />
      )}
    </form>
  )
}

export default Form
