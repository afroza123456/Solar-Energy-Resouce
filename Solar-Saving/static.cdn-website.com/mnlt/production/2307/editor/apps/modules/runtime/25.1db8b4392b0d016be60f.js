(function() {
    var W = document && document.currentScript && document.currentScript.src;
    (window.webpackJsonpruntime = window.webpackJsonpruntime || []).push([
        [25], {
            ONNR: function(j, v, p) {
                "use strict";
                p.r(v), p.d(v, "getCLS", function() {
                    return A
                }), p.d(v, "getFCP", function() {
                    return B
                }), p.d(v, "getFID", function() {
                    return O
                }), p.d(v, "getLCP", function() {
                    return J
                }), p.d(v, "getTTFB", function() {
                    return M
                });
                var s, l, w, y, f = function(t, n) {
                        return {
                            name: t,
                            value: n === void 0 ? -1 : n,
                            delta: 0,
                            entries: [],
                            id: "v1-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
                        }
                    },
                    E = function(t, n) {
                        try {
                            if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                                if (t === "first-input" && !("PerformanceEventTiming" in self)) return;
                                var i = new PerformanceObserver(function(r) {
                                    return r.getEntries().map(n)
                                });
                                return i.observe({
                                    type: t,
                                    buffered: !0
                                }), i
                            }
                        } catch (r) {}
                    },
                    L = function(t, n) {
                        var i = function r(e) {
                            e.type !== "pagehide" && document.visibilityState !== "hidden" || (t(e), n && (removeEventListener("visibilitychange", r, !0), removeEventListener("pagehide", r, !0)))
                        };
                        addEventListener("visibilitychange", i, !0), addEventListener("pagehide", i, !0)
                    },
                    h = function(t) {
                        addEventListener("pageshow", function(n) {
                            n.persisted && t(n)
                        }, !0)
                    },
                    d = typeof WeakSet == "function" ? new WeakSet : new Set,
                    m = function(t, n, i) {
                        var r;
                        return function() {
                            n.value >= 0 && (i || d.has(n) || document.visibilityState === "hidden") && (n.delta = n.value - (r || 0), (n.delta || r === void 0) && (r = n.value, t(n)))
                        }
                    },
                    A = function(t, n) {
                        var i, r = f("CLS", 0),
                            e = function(a) {
                                a.hadRecentInput || (r.value += a.value, r.entries.push(a), i())
                            },
                            o = E("layout-shift", e);
                        o && (i = m(t, r, n), L(function() {
                            o.takeRecords().map(e), i()
                        }), h(function() {
                            r = f("CLS", 0), i = m(t, r, n)
                        }))
                    },
                    S = -1,
                    F = function() {
                        return document.visibilityState === "hidden" ? 0 : 1 / 0
                    },
                    C = function() {
                        L(function(t) {
                            var n = t.timeStamp;
                            S = n
                        }, !0)
                    },
                    T = function() {
                        return S < 0 && (S = F(), C(), h(function() {
                            setTimeout(function() {
                                S = F(), C()
                            }, 0)
                        })), {
                            get timeStamp() {
                                return S
                            }
                        }
                    },
                    B = function(t, n) {
                        var i, r = T(),
                            e = f("FCP"),
                            o = function(c) {
                                c.name === "first-contentful-paint" && (u && u.disconnect(), c.startTime < r.timeStamp && (e.value = c.startTime, e.entries.push(c), d.add(e), i()))
                            },
                            a = performance.getEntriesByName("first-contentful-paint")[0],
                            u = a ? null : E("paint", o);
                        (a || u) && (i = m(t, e, n), a && o(a), h(function(c) {
                            e = f("FCP"), i = m(t, e, n), requestAnimationFrame(function() {
                                requestAnimationFrame(function() {
                                    e.value = performance.now() - c.timeStamp, d.add(e), i()
                                })
                            })
                        }))
                    },
                    g = {
                        passive: !0,
                        capture: !0
                    },
                    I = new Date,
                    P = function(t, n) {
                        s || (s = n, l = t, w = new Date, b(removeEventListener), D())
                    },
                    D = function() {
                        if (l >= 0 && l < w - I) {
                            var t = {
                                entryType: "first-input",
                                name: s.type,
                                target: s.target,
                                cancelable: s.cancelable,
                                startTime: s.timeStamp,
                                processingStart: s.timeStamp + l
                            };
                            y.forEach(function(n) {
                                n(t)
                            }), y = []
                        }
                    },
                    N = function(t) {
                        if (t.cancelable) {
                            var n = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
                            t.type == "pointerdown" ? function(i, r) {
                                var e = function() {
                                        P(i, r), a()
                                    },
                                    o = function() {
                                        a()
                                    },
                                    a = function() {
                                        removeEventListener("pointerup", e, g), removeEventListener("pointercancel", o, g)
                                    };
                                addEventListener("pointerup", e, g), addEventListener("pointercancel", o, g)
                            }(n, t) : P(n, t)
                        }
                    },
                    b = function(t) {
                        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(n) {
                            return t(n, N, g)
                        })
                    },
                    O = function(t, n) {
                        var i, r = T(),
                            e = f("FID"),
                            o = function(u) {
                                u.startTime < r.timeStamp && (e.value = u.processingStart - u.startTime, e.entries.push(u), d.add(e), i())
                            },
                            a = E("first-input", o);
                        i = m(t, e, n), a && L(function() {
                            a.takeRecords().map(o), a.disconnect()
                        }, !0), a && h(function() {
                            var u;
                            e = f("FID"), i = m(t, e, n), y = [], l = -1, s = null, b(addEventListener), u = o, y.push(u), D()
                        })
                    },
                    J = function(t, n) {
                        var i, r = T(),
                            e = f("LCP"),
                            o = function(c) {
                                var R = c.startTime;
                                R < r.timeStamp && (e.value = R, e.entries.push(c)), i()
                            },
                            a = E("largest-contentful-paint", o);
                        if (a) {
                            i = m(t, e, n);
                            var u = function() {
                                d.has(e) || (a.takeRecords().map(o), a.disconnect(), d.add(e), i())
                            };
                            ["keydown", "click"].forEach(function(c) {
                                addEventListener(c, u, {
                                    once: !0,
                                    capture: !0
                                })
                            }), L(u, !0), h(function(c) {
                                e = f("LCP"), i = m(t, e, n), requestAnimationFrame(function() {
                                    requestAnimationFrame(function() {
                                        e.value = performance.now() - c.timeStamp, d.add(e), i()
                                    })
                                })
                            })
                        }
                    },
                    M = function(t) {
                        var n, i = f("TTFB");
                        n = function() {
                            try {
                                var r = performance.getEntriesByType("navigation")[0] || function() {
                                    var e = performance.timing,
                                        o = {
                                            entryType: "navigation",
                                            startTime: 0
                                        };
                                    for (var a in e) a !== "navigationStart" && a !== "toJSON" && (o[a] = Math.max(e[a] - e.navigationStart, 0));
                                    return o
                                }();
                                if (i.value = i.delta = r.responseStart, i.value < 0) return;
                                i.entries = [r], t(i)
                            } catch (e) {}
                        }, document.readyState === "complete" ? setTimeout(n, 0) : addEventListener("pageshow", n)
                    }
            }
        }
    ])
})();