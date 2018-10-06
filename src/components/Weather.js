import React, { Component } from "react";
import axios from "axios";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherToday: []
    };
  }

  componentWillMount() {
    axios
      .get(
        "https://us-central1-terminus-161218.cloudfunctions.net/noah/four_hour_forecast"
      )
      .then(response => {
        this.setState({
          weatherToday: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.weatherToday.length > 0 ? (
          <div>{this.state.weatherToday[146].location}</div>
        ) : (
          "Loading data..."
        )}
      </React.Fragment>
    );
  }
}

export default Weather;
