import React from 'react'

const Button = ({bgColor, bgHoverColor,color,size,text,borderRadius}) => {
  return (
   <button
   type='button'
   style={{backgroundColor: bgColor,color,borderRadius,bgHoverColor}}
   className={`text-${size} p-3 hover:drop-shadow-xl`}>
{text}
   </button>
  )
}

export default Button