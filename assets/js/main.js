const form = document.querySelector("[data-form]")
const formErrorMessage = document.querySelector("[data-form-error-message]")

function showErrorForm(message) {
  formErrorMessage.textContent = message
  form.classList.add("error")
}

function handleSubmit(e) {
  e.preventDefault()
  const { email } = Object.fromEntries(new FormData(e.target))
  console.log(email)

  if (email === "") {
    showErrorForm("please fill in the email")
    return
  }

  const emailRegex = /^(?!.*\.\.)(?!.*\.$)(?!.*\.$)[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(email)) {
    showErrorForm("Please provide a valid email")
    return
  }

  formErrorMessage.textContent = ""
  form.classList.remove("error")
}

form.addEventListener("submit", handleSubmit)
