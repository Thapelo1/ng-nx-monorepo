import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'teneightytp-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewComponent {}
