$(document).ready(function() {
    
    /*$('.btnvideo').click(function(e) {
        e.preventDefault();
        $('iframe').attr("src", $(this).attr("data-video"));
    });*/
    var id = ""
    
    $('[id^=carousel-selector-]').click(function() {
        $("#overlay").show("slow");
        $('#overlay').css({
            'width': $(window).innerWidth(),
            'max-height': $(window).innerHeight(),
        });
        $('#overlay #carousel-selector-' + id).removeClass('selected');
        var id_selector = $(this).attr("id");
        try {
            id = /-(\d+)$/.exec(id_selector)[1];
            $('#video-carousel').carousel(parseInt(id));
            console.log(id_selector, id);
            
            
        }catch(e) {
            console.log('Regex failed!', e);
        }
        $('#overlay #carousel-selector-' + id).addClass('selected');
    });
    
    
  
    $(".closebtn").click(function(){
        $("#overlay").hide("slow");
    })
    
    var finalEvent = (function () {
        var timers = {};
        return function (callback, ms, uniqueId) {
            if (!uniqueId) {
                uniqueId = "Chamado duas vezes sem id unico";
            
            }
            if (timers[uniqueId]) {
                clearTimeout(timers[uniqueId]);
                console.log(uniqueId);
            }
            timers[uniqueId] = setTimeout(callback, ms);
        };
    })();
    
    
    
    
    $(function() {
    var $overlay = $("#overlay"),
        $window = $(window);
    $window.resize(function () {
            finalEvent(function () {
                $overlay.css({
                    'width': $window.innerWidth(),
                    'max-height': $window.innerHeight(),
                });
            }, 5, "um id unico");
        });
    });
});

