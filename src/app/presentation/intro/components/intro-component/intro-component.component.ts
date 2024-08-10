import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IntroDataService } from '../../services/intro-data.service';

@Component({
  templateUrl: './intro-component.component.html',
  styleUrl: './intro-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent implements OnInit {
  /**
   *
   */
  constructor(public _introDataService: IntroDataService) {
    
    
  }
  ngOnInit(): void {
    this._introDataService.get().subscribe(z => console.log(z))
  }

  
}
