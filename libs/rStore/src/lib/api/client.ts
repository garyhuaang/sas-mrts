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

    let responseData
    try {
      const response = await window.fetch(`${baseURL}${endpoint}`, config)
      responseData = await response.json()
      if (response.ok) {
        return {
          status: response.status,
          data: responseData,
          headers: response.headers,
          url: response.url,
        }
      }
      throw new Error(response.statusText)
    } catch (err: any) {
      return Promise.reject(
        responseData && typeof responseData === 'object'
          ? responseData
          : err.message || 'Network request failed'
      )
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
    body: any,
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
