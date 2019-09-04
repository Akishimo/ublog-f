/*
 * @Author: Zhongyang Ren
 * @Date: 2019-09-04 10:44:01
 * @Last Modified by: Zhongyang Ren
 * @Last Modified time: 2019-09-04 10:51:04
 */

const path = window._GLOABLE.SERVER_STATIC_SRC_PATH

const init = () => {
  window.onload = () => {
    window.particlesJS.load('pt-bg', `${path}/particles.json`, () => {})
  }
}

export default init
