class indexPagination {
    constructor(selector, totalPages) {
        this.element = document.querySelector(selector);
        this.currentPage = 0;
        this.totalPages = totalPages;
    }

    // goToPrevPage()  {
    //     this.currentPage -= 1;
    // }

    goToNextPage()  {
        this.currentPage += 1;
    }
}

export default indexPagination