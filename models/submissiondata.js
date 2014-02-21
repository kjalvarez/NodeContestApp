
var submission = function(creator, videoURL, title, description) {
	this.creator = creator;
	this.url = videoURL;
	this.title=title;
	this.description=description;
}

var contestEntries=[];

module.exports = {
	
	create: function(creator, videoURL, title, description) {
		var newEntry = new submission(creator, videoURL, title, description);
		contestEntries.push(newEntry)
		console.log(contestEntries);
	},

	findAll: function() {
		return contestEntries.slice();
	},

	findSubmission: function(creator) {
		return contestEntries.filter(function(submission) {
			return submission.creator===creator;
		})[0];
	}
}

