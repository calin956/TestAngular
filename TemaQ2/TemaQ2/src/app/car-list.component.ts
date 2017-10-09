import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'car-add',
    templateUrl: './CarSelectors/CarAdd.html',
})

export class CarListComponent implements OnInit {

    showCreate = false;
    cars: object;

    constructor(private http: HttpClient) { }
    ngOnInit(): void {
        this.http.get('/Car/GetCarsJson').subscribe(data => {
            this.cars = data;
        });
    }
}