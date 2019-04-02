import axios from 'axios'

const { VUE_APP_USER, VUE_APP_PASS, VUE_APP_URL_BASE } = process.env

const data_default= {
  user:VUE_APP_USER,
  pass:VUE_APP_PASS,
}

export const selectAll = async (endpoint) => {
  return axios({
    method:'post',
    data: {...data_default},
    url: `${VUE_APP_URL_BASE}${endpoint}/all`
  })
  .then(response => {
    return response
  })
  .catch(error => {
    return {"error":error.message}
  })
}

export const select = async (endpoint,id) => {
  return axios({
    method:'post',
    data: {...data_default},
    url: `${VUE_APP_URL_BASE}${endpoint}/${id}`
  })
  .then(response => {
    return response
  })
  .catch(error => {
    return {"error":error.message}
  })
}

export const insert = async (endpoint, data) => {
  return axios({
    method:'post',
    data: {...data_default, ...data},
    url: `${VUE_APP_URL_BASE}${endpoint}`
  })
  .then(response => {
    return response
  })
  .catch(error => {
    return {"error":error.message}
  })
}

export const update = async (endpoint,id) => {
  return axios({
    method:'put',
    data: {...data_default},
    url: `${VUE_APP_URL_BASE}${endpoint}/${id}`
  })
  .then(response => {
    return response
  })
  .catch(error => {
    return {"error":error.message}
  })
}

export const del = async (endpoint,id) => {
  return axios({
    method:'delete',
    data: {...data_default},
    url: `${VUE_APP_URL_BASE}${endpoint}/${id}`
  })
  .then(response => {
    return response
  })
  .catch(error => {
    return {"error":error.message}
  })
}