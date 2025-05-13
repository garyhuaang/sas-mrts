interface ClientResponse<T> {
  status: number
  data: T
  headers: Headers
  url: string
}

// Your Result types and tryCatch function
type Success<T> = {
  data: T
  error: null
}

type Failure<E> = {
  data: null
  error: E
}

type Result<T, E = Error> = Success<T> | Failure<E>

async function tryCatch<T, E = Error>(
  promise: Promise<T>
): Promise<Result<T, E>> {
  try {
    const data = await promise
    return { data, error: null }
  } catch (error) {
    return { data: null, error: error as E }
  }
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

    // Wrap the fetch operation
    const fetchResult = await tryCatch<Response, Error>(
      window.fetch(`${baseURL}${endpoint}`, config)
    )

    if (fetchResult.error) {
      // Network error or other fetch-related error before getting a response
      return Promise.reject(
        fetchResult.error.message || 'Network request failed'
      )
    }

    const response = fetchResult.data
    let responseData: any

    // Wrap parsing the JSON body
    const jsonResult = await tryCatch<any, Error>(response.json())

    if (jsonResult.error) {
      // Failed to parse JSON - could be not JSON, or an empty response on error
      // If response was not .ok, it might still have statusText
      if (!response.ok) {
        return Promise.reject(
          response.statusText || 'Invalid JSON response from server on error'
        )
      }
      // If response was .ok but JSON failed, that's an issue
      return Promise.reject('Failed to parse JSON response from server')
    }

    responseData = jsonResult.data

    if (response.ok) {
      return {
        status: response.status,
        data: responseData as T, // Assume responseData is of type T on success
        headers: response.headers,
        url: response.url,
      }
    }

    // If response was not .ok, but JSON parsing succeeded (e.g., server sent JSON error object)
    // Prefer the parsed server error object if it's an object, otherwise use statusText
    if (responseData && typeof responseData === 'object') {
      return Promise.reject(responseData)
    }
    return Promise.reject(
      response.statusText || 'Request failed with no specific error message'
    )
  }

  client.get = function <T>(
    endpoint: string,
    customConfig: Partial<RequestInit> = {}
  ) {
    return client<T>(endpoint, { ...customConfig, method: 'GET' })
  }

  client.post = function <T>(
    endpoint: string,
    bodyInput: any, // Renamed to avoid confusion with the 'body' in customConfig
    customConfig: Partial<RequestInit> = {}
  ) {
    const processedBody = JSON.stringify(bodyInput)
    return client<T>(endpoint, {
      ...customConfig,
      body: processedBody,
      method: 'POST',
    })
  }

  return client
}

const storeClient = createClient('https://strapi-store-server.onrender.com/api')
