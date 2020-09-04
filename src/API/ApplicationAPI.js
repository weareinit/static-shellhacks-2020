import axios from 'axios'
import { getAuthToken } from '../utils'

const client = axios.create({
  baseURL: process.env.REACT_APP_APPLICATION_BASE_ROUTE
})

const ApplicationAPI = {
  /**
   * Posts application to api
   * @param data - application data
   * @returns Promise<response data>
   */
  createApplication: data => {
    const application = new FormData()

    Object.keys(data).forEach(key => {
      if (data[key]) application.append(key, data[key])
    })

    return client({
      method: 'post',
      url: '/application/create',
      data: application,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: getAuthToken()
      }
    })
  },
  getApplication: userId => {
    return client.get('/application/get', {
      params: { userId },
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: getAuthToken()
      }
    })
  },
  confirm: applicationId => {
    return client.put('/application/confirm', {
      params: { applicationId },
      headers: {
        'Content-Type': 'application/json',
        Authorization: getAuthToken()
      }
    })
  }
}

export default ApplicationAPI
