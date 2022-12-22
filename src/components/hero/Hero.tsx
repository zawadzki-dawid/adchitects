import Image from 'next/image'
import styles from './Hero.module.css'

export interface Props {
  img: string
  text: string
}

const Hero = ({ img, text }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.text}>{text}</h1>
        <div className={styles.image__wrapper}>
          <Image
            fill
            src={img}
            priority={true}
            alt={'Headers image'}
            className={styles.image}
          />
        </div>
      </div>
    </header>
  )
}

export default Hero
