import {
  createStore,
  compose,
} from 'redux';
import { AsyncStorage } from 'react-native';
import ecoAction from './reducers';
import { persistStore, autoRehydrate } from 'redux-persist';
import fg_directional_satements from './data/fg_directional_satements-en.json';
import foodgroups from './data/foodgroups-en.json';
import foods from './data/foods-en.json';
import servings from './data/servings_per_day-en.json';

const configureStore = () => {
  const store = autoRehydrate()(createStore)(ecoAction, {
    ...fg_directional_satements,
    ...foodgroups,
    ...foods,
    servings: servings['servings to per to miy'],
  });

  persistStore(store, {storage: AsyncStorage});

  return store;
}

export default configureStore;
