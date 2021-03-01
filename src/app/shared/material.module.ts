import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatCardModule,
    MatIconModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTableModule,
    MatMenuModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressBarModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTableModule,
    MatMenuModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressBarModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatToolbarModule
  ]
})
export class MaterialModule {
}
