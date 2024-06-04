const scriptURL='https://script.google.com/macros/s/AKfycbwvMiNfQdiyx8gF8wYkL4HTnFg4OfH8yQdjM-aHJ8Mv2UNOZxK97rYehvrbOCKXnHLD/exec'
const form = document.forms['quiz']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form has been submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})