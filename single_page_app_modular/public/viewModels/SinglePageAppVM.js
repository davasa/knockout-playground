define(["ko", "sammy"], function (ko, Sammy) {
	return function singlePageAppVM() {
		var pages = {
			list: ko.observable(null),
			edit: ko.observable(null),
			play: ko.observable(null),
			info: ko.observable(null)
		};
		function clearPages() {
			for(var prop in pages) {
				pages[prop](null);
			}
		}

		Sammy(function () {
			this.get("#list", function () {
				clearPages();
				require(["viewModels/ListVM"], function (listVM) {
					pages.list(listVM());
				});
			});

			this.get("#edit/:id", function (context) {
				clearPages();
				pages.edit({});
			});

			this.get("#play/:id", function (context) {
				clearPages();
				pages.play({});
			});

			this.get("#info", function () {
				clearPages();
				pages.info({});
			});

			this.get ("", function () {
				location.hash = "#info";
			});
		}).run();

		return {
			//erre meg tipikusan jon par fg., pl logout, userrol infok, stb...
			pages: pages
		};
	};
});
