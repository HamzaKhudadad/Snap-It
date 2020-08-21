import { combineReducers } from 'redux';

 import globalReducer from './global-data-reducer/global-data-reducer';
 import CountriesStatReducer from './countries-stat-reducer/countries-stat-reducer'
 export default combineReducers(
    {
         global: globalReducer ,
         CountriesStat: CountriesStatReducer 
     }
 ); 