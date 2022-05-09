

import axios from 'axios';


class BaseApiService {

    baseUrl = "http://127.0.0.1:8000";

   

    constructor(resource) {
      if (!resource) throw new Error("Resource is not provided");
      this.resource = resource;
    }
  
    getUrl() {
      // Send the bearer token whenever is provided
      let token = JSON.parse( localStorage.getItem('token') );
      if( token ){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token.access_token}`}
      }
      return `${this.baseUrl}/${this.resource}/`;
    }
  
    handleErrors(err) {
      // Note: here you may want to add your errors handling
      console.log({ message: "Errors is handled here", err });
    }

}

class ModelApiService extends BaseApiService {

  constructor(resource) {
    super(resource);
  }
  // Auth

  async signIn(data = {}) {
    try {
        const response = await axios.post(this.getUrl() + 'auth/login', data)
        return response.data
    } catch (error) {
        return false
    }
  }

  async getMe() {
    try {
        const response = await axios.post(this.getUrl() + 'auth/me')
        if( Object.keys(response.data).length > 0 ) {
          return await response.data
        }else return false
    } catch (error) {
        return error
    }
  }

  async logOut(data = {}) {
    try {
        const response = await axios.post(this.getUrl() + 'auth/logout', data)
        return response.data
    } catch (error) {
        return false
    }
  }

  // Users

  async getPsychos() {
    try {
        const response = await axios.get(this.getUrl() + 'users/role/1')
        return response.data
    } catch (error) {
        return error
    }
  }


}

class ApiService extends ModelApiService {
  constructor() {
    super("api");
  }
}


export const $api = {
    service: new ApiService(),
};
