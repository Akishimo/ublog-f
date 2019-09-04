/*
 * @Author: Zhongyang Ren
 * @Date: 2019-09-04 10:37:30
 * @Last Modified by: Zhongyang Ren
 * @Last Modified time: 2019-09-04 15:55:10
 */

import throttle from './common/utils.js'

const imgPath = window._GLOABLE.SERVER_STATIC_ROOT_PATH
const states = {
  currentBgIndex: 0,
  isFirstLoad: true,
  bgChangeMode: localStorage.getItem('ublog.static.background.changemode') || 'random'
}
const staticProp = {
  bgEle: document.getElementById('pt-bg')
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
  localStorage.setItem('ublog.static.background.changemode', mode)
  console.log(`mode is set to ${mode} now`)
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
    states.currentBgIndex = index
  }

  const storedBgIndex = localStorage.getItem('ublog.static.background.index')
  if (storedBgIndex && !clearStorage) { // 刷新页面使用缓存的图片index
    setItemBg(storedBgIndex)
    return
  }

  let index = states.currentBgIndex * 1
  const bgAmount = window._GLOABLE.STATIC_CONFIG.IMAGE_AMOUNT
  while (index === states.currentBgIndex * 1) {
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

export default init
