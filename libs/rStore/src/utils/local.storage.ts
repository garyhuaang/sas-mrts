const saveToLocalStorage = <T>(key: string, value: T[] | null) => {
  const valueToSave = value?.length ? value : []

  return localStorage.setItem(key, JSON.stringify(valueToSave))
}

const loadFromLocalStorage = (key: string) => {
  const valueFromStorage = localStorage.getItem(key) as string

  return JSON.parse(valueFromStorage)
}

export { saveToLocalStorage, loadFromLocalStorage }
