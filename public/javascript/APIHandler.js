class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + "/characters")
      .then(response => {
        console.log("data: ", response.data)
        return response.data
      })
      .catch(err => next(err))
  }

  getOneRegister(id) {
    return axios.get(this.BASE_URL + `/characters/${id}`)
      .then(response => {
        return response.data
      })
      .catch(err => next(err))
  }

  createOneRegister({ name, occupation, cartoon, weapon }) {
    // if (typeof name != String || typeof occupation != String || typeof cartoon != Boolean || typeof weapon != String) {

    // }
    // else 
    return axios.post(this.BASE_URL + "/characters", { name, occupation, cartoon, weapon })
      .then(response => {
        console.log(response.data)
        return response.data
      })
      .catch(err => next(err))

  }

  updateOneRegister({ id, name, occupation, cartoon, weapon }) {
    this.getOneRegister(id)
      .then(result => {
        if (result.length == 0) alert("Usuario not found")
        else {
          return axios.put(this.BASE_URL + `/characters/${id}`, { name, occupation, cartoon, weapon })
            .then(response => {
              return response.data
            })
            .catch(err => next(err))
        }
      })
      .catch(err => next(err))
    // return axios.put(this.BASE_URL + `/characters/${id}`, { id, name, occupation, cartoon, weapon })
    //   .then(response => {
    //     return response.data
    //   })
    //   .catch(err => next(err))
  }

  deleteOneRegister(id) {
    return axios.delete(this.BASE_URL + `/characters/${id}`)
      .then(response => {
        if (!response.data) alert("Character has been successfully deleted")
      })
      .catch(err => next(err))
  }
}

