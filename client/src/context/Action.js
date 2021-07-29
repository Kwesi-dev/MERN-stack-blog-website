export const LoginStart = (userCredentials)=>({
    type: "LOGINSTART"
})

export const LoginSuccess = (user)=>({
    type: "LOGIN_SUCCESS",
    payload: user
})

export const LoginFailure = ()=>({
    type: "LOGIN_FAILURE"
})

export const LogOut = ()=>({
    type: "LOG_OUT"
})