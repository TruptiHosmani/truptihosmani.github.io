import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl, styled} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../../api'
const CountryPicker = ({changeCountry, country}) => {
  const [fetchedCountries, setFetchedCountries] = useState([])

  useEffect(()=>{
    const fetchApi = async () => {
      setFetchedCountries(await fetchCountries())
    }
    fetchApi()
  }, [setFetchedCountries])
  return(
     <FormControl className={styles.formControl}>
       <NativeSelect onChange={(e) => changeCountry(e.target.value)} defaultValue={country}>
         <option key="0" value=""> Global</option>
         {fetchedCountries.map((country, i) =>
         <option value={country} key={i}> {country}</option>
         )}
       </NativeSelect>
     </FormControl>
  )
}

export default CountryPicker