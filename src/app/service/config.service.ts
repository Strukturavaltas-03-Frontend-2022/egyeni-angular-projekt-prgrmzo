import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  appName: string = 'Painting Gallery';

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/' },
    { text: 'Gallery', link: '/gallery' },
    { text: 'List', link: '/list' },
    { text: 'Quiz', link: '/quiz' },
  ];

  searchOptions: any = [
    { key: 'title', title: 'Title' },
    { key: 'painter', title: 'Painter' },
    { key: 'year', title: 'Year' },
    { key: 'pUrl', title: "Painting's Link" },
    { key: 'isOnWishlist', title: 'Is it on my Wishlist?' },
  ];

  constructor() {}
}
