module.exports = {
	index: function (req, res) {
		res.render('entryPage', {
			title: "Video Contest!"
		})
	}
}