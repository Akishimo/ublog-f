/*
 * @Author: Zhongyang Ren
 * @Date: 2019-09-01 14:20:35
 * @Last Modified by: Zhongyang Ren
 * @Last Modified time: 2019-09-02 16:29:58
 * @Description: 全局静态 js
 */
const path = window._GLOABLE.SERVER_STATIC_SRC_PATH
const imgPath = window._GLOABLE.SERVER_STATIC_ROOT_PATH
const states = {
  currentBgIndex: 0,
  isFirstLoad: true,
  bgChangeMode: 'random'
}
const staticProp = {
  bgEle: document.getElementById('pt-bg')
}
const throttle = window.throttle = function (func, delay) {
  var prev = Date.now()
  return function () {
    var context = this
    var args = arguments
    var now = Date.now()
    if (now - prev >= delay) {
      func.apply(context, args)
      prev = Date.now()
    }
  }
}
window.setAutoBg = (delay = 10000) => {
  setInterval(() => {
    setRandomBg()
  }, delay)
}
window.setBgChangeMode = (mode = 'random') => {
  if (!['random', 'order'].includes(mode)) {
    console.error(`${mode} is an invalid mode, plase use random or order`)
    return
  }
  states.bgChangeMode = mode
  console.log(`mode is set to ${mode} now`)
}
window.onload = () => {
  window.particlesJS.load('pt-bg', `${path}/particles.json`, () => {})
}

const setRandomBg = (fixedIndex = 0, clearStorage = true) => {
  const setItemBg = (index) => {
    const currentBgImg = `${imgPath}/images/bg/star-${index}.jpg`
    if (!staticProp.bgEle.style.backgroundImage.includes(`star-${index}.jpg`)) {
      const delay = states.isFirstLoad ? 0 : 800
      states.isFirstLoad = false
      staticProp.bgEle.classList.add('fadeout')
      setTimeout(() => {
        staticProp.bgEle.style.backgroundImage = `url(${currentBgImg})`
        staticProp.bgEle.classList.remove('fadeout')
      }, delay)
    }
  }

  const storedBgIndex = localStorage.getItem('ublog.static.background.index')
  if (storedBgIndex && !clearStorage) {
    setItemBg(storedBgIndex)
    return
  }

  let index = states.currentBgIndex
  const bgAmount = window._GLOABLE.STATIC_CONFIG.IMAGE_AMOUNT
  while (index === states.currentBgIndex) {
    if (fixedIndex === states.currentBgIndex && fixedIndex > 0) return
    switch (states.bgChangeMode) {
      case 'random':
        index = fixedIndex < 1 ? Math.floor(Math.random() * bgAmount + 1) : fixedIndex
        break
      case 'order':
        index = fixedIndex < 1 ? index + 1 > bgAmount ? 1 : index + 1 : fixedIndex
        break
      default:
        index = 1
    }
  }
  states.currentBgIndex = index
  localStorage.setItem('ublog.static.background.index', index)
  setItemBg(index)
}

const initListener = () => {
  let runner = throttle(setRandomBg, 2000)
  document.onkeydown = function (e) {
    if (e.keyCode === 67 && e.shiftKey) {
      runner()
    }
  }
}

const initNotice = () => {
  console.log('press shift + c to change random background')
}

const init = () => {
  setRandomBg(window._GLOABLE.STATIC_CONFIG.FIXED_IMAGE_INDEX, false)
  initListener()
  initNotice()
  // setAutoBg(3000)
}

init()
