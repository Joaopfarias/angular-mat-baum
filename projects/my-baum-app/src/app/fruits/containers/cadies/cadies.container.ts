import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FruitsState } from '../../store/reducers/feature.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cadies',
  templateUrl: './cadies.container.html',
  styleUrls: ['./cadies.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CadiesContainer implements OnInit {

  constructor(private store: Store<FruitsState>) { }

  ngOnInit(): void {
  }

}
