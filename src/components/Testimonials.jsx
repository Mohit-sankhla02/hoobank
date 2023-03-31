import styles, { layout } from "../style";

const Testimonials = () => {
  return (
    <>
      <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            What people are<br className='sm:block hidden' /> saying about us
          </h2>
        </div>
        <div className={layout.sectionInfo}>
          <p className={`${styles.paragraph} max-w-[470px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </section>

      <section className={layout.section}>
        
      </section>
    </>
  )
}

export default Testimonials;