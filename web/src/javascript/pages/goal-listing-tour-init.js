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
				placement: "left"
			},
			{
				element: ".top-menu li.link.resources",
				title: "Resource Library",
				content: "Click here to view resources available to all LRSuccessPath members.",
				placement: "left"
			},
			{
				element: ".sidebar-toggle-box .fa-bars",
				title: "Menu Toggle",
				content: "Click here to collapse the side navigation to icons only, or expand it to view the entire navigation.",
				placement: "right"
			},
			{
				element: ".lr-participant-menu .organizational-goals",
				title: "Organizational Goals",
				content: "Click here to view Organizational Goals."
			},
			{
				element: ".lr-participant-menu .leadership-goals",
				title: "Leadership Goals",
				content: "Click here to view Leadership Goals."
			},
			{
				element: ".lr-participant-menu .personal-goals",
				title: "Personal Goals",
				content: "Click here to view Personal Goals."
			},
			{
				element: ".goal-listing-wrapper .wrapper",
				title: "Goal Listing",
				content: "For each of the goal types (Organizational, Leadership and Personal), active goals" +
				" and alignments will be displayed in this area.",
				placement: "top"
			},
			{
				element: ".goal-listing-header .actions .btn.add",
				title: "Add a Goal",
				content: "Don't have any active goals or need to add another goal? Click this button to get started.",
				placement: "left"
			},
			{
				element: ".lr-participant-menu .timeline-nav",
				title: "Timeline",
				content: "Click here to view Plan timeline."
			},
			{
				element: ".lr-participant-menu .profile",
				title: "Profile",
				content: "Click here to view Plan profile."
			},
			{
				element: ".lr-participant-menu .resources",
				title: "My Resources",
				content: "Click here to view resources assigned to the Plan."
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
		backdropPadding: 5
	});

	// Instance the EDM tour
	//noinspection LongLine
	var edmGoalTour = new Tour({
		steps: [
			{
				element: ".lr-participant-menu .organizational-goals",
				title: "Organizational Goals",
				content: "Click here to view Organizational Goals."
			},
			{
				element: ".lr-participant-menu .leadership-goals",
				title: "Leadership Goals",
				content: "Click here to view Leadership Goals."
			},
			{
				element: ".lr-participant-menu .personal-goals",
				title: "Personal Goals",
				content: "Click here to view Personal Goals."
			},
			{
				element: ".goal-listing-wrapper .wrapper",
				title: "Goal Listing",
				content: "For each of the goal types (Organizational, Leadership and Personal), active goals" +
				" and alignments will be displayed in this area.",
				placement: "top"
			},
			{
				element: ".goal-listing-header .actions .btn.add",
				title: "Add a Goal",
				content: "Don't have any active goals or need to add another goal? Click this button to get started.",
				placement: "left"
			},
			{
				element: ".lr-participant-menu .timeline-nav",
				title: "Timeline",
				content: "Click here to view Plan timeline."
			},
			{
				element: ".lr-participant-menu .profile",
				title: "Profile",
				content: "Click here to view Plan profile."
			},
			{
				element: ".lr-participant-menu .resources",
				title: "My Resources",
				content: "Click here to view resources assigned to the Plan."
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
		backdropPadding: 5
	});

	launchTourIfNecessary(participantGoalTour);

	launchTourIfNecessary(edmGoalTour);

});