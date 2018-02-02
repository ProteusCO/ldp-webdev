$(document).ready(function () {
	function getForm () {
		var ret = null
		$('form.miwt-form').each(function (idx, form) {
			var el = form.elements['goal-wizard']
			if (el)
				ret = form
		})
		return ret
	}

	$('.wizard-menu a.menuitemlabel').each(function (idx, anchor) {
		$(anchor).on('click', function (evt) {
			if (anchor._skip_gw) {
				anchor._skip_gw = false
				return true
			}
			var form = getForm()
			if (!form) return
			var so = form.submit_options, origPostUpdate = so && so.postUpdate

			function goalWizardPostUpdate (data) {
				var hasError = data.nodesUpdated.reduce(function (bval, node) {
					return bval || ($(node).find('.error.message').length > 0)
				}, false)

				if (origPostUpdate) origPostUpdate.call(this, data)
				form.elements['goal-wizard'].value = 'true'
				if (!hasError) {
					anchor._skip_gw = true
					anchor.click()
				}
			}

			var newOpts = {postUpdate: goalWizardPostUpdate}
			if (so) newOpts = $.extend({}, so, newOpts)
			form.elements['goal-wizard'].value = 'validate'
			form.MIWTSubmit(newOpts)
			return false
		})
	})

})