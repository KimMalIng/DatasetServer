import { Schema } from 'mongoose';
import {
  UserSchemaType,
  TimelineSchemaType,
  TimelineSubjectSchemaType,
} from '@/Type';

const UserSchema = new Schema<UserSchemaType>({
  id: { type: String, required: true },
  password: { type: String, required: true },
  token: { type: String, required: true },
});

const TimelineSchema = new Schema<TimelineSchemaType>({
  semester: { type: Schema.Types.Mixed, required: true },
  year: { type: Number, required: true },
  timelineToken: { type: String, required: true },
  userToken: { type: String, required: true },
});

const TimelineSubjectSchema = new Schema<TimelineSubjectSchemaType>({
  day: { type: Number, required: true },
  endTime: { type: String, required: true },
  startTime: { type: String, required: true },
  name: { type: String, required: true },
  timelineToken: { type: String, required: true },
  type: { type: String, required: true },
});

export { UserSchema, TimelineSchema, TimelineSubjectSchema };
