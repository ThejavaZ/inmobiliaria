import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Property } from './schemas/property.schema';

@Injectable()
export class PropertiesService {
  constructor(@InjectModel(Property.name) private propertyModel: Model<Property>) {}

  async create(data: any) {
    const newProperty = new this.propertyModel(data);
    return newProperty.save();
  }

  async findAll() {
    return this.propertyModel.find().exec();
  }
}
