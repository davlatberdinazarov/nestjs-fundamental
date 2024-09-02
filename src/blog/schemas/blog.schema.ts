import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Blog extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  excerpt: string;

  @Prop()
  description: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
