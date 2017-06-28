(function() {
    'use strict';

    angular
		.module('disinfectants')
		.factory('anchorScrollDirective', anchorScrollDirective);

    function anchorScrollDirective($anchorScroll) {
        
        function scrollTo(id) {
            $anchorScroll(id);
        }
        
        function setYOffset(offset) {
            $anchorScroll.yOffset = offset;
        }

        function getYOffset() {
            return $anchorScroll.yOffset;
        }
        
        return {
            scrollTo: scrollTo,
            setYOffset: setYOffset,
            getYOffset: getYOffset
        }
    }
})();