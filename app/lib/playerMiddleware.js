import worker from './playerMiddlewareWorker';


const playerMiddleware = player => store => next => action => { //eslint-disable-line no-unused-vars
  if (!action.type.includes('PLAYER')) return next(action);
  return next({
    ...action,
    data: worker(action, player)
  });
};

export default playerMiddleware;
