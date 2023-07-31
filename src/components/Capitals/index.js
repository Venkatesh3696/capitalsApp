import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeSelection = event => {
    this.setState({activeCapitalId: event.target.value})
    const {activeCapitalId} = this.state
    console.log(activeCapitalId)
  }

  getCountry = () => {
    const {activeCapitalId} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapitalId} = this.state

    const country = this.getCountry(activeCapitalId)
    // const {id, capitalDisplayText, country} = countryAndCapitalsList
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1>Countries And Capitals</h1>
          <p>
            <span>
              <select onChange={this.onChangeSelection} value={activeCapitalId}>
                {countryAndCapitalsList.map(eachQuestion => (
                  <option key={eachQuestion.id} value={eachQuestion.id}>
                    {eachQuestion.capitalDisplayText}
                  </option>
                ))}
              </select>
            </span>
            is capital of which country?
          </p>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
