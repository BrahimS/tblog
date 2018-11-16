import React from 'react'

const Banner = (props) => ( 
  <img 
  className="Blog_Banner"
    src={props.image}
    alt={props.title}
  />
)
 


export default Banner