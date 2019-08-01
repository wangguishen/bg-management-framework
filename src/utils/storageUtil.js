/**
 * storage操作类
 * @authors wgs
 * @date    2018-06-08
 */

/**
 * 存储sessionStorage
 */
export const setSesStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
}

/**
 * 获取sessionStorage
 */
export const getSesStore = (name, type) => {
  if (!name) return;
  const val = window.sessionStorage.getItem(name);
  if (type === 'json') {
    return JSON.parse(val)
  }
  return val
}

/**
 * 删除sessionStorage
 */
export const removeSesStore = name => {
  if (!name) return;
  window.sessionStorage.removeItem(name);
}

/*
 * 存储localStorage
 */
export const setLocalStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/*
 * 获取localStorage
 */
export const getLocalStore = (name, type) => {
  if (!name) return;
  const val = window.localStorage.getItem(name);
  if (type === 'json') {
    return JSON.parse(val)
  }
  return val
}

/**
 * 删除localStorage
 */
export const removeLocalStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
}

/*
删除所有的缓存
 */
export const clearStore = () => {
  window.localStorage.clear()
  window.sessionStorage.clear()
}

export const setSesStorage = (name, type) => setSesStore(name, type)
export const getSesStorage = (name, val) => getSesStore(name, val)
export const removeSesStorage = (name) => removeSesStore(name)
export const setLocalStorage = (name, val) => setLocalStore(name, val)
export const getLocalStorage = (name, type) => getLocalStore(name, type)
export const removeLocalStorage = (name) => removeLocalStore(name)
export const clearStorage = () => clearStore()
