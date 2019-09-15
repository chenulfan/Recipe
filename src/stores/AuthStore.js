import { observable, action, computed } from 'mobx'

export default class Auth{
    @observable user = null 
    @action changeUser = (user) => {
        this.user = user
    }
    @action logout = () => {
        this.user = null
    }
    @computed get logedUser(){
        return this.user
    }
}