import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PropertiesModule } from './properties/properties.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0:27017/inmobiliaria'),
    PropertiesModule,
  ],
})
export class AppModule {}
