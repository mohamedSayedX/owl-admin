import React from 'react'
import './style.css'
import { SearchIconify } from './svgicons'

const SearchInput = ({
  placeholder,
  value,
  containerStyles,
  onChange,
  inputStyles,
  ...props
}) => {
  return (
    <div className="searchInput" style={{width:'100%'}} >
      <div className='searchIcon'>{SearchIconify}</div>
      <input  style={inputStyles} {...props} type="text" onChange={onChange} placeholder={placeholder ||  "Search..."} />
    </div>
  )
}

export default SearchInput
