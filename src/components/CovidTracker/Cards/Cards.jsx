import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import cx from 'classnames'
const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate } }) => {
  console.log(confirmed)
  if(!confirmed){
    return "Loading..";
  }
  return(
    <div className={styles.container}>
      <Grid container justifyContent="center">
        <Grid item component={Card}  xs={12}  className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              {confirmed.value}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {lastUpdate}
            </Typography>
            <Typography variant="body2">
              Number of active COVID-19 case
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item component={Card}  xs={12}   className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              {recovered.value}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {lastUpdate}
            </Typography>
            <Typography variant="body2">
              Number of recovered COVID-19 case
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item component={Card}  xs={12}   className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              {deaths.value}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {lastUpdate}
            </Typography>
            <Typography variant="body2">
              Number of COVID-19  deaths
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards