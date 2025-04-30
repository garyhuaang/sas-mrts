interface ClientResponse<T> {
  status: number
  data: T
  headers: Headers
  url: string
}

export const createClient = (baseURL: string) => {
  const apiClient = async <T>(
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

    let data
    try {
      const response = await window.fetch(`${baseURL}${endpoint}`, config)
      data = await response.json()
      if (response.ok) {
        return {
          status: response.status,
          data,
          headers: response.headers,
          url: response.url,
        }
      }
      throw new Error(response.statusText)
    } catch (err: any) {
      return Promise.reject(err.message ? err.message : data)
    }
  }

  // Attach the helper methods
  apiClient.get = function <T>(
    endpoint: string,
    customConfig: Partial<RequestInit> = {}
  ) {
    return apiClient<T>(endpoint, { ...customConfig, method: 'GET' })
  }

  apiClient.post = function <T>(
    endpoint: string,
    body: any,
    customConfig: Partial<RequestInit> = {}
  ) {
    return apiClient<T>(endpoint, { ...customConfig, body })
  }

  return apiClient
}

// Usage examples:
export const storeClient = createClient(
  'https://strapi-store-server.onrender.com/api'
)
