api.controller = function () {
	var c = this;

	const generateCurrentDate = () => new Date().getFullYear().toString();
	c.currentDate = generateCurrentDate();
};
