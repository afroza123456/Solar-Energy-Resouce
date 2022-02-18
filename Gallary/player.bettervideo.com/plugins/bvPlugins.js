/*! bvPlugins - v1.5.3 - 2020-12-30 */
if (vjs.ImageFullscreenNext = vjs.Button.extend({
        init: function(a, b) {
            vjs.Button.call(this, a, b)
        }
    }), vjs.ImageFullscreenNext.prototype.buttonText = "Next Image", vjs.ImageFullscreenNext.prototype.buildCSSClass = function() {
        return "icon-step-forward " + vjs.Button.prototype.buildCSSClass.call(this)
    }, vjs.ImageFullscreenNext.prototype.onClick = function() {}, vjs.ImageFullscreenPrevious = vjs.Button.extend({
        init: function(a, b) {
            vjs.Button.call(this, a, b)
        }
    }), vjs.ImageFullscreenPrevious.prototype.buttonText = "Previous Image", vjs.ImageFullscreenPrevious.prototype.buildCSSClass = function() {
        return "icon-step-forward " + vjs.Button.prototype.buildCSSClass.call(this)
    }, vjs.ImageFullscreenPrevious.prototype.onClick = function() {}, videojs.ImageFullscreenModal = videojs.Component.extend({
        init: function(a, b) {
            videojs.Component.call(this, a, b)
        }
    }), videojs.ImageFullscreenModal.prototype.options_ = {
        children: {
            imageFullscreenNext: {},
            imageFullscreenPrevious: {}
        }
    }, videojs.ImageFullscreenModal.prototype.createEl = function(a, b) {
        var c = videojs.Component.createEl.call(this, "div", {
                className: "vjs-image-fullscreen-modal"
            }),
            d = videojs.createEl("div", {
                className: "vjs-image-fullscreen-modal-inner"
            }),
            e = videojs.createEl("div", {
                className: "vjs-image-fullscreen-overlay"
            });
        return this.contentEl_ = d, this.overlayEl_ = e, c.appendChild(d), c
    }, videojs.ImageFullscreenModal.prototype.overlayEl = function() {
        return this.overlayEl_
    }, videojs.ImageFullscreen = videojs.Component.extend({
        init: function(a, b) {
            videojs.Component.call(this, a, b)
        }
    }), videojs.ImageFullscreen.prototype.options_ = {
        children: {
            imageFullscreenOverlay: {},
            imageFullscreenModal: {}
        }
    }, vjs.Image = vjs.MediaTechController.extend({
        init: function(a, b, c) {
            this.featuresVolumeControl = vjs.Image.canControlVolume(), this.movingMediaElementInDOM = !0, this.featuresPlaybackRate = !1, this.featuresFullscreenResize = !1, this.featuresProgressEvents = !0, vjs.MediaTechController.call(this, a, b, c), this.setupTriggers();
            var d = b.source;
            d && this.currentSrc() === d.src ? a.trigger("loadstart") : d && (this.image_.src = d.src, a.trigger("waiting")), this.triggerReady(), this.videoControls = this.player_.controlBar.children(), this.hideVideoControls(), this.setupLoad(), videojs.addClass(a.el(), "vjs-image-tech")
        }
    }), vjs.Image.prototype.controlsToHide = ["currentTimeDisplay", "timeDivider", "durationDisplay", "remainingTimeDisplay", "liveDisplay", "fullscreenToggle", "volumeControl", "muteToggle", "volumeMenuButton", "playbackRateMenuButton", "captionsButton", "chaptersButton", "subtitlesButton", "muteMenuButton", "currentTimeToggle"], vjs.Image.prototype.hiddenControls = [], vjs.Image.prototype.hideVideoControls = function() {
        for (var a = 0; a < this.videoControls.length; a++)
            for (var b = 0; b < this.controlsToHide.length; b++) this.videoControls[a].name() == this.controlsToHide[b] && "none" !== videojs.getComputedDimension(this.videoControls[a].el(), "display") && (this.videoControls[a].hide(), this.hiddenControls.push(this.videoControls[a])), "playToggle" == this.videoControls[a].name() && this.playlist && this.playlist.options_ && !this.playlist.options().autoAdvance && (this.videoControls[a].hide(), this.hiddenControls.push(this.videoControls[a]))
    }, vjs.Image.prototype.showVideoControls = function() {
        for (; this.hiddenControls.length;) this.hiddenControls.pop().show()
    }, vjs.Image.prototype.dispose = function() {
        vjs.MediaTechController.prototype.dispose.call(this), clearInterval(this.timer_), this.showVideoControls(), videojs.removeClass(this.player().el(), "vjs-image-tech")
    }, vjs.Image.prototype.createEl = function() {
        var a, b;
        return b = this.player_, a = vjs.createEl("div", {
            className: "vjs-tech vjs-image-playback"
        }), this.image_ = vjs.createEl("img"), vjs.insertFirst(this.image_, a), vjs.insertFirst(a, b.el()), a
    }, vjs.Image.prototype.setupTriggers = function() {
        for (var a = vjs.Image.Events.length - 1; a >= 0; a--) vjs.on(this.image_, vjs.Image.Events[a], vjs.bind(this.player_, this.eventHandler))
    }, vjs.Image.prototype.eventHandler = function(a) {
        videojs.trigger(this.el_, a), a.stopPropagation()
    }, vjs.Image.prototype.setupLoad = function() {
        this.wasPlaying_ = !1, this.playing_ = !1, this.autoplay_ = !1, this.loaded_ = !1, this.timer_ && clearInterval(this.timer_), this.timer_ = setInterval(videojs.bind(this, this.timeUpdate_), 100), this.currentTime_ = 0, this.duration_ = 5, this.hide(), videojs.on(this.image_, "load", videojs.bind(this, this.triggerLoadEvents))
    }, vjs.Image.prototype.triggerLoadEvents = function() {
        this.loaded_ = !0, this.show(), videojs.trigger(this.el_, "durationchange"), videojs.trigger(this.el_, "progress"), videojs.trigger(this.el_, "loadedalladata"), videojs.trigger(this.el_, "timeupdate"), videojs.trigger(this.el_, "playing"), this.autoplay_ && this.play()
    }, vjs.Image.prototype.play = function() {
        this.duration_ === this.currentTime_ && this.setCurrentTime(0), this.playing_ = !0
    }, vjs.Image.prototype.pause = function() {
        this.playing_ = !1, this.wasPlaying_ = !1, videojs.trigger(this.el_, "pause")
    }, vjs.Image.prototype.paused = function() {
        return !this.playing_
    }, vjs.Image.prototype.currentTime = function() {
        return this.currentTime_
    }, vjs.Image.prototype.setCurrentTime = function(a) {
        this.currentTime_ = a
    }, vjs.Image.prototype.timeUpdate_ = function() {
        this.playing_ && this.loaded_ ? this.currentTime_ < this.duration_ - .1 ? (this.wasPlaying_ || (videojs.trigger(this.el_, "play"), this.wasPlaying_ = !0), this.currentTime_ += .1, videojs.trigger(this.el_, "timeupdate")) : (this.currentTime_ = this.duration_, this.ended_ = !0, this.playing_ = !1, this.wasPlaying_ = !1, videojs.trigger(this.el_, "timeupdate"), videojs.trigger(this.el_, "ended")) : this.wasPlaying_ = !1
    }, vjs.Image.prototype.duration = function() {
        return this.duration_
    }, vjs.Image.prototype.buffered = function() {
        return vjs.createTimeRange(0, this.duration_)
    }, vjs.Image.prototype.volume = function() {
        return 1
    }, vjs.Image.prototype.setVolume = function(a) {}, vjs.Image.prototype.muted = function() {
        return !1
    }, vjs.Image.prototype.setMuted = function(a) {}, vjs.Image.prototype.width = function() {
        return this.el_.offsetWidth
    }, vjs.Image.prototype.height = function() {
        return this.el_.offsetHeight
    }, vjs.Image.prototype.supportsFullScreen = function() {
        return "function" != typeof this.el_.webkitEnterFullScreen || !/Android/.test(vjs.USER_AGENT) && /Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT) ? !1 : !0
    }, vjs.Image.prototype.enterFullScreen = function() {
        var a = this.el_;
        a.paused && a.networkState <= a.HAVE_METADATA ? (this.el_.play(), setTimeout(function() {
            a.pause(), a.webkitEnterFullScreen()
        }, 0)) : a.webkitEnterFullScreen()
    }, vjs.Image.prototype.exitFullScreen = function() {
        this.el_.webkitExitFullScreen()
    }, vjs.Image.prototype.src = function(a) {
        this.setupLoad(), this.image_.src === a ? this.triggerLoadEvents() : this.image_.src = a
    }, vjs.Image.prototype.load = function() {}, vjs.Image.prototype.currentSrc = function() {
        return this.image_.src
    }, vjs.Image.prototype.poster = function() {
        return ""
    }, vjs.Image.prototype.setPoster = function(a) {}, vjs.Image.prototype.preload = function() {}, vjs.Image.prototype.setPreload = function(a) {}, vjs.Image.prototype.autoplay = function() {
        return this.autoplay_
    }, vjs.Image.prototype.setAutoplay = function(a) {
        this.autoplay_ = a
    }, vjs.Image.prototype.controls = function() {
        return !1
    }, vjs.Image.prototype.setControls = function(a) {}, vjs.Image.prototype.loop = function() {
        return !0
    }, vjs.Image.prototype.setLoop = function(a) {}, vjs.Image.prototype.error = function() {
        return this.image_.error
    }, vjs.Image.prototype.seeking = function() {
        return !1
    }, vjs.Image.prototype.ended = function() {
        return this.ended_
    }, vjs.Image.prototype.defaultMuted = function() {
        return !1
    }, vjs.Image.isSupported = function() {
        return !0
    }, vjs.Image.canPlaySource = function(a) {
        var b;
        return a.type ? (b = a.type.replace(/;.*/, "").toLowerCase(), b in vjs.Image.formats ? "maybe" : void 0) : ""
    }, vjs.Image.formats = {
        "image/jpg": "JPG",
        "image/jpeg": "JPG",
        "image/gif": "GIF",
        "image/png": "PNG",
        "image/bmp": "BMP"
    }, vjs.Image.canControlVolume = function() {
        return !1
    }, vjs.Image.Events = "load,error,play,pause".split(","), vjs.Image.disposeMediaElement = function(a) {
        if (a) {
            for (a.player = null, a.parentNode && a.parentNode.removeChild(a); a.hasChildNodes();) a.removeChild(a.firstChild);
            a.removeAttribute("src"), "function" == typeof a.load && a.load()
        }
    }, vjs.IS_OLD_ANDROID && (document.createElement("video").constructor.prototype.canPlayType = function(a) {
        return a && -1 != a.toLowerCase().indexOf("video/mp4") ? "maybe" : ""
    }), videojs.VirtualTourControls = videojs.Component.extend({
        init: function(a, b) {
            videojs.Component.call(this, a, b)
        }
    }), vjs.VirtualTourControls.prototype.createEl = function(a) {
        return videojs.Component.prototype.createEl.call(this, "div", vjs.obj.merge({
            className: this.buildCSSClass()
        }, a))
    }, vjs.VirtualTourControls.prototype.buildCSSClass = function() {
        return "vjs-virtual-tour-control-bar"
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
        init: function(a, b) {
            videojs.Button.call(this, a, b), this.on("mousedown", videojs.bind(this, this.onMouseDown))
        }
    }), vjs.ButtonHold.prototype.onMouseDown = function() {
        videojs.one(document.body, "mouseup", videojs.bind(this, this.onMouseUp)), this.player_.techCall("userInteraction", !0), this.startHoldAction()
    }, vjs.ButtonHold.prototype.onMouseUp = function() {
        this.endHoldAction()
    }, vjs.ButtonHold.prototype.holdInterval = null, vjs.ButtonHold.prototype.startHoldAction = function() {
        clearInterval(this.holdInterval), this.holdInterval = setInterval(videojs.bind(this, this.holdAction), 10)
    }, vjs.ButtonHold.prototype.endHoldAction = function() {
        clearInterval(this.holdInterval)
    }, vjs.ButtonHold.prototype.holdAction = function() {}, videojs.VirtualTourZoomIn = videojs.ButtonHold.extend({
        init: function(a, b) {
            videojs.ButtonHold.call(this, a, b)
        }
    }), vjs.VirtualTourZoomIn.prototype.buttonText = "Zoom In", vjs.VirtualTourZoomIn.prototype.buildCSSClass = function() {
        return "vjs-camera-control vjs-vtour-zoom-in bv-zoom-in " + vjs.Button.prototype.buildCSSClass.call(this)
    }, vjs.VirtualTourZoomIn.prototype.holdAction = function() {
        this.player_.techCall("zoom", .005)
    }, videojs.VirtualTourZoomOut = videojs.ButtonHold.extend({
        init: function(a, b) {
            videojs.ButtonHold.call(this, a, b)
        }
    }), vjs.VirtualTourZoomOut.prototype.buttonText = "Zoom Out", vjs.VirtualTourZoomOut.prototype.buildCSSClass = function() {
        return "vjs-camera-control vjs-vtour-zoom-out bv-zoom-out " + vjs.Button.prototype.buildCSSClass.call(this)
    }, vjs.VirtualTourZoomOut.prototype.holdAction = function() {
        this.player_.techCall("zoom", -.005)
    }, videojs.VirtualTourPanLeft = videojs.ButtonHold.extend({
        init: function(a, b) {
            videojs.ButtonHold.call(this, a, b)
        }
    }), vjs.VirtualTourPanLeft.prototype.buttonText = "Pan Left", vjs.VirtualTourPanLeft.prototype.buildCSSClass = function() {
        return "vjs-camera-control vjs-vtour-pan-left bv-left-open " + vjs.Button.prototype.buildCSSClass.call(this)
    }, vjs.VirtualTourPanLeft.prototype.holdAction = function() {
        this.player_.techCall("pan", 1)
    }, videojs.VirtualTourPanRight = videojs.ButtonHold.extend({
        init: function(a, b) {
            videojs.ButtonHold.call(this, a, b)
        }
    }), vjs.VirtualTourPanRight.prototype.buttonText = "Pan Right", vjs.VirtualTourPanRight.prototype.buildCSSClass = function() {
        return "vjs-camera-control vjs-vtour-pan-right bv-right-open " + vjs.Button.prototype.buildCSSClass.call(this)
    }, vjs.VirtualTourPanRight.prototype.holdAction = function() {
        this.player_.techCall("pan", -1)
    }, videojs.VirtualTourTiltUp = videojs.ButtonHold.extend({
        init: function(a, b) {
            videojs.ButtonHold.call(this, a, b)
        }
    }), vjs.VirtualTourTiltUp.prototype.buttonText = "Tilt Up", vjs.VirtualTourTiltUp.prototype.buildCSSClass = function() {
        return "vjs-camera-control vjs-vtour-tilt-up bv-up-open " + vjs.Button.prototype.buildCSSClass.call(this)
    }, vjs.VirtualTourTiltUp.prototype.holdAction = function() {
        this.player_.techCall("tilt", 1)
    }, videojs.VirtualTourTiltDown = videojs.ButtonHold.extend({
        init: function(a, b) {
            videojs.ButtonHold.call(this, a, b)
        }
    }), vjs.VirtualTourTiltDown.prototype.buttonText = "Tilt Down", vjs.VirtualTourTiltDown.prototype.buildCSSClass = function() {
        return "vjs-camera-control vjs-vtour-tilt-down bv-down-open " + vjs.Button.prototype.buildCSSClass.call(this)
    }, vjs.VirtualTourTiltDown.prototype.holdAction = function() {
        this.player_.techCall("tilt", -1)
    }, vjs.VirtualTour = vjs.MediaTechController.extend({
        init: function(a, b, c) {
            this.featuresVolumeControl = vjs.VirtualTour.canControlVolume(), this.featuresPlaybackRate = !1, this.movingMediaElementInDOM = !0, this.featuresFullscreenResize = !1, this.featuresProgressEvents = !0, vjs.MediaTechController.call(this, a, b, c), this.setupTriggers();
            var d = b.source;
            d && this.currentSrc() === d.src ? a.trigger("loadstart") : d && (this.src(d.src), a.trigger("waiting")), this.triggerReady(), this.videoControls = this.player_.controlBar.children(), this.hideVideoControls(), this.virtualTourControls_ || (this.virtualTourControls_ = a.addChild("virtualTourControls")), videojs.addClass(this.virtualTourControls_.virtualTourZoomOut.el(), "disabled"), videojs.addClass(this.virtualTourControls_.virtualTourTiltDown.el(), "disabled"), videojs.addClass(this.virtualTourControls_.virtualTourTiltUp.el(), "disabled"), this.setupLoad(), videojs.addClass(a.el(), "vjs-vtour-tech"), videojs.on(a.el(), "resize", videojs.bind(this, this.setupDimensions_))
        }
    }), vjs.VirtualTour.prototype.controlsToHide = ["currentTimeDisplay", "timeDivider", "durationDisplay", "remainingTimeDisplay", "liveDisplay", "muteToggle", "volumeMenuButton", "playbackRateMenuButton", "captionsButton", "chaptersButton", "subtitlesButton", "muteMenuButton", "currentTimeToggle"], vjs.VirtualTour.prototype.hiddenControls = [], vjs.VirtualTour.prototype.hideVideoControls = function() {
        for (var a = 0; a < this.videoControls.length; a++)
            for (var b = 0; b < this.controlsToHide.length; b++) this.videoControls[a].name() == this.controlsToHide[b] && "none" !== videojs.getComputedDimension(this.videoControls[a].el(), "display") && (this.videoControls[a].hide(), this.hiddenControls.push(this.videoControls[a])), "playToggle" == this.videoControls[a].name() && this.playlist && this.playlist.options_ && !this.playlist.options().autoAdvance && (this.videoControls[a].hide(), this.hiddenControls.push(this.videoControls[a]))
    }, vjs.VirtualTour.prototype.showVideoControls = function() {
        for (; this.hiddenControls.length;) this.hiddenControls.pop().show()
    }, vjs.VirtualTour.prototype.dispose = function() {
        vjs.MediaTechController.prototype.dispose.call(this), clearInterval(this.timer_), this.showVideoControls(), videojs.removeClass(this.player().el(), "vjs-vtour-tech"), this.player_.el().removeChild(this.virtualTourControls_.el())
    }, vjs.VirtualTour.prototype.createEl = function() {
        var a, b;
        return b = this.player_, a = vjs.createEl("div", {
            className: "vjs-tech vjs-vtour-playback"
        }), this.pane_ = vjs.createEl("div", {
            className: "vjs-vtour-pane"
        }), this.left_ = vjs.createEl("img"), this.center_ = vjs.createEl("img"), this.right_ = vjs.createEl("img"), this.left_.ondragstart = function() {
            return !1
        }, this.center_.ondragstart = function() {
            return !1
        }, this.right_.ondragstart = function() {
            return !1
        }, vjs.insertFirst(this.right_, this.pane_), vjs.insertFirst(this.center_, this.pane_), vjs.insertFirst(this.left_, this.pane_), vjs.insertFirst(this.pane_, a), vjs.insertFirst(a, b.el()), a
    }, vjs.VirtualTour.prototype.setupLoad = function() {
        this.wasPlaying_ = !1, this.playing_ = !1, this.autoplay_ = !1, this.loaded_ = !1, this.timer_ && clearInterval(this.timer_), this.currentTime_ = 0, this.duration_ = 50, this.interval_ = .05, this.direction_ = -1, this.speed_ = 2, this.currentZoom_ = 1, this.timer_ = setInterval(videojs.bind(this, this.timeUpdate_), 1e3 * this.interval_), this.userInteraction(!1), this.hide(), videojs.on(this.center_, "load", videojs.bind(this, this.triggerLoadEvents)), this.trackingMouse_ = !1, videojs.on(this.pane_, "mousedown", videojs.bind(this, this.beginMouseFollow_)), videojs.on(document.body, "mousemove", videojs.bind(this, this.doMouseFollow_)), videojs.on(this.pane_, "mousewheel", videojs.bind(this, this.beginMouseZoom_))
    }, vjs.VirtualTour.prototype.triggerLoadEvents = function() {
        setTimeout(videojs.bind(this, function() {
            this.loaded_ = !0, this.show(), this.setupDimensions_(), this.positionImages_(), this.positionPane_(), this.duration_ = this.imageSize_.w / (this.speed_ / this.interval_), videojs.trigger(this.el_, "durationchange"), videojs.trigger(this.el_, "progress"), videojs.trigger(this.el_, "loadedalladata"), videojs.trigger(this.el_, "playing"), this.autoplay && this.play()
        }), 500)
    }, vjs.VirtualTour.prototype.setupDimensions_ = function() {
        this.actualImageSize_ = videojs.getActualDimensions(this.center_), this.playerSize_ = {
            w: this.player().el().offsetWidth,
            h: this.player().el().offsetHeight
        }, this.oldSize_ = this.imageSize_ = {
            w: this.center_.offsetWidth,
            h: this.center_.offsetHeight
        }, this.pane_.style.width = 3 * this.imageSize_.w + "px", this.pane_.style.left = "-" + (this.imageSize_.w + this.imageSize_.w / 2) + "px"
    }, vjs.VirtualTour.prototype.pan = function(a) {
        this.direction_ = a, this.pan_(this.speed_ * this.direction_)
    }, vjs.VirtualTour.prototype.pan_ = function(a) {
        var b = parseInt(this.pane_.style.left),
            c = b + a;
        c = this.checkConstraints_(c), this.pane_.style.left = c + "px"
    }, vjs.VirtualTour.prototype.tilt = function(a) {
        this.tilt_(a)
    }, vjs.VirtualTour.prototype.tilt_ = function(a) {
        this.getImageSize_();
        var b = parseInt(this.pane_.style.top) || 0,
            c = b + a;
        c = this.checkConstraints_(c, !0), this.pane_.style.top = c + "px"
    }, vjs.VirtualTour.prototype.zoom = function(a) {
        this.zoom_(a)
    }, vjs.VirtualTour.prototype.zoom_ = function(a, b) {
        parseFloat(this.pane_.style.height), parseFloat(this.center_.style.width), this.currentZoom_ += a, newHeight = Math.round(1e3 * this.currentZoom_) / 10, newWidth = this.actualImageSize_.w * this.currentZoom_, this.currentZoom_ > 1.75 && (this.currentZoom_ = 1.75, newHeight = 175, newWidth = 1.5 * this.actualImageSize_.w), this.currentZoom_ < 1 ? (this.currentZoom_ = 1, newHeight = 100, newWidth = this.actualImageSize_.w, videojs.addClass(this.virtualTourControls_.virtualTourZoomOut.el(), "disabled"), videojs.addClass(this.virtualTourControls_.virtualTourTiltDown.el(), "disabled"), videojs.addClass(this.virtualTourControls_.virtualTourTiltUp.el(), "disabled")) : (videojs.removeClass(this.virtualTourControls_.virtualTourZoomOut.el(), "disabled"), videojs.removeClass(this.virtualTourControls_.virtualTourTiltDown.el(), "disabled"), videojs.removeClass(this.virtualTourControls_.virtualTourTiltUp.el(), "disabled")), this.pane_.style.height = newHeight + "%", this.pane_.style.width = 3 * newWidth + "px", this.positionImages_(), this.positionPane_(b)
    }, vjs.VirtualTour.prototype.getImageSize_ = function() {
        this.oldSize_ = this.imageSize_, this.imageSize_ = {
            w: this.center_.offsetWidth,
            h: this.center_.offsetHeight
        }
    }, vjs.VirtualTour.prototype.positionImages_ = function() {
        this.getImageSize_(), this.left_.style.left = 0, this.center_.style.left = this.imageSize_.w - 1 + "px", this.right_.style.left = 2 * this.imageSize_.w - 2 + "px"
    }, vjs.VirtualTour.prototype.positionPane_ = function(a) {
        var b, c;
        3 * this.oldSize_.w, 3 * this.imageSize_.w, a ? (b = a.x, c = a.y) : (b = this.playerSize_.w / 2, c = this.playerSize_.h / 2);
        var d = parseInt(this.pane_.style.left),
            e = Math.floor(Math.abs(d) / this.oldSize_.w),
            f = Math.abs(d) - e * this.oldSize_.w + b,
            g = f / this.oldSize_.w,
            h = -1 * (e * this.imageSize_.w + g * this.imageSize_.w - b),
            i = parseFloat(this.pane_.style.top) || 0,
            j = c / this.playerSize_.h,
            k = i - (this.imageSize_.h - this.oldSize_.h) * j;
        this.pane_.style.left = this.checkConstraints_(Math.round(h)) + "px", this.pane_.style.top = this.checkConstraints_(k, !0) + "px"
    }, vjs.VirtualTour.prototype.checkConstraints_ = function(a, b) {
        if (b) {
            if (a <= -1 * (this.imageSize_.h - this.playerSize_.h)) return this.playerSize_.h - this.imageSize_.h;
            if (a >= 0) return 0
        } else {
            if (a >= 0) return -1 * this.imageSize_.w;
            if (a <= -1 * (3 * this.imageSize_.w - this.playerSize_.w)) return -1 * (2 * this.imageSize_.w - this.playerSize_.w)
        }
        return a
    }, vjs.VirtualTour.prototype.beginMouseFollow_ = function(a) {
        a.stopImmediatePropagation(), this.userInteraction(!0), this.pane_.style.cursor = "-webkit-grabbing", this.playingMouse_ = this.playing_, this.mouseMoved_ = !1, this.playingMouse_ && this.player_.pause(), this.trackingMouse_ = !0, this.previousMouse_ = {
            x: a.clientX,
            y: a.clientY
        }, videojs.one(document.body, "mouseup", videojs.bind(this, this.endMouseFollow_))
    }, vjs.VirtualTour.prototype.doMouseFollow_ = function(a) {
        if (this.trackingMouse_) {
            this.mouseMoved_ = !0, a.stopImmediatePropagation();
            var b = {
                x: a.clientX - this.previousMouse_.x,
                y: a.clientY - this.previousMouse_.y
            };
            this.pan_(b.x), this.tilt_(b.y), b.x > 0 ? this.direction_ = 1 : b.x < 0 && (this.direction_ = -1), this.previousMouse_ = {
                x: a.clientX,
                y: a.clientY
            }
        }
    }, vjs.VirtualTour.prototype.endMouseFollow_ = function(a) {
        this.trackingMouse_ = !1, this.pane_.style.cursor = "-webkit-grab", this.mouseMoved_ ? this.playingMouse_ && this.player_.play() : this.playingMouse_ || this.player_.play()
    }, vjs.VirtualTour.prototype.beginMouseZoom_ = function(a) {
        a.preventDefault(), this.userInteraction(!0);
        var b = a.detail ? -120 * a.detail : a.wheelDelta,
            c = 0 > b,
            d = videojs.findPosition(this.el_);
        c ? this.zoom_(.05, {
            x: a.pageX - d.left,
            y: a.pageY - d.top
        }) : this.zoom_(-.05, {
            x: a.pageX - d.left,
            y: a.pageY - d.top
        })
    }, vjs.VirtualTour.prototype.userInteraction = function(a) {
        this.userInteraction_ = a, a ? this.player_.controlBar.progressControl.hide() : this.player_.controlBar.progressControl.show()
    }, vjs.VirtualTour.prototype.src = function(a) {
        this.setupLoad(), this.center_.src === a ? this.triggerLoadEvents() : (this.left_.src = a, this.center_.src = a, this.right_.src = a)
    }, vjs.VirtualTour.prototype.play = function() {
        this.playing_ = !0
    }, vjs.VirtualTour.prototype.pause = function() {
        this.playing_ = !1, this.wasPlaying_ = !1, videojs.trigger(this.el_, "pause")
    }, vjs.VirtualTour.prototype.paused = function() {
        return !this.playing_
    }, vjs.VirtualTour.prototype.currentTime = function() {
        return this.currentTime_
    }, vjs.VirtualTour.prototype.setCurrentTime = function(a) {
        this.currentTime_ = a
    }, vjs.VirtualTour.prototype.timeUpdate_ = function() {
        this.playing_ && this.loaded_ ? (this.currentTime_ < this.duration_ || this.userInteraction_ ? (this.wasPlaying_ || (videojs.trigger(this.el_, "play"), this.wasPlaying_ = !0), this.userInteraction_ || (this.currentTime_ += this.interval_, videojs.trigger(this.el_, "timeupdate"))) : (this.ended_ = !0, this.playing_ = !1, this.wasPlaying_ = !1, videojs.trigger(this.el_, "ended")), this.pan_(this.speed_ * this.direction_)) : this.wasPlaying_ = !1
    }, vjs.VirtualTour.prototype.setupTriggers = function() {
        for (var a = vjs.VirtualTour.Events.length - 1; a >= 0; a--) vjs.on(this.center_, vjs.VirtualTour.Events[a], vjs.bind(this.player_, this.eventHandler))
    }, vjs.VirtualTour.prototype.eventHandler = function(a) {
        videojs.trigger(this.el_, a), a.stopPropagation()
    }, vjs.VirtualTour.prototype.duration = function() {
        return this.duration_
    }, vjs.VirtualTour.prototype.buffered = function() {
        return vjs.createTimeRange(0, this.duration_)
    }, vjs.VirtualTour.prototype.volume = function() {
        return 1
    }, vjs.VirtualTour.prototype.setVolume = function(a) {}, vjs.VirtualTour.prototype.muted = function() {
        return !1
    }, vjs.VirtualTour.prototype.setMuted = function(a) {}, vjs.VirtualTour.prototype.width = function() {
        return this.el_.offsetWidth
    }, vjs.VirtualTour.prototype.height = function() {
        return this.el_.offsetHeight
    }, vjs.VirtualTour.prototype.supportsFullScreen = function() {
        return "function" != typeof this.el_.webkitEnterFullScreen || !/Android/.test(vjs.USER_AGENT) && /Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT) ? !1 : !0
    }, vjs.VirtualTour.prototype.enterFullScreen = function() {
        var a = this.el_;
        a.paused && a.networkState <= a.HAVE_METADATA ? (this.el_.play(), setTimeout(function() {
            a.pause(), a.webkitEnterFullScreen()
        }, 0)) : a.webkitEnterFullScreen()
    }, vjs.VirtualTour.prototype.exitFullScreen = function() {
        this.el_.webkitExitFullScreen()
    }, vjs.VirtualTour.prototype.load = function() {}, vjs.VirtualTour.prototype.currentSrc = function() {
        return this.center_.src
    }, vjs.VirtualTour.prototype.poster = function() {
        return ""
    }, vjs.VirtualTour.prototype.setPoster = function(a) {}, vjs.VirtualTour.prototype.preload = function() {}, vjs.VirtualTour.prototype.setPreload = function(a) {}, vjs.VirtualTour.prototype.autoplay = function() {
        return this.autoplay_
    }, vjs.VirtualTour.prototype.setAutoplay = function(a) {
        this.autoplay_ = a
    }, vjs.VirtualTour.prototype.controls = function() {
        return !1
    }, vjs.VirtualTour.prototype.setControls = function(a) {}, vjs.VirtualTour.prototype.loop = function() {
        return !0
    }, vjs.VirtualTour.prototype.setLoop = function(a) {}, vjs.VirtualTour.prototype.error = function() {
        return this.center_.error
    }, vjs.VirtualTour.prototype.seeking = function() {
        return !1
    }, vjs.VirtualTour.prototype.ended = function() {
        return this.ended_
    }, vjs.VirtualTour.prototype.defaultMuted = function() {
        return !1
    }, vjs.VirtualTour.isSupported = function() {
        return !0
    }, vjs.VirtualTour.canPlaySource = function(a) {
        var b;
        return a.type ? (b = a.type.replace(/;.*/, "").toLowerCase(), b in vjs.VirtualTour.formats ? "maybe" : void 0) : ""
    }, vjs.VirtualTour.formats = {
        "vtour/jpg": "JPG",
        "vtour/jpeg": "JPG",
        "vtour/gif": "GIF",
        "vtour/png": "PNG",
        "vtour/bmp": "BMP"
    }, vjs.VirtualTour.canControlVolume = function() {
        return !1
    }, vjs.VirtualTour.Events = "load,error,play,pause".split(","), vjs.VirtualTour.disposeMediaElement = function(a) {
        if (a) {
            for (a.player = null, a.parentNode && a.parentNode.removeChild(a); a.hasChildNodes();) a.removeChild(a.firstChild);
            a.removeAttribute("src"), "function" == typeof a.load && a.load()
        }
    }, vjs.IS_OLD_ANDROID && (document.createElement("video").constructor.prototype.canPlayType = function(a) {
        return a && -1 != a.toLowerCase().indexOf("video/mp4") ? "maybe" : ""
    }), videojs.getActualDimensions = function(a) {
        var b = a.cloneNode(!0);
        document.body.appendChild(b), b.style.position = "fixed", b.style.left = "-99999px", b.style.display = "block";
        var c = {};
        return c.width = c.w = b.offsetWidth, c.height = c.h = b.offsetHeight, document.body.removeChild(b), c
    }, function() {
        videojs.BlurOverlay = videojs.Component.extend({
            init: function(a, b) {
                void videojs.Component.call(this, a, b)
            }
        }), videojs.BlurOverlay.prototype.options_ = {
            children: {}
        }, videojs.BlurOverlay.prototype.createEl = function(a, b) {
            var c = videojs.createEl("div", {
                    className: this.buildCSSClass()
                }),
                d = videojs.createEl("div", {
                    className: "vjs-blur-container"
                });
            return this.contentEl_ = d, c.appendChild(this.contentEl_), c
        }, videojs.BlurOverlay.prototype.buildCSSClass = function() {
            return "vjs-blur-overlay " + vjs.Component.prototype.buildCSSClass.call(this)
        }, videojs.BlurOverlay.prototype.show = function() {
            var a, b;
            this.player_.addClass("vjs-has-overlay"), this.el_.style.display = "table", "Flash" != this.player_.techName && (a = this.player_.tech.el(), b = this.player_.el(), "Html5" == this.player_.techName && (a.style.clip = "rect(0 0 " + b.offsetWidth + "px " + b.offsetHeight + "px)"), videojs.addClass(a, "vjs-blur")), this.player_.controlBar.el().style.opacity = "0", this.el_.style.opacity = "1"
        }, videojs.BlurOverlay.prototype.hide = function() {
            var a = this.player_.tech.el();
            videojs.Component.prototype.hide.call(this), a.style.clip = "", videojs.removeClass(a, "vjs-blur"), this.player_.controlBar.el().style.opacity = "", this.player_.removeClass("vjs-has-overlay")
        }, videojs.BlurOverlay.prototype.dispose = function() {
            this.hide(), videojs.Component.prototype.dispose.call(this)
        }
    }(), function() {
        "use strict";
        videojs.ExitButton || (videojs.ExitButton = videojs.Button.extend({
            init: function(a, b) {
                videojs.Button.call(this, a, b)
            }
        }), videojs.ExitButton.prototype.buttonText = "Exit", videojs.ExitButton.prototype.buildCSSClass = function() {
            return "vjs-control vjs-exit-button bv-cancel " + vjs.Component.prototype.buildCSSClass.call(this)
        })
    }(), function() {
        "use strict";
        videojs.findControlLocation = function(a, b) {
            for (var c = a.controlBar.el().childNodes, d = -1, e = 0; e < c.length; e++)
                if (-1 != c[e].className.indexOf(b)) {
                    d = e;
                    break
                }
            return d
        }
    }(), function() {
        "use strict";
        videojs.PauseButton || (videojs.PauseButton = videojs.Button.extend({
            init: function(a, b) {
                videojs.Component.call(this, a, b)
            }
        }), videojs.PauseButton.prototype.buttonText = "Pause", videojs.PauseButton.prototype.buildCSSClass = function() {
            return "vjs-control vjs-pause-button bv-pause " + vjs.Component.prototype.buildCSSClass.call(this)
        }, videojs.PauseButton.prototype.onClick = function() {})
    }(), function() {
        "use strict";

        function a(a, b) {
            b || (b = window.location.href), a = a.replace(/[\[\]]/g, "\\$&");
            var c = new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)"),
                d = c.exec(b);
            return d ? d[2] ? decodeURIComponent(d[2].replace(/\+/g, " ")) : "" : null
        }
        var b = videojs.Player.prototype.init,
            c = !1;
        videojs.Player = videojs.Player.extend({
            init: function(a, c, d) {
                var e = videojs.IS_IPHONE || videojs.IS_IPOD;
                if (!c) {
                    var f = a.getAttribute("data-setup"),
                        g = f || "{}",
                        h = document.createElement("textarea");
                    h.innerHTML = g.replace(/\s?(\w+?):/gi, '"$1":');
                    var i = h.innerText || h.textContent;
                    f && a.setAttribute("data-setup", i), c = JSON.parse(i)
                }
                if (c = c || {}, c.plugins || (c.plugins = {}), c.plugins.bvThemeLoader = c.plugins.bvThemeLoader || {}, c.plugins.bvReporting = void 0 === c.plugins.bvReporting ? {} : c.plugins.bvReporting, c.plugins.responsiveControlBar = {}, c.techOrder = c.techOrder || ["html5", "flash", "image", "virtualTour"], navigator.userAgent.indexOf("Trident/5") > -1 && (c.techOrder.indexOf("flash") > -1 && c.techOrder.splice(videojs.options.techOrder.indexOf("flash"), 1), c.techOrder.unshift("flash")), e && c.plugins.socialOverlay && (c.plugins.socialOverlay = !1), b.call(this, a, c, d), this.controlBar.removeChild("progressControl"), this.controlBar.addChild("progressControlExtended"), vjs.IS_IOS && (videojs.Player.prototype.play = function() {
                        function a() {
                            b.hasStarted_ && 0 === b.currentTime() && (b.src(b.currentSrc()), b.techCall("play"))
                        }
                        this.techCall("play");
                        var b = this.player();
                        return setTimeout(a, 1500), this
                    }), e) {
                    -1 != this.el_.parentNode.className.indexOf("vjs-") && videojs.addClass(this.el_.parentNode, "vjs-iphone"), this.addClass("vjs-iphone");
                    var j = this.controlBar.getChild("muteToggle"),
                        k = this.controlBar.getChild("volumeControl"),
                        l = this.controlBar.getChild("volumeMenuButton");
                    j && j.hide(), k && k.hide(), l && l.hide()
                }
                var m = this,
                    n = setInterval(function() {
                        m.el_ && 1 == videojs.getComputedDimension(m.el_, "opacity") && (clearInterval(n), setTimeout(function() {
                            m.trigger("playerInit")
                        }, 10))
                    }, 10);
                this.player_.on("contextmenu", videojs.bind(this, this.onContextmenu))
            }
        }), videojs.Player.prototype.onContextmenu = function(b) {
            if (b.preventDefault(), b.stopPropagation(), this.clearContextMenu(), !this.contextMenu_ || b.ctrlKey && b.shiftKey && b.altKey) {
                this.contextMenu_ = videojs.createEl("div", {
                    className: "bv-context-menu"
                });
                var d = [{
                    text: "BetterVideo Player 1.5.3"
                }];
                b.ctrlKey && b.shiftKey && b.altKey && d.push({
                    text: "Developer - Push To Embed",
                    action: videojs.bind(this, function() {
                        var b = this.player_.addChild("embedContainer"),
                            c = b.getEmbedCodeOptions(),
                            d = a("bv_uid") || window.prompt("UID");
                        d && this.player_.PushEmbedCode(c, d, videojs.bind(this, function() {
                            this.player_.removeChild("embedContainer")
                        }))
                    })
                });
                for (var e, f = 0; f < d.length; f++) e = videojs.createEl("div", {
                    className: "bv-context-menu-item",
                    innerHTML: d[f].href ? '<a href="' + d[f].href + '">' + d[f].text + "</a>" : d[f].text,
                    style: "white-space: nowrap;"
                }), d[f].action && videojs.on(e, "click", function() {
                    var a = d[f];
                    return function() {
                        a.action()
                    }
                }()), this.contextMenu_.appendChild(e)
            }
            this.contextMenu_.style.left = "-10000px", this.contextMenu_.style.top = b.pageY + "px", document.body.appendChild(this.contextMenu_), setTimeout(videojs.bind(this, function() {
                var a = this.contextMenu_.offsetWidth;
                b.pageX + a >= window.innerWidth ? this.contextMenu_.style.left = b.pageX - a + "px" : this.contextMenu_.style.left = b.pageX + "px"
            }), 10), this.contextMenuOpen_ = !0, videojs.one(window, "click", videojs.bind(this, this.clearContextMenu)), this.paused() || (c = !0, this.pause())
        }, videojs.Player.prototype.clearContextMenu = function(a) {
            this.contextMenuOpen_ && (document.body.removeChild(this.contextMenu_), this.contextMenuOpen_ = !1), c && this.play()
        }
    }(), function() {
        vjs.CurrentTimeToggle = vjs.Component.extend({
            init: function(a, b) {
                vjs.Component.call(this, a, b), this.remainingTimeDisplay.hide(), this.remainingToggled_ = !1, this.on("click", videojs.bind(this, this.onClick))
            }
        }), vjs.CurrentTimeToggle.prototype.createEl = function() {
            var a = vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-current-time-toggle vjs-time-controls vjs-control"
            });
            return a
        }, vjs.CurrentTimeToggle.prototype.onClick = function(a) {
            this.remainingToggled_ ? (this.remainingTimeDisplay.hide(), this.currentTimeDisplay.show(), this.remainingToggled_ = !1) : (this.remainingTimeDisplay.show(), this.currentTimeDisplay.hide(), this.remainingToggled_ = !0)
        }, vjs.CurrentTimeToggle.prototype.options_ = {
            children: {
                currentTimeDisplay: {},
                remainingTimeDisplay: {}
            }
        };
        var a = {},
            b = videojs.ControlBar.prototype.options_.children;
        delete b.remainingTimeDisplay;
        for (var c in b) b.hasOwnProperty(c) && ("currentTimeDisplay" === c ? a.currentTimeToggle = {} : a[c] = b[c]);
        videojs.ControlBar.prototype.options_.children = a, videojs.Image.prototype.controlsToHide.push("currentTimeToggle")
    }(), function() {
        "use strict";

        function a(a, b, c) {
            var d = {
                plugins: a.plugins,
                techOrder: a.techOrder,
                sources: a.sources,
                dimension: a.height / a.width < .75 ? "vjs-hd" : "vjs-sd",
                poster: b.poster || "",
                preload: b.preload || "auto",
                autoplay: b.autoplay || "",
                "class": b["class"],
                controls: b.controls
            };
            return a.plugins.playlist && (d.plugins.playlist.vertical = !!c.vertical), d
        }! function() {
            function a(a) {
                this.message = a
            }
            var b = "undefined" != typeof exports ? exports : self,
                c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            a.prototype = new Error, a.prototype.name = "InvalidCharacterError", b.btoa || (b.btoa = function(b) {
                for (var d, e, f = String(b), g = 0, h = c, i = ""; f.charAt(0 | g) || (h = "=", g % 1); i += h.charAt(63 & d >> 8 - g % 1 * 8)) {
                    if (e = f.charCodeAt(g += .75), e > 255) throw new a("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                    d = d << 8 | e
                }
                return i
            }), b.atob || (b.atob = function(b) {
                var d = String(b).replace(/=+$/, "");
                if (d.length % 4 == 1) throw new a("'atob' failed: The string to be decoded is not correctly encoded.");
                for (var e, f, g = 0, h = 0, i = ""; f = d.charAt(h++); ~f && (e = g % 4 ? 64 * e + f : f, g++ % 4) ? i += String.fromCharCode(255 & e >> (-2 * g & 6)) : 0) f = c.indexOf(f);
                return i
            })
        }(), videojs.Player.prototype.EmbedCode = function(b, c) {
            var d = a(this.options(), this.tagAttributes, b),
                e = window.btoa(JSON.stringify(d)),
                f = this;
            videojs.post("//player.bettervideo.com/embed/getUnique.php", {
                config: e
            }, function(a) {
                try {
                    void(a = JSON.parse(a))
                } catch (d) {}
                var e = (b && b.width || 640, parseInt(f.options().height) / parseInt(f.options().width) * 100 + "%");
                f.options().plugins.playlist && "object" === (typeof f.playlist).toLowerCase() && f.playlist.items().length && (e = b.vertical ? "calc(" + e + " - 84px )" : "calc(" + e + " + 150px)");
                var g = '<div class="bvEmbed" style="position: relative; padding-top: ' + e + "; height: 0; " + (b.width ? "max-width: " + b.width.replace(/%|em|px/gi, "") + "px; " : "") + 'overflow: hidden;">\r\n	<iframe width="100%" height="100%" seamless frameborder="0" scrolling="no" allowfullscreen src="//player.bettervideo.com/embed/?uid=' + a.uid + '" style="position: absolute; top:0; left: 0; width: 100%; height: 100%;"></iframe>\r\n</div>';
                "function" == typeof c && c(g)
            })
        }, videojs.Player.prototype.PushEmbedCode = function(b, c, d, e) {
            var f = a(this.options(), this.tagAttributes, b),
                g = window.btoa(JSON.stringify(f)),
                h = this,
                i = {
                    config: g,
                    uid: c
                };
            e && (i.overwrite = e), videojs.post("//player.bettervideo.com/embed/addUnique.php", i, function(a) {
                try {
                    void(a = JSON.parse(a))
                } catch (e) {}
                a.error ? "UID Duplicate" === a.error ? window.confirm("Duplicate UID: " + c + ". Do you wish to overwrite?") && h.PushEmbedCode(b, c, d, 1) : window.alert(a.error) : window.alert(a.uid + " added.")
            })
        }
    }(), function() {
        "use strict";
        videojs.ControlBar.prototype.hideControl = function(a) {
            if (this.hiddenControls = this.hiddenControls || {}, a) {
                var b, c, d, e = {};
                switch (typeof a) {
                    case "string":
                        b = this.getChild(a), c = a;
                        break;
                    case "object":
                        if (a instanceof Array) {
                            for (d = 0; d < a.length; d++) this.hideControl(a[d]);
                            return
                        }
                        b = a, c = a.name();
                        break;
                    case "undefined":
                        return
                }
                b && !this.hiddenControls[c] && (e.visible = "none" !== videojs.getComputedDimension(b.el(), "display"), e.control = b, b.hide(), void(this.hiddenControls[c] = e))
            }
        }, videojs.ControlBar.prototype.showControl = function(a) {
            if (this.hiddenControls = this.hiddenControls || {}, a) {
                var b, c, d, e = {};
                switch (typeof a) {
                    case "string":
                        b = this.getChild(a), c = a;
                        break;
                    case "object":
                        if (a instanceof Array) {
                            for (d = 0; d < a.length; d++) this.showControl(a[d]);
                            return
                        }
                        b = a, c = a.name()
                }
                e = this.hiddenControls[c], e && (e.visible && e.control.show(), delete this.hiddenControls[c])
            }
        }
    }(), function() {
        videojs.isMobile = function() {
            var a = !1;
            return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/gi.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4))) && (a = !0), a
        }
    }(), "function" != typeof Object.assign && (Object.assign = function(a, b) {
        "use strict";
        if (null === a) throw new TypeError("Cannot convert undefined or null to object");
        for (var c = Object(a), d = 1; d < arguments.length; d++) {
            var e = arguments[d];
            if (null !== e)
                for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (c[f] = e[f])
        }
        return c
    }), function() {
        "use strict";
        videojs.post || (vjs.post = function(a, b, c, d) {
            var e, f;
            b = b || {}, "undefined" == typeof XMLHttpRequest && (window.XMLHttpRequest = function() {
                try {
                    return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
                } catch (a) {}
                try {
                    return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
                } catch (b) {}
                try {
                    return new window.ActiveXObject("Msxml2.XMLHTTP")
                } catch (c) {}
                throw new Error("This browser does not support XMLHttpRequest.")
            }), f = new XMLHttpRequest;
            try {
                f.open("POST", a), f.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01"), f.setRequestHeader("Content-type", "application/json;  charset=UTF-8")
            } catch (g) {
                d(g)
            }
            e = 0 === a.indexOf("file:") || 0 === window.location.href.indexOf("file:") && -1 === a.indexOf("http"), f.onreadystatechange = function() {
                4 === f.readyState && (200 === f.status || e && 0 === f.status ? c && c(f.responseText) : d && d())
            };
            try {
                f.send(JSON.stringify(b))
            } catch (g) {
                d && d(g)
            }
        })
    }(), function(a, b, c) {
        b.ProgressControlExtended = b.ProgressControl.extend({
            init: function(a, c) {
                b.ProgressControl.call(this, a, c)
            }
        }), b.ProgressControlExtended.prototype.options_ = {
            children: {
                currentTimeToggle: {},
                durationDisplay: {},
                seekBarExtended: {}
            }
        }, b.SeekBarExtended = b.SeekBar.extend({
            init: function(a, c) {
                b.SeekBar.call(this, a, c), this.on("mouseover", this.onMouseOver), this.boundEvents.over = {
                    mousemove: b.bind(this, this.onMouseMove)
                }
            }
        }), b.SeekBarExtended.prototype.createEl = function() {
            var a = b.SeekBar.prototype.createEl.call(this);
            return this.previewEl_ = b.createEl("div", {
                className: "vjs-seek-preview"
            }), this.previewDisplayEl_ = b.createEl("div", {
                className: "vjs-seek-preview-display"
            }), this.previewEl_.appendChild(this.previewDisplayEl_), a.appendChild(this.previewEl_), a
        }, b.SeekBarExtended.prototype.onMouseDown = function(a) {
            this.player_.scrubbing = !0, vjs.Slider.prototype.onMouseDown.call(this, a), this.videoWasPlaying = !this.player_.paused(), this.player_.pause()
        }, b.SeekBarExtended.prototype.onMouseOver = function(a) {
            this.on("mousemove", this.boundEvents.over.mousemove)
        }, b.SeekBarExtended.prototype.onMouseMove = function(a) {
            var c = this.calculateDistance(a) * this.player_.duration();
            this.player_.scrubbing && (c == this.player_.duration() && (c -= .1), this.player_.currentTime(c)), this.previewDisplayEl_.innerHTML = vjs.formatTime(c, this.player_.duration());
            var d = a.pageX - b.findPosition(this.el_).left;
            20 >= d ? this.previewDisplayEl_.style.marginLeft = 20 - d + "px" : d >= this.el_.offsetWidth - 20 ? this.previewDisplayEl_.style.marginLeft = this.el_.offsetWidth - 20 - d + "px" : this.previewDisplayEl_.style.marginLeft = 0, this.previewEl_.style.left = d + "px"
        }
    }(window, window.videojs), function() {
        "use strict";
        vjs.hasClass = function(a, b) {
            return a && -1 != a.className.indexOf(b)
        }, vjs.PlayToggle.prototype.removeRestart = function() {
            setTimeout(videojs.bind(this, function() {
                vjs.hasClass(this.el_, "bv-cw") && vjs.removeClass(this.el_, "bv-cw")
            }), 1)
        }, vjs.PlayToggle.prototype.onPlay = function() {
            this.removeRestart(), vjs.hasClass(this.el_, "vjs-paused") && vjs.removeClass(this.el_, "vjs-paused"), vjs.addClass(this.el_, "vjs-playing"), vjs.addClass(this.el_, "vjs-has-started"), this.el_.children[0].children[0].innerHTML = "Pause"
        }, vjs.PlayToggle.prototype.onPause = function() {
            var a = this.player().bigPlayButton;
            vjs.removeClass(this.el_, "bv-cw"), vjs.removeClass(this.el_, "vjs-playing"), vjs.removeClass(a.el(), "bv-cw"), this.player_.duration() <= this.player_.currentTime() ? (vjs.addClass(this.el_, "bv-cw"), vjs.addClass(a.el(), "bv-cw"), vjs.addClass(this.player_.el(), "vjs-ended"), this.el_.children[0].children[0].innerHTML = "Replay", this.removeRestart_ = videojs.bind(this, function() {
                vjs.removeClass(this.el_, "bv-cw"), vjs.addClass(a.el(), "bv-cw")
            }), this.player_.one("playlistautoload", this.removeRestart_)) : (vjs.addClass(this.el_, "vjs-paused"), this.el_.children[0].children[0].innerHTML = "Play")
        }
    }(), function() {
        "use strict";
        var a = {},
            b = videojs.ControlBar.prototype.options_.children;
        for (var c in b) b.hasOwnProperty(c) && ("muteToggle" === b[c] ? a.volumeMenuButton = {} : a[c] = b[c]);
        videojs.ControlBar.prototype.options_.children = a, videojs.Player.prototype.options_.nativeControlsForTouch = !1, videojs.plugin("responsiveControlBar", function(a) {
            function b() {
                var b = c.controlBar,
                    d = c.el().offsetWidth,
                    e = ["timeDivider", "durationDisplay", "liveDisplay", "volumeControl", "muteToggle", "playbackRateMenuButton", "chaptersButton", "subtitlesButton"],
                    f = ["chaptersButton", "subtitlesButton", "logoButton", "dimTheLightsToggle"];
                d > 500 ? (b.showControl(e), b.hideControl("volumeMenuButton")) : (b.hideControl(e), b.showControl("volumeMenuButton")), d > 235 ? b.showControl(f) : b.hideControl(f), c.removeClass("vjs-control-bar-large"), c.removeClass("vjs-control-bar-medium"), c.removeClass("vjs-control-bar-small"), d >= a.breakpoints.upper ? c.addClass("vjs-control-bar-large") : d >= a.breakpoints.lower && d <= a.breakpoints.upper ? c.addClass("vjs-control-bar-medium") : c.addClass("vjs-control-bar-small")
            }
            var c = this;
            a = a || {}, a.breakpoints = a.breakpoitns || {
                lower: 360,
                upper: 500
            }, c.one("playerInit", function() {
                c.on("resize", b), videojs.on(window, "resize", b), b()
            }), c.on("dispose", function() {
                c.off("reisze", b), videojs.off(window, "resize", b), c = null
            })
        })
    }(), function() {
        "use strict";
        videojs.Player.prototype.unloadTextTracks = function(a) {
            var b, c = ["captions", "subtitles", "chapters", "descriptions", "metadata"],
                d = this.textTracks_ = this.textTracks_ || [];
            if (a)
                for (this.clearTrackButton(a), b = d.length - 1; b >= 0; b--) d[b] && d[b].options_.kind === a && (d[b].deactivate(), d[b].dispose(), d.splice(b, 1));
            else
                for (b = 0; b < c.length; b++) this.unloadTextTracks(c[b])
        }, videojs.Player.prototype.clearTrackButton = function(a) {
            var b = this.controlBar;
            if (b && b[a + "Button"]) {
                for (; b[a + "Button"].children_.length > 0;) try {
                    b[a + "Button"].removeChild(b[a + "Button"].children_[0])
                } catch (c) {}
                b[a + "Button"].hide()
            }
        };
        var a = videojs.Player.prototype.addTextTrack;
        videojs.Player.prototype.addTextTrack = function(b, c, d, e) {
            if (this.clearTrackButton(b), a.apply(this, arguments), this.controlBar) {
                var f = this.controlBar[b + "Button"];
                f.menu = f.createMenu(), f.addChild(f.menu), f.show()
            }
        }
    }(), function() {
        function a(a) {
            function b() {
                setTimeout(videojs.bind(this, function() {
                    this.muted(!1)
                }), 0), videojs.addClass(this.el(), "vjs-has-started"), videojs.removeClass(this.bigPlayButton.el(), "vjs-automute"), videojs.removeClass(this.bigPlayButton.el(), "vjs-automute-restart"), this.bigPlayButton.hide(), this.off("play", f), this.off("loadstart", c), this.bigPlayButton.off("click", e), this.tech.off("mousedown", e), this.tech.off("mousedown", this.tech.onClick), this.tech.on("mousedown", this.tech.onClick), a.loop && this.loop(!1)
            }
            if (!videojs.isMobile()) {
                a = videojs.obj.merge({
                    restart: !1,
                    loop: !1
                }, a);
                var c, d, e, f, g;
                g = !1, e = videojs.bind(this, function(b) {
                    b.stopImmediatePropagation(), this.currentTime() != this.duration() && (a.restart ? (this.trigger({
                        type: "restartunmute"
                    }), this.currentTime(0), videojs.addClass(this.el(), "vjs-playing")) : this.trigger({
                        type: "autoplayunmute"
                    }), c())
                }), c = videojs.bind(this, b), d = videojs.bind(this, function() {
                    c()
                }), f = videojs.bind(this, function() {
                    videojs.removeClass(this.el(), "vjs-has-started"), videojs.removeClass(this.el(), "vjs-playing"), setTimeout(videojs.bind(this, function() {
                        this.bigPlayButton.show()
                    }), 0), videojs.addClass(this.bigPlayButton.el(), "vjs-automute"), a.restart && videojs.addClass(this.bigPlayButton.el(), "vjs-automute-restart"), g || setTimeout(videojs.bind(this, function() {
                        videojs.removeClass(this.el(), "vjs-has-started"), videojs.removeClass(this.el(), "vjs-playing"), this.bigPlayButton.show(), g = !0, this.bigPlayButton.one("click", e), this.tech.one("mousedown", e), this.tech.off("mousedown", this.tech.onClick), "object" == typeof this.playlist && this.playlist.options().autoAdvance ? this.one("playlistload", c) : this.one("loadstart", c)
                    }), 1e3)
                }), this.on("play", f), this.options_.autoplay = !0, this.options_.automute = !0, a.restart && (this.options_.automuterestart = !0), a.loop && this.loop(!0), this.muted(!0), this.autoplay(!0), setTimeout(videojs.bind(this, function() {
                    this.paused() && this.play()
                }), 1e3)
            }
        }
        videojs.plugin("automute", a)
    }(), function() {
        function a(a) {
            if (ca = !1, ia.eventLimits.impression) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "View",
                    value: null
                })
            }
        }

        function b(a) {
            if (ia.eventLimits.loadedmetadata) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Meta Data Loaded",
                    value: null
                })
            }
        }

        function c(a) {
            if (ia.eventLimits.loadeddata) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Video Data Loading",
                    value: null
                })
            }
        }

        function d(a) {
            if (ia.eventLimits.loadedalldata && !ca) {
                ca = !0;
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "All Video Data Loaded",
                    value: null
                })
            }
        }

        function e(a) {
            if (da) return void(da = !1);
            if (ea) {
                if (ea = !1, Z.options_.automute) {
                    if (!ia.eventLimits.autoplaymute) return;
                    return void Z.trigger({
                        type: "autoplaymute"
                    })
                }
                if (Z.options_.autoplay || Z.autoplay()) {
                    if (!ia.eventLimits.autoplay) return;
                    return void Z.trigger({
                        type: "autoplay"
                    })
                }
            }
            var b = P();
            if (/icon\-undo/gi.test(Z.controlBar.playToggle.el_.className)) {
                if (!ia.eventLimits.restart) return;
                return void H({
                    category: b.cid,
                    action: b.vid,
                    label: "Restart",
                    value: N()
                })
            }
            ia.eventLimits.play && H({
                category: b.cid,
                action: b.vid,
                label: "Play",
                value: N()
            })
        }

        function f(a) {
            if (!(!ia.eventLimits.pause || da || Z.duration() <= Z.currentTime())) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Pause",
                    value: N()
                })
            }
        }

        function g(a) {
            da = !0, videojs.one(document, "mouseup", h)
        }

        function h(a) {
            if (ia.eventLimits.seek) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Seek",
                    value: N()
                })
            }
        }

        function i(a) {
            videojs.one(document, "mouseup", j)
        }

        function j(a) {
            if (ia.eventLimits.volume) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Volume Change",
                    value: O()
                })
            }
        }

        function k(a) {
            if (ia.eventLimits.volume) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Mute",
                    value: !Z.muted()
                })
            }
        }

        function l(a) {
            if (ia.eventLimits.time && !da) {
                var b = N(!1),
                    c = N(),
                    d = Math.round(b / Z.duration() * 100);
                if (b && _ != b && d != aa) {
                    var e = P();
                    (25 == d || 50 == d || 75 == d) && (_ = b, aa = d, H({
                        category: e.cid,
                        action: e.vid,
                        label: "Progress - " + d + "%",
                        value: c
                    }));
                    var f = Math.floor(b) % 5;
                    Math.floor(b) == $ || f ? 0 > b - $ && ($ = Math.floor(b)) : (M({
                        category: e.cid,
                        action: e.vid,
                        label: "Progress",
                        value: Math.floor(b)
                    }), $ = Math.floor(b))
                }
            }
        }

        function m(a) {
            if (ia.eventLimits.end) {
                $ = 0, aa = 0, _ = 0;
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "End",
                    value: null
                })
            }
        }

        function n(a) {
            if (ia.eventLimits.durationchange) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Duration Changed",
                    value: null
                })
            }
        }

        function o(a) {
            if (ia.eventLimits.progress) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Download Progress",
                    value: null
                })
            }
        }

        function p(a) {
            if (!ia.eventLimits.resize || ba) return void(ba = !1);
            var b = P();
            H({
                category: b.cid,
                action: b.vid,
                label: "Resize",
                value: null
            })
        }

        function q(a) {
            if (ia.eventLimits.error) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Error",
                    value: null
                })
            }
        }

        function r(a) {
            if (ia.eventLimits.fullscreen) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Fullscreen",
                    value: null
                })
            }
        }

        function s(a) {
            if (ia.eventLimits.social) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Social - " + a.kind,
                    value: null
                })
            }
        }

        function t(a) {
            if (ia.eventLimits.autoplay) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Auto Play",
                    value: N()
                })
            }
        }

        function u(a) {
            if (ia.eventLimits.autoplaymute) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Auto Play - mute",
                    value: N()
                })
            }
        }

        function v(a) {
            if (ia.eventLimits.autoplayunmute) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Auto Play - unmute",
                    value: N()
                })
            }
        }

        function w(a) {
            if (ia.eventLimits.restartunmute) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Restart - unmute",
                    value: N()
                })
            }
        }

        function x(a) {
            if (ia.eventLimits.playlistload) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Playlist Load",
                    value: N()
                })
            }
        }

        function y(a) {
            if (ia.eventLimits.playlistload) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Playlist Auto Load",
                    value: N()
                })
            }
        }

        function z(a) {
            if (ia.eventLimits.calltoactionclose) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Call to Action Close",
                    value: a.actionTime
                })
            }
        }

        function A(a) {
            if (ia.eventLimits.calltoactionclose) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Call to Action - " + a.label,
                    value: a.actionTime
                })
            }
        }

        function B(a) {
            if (ia.eventLimits.lightson) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Lights On Click",
                    value: N()
                })
            }
        }

        function C(a) {
            if (ia.eventLimits.lightsoff) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Lights Off Click",
                    value: N()
                })
            }
        }

        function D(a) {
            if (ia.eventLimits.logo) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Logo Click",
                    value: N()
                })
            }
        }

        function E(a) {
            if (ia.eventLimits.onscreenaction) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "On Screen Action - " + a.label,
                    value: N()
                })
            }
        }

        function F(a) {
            if (ia.eventLimits.clicktocall) {
                var b = P();
                H({
                    category: b.cid,
                    action: b.vid,
                    label: "Click To Call - " + a.label,
                    value: N()
                })
            }
        }

        function G() {
            if (W && X)
                for (var a = 0; a < Y.length; a++) H(Y[a])
        }

        function H(a) {
            var b = P(),
                c = !1;
            if (b && b.ext) switch (b.ext.toLowerCase()) {
                case "flv":
                case "fla":
                case "mp4":
                case "webm":
                case "ogg":
                case "ogv":
                    c = !0;
                    break;
                case "jpg":
                case "jpeg":
                case "gif":
                case "png":
                    c = !1
            }
            return c ? void(W && X ? (I(a), M(a)) : Y.push(a)) : !1
        }

        function I(a) {
            if (!ia.debug && W) {
                var b;
                switch (W) {
                    case 1:
                        if (ga("bv.send", "event", a.category, a.action, a.label, a.value), ia.gaAccounts.length)
                            for (b = 0; b < ia.gaAccounts.length; b++) ga("bvExtraGA" + b + ".send", "event", ia.gaLabels[b] || ia.secondaryLabel, a.action, a.label, a.value);
                        break;
                    case 2:
                        if (_gaq.push(["bv._trackEvent", a.category, a.action, a.label, a.value]), ia.gaAccounts.length)
                            for (b = 0; b < ia.gaAccounts.length; b++) _gaq.push(["bvExtraGA" + b + "._trackEvent", ia.gaLabels[b] || ia.secondaryLabel, a.action, a.label, a.value]);
                        break;
                    case 3:
                }
            }
        }

        function J() {
            var a;
            if (window.ga && window.ga.getAll) {
                if (W = 1, ga("create", ja, "auto", "bv"), ia.gaAccounts.length)
                    for (a = 0; a < ia.gaAccounts.length; a++) ga("create", ia.gaAccounts[a], "auto", "bvExtraGA" + a);
                ga("bv.send", "pageview"), G()
            } else if (window._gat && window._gat._getTracker) {
                if (W = 2, _gat._createTracker(ja, "bv"), ia.gaAccounts.length)
                    for (a = 0; a < ia.gaAccounts.length; a++) _gat._createTracker(ia.gaAccounts[a], "bvExtraGA" + a);
                _gaq.push(["bv._trackPageview"]), G()
            } else if (window.urchinTracker) W = 3, G();
            else if (10 > V) V++, setTimeout(J, 500);
            else {
                if (W = 1, function(a, b, c, d, e, f, g) {
                        a.GoogleAnalyticsObject = e, a[e] = a[e] || function() {
                            (a[e].q = a[e].q || []).push(arguments)
                        }, a[e].l = 1 * new Date, f = b.createElement(c), g = b.getElementsByTagName(c)[0], f.async = 1, f.src = d, g.parentNode.insertBefore(f, g)
                    }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", ja, {
                        name: "bv"
                    }), ia.gaAccounts.length)
                    for (a = 0; a < ia.gaAccounts.length; a++) ga("create", ia.gaAccounts[a], {
                        name: "bvExtraGA" + a
                    });
                ga("bv.send", "pageview"), G()
            }
        }

        function K() {
            if (S = ka.get("bvUser"), !S) {
                var a = Math.ceil(1e10 * Math.random());
                S = "BVUSER" + a, ka.set("bvUser", S, 3e3)
            }
            var b = function(a) {
                a = JSON.parse(a), T = a.SaveInitPageResult.playerid, U = a.SaveInitPageResult.pageid, X = !0, G()
            };
            Z.ready(function() {
                var a = L();
                if (ia.debug) X = !0, G();
                else {
                    var c = {
                        pageParams: a
                    };
                    ia.usecustomeridentifier && ia.customeridentifier && (c.customeridentifier = ia.customeridentifier), videojs.post("https://services.bettervideo.com/Reporting/ReportingWS.svc/saveInitPage", c, b, function(a) {})
                }
            })
        }

        function L() {
            var a = P(),
                b = new UAParser,
                c = b.getOS(),
                d = b.getBrowser(),
                e = {
                    br: d.name + " " + d.version + (d.minor ? " " + d.minor : ""),
                    cid: a.cid,
                    fv: a.cid,
                    os: c.name + " " + c.version,
                    ss: window.screen.width + "x" + window.screen.height,
                    title: document.title,
                    uid: S,
                    videocount: Z.playlist && Z.playlist.options && Z.playlist.options().items ? Z.playlist.options().items.length : 1
                };
            return e
        }

        function M(a) {
            return args = {
                pid: T,
                pageid: U,
                cid: a.category,
                vcd: a.action,
                a: a.label
            }, null !== a.value ? args.val = a.value : args.val = N(), ia.debug ? void(args.pid = "DEBUG") : void videojs.post("https://services.bettervideo.com/Reporting/ReportingWS.svc/SaveEvent", {
                eventParams: args
            }, function(a) {}, function(a) {})
        }

        function N(a) {
            return a = void 0 === a ? !0 : a, a ? Math.round(Z.currentTime()) : Z.currentTime()
        }

        function O() {
            return Math.round(100 * Z.volume())
        }

        function P() {
            var a, b, c, d = Z.player().currentSrc(),
                e = d.split("/"),
                f = e[e.length - 1],
                g = f.split(".");
            g.length > 2 ? (a = ia.clientID || g[0], b = ia.siteID || g[1], c = g[2]) : (a = ia.clientID || "0", b = ia.siteID || g[0], c = g[1]);
            var h = {
                cid: a,
                vid: b,
                filename: f,
                ext: c
            };
            return h
        }

        function Q(a) {
            return JSON.stringify(a, void 0)
        }

        function R(a) {
            return JSON.parse(a)
        }
        var S, T, U, V = 0,
            W = 0,
            X = !1,
            Y = [],
            Z = null,
            $ = 0,
            _ = 0,
            aa = 0,
            ba = !0,
            ca = !1,
            da = !1,
            ea = !0,
            fa = {
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
            ha = {
                eventLimits: fa,
                gaAccounts: [],
                gaLabels: [],
                secondaryGA: null,
                secondaryLabel: "Better Video",
                debug: !1
            },
            ia = {},
            ja = "UA-42516461-1",
            ka = {
                getExpiry: function(a) {
                    a = a || 1;
                    var b = new Date;
                    return b.setTime(b.getTime() + 24 * a * 60 * 60 * 1e3), b = b.toUTCString()
                },
                find: function(a) {
                    for (var b = document.cookie.split(";"), c = 0; c < b.length; c++)
                        if (b[c].indexOf(a) > -1) return decodeURIComponent(b[c].split("=")[1]);
                    return null
                },
                remove: function(a) {
                    this.get(a) && this.set(a, null, -1)
                },
                set: function(a, b, c) {
                    var d = Q(b);
                    document.cookie = a + "=" + d + "; expires=" + this.getExpiry(c) + "; path=/"
                },
                add: function(a, b, c) {
                    this.get(a) ? this.set(a, this.get(a) + "," + b, c) : this.set(a, b, c)
                },
                get: function(a) {
                    var b = new RegExp("(?:^|; )" + a + "=([^;]*)"),
                        c = document.cookie.match(b);
                    return c ? R(c[1]) : void 0
                }
            };
        videojs.JSONP || (videojs.JSONP = function(a, b) {
            function c() {
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", b = "", c = -1; ++c < 15;) b += a.charAt(Math.floor(52 * Math.random()));
                return b
            }

            function d(a) {
                var d = a.match(/callback=jsonp.(\w+)/),
                    f = d ? d[1] : c();
                return videojs.JSONP[f] = function(a) {
                    b(a), delete videojs.JSONP[f], e.removeChild(g)
                }, "videojs.JSONP." + f
            }
            var e = document.getElementsByTagName("head")[0],
                f = d(a),
                g = document.createElement("script");
            g.type = "text/javascript", g.src = a.replace(/(\{|%7B)callback(\}|%7D)/, f), e.appendChild(g)
        }), videojs.plugin("bvReporting", function(h) {
            if (h !== !1) {
                ia = vjs.obj.merge(ha, h), "" === ia.secondaryGA && (ia.secondaryGA = !1), ia.secondaryGA && ia.gaAccounts.push(ia.secondaryGA);
                for (var j = 0; j < ia.gaAccounts.length; j++) ia.gaAccounts[j] && "" !== ia.gaAccounts[j] || ia.gaAccounts.splice(j, 1);
                ia.usecustomeridentifier && (this.setCustomerIdentifier = function(a) {
                    ia.customeridentifier = a, K()
                }), Z = this, J(), ia.usecustomeridentifier || K(), this.on("loadstart", a), this.on("loadedmetadata", b), this.on("loadeddata", c), this.on("loadedalldata", d), this.on("autoplay", t), this.on("play", e), this.on("pause", f), this.on("timeupdate", l), this.on("ended", m), this.on("durationchange", n), this.on("progress", o), this.on("resize", p), this.on("error", q), this.on("fullscreenchange", r), this.controlBar.progressControl ? this.controlBar.progressControl.seekBar.on("mousedown", g) : this.controlBar.progressControlExtended.seekBarExtended.on("mousedown", g), this.controlBar.volumeControl.volumeSlider ? (this.controlBar.volumeControl.volumeSlider.volumeBar.on("mousedown", i), this.controlBar.volumeControl.muteToggle.on("mouseup", k), this.controlBar.volumeControl.volumeMenuButton.on("click", k)) : (this.controlBar.volumeControl.volumeBar.on("mousedown", i), this.controlBar.muteToggle.on("mouseup", k)), this.on("socialclick", s), this.on("autoplaymute", u), this.on("autoplayunmute", v), this.on("restartunmute", w), this.on("playlistload", x), this.on("playlistautoload", y), this.on("calltoactionclose", z), this.on("calltoaction", A), this.on("logobutton", D), this.on("raiseTheLights", B), this.on("dimTheLights", C), this.on("onScreenActionClick", E), this.on("clickToCallClick", F)
            }
        })
    }(), function(a, b) {
        "use strict";
        var c = "",
            d = "?",
            e = "function",
            f = "undefined",
            g = "object",
            h = "major",
            i = "name",
            j = "version",
            k = {
                has: function(a, b) {
                    return -1 !== b.toLowerCase().indexOf(a.toLowerCase())
                },
                lowerize: function(a) {
                    return a.toLowerCase()
                }
            },
            l = {
                rgx: function() {
                    for (var a, c, d, h, i, j, k, l = 0, m = arguments; l < m.length; l += 2) {
                        var n = m[l],
                            o = m[l + 1];
                        if (typeof a === f) {
                            a = {};
                            for (h in o) i = o[h], typeof i === g ? a[i[0]] = b : a[i] = b
                        }
                        for (c = d = 0; c < n.length; c++)
                            if (j = n[c].exec(this.getUA())) {
                                for (h in o) k = j[++d], i = o[h], typeof i === g && i.length > 0 ? 2 == i.length ? typeof i[1] == e ? a[i[0]] = i[1].call(this, k) : a[i[0]] = i[1] : 3 == i.length ? typeof i[1] !== e || i[1].exec && i[1].test ? a[i[0]] = k ? k.replace(i[1], i[2]) : b : a[i[0]] = k ? i[1].call(this, k, i[2]) : b : 4 == i.length && (a[i[0]] = k ? i[3].call(this, k.replace(i[1], i[2])) : b) : a[i] = k ? k : b;
                                break
                            }
                        if (j) break
                    }
                    return a
                },
                str: function(a, c) {
                    for (var e in c)
                        if (typeof c[e] === g && c[e].length > 0) {
                            for (var f = 0; f < c[e].length; f++)
                                if (k.has(c[e][f], a)) return e === d ? b : e
                        } else if (k.has(c[e], a)) return e === d ? b : e;
                    return a
                }
            },
            m = {
                browser: {
                    oldsafari: {
                        major: {
                            1: ["/8", "/1", "/3"],
                            2: "/4",
                            "?": "/"
                        },
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
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
                            2000: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            RT: "ARM"
                        }
                    }
                }
            },
            n = {
                browser: [
                    [/(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i],
                    [i, j, h],
                    [/\s(opr)\/((\d+)?[\w\.]+)/i],
                    [
                        [i, "Opera"], j, h
                    ],
                    [/(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i],
                    [i, j, h],
                    [/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i],
                    [
                        [i, "IE"], j, h
                    ],
                    [/(yabrowser)\/((\d+)?[\w\.]+)/i],
                    [
                        [i, "Yandex"], j, h
                    ],
                    [/(comodo_dragon)\/((\d+)?[\w\.]+)/i],
                    [
                        [i, /_/g, " "], j, h
                    ],
                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i],
                    [i, j, h],
                    [/(dolfin)\/((\d+)?[\w\.]+)/i],
                    [
                        [i, "Dolphin"], j, h
                    ],
                    [/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i],
                    [
                        [i, "Chrome"], j, h
                    ],
                    [/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i],
                    [j, h, [i, "Mobile Safari"]],
                    [/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i],
                    [j, h, i],
                    [/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i],
                    [i, [h, l.str, m.browser.oldsafari.major],
                        [j, l.str, m.browser.oldsafari.version]
                    ],
                    [/(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i],
                    [i, j, h],
                    [/(navigator|netscape)\/((\d+)?[\w\.-]+)/i],
                    [
                        [i, "Netscape"], j, h
                    ],
                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i, /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i, /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i],
                    [i, j, h]
                ],
                engine: [
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                    [i, j],
                    [/rv\:([\w\.]+).*(gecko)/i],
                    [j, i]
                ],
                os: [
                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                    [i, [j, l.str, m.os.windows.version]],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                        [i, "Windows"],
                        [j, l.str, m.os.windows.version]
                    ],
                    [/\((bb)(10);/i],
                    [
                        [i, "BlackBerry"], j
                    ],
                    [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)\/([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i],
                    [i, j],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                    [
                        [i, "Symbian"], j
                    ],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [
                        [i, "Firefox OS"], j
                    ],
                    [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                    [i, j],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [
                        [i, "Chromium OS"], j
                    ],
                    [/(sunos)\s?([\w\.]+\d)*/i],
                    [
                        [i, "Solaris"], j
                    ],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                    [i, j],
                    [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
                    [
                        [i, "iOS"],
                        [j, /_/g, "."]
                    ],
                    [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i],
                    [i, [j, /_/g, "."]],
                    [/(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i, /(unix)\s?([\w\.]+)*/i],
                    [i, j]
                ]
            },
            o = function(b) {
                var d = b || (a && a.navigator && a.navigator.userAgent ? a.navigator.userAgent : c);
                return this instanceof o ? (this.getBrowser = function() {
                    return l.rgx.apply(this, n.browser)
                }, this.getOS = function() {
                    return l.rgx.apply(this, n.os)
                }, this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        os: this.getOS()
                    }
                }, this.getUA = function() {
                    return d
                }, this.setUA = function(a) {
                    return d = a, this
                }, void this.setUA(d)) : new o(b).getResult()
            };
        if (typeof exports !== f) typeof module !== f && module.exports && (exports = module.exports = o), exports.UAParser = o;
        else if (a.UAParser = o, typeof define === e && define.amd && define(function() {
                return o
            }), typeof a.jQuery !== f) {
            var p = a.jQuery,
                q = new o;
            p.ua = q.getResult(), p.ua.get = function() {
                return q.getUA()
            }, p.ua.set = function(a) {
                q.setUA(a);
                var b = q.getResult();
                for (var c in b) p.ua[c] = b[c]
            }
        }
    }(this), function() {
        var a = ".vjs-hidden-while-loading { opacity: 0; }",
            b = document.createElement("style");
        b.type = "text/css", b.styleSheet ? b.styleSheet.cssText = a : b.innerHTML = a, document.getElementsByTagName("head")[0].appendChild(b);
        var c, d, e = !1,
            f = !1,
            g = document.getElementsByTagName("head")[0];
        c = "//player.bettervideo.com/dev/themes/", d = "//player.bettervideo.com/dev/plugins/bvPlugins.css";
        var h = function() {
                for (var a = document.querySelectorAll(".video-js"), b = 0; b < a.length; b++) a[b] && a[b].className ? classNames = a[b].className.split(" ") : classNames = [], -1 == classNames.indexOf("vjs-hidden-while-loading") && (a[b].className += " vjs-hidden-while-loading", j(a[b]));
                f || (i = setTimeout(h, 1))
            },
            i = setTimeout(h, 1);
        videojs.one(window, "load", function() {
            f = !0
        });
        var j = function(a) {
                l(a), k(a)
            },
            k = function(a) {
                var b = /([\w\d-_]*?)\-skin/.exec(a.className);
                if (b && b.length) {
                    var d = b[1].replace("vjs-", ""),
                        f = document.createElement("link");
                    f.rel = "stylesheet", f.href = c + d + ".css", e = !1, m(f.href) || g.appendChild(f)
                }
            },
            l = function(a) {
                var b = document.createElement("link");
                b.rel = "stylesheet", b.href = d, m(d) || (g.appendChild(b), l = function() {})
            },
            m = function(a) {
                for (var b = document.querySelectorAll("link"), c = 0; c < b.length; c++) {
                    var d = b[c].href;
                    if (d == a) return !0
                }
                return !1
            };
        videojs.plugin("bvThemeLoader", function() {
            var a = this;
            f && j(this.el()), this.loadTheme = function(b) {
                a.el().className = a.el().className.replace(/[\w\d-_]*?\-skin/gi, ""), a.addClass(b + "-skin"), setTimeout(function() {
                    k(a.el())
                }, 1)
            }
        })
    }(), function() {
        "use strict";
        videojs.CallToAction = videojs.Component.extend({
            init: function(a, b) {
                var c = !1;
                b.el && 1 === b.el.nodeType ? (this.contentEl_ = b.el, delete b.el) : c = !0, videojs.Component.call(this, a, b), c && (this.contentEl_ = this.callToActionContainer_, this.callToAction_ = this.addChild("callToActionButton", this.options_.link), this.callToAction_.on("click", videojs.bind(this, function() {
                    this.player_.trigger({
                        type: "calltoaction",
                        actionTime: this.getTime()
                    })
                }))), this.exitButton.on("click", videojs.bind(this, function() {
                    this.player_.trigger({
                        type: "calltoactionclose",
                        actionTime: this.getTime()
                    }), this.conceal()
                })), this.timerDisplay.length(this.options_.timer), this.player_.on("ended", videojs.bind(this, function() {
                    "Html5" == this.player_.techName || "Flash" == this.player_.techName ? this.reveal() : this.player_.playlist.autoAdvanceFn();
                })), this.on("click", function(a) {
                    a.stopImmediatePropagation()
                }), this.playlistAutoAdvance = !1, this.playlistCheckTimer = setTimeout(videojs.bind(this, this.playlistCheck), 1)
            }
        }), videojs.CallToAction.prototype.createEl = function() {
            var a = videojs.Component.prototype.createEl(null, {
                className: "vjs-call-to-action "
            });
            return this.contentEl_ && 1 === this.contentEl_.nodeType ? a.appendChild(this.contentEl_) : (this.title_ = videojs.createEl("h2", {
                innerHTML: this.options_.title
            }), this.message_ = videojs.createEl("p", {
                innerHTML: this.options_.text
            }), this.callToActionContainer_ = videojs.createEl("div", {
                className: "link-container"
            }), a.appendChild(this.title_), a.appendChild(this.message_), a.appendChild(this.callToActionContainer_)), a
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
            this.player_.playlist && this.player_.playlist.autoAdvanceFn ? (this.playlistAutoAdvance = !0, this.autoAdvanceFn = this.player_.playlist.autoAdvanceFn, videojs.off(this.player().el(), "ended", this.player_.playlist.autoAdvanceFn), this.timerDisplay.on("complete", videojs.bind(this, this.timerComplete))) : this.timerDisplay.hide()
        }, videojs.CallToAction.prototype.reveal = function() {
            this.show(), this.originalPlayerClasses = this.player_.el_.className, this.playlistAutoAdvance ? (this.player_.pause(), this.timerDisplay.show(), this.timerDisplay.start(), this.player_.one("play", videojs.bind(this, this.conceal))) : this.player_.one("load", videojs.bind(this, this.conceal)), this.player_.removeClass("vjs-paused"), this.player_.removeClass("vjs-ended"), this.player_.addClass("vjs-playing")
        }, videojs.CallToAction.prototype.conceal = function() {
            this.hide(), this.timerDisplay.cancel()
        }, videojs.CallToAction.prototype.timerComplete = function() {
            this.hide(), videojs.bind(this.player_.playlist, this.autoAdvanceFn)()
        }, videojs.CallToAction.prototype.getTime = function() {
            this.timerDisplay.time_
        }, videojs.CallToActionButton = videojs.Button.extend({
            init: function(a, b) {
                videojs.Button.call(this, a, b), this.name_ = "callToActionButton"
            }
        }), videojs.CallToActionButton.prototype.createEl = function() {
            var a = {
                    className: "",
                    innerHTML: this.options_.text,
                    role: "button",
                    "aria-live": "polite",
                    tabIndex: 0
                },
                b = videojs.Component.prototype.createEl("a", a);
            return b.style.cursor = "pointer", b
        }, videojs.CallToActionButton.prototype.onClick = function() {
            this.options_.url && window.open(this.options_.url, "CallToAction")
        }, videojs.TimerDisplay = videojs.Component.extend({
            init: function(a, b) {
                videojs.Component.call(this, a, b), this.pauseButton.on("click", videojs.bind(this, this.cancel))
            }
        }), videojs.TimerDisplay.prototype.options_ = {
            descriptionText: "",
            timeLabel: "seconds",
            children: {
                pauseButton: {}
            }
        }, videojs.TimerDisplay.prototype.createEl = function() {
            var a = videojs.Component.prototype.createEl(null, {
                className: this.buildCSSClass()
            });
            return this.descriptionText_ = videojs.Component.prototype.createEl("span", {
                innerHTML: this.options_.descriptionText
            }), this.timerText_ = videojs.Component.prototype.createEl("span", {
                className: "vjs-time-left"
            }), a.appendChild(this.descriptionText_), a.appendChild(this.timerText_), a
        }, videojs.TimerDisplay.prototype.buildCSSClass = function() {
            return "vjs-display-timer " + vjs.Component.prototype.buildCSSClass.call(this)
        }, videojs.TimerDisplay.prototype.length = function() {
            return arguments.length && (this.options_.length = arguments[0]), this.options_.length
        }, videojs.TimerDisplay.prototype.start = function() {
            this.clear(), this.el().style.visibility = "visible", this.time_ = this.options_.length, this.play()
        }, videojs.TimerDisplay.prototype.play = function() {
            this.update(), this.timer_ = setInterval(videojs.bind(this, this.update), 1e3)
        }, videojs.TimerDisplay.prototype.pause = function() {
            this.clear()
        }, videojs.TimerDisplay.prototype.cancel = function() {
            this.clear(), this.time_ = 0, this.el().style.visibility = "hidden"
        }, videojs.TimerDisplay.prototype.clear = function() {
            clearInterval(this.timer_)
        }, videojs.TimerDisplay.prototype.update = function() {
            this.timerText_.innerHTML = this.time_ + this.options_.timeLabel, this.time_--, this.time_ <= 0 && (this.clear(), this.trigger("complete", {}))
        }
    }(), function() {
        videojs.plugin("callToAction", function(a) {
            a = a || {}, (a.link && a.title || a.el) && (a.el ? "string" == typeof a.el && document.getElementById(a.el.replace("#", "")) ? (a.el = document.getElementById(a.el.replace("#", "")), this.callToAction = this.addChild("callToAction", a)) : 1 === a.el.nodeType ? this.callToAction = this.addChild("callToAction", a) : void 0 : this.callToAction = this.addChild("callToAction", a))
        })
    }(), function() {
        "use strict";
        videojs.ClickToCall = videojs.Component.extend({
            init: function(a, b) {
                videojs.Component.call(this, a, b), this.player().el().appendChild(this.el_), this.exitButton.on("click", videojs.bind(this, function() {
                    this.player_.trigger({
                        type: "clicktocallclose",
                        actionTime: this.player_.currentTime()
                    }), this.hide()
                })), this.callButton.on("click", videojs.bind(this, function() {
                    this.show()
                })), this.on("click", function(a) {
                    a.stopImmediatePropagation(), this.player().trigger({
                        type: "clickToCall",
                        label: this.options_.number
                    })
                })
            }
        }), videojs.ClickToCall.prototype.createEl = function() {
            var a = videojs.Component.prototype.createEl(null, {
                    className: "vjs-click-to-call "
                }),
                b = videojs.TOUCH_ENABLED ? "Press" : "Click";
            return a.innerHTML = '<a href="tel:' + this.options_.number + '" title="' + b + " here to call " + this.options_.number + '">' + b + ' here to call: <br /><span class="vjs-click-to-call-number">' + this.options_.number + "</span></a>", a
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
            this.addClass("bv-hidden")
        }, videojs.ClickToCall.prototype.show = function() {
            this.removeClass("bv-hidden")
        }, videojs.CallButton = videojs.Button.extend({
            init: function(a, b) {
                videojs.Component.call(this, a, b)
            }
        }), videojs.CallButton.prototype.buttonText = "Exit", videojs.CallButton.prototype.buildCSSClass = function() {
            return "vjs-control vjs-call-button bv-phone bv-hidden" + vjs.Component.prototype.buildCSSClass.call(this)
        }, videojs.CallButton.prototype.onClick = function() {}
    }(), function() {
        videojs.plugin("clickToCall", function(a) {
            a = a || {}, this.clickToCall = this.addChild("clickToCall", a)
        })
    }(), function() {
        var a = function(a, b, c, d) {
            c = document, c.createEvent ? (d = new Event(b), a.dispatchEvent(d)) : (d = c.createEventObject(), a.fireEvent("on" + b, d))
        };
        videojs.CustomEventButton = videojs.Button.extend({
            init: function(a, b) {
                videojs.Button.call(this, a, b), this.mainEl_ = this.player_.el(), videojs.on(window, this.options_.event_name, function(a) {})
            }
        }), videojs.CustomEventButton.prototype.buttonText = "Custom Button", videojs.CustomEventButton.prototype.createEl = function(a, b) {
            var c = vjs.Button.prototype.createEl.call(this, a, b);
            return c
        }, videojs.CustomEventButton.prototype.buildCSSClass = function() {
            return "vjs-custom-event-button " + this.options_.icon + " " + vjs.Button.prototype.buildCSSClass.call(this)
        }, videojs.CustomEventButton.prototype.onClick = function() {
            a(window, this.options_.event_name)
        }, videojs.plugin("customEventButton", function(a) {
            if (videojs.obj.isArray(a))
                for (var b = 0; b < a.length; b++) this.controlBar.addChild("CustomEventButton", a[b]);
            else this.controlBar.addChild("CustomEventButton", a)
        })
    }(), function() {
        videojs.DimTheLightsToggle = videojs.Button.extend({
            init: function(a, b) {
                try {
                    if (window.self !== window.top) return
                } catch (c) {}
                videojs.Button.call(this, a, b);
                var d = this.player_.el();
                this.mainEl_ = d, this.mainEl_.parentNode.appendChild(this.overlay_), videojs.on(this.overlay_, "click", videojs.bind(this, this.raiseTheLights))
            }
        }), videojs.DimTheLightsToggle.prototype.isDim = !1, videojs.DimTheLightsToggle.prototype.buttonText = "Dim The Lights", videojs.DimTheLightsToggle.prototype.createEl = function(a, b) {
            return this.overlay_ = videojs.createEl("div", {
                className: "vjs-dim-overlay"
            }), vjs.Button.prototype.createEl.call(this, a, b)
        }, videojs.DimTheLightsToggle.prototype.buildCSSClass = function() {
            return "vjs-dim-the-lights bv-lightbulb " + vjs.Button.prototype.buildCSSClass.call(this)
        }, videojs.DimTheLightsToggle.prototype.onClick = function() {
            this.isDim ? this.raiseTheLights() : (this.dimTheLights(), videojs.one(document, "keyup", videojs.bind(this, function(a) {
                27 == a.keyCode && this.raiseTheLights()
            })))
        }, videojs.DimTheLightsToggle.prototype.dimTheLights = function() {
            this.isDim = !0, this.mainEl_.className += " vjs-dim-focus", this.overlay_.style.display = "block", setTimeout(videojs.bind(this, function() {
                this.overlay_.className += " vjs-dim-off"
            }), 10), this.el_.className += " vjs-dim-toggle", this.player_.trigger({
                type: "dimTheLights"
            })
        }, videojs.DimTheLightsToggle.prototype.raiseTheLights = function() {
            this.isDim = !1, this.mainEl_.className = this.mainEl_.className.replace(/\s?vjs\-dim\-focus/gi, ""), this.overlay_.style.display = "none", this.overlay_.className = this.overlay_.className.replace(/\s?vjs\-dim\-off/gi, ""), this.el_.className = this.el_.className.replace(/\s?vjs\-dim\-toggle/gi, ""), this.player_.trigger({
                type: "raiseTheLights"
            })
        }, videojs.plugin("dimTheLights", function(a) {
            this.controlBar.addChild("dimTheLightsToggle", {})
        })
    }(), function() {
        var a, b;
        a = {
            messages: {
                1: "The video download was cancelled",
                2: "The video connection was lost, please confirm you're connected to the internet",
                3: "The video is bad or in a format that can't be played on your browser",
                4: "This video is either unavailable or not supported in this browser",
                5: "The video you're trying to watch is encrypted and we don't know how to decrypt it",
                unknown: "An unanticipated problem was encountered, check back soon and try again"
            }
        }, b = function(a) {
            var c, d, e;
            for (c in arguments) {
                e = arguments[c];
                for (d in e) e[d] && "object" == typeof e[d] ? a[d] = b(a[d] || {}, e[d]) : a[d] = e[d]
            }
            return a
        }, videojs.plugin("errors", function(c) {
            var d, e, f;
            f = b(a, c), e = f.messages, d = this.el().addEventListener || this.el().attachEvent, this.on("error", function(a) {
                var b, c, f;
                f = this, b = a.target.error ? a.target.error.code : a.code, c = document.createElement("div"), c.className = "vjs-error-dialog", c.textContent = e[b] || e.unknown, d.call(c, "click", function(a) {
                    f.el().removeChild(c)
                }, !1), f.el().appendChild(c)
            })
        })
    }(), function() {
        var a = function() {
            this.on("pause", function() {})
        };
        videojs.plugin("hideControlsOnPause", a), videojs.plugin("bvHideControlBarOnPause", function(b) {
            videojs.bind(this, a)(b)
        })
    }(), function() {
        videojs.LogoButton = videojs.Button.extend({
            init: function(a, b) {
                videojs.Button.call(this, a, b), this.name_ = "logoButton"
            }
        }), videojs.LogoButton.prototype.createEl = function() {
            var a = {
                    className: " vjs-logo-control vjs-control",
                    role: "button",
                    "aria-live": "polite",
                    tabIndex: 0
                },
                b = videojs.Component.prototype.createEl(null, a);
            return this.contentEl_ = videojs.Component.prototype.createEl("div", {
                className: "vjs-control-content",
                innerHTML: '<span class="vjs-control-text">' + this.options_.alt + "</span>"
            }), this.imageEl_ = videojs.Component.prototype.createEl("img", {
                src: this.options_.src
            }), videojs.one(this.imageEl_, "error", videojs.bind(this, function() {
                this.imageEl_.src = this.imageEl_.src.replace("logos/", "logos/WHI/")
            })), this.contentEl_.appendChild(this.imageEl_), this.options_.url && "" !== this.options_.url && (b.style.cursor = "pointer"), b.style.width = "auto", b.appendChild(this.contentEl_), b
        }, videojs.LogoButton.prototype.onClick = function() {
            this.options_.url && (window.open(this.options_.url, "Website"), this.player_.trigger({
                type: "logobutton"
            }))
        };
        var a = function(a) {
            var b = this.controlBar.addChild("logoButton", a);
            this.controlBar.el().insertBefore(b.el(), this.controlBar.el().childNodes[0])
        };
        videojs.plugin("logoButton", a), videojs.plugin("logo", function(b) {
            videojs.bind(this, a)(b)
        })
    }(), function() {
        "use strict";
        videojs.OnScreenAction = videojs.Component.extend({
            init: function(a, b) {
                this.options_.children.onScreenActionButton.icon = b.icon, videojs.Component.call(this, a, b), this.player().el().appendChild(this.el_), this.exitButton.on("click", videojs.bind(this, function() {
                    this.player_.trigger({
                        type: "onscreenactionclose",
                        actionTime: this.player_.currentTime()
                    }), this.hide()
                })), this.onScreenActionButton.on("click", videojs.bind(this, function() {
                    this.show()
                })), this.on("click", function(a) {
                    a.stopImmediatePropagation(), this.player().trigger({
                        type: "onScreenActionClick",
                        label: this.options_.link.text
                    })
                })
            }
        }), videojs.OnScreenAction.prototype.createEl = function() {
            var a = videojs.Component.prototype.createEl(null, {
                className: "vjs-on-screen-action "
            });
            return videojs.TOUCH_ENABLED ? "Press" : "Click", a.innerHTML = '<a href="' + this.options_.link.url + '" title="' + this.options_.link.text + '" target="_blank">' + this.options_.link.text + "</a>", a
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
            this.addClass("bv-hidden")
        }, videojs.OnScreenAction.prototype.show = function() {
            this.removeClass("bv-hidden")
        }, videojs.OnScreenActionButton = videojs.Button.extend({
            init: function(a, b) {
                videojs.Component.call(this, a, b)
            }
        }), videojs.OnScreenActionButton.prototype.buttonText = "", videojs.OnScreenActionButton.prototype.buildCSSClass = function() {
            return "vjs-control vjs-call-button bv-" + this.options_.icon + " bv-hidden" + vjs.Component.prototype.buildCSSClass.call(this)
        }, videojs.OnScreenActionButton.prototype.onClick = function() {}
    }(), function() {
        videojs.plugin("onScreenAction", function(a) {
            a = a || {}, void(this.onScreenAction = this.addChild("onScreenAction", a))
        })
    }(), function() {
        function a(b, d) {
            function f(a) {
                if (f[a] !== q) return f[a];
                var b;
                if ("bug-string-char-index" == a) b = "a" != "a" [0];
                else if ("json" == a) b = f("json-stringify") && f("json-parse");
                else {
                    var c;
                    if ("json-stringify" == a) {
                        b = d.stringify;
                        var e = "function" == typeof b && s;
                        if (e) {
                            (c = function() {
                                return 1
                            }).toJSON = c;
                            try {
                                e = "0" === b(0) && "0" === b(new g) && '""' == b(new h) && b(r) === q && b(q) === q && b() === q && "1" === b(c) && "[1]" == b([c]) && "[null]" == b([q]) && "null" == b(null) && "[null,null,null]" == b([q, r, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == b({
                                    a: [c, !0, !1, null, "\x00\b\n\f\r	"]
                                }) && "1" === b(null, c) && "[\n 1,\n 2\n]" == b([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == b(new j(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == b(new j(864e13)) && '"-000001-01-01T00:00:00.000Z"' == b(new j(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == b(new j(-1))
                            } catch (i) {
                                e = !1
                            }
                        }
                        b = e
                    }
                    if ("json-parse" == a) {
                        if (b = d.parse, "function" == typeof b) try {
                            if (0 === b("0") && !b(!1)) {
                                c = b('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                                var k = 5 == c.a.length && 1 === c.a[0];
                                if (k) {
                                    try {
                                        k = !b('"	"')
                                    } catch (l) {}
                                    if (k) try {
                                        k = 1 !== b("01")
                                    } catch (m) {}
                                    if (k) try {
                                        k = 1 !== b("1.")
                                    } catch (n) {}
                                }
                            }
                        } catch (o) {
                            k = !1
                        }
                        b = k
                    }
                }
                return f[a] = !!b
            }
            b || (b = e.Object()), d || (d = e.Object());
            var g = b.Number || e.Number,
                h = b.String || e.String,
                i = b.Object || e.Object,
                j = b.Date || e.Date,
                k = b.SyntaxError || e.SyntaxError,
                l = b.TypeError || e.TypeError,
                m = b.Math || e.Math,
                n = b.JSON || e.JSON;
            "object" == typeof n && n && (d.stringify = n.stringify, d.parse = n.parse);
            var o, p, q, i = i.prototype,
                r = i.toString,
                s = new j(-0xc782b5b800cec);
            try {
                s = -109252 == s.getUTCFullYear() && 0 === s.getUTCMonth() && 1 === s.getUTCDate() && 10 == s.getUTCHours() && 37 == s.getUTCMinutes() && 6 == s.getUTCSeconds() && 708 == s.getUTCMilliseconds()
            } catch (t) {}
            if (!f("json")) {
                var u = f("bug-string-char-index");
                if (!s) var v = m.floor,
                    w = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                    x = function(a, b) {
                        return w[b] + 365 * (a - 1970) + v((a - 1969 + (b = +(b > 1))) / 4) - v((a - 1901 + b) / 100) + v((a - 1601 + b) / 400)
                    };
                if ((o = i.hasOwnProperty) || (o = function(a) {
                        var b, c = {};
                        return (c.__proto__ = null, c.__proto__ = {
                            toString: 1
                        }, c).toString != r ? o = function(a) {
                            var b = this.__proto__;
                            return a = a in (this.__proto__ = null, this), this.__proto__ = b, a
                        } : (b = c.constructor, o = function(a) {
                            var c = (this.constructor || b).prototype;
                            return a in this && !(a in c && this[a] === c[a])
                        }), c = null, o.call(this, a)
                    }), p = function(a, b) {
                        var d, e, f, g = 0;
                        (d = function() {
                            this.valueOf = 0
                        }).prototype.valueOf = 0, e = new d;
                        for (f in e) o.call(e, f) && g++;
                        return d = e = null, g ? p = 2 == g ? function(a, b) {
                            var c, d = {},
                                e = "[object Function]" == r.call(a);
                            for (c in a) e && "prototype" == c || o.call(d, c) || !(d[c] = 1) || !o.call(a, c) || b(c)
                        } : function(a, b) {
                            var c, d, e = "[object Function]" == r.call(a);
                            for (c in a) e && "prototype" == c || !o.call(a, c) || (d = "constructor" === c) || b(c);
                            (d || o.call(a, c = "constructor")) && b(c)
                        } : (e = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), p = function(a, b) {
                            var d, f = "[object Function]" == r.call(a),
                                g = !f && "function" != typeof a.constructor && c[typeof a.hasOwnProperty] && a.hasOwnProperty || o;
                            for (d in a) f && "prototype" == d || !g.call(a, d) || b(d);
                            for (f = e.length; d = e[--f]; g.call(a, d) && b(d));
                        }), p(a, b)
                    }, !f("json-stringify")) {
                    var y = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        },
                        z = function(a, b) {
                            return ("000000" + (b || 0)).slice(-a)
                        },
                        A = function(a) {
                            for (var b = '"', c = 0, d = a.length, e = !u || d > 10, f = e && (u ? a.split("") : a); d > c; c++) {
                                var g = a.charCodeAt(c);
                                switch (g) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        b += y[g];
                                        break;
                                    default:
                                        if (32 > g) {
                                            b += "\\u00" + z(2, g.toString(16));
                                            break
                                        }
                                        b += e ? f[c] : a.charAt(c)
                                }
                            }
                            return b + '"'
                        },
                        B = function(a, b, c, d, e, f, g) {
                            var h, i, j, k, m, n, s, t, u;
                            try {
                                h = b[a]
                            } catch (w) {}
                            if ("object" == typeof h && h)
                                if (i = r.call(h), "[object Date]" != i || o.call(h, "toJSON")) "function" == typeof h.toJSON && ("[object Number]" != i && "[object String]" != i && "[object Array]" != i || o.call(h, "toJSON")) && (h = h.toJSON(a));
                                else if (h > -1 / 0 && 1 / 0 > h) {
                                if (x) {
                                    for (k = v(h / 864e5), i = v(k / 365.2425) + 1970 - 1; x(i + 1, 0) <= k; i++);
                                    for (j = v((k - x(i, 0)) / 30.42); x(i, j + 1) <= k; j++);
                                    k = 1 + k - x(i, j), m = (h % 864e5 + 864e5) % 864e5, n = v(m / 36e5) % 24, s = v(m / 6e4) % 60, t = v(m / 1e3) % 60, m %= 1e3
                                } else i = h.getUTCFullYear(), j = h.getUTCMonth(), k = h.getUTCDate(), n = h.getUTCHours(), s = h.getUTCMinutes(), t = h.getUTCSeconds(), m = h.getUTCMilliseconds();
                                h = (0 >= i || i >= 1e4 ? (0 > i ? "-" : "+") + z(6, 0 > i ? -i : i) : z(4, i)) + "-" + z(2, j + 1) + "-" + z(2, k) + "T" + z(2, n) + ":" + z(2, s) + ":" + z(2, t) + "." + z(3, m) + "Z"
                            } else h = null;
                            if (c && (h = c.call(b, a, h)), null === h) return "null";
                            if (i = r.call(h), "[object Boolean]" == i) return "" + h;
                            if ("[object Number]" == i) return h > -1 / 0 && 1 / 0 > h ? "" + h : "null";
                            if ("[object String]" == i) return A("" + h);
                            if ("object" == typeof h) {
                                for (a = g.length; a--;)
                                    if (g[a] === h) throw l();
                                if (g.push(h), u = [], b = f, f += e, "[object Array]" == i) {
                                    for (j = 0, a = h.length; a > j; j++) i = B(j, h, c, d, e, f, g), u.push(i === q ? "null" : i);
                                    a = u.length ? e ? "[\n" + f + u.join(",\n" + f) + "\n" + b + "]" : "[" + u.join(",") + "]" : "[]"
                                } else p(d || h, function(a) {
                                    var b = B(a, h, c, d, e, f, g);
                                    b !== q && u.push(A(a) + ":" + (e ? " " : "") + b)
                                }), a = u.length ? e ? "{\n" + f + u.join(",\n" + f) + "\n" + b + "}" : "{" + u.join(",") + "}" : "{}";
                                return g.pop(), a
                            }
                        };
                    d.stringify = function(a, b, d) {
                        var e, f, g, h;
                        if (c[typeof b] && b)
                            if ("[object Function]" == (h = r.call(b))) f = b;
                            else if ("[object Array]" == h) {
                            g = {};
                            for (var i, j = 0, k = b.length; k > j; i = b[j++], h = r.call(i), ("[object String]" == h || "[object Number]" == h) && (g[i] = 1));
                        }
                        if (d)
                            if ("[object Number]" == (h = r.call(d))) {
                                if (0 < (d -= d % 1))
                                    for (e = "", d > 10 && (d = 10); e.length < d; e += " ");
                            } else "[object String]" == h && (e = 10 >= d.length ? d : d.slice(0, 10));
                        return B("", (i = {}, i[""] = a, i), f, g, e, "", [])
                    }
                }
                if (!f("json-parse")) {
                    var C, D, E = h.fromCharCode,
                        F = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "	",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        },
                        G = function() {
                            throw C = D = null, k()
                        },
                        H = function() {
                            for (var a, b, c, d, e, f = D, g = f.length; g > C;) switch (e = f.charCodeAt(C)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    C++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return a = u ? f.charAt(C) : f[C], C++, a;
                                case 34:
                                    for (a = "@", C++; g > C;)
                                        if (e = f.charCodeAt(C), 32 > e) G();
                                        else if (92 == e) switch (e = f.charCodeAt(++C)) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                            a += F[e], C++;
                                            break;
                                        case 117:
                                            for (b = ++C, c = C + 4; c > C; C++) e = f.charCodeAt(C), e >= 48 && 57 >= e || e >= 97 && 102 >= e || e >= 65 && 70 >= e || G();
                                            a += E("0x" + f.slice(b, C));
                                            break;
                                        default:
                                            G()
                                    } else {
                                        if (34 == e) break;
                                        for (e = f.charCodeAt(C), b = C; e >= 32 && 92 != e && 34 != e;) e = f.charCodeAt(++C);
                                        a += f.slice(b, C)
                                    }
                                    if (34 == f.charCodeAt(C)) return C++, a;
                                    G();
                                default:
                                    if (b = C, 45 == e && (d = !0, e = f.charCodeAt(++C)), e >= 48 && 57 >= e) {
                                        for (48 == e && (e = f.charCodeAt(C + 1), e >= 48 && 57 >= e) && G(); g > C && (e = f.charCodeAt(C), e >= 48 && 57 >= e); C++);
                                        if (46 == f.charCodeAt(C)) {
                                            for (c = ++C; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++);
                                            c == C && G(), C = c
                                        }
                                        if (e = f.charCodeAt(C), 101 == e || 69 == e) {
                                            for (e = f.charCodeAt(++C), 43 != e && 45 != e || C++, c = C; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++);
                                            c == C && G(), C = c
                                        }
                                        return +f.slice(b, C)
                                    }
                                    if (d && G(), "true" == f.slice(C, C + 4)) return C += 4, !0;
                                    if ("false" == f.slice(C, C + 5)) return C += 5, !1;
                                    if ("null" == f.slice(C, C + 4)) return C += 4, null;
                                    G()
                            }
                            return "$"
                        },
                        I = function(a) {
                            var b, c;
                            if ("$" == a && G(), "string" == typeof a) {
                                if ("@" == (u ? a.charAt(0) : a[0])) return a.slice(1);
                                if ("[" == a) {
                                    for (b = []; a = H(), "]" != a; c || (c = !0)) c && ("," == a ? (a = H(), "]" == a && G()) : G()), "," == a && G(), b.push(I(a));
                                    return b
                                }
                                if ("{" == a) {
                                    for (b = {}; a = H(), "}" != a; c || (c = !0)) c && ("," == a ? (a = H(), "}" == a && G()) : G()), "," != a && "string" == typeof a && "@" == (u ? a.charAt(0) : a[0]) && ":" == H() || G(), b[a.slice(1)] = I(H());
                                    return b
                                }
                                G()
                            }
                            return a
                        },
                        J = function(a, b, c) {
                            c = K(a, b, c), c === q ? delete a[b] : a[b] = c
                        },
                        K = function(a, b, c) {
                            var d, e = a[b];
                            if ("object" == typeof e && e)
                                if ("[object Array]" == r.call(e))
                                    for (d = e.length; d--;) J(e, d, c);
                                else p(e, function(a) {
                                    J(e, a, c)
                                });
                            return c.call(a, b, e)
                        };
                    d.parse = function(a, b) {
                        var c, d;
                        return C = 0, D = "" + a, c = I(H()), "$" != H() && G(), C = D = null, b && "[object Function]" == r.call(b) ? K((d = {}, d[""] = c, d), "", b) : c
                    }
                }
            }
            return d.runInContext = a, d
        }
        var b = "function" == typeof define && define.amd,
            c = {
                "function": !0,
                object: !0
            },
            d = c[typeof exports] && exports && !exports.nodeType && exports,
            e = c[typeof window] && window || this,
            f = d && c[typeof module] && module && !module.nodeType && "object" == typeof global && global;
        if (!f || f.global !== f && f.window !== f && f.self !== f || (e = f), d && !b) a(e, d);
        else {
            var g = e.JSON,
                h = e.JSON3,
                i = !1,
                j = a(e, e.JSON3 = {
                    noConflict: function() {
                        return i || (i = !0, e.JSON = g, e.JSON3 = h, g = h = null), j
                    }
                });
            e.JSON = {
                parse: j.parse,
                stringify: j.stringify
            }
        }
        b && define(function() {
            return j
        })
    }.call(this), Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
        var c;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var d = Object(this),
            e = d.length >>> 0;
        if (0 === e) return -1;
        var f = +b || 0;
        if (Math.abs(f) === 1 / 0 && (f = 0), f >= e) return -1;
        for (c = Math.max(f >= 0 ? f : e - Math.abs(f), 0); e > c;) {
            if (c in d && d[c] === a) return c;
            c++
        }
        return -1
    }), document.all && !window.setTimeout.isPolyfill) {
    var __nativeST__ = window.setTimeout;
    window.setTimeout = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 2);
        return __nativeST__(a instanceof Function ? function() {
            a.apply(null, c)
        } : a, b)
    }, window.setTimeout.isPolyfill = !0
}
if (document.all && !window.setInterval.isPolyfill) {
    var __nativeSI__ = window.setInterval;
    window.setInterval = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 2);
        return __nativeSI__(a instanceof Function ? function() {
            a.apply(null, c)
        } : a, b)
    }, window.setInterval.isPolyfill = !0
}
videojs.PlaylistPrevious = videojs.Button.extend({
        init: function(a, b) {
            videojs.Button.call(this, a, b), this.on("mousedown", videojs.bind(this, this.onMouseDown))
        }
    }), videojs.PlaylistPrevious.prototype.createEl = function(a, b) {
        return vjs.Button.prototype.createEl.call(this, "div", vjs.obj.merge({
            className: "vjs-playlist-previous",
            innerHTML: '<i class="bv-up-open"></i>'
        }, b))
    }, videojs.PlaylistPrevious.prototype.onMouseDown = function() {
        videojs.one(document.body, "mouseup", videojs.bind(this, this.onMouseUp)), this.moveIncrement_ = -4, this.clickAndHoldTimer_ = setTimeout(videojs.bind(this, this.onClickAndHold), 100), this.player().playlist.userInteraction(!0)
    }, videojs.PlaylistPrevious.prototype.onMouseUp = function() {
        clearTimeout(this.clickAndHoldTimer_), clearTimeout(this.moveTimer_), clearTimeout(this.moveIncrementTimer_)
    }, videojs.PlaylistPrevious.prototype.onClickAndHold = function() {
        this.clickAndHold = !0, this.moveIncrementTimer_ = setTimeout(videojs.bind(this, function() {
            this.moveIncrement_ = -8
        }), 5e3), this.doClickAndHold_()
    }, videojs.PlaylistPrevious.prototype.doClickAndHold_ = function() {
        this.player().playlist.moveBy(this.moveIncrement_), this.moveTimer_ = setTimeout(videojs.bind(this, this.doClickAndHold_), 10)
    }, videojs.PlaylistPrevious.prototype.onClick = function() {
        this.clickAndHold_ || this.player().playlist.moveToPrevious(), this.clickAndHold = !1
    }, videojs.PlaylistNext = videojs.Button.extend({
        init: function(a, b) {
            videojs.Button.call(this, a, b), this.on("mousedown", videojs.bind(this, this.onMouseDown))
        }
    }), videojs.PlaylistNext.prototype.createEl = function(a, b) {
        return vjs.Button.prototype.createEl.call(this, "div", vjs.obj.merge({
            className: "vjs-playlist-next",
            innerHTML: '<i class="bv-down-open"></i>'
        }, b))
    }, videojs.PlaylistNext.prototype.onMouseDown = function() {
        videojs.one(document.body, "mouseup", videojs.bind(this, this.onMouseUp)), this.moveIncrement_ = 4, this.clickAndHoldTimer_ = setTimeout(videojs.bind(this, this.onClickAndHold), 100), this.player().playlist.userInteraction(!0)
    }, videojs.PlaylistNext.prototype.onMouseUp = function() {
        clearTimeout(this.clickAndHoldTimer_), clearTimeout(this.moveTimer_), clearTimeout(this.moveIncrementTimer_)
    }, videojs.PlaylistNext.prototype.onClickAndHold = function() {
        this.clickAndHold = !0, this.moveIncrementTimer_ = setTimeout(videojs.bind(this, function() {
            this.moveIncrement_ = 8
        }), 5e3), this.doClickAndHold_()
    }, videojs.PlaylistNext.prototype.doClickAndHold_ = function() {
        this.player().playlist.moveBy(this.moveIncrement_), this.moveTimer_ = setTimeout(videojs.bind(this, this.doClickAndHold_), 10)
    }, videojs.PlaylistNext.prototype.onClick = function() {
        this.clickAndHold_ || this.player().playlist.moveToNext(), this.clickAndHold = !1
    }, vjs.AdvancePlaylist = vjs.Button.extend({
        init: function(a, b) {
            vjs.Button.call(this, a, b)
        }
    }), vjs.AdvancePlaylist.prototype.buttonText = "Next Item", vjs.AdvancePlaylist.prototype.buildCSSClass = function() {
        return "bv-step-forward " + vjs.Button.prototype.buildCSSClass.call(this)
    }, vjs.AdvancePlaylist.prototype.onClick = function() {
        this.player().playlist.loadNext(), this.player().play()
    }, vjs.RegressPlaylist = vjs.Button.extend({
        init: function(a, b) {
            vjs.Button.call(this, a, b)
        }
    }), vjs.RegressPlaylist.prototype.buttonText = "Previous Item", vjs.RegressPlaylist.prototype.buildCSSClass = function() {
        return "bv-step-backward " + vjs.Button.prototype.buildCSSClass.call(this)
    }, vjs.RegressPlaylist.prototype.onClick = function() {
        this.player().playlist.loadPrevious(), this.player().play()
    }, vjs.PlaceholderButton = vjs.Button.extend({
        init: function(a, b) {
            vjs.Button.call(this, a, b), this.el_.style.opacity = 0
        }
    }), vjs.PlaceholderButton.prototype.buttonText = "", vjs.PlaceholderButton.prototype.buildCSSClass = function() {
        return "vjs-empty-button " + vjs.Button.prototype.buildCSSClass.call(this)
    }, vjs.PlaceholderButton.prototype.onClick = function() {}, videojs.PlaylistItem = videojs.Button.extend({
        init: function(a, b) {
            videojs.Component.call(this, a, b), this.loaded = !1;
            var c = !1;
            this.on("touchstart", function(a) {
                c = !0
            }), this.on("touchmove", function() {
                c = !1
            });
            var d = this;
            this.on("touchend", function(a) {
                c && d.onClick(a), a.preventDefault()
            }), this.on("click", this.onClick), this.on("focus", this.onFocus), this.on("blur", this.onBlur);
            var e = this.options_.type || this.options_.media[Object.keys(this.options_.media)[0]].source[0].type;
            this.addClass(e.substr(0, e.indexOf("/")))
        }
    }), videojs.PlaylistItem.prototype.onFocus = function() {
        videojs.Button.prototype.onFocus.apply(this, arguments)
    }, videojs.PlaylistItem.prototype.createEl = function(a, b) {
        var c = vjs.Component.prototype.createEl.call(this, "li", vjs.obj.merge({
            className: "vjs-playlist-item vjs-item-placeholder ",
            innerHTML: ""
        }, b));
        return this.image_ = vjs.Component.prototype.createEl.call(this, "img", {
            src: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        }), c.appendChild(this.image_), this.image_.removeAttribute("height"), this.image_.removeAttribute("width"), this.options_.title && "" !== this.options_.title && (this.title_ = videojs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-playlist-item-title",
            innerHTML: this.options_.title
        }), c.appendChild(this.title_)), c
    }, videojs.PlaylistItem.prototype.onClick = function(a) {
        videojs.trigger(this.el_.parentNode, {
            type: "playlistitemclick",
            index: this.options_.index
        })
    }, videojs.PlaylistItem.prototype.preload = function() {
        this.loaded || (this.image_.src = this.options_.thumbnail, this.image_.removeAttribute("height"), this.image_.removeAttribute("width"), videojs.one(this.image_, "load", videojs.bind(this, function() {
            this.loaded = !0, this.removeClass("vjs-item-placeholder")
        })), videojs.one(this.image_, "error", videojs.bind(this, function() {
            this.loaded = !0
        })))
    }, videojs.PlaylistItem.prototype.setIndex = function(a) {
        this.options_.index = a
    }, videojs.PlaylistItem.prototype.getPosition = function() {
        return {
            top: this.el_.offsetTop,
            bottom: this.el_.offsetTop + this.el_.offsetHeight,
            left: this.el_.offsetLeft,
            right: this.el_.offsetLeft + this.el_.offsetWidth
        }
    }, videojs.PlaylistSlider = videojs.Component.extend({
        init: function(a, b) {
            b.vertical = -1 != a.el().className.indexOf("vjs-vertical-playlist"), videojs.Component.call(this, a, b), this.firstVisible_ = !1, this.lastVisible_ = !1, videojs.on(this.slidePaneEl_, "scroll", videojs.bind(this, this.onScroll)), this.scrollIndicator.on("dragscroll", videojs.bind(this, this.onDragScroll)), this.on("mousewheel", videojs.bind(this, function() {
                this.player().playlist.userInteraction(!0)
            })), this.isDragging_ = !1
        }
    }), videojs.PlaylistSlider.prototype.createEl = function(a, b) {
        var c = vjs.createEl("div", {
            className: "vjs-playlist-slide-container"
        });
        return this.slidePaneEl_ = vjs.Component.prototype.createEl.call(this, "div", vjs.obj.merge({
            className: "vjs-playlist-slide-pane",
            innerHTML: ""
        }, b)), this.contentEl_ = vjs.Component.prototype.createEl.call(this, "ul", {}), this.slidePaneEl_.appendChild(this.contentEl_), c.appendChild(this.slidePaneEl_), this.scrollIndicator = new videojs.ScrollIndicator(this.player(), {
            linkEl: this.slidePaneEl_,
            vertical: this.options_.vertical
        }), c.appendChild(this.scrollIndicator.el()), c
    }, videojs.PlaylistSlider.prototype.slidePaneEl = function() {
        return this.slidePaneEl_
    }, videojs.PlaylistSlider.prototype.options_ = {
        children: {}
    }, videojs.PlaylistSlider.prototype.setOrientation = function(a) {
        this.options_.vertical = "vertical" === a.toLowerCase(), this.scrollIndicator.setOrientation(a)
    }, videojs.PlaylistSlider.prototype.addChild = function() {
        var a = videojs.Component.prototype.addChild.apply(this, arguments);
        if ("LI" !== a.el_.tagName) throw new Error("Type Error: Child Elements Must Be LI");
        return a.setIndex(this.children_.length - 1), a
    }, videojs.PlaylistSlider.prototype.setSize = function(a) {
        this.options_.vertical ? this.setSizeY_(a) : this.setSizeX_(a), videojs.trigger(this.slidePaneEl_, {
            type: "resize",
            bubbles: !1
        }), a >= this.getScrollSize() ? this.scrollIndicator.hide() : this.scrollIndicator.show()
    }, videojs.PlaylistSlider.prototype.setSizeY_ = function(a) {
        this.el_.style.height = a + "px"
    }, videojs.PlaylistSlider.prototype.setSizeX_ = function(a) {
        this.el_.style.width = a + "px"
    }, videojs.PlaylistSlider.prototype.getMaxScroll = function() {
        return this.options_.vertical ? this.getMaxScrollY_() : this.getMaxScrollX_()
    }, videojs.PlaylistSlider.prototype.getMaxScrollY_ = function() {
        return this.slidePaneEl_.scrollHeight - this.slidePaneEl_.offsetHeight
    }, videojs.PlaylistSlider.prototype.getMaxScrollX_ = function() {
        return this.slidePaneEl_.scrollWidth - this.slidePaneEl_.offsetWidth
    }, videojs.PlaylistSlider.prototype.getScrollSize = function() {
        return this.options_.vertical ? this.getScrollSizeY_() : this.getScrollSizeX_()
    }, videojs.PlaylistSlider.prototype.getScrollSizeY_ = function() {
        return this.slidePaneEl_.scrollHeight
    }, videojs.PlaylistSlider.prototype.getScrollSizeX_ = function() {
        return this.slidePaneEl_.scrollWidth
    }, videojs.PlaylistSlider.prototype.getScroll = function() {
        return this.options_.vertical ? this.getScrollY_() : this.getScrollX_()
    }, videojs.PlaylistSlider.prototype.getScrollY_ = function() {
        return this.slidePaneEl_.scrollTop
    }, videojs.PlaylistSlider.prototype.getScrollX_ = function() {
        return this.slidePaneEl_.scrollLeft
    }, videojs.PlaylistSlider.prototype.setScroll = function(a) {
        this.options_.vertical ? this.setScrollY_(a) : this.setScrollX_(a), this.setVisible()
    }, videojs.PlaylistSlider.prototype.setScrollY_ = function(a) {
        this.slidePaneEl_.scrollTop = a
    }, videojs.PlaylistSlider.prototype.setScrollX_ = function(a) {
        this.slidePaneEl_.scrollLeft = a
    }, videojs.PlaylistSlider.prototype.scrollToChild = function(a) {
        a.index && (a = a.index);
        var b = this.children_[a];
        if (!b) return !1;
        var c = this.childPosition(a),
            d = (c.lower - c.upper, this.getPosition()),
            e = this.getMaxScroll();
        if (c.upper >= d.upper && c.lower <= d.lower) return this.setVisible(), !0;
        var f;
        return f = c.upper < d.upper + d.total / 2 ? e - (e - c.upper + 5) : d.upper + (c.lower - (d.lower - 5)), this.smoothScroll(f), !0
    }, videojs.PlaylistSlider.prototype.smoothScroll = function(a) {
        clearTimeout(this.animationTimer);
        var b = this.getScroll();
        return b += Math.round(.3 * (a - b)), Math.abs(b - a) < 2 ? (this.moveToChild_ = !1, void this.setScroll(a)) : (this.setScroll(b), void(this.animationTimer = setTimeout(videojs.bind(this, this.smoothScroll), 40, a)))
    }, videojs.PlaylistSlider.prototype.cancelScroll = function() {
        clearTimeout(this.animationTimer)
    }, videojs.PlaylistSlider.prototype.scrollBy = function(a) {
        this.setScroll(this.getScroll() + a)
    }, videojs.PlaylistSlider.prototype.onScroll = function(a) {
        this.firstVisible_ = !1, this.lastVisible_ = !1, this.setVisible()
    }, videojs.PlaylistSlider.prototype.onDragScroll = function(a) {
        var b = this.getMaxScroll(),
            c = this.scrollIndicator.getSize(),
            d = a.position / c.to * b;
        this.player().playlist.userInteraction(!1), this.setScroll(d), this.player().playlist.userInteraction(!0)
    }, videojs.PlaylistSlider.prototype.isDragging = function() {
        return this.isDragging_
    }, videojs.PlaylistSlider.prototype.select = function(a, b) {
        for (var c = 0; c < this.children_.length; c++) videojs.removeClass(this.children_[c].el(), "vjs-playlist-selected");
        videojs.addClass(this.children_[a].el(), "vjs-playlist-selected"), b && this.moveToSelected()
    }, videojs.PlaylistSlider.prototype.getPosition = function() {
        var a = this.slidePaneEl_;
        return this.options_.vertical ? {
            upper: a.scrollTop,
            lower: a.scrollTop + a.offsetHeight,
            total: a.offsetHeight
        } : {
            upper: a.scrollLeft,
            lower: a.scrollLeft + a.offsetWidth,
            total: a.offsetWidth
        }
    }, videojs.PlaylistSlider.prototype.childPosition = function(a) {
        if (!this.children_ && !this.children_[a]) return !1;
        var b = this.children_[a].getPosition(),
            c = this.options_.vertical ? {
                upper: b.top,
                lower: b.bottom
            } : {
                upper: b.left,
                lower: b.right
            };
        return c
    }, videojs.PlaylistSlider.prototype.isVisible = function(a) {
        var b = this.getPosition(),
            c = this.childPosition(a);
        return c.upper >= b.upper && c.lower <= b.lower ? !0 : c.lower > b.upper && c.upper < b.lower ? 1 : c.upper < b.lower + 100 && c.upper > b.lower - 100 || c.lower > b.upper + 100 && c.lower < b.upper + 100 ? 0 : !1
    }, videojs.PlaylistSlider.prototype.setVisible = function() {
        var a = null,
            b = null;
        this.firstVisible_ = !1, this.lastVisible_ = !1;
        for (var c = 0; c < this.children_.length; c++) b = this.isVisible(c), a = this.children_[c], b ? (b === !0 && (this.firstVisible_ === !1 && (this.firstVisible_ = c), this.lastVisible_ = c), a.addClass("visible")) : a.removeClass("visible"), (0 === b || b) && a.preload()
    }, videojs.PlaylistSlider.prototype.moveToNext = function(a) {
        if (a) {
            var b = this.lastVisible_ + 1;
            b == this.moveToChild_ && b++, this.moveToChild_ = b, this.scrollToChild(this.moveToChild_)
        } else this.scrollToChild(this.lastVisible_ + 1)
    }, videojs.PlaylistSlider.prototype.moveToPrevious = function(a) {
        if (a) {
            var b = this.firstVisible_ - 1;
            b == this.moveToChild_ && b--, this.moveToChild_ = b, this.scrollToChild(this.moveToChild_)
        } else this.scrollToChild(this.firstVisible_ - 1)
    }, videojs.PlaylistSlider.prototype.moveToSelected = function(a) {
        var b = this.getPosition(),
            c = null,
            d = null;
        if (a) d = this.children_[item];
        else
            for (var e = 0; e < this.children_.length; e++)
                if (null !== this.children_[e].el().className.match("vjs-playlist-selected")) {
                    d = this.children_[e], a = e;
                    break
                }
        c = d.getPosition();
        var f;
        f = c.upper - c.total < b.upper ? this.children_[a - 1] ? a - 1 : a : c.lower + c.total > b.lower && this.children_[a + 1] ? a + 1 : a, this.scrollToChild(f)
    }, videojs.PlaylistTitle = videojs.Component.extend({
        init: function(a, b) {
            videojs.Component.call(this, a, b)
        }
    }), videojs.PlaylistTitle.prototype.createEl = function(a, b) {
        var c = vjs.Component.prototype.createEl.call(this, "div", vjs.obj.merge({
            className: "vjs-playlist-title",
            innerHTML: ""
        }, b));
        return c
    }, videojs.PlaylistTitle.prototype.showTitle = function(a) {
        a ? (videojs.addClass(this.player().el(), "vjs-has-playlist-title"), this.show()) : this.hide()
    }, videojs.PlaylistTitle.prototype.setTitle = function(a) {
        this.el_.innerHTML = a
    },
    function() {
        "use strict";
        videojs.Playlist = videojs.Component.extend({
            init: function(a, b) {
                videojs.addClass(a.el(), "vjs-has-playlist"), this.originalOrientation = b.veritcal;
                var c = a.el().parentNode;
                b.vertical ? (videojs.addClass(a.el(), "vjs-vertical-playlist"), c.className.indexOf("video-js-responsive-container") >= 0 && videojs.addClass(c, "vjs-vertical-playlist")) : (videojs.addClass(a.el(), "vjs-horizontal-playlist"), c.className.indexOf("video-js-responsive-container") >= 0 && videojs.addClass(c, "vjs-horizontal-playlist")), videojs.Component.call(this, a, b), this.options_.autoAdvance && (this.autoAdvanceFn = videojs.bind(this, function() {
                    var a = this.currentItem;
                    setTimeout(videojs.bind(this, function() {
                        this.loadNext(), (a !== this.currentItem || this.options_.loop) && (this.player().trigger({
                            type: "playlistautoload"
                        }), this.player().play())
                    }, 50))
                }), videojs.on(this.player().el(), "ended", this.autoAdvanceFn)), this.setupPlaylist(), this.on("playlistLoaded", videojs.bind(this, this.playlistLoaded)), videojs.on(this.playlistSlider.contentEl(), "playlistitemclick", videojs.bind(this, function(a) {
                    this.userInteraction(!1), this.loadItem(a.index), -1 == this.player().el().className.indexOf("vjs-has-started") && (videojs.addClass(this.player().el(), "vjs-has-started"), this.player().posterImage.hide()), this.items_[a.index].options().type.indexOf("image") > -1 && !this.options_.autoAdvance ? this.player().trigger("pause") : this.player().play(), this.player().trigger({
                        type: "playlistload",
                        item: this.items_[a.index]
                    })
                })), videojs.on(window, "resize", videojs.bind(this, this.onResize)), this.player_.on("resize", videojs.bind(this, function() {
                    this.player().el().className.indexOf("vjs-small") >= 0 && this.options_.vertical ? this.setOrientation("vertical") : this.player().el().className.indexOf("vjs-large") >= 0 && !this.options_.vertical && this.setOrientation("horizontal")
                })), !this.options_.vertical && this.options_.showTitle ? this.playlistTitle.showTitle(!0) : this.playlistTitle.showTitle(!1), this.on("click", function(a) {
                    a.stopImmediatePropagation()
                })
            }
        }), videojs.Playlist.prototype.createEl = function() {
            var a = {
                className: "vjs-playlist",
                innerHTML: "",
                "aria-live": "polite",
                tabIndex: 0
            };
            return videojs.createEl("div", a)
        }, videojs.Playlist.prototype.options_ = {
            children: {
                playlistTitle: {},
                playlistPrevious: {},
                playlistSlider: {},
                playlistNext: {}
            },
            showTitle: !0
        }, videojs.Playlist.prototype.items_ = [], videojs.Playlist.prototype.hasPlaylistLoaded_ = !1, videojs.Playlist.prototype.playlistLoadQueue = [], videojs.Playlist.prototype.items = function() {
            return this.items_
        }, videojs.Playlist.prototype.setOrientation = function(a) {
            this.options_.vertical = "vertical" === a.toLowerCase();
            var b = this.player_.el().parentNode;
            videojs.removeClass(b, "vjs-vertical-playlist"), videojs.removeClass(b, "vjs-horizontal-playlist"), videojs.removeClass(this.player_.el(), "vjs-vertical-playlist"), videojs.removeClass(this.player_.el(), "vjs-horizontal-playlist"), this.options_.vertical ? (videojs.addClass(this.player_.el(), "vjs-vertical-playlist"), b.className.indexOf("video-js-responsive-container") >= 0 && videojs.addClass(b, "vjs-vertical-playlist")) : (videojs.addClass(this.player_.el(), "vjs-horizontal-playlist"), b.className.indexOf("video-js-responsive-container") >= 0 && videojs.addClass(b, "vjs-horizontal-playlist")), setTimeout(videojs.bind(this, this.onResize), 750), this.playlistSlider.setOrientation(a)
        }, videojs.Playlist.prototype.setupPlaylist = function() {
            if (this.options_.url) {
                var a = "?";
                this.options_.url.indexOf("?") > 0 && (a = "&"), /\.json(?:\?|$)/i.test(this.options_.url) ? videojs.get(this.options_.url, videojs.bind(this, function(a) {
                    this.options_.items = JSON.parse(a), this.createItems()
                })) : videojs.JSONP(this.options_.url + a + "callback={callback}", videojs.bind(this, function(a) {
                    this.options_.items = a, this.createItems()
                }))
            } else this.createItems()
        }, videojs.Playlist.prototype.createItems = function() {
            var a = this.options_.items;
            this.items_ = [];
            for (var b = 0; b < a.length; b++)
                if (a[b]) {
                    a[b].caption && !a[b].title && (a[b].title = a[b].caption);
                    var c = a[b].type || a[b].media[Object.keys(a[b].media)[0]].source[0].type;
                    a[b].type = c, this.items_[b] = this.playlistSlider.addChild("playlistItem", a[b]), videojs.one(this.items_[b].image_, "load", videojs.bind(this, function() {
                        this.onResize()
                    }))
                }
            this.trigger({
                type: "playlistLoaded",
                items: this.items_
            }), this.loadItem(0), setTimeout(videojs.bind(this, this.onResize), 1e3), this.items_[0].options() && this.items_[0].options().poster && this.player().posterImage.show()
        }, videojs.Playlist.prototype.playlistLoaded = function(a) {
            this.hasPlaylistLoaded = !0, this.processPlaylistLoad()
        }, videojs.Playlist.prototype.processPlaylistLoad = function() {
            for (var a; void 0 !== (a = this.playlistLoadQueue.pop());) a(this.items_)
        }, videojs.Playlist.prototype.onPlaylistLoad = function(a) {
            this.hasPlaylistLoaded ? a(this.items_) : this.playlistLoadQueue.push(a)
        }, videojs.Playlist.prototype.userInteraction = function(a) {
            return void 0 !== a && (this.userInteraction_ = a, this.userInteraction && this.playlistSlider.cancelScroll(), this.interactionCheck_ && clearTimeout(this.interactionCheck_), this.interactionCheck_ = setTimeout(videojs.bind(this, function() {
                this.userInteraction_ = !1, clearTimeout(this.interactionCheck_), this.interactionCheck_ = !1
            }), 2e4)), this.userInteraction_
        }, videojs.Playlist.prototype.loadNext = function() {
            var a = this.currentItem + 1;
            a < this.items_.length ? this.loadItem(a) : this.options_.loop && this.loadItem(0)
        }, videojs.Playlist.prototype.loadPrevious = function() {
            var a = this.currentItem - 1;
            a >= 0 ? this.loadItem(a) : this.options_.loop && this.loadItem(this.items_.length - 1)
        }, videojs.Playlist.prototype.loadItem = function(a) {
            var b;
            if (b = "object" == typeof a && void 0 !== a.index ? a.index : a, this.currentItem = b, this.playlistSlider.select(this.currentItem, !this.userInteraction()), this.items_[b].options().src && this.items_[b].options().type) this.player().src({
                src: this.items_[b].options().src,
                type: this.items_[b].options().type
            }), this.items_[b].options().poster && ("VIDEO" === this.player().tech.el().tagName && (this.player().tech.el().poster = this.items_[b].options().poster), this.player().poster(this.items_[b].options().poster));
            else {
                var c = Object.keys(this.items_[b].options().media),
                    d = c[0],
                    e = [],
                    f = /(\d+?)p/i,
                    g = /\d+?x(\d+)/i,
                    h = !1;
                if (c.length > 1) {
                    for (var i = 0; i < c.length; i++) {
                        var j = f.exec(c[i]),
                            k = g.exec(c[i]);
                        j && j[1] ? e.push({
                            size: parseInt(j[1]),
                            key: c[i]
                        }) : k && k[1] && e.push({
                            size: parseInt(k[1]),
                            key: c[i]
                        }), 360 === e[e.length - 1].size && (h = c[i]), e = e.sort(function(a, b) {
                            return a.size - b.size
                        }).reverse()
                    }
                    d = h ? h : e[0].key, e && this.player_.qualityControl && this.player_.qualityControl({
                        defaultQuality: d,
                        sources: this.items_[b].options().media
                    })
                } else d = Object.keys(this.items_[b].options().media)[0];
                this.player().src(this.items_[b].options().media[d].source);
                var l = this.items_[b].options().media[d].poster;
                l && ("VIDEO" === this.player().tech.el().tagName && (this.player().tech.el().poster = l), this.player().poster(l), this.player().posterImage.show())
            }
            this.items_[b].options().title && this.playlistTitle.setTitle(this.items_[b].options().title), this.items_[b].options().captions && this.player().addTextTrack("captions", "", "en", {
                src: this.items_[b].options().captions
            }), this.items_[b].options().subtitles && this.player().addTextTrack("subtitles", "", "en", {
                src: this.items_[b].options().subtitles
            }), this.items_[b].options().type.indexOf("image") > -1 && !this.options_.autoAdvance ? (this.player().controlBar.progressControl.hide(), this.player().controlBar.playToggle.hide()) : (this.player().controlBar.progressControl.show(), this.player().controlBar.playToggle.show())
        }, videojs.Playlist.prototype.onResize = function(a) {
            var b = this.slidePaneSize();
            this.playlistSlider.setSize(b);
            var c = this.playlistSlider.getMaxScroll();
            this.playlistSlider.setVisible(), 0 >= c ? (this.playlistNext.hide(), this.playlistPrevious.hide()) : (this.playlistNext.show(), this.playlistPrevious.show())
        }, videojs.Playlist.prototype.slidePaneSize = function() {
            var a;
            return this.playlistPrevious.show(), this.playlistNext.show(), a = this.options_.vertical ? this.el_.offsetHeight - this.playlistPrevious.el().offsetHeight - this.playlistNext.el().offsetHeight : this.el_.offsetWidth - this.playlistPrevious.el().offsetWidth - this.playlistNext.el().offsetWidth
        }, videojs.Playlist.prototype.moveToNext = function() {
            this.playlistSlider.moveToNext(!0)
        }, videojs.Playlist.prototype.moveToPrevious = function() {
            this.playlistSlider.moveToPrevious(!0)
        }, videojs.Playlist.prototype.moveToSelected = function(a) {
            this.playlistSlider.moveToSelected(a)
        }, videojs.Playlist.prototype.moveBy = function(a) {
            this.playlistSlider.scrollBy(a)
        }, videojs.JSONP || (videojs.JSONP = function(a, b) {
            function c() {
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", b = "", c = -1; ++c < 15;) b += a.charAt(Math.floor(52 * Math.random()));
                return b
            }

            function d(a) {
                var d = a.match(/callback=jsonp.(\w+)/),
                    f = d ? d[1] : c();
                return videojs.JSONP[f] = function(a) {
                    b(a), delete videojs.JSONP[f], e.removeChild(g)
                }, "videojs.JSONP." + f
            }
            var e = document.getElementsByTagName("head")[0],
                f = d(a),
                g = document.createElement("script");
            g.type = "text/javascript", g.src = a.replace(/(\{|%7B)callback(\}|%7D)/gi, f), e.appendChild(g)
        }), videojs.plugin("playlist", function(a) {
            if ((a.items && a.items.length || a.url && "" !== a.url) && (this.tech.el().style.backgroundColor = "transparent", this.playlist = this.addChild("playlist", a), a.addControls)) {
                this.playlist.advancePlaylistButton = this.controlBar.addChild("advancePlaylist"), this.playlist.regressPlaylistButton = this.controlBar.addChild("regressPlaylist");
                var b = videojs.findControlLocation(this, "vjs-play-control");
                b = -1 == b ? 0 : b, this.controlBar.el().insertBefore(this.playlist.regressPlaylistButton.el(), this.controlBar.el().childNodes[b]), this.controlBar.el().insertBefore(this.playlist.advancePlaylistButton.el(), this.controlBar.el().childNodes[b + 2])
            }
        })
    }(), videojs.ScrollIndicator = videojs.Button.extend({
        init: function(a, b) {
            videojs.Button.call(this, a, b), this.scrollIndicatorHandle = new videojs.ScrollIndicatorHandle(a, vjs.obj.merge({
                track: this
            }, b)), this.addChild(this.scrollIndicatorHandle), this.on("selectstart", function() {
                return !1
            }), this.el_.setAttribute("unselectable", "on")
        }
    }), videojs.ScrollIndicator.prototype.options_ = {}, videojs.ScrollIndicator.prototype.createEl = function(a, b) {
        return vjs.Component.prototype.createEl.call(this, "div", vjs.obj.merge({
            className: "vjs-playlist-scroll-track",
            innerHTML: ""
        }, b))
    }, videojs.ScrollIndicator.prototype.setOrientation = function(a) {
        this.options_.vertical = "vertical" === a.toLowerCase(), this.scrollIndicatorHandle.setOrientation(a)
    }, videojs.ScrollIndicator.prototype.onClick = function(a) {
        a.stopPropagation(), this.scrollIndicatorHandle.dragDiff_ = this.options_.vertical ? this.scrollIndicatorHandle.el().offsetHeight / 2 : this.scrollIndicatorHandle.el().offsetWidth / 2, this.scrollIndicatorHandle.dragging_ = !0, this.scrollIndicatorHandle.onDrag(a), this.scrollIndicatorHandle.dragging_ = !1
    }, videojs.ScrollIndicator.prototype.getSize = function() {
        return this.scrollIndicatorHandle.getSize()
    }, videojs.ScrollIndicatorHandle = videojs.Button.extend({
        init: function(a, b) {
            videojs.Button.call(this, a, b), this.on("mousedown", this.onMouseDown), this.on("touchstart", this.onMouseDown), this.on("selectstart", function() {
                return !1
            }), this.el_.setAttribute("unselectable", "on"), this.linkEl_ = b.linkEl, this.track_ = b.track, this.dragging_ = !1, this.dragDiff_ = null, this.handle_ = videojs.bind(this, this.onDrag), videojs.on(this.linkEl_, "resize", videojs.bind(this, this.onResize)), videojs.on(this.linkEl_, "scroll", videojs.bind(this, this.onScroll))
        }
    }), videojs.ScrollIndicatorHandle.prototype.createEl = function(a, b) {
        return vjs.Component.prototype.createEl.call(this, "div", vjs.obj.merge({
            className: "vjs-playlist-scroll-indicator",
            innerHTML: ""
        }, b))
    }, videojs.ScrollIndicatorHandle.prototype.setOrientation = function(a) {
        this.options_.vertical = "vertical" === a.toLowerCase(), this.onResize()
    }, videojs.ScrollIndicatorHandle.prototype.onResize = function(a) {
        this.setIndicatorSize(), this.setTrackSize(), this.options_.vertical ? this.moveIndicator_(this.el_.offsetTop) : this.moveIndicator_(this.el_.offsetLeft)
    }, videojs.ScrollIndicatorHandle.prototype.setTrackSize = function() {
        this.min_ = 0, this.options_.vertical ? this.max_ = this.track_.el().offsetHeight - this.el_.offsetHeight : this.max_ = this.track_.el().offsetWidth - this.el_.offsetWidth, this.trackPosition_ = videojs.findPosition(this.el_.parentNode)
    }, videojs.ScrollIndicatorHandle.prototype.setIndicatorSize = function() {
        var a = this.options_.vertical ? this.linkEl_.offsetHeight : this.linkEl_.offsetWidth,
            b = this.options_.vertical ? this.linkEl_.scrollHeight : this.linkEl_.scrollWidth,
            c = 80 * (a / b) + 20;
        this.options_.vertical ? this.el_.style.height = c + "%" : this.el_.style.width = c + "%"
    }, videojs.ScrollIndicatorHandle.prototype.getSize = function() {
        return {
            from: this.min_,
            to: this.max_
        }
    }, videojs.ScrollIndicatorHandle.prototype.onMouseDown = function(a) {
        a = a || window.event, a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), a.cancelBubble = !0, a.returnValue = !1, this.dragging_ = !0;
        var b = videojs.findPosition(this.el_),
            c = a.pageY,
            d = a.pageX;
        this.options_.vertical ? this.dragDiff_ = c - b.top : this.dragDiff_ = d - b.left, videojs.on(document, "mousemove", this.handle_), videojs.one(window, "mouseup", videojs.bind(this, this.onMouseUp))
    }, videojs.ScrollIndicatorHandle.prototype.onDrag = function(a) {
        if (this.dragging_) {
            a = a || window.event, a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), a.cancelBubble = !0, a.returnValue = !1;
            var b = this.options_.vertical ? a.pageY - this.trackPosition_.top - this.dragDiff_ : b = a.pageX - this.trackPosition_.left - this.dragDiff_;
            this.moveIndicator_(b), this.trigger({
                type: "dragscroll",
                position: b
            })
        }
    }, videojs.ScrollIndicatorHandle.prototype.onMouseUp = function(a) {
        a.stopPropagation(), this.dragging_ = !1, videojs.off(document, "mousemove", this.handle_), this.trigger("mouseup")
    }, videojs.ScrollIndicatorHandle.prototype.onClick = function(a) {
        a.stopPropagation()
    }, videojs.ScrollIndicatorHandle.prototype.moveIndicator_ = function(a) {
        a = Math.max(Math.round(a), 0), a <= this.min_ ? a = this.min_ : a >= this.max_ && (a = this.max_), this.options_.vertical ? this.el_.style.top = a.toString().replace("%", "") + "px" : this.el_.style.left = a.toString().replace("%", "") + "px"
    }, videojs.ScrollIndicatorHandle.prototype.onScroll = function(a) {
        var b = this.options_.vertical ? this.linkEl_.scrollTop / (this.linkEl_.scrollHeight - this.linkEl_.offsetHeight) : this.linkEl_.scrollLeft / (this.linkEl_.scrollWidth - this.linkEl_.offsetWidth);
        this.moveIndicator_(this.max_ * b)
    }, videojs.PlaylistGridItem = videojs.Button.extend({
        init: function(a, b) {
            videojs.Component.call(this, a, b), this.loaded = !1, this.inFocus = !1;
            var c = !1;
            this.on("touchstart", function(a) {
                c = !0
            }), this.on("touchmove", function() {
                c = !1
            });
            var d = this;
            this.on("touchend", function(a) {
                c && d.onClick(a), a.preventDefault()
            }), this.on("click", this.onClick), this.on("focus", this.onFocus), this.on("blur", this.onBlur);
            var e = this.options_.type || this.options_.media[Object.keys(this.options_.media)[0]].source[0].type;
            this.addClass(e.substr(0, e.indexOf("/")))
        }
    }), videojs.PlaylistGridItem.prototype.onFocus = function() {}, videojs.PlaylistGridItem.prototype.createEl = function(a, b) {
        var c = vjs.Component.prototype.createEl.call(this, "li", vjs.obj.merge({
            className: "vjs-playlist-grid-item vjs-item-placeholder ",
            innerHTML: ""
        }, b));
        return this.image_ = vjs.Component.prototype.createEl.call(this, "img", {
            src: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        }), c.appendChild(this.image_), this.image_.removeAttribute("height"), this.image_.removeAttribute("width"), this.image_.ondragstart = function() {
            return !1
        }, this.options_.title && "" !== this.options_.title && (this.title_ = videojs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-playlist-item-title",
            innerHTML: this.options_.title
        }), c.appendChild(this.title_)), c
    }, videojs.PlaylistGridItem.prototype.onClick = function(a) {
        this.inFocus || videojs.trigger(this.el_.parentNode, {
            type: "PlaylistGridItemClick",
            index: this.options_.index
        })
    }, videojs.PlaylistGridItem.prototype.preload = function() {
        if (!this.loaded) {
            if ("object" == typeof this.options_.media) {
                var a = Object.keys(this.options_.media);
                this.image_.src = this.options_.media[a[0]].poster
            } else this.image_.src = this.options_.thumbnail;
            this.image_.removeAttribute("height"), this.image_.removeAttribute("width"), videojs.one(this.image_, "load", videojs.bind(this, function() {
                this.loaded = !0, this.removeClass("vjs-item-placeholder")
            })), videojs.one(this.image_, "error", videojs.bind(this, function() {
                this.loaded = !0
            }))
        }
    }, videojs.PlaylistGridItem.prototype.setIndex = function(a) {
        this.options_.index = a
    }, videojs.PlaylistGridItem.prototype.getPosition = function() {
        return {
            top: this.el_.offsetTop,
            bottom: this.el_.offsetTop + this.el_.offsetHeight,
            left: this.el_.offsetLeft,
            right: this.el_.offsetLeft + this.el_.offsetWidth
        }
    },
    function() {
        "use strict";

        function a(a, b, c) {
            return this.grid = c, this.bodyEl = document.querySelector("body"), this.backdrop = videojs.createEl("div", {
                className: "vjs-modal-backdrop"
            }), this.modal = videojs.createEl("div", {
                className: "vjs-modal"
            }), this.hasAppended = !1, this.contentEl = b, this.isEscKey = videojs.bind(this, this.isEscKey), this.open = videojs.bind(this, this.open), this.close = videojs.bind(this, this.close), videojs.on(this.backdrop, "click", this.close), this
        }

        function b(a, b, c, d, e) {
            return this.player = a, this.playerContainer = b, this.gridContainer = c, this.columns = d, this.grid = e, this.hasAppended = !1, this.container = videojs.createEl("div", {
                className: "vjs-slide-container"
            }), this.contentContainer = videojs.createEl("div", {
                className: "vjs-slide-row"
            }), this.slide = videojs.createEl("div", {
                className: "vjs-slide"
            }), this.container.appendChild(this.contentContainer), this.contentContainer.appendChild(this.slide), this.currentRow = -1, this.open = videojs.bind(this, this.open), this
        }

        function c(a, b, c) {
            this.player = a, this.playerContainer = b, this.items = c
        }
        a.prototype.open = function(a) {
            this.hasAppended || (this.hasAppended = !0, this.contentEl.style.left = null, this.contentEl.style.top = null, this.contentEl.style.position = null, this.modal.appendChild(this.grid.getChild("playlistTitle").el()), this.modal.appendChild(this.contentEl)), videojs.on(document, "keydown", this.isEscKey), this.bodyEl.appendChild(this.backdrop), this.bodyEl.appendChild(this.modal), setTimeout(videojs.bind(this, function() {
                videojs.addClass(this.bodyEl, "vjs-modal-open"), setTimeout(a, 400)
            }), 10)
        }, a.prototype.close = function() {
            videojs.removeClass(this.bodyEl, "vjs-modal-open"), videojs.off(document, "keydown", this.isEscKey), setTimeout(videojs.bind(this, function() {
                this.bodyEl.removeChild(this.backdrop), this.bodyEl.removeChild(this.modal)
            }), 400)
        }, a.prototype.isEscKey = function(a) {
            ("escape" === a.key.toLowerCase() || 27 === a.keyCode) && this.close()
        }, b.prototype.open = function(a, b) {
            this.hasAppended || (this.hasAppended = !0, this.playerContainer.style.left = null, this.playerContainer.style.top = null, this.playerContainer.style.position = null, this.slide.appendChild(this.playerContainer));
            var c = Math.floor(a / this.columns),
                d = c * this.columns;
            c != this.currentRow && (videojs.removeClass(this.container, "open"), this.gridContainer.insertBefore(this.container, b[d].el()), this.gridContainer.insertBefore(this.grid.getChild("playlistTitle").el(), this.container), this.currentRow = c, setTimeout(videojs.bind(this, function() {
                videojs.addClass(this.container, "open")
            }), 1))
        }, c.prototype.show = function(a) {
            this.playerContainer.style.left = null, this.playerContainer.style.top = null, this.playerContainer.style.position = null, videojs.arr.forEach(this.items, function(a) {
                a.inFocus = !1, this.setChildren(a.el(), !0)
            }, this), this.items[a].inFocus = !0, this.setChildren(this.items[a].el(), !1), videojs.insertFirst(this.playerContainer, this.items[a].el())
        }, c.prototype.setChildren = function(a, b) {
            for (var c = 0; c < a.children.length; c++) videojs.hasClass(a.children[c], "vjs-playlist-item-title") || (a.children[c].style.display = b ? null : "none")
        }, videojs.PlaylistGrid = videojs.Component.extend({
            init: function(d, e) {
                switch (videojs.Component.call(this, d, e), videojs.addClass(d.el(), "vjs-has-playlist-grid"), videojs.hasClass(this.player().el().parentNode, "video-js-responsive-container") ? this.parentNode = this.player().el().parentNode.parentNode : this.parentNode = this.player().el().parentNode, this.setupPlaylist(), this.options_.position) {
                    case "modal":
                        var f = this;
                        this.setPlayerOffScreen(), this.on("playlistLoaded", videojs.bind(this, function() {
                            this.modal = new a(d, this.playerContainer, this), this.closeBtn = this.player().addChild("ExitButton"), this.closeBtn.on("click", function(a) {
                                f.modal.close()
                            }), this.closeBtn.el().style.position = "absolute", this.closeBtn.el().style.right = 0, this.closeBtn.el().style.top = 0, this.closeBtn.el().style.background = "rgba(0,0,0,0.25)", void(this.closeBtn.el().style.background = "rgba(0,0,0,0.25)")
                        }));
                        break;
                    case "slide":
                        this.setPlayerOffScreen(), this.on("playlistLoaded", videojs.bind(this, function() {
                            this.slide = new b(d, this.playerContainer, this.el(), this.options_.columns, this)
                        }));
                        break;
                    case "in-place":
                        this.setPlayerOffScreen(), this.on("playlistLoaded", videojs.bind(this, function() {
                            this.inPlace = new c(d, this.playerContainer, this.items_)
                        })), this.playlistTitle.setTitle(""), this.playlistTitle.dispose(), delete this.playlistTitle
                }
                this.on("playlistLoaded", videojs.bind(this, this.playlistLoaded)), videojs.on(this.contentEl(), "PlaylistGridItemClick", videojs.bind(this, function(a) {
                    switch (this.userInteraction(!1), this.options_.position) {
                        case "modal":
                            this.modal.open(videojs.bind(this, function() {})), this.loadOnClick(a.index);
                            break;
                        case "slide":
                            this.slide.open(a.index, this.items_), this.loadOnClick(a.index);
                            break;
                        case "in-place":
                            this.inPlace.show(a.index), this.loadOnClick(a.index);
                            break;
                        case "top":
                            this.loadOnClick(a.index)
                    }
                    this.playlistTitle && this.playlistTitle.show()
                })), this.on("click", function(a) {
                    a.stopImmediatePropagation()
                })
            }
        }), videojs.PlaylistGrid.prototype.createEl = function() {
            var a = {
                className: "vjs-playlist-grid vjs-grid-columns-" + this.options_.columns,
                innerHTML: "",
                "aria-live": "polite",
                tabIndex: 0
            };
            return videojs.createEl("ul", a)
        }, videojs.PlaylistGrid.prototype.options_ = {
            name: "playlistGrid",
            children: {
                playlistTitle: {}
            },
            showTitle: !0
        }, videojs.PlaylistGrid.prototype.dispose = function() {
            this.playerContainer && this.parentNode.appendChild(this.playerContainer), this.el_.remove(), videojs.Component.prototype.dispose.call(this)
        }, videojs.PlaylistGrid.prototype.items_ = [], videojs.PlaylistGrid.prototype.hasPlaylistLoaded_ = !1, videojs.PlaylistGrid.prototype.playlistLoadQueue = [], videojs.PlaylistGrid.prototype.items = function() {
            return this.items_
        }, videojs.PlaylistGrid.prototype.setupPlaylist = function() {
            if (this.options_.url) {
                var a = "?";
                this.options_.url.indexOf("?") > 0 && (a = "&"), /\.json(?:\?|$)/i.test(this.options_.url) ? videojs.get(this.options_.url, videojs.bind(this, function(a) {
                    this.options_.items = JSON.parse(a), this.createItems()
                })) : videojs.JSONP(this.options_.url + a + "callback={callback}", videojs.bind(this, function(a) {
                    this.options_.items = a, this.createItems()
                }))
            } else this.createItems()
        }, videojs.PlaylistGrid.prototype.createItems = function() {
            var a = this.options_.items;
            this.items_ = [];
            for (var b = 0; b < a.length; b++)
                if (a[b]) {
                    a[b].caption && !a[b].title && (a[b].title = a[b].caption);
                    var c = a[b].type || a[b].media[Object.keys(a[b].media)[0]].source[0].type;
                    a[b].type = c, a[b].index = b, this.items_[b] = this.addChild("playlistGridItem", a[b]), this.items_[b].preload()
                }
            this.trigger({
                type: "playlistLoaded",
                items: this.items_
            }), this.loadItem(0), this.playlistTitle && "top" != this.options_.position && this.playlistTitle.hide(), this.items_[0].options() && this.items_[0].options().poster && this.player().posterImage.show()
        }, videojs.PlaylistGrid.prototype.playlistLoaded = function(a) {
            this.hasPlaylistLoaded_ = !0
        }, videojs.PlaylistGrid.prototype.processPlaylistLoad = function() {
            for (var a; void 0 !== (a = this.playlistLoadQueue.pop());) a(this.items_)
        }, videojs.PlaylistGrid.prototype.onPlaylistLoad = function(a) {
            this.hasPlaylistLoaded_ ? a(this.items_) : this.playlistLoadQueue.push(a)
        }, videojs.PlaylistGrid.prototype.setPlayerOffScreen = function() {
            videojs.hasClass(this.player().el().parentNode, "video-js-responsive-container") ? this.playerContainer = this.player().el().parentNode : this.playerContainer = this.player().el(), this.playlistTitle && this.playlistTitle.hide(), this.playerContainer.style.position = "absolute", this.playerContainer.style.top = "-5000px", this.playerContainer.style.left = "-5000px"
        }, videojs.PlaylistGrid.prototype.loadOnClick = function(a) {
            this.loadItem(a), -1 == this.player().el().className.indexOf("vjs-has-started") && (videojs.addClass(this.player().el(), "vjs-has-started"), this.player().posterImage.hide()), this.items_[a].options().type.indexOf("image") > -1 ? this.player().trigger("pause") : this.player().play(), this.player().trigger({
                type: "playlistload",
                item: this.items_[a]
            })
        }, videojs.PlaylistGrid.prototype.userInteraction = function(a) {
            return void 0 !== a && (this.userInteraction_ = a, this.userInteraction, this.interactionCheck_ && clearTimeout(this.interactionCheck_), this.interactionCheck_ = setTimeout(videojs.bind(this, function() {
                this.userInteraction_ = !1, clearTimeout(this.interactionCheck_), this.interactionCheck_ = !1
            }), 2e4)), this.userInteraction_
        }, videojs.PlaylistGrid.prototype.loadItem = function(a) {
            var b;
            if (b = "object" == typeof a && void 0 !== a.index ? a.index : a, this.currentItem = b, this.items_[b].options().src && this.items_[b].options().type) this.player().src({
                src: this.items_[b].options().src,
                type: this.items_[b].options().type
            }), this.items_[b].options().poster && ("VIDEO" === this.player().tech.el().tagName && (this.player().tech.el().poster = this.items_[b].options().poster), this.player().poster(this.items_[b].options().poster));
            else {
                var c = Object.keys(this.items_[b].options().media),
                    d = c[0],
                    e = [],
                    f = /(\d+?)p/i,
                    g = /\d+?x(\d+)/i,
                    h = !1;
                if (c.length > 1) {
                    for (var i = 0; i < c.length; i++) {
                        var j = f.exec(c[i]),
                            k = g.exec(c[i]);
                        j && j[1] ? e.push({
                            size: parseInt(j[1]),
                            key: c[i]
                        }) : k && k[1] && e.push({
                            size: parseInt(k[1]),
                            key: c[i]
                        }), 360 === e[e.length - 1].size && (h = c[i]), e = e.sort(function(a, b) {
                            return a.size - b.size
                        }).reverse()
                    }
                    d = h ? h : e[0].key, e && this.player_.qualityControl && this.player_.qualityControl({
                        defaultQuality: d,
                        sources: this.items_[b].options().media
                    })
                } else d = Object.keys(this.items_[b].options().media)[0];
                this.player().src(this.items_[b].options().media[d].source);
                var l = this.items_[b].options().media[d].poster;
                l && ("VIDEO" === this.player().tech.el().tagName && (this.player().tech.el().poster = l), this.player().poster(l), this.player().posterImage.show())
            }
            this.playlistTitle && (this.items_[b].options().title ? (this.playlistTitle.setTitle(this.items_[b].options().title), this.playlistTitle.show()) : (this.playlistTitle.setTitle(""), this.playlistTitle.hide())), this.items_[b].options().captions && this.player().addTextTrack("captions", "", "en", {
                src: this.items_[b].options().captions
            }), this.items_[b].options().subtitles && this.player().addTextTrack("subtitles", "", "en", {
                src: this.items_[b].options().subtitles
            }), this.items_[b].options().type.indexOf("image") > -1 && !this.options_.autoAdvance ? (this.player().controlBar.progressControl.hide(), this.player().controlBar.playToggle.hide()) : (this.player().controlBar.progressControl.show(), this.player().controlBar.playToggle.show())
        }, videojs.plugin("playlistGrid", function(a) {
            if (!(a.items && a.items.length || a.url && "" !== a.url)) throw new Error("No playlist items available");
            void(this.tech.el().style.backgroundColor = "transparent");
            var b = {
                    columns: 3,
                    position: "top"
                },
                c = this.player().el().parentNode,
                d = new videojs.PlaylistGrid(this.player(), Object.assign(b, a));
            return this.on("dispose", function() {
                d.dispose()
            }), a.container ? document.querySelector(a.container).appendChild(d.el()) : c.parentNode.insertBefore(d.el(), c.nextSibling), this.player().playlistGrid = d, d
        })
    }(),
    function() {
        "use strict";
        videojs.QualityMenu = videojs.MenuButton.extend({
            init: function(a, b) {
                this.quality_ = b.defaultQuality, this.sources_ = b.sources, videojs.MenuButton.call(this, a, b);
                var c = this;
                b.upscaleOnFullscreen && a.on("fullscreenchange", function() {
                    a.isFullscreen() && (c.sources("high") ? c.quality("high") : c.sources("medium") && c.quality("medium"))
                })
            }
        }), videojs.QualityMenu.prototype.className = "vjs-quality-control", videojs.QualityMenu.prototype.buttonText = "Video Quality", videojs.QualityMenu.prototype.items_ = [], videojs.QualityMenu.prototype.createItems = function() {
            var a = [],
                b = new videojs.QualityItem(this.player_, {
                    label: "Quality",
                    parent: this
                });
            b.onClick = function() {}, b.el_.style.textTransform = "none", b.el_.style.fontWeight = "bold", videojs.addClass(b.el_, "vjs-menu-title"), videojs.removeClass(b.el_, "vjs-menu-item"), a.push(b);
            var c, d, e, f = /(\d+?)p/i,
                g = /\d+?x(\d+)/i,
                h = {},
                i = {},
                j = Object.keys(this.options_.sources);
            if (j.length > 1)
                for (e = 0; e < j.length; e++) {
                    var k = f.exec(j[e]),
                        l = g.exec(j[e]);
                    k && k[1] && (h[parseInt(k[1])] = j[e]), l && l[1] && (i[parseInt(l[1])] = j[e]), c = Object.keys(h).sort().reverse(), d = Object.keys(i).sort().reverse()
                }
            var m = [].concat(c, d),
                n = Object.assign(h, i);
            for (e = 0; e < m.length; e++) n.hasOwnProperty(m[e]) && (b = new videojs.QualityItem(this.player_, {
                label: n[m[e]].toLowerCase().replace(/\b[a-z]/g, function(a) {
                    return a.toUpperCase()
                }),
                sources: this.options_.sources[n[m[e]]],
                parent: this
            }), b.on("qualityselect", videojs.bind(this, function(a) {
                this.quality(a.quality)
            })), a.push(b));
            return this.items_ = a, this.items_
        }, videojs.QualityMenu.prototype.quality_ = null, videojs.QualityMenu.prototype.quality = function(a) {
            return a && this.setQuality(a), this.quality_
        }, videojs.QualityMenu.prototype.setQuality = function(a) {
            if (a != this.quality()) {
                for (var b = 0; b < this.items.length; b++) this.items[b].selected(!1), this.items[b].options().label.toLowerCase() == a && this.items[b].selected(!0);
                this.quality_ = a;
                var c = this.player_,
                    d = c.currentTime();
                c.poster(), c.pause(), c.autoplay(!0);
                var e = this.sources(a);
                c.src(e.source || e), c.currentTime(d - .5)
            }
        }, videojs.QualityMenu.prototype.sources_ = {}, videojs.QualityMenu.prototype.sources = function(a) {
            return a ? this.sources_[a] : this.sources_
        }, videojs.QualityItem = videojs.MenuItem.extend({
            init: function(a, b) {
                b.selected = b.parent.quality() == b.label.toLowerCase(), vjs.MenuItem.call(this, a, b)
            }
        }), videojs.QualityItem.prototype.createEl = function(a, b) {
            var c = parseInt(this.options_.label) >= 720 ? '<span class="bv-hd"></span>' : "";
            return vjs.Button.prototype.createEl.call(this, "li", vjs.obj.merge({
                className: "vjs-menu-item",
                innerHTML: c + this.options_.label
            }, b))
        }, videojs.QualityItem.prototype.onClick = function() {
            this.trigger({
                type: "qualityselect",
                quality: this.options_.label.toLowerCase(),
                sources: this.options_.sources
            })
        }, videojs.plugin("qualityControl", function(a) {
            if (!a.sources) {
                for (var b = this.player().tag.getElementsByTagName("source"), c = {}, d = 0; d < b.length; d++) {
                    var e = b[d].getAttribute("data-quality");
                    e && (c[e] || (c[e] = []), void c[e].push({
                        src: b[d].getAttribute("src"),
                        type: b[d].getAttribute("type")
                    }))
                }
                this.player().src(c[a.defaultQuality].source || c[a.defaultQuality]), a.sources = c
            }
            var f = this.controlBar.getChild("qualityMenu");
            f && this.controlBar.removeChild(f);
            var g = this.controlBar.addChild("qualityMenu", a);
            this.controlBar.el().insertBefore(g.el(), this.controlBar.getChild("chaptersButton").el())
        })
    }(),
    function() {
        videojs.ResizeControl = videojs.MenuButton.extend({
            init: function(a, b) {
                videojs.MenuButton.call(this, a, b), this.player_.on("resize", videojs.bind(this, this.onResize))
            }
        }), videojs.ResizeControl.prototype.createEl = function() {
            var a = {
                className: "vjs-resize-button vjs-control vjs-menu-button bv-desktop",
                innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">Enlarge</span></div>',
                role: "button",
                "aria-live": "polite",
                tabIndex: 0
            };
            return videojs.Component.prototype.createEl(null, a)
        }, videojs.ResizeControl.prototype.onClick = videojs.FullscreenToggle.prototype.onClick, videojs.ResizeControl.prototype.createItems = function() {
            var a = [],
                b = this.options();
            return this.largeBtn = new videojs.LargerToggle(this.player_, b.bigSize), this.smallBtn = new videojs.SmallerToggle(this.player_, b.smallSize), a.push(this.largeBtn), a.push(this.smallBtn), a
        }, videojs.ResizeControl.prototype.unselectAll = function() {
            for (var a = this.children(), b = 0; b < a.length; b++) a[b].select(!1)
        }, videojs.ResizeControl.prototype.onResize = function() {
            videojs.removeClass(this.largeBtn.el(), "disabled"), videojs.removeClass(this.smallBtn.el(), "disabled"), this.player_.el().offsetHeight >= this.options_.bigSize.h ? videojs.addClass(this.largeBtn.el(), "disabled") : this.player_.el().offsetHeight <= this.options_.smallSize.h && videojs.addClass(this.smallBtn.el(), "disabled")
        }, videojs.LargerToggle = videojs.MenuItem.extend({
            init: function(a, b) {
                videojs.Button.call(this, a, b)
            }
        }), videojs.LargerToggle.prototype.createEl = function(a, b) {
            return vjs.Button.prototype.createEl.call(this, "li", vjs.obj.merge({
                className: "vjs-menu-item",
                innerHTML: '<i class="bv-resize-full"></i>'
            }, b))
        }, videojs.LargerToggle.prototype.onClick = function() {
            this.options_.h && this.options_.w && (this.player().el().style.height = this.options_.h + "px", this.player().el().style.width = this.options_.w + "px"), videojs.removeClass(this.player().el(), "vjs-small"), videojs.addClass(this.player().el(), "vjs-large"), this.player().one("transitionend", videojs.bind(this, function() {
                videojs.trigger(window, "resize"), this.player().trigger({
                    type: "resize"
                })
            }), !1)
        }, videojs.SmallerToggle = videojs.MenuItem.extend({
            init: function(a, b) {
                videojs.Button.call(this, a, b)
            }
        }), videojs.SmallerToggle.prototype.createEl = function(a, b) {
            return vjs.Button.prototype.createEl.call(this, "li", vjs.obj.merge({
                className: "vjs-menu-item",
                innerHTML: '<i class="bv-resize-small"></i>'
            }, b))
        }, videojs.SmallerToggle.prototype.onClick = function() {
            this.options_.h && this.options_.w && (this.player().el().style.height = this.options_.h + "px", this.player().el().style.width = this.options_.w + "px"), videojs.removeClass(this.player().el(), "vjs-large"), videojs.addClass(this.player().el(), "vjs-small"), this.player().one("transitionend", videojs.bind(this, function() {
                videojs.trigger(window, "resize"), this.player().trigger({
                    type: "resize"
                })
            }), !1)
        };
        var a = function(a) {
            var b = this.el();
            this.one("playerInit", function() {
                a = a || {};
                var c = {};
                void(a.h > b.offsetHeight ? (c.smallSize = {
                    h: b.offsetHeight,
                    w: b.offsetWidth
                }, c.bigSize = a, videojs.addClass(b, "vjs-small")) : (c.bigSize = {
                    h: b.offsetHeight,
                    w: b.offsetWidth
                }, c.smallSize = a, videojs.addClass(b, "vjs-large")));
                var d = this.controlBar.addChild("resizeControl", c),
                    e = videojs.findControlLocation(this, "vjs-fullscreen-control");
                e = -1 == e ? 0 : e, this.controlBar.el().insertBefore(d.el(), this.controlBar.el().childNodes[e]), this.controlBar.el().className += " vjs-does-resize"
            })
        };
        videojs.plugin("resize", a), videojs.plugin("bvResize", function(b) {
            videojs.bind(this, a)(b)
        })
    }(),
    function() {
        var a = function(a) {
            this.on("ended", function() {
                this.posterImage.show()
            })
        };
        videojs.plugin("showPosterAtEnd", a), videojs.plugin("bvShowPosterAtEnd", function(b) {
            videojs.bind(this, a)(b)
        })
    }(),
    function() {
        var a = 0,
            b = function() {
                this.playlist && this.playlist.el_ ? this.playlist.onPlaylistLoad(videojs.bind(this, function(a) {
                    this.playlist.regressPlaylistButton && (this.playlist.regressPlaylistButton.on("click", function(a) {
                        i("Profile - Media - Controls - Left")
                    }), this.playlist.advancePlaylistButton.on("click", function(a) {
                        i("Profile - Media - Controls - Right")
                    }));
                    for (var b = a, c = 0; c < b.length; c++) b[c].on("click", function() {
                        var a = b[c].options().type;
                        return function() {
                            switch (a.substr(0, a.indexOf("/"))) {
                                case "image":
                                    i("Profile - Media - Controls - Photo Thumb");
                                    break;
                                case "video":
                                    i("Profile - Media - Controls - Video Thumb");
                                    break;
                                case "vtour":
                                    i("Profile - Media - Controls - Tour Thumb")
                            }
                        }
                    }())
                })) : (a++, 10 > a && setTimeout(videojs.bind(this, b), 10))
            },
            c = 0,
            d = [],
            e = !1,
            f = function() {
                cacheTimeout = setTimeout(g, 100)
            },
            g = function() {
                "undefined" == typeof window.s || "undefined" == typeof window.s.tl ? (c++, 100 > c ? f() : (e = !0, window.s = {
                    tl: function() {}
                })) : d.length && setTimeout(h, 250)
            },
            h = function() {
                for (; void 0 !== (cacheItem = d.pop());) i(cacheItem)
            },
            i = function(a) {
                if (!e) try {
                    window.s.forcedLinkTrackingTimeout = 500, window.s.tl(!0, "o", a)
                } catch (b) {
                    d.push(a), f()
                }
            };
        videojs.plugin("forrentSiteCatalyst", function(a) {
            var c = "/" == document.location.pathname || "http://www.forrent.com/" == document.location.href ? "Home" : "Profile";
            this.bigPlayButton.on("click", function(a) {
                i(c + " - Media - Controls - Screen Play")
            }), this.controlBar.playToggle.on("click", videojs.bind(this, function(a) {
                var b = this.controlBar.playToggle.el().className;
                i(b.indexOf("vjs-paused") >= 0 ? c + " - Media - Controls - Play" : c + " - Media - Controls - Pause")
            })), this.controlBar.progressControl.on("click", function(a) {
                i(c + " - Media - Controls - Timeline")
            }), this.controlBar.fullscreenToggle.on("click", function(a) {
                i(c + " - Media - Controls - Size Toggle")
            }), this.controlBar.volumeControl.on("click", function(a) {
                i(c + " - Media - Controls - Volume")
            }), setTimeout(videojs.bind(this, b), 1)
        })
    }(),
    function() {
        var a = !1,
            b = !1,
            c = !1,
            d = !1,
            e = !1,
            f = "bv-";
        videojs.SocialItem = videojs.MenuItem.extend({
            init: function(a, b) {
                videojs.MenuItem.call(this, a, b), "embed" == b.kind && (this.embedEl_ = new videojs.EmbedWindow(this.player(), {}), this.player().el().appendChild(this.embedEl_.el()))
            }
        }), videojs.SocialItem.prototype.createEl = function(a, b) {
            return vjs.Button.prototype.createEl.call(this, "li", vjs.obj.merge({
                className: "vjs-menu-item",
                innerHTML: '<i class="' + f + this.options_.iconClass + '"></i>'
            }, b))
        }, videojs.SocialItem.prototype.onClick = function(f) {
            var g, h, i = function(a) {
                    var b = [];
                    for (var c in a) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
                    return b.join("&")
                },
                j = {
                    url: d || document.location.href,
                    title: document.title,
                    description: "Check out this cool video at " + document.location.href,
                    pubid: a || null,
                    email_template: c || null,
                    ct: b || null
                },
                k = this.options().kind,
                l = this.player().currentSrc();
            switch (k) {
                case "embed":
                    theme = /\s?vjs-(.*?)-skin\s?/gi.exec(this.player().el().className)[1];
                    var m = this.player().options().plugins,
                        n = JSON.stringify(m),
                        o = ['<script src="//player.bettervideo.com/player/video.dev.js"></script>', '<script src="//player.bettervideo.com/plugins/bvPlugins.js"></script>', '<video id="bvPlayer_1" class="video-js vjs-' + theme + '-skin" controls preload="auto" width="640" height="360" poster="' + this.player().poster() + '" data-setup=\'{"plugins":' + n + "}'>", '	<source src="' + l + '" type="video/mp4" />', "	<p>Video Playback Not Supported</p>", "</video>"].join("\n");
                    this.embedEl_.setEmbedCode(o), this.embedEl_.show(), [].slice.call(this.embedEl_.el().getElementsByTagName("textarea"))[0].select();
                    break;
                case "link":
                    e && window.open(e, "Website");
                    break;
                case "more":
                    g = g || 550, h = h || 450, window.open("http://api.addthis.com/oexchange/0.8/offer??" + i(j), "AddThis", "height=" + h + ",width=" + g + ",modal=yes,alwaysRaised=yes");
                    break;
                case "facebook":
                    g = g || 550, h = h || 270;
                case "twitter":
                    g = g || 550, h = h || 260, j.text = j.description.replace(/\shttp\:\/\/.*$/gi, "");
                case "email":
                    g = g || 550, h = h || 700;
                default:
                    g = g || 550, h = h || 450, window.open("http://api.addthis.com/oexchange/0.8/forward/" + k + "/offer?" + i(j), "AddThis", "height=" + h + ",width=" + g + ",modal=yes,alwaysRaised=yes")
            }
            this.player().trigger({
                type: "socialclick",
                kind: k
            })
        }, videojs.SocialButton = videojs.MenuButton.extend({
            init: function(a, b) {
                videojs.MenuButton.call(this, a, b), this.items.length > 4 && (this.menu.contentEl().style.width = "15em", this.menu.contentEl().style.left = "-7.5em"), this.on("click", this.onClick)
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
            return "vjs-social-button vjs-control " + f + "share " + vjs.MenuButton.prototype.buildCSSClass.call(this)
        }, videojs.SocialButton.prototype.onClick = function() {}, videojs.SocialButton.prototype.createItems = function() {
            var a = [],
                b = this.options();
            for (var c in this.available) this.available.hasOwnProperty(c) && b[c] && a.push(new videojs.SocialItem(this.player_, this.available[c]));
            return a
        }, videojs.EmbedWindow = videojs.Component.extend({
            init: function(a, b) {
                videojs.Component.call(this, a, b), this.hide(), this.exitEl_ = new videojs.ExitButton(a, {}), this.exitEl_.on("click", videojs.bind(this, function() {
                    this.hide()
                })), this.el_.appendChild(this.exitEl_.el()), this.textAreaEl_ = document.createElement("textarea"), this.textAreaEl_.style.fontSize = "10px", b.embedCode && this.setEmbedCode(b.embedCode), this.el_.appendChild(this.textAreaEl_)
            },
            setEmbedCode: function(a) {
                this.textAreaEl_.value = a || ""
            }
        }), videojs.EmbedWindow.prototype.createEl = function(a) {
            return videojs.Component.prototype.createEl("div", {
                className: "vjs-embed-window ",
                innerHTML: '<h4 class="vjs-embed-title"><i class="' + f + 'code"></i>  Embed Code</h4>',
                "aria-live": "polite",
                tabIndex: 0
            })
        };
        var g, h = function(h) {
            h = h || {}, h.pubid && (a = h.pubid), h.ct && (b = h.ct), h.email_template && (c = h.email_template), h.share_url && (d = h.share_url), h.iconPrefix && (f = h.iconPrefix), h.website_url && "http://" != h.website_url && "" !== h.website_url ? e = h.website_url : h.website_url && delete h.website_url, g = this.controlBar.addChild("socialButton", h)
        };
        videojs.plugin("socialMenu", h), videojs.plugin("bvSocial", function(a) {
            videojs.bind(this, h)(a)
        })
    }(),
    function() {
        "use strict";
        videojs.ShareButton = videojs.Button.extend({
            init: function(a, b) {
                videojs.Button.call(this, a, b)
            }
        }), videojs.ShareButton.prototype.buttonText = "Share Video", videojs.ShareButton.prototype.options_ = {}, videojs.ShareButton.prototype.buildCSSClass = function() {
            return "vjs-share-button " + videojs.Button.prototype.buildCSSClass.call(this)
        }, videojs.ShareButton.prototype.onClick = function(a) {
            a.stopImmediatePropagation(), this.overlay_ || (this.overlay_ = new videojs.ShareContainer(this.player_, this.options_), this.closeEl_ = new videojs.ExitButton(this.player_, {}), this.closeEl_.on("click", videojs.bind(this, this.overlayClose)), this.overlay_.el().appendChild(this.closeEl_.el()), videojs.one(window, "click", videojs.bind(this, this.overlayClose)), this.player().one("playlistload", videojs.bind(this, this.overlayClose)), this.player_.addChild(this.overlay_), setTimeout(videojs.bind(this.overlay_, this.overlay_.show), 1), this.player_.pause())
        }, videojs.ShareButton.prototype.overlayClose = function(a) {
            a.stopImmediatePropagation(), this.overlay_ && (this.player_.removeChild(this.overlay_), this.overlay_.dispose(), delete this.overlay_)
        }, videojs.ShareButton.prototype.setUrl = function(b) {
            a = b
        }, videojs.ShareButton.prototype.setTitle = function(a) {
            b = a
        }, videojs.ShareButton.prototype.setDescription = function(a) {
            c = a
        }, videojs.ShareContainer = videojs.BlurOverlay.extend({
            init: function(a, b) {
                videojs.BlurOverlay.call(this, a, b), videojs.on(window, "resize", videojs.bind(this, this.onResize)), this.onResize()
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
            return "vjs-sharing-overlay " + vjs.BlurOverlay.prototype.buildCSSClass.call(this)
        }, videojs.ShareContainer.prototype.onResize = function() {
            this.player().el().offsetWidth < 350 ? this.addClass("vjs-small") : this.removeClass("vjs-small")
        }, videojs.OverlaySocialButton = videojs.Button.extend({
            init: function(d, e) {
                videojs.Button.call(this, d, e), this.options_.send.url = a, this.options_.send.description = c, this.options_.send.title = b
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
        }, videojs.OverlaySocialButton.prototype.createEl = function(a, b) {
            var c;
            return b = vjs.obj.merge({
                className: this.buildCSSClass(),
                role: "button",
                "aria-live": "polite",
                tabIndex: 0
            }, b), c = vjs.Component.prototype.createEl.call(this, "div", b), b.innerHTML || (this.contentEl_ = vjs.createEl("div", {
                className: "vjs-control-content"
            }), this.controlText_ = vjs.createEl("span", {
                className: "vjs-control-text",
                innerHTML: this.options_.text || "Need Text"
            }), this.contentEl_.appendChild(this.controlText_), c.appendChild(this.contentEl_)), c
        }, videojs.OverlaySocialButton.prototype.buildCSSClass = function() {
            return "vjs-share-icon bv-" + (this.options_.icon || this.options_.text.toLowerCase())
        }, videojs.OverlaySocialButton.prototype.serialize = function(a) {
            var b = [];
            for (var c in a) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
            return b.join("&")
        }, videojs.OverlaySocialButton.prototype.onClick = function(a, b) {
            b = b || this.options_.send, window.open("http://api.addthis.com/oexchange/0.8/forward/" + (this.options_.addThisType || this.options_.text.toLowerCase()) + "/offer?" + this.serialize(b), "AddThis", "height=" + this.options_.windowHeight + ",width=" + this.options_.windowWidth + ",modal=yes,alwaysRaised=yes"), this.player().trigger({
                type: "socialclick",
                kind: this.options_.text
            })
        }, videojs.TwitterShare = videojs.OverlaySocialButton.extend({
            init: function(a, b) {
                videojs.OverlaySocialButton.call(this, a, videojs.obj.merge({
                    text: "Twitter",
                    windowWidth: 550,
                    windowHeight: 440
                }, b))
            }
        }), videojs.TwitterShare.prototype.onClick = function(a) {
            var b = videojs.obj.merge({}, this.options_.send);
            b.title = b.title + " \n" + b.description, delete b.description, videojs.OverlaySocialButton.prototype.onClick.call(this, a, b)
        }, videojs.FacebookShare = videojs.OverlaySocialButton.extend({
            init: function(a, b) {
                videojs.OverlaySocialButton.call(this, a, videojs.obj.merge({
                    text: "Facebook",
                    windowWidth: 550,
                    windowHeight: 270
                }, b))
            }
        }), videojs.FacebookShare.prototype.onClick = function(a) {
            var b = videojs.obj.merge({}, this.options_.send);
            delete b.title, delete b.description, videojs.OverlaySocialButton.prototype.onClick.call(this, a, b)
        }, videojs.PinterestShare = videojs.OverlaySocialButton.extend({
            init: function(a, b) {
                videojs.OverlaySocialButton.call(this, a, videojs.obj.merge({
                    text: "Pinterest"
                }, b))
            }
        }), videojs.GooglePlusShare = videojs.OverlaySocialButton.extend({
            init: function(a, b) {
                videojs.OverlaySocialButton.call(this, a, videojs.obj.merge({
                    icon: "googleplus",
                    text: "Google+",
                    addThisType: "google_plusone_share"
                }, b))
            }
        }), videojs.LinkedInShare = videojs.OverlaySocialButton.extend({
            init: function(a, b) {
                videojs.OverlaySocialButton.call(this, a, videojs.obj.merge({
                    text: "LinkedIn"
                }, b))
            }
        }), videojs.EmailShare = videojs.OverlaySocialButton.extend({
            init: function(a, b) {
                videojs.OverlaySocialButton.call(this, a, videojs.obj.merge({
                    text: "Email"
                }, b))
            }
        }), videojs.EmbedShare = videojs.OverlaySocialButton.extend({
            init: function(a, b) {
                videojs.OverlaySocialButton.call(this, a, videojs.obj.merge({
                    icon: "code",
                    text: "Embed"
                }, b))
            }
        }), videojs.EmbedShare.prototype.onClick = function(a) {
            this.overlay_ = new videojs.EmbedContainer(this.player_, this.options_), setTimeout(videojs.bind(this, function() {
                videojs.on(this.overlay_.el_, "click", function(a) {
                    a.stopPropagation()
                }), videojs.one(window, "click", videojs.bind(this, this.overlayClose)), this.player().one("playlistload", videojs.bind(this, this.overlayClose))
            }), 1), this.player_.addChild(this.overlay_), setTimeout(videojs.bind(this.overlay_, this.overlay_.show), 1), this.player().trigger({
                type: "socialclick",
                kind: "Embed"
            }), this.player_.pause()
        }, videojs.EmbedShare.prototype.overlayClose = function(a) {
            this.player_.removeChild(this.overlay_), this.overlay_.dispose(), delete this.overlay_
        }, videojs.EmbedContainer = videojs.BlurOverlay.extend({
            init: function(a, b) {
                void videojs.BlurOverlay.call(this, a, b)
            }
        }), videojs.EmbedContainer.prototype.options_ = {
            children: {}
        }, videojs.EmbedContainer.prototype.createEl = function() {
            var a = videojs.BlurOverlay.prototype.createEl.apply(this, arguments),
                b = "";
            return this.closeEl_ = new videojs.ExitButton(this.player_, {}), this.closeEl_.on("click", videojs.bind(this, function() {
                this.dispose()
            })), this.formEl_ = videojs.createEl("div", {
                className: "vjs-embed-code"
            }), b = '<h3>Embed Code Options</h3><div class="vjs-embed-form-el">	<label>Maximum Width:</label> <input type="text" class="vjs-embed-width" name="vjs-embed-width" placeholder="auto" /></div>', this.player_.options().plugins.playlist && "object" === (typeof this.player_.playlist).toLowerCase() && this.player_.playlist.items().length && (b += '	<div class="vjs-embed-form-el">		<label>Playlist Orientation:</label> <label class="radio"><input type="radio" class="vjs-embed-orientation-vertical" name="vjs-embed-orientation" value="vertical"> Vertical</label> <label class="radio"><input type="radio" class="vjs-embed-orientation" name="vjs-embed-orientation" value="horizontal"> Horizontal</label>	</div>'), this.submitEl_ = videojs.createEl("button", {
                innerHTML: "Get Embed Code"
            }), this.formEl_.innerHTML = b, this.formEl_.appendChild(this.submitEl_), this.formEl_.appendChild(this.closeEl_.el()), this.contentEl_.appendChild(this.formEl_), videojs.on(this.submitEl_, "click", videojs.bind(this, this.getEmbedCode)), a
        }, videojs.EmbedContainer.prototype.getEmbedCodeOptions = function() {
            var a = this.formEl_.querySelectorAll("input.vjs-embed-width")[0].value,
                b = {
                    width: a
                };
            if (this.player_.options_.plugins.playlist && "object" === (typeof this.player_.playlist).toLowerCase() && this.player_.playlist.items().length) {
                var c = this.formEl_.querySelectorAll("input.vjs-embed-orientation-vertical")[0],
                    d = c.checked ? "vertical" : "horizontal";
                b.vertical = "vertical" === d
            }
            return b
        }, videojs.EmbedContainer.prototype.getEmbedCode = function() {
            var a = this.getEmbedCodeOptions();
            this.player_.EmbedCode(a, videojs.bind(this, function(a) {
                this.formEl_.innerHTML = '<textarea style="height: 135px; width: 100%;">' + a + "</textarea>", this.formEl_.appendChild(this.closeEl_.el())
            }))
        };
        var a = document.location.href,
            b = document.title,
            c = "Check out this video at";
        videojs.plugin("socialOverlay", function(d) {
            var e, f = d.onScreen || !1;
            d.url && (a = d.url), d.title && (b = d.title), d.description && (c = d.description), e = f ? this.addChild("shareButton") : this.controlBar.addChild("shareButton"), this.socialOverlay = e
        })
    }();
//# sourceMappingURL=bvPlugins.map