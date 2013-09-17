define(["ko"], function(ko) {
	return function createList() {
		return {
			elements: ko.observableArray(["yo", "yoyo"])
		};
	};
});