import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {IntroDataService} from "../../services/intro-data.service";

@Component({
  selector: 'as-intro-body',
  templateUrl: './intro-body.component.html',
  styleUrl: './intro-body.component.scss'
})
export class IntroBodyComponent implements OnInit {

  test: WritableSignal<any>

  constructor(public _introDataService: IntroDataService) {
    this.test = signal("penis");
  }

  ngOnInit(): void {
    this._introDataService.get().subscribe(z => {
      console.log(z);
      this.test.set(z);
    })
  }
}
