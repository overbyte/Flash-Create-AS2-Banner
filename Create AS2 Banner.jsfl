/**
 * Creates as2 banner with standard setup
 * @class 	Create AS2 Banner.jsfl
 * @author	Allandt Bik-Elliott
 * @version 0.1a
 **/

var AS2Banner = function () {
	// private members
	var scopeRef = this,
		docRef = fl.getDocumentDOM(),
		libraryRef = docRef.library,
		timelineRef = docRef.getTimeline();

	// public members
	return {

		createFolders : function () {
			libraryRef.newFolder("Bitmaps");
			libraryRef.newFolder("Classes");
			libraryRef.newFolder("Graphics");
			libraryRef.newFolder("MovieClips");
		},

		createBannerClip : function () {
			libraryRef.addNewItem('movie clip', 'Classes/banner');
			libraryRef.addItemToDocument({x:0, y:0}, 'Classes/banner');
			timelineRef.layers[timelineRef.currentLayer].name = 'banner';
			var elements = timelineRef.layers[timelineRef.currentLayer].frames[timelineRef.currentFrame].elements;
			elements[0].name = 'banner';
		}

	};
};

var banner = new AS2Banner();
banner.createFolders();
banner.createBannerClip();