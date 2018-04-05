define([
	'jquery',
	'backbone',
	'underscore',
	'handlebars',
	'text!submitFeedback/template/addFeedbackBtn.hbs',
	'submitFeedback/submitFeedback'
], function($, Backbone, _, Handlebars, FeedbackBtnTemplate, SubmitFeedbackView) {
	var userView = Backbone.View.extend({

		template:Handlebars.compile(FeedbackBtnTemplate),
		
		el: $('#newUserBtn'),

		initialize: function() {
			this.render();
		},
		events: {
			"click #addFeedback":"addFeedbackForm"
		},
		render: function() {
			this.$el.html(this.template);
		},
		addFeedbackForm: function() {
			var submitFeedbackView  = new SubmitFeedbackView();	
		}

	});

	return userView;
});