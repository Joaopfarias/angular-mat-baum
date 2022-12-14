import { MediaMatcher } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { CoreState } from "../../store/reducers/feature.reducer";
import { select, Store } from "@ngrx/store";
import { setTheme, toggleTheme } from "../../store/actions/preferences.actions";
import { getPreferencesTheme } from "../../store/selectors/preferences.selectors";


@Component({
  selector: 'app-layout',
  templateUrl: './layout.container.html',
  styleUrls: ['./layout.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutContainer implements OnInit {

  /**
   * Reference to the sidenav component.
   */
  @ViewChild('sidenav', {static: false})
  sidenav?: MatSidenav;

  /**
   * Observable of the theme user preference.
   */
  theme$: Observable<'light' | 'dark' | undefined> = EMPTY;

  /**
   * Flag to indicate if the sidenav is opened.
   */
  opened = false;

  /**
   * The media query result of mobile view.
   */
  mobileQuery: MediaQueryList;

  /**
   * Change detector for mobile query..
   */
  private readonly mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, @Inject(DOCUMENT) private document: Document,
              media: MediaMatcher, private router: Router, private store: Store<CoreState>) {

    this.mobileQuery = media.matchMedia('(max-width: 959px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();

    try {
      this.mobileQuery.addEventListener('change', this.mobileQueryListener);
    } catch (e) {
      // use deprecated symbol until Safari move forwards.
      this.mobileQuery.addListener(this.mobileQueryListener);
    }
  }

  ngOnInit(): void {
    this.theme$ = this.store.pipe(
      select(getPreferencesTheme),
      filter(color => {
        if (!color && (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          this.store.dispatch(setTheme({theme: 'dark'}));
          return false;
        }
        return true;
      }),
      tap(color => {
        if (color === 'dark') {
          this.document.body.className = 'app-dark-theme';
        } else {
          this.document.body.className = 'app-light-theme';
        }
      })
    );
  }

  close(): void {
    this.opened = false;
  }

  theme(): void {
    this.store.dispatch(toggleTheme());
  }

  toggle(): void {
    this.opened = !this.opened;
  }
}
