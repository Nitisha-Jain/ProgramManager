import { ProductInterface } from './product';
import { of, Observable } from 'rxjs';

export class MockProductService {
  public sampleData: ProductInterface = {
    productName: 'Nutrella',
    durationWeek: 23,
    durationDays: 34,
    durationHours: 4,
    createdAt: new Date(),
    assignee: 3,
    agenda: [
      'vxhvchjx',
      'bvhbvjbkj'
    ],
    program: [],
    id: 'ygf'
  };
  addProduct(inputData: ProductInterface): Observable<ProductInterface> {
    return of(this.sampleData);
  }
}
