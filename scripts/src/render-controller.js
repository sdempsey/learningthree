renderController = (function($) {
	var ret = {}, win, doc;

	function onDocumentReady() {
		win = $(window);
		doc = $(document);

		console.log('Hello World');
	}

	$(onDocumentReady);

	ret = {};

	return ret;
})(jQuery);