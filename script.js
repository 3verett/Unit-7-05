document.getElementById('input').addEventListener('click', calculate)
let userAge = 0
let dayOfWeek = 0

function calculate () {
  userAge = document.getElementById('age').value
  userAge = parseInt(userAge)
  dayOfWeek = document.getElementById('day').value

  if ((userAge > 17) && (dayOfWeek.toUpperCase() == 'MONDAY' || dayOfWeek.toUpperCase() == 'TUESDAY' || dayOfWeek.toUpperCase() == 'WEDNESDAY' || dayOfWeek.toUpperCase() == 'THURSDAY' || dayOfWeek.toUpperCase() == 'FRIDAY')) {
    document.getElementById('answer').innerHTML = 'Time to go to work!'
  }

  else if ((userAge < 18) && (dayOfWeek.toUpperCase() == 'MONDAY' || dayOfWeek.toUpperCase() == 'TUESDAY' || dayOfWeek.toUpperCase() == 'WEDNESDAY' || dayOfWeek.toUpperCase() == 'THURSDAY' || dayOfWeek.toUpperCase() == 'FRIDAY')) {
    document.getElementById('answer').innerHTML = 'Time for school!'
  }

  else if (dayOfWeek.toUpperCase() == 'SATURDAY' || dayOfWeek.toUpperCase() == 'SUNDAY') {
    document.getElementById('answer').innerHTML = 'Time to relax for the weekend!'
  }

  else {
    document.getElementById('answer').innerHTML = 'Please enter a valid input. Make sure your spelling is correct.'
  }

}
