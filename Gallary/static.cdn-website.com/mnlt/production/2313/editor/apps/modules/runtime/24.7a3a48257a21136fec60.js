(function() {
    var ri = document && document.currentScript && document.currentScript.src;
    (window.webpackJsonpruntime = window.webpackJsonpruntime || []).push([
        [24], {
            UjYt: function(Xt, Kt, On) {
                var Xe, mt;
                /*! PhotoSwipe - v4.0.7 - 2015-03-18
                 * http://photoswipe.com
                 * Copyright (c) 2015 Dmitry Semenov; */
                (function(qt, y) {
                    Xe = y, mt = typeof Xe == "function" ? Xe.call(Kt, On, Kt, Xt) : Xe, mt !== void 0 && (Xt.exports = mt)
                })(this, function() {
                    "use strict";
                    var qt = function(y, $t, kn, Rn) {
                        var s = {
                            features: null,
                            bind: function(e, t, n, i) {
                                var o = (i ? "remove" : "add") + "EventListener";
                                t = t.split(" ");
                                for (var l = 0; l < t.length; l++) t[l] && e[o](t[l], n, !1)
                            },
                            isArray: function(e) {
                                return e instanceof Array
                            },
                            createEl: function(e, t) {
                                var n = document.createElement(t || "div");
                                return e && (n.className = e), n
                            },
                            getScrollY: function() {
                                var e = window.pageYOffset;
                                return e !== void 0 ? e : document.documentElement.scrollTop
                            },
                            unbind: function(e, t, n) {
                                s.bind(e, t, n, !0)
                            },
                            removeClass: function(e, t) {
                                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                                e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                            },
                            addClass: function(e, t) {
                                s.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
                            },
                            hasClass: function(e, t) {
                                return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
                            },
                            getChildByClass: function(e, t) {
                                for (var n = e.firstChild; n;) {
                                    if (s.hasClass(n, t)) return n;
                                    n = n.nextSibling
                                }
                            },
                            arraySearch: function(e, t, n) {
                                for (var i = e.length; i--;)
                                    if (e[i][n] === t) return i;
                                return -1
                            },
                            extend: function(e, t, n) {
                                for (var i in t)
                                    if (t.hasOwnProperty(i)) {
                                        if (n && e.hasOwnProperty(i)) continue;
                                        e[i] = t[i]
                                    }
                            },
                            easing: {
                                sine: {
                                    out: function(e) {
                                        return Math.sin(e * (Math.PI / 2))
                                    },
                                    inOut: function(e) {
                                        return -(Math.cos(Math.PI * e) - 1) / 2
                                    }
                                },
                                cubic: {
                                    out: function(e) {
                                        return --e * e * e + 1
                                    }
                                }
                            },
                            detectFeatures: function() {
                                if (s.features) return s.features;
                                var e = s.createEl(),
                                    t = e.style,
                                    n = "",
                                    i = {};
                                if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                                    var o = navigator.userAgent;
                                    if (/iP(hone|od)/.test(navigator.platform)) {
                                        var l = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                                        l && l.length > 0 && (l = parseInt(l[1], 10), l >= 1 && 8 > l && (i.isOldIOSPhone = !0))
                                    }
                                    var c = o.match(/Android\s([0-9\.]*)/),
                                        d = c ? c[1] : 0;
                                    d = parseFloat(d), d >= 1 && (4.4 > d && (i.isOldAndroid = !0), i.androidVersion = d), i.isMobileOpera = /opera mini|opera mobi/i.test(o)
                                }
                                for (var p, g, b = ["transform", "perspective", "animationName"], Me = ["", "webkit", "Moz", "ms", "O"], N = 0; 4 > N; N++) {
                                    n = Me[N];
                                    for (var Se = 0; 3 > Se; Se++) p = b[Se], g = n + (n ? p.charAt(0).toUpperCase() + p.slice(1) : p), !i[p] && g in t && (i[p] = g);
                                    n && !i.raf && (n = n.toLowerCase(), i.raf = window[n + "RequestAnimationFrame"], i.raf && (i.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
                                }
                                if (!i.raf) {
                                    var Ve = 0;
                                    i.raf = function(Ae) {
                                        var H = new Date().getTime(),
                                            Vt = Math.max(0, 16 - (H - Ve)),
                                            oi = window.setTimeout(function() {
                                                Ae(H + Vt)
                                            }, Vt);
                                        return Ve = H + Vt, oi
                                    }, i.caf = function(Ae) {
                                        clearTimeout(Ae)
                                    }
                                }
                                return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, s.features = i, i
                            }
                        };
                        s.detectFeatures(), s.features.oldIE && (s.bind = function(e, t, n, i) {
                            t = t.split(" ");
                            for (var o, l = (i ? "detach" : "attach") + "Event", c = function() {
                                    n.handleEvent.call(n)
                                }, d = 0; d < t.length; d++)
                                if (o = t[d])
                                    if (typeof n == "object" && n.handleEvent) {
                                        if (i) {
                                            if (!n["oldIE" + o]) return !1
                                        } else n["oldIE" + o] = c;
                                        e[l]("on" + o, n["oldIE" + o])
                                    } else e[l]("on" + o, n)
                        });
                        var r = this,
                            Jt = 25,
                            $ = 3,
                            u = {
                                allowPanToNext: !0,
                                spacing: .12,
                                bgOpacity: 1,
                                mouseUsed: !1,
                                loop: !0,
                                pinchToClose: !0,
                                closeOnScroll: !0,
                                closeOnVerticalDrag: !0,
                                hideAnimationDuration: 333,
                                showAnimationDuration: 333,
                                showHideOpacity: !1,
                                focus: !0,
                                escKey: !0,
                                arrowKeys: !0,
                                mainScrollEndFriction: .35,
                                panEndFriction: .35,
                                isClickableElement: function(e) {
                                    return e.tagName === "A"
                                },
                                getDoubleTapZoom: function(e, t) {
                                    return e || t.initialZoomLevel < .7 ? 1 : 1.5
                                },
                                maxSpreadZoom: 2,
                                scaleMode: "fit",
                                modal: !0,
                                alwaysFadeIn: !1
                            };
                        s.extend(u, Rn);
                        var he, Qt, ft, m, jt, W, Ee, Ke, T, v, oe, ht, yt, vt, xt, qe, C, en, $e, Je, Oe, Qe, ye, J, U, je, gt, tn, nn, wt, G, x, on, et, ke, bt, Re, Ze, V, Ct, re, ve, tt, le, F, X, rn, ln, f, K, M, se, Dt, nt, it, ot, rt, Q = function() {
                                return {
                                    x: 0,
                                    y: 0
                                }
                            },
                            j = Q(),
                            xe = Q(),
                            a = Q(),
                            S = {},
                            ae = 0,
                            _ = Q(),
                            z = 0,
                            lt = !0,
                            It = [],
                            Fe = {},
                            _e = function(e, t) {
                                s.extend(r, t.publicMethods), It.push(e)
                            },
                            st = function(e) {
                                var t = Z();
                                return e > t - 1 ? e - t : 0 > e ? t + e : e
                            },
                            Le = {},
                            w = function(e, t) {
                                return Le[e] || (Le[e] = []), Le[e].push(t)
                            },
                            h = function(e) {
                                var t = Le[e];
                                if (t) {
                                    var n = Array.prototype.slice.call(arguments);
                                    n.shift();
                                    for (var i = 0; i < t.length; i++) t[i].apply(r, n)
                                }
                            },
                            B = function() {
                                return new Date().getTime()
                            },
                            q = function(e) {
                                it = e, r.bg.style.opacity = e * u.bgOpacity
                            },
                            sn = function(e, t, n, i) {
                                e[ye] = ht + t + "px, " + n + "px" + yt + " scale(" + i + ")"
                            },
                            D = function() {
                                K && sn(K, a.x, a.y, v)
                            },
                            Pe = function(e) {
                                e.container && sn(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel)
                            },
                            ge = function(e, t) {
                                t[ye] = ht + e + "px, 0px" + yt
                            },
                            at = function(e, t) {
                                if (!u.loop && t) {
                                    var n = m + (_.x * ae - e) / _.x,
                                        i = Math.round(e - te.x);
                                    (0 > n && i > 0 || n >= Z() - 1 && 0 > i) && (e = te.x + i * u.mainScrollEndFriction)
                                }
                                te.x = e, ge(e, jt)
                            },
                            Tt = function(e, t) {
                                var n = Ye[e] - qe[e];
                                return xe[e] + j[e] + n - n * (t / oe)
                            },
                            A = function(e, t) {
                                e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
                            },
                            an = function(e) {
                                e.x = Math.round(e.x), e.y = Math.round(e.y)
                            },
                            Mt = null,
                            St = function() {
                                Mt && (s.unbind(document, "mousemove", St), s.addClass(y, "pswp--has_mouse"), u.mouseUsed = !0, h("mouseUsed")), Mt = setTimeout(function() {
                                    Mt = null
                                }, 100)
                            },
                            Zn = function() {
                                s.bind(document, "keydown", r), x.transform && s.bind(r.scrollWrap, "click", r), u.mouseUsed || s.bind(document, "mousemove", St), s.bind(window, "resize scroll", r), h("bindEvents")
                            },
                            Fn = function() {
                                s.unbind(window, "resize", r), s.unbind(window, "scroll", T.scroll), s.unbind(document, "keydown", r), s.unbind(document, "mousemove", St), x.transform && s.unbind(r.scrollWrap, "click", r), V && s.unbind(window, Ee, r), h("unbindEvents")
                            },
                            At = function(e, t) {
                                var n = We(r.currItem, S, e);
                                return t && (f = n), n
                            },
                            un = function(e) {
                                return e || (e = r.currItem), e.initialZoomLevel
                            },
                            cn = function(e) {
                                return e || (e = r.currItem), e.w > 0 ? u.maxSpreadZoom : 1
                            },
                            dn = function(e, t, n, i) {
                                return i === r.currItem.initialZoomLevel ? (n[e] = r.currItem.initialPosition[e], !0) : (n[e] = Tt(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] ? (n[e] = t.max[e], !0) : !1)
                            },
                            _n = function() {
                                if (ye) {
                                    var e = x.perspective && !U;
                                    return ht = "translate" + (e ? "3d(" : "("), void(yt = x.perspective ? ", 0px)" : ")")
                                }
                                ye = "left", s.addClass(y, "pswp--ie"), ge = function(t, n) {
                                    n.left = t + "px"
                                }, Pe = function(t) {
                                    var n = t.fitRatio > 1 ? 1 : t.fitRatio,
                                        i = t.container.style,
                                        o = n * t.w,
                                        l = n * t.h;
                                    i.width = o + "px", i.height = l + "px", i.left = t.initialPosition.x + "px", i.top = t.initialPosition.y + "px"
                                }, D = function() {
                                    if (K) {
                                        var t = K,
                                            n = r.currItem,
                                            i = n.fitRatio > 1 ? 1 : n.fitRatio,
                                            o = i * n.w,
                                            l = i * n.h;
                                        t.width = o + "px", t.height = l + "px", t.left = a.x + "px", t.top = a.y + "px"
                                    }
                                }
                            },
                            Ln = function(e) {
                                var t = "";
                                u.escKey && e.keyCode === 27 ? t = "close" : u.arrowKeys && (e.keyCode === 37 ? t = "prev" : e.keyCode === 39 && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, r[t]()))
                            },
                            Pn = function(e) {
                                e && (ve || re || M || Re) && (e.preventDefault(), e.stopPropagation())
                            },
                            zn = function() {
                                r.setScrollOffset(0, s.getScrollY())
                            },
                            R = {},
                            ze = 0,
                            Ne = function(e) {
                                R[e] && (R[e].raf && gt(R[e].raf), ze--, delete R[e])
                            },
                            Et = function(e) {
                                R[e] && Ne(e), R[e] || (ze++, R[e] = {})
                            },
                            Ue = function() {
                                for (var e in R) R.hasOwnProperty(e) && Ne(e)
                            },
                            Be = function(e, t, n, i, o, l, c) {
                                var d, p = B();
                                Et(e);
                                var g = function() {
                                    if (R[e]) {
                                        if (d = B() - p, d >= i) return Ne(e), l(n), void(c && c());
                                        l((n - t) * o(d / i) + t), R[e].raf = je(g)
                                    }
                                };
                                g()
                            },
                            Nn = {
                                shout: h,
                                listen: w,
                                viewportSize: S,
                                options: u,
                                isMainScrollAnimating: function() {
                                    return M
                                },
                                getZoomLevel: function() {
                                    return v
                                },
                                getCurrentIndex: function() {
                                    return m
                                },
                                isDragging: function() {
                                    return V
                                },
                                isZooming: function() {
                                    return X
                                },
                                setScrollOffset: function(e, t) {
                                    qe.x = e, G = qe.y = t
                                },
                                applyZoomPan: function(e, t, n) {
                                    a.x = t, a.y = n, v = e, D()
                                },
                                init: function() {
                                    if (!he && !Qt) {
                                        var e;
                                        r.framework = s, r.template = y, r.bg = s.getChildByClass(y, "pswp__bg"), tn = y.className, he = !0, x = s.detectFeatures(), je = x.raf, gt = x.caf, ye = x.transform, wt = x.oldIE, r.scrollWrap = s.getChildByClass(y, "pswp__scroll-wrap"), r.container = s.getChildByClass(r.scrollWrap, "pswp__container"), jt = r.container.style, r.itemHolders = C = [{
                                            el: r.container.children[0],
                                            wrap: 0,
                                            index: -1
                                        }, {
                                            el: r.container.children[1],
                                            wrap: 0,
                                            index: -1
                                        }, {
                                            el: r.container.children[2],
                                            wrap: 0,
                                            index: -1
                                        }], C[0].el.style.display = C[2].el.style.display = "none", _n(), T = {
                                            resize: r.updateSize,
                                            scroll: zn,
                                            keydown: Ln,
                                            click: Pn
                                        };
                                        var t = x.isOldIOSPhone || x.isOldAndroid || x.isMobileOpera;
                                        for (x.animationName && x.transform && !t || (u.showAnimationDuration = u.hideAnimationDuration = 0), e = 0; e < It.length; e++) r["init" + It[e]]();
                                        if ($t) {
                                            var n = r.ui = new $t(r, s);
                                            n.init()
                                        }
                                        h("firstUpdate"), m = m || u.index || 0, (isNaN(m) || 0 > m || m >= Z()) && (m = 0), r.currItem = me(m), (x.isOldIOSPhone || x.isOldAndroid) && (lt = !1), u.modal && (y.setAttribute("aria-hidden", "false"), lt ? y.style.position = "fixed" : (y.style.position = "absolute", y.style.top = s.getScrollY() + "px")), G === void 0 && (h("initialLayout"), G = nn = s.getScrollY());
                                        var i = "pswp--open ";
                                        for (u.mainClass && (i += u.mainClass + " "), u.showHideOpacity && (i += "pswp--animate_opacity "), i += U ? "pswp--touch" : "pswp--notouch", i += x.animationName ? " pswp--css_animation" : "", i += x.svg ? " pswp--svg" : "", s.addClass(y, i), r.updateSize(), W = -1, z = null, e = 0; $ > e; e++) ge((e + W) * _.x, C[e].el.style);
                                        wt || s.bind(r.scrollWrap, Ke, r), w("initialZoomInEnd", function() {
                                            r.setContent(C[0], m - 1), r.setContent(C[2], m + 1), C[0].el.style.display = C[2].el.style.display = "block", u.focus && y.focus(), Zn()
                                        }), r.setContent(C[1], m), r.updateCurrItem(), h("afterInit"), lt || (vt = setInterval(function() {
                                            ze || V || X || v !== r.currItem.initialZoomLevel || r.updateSize()
                                        }, 1e3)), s.addClass(y, "pswp--visible")
                                    }
                                },
                                close: function() {
                                    he && (he = !1, Qt = !0, h("close"), Fn(), bn(r.currItem, null, !0, r.destroy))
                                },
                                destroy: function() {
                                    h("destroy"), pe && clearTimeout(pe), u.modal && (y.setAttribute("aria-hidden", "true"), y.className = tn), vt && clearInterval(vt), s.unbind(r.scrollWrap, Ke, r), s.unbind(window, "scroll", r), Rt(), Ue(), Le = null
                                },
                                panTo: function(e, t, n) {
                                    n || (e > f.min.x ? e = f.min.x : e < f.max.x && (e = f.max.x), t > f.min.y ? t = f.min.y : t < f.max.y && (t = f.max.y)), a.x = e, a.y = t, D()
                                },
                                handleEvent: function(e) {
                                    e = e || window.event, T[e.type] && T[e.type](e)
                                },
                                goTo: function(e) {
                                    e = st(e);
                                    var t = e - m;
                                    z = t, m = e, r.currItem = me(m), ae -= t, at(_.x * ae), Ue(), M = !1, r.updateCurrItem()
                                },
                                next: function() {
                                    r.goTo(m + 1)
                                },
                                prev: function() {
                                    r.goTo(m - 1)
                                },
                                updateCurrZoomItem: function(e) {
                                    if (e && h("beforeChange", 0), C[1].el.children.length) {
                                        var t = C[1].el.children[0];
                                        K = s.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                                    } else K = null;
                                    f = r.currItem.bounds, oe = v = r.currItem.initialZoomLevel, a.x = f.center.x, a.y = f.center.y, e && h("afterChange")
                                },
                                invalidateCurrItems: function() {
                                    xt = !0;
                                    for (var e = 0; $ > e; e++) C[e].item && (C[e].item.needsUpdate = !0)
                                },
                                updateCurrItem: function(e) {
                                    if (z !== 0) {
                                        var t, n = Math.abs(z);
                                        if (!(e && 2 > n)) {
                                            r.currItem = me(m), h("beforeChange", z), n >= $ && (W += z + (z > 0 ? -$ : $), n = $);
                                            for (var i = 0; n > i; i++) z > 0 ? (t = C.shift(), C[$ - 1] = t, W++, ge((W + 2) * _.x, t.el.style), r.setContent(t, m - n + i + 1 + 1)) : (t = C.pop(), C.unshift(t), W--, ge(W * _.x, t.el.style), r.setContent(t, m + n - i - 1 - 1));
                                            if (K && Math.abs(z) === 1) {
                                                var o = me(en);
                                                o.initialZoomLevel !== v && (We(o, S), Pe(o))
                                            }
                                            z = 0, r.updateCurrZoomItem(), en = m, h("afterChange")
                                        }
                                    }
                                },
                                updateSize: function(e) {
                                    if (!lt) {
                                        var t = s.getScrollY();
                                        if (G !== t && (y.style.top = t + "px", G = t), !e && Fe.x === window.innerWidth && Fe.y === window.innerHeight) return;
                                        Fe.x = window.innerWidth, Fe.y = window.innerHeight, y.style.height = Fe.y + "px"
                                    }
                                    if (S.x = r.scrollWrap.clientWidth, S.y = r.scrollWrap.clientHeight, qe = {
                                            x: 0,
                                            y: G
                                        }, _.x = S.x + Math.round(S.x * u.spacing), _.y = S.y, at(_.x * ae), h("beforeResize"), W !== void 0) {
                                        for (var n, i, o, l = 0; $ > l; l++) n = C[l], ge((l + W) * _.x, n.el.style), o = m + l - 1, u.loop && Z() > 2 && (o = st(o)), i = me(o), i && (xt || i.needsUpdate || !i.bounds) ? (r.cleanSlide(i), r.setContent(n, o), l === 1 && (r.currItem = i, r.updateCurrZoomItem(!0)), i.needsUpdate = !1) : n.index === -1 && o >= 0 && r.setContent(n, o), i && i.container && (We(i, S), Pe(i));
                                        xt = !1
                                    }
                                    oe = v = r.currItem.initialZoomLevel, f = r.currItem.bounds, f && (a.x = f.center.x, a.y = f.center.y, D()), h("resize")
                                },
                                zoomTo: function(e, t, n, i, o) {
                                    t && (oe = v, Ye.x = Math.abs(t.x) - a.x, Ye.y = Math.abs(t.y) - a.y, A(xe, a));
                                    var l = At(e, !1),
                                        c = {};
                                    dn("x", l, c, e), dn("y", l, c, e);
                                    var d = v,
                                        p = {
                                            x: a.x,
                                            y: a.y
                                        };
                                    an(c);
                                    var g = function(b) {
                                        b === 1 ? (v = e, a.x = c.x, a.y = c.y) : (v = (e - d) * b + d, a.x = (c.x - p.x) * b + p.x, a.y = (c.y - p.y) * b + p.y), o && o(b), D()
                                    };
                                    n ? Be("customZoomTo", 0, 1, n, i || s.easing.sine.inOut, g) : g(1)
                                }
                            },
                            pn = 30,
                            Ot = 10,
                            E = {},
                            ue = {},
                            O = {},
                            k = {},
                            we = {},
                            ee = [],
                            ce = {},
                            de = [],
                            be = {},
                            ut = 0,
                            ct = Q(),
                            kt = 0,
                            te = Q(),
                            Ye = Q(),
                            Ce = Q(),
                            Un = function(e, t) {
                                return e.x === t.x && e.y === t.y
                            },
                            Bn = function(e, t) {
                                return Math.abs(e.x - t.x) < Jt && Math.abs(e.y - t.y) < Jt
                            },
                            mn = function(e, t) {
                                return be.x = Math.abs(e.x - t.x), be.y = Math.abs(e.y - t.y), Math.sqrt(be.x * be.x + be.y * be.y)
                            },
                            Rt = function() {
                                tt && (gt(tt), tt = null)
                            },
                            fn = function() {
                                V && (tt = je(fn), Xn())
                            },
                            Yn = function() {
                                return !(u.scaleMode === "fit" && v === r.currItem.initialZoomLevel)
                            },
                            hn = function(e, t) {
                                return e ? e.className && e.className.indexOf("pswp__scroll-wrap") > -1 ? !1 : t(e) ? e : hn(e.parentNode, t) : !1
                            },
                            Zt = {},
                            yn = function(e, t) {
                                return Zt.prevent = !hn(e.target, u.isClickableElement), h("preventDragEvent", e, t, Zt), Zt.prevent
                            },
                            vn = function(e, t) {
                                return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
                            },
                            xn = function(e, t, n) {
                                n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
                            },
                            Hn = function(e, t, n) {
                                if (e - et > 50) {
                                    var i = de.length > 2 ? de.shift() : {};
                                    i.x = t, i.y = n, de.push(i), et = e
                                }
                            },
                            gn = function() {
                                var e = a.y - r.currItem.initialPosition.y;
                                return 1 - Math.abs(e / (S.y / 2))
                            },
                            He = {},
                            Wn = {},
                            ne = [],
                            Ft = function(e) {
                                for (; ne.length > 0;) ne.pop();
                                return J ? (rt = 0, ee.forEach(function(t) {
                                    rt === 0 ? ne[0] = t : rt === 1 && (ne[1] = t), rt++
                                })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (ne[0] = vn(e.touches[0], He), e.touches.length > 1 && (ne[1] = vn(e.touches[1], Wn))) : (He.x = e.pageX, He.y = e.pageY, He.id = "", ne[0] = He), ne
                            },
                            wn = function(e, t) {
                                var n, i, o, l, c = 0,
                                    d = a[e] + t[e],
                                    p = t[e] > 0,
                                    g = te.x + t.x,
                                    b = te.x - ce.x;
                                return n = d > f.min[e] || d < f.max[e] ? u.panEndFriction : 1, d = a[e] + t[e] * n, !u.allowPanToNext && v !== r.currItem.initialZoomLevel || (K ? se !== "h" || e !== "x" || re || (p ? (d > f.min[e] && (n = u.panEndFriction, c = f.min[e] - d, i = f.min[e] - xe[e]), (0 >= i || 0 > b) && Z() > 1 ? (l = g, 0 > b && g > ce.x && (l = ce.x)) : f.min.x !== f.max.x && (o = d)) : (d < f.max[e] && (n = u.panEndFriction, c = d - f.max[e], i = xe[e] - f.max[e]), (0 >= i || b > 0) && Z() > 1 ? (l = g, b > 0 && g < ce.x && (l = ce.x)) : f.min.x !== f.max.x && (o = d))) : l = g, e !== "x") ? void(M || le || v > r.currItem.fitRatio && (a[e] += t[e] * n)) : (l !== void 0 && (at(l, !0), le = l !== ce.x), f.min.x !== f.max.x && (o !== void 0 ? a.x = o : le || (a.x += t.x * n)), l !== void 0)
                            },
                            Gn = function(e) {
                                if (!(e.type === "mousedown" && e.button > 0)) {
                                    if (Ie) return void e.preventDefault();
                                    if (!Ze || e.type !== "mousedown") {
                                        if (yn(e, !0) && e.preventDefault(), h("pointerDown"), J) {
                                            var t = s.arraySearch(ee, e.pointerId, "id");
                                            0 > t && (t = ee.length), ee[t] = {
                                                x: e.pageX,
                                                y: e.pageY,
                                                id: e.pointerId
                                            }
                                        }
                                        var n = Ft(e),
                                            i = n.length;
                                        F = null, Ue(), V && i !== 1 || (V = Dt = !0, s.bind(window, Ee, r), bt = ot = nt = Re = le = ve = Ct = re = !1, se = null, h("firstTouchStart", n), A(xe, a), j.x = j.y = 0, A(k, n[0]), A(we, k), ce.x = _.x * ae, de = [{
                                            x: k.x,
                                            y: k.y
                                        }], et = on = B(), At(v, !0), Rt(), fn()), !X && i > 1 && !M && !le && (oe = v, re = !1, X = Ct = !0, j.y = j.x = 0, A(xe, a), A(E, n[0]), A(ue, n[1]), xn(E, ue, Ce), Ye.x = Math.abs(Ce.x) - a.x, Ye.y = Math.abs(Ce.y) - a.y, rn = ln = mn(E, ue))
                                    }
                                }
                            },
                            Vn = function(e) {
                                if (e.preventDefault(), J) {
                                    var t = s.arraySearch(ee, e.pointerId, "id");
                                    if (t > -1) {
                                        var n = ee[t];
                                        n.x = e.pageX, n.y = e.pageY
                                    }
                                }
                                if (V) {
                                    var i = Ft(e);
                                    if (se || ve || X) F = i;
                                    else {
                                        var o = Math.abs(i[0].x - k.x) - Math.abs(i[0].y - k.y);
                                        Math.abs(o) >= Ot && (se = o > 0 ? "h" : "v", F = i)
                                    }
                                }
                            },
                            Xn = function() {
                                if (F) {
                                    var e = F.length;
                                    if (e !== 0)
                                        if (A(E, F[0]), O.x = E.x - k.x, O.y = E.y - k.y, X && e > 1) {
                                            if (k.x = E.x, k.y = E.y, !O.x && !O.y && Un(F[1], ue)) return;
                                            A(ue, F[1]), re || (re = !0, h("zoomGestureStarted"));
                                            var t = mn(E, ue),
                                                n = Qn(t);
                                            n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (ot = !0);
                                            var i = 1,
                                                o = un(),
                                                l = cn();
                                            if (o > n)
                                                if (u.pinchToClose && !ot && oe <= r.currItem.initialZoomLevel) {
                                                    var c = o - n,
                                                        d = 1 - c / (o / 1.2);
                                                    q(d), h("onPinchClose", d), nt = !0
                                                } else i = (o - n) / o, i > 1 && (i = 1), n = o - i * (o / 3);
                                            else n > l && (i = (n - l) / (6 * o), i > 1 && (i = 1), n = l + i * o);
                                            0 > i && (i = 0), rn = t, xn(E, ue, ct), j.x += ct.x - Ce.x, j.y += ct.y - Ce.y, A(Ce, ct), a.x = Tt("x", n), a.y = Tt("y", n), bt = n > v, v = n, D()
                                        } else {
                                            if (!se || (Dt && (Dt = !1, Math.abs(O.x) >= Ot && (O.x -= F[0].x - we.x), Math.abs(O.y) >= Ot && (O.y -= F[0].y - we.y)), k.x = E.x, k.y = E.y, O.x === 0 && O.y === 0)) return;
                                            if (se === "v" && u.closeOnVerticalDrag && !Yn()) {
                                                j.y += O.y, a.y += O.y;
                                                var p = gn();
                                                return Re = !0, h("onVerticalDrag", p), q(p), void D()
                                            }
                                            Hn(B(), E.x, E.y), ve = !0, f = r.currItem.bounds;
                                            var g = wn("x", O);
                                            g || (wn("y", O), an(a), D())
                                        }
                                }
                            },
                            Kn = function(e) {
                                if (x.isOldAndroid) {
                                    if (Ze && e.type === "mouseup") return;
                                    e.type.indexOf("touch") > -1 && (clearTimeout(Ze), Ze = setTimeout(function() {
                                        Ze = 0
                                    }, 600))
                                }
                                h("pointerUp"), yn(e, !1) && e.preventDefault();
                                var t;
                                if (J) {
                                    var n = s.arraySearch(ee, e.pointerId, "id");
                                    if (n > -1)
                                        if (t = ee.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
                                        else {
                                            var i = {
                                                4: "mouse",
                                                2: "touch",
                                                3: "pen"
                                            };
                                            t.type = i[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
                                        }
                                }
                                var o, l = Ft(e),
                                    c = l.length;
                                if (e.type === "mouseup" && (c = 0), c === 2) return F = null, !0;
                                c === 1 && A(we, l[0]), c !== 0 || se || M || (t || (e.type === "mouseup" ? t = {
                                    x: e.pageX,
                                    y: e.pageY,
                                    type: "mouse"
                                } : e.changedTouches && e.changedTouches[0] && (t = {
                                    x: e.changedTouches[0].pageX,
                                    y: e.changedTouches[0].pageY,
                                    type: "touch"
                                })), h("touchRelease", e, t));
                                var d = -1;
                                if (c === 0 && (V = !1, s.unbind(window, Ee, r), Rt(), X ? d = 0 : kt !== -1 && (d = B() - kt)), kt = c === 1 ? B() : -1, o = d !== -1 && 150 > d ? "zoom" : "swipe", X && 2 > c && (X = !1, c === 1 && (o = "zoomPointerUp"), h("zoomGestureEnded")), F = null, ve || re || M || Re)
                                    if (Ue(), ke || (ke = qn()), ke.calculateSwipeSpeed("x"), Re) {
                                        var p = gn();
                                        if (.6 > p) r.close();
                                        else {
                                            var g = a.y,
                                                b = it;
                                            Be("verticalDrag", 0, 1, 300, s.easing.cubic.out, function(N) {
                                                a.y = (r.currItem.initialPosition.y - g) * N + g, q((1 - b) * N + b), D()
                                            }), h("onVerticalDrag", 1)
                                        }
                                    } else {
                                        if ((le || M) && c === 0) {
                                            var Me = Jn(o, ke);
                                            if (Me) return;
                                            o = "zoomPointerUp"
                                        }
                                        if (!M) return o !== "swipe" ? void jn() : void(!le && v > r.currItem.fitRatio && $n(ke))
                                    }
                            },
                            qn = function() {
                                var e, t, n = {
                                    lastFlickOffset: {},
                                    lastFlickDist: {},
                                    lastFlickSpeed: {},
                                    slowDownRatio: {},
                                    slowDownRatioReverse: {},
                                    speedDecelerationRatio: {},
                                    speedDecelerationRatioAbs: {},
                                    distanceOffset: {},
                                    backAnimDestination: {},
                                    backAnimStarted: {},
                                    calculateSwipeSpeed: function(i) {
                                        de.length > 1 ? (e = B() - et + 50, t = de[de.length - 2][i]) : (e = B() - on, t = we[i]), n.lastFlickOffset[i] = k[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickSpeed[i] = n.lastFlickDist[i] > 20 ? n.lastFlickOffset[i] / e : 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
                                    },
                                    calculateOverBoundsAnimOffset: function(i, o) {
                                        n.backAnimStarted[i] || (a[i] > f.min[i] ? n.backAnimDestination[i] = f.min[i] : a[i] < f.max[i] && (n.backAnimDestination[i] = f.max[i]), n.backAnimDestination[i] !== void 0 && (n.slowDownRatio[i] = .7, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatioAbs[i] < .05 && (n.lastFlickSpeed[i] = 0, n.backAnimStarted[i] = !0, Be("bounceZoomPan" + i, a[i], n.backAnimDestination[i], o || 300, s.easing.sine.out, function(l) {
                                            a[i] = l, D()
                                        }))))
                                    },
                                    calculateAnimOffset: function(i) {
                                        n.backAnimStarted[i] || (n.speedDecelerationRatio[i] = n.speedDecelerationRatio[i] * (n.slowDownRatio[i] + n.slowDownRatioReverse[i] - n.slowDownRatioReverse[i] * n.timeDiff / 10), n.speedDecelerationRatioAbs[i] = Math.abs(n.lastFlickSpeed[i] * n.speedDecelerationRatio[i]), n.distanceOffset[i] = n.lastFlickSpeed[i] * n.speedDecelerationRatio[i] * n.timeDiff, a[i] += n.distanceOffset[i])
                                    },
                                    panAnimLoop: function() {
                                        return R.zoomPan && (R.zoomPan.raf = je(n.panAnimLoop), n.now = B(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), D(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05) ? (a.x = Math.round(a.x), a.y = Math.round(a.y), D(), void Ne("zoomPan")) : void 0
                                    }
                                };
                                return n
                            },
                            $n = function(e) {
                                return e.calculateSwipeSpeed("y"), f = r.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (Et("zoomPan"), e.lastNow = B(), void e.panAnimLoop())
                            },
                            Jn = function(e, t) {
                                var n;
                                M || (ut = m);
                                var i;
                                if (e === "swipe") {
                                    var o = k.x - we.x,
                                        l = t.lastFlickDist.x < 10;
                                    o > pn && (l || t.lastFlickOffset.x > 20) ? i = -1 : -pn > o && (l || t.lastFlickOffset.x < -20) && (i = 1)
                                }
                                var c;
                                i && (m += i, 0 > m ? (m = u.loop ? Z() - 1 : 0, c = !0) : m >= Z() && (m = u.loop ? 0 : Z() - 1, c = !0), (!c || u.loop) && (z += i, ae -= i, n = !0));
                                var d, p = _.x * ae,
                                    g = Math.abs(p - te.x);
                                return n || p > te.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? g / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, ut === m && (n = !1), M = !0, h("mainScrollAnimStart"), Be("mainScroll", te.x, p, d, s.easing.cubic.out, at, function() {
                                    Ue(), M = !1, ut = -1, (n || ut !== m) && r.updateCurrItem(), h("mainScrollAnimComplete")
                                }), n && r.updateCurrItem(!0), n
                            },
                            Qn = function(e) {
                                return 1 / ln * e * oe
                            },
                            jn = function() {
                                var e = v,
                                    t = un(),
                                    n = cn();
                                t > v ? e = t : v > n && (e = n);
                                var i, o = 1,
                                    l = it;
                                return nt && !bt && !ot && t > v ? (r.close(), !0) : (nt && (i = function(c) {
                                    q((o - l) * c + l)
                                }), r.zoomTo(e, 0, 300, s.easing.cubic.out, i), !0)
                            };
                        _e("Gestures", {
                            publicMethods: {
                                initGestures: function() {
                                    var e = function(t, n, i, o, l) {
                                        $e = t + n, Je = t + i, Oe = t + o, Qe = l ? t + l : ""
                                    };
                                    J = x.pointerEvent, J && x.touch && (x.touch = !1), J ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : x.touch ? (e("touch", "start", "move", "end", "cancel"), U = !0) : e("mouse", "down", "move", "up"), Ee = Je + " " + Oe + " " + Qe, Ke = $e, J && !U && (U = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = U, T[$e] = Gn, T[Je] = Vn, T[Oe] = Kn, Qe && (T[Qe] = T[Oe]), x.touch && (Ke += " mousedown", Ee += " mousemove mouseup", T.mousedown = T[$e], T.mousemove = T[Je], T.mouseup = T[Oe]), U || (u.allowPanToNext = !1)
                                }
                            }
                        });
                        var pe, De, _t, Ie, me, Z, ei, bn = function(e, t, n, i) {
                                pe && clearTimeout(pe), Ie = !0, _t = !0;
                                var o;
                                e.initialLayout ? (o = e.initialLayout, e.initialLayout = null) : o = u.getThumbBoundsFn && u.getThumbBoundsFn(m);
                                var l = n ? u.hideAnimationDuration : u.showAnimationDuration,
                                    c = function() {
                                        Ne("initialZoom"), n ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (q(1), t && (t.style.display = "block"), s.addClass(y, "pswp--animated-in"), h("initialZoom" + (n ? "OutEnd" : "InEnd"))), i && i(), Ie = !1
                                    };
                                if (!l || !o || o.x === void 0) {
                                    var d = function() {
                                        h("initialZoom" + (n ? "Out" : "In")), v = e.initialZoomLevel, A(a, e.initialPosition), D(), y.style.opacity = n ? 0 : 1, q(1), c()
                                    };
                                    return void d()
                                }
                                var p = function() {
                                    var g = ft,
                                        b = !r.currItem.src || r.currItem.loadError || u.showHideOpacity;
                                    e.miniImg && (e.miniImg.style.webkitBackfaceVisibility = "hidden"), n || (v = o.w / e.w, a.x = o.x, a.y = o.y - nn, r[b ? "template" : "bg"].style.opacity = .001, D()), Et("initialZoom"), n && !g && s.removeClass(y, "pswp--animated-in"), b && (n ? s[(g ? "remove" : "add") + "Class"](y, "pswp--animate_opacity") : setTimeout(function() {
                                        s.addClass(y, "pswp--animate_opacity")
                                    }, 30)), pe = setTimeout(function() {
                                        if (h("initialZoom" + (n ? "Out" : "In")), n) {
                                            var Me = o.w / e.w,
                                                N = {
                                                    x: a.x,
                                                    y: a.y
                                                },
                                                Se = v,
                                                Ve = it,
                                                Ae = function(H) {
                                                    H === 1 ? (v = Me, a.x = o.x, a.y = o.y - G) : (v = (Me - Se) * H + Se, a.x = (o.x - N.x) * H + N.x, a.y = (o.y - G - N.y) * H + N.y), D(), b ? y.style.opacity = 1 - H : q(Ve - H * Ve)
                                                };
                                            g ? Be("initialZoom", 0, 1, l, s.easing.cubic.out, Ae, c) : (Ae(1), pe = setTimeout(c, l + 20))
                                        } else v = e.initialZoomLevel, A(a, e.initialPosition), D(), q(1), b ? y.style.opacity = 1 : q(1), pe = setTimeout(c, l + 20)
                                    }, n ? 25 : 90)
                                };
                                p()
                            },
                            L = {},
                            fe = [],
                            ti = {
                                index: 0,
                                errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                                forceProgressiveLoading: !1,
                                preload: [1, 1],
                                getNumItemsFn: function() {
                                    return De.length
                                }
                            },
                            Cn = function() {
                                return {
                                    center: {
                                        x: 0,
                                        y: 0
                                    },
                                    max: {
                                        x: 0,
                                        y: 0
                                    },
                                    min: {
                                        x: 0,
                                        y: 0
                                    }
                                }
                            },
                            ni = function(e, t, n) {
                                var i = e.bounds;
                                i.center.x = Math.round((L.x - t) / 2), i.center.y = Math.round((L.y - n) / 2) + e.vGap.top, i.max.x = t > L.x ? Math.round(L.x - t) : i.center.x, i.max.y = n > L.y ? Math.round(L.y - n) + e.vGap.top : i.center.y, i.min.x = t > L.x ? 0 : i.center.x, i.min.y = n > L.y ? e.vGap.top : i.center.y
                            },
                            We = function(e, t, n) {
                                if (e.src && !e.loadError) {
                                    var i = !n;
                                    if (i && (e.vGap || (e.vGap = {
                                            top: 0,
                                            bottom: 0
                                        }), h("parseVerticalMargin", e)), L.x = t.x, L.y = t.y - e.vGap.top - e.vGap.bottom, i) {
                                        var o = L.x / e.w,
                                            l = L.y / e.h;
                                        e.fitRatio = l > o ? o : l;
                                        var c = u.scaleMode;
                                        c === "orig" ? n = 1 : c === "fit" && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = Cn())
                                    }
                                    return n ? (ni(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds) : void 0
                                }
                                return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = Cn(), e.initialPosition = e.bounds.center, e.bounds
                            },
                            dt = function(e, t, n, i, o, l) {
                                if (!t.loadError) {
                                    var c, d = r.isDragging() && !r.isZooming(),
                                        p = e === m || r.isMainScrollAnimating() || d;
                                    !o && (U || u.alwaysFadeIn) && p && (c = !0), i && (c && (i.style.opacity = 0), t.imageAppended = !0, Lt(i, t.w, t.h), n.appendChild(i), c && setTimeout(function() {
                                        i.style.opacity = 1, l && setTimeout(function() {
                                            t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
                                        }, 500)
                                    }, 50))
                                }
                            },
                            Dn = function(e) {
                                e.loading = !0, e.loaded = !1;
                                var t = e.img = s.createEl("pswp__img", "img"),
                                    n = function() {
                                        e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
                                    };
                                return t.onload = n, t.onerror = function() {
                                    e.loadError = !0, n()
                                }, t.src = e.src, t
                            },
                            In = function(e, t) {
                                return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""), e.container.innerHTML = u.errorMsg.replace("%url%", e.src), !0) : void 0
                            },
                            Lt = function(e, t, n) {
                                e.style.width = t + "px", e.style.height = n + "px"
                            },
                            Tn = function() {
                                if (fe.length) {
                                    for (var e, t = 0; t < fe.length; t++) e = fe[t], e.holder.index === e.index && dt(e.index, e.item, e.baseDiv, e.img);
                                    fe = []
                                }
                            };
                        _e("Controller", {
                            publicMethods: {
                                lazyLoadItem: function(e) {
                                    e = st(e);
                                    var t = me(e);
                                    !t || t.loaded || t.loading || (h("gettingData", e, t), t.src && Dn(t))
                                },
                                initController: function() {
                                    s.extend(u, ti, !0), r.items = De = kn, me = r.getItemAt, Z = u.getNumItemsFn, ei = u.loop, Z() < 3 && (u.loop = !1), w("beforeChange", function(e) {
                                        var t, n = u.preload,
                                            i = e === null ? !0 : e > 0,
                                            o = Math.min(n[0], Z()),
                                            l = Math.min(n[1], Z());
                                        for (t = 1;
                                            (i ? l : o) >= t; t++) r.lazyLoadItem(m + t);
                                        for (t = 1;
                                            (i ? o : l) >= t; t++) r.lazyLoadItem(m - t)
                                    }), w("initialLayout", function() {
                                        r.currItem.initialLayout = u.getThumbBoundsFn && u.getThumbBoundsFn(m)
                                    }), w("mainScrollAnimComplete", Tn), w("initialZoomInEnd", Tn), w("destroy", function() {
                                        for (var e, t = 0; t < De.length; t++) e = De[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                                        fe = null
                                    })
                                },
                                getItemAt: function(e) {
                                    return e >= 0 && De[e] !== void 0 ? De[e] : !1
                                },
                                allowProgressiveImg: function() {
                                    return u.forceProgressiveLoading || !U || u.mouseUsed || screen.width > 1200
                                },
                                setContent: function(e, t) {
                                    u.loop && (t = st(t));
                                    var n = r.getItemAt(e.index);
                                    n && (n.container = null);
                                    var i, o = r.getItemAt(t);
                                    if (!o) return void(e.el.innerHTML = "");
                                    h("gettingData", t, o), e.index = t, e.item = o;
                                    var l = o.container = s.createEl("pswp__zoom-wrap");
                                    if (!o.src && o.html && (o.html.tagName ? l.appendChild(o.html) : l.innerHTML = o.html), In(o), !o.src || o.loadError || o.loaded) o.src && !o.loadError && (i = s.createEl("pswp__img", "img"), i.style.webkitBackfaceVisibility = "hidden", i.style.opacity = 1, i.src = o.src, Lt(i, o.w, o.h), dt(t, o, l, i, !0));
                                    else {
                                        if (o.loadComplete = function(p) {
                                                if (he) {
                                                    if (p.img && (p.img.style.webkitBackfaceVisibility = "hidden"), e && e.index === t) {
                                                        if (In(p, !0)) return p.loadComplete = p.img = null, We(p, S), Pe(p), void(e.index === m && r.updateCurrZoomItem());
                                                        p.imageAppended ? !Ie && p.placeholder && (p.placeholder.style.display = "none", p.placeholder = null) : x.transform && (M || Ie) ? fe.push({
                                                            item: p,
                                                            baseDiv: l,
                                                            img: p.img,
                                                            index: t,
                                                            holder: e
                                                        }) : dt(t, p, l, p.img, M || Ie)
                                                    }
                                                    p.loadComplete = null, p.img = null, h("imageLoadComplete", t, p)
                                                }
                                            }, s.features.transform) {
                                            var c = "pswp__img pswp__img--placeholder";
                                            c += o.msrc ? "" : " pswp__img--placeholder--blank";
                                            var d = s.createEl(c, o.msrc ? "img" : "");
                                            o.msrc && (d.src = o.msrc), Lt(d, o.w, o.h), l.appendChild(d), o.placeholder = d
                                        }
                                        o.loading || Dn(o), r.allowProgressiveImg() && (!_t && x.transform ? fe.push({
                                            item: o,
                                            baseDiv: l,
                                            img: o.img,
                                            index: t,
                                            holder: e
                                        }) : dt(t, o, l, o.img, !0, !0))
                                    }
                                    We(o, S), _t || t !== m ? Pe(o) : (K = l.style, bn(o, i || o.img)), e.el.innerHTML = "", e.el.appendChild(l)
                                },
                                cleanSlide: function(e) {
                                    e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                                }
                            }
                        });
                        var ie, Pt = {},
                            zt = function(e, t, n) {
                                var i = document.createEvent("CustomEvent"),
                                    o = {
                                        origEvent: e,
                                        target: e.target,
                                        releasePoint: t,
                                        pointerType: n || "touch"
                                    };
                                i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i)
                            };
                        _e("Tap", {
                            publicMethods: {
                                initTap: function() {
                                    w("firstTouchStart", r.onTapStart), w("touchRelease", r.onTapRelease), w("destroy", function() {
                                        Pt = {}, ie = null
                                    })
                                },
                                onTapStart: function(e) {
                                    e.length > 1 && (clearTimeout(ie), ie = null)
                                },
                                onTapRelease: function(e, t) {
                                    if (t && !ve && !Ct && !ze) {
                                        var n = t;
                                        if (ie && (clearTimeout(ie), ie = null, Bn(n, Pt))) return void h("doubleTap", n);
                                        if (t.type === "mouse") return void zt(e, t, "mouse");
                                        var i = e.target.tagName.toUpperCase();
                                        if (i === "BUTTON" || s.hasClass(e.target, "pswp__single-tap")) return void zt(e, t);
                                        A(Pt, n), ie = setTimeout(function() {
                                            zt(e, t), ie = null
                                        }, 300)
                                    }
                                }
                            }
                        });
                        var P;
                        _e("DesktopZoom", {
                            publicMethods: {
                                initDesktopZoom: function() {
                                    wt || (U ? w("mouseUsed", function() {
                                        r.setupDesktopZoom()
                                    }) : r.setupDesktopZoom(!0))
                                },
                                setupDesktopZoom: function(e) {
                                    P = {};
                                    var t = "wheel mousewheel DOMMouseScroll";
                                    w("bindEvents", function() {
                                        s.bind(y, t, r.handleMouseWheel)
                                    }), w("unbindEvents", function() {
                                        P && s.unbind(y, t, r.handleMouseWheel)
                                    }), r.mouseZoomedIn = !1;
                                    var n, i = function() {
                                            r.mouseZoomedIn && (s.removeClass(y, "pswp--zoomed-in"), r.mouseZoomedIn = !1), 1 > v ? s.addClass(y, "pswp--zoom-allowed") : s.removeClass(y, "pswp--zoom-allowed"), o()
                                        },
                                        o = function() {
                                            n && (s.removeClass(y, "pswp--dragging"), n = !1)
                                        };
                                    w("resize", i), w("afterChange", i), w("pointerDown", function() {
                                        r.mouseZoomedIn && (n = !0, s.addClass(y, "pswp--dragging"))
                                    }), w("pointerUp", o), e || i()
                                },
                                handleMouseWheel: function(e) {
                                    if (v <= r.currItem.fitRatio) return u.closeOnScroll ? ye && Math.abs(e.deltaY) > 2 && (ft = !0, r.close()) : e.preventDefault(), !0;
                                    if (e.preventDefault(), e.stopPropagation(), P.x = 0, "deltaX" in e) e.deltaMode === 1 ? (P.x = 18 * e.deltaX, P.y = 18 * e.deltaY) : (P.x = e.deltaX, P.y = e.deltaY);
                                    else if ("wheelDelta" in e) e.wheelDeltaX && (P.x = -.16 * e.wheelDeltaX), P.y = e.wheelDeltaY ? -.16 * e.wheelDeltaY : -.16 * e.wheelDelta;
                                    else {
                                        if (!("detail" in e)) return;
                                        P.y = e.detail
                                    }
                                    At(v, !0), r.panTo(a.x - P.x, a.y - P.y)
                                },
                                toggleDesktopZoom: function(e) {
                                    e = e || {
                                        x: S.x / 2,
                                        y: S.y / 2 + G
                                    };
                                    var t = u.getDoubleTapZoom(!0, r.currItem),
                                        n = v === t;
                                    r.mouseZoomedIn = !n, r.zoomTo(n ? r.currItem.initialZoomLevel : t, e, 333), s[(n ? "remove" : "add") + "Class"](y, "pswp--zoomed-in")
                                }
                            }
                        });
                        var Nt, Mn, Ge, pt, Ut, Sn, I, Te, Bt, Yt, Y, Ht, ii = {
                                history: !0,
                                galleryUID: 1
                            },
                            Wt = function() {
                                return Y.hash.substring(1)
                            },
                            An = function() {
                                Nt && clearTimeout(Nt), Ge && clearTimeout(Ge)
                            },
                            En = function() {
                                var e = Wt(),
                                    t = {};
                                if (e.length < 5) return t;
                                for (var n = e.split("&"), i = 0; i < n.length; i++)
                                    if (n[i]) {
                                        var o = n[i].split("=");
                                        o.length < 2 || (t[o[0]] = o[1])
                                    }
                                return t.pid = parseInt(t.pid, 10) - 1, t.pid < 0 && (t.pid = 0), t
                            },
                            Gt = function() {
                                if (Ge && clearTimeout(Ge), ze || V) return void(Ge = setTimeout(Gt, 500));
                                pt ? clearTimeout(Mn) : pt = !0;
                                var e = I + "&gid=" + u.galleryUID + "&pid=" + (m + 1);
                                Te || Y.hash.indexOf(e) === -1 && (Yt = !0);
                                var t = Y.href.split("#")[0] + "#" + e;
                                Ht ? "#" + e !== window.location.hash && history[Te ? "replaceState" : "pushState"]("", document.title, t) : Te ? Y.replace(t) : Y.hash = e, Te = !0, Mn = setTimeout(function() {
                                    pt = !1
                                }, 60)
                            };
                        _e("History", {
                            publicMethods: {
                                initHistory: function() {
                                    if (s.extend(u, ii, !0), u.history) {
                                        Y = window.location, Yt = !1, Bt = !1, Te = !1, I = Wt(), Ht = "pushState" in history, I.indexOf("gid=") > -1 && (I = I.split("&gid=")[0], I = I.split("?gid=")[0]), w("afterChange", r.updateURL), w("unbindEvents", function() {
                                            s.unbind(window, "hashchange", r.onHashChange)
                                        });
                                        var e = function() {
                                            Sn = !0, Bt || (Yt ? history.back() : I ? Y.hash = I : Ht ? history.pushState("", document.title, Y.pathname + Y.search) : Y.hash = ""), An()
                                        };
                                        w("unbindEvents", function() {
                                            ft && e()
                                        }), w("destroy", function() {
                                            Sn || e()
                                        }), w("firstUpdate", function() {
                                            m = En().pid
                                        });
                                        var t = I.indexOf("pid=");
                                        t > -1 && (I = I.substring(0, t), I.slice(-1) === "&" && (I = I.slice(0, -1))), setTimeout(function() {
                                            he && s.bind(window, "hashchange", r.onHashChange)
                                        }, 40)
                                    }
                                },
                                onHashChange: function() {
                                    return Wt() === I ? (Bt = !0, void r.close()) : void(pt || (Ut = !0, r.goTo(En().pid), Ut = !1))
                                },
                                updateURL: function() {
                                    An(), Ut || (Te ? Nt = setTimeout(Gt, 800) : Gt())
                                }
                            }
                        }), s.extend(r, Nn)
                    };
                    return qt
                })
            }
        }
    ])
})();