import { Router, Response } from 'express';

import metricController from '../controllers/metricController';

const router = Router();

router.get(
  '/aws/get-names',
  metricController.getLambdaFuncNames,
  (_, res: Response) => res.send(res.locals.data),
);

router.get(
  '/aws/get-metrics',
  metricController.getMetrics,
  (_, res: Response) => res.send(res.locals.data),
);

export default router;
