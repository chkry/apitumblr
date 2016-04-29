$("document").ready(function () {
    getJSONData();
});

function getJSONData() {

    var tumblrAPI = "http://api.tumblr.com/v2/blog/chkry.tumblr.com/posts/photo?callback=?";

    $.getJSON(tumblrAPI, {
        api_key: 'ivofJBCOeNzCg3quY2l7PxnMm0w1bCQb7e3X84erImRG9stL1X'
        , tags: "chkry",
        limit:20
    }, successFn);

}



function successFn(result) {
    console.log("Success function initated");
    console.log(result);
    $.each(result.response.posts, function (i, item) {
//            console.log(result.response.posts);
            $.each(item.photos, function (j, item1) {
                    var cdn = item1.original_size.url;
                    $("<img>").attr("src",cdn).appendTo("#tumblr");
//                console.log(item1.original_size.url);
                });
//                if (i === 50) {
//                        return false;
//                    }
            });
    }














// For QUotes

$("document").ready(function () {
    getJSONDataQuote();
});

function getJSONDataQuote() {

    var tumblrAPI = "https://api.tumblr.com/v2/blog/chkry.tumblr.com/posts/quote?callback=?";

    $.getJSON(tumblrAPI, {
        api_key: 'ivofJBCOeNzCg3quY2l7PxnMm0w1bCQb7e3X84erImRG9stL1X',
        type:"quote",
        limit:1
    }, successFn1);

}



function successFn1(result) {
    console.log("Success function initated");
    console.log(result);
    $.each(result.response.posts, function (i, item) {
//            console.log(result.response.posts);
//            $.each(item.text, function (j, item1) {
                    var quote = item.text;
                    console.log(quote);
//                    $("<img>").attr("src",cdn).appendTo("#tumblr");
        $("#tumblrQuote").html(quote);
//                console.log(item1.original_size.url);
//                });
//                if (i === 50) {
//                        return false;
//                    }
            });
    }



//Toggle Class  Pending


$("#tumblrQuote").mouseover(function(){
    $("body").toggleClass("bg",false);
    $("body").toggleClass("bgt",true);
});

$("#tumblrQuote").mouseout(function(){
    $("body").toggleClass("bgt",false);
    $("body").toggleClass("bg",true);
});
