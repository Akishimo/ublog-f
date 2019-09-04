/*
 * @Author: Zhongyang Ren
 * @Date: 2019-09-01 14:20:35
 * @Last Modified by: Zhongyang Ren
 * @Last Modified time: 2019-09-04 10:45:03
 * @Description: 全局静态 js
 */
import initparticlesBackground from './js/particlesBg.js'
import initDynamicBackground from './js/dynamicBg.js'

const init = () => {
  initparticlesBackground()
  initDynamicBackground()
}

init()
