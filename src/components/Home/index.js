import {Component} from 'react'
import Button from '../Button'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]
class Home extends Component {
  state = {activeLanguage: languageGreetingsList[0]}

  getGreet = uniqueId => {
    this.setState({activeLanguage: uniqueId})
  }

  renderImage = () => {
    const {activeLanguage} = this.state
    return (
      <img
        className="image"
        src={activeLanguage.imageUrl}
        alt={activeLanguage.imageAltText}
      />
    )
  }

  render() {
    const {activeLanguage} = this.state
    return (
      <div className="bg-cont">
        <h1 className="main-head">Multilingual Greetings</h1>
        <ul className="lang-cont-list">
          {languageGreetingsList.map(eachItem => (
            <Button
              key={eachItem.id}
              onSelect={this.getGreet}
              details={eachItem}
              activeLanguage={activeLanguage}
            />
          ))}
        </ul>
        {this.renderImage()}
      </div>
    )
  }
}
export default Home
