import { card } from '../assets'
import styles, {layout} from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>

      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" />
      </div>
    </section>
  )
}

export default CardDeal