var submissionModel=require('../models/submissiondata.js')

module.exports = {
	index: function (req, res) {
		res.render('entryPage', {
			title: "Video Contest!"
		})
	},

	form: function(req, res) {
		submissionModel.create(req.body.creator, req.body.url, req.body.vidTitle, req.body.description)
		res.render('entryPage', {
			contestEntries: submissionModel.findAll()
		});
	}
}
