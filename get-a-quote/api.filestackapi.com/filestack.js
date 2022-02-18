window.filepicker = window.filepicker || {};
window.filepicker.hostname = 'https://www.filestackapi.com';
"use strict";
! function() {
    var e = function() {
        var e = {},
            t = function(t, r, n) {
                for (var o = t.split("."), i = 0; i < o.length - 1; i++) n[o[i]] || (n[o[i]] = {}), n = n[o[i]];
                "function" == typeof r ? r.isClass ? n[o[i]] = r : n[o[i]] = function() {
                    return r.apply(e, arguments)
                } : n[o[i]] = r
            },
            r = function(r, n, o) {
                t(r, n, e), o && t(r, n, window.filepicker)
            },
            n = function(t, n, o) {
                "function" == typeof t && (o = n, n = t, t = ""), t && (t += ".");
                var i = n.call(e);
                for (var a in i) r(t + a, i[a], o)
            },
            o = function(t) {
                t.apply(e, arguments)
            };
        return {
            extend: n,
            internal: o
        }
    }();
    if (window.filepicker)
        for (var t in e) window.filepicker[t] = e[t];
    else window.filepicker = e
}(), filepicker.extend("comm", function() {
        var e = this,
            t = "filepicker_comm_iframe",
            r = "fpapi_comm_iframe",
            n = function() {
                if (void 0 === window.frames[t]) {
                    a();
                    var n;
                    n = document.createElement("iframe"), n.id = n.name = t, n.src = e.urls.COMM, n.style.display = "none", document.body.appendChild(n)
                }
                if (void 0 === window.frames[r]) {
                    a();
                    var o;
                    o = document.createElement("iframe"), o.id = o.name = r, o.src = e.urls.API_COMM, o.style.display = "none", document.body.appendChild(o)
                }
            },
            o = function(t) {
                if (t.origin === e.urls.BASE || t.origin === e.urls.DIALOG_BASE) {
                    try {
                        var r = e.json.parse(t.data)
                    } catch (n) {
                        console.log("[Filepicker] Failed processing message:", t.data)
                    }
                    r && e.handlers.run(r)
                }
            },
            i = !1,
            a = function() {
                if (!i)
                    if (i = !0, window.addEventListener) window.addEventListener("message", o, !1);
                    else {
                        if (!window.attachEvent) throw new e.FilepickerException("Unsupported browser");
                        window.attachEvent("onmessage", o)
                    }
            },
            s = function() {
                if (window.removeEventListener) window.removeEventListener("message", o, !1);
                else {
                    if (!window.attachEvent) throw new e.FilepickerException("Unsupported browser");
                    window.detachEvent("onmessage", o)
                }
                if (i) {
                    i = !1;
                    for (var n = document.getElementsByName(t), a = 0; a < n.length; a++) n[a].parentNode.removeChild(n[a]);
                    try {
                        delete window.frames[t]
                    } catch (s) {}
                    for (var c = document.getElementsByName(r), l = 0; l < c.length; l++) c[l].parentNode.removeChild(c[l]);
                    try {
                        delete window.frames[r]
                    } catch (s) {}
                }
            };
        return {
            openChannel: n,
            closeChannel: s
        }
    }), filepicker.extend("comm_fallback", function() {
        var e, t, r = this,
            n = "filepicker_comm_iframe",
            o = "host_comm_iframe",
            i = "",
            a = 200,
            s = function() {
                c()
            },
            c = function() {
                if (void 0 === window.frames[o]) {
                    var e;
                    e = document.createElement("iframe"), e.id = e.name = o, i = e.src = r.urls.constructHostCommFallback(), e.style.display = "none";
                    var t = function() {
                        i = e.contentWindow.location.href, l()
                    };
                    e.attachEvent ? e.attachEvent("onload", t) : e.onload = t, document.body.appendChild(e)
                }
            },
            l = function() {
                if (void 0 === window.frames[n]) {
                    var e;
                    e = document.createElement("iframe"), e.id = e.name = n, e.src = r.urls.FP_COMM_FALLBACK + "?host_url=" + encodeURIComponent(i), e.style.display = "none", document.body.appendChild(e)
                }
                f()
            },
            u = !1,
            d = "",
            p = function() {
                var e = window.frames[n];
                if (e) {
                    var t = e.frames[o];
                    if (t) {
                        var i = t.location.hash;
                        if (i && "#" === i.charAt(0) && (i = i.substr(1)), i !== d && (d = i)) {
                            var a;
                            try {
                                a = r.json.parse(i)
                            } catch (s) {}
                            a && r.handlers.run(a)
                        }
                    }
                }
            },
            f = function() {
                u || (u = !0, e = window.setInterval(p, a))
            },
            m = function() {
                if (window.clearInterval(e), u) {
                    u = !1;
                    for (var t = document.getElementsByName(n), r = 0; r < t.length; r++) t[r].parentNode.removeChild(t[r]);
                    try {
                        delete window.frames[n]
                    } catch (i) {}
                    for (t = document.getElementsByName(o), r = 0; r < t.length; r++) t[r].parentNode.removeChild(t[r]);
                    try {
                        delete window.frames[o]
                    } catch (i) {}
                }
            },
            h = !("postMessage" in window),
            g = function() {
                t = r.comm, r.comm = {
                    openChannel: s,
                    closeChannel: m
                }
            };
        return h && g(), {
            openChannel: s,
            closeChannel: m,
            isEnabled: h
        }
    }), filepicker.extend("cookies", function() {
        var e = this,
            t = function(t) {
                var r = function(r) {
                    "ThirdPartyCookies" === r.type && (e.cookies.THIRD_PARTY_COOKIES = !!r.payload, t && "function" == typeof t && t(!!r.payload))
                };
                return r
            },
            r = function(r) {
                var n = t(r);
                e.handlers.attach("cookies", n), e.comm.openChannel()
            };
        return {
            checkThirdParty: r
        }
    }), filepicker.extend("handlers", function() {
        var e = {},
            t = function(t, r) {
                return e.hasOwnProperty(t) ? e[t].push(r) : e[t] = [r], r
            },
            r = function(t, r) {
                var n = e[t];
                if (n)
                    if (r) {
                        for (var o = 0; o < n.length; o++)
                            if (n[o] === r) {
                                n.splice(o, 1);
                                break
                            }
                        0 === n.length && delete e[t]
                    } else delete e[t]
            },
            n = function(t) {
                if (null == t || null == t.id) return !1;
                var r = t.id;
                if (e.hasOwnProperty(r)) {
                    for (var n = e[r], o = 0; o < n.length; o++) n[o](t);
                    return !0
                }
                return !1
            };
        return {
            attach: t,
            detach: r,
            run: n
        }
    }), filepicker.extend("exporter", function() {
        var e = this,
            t = function(t) {
                var r = function(r, n, o) {
                    t[n] && !e.util.isArray(t[n]) ? t[n] = [t[n]] : t[r] ? t[n] = [t[r]] : o && (t[n] = o)
                };
                if (t.mimetype && t.extension) throw e.FilepickerException("Error: Cannot pass in both mimetype and extension parameters to the export function");
                if (r("service", "services"), t.services)
                    for (var n = 0; n < t.services.length; n++) {
                        var o = ("" + t.services[n]).replace(" ", ""),
                            i = e.services[o];
                        t.services[n] = void 0 === i ? o : i
                    }
                t.openTo && (t.openTo = e.services[t.openTo] || t.openTo), e.util.setDefault(t, "container", e.browser.openInModal() ? "modal" : "window")
            },
            r = function(t, r) {
                var n = function(n) {
                    if ("filepickerUrl" === n.type) {
                        if (n.error) e.util.console.error(n.error), r(e.errors.FPError(132));
                        else {
                            var o = {};
                            o.url = n.payload.url, o.filename = n.payload.data.filename, o.mimetype = n.payload.data.type, o.size = n.payload.data.size, o.client = n.payload.data.client, o.isWriteable = !0, t(o)
                        }
                        e.modal.close()
                    }
                };
                return n
            },
            n = function(o, i, a, s) {
                t(i);
                var c = {
                    close: function() {
                        e.modal.close()
                    }
                };
                if (i.debug) return setTimeout(function() {
                    a({
                        id: 1,
                        url: "https://www.filepicker.io/api/file/-nBq2onTSemLBxlcBWn1",
                        filename: "test.png",
                        mimetype: "image/png",
                        size: 58979,
                        client: "computer"
                    })
                }, 1), c;
                if (void 0 === e.cookies.THIRD_PARTY_COOKIES) {
                    var l = !1;
                    return e.cookies.checkThirdParty(function() {
                        l || (n(o, i, a, s), l = !0)
                    }), c
                }
                var u = e.util.getId(),
                    d = !1,
                    p = function(e) {
                        d = !0, a(e)
                    },
                    f = function(e) {
                        d = !0, s(e)
                    },
                    m = function() {
                        d || (d = !0, s(e.errors.FPError(131)))
                    };
                return e.window.open(i.container, e.urls.constructExportUrl(o, i, u), m), e.handlers.attach(u, r(p, f)), c
            };
        return {
            createExporter: n
        }
    }), filepicker.extend("modal", function() {
        function e() {
            var e = document.getElementById(i);
            e && (e.hidden = !0);
            var r = document.getElementById(a);
            r && (r.hidden = !0), t()
        }

        function t() {
            var e = n();
            e && (e.style.overflow = c)
        }

        function r() {
            var e = ".fp__overlay {top: 0;right: 0;bottom: 0;left: 0;z-index: 1000;background: rgba(0, 0, 0, 0.8);}.fp__close {top: 104px; right: 108px; width: 35px; height: 35px; z-index: 20; cursor: pointer}@media screen and (max-width: 768px), screen and (max-height: 500px) {.fp__close {top: 15px; right: 12px;}}.fp__close a {text-indent: -9999px; overflow: hidden; display: block; width: 100%; height: 100%; background: url(https://assets.filestackapi.com/close.png) 50% 50% no-repeat;}.fp__close a:hover {background-color: rgba(0,0,0, .02); opacity: .8;}@media screen and (max-width: 768px), screen and (max-height: 500px) {top: 14px; right: 14px;}.fp__copy {display: none;}.fp__container {-webkit-overflow-scrolling: touch; overflow: hidden; min-height: 300px; top: 100px;right: 100px;bottom: 100px;left: 100px;background: #eee; box-sizing:content-box; -webkit-box-sizing:content-box; -moz-box-sizing:content-box;}@media screen and (max-width: 768px), screen and (max-height: 500px) {.fp__copy {bottom: 0; left: 0; right: 0; height: 20px; background: #333;}}@media screen and (max-width: 768px), screen and (max-height: 500px) {.fp__copy a {margin-left: 5px;}}@media screen and (max-width: 768px), screen and (max-height: 500px) {.fp__container {top: 0;right: 0;bottom: 0;left: 0;}}.fp__overlay, .fp__close, .fp__copy, .fp__container {position: fixed;}",
                t = document.head || document.getElementsByTagName("head")[0],
                r = document.createElement("style");
            r.type = "text/css", r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e)), t.appendChild(r)
        }

        function n() {
            try {
                return document.getElementsByTagName("html")[0]
            } catch (e) {
                return null
            }
        }
        var o = this,
            i = "filepicker_shade",
            a = "filepicker_dialog_container",
            s = n();
        if (s) var c = s.style.overflow;
        var l = function(e, t) {
                r();
                var i = u(t),
                    a = d(),
                    s = p(t),
                    c = document.createElement("iframe");
                c.name = o.window.WINDOW_NAME, c.id = o.window.WINDOW_NAME, c.style.width = "100%", c.style.height = "100%", c.style.border = "none", c.style.position = "relative", c.setAttribute("border", 0), c.setAttribute("frameborder", 0), c.setAttribute("frameBorder", 0), c.setAttribute("marginwidth", 0), c.setAttribute("marginheight", 0), c.setAttribute("allow", "microphone; camera"), c.src = e, a.appendChild(c), i.appendChild(s), i.appendChild(a), document.body.appendChild(i);
                var l = n();
                return l && (l.style.overflow = "hidden"), c
            },
            u = function(e) {
                var t = document.createElement("div");
                return t.id = i, t.className = "fp__overlay", t.onclick = f(e), t
            },
            d = function() {
                var e = document.createElement("div");
                return e.id = a, e.className = "fp__container", e
            },
            p = function(e) {
                var t = document.createElement("div");
                t.className = "fp__close";
                var r = document.createElement("a");
                return r.appendChild(document.createTextNode("X")), t.appendChild(r), r.onclick = f(e), document.onkeydown = function(t) {
                    t = t || window.event, 27 === t.keyCode && f(e)()
                }, t
            },
            f = function(e, r) {
                return r = !!r,
                    function() {
                        if (!o.uploading || r || window.confirm('You are currently uploading. If you choose "OK", the window will close and your upload will not finish. Do you want to stop uploading and close the window?')) {
                            o.uploading = !1, document.onkeydown = null, t();
                            var n = document.getElementById(i);
                            n && document.body.removeChild(n);
                            var s = document.getElementById(a);
                            s && document.body.removeChild(s);
                            try {
                                delete window.frames[o.window.WINDOW_NAME]
                            } catch (c) {}
                            e && e()
                        }
                    }
            },
            m = f(function() {});
        return {
            generate: l,
            close: m,
            hide: e
        }
    }), filepicker.extend("picker", function() {
        function e(e, r) {
            if ("filepickerProgress" === e.type) t.uploading = !0, r && r(e.payload.data);
            else if ("notUploading" === e.type) t.uploading = !1;
            else if ("closeModal" === e.type) t.modal.close();
            else if ("hideModal" === e.type) t.modal.hide();
            else if ("filepickerUrl" === e.type || "serverHttpError" === e.type) return !1;
            return !0
        }
        var t = this,
            r = function(e) {
                var r = function(r, n, o) {
                    e[n] ? t.util.isArray(e[n]) || (e[n] = [e[n]]) : e[r] ? e[n] = [e[r]] : o && (e[n] = o)
                };
                if (r("service", "services"), r("mimetype", "mimetypes"), r("extension", "extensions"), e.services)
                    for (var n = 0; n < e.services.length; n++) {
                        var o = ("" + e.services[n]).replace(" ", "");
                        void 0 !== t.services[o] && (o = t.services[o]), e.services[n] = o
                    }
                if (e.mimetypes && e.extensions) throw t.FilepickerException("Error: Cannot pass in both mimetype and extension parameters to the pick function");
                e.mimetypes || e.extensions || (e.mimetypes = ["*/*"]), e.openTo && (e.openTo = t.services[e.openTo] || e.openTo), t.util.setDefault(e, "container", t.browser.openInModal() ? "modal" : "window")
            },
            n = function(r, n, o) {
                var i = function(i) {
                    if (!e(i, o))
                        if (t.uploading = !1, i.error) t.util.console.error(i.error), i.error.code ? n(t.errors.FPError(i.error.code)) : (n(t.errors.FPError(102)), t.modal.close());
                        else {
                            var a = s(i.payload);
                            r(a), t.modal.close()
                        }
                };
                return i
            },
            o = function(r, n, o) {
                var i = function(i) {
                    e(i, o) || (t.uploading = !1, i.error ? (t.util.console.error(i.error), n(t.errors.FPError(102))) : (i.payload.data.url = i.payload.url, r(i.payload.data)), t.modal.close())
                };
                return i
            },
            i = function(e) {
                e = e || function() {};
                var r = function(r) {
                    "uploading" === r.type && (t.uploading = !!r.payload, e(t.uploading))
                };
                return r
            },
            a = function(e, t, r) {
                e[r] && (t[r] = e[r])
            },
            s = function(e) {
                var t = {},
                    r = e.url;
                r && r.url && (r = r.url), t.url = r;
                var n = e.url.data || e.data;
                return t.filename = n.filename, t.mimetype = n.type, t.size = n.size, void 0 !== n.cropped && (t.cropped = n.cropped), void 0 !== n.rotated && (t.rotated = n.rotated), void 0 !== n.converted && (t.converted = n.converted), a(n, t, "id"), a(n, t, "key"), a(n, t, "container"), a(n, t, "path"), a(n, t, "client"), a(n, t, "cloudinary_resource_type"), t.isWriteable = !0, t
            },
            c = function(r, n, o) {
                var i = function(i) {
                    if (!e(i, o)) {
                        if (t.uploading = !1, i.error) t.util.console.error(i.error), n(t.errors.FPError(102));
                        else {
                            var a = [];
                            t.util.isArray(i.payload) || (i.payload = [i.payload]);
                            for (var c = 0; c < i.payload.length; c++) {
                                var l = s(i.payload[c]);
                                a.push(l)
                            }
                            r(a)
                        }
                        t.modal.close()
                    }
                };
                return i
            },
            l = function(e, a, s, u, d, p, f) {
                r(e);
                var m = {
                    close: function() {
                        t.modal.close()
                    }
                };
                if (e.debug) {
                    var h, g = {
                        id: 1,
                        url: "https://www.filepicker.io/api/file/-nBq2onTSemLBxlcBWn1",
                        filename: "test.png",
                        mimetype: "image/png",
                        size: 58979,
                        client: "computer"
                    };
                    return h = u || e.storeLocation ? [g, g, g] : g, setTimeout(function() {
                        a(h)
                    }, 1), m
                }
                if (void 0 === t.cookies.THIRD_PARTY_COOKIES) {
                    var v = !1;
                    return t.cookies.checkThirdParty(function() {
                        v || (l(e, a, s, !!u, d, p), v = !0)
                    }), m
                }
                var w, y, b = t.util.getId(),
                    x = !1,
                    E = function(t) {
                        "window" === e.container && (window.onbeforeunload = null), x = !0, a(t)
                    },
                    A = function(e) {
                        x = !0, s(e)
                    },
                    F = function() {
                        x || (x = !0, s(t.errors.FPError(101)))
                    };
                f ? (w = t.urls.constructConvertUrl(e, b), y = n(E, A, p)) : u ? (w = t.urls.constructPickUrl(e, b, !0), y = c(E, A, p)) : d ? (w = t.urls.constructPickFolderUrl(e, b), y = o(E, A, p)) : (w = t.urls.constructPickUrl(e, b, !1), y = n(E, A, p)), t.window.open(e.container, w, F), t.handlers.attach(b, y);
                var k = b + "-upload";
                return t.handlers.attach(k, i(function() {
                    t.handlers.detach(k)
                })), m
            };
        return {
            createPicker: l
        }
    }), filepicker.extend("window", function() {
        var e = this,
            t = "filepicker_dialog",
            r = "left=100,top=100,height=600,width=800,menubar=no,toolbar=no,location=no,personalbar=no,status=no,resizable=yes,scrollbars=yes,dependent=yes,dialog=yes",
            n = 100,
            o = function(o, i, a) {
                if (a = a || function() {}, !o && e.browser.openInModal() ? o = "modal" : o || (o = "window"), "window" === o) {
                    var s = t + e.util.getId();
                    window.onbeforeunload = function() {
                        return "Filepicker upload does not complete."
                    };
                    var c = window.open(i, s, r);
                    c || (window.onbeforeunload = null, window.alert("Please disable your popup blocker to upload files."));
                    var l = window.setInterval(function() {
                        (!c || c.closed) && (window.onbeforeunload = null, window.clearInterval(l), a())
                    }, n)
                } else if ("modal" === o) e.modal.generate(i, a);
                else {
                    var u = document.getElementById(o);
                    if (!u) throw new e.FilepickerException('Container "' + o + '" not found. This should either be set to "window","modal", or the ID of an iframe that is currently in the document.');
                    u.src = i
                }
            };
        return {
            open: o,
            WINDOW_NAME: t
        }
    }), filepicker.extend("conversions", function() {
        var e = this,
            t = {
                align: "string",
                blurAmount: "number",
                crop: "string or array",
                crop_first: "boolean",
                compress: "boolean",
                exif: "string or boolean",
                filter: "string",
                fit: "string",
                format: "string",
                height: "number",
                policy: "string",
                quality: "number",
                page: "number",
                rotate: "string or number",
                secure: "boolean",
                sharpenAmount: "number",
                signature: "string",
                storeAccess: "string",
                storeContainer: "string",
                storeRegion: "string",
                storeLocation: "string",
                storePath: "string",
                text: "string",
                cloudinaryUploadPreset: "string",
                text_align: "string",
                text_color: "string",
                text_font: "string",
                text_padding: "number",
                text_size: "number",
                watermark: "string",
                watermark_position: "string",
                watermark_size: "number",
                width: "number"
            },
            r = {
                w: "width",
                h: "height"
            },
            n = function(e) {
                var n = {};
                for (var o in e) n[r[o] || o] = e[o], "number" === t[r[o] || o] && (n[r[o] || o] = Number(e[o]));
                return n
            },
            o = function(r) {
                var n;
                for (var o in r) {
                    n = !1;
                    for (var i in t)
                        if (o === i && (n = !0, -1 === t[i].indexOf(e.util.typeOf(r[o])))) throw new e.FilepickerException("Conversion parameter " + o + " is not the right type: " + r[o] + ". Should be a " + t[i]);
                    if (!n) throw new e.FilepickerException("Conversion parameter " + o + " is not a valid parameter.")
                }
            },
            i = function(t, r, n, i, a) {
                o(r), r.crop && e.util.isArray(r.crop) && (r.crop = r.crop.join(",")), e.ajax.post(t + "/convert", {
                    data: r,
                    json: !0,
                    success: function(t) {
                        n(e.util.standardizeFPFile(t))
                    },
                    error: function(t, r, n) {
                        i("not_found" === t ? new e.errors.FPError(141) : "bad_params" === t ? new e.errors.FPError(142) : "not_authorized" === t ? new e.errors.FPError(403) : new e.errors.FPError(143))
                    },
                    progress: a
                })
            };
        return {
            convert: i,
            mapRestParams: n
        }
    }), filepicker.extend("errors", function() {
        var e = this,
            t = function(e) {
                if (this === window) return new t(e);
                if (this.code = e, filepicker.debug) {
                    var r = filepicker.error_map[this.code];
                    this.message = r.message, this.moreInfo = r.moreInfo, this.toString = function() {
                        return "FPError " + this.code + ": " + this.message + ". For help, see " + this.moreInfo
                    }
                } else this.toString = function() {
                    return "FPError " + this.code + ". Include filepicker_debug.js for more info"
                };
                return this
            };
        t.isClass = !0;
        var r = function(t) {
            filepicker.debug && e.util.console.error(t.toString())
        };
        return {
            FPError: t,
            handleError: r
        }
    }, !0), filepicker.extend(function() {
        var e = this,
            t = "2.4.20";
        e.API_VERSION = "v2";
        var r = function(t) {
                e.apikey = t
            },
            n = function(e) {
                return this.text = e, this.toString = function() {
                    return "FilepickerException: " + this.text
                }, this
            };
        n.isClass = !0;
        var o = function(t, r, n, o) {
                return e.util.checkApiKey(), "function" == typeof t && (n = r, r = t, t = {}), t = t || {}, r = r || function() {}, n = n || e.errors.handleError, e.picker.createPicker(t, r, n, !1, !1, o)
            },
            i = function(t, r, n, o) {
                return e.util.checkApiKey(), "function" == typeof t && (o = n, n = r, r = t, t = {}), t = t || {}, r = r || function() {}, n = n || e.errors.handleError, e.picker.createPicker(t, r, n, !0, !1, o)
            },
            a = function(t, r, n, o, i) {
                if (e.util.checkApiKey(), !t || !r || "function" == typeof t || "function" == typeof t) throw new e.FilepickerException("Not all required parameters given, missing picker or store options");
                o = o || e.errors.handleError;
                var a = !!t.multiple,
                    s = t ? e.util.clone(t) : {};
                if (s.storeLocation = r.location || "S3", s.storePath = r.path, s.storeContainer = r.storeContainer || r.container, s.storeRegion = r.storeRegion, s.cloudinaryUploadPreset = r.cloudinaryUploadPreset, s.storeAccess = r.access || "private", a && s.storePath && "/" !== s.storePath.charAt(s.storePath.length - 1)) throw new e.FilepickerException(NaN);
                var c = n;
                return a || (c = function(e) {
                    n([e])
                }), e.picker.createPicker(s, c, o, a, !1, i)
            },
            s = function(t, r, n, o) {
                return e.util.checkApiKey(), "function" == typeof t && (n = r, r = t, t = {}), t = t || {}, r = r || function() {}, n = n || e.errors.handleError, e.picker.createPicker(t, r, n, !1, !0, o)
            },
            c = function(t, r, n, o, i) {
                if (e.util.checkApiKey(), !t) throw new e.FilepickerException("No input given - nothing to read!");
                if ("function" == typeof r && (i = o, o = n, n = r, r = {}), r = r || {}, n = n || function() {}, o = o || e.errors.handleError, i = i || function() {}, "string" == typeof t) e.util.isFPUrl(t) ? e.files.readFromFPUrl(t, r, n, o, i) : e.files.readFromUrl(t, r, n, o, i);
                else if (e.util.isFileInputElement(t)) t.files ? 0 === t.files.length ? o(new e.errors.FPError(115)) : e.files.readFromFile(t.files[0], r, n, o, i) : l(t, r, n, o, i);
                else if (e.util.isFile(t)) e.files.readFromFile(t, r, n, o, i);
                else {
                    if (!t.url) throw new e.FilepickerException("Cannot read given input: " + t + ". Not a url, file input, DOM File, or FPFile object.");
                    e.files.readFromFPUrl(t.url, r, n, o, i)
                }
            },
            l = function(t, r, n, o, i) {
                i(10), e.store(t, function(t) {
                    i(50), e.read(t, r, n, o, function(e) {
                        i(50 + e / 2)
                    })
                }, o)
            },
            u = function(t, r, n, o, i, a) {
                if (e.util.checkApiKey(), !t) throw new e.FilepickerException("No fpfile given - nothing to write to!");
                if (void 0 === r || null === r) throw new e.FilepickerException("No input given - nothing to write!");
                "function" == typeof n && (a = i, i = o, o = n, n = {}), n = n || {}, o = o || function() {}, i = i || e.errors.handleError, a = a || function() {};
                var s;
                if (e.util.isFPUrl(e.util.getFPUrl(t))) s = t;
                else {
                    if (!t.url) throw new e.FilepickerException("Invalid file to write to: " + t + ". Not a filepicker url or FPFile object.");
                    s = t.url
                }
                if (s = e.util.trimConvert(e.util.getFPUrl(s)), "string" == typeof r) e.files.writeDataToFPUrl(s, r, n, o, i, a);
                else if (e.util.isFileInputElement(r)) r.files ? 0 === r.files.length ? i(new e.errors.FPError(115)) : e.files.writeFileToFPUrl(s, r.files[0], n, o, i, a) : e.files.writeFileInputToFPUrl(s, r, n, o, i, a);
                else if (e.util.isFile(r)) e.files.writeFileToFPUrl(s, r, n, o, i, a);
                else {
                    if (!r.url) throw new e.FilepickerException("Cannot read from given input: " + r + ". Not a string, file input, DOM File, or FPFile object.");
                    e.files.writeUrlToFPUrl(s, r.url, n, o, i, a)
                }
            },
            d = function(t, r, n, o, i, a) {
                if (e.util.checkApiKey(), !t) throw new e.FilepickerException("No fpfile given - nothing to write to!");
                if (void 0 === r || null === r) throw new e.FilepickerException("No input given - nothing to write!");
                "function" == typeof n && (a = i, i = o, o = n, n = {}), n = n || {}, o = o || function() {}, i = i || e.errors.handleError, a = a || function() {};
                var s;
                if (e.util.isFPUrl(e.util.getFPUrl(t))) s = t;
                else {
                    if (!t.url) throw new e.FilepickerException("Invalid file to write to: " + t + ". Not a filepicker url or FPFile object.");
                    s = t.url
                }
                s = e.util.getFPUrl(s), e.files.writeUrlToFPUrl(e.util.trimConvert(s), r, n, o, i, a)
            },
            p = function(t, r, n, o) {
                e.util.checkApiKey(), "function" == typeof r && (o = n, n = r, r = {}), r = r ? e.util.clone(r) : {}, n = n || function() {}, o = o || e.errors.handleError;
                var i;
                if ("string" == typeof t && e.util.isUrl(t)) i = t;
                else {
                    if (!t.url) throw new e.FilepickerException("Invalid file to export: " + t + ". Not a valid url or FPFile object. You may want to use filepicker.store() to get an FPFile to export");
                    i = t.url, r.mimetype || r.extension || (r.mimetype = t.mimetype), r.suggestedFilename || (r.suggestedFilename = t.filename)
                }
                return r.suggestedFilename && (r.suggestedFilename = encodeURI(r.suggestedFilename)), e.exporter.createExporter(i, r, n, o)
            },
            f = function(t, r, n, o, i) {
                var a;
                if (e.util.checkApiKey(), "function" == typeof r && (o = n, n = r, r = {}), r = r || {}, n = n || function() {}, o = o || e.errors.handleError, "string" == typeof t) a = t;
                else {
                    if (!t.url) throw new e.FilepickerException("Invalid file to convert: " + t + ". Not a valid url or FPFile object or not filepicker url. You can convert only filepicker url images.");
                    a = t.url, r.filename || (r.filename = t.filename)
                }
                return r.convertUrl = a, r.multiple = !1, r.services = ["CONVERT", "COMPUTER"], r.backgroundUpload = !0, r.hide = !1, e.picker.createPicker(r, n, o, !1, !1, i, !0)
            },
            m = function(t, r, n, o, i) {
                if (e.util.checkApiKey(), "function" == typeof r && (i = o, o = n, n = r, r = {}), r = r ? e.util.clone(r) : {}, n = n || function() {}, o = o || e.errors.handleError, i = i || function() {}, "string" == typeof t) e.files.storeData(t, r, n, o, i);
                else if (e.util.isFileInputElement(t)) t.files ? 0 === t.files.length ? o(new e.errors.FPError(115)) : e.files.storeFile(t.files[0], r, n, o, i) : e.files.storeFileInput(t, r, n, o, i);
                else if (e.util.isFile(t)) e.files.storeFile(t, r, n, o, i);
                else {
                    if (!t.url) throw new e.FilepickerException("Cannot store given input: " + t + ". Not a string, file input, DOM File, or FPFile object.");
                    r.filename || (r.filename = t.filename), e.files.storeUrl(t.url, r, n, o, i)
                }
            },
            h = function(t, r, n, o, i) {
                e.util.checkApiKey(), "function" == typeof r && (i = o, o = n, n = r, r = {}), r = r || {}, n = n || function() {}, o = o || e.errors.handleError, i = i || function() {}, e.files.storeUrl(t, r, n, o, i)
            },
            g = function(t, r, n, o) {
                e.util.checkApiKey(), "function" == typeof r && (o = n, n = r, r = {}), r = r || {}, n = n || function() {}, o = o || e.errors.handleError;
                var i;
                if (e.util.isFPUrl(e.util.getFPUrl(t))) i = t;
                else {
                    if (!t.url) throw new e.FilepickerException("Invalid file to get metadata for: " + t + ". Not a filepicker url or FPFile object.");
                    i = t.url
                }
                i = e.util.getFPUrl(i), e.files.stat(e.util.trimConvert(i), r, n, o)
            },
            v = function(t, r, n, o) {
                e.util.checkApiKey(), "function" == typeof r && (o = n, n = r, r = {}), r = r || {}, n = n || function() {}, o = o || e.errors.handleError;
                var i;
                if (e.util.isFPUrl(e.util.getFPUrl(t))) i = t;
                else {
                    if (!t.url) throw new e.FilepickerException("Invalid file to remove: " + t + ". Not a filepicker url or FPFile object.");
                    i = t.url
                }
                i = e.util.getFPUrl(i), e.files.remove(e.util.trimConvert(i), r, n, o)
            },
            w = function(t, r, n, o, i, a) {
                if (e.util.checkApiKey(), !t) throw new e.FilepickerException("No fpfile given - nothing to convert!");
                "function" == typeof n && (a = i, i = o, o = n, n = {});
                var s = r ? e.util.clone(r) : {};
                n = n || {}, o = o || function() {}, i = i || e.errors.handleError, a = a || function() {}, n.location && (s.storeLocation = n.location), n.path && (s.storePath = n.path), n.container && (s.storeContainer = n.container), s.storeAccess = n.access || "private";
                var c;
                if (e.util.isFPUrl(e.util.getFPUrl(t))) c = t;
                else {
                    if (!t.url) throw new e.FilepickerException("Invalid file to convert: " + t + ". Not a filepicker url or FPFile object.");
                    if (c = t.url, !e.mimetypes.matchesMimetype(t.mimetype, "image/*") && !e.mimetypes.matchesMimetype(t.mimetype, "application/pdf")) return void i(new e.errors.FPError(142))
                }
                if (c = e.util.getFPUrl(c), c.indexOf("/convert") > -1) {
                    var l = e.util.parseUrl(c).params;
                    l = e.conversions.mapRestParams(l), l.crop && e.util.setDefault(l, "crop_first", !0);
                    for (var u in l) e.util.setDefault(s, u, l[u])
                }
                e.conversions.convert(e.util.trimConvert(c), s, o, i, a)
            },
            y = function(t) {
                return e.widgets.constructWidget(t)
            },
            b = function(t, r) {
                return e.dragdrop.makeDropPane(t, r)
            },
            x = function(t) {
                return e.responsiveImages.setResponsiveOptions(t)
            },
            E = function() {
                e.responsiveImages.update.apply(null, arguments)
            },
            A = function(t) {
                t = t || {}, e.ajax.get(e.urls.LOGOUT, {
                    success: t.onSuccess,
                    error: t.onError,
                    withCredentials: !0
                })
            };
        return {
            setKey: r,
            setResponsiveOptions: x,
            pick: o,
            pickFolder: s,
            pickMultiple: i,
            pickAndStore: a,
            read: c,
            write: u,
            writeUrl: d,
            "export": p,
            exportFile: p,
            processImage: f,
            store: m,
            storeUrl: h,
            stat: g,
            metadata: g,
            remove: v,
            convert: w,
            constructWidget: y,
            makeDropPane: b,
            FilepickerException: n,
            responsive: E,
            logout: A,
            version: t
        }
    }, !0), filepicker.extend("mimetypes", function() {
        var e = this,
            t = {
                ".stl": "application/sla",
                ".hbs": "text/html",
                ".pdf": "application/pdf",
                ".jpg": "image/jpeg",
                ".jpeg": "image/jpeg",
                ".jpe": "image/jpeg",
                ".imp": "application/x-impressionist",
                ".vob": "video/dvd"
            },
            r = ["application/octet-stream", "application/download", "application/force-download", "octet/stream", "application/unknown", "application/x-download", "application/x-msdownload", "application/x-secure-download"],
            n = function(e) {
                if (e.type) {
                    var n = e.type;
                    n = n.toLowerCase();
                    for (var o = !1, i = 0; i < r.length; i++) o = o || n === r[i];
                    if (!o) return e.type
                }
                var a = e.name || e.fileName,
                    s = a.match(/\.\w*$/);
                return s ? t[s[0].toLowerCase()] || "" : e.type ? e.type : ""
            },
            o = function(t, n) {
                if (!t) return "*/*" === n;
                t = e.util.trim(t).toLowerCase(), n = e.util.trim(n).toLowerCase();
                for (var o = 0; o < r.length; o++)
                    if (t === r[o]) return !0;
                var i = t.split("/"),
                    a = n.split("/");
                return "*" === a[0] ? !0 : a[0] !== i[0] ? !1 : "*" === a[1] ? !0 : a[1] === i[1]
            };
        return {
            getMimetype: n,
            matchesMimetype: o
        }
    }), filepicker.extend("services", function() {
        return {
            COMPUTER: 1,
            DROPBOX: 2,
            FACEBOOK: 3,
            GITHUB: 4,
            GMAIL: 5,
            IMAGE_SEARCH: 6,
            URL: 7,
            WEBCAM: 8,
            GOOGLE_DRIVE: 9,
            SEND_EMAIL: 10,
            INSTAGRAM: 11,
            FLICKR: 12,
            VIDEO: 13,
            EVERNOTE: 14,
            PICASA: 15,
            WEBDAV: 16,
            FTP: 17,
            ALFRESCO: 18,
            BOX: 19,
            SKYDRIVE: 20,
            GDRIVE: 21,
            CUSTOMSOURCE: 22,
            CLOUDDRIVE: 23,
            GENERIC: 24,
            CONVERT: 25,
            AUDIO: 26
        }
    }, !0), filepicker.extend("urls", function() {
        function e(e, n) {
            return "?key=" + o.apikey + "&id=" + n + "&referrer=" + window.location.hostname + "&iframe=" + ("window" !== e.container) + "&version=" + o.API_VERSION + (e.services ? "&s=" + e.services.join(",") : "") + (void 0 !== e.container ? "&container=" + e.container : "modal") + (e.openTo ? "&loc=" + e.openTo : "") + "&language=" + (e.language || o.browser.getLanguage()) + (void 0 !== e.mobile ? "&mobile=" + e.mobile : "") + (void 0 !== e.backgroundUpload ? "&bu=" + e.backgroundUpload : "") + (e.cropRatio ? "&cratio=" + e.cropRatio : "") + (e.cropDim ? "&cdim=" + e.cropDim.join(",") : "") + (e.cropMax ? "&cmax=" + e.cropMax.join(",") : "") + (e.cropMin ? "&cmin=" + e.cropMin.join(",") : "") + (void 0 !== e.cropForce ? "&cforce=" + e.cropForce : "") + (void 0 !== e.hide ? "&hide=" + e.hide : "") + (e.customCss ? "&css=" + encodeURIComponent(e.customCss) : "") + (e.customText ? "&text=" + encodeURIComponent(e.customText) : "") + (e.imageMin ? "&imin=" + e.imageMin.join(",") : "") + (e.imageMax ? "&imax=" + e.imageMax.join(",") : "") + (e.imageDim ? "&idim=" + e.imageDim.join(",") : "") + (e.imageQuality ? "&iq=" + e.imageQuality : "") + (e.noFileReader ? "&nfl=" + e.noFileReader : "") + (o.util.isCanvasSupported() ? "" : "&canvas=false") + (e.redirectUrl ? "&redirect_url=" + e.redirectUrl : "") + (e.showClose && "modal" !== e.container ? "&showClose=" + e.showClose : "") + t(e) + "&plugin=" + r()
        }

        function t(e) {
            return (e.signature ? "&signature=" + e.signature : "") + (e.policy ? "&policy=" + e.policy : "")
        }

        function r() {
            return filepicker.plugin || "js_lib"
        }

        function n(e) {
            e = e || [];
            var t, r, n = [];
            for (t in e)
                for (r in p) e[t] === p[r] && e.hasOwnProperty(t) && n.push(e[t]);
            return n.length || n.push("crop"), "&co=" + n.join(",")
        }
        var o = this,
            i = "https://www.filepicker.io";
        window.filepicker.hostname && (i = window.filepicker.hostname);
        var a = i.replace("www", "dialog"),
            s = a + "/dialog/open/",
            c = a + "/dialog/save/",
            l = a + "/dialog/process/",
            u = a + "/dialog/folder/",
            d = i + "/api/store/",
            p = ["crop", "rotate", "filter"],
            f = function(t, r, o) {
                return s + e(t, r) + (o ? "&multi=" + !!o : "") + (void 0 !== t.mimetypes ? "&m=" + t.mimetypes.join(",") : "") + (void 0 !== t.extensions ? "&ext=" + t.extensions.join(",") : "") + (t.maxSize ? "&maxSize=" + t.maxSize : "") + (t.customSourceContainer ? "&customSourceContainer=" + t.customSourceContainer : "") + (t.customSourcePath ? "&customSourcePath=" + t.customSourcePath : "") + (t.maxFiles ? "&maxFiles=" + t.maxFiles : "") + (void 0 !== t.folders ? "&folders=" + t.folders : "") + (t.storeLocation ? "&storeLocation=" + t.storeLocation : "") + (t.storePath ? "&storePath=" + t.storePath : "") + (t.storeContainer ? "&storeContainer=" + t.storeContainer : "") + (t.storeRegion ? "&storeRegion=" + t.storeRegion : "") + (t.cloudinaryUploadPreset ? "&cloudinaryUploadPreset=" + t.cloudinaryUploadPreset : "") + (t.storeAccess ? "&storeAccess=" + t.storeAccess : "") + (t.webcam && t.webcam.webcamDim ? "&wdim=" + t.webcam.webcamDim.join(",") : "") + (t.webcamDim ? "&wdim=" + t.webcamDim.join(",") : "") + (t.webcam && t.webcam.videoRes ? "&videoRes=" + t.webcam.videoRes : "") + (t.webcam && t.webcam.videoLen ? "&videoLen=" + t.webcam.videoLen : "") + (t.webcam && t.webcam.audioLen ? "&audioLen=" + t.webcam.audioLen : "") + n(t.conversions)
            },
            m = function(t, r) {
                var o = t.convertUrl;
                return (o.indexOf("&") >= 0 || o.indexOf("?") >= 0) && (o = encodeURIComponent(o)), l + e(t, r) + "&curl=" + o + n(t.conversions)
            },
            h = function(t, r) {
                return u + e(t, r)
            },
            g = function(t, r, n) {
                return (t.indexOf("&") >= 0 || t.indexOf("?") >= 0) && (t = encodeURIComponent(t)), c + e(r, n) + "&url=" + t + (void 0 !== r.mimetype ? "&m=" + r.mimetype : "") + (void 0 !== r.extension ? "&ext=" + r.extension : "") + (r.suggestedFilename ? "&defaultSaveasName=" + r.suggestedFilename : "")
            },
            v = function(e) {
                return d + e.location + "?key=" + o.apikey + (e.base64decode ? "&base64decode=true" : "") + (e.mimetype ? "&mimetype=" + e.mimetype : "") + (e.filename ? "&filename=" + encodeURIComponent(e.filename) : "") + (e.path ? "&path=" + e.path : "") + (e.container ? "&container=" + e.container : "") + (e.access ? "&access=" + e.access : "") + t(e) + "&plugin=" + r()
            },
            w = function(e, n) {
                return e + "?nonce=fp" + (n.base64decode ? "&base64decode=true" : "") + (n.mimetype ? "&mimetype=" + n.mimetype : "") + t(n) + "&plugin=" + r()
            },
            y = function() {
                var e = o.util.parseUrl(window.location.href);
                return e.origin + "/404"
            };
        return {
            BASE: i,
            DIALOG_BASE: a,
            API_COMM: i + "/dialog/comm_iframe/",
            COMM: a + "/dialog/comm_iframe/",
            FP_COMM_FALLBACK: a + "/dialog/comm_hash_iframe/",
            STORE: d,
            PICK: s,
            EXPORT: c,
            LOGOUT: i + "/api/clients/unauth",
            constructPickUrl: f,
            constructConvertUrl: m,
            constructPickFolderUrl: h,
            constructExportUrl: g,
            constructWriteUrl: w,
            constructStoreUrl: v,
            constructHostCommFallback: y,
            getPlugin: r
        }
    }), filepicker.extend("ajax", function() {
        var e = this,
            t = function(e, t) {
                t.method = "GET", i(e, t)
            },
            r = function(t, r) {
                r.method = "POST", t += (t.indexOf("?") >= 0 ? "&" : "?") + "_cacheBust=" + e.util.getId(), i(t, r)
            },
            n = function(t, r) {
                var o = [];
                for (var i in t) {
                    var a = t[i];
                    r && (i = r + ". + key + ");
                    var s;
                    switch (e.util.typeOf(a)) {
                        case "object":
                            s = n(a, i);
                            break;
                        case "array":
                            for (var c = {}, l = 0; l < a.length; l++) c[l] = a[l];
                            s = n(c, i);
                            break;
                        default:
                            s = i + "=" + encodeURIComponent(a)
                    }
                    null !== a && o.push(s)
                }
                return o.join("&")
            },
            o = function() {
                try {
                    return new window.XMLHttpRequest
                } catch (e) {
                    try {
                        return new window.ActiveXObject("Msxml2.XMLHTTP")
                    } catch (e) {
                        try {
                            return new window.ActiveXObject("Microsoft.XMLHTTP")
                        } catch (e) {
                            return null
                        }
                    }
                }
            },
            i = function(t, r) {
                t = t || "";
                var i = r.method ? r.method.toUpperCase() : "POST",
                    s = r.success || function() {},
                    c = r.error || function() {},
                    l = void 0 === r.async ? !0 : r.async,
                    u = r.data || null,
                    d = void 0 === r.processData ? !0 : r.processData,
                    p = r.headers || {},
                    f = e.util.parseUrl(t),
                    m = window.location.protocol + "//" + window.location.host,
                    h = m !== f.origin,
                    g = !1;
                t += (t.indexOf("?") >= 0 ? "&" : "?") + "plugin=" + e.urls.getPlugin(), u && d && (u = n(r.data));
                var v;
                if (r.xhr) v = r.xhr;
                else if (v = o(), !v) return r.error("Ajax not allowed"), v;
                if (h && window.XDomainRequest && !("withCredentials" in v)) return new a(t, r);
                r.progress && v.upload && v.upload.addEventListener("progress", function(e) {
                    e.lengthComputable && r.progress(Math.round(95 * e.loaded / e.total))
                }, !1);
                var w = function() {
                    if (4 == v.readyState && !g)
                        if (r.progress && r.progress(100), v.status >= 200 && v.status < 300) {
                            var t = v.responseText;
                            if (r.json) try {
                                t = e.json.decode(t)
                            } catch (n) {
                                return void y.call(v, "Invalid json: " + t)
                            }
                            s(t, v.status, v), g = !0
                        } else y.call(v, v.responseText), g = !0
                };
                v.onreadystatechange = w;
                var y = function(e) {
                    return g ? void 0 : (r.progress && r.progress(100), g = !0, 400 == this.status ? void c("bad_params", this.status, this) : 403 == this.status ? void c("not_authorized", this.status, this) : 404 == this.status ? void c("not_found", this.status, this) : h ? 4 == this.readyState && 0 === this.status ? void c("CORS_not_allowed", this.status, this) : void c("CORS_error", this.status, this) : void c(e, this.status, this))
                };
                v.onerror = y, u && "GET" == i && (t += (-1 !== t.indexOf("?") ? "&" : "?") + u, u = null), r.withCredentials && (v.withCredentials = !0), v.open(i, t, l), r.json ? v.setRequestHeader("Accept", "application/json, text/javascript") : v.setRequestHeader("Accept", "text/javascript, text/html, application/xml, text/xml, */*");
                var b = p["Content-Type"] || p["content-type"];
                if (u && d && ("POST" == i || "PUT" == i) && void 0 === b && v.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8"), p)
                    for (var x in p) v.setRequestHeader(x, p[x]);
                return v.send(u), v
            },
            a = function(t, r) {
                if (!window.XDomainRequest) return null;
                var o = r.method ? r.method.toUpperCase() : "POST",
                    i = r.success || function() {},
                    a = r.error || function() {},
                    s = r.data || {};
                if ("http:" == window.location.protocol ? t = t.replace("https:", "http:") : "https:" == window.location.protocol && (t = t.replace("http:", "https:")), r.async) throw new e.FilepickerException("Asyncronous Cross-domain requests are not supported");
                "GET" !== o && "POST" !== o && (s._method = o, o = "POST"), r.processData !== !1 && (s = s ? n(s) : null), s && "GET" == o && (t += (t.indexOf("?") >= 0 ? "&" : "?") + s, s = null), t += (t.indexOf("?") >= 0 ? "&" : "?") + "_xdr=true&_cacheBust=" + e.util.getId();
                var c = new window.XDomainRequest;
                return c.onload = function() {
                    var t = c.responseText;
                    if (r.progress && r.progress(100), r.json) try {
                        t = e.json.decode(t)
                    } catch (n) {
                        return void a("Invalid json: " + t, 200, c)
                    }
                    i(t, 200, c)
                }, c.onerror = function() {
                    r.progress && r.progress(100), a(c.responseText || "CORS_error", this.status || 500, this)
                }, c.onprogress = function() {}, c.ontimeout = function() {}, c.timeout = 3e4, c.open(o, t, !0), c.send(s), c
            };
        return {
            get: t,
            post: r,
            request: i
        }
    }), filepicker.extend("files", function() {
        var e = this,
            t = function(t, n, o, i, a) {
                var s = void 0 === n.base64encode;
                s && (n.base64encode = !0), n.base64encode = n.base64encode !== !1;
                var c = function(t) {
                    s && (t = e.base64.decode(t, !!n.asText)), o(t)
                };
                r.call(this, t, n, c, i, a)
            },
            r = function(t, r, n, o, i) {
                r.cache !== !0 && (r._cacheBust = e.util.getId()), e.ajax.get(t, {
                    data: r,
                    headers: {
                        "X-NO-STREAM": !0
                    },
                    success: n,
                    error: function(t, r, n) {
                        o("CORS_not_allowed" === t ? new e.errors.FPError(113) : "CORS_error" === t ? new e.errors.FPError(114) : "not_found" === t ? new e.errors.FPError(115) : "bad_params" === t ? new e.errors.FPError(400) : "not_authorized" === t ? new e.errors.FPError(403) : new e.errors.FPError(118))
                    },
                    progress: i
                })
            },
            n = function(t, r, n, o, i) {
                if (!(window.File && window.FileReader && window.FileList && window.Blob)) return i(10), void e.files.storeFile(t, {}, function(t) {
                    i(50), e.files.readFromFPUrl(t.url, r, n, o, function(e) {
                        i(50 + e / 2)
                    })
                }, o, function(e) {
                    i(e / 2)
                });
                var a = !!r.base64encode,
                    s = !!r.asText,
                    c = new FileReader;
                c.onprogress = function(e) {
                    e.lengthComputable && i(Math.round(e.loaded / e.total * 100))
                }, c.onload = function(t) {
                    i(100), n(a ? e.base64.encode(t.target.result, s) : t.target.result)
                }, c.onerror = function(t) {
                    switch (t.target.error.code) {
                        case t.target.error.NOT_FOUND_ERR:
                            o(new e.errors.FPError(115));
                            break;
                        case t.target.error.NOT_READABLE_ERR:
                            o(new e.errors.FPError(116));
                            break;
                        case t.target.error.ABORT_ERR:
                            o(new e.errors.FPError(117));
                            break;
                        default:
                            o(new e.errors.FPError(118))
                    }
                }, s || !c.readAsBinaryString ? c.readAsText(t) : c.readAsBinaryString(t)
            },
            o = function(t, r, n, o, i, a) {
                var s = n.mimetype || "text/plain";
                e.ajax.post(e.urls.constructWriteUrl(t, n), {
                    headers: {
                        "Content-Type": s
                    },
                    data: r,
                    processData: !1,
                    json: !0,
                    success: function(t) {
                        o(e.util.standardizeFPFile(t))
                    },
                    error: function(t, r, n) {
                        i("not_found" === t ? new e.errors.FPError(121) : "bad_params" === t ? new e.errors.FPError(122) : "not_authorized" === t ? new e.errors.FPError(403) : new e.errors.FPError(123))
                    },
                    progress: a
                })
            },
            i = function(t, r, n, o, i, a) {
                var s = function(t, r, n) {
                        i("not_found" === t ? new e.errors.FPError(121) : "bad_params" === t ? new e.errors.FPError(122) : "not_authorized" === t ? new e.errors.FPError(403) : new e.errors.FPError(123))
                    },
                    c = function(t) {
                        o(e.util.standardizeFPFile(t))
                    };
                u(r, e.urls.constructWriteUrl(t, n), c, s, a)
            },
            a = function(t, r, n, o, i, a) {
                var s = function(t, r, n) {
                        i("not_found" === t ? new e.errors.FPError(121) : "bad_params" === t ? new e.errors.FPError(122) : "not_authorized" === t ? new e.errors.FPError(403) : new e.errors.FPError(123))
                    },
                    c = function(t) {
                        o(e.util.standardizeFPFile(t))
                    };
                n.mimetype = r.type, u(r, e.urls.constructWriteUrl(t, n), c, s, a)
            },
            s = function(t, r, n, o, i, a) {
                e.ajax.post(e.urls.constructWriteUrl(t, n), {
                    data: {
                        url: r
                    },
                    json: !0,
                    success: function(t) {
                        o(e.util.standardizeFPFile(t))
                    },
                    error: function(t, r, n) {
                        i("not_found" === t ? new e.errors.FPError(121) : "bad_params" === t ? new e.errors.FPError(122) : "not_authorized" === t ? new e.errors.FPError(403) : new e.errors.FPError(123))
                    },
                    progress: a
                })
            },
            c = function(t, r, n, o, i) {
                if (t.files) return void(0 === t.files.length ? o(new e.errors.FPError(115)) : l(t.files[0], r, n, o, i));
                e.util.setDefault(r, "location", "S3"), r.filename || (r.filename = t.value.replace("C:\\fakepath\\", "") || t.name);
                var a = t.name;
                t.name = "fileUpload", e.iframeAjax.post(e.urls.constructStoreUrl(r), {
                    data: t,
                    processData: !1,
                    json: !0,
                    success: function(r) {
                        t.name = a, n(e.util.standardizeFPFile(r))
                    },
                    error: function(t, r, n) {
                        o("not_found" === t ? new e.errors.FPError(121) : "bad_params" === t ? new e.errors.FPError(122) : "not_authorized" === t ? new e.errors.FPError(403) : new e.errors.FPError(123))
                    }
                })
            },
            l = function(t, r, n, o, i) {
                e.util.setDefault(r, "location", "S3");
                var a = function(t, r, n) {
                        "not_found" === t ? o(new e.errors.FPError(121)) : "bad_params" === t ? o(new e.errors.FPError(122)) : "not_authorized" === t ? o(new e.errors.FPError(403)) : (e.util.console.error(t), o(new e.errors.FPError(123)))
                    },
                    s = function(t) {
                        n(e.util.standardizeFPFile(t))
                    };
                r.filename || (r.filename = t.name || t.fileName), u(t, e.urls.constructStoreUrl(r), s, a, i)
            },
            u = function(t, r, n, o, i) {
                t.files && (t = t.files[0]);
                var a = !!window.FormData && !!window.XMLHttpRequest;
                if (a) {
                    var s = new window.FormData;
                    s.append("fileUpload", t), e.ajax.post(r, {
                        json: !0,
                        processData: !1,
                        data: s,
                        success: n,
                        error: o,
                        progress: i
                    })
                } else e.iframeAjax.post(r, {
                    data: t,
                    json: !0,
                    success: n,
                    error: o
                })
            },
            d = function(t, r, n, o, i) {
                e.util.setDefault(r, "location", "S3"), e.util.setDefault(r, "mimetype", "text/plain"), e.ajax.post(e.urls.constructStoreUrl(r), {
                    headers: {
                        "Content-Type": r.mimetype
                    },
                    data: t,
                    processData: !1,
                    json: !0,
                    success: function(t) {
                        n(e.util.standardizeFPFile(t))
                    },
                    error: function(t, r, n) {
                        o("not_found" === t ? new e.errors.FPError(121) : "bad_params" === t ? new e.errors.FPError(122) : "not_authorized" === t ? new e.errors.FPError(403) : new e.errors.FPError(123))
                    },
                    progress: i
                })
            },
            p = function(t, r, n, o, i) {
                e.util.setDefault(r, "location", "S3"), e.ajax.post(e.urls.constructStoreUrl(r), {
                    data: {
                        url: e.util.getFPUrl(t)
                    },
                    json: !0,
                    success: function(t) {
                        n(e.util.standardizeFPFile(t))
                    },
                    error: function(t, r, n) {
                        o("not_found" === t ? new e.errors.FPError(151) : "bad_params" === t ? new e.errors.FPError(152) : "not_authorized" === t ? new e.errors.FPError(403) : new e.errors.FPError(153))
                    },
                    progress: i
                })
            },
            f = function(t, r, n, o) {
                var i = ["uploaded", "modified", "created"];
                r.cache !== !0 && (r._cacheBust = e.util.getId()), e.ajax.get(t + "/metadata", {
                    json: !0,
                    data: r,
                    success: function(e) {
                        for (var t = 0; t < i.length; t++) e[i[t]] && (e[i[t]] = new Date(e[i[t]]));
                        n(e)
                    },
                    error: function(t, r, n) {
                        o("not_found" === t ? new e.errors.FPError(161) : "bad_params" === t ? new e.errors.FPError(400) : "not_authorized" === t ? new e.errors.FPError(403) : new e.errors.FPError(162))
                    }
                })
            },
            m = function(t, r, n, o) {
                r.key = e.apikey, e.ajax.post(t + "/remove", {
                    data: r,
                    success: function(e) {
                        n()
                    },
                    error: function(t, r, n) {
                        o("not_found" === t ? new e.errors.FPError(171) : "bad_params" === t ? new e.errors.FPError(400) : "not_authorized" === t ? new e.errors.FPError(403) : new e.errors.FPError(172))
                    }
                })
            };
        return {
            readFromUrl: r,
            readFromFile: n,
            readFromFPUrl: t,
            writeDataToFPUrl: o,
            writeFileToFPUrl: a,
            writeFileInputToFPUrl: i,
            writeUrlToFPUrl: s,
            storeFileInput: c,
            storeFile: l,
            storeUrl: p,
            storeData: d,
            stat: f,
            remove: m
        }
    }), filepicker.extend("iframeAjax", function() {
        var e = this,
            t = "ajax_iframe",
            r = [],
            n = !1,
            o = function(e, t) {
                t.method = "GET", s(e, t)
            },
            i = function(t, r) {
                r.method = "POST", t += (t.indexOf("?") >= 0 ? "&" : "?") + "_cacheBust=" + e.util.getId(), s(t, r)
            },
            a = function() {
                if (r.length > 0) {
                    var e = r.shift();
                    s(e.url, e.options)
                }
            },
            s = function(o, i) {
                if (n) return void r.push({
                    url: o,
                    options: i
                });
                o += (o.indexOf("?") >= 0 ? "&" : "?") + "plugin=" + e.urls.getPlugin() + "&_cacheBust=" + e.util.getId(), o += "&Content-Type=text%2Fhtml", e.comm.openChannel();
                var a;
                try {
                    a = document.createElement('<iframe name="' + t + '">')
                } catch (s) {
                    a = document.createElement("iframe")
                }
                a.id = a.name = t, a.style.display = "none";
                var u = function() {
                    n = !1
                };
                a.attachEvent ? (a.attachEvent("onload", u), a.attachEvent("onerror", u)) : a.onerror = a.onload = u, a.id = t, a.name = t, a.style.display = "none", a.onerror = a.onload = function() {
                    n = !1
                }, document.body.appendChild(a), e.handlers.attach("upload", c(i));
                var d = document.createElement("form");
                d.method = i.method || "GET", d.action = o, d.target = t;
                var p = i.data;
                (e.util.isFileInputElement(p) || e.util.isFile(p)) && (d.encoding = d.enctype = "multipart/form-data"), document.body.appendChild(d);
                var f;
                if (e.util.isFile(p)) {
                    var m = l(p);
                    if (!m) throw e.FilepickerException("Couldn't find corresponding file input.");
                    p = {
                        fileUpload: m
                    }
                } else e.util.isFileInputElement(p) ? (f = p, p = {}, p.fileUpload = f) : p && e.util.isElement(p) && "INPUT" === p.tagName ? (f = p, p = {}, p[f.name] = f) : i.processData !== !1 && (p = {
                    data: p
                });
                p.format = "iframe";
                var h = {};
                for (var g in p) {
                    var v = p[g];
                    if (e.util.isElement(v) && "INPUT" === v.tagName) h[g] = {
                        par: v.parentNode,
                        sib: v.nextSibling,
                        name: v.name,
                        input: v,
                        focused: v === document.activeElement
                    }, v.name = g, d.appendChild(v);
                    else {
                        var w = document.createElement("input");
                        w.name = g, w.value = v, d.appendChild(w)
                    }
                }
                n = !0, window.setTimeout(function() {
                    d.submit();
                    for (var e in h) {
                        var t = h[e];
                        t.par.insertBefore(t.input, t.sib), t.input.name = t.name, t.focused && t.input.focus()
                    }
                    d.parentNode.removeChild(d)
                }, 1)
            },
            c = function(t) {
                var r = t.success || function() {},
                    o = t.error || function() {},
                    i = function(t) {
                        if ("Upload" === t.type) {
                            n = !1;
                            var i = t.payload;
                            i.error ? o(i.error) : r(i), e.handlers.detach("upload"), a()
                        }
                    };
                return i
            },
            l = function(e) {
                for (var t = document.getElementsByTagName("input"), r = 0; r < t.length; r++) {
                    var n = t[0];
                    if ("file" === n.type && n.files && n.files.length)
                        for (var o = 0; o < n.files.length; o++)
                            if (n.files[o] === e) return n
                }
                return null
            };
        return {
            get: o,
            post: i,
            request: s
        }
    }), filepicker.extend("base64", function() {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            t = function(t, r) {
                r = r || void 0 === r;
                var o, i, a, s, c, l, u, d = "",
                    p = 0;
                for (r && (t = n(t)); p < t.length;) o = t.charCodeAt(p), i = t.charCodeAt(p + 1), a = t.charCodeAt(p + 2), p += 3, s = o >> 2, c = (3 & o) << 4 | i >> 4, l = (15 & i) << 2 | a >> 6, u = 63 & a, isNaN(i) ? l = u = 64 : isNaN(a) && (u = 64), d = d + e.charAt(s) + e.charAt(c) + e.charAt(l) + e.charAt(u);
                return d
            },
            r = function(t, r) {
                r = r || void 0 === r;
                var n, i, a, s, c, l, u, d = "",
                    p = 0;
                for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); p < t.length;) s = e.indexOf(t.charAt(p)), c = e.indexOf(t.charAt(p + 1)), l = e.indexOf(t.charAt(p + 2)), u = e.indexOf(t.charAt(p + 3)), p += 4, n = s << 2 | c >> 4, i = (15 & c) << 4 | l >> 2, a = (3 & l) << 6 | u, d += String.fromCharCode(n), 64 != l && (d += String.fromCharCode(i)), 64 != u && (d += String.fromCharCode(a));
                return r && (d = o(d)), d
            },
            n = function(e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t = "", r = 0; r < e.length; r++) {
                    var n = e.charCodeAt(r);
                    128 > n ? t += String.fromCharCode(n) : n > 127 && 2048 > n ? (t += String.fromCharCode(n >> 6 | 192), t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224), t += String.fromCharCode(n >> 6 & 63 | 128), t += String.fromCharCode(63 & n | 128))
                }
                return t
            },
            o = function(e) {
                for (var t = "", r = 0, n = 0, o = 0; r < e.length;) n = e.charCodeAt(r), 128 > n ? (t += String.fromCharCode(n), r++) : n > 191 && 224 > n ? (o = e.charCodeAt(r + 1), t += String.fromCharCode((31 & n) << 6 | 63 & o), r += 2) : (o = e.charCodeAt(r + 1), c3 = e.charCodeAt(r + 2), t += String.fromCharCode((15 & n) << 12 | (63 & o) << 6 | 63 & c3), r += 3);
                return t
            };
        return {
            encode: t,
            decode: r
        }
    }, !0), filepicker.extend("browser", function() {
        var e = function() {
                return !!(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i))
            },
            t = function() {
                return !!navigator.userAgent.match(/Android/i)
            },
            r = function() {
                var e = window.navigator.userLanguage || window.navigator.language;
                return void 0 === e && (e = "en"), e = e.replace("-", "_").toLowerCase()
            };
        return {
            getLanguage: r,
            openInModal: function() {
                return !(e() || t()) || !!window.navigator.standalone
            },
            isMobile: function() {
                return e() || t()
            }
        }
    }), filepicker.extend("conversionsUtil", function() {
        var e = this,
            t = e.urls.BASE.replace("www", "process") + "/",
            r = function(e) {
                if (!e) return {
                    url: null,
                    optionsDict: {}
                };
                e = e.replace(t, "");
                var r = e.substring(e.indexOf("/http") + 1);
                e = e.replace("/" + r, "");
                var n = e.substring(0, e.indexOf("/"));
                e = e.replace(n + "/", "");
                var o, i, a, s, c, l = e.split("/"),
                    u = {};
                for (s in l)
                    if (o = l[s].split("="), o.length > 1) {
                        u[o[0]] = {}, i = o[1].split(",");
                        for (c in i) a = i[c].split(":"), a.length > 1 && (u[o[0]][a[0]] = a[1])
                    } else l[s] && (u[l[s]] = null);
                return {
                    url: r,
                    apikey: n,
                    optionsDict: u
                }
            },
            n = function(r, n, o) {
                var i, a, s, c = t + o;
                n = n || {};
                for (i in n) {
                    c += "/" + i, s = e.util.objectKeys(n[i] || {}).length, s && (c += "=");
                    for (a in n[i]) c += a + ":" + n[i][a], 0 !== --s && (c += ",")
                }
                return c += "/" + r
            };
        return {
            CONVERSION_DOMAIN: t,
            parseUrl: r,
            buildUrl: n
        }
    }), filepicker.extend("json", function() {
        var fp = this,
            special = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            escape = function(e) {
                return special[e] || "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            },
            validate = function(e) {
                return e = e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""), /^[\],:{}\s]*$/.test(e)
            },
            encode = function(e) {
                if (window.JSON && window.JSON.stringify) return window.JSON.stringify(e);
                e && e.toJSON && (e = e.toJSON());
                var t = [];
                switch (fp.util.typeOf(e)) {
                    case "string":
                        return '"' + e.replace(/[\x00-\x1f\\"]/g, escape) + '"';
                    case "array":
                        for (var r = 0; r < e.length; r++) t.push(encode(e[r]));
                        return "[" + t + "]";
                    case "object":
                    case "hash":
                        var n, o;
                        for (o in e) n = encode(e[o]), n && t.push(encode(o) + ":" + n), n = null;
                        return "{" + t + "}";
                    case "number":
                    case "boolean":
                        return "" + e;
                    case "null":
                        return "null";
                    default:
                        return "null"
                }
                return null
            },
            decode = function(string, secure) {
                if (!string || "string" !== fp.util.typeOf(string)) return null;
                if (window.JSON && window.JSON.parse) return window.JSON.parse(string);
                if (secure && !validate(string)) throw new Error("JSON could not decode the input; security is enabled and the value is not secure.");
                return eval("(" + string + ")")
            };
        return {
            validate: validate,
            encode: encode,
            stringify: encode,
            decode: decode,
            parse: decode
        }
    }), filepicker.extend("util", function() {
        var e = function(e) {
                return e.replace(/^\s+|\s+$/g, "")
            },
            t = function(e) {
                return e.replace(/\/convert\b.*/, "")
            },
            r = /^(http|https)\:.*\/\//i,
            n = function(e) {
                return !!e.match(r)
            },
            o = function(e) {
                e && "/" !== e.charAt(0) || (e = window.location.protocol + "//" + window.location.host + e);
                var t = document.createElement("a");
                t.href = e;
                var r = -1 === t.hostname.indexOf(":") ? t.hostname : t.host,
                    n = {
                        source: e,
                        protocol: t.protocol.replace(":", ""),
                        host: r,
                        port: t.port,
                        query: t.search,
                        params: function() {
                            for (var e, r = {}, n = t.search.replace(/^\?/, "").split("&"), o = n.length, i = 0; o > i; i++) n[i] && (e = n[i].split("="), r[e[0]] = e[1]);
                            return r
                        }(),
                        file: (t.pathname.match(/\/([^\/?#]+)$/i) || [void 0, ""])[1],
                        hash: t.hash.replace("#", ""),
                        path: t.pathname.replace(/^([^\/])/, "/$1"),
                        relative: (t.href.match(/tps?:\/\/[^\/]+(.+)/) || [void 0, ""])[1],
                        segments: t.pathname.replace(/^\//, "").split("/")
                    };
                return n.origin = n.protocol + "://" + n.host + (n.port ? ":" + n.port : ""), n.rawUrl = (n.origin + n.path).replace("/convert", ""), n
            },
            i = function(e, t) {
                return -1 !== e.indexOf(t, e.length - t.length)
            },
            a = function(e, t, r) {
                return e + (e.indexOf("?") >= 0 ? "&" : "?") + t + "=" + r
            };
        return {
            trim: e,
            trimConvert: t,
            parseUrl: o,
            isUrl: n,
            endsWith: i,
            appendQueryToUrl: a
        }
    }), filepicker.extend("util", function() {
        var e = this,
            t = function(e) {
                return e && "[object Array]" === Object.prototype.toString.call(e)
            },
            r = function(e) {
                return e && ("[object File]" === Object.prototype.toString.call(e) || "[object Blob]" === Object.prototype.toString.call(e))
            },
            n = function(e) {
                return "object" == typeof window.HTMLElement ? e instanceof window.HTMLElement : e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName
            },
            o = function(e) {
                return n(e) && "INPUT" === e.tagName && "file" === e.type
            },
            i = function(e) {
                return null === e ? "null" : t(e) ? "array" : r(e) ? "file" : typeof e
            },
            a = function() {
                var e = new Date;
                return e.getTime().toString()
            },
            s = function(e, t, r) {
                void 0 === e[t] && (e[t] = r)
            },
            c = function(e) {
                if (window.jQuery) window.jQuery(function() {
                    e()
                });
                else {
                    var t = "load";
                    if (window.addEventListener) window.addEventListener(t, e, !1);
                    else if (window.attachEvent) window.attachEvent("on" + t, e);
                    else if (window.onload) {
                        var r = window.onload;
                        window.onload = function() {
                            r(), e()
                        }
                    } else window.onload = e
                }
            },
            l = function(t) {
                return "string" == typeof t && t.match(e.urls.BASE + "/api/file/")
            },
            u = function(e) {
                return "string" == typeof e && e.match("/api/file/")
            },
            d = function(t) {
                if ("string" == typeof t) {
                    var r = t.match(/(?:^https?:\/\/cdn.filestackcontent.com|^https?:\/\/cdn.filepicker.io)[\S]*\/([\S]{20,})/);
                    if (r && r.length > 1) return e.urls.BASE + "/api/file/" + r[1]
                }
                return t
            },
            p = function(e) {
                return function() {
                    if (window.console && "function" == typeof window.console[e]) try {
                        window.console[e].apply(window.console, arguments)
                    } catch (t) {
                        window.alert(Array.prototype.join.call(arguments, ","))
                    }
                }
            },
            f = {};
        f.log = p("log"), f.error = p("error");
        var m = function(e) {
                var t = {};
                for (var r in e) t[r] = e[r];
                return t
            },
            h = function(e) {
                var t = {};
                return t.url = e.url, t.filename = e.filename || e.name, t.mimetype = e.mimetype || e.type, t.size = e.size, t.key = e.key || e.s3_key, t.isWriteable = !(!e.isWriteable && !e.writeable), t
            },
            g = function() {
                try {
                    var e = document.createElement("canvas");
                    return !(!e.getContext || !e.getContext("2d"))
                } catch (t) {
                    return !1
                }
            },
            v = function(e, t) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                return t
            },
            w = function() {
                if (!e.apikey) throw new e.FilepickerException("API Key not found")
            },
            y = function(e) {
                return "function" != typeof Object.keys ? function(e) {
                    var t = [];
                    for (var r in e) e.hasOwnProperty(r) && t.push(r);
                    return t
                } : Object.keys(e)
            };
        return {
            isArray: t,
            isFile: r,
            isElement: n,
            isFileInputElement: o,
            getId: a,
            setDefault: s,
            typeOf: i,
            addOnLoad: c,
            isFPUrl: l,
            getFPUrl: d,
            isFPUrlCdn: u,
            console: f,
            clone: m,
            standardizeFPFile: h,
            isCanvasSupported: g,
            extend: v,
            checkApiKey: w,
            objectKeys: y
        }
    }), filepicker.extend("windowUtils", function() {
        function e() {
            return document.documentElement.clientWidth || document.body && document.body.clientWidth || 1024
        }

        function t() {
            return document.documentElement.clientHeight || document.body && document.body.clientHeight || 768
        }
        return {
            getWidth: e,
            getHeight: t
        }
    }), filepicker.extend("dragdrop", function() {
        var e = this,
            t = function() {
                return (!!window.FileReader || navigator.userAgent.indexOf("Safari") >= 0) && "draggable" in document.createElement("span")
            },
            r = function(r, n) {
                function o(t) {
                    var r = A(0, 1),
                        n = e.util.clone(t);
                    n.name = n.filename, C([n]) ? r(t) : e.files.remove(t.url, w, function() {}, function() {})
                }

                function i(t) {
                    var n, o = t.length;
                    if (C(t))
                        for (d(t), r.setAttribute("disabled", "disabled"), n = 0; n < t.length; n++) e.store(t[n], w, A(n, o), F, k(n, o))
                }

                function a(t) {
                    var r = k(0, 1);
                    e.storeUrl(t, o, F, r)
                }

                function s(e) {
                    var t, r, n;
                    if (e.dataTransfer.items)
                        for (r = e.dataTransfer.items, n = 0; n < r.length; n++)
                            if (t = r[n] && r[n].webkitGetAsEntry ? r[n].webkitGetAsEntry() : void 0, t && t.isDirectory) return f("WrongType", "Uploading a folder is not allowed"), !0;
                    return !1
                }
                var c = "No DOM element found to create drop pane";
                if (!r) throw new e.FilepickerException(c);
                if (r.jquery) {
                    if (0 === r.length) throw new e.FilepickerException(c);
                    r = r[0]
                }
                if (!t()) return e.util.console.error("Your browser doesn't support drag-drop functionality"), !1;
                n = n || {};
                var l = n.dragEnter || function() {},
                    u = n.dragLeave || function() {},
                    d = n.onStart || function() {},
                    p = n.onSuccess || function() {},
                    f = n.onError || function() {},
                    m = n.onProgress || function() {},
                    h = n.mimetypes;
                h || (h = n.mimetype ? [n.mimetype] : ["*/*"]), "string" === e.util.typeOf(h) && (h = h.split(","));
                var g = n.extensions;
                if (g || n.extension && (g = [n.extension]), "string" === e.util.typeOf(g) && (g = g.replace(/ /g, "").split(",")), g)
                    for (var v = 0; v < g.length; v++) g[v] = g[v].toLowerCase();
                var w = {
                        location: n.location,
                        path: n.path,
                        container: n.container,
                        access: n.access,
                        policy: n.policy,
                        signature: n.signature
                    },
                    y = function() {
                        return r && "disabled" !== (r.getAttribute("disabled") || "enabled")
                    };
                r.addEventListener("dragenter", function(e) {
                    return y() && l(), e.stopPropagation(), e.preventDefault(), !1
                }, !1), r.addEventListener("dragleave", function(e) {
                    return y() && u(), e.stopPropagation(), e.preventDefault(), !1
                }, !1), r.addEventListener("dragover", function(e) {
                    return e.dataTransfer.dropEffect = "copy", e.preventDefault(), !1
                }, !1), r.addEventListener("drop", function(e) {
                    if (e.stopPropagation(), e.preventDefault(), !y()) return !1;
                    if (s(e)) return !1;
                    var t = e.dataTransfer.files,
                        r = _(e.dataTransfer);
                    return t.length ? i(t) : r ? a(r) : f("NoFilesFound", "No files uploaded"), !1
                });
                var b = function() {
                        r.setAttribute("disabled", "enabled"), window.$ && window.$(r).prop("disabled", !1)
                    },
                    x = {},
                    E = [],
                    A = function(e, t) {
                        return function(r) {
                            n.multiple ? (E.push(r), E.length === t ? (p(E), E = [], x = {}) : (x[e] = 100, P(t))) : p([r]), b()
                        }
                    },
                    F = function(e) {
                        f("UploadError", e.toString()), b()
                    },
                    k = function(e, t) {
                        return function(r) {
                            x[e] = r, P(t)
                        }
                    },
                    P = function(e) {
                        var t = 0;
                        for (var r in x) t += x[r];
                        var n = t / e;
                        m(n)
                    },
                    C = function(t) {
                        if (t.length > 0) {
                            if (t.length > 1 && !n.multiple) return f("TooManyFiles", "Only one file at a time"), !1;
                            if (n.maxFiles > 0 && t.length > n.maxFiles) return f("TooManyFiles", "Only " + n.maxFiles + " files at a time"), !1;
                            for (var r, o, i, a = 0; a < t.length; a++) {
                                r = !1, o = t[a], i = o.name || o.fileName || "Unknown file";
                                for (var s = 0; s < h.length; s++) {
                                    var c = e.mimetypes.getMimetype(o);
                                    r = r || e.mimetypes.matchesMimetype(c, h[s])
                                }
                                if (!r) return f("WrongType", i + " isn't the right type of file"), !1;
                                if (g) {
                                    for (r = !1, s = 0; s < g.length; s++) r = r || e.util.endsWith(i, g[s]);
                                    if (!r) return f("WrongType", i + " isn't the right type of file"), !1
                                }
                                if (o.size && n.maxSize && o.size > n.maxSize) return f("WrongSize", i + " is too large (" + o.size + " Bytes)"), !1
                            }
                            return !0
                        }
                        return f("NoFilesFound", "No files uploaded"), !1
                    },
                    _ = function(t) {
                        var r, n;
                        if (t && "function" == typeof t.getData) {
                            r = t.getData("text");
                            try {
                                r = r || t.getData("text/html")
                            } catch (o) {
                                e.util.console.error(o)
                            }
                            r && !e.util.isUrl(r) && (n = r.match(/<img.*?src="(.*?)"/i), r = n && n.length > 1 ? n[1] : null)
                        }
                        return r
                    };
                return !0
            };
        return {
            enabled: t,
            makeDropPane: r
        }
    }), filepicker.extend("responsiveImages", function() {
        function e() {
            n(), w(k)
        }

        function t() {
            y(k)
        }

        function r(e) {
            if (void 0 !== e) {
                if ("IMG" !== e.nodeName) throw new A.FilepickerException("Passed object is not an image");
                h(e)
            } else n(!0)
        }

        function n(e) {
            var t, r, n = document.querySelectorAll("img[data-fp-src]");
            for (r = 0; r < n.length; r++) t = n[r], (o(t) || e === !0) && h(t)
        }

        function o(e) {
            var t = l(e),
                r = s(e) || b().onResize || "all";
            if (!t || "all" === r) return !0;
            if ("none" === r) return !1;
            var n = m(t).width < i(e).width;
            return n && "up" === r || !n && "down" === r ? !0 : !1
        }

        function i(e) {
            var t = {};
            return null === e.parentNode ? (t.width = A.windowUtils.getWidth(), t.height = A.windowUtils.getWidth(), t) : e.alt && !e.fpAltCheck ? (e.parentNode.fpAltCheck = !0, i(e.parentNode)) : (t.width = e.offsetWidth, t.height = e.offsetHeight, t.width ? t : i(e.parentNode))
        }

        function a(e, t) {
            var r = l(e) || u(e);
            r !== t && (e.src = t, r && (e.onerror = function() {
                e.src = r, e.onerror = null
            }))
        }

        function s(e) {
            return e.getAttribute("data-fp-on-resize")
        }

        function c(e) {
            return e.getAttribute("data-fp-pixel-round")
        }

        function l(e) {
            return e.getAttribute("src")
        }

        function u(e) {
            return e.getAttribute("data-fp-src")
        }

        function d(e) {
            return e.getAttribute("data-fp-apikey")
        }

        function p(e) {
            return e.getAttribute("data-fp-signature")
        }

        function f(e) {
            return e.getAttribute("data-fp-policy")
        }

        function m(e) {
            return A.conversionsUtil.parseUrl(e).optionsDict.resize || {}
        }

        function h(e) {
            var t = u(e) || l(e),
                r = d(e) || A.apikey,
                n = b();
            A.apikey || (A.setKey(r), A.util.checkApiKey()), a(e, A.conversionsUtil.buildUrl(t, g(e, n), r))
        }

        function g(e, t) {
            t = t || {};
            var r = i(e),
                n = c(e) || t.pixelRound || 10,
                o = {
                    resize: {
                        width: E(r.width, n)
                    }
                },
                a = t.signature || p(e);
            return a && (o.security = {
                signature: a,
                policy: t.policy || f(e)
            }), o
        }

        function v(e, t) {
            var r;
            return function() {
                var n = this,
                    o = arguments,
                    i = function() {
                        r = null, e.apply(n, o)
                    };
                clearTimeout(r), r = setTimeout(i, t)
            }
        }

        function w(e) {
            window.addEventListener ? window.addEventListener("resize", e, !1) : window.attachEvent && window.attachEvent("onresize", e)
        }

        function y(e) {
            window.removeEventListener ? window.removeEventListener("resize", e, !1) : window.detachEvent && window.detachEvent("onresize", e)
        }

        function b() {
            return A.responsiveOptions || {}
        }

        function x(e) {
            if (e = e || {}, "object" != typeof e) throw new A.FilepickerException("Responsive options must be an object.");
            A.responsiveOptions = e
        }

        function E(e, t) {
            var r = 0 === t ? 1 : t;
            return Math.ceil(e / r) * r
        }
        var A = this,
            F = 200,
            k = v(function() {
                n()
            }, F);
        return {
            activate: e,
            deactivate: t,
            update: r,
            setResponsiveOptions: x,
            getResponsiveOptions: b,
            getElementDims: i,
            replaceSrc: a,
            getCurrentResizeParams: m,
            construct: h,
            constructParams: g,
            shouldConstruct: o,
            roundWithStep: E,
            addWindowResizeEvent: w,
            removeWindowResizeEvent: y
        }
    }), filepicker.extend("widgets", function() {
        function e() {
            try {
                var e = '.fp__btn{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:inline-block;height:34px;padding:4px 30px 5px 40px;position:relative;margin-bottom:0;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Open Sans", sans-serif;font-size:12px;font-weight:600;line-height:1.42857143;color:#fff;text-align:center;white-space:nowrap;background:#ef4925;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAVCAYAAABLy77vAAAABGdBTUEAALGPC/xhBQAAAJRJREFUOBHNUcEWgCAIy14fbl9egK5MRarHQS7ocANmOCgWh1gdNERig1CgwPlLxkZuE80ndHlU+4Lda1zz0m01dSKtcz0h7qpQb7WR+HyrqRPxahzwwMqqkEVs6qnv+86NQAbcJlK/X+vMeMe7XcBOYaRzcbItUR7/8QgcykmElQrQPErnmxNxl2yyiwcgEvQUocIJaE6yERwqXDIAAAAASUVORK5CYII=");background-repeat:no-repeat;background-position:15px 6px;border:1px solid transparent;border-radius:17px}.fp__btn:hover{background-color:#d64533}.fp__btn::after{position:absolute;content:"";top:15px;right:14px;width:7px;height:4px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAABGdBTUEAALGPC/xhBQAAAGlJREFUCB1j/P//vw4DA4MiEKOD+0xAkatA/AJNBsS/ysTIyPgfyDgHxO+hCkD0Oag4RAhoPDsQm4NoqCIGBiBnAhBjAxNAkkxAvBZNFsQHuQesmxPIOQZVAKI54UZDFYgABbcBsQhMAgDIVGYSqZsn6wAAAABJRU5ErkJggg==");}.fp__btn:hover::after{background-position:0 -4px;}.fp__btn:active,.fp__btn:focus{outline:none}@media only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2 / 1), only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2){.fp__btn{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAqCAYAAADbCvnoAAAABGdBTUEAALGPC/xhBQAAAQFJREFUWAntWEESwjAIbBwfHl+upNoRNjKUJhk5kIvZQGG7bHOwPGltgdYtEJedShKyJnLHhEILz1Zi9HCOzFI7FUqFLAWseDgPdfeQ9QZ4b1j53nstnEJJyBqx20NeT1gEMB5uZG6Fzn5lV5UMp1ASQhMjdnvoqjewsYbDjcytEH5lsxULp1AS0sx8nJfVnjganf3NkVlKhVPIfQ9Zb6jF0atK3mNriXwpicPHvIeyr3sTDA53VgpgH8BvMu1ZCCz7ew/7MPwlE4CQJPNnQj2ZX4SYlEPbVpsvKFZ5TOwhcRoUTQiwwhVjArPEqVvRhMCneMXzDk9lwYphIwrZZOihF32oehMAa1qSAAAAAElFTkSuQmCC");background-size:18px 21px}.fp__btn::after{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAABGdBTUEAALGPC/xhBQAAANpJREFUKBWVkU8KglAYxJ/u3HuBwmUX8BqepKN4ka4RguDOVYu2QVCrhIJ6/caekqLiGxi+PzPD58PAWrszxmygD84h7hpePFLy1mEQBJamgvcVYXkqZXTR0LwpJWw0z0Ba6bymDcrI4kkp4EvzCNoVztNKfVATwoOiyx/NDup1SVqPQVBbDDeK3txBb9JuHfhNW3HWjZhDX+SGRAgPHkl5f0+kieBxRVieaPD5LGJ4WghLiwehbkBI4HUirF3S+SYrhhQ2f2H16aR5vMSYwbdjNtYXZ0J7cc70BXnFMHIGznzEAAAAAElFTkSuQmCC");background-size:7px 8px;}}',
                    t = document.head || document.getElementsByTagName("head")[0],
                    r = document.createElement("style");
                r.type = "text/css", r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e)), t.appendChild(r)
            } catch (n) {}
        }
        var t = this,
            r = function(e, t, r, n) {
                var o = n.getAttribute(r);
                o && (t[e] = o)
            },
            n = function(e, t) {
                var r;
                document.createEvent ? (r = document.createEvent("Event"), r.initEvent("change", !0, !1), r.fpfile = t ? t[0] : void 0, r.fpfiles = t, e.dispatchEvent(r)) : document.createEventObject ? (r = document.createEventObject("Event"), r.eventPhase = 2, r.currentTarget = r.srcElement = r.target = e, r.fpfile = t ? t[0] : void 0, r.fpfiles = t, e.fireEvent("onchange", r)) : e.onchange && e.onchange(t)
            },
            o = function(e, t) {
                t[e] && (t[e] = t[e].split(","))
            },
            i = function(e, t, n) {
                for (var o in n) r(n[o], e, o, t)
            },
            a = function(e, n) {
                n = n || "pick";
                var a = {},
                    s = {
                        "data-fp-container": "container",
                        "data-fp-mimetype": "mimetype",
                        "data-fp-extension": "extension",
                        "data-fp-openTo": "openTo",
                        "data-fp-debug": "debug",
                        "data-fp-signature": "signature",
                        "data-fp-policy": "policy",
                        "data-fp-language": "language",
                        "data-fp-background-upload": "backgroundUpload",
                        "data-fp-hide": "hide",
                        "data-fp-custom-css": "customCss",
                        "data-fp-crop-force": "cropForce",
                        "data-fp-crop-ratio": "cropRatio",
                        "data-fp-crop-dim": "cropDim",
                        "data-fp-crop-max": "cropMax",
                        "data-fp-crop-min": "cropMin",
                        "data-fp-show-close": "showClose",
                        "data-fp-conversions": "conversions",
                        "data-fp-custom-text": "customText",
                        "data-fp-custom-source-container": "customSourceContainer",
                        "data-fp-custom-source-path": "customSourcePath"
                    },
                    c = {
                        "data-fp-mimetypes": "mimetypes",
                        "data-fp-extensions": "extensions",
                        "data-fp-maxSize": "maxSize",
                        "data-fp-maxFiles": "maxFiles",
                        "data-fp-store-location": "storeLocation",
                        "data-fp-store-path": "storePath",
                        "data-fp-store-container": "storeContainer",
                        "data-fp-store-region": "storeRegion",
                        "data-fp-store-cloudinary-upload-preset": "cloudinaryUploadPreset",
                        "data-fp-store-access": "storeAccess",
                        "data-fp-image-quality": "imageQuality",
                        "data-fp-image-dim": "imageDim",
                        "data-fp-image-max": "imageMax",
                        "data-fp-image-min": "imageMin"
                    },
                    l = {
                        "data-fp-video-recording-resolution": "videoRes",
                        "data-fp-webcam-dim": "webcamDim",
                        "data-fp-video-length": "videoLen",
                        "data-fp-audio-length": "audioLen"
                    };
                i(a, e, s), "export" === n ? r("suggestedFilename", a, "data-fp-suggestedFilename", e) : "pick" === n && (i(a, e, c), a.webcam = {}, i(a.webcam, e, l));
                var u = e.getAttribute("data-fp-services");
                if (u) {
                    u = u.split(",");
                    for (var d = 0; d < u.length; d++) u[d] = t.services[u[d].replace(" ", "")] || u[d];
                    a.services = u
                }
                var p = e.getAttribute("data-fp-service");
                p && (a.service = t.services[p.replace(" ", "")] || p);
                var f = ["extensions", "mimetypes", "imageDim", "imageMin", "imageMax", "cropDim", "cropMax", "cropMin", "webcamDim", "conversions"];
                for (var m in f) o(f[m], a);
                var h = e.getAttribute("data-fp-apikey");
                return h && t.setKey(h), a.folders = "true" === e.getAttribute("data-fp-folders"), a
            },
            s = function(e) {
                return "true" === e.getAttribute("data-fp-multiple")
            },
            c = function(e) {
                var r = document.createElement("button");
                r.setAttribute("type", "button"), r.innerHTML = e.getAttribute("data-fp-button-text") || "Pick File", r.className = e.getAttribute("data-fp-button-class") || e.className || "fp__btn", e.style.display = "none";
                var o = a(e);
                s(e) ? r.onclick = function() {
                    return r.blur(), t.pickMultiple(o, function(t) {
                        for (var r = [], o = 0; o < t.length; o++) r.push(t[o].url);
                        e.value = r.join(), n(e, t)
                    }), !1
                } : r.onclick = function() {
                    return r.blur(), t.pick(o, function(t) {
                        e.value = t.url, n(e, [t])
                    }), !1
                }, e.parentNode.insertBefore(r, e.nextSibling)
            },
            l = function(e) {
                var r = e.getAttribute("data-fp-url");
                if (!r) return !0;
                var o = document.createElement("button");
                o.setAttribute("type", "button"), o.innerHTML = e.getAttribute("data-fp-button-text") || "Convert File", o.className = e.getAttribute("data-fp-button-class") || e.className || "fp__btn", e.style.display = "none";
                var i = a(e, "convert");
                o.onclick = function() {
                    return o.blur(), t.processImage(r, i, function(t) {
                        e.value = t.url, n(e, [t])
                    }), !1
                }, e.parentNode.insertBefore(o, e.nextSibling)
            },
            u = function(e) {
                var r = document.createElement("div");
                r.className = e.getAttribute("data-fp-class") || e.className, r.style.padding = "1px", e.style.display = "none", e.parentNode.insertBefore(r, e.nextSibling);
                var o = document.createElement("button");
                o.setAttribute("type", "button"), o.innerHTML = e.getAttribute("data-fp-button-text") || "Pick File", o.className = e.getAttribute("data-fp-button-class") || "fp__btn", r.appendChild(o);
                var i = document.createElement("div");
                p(i), i.innerHTML = e.getAttribute("data-fp-drag-text") || "Or drop files here", i.className = e.getAttribute("data-fp-drag-class") || "", r.appendChild(i);
                var c = a(e),
                    l = s(e);
                t.dragdrop.enabled() ? f(i, l, c, e) : i.innerHTML = "&nbsp;", l ? i.onclick = o.onclick = function() {
                    return o.blur(), t.pickMultiple(c, function(t) {
                        for (var r = [], o = [], a = 0; a < t.length; a++) r.push(t[a].url), o.push(t[a].filename);
                        e.value = r.join(), d(e, i, o.join(", ")), n(e, t)
                    }), !1
                } : i.onclick = o.onclick = function() {
                    return o.blur(), t.pick(c, function(t) {
                        e.value = t.url, d(e, i, t.filename), n(e, [t])
                    }), !1
                }
            },
            d = function(e, r, o) {
                r.innerHTML = o, r.style.padding = "2px 4px", r.style.cursor = "default", r.style.width = "";
                var i = document.createElement("span");
                i.innerHTML = "X", i.style.borderRadius = "8px", i.style.fontSize = "14px", i.style.cssFloat = "right", i.style.padding = "0 3px", i.style.color = "#600", i.style.cursor = "pointer";
                var a = function(o) {
                    return o || (o = window.event), o.cancelBubble = !0, o.stopPropagation && o.stopPropagation(), p(r), t.dragdrop.enabled ? r.innerHTML = e.getAttribute("data-fp-drag-text") || "Or drop files here" : r.innerHTML = "&nbsp;", e.value = "", n(e), !1
                };
                i.addEventListener ? i.addEventListener("click", a, !1) : i.attachEvent && i.attachEvent("onclick", a), r.appendChild(i)
            },
            p = function(e) {
                e.style.border = "1px dashed #AAA", e.style.display = "inline-block", e.style.margin = "0 0 0 4px", e.style.borderRadius = "3px", e.style.backgroundColor = "#F3F3F3", e.style.color = "#333", e.style.fontSize = "14px", e.style.lineHeight = "22px", e.style.padding = "2px 4px", e.style.verticalAlign = "middle", e.style.cursor = "pointer", e.style.overflow = "hidden"
            },
            f = function(e, r, o, i) {
                var a, s = e.innerHTML;
                t.dragdrop.makeDropPane(e, {
                    multiple: r,
                    maxSize: o.maxSize,
                    mimetypes: o.mimetypes,
                    mimetype: o.mimetype,
                    extensions: o.extensions,
                    extension: o.extension,
                    location: o.storeLocation,
                    path: o.storePath,
                    container: o.storeContainer,
                    region: o.storeRegion,
                    cloudinaryUploadPreset: o.cloudinaryUploadPreset,
                    access: o.storeAccess,
                    policy: o.policy,
                    signature: o.signature,
                    dragEnter: function() {
                        e.innerHTML = "Drop to upload", e.style.backgroundColor = "#E0E0E0", e.style.border = "1px solid #000"
                    },
                    dragLeave: function() {
                        e.innerHTML = s, e.style.backgroundColor = "#F3F3F3", e.style.border = "1px dashed #AAA"
                    },
                    onError: function(t, r) {
                        "TooManyFiles" === t ? e.innerHTML = r : "WrongType" === t ? e.innerHTML = r : "NoFilesFound" === t ? e.innerHTML = r : "UploadError" === t && (e.innerHTML = "Oops! Had trouble uploading.")
                    },
                    onStart: function(t) {
                        a = m(e)
                    },
                    onProgress: function(e) {
                        a && (a.style.width = e + "%")
                    },
                    onSuccess: function(t) {
                        for (var r = [], o = [], a = 0; a < t.length; a++) r.push(t[a].url), o.push(t[a].filename);
                        i.value = r.join(), d(i, e, o.join(", ")), n(i, t)
                    }
                })
            },
            m = function(e) {
                var t = document.createElement("div"),
                    r = e.offsetHeight - 2;
                return t.style.height = r + "px", t.style.backgroundColor = "#0E90D2", t.style.width = "2%", t.style.borderRadius = "3px", e.style.width = e.offsetWidth + "px", e.style.padding = "0", e.style.border = "1px solid #AAA", e.style.backgroundColor = "#F3F3F3", e.style.boxShadow = "inset 0 1px 2px rgba(0, 0, 0, 0.1)", e.innerHTML = "", e.appendChild(t), t
            },
            h = function(e) {
                e.onclick = function() {
                    var r = e.getAttribute("data-fp-url");
                    if (!r) return !0;
                    var n = a(e, "export");
                    return t.exportFile(r, n), !1
                }
            },
            g = function() {
                if (document.querySelectorAll) {
                    var t, r = document.querySelectorAll('input[type="filepicker"]');
                    for (t = 0; t < r.length; t++) c(r[t]);
                    var n = document.querySelectorAll('input[type="filepicker-dragdrop"]');
                    for (t = 0; t < n.length; t++) u(n[t]);
                    var o = document.querySelectorAll('input[type="filepicker-convert"]');
                    for (t = 0; t < o.length; t++) l(o[t]);
                    var i = [],
                        a = document.querySelectorAll("button[data-fp-url]");
                    for (t = 0; t < a.length; t++) i.push(a[t]);
                    for (a = document.querySelectorAll("a[data-fp-url]"), t = 0; t < a.length; t++) i.push(a[t]);
                    for (a = document.querySelectorAll('input[type="button"][data-fp-url]'), t = 0; t < a.length; t++) i.push(a[t]);
                    for (t = 0; t < i.length; t++) h(i[t]);
                    var s = document.querySelectorAll('[type="filepicker-preview"][data-fp-url]');
                    for (t = 0; t < s.length; t++) w(s[t]);
                    e()
                }
            },
            v = function(e) {
                e.jquery && (e = e[0]);
                var r = e.getAttribute("type");
                "filepicker" === r ? c(e) : "filepicker-dragdrop" === r ? u(e) : "filepicker-preview" === r ? w(e) : e.getAttribute("data-fp-src") ? t.responsiveImages.construct(e) : h(e)
            },
            w = function(e) {
                var r = e.getAttribute("data-fp-url"),
                    n = e.getAttribute("data-fp-custom-css"),
                    r = t.util.getFPUrl(r);
                if (!r || !t.util.isFPUrl(r)) return !0;
                r = r.replace("api/file/", "api/preview/");
                var o = document.createElement("iframe");
                n && (r = t.util.appendQueryToUrl(r, "css", n)), o.src = r, o.width = "100%", o.height = "100%", e.appendChild(o)
            };
        return {
            constructPickWidget: c,
            constructDragWidget: u,
            constructExportWidget: h,
            buildWidgets: g,
            constructWidget: v
        }
    }),
    function() {
        filepicker.internal(function() {
            var e = this;
            e.util.addOnLoad(e.cookies.checkThirdParty), e.util.addOnLoad(e.widgets.buildWidgets), e.util.addOnLoad(e.responsiveImages.activate)
        }), delete filepicker.internal, delete filepicker.extend;
        var e, t = filepicker._queue || [],
            r = t.length;
        if (r)
            for (var n = 0; r > n; n++) e = t[n], filepicker[e[0]].apply(filepicker, e[1]);
        filepicker._queue && delete filepicker._queue
    }();