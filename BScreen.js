import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT_NUMBERAA, DECREMENT_NUMBERAA } from './store';

const BScreen = () => {
  const dispatch = useDispatch();
  const numberAA = useSelector(
    ({ ANumberstateReducer }) => ANumberstateReducer.numberAA,
  );

  const incrementB = () => {
    dispatch({ type: INCREMENT_NUMBERAA });
  };
  const decrementB = () => {
    dispatch({ type: DECREMENT_NUMBERAA });
  };

  console.log('redner BScreen');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text>numberAA: {numberAA}</Text>
        <Button title="+" onPress={incrementB} />
        <Button title="-" onPress={decrementB} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BScreen;
