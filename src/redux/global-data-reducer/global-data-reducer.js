 
 const INITIAL_STATE={
     dataR:null
 }
 const globalReducer = (state=INITIAL_STATE ,action)=>{
      switch(action.type){
        case'SET_GLOBAL_STAT_DATA':
            return{
                ...state,
                dataR:action.payload
            }

        default:
            return state;

      }
 }
 export default globalReducer;