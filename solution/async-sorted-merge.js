'use strict';

const sortSourcesByDate = require('./sortSourcesByDate');
const printEntryAndGetNextLog = require('./printEntryAndGetNextLog');

module.exports = async (logSources, printer) => {
	let sorted = logSources.sort(sortSourcesByDate);
	let log = sorted[0];

	while (log && !log.drained) {
		log = printEntryAndGetNextLog(await log.popAsync(), printer, sorted);
	}

	printer.done();
};
