import  {useEffect} from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import {setdata} from '../../redux/global-data-reducer/global-data-actions';
import {setCountriesStat} from '../../redux/countries-stat-reducer/countries-stat-action'
// This Components Fetches data and update ReduxState
 const FetchdataRedux =()=>{
    const dispatch = useDispatch();
   

// React Hooks are used to leverage the use of State and life cycle methods in Functional components
//this fetches data and Update that data on Redux State
    useEffect(() => {
      let mounted = true
    axios.get(`https://disease.sh/v3/covid-19/countries`).then(res => {
      if (mounted) {
        dispatch(setdata(res.data),);
        dispatch(setCountriesStat(res.data));
      }
      });
    
      return function cleanup() {
        mounted = false
    }

    },[]);

  return(null)
    
}

export default FetchdataRedux;

