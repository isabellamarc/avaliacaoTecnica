import { app } from './app';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 3001;

const server = app.listen(3000);

export default server;
