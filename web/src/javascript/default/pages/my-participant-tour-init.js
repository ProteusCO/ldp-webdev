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
					myParticipantTour.init()

					// Start the tour
					//noinspection JSUnresolvedVariable
					myParticipantTour.start(true)

					$('body').on('click', '.popover-navigation > button', function () {
						userInfo.toured['executive-decision-maker'] = true
						xhr.onreadystatechange = null
						xhr.open('post', '/ws/user-info')
						xhr.send(JSON.stringify(userInfo))
					})

				}

				if (userInfo.toured['executive-sponsor'] === false) {
					// Initialize the tour
					//noinspection JSUnresolvedVariable
					myParticipantTour.init()

					// Start the tour
					//noinspection JSUnresolvedVariable
					myParticipantTour.start(true)

					$('body').on('click', '.popover-navigation > button', function () {
						userInfo.toured['executive-sponsor'] = true
						xhr.onreadystatechange = null
						xhr.open('post', '/ws/user-info')
						xhr.send(JSON.stringify(userInfo))
					})

				}

			}
		}

		xhr.send()

	}

	// Instance the EDM tour
	//noinspection LongLine
	var myParticipantTour = new Tour({
		steps: [
			{
				element: '.dropdown.profile',
				title: 'My Account',
				content: 'Click the image to access My Account or logout of the platform.',
				placement: 'left',
				animation: false
			},
			{
				element: '.top-menu li.link.resources',
				title: 'Resource Library',
				content: 'Click here to view public resources available to all Accelerate members.',
				placement: 'left',
				animation: false
			},
			{
				element: '.top-menu li.link.client-participant-listing',
				title: 'My Participants',
				content: 'Click here at anytime to see your list of participants.',
				placement: 'left',
				animation: false
			},
			{
				element: '.top-menu li.link.team-goals',
				title: 'Team Goals',
				content: 'Click here at anytime to see a list of your team\'s goals.',
				placement: 'left',
				animation: false
			},
			{
				element: '.search-bar',
				title: 'My Participant Search',
				content: 'Use this area to search for participants.',
				placement: 'top',
				animation: false
			},
			{
				element: '.search-results tr.first .card.plan',
				title: 'View a Participant',
				content: 'To continue the tour, click the highlighted process name to view the participant\'s Goals,' +
				'Timeline, Profile and Resources.',
				placement: 'top',
				animation: false
			}
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

	launchTourIfNecessary(myParticipantTour)

})