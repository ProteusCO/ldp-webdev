/**
 * Created by vtdev on 4/7/16.
 */
function enableTooltips(ctx) {
	var $ctx = !!ctx ? $(ctx.parentNode || document) : $(ctx || document);

	if(!('ontouchstart' in window)) {
		$ctx.find(".tooltips").each(function (idx, el) {
			var $el = $(el);
			if ($el.hasClass("menu-component")) {
				$el.find("a[title]").tooltip();
			} else {
				$el.tooltip();
			}
		});
		$ctx.find('[data-toggle="tooltip"]').tooltip();
	}
	$ctx.find('[data-toggle="popover"]').each(function (idx, el) {
		//Fix for API-braking changes to popovers between bootstrap 4 alpha and bootstrap 4 release
		var template = el.getAttribute('data-template');
        if(typeof template !== 'undefined' && template) {
            template = template
				.replace('popover-content', 'popover-body')
				.replace('popover-arrow', 'arrow')
				.replace('popover-title', 'popover-header');
            el.setAttribute('data-template', template);
        }
        //End fix.
        var $el = $(el);
		$el.popover();
        $el.click(function () {
			$el.popover('toggle');
		});
		$el.on('blur', function () {
			$el.popover('hide');
		});
	});

}