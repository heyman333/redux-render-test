import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT_NUMBERA, DECREMENT_NUMBERA } from './store';

const AScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const onPressNext = () => {
    navigation.push('BScreen');
  };
  const numberA = useSelector(
    ({ ANumberstateReducer }) => ANumberstateReducer.numberA,
  );
  const incrementA = () => {
    dispatch({ type: INCREMENT_NUMBERA });
  };
  const decrementA = () => {
    dispatch({ type: DECREMENT_NUMBERA });
  };

  console.log('render AScreen!');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text>numberA: {numberA}</Text>
        <Button title="Bscreen으로" onPress={onPressNext} />
        <Button title="+" onPress={incrementA} />
        <Button title="-" onPress={decrementA} />
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

export default AScreen;
