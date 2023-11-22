const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.innerHTML = `Aleksandr ${thisYear}`;
document.querySelector('footer').appendChild(copyright);

const skills = ['Digital Marketing', 'IT Project Management', 'HTML', 'CSS', 'Java Script', 'Frontend', 'Computer Skills'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for (i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = `${skills[i]}`;
    skillsList.appendChild(skill);
}