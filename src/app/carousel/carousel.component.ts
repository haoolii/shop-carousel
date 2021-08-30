import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnChanges {
  availabeImage = '';

  pageIndex = 0;
  pageSize = 5;
  pageTotal = 0;

  displayImageData: Array<{
    image: string;
    thumbnail: string;
  }> = [];

  @Input() imageData: Array<{
    image: string;
    thumbnail: string;
  }> = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const { imageData } = changes;
    if (imageData) {
      if (this.imageData.length) {
        this.availabeImage = this.imageData[0].image;
        this.pageTotal = this.imageData.length;
        this.setPageDisplayImageData(
          this.pageIndex,
          this.pageSize,
          this.pageTotal
        );
      }
    }
  }

  setPageDisplayImageData(
    pageIndex: number,
    pageSize: number,
    pageTotal: number
  ): void {
    this.displayImageData = this.imageData.slice(pageIndex, pageIndex + this.pageSize);
  }

  select(image: string) {
    this.availabeImage = image;
  }

  next() {
    if (this.pageIndex + this.pageSize < this.pageTotal) {
      this.pageIndex += 1;
      this.setPageDisplayImageData(
        this.pageIndex,
        this.pageSize,
        this.pageTotal
      );
    }
  }

  prev() {
    if (this.pageIndex > 0) {
      this.pageIndex -= 1;
      this.setPageDisplayImageData(
        this.pageIndex,
        this.pageSize,
        this.pageTotal
      );
    }
  }
}
