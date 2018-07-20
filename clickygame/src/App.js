import React, { Component } from "react";
import MusicianCard from "./components/MusicianCard";
import Score from "./components/Score";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import musicians from "./musicians.json";
import "./App.css";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    musicians,
  };

  clickedMusician = id => {
    // Filter this.state.musicians for musicians with an id not equal to the id being removed
    // const musicians = this.state.musicians.filter(element => element.id !== id);
    // Set this.state.musicians equal to the new musicians array
    let currentIndex = this.state.musicians.length
    let temporaryValue 
    let randomIndex
    let copyOfMusicians = this.state.musicians.map(eachMusician => eachMusician)

  // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

    // And swap it with the current element.
      temporaryValue = copyOfMusicians[currentIndex];
      copyOfMusicians[currentIndex] = copyOfMusicians[randomIndex];
      copyOfMusicians[randomIndex] = temporaryValue;
    }
      console.log(temporaryValue, randomIndex, copyOfMusicians)
      
    // do your magic with updating the score

    this.setState({ musicians: copyOfMusicians });
  };

  // Map over this.state.musicians and render a MusicianCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>CLICKY GAME</Title>
        <Score>Score:</Score>
        {this.state.musicians.map(musician => (
          <MusicianCard
            clickedMusician={this.clickedMusician}
            id={musician.id}
            key={musician.id}           
            image={musician.image}                       
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

