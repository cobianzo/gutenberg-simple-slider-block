const defaultConfig = require("@wordpress/scripts/config/webpack.config");

// console.log( 'coco entry', defaultEntry );
// This method doesnt watch frontend.js nor frontend.scss; we need to build after any change
module.exports = {
	...defaultConfig,
	entry: {
		index: "./src/index.js",
		frontend: "./src/frontend.js",
	},
};
