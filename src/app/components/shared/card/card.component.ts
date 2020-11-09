import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() items: any[] = [];
  constructor(private router: Router) {}

  goToItem(item: any) {
    let id = item.id;

    this.router.navigate(['artist', id]);
  }
}
