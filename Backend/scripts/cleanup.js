const fs = require("fs");
const path = require("path");

function deleteStaleImages() {
	const imageLocation = path.join(__dirname, "../public/images");
	fs.readdir(imageLocation, (err, files) => {
		if (!files) {
			return;
		}
		files.forEach((file) => {
			const filePath = path.join(imageLocation, file);

			fs.stat(filePath, (err, stats) => {
				currentTime = Date.now();

				const fileAge = currentTime - stats.birthtimeMs;

				if (fileAge > 60 * 1000) {
					fs.unlink(filePath, (error) => {});
				}
			});
		});
	});
}

module.exports = {
	deleteStaleImages,
};
