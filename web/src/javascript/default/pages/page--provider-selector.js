function setupBackgroundImages() {
    $('.coaching-selector.standalone .coaching-item[data-background-image]').each(function(idx, target) {
        var backgroundurl = target.getAttribute('data-background-image');
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
            + 'padding: .25rem 0 .25rem 4.25rem;'
            + 'background: url(' + backgroundurl + ') left center/contain no-repeat;';
        target.style.cssText += styleString;
    });
}

$(setupBackgroundImages);