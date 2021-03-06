import {Photo} from './photo.model';
import {AmenityForDisabled} from '../rooms/amenity-for-disabled.model';
import {Equipment} from '../rooms/equipment.model';
import {RoomAddress} from './room-address.model';
import {Activity} from "../rooms/activity.model";


export class RoomForDetails {
  // amenitiesForDisabled?: Array<AmenityForDisabled>;
  // area?: number;
  // capacity?: number;
  // name?: string;
  // description?: string;
  // equipments?: Array<Equipment>;
  // parkingSpace?: boolean;
  photos?: Array<Photo>;
  price?: number;
  rating?: number;
  // roomAddress?: RoomAddress;
  // roomArrangementsCapabilitiesDescription?: string;

  constructor(
    public amenitiesForDisabled: AmenityForDisabled[],
    public area: number,
    public capacity: number,
    public id: string,
    public name: string,
    public description: string,
    public equipments: Equipment[],
    public parkingSpace: boolean,
    public roomAddress: RoomAddress,
    public roomArrangementsCapabilitiesDescription: string,
    public activities: Activity[],
    public customerInformation: {"firstName": string, "lastName": string,
      "phoneNumber": number, "email": string, userName: string}
  ) {
  }
}
