import axios, { AxiosResponse } from 'axios'
import { HttpClient, HttpRequest, HttpResponse } from '@/Application/Interfaces'

export class Http implements HttpClient {
  private cancelToken = axios.CancelToken
  public source = this.cancelToken.source()

  public async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse

    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: {
          'Content-Type': 'application/json',
          ...data.headers
        },
        cancelToken: this.source.token
      })
    } catch (error: any) {
      axiosResponse = error.response
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
