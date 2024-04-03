import React from 'react'

const Footer = (prop) => {
  let text = prop.footerText
  return (
    <div className="footer">
      {/* <h1 className='footerText'>{prop.footerText.isim + " "+ prop.footerText.soyisim}</h1> */}
      <h1 className='footerText'>{text}</h1>
    </div>
  )
}

export default Footer