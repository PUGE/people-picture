// 设计宽度
var deviseW = 750
// 设计高度
var deviseH = 1508

function getScale () {
  const scaleBox = document.getElementsByClassName('scale-box')[0]
  // 如果比例大于1则进入电脑模式
  if ((window.innerWidth / window.innerHeight) < 1) {
    var scale = window.innerWidth / deviseW
    scaleBox.style.width = deviseW + 'px'
    scaleBox.style.height = deviseH + 'px'
    scaleBox.style.transform = `scale(${scale}, ${scale})`
    // console.log(window.innerHeight, deviseH * scale)
    scaleBox.style.transformOrigin = `0 ${(window.innerHeight - deviseH * scale) + 'px' } 0`
  } else {
    document.body.classList.add('pc')
    var scale = (window.innerHeight / deviseH).toFixed(2)
    scaleBox.style.width = deviseW + 'px'
    scaleBox.style.height = deviseH + 'px'
    scaleBox.style.overflow = 'hidden'
    scaleBox.style.transform = `scale(${scale}, ${scale}) translate(${(window.innerWidth - deviseW * scale) / 2 / scale + 'px' }, 0)`
    scaleBox.style.transformOrigin = '0 0 0'
  }
}

getScale()

let timer = null

function refreshGetScale () {
  console.log("重新计算")
  window.clearTimeout(timer)
  timer = setTimeout(() => {
    getScale()
  }, 300)
}

window.addEventListener('resize', refreshGetScale)

// 微信返回自动重新排版布局
window.addEventListener('pageshow', refreshGetScale)