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

  constructor() {}
}
