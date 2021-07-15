import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isWhiteBg: boolean = false;

    ngOnInit(): void {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                this.isWhiteBg = true;
            }
            else {
                this.isWhiteBg = false;
            }
        });
    }
}