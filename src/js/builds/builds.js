import { getBuildsList } from './operation';

const refs = {
  buildListEl: document.querySelector('.js-builds-cards-list'),
  loadMoreBtnEl: document.querySelector('.js-load-more-button'),
};

const params = {
  page: 1,
  perPage: 3,
  allData: [],
  displayedCount: 0,
};

window.addEventListener('DOMContentLoaded', async () => {
  try {
    params.allData = await getBuildsList();

    loadMoreItems();

    refs.loadMoreBtnEl.addEventListener('click', loadMoreItems);
  } catch (error) {
    console.log(error);
  }
});

function loadMoreItems() {
  const startIndex = params.displayedCount;
  const endIndex = startIndex + params.perPage;

  const nextItems = params.allData.slice(startIndex, endIndex);

  if (nextItems) {
    const markup = renderBuildsList(nextItems);
    refs.buildListEl.insertAdjacentHTML('beforeend', markup);

    params.displayedCount = endIndex;

    if (params.displayedCount >= params.allData.length) {
      refs.loadMoreBtnEl.style.display = 'none';
    }
  }
}

function renderBuildItem({ img, year, type, name, adress, tags }) {
  return `
      <li class="builds-cards-item">
        <div class="year-label-container">
          <p class="year">${year}.</p>
          <p class="label">${type}</p>
        </div>

        <img src="${img}" alt="${name} image" width="416" height="234" class="build-card-image">

        <h3 class="build-card-title">${name}</h3>

        <p class="build-address">${adress}</p>

        <h4 class="work-type-title">Види робіт</h4>

        <ul class="work-type-list">
          ${renderTags(tags)}
        </ul>
      </li>
  `;
}

function renderBuildsList(builds) {
  return builds.map(renderBuildItem).join('');
}

function renderTag(tag) {
  return ` <li class="work-type-item">
            <p class="work-type">${tag}</p>
          </li>`;
}

function renderTags(tags) {
  return tags.map(renderTag).join('');
}
