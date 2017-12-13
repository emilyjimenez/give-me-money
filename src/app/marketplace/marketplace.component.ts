import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  constructor() { }

  ngOnInit() {
  }

  goToDetailPage(clickedProject) {

  };

}
