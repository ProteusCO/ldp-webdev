window.enableTargetPopups = (function(){
    var isFirefox = navigator.userAgent.indexOf("Firefox/")>=0,
        isEdge = navigator.userAgent.indexOf("Edge/")>=0,
        isChrome = !isEdge &&  navigator.userAgent.indexOf("Chrome/")>=0,
        isSafari = !isEdge && !isChrome && navigator.userAgent.indexOf("Safari/")>=0
        ;
    var popups = [];
    function enableTargetPopups(ctx) {
        var $ctx = !!ctx ? $(ctx.parentNode || document) : $(ctx || document);
        $ctx.find('button[data-popup]').click(function (event) {
            if(isFirefox){
                return;
            }
            event.preventDefault();
            var url = this.dataset['popup'];
            var wor = popups[url];
            if(wor == null || wor.closed) {
                wor = window.open(url, url);
                popups[url]=wor;
            }

            wor.focus();
        });
    }
    return enableTargetPopups;
})();
