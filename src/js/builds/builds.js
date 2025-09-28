import { renderBuildsList } from './markup';
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
