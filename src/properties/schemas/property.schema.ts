import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Property extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  type: string; // Casa, Departamento, Oficina

  @Prop({ type: Object })
  specs: {
    rooms: number;
    area: number;
  };
}

export const PropertySchema = SchemaFactory.createForClass(Property);