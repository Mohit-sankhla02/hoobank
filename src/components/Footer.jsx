import styles from '../style'
import {footerLinks, socialMedia} from '../constants/index.js'
import { logo } from '../assets';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter}`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain'/>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make payments easy, reliable and secure.</p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
              <h4 className='font-poppins font-medium text-[18px] leading[27px] text-white mb-4'>{footerLink.title}</h4>
              <ul>
                {footerLink.links.map((link, index) => {
                  return <li key={link.name} className={`font-poppins font-normal text-[16px] leading[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length ? 'mb-2' : 'mb-0'}`}>{link.name}</li>
              })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer;