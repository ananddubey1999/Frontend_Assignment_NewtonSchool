export const addNumber=()=>{
    return{
        type: 'INCREMENT'
    }
}

export const subNumber=()=>{
    return{
        type: 'DECREMENT'
    }
}

export const handlelogin=()=>{
    return{
        type: 'SIGN_IN'
    }
}

export const handlelogout=()=>{
    return{
        type: 'SIGN_OUT'
    }
}

export const addAmount=(val)=>{
    return{
        type: 'INCREMENTBYAMOUNT',
        payload: val
    }
}
