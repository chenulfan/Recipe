import { observable, action, computed } from 'mobx'
import Axios from 'axios';

export default class User {
    @observable list = {}
    @observable currentUser = ''
    @observable name = ''

    @action changeTheList = (item) => {
        if (this.list[item]) {
            delete this.list[item]
            console.log(this.list)            
        }
        else {
            this.list[item] = true
            console.log(this.list)            
        }
    }
    @action changeUser = (id) =>{
       this.currentUser = id 
    }
    @action listToArr(){
        return Object.keys(this.list)
    }
    @action getName = async () => {
        const user = await Axios.get(`http://localhost:3030/user/id/${localStorage.user}`)
        console.log(user)
        this.name = user.data.name
    }
}