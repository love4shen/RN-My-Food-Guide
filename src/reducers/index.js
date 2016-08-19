import { combineReducers } from 'redux';
import directional_statements from './directional_statements';
import foodgroups from './foodgroups';
import foods from './foods';
import servings from './servings';

const ecoAction = combineReducers({
  directional_statements,
  foodgroups,
  foods,
  servings,
});

export default ecoAction;
