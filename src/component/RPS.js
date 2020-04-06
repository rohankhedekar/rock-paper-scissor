import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class RPS extends React.Component {
    constructor() {
        super()
        this.state = {
            playerChoice: -1,
            computerChoice: -1,
            playerWinCounter: 0,
            computerWinCounter: 0,
            drawMatchCounter: 0
        }
    }

    resetEverything = () => {
        this.setState({
            playerChoice: -1,
            computerChoice: -1,
            playerWinCounter: 0,
            computerWinCounter: 0,
            drawMatchCounter: 0
        })
    }

    increementPlayerCounter = () => {
        this.setState({ playerWinCounter: this.state.playerWinCounter + 1 })
    }

    increementComputerCounter = () => {
        this.setState({ computerWinCounter: this.state.computerWinCounter + 1 })
    }

    increementDrawMatchCounter = () => {
        this.setState({ drawMatchCounter: this.state.drawMatchCounter + 1 })
    }

    setChoices = (changeEvent) => {
        this.setState({
            playerChoice: parseInt(changeEvent.target.value),
            computerChoice: Math.floor(Math.random(0) * 3)
        })

        setTimeout(() => {
            const player = this.state.playerChoice
            const comp = this.state.computerChoice

            if (player === 0 && comp === 1) {
                this.increementComputerCounter();
            } else if (player === 1 && comp === 0) {
                this.increementPlayerCounter()
            } else if (player === 1 && comp === 2) {
                this.increementComputerCounter();
            } else if (player === 2 && comp === 1) {
                this.increementPlayerCounter()
            } else if (player === 2 && comp === 0) {
                this.increementComputerCounter();
            } else if (player === 0 && comp === 2) {
                this.increementPlayerCounter()
            } else if (player === comp) {
                this.increementDrawMatchCounter();
            }
        }, 200);
    }

    getChoice = (value) => {
        switch (value) {
            case 0: return 'Rock'; break;
            case 1: return 'Paper'; break;
            case 2: return 'Scissor'; break;
            default: return ''; break;
        }
    }

    render() {
        const disableAfterWin = this.state.playerWinCounter >= 10
            || this.state.computerWinCounter >= 10;
        return (
            <div className="container" align="center">
                <div className="col-sm-12">
                    <h1>Rock-Papper-Scissor</h1>
                </div>
                <div className="col-sm-12">
                    <table className="table" border="0">
                        <thead>
                            <tr align="center">
                                <th>Player</th>
                                <th>Computer</th>
                                <th>Draws</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr align="center">
                                <td>{this.state.playerWinCounter}</td>
                                <td>{this.state.computerWinCounter}</td>
                                <td>{this.state.drawMatchCounter}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="conatiner">
                    <div className="col-sm-12 mb-4">
                        <button className="btn btn-danger mr-2"
                            onClick={this.resetEverything}>Reset</button>
                    </div>
                    <div>
                        <div className="btn-group">
                            <button className="btn btn-primary mr-4" value="0"
                                onClick={this.setChoices} disabled={disableAfterWin}>Rock</button>
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-primary mr-4" value="1"
                                onClick={this.setChoices} disabled={disableAfterWin}>Paper</button>
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-primary mr-4" value="2"
                                onClick={this.setChoices} disabled={disableAfterWin}>Scissor</button>
                        </div>
                    </div>
                </div>

                {
                    this.state.playerChoice > -1 ?
                        <div className="col-sm-12 mt-2">
                            <div>
                                <h3>
                                    You choose - {this.getChoice(this.state.playerChoice)}
                                </h3>
                            </div>
                            <div>
                                <h3>
                                    Computer choose - {this.getChoice(this.state.computerChoice)}
                                </h3>
                            </div>

                        </div>
                        : ''
                }

                {
                    (this.state.playerWinCounter >= 10
                        || this.state.computerWinCounter >= 10) ?
                        this.state.playerWinCounter >= 10 ?
                            <div className="col-sm-12">
                                <h2>Hurray!! You Won</h2>
                            </div>
                            : <div className="col-sm-12">
                                <h2>Computer Won</h2>
                            </div>
                        : ''
                }
            </div>
        )
    }
}
