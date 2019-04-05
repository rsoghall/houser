import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
// import House from '../House/House'


export class Wizard extends Component {
  constructor (){
    super()
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    }
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/houses', this.state)
      .then(res => {
        this.setState({
          house_id: null,
          name: '',
          address: '',
          city: '',
          state: '',
          zipcode: ''
        })
      })
  }
  render() {
    // let {houses} = this.props
    let {name, address, city, state, zipcode} = this.state
    return (
      <div>
        <h1> Add New Listing - Wizard</h1>
        <Link to='/'>
        <button>Cancel</button>
        </Link>

        <form onSubmit={this.handleSubmit}>
          <p>Property Name</p>
            <input onChange={this.handleChange} value={name} type='text' name='name'/>
          <p>Address</p>
            <input onChange={this.handleChange} value={address} type='text' name='address'/>
          <p>City</p>
            <input onChange={this.handleChange} value={city} type='text' name='city'/>
          <p>State</p>
            <input onChange={this.handleChange} value={state} type='text' name='state'/>
          <p>Zip Code</p>
            <input onChange={this.handleChange} value={zipcode} type='text' name='zipcode'/>
        {/* {houses.map(house => {
          return <House 
          key={house.house_id}
          name={house.name}
          addres={house.address}
          city={house.city}
          state={house.state}
          zipcode={house.zipcode}
          />
        })} */}
        </form>
      </div>
    )
  }
}

export default Wizard
