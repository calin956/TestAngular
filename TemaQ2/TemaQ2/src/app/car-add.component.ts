import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'car-add',
    templateUrl: './CarSelectors/CarAdd.html',
})

export class CarAddComponent {

    constructor(private http: HttpClient) { }

    AddCar(Name: string, Type: string, Engine: string, Color: string, NumberOfDoors: number) {
        var car = { Name: Name, Type: Type, Engine: Engine, Color: Color, NumberOfDoors: NumberOfDoors }
        this.http.post('/Car/Create', car).subscribe();
    }
}