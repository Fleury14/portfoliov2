import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-encounter',
    templateUrl: './encounter.component.html',
    styleUrls: [ './encounter.component.scss' ]
})

export class EncounterComponent implements OnInit {

    constructor(private _route: Router) {}

    ngOnInit(): void {
        setTimeout( () => { this._route.navigateByUrl('home'); }, 4000);
    }
    
}