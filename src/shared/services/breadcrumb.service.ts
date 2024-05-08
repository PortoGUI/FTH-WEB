import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbsSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public breadcrumbs$: Observable<string[]> = this.breadcrumbsSubject.asObservable();

  setBreadcrumbs(breadcrumbs: string[]): void {
    this.breadcrumbsSubject.next(breadcrumbs);
  }

  clearBreadcrumbs(): void {
    this.breadcrumbsSubject.next([]);
  }

  addBreadcrumb(crumb: string): void {
    const currentBreadcrumbs = this.breadcrumbsSubject.getValue();
    const updatedBreadcrumbs = [...currentBreadcrumbs, crumb];
    this.breadcrumbsSubject.next(updatedBreadcrumbs);
  }

  removeLastBreadcrumb(): void {
    const currentBreadcrumbs = this.breadcrumbsSubject.getValue();
    const updatedBreadcrumbs = currentBreadcrumbs.slice(0, -1);
    this.breadcrumbsSubject.next(updatedBreadcrumbs);
  }
}
