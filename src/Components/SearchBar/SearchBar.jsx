import React from 'react'
import styles from './searchBar.module.css'

const SearchBar = ({...rest}) => {
  return (
    <div className={styles.SearchBar}>
      <input type="text" className={styles.coin_input} {...rest}/>
    </div>
  )
}

export default SearchBar