import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {
    constructor() { }
    @Input() heading: string;
    @Input() icon: string;
    ngOnInit() {
        console.log('layout');
    }
}
