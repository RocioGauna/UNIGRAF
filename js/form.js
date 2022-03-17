const $form = document.querySelector('#form')
const $buttonSubmit= document.querySelector('#enviarMail')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonSubmit.setAttribute('href', `mailto:rociomgauna5@gmail.com?subject=nombre ${form.get('name')} ${form.get('email')} &body=${form.get('message')}`)
    $buttonSubmit.click()
}