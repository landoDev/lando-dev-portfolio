function Skills (skill) {
    const skillCard = document.createElement('div');
    const skillTitle = document.createElement('h3');
    skillCard.appendChild(skillTitle);
    skillCard.classList = 'skillCard';
    skillTitle.classList= 'skillTitle';
    skillTitle.textContent = skill;

    

    return skillCard;

}
const skillsEntry = document.querySelector('.skills-container');
skillsEntry.appendChild(Skills('HTML'));
skillsEntry.appendChild(Skills('CSS'));
skillsEntry.appendChild(Skills('JavaScript'));