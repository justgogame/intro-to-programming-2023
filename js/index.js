const today = new Date();
const thisYear = today.getFullYear();


const copyright = document.createElement('p');
copyright.innerHTML = `© Aleksandr Bogomolov ${thisYear}`;
document.querySelector('.container__footer').appendChild(copyright);

const skills = ['Digital Marketing', 'IT Project Management', 'HTML', 'CSS', 'Java Script', 'Front-end', 'Computer Skills'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for (i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = `${skills[i]}`;
    skillsList.appendChild(skill);
    skill.className = 'tag';
}


const messageForm = document.getElementsByName('leave_message')[0];
const messageSection = document.querySelector('#messages');
messageSection.style.display = 'none';


messageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const usersName = e.target.usersName.value;
    const usersEmail = e.target.usersEmail.value;
    const usersMessage = e.target.usersMessage.value;


    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML += `<div class='new__message'><a class='message__link' href='mailto:${usersEmail}'>${usersName}</a> <span> wrote: ${usersMessage} </span></div>`;

    messageSection.style.display = 'block'

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', (e) => {
        const entry = e.target.parentNode;
        entry.remove();
        if (document.getElementById('messages_ul').getElementsByTagName('li').length < 1) {
            messageSection.style.display = 'none';
        }
    })


    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
})