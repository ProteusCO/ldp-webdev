/**
 * Created by vtdev on 5/23/16.
 */

$(function () {

	function launchTourIfNecessary() {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', '/ws/user-info');
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var userInfo = JSON.parse(xhr.responseText);
				if (userInfo.toured["executive-decision-maker"] === false) {
					// Initialize the tour
					//noinspection JSUnresolvedVariable
					edmGoalTour.init();

					// Start the tour
					//noinspection JSUnresolvedVariable
					edmGoalTour.start(true);

					$('body').on('click', '.popover-navigation > button', function () {
						userInfo.toured["executive-decision-maker"] = true;
						xhr.onreadystatechange = null;
						xhr.open('post', '/ws/user-info');
						xhr.send(JSON.stringify(userInfo));
					});
				} else if (userInfo.toured["executive-sponsor"] === false) {
					// Initialize the tour
					//noinspection JSUnresolvedVariable
					edmGoalTour.init();

					// Start the tour
					//noinspection JSUnresolvedVariable
					edmGoalTour.start(true);

					$('body').on('click', '.popover-navigation > button', function () {
						userInfo.toured["executive-sponsor"] = true;
						xhr.onreadystatechange = null;
						xhr.open('post', '/ws/user-info');
						xhr.send(JSON.stringify(userInfo));
					});

				} else if (userInfo.toured["participant"] === false) {
					// Initialize the tour
					//noinspection JSUnresolvedVariable
					participantGoalTour.init();

					// Start the tour
					//noinspection JSUnresolvedVariable
					participantGoalTour.start(true);

					$('body').on('click', '.popover-navigation > button', function () {
						userInfo.toured["participant"] = true;
						xhr.onreadystatechange = null;
						xhr.open('post', '/ws/user-info');
						xhr.send(JSON.stringify(userInfo));
					});
				}
			}
		};

		xhr.send();

	}

	// Instance the Participant tour
	//noinspection LongLine
	var participantGoalTour = new Tour({
		steps: [
			{
				element: ".dropdown.profile",
				title: "Your profile",
				content: "Click the image to access your profile or logout of the platform.",
				placement: "left",
                animation: false
			},
			{
				element: ".top-menu li.link.resources",
				title: "Resource Library",
				content: "Click here to view resources available to all Accelerate members.",
				placement: "left",
                animation: false
			},
			{
				element: ".sidebar-toggle-box .fa-bars",
				title: "Menu Toggle",
				content: "Click here to collapse the side navigation to icons only, or expand it to view the entire navigation.",
				placement: "right",
                animation: false
			},
			{
				element: ".lr-participant-menu .goals",
				title: "Goals",
				content: "Click here to view Emerging Leader goals.",
                animation: false
			},
			{
				element: ".lr-participant-menu .timeline-nav",
				title: "Timeline",
				content: "Click here to view Emerging Leader timeline - the development journey.",
                animation: false
			},
			{
				element: ".lr-participant-menu .profile",
				title: "Profile",
				content: "Click here to view Emerging Leader profile.",
                animation: false
			},
			{
				element: ".lr-participant-menu .resources",
				title: "My Resources",
				content: "Click here to view resources assigned to Emerging Leader timeline.",
                animation: false
			},
			{
				element: ".tab-container li.organizational",
				title: "Organizational Tab",
				content: "These goals directly impact the current organizational/business goals.",
				placement: "right",
                animation: false
			},
			{
				element: ".tab-container li.leadership",
				title: "Leadership Tab",
				content: "Goals related to leadership and/or behaviors and/or attitudes.",
				placement: "right",
                animation: false
			},
			{
				element: ".tab-container li.personal",
				title: "Personal Tab",
				content: "Goals outside of business, important to the individual, but not necessarily directly tied" +
				" to EDM expectations.",
				placement: "right",
                animation: false
			},
			{
				element: ".goals-viewer > .persistence-actions button.completed-goals-toggle",
				title: "Show Completed Goals",
				content: "Click here to see goals that have already been completed.",
				placement: "left",
                animation: false
			},
			{
				element: ".goals-viewer > .persistence-actions button.configure",
				title: "Configure Goals",
				content: "Click here to add new goals or edit existing goals.",
				placement: "left",
                animation: false
			}/*,
			{
				// Automatically go to Timeline page
				path: function() {
					var goToTimeline = "/participant/timeline" + location.pathname.substring("/participant/goals".length);
					location.href = goToTimeline;
				}
			}*/
		],
		storage: false,
		backdrop: true,
		backdropPadding: 5,
        template:
        "<div class='popover tour' style='max-width: 300px;'>" +
        	"<div class='arrow'></div>" +
        	"<h3 class='popover-title popover-header'></h3>" +
        	"<div class='popover-body popover-content'></div>" +
        	"<div class='popover-navigation'>" +
        		"<button class='btn btn-default' data-role='prev'>« Prev</button>" +
        		"<span data-role='separator' style='margin-right: .5rem;'>|</span>" +
        		"<button class='btn btn-default' data-role='next'>Next »</button>" +
        		"<button class='btn btn-default' data-role='end'>End tour</button>" +
        	"</div>" +
        "</div>"
	});

	// Instance the EDM tour
	//noinspection LongLine
	var edmGoalTour = new Tour({
		steps: [
			{
				element: ".sidebar-toggle-box .fa-bars",
				title: "Menu Toggle",
				content: "Click here to collapse the side navigation to icons only, or expand it to view the entire navigation.",
				placement: "right",
                animation: false
			},
			{
				element: ".lr-participant-menu .goals",
				title: "Goals",
				content: "Click here to view Emerging Leader goals.",
                animation: false
			},
			{
				element: ".lr-participant-menu .timeline-nav",
				title: "Timeline",
				content: "Click here to view Emerging Leader timeline - the development journey.",
                animation: false
			},
			{
				element: ".lr-participant-menu .profile",
				title: "Profile",
				content: "Click here to view Emerging Leader profile.",
                animation: false
			},
			{
				element: ".lr-participant-menu .resources",
				title: "My Resources",
				content: "Click here to view resources assigned to Emerging Leader timeline.",
                animation: false
			},
			{
				element: ".tab-container li.organizational",
				title: "Organizational Tab",
				content: "These goals directly impact the current organizational/business goals.",
				placement: "right",
                animation: false
			},
			{
				element: ".tab-container li.leadership",
				title: "Leadership Tab",
				content: "Goals related to leadership and/or behaviors and/or attitudes.",
				placement: "right",
                animation: false
			},
			{
				element: ".tab-container li.personal",
				title: "Personal Tab",
				content: "Goals outside of business, important to the individual, but not necessarily directly tied" +
				" to EDM expectations.",
				placement: "right",
                animation: false
			},
			{
				element: ".goals-viewer > .persistence-actions button.completed-goals-toggle",
				title: "Show Completed Goals",
				content: "Click here to see goals that have already been completed.",
				placement: "left",
                animation: false
			},
			{
				element: ".goals-viewer > .persistence-actions button.configure",
				title: "Configure Goals",
				content: "Click here to add new goals or edit existing goals.",
				placement: "left",
                animation: false
			},
			{
				// Automatically go to Timeline page
				path: function() {
					var goToTimeline = "/participant/timeline" + location.pathname.substring("/participant/goals".length);
					location.href = goToTimeline;
				}
			}
		],
		storage: false,
		backdrop: true,
		backdropPadding: 5,
        template:
        "<div class='popover tour' style='max-width: 300px;'>" +
        	"<div class='arrow'></div>" +
        	"<h3 class='popover-title popover-header'></h3>" +
        	"<div class='popover-body popover-content'></div>" +
        	"<div class='popover-navigation'>" +
        		"<button class='btn btn-default' data-role='prev'>« Prev</button>" +
        		"<span data-role='separator' style='margin-right: .5rem;'>|</span>" +
        		"<button class='btn btn-default' data-role='next'>Next »</button>" +
        		"<button class='btn btn-default' data-role='end'>End tour</button>" +
        	"</div>" +
        "</div>"
	});

	launchTourIfNecessary(participantGoalTour);

	launchTourIfNecessary(edmGoalTour);

});