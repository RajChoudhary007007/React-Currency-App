// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    currencyList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCurrencyItem()
  }

  getCurrencyItem = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedList = data.map(eachData => ({
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      euroValue: eachData.euro_value,
      usdValue: eachData.usd_value,
      id: eachData.id,
    }))
    this.setState({currencyList: updatedList, isLoading: false})
    console.log(updatedList)
  }

  render() {
    const {currencyList, isLoading} = this.state

    return (
      <div className="currency-tracker-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="currency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="currency-container-item">
          <div className="coin-tyre-container">
            <h1 className="type-heading">Coin Type</h1>
            <div className="min-container">
              <h1 className="type-heading">USD</h1>
              <h1 className="type-heading">EURO</h1>
            </div>
          </div>
          <ul className="currency-item">
            {isLoading ? (
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            ) : (
              currencyList.map(eachList => (
                <CryptocurrencyItem key={eachList.id} itemDetails={eachList} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
