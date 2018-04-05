define([
	'jquery',
	'backbone',
	'underscore',
	'handlebars',
	'text!submitFeedback/template/feedbackForm.hbs'
], function($, Backbone, _, Handlebars, FeedbackFormTemplate) {
	var feedbackView = Backbone.View.extend({

		template:Handlebars.compile(FeedbackFormTemplate),

		el:$('#userRegForm'),

		initialize: function() {
			this.render();
		},
		events: {
			'click input[name="rating"]': 'ratingCount'
		},
		render: function() {
			this.$el.html(this.template);
		},
		ratingCount: function() {
			console.log("radio button clicked");
			var count = $('input[name=rating]:checked').val();
			console.log(count);
			count = count/2;
			const numberOfFullStars = parseInt(count.toString(), 10);
        	const halfStar = parseFloat(count.toString()) % 1;
        	console.log(numberOfFullStars+"==="+halfStar);
		}

	});

	return feedbackView;
});