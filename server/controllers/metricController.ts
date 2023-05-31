import { Request, Response, NextFunction } from 'express';

import getLambdaFuncs from '../helpers/getLambdaFuncs';
import getLambdaMetrics from '../helpers/getLambdaMetrics';

export default {
  getLambdaFuncNames(req: Request, res: Response, next: NextFunction) {
    try {
      const func_names = getLambdaFuncs();
      res.locals.data = func_names;
      return next();
    } catch (err) {
      return next(err);
    }
  },

  getMetrics(req: Request, res: Response, next: NextFunction): void {
    try {
      const { region, func_name, metric_name, start_time, end_time, period } =
        req.body;
      const data = getLambdaMetrics({
        region,
        func_name,
        metric_name,
        start_time,
        end_time,
        period,
      });
      res.locals.data = data;
      return next();
    } catch (err) {
      return next(err);
    }
  },
};
