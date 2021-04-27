import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function Weather({ temp, condition, icon }) {
  return (
    <View style={styles.container}>
      <Text>{temp}℃</Text>
      <Text>{condition}</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
        }}
      />
    </View>
  );
}

Weather.protoTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Mist',
    'Smoke',
    'Haze',
    'Dust',
    'Fog',
    'Sand',
    'Dust',
    'Ash',
    'Squall',
    'Tornado',
    'Clear',
    'Clouds',
  ]).isRequired,
  icon: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
});
