import { model, connect } from 'mongoose';
import { DATABASE_NAME, DATABASE_PORT } from '@/Const';
import { UserSchema, TimelineSchema, TimelineSubjectSchema } from './schema';

const run = async () => {
  await connect(`mongodb://127.0.0.1:${DATABASE_PORT}/${DATABASE_NAME}`);
  console.log(`
    ----------------------
    MongoDB Run at ${DATABASE_PORT}
    ----------------------
  `);
};

run().catch((err) => console.log(err));
