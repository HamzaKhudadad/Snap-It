 
 const INITIAL_STATE={
    countriesData:null
}
const CountriesStatReducer = (state=INITIAL_STATE ,action)=>{
     switch(action.type){
       case'SET_COUNTRIES_STAT_DATA':
           return{
               ...state,
               countriesData:action.payload
           }

       default:
           return state;

     }
}
export default CountriesStatReducer;