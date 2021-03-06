import axios from "axios"

class ApiClient {
  //DO I NEED TO PUT THE REMOTE HOST URL?
  constructor(remoteHostUrl) {
    //CHANGED THIS VALUE
    this.remoteHostUrl = remoteHostUrl
    this.token = null
    this.tokenName = "event_finder_token"
  }

  setToken(token) {
    this.token = token
    localStorage.setItem(this.tokenName, token)
  }

  async request({ endpoint, method = `GET`, data = {}, params = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`

    const headers = {
      "Content-Type": "application/json",
      Authorization: this.token ? `Bearer ${this.token}` : "",
    }

    try {
      const res = await axios({ url, method, data, headers, params })
      return { data: res.data, error: null }
    } catch (error) {
      console.error("APIclient.makeRequest.error:")
      console.error({ errorResponse: error.response })
      const message = error?.response?.data?.error?.message
      return { data: null, error: message || String(error) }
    }
  }

  async fetchUserFromToken() {
    return await this.request({ endpoint: `auth/me`, method: `GET` })
  }

  //DOUBLE CHECK ENDPOINT
  async listEvents() {
    return await this.request({ endpoint: `events`, method: `GET` })
  }

  async searchEvents(searchTerm) {
    const eventData = await this.request({endpoint: `events`, method: `GET`})
    console.log(eventData.data.feed)
    const filteredEvents = 
    eventData.data.feed.filter((val) => {
      if (searchTerm === ""){
      return false;
    }
    else if (val["Event Name"].toLowerCase().includes(searchTerm.toLowerCase())){
      return true;
    }
    else{
    return false;
    }
  })
  return filteredEvents
  }

  async recommendEvents(userId) {
      return await this.request({endpoint: `events/${userId}/recommended`, method: `GET`})
  }
  async searchAndFilterEvents(searchTerm, searchAndFilter) {
    console.log("Search", searchAndFilter)
    const filteredEvents = 
    searchAndFilter.filter((val) => {
      if (searchTerm === ""){
      return false;
    }
    else if (val["Event Name"].toLowerCase().includes(searchTerm.toLowerCase())){
      return true;
    }
    else{
    return false;
    }
  })
  return filteredEvents
  }

async recommendEvents(userId) {
    return await this.request({endpoint: `events/${userId}/recommended`, method: `GET`})
}

  async signupUser(credentials) {
    return await this.request({ endpoint: `auth/register`, method: `POST`, data: credentials })
  }

  async loginUser(credentials) {
    return await this.request({ endpoint: `auth/login`, method: `POST`, data: credentials })
  }

  async editProfile({ userId, profileUpdate}) {
    return await this.request({ endpoint: `profile/${userId}`, method: `PATCH`, data: profileUpdate })
  // async editProfile({ userId, profileUpdate}) {
  //   return await this.request({ endpoint: `profile/${userId}`, method: `PATCH`, data: profileUpdate })
  // }
}

async addFavorite(favorites, userId) {
  return await this.request({ endpoint: `events/${userId}/favorites`, method: `POST`, data: favorites})
}

  async getCategories() {
    return await this.request({ endpoint: `events/categories`, method: `GET`})
  }

  async fetchPostById(id) {
    return await this.request({ endpoint: `events/${id}`, method: `GET` })
  }

  async eventRegistration({form, userId}) {
    return await this.request({endpoint: `events/event-register/${userId}`, method: `POST`, data: form})
  }

  async registeredEvents(userId) {
    return await this.request({endpoint: `events/registered/${userId}`, method: `GET`})
  }

  async logoutUser() {
    this.setToken(null)
    localStorage.setItem(this.tokenName, "")
  }

  async filterEvents({filterCriteria}){
    return await this.request({endpoint: `events/filtered-events`, method: `GET`, params: filterCriteria})
  }
}


//CHANGED TO LOCAL HOST AT 3000
const API = new ApiClient(process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001")

export default API