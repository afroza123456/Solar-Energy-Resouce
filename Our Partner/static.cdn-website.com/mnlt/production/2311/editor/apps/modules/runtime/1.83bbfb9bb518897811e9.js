(function() {
    var We = document && document.currentScript && document.currentScript.src;
    (window.webpackJsonpruntime = window.webpackJsonpruntime || []).push([
        [1], {
            eC3R: function(J, p, m) {
                "use strict";
                m.r(p);
                var O = m("qeDE");
                m.d(p, "animation", function() {
                    return O
                });
                var _ = m("JGCB");
                m.d(p, "scrollResponder", function() {
                    return _
                });
                var E = m("IN6v");
                m.d(p, "miniHeader", function() {
                    return E
                });
                var K = m("9VKv");
                m.d(p, "facebookWidgets", function() {
                    return K
                })
            },
            qeDE: function(J, p, m) {
                "use strict";
                m.r(p), m.d(p, "init", function() {
                    return Be
                }), m.d(p, "initAnimations", function() {
                    return k
                });
                var O = m("DaUp"),
                    _ = m.n(O),
                    E = m("yXPU"),
                    K = m.n(E),
                    V = m("8OQS"),
                    g = m.n(V),
                    Z = m("E+oP"),
                    G = m.n(Z),
                    D = m("9iID"),
                    j = m("cU+2"),
                    M = m("LyWx");

                function T() {
                    return window.dmStr || window.parent.dmStr
                }

                function P(e, t) {
                    const n = e.startsWith("ui.") ? e : `ui.ed.${e}`;
                    let r = T() && (T()[n] || T()[e]) || e;
                    return t && Object.keys(t).forEach(o => {
                        r = r.replace(`{${o}}`, t[o])
                    }), r
                }
                const H = ["from"],
                    ee = ["from"],
                    te = ["from"];

                function d(e) {
                    try {
                        return P(e)
                    } catch (t) {
                        return ""
                    }
                }

                function $(e = 1) {
                    return {
                        effect: "fade-in",
                        options: {
                            intensity: 1,
                            duration: e
                        }
                    }
                }

                function y(e, t = 1) {
                    return {
                        mix: [$(t), e]
                    }
                }

                function h(e) {
                    let {
                        from: t
                    } = e;
                    const r = (g()(e, H).intensity || 1) * 100;
                    return {
                        effect: "translate-2d",
                        options: {
                            use3d: !0,
                            unit: "%",
                            startX: t === "up" || t === "down" ? 0 : r * (t === "right" ? 1 : -1),
                            endX: 0,
                            startY: t === "up" || t === "down" ? r * (t === "up" ? 1 : -1) : 0,
                            endY: 0
                        }
                    }
                }

                function L(e) {
                    let {
                        from: t
                    } = e, n = g()(e, ee);
                    return y(h(Object.assign({
                        from: t
                    }, n)))
                }

                function F(e) {
                    let {
                        from: t
                    } = e, n = g()(e, te);
                    return y({
                        effect: t ? "bounce-in" : "bounce",
                        options: {
                            from: t,
                            intensity: n.intensity || 1,
                            easing: "cubic-bezier(0.215, 0.61, 0.355, 1)"
                        }
                    }, .6)
                }

                function ne(e) {
                    const t = (e == null ? void 0 : e.intensity) || 1,
                        n = t <= 1 ? .3 + .7 * (1 - t) : .3 / t;
                    return y({
                        effect: "scale",
                        options: {
                            from: n,
                            to: 1
                        }
                    }, .5)
                }

                function ie(e, t = "center") {
                    return y({
                        effect: {
                            timeline: {
                                0: {
                                    transform: `rotate3d(0, 0, 1, ${e}deg)`,
                                    "transform-origin": `${t}`
                                },
                                100: {
                                    transform: "rotate3d(0, 0, 1, 0deg)"
                                }
                            }
                        }
                    })
                }

                function I(e) {
                    let t, n;
                    switch (e.from) {
                        case "topRight":
                            {
                                t = -45,
                                n = "left bottom";
                                break
                            }
                        case "topLeft":
                            {
                                t = 45,
                                n = "right bottom";
                                break
                            }
                        case "bottomRight":
                            {
                                t = 45,
                                n = "left bottom";
                                break
                            }
                        case "bottomLeft":
                            {
                                t = -90,
                                n = "right bottom";
                                break
                            }
                        default:
                            t = -200, n = "center"
                    }
                    return ie(t * (e.intensity || 1), n)
                }

                function B(e) {
                    const t = (e == null ? void 0 : e.intensity) || 1,
                        n = e.from === "right" ? 1 : -1;
                    return y({
                        effect: {
                            timeline: {
                                0: {
                                    transform: `translate3d(${n*100*t}%, 0px, 0px) rotate3d(0, 0, 1, ${n*120*t}deg)`
                                },
                                100: {
                                    transform: "translate3d(0%, 0px, 0px)  rotate3d(0, 0, 1, 0deg)"
                                }
                            }
                        }
                    })
                }
                const re = [{
                        presetKey: "none",
                        name: d("ui.none"),
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "fadeIn",
                        name: d("ui.animations.new.presets.Fade_in"),
                        damDescriptor: e => $(e.duration),
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "fadeInRight",
                        name: d("ui.animations.new.presets.Fade_in_from_Right"),
                        damDescriptor: e => L(Object.assign({
                            from: "right"
                        }, e)),
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "fadeInLeft",
                        name: d("ui.animations.new.presets.Fade_in_from_Left"),
                        damDescriptor: e => L(Object.assign({
                            from: "left"
                        }, e)),
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "fadeInUp",
                        name: d("ui.animations.new.presets.Fade_in_from_Bottom"),
                        damDescriptor: e => L(Object.assign({
                            from: "up"
                        }, e)),
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "slideInRight",
                        name: d("ui.animations.new.presets.Slide_in_from_right"),
                        damDescriptor: e => h(Object.assign({
                            from: "right"
                        }, e)),
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "slideInLeft",
                        name: d("ui.animations.new.presets.Slide_in_from_left"),
                        damDescriptor: e => h(Object.assign({
                            from: "left"
                        }, e))
                    }, {
                        presetKey: "slideInDown",
                        name: d("ui.animations.new.presets.Slide_in_from_top"),
                        damDescriptor: e => h(Object.assign({
                            from: "down"
                        }, e)),
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "slideInUp",
                        name: d("ui.animations.new.presets.Slide_in_from_bottom"),
                        damDescriptor: e => h(Object.assign({
                            from: "up"
                        }, e))
                    }, {
                        presetKey: "bounceIn",
                        name: d("ui.animations.new.presets.Bounce_In"),
                        damDescriptor: e => F(Object.assign({
                            from: ""
                        }, e)),
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "bounceInRight",
                        name: d("ui.animations.new.presets.Bounce_in_from_Right"),
                        damDescriptor: e => F(Object.assign({
                            from: "right"
                        }, e)),
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "bounceInLeft",
                        name: d("ui.animations.new.presets.Bounce_in_from_Left"),
                        damDescriptor: e => F(Object.assign({
                            from: "left"
                        }, e)),
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "rotateIn",
                        name: d("ui.animations.new.presets.RotateIn"),
                        damDescriptor: e => I(e),
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "rotateInDownLeft",
                        name: d("ui.animations.new.presets.Rotate_in_from_top_right"),
                        damDescriptor: e => I(Object.assign({
                            from: "topRight"
                        }, e))
                    }, {
                        presetKey: "rotateInDownRight",
                        name: d("ui.animations.new.presets.Rotate_in_from_top_left"),
                        damDescriptor: e => I(Object.assign({
                            from: "topLeft"
                        }, e))
                    }, {
                        presetKey: "rotateInUpLeft",
                        name: d("ui.animations.new.presets.Rotate_in_from_bottom_right"),
                        damDescriptor: e => I(Object.assign({
                            from: "bottomRight"
                        }, e))
                    }, {
                        presetKey: "rotateInUpRight",
                        name: d("ui.animations.new.presets.Rotate_in_from_bottom_left"),
                        damDescriptor: e => I(Object.assign({
                            from: "bottomLeft"
                        }, e))
                    }, {
                        presetKey: "rollInFromRight",
                        name: d("ui.animations.new.presets.Roll_in_from_right"),
                        damDescriptor: e => B(Object.assign({
                            from: "right"
                        }, e)),
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "rollInFromLeft",
                        name: d("ui.animations.new.presets.Roll_in_from_left"),
                        damDescriptor: e => B(e)
                    }, {
                        presetKey: "zoomIn",
                        name: d("ui.animations.new.presets.Zoom_In"),
                        damDescriptor: e => ne(e),
                        visibleOnQuickMenu: !0
                    }],
                    oe = ["from"],
                    ae = ["dir"],
                    se = ["dir"],
                    me = ["dir"],
                    b = {
                        ENTRANCE: "entrance",
                        VIEWPORT: "viewport"
                    },
                    s = Object.values(b);

                function i(e) {
                    try {
                        return P(e)
                    } catch (t) {
                        return ""
                    }
                }

                function X(e = 1) {
                    return {
                        effect: "fade-in",
                        options: {
                            intensity: 1,
                            duration: e
                        }
                    }
                }

                function w(e, t = 1) {
                    return {
                        mix: [X(t), e]
                    }
                }

                function A(e) {
                    let {
                        from: t
                    } = e;
                    const r = (g()(e, oe).intensity || 1) * 100;
                    return {
                        effect: "translate-2d",
                        options: {
                            use3d: !0,
                            unit: "%",
                            startX: t === "up" || t === "down" ? 0 : r * (t === "right" ? 1 : -1),
                            endX: 0,
                            startY: t === "up" || t === "down" ? r * (t === "up" ? 1 : -1) : 0,
                            endY: 0
                        }
                    }
                }

                function le(e) {
                    let {
                        dir: t
                    } = e, n = g()(e, ae);
                    return w(A(Object.assign({
                        from: t
                    }, n)))
                }

                function de(e) {
                    let {
                        dir: t
                    } = e, n = g()(e, se);
                    return pe(A(Object.assign({
                        from: t
                    }, n)))
                }

                function ue(e) {
                    const t = e.intensity || 1,
                        n = e.dir,
                        r = [n === "Y", n === "X", !1].map(a => a ? 1 : 0).join(","),
                        o = 90 * t;
                    return w({
                        effect: {
                            timeline: {
                                0: {
                                    transform: `rotate3d(${r}, -${o}deg)`
                                },
                                33: {
                                    transform: `rotate3d(${r}, -${o/3}deg)`
                                },
                                66: {
                                    transform: `rotate3d(${r}, -${o/9}deg)`
                                },
                                100: {
                                    transform: `rotate3d(${r}, 0deg)`
                                }
                            }
                        }
                    }, .6)
                }

                function ce(e) {
                    let {
                        dir: t
                    } = e, n = g()(e, me);
                    return w({
                        effect: t === "in-place" ? "bounce" : "bounce-in",
                        options: {
                            from: t === "in-place" ? "" : t,
                            intensity: n.intensity || 1,
                            easing: "cubic-bezier(0.215, 0.61, 0.355, 1)"
                        }
                    }, .6)
                }

                function pe(e) {
                    return {
                        mix: [Q(), e]
                    }
                }

                function Q(e) {
                    const t = (e == null ? void 0 : e.intensity) || 1,
                        n = t <= 1 ? .3 + .7 * (1 - t) : .3 / t;
                    return w({
                        effect: "scale",
                        options: {
                            from: n,
                            to: 1
                        }
                    }, .5)
                }

                function fe(e, t = "center") {
                    return w({
                        effect: {
                            timeline: {
                                0: {
                                    transform: `rotate3d(0, 0, 1, ${e}deg)`,
                                    "transform-origin": `${t}`
                                },
                                100: {
                                    transform: "rotate3d(0, 0, 1, 0deg)"
                                }
                            }
                        }
                    })
                }

                function ge(e) {
                    let t, n;
                    switch (e.dir) {
                        case "topRight":
                            {
                                t = -45,
                                n = "left bottom";
                                break
                            }
                        case "topLeft":
                            {
                                t = 45,
                                n = "right bottom";
                                break
                            }
                        case "bottomRight":
                            {
                                t = 45,
                                n = "left bottom";
                                break
                            }
                        case "bottomLeft":
                            {
                                t = -90,
                                n = "right bottom";
                                break
                            }
                        default:
                            t = -200, n = "center"
                    }
                    return fe(t * (e.intensity || 1), n)
                }

                function be(e) {
                    const t = (e == null ? void 0 : e.intensity) || 1,
                        n = e.dir === "right" ? 1 : -1;
                    return w({
                        effect: {
                            timeline: {
                                0: {
                                    transform: `translate3d(${n*100*t}%, 0px, 0px) rotate3d(0, 0, 1, ${n*120*t}deg)`
                                },
                                100: {
                                    transform: "translate3d(0%, 0px, 0px)  rotate3d(0, 0, 1, 0deg)"
                                }
                            }
                        }
                    })
                }

                function ve(e) {
                    const t = (e == null ? void 0 : e.intensity) || 1,
                        n = [{
                            rotate: 0
                        }, {
                            scaleSign: "-",
                            rotate: -3
                        }, {
                            scaleSign: "-",
                            rotate: -3
                        }, {
                            scaleSign: "+",
                            rotate: 3
                        }, {
                            scaleSign: "+",
                            rotate: -3
                        }, {
                            scaleSign: "+",
                            rotate: 3
                        }, {
                            scaleSign: "+",
                            rotate: -3
                        }, {
                            scaleSign: "+",
                            rotate: 3
                        }, {
                            scaleSign: "+",
                            rotate: -3
                        }, {
                            scaleSign: "+",
                            rotate: 3
                        }, {
                            scaleSign: 1,
                            rotate: 0
                        }],
                        r = 100 / (n.length - 1);
                    return {
                        effect: {
                            timeline: n.reduce((a, l, u) => {
                                let c = 1;
                                switch (l.scaleSign) {
                                    case "-":
                                        {
                                            c -= t / 10;
                                            break
                                        }
                                    case "+":
                                        {
                                            c += t / 10;
                                            break
                                        }
                                }
                                const v = `scale3d(${c}, ${c}, ${c})`,
                                    f = `rotate3d(0, 0, 1, ${l.rotate*t}deg)`;
                                return a[r * u] = {
                                    transform: `${v} ${f}`
                                }, a
                            }, {})
                        }
                    }
                }

                function we(e) {
                    const t = (e == null ? void 0 : e.intensity) || 1,
                        n = .03 * t,
                        r = 1 + n;
                    return {
                        effect: {
                            timeline: {
                                0: {
                                    transform: "scale3d(1, 1, 1)"
                                },
                                50: {
                                    transform: `scale3d(${r}, ${r}, ${r})`
                                },
                                100: {
                                    transform: "scale3d(1, 1, 1)"
                                }
                            }
                        }
                    }
                }

                function ye(e) {
                    const t = (e == null ? void 0 : e.intensity) || 1;
                    let n = Math.max(3, Math.floor(5 * t));
                    n % 2 == 0 && n++;
                    const r = 100 / (n - 1),
                        o = {};
                    let a = 1;
                    for (let l = 0; l < n; l++) o[l === n - 1 ? 100 : l * r] = {
                        opacity: a
                    }, a ^= 1;
                    return {
                        effect: {
                            timeline: o
                        }
                    }
                }

                function he(e) {
                    const t = (e == null ? void 0 : e.intensity) || 1;
                    return {
                        effect: {
                            timeline: [{
                                rotate: 0,
                                startTime: 0
                            }, {
                                rotate: 15,
                                startTime: 20
                            }, {
                                rotate: -10,
                                startTime: 40
                            }, {
                                rotate: 5,
                                startTime: 60
                            }, {
                                rotate: -5,
                                startTime: 80
                            }, {
                                rotate: 0,
                                startTime: 100
                            }].reduce((o, a) => (o[a.startTime] = {
                                transform: `rotate3d(0, 0, 1, ${a.rotate*t}deg)`
                            }, o), {})
                        }
                    }
                }

                function Ie(e) {
                    const t = (e == null ? void 0 : e.intensity) || 1;
                    return {
                        effect: {
                            timeline: [{
                                xTranslate: 0,
                                rotate: 0,
                                startTime: 0
                            }, {
                                xTranslate: -25,
                                rotate: -5,
                                startTime: 15
                            }, {
                                xTranslate: 20,
                                rotate: 3,
                                startTime: 30
                            }, {
                                xTranslate: -15,
                                rotate: -3,
                                startTime: 45
                            }, {
                                xTranslate: 10,
                                rotate: 2,
                                startTime: 60
                            }, {
                                xTranslate: -5,
                                rotate: -1,
                                startTime: 75
                            }, {
                                xTranslate: 0,
                                rotate: 0,
                                startTime: 100
                            }].reduce((o, a) => (o[a.startTime] = {
                                transform: `translate3d(${a.xTranslate*t}%, 0px, 0px) rotate3d(0, 0, 1, ${a.rotate*t}deg)`
                            }, o), {})
                        }
                    }
                }

                function De(e) {
                    const t = (e == null ? void 0 : e.intensity) || 1;
                    return {
                        effect: {
                            timeline: [{
                                stepTime: 0,
                                scaleDiff: [0, 0, 0]
                            }, {
                                stepTime: 30,
                                scaleDiff: [.25, -.25, 0]
                            }, {
                                stepTime: 40,
                                scaleDiff: [-.25, .25, 0]
                            }, {
                                stepTime: 50,
                                scaleDiff: [.15, -.15, 0]
                            }, {
                                stepTime: 65,
                                scaleDiff: [-.05, .05, 0]
                            }, {
                                stepTime: 75,
                                scaleDiff: [.05, -.05, 0]
                            }, {
                                stepTime: 100,
                                scaleDiff: [0, 0, 0]
                            }].reduce((o, a) => {
                                const l = a.scaleDiff.map(u => u * t + 1).join(",");
                                return o[a.stepTime] = {
                                    transform: `scale3d(${l})`
                                }, o
                            }, {})
                        }
                    }
                }

                function xe(e) {
                    const t = (e == null ? void 0 : e.intensity) || 1,
                        n = [{
                            translateX: 0
                        }, {
                            translateX: -10
                        }, {
                            translateX: 10
                        }, {
                            translateX: -10
                        }, {
                            translateX: 10
                        }, {
                            translateX: -10
                        }, {
                            translateX: 10
                        }, {
                            translateX: -10
                        }, {
                            translateX: 10
                        }, {
                            translateX: -10
                        }, {
                            translateX: 0
                        }],
                        r = 100 / (n.length - 1);
                    return {
                        effect: {
                            timeline: n.reduce((a, l, u) => (a[u * r] = {
                                transform: `translate3d(${l.translateX*t}px, 0, 0)`
                            }, a), {})
                        }
                    }
                }
                const R = window === window.top && window._flags && !window._flags["editor.animations.directions-ui.enabled"] ? re : [{
                        presetKey: "none",
                        triggers: s,
                        name: i("ui.none"),
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "fadeInCombo",
                        triggers: s,
                        name: i("ui.animations.new.presets.combo.Fade_in"),
                        reversibleName: i("ui.animations.new.presets.combo.Fade"),
                        damDescriptor: e => e.dir === "in-place" ? X(e.duration) : le(e),
                        additionalOptions: [{
                            optionName: "dir",
                            optionLabel: i("ui.animations.new.presets.label.Direction"),
                            values: [{
                                value: "in-place",
                                label: i("ui.animations.new.directions.In_place")
                            }, {
                                value: "right",
                                label: i("ui.animations.new.directions.From_right"),
                                reversedLabel: i("ui.animations.new.directions.From_right.reversed")
                            }, {
                                value: "left",
                                label: i("ui.animations.new.directions.From_left"),
                                reversedLabel: i("ui.animations.new.directions.From_left.reversed")
                            }, {
                                value: "up",
                                label: i("ui.animations.new.directions.From_bottom"),
                                reversedLabel: i("ui.animations.new.directions.From_bottom.reversed")
                            }, {
                                value: "down",
                                label: i("ui.animations.new.directions.From_top"),
                                reversedLabel: i("ui.animations.new.directions.From_top.reversed")
                            }]
                        }]
                    }, {
                        presetKey: "fadeIn",
                        triggers: s,
                        name: i("ui.animations.new.presets.Fade_in"),
                        equivalent: {
                            presetKey: "fadeInCombo",
                            options: {
                                dir: "in-place"
                            }
                        },
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "fadeInRight",
                        triggers: s,
                        name: i("ui.animations.new.presets.Fade_in_from_Right"),
                        equivalent: {
                            presetKey: "fadeInCombo",
                            options: {
                                dir: "right"
                            }
                        }
                    }, {
                        presetKey: "fadeInLeft",
                        triggers: s,
                        name: i("ui.animations.new.presets.Fade_in_from_Left"),
                        equivalent: {
                            presetKey: "fadeInCombo",
                            options: {
                                dir: "left"
                            }
                        }
                    }, {
                        presetKey: "fadeInUp",
                        triggers: s,
                        name: i("ui.animations.new.presets.Fade_in_from_Bottom"),
                        equivalent: {
                            presetKey: "fadeInCombo",
                            options: {
                                dir: "up"
                            }
                        }
                    }, {
                        presetKey: "slideInCombo",
                        triggers: s,
                        name: i("ui.animations.new.presets.combo.Slide_in"),
                        reversibleName: i("ui.animations.new.presets.combo.Slide"),
                        damDescriptor: e => A(Object.assign({
                            from: e.dir
                        }, e)),
                        additionalOptions: [{
                            optionName: "dir",
                            optionLabel: i("ui.animations.new.presets.label.Direction"),
                            values: [{
                                value: "right",
                                label: i("ui.animations.new.directions.From_right"),
                                reversedLabel: i("ui.animations.new.directions.From_right.reversed")
                            }, {
                                value: "left",
                                label: i("ui.animations.new.directions.From_left"),
                                reversedLabel: i("ui.animations.new.directions.From_left.reversed")
                            }, {
                                value: "up",
                                label: i("ui.animations.new.directions.From_bottom"),
                                reversedLabel: i("ui.animations.new.directions.From_bottom.reversed")
                            }, {
                                value: "down",
                                label: i("ui.animations.new.directions.From_top"),
                                reversedLabel: i("ui.animations.new.directions.From_top.reversed")
                            }]
                        }]
                    }, {
                        presetKey: "slideInRight",
                        triggers: s,
                        name: i("ui.animations.new.presets.Slide_in_from_right"),
                        equivalent: {
                            presetKey: "slideInCombo",
                            options: {
                                dir: "right"
                            }
                        },
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "slideInLeft",
                        triggers: s,
                        name: i("ui.animations.new.presets.Slide_in_from_left"),
                        equivalent: {
                            presetKey: "slideInCombo",
                            options: {
                                dir: "left"
                            }
                        }
                    }, {
                        presetKey: "slideInDown",
                        triggers: s,
                        name: i("ui.animations.new.presets.Slide_in_from_top"),
                        equivalent: {
                            presetKey: "slideInCombo",
                            options: {
                                dir: "down"
                            }
                        }
                    }, {
                        presetKey: "slideInUp",
                        triggers: s,
                        name: i("ui.animations.new.presets.Slide_in_from_bottom"),
                        equivalent: {
                            presetKey: "slideInCombo",
                            options: {
                                dir: "up"
                            }
                        }
                    }, {
                        presetKey: "bounceInCombo",
                        triggers: s,
                        name: i("ui.animations.new.presets.combo.Bounce_in"),
                        reversibleName: i("ui.animations.new.presets.combo.bounce"),
                        damDescriptor: e => ce(e),
                        additionalOptions: [{
                            optionName: "dir",
                            optionLabel: i("ui.animations.new.presets.label.Direction"),
                            values: [{
                                value: "in-place",
                                label: i("ui.animations.new.directions.In_place")
                            }, {
                                value: "right",
                                label: i("ui.animations.new.directions.From_right"),
                                reversedLabel: i("ui.animations.new.directions.From_right.reversed")
                            }, {
                                value: "left",
                                label: i("ui.animations.new.directions.From_left"),
                                reversedLabel: i("ui.animations.new.directions.From_left.reversed")
                            }, {
                                value: "down",
                                label: i("ui.animations.new.directions.From_bottom"),
                                reversedLabel: i("ui.animations.new.directions.From_bottom.reversed")
                            }, {
                                value: "up",
                                label: i("ui.animations.new.directions.From_top"),
                                reversedLabel: i("ui.animations.new.directions.From_top.reversed")
                            }]
                        }]
                    }, {
                        presetKey: "bounceIn",
                        triggers: s,
                        name: i("ui.animations.new.presets.Bounce_In"),
                        equivalent: {
                            presetKey: "bounceInCombo",
                            options: {
                                dir: "in-place"
                            }
                        },
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "bounceInRight",
                        triggers: s,
                        name: i("ui.animations.new.presets.Bounce_in_from_Right"),
                        equivalent: {
                            presetKey: "bounceInCombo",
                            options: {
                                dir: "right"
                            }
                        }
                    }, {
                        presetKey: "bounceInLeft",
                        triggers: s,
                        name: i("ui.animations.new.presets.Bounce_in_from_Left"),
                        equivalent: {
                            presetKey: "bounceInCombo",
                            options: {
                                dir: "left"
                            }
                        }
                    }, {
                        presetKey: "rotateInCombo",
                        triggers: s,
                        name: i("ui.animations.new.presets.combo.Rotate_in"),
                        reversibleName: i("ui.animations.new.presets.combo.Rotate"),
                        damDescriptor: e => ge(e),
                        additionalOptions: [{
                            optionName: "dir",
                            optionLabel: i("ui.animations.new.presets.label.Direction"),
                            values: [{
                                value: "in-place",
                                label: i("ui.animations.new.directions.In_place")
                            }, {
                                value: "topRight",
                                label: i("ui.animations.new.directions.From_top_right"),
                                reversedLabel: i("ui.animations.new.directions.From_top_right.reversed")
                            }, {
                                value: "topLeft",
                                label: i("ui.animations.new.directions.From_top_left"),
                                reversedLabel: i("ui.animations.new.directions.From_top_left.reversed")
                            }, {
                                value: "bottomRight",
                                label: i("ui.animations.new.directions.From_bottom_right"),
                                reversedLabel: i("ui.animations.new.directions.From_bottom_right.reversed")
                            }, {
                                value: "bottomLeft",
                                label: i("ui.animations.new.directions.From_bottom_left"),
                                reversedLabel: i("ui.animations.new.directions.From_bottom_left.reversed")
                            }]
                        }]
                    }, {
                        presetKey: "rotateIn",
                        triggers: s,
                        name: i("ui.animations.new.presets.RotateIn"),
                        equivalent: {
                            presetKey: "rotateInCombo",
                            options: {
                                dir: "in-place"
                            }
                        },
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "rotateInDownLeft",
                        triggers: s,
                        name: i("ui.animations.new.presets.Rotate_in_from_top_right"),
                        equivalent: {
                            presetKey: "rotateInCombo",
                            options: {
                                dir: "topRight"
                            }
                        }
                    }, {
                        presetKey: "rotateInDownRight",
                        triggers: s,
                        name: i("ui.animations.new.presets.Rotate_in_from_top_left"),
                        equivalent: {
                            presetKey: "rotateInCombo",
                            options: {
                                dir: "topLeft"
                            }
                        }
                    }, {
                        presetKey: "rotateInUpLeft",
                        triggers: s,
                        name: i("ui.animations.new.presets.Rotate_in_from_bottom_right"),
                        equivalent: {
                            presetKey: "rotateInCombo",
                            options: {
                                dir: "bottomRight"
                            }
                        }
                    }, {
                        presetKey: "rotateInUpRight",
                        triggers: s,
                        name: i("ui.animations.new.presets.Rotate_in_from_bottom_left"),
                        equivalent: {
                            presetKey: "rotateInCombo",
                            options: {
                                dir: "bottomLeft"
                            }
                        }
                    }, {
                        presetKey: "rollInCombo",
                        triggers: s,
                        name: i("ui.animations.new.presets.combo.Roll_in"),
                        reversibleName: i("ui.animations.new.presets.combo.Roll"),
                        damDescriptor: e => be(e),
                        additionalOptions: [{
                            optionName: "dir",
                            optionLabel: i("ui.animations.new.presets.label.Direction"),
                            values: [{
                                value: "right",
                                label: i("ui.animations.new.directions.From_right"),
                                reversedLabel: i("ui.animations.new.directions.From_right.reversed")
                            }, {
                                value: "left",
                                label: i("ui.animations.new.directions.From_left"),
                                reversedLabel: i("ui.animations.new.directions.From_left.reversed")
                            }]
                        }]
                    }, {
                        presetKey: "rollInFromRight",
                        triggers: s,
                        name: i("ui.animations.new.presets.Roll_in_from_right"),
                        equivalent: {
                            presetKey: "rollInCombo",
                            options: {
                                dir: "right"
                            }
                        },
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "rollInFromLeft",
                        name: i("ui.animations.new.presets.Roll_in_from_left"),
                        equivalent: {
                            presetKey: "rollInCombo",
                            options: {
                                dir: "left"
                            }
                        }
                    }, {
                        presetKey: "zoomIn",
                        triggers: s,
                        name: i("ui.animations.new.presets.Zoom_In"),
                        equivalent: {
                            presetKey: "zoomInCombo",
                            options: {
                                dir: "in-place"
                            }
                        },
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "zoomInCombo",
                        triggers: s,
                        name: i("ui.animations.new.presets.combo.Zoom_In"),
                        reversibleName: i("ui.animations.new.presets.combo.Zoom"),
                        damDescriptor: e => e.dir === "in-place" ? Q(e) : de(e),
                        additionalOptions: [{
                            optionName: "dir",
                            optionLabel: i("ui.animations.new.presets.label.Direction"),
                            values: [{
                                value: "in-place",
                                label: i("ui.animations.new.directions.In_place")
                            }, {
                                value: "right",
                                label: i("ui.animations.new.directions.From_right"),
                                reversedLabel: i("ui.animations.new.directions.From_right.reversed")
                            }, {
                                value: "left",
                                label: i("ui.animations.new.directions.From_left"),
                                reversedLabel: i("ui.animations.new.directions.From_left.reversed")
                            }, {
                                value: "up",
                                label: i("ui.animations.new.directions.From_bottom"),
                                reversedLabel: i("ui.animations.new.directions.From_bottom.reversed")
                            }, {
                                value: "down",
                                label: i("ui.animations.new.directions.From_top"),
                                reversedLabel: i("ui.animations.new.directions.From_top.reversed")
                            }]
                        }]
                    }, {
                        presetKey: "flipInHorizontally",
                        triggers: s,
                        name: i("ui.animations.new.presets.Flip_in_horizontally"),
                        equivalent: {
                            presetKey: "flipInCombo",
                            options: {
                                dir: "X"
                            }
                        },
                        visibleOnQuickMenu: !0
                    }, {
                        presetKey: "flipInCombo",
                        triggers: s,
                        name: i("ui.animations.new.presets.combo.flip_in"),
                        reversibleName: i("ui.animations.new.presets.combo.Flip"),
                        damDescriptor: e => ue(e),
                        defaultValues: {
                            viewportThresholds: {
                                bottom: 40
                            }
                        },
                        additionalOptions: [{
                            optionName: "dir",
                            optionLabel: i("ui.animations.new.presets.label.Direction"),
                            values: [{
                                value: "X",
                                label: i("ui.animations.new.directions.flipX")
                            }, {
                                value: "Y",
                                label: i("ui.animations.new.directions.flipY")
                            }]
                        }]
                    }, {
                        presetKey: "flash",
                        name: i("ui.animations.new.presets.combo.flash"),
                        damDescriptor: ye,
                        triggers: [b.ENTRANCE]
                    }, {
                        presetKey: "pulse",
                        name: i("ui.animations.new.presets.combo.pulse"),
                        damDescriptor: we,
                        triggers: [b.ENTRANCE]
                    }, {
                        presetKey: "rubberBand",
                        name: i("ui.animations.new.presets.combo.rubberBand"),
                        damDescriptor: De,
                        triggers: [b.ENTRANCE]
                    }, {
                        presetKey: "shake",
                        name: i("ui.animations.new.presets.combo.shake"),
                        damDescriptor: xe,
                        triggers: [b.ENTRANCE]
                    }, {
                        presetKey: "swing",
                        name: i("ui.animations.new.presets.combo.swing"),
                        damDescriptor: he,
                        triggers: [b.ENTRANCE]
                    }, {
                        presetKey: "tada",
                        name: i("ui.animations.new.presets.combo.tada"),
                        damDescriptor: ve,
                        triggers: [b.ENTRANCE]
                    }, {
                        presetKey: "wobble",
                        name: i("ui.animations.new.presets.combo.wobble"),
                        damDescriptor: Ie,
                        triggers: [b.ENTRANCE]
                    }],
                    Oe = ["options"],
                    S = "data-anim-extended",
                    _e = {
                        top: `${D.a.get("editor.animations.viewportThreshold.top",0)}%`,
                        bottom: `${D.a.get("editor.animations.viewportThreshold.bottom",0)}%`
                    },
                    qe = {
                        top: `${D.a.get("editor.animations.viewportThreshold.outEffects.top",0)}%`,
                        bottom: `${D.a.get("editor.animations.viewportThreshold.outEffects.bottom",0)}%`
                    },
                    Ee = {
                        duration: 1,
                        delay: 0,
                        intensity: 1
                    };

                function Ke(e) {
                    var t;
                    const n = Object.assign({}, _e, e == null || (t = e.defaultValues) === null || t === void 0 ? void 0 : t.viewportThresholds);
                    return {
                        reverse: !1,
                        intensity: 1,
                        viewportThresholds: n
                    }
                }

                function Te(e, t = {}) {
                    const n = R.find(a => a.presetKey === e.animation);
                    if (n != null && n.equivalent) return Te(Object.assign({}, e, {
                        animation: n.equivalent.presetKey,
                        options: Object.assign({}, e.options, n.equivalent.options)
                    }), t);
                    const {
                        options: r
                    } = e, o = g()(e, Oe);
                    return Object.assign({
                        options: Object.assign({}, e.trigger === "entrance" ? Ee : {}, e.trigger === "viewport" ? Ke(n) : {}, t, r)
                    }, o)
                }

                function Le({
                    animationData: e,
                    device: t,
                    deviceAnimationData: n
                }) {
                    const {
                        animation: r,
                        trigger: o,
                        options: a
                    } = n, l = Object.assign({}, e, {
                        [t]: r === "none" ? {} : Object.assign({
                            trigger: o,
                            animation: r
                        }, a)
                    });
                    return !Object.values(l).some(c => !G()(c)) ? null : l
                }

                function ke(e) {
                    return C.apply(this, arguments)
                }

                function C() {
                    return C = K()(function*({
                        selector: e,
                        element: t = Object(j.f)(e)[0],
                        deviceAnimationData: n,
                        device: r,
                        persist: o = () => {}
                    }) {
                        const {
                            animation: a,
                            trigger: l,
                            options: u
                        } = n, c = Le({
                            animationData: z(t),
                            device: r,
                            deviceAnimationData: n
                        }), v = `data-anim-${r}`, f = {
                            [S]: Fe(c),
                            [v]: l === "entrance" ? a : null
                        };
                        return Object(j.b)().inlineEdit.applyAnimation({
                            element: t,
                            animationData: {
                                animation: a,
                                trigger: l,
                                options: u
                            }
                        }), o(f)
                    }), C.apply(this, arguments)
                }

                function Fe(e) {
                    return e ? btoa(JSON.stringify(e)) : null
                }

                function Ae(e) {
                    return e ? JSON.parse(atob(e)) : null
                }

                function z(e) {
                    return Ae(e.getAttribute(S))
                }

                function Re(e, t) {
                    const n = (e == null ? void 0 : e[t]) || (e == null ? void 0 : e[t === M.b.TABLET ? M.b.DESKTOP : t]) || {},
                        r = Object.assign({}, n);
                    return delete r.animation, delete r.trigger, {
                        animation: n.animation,
                        trigger: n.trigger,
                        options: r
                    }
                }

                function Je({
                    trigger: e,
                    options: t
                }) {
                    const n = Object.assign({}, t);
                    return e === "viewport" && (delete n.duration, delete n.delay), e === "entrance" && (delete n.viewportThresholds, delete n.reverse), n
                }
                const Se = _()({
                    MOBILE: "mobile",
                    TABLET: "tablet",
                    DESKTOP: "desktop"
                });

                function Ce(e) {
                    return z(e)
                }

                function Ne(e) {
                    const t = Y(),
                        n = Ce(e);
                    if (n) return Re(n, t); {
                        let r = e.getAttribute(`data-anim-${t}`) || "";
                        return !r && t === Se.DESKTOP && (r = e.getAttribute("data-anim") || e.getAttribute("data-current-anim") || ""), {
                            animation: r || "none",
                            trigger: "entrance"
                        }
                    }
                }

                function je() {
                    return `[data-anim], [data-anim-${Y()}], [data-current-anim], [${S}]`
                }

                function U(e, t = document) {
                    Array.from(t.querySelectorAll(je())).forEach(e)
                }

                function Me(e) {
                    if (!W()) return {};
                    const t = [];
                    ["transition-delay", "transition-duration", "animation-delay", "animation-duration"].forEach(o => {
                        e.style[o] === "unset" && (t.push(o), e.style[o] = "")
                    });
                    const n = getComputedStyle(e),
                        r = {
                            delay: parseFloat(n.animationDelay) || 0,
                            duration: parseFloat(n.animationDuration) || 1
                        };
                    return t.forEach(o => {
                        e.style.setProperty(o, "unset", "important")
                    }), r
                }

                function W() {
                    return window.rtCommonProps["feature.flag.runtime.newAnimation.respectCssAnimationProps.enabled"]
                }

                function Pe(e, t = {}) {
                    const n = R.find(r => r.presetKey === e);
                    return n != null && n.equivalent ? R.find(o => o.presetKey === n.equivalent.presetKey).damDescriptor(Object.assign({}, t, n.equivalent.options)) : n != null && n.damDescriptor ? n.damDescriptor(t) : null
                }

                function Y() {
                    var e;
                    return (e = window) !== null && e !== void 0 && e.$ ? window.$.layoutDevice && window.$.layoutDevice.type || window.Parameters.LayoutParams._device : "desktop"
                }
                var Ve = m("7uCZ"),
                    $e = m("J3gS"),
                    q = {
                        bounce: {
                            defaultOptions: {
                                easing: "cubic-bezier(0.215, 0.61, 0.355, 1)"
                            },
                            timeline: {
                                0: {
                                    transform: "translate3d(0px, 0px, 0px) scaleY(1)"
                                },
                                20: {
                                    transform: "translate3d(0px, 0px, 0px)"
                                },
                                40: {
                                    transform: "translate3d(0px, -30px, 0px) scaleY(1.1)"
                                },
                                43: {
                                    transform: "translate3d(0px, -30px, 0px) scaleY(1.1)"
                                },
                                53: {
                                    transform: "translate3d(0px, 0px, 0px)"
                                },
                                70: {
                                    transform: "translate3d(0px, -15px, 0px) scaleY(1.05)"
                                },
                                80: {
                                    transform: "translate3d(0px, 0px, 0px) scaleY(0.95)"
                                },
                                90: {
                                    transform: "translate3d(0px, -4px, 0px) scaleY(1.02)"
                                },
                                100: {
                                    transform: "translate3d(0px, 0px, 0px) scaleY(1)"
                                }
                            }
                        },
                        flash: {
                            timeline: {
                                0: {
                                    opacity: "1"
                                },
                                25: {
                                    opacity: "0"
                                },
                                50: {
                                    opacity: "1"
                                },
                                75: {
                                    opacity: "0"
                                },
                                100: {
                                    opacity: "1"
                                }
                            }
                        },
                        pulse: {
                            timeline: {
                                0: {
                                    transform: "scale3d(1, 1, 1)"
                                },
                                50: {
                                    transform: "scale3d(1.05, 1.05, 1.05)"
                                },
                                100: {
                                    transform: "scale3d(1, 1, 1)"
                                }
                            }
                        },
                        rubberBand: {
                            timeline: {
                                0: {
                                    transform: "scale3d(1, 1, 1)"
                                },
                                30: {
                                    transform: "scale3d(1.25, 0.75, 1)"
                                },
                                40: {
                                    transform: "scale3d(0.75, 1.25, 1)"
                                },
                                50: {
                                    transform: "scale3d(1.15, 0.85, 1)"
                                },
                                65: {
                                    transform: "scale3d(0.95, 1.05, 1)"
                                },
                                75: {
                                    transform: "scale3d(1.05, 0.95, 1)"
                                },
                                100: {
                                    transform: "scale3d(1, 1, 1)"
                                }
                            }
                        },
                        shake: {
                            timeline: {
                                0: {
                                    transform: "translate3d(0, 0, 0)"
                                },
                                10: {
                                    transform: "translate3d(-10px, 0, 0)"
                                },
                                20: {
                                    transform: "translate3d(10px, 0, 0)"
                                },
                                30: {
                                    transform: "translate3d(-10px, 0, 0)"
                                },
                                40: {
                                    transform: "translate3d(10px, 0, 0)"
                                },
                                50: {
                                    transform: "translate3d(-10px, 0, 0)"
                                },
                                60: {
                                    transform: "translate3d(10px, 0, 0)"
                                },
                                70: {
                                    transform: "translate3d(-10px, 0, 0)"
                                },
                                80: {
                                    transform: "translate3d(10px, 0, 0)"
                                },
                                90: {
                                    transform: "translate3d(-10px, 0, 0)"
                                },
                                100: {
                                    transform: "translate3d(0, 0, 0)"
                                }
                            }
                        },
                        swing: {
                            timeline: {
                                0: {
                                    transform: "rotate3d(0, 0, 1, 0deg)"
                                },
                                20: {
                                    transform: "rotate3d(0, 0, 1, 15deg)"
                                },
                                40: {
                                    transform: "rotate3d(0, 0, 1, -10deg)"
                                },
                                60: {
                                    transform: "rotate3d(0, 0, 1, 5deg)"
                                },
                                80: {
                                    transform: "rotate3d(0, 0, 1, -5deg)"
                                },
                                100: {
                                    transform: "rotate3d(0, 0, 1, 0deg)"
                                }
                            }
                        },
                        tada: {
                            timeline: {
                                0: {
                                    transform: "scale3d(1, 1, 1) rotate3d(0, 0, 1, 0deg)"
                                },
                                10: {
                                    transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"
                                },
                                20: {
                                    transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"
                                },
                                30: {
                                    transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
                                },
                                40: {
                                    transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"
                                },
                                50: {
                                    transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
                                },
                                60: {
                                    transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"
                                },
                                70: {
                                    transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
                                },
                                80: {
                                    transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"
                                },
                                90: {
                                    transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
                                },
                                100: {
                                    transform: "scale3d(1, 1, 1) rotate3d(0, 0, 1, 0deg)"
                                }
                            }
                        },
                        wobble: {
                            timeline: {
                                0: {
                                    transform: "translate3d(0%, 0px, 0px) rotate3d(0, 0, 1, 0deg)"
                                },
                                15: {
                                    transform: "translate3d(-25%, 0px, 0px) rotate3d(0, 0, 1, -5deg)"
                                },
                                30: {
                                    transform: "translate3d(20%, 0px, 0px) rotate3d(0, 0, 1, 3deg)"
                                },
                                45: {
                                    transform: "translate3d(-15%, 0px, 0px) rotate3d(0, 0, 1, -3deg)"
                                },
                                60: {
                                    transform: "translate3d(10%, 0px, 0px) rotate3d(0, 0, 1, 2deg)"
                                },
                                75: {
                                    transform: "translate3d(-5%, 0px, 0px) rotate3d(0, 0, 1, -1deg)"
                                },
                                100: {
                                    transform: "translate3d(0%, 0px, 0px) rotate3d(0, 0, 1, 0deg)"
                                }
                            }
                        },
                        flipInX: {
                            defaultOptions: {
                                easing: "ease-in"
                            },
                            timeline: {
                                0: {
                                    transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)",
                                    opacity: "0"
                                },
                                40: {
                                    transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)"
                                },
                                60: {
                                    transform: "perspective(400px) rotate3d(1, 0, 0, 10deg)",
                                    opacity: "1"
                                },
                                80: {
                                    transform: "perspective(400px) rotate3d(1, 0, 0, -5deg)"
                                },
                                100: {
                                    transform: "perspective(400px) rotate3d(1, 0, 0, 0deg)"
                                }
                            }
                        },
                        flipInY: {
                            defaultOptions: {
                                easing: "ease-in"
                            },
                            timeline: {
                                0: {
                                    transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)",
                                    opacity: "0"
                                },
                                40: {
                                    transform: "perspective(400px) rotate3d(0, 1, 0, -20deg)"
                                },
                                60: {
                                    transform: "perspective(400px) rotate3d(0, 1, 0, 10deg)",
                                    opacity: "1"
                                },
                                80: {
                                    transform: "perspective(400px) rotate3d(0, 1, 0, -5deg)"
                                },
                                100: {
                                    transform: "perspective(400px) rotate3d(0, 1, 0, 0deg)"
                                }
                            }
                        },
                        rollIn: {
                            timeline: {
                                0: {
                                    opacity: "0",
                                    transform: "translate3d(-100%, 0px, 0px) rotate3d(0, 0, 1, -120deg)"
                                },
                                100: {
                                    opacity: "1",
                                    transform: "translate3d(0%, 0px, 0px)  rotate3d(0, 0, 1, 0deg)"
                                }
                            }
                        },
                        zoomInUp: {
                            defaultOptions: {
                                easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
                            },
                            timeline: {
                                0: {
                                    opacity: "0",
                                    transform: "scale3d(0.1, 0.1, 0.1) translate3d(0px, 1000px, 0px)"
                                },
                                60: {
                                    opacity: "1",
                                    transform: "scale3d(0.475, 0.475, 0.475) translate3d(0px, -60px, 0px)"
                                },
                                100: {
                                    transform: "scale3d(1, 1, 1) translate3d(0px, 0px, 0px)"
                                }
                            }
                        }
                    };
                const x = [];

                function Be() {
                    if (window.dam) return;
                    const e = window.rtCommonProps["feature.flag.runtime.newAnimation.jitAnimation.enabled"] || !1;
                    window.dam = new $e.DudaAnimationManager({
                        jitAnimation: e
                    });
                    try {
                        if (window.top !== window) {
                            var t;
                            (t = window.top._damInstance) !== null && t !== void 0 && t.disabled && window.dam.disable(), window.top._damInstance = window.dam
                        }
                    } catch (n) {}
                    k(), ze()
                }

                function Ze() {}

                function Ge() {
                    return window.dam
                }

                function k() {
                    !window.dam || U(e => {
                        x.includes(e) || N(e)
                    })
                }

                function N(e) {
                    Array.from(e.classList).filter(r => r.startsWith("running-animation-")).forEach(r => e.classList.remove(r));
                    const t = () => {
                        Xe({
                            element: e,
                            animationData: Ne(e)
                        })
                    };
                    window.rtCommonProps["feature.flag.runtime.newAnimation.asyncInit.enabled"] || !1 ? window.requestAnimationFrame(() => window.requestAnimationFrame(t)) : t(), x.push(e)
                }

                function Xe({
                    selector: e,
                    element: t = document.querySelector(e),
                    animationData: n
                }) {
                    t.style.setProperty("visibility", "visible", "important");
                    const {
                        animation: r,
                        trigger: o = "entrance",
                        options: a = {}
                    } = n;
                    if (!window.dam || ((!0 || r === "none") && window.dam.getInstancesByElement(t).forEach(f => f.remove()), r === "none")) return;
                    const u = Pe(r, a) || (q[r] ? {
                        effect: q[r]
                    } : null);
                    if (u) {
                        var c, v;
                        const f = window.dam.createAnimation(u);
                        f.setTrigger(o);
                        const Ue = Me(t);
                        f.setOptions(Object.assign({
                            duration: 1,
                            easing: (u == null || (c = u.effect) === null || c === void 0 || (v = c.defaultOptions) === null || v === void 0 ? void 0 : v.easing) || "linear"
                        }, Ue, a, u.options || {})), t.style.transition = "", f.apply(t), W() && Qe(t)
                    }
                }

                function Qe(e) {
                    ["transition-delay", "transition-duration", "animation-delay", "animation-duration"].forEach(t => {
                        e.style.setProperty(t, "unset", "important")
                    }), e.style.setProperty("transition-property", "none", "important")
                }

                function ze() {
                    const e = n => {
                        n.forEach(r => {
                            (r.addedNodes ? Array.from(r.addedNodes) : []).filter(a => a.nodeType === Node.ELEMENT_NODE).map(a => a.parentNode || a).forEach(a => {
                                U(l => {
                                    setTimeout(() => {
                                        x.includes(l) || (!l.getBoundingClientRect().width && !l.getBoundingClientRect().height ? setTimeout(() => {
                                            x.includes(l) || N(l)
                                        }, 500) : N(l))
                                    })
                                }, a)
                            })
                        })
                    };
                    new MutationObserver(e).observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                }
            }
        }
    ])
})();