import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-cadies-detail',
  templateUrl: './cadies-detail.bottom-sheet.html',
  styleUrls: ['./cadies-detail.bottom-sheet.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CadiesDetailBottomSheet implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<CadiesDetailBottomSheet>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit(): void {
  }
  close(): void {
    this.bottomSheetRef.dismiss();
  }
}
