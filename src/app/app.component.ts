import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e-logo';
  currentYear = new Date().getFullYear();
  minValue: number = 70;
  maxValue: number = 80;
  options: Options = {
    floor: 50,
    ceil: 100,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '$' + value + '.00';
        case LabelType.High:
          return '$' + value + '.00';
        default:
          return '$' + value + '.00';
      }
    }
  };
  listView: boolean;
  gridView: boolean;
  mobiles1:any[] = [
    {
      imageUrl: './assets/img/mobile1.png',
      description: 'Apple iPhone X With FaceTime Space Gray 64GB 4G LTE',
      currency: '$',
      price: '165.00',
      oldPrice: ''
    },
    {
      imageUrl: './assets/img/mobile1.png',
      description: 'Apple iPhone X With FaceTime Space Gray 64GB 4G LTE',
      currency: '$',
      price: '165.00',
      oldPrice: ''
    },
    {
      imageUrl: './assets/img/mobile1.png',
      description: 'Apple iPhone X With FaceTime Space Gray 64GB 4G LTE',
      currency: '$',
      price: '165.00',
      oldPrice: '65.00'
    },
    {
      imageUrl: './assets/img/mobile1.png',
      description: 'Apple iPhone X With FaceTime Space Gray 64GB 4G LTE',
      currency: '$',
      price: '165.00',
      oldPrice: ''
    },{
      imageUrl: './assets/img/mobile1.png',
      description: 'Apple iPhone X With FaceTime Space Gray 64GB 4G LTE',
      currency: '$',
      price: '165.00',
      oldPrice: ''
    },
    {
      imageUrl: './assets/img/mobile1.png',
      description: 'Apple iPhone X With FaceTime Space Gray 64GB 4G LTE',
      currency: '$',
      price: '165.00',
      oldPrice: ''
    },
    {
      imageUrl: './assets/img/mobile1.png',
      description: 'Apple iPhone X With FaceTime Space Gray 64GB 4G LTE',
      currency: '$',
      price: '165.00',
      oldPrice: '65.00'
    },
    {
      imageUrl: './assets/img/mobile1.png',
      description: 'Apple iPhone X With FaceTime Space Gray 64GB 4G LTE',
      currency: '$',
      price: '165.00',
      oldPrice: ''
    }
  ]
  mobiles2:any[] = [
    {
      imageUrl: './assets/img/mobile1.png',
      description: 'Apple iPhone X With FaceTime Space Gray 64GB 4G LTE',
      currency: '$',
      price: '165.00',
      oldPrice: ''
    },
    {
      imageUrl: './assets/img/mobile1.png',
      description: 'Apple iPhone X With FaceTime Space Gray 64GB 4G LTE',
      currency: '$',
      price: '165.00',
      oldPrice: ''
    },
    {
      imageUrl: './assets/img/mobile1.png',
      description: 'Apple iPhone X With FaceTime Space Gray 64GB 4G LTE',
      currency: '$',
      price: '165.00',
      oldPrice: '65.00'
    },
    {
      imageUrl: './assets/img/mobile1.png',
      description: 'Apple iPhone X With FaceTime Space Gray 64GB 4G LTE',
      currency: '$',
      price: '165.00',
      oldPrice: ''
    },{
      imageUrl: './assets/img/mobile1.png',
      description: 'Apple iPhone X With FaceTime Space Gray 64GB 4G LTE',
      currency: '$',
      price: '165.00',
      oldPrice: ''
    },
    {
      imageUrl: './assets/img/mobile1.png',
      description: 'Apple iPhone X With FaceTime Space Gray 64GB 4G LTE',
      currency: '$',
      price: '165.00',
      oldPrice: ''
    },
    {
      imageUrl: './assets/img/mobile1.png',
      description: 'Apple iPhone X With FaceTime Space Gray 64GB 4G LTE',
      currency: '$',
      price: '165.00',
      oldPrice: '65.00'
    },
    {
      imageUrl: './assets/img/mobile1.png',
      description: 'Apple iPhone X With FaceTime Space Gray 64GB 4G LTE',
      currency: '$',
      price: '165.00',
      oldPrice: ''
    }
  ]

  ngOnInit() {
    this.gridView = true;
  }

  list() {
    this.listView = true;
    this.gridView = false;
  }
  grid() {
    this.gridView = true;
    this.listView = false;
  }

}
