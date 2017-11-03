import { AsyncStorage } from 'react-native';

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    AsyncStorage.setItem('state', serializedState);
  } catch (err) {
    console.log("There was a write error.");
  }
};

export const loadState = () => {
  try {
    const serializedState = AsyncStorage.getItem('state');
    if (serializedState !== null) {
      console.log('Returned State');
      console.log(JSON.parse(serializedState));
      return JSON.parse(serializedState);
    }
    console.log('Returned undefined');
    return undefined;
  } catch (err) {
    return undefined;
  }
};

