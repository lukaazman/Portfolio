document.addEventListener('DOMContentLoaded', function() {
  const skillsList = document.getElementById('skili');
  const skills = Array.from(skillsList.getElementsByTagName('li'));

  skills.sort((a, b) => a.textContent.localeCompare(b.textContent));

  skillsList.innerHTML = '';

  skills.forEach(skill => skillsList.appendChild(skill));
});
