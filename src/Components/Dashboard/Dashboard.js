import React, { Component } from 'react'
import House from '../House/House';
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
          house_id: null,
          name: '',
          address: '',
          city: '',
          state: '',
          zipcode: ''
    }
  }
  read = () => {
    axios.get(`/api/houses`)
    .then(res => {
      this.setState({
        houses: res.data
      })
    })
  }
  render() {
    let {houses} = this.props

    return (
      <div>
        <h1>Dashboard</h1>
        <h3>Home Listings</h3>
        <Link to='/Wizard'>
        <button>Add New Property</button>
        </Link>
          {houses.map(house => {
            return <House 
          key={house.house_id}
          name={house.name}
          addres={house.address}
          city={house.city}
          state={house.state}
          zipcode={house.zipcode}
          />
          })}
        
      </div>
    )
  }
}
