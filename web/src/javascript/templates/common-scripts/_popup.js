
function enableTargetPopups(ctx) {
    var $ctx = !!ctx ? $(ctx.parentNode || document) : $(ctx || document);
    $ctx.find('button[data-popup]').click(function (event) {
        event.preventDefault();
        window.open(this.dataset['popup'], this.dataset['popup'], 'resizable,scrollbars').focus();
    });
}