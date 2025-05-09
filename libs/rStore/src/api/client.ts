import { tryCatch } from '@sas-mrts/common'

interface ClientResponse<T> {
  status: number
  data: T
  headers: Headers
  url: string
}

export const createClient = (baseURL: string) => {
  const client = async <T>(
    endpoint: string,
    { body, ...customConfig }: Partial<RequestInit> = {}
  ): Promise<ClientResponse<T>> => {
    const config: RequestInit = {
      ...customConfig,
      headers: {
        'Content-Type': 'application/json',
        ...customConfig.headers,
      },
    }

    if (body !== undefined) {
      config.body = body
    }

    const response = await tryCatch<Response, Error>(
      window.fetch(`${baseURL}${endpoint}`, config)
    )

    if (response.error) {
      return Promise.reject(response.error.message || 'Network request failed')
    }

    const clientResponse = await tryCatch<ClientResponse<T>, Error>(
      response.data.json()
    )

    if (clientResponse.error) {
      return Promise.reject('Failed to parse JSON response from server')
    }

    return {
      status: clientResponse.data.status,
      data: clientResponse.data as T,
      headers: clientResponse.data.headers,
      url: clientResponse.data.url,
    }
  }

  client.get = function <T>(
    endpoint: string,
    customConfig: Partial<RequestInit> = {}
  ) {
    return client<T>(endpoint, { ...customConfig, method: 'GET' })
  }

  client.post = function <T>(
    endpoint: string,
    body: unknown,
    customConfig: Partial<RequestInit> = {}
  ) {
    const processedBody = JSON.stringify(body)

    return client<T>(endpoint, {
      ...customConfig,
      body: processedBody,
      method: 'POST',
    })
  }

  return client
}

export const storeClient = createClient(
  'https://strapi-store-server.onrender.com/api'
)
