window.onload = function() {
    var image = new Image();
    var timeout = false;

    image.src = "https://starlightskins.lunareclipse.studio/skin-render/default/farfouze/bust";
    image.onload = function() {
        if (!timeout) {
            var loader = document.getElementById("loader");
            loader.style.opacity = 0;
            setTimeout(function() {
                loader.style.display = "none";
            }, 500);

            var content = document.getElementById("content");
            content.style.opacity = 0;
            content.style.display = "block";
            setTimeout(function() {
                content.style.opacity = 1;
            }, 500);
        }
    };

    setTimeout(function() {
        timeout = true;
        var loader = document.getElementById("loader");
        loader.style.opacity = 0;
        setTimeout(function() {
            loader.style.display = "none";
        }, 500);

        var content = document.getElementById("content");
        content.style.opacity = 1;
        content.style.display = "block";
    }, 5000);

    image.onerror = function() {
        timeout = true;
        image.src = "";
    };
};
