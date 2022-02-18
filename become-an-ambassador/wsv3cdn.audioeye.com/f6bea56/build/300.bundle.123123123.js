"use strict";
(self.AudioEyeWebpackJsonp = self.AudioEyeWebpackJsonp || []).push([
    [300, 258], {
        9402: function(e, t, a) {
            var n = a(2399),
                o = a(4918),
                s = a(3739),
                i = AudioEye.productConfig,
                r = window == window.top ? "parent" : "iframe",
                c = new o.Z("module-core@" + r),
                l = {
                    inIframe: n.Z.inIframe(),
                    isPanel: !1,
                    open: function() {
                        return !this.active && (this.active = !0, this.isInterfaceAllowed() && this.initUIContent(), -1 !== ["reader", "player", "voice"].indexOf(this.moduleName) && window.ae_jQuery("#ae_app").off("DeviceChange." + this.moduleName).on("DeviceChange." + this.moduleName, (function(e) {
                            n.Z.setTooltipEvents(e.detail.device, window.ae_jQuery('#ae_module_controlbar [class*="aetipsytip"]'))
                        })), this.observeLangChange(), !0)
                    },
                    close: function() {
                        if (!this.active) return !1;
                        this.active = !1, window.ae_jQuery.unregister(this.moduleName), this.removeInterface()
                    },
                    okToCloseModule: function() {
                        return !0
                    },
                    observeLangChange: function() {
                        var e = this;
                        window.ae_jQuery("#ae_app").register("LangChange." + this.moduleName, (function(t) {
                            var a = t.detail.newLang;
                            e.refreshLanguage(a)
                        }))
                    },
                    initUIContent: function() {
                        return !1 !== this._options.needsInterface && (this._options && this._options.languages ? (this.isPanel && (c.debug(this.moduleName + " is defined as a panel module: Closing all other panels"), n.Z.closeAllPanels([this.moduleName])), void(-1 === this._options.languages.indexOf(AudioEye.lang) ? this.refreshLanguage(AudioEye.lang) : this.addInterface())) : (c.error("Error: Cannot add interface. " + this.moduleName + " has no defined languages."), !1))
                    },
                    isInterfaceAllowed: function() {
                        return !!s.Z.isPreviewMode() || !(this.inIframe && "pdf" !== AudioEye.mode || this.runWithControlBarClosed)
                    },
                    addInterface: window.ae_jQuery.noop,
                    refreshLanguage: function(e) {
                        var t = this,
                            a = window.ae_jQuery.Deferred(),
                            o = a.promise();
                        return this._options && this._options.languages ? !this.inIframe && (-1 !== this._options.languages.indexOf(e) ? (this.addInterface(), a.resolve(), a.promise()) : (n.Z.getUIData(this.moduleName).done((function(n) {
                            window.ae_jQuery.extend(!0, i[t.moduleName], n), window.ae_jQuery.extend(!0, t._options, n), t._options.languages.push(e), t.addInterface(), a.resolve()
                        })), o)) : (c.debug("Detected language change but module has no languages"), !1)
                    },
                    getComponent: function(e) {
                        return this._options && this._options.components ? this._options.components[e][AudioEye.lang] : (c.info("cannot get component: module has no options or components"), !1)
                    },
                    getHook: function(e) {
                        return n.Z.getHook(this.moduleName, e)
                    },
                    walkthrough: {
                        open: function() {
                            if (!this.canShow()) return c.debug("walkthrough.open not allowed in this environment"), !1;
                            this.show()
                        },
                        canShow: function() {
                            return !n.Z.inIframe()
                        }
                    }
                };
            t.Z = l
        },
        7668: function(e, t) {
            var a = {
                all_shortcuts: {
                    default: {}
                },
                add: function(e, t, a, n) {
                    var o = {
                            type: "keydown",
                            propagate: !1,
                            disable_in_input: !1,
                            ignore_modifiers: !1,
                            target: document,
                            keycode: !1
                        },
                        s = this;
                    "string" != typeof t && (n = a, a = t, t = "default"), n ? Object.keys(o, (function(e) {
                        void 0 === n[e] && (n[e] = o[e])
                    })) : n = o;
                    var i = n.target;
                    "string" == typeof n.target && (i = document.getElementById(n.target)), e = e.toLowerCase();
                    var r = function(t) {
                        if ("string" == typeof t) return a(window.event);
                        if (t = t || window.event, !s.disabledCommands.isDisabled(e)) {
                            if (n.disable_in_input) {
                                var o;
                                if (t.relayedTargetTagName ? o = {
                                        tagName: t.relayedTargetTagName
                                    } : t.target ? o = t.target : t.srcElement && (o = t.srcElement), t.srcElement.shadowRoot)
                                    if (t.explicitOriginalTarget) o = t.explicitOriginalTarget;
                                    else if (t.path && Array.isArray(t.path)) o = t.path[0];
                                else if ("function" == typeof t.composedPath) {
                                    const e = t.composedPath();
                                    e && Array.isArray(e) && (o = e[0])
                                }
                                if (3 === o.nodeType && (o = o.parentNode), "INPUT" === o.tagName || "TEXTAREA" === o.tagName || "true" === o.contentEditable) return
                            }
                            var i, r = t.keyCode || t.which;
                            switch (r) {
                                case 91:
                                case 92:
                                    break;
                                case 109:
                                case 173:
                                case 189:
                                    i = "-";
                                    break;
                                case 107:
                                case 187:
                                    i = "=";
                                    break;
                                case 188:
                                    i = ",";
                                    break;
                                case 190:
                                    i = ".";
                                    break;
                                case 191:
                                    i = "/";
                                    break;
                                case 219:
                                    i = "[";
                                    break;
                                case 221:
                                    i = "]";
                                    break;
                                default:
                                    i = String.fromCharCode(r).toLowerCase()
                            }
                            var c = {
                                    "`": "~",
                                    1: "!",
                                    2: "@",
                                    3: "#",
                                    4: "$",
                                    5: "%",
                                    6: "^",
                                    7: "&",
                                    8: "*",
                                    9: "(",
                                    0: ")",
                                    "-": "_",
                                    "=": "+",
                                    "[": "{",
                                    "]": "}",
                                    ";": ": ",
                                    "'": '"',
                                    ",": "<",
                                    ".": ">",
                                    "/": "?",
                                    "\\": "|"
                                },
                                l = {
                                    esc: 27,
                                    escape: 27,
                                    tab: 9,
                                    space: 32,
                                    return: 13,
                                    enter: 13,
                                    backspace: 8,
                                    scrolllock: 145,
                                    scroll_lock: 145,
                                    scroll: 145,
                                    capslock: 20,
                                    caps_lock: 20,
                                    caps: 20,
                                    numlock: 144,
                                    num_lock: 144,
                                    num: 144,
                                    pause: 19,
                                    break: 19,
                                    insert: 45,
                                    home: 36,
                                    delete: 46,
                                    end: 35,
                                    pageup: 33,
                                    page_up: 33,
                                    pu: 33,
                                    pagedown: 34,
                                    page_down: 34,
                                    pd: 34,
                                    left: 37,
                                    up: 38,
                                    right: 39,
                                    down: 40,
                                    f1: 112,
                                    f2: 113,
                                    f3: 114,
                                    f4: 115,
                                    f5: 116,
                                    f6: 117,
                                    f7: 118,
                                    f8: 119,
                                    f9: 120,
                                    f10: 121,
                                    f11: 122,
                                    f12: 123
                                },
                                d = {
                                    shift: {
                                        wanted: !1,
                                        pressed: !!t.shiftKey
                                    },
                                    ctrl: {
                                        wanted: !1,
                                        pressed: !!t.ctrlKey
                                    },
                                    alt: {
                                        wanted: !1,
                                        pressed: !!t.altKey
                                    },
                                    meta: {
                                        wanted: !1,
                                        pressed: !!t.metaKey
                                    }
                                },
                                u = 0,
                                h = e.split("+");
                            if (h.forEach((function(e) {
                                    "ctrl" === e || "control" === e ? (u += 1, d.ctrl.wanted = !0) : "shift" === e ? (u += 1, d.shift.wanted = !0) : "alt" === e ? (u += 1, d.alt.wanted = !0) : "meta" === e ? (u += 1, d.meta.wanted = !0) : e.length > 1 ? l[e] === r && (u += 1) : n.keycode ? n.keycode === r && (u += 1) : (i === e || c[i] && t.shiftKey && (i = c[i]) === e) && (u += 1)
                                })), u === h.length && (n.ignore_modifiers || d.ctrl.pressed === d.ctrl.wanted && d.shift.pressed === d.shift.wanted && d.alt.pressed === d.alt.wanted && d.meta.pressed === d.meta.wanted) && (!1 === a(t) || ("function" == typeof n.propagate ? !n.propagate(t) : !n.propagate))) return t.cancelBubble = !0, t.returnValue = !1, t.stopPropagation && (t.stopPropagation(), t.preventDefault()), !1
                        }
                    };
                    this.all_shortcuts[t] || (this.all_shortcuts[t] = {}), this.all_shortcuts[t][e] || (this.all_shortcuts[t][e] = []), this.all_shortcuts[t][e].push({
                        callback: r,
                        target: i,
                        event: n.type
                    }), i.addEventListener ? i.addEventListener(n.type, r, !0) : i.attachEvent ? i.attachEvent("on" + n.type, r) : i["on" + n.type] = r
                },
                trigger: function(e, t) {
                    if (e = e.toLowerCase(), t) this.all_shortcuts[t][e].forEach((function(t) {
                        t && t.callback(e)
                    }));
                    else {
                        var a = this;
                        Object.keys(this.all_shortcuts).forEach((function(t) {
                            a.trigger(e, t)
                        }))
                    }
                },
                remove: function(e, t) {
                    if (e = e.toLowerCase(), t && this.all_shortcuts[t]) {
                        if (!Array.isArray(this.all_shortcuts[t][e])) return;
                        this.all_shortcuts[t][e].forEach((function(e) {
                            if (e) {
                                var t = e.event,
                                    a = e.target,
                                    n = e.callback;
                                a.detachEvent ? a.detachEvent("on" + t, n) : a.removeEventListener ? a.removeEventListener(t, n, !0) : a["on" + t] = !1
                            }
                        })), delete this.all_shortcuts[t][e]
                    } else {
                        var a = this;
                        Object.keys(this.all_shortcuts).forEach((function(t) {
                            a.remove(e, t)
                        }))
                    }
                },
                removeAll: function(e) {
                    var t = this;
                    if (e) {
                        if (!this.all_shortcuts[e]) return !1;
                        Object.keys(this.all_shortcuts[e]).forEach((function(a) {
                            t.remove(a, e)
                        }))
                    } else Object.keys(this.all_shortcuts).forEach((function(e) {
                        t.removeAll(e)
                    }))
                },
                disabledCommands: {
                    _commands: {},
                    add: function(e) {
                        this._commands[e] = !0
                    },
                    remove: function(e) {
                        delete this._commands[e]
                    },
                    isDisabled: function(e) {
                        return this._commands[e]
                    }
                }
            };
            t.Z = a
        }
    }
]);