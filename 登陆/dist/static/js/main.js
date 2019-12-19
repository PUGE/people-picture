var scale = document.documentElement.clientWidth / document.documentElement.clientHeight
if ((scale) < 1) {
  document.body.classList.add('phone')
} else {
  document.body.classList.add('pc')
}
