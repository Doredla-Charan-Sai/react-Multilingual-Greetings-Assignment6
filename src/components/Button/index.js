import './index.css'

const Button = props => {
  const {details, onSelect, activeLanguage} = props
  const isActive = activeLanguage.id === details.id
  const select = () => {
    onSelect(details)
  }
  return (
    <li className="list-item">
      <button
        type="button"
        className={isActive ? 'active-btn' : 'btn'}
        onClick={select}
      >
        {details.buttonText}
      </button>
    </li>
  )
}
export default Button
