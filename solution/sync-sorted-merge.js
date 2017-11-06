'use strict';

const sortSourcesByDate = require('./sortSourcesByDate');
const printEntryAndGetNextLog = require('./printEntryAndGetNextLog');

module.exports = (logSources, printer) => {
	let sorted = logSources.sort(sortSourcesByDate);
	let log = sorted[0];

	while (log && !log.drained) {
		log = printEntryAndGetNextLog(log.pop(), printer, sorted);
	}

	printer.done();
};
