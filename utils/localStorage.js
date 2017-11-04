import { AsyncStorage } from 'react-native';

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    AsyncStorage.setItem('state', serializedState);
  } catch (err) {
    console.log("There was a write error.");
  }
};
