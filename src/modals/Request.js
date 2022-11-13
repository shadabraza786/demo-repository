import axios from 'axios';
import PaigeonConfig from "../constant/auth/paigeonConfig"

export default class Requests {
    signUpRequest(data) {
        return axios({
            method: 'POST',
            url: `${PaigeonConfig.signupUser}`,
            data
        })
    }

    loginRequest(data) {
        return axios({
            method: 'POST',
            url: `${PaigeonConfig.loginUser}`,
            data
        })
    }

    getlogoutRequest() {
        return axios({
            method: 'GET',
            url: `${PaigeonConfig.logoutUser}`,
            headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` }
        })
    }

    getDetailsUserRequest() {
        return axios({
            method: 'GET',
            url: `${PaigeonConfig.getUserDetails}`,
            headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` },
            // body : JSON.parse()
        })
    }

    gestQuetionsDetails() {
        return axios({
            method: 'GET',
            url: `${PaigeonConfig.getQuestionDetails}`
        })
    }
}