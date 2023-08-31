import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { IMethodService, MethodService } from './method.service';

interface MethodNameAndParameterMapping {
  methodName: keyof IMethodService;
  propertyName: string;
}

const methodAndParameterNameMapping: {
  [key: string]: MethodNameAndParameterMapping[];
} = {
  Case1: [
    { methodName: 'printHouse', propertyName: 'house' },
    { methodName: 'printCar', propertyName: 'car' },
  ],
  Case2: [
    {
      methodName: 'printTown',
      propertyName: 'town',
    },
    { methodName: 'printStreet', propertyName: 'street' },
  ],
};

@Component({
  selector: 'my-app',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  dataSource: {
    dataType: string;
    data:
      | {
          house: string;
          car: string;
        }
      | { town: string; car: string };
  }[] = [
    {
      dataType: 'Case1',
      data: {
        house: 'Buftea',
        car: 'BMW',
      },
    },
    {
      dataType: 'Case2',
      data: {
        town: 'Cluj',
        car: 'Muncii',
      },
    },
  ];
  constructor(private methodService: MethodService) {}

  ngOnInit(): void {
    this.test();
  }

  public test(): void {
    this.dataSource.forEach((x) => {
      Object.values(methodAndParameterNameMapping[x.dataType]).forEach((v) => {
        this.methodService[v.methodName]((x.data as any)[v.propertyName]);

        // this.methodService.printHouse(x.data.house);
        // this.methodService.printCar(x.data.house);
      });
    });
  }
}
