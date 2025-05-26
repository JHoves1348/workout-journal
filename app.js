const form = document.getElementById('workout-form');
const list = document.getElementById('workout-list');

let workouts = JSON.parse(localStorage.getItem('workouts')) || [];

function renderWorkouts() {
  list.innerHTML = '';
  workouts.forEach((w, i) => {
    const li = document.createElement('li');
    li.textContent = `${w.date}: ${w.exercise} — ${w.details}`;
    list.appendChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const workout = {
    date: document.getElementById('date').value,
    exercise: document.getElementById('exercise').value,
    details: document.getElementById('details').value
  };
  workouts.push(workout);
  localStorage.setItem('workouts', JSON.stringify(workouts));
  renderWorkouts();
  form.reset();
});

renderWorkouts();
