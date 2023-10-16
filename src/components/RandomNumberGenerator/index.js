// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {GenerateButton: 0}

  onClickGenerateButton = () => {
    const newGenerateRandomNumber = Math.ceil(Math.random() * 100)
    console.log(Math.ceil(95.906698007537561)) // 96
    this.setState({GenerateButton: newGenerateRandomNumber})
  }

  render() {
    const {GenerateButton} = this.state

    return (
      <div className="main-bg-container">
        <div className="main-card-container">
          <h1 className="main-heading">Random Number</h1>
          <p className="main-paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.onClickGenerateButton}
          >
            Generate
          </button>
          <p className="random-generate-digit">{GenerateButton}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
