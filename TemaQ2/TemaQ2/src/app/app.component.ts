import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'car-add',
    templateUrl: './CarSelectors/CarList.html',
})

export class AppComponent implements OnInit{
    showCreate = false;
    cars: object;

    constructor(private http: HttpClient) { }
    ngOnInit(): void {
        this.http.get('/Car/GetCarsJson').subscribe(data => {
            this.cars = data;
        });
    }

    AddCar(Name: string, Type: string, Engine: string, Color: string, NumberOfDoors: number) {
        var car = { Name: Name, Type: Type, Engine: Engine, Color: Color, NumberOfDoors: NumberOfDoors }
        this.http.post('/Car/Create', car).subscribe();
    }
}
