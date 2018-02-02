/**
 * Created by vtdev on 4/7/16.
 */
var CN_HAS_ERROR = 'has-error'
var CN_HAS_IMPORTANT = 'has-important'

function errorMessageCleanup () {
	$('.' + CN_HAS_ERROR).each(function (idx, el) {
		var $el = $(el)
		$el.removeClass(CN_HAS_ERROR)
		$el.find('.error-message').remove()
	})
	$('.' + CN_HAS_IMPORTANT).each(function (idx, el) {
		var $el = $(el)
		$el.removeClass(CN_HAS_IMPORTANT)
		$el.find('.important-message').remove()
	})
}

function setupErrorMessages (ctx) {
	function createWrapper ($prop) {
		var $it
		if ($prop.hasClass('ctb') || $prop.hasClass('rtb'))
			$it = $prop.find('label').wrap('<span class="msg-wrap"></span>').parent()
		else
			$it = $prop.wrap('<span></span>')
		return $it
	}

	var $ctx = $(ctx || document), hasErrors
	var $mcs = $ctx.hasClass('message-container') ? $ctx : $ctx.find('.message-container')
	if ($mcs.length === 0)
		return
	$mcs.each(function (idx, mc) {
		var $mc = $(mc)
		$mc.find('.error [data-source]').each(function (idx, el) {
			var $el = $(el), id = $el.data('source')
			var $prop = $('#' + id)
			if ($prop.length === 0)
				return
			if ($prop.prop('tagName').toLowerCase() != 'div') {
				var $it = createWrapper($prop)
				$it.addClass(CN_HAS_ERROR)
				$it.append('<span class="error-message"><span class="error-text">' + $el.text() + '</span></span>')
				hasErrors = true
			} else {
				$prop.addClass(CN_HAS_ERROR)
				$prop.append('<div class="error-message"><span class="error-text">' + $el.text() + '</span></div>')
				hasErrors = true
			}
			$el.parent().remove()
		})
		$mc.find('.important [data-source]').each(function (idx, el) {
			var $el = $(el), id = $el.data('source')
			var $prop = $('#' + id)
			if ($prop.length === 0)
				return
			if ($prop.prop('tagName').toLowerCase() != 'div') {
				var $it = createWrapper($prop)
				$it.addClass(CN_HAS_IMPORTANT)
				$it.append('<span class="important-message"><span class="important-text">' + $el.text() + '</span></span>')
			} else {
				$prop.addClass(CN_HAS_IMPORTANT)
				$prop.append('<div class="important-message"><span class="important-text">' + $el.text() + '</span></div>')
			}
			$el.parent().remove()
		})
	})
	if (hasErrors) {
		$mcs.append('<div class="message error"><span class="brief">Please review the errors below</span></div>')
		//noinspection JSUnresolvedFunction - defined in MIWT util.js
		var scrollTo = $('.error-message').parent().first()[0]
		setTimeout(function () {
			scrollTo.scrollIntoViewIfNeeded(true)
		}, 50)
	}

	// if($mc.children().length === 0)
	// 	$mc.addClass('empty');
}