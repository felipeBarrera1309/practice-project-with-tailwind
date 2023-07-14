// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.documentElement.classList.add('dark')
// } else {
//   document.documentElement.classList.remove('dark')
// }

// // Whenever the user explicitly chooses light mode
// // localStorage.theme = 'light'

// // Whenever the user explicitly chooses dark mode
// // localStorage.theme = 'dark'

// // // Whenever the user explicitly chooses to respect the OS preference
// // localStorage.removeItem('theme')

// const toggleModeDark = ref(document.documentElement.className.split(' ').includes('dark'))

// function changeModeDark(){
//   const documentMain = document.documentElement
//   toggleModeDark.value = documentMain.classList.toggle('dark')
//   toggleModeDark.value ?
//     localStorage.theme = 'dark'
//     :
//     localStorage.theme = 'light'
// }