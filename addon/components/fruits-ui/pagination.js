import Component from '@glimmer/component';

export default class FruitsUiPaginationComponent extends Component {
  constructor() {
    super(...arguments);
  }

  get page() {
    return parseInt(this.args.page) || 1;
  }

  get firstPages() {
    if (this.page + 5 < this.args.totalPages) {
      return this.page + 5;
    } else {
      return this.page + (this.args.totalPages - this.page);
    }
  }
}
