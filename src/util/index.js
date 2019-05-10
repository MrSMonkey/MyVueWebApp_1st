export default {
  getItem: function (key) {
    let value
    try {
      value = localStorage.getItem(key)
    } catch (ex) {
      console.error('localStorage.getItem报错, ', ex.message)
    }
    return value
  },
  setItem: function (key, value) {
    try {
      // ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
      localStorage.setItem(key, value)
    } catch (ex) {
      console.error('localStorage.setItem报错, ', ex.message)
    }
  },
  removeItem: function (key) {
    try {
      // ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
      localStorage.removeItem(key)
    } catch (ex) {
      console.error('localStorage.removeItem报错, ', ex.message)
    }
  }
}

export function debounce (method, delay) {
  let timer = null
  return () => {
    let args = arguments
    timer && clearTimeout(timer)
    timer = setTimeout(function () {
      method(...args)
    }, delay)
  }
}
export function throttle (method, mustRunDelay) {
  let timer
  // let args = arguments
  let start
  const loop = () => {
    let now = Date.now()
    if (!start) {
      start = now
    }
    if (timer) {
      clearTimeout(timer)
    }
    if (now - start >= mustRunDelay) {
      method(2)
      start = now
    } else {
      timer = setTimeout(() => {
        loop(1)
      }, 500)
    }
  }
  return loop
}
