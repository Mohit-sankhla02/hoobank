import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${props.styles} rounded-[20px]`} >{props.children}</button>
  )
}

export default Button