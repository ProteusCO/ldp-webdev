/**
 * Created by vtdev on 5/23/16.
 */

$(function () {

	function launchTourIfNecessary () {
		var xhr = new XMLHttpRequest()
		xhr.open('GET', '/ws/user-info')
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var userInfo = JSON.parse(xhr.responseText)
				if (userInfo.toured['executive-decision-maker'] === false) {
					// Initialize the tour
					//noinspection JSUnresolvedVariable
					edmGoalTour.init()

					// Start the tour
					//noinspection JSUnresolvedVariable
					edmGoalTour.start(true)

					$('body').on('click', '.popover-navigation > button', function () {
						userInfo.toured['executive-decision-maker'] = true
						xhr.onreadystatechange = null
						xhr.open('post', '/ws/user-info')
						xhr.send(JSON.stringify(userInfo))
					})
				} else if (userInfo.toured['executive-sponsor'] === false) {
					// Initialize the tour
					//noinspection JSUnresolvedVariable
					edmGoalTour.init()

					// Start the tour
					//noinspection JSUnresolvedVariable
					edmGoalTour.start(true)

					$('body').on('click', '.popover-navigation > button', function () {
						userInfo.toured['executive-sponsor'] = true
						xhr.onreadystatechange = null
						xhr.open('post', '/ws/user-info')
						xhr.send(JSON.stringify(userInfo))
					})

				} else if (userInfo.toured['participant'] === false) {
					// Initialize the tour
					//noinspection JSUnresolvedVariable
					participantGoalTour.init()

					// Start the tour
					//noinspection JSUnresolvedVariable
					participantGoalTour.start(true)

					$('body').on('click', '.popover-navigation > button', function () {
						userInfo.toured['participant'] = true
						xhr.onreadystatechange = null
						xhr.open('post', '/ws/user-info')
						xhr.send(JSON.stringify(userInfo))
					})
				}
			}
		}

		xhr.send()

	}

	// Instance the Participant tour
	//noinspection LongLine
	var participantGoalTour = new Tour({
		steps: [
			{
				element: '.dropdown.profile',
				title: 'Your profile',
				content: 'Click the image to access your profile or logout of the platform.',
				placement: 'left',
				animation: false
			},
			{
				element: '.top-menu li.link.resources',
				title: 'Resource Library',
				content: 'Click here to view resources available to all Accelerate members.',
				placement: 'left',
				animation: false
			},
			{
				element: '.sidebar-toggle-box .fa-bars',
				title: 'Menu Toggle',
				content: 'Click here to collapse the side navigation to icons only, or expand it to view the entire navigation.',
				placement: 'right',
				animation: false
			},
			{
				element: '.lr-participant-menu .organizational-goals',
				title: 'Organizational Goals',
				content: 'Click here to view Organizational Goals.',
				animation: false
			},
			{
				element: '.lr-participant-menu .leadership-goals',
				title: 'Leadership Goals',
				content: 'Click here to view Leadership Goals.',
				animation: false
			},
			{
				element: '.lr-participant-menu .personal-goals',
				title: 'Personal Goals',
				content: 'Click here to view Personal Goals.',
				animation: false
			},
			{
				element: '.goal-listing-wrapper .wrapper',
				title: 'Goal Listing',
				content: 'For each of the goal types (Organizational, Leadership and Personal), active goals' +
				' and alignments will be displayed in this area.',
				placement: 'top',
				animation: false
			},
			{
				element: '.goal-listing-header .actions .btn.add',
				title: 'Add a Goal',
				content: 'Don\'t have any active goals or need to add another goal? Click this button to get started.',
				placement: 'left',
				animation: false
			},
			{
				element: '.lr-participant-menu .timeline-nav',
				title: 'Timeline',
				content: 'Click here to view Plan timeline.',
				animation: false
			},
			{
				element: '.lr-participant-menu .profile',
				title: 'Profile',
				content: 'Click here to view Plan profile.',
				animation: false
			},
			{
				element: '.lr-participant-menu .resources',
				title: 'My Resources',
				content: 'Click here to view resources assigned to the Plan.',
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
		'<div class=\'popover tour\' style=\'max-width: 300px;\'>' +
		'<div class=\'arrow\'></div>' +
		'<h3 class=\'popover-title popover-header\'></h3>' +
		'<div class=\'popover-body popover-content\'></div>' +
		'<div class=\'popover-navigation\'>' +
		'<button class=\'btn btn-default\' data-role=\'prev\'>« Prev</button>' +
		'<span data-role=\'separator\' style=\'margin-right: .5rem;\'>|</span>' +
		'<button class=\'btn btn-default\' data-role=\'next\'>Next »</button>' +
		'<button class=\'btn btn-default\' data-role=\'end\'>End tour</button>' +
		'</div>' +
		'</div>'
	})

	// Instance the EDM tour
	//noinspection LongLine
	var edmGoalTour = new Tour({
		steps: [
			{
				element: '.lr-participant-menu .organizational-goals',
				title: 'Organizational Goals',
				content: 'Click here to view Organizational Goals.',
				animation: false
			},
			{
				element: '.lr-participant-menu .leadership-goals',
				title: 'Leadership Goals',
				content: 'Click here to view Leadership Goals.',
				animation: false
			},
			{
				element: '.lr-participant-menu .personal-goals',
				title: 'Personal Goals',
				content: 'Click here to view Personal Goals.',
				animation: false
			},
			{
				element: '.goal-listing-wrapper .wrapper',
				title: 'Goal Listing',
				content: 'For each of the goal types (Organizational, Leadership and Personal), active goals' +
				' and alignments will be displayed in this area.',
				placement: 'top',
				animation: false
			},
			{
				element: '.goal-listing-header .actions .btn.add',
				title: 'Add a Goal',
				content: 'Don\'t have any active goals or need to add another goal? Click this button to get started.',
				placement: 'left',
				animation: false
			},
			{
				element: '.lr-participant-menu .timeline-nav',
				title: 'Timeline',
				content: 'Click here to view Plan timeline.',
				animation: false
			},
			{
				element: '.lr-participant-menu .profile',
				title: 'Profile',
				content: 'Click here to view Plan profile.',
				animation: false
			},
			{
				element: '.lr-participant-menu .resources',
				title: 'My Resources',
				content: 'Click here to view resources assigned to the Plan.',
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
		'<div class=\'popover tour\' style=\'max-width: 300px;\'>' +
		'<div class=\'arrow\'></div>' +
		'<h3 class=\'popover-title popover-header\'></h3>' +
		'<div class=\'popover-body popover-content\'></div>' +
		'<div class=\'popover-navigation\'>' +
		'<button class=\'btn btn-default\' data-role=\'prev\'>« Prev</button>' +
		'<span data-role=\'separator\' style=\'margin-right: .5rem;\'>|</span>' +
		'<button class=\'btn btn-default\' data-role=\'next\'>Next »</button>' +
		'<button class=\'btn btn-default\' data-role=\'end\'>End tour</button>' +
		'</div>' +
		'</div>'
	})

	launchTourIfNecessary(participantGoalTour)

	launchTourIfNecessary(edmGoalTour)

})