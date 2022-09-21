import 'express-async-errors';
import express from 'express';
import router from './routers';

import handleErrors from './Middlewares/HandleError';

const app = express();
app.use(express.json());  
app.use(router);
app.use(handleErrors);

export default app;