/*! bvPlugins - v1.5.3 - 2020-12-30 */
if (vjs.ImageFullscreenNext = vjs.Button.extend({
        init: function(player, options) {
            vjs.Button.call(this, player, options);
        }
    }), vjs.ImageFullscreenNext.prototype.buttonText = "Next Image", vjs.ImageFullscreenNext.prototype.buildCSSClass = function() {
        return "icon-step-forward " + vjs.Button.prototype.buildCSSClass.call(this);
    }, vjs.ImageFullscreenNext.prototype.onClick = function() {}, vjs.ImageFullscreenPrevious = vjs.Button.extend({
        init: function(player, options) {
            vjs.Button.call(this, player, options);
        }
    }), vjs.ImageFullscreenPrevious.prototype.buttonText = "Previous Image", vjs.ImageFullscreenPrevious.prototype.buildCSSClass = function() {
        return "icon-step-forward " + vjs.Button.prototype.buildCSSClass.call(this);
    }, vjs.ImageFullscreenPrevious.prototype.onClick = function() {}, videojs.ImageFullscreenModal = videojs.Component.extend({
        init: function(player, options) {
            videojs.Component.call(this, player, options);
        }
    }), videojs.ImageFullscreenModal.prototype.options_ = {
        children: {
            imageFullscreenNext: {},
            imageFullscreenPrevious: {}
        }
    }, videojs.ImageFullscreenModal.prototype.createEl = function(type, props) {
        var el = videojs.Component.createEl.call(this, "div", {
                className: "vjs-image-fullscreen-modal"
            }),
            contentEl = videojs.createEl("div", {
                className: "vjs-image-fullscreen-modal-inner"
            }),
            overlayEl = videojs.createEl("div", {
                className: "vjs-image-fullscreen-overlay"
            });
        return this.contentEl_ = contentEl, this.overlayEl_ = overlayEl, el.appendChild(contentEl),
            el;
    }, videojs.ImageFullscreenModal.prototype.overlayEl = function() {
        return this.overlayEl_;
    }, videojs.ImageFullscreen = videojs.Component.extend({
        init: function(player, options) {
            videojs.Component.call(this, player, options);
        }
    }), videojs.ImageFullscreen.prototype.options_ = {
        children: {
            imageFullscreenOverlay: {},
            imageFullscreenModal: {}
        }
    }, vjs.Image = vjs.MediaTechController.extend({
        init: function(player, options, ready) {
            this.featuresVolumeControl = vjs.Image.canControlVolume(), this.movingMediaElementInDOM = !0,
                this.featuresPlaybackRate = !1, this.featuresFullscreenResize = !1, this.featuresProgressEvents = !0,
                vjs.MediaTechController.call(this, player, options, ready), this.setupTriggers();
            var source = options.source;
            source && this.currentSrc() === source.src ? player.trigger("loadstart") : source && (this.image_.src = source.src,
                    player.trigger("waiting")), this.triggerReady(), this.videoControls = this.player_.controlBar.children(),
                this.hideVideoControls(), this.setupLoad(), videojs.addClass(player.el(), "vjs-image-tech");
        }
    }), vjs.Image.prototype.controlsToHide = ["currentTimeDisplay", "timeDivider", "durationDisplay", "remainingTimeDisplay", "liveDisplay", "fullscreenToggle", "volumeControl", "muteToggle", "volumeMenuButton", "playbackRateMenuButton", "captionsButton", "chaptersButton", "subtitlesButton", "muteMenuButton", "currentTimeToggle"],
    vjs.Image.prototype.hiddenControls = [], vjs.Image.prototype.hideVideoControls = function() {
        for (var x = 0; x < this.videoControls.length; x++)
            for (var y = 0; y < this.controlsToHide.length; y++) this.videoControls[x].name() == this.controlsToHide[y] && "none" !== videojs.getComputedDimension(this.videoControls[x].el(), "display") && (this.videoControls[x].hide(),
                this.hiddenControls.push(this.videoControls[x])), "playToggle" == this.videoControls[x].name() && this.playlist && this.playlist.options_ && !this.playlist.options().autoAdvance && (this.videoControls[x].hide(),
                this.hiddenControls.push(this.videoControls[x]));
    }, vjs.Image.prototype.showVideoControls = function() {
        for (; this.hiddenControls.length;) this.hiddenControls.pop().show();
    }, vjs.Image.prototype.dispose = function() {
        vjs.MediaTechController.prototype.dispose.call(this), clearInterval(this.timer_),
            this.showVideoControls(), videojs.removeClass(this.player().el(), "vjs-image-tech");
    }, vjs.Image.prototype.createEl = function() {
        var el, player;
        return player = this.player_, el = vjs.createEl("div", {
                className: "vjs-tech vjs-image-playback"
            }), this.image_ = vjs.createEl("img"), vjs.insertFirst(this.image_, el), vjs.insertFirst(el, player.el()),
            el;
    }, vjs.Image.prototype.setupTriggers = function() {
        for (var i = vjs.Image.Events.length - 1; i >= 0; i--) vjs.on(this.image_, vjs.Image.Events[i], vjs.bind(this.player_, this.eventHandler));
    }, vjs.Image.prototype.eventHandler = function(e) {
        videojs.trigger(this.el_, e), e.stopPropagation();
    }, vjs.Image.prototype.setupLoad = function() {
        this.wasPlaying_ = !1, this.playing_ = !1, this.autoplay_ = !1, this.loaded_ = !1,
            this.timer_ && clearInterval(this.timer_), this.timer_ = setInterval(videojs.bind(this, this.timeUpdate_), 100),
            this.currentTime_ = 0, this.duration_ = 5, this.hide(), videojs.on(this.image_, "load", videojs.bind(this, this.triggerLoadEvents));
    }, vjs.Image.prototype.triggerLoadEvents = function() {
        this.loaded_ = !0, this.show(), videojs.trigger(this.el_, "durationchange"), videojs.trigger(this.el_, "progress"),
            videojs.trigger(this.el_, "loadedalladata"), videojs.trigger(this.el_, "timeupdate"),
            videojs.trigger(this.el_, "playing"), this.autoplay_ && this.play();
    }, vjs.Image.prototype.play = function() {
        this.duration_ === this.currentTime_ && this.setCurrentTime(0), this.playing_ = !0;
    }, vjs.Image.prototype.pause = function() {
        this.playing_ = !1, this.wasPlaying_ = !1, videojs.trigger(this.el_, "pause");
    }, vjs.Image.prototype.paused = function() {
        return !this.playing_;
    }, vjs.Image.prototype.currentTime = function() {
        return this.currentTime_;
    }, vjs.Image.prototype.setCurrentTime = function(seconds) {
        this.currentTime_ = seconds;
    }, vjs.Image.prototype.timeUpdate_ = function() {
        this.playing_ && this.loaded_ ? this.currentTime_ < this.duration_ - .1 ? (this.wasPlaying_ || (videojs.trigger(this.el_, "play"),
            this.wasPlaying_ = !0), this.currentTime_ += .1, videojs.trigger(this.el_, "timeupdate")) : (this.currentTime_ = this.duration_,
            this.ended_ = !0, this.playing_ = !1, this.wasPlaying_ = !1, videojs.trigger(this.el_, "timeupdate"),
            videojs.trigger(this.el_, "ended")) : this.wasPlaying_ = !1;
    }, vjs.Image.prototype.duration = function() {
        return this.duration_;
    }, vjs.Image.prototype.buffered = function() {
        return vjs.createTimeRange(0, this.duration_);
    }, vjs.Image.prototype.volume = function() {
        return 1;
    }, vjs.Image.prototype.setVolume = function(percentAsDecimal) {}, vjs.Image.prototype.muted = function() {
        return !1;
    }, vjs.Image.prototype.setMuted = function(muted) {}, vjs.Image.prototype.width = function() {
        return this.el_.offsetWidth;
    }, vjs.Image.prototype.height = function() {
        return this.el_.offsetHeight;
    }, vjs.Image.prototype.supportsFullScreen = function() {
        return "function" != typeof this.el_.webkitEnterFullScreen || !/Android/.test(vjs.USER_AGENT) && /Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT) ? !1 : !0;
    }, vjs.Image.prototype.enterFullScreen = function() {
        var video = this.el_;
        video.paused && video.networkState <= video.HAVE_METADATA ? (this.el_.play(), setTimeout(function() {
            video.pause(), video.webkitEnterFullScreen();
        }, 0)) : video.webkitEnterFullScreen();
    }, vjs.Image.prototype.exitFullScreen = function() {
        this.el_.webkitExitFullScreen();
    }, vjs.Image.prototype.src = function(src) {
        console.log("Image Src", src), this.setupLoad(), this.image_.src === src ? this.triggerLoadEvents() : this.image_.src = src;
    }, vjs.Image.prototype.load = function() {}, vjs.Image.prototype.currentSrc = function() {
        return this.image_.src;
    }, vjs.Image.prototype.poster = function() {
        return "";
    }, vjs.Image.prototype.setPoster = function(val) {}, vjs.Image.prototype.preload = function() {},
    vjs.Image.prototype.setPreload = function(val) {}, vjs.Image.prototype.autoplay = function() {
        return this.autoplay_;
    }, vjs.Image.prototype.setAutoplay = function(val) {
        this.autoplay_ = val;
    }, vjs.Image.prototype.controls = function() {
        return !1;
    }, vjs.Image.prototype.setControls = function(val) {}, vjs.Image.prototype.loop = function() {
        return !0;
    }, vjs.Image.prototype.setLoop = function(val) {}, vjs.Image.prototype.error = function() {
        return this.image_.error;
    }, vjs.Image.prototype.seeking = function() {
        return !1;
    }, vjs.Image.prototype.ended = function() {
        return this.ended_;
    }, vjs.Image.prototype.defaultMuted = function() {
        return !1;
    }, vjs.Image.isSupported = function() {
        return !0;
    }, vjs.Image.canPlaySource = function(srcObj) {
        var type;
        return srcObj.type ? (type = srcObj.type.replace(/;.*/, "").toLowerCase(), type in vjs.Image.formats ? "maybe" : void 0) : "";
    }, vjs.Image.formats = {
        "image/jpg": "JPG",
        "image/jpeg": "JPG",
        "image/gif": "GIF",
        "image/png": "PNG",
        "image/bmp": "BMP"
    }, vjs.Image.canControlVolume = function() {
        return !1;
    }, vjs.Image.Events = "load,error,play,pause".split(","), vjs.Image.disposeMediaElement = function(el) {
        if (console.log("DISPOSE ELEMENT: ", el), el) {
            for (el.player = null, el.parentNode && el.parentNode.removeChild(el); el.hasChildNodes();) el.removeChild(el.firstChild);
            el.removeAttribute("src"), "function" == typeof el.load && el.load();
        }
    }, vjs.IS_OLD_ANDROID && (document.createElement("video").constructor.prototype.canPlayType = function(type) {
        return type && -1 != type.toLowerCase().indexOf("video/mp4") ? "maybe" : "";
    }), videojs.VirtualTourControls = videojs.Component.extend({
        init: function(player, options) {
            videojs.Component.call(this, player, options);
        }
    }), vjs.VirtualTourControls.prototype.createEl = function(props) {
        return console.log(videojs), videojs.Component.prototype.createEl.call(this, "div", vjs.obj.merge({
            className: this.buildCSSClass()
        }, props));
    }, vjs.VirtualTourControls.prototype.buildCSSClass = function() {
        return "vjs-virtual-tour-control-bar";
    }, videojs.VirtualTourControls.prototype.options_ = {
        children: {
            virtualTourZoomIn: {},
            virtualTourZoomOut: {},
            virtualTourPanLeft: {},
            virtualTourPanRight: {},
            virtualTourTiltUp: {},
            virtualTourTiltDown: {}
        }
    }, videojs.ButtonHold = videojs.Button.extend({
        init: function(player, options) {
            videojs.Button.call(this, player, options), this.on("mousedown", videojs.bind(this, this.onMouseDown));
        }
    }), vjs.ButtonHold.prototype.onMouseDown = function() {
        videojs.one(document.body, "mouseup", videojs.bind(this, this.onMouseUp)), this.player_.techCall("userInteraction", !0),
            this.startHoldAction();
    }, vjs.ButtonHold.prototype.onMouseUp = function() {
        this.endHoldAction();
    }, vjs.ButtonHold.prototype.holdInterval = null, vjs.ButtonHold.prototype.startHoldAction = function() {
        clearInterval(this.holdInterval), this.holdInterval = setInterval(videojs.bind(this, this.holdAction), 10);
    }, vjs.ButtonHold.prototype.endHoldAction = function() {
        clearInterval(this.holdInterval);
    }, vjs.ButtonHold.prototype.holdAction = function() {}, videojs.VirtualTourZoomIn = videojs.ButtonHold.extend({
        init: function(player, options) {
            videojs.ButtonHold.call(this, player, options);
        }
    }), vjs.VirtualTourZoomIn.prototype.buttonText = "Zoom In", vjs.VirtualTourZoomIn.prototype.buildCSSClass = function() {
        return "vjs-camera-control vjs-vtour-zoom-in bv-zoom-in " + vjs.Button.prototype.buildCSSClass.call(this);
    }, vjs.VirtualTourZoomIn.prototype.holdAction = function() {
        this.player_.techCall("zoom", .005);
    }, videojs.VirtualTourZoomOut = videojs.ButtonHold.extend({
        init: function(player, options) {
            videojs.ButtonHold.call(this, player, options);
        }
    }), vjs.VirtualTourZoomOut.prototype.buttonText = "Zoom Out", vjs.VirtualTourZoomOut.prototype.buildCSSClass = function() {
        return "vjs-camera-control vjs-vtour-zoom-out bv-zoom-out " + vjs.Button.prototype.buildCSSClass.call(this);
    }, vjs.VirtualTourZoomOut.prototype.holdAction = function() {
        this.player_.techCall("zoom", -.005);
    }, videojs.VirtualTourPanLeft = videojs.ButtonHold.extend({
        init: function(player, options) {
            videojs.ButtonHold.call(this, player, options);
        }
    }), vjs.VirtualTourPanLeft.prototype.buttonText = "Pan Left", vjs.VirtualTourPanLeft.prototype.buildCSSClass = function() {
        return "vjs-camera-control vjs-vtour-pan-left bv-left-open " + vjs.Button.prototype.buildCSSClass.call(this);
    }, vjs.VirtualTourPanLeft.prototype.holdAction = function() {
        this.player_.techCall("pan", 1);
    }, videojs.VirtualTourPanRight = videojs.ButtonHold.extend({
        init: function(player, options) {
            videojs.ButtonHold.call(this, player, options);
        }
    }), vjs.VirtualTourPanRight.prototype.buttonText = "Pan Right", vjs.VirtualTourPanRight.prototype.buildCSSClass = function() {
        return "vjs-camera-control vjs-vtour-pan-right bv-right-open " + vjs.Button.prototype.buildCSSClass.call(this);
    }, vjs.VirtualTourPanRight.prototype.holdAction = function() {
        this.player_.techCall("pan", -1);
    }, videojs.VirtualTourTiltUp = videojs.ButtonHold.extend({
        init: function(player, options) {
            videojs.ButtonHold.call(this, player, options);
        }
    }), vjs.VirtualTourTiltUp.prototype.buttonText = "Tilt Up", vjs.VirtualTourTiltUp.prototype.buildCSSClass = function() {
        return "vjs-camera-control vjs-vtour-tilt-up bv-up-open " + vjs.Button.prototype.buildCSSClass.call(this);
    }, vjs.VirtualTourTiltUp.prototype.holdAction = function() {
        this.player_.techCall("tilt", 1);
    }, videojs.VirtualTourTiltDown = videojs.ButtonHold.extend({
        init: function(player, options) {
            videojs.ButtonHold.call(this, player, options);
        }
    }), vjs.VirtualTourTiltDown.prototype.buttonText = "Tilt Down", vjs.VirtualTourTiltDown.prototype.buildCSSClass = function() {
        return "vjs-camera-control vjs-vtour-tilt-down bv-down-open " + vjs.Button.prototype.buildCSSClass.call(this);
    }, vjs.VirtualTourTiltDown.prototype.holdAction = function() {
        this.player_.techCall("tilt", -1);
    }, vjs.VirtualTour = vjs.MediaTechController.extend({
        init: function(player, options, ready) {
            this.featuresVolumeControl = vjs.VirtualTour.canControlVolume(), this.featuresPlaybackRate = !1,
                this.movingMediaElementInDOM = !0, this.featuresFullscreenResize = !1, this.featuresProgressEvents = !0,
                vjs.MediaTechController.call(this, player, options, ready), this.setupTriggers();
            var source = options.source;
            source && this.currentSrc() === source.src ? player.trigger("loadstart") : source && (this.src(source.src),
                    player.trigger("waiting")), this.triggerReady(), this.videoControls = this.player_.controlBar.children(),
                this.hideVideoControls(), this.virtualTourControls_ || (this.virtualTourControls_ = player.addChild("virtualTourControls")),
                videojs.addClass(this.virtualTourControls_.virtualTourZoomOut.el(), "disabled"),
                videojs.addClass(this.virtualTourControls_.virtualTourTiltDown.el(), "disabled"),
                videojs.addClass(this.virtualTourControls_.virtualTourTiltUp.el(), "disabled"),
                this.setupLoad(), videojs.addClass(player.el(), "vjs-vtour-tech"), videojs.on(player.el(), "resize", videojs.bind(this, this.setupDimensions_));
        }
    }), vjs.VirtualTour.prototype.controlsToHide = ["currentTimeDisplay", "timeDivider", "durationDisplay", "remainingTimeDisplay", "liveDisplay", "muteToggle", "volumeMenuButton", "playbackRateMenuButton", "captionsButton", "chaptersButton", "subtitlesButton", "muteMenuButton", "currentTimeToggle"],
    vjs.VirtualTour.prototype.hiddenControls = [], vjs.VirtualTour.prototype.hideVideoControls = function() {
        for (var x = 0; x < this.videoControls.length; x++)
            for (var y = 0; y < this.controlsToHide.length; y++) this.videoControls[x].name() == this.controlsToHide[y] && "none" !== videojs.getComputedDimension(this.videoControls[x].el(), "display") && (this.videoControls[x].hide(),
                this.hiddenControls.push(this.videoControls[x])), "playToggle" == this.videoControls[x].name() && this.playlist && this.playlist.options_ && !this.playlist.options().autoAdvance && (this.videoControls[x].hide(),
                this.hiddenControls.push(this.videoControls[x]));
    }, vjs.VirtualTour.prototype.showVideoControls = function() {
        for (; this.hiddenControls.length;) this.hiddenControls.pop().show();
    }, vjs.VirtualTour.prototype.dispose = function() {
        vjs.MediaTechController.prototype.dispose.call(this), clearInterval(this.timer_),
            this.showVideoControls(), videojs.removeClass(this.player().el(), "vjs-vtour-tech"),
            this.player_.el().removeChild(this.virtualTourControls_.el());
    }, vjs.VirtualTour.prototype.createEl = function() {
        var el, player;
        return player = this.player_, el = vjs.createEl("div", {
                className: "vjs-tech vjs-vtour-playback"
            }), this.pane_ = vjs.createEl("div", {
                className: "vjs-vtour-pane"
            }), this.left_ = vjs.createEl("img"), this.center_ = vjs.createEl("img"), this.right_ = vjs.createEl("img"),
            this.left_.ondragstart = function() {
                return !1;
            }, this.center_.ondragstart = function() {
                return !1;
            }, this.right_.ondragstart = function() {
                return !1;
            }, vjs.insertFirst(this.right_, this.pane_), vjs.insertFirst(this.center_, this.pane_),
            vjs.insertFirst(this.left_, this.pane_), vjs.insertFirst(this.pane_, el), vjs.insertFirst(el, player.el()),
            el;
    }, vjs.VirtualTour.prototype.setupLoad = function() {
        this.wasPlaying_ = !1, this.playing_ = !1, this.autoplay_ = !1, this.loaded_ = !1,
            this.timer_ && clearInterval(this.timer_), this.currentTime_ = 0, this.duration_ = 50,
            this.interval_ = .05, this.direction_ = -1, this.speed_ = 2, this.currentZoom_ = 1,
            this.timer_ = setInterval(videojs.bind(this, this.timeUpdate_), 1e3 * this.interval_),
            this.userInteraction(!1), this.hide(), videojs.on(this.center_, "load", videojs.bind(this, this.triggerLoadEvents)),
            this.trackingMouse_ = !1, videojs.on(this.pane_, "mousedown", videojs.bind(this, this.beginMouseFollow_)),
            videojs.on(document.body, "mousemove", videojs.bind(this, this.doMouseFollow_)),
            videojs.on(this.pane_, "mousewheel", videojs.bind(this, this.beginMouseZoom_));
    }, vjs.VirtualTour.prototype.triggerLoadEvents = function() {
        setTimeout(videojs.bind(this, function() {
            this.loaded_ = !0, this.show(), this.setupDimensions_(), this.positionImages_(),
                this.positionPane_(), this.duration_ = this.imageSize_.w / (this.speed_ / this.interval_),
                videojs.trigger(this.el_, "durationchange"), videojs.trigger(this.el_, "progress"),
                videojs.trigger(this.el_, "loadedalladata"), videojs.trigger(this.el_, "playing"),
                this.autoplay && this.play();
        }), 500);
    }, vjs.VirtualTour.prototype.setupDimensions_ = function() {
        this.actualImageSize_ = videojs.getActualDimensions(this.center_), this.playerSize_ = {
            w: this.player().el().offsetWidth,
            h: this.player().el().offsetHeight
        }, this.oldSize_ = this.imageSize_ = {
            w: this.center_.offsetWidth,
            h: this.center_.offsetHeight
        }, this.pane_.style.width = 3 * this.imageSize_.w + "px", this.pane_.style.left = "-" + (this.imageSize_.w + this.imageSize_.w / 2) + "px";
    }, vjs.VirtualTour.prototype.pan = function(dir) {
        this.direction_ = dir, this.pan_(this.speed_ * this.direction_);
    }, vjs.VirtualTour.prototype.pan_ = function(amount) {
        var currPos = parseInt(this.pane_.style.left),
            newPos = currPos + amount;
        newPos = this.checkConstraints_(newPos), this.pane_.style.left = newPos + "px";
    }, vjs.VirtualTour.prototype.tilt = function(amount) {
        this.tilt_(amount);
    }, vjs.VirtualTour.prototype.tilt_ = function(amount) {
        this.getImageSize_();
        var currPos = parseInt(this.pane_.style.top) || 0,
            newPos = currPos + amount;
        newPos = this.checkConstraints_(newPos, !0), this.pane_.style.top = newPos + "px";
    }, vjs.VirtualTour.prototype.zoom = function(amount) {
        this.zoom_(amount);
    }, vjs.VirtualTour.prototype.zoom_ = function(amount, focus) {
        parseFloat(this.pane_.style.height), parseFloat(this.center_.style.width);
        this.currentZoom_ += amount, newHeight = Math.round(1e3 * this.currentZoom_) / 10,
            newWidth = this.actualImageSize_.w * this.currentZoom_, this.currentZoom_ > 1.75 && (this.currentZoom_ = 1.75,
                newHeight = 175, newWidth = 1.5 * this.actualImageSize_.w), this.currentZoom_ < 1 ? (this.currentZoom_ = 1,
                newHeight = 100, newWidth = this.actualImageSize_.w, videojs.addClass(this.virtualTourControls_.virtualTourZoomOut.el(), "disabled"),
                videojs.addClass(this.virtualTourControls_.virtualTourTiltDown.el(), "disabled"),
                videojs.addClass(this.virtualTourControls_.virtualTourTiltUp.el(), "disabled")) : (videojs.removeClass(this.virtualTourControls_.virtualTourZoomOut.el(), "disabled"),
                videojs.removeClass(this.virtualTourControls_.virtualTourTiltDown.el(), "disabled"),
                videojs.removeClass(this.virtualTourControls_.virtualTourTiltUp.el(), "disabled")),
            this.pane_.style.height = newHeight + "%", this.pane_.style.width = 3 * newWidth + "px",
            this.positionImages_(), this.positionPane_(focus);
    }, vjs.VirtualTour.prototype.getImageSize_ = function() {
        this.oldSize_ = this.imageSize_, this.imageSize_ = {
            w: this.center_.offsetWidth,
            h: this.center_.offsetHeight
        };
    }, vjs.VirtualTour.prototype.positionImages_ = function() {
        this.getImageSize_(), this.left_.style.left = 0, this.center_.style.left = this.imageSize_.w - 1 + "px",
            this.right_.style.left = 2 * this.imageSize_.w - 2 + "px";
    }, vjs.VirtualTour.prototype.positionPane_ = function(focus) {
        var focusXOffset, focusYOffset;
        3 * this.oldSize_.w, 3 * this.imageSize_.w;
        focus ? (focusXOffset = focus.x, focusYOffset = focus.y) : (focusXOffset = this.playerSize_.w / 2,
            focusYOffset = this.playerSize_.h / 2);
        var xpos = parseInt(this.pane_.style.left),
            offset = Math.floor(Math.abs(xpos) / this.oldSize_.w),
            amountShown = Math.abs(xpos) - offset * this.oldSize_.w + focusXOffset,
            percentShown = amountShown / this.oldSize_.w,
            newXPos = -1 * (offset * this.imageSize_.w + percentShown * this.imageSize_.w - focusXOffset),
            ypos = parseFloat(this.pane_.style.top) || 0,
            focusDiff = focusYOffset / this.playerSize_.h,
            newYPos = ypos - (this.imageSize_.h - this.oldSize_.h) * focusDiff;
        this.pane_.style.left = this.checkConstraints_(Math.round(newXPos)) + "px", this.pane_.style.top = this.checkConstraints_(newYPos, !0) + "px";
    }, vjs.VirtualTour.prototype.checkConstraints_ = function(newPos, vertical) {
        if (vertical) {
            if (newPos <= -1 * (this.imageSize_.h - this.playerSize_.h)) return this.playerSize_.h - this.imageSize_.h;
            if (newPos >= 0) return 0;
        } else {
            if (newPos >= 0) return -1 * this.imageSize_.w;
            if (newPos <= -1 * (3 * this.imageSize_.w - this.playerSize_.w)) return -1 * (2 * this.imageSize_.w - this.playerSize_.w);
        }
        return newPos;
    }, vjs.VirtualTour.prototype.beginMouseFollow_ = function(e) {
        e.stopImmediatePropagation(), this.userInteraction(!0), this.pane_.style.cursor = "-webkit-grabbing",
            this.playingMouse_ = this.playing_, this.mouseMoved_ = !1, this.playingMouse_ && this.player_.pause(),
            this.trackingMouse_ = !0, this.previousMouse_ = {
                x: e.clientX,
                y: e.clientY
            }, videojs.one(document.body, "mouseup", videojs.bind(this, this.endMouseFollow_));
    }, vjs.VirtualTour.prototype.doMouseFollow_ = function(e) {
        if (this.trackingMouse_) {
            this.mouseMoved_ = !0, e.stopImmediatePropagation();
            var deltaMouse_ = {
                x: e.clientX - this.previousMouse_.x,
                y: e.clientY - this.previousMouse_.y
            };
            this.pan_(deltaMouse_.x), this.tilt_(deltaMouse_.y), deltaMouse_.x > 0 ? this.direction_ = 1 : deltaMouse_.x < 0 && (this.direction_ = -1),
                this.previousMouse_ = {
                    x: e.clientX,
                    y: e.clientY
                };
        }
    }, vjs.VirtualTour.prototype.endMouseFollow_ = function(e) {
        this.trackingMouse_ = !1, this.pane_.style.cursor = "-webkit-grab", this.mouseMoved_ ? this.playingMouse_ && this.player_.play() : this.playingMouse_ || this.player_.play();
    }, vjs.VirtualTour.prototype.beginMouseZoom_ = function(e) {
        e.preventDefault(), this.userInteraction(!0);
        var distance = e.detail ? -120 * e.detail : e.wheelDelta,
            dir = 0 > distance,
            playerPosition = videojs.findPosition(this.el_);
        dir ? this.zoom_(.05, {
            x: e.pageX - playerPosition.left,
            y: e.pageY - playerPosition.top
        }) : this.zoom_(-.05, {
            x: e.pageX - playerPosition.left,
            y: e.pageY - playerPosition.top
        });
    }, vjs.VirtualTour.prototype.userInteraction = function(val) {
        this.userInteraction_ = val, val ? this.player_.controlBar.progressControl.hide() : this.player_.controlBar.progressControl.show();
    }, vjs.VirtualTour.prototype.src = function(src) {
        console.log("Image Src", src), this.setupLoad(), this.center_.src === src ? this.triggerLoadEvents() : (this.left_.src = src,
            this.center_.src = src, this.right_.src = src);
    }, vjs.VirtualTour.prototype.play = function() {
        this.playing_ = !0;
    }, vjs.VirtualTour.prototype.pause = function() {
        this.playing_ = !1, this.wasPlaying_ = !1, videojs.trigger(this.el_, "pause");
    }, vjs.VirtualTour.prototype.paused = function() {
        return !this.playing_;
    }, vjs.VirtualTour.prototype.currentTime = function() {
        return this.currentTime_;
    }, vjs.VirtualTour.prototype.setCurrentTime = function(seconds) {
        this.currentTime_ = seconds;
    }, vjs.VirtualTour.prototype.timeUpdate_ = function() {
        this.playing_ && this.loaded_ ? (this.currentTime_ < this.duration_ || this.userInteraction_ ? (this.wasPlaying_ || (videojs.trigger(this.el_, "play"),
            this.wasPlaying_ = !0), this.userInteraction_ || (this.currentTime_ += this.interval_,
            videojs.trigger(this.el_, "timeupdate"))) : (this.ended_ = !0, this.playing_ = !1,
            this.wasPlaying_ = !1, videojs.trigger(this.el_, "ended")), this.pan_(this.speed_ * this.direction_)) : this.wasPlaying_ = !1;
    }, vjs.VirtualTour.prototype.setupTriggers = function() {
        for (var i = vjs.VirtualTour.Events.length - 1; i >= 0; i--) vjs.on(this.center_, vjs.VirtualTour.Events[i], vjs.bind(this.player_, this.eventHandler));
    }, vjs.VirtualTour.prototype.eventHandler = function(e) {
        videojs.trigger(this.el_, e), e.stopPropagation();
    }, vjs.VirtualTour.prototype.duration = function() {
        return this.duration_;
    }, vjs.VirtualTour.prototype.buffered = function() {
        return vjs.createTimeRange(0, this.duration_);
    }, vjs.VirtualTour.prototype.volume = function() {
        return 1;
    }, vjs.VirtualTour.prototype.setVolume = function(percentAsDecimal) {}, vjs.VirtualTour.prototype.muted = function() {
        return !1;
    }, vjs.VirtualTour.prototype.setMuted = function(muted) {}, vjs.VirtualTour.prototype.width = function() {
        return this.el_.offsetWidth;
    }, vjs.VirtualTour.prototype.height = function() {
        return this.el_.offsetHeight;
    }, vjs.VirtualTour.prototype.supportsFullScreen = function() {
        return "function" != typeof this.el_.webkitEnterFullScreen || !/Android/.test(vjs.USER_AGENT) && /Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT) ? !1 : !0;
    }, vjs.VirtualTour.prototype.enterFullScreen = function() {
        var video = this.el_;
        video.paused && video.networkState <= video.HAVE_METADATA ? (this.el_.play(), setTimeout(function() {
            video.pause(), video.webkitEnterFullScreen();
        }, 0)) : video.webkitEnterFullScreen();
    }, vjs.VirtualTour.prototype.exitFullScreen = function() {
        this.el_.webkitExitFullScreen();
    }, vjs.VirtualTour.prototype.load = function() {}, vjs.VirtualTour.prototype.currentSrc = function() {
        return this.center_.src;
    }, vjs.VirtualTour.prototype.poster = function() {
        return "";
    }, vjs.VirtualTour.prototype.setPoster = function(val) {}, vjs.VirtualTour.prototype.preload = function() {},
    vjs.VirtualTour.prototype.setPreload = function(val) {}, vjs.VirtualTour.prototype.autoplay = function() {
        return this.autoplay_;
    }, vjs.VirtualTour.prototype.setAutoplay = function(val) {
        this.autoplay_ = val;
    }, vjs.VirtualTour.prototype.controls = function() {
        return !1;
    }, vjs.VirtualTour.prototype.setControls = function(val) {}, vjs.VirtualTour.prototype.loop = function() {
        return !0;
    }, vjs.VirtualTour.prototype.setLoop = function(val) {}, vjs.VirtualTour.prototype.error = function() {
        return this.center_.error;
    }, vjs.VirtualTour.prototype.seeking = function() {
        return !1;
    }, vjs.VirtualTour.prototype.ended = function() {
        return this.ended_;
    }, vjs.VirtualTour.prototype.defaultMuted = function() {
        return !1;
    }, vjs.VirtualTour.isSupported = function() {
        return !0;
    }, vjs.VirtualTour.canPlaySource = function(srcObj) {
        var type;
        return srcObj.type ? (type = srcObj.type.replace(/;.*/, "").toLowerCase(), type in vjs.VirtualTour.formats ? "maybe" : void 0) : "";
    }, vjs.VirtualTour.formats = {
        "vtour/jpg": "JPG",
        "vtour/jpeg": "JPG",
        "vtour/gif": "GIF",
        "vtour/png": "PNG",
        "vtour/bmp": "BMP"
    }, vjs.VirtualTour.canControlVolume = function() {
        return !1;
    }, vjs.VirtualTour.Events = "load,error,play,pause".split(","), vjs.VirtualTour.disposeMediaElement = function(el) {
        if (el) {
            for (el.player = null, el.parentNode && el.parentNode.removeChild(el); el.hasChildNodes();) el.removeChild(el.firstChild);
            el.removeAttribute("src"), "function" == typeof el.load && el.load();
        }
    }, vjs.IS_OLD_ANDROID && (document.createElement("video").constructor.prototype.canPlayType = function(type) {
        return type && -1 != type.toLowerCase().indexOf("video/mp4") ? "maybe" : "";
    }), videojs.getActualDimensions = function(el) {
        var old = el.cloneNode(!0);
        document.body.appendChild(old), old.style.position = "fixed", old.style.left = "-99999px",
            old.style.display = "block";
        var returnObj = {};
        return returnObj.width = returnObj.w = old.offsetWidth, returnObj.height = returnObj.h = old.offsetHeight,
            document.body.removeChild(old), returnObj;
    },
    function() {
        videojs.BlurOverlay = videojs.Component.extend({
            init: function(player, options) {
                videojs.Component.call(this, player, options), console.log(this.el());
            }
        }), videojs.BlurOverlay.prototype.options_ = {
            children: {}
        }, videojs.BlurOverlay.prototype.createEl = function(tagName, props) {
            var overlay = videojs.createEl("div", {
                    className: this.buildCSSClass()
                }),
                container = videojs.createEl("div", {
                    className: "vjs-blur-container"
                });
            return this.contentEl_ = container, overlay.appendChild(this.contentEl_), overlay;
        }, videojs.BlurOverlay.prototype.buildCSSClass = function() {
            return "vjs-blur-overlay " + vjs.Component.prototype.buildCSSClass.call(this);
        }, videojs.BlurOverlay.prototype.show = function() {
            var techEl, playerEl;
            console.log(this), this.player_.addClass("vjs-has-overlay"), this.el_.style.display = "table",
                "Flash" != this.player_.techName && (techEl = this.player_.tech.el(), playerEl = this.player_.el(),
                    "Html5" == this.player_.techName && (techEl.style.clip = "rect(0 0 " + playerEl.offsetWidth + "px " + playerEl.offsetHeight + "px)"),
                    videojs.addClass(techEl, "vjs-blur")), this.player_.controlBar.el().style.opacity = "0",
                this.el_.style.opacity = "1";
        }, videojs.BlurOverlay.prototype.hide = function() {
            var techEl = this.player_.tech.el();
            videojs.Component.prototype.hide.call(this), techEl.style.clip = "", videojs.removeClass(techEl, "vjs-blur"),
                this.player_.controlBar.el().style.opacity = "", this.player_.removeClass("vjs-has-overlay");
        }, videojs.BlurOverlay.prototype.dispose = function() {
            this.hide(), console.log("dispose", this), videojs.Component.prototype.dispose.call(this);
        };
    }(),
    function() {
        "use strict";
        videojs.ExitButton || (videojs.ExitButton = videojs.Button.extend({
            init: function(player, options) {
                videojs.Button.call(this, player, options);
            }
        }), videojs.ExitButton.prototype.buttonText = "Exit", videojs.ExitButton.prototype.buildCSSClass = function() {
            return "vjs-control vjs-exit-button bv-cancel " + vjs.Component.prototype.buildCSSClass.call(this);
        });
    }(),
    function() {
        "use strict";
        videojs.findControlLocation = function(player, className) {
            for (var controlBarChildren = player.controlBar.el().childNodes, loc = -1, x = 0; x < controlBarChildren.length; x++)
                if (-1 != controlBarChildren[x].className.indexOf(className)) {
                    loc = x;
                    break;
                }
            return loc;
        };
    }(),
    function() {
        "use strict";
        videojs.PauseButton || (videojs.PauseButton = videojs.Button.extend({
            init: function(player, options) {
                videojs.Component.call(this, player, options);
            }
        }), videojs.PauseButton.prototype.buttonText = "Pause", videojs.PauseButton.prototype.buildCSSClass = function() {
            return "vjs-control vjs-pause-button bv-pause " + vjs.Component.prototype.buildCSSClass.call(this);
        }, videojs.PauseButton.prototype.onClick = function() {});
    }(),
    function() {
        "use strict";

        function getParameterByName(name, url) {
            url || (url = window.location.href), name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            return results ? results[2] ? decodeURIComponent(results[2].replace(/\+/g, " ")) : "" : null;
        }
        var oldVJSinit = videojs.Player.prototype.init,
            wasPlaying = !1;
        videojs.Player = videojs.Player.extend({
            init: function(tag, options, ready) {
                var iphone = videojs.IS_IPHONE || videojs.IS_IPOD;
                if (!options) {
                    var tagOptions = tag.getAttribute("data-setup"),
                        optionsToFix = tagOptions || "{}",
                        textArea = document.createElement("textarea");
                    textArea.innerHTML = optionsToFix.replace(/\s?(\w+?):/gi, '"$1":');
                    var fixedOptions = textArea.innerText || textArea.textContent;
                    tagOptions && tag.setAttribute("data-setup", fixedOptions), options = JSON.parse(fixedOptions);
                }
                if (options = options || {}, options.plugins || (options.plugins = {}), options.plugins.bvThemeLoader = options.plugins.bvThemeLoader || {},
                    options.plugins.bvReporting = void 0 === options.plugins.bvReporting ? {} : options.plugins.bvReporting,
                    options.plugins.responsiveControlBar = {}, options.techOrder = options.techOrder || ["html5", "flash", "image", "virtualTour"],
                    navigator.userAgent.indexOf("Trident/5") > -1 && (options.techOrder.indexOf("flash") > -1 && options.techOrder.splice(videojs.options.techOrder.indexOf("flash"), 1),
                        options.techOrder.unshift("flash")), iphone && options.plugins.socialOverlay && (options.plugins.socialOverlay = !1),
                    oldVJSinit.call(this, tag, options, ready), this.controlBar.removeChild("progressControl"),
                    this.controlBar.addChild("progressControlExtended"), vjs.IS_IOS && (videojs.Player.prototype.play = function() {
                        function testIsPlaying() {
                            player.hasStarted_ && 0 === player.currentTime() && (player.src(player.currentSrc()),
                                player.techCall("play"));
                        }
                        this.techCall("play");
                        var player = this.player();
                        return setTimeout(testIsPlaying, 1500), this;
                    }), iphone) {
                    -1 != this.el_.parentNode.className.indexOf("vjs-") && videojs.addClass(this.el_.parentNode, "vjs-iphone"),
                        this.addClass("vjs-iphone");
                    var muteToggle = this.controlBar.getChild("muteToggle"),
                        volumeControl = this.controlBar.getChild("volumeControl"),
                        volumeMenuButton = this.controlBar.getChild("volumeMenuButton");
                    muteToggle && muteToggle.hide(), volumeControl && volumeControl.hide(), volumeMenuButton && volumeMenuButton.hide();
                }
                var player = this,
                    testTimer = setInterval(function() {
                        player.el_ && 1 == videojs.getComputedDimension(player.el_, "opacity") && (clearInterval(testTimer),
                            setTimeout(function() {
                                player.trigger("playerInit");
                            }, 10));
                    }, 10);
                this.player_.on("contextmenu", videojs.bind(this, this.onContextmenu));
            }
        }), videojs.Player.prototype.onContextmenu = function(e) {
            if (e.preventDefault(), e.stopPropagation(), this.clearContextMenu(), !this.contextMenu_ || e.ctrlKey && e.shiftKey && e.altKey) {
                this.contextMenu_ = videojs.createEl("div", {
                    className: "bv-context-menu"
                });
                var menuItems = [{
                    text: "BetterVideo Player 1.5.3"
                }];
                e.ctrlKey && e.shiftKey && e.altKey && menuItems.push({
                    text: "Developer - Push To Embed",
                    action: videojs.bind(this, function() {
                        var embedCon = this.player_.addChild("embedContainer"),
                            opts = embedCon.getEmbedCodeOptions(),
                            uid = getParameterByName("bv_uid") || window.prompt("UID");
                        uid && this.player_.PushEmbedCode(opts, uid, videojs.bind(this, function() {
                            this.player_.removeChild("embedContainer");
                        }));
                    })
                });
                for (var tmp, x = 0; x < menuItems.length; x++) tmp = videojs.createEl("div", {
                    className: "bv-context-menu-item",
                    innerHTML: menuItems[x].href ? '<a href="' + menuItems[x].href + '">' + menuItems[x].text + "</a>" : menuItems[x].text,
                    style: "white-space: nowrap;"
                }), menuItems[x].action && videojs.on(tmp, "click", function() {
                    var item = menuItems[x];
                    return function() {
                        item.action();
                    };
                }()), this.contextMenu_.appendChild(tmp);
            }
            this.contextMenu_.style.left = "-10000px", this.contextMenu_.style.top = e.pageY + "px",
                document.body.appendChild(this.contextMenu_), setTimeout(videojs.bind(this, function() {
                    var width = this.contextMenu_.offsetWidth;
                    e.pageX + width >= window.innerWidth ? this.contextMenu_.style.left = e.pageX - width + "px" : this.contextMenu_.style.left = e.pageX + "px";
                }), 10), this.contextMenuOpen_ = !0, videojs.one(window, "click", videojs.bind(this, this.clearContextMenu)),
                this.paused() || (wasPlaying = !0, this.pause());
        }, videojs.Player.prototype.clearContextMenu = function(e) {
            this.contextMenuOpen_ && (document.body.removeChild(this.contextMenu_), this.contextMenuOpen_ = !1),
                wasPlaying && this.play();
        };
    }(),
    function() {
        vjs.CurrentTimeToggle = vjs.Component.extend({
            init: function(player, options) {
                vjs.Component.call(this, player, options), this.remainingTimeDisplay.hide(), this.remainingToggled_ = !1,
                    this.on("click", videojs.bind(this, this.onClick));
            }
        }), vjs.CurrentTimeToggle.prototype.createEl = function() {
            var el = vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-current-time-toggle vjs-time-controls vjs-control"
            });
            return el;
        }, vjs.CurrentTimeToggle.prototype.onClick = function(e) {
            this.remainingToggled_ ? (this.remainingTimeDisplay.hide(), this.currentTimeDisplay.show(),
                this.remainingToggled_ = !1) : (this.remainingTimeDisplay.show(), this.currentTimeDisplay.hide(),
                this.remainingToggled_ = !0);
        }, vjs.CurrentTimeToggle.prototype.options_ = {
            children: {
                currentTimeDisplay: {},
                remainingTimeDisplay: {}
            }
        };
        var newChildren = {},
            oldChildren = videojs.ControlBar.prototype.options_.children;
        delete oldChildren.remainingTimeDisplay;
        for (var x in oldChildren) oldChildren.hasOwnProperty(x) && ("currentTimeDisplay" === x ? newChildren.currentTimeToggle = {} : newChildren[x] = oldChildren[x]);
        console.log("TIME TOGGLE", oldChildren, newChildren), videojs.ControlBar.prototype.options_.children = newChildren,
            videojs.Image.prototype.controlsToHide.push("currentTimeToggle");
    }(),
    function() {
        "use strict";

        function getOptions(opts, tag, userOpts) {
            console.log(opts, tag, userOpts);
            var returnObj = {
                plugins: opts.plugins,
                techOrder: opts.techOrder,
                sources: opts.sources,
                dimension: opts.height / opts.width < .75 ? "vjs-hd" : "vjs-sd",
                poster: tag.poster || "",
                preload: tag.preload || "auto",
                autoplay: tag.autoplay || "",
                "class": tag["class"],
                controls: tag.controls
            };
            return opts.plugins.playlist && (returnObj.plugins.playlist.vertical = !!userOpts.vertical),
                console.log(returnObj), returnObj;
        }! function() {
            function InvalidCharacterError(message) {
                this.message = message;
            }
            var object = "undefined" != typeof exports ? exports : self,
                chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            InvalidCharacterError.prototype = new Error(), InvalidCharacterError.prototype.name = "InvalidCharacterError",
                object.btoa || (object.btoa = function(input) {
                    for (var block, charCode, str = String(input), idx = 0, map = chars, output = ""; str.charAt(0 | idx) || (map = "=",
                            idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
                        if (charCode = str.charCodeAt(idx += .75), charCode > 255) throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                        block = block << 8 | charCode;
                    }
                    return output;
                }), object.atob || (object.atob = function(input) {
                    var str = String(input).replace(/=+$/, "");
                    if (str.length % 4 == 1) throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
                    for (var bs, buffer, bc = 0, idx = 0, output = ""; buffer = str.charAt(idx++); ~buffer && (bs = bc % 4 ? 64 * bs + buffer : buffer,
                            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) buffer = chars.indexOf(buffer);
                    return output;
                });
        }(), videojs.Player.prototype.EmbedCode = function(opts, callback) {
            console.log(opts);
            var config = getOptions(this.options(), this.tagAttributes, opts),
                encodedStr = window.btoa(JSON.stringify(config)),
                player = this;
            videojs.post("//player.bettervideo.com/embed/getUnique.php", {
                config: encodedStr
            }, function(data) {
                try {
                    data = JSON.parse(data), console.log(data);
                } catch (e) {
                    console.error("Invalid response from server");
                }
                var height = (opts && opts.width || 640, parseInt(player.options().height) / parseInt(player.options().width) * 100 + "%");
                player.options().plugins.playlist && "object" === (typeof player.playlist).toLowerCase() && player.playlist.items().length && (height = opts.vertical ? "calc(" + height + " - 84px )" : "calc(" + height + " + 150px)");
                var iframe = '<div class="bvEmbed" style="position: relative; padding-top: ' + height + "; height: 0; " + (opts.width ? "max-width: " + opts.width.replace(/%|em|px/gi, "") + "px; " : "") + 'overflow: hidden;">\r\n	<iframe width="100%" height="100%" seamless frameborder="0" scrolling="no" allowfullscreen src="//player.bettervideo.com/embed/?uid=' + data.uid + '" style="position: absolute; top:0; left: 0; width: 100%; height: 100%;"></iframe>\r\n</div>';
                "function" == typeof callback && callback(iframe);
            });
        }, videojs.Player.prototype.PushEmbedCode = function(opts, uid, callback, overwrite) {
            console.log(opts);
            var config = getOptions(this.options(), this.tagAttributes, opts),
                encodedStr = window.btoa(JSON.stringify(config)),
                player = this;
            console.log("ADDING UNIQUE", config, uid, encodedStr);
            var params = {
                config: encodedStr,
                uid: uid
            };
            overwrite && (params.overwrite = overwrite), videojs.post("//player.bettervideo.com/embed/addUnique.php", params, function(data) {
                try {
                    data = JSON.parse(data), console.log(data);
                } catch (e) {
                    console.error("Invalid response from server");
                }
                data.error ? "UID Duplicate" === data.error ? window.confirm("Duplicate UID: " + uid + ". Do you wish to overwrite?") && player.PushEmbedCode(opts, uid, callback, 1) : window.alert(data.error) : window.alert(data.uid + " added.");
            });
        };
    }(),
    function() {
        "use strict";
        videojs.ControlBar.prototype.hideControl = function(control) {
            if (this.hiddenControls = this.hiddenControls || {}, control) {
                var controlObj, controlName, x, history = {};
                switch (typeof control) {
                    case "string":
                        controlObj = this.getChild(control), controlName = control;
                        break;

                    case "object":
                        if (control instanceof Array) {
                            for (x = 0; x < control.length; x++) this.hideControl(control[x]);
                            return;
                        }
                        controlObj = control, controlName = control.name();
                        break;

                    case "undefined":
                        return;
                }
                controlObj && !this.hiddenControls[controlName] && (history.visible = "none" !== videojs.getComputedDimension(controlObj.el(), "display"),
                    history.control = controlObj, controlObj.hide(), this.hiddenControls[controlName] = history,
                    console.log(controlName, history));
            }
        }, videojs.ControlBar.prototype.showControl = function(control) {
            if (this.hiddenControls = this.hiddenControls || {}, control) {
                var controlObj, controlName, x, history = {};
                switch (typeof control) {
                    case "string":
                        controlObj = this.getChild(control), controlName = control;
                        break;

                    case "object":
                        if (control instanceof Array) {
                            for (x = 0; x < control.length; x++) this.showControl(control[x]);
                            return;
                        }
                        controlObj = control, controlName = control.name();
                }
                history = this.hiddenControls[controlName], history && (history.visible && history.control.show(),
                    delete this.hiddenControls[controlName]);
            }
        };
    }(),
    function() {
        videojs.isMobile = function() {
            var check = !1;
            return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/gi.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4))) && (check = !0),
                check;
        };
    }(), "function" != typeof Object.assign && (Object.assign = function(target, varArgs) {
        "use strict";
        if (null === target) throw new TypeError("Cannot convert undefined or null to object");
        for (var to = Object(target), index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];
            if (null !== nextSource)
                for (var nextKey in nextSource) Object.prototype.hasOwnProperty.call(nextSource, nextKey) && (to[nextKey] = nextSource[nextKey]);
        }
        return to;
    }),
    function() {
        "use strict";
        videojs.post || (vjs.post = function(url, data, onSuccess, onError) {
            var local, request;
            data = data || {}, "undefined" == typeof XMLHttpRequest && (window.XMLHttpRequest = function() {
                try {
                    return new window.ActiveXObject("Msxml2.XMLHTTP.6.0");
                } catch (e) {}
                try {
                    return new window.ActiveXObject("Msxml2.XMLHTTP.3.0");
                } catch (f) {}
                try {
                    return new window.ActiveXObject("Msxml2.XMLHTTP");
                } catch (g) {}
                throw new Error("This browser does not support XMLHttpRequest.");
            }), request = new XMLHttpRequest();
            try {
                request.open("POST", url), request.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01"),
                    request.setRequestHeader("Content-type", "application/json;  charset=UTF-8");
            } catch (e) {
                onError(e);
            }
            local = 0 === url.indexOf("file:") || 0 === window.location.href.indexOf("file:") && -1 === url.indexOf("http"),
                request.onreadystatechange = function() {
                    4 === request.readyState && (200 === request.status || local && 0 === request.status ? onSuccess && onSuccess(request.responseText) : onError && onError());
                };
            try {
                request.send(JSON.stringify(data));
            } catch (e) {
                onError && onError(e);
            }
        });
    }(),
    function(window, videojs, undefined) {
        videojs.ProgressControlExtended = videojs.ProgressControl.extend({
            init: function(player, options) {
                videojs.ProgressControl.call(this, player, options);
            }
        }), videojs.ProgressControlExtended.prototype.options_ = {
            children: {
                currentTimeToggle: {},
                durationDisplay: {},
                seekBarExtended: {}
            }
        }, videojs.SeekBarExtended = videojs.SeekBar.extend({
            init: function(player, options) {
                videojs.SeekBar.call(this, player, options), this.on("mouseover", this.onMouseOver),
                    this.boundEvents.over = {
                        mousemove: videojs.bind(this, this.onMouseMove)
                    };
            }
        }), videojs.SeekBarExtended.prototype.createEl = function() {
            var el = videojs.SeekBar.prototype.createEl.call(this);
            return this.previewEl_ = videojs.createEl("div", {
                    className: "vjs-seek-preview"
                }), this.previewDisplayEl_ = videojs.createEl("div", {
                    className: "vjs-seek-preview-display"
                }), this.previewEl_.appendChild(this.previewDisplayEl_), el.appendChild(this.previewEl_),
                el;
        }, videojs.SeekBarExtended.prototype.onMouseDown = function(event) {
            this.player_.scrubbing = !0, vjs.Slider.prototype.onMouseDown.call(this, event),
                this.videoWasPlaying = !this.player_.paused(), this.player_.pause();
        }, videojs.SeekBarExtended.prototype.onMouseOver = function(event) {
            this.on("mousemove", this.boundEvents.over.mousemove);
        }, videojs.SeekBarExtended.prototype.onMouseMove = function(event) {
            var newTime = this.calculateDistance(event) * this.player_.duration();
            this.player_.scrubbing && (newTime == this.player_.duration() && (newTime -= .1),
                this.player_.currentTime(newTime)), this.previewDisplayEl_.innerHTML = vjs.formatTime(newTime, this.player_.duration());
            var newPos = event.pageX - videojs.findPosition(this.el_).left;
            console.log(newPos, this.el_.offsetWidth), 20 >= newPos ? this.previewDisplayEl_.style.marginLeft = 20 - newPos + "px" : newPos >= this.el_.offsetWidth - 20 ? this.previewDisplayEl_.style.marginLeft = this.el_.offsetWidth - 20 - newPos + "px" : this.previewDisplayEl_.style.marginLeft = 0,
                this.previewEl_.style.left = newPos + "px";
        };
    }(window, window.videojs),
    function() {
        "use strict";
        vjs.hasClass = function(el, className) {
            return el && -1 != el.className.indexOf(className);
        }, vjs.PlayToggle.prototype.removeRestart = function() {
            setTimeout(videojs.bind(this, function() {
                vjs.hasClass(this.el_, "bv-cw") && (console.log("REMOVING"), vjs.removeClass(this.el_, "bv-cw"));
            }), 1);
        }, vjs.PlayToggle.prototype.onPlay = function() {
            this.removeRestart(), vjs.hasClass(this.el_, "vjs-paused") && vjs.removeClass(this.el_, "vjs-paused"),
                vjs.addClass(this.el_, "vjs-playing"), vjs.addClass(this.el_, "vjs-has-started"),
                this.el_.children[0].children[0].innerHTML = "Pause";
        }, vjs.PlayToggle.prototype.onPause = function() {
            var bigPlayButton = this.player().bigPlayButton;
            vjs.removeClass(this.el_, "bv-cw"), vjs.removeClass(this.el_, "vjs-playing"), vjs.removeClass(bigPlayButton.el(), "bv-cw"),
                this.player_.duration() <= this.player_.currentTime() ? (vjs.addClass(this.el_, "bv-cw"),
                    vjs.addClass(bigPlayButton.el(), "bv-cw"), vjs.addClass(this.player_.el(), "vjs-ended"),
                    this.el_.children[0].children[0].innerHTML = "Replay", this.removeRestart_ = videojs.bind(this, function() {
                        vjs.removeClass(this.el_, "bv-cw"), vjs.addClass(bigPlayButton.el(), "bv-cw");
                    }), this.player_.one("playlistautoload", this.removeRestart_)) : (vjs.addClass(this.el_, "vjs-paused"),
                    this.el_.children[0].children[0].innerHTML = "Play");
        };
    }(),
    function() {
        "use strict";
        var newChildren = {},
            oldChildren = videojs.ControlBar.prototype.options_.children;
        for (var x in oldChildren) oldChildren.hasOwnProperty(x) && ("muteToggle" === oldChildren[x] ? newChildren.volumeMenuButton = {} : newChildren[x] = oldChildren[x]);
        console.log("TIME TOGGLE 1", videojs.ControlBar.prototype.options_.children, newChildren),
            videojs.ControlBar.prototype.options_.children = newChildren, videojs.Player.prototype.options_.nativeControlsForTouch = !1,
            videojs.plugin("responsiveControlBar", function(options) {
                function testResize() {
                    var controls = player.controlBar,
                        controlBarWidth = player.el().offsetWidth,
                        nonEssential = ["timeDivider", "durationDisplay", "liveDisplay", "volumeControl", "muteToggle", "playbackRateMenuButton", "chaptersButton", "subtitlesButton"],
                        nonCritical = ["chaptersButton", "subtitlesButton", "logoButton", "dimTheLightsToggle"];
                    console.log("testResize", controlBarWidth), controlBarWidth > 500 ? (controls.showControl(nonEssential),
                            controls.hideControl("volumeMenuButton")) : (controls.hideControl(nonEssential),
                            controls.showControl("volumeMenuButton")), controlBarWidth > 235 ? controls.showControl(nonCritical) : controls.hideControl(nonCritical),
                        player.removeClass("vjs-control-bar-large"), player.removeClass("vjs-control-bar-medium"),
                        player.removeClass("vjs-control-bar-small"), controlBarWidth >= options.breakpoints.upper ? player.addClass("vjs-control-bar-large") : controlBarWidth >= options.breakpoints.lower && controlBarWidth <= options.breakpoints.upper ? player.addClass("vjs-control-bar-medium") : player.addClass("vjs-control-bar-small");
                }
                var player = this;
                options = options || {}, options.breakpoints = options.breakpoitns || {
                    lower: 360,
                    upper: 500
                }, player.one("playerInit", function() {
                    player.on("resize", testResize), videojs.on(window, "resize", testResize), testResize();
                }), player.on("dispose", function() {
                    console.log("RESPONSIVE CONTROL BAR DISPOSE"), player.off("reisze", testResize),
                        videojs.off(window, "resize", testResize), player = null;
                });
            });
    }(),
    function() {
        "use strict";
        videojs.Player.prototype.unloadTextTracks = function(kind) {
            var i, kinds = ["captions", "subtitles", "chapters", "descriptions", "metadata"],
                tracks = this.textTracks_ = this.textTracks_ || [];
            if (kind)
                for (this.clearTrackButton(kind), i = tracks.length - 1; i >= 0; i--) tracks[i] && tracks[i].options_.kind === kind && (tracks[i].deactivate(),
                    tracks[i].dispose(), tracks.splice(i, 1));
            else
                for (i = 0; i < kinds.length; i++) this.unloadTextTracks(kinds[i]);
        }, videojs.Player.prototype.clearTrackButton = function(kind) {
            var controlBar = this.controlBar;
            if (controlBar && controlBar[kind + "Button"]) {
                for (; controlBar[kind + "Button"].children_.length > 0;) try {
                    controlBar[kind + "Button"].removeChild(controlBar[kind + "Button"].children_[0]);
                } catch (e) {}
                controlBar[kind + "Button"].hide();
            }
        };
        var addTextTrackSuper_ = videojs.Player.prototype.addTextTrack;
        videojs.Player.prototype.addTextTrack = function(kind, label, language, options) {
            if (this.clearTrackButton(kind), console.log(this), addTextTrackSuper_.apply(this, arguments),
                this.controlBar) {
                var button = this.controlBar[kind + "Button"];
                button.menu = button.createMenu(), button.addChild(button.menu), button.show();
            }
        };
    }(),
    function() {
        function automute(options) {
            function removeAutomute() {
                console.log("begin removeAutomute"), setTimeout(videojs.bind(this, function() {
                        this.muted(!1);
                    }), 0), videojs.addClass(this.el(), "vjs-has-started"), videojs.removeClass(this.bigPlayButton.el(), "vjs-automute"),
                    videojs.removeClass(this.bigPlayButton.el(), "vjs-automute-restart"), this.bigPlayButton.hide(),
                    this.off("play", playFn), this.off("loadstart", unMute), this.bigPlayButton.off("click", onPauseFn),
                    this.tech.off("mousedown", onPauseFn), this.tech.off("mousedown", this.tech.onClick),
                    this.tech.on("mousedown", this.tech.onClick), options.loop && this.loop(!1);
            }
            if (console.log("Mobile:", videojs.isMobile(), navigator.userAgent || navigator.vendor || window.opera), !videojs.isMobile()) {
                options = videojs.obj.merge({
                    restart: !1,
                    loop: !1
                }, options);
                var unMute, onLoadFn, onPauseFn, playFn, initialized;
                initialized = !1, onPauseFn = videojs.bind(this, function(e) {
                        e.stopImmediatePropagation(), this.currentTime() != this.duration() && (options.restart ? (this.trigger({
                            type: "restartunmute"
                        }), this.currentTime(0), videojs.addClass(this.el(), "vjs-playing")) : this.trigger({
                            type: "autoplayunmute"
                        }), unMute());
                    }), unMute = videojs.bind(this, removeAutomute), onLoadFn = videojs.bind(this, function() {
                        unMute();
                    }), playFn = videojs.bind(this, function() {
                        videojs.removeClass(this.el(), "vjs-has-started"), videojs.removeClass(this.el(), "vjs-playing"),
                            setTimeout(videojs.bind(this, function() {
                                this.bigPlayButton.show();
                            }), 0), videojs.addClass(this.bigPlayButton.el(), "vjs-automute"), options.restart && videojs.addClass(this.bigPlayButton.el(), "vjs-automute-restart"),
                            initialized || setTimeout(videojs.bind(this, function() {
                                videojs.removeClass(this.el(), "vjs-has-started"), videojs.removeClass(this.el(), "vjs-playing"),
                                    this.bigPlayButton.show(), initialized = !0, this.bigPlayButton.one("click", onPauseFn),
                                    this.tech.one("mousedown", onPauseFn), this.tech.off("mousedown", this.tech.onClick),
                                    "object" == typeof this.playlist && this.playlist.options().autoAdvance ? this.one("playlistload", unMute) : this.one("loadstart", unMute);
                            }), 1e3);
                    }), this.on("play", playFn), this.options_.autoplay = !0, this.options_.automute = !0,
                    options.restart && (this.options_.automuterestart = !0), options.loop && this.loop(!0),
                    this.muted(!0), this.autoplay(!0), setTimeout(videojs.bind(this, function() {
                        this.paused() && this.play();
                    }), 1e3);
            }
        }
        videojs.plugin("automute", automute);
    }(),
    function() {
        function onLoadStart(e) {
            if (loadedAllData = !1, options.eventLimits.impression) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "View",
                    value: null
                });
            }
        }

        function onLoadedMetaData(e) {
            if (options.eventLimits.loadedmetadata) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Meta Data Loaded",
                    value: null
                });
            }
        }

        function onLoadedData(e) {
            if (options.eventLimits.loadeddata) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Video Data Loading",
                    value: null
                });
            }
        }

        function onLoadedAllData(e) {
            if (options.eventLimits.loadedalldata && !loadedAllData) {
                loadedAllData = !0;
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "All Video Data Loaded",
                    value: null
                });
            }
        }

        function onPlay(e) {
            if (seeking) return void(seeking = !1);
            if (firstPlay) {
                if (firstPlay = !1, videojsRef.options_.automute) {
                    if (!options.eventLimits.autoplaymute) return;
                    return void videojsRef.trigger({
                        type: "autoplaymute"
                    });
                }
                if (videojsRef.options_.autoplay || videojsRef.autoplay()) {
                    if (!options.eventLimits.autoplay) return;
                    return void videojsRef.trigger({
                        type: "autoplay"
                    });
                }
            }
            var videoData = getVideoData();
            if (/icon\-undo/gi.test(videojsRef.controlBar.playToggle.el_.className)) {
                if (!options.eventLimits.restart) return;
                return void doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Restart",
                    value: getTime()
                });
            }
            options.eventLimits.play && doTracking({
                category: videoData.cid,
                action: videoData.vid,
                label: "Play",
                value: getTime()
            });
        }

        function onPause(e) {
            if (!(!options.eventLimits.pause || seeking || videojsRef.duration() <= videojsRef.currentTime())) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Pause",
                    value: getTime()
                });
            }
        }

        function onSeekBegin(e) {
            seeking = !0, videojs.one(document, "mouseup", onSeekEnd);
        }

        function onSeekEnd(e) {
            if (options.eventLimits.seek) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Seek",
                    value: getTime()
                });
            }
        }

        function onVolumeBegin(e) {
            videojs.one(document, "mouseup", onVolumeEnd);
        }

        function onVolumeEnd(e) {
            if (options.eventLimits.volume) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Volume Change",
                    value: getVolume()
                });
            }
        }

        function onMute(e) {
            if (options.eventLimits.volume) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Mute",
                    value: !videojsRef.muted()
                });
            }
        }

        function onTimeUpdate(e) {
            if (options.eventLimits.time && !seeking) {
                var currentTime = getTime(!1),
                    reportedTime = getTime(),
                    percent = Math.round(currentTime / videojsRef.duration() * 100);
                if (currentTime && lastReportedTimePercent != currentTime && percent != lastReportedPercent) {
                    var videoData = getVideoData();
                    (25 == percent || 50 == percent || 75 == percent) && (lastReportedTimePercent = currentTime,
                        lastReportedPercent = percent, doTracking({
                            category: videoData.cid,
                            action: videoData.vid,
                            label: "Progress - " + percent + "%",
                            value: reportedTime
                        }));
                    var is5sec = Math.floor(currentTime) % 5;
                    Math.floor(currentTime) == lastReportedTime || is5sec ? 0 > currentTime - lastReportedTime && (lastReportedTime = Math.floor(currentTime)) : (bvTrack({
                        category: videoData.cid,
                        action: videoData.vid,
                        label: "Progress",
                        value: Math.floor(currentTime)
                    }), lastReportedTime = Math.floor(currentTime));
                }
            }
        }

        function onEnded(e) {
            if (options.eventLimits.end) {
                lastReportedTime = 0, lastReportedPercent = 0, lastReportedTimePercent = 0;
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "End",
                    value: null
                });
            }
        }

        function onDurationChange(e) {
            if (options.eventLimits.durationchange) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Duration Changed",
                    value: null
                });
            }
        }

        function onProgress(e) {
            if (options.eventLimits.progress) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Download Progress",
                    value: null
                });
            }
        }

        function onResize(e) {
            if (!options.eventLimits.resize || initialSize) return void(initialSize = !1);
            var videoData = getVideoData();
            doTracking({
                category: videoData.cid,
                action: videoData.vid,
                label: "Resize",
                value: null
            });
        }

        function onError(e) {
            if (options.eventLimits.error) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Error",
                    value: null
                });
            }
        }

        function onFullScreenChange(e) {
            if (options.eventLimits.fullscreen) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Fullscreen",
                    value: null
                });
            }
        }

        function onSocialClick(e) {
            if (options.eventLimits.social) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Social - " + e.kind,
                    value: null
                });
            }
        }

        function onAutoPlay(e) {
            if (options.eventLimits.autoplay) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Auto Play",
                    value: getTime()
                });
            }
        }

        function onAutoPlayMute(e) {
            if (options.eventLimits.autoplaymute) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Auto Play - mute",
                    value: getTime()
                });
            }
        }

        function onAutoPlayUnmute(e) {
            if (options.eventLimits.autoplayunmute) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Auto Play - unmute",
                    value: getTime()
                });
            }
        }

        function onRestartUnmute(e) {
            if (options.eventLimits.restartunmute) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Restart - unmute",
                    value: getTime()
                });
            }
        }

        function onPlaylistLoad(e) {
            if (options.eventLimits.playlistload) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Playlist Load",
                    value: getTime()
                });
            }
        }

        function onPlaylistAutoLoad(e) {
            if (options.eventLimits.playlistload) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Playlist Auto Load",
                    value: getTime()
                });
            }
        }

        function onCallToActionClose(e) {
            if (options.eventLimits.calltoactionclose) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Call to Action Close",
                    value: e.actionTime
                });
            }
        }

        function onCallToAction(e) {
            if (options.eventLimits.calltoactionclose) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Call to Action - " + e.label,
                    value: e.actionTime
                });
            }
        }

        function onRaiseTheLights(e) {
            if (options.eventLimits.lightson) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Lights On Click",
                    value: getTime()
                });
            }
        }

        function onDimTheLights(e) {
            if (options.eventLimits.lightsoff) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Lights Off Click",
                    value: getTime()
                });
            }
        }

        function onLogo(e) {
            if (options.eventLimits.logo) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Logo Click",
                    value: getTime()
                });
            }
        }

        function onOnScreenActionClick(e) {
            if (options.eventLimits.onscreenaction) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "On Screen Action - " + e.label,
                    value: getTime()
                });
            }
        }

        function onClickToCallClick(e) {
            if (options.eventLimits.clicktocall) {
                var videoData = getVideoData();
                doTracking({
                    category: videoData.cid,
                    action: videoData.vid,
                    label: "Click To Call - " + e.label,
                    value: getTime()
                });
            }
        }

        function processQueue() {
            if (gaType && bvReady)
                for (var x = 0; x < queue.length; x++) doTracking(queue[x]);
        }

        function doTracking(opt) {
            var videoData = getVideoData(),
                continueReporting = !1;
            if (videoData && videoData.ext) switch (videoData.ext.toLowerCase()) {
                case "flv":
                case "fla":
                case "mp4":
                case "webm":
                case "ogg":
                case "ogv":
                    continueReporting = !0;
                    break;

                case "jpg":
                case "jpeg":
                case "gif":
                case "png":
                    continueReporting = !1;
            }
            return continueReporting ? void(gaType && bvReady ? (googleTrack(opt), bvTrack(opt)) : queue.push(opt)) : !1;
        }

        function googleTrack(opt) {
            if (!options.debug && gaType) {
                var x;
                switch (gaType) {
                    case 1:
                        if (ga("bv.send", "event", opt.category, opt.action, opt.label, opt.value), options.gaAccounts.length)
                            for (x = 0; x < options.gaAccounts.length; x++) ga("bvExtraGA" + x + ".send", "event", options.gaLabels[x] || options.secondaryLabel, opt.action, opt.label, opt.value);
                        break;

                    case 2:
                        if (_gaq.push(["bv._trackEvent", opt.category, opt.action, opt.label, opt.value]),
                            options.gaAccounts.length)
                            for (x = 0; x < options.gaAccounts.length; x++) _gaq.push(["bvExtraGA" + x + "._trackEvent", options.gaLabels[x] || options.secondaryLabel, opt.action, opt.label, opt.value]);
                        break;

                    case 3:
                }
            }
        }

        function checkIfAnalyticsLoaded() {
            var x;
            if (window.ga && window.ga.getAll) {
                if (gaType = 1, ga("create", bvGaAccount, "auto", "bv"), options.gaAccounts.length)
                    for (x = 0; x < options.gaAccounts.length; x++) ga("create", options.gaAccounts[x], "auto", "bvExtraGA" + x);
                ga("bv.send", "pageview"), processQueue();
            } else if (window._gat && window._gat._getTracker) {
                if (gaType = 2, _gat._createTracker(bvGaAccount, "bv"), options.gaAccounts.length)
                    for (x = 0; x < options.gaAccounts.length; x++) _gat._createTracker(options.gaAccounts[x], "bvExtraGA" + x);
                _gaq.push(["bv._trackPageview"]), processQueue();
            } else if (window.urchinTracker) gaType = 3, processQueue();
            else if (10 > gaChecks) gaChecks++,
                setTimeout(checkIfAnalyticsLoaded, 500);
            else {
                if (gaType = 1, function(i, s, o, g, r, a, m) {
                        i.GoogleAnalyticsObject = r, i[r] = i[r] || function() {
                                (i[r].q = i[r].q || []).push(arguments);
                            }, i[r].l = 1 * new Date(), a = s.createElement(o), m = s.getElementsByTagName(o)[0],
                            a.async = 1, a.src = g, m.parentNode.insertBefore(a, m);
                    }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"),
                    ga("create", bvGaAccount, {
                        name: "bv"
                    }), options.gaAccounts.length)
                    for (x = 0; x < options.gaAccounts.length; x++) ga("create", options.gaAccounts[x], {
                        name: "bvExtraGA" + x
                    });
                ga("bv.send", "pageview"), processQueue();
            }
        }

        function bvReportingInit() {
            if (uid = cookie.get("bvUser"), !uid) {
                var r = Math.ceil(1e10 * Math.random());
                uid = "BVUSER" + r, cookie.set("bvUser", uid, 3e3);
            }
            var responseFn = function(response) {
                console.info("[BV Reporting]", response), response = JSON.parse(response), playerid = response.SaveInitPageResult.playerid,
                    token = response.SaveInitPageResult.pageid, bvReady = !0, processQueue();
            };
            videojsRef.ready(function() {
                var pageData = getPageData();
                if (options.debug) console.info("[BV Reporting] Init", pageData), bvReady = !0,
                    processQueue();
                else {
                    var params = {
                        pageParams: pageData
                    };
                    options.usecustomeridentifier && options.customeridentifier && (params.customeridentifier = options.customeridentifier),
                        videojs.post("https://services.bettervideo.com/Reporting/ReportingWS.svc/saveInitPage", params, responseFn, function(error) {
                            console.warn("BV INIT PAGE ERROR", arguments);
                        });
                }
            });
        }

        function getPageData() {
            var videoData = getVideoData(),
                parser = new UAParser(),
                os = parser.getOS(),
                browser = parser.getBrowser(),
                data = {
                    br: browser.name + " " + browser.version + (browser.minor ? " " + browser.minor : ""),
                    cid: videoData.cid,
                    fv: videoData.cid,
                    os: os.name + " " + os.version,
                    ss: window.screen.width + "x" + window.screen.height,
                    title: document.title,
                    uid: uid,
                    videocount: videojsRef.playlist && videojsRef.playlist.options && videojsRef.playlist.options().items ? videojsRef.playlist.options().items.length : 1
                };
            return data;
        }

        function bvTrack(opt) {
            return args = {
                pid: playerid,
                pageid: token,
                cid: opt.category,
                vcd: opt.action,
                a: opt.label
            }, null !== opt.value ? args.val = opt.value : args.val = getTime(), options.debug ? (args.pid = "DEBUG",
                void console.info("[BV Reporting]", args)) : void videojs.post("https://services.bettervideo.com/Reporting/ReportingWS.svc/SaveEvent", {
                eventParams: args
            }, function(response) {}, function(error) {
                console.warn("BV EVENT ERROR", arguments);
            });
        }

        function getTime(round) {
            return round = void 0 === round ? !0 : round, round ? Math.round(videojsRef.currentTime()) : videojsRef.currentTime();
        }

        function getVolume() {
            return Math.round(100 * videojsRef.volume());
        }

        function getVideoData() {
            var cid, vid, type, src = videojsRef.player().currentSrc(),
                srcSplit = src.split("/"),
                filename = srcSplit[srcSplit.length - 1],
                filenameSplit = filename.split(".");
            filenameSplit.length > 2 ? (cid = options.clientID || filenameSplit[0], vid = options.siteID || filenameSplit[1],
                type = filenameSplit[2]) : (cid = options.clientID || "0", vid = options.siteID || filenameSplit[0],
                type = filenameSplit[1]);
            var returnObj = {
                cid: cid,
                vid: vid,
                filename: filename,
                ext: type
            };
            return returnObj;
        }

        function serializeToJSON(obj) {
            return JSON.stringify(obj, void 0);
        }

        function deserializeFromJSON(s) {
            return JSON.parse(s);
        }
        var uid, playerid, token, gaChecks = 0,
            gaType = 0,
            bvReady = !1,
            queue = [],
            videojsRef = null,
            lastReportedTime = 0,
            lastReportedTimePercent = 0,
            lastReportedPercent = 0,
            initialSize = !0,
            loadedAllData = !1,
            seeking = !1,
            firstPlay = !0,
            eventLimits = {
                impression: !1,
                loadedmetadata: !1,
                loadeddata: !1,
                loadedalldata: !1,
                play: !0,
                pause: !0,
                time: !0,
                end: !0,
                durationchange: !1,
                progress: !1,
                resize: !0,
                volume: !0,
                error: !0,
                fullscreen: !0,
                mute: !0,
                seek: !0,
                social: !0,
                autoplay: !0,
                autoplaymute: !0,
                autoplayunmute: !0,
                restart: !0,
                restartunmute: !0,
                playlistload: !0,
                calltoactionclose: !0,
                calltoaction: !0,
                logo: !0,
                lightson: !0,
                lightsoff: !0,
                onscreenaction: !0,
                clicktocall: !0
            },
            defaults = {
                eventLimits: eventLimits,
                gaAccounts: [],
                gaLabels: [],
                secondaryGA: null,
                secondaryLabel: "Better Video",
                debug: !1
            },
            options = {},
            bvGaAccount = "UA-42516461-1",
            cookie = {
                getExpiry: function(days) {
                    days = days || 1;
                    var d = new Date();
                    return d.setTime(d.getTime() + 24 * days * 60 * 60 * 1e3), d = d.toUTCString();
                },
                find: function(name) {
                    for (var c = document.cookie.split(";"), i = 0; i < c.length; i++)
                        if (c[i].indexOf(name) > -1) return decodeURIComponent(c[i].split("=")[1]);
                    return null;
                },
                remove: function(name) {
                    this.get(name) && this.set(name, null, -1);
                },
                set: function(name, params, days) {
                    var str = serializeToJSON(params);
                    document.cookie = name + "=" + str + "; expires=" + this.getExpiry(days) + "; path=/";
                },
                add: function(name, params, days) {
                    this.get(name) ? this.set(name, this.get(name) + "," + params, days) : this.set(name, params, days);
                },
                get: function(name) {
                    var r = new RegExp("(?:^|; )" + name + "=([^;]*)"),
                        cookieMatch = document.cookie.match(r);
                    return cookieMatch ? deserializeFromJSON(cookieMatch[1]) : void 0;
                }
            };
        videojs.JSONP || (videojs.JSONP = function(url, callback) {
            function rand() {
                for (var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", c = "", i = -1; ++i < 15;) c += chars.charAt(Math.floor(52 * Math.random()));
                return c;
            }

            function create(url) {
                var e = url.match(/callback=jsonp.(\w+)/),
                    c = e ? e[1] : rand();
                return videojs.JSONP[c] = function(data) {
                    callback(data), delete videojs.JSONP[c], docHead.removeChild(script);
                }, "videojs.JSONP." + c;
            }
            var docHead = document.getElementsByTagName("head")[0],
                cb = create(url),
                script = document.createElement("script");
            script.type = "text/javascript", script.src = url.replace(/(\{|%7B)callback(\}|%7D)/, cb),
                docHead.appendChild(script);
        }), videojs.plugin("bvReporting", function(userOptions) {
            if (console.log("[BV Reporting] ", userOptions), userOptions !== !1) {
                options = vjs.obj.merge(defaults, userOptions), "" === options.secondaryGA && (options.secondaryGA = !1),
                    options.secondaryGA && options.gaAccounts.push(options.secondaryGA);
                for (var x = 0; x < options.gaAccounts.length; x++) options.gaAccounts[x] && "" !== options.gaAccounts[x] || options.gaAccounts.splice(x, 1);
                options.usecustomeridentifier && (this.setCustomerIdentifier = function(id) {
                        options.customeridentifier = id, bvReportingInit();
                    }), videojsRef = this, checkIfAnalyticsLoaded(), options.usecustomeridentifier || bvReportingInit(),
                    this.on("loadstart", onLoadStart), this.on("loadedmetadata", onLoadedMetaData),
                    this.on("loadeddata", onLoadedData), this.on("loadedalldata", onLoadedAllData),
                    this.on("autoplay", onAutoPlay), this.on("play", onPlay), this.on("pause", onPause),
                    this.on("timeupdate", onTimeUpdate), this.on("ended", onEnded), this.on("durationchange", onDurationChange),
                    this.on("progress", onProgress), this.on("resize", onResize), this.on("error", onError),
                    this.on("fullscreenchange", onFullScreenChange), this.controlBar.progressControl ? this.controlBar.progressControl.seekBar.on("mousedown", onSeekBegin) : this.controlBar.progressControlExtended.seekBarExtended.on("mousedown", onSeekBegin),
                    this.controlBar.volumeControl.volumeSlider ? (this.controlBar.volumeControl.volumeSlider.volumeBar.on("mousedown", onVolumeBegin),
                        this.controlBar.volumeControl.muteToggle.on("mouseup", onMute), this.controlBar.volumeControl.volumeMenuButton.on("click", onMute)) : (this.controlBar.volumeControl.volumeBar.on("mousedown", onVolumeBegin),
                        this.controlBar.muteToggle.on("mouseup", onMute)), this.on("socialclick", onSocialClick),
                    this.on("autoplaymute", onAutoPlayMute), this.on("autoplayunmute", onAutoPlayUnmute),
                    this.on("restartunmute", onRestartUnmute), this.on("playlistload", onPlaylistLoad),
                    this.on("playlistautoload", onPlaylistAutoLoad), this.on("calltoactionclose", onCallToActionClose),
                    this.on("calltoaction", onCallToAction), this.on("logobutton", onLogo), this.on("raiseTheLights", onRaiseTheLights),
                    this.on("dimTheLights", onDimTheLights), this.on("onScreenActionClick", onOnScreenActionClick),
                    this.on("clickToCallClick", onClickToCallClick);
            }
        });
    }(),
    function(window, undefined) {
        "use strict";
        var EMPTY = "",
            UNKNOWN = "?",
            FUNC_TYPE = "function",
            UNDEF_TYPE = "undefined",
            OBJ_TYPE = "object",
            MAJOR = "major",
            NAME = "name",
            VERSION = "version",
            util = {
                has: function(str1, str2) {
                    return -1 !== str2.toLowerCase().indexOf(str1.toLowerCase());
                },
                lowerize: function(str) {
                    return str.toLowerCase();
                }
            },
            mapper = {
                rgx: function() {
                    for (var result, j, k, p, q, matches, match, i = 0, args = arguments; i < args.length; i += 2) {
                        var regex = args[i],
                            props = args[i + 1];
                        if (typeof result === UNDEF_TYPE) {
                            result = {};
                            for (p in props) q = props[p], typeof q === OBJ_TYPE ? result[q[0]] = undefined : result[q] = undefined;
                        }
                        for (j = k = 0; j < regex.length; j++)
                            if (matches = regex[j].exec(this.getUA())) {
                                for (p in props) match = matches[++k], q = props[p], typeof q === OBJ_TYPE && q.length > 0 ? 2 == q.length ? typeof q[1] == FUNC_TYPE ? result[q[0]] = q[1].call(this, match) : result[q[0]] = q[1] : 3 == q.length ? typeof q[1] !== FUNC_TYPE || q[1].exec && q[1].test ? result[q[0]] = match ? match.replace(q[1], q[2]) : undefined : result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined : 4 == q.length && (result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined) : result[q] = match ? match : undefined;
                                break;
                            }
                        if (matches) break;
                    }
                    return result;
                },
                str: function(str, map) {
                    for (var i in map)
                        if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                            for (var j = 0; j < map[i].length; j++)
                                if (util.has(map[i][j], str)) return i === UNKNOWN ? undefined : i;
                        } else if (util.has(map[i], str)) return i === UNKNOWN ? undefined : i;
                    return str;
                }
            },
            maps = {
                browser: {
                    oldsafari: {
                        major: {
                            "1": ["/8", "/1", "/3"],
                            "2": "/4",
                            "?": "/"
                        },
                        version: {
                            "1.0": "/8",
                            "1.2": "/1",
                            "1.3": "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            "2000": "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            "7": "NT 6.1",
                            "8": "NT 6.2",
                            RT: "ARM"
                        }
                    }
                }
            },
            regexes = {
                browser: [
                    [/(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i],
                    [NAME, VERSION, MAJOR],
                    [/\s(opr)\/((\d+)?[\w\.]+)/i],
                    [
                        [NAME, "Opera"], VERSION, MAJOR
                    ],
                    [/(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i],
                    [NAME, VERSION, MAJOR],
                    [/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i],
                    [
                        [NAME, "IE"], VERSION, MAJOR
                    ],
                    [/(yabrowser)\/((\d+)?[\w\.]+)/i],
                    [
                        [NAME, "Yandex"], VERSION, MAJOR
                    ],
                    [/(comodo_dragon)\/((\d+)?[\w\.]+)/i],
                    [
                        [NAME, /_/g, " "], VERSION, MAJOR
                    ],
                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i],
                    [NAME, VERSION, MAJOR],
                    [/(dolfin)\/((\d+)?[\w\.]+)/i],
                    [
                        [NAME, "Dolphin"], VERSION, MAJOR
                    ],
                    [/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i],
                    [
                        [NAME, "Chrome"], VERSION, MAJOR
                    ],
                    [/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i],
                    [VERSION, MAJOR, [NAME, "Mobile Safari"]],
                    [/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i],
                    [VERSION, MAJOR, NAME],
                    [/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i],
                    [NAME, [MAJOR, mapper.str, maps.browser.oldsafari.major],
                        [VERSION, mapper.str, maps.browser.oldsafari.version]
                    ],
                    [/(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i],
                    [NAME, VERSION, MAJOR],
                    [/(navigator|netscape)\/((\d+)?[\w\.-]+)/i],
                    [
                        [NAME, "Netscape"], VERSION, MAJOR
                    ],
                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i, /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i, /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i],
                    [NAME, VERSION, MAJOR]
                ],
                engine: [
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                    [NAME, VERSION],
                    [/rv\:([\w\.]+).*(gecko)/i],
                    [VERSION, NAME]
                ],
                os: [
                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                    [NAME, [VERSION, mapper.str, maps.os.windows.version]],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                        [NAME, "Windows"],
                        [VERSION, mapper.str, maps.os.windows.version]
                    ],
                    [/\((bb)(10);/i],
                    [
                        [NAME, "BlackBerry"], VERSION
                    ],
                    [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)\/([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i],
                    [NAME, VERSION],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                    [
                        [NAME, "Symbian"], VERSION
                    ],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [
                        [NAME, "Firefox OS"], VERSION
                    ],
                    [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                    [NAME, VERSION],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [
                        [NAME, "Chromium OS"], VERSION
                    ],
                    [/(sunos)\s?([\w\.]+\d)*/i],
                    [
                        [NAME, "Solaris"], VERSION
                    ],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                    [NAME, VERSION],
                    [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
                    [
                        [NAME, "iOS"],
                        [VERSION, /_/g, "."]
                    ],
                    [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i],
                    [NAME, [VERSION, /_/g, "."]],
                    [/(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i, /(unix)\s?([\w\.]+)*/i],
                    [NAME, VERSION]
                ]
            },
            UAParser = function(uastring) {
                var ua = uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);
                return this instanceof UAParser ? (this.getBrowser = function() {
                    return mapper.rgx.apply(this, regexes.browser);
                }, this.getOS = function() {
                    return mapper.rgx.apply(this, regexes.os);
                }, this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        os: this.getOS()
                    };
                }, this.getUA = function() {
                    return ua;
                }, this.setUA = function(uastring) {
                    return ua = uastring, this;
                }, void this.setUA(ua)) : new UAParser(uastring).getResult();
            };
        if (typeof exports !== UNDEF_TYPE) typeof module !== UNDEF_TYPE && module.exports && (exports = module.exports = UAParser),
            exports.UAParser = UAParser;
        else if (window.UAParser = UAParser, typeof define === FUNC_TYPE && define.amd && define(function() {
                return UAParser;
            }), typeof window.jQuery !== UNDEF_TYPE) {
            var $ = window.jQuery,
                parser = new UAParser();
            $.ua = parser.getResult(), $.ua.get = function() {
                return parser.getUA();
            }, $.ua.set = function(uastring) {
                parser.setUA(uastring);
                var result = parser.getResult();
                for (var prop in result) $.ua[prop] = result[prop];
            };
        }
    }(this),
    function() {
        var hideCSS = ".vjs-hidden-while-loading { opacity: 0; }",
            hideWhileLoadingStyle = document.createElement("style");
        hideWhileLoadingStyle.type = "text/css", hideWhileLoadingStyle.styleSheet ? hideWhileLoadingStyle.styleSheet.cssText = hideCSS : hideWhileLoadingStyle.innerHTML = hideCSS,
            document.getElementsByTagName("head")[0].appendChild(hideWhileLoadingStyle);
        var themeCssUrl, baseCssUrl, themeCSSLoaded = !1,
            windowLoaded = !1,
            head = document.getElementsByTagName("head")[0];
        themeCssUrl = "//player.bettervideo.com/dev/themes/", baseCssUrl = "//player.bettervideo.com/dev/plugins/bvPlugins.css";
        var checkForVids = function() {
                for (var videos = document.querySelectorAll(".video-js"), x = 0; x < videos.length; x++) videos[x] && videos[x].className ? classNames = videos[x].className.split(" ") : classNames = [], -1 == classNames.indexOf("vjs-hidden-while-loading") && (videos[x].className += " vjs-hidden-while-loading",
                    loadStyles(videos[x]));
                windowLoaded || (check = setTimeout(checkForVids, 1));
            },
            check = setTimeout(checkForVids, 1);
        videojs.one(window, "load", function() {
            windowLoaded = !0;
        });
        var loadStyles = function(el) {
                console.log("loading plugin css"), loadPluginCss(el), console.log("loading theme css"),
                    loadThemeCss(el);
            },
            loadThemeCss = function(el) {
                var skinTest = /([\w\d-_]*?)\-skin/.exec(el.className);
                if (console.log(skinTest), skinTest && skinTest.length) {
                    var skinName = skinTest[1].replace("vjs-", ""),
                        themeCSS = document.createElement("link");
                    themeCSS.rel = "stylesheet", themeCSS.href = themeCssUrl + skinName + ".css", themeCSSLoaded = !1,
                        isCssLoaded(themeCSS.href) || head.appendChild(themeCSS);
                }
            },
            loadPluginCss = function(el) {
                var baseCSS = document.createElement("link");
                baseCSS.rel = "stylesheet", baseCSS.href = baseCssUrl, isCssLoaded(baseCssUrl) || (head.appendChild(baseCSS),
                    loadPluginCss = function() {});
            },
            isCssLoaded = function(css) {
                for (var loadedCSS = document.querySelectorAll("link"), x = 0; x < loadedCSS.length; x++) {
                    var testStr = loadedCSS[x].href;
                    if (testStr == css) return !0;
                }
                return !1;
            };
        videojs.plugin("bvThemeLoader", function() {
            var player = this;
            windowLoaded && loadStyles(this.el()), this.loadTheme = function(skinName) {
                player.el().className = player.el().className.replace(/[\w\d-_]*?\-skin/gi, ""),
                    player.addClass(skinName + "-skin"), setTimeout(function() {
                        loadThemeCss(player.el());
                    }, 1);
            };
        });
    }(),
    function() {
        "use strict";
        videojs.CallToAction = videojs.Component.extend({
            init: function(player, options) {
                var addButton = !1;
                options.el && 1 === options.el.nodeType ? (this.contentEl_ = options.el, delete options.el) : addButton = !0,
                    videojs.Component.call(this, player, options), addButton && (this.contentEl_ = this.callToActionContainer_,
                        this.callToAction_ = this.addChild("callToActionButton", this.options_.link), this.callToAction_.on("click", videojs.bind(this, function() {
                            this.player_.trigger({
                                type: "calltoaction",
                                actionTime: this.getTime()
                            });
                        }))), this.exitButton.on("click", videojs.bind(this, function() {
                        this.player_.trigger({
                            type: "calltoactionclose",
                            actionTime: this.getTime()
                        }), this.conceal();
                    })), this.timerDisplay.length(this.options_.timer), this.player_.on("ended", videojs.bind(this, function() {
                        "Html5" == this.player_.techName || "Flash" == this.player_.techName ? this.reveal() : this.player_.playlist.autoAdvanceFn();
                    })), this.on("click", function(e) {
                        e.stopImmediatePropagation();
                    }), this.playlistAutoAdvance = !1, this.playlistCheckTimer = setTimeout(videojs.bind(this, this.playlistCheck), 1);
            }
        }), videojs.CallToAction.prototype.createEl = function() {
            var el = videojs.Component.prototype.createEl(null, {
                className: "vjs-call-to-action "
            });
            return this.contentEl_ && 1 === this.contentEl_.nodeType ? el.appendChild(this.contentEl_) : (this.title_ = videojs.createEl("h2", {
                    innerHTML: this.options_.title
                }), this.message_ = videojs.createEl("p", {
                    innerHTML: this.options_.text
                }), this.callToActionContainer_ = videojs.createEl("div", {
                    className: "link-container"
                }), el.appendChild(this.title_), el.appendChild(this.message_), el.appendChild(this.callToActionContainer_)),
                el;
        }, videojs.CallToAction.prototype.options_ = {
            title: "",
            text: "",
            link: {
                url: "",
                text: ""
            },
            el: null,
            timer: 30,
            children: {
                exitButton: {},
                timerDisplay: {
                    descriptionText: "Time till next item:",
                    timeLabel: "s"
                }
            }
        }, videojs.CallToAction.prototype.playlistCheck = function() {
            this.player_.playlist && this.player_.playlist.autoAdvanceFn ? (this.playlistAutoAdvance = !0,
                this.autoAdvanceFn = this.player_.playlist.autoAdvanceFn, videojs.off(this.player().el(), "ended", this.player_.playlist.autoAdvanceFn),
                this.timerDisplay.on("complete", videojs.bind(this, this.timerComplete))) : this.timerDisplay.hide();
        }, videojs.CallToAction.prototype.reveal = function() {
            this.show(), this.originalPlayerClasses = this.player_.el_.className, this.playlistAutoAdvance ? (this.player_.pause(),
                    this.timerDisplay.show(), this.timerDisplay.start(), this.player_.one("play", videojs.bind(this, this.conceal))) : this.player_.one("load", videojs.bind(this, this.conceal)),
                this.player_.removeClass("vjs-paused"), this.player_.removeClass("vjs-ended"), this.player_.addClass("vjs-playing");
        }, videojs.CallToAction.prototype.conceal = function() {
            this.hide(), this.timerDisplay.cancel();
        }, videojs.CallToAction.prototype.timerComplete = function() {
            this.hide(), videojs.bind(this.player_.playlist, this.autoAdvanceFn)();
        }, videojs.CallToAction.prototype.getTime = function() {
            this.timerDisplay.time_;
        }, videojs.CallToActionButton = videojs.Button.extend({
            init: function(player, options) {
                videojs.Button.call(this, player, options), this.name_ = "callToActionButton";
            }
        }), videojs.CallToActionButton.prototype.createEl = function() {
            var props = {
                    className: "",
                    innerHTML: this.options_.text,
                    role: "button",
                    "aria-live": "polite",
                    tabIndex: 0
                },
                el = videojs.Component.prototype.createEl("a", props);
            return el.style.cursor = "pointer", el;
        }, videojs.CallToActionButton.prototype.onClick = function() {
            this.options_.url && window.open(this.options_.url, "CallToAction");
        }, videojs.TimerDisplay = videojs.Component.extend({
            init: function(player, options) {
                videojs.Component.call(this, player, options), this.pauseButton.on("click", videojs.bind(this, this.cancel));
            }
        }), videojs.TimerDisplay.prototype.options_ = {
            descriptionText: "",
            timeLabel: "seconds",
            children: {
                pauseButton: {}
            }
        }, videojs.TimerDisplay.prototype.createEl = function() {
            var el = videojs.Component.prototype.createEl(null, {
                className: this.buildCSSClass()
            });
            return this.descriptionText_ = videojs.Component.prototype.createEl("span", {
                innerHTML: this.options_.descriptionText
            }), this.timerText_ = videojs.Component.prototype.createEl("span", {
                className: "vjs-time-left"
            }), el.appendChild(this.descriptionText_), el.appendChild(this.timerText_), el;
        }, videojs.TimerDisplay.prototype.buildCSSClass = function() {
            return "vjs-display-timer " + vjs.Component.prototype.buildCSSClass.call(this);
        }, videojs.TimerDisplay.prototype.length = function() {
            return arguments.length && (this.options_.length = arguments[0]), this.options_.length;
        }, videojs.TimerDisplay.prototype.start = function() {
            this.clear(), this.el().style.visibility = "visible", this.time_ = this.options_.length,
                this.play();
        }, videojs.TimerDisplay.prototype.play = function() {
            this.update(), this.timer_ = setInterval(videojs.bind(this, this.update), 1e3);
        }, videojs.TimerDisplay.prototype.pause = function() {
            this.clear();
        }, videojs.TimerDisplay.prototype.cancel = function() {
            this.clear(), this.time_ = 0, this.el().style.visibility = "hidden";
        }, videojs.TimerDisplay.prototype.clear = function() {
            clearInterval(this.timer_);
        }, videojs.TimerDisplay.prototype.update = function() {
            this.timerText_.innerHTML = this.time_ + this.options_.timeLabel, this.time_--,
                this.time_ <= 0 && (this.clear(), this.trigger("complete", {}));
        };
    }(),
    function() {
        videojs.plugin("callToAction", function(options) {
            options = options || {}, (options.link && options.title || options.el) && (options.el ? "string" == typeof options.el && document.getElementById(options.el.replace("#", "")) ? (options.el = document.getElementById(options.el.replace("#", "")),
                this.callToAction = this.addChild("callToAction", options)) : 1 === options.el.nodeType ? this.callToAction = this.addChild("callToAction", options) : console.warn("VideoJs.CallToAction Aborting: Invalid element specified, neither html element or element id") : this.callToAction = this.addChild("callToAction", options));
        });
    }(),
    function() {
        "use strict";
        videojs.ClickToCall = videojs.Component.extend({
            init: function(player, options) {
                videojs.Component.call(this, player, options), console.log("CLICK TO CALL", this.el_),
                    this.player().el().appendChild(this.el_), this.exitButton.on("click", videojs.bind(this, function() {
                        this.player_.trigger({
                            type: "clicktocallclose",
                            actionTime: this.player_.currentTime()
                        }), this.hide();
                    })), this.callButton.on("click", videojs.bind(this, function() {
                        this.show();
                    })), this.on("click", function(e) {
                        e.stopImmediatePropagation(), this.player().trigger({
                            type: "clickToCall",
                            label: this.options_.number
                        });
                    });
            }
        }), videojs.ClickToCall.prototype.createEl = function() {
            var el = videojs.Component.prototype.createEl(null, {
                    className: "vjs-click-to-call "
                }),
                action = videojs.TOUCH_ENABLED ? "Press" : "Click";
            return el.innerHTML = '<a href="tel:' + this.options_.number + '" title="' + action + " here to call " + this.options_.number + '">' + action + ' here to call: <br /><span class="vjs-click-to-call-number">' + this.options_.number + "</span></a>",
                el;
        }, videojs.ClickToCall.prototype.options_ = {
            title: "",
            text: "",
            link: {
                url: "",
                text: ""
            },
            el: null,
            children: {
                exitButton: {},
                callButton: {}
            }
        }, videojs.ClickToCall.prototype.hide = function() {
            this.addClass("bv-hidden");
        }, videojs.ClickToCall.prototype.show = function() {
            this.removeClass("bv-hidden");
        }, videojs.CallButton = videojs.Button.extend({
            init: function(player, options) {
                videojs.Component.call(this, player, options);
            }
        }), videojs.CallButton.prototype.buttonText = "Exit", videojs.CallButton.prototype.buildCSSClass = function() {
            return "vjs-control vjs-call-button bv-phone bv-hidden" + vjs.Component.prototype.buildCSSClass.call(this);
        }, videojs.CallButton.prototype.onClick = function() {};
    }(),
    function() {
        videojs.plugin("clickToCall", function(options) {
            options = options || {}, this.clickToCall = this.addChild("clickToCall", options);
        });
    }(),
    function() {
        var triggerEvent = function(target, type, doc, event) {
            doc = document, doc.createEvent ? (event = new Event(type), target.dispatchEvent(event)) : (event = doc.createEventObject(),
                target.fireEvent("on" + type, event));
        };
        videojs.CustomEventButton = videojs.Button.extend({
            init: function(player, options) {
                videojs.Button.call(this, player, options), this.mainEl_ = this.player_.el(), console.log("CUSTOM EVENT", this.contentEl_),
                    videojs.on(window, this.options_.event_name, function(evt) {
                        console.log("IN IT: ", evt);
                    });
            }
        }), videojs.CustomEventButton.prototype.buttonText = "Custom Button", videojs.CustomEventButton.prototype.createEl = function(type, props) {
            var el = vjs.Button.prototype.createEl.call(this, type, props);
            return el;
        }, videojs.CustomEventButton.prototype.buildCSSClass = function() {
            return "vjs-custom-event-button " + this.options_.icon + " " + vjs.Button.prototype.buildCSSClass.call(this);
        }, videojs.CustomEventButton.prototype.onClick = function() {
            console.log("CUSTOM EVENT click"), triggerEvent(window, this.options_.event_name);
        }, videojs.plugin("customEventButton", function(options) {
            if (console.log(this.controlBar), videojs.obj.isArray(options))
                for (var x = 0; x < options.length; x++) this.controlBar.addChild("CustomEventButton", options[x]);
            else this.controlBar.addChild("CustomEventButton", options);
        });
    }(),
    function() {
        videojs.DimTheLightsToggle = videojs.Button.extend({
                init: function(player, options) {
                    try {
                        if (window.self !== window.top) return;
                    } catch (e) {}
                    videojs.Button.call(this, player, options);
                    var playerEl = this.player_.el();
                    this.mainEl_ = playerEl, this.mainEl_.parentNode.appendChild(this.overlay_), videojs.on(this.overlay_, "click", videojs.bind(this, this.raiseTheLights));
                }
            }), videojs.DimTheLightsToggle.prototype.isDim = !1, videojs.DimTheLightsToggle.prototype.buttonText = "Dim The Lights",
            videojs.DimTheLightsToggle.prototype.createEl = function(type, props) {
                return this.overlay_ = videojs.createEl("div", {
                    className: "vjs-dim-overlay"
                }), vjs.Button.prototype.createEl.call(this, type, props);
            }, videojs.DimTheLightsToggle.prototype.buildCSSClass = function() {
                return "vjs-dim-the-lights bv-lightbulb " + vjs.Button.prototype.buildCSSClass.call(this);
            }, videojs.DimTheLightsToggle.prototype.onClick = function() {
                this.isDim ? this.raiseTheLights() : (this.dimTheLights(), videojs.one(document, "keyup", videojs.bind(this, function(evt) {
                    27 == evt.keyCode && this.raiseTheLights();
                })));
            }, videojs.DimTheLightsToggle.prototype.dimTheLights = function() {
                this.isDim = !0, this.mainEl_.className += " vjs-dim-focus", this.overlay_.style.display = "block",
                    setTimeout(videojs.bind(this, function() {
                        this.overlay_.className += " vjs-dim-off";
                    }), 10), this.el_.className += " vjs-dim-toggle", this.player_.trigger({
                        type: "dimTheLights"
                    });
            }, videojs.DimTheLightsToggle.prototype.raiseTheLights = function() {
                this.isDim = !1, this.mainEl_.className = this.mainEl_.className.replace(/\s?vjs\-dim\-focus/gi, ""),
                    this.overlay_.style.display = "none", this.overlay_.className = this.overlay_.className.replace(/\s?vjs\-dim\-off/gi, ""),
                    this.el_.className = this.el_.className.replace(/\s?vjs\-dim\-toggle/gi, ""), this.player_.trigger({
                        type: "raiseTheLights"
                    });
            }, videojs.plugin("dimTheLights", function(options) {
                this.controlBar.addChild("dimTheLightsToggle", {});
            });
    }(),
    function() {
        var defaults, extend;
        defaults = {
            messages: {
                1: "The video download was cancelled",
                2: "The video connection was lost, please confirm you're connected to the internet",
                3: "The video is bad or in a format that can't be played on your browser",
                4: "This video is either unavailable or not supported in this browser",
                5: "The video you're trying to watch is encrypted and we don't know how to decrypt it",
                unknown: "An unanticipated problem was encountered, check back soon and try again"
            }
        }, extend = function(obj) {
            var arg, prop, source;
            for (arg in arguments) {
                source = arguments[arg];
                for (prop in source) source[prop] && "object" == typeof source[prop] ? obj[prop] = extend(obj[prop] || {}, source[prop]) : obj[prop] = source[prop];
            }
            return obj;
        }, videojs.plugin("errors", function(options) {
            var addEventListener, messages, settings;
            settings = extend(defaults, options), messages = settings.messages, addEventListener = this.el().addEventListener || this.el().attachEvent,
                this.on("error", function(event) {
                    var code, dialog, player;
                    player = this, code = event.target.error ? event.target.error.code : event.code,
                        dialog = document.createElement("div"), dialog.className = "vjs-error-dialog", dialog.textContent = messages[code] || messages.unknown,
                        addEventListener.call(dialog, "click", function(event) {
                            player.el().removeChild(dialog);
                        }, !1), player.el().appendChild(dialog);
                });
        });
    }(),
    function() {
        var hideControls = function() {
            this.on("pause", function() {});
        };
        videojs.plugin("hideControlsOnPause", hideControls), videojs.plugin("bvHideControlBarOnPause", function(opts) {
            console.warn('Deprecated: "bvHideControlBarOnPause" is deprecated. Use "hideControlsOnPause" instead.'),
                videojs.bind(this, hideControls)(opts);
        });
    }(),
    function() {
        videojs.LogoButton = videojs.Button.extend({
            init: function(player, options) {
                videojs.Button.call(this, player, options), this.name_ = "logoButton";
            }
        }), videojs.LogoButton.prototype.createEl = function() {
            var props = {
                    className: " vjs-logo-control vjs-control",
                    role: "button",
                    "aria-live": "polite",
                    tabIndex: 0
                },
                el = videojs.Component.prototype.createEl(null, props);
            return this.contentEl_ = videojs.Component.prototype.createEl("div", {
                    className: "vjs-control-content",
                    innerHTML: '<span class="vjs-control-text">' + this.options_.alt + "</span>"
                }), this.imageEl_ = videojs.Component.prototype.createEl("img", {
                    src: this.options_.src
                }), videojs.one(this.imageEl_, "error", videojs.bind(this, function() {
                    this.imageEl_.src = this.imageEl_.src.replace("logos/", "logos/WHI/");
                })), this.contentEl_.appendChild(this.imageEl_), this.options_.url && "" !== this.options_.url && (el.style.cursor = "pointer"),
                el.style.width = "auto", el.appendChild(this.contentEl_), el;
        }, videojs.LogoButton.prototype.onClick = function() {
            this.options_.url && (window.open(this.options_.url, "Website"), this.player_.trigger({
                type: "logobutton"
            }));
        };
        var logoButton = function(options) {
            var logoControl = this.controlBar.addChild("logoButton", options);
            this.controlBar.el().insertBefore(logoControl.el(), this.controlBar.el().childNodes[0]);
        };
        videojs.plugin("logoButton", logoButton), videojs.plugin("logo", function(options) {
            console.warn('Deprecated: "logo" is deprecated. Use "logoButton" instead.'), videojs.bind(this, logoButton)(options);
        });
    }(),
    function() {
        "use strict";
        videojs.OnScreenAction = videojs.Component.extend({
            init: function(player, options) {
                console.log("IN HERE", options), this.options_.children.onScreenActionButton.icon = options.icon,
                    videojs.Component.call(this, player, options), this.player().el().appendChild(this.el_),
                    this.exitButton.on("click", videojs.bind(this, function() {
                        this.player_.trigger({
                            type: "onscreenactionclose",
                            actionTime: this.player_.currentTime()
                        }), this.hide();
                    })), this.onScreenActionButton.on("click", videojs.bind(this, function() {
                        this.show();
                    })), this.on("click", function(e) {
                        e.stopImmediatePropagation(), this.player().trigger({
                            type: "onScreenActionClick",
                            label: this.options_.link.text
                        });
                    });
            }
        }), videojs.OnScreenAction.prototype.createEl = function() {
            var el = videojs.Component.prototype.createEl(null, {
                className: "vjs-on-screen-action "
            });
            videojs.TOUCH_ENABLED ? "Press" : "Click";
            return el.innerHTML = '<a href="' + this.options_.link.url + '" title="' + this.options_.link.text + '" target="_blank">' + this.options_.link.text + "</a>",
                el;
        }, videojs.OnScreenAction.prototype.options_ = {
            title: "",
            text: "",
            link: {
                url: "",
                text: ""
            },
            el: null,
            children: {
                exitButton: {},
                onScreenActionButton: {}
            }
        }, videojs.OnScreenAction.prototype.hide = function() {
            this.addClass("bv-hidden");
        }, videojs.OnScreenAction.prototype.show = function() {
            this.removeClass("bv-hidden");
        }, videojs.OnScreenActionButton = videojs.Button.extend({
            init: function(player, options) {
                videojs.Component.call(this, player, options);
            }
        }), videojs.OnScreenActionButton.prototype.buttonText = "", videojs.OnScreenActionButton.prototype.buildCSSClass = function() {
            return "vjs-control vjs-call-button bv-" + this.options_.icon + " bv-hidden" + vjs.Component.prototype.buildCSSClass.call(this);
        }, videojs.OnScreenActionButton.prototype.onClick = function() {};
    }(),
    function() {
        videojs.plugin("onScreenAction", function(options) {
            options = options || {}, console.log(options), this.onScreenAction = this.addChild("onScreenAction", options),
                console.log(this.OnScreenAction);
        });
    }(),
    function() {
        function N(p, r) {
            function q(a) {
                if (q[a] !== w) return q[a];
                var c;
                if ("bug-string-char-index" == a) c = "a" != "a" [0];
                else if ("json" == a) c = q("json-stringify") && q("json-parse");
                else {
                    var e;
                    if ("json-stringify" == a) {
                        c = r.stringify;
                        var b = "function" == typeof c && s;
                        if (b) {
                            (e = function() {
                                return 1;
                            }).toJSON = e;
                            try {
                                b = "0" === c(0) && "0" === c(new t()) && '""' == c(new A()) && c(u) === w && c(w) === w && c() === w && "1" === c(e) && "[1]" == c([e]) && "[null]" == c([w]) && "null" == c(null) && "[null,null,null]" == c([w, u, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == c({
                                    a: [e, !0, !1, null, "\x00\b\n\f\r	"]
                                }) && "1" === c(null, e) && "[\n 1,\n 2\n]" == c([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == c(new C(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == c(new C(864e13)) && '"-000001-01-01T00:00:00.000Z"' == c(new C(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == c(new C(-1));
                            } catch (f) {
                                b = !1;
                            }
                        }
                        c = b;
                    }
                    if ("json-parse" == a) {
                        if (c = r.parse, "function" == typeof c) try {
                            if (0 === c("0") && !c(!1)) {
                                e = c('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                                var n = 5 == e.a.length && 1 === e.a[0];
                                if (n) {
                                    try {
                                        n = !c('"	"');
                                    } catch (d) {}
                                    if (n) try {
                                        n = 1 !== c("01");
                                    } catch (g) {}
                                    if (n) try {
                                        n = 1 !== c("1.");
                                    } catch (m) {}
                                }
                            }
                        } catch (X) {
                            n = !1;
                        }
                        c = n;
                    }
                }
                return q[a] = !!c;
            }
            p || (p = k.Object()), r || (r = k.Object());
            var t = p.Number || k.Number,
                A = p.String || k.String,
                H = p.Object || k.Object,
                C = p.Date || k.Date,
                G = p.SyntaxError || k.SyntaxError,
                K = p.TypeError || k.TypeError,
                L = p.Math || k.Math,
                I = p.JSON || k.JSON;
            "object" == typeof I && I && (r.stringify = I.stringify, r.parse = I.parse);
            var v, B, w, H = H.prototype,
                u = H.toString,
                s = new C(-0xc782b5b800cec);
            try {
                s = -109252 == s.getUTCFullYear() && 0 === s.getUTCMonth() && 1 === s.getUTCDate() && 10 == s.getUTCHours() && 37 == s.getUTCMinutes() && 6 == s.getUTCSeconds() && 708 == s.getUTCMilliseconds();
            } catch (Q) {}
            if (!q("json")) {
                var D = q("bug-string-char-index");
                if (!s) var x = L.floor,
                    M = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                    E = function(a, c) {
                        return M[c] + 365 * (a - 1970) + x((a - 1969 + (c = +(c > 1))) / 4) - x((a - 1901 + c) / 100) + x((a - 1601 + c) / 400);
                    };
                if ((v = H.hasOwnProperty) || (v = function(a) {
                        var e, c = {};
                        return (c.__proto__ = null, c.__proto__ = {
                            toString: 1
                        }, c).toString != u ? v = function(a) {
                            var c = this.__proto__;
                            return a = a in (this.__proto__ = null, this), this.__proto__ = c, a;
                        } : (e = c.constructor, v = function(a) {
                            var c = (this.constructor || e).prototype;
                            return a in this && !(a in c && this[a] === c[a]);
                        }), c = null, v.call(this, a);
                    }), B = function(a, c) {
                        var b, f, n, e = 0;
                        (b = function() {
                            this.valueOf = 0;
                        }).prototype.valueOf = 0, f = new b();
                        for (n in f) v.call(f, n) && e++;
                        return b = f = null, e ? B = 2 == e ? function(a, c) {
                            var f, e = {},
                                b = "[object Function]" == u.call(a);
                            for (f in a) b && "prototype" == f || v.call(e, f) || !(e[f] = 1) || !v.call(a, f) || c(f);
                        } : function(a, c) {
                            var b, f, e = "[object Function]" == u.call(a);
                            for (b in a) e && "prototype" == b || !v.call(a, b) || (f = "constructor" === b) || c(b);
                            (f || v.call(a, b = "constructor")) && c(b);
                        } : (f = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),
                            B = function(a, c) {
                                var b, e = "[object Function]" == u.call(a),
                                    h = !e && "function" != typeof a.constructor && F[typeof a.hasOwnProperty] && a.hasOwnProperty || v;
                                for (b in a) e && "prototype" == b || !h.call(a, b) || c(b);
                                for (e = f.length; b = f[--e]; h.call(a, b) && c(b));
                            }), B(a, c);
                    }, !q("json-stringify")) {
                    var U = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        },
                        y = function(a, c) {
                            return ("000000" + (c || 0)).slice(-a);
                        },
                        R = function(a) {
                            for (var c = '"', b = 0, h = a.length, f = !D || h > 10, n = f && (D ? a.split("") : a); h > b; b++) {
                                var d = a.charCodeAt(b);
                                switch (d) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        c += U[d];
                                        break;

                                    default:
                                        if (32 > d) {
                                            c += "\\u00" + y(2, d.toString(16));
                                            break;
                                        }
                                        c += f ? n[b] : a.charAt(b);
                                }
                            }
                            return c + '"';
                        },
                        O = function(a, c, b, h, f, n, d) {
                            var g, m, k, l, p, r, s, t, q;
                            try {
                                g = c[a];
                            } catch (z) {}
                            if ("object" == typeof g && g)
                                if (m = u.call(g), "[object Date]" != m || v.call(g, "toJSON")) "function" == typeof g.toJSON && ("[object Number]" != m && "[object String]" != m && "[object Array]" != m || v.call(g, "toJSON")) && (g = g.toJSON(a));
                                else if (g > -1 / 0 && 1 / 0 > g) {
                                if (E) {
                                    for (l = x(g / 864e5), m = x(l / 365.2425) + 1970 - 1; E(m + 1, 0) <= l; m++);
                                    for (k = x((l - E(m, 0)) / 30.42); E(m, k + 1) <= l; k++);
                                    l = 1 + l - E(m, k), p = (g % 864e5 + 864e5) % 864e5, r = x(p / 36e5) % 24, s = x(p / 6e4) % 60,
                                        t = x(p / 1e3) % 60, p %= 1e3;
                                } else m = g.getUTCFullYear(), k = g.getUTCMonth(), l = g.getUTCDate(), r = g.getUTCHours(),
                                    s = g.getUTCMinutes(), t = g.getUTCSeconds(), p = g.getUTCMilliseconds();
                                g = (0 >= m || m >= 1e4 ? (0 > m ? "-" : "+") + y(6, 0 > m ? -m : m) : y(4, m)) + "-" + y(2, k + 1) + "-" + y(2, l) + "T" + y(2, r) + ":" + y(2, s) + ":" + y(2, t) + "." + y(3, p) + "Z";
                            } else g = null;
                            if (b && (g = b.call(c, a, g)), null === g) return "null";
                            if (m = u.call(g), "[object Boolean]" == m) return "" + g;
                            if ("[object Number]" == m) return g > -1 / 0 && 1 / 0 > g ? "" + g : "null";
                            if ("[object String]" == m) return R("" + g);
                            if ("object" == typeof g) {
                                for (a = d.length; a--;)
                                    if (d[a] === g) throw K();
                                if (d.push(g), q = [], c = n, n += f, "[object Array]" == m) {
                                    for (k = 0, a = g.length; a > k; k++) m = O(k, g, b, h, f, n, d), q.push(m === w ? "null" : m);
                                    a = q.length ? f ? "[\n" + n + q.join(",\n" + n) + "\n" + c + "]" : "[" + q.join(",") + "]" : "[]";
                                } else B(h || g, function(a) {
                                    var c = O(a, g, b, h, f, n, d);
                                    c !== w && q.push(R(a) + ":" + (f ? " " : "") + c);
                                }), a = q.length ? f ? "{\n" + n + q.join(",\n" + n) + "\n" + c + "}" : "{" + q.join(",") + "}" : "{}";
                                return d.pop(), a;
                            }
                        };
                    r.stringify = function(a, c, b) {
                        var h, f, n, d;
                        if (F[typeof c] && c)
                            if ("[object Function]" == (d = u.call(c))) f = c;
                            else if ("[object Array]" == d) {
                            n = {};
                            for (var l, g = 0, k = c.length; k > g; l = c[g++], d = u.call(l), ("[object String]" == d || "[object Number]" == d) && (n[l] = 1));
                        }
                        if (b)
                            if ("[object Number]" == (d = u.call(b))) {
                                if (0 < (b -= b % 1))
                                    for (h = "", b > 10 && (b = 10); h.length < b; h += " ");
                            } else "[object String]" == d && (h = 10 >= b.length ? b : b.slice(0, 10));
                        return O("", (l = {}, l[""] = a, l), f, n, h, "", []);
                    };
                }
                if (!q("json-parse")) {
                    var b, J, V = A.fromCharCode,
                        W = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "	",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        },
                        l = function() {
                            throw b = J = null, G();
                        },
                        z = function() {
                            for (var e, h, f, k, d, a = J, c = a.length; c > b;) switch (d = a.charCodeAt(b)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    b++;
                                    break;

                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return e = D ? a.charAt(b) : a[b], b++, e;

                                case 34:
                                    for (e = "@", b++; c > b;)
                                        if (d = a.charCodeAt(b), 32 > d) l();
                                        else if (92 == d) switch (d = a.charCodeAt(++b)) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                            e += W[d], b++;
                                            break;

                                        case 117:
                                            for (h = ++b, f = b + 4; f > b; b++) d = a.charCodeAt(b), d >= 48 && 57 >= d || d >= 97 && 102 >= d || d >= 65 && 70 >= d || l();
                                            e += V("0x" + a.slice(h, b));
                                            break;

                                        default:
                                            l();
                                    } else {
                                        if (34 == d) break;
                                        for (d = a.charCodeAt(b), h = b; d >= 32 && 92 != d && 34 != d;) d = a.charCodeAt(++b);
                                        e += a.slice(h, b);
                                    }
                                    if (34 == a.charCodeAt(b)) return b++, e;
                                    l();

                                default:
                                    if (h = b, 45 == d && (k = !0, d = a.charCodeAt(++b)), d >= 48 && 57 >= d) {
                                        for (48 == d && (d = a.charCodeAt(b + 1), d >= 48 && 57 >= d) && l(); c > b && (d = a.charCodeAt(b),
                                                d >= 48 && 57 >= d); b++);
                                        if (46 == a.charCodeAt(b)) {
                                            for (f = ++b; c > f && (d = a.charCodeAt(f), d >= 48 && 57 >= d); f++);
                                            f == b && l(), b = f;
                                        }
                                        if (d = a.charCodeAt(b), 101 == d || 69 == d) {
                                            for (d = a.charCodeAt(++b), 43 != d && 45 != d || b++, f = b; c > f && (d = a.charCodeAt(f),
                                                    d >= 48 && 57 >= d); f++);
                                            f == b && l(), b = f;
                                        }
                                        return +a.slice(h, b);
                                    }
                                    if (k && l(), "true" == a.slice(b, b + 4)) return b += 4, !0;
                                    if ("false" == a.slice(b, b + 5)) return b += 5, !1;
                                    if ("null" == a.slice(b, b + 4)) return b += 4, null;
                                    l();
                            }
                            return "$";
                        },
                        P = function(a) {
                            var c, b;
                            if ("$" == a && l(), "string" == typeof a) {
                                if ("@" == (D ? a.charAt(0) : a[0])) return a.slice(1);
                                if ("[" == a) {
                                    for (c = []; a = z(), "]" != a; b || (b = !0)) b && ("," == a ? (a = z(), "]" == a && l()) : l()),
                                        "," == a && l(), c.push(P(a));
                                    return c;
                                }
                                if ("{" == a) {
                                    for (c = {}; a = z(), "}" != a; b || (b = !0)) b && ("," == a ? (a = z(), "}" == a && l()) : l()),
                                        "," != a && "string" == typeof a && "@" == (D ? a.charAt(0) : a[0]) && ":" == z() || l(),
                                        c[a.slice(1)] = P(z());
                                    return c;
                                }
                                l();
                            }
                            return a;
                        },
                        T = function(a, b, e) {
                            e = S(a, b, e), e === w ? delete a[b] : a[b] = e;
                        },
                        S = function(a, b, e) {
                            var f, h = a[b];
                            if ("object" == typeof h && h)
                                if ("[object Array]" == u.call(h))
                                    for (f = h.length; f--;) T(h, f, e);
                                else B(h, function(a) {
                                    T(h, a, e);
                                });
                            return e.call(a, b, h);
                        };
                    r.parse = function(a, c) {
                        var e, h;
                        return b = 0, J = "" + a, e = P(z()), "$" != z() && l(), b = J = null, c && "[object Function]" == u.call(c) ? S((h = {},
                            h[""] = e, h), "", c) : e;
                    };
                }
            }
            return r.runInContext = N, r;
        }
        var K = "function" == typeof define && define.amd,
            F = {
                "function": !0,
                object: !0
            },
            G = F[typeof exports] && exports && !exports.nodeType && exports,
            k = F[typeof window] && window || this,
            t = G && F[typeof module] && module && !module.nodeType && "object" == typeof global && global;
        if (!t || t.global !== t && t.window !== t && t.self !== t || (k = t), G && !K) N(k, G);
        else {
            var L = k.JSON,
                Q = k.JSON3,
                M = !1,
                A = N(k, k.JSON3 = {
                    noConflict: function() {
                        return M || (M = !0, k.JSON = L, k.JSON3 = Q, L = Q = null), A;
                    }
                });
            k.JSON = {
                parse: A.parse,
                stringify: A.stringify
            };
        }
        K && define(function() {
            return A;
        });
    }.call(this), Array.prototype.indexOf || (Array.prototype.indexOf = function(searchElement, fromIndex) {
        var k;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var O = Object(this),
            len = O.length >>> 0;
        if (0 === len) return -1;
        var n = +fromIndex || 0;
        if (Math.abs(n) === 1 / 0 && (n = 0), n >= len) return -1;
        for (k = Math.max(n >= 0 ? n : len - Math.abs(n), 0); len > k;) {
            if (k in O && O[k] === searchElement) return k;
            k++;
        }
        return -1;
    }), document.all && !window.setTimeout.isPolyfill) {
    var __nativeST__ = window.setTimeout;
    window.setTimeout = function(vCallback, nDelay) {
        var aArgs = Array.prototype.slice.call(arguments, 2);
        return __nativeST__(vCallback instanceof Function ? function() {
            vCallback.apply(null, aArgs);
        } : vCallback, nDelay);
    }, window.setTimeout.isPolyfill = !0;
}

if (document.all && !window.setInterval.isPolyfill) {
    var __nativeSI__ = window.setInterval;
    window.setInterval = function(vCallback, nDelay) {
        var aArgs = Array.prototype.slice.call(arguments, 2);
        return __nativeSI__(vCallback instanceof Function ? function() {
            vCallback.apply(null, aArgs);
        } : vCallback, nDelay);
    }, window.setInterval.isPolyfill = !0;
}

videojs.PlaylistPrevious = videojs.Button.extend({
        init: function(player, options) {
            videojs.Button.call(this, player, options), this.on("mousedown", videojs.bind(this, this.onMouseDown));
        }
    }), videojs.PlaylistPrevious.prototype.createEl = function(type, props) {
        return vjs.Button.prototype.createEl.call(this, "div", vjs.obj.merge({
            className: "vjs-playlist-previous",
            innerHTML: '<i class="bv-up-open"></i>'
        }, props));
    }, videojs.PlaylistPrevious.prototype.onMouseDown = function() {
        console.log("PREVIOUS DOWN"), videojs.one(document.body, "mouseup", videojs.bind(this, this.onMouseUp)),
            this.moveIncrement_ = -4, this.clickAndHoldTimer_ = setTimeout(videojs.bind(this, this.onClickAndHold), 100),
            this.player().playlist.userInteraction(!0);
    }, videojs.PlaylistPrevious.prototype.onMouseUp = function() {
        clearTimeout(this.clickAndHoldTimer_), clearTimeout(this.moveTimer_), clearTimeout(this.moveIncrementTimer_);
    }, videojs.PlaylistPrevious.prototype.onClickAndHold = function() {
        this.clickAndHold = !0, this.moveIncrementTimer_ = setTimeout(videojs.bind(this, function() {
            this.moveIncrement_ = -8;
        }), 5e3), this.doClickAndHold_();
    }, videojs.PlaylistPrevious.prototype.doClickAndHold_ = function() {
        this.player().playlist.moveBy(this.moveIncrement_), this.moveTimer_ = setTimeout(videojs.bind(this, this.doClickAndHold_), 10);
    }, videojs.PlaylistPrevious.prototype.onClick = function() {
        this.clickAndHold_ || this.player().playlist.moveToPrevious(), this.clickAndHold = !1;
    }, videojs.PlaylistNext = videojs.Button.extend({
        init: function(player, options) {
            videojs.Button.call(this, player, options), this.on("mousedown", videojs.bind(this, this.onMouseDown));
        }
    }), videojs.PlaylistNext.prototype.createEl = function(type, props) {
        return vjs.Button.prototype.createEl.call(this, "div", vjs.obj.merge({
            className: "vjs-playlist-next",
            innerHTML: '<i class="bv-down-open"></i>'
        }, props));
    }, videojs.PlaylistNext.prototype.onMouseDown = function() {
        videojs.one(document.body, "mouseup", videojs.bind(this, this.onMouseUp)), this.moveIncrement_ = 4,
            this.clickAndHoldTimer_ = setTimeout(videojs.bind(this, this.onClickAndHold), 100),
            this.player().playlist.userInteraction(!0);
    }, videojs.PlaylistNext.prototype.onMouseUp = function() {
        clearTimeout(this.clickAndHoldTimer_), clearTimeout(this.moveTimer_), clearTimeout(this.moveIncrementTimer_);
    }, videojs.PlaylistNext.prototype.onClickAndHold = function() {
        this.clickAndHold = !0, this.moveIncrementTimer_ = setTimeout(videojs.bind(this, function() {
            this.moveIncrement_ = 8;
        }), 5e3), this.doClickAndHold_();
    }, videojs.PlaylistNext.prototype.doClickAndHold_ = function() {
        this.player().playlist.moveBy(this.moveIncrement_), this.moveTimer_ = setTimeout(videojs.bind(this, this.doClickAndHold_), 10);
    }, videojs.PlaylistNext.prototype.onClick = function() {
        this.clickAndHold_ || this.player().playlist.moveToNext(), this.clickAndHold = !1;
    }, vjs.AdvancePlaylist = vjs.Button.extend({
        init: function(player, options) {
            vjs.Button.call(this, player, options);
        }
    }), vjs.AdvancePlaylist.prototype.buttonText = "Next Item", vjs.AdvancePlaylist.prototype.buildCSSClass = function() {
        return "bv-step-forward " + vjs.Button.prototype.buildCSSClass.call(this);
    }, vjs.AdvancePlaylist.prototype.onClick = function() {
        this.player().playlist.loadNext(), this.player().play();
    }, vjs.RegressPlaylist = vjs.Button.extend({
        init: function(player, options) {
            vjs.Button.call(this, player, options);
        }
    }), vjs.RegressPlaylist.prototype.buttonText = "Previous Item", vjs.RegressPlaylist.prototype.buildCSSClass = function() {
        return "bv-step-backward " + vjs.Button.prototype.buildCSSClass.call(this);
    }, vjs.RegressPlaylist.prototype.onClick = function() {
        this.player().playlist.loadPrevious(), this.player().play();
    }, vjs.PlaceholderButton = vjs.Button.extend({
        init: function(player, options) {
            vjs.Button.call(this, player, options), this.el_.style.opacity = 0;
        }
    }), vjs.PlaceholderButton.prototype.buttonText = "", vjs.PlaceholderButton.prototype.buildCSSClass = function() {
        return "vjs-empty-button " + vjs.Button.prototype.buildCSSClass.call(this);
    }, vjs.PlaceholderButton.prototype.onClick = function() {}, videojs.PlaylistItem = videojs.Button.extend({
        init: function(player, options) {
            videojs.Component.call(this, player, options), this.loaded = !1;
            var touchstart = !1;
            this.on("touchstart", function(event) {
                touchstart = !0;
            }), this.on("touchmove", function() {
                touchstart = !1;
            });
            var self = this;
            this.on("touchend", function(event) {
                touchstart && self.onClick(event), event.preventDefault();
            }), this.on("click", this.onClick), this.on("focus", this.onFocus), this.on("blur", this.onBlur);
            var typeStr = this.options_.type || this.options_.media[Object.keys(this.options_.media)[0]].source[0].type;
            this.addClass(typeStr.substr(0, typeStr.indexOf("/")));
        }
    }), videojs.PlaylistItem.prototype.onFocus = function() {
        console.log("FOCUS"), videojs.Button.prototype.onFocus.apply(this, arguments);
    }, videojs.PlaylistItem.prototype.createEl = function(type, props) {
        var el = vjs.Component.prototype.createEl.call(this, "li", vjs.obj.merge({
            className: "vjs-playlist-item vjs-item-placeholder ",
            innerHTML: ""
        }, props));
        return this.image_ = vjs.Component.prototype.createEl.call(this, "img", {
                src: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            }), el.appendChild(this.image_), this.image_.removeAttribute("height"), this.image_.removeAttribute("width"),
            this.options_.title && "" !== this.options_.title && (this.title_ = videojs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-playlist-item-title",
                innerHTML: this.options_.title
            }), el.appendChild(this.title_)), el;
    }, videojs.PlaylistItem.prototype.onClick = function(e) {
        videojs.trigger(this.el_.parentNode, {
            type: "playlistitemclick",
            index: this.options_.index
        });
    }, videojs.PlaylistItem.prototype.preload = function() {
        this.loaded || (this.image_.src = this.options_.thumbnail, this.image_.removeAttribute("height"),
            this.image_.removeAttribute("width"), videojs.one(this.image_, "load", videojs.bind(this, function() {
                this.loaded = !0, this.removeClass("vjs-item-placeholder");
            })), videojs.one(this.image_, "error", videojs.bind(this, function() {
                this.loaded = !0;
            })));
    }, videojs.PlaylistItem.prototype.setIndex = function(index) {
        this.options_.index = index;
    }, videojs.PlaylistItem.prototype.getPosition = function() {
        return {
            top: this.el_.offsetTop,
            bottom: this.el_.offsetTop + this.el_.offsetHeight,
            left: this.el_.offsetLeft,
            right: this.el_.offsetLeft + this.el_.offsetWidth
        };
    }, videojs.PlaylistSlider = videojs.Component.extend({
        init: function(player, options) {
            options.vertical = -1 != player.el().className.indexOf("vjs-vertical-playlist"),
                videojs.Component.call(this, player, options), this.firstVisible_ = !1, this.lastVisible_ = !1,
                videojs.on(this.slidePaneEl_, "scroll", videojs.bind(this, this.onScroll)), this.scrollIndicator.on("dragscroll", videojs.bind(this, this.onDragScroll)),
                this.on("mousewheel", videojs.bind(this, function() {
                    this.player().playlist.userInteraction(!0);
                })), this.isDragging_ = !1;
        }
    }), videojs.PlaylistSlider.prototype.createEl = function(type, props) {
        var el = vjs.createEl("div", {
            className: "vjs-playlist-slide-container"
        });
        return this.slidePaneEl_ = vjs.Component.prototype.createEl.call(this, "div", vjs.obj.merge({
                className: "vjs-playlist-slide-pane",
                innerHTML: ""
            }, props)), this.contentEl_ = vjs.Component.prototype.createEl.call(this, "ul", {}),
            this.slidePaneEl_.appendChild(this.contentEl_), el.appendChild(this.slidePaneEl_),
            this.scrollIndicator = new videojs.ScrollIndicator(this.player(), {
                linkEl: this.slidePaneEl_,
                vertical: this.options_.vertical
            }), el.appendChild(this.scrollIndicator.el()), el;
    }, videojs.PlaylistSlider.prototype.slidePaneEl = function() {
        return this.slidePaneEl_;
    }, videojs.PlaylistSlider.prototype.options_ = {
        children: {}
    }, videojs.PlaylistSlider.prototype.setOrientation = function(orientation) {
        this.options_.vertical = "vertical" === orientation.toLowerCase(), this.scrollIndicator.setOrientation(orientation);
    }, videojs.PlaylistSlider.prototype.addChild = function() {
        var child = videojs.Component.prototype.addChild.apply(this, arguments);
        if ("LI" !== child.el_.tagName) throw new Error("Type Error: Child Elements Must Be LI");
        return child.setIndex(this.children_.length - 1), child;
    }, videojs.PlaylistSlider.prototype.setSize = function(size) {
        this.options_.vertical ? this.setSizeY_(size) : this.setSizeX_(size), videojs.trigger(this.slidePaneEl_, {
            type: "resize",
            bubbles: !1
        }), size >= this.getScrollSize() ? this.scrollIndicator.hide() : this.scrollIndicator.show();
    }, videojs.PlaylistSlider.prototype.setSizeY_ = function(size) {
        this.el_.style.height = size + "px";
    }, videojs.PlaylistSlider.prototype.setSizeX_ = function(size) {
        this.el_.style.width = size + "px";
    }, videojs.PlaylistSlider.prototype.getMaxScroll = function() {
        return this.options_.vertical ? this.getMaxScrollY_() : this.getMaxScrollX_();
    }, videojs.PlaylistSlider.prototype.getMaxScrollY_ = function() {
        return this.slidePaneEl_.scrollHeight - this.slidePaneEl_.offsetHeight;
    }, videojs.PlaylistSlider.prototype.getMaxScrollX_ = function() {
        return this.slidePaneEl_.scrollWidth - this.slidePaneEl_.offsetWidth;
    }, videojs.PlaylistSlider.prototype.getScrollSize = function() {
        return this.options_.vertical ? this.getScrollSizeY_() : this.getScrollSizeX_();
    }, videojs.PlaylistSlider.prototype.getScrollSizeY_ = function() {
        return this.slidePaneEl_.scrollHeight;
    }, videojs.PlaylistSlider.prototype.getScrollSizeX_ = function() {
        return this.slidePaneEl_.scrollWidth;
    }, videojs.PlaylistSlider.prototype.getScroll = function() {
        return this.options_.vertical ? this.getScrollY_() : this.getScrollX_();
    }, videojs.PlaylistSlider.prototype.getScrollY_ = function() {
        return this.slidePaneEl_.scrollTop;
    }, videojs.PlaylistSlider.prototype.getScrollX_ = function() {
        return this.slidePaneEl_.scrollLeft;
    }, videojs.PlaylistSlider.prototype.setScroll = function(scroll) {
        this.options_.vertical ? this.setScrollY_(scroll) : this.setScrollX_(scroll), this.setVisible();
    }, videojs.PlaylistSlider.prototype.setScrollY_ = function(scroll) {
        this.slidePaneEl_.scrollTop = scroll;
    }, videojs.PlaylistSlider.prototype.setScrollX_ = function(scroll) {
        this.slidePaneEl_.scrollLeft = scroll;
    }, videojs.PlaylistSlider.prototype.scrollToChild = function(index) {
        index.index && (index = index.index);
        var targetChild = this.children_[index];
        if (!targetChild) return !1;
        var childPosition = this.childPosition(index),
            currentPosition = (childPosition.lower - childPosition.upper,
                this.getPosition()),
            maxScroll = this.getMaxScroll();
        if (childPosition.upper >= currentPosition.upper && childPosition.lower <= currentPosition.lower) return this.setVisible(), !0;
        var targetPosition;
        return targetPosition = childPosition.upper < currentPosition.upper + currentPosition.total / 2 ? maxScroll - (maxScroll - childPosition.upper + 5) : currentPosition.upper + (childPosition.lower - (currentPosition.lower - 5)),
            this.smoothScroll(targetPosition), !0;
    }, videojs.PlaylistSlider.prototype.smoothScroll = function(pos) {
        clearTimeout(this.animationTimer);
        var y = this.getScroll();
        return y += Math.round(.3 * (pos - y)), Math.abs(y - pos) < 2 ? (this.moveToChild_ = !1,
            void this.setScroll(pos)) : (this.setScroll(y), void(this.animationTimer = setTimeout(videojs.bind(this, this.smoothScroll), 40, pos)));
    }, videojs.PlaylistSlider.prototype.cancelScroll = function() {
        clearTimeout(this.animationTimer);
    }, videojs.PlaylistSlider.prototype.scrollBy = function(amount) {
        this.setScroll(this.getScroll() + amount);
    }, videojs.PlaylistSlider.prototype.onScroll = function(e) {
        this.firstVisible_ = !1, this.lastVisible_ = !1, this.setVisible();
    }, videojs.PlaylistSlider.prototype.onDragScroll = function(e) {
        var maxScroll = this.getMaxScroll(),
            visible = this.scrollIndicator.getSize(),
            newScrollPosition = e.position / visible.to * maxScroll;
        this.player().playlist.userInteraction(!1), this.setScroll(newScrollPosition), this.player().playlist.userInteraction(!0);
    }, videojs.PlaylistSlider.prototype.isDragging = function() {
        return this.isDragging_;
    }, videojs.PlaylistSlider.prototype.select = function(index, moveAfterSelection) {
        for (var x = 0; x < this.children_.length; x++) videojs.removeClass(this.children_[x].el(), "vjs-playlist-selected");
        videojs.addClass(this.children_[index].el(), "vjs-playlist-selected"), moveAfterSelection && this.moveToSelected();
    }, videojs.PlaylistSlider.prototype.getPosition = function() {
        var viewPane = this.slidePaneEl_;
        return this.options_.vertical ? {
            upper: viewPane.scrollTop,
            lower: viewPane.scrollTop + viewPane.offsetHeight,
            total: viewPane.offsetHeight
        } : {
            upper: viewPane.scrollLeft,
            lower: viewPane.scrollLeft + viewPane.offsetWidth,
            total: viewPane.offsetWidth
        };
    }, videojs.PlaylistSlider.prototype.childPosition = function(index) {
        if (!this.children_ && !this.children_[index]) return !1;
        var childData = this.children_[index].getPosition(),
            childPosition = this.options_.vertical ? {
                upper: childData.top,
                lower: childData.bottom
            } : {
                upper: childData.left,
                lower: childData.right
            };
        return childPosition;
    }, videojs.PlaylistSlider.prototype.isVisible = function(index) {
        var currentPosition = this.getPosition(),
            itemPosition = this.childPosition(index);
        return itemPosition.upper >= currentPosition.upper && itemPosition.lower <= currentPosition.lower ? !0 : itemPosition.lower > currentPosition.upper && itemPosition.upper < currentPosition.lower ? 1 : itemPosition.upper < currentPosition.lower + 100 && itemPosition.upper > currentPosition.lower - 100 || itemPosition.lower > currentPosition.upper + 100 && itemPosition.lower < currentPosition.upper + 100 ? 0 : !1;
    }, videojs.PlaylistSlider.prototype.setVisible = function() {
        var item = null,
            isVisible = null;
        this.firstVisible_ = !1, this.lastVisible_ = !1;
        for (var x = 0; x < this.children_.length; x++) isVisible = this.isVisible(x), item = this.children_[x],
            isVisible ? (isVisible === !0 && (this.firstVisible_ === !1 && (this.firstVisible_ = x),
                this.lastVisible_ = x), item.addClass("visible")) : item.removeClass("visible"),
            (0 === isVisible || isVisible) && item.preload();
    }, videojs.PlaylistSlider.prototype.moveToNext = function(isClick) {
        if (isClick) {
            var next = this.lastVisible_ + 1;
            next == this.moveToChild_ && next++, this.moveToChild_ = next, this.scrollToChild(this.moveToChild_);
        } else this.scrollToChild(this.lastVisible_ + 1);
    }, videojs.PlaylistSlider.prototype.moveToPrevious = function(isClick) {
        if (isClick) {
            var next = this.firstVisible_ - 1;
            next == this.moveToChild_ && next--, this.moveToChild_ = next, this.scrollToChild(this.moveToChild_);
        } else this.scrollToChild(this.firstVisible_ - 1);
    }, videojs.PlaylistSlider.prototype.moveToSelected = function(index) {
        var visible = this.getPosition(),
            itemDims = null,
            selected = null;
        if (index) selected = this.children_[item];
        else
            for (var x = 0; x < this.children_.length; x++)
                if (null !== this.children_[x].el().className.match("vjs-playlist-selected")) {
                    selected = this.children_[x], index = x;
                    break;
                }
        itemDims = selected.getPosition();
        var nextIndex;
        nextIndex = itemDims.upper - itemDims.total < visible.upper ? this.children_[index - 1] ? index - 1 : index : itemDims.lower + itemDims.total > visible.lower && this.children_[index + 1] ? index + 1 : index,
            this.scrollToChild(nextIndex);
    }, videojs.PlaylistTitle = videojs.Component.extend({
        init: function(player, options) {
            videojs.Component.call(this, player, options);
        }
    }), videojs.PlaylistTitle.prototype.createEl = function(type, props) {
        var el = vjs.Component.prototype.createEl.call(this, "div", vjs.obj.merge({
            className: "vjs-playlist-title",
            innerHTML: ""
        }, props));
        return el;
    }, videojs.PlaylistTitle.prototype.showTitle = function(show) {
        show ? (videojs.addClass(this.player().el(), "vjs-has-playlist-title"), this.show()) : this.hide();
    }, videojs.PlaylistTitle.prototype.setTitle = function(text) {
        this.el_.innerHTML = text;
    },
    function() {
        "use strict";
        videojs.Playlist = videojs.Component.extend({
                init: function(player, options) {
                    videojs.addClass(player.el(), "vjs-has-playlist"), this.originalOrientation = options.veritcal;
                    var parentNode = player.el().parentNode;
                    options.vertical ? (videojs.addClass(player.el(), "vjs-vertical-playlist"), parentNode.className.indexOf("video-js-responsive-container") >= 0 && videojs.addClass(parentNode, "vjs-vertical-playlist")) : (videojs.addClass(player.el(), "vjs-horizontal-playlist"),
                            parentNode.className.indexOf("video-js-responsive-container") >= 0 && videojs.addClass(parentNode, "vjs-horizontal-playlist")),
                        videojs.Component.call(this, player, options), this.options_.autoAdvance && (this.autoAdvanceFn = videojs.bind(this, function() {
                            var prevItem = this.currentItem;
                            setTimeout(videojs.bind(this, function() {
                                this.loadNext(), (prevItem !== this.currentItem || this.options_.loop) && (this.player().trigger({
                                    type: "playlistautoload"
                                }), this.player().play());
                            }, 50));
                        }), videojs.on(this.player().el(), "ended", this.autoAdvanceFn)), this.setupPlaylist(),
                        this.on("playlistLoaded", videojs.bind(this, this.playlistLoaded)), videojs.on(this.playlistSlider.contentEl(), "playlistitemclick", videojs.bind(this, function(e) {
                            this.userInteraction(!1), this.loadItem(e.index), -1 == this.player().el().className.indexOf("vjs-has-started") && (videojs.addClass(this.player().el(), "vjs-has-started"),
                                    this.player().posterImage.hide()), this.items_[e.index].options().type.indexOf("image") > -1 && !this.options_.autoAdvance ? this.player().trigger("pause") : this.player().play(),
                                this.player().trigger({
                                    type: "playlistload",
                                    item: this.items_[e.index]
                                });
                        })), videojs.on(window, "resize", videojs.bind(this, this.onResize)), this.player_.on("resize", videojs.bind(this, function() {
                            this.player().el().className.indexOf("vjs-small") >= 0 && this.options_.vertical ? this.setOrientation("vertical") : this.player().el().className.indexOf("vjs-large") >= 0 && !this.options_.vertical && this.setOrientation("horizontal");
                        })), !this.options_.vertical && this.options_.showTitle ? this.playlistTitle.showTitle(!0) : this.playlistTitle.showTitle(!1),
                        this.on("click", function(e) {
                            e.stopImmediatePropagation();
                        });
                }
            }), videojs.Playlist.prototype.createEl = function() {
                var props = {
                    className: "vjs-playlist",
                    innerHTML: "",
                    "aria-live": "polite",
                    tabIndex: 0
                };
                return videojs.createEl("div", props);
            }, videojs.Playlist.prototype.options_ = {
                children: {
                    playlistTitle: {},
                    playlistPrevious: {},
                    playlistSlider: {},
                    playlistNext: {}
                },
                showTitle: !0
            }, videojs.Playlist.prototype.items_ = [], videojs.Playlist.prototype.hasPlaylistLoaded_ = !1,
            videojs.Playlist.prototype.playlistLoadQueue = [], videojs.Playlist.prototype.items = function() {
                return this.items_;
            }, videojs.Playlist.prototype.setOrientation = function(orientation) {
                this.options_.vertical = "vertical" === orientation.toLowerCase();
                var parentNode = this.player_.el().parentNode;
                videojs.removeClass(parentNode, "vjs-vertical-playlist"), videojs.removeClass(parentNode, "vjs-horizontal-playlist"),
                    videojs.removeClass(this.player_.el(), "vjs-vertical-playlist"), videojs.removeClass(this.player_.el(), "vjs-horizontal-playlist"),
                    this.options_.vertical ? (videojs.addClass(this.player_.el(), "vjs-vertical-playlist"),
                        parentNode.className.indexOf("video-js-responsive-container") >= 0 && videojs.addClass(parentNode, "vjs-vertical-playlist")) : (videojs.addClass(this.player_.el(), "vjs-horizontal-playlist"),
                        parentNode.className.indexOf("video-js-responsive-container") >= 0 && videojs.addClass(parentNode, "vjs-horizontal-playlist")),
                    setTimeout(videojs.bind(this, this.onResize), 750), this.playlistSlider.setOrientation(orientation);
            }, videojs.Playlist.prototype.setupPlaylist = function() {
                if (this.options_.url) {
                    var separator = "?";
                    this.options_.url.indexOf("?") > 0 && (separator = "&"), /\.json(?:\?|$)/i.test(this.options_.url) ? videojs.get(this.options_.url, videojs.bind(this, function(data) {
                        this.options_.items = JSON.parse(data), this.createItems();
                    })) : videojs.JSONP(this.options_.url + separator + "callback={callback}", videojs.bind(this, function(data) {
                        this.options_.items = data, this.createItems();
                    }));
                } else this.createItems();
            }, videojs.Playlist.prototype.createItems = function() {
                var items = this.options_.items;
                this.items_ = [];
                for (var x = 0; x < items.length; x++)
                    if (items[x]) {
                        items[x].caption && !items[x].title && (items[x].title = items[x].caption);
                        var typeStr = items[x].type || items[x].media[Object.keys(items[x].media)[0]].source[0].type;
                        items[x].type = typeStr, this.items_[x] = this.playlistSlider.addChild("playlistItem", items[x]),
                            videojs.one(this.items_[x].image_, "load", videojs.bind(this, function() {
                                this.onResize();
                            }));
                    }
                this.trigger({
                    type: "playlistLoaded",
                    items: this.items_
                }), this.loadItem(0), setTimeout(videojs.bind(this, this.onResize), 1e3), this.items_[0].options() && this.items_[0].options().poster && this.player().posterImage.show();
            }, videojs.Playlist.prototype.playlistLoaded = function(e) {
                this.hasPlaylistLoaded = !0, this.processPlaylistLoad();
            }, videojs.Playlist.prototype.processPlaylistLoad = function() {
                for (var nextFn; void 0 !== (nextFn = this.playlistLoadQueue.pop());) nextFn(this.items_);
            }, videojs.Playlist.prototype.onPlaylistLoad = function(fn) {
                this.hasPlaylistLoaded ? fn(this.items_) : this.playlistLoadQueue.push(fn);
            }, videojs.Playlist.prototype.userInteraction = function(set) {
                return void 0 !== set && (this.userInteraction_ = set, this.userInteraction && this.playlistSlider.cancelScroll(),
                    this.interactionCheck_ && clearTimeout(this.interactionCheck_), this.interactionCheck_ = setTimeout(videojs.bind(this, function() {
                        this.userInteraction_ = !1, clearTimeout(this.interactionCheck_), this.interactionCheck_ = !1;
                    }), 2e4)), this.userInteraction_;
            }, videojs.Playlist.prototype.loadNext = function() {
                var nextItem = this.currentItem + 1;
                nextItem < this.items_.length ? this.loadItem(nextItem) : this.options_.loop && this.loadItem(0);
            }, videojs.Playlist.prototype.loadPrevious = function() {
                var previousItem = this.currentItem - 1;
                previousItem >= 0 ? this.loadItem(previousItem) : this.options_.loop && this.loadItem(this.items_.length - 1);
            }, videojs.Playlist.prototype.loadItem = function(item) {
                var index;
                if (index = "object" == typeof item && void 0 !== item.index ? item.index : item,
                    this.currentItem = index, this.playlistSlider.select(this.currentItem, !this.userInteraction()),
                    console.log("LOADING PLAYLIST ITEM", this.items_[index].options()), this.items_[index].options().src && this.items_[index].options().type) this.player().src({
                    src: this.items_[index].options().src,
                    type: this.items_[index].options().type
                }), this.items_[index].options().poster && ("VIDEO" === this.player().tech.el().tagName && (this.player().tech.el().poster = this.items_[index].options().poster),
                    this.player().poster(this.items_[index].options().poster));
                else {
                    var quality = Object.keys(this.items_[index].options().media),
                        defaultQuality = quality[0],
                        qualitySorted = [],
                        pRegEx = /(\d+?)p/i,
                        dimensionRegEx = /\d+?x(\d+)/i,
                        has360p = !1;
                    if (quality.length > 1) {
                        for (var x = 0; x < quality.length; x++) {
                            var pResult = pRegEx.exec(quality[x]),
                                dimensionResult = dimensionRegEx.exec(quality[x]);
                            pResult && pResult[1] ? qualitySorted.push({
                                    size: parseInt(pResult[1]),
                                    key: quality[x]
                                }) : dimensionResult && dimensionResult[1] && qualitySorted.push({
                                    size: parseInt(dimensionResult[1]),
                                    key: quality[x]
                                }), 360 === qualitySorted[qualitySorted.length - 1].size && (has360p = quality[x]),
                                qualitySorted = qualitySorted.sort(function(a, b) {
                                    return a.size - b.size;
                                }).reverse();
                        }
                        defaultQuality = has360p ? has360p : qualitySorted[0].key, qualitySorted && this.player_.qualityControl && this.player_.qualityControl({
                            defaultQuality: defaultQuality,
                            sources: this.items_[index].options().media
                        });
                    } else defaultQuality = Object.keys(this.items_[index].options().media)[0];
                    this.player().src(this.items_[index].options().media[defaultQuality].source);
                    var poster = this.items_[index].options().media[defaultQuality].poster;
                    poster && ("VIDEO" === this.player().tech.el().tagName && (this.player().tech.el().poster = poster),
                        this.player().poster(poster), this.player().posterImage.show());
                }
                this.items_[index].options().title && this.playlistTitle.setTitle(this.items_[index].options().title),
                    this.items_[index].options().captions && this.player().addTextTrack("captions", "", "en", {
                        src: this.items_[index].options().captions
                    }), this.items_[index].options().subtitles && this.player().addTextTrack("subtitles", "", "en", {
                        src: this.items_[index].options().subtitles
                    }), this.items_[index].options().type.indexOf("image") > -1 && !this.options_.autoAdvance ? (this.player().controlBar.progressControl.hide(),
                        this.player().controlBar.playToggle.hide()) : (this.player().controlBar.progressControl.show(),
                        this.player().controlBar.playToggle.show());
            }, videojs.Playlist.prototype.onResize = function(e) {
                var newSize = this.slidePaneSize();
                this.playlistSlider.setSize(newSize);
                var maxScroll = this.playlistSlider.getMaxScroll();
                this.playlistSlider.setVisible(), 0 >= maxScroll ? (this.playlistNext.hide(), this.playlistPrevious.hide()) : (this.playlistNext.show(),
                    this.playlistPrevious.show());
            }, videojs.Playlist.prototype.slidePaneSize = function() {
                var newSlidPaneSize;
                return this.playlistPrevious.show(), this.playlistNext.show(), newSlidPaneSize = this.options_.vertical ? this.el_.offsetHeight - this.playlistPrevious.el().offsetHeight - this.playlistNext.el().offsetHeight : this.el_.offsetWidth - this.playlistPrevious.el().offsetWidth - this.playlistNext.el().offsetWidth;
            }, videojs.Playlist.prototype.moveToNext = function() {
                this.playlistSlider.moveToNext(!0);
            }, videojs.Playlist.prototype.moveToPrevious = function() {
                this.playlistSlider.moveToPrevious(!0);
            }, videojs.Playlist.prototype.moveToSelected = function(index) {
                this.playlistSlider.moveToSelected(index);
            }, videojs.Playlist.prototype.moveBy = function(pos) {
                this.playlistSlider.scrollBy(pos);
            }, videojs.JSONP || (videojs.JSONP = function(url, callback) {
                function rand() {
                    for (var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", c = "", i = -1; ++i < 15;) c += chars.charAt(Math.floor(52 * Math.random()));
                    return c;
                }

                function create(url) {
                    var e = url.match(/callback=jsonp.(\w+)/),
                        c = e ? e[1] : rand();
                    return videojs.JSONP[c] = function(data) {
                        callback(data), delete videojs.JSONP[c], docHead.removeChild(script);
                    }, "videojs.JSONP." + c;
                }
                var docHead = document.getElementsByTagName("head")[0],
                    cb = create(url),
                    script = document.createElement("script");
                script.type = "text/javascript", script.src = url.replace(/(\{|%7B)callback(\}|%7D)/gi, cb),
                    docHead.appendChild(script);
            }), videojs.plugin("playlist", function(options) {
                if (console.log(options.items, options.url, !(options.items && options.items.length), !(options.url && "" !== options.url)),
                    (options.items && options.items.length || options.url && "" !== options.url) && (this.tech.el().style.backgroundColor = "transparent",
                        this.playlist = this.addChild("playlist", options), options.addControls)) {
                    this.playlist.advancePlaylistButton = this.controlBar.addChild("advancePlaylist"),
                        this.playlist.regressPlaylistButton = this.controlBar.addChild("regressPlaylist");
                    var playToggleLocation = videojs.findControlLocation(this, "vjs-play-control");
                    playToggleLocation = -1 == playToggleLocation ? 0 : playToggleLocation, this.controlBar.el().insertBefore(this.playlist.regressPlaylistButton.el(), this.controlBar.el().childNodes[playToggleLocation]),
                        this.controlBar.el().insertBefore(this.playlist.advancePlaylistButton.el(), this.controlBar.el().childNodes[playToggleLocation + 2]);
                }
            });
    }(), videojs.ScrollIndicator = videojs.Button.extend({
        init: function(player, options) {
            videojs.Button.call(this, player, options), this.scrollIndicatorHandle = new videojs.ScrollIndicatorHandle(player, vjs.obj.merge({
                track: this
            }, options)), this.addChild(this.scrollIndicatorHandle), this.on("selectstart", function() {
                return !1;
            }), this.el_.setAttribute("unselectable", "on");
        }
    }), videojs.ScrollIndicator.prototype.options_ = {}, videojs.ScrollIndicator.prototype.createEl = function(type, props) {
        return vjs.Component.prototype.createEl.call(this, "div", vjs.obj.merge({
            className: "vjs-playlist-scroll-track",
            innerHTML: ""
        }, props));
    }, videojs.ScrollIndicator.prototype.setOrientation = function(orientation) {
        this.options_.vertical = "vertical" === orientation.toLowerCase(), this.scrollIndicatorHandle.setOrientation(orientation);
    }, videojs.ScrollIndicator.prototype.onClick = function(e) {
        e.stopPropagation(), this.scrollIndicatorHandle.dragDiff_ = this.options_.vertical ? this.scrollIndicatorHandle.el().offsetHeight / 2 : this.scrollIndicatorHandle.el().offsetWidth / 2,
            this.scrollIndicatorHandle.dragging_ = !0, this.scrollIndicatorHandle.onDrag(e),
            this.scrollIndicatorHandle.dragging_ = !1;
    }, videojs.ScrollIndicator.prototype.getSize = function() {
        return this.scrollIndicatorHandle.getSize();
    }, videojs.ScrollIndicatorHandle = videojs.Button.extend({
        init: function(player, options) {
            videojs.Button.call(this, player, options), this.on("mousedown", this.onMouseDown),
                this.on("touchstart", this.onMouseDown), this.on("selectstart", function() {
                    return !1;
                }), this.el_.setAttribute("unselectable", "on"), this.linkEl_ = options.linkEl,
                this.track_ = options.track, this.dragging_ = !1, this.dragDiff_ = null, this.handle_ = videojs.bind(this, this.onDrag),
                videojs.on(this.linkEl_, "resize", videojs.bind(this, this.onResize)), videojs.on(this.linkEl_, "scroll", videojs.bind(this, this.onScroll));
        }
    }), videojs.ScrollIndicatorHandle.prototype.createEl = function(type, props) {
        return vjs.Component.prototype.createEl.call(this, "div", vjs.obj.merge({
            className: "vjs-playlist-scroll-indicator",
            innerHTML: ""
        }, props));
    }, videojs.ScrollIndicatorHandle.prototype.setOrientation = function(orientation) {
        this.options_.vertical = "vertical" === orientation.toLowerCase(), this.onResize();
    }, videojs.ScrollIndicatorHandle.prototype.onResize = function(e) {
        this.setIndicatorSize(), this.setTrackSize(), this.options_.vertical ? this.moveIndicator_(this.el_.offsetTop) : this.moveIndicator_(this.el_.offsetLeft);
    }, videojs.ScrollIndicatorHandle.prototype.setTrackSize = function() {
        this.min_ = 0, this.options_.vertical ? this.max_ = this.track_.el().offsetHeight - this.el_.offsetHeight : this.max_ = this.track_.el().offsetWidth - this.el_.offsetWidth,
            this.trackPosition_ = videojs.findPosition(this.el_.parentNode);
    }, videojs.ScrollIndicatorHandle.prototype.setIndicatorSize = function() {
        var total = this.options_.vertical ? this.linkEl_.offsetHeight : this.linkEl_.offsetWidth,
            maxScroll = this.options_.vertical ? this.linkEl_.scrollHeight : this.linkEl_.scrollWidth,
            percent = 80 * (total / maxScroll) + 20;
        this.options_.vertical ? this.el_.style.height = percent + "%" : this.el_.style.width = percent + "%";
    }, videojs.ScrollIndicatorHandle.prototype.getSize = function() {
        return {
            from: this.min_,
            to: this.max_
        };
    }, videojs.ScrollIndicatorHandle.prototype.onMouseDown = function(e) {
        e = e || window.event, e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(),
            e.cancelBubble = !0, e.returnValue = !1, this.dragging_ = !0;
        var current = videojs.findPosition(this.el_),
            mouseY = e.pageY,
            mouseX = e.pageX;
        this.options_.vertical ? this.dragDiff_ = mouseY - current.top : this.dragDiff_ = mouseX - current.left,
            videojs.on(document, "mousemove", this.handle_), videojs.one(window, "mouseup", videojs.bind(this, this.onMouseUp));
    }, videojs.ScrollIndicatorHandle.prototype.onDrag = function(e) {
        if (this.dragging_) {
            e = e || window.event, e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(),
                e.cancelBubble = !0, e.returnValue = !1;
            var newPos = this.options_.vertical ? e.pageY - this.trackPosition_.top - this.dragDiff_ : newPos = e.pageX - this.trackPosition_.left - this.dragDiff_;
            this.moveIndicator_(newPos), this.trigger({
                type: "dragscroll",
                position: newPos
            });
        }
    }, videojs.ScrollIndicatorHandle.prototype.onMouseUp = function(e) {
        e.stopPropagation(), this.dragging_ = !1, videojs.off(document, "mousemove", this.handle_),
            this.trigger("mouseup");
    }, videojs.ScrollIndicatorHandle.prototype.onClick = function(e) {
        e.stopPropagation();
    }, videojs.ScrollIndicatorHandle.prototype.moveIndicator_ = function(newPos) {
        newPos = Math.max(Math.round(newPos), 0), newPos <= this.min_ ? newPos = this.min_ : newPos >= this.max_ && (newPos = this.max_),
            this.options_.vertical ? this.el_.style.top = newPos.toString().replace("%", "") + "px" : this.el_.style.left = newPos.toString().replace("%", "") + "px";
    }, videojs.ScrollIndicatorHandle.prototype.onScroll = function(e) {
        var percent = this.options_.vertical ? this.linkEl_.scrollTop / (this.linkEl_.scrollHeight - this.linkEl_.offsetHeight) : this.linkEl_.scrollLeft / (this.linkEl_.scrollWidth - this.linkEl_.offsetWidth);
        this.moveIndicator_(this.max_ * percent);
    }, videojs.PlaylistGridItem = videojs.Button.extend({
        init: function(player, options) {
            videojs.Component.call(this, player, options), console.log("[Playlist Grid Item] INIT", options),
                this.loaded = !1, this.inFocus = !1;
            var touchstart = !1;
            this.on("touchstart", function(event) {
                touchstart = !0;
            }), this.on("touchmove", function() {
                touchstart = !1;
            });
            var self = this;
            this.on("touchend", function(event) {
                touchstart && self.onClick(event), event.preventDefault();
            }), this.on("click", this.onClick), this.on("focus", this.onFocus), this.on("blur", this.onBlur);
            var typeStr = this.options_.type || this.options_.media[Object.keys(this.options_.media)[0]].source[0].type;
            this.addClass(typeStr.substr(0, typeStr.indexOf("/")));
        }
    }), videojs.PlaylistGridItem.prototype.onFocus = function() {}, videojs.PlaylistGridItem.prototype.createEl = function(type, props) {
        var el = vjs.Component.prototype.createEl.call(this, "li", vjs.obj.merge({
            className: "vjs-playlist-grid-item vjs-item-placeholder ",
            innerHTML: ""
        }, props));
        return this.image_ = vjs.Component.prototype.createEl.call(this, "img", {
                src: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            }), el.appendChild(this.image_), this.image_.removeAttribute("height"), this.image_.removeAttribute("width"),
            this.image_.ondragstart = function() {
                return !1;
            }, this.options_.title && "" !== this.options_.title && (this.title_ = videojs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-playlist-item-title",
                innerHTML: this.options_.title
            }), el.appendChild(this.title_)), el;
    }, videojs.PlaylistGridItem.prototype.onClick = function(e) {
        this.inFocus || (console.log("[Playlist Grid Item] onClick", this), videojs.trigger(this.el_.parentNode, {
            type: "PlaylistGridItemClick",
            index: this.options_.index
        }));
    }, videojs.PlaylistGridItem.prototype.preload = function() {
        if (!this.loaded) {
            if ("object" == typeof this.options_.media) {
                var keys = Object.keys(this.options_.media);
                this.image_.src = this.options_.media[keys[0]].poster;
            } else this.image_.src = this.options_.thumbnail;
            this.image_.removeAttribute("height"), this.image_.removeAttribute("width"), videojs.one(this.image_, "load", videojs.bind(this, function() {
                this.loaded = !0, this.removeClass("vjs-item-placeholder");
            })), videojs.one(this.image_, "error", videojs.bind(this, function() {
                this.loaded = !0;
            }));
        }
    }, videojs.PlaylistGridItem.prototype.setIndex = function(index) {
        this.options_.index = index;
    }, videojs.PlaylistGridItem.prototype.getPosition = function() {
        return {
            top: this.el_.offsetTop,
            bottom: this.el_.offsetTop + this.el_.offsetHeight,
            left: this.el_.offsetLeft,
            right: this.el_.offsetLeft + this.el_.offsetWidth
        };
    },
    function() {
        "use strict";

        function Modal(player, el, grid) {
            return console.log("[Modal] init", player), this.grid = grid, this.bodyEl = document.querySelector("body"),
                this.backdrop = videojs.createEl("div", {
                    className: "vjs-modal-backdrop"
                }), this.modal = videojs.createEl("div", {
                    className: "vjs-modal"
                }), this.hasAppended = !1, this.contentEl = el, this.isEscKey = videojs.bind(this, this.isEscKey),
                this.open = videojs.bind(this, this.open), this.close = videojs.bind(this, this.close),
                videojs.on(this.backdrop, "click", this.close), this;
        }

        function Slider(player, playerContainer, gridContainer, columns, grid) {
            return this.player = player, this.playerContainer = playerContainer, this.gridContainer = gridContainer,
                this.columns = columns, this.grid = grid, this.hasAppended = !1, this.container = videojs.createEl("div", {
                    className: "vjs-slide-container"
                }), this.contentContainer = videojs.createEl("div", {
                    className: "vjs-slide-row"
                }), this.slide = videojs.createEl("div", {
                    className: "vjs-slide"
                }), this.container.appendChild(this.contentContainer), this.contentContainer.appendChild(this.slide),
                this.currentRow = -1, this.open = videojs.bind(this, this.open), this;
        }

        function InPlace(player, playerContainer, items) {
            this.player = player, this.playerContainer = playerContainer, this.items = items;
        }
        Modal.prototype.open = function(cb) {
                this.hasAppended || (this.hasAppended = !0, this.contentEl.style.left = null, this.contentEl.style.top = null,
                        this.contentEl.style.position = null, this.modal.appendChild(this.grid.getChild("playlistTitle").el()),
                        this.modal.appendChild(this.contentEl)), videojs.on(document, "keydown", this.isEscKey),
                    this.bodyEl.appendChild(this.backdrop), this.bodyEl.appendChild(this.modal), setTimeout(videojs.bind(this, function() {
                        videojs.addClass(this.bodyEl, "vjs-modal-open"), setTimeout(cb, 400);
                    }), 10);
            }, Modal.prototype.close = function() {
                videojs.removeClass(this.bodyEl, "vjs-modal-open"), videojs.off(document, "keydown", this.isEscKey),
                    setTimeout(videojs.bind(this, function() {
                        this.bodyEl.removeChild(this.backdrop), this.bodyEl.removeChild(this.modal);
                    }), 400);
            }, Modal.prototype.isEscKey = function(e) {
                ("escape" === e.key.toLowerCase() || 27 === e.keyCode) && this.close();
            }, Slider.prototype.open = function(i, items) {
                this.hasAppended || (this.hasAppended = !0, this.playerContainer.style.left = null,
                    this.playerContainer.style.top = null, this.playerContainer.style.position = null,
                    this.slide.appendChild(this.playerContainer));
                var row = Math.floor(i / this.columns),
                    insertIndex = row * this.columns;
                console.log("[Slider] open", row, insertIndex, items), row != this.currentRow && (videojs.removeClass(this.container, "open"),
                    this.gridContainer.insertBefore(this.container, items[insertIndex].el()), this.gridContainer.insertBefore(this.grid.getChild("playlistTitle").el(), this.container),
                    this.currentRow = row, setTimeout(videojs.bind(this, function() {
                        videojs.addClass(this.container, "open");
                    }), 1));
            }, InPlace.prototype.show = function(i) {
                this.playerContainer.style.left = null, this.playerContainer.style.top = null, this.playerContainer.style.position = null,
                    videojs.arr.forEach(this.items, function(item) {
                        item.inFocus = !1, this.setChildren(item.el(), !0);
                    }, this), this.items[i].inFocus = !0, this.setChildren(this.items[i].el(), !1),
                    videojs.insertFirst(this.playerContainer, this.items[i].el());
            }, InPlace.prototype.setChildren = function(el, show) {
                console.log(el, el.children, show);
                for (var x = 0; x < el.children.length; x++) videojs.hasClass(el.children[x], "vjs-playlist-item-title") || (console.log("setting ", el.children[x], show ? null : "none"),
                    el.children[x].style.display = show ? null : "none");
            }, videojs.PlaylistGrid = videojs.Component.extend({
                init: function(player, options) {
                    switch (console.log("[PLAYLIST GRID] init", player, options), videojs.Component.call(this, player, options),
                        videojs.addClass(player.el(), "vjs-has-playlist-grid"), videojs.hasClass(this.player().el().parentNode, "video-js-responsive-container") ? this.parentNode = this.player().el().parentNode.parentNode : this.parentNode = this.player().el().parentNode,
                        this.setupPlaylist(), this.options_.position) {
                        case "modal":
                            var that = this;
                            this.setPlayerOffScreen(), this.on("playlistLoaded", videojs.bind(this, function() {
                                this.modal = new Modal(player, this.playerContainer, this), this.closeBtn = this.player().addChild("ExitButton"),
                                    this.closeBtn.on("click", function(e) {
                                        console.log("HERE, Clicking away"), that.modal.close();
                                    }), this.closeBtn.el().style.position = "absolute", this.closeBtn.el().style.right = 0,
                                    this.closeBtn.el().style.top = 0, this.closeBtn.el().style.background = "rgba(0,0,0,0.25)",
                                    this.closeBtn.el().style.background = "rgba(0,0,0,0.25)", console.log(this.closeBtn);
                            }));
                            break;

                        case "slide":
                            this.setPlayerOffScreen(), this.on("playlistLoaded", videojs.bind(this, function() {
                                this.slide = new Slider(player, this.playerContainer, this.el(), this.options_.columns, this);
                            }));
                            break;

                        case "in-place":
                            this.setPlayerOffScreen(), this.on("playlistLoaded", videojs.bind(this, function() {
                                this.inPlace = new InPlace(player, this.playerContainer, this.items_);
                            })), this.playlistTitle.setTitle(""), this.playlistTitle.dispose(), delete this.playlistTitle;
                    }
                    this.on("playlistLoaded", videojs.bind(this, this.playlistLoaded)), videojs.on(this.contentEl(), "PlaylistGridItemClick", videojs.bind(this, function(e) {
                        switch (console.log("[Playlist Grid] playlistitemclick", e, this), this.userInteraction(!1),
                            this.options_.position) {
                            case "modal":
                                this.modal.open(videojs.bind(this, function() {})), this.loadOnClick(e.index);
                                break;

                            case "slide":
                                this.slide.open(e.index, this.items_), this.loadOnClick(e.index);
                                break;

                            case "in-place":
                                this.inPlace.show(e.index), this.loadOnClick(e.index);
                                break;

                            case "top":
                                this.loadOnClick(e.index);
                        }
                        this.playlistTitle && this.playlistTitle.show();
                    })), this.on("click", function(e) {
                        e.stopImmediatePropagation();
                    });
                }
            }), videojs.PlaylistGrid.prototype.createEl = function() {
                var props = {
                    className: "vjs-playlist-grid vjs-grid-columns-" + this.options_.columns,
                    innerHTML: "",
                    "aria-live": "polite",
                    tabIndex: 0
                };
                return videojs.createEl("ul", props);
            }, videojs.PlaylistGrid.prototype.options_ = {
                name: "playlistGrid",
                children: {
                    playlistTitle: {}
                },
                showTitle: !0
            }, videojs.PlaylistGrid.prototype.dispose = function() {
                console.log("DISPOSING"), this.playerContainer && this.parentNode.appendChild(this.playerContainer),
                    this.el_.remove(), videojs.Component.prototype.dispose.call(this);
            }, videojs.PlaylistGrid.prototype.items_ = [], videojs.PlaylistGrid.prototype.hasPlaylistLoaded_ = !1,
            videojs.PlaylistGrid.prototype.playlistLoadQueue = [], videojs.PlaylistGrid.prototype.items = function() {
                return this.items_;
            }, videojs.PlaylistGrid.prototype.setupPlaylist = function() {
                if (this.options_.url) {
                    var separator = "?";
                    this.options_.url.indexOf("?") > 0 && (separator = "&"), /\.json(?:\?|$)/i.test(this.options_.url) ? videojs.get(this.options_.url, videojs.bind(this, function(data) {
                        this.options_.items = JSON.parse(data), this.createItems();
                    })) : videojs.JSONP(this.options_.url + separator + "callback={callback}", videojs.bind(this, function(data) {
                        this.options_.items = data, this.createItems();
                    }));
                } else this.createItems();
            }, videojs.PlaylistGrid.prototype.createItems = function() {
                var items = this.options_.items;
                this.items_ = [];
                for (var x = 0; x < items.length; x++)
                    if (items[x]) {
                        items[x].caption && !items[x].title && (items[x].title = items[x].caption);
                        var typeStr = items[x].type || items[x].media[Object.keys(items[x].media)[0]].source[0].type;
                        items[x].type = typeStr, items[x].index = x, this.items_[x] = this.addChild("playlistGridItem", items[x]),
                            this.items_[x].preload();
                    }
                this.trigger({
                        type: "playlistLoaded",
                        items: this.items_
                    }), this.loadItem(0), this.playlistTitle && "top" != this.options_.position && this.playlistTitle.hide(),
                    this.items_[0].options() && this.items_[0].options().poster && this.player().posterImage.show();
            }, videojs.PlaylistGrid.prototype.playlistLoaded = function(e) {
                this.hasPlaylistLoaded_ = !0;
            }, videojs.PlaylistGrid.prototype.processPlaylistLoad = function() {
                for (var nextFn; void 0 !== (nextFn = this.playlistLoadQueue.pop());) nextFn(this.items_);
            }, videojs.PlaylistGrid.prototype.onPlaylistLoad = function(fn) {
                this.hasPlaylistLoaded_ ? fn(this.items_) : this.playlistLoadQueue.push(fn);
            }, videojs.PlaylistGrid.prototype.setPlayerOffScreen = function() {
                videojs.hasClass(this.player().el().parentNode, "video-js-responsive-container") ? this.playerContainer = this.player().el().parentNode : this.playerContainer = this.player().el(),
                    this.playlistTitle && this.playlistTitle.hide(), this.playerContainer.style.position = "absolute",
                    this.playerContainer.style.top = "-5000px", this.playerContainer.style.left = "-5000px";
            }, videojs.PlaylistGrid.prototype.loadOnClick = function(index) {
                this.loadItem(index), -1 == this.player().el().className.indexOf("vjs-has-started") && (videojs.addClass(this.player().el(), "vjs-has-started"),
                        this.player().posterImage.hide()), this.items_[index].options().type.indexOf("image") > -1 ? this.player().trigger("pause") : this.player().play(),
                    this.player().trigger({
                        type: "playlistload",
                        item: this.items_[index]
                    });
            }, videojs.PlaylistGrid.prototype.userInteraction = function(set) {
                return void 0 !== set && (this.userInteraction_ = set, this.userInteraction, this.interactionCheck_ && clearTimeout(this.interactionCheck_),
                    this.interactionCheck_ = setTimeout(videojs.bind(this, function() {
                        this.userInteraction_ = !1, clearTimeout(this.interactionCheck_), this.interactionCheck_ = !1;
                    }), 2e4)), this.userInteraction_;
            }, videojs.PlaylistGrid.prototype.loadItem = function(item) {
                var index;
                if (index = "object" == typeof item && void 0 !== item.index ? item.index : item,
                    this.currentItem = index, console.log("LOADING PLAYLIST ITEM", this.items_[index].options()),
                    this.items_[index].options().src && this.items_[index].options().type) this.player().src({
                    src: this.items_[index].options().src,
                    type: this.items_[index].options().type
                }), this.items_[index].options().poster && ("VIDEO" === this.player().tech.el().tagName && (this.player().tech.el().poster = this.items_[index].options().poster),
                    this.player().poster(this.items_[index].options().poster));
                else {
                    var quality = Object.keys(this.items_[index].options().media),
                        defaultQuality = quality[0],
                        qualitySorted = [],
                        pRegEx = /(\d+?)p/i,
                        dimensionRegEx = /\d+?x(\d+)/i,
                        has360p = !1;
                    if (quality.length > 1) {
                        for (var x = 0; x < quality.length; x++) {
                            var pResult = pRegEx.exec(quality[x]),
                                dimensionResult = dimensionRegEx.exec(quality[x]);
                            pResult && pResult[1] ? qualitySorted.push({
                                    size: parseInt(pResult[1]),
                                    key: quality[x]
                                }) : dimensionResult && dimensionResult[1] && qualitySorted.push({
                                    size: parseInt(dimensionResult[1]),
                                    key: quality[x]
                                }), 360 === qualitySorted[qualitySorted.length - 1].size && (has360p = quality[x]),
                                qualitySorted = qualitySorted.sort(function(a, b) {
                                    return a.size - b.size;
                                }).reverse();
                        }
                        defaultQuality = has360p ? has360p : qualitySorted[0].key, qualitySorted && this.player_.qualityControl && this.player_.qualityControl({
                            defaultQuality: defaultQuality,
                            sources: this.items_[index].options().media
                        });
                    } else defaultQuality = Object.keys(this.items_[index].options().media)[0];
                    this.player().src(this.items_[index].options().media[defaultQuality].source);
                    var poster = this.items_[index].options().media[defaultQuality].poster;
                    poster && ("VIDEO" === this.player().tech.el().tagName && (this.player().tech.el().poster = poster),
                        this.player().poster(poster), this.player().posterImage.show());
                }
                this.playlistTitle && (this.items_[index].options().title ? (this.playlistTitle.setTitle(this.items_[index].options().title),
                        this.playlistTitle.show()) : (this.playlistTitle.setTitle(""), this.playlistTitle.hide())),
                    this.items_[index].options().captions && this.player().addTextTrack("captions", "", "en", {
                        src: this.items_[index].options().captions
                    }), this.items_[index].options().subtitles && this.player().addTextTrack("subtitles", "", "en", {
                        src: this.items_[index].options().subtitles
                    }), this.items_[index].options().type.indexOf("image") > -1 && !this.options_.autoAdvance ? (this.player().controlBar.progressControl.hide(),
                        this.player().controlBar.playToggle.hide()) : (this.player().controlBar.progressControl.show(),
                        this.player().controlBar.playToggle.show());
            }, videojs.plugin("playlistGrid", function(options) {
                if (!(options.items && options.items.length || options.url && "" !== options.url)) throw new Error("No playlist items available");
                this.tech.el().style.backgroundColor = "transparent", console.log("[PLAYLIST GRID] plugin ", this.player());
                var defaults = {
                        columns: 3,
                        position: "top"
                    },
                    parentEl = this.player().el().parentNode,
                    playlistGrid = new videojs.PlaylistGrid(this.player(), Object.assign(defaults, options));
                return this.on("dispose", function() {
                        playlistGrid.dispose();
                    }), console.log("[PLAYLIST GRID] plugin ", parentEl, playlistGrid), options.container ? document.querySelector(options.container).appendChild(playlistGrid.el()) : parentEl.parentNode.insertBefore(playlistGrid.el(), parentEl.nextSibling),
                    this.player().playlistGrid = playlistGrid, playlistGrid;
            });
    }(),
    function() {
        "use strict";
        videojs.QualityMenu = videojs.MenuButton.extend({
                init: function(player, options) {
                    console.log(arguments), this.quality_ = options.defaultQuality, this.sources_ = options.sources,
                        videojs.MenuButton.call(this, player, options);
                    var that = this;
                    options.upscaleOnFullscreen && player.on("fullscreenchange", function() {
                        player.isFullscreen() && (that.sources("high") ? that.quality("high") : that.sources("medium") && that.quality("medium"));
                    });
                }
            }), videojs.QualityMenu.prototype.className = "vjs-quality-control", videojs.QualityMenu.prototype.buttonText = "Video Quality",
            videojs.QualityMenu.prototype.items_ = [], videojs.QualityMenu.prototype.createItems = function() {
                var items = [],
                    item = new videojs.QualityItem(this.player_, {
                        label: "Quality",
                        parent: this
                    });
                item.onClick = function() {}, item.el_.style.textTransform = "none", item.el_.style.fontWeight = "bold",
                    videojs.addClass(item.el_, "vjs-menu-title"), videojs.removeClass(item.el_, "vjs-menu-item"),
                    items.push(item);
                var qualitySortedKeys, dimensionSortedKeys, x, pRegEx = /(\d+?)p/i,
                    dimensionRegEx = /\d+?x(\d+)/i,
                    qualitySorted = {},
                    dimensionSorted = {},
                    quality = Object.keys(this.options_.sources);
                if (quality.length > 1)
                    for (x = 0; x < quality.length; x++) {
                        var pResult = pRegEx.exec(quality[x]),
                            dimensionResult = dimensionRegEx.exec(quality[x]);
                        pResult && pResult[1] && (qualitySorted[parseInt(pResult[1])] = quality[x]), dimensionResult && dimensionResult[1] && (dimensionSorted[parseInt(dimensionResult[1])] = quality[x]),
                            qualitySortedKeys = Object.keys(qualitySorted).sort().reverse(), dimensionSortedKeys = Object.keys(dimensionSorted).sort().reverse();
                    }
                var sortedSourcesKeys = [].concat(qualitySortedKeys, dimensionSortedKeys),
                    sortedSources = Object.assign(qualitySorted, dimensionSorted);
                for (console.log(sortedSourcesKeys, sortedSources, this.sources_), x = 0; x < sortedSourcesKeys.length; x++) sortedSources.hasOwnProperty(sortedSourcesKeys[x]) && (console.log(sortedSources[sortedSourcesKeys[x]]),
                    item = new videojs.QualityItem(this.player_, {
                        label: sortedSources[sortedSourcesKeys[x]].toLowerCase().replace(/\b[a-z]/g, function(letter) {
                            return letter.toUpperCase();
                        }),
                        sources: this.options_.sources[sortedSources[sortedSourcesKeys[x]]],
                        parent: this
                    }), item.on("qualityselect", videojs.bind(this, function(evt) {
                        console.log(arguments), this.quality(evt.quality);
                    })), items.push(item));
                return this.items_ = items, this.items_;
            }, videojs.QualityMenu.prototype.quality_ = null, videojs.QualityMenu.prototype.quality = function(value) {
                return value && this.setQuality(value), this.quality_;
            }, videojs.QualityMenu.prototype.setQuality = function(value) {
                if (value != this.quality()) {
                    for (var x = 0; x < this.items.length; x++) this.items[x].selected(!1), this.items[x].options().label.toLowerCase() == value && this.items[x].selected(!0);
                    this.quality_ = value;
                    var player = this.player_,
                        currentTime = player.currentTime();
                    player.poster();
                    player.pause(), player.autoplay(!0);
                    var selectedSource = this.sources(value);
                    player.src(selectedSource.source || selectedSource), player.currentTime(currentTime - .5);
                }
            }, videojs.QualityMenu.prototype.sources_ = {}, videojs.QualityMenu.prototype.sources = function(value) {
                return value ? this.sources_[value] : this.sources_;
            }, videojs.QualityItem = videojs.MenuItem.extend({
                init: function(player, options) {
                    console.log(options.parent.quality(), options.label.toLowerCase()), options.selected = options.parent.quality() == options.label.toLowerCase(),
                        vjs.MenuItem.call(this, player, options);
                }
            }), videojs.QualityItem.prototype.createEl = function(type, props) {
                var hdLabel = parseInt(this.options_.label) >= 720 ? '<span class="bv-hd"></span>' : "";
                return vjs.Button.prototype.createEl.call(this, "li", vjs.obj.merge({
                    className: "vjs-menu-item",
                    innerHTML: hdLabel + this.options_.label
                }, props));
            }, videojs.QualityItem.prototype.onClick = function() {
                this.trigger({
                    type: "qualityselect",
                    quality: this.options_.label.toLowerCase(),
                    sources: this.options_.sources
                });
            }, videojs.plugin("qualityControl", function(options) {
                if (console.log("Setting up upscale"), !options.sources) {
                    var sources = this.player().tag.getElementsByTagName("source"),
                        parsedSources = {};
                    console.log(sources);
                    for (var x = 0; x < sources.length; x++) {
                        var quality = sources[x].getAttribute("data-quality");
                        quality && (parsedSources[quality] || (parsedSources[quality] = []), parsedSources[quality].push({
                            src: sources[x].getAttribute("src"),
                            type: sources[x].getAttribute("type")
                        }), console.log("REMOVING SRC", this.player().tag, sources[x]));
                    }
                    console.log(parsedSources), this.player().src(parsedSources[options.defaultQuality].source || parsedSources[options.defaultQuality]),
                        console.log(parsedSources), options.sources = parsedSources;
                }
                var oldMenu = this.controlBar.getChild("qualityMenu");
                oldMenu && this.controlBar.removeChild(oldMenu);
                var button = this.controlBar.addChild("qualityMenu", options);
                this.controlBar.el().insertBefore(button.el(), this.controlBar.getChild("chaptersButton").el());
            });
    }(),
    function() {
        videojs.ResizeControl = videojs.MenuButton.extend({
                init: function(player, options) {
                    videojs.MenuButton.call(this, player, options), this.player_.on("resize", videojs.bind(this, this.onResize));
                }
            }), videojs.ResizeControl.prototype.createEl = function() {
                var props = {
                    className: "vjs-resize-button vjs-control vjs-menu-button bv-desktop",
                    innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">Enlarge</span></div>',
                    role: "button",
                    "aria-live": "polite",
                    tabIndex: 0
                };
                return videojs.Component.prototype.createEl(null, props);
            }, videojs.ResizeControl.prototype.onClick = videojs.FullscreenToggle.prototype.onClick,
            videojs.ResizeControl.prototype.createItems = function() {
                var items = [],
                    options = this.options();
                return this.largeBtn = new videojs.LargerToggle(this.player_, options.bigSize),
                    this.smallBtn = new videojs.SmallerToggle(this.player_, options.smallSize), items.push(this.largeBtn),
                    items.push(this.smallBtn), items;
            }, videojs.ResizeControl.prototype.unselectAll = function() {
                for (var children = this.children(), x = 0; x < children.length; x++) children[x].select(!1);
            }, videojs.ResizeControl.prototype.onResize = function() {
                console.log("RESIZE", this.player_.el().offsetHeight, this.options_.smallSize.h, this.options_.bigSize.h),
                    console.trace(), videojs.removeClass(this.largeBtn.el(), "disabled"), videojs.removeClass(this.smallBtn.el(), "disabled"),
                    this.player_.el().offsetHeight >= this.options_.bigSize.h ? videojs.addClass(this.largeBtn.el(), "disabled") : this.player_.el().offsetHeight <= this.options_.smallSize.h && videojs.addClass(this.smallBtn.el(), "disabled");
            }, videojs.LargerToggle = videojs.MenuItem.extend({
                init: function(player, options) {
                    videojs.Button.call(this, player, options);
                }
            }), videojs.LargerToggle.prototype.createEl = function(type, props) {
                return vjs.Button.prototype.createEl.call(this, "li", vjs.obj.merge({
                    className: "vjs-menu-item",
                    innerHTML: '<i class="bv-resize-full"></i>'
                }, props));
            }, videojs.LargerToggle.prototype.onClick = function() {
                this.options_.h && this.options_.w && (this.player().el().style.height = this.options_.h + "px",
                        this.player().el().style.width = this.options_.w + "px"), videojs.removeClass(this.player().el(), "vjs-small"),
                    videojs.addClass(this.player().el(), "vjs-large"), this.player().one("transitionend", videojs.bind(this, function() {
                        videojs.trigger(window, "resize"), this.player().trigger({
                            type: "resize"
                        });
                    }), !1);
            }, videojs.SmallerToggle = videojs.MenuItem.extend({
                init: function(player, options) {
                    videojs.Button.call(this, player, options);
                }
            }), videojs.SmallerToggle.prototype.createEl = function(type, props) {
                return vjs.Button.prototype.createEl.call(this, "li", vjs.obj.merge({
                    className: "vjs-menu-item",
                    innerHTML: '<i class="bv-resize-small"></i>'
                }, props));
            }, videojs.SmallerToggle.prototype.onClick = function() {
                this.options_.h && this.options_.w && (this.player().el().style.height = this.options_.h + "px",
                        this.player().el().style.width = this.options_.w + "px"), videojs.removeClass(this.player().el(), "vjs-large"),
                    videojs.addClass(this.player().el(), "vjs-small"), this.player().one("transitionend", videojs.bind(this, function() {
                        videojs.trigger(window, "resize"), this.player().trigger({
                            type: "resize"
                        });
                    }), !1);
            };
        var pluginFn = function(options) {
            var player = this.el();
            this.one("playerInit", function() {
                options = options || {};
                var newOpts = {};
                options.h > player.offsetHeight ? (newOpts.smallSize = {
                    h: player.offsetHeight,
                    w: player.offsetWidth
                }, newOpts.bigSize = options, videojs.addClass(player, "vjs-small")) : (newOpts.bigSize = {
                    h: player.offsetHeight,
                    w: player.offsetWidth
                }, newOpts.smallSize = options, videojs.addClass(player, "vjs-large")), console.log(newOpts, player.offsetHeight);
                var resize = this.controlBar.addChild("resizeControl", newOpts),
                    fullScreenLocation = videojs.findControlLocation(this, "vjs-fullscreen-control");
                fullScreenLocation = -1 == fullScreenLocation ? 0 : fullScreenLocation, this.controlBar.el().insertBefore(resize.el(), this.controlBar.el().childNodes[fullScreenLocation]),
                    this.controlBar.el().className += " vjs-does-resize";
            });
        };
        videojs.plugin("resize", pluginFn), videojs.plugin("bvResize", function(opts) {
            console.warn('Deprecated: "bvResize" is deprecated. Use "resize" instead.'), videojs.bind(this, pluginFn)(opts);
        });
    }(),
    function() {
        var showPoster = function(options) {
            this.on("ended", function() {
                this.posterImage.show();
            });
        };
        videojs.plugin("showPosterAtEnd", showPoster), videojs.plugin("bvShowPosterAtEnd", function(opts) {
            console.warn('Deprecated: "bvShowPosterAtEnd" is deprecated. Use "showPosterAtEnd" instead.'),
                videojs.bind(this, showPoster)(opts);
        });
    }(),
    function() {
        var tries = 0,
            setupPlaylistEvents = function() {
                this.playlist && this.playlist.el_ ? this.playlist.onPlaylistLoad(videojs.bind(this, function(items) {
                    this.playlist.regressPlaylistButton && (this.playlist.regressPlaylistButton.on("click", function(e) {
                        doTrack("Profile - Media - Controls - Left");
                    }), this.playlist.advancePlaylistButton.on("click", function(e) {
                        doTrack("Profile - Media - Controls - Right");
                    }));
                    for (var playlistItems = items, x = 0; x < playlistItems.length; x++) playlistItems[x].on("click", function() {
                        var type = playlistItems[x].options().type;
                        return function() {
                            switch (type.substr(0, type.indexOf("/"))) {
                                case "image":
                                    doTrack("Profile - Media - Controls - Photo Thumb");
                                    break;

                                case "video":
                                    doTrack("Profile - Media - Controls - Video Thumb");
                                    break;

                                case "vtour":
                                    doTrack("Profile - Media - Controls - Tour Thumb");
                            }
                        };
                    }());
                })) : (tries++, 10 > tries && setTimeout(videojs.bind(this, setupPlaylistEvents), 10));
            },
            logChecks = 0,
            cache = [],
            logFailed = !1,
            startCacheTimeout = function() {
                cacheTimeout = setTimeout(checkForLogFunc, 100);
            },
            checkForLogFunc = function() {
                "undefined" == typeof window.s || "undefined" == typeof window.s.tl ? (logChecks++,
                    100 > logChecks ? startCacheTimeout() : (logFailed = !0, console.log("No window.s found after 10 seconds"),
                        window.s = {
                            tl: function() {}
                        })) : cache.length && setTimeout(processCache, 250);
            },
            processCache = function() {
                for (; void 0 !== (cacheItem = cache.pop());) doTrack(cacheItem);
            },
            doTrack = function(name) {
                if (!logFailed) try {
                    window.s.forcedLinkTrackingTimeout = 500, window.s.tl(!0, "o", name);
                } catch (e) {
                    cache.push(name), startCacheTimeout();
                }
            };
        videojs.plugin("forrentSiteCatalyst", function(userOptions) {
            var loc = "/" == document.location.pathname || "http://www.forrent.com/" == document.location.href ? "Home" : "Profile";
            this.bigPlayButton.on("click", function(e) {
                doTrack(loc + " - Media - Controls - Screen Play");
            }), this.controlBar.playToggle.on("click", videojs.bind(this, function(e) {
                var className = this.controlBar.playToggle.el().className;
                doTrack(className.indexOf("vjs-paused") >= 0 ? loc + " - Media - Controls - Play" : loc + " - Media - Controls - Pause");
            })), this.controlBar.progressControl.on("click", function(e) {
                doTrack(loc + " - Media - Controls - Timeline");
            }), this.controlBar.fullscreenToggle.on("click", function(e) {
                doTrack(loc + " - Media - Controls - Size Toggle");
            }), this.controlBar.volumeControl.on("click", function(e) {
                doTrack(loc + " - Media - Controls - Volume");
            }), setTimeout(videojs.bind(this, setupPlaylistEvents), 1);
        });
    }(),
    function() {
        var pubid = !1,
            ct = !1,
            email_template = !1,
            share_url = !1,
            website_url = !1,
            iconPrefix = "bv-";
        videojs.SocialItem = videojs.MenuItem.extend({
            init: function(player, options) {
                videojs.MenuItem.call(this, player, options), "embed" == options.kind && (this.embedEl_ = new videojs.EmbedWindow(this.player(), {}),
                    this.player().el().appendChild(this.embedEl_.el()));
            }
        }), videojs.SocialItem.prototype.createEl = function(type, props) {
            return vjs.Button.prototype.createEl.call(this, "li", vjs.obj.merge({
                className: "vjs-menu-item",
                innerHTML: '<i class="' + iconPrefix + this.options_.iconClass + '"></i>'
            }, props));
        }, videojs.SocialItem.prototype.onClick = function(event) {
            var width, height, serialize = function(obj) {
                    var str = [];
                    for (var p in obj) str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                send = {
                    url: share_url || document.location.href,
                    title: document.title,
                    description: "Check out this cool video at " + document.location.href,
                    pubid: pubid || null,
                    email_template: email_template || null,
                    ct: ct || null
                },
                kind = this.options().kind,
                src = this.player().currentSrc();
            switch (kind) {
                case "embed":
                    theme = /\s?vjs-(.*?)-skin\s?/gi.exec(this.player().el().className)[1];
                    var pluginObj = this.player().options().plugins,
                        pluginStr = JSON.stringify(pluginObj),
                        embedCode = ['<script src="//player.bettervideo.com/player/video.dev.js"></script>', '<script src="//player.bettervideo.com/plugins/bvPlugins.js"></script>', '<video id="bvPlayer_1" class="video-js vjs-' + theme + '-skin" controls preload="auto" width="640" height="360" poster="' + this.player().poster() + '" data-setup=\'{"plugins":' + pluginStr + "}'>", '	<source src="' + src + '" type="video/mp4" />', "	<p>Video Playback Not Supported</p>", "</video>"].join("\n");
                    this.embedEl_.setEmbedCode(embedCode), this.embedEl_.show(), [].slice.call(this.embedEl_.el().getElementsByTagName("textarea"))[0].select();
                    break;

                case "link":
                    website_url && window.open(website_url, "Website");
                    break;

                case "more":
                    width = width || 550, height = height || 450, window.open("http://api.addthis.com/oexchange/0.8/offer??" + serialize(send), "AddThis", "height=" + height + ",width=" + width + ",modal=yes,alwaysRaised=yes");
                    break;

                case "facebook":
                    width = width || 550, height = height || 270;

                case "twitter":
                    width = width || 550, height = height || 260, send.text = send.description.replace(/\shttp\:\/\/.*$/gi, "");

                case "email":
                    width = width || 550, height = height || 700;

                default:
                    width = width || 550, height = height || 450, window.open("http://api.addthis.com/oexchange/0.8/forward/" + kind + "/offer?" + serialize(send), "AddThis", "height=" + height + ",width=" + width + ",modal=yes,alwaysRaised=yes");
            }
            this.player().trigger({
                type: "socialclick",
                kind: kind
            });
        }, videojs.SocialButton = videojs.MenuButton.extend({
            init: function(player, options) {
                videojs.MenuButton.call(this, player, options), this.items.length > 4 && (this.menu.contentEl().style.width = "15em",
                    this.menu.contentEl().style.left = "-7.5em"), this.on("click", this.onClick);
            }
        }), videojs.SocialButton.prototype.options_ = {
            facebook: !0,
            twitter: !0,
            googleplus: !0,
            linkedin: !0,
            pinterest: !0,
            delicious: !1,
            reddit: !1,
            email: !0,
            embed: !1,
            more: !0
        }, videojs.SocialButton.prototype.available = {
            facebook: {
                label: "Facebook",
                kind: "facebook",
                iconClass: "facebook"
            },
            twitter: {
                label: "Twitter",
                kind: "twitter",
                iconClass: "twitter"
            },
            googleplus: {
                label: "Google+",
                kind: "google_plusone_share",
                iconClass: "googleplus"
            },
            linkedin: {
                label: "LinkedIn+",
                kind: "linkedin",
                iconClass: "linkedin"
            },
            pinterest: {
                label: "Pinterest+",
                kind: "pinterest",
                iconClass: "pinterest"
            },
            delicious: {
                label: "Delicious",
                kind: "delicious",
                iconClass: "delicious"
            },
            reddit: {
                label: "Reddit",
                kind: "reddit",
                iconClass: "reddit"
            },
            more: {
                label: "More Services",
                kind: "more",
                iconClass: "plus"
            },
            email: {
                label: "Email",
                kind: "email",
                iconClass: "mail"
            },
            embed: {
                label: "Embed",
                kind: "embed",
                iconClass: "code"
            },
            website_url: {
                label: "Link",
                kind: "link",
                iconClass: "globe"
            }
        }, videojs.SocialButton.prototype.buttonText = "Social", vjs.SocialButton.prototype.buildCSSClass = function() {
            return "vjs-social-button vjs-control " + iconPrefix + "share " + vjs.MenuButton.prototype.buildCSSClass.call(this);
        }, videojs.SocialButton.prototype.onClick = function() {}, videojs.SocialButton.prototype.createItems = function() {
            var items = [],
                options = this.options();
            for (var item in this.available) this.available.hasOwnProperty(item) && options[item] && items.push(new videojs.SocialItem(this.player_, this.available[item]));
            return items;
        }, videojs.EmbedWindow = videojs.Component.extend({
            init: function(player, options) {
                videojs.Component.call(this, player, options), this.hide(), this.exitEl_ = new videojs.ExitButton(player, {}),
                    this.exitEl_.on("click", videojs.bind(this, function() {
                        this.hide();
                    })), this.el_.appendChild(this.exitEl_.el()), this.textAreaEl_ = document.createElement("textarea"),
                    this.textAreaEl_.style.fontSize = "10px", options.embedCode && this.setEmbedCode(options.embedCode),
                    this.el_.appendChild(this.textAreaEl_);
            },
            setEmbedCode: function(embedCode) {
                this.textAreaEl_.value = embedCode || "";
            }
        }), videojs.EmbedWindow.prototype.createEl = function(options) {
            return videojs.Component.prototype.createEl("div", {
                className: "vjs-embed-window ",
                innerHTML: '<h4 class="vjs-embed-title"><i class="' + iconPrefix + 'code"></i>  Embed Code</h4>',
                "aria-live": "polite",
                tabIndex: 0
            });
        };
        var social, pluginFn = function(options) {
            options = options || {}, options.pubid && (pubid = options.pubid), options.ct && (ct = options.ct),
                options.email_template && (email_template = options.email_template), options.share_url && (share_url = options.share_url),
                options.iconPrefix && (iconPrefix = options.iconPrefix), options.website_url && "http://" != options.website_url && "" !== options.website_url ? website_url = options.website_url : options.website_url && delete options.website_url,
                social = this.controlBar.addChild("socialButton", options);
        };
        videojs.plugin("socialMenu", pluginFn), videojs.plugin("bvSocial", function(options) {
            console.warn('Deprecated: "bvSocial" is deprecated. Use "socialMenu" instead.'),
                videojs.bind(this, pluginFn)(options);
        });
    }(),
    function() {
        "use strict";
        videojs.ShareButton = videojs.Button.extend({
                init: function(player, options) {
                    videojs.Button.call(this, player, options);
                }
            }), videojs.ShareButton.prototype.buttonText = "Share Video", videojs.ShareButton.prototype.options_ = {},
            videojs.ShareButton.prototype.buildCSSClass = function() {
                return "vjs-share-button " + videojs.Button.prototype.buildCSSClass.call(this);
            }, videojs.ShareButton.prototype.onClick = function(e) {
                e.stopImmediatePropagation(), this.overlay_ || (this.overlay_ = new videojs.ShareContainer(this.player_, this.options_),
                    this.closeEl_ = new videojs.ExitButton(this.player_, {}), this.closeEl_.on("click", videojs.bind(this, this.overlayClose)),
                    this.overlay_.el().appendChild(this.closeEl_.el()), videojs.one(window, "click", videojs.bind(this, this.overlayClose)),
                    this.player().one("playlistload", videojs.bind(this, this.overlayClose)), this.player_.addChild(this.overlay_),
                    setTimeout(videojs.bind(this.overlay_, this.overlay_.show), 1), this.player_.pause());
            }, videojs.ShareButton.prototype.overlayClose = function(e) {
                e.stopImmediatePropagation(), this.overlay_ && (this.player_.removeChild(this.overlay_),
                    this.overlay_.dispose(), delete this.overlay_);
            }, videojs.ShareButton.prototype.setUrl = function(url) {
                shareUrl = url;
            }, videojs.ShareButton.prototype.setTitle = function(title) {
                shareTitle = title;
            }, videojs.ShareButton.prototype.setDescription = function(desc) {
                shareDescription = desc;
            }, videojs.ShareContainer = videojs.BlurOverlay.extend({
                init: function(player, options) {
                    videojs.BlurOverlay.call(this, player, options), videojs.on(window, "resize", videojs.bind(this, this.onResize)),
                        this.onResize();
                }
            }), videojs.ShareContainer.prototype.options_ = {
                children: {
                    facebookShare: {},
                    twitterShare: {},
                    pinterestShare: {},
                    googlePlusShare: {},
                    linkedInShare: {},
                    emailShare: {},
                    embedShare: {}
                }
            }, vjs.ShareContainer.prototype.buildCSSClass = function() {
                return "vjs-sharing-overlay " + vjs.BlurOverlay.prototype.buildCSSClass.call(this);
            }, videojs.ShareContainer.prototype.onResize = function() {
                this.player().el().offsetWidth < 350 ? this.addClass("vjs-small") : this.removeClass("vjs-small");
            }, videojs.OverlaySocialButton = videojs.Button.extend({
                init: function(player, options) {
                    videojs.Button.call(this, player, options), this.options_.send.url = shareUrl, this.options_.send.description = shareDescription,
                        this.options_.send.title = shareTitle;
                }
            }), videojs.OverlaySocialButton.prototype.options_ = {
                windowWidth: 550,
                windowHeight: 450,
                send: {
                    url: "",
                    title: document.title,
                    description: "Check out this video at ",
                    pubid: null,
                    email_template: null,
                    ct: null
                }
            }, videojs.OverlaySocialButton.prototype.createEl = function(type, props) {
                var el;
                return props = vjs.obj.merge({
                        className: this.buildCSSClass(),
                        role: "button",
                        "aria-live": "polite",
                        tabIndex: 0
                    }, props), el = vjs.Component.prototype.createEl.call(this, "div", props), props.innerHTML || (this.contentEl_ = vjs.createEl("div", {
                        className: "vjs-control-content"
                    }), this.controlText_ = vjs.createEl("span", {
                        className: "vjs-control-text",
                        innerHTML: this.options_.text || "Need Text"
                    }), this.contentEl_.appendChild(this.controlText_), el.appendChild(this.contentEl_)),
                    el;
            }, videojs.OverlaySocialButton.prototype.buildCSSClass = function() {
                return "vjs-share-icon bv-" + (this.options_.icon || this.options_.text.toLowerCase());
            }, videojs.OverlaySocialButton.prototype.serialize = function(obj) {
                var str = [];
                for (var p in obj) str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            }, videojs.OverlaySocialButton.prototype.onClick = function(e, sendObj) {
                sendObj = sendObj || this.options_.send, console.log("SUBMITTING SOCIAL", sendObj),
                    window.open("http://api.addthis.com/oexchange/0.8/forward/" + (this.options_.addThisType || this.options_.text.toLowerCase()) + "/offer?" + this.serialize(sendObj), "AddThis", "height=" + this.options_.windowHeight + ",width=" + this.options_.windowWidth + ",modal=yes,alwaysRaised=yes"),
                    this.player().trigger({
                        type: "socialclick",
                        kind: this.options_.text
                    });
            }, videojs.TwitterShare = videojs.OverlaySocialButton.extend({
                init: function(player, options) {
                    videojs.OverlaySocialButton.call(this, player, videojs.obj.merge({
                        text: "Twitter",
                        windowWidth: 550,
                        windowHeight: 440
                    }, options));
                }
            }), videojs.TwitterShare.prototype.onClick = function(e) {
                var sendObj = videojs.obj.merge({}, this.options_.send);
                sendObj.title = sendObj.title + " \n" + sendObj.description, delete sendObj.description,
                    videojs.OverlaySocialButton.prototype.onClick.call(this, e, sendObj);
            }, videojs.FacebookShare = videojs.OverlaySocialButton.extend({
                init: function(player, options) {
                    videojs.OverlaySocialButton.call(this, player, videojs.obj.merge({
                        text: "Facebook",
                        windowWidth: 550,
                        windowHeight: 270
                    }, options));
                }
            }), videojs.FacebookShare.prototype.onClick = function(e) {
                var sendObj = videojs.obj.merge({}, this.options_.send);
                delete sendObj.title, delete sendObj.description, videojs.OverlaySocialButton.prototype.onClick.call(this, e, sendObj);
            }, videojs.PinterestShare = videojs.OverlaySocialButton.extend({
                init: function(player, options) {
                    videojs.OverlaySocialButton.call(this, player, videojs.obj.merge({
                        text: "Pinterest"
                    }, options));
                }
            }), videojs.GooglePlusShare = videojs.OverlaySocialButton.extend({
                init: function(player, options) {
                    videojs.OverlaySocialButton.call(this, player, videojs.obj.merge({
                        icon: "googleplus",
                        text: "Google+",
                        addThisType: "google_plusone_share"
                    }, options));
                }
            }), videojs.LinkedInShare = videojs.OverlaySocialButton.extend({
                init: function(player, options) {
                    videojs.OverlaySocialButton.call(this, player, videojs.obj.merge({
                        text: "LinkedIn"
                    }, options));
                }
            }), videojs.EmailShare = videojs.OverlaySocialButton.extend({
                init: function(player, options) {
                    videojs.OverlaySocialButton.call(this, player, videojs.obj.merge({
                        text: "Email"
                    }, options));
                }
            }), videojs.EmbedShare = videojs.OverlaySocialButton.extend({
                init: function(player, options) {
                    console.log(options), videojs.OverlaySocialButton.call(this, player, videojs.obj.merge({
                        icon: "code",
                        text: "Embed"
                    }, options));
                }
            }), videojs.EmbedShare.prototype.onClick = function(e) {
                console.log("Launch Embed Code"), this.overlay_ = new videojs.EmbedContainer(this.player_, this.options_),
                    console.log("this.overlay_", this.overlay_), setTimeout(videojs.bind(this, function() {
                        videojs.on(this.overlay_.el_, "click", function(e) {
                            e.stopPropagation();
                        }), videojs.one(window, "click", videojs.bind(this, this.overlayClose)), this.player().one("playlistload", videojs.bind(this, this.overlayClose));
                    }), 1), this.player_.addChild(this.overlay_), setTimeout(videojs.bind(this.overlay_, this.overlay_.show), 1),
                    this.player().trigger({
                        type: "socialclick",
                        kind: "Embed"
                    }), this.player_.pause();
            }, videojs.EmbedShare.prototype.overlayClose = function(e) {
                this.player_.removeChild(this.overlay_), this.overlay_.dispose(), delete this.overlay_;
            }, videojs.EmbedContainer = videojs.BlurOverlay.extend({
                init: function(player, options) {
                    videojs.BlurOverlay.call(this, player, options), console.log("EmbedContainer", this);
                }
            }), videojs.EmbedContainer.prototype.options_ = {
                children: {}
            }, videojs.EmbedContainer.prototype.createEl = function() {
                var returnEl = videojs.BlurOverlay.prototype.createEl.apply(this, arguments),
                    innerHTML = "";
                return this.closeEl_ = new videojs.ExitButton(this.player_, {}), this.closeEl_.on("click", videojs.bind(this, function() {
                        this.dispose();
                    })), this.formEl_ = videojs.createEl("div", {
                        className: "vjs-embed-code"
                    }), innerHTML = '<h3>Embed Code Options</h3><div class="vjs-embed-form-el">	<label>Maximum Width:</label> <input type="text" class="vjs-embed-width" name="vjs-embed-width" placeholder="auto" /></div>',
                    this.player_.options().plugins.playlist && "object" === (typeof this.player_.playlist).toLowerCase() && this.player_.playlist.items().length && (innerHTML += '	<div class="vjs-embed-form-el">		<label>Playlist Orientation:</label> <label class="radio"><input type="radio" class="vjs-embed-orientation-vertical" name="vjs-embed-orientation" value="vertical"> Vertical</label> <label class="radio"><input type="radio" class="vjs-embed-orientation" name="vjs-embed-orientation" value="horizontal"> Horizontal</label>	</div>'),
                    this.submitEl_ = videojs.createEl("button", {
                        innerHTML: "Get Embed Code"
                    }), this.formEl_.innerHTML = innerHTML, this.formEl_.appendChild(this.submitEl_),
                    this.formEl_.appendChild(this.closeEl_.el()), this.contentEl_.appendChild(this.formEl_),
                    videojs.on(this.submitEl_, "click", videojs.bind(this, this.getEmbedCode)), returnEl;
            }, videojs.EmbedContainer.prototype.getEmbedCodeOptions = function() {
                console.log(this.formEl_.querySelectorAll("input.vjs-embed-width"));
                var width = this.formEl_.querySelectorAll("input.vjs-embed-width")[0].value,
                    opts = {
                        width: width
                    };
                if (this.player_.options_.plugins.playlist && "object" === (typeof this.player_.playlist).toLowerCase() && this.player_.playlist.items().length) {
                    var orientationOpts = this.formEl_.querySelectorAll("input.vjs-embed-orientation-vertical")[0],
                        orientation = orientationOpts.checked ? "vertical" : "horizontal";
                    opts.vertical = "vertical" === orientation;
                }
                return opts;
            }, videojs.EmbedContainer.prototype.getEmbedCode = function() {
                var opts = this.getEmbedCodeOptions();
                this.player_.EmbedCode(opts, videojs.bind(this, function(data) {
                    this.formEl_.innerHTML = '<textarea style="height: 135px; width: 100%;">' + data + "</textarea>",
                        this.formEl_.appendChild(this.closeEl_.el());
                }));
            };
        var shareUrl = document.location.href,
            shareTitle = document.title,
            shareDescription = "Check out this video at";
        videojs.plugin("socialOverlay", function(options) {
            var shareButton, onScreen = options.onScreen || !1;
            options.url && (shareUrl = options.url), options.title && (shareTitle = options.title),
                options.description && (shareDescription = options.description), shareButton = onScreen ? this.addChild("shareButton") : this.controlBar.addChild("shareButton"),
                this.socialOverlay = shareButton;
        });
    }();
//# sourceMappingURL=bvPlugins.dev.map