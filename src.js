export default function delayMiddleware({ dispatch/* dispatch, getState */}) {
	return (next) => (action) => {
		const { delay, ...rest } = action;

		if (delay) {
			// console.log('MIDDLEWARE DELAY ', action.type);
			// console.log(action);
			setTimeout(()=>dispatch({...rest}), delay);
		} else return next(action);
	};
}
