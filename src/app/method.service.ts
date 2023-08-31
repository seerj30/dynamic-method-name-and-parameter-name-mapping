import { Injectable } from '@angular/core';

export interface IMethodService {
  printHouse(house: string): void;
  printCar(car: string): void;
  printTown(town: string): void;
  printStreet(street: string): void;
}

@Injectable({
  providedIn: 'root',
})
export class MethodService implements IMethodService {
  constructor() {}

  public printHouse(house: string): void {
    console.log('House is' + house);
  }

  public printCar(car: string): void {
    console.log('Car is' + car);
  }

  public printTown(town: string): void {
    console.log('Town is' + town);
  }

  public printStreet(street: string): void {
    console.log('Street is' + street);
  }
}
