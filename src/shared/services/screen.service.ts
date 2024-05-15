import {Injectable, NgZone} from '@angular/core';

import {BehaviorSubject, fromEvent} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  screenChange: BehaviorSubject<ScreenType> = new BehaviorSubject<ScreenType>(ScreenType.LG);
  private currentScreen: ScreenType;
  private resizeScheduled: boolean = false;

  constructor(private zone: NgZone) {
    this.addResizeListener();
  }

  init(): void {
    this.currentScreen = this.getScreenType();
    this.screenChange.next(this.currentScreen);
    console.log('%cScreen Observer is Running', 'color: #00FF00; font-weight: bold');
  }

  private getScreenType(): ScreenType {
    if (window.innerWidth < 576) {
      return ScreenType.XS;
    } else if (window.innerWidth > 576 && window.innerWidth <= 768) {
      return ScreenType.SM;
    } else if (window.innerWidth > 768 && window.innerWidth <= 992) {
      return ScreenType.MD;
    } else if (window.innerWidth > 992 && window.innerWidth <= 1200) {
      return ScreenType.LG;
    } else if (window.innerWidth > 1200 && window.innerWidth <= 1600) {
      return ScreenType.XL;
    } else {
      return ScreenType.XXL;
    }
  }

  private addResizeListener(): void {
    this.zone.runOutsideAngular((): void => {
      fromEvent(window, 'resize').subscribe((): void => {
        if (!this.resizeScheduled) {
          this.resizeScheduled = true;
          window.requestAnimationFrame((): void => {
            const newResolution: ScreenType = this.getScreenType();
            if (newResolution !== this.currentScreen) {
              this.zone.run((): void => {
                this.currentScreen = newResolution;
                this.screenChange.next(this.currentScreen);
              });
            }
            this.resizeScheduled = false;
          });
        }
      });
    });
  }
}

export enum ScreenType {
  XS,
  SM,
  MD,
  LG,
  XL,
  XXL,
}

/*
    xs: <576px (Extra pequeno)
    sm: ≥576px (Pequeno)
    md: ≥768px (Médio)
    lg: ≥992px (Grande)
    xl: ≥1200px (Extra grande)
   xxl: ≥1600px (Extra extra grande)
*/
