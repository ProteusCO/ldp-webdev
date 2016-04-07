/**
 * Created by vtdev on 4/7/16.
 */
function setupAdvancedExpandCollapse(ctx) {
	var $ctx = !!ctx ? $(ctx.parentNode || document) : $(ctx || document);
	$ctx.find('[data-additional-collapse]').each(function(idx, target) {
		target.collapse();
		var selector = target.data('data-additional-collapse');
		var addTargs = target.find(selector);
		addTargs.each(function(idx2, addTarg) {
			addTarg.collapse();
		});
		target.on('show.bs.collapse', function() {
			addTargs.each(function(idx2, addTarg) {
				addTarg.collapse('show');
			});
		});
		target.on('hide.bs.collapse', function() {
			addTargs.each(function(idx2, addTarg) {
				addTarg.collapse('hide');
			});
		});
	});
}