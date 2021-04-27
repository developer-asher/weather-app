import React, { Component } from 'react';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';

const API_KEY = 'f71b1c8916611cf4db595cc59f68bf20';
export default class App extends Component {
  state = {
    isLoading: true,
    temp: null,
    condition: null,
    icon: null,
  };

  getWeather = async (latitude, longitude) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
    )
      .then((response) => response.json())
      .then((myJson) => {
        console.log(myJson);
        const temp = myJson.main.temp;
        const condition = myJson.weather[0].main;
        const icon = myJson.weather[0].icon;

        this.setState({
          isLoading: false,
          temp: temp,
          condition: condition,
          icon: icon,
        });
      });
  };

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("can't find you", 'so sad');
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition, icon } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={temp} condition={condition} icon={icon} />
    );
  }
}
