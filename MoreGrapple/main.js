(function(){
	var ready = function () {
	};
	// Check for updates
           UltimateLib.Update.GitHub.notifyIfNewerVersion("KizzaGaming", "MoreGrapple", "master", "MoreGrapple");
	};

	var error = function () {
	};

GDT.loadJs(['mods/MoreGrapple/main/code.js'], ready, error);

})();
