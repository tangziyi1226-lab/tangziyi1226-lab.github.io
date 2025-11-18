document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('profile-toggle')
  var drawer = document.getElementById('profile-drawer')
  var mask = document.getElementById('profile-mask')
  var close = document.getElementById('profile-close')

  if (!toggle || !drawer || !mask) {
    return
  }

  function openDrawer () {
    drawer.classList.add('is-active')
    mask.classList.add('is-active')
    document.body.classList.add('profile-open')
    drawer.setAttribute('aria-hidden', 'false')
  }

  function closeDrawer () {
    drawer.classList.remove('is-active')
    mask.classList.remove('is-active')
    document.body.classList.remove('profile-open')
    drawer.setAttribute('aria-hidden', 'true')
  }

  toggle.addEventListener('click', openDrawer)
  mask.addEventListener('click', closeDrawer)
  if (close) {
    close.addEventListener('click', closeDrawer)
  }

  document.addEventListener('keyup', function (event) {
    if (event.key === 'Escape') {
      closeDrawer()
    }
  })
})

