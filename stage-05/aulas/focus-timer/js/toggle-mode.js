let darkMode = true
const buttonToggle = document.querySelector('#toggle-mode')

// currentTarget é o botao ou o alvo
buttonToggle.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light')


  const mode = darkMode ? 'light' : 'dark'

  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`

  darkMode = !darkMode //trocando o valor da variavel entre true e false
})