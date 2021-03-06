
import axios from 'axios'
const api_endpoint = "http://localhost:1337"
const auth_key = "auth_key"

export default {
    async login({ email, password }) {
        const body = {
            identifier: email,
            password: password
        }
        console.log(body);
        return await axios.post(api_endpoint+"/auth/local", body).then(
            (res) => {
                if(res.status == 200){
                    console.log(res);
                    localStorage.setItem(auth_key ,JSON.stringify(res.data))
                    return{
                        success: true,
                        user: res.data.user,
                        jwt: res.data.jwt
                    }
                }else{
                    console.log(res.message)
                }
            }
        ).catch((e)=>{
            if(e.response.status == 400){
                let err = e.response.data.message[0].messages[0].message;
                console.error(err)
                return err
            } else {
                console.error(e)
                return "Unknow error status: "+e.response.status
            }
        })
    },
    logout() {
        localStorage.removeItem(auth_key)
    },
    getUser(){
        const auth = JSON.parse(localStorage.getItem(auth_key));
        const user = {
            username: auth ? auth.user.username : "",
            email: auth ? auth.user.email : "",
            jwt: auth ? auth.jwt : "",
            role: auth ? auth.user.role.name : ""
        }
        return user
    },
    getJWT(){
        return this.getUser().jwt
    }
    ,
    isAuthen() {
        return this.getJWT() !== ""
    },
    async register({username, email, password}) {
        let body = {
            username: username,
            email: email,
            password: password
        }
        return await axios.post('http://localhost:1337' + '/auth/local/register',body)
        .catch((e)=>{
            if(e.response.status === 400)
                return e.response.data.message[0].messages[0].message
            else {
                console.error(e)
                return "Unknow error status: "+e.response.status
            }
        })
        
    }
}
