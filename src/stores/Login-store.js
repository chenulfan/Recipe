import { observable, action, computed } from 'mobx'

export default class Login {
    @observable email = ''
    @observable password = ''
    @observable loged = false

    @action handleInput = (input, value) => {
        this[[input]] = value
    }
    @action log = () => {
        this.loged = true
    }
    @action logOut = () => {
        this.loged = false
    }
    @action clear = () => {
        this.email = ""
        this.password = ""
    }
}