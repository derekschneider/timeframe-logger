module.exports = (prevLog, nextLog) => {
	if (prevLog.last.date > nextLog.last.date) {
		return 1;
	} else if (prevLog.last.date < nextLog.last.date) {
		return -1;
	}
	return 0;
};
