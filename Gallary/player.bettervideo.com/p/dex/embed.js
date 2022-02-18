(function(window, document, undefined) {

    function queryStringToJSON(pairs) {
        pairs = (pairs || location.search.slice(1)).split('&');

        var result = {};
        pairs.forEach(function(pair) {
            pair = pair.split('=');
            result[pair[0]] = decodeURIComponent(pair[1] || '');
        });

        return JSON.parse(JSON.stringify(result));
    }

    function loadScripts() {
        var videoJsScript = document.querySelector('script[src*="//player.bettervideo.com/player/video.js"]');

        if (!videoJsScript) {
            var playerScript = document.createElement('script');
            playerScript.src = "//player.bettervideo.com/player/video.js";
            playerScript.onload = onVideoJSLoad;

            headEl.appendChild(playerScript);
        }

        checkScriptLoadProgress();
    }

    function onVideoJSLoad() {
        var pluginScript = document.createElement('script');
        //pluginScript.src = "//html5player.test/code/video-js-plugins/dist/plugins/bvPlugins.js";
        //pluginScript.src = "//player.bettervideo.com/dev/plugins/bvPlugins.js";
        pluginScript.src = "//player.bettervideo.com/plugins/bvPlugins.js";
        headEl.appendChild(pluginScript);
    }

    function injectPlaylistHandler() {
        videojs.Playlist.prototype.loadItem = function(item) {

            var index;
            if (typeof item === "object" && item.index !== undefined) {
                index = item.index;
            } else {
                index = item;
            }
            this.currentItem = index;

            this.playlistSlider.select(this.currentItem, !this.userInteraction());

            console.log("LOADING PLAYLIST ITEM", this.items_[index].options());


            var quality = Object.keys(this.items_[index].options().media);
            var defaultQuality = quality[0];
            var qualitySorted = [];
            var pRegEx = /(\d+?)p/i;
            var dimensionRegEx = /\d+?x(\d+)/i;
            var has360p = false;
            if (quality.length > 1) {
                for (var x = 0; x < quality.length; x++) {
                    var pResult = pRegEx.exec(quality[x]);
                    var dimensionResult = dimensionRegEx.exec(quality[x]);
                    if (pResult && pResult[1]) {
                        qualitySorted.push({
                            'size': parseInt(pResult[1]),
                            'key': quality[x]
                        });
                    } else if (dimensionResult && dimensionResult[1]) {
                        qualitySorted.push({
                            'size': parseInt(dimensionResult[1]),
                            'key': quality[x]
                        });
                    }
                    if (qualitySorted[qualitySorted.length - 1].size === 360) {
                        has360p = quality[x];
                    }
                    qualitySorted = qualitySorted.sort(function(a, b) {
                        return a.size - b.size;
                    }).reverse();
                }

                defaultQuality = has360p ? has360p : qualitySorted[0].key;

                if (qualitySorted && this.player_.qualityControl) {
                    this.player_.qualityControl({
                        defaultQuality: defaultQuality,
                        sources: this.items_[index].options().media
                    });
                }
            } else {
                defaultQuality = Object.keys(this.items_[index].options().media)[0];
            }
            // Load
            this.player().src(this.items_[index].options().media[defaultQuality].source);
            var poster = this.items_[index].options().media[defaultQuality].poster;
            if (poster) {
                // set the custom element
                // this.player().posterImage.el().style.backgroundImage = 'url('+this.items_[index].options().poster+')';
                // set the poster on the video element
                if (this.player().tech.el().tagName === "VIDEO") {
                    this.player().tech.el().poster = poster;
                }
                // future proof
                this.player().poster(poster);
                this.player().posterImage.show();
            }


            // Set the title
            if (this.items_[index].options().title) {
                this.playlistTitle.setTitle(this.items_[index].options().title);
            }

            this.player().unloadTextTracks();

            // Setup any text tracks if available
            if (this.items_[index].options().captions) {
                this.player().addTextTrack('captions', 'Subtitles', 'en', {
                    src: this.items_[index].options().captions
                });
            }
            if (this.items_[index].options().subtitles) {
                this.player().addTextTrack('subtitles', 'Subtitles', 'en', {
                    src: this.items_[index].options().subtitles
                });
            } else {
                var vidCode = /\/(\d{1,4}\..*?)\./.exec(this.items_[index].options().media[defaultQuality].source[0].src)[1];
                console.log(item, this.items_[index].options().media[defaultQuality].source[0].src, /\/(\d{1,4}\..*?)\./.exec(this.items_[index].options().media[defaultQuality].source[0].src), '//videos.dexmedia.com/VTT/' + vidCode + '.vtt')
                if (vidCode) {
                    var src = '//videos.dexmedia.com/VTT/' + vidCode + '.vtt';
                    videojs.get(src, vjs.bind(this, function() {
                        this.player().addTextTrack('subtitles', 'English', 'en', {
                            src: src
                        });
                    }), vjs.bind(this, function() {}));

                }
            }

            // Hide progress control for non-progress techs
            if (this.items_[index].options().type.indexOf('image') > -1 && !this.options_.autoAdvance) {
                this.player().controlBar.progressControl.hide();
                this.player().controlBar.playToggle.hide();
            } else {
                this.player().controlBar.progressControl.show();
                this.player().controlBar.playToggle.show();
            }

            //this.trigger({type: 'playlistload', item: this.items_[index]});


        };
    }

    function checkScriptLoadProgress() {

        // This will all be dynamic in the very near future!
        setTimeout(function() {
            if (window.videojs && window.videojs.Player && window.videojs.Player.prototype.bvThemeLoader) {

                injectPlaylistHandler();

                videojs('mds_video_player_' + playerId, {
                    techOrder: ["html5", "flash", "image", "virtualTour"],
                    plugins: pluginsObj
                }, function() {
                    // console.log( "Player Ready" );
                    // Load first/only source
                    if (source) {
                        var player = this;
                        player.src(source);
                    }

                    if (vttSrc) {
                        videojs.get(vttSrc, vjs.bind(this, function() {
                            this.player().addTextTrack('subtitles', 'English', 'en', {
                                src: vttSrc
                            });
                        }), vjs.bind(this, function() {}));
                    }

                });
            } else {
                checkScriptLoadProgress();
            }
        }, 10);
    }

    var headEl = document.getElementsByTagName('head')[0];

    var currentScript = document.currentScript || [].slice.call(document.querySelectorAll('script[src*="//player.bettervideo.com/p/"]')).pop();
    //console.log( 'CURRENT SCRIPT', currentScript.src, document.querySelectorAll('script[src*="//player.bettervideo.com/"]') );
    var parentEl = currentScript.parentNode;

    var queryString = currentScript.src.replace(/^[^\?]+\??/, '');
    var options = queryStringToJSON(queryString);
    var theme = 'bv-' + (options.theme || 'medium-grey') + '-skin';

    var dummyEl = document.createElement('div');
    var playerId = Date.now();
    var pluginsObj = {
        socialOverlay: {
            onScreen: true
        },
        showPosterAtEnd: {}
    };

    if (options.social === false || (options.social && options.social.toLowerCase() === 'false')) {
        delete pluginsObj.socialOverlay;
    }

    if (window.self === window.top) {
        pluginsObj.dimTheLights = {};
    }

    var source;
    var vttSrc;

    if (options.vtt) {
        vttSrc = options.vtt;
    } else {
        vttSrc = '//videos.dexmedia.com/VTT/950.' + options.video + '.vtt';
    }

    if (options.video) {
        options.video = options.video.replace(' ', '');
        dummyEl.innerHTML = ['<div class="video-js-responsive-container vjs-hd">',
            '   <video id="mds_video_player_' + playerId + '" class="video-js ' + theme + '" controls poster="//videos.dexmedia.com/JPG640x360/950.' + options.video + '.jpg" preload="metadata">',
            '       <source src="//videos.dexmedia.com/MP4640x360/950.' + options.video + '.mp4" type="video/mp4"></source>',
            //'       <track src="//videos.dexmedia.com/VTT/950.' + options.video + '.vtt" label="English" kind="subtitles" srclang="en" />',
            '   </video>',
            '</div>'
        ].join('\n');

    } else if (options.listing || options.feed) {
        // We don't set the source or poster of feed players as the plugin will overwrite it when it loads.
        dummyEl.innerHTML = ['<div class="video-js-responsive-container vjs-hd">',
            '   <video id="mds_video_player_' + playerId + '" class="video-js ' + theme + '" controls preload="metadata">',
            '   </video>',
            '</div>'
        ].join('\n');
        var feed = (options.feed || options.listing).replace(' ', '');
        pluginsObj.playlist = {
            autoAdvance: true,
            // url: '//player.bettervideo.com/feeds/dex/listing.js?listing='+ ( options.feed || options.listing )
            url: '//videos.dexmedia.com/Playlist/playlist_950_' + feed + '.json'
        };
    } else if (options.image) {

    } else if (options.panoramic) {
        options.panoramic = options.panoramic.replace(' ', '');
        dummyEl.innerHTML = ['<div class="video-js-responsive-container vjs-hd">',
            '   <video id="mds_video_player_' + playerId + '" class="video-js ' + theme + '" controls preload="metadata">',
            //'       <source src="//player.bettervideo.com/dev/tests/dex/pano/99.' + options.panoramic + '.jpg" type="image/vtour"></source>',
            '   </video>',
            '</div>'
        ].join('\n');

        source = {
            src: '//player.bettervideo.com/dev/tests/dex/pano/950.' + options.panoramic + '.jpg',
            type: 'vtour/jpg'
        };
    }

    var playerContainer = dummyEl.childNodes[0];


    loadScripts();


    parentEl.appendChild(playerContainer);

})(window, window.document, undefined);