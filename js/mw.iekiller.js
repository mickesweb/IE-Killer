/*
 * @verson : 1.0
 * @contact : via mickesweb.se
 * @author :  Mikael Andersson <mikael@mickesweb.se>
 * 
 * Last Updated: 2011-11-19
 * INFO: Function to remove the old internet explorer.
 * NOTE: Need jquery.1.4.2 or older
*/

$(document).ready(function() {
    function killOldIE() {
        if(navigator.appName == "Microsoft Internet Explorer") {
            if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { 
                var ieVersion=new Number(RegExp.$1);
                if(ieVersion <= 8) {   
                    $("#shadowlayer").removeClass('hidden');
                    $("#closetopbox").removeClass('hidden');
                    $("#oldie").removeClass('hidden');
                }
            }
        }
    }

    killOldIE();
});

function closeWindow() {
    $("#shadowlayer").addClass('hidden');
    $("#closetopbox").addClass('hidden');
    $("#oldie").addClass('hidden');
}
