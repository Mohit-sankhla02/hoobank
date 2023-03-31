import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px] justify-evenly box-shadow`}>
      <div>
        <h2 className={`${styles.heading2}`}>Let's try out service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow you business anywhere on the planet</p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button>Get Started</Button>
      </div>
    </section>
  )
}

export default CTA