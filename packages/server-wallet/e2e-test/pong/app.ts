import bodyParser from 'body-parser';
import express from 'express';
import {Message} from '@statechannels/wire-format';
import pino from 'express-pino-logger';

import {logger} from '../../src/logger';

import PongController from './controller';

const controller = new PongController();

const app = express();
app.use(pino({logger: logger as any}));

app.post('/status', (_req, res) => res.status(200).send('OK'));

app.get('/participant', (_req, res) =>
  res
    .status(200)
    .contentType('application/json')
    .send(controller.participantInfo)
);

app.post('/inbox', bodyParser.json(), async (req, res) =>
  res
    .status(200)
    .contentType('application/json')
    .send(await controller.acceptMessageAndReturnReplies(req.body.message as Message))
);

export default app;
