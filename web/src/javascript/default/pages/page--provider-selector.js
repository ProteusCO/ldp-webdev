function setupBackgroundImages () {
	$('.coaching-selector.standalone .coaching-item[data-background-image]').each(function (idx, target) {
		var backgroundurl = target.getAttribute('data-background-image')
		var styleString = ';overflow: hidden;'
			+ 'text-indent: 0;'
			+ 'margin: .5rem 0;'
			+ 'white-space: nowrap;'
			+ 'width: 100%;'
			+ 'display: block;'
			+ 'vertical-align: middle;'
			+ 'font-size: .85rem;'
			+ 'color: #2e2e2e;'
			+ 'text-transform: none;'
			+ 'padding: .5rem 1rem .5rem 1rem;'
			+ 'background: url(' + backgroundurl + ') left center/contain no-repeat;'
			+ 'text-align: center;'
			+ 'background-position-x: 5%;'
			+ 'cursor: pointer;'
		target.style.cssText += styleString
	})
}

$(setupBackgroundImages)