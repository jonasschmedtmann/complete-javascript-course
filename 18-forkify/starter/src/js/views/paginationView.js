import View from "./view.js";
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');

      //if clicking close to btn but not ON the button
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      // console.log(goToPage)

      handler(goToPage);
    })
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

    // console.log({ numPages });

    const nextPageBtn = `
    <button 
      data-goto="${curPage + 1}" 
      class="btn--inline pagination__btn--next"
    >
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
    `;

    const prevPageBtn = `
    <button 
      data-goto="${curPage - 1}" 
      class="btn--inline pagination__btn--prev"
    >
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>
    `;

    // More than 1 page of results
    if (curPage === 1 && numPages > 1) {
      return nextPageBtn;
    }

    // On last page of results
    if (curPage === numPages && numPages > 1) {
      return prevPageBtn;
    }

    // In the middle of results
    if (curPage < numPages) {
      return `${prevPageBtn}${nextPageBtn}`;
    }

    // Only one page of results, render no buttons
    return '';
  }
}

export default new PaginationView();