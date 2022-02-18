/*! For license information please see jquery.bundle.js.LICENSE.txt */ ! function() {
    var e = {
            434: function(e) {
                var t, n;
                t = "undefined" != typeof window ? window : this, n = function(e, t) {
                    var n = [],
                        r = e.document,
                        i = n.slice,
                        o = n.concat,
                        s = n.push,
                        a = n.indexOf,
                        u = {},
                        c = u.toString,
                        l = u.hasOwnProperty,
                        f = {},
                        p = "2.2.4",
                        d = function(e, t) {
                            return new d.fn.init(e, t)
                        },
                        h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                        g = /^-ms-/,
                        v = /-([\da-z])/gi,
                        m = function(e, t) {
                            return t.toUpperCase()
                        };

                    function y(e) {
                        var t = !!e && "length" in e && e.length,
                            n = d.type(e);
                        return "function" !== n && !d.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                    }
                    d.fn = d.prototype = {
                        jquery: p,
                        constructor: d,
                        selector: "",
                        length: 0,
                        toArray: function() {
                            return i.call(this)
                        },
                        get: function(e) {
                            return null != e ? e < 0 ? this[e + this.length] : this[e] : i.call(this)
                        },
                        pushStack: function(e) {
                            var t = d.merge(this.constructor(), e);
                            return t.prevObject = this, t.context = this.context, t
                        },
                        each: function(e) {
                            return d.each(this, e)
                        },
                        map: function(e) {
                            return this.pushStack(d.map(this, (function(t, n) {
                                return e.call(t, n, t)
                            })))
                        },
                        slice: function() {
                            return this.pushStack(i.apply(this, arguments))
                        },
                        first: function() {
                            return this.eq(0)
                        },
                        last: function() {
                            return this.eq(-1)
                        },
                        eq: function(e) {
                            var t = this.length,
                                n = +e + (e < 0 ? t : 0);
                            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                        },
                        end: function() {
                            return this.prevObject || this.constructor()
                        },
                        push: s,
                        sort: n.sort,
                        splice: n.splice
                    }, d.extend = d.fn.extend = function() {
                        var e, t, n, r, i, o, s = arguments[0] || {},
                            a = 1,
                            u = arguments.length,
                            c = !1;
                        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || d.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
                            if (null != (e = arguments[a]))
                                for (t in e) n = s[t], s !== (r = e[t]) && (c && r && (d.isPlainObject(r) || (i = d.isArray(r))) ? (i ? (i = !1, o = n && d.isArray(n) ? n : []) : o = n && d.isPlainObject(n) ? n : {}, s[t] = d.extend(c, o, r)) : void 0 !== r && (s[t] = r));
                        return s
                    }, d.extend({
                        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function(e) {
                            throw new Error(e)
                        },
                        noop: function() {},
                        isFunction: function(e) {
                            return "function" === d.type(e)
                        },
                        isArray: Array.isArray,
                        isWindow: function(e) {
                            return null != e && e === e.window
                        },
                        isNumeric: function(e) {
                            var t = e && e.toString();
                            return !d.isArray(e) && t - parseFloat(t) + 1 >= 0
                        },
                        isPlainObject: function(e) {
                            var t;
                            if ("object" !== d.type(e) || e.nodeType || d.isWindow(e)) return !1;
                            if (e.constructor && !l.call(e, "constructor") && !l.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
                            for (t in e);
                            return void 0 === t || l.call(e, t)
                        },
                        isEmptyObject: function(e) {
                            var t;
                            for (t in e) return !1;
                            return !0
                        },
                        type: function(e) {
                            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[c.call(e)] || "object" : typeof e
                        },
                        globalEval: function(e) {
                            var t, n = eval;
                            (e = d.trim(e)) && (1 === e.indexOf("use strict") ? ((t = r.createElement("script")).text = e, r.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                        },
                        camelCase: function(e) {
                            return e.replace(g, "ms-").replace(v, m)
                        },
                        nodeName: function(e, t) {
                            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                        },
                        each: function(e, t) {
                            var n, r = 0;
                            if (y(e))
                                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                            else
                                for (r in e)
                                    if (!1 === t.call(e[r], r, e[r])) break;
                            return e
                        },
                        trim: function(e) {
                            return null == e ? "" : (e + "").replace(h, "")
                        },
                        makeArray: function(e, t) {
                            var n = t || [];
                            return null != e && (y(Object(e)) ? d.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
                        },
                        inArray: function(e, t, n) {
                            return null == t ? -1 : a.call(t, e, n)
                        },
                        merge: function(e, t) {
                            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                            return e.length = i, e
                        },
                        grep: function(e, t, n) {
                            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
                            return r
                        },
                        map: function(e, t, n) {
                            var r, i, s = 0,
                                a = [];
                            if (y(e))
                                for (r = e.length; s < r; s++) null != (i = t(e[s], s, n)) && a.push(i);
                            else
                                for (s in e) null != (i = t(e[s], s, n)) && a.push(i);
                            return o.apply([], a)
                        },
                        guid: 1,
                        proxy: function(e, t) {
                            var n, r, o;
                            if ("string" == typeof t && (n = e[t], t = e, e = n), d.isFunction(e)) return r = i.call(arguments, 2), o = function() {
                                return e.apply(t || this, r.concat(i.call(arguments)))
                            }, o.guid = e.guid = e.guid || d.guid++, o
                        },
                        now: Date.now,
                        support: f
                    }), "function" == typeof Symbol && (d.fn[Symbol.iterator] = n[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                        u["[object " + t + "]"] = t.toLowerCase()
                    }));
                    var x = function(e) {
                        var t, n, r, i, o, s, a, u, c, l, f, p, d, h, g, v, m, y, x, b = "sizzle" + 1 * new Date,
                            w = e.document,
                            T = 0,
                            C = 0,
                            k = oe(),
                            S = oe(),
                            E = oe(),
                            N = function(e, t) {
                                return e === t && (f = !0), 0
                            },
                            A = 1 << 31,
                            j = {}.hasOwnProperty,
                            D = [],
                            L = D.pop,
                            q = D.push,
                            H = D.push,
                            O = D.slice,
                            _ = function(e, t) {
                                for (var n = 0, r = e.length; n < r; n++)
                                    if (e[n] === t) return n;
                                return -1
                            },
                            F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            R = "[\\x20\\t\\r\\n\\f]",
                            P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                            M = "\\[[\\x20\\t\\r\\n\\f]*(" + P + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + R + "*\\]",
                            I = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                            B = new RegExp(R + "+", "g"),
                            W = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                            $ = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                            X = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                            z = new RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"),
                            U = new RegExp(I),
                            Q = new RegExp("^" + P + "$"),
                            V = {
                                ID: new RegExp("^#(" + P + ")"),
                                CLASS: new RegExp("^\\.(" + P + ")"),
                                TAG: new RegExp("^(" + P + "|[*])"),
                                ATTR: new RegExp("^" + M),
                                PSEUDO: new RegExp("^" + I),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                                bool: new RegExp("^(?:" + F + ")$", "i"),
                                needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
                            },
                            Y = /^(?:input|select|textarea|button)$/i,
                            G = /^h\d$/i,
                            K = /^[^{]+\{\s*\[native \w/,
                            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            Z = /[+~]/,
                            ee = /'|\\/g,
                            te = new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
                            ne = function(e, t, n) {
                                var r = "0x" + t - 65536;
                                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                            },
                            re = function() {
                                p()
                            };
                        try {
                            H.apply(D = O.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType
                        } catch (e) {
                            H = {
                                apply: D.length ? function(e, t) {
                                    q.apply(e, O.call(t))
                                } : function(e, t) {
                                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                                    e.length = n - 1
                                }
                            }
                        }

                        function ie(e, t, r, i) {
                            var o, a, c, l, f, h, m, y, T = t && t.ownerDocument,
                                C = t ? t.nodeType : 9;
                            if (r = r || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C) return r;
                            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                                if (11 !== C && (h = J.exec(e)))
                                    if (o = h[1]) {
                                        if (9 === C) {
                                            if (!(c = t.getElementById(o))) return r;
                                            if (c.id === o) return r.push(c), r
                                        } else if (T && (c = T.getElementById(o)) && x(t, c) && c.id === o) return r.push(c), r
                                    } else {
                                        if (h[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                                        if ((o = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(o)), r
                                    }
                                if (n.qsa && !E[e + " "] && (!v || !v.test(e))) {
                                    if (1 !== C) T = t, y = e;
                                    else if ("object" !== t.nodeName.toLowerCase()) {
                                        for ((l = t.getAttribute("id")) ? l = l.replace(ee, "\\$&") : t.setAttribute("id", l = b), a = (m = s(e)).length, f = Q.test(l) ? "#" + l : "[id='" + l + "']"; a--;) m[a] = f + " " + ge(m[a]);
                                        y = m.join(","), T = Z.test(e) && de(t.parentNode) || t
                                    }
                                    if (y) try {
                                        return H.apply(r, T.querySelectorAll(y)), r
                                    } catch (e) {} finally {
                                        l === b && t.removeAttribute("id")
                                    }
                                }
                            }
                            return u(e.replace(W, "$1"), t, r, i)
                        }

                        function oe() {
                            var e = [];
                            return function t(n, i) {
                                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                            }
                        }

                        function se(e) {
                            return e[b] = !0, e
                        }

                        function ae(e) {
                            var t = d.createElement("div");
                            try {
                                return !!e(t)
                            } catch (e) {
                                return !1
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t), t = null
                            }
                        }

                        function ue(e, t) {
                            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
                        }

                        function ce(e, t) {
                            var n = t && e,
                                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || A) - (~e.sourceIndex || A);
                            if (r) return r;
                            if (n)
                                for (; n = n.nextSibling;)
                                    if (n === t) return -1;
                            return e ? 1 : -1
                        }

                        function le(e) {
                            return function(t) {
                                return "input" === t.nodeName.toLowerCase() && t.type === e
                            }
                        }

                        function fe(e) {
                            return function(t) {
                                var n = t.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && t.type === e
                            }
                        }

                        function pe(e) {
                            return se((function(t) {
                                return t = +t, se((function(n, r) {
                                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                                }))
                            }))
                        }

                        function de(e) {
                            return e && void 0 !== e.getElementsByTagName && e
                        }
                        for (t in n = ie.support = {}, o = ie.isXML = function(e) {
                                var t = e && (e.ownerDocument || e).documentElement;
                                return !!t && "HTML" !== t.nodeName
                            }, p = ie.setDocument = function(e) {
                                var t, i, s = e ? e.ownerDocument || e : w;
                                return s !== d && 9 === s.nodeType && s.documentElement ? (h = (d = s).documentElement, g = !o(d), (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ae((function(e) {
                                    return e.className = "i", !e.getAttribute("className")
                                })), n.getElementsByTagName = ae((function(e) {
                                    return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                                })), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ae((function(e) {
                                    return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                                })), n.getById ? (r.find.ID = function(e, t) {
                                    if (void 0 !== t.getElementById && g) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : []
                                    }
                                }, r.filter.ID = function(e) {
                                    var t = e.replace(te, ne);
                                    return function(e) {
                                        return e.getAttribute("id") === t
                                    }
                                }) : (delete r.find.ID, r.filter.ID = function(e) {
                                    var t = e.replace(te, ne);
                                    return function(e) {
                                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                        return n && n.value === t
                                    }
                                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                                } : function(e, t) {
                                    var n, r = [],
                                        i = 0,
                                        o = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                        return r
                                    }
                                    return o
                                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                                }, m = [], v = [], (n.qsa = K.test(d.querySelectorAll)) && (ae((function(e) {
                                    h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + F + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]")
                                })), ae((function(e) {
                                    var t = d.createElement("input");
                                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                                }))), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ae((function(e) {
                                    n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
                                })), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function(e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        r = t && t.parentNode;
                                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                                } : function(e, t) {
                                    if (t)
                                        for (; t = t.parentNode;)
                                            if (t === e) return !0;
                                    return !1
                                }, N = t ? function(e, t) {
                                    if (e === t) return f = !0, 0;
                                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : l ? _(l, e) - _(l, t) : 0 : 4 & r ? -1 : 1)
                                } : function(e, t) {
                                    if (e === t) return f = !0, 0;
                                    var n, r = 0,
                                        i = e.parentNode,
                                        o = t.parentNode,
                                        s = [e],
                                        a = [t];
                                    if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : l ? _(l, e) - _(l, t) : 0;
                                    if (i === o) return ce(e, t);
                                    for (n = e; n = n.parentNode;) s.unshift(n);
                                    for (n = t; n = n.parentNode;) a.unshift(n);
                                    for (; s[r] === a[r];) r++;
                                    return r ? ce(s[r], a[r]) : s[r] === w ? -1 : a[r] === w ? 1 : 0
                                }, d) : d
                            }, ie.matches = function(e, t) {
                                return ie(e, null, null, t)
                            }, ie.matchesSelector = function(e, t) {
                                if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !E[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) try {
                                    var r = y.call(e, t);
                                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                                } catch (e) {}
                                return ie(t, d, null, [e]).length > 0
                            }, ie.contains = function(e, t) {
                                return (e.ownerDocument || e) !== d && p(e), x(e, t)
                            }, ie.attr = function(e, t) {
                                (e.ownerDocument || e) !== d && p(e);
                                var i = r.attrHandle[t.toLowerCase()],
                                    o = i && j.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                            }, ie.error = function(e) {
                                throw new Error("Syntax error, unrecognized expression: " + e)
                            }, ie.uniqueSort = function(e) {
                                var t, r = [],
                                    i = 0,
                                    o = 0;
                                if (f = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(N), f) {
                                    for (; t = e[o++];) t === e[o] && (i = r.push(o));
                                    for (; i--;) e.splice(r[i], 1)
                                }
                                return l = null, e
                            }, i = ie.getText = function(e) {
                                var t, n = "",
                                    r = 0,
                                    o = e.nodeType;
                                if (o) {
                                    if (1 === o || 9 === o || 11 === o) {
                                        if ("string" == typeof e.textContent) return e.textContent;
                                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                                    } else if (3 === o || 4 === o) return e.nodeValue
                                } else
                                    for (; t = e[r++];) n += i(t);
                                return n
                            }, r = ie.selectors = {
                                cacheLength: 50,
                                createPseudo: se,
                                match: V,
                                attrHandle: {},
                                find: {},
                                relative: {
                                    ">": {
                                        dir: "parentNode",
                                        first: !0
                                    },
                                    " ": {
                                        dir: "parentNode"
                                    },
                                    "+": {
                                        dir: "previousSibling",
                                        first: !0
                                    },
                                    "~": {
                                        dir: "previousSibling"
                                    }
                                },
                                preFilter: {
                                    ATTR: function(e) {
                                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                    },
                                    CHILD: function(e) {
                                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                                    },
                                    PSEUDO: function(e) {
                                        var t, n = !e[6] && e[2];
                                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                    }
                                },
                                filter: {
                                    TAG: function(e) {
                                        var t = e.replace(te, ne).toLowerCase();
                                        return "*" === e ? function() {
                                            return !0
                                        } : function(e) {
                                            return e.nodeName && e.nodeName.toLowerCase() === t
                                        }
                                    },
                                    CLASS: function(e) {
                                        var t = k[e + " "];
                                        return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + R + "|$)")) && k(e, (function(e) {
                                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                        }))
                                    },
                                    ATTR: function(e, t, n) {
                                        return function(r) {
                                            var i = ie.attr(r, e);
                                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                        }
                                    },
                                    CHILD: function(e, t, n, r, i) {
                                        var o = "nth" !== e.slice(0, 3),
                                            s = "last" !== e.slice(-4),
                                            a = "of-type" === t;
                                        return 1 === r && 0 === i ? function(e) {
                                            return !!e.parentNode
                                        } : function(t, n, u) {
                                            var c, l, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
                                                v = t.parentNode,
                                                m = a && t.nodeName.toLowerCase(),
                                                y = !u && !a,
                                                x = !1;
                                            if (v) {
                                                if (o) {
                                                    for (; g;) {
                                                        for (p = t; p = p[g];)
                                                            if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                                        h = g = "only" === e && !h && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (h = [s ? v.firstChild : v.lastChild], s && y) {
                                                    for (x = (d = (c = (l = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                                        if (1 === p.nodeType && ++x && p === t) {
                                                            l[e] = [T, d, x];
                                                            break
                                                        }
                                                } else if (y && (x = d = (c = (l = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === x)
                                                    for (;
                                                        (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && ((l = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t)););
                                                return (x -= i) === r || x % r == 0 && x / r >= 0
                                            }
                                        }
                                    },
                                    PSEUDO: function(e, t) {
                                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                                        return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se((function(e, n) {
                                            for (var r, o = i(e, t), s = o.length; s--;) e[r = _(e, o[s])] = !(n[r] = o[s])
                                        })) : function(e) {
                                            return i(e, 0, n)
                                        }) : i
                                    }
                                },
                                pseudos: {
                                    not: se((function(e) {
                                        var t = [],
                                            n = [],
                                            r = a(e.replace(W, "$1"));
                                        return r[b] ? se((function(e, t, n, i) {
                                            for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                                        })) : function(e, i, o) {
                                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                                        }
                                    })),
                                    has: se((function(e) {
                                        return function(t) {
                                            return ie(e, t).length > 0
                                        }
                                    })),
                                    contains: se((function(e) {
                                        return e = e.replace(te, ne),
                                            function(t) {
                                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                                            }
                                    })),
                                    lang: se((function(e) {
                                        return Q.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                            function(t) {
                                                var n;
                                                do {
                                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                                return !1
                                            }
                                    })),
                                    target: function(t) {
                                        var n = e.location && e.location.hash;
                                        return n && n.slice(1) === t.id
                                    },
                                    root: function(e) {
                                        return e === h
                                    },
                                    focus: function(e) {
                                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                    },
                                    enabled: function(e) {
                                        return !1 === e.disabled
                                    },
                                    disabled: function(e) {
                                        return !0 === e.disabled
                                    },
                                    checked: function(e) {
                                        var t = e.nodeName.toLowerCase();
                                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                                    },
                                    selected: function(e) {
                                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                    },
                                    empty: function(e) {
                                        for (e = e.firstChild; e; e = e.nextSibling)
                                            if (e.nodeType < 6) return !1;
                                        return !0
                                    },
                                    parent: function(e) {
                                        return !r.pseudos.empty(e)
                                    },
                                    header: function(e) {
                                        return G.test(e.nodeName)
                                    },
                                    input: function(e) {
                                        return Y.test(e.nodeName)
                                    },
                                    button: function(e) {
                                        var t = e.nodeName.toLowerCase();
                                        return "input" === t && "button" === e.type || "button" === t
                                    },
                                    text: function(e) {
                                        var t;
                                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                    },
                                    first: pe((function() {
                                        return [0]
                                    })),
                                    last: pe((function(e, t) {
                                        return [t - 1]
                                    })),
                                    eq: pe((function(e, t, n) {
                                        return [n < 0 ? n + t : n]
                                    })),
                                    even: pe((function(e, t) {
                                        for (var n = 0; n < t; n += 2) e.push(n);
                                        return e
                                    })),
                                    odd: pe((function(e, t) {
                                        for (var n = 1; n < t; n += 2) e.push(n);
                                        return e
                                    })),
                                    lt: pe((function(e, t, n) {
                                        for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                                        return e
                                    })),
                                    gt: pe((function(e, t, n) {
                                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                        return e
                                    }))
                                }
                            }, r.pseudos.nth = r.pseudos.eq, {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            }) r.pseudos[t] = le(t);
                        for (t in {
                                submit: !0,
                                reset: !0
                            }) r.pseudos[t] = fe(t);

                        function he() {}

                        function ge(e) {
                            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                            return r
                        }

                        function ve(e, t, n) {
                            var r = t.dir,
                                i = n && "parentNode" === r,
                                o = C++;
                            return t.first ? function(t, n, o) {
                                for (; t = t[r];)
                                    if (1 === t.nodeType || i) return e(t, n, o)
                            } : function(t, n, s) {
                                var a, u, c, l = [T, o];
                                if (s) {
                                    for (; t = t[r];)
                                        if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                                } else
                                    for (; t = t[r];)
                                        if (1 === t.nodeType || i) {
                                            if ((a = (u = (c = t[b] || (t[b] = {}))[t.uniqueID] || (c[t.uniqueID] = {}))[r]) && a[0] === T && a[1] === o) return l[2] = a[2];
                                            if (u[r] = l, l[2] = e(t, n, s)) return !0
                                        }
                            }
                        }

                        function me(e) {
                            return e.length > 1 ? function(t, n, r) {
                                for (var i = e.length; i--;)
                                    if (!e[i](t, n, r)) return !1;
                                return !0
                            } : e[0]
                        }

                        function ye(e, t, n, r, i) {
                            for (var o, s = [], a = 0, u = e.length, c = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), c && t.push(a)));
                            return s
                        }

                        function xe(e, t, n, r, i, o) {
                            return r && !r[b] && (r = xe(r)), i && !i[b] && (i = xe(i, o)), se((function(o, s, a, u) {
                                var c, l, f, p = [],
                                    d = [],
                                    h = s.length,
                                    g = o || function(e, t, n) {
                                        for (var r = 0, i = t.length; r < i; r++) ie(e, t[r], n);
                                        return n
                                    }(t || "*", a.nodeType ? [a] : a, []),
                                    v = !e || !o && t ? g : ye(g, p, e, a, u),
                                    m = n ? i || (o ? e : h || r) ? [] : s : v;
                                if (n && n(v, m, a, u), r)
                                    for (c = ye(m, d), r(c, [], a, u), l = c.length; l--;)(f = c[l]) && (m[d[l]] = !(v[d[l]] = f));
                                if (o) {
                                    if (i || e) {
                                        if (i) {
                                            for (c = [], l = m.length; l--;)(f = m[l]) && c.push(v[l] = f);
                                            i(null, m = [], c, u)
                                        }
                                        for (l = m.length; l--;)(f = m[l]) && (c = i ? _(o, f) : p[l]) > -1 && (o[c] = !(s[c] = f))
                                    }
                                } else m = ye(m === s ? m.splice(h, m.length) : m), i ? i(null, s, m, u) : H.apply(s, m)
                            }))
                        }

                        function be(e) {
                            for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], u = s ? 1 : 0, l = ve((function(e) {
                                    return e === t
                                }), a, !0), f = ve((function(e) {
                                    return _(t, e) > -1
                                }), a, !0), p = [function(e, n, r) {
                                    var i = !s && (r || n !== c) || ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
                                    return t = null, i
                                }]; u < o; u++)
                                if (n = r.relative[e[u].type]) p = [ve(me(p), n)];
                                else {
                                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                        for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                                        return xe(u > 1 && me(p), u > 1 && ge(e.slice(0, u - 1).concat({
                                            value: " " === e[u - 2].type ? "*" : ""
                                        })).replace(W, "$1"), n, u < i && be(e.slice(u, i)), i < o && be(e = e.slice(i)), i < o && ge(e))
                                    }
                                    p.push(n)
                                }
                            return me(p)
                        }
                        return he.prototype = r.filters = r.pseudos, r.setFilters = new he, s = ie.tokenize = function(e, t) {
                            var n, i, o, s, a, u, c, l = S[e + " "];
                            if (l) return t ? 0 : l.slice(0);
                            for (a = e, u = [], c = r.preFilter; a;) {
                                for (s in n && !(i = $.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), n = !1, (i = X.exec(a)) && (n = i.shift(), o.push({
                                        value: n,
                                        type: i[0].replace(W, " ")
                                    }), a = a.slice(n.length)), r.filter) !(i = V[s].exec(a)) || c[s] && !(i = c[s](i)) || (n = i.shift(), o.push({
                                    value: n,
                                    type: s,
                                    matches: i
                                }), a = a.slice(n.length));
                                if (!n) break
                            }
                            return t ? a.length : a ? ie.error(e) : S(e, u).slice(0)
                        }, a = ie.compile = function(e, t) {
                            var n, i = [],
                                o = [],
                                a = E[e + " "];
                            if (!a) {
                                for (t || (t = s(e)), n = t.length; n--;)(a = be(t[n]))[b] ? i.push(a) : o.push(a);
                                a = E(e, function(e, t) {
                                    var n = t.length > 0,
                                        i = e.length > 0,
                                        o = function(o, s, a, u, l) {
                                            var f, h, v, m = 0,
                                                y = "0",
                                                x = o && [],
                                                b = [],
                                                w = c,
                                                C = o || i && r.find.TAG("*", l),
                                                k = T += null == w ? 1 : Math.random() || .1,
                                                S = C.length;
                                            for (l && (c = s === d || s || l); y !== S && null != (f = C[y]); y++) {
                                                if (i && f) {
                                                    for (h = 0, s || f.ownerDocument === d || (p(f), a = !g); v = e[h++];)
                                                        if (v(f, s || d, a)) {
                                                            u.push(f);
                                                            break
                                                        }
                                                    l && (T = k)
                                                }
                                                n && ((f = !v && f) && m--, o && x.push(f))
                                            }
                                            if (m += y, n && y !== m) {
                                                for (h = 0; v = t[h++];) v(x, b, s, a);
                                                if (o) {
                                                    if (m > 0)
                                                        for (; y--;) x[y] || b[y] || (b[y] = L.call(u));
                                                    b = ye(b)
                                                }
                                                H.apply(u, b), l && !o && b.length > 0 && m + t.length > 1 && ie.uniqueSort(u)
                                            }
                                            return l && (T = k, c = w), x
                                        };
                                    return n ? se(o) : o
                                }(o, i)), a.selector = e
                            }
                            return a
                        }, u = ie.select = function(e, t, i, o) {
                            var u, c, l, f, p, d = "function" == typeof e && e,
                                h = !o && s(e = d.selector || e);
                            if (i = i || [], 1 === h.length) {
                                if ((c = h[0] = h[0].slice(0)).length > 2 && "ID" === (l = c[0]).type && n.getById && 9 === t.nodeType && g && r.relative[c[1].type]) {
                                    if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return i;
                                    d && (t = t.parentNode), e = e.slice(c.shift().value.length)
                                }
                                for (u = V.needsContext.test(e) ? 0 : c.length; u-- && (l = c[u], !r.relative[f = l.type]);)
                                    if ((p = r.find[f]) && (o = p(l.matches[0].replace(te, ne), Z.test(c[0].type) && de(t.parentNode) || t))) {
                                        if (c.splice(u, 1), !(e = o.length && ge(c))) return H.apply(i, o), i;
                                        break
                                    }
                            }
                            return (d || a(e, h))(o, t, !g, i, !t || Z.test(e) && de(t.parentNode) || t), i
                        }, n.sortStable = b.split("").sort(N).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ae((function(e) {
                            return 1 & e.compareDocumentPosition(d.createElement("div"))
                        })), ae((function(e) {
                            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                        })) || ue("type|href|height|width", (function(e, t, n) {
                            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                        })), n.attributes && ae((function(e) {
                            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                        })) || ue("value", (function(e, t, n) {
                            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                        })), ae((function(e) {
                            return null == e.getAttribute("disabled")
                        })) || ue(F, (function(e, t, n) {
                            var r;
                            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                        })), ie
                    }(e);
                    d.find = x, d.expr = x.selectors, d.expr[":"] = d.expr.pseudos, d.uniqueSort = d.unique = x.uniqueSort, d.text = x.getText, d.isXMLDoc = x.isXML, d.contains = x.contains;
                    var b = function(e, t, n) {
                            for (var r = [], i = void 0 !== n;
                                (e = e[t]) && 9 !== e.nodeType;)
                                if (1 === e.nodeType) {
                                    if (i && d(e).is(n)) break;
                                    r.push(e)
                                }
                            return r
                        },
                        w = function(e, t) {
                            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                            return n
                        },
                        T = d.expr.match.needsContext,
                        C = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
                        k = /^.[^:#\[\.,]*$/;

                    function S(e, t, n) {
                        if (d.isFunction(t)) return d.grep(e, (function(e, r) {
                            return !!t.call(e, r, e) !== n
                        }));
                        if (t.nodeType) return d.grep(e, (function(e) {
                            return e === t !== n
                        }));
                        if ("string" == typeof t) {
                            if (k.test(t)) return d.filter(t, e, n);
                            t = d.filter(t, e)
                        }
                        return d.grep(e, (function(e) {
                            return a.call(t, e) > -1 !== n
                        }))
                    }
                    d.filter = function(e, t, n) {
                        var r = t[0];
                        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? d.find.matchesSelector(r, e) ? [r] : [] : d.find.matches(e, d.grep(t, (function(e) {
                            return 1 === e.nodeType
                        })))
                    }, d.fn.extend({
                        find: function(e) {
                            var t, n = this.length,
                                r = [],
                                i = this;
                            if ("string" != typeof e) return this.pushStack(d(e).filter((function() {
                                for (t = 0; t < n; t++)
                                    if (d.contains(i[t], this)) return !0
                            })));
                            for (t = 0; t < n; t++) d.find(e, i[t], r);
                            return (r = this.pushStack(n > 1 ? d.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r
                        },
                        filter: function(e) {
                            return this.pushStack(S(this, e || [], !1))
                        },
                        not: function(e) {
                            return this.pushStack(S(this, e || [], !0))
                        },
                        is: function(e) {
                            return !!S(this, "string" == typeof e && T.test(e) ? d(e) : e || [], !1).length
                        }
                    });
                    var E, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
                    (d.fn.init = function(e, t, n) {
                        var i, o;
                        if (!e) return this;
                        if (n = n || E, "string" == typeof e) {
                            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : N.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                            if (i[1]) {
                                if (t = t instanceof d ? t[0] : t, d.merge(this, d.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), C.test(i[1]) && d.isPlainObject(t))
                                    for (i in t) d.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                                return this
                            }
                            return (o = r.getElementById(i[2])) && o.parentNode && (this.length = 1, this[0] = o), this.context = r, this.selector = e, this
                        }
                        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : d.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(d) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), d.makeArray(e, this))
                    }).prototype = d.fn, E = d(r);
                    var A = /^(?:parents|prev(?:Until|All))/,
                        j = {
                            children: !0,
                            contents: !0,
                            next: !0,
                            prev: !0
                        };

                    function D(e, t) {
                        for (;
                            (e = e[t]) && 1 !== e.nodeType;);
                        return e
                    }
                    d.fn.extend({
                        has: function(e) {
                            var t = d(e, this),
                                n = t.length;
                            return this.filter((function() {
                                for (var e = 0; e < n; e++)
                                    if (d.contains(this, t[e])) return !0
                            }))
                        },
                        closest: function(e, t) {
                            for (var n, r = 0, i = this.length, o = [], s = T.test(e) || "string" != typeof e ? d(e, t || this.context) : 0; r < i; r++)
                                for (n = this[r]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && d.find.matchesSelector(n, e))) {
                                        o.push(n);
                                        break
                                    }
                            return this.pushStack(o.length > 1 ? d.uniqueSort(o) : o)
                        },
                        index: function(e) {
                            return e ? "string" == typeof e ? a.call(d(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                        },
                        add: function(e, t) {
                            return this.pushStack(d.uniqueSort(d.merge(this.get(), d(e, t))))
                        },
                        addBack: function(e) {
                            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                        }
                    }), d.each({
                        parent: function(e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t : null
                        },
                        parents: function(e) {
                            return b(e, "parentNode")
                        },
                        parentsUntil: function(e, t, n) {
                            return b(e, "parentNode", n)
                        },
                        next: function(e) {
                            return D(e, "nextSibling")
                        },
                        prev: function(e) {
                            return D(e, "previousSibling")
                        },
                        nextAll: function(e) {
                            return b(e, "nextSibling")
                        },
                        prevAll: function(e) {
                            return b(e, "previousSibling")
                        },
                        nextUntil: function(e, t, n) {
                            return b(e, "nextSibling", n)
                        },
                        prevUntil: function(e, t, n) {
                            return b(e, "previousSibling", n)
                        },
                        siblings: function(e) {
                            return w((e.parentNode || {}).firstChild, e)
                        },
                        children: function(e) {
                            return w(e.firstChild)
                        },
                        contents: function(e) {
                            return e.contentDocument || d.merge([], e.childNodes)
                        }
                    }, (function(e, t) {
                        d.fn[e] = function(n, r) {
                            var i = d.map(this, t, n);
                            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = d.filter(r, i)), this.length > 1 && (j[e] || d.uniqueSort(i), A.test(e) && i.reverse()), this.pushStack(i)
                        }
                    }));
                    var L, q = /\S+/g;

                    function H() {
                        r.removeEventListener("DOMContentLoaded", H), e.removeEventListener("load", H), d.ready()
                    }
                    d.Callbacks = function(e) {
                        e = "string" == typeof e ? function(e) {
                            var t = {};
                            return d.each(e.match(q) || [], (function(e, n) {
                                t[n] = !0
                            })), t
                        }(e) : d.extend({}, e);
                        var t, n, r, i, o = [],
                            s = [],
                            a = -1,
                            u = function() {
                                for (i = e.once, r = t = !0; s.length; a = -1)
                                    for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
                                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                            },
                            c = {
                                add: function() {
                                    return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
                                        d.each(n, (function(n, r) {
                                            d.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== d.type(r) && t(r)
                                        }))
                                    }(arguments), n && !t && u()), this
                                },
                                remove: function() {
                                    return d.each(arguments, (function(e, t) {
                                        for (var n;
                                            (n = d.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                                    })), this
                                },
                                has: function(e) {
                                    return e ? d.inArray(e, o) > -1 : o.length > 0
                                },
                                empty: function() {
                                    return o && (o = []), this
                                },
                                disable: function() {
                                    return i = s = [], o = n = "", this
                                },
                                disabled: function() {
                                    return !o
                                },
                                lock: function() {
                                    return i = s = [], n || (o = n = ""), this
                                },
                                locked: function() {
                                    return !!i
                                },
                                fireWith: function(e, n) {
                                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || u()), this
                                },
                                fire: function() {
                                    return c.fireWith(this, arguments), this
                                },
                                fired: function() {
                                    return !!r
                                }
                            };
                        return c
                    }, d.extend({
                        Deferred: function(e) {
                            var t = [
                                    ["resolve", "done", d.Callbacks("once memory"), "resolved"],
                                    ["reject", "fail", d.Callbacks("once memory"), "rejected"],
                                    ["notify", "progress", d.Callbacks("memory")]
                                ],
                                n = "pending",
                                r = {
                                    state: function() {
                                        return n
                                    },
                                    always: function() {
                                        return i.done(arguments).fail(arguments), this
                                    },
                                    then: function() {
                                        var e = arguments;
                                        return d.Deferred((function(n) {
                                            d.each(t, (function(t, o) {
                                                var s = d.isFunction(e[t]) && e[t];
                                                i[o[1]]((function() {
                                                    var e = s && s.apply(this, arguments);
                                                    e && d.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                                }))
                                            })), e = null
                                        })).promise()
                                    },
                                    promise: function(e) {
                                        return null != e ? d.extend(e, r) : r
                                    }
                                },
                                i = {};
                            return r.pipe = r.then, d.each(t, (function(e, o) {
                                var s = o[2],
                                    a = o[3];
                                r[o[1]] = s.add, a && s.add((function() {
                                    n = a
                                }), t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                                }, i[o[0] + "With"] = s.fireWith
                            })), r.promise(i), e && e.call(i, i), i
                        },
                        when: function(e) {
                            var t, n, r, o = 0,
                                s = i.call(arguments),
                                a = s.length,
                                u = 1 !== a || e && d.isFunction(e.promise) ? a : 0,
                                c = 1 === u ? e : d.Deferred(),
                                l = function(e, n, r) {
                                    return function(o) {
                                        n[e] = this, r[e] = arguments.length > 1 ? i.call(arguments) : o, r === t ? c.notifyWith(n, r) : --u || c.resolveWith(n, r)
                                    }
                                };
                            if (a > 1)
                                for (t = new Array(a), n = new Array(a), r = new Array(a); o < a; o++) s[o] && d.isFunction(s[o].promise) ? s[o].promise().progress(l(o, n, t)).done(l(o, r, s)).fail(c.reject) : --u;
                            return u || c.resolveWith(r, s), c.promise()
                        }
                    }), d.fn.ready = function(e) {
                        return d.ready.promise().done(e), this
                    }, d.extend({
                        isReady: !1,
                        readyWait: 1,
                        holdReady: function(e) {
                            e ? d.readyWait++ : d.ready(!0)
                        },
                        ready: function(e) {
                            (!0 === e ? --d.readyWait : d.isReady) || (d.isReady = !0, !0 !== e && --d.readyWait > 0 || (L.resolveWith(r, [d]), d.fn.triggerHandler && (d(r).triggerHandler("ready"), d(r).off("ready"))))
                        }
                    }), d.ready.promise = function(t) {
                        return L || (L = d.Deferred(), "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(d.ready) : (r.addEventListener("DOMContentLoaded", H), e.addEventListener("load", H))), L.promise(t)
                    }, d.ready.promise();
                    var O = function(e, t, n, r, i, o, s) {
                            var a = 0,
                                u = e.length,
                                c = null == n;
                            if ("object" === d.type(n))
                                for (a in i = !0, n) O(e, t, a, n[a], !0, o, s);
                            else if (void 0 !== r && (i = !0, d.isFunction(r) || (s = !0), c && (s ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                                    return c.call(d(e), n)
                                })), t))
                                for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                            return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
                        },
                        _ = function(e) {
                            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                        };

                    function F() {
                        this.expando = d.expando + F.uid++
                    }
                    F.uid = 1, F.prototype = {
                        register: function(e, t) {
                            var n = t || {};
                            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                                value: n,
                                writable: !0,
                                configurable: !0
                            }), e[this.expando]
                        },
                        cache: function(e) {
                            if (!_(e)) return {};
                            var t = e[this.expando];
                            return t || (t = {}, _(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: !0
                            }))), t
                        },
                        set: function(e, t, n) {
                            var r, i = this.cache(e);
                            if ("string" == typeof t) i[t] = n;
                            else
                                for (r in t) i[r] = t[r];
                            return i
                        },
                        get: function(e, t) {
                            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
                        },
                        access: function(e, t, n) {
                            var r;
                            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, d.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
                        },
                        remove: function(e, t) {
                            var n, r, i, o = e[this.expando];
                            if (void 0 !== o) {
                                if (void 0 === t) this.register(e);
                                else {
                                    d.isArray(t) ? r = t.concat(t.map(d.camelCase)) : (i = d.camelCase(t), r = t in o ? [t, i] : (r = i) in o ? [r] : r.match(q) || []), n = r.length;
                                    for (; n--;) delete o[r[n]]
                                }(void 0 === t || d.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                            }
                        },
                        hasData: function(e) {
                            var t = e[this.expando];
                            return void 0 !== t && !d.isEmptyObject(t)
                        }
                    };
                    var R = new F,
                        P = new F,
                        M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        I = /[A-Z]/g;

                    function B(e, t, n) {
                        var r;
                        if (void 0 === n && 1 === e.nodeType)
                            if (r = "data-" + t.replace(I, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                                try {
                                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : M.test(n) ? d.parseJSON(n) : n)
                                } catch (e) {}
                                P.set(e, t, n)
                            } else n = void 0;
                        return n
                    }
                    d.extend({
                        hasData: function(e) {
                            return P.hasData(e) || R.hasData(e)
                        },
                        data: function(e, t, n) {
                            return P.access(e, t, n)
                        },
                        removeData: function(e, t) {
                            P.remove(e, t)
                        },
                        _data: function(e, t, n) {
                            return R.access(e, t, n)
                        },
                        _removeData: function(e, t) {
                            R.remove(e, t)
                        }
                    }), d.fn.extend({
                        data: function(e, t) {
                            var n, r, i, o = this[0],
                                s = o && o.attributes;
                            if (void 0 === e) {
                                if (this.length && (i = P.get(o), 1 === o.nodeType && !R.get(o, "hasDataAttrs"))) {
                                    for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = d.camelCase(r.slice(5)), B(o, r, i[r]));
                                    R.set(o, "hasDataAttrs", !0)
                                }
                                return i
                            }
                            return "object" == typeof e ? this.each((function() {
                                P.set(this, e)
                            })) : O(this, (function(t) {
                                var n, r;
                                if (o && void 0 === t) return void 0 !== (n = P.get(o, e) || P.get(o, e.replace(I, "-$&").toLowerCase())) ? n : (r = d.camelCase(e), void 0 !== (n = P.get(o, r)) || void 0 !== (n = B(o, r, void 0)) ? n : void 0);
                                r = d.camelCase(e), this.each((function() {
                                    var n = P.get(this, r);
                                    P.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && P.set(this, e, t)
                                }))
                            }), null, t, arguments.length > 1, null, !0)
                        },
                        removeData: function(e) {
                            return this.each((function() {
                                P.remove(this, e)
                            }))
                        }
                    }), d.extend({
                        queue: function(e, t, n) {
                            var r;
                            if (e) return t = (t || "fx") + "queue", r = R.get(e, t), n && (!r || d.isArray(n) ? r = R.access(e, t, d.makeArray(n)) : r.push(n)), r || []
                        },
                        dequeue: function(e, t) {
                            t = t || "fx";
                            var n = d.queue(e, t),
                                r = n.length,
                                i = n.shift(),
                                o = d._queueHooks(e, t);
                            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, (function() {
                                d.dequeue(e, t)
                            }), o)), !r && o && o.empty.fire()
                        },
                        _queueHooks: function(e, t) {
                            var n = t + "queueHooks";
                            return R.get(e, n) || R.access(e, n, {
                                empty: d.Callbacks("once memory").add((function() {
                                    R.remove(e, [t + "queue", n])
                                }))
                            })
                        }
                    }), d.fn.extend({
                        queue: function(e, t) {
                            var n = 2;
                            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? d.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                                var n = d.queue(this, e, t);
                                d._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && d.dequeue(this, e)
                            }))
                        },
                        dequeue: function(e) {
                            return this.each((function() {
                                d.dequeue(this, e)
                            }))
                        },
                        clearQueue: function(e) {
                            return this.queue(e || "fx", [])
                        },
                        promise: function(e, t) {
                            var n, r = 1,
                                i = d.Deferred(),
                                o = this,
                                s = this.length,
                                a = function() {
                                    --r || i.resolveWith(o, [o])
                                };
                            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = R.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
                            return a(), i.promise(t)
                        }
                    });
                    var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        $ = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
                        X = ["Top", "Right", "Bottom", "Left"],
                        z = function(e, t) {
                            return e = t || e, "none" === d.css(e, "display") || !d.contains(e.ownerDocument, e)
                        };

                    function U(e, t, n, r) {
                        var i, o = 1,
                            s = 20,
                            a = r ? function() {
                                return r.cur()
                            } : function() {
                                return d.css(e, t, "")
                            },
                            u = a(),
                            c = n && n[3] || (d.cssNumber[t] ? "" : "px"),
                            l = (d.cssNumber[t] || "px" !== c && +u) && $.exec(d.css(e, t));
                        if (l && l[3] !== c) {
                            c = c || l[3], n = n || [], l = +u || 1;
                            do {
                                l /= o = o || ".5", d.style(e, t, l + c)
                            } while (o !== (o = a() / u) && 1 !== o && --s)
                        }
                        return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i
                    }
                    var Q = /^(?:checkbox|radio)$/i,
                        V = /<([\w:-]+)/,
                        Y = /^$|\/(?:java|ecma)script/i,
                        G = {
                            option: [1, "<select multiple='multiple'>", "</select>"],
                            thead: [1, "<table>", "</table>"],
                            col: [2, "<table><colgroup>", "</colgroup></table>"],
                            tr: [2, "<table><tbody>", "</tbody></table>"],
                            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            _default: [0, "", ""]
                        };

                    function K(e, t) {
                        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                        return void 0 === t || t && d.nodeName(e, t) ? d.merge([e], n) : n
                    }

                    function J(e, t) {
                        for (var n = 0, r = e.length; n < r; n++) R.set(e[n], "globalEval", !t || R.get(t[n], "globalEval"))
                    }
                    G.optgroup = G.option, G.tbody = G.tfoot = G.colgroup = G.caption = G.thead, G.th = G.td;
                    var Z, ee, te = /<|&#?\w+;/;

                    function ne(e, t, n, r, i) {
                        for (var o, s, a, u, c, l, f = t.createDocumentFragment(), p = [], h = 0, g = e.length; h < g; h++)
                            if ((o = e[h]) || 0 === o)
                                if ("object" === d.type(o)) d.merge(p, o.nodeType ? [o] : o);
                                else if (te.test(o)) {
                            for (s = s || f.appendChild(t.createElement("div")), a = (V.exec(o) || ["", ""])[1].toLowerCase(), u = G[a] || G._default, s.innerHTML = u[1] + d.htmlPrefilter(o) + u[2], l = u[0]; l--;) s = s.lastChild;
                            d.merge(p, s.childNodes), (s = f.firstChild).textContent = ""
                        } else p.push(t.createTextNode(o));
                        for (f.textContent = "", h = 0; o = p[h++];)
                            if (r && d.inArray(o, r) > -1) i && i.push(o);
                            else if (c = d.contains(o.ownerDocument, o), s = K(f.appendChild(o), "script"), c && J(s), n)
                            for (l = 0; o = s[l++];) Y.test(o.type || "") && n.push(o);
                        return f
                    }
                    Z = r.createDocumentFragment().appendChild(r.createElement("div")), (ee = r.createElement("input")).setAttribute("type", "radio"), ee.setAttribute("checked", "checked"), ee.setAttribute("name", "t"), Z.appendChild(ee), f.checkClone = Z.cloneNode(!0).cloneNode(!0).lastChild.checked, Z.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!Z.cloneNode(!0).lastChild.defaultValue;
                    var re = /^key/,
                        ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                        oe = /^([^.]*)(?:\.(.+)|)/;

                    function se() {
                        return !0
                    }

                    function ae() {
                        return !1
                    }

                    function ue() {
                        try {
                            return r.activeElement
                        } catch (e) {}
                    }

                    function ce(e, t, n, r, i, o) {
                        var s, a;
                        if ("object" == typeof t) {
                            for (a in "string" != typeof n && (r = r || n, n = void 0), t) ce(e, a, n, r, t[a], o);
                            return e
                        }
                        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ae;
                        else if (!i) return e;
                        return 1 === o && (s = i, i = function(e) {
                            return d().off(e), s.apply(this, arguments)
                        }, i.guid = s.guid || (s.guid = d.guid++)), e.each((function() {
                            d.event.add(this, t, i, r, n)
                        }))
                    }
                    d.event = {
                        global: {},
                        add: function(e, t, n, r, i) {
                            var o, s, a, u, c, l, f, p, h, g, v, m = R.get(e);
                            if (m)
                                for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = d.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                                        return void 0 !== d && d.event.triggered !== t.type ? d.event.dispatch.apply(e, arguments) : void 0
                                    }), c = (t = (t || "").match(q) || [""]).length; c--;) h = v = (a = oe.exec(t[c]) || [])[1], g = (a[2] || "").split(".").sort(), h && (f = d.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = d.event.special[h] || {}, l = d.extend({
                                    type: h,
                                    origType: v,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext: i && d.expr.match.needsContext.test(i),
                                    namespace: g.join(".")
                                }, o), (p = u[h]) || ((p = u[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, g, s) || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), d.event.global[h] = !0)
                        },
                        remove: function(e, t, n, r, i) {
                            var o, s, a, u, c, l, f, p, h, g, v, m = R.hasData(e) && R.get(e);
                            if (m && (u = m.events)) {
                                for (c = (t = (t || "").match(q) || [""]).length; c--;)
                                    if (h = v = (a = oe.exec(t[c]) || [])[1], g = (a[2] || "").split(".").sort(), h) {
                                        for (f = d.event.special[h] || {}, p = u[h = (r ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) l = p[o], !i && v !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                                        s && !p.length && (f.teardown && !1 !== f.teardown.call(e, g, m.handle) || d.removeEvent(e, h, m.handle), delete u[h])
                                    } else
                                        for (h in u) d.event.remove(e, h + t[c], n, r, !0);
                                d.isEmptyObject(u) && R.remove(e, "handle events")
                            }
                        },
                        dispatch: function(e) {
                            e = d.event.fix(e);
                            var t, n, r, o, s, a = [],
                                u = i.call(arguments),
                                c = (R.get(this, "events") || {})[e.type] || [],
                                l = d.event.special[e.type] || {};
                            if (u[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                                for (a = d.event.handlers.call(this, e, c), t = 0;
                                    (o = a[t++]) && !e.isPropagationStopped();)
                                    for (e.currentTarget = o.elem, n = 0;
                                        (s = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, void 0 !== (r = ((d.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                                return l.postDispatch && l.postDispatch.call(this, e), e.result
                            }
                        },
                        handlers: function(e, t) {
                            var n, r, i, o, s = [],
                                a = t.delegateCount,
                                u = e.target;
                            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                                for (; u !== this; u = u.parentNode || this)
                                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                                        for (r = [], n = 0; n < a; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? d(i, this).index(u) > -1 : d.find(i, this, null, [u]).length), r[i] && r.push(o);
                                        r.length && s.push({
                                            elem: u,
                                            handlers: r
                                        })
                                    }
                            return a < t.length && s.push({
                                elem: this,
                                handlers: t.slice(a)
                            }), s
                        },
                        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                        fixHooks: {},
                        keyHooks: {
                            props: "char charCode key keyCode".split(" "),
                            filter: function(e, t) {
                                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                            }
                        },
                        mouseHooks: {
                            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                            filter: function(e, t) {
                                var n, i, o, s = t.button;
                                return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || r).documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                            }
                        },
                        fix: function(e) {
                            if (e[d.expando]) return e;
                            var t, n, i, o = e.type,
                                s = e,
                                a = this.fixHooks[o];
                            for (a || (this.fixHooks[o] = a = ie.test(o) ? this.mouseHooks : re.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new d.Event(s), t = i.length; t--;) e[n = i[t]] = s[n];
                            return e.target || (e.target = r), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, s) : e
                        },
                        special: {
                            load: {
                                noBubble: !0
                            },
                            focus: {
                                trigger: function() {
                                    if (this !== ue() && this.focus) return this.focus(), !1
                                },
                                delegateType: "focusin"
                            },
                            blur: {
                                trigger: function() {
                                    if (this === ue() && this.blur) return this.blur(), !1
                                },
                                delegateType: "focusout"
                            },
                            click: {
                                trigger: function() {
                                    if ("checkbox" === this.type && this.click && d.nodeName(this, "input")) return this.click(), !1
                                },
                                _default: function(e) {
                                    return d.nodeName(e.target, "a")
                                }
                            },
                            beforeunload: {
                                postDispatch: function(e) {
                                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                                }
                            }
                        }
                    }, d.removeEvent = function(e, t, n) {
                        e.removeEventListener && e.removeEventListener(t, n)
                    }, d.Event = function(e, t) {
                        if (!(this instanceof d.Event)) return new d.Event(e, t);
                        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? se : ae) : this.type = e, t && d.extend(this, t), this.timeStamp = e && e.timeStamp || d.now(), this[d.expando] = !0
                    }, d.Event.prototype = {
                        constructor: d.Event,
                        isDefaultPrevented: ae,
                        isPropagationStopped: ae,
                        isImmediatePropagationStopped: ae,
                        isSimulated: !1,
                        preventDefault: function() {
                            var e = this.originalEvent;
                            this.isDefaultPrevented = se, e && !this.isSimulated && e.preventDefault()
                        },
                        stopPropagation: function() {
                            var e = this.originalEvent;
                            this.isPropagationStopped = se, e && !this.isSimulated && e.stopPropagation()
                        },
                        stopImmediatePropagation: function() {
                            var e = this.originalEvent;
                            this.isImmediatePropagationStopped = se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                        }
                    }, d.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    }, (function(e, t) {
                        d.event.special[e] = {
                            delegateType: t,
                            bindType: t,
                            handle: function(e) {
                                var n, r = this,
                                    i = e.relatedTarget,
                                    o = e.handleObj;
                                return i && (i === r || d.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                            }
                        }
                    })), d.fn.extend({
                        on: function(e, t, n, r) {
                            return ce(this, e, t, n, r)
                        },
                        one: function(e, t, n, r) {
                            return ce(this, e, t, n, r, 1)
                        },
                        off: function(e, t, n) {
                            var r, i;
                            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, d(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                            if ("object" == typeof e) {
                                for (i in e) this.off(i, t, e[i]);
                                return this
                            }
                            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ae), this.each((function() {
                                d.event.remove(this, e, n, t)
                            }))
                        }
                    });
                    var le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                        fe = /<script|<style|<link/i,
                        pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        de = /^true\/(.*)/,
                        he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                    function ge(e, t) {
                        return d.nodeName(e, "table") && d.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
                    }

                    function ve(e) {
                        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                    }

                    function me(e) {
                        var t = de.exec(e.type);
                        return t ? e.type = t[1] : e.removeAttribute("type"), e
                    }

                    function ye(e, t) {
                        var n, r, i, o, s, a, u, c;
                        if (1 === t.nodeType) {
                            if (R.hasData(e) && (o = R.access(e), s = R.set(t, o), c = o.events))
                                for (i in delete s.handle, s.events = {}, c)
                                    for (n = 0, r = c[i].length; n < r; n++) d.event.add(t, i, c[i][n]);
                            P.hasData(e) && (a = P.access(e), u = d.extend({}, a), P.set(t, u))
                        }
                    }

                    function xe(e, t, n, r) {
                        t = o.apply([], t);
                        var i, s, a, u, c, l, p = 0,
                            h = e.length,
                            g = h - 1,
                            v = t[0],
                            m = d.isFunction(v);
                        if (m || h > 1 && "string" == typeof v && !f.checkClone && pe.test(v)) return e.each((function(i) {
                            var o = e.eq(i);
                            m && (t[0] = v.call(this, i, o.html())), xe(o, t, n, r)
                        }));
                        if (h && (s = (i = ne(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = s), s || r)) {
                            for (u = (a = d.map(K(i, "script"), ve)).length; p < h; p++) c = i, p !== g && (c = d.clone(c, !0, !0), u && d.merge(a, K(c, "script"))), n.call(e[p], c, p);
                            if (u)
                                for (l = a[a.length - 1].ownerDocument, d.map(a, me), p = 0; p < u; p++) c = a[p], Y.test(c.type || "") && !R.access(c, "globalEval") && d.contains(l, c) && (c.src ? d._evalUrl && d._evalUrl(c.src) : d.globalEval(c.textContent.replace(he, "")))
                        }
                        return e
                    }

                    function be(e, t, n) {
                        for (var r, i = t ? d.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || d.cleanData(K(r)), r.parentNode && (n && d.contains(r.ownerDocument, r) && J(K(r, "script")), r.parentNode.removeChild(r));
                        return e
                    }
                    d.extend({
                        htmlPrefilter: function(e) {
                            return e.replace(le, "<$1></$2>")
                        },
                        clone: function(e, t, n) {
                            var r, i, o, s, a, u, c, l = e.cloneNode(!0),
                                p = d.contains(e.ownerDocument, e);
                            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || d.isXMLDoc(e)))
                                for (s = K(l), r = 0, i = (o = K(e)).length; r < i; r++) a = o[r], void 0, "input" === (c = (u = s[r]).nodeName.toLowerCase()) && Q.test(a.type) ? u.checked = a.checked : "input" !== c && "textarea" !== c || (u.defaultValue = a.defaultValue);
                            if (t)
                                if (n)
                                    for (o = o || K(e), s = s || K(l), r = 0, i = o.length; r < i; r++) ye(o[r], s[r]);
                                else ye(e, l);
                            return (s = K(l, "script")).length > 0 && J(s, !p && K(e, "script")), l
                        },
                        cleanData: function(e) {
                            for (var t, n, r, i = d.event.special, o = 0; void 0 !== (n = e[o]); o++)
                                if (_(n)) {
                                    if (t = n[R.expando]) {
                                        if (t.events)
                                            for (r in t.events) i[r] ? d.event.remove(n, r) : d.removeEvent(n, r, t.handle);
                                        n[R.expando] = void 0
                                    }
                                    n[P.expando] && (n[P.expando] = void 0)
                                }
                        }
                    }), d.fn.extend({
                        domManip: xe,
                        detach: function(e) {
                            return be(this, e, !0)
                        },
                        remove: function(e) {
                            return be(this, e)
                        },
                        text: function(e) {
                            return O(this, (function(e) {
                                return void 0 === e ? d.text(this) : this.empty().each((function() {
                                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                                }))
                            }), null, e, arguments.length)
                        },
                        append: function() {
                            return xe(this, arguments, (function(e) {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ge(this, e).appendChild(e)
                            }))
                        },
                        prepend: function() {
                            return xe(this, arguments, (function(e) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var t = ge(this, e);
                                    t.insertBefore(e, t.firstChild)
                                }
                            }))
                        },
                        before: function() {
                            return xe(this, arguments, (function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this)
                            }))
                        },
                        after: function() {
                            return xe(this, arguments, (function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                            }))
                        },
                        empty: function() {
                            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (d.cleanData(K(e, !1)), e.textContent = "");
                            return this
                        },
                        clone: function(e, t) {
                            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                                return d.clone(this, e, t)
                            }))
                        },
                        html: function(e) {
                            return O(this, (function(e) {
                                var t = this[0] || {},
                                    n = 0,
                                    r = this.length;
                                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                if ("string" == typeof e && !fe.test(e) && !G[(V.exec(e) || ["", ""])[1].toLowerCase()]) {
                                    e = d.htmlPrefilter(e);
                                    try {
                                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (d.cleanData(K(t, !1)), t.innerHTML = e);
                                        t = 0
                                    } catch (e) {}
                                }
                                t && this.empty().append(e)
                            }), null, e, arguments.length)
                        },
                        replaceWith: function() {
                            var e = [];
                            return xe(this, arguments, (function(t) {
                                var n = this.parentNode;
                                d.inArray(this, e) < 0 && (d.cleanData(K(this)), n && n.replaceChild(t, this))
                            }), e)
                        }
                    }), d.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, (function(e, t) {
                        d.fn[e] = function(e) {
                            for (var n, r = [], i = d(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), d(i[a])[t](n), s.apply(r, n.get());
                            return this.pushStack(r)
                        }
                    }));
                    var we, Te = {
                        HTML: "block",
                        BODY: "block"
                    };

                    function Ce(e, t) {
                        var n = d(t.createElement(e)).appendTo(t.body),
                            r = d.css(n[0], "display");
                        return n.detach(), r
                    }

                    function ke(e) {
                        var t = r,
                            n = Te[e];
                        return n || ("none" !== (n = Ce(e, t)) && n || ((t = (we = (we || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = Ce(e, t), we.detach()), Te[e] = n), n
                    }
                    var Se = /^margin/,
                        Ee = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"),
                        Ne = function(t) {
                            var n = t.ownerDocument.defaultView;
                            return n && n.opener || (n = e), n.getComputedStyle(t)
                        },
                        Ae = function(e, t, n, r) {
                            var i, o, s = {};
                            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                            for (o in i = n.apply(e, r || []), t) e.style[o] = s[o];
                            return i
                        },
                        je = r.documentElement;

                    function De(e, t, n) {
                        var r, i, o, s, a = e.style;
                        return "" !== (s = (n = n || Ne(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || d.contains(e.ownerDocument, e) || (s = d.style(e, t)), n && !f.pixelMarginRight() && Ee.test(s) && Se.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o), void 0 !== s ? s + "" : s
                    }

                    function Le(e, t) {
                        return {
                            get: function() {
                                if (!e()) return (this.get = t).apply(this, arguments);
                                delete this.get
                            }
                        }
                    }! function() {
                        var t, n, i, o, s = r.createElement("div"),
                            a = r.createElement("div");

                        function u() {
                            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", je.appendChild(s);
                            var r = e.getComputedStyle(a);
                            t = "1%" !== r.top, o = "2px" === r.marginLeft, n = "4px" === r.width, a.style.marginRight = "50%", i = "4px" === r.marginRight, je.removeChild(s)
                        }
                        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), d.extend(f, {
                            pixelPosition: function() {
                                return u(), t
                            },
                            boxSizingReliable: function() {
                                return null == n && u(), n
                            },
                            pixelMarginRight: function() {
                                return null == n && u(), i
                            },
                            reliableMarginLeft: function() {
                                return null == n && u(), o
                            },
                            reliableMarginRight: function() {
                                var t, n = a.appendChild(r.createElement("div"));
                                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", je.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), je.removeChild(s), a.removeChild(n), t
                            }
                        }))
                    }();
                    var qe = /^(none|table(?!-c[ea]).+)/,
                        He = {
                            position: "absolute",
                            visibility: "hidden",
                            display: "block"
                        },
                        Oe = {
                            letterSpacing: "0",
                            fontWeight: "400"
                        },
                        _e = ["Webkit", "O", "Moz", "ms"],
                        Fe = r.createElement("div").style;

                    function Re(e) {
                        if (e in Fe) return e;
                        for (var t = e[0].toUpperCase() + e.slice(1), n = _e.length; n--;)
                            if ((e = _e[n] + t) in Fe) return e
                    }

                    function Pe(e, t, n) {
                        var r = $.exec(t);
                        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                    }

                    function Me(e, t, n, r, i) {
                        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += d.css(e, n + X[o], !0, i)), r ? ("content" === n && (s -= d.css(e, "padding" + X[o], !0, i)), "margin" !== n && (s -= d.css(e, "border" + X[o] + "Width", !0, i))) : (s += d.css(e, "padding" + X[o], !0, i), "padding" !== n && (s += d.css(e, "border" + X[o] + "Width", !0, i)));
                        return s
                    }

                    function Ie(e, t, n) {
                        var r = !0,
                            i = "width" === t ? e.offsetWidth : e.offsetHeight,
                            o = Ne(e),
                            s = "border-box" === d.css(e, "boxSizing", !1, o);
                        if (i <= 0 || null == i) {
                            if (((i = De(e, t, o)) < 0 || null == i) && (i = e.style[t]), Ee.test(i)) return i;
                            r = s && (f.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
                        }
                        return i + Me(e, t, n || (s ? "border" : "content"), r, o) + "px"
                    }

                    function Be(e, t) {
                        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)(r = e[s]).style && (o[s] = R.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && z(r) && (o[s] = R.access(r, "olddisplay", ke(r.nodeName)))) : (i = z(r), "none" === n && i || R.set(r, "olddisplay", i ? n : d.css(r, "display"))));
                        for (s = 0; s < a; s++)(r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
                        return e
                    }

                    function We(e, t, n, r, i) {
                        return new We.prototype.init(e, t, n, r, i)
                    }
                    d.extend({
                        cssHooks: {
                            opacity: {
                                get: function(e, t) {
                                    if (t) {
                                        var n = De(e, "opacity");
                                        return "" === n ? "1" : n
                                    }
                                }
                            }
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0
                        },
                        cssProps: {
                            float: "cssFloat"
                        },
                        style: function(e, t, n, r) {
                            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                var i, o, s, a = d.camelCase(t),
                                    u = e.style;
                                if (t = d.cssProps[a] || (d.cssProps[a] = Re(a) || a), s = d.cssHooks[t] || d.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];
                                "string" == (o = typeof n) && (i = $.exec(n)) && i[1] && (n = U(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (d.cssNumber[a] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))
                            }
                        },
                        css: function(e, t, n, r) {
                            var i, o, s, a = d.camelCase(t);
                            return t = d.cssProps[a] || (d.cssProps[a] = Re(a) || a), (s = d.cssHooks[t] || d.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = De(e, t, r)), "normal" === i && t in Oe && (i = Oe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                        }
                    }), d.each(["height", "width"], (function(e, t) {
                        d.cssHooks[t] = {
                            get: function(e, n, r) {
                                if (n) return qe.test(d.css(e, "display")) && 0 === e.offsetWidth ? Ae(e, He, (function() {
                                    return Ie(e, t, r)
                                })) : Ie(e, t, r)
                            },
                            set: function(e, n, r) {
                                var i, o = r && Ne(e),
                                    s = r && Me(e, t, r, "border-box" === d.css(e, "boxSizing", !1, o), o);
                                return s && (i = $.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = d.css(e, t)), Pe(0, n, s)
                            }
                        }
                    })), d.cssHooks.marginLeft = Le(f.reliableMarginLeft, (function(e, t) {
                        if (t) return (parseFloat(De(e, "marginLeft")) || e.getBoundingClientRect().left - Ae(e, {
                            marginLeft: 0
                        }, (function() {
                            return e.getBoundingClientRect().left
                        }))) + "px"
                    })), d.cssHooks.marginRight = Le(f.reliableMarginRight, (function(e, t) {
                        if (t) return Ae(e, {
                            display: "inline-block"
                        }, De, [e, "marginRight"])
                    })), d.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    }, (function(e, t) {
                        d.cssHooks[e + t] = {
                            expand: function(n) {
                                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + X[r] + t] = o[r] || o[r - 2] || o[0];
                                return i
                            }
                        }, Se.test(e) || (d.cssHooks[e + t].set = Pe)
                    })), d.fn.extend({
                        css: function(e, t) {
                            return O(this, (function(e, t, n) {
                                var r, i, o = {},
                                    s = 0;
                                if (d.isArray(t)) {
                                    for (r = Ne(e), i = t.length; s < i; s++) o[t[s]] = d.css(e, t[s], !1, r);
                                    return o
                                }
                                return void 0 !== n ? d.style(e, t, n) : d.css(e, t)
                            }), e, t, arguments.length > 1)
                        },
                        show: function() {
                            return Be(this, !0)
                        },
                        hide: function() {
                            return Be(this)
                        },
                        toggle: function(e) {
                            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                                z(this) ? d(this).show() : d(this).hide()
                            }))
                        }
                    }), d.Tween = We, We.prototype = {
                        constructor: We,
                        init: function(e, t, n, r, i, o) {
                            this.elem = e, this.prop = n, this.easing = i || d.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (d.cssNumber[n] ? "" : "px")
                        },
                        cur: function() {
                            var e = We.propHooks[this.prop];
                            return e && e.get ? e.get(this) : We.propHooks._default.get(this)
                        },
                        run: function(e) {
                            var t, n = We.propHooks[this.prop];
                            return this.options.duration ? this.pos = t = d.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : We.propHooks._default.set(this), this
                        }
                    }, We.prototype.init.prototype = We.prototype, We.propHooks = {
                        _default: {
                            get: function(e) {
                                var t;
                                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = d.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                            },
                            set: function(e) {
                                d.fx.step[e.prop] ? d.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[d.cssProps[e.prop]] && !d.cssHooks[e.prop] ? e.elem[e.prop] = e.now : d.style(e.elem, e.prop, e.now + e.unit)
                            }
                        }
                    }, We.propHooks.scrollTop = We.propHooks.scrollLeft = {
                        set: function(e) {
                            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                        }
                    }, d.easing = {
                        linear: function(e) {
                            return e
                        },
                        swing: function(e) {
                            return .5 - Math.cos(e * Math.PI) / 2
                        },
                        _default: "swing"
                    }, d.fx = We.prototype.init, d.fx.step = {};
                    var $e, Xe, ze = /^(?:toggle|show|hide)$/,
                        Ue = /queueHooks$/;

                    function Qe() {
                        return e.setTimeout((function() {
                            $e = void 0
                        })), $e = d.now()
                    }

                    function Ve(e, t) {
                        var n, r = 0,
                            i = {
                                height: e
                            };
                        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = X[r])] = i["padding" + n] = e;
                        return t && (i.opacity = i.width = e), i
                    }

                    function Ye(e, t, n) {
                        for (var r, i = (Ge.tweeners[t] || []).concat(Ge.tweeners["*"]), o = 0, s = i.length; o < s; o++)
                            if (r = i[o].call(n, t, e)) return r
                    }

                    function Ge(e, t, n) {
                        var r, i, o = 0,
                            s = Ge.prefilters.length,
                            a = d.Deferred().always((function() {
                                delete u.elem
                            })),
                            u = function() {
                                if (i) return !1;
                                for (var t = $e || Qe(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(r);
                                return a.notifyWith(e, [c, r, n]), r < 1 && s ? n : (a.resolveWith(e, [c]), !1)
                            },
                            c = a.promise({
                                elem: e,
                                props: d.extend({}, t),
                                opts: d.extend(!0, {
                                    specialEasing: {},
                                    easing: d.easing._default
                                }, n),
                                originalProperties: t,
                                originalOptions: n,
                                startTime: $e || Qe(),
                                duration: n.duration,
                                tweens: [],
                                createTween: function(t, n) {
                                    var r = d.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                                    return c.tweens.push(r), r
                                },
                                stop: function(t) {
                                    var n = 0,
                                        r = t ? c.tweens.length : 0;
                                    if (i) return this;
                                    for (i = !0; n < r; n++) c.tweens[n].run(1);
                                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                                }
                            }),
                            l = c.props;
                        for (function(e, t) {
                                var n, r, i, o, s;
                                for (n in e)
                                    if (i = t[r = d.camelCase(n)], o = e[n], d.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = d.cssHooks[r]) && "expand" in s)
                                        for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                                    else t[r] = i
                            }(l, c.opts.specialEasing); o < s; o++)
                            if (r = Ge.prefilters[o].call(c, e, l, c.opts)) return d.isFunction(r.stop) && (d._queueHooks(c.elem, c.opts.queue).stop = d.proxy(r.stop, r)), r;
                        return d.map(l, Ye, c), d.isFunction(c.opts.start) && c.opts.start.call(e, c), d.fx.timer(d.extend(u, {
                            elem: e,
                            anim: c,
                            queue: c.opts.queue
                        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
                    }
                    d.Animation = d.extend(Ge, {
                            tweeners: {
                                "*": [function(e, t) {
                                    var n = this.createTween(e, t);
                                    return U(n.elem, e, $.exec(t), n), n
                                }]
                            },
                            tweener: function(e, t) {
                                d.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(q);
                                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], Ge.tweeners[n] = Ge.tweeners[n] || [], Ge.tweeners[n].unshift(t)
                            },
                            prefilters: [function(e, t, n) {
                                var r, i, o, s, a, u, c, l = this,
                                    f = {},
                                    p = e.style,
                                    h = e.nodeType && z(e),
                                    g = R.get(e, "fxshow");
                                for (r in n.queue || (null == (a = d._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
                                        a.unqueued || u()
                                    }), a.unqueued++, l.always((function() {
                                        l.always((function() {
                                            a.unqueued--, d.queue(e, "fx").length || a.empty.fire()
                                        }))
                                    }))), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (c = d.css(e, "display")) ? R.get(e, "olddisplay") || ke(e.nodeName) : c) && "none" === d.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", l.always((function() {
                                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                                    }))), t)
                                    if (i = t[r], ze.exec(i)) {
                                        if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                                            if ("show" !== i || !g || void 0 === g[r]) continue;
                                            h = !0
                                        }
                                        f[r] = g && g[r] || d.style(e, r)
                                    } else c = void 0;
                                if (d.isEmptyObject(f)) "inline" === ("none" === c ? ke(e.nodeName) : c) && (p.display = c);
                                else
                                    for (r in g ? "hidden" in g && (h = g.hidden) : g = R.access(e, "fxshow", {}), o && (g.hidden = !h), h ? d(e).show() : l.done((function() {
                                            d(e).hide()
                                        })), l.done((function() {
                                            var t;
                                            for (t in R.remove(e, "fxshow"), f) d.style(e, t, f[t])
                                        })), f) s = Ye(h ? g[r] : 0, r, l), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
                            }],
                            prefilter: function(e, t) {
                                t ? Ge.prefilters.unshift(e) : Ge.prefilters.push(e)
                            }
                        }), d.speed = function(e, t, n) {
                            var r = e && "object" == typeof e ? d.extend({}, e) : {
                                complete: n || !n && t || d.isFunction(e) && e,
                                duration: e,
                                easing: n && t || t && !d.isFunction(t) && t
                            };
                            return r.duration = d.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in d.fx.speeds ? d.fx.speeds[r.duration] : d.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                                d.isFunction(r.old) && r.old.call(this), r.queue && d.dequeue(this, r.queue)
                            }, r
                        }, d.fn.extend({
                            fadeTo: function(e, t, n, r) {
                                return this.filter(z).css("opacity", 0).show().end().animate({
                                    opacity: t
                                }, e, n, r)
                            },
                            animate: function(e, t, n, r) {
                                var i = d.isEmptyObject(e),
                                    o = d.speed(t, n, r),
                                    s = function() {
                                        var t = Ge(this, d.extend({}, e), o);
                                        (i || R.get(this, "finish")) && t.stop(!0)
                                    };
                                return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                            },
                            stop: function(e, t, n) {
                                var r = function(e) {
                                    var t = e.stop;
                                    delete e.stop, t(n)
                                };
                                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function() {
                                    var t = !0,
                                        i = null != e && e + "queueHooks",
                                        o = d.timers,
                                        s = R.get(this);
                                    if (i) s[i] && s[i].stop && r(s[i]);
                                    else
                                        for (i in s) s[i] && s[i].stop && Ue.test(i) && r(s[i]);
                                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                                    !t && n || d.dequeue(this, e)
                                }))
                            },
                            finish: function(e) {
                                return !1 !== e && (e = e || "fx"), this.each((function() {
                                    var t, n = R.get(this),
                                        r = n[e + "queue"],
                                        i = n[e + "queueHooks"],
                                        o = d.timers,
                                        s = r ? r.length : 0;
                                    for (n.finish = !0, d.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                    for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                    delete n.finish
                                }))
                            }
                        }), d.each(["toggle", "show", "hide"], (function(e, t) {
                            var n = d.fn[t];
                            d.fn[t] = function(e, r, i) {
                                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Ve(t, !0), e, r, i)
                            }
                        })), d.each({
                            slideDown: Ve("show"),
                            slideUp: Ve("hide"),
                            slideToggle: Ve("toggle"),
                            fadeIn: {
                                opacity: "show"
                            },
                            fadeOut: {
                                opacity: "hide"
                            },
                            fadeToggle: {
                                opacity: "toggle"
                            }
                        }, (function(e, t) {
                            d.fn[e] = function(e, n, r) {
                                return this.animate(t, e, n, r)
                            }
                        })), d.timers = [], d.fx.tick = function() {
                            var e, t = 0,
                                n = d.timers;
                            for ($e = d.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                            n.length || d.fx.stop(), $e = void 0
                        }, d.fx.timer = function(e) {
                            d.timers.push(e), e() ? d.fx.start() : d.timers.pop()
                        }, d.fx.interval = 13, d.fx.start = function() {
                            Xe || (Xe = e.setInterval(d.fx.tick, d.fx.interval))
                        }, d.fx.stop = function() {
                            e.clearInterval(Xe), Xe = null
                        }, d.fx.speeds = {
                            slow: 600,
                            fast: 200,
                            _default: 400
                        }, d.fn.delay = function(t, n) {
                            return t = d.fx && d.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, r) {
                                var i = e.setTimeout(n, t);
                                r.stop = function() {
                                    e.clearTimeout(i)
                                }
                            }))
                        },
                        function() {
                            var e = r.createElement("input"),
                                t = r.createElement("select"),
                                n = t.appendChild(r.createElement("option"));
                            e.type = "checkbox", f.checkOn = "" !== e.value, f.optSelected = n.selected, t.disabled = !0, f.optDisabled = !n.disabled, (e = r.createElement("input")).value = "t", e.type = "radio", f.radioValue = "t" === e.value
                        }();
                    var Ke, Je = d.expr.attrHandle;
                    d.fn.extend({
                        attr: function(e, t) {
                            return O(this, d.attr, e, t, arguments.length > 1)
                        },
                        removeAttr: function(e) {
                            return this.each((function() {
                                d.removeAttr(this, e)
                            }))
                        }
                    }), d.extend({
                        attr: function(e, t, n) {
                            var r, i, o = e.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? d.prop(e, t, n) : (1 === o && d.isXMLDoc(e) || (t = t.toLowerCase(), i = d.attrHooks[t] || (d.expr.match.bool.test(t) ? Ke : void 0)), void 0 !== n ? null === n ? void d.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = d.find.attr(e, t)) ? void 0 : r)
                        },
                        attrHooks: {
                            type: {
                                set: function(e, t) {
                                    if (!f.radioValue && "radio" === t && d.nodeName(e, "input")) {
                                        var n = e.value;
                                        return e.setAttribute("type", t), n && (e.value = n), t
                                    }
                                }
                            }
                        },
                        removeAttr: function(e, t) {
                            var n, r, i = 0,
                                o = t && t.match(q);
                            if (o && 1 === e.nodeType)
                                for (; n = o[i++];) r = d.propFix[n] || n, d.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
                        }
                    }), Ke = {
                        set: function(e, t, n) {
                            return !1 === t ? d.removeAttr(e, n) : e.setAttribute(n, n), n
                        }
                    }, d.each(d.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                        var n = Je[t] || d.find.attr;
                        Je[t] = function(e, t, r) {
                            var i, o;
                            return r || (o = Je[t], Je[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Je[t] = o), i
                        }
                    }));
                    var Ze = /^(?:input|select|textarea|button)$/i,
                        et = /^(?:a|area)$/i;
                    d.fn.extend({
                        prop: function(e, t) {
                            return O(this, d.prop, e, t, arguments.length > 1)
                        },
                        removeProp: function(e) {
                            return this.each((function() {
                                delete this[d.propFix[e] || e]
                            }))
                        }
                    }), d.extend({
                        prop: function(e, t, n) {
                            var r, i, o = e.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && d.isXMLDoc(e) || (t = d.propFix[t] || t, i = d.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                        },
                        propHooks: {
                            tabIndex: {
                                get: function(e) {
                                    var t = d.find.attr(e, "tabindex");
                                    return t ? parseInt(t, 10) : Ze.test(e.nodeName) || et.test(e.nodeName) && e.href ? 0 : -1
                                }
                            }
                        },
                        propFix: {
                            for: "htmlFor",
                            class: "className"
                        }
                    }), f.optSelected || (d.propHooks.selected = {
                        get: function(e) {
                            var t = e.parentNode;
                            return t && t.parentNode && t.parentNode.selectedIndex, null
                        },
                        set: function(e) {
                            var t = e.parentNode;
                            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                        }
                    }), d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                        d.propFix[this.toLowerCase()] = this
                    }));
                    var tt = /[\t\r\n\f]/g;

                    function nt(e) {
                        return e.getAttribute && e.getAttribute("class") || ""
                    }
                    d.fn.extend({
                        addClass: function(e) {
                            var t, n, r, i, o, s, a, u = 0;
                            if (d.isFunction(e)) return this.each((function(t) {
                                d(this).addClass(e.call(this, t, nt(this)))
                            }));
                            if ("string" == typeof e && e)
                                for (t = e.match(q) || []; n = this[u++];)
                                    if (i = nt(n), r = 1 === n.nodeType && (" " + i + " ").replace(tt, " ")) {
                                        for (s = 0; o = t[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                        i !== (a = d.trim(r)) && n.setAttribute("class", a)
                                    }
                            return this
                        },
                        removeClass: function(e) {
                            var t, n, r, i, o, s, a, u = 0;
                            if (d.isFunction(e)) return this.each((function(t) {
                                d(this).removeClass(e.call(this, t, nt(this)))
                            }));
                            if (!arguments.length) return this.attr("class", "");
                            if ("string" == typeof e && e)
                                for (t = e.match(q) || []; n = this[u++];)
                                    if (i = nt(n), r = 1 === n.nodeType && (" " + i + " ").replace(tt, " ")) {
                                        for (s = 0; o = t[s++];)
                                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                                        i !== (a = d.trim(r)) && n.setAttribute("class", a)
                                    }
                            return this
                        },
                        toggleClass: function(e, t) {
                            var n = typeof e;
                            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : d.isFunction(e) ? this.each((function(n) {
                                d(this).toggleClass(e.call(this, n, nt(this), t), t)
                            })) : this.each((function() {
                                var t, r, i, o;
                                if ("string" === n)
                                    for (r = 0, i = d(this), o = e.match(q) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                                else void 0 !== e && "boolean" !== n || ((t = nt(this)) && R.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : R.get(this, "__className__") || ""))
                            }))
                        },
                        hasClass: function(e) {
                            var t, n, r = 0;
                            for (t = " " + e + " "; n = this[r++];)
                                if (1 === n.nodeType && (" " + nt(n) + " ").replace(tt, " ").indexOf(t) > -1) return !0;
                            return !1
                        }
                    });
                    var rt = /\r/g,
                        it = /[\x20\t\r\n\f]+/g;
                    d.fn.extend({
                        val: function(e) {
                            var t, n, r, i = this[0];
                            return arguments.length ? (r = d.isFunction(e), this.each((function(n) {
                                var i;
                                1 === this.nodeType && (null == (i = r ? e.call(this, n, d(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : d.isArray(i) && (i = d.map(i, (function(e) {
                                    return null == e ? "" : e + ""
                                }))), (t = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                            }))) : i ? (t = d.valHooks[i.type] || d.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(rt, "") : null == n ? "" : n : void 0
                        }
                    }), d.extend({
                        valHooks: {
                            option: {
                                get: function(e) {
                                    var t = d.find.attr(e, "value");
                                    return null != t ? t : d.trim(d.text(e)).replace(it, " ")
                                }
                            },
                            select: {
                                get: function(e) {
                                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
                                        if (((n = r[u]).selected || u === i) && (f.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !d.nodeName(n.parentNode, "optgroup"))) {
                                            if (t = d(n).val(), o) return t;
                                            s.push(t)
                                        }
                                    return s
                                },
                                set: function(e, t) {
                                    for (var n, r, i = e.options, o = d.makeArray(t), s = i.length; s--;)((r = i[s]).selected = d.inArray(d.valHooks.option.get(r), o) > -1) && (n = !0);
                                    return n || (e.selectedIndex = -1), o
                                }
                            }
                        }
                    }), d.each(["radio", "checkbox"], (function() {
                        d.valHooks[this] = {
                            set: function(e, t) {
                                if (d.isArray(t)) return e.checked = d.inArray(d(e).val(), t) > -1
                            }
                        }, f.checkOn || (d.valHooks[this].get = function(e) {
                            return null === e.getAttribute("value") ? "on" : e.value
                        })
                    }));
                    var ot = /^(?:focusinfocus|focusoutblur)$/;
                    d.extend(d.event, {
                        trigger: function(t, n, i, o) {
                            var s, a, u, c, f, p, h, g = [i || r],
                                v = l.call(t, "type") ? t.type : t,
                                m = l.call(t, "namespace") ? t.namespace.split(".") : [];
                            if (a = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !ot.test(v + d.event.triggered) && (v.indexOf(".") > -1 && (m = v.split("."), v = m.shift(), m.sort()), f = v.indexOf(":") < 0 && "on" + v, (t = t[d.expando] ? t : new d.Event(v, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : d.makeArray(n, [t]), h = d.event.special[v] || {}, o || !h.trigger || !1 !== h.trigger.apply(i, n))) {
                                if (!o && !h.noBubble && !d.isWindow(i)) {
                                    for (c = h.delegateType || v, ot.test(c + v) || (a = a.parentNode); a; a = a.parentNode) g.push(a), u = a;
                                    u === (i.ownerDocument || r) && g.push(u.defaultView || u.parentWindow || e)
                                }
                                for (s = 0;
                                    (a = g[s++]) && !t.isPropagationStopped();) t.type = s > 1 ? c : h.bindType || v, (p = (R.get(a, "events") || {})[t.type] && R.get(a, "handle")) && p.apply(a, n), (p = f && a[f]) && p.apply && _(a) && (t.result = p.apply(a, n), !1 === t.result && t.preventDefault());
                                return t.type = v, o || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(g.pop(), n) || !_(i) || f && d.isFunction(i[v]) && !d.isWindow(i) && ((u = i[f]) && (i[f] = null), d.event.triggered = v, i[v](), d.event.triggered = void 0, u && (i[f] = u)), t.result
                            }
                        },
                        simulate: function(e, t, n) {
                            var r = d.extend(new d.Event, n, {
                                type: e,
                                isSimulated: !0
                            });
                            d.event.trigger(r, null, t)
                        }
                    }), d.fn.extend({
                        trigger: function(e, t) {
                            return this.each((function() {
                                d.event.trigger(e, t, this)
                            }))
                        },
                        triggerHandler: function(e, t) {
                            var n = this[0];
                            if (n) return d.event.trigger(e, t, n, !0)
                        }
                    }), d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(e, t) {
                        d.fn[t] = function(e, n) {
                            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                        }
                    })), d.fn.extend({
                        hover: function(e, t) {
                            return this.mouseenter(e).mouseleave(t || e)
                        }
                    }), f.focusin = "onfocusin" in e, f.focusin || d.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function(e, t) {
                        var n = function(e) {
                            d.event.simulate(t, e.target, d.event.fix(e))
                        };
                        d.event.special[t] = {
                            setup: function() {
                                var r = this.ownerDocument || this,
                                    i = R.access(r, t);
                                i || r.addEventListener(e, n, !0), R.access(r, t, (i || 0) + 1)
                            },
                            teardown: function() {
                                var r = this.ownerDocument || this,
                                    i = R.access(r, t) - 1;
                                i ? R.access(r, t, i) : (r.removeEventListener(e, n, !0), R.remove(r, t))
                            }
                        }
                    }));
                    var st = e.location,
                        at = d.now(),
                        ut = /\?/;
                    d.parseJSON = function(e) {
                        return JSON.parse(e + "")
                    }, d.parseXML = function(t) {
                        var n;
                        if (!t || "string" != typeof t) return null;
                        try {
                            n = (new e.DOMParser).parseFromString(t, "text/xml")
                        } catch (e) {
                            n = void 0
                        }
                        return n && !n.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + t), n
                    };
                    var ct = /#.*$/,
                        lt = /([?&])_=[^&]*/,
                        ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                        pt = /^(?:GET|HEAD)$/,
                        dt = /^\/\//,
                        ht = {},
                        gt = {},
                        vt = "*/".concat("*"),
                        mt = r.createElement("a");

                    function yt(e) {
                        return function(t, n) {
                            "string" != typeof t && (n = t, t = "*");
                            var r, i = 0,
                                o = t.toLowerCase().match(q) || [];
                            if (d.isFunction(n))
                                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                        }
                    }

                    function xt(e, t, n, r) {
                        var i = {},
                            o = e === gt;

                        function s(a) {
                            var u;
                            return i[a] = !0, d.each(e[a] || [], (function(e, a) {
                                var c = a(t, n, r);
                                return "string" != typeof c || o || i[c] ? o ? !(u = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
                            })), u
                        }
                        return s(t.dataTypes[0]) || !i["*"] && s("*")
                    }

                    function bt(e, t) {
                        var n, r, i = d.ajaxSettings.flatOptions || {};
                        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                        return r && d.extend(!0, e, r), e
                    }
                    mt.href = st.href, d.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: st.href,
                            type: "GET",
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(st.protocol),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": vt,
                                text: "text/plain",
                                html: "text/html",
                                xml: "application/xml, text/xml",
                                json: "application/json, text/javascript"
                            },
                            contents: {
                                xml: /\bxml\b/,
                                html: /\bhtml/,
                                json: /\bjson\b/
                            },
                            responseFields: {
                                xml: "responseXML",
                                text: "responseText",
                                json: "responseJSON"
                            },
                            converters: {
                                "* text": String,
                                "text html": !0,
                                "text json": d.parseJSON,
                                "text xml": d.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function(e, t) {
                            return t ? bt(bt(e, d.ajaxSettings), t) : bt(d.ajaxSettings, e)
                        },
                        ajaxPrefilter: yt(ht),
                        ajaxTransport: yt(gt),
                        ajax: function(t, n) {
                            "object" == typeof t && (n = t, t = void 0), n = n || {};
                            var i, o, s, a, u, c, l, f, p = d.ajaxSetup({}, n),
                                h = p.context || p,
                                g = p.context && (h.nodeType || h.jquery) ? d(h) : d.event,
                                v = d.Deferred(),
                                m = d.Callbacks("once memory"),
                                y = p.statusCode || {},
                                x = {},
                                b = {},
                                w = 0,
                                T = "canceled",
                                C = {
                                    readyState: 0,
                                    getResponseHeader: function(e) {
                                        var t;
                                        if (2 === w) {
                                            if (!a)
                                                for (a = {}; t = ft.exec(s);) a[t[1].toLowerCase()] = t[2];
                                            t = a[e.toLowerCase()]
                                        }
                                        return null == t ? null : t
                                    },
                                    getAllResponseHeaders: function() {
                                        return 2 === w ? s : null
                                    },
                                    setRequestHeader: function(e, t) {
                                        var n = e.toLowerCase();
                                        return w || (e = b[n] = b[n] || e, x[e] = t), this
                                    },
                                    overrideMimeType: function(e) {
                                        return w || (p.mimeType = e), this
                                    },
                                    statusCode: function(e) {
                                        var t;
                                        if (e)
                                            if (w < 2)
                                                for (t in e) y[t] = [y[t], e[t]];
                                            else C.always(e[C.status]);
                                        return this
                                    },
                                    abort: function(e) {
                                        var t = e || T;
                                        return i && i.abort(t), k(0, t), this
                                    }
                                };
                            if (v.promise(C).complete = m.add, C.success = C.done, C.error = C.fail, p.url = ((t || p.url || st.href) + "").replace(ct, "").replace(dt, st.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = d.trim(p.dataType || "*").toLowerCase().match(q) || [""], null == p.crossDomain) {
                                c = r.createElement("a");
                                try {
                                    c.href = p.url, c.href = c.href, p.crossDomain = mt.protocol + "//" + mt.host != c.protocol + "//" + c.host
                                } catch (e) {
                                    p.crossDomain = !0
                                }
                            }
                            if (p.data && p.processData && "string" != typeof p.data && (p.data = d.param(p.data, p.traditional)), xt(ht, p, n, C), 2 === w) return C;
                            for (f in (l = d.event && p.global) && 0 == d.active++ && d.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !pt.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (ut.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = lt.test(o) ? o.replace(lt, "$1_=" + at++) : o + (ut.test(o) ? "&" : "?") + "_=" + at++)), p.ifModified && (d.lastModified[o] && C.setRequestHeader("If-Modified-Since", d.lastModified[o]), d.etag[o] && C.setRequestHeader("If-None-Match", d.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + vt + "; q=0.01" : "") : p.accepts["*"]), p.headers) C.setRequestHeader(f, p.headers[f]);
                            if (p.beforeSend && (!1 === p.beforeSend.call(h, C, p) || 2 === w)) return C.abort();
                            for (f in T = "abort", {
                                    success: 1,
                                    error: 1,
                                    complete: 1
                                }) C[f](p[f]);
                            if (i = xt(gt, p, n, C)) {
                                if (C.readyState = 1, l && g.trigger("ajaxSend", [C, p]), 2 === w) return C;
                                p.async && p.timeout > 0 && (u = e.setTimeout((function() {
                                    C.abort("timeout")
                                }), p.timeout));
                                try {
                                    w = 1, i.send(x, k)
                                } catch (e) {
                                    if (!(w < 2)) throw e;
                                    k(-1, e)
                                }
                            } else k(-1, "No Transport");

                            function k(t, n, r, a) {
                                var c, f, x, b, T, k = n;
                                2 !== w && (w = 2, u && e.clearTimeout(u), i = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, r && (b = function(e, t, n) {
                                    for (var r, i, o, s, a = e.contents, u = e.dataTypes;
                                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                    if (r)
                                        for (i in a)
                                            if (a[i] && a[i].test(r)) {
                                                u.unshift(i);
                                                break
                                            }
                                    if (u[0] in n) o = u[0];
                                    else {
                                        for (i in n) {
                                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                                o = i;
                                                break
                                            }
                                            s || (s = i)
                                        }
                                        o = o || s
                                    }
                                    if (o) return o !== u[0] && u.unshift(o), n[o]
                                }(p, C, r)), b = function(e, t, n, r) {
                                    var i, o, s, a, u, c = {},
                                        l = e.dataTypes.slice();
                                    if (l[1])
                                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                                    for (o = l.shift(); o;)
                                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())
                                            if ("*" === o) o = u;
                                            else if ("*" !== u && u !== o) {
                                        if (!(s = c[u + " " + o] || c["* " + o]))
                                            for (i in c)
                                                if ((a = i.split(" "))[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                                                    !0 === s ? s = c[i] : !0 !== c[i] && (o = a[0], l.unshift(a[1]));
                                                    break
                                                }
                                        if (!0 !== s)
                                            if (s && e.throws) t = s(t);
                                            else try {
                                                t = s(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: s ? e : "No conversion from " + u + " to " + o
                                                }
                                            }
                                    }
                                    return {
                                        state: "success",
                                        data: t
                                    }
                                }(p, b, C, c), c ? (p.ifModified && ((T = C.getResponseHeader("Last-Modified")) && (d.lastModified[o] = T), (T = C.getResponseHeader("etag")) && (d.etag[o] = T)), 204 === t || "HEAD" === p.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = b.state, f = b.data, c = !(x = b.error))) : (x = k, !t && k || (k = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || k) + "", c ? v.resolveWith(h, [f, k, C]) : v.rejectWith(h, [C, k, x]), C.statusCode(y), y = void 0, l && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? f : x]), m.fireWith(h, [C, k]), l && (g.trigger("ajaxComplete", [C, p]), --d.active || d.event.trigger("ajaxStop")))
                            }
                            return C
                        },
                        getJSON: function(e, t, n) {
                            return d.get(e, t, n, "json")
                        },
                        getScript: function(e, t) {
                            return d.get(e, void 0, t, "script")
                        }
                    }), d.each(["get", "post"], (function(e, t) {
                        d[t] = function(e, n, r, i) {
                            return d.isFunction(n) && (i = i || r, r = n, n = void 0), d.ajax(d.extend({
                                url: e,
                                type: t,
                                dataType: i,
                                data: n,
                                success: r
                            }, d.isPlainObject(e) && e))
                        }
                    })), d._evalUrl = function(e) {
                        return d.ajax({
                            url: e,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            throws: !0
                        })
                    }, d.fn.extend({
                        wrapAll: function(e) {
                            var t;
                            return d.isFunction(e) ? this.each((function(t) {
                                d(this).wrapAll(e.call(this, t))
                            })) : (this[0] && (t = d(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                                return e
                            })).append(this)), this)
                        },
                        wrapInner: function(e) {
                            return d.isFunction(e) ? this.each((function(t) {
                                d(this).wrapInner(e.call(this, t))
                            })) : this.each((function() {
                                var t = d(this),
                                    n = t.contents();
                                n.length ? n.wrapAll(e) : t.append(e)
                            }))
                        },
                        wrap: function(e) {
                            var t = d.isFunction(e);
                            return this.each((function(n) {
                                d(this).wrapAll(t ? e.call(this, n) : e)
                            }))
                        },
                        unwrap: function() {
                            return this.parent().each((function() {
                                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
                            })).end()
                        }
                    }), d.expr.filters.hidden = function(e) {
                        return !d.expr.filters.visible(e)
                    }, d.expr.filters.visible = function(e) {
                        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
                    };
                    var wt = /%20/g,
                        Tt = /\[\]$/,
                        Ct = /\r?\n/g,
                        kt = /^(?:submit|button|image|reset|file)$/i,
                        St = /^(?:input|select|textarea|keygen)/i;

                    function Et(e, t, n, r) {
                        var i;
                        if (d.isArray(t)) d.each(t, (function(t, i) {
                            n || Tt.test(e) ? r(e, i) : Et(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                        }));
                        else if (n || "object" !== d.type(t)) r(e, t);
                        else
                            for (i in t) Et(e + "[" + i + "]", t[i], n, r)
                    }
                    d.param = function(e, t) {
                        var n, r = [],
                            i = function(e, t) {
                                t = d.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                            };
                        if (void 0 === t && (t = d.ajaxSettings && d.ajaxSettings.traditional), d.isArray(e) || e.jquery && !d.isPlainObject(e)) d.each(e, (function() {
                            i(this.name, this.value)
                        }));
                        else
                            for (n in e) Et(n, e[n], t, i);
                        return r.join("&").replace(wt, "+")
                    }, d.fn.extend({
                        serialize: function() {
                            return d.param(this.serializeArray())
                        },
                        serializeArray: function() {
                            return this.map((function() {
                                var e = d.prop(this, "elements");
                                return e ? d.makeArray(e) : this
                            })).filter((function() {
                                var e = this.type;
                                return this.name && !d(this).is(":disabled") && St.test(this.nodeName) && !kt.test(e) && (this.checked || !Q.test(e))
                            })).map((function(e, t) {
                                var n = d(this).val();
                                return null == n ? null : d.isArray(n) ? d.map(n, (function(e) {
                                    return {
                                        name: t.name,
                                        value: e.replace(Ct, "\r\n")
                                    }
                                })) : {
                                    name: t.name,
                                    value: n.replace(Ct, "\r\n")
                                }
                            })).get()
                        }
                    }), d.ajaxSettings.xhr = function() {
                        try {
                            return new e.XMLHttpRequest
                        } catch (e) {}
                    };
                    var Nt = {
                            0: 200,
                            1223: 204
                        },
                        At = d.ajaxSettings.xhr();
                    f.cors = !!At && "withCredentials" in At, f.ajax = At = !!At, d.ajaxTransport((function(t) {
                        var n, r;
                        if (f.cors || At && !t.crossDomain) return {
                            send: function(i, o) {
                                var s, a = t.xhr();
                                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) a.setRequestHeader(s, i[s]);
                                n = function(e) {
                                    return function() {
                                        n && (n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Nt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                            binary: a.response
                                        } : {
                                            text: a.responseText
                                        }, a.getAllResponseHeaders()))
                                    }
                                }, a.onload = n(), r = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                                    4 === a.readyState && e.setTimeout((function() {
                                        n && r()
                                    }))
                                }, n = n("abort");
                                try {
                                    a.send(t.hasContent && t.data || null)
                                } catch (e) {
                                    if (n) throw e
                                }
                            },
                            abort: function() {
                                n && n()
                            }
                        }
                    })), d.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /\b(?:java|ecma)script\b/
                        },
                        converters: {
                            "text script": function(e) {
                                return d.globalEval(e), e
                            }
                        }
                    }), d.ajaxPrefilter("script", (function(e) {
                        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                    })), d.ajaxTransport("script", (function(e) {
                        var t, n;
                        if (e.crossDomain) return {
                            send: function(i, o) {
                                t = d("<script>").prop({
                                    charset: e.scriptCharset,
                                    src: e.url
                                }).on("load error", n = function(e) {
                                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                                }), r.head.appendChild(t[0])
                            },
                            abort: function() {
                                n && n()
                            }
                        }
                    }));
                    var jt = [],
                        Dt = /(=)\?(?=&|$)|\?\?/;
                    d.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function() {
                            var e = jt.pop() || d.expando + "_" + at++;
                            return this[e] = !0, e
                        }
                    }), d.ajaxPrefilter("json jsonp", (function(t, n, r) {
                        var i, o, s, a = !1 !== t.jsonp && (Dt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Dt.test(t.data) && "data");
                        if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = d.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Dt, "$1" + i) : !1 !== t.jsonp && (t.url += (ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                            return s || d.error(i + " was not called"), s[0]
                        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
                            s = arguments
                        }, r.always((function() {
                            void 0 === o ? d(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, jt.push(i)), s && d.isFunction(o) && o(s[0]), s = o = void 0
                        })), "script"
                    })), d.parseHTML = function(e, t, n) {
                        if (!e || "string" != typeof e) return null;
                        "boolean" == typeof t && (n = t, t = !1), t = t || r;
                        var i = C.exec(e),
                            o = !n && [];
                        return i ? [t.createElement(i[1])] : (i = ne([e], t, o), o && o.length && d(o).remove(), d.merge([], i.childNodes))
                    };
                    var Lt = d.fn.load;

                    function qt(e) {
                        return d.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
                    }
                    d.fn.load = function(e, t, n) {
                        if ("string" != typeof e && Lt) return Lt.apply(this, arguments);
                        var r, i, o, s = this,
                            a = e.indexOf(" ");
                        return a > -1 && (r = d.trim(e.slice(a)), e = e.slice(0, a)), d.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && d.ajax({
                            url: e,
                            type: i || "GET",
                            dataType: "html",
                            data: t
                        }).done((function(e) {
                            o = arguments, s.html(r ? d("<div>").append(d.parseHTML(e)).find(r) : e)
                        })).always(n && function(e, t) {
                            s.each((function() {
                                n.apply(this, o || [e.responseText, t, e])
                            }))
                        }), this
                    }, d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                        d.fn[t] = function(e) {
                            return this.on(t, e)
                        }
                    })), d.expr.filters.animated = function(e) {
                        return d.grep(d.timers, (function(t) {
                            return e === t.elem
                        })).length
                    }, d.offset = {
                        setOffset: function(e, t, n) {
                            var r, i, o, s, a, u, c = d.css(e, "position"),
                                l = d(e),
                                f = {};
                            "static" === c && (e.style.position = "relative"), a = l.offset(), o = d.css(e, "top"), u = d.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1 ? (s = (r = l.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), d.isFunction(t) && (t = t.call(e, n, d.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : l.css(f)
                        }
                    }, d.fn.extend({
                        offset: function(e) {
                            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                                d.offset.setOffset(this, e, t)
                            }));
                            var t, n, r = this[0],
                                i = {
                                    top: 0,
                                    left: 0
                                },
                                o = r && r.ownerDocument;
                            return o ? (t = o.documentElement, d.contains(t, r) ? (i = r.getBoundingClientRect(), n = qt(o), {
                                top: i.top + n.pageYOffset - t.clientTop,
                                left: i.left + n.pageXOffset - t.clientLeft
                            }) : i) : void 0
                        },
                        position: function() {
                            if (this[0]) {
                                var e, t, n = this[0],
                                    r = {
                                        top: 0,
                                        left: 0
                                    };
                                return "fixed" === d.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), d.nodeName(e[0], "html") || (r = e.offset()), r.top += d.css(e[0], "borderTopWidth", !0), r.left += d.css(e[0], "borderLeftWidth", !0)), {
                                    top: t.top - r.top - d.css(n, "marginTop", !0),
                                    left: t.left - r.left - d.css(n, "marginLeft", !0)
                                }
                            }
                        },
                        offsetParent: function() {
                            return this.map((function() {
                                for (var e = this.offsetParent; e && "static" === d.css(e, "position");) e = e.offsetParent;
                                return e || je
                            }))
                        }
                    }), d.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    }, (function(e, t) {
                        var n = "pageYOffset" === t;
                        d.fn[e] = function(r) {
                            return O(this, (function(e, r, i) {
                                var o = qt(e);
                                if (void 0 === i) return o ? o[t] : e[r];
                                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                            }), e, r, arguments.length)
                        }
                    })), d.each(["top", "left"], (function(e, t) {
                        d.cssHooks[t] = Le(f.pixelPosition, (function(e, n) {
                            if (n) return n = De(e, t), Ee.test(n) ? d(e).position()[t] + "px" : n
                        }))
                    })), d.each({
                        Height: "height",
                        Width: "width"
                    }, (function(e, t) {
                        d.each({
                            padding: "inner" + e,
                            content: t,
                            "": "outer" + e
                        }, (function(n, r) {
                            d.fn[r] = function(r, i) {
                                var o = arguments.length && (n || "boolean" != typeof r),
                                    s = n || (!0 === r || !0 === i ? "margin" : "border");
                                return O(this, (function(t, n, r) {
                                    var i;
                                    return d.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? d.css(t, n, s) : d.style(t, n, r, s)
                                }), t, o ? r : void 0, o, null)
                            }
                        }))
                    })), d.fn.extend({
                        bind: function(e, t, n) {
                            return this.on(e, null, t, n)
                        },
                        unbind: function(e, t) {
                            return this.off(e, null, t)
                        },
                        delegate: function(e, t, n, r) {
                            return this.on(t, e, n, r)
                        },
                        undelegate: function(e, t, n) {
                            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                        },
                        size: function() {
                            return this.length
                        }
                    }), d.fn.andSelf = d.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], (function() {
                        return d
                    }));
                    var Ht = e.jQuery,
                        Ot = e.$;
                    return d.noConflict = function(t) {
                        return e.$ === d && (e.$ = Ot), t && e.jQuery === d && (e.jQuery = Ht), d
                    }, t || (e.jQuery = e.$ = d), d
                }, "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return n(e)
                } : n(t)
            }
        },
        t = {};

    function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var o = t[r] = {
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.exports
    }
    n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }, n.d = function(e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            var e = n(434),
                t = n.n(e),
                r = {
                    getShadowRoots: function(e) {
                        var t = e && e.shadowRoot ? [e.shadowRoot] : [],
                            n = e ? e.querySelectorAll("*") : document.querySelectorAll("*");
                        return (n = Array.prototype.slice.call(n)).forEach((function(e) {
                            e.shadowRoot && (t.push(e.shadowRoot), window.ae_jQuery(e.shadowRoot).children().length > 0 && (t = t.concat(r.getShadowRoots(e.shadowRoot))))
                        })), t
                    },
                    getShadowHosts: function(e) {
                        var t = e && e.shadowRoot ? [e] : [],
                            n = e ? e.querySelectorAll("*") : document.querySelectorAll("*");
                        return (n = Array.prototype.slice.call(n)).forEach((function(e) {
                            e.shadowRoot && (t.push(e), window.ae_jQuery(e.shadowRoot).children().length > 0 && (t = t.concat(r.getShadowHosts(e.shadowRoot))))
                        })), t
                    },
                    selectElementsFromShadow: function(e, t) {
                        var n, i = [];
                        return r.getShadowRoots(t).forEach((function(t) {
                            n = window.ae_jQuery(e, t), i = n.length ? i.concat(n.toArray()) : i
                        })), i
                    }
                },
                i = r,
                o = {
                    _doc: {
                        get cookie() {
                            return document.cookie
                        },
                        set cookie(e) {
                            document.cookie = e
                        }
                    },
                    set: function(e, t, n, r) {
                        var i = encodeURIComponent(t);
                        isFinite(n) && (i += "; expires=" + o._expires(n, r || "days")), i += "; path=/", o._doc.cookie = e + "=" + i
                    },
                    get: function(e, t) {
                        var n, r, i;
                        return n = o._doc.cookie, t && (n = t), -1 === (r = n.indexOf(" " + e + "=")) && (r = n.indexOf(e + "=")), -1 === r ? n = null : (r = n.indexOf("=", r) + 1, -1 === (i = n.indexOf(";", r)) && (i = n.length), n = decodeURIComponent(n.substring(r, i))), n
                    },
                    all: function(e) {
                        var t = o._doc.cookie;
                        e && (t = e);
                        for (var n = t.split("; "), r = {}, i = 0; i < n.length; i++) {
                            var s = n[i].split("=");
                            r[s[0]] = s[1]
                        }
                        return r
                    },
                    _expires: function(e, t) {
                        var n = o._currentDate();
                        if ("days" === t) n.setDate(n.getDate() + e);
                        else {
                            if ("minutes" !== t) throw new Error("Invalid unitType passed to _expires()");
                            n.setTime(n.getTime() + 60 * e * 1e3)
                        }
                        return n.toUTCString()
                    },
                    _currentDate: function() {
                        return new Date
                    }
                };
            window.testScope && (window.testScope.cookiesCore = o);
            var s = o,
                a = "color: red; font-weight: bold",
                u = "color: orange",
                c = {
                    error: 0,
                    info: 1,
                    debug: 2
                };

            function l() {
                return c[f._level]
            }

            function f(e) {
                this.module_name = e
            }
            f.init = function() {
                var e = f.getInitialLevel(s.get("aebuild"), !!document.getElementById("ae_versioning"), s.get("aelogging"));
                f.setLevel(e, !1), window.ae_jQuery(document).on("audioeyeLogLevelChange", (function(e) {
                    f.setLevel(e.detail.level, !0)
                })), window.ae_jQuery(document).on("audioeyeVersioningActive", (function() {
                    f.setLevel(f.getInitialLevel(s.get("aebuild"), !0, s.get("aelogging")), !1)
                }))
            }, f.getInitialLevel = function(e, t, n) {
                var r;
                return r = "dev" === e || "debug" === e ? "debug" : t ? "info" : "error", n && -1 != Object.keys(c).indexOf(n) ? r = n : n && s.set("aelogging", "error", 0), r
            }, f.setLevel = function(e, t) {
                if (-1 === Object.keys(c).indexOf(e)) throw this._log("Logging level must be one of (" + Object.keys(c).join(", ") + ")", void 0, a, "Logger"), new Error('Invalid level "' + e + '"');
                f._level = e, t && s.set("aelogging", e, 9125), l() >= 1 && console.log("AE Logging set to: " + e)
            }, f.prototype.error = function(e, t) {
                f._log(e, t, a, this.module_name, c.error)
            }, f.prototype.internalError = function(e, t) {
                f._log(e, t, u, this.module_name, c.debug, !0)
            }, f.prototype.debug = function(e, t) {
                2 === l() && f._log(e, t, u, this.module_name)
            }, f.prototype.info = function(e, t) {
                l() >= 1 && f._log(e, t, "color: #0090f1", this.module_name)
            }, f._getCodeTrace = function(e) {
                var t, n, r, i = "",
                    o = 1;
                if (e || (e = r = new Error), "object" != typeof(t = e && e.stack ? e.stack.split("\n") : "")) return !1;
                if (r && ("Error" === t[0] ? o += 3 : o += 2), !t[o]) return !1;
                (n = t[o].match(/(http|https)(:\/\/)(.+)(:)(\d+)(:)(\d+)/g)) && n.length && (i = n[0]);
                var s, a, u = {
                    line: (s = i.split(":"))[(a = s.length) - 2],
                    col: s[a - 1]
                };
                return {
                    pointer: i,
                    stack: t.slice(o),
                    line: u.line,
                    col: u.col
                }
            }, f._log = function(e, t, n, r, i, o) {
                var s, a = e,
                    u = f._getCodeTrace((s = t) && s.stack && s.message ? t : void 0);
                r && (a = e + " :: " + r), (i === c.error || o) && f._dispatchErr(e, u), t ? (a += "\n   ", console.log("%c" + a, n, t, "\n   ", u.pointer)) : console.log("%c" + a, n, "\n   ", u.pointer)
            }, f._dispatchErr = function(e, t) {
                var n = window.ae_jQuery.Event("audioeyeErrLogged");
                e && t.stack && (n.detail = {
                    filename: t.pointer,
                    lineno: t.line,
                    colno: t.col,
                    error: {
                        message: e,
                        stack: t.stack
                    }
                }, window.ae_jQuery(document).trigger(n))
            };
            var p, d = f;

            function h(e) {
                void 0 !== window.ae_tab_search_marker && e[0].setAttribute && (e.attr("data-ae-tab-search-from-marker-" + window.ae_tab_search_marker, window.ae_tab_counter), window.ae_tab_counter = window.ae_tab_counter + 1)
            }

            function g(e, t) {
                void 0 !== window.ae_tab_search_marker && e[0].setAttribute && 0 != t && (e.attr("data-ae-shift-tab-search-from-marker-" + window.ae_tab_search_marker + "-" + window.ae_tab_counter, window.ae_tab_counter), window.ae_tab_counter = window.ae_tab_counter + 1)
            }

            function v() {
                return "function" == typeof document.body.attachShadow
            }

            function m(e, n) {
                var r, i, o, s = e.nodeName.toLowerCase();
                return "area" === s ? (i = (r = e.parentNode).name, !(!e.href || !i || "map" !== r.nodeName.toLowerCase()) && !!(o = t()("img[usemap='#" + i + "']")[0]) && y(o)) : (/^(input|select|textarea|button|object)$/.test(s) ? !e.disabled && "hidden" !== e.type : "a" === s && e.href || n) && y(e)
            }

            function y(e) {
                return !t()(e).parents().addBack().filter((function() {
                    return "hidden" === t().css(this, "visibility") || "none" === t().css(this, "display")
                })).length
            }
            window.AudioEye && (p = AudioEye.productConfig), t().fn.safeText = function(e) {
                var t = "script, noscript, link, style, input[type='hidden'], .ae-exclude, [data-audioeye-exclude]";
                e && (t += ", " + e), p && p.excludes && (t += ", " + p.excludes);
                var n = this.clone();
                return n.find(t).remove(), n.find("br, hr").replaceWith("<span> </span>"), n.text().trim()
            }, t().fn.traverseDF = function(e, n) {
                var r = t()(this).eq(0);
                return t().isFunction(e) && (n = e, e = {}), r = "next" === (e = t().extend({
                    limit: 5e3,
                    direction: "next"
                }, e)).direction ? function(e, n, r) {
                    var i = new d("forwardDFSearch"),
                        o = 0;
                    e: for (; e;) {
                        o++;
                        var s = r.call(e);
                        if ("stop" === s) break;
                        if (n.limit && o > n.limit && i.info("Exceeded limit in forwardDFSearch " + e), e[0].firstChild && "next" !== s) h(e = t()(e[0].firstChild));
                        else {
                            if (!e[0].nextSibling) {
                                for (; e[0].parentNode;)
                                    if ((e = t()(e[0].parentNode))[0].nextSibling) {
                                        h(e = t()(e[0].nextSibling));
                                        continue e
                                    }
                                break
                            }
                            h(e = t()(e[0].nextSibling))
                        }
                    }
                    return e
                }(r, e, n) : function(e, n, r) {
                    for (var i = new d("reverseDFSearch"), o = 0; e && (o++, "stop" !== r.call(e));) {
                        if (n.limit && o > n.limit && i.info("Exceeded limit in reverseDFSearch " + e), !e[0].previousSibling) {
                            if (e[0].parentNode) {
                                g(e = t()(e[0].parentNode), n.incrementMarker);
                                continue
                            }
                            break
                        }
                        for (e = t()(e[0].previousSibling); e[0].lastChild;) e = t()(e[0].lastChild);
                        g(e, n.incrementMarker)
                    }
                    return e
                }(r, e, n), this
            }, t().fn.traverseChildren = function(e) {
                var n = t()(this)[0];
                return t()(this).traverseDF((function() {
                    return 0 === t()(this).closest(t()(n)).length ? "stop" : e.call(t()(this))
                }))
            }, t().fn.ariaOrText = function() {
                return this.attr("aria-label") || this.safeText()
            }, t().fn.findCSB = function(e) {
                if (!v()) return t()(this).find(e);
                var n = t()(this).find(e).toArray(),
                    r = 0,
                    o = [],
                    s = new WeakMap,
                    a = !1,
                    u = [];
                if (t()(this).each((function(r, c) {
                        i.getShadowHosts(c).forEach((function(r) {
                            n.indexOf(r) > -1 && u.push(r);
                            var i = t()(e, r.shadowRoot).toArray(),
                                c = t()(e, r).toArray();
                            (i = i.concat(c)).length && (s.set(r, i), a = !0, o = o.concat(r))
                        }))
                    })), n = t()(n).add(o).toArray(), a) {
                    for (var c; n[r];)(c = s.get(n[r])) && (u.indexOf(n[r]) > -1 ? (n = n.slice(0, r + 1).concat(c.concat(n.slice(r + 1))), r += c.length) : (n = n.slice(0, r).concat(c.concat(n.slice(r + 1))), r += c.length - 1)), r++;
                    c = !1
                }
                for (var l = [], f = 0; f < n.length; f++) - 1 === l.indexOf(n[f]) && l.push(n[f]);
                return t()(l)
            }, t().fn.closestCSB = function(e) {
                if (!v()) return t()(this).closest(e);
                var n, r, i = t()(this[0]).closest(e);
                return this.toArray().forEach((function(o) {
                    if ((n = o.compareDocumentPosition(document)) < 32 && n > 1 || i.length > 0) return i;
                    for (r = o.getRootNode(); r.host;) {
                        if (t()(r.host).closest(e).length) return void(i = t()(r.host).closest(e));
                        r = r.host.getRootNode()
                    }
                })), i
            }, t().fn.getShadowHosts = function(e) {
                if (v()) return i.getShadowHosts(e)
            }, t().fn.getShadowRoots = function(e) {
                if (v()) return i.getShadowRoots(e)
            }, t().fn.selectElementsFromShadow = function(e, t) {
                if (v()) return i.selectElementsFromShadow(e, t)
            }, t().fn.outerFind = function(e) {
                return this.find(t()(e, this.prop("ownerDocument") || this)).addBack(e)
            }, void 0 === t().fn.findExtra && (t().fn.findExtra = t().fn.outerFind), t().fn.parentsAndSelf = function(e) {
                return this.parents(t()(e, this.prop("ownerDocument") || this)).addBack(e)
            }, void 0 === t().fn.parentsExtra && (t().fn.parentsExtra = t().fn.parentsAndSelf), t().fn.clickOrEnter = function(e) {
                var n, r, i, o, s = Array.prototype.slice.call(arguments);
                return e = e ? "." + e : "", this.each((function() {
                    "function" == typeof s[s.length - 1] && (n = s.slice(0), o = n[n.length - 1], r = function(e) {
                        13 === e.which && (window.aeplayer && window.aeplayer.clickKey && window.aeplayer.clickKey(), o.call(this, e, "enter"))
                    }, i = function(e) {
                        o.call(this, e, "click")
                    }), n[0] = "keydown" + e, n[n.length - 1] = r, t()(this).register.apply(t()(this), n), n[0] = "click" + e, n[n.length - 1] = i, t()(this).register.apply(t()(this), n)
                }))
            }, t().fn.clickEnterOrSpace = function(e) {
                var n, r, i, o, s = Array.prototype.slice.call(arguments);
                return e = e ? "." + e : "", this.each((function() {
                    "function" == typeof s[s.length - 1] && (n = s.slice(0), o = n[n.length - 1], r = function(e) {
                        13 !== e.which && 32 !== e.which || (window.aeplayer && window.aeplayer.clickKey && window.aeplayer.clickKey(), 32 === e.which && e.preventDefault(), o.call(this, e, 13 === e.which ? "enter" : "space"))
                    }, i = function(e) {
                        o.call(this, e, "click")
                    }), n[0] = "keydown" + e, n[n.length - 1] = r, t()(this).register.apply(t()(this), n), n[0] = "click" + e, n[n.length - 1] = i, t()(this).register.apply(t()(this), n)
                }))
            }, t().fn.register = function(e) {
                var n = arguments;
                return "string" == typeof e && (e = e.indexOf(" ") > -1 ? e.split(" ") : [e], t()(this).each((function() {
                    var r = t()(this);
                    e.forEach((function(e) {
                        var i = e.split("."),
                            o = i[0],
                            s = i[1];
                        s && (t().eventsByNamespace || (t().eventsByNamespace = {}), t().eventsByNamespace[s] || (t().eventsByNamespace[s] = []), t().eventsByNamespace[s].push([r, o])), r.on.apply(r, n)
                    }))
                })))
            }, t().unregister = function(e) {
                var n;
                if (!t().eventsByNamespace) return !1;
                if (!t().eventsByNamespace[e]) return !1;
                for (n = t().eventsByNamespace[e].length; n--;) {
                    var r = t().eventsByNamespace[e][n][0],
                        i = t().eventsByNamespace[e][n][1];
                    r.off(i + "." + e), t().eventsByNamespace[e].pop()
                }
            }, t().fn.classList = function() {
                return this[0].className.split(/\s+/)
            }, t().fn.scrollParent = function(e) {
                var n = this.css("position"),
                    r = "absolute" === n,
                    i = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    o = this.parents().filter((function() {
                        var e = t()(this);
                        return (!r || "static" !== e.css("position")) && i.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                    })).eq(0);
                return "fixed" !== n && o.length ? o : t()(this[0].ownerDocument || document)
            }, t().fn.attrLower = function(e) {
                var t = this.attr(e);
                return "string" == typeof t ? t.toLowerCase() : t
            }, t().fn.addNoSort = function(e) {
                var n = e.jquery ? e[0] : e,
                    r = this.toArray();
                return r.push(n), t()(r)
            }, t().fn.groupPeers = function() {
                var e = t()(this).first();
                if ("radio" !== e.attr("type") && "checkbox" !== e.attr("type")) return t()();
                var n = e.attr("name");
                return n ? t()("[name=" + t().escapeSelector(n) + "]").filter((function() {
                    return this.form === e[0].form
                })) : e
            }, t().escapeSelector = function(e) {
                return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, (function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }))
            }, t().expr[":"].hiddenAll = function(e) {
                var n = t()(e).is(":hidden");
                return n && "inline" === t()(e).css("display") && t()(e).children().length > 0 ? !t()(e).children().is(":visible") : n
            }, t().expr[":"].focusable = function(e) {
                return m(e, !isNaN(t().attr(e, "tabindex")))
            }, t().expr[":"].tabbable = function(e) {
                var n = t().attr(e, "tabindex"),
                    r = null != n;
                return (!r || n >= 0) && m(e, r)
            }, window.ae_jQuery = window.$ae = t().noConflict(!1)
        }()
}();