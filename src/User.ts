import faker from '@faker-js/faker';
import { Mappable } from './CustomMap';

class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: 'red';

  constructor() {
    this.name = faker.name.lastName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}

export default User;
