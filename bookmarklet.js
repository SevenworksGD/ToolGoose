function include(file) {
  
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  
  document.getElementsByTagName('head').item(0).appendChild(script);
  
}
(function () {
        function getScript(url, success) {
            var script = document.createElement('script');
            script.src = url;

            var head = document.getElementsByTagName('head')[0];
            var completed = false;
            script.onload = script.onreadystatechange = function () {
                if (!completed && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                    completed = true;
                    success();
                    script.onload = script.onreadystatechange = null;
                    head.removeChild(script);
                }
            };
            head.appendChild(script);
        }

        getScript("https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js", function () {
            getScript("https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.js", function () {
                var myStylesLocation = "https://code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css";
                $('<link rel="stylesheet" type="text/css" href="'+myStylesLocation+'" >').appendTo("head");


                var myMessage = "<p>Colors:</p><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/color/greyscale.js`)'>Greyscale</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/color/invert.js`)'>Invert</button><p>Cursors:</p><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/cursors/huge-cursor.js`)'>Huge Cursor</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/cursors/spinning-cursor.js`)'>Spinning Cursor</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/cursors/webpage-cursor.js`)'>Webpage Avoider 9000</button><p>Forms:</p><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/forms/form-get.js`)'>POST to GET Converter</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/forms/view-passwords.js`)'>View Passwords</button><p>Funny:</p><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/funny/wikipedia.js`)'>Wikipedia</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/funny/weird-pos.js`)'>Weird Positions</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/funny/scream.js`)'>Scream</button><p>Links:</p><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/links/hide-visited-links.js`)'>Hide Visited Links</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/links/show-links.js`)'>Show Links</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/links/show-links-full.js`)'>Show Full Links</button><p>Misc:</p><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/misc/edit-page.js`)'>Edit Webpage</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/misc/enable-right-click.js`)'>Enable Right Click</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/misc/transfer-cookies.js`)'>Transfer Cookies</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/misc/view-cookies.js`)'>View Cookies</button><p>Search:</p><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/search/google.js`)'>Google Highlighted Words</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/search/search-all-pages.js`)'>Search All Webpages of Current Website</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/search/wayback-machine.js`)'>Wayback Machine</button><p>Text:</p><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/text/highlight.js`)'>Highlight Text</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/text/sort.js`)'>Sort Table</button><p>Themes:</p><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/themes/gameboy.js`)'>Gameboy</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/themes/neon.js`)'>Neon + Glow</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/themes/rainbow.js`)'>Rainbow</button><p>Web Development</p><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/webdev/env.js`)'>JSEnv</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/webdev/shell.js`)'>Shell</button><p>Zapper</p><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/zap/zap-cookies.js`)'>Cookies</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/zap/zap-plugins.js`)'>Plugins</button><button onclick='include(`https://toolgoose-test.oqteam.repl.co/scripts/zap/zap-timers.js`)'>Timers</button>";


                $("<div id='dialogcolor-color'; title='ToolGoose'; style='border:2px solid black; background-color:grey; font-size:80%'; <p>" + myMessage + "</p></div>").appendTo("body");
                $( "#dialogcolor-color" ).dialog({
                  height: 400,
                  width: 600
                });
            });
        });
})();
