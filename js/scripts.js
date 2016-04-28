$("document").ready(function () {
    getJSONData();
});

function getJSONData() {

    var flickrAPI = "http://api.tumblr.com/v2/blog/chkry.tumblr.com/posts/photo?callback=?";

    $.getJSON(flickrAPI, {
        api_key: 'ivofJBCOeNzCg3quY2l7PxnMm0w1bCQb7e3X84erImRG9stL1X'
        , tags: "chkry",
        limit:30
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
