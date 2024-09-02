import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Songs extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  artists: string[];

  @Prop({ required: true })
  releasedDate: Date;  // Corrected spelling

  @Prop({ required: true })
  duration: string;  // Changed to string for time duration
}

export type SongsDocument = Songs & Document;
export const SongsSchema = SchemaFactory.createForClass(Songs);
