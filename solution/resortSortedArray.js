module.exports = sources => {
	for (let i = 0; i < sources.length - 1; i++) {
		const prevSource = sources[i];
		const nextSource = sources[i + 1];

		if (prevSource.last.date > nextSource.last.date) {
			sources[i] = nextSource;
			sources[i + 1] = prevSource;
		} else {
			return;
		}
	}
};
