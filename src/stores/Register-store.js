import { observable, action, computed } from 'mobx'

export default class Register {
    @observable email = ""
    @observable name = ""
    @observable password = ""
    @observable firebasebase_uid = ''

    @action handleInput = (input, value) => {
        this[[input]] = value
    }
    @action changeFirebaseId = (fID) => {
        this.firebasebase_uid = fID
    }
    @action clear = () => {
        this.email = ""
        this.name = ""
        this.password = ""
        this.firebasebase_uid = ''
    }
    @computed get getUser() {
        return (
            {
                ID: this.firebasebase_uid,
                name: this.name,
                email: this.email
            }
        )
    }
}