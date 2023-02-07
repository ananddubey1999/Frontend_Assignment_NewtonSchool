const initialState={
    counter:0,
    islogged:false
}

const reducer = (state=initialState,action)=>{

    switch(action.type){
        case 'INCREMENT': return{
            counter:Number(state.counter)+1,
            islogged : true
        }

        case 'DECREMENT': return{
            counter:Number(state.counter)-1,
            islogged : true
        }

        case 'SIGN_IN' : return{
            counter:state.counter,
            islogged : true
        }

        case 'SIGN_OUT' : return{
            counter:0,
            islogged : false
        }

        case 'INCREMENTBYAMOUNT' : return{
            counter:Number(state.counter)+Number(action.payload),
            islogged : true
        }

        default : return {counter:state.counter,
            islogged : false
        }
    }
}

export default reducer
