const resortSortedArray = require('./resortSortedArray');

module.exports = (entry, printer, sortedSources) => {
	if (entry && (!sortedSources[1] || entry.date < sortedSources[1].last.date)) {
		printer.print(entry);
	} else if (!entry) {
		sortedSources.shift();
	} else {
		resortSortedArray(sortedSources);
	}

	return sortedSources[0];
};
