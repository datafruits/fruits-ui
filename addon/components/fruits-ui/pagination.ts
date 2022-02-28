import Component from '@glimmer/component';

interface Args {
  route: string;
  page: number;
  totalPages: number;
}

export default class FruitsUiPaginationComponent extends Component<Args> {
  MAX_PAGES_COUNT: number = 5;

  constructor(owner: any, args: Args) {
    super(owner, args);
  }

  range(min: number, max: number): number[] {
    return Array.from(new Array(max - min + 1).keys()).map((num) => {
      return num + min;
    });
  }

  between(x: number, min: number, max: number): boolean {
    return x >= min && x <= max;
  }

  get page(): number {
    return this.args.page || 1;
  }

  _firstPagesRange(): number[] {
    if (this.page >= this.MAX_PAGES_COUNT + 1) {
      return this.range(1, 2);
    } else {
      if (this.args.totalPages >= this.MAX_PAGES_COUNT) {
        return this.range(1, this.MAX_PAGES_COUNT);
      } else {
        return this.range(1, this.args.totalPages);
      }
    }
  }

  get firstPagesRange(): number[] {
    return this._firstPagesRange();
  }

  get showMiddlePages(): boolean {
    return (
      this.page > this.MAX_PAGES_COUNT + 1 &&
      !this.lastPagesRange.includes(this.page)
    );
  }

  _middlePagesRange(): number[] {
    return this.range(this.page - 2, this.page + 2);
  }

  get middlePagesRange(): number[] {
    return this._middlePagesRange();
  }

  get showLastPages(): boolean {
    return this.args.totalPages > this.MAX_PAGES_COUNT;
  }

  _lastPagesRange(): number[] {
    return this.range(this.args.totalPages - 2, this.args.totalPages);
  }

  get lastPagesRange(): number[] {
    return this._lastPagesRange();
  }
}
