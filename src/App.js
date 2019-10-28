import React, { Component } from "react";
import Card from "./components/card";
import Wrapper from "./components/wrapper"; //THIS IS WHERE THE GAME MAT
import Header from "./components/header";
import cards from "./cards.json"; ///THIS IS PULLING FROM THE CARDS JSON FILE
import "./App.css";

///ALL IMPORTS MUST BE IN UPPER CASE.


class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  }; //This is the header keeping count

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>SMASH BROS MEMORY GAME</Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;