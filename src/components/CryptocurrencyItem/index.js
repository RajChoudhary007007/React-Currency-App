// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {itemDetails} = props
  const {id, currencyName, currencyLogo, euroValue, usdValue} = itemDetails

  return (
    <li className="item-container">
      <div className="card-container">
        <img className="currency_logo" src={currencyLogo} alt={currencyName} />
        <p className="description">{currencyName}</p>
      </div>
      <div className="card-container">
        <p className="description-value">{usdValue}</p>
        <p className="description-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
