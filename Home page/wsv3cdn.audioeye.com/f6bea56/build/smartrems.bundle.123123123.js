"use strict";
(self.AudioEyeWebpackJsonp = self.AudioEyeWebpackJsonp || []).push([
    [350], {
        7786: function(e, o) {
            var n = {
                _doc: {
                    get cookie() {
                        return document.cookie
                    },
                    set cookie(e) {
                        document.cookie = e
                    }
                },
                set: function(e, o, t, i) {
                    var r = encodeURIComponent(o);
                    isFinite(t) && (r += "; expires=" + n._expires(t, i || "days")), r += "; path=/", n._doc.cookie = e + "=" + r
                },
                get: function(e, o) {
                    var t, i, r;
                    return t = n._doc.cookie, o && (t = o), -1 === (i = t.indexOf(" " + e + "=")) && (i = t.indexOf(e + "=")), -1 === i ? t = null : (i = t.indexOf("=", i) + 1, -1 === (r = t.indexOf(";", i)) && (r = t.length), t = decodeURIComponent(t.substring(i, r))), t
                },
                all: function(e) {
                    var o = n._doc.cookie;
                    e && (o = e);
                    for (var t = o.split("; "), i = {}, r = 0; r < t.length; r++) {
                        var l = t[r].split("=");
                        i[l[0]] = l[1]
                    }
                    return i
                },
                _expires: function(e, o) {
                    var t = n._currentDate();
                    if ("days" === o) t.setDate(t.getDate() + e);
                    else {
                        if ("minutes" !== o) throw new Error("Invalid unitType passed to _expires()");
                        t.setTime(t.getTime() + 60 * e * 1e3)
                    }
                    return t.toUTCString()
                },
                _currentDate: function() {
                    return new Date
                }
            };
            window.testScope && (window.testScope.cookiesCore = n), o.Z = n
        },
        4918: function(e, o, n) {
            var t = n(7786),
                i = "color: red; font-weight: bold",
                r = "color: orange",
                l = {
                    error: 0,
                    info: 1,
                    debug: 2
                };

            function c() {
                return l[a._level]
            }

            function a(e) {
                this.module_name = e
            }
            a.init = function() {
                var e = a.getInitialLevel(t.Z.get("aebuild"), !!document.getElementById("ae_versioning"), t.Z.get("aelogging"));
                a.setLevel(e, !1), window.ae_jQuery(document).on("audioeyeLogLevelChange", (function(e) {
                    a.setLevel(e.detail.level, !0)
                })), window.ae_jQuery(document).on("audioeyeVersioningActive", (function() {
                    a.setLevel(a.getInitialLevel(t.Z.get("aebuild"), !0, t.Z.get("aelogging")), !1)
                }))
            }, a.getInitialLevel = function(e, o, n) {
                var i;
                return i = "dev" === e || "debug" === e ? "debug" : o ? "info" : "error", n && -1 != Object.keys(l).indexOf(n) ? i = n : n && t.Z.set("aelogging", "error", 0), i
            }, a.setLevel = function(e, o) {
                if (-1 === Object.keys(l).indexOf(e)) throw this._log("Logging level must be one of (" + Object.keys(l).join(", ") + ")", void 0, i, "Logger"), new Error('Invalid level "' + e + '"');
                a._level = e, o && t.Z.set("aelogging", e, 9125), c() >= 1 && console.log("AE Logging set to: " + e)
            }, a.prototype.error = function(e, o) {
                a._log(e, o, i, this.module_name, l.error)
            }, a.prototype.internalError = function(e, o) {
                a._log(e, o, r, this.module_name, l.debug, !0)
            }, a.prototype.debug = function(e, o) {
                2 === c() && a._log(e, o, r, this.module_name)
            }, a.prototype.info = function(e, o) {
                c() >= 1 && a._log(e, o, "color: #0090f1", this.module_name)
            }, a._getCodeTrace = function(e) {
                var o, n, t, i = "",
                    r = 1;
                if (e || (e = t = new Error), "object" != typeof(o = e && e.stack ? e.stack.split("\n") : "")) return !1;
                if (t && ("Error" === o[0] ? r += 3 : r += 2), !o[r]) return !1;
                (n = o[r].match(/(http|https)(:\/\/)(.+)(:)(\d+)(:)(\d+)/g)) && n.length && (i = n[0]);
                var l, c, a = {
                    line: (l = i.split(":"))[(c = l.length) - 2],
                    col: l[c - 1]
                };
                return {
                    pointer: i,
                    stack: o.slice(r),
                    line: a.line,
                    col: a.col
                }
            }, a._log = function(e, o, n, t, i, r) {
                var c, s = e,
                    g = a._getCodeTrace((c = o) && c.stack && c.message ? o : void 0);
                t && (s = e + " :: " + t), (i === l.error || r) && a._dispatchErr(e, g), o ? (s += "\n   ", console.log("%c" + s, n, o, "\n   ", g.pointer)) : console.log("%c" + s, n, "\n   ", g.pointer)
            }, a._dispatchErr = function(e, o) {
                var n = window.ae_jQuery.Event("audioeyeErrLogged");
                e && o.stack && (n.detail = {
                    filename: o.pointer,
                    lineno: o.line,
                    colno: o.col,
                    error: {
                        message: e,
                        stack: o.stack
                    }
                }, window.ae_jQuery(document).trigger(n))
            }, o.Z = a
        }
    }
]);