import { initDropdown, getSelectedLanguage } from './dropdown.js';
import { initButton, updateButton } from './button.js';
import { searchRepos } from './searchRepos.js';
import { initInfoContainer, updateInfoContainer } from './info_container.js';
import { updateContentContainer } from './content_container.js';

const languages = ['JavaScript', 'Python', 'Java', 'Assembler'];

document.addEventListener('DOMContentLoaded', () => {
  initButton(getSelectedLanguage, updateInfoContainer, updateContentContainer, searchRepos);
  
  initDropdown(languages, updateButton, searchRepos, updateInfoContainer, updateContentContainer, );

  initInfoContainer();
});