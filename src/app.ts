import 'express-async-errors';
import express from 'express';
import router from './routers';

import HandleErrors from './Middlewares/HandleErrors';

const app = express();
app.use(express.json());  
app.use(router);
app.use(HandleErrors);

export default app;