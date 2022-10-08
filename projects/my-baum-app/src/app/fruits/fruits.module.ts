import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { fruitsReducers } from './store/reducers/feature.reducer';
import { EntryContainer } from './containers/entry/entry.container';
import { EffectsModule } from '@ngrx/effects';
import { JuicesEffects } from './store/effects/juices.effects';
import { CandiesEffects } from './store/effects/candies.effects';
import { JuicesContainer } from './containers/juices/juices.container';
import { CadiesContainer } from './containers/cadies/cadies.container';
import { JuicesDetailDialog } from './components/juices-detail/juices-detail.dialog';
import { CadiesDetailBottomSheet } from './components/cadies-detail/cadies-detail.bottom-sheet';


@NgModule({
  declarations: [
    EntryContainer,
    JuicesContainer,
    CadiesContainer,
    JuicesDetailDialog,
    CadiesDetailBottomSheet
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule,
    StoreModule.forFeature('fruits', fruitsReducers),
    SharedModule,
    EffectsModule.forFeature([JuicesEffects, CandiesEffects])
  ]
})
export class FruitsModule { }
