import React, { Component } from "react";
import "./App.css";
import Person from "./person/person";
import distance from "./functions/distance";
// npm install rc-slider@8.6.2
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import keyUpdateHandler from "./functions/keyUpdateHandler";

function log(value) {
  console.log("this :" + value[0]); //eslint-disable-line
}

class App extends Component {
  state = {
    number: 10,
    persons: [
      { name: "Jacob", age: 34, coordinates: { latitude: 43.6532, longitude: 79.3832 }, calculated: 0 },
      { name: "Sam", age: 50, coordinates: { latitude: 45.5017, longitude: 73.5673 } },
      { name: "George", age: 32, coordinates: { latitude: 43.0896, longitude: 79.0849 } },
      { name: "John", age: 43, coordinates: { latitude: 44.3894, longitude: 79.6903 } },
      { name: "Bob", age: 56, coordinates: { latitude: 81.6532, longitude: 79.3832 } },
      { name: "Glenn", age: 30, coordinates: { latitude: 13.6532, longitude: 79.3832 } },
      { name: "David", age: 27, coordinates: { latitude: 23.6532, longitude: 79.3832 } },
      { name: "Ali", age: 25, coordinates: { latitude: 12.6532, longitude: 79.3832 } },
      { name: "Eric", age: 24, coordinates: { latitude: 76.6532, longitude: 9.3832 } },
      { name: "Scott", age: 22, coordinates: { latitude: 69.6532, longitude: 89.3832 } },
      { name: "Dima", age: 19, coordinates: { latitude: 46.6532, longitude: 87.3832 } },
      { name: "Danny", age: 43, coordinates: { latitude: 24.6532, longitude: 21.3832 } },
      { name: "Rob", age: 33, coordinates: { latitude: 35.6532, longitude: 26.3832 } },
      { name: "Mike", age: 35, coordinates: { latitude: 36.6532, longitude: 34.3832 } },
      { name: "Fred", age: 37, coordinates: { latitude: 37.6532, longitude: 29.3832 } },
      { name: "Brock", age: 38, coordinates: { latitude: 38.6532, longitude: 19.3832 } },
      { name: "Jason", age: 40, coordinates: { latitude: 39.6532, longitude: 74.3832 } },
      { name: "Tim", age: 59, coordinates: { latitude: 41.6532, longitude: 71.3832 } },
      { name: "Sasha", age: 64, coordinates: { latitude: 42.6532, longitude: 75.3832 } }
    ],
    distanceSort: [],
    min: 18,
    max: 65,
    defaultLocation: { latitude: 43.6532, longitude: 79.3832 },
    distance: 6000
  };

  // calculate the distance to each person in the array, and assign the value to person object
  componentDidMount() {
    this.setState({ persons: keyUpdateHandler(this.state.persons, this.state.defaultLocation) })
  }

  filterMin = event => {
    this.setState({ min: event.target.value });
  };

  filterMax = event => {
    console.log("changed" + this.state.persons[0].calculated);
    this.setState({ max: event.target.value });
  };

  onSliderChange = value => {
    log(value);
    this.setState({ value });
    this.setState({ min: value[0], max: value[1] });
  };

  handleApply = () => {
    const { lowerBound, upperBound } = this.state;
    this.setState({ value: [lowerBound, upperBound] });
  };

  onDistanceChange = value => {
    console.log(value);
    this.setState({ distance: value });
    return value;
  };


  render() {
    const style = {
      width: "250px",
      height: "25px",
      margin: "auto",
      padding: "5px 0",
      paddingRight: "50px",
      borderWidth: "2px",
      borderRadius: "5px",
      fontSize: "1em"
    };

    let arr1 = this.state.persons.filter(p => p.calculated <= this.state.distance);
    let arr = arr1.filter(y => y.age > this.state.min && y.age < this.state.max);
    const listItems = arr.map(d => (<li key={d.name}> {d.name} {d.age}- Distance: <b> {d.calculated}
    </b> km
      </li>
    ));

 
    console.log(arr);

    return (
      <div className="App">


        <h4>Distance range:</h4>

        <Slider style={style} min={0} max={6000} defaultValue={6000} onChange={this.onDistanceChange} />
        <b>{this.state.distance}</b> Km
<hr />
        <h4>Age Range:</h4>

        <Range
          style={style}
          min={18}
          max={65}
          allowCross={true}
          defaultValue={[18, 65]}
          somevalue={0}
          onChange={this.onSliderChange}
          railStyle={{ backgroundColor: "black" }}
          trackStyle={[{ backgroundColor: "black" }]}
          pushable={true}
          dotStyle={{ backgroundColor: "green" }}
          activeDotStyle={{ backgroundColor: "blue" }} />
        <Person min={this.state.min} max={this.state.max} distance={this.state.distance} />

        <h4>List:</h4>
        {listItems}
        <hr />
        <p>
          Records: <b>{listItems.length}</b>
        </p>
      </div>
    );
  }
}



export default App;
