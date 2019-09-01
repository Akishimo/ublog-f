const path = window._GLOABLE.SERVER_STATIC_PATH
const states = {
  currentBgIndex: 0
}
const staticProp = {
  bgEle: document.getElementById('pt-bg'),
  isFirstLoad: true
}
const throttle = window.throttle = function(func, delay) {
  var prev = Date.now();
  return function() {
      var context = this;
      var args = arguments;
      var now = Date.now();
      if (now - prev >= delay) {
          func.apply(context, args);
          prev = Date.now();
      }
  }
}
window.setAutoBg = (delay = 10000) => {
  setInterval(() => {
    setRandomBg()
  }, delay)
}

window.onload = () => {
  window.particlesJS.load('pt-bg', `${path}/particles.json`, () => {})
}

const setRandomBg = (fixedIndex = 0, clearStorage = true) => {
  const setItemBg = (index) => {
    const currentBgImg = `${path}/images/bg/star-${index}.jpg`
    if (!staticProp.bgEle.style.backgroundImage.includes(`star-${index}.jpg`)) {
      const delay = staticProp.isFirstLoad ? 0 : 800
      staticProp.isFirstLoad = false
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
    index = fixedIndex < 1 ? Math.floor(Math.random() * bgAmount + 1) : fixedIndex
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
