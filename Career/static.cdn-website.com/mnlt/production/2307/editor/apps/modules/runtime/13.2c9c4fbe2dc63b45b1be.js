(function() {
    var ee = document && document.currentScript && document.currentScript.src;
    (window.webpackJsonpruntime = window.webpackJsonpruntime || []).push([
        [13], {
            "4qC0": function(j, C, e) {
                var c = e("NykK"),
                    v = e("Z0cm"),
                    I = e("ExA7"),
                    g = "[object String]";

                function A(T) {
                    return typeof T == "string" || !v(T) && I(T) && c(T) == g
                }
                j.exports = A
            },
            "6TzK": function(j, C, e) {
                "use strict";
                e.r(C), e.d(C, "shouldPrintPerfLogs", function() {
                    return h
                }), e.d(C, "printPerfLogs", function() {
                    return a
                }), e.d(C, "sendPerformanceMetrics", function() {
                    return o
                }), e.d(C, "sendMetrics", function() {
                    return f
                });
                var c = e("8OQS"),
                    v = e.n(c),
                    I = e("yXPU"),
                    g = e.n(I),
                    A = e("lSCD"),
                    T = e.n(A),
                    p = e("4qC0"),
                    O = e.n(p),
                    b = e("e0ae"),
                    k = () => {
                        let n;
                        return g()(function*() {
                            return n || (n = Object.assign({
                                webVitals: yield e.e(25).then(e.bind(null, "ONNR"))
                            }, yield e.e(20).then(e.bind(null, "3Csl")))), n || {}
                        })
                    },
                    P = e("ddYX");
                const $ = ["bot"];

                function h() {
                    var n;
                    return !!((n = window) !== null && n !== void 0 && n.location && new URL(window.location.href).searchParams.get("logperf"))
                }

                function a() {
                    return d.apply(this, arguments)
                }

                function d() {
                    return d = g()(function*() {
                        const n = (yield e.e(22).then(e.bind(null, "94Vr"))).default,
                            r = new n({
                                analyticsTracker: u => {
                                    const {
                                        metricName: m,
                                        data: w
                                    } = u, L = z(m, w);
                                    L && console.log(`(perf) ${L}:`, w)
                                }
                            });
                        window.perfume = r
                    }), d.apply(this, arguments)
                }
                const W = {
                    navigationTiming: n => n && n.timeToFirstByte ? "navigationTiming" : "",
                    fp: "firstPaint",
                    fcp: "firstContentfulPaint",
                    fid: "firstInputDelay",
                    lcp: "largestContentfulPaint",
                    lcpFinal: "largestContentfulPaintFinal",
                    cls: "cumulativeLayoutShift",
                    clsFinal: "cumulativeLayoutShiftFinal",
                    tbt: "totalBlockingTime",
                    tbt5S: "totalBlockingTime5S",
                    tbt10S: "totalBlockingTime10S",
                    tbtFinal: "totalBlockingTimeFinal"
                };

                function z(n, r) {
                    const u = W[n];
                    return O()(u) ? u : T()(u) ? u(r) : ""
                }
                const Z = k(),
                    i = () => {
                        const n = {
                                apps: []
                            },
                            r = document.getElementById("dm-outer-wrapper");
                        r && (n.templateId = (r == null ? void 0 : r.getAttribute("dmtemplateid")) || "unknown"), document.getElementById("d-notification-bar") && n.apps.push("notificationBar");
                        const m = document.getElementById("usercentrics-cmp");
                        if (m) {
                            n.apps.push("usercentrics");
                            try {
                                n.isUserCentricOpen = !!m.shadowRoot.querySelector("[data-testid=uc-accept-all-button]")
                            } catch (w) {}
                        }
                        return n.apps.length || n.apps.push("noApps"), n
                    };

                function o() {
                    return s.apply(this, arguments)
                }

                function s() {
                    return s = g()(function*({
                        sendLog: n
                    } = {}) {
                        try {
                            const w = Object(b.a)(),
                                {
                                    bot: L
                                } = w,
                                V = v()(w, $);
                            L && console.debug("Skipping sending vitals metrics for Bot browser");
                            const {
                                webVitals: U,
                                collectExtraDataByMetric: X
                            } = yield Z();
                            let M, N = yield Promise.all(Object.values(U).map(function() {
                                var x = g()(function*(F) {
                                    M || (M = yield R(V));
                                    const K = yield new Promise(y => F(y)), {
                                        name: G,
                                        delta: H
                                    } = K, J = Object.assign({}, M, {
                                        [G.toLowerCase()]: H || 1e-6
                                    }, X(K, M));
                                    return G.match(/CLS|LCP|FID/) && (console.debug(`sending { ${G.toLowerCase()}: ${H} } measurement`), yield f(J)), J
                                });
                                return function(F) {
                                    return x.apply(this, arguments)
                                }
                            }()));
                            N = N.reduce((x, F) => Object.assign({}, x, F), {});
                            const D = {
                                logLevel: P.a.INFO,
                                dataString: Object.assign({
                                    message: "collecting webvitals data",
                                    tags: ["webvitals"]
                                }, N, i())
                            };
                            return n && Object(P.b)(D), console.debug("sending web vitals", D), N
                        } catch (w) {
                            if (n) {
                                var r, u, m;
                                Object(P.b)({
                                    logLevel: P.a.ERROR,
                                    dataString: {
                                        message: "error sending webvitals analytics",
                                        error: JSON.stringify(w),
                                        siteAlias: (r = window) === null || r === void 0 || (u = r.Parameters) === null || u === void 0 ? void 0 : u.SiteAlias,
                                        pageUrl: (m = window) === null || m === void 0 ? void 0 : m._currentPage.pageUrl
                                    }
                                })
                            }
                            return Promise.reject(w)
                        }
                    }), s.apply(this, arguments)
                }

                function f(n) {
                    return l.apply(this, arguments)
                }

                function l() {
                    return l = g()(function*(n) {
                        try {
                            var r;
                            const u = (r = window.rtCommonProps) === null || r === void 0 ? void 0 : r["runtimecollector.url"];
                            if (!u) return;
                            yield fetch(`${u}/performance/metrics`, {
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                method: "POST",
                                body: JSON.stringify(n)
                            })
                        } catch (u) {}
                    }), l.apply(this, arguments)
                }
                const S = () => {
                        var n, r, u;
                        if (!Intl) return [];
                        const m = (n = Intl) === null || n === void 0 || (r = n.DateTimeFormat()) === null || r === void 0 || (u = r.resolvedOptions()) === null || u === void 0 ? void 0 : u.timeZone;
                        return m ? m.split("/") : []
                    },
                    B = () => {
                        try {
                            const {
                                rtt: n,
                                downlink: r
                            } = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                            return n && r ? {
                                downlink: r,
                                rtt: n
                            } : {}
                        } catch (n) {}
                        return {}
                    };

                function R() {
                    return Y.apply(this, arguments)
                }

                function Y() {
                    return Y = g()(function*({
                        name: n = "unknown",
                        version: r = "unknown",
                        os: u = "unknown"
                    } = {}) {
                        var m, w, L, V, U, X, M, N, D, x;
                        const {
                            type: F = "unknown",
                            effectiveType: K = "unknown"
                        } = ((m = navigator) === null || m === void 0 ? void 0 : m.connection) || {}, {
                            innerWidth: G,
                            innerHeight: H,
                            _currentDevice: J,
                            _currentPage: y,
                            Parameters: t
                        } = window, Q = yield(navigator.serviceWorker || {
                            getRegistration() {
                                return Promise.resolve(null)
                            }
                        }).getRegistration("/"), q = !!document.getElementById("criticalCss"), _ = !!document.querySelector('[data-element-type="custom_extension"]');
                        return Object.assign({
                            userAgent: (w = navigator) === null || w === void 0 ? void 0 : w.userAgent,
                            device: J,
                            connectionType: F,
                            connectionSpeed: K,
                            viewportWidth: G,
                            viewportHeight: H,
                            hasCriticalCss: q,
                            hasCustomWidgets: _,
                            hasCustomCode: t == null ? void 0 : t.hasCustomCode,
                            themeName: (t == null ? void 0 : t.CurrentThemeName) || "unknown",
                            pageType: (t == null ? void 0 : t.pageType) || "unknown",
                            browserName: n,
                            browserVersion: r,
                            os: u,
                            firstVisit: !(Q != null && Q.active),
                            pageUuid: (y == null || (L = y.pageContent) === null || L === void 0 ? void 0 : L.uuid) || (t == null ? void 0 : t.InitialPageUuid) || `${y==null?void 0:y.pageID}`,
                            serviceWorkerRunning: !!Q,
                            siteAlias: t == null ? void 0 : t.SiteAlias,
                            pageUrl: y.pageUrl,
                            pageAlias: y.pageAlias,
                            isHomePage: y == null || (V = y.pageContent) === null || V === void 0 ? void 0 : V.isHomePage,
                            host: ((U = window) === null || U === void 0 || (X = U.location) === null || X === void 0 ? void 0 : X.host) || "unknown",
                            path: location.pathname,
                            queryParams: (M = window) === null || M === void 0 || (N = M.location) === null || N === void 0 || (D = N.search) === null || D === void 0 || (x = D.replace("?", "")) === null || x === void 0 ? void 0 : x.split("&"),
                            planId: (t == null ? void 0 : t.planID) || "unknown",
                            timeZone: S(),
                            customTemplateId: (t == null ? void 0 : t.customTemplateId) || "unknown",
                            siteTemplateId: (t == null ? void 0 : t.siteTemplateId) || "unknown",
                            productId: (t == null ? void 0 : t.productId) || "unknown"
                        }, t != null && t.PublicationDate ? {
                            lastPublishDate: t == null ? void 0 : t.PublicationDate
                        } : {}, B())
                    }), Y.apply(this, arguments)
                }
            },
            "8oxB": function(j, C) {
                var e = j.exports = {},
                    c, v;

                function I() {
                    throw new Error("setTimeout has not been defined")
                }

                function g() {
                    throw new Error("clearTimeout has not been defined")
                }(function() {
                    try {
                        typeof setTimeout == "function" ? c = setTimeout : c = I
                    } catch (a) {
                        c = I
                    }
                    try {
                        typeof clearTimeout == "function" ? v = clearTimeout : v = g
                    } catch (a) {
                        v = g
                    }
                })();

                function A(a) {
                    if (c === setTimeout) return setTimeout(a, 0);
                    if ((c === I || !c) && setTimeout) return c = setTimeout, setTimeout(a, 0);
                    try {
                        return c(a, 0)
                    } catch (d) {
                        try {
                            return c.call(null, a, 0)
                        } catch (W) {
                            return c.call(this, a, 0)
                        }
                    }
                }

                function T(a) {
                    if (v === clearTimeout) return clearTimeout(a);
                    if ((v === g || !v) && clearTimeout) return v = clearTimeout, clearTimeout(a);
                    try {
                        return v(a)
                    } catch (d) {
                        try {
                            return v.call(null, a)
                        } catch (W) {
                            return v.call(this, a)
                        }
                    }
                }
                var p = [],
                    O = !1,
                    b, E = -1;

                function k() {
                    !O || !b || (O = !1, b.length ? p = b.concat(p) : E = -1, p.length && P())
                }

                function P() {
                    if (!O) {
                        var a = A(k);
                        O = !0;
                        for (var d = p.length; d;) {
                            for (b = p, p = []; ++E < d;) b && b[E].run();
                            E = -1, d = p.length
                        }
                        b = null, O = !1, T(a)
                    }
                }
                e.nextTick = function(a) {
                    var d = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var W = 1; W < arguments.length; W++) d[W - 1] = arguments[W];
                    p.push(new $(a, d)), p.length === 1 && !O && A(P)
                };

                function $(a, d) {
                    this.fun = a, this.array = d
                }
                $.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.version = "", e.versions = {};

                function h() {}
                e.on = h, e.addListener = h, e.once = h, e.off = h, e.removeListener = h, e.removeAllListeners = h, e.emit = h, e.prependListener = h, e.prependOnceListener = h, e.listeners = function(a) {
                    return []
                }, e.binding = function(a) {
                    throw new Error("process.binding is not supported")
                }, e.cwd = function() {
                    return "/"
                }, e.chdir = function(a) {
                    throw new Error("process.chdir is not supported")
                }, e.umask = function() {
                    return 0
                }
            },
            e0ae: function(j, C, e) {
                "use strict";
                (function(c) {
                    e.d(C, "a", function() {
                        return $
                    });
                    var v = function() {
                            for (var i = 0, o = 0, s = arguments.length; o < s; o++) i += arguments[o].length;
                            for (var f = Array(i), l = 0, o = 0; o < s; o++)
                                for (var S = arguments[o], B = 0, R = S.length; B < R; B++, l++) f[l] = S[B];
                            return f
                        },
                        I = function() {
                            function i(o, s, f) {
                                this.name = o, this.version = s, this.os = f, this.type = "browser"
                            }
                            return i
                        }(),
                        g = function() {
                            function i(o) {
                                this.version = o, this.type = "node", this.name = "node", this.os = c.platform
                            }
                            return i
                        }(),
                        A = function() {
                            function i(o, s, f, l) {
                                this.name = o, this.version = s, this.os = f, this.bot = l, this.type = "bot-device"
                            }
                            return i
                        }(),
                        T = function() {
                            function i() {
                                this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                            }
                            return i
                        }(),
                        p = function() {
                            function i() {
                                this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                            }
                            return i
                        }(),
                        O = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
                        b = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                        E = 3,
                        k = [
                            ["aol", /AOLShield\/([0-9\._]+)/],
                            ["edge", /Edge\/([0-9\._]+)/],
                            ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                            ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                            ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                            ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                            ["silk", /\bSilk\/([0-9._-]+)\b/],
                            ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                            ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                            ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                            ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                            ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                            ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                            ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                            ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                            ["fxios", /FxiOS\/([0-9\.]+)/],
                            ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                            ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                            ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                            ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                            ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                            ["ie", /MSIE\s(7\.0)/],
                            ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                            ["android", /Android\s([0-9\.]+)/],
                            ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                            ["safari", /Version\/([0-9\._]+).*Safari/],
                            ["facebook", /FBAV\/([0-9\.]+)/],
                            ["instagram", /Instagram\s([0-9\.]+)/],
                            ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                            ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                            ["searchbot", O]
                        ],
                        P = [
                            ["iOS", /iP(hone|od|ad)/],
                            ["Android OS", /Android/],
                            ["BlackBerry OS", /BlackBerry|BB10/],
                            ["Windows Mobile", /IEMobile/],
                            ["Amazon OS", /Kindle/],
                            ["Windows 3.11", /Win16/],
                            ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                            ["Windows 98", /(Windows 98)|(Win98)/],
                            ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                            ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                            ["Windows Server 2003", /(Windows NT 5.2)/],
                            ["Windows Vista", /(Windows NT 6.0)/],
                            ["Windows 7", /(Windows NT 6.1)/],
                            ["Windows 8", /(Windows NT 6.2)/],
                            ["Windows 8.1", /(Windows NT 6.3)/],
                            ["Windows 10", /(Windows NT 10.0)/],
                            ["Windows ME", /Windows ME/],
                            ["Open BSD", /OpenBSD/],
                            ["Sun OS", /SunOS/],
                            ["Chrome OS", /CrOS/],
                            ["Linux", /(Linux)|(X11)/],
                            ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                            ["QNX", /QNX/],
                            ["BeOS", /BeOS/],
                            ["OS/2", /OS\/2/]
                        ];

                    function $(i) {
                        return i ? d(i) : typeof document == "undefined" && typeof navigator != "undefined" && navigator.product === "ReactNative" ? new p : typeof navigator != "undefined" ? d(navigator.userAgent) : z()
                    }

                    function h(i) {
                        return i !== "" && k.reduce(function(o, s) {
                            var f = s[0],
                                l = s[1];
                            if (o) return o;
                            var S = l.exec(i);
                            return !!S && [f, S]
                        }, !1)
                    }

                    function a(i) {
                        var o = h(i);
                        return o ? o[0] : null
                    }

                    function d(i) {
                        var o = h(i);
                        if (!o) return null;
                        var s = o[0],
                            f = o[1];
                        if (s === "searchbot") return new T;
                        var l = f[1] && f[1].split(/[._]/).slice(0, 3);
                        l ? l.length < E && (l = v(l, Z(E - l.length))) : l = [];
                        var S = l.join("."),
                            B = W(i),
                            R = b.exec(i);
                        return R && R[1] ? new A(s, S, B, R[1]) : new I(s, S, B)
                    }

                    function W(i) {
                        for (var o = 0, s = P.length; o < s; o++) {
                            var f = P[o],
                                l = f[0],
                                S = f[1],
                                B = S.exec(i);
                            if (B) return l
                        }
                        return null
                    }

                    function z() {
                        var i = typeof c != "undefined" && c.version;
                        return i ? new g(c.version.slice(1)) : null
                    }

                    function Z(i) {
                        for (var o = [], s = 0; s < i; s++) o.push("0");
                        return o
                    }
                }).call(this, e("8oxB"))
            }
        }
    ])
})();