import { Component, Input } from '@angular/core';

@Component({
    selector: 'card-component',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() imgUrl: string = "../../assets/images/logo.png";
    @Input() cardTitle: string = "";
    @Input() cardDesc: string = "";
}