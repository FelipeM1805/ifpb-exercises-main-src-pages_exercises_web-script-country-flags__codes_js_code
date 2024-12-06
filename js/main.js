import flags from './model/flags.js';

const mainContainer = document.querySelector('main');

const allFlagsHtml = flags.map(renderFlagHtml).join('');

mainContainer.insertAdjacentHTML('beforeend', allFlagsHtml);

function renderFlagHtml(flagDetails) {
  return `<div class="flag col-2 my-2 text-center">
    <img src="${flagDetails.image}" alt="${flagDetails.name}">
    <p>${flagDetails.name}</p>
  </div>`;
}
