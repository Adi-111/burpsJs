import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
//local imports
import { colors } from './src/global/styles';
import RootNavigation from './src/navigation/RootNavigation';
import HomeScreen from './src/screens/HomeScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={colors.statusBar} />
      {/* <RootNavigation /> */}
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
