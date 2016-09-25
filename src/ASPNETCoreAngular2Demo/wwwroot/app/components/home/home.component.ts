import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/DataService';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    public message: string;
    public values: any[];

    constructor(private _dataService: DataService) {
        this.message = "Hello from HomeComponent constructor";
    }

    ngOnInit() {
        this._dataService
            .GetAll()
            .subscribe(data => this.values = data,
            error => console.log(error),
            () => console.log('Get all complete'));
    }
}