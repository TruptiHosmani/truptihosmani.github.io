import React from 'react';
import styles from './CovidTracker.module.css'

import Cards from './Cards/Cards'
import Charts from './Charts/Charts'
import CountryPicker from './CountryPicker/CountryPicker'
import covid from './../../images/covid.png'
import { fetchData } from './../../api'

class CovidTracker extends React.Component{
  state = {
    data: {},
    country: ""
  }

  changeCountry = async (country) => {
    this.setState({country: country})
    const fetchedData = await fetchData(this.state.country)
    this.setState({data: fetchedData, country: country})
  }

  async componentDidMount (){
    const fetchedData = await fetchData()
    this.setState({data: fetchedData})
    console.log(fetchedData)
  }

  render(){
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covid} alt="covid-19"/>
        <Cards data={data}/>
        <CountryPicker selectedCountry={country} changeCountry={this.changeCountry}/>
        <Charts data={data} country={country}/>
      </div>
    );
  }
}

export default CovidTracker;
