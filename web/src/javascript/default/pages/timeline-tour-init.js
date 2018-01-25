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
					timelineTour.init();

					// Start the tour
					//noinspection JSUnresolvedVariable
					timelineTour.start(true);

					$('body').on('click', '.popover-navigation > button', function () {
						userInfo.toured["executive-decision-maker"] = true;
						xhr.onreadystatechange = null;
						xhr.open('post', '/ws/user-info');
						xhr.send(JSON.stringify(userInfo));
					});
				} else if (userInfo.toured["executive-sponsor"] === false) {
					// Initialize the tour
					//noinspection JSUnresolvedVariable
					timelineTour.init();

					// Start the tour
					//noinspection JSUnresolvedVariable
					timelineTour.start(true);

					$('body').on('click', '.popover-navigation > button', function () {
						userInfo.toured["executive-sponsor"] = true;
						xhr.onreadystatechange = null;
						xhr.open('post', '/ws/user-info');
						xhr.send(JSON.stringify(userInfo));
					});

				} else if (userInfo.toured["participant"] === false) {
					// Initialize the tour
					//noinspection JSUnresolvedVariable
					timelineTour.init();

					// Start the tour
					//noinspection JSUnresolvedVariable
					timelineTour.start(true);

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
	var timelineTour = new Tour({
		steps: [
			{
				element: ".timeline-ui",
				title: "Your Plan",
				content: "Chronological, configured development plan timeline. Default view is the current timeline.",
				placement: "top",
                animation: false
			},
			{
				element: "span.select-year",
				title: "Dropdown Menu",
				content: "Use this menu to select the year shown.",
				placement: "left",
                animation: false
			},
			{
				element: "button.past",
				title: "See Past Activities",
				content: "Click here to see past development activities.",
                animation: false
			},
			{
				element: "button.future",
				title: "See Future Activities",
				content: "Click here to see future development activities.",
                animation: false
			},
			{
				element: "#action-item-mgt",
				title: "Your Action Items",
				content: "Activities or assignments for you to complete.",
				placement: "top",
                animation: false
			},
			{
				element: "div.overdue-btn",
				title: "Overdue",
				content: "These action items have not been completed and their due date has passed.",
				placement: "left",
                animation: false
			},
			{
				element: "div.active-btn",
				title: "In Progress",
				content: "These action items have been assigned with an upcoming due date.",
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

	launchTourIfNecessary(timelineTour);

});