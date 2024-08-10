import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IntroDataService } from '../../../../domain/intro-domain/services/intro-data.service';

@Component({
  templateUrl: './intro-component.component.html',
  styleUrl: './intro-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent {

}
