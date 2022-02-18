(self.AudioEyeWebpackJsonp = self.AudioEyeWebpackJsonp || []).push([
    [777], {
        7063: function(e, t, n) {
            "use strict";
            var i = n(5671),
                o = n(3144),
                a = n(2123),
                s = n(7668),
                r = n(3022),
                u = function() {
                    function e(t) {
                        (0, i.Z)(this, e), this.cookie = "", this.vt = t || new a.default, this.cookieObj = JSON.parse(this._getRawSettings()) || {}, this._setDefaultSettings()
                    }
                    return (0, o.Z)(e, [{
                        key: "applySettings",
                        value: function() {
                            for (var e in this.cookieObj) try {
                                this["_".concat(e)](this.cookieObj[e])
                            } catch (t) {
                                console.log("No setting ".concat(e, " available!"))
                            }
                        }
                    }, {
                        key: "getSettings",
                        value: function() {
                            return this.cookieObj
                        }
                    }, {
                        key: "getSettingValue",
                        value: function(e) {
                            return this.cookieObj[e]
                        }
                    }, {
                        key: "changeSetting",
                        value: function(e, t) {
                            try {
                                return this._setCookie(e, t), this["_".concat(e)](t)
                            } catch (t) {
                                console.log("No setting ".concat(e, " available!"))
                            }
                        }
                    }, {
                        key: "_getRawSettings",
                        value: function() {
                            return this.cookie = r.Z.get("userSettings"), this.cookie
                        }
                    }, {
                        key: "_setCookie",
                        value: function(e, t) {
                            this.cookieObj[e] = t, r.Z.set("userSettings", JSON.stringify(this.cookieObj), 365, "days")
                        }
                    }, {
                        key: "_setDefaultSettings",
                        value: function() {
                            var e = {
                                enableShortcutListeners: !0
                            };
                            for (var t in e) void 0 === this.cookieObj[t] && (this.cookieObj[t] = e[t])
                        }
                    }, {
                        key: "_enableShortcutListeners",
                        value: function(e) {
                            e ? (this.vt.bindKeycommands(), s.Z.removeAll("launcher"), s.Z.removeAll("launcher-hover"), AudioEye.launcher.addShortcuts("launcher"), AudioEye.launcher.addShortcuts("launch-hover"), AudioEye.toolbar.bindKeyCommands()) : (this.vt.unbindKeycommands(), s.Z.removeAll("launcher"), s.Z.removeAll("launcher-hover"), AudioEye.toolbar.unbindKeyCommands())
                        }
                    }]), e
                }();
            t.Z = u
        },
        5253: function(e) {
            e.exports = '<aside id="ae_launcher" style="display: none" class="ae-module aetipsytip">\n  <button aria-label="Explore your accessibility options">\n    <div style="display: none" class="ae-left">\n      <span>Explore your accessibility options</span>\n    </div>\n\n    <div class="ae-right">\n      <span class="icomoon-wrapper">\n        <div>\n          <span class="icomoon-cta ae-icon-launcher-universalaccess ae-initial-cta">\n            <span class="icomoon-cta path1 a11y-icon-figure-and-border"></span>\n            <span class="icomoon-cta path2 a11y-icon-background"></span>\n          </span>\n        </div>\n      </span>\n    </div>\n  </button>\n</aside>\n'
        },
        3204: function(e, t) {
            "use strict";
            var n = {
                init: function() {
                    n.builderIsInstalled() || this._noop()
                },
                builderIsInstalled: function() {
                    return !(!window.AudioEye || !AudioEye._builderExtensionAvailable)
                },
                remsFirstTimeStart: function() {
                    window.dispatchEvent(new CustomEvent("RemediationsStart"))
                },
                observeSingleRem: function() {
                    window.dispatchEvent(new CustomEvent("watch-for-changes", {
                        detail: {
                            observing: !0
                        }
                    }))
                },
                finishObserveSingleRem: function(e, t, n) {
                    window.dispatchEvent(new CustomEvent("ae-remediation-end", {
                        detail: {
                            name: e,
                            fN: t,
                            type: n
                        }
                    }))
                },
                sendLifecycleEvent: function(e) {
                    window.dispatchEvent(new CustomEvent("AudioEyeLifeCycleEvent", {
                        detail: {
                            lifecycleevent: !0,
                            lifecyclemessage: e.message,
                            eventTime: e.eventTime || (new Date).getTime()
                        }
                    }))
                },
                _noop: function() {
                    Object.getOwnPropertyNames(n).forEach((function(e) {
                        n[e] = function() {}
                    }))
                }
            };
            t.Z = n
        },
        3116: function(e, t, n) {
            "use strict";
            var i = n(2399),
                o = n(7422),
                a = n(4918),
                s = AudioEye.productConfig,
                r = new a.Z("OptIn"),
                u = !(s.launcher && s.launcher["opt-in"]),
                c = {
                    _zones: {
                        launcher: {
                            type: "module",
                            isOptedIn: u
                        },
                        toolbar: {
                            type: "module",
                            isOptedIn: u
                        },
                        helpdesk: {
                            type: "module",
                            isOptedIn: u
                        },
                        "site-menu": {
                            type: "module",
                            isOptedIn: u
                        },
                        rotor: {
                            type: "module",
                            isOptedIn: u
                        },
                        BASE: {
                            type: "group",
                            members: ["helpdesk", "site-menu", "rotor"]
                        },
                        CTA: {
                            type: "group",
                            members: ["launcher", "toolbar"]
                        }
                    },
                    _cookies: o.Z,
                    init: function() {
                        this._restore()
                    },
                    opt: function(e, t) {
                        var n, o = this;
                        this._ensureZone(t), n = this._zones[t], "toggle" === e && (e = this.state(t) ? "out" : "in"), "group" === n.type ? n.members.forEach((function(t) {
                            o._optSingle(e, t)
                        })) : o._optSingle(e, t), i.Z.dispatchEvent("GroupOpt", {
                            direction: e,
                            group: t
                        })
                    },
                    optFromIframe: function(e, t, n) {
                        c.opt(e, t), c.stateIframeSync(t, n)
                    },
                    state: function(e) {
                        var t, n = this;
                        if (this._ensureZone(e)) return "group" === (t = this._zones[e]).type ? t.members.every((function(e) {
                            return n._zones[e].isOptedIn
                        })) : t.isOptedIn
                    },
                    stateIframeSync: function(e, t) {
                        var n = c.state(e);
                        void 0 !== n ? t.source.postMessage({
                            object: "AudioEyeStatementSync",
                            isOptedIn: n
                        }, t.origin) : r.error('Failed to find state of zone "' + e + '"')
                    },
                    _ensureZone: function(e) {
                        return !!this._zones[e] || (r.error('Invalid zone "' + e + '" not supported'), !1)
                    },
                    _optSingle: function(e, t) {
                        var n, o;
                        if (o = "in" === e, "module" !== (n = this._zones[t]).type) return r.error('module "' + t + '" is of unsupported type "' + n.type), !1;
                        n.isOptedIn = o, this._cookies.set("aeOptIn", JSON.stringify(this._allOptIns()), 9125), i.Z.dispatchEvent("ModuleOpt", {
                            direction: e,
                            module: t
                        })
                    },
                    _restore: function() {
                        var e, t = this,
                            n = this._cookies.get("aeOptIn");
                        if (!n) return !1;
                        try {
                            e = JSON.parse(n)
                        } catch (e) {
                            return r.error("JSON parse failed. Invalid JSON in aeOptIn cookie"), !1
                        }
                        if (!Array.isArray(e)) return r.error("Invalid opt in list retrieved from cookie"), !1;
                        Object.keys(t._zones).forEach((function(n) {
                            "module" === t._zones[n].type && t.opt(e.indexOf(n) > -1 ? "in" : "out", n)
                        }))
                    },
                    _allOptIns: function() {
                        var e = this;
                        return Object.keys(this._zones).filter((function(t) {
                            var n = e._zones[t];
                            return "module" === n.type && n.isOptedIn
                        }))
                    }
                };
            t.Z = c
        },
        2218: function(e, t) {
            "use strict";
            var n = {
                loadAggregate: function() {
                    if (!1 === n.isAggregateLoaded()) {
                        var e = document.createElement("link"),
                            t = document.getElementById("ae_app");
                        e.rel = "stylesheet", e.type = "text/css", e.id = "ae_aggregate_css", e.class = "ae-style", e.href = AudioEye.client_url + "/css/aggregate.css?files=default|core&cb=" + AudioEye.cb, t.insertBefore(e, t.hasChildNodes() ? t.childNodes[0] : null)
                    }
                },
                isAggregateLoaded: function() {
                    var e = document.getElementById("ae_aggregate_css");
                    return void 0 !== e && null != e
                }
            };
            t.Z = n
        },
        371: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n(8523),
                o = n(7668),
                a = n(9402),
                s = n(5253),
                r = n.n(s),
                u = n(4918),
                c = n(3022),
                l = n(3116),
                d = n(3739),
                h = n(3204),
                p = n(2218),
                f = n(7063);
            const g = AudioEye.productConfig;

            function y(e) {
                const t = this,
                    s = window === window.top ? "parent" : "iframe",
                    _ = new u.Z(`launcher@${s}`),
                    m = new f.Z;

                function v() {
                    window.ae_jQuery("#ae_launcher").addClass("ae-launcher-hover")
                }

                function w() {
                    window.ae_jQuery("#ae_launcher").removeClass("ae-launcher-hover"), o.Z.removeAll("launcher-hover")
                }

                function b() {
                    return !(!AudioEye.toolbar || !AudioEye.toolbar.active) || (AudioEye.activate(), i.Z.logStat("User", "AE Product Activated", '"1" key pressed'), !1)
                }
                this.moduleName = "launcher", this._options = e, this._Audio = window.Audio, this.open = function() {
                    if (this.initialized || window.ae_jQuery("#ae_app").register("GroupOpt", (e => {
                            "CTA" === e.detail.group && (c.Z.set("aeatstartmessage", "", 0), t.buildAtMessages())
                        })), this.initialized = !0, this.buildAtMessages(), this.observeLangChange(), e["opt-in"] && !l.Z.state("launcher")) return _.info("Cannot open CTA (launcher). User has not opted in."), !1;
                    y.prototype.open.call(this), this.addShortcuts("launcher")
                }, this.observeLangChange = function() {
                    const e = this;
                    window.ae_jQuery("#ae_app").off("LangChange.launcherAlwaysOn").register("LangChange.launcherAlwaysOn", (t => {
                        const n = t.detail.newLang;
                        e.refreshLanguage(n)
                    }))
                }, this.refreshLanguage = function(e) {
                    document.cookie = "aeatstartmessage=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;", y.prototype.refreshLanguage.apply(this, [e])
                }, this.buildAtMessages = function() {
                    if (window != window.top) return;
                    const e = i.Z.getAvailableModules();
                    let n;
                    const o = window.ae_jQuery("<div />");
                    if (-1 === e.indexOf("toolbar")) return !1;
                    if (c.Z.get("aeatstartmessage")) return !1;
                    c.Z.set("aeatstartmessage", "true"), window.ae_jQuery("#ae_enabled_site").html("");
                    let a = window.ae_jQuery("#ae_enabled_site");
                    return a.length || (a = window.ae_jQuery("<div />"), a.attr({
                        id: "ae_enabled_site",
                        class: "ae-blurb-noaudio",
                        role: "status",
                        "aria-live": "assertive",
                        style: "display: none"
                    })), window.ae_jQuery(document.body).prepend(a), ["launcher", "helpdesk", "certification", "lite-reader"].forEach((i => {
                        -1 !== e.indexOf(i) && (n = t.getCommonAttr(i, "at-message"), n && o.append(`<p data-moduleName="${i}">${n}</p>`))
                    })), window.ae_jQuery("#ae_enabled_site").prepend(o), !0
                }, this.getCommonAttr = function(e, t) {
                    let n;
                    return !g.launcher["opt-in"] || g.launcher["opt-in"] && this.userHasOptedIn() ? g[e] && g[e]["at-message"] ? n = g[e]["at-message"] : g.launcher && g.launcher["at-messages"] && g.launcher["at-messages"][e] && (n = g.launcher["at-messages"][e]) : g[e]["pre-opt-in-messaging"] && g[e]["pre-opt-in-messaging"][t] && (n = g[e]["pre-opt-in-messaging"][t]), !(!n && g.launcher["opt-in"]) && (n ? n[AudioEye.lang] : (_.error(`Could not access ${t} in ${e}`), !1))
                }, this.userHasOptedIn = function() {
                    return l.Z.state("CTA")
                }, this.close = function() {
                    y.prototype.close.call(this), w(), window.ae_jQuery.unregister("launcher"), o.Z.removeAll("launcher")
                }, this.addInterface = function() {
                    if (e["opt-in"] && !l.Z.state("launcher")) return _.info("Cannot open CTA (launcher). User has not opted in."), !1;
                    if (AudioEye.toolbar && AudioEye.toolbar.active) return !1;
                    this.removeInterface(), this.ui = i.Z.prepUIGeneric(r(), this._options), window.ae_jQuery("#ae_app #ae_aggregate_css").length > 0 && -1 !== window.ae_jQuery("#ae_app #ae_aggregate_css").attr("href").indexOf("launcher") && this.ui.find("#launcher_css").remove(), p.Z.loadAggregate(), this.ui.addClass(this._getPresetPositionClass(this._options.position));
                    const n = this._options["cta-color"];
                    i.Z.validHex(n) && (this.ui.find(".a11y-icon-background").css("color", n), i.Z.isLowWhiteContrast(n) && this.ui.find(".a11y-icon-figure-and-border").css("color", "#000")), this.ui.find(".ae-left > span").text(this._options["tooltip-title"][AudioEye.lang]), "customize your experience with audioeye tools." === i.Z.localize(this._options["tooltip-title"]).toLowerCase() && this.ui.find(".ae-left").removeClass("ae-left").addClass("ae-left-wider"), window.ae_jQuery("#ae_placeholder_launcher").length && (this.placeholder = window.ae_jQuery("#ae_placeholder_launcher").replaceWith(this.ui));
                    const o = i.Z.getActiveCTAs();
                    if (window.ae_jQuery("#ae_launcher").addClass("ae-active"), o.length < 1) return _.debug("AudioEye: No active toolbar modules. Hiding toolbar and launcher."), void window.ae_jQuery("#ae_launcher").removeClass("ae-active");
                    window.ae_jQuery("#ae_launcher").clickOrEnter("launcher", ((e, n) => {
                        t._launch(e, n)
                    })), window.ae_jQuery(".icomoon-wrapper").register("mouseenter.launcher focusin.launcher", v).register("mouseleave.launcher focusout.launcher", w), window.ae_jQuery("#ae_launcher").on("focus", (function() {
                        window.ae_jQuery(this).addClass("ae-launcher-hover")
                    })), this.addShortcuts("launcher"), h.Z.sendLifecycleEvent({
                        message: "CTA Ready"
                    })
                }, this.removeInterface = function() {
                    window.ae_jQuery("#ae_launcher").replaceWith(this.placeholder)
                }, window.ae_jQuery("#ae_launcher").on("focus", (function() {
                    window.ae_jQuery(this).addClass("ae-launcher-hover")
                })), this._getPresetPositionClass = function(e) {
                    return e && -1 !== this._positionPresets.indexOf(e) ? `ae-cta-position-preset-${e}` : (_.error(`Invalid CTA position configuration "${e}"`), "ae-cta-position-preset-right-lower")
                }, this._launch = function(e, t) {
                    AudioEye.activate(), i.Z.logStat("User", "AE Product Activated", t), d.Z.isPreviewMode() && this._showPreviewMessage()
                }, this._showPreviewMessage = function() {
                    n.e(802).then(n.bind(n, 2783)).then((e => {
                        e.default.show(window.ae_jQuery("#ae_launcher"), i.Z.localize(t._options["preview-mode-message"]), [{
                            buttonText: i.Z.localize(t._options["preview-mode-modal-close"]),
                            willClose: !0
                        }], i.Z.localize(t._options["preview-mode-modal-title"]))
                    }))
                }, this.setCTAPosition = function(e) {
                    this._options.position = e
                }, window.ae_jQuery.extend(y.prototype, a.Z), this._options.testmode && (window.testScope.launcher = {
                    add_focus: v,
                    key_launch: b,
                    shortcut: o.Z,
                    global_options: g
                }), this.addShortcuts = function(e) {
                    const t = JSON.parse(m._getRawSettings());
                    if (!m || !t || t.enableShortcutListeners) switch (e) {
                        case "launch-hover":
                            o.Z.add("esc", "launcher-hover", (() => {
                                w()
                            }), {
                                type: "keydown",
                                disable_in_input: !0,
                                target: document
                            });
                            break;
                        case "launcher":
                            o.Z.add("shift+=", "launcher", b, {
                                type: "keydown",
                                disable_in_input: !0,
                                propagate: !0,
                                target: document
                            })
                    }
                }
            }
            y.prototype._positionPresets = ["right-lower", "right-mid-lower", "right-middle", "right-mid-upper", "right-upper", "left-lower"], t.default = y
        },
        5671: function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, {
                Z: function() {
                    return i
                }
            })
        },
        3144: function(e, t, n) {
            "use strict";

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function o(e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e
            }
            n.d(t, {
                Z: function() {
                    return o
                }
            })
        }
    }
]);