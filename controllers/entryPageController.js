// var submissionModel=require('../models/submissiondata')

module.exports = {
	index: function (req, res) {
		res.render('entryPage', {
			title: "Video Contest!"
		})
	},

	form: function(req, res) {
		res.render('entryPage', {
			title: "Video Contest!",
			creator: req.body.creator,
			link: req.body.url,
			title: req.body.vidTitle,
			description: req.body.description
		});
	}
}
