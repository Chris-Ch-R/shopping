
import AuthService from '../services/AuthService'
import axios from 'axios'

export default {
    async getHistoryOnDate(type, dateStart, dateEnd) {
        if (AuthService.isAuthen()) {
            let role = AuthService.getUser().role
            if (role === "Admin") {
                return await axios.get(
                    "http://localhost:1337" + '/histories?eventType=' + type
                    , headers())
                    .then((res) => {
                        return {data:this.getSortedPriority(this.getFilterArrayHisOndate(res.data, dateStart, dateEnd))
                            ,err:""}
                    })
                    .catch(catchErr)
            } else return { data: {}, err: "You can't use this admin operation" }
        }
        else return { data: {}, err: "Please login before get receive history" }
    },
    getFilterArrayHisOndate(arr, dateStart, dateEnd) {
        let filtedArr = []
        for (let i = 0; i < arr.length; i++) {
            let time = new Date(arr[i].dateEvents)
            if (dateStart <= time && time <= dateEnd) {
                filtedArr.push(arr[i])
            }
        }
        return filtedArr
    },
    getSortedPriority(arr){
        let mapCount = new Map()
        for(let i=0;i<arr.length;i++){
            let dateData = mapCount.get(arr[i].email);
            if(!dateData){
                mapCount.set(arr[i].email, {data: arr[i], amount:arr[i].points});
            }else{
                mapCount.set(arr[i].email, {data: dateData.data, 
                    amount: dateData.amount + arr[i].points});
            }
        }
        let dataSortingArr = Array.from(mapCount.values())
        dataSortingArr.sort((a,b)=>{
            if(a.amount < b.amount){
                return 1
            }
            else if (b.amount < a.amount){
                return -1
            }
            else return 0
        })  
        return dataSortingArr
    },
    async getUserHistory() {
        if (AuthService.isAuthen()) {
            return await axios.get(
                "http://localhost:1337" + '/histories?email=' + AuthService.getUser().email
                , headers())
                .then((res)=>{
                    if(res.data)
                    res.data.sort((a,b)=>{
                        let time1 = new Date(a.dateEvents)
                        let time2 = new Date(b.dateEvents)
                        return time2 - time1
                    })
                    return {data:res.data, err:""}
                })
                .catch(catchErr)
        }
        else return { data: {}, err: "Please login before get points history" }
    },
    async savingPointHis(type, objectName, points) {
        if (AuthService.isAuthen()) {
            let detail = ""
            switch (type) {
                case 'trade':
                    detail = "trade " + points + " points with the " + objectName
                    break;
                case 'receive':
                    detail = "receive " + points + " points by " + objectName
                    break;
            }
            let dateNow = new Date(Date.now());
            let newBody = {
                dateEvents: dateNow.getFullYear()+"-"
                +(dateNow.getMonth() < 10 ? "0"+(dateNow.getMonth()+1):dateNow.getMonth()+1)+"-"
                +(dateNow.getDate() < 10 ? "0"+dateNow.getDate():dateNow.getDate()),
                eventType: type,
                eventsText: detail,
                email: AuthService.getUser().email,
                points: points
            }
            return axios.post("http://localhost:1337" + "/histories", newBody, headers())
                .then(() => { return { data: {}, err: "" } })
                .catch(catchErr)
        }
        else return { data: {}, err: "Please login before saving points history" }
    }
}

function headers() {
    return {
        headers: {
            Authorization: 'Bearer ' + AuthService.getJWT()
        }
    }
}

function catchErr(e) {
    if(!e.response){
        return e
    }
    else if (e.response.status === 400)
        return e.response.data.message[0].messages[0].message
    else if (e.response.status === 404) {
        return { data: {}, err: "Not found history" }
    }
    else {
        return { data: {}, err: "Unknow error status: " } + e.response.status
    }
}
