import { model, connect } from 'mongoose';
import { DATABASE_NAME, DATABASE_PORT } from '@/Const';
import {
  UserSchemaType,
  TimelineSchemaType,
  TimelineSubjectSchemaType,
} from '@/Type';
import { UserSchema, TimelineSchema, TimelineSubjectSchema } from './schema';

const UserModel = model<UserSchemaType>('User', UserSchema);
const TimelineModel = model<TimelineSchemaType>('Timeline', TimelineSchema);
const SubjectModel = model<TimelineSubjectSchemaType>(
  'Subject',
  TimelineSubjectSchema
);

const run = async () => {
  await connect(`mongodb://127.0.0.1:${DATABASE_PORT}/${DATABASE_NAME}`);
  console.log(`
    ----------------------
    MongoDB Run at ${DATABASE_PORT}
    ----------------------
  `);
};

run().catch((err) => console.log(err));

export { SubjectModel, TimelineModel, UserModel };
