"use strict";
(self.AudioEyeWebpackJsonp = self.AudioEyeWebpackJsonp || []).push([
    [878, 258], {
        3204: function(e, t) {
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
        1190: function(e, t, n) {
            var i = n(4918),
                a = n(138);

            function o(e) {
                window.ae_jQuery.fn.extend({
                    hasClasses: function(e) {
                        for (var t in e)
                            if (window.ae_jQuery(this).hasClass(e[t])) return !0;
                        return !1
                    }
                }), this.pres = {
                    role: "presentation"
                }, this.rmv = {
                    role: "presentation",
                    "aria-hidden": "true",
                    tabindex: "-1"
                }, this.btn = {
                    role: "button",
                    tabindex: "0",
                    "data-ae-blurbtype": "button"
                }, this.img = {
                    role: "img"
                }, this.acd = {
                    "aria-expanded": "false",
                    role: "button",
                    tabindex: "0"
                }, this.dlg = {
                    role: "dialog"
                }, this.expt = {
                    "aria-expanded": "true"
                }, this.expf = {
                    "aria-expanded": "false"
                }, this.ele = e
            }
            o.prototype.logit = new i.Z("rem-api"), o.prototype.addBodyClass = function() {
                var e = "ae-" + window.ae_jQuery("h1:first").text().toLowerCase().replace(/ /g, "-");
                this.ele.outerFind(document.body).addClass(e)
            }, o.prototype.manageSelector = function(e) {
                switch (typeof e) {
                    case "string":
                        return this.ele.outerFind(e);
                    case "object":
                        if (Array.isArray(e) && e.every((function(e) {
                                return "string" == typeof e
                            }))) return this.ele.outerFind(e.join(","));
                        if (e.jquery) return e
                }
                console.log("aeApi-Error: Please check your selector.")
            }, o.prototype.modals = {
                enableTabLoop: function(e) {
                    "string" != typeof e && this.logit.error("enableTabLoop must be passed a jQuery selector string"), AudioEye.modals.enableTabLoop(e)
                },
                disableTabLoop: function() {
                    AudioEye.modals.disableTabLoop()
                }
            }, o.prototype.setAttr = function(e, t) {
                return this.manageSelector(e).attr(t)
            }, o.prototype.setAlt = function(e, t) {
                return this.manageSelector(e).attr("alt", t)
            }, o.prototype.convertToBtn = function(e) {
                return this.manageSelector(e).attr(this.btn)
            }, o.prototype.convertToImg = function(e) {
                return this.manageSelector(e).attr(this.img)
            }, o.prototype.setHeadingLevel = function(e, t) {
                return this.manageSelector(e).attr({
                    role: "heading",
                    "aria-level": t
                })
            }, o.prototype.setTitle = function(e, t) {
                return this.manageSelector(e).attr({
                    title: t
                })
            }, o.prototype.hideFromAT = function(e) {
                var t = this.manageSelector(e);
                return t.is("svg") ? t.attr(this.rmv).attr({
                    disabled: "true",
                    clickable: "false"
                }) : t.attr(this.rmv)
            }, o.prototype.setDialog = function(e) {
                return this.manageSelector(e).attr(this.dlg)
            }, o.prototype.setPresentation = function(e) {
                return this.manageSelector(e).attr(this.pres)
            }, o.prototype.addComplianceIndent = function(e, t, n, i) {
                var a = "";
                return "label" === n && (a = ' for="' + window.ae_jQuery(this).attr("id") + '"'), this.manageSelector(e).each((function() {
                    window.ae_jQuery(this)[t]("<" + n + ' style="display: none;" class="ae-compliance-indent ae-reader-visible"' + a + "> " + i + " </" + n + ">")
                }))
            }, o.prototype.addComplianceIndentHidden = function(e, t, n, i) {
                var a = "";
                return "label" === n && (a = ' for="' + window.ae_jQuery(this).attr("id") + '"'), this.manageSelector(e).each((function() {
                    window.ae_jQuery(this)[t]("<" + n + ' style="display: none;" class="ae-compliance-indent"' + a + "> " + i + " </" + n + ">")
                }))
            }, o.prototype.convertToAccordion = function(e, t, n) {
                var i = this,
                    o = this.manageSelector(e);
                o.each((function() {
                    window.ae_jQuery(this).attr(i.acd), void 0 !== n ? (window.ae_jQuery(this).next(n).is(":visible") || window.ae_jQuery(this).parents().next(n).is(":visible") || window.ae_jQuery(this).find(n).is(":visible")) && a.Z.set(window.ae_jQuery(this), "active") : window.ae_jQuery(this).hasClass(t) && a.Z.set(window.ae_jQuery(this), "active"), a.Z.is(window.ae_jQuery(this), "active") && window.ae_jQuery(this).attr(i.expt), window.ae_jQuery(this).on("click", (function() {
                        setTimeout((function() {
                            o.attr(i.expf), a.Z.unset(o, "active"), void 0 !== n ? o.each((function() {
                                window.ae_jQuery(this).next(n).is(":visible") || window.ae_jQuery(this).parents().next(n).is(":visible") ? (a.Z.set(window.ae_jQuery(this), "active"), window.ae_jQuery(this).attr(i.expt)) : window.ae_jQuery(this).find(n).is(":visible") && a.Z.set(window.ae_jQuery(this), "active")
                            })) : o.each((function() {
                                window.ae_jQuery(this).hasClass(t) && a.Z.set(window.ae_jQuery(this), "active"), a.Z.is(window.ae_jQuery(this), "active") && window.ae_jQuery(this).attr(i.expt)
                            }))
                        }), 600)
                    }))
                }))
            }, o.prototype.addKeyboardClick = function(e) {
                return this.manageSelector(e).on("keypress", (function(e) {
                    var t = e.which;
                    if (13 == t || 32 == t) return this.click(), !1
                }))
            }, o.prototype.stopProp = function(e) {
                return this.manageSelector(e).on("keypress", (function(e) {
                    13 == e.which && e.stopPropagation()
                }))
            }, o.prototype.remScope = function(e) {
                if (!e || void 0 === this._rscope) return e ? (o.prototype._rscope = e, void this.logit.debug("remScope set successful")) : this._rscope;
                this.logit.info("remScope(customObj) has already been set. Resetting is not allowed. Call remScope() with no parameters to access your custom scope.")
            }, t.Z = o
        },
        2195: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return w
                }
            });
            var i = n(4918),
                a = n(1190),
                o = new i.Z("manual-remediations"),
                r = function(e, t) {
                    if (e || (e = window.ae_jQuery("html")), "function" == typeof t) {
                        var n = new a.Z(e);
                        try {
                            t(e, n)
                        } catch (e) {
                            var i = "Caught an error in remediation " + (t.title ? 'with title "' + t.title + '"' : "(untitled)") + " -> " + e.message;
                            o && o.error(i, e)
                        }
                    } else o.error("runOne failed: Remediation is not a function", t)
                },
                s = n(4699),
                u = n(2399),
                c = new i.Z("remediation-timer");
            const l = function(e) {
                return window.performance && "function" == typeof performance.now ? !1 === e ? (c.debug("Rems will not be timed. Time reporting is set to OFF"), void this.noop()) : (this._performance = window.performance, this._startTime = 0, this._startTimeEpoch = 0, this._remTimes = [], this._sequenceStartTime = 0, void(this._workTime = 0)) : (c.debug("Rems will not be timed. Performance.now unsupported"), void this.noop())
            };
            l.prototype.startSequence = function() {
                this._remTimes = [], this._sequenceStartTime = this._performance.now()
            }, l.prototype.endSequence = function() {
                var e = this._performance.now(),
                    t = Math.round(e - this._sequenceStartTime);
                if ((t < 0 || t > 5e4) && (c.error("elapsedTime was negative or too high: " + t), t = 5e4), !u.Z.inIframe()) {
                    var n = this._remTimes.ae_reduce((function(e, t) {
                        return e + t
                    }), 0);
                    c.debug("endSequence: ", {
                        elapsed: t,
                        workTime: n
                    })
                }
            }, l.prototype.startOne = function() {
                this._startTime = this._performance.now(), this._startTimeEpoch = Date.now()
            }, l.prototype.endOne = function() {
                var e = this._performance.now();
                this._remTimes.push(e - this._startTime)
            }, l.prototype.noop = function() {
                var e = this;
                Object.getOwnPropertyNames(l.prototype).forEach((function(t) {
                    e[t] = function() {}
                }))
            };
            var d = l,
                m = n(3204),
                f = new i.Z("remediation-planner"),
                p = new MutationObserver((function() {})),
                h = {
                    _defaultCostsByRemType: {
                        smart: 1,
                        manual: 13,
                        auto: 5
                    },
                    _effectedElementsByRemID: {},
                    makePlan: function(e, t, n) {
                        t || (t = window.ae_jQuery(document.documentElement));
                        var i = new d(n),
                            a = [].concat(h._planManualRems(t, i, e["manual-remediations"]));
                        return null !== AudioEye.CFD.featureObjects.smartRems.object && (a = (a = a.concat(h._planSmartRems(t, i, e["smart-remediations"], e["skip-remediations"]))).concat(h._planAutoRems(t, i, e["auto-remediations"], e["skip-remediations"]))), f.debug("Found " + a.length + " remediations to run"), h._addInstrumentBookends(a, i)
                    },
                    _addInstrumentBookends: function(e, t) {
                        var n = new s.i((function() {
                                t.startSequence()
                            }), 1),
                            i = new s.i((function() {
                                t.endSequence()
                            }), 1);
                        return [n].concat(e, [i])
                    },
                    _planManualRems: function(e, t, n) {
                        return !1 === n ? (f.debug("Manual Remediations NOT applied -> OFF in product config"), []) : h._getRawManualRems().length ? h._getRawManualRems().map((function(n) {
                            return new s.i(h._makeManualRemExecutable(e, n, t), h._defaultCostsByRemType.manual)
                        })) : (f.debug("Manual Remediations NOT applied -> None found"), [])
                    },
                    _planSmartRems: function(e, t, n, i) {
                        return h._getRawSmartRems().length ? !1 === n ? (f.debug("Smart Remediations NOT applied -> OFF in product config"), []) : h._getRawSmartRems().map((function(n) {
                            return new s.i(h._makeSmartRemExecutable(e, n, i, t), h._defaultCostsByRemType.smart)
                        })) : (f.debug("Smart Remediations NOT applied -> None found"), [])
                    },
                    _planAutoRems: function(e, t, n, i) {
                        if (!1 === n) return f.debug("Auto Remediations NOT applied -> OFF in product config"), [];
                        let a = h._getRawAutoRems();
                        return a.length ? a.map((function(n) {
                            return new s.i(h._makeAutoRemExecutable(e, n, i, t), h._defaultCostsByRemType.auto)
                        })) : (f.debug("Auto Remediations NOT applied -> None found"), [])
                    },
                    _getRawAutoRems: function() {
                        if (!window.AudioEye || !window.AudioEye.autoSmartRemediations || !Array.isArray(window.AudioEye.autoSmartRemediations)) return [];
                        var e = window.AudioEye.autoSmartRemediations;
                        try {
                            const t = sessionStorage.getItem("aeSkipRems");
                            (t ? t.split(",") : []).forEach((function(t) {
                                var n = [];
                                e.forEach((function(e) {
                                    e.type !== t && n.push(e)
                                })), e = n
                            }))
                        } catch (e) {
                            f.debug("error getting aeSkipRems: " + JSON.stringify(e))
                        }
                        return e
                    },
                    _getRawManualRems: function() {
                        return window.AudioEye && window.AudioEye.manualRemediations && Array.isArray(window.AudioEye.manualRemediations) ? window.AudioEye.manualRemediations : []
                    },
                    _getRawSmartRems: function() {
                        return window.AudioEye && window.AudioEye.smartRemediations && Array.isArray(window.AudioEye.smartRemediations) ? window.AudioEye.smartRemediations : []
                    },
                    _makeAutoRemExecutable: function(e, t, n, i) {
                        var a = this;
                        return function() {
                            m.Z.observeSingleRem(), p.observe(document.body, {
                                subtree: !0,
                                childList: !0,
                                characterData: !0,
                                attributes: !0
                            }), i.startOne(), AudioEye.CFD.featureObjects.smartRems.object.runOne(e, t, n), i.endOne();
                            var o = p.takeRecords();
                            p.disconnect(), a._logMutation(t.id, o, i, "auto"), m.Z.finishObserveSingleRem(t.smart_remediation_number, AudioEye.CFD.featureObjects.smartRems.object[t.type], t.type)
                        }
                    },
                    _makeSmartRemExecutable: function(e, t, n, i) {
                        var a = this;
                        return function() {
                            m.Z.observeSingleRem(), p.observe(document.body, {
                                subtree: !0,
                                childList: !0,
                                characterData: !0,
                                attributes: !0
                            }), i.startOne(), AudioEye.CFD.featureObjects.smartRems.object.runOne(e, t, n), i.endOne();
                            var o = p.takeRecords();
                            p.disconnect(), a._logMutation(t.id, o, i, "smart"), m.Z.finishObserveSingleRem(t.smart_remediation_number, AudioEye.CFD.featureObjects.smartRems.object[t.type], t.type)
                        }
                    },
                    _makeManualRemExecutable: function(e, t, n) {
                        var i = this;
                        return function() {
                            m.Z.observeSingleRem(), p.observe(document.body, {
                                subtree: !0,
                                childList: !0,
                                characterData: !0,
                                attributes: !0
                            }), n.startOne(), r(e, t), n.endOne();
                            var a = p.takeRecords();
                            p.disconnect(), i._logMutation(t.id, a, n, "manual"), m.Z.finishObserveSingleRem(t.title, t, "Custom")
                        }
                    },
                    _logMutation: function(e, t, n, i) {
                        var a = null;
                        if (e && t && n && ["auto", "manual", "smart"].includes(i)) {
                            for (var o = [], r = 0; r < t.length; r++) - 1 === o.indexOf(t[r].target) && o.push(t[r].target);
                            void 0 !== n && void 0 !== n._remTimes && n._remTimes.hasOwnProperty("length") && (a = n._remTimes[n._remTimes.length - 1]), this._effectedElementsByRemID[e] ? (this._effectedElementsByRemID[e].effectCount += o.length, this._effectedElementsByRemID[e].timing = a) : this._effectedElementsByRemID[e] = {
                                effectCount: o.length,
                                timing: a,
                                remType: i,
                                startTimeEpoch: n._startTimeEpoch
                            }
                        }
                    }
                },
                w = h
        },
        7668: function(e, t) {
            var n = {
                all_shortcuts: {
                    default: {}
                },
                add: function(e, t, n, i) {
                    var a = {
                            type: "keydown",
                            propagate: !1,
                            disable_in_input: !1,
                            ignore_modifiers: !1,
                            target: document,
                            keycode: !1
                        },
                        o = this;
                    "string" != typeof t && (i = n, n = t, t = "default"), i ? Object.keys(a, (function(e) {
                        void 0 === i[e] && (i[e] = a[e])
                    })) : i = a;
                    var r = i.target;
                    "string" == typeof i.target && (r = document.getElementById(i.target)), e = e.toLowerCase();
                    var s = function(t) {
                        if ("string" == typeof t) return n(window.event);
                        if (t = t || window.event, !o.disabledCommands.isDisabled(e)) {
                            if (i.disable_in_input) {
                                var a;
                                if (t.relayedTargetTagName ? a = {
                                        tagName: t.relayedTargetTagName
                                    } : t.target ? a = t.target : t.srcElement && (a = t.srcElement), t.srcElement.shadowRoot)
                                    if (t.explicitOriginalTarget) a = t.explicitOriginalTarget;
                                    else if (t.path && Array.isArray(t.path)) a = t.path[0];
                                else if ("function" == typeof t.composedPath) {
                                    const e = t.composedPath();
                                    e && Array.isArray(e) && (a = e[0])
                                }
                                if (3 === a.nodeType && (a = a.parentNode), "INPUT" === a.tagName || "TEXTAREA" === a.tagName || "true" === a.contentEditable) return
                            }
                            var r, s = t.keyCode || t.which;
                            switch (s) {
                                case 91:
                                case 92:
                                    break;
                                case 109:
                                case 173:
                                case 189:
                                    r = "-";
                                    break;
                                case 107:
                                case 187:
                                    r = "=";
                                    break;
                                case 188:
                                    r = ",";
                                    break;
                                case 190:
                                    r = ".";
                                    break;
                                case 191:
                                    r = "/";
                                    break;
                                case 219:
                                    r = "[";
                                    break;
                                case 221:
                                    r = "]";
                                    break;
                                default:
                                    r = String.fromCharCode(s).toLowerCase()
                            }
                            var u = {
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
                                c = {
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
                                l = {
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
                                d = 0,
                                m = e.split("+");
                            if (m.forEach((function(e) {
                                    "ctrl" === e || "control" === e ? (d += 1, l.ctrl.wanted = !0) : "shift" === e ? (d += 1, l.shift.wanted = !0) : "alt" === e ? (d += 1, l.alt.wanted = !0) : "meta" === e ? (d += 1, l.meta.wanted = !0) : e.length > 1 ? c[e] === s && (d += 1) : i.keycode ? i.keycode === s && (d += 1) : (r === e || u[r] && t.shiftKey && (r = u[r]) === e) && (d += 1)
                                })), d === m.length && (i.ignore_modifiers || l.ctrl.pressed === l.ctrl.wanted && l.shift.pressed === l.shift.wanted && l.alt.pressed === l.alt.wanted && l.meta.pressed === l.meta.wanted) && (!1 === n(t) || ("function" == typeof i.propagate ? !i.propagate(t) : !i.propagate))) return t.cancelBubble = !0, t.returnValue = !1, t.stopPropagation && (t.stopPropagation(), t.preventDefault()), !1
                        }
                    };
                    this.all_shortcuts[t] || (this.all_shortcuts[t] = {}), this.all_shortcuts[t][e] || (this.all_shortcuts[t][e] = []), this.all_shortcuts[t][e].push({
                        callback: s,
                        target: r,
                        event: i.type
                    }), r.addEventListener ? r.addEventListener(i.type, s, !0) : r.attachEvent ? r.attachEvent("on" + i.type, s) : r["on" + i.type] = s
                },
                trigger: function(e, t) {
                    if (e = e.toLowerCase(), t) this.all_shortcuts[t][e].forEach((function(t) {
                        t && t.callback(e)
                    }));
                    else {
                        var n = this;
                        Object.keys(this.all_shortcuts).forEach((function(t) {
                            n.trigger(e, t)
                        }))
                    }
                },
                remove: function(e, t) {
                    if (e = e.toLowerCase(), t && this.all_shortcuts[t]) {
                        if (!Array.isArray(this.all_shortcuts[t][e])) return;
                        this.all_shortcuts[t][e].forEach((function(e) {
                            if (e) {
                                var t = e.event,
                                    n = e.target,
                                    i = e.callback;
                                n.detachEvent ? n.detachEvent("on" + t, i) : n.removeEventListener ? n.removeEventListener(t, i, !0) : n["on" + t] = !1
                            }
                        })), delete this.all_shortcuts[t][e]
                    } else {
                        var n = this;
                        Object.keys(this.all_shortcuts).forEach((function(t) {
                            n.remove(e, t)
                        }))
                    }
                },
                removeAll: function(e) {
                    var t = this;
                    if (e) {
                        if (!this.all_shortcuts[e]) return !1;
                        Object.keys(this.all_shortcuts[e]).forEach((function(n) {
                            t.remove(n, e)
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
            t.Z = n
        },
        4699: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return o
                }
            });
            var i = new(n(4918).Z)("task-scheduler"),
                a = {
                    _q: [],
                    _frameBudget: 13,
                    _raf: window.requestAnimationFrame,
                    _sequenceCompleteHandler: function() {},
                    _scheduleCompleteHandler: function() {},
                    _inProgress: !1,
                    isRunning: function() {
                        return a._inProgress
                    },
                    onSequenceComplete: function(e) {
                        if ("function" != typeof e) throw new Error("onSequenceComplete callback must be a function");
                        a._sequenceCompleteHandler = e
                    },
                    onScheduleComplete: function(e) {
                        if ("function" != typeof e) throw new Error("onScheduleComplete callback must be a function");
                        a._scheduleCompleteHandler = e
                    },
                    start: function() {
                        i.debug("Executing sequence of " + a._q.length + " tasks"), this._timerStart(), this._q.length ? a.isRunning() ? i.error("Cannot run tasks. TaskScheduler is already running.") : (a._inProgress = !0, a._scheduleNextFrame(a._frameBudget)) : i.info("Could not start. Nothing in the queue.")
                    },
                    add: function(e) {
                        if (!Array.isArray(e) || 0 === e.length) throw new Error("Cannot add items. items is empty or mal-formed");
                        e.forEach((function(e) {
                            try {
                                a._q.push(new a._Task(e.task, e.cost))
                            } catch (e) {
                                i.error("Could not add task. Task was invalid: ", e)
                            }
                        }))
                    },
                    addSequences: function(e) {
                        if (!Array.isArray(e) || 0 === e.length) throw new Error("Cannot add sequences. Sequences is empty or not an array");
                        var t = e.slice(1).reverse().reduce((function(e, t, n) {
                            return function() {
                                i.debug("Starting next sequence count down: " + n), a.add(a._addResetSequenceHandlerTask(t, e)), a.onSequenceComplete(e), a.start()
                            }
                        }), (function() {
                            a._scheduleCompleteHandler()
                        }));
                        a.add(a._addResetSequenceHandlerTask(e[0], t)), a.onSequenceComplete(t)
                    },
                    _addResetSequenceHandlerTask: function(e, t) {
                        return e.concat([new o((function() {
                            a.onSequenceComplete(t)
                        }), 1)])
                    },
                    _timerStart: function() {
                        window.performance && (this._startTime = window.performance.now())
                    },
                    _timerEnd: function() {
                        if (window.performance) {
                            var e = window.performance.now() - this._startTime;
                            i.debug("Last run took: " + e)
                        }
                    },
                    _scheduleNextFrame: function(e) {
                        if ("number" != typeof e || e < 1) throw new Error("Invalid budget: " + e);
                        a._raf.call(window, (function() {
                            a._runNextGroup(e)
                        }))
                    },
                    _runNextGroup: function(e) {
                        var t = a._dequeueNextGroup(e);
                        if (!t.length) return i.debug("Task sequence is complete."), void a._exitSequence();
                        for (var n = !1, o = 0; o < t.length; o++) try {
                            if (i.debug("running task."), t[o]((function() {
                                    n = !0
                                })), n) break
                        } catch (e) {
                            var r = "Task threw an error";
                            e.message && (r = r + " => " + e.message), i.error(r, e)
                        }
                        if (n) return i.debug("task cancelled sequence with " + a._q.length + "tasks remaining."), void a._exitSequence();
                        a._scheduleNextFrame(e)
                    },
                    _exitSequence: function() {
                        a._inProgress = !1, this._timerEnd(), a._q = [], a._sequenceCompleteHandler(), a._sequenceCompleteHandler = function() {}
                    },
                    _dequeueNextGroup: function(e) {
                        var t, n = 0,
                            a = [];
                        if (e <= 0) throw new Error("Invalid budget. Budget must be greater than 0");
                        for (; this._q.length;)
                            if (t = this._q[0]) {
                                if (n + t.cost > e && a.length > 0) break;
                                n += t.cost, a.push(this._q.shift().task)
                            } else i.error("Empty task encountered"), this._q.shift();
                        return a
                    },
                    _Task: o
                };

            function o(e, t) {
                this.setTask(e), this.setCost(t)
            }
            o.prototype.setTask = function(e) {
                if ("function" != typeof e) throw new Error("Task must be a function, got " + typeof e);
                this.task = e
            }, o.prototype.setCost = function(e) {
                if ("number" != typeof e) throw new Error("cost must be a number, got " + typeof e);
                if (e > 0 == 0) throw new Error("cost must be a positive number, got " + e);
                this.cost = e
            }, t.Z = a
        },
        3141: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var i = n(2399),
                a = n(2602),
                o = n(1190),
                r = n(4918),
                s = n(138),
                u = new r.Z("tab-trigger-outline"),
                c = {
                    _tabPresses: 0,
                    listen: function() {
                        document.addEventListener("keydown", c.countTab, {
                            useCapture: !0
                        })
                    },
                    countTab: function(e) {
                        return 9 === e.which && (++c._tabPresses, !(c._tabPresses < 2) && (c.enableOutline(), void document.removeEventListener("keydown", c.countTab)))
                    },
                    enableOutline: function() {
                        s.Z.set(window.ae_jQuery(document.body), "focus-outline"), u.debug("tab outline added")
                    }
                },
                l = c,
                d = n(807),
                m = n(2195),
                f = n(4699);
            const p = AudioEye.productConfig,
                h = new r.Z("compliance");
            var w = function(e) {
                const t = this;
                this._options = window.ae_jQuery.extend({}, e);
                const n = this._options,
                    r = {
                        main_content: "ae-main-content"
                    };

                function u(e) {
                    const t = a.Z.queryByRole("filter", "main", e);
                    return t.length ? t : a.Z.queryByRole("find", "main", e).eq(0)
                }

                function c(e, t) {
                    const n = u(e);
                    if (0 === n.length) return !1;
                    let a = n.attr("id");
                    a || (a = r.main_content, n.attr("id", a));
                    const o = window.ae_jQuery("#ae-skip-to-anchor").eq(0);
                    if (!(o.length > 0)) return [window.ae_jQuery("<a></a>").attr({
                        class: "ae-offscreen ae-skipto-main",
                        style: "display: none;",
                        href: `#${a}`,
                        id: "ae-skip-to-anchor"
                    }).text(t).prependTo(e).clickOrEnter("compliance", (function(e, t) {
                        e.preventDefault(), i.Z.logStat("User", "Skip To Main", t), AudioEye.focusElement(this.hash)
                    })), n];
                    o.attr("href", `#${a}`).text(t)
                }

                function w(e) {
                    window.ae_jQuery("#ae_app").off("AfterModuleActivate.sitemenu").register("AfterModuleActivate.sitemenu", (t => {
                        window.ae_jQuery("#ae_app").off("AfterModuleActivate.sitemenu"), "site-menu" === t.detail.module && AudioEye["site-menu"].focusCorrespondingMenu(e)
                    })), i.Z.setModuleActive("site-menu", !0)
                }

                function y(e, t, n) {
                    let o;
                    return !!t && (o = Array.isArray(t) ? t : [t], o.map((t => {
                        let o, r;
                        if ("object" == typeof t) {
                            if (!t.selector) return !1;
                            o = t.selector, r = i.Z.localize(t.label)
                        } else o = t;
                        const s = a.Z.roleFactory(n),
                            u = _({
                                parent: e,
                                selector: o,
                                role: n,
                                isSingleton: s && s.singleton
                            });
                        return u instanceof window.ae_jQuery && r && u.attr("aria-label", i.Z.localize(t.label)), u
                    })))
                }

                function _(e) {
                    if (!e.parent || !e.selector || !e.role) return !1;
                    let t = e.parent.outerFind(e.selector).filter(":visible");
                    if (!t.length) return !1;
                    if (e.isSingleton) {
                        if (a.Z.queryByRole("find", e.role, window.ae_jQuery(document)).length) return !1;
                        t = t.eq(0)
                    }
                    return t.attr("role", e.role)
                }

                function g(e, t) {
                    if ("function" != typeof e) return h.error("Remediation is not a function", e), !1;
                    const n = new o.Z(t);
                    try {
                        AudioEye._builderExtensionAvailable && !AudioEye._builderExtensionVersion ? window.dispatchEvent(new CustomEvent("watch-for-changes", {
                            detail: {
                                observing: !0
                            }
                        })) : AudioEye._builderExtensionAvailable && AudioEye._builderExtensionVersion && window.dispatchEvent(new CustomEvent("watch-for-changes", {
                            detail: {
                                observing: "restart"
                            }
                        })), e(t, n), AudioEye._builderExtensionAvailable && window.dispatchEvent(new CustomEvent("ae-remediation-end", {
                            detail: {
                                name: e.title,
                                fN: e,
                                type: "Custom"
                            }
                        }))
                    } catch (t) {
                        const n = `Caught an error in remediation ${e.title?`with title "${e.title}"`:"(untitled)"} -> ${t.message}`;
                        h && h.error(n, t)
                    }
                }
                window.AudioEye && (window.AudioEye.testRem = function(e, t) {
                    const n = t || window.ae_jQuery("html");
                    n.jquery ? g(e, n) : h.error("parentElement must be a jquery set")
                }, window.AudioEye.remApi = new o.Z(window.ae_jQuery("html"))), this.applyAriaTags = function(e) {
                    const t = e || window.ae_jQuery("html");
                    y(t, n["aria-landmarks"].banner, "banner"), y(t, n["aria-landmarks"].search, "search"), y(t, n["aria-landmarks"].complementary, "complementary"), y(t, n["aria-landmarks"].contentinfo, "contentinfo"), y(t, n["aria-landmarks"].content, "main"), Object.keys(n["aria-live"]).forEach((e => {
                        n["aria-live"][e] && ("alert" === e ? window.ae_jQuery(n["aria-live"].alert).attr("role", "alert") : window.ae_jQuery(n["aria-live"][e]).attr("aria-live", e))
                    }))
                }, this.applySkipToMain = function(e) {
                    if (!1 === t._options["skipto_main-content-link"]) return !1;
                    c(e || window.ae_jQuery(document.body), i.Z.localize(n["skipto_main-link-text"]))
                }, this.addSiteMenuLinkAttribute = function(e) {
                    e.forEach((e => {
                        if (e.selector && !0 === e.link) {
                            const t = e.selector;
                            window.ae_jQuery(t).attr("data-ae-site-menu-link", "true")
                        }
                    }))
                }, this.applySitemenuLink = function(e) {
                    if (!i.Z.isModuleAvailable("site-menu")) return h.info("Site Menu is turned off. Cannot add Accessible Site Menu Link"), !1;
                    if (!e) return h.info("selectors required in applySitemenuLink()"), !1;
                    let n;
                    t.addSiteMenuLinkAttribute(e);
                    const a = window.ae_jQuery("[data-ae-site-menu-link='true']");
                    return a.length ? (a.each((function() {
                        const t = window.ae_jQuery(this);
                        for (let i = 0; i < e.length; i++)
                            if (t.is(e[i].selector)) {
                                n = e[i].label.en;
                                break
                            }
                        if (t.find(".ae-accessible-menu-button").length) return !1;
                        const a = function(e) {
                            const t = window.ae_jQuery("<button></button>");
                            return t.attr({
                                type: "button",
                                class: "ae-offscreen ae-accessible-menu-button",
                                tabindex: "0",
                                style: "display: none"
                            }), t.text(`Accessible ${e||"Menu"}`), t
                        }(n);
                        t.prepend(a), a.register("focusin", (() => {
                            i.Z.logStat("User", "AE Keyboard Accessible Menu Focused", "focus")
                        })), a.register("click.compliance", (e => {
                            e.preventDefault(), i.Z.logStat("User", "AE Keyboard Accessible Menu Engaged", "click"), w(t)
                        }))
                    })), a) : (h.info("No elements with attribute data-ae-site-menu-link found"), !1)
                }, this.removeCarouselLink = function(e) {
                    let n = window.ae_jQuery();
                    e.detail.nodes.length && (n = window.ae_jQuery(e.detail.nodes).filter((function() {
                        return !window.ae_jQuery(this).hasClass("ae-accessible-carousel-link")
                    }))), n.length && t.applyCarouselLinks(p.carousels)
                }, this.applyCarouselLinks = function(e) {
                    window.ae_jQuery("#ae_app").off("RemovedNodes.carousellink").on("RemovedNodes.carousellink", (e => {
                        t.removeCarouselLink(e)
                    }));
                    let n = window.ae_jQuery("a.ae-accessible-carousel-link");
                    if (!e) return h.info("No carousel config. Cannot apply carousel links"), !1;
                    const i = t.findLinkCarousels(e).each((function() {
                        const e = t.makeCarouselLink(window.ae_jQuery(this));
                        if (e.length) {
                            const t = d.Z.getCarouselLink(window.ae_jQuery(this));
                            t.length ? n = n.not(t) : window.ae_jQuery(this).before(e)
                        }
                    }));
                    return n.remove(), i
                }, this.findLinkCarousels = function(e) {
                    let t = window.ae_jQuery();
                    return (e ? [].concat(e) : []).forEach((e => {
                        const n = window.ae_jQuery(e.carousel);
                        e.link && (t = t.add(n))
                    })), t
                }, this.makeCarouselLink = function(e) {
                    const a = window.ae_jQuery(`<a>${i.Z.localize(n["accessible-carousel-link-text"])}</a>`).attr({
                        class: "ae-offscreen ae-accessible-carousel-link",
                        "aria-label": i.Z.localize(n["accessible-carousel-link-label"]),
                        href: "#"
                    });
                    s.Z.set(a, "exclude"), a.data("carousel_original", e);
                    const o = e.position();
                    return a.css({
                        top: `${o.top}px`,
                        left: `${o.left}px`,
                        display: "none"
                    }), a.clickOrEnter("carousels", t.loadAccessibleCarousel), e.data("ae_accessible_carousel_link", a), a
                }, this.applyTabTriggersOutline = function() {
                    if (!n["tab-triggers-outline"]) return [];
                    l.listen(), h.debug("Tab triggers outline activated")
                }, this.atDisableContainer = function(e, t) {
                    e.attr("aria-hidden", !0), e.find(":focusable").addBack(":focusable").each((function() {
                        const e = window.ae_jQuery(this).attr("tabindex");
                        e && window.ae_jQuery(this).data("ae_preserved_tabindex", e), window.ae_jQuery(this).attr("tabindex", -1)
                    }));
                    let n = e.prev(".ae-compliance-indent");
                    return 0 === n.length && (n = this.addCompIndent(e, t), n.addClass("disable-container-message")), [e, n]
                }, this.atRestoreContainer = function(e) {
                    e.removeAttr("aria-hidden"), e.find('[tabindex="-1"]').addBack('[tabindex="-1"]').each((function() {
                        const e = window.ae_jQuery(this).data("ae_preserved_tabindex");
                        if (e) return window.ae_jQuery(this).attr("tabindex", e), !0;
                        window.ae_jQuery(this).removeAttr("tabindex")
                    }))
                }, this.addCompIndent = function(e, t) {
                    const n = window.ae_jQuery(`<span style="display: none" class="ae-compliance-indent">${t}</span>`);
                    return e.before(n), n
                }, this.loadAccessibleCarousel = function(e) {
                    e.preventDefault();
                    const a = window.ae_jQuery(e.target);
                    window.ae_jQuery(".ae-accessible-carousel-link-clicked").removeClass("ae-accessible-carousel-link-clicked"), a.addClass("ae-accessible-carousel-link-clicked");
                    const o = a.data("carousel_original");
                    if (!o.length) return void h.info("Cannot open carousel - no reference");
                    t.atRestoreContainer(o);
                    const r = d.Z.build(o, {
                        loopTabs: !0
                    });
                    window.ae_jQuery(r).addClass("ae-active");
                    const s = i.Z.localize(n["disabled-carousel-message"]);
                    t.atDisableContainer(o, s)[1].addClass("ae-disabled-carousel-message")
                }, this.planRemediations = function(e, a, o, r) {
                    return AudioEye.live_scanner ? [] : (i.Z.dispatchNativeEvent("WILL_PLAN_REMS"), m.Z.makePlan({
                        "manual-remediations": n["manual-remediations"],
                        "auto-remediations": n["auto-remediations"],
                        "skip-remediations": n["skip-remediations"]
                    }, e, a).concat([new f.i((() => {
                        t.applyAriaTags()
                    }), 1), new f.i((() => {
                        t.applySkipToMain()
                    }), 1), new f.i((() => {
                        t.applySitemenuLink(i.Z.get_menu_conf(o))
                    }), 1), new f.i((() => {
                        t.applyCarouselLinks(r)
                    }), 1), new f.i((() => {
                        t.applyTabTriggersOutline()
                    }), 1)]))
                }, this.planAllTasks = function(e, t) {
                    return this.planRemediations(void 0, !0, e, t)
                }, n.testmode && (window.testScope.compliance = {
                    find_role_main: u,
                    apply_landmark_role: _,
                    set_role_and_label: y,
                    apply_skip_to_main: c,
                    exec_single_rem: g,
                    ids: r,
                    RemAPI: o.Z,
                    tabTriggerOutline: l,
                    open_accessible_menu: w
                })
            }
        }
    }
]);