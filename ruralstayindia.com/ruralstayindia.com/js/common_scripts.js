/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */ !(function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ?
        (module.exports = e.document ?
            t(e, !0) :
            function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e);
            }) :
        t(e);
})("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ?
        function(e) {
            return t.flat.call(e);
        } :
        function(e) {
            return t.concat.apply([], e);
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        y = n.hasOwnProperty,
        a = y.toString,
        l = a.call(Object),
        v = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
        },
        x = function(e) {
            return null != e && e === e.window;
        },
        S = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r,
            i,
            o = (n = n || S).createElement("script");
        if (((o.text = e), t))
            for (r in c)(i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e;
    }
    var f = "3.6.3",
        E = function(e, t) {
            return new E.fn.init(e, t);
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    (E.fn = E.prototype = {
        jquery: f,
        constructor: E,
        length: 0,
        toArray: function() {
            return s.call(this);
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = E.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function(e) {
            return E.each(this, e);
        },
        map: function(n) {
            return this.pushStack(
                E.map(this, function(e, t) {
                    return n.call(e, t, e);
                })
            );
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        even: function() {
            return this.pushStack(
                E.grep(this, function(e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function() {
            return this.pushStack(
                E.grep(this, function(e, t) {
                    return t % 2;
                })
            );
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: u,
        sort: t.sort,
        splice: t.splice,
    }),
    (E.extend = E.fn.extend = function() {
        var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || m(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    (r = e[t]),
                    "__proto__" !== t &&
                    a !== r &&
                    (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ?
                        ((n = a[t]), (o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}), (i = !1), (a[t] = E.extend(l, o, r))) :
                        void 0 !== r && (a[t] = r));
        return a;
    }),
    E.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e);
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || ("function" == typeof(n = y.call(t, "constructor") && t.constructor) && a.call(n) === l));
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function(e, t, n) {
                b(e, {
                    nonce: t && t.nonce
                }, n);
            },
            each: function(e, t) {
                var n,
                    r = 0;
                if (p(e)) {
                    for (n = e.length; r < n; r++)
                        if (!1 === t.call(e[r], r, e[r])) break;
                } else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (p(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : i.call(t, e, n);
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                return r;
            },
            map: function(e, t, n) {
                var r,
                    i,
                    o = 0,
                    a = [];
                if (p(e))
                    for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                else
                    for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return g(a);
            },
            guid: 1,
            support: v,
        }),
        "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
        E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase();
        });
    var d = (function(n) {
        var e,
            d,
            b,
            o,
            i,
            h,
            f,
            g,
            w,
            u,
            l,
            T,
            C,
            a,
            S,
            y,
            s,
            c,
            v,
            E = "sizzle" + 1 * new Date(),
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            j = function(e, t) {
                return e === t && (l = !0), 0;
            },
            D = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1;
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i"),
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? ("\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            oe = function() {
                T();
            },
            ae = be(
                function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                }, {
                    dir: "parentNode",
                    next: "legend"
                }
            );
        try {
            H.apply((t = O.call(p.childNodes)), p.childNodes), t[p.childNodes.length].nodeType;
        } catch (e) {
            H = {
                apply: t.length ?
                    function(e, t) {
                        L.apply(e, O.call(t));
                    } :
                    function(e, t) {
                        var n = e.length,
                            r = 0;
                        while ((e[n++] = t[r++]));
                        e.length = n - 1;
                    },
            };
        }

        function se(t, e, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (((n = n || []), "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))) return n;
            if (!r && (T(e), (e = e || C), S)) {
                if (11 !== p && (u = Z.exec(t)))
                    if ((i = u[1])) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n;
                        } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i) return n.push(a), n;
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
                    }
                if (d.qsa && !N[t + " "] && (!y || !y.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
                        ((f = (ee.test(t) && ve(e.parentNode)) || e) === e && d.scope) || ((s = e.getAttribute("id")) ? (s = s.replace(re, ie)) : e.setAttribute("id", (s = E))), (o = (l = h(t)).length);
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",");
                    }
                    try {
                        if (d.cssSupportsSelector && !CSS.supports("selector(:is(" + c + "))")) throw new Error();
                        return H.apply(n, f.querySelectorAll(c)), n;
                    } catch (e) {
                        N(t, !0);
                    } finally {
                        s === E && e.removeAttribute("id");
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r);
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], (e[t + " "] = n);
            };
        }

        function le(e) {
            return (e[E] = !0), e;
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t;
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while ((n = n.nextSibling))
                    if (n === t) return -1;
            return e ? 1 : -1;
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }

        function ge(t) {
            return function(e) {
                return "form" in e ?
                    e.parentNode && !1 === e.disabled ?
                    "label" in e ?
                    "label" in e.parentNode ?
                    e.parentNode.disabled === t :
                    e.disabled === t :
                    e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t) :
                    e.disabled === t :
                    "label" in e && e.disabled === t;
            };
        }

        function ye(a) {
            return le(function(o) {
                return (
                    (o = +o),
                    le(function(e, t) {
                        var n,
                            r = a([], e.length, o),
                            i = r.length;
                        while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }

        function ve(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        for (e in ((d = se.support = {}),
                (i = se.isXML = function(e) {
                    var t = e && e.namespaceURI,
                        n = e && (e.ownerDocument || e).documentElement;
                    return !Y.test(t || (n && n.nodeName) || "HTML");
                }),
                (T = se.setDocument = function(e) {
                    var t,
                        n,
                        r = e ? e.ownerDocument || e : p;
                    return (
                        r != C &&
                        9 === r.nodeType &&
                        r.documentElement &&
                        ((a = (C = r).documentElement),
                            (S = !i(C)),
                            p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
                            (d.scope = ce(function(e) {
                                return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                            })),
                            (d.cssSupportsSelector = ce(function() {
                                return CSS.supports("selector(*)") && C.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))");
                            })),
                            (d.attributes = ce(function(e) {
                                return (e.className = "i"), !e.getAttribute("className");
                            })),
                            (d.getElementsByTagName = ce(function(e) {
                                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
                            })),
                            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
                            (d.getById = ce(function(e) {
                                return (a.appendChild(e).id = E), !C.getElementsByName || !C.getElementsByName(E).length;
                            })),
                            d.getById ?
                            ((b.filter.ID = function(e) {
                                    var t = e.replace(te, ne);
                                    return function(e) {
                                        return e.getAttribute("id") === t;
                                    };
                                }),
                                (b.find.ID = function(e, t) {
                                    if ("undefined" != typeof t.getElementById && S) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : [];
                                    }
                                })) :
                            ((b.filter.ID = function(e) {
                                    var n = e.replace(te, ne);
                                    return function(e) {
                                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                        return t && t.value === n;
                                    };
                                }),
                                (b.find.ID = function(e, t) {
                                    if ("undefined" != typeof t.getElementById && S) {
                                        var n,
                                            r,
                                            i,
                                            o = t.getElementById(e);
                                        if (o) {
                                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                            (i = t.getElementsByName(e)), (r = 0);
                                            while ((o = i[r++]))
                                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                        }
                                        return [];
                                    }
                                })),
                            (b.find.TAG = d.getElementsByTagName ?
                                function(e, t) {
                                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
                                } :
                                function(e, t) {
                                    var n,
                                        r = [],
                                        i = 0,
                                        o = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                                        return r;
                                    }
                                    return o;
                                }),
                            (b.find.CLASS =
                                d.getElementsByClassName &&
                                function(e, t) {
                                    if ("undefined" != typeof t.getElementsByClassName && S) return t.getElementsByClassName(e);
                                }),
                            (s = []),
                            (y = []),
                            (d.qsa = K.test(C.querySelectorAll)) &&
                            (ce(function(e) {
                                    var t;
                                    (a.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                    e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + R + ")"),
                                        e.querySelectorAll("[id~=" + E + "-]").length || y.push("~="),
                                        (t = C.createElement("input")).setAttribute("name", ""),
                                        e.appendChild(t),
                                        e.querySelectorAll("[name='']").length || y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                                        e.querySelectorAll(":checked").length || y.push(":checked"),
                                        e.querySelectorAll("a#" + E + "+*").length || y.push(".#.+[+~]"),
                                        e.querySelectorAll("\\\f"),
                                        y.push("[\\r\\n\\f]");
                                }),
                                ce(function(e) {
                                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = C.createElement("input");
                                    t.setAttribute("type", "hidden"),
                                        e.appendChild(t).setAttribute("name", "D"),
                                        e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="),
                                        2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                                        (a.appendChild(e).disabled = !0),
                                        2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                                        e.querySelectorAll("*,:x"),
                                        y.push(",.*:");
                                })),
                            (d.matchesSelector = K.test((c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector))) &&
                            ce(function(e) {
                                (d.disconnectedMatch = c.call(e, "*")), c.call(e, "[s!='']:x"), s.push("!=", F);
                            }),
                            d.cssSupportsSelector || y.push(":has"),
                            (y = y.length && new RegExp(y.join("|"))),
                            (s = s.length && new RegExp(s.join("|"))),
                            (t = K.test(a.compareDocumentPosition)),
                            (v =
                                t || K.test(a.contains) ?
                                function(e, t) {
                                    var n = (9 === e.nodeType && e.documentElement) || e,
                                        r = t && t.parentNode;
                                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                                } :
                                function(e, t) {
                                    if (t)
                                        while ((t = t.parentNode))
                                            if (t === e) return !0;
                                    return !1;
                                }),
                            (j = t ?
                                function(e, t) {
                                    if (e === t) return (l = !0), 0;
                                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return (
                                        n ||
                                        (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!d.sortDetached && t.compareDocumentPosition(e) === n) ?
                                            e == C || (e.ownerDocument == p && v(p, e)) ?
                                            -1 :
                                            t == C || (t.ownerDocument == p && v(p, t)) ?
                                            1 :
                                            u ?
                                            P(u, e) - P(u, t) :
                                            0 :
                                            4 & n ?
                                            -1 :
                                            1)
                                    );
                                } :
                                function(e, t) {
                                    if (e === t) return (l = !0), 0;
                                    var n,
                                        r = 0,
                                        i = e.parentNode,
                                        o = t.parentNode,
                                        a = [e],
                                        s = [t];
                                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                                    if (i === o) return pe(e, t);
                                    n = e;
                                    while ((n = n.parentNode)) a.unshift(n);
                                    n = t;
                                    while ((n = n.parentNode)) s.unshift(n);
                                    while (a[r] === s[r]) r++;
                                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
                                })),
                        C
                    );
                }),
                (se.matches = function(e, t) {
                    return se(e, null, null, t);
                }),
                (se.matchesSelector = function(e, t) {
                    if ((T(e), d.matchesSelector && S && !N[t + " "] && (!s || !s.test(t)) && (!y || !y.test(t))))
                        try {
                            var n = c.call(e, t);
                            if (n || d.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                        } catch (e) {
                            N(t, !0);
                        }
                    return 0 < se(t, C, null, [e]).length;
                }),
                (se.contains = function(e, t) {
                    return (e.ownerDocument || e) != C && T(e), v(e, t);
                }),
                (se.attr = function(e, t) {
                    (e.ownerDocument || e) != C && T(e);
                    var n = b.attrHandle[t.toLowerCase()],
                        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
                    return void 0 !== r ? r : d.attributes || !S ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }),
                (se.escape = function(e) {
                    return (e + "").replace(re, ie);
                }),
                (se.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }),
                (se.uniqueSort = function(e) {
                    var t,
                        n = [],
                        r = 0,
                        i = 0;
                    if (((l = !d.detectDuplicates), (u = !d.sortStable && e.slice(0)), e.sort(j), l)) {
                        while ((t = e[i++])) t === e[i] && (r = n.push(i));
                        while (r--) e.splice(n[r], 1);
                    }
                    return (u = null), e;
                }),
                (o = se.getText = function(e) {
                    var t,
                        n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                        } else if (3 === i || 4 === i) return e.nodeValue;
                    } else
                        while ((t = e[r++])) n += o(t);
                    return n;
                }),
                ((b = se.selectors = {
                    cacheLength: 50,
                    createPseudo: le,
                    match: G,
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
                            return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                        },
                        CHILD: function(e) {
                            return (
                                (e[1] = e[1].toLowerCase()),
                                "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && se.error(e[0]),
                                e
                            );
                        },
                        PSEUDO: function(e) {
                            var t,
                                n = !e[6] && e[2];
                            return G.CHILD.test(e[0]) ?
                                null :
                                (e[3] ? (e[2] = e[4] || e[5] || "") : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ?
                                function() {
                                    return !0;
                                } :
                                function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t;
                                };
                        },
                        CLASS: function(e) {
                            var t = m[e + " "];
                            return (
                                t ||
                                ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                                    m(e, function(e) {
                                        return t.test(("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || "");
                                    }))
                            );
                        },
                        ATTR: function(n, r, i) {
                            return function(e) {
                                var t = se.attr(e, n);
                                return null == t ?
                                    "!=" === r :
                                    !r ||
                                    ((t += ""),
                                        "=" === r ?
                                        t === i :
                                        "!=" === r ?
                                        t !== i :
                                        "^=" === r ?
                                        i && 0 === t.indexOf(i) :
                                        "*=" === r ?
                                        i && -1 < t.indexOf(i) :
                                        "$=" === r ?
                                        i && t.slice(-i.length) === i :
                                        "~=" === r ?
                                        -1 < (" " + t.replace($, " ") + " ").indexOf(i) :
                                        "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
                            };
                        },
                        CHILD: function(h, e, t, g, y) {
                            var v = "nth" !== h.slice(0, 3),
                                m = "last" !== h.slice(-4),
                                x = "of-type" === e;
                            return 1 === g && 0 === y ?
                                function(e) {
                                    return !!e.parentNode;
                                } :
                                function(e, t, n) {
                                    var r,
                                        i,
                                        o,
                                        a,
                                        s,
                                        u,
                                        l = v !== m ? "nextSibling" : "previousSibling",
                                        c = e.parentNode,
                                        f = x && e.nodeName.toLowerCase(),
                                        p = !n && !x,
                                        d = !1;
                                    if (c) {
                                        if (v) {
                                            while (l) {
                                                a = e;
                                                while ((a = a[l]))
                                                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                                u = l = "only" === h && !u && "nextSibling";
                                            }
                                            return !0;
                                        }
                                        if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                                            (d = (s = (r = (i = (o = (a = c)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2]), (a = s && c.childNodes[s]);
                                            while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                                                if (1 === a.nodeType && ++d && a === e) {
                                                    i[h] = [k, s, d];
                                                    break;
                                                }
                                        } else if ((p && (d = s = (r = (i = (o = (a = e)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d))
                                            while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                                                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                        return (d -= y) === g || (d % g == 0 && 0 <= d / g);
                                    }
                                };
                        },
                        PSEUDO: function(e, o) {
                            var t,
                                a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                            return a[E] ?
                                a(o) :
                                1 < a.length ?
                                ((t = [e, e, "", o]),
                                    b.setFilters.hasOwnProperty(e.toLowerCase()) ?
                                    le(function(e, t) {
                                        var n,
                                            r = a(e, o),
                                            i = r.length;
                                        while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                                    }) :
                                    function(e) {
                                        return a(e, 0, t);
                                    }) :
                                a;
                        },
                    },
                    pseudos: {
                        not: le(function(e) {
                            var r = [],
                                i = [],
                                s = f(e.replace(B, "$1"));
                            return s[E] ?
                                le(function(e, t, n, r) {
                                    var i,
                                        o = s(e, null, r, []),
                                        a = e.length;
                                    while (a--)(i = o[a]) && (e[a] = !(t[a] = i));
                                }) :
                                function(e, t, n) {
                                    return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                                };
                        }),
                        has: le(function(t) {
                            return function(e) {
                                return 0 < se(t, e).length;
                            };
                        }),
                        contains: le(function(t) {
                            return (
                                (t = t.replace(te, ne)),
                                function(e) {
                                    return -1 < (e.textContent || o(e)).indexOf(t);
                                }
                            );
                        }),
                        lang: le(function(n) {
                            return (
                                V.test(n || "") || se.error("unsupported lang: " + n),
                                (n = n.replace(te, ne).toLowerCase()),
                                function(e) {
                                    var t;
                                    do {
                                        if ((t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1;
                                }
                            );
                        }),
                        target: function(e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id;
                        },
                        root: function(e) {
                            return e === a;
                        },
                        focus: function(e) {
                            return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                        },
                        enabled: ge(!1),
                        disabled: ge(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function(e) {
                            return !b.pseudos.empty(e);
                        },
                        header: function(e) {
                            return J.test(e.nodeName);
                        },
                        input: function(e) {
                            return Q.test(e.nodeName);
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && "button" === e.type) || "button" === t;
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                        },
                        first: ye(function() {
                            return [0];
                        }),
                        last: ye(function(e, t) {
                            return [t - 1];
                        }),
                        eq: ye(function(e, t, n) {
                            return [n < 0 ? n + t : n];
                        }),
                        even: ye(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        odd: ye(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        lt: ye(function(e, t, n) {
                            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                            return e;
                        }),
                        gt: ye(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e;
                        }),
                    },
                }).pseudos.nth = b.pseudos.eq), {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }))
            b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ?
                function(e, t, n) {
                    while ((e = e[u]))
                        if (1 === e.nodeType || f) return s(e, t, n);
                    return !1;
                } :
                function(e, t, n) {
                    var r,
                        i,
                        o,
                        a = [k, p];
                    if (n) {
                        while ((e = e[u]))
                            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
                    } else
                        while ((e = e[u]))
                            if (1 === e.nodeType || f)
                                if (((i = (o = e[E] || (e[E] = {}))[e.uniqueID] || (o[e.uniqueID] = {})), l && l === e.nodeName.toLowerCase())) e = e[u] || e;
                                else {
                                    if ((r = i[c]) && r[0] === k && r[1] === p) return (a[2] = r[2]);
                                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                                }
                    return !1;
                };
        }

        function we(i) {
            return 1 < i.length ?
                function(e, t, n) {
                    var r = i.length;
                    while (r--)
                        if (!i[r](e, t, n)) return !1;
                    return !0;
                } :
                i[0];
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }

        function Ce(d, h, g, y, v, e) {
            return (
                y && !y[E] && (y = Ce(y)),
                v && !v[E] && (v = Ce(v, e)),
                le(function(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s = [],
                        u = [],
                        l = t.length,
                        c =
                        e ||
                        (function(e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                            return n;
                        })(h || "*", n.nodeType ? [n] : n, []),
                        f = !d || (!e && h) ? c : Te(c, s, d, n, r),
                        p = g ? (v || (e ? d : l || y) ? [] : t) : f;
                    if ((g && g(f, p, n, r), y)) {
                        (i = Te(p, u)), y(i, [], n, r), (o = i.length);
                        while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                    }
                    if (e) {
                        if (v || d) {
                            if (v) {
                                (i = []), (o = p.length);
                                while (o--)(a = p[o]) && i.push((f[o] = a));
                                v(null, (p = []), i, r);
                            }
                            o = p.length;
                            while (o--)(a = p[o]) && -1 < (i = v ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
                        }
                    } else(p = Te(p === t ? p.splice(l, p.length) : p)), v ? v(null, t, p, r) : H.apply(t, p);
                })
            );
        }

        function Se(e) {
            for (
                var i,
                    t,
                    n,
                    r = e.length,
                    o = b.relative[e[0].type],
                    a = o || b.relative[" "],
                    s = o ? 1 : 0,
                    u = be(
                        function(e) {
                            return e === i;
                        },
                        a, !0
                    ),
                    l = be(
                        function(e) {
                            return -1 < P(i, e);
                        },
                        a, !0
                    ),
                    c = [
                        function(e, t, n) {
                            var r = (!o && (n || t !== w)) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                            return (i = null), r;
                        },
                    ]; s < r; s++
            )
                if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[E]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Se(e.slice(s, n)), n < r && Se((e = e.slice(n))), n < r && xe(e));
                    }
                    c.push(t);
                }
            return we(c);
        }
        return (
            (me.prototype = b.filters = b.pseudos),
            (b.setFilters = new me()),
            (h = se.tokenize = function(e, t) {
                var n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = x[e + " "];
                if (l) return t ? 0 : l.slice(0);
                (a = e), (s = []), (u = b.preFilter);
                while (a) {
                    for (o in ((n && !(r = _.exec(a))) || (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
                            (n = !1),
                            (r = z.exec(a)) && ((n = r.shift()), i.push({
                                value: n,
                                type: r[0].replace(B, " ")
                            }), (a = a.slice(n.length))),
                            b.filter))
                        !(r = G[o].exec(a)) || (u[o] && !(r = u[o](r))) || ((n = r.shift()), i.push({
                            value: n,
                            type: o,
                            matches: r
                        }), (a = a.slice(n.length)));
                    if (!n) break;
                }
                return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
            }),
            (f = se.compile = function(e, t) {
                var n,
                    y,
                    v,
                    m,
                    x,
                    r,
                    i = [],
                    o = [],
                    a = A[e + " "];
                if (!a) {
                    t || (t = h(e)), (n = t.length);
                    while (n--)(a = Se(t[n]))[E] ? i.push(a) : o.push(a);
                    (a = A(
                        e,
                        ((y = o),
                            (m = 0 < (v = i).length),
                            (x = 0 < y.length),
                            (r = function(e, t, n, r, i) {
                                var o,
                                    a,
                                    s,
                                    u = 0,
                                    l = "0",
                                    c = e && [],
                                    f = [],
                                    p = w,
                                    d = e || (x && b.find.TAG("*", i)),
                                    h = (k += null == p ? 1 : Math.random() || 0.1),
                                    g = d.length;
                                for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                                    if (x && o) {
                                        (a = 0), t || o.ownerDocument == C || (T(o), (n = !S));
                                        while ((s = y[a++]))
                                            if (s(o, t || C, n)) {
                                                r.push(o);
                                                break;
                                            }
                                        i && (k = h);
                                    }
                                    m && ((o = !s && o) && u--, e && c.push(o));
                                }
                                if (((u += l), m && l !== u)) {
                                    a = 0;
                                    while ((s = v[a++])) s(c, f, t, n);
                                    if (e) {
                                        if (0 < u)
                                            while (l--) c[l] || f[l] || (f[l] = q.call(r));
                                        f = Te(f);
                                    }
                                    H.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && se.uniqueSort(r);
                                }
                                return i && ((k = h), (w = p)), c;
                            }),
                            m ? le(r) : r)
                    )).selector = e;
                }
                return a;
            }),
            (g = se.select = function(e, t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    u,
                    l = "function" == typeof e && e,
                    c = !r && h((e = l.selector || e));
                if (((n = n || []), 1 === c.length)) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && S && b.relative[o[1].type]) {
                        if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                        l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                    }
                    i = G.needsContext.test(e) ? 0 : o.length;
                    while (i--) {
                        if (((a = o[i]), b.relative[(s = a.type)])) break;
                        if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), (ee.test(o[0].type) && ve(t.parentNode)) || t))) {
                            if ((o.splice(i, 1), !(e = r.length && xe(o)))) return H.apply(n, r), n;
                            break;
                        }
                    }
                }
                return (l || f(e, c))(r, t, !S, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
            }),
            (d.sortStable = E.split("").sort(j).join("") === E),
            (d.detectDuplicates = !!l),
            T(),
            (d.sortDetached = ce(function(e) {
                return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
            })),
            ce(function(e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
            fe("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
            (d.attributes &&
                ce(function(e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
            fe("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
            }),
            ce(function(e) {
                return null == e.getAttribute("disabled");
            }) ||
            fe(R, function(e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
            }),
            se
        );
    })(C);
    (E.find = d), (E.expr = d.selectors), (E.expr[":"] = E.expr.pseudos), (E.uniqueSort = E.unique = d.uniqueSort), (E.text = d.getText), (E.isXMLDoc = d.isXML), (E.contains = d.contains), (E.escapeSelector = d.escape);
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && E(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        T = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        k = E.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ?
            E.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== r;
            }) :
            n.nodeType ?
            E.grep(e, function(e) {
                return (e === n) !== r;
            }) :
            "string" != typeof n ?
            E.grep(e, function(e) {
                return -1 < i.call(n, e) !== r;
            }) :
            E.filter(n, e, r);
    }
    (E.filter = function(e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ?
            E.find.matchesSelector(r, e) ?
            [r] :
            [] :
            E.find.matches(
                e,
                E.grep(t, function(e) {
                    return 1 === e.nodeType;
                })
            )
        );
    }),
    E.fn.extend({
        find: function(e) {
            var t,
                n,
                r = this.length,
                i = this;
            if ("string" != typeof e)
                return this.pushStack(
                    E(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (E.contains(i[t], this)) return !0;
                    })
                );
            for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
            return 1 < r ? E.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0));
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && k.test(e) ? E(e) : e || [], !1).length;
        },
    });
    var D,
        q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((E.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || D), "string" == typeof e)) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (((t = t instanceof E ? t[0] : t), E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), N.test(r[1]) && E.isPlainObject(t)))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (i = S.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : m(e) ? (void 0 !== n.ready ? n.ready(e) : e(E)) : E.makeArray(e, this);
    }).prototype = E.fn),
    (D = E(S));
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    E.fn.extend({
            has: function(e) {
                var t = E(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (E.contains(this, t[e])) return !0;
                });
            },
            closest: function(e, t) {
                var n,
                    r = 0,
                    i = this.length,
                    o = [],
                    a = "string" != typeof e && E(e);
                if (!k.test(e))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                                o.push(n);
                                break;
                            }
                return this.pushStack(1 < o.length ? E.uniqueSort(o) : o);
            },
            index: function(e) {
                return e ? ("string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function(e, t) {
                return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            },
        }),
        E.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function(e) {
                    return h(e, "parentNode");
                },
                parentsUntil: function(e, t, n) {
                    return h(e, "parentNode", n);
                },
                next: function(e) {
                    return O(e, "nextSibling");
                },
                prev: function(e) {
                    return O(e, "previousSibling");
                },
                nextAll: function(e) {
                    return h(e, "nextSibling");
                },
                prevAll: function(e) {
                    return h(e, "previousSibling");
                },
                nextUntil: function(e, t, n) {
                    return h(e, "nextSibling", n);
                },
                prevUntil: function(e, t, n) {
                    return h(e, "previousSibling", n);
                },
                siblings: function(e) {
                    return T((e.parentNode || {}).firstChild, e);
                },
                children: function(e) {
                    return T(e.firstChild);
                },
                contents: function(e) {
                    return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), E.merge([], e.childNodes));
                },
            },
            function(r, i) {
                E.fn[r] = function(e, t) {
                    var n = E.map(this, i, e);
                    return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (H[r] || E.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
                };
            }
        );
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e;
    }

    function M(e) {
        throw e;
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m((i = e.promise)) ? i.call(e).done(t).fail(n) : e && m((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (E.Callbacks = function(r) {
        var e, n;
        r =
            "string" == typeof r ?
            ((e = r),
                (n = {}),
                E.each(e.match(P) || [], function(e, t) {
                    n[t] = !0;
                }),
                n) :
            E.extend({}, r);
        var i,
            t,
            o,
            a,
            s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && ((l = s.length), (t = !1));
                }
                r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
            },
            f = {
                add: function() {
                    return (
                        s &&
                        (t && !i && ((l = s.length - 1), u.push(t)),
                            (function n(e) {
                                E.each(e, function(e, t) {
                                    m(t) ? (r.unique && f.has(t)) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
                                });
                            })(arguments),
                            t && !i && c()),
                        this
                    );
                },
                remove: function() {
                    return (
                        E.each(arguments, function(e, t) {
                            var n;
                            while (-1 < (n = E.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
                        }),
                        this
                    );
                },
                has: function(e) {
                    return e ? -1 < E.inArray(e, s) : 0 < s.length;
                },
                empty: function() {
                    return s && (s = []), this;
                },
                disable: function() {
                    return (a = u = []), (s = t = ""), this;
                },
                disabled: function() {
                    return !s;
                },
                lock: function() {
                    return (a = u = []), t || i || (s = t = ""), this;
                },
                locked: function() {
                    return !!a;
                },
                fireWith: function(e, t) {
                    return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), i || c()), this;
                },
                fire: function() {
                    return f.fireWith(this, arguments), this;
                },
                fired: function() {
                    return !!o;
                },
            };
        return f;
    }),
    E.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                    ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"],
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i;
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this;
                    },
                    catch: function(e) {
                        return a.then(null, e);
                    },
                    pipe: function() {
                        var i = arguments;
                        return E.Deferred(function(r) {
                            E.each(o, function(e, t) {
                                    var n = m(i[t[4]]) && i[t[4]];
                                    s[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                                    });
                                }),
                                (i = null);
                        }).promise();
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            (t = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                            m(t) ?
                                                s ?
                                                t.call(e, l(u, o, R, s), l(u, o, M, s)) :
                                                (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) :
                                                (a !== R && ((n = void 0), (r = [e])), (s || o.resolveWith)(n, r));
                                        }
                                    },
                                    t = s ?
                                    e :
                                    function() {
                                        try {
                                            e();
                                        } catch (e) {
                                            E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && ((n = void 0), (r = [e])), o.rejectWith(n, r));
                                        }
                                    };
                                i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), C.setTimeout(t));
                            };
                        }
                        return E.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
                        }).promise();
                    },
                    promise: function(e) {
                        return null != e ? E.extend(e, a) : a;
                    },
                },
                s = {};
            return (
                E.each(o, function(e, t) {
                    var n = t[2],
                        r = t[5];
                    (a[t[1]] = n.add),
                    r &&
                        n.add(
                            function() {
                                i = r;
                            },
                            o[3 - e][2].disable,
                            o[3 - e][3].disable,
                            o[0][2].lock,
                            o[0][3].lock
                        ),
                        n.add(t[3].fire),
                        (s[t[0]] = function() {
                            return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
                        }),
                        (s[t[0] + "With"] = n.fireWith);
                }),
                a.promise(s),
                e && e.call(s, s),
                s
            );
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = E.Deferred(),
                a = function(t) {
                    return function(e) {
                        (r[t] = this), (i[t] = 1 < arguments.length ? s.call(arguments) : e), --n || o.resolveWith(r, i);
                    };
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise();
        },
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (E.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
    (E.readyException = function(e) {
        C.setTimeout(function() {
            throw e;
        });
    });
    var F = E.Deferred();

    function $() {
        S.removeEventListener("DOMContentLoaded", $), C.removeEventListener("load", $), E.ready();
    }
    (E.fn.ready = function(e) {
        return (
            F.then(e)["catch"](function(e) {
                E.readyException(e);
            }),
            this
        );
    }),
    E.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --E.readyWait : E.isReady) || ((E.isReady = !0) !== e && 0 < --E.readyWait) || F.resolveWith(S, [E]);
            },
        }),
        (E.ready.then = F.then),
        "complete" === S.readyState || ("loading" !== S.readyState && !S.documentElement.doScroll) ? C.setTimeout(E.ready) : (S.addEventListener("DOMContentLoaded", $), C.addEventListener("load", $));
    var B = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in ((i = !0), n)) B(e, t, s, n[s], !0, o, a);
            else if (
                void 0 !== r &&
                ((i = !0),
                    m(r) || (a = !0),
                    l &&
                    (a ?
                        (t.call(e, r), (t = null)) :
                        ((l = t),
                            (t = function(e, t, n) {
                                return l.call(E(e), n);
                            }))),
                    t)
            )
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase();
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U);
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };

    function G() {
        this.expando = E.expando + G.uid++;
    }
    (G.uid = 1),
    (G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || ((t = {}), V(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var r,
                i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n,
                r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]];
                }
                (void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t);
        },
    });
    var Y = new G(),
        Q = new G(),
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(K, "-$&").toLowerCase()), "string" == typeof(n = e.getAttribute(r)))) {
                try {
                    n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i));
                } catch (e) {}
                Q.set(e, t, n);
            } else n = void 0;
        return n;
    }
    E.extend({
            hasData: function(e) {
                return Q.hasData(e) || Y.hasData(e);
            },
            data: function(e, t, n) {
                return Q.access(e, t, n);
            },
            removeData: function(e, t) {
                Q.remove(e, t);
            },
            _data: function(e, t, n) {
                return Y.access(e, t, n);
            },
            _removeData: function(e, t) {
                Y.remove(e, t);
            },
        }),
        E.fn.extend({
            data: function(n, e) {
                var t,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === n) {
                    if (this.length && ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                        t = a.length;
                        while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && ((r = X(r.slice(5))), Z(o, r, i[r]));
                        Y.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof n ?
                    this.each(function() {
                        Q.set(this, n);
                    }) :
                    B(
                        this,
                        function(e) {
                            var t;
                            if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                            this.each(function() {
                                Q.set(this, n, e);
                            });
                        },
                        null,
                        e,
                        1 < arguments.length,
                        null, !0
                    );
            },
            removeData: function(e) {
                return this.each(function() {
                    Q.remove(this, e);
                });
            },
        }),
        E.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return (t = (t || "fx") + "queue"), (r = Y.get(e, t)), n && (!r || Array.isArray(n) ? (r = Y.access(e, t, E.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = E.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = E._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                    ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(
                            e,
                            function() {
                                E.dequeue(e, t);
                            },
                            o
                        )), !r && o && o.empty.fire();
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return (
                    Y.get(e, n) ||
                    Y.access(e, n, {
                        empty: E.Callbacks("once memory").add(function() {
                            Y.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        E.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e ?
                    E.queue(this[0], t) :
                    void 0 === n ?
                    this :
                    this.each(function() {
                        var e = E.queue(this, t, n);
                        E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t);
                    })
                );
            },
            dequeue: function(e) {
                return this.each(function() {
                    E.dequeue(this, e);
                });
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", []);
            },
            promise: function(e, t) {
                var n,
                    r = 1,
                    i = E.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --r || i.resolveWith(o, [o]);
                    };
                "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
                while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = S.documentElement,
        ie = function(e) {
            return E.contains(e.ownerDocument, e);
        },
        oe = {
            composed: !0
        };
    re.getRootNode &&
        (ie = function(e) {
            return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
        });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || ("" === e.style.display && ie(e) && "none" === E.css(e, "display"));
    };

    function se(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r ?
            function() {
                return r.cur();
            } :
            function() {
                return E.css(e, t, "");
            },
            u = s(),
            l = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (E.cssNumber[t] || ("px" !== l && +u)) && te.exec(E.css(e, t));
        if (c && c[3] !== l) {
            (u /= 2), (l = l || c[3]), (c = +u || 1);
            while (a--) E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
            (c *= 2), E.style(e, t, c + l), (n = n || []);
        }
        return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style &&
            ((n = r.style.display),
                t ?
                ("none" === n && ((l[c] = Y.get(r, "display") || null), l[c] || (r.style.display = "")),
                    "" === r.style.display &&
                    ae(r) &&
                    (l[c] =
                        ((u = a = o = void 0),
                            (a = (i = r).ownerDocument),
                            (s = i.nodeName),
                            (u = ue[s]) || ((o = a.body.appendChild(a.createElement(s))), (u = E.css(o, "display")), o.parentNode.removeChild(o), "none" === u && (u = "block"), (ue[s] = u))))) :
                "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e;
    }
    E.fn.extend({
        show: function() {
            return le(this, !0);
        },
        hide: function() {
            return le(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ?
                e ?
                this.show() :
                this.hide() :
                this.each(function() {
                    ae(this) ? E(this).show() : E(this).hide();
                });
        },
    });
    var ce,
        fe,
        pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    (ce = S.createDocumentFragment().appendChild(S.createElement("div"))),
    (fe = S.createElement("input")).setAttribute("type", "radio"),
        fe.setAttribute("checked", "checked"),
        fe.setAttribute("name", "t"),
        ce.appendChild(fe),
        (v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ce.innerHTML = "<textarea>x</textarea>"),
        (v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
        (ce.innerHTML = "<option></option>"),
        (v.option = !!ce.lastChild);
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ye(e, t) {
        var n;
        return (n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && A(e, t)) ? E.merge([e], n) : n;
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td), v.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) E.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            (a = a || f.appendChild(t.createElement("div"))), (s = (de.exec(o) || ["", ""])[1].toLowerCase()), (u = ge[s] || ge._default), (a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2]), (c = u[0]);
            while (c--) a = a.lastChild;
            E.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
        (f.textContent = ""), (d = 0);
        while ((o = p[d++]))
            if (r && -1 < E.inArray(o, r)) i && i.push(o);
            else if (((l = ie(o)), (a = ye(f.appendChild(o), "script")), l && ve(a), n)) {
            c = 0;
            while ((o = a[c++])) he.test(o.type || "") && n.push(o);
        }
        return f;
    }
    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0;
    }

    function Te() {
        return !1;
    }

    function Ce(e, t) {
        return (
            (e ===
                (function() {
                    try {
                        return S.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }

    function Se(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) Se(e, s, n, r, t[s], o);
            return e;
        }
        if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = Te;
        else if (!i) return e;
        return (
            1 === o &&
            ((a = i),
                ((i = function(e) {
                    return E().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = E.guid++))),
            e.each(function() {
                E.event.add(this, t, i, r, n);
            })
        );
    }

    function Ee(e, i, o) {
        o
            ?
            (Y.set(e, i, !1),
                E.event.add(e, i, {
                    namespace: !1,
                    handler: function(e) {
                        var t,
                            n,
                            r = Y.get(this, i);
                        if (1 & e.isTrigger && this[i]) {
                            if (r.length)(E.event.special[i] || {}).delegateType && e.stopPropagation();
                            else if (((r = s.call(arguments)), Y.set(this, i, r), (t = o(this, i)), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}), r !== n))
                                return e.stopImmediatePropagation(), e.preventDefault(), n && n.value;
                        } else r.length && (Y.set(this, i, {
                            value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)
                        }), e.stopImmediatePropagation());
                    },
                })) :
            void 0 === Y.get(e, i) && E.event.add(e, i, we);
    }
    (E.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = Y.get(t);
            if (V(t)) {
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && E.find.matchesSelector(re, i),
                    n.guid || (n.guid = E.guid++),
                    (u = y.events) || (u = y.events = Object.create(null)),
                    (a = y.handle) ||
                    (a = y.handle = function(e) {
                        return "undefined" != typeof E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0;
                    }),
                    (l = (e = (e || "").match(P) || [""]).length);
                while (l--)
                    (d = g = (s = be.exec(e[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d &&
                    ((f = E.event.special[d] || {}),
                        (d = (i ? f.delegateType : f.bindType) || d),
                        (f = E.event.special[d] || {}),
                        (c = E.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && E.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o)),
                        (p = u[d]) || (((p = u[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(t, r, h, a)) || (t.addEventListener && t.addEventListener(d, a))),
                        f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                        i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                        (E.event.global[d] = !0));
            }
        },
        remove: function(e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = Y.hasData(e) && Y.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (((d = g = (s = be.exec(t[l]) || [])[1]), (h = (s[2] || "").split(".").sort()), d)) {
                        (f = E.event.special[d] || {}), (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []), (s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")), (a = o = p.length);
                        while (o--)
                            (c = p[o]),
                            (!i && g !== c.origType) ||
                            (n && n.guid !== c.guid) ||
                            (s && !s.test(c.namespace)) ||
                            (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                            (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) || E.removeEvent(e, d, y.handle), delete u[d]);
                    } else
                        for (d in u) E.event.remove(e, d + t[l], n, r, !0);
                E.isEmptyObject(u) && Y.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = new Array(arguments.length),
                u = E.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = E.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
                (a = E.event.handlers.call(this, u, l)), (t = 0);
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    (u.currentTarget = i.elem), (n = 0);
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
                        ((u.handleObj = o), (u.data = o.data), void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
            }
        },
        handlers: function(e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        });
                    }
            return (l = this), u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s;
        },
        addProp: function(t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ?
                    function() {
                        if (this.originalEvent) return e(this.originalEvent);
                    } :
                    function() {
                        if (this.originalEvent) return this.originalEvent[t];
                    },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    });
                },
            });
        },
        fix: function(e) {
            return e[E.expando] ? e : new E.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click", we), !1;
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click"), !0;
                },
                _default: function(e) {
                    var t = e.target;
                    return (pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click")) || A(t, "a");
                },
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
    (E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }),
    (E.Event = function(e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);
        e && e.type ?
            ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? we : Te),
                (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget)) :
            (this.type = e),
            t && E.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[E.expando] = !0);
    }),
    (E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            (this.isDefaultPrevented = we), e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            (this.isPropagationStopped = we), e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = we), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        },
    }),
    E.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
            },
            E.event.addProp
        ),
        E.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            E.event.special[t] = {
                setup: function() {
                    return Ee(this, t, Ce), !1;
                },
                trigger: function() {
                    return Ee(this, t), !0;
                },
                _default: function(e) {
                    return Y.get(e.target, t);
                },
                delegateType: e,
            };
        }),
        E.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, i) {
            E.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function(e) {
                    var t,
                        n = e.relatedTarget,
                        r = e.handleObj;
                    return (n && (n === this || E.contains(this, n))) || ((e.type = r.origType), (t = r.handler.apply(this, arguments)), (e.type = i)), t;
                },
            };
        }),
        E.fn.extend({
            on: function(e, t, n, r) {
                return Se(this, e, t, n, r);
            },
            one: function(e, t, n, r) {
                return Se(this, e, t, n, r, 1);
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)), !1 === n && (n = Te),
                    this.each(function() {
                        E.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function je(e, t) {
        return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0]) || e;
    }

    function De(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in (Y.remove(t, "handle events"), s))
                    for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
            Q.hasData(e) && ((o = Q.access(e)), (a = E.extend({}, o)), Q.set(t, a));
        }
    }

    function He(n, r, i, o) {
        r = g(r);
        var e,
            t,
            a,
            s,
            u,
            l,
            c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || (1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
            });
        if (f && ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild), 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = E.map(ye(e, "script"), De)).length; c < f; c++)(u = e), c !== p && ((u = E.clone(u, !0, !0)), s && E.merge(a, ye(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, E.map(a, qe), c = 0; c < s; c++)
                    (u = a[c]),
                    he.test(u.type || "") &&
                    !Y.access(u, "globalEval") &&
                    E.contains(l, u) &&
                    (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : b(u.textContent.replace(Ne, ""), u, l));
        }
        return n;
    }

    function Oe(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(ye(r)), r.parentNode && (n && ie(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    E.extend({
            htmlPrefilter: function(e) {
                return e;
            },
            clone: function(e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = e.cloneNode(!0),
                    f = ie(e);
                if (!(v.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || E.isXMLDoc(e)))
                    for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++)
                        (s = o[r]), (u = a[r]), void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? (u.checked = s.checked) : ("input" !== l && "textarea" !== l) || (u.defaultValue = s.defaultValue);
                if (t)
                    if (n)
                        for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                    else Le(e, c);
                return 0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c;
            },
            cleanData: function(e) {
                for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (V(n)) {
                        if ((t = n[Y.expando])) {
                            if (t.events)
                                for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                            n[Y.expando] = void 0;
                        }
                        n[Q.expando] && (n[Q.expando] = void 0);
                    }
            },
        }),
        E.fn.extend({
            detach: function(e) {
                return Oe(this, e, !0);
            },
            remove: function(e) {
                return Oe(this, e);
            },
            text: function(e) {
                return B(
                    this,
                    function(e) {
                        return void 0 === e ?
                            E.text(this) :
                            this.empty().each(function() {
                                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                            });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function() {
                return He(this, arguments, function(e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || je(this, e).appendChild(e);
                });
            },
            prepend: function() {
                return He(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = je(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function() {
                return He(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function() {
                return He(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ye(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function(e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function() {
                        return E.clone(this, e, t);
                    })
                );
            },
            html: function(e) {
                return B(
                    this,
                    function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = E.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ye(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function() {
                var n = [];
                return He(
                    this,
                    arguments,
                    function(e) {
                        var t = this.parentNode;
                        E.inArray(this, n) < 0 && (E.cleanData(ye(this)), t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        E.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, a) {
            E.fn[e] = function(e) {
                for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++)(t = o === i ? this : this.clone(!0)), E(r[o])[a](t), u.apply(n, t.get());
                return this.pushStack(n);
            };
        });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = /^--/,
        Me = function(e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = C), t.getComputedStyle(e);
        },
        Ie = function(e, t, n) {
            var r,
                i,
                o = {};
            for (i in t)(o[i] = e.style[i]), (e.style[i] = t[i]);
            for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
            return r;
        },
        We = new RegExp(ne.join("|"), "i"),
        Fe = "[\\x20\\t\\r\\n\\f]",
        $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");

    function Be(e, t, n) {
        var r,
            i,
            o,
            a,
            s = Re.test(t),
            u = e.style;
        return (
            (n = n || Me(e)) &&
            ((a = n.getPropertyValue(t) || n[t]),
                s && a && (a = a.replace($e, "$1") || void 0),
                "" !== a || ie(e) || (a = E.style(e, t)), !v.pixelBoxStyles() && Pe.test(a) && We.test(t) && ((r = u.width), (i = u.minWidth), (o = u.maxWidth), (u.minWidth = u.maxWidth = u.width = a), (a = n.width), (u.width = r), (u.minWidth = i), (u.maxWidth = o))),
            void 0 !== a ? a + "" : a
        );
    }

    function _e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }!(function() {
        function e() {
            if (l) {
                (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                (n = "1%" !== e.top),
                (s = 12 === t(e.marginLeft)),
                (l.style.right = "60%"),
                (o = 36 === t(e.right)),
                (r = 36 === t(e.width)),
                (l.style.position = "absolute"),
                (i = 12 === t(l.offsetWidth / 3)),
                re.removeChild(u),
                    (l = null);
            }
        }

        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n,
            r,
            i,
            o,
            a,
            s,
            u = S.createElement("div"),
            l = S.createElement("div");
        l.style &&
            ((l.style.backgroundClip = "content-box"),
                (l.cloneNode(!0).style.backgroundClip = ""),
                (v.clearCloneStyle = "content-box" === l.style.backgroundClip),
                E.extend(v, {
                    boxSizingReliable: function() {
                        return e(), r;
                    },
                    pixelBoxStyles: function() {
                        return e(), o;
                    },
                    pixelPosition: function() {
                        return e(), n;
                    },
                    reliableMarginLeft: function() {
                        return e(), s;
                    },
                    scrollboxSize: function() {
                        return e(), i;
                    },
                    reliableTrDimensions: function() {
                        var e, t, n, r;
                        return (
                            null == a &&
                            ((e = S.createElement("table")),
                                (t = S.createElement("tr")),
                                (n = S.createElement("div")),
                                (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                                (t.style.cssText = "border:1px solid"),
                                (t.style.height = "1px"),
                                (n.style.height = "9px"),
                                (n.style.display = "block"),
                                re.appendChild(e).appendChild(t).appendChild(n),
                                (r = C.getComputedStyle(t)),
                                (a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight),
                                re.removeChild(e)),
                            a
                        );
                    },
                }));
    })();
    var ze = ["Webkit", "Moz", "ms"],
        Ue = S.createElement("div").style,
        Xe = {};

    function Ve(e) {
        var t = E.cssProps[e] || Xe[e];
        return (
            t ||
            (e in Ue ?
                e :
                (Xe[e] =
                    (function(e) {
                        var t = e[0].toUpperCase() + e.slice(1),
                            n = ze.length;
                        while (n--)
                            if ((e = ze[n] + t) in Ue) return e;
                    })(e) || e))
        );
    }
    var Ge = /^(none|table(?!-c[ea]).+)/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += E.css(e, n + ne[a], !0, i)),
            r ?
            ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + ne[a] + "Width", !0, i))) :
            ((u += E.css(e, "padding" + ne[a], !0, i)), "padding" !== n ? (u += E.css(e, "border" + ne[a] + "Width", !0, i)) : (s += E.css(e, "border" + ne[a] + "Width", !0, i)));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u;
    }

    function Ze(e, t, n) {
        var r = Me(e),
            i = (!v.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (
            ((!v.boxSizingReliable() && i) || (!v.reliableTrDimensions() && A(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === E.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((i = "border-box" === E.css(e, "boxSizing", !1, r)), (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
        );
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i);
    }
    E.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Be(e, "opacity");
                            return "" === n ? "1" : n;
                        }
                    },
                },
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i,
                        o,
                        a,
                        s = X(t),
                        u = Re.test(t),
                        l = e.style;
                    if ((u || (t = Ve(s)), (a = E.cssHooks[t] || E.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                    "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && ((n = se(e, t, i)), (o = "number")),
                        null != n &&
                        n == n &&
                        ("number" !== o || u || (n += (i && i[3]) || (E.cssNumber[s] ? "" : "px")),
                            v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                            (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
                }
            },
            css: function(e, t, n, r) {
                var i,
                    o,
                    a,
                    s = X(t);
                return (
                    Re.test(t) || (t = Ve(s)),
                    (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                    void 0 === i && (i = Be(e, t, r)),
                    "normal" === i && t in Qe && (i = Qe[t]),
                    "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
                );
            },
        }),
        E.each(["height", "width"], function(e, u) {
            E.cssHooks[u] = {
                get: function(e, t, n) {
                    if (t)
                        return !Ge.test(E.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width) ?
                            Ze(e, u, n) :
                            Ie(e, Ye, function() {
                                return Ze(e, u, n);
                            });
                },
                set: function(e, t, n) {
                    var r,
                        i = Me(e),
                        o = !v.scrollboxSize() && "absolute" === i.position,
                        a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
                        s = n ? Ke(e, u, n, a, i) : 0;
                    return (
                        a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - 0.5)),
                        s && (r = te.exec(t)) && "px" !== (r[3] || "px") && ((e.style[u] = t), (t = E.css(e, u))),
                        Je(0, t, s)
                    );
                },
            };
        }),
        (E.cssHooks.marginLeft = _e(v.reliableMarginLeft, function(e, t) {
            if (t)
                return (
                    (parseFloat(Be(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                        Ie(e, {
                            marginLeft: 0
                        }, function() {
                            return e.getBoundingClientRect().left;
                        })) + "px"
                );
        })),
        E.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(i, o) {
            (E.cssHooks[i + o] = {
                expand: function(e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                    return n;
                },
            }),
            "margin" !== i && (E.cssHooks[i + o].set = Je);
        }),
        E.fn.extend({
            css: function(e, t) {
                return B(
                    this,
                    function(e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = Me(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((E.Tween = et).prototype = {
            constructor: et,
            init: function(e, t, n, r, i, o) {
                (this.elem = e), (this.prop = n), (this.easing = i || E.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (E.cssNumber[n] ? "" : "px"));
            },
            cur: function() {
                var e = et.propHooks[this.prop];
                return e && e.get ? e.get(this) : et.propHooks._default.get(this);
            },
            run: function(e) {
                var t,
                    n = et.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : et.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = et.prototype),
        ((et.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function(e) {
                    E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!E.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)]) ? (e.elem[e.prop] = e.now) : E.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = et.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (E.easing = {
            linear: function(e) {
                return e;
            },
            swing: function(e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (E.fx = et.prototype.init),
        (E.fx.step = {});
    var tt,
        nt,
        rt,
        it,
        ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() {
        nt && (!1 === S.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, E.fx.interval), E.fx.tick());
    }

    function ut() {
        return (
            C.setTimeout(function() {
                tt = void 0;
            }),
            (tt = Date.now())
        );
    }

    function lt(e, t) {
        var n,
            r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if ((r = i[o].call(n, t, e))) return r;
    }

    function ft(o, e, t) {
        var n,
            a,
            r = 0,
            i = ft.prefilters.length,
            s = E.Deferred().always(function() {
                delete u.elem;
            }),
            u = function() {
                if (a) return !1;
                for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
            },
            l = s.promise({
                elem: o,
                props: E.extend({}, e),
                opts: E.extend(!0, {
                    specialEasing: {},
                    easing: E.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = E.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n;
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
                },
            }),
            c = l.props;
        for (!(function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (((i = t[(r = X(n))]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = E.cssHooks[r]) && ("expand" in a)))
                        for (n in ((o = a.expand(o)), delete e[r], o))(n in e) || ((e[n] = o[n]), (t[n] = i));
                    else t[r] = i;
            })(c, l.opts.specialEasing); r < i; r++)
            if ((n = ft.prefilters[r].call(l, o, c, l.opts))) return m(n.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return (
            E.map(c, ct, l),
            m(l.opts.start) && l.opts.start.call(o, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            E.fx.timer(E.extend(u, {
                elem: o,
                anim: l,
                queue: l.opts.queue
            })),
            l
        );
    }
    (E.Animation = E.extend(ft, {
        tweeners: {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t);
                    return se(n.elem, e, te.exec(t), n), n;
                },
            ],
        },
        tweener: function(e, t) {
            m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
            for (var n, r = 0, i = e.length; r < i; r++)(n = e[r]), (ft.tweeners[n] = ft.tweeners[n] || []), ft.tweeners[n].unshift(t);
        },
        prefilters: [
            function(e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && ae(e),
                    y = Y.get(e, "fxshow");
                for (r in (n.queue ||
                        (null == (a = E._queueHooks(e, "fx")).unqueued &&
                            ((a.unqueued = 0),
                                (s = a.empty.fire),
                                (a.empty.fire = function() {
                                    a.unqueued || s();
                                })),
                            a.unqueued++,
                            p.always(function() {
                                p.always(function() {
                                    a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
                                });
                            })),
                        t))
                    if (((i = t[r]), ot.test(i))) {
                        if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
                            if ("show" !== i || !y || void 0 === y[r]) continue;
                            g = !0;
                        }
                        d[r] = (y && y[r]) || E.style(e, r);
                    }
                if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(d))
                    for (r in (f &&
                            1 === e.nodeType &&
                            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                                null == (l = y && y.display) && (l = Y.get(e, "display")),
                                "none" === (c = E.css(e, "display")) && (l ? (c = l) : (le([e], !0), (l = e.style.display || l), (c = E.css(e, "display")), le([e]))),
                                ("inline" === c || ("inline-block" === c && null != l)) &&
                                "none" === E.css(e, "float") &&
                                (u ||
                                    (p.done(function() {
                                            h.display = l;
                                        }),
                                        null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                                    (h.display = "inline-block"))),
                            n.overflow &&
                            ((h.overflow = "hidden"),
                                p.always(function() {
                                    (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                                })),
                            (u = !1),
                            d))
                        u ||
                        (y ? "hidden" in y && (g = y.hidden) : (y = Y.access(e, "fxshow", {
                                display: l
                            })),
                            o && (y.hidden = !g),
                            g && le([e], !0),
                            p.done(function() {
                                for (r in (g || le([e]), Y.remove(e, "fxshow"), d)) E.style(e, r, d[r]);
                            })),
                        (u = ct(g ? y[r] : 0, r, p)),
                        r in y || ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
            },
        ],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
        },
    })),
    (E.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? E.extend({}, e) : {
            complete: n || (!n && t) || (m(e) && e),
            duration: e,
            easing: (n && t) || (t && !m(t) && t)
        };
        return (
            E.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in E.fx.speeds ? (r.duration = E.fx.speeds[r.duration]) : (r.duration = E.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function() {
                m(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue);
            }),
            r
        );
    }),
    E.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r);
            },
            animate: function(t, e, n, r) {
                var i = E.isEmptyObject(t),
                    o = E.speed(e, n, r),
                    a = function() {
                        var e = ft(this, E.extend({}, t), o);
                        (i || Y.get(this, "finish")) && e.stop(!0);
                    };
                return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function(i, e, o) {
                var a = function(e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                };
                return (
                    "string" != typeof i && ((o = e), (e = i), (i = void 0)),
                    e && this.queue(i || "fx", []),
                    this.each(function() {
                        var e = !0,
                            t = null != i && i + "queueHooks",
                            n = E.timers,
                            r = Y.get(this);
                        if (t) r[t] && r[t].stop && a(r[t]);
                        else
                            for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                        for (t = n.length; t--;) n[t].elem !== this || (null != i && n[t].queue !== i) || (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || E.dequeue(this, i);
                    })
                );
            },
            finish: function(a) {
                return (!1 !== a && (a = a || "fx"),
                    this.each(function() {
                        var e,
                            t = Y.get(this),
                            n = t[a + "queue"],
                            r = t[a + "queueHooks"],
                            i = E.timers,
                            o = n ? n.length : 0;
                        for (t.finish = !0, E.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        E.each(["toggle", "show", "hide"], function(e, r) {
            var i = E.fn[r];
            E.fn[r] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
            };
        }),
        E.each({
            slideDown: lt("show"),
            slideUp: lt("hide"),
            slideToggle: lt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, r) {
            E.fn[e] = function(e, t, n) {
                return this.animate(r, e, t, n);
            };
        }),
        (E.timers = []),
        (E.fx.tick = function() {
            var e,
                t = 0,
                n = E.timers;
            for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || E.fx.stop(), (tt = void 0);
        }),
        (E.fx.timer = function(e) {
            E.timers.push(e), E.fx.start();
        }),
        (E.fx.interval = 13),
        (E.fx.start = function() {
            nt || ((nt = !0), st());
        }),
        (E.fx.stop = function() {
            nt = null;
        }),
        (E.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }),
        (E.fn.delay = function(r, e) {
            return (
                (r = (E.fx && E.fx.speeds[r]) || r),
                (e = e || "fx"),
                this.queue(e, function(e, t) {
                    var n = C.setTimeout(e, r);
                    t.stop = function() {
                        C.clearTimeout(n);
                    };
                })
            );
        }),
        (rt = S.createElement("input")),
        (it = S.createElement("select").appendChild(S.createElement("option"))),
        (rt.type = "checkbox"),
        (v.checkOn = "" !== rt.value),
        (v.optSelected = it.selected),
        ((rt = S.createElement("input")).value = "t"),
        (rt.type = "radio"),
        (v.radioValue = "t" === rt.value);
    var pt,
        dt = E.expr.attrHandle;
    E.fn.extend({
            attr: function(e, t) {
                return B(this, E.attr, e, t, 1 < arguments.length);
            },
            removeAttr: function(e) {
                return this.each(function() {
                    E.removeAttr(this, e);
                });
            },
        }),
        E.extend({
            attr: function(e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute ?
                        E.prop(e, t, n) :
                        ((1 === o && E.isXMLDoc(e)) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? pt : void 0)),
                            void 0 !== n ?
                            null === n ?
                            void E.removeAttr(e, t) :
                            i && "set" in i && void 0 !== (r = i.set(e, n, t)) ?
                            r :
                            (e.setAttribute(t, n + ""), n) :
                            i && "get" in i && null !== (r = i.get(e, t)) ?
                            r :
                            null == (r = E.find.attr(e, t)) ?
                            void 0 :
                            r);
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!v.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function(e, t) {
                var n,
                    r = 0,
                    i = t && t.match(P);
                if (i && 1 === e.nodeType)
                    while ((n = i[r++])) e.removeAttribute(n);
            },
        }),
        (pt = {
            set: function(e, t, n) {
                return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var a = dt[t] || E.find.attr;
            dt[t] = function(e, t, n) {
                var r,
                    i,
                    o = t.toLowerCase();
                return n || ((i = dt[o]), (dt[o] = r), (r = null != a(e, t, n) ? o : null), (dt[o] = i)), r;
            };
        });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(P) || []).join(" ");
    }

    function vt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }

    function mt(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
    }
    E.fn.extend({
            prop: function(e, t) {
                return B(this, E.prop, e, t, 1 < arguments.length);
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[E.propFix[e] || e];
                });
            },
        }),
        E.extend({
            prop: function(e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && E.isXMLDoc(e)) || ((t = E.propFix[t] || t), (i = E.propHooks[t])),
                        void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = E.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            },
        }),
        v.optSelected ||
        (E.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
        }),
        E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            E.propFix[this.toLowerCase()] = this;
        }),
        E.fn.extend({
            addClass: function(t) {
                var e, n, r, i, o, a;
                return m(t) ?
                    this.each(function(e) {
                        E(this).addClass(t.call(this, e, vt(this)));
                    }) :
                    (e = mt(t)).length ?
                    this.each(function() {
                        if (((r = vt(this)), (n = 1 === this.nodeType && " " + yt(r) + " "))) {
                            for (o = 0; o < e.length; o++)(i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                            (a = yt(n)), r !== a && this.setAttribute("class", a);
                        }
                    }) :
                    this;
            },
            removeClass: function(t) {
                var e, n, r, i, o, a;
                return m(t) ?
                    this.each(function(e) {
                        E(this).removeClass(t.call(this, e, vt(this)));
                    }) :
                    arguments.length ?
                    (e = mt(t)).length ?
                    this.each(function() {
                        if (((r = vt(this)), (n = 1 === this.nodeType && " " + yt(r) + " "))) {
                            for (o = 0; o < e.length; o++) {
                                i = e[o];
                                while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ");
                            }
                            (a = yt(n)), r !== a && this.setAttribute("class", a);
                        }
                    }) :
                    this :
                    this.attr("class", "");
            },
            toggleClass: function(t, n) {
                var e,
                    r,
                    i,
                    o,
                    a = typeof t,
                    s = "string" === a || Array.isArray(t);
                return m(t) ?
                    this.each(function(e) {
                        E(this).toggleClass(t.call(this, e, vt(this), n), n);
                    }) :
                    "boolean" == typeof n && s ?
                    n ?
                    this.addClass(t) :
                    this.removeClass(t) :
                    ((e = mt(t)),
                        this.each(function() {
                            if (s)
                                for (o = E(this), i = 0; i < e.length; i++)(r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                            else(void 0 !== t && "boolean" !== a) || ((r = vt(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : Y.get(this, "__className__") || ""));
                        }));
            },
            hasClass: function(e) {
                var t,
                    n,
                    r = 0;
                t = " " + e + " ";
                while ((n = this[r++]))
                    if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t)) return !0;
                return !1;
            },
        });
    var xt = /\r/g;
    E.fn.extend({
            val: function(n) {
                var r,
                    e,
                    i,
                    t = this[0];
                return arguments.length ?
                    ((i = m(n)),
                        this.each(function(e) {
                            var t;
                            1 === this.nodeType &&
                                (null == (t = i ? n.call(this, e, E(this).val()) : n) ?
                                    (t = "") :
                                    "number" == typeof t ?
                                    (t += "") :
                                    Array.isArray(t) &&
                                    (t = E.map(t, function(e) {
                                        return null == e ? "" : e + "";
                                    })),
                                    ((r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value")) || (this.value = t));
                        })) :
                    t ?
                    (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ?
                    e :
                    "string" == typeof(e = t.value) ?
                    e.replace(xt, "") :
                    null == e ?
                    "" :
                    e :
                    void 0;
            },
        }),
        E.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = E.find.attr(e, "value");
                        return null != t ? t : yt(E.text(e));
                    },
                },
                select: {
                    get: function(e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                if (((t = E(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function(e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = E.makeArray(t),
                            a = i.length;
                        while (a--)((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        E.each(["radio", "checkbox"], function() {
            (E.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return (e.checked = -1 < E.inArray(E(e).val(), t));
                },
            }),
            v.checkOn ||
                (E.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                });
        }),
        (v.focusin = "onfocusin" in C);
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) {
            e.stopPropagation();
        };
    E.extend(E.event, {
            trigger: function(e, t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f,
                    p = [n || S],
                    d = y.call(e, "type") ? e.type : e,
                    h = y.call(e, "namespace") ? e.namespace.split(".") : [];
                if (
                    ((o = f = a = n = n || S),
                        3 !== n.nodeType &&
                        8 !== n.nodeType &&
                        !bt.test(d + E.event.triggered) &&
                        (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
                            (u = d.indexOf(":") < 0 && "on" + d),
                            ((e = e[E.expando] ? e : new E.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                            (e.namespace = h.join(".")),
                            (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                            (e.result = void 0),
                            e.target || (e.target = n),
                            (t = null == t ? [e] : E.makeArray(t, [e])),
                            (c = E.event.special[d] || {}),
                            r || !c.trigger || !1 !== c.trigger.apply(n, t)))
                ) {
                    if (!r && !c.noBubble && !x(n)) {
                        for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), (a = o);
                        a === (n.ownerDocument || S) && p.push(a.defaultView || a.parentWindow || C);
                    }
                    i = 0;
                    while ((o = p[i++]) && !e.isPropagationStopped())
                        (f = o),
                        (e.type = 1 < i ? s : c.bindType || d),
                        (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                        (l = u && o[u]) && l.apply && V(o) && ((e.result = l.apply(o, t)), !1 === e.result && e.preventDefault());
                    return (
                        (e.type = d),
                        r ||
                        e.isDefaultPrevented() ||
                        (c._default && !1 !== c._default.apply(p.pop(), t)) ||
                        !V(n) ||
                        (u &&
                            m(n[d]) &&
                            !x(n) &&
                            ((a = n[u]) && (n[u] = null),
                                (E.event.triggered = d),
                                e.isPropagationStopped() && f.addEventListener(d, wt),
                                n[d](),
                                e.isPropagationStopped() && f.removeEventListener(d, wt),
                                (E.event.triggered = void 0),
                                a && (n[u] = a))),
                        e.result
                    );
                }
            },
            simulate: function(e, t, n) {
                var r = E.extend(new E.Event(), n, {
                    type: e,
                    isSimulated: !0
                });
                E.event.trigger(r, null, t);
            },
        }),
        E.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    E.event.trigger(e, t, this);
                });
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return E.event.trigger(e, t, n, !0);
            },
        }),
        v.focusin ||
        E.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, r) {
            var i = function(e) {
                E.event.simulate(r, e.target, E.event.fix(e));
            };
            E.event.special[r] = {
                setup: function() {
                    var e = this.ownerDocument || this.document || this,
                        t = Y.access(e, r);
                    t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
                },
                teardown: function() {
                    var e = this.ownerDocument || this.document || this,
                        t = Y.access(e, r) - 1;
                    t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
                },
            };
        });
    var Tt = C.location,
        Ct = {
            guid: Date.now()
        },
        St = /\?/;
    E.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {}
        return (
            (n = t && t.getElementsByTagName("parsererror")[0]),
            (t && !n) ||
            E.error(
                "Invalid XML: " +
                (n ?
                    E.map(n.childNodes, function(e) {
                        return e.textContent;
                    }).join("\n") :
                    e)
            ),
            t
        );
    };
    var Et = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function jt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            E.each(e, function(e, t) {
                r || Et.test(n) ? i(n, t) : jt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
            });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) jt(n + "[" + t + "]", e[t], r, i);
    }
    (E.param = function(e, t) {
        var n,
            r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
            E.each(e, function() {
                i(this.name, this.value);
            });
        else
            for (n in e) jt(n, e[n], t, i);
        return r.join("&");
    }),
    E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                    var e = E.prop(this, "elements");
                    return e ? E.makeArray(e) : this;
                })
                .filter(function() {
                    var e = this.type;
                    return this.name && !E(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
                })
                .map(function(e, t) {
                    var n = E(this).val();
                    return null == n ?
                        null :
                        Array.isArray(n) ?
                        E.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(kt, "\r\n")
                            };
                        }) :
                        {
                            name: t.name,
                            value: n.replace(kt, "\r\n")
                        };
                })
                .get();
        },
    });
    var Dt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = S.createElement("a");

    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while ((n = i[r++])) "+" === n[0] ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }

    function $t(t, i, o, a) {
        var s = {},
            u = t === Mt;

        function l(e) {
            var r;
            return (
                (s[e] = !0),
                E.each(t[e] || [], function(e, t) {
                    var n = t(i, o, a);
                    return "string" != typeof n || u || s[n] ? (u ? !(r = n) : void 0) : (i.dataTypes.unshift(n), l(n), !1);
                }),
                r
            );
        }
        return l(i.dataTypes[0]) || (!s["*"] && l("*"));
    }

    function Bt(e, t) {
        var n,
            r,
            i = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && E.extend(!0, e, r), e;
    }
    (Wt.href = Tt.href),
    E.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": It,
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
                    "text json": JSON.parse,
                    "text xml": E.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                },
            },
            ajaxSetup: function(e, t) {
                return t ? Bt(Bt(e, E.ajaxSettings), t) : Bt(E.ajaxSettings, e);
            },
            ajaxPrefilter: Ft(Rt),
            ajaxTransport: Ft(Mt),
            ajax: function(e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var c,
                    f,
                    p,
                    n,
                    d,
                    r,
                    h,
                    g,
                    i,
                    o,
                    y = E.ajaxSetup({}, t),
                    v = y.context || y,
                    m = y.context && (v.nodeType || v.jquery) ? E(v) : E.event,
                    x = E.Deferred(),
                    b = E.Callbacks("once memory"),
                    w = y.statusCode || {},
                    a = {},
                    s = {},
                    u = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while ((t = Ht.exec(p))) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                }
                                t = n[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function() {
                            return h ? p : null;
                        },
                        setRequestHeader: function(e, t) {
                            return null == h && ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e), (a[e] = t)), this;
                        },
                        overrideMimeType: function(e) {
                            return null == h && (y.mimeType = e), this;
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (h) T.always(e[T.status]);
                                else
                                    for (t in e) w[t] = [w[t], e[t]];
                            return this;
                        },
                        abort: function(e) {
                            var t = e || u;
                            return c && c.abort(t), l(0, t), this;
                        },
                    };
                if (
                    (x.promise(T),
                        (y.url = ((e || y.url || Tt.href) + "").replace(Pt, Tt.protocol + "//")),
                        (y.type = t.method || t.type || y.method || y.type),
                        (y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""]),
                        null == y.crossDomain)
                ) {
                    r = S.createElement("a");
                    try {
                        (r.href = y.url), (r.href = r.href), (y.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
                    } catch (e) {
                        y.crossDomain = !0;
                    }
                }
                if ((y.data && y.processData && "string" != typeof y.data && (y.data = E.param(y.data, y.traditional)), $t(Rt, y, t, T), h)) return T;
                for (i in ((g = E.event && y.global) && 0 == E.active++ && E.event.trigger("ajaxStart"),
                        (y.type = y.type.toUpperCase()),
                        (y.hasContent = !Ot.test(y.type)),
                        (f = y.url.replace(qt, "")),
                        y.hasContent ?
                        y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(Dt, "+")) :
                        ((o = y.url.slice(f.length)),
                            y.data && (y.processData || "string" == typeof y.data) && ((f += (St.test(f) ? "&" : "?") + y.data), delete y.data), !1 === y.cache && ((f = f.replace(Lt, "$1")), (o = (St.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
                            (y.url = f + o)),
                        y.ifModified && (E.lastModified[f] && T.setRequestHeader("If-Modified-Since", E.lastModified[f]), E.etag[f] && T.setRequestHeader("If-None-Match", E.etag[f])),
                        ((y.data && y.hasContent && !1 !== y.contentType) || t.contentType) && T.setRequestHeader("Content-Type", y.contentType),
                        T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "") : y.accepts["*"]),
                        y.headers))
                    T.setRequestHeader(i, y.headers[i]);
                if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h)) return T.abort();
                if (((u = "abort"), b.add(y.complete), T.done(y.success), T.fail(y.error), (c = $t(Mt, y, t, T)))) {
                    if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, y]), h)) return T;
                    y.async &&
                        0 < y.timeout &&
                        (d = C.setTimeout(function() {
                            T.abort("timeout");
                        }, y.timeout));
                    try {
                        (h = !1), c.send(a, l);
                    } catch (e) {
                        if (h) throw e;
                        l(-1, e);
                    }
                } else l(-1, "No Transport");

                function l(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = t;
                    h ||
                        ((h = !0),
                            d && C.clearTimeout(d),
                            (c = void 0),
                            (p = r || ""),
                            (T.readyState = 0 < e ? 4 : 0),
                            (i = (200 <= e && e < 300) || 304 === e),
                            n &&
                            (s = (function(e, t, n) {
                                var r,
                                    i,
                                    o,
                                    a,
                                    s = e.contents,
                                    u = e.dataTypes;
                                while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break;
                                        }
                                if (u[0] in n) o = u[0];
                                else {
                                    for (i in n) {
                                        if (!u[0] || e.converters[i + " " + u[0]]) {
                                            o = i;
                                            break;
                                        }
                                        a || (a = i);
                                    }
                                    o = o || a;
                                }
                                if (o) return o !== u[0] && u.unshift(o), n[o];
                            })(y, T, n)), !i && -1 < E.inArray("script", y.dataTypes) && E.inArray("json", y.dataTypes) < 0 && (y.converters["text script"] = function() {}),
                            (s = (function(e, t, n, r) {
                                var i,
                                    o,
                                    a,
                                    s,
                                    u,
                                    l = {},
                                    c = e.dataTypes.slice();
                                if (c[1])
                                    for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                                o = c.shift();
                                while (o)
                                    if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
                                        if ("*" === o) o = u;
                                        else if ("*" !== u && u !== o) {
                                    if (!(a = l[u + " " + o] || l["* " + o]))
                                        for (i in l)
                                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                                                break;
                                            }
                                    if (!0 !== a)
                                        if (a && e["throws"]) t = a(t);
                                        else
                                            try {
                                                t = a(t);
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: a ? e : "No conversion from " + u + " to " + o
                                                };
                                            }
                                }
                                return {
                                    state: "success",
                                    data: t
                                };
                            })(y, s, T, i)),
                            i ?
                            (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (E.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (E.etag[f] = u)),
                                204 === e || "HEAD" === y.type ? (l = "nocontent") : 304 === e ? (l = "notmodified") : ((l = s.state), (o = s.data), (i = !(a = s.error)))) :
                            ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
                            (T.status = e),
                            (T.statusText = (t || l) + ""),
                            i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]),
                            T.statusCode(w),
                            (w = void 0),
                            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]),
                            b.fireWith(v, [T, l]),
                            g && (m.trigger("ajaxComplete", [T, y]), --E.active || E.event.trigger("ajaxStop")));
                }
                return T;
            },
            getJSON: function(e, t, n) {
                return E.get(e, t, n, "json");
            },
            getScript: function(e, t) {
                return E.get(e, void 0, t, "script");
            },
        }),
        E.each(["get", "post"], function(e, i) {
            E[i] = function(e, t, n, r) {
                return m(t) && ((r = r || n), (n = t), (t = void 0)), E.ajax(E.extend({
                    url: e,
                    type: i,
                    dataType: r,
                    data: t,
                    success: n
                }, E.isPlainObject(e) && e));
            };
        }),
        E.ajaxPrefilter(function(e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
        }),
        (E._evalUrl = function(e, t, n) {
            return E.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    E.globalEval(e, t, n);
                },
            });
        }),
        E.fn.extend({
            wrapAll: function(e) {
                var t;
                return (
                    this[0] &&
                    (m(e) && (e = e.call(this[0])),
                        (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                        .map(function() {
                            var e = this;
                            while (e.firstElementChild) e = e.firstElementChild;
                            return e;
                        })
                        .append(this)),
                    this
                );
            },
            wrapInner: function(n) {
                return m(n) ?
                    this.each(function(e) {
                        E(this).wrapInner(n.call(this, e));
                    }) :
                    this.each(function() {
                        var e = E(this),
                            t = e.contents();
                        t.length ? t.wrapAll(n) : e.append(n);
                    });
            },
            wrap: function(t) {
                var n = m(t);
                return this.each(function(e) {
                    E(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function(e) {
                return (
                    this.parent(e)
                    .not("body")
                    .each(function() {
                        E(this).replaceWith(this.childNodes);
                    }),
                    this
                );
            },
        }),
        (E.expr.pseudos.hidden = function(e) {
            return !E.expr.pseudos.visible(e);
        }),
        (E.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (E.ajaxSettings.xhr = function() {
            try {
                return new C.XMLHttpRequest();
            } catch (e) {}
        });
    var _t = {
            0: 200,
            1223: 204
        },
        zt = E.ajaxSettings.xhr();
    (v.cors = !!zt && "withCredentials" in zt),
    (v.ajax = zt = !!zt),
    E.ajaxTransport(function(i) {
            var o, a;
            if (v.cors || (zt && !i.crossDomain))
                return {
                    send: function(e, t) {
                        var n,
                            r = i.xhr();
                        if ((r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields))
                            for (n in i.xhrFields) r[n] = i.xhrFields[n];
                        for (n in (i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e)) r.setRequestHeader(n, e[n]);
                        (o = function(e) {
                            return function() {
                                o &&
                                    ((o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                                        "abort" === e ?
                                        r.abort() :
                                        "error" === e ?
                                        "number" != typeof r.status ?
                                        t(0, "error") :
                                        t(r.status, r.statusText) :
                                        t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                            binary: r.response
                                        } : {
                                            text: r.responseText
                                        }, r.getAllResponseHeaders()));
                            };
                        }),
                        (r.onload = o()),
                        (a = r.onerror = r.ontimeout = o("error")),
                        void 0 !== r.onabort ?
                            (r.onabort = a) :
                            (r.onreadystatechange = function() {
                                4 === r.readyState &&
                                    C.setTimeout(function() {
                                        o && a();
                                    });
                            }),
                            (o = o("abort"));
                        try {
                            r.send((i.hasContent && i.data) || null);
                        } catch (e) {
                            if (o) throw e;
                        }
                    },
                    abort: function() {
                        o && o();
                    },
                };
        }),
        E.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        E.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return E.globalEval(e), e;
                },
            },
        }),
        E.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        E.ajaxTransport("script", function(n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function(e, t) {
                        (r = E("<script>")
                            .attr(n.scriptAttrs || {})
                            .prop({
                                charset: n.scriptCharset,
                                src: n.url
                            })
                            .on(
                                "load error",
                                (i = function(e) {
                                    r.remove(), (i = null), e && t("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                        S.head.appendChild(r[0]);
                    },
                    abort: function() {
                        i && i();
                    },
                };
        });
    var Ut,
        Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Xt.pop() || E.expando + "_" + Ct.guid++;
                return (this[e] = !0), e;
            },
        }),
        E.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r,
                i,
                o,
                a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return (
                    (r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    a ? (e[a] = e[a].replace(Vt, "$1" + r)) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                    (e.converters["script json"] = function() {
                        return o || E.error(r + " was not called"), o[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (i = C[r]),
                    (C[r] = function() {
                        o = arguments;
                    }),
                    n.always(function() {
                        void 0 === i ? E(C).removeProp(r) : (C[r] = i), e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)), o && m(i) && i(o[0]), (o = i = void 0);
                    }),
                    "script"
                );
        }),
        (v.createHTMLDocument = (((Ut = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Ut.childNodes.length)),
        (E.parseHTML = function(e, t, n) {
            return "string" != typeof e ?
                [] :
                ("boolean" == typeof t && ((n = t), (t = !1)),
                    t || (v.createHTMLDocument ? (((r = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href), t.head.appendChild(r)) : (t = S)),
                    (o = !n && []),
                    (i = N.exec(e)) ? [t.createElement(i[1])] : ((i = xe([e], t, o)), o && o.length && E(o).remove(), E.merge([], i.childNodes)));
            var r, i, o;
        }),
        (E.fn.load = function(e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
            return (-1 < s && ((r = yt(e.slice(s))), (e = e.slice(0, s))),
                m(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                0 < a.length &&
                E.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                })
                .done(function(e) {
                    (o = arguments), a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e);
                })
                .always(
                    n &&
                    function(e, t) {
                        a.each(function() {
                            n.apply(this, o || [e.responseText, t, e]);
                        });
                    }
                ),
                this
            );
        }),
        (E.expr.pseudos.animated = function(t) {
            return E.grep(E.timers, function(e) {
                return t === e.elem;
            }).length;
        }),
        (E.offset = {
            setOffset: function(e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = E.css(e, "position"),
                    c = E(e),
                    f = {};
                "static" === l && (e.style.position = "relative"),
                    (s = c.offset()),
                    (o = E.css(e, "top")),
                    (u = E.css(e, "left")),
                    ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? ((a = (r = c.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    m(t) && (t = t.call(e, n, E.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, f) : c.css(f);
            },
        }),
        E.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return void 0 === t ?
                        this :
                        this.each(function(e) {
                            E.offset.setOffset(this, t, e);
                        });
                var e,
                    n,
                    r = this[0];
                return r ? (r.getClientRects().length ? ((e = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }) : void 0;
            },
            position: function() {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        (t = this.offset()), (n = r.ownerDocument), (e = r.offsetParent || n.documentElement);
                        while (e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position")) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && (((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0)), (i.left += E.css(e, "borderLeftWidth", !0)));
                    }
                    return {
                        top: t.top - i.top - E.css(r, "marginTop", !0),
                        left: t.left - i.left - E.css(r, "marginLeft", !0)
                    };
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent;
                    while (e && "static" === E.css(e, "position")) e = e.offsetParent;
                    return e || re;
                });
            },
        }),
        E.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, i) {
            var o = "pageYOffset" === i;
            E.fn[t] = function(e) {
                return B(
                    this,
                    function(e, t, n) {
                        var r;
                        if ((x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === n)) return r ? r[i] : e[t];
                        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : (e[t] = n);
                    },
                    t,
                    e,
                    arguments.length
                );
            };
        }),
        E.each(["top", "left"], function(e, n) {
            E.cssHooks[n] = _e(v.pixelPosition, function(e, t) {
                if (t) return (t = Be(e, n)), Pe.test(t) ? E(e).position()[n] + "px" : t;
            });
        }),
        E.each({
            Height: "height",
            Width: "width"
        }, function(a, s) {
            E.each({
                padding: "inner" + a,
                content: s,
                "": "outer" + a
            }, function(r, o) {
                E.fn[o] = function(e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e),
                        i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return B(
                        this,
                        function(e, t, n) {
                            var r;
                            return x(e) ?
                                0 === o.indexOf("outer") ?
                                e["inner" + a] :
                                e.document.documentElement["client" + a] :
                                9 === e.nodeType ?
                                ((r = e.documentElement), Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) :
                                void 0 === n ?
                                E.css(e, t, i) :
                                E.style(e, t, n, i);
                        },
                        s,
                        n ? e : void 0,
                        n
                    );
                };
            });
        }),
        E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            E.fn[t] = function(e) {
                return this.on(t, e);
            };
        }),
        E.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function(e, t) {
                return this.off(e, null, t);
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
            E.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
            };
        });
    var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    (E.proxy = function(e, t) {
        var n, r, i;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
            return (
                (r = s.call(arguments, 2)),
                ((i = function() {
                    return e.apply(t || this, r.concat(s.call(arguments)));
                }).guid = e.guid = e.guid || E.guid++),
                i
            );
    }),
    (E.holdReady = function(e) {
        e ? E.readyWait++ : E.ready(!0);
    }),
    (E.isArray = Array.isArray),
    (E.parseJSON = JSON.parse),
    (E.nodeName = A),
    (E.isFunction = m),
    (E.isWindow = x),
    (E.camelCase = X),
    (E.type = w),
    (E.now = Date.now),
    (E.isNumeric = function(e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (E.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "$1");
    }),
    "function" == typeof define &&
        define.amd &&
        define("jquery", [], function() {
            return E;
        });
    var Yt = C.jQuery,
        Qt = C.$;
    return (
        (E.noConflict = function(e) {
            return C.$ === E && (C.$ = Qt), e && C.jQuery === E && (C.jQuery = Yt), E;
        }),
        "undefined" == typeof e && (C.jQuery = C.$ = E),
        E
    );
});

/*!
 * Bootstrap v5.2.2 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : ((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e());
})(this, function() {
    "use strict";
    const t = "transitionend",
        e = (t) => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
                i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), (e = i && "#" !== i ? i.trim() : null);
            }
            return e;
        },
        i = (t) => {
            const i = e(t);
            return i && document.querySelector(i) ? i : null;
        },
        n = (t) => {
            const i = e(t);
            return i ? document.querySelector(i) : null;
        },
        s = (e) => {
            e.dispatchEvent(new Event(t));
        },
        o = (t) => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        r = (t) => (o(t) ? (t.jquery ? t[0] : t) : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null),
        a = (t) => {
            if (!o(t) || 0 === t.getClientRects().length) return !1;
            const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                i = t.closest("details:not([open])");
            if (!i) return e;
            if (i !== t) {
                const e = t.closest("summary");
                if (e && e.parentNode !== i) return !1;
                if (null === e) return !1;
            }
            return e;
        },
        l = (t) => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        c = (t) => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null;
        },
        h = () => {},
        d = (t) => {
            t.offsetHeight;
        },
        u = () => (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null),
        f = [],
        p = () => "rtl" === document.documentElement.dir,
        g = (t) => {
            var e;
            (e = () => {
                const e = u();
                if (e) {
                    const i = t.NAME,
                        n = e.fn[i];
                    (e.fn[i] = t.jQueryInterface), (e.fn[i].Constructor = t), (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
                }
            }),
            "loading" === document.readyState ?
                (f.length ||
                    document.addEventListener("DOMContentLoaded", () => {
                        for (const t of f) t();
                    }),
                    f.push(e)) :
                e();
        },
        m = (t) => {
            "function" == typeof t && t();
        },
        _ = (e, i, n = !0) => {
            if (!n) return void m(e);
            const o =
                ((t) => {
                    if (!t) return 0;
                    let {
                        transitionDuration: e,
                        transitionDelay: i
                    } = window.getComputedStyle(t);
                    const n = Number.parseFloat(e),
                        s = Number.parseFloat(i);
                    return n || s ? ((e = e.split(",")[0]), (i = i.split(",")[0]), 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
                })(i) + 5;
            let r = !1;
            const a = ({
                target: n
            }) => {
                n === i && ((r = !0), i.removeEventListener(t, a), m(e));
            };
            i.addEventListener(t, a),
                setTimeout(() => {
                    r || s(i);
                }, o);
        },
        b = (t, e, i, n) => {
            const s = t.length;
            let o = t.indexOf(e);
            return -1 === o ? (!i && n ? t[s - 1] : t[0]) : ((o += i ? 1 : -1), n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]);
        },
        v = /[^.]*(?=\..*)\.|.*/,
        y = /\..*/,
        w = /::\d+$/,
        A = {};
    let E = 1;
    const T = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        C = new Set([
            "click",
            "dblclick",
            "mouseup",
            "mousedown",
            "contextmenu",
            "mousewheel",
            "DOMMouseScroll",
            "mouseover",
            "mouseout",
            "mousemove",
            "selectstart",
            "selectend",
            "keydown",
            "keypress",
            "keyup",
            "orientationchange",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointerleave",
            "pointercancel",
            "gesturestart",
            "gesturechange",
            "gestureend",
            "focus",
            "blur",
            "change",
            "reset",
            "select",
            "submit",
            "focusin",
            "focusout",
            "load",
            "unload",
            "beforeunload",
            "resize",
            "move",
            "DOMContentLoaded",
            "readystatechange",
            "error",
            "abort",
            "scroll",
        ]);

    function O(t, e) {
        return (e && `${e}::${E++}`) || t.uidEvent || E++;
    }

    function x(t) {
        const e = O(t);
        return (t.uidEvent = e), (A[e] = A[e] || {}), A[e];
    }

    function k(t, e, i = null) {
        return Object.values(t).find((t) => t.callable === e && t.delegationSelector === i);
    }

    function L(t, e, i) {
        const n = "string" == typeof e,
            s = n ? i : e || i;
        let o = N(t);
        return C.has(o) || (o = t), [n, s, o];
    }

    function D(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = L(e, i, n);
        if (e in T) {
            const t = (t) =>
                function(e) {
                    if (!e.relatedTarget || (e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))) return t.call(this, e);
                };
            r = t(r);
        }
        const l = x(t),
            c = l[a] || (l[a] = {}),
            h = k(c, r, o ? i : null);
        if (h) return void(h.oneOff = h.oneOff && s);
        const d = O(r, e.replace(v, "")),
            u = o ?
            (function(t, e, i) {
                return function n(s) {
                    const o = t.querySelectorAll(e);
                    for (let {
                            target: r
                        } = s; r && r !== this; r = r.parentNode)
                        for (const a of o)
                            if (a === r) return j(s, {
                                delegateTarget: r
                            }), n.oneOff && P.off(t, s.type, e, i), i.apply(r, [s]);
                };
            })(t, i, r) :
            (function(t, e) {
                return function i(n) {
                    return j(n, {
                        delegateTarget: t
                    }), i.oneOff && P.off(t, n.type, e), e.apply(t, [n]);
                };
            })(t, r);
        (u.delegationSelector = o ? i : null), (u.callable = r), (u.oneOff = s), (u.uidEvent = d), (c[d] = u), t.addEventListener(a, u, o);
    }

    function S(t, e, i, n, s) {
        const o = k(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
    }

    function I(t, e, i, n) {
        const s = e[i] || {};
        for (const o of Object.keys(s))
            if (o.includes(n)) {
                const n = s[o];
                S(t, e, i, n.callable, n.delegationSelector);
            }
    }

    function N(t) {
        return (t = t.replace(y, "")), T[t] || t;
    }
    const P = {
        on(t, e, i, n) {
            D(t, e, i, n, !1);
        },
        one(t, e, i, n) {
            D(t, e, i, n, !0);
        },
        off(t, e, i, n) {
            if ("string" != typeof e || !t) return;
            const [s, o, r] = L(e, i, n),
                a = r !== e,
                l = x(t),
                c = l[r] || {},
                h = e.startsWith(".");
            if (void 0 === o) {
                if (h)
                    for (const i of Object.keys(l)) I(t, l, i, e.slice(1));
                for (const i of Object.keys(c)) {
                    const n = i.replace(w, "");
                    if (!a || e.includes(n)) {
                        const e = c[i];
                        S(t, l, r, e.callable, e.delegationSelector);
                    }
                }
            } else {
                if (!Object.keys(c).length) return;
                S(t, l, r, o, s ? i : null);
            }
        },
        trigger(t, e, i) {
            if ("string" != typeof e || !t) return null;
            const n = u();
            let s = null,
                o = !0,
                r = !0,
                a = !1;
            e !== N(e) && n && ((s = n.Event(e, i)), n(t).trigger(s), (o = !s.isPropagationStopped()), (r = !s.isImmediatePropagationStopped()), (a = s.isDefaultPrevented()));
            let l = new Event(e, {
                bubbles: o,
                cancelable: !0
            });
            return (l = j(l, i)), a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
        },
    };

    function j(t, e) {
        for (const [i, n] of Object.entries(e || {}))
            try {
                t[i] = n;
            } catch (e) {
                Object.defineProperty(t, i, {
                    configurable: !0,
                    get: () => n
                });
            }
        return t;
    }
    const M = new Map(),
        H = {
            set(t, e, i) {
                M.has(t) || M.set(t, new Map());
                const n = M.get(t);
                n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
            },
            get: (t, e) => (M.has(t) && M.get(t).get(e)) || null,
            remove(t, e) {
                if (!M.has(t)) return;
                const i = M.get(t);
                i.delete(e), 0 === i.size && M.delete(t);
            },
        };

    function $(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t));
        } catch (e) {
            return t;
        }
    }

    function W(t) {
        return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
    }
    const B = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${W(e)}`, i);
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${W(e)}`);
        },
        getDataAttributes(t) {
            if (!t) return {};
            const e = {},
                i = Object.keys(t.dataset).filter((t) => t.startsWith("bs") && !t.startsWith("bsConfig"));
            for (const n of i) {
                let i = n.replace(/^bs/, "");
                (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)), (e[i] = $(t.dataset[n]));
            }
            return e;
        },
        getDataAttribute: (t, e) => $(t.getAttribute(`data-bs-${W(e)}`)),
    };
    class F {
        static get Default() {
            return {};
        }
        static get DefaultType() {
            return {};
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(t) {
            return (t = this._mergeConfigObj(t)), (t = this._configAfterMerge(t)), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return t;
        }
        _mergeConfigObj(t, e) {
            const i = o(e) ? B.getDataAttribute(e, "config") : {};
            return { ...this.constructor.Default,
                ...("object" == typeof i ? i : {}),
                ...(o(e) ? B.getDataAttributes(e) : {}),
                ...("object" == typeof t ? t : {})
            };
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const n of Object.keys(e)) {
                const s = e[n],
                    r = t[n],
                    a = o(r) ?
                    "element" :
                    null == (i = r) ?
                    `${i}` :
                    Object.prototype.toString
                    .call(i)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
                if (!new RegExp(s).test(a)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`);
            }
            var i;
        }
    }
    class z extends F {
        constructor(t, e) {
            super(), (t = r(t)) && ((this._element = t), (this._config = this._getConfig(e)), H.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            H.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
        }
        _queueCallback(t, e, i = !0) {
            _(t, e, i);
        }
        _getConfig(t) {
            return (t = this._mergeConfigObj(t, this._element)), (t = this._configAfterMerge(t)), this._typeCheckConfig(t), t;
        }
        static getInstance(t) {
            return H.get(r(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
        }
        static get VERSION() {
            return "5.2.2";
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`;
        }
    }
    const q = (t, e = "hide") => {
        const i = `click.dismiss${t.EVENT_KEY}`,
            s = t.NAME;
        P.on(document, i, `[data-bs-dismiss="${s}"]`, function(i) {
            if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this))) return;
            const o = n(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(o)[e]();
        });
    };
    class R extends z {
        static get NAME() {
            return "alert";
        }
        close() {
            if (P.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, t);
        }
        _destroyElement() {
            this._element.remove(), P.trigger(this._element, "closed.bs.alert"), this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = R.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    q(R, "close"), g(R);
    const V = '[data-bs-toggle="button"]';
    class K extends z {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = K.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    P.on(document, "click.bs.button.data-api", V, (t) => {
            t.preventDefault();
            const e = t.target.closest(V);
            K.getOrCreateInstance(e).toggle();
        }),
        g(K);
    const Q = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
            parents(t, e) {
                const i = [];
                let n = t.parentNode.closest(e);
                for (; n;) i.push(n), (n = n.parentNode.closest(e));
                return i;
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling;
                }
                return [];
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling;
                }
                return [];
            },
            focusableChildren(t) {
                const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t) => `${t}:not([tabindex^="-"])`).join(",");
                return this.find(e, t).filter((t) => !l(t) && a(t));
            },
        },
        X = {
            endCallback: null,
            leftCallback: null,
            rightCallback: null
        },
        Y = {
            endCallback: "(function|null)",
            leftCallback: "(function|null)",
            rightCallback: "(function|null)"
        };
    class U extends F {
        constructor(t, e) {
            super(), (this._element = t), t && U.isSupported() && ((this._config = this._getConfig(e)), (this._deltaX = 0), (this._supportPointerEvents = Boolean(window.PointerEvent)), this._initEvents());
        }
        static get Default() {
            return X;
        }
        static get DefaultType() {
            return Y;
        }
        static get NAME() {
            return "swipe";
        }
        dispose() {
            P.off(this._element, ".bs.swipe");
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : (this._deltaX = t.touches[0].clientX);
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), m(this._config.endCallback);
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            (this._deltaX = 0), e && m(e > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
            this._supportPointerEvents ?
                (P.on(this._element, "pointerdown.bs.swipe", (t) => this._start(t)), P.on(this._element, "pointerup.bs.swipe", (t) => this._end(t)), this._element.classList.add("pointer-event")) :
                (P.on(this._element, "touchstart.bs.swipe", (t) => this._start(t)), P.on(this._element, "touchmove.bs.swipe", (t) => this._move(t)), P.on(this._element, "touchend.bs.swipe", (t) => this._end(t)));
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
        }
        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        }
    }
    const G = "next",
        J = "prev",
        Z = "left",
        tt = "right",
        et = "slid.bs.carousel",
        it = "carousel",
        nt = "active",
        st = {
            ArrowLeft: tt,
            ArrowRight: Z
        },
        ot = {
            interval: 5e3,
            keyboard: !0,
            pause: "hover",
            ride: !1,
            touch: !0,
            wrap: !0
        },
        rt = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean"
        };
    class at extends z {
        constructor(t, e) {
            super(t, e),
                (this._interval = null),
                (this._activeElement = null),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._swipeHelper = null),
                (this._indicatorsElement = Q.findOne(".carousel-indicators", this._element)),
                this._addEventListeners(),
                this._config.ride === it && this.cycle();
        }
        static get Default() {
            return ot;
        }
        static get DefaultType() {
            return rt;
        }
        static get NAME() {
            return "carousel";
        }
        next() {
            this._slide(G);
        }
        nextWhenVisible() {
            !document.hidden && a(this._element) && this.next();
        }
        prev() {
            this._slide(J);
        }
        pause() {
            this._isSliding && s(this._element), this._clearInterval();
        }
        cycle() {
            this._clearInterval(), this._updateInterval(), (this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval));
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? P.one(this._element, et, () => this.cycle()) : this.cycle());
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) return void P.one(this._element, et, () => this.to(t));
            const i = this._getItemIndex(this._getActive());
            if (i === t) return;
            const n = t > i ? G : J;
            this._slide(n, e[t]);
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(t) {
            return (t.defaultInterval = t.interval), t;
        }
        _addEventListeners() {
            this._config.keyboard && P.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
                "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", () => this.pause()), P.on(this._element, "mouseleave.bs.carousel", () => this._maybeEnableCycle())),
                this._config.touch && U.isSupported() && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            for (const t of Q.find(".carousel-item img", this._element)) P.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
            const t = {
                leftCallback: () => this._slide(this._directionToOrder(Z)),
                rightCallback: () => this._slide(this._directionToOrder(tt)),
                endCallback: () => {
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), (this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval)));
                },
            };
            this._swipeHelper = new U(this._element, t);
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = st[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t);
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = Q.findOne(".active", this._indicatorsElement);
            e.classList.remove(nt), e.removeAttribute("aria-current");
            const i = Q.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(nt), i.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval;
        }
        _slide(t, e = null) {
            if (this._isSliding) return;
            const i = this._getActive(),
                n = t === G,
                s = e || b(this._getItems(), i, n, this._config.wrap);
            if (s === i) return;
            const o = this._getItemIndex(s),
                r = (e) => P.trigger(this._element, e, {
                    relatedTarget: s,
                    direction: this._orderToDirection(t),
                    from: this._getItemIndex(i),
                    to: o
                });
            if (r("slide.bs.carousel").defaultPrevented) return;
            if (!i || !s) return;
            const a = Boolean(this._interval);
            this.pause(), (this._isSliding = !0), this._setActiveIndicatorElement(o), (this._activeElement = s);
            const l = n ? "carousel-item-start" : "carousel-item-end",
                c = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(c),
                d(s),
                i.classList.add(l),
                s.classList.add(l),
                this._queueCallback(
                    () => {
                        s.classList.remove(l, c), s.classList.add(nt), i.classList.remove(nt, c, l), (this._isSliding = !1), r(et);
                    },
                    i,
                    this._isAnimated()
                ),
                a && this.cycle();
        }
        _isAnimated() {
            return this._element.classList.contains("slide");
        }
        _getActive() {
            return Q.findOne(".active.carousel-item", this._element);
        }
        _getItems() {
            return Q.find(".carousel-item", this._element);
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval), (this._interval = null));
        }
        _directionToOrder(t) {
            return p() ? (t === Z ? J : G) : t === Z ? G : J;
        }
        _orderToDirection(t) {
            return p() ? (t === J ? Z : tt) : t === J ? tt : Z;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = at.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                } else e.to(t);
            });
        }
    }
    P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function(t) {
            const e = n(this);
            if (!e || !e.classList.contains(it)) return;
            t.preventDefault();
            const i = at.getOrCreateInstance(e),
                s = this.getAttribute("data-bs-slide-to");
            return s ? (i.to(s), void i._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
        }),
        P.on(window, "load.bs.carousel.data-api", () => {
            const t = Q.find('[data-bs-ride="carousel"]');
            for (const e of t) at.getOrCreateInstance(e);
        }),
        g(at);
    const lt = "show",
        ct = "collapse",
        ht = "collapsing",
        dt = '[data-bs-toggle="collapse"]',
        ut = {
            parent: null,
            toggle: !0
        },
        ft = {
            parent: "(null|element)",
            toggle: "boolean"
        };
    class pt extends z {
        constructor(t, e) {
            super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
            const n = Q.find(dt);
            for (const t of n) {
                const e = i(t),
                    n = Q.find(e).filter((t) => t === this._element);
                null !== e && n.length && this._triggerArray.push(t);
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
            return ut;
        }
        static get DefaultType() {
            return ft;
        }
        static get NAME() {
            return "collapse";
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (
                (this._config.parent &&
                    (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing")
                        .filter((t) => t !== this._element)
                        .map((t) => pt.getOrCreateInstance(t, {
                            toggle: !1
                        }))),
                    t.length && t[0]._isTransitioning)
            )
                return;
            if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            for (const e of t) e.hide();
            const e = this._getDimension();
            this._element.classList.remove(ct), this._element.classList.add(ht), (this._element.style[e] = 0), this._addAriaAndCollapsedClass(this._triggerArray, !0), (this._isTransitioning = !0);
            const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback(
                    () => {
                        (this._isTransitioning = !1), this._element.classList.remove(ht), this._element.classList.add(ct, lt), (this._element.style[e] = ""), P.trigger(this._element, "shown.bs.collapse");
                    },
                    this._element, !0
                ),
                (this._element.style[e] = `${this._element[i]}px`);
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            (this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`), d(this._element), this._element.classList.add(ht), this._element.classList.remove(ct, lt);
            for (const t of this._triggerArray) {
                const e = n(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
            }
            (this._isTransitioning = !0),
            (this._element.style[t] = ""),
            this._queueCallback(
                () => {
                    (this._isTransitioning = !1), this._element.classList.remove(ht), this._element.classList.add(ct), P.trigger(this._element, "hidden.bs.collapse");
                },
                this._element, !0
            );
        }
        _isShown(t = this._element) {
            return t.classList.contains(lt);
        }
        _configAfterMerge(t) {
            return (t.toggle = Boolean(t.toggle)), (t.parent = r(t.parent)), t;
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(dt);
            for (const e of t) {
                const t = n(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t));
            }
        }
        _getFirstLevelChildren(t) {
            const e = Q.find(":scope .collapse .collapse", this._config.parent);
            return Q.find(t, this._config.parent).filter((t) => !e.includes(t));
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length)
                for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e);
        }
        static jQueryInterface(t) {
            const e = {};
            return (
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
                this.each(function() {
                    const i = pt.getOrCreateInstance(this, e);
                    if ("string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                        i[t]();
                    }
                })
            );
        }
    }
    P.on(document, "click.bs.collapse.data-api", dt, function(t) {
            ("A" === t.target.tagName || (t.delegateTarget && "A" === t.delegateTarget.tagName)) && t.preventDefault();
            const e = i(this),
                n = Q.find(e);
            for (const t of n) pt.getOrCreateInstance(t, {
                toggle: !1
            }).toggle();
        }),
        g(pt);
    var gt = "top",
        mt = "bottom",
        _t = "right",
        bt = "left",
        vt = "auto",
        yt = [gt, mt, _t, bt],
        wt = "start",
        At = "end",
        Et = "clippingParents",
        Tt = "viewport",
        Ct = "popper",
        Ot = "reference",
        xt = yt.reduce(function(t, e) {
            return t.concat([e + "-" + wt, e + "-" + At]);
        }, []),
        kt = [].concat(yt, [vt]).reduce(function(t, e) {
            return t.concat([e, e + "-" + wt, e + "-" + At]);
        }, []),
        Lt = "beforeRead",
        Dt = "read",
        St = "afterRead",
        It = "beforeMain",
        Nt = "main",
        Pt = "afterMain",
        jt = "beforeWrite",
        Mt = "write",
        Ht = "afterWrite",
        $t = [Lt, Dt, St, It, Nt, Pt, jt, Mt, Ht];

    function Wt(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
    }

    function Bt(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return (e && e.defaultView) || window;
        }
        return t;
    }

    function Ft(t) {
        return t instanceof Bt(t).Element || t instanceof Element;
    }

    function zt(t) {
        return t instanceof Bt(t).HTMLElement || t instanceof HTMLElement;
    }

    function qt(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof Bt(t).ShadowRoot || t instanceof ShadowRoot);
    }
    const Rt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function(t) {
                var i = e.styles[t] || {},
                    n = e.attributes[t] || {},
                    s = e.elements[t];
                zt(s) &&
                    Wt(s) &&
                    (Object.assign(s.style, i),
                        Object.keys(n).forEach(function(t) {
                            var e = n[t];
                            !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
                        }));
            });
        },
        effect: function(t) {
            var e = t.state,
                i = {
                    popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
            return (
                Object.assign(e.elements.popper.style, i.popper),
                (e.styles = i),
                e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                function() {
                    Object.keys(e.elements).forEach(function(t) {
                        var n = e.elements[t],
                            s = e.attributes[t] || {},
                            o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function(t, e) {
                                return (t[e] = ""), t;
                            }, {});
                        zt(n) &&
                            Wt(n) &&
                            (Object.assign(n.style, o),
                                Object.keys(s).forEach(function(t) {
                                    n.removeAttribute(t);
                                }));
                    });
                }
            );
        },
        requires: ["computeStyles"],
    };

    function Vt(t) {
        return t.split("-")[0];
    }
    var Kt = Math.max,
        Qt = Math.min,
        Xt = Math.round;

    function Yt() {
        var t = navigator.userAgentData;
        return null != t && t.brands ?
            t.brands
            .map(function(t) {
                return t.brand + "/" + t.version;
            })
            .join(" ") :
            navigator.userAgent;
    }

    function Ut() {
        return !/^((?!chrome|android).)*safari/i.test(Yt());
    }

    function Gt(t, e, i) {
        void 0 === e && (e = !1), void 0 === i && (i = !1);
        var n = t.getBoundingClientRect(),
            s = 1,
            o = 1;
        e && zt(t) && ((s = (t.offsetWidth > 0 && Xt(n.width) / t.offsetWidth) || 1), (o = (t.offsetHeight > 0 && Xt(n.height) / t.offsetHeight) || 1));
        var r = (Ft(t) ? Bt(t) : window).visualViewport,
            a = !Ut() && i,
            l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
            c = (n.top + (a && r ? r.offsetTop : 0)) / o,
            h = n.width / s,
            d = n.height / o;
        return {
            width: h,
            height: d,
            top: c,
            right: l + h,
            bottom: c + d,
            left: l,
            x: l,
            y: c
        };
    }

    function Jt(t) {
        var e = Gt(t),
            i = t.offsetWidth,
            n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        };
    }

    function Zt(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && qt(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host;
            } while (n);
        }
        return !1;
    }

    function te(t) {
        return Bt(t).getComputedStyle(t);
    }

    function ee(t) {
        return ["table", "td", "th"].indexOf(Wt(t)) >= 0;
    }

    function ie(t) {
        return ((Ft(t) ? t.ownerDocument : t.document) || window.document).documentElement;
    }

    function ne(t) {
        return "html" === Wt(t) ? t : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || ie(t);
    }

    function se(t) {
        return zt(t) && "fixed" !== te(t).position ? t.offsetParent : null;
    }

    function oe(t) {
        for (var e = Bt(t), i = se(t); i && ee(i) && "static" === te(i).position;) i = se(i);
        return i && ("html" === Wt(i) || ("body" === Wt(i) && "static" === te(i).position)) ?
            e :
            i ||
            (function(t) {
                var e = /firefox/i.test(Yt());
                if (/Trident/i.test(Yt()) && zt(t) && "fixed" === te(t).position) return null;
                var i = ne(t);
                for (qt(i) && (i = i.host); zt(i) && ["html", "body"].indexOf(Wt(i)) < 0;) {
                    var n = te(i);
                    if (
                        "none" !== n.transform ||
                        "none" !== n.perspective ||
                        "paint" === n.contain ||
                        -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                        (e && "filter" === n.willChange) ||
                        (e && n.filter && "none" !== n.filter)
                    )
                        return i;
                    i = i.parentNode;
                }
                return null;
            })(t) ||
            e;
    }

    function re(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
    }

    function ae(t, e, i) {
        return Kt(t, Qt(e, i));
    }

    function le(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t);
    }

    function ce(t, e) {
        return e.reduce(function(e, i) {
            return (e[i] = t), e;
        }, {});
    }
    const he = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e,
                i = t.state,
                n = t.name,
                s = t.options,
                o = i.elements.arrow,
                r = i.modifiersData.popperOffsets,
                a = Vt(i.placement),
                l = re(a),
                c = [bt, _t].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = (function(t, e) {
                        return le("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                            placement: e.placement
                        })) : t) ? t : ce(t, yt));
                    })(s.padding, i),
                    d = Jt(o),
                    u = "y" === l ? gt : bt,
                    f = "y" === l ? mt : _t,
                    p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
                    g = r[l] - i.rects.reference[l],
                    m = oe(o),
                    _ = m ? ("y" === l ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
                    b = p / 2 - g / 2,
                    v = h[u],
                    y = _ - d[c] - h[f],
                    w = _ / 2 - d[c] / 2 + b,
                    A = ae(v, w, y),
                    E = l;
                i.modifiersData[n] = (((e = {})[E] = A), (e.centerOffset = A - w), e);
            }
        },
        effect: function(t) {
            var e = t.state,
                i = t.options.element,
                n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Zt(e.elements.popper, n) && (e.elements.arrow = n);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
    };

    function de(t) {
        return t.split("-")[1];
    }
    var ue = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };

    function fe(t) {
        var e,
            i = t.popper,
            n = t.popperRect,
            s = t.placement,
            o = t.variation,
            r = t.offsets,
            a = t.position,
            l = t.gpuAcceleration,
            c = t.adaptive,
            h = t.roundOffsets,
            d = t.isFixed,
            u = r.x,
            f = void 0 === u ? 0 : u,
            p = r.y,
            g = void 0 === p ? 0 : p,
            m = "function" == typeof h ? h({
                x: f,
                y: g
            }) : {
                x: f,
                y: g
            };
        (f = m.x), (g = m.y);
        var _ = r.hasOwnProperty("x"),
            b = r.hasOwnProperty("y"),
            v = bt,
            y = gt,
            w = window;
        if (c) {
            var A = oe(i),
                E = "clientHeight",
                T = "clientWidth";
            A === Bt(i) && "static" !== te((A = ie(i))).position && "absolute" === a && ((E = "scrollHeight"), (T = "scrollWidth")),
                (s === gt || ((s === bt || s === _t) && o === At)) && ((y = mt), (g -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height), (g *= l ? 1 : -1)),
                (s !== bt && ((s !== gt && s !== mt) || o !== At)) || ((v = _t), (f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width), (f *= l ? 1 : -1));
        }
        var C,
            O = Object.assign({
                position: a
            }, c && ue),
            x = !0 === h ?
            (function(t) {
                var e = t.x,
                    i = t.y,
                    n = window.devicePixelRatio || 1;
                return {
                    x: Xt(e * n) / n || 0,
                    y: Xt(i * n) / n || 0
                };
            })({
                x: f,
                y: g
            }) :
            {
                x: f,
                y: g
            };
        return (
            (f = x.x),
            (g = x.y),
            l ?
            Object.assign({}, O, (((C = {})[y] = b ? "0" : ""), (C[v] = _ ? "0" : ""), (C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + g + "px)" : "translate3d(" + f + "px, " + g + "px, 0)"), C)) :
            Object.assign({}, O, (((e = {})[y] = b ? g + "px" : ""), (e[v] = _ ? f + "px" : ""), (e.transform = ""), e))
        );
    }
    const pe = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state,
                i = t.options,
                n = i.gpuAcceleration,
                s = void 0 === n || n,
                o = i.adaptive,
                r = void 0 === o || o,
                a = i.roundOffsets,
                l = void 0 === a || a,
                c = {
                    placement: Vt(e.placement),
                    variation: de(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: s,
                    isFixed: "fixed" === e.options.strategy
                };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, fe(Object.assign({}, c, {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: r,
                    roundOffsets: l
                })))),
                null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, fe(Object.assign({}, c, {
                    offsets: e.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l
                })))),
                (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-placement": e.placement
                }));
        },
        data: {},
    };
    var ge = {
        passive: !0
    };
    const me = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state,
                i = t.instance,
                n = t.options,
                s = n.scroll,
                o = void 0 === s || s,
                r = n.resize,
                a = void 0 === r || r,
                l = Bt(e.elements.popper),
                c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return (
                o &&
                c.forEach(function(t) {
                    t.addEventListener("scroll", i.update, ge);
                }),
                a && l.addEventListener("resize", i.update, ge),
                function() {
                    o &&
                        c.forEach(function(t) {
                            t.removeEventListener("scroll", i.update, ge);
                        }),
                        a && l.removeEventListener("resize", i.update, ge);
                }
            );
        },
        data: {},
    };
    var _e = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

    function be(t) {
        return t.replace(/left|right|bottom|top/g, function(t) {
            return _e[t];
        });
    }
    var ve = {
        start: "end",
        end: "start"
    };

    function ye(t) {
        return t.replace(/start|end/g, function(t) {
            return ve[t];
        });
    }

    function we(t) {
        var e = Bt(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        };
    }

    function Ae(t) {
        return Gt(ie(t)).left + we(t).scrollLeft;
    }

    function Ee(t) {
        var e = te(t),
            i = e.overflow,
            n = e.overflowX,
            s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
    }

    function Te(t) {
        return ["html", "body", "#document"].indexOf(Wt(t)) >= 0 ? t.ownerDocument.body : zt(t) && Ee(t) ? t : Te(ne(t));
    }

    function Ce(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Te(t),
            s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
            o = Bt(n),
            r = s ? [o].concat(o.visualViewport || [], Ee(n) ? n : []) : n,
            a = e.concat(r);
        return s ? a : a.concat(Ce(ne(r)));
    }

    function Oe(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        });
    }

    function xe(t, e, i) {
        return e === Tt ?
            Oe(
                (function(t, e) {
                    var i = Bt(t),
                        n = ie(t),
                        s = i.visualViewport,
                        o = n.clientWidth,
                        r = n.clientHeight,
                        a = 0,
                        l = 0;
                    if (s) {
                        (o = s.width), (r = s.height);
                        var c = Ut();
                        (c || (!c && "fixed" === e)) && ((a = s.offsetLeft), (l = s.offsetTop));
                    }
                    return {
                        width: o,
                        height: r,
                        x: a + Ae(t),
                        y: l
                    };
                })(t, i)
            ) :
            Ft(e) ?
            (function(t, e) {
                var i = Gt(t, !1, "fixed" === e);
                return (
                    (i.top = i.top + t.clientTop),
                    (i.left = i.left + t.clientLeft),
                    (i.bottom = i.top + t.clientHeight),
                    (i.right = i.left + t.clientWidth),
                    (i.width = t.clientWidth),
                    (i.height = t.clientHeight),
                    (i.x = i.left),
                    (i.y = i.top),
                    i
                );
            })(e, i) :
            Oe(
                (function(t) {
                    var e,
                        i = ie(t),
                        n = we(t),
                        s = null == (e = t.ownerDocument) ? void 0 : e.body,
                        o = Kt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                        r = Kt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                        a = -n.scrollLeft + Ae(t),
                        l = -n.scrollTop;
                    return "rtl" === te(s || i).direction && (a += Kt(i.clientWidth, s ? s.clientWidth : 0) - o), {
                        width: o,
                        height: r,
                        x: a,
                        y: l
                    };
                })(ie(t))
            );
    }

    function ke(t) {
        var e,
            i = t.reference,
            n = t.element,
            s = t.placement,
            o = s ? Vt(s) : null,
            r = s ? de(s) : null,
            a = i.x + i.width / 2 - n.width / 2,
            l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
            case gt:
                e = {
                    x: a,
                    y: i.y - n.height
                };
                break;
            case mt:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case _t:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case bt:
                e = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                };
        }
        var c = o ? re(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
                case wt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case At:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2);
            }
        }
        return e;
    }

    function Le(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = void 0 === n ? t.placement : n,
            o = i.strategy,
            r = void 0 === o ? t.strategy : o,
            a = i.boundary,
            l = void 0 === a ? Et : a,
            c = i.rootBoundary,
            h = void 0 === c ? Tt : c,
            d = i.elementContext,
            u = void 0 === d ? Ct : d,
            f = i.altBoundary,
            p = void 0 !== f && f,
            g = i.padding,
            m = void 0 === g ? 0 : g,
            _ = le("number" != typeof m ? m : ce(m, yt)),
            b = u === Ct ? Ot : Ct,
            v = t.rects.popper,
            y = t.elements[p ? b : u],
            w = (function(t, e, i, n) {
                var s =
                    "clippingParents" === e ?
                    (function(t) {
                        var e = Ce(ne(t)),
                            i = ["absolute", "fixed"].indexOf(te(t).position) >= 0 && zt(t) ? oe(t) : t;
                        return Ft(i) ?
                            e.filter(function(t) {
                                return Ft(t) && Zt(t, i) && "body" !== Wt(t);
                            }) :
                            [];
                    })(t) :
                    [].concat(e),
                    o = [].concat(s, [i]),
                    r = o[0],
                    a = o.reduce(function(e, i) {
                        var s = xe(t, i, n);
                        return (e.top = Kt(s.top, e.top)), (e.right = Qt(s.right, e.right)), (e.bottom = Qt(s.bottom, e.bottom)), (e.left = Kt(s.left, e.left)), e;
                    }, xe(t, r, n));
                return (a.width = a.right - a.left), (a.height = a.bottom - a.top), (a.x = a.left), (a.y = a.top), a;
            })(Ft(y) ? y : y.contextElement || ie(t.elements.popper), l, h, r),
            A = Gt(t.elements.reference),
            E = ke({
                reference: A,
                element: v,
                strategy: "absolute",
                placement: s
            }),
            T = Oe(Object.assign({}, v, E)),
            C = u === Ct ? T : A,
            O = {
                top: w.top - C.top + _.top,
                bottom: C.bottom - w.bottom + _.bottom,
                left: w.left - C.left + _.left,
                right: C.right - w.right + _.right
            },
            x = t.modifiersData.offset;
        if (u === Ct && x) {
            var k = x[s];
            Object.keys(O).forEach(function(t) {
                var e = [_t, mt].indexOf(t) >= 0 ? 1 : -1,
                    i = [gt, mt].indexOf(t) >= 0 ? "y" : "x";
                O[t] += k[i] * e;
            });
        }
        return O;
    }

    function De(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = i.boundary,
            o = i.rootBoundary,
            r = i.padding,
            a = i.flipVariations,
            l = i.allowedAutoPlacements,
            c = void 0 === l ? kt : l,
            h = de(n),
            d = h ?
            a ?
            xt :
            xt.filter(function(t) {
                return de(t) === h;
            }) :
            yt,
            u = d.filter(function(t) {
                return c.indexOf(t) >= 0;
            });
        0 === u.length && (u = d);
        var f = u.reduce(function(e, i) {
            return (e[i] = Le(t, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[Vt(i)]), e;
        }, {});
        return Object.keys(f).sort(function(t, e) {
            return f[t] - f[e];
        });
    }
    const Se = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state,
                i = t.options,
                n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (
                    var s = i.mainAxis,
                        o = void 0 === s || s,
                        r = i.altAxis,
                        a = void 0 === r || r,
                        l = i.fallbackPlacements,
                        c = i.padding,
                        h = i.boundary,
                        d = i.rootBoundary,
                        u = i.altBoundary,
                        f = i.flipVariations,
                        p = void 0 === f || f,
                        g = i.allowedAutoPlacements,
                        m = e.options.placement,
                        _ = Vt(m),
                        b =
                        l ||
                        (_ !== m && p ?
                            (function(t) {
                                if (Vt(t) === vt) return [];
                                var e = be(t);
                                return [ye(t), e, ye(e)];
                            })(m) :
                            [be(m)]),
                        v = [m].concat(b).reduce(function(t, i) {
                            return t.concat(Vt(i) === vt ? De(e, {
                                placement: i,
                                boundary: h,
                                rootBoundary: d,
                                padding: c,
                                flipVariations: p,
                                allowedAutoPlacements: g
                            }) : i);
                        }, []),
                        y = e.rects.reference,
                        w = e.rects.popper,
                        A = new Map(),
                        E = !0,
                        T = v[0],
                        C = 0; C < v.length; C++
                ) {
                    var O = v[C],
                        x = Vt(O),
                        k = de(O) === wt,
                        L = [gt, mt].indexOf(x) >= 0,
                        D = L ? "width" : "height",
                        S = Le(e, {
                            placement: O,
                            boundary: h,
                            rootBoundary: d,
                            altBoundary: u,
                            padding: c
                        }),
                        I = L ? (k ? _t : bt) : k ? mt : gt;
                    y[D] > w[D] && (I = be(I));
                    var N = be(I),
                        P = [];
                    if (
                        (o && P.push(S[x] <= 0),
                            a && P.push(S[I] <= 0, S[N] <= 0),
                            P.every(function(t) {
                                return t;
                            }))
                    ) {
                        (T = O), (E = !1);
                        break;
                    }
                    A.set(O, P);
                }
                if (E)
                    for (
                        var j = function(t) {
                                var e = v.find(function(e) {
                                    var i = A.get(e);
                                    if (i)
                                        return i.slice(0, t).every(function(t) {
                                            return t;
                                        });
                                });
                                if (e) return (T = e), "break";
                            },
                            M = p ? 3 : 1; M > 0 && "break" !== j(M); M--
                    );
                e.placement !== T && ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        },
    };

    function Ie(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        };
    }

    function Ne(t) {
        return [gt, _t, mt, bt].some(function(e) {
            return t[e] >= 0;
        });
    }
    const Pe = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(t) {
                var e = t.state,
                    i = t.name,
                    n = e.rects.reference,
                    s = e.rects.popper,
                    o = e.modifiersData.preventOverflow,
                    r = Le(e, {
                        elementContext: "reference"
                    }),
                    a = Le(e, {
                        altBoundary: !0
                    }),
                    l = Ie(r, n),
                    c = Ie(a, s, o),
                    h = Ne(l),
                    d = Ne(c);
                (e.modifiersData[i] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: h,
                    hasPopperEscaped: d
                }),
                (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-reference-hidden": h,
                    "data-popper-escaped": d
                }));
            },
        },
        je = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.offset,
                    o = void 0 === s ? [0, 0] : s,
                    r = kt.reduce(function(t, i) {
                        return (
                            (t[i] = (function(t, e, i) {
                                var n = Vt(t),
                                    s = [bt, gt].indexOf(n) >= 0 ? -1 : 1,
                                    o = "function" == typeof i ? i(Object.assign({}, e, {
                                        placement: t
                                    })) : i,
                                    r = o[0],
                                    a = o[1];
                                return (r = r || 0), (a = (a || 0) * s), [bt, _t].indexOf(n) >= 0 ? {
                                    x: a,
                                    y: r
                                } : {
                                    x: r,
                                    y: a
                                };
                            })(i, e.rects, o)),
                            t
                        );
                    }, {}),
                    a = r[e.placement],
                    l = a.x,
                    c = a.y;
                null != e.modifiersData.popperOffsets && ((e.modifiersData.popperOffsets.x += l), (e.modifiersData.popperOffsets.y += c)), (e.modifiersData[n] = r);
            },
        },
        Me = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(t) {
                var e = t.state,
                    i = t.name;
                e.modifiersData[i] = ke({
                    reference: e.rects.reference,
                    element: e.rects.popper,
                    strategy: "absolute",
                    placement: e.placement
                });
            },
            data: {},
        },
        He = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.mainAxis,
                    o = void 0 === s || s,
                    r = i.altAxis,
                    a = void 0 !== r && r,
                    l = i.boundary,
                    c = i.rootBoundary,
                    h = i.altBoundary,
                    d = i.padding,
                    u = i.tether,
                    f = void 0 === u || u,
                    p = i.tetherOffset,
                    g = void 0 === p ? 0 : p,
                    m = Le(e, {
                        boundary: l,
                        rootBoundary: c,
                        padding: d,
                        altBoundary: h
                    }),
                    _ = Vt(e.placement),
                    b = de(e.placement),
                    v = !b,
                    y = re(_),
                    w = "x" === y ? "y" : "x",
                    A = e.modifiersData.popperOffsets,
                    E = e.rects.reference,
                    T = e.rects.popper,
                    C = "function" == typeof g ? g(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : g,
                    O = "number" == typeof C ? {
                        mainAxis: C,
                        altAxis: C
                    } : Object.assign({
                        mainAxis: 0,
                        altAxis: 0
                    }, C),
                    x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
                    k = {
                        x: 0,
                        y: 0
                    };
                if (A) {
                    if (o) {
                        var L,
                            D = "y" === y ? gt : bt,
                            S = "y" === y ? mt : _t,
                            I = "y" === y ? "height" : "width",
                            N = A[y],
                            P = N + m[D],
                            j = N - m[S],
                            M = f ? -T[I] / 2 : 0,
                            H = b === wt ? E[I] : T[I],
                            $ = b === wt ? -T[I] : -E[I],
                            W = e.elements.arrow,
                            B = f && W ? Jt(W) : {
                                width: 0,
                                height: 0
                            },
                            F = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            },
                            z = F[D],
                            q = F[S],
                            R = ae(0, E[I], B[I]),
                            V = v ? E[I] / 2 - M - R - z - O.mainAxis : H - R - z - O.mainAxis,
                            K = v ? -E[I] / 2 + M + R + q + O.mainAxis : $ + R + q + O.mainAxis,
                            Q = e.elements.arrow && oe(e.elements.arrow),
                            X = Q ? ("y" === y ? Q.clientTop || 0 : Q.clientLeft || 0) : 0,
                            Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
                            U = N + K - Y,
                            G = ae(f ? Qt(P, N + V - Y - X) : P, N, f ? Kt(j, U) : j);
                        (A[y] = G), (k[y] = G - N);
                    }
                    if (a) {
                        var J,
                            Z = "x" === y ? gt : bt,
                            tt = "x" === y ? mt : _t,
                            et = A[w],
                            it = "y" === w ? "height" : "width",
                            nt = et + m[Z],
                            st = et - m[tt],
                            ot = -1 !== [gt, bt].indexOf(_),
                            rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
                            at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
                            lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
                            ct =
                            f && ot ?
                            (function(t, e, i) {
                                var n = ae(t, e, i);
                                return n > i ? i : n;
                            })(at, et, lt) :
                            ae(f ? at : nt, et, f ? lt : st);
                        (A[w] = ct), (k[w] = ct - et);
                    }
                    e.modifiersData[n] = k;
                }
            },
            requiresIfExists: ["offset"],
        };

    function $e(t, e, i) {
        void 0 === i && (i = !1);
        var n,
            s,
            o = zt(e),
            r =
            zt(e) &&
            (function(t) {
                var e = t.getBoundingClientRect(),
                    i = Xt(e.width) / t.offsetWidth || 1,
                    n = Xt(e.height) / t.offsetHeight || 1;
                return 1 !== i || 1 !== n;
            })(e),
            a = ie(e),
            l = Gt(t, r, i),
            c = {
                scrollLeft: 0,
                scrollTop: 0
            },
            h = {
                x: 0,
                y: 0
            };
        return (
            (o || (!o && !i)) &&
            (("body" !== Wt(e) || Ee(a)) && (c = (n = e) !== Bt(n) && zt(n) ? {
                    scrollLeft: (s = n).scrollLeft,
                    scrollTop: s.scrollTop
                } : we(n)),
                zt(e) ? (((h = Gt(e, !0)).x += e.clientLeft), (h.y += e.clientTop)) : a && (h.x = Ae(a))), {
                x: l.left + c.scrollLeft - h.x,
                y: l.top + c.scrollTop - h.y,
                width: l.width,
                height: l.height
            }
        );
    }

    function We(t) {
        var e = new Map(),
            i = new Set(),
            n = [];

        function s(t) {
            i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                    if (!i.has(t)) {
                        var n = e.get(t);
                        n && s(n);
                    }
                }),
                n.push(t);
        }
        return (
            t.forEach(function(t) {
                e.set(t.name, t);
            }),
            t.forEach(function(t) {
                i.has(t.name) || s(t);
            }),
            n
        );
    }
    var Be = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function Fe() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return !e.some(function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
        });
    }

    function ze(t) {
        void 0 === t && (t = {});
        var e = t,
            i = e.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = e.defaultOptions,
            o = void 0 === s ? Be : s;
        return function(t, e, i) {
            void 0 === i && (i = o);
            var s,
                r,
                a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, Be, o),
                    modifiersData: {},
                    elements: {
                        reference: t,
                        popper: e
                    },
                    attributes: {},
                    styles: {}
                },
                l = [],
                c = !1,
                h = {
                    state: a,
                    setOptions: function(i) {
                        var s = "function" == typeof i ? i(a.options) : i;
                        d(), (a.options = Object.assign({}, o, a.options, s)), (a.scrollParents = {
                            reference: Ft(t) ? Ce(t) : t.contextElement ? Ce(t.contextElement) : [],
                            popper: Ce(e)
                        });
                        var r,
                            c,
                            u = (function(t) {
                                var e = We(t);
                                return $t.reduce(function(t, i) {
                                    return t.concat(
                                        e.filter(function(t) {
                                            return t.phase === i;
                                        })
                                    );
                                }, []);
                            })(
                                ((r = [].concat(n, a.options.modifiers)),
                                    (c = r.reduce(function(t, e) {
                                        var i = t[e.name];
                                        return (t[e.name] = i ? Object.assign({}, i, e, {
                                            options: Object.assign({}, i.options, e.options),
                                            data: Object.assign({}, i.data, e.data)
                                        }) : e), t;
                                    }, {})),
                                    Object.keys(c).map(function(t) {
                                        return c[t];
                                    }))
                            );
                        return (
                            (a.orderedModifiers = u.filter(function(t) {
                                return t.enabled;
                            })),
                            a.orderedModifiers.forEach(function(t) {
                                var e = t.name,
                                    i = t.options,
                                    n = void 0 === i ? {} : i,
                                    s = t.effect;
                                if ("function" == typeof s) {
                                    var o = s({
                                        state: a,
                                        name: e,
                                        instance: h,
                                        options: n
                                    });
                                    l.push(o || function() {});
                                }
                            }),
                            h.update()
                        );
                    },
                    forceUpdate: function() {
                        if (!c) {
                            var t = a.elements,
                                e = t.reference,
                                i = t.popper;
                            if (Fe(e, i)) {
                                (a.rects = {
                                    reference: $e(e, oe(i), "fixed" === a.options.strategy),
                                    popper: Jt(i)
                                }),
                                (a.reset = !1),
                                (a.placement = a.options.placement),
                                a.orderedModifiers.forEach(function(t) {
                                    return (a.modifiersData[t.name] = Object.assign({}, t.data));
                                });
                                for (var n = 0; n < a.orderedModifiers.length; n++)
                                    if (!0 !== a.reset) {
                                        var s = a.orderedModifiers[n],
                                            o = s.fn,
                                            r = s.options,
                                            l = void 0 === r ? {} : r,
                                            d = s.name;
                                        "function" == typeof o && (a = o({
                                            state: a,
                                            options: l,
                                            name: d,
                                            instance: h
                                        }) || a);
                                    } else(a.reset = !1), (n = -1);
                            }
                        }
                    },
                    update:
                        ((s = function() {
                                return new Promise(function(t) {
                                    h.forceUpdate(), t(a);
                                });
                            }),
                            function() {
                                return (
                                    r ||
                                    (r = new Promise(function(t) {
                                        Promise.resolve().then(function() {
                                            (r = void 0), t(s());
                                        });
                                    })),
                                    r
                                );
                            }),
                    destroy: function() {
                        d(), (c = !0);
                    },
                };
            if (!Fe(t, e)) return h;

            function d() {
                l.forEach(function(t) {
                        return t();
                    }),
                    (l = []);
            }
            return (
                h.setOptions(i).then(function(t) {
                    !c && i.onFirstUpdate && i.onFirstUpdate(t);
                }),
                h
            );
        };
    }
    var qe = ze(),
        Re = ze({
            defaultModifiers: [me, Me, pe, Rt]
        }),
        Ve = ze({
            defaultModifiers: [me, Me, pe, Rt, je, Se, He, he, Pe]
        });
    const Ke = Object.freeze(
            Object.defineProperty({
                    __proto__: null,
                    popperGenerator: ze,
                    detectOverflow: Le,
                    createPopperBase: qe,
                    createPopper: Ve,
                    createPopperLite: Re,
                    top: gt,
                    bottom: mt,
                    right: _t,
                    left: bt,
                    auto: vt,
                    basePlacements: yt,
                    start: wt,
                    end: At,
                    clippingParents: Et,
                    viewport: Tt,
                    popper: Ct,
                    reference: Ot,
                    variationPlacements: xt,
                    placements: kt,
                    beforeRead: Lt,
                    read: Dt,
                    afterRead: St,
                    beforeMain: It,
                    main: Nt,
                    afterMain: Pt,
                    beforeWrite: jt,
                    write: Mt,
                    afterWrite: Ht,
                    modifierPhases: $t,
                    applyStyles: Rt,
                    arrow: he,
                    computeStyles: pe,
                    eventListeners: me,
                    flip: Se,
                    hide: Pe,
                    offset: je,
                    popperOffsets: Me,
                    preventOverflow: He,
                },
                Symbol.toStringTag, {
                    value: "Module"
                }
            )
        ),
        Qe = "dropdown",
        Xe = "ArrowUp",
        Ye = "ArrowDown",
        Ue = "click.bs.dropdown.data-api",
        Ge = "keydown.bs.dropdown.data-api",
        Je = "show",
        Ze = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        ti = `${Ze}.show`,
        ei = ".dropdown-menu",
        ii = p() ? "top-end" : "top-start",
        ni = p() ? "top-start" : "top-end",
        si = p() ? "bottom-end" : "bottom-start",
        oi = p() ? "bottom-start" : "bottom-end",
        ri = p() ? "left-start" : "right-start",
        ai = p() ? "right-start" : "left-start",
        li = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle"
        },
        ci = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)"
        };
    class hi extends z {
        constructor(t, e) {
            super(t, e), (this._popper = null), (this._parent = this._element.parentNode), (this._menu = Q.next(this._element, ei)[0] || Q.prev(this._element, ei)[0] || Q.findOne(ei, this._parent)), (this._inNavbar = this._detectNavbar());
        }
        static get Default() {
            return li;
        }
        static get DefaultType() {
            return ci;
        }
        static get NAME() {
            return Qe;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (l(this._element) || this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            if (!P.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
                if ((this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")))
                    for (const t of [].concat(...document.body.children)) P.on(t, "mouseover", h);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Je), this._element.classList.add(Je), P.trigger(this._element, "shown.bs.dropdown", t);
            }
        }
        hide() {
            if (l(this._element) || !this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
        }
        _completeHide(t) {
            if (!P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                    for (const t of [].concat(...document.body.children)) P.off(t, "mouseover", h);
                this._popper && this._popper.destroy(),
                    this._menu.classList.remove(Je),
                    this._element.classList.remove(Je),
                    this._element.setAttribute("aria-expanded", "false"),
                    B.removeDataAttribute(this._menu, "popper"),
                    P.trigger(this._element, "hidden.bs.dropdown", t);
            }
        }
        _getConfig(t) {
            if ("object" == typeof(t = super._getConfig(t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw new TypeError(`${Qe.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t;
        }
        _createPopper() {
            if (void 0 === Ke) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? (t = this._parent) : o(this._config.reference) ? (t = r(this._config.reference)) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = Ve(t, this._menu, e);
        }
        _isShown() {
            return this._menu.classList.contains(Je);
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return ri;
            if (t.classList.contains("dropstart")) return ai;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? (e ? ni : ii) : e ? oi : si;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map((t) => Number.parseInt(t, 10)) : "function" == typeof t ? (e) => t(e, this._element) : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    },
                ],
            };
            return (
                (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"), (t.modifiers = [{
                    name: "applyStyles",
                    enabled: !1
                }])), { ...t,
                    ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig)
                }
            );
        }
        _selectMenuItem({
            key: t,
            target: e
        }) {
            const i = Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t) => a(t));
            i.length && b(i, e, t === Ye, !i.includes(e)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = hi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(t) {
            if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
            const e = Q.find(ti);
            for (const i of e) {
                const e = hi.getInstance(i);
                if (!e || !1 === e._config.autoClose) continue;
                const n = t.composedPath(),
                    s = n.includes(e._menu);
                if (n.includes(e._element) || ("inside" === e._config.autoClose && !s) || ("outside" === e._config.autoClose && s)) continue;
                if (e._menu.contains(t.target) && (("keyup" === t.type && "Tab" === t.key) || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                const o = {
                    relatedTarget: e._element
                };
                "click" === t.type && (o.clickEvent = t), e._completeHide(o);
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName),
                i = "Escape" === t.key,
                n = [Xe, Ye].includes(t.key);
            if (!n && !i) return;
            if (e && !i) return;
            t.preventDefault();
            const s = this.matches(Ze) ? this : Q.prev(this, Ze)[0] || Q.next(this, Ze)[0] || Q.findOne(Ze, t.delegateTarget.parentNode),
                o = hi.getOrCreateInstance(s);
            if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
        }
    }
    P.on(document, Ge, Ze, hi.dataApiKeydownHandler),
        P.on(document, Ge, ei, hi.dataApiKeydownHandler),
        P.on(document, Ue, hi.clearMenus),
        P.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus),
        P.on(document, Ue, Ze, function(t) {
            t.preventDefault(), hi.getOrCreateInstance(this).toggle();
        }),
        g(hi);
    const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        ui = ".sticky-top",
        fi = "padding-right",
        pi = "margin-right";
    class gi {
        constructor() {
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, fi, (e) => e + t), this._setElementAttributes(di, fi, (e) => e + t), this._setElementAttributes(ui, pi, (e) => e - t);
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, fi), this._resetElementAttributes(di, fi), this._resetElementAttributes(ui, pi);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), (this._element.style.overflow = "hidden");
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t) => {
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
            });
        }
        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && B.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t) => {
                const i = B.getDataAttribute(t, e);
                null !== i ? (B.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
            });
        }
        _applyManipulationCallback(t, e) {
            if (o(t)) e(t);
            else
                for (const i of Q.find(t, this._element)) e(i);
        }
    }
    const mi = "show",
        _i = "mousedown.bs.backdrop",
        bi = {
            className: "modal-backdrop",
            clickCallback: null,
            isAnimated: !1,
            isVisible: !0,
            rootElement: "body"
        },
        vi = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)"
        };
    class yi extends F {
        constructor(t) {
            super(), (this._config = this._getConfig(t)), (this._isAppended = !1), (this._element = null);
        }
        static get Default() {
            return bi;
        }
        static get DefaultType() {
            return vi;
        }
        static get NAME() {
            return "backdrop";
        }
        show(t) {
            if (!this._config.isVisible) return void m(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && d(e),
                e.classList.add(mi),
                this._emulateAnimation(() => {
                    m(t);
                });
        }
        hide(t) {
            this._config.isVisible ?
                (this._getElement().classList.remove(mi),
                    this._emulateAnimation(() => {
                        this.dispose(), m(t);
                    })) :
                m(t);
        }
        dispose() {
            this._isAppended && (P.off(this._element, _i), this._element.remove(), (this._isAppended = !1));
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                (t.className = this._config.className), this._config.isAnimated && t.classList.add("fade"), (this._element = t);
            }
            return this._element;
        }
        _configAfterMerge(t) {
            return (t.rootElement = r(t.rootElement)), t;
        }
        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t),
                P.on(t, _i, () => {
                    m(this._config.clickCallback);
                }),
                (this._isAppended = !0);
        }
        _emulateAnimation(t) {
            _(t, this._getElement(), this._config.isAnimated);
        }
    }
    const wi = ".bs.focustrap",
        Ai = "backward",
        Ei = {
            autofocus: !0,
            trapElement: null
        },
        Ti = {
            autofocus: "boolean",
            trapElement: "element"
        };
    class Ci extends F {
        constructor(t) {
            super(), (this._config = this._getConfig(t)), (this._isActive = !1), (this._lastTabNavDirection = null);
        }
        static get Default() {
            return Ei;
        }
        static get DefaultType() {
            return Ti;
        }
        static get NAME() {
            return "focustrap";
        }
        activate() {
            this._isActive ||
                (this._config.autofocus && this._config.trapElement.focus(),
                    P.off(document, wi),
                    P.on(document, "focusin.bs.focustrap", (t) => this._handleFocusin(t)),
                    P.on(document, "keydown.tab.bs.focustrap", (t) => this._handleKeydown(t)),
                    (this._isActive = !0));
        }
        deactivate() {
            this._isActive && ((this._isActive = !1), P.off(document, wi));
        }
        _handleFocusin(t) {
            const {
                trapElement: e
            } = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            const i = Q.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === Ai ? i[i.length - 1].focus() : i[0].focus();
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Ai : "forward");
        }
    }
    const Oi = "hidden.bs.modal",
        xi = "show.bs.modal",
        ki = "modal-open",
        Li = "show",
        Di = "modal-static",
        Si = {
            backdrop: !0,
            focus: !0,
            keyboard: !0
        },
        Ii = {
            backdrop: "(boolean|string)",
            focus: "boolean",
            keyboard: "boolean"
        };
    class Ni extends z {
        constructor(t, e) {
            super(t, e),
                (this._dialog = Q.findOne(".modal-dialog", this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new gi()),
                this._addEventListeners();
        }
        static get Default() {
            return Si;
        }
        static get DefaultType() {
            return Ii;
        }
        static get NAME() {
            return "modal";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown ||
                this._isTransitioning ||
                P.trigger(this._element, xi, {
                    relatedTarget: t
                }).defaultPrevented ||
                ((this._isShown = !0), (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(ki), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
        }
        hide() {
            this._isShown &&
                !this._isTransitioning &&
                (P.trigger(this._element, "hide.bs.modal").defaultPrevented ||
                    ((this._isShown = !1), (this._isTransitioning = !0), this._focustrap.deactivate(), this._element.classList.remove(Li), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
        }
        dispose() {
            for (const t of [window, this._dialog]) P.off(t, ".bs.modal");
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new yi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            });
        }
        _initializeFocusTrap() {
            return new Ci({
                trapElement: this._element
            });
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0);
            const e = Q.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0),
                d(this._element),
                this._element.classList.add(Li),
                this._queueCallback(
                    () => {
                        this._config.focus && this._focustrap.activate(), (this._isTransitioning = !1), P.trigger(this._element, "shown.bs.modal", {
                            relatedTarget: t
                        });
                    },
                    this._dialog,
                    this._isAnimated()
                );
        }
        _addEventListeners() {
            P.on(this._element, "keydown.dismiss.bs.modal", (t) => {
                    if ("Escape" === t.key) return this._config.keyboard ? (t.preventDefault(), void this.hide()) : void this._triggerBackdropTransition();
                }),
                P.on(window, "resize.bs.modal", () => {
                    this._isShown && !this._isTransitioning && this._adjustDialog();
                }),
                P.on(this._element, "mousedown.dismiss.bs.modal", (t) => {
                    P.one(this._element, "click.dismiss.bs.modal", (e) => {
                        this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
                    });
                });
        }
        _hideModal() {
            (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                    document.body.classList.remove(ki), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, Oi);
                });
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._element.style.overflowY;
            "hidden" === e ||
                this._element.classList.contains(Di) ||
                (t || (this._element.style.overflowY = "hidden"),
                    this._element.classList.add(Di),
                    this._queueCallback(() => {
                        this._element.classList.remove(Di),
                            this._queueCallback(() => {
                                this._element.style.overflowY = e;
                            }, this._dialog);
                    }, this._dialog),
                    this._element.focus());
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                i = e > 0;
            if (i && !t) {
                const t = p() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`;
            }
            if (!i && t) {
                const t = p() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`;
            }
        }
        _resetAdjustments() {
            (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
        }
        static jQueryInterface(t, e) {
            return this.each(function() {
                const i = Ni.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e);
                }
            });
        }
    }
    P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t) {
            const e = n(this);
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                P.one(e, xi, (t) => {
                    t.defaultPrevented ||
                        P.one(e, Oi, () => {
                            a(this) && this.focus();
                        });
                });
            const i = Q.findOne(".modal.show");
            i && Ni.getInstance(i).hide(), Ni.getOrCreateInstance(e).toggle(this);
        }),
        q(Ni),
        g(Ni);
    const Pi = "show",
        ji = "showing",
        Mi = "hiding",
        Hi = ".offcanvas.show",
        $i = "hidePrevented.bs.offcanvas",
        Wi = "hidden.bs.offcanvas",
        Bi = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        Fi = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            scroll: "boolean"
        };
    class zi extends z {
        constructor(t, e) {
            super(t, e), (this._isShown = !1), (this._backdrop = this._initializeBackDrop()), (this._focustrap = this._initializeFocusTrap()), this._addEventListeners();
        }
        static get Default() {
            return Bi;
        }
        static get DefaultType() {
            return Fi;
        }
        static get NAME() {
            return "offcanvas";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown ||
                P.trigger(this._element, "show.bs.offcanvas", {
                    relatedTarget: t
                }).defaultPrevented ||
                ((this._isShown = !0),
                    this._backdrop.show(),
                    this._config.scroll || new gi().hide(),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    this._element.classList.add(ji),
                    this._queueCallback(
                        () => {
                            (this._config.scroll && !this._config.backdrop) || this._focustrap.activate(),
                                this._element.classList.add(Pi),
                                this._element.classList.remove(ji),
                                P.trigger(this._element, "shown.bs.offcanvas", {
                                    relatedTarget: t
                                });
                        },
                        this._element, !0
                    ));
        }
        hide() {
            this._isShown &&
                (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
                    (this._focustrap.deactivate(),
                        this._element.blur(),
                        (this._isShown = !1),
                        this._element.classList.add(Mi),
                        this._backdrop.hide(),
                        this._queueCallback(
                            () => {
                                this._element.classList.remove(Pi, Mi), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new gi().reset(), P.trigger(this._element, Wi);
                            },
                            this._element, !0
                        )));
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new yi({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ?
                    () => {
                        "static" !== this._config.backdrop ? this.hide() : P.trigger(this._element, $i);
                    } :
                    null,
            });
        }
        _initializeFocusTrap() {
            return new Ci({
                trapElement: this._element
            });
        }
        _addEventListeners() {
            P.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : P.trigger(this._element, $i));
            });
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = zi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t) {
            const e = n(this);
            if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this))) return;
            P.one(e, Wi, () => {
                a(this) && this.focus();
            });
            const i = Q.findOne(Hi);
            i && i !== e && zi.getInstance(i).hide(), zi.getOrCreateInstance(e).toggle(this);
        }),
        P.on(window, "load.bs.offcanvas.data-api", () => {
            for (const t of Q.find(Hi)) zi.getOrCreateInstance(t).show();
        }),
        P.on(window, "resize.bs.offcanvas", () => {
            for (const t of Q.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && zi.getOrCreateInstance(t).hide();
        }),
        q(zi),
        g(zi);
    const qi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Ri = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        Vi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        Ki = (t, e) => {
            const i = t.nodeName.toLowerCase();
            return e.includes(i) ? !qi.has(i) || Boolean(Ri.test(t.nodeValue) || Vi.test(t.nodeValue)) : e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
        },
        Qi = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        },
        Xi = {
            allowList: Qi,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>"
        },
        Yi = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string"
        },
        Ui = {
            entry: "(string|element|function|null)",
            selector: "(string|element)"
        };
    class Gi extends F {
        constructor(t) {
            super(), (this._config = this._getConfig(t));
        }
        static get Default() {
            return Xi;
        }
        static get DefaultType() {
            return Yi;
        }
        static get NAME() {
            return "TemplateFactory";
        }
        getContent() {
            return Object.values(this._config.content)
                .map((t) => this._resolvePossibleFunction(t))
                .filter(Boolean);
        }
        hasContent() {
            return this.getContent().length > 0;
        }
        changeContent(t) {
            return this._checkContent(t), (this._config.content = { ...this._config.content,
                ...t
            }), this;
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e);
            const e = t.children[0],
                i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")), e;
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content);
        }
        _checkContent(t) {
            for (const [e, i] of Object.entries(t)) super._typeCheckConfig({
                selector: e,
                entry: i
            }, Ui);
        }
        _setContent(t, e, i) {
            const n = Q.findOne(i, t);
            n && ((e = this._resolvePossibleFunction(e)) ? (o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? (n.innerHTML = this._maybeSanitize(e)) : (n.textContent = e)) : n.remove());
        }
        _maybeSanitize(t) {
            return this._config.sanitize ?
                (function(t, e, i) {
                    if (!t.length) return t;
                    if (i && "function" == typeof i) return i(t);
                    const n = new window.DOMParser().parseFromString(t, "text/html"),
                        s = [].concat(...n.body.querySelectorAll("*"));
                    for (const t of s) {
                        const i = t.nodeName.toLowerCase();
                        if (!Object.keys(e).includes(i)) {
                            t.remove();
                            continue;
                        }
                        const n = [].concat(...t.attributes),
                            s = [].concat(e["*"] || [], e[i] || []);
                        for (const e of n) Ki(e, s) || t.removeAttribute(e.nodeName);
                    }
                    return n.body.innerHTML;
                })(t, this._config.allowList, this._config.sanitizeFn) :
                t;
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t(this) : t;
        }
        _putElementInTemplate(t, e) {
            if (this._config.html) return (e.innerHTML = ""), void e.append(t);
            e.textContent = t.textContent;
        }
    }
    const Ji = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Zi = "fade",
        tn = "show",
        en = ".modal",
        nn = "hide.bs.modal",
        sn = "hover",
        on = "focus",
        rn = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: p() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: p() ? "right" : "left"
        },
        an = {
            allowList: Qi,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 0],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus",
        },
        ln = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
        };
    class cn extends z {
        constructor(t, e) {
            if (void 0 === Ke) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._isHovered = null),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._templateFactory = null),
                (this._newContent = null),
                (this.tip = null),
                this._setListeners(),
                this._config.selector || this._fixTitle();
        }
        static get Default() {
            return an;
        }
        static get DefaultType() {
            return ln;
        }
        static get NAME() {
            return "tooltip";
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle() {
            this._isEnabled && ((this._activeTrigger.click = !this._activeTrigger.click), this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
            clearTimeout(this._timeout),
                P.off(this._element.closest(en), nn, this._hideModalHandler),
                this.tip && this.tip.remove(),
                this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
                this._disposePopper(),
                super.dispose();
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = P.trigger(this._element, this.constructor.eventName("show")),
                e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this.tip && (this.tip.remove(), (this.tip = null));
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const {
                container: n
            } = this._config;
            if (
                (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), P.trigger(this._element, this.constructor.eventName("inserted"))),
                    this._popper ? this._popper.update() : (this._popper = this._createPopper(i)),
                    i.classList.add(tn),
                    "ontouchstart" in document.documentElement)
            )
                for (const t of [].concat(...document.body.children)) P.on(t, "mouseover", h);
            this._queueCallback(
                () => {
                    P.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), (this._isHovered = !1);
                },
                this.tip,
                this._isAnimated()
            );
        }
        hide() {
            if (!this._isShown()) return;
            if (P.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) return;
            const t = this._getTipElement();
            if ((t.classList.remove(tn), "ontouchstart" in document.documentElement))
                for (const t of [].concat(...document.body.children)) P.off(t, "mouseover", h);
            (this._activeTrigger.click = !1),
            (this._activeTrigger.focus = !1),
            (this._activeTrigger.hover = !1),
            (this._isHovered = null),
            this._queueCallback(
                () => {
                    this._isWithActiveTrigger() || (this._isHovered || t.remove(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.eventName("hidden")), this._disposePopper());
                },
                this.tip,
                this._isAnimated()
            );
        }
        update() {
            this._popper && this._popper.update();
        }
        _isWithContent() {
            return Boolean(this._getTitle());
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(Zi, tn), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = ((t) => {
                do {
                    t += Math.floor(1e6 * Math.random());
                } while (document.getElementById(t));
                return t;
            })(this.constructor.NAME).toString();
            return e.setAttribute("id", i), this._isAnimated() && e.classList.add(Zi), e;
        }
        setContent(t) {
            (this._newContent = t), this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(t) {
            return (
                this._templateFactory ? this._templateFactory.changeContent(t) : (this._templateFactory = new Gi({ ...this._config,
                    content: t,
                    extraClass: this._resolvePossibleFunction(this._config.customClass)
                })), this._templateFactory
            );
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            };
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
            return this._config.animation || (this.tip && this.tip.classList.contains(Zi));
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(tn);
        }
        _createPopper(t) {
            const e = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement,
                i = rn[e.toUpperCase()];
            return Ve(this._element, t, this._getPopperConfig(i));
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map((t) => Number.parseInt(t, 10)) : "function" == typeof t ? (e) => t(e, this._element) : t;
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t;
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    },
                    {
                        name: "preSetPlacement",
                        enabled: !0,
                        phase: "beforeMain",
                        fn: (t) => {
                            this._getTipElement().setAttribute("data-popper-placement", t.state.placement);
                        },
                    },
                ],
            };
            return { ...e,
                ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig)
            };
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)
                if ("click" === e)
                    P.on(this._element, this.constructor.eventName("click"), this._config.selector, (t) => {
                        this._initializeOnDelegatedTarget(t).toggle();
                    });
                else if ("manual" !== e) {
                const t = e === sn ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                    i = e === sn ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                P.on(this._element, t, this._config.selector, (t) => {
                        const e = this._initializeOnDelegatedTarget(t);
                        (e._activeTrigger["focusin" === t.type ? on : sn] = !0), e._enter();
                    }),
                    P.on(this._element, i, this._config.selector, (t) => {
                        const e = this._initializeOnDelegatedTarget(t);
                        (e._activeTrigger["focusout" === t.type ? on : sn] = e._element.contains(t.relatedTarget)), e._leave();
                    });
            }
            (this._hideModalHandler = () => {
                this._element && this.hide();
            }),
            P.on(this._element.closest(en), nn, this._hideModalHandler);
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
        }
        _enter() {
            this._isShown() || this._isHovered ?
                (this._isHovered = !0) :
                ((this._isHovered = !0),
                    this._setTimeout(() => {
                        this._isHovered && this.show();
                    }, this._config.delay.show));
        }
        _leave() {
            this._isWithActiveTrigger() ||
                ((this._isHovered = !1),
                    this._setTimeout(() => {
                        this._isHovered || this.hide();
                    }, this._config.delay.hide));
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(t) {
            const e = B.getDataAttributes(this._element);
            for (const t of Object.keys(e)) Ji.has(t) && delete e[t];
            return (t = { ...e,
                ...("object" == typeof t && t ? t : {})
            }), (t = this._mergeConfigObj(t)), (t = this._configAfterMerge(t)), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return (
                (t.container = !1 === t.container ? document.body : r(t.container)),
                "number" == typeof t.delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }),
                "number" == typeof t.title && (t.title = t.title.toString()),
                "number" == typeof t.content && (t.content = t.content.toString()),
                t
            );
        }
        _getDelegateConfig() {
            const t = {};
            for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return (t.selector = !1), (t.trigger = "manual"), t;
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), (this._popper = null));
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = cn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    g(cn);
    const hn = {
            ...cn.Default,
            content: "",
            offset: [0, 8],
            placement: "right",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            trigger: "click",
        },
        dn = { ...cn.DefaultType,
            content: "(null|string|element|function)"
        };
    class un extends cn {
        static get Default() {
            return hn;
        }
        static get DefaultType() {
            return dn;
        }
        static get NAME() {
            return "popover";
        }
        _isWithContent() {
            return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            };
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = un.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    g(un);
    const fn = "click.bs.scrollspy",
        pn = "active",
        gn = "[href]",
        mn = {
            offset: null,
            rootMargin: "0px 0px -25%",
            smoothScroll: !1,
            target: null,
            threshold: [0.1, 0.5, 1]
        },
        _n = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element",
            threshold: "array"
        };
    class bn extends z {
        constructor(t, e) {
            super(t, e),
                (this._targetLinks = new Map()),
                (this._observableSections = new Map()),
                (this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element),
                (this._activeTarget = null),
                (this._observer = null),
                (this._previousScrollData = {
                    visibleEntryTop: 0,
                    parentScrollTop: 0
                }),
                this.refresh();
        }
        static get Default() {
            return mn;
        }
        static get DefaultType() {
            return _n;
        }
        static get NAME() {
            return "scrollspy";
        }
        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : (this._observer = this._getNewObserver());
            for (const t of this._observableSections.values()) this._observer.observe(t);
        }
        dispose() {
            this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(t) {
            return (t.target = r(t.target) || document.body), (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin), "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t) => Number.parseFloat(t))), t;
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll &&
                (P.off(this._config.target, fn),
                    P.on(this._config.target, fn, gn, (t) => {
                        const e = this._observableSections.get(t.target.hash);
                        if (e) {
                            t.preventDefault();
                            const i = this._rootElement || window,
                                n = e.offsetTop - this._element.offsetTop;
                            if (i.scrollTo) return void i.scrollTo({
                                top: n,
                                behavior: "smooth"
                            });
                            i.scrollTop = n;
                        }
                    }));
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver((t) => this._observerCallback(t), t);
        }
        _observerCallback(t) {
            const e = (t) => this._targetLinks.get(`#${t.target.id}`),
                i = (t) => {
                    (this._previousScrollData.visibleEntryTop = t.target.offsetTop), this._process(e(t));
                },
                n = (this._rootElement || document.documentElement).scrollTop,
                s = n >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n;
            for (const o of t) {
                if (!o.isIntersecting) {
                    (this._activeTarget = null), this._clearActiveClass(e(o));
                    continue;
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (s && t) {
                    if ((i(o), !n)) return;
                } else s || t || i(o);
            }
        }
        _initializeTargetsAndObservables() {
            (this._targetLinks = new Map()), (this._observableSections = new Map());
            const t = Q.find(gn, this._config.target);
            for (const e of t) {
                if (!e.hash || l(e)) continue;
                const t = Q.findOne(e.hash, this._element);
                a(t) && (this._targetLinks.set(e.hash, e), this._observableSections.set(e.hash, t));
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target), (this._activeTarget = t), t.classList.add(pn), this._activateParents(t), P.trigger(this._element, "activate.bs.scrollspy", {
                relatedTarget: t
            }));
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item")) Q.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(pn);
            else
                for (const e of Q.parents(t, ".nav, .list-group"))
                    for (const t of Q.prev(e, ".nav-link, .nav-item > .nav-link, .list-group-item")) t.classList.add(pn);
        }
        _clearActiveClass(t) {
            t.classList.remove(pn);
            const e = Q.find("[href].active", t);
            for (const t of e) t.classList.remove(pn);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = bn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    P.on(window, "load.bs.scrollspy.data-api", () => {
            for (const t of Q.find('[data-bs-spy="scroll"]')) bn.getOrCreateInstance(t);
        }),
        g(bn);
    const vn = "ArrowLeft",
        yn = "ArrowRight",
        wn = "ArrowUp",
        An = "ArrowDown",
        En = "active",
        Tn = "fade",
        Cn = "show",
        On = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        xn = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${On}`;
    class kn extends z {
        constructor(t) {
            super(t),
                (this._parent = this._element.closest('.list-group, .nav, [role="tablist"]')),
                this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), P.on(this._element, "keydown.bs.tab", (t) => this._keydown(t)));
        }
        static get NAME() {
            return "tab";
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(),
                i = e ? P.trigger(e, "hide.bs.tab", {
                    relatedTarget: t
                }) : null;
            P.trigger(t, "show.bs.tab", {
                relatedTarget: e
            }).defaultPrevented || (i && i.defaultPrevented) || (this._deactivate(e, t), this._activate(t, e));
        }
        _activate(t, e) {
            t &&
                (t.classList.add(En),
                    this._activate(n(t)),
                    this._queueCallback(
                        () => {
                            "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), P.trigger(t, "shown.bs.tab", {
                                relatedTarget: e
                            })) : t.classList.add(Cn);
                        },
                        t,
                        t.classList.contains(Tn)
                    ));
        }
        _deactivate(t, e) {
            t &&
                (t.classList.remove(En),
                    t.blur(),
                    this._deactivate(n(t)),
                    this._queueCallback(
                        () => {
                            "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), P.trigger(t, "hidden.bs.tab", {
                                relatedTarget: e
                            })) : t.classList.remove(Cn);
                        },
                        t,
                        t.classList.contains(Tn)
                    ));
        }
        _keydown(t) {
            if (![vn, yn, wn, An].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = [yn, An].includes(t.key),
                i = b(
                    this._getChildren().filter((t) => !l(t)),
                    t.target,
                    e, !0
                );
            i && (i.focus({
                preventScroll: !0
            }), kn.getOrCreateInstance(i).show());
        }
        _getChildren() {
            return Q.find(xn, this._parent);
        }
        _getActiveElem() {
            return this._getChildren().find((t) => this._elemIsActive(t)) || null;
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e) this._setInitialAttributesOnChild(t);
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t),
                i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e),
                i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
                e || t.setAttribute("tabindex", "-1"),
                this._setAttributeIfNotExists(t, "role", "tab"),
                this._setInitialAttributesOnTargetPanel(t);
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = n(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`));
        }
        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown")) return;
            const n = (t, n) => {
                const s = Q.findOne(t, i);
                s && s.classList.toggle(n, e);
            };
            n(".dropdown-toggle", En), n(".dropdown-menu", Cn), i.setAttribute("aria-expanded", e);
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i);
        }
        _elemIsActive(t) {
            return t.classList.contains(En);
        }
        _getInnerElement(t) {
            return t.matches(xn) ? t : Q.findOne(xn, t);
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = kn.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    P.on(document, "click.bs.tab", On, function(t) {
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || kn.getOrCreateInstance(this).show();
        }),
        P.on(window, "load.bs.tab", () => {
            for (const t of Q.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) kn.getOrCreateInstance(t);
        }),
        g(kn);
    const Ln = "hide",
        Dn = "show",
        Sn = "showing",
        In = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Nn = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        };
    class Pn extends z {
        constructor(t, e) {
            super(t, e), (this._timeout = null), (this._hasMouseInteraction = !1), (this._hasKeyboardInteraction = !1), this._setListeners();
        }
        static get Default() {
            return Nn;
        }
        static get DefaultType() {
            return In;
        }
        static get NAME() {
            return "toast";
        }
        show() {
            P.trigger(this._element, "show.bs.toast").defaultPrevented ||
                (this._clearTimeout(),
                    this._config.animation && this._element.classList.add("fade"),
                    this._element.classList.remove(Ln),
                    d(this._element),
                    this._element.classList.add(Dn, Sn),
                    this._queueCallback(
                        () => {
                            this._element.classList.remove(Sn), P.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
                        },
                        this._element,
                        this._config.animation
                    ));
        }
        hide() {
            this.isShown() &&
                (P.trigger(this._element, "hide.bs.toast").defaultPrevented ||
                    (this._element.classList.add(Sn),
                        this._queueCallback(
                            () => {
                                this._element.classList.add(Ln), this._element.classList.remove(Sn, Dn), P.trigger(this._element, "hidden.bs.toast");
                            },
                            this._element,
                            this._config.animation
                        )));
        }
        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(Dn), super.dispose();
        }
        isShown() {
            return this._element.classList.contains(Dn);
        }
        _maybeScheduleHide() {
            this._config.autohide &&
                (this._hasMouseInteraction ||
                    this._hasKeyboardInteraction ||
                    (this._timeout = setTimeout(() => {
                        this.hide();
                    }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide();
        }
        _setListeners() {
            P.on(this._element, "mouseover.bs.toast", (t) => this._onInteraction(t, !0)),
                P.on(this._element, "mouseout.bs.toast", (t) => this._onInteraction(t, !1)),
                P.on(this._element, "focusin.bs.toast", (t) => this._onInteraction(t, !0)),
                P.on(this._element, "focusout.bs.toast", (t) => this._onInteraction(t, !1));
        }
        _clearTimeout() {
            clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Pn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return q(Pn), g(Pn), {
        Alert: R,
        Button: K,
        Carousel: at,
        Collapse: pt,
        Dropdown: hi,
        Modal: Ni,
        Offcanvas: zi,
        Popover: un,
        ScrollSpy: bn,
        Tab: kn,
        Toast: Pn,
        Tooltip: cn
    };
});

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!(function(a, b, c, d) {
    function e(b, c) {
        (this.settings = null),
        (this.options = a.extend({}, e.Defaults, c)),
        (this.$element = a(b)),
        (this._handlers = {}),
        (this._plugins = {}),
        (this._supress = {}),
        (this._current = null),
        (this._speed = null),
        (this._coordinates = []),
        (this._breakpoint = null),
        (this._width = null),
        (this._items = []),
        (this._clones = []),
        (this._mergers = []),
        (this._widths = []),
        (this._invalidated = {}),
        (this._pipe = []),
        (this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }),
        (this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }),
        a.each(
                ["onResize", "onThrottledResize"],
                a.proxy(function(b, c) {
                    this._handlers[c] = a.proxy(this[c], this);
                }, this)
            ),
            a.each(
                e.Plugins,
                a.proxy(function(a, b) {
                    this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
                }, this)
            ),
            a.each(
                e.Workers,
                a.proxy(function(b, c) {
                    this._pipe.push({
                        filter: c.filter,
                        run: a.proxy(c.run, this)
                    });
                }, this)
            ),
            this.setup(),
            this.initialize();
    }
    (e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab",
    }),
    (e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }),
    (e.Type = {
        Event: "event",
        State: "state"
    }),
    (e.Plugins = {}),
    (e.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width();
            },
        },
        {
            filter: ["width", "items", "settings"],
            run: function(a) {
                a.current = this._items && this._items[this.relative(this._current)];
            },
        },
        {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove();
            },
        },
        {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = this.settings.margin || "",
                    c = !this.settings.autoWidth,
                    d = this.settings.rtl,
                    e = {
                        width: "auto",
                        "margin-left": d ? b : "",
                        "margin-right": d ? "" : b
                    };
                !c && this.$stage.children().css(e), (a.css = e);
            },
        },
        {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    c = null,
                    d = this._items.length,
                    e = !this.settings.autoWidth,
                    f = [];
                for (a.items = {
                        merge: !1,
                        width: b
                    }; d--;)
                    (c = this._mergers[d]), (c = (this.settings.mergeFit && Math.min(c, this.settings.items)) || c), (a.items.merge = c > 1 || a.items.merge), (f[d] = e ? b * c : this._items[d].width());
                this._widths = f;
            },
        },
        {
            filter: ["items", "settings"],
            run: function() {
                var b = [],
                    c = this._items,
                    d = this.settings,
                    e = Math.max(2 * d.items, 4),
                    f = 2 * Math.ceil(c.length / 2),
                    g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
                    h = "",
                    i = "";
                for (g /= 2; g > 0;) b.push(this.normalize(b.length / 2, !0)), (h += c[b[b.length - 1]][0].outerHTML), b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), (i = c[b[b.length - 1]][0].outerHTML + i), (g -= 1);
                (this._clones = b), a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
            },
        },
        {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;)
                    (d = f[c - 1] || 0), (e = this._widths[this.relative(c)] + this.settings.margin), f.push(d + e * a);
                this._coordinates = f;
            },
        },
        {
            filter: ["width", "items", "settings"],
            run: function() {
                var a = this.settings.stagePadding,
                    b = this._coordinates,
                    c = {
                        width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                        "padding-left": a || "",
                        "padding-right": a || ""
                    };
                this.$stage.css(c);
            },
        },
        {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = this._coordinates.length,
                    c = !this.settings.autoWidth,
                    d = this.$stage.children();
                if (c && a.items.merge)
                    for (; b--;)(a.css.width = this._widths[this.relative(b)]), d.eq(b).css(a.css);
                else c && ((a.css.width = a.items.width), d.css(a.css));
            },
        },
        {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style");
            },
        },
        {
            filter: ["width", "items", "settings"],
            run: function(a) {
                (a.current = a.current ? this.$stage.children().index(a.current) : 0), (a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current))), this.reset(a.current);
            },
        },
        {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current));
            },
        },
        {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var a,
                    b,
                    c,
                    d,
                    e = this.settings.rtl ? 1 : -1,
                    f = 2 * this.settings.stagePadding,
                    g = this.coordinates(this.current()) + f,
                    h = g + this.width() * e,
                    i = [];
                for (c = 0, d = this._coordinates.length; c < d; c++)
                    (a = this._coordinates[c - 1] || 0), (b = Math.abs(this._coordinates[c]) + f * e), ((this.op(a, "<=", g) && this.op(a, ">", h)) || (this.op(b, "<", g) && this.op(b, ">", h))) && i.push(c);
                this.$stage.children(".active").removeClass("active"),
                    this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
                    this.$stage.children(".center").removeClass("center"),
                    this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
            },
        },
    ]),
    (e.prototype.initializeStage = function() {
        (this.$stage = this.$element.find("." + this.settings.stageClass)),
        this.$stage.length ||
            (this.$element.addClass(this.options.loadingClass),
                (this.$stage = a("<" + this.settings.stageElement + ">", {
                    class: this.settings.stageClass
                }).wrap(a("<div/>", {
                    class: this.settings.stageOuterClass
                }))),
                this.$element.append(this.$stage.parent()));
    }),
    (e.prototype.initializeItems = function() {
        var b = this.$element.find(".owl-item");
        if (b.length)
            return (
                (this._items = b.get().map(function(b) {
                    return a(b);
                })),
                (this._mergers = this._items.map(function() {
                    return 1;
                })),
                void this.refresh()
            );
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
    }),
    (e.prototype.initialize = function() {
        if ((this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading"))) {
            var a, b, c;
            (a = this.$element.find("img")), (b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d), (c = this.$element.children(b).width()), a.length && c <= 0 && this.preloadAutoWidthImages(a);
        }
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
    }),
    (e.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible");
    }),
    (e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c
            ?
            (a.each(c, function(a) {
                    a <= b && a > d && (d = Number(a));
                }),
                (e = a.extend({}, this.options, c[d])),
                "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
                delete e.responsive,
                e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) :
            (e = a.extend({}, this.options)),
            this.trigger("change", {
                property: {
                    name: "settings",
                    value: e
                }
            }),
            (this._breakpoint = d),
            (this.settings = e),
            this.invalidate("settings"),
            this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            });
    }),
    (e.prototype.optionsLogic = function() {
        this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return (
            c.data ||
            (c.data = a("<" + this.settings.itemElement + "/>")
                .addClass(this.options.itemClass)
                .append(b)),
            this.trigger("prepared", {
                content: c.data
            }),
            c.data
        );
    }),
    (e.prototype.update = function() {
        for (
            var b = 0,
                c = this._pipe.length,
                d = a.proxy(function(a) {
                    return this[a];
                }, this._invalidated),
                e = {}; b < c;

        )
            (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        (this._invalidated = {}), !this.is("valid") && this.enter("valid");
    }),
    (e.prototype.width = function(a) {
        switch ((a = a || e.Width.Default)) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin;
        }
    }),
    (e.prototype.refresh = function() {
        this.enter("refreshing"),
            this.trigger("refresh"),
            this.setup(),
            this.optionsLogic(),
            this.$element.addClass(this.options.refreshClass),
            this.update(),
            this.$element.removeClass(this.options.refreshClass),
            this.leave("refreshing"),
            this.trigger("refreshed");
    }),
    (e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), (this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
    }),
    (e.prototype.onResize = function() {
        return (!!this._items.length &&
            this._width !== this.$element.width() &&
            !!this.isVisible() &&
            (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
        );
    }),
    (e.prototype.registerEventHandlers = function() {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize),
            this.settings.mouseDrag &&
            (this.$element.addClass(this.options.dragClass),
                this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
                this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                    return !1;
                })),
            this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
    }),
    (e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which &&
            (a.support.transform ?
                ((d = this.$stage
                        .css("transform")
                        .replace(/.*\(|\)| /g, "")
                        .split(",")),
                    (d = {
                        x: d[16 === d.length ? 12 : 4],
                        y: d[16 === d.length ? 13 : 5]
                    })) :
                ((d = this.$stage.position()), (d = {
                    x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
                    y: d.top
                })),
                this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")),
                this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
                this.speed(0),
                (this._drag.time = new Date().getTime()),
                (this._drag.target = a(b.target)),
                (this._drag.stage.start = d),
                (this._drag.stage.current = d),
                (this._drag.pointer = this.pointer(b)),
                a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
                a(c).one(
                    "mousemove.owl.core touchmove.owl.core",
                    a.proxy(function(b) {
                        var d = this.difference(this._drag.pointer, this.pointer(b));
                        a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
                    }, this)
                ));
    }),
    (e.prototype.onDragMove = function(a) {
        var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") &&
            (a.preventDefault(),
                this.settings.loop ?
                ((b = this.coordinates(this.minimum())), (c = this.coordinates(this.maximum() + 1) - b), (f.x = ((((f.x - b) % c) + c) % c) + b)) :
                ((b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
                    (c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
                    (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
                    (f.x = Math.max(Math.min(f.x, b + d), c + d))),
                (this._drag.stage.current = f),
                this.animate(f.x));
    }),
    (e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"),
            this.$element.removeClass(this.options.grabClass),
            ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
            (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
                this.invalidate("position"),
                this.update(),
                (this._drag.direction = f),
                (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
                this._drag.target.one("click.owl.core", function() {
                    return !1;
                })),
            this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
    }),
    (e.prototype.closest = function(b, c) {
        var e = -1,
            f = 30,
            g = this.width(),
            h = this.coordinates();
        return (
            this.settings.freeDrag ||
            a.each(
                h,
                a.proxy(function(a, i) {
                    return (
                        "left" === c && b > i - f && b < i + f ?
                        (e = a) :
                        "right" === c && b > i - g - f && b < i - g + f ?
                        (e = a + 1) :
                        this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e
                    );
                }, this)
            ),
            this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? (e = b = this.minimum()) : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
            e
        );
    }),
    (e.prototype.animate = function(b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
            c && (this.enter("animating"), this.trigger("translate")),
            a.support.transform3d && a.support.transition ?
            this.$stage.css({
                transform: "translate3d(" + b + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
            }) :
            c ?
            this.$stage.animate({
                left: b + "px"
            }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) :
            this.$stage.css({
                left: b + "px"
            });
    }),
    (e.prototype.is = function(a) {
        return this._states.current[a] && this._states.current[a] > 0;
    }),
    (e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (((a = this.normalize(a)), this._current !== a)) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), (this._current = a), this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            });
        }
        return this._current;
    }),
    (e.prototype.invalidate = function(b) {
        return (
            "string" === a.type(b) && ((this._invalidated[b] = !0), this.is("valid") && this.leave("valid")),
            a.map(this._invalidated, function(a, b) {
                return b;
            })
        );
    }),
    (e.prototype.reset = function(a) {
        (a = this.normalize(a)) !== d && ((this._speed = 0), (this._current = a), this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
    }),
    (e.prototype.normalize = function(a, b) {
        var c = this._items.length,
            e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? (a = d) : (a < 0 || a >= c + e) && (a = ((((a - e / 2) % c) + c) % c) + e / 2), a;
    }),
    (e.prototype.relative = function(a) {
        return (a -= this._clones.length / 2), this.normalize(a, !0);
    }),
    (e.prototype.maximum = function(a) {
        var b,
            c,
            d,
            e = this.settings,
            f = this._coordinates.length;
        if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) {
            if ((b = this._items.length))
                for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d););
            f = b + 1;
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }),
    (e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function(a) {
        return a === d ? this._items.slice() : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) {
                return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
            };
        return b === d ?
            a.map(this._clones, function(a, b) {
                return f(b);
            }) :
            a.map(this._clones, function(a, c) {
                return a === b ? f(c) : null;
            });
    }),
    (e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed;
    }),
    (e.prototype.coordinates = function(b) {
        var c,
            e = 1,
            f = b - 1;
        return b === d ?
            a.map(
                this._coordinates,
                a.proxy(function(a, b) {
                    return this.coordinates(b);
                }, this)
            ) :
            (this.settings.center ? (this.settings.rtl && ((e = -1), (f = b + 1)), (c = this._coordinates[b]), (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e)) : (c = this._coordinates[f] || 0), (c = Math.ceil(c)));
    }),
    (e.prototype.duration = function(a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
    }),
    (e.prototype.to = function(a, b) {
        var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();
        this.settings.loop ?
            (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), (a = c + e), (d = ((((a - h) % g) + g) % g) + h) !== a && d - e <= i && d - e > 0 && ((c = d - e), (a = d), this.reset(c))) :
            this.settings.rewind ?
            ((i += 1), (a = ((a % i) + i) % i)) :
            (a = Math.max(h, Math.min(i, a))),
            this.speed(this.duration(c, a, b)),
            this.current(a),
            this.isVisible() && this.update();
    }),
    (e.prototype.next = function(a) {
        (a = a || !1), this.to(this.relative(this.current()) + 1, a);
    }),
    (e.prototype.prev = function(a) {
        (a = a || !1), this.to(this.relative(this.current()) - 1, a);
    }),
    (e.prototype.onTransitionEnd = function(a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated");
    }),
    (e.prototype.viewport = function() {
        var d;
        return (
            this.options.responsiveBaseElement !== b ?
            (d = a(this.options.responsiveBaseElement).width()) :
            b.innerWidth ?
            (d = b.innerWidth) :
            c.documentElement && c.documentElement.clientWidth ?
            (d = c.documentElement.clientWidth) :
            console.warn("Can not detect viewport width."),
            d
        );
    }),
    (e.prototype.replace = function(b) {
        this.$stage.empty(),
            (this._items = []),
            b && (b = b instanceof jQuery ? b : a(b)),
            this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
            b
            .filter(function() {
                return 1 === this.nodeType;
            })
            .each(
                a.proxy(function(a, b) {
                    (b = this.prepare(b)), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
                }, this)
            ),
            this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
            this.invalidate("items");
    }),
    (e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        (c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger("add", {
                content: b,
                position: c
            }),
            (b = this.prepare(b)),
            0 === this._items.length || c === this._items.length ?
            (0 === this._items.length && this.$stage.append(b),
                0 !== this._items.length && this._items[c - 1].after(b),
                this._items.push(b),
                this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) :
            (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
            this._items[e] && this.reset(this._items[e].index()),
            this.invalidate("items"),
            this.trigger("added", {
                content: b,
                position: c
            });
    }),
    (e.prototype.remove = function(a) {
        (a = this.normalize(a, !0)) !== d &&
            (this.trigger("remove", {
                    content: this._items[a],
                    position: a
                }),
                this._items[a].remove(),
                this._items.splice(a, 1),
                this._mergers.splice(a, 1),
                this.invalidate("items"),
                this.trigger("removed", {
                    content: null,
                    position: a
                }));
    }),
    (e.prototype.preloadAutoWidthImages = function(b) {
        b.each(
            a.proxy(function(b, c) {
                this.enter("pre-loading"),
                    (c = a(c)),
                    a(new Image())
                    .one(
                        "load",
                        a.proxy(function(a) {
                            c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
                        }, this)
                    )
                    .attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
            }, this)
        );
    }),
    (e.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(),
            this.$stage.unwrap(),
            this.$stage.children().contents().unwrap(),
            this.$stage.children().unwrap(),
            this.$stage.remove(),
            this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
            .removeData("owl.carousel");
    }),
    (e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : a < c;
            case ">":
                return d ? a < c : a > c;
            case ">=":
                return d ? a <= c : a >= c;
            case "<=":
                return d ? a >= c : a <= c;
        }
    }),
    (e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
    }),
    (e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
    }),
    (e.prototype.trigger = function(b, c, d, f, g) {
        var h = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            i = a.camelCase(
                a
                .grep(["on", b, d], function(a) {
                    return a;
                })
                .join("-")
                .toLowerCase()
            ),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, h, c));
        return (
            this._supress[b] ||
            (a.each(this._plugins, function(a, b) {
                    b.onTrigger && b.onTrigger(j);
                }),
                this.register({
                    type: e.Type.Event,
                    name: b
                }),
                this.$element.trigger(j),
                this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
            j
        );
    }),
    (e.prototype.enter = function(b) {
        a.each(
            [b].concat(this._states.tags[b] || []),
            a.proxy(function(a, b) {
                this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
            }, this)
        );
    }),
    (e.prototype.leave = function(b) {
        a.each(
            [b].concat(this._states.tags[b] || []),
            a.proxy(function(a, b) {
                this._states.current[b]--;
            }, this)
        );
    }),
    (e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if ((a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl)) {
                var c = a.event.special[b.name]._default;
                (a.event.special[b.name]._default = function(a) {
                    return !c || !c.apply || (a.namespace && -1 !== a.namespace.indexOf("owl")) ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
                }),
                (a.event.special[b.name].owl = !0);
            }
        } else
            b.type === e.Type.State &&
            (this._states.tags[b.name] ? (this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags)) : (this._states.tags[b.name] = b.tags),
                (this._states.tags[b.name] = a.grep(
                    this._states.tags[b.name],
                    a.proxy(function(c, d) {
                        return a.inArray(c, this._states.tags[b.name]) === d;
                    }, this)
                )));
    }),
    (e.prototype.suppress = function(b) {
        a.each(
            b,
            a.proxy(function(a, b) {
                this._supress[b] = !0;
            }, this)
        );
    }),
    (e.prototype.release = function(b) {
        a.each(
            b,
            a.proxy(function(a, b) {
                delete this._supress[b];
            }, this)
        );
    }),
    (e.prototype.pointer = function(a) {
        var c = {
            x: null,
            y: null
        };
        return (
            (a = a.originalEvent || a || b.event),
            (a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a),
            a.pageX ? ((c.x = a.pageX), (c.y = a.pageY)) : ((c.x = a.clientX), (c.y = a.clientY)),
            c
        );
    }),
    (e.prototype.isNumeric = function(a) {
        return !isNaN(parseFloat(a));
    }),
    (e.prototype.difference = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        };
    }),
    (a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this),
                f = d.data("owl.carousel");
            f ||
                ((f = new e(this, "object" == typeof b && b)),
                    d.data("owl.carousel", f),
                    a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                        f.register({
                                type: e.Type.Event,
                                name: c
                            }),
                            f.$element.on(
                                c + ".owl.carousel.core",
                                a.proxy(function(a) {
                                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
                                }, f)
                            );
                    })),
                "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
        });
    }),
    (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
(function(a, b, c, d) {
    var e = function(b) {
        (this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoRefresh && this.watch();
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }),
    (e.prototype.watch = function() {
        this._interval || ((this._visible = this._core.isVisible()), (this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
    }),
    (e.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && ((this._visible = !this._visible), this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
    }),
    (e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
    }),
    (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
})(window.Zepto || window.jQuery, window, document),
(function(a, b, c, d) {
    var e = function(b) {
        (this._core = b),
        (this._loaded = []),
        (this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && ((b.property && "position" == b.property.name) || "initialized" == b.type)) {
                    var c = this._core.settings,
                        e = (c.center && Math.ceil(c.items / 2)) || c.items,
                        f = (c.center && -1 * e) || 0,
                        g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                        h = this._core.clones().length,
                        i = a.proxy(function(a, b) {
                            this.load(b);
                        }, this);
                    for (c.lazyLoadEager > 0 && ((e += c.lazyLoadEager), c.loop && ((g -= c.lazyLoadEager), e++)); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
                }
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    }),
    (e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e ||
            a.inArray(d.get(0), this._loaded) > -1 ||
            (e.each(
                    a.proxy(function(c, d) {
                        var e,
                            f = a(d),
                            g = (b.devicePixelRatio > 1 && f.attr("data-src-retina")) || f.attr("data-src") || f.attr("data-srcset");
                        this._core.trigger("load", {
                                element: f,
                                url: g
                            }, "lazy"),
                            f.is("img") ?
                            f
                            .one(
                                "load.owl.lazy",
                                a.proxy(function() {
                                    f.css("opacity", 1), this._core.trigger("loaded", {
                                        element: f,
                                        url: g
                                    }, "lazy");
                                }, this)
                            )
                            .attr("src", g) :
                            f.is("source") ?
                            f
                            .one(
                                "load.owl.lazy",
                                a.proxy(function() {
                                    this._core.trigger("loaded", {
                                        element: f,
                                        url: g
                                    }, "lazy");
                                }, this)
                            )
                            .attr("srcset", g) :
                            ((e = new Image()),
                                (e.onload = a.proxy(function() {
                                    f.css({
                                        "background-image": 'url("' + g + '")',
                                        opacity: "1"
                                    }), this._core.trigger("loaded", {
                                        element: f,
                                        url: g
                                    }, "lazy");
                                }, this)),
                                (e.src = g));
                    }, this)
                ),
                this._loaded.push(d.get(0)));
    }),
    (e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }),
    (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
})(window.Zepto || window.jQuery, window, document),
(function(a, b, c, d) {
    var e = function(c) {
        (this._core = c),
        (this._previousHeight = null),
        (this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && this.update();
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update();
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
            (this._intervalId = null);
        var d = this;
        a(b).on("load", function() {
                d._core.settings.autoHeight && d.update();
            }),
            a(b).resize(function() {
                d._core.settings.autoHeight &&
                    (null != d._intervalId && clearTimeout(d._intervalId),
                        (d._intervalId = setTimeout(function() {
                            d.update();
                        }, 250)));
            });
    };
    (e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }),
    (e.prototype.update = function() {
        var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.settings.lazyLoad,
            e = this._core.$stage.children().toArray().slice(b, c),
            f = [],
            g = 0;
        a.each(e, function(b, c) {
                f.push(a(c).height());
            }),
            (g = Math.max.apply(null, f)),
            g <= 1 && d && this._previousHeight && (g = this._previousHeight),
            (this._previousHeight = g),
            this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass);
    }),
    (e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }),
    (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
})(window.Zepto || window.jQuery, window, document),
(function(a, b, c, d) {
    var e = function(b) {
        (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                });
            }, this),
            "resize.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop();
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
                }
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
            this._core.$element.on(
                "click.owl.video",
                ".owl-video-play-icon",
                a.proxy(function(a) {
                    this.play(a);
                }, this)
            );
    };
    (e.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }),
    (e.prototype.fetch = function(a, b) {
        var c = (function() {
                return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
            })(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (
            ((d = g.match(
                    /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                )),
                d[3].indexOf("youtu") > -1)
        )
            c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar";
        }
        (d = d[6]), (this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }), b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
    }),
    (e.prototype.thumbnail = function(b, c) {
        var d,
            e,
            f,
            g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(c) {
                (e = '<div class="owl-video-play-icon"></div>'),
                (d = k.lazyLoad ? a("<div/>", {
                    class: "owl-video-tn " + j,
                    srcType: c
                }) : a("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + c + ")"
                })),
                b.after(d),
                    b.after(e);
            };
        if ((b.wrap(a("<div/>", {
                class: "owl-video-wrapper",
                style: g
            })), this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")), h.length)) return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type ?
            ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f)) :
            "vimeo" === c.type ?
            a.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(a) {
                    (f = a[0].thumbnail_large), l(f);
                },
            }) :
            "vzaar" === c.type &&
            a.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(a) {
                    (f = a.framegrab_url), l(f);
                },
            });
    }),
    (e.prototype.stop = function() {
        this._core.trigger("stop", null, "video"),
            this._playing.find(".owl-video-frame").remove(),
            this._playing.removeClass("owl-video-playing"),
            (this._playing = null),
            this._core.leave("playing"),
            this._core.trigger("stopped", null, "video");
    }),
    (e.prototype.play = function(b) {
        var c,
            d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();
        this._playing ||
            (this._core.enter("playing"),
                this._core.trigger("play", null, "video"),
                (e = this._core.items(this._core.relative(e.index()))),
                this._core.reset(e.index()),
                (c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')),
                c.attr("height", h),
                c.attr("width", g),
                "youtube" === f.type ?
                c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) :
                "vimeo" === f.type ?
                c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") :
                "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"),
                a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),
                (this._playing = e.addClass("owl-video-playing")));
    }),
    (e.prototype.isInFullScreen = function() {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame");
    }),
    (e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }),
    (a.fn.owlCarousel.Constructor.Plugins.Video = e);
})(window.Zepto || window.jQuery, window, document),
(function(a, b, c, d) {
    var e = function(b) {
        (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && ((this.previous = this.core.current()), (this.next = a.property.value));
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                a.namespace && (this.swapping = "translated" == a.type);
            }, this),
            "translate.owl.carousel": a.proxy(function(a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
            }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }),
    (e.prototype.swap = function() {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b,
                c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous &&
                (g &&
                    ((b = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                        d
                        .one(a.support.animation.end, c)
                        .css({
                            left: b + "px"
                        })
                        .addClass("animated owl-animated-out")
                        .addClass(g)),
                    f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
        }
    }),
    (e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
    }),
    (e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }),
    (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
})(window.Zepto || window.jQuery, window, document),
(function(a, b, c, d) {
    var e = function(b) {
        (this._core = b),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "settings" === a.property.name ? (this._core.settings.autoplay ? this.play() : this.stop()) : a.namespace && "position" === a.property.name && this._paused && (this._time = 0);
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoplay && this.play();
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                a.namespace && this.play(b, c);
            }, this),
            "stop.owl.autoplay": a.proxy(function(a) {
                a.namespace && this.stop();
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
            }, this),
            "touchstart.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
            }, this),
            "touchend.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play();
            }, this),
        }),
        this._core.$element.on(this._handlers),
            (this._core.options = a.extend({}, e.Defaults, this._core.options));
    };
    (e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }),
    (e.prototype._next = function(d) {
        (this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read())),
        this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed);
    }),
    (e.prototype.read = function() {
        return new Date().getTime() - this._time;
    }),
    (e.prototype.play = function(c, d) {
        var e;
        this._core.is("rotating") || this._core.enter("rotating"),
            (c = c || this._core.settings.autoplayTimeout),
            (e = Math.min(this._time % (this._timeout || c), c)),
            this._paused ? ((this._time = this.read()), (this._paused = !1)) : b.clearTimeout(this._call),
            (this._time += (this.read() % c) - e),
            (this._timeout = c),
            (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e));
    }),
    (e.prototype.stop = function() {
        this._core.is("rotating") && ((this._time = 0), (this._paused = !0), b.clearTimeout(this._call), this._core.leave("rotating"));
    }),
    (e.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && ((this._time = this.read()), (this._paused = !0), b.clearTimeout(this._call));
    }),
    (e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }),
    (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
})(window.Zepto || window.jQuery, window, document),
(function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        (this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }),
        (this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
            }, this),
            "added.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
            }, this),
            "remove.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && this.draw();
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace &&
                    !this._initialized &&
                    (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
    }),
    (e.prototype.initialize = function() {
        var b,
            c = this._core.settings;
        (this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled")),
        (this._controls.$previous = a("<" + c.navElement + ">")
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
                "click",
                a.proxy(function(a) {
                    this.prev(c.navSpeed);
                }, this)
            )),
        (this._controls.$next = a("<" + c.navElement + ">")
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
                "click",
                a.proxy(function(a) {
                    this.next(c.navSpeed);
                }, this)
            )),
        c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
            (this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled")),
            this._controls.$absolute.on(
                "click",
                "button",
                a.proxy(function(b) {
                    var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                    b.preventDefault(), this.to(d, c.dotsSpeed);
                }, this)
            );
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
    }),
    (e.prototype.destroy = function() {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
    }),
    (e.prototype.update = function() {
        var a,
            b,
            c,
            d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if (("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy))
            for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                if (b >= h || 0 === b) {
                    if ((this._pages.push({
                            start: Math.min(f, a - d),
                            end: a - d + h - 1
                        }), Math.min(f, a - d) === f)) break;
                    (b = 0), ++c;
                }
                b += this._core.mergers(this._core.relative(a));
            }
    }),
    (e.prototype.draw = function() {
        var b,
            c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
            c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
            this._controls.$absolute.toggleClass("disabled", !c.dots || d),
            c.dots &&
            ((b = this._pages.length - this._controls.$absolute.children().length),
                c.dotsData && 0 !== b ?
                this._controls.$absolute.html(this._templates.join("")) :
                b > 0 ?
                this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) :
                b < 0 && this._controls.$absolute.children().slice(b).remove(),
                this._controls.$absolute.find(".active").removeClass("active"),
                this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
    }),
    (e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        };
    }),
    (e.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a
            .grep(
                this._pages,
                a.proxy(function(a, c) {
                    return a.start <= b && a.end >= b;
                }, this)
            )
            .pop();
    }),
    (e.prototype.getPosition = function(b) {
        var c,
            d,
            e = this._core.settings;
        return (
            "page" == e.slideBy ?
            ((c = a.inArray(this.current(), this._pages)), (d = this._pages.length), b ? ++c : --c, (c = this._pages[((c % d) + d) % d].start)) :
            ((c = this._core.relative(this._core.current())), (d = this._core.items().length), b ? (c += e.slideBy) : (c -= e.slideBy)),
            c
        );
    }),
    (e.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
    }),
    (e.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
    }),
    (e.prototype.to = function(b, c, d) {
        var e;
        !d && this._pages.length ? ((e = this._pages.length), a.proxy(this._overrides.to, this._core)(this._pages[((b % e) + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
    }),
    (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
})(window.Zepto || window.jQuery, window, document),
(function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        (this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = b.content;
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a
                        .map(this._hashes, function(a, b) {
                            return a === d ? b : null;
                        })
                        .join();
                    if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e;
                }
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
            a(b).on(
                "hashchange.owl.navigation",
                a.proxy(function(a) {
                    var c = b.location.hash.substring(1),
                        e = this._core.$stage.children(),
                        f = this._hashes[c] && e.index(this._hashes[c]);
                    f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
                }, this)
            );
    };
    (e.Defaults = {
        URLhashListener: !1
    }),
    (e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null);
    }),
    (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
})(window.Zepto || window.jQuery, window, document),
(function(a, b, c, d) {
    function e(b, c) {
        var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);
        return (
            a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
                if (g[b] !== d) return (e = !c || b), !1;
            }),
            e
        );
    }

    function f(a) {
        return e(a, !0);
    }
    var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            },
        },
        j = {
            csstransforms: function() {
                return !!e("transform");
            },
            csstransforms3d: function() {
                return !!e("perspective");
            },
            csstransitions: function() {
                return !!e("transition");
            },
            cssanimations: function() {
                return !!e("animation");
            },
        };
    j.csstransitions() && ((a.support.transition = new String(f("transition"))), (a.support.transition.end = i.transition.end[a.support.transition])),
        j.cssanimations() && ((a.support.animation = new String(f("animation"))), (a.support.animation.end = i.animation.end[a.support.animation])),
        j.csstransforms() && ((a.support.transform = new String(f("transform"))), (a.support.transform3d = j.csstransforms3d()));
})(window.Zepto || window.jQuery, window, document);

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
})(function(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c);
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return (f.className = "mfp-" + b), d && (f.innerHTML = d), e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)), f;
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && ((c = c.charAt(0).toLowerCase() + c.slice(1)), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
        },
        z = function(c) {
            return (c === g && b.currTemplate.closeBtn) || ((b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose))), (g = c)), b.currTemplate.closeBtn;
        },
        A = function() {
            a.magnificPopup.instance || ((b = new t()), b.init(), (a.magnificPopup.instance = b));
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1;
        };
    (t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
            (b.isAndroid = /android/gi.test(c)),
            (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
            (b.supportsTransition = B()),
            (b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
            (d = a(document)),
            (b.popupsCache = {});
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                (b.items = c.items.toArray()), (b.index = 0);
                var g,
                    h = c.items;
                for (e = 0; e < h.length; e++)
                    if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
                        b.index = e;
                        break;
                    }
            } else(b.items = a.isArray(c.items) ? c.items : [c.items]), (b.index = c.index || 0);
            if (b.isOpen) return void b.updateItemHTML();
            (b.types = []),
            (f = ""),
            c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
                c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), (b.currTemplate = b.popupsCache[c.key])) : (b.currTemplate = {}),
                (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
                (b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos),
                b.st.modal && ((b.st.closeOnContentClick = !1), (b.st.closeOnBgClick = !1), (b.st.showCloseBtn = !1), (b.st.enableEscapeKey = !1)),
                b.bgOverlay ||
                ((b.bgOverlay = x("bg").on("click" + p, function() {
                        b.close();
                    })),
                    (b.wrap = x("wrap")
                        .attr("tabindex", -1)
                        .on("click" + p, function(a) {
                            b._checkIfClose(a.target) && b.close();
                        })),
                    (b.container = x("container", b.wrap))),
                (b.contentContainer = x("content")),
                b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
            }
            y("BeforeOpen"),
                b.st.showCloseBtn &&
                (b.st.closeBtnInside ?
                    (w(l, function(a, b, c, d) {
                            c.close_replaceWith = z(d.type);
                        }),
                        (f += " mfp-close-btn-in")) :
                    b.wrap.append(z())),
                b.st.alignTop && (f += " mfp-align-top"),
                b.fixedContentPos ? b.wrap.css({
                    overflow: b.st.overflowY,
                    overflowX: "hidden",
                    overflowY: b.st.overflowY
                }) : b.wrap.css({
                    top: v.scrollTop(),
                    position: "absolute"
                }),
                (b.st.fixedBgPos === !1 || ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) && b.bgOverlay.css({
                    height: d.height(),
                    position: "absolute"
                }),
                b.st.enableEscapeKey &&
                d.on("keyup" + p, function(a) {
                    27 === a.keyCode && b.close();
                }),
                v.on("resize" + p, function() {
                    b.updateSize();
                }),
                b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
                f && b.wrap.addClass(f);
            var k = (b.wH = v.height()),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o);
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : (n.overflow = "hidden"));
            var r = b.st.mainClass;
            return (
                b.isIE7 && (r += " mfp-ie7"),
                r && b._addClassToMFP(r),
                b.updateItemHTML(),
                y("BuildControls"),
                a("html").css(n),
                b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
                (b._lastFocusedEl = document.activeElement),
                setTimeout(function() {
                    b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
                }, 16),
                (b.isOpen = !0),
                b.updateSize(k),
                y(m),
                c
            );
        },
        close: function() {
            b.isOpen &&
                (y(i),
                    (b.isOpen = !1),
                    b.st.removalDelay && !b.isLowIE && b.supportsTransition ?
                    (b._addClassToMFP(r),
                        setTimeout(function() {
                            b._close();
                        }, b.st.removalDelay)) :
                    b._close());
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if ((b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos)) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""), a("html").css(e);
            }
            d.off("keyup" + p + " focusin" + p),
                b.ev.off(p),
                b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                b.bgOverlay.attr("class", "mfp-bg"),
                b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) || (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
                b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
                (b.currItem = null),
                (b.content = null),
                (b.currTemplate = null),
                (b.prevHeight = 0),
                y(j);
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), (b.wH = d);
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if ((y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), (b.currItem = c), !b.currTemplate[d])) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), (c.preloaded = !0), y(n, c), (e = c.type), b.container.prepend(b.contentContainer), y("AfterChange");
        },
        appendContent: function(a, c) {
            (b.content = a),
            a ? (b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : (b.content = a)) : (b.content = ""),
                y(k),
                b.container.addClass("mfp-" + c + "-holder"),
                b.contentContainer.append(b.content);
        },
        parseEl: function(c) {
            var d,
                e = b.items[c];
            if ((e.tagName ? (e = {
                    el: a(e)
                }) : ((d = e.type), (e = {
                    data: e,
                    src: e.src
                })), e.el)) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break;
                    }
                    (e.src = e.el.attr("data-mfp-src")), e.src || (e.src = e.el.attr("href"));
            }
            return (e.type = d || b.st.type || "inline"), (e.index = c), (e.parsed = !0), (b.items[c] = e), y("ElementParse", e), b.items[c];
        },
        addGroup: function(a, c) {
            var d = function(d) {
                (d.mfpEl = this), b._openClick(d, a, c);
            };
            c || (c = {});
            var e = "click.magnificPopup";
            (c.mainEl = a), c.items ? ((c.isObj = !0), a.off(e).on(e, d)) : ((c.isObj = !1), c.delegate ? a.off(e).on(e, c.delegate, d) : ((c.items = a), a.off(e).on(e, d)));
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0;
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), (e.el = a(c.mfpEl)), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e),
                    (a = e.status),
                    (d = e.text),
                    b.preloader.html(d),
                    b.preloader.find("a").on("click", function(a) {
                        a.stopImmediatePropagation();
                    }),
                    b.container.addClass("mfp-s-" + a),
                    (c = a);
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || (b.preloader && c === b.preloader[0])) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0;
                } else if (e && a.contains(document, c)) return !0;
                return !1;
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a);
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
                y(l, [b, c, d]),
                a.each(c, function(c, d) {
                    if (void 0 === d || d === !1) return !0;
                    if (((e = c.split("_")), e.length > 1)) {
                        var f = b.find(p + "-" + e[0]);
                        if (f.length > 0) {
                            var g = e[1];
                            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? (f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class")))) : f.attr(e[1], d);
                        }
                    } else b.find(p + "-" + c).html(d);
                });
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                (a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"), document.body.appendChild(a), (b.scrollbarSize = a.offsetWidth - a.clientWidth), document.body.removeChild(a);
            }
            return b.scrollbarSize;
        },
    }),
    (a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(), (b = b ? a.extend(!0, {}, b) : {}), (b.isObj = !0), (b.index = c || 0), this.instance.open(b);
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close();
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0,
        },
    }),
    (a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e,
                    f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? (e = f.items[g]) : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))), b._openClick({
                    mfpEl: e
                }, d, f);
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else(c = a.extend(!0, {}, c)), u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c), b.addGroup(d, c);
        return d;
    });
    var C,
        D,
        E,
        F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(), (E = null));
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F),
                    w(h + "." + F, function() {
                        G();
                    });
            },
            getInline: function(c, d) {
                if ((G(), c.src)) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)), (E = f.after(D).detach().removeClass(C))), b.updateStatus("ready");
                    } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
                    return (c.inlineElement = f), f;
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
            },
        },
    });
    var H,
        I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H);
        },
        K = function() {
            J(), b.req && b.req.abort();
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I), (H = b.st.ajax.cursor), w(h + "." + I, K), w("BeforeChange." + I, K);
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                        url: c.src,
                        success: function(d, e, f) {
                            var g = {
                                data: d,
                                xhr: f
                            };
                            y("ParseAjax", g),
                                b.appendContent(a(g.data), I),
                                (c.finished = !0),
                                J(),
                                b._setFocus(),
                                setTimeout(function() {
                                    b.wrap.addClass(q);
                                }, 16),
                                b.updateStatus("ready"),
                                y("AjaxContentAdded");
                        },
                        error: function() {
                            J(), (c.finished = c.loadError = !0), b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
                        },
                    },
                    b.st.ajax.settings
                );
                return (b.req = a.ajax(d)), "";
            },
        },
    });
    var L,
        M = function(c) {
            if (c.data && void 0 !== c.data.title) return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d)) return d.call(b, c);
                if (c.el) return c.el.attr(d) || "";
            }
            return "";
        };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.',
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"),
                    w(m + d, function() {
                        "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
                    }),
                    w(h + d, function() {
                        c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
                    }),
                    w("Resize" + d, b.resizeImage),
                    b.isLowIE && w("AfterChange", b.resizeImage);
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
                }
            },
            _onImageHasSize: function(a) {
                a.img && ((a.hasSize = !0), L && clearInterval(L), (a.isCheckingImgSize = !1), y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), (a.imgHidden = !1)));
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L),
                            (L = setInterval(function() {
                                return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
                            }, f));
                    };
                e(1);
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c &&
                            (c.img[0].complete ?
                                (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), (c.hasSize = !0), (c.loaded = !0), y("ImageLoadComplete")) :
                                (e++, 200 > e ? setTimeout(f, 100) : g()));
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), (c.hasSize = !0), (c.loaded = !0), (c.loadError = !0));
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    (j.className = "mfp-img"),
                    c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")),
                        (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
                        (j.src = c.src),
                        i.is("img") && (c.img = c.img.clone()),
                        (j = c.img[0]),
                        j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
                }
                return (
                    b._parseMarkup(d, {
                        title: M(c),
                        img_replaceWith: c.img
                    }, c),
                    b.resizeImage(),
                    c.hasSize ?
                    (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) :
                    (b.updateStatus("loading"), (c.loading = !0), c.hasSize || ((c.imgHidden = !0), d.addClass("mfp-loading"), b.findImageSize(c)), d)
                );
            },
        },
    });
    var N,
        O = function() {
            return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
        };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img");
            },
        },
        proto: {
            initZoom: function() {
                var a,
                    c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e,
                        f,
                        g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d), b.css(e), b;
                        },
                        k = function() {
                            b.content.css("visibility", "visible");
                        };
                    w("BuildControls" + d, function() {
                            if (b._allowZoom()) {
                                if ((clearTimeout(e), b.content.css("visibility", "hidden"), (a = b._getItemToZoom()), !a)) return void k();
                                (f = j(a)),
                                f.css(b._getOffset()),
                                    b.wrap.append(f),
                                    (e = setTimeout(function() {
                                        f.css(b._getOffset(!0)),
                                            (e = setTimeout(function() {
                                                k(),
                                                    setTimeout(function() {
                                                        f.remove(), (a = f = null), y("ZoomAnimationEnded");
                                                    }, 16);
                                            }, g));
                                    }, 16));
                            }
                        }),
                        w(i + d, function() {
                            if (b._allowZoom()) {
                                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                                    if (((a = b._getItemToZoom()), !a)) return;
                                    f = j(a);
                                }
                                f.css(b._getOffset(!0)),
                                    b.wrap.append(f),
                                    b.content.css("visibility", "hidden"),
                                    setTimeout(function() {
                                        f.css(b._getOffset());
                                    }, 16);
                            }
                        }),
                        w(h + d, function() {
                            b._allowZoom() && (k(), f && f.remove(), (a = null));
                        });
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type;
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1;
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? (h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)") : ((h.left = e.left), (h.top = e.top)), h;
            },
        },
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                },
            },
        },
        proto: {
            initIframe: function() {
                b.types.push(P),
                    w("BeforeChange", function(a, b, c) {
                        b !== c && (b === P ? R() : c === P && R(!0));
                    }),
                    w(h + "." + P, function() {
                        R();
                    });
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), (e = this.src.replace("%id%", e)), !1) : void 0;
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
            },
        },
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a;
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%",
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return (
                    (b.direction = !0),
                    c && c.enabled ?
                    ((f += " mfp-gallery"),
                        w(m + e, function() {
                            c.navigateByImgClick &&
                                b.wrap.on("click" + e, ".mfp-img", function() {
                                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                                }),
                                d.on("keydown" + e, function(a) {
                                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                                });
                        }),
                        w("UpdateStatus" + e, function(a, c) {
                            c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
                        }),
                        w(l + e, function(a, d, e, f) {
                            var g = b.items.length;
                            e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
                        }),
                        w("BuildControls" + e, function() {
                            if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                                var d = c.arrowMarkup,
                                    e = (b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s)),
                                    f = (b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s));
                                e.click(function() {
                                        b.prev();
                                    }),
                                    f.click(function() {
                                        b.next();
                                    }),
                                    b.container.append(e.add(f));
                            }
                        }),
                        w(n + e, function() {
                            b._preloadTimeout && clearTimeout(b._preloadTimeout),
                                (b._preloadTimeout = setTimeout(function() {
                                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                                }, 16));
                        }),
                        void w(h + e, function() {
                            d.off(e), b.wrap.off("click" + e), (b.arrowRight = b.arrowLeft = null);
                        })) :
                    !1
                );
            },
            next: function() {
                (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
            },
            prev: function() {
                (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
            },
            goTo: function(a) {
                (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
            },
            preloadNearbyImages: function() {
                var a,
                    c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a);
            },
            _preloadItem: function(c) {
                if (((c = S(c)), !b.items[c].preloaded)) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                        y("LazyLoad", d),
                        "image" === d.type &&
                        (d.img = a('<img class="mfp-img" />')
                            .on("load.mfploader", function() {
                                d.hasSize = !0;
                            })
                            .on("error.mfploader", function() {
                                (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                            })
                            .attr("src", d.src)),
                        (d.preloaded = !0);
                }
            },
        },
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
            options: {
                replaceSrc: function(a) {
                    return a.src.replace(/\.\w+$/, function(a) {
                        return "@2x" + a;
                    });
                },
                ratio: 1,
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var a = b.st.retina,
                            c = a.ratio;
                        (c = isNaN(c) ? c() : c),
                        c > 1 &&
                            (w("ImageHasSize." + U, function(a, b) {
                                    b.img.css({
                                        "max-width": b.img[0].naturalWidth / c,
                                        width: "100%"
                                    });
                                }),
                                w("ElementParse." + U, function(b, d) {
                                    d.src = a.replaceSrc(d, c);
                                }));
                    }
                },
            },
        }),
        A();
});

/**
RESIZESENSOR.JS
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
!(function() {
    var e = function(t, i) {
        function s() {
            (this.q = []),
            (this.add = function(e) {
                this.q.push(e);
            });
            var e, t;
            this.call = function() {
                for (e = 0, t = this.q.length; e < t; e++) this.q[e].call();
            };
        }

        function o(e, t) {
            return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null).getPropertyValue(t) : e.style[t];
        }

        function n(e, t) {
            if (e.resizedAttached) {
                if (e.resizedAttached) return void e.resizedAttached.add(t);
            } else(e.resizedAttached = new s()), e.resizedAttached.add(t);
            (e.resizeSensor = document.createElement("div")), (e.resizeSensor.className = "resize-sensor");
            var i = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                n = "position: absolute; left: 0; top: 0; transition: 0s;";
            (e.resizeSensor.style.cssText = i),
            (e.resizeSensor.innerHTML =
                '<div class="resize-sensor-expand" style="' + i + '"><div style="' + n + '"></div></div><div class="resize-sensor-shrink" style="' + i + '"><div style="' + n + ' width: 200%; height: 200%"></div></div>'),
            e.appendChild(e.resizeSensor), {
                fixed: 1,
                absolute: 1
            }[o(e, "position")] || (e.style.position = "relative");
            var d,
                r,
                l = e.resizeSensor.childNodes[0],
                c = l.childNodes[0],
                h = e.resizeSensor.childNodes[1],
                a =
                (h.childNodes[0],
                    function() {
                        (c.style.width = l.offsetWidth + 10 + "px"),
                        (c.style.height = l.offsetHeight + 10 + "px"),
                        (l.scrollLeft = l.scrollWidth),
                        (l.scrollTop = l.scrollHeight),
                        (h.scrollLeft = h.scrollWidth),
                        (h.scrollTop = h.scrollHeight),
                        (d = e.offsetWidth),
                        (r = e.offsetHeight);
                    });
            a();
            var f = function() {
                    e.resizedAttached && e.resizedAttached.call();
                },
                u = function(e, t, i) {
                    e.attachEvent ? e.attachEvent("on" + t, i) : e.addEventListener(t, i);
                },
                p = function() {
                    (e.offsetWidth == d && e.offsetHeight == r) || f(), a();
                };
            u(l, "scroll", p), u(h, "scroll", p);
        }
        var d = Object.prototype.toString.call(t),
            r = "[object Array]" === d || "[object NodeList]" === d || "[object HTMLCollection]" === d || ("undefined" != typeof jQuery && t instanceof jQuery) || ("undefined" != typeof Elements && t instanceof Elements);
        if (r)
            for (var l = 0, c = t.length; l < c; l++) n(t[l], i);
        else n(t, i);
        this.detach = function() {
            if (r)
                for (var i = 0, s = t.length; i < s; i++) e.detach(t[i]);
            else e.detach(t);
        };
    };
    (e.detach = function(e) {
        e.resizeSensor && (e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached);
    }),
    "undefined" != typeof module && "undefined" != typeof module.exports ? (module.exports = e) : (window.ResizeSensor = e);
})();

/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */
/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */

!(function(i) {
    i.fn.theiaStickySidebar = function(t) {
        function e(t, e) {
            return !0 === t.initialized || (!(i("body").width() < t.minWidth) && (o(t, e), !0));
        }

        function o(t, e) {
            (t.initialized = !0),
            0 === i("#theia-sticky-sidebar-stylesheet-" + t.namespace).length &&
                i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-' + t.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),
                e.each(function() {
                    function e() {
                        (n.fixedScrollTop = 0), n.sidebar.css({
                            "min-height": "1px"
                        }), n.stickySidebar.css({
                            position: "static",
                            width: "",
                            transform: "none"
                        });
                    }

                    function o(t) {
                        var e = t.height();
                        return (
                            t.children().each(function() {
                                e = Math.max(e, i(this).height());
                            }),
                            e
                        );
                    }
                    var n = {};
                    if (
                        ((n.sidebar = i(this)),
                            (n.options = t || {}),
                            (n.container = i(n.options.containerSelector)),
                            0 == n.container.length && (n.container = n.sidebar.parent()),
                            n.sidebar.parents(":not(.theia-exception)").css("-webkit-transform", "none"),
                            n.sidebar.css({
                                position: n.options.defaultPosition,
                                overflow: "visible",
                                "-webkit-box-sizing": "border-box",
                                "-moz-box-sizing": "border-box",
                                "box-sizing": "border-box"
                            }),
                            (n.stickySidebar = n.sidebar.find(".theiaStickySidebar")),
                            0 == n.stickySidebar.length)
                    ) {
                        var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                        n.sidebar
                            .find("script")
                            .filter(function(i, t) {
                                return 0 === t.type.length || t.type.match(s);
                            })
                            .remove(),
                            (n.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(n.sidebar.children())),
                            n.sidebar.append(n.stickySidebar);
                    }
                    (n.marginBottom = parseInt(n.sidebar.css("margin-bottom"))), (n.paddingTop = parseInt(n.sidebar.css("padding-top"))), (n.paddingBottom = parseInt(n.sidebar.css("padding-bottom")));
                    var d = n.stickySidebar.offset().top,
                        r = n.stickySidebar.outerHeight();
                    n.stickySidebar.css("padding-top", 1),
                        n.stickySidebar.css("padding-bottom", 1),
                        (d -= n.stickySidebar.offset().top),
                        (r = n.stickySidebar.outerHeight() - r - d),
                        0 == d ? (n.stickySidebar.css("padding-top", 0), (n.stickySidebarPaddingTop = 0)) : (n.stickySidebarPaddingTop = 1),
                        0 == r ? (n.stickySidebar.css("padding-bottom", 0), (n.stickySidebarPaddingBottom = 0)) : (n.stickySidebarPaddingBottom = 1),
                        (n.previousScrollTop = null),
                        (n.fixedScrollTop = 0),
                        e(),
                        (n.onScroll = function(n) {
                            if (n.stickySidebar.is(":visible"))
                                if (i("body").width() < n.options.minWidth) e();
                                else if (n.options.disableOnResponsiveLayouts && n.sidebar.outerWidth("none" == n.sidebar.css("float")) + 50 > n.container.width()) e();
                            else {
                                var s = i(document).scrollTop(),
                                    d = "static";
                                if (s >= n.sidebar.offset().top + (n.paddingTop - n.options.additionalMarginTop)) {
                                    var r,
                                        c = n.paddingTop + t.additionalMarginTop,
                                        p = n.paddingBottom + n.marginBottom + t.additionalMarginBottom,
                                        b = n.sidebar.offset().top,
                                        l = n.sidebar.offset().top + o(n.container),
                                        f = 0 + t.additionalMarginTop;
                                    r = n.stickySidebar.outerHeight() + c + p < i(window).height() ? f + n.stickySidebar.outerHeight() : i(window).height() - n.marginBottom - n.paddingBottom - t.additionalMarginBottom;
                                    var h = b - s + n.paddingTop,
                                        g = l - s - n.paddingBottom - n.marginBottom,
                                        u = n.stickySidebar.offset().top - s,
                                        S = n.previousScrollTop - s;
                                    "fixed" == n.stickySidebar.css("position") && "modern" == n.options.sidebarBehavior && (u += S),
                                        "stick-to-top" == n.options.sidebarBehavior && (u = t.additionalMarginTop),
                                        "stick-to-bottom" == n.options.sidebarBehavior && (u = r - n.stickySidebar.outerHeight()),
                                        (u = S > 0 ? Math.min(u, f) : Math.max(u, r - n.stickySidebar.outerHeight())),
                                        (u = Math.max(u, h)),
                                        (u = Math.min(u, g - n.stickySidebar.outerHeight()));
                                    var m = n.container.height() == n.stickySidebar.outerHeight();
                                    d = (m || u != f) && (m || u != r - n.stickySidebar.outerHeight()) ? (s + u - n.sidebar.offset().top - n.paddingTop <= t.additionalMarginTop ? "static" : "absolute") : "fixed";
                                }
                                if ("fixed" == d) {
                                    var y = i(document).scrollLeft();
                                    n.stickySidebar.css({
                                        position: "fixed",
                                        width: a(n.stickySidebar) + "px",
                                        transform: "translateY(" + u + "px)",
                                        left: n.sidebar.offset().left + parseInt(n.sidebar.css("padding-left")) - y + "px",
                                        top: "0px",
                                    });
                                } else if ("absolute" == d) {
                                    var k = {};
                                    "absolute" != n.stickySidebar.css("position") &&
                                        ((k.position = "absolute"), (k.transform = "translateY(" + (s + u - n.sidebar.offset().top - n.stickySidebarPaddingTop - n.stickySidebarPaddingBottom) + "px)"), (k.top = "0px")),
                                        (k.width = a(n.stickySidebar) + "px"),
                                        (k.left = ""),
                                        n.stickySidebar.css(k);
                                } else "static" == d && e();
                                "static" != d && 1 == n.options.updateSidebarHeight && n.sidebar.css({
                                        "min-height": n.stickySidebar.outerHeight() + n.stickySidebar.offset().top - n.sidebar.offset().top + n.paddingBottom
                                    }),
                                    (n.previousScrollTop = s);
                            }
                        }),
                        n.onScroll(n),
                        i(document).on(
                            "scroll." + n.options.namespace,
                            (function(i) {
                                return function() {
                                    i.onScroll(i);
                                };
                            })(n)
                        ),
                        i(window).on(
                            "resize." + n.options.namespace,
                            (function(i) {
                                return function() {
                                    i.stickySidebar.css({
                                        position: "static"
                                    }), i.onScroll(i);
                                };
                            })(n)
                        ),
                        "undefined" != typeof ResizeSensor &&
                        new ResizeSensor(
                            n.stickySidebar[0],
                            (function(i) {
                                return function() {
                                    i.onScroll(i);
                                };
                            })(n)
                        );
                });
        }

        function a(i) {
            var t;
            try {
                t = i[0].getBoundingClientRect().width;
            } catch (i) {}
            return void 0 === t && (t = i.width()), t;
        }
        var n = {
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            sidebarBehavior: "modern",
            defaultPosition: "relative",
            namespace: "TSS"
        };
        return (
            (t = i.extend(n, t)),
            (t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0),
            (t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0),
            (function(t, o) {
                e(t, o) ||
                    (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),
                        i(document).on(
                            "scroll." + t.namespace,
                            (function(t, o) {
                                return function(a) {
                                    e(t, o) && i(this).unbind(a);
                                };
                            })(t, o)
                        ),
                        i(window).on(
                            "resize." + t.namespace,
                            (function(t, o) {
                                return function(a) {
                                    e(t, o) && i(this).unbind(a);
                                };
                            })(t, o)
                        ));
            })(t, this),
            this
        );
    };
})(jQuery);

/*
 Sticky-kit v1.1.3 | MIT | Leaf Corcoran 2015 | http://leafo.net
*/
(function() {
    var c, f;
    c = window.jQuery;
    f = c(window);
    c.fn.stick_in_parent = function(b) {
        var A, w, J, n, B, K, p, q, L, k, E, t;
        null == b && (b = {});
        t = b.sticky_class;
        B = b.inner_scrolling;
        E = b.recalc_every;
        k = b.parent;
        q = b.offset_top;
        p = b.spacer;
        w = b.bottoming;
        null == q && (q = 0);
        null == k && (k = void 0);
        null == B && (B = !0);
        null == t && (t = "is_stuck");
        A = c(document);
        null == w && (w = !0);
        L = function(a) {
            var b;
            return window.getComputedStyle ?
                ((a = window.getComputedStyle(a[0])),
                    (b = parseFloat(a.getPropertyValue("width")) + parseFloat(a.getPropertyValue("margin-left")) + parseFloat(a.getPropertyValue("margin-right"))),
                    "border-box" !== a.getPropertyValue("box-sizing") &&
                    (b += parseFloat(a.getPropertyValue("border-left-width")) + parseFloat(a.getPropertyValue("border-right-width")) + parseFloat(a.getPropertyValue("padding-left")) + parseFloat(a.getPropertyValue("padding-right"))),
                    b) :
                a.outerWidth(!0);
        };
        J = function(a, b, n, C, F, u, r, G) {
            var v, H, m, D, I, d, g, x, y, z, h, l;
            if (!a.data("sticky_kit")) {
                a.data("sticky_kit", !0);
                I = A.height();
                g = a.parent();
                null != k && (g = g.closest(k));
                if (!g.length) throw "failed to find stick parent";
                v = m = !1;
                (h = null != p ? p && a.closest(p) : c("<div />")) && h.css("position", a.css("position"));
                x = function() {
                    var d, f, e;
                    if (!G &&
                        ((I = A.height()),
                            (d = parseInt(g.css("border-top-width"), 10)),
                            (f = parseInt(g.css("padding-top"), 10)),
                            (b = parseInt(g.css("padding-bottom"), 10)),
                            (n = g.offset().top + d + f),
                            (C = g.height()),
                            m && ((v = m = !1), null == p && (a.insertAfter(h), h.detach()), a.css({
                                position: "",
                                top: "",
                                width: "",
                                bottom: ""
                            }).removeClass(t), (e = !0)),
                            (F = a.offset().top - (parseInt(a.css("margin-top"), 10) || 0) - q),
                            (u = a.outerHeight(!0)),
                            (r = a.css("float")),
                            h && h.css({
                                width: L(a),
                                height: u,
                                display: a.css("display"),
                                "vertical-align": a.css("vertical-align"),
                                float: r
                            }),
                            e)
                    )
                        return l();
                };
                x();
                if (u !== C)
                    return (
                        (D = void 0),
                        (d = q),
                        (z = E),
                        (l = function() {
                            var c, l, e, k;
                            if (!G &&
                                ((e = !1),
                                    null != z && (--z, 0 >= z && ((z = E), x(), (e = !0))),
                                    e || A.height() === I || x(),
                                    (e = f.scrollTop()),
                                    null != D && (l = e - D),
                                    (D = e),
                                    m ?
                                    (w && ((k = e + u + d > C + n), v && !k && ((v = !1), a.css({
                                            position: "fixed",
                                            bottom: "",
                                            top: d
                                        }).trigger("sticky_kit:unbottom"))),
                                        e < F &&
                                        ((m = !1),
                                            (d = q),
                                            null == p && (("left" !== r && "right" !== r) || a.insertAfter(h), h.detach()),
                                            (c = {
                                                position: "",
                                                width: "",
                                                top: ""
                                            }),
                                            a.css(c).removeClass(t).trigger("sticky_kit:unstick")),
                                        B && ((c = f.height()), u + q > c && !v && ((d -= l), (d = Math.max(c - u, d)), (d = Math.min(q, d)), m && a.css({
                                            top: d + "px"
                                        })))) :
                                    e > F &&
                                    ((m = !0),
                                        (c = {
                                            position: "fixed",
                                            top: d
                                        }),
                                        (c.width = "border-box" === a.css("box-sizing") ? a.outerWidth() + "px" : a.width() + "px"),
                                        a.css(c).addClass(t),
                                        null == p && (a.after(h), ("left" !== r && "right" !== r) || h.append(a)),
                                        a.trigger("sticky_kit:stick")),
                                    m && w && (null == k && (k = e + u + d > C + n), !v && k))
                            )
                                return (v = !0), "static" === g.css("position") && g.css({
                                    position: "relative"
                                }), a.css({
                                    position: "absolute",
                                    bottom: b,
                                    top: "auto"
                                }).trigger("sticky_kit:bottom");
                        }),
                        (y = function() {
                            x();
                            return l();
                        }),
                        (H = function() {
                            G = !0;
                            f.off("touchmove", l);
                            f.off("scroll", l);
                            f.off("resize", y);
                            c(document.body).off("sticky_kit:recalc", y);
                            a.off("sticky_kit:detach", H);
                            a.removeData("sticky_kit");
                            a.css({
                                position: "",
                                bottom: "",
                                top: "",
                                width: ""
                            });
                            g.position("position", "");
                            if (m) return null == p && (("left" !== r && "right" !== r) || a.insertAfter(h), h.remove()), a.removeClass(t);
                        }),
                        f.on("touchmove", l),
                        f.on("scroll", l),
                        f.on("resize", y),
                        c(document.body).on("sticky_kit:recalc", y),
                        a.on("sticky_kit:detach", H),
                        setTimeout(l, 0)
                    );
            }
        };
        n = 0;
        for (K = this.length; n < K; n++)(b = this[n]), J(c(b));
        return this;
    };
}.call(this));
/*
 * jQuery mmenu v6.1.8
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        root.jquery_mmenu_all_js = factory(root.jQuery);
    }
})(this, function(jQuery) {
    !(function(e) {
        function t() {
            e[n].glbl ||
                ((r = {
                        $wndw: e(window),
                        $docu: e(document),
                        $html: e("html"),
                        $body: e("body")
                    }),
                    (s = {}),
                    (a = {}),
                    (o = {}),
                    e.each([s, a, o], function(e, t) {
                        t.add = function(e) {
                            e = e.split(" ");
                            for (var n = 0, i = e.length; n < i; n++) t[e[n]] = t.mm(e[n]);
                        };
                    }),
                    (s.mm = function(e) {
                        return "mm-" + e;
                    }),
                    s.add("wrapper menu panels panel nopanel highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen noanimation"),
                    (s.umm = function(e) {
                        return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e;
                    }),
                    (a.mm = function(e) {
                        return "mm-" + e;
                    }),
                    a.add("parent child"),
                    (o.mm = function(e) {
                        return e + ".mm";
                    }),
                    o.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"),
                    (e[n]._c = s),
                    (e[n]._d = a),
                    (e[n]._e = o),
                    (e[n].glbl = r));
        }
        var n = "mmenu",
            i = "6.1.8";
        if (!(e[n] && e[n].version > i)) {
            (e[n] = function(e, t, n) {
                return (
                    (this.$menu = e),
                    (this._api = ["bind", "getInstance", "initPanels", "openPanel", "closePanel", "closeAllPanels", "setSelected"]),
                    (this.opts = t),
                    (this.conf = n),
                    (this.vars = {}),
                    (this.cbck = {}),
                    (this.mtch = {}),
                    "function" == typeof this.___deprecated && this.___deprecated(),
                    this._initAddons(),
                    this._initExtensions(),
                    this._initMenu(),
                    this._initPanels(),
                    this._initOpened(),
                    this._initAnchors(),
                    this._initMatchMedia(),
                    "function" == typeof this.___debug && this.___debug(),
                    this
                );
            }),
            (e[n].version = i),
            (e[n].addons = {}),
            (e[n].uniqueId = 0),
            (e[n].defaults = {
                extensions: [],
                initMenu: function() {},
                initPanels: function() {},
                navbar: {
                    add: !0,
                    title: "Menu",
                    titleLink: "parent"
                },
                onClick: {
                    setSelected: !0
                },
                slidingSubmenus: !0
            }),
            (e[n].configuration = {
                classNames: {
                    divider: "Divider",
                    inset: "Inset",
                    nolistview: "NoListview",
                    nopanel: "NoPanel",
                    panel: "Panel",
                    selected: "Selected",
                    spacer: "Spacer",
                    vertical: "Vertical"
                },
                clone: !1,
                openingInterval: 25,
                panelNodetype: "ul, ol, div",
                transitionDuration: 400,
            }),
            (e[n].prototype = {
                getInstance: function() {
                    return this;
                },
                initPanels: function(e) {
                    this._initPanels(e);
                },
                openPanel: function(t, i) {
                    if ((this.trigger("openPanel:before", t), t && t.length && (t.is("." + s.panel) || (t = t.closest("." + s.panel)), t.is("." + s.panel)))) {
                        var o = this;
                        if (("boolean" != typeof i && (i = !0), t.hasClass(s.vertical)))
                            t
                            .add(t.parents("." + s.vertical))
                            .removeClass(s.hidden)
                            .parent("li")
                            .addClass(s.opened),
                            this.openPanel(
                                t
                                .parents("." + s.panel)
                                .not("." + s.vertical)
                                .first()
                            ),
                            this.trigger("openPanel:start", t),
                            this.trigger("openPanel:finish", t);
                        else {
                            if (t.hasClass(s.opened)) return;
                            var r = this.$pnls.children("." + s.panel),
                                l = r.filter("." + s.opened);
                            if (!e[n].support.csstransitions) return l.addClass(s.hidden).removeClass(s.opened), t.removeClass(s.hidden).addClass(s.opened), this.trigger("openPanel:start", t), void this.trigger("openPanel:finish", t);
                            r.not(t).removeClass(s.subopened);
                            for (var d = t.data(a.parent); d;)(d = d.closest("." + s.panel)), d.is("." + s.vertical) || d.addClass(s.subopened), (d = d.data(a.parent));
                            r.removeClass(s.highest).not(l).not(t).addClass(s.hidden),
                                t.removeClass(s.hidden),
                                (this.openPanelStart = function() {
                                    l.removeClass(s.opened),
                                        t.addClass(s.opened),
                                        t.hasClass(s.subopened) ? (l.addClass(s.highest), t.removeClass(s.subopened)) : (l.addClass(s.subopened), t.addClass(s.highest)),
                                        this.trigger("openPanel:start", t);
                                }),
                                (this.openPanelFinish = function() {
                                    l.removeClass(s.highest).addClass(s.hidden), t.removeClass(s.highest), this.trigger("openPanel:finish", t);
                                }),
                                i && !t.hasClass(s.noanimation) ?
                                setTimeout(function() {
                                    o.__transitionend(
                                            t,
                                            function() {
                                                o.openPanelFinish.call(o);
                                            },
                                            o.conf.transitionDuration
                                        ),
                                        o.openPanelStart.call(o);
                                }, o.conf.openingInterval) :
                                (this.openPanelStart.call(this), this.openPanelFinish.call(this));
                        }
                        this.trigger("openPanel:after", t);
                    }
                },
                closePanel: function(e) {
                    this.trigger("closePanel:before", e);
                    var t = e.parent();
                    t.hasClass(s.vertical) && (t.removeClass(s.opened), this.trigger("closePanel", e)), this.trigger("closePanel:after", e);
                },
                closeAllPanels: function(e) {
                    this.trigger("closeAllPanels:before"),
                        this.$pnls
                        .find("." + s.listview)
                        .children()
                        .removeClass(s.selected)
                        .filter("." + s.vertical)
                        .removeClass(s.opened);
                    var t = this.$pnls.children("." + s.panel),
                        n = e && e.length ? e : t.first();
                    this.$pnls
                        .children("." + s.panel)
                        .not(n)
                        .removeClass(s.subopened)
                        .removeClass(s.opened)
                        .removeClass(s.highest)
                        .addClass(s.hidden),
                        this.openPanel(n, !1),
                        this.trigger("closeAllPanels:after");
                },
                togglePanel: function(e) {
                    var t = e.parent();
                    t.hasClass(s.vertical) && this[t.hasClass(s.opened) ? "closePanel" : "openPanel"](e);
                },
                setSelected: function(e) {
                    this.trigger("setSelected:before", e),
                        this.$menu
                        .find("." + s.listview)
                        .children("." + s.selected)
                        .removeClass(s.selected),
                        e.addClass(s.selected),
                        this.trigger("setSelected:after", e);
                },
                bind: function(e, t) {
                    (this.cbck[e] = this.cbck[e] || []), this.cbck[e].push(t);
                },
                trigger: function() {
                    var e = this,
                        t = Array.prototype.slice.call(arguments),
                        n = t.shift();
                    if (this.cbck[n])
                        for (var i = 0, s = this.cbck[n].length; i < s; i++) this.cbck[n][i].apply(e, t);
                },
                matchMedia: function(e, t, n) {
                    var i = {
                        yes: t,
                        no: n
                    };
                    (this.mtch[e] = this.mtch[e] || []), this.mtch[e].push(i);
                },
                _initAddons: function() {
                    this.trigger("initAddons:before");
                    var t;
                    for (t in e[n].addons) e[n].addons[t].add.call(this), (e[n].addons[t].add = function() {});
                    for (t in e[n].addons) e[n].addons[t].setup.call(this);
                    this.trigger("initAddons:after");
                },
                _initExtensions: function() {
                    this.trigger("initExtensions:before");
                    var e = this;
                    this.opts.extensions.constructor === Array && (this.opts.extensions = {
                        all: this.opts.extensions
                    });
                    for (var t in this.opts.extensions)
                        (this.opts.extensions[t] = this.opts.extensions[t].length ? "mm-" + this.opts.extensions[t].join(" mm-") : ""),
                        this.opts.extensions[t] &&
                        !(function(t) {
                            e.matchMedia(
                                t,
                                function() {
                                    this.$menu.addClass(this.opts.extensions[t]);
                                },
                                function() {
                                    this.$menu.removeClass(this.opts.extensions[t]);
                                }
                            );
                        })(t);
                    this.trigger("initExtensions:after");
                },
                _initMenu: function() {
                    this.trigger("initMenu:before");
                    this.conf.clone &&
                        ((this.$orig = this.$menu),
                            (this.$menu = this.$orig.clone()),
                            this.$menu
                            .add(this.$menu.find("[id]"))
                            .filter("[id]")
                            .each(function() {
                                e(this).attr("id", s.mm(e(this).attr("id")));
                            })),
                        this.opts.initMenu.call(this, this.$menu, this.$orig),
                        this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()),
                        (this.$pnls = e('<div class="' + s.panels + '" />')
                            .append(this.$menu.children(this.conf.panelNodetype))
                            .prependTo(this.$menu));
                    var t = [s.menu];
                    this.opts.slidingSubmenus || t.push(s.vertical), this.$menu.addClass(t.join(" ")).parent().addClass(s.wrapper), this.trigger("initMenu:after");
                },
                _initPanels: function(t) {
                    this.trigger("initPanels:before", t), (t = t || this.$pnls.children(this.conf.panelNodetype));
                    var n = e(),
                        i = this,
                        a = function(t) {
                            t.filter(this.conf.panelNodetype).each(function() {
                                var t = i._initPanel(e(this));
                                if (t) {
                                    i._initNavbar(t), i._initListview(t), (n = n.add(t));
                                    var o = t
                                        .children("." + s.listview)
                                        .children("li")
                                        .children(i.conf.panelNodeType)
                                        .add(t.children("." + i.conf.classNames.panel));
                                    o.length && a.call(i, o);
                                }
                            });
                        };
                    a.call(this, t), this.opts.initPanels.call(this, n), this.trigger("initPanels:after", n);
                },
                _initPanel: function(e) {
                    this.trigger("initPanel:before", e);
                    if (e.hasClass(s.panel)) return e;
                    if (
                        (this.__refactorClass(e, this.conf.classNames.panel, "panel"),
                            this.__refactorClass(e, this.conf.classNames.nopanel, "nopanel"),
                            this.__refactorClass(e, this.conf.classNames.vertical, "vertical"),
                            this.__refactorClass(e, this.conf.classNames.inset, "inset"),
                            e.filter("." + s.inset).addClass(s.nopanel),
                            e.hasClass(s.nopanel))
                    )
                        return !1;
                    var t = e.hasClass(s.vertical) || !this.opts.slidingSubmenus;
                    e.removeClass(s.vertical);
                    var n = e.attr("id") || this.__getUniqueId();
                    e.removeAttr("id"), e.is("ul, ol") && (e.wrap("<div />"), (e = e.parent())), e.addClass(s.panel + " " + s.hidden).attr("id", n);
                    var i = e.parent("li");
                    return t ? e.add(i).addClass(s.vertical) : e.appendTo(this.$pnls), i.length && (i.data(a.child, e), e.data(a.parent, i)), this.trigger("initPanel:after", e), e;
                },
                _initNavbar: function(t) {
                    if ((this.trigger("initNavbar:before", t), !t.children("." + s.navbar).length)) {
                        var i = t.data(a.parent),
                            o = e('<div class="' + s.navbar + '" />'),
                            r = e[n].i18n(this.opts.navbar.title),
                            l = "";
                        if (i && i.length) {
                            if (i.hasClass(s.vertical)) return;
                            if (i.parent().is("." + s.listview)) var d = i.children("a, span").not("." + s.next);
                            else var d = i.closest("." + s.panel).find('a[href="#' + t.attr("id") + '"]');
                            (d = d.first()), (i = d.closest("." + s.panel));
                            var c = i.attr("id");
                            switch (((r = d.text()), this.opts.navbar.titleLink)) {
                                case "anchor":
                                    l = d.attr("href");
                                    break;
                                case "parent":
                                    l = "#" + c;
                            }
                            o.append('<a class="' + s.btn + " " + s.prev + '" href="#' + c + '" />');
                        } else if (!this.opts.navbar.title) return;
                        this.opts.navbar.add && t.addClass(s.hasnavbar), o.append('<a class="' + s.title + '"' + (l.length ? ' href="' + l + '"' : "") + ">" + r + "</a>").prependTo(t), this.trigger("initNavbar:after", t);
                    }
                },
                _initListview: function(t) {
                    this.trigger("initListview:before", t);
                    var n = this.__childAddBack(t, "ul, ol");
                    this.__refactorClass(n, this.conf.classNames.nolistview, "nolistview"), n.filter("." + this.conf.classNames.inset).addClass(s.nolistview);
                    var i = n
                        .not("." + s.nolistview)
                        .addClass(s.listview)
                        .children();
                    this.__refactorClass(i, this.conf.classNames.selected, "selected"), this.__refactorClass(i, this.conf.classNames.divider, "divider"), this.__refactorClass(i, this.conf.classNames.spacer, "spacer");
                    var o = t.data(a.parent);
                    if (o && o.parent().is("." + s.listview) && !o.children("." + s.next).length) {
                        var r = o.children("a, span").first(),
                            l = e('<a class="' + s.next + '" href="#' + t.attr("id") + '" />').insertBefore(r);
                        r.is("span") && l.addClass(s.fullsubopen);
                    }
                    this.trigger("initListview:after", t);
                },
                _initOpened: function() {
                    this.trigger("initOpened:before");
                    var e = this.$pnls
                        .find("." + s.listview)
                        .children("." + s.selected)
                        .removeClass(s.selected)
                        .last()
                        .addClass(s.selected),
                        t = e.length ? e.closest("." + s.panel) : this.$pnls.children("." + s.panel).first();
                    this.openPanel(t, !1), this.trigger("initOpened:after");
                },
                _initAnchors: function() {
                    var t = this;
                    r.$body.on(o.click + "-oncanvas", "a[href]", function(i) {
                        var a = e(this),
                            o = !1,
                            r = t.$menu.find(a).length;
                        for (var l in e[n].addons)
                            if (e[n].addons[l].clickAnchor.call(t, a, r)) {
                                o = !0;
                                break;
                            }
                        var d = a.attr("href");
                        if (!o && r && d.length > 1 && "#" == d.slice(0, 1))
                            try {
                                var c = e(d, t.$menu);
                                c.is("." + s.panel) && ((o = !0), t[a.parent().hasClass(s.vertical) ? "togglePanel" : "openPanel"](c));
                            } catch (h) {}
                        if ((o && i.preventDefault(), !o && r && a.is("." + s.listview + " > li > a") && !a.is('[rel="external"]') && !a.is('[target="_blank"]'))) {
                            t.__valueOrFn(t.opts.onClick.setSelected, a) && t.setSelected(e(i.target).parent());
                            var f = t.__valueOrFn(t.opts.onClick.preventDefault, a, "#" == d.slice(0, 1));
                            f && i.preventDefault(), t.__valueOrFn(t.opts.onClick.close, a, f) && t.opts.offCanvas && "function" == typeof t.close && t.close();
                        }
                    });
                },
                _initMatchMedia: function() {
                    var e = this;
                    this._fireMatchMedia(),
                        r.$wndw.on(o.resize, function(t) {
                            e._fireMatchMedia();
                        });
                },
                _fireMatchMedia: function() {
                    for (var e in this.mtch)
                        for (var t = window.matchMedia && window.matchMedia(e).matches ? "yes" : "no", n = 0; n < this.mtch[e].length; n++) this.mtch[e][n][t].call(this);
                },
                _getOriginalMenuId: function() {
                    var e = this.$menu.attr("id");
                    return this.conf.clone && e && e.length && (e = s.umm(e)), e;
                },
                __api: function() {
                    var t = this,
                        n = {};
                    return (
                        e.each(this._api, function(e) {
                            var i = this;
                            n[i] = function() {
                                var e = t[i].apply(t, arguments);
                                return "undefined" == typeof e ? n : e;
                            };
                        }),
                        n
                    );
                },
                __valueOrFn: function(e, t, n) {
                    return "function" == typeof e ? e.call(t[0]) : "undefined" == typeof e && "undefined" != typeof n ? n : e;
                },
                __refactorClass: function(e, t, n) {
                    return e
                        .filter("." + t)
                        .removeClass(t)
                        .addClass(s[n]);
                },
                __findAddBack: function(e, t) {
                    return e.find(t).add(e.filter(t));
                },
                __childAddBack: function(e, t) {
                    return e.children(t).add(e.filter(t));
                },
                __filterListItems: function(e) {
                    return e.not("." + s.divider).not("." + s.hidden);
                },
                __filterListItemAnchors: function(e) {
                    return this.__filterListItems(e)
                        .children("a")
                        .not("." + s.next);
                },
                __transitionend: function(e, t, n) {
                    var i = !1,
                        s = function(n) {
                            ("undefined" != typeof n && n.target != e[0]) || (i || (e.off(o.transitionend), e.off(o.webkitTransitionEnd), t.call(e[0])), (i = !0));
                        };
                    e.on(o.transitionend, s), e.on(o.webkitTransitionEnd, s), setTimeout(s, 1.1 * n);
                },
                __getUniqueId: function() {
                    return s.mm(e[n].uniqueId++);
                },
            }),
            (e.fn[n] = function(i, s) {
                t(), (i = e.extend(!0, {}, e[n].defaults, i)), (s = e.extend(!0, {}, e[n].configuration, s));
                var a = e();
                return (
                    this.each(function() {
                        var t = e(this);
                        if (!t.data(n)) {
                            var o = new e[n](t, i, s);
                            o.$menu.data(n, o.__api()), (a = a.add(o.$menu));
                        }
                    }),
                    a
                );
            }),
            (e[n].i18n = (function() {
                var t = {};
                return function(n) {
                    switch (typeof n) {
                        case "object":
                            return e.extend(t, n), t;
                        case "string":
                            return t[n] || n;
                        case "undefined":
                        default:
                            return t;
                    }
                };
            })()),
            (e[n].support = {
                touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1,
                csstransitions: (function() {
                    return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransitions || Modernizr.csstransitions;
                })(),
                csstransforms: (function() {
                    return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransforms || Modernizr.csstransforms;
                })(),
                csstransforms3d: (function() {
                    return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransforms3d || Modernizr.csstransforms3d;
                })(),
            });
            var s, a, o, r;
        }
    })(jQuery),
    /*
     * jQuery mmenu offCanvas add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    (function(e) {
        var t = "mmenu",
            n = "offCanvas";
        (e[t].addons[n] = {
            setup: function() {
                if (this.opts[n]) {
                    var s = this,
                        a = this.opts[n],
                        r = this.conf[n];
                    (o = e[t].glbl),
                    (this._api = e.merge(this._api, ["open", "close", "setPage"])),
                    "object" != typeof a && (a = {}),
                        ("top" != a.position && "bottom" != a.position) || (a.zposition = "front"),
                        (a = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], a)),
                        "string" != typeof r.pageSelector && (r.pageSelector = "> " + r.pageNodetype),
                        (this.vars.opened = !1);
                    var l = [i.offcanvas];
                    "left" != a.position && l.push(i.mm(a.position)),
                        "back" != a.zposition && l.push(i.mm(a.zposition)),
                        e[t].support.csstransforms || l.push(i["no-csstransforms"]),
                        e[t].support.csstransforms3d || l.push(i["no-csstransforms3d"]),
                        this.bind("initMenu:after", function() {
                            var e = this;
                            this.setPage(o.$page),
                                this._initBlocker(),
                                this["_initWindow_" + n](),
                                this.$menu
                                .addClass(l.join(" "))
                                .parent("." + i.wrapper)
                                .removeClass(i.wrapper),
                                this.$menu[r.menuInsertMethod](r.menuInsertSelector);
                            var t = window.location.hash;
                            if (t) {
                                var s = this._getOriginalMenuId();
                                s &&
                                    s == t.slice(1) &&
                                    setTimeout(function() {
                                        e.open();
                                    }, 1e3);
                            }
                        }),
                        this.bind("initExtensions:after", function() {
                            for (var e = [i.mm("widescreen"), i.mm("iconbar")], t = 0; t < e.length; t++)
                                for (var n in this.opts.extensions)
                                    if (this.opts.extensions[n].indexOf(e[t]) > -1) {
                                        !(function(t, n) {
                                            s.matchMedia(
                                                t,
                                                function() {
                                                    o.$html.addClass(e[n]);
                                                },
                                                function() {
                                                    o.$html.removeClass(e[n]);
                                                }
                                            );
                                        })(n, t);
                                        break;
                                    }
                        }),
                        this.bind("open:start:sr-aria", function() {
                            this.__sr_aria(this.$menu, "hidden", !1);
                        }),
                        this.bind("close:finish:sr-aria", function() {
                            this.__sr_aria(this.$menu, "hidden", !0);
                        }),
                        this.bind("initMenu:after:sr-aria", function() {
                            this.__sr_aria(this.$menu, "hidden", !0);
                        });
                }
            },
            add: function() {
                (i = e[t]._c), (s = e[t]._d), (a = e[t]._e), i.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"), s.add("style");
            },
            clickAnchor: function(e, t) {
                var s = this;
                if (this.opts[n]) {
                    var a = this._getOriginalMenuId();
                    if (a && e.is('[href="#' + a + '"]')) {
                        if (t) return !0;
                        var r = e.closest("." + i.menu);
                        if (r.length) {
                            var l = r.data("mmenu");
                            if (l && l.close)
                                return (
                                    l.close(),
                                    s.__transitionend(
                                        r,
                                        function() {
                                            s.open();
                                        },
                                        s.conf.transitionDuration
                                    ), !0
                                );
                        }
                        return this.open(), !0;
                    }
                    if (o.$page) return (a = o.$page.first().attr("id")), a && e.is('[href="#' + a + '"]') ? (this.close(), !0) : void 0;
                }
            },
        }),
        (e[t].defaults[n] = {
            position: "left",
            zposition: "back",
            blockUI: !0,
            moveBackground: !0
        }),
        (e[t].configuration[n] = {
            pageNodetype: "div",
            pageSelector: null,
            noPageSelector: [],
            wrapPageIfNeeded: !0,
            menuInsertMethod: "prependTo",
            menuInsertSelector: "body"
        }),
        (e[t].prototype.open = function() {
            if ((this.trigger("open:before"), !this.vars.opened)) {
                var e = this;
                this._openSetup(),
                    setTimeout(function() {
                        e._openFinish();
                    }, this.conf.openingInterval),
                    this.trigger("open:after");
            }
        }),
        (e[t].prototype._openSetup = function() {
            var t = this,
                r = this.opts[n];
            this.closeAllOthers(),
                o.$page.each(function() {
                    e(this).data(s.style, e(this).attr("style") || "");
                }),
                o.$wndw.trigger(a.resize + "-" + n, [!0]);
            var l = [i.opened];
            r.blockUI && l.push(i.blocking),
                "modal" == r.blockUI && l.push(i.modal),
                r.moveBackground && l.push(i.background),
                "left" != r.position && l.push(i.mm(this.opts[n].position)),
                "back" != r.zposition && l.push(i.mm(this.opts[n].zposition)),
                o.$html.addClass(l.join(" ")),
                setTimeout(function() {
                    t.vars.opened = !0;
                }, this.conf.openingInterval),
                this.$menu.addClass(i.opened);
        }),
        (e[t].prototype._openFinish = function() {
            var e = this;
            this.__transitionend(
                    o.$page.first(),
                    function() {
                        e.trigger("open:finish");
                    },
                    this.conf.transitionDuration
                ),
                this.trigger("open:start"),
                o.$html.addClass(i.opening);
        }),
        (e[t].prototype.close = function() {
            if ((this.trigger("close:before"), this.vars.opened)) {
                var t = this;
                this.__transitionend(
                        o.$page.first(),
                        function() {
                            t.$menu.removeClass(i.opened);
                            var a = [i.opened, i.blocking, i.modal, i.background, i.mm(t.opts[n].position), i.mm(t.opts[n].zposition)];
                            o.$html.removeClass(a.join(" ")),
                                o.$page.each(function() {
                                    e(this).attr("style", e(this).data(s.style));
                                }),
                                (t.vars.opened = !1),
                                t.trigger("close:finish");
                        },
                        this.conf.transitionDuration
                    ),
                    this.trigger("close:start"),
                    o.$html.removeClass(i.opening),
                    this.trigger("close:after");
            }
        }),
        (e[t].prototype.closeAllOthers = function() {
            o.$body
                .find("." + i.menu + "." + i.offcanvas)
                .not(this.$menu)
                .each(function() {
                    var n = e(this).data(t);
                    n && n.close && n.close();
                });
        }),
        (e[t].prototype.setPage = function(t) {
            this.trigger("setPage:before", t);
            var s = this,
                a = this.conf[n];
            (t && t.length) ||
            ((t = o.$body.find(a.pageSelector)), a.noPageSelector.length && (t = t.not(a.noPageSelector.join(", "))), t.length > 1 && a.wrapPageIfNeeded && (t = t.wrapAll("<" + this.conf[n].pageNodetype + " />").parent())),
            t.each(function() {
                    e(this).attr("id", e(this).attr("id") || s.__getUniqueId());
                }),
                t.addClass(i.page + " " + i.slideout),
                (o.$page = t),
                this.trigger("setPage:after", t);
        }),
        (e[t].prototype["_initWindow_" + n] = function() {
            o.$wndw.off(a.keydown + "-" + n).on(a.keydown + "-" + n, function(e) {
                if (o.$html.hasClass(i.opened) && 9 == e.keyCode) return e.preventDefault(), !1;
            });
            var e = 0;
            o.$wndw.off(a.resize + "-" + n).on(a.resize + "-" + n, function(t, n) {
                if (1 == o.$page.length && (n || o.$html.hasClass(i.opened))) {
                    var s = o.$wndw.height();
                    (n || s != e) && ((e = s), o.$page.css("minHeight", s));
                }
            });
        }),
        (e[t].prototype._initBlocker = function() {
            var t = this;
            this.opts[n].blockUI &&
                (o.$blck || (o.$blck = e('<div id="' + i.blocker + '" class="' + i.slideout + '" />')),
                    o.$blck
                    .appendTo(o.$body)
                    .off(a.touchstart + "-" + n + " " + a.touchmove + "-" + n)
                    .on(a.touchstart + "-" + n + " " + a.touchmove + "-" + n, function(e) {
                        e.preventDefault(), e.stopPropagation(), o.$blck.trigger(a.mousedown + "-" + n);
                    })
                    .off(a.mousedown + "-" + n)
                    .on(a.mousedown + "-" + n, function(e) {
                        e.preventDefault(), o.$html.hasClass(i.modal) || (t.closeAllOthers(), t.close());
                    }));
        });
        var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu scrollBugFix add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    ,
    (function(e) {
        var t = "mmenu",
            n = "scrollBugFix";
        (e[t].addons[n] = {
            setup: function() {
                var s = this.opts[n];
                this.conf[n];
                (o = e[t].glbl),
                e[t].support.touch &&
                    this.opts.offCanvas &&
                    this.opts.offCanvas.blockUI &&
                    ("boolean" == typeof s && (s = {
                            fix: s
                        }),
                        "object" != typeof s && (s = {}),
                        (s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s)),
                        s.fix &&
                        (this.bind("open:start", function() {
                                this.$pnls.children("." + i.opened).scrollTop(0);
                            }),
                            this.bind("initMenu:after", function() {
                                this["_initWindow_" + n]();
                            })));
            },
            add: function() {
                (i = e[t]._c), (s = e[t]._d), (a = e[t]._e);
            },
            clickAnchor: function(e, t) {},
        }),
        (e[t].defaults[n] = {
            fix: !0
        }),
        (e[t].prototype["_initWindow_" + n] = function() {
            var t = this;
            o.$docu.off(a.touchmove + "-" + n).on(a.touchmove + "-" + n, function(e) {
                o.$html.hasClass(i.opened) && e.preventDefault();
            });
            var s = !1;
            o.$body
                .off(a.touchstart + "-" + n)
                .on(a.touchstart + "-" + n, "." + i.panels + "> ." + i.panel, function(e) {
                    o.$html.hasClass(i.opened) &&
                        (s ||
                            ((s = !0),
                                0 === e.currentTarget.scrollTop ? (e.currentTarget.scrollTop = 1) : e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight && (e.currentTarget.scrollTop -= 1),
                                (s = !1)));
                })
                .off(a.touchmove + "-" + n)
                .on(a.touchmove + "-" + n, "." + i.panels + "> ." + i.panel, function(t) {
                    o.$html.hasClass(i.opened) && e(this)[0].scrollHeight > e(this).innerHeight() && t.stopPropagation();
                }),
                o.$wndw.off(a.orientationchange + "-" + n).on(a.orientationchange + "-" + n, function() {
                    t.$pnls
                        .children("." + i.opened)
                        .scrollTop(0)
                        .css({
                            "-webkit-overflow-scrolling": "auto"
                        })
                        .css({
                            "-webkit-overflow-scrolling": "touch"
                        });
                });
        });
        var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu screenReader add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    ,
    (function(e) {
        var t = "mmenu",
            n = "screenReader";
        (e[t].addons[n] = {
            setup: function() {
                var a = this,
                    r = this.opts[n],
                    l = this.conf[n];
                (o = e[t].glbl),
                "boolean" == typeof r && (r = {
                        aria: r,
                        text: r
                    }),
                    "object" != typeof r && (r = {}),
                    (r = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], r)),
                    r.aria &&
                    (this.bind("initAddons:after", function() {
                            this.bind("initMenu:after", function() {
                                    this.trigger("initMenu:after:sr-aria");
                                }),
                                this.bind("initNavbar:after", function() {
                                    this.trigger("initNavbar:after:sr-aria", arguments[0]);
                                }),
                                this.bind("openPanel:start", function() {
                                    this.trigger("openPanel:start:sr-aria", arguments[0]);
                                }),
                                this.bind("close:start", function() {
                                    this.trigger("close:start:sr-aria");
                                }),
                                this.bind("close:finish", function() {
                                    this.trigger("close:finish:sr-aria");
                                }),
                                this.bind("open:start", function() {
                                    this.trigger("open:start:sr-aria");
                                }),
                                this.bind("open:finish", function() {
                                    this.trigger("open:finish:sr-aria");
                                });
                        }),
                        this.bind("updateListview", function() {
                            this.$pnls
                                .find("." + i.listview)
                                .children()
                                .each(function() {
                                    a.__sr_aria(e(this), "hidden", e(this).is("." + i.hidden));
                                });
                        }),
                        this.bind("openPanel:start", function(e) {
                            var t = this.$menu
                                .find("." + i.panel)
                                .not(e)
                                .not(e.parents("." + i.panel)),
                                n = e.add(e.find("." + i.vertical + "." + i.opened).children("." + i.panel));
                            this.__sr_aria(t, "hidden", !0), this.__sr_aria(n, "hidden", !1);
                        }),
                        this.bind("closePanel", function(e) {
                            this.__sr_aria(e, "hidden", !0);
                        }),
                        this.bind("initPanels:after", function(t) {
                            var n = t.find("." + i.prev + ", ." + i.next).each(function() {
                                a.__sr_aria(e(this), "owns", e(this).attr("href").replace("#", ""));
                            });
                            this.__sr_aria(n, "haspopup", !0);
                        }),
                        this.bind("initNavbar:after", function(e) {
                            var t = e.children("." + i.navbar);
                            this.__sr_aria(t, "hidden", !e.hasClass(i.hasnavbar));
                        }),
                        r.text &&
                        (this.bind("initlistview:after", function(e) {
                                var t = e
                                    .find("." + i.listview)
                                    .find("." + i.fullsubopen)
                                    .parent()
                                    .children("span");
                                this.__sr_aria(t, "hidden", !0);
                            }),
                            "parent" == this.opts.navbar.titleLink &&
                            this.bind("initNavbar:after", function(e) {
                                var t = e.children("." + i.navbar),
                                    n = !!t.children("." + i.prev).length;
                                this.__sr_aria(t.children("." + i.title), "hidden", n);
                            }))),
                    r.text &&
                    (this.bind("initAddons:after", function() {
                            this.bind("setPage:after", function() {
                                this.trigger("setPage:after:sr-text", arguments[0]);
                            });
                        }),
                        this.bind("initNavbar:after", function(n) {
                            var s = n.children("." + i.navbar),
                                a = s.children("." + i.title).text(),
                                o = e[t].i18n(l.text.closeSubmenu);
                            a && (o += " (" + a + ")"), s.children("." + i.prev).html(this.__sr_text(o));
                        }),
                        this.bind("initListview:after", function(n) {
                            var o = n.data(s.parent);
                            if (o && o.length) {
                                var r = o.children("." + i.next),
                                    d = r.nextAll("span, a").first().text(),
                                    c = e[t].i18n(l.text[r.parent().is("." + i.vertical) ? "toggleSubmenu" : "openSubmenu"]);
                                d && (c += " (" + d + ")"), r.html(a.__sr_text(c));
                            }
                        }));
            },
            add: function() {
                (i = e[t]._c), (s = e[t]._d), (a = e[t]._e), i.add("sronly");
            },
            clickAnchor: function(e, t) {},
        }),
        (e[t].defaults[n] = {
            aria: !0,
            text: !0
        }),
        (e[t].configuration[n] = {
            text: {
                closeMenu: "Close menu",
                closeSubmenu: "Close submenu",
                openSubmenu: "Open submenu",
                toggleSubmenu: "Toggle submenu"
            }
        }),
        (e[t].prototype.__sr_aria = function(e, t, n) {
            e.prop("aria-" + t, n)[n ? "attr" : "removeAttr"]("aria-" + t, n);
        }),
        (e[t].prototype.__sr_text = function(e) {
            return '<span class="' + i.sronly + '">' + e + "</span>";
        });
        var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu autoHeight add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    ,
    (function(e) {
        var t = "mmenu",
            n = "autoHeight";
        (e[t].addons[n] = {
            setup: function() {
                var s = this.opts[n];
                this.conf[n];
                if (
                    ((o = e[t].glbl),
                        "boolean" == typeof s && s && (s = {
                            height: "auto"
                        }),
                        "string" == typeof s && (s = {
                            height: s
                        }),
                        "object" != typeof s && (s = {}),
                        (s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s)),
                        "auto" == s.height || "highest" == s.height)
                ) {
                    this.bind("initMenu:after", function() {
                        this.$menu.addClass(i.autoheight);
                    });
                    var a = function(t) {
                        if (!this.opts.offCanvas || this.vars.opened) {
                            var n = Math.max(parseInt(this.$pnls.css("top"), 10), 0) || 0,
                                a = Math.max(parseInt(this.$pnls.css("bottom"), 10), 0) || 0,
                                o = 0;
                            this.$menu.addClass(i.measureheight),
                                "auto" == s.height ?
                                ((t = t || this.$pnls.children("." + i.opened)),
                                    t.is("." + i.vertical) && (t = t.parents("." + i.panel).not("." + i.vertical)),
                                    t.length || (t = this.$pnls.children("." + i.panel)),
                                    (o = t.first().outerHeight())) :
                                "highest" == s.height &&
                                this.$pnls.children().each(function() {
                                    var t = e(this);
                                    t.is("." + i.vertical) &&
                                        (t = t
                                            .parents("." + i.panel)
                                            .not("." + i.vertical)
                                            .first()),
                                        (o = Math.max(o, t.outerHeight()));
                                }),
                                this.$menu.height(o + n + a).removeClass(i.measureheight);
                        }
                    };
                    this.opts.offCanvas && this.bind("open:start", a),
                        "highest" == s.height && this.bind("initPanels:after", a),
                        "auto" == s.height && (this.bind("updateListview", a), this.bind("openPanel:start", a), this.bind("closePanel", a));
                }
            },
            add: function() {
                (i = e[t]._c), (s = e[t]._d), (a = e[t]._e), i.add("autoheight measureheight"), a.add("resize");
            },
            clickAnchor: function(e, t) {},
        }),
        (e[t].defaults[n] = {
            height: "default"
        });
        var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu counters add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    ,
    (function(e) {
        var t = "mmenu",
            n = "counters";
        (e[t].addons[n] = {
            setup: function() {
                var a = this,
                    r = this.opts[n];
                this.conf[n];
                if (
                    ((o = e[t].glbl),
                        "boolean" == typeof r && (r = {
                            add: r,
                            update: r
                        }),
                        "object" != typeof r && (r = {}),
                        (r = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], r)),
                        this.bind("initListview:after", function(t) {
                            this.__refactorClass(e("em", t), this.conf.classNames[n].counter, "counter");
                        }),
                        r.add &&
                        this.bind("initListview:after", function(t) {
                            var n;
                            switch (r.addTo) {
                                case "panels":
                                    n = t;
                                    break;
                                default:
                                    n = t.filter(r.addTo);
                            }
                            n.each(function() {
                                var t = e(this).data(s.parent);
                                t && (t.children("em." + i.counter).length || t.prepend(e('<em class="' + i.counter + '" />')));
                            });
                        }),
                        r.update)
                ) {
                    var l = function(t) {
                        (t = t || this.$pnls.children("." + i.panel)),
                        t.each(function() {
                            var t = e(this),
                                n = t.data(s.parent);
                            if (n) {
                                var o = n.children("em." + i.counter);
                                o.length && ((t = t.children("." + i.listview)), t.length && o.html(a.__filterListItems(t.children()).length));
                            }
                        });
                    };
                    this.bind("initListview:after", l), this.bind("updateListview", l);
                }
            },
            add: function() {
                (i = e[t]._c), (s = e[t]._d), (a = e[t]._e), i.add("counter search noresultsmsg");
            },
            clickAnchor: function(e, t) {},
        }),
        (e[t].defaults[n] = {
            add: !1,
            addTo: "panels",
            count: !1
        }),
        (e[t].configuration.classNames[n] = {
            counter: "Counter"
        });
        var i, s, a, o;
    })(jQuery)
    /*

    * jQuery mmenu fixedElements add-on
    * mmenu.frebsite.nl
    *
    * Copyright (c) Fred Heusschen
    */
    ,
    (function(e) {
        var t = "mmenu",
            n = "fixedElements";
        (e[t].addons[n] = {
            setup: function() {
                if (this.opts.offCanvas) {
                    var s = (this.opts[n], this.conf[n]);
                    o = e[t].glbl;
                    var a = function(t) {
                        var a = this.conf.classNames[n].fixed,
                            r = t.find("." + a);
                        this.__refactorClass(r, a, "slideout"), r[s.elemInsertMethod](s.elemInsertSelector);
                        var l = this.conf.classNames[n].sticky,
                            d = t.find("." + l);
                        this.__refactorClass(d, l, "sticky"),
                            (d = t.find("." + i.sticky)),
                            d.length &&
                            (this.bind("open:before", function() {
                                    var t = o.$wndw.scrollTop() + s.sticky.offset;
                                    d.each(function() {
                                        e(this).css("top", parseInt(e(this).css("top"), 10) + t);
                                    });
                                }),
                                this.bind("close:finish", function() {
                                    d.css("top", "");
                                }));
                    };
                    this.bind("setPage:after", a);
                }
            },
            add: function() {
                (i = e[t]._c), (s = e[t]._d), (a = e[t]._e), i.add("sticky");
            },
            clickAnchor: function(e, t) {},
        }),
        (e[t].configuration[n] = {
            sticky: {
                offset: 0
            },
            elemInsertMethod: "appendTo",
            elemInsertSelector: "body"
        }),
        (e[t].configuration.classNames[n] = {
            fixed: "Fixed",
            sticky: "Sticky"
        });
        var i, s, a, o;
    })(jQuery)
    /*
 
    * jQuery mmenu lazySubmenus add-on
    * mmenu.frebsite.nl
    *
    * Copyright (c) Fred Heusschen
    */
    ,
    (function(e) {
        var t = "mmenu",
            n = "lazySubmenus";
        (e[t].addons[n] = {
            setup: function() {
                var s = this.opts[n];
                this.conf[n];
                (o = e[t].glbl),
                "boolean" == typeof s && (s = {
                        load: s
                    }),
                    "object" != typeof s && (s = {}),
                    (s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s)),
                    s.load &&
                    (this.bind("initMenu:after", function() {
                            this.$pnls
                                .find("li")
                                .children(this.conf.panelNodetype)
                                .not("." + i.inset)
                                .not("." + i.nolistview)
                                .not("." + i.nopanel)
                                .addClass(i.lazysubmenu + " " + i.nolistview + " " + i.nopanel);
                        }),
                        this.bind("initPanels:before", function(e) {
                            (e = e || this.$pnls.children(this.conf.panelNodetype)),
                            this.__findAddBack(e, "." + i.lazysubmenu)
                                .not("." + i.lazysubmenu + " ." + i.lazysubmenu)
                                .removeClass(i.lazysubmenu + " " + i.nolistview + " " + i.nopanel);
                        }),
                        this.bind("initOpened:before", function() {
                            var e = this.$pnls.find("." + this.conf.classNames.selected).parents("." + i.lazysubmenu);
                            e.length && (e.removeClass(i.lazysubmenu + " " + i.nolistview + " " + i.nopanel), this.initPanels(e.last()));
                        }),
                        this.bind("openPanel:before", function(e) {
                            var t = this.__findAddBack(e, "." + i.lazysubmenu).not("." + i.lazysubmenu + " ." + i.lazysubmenu);
                            t.length && this.initPanels(t);
                        }));
            },
            add: function() {
                (i = e[t]._c), (s = e[t]._d), (a = e[t]._e), i.add("lazysubmenu"), s.add("lazysubmenu");
            },
            clickAnchor: function(e, t) {},
        }),
        (e[t].defaults[n] = {
            load: !1
        }),
        (e[t].configuration[n] = {});
        var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu navbar add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    ,
    (function(e) {
        var t = "mmenu",
            n = "navbars";
        (e[t].addons[n] = {
            setup: function() {
                var s = this,
                    a = this.opts[n],
                    r = this.conf[n];
                if (((o = e[t].glbl), "undefined" != typeof a)) {
                    a instanceof Array || (a = [a]);
                    var l = {},
                        d = {};
                    a.length &&
                        (e.each(a, function(o) {
                                var c = a[o];
                                "boolean" == typeof c && c && (c = {}),
                                    "object" != typeof c && (c = {}),
                                    "undefined" == typeof c.content && (c.content = ["prev", "title"]),
                                    c.content instanceof Array || (c.content = [c.content]),
                                    (c = e.extend(!0, {}, s.opts.navbar, c));
                                var h = e('<div class="' + i.navbar + '" />'),
                                    f = c.height;
                                "number" != typeof f && (f = 1), (f = Math.min(4, Math.max(1, f))), h.addClass(i.navbar + "-size-" + f);
                                var u = c.position;
                                "bottom" != u && (u = "top"), l[u] || (l[u] = 0), (l[u] += f), d[u] || (d[u] = e('<div class="' + i.navbars + "-" + u + '" />')), d[u].append(h);
                                for (var p = 0, v = 0, m = c.content.length; v < m; v++) {
                                    var b = e[t].addons[n][c.content[v]] || !1;
                                    b ? (p += b.call(s, h, c, r)) : ((b = c.content[v]), b instanceof e || (b = e(c.content[v])), h.append(b));
                                }
                                (p += Math.ceil(h.children().not("." + i.btn).length / f)), p > 1 && h.addClass(i.navbar + "-content-" + p), h.children("." + i.btn).length && h.addClass(i.hasbtns);
                            }),
                            this.bind("initMenu:after", function() {
                                for (var e in l) this.$menu.addClass(i.hasnavbar + "-" + e + "-" + l[e]), this.$menu["bottom" == e ? "append" : "prepend"](d[e]);
                            }));
                }
            },
            add: function() {
                (i = e[t]._c), (s = e[t]._d), (a = e[t]._e), i.add("navbars close hasbtns");
            },
            clickAnchor: function(e, t) {},
        }),
        (e[t].configuration[n] = {
            breadcrumbSeparator: "/"
        }),
        (e[t].configuration.classNames[n] = {});
        var i, s, a, o;
    })(jQuery)
    /*

    * jQuery mmenu RTL add-on
    * mmenu.frebsite.nl
    *
    * Copyright (c) Fred Heusschen
    */
    ,
    (function(e) {
        var t = "mmenu",
            n = "rtl";
        (e[t].addons[n] = {
            setup: function() {
                var s = this.opts[n];
                this.conf[n];
                (o = e[t].glbl),
                "object" != typeof s && (s = {
                        use: s
                    }),
                    (s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s)),
                    "boolean" != typeof s.use && (s.use = "rtl" == (o.$html.attr("dir") || "").toLowerCase()),
                    s.use &&
                    this.bind("initMenu:after", function() {
                        this.$menu.addClass(i.rtl);
                    });
            },
            add: function() {
                (i = e[t]._c), (s = e[t]._d), (a = e[t]._e), i.add("rtl");
            },
            clickAnchor: function(e, t) {},
        }),
        (e[t].defaults[n] = {
            use: "detect"
        });
        var i, s, a, o;
    })(jQuery)
    /*

    * jQuery mmenu toggles add-on
    * mmenu.frebsite.nl
    *
    * Copyright (c) Fred Heusschen
    */
    ,
    (function(e) {
        var t = "mmenu",
            n = "toggles";
        (e[t].addons[n] = {
            setup: function() {
                var s = this;
                this.opts[n], this.conf[n];
                (o = e[t].glbl),
                this.bind("initListview:after", function(t) {
                    this.__refactorClass(t.find("input"), this.conf.classNames[n].toggle, "toggle"),
                        this.__refactorClass(t.find("input"), this.conf.classNames[n].check, "check"),
                        t.find("input." + i.toggle + ", input." + i.check).each(function() {
                            var t = e(this),
                                n = t.closest("li"),
                                a = t.hasClass(i.toggle) ? "toggle" : "check",
                                o = t.attr("id") || s.__getUniqueId();
                            n.children('label[for="' + o + '"]').length || (t.attr("id", o), n.prepend(t), e('<label for="' + o + '" class="' + i[a] + '"></label>').insertBefore(n.children("a, span").last()));
                        });
                });
            },
            add: function() {
                (i = e[t]._c), (s = e[t]._d), (a = e[t]._e), i.add("toggle check");
            },
            clickAnchor: function(e, t) {},
        }),
        (e[t].configuration.classNames[n] = {
            toggle: "Toggle",
            check: "Check"
        });
        var i, s, a, o;
    })(jQuery);
    return true;
});

/*
 * jQuery Show hide passoword
 */
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof exports === "object") {
        factory(require("jquery"));
    } else {
        factory(jQuery);
    }
})(function($, undef) {
    var dataKey = "plugin_hideShowPassword",
        shorthandArgs = ["show", "innerToggle"],
        SPACE = 32,
        ENTER = 13;
    var canSetInputAttribute = (function() {
        var body = document.body,
            input = document.createElement("input"),
            result = true;
        if (!body) {
            body = document.createElement("body");
        }
        input = body.appendChild(input);
        try {
            input.setAttribute("type", "text");
        } catch (e) {
            result = false;
        }
        body.removeChild(input);
        return result;
    })();
    var defaults = {
        show: "infer",
        innerToggle: false,
        enable: canSetInputAttribute,
        triggerOnToggle: false,
        className: "hideShowPassword-field",
        initEvent: "hideShowPasswordInit",
        changeEvent: "passwordVisibilityChange",
        props: {
            autocapitalize: "off",
            autocomplete: "off",
            autocorrect: "off",
            spellcheck: "false"
        },
        toggle: {
            element: '<button type="button">',
            className: "hideShowPassword-toggle",
            touchSupport: typeof Modernizr === "undefined" ? false : Modernizr.touchevents,
            attachToEvent: "click.hideShowPassword",
            attachToTouchEvent: "touchstart.hideShowPassword mousedown.hideShowPassword",
            attachToKeyEvent: "keyup",
            attachToKeyCodes: true,
            styles: {
                position: "absolute"
            },
            touchStyles: {
                pointerEvents: "none"
            },
            position: "infer",
            verticalAlign: "middle",
            offset: 0,
            attr: {
                role: "button",
                "aria-label": "Show Password",
                title: "Show Password",
                tabIndex: 0
            },
        },
        wrapper: {
            element: "<div>",
            className: "hideShowPassword-wrapper",
            enforceWidth: true,
            styles: {
                position: "relative"
            },
            inheritStyles: ["display", "verticalAlign", "marginTop", "marginRight", "marginBottom", "marginLeft"],
            innerElementStyles: {
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0
            },
        },
        states: {
            shown: {
                className: "hideShowPassword-shown",
                changeEvent: "passwordShown",
                props: {
                    type: "text"
                },
                toggle: {
                    className: "hideShowPassword-toggle-hide",
                    content: "Hide",
                    attr: {
                        "aria-pressed": "true",
                        title: "Hide Password"
                    }
                },
            },
            hidden: {
                className: "hideShowPassword-hidden",
                changeEvent: "passwordHidden",
                props: {
                    type: "password"
                },
                toggle: {
                    className: "hideShowPassword-toggle-show",
                    content: "Show",
                    attr: {
                        "aria-pressed": "false",
                        title: "Show Password"
                    }
                },
            },
        },
    };

    function HideShowPassword(element, options) {
        this.element = $(element);
        this.wrapperElement = $();
        this.toggleElement = $();
        this.init(options);
    }
    HideShowPassword.prototype = {
        init: function(options) {
            if (this.update(options, defaults)) {
                this.element.addClass(this.options.className);
                if (this.options.innerToggle) {
                    this.wrapElement(this.options.wrapper);
                    this.initToggle(this.options.toggle);
                    if (typeof this.options.innerToggle === "string") {
                        this.toggleElement.hide();
                        this.element.one(
                            this.options.innerToggle,
                            $.proxy(function() {
                                this.toggleElement.show();
                            }, this)
                        );
                    }
                }
                this.element.trigger(this.options.initEvent, [this]);
            }
        },
        update: function(options, base) {
            this.options = this.prepareOptions(options, base);
            if (this.updateElement()) {
                this.element.trigger(this.options.changeEvent, [this]).trigger(this.state().changeEvent, [this]);
            }
            return this.options.enable;
        },
        toggle: function(showVal) {
            showVal = showVal || "toggle";
            return this.update({
                show: showVal
            });
        },
        prepareOptions: function(options, base) {
            var original = options || {},
                keyCodes = [],
                testElement;
            base = base || this.options;
            options = $.extend(true, {}, base, options);
            if (original.hasOwnProperty("wrapper") && original.wrapper.hasOwnProperty("inheritStyles")) {
                options.wrapper.inheritStyles = original.wrapper.inheritStyles;
            }
            if (options.enable) {
                if (options.show === "toggle") {
                    options.show = this.isType("hidden", options.states);
                } else if (options.show === "infer") {
                    options.show = this.isType("shown", options.states);
                }
                if (options.toggle.position === "infer") {
                    options.toggle.position = this.element.css("text-direction") === "rtl" ? "left" : "right";
                }
                if (!$.isArray(options.toggle.attachToKeyCodes)) {
                    if (options.toggle.attachToKeyCodes === true) {
                        testElement = $(options.toggle.element);
                        switch (testElement.prop("tagName").toLowerCase()) {
                            case "button":
                            case "input":
                                break;
                            case "a":
                                if (testElement.filter("[href]").length) {
                                    keyCodes.push(SPACE);
                                    break;
                                }
                            default:
                                keyCodes.push(SPACE, ENTER);
                                break;
                        }
                    }
                    options.toggle.attachToKeyCodes = keyCodes;
                }
            }
            return options;
        },
        updateElement: function() {
            if (!this.options.enable || this.isType()) return false;
            this.element.prop($.extend({}, this.options.props, this.state().props)).addClass(this.state().className).removeClass(this.otherState().className);
            if (this.options.triggerOnToggle) {
                this.element.trigger(this.options.triggerOnToggle, [this]);
            }
            this.updateToggle();
            return true;
        },
        isType: function(comparison, states) {
            states = states || this.options.states;
            comparison = comparison || this.state(undef, undef, states).props.type;
            if (states[comparison]) {
                comparison = states[comparison].props.type;
            }
            return this.element.prop("type") === comparison;
        },
        state: function(key, invert, states) {
            states = states || this.options.states;
            if (key === undef) {
                key = this.options.show;
            }
            if (typeof key === "boolean") {
                key = key ? "shown" : "hidden";
            }
            if (invert) {
                key = key === "shown" ? "hidden" : "shown";
            }
            return states[key];
        },
        otherState: function(key) {
            return this.state(key, true);
        },
        wrapElement: function(options) {
            var enforceWidth = options.enforceWidth,
                targetWidth;
            if (!this.wrapperElement.length) {
                targetWidth = this.element.outerWidth();
                $.each(
                    options.inheritStyles,
                    $.proxy(function(index, prop) {
                        options.styles[prop] = this.element.css(prop);
                    }, this)
                );
                this.element.css(options.innerElementStyles).wrap($(options.element).addClass(options.className).css(options.styles));
                this.wrapperElement = this.element.parent();
                if (enforceWidth === true) {
                    enforceWidth = this.wrapperElement.outerWidth() === targetWidth ? false : targetWidth;
                }
                if (enforceWidth !== false) {
                    this.wrapperElement.css("width", enforceWidth);
                }
            }
            return this.wrapperElement;
        },
        initToggle: function(options) {
            if (!this.toggleElement.length) {
                this.toggleElement = $(options.element).attr(options.attr).addClass(options.className).css(options.styles).appendTo(this.wrapperElement);
                this.updateToggle();
                this.positionToggle(options.position, options.verticalAlign, options.offset);
                if (options.touchSupport) {
                    this.toggleElement.css(options.touchStyles);
                    this.element.on(options.attachToTouchEvent, $.proxy(this.toggleTouchEvent, this));
                } else {
                    this.toggleElement.on(options.attachToEvent, $.proxy(this.toggleEvent, this));
                }
                if (options.attachToKeyCodes.length) {
                    this.toggleElement.on(options.attachToKeyEvent, $.proxy(this.toggleKeyEvent, this));
                }
            }
            return this.toggleElement;
        },
        positionToggle: function(position, verticalAlign, offset) {
            var styles = {};
            styles[position] = offset;
            switch (verticalAlign) {
                case "top":
                case "bottom":
                    styles[verticalAlign] = offset;
                    break;
                case "middle":
                    styles.top = "50%";
                    styles.marginTop = this.toggleElement.outerHeight() / -2;
                    break;
            }
            return this.toggleElement.css(styles);
        },
        updateToggle: function(state, otherState) {
            var paddingProp, targetPadding;
            if (this.toggleElement.length) {
                paddingProp = "padding-" + this.options.toggle.position;
                state = state || this.state().toggle;
                otherState = otherState || this.otherState().toggle;
                this.toggleElement.attr(state.attr).addClass(state.className).removeClass(otherState.className).html(state.content);
                targetPadding = this.toggleElement.outerWidth() + this.options.toggle.offset * 2;
                if (this.element.css(paddingProp) !== targetPadding) {
                    this.element.css(paddingProp, targetPadding);
                }
            }
            return this.toggleElement;
        },
        toggleEvent: function(event) {
            event.preventDefault();
            this.toggle();
        },
        toggleKeyEvent: function(event) {
            $.each(
                this.options.toggle.attachToKeyCodes,
                $.proxy(function(index, keyCode) {
                    if (event.which === keyCode) {
                        this.toggleEvent(event);
                        return false;
                    }
                }, this)
            );
        },
        toggleTouchEvent: function(event) {
            var toggleX = this.toggleElement.offset().left,
                eventX,
                lesser,
                greater;
            if (toggleX) {
                eventX = event.pageX || event.originalEvent.pageX;
                if (this.options.toggle.position === "left") {
                    toggleX += this.toggleElement.outerWidth();
                    lesser = eventX;
                    greater = toggleX;
                } else {
                    lesser = toggleX;
                    greater = eventX;
                }
                if (greater >= lesser) {
                    this.toggleEvent(event);
                }
            }
        },
    };
    $.fn.hideShowPassword = function() {
        var options = {};
        $.each(arguments, function(index, value) {
            var newOptions = {};
            if (typeof value === "object") {
                newOptions = value;
            } else if (shorthandArgs[index]) {
                newOptions[shorthandArgs[index]] = value;
            } else {
                return false;
            }
            $.extend(true, options, newOptions);
        });
        return this.each(function() {
            var $this = $(this),
                data = $this.data(dataKey);
            if (data) {
                data.update(options);
            } else {
                $this.data(dataKey, new HideShowPassword(this, options));
            }
        });
    };
    $.each({
        show: true,
        hide: false,
        toggle: "toggle"
    }, function(verb, showVal) {
        $.fn[verb + "Password"] = function(innerToggle, options) {
            return this.hideShowPassword(showVal, innerToggle, options);
        };
    });
});
/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by HernÃ¡n Sartorio  */
!(function(e) {
    e.fn.niceSelect = function(t) {
        function s(t) {
            t.after(
                e("<div></div>")
                .addClass("nice-select")
                .addClass(t.attr("class") || "")
                .addClass(t.attr("disabled") ? "disabled" : "")
                .attr("tabindex", t.attr("disabled") ? null : "0")
                .html('<span class="current"></span><ul class="list"></ul>')
            );
            var s = t.next(),
                n = t.find("option"),
                i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()),
                n.each(function(t) {
                    var n = e(this),
                        i = n.data("display");
                    s.find("ul").append(
                        e("<li></li>")
                        .attr("data-value", n.val())
                        .attr("data-display", i || null)
                        .addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : ""))
                        .html(n.text())
                    );
                });
        }
        if ("string" == typeof t)
            return (
                "update" == t ?
                this.each(function() {
                    var t = e(this),
                        n = e(this).next(".nice-select"),
                        i = n.hasClass("open");
                    n.length && (n.remove(), s(t), i && t.next().trigger("click"));
                }) :
                "destroy" == t ?
                (this.each(function() {
                        var t = e(this),
                            s = e(this).next(".nice-select");
                        s.length && (s.remove(), t.css("display", ""));
                    }),
                    0 == e(".nice-select").length && e(document).off(".nice_select")) :
                console.log('Method "' + t + '" does not exist.'),
                this
            );
        this.hide(),
            this.each(function() {
                var t = e(this);
                t.next().hasClass("nice-select") || s(t);
            }),
            e(document).off(".nice_select"),
            e(document).on("click.nice_select", ".nice-select", function(t) {
                var s = e(this);
                e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus();
            }),
            e(document).on("click.nice_select", function(t) {
                0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option");
            }),
            e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t) {
                var s = e(this),
                    n = s.closest(".nice-select");
                n.find(".selected").removeClass("selected"), s.addClass("selected");
                var i = s.data("display") || s.text();
                n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change");
            }),
            e(document).on("keydown.nice_select", ".nice-select", function(t) {
                var s = e(this),
                    n = e(s.find(".focus") || s.find(".list .option.selected"));
                if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;
                if (40 == t.keyCode) {
                    if (s.hasClass("open")) {
                        var i = n.nextAll(".option:not(.disabled)").first();
                        i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"));
                    } else s.trigger("click");
                    return !1;
                }
                if (38 == t.keyCode) {
                    if (s.hasClass("open")) {
                        var l = n.prevAll(".option:not(.disabled)").first();
                        l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"));
                    } else s.trigger("click");
                    return !1;
                }
                if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
                else if (9 == t.keyCode && s.hasClass("open")) return !1;
            });
        var n = document.createElement("a").style;
        return (n.cssText = "pointer-events:auto"), "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this;
    };
})(jQuery);

/*! rangeslider.js - v2.3.0 | (c) 2016 @andreruffert | MIT license | https://github.com/andreruffert/rangeslider.js */
!(function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? (module.exports = t(require("jquery"))) : t(jQuery);
})(function(o) {
    "use strict";
    Number.isNaN =
        Number.isNaN ||
        function(t) {
            return "number" == typeof t && t != t;
        };
    var t,
        r = "rangeslider",
        h = 0,
        a = ((t = document.createElement("input")).setAttribute("type", "range"), "text" !== t.type),
        l = {
            polyfill: !0,
            orientation: "horizontal",
            isRTL: !1,
            rangeClass: "rangeslider",
            disabledClass: "rangeslider--disabled",
            activeClass: "rangeslider--active",
            horizontalClass: "rangeslider--horizontal",
            verticalClass: "rangeslider--vertical",
            fillClass: "rangeslider__fill",
            handleClass: "rangeslider__handle",
            startEvent: ["mousedown", "touchstart", "pointerdown"],
            moveEvent: ["mousemove", "touchmove", "pointermove"],
            endEvent: ["mouseup", "touchend", "pointerup"],
        },
        d = {
            orientation: {
                horizontal: {
                    dimension: "width",
                    direction: "left",
                    directionStyle: "left",
                    coordinate: "x"
                },
                vertical: {
                    dimension: "height",
                    direction: "top",
                    directionStyle: "bottom",
                    coordinate: "y"
                }
            }
        };

    function e(t, i) {
        var e = (function(t) {
                for (var i, e = [], n = t.parentNode;
                    (i = n) && (0 === i.offsetWidth || 0 === i.offsetHeight || !1 === i.open);) e.push(n), (n = n.parentNode);
                return e;
            })(t),
            n = e.length,
            s = [],
            o = t[i];

        function r(t) {
            void 0 !== t.open && (t.open = !t.open);
        }
        if (n) {
            for (var h = 0; h < n; h++)
                (s[h] = e[h].style.cssText),
                e[h].style.setProperty ? e[h].style.setProperty("display", "block", "important") : (e[h].style.cssText += ";display: block !important"),
                (e[h].style.height = "0"),
                (e[h].style.overflow = "hidden"),
                (e[h].style.visibility = "hidden"),
                r(e[h]);
            o = t[i];
            for (var a = 0; a < n; a++)(e[a].style.cssText = s[a]), r(e[a]);
        }
        return o;
    }

    function n(t, i) {
        var e = parseFloat(t);
        return Number.isNaN(e) ? i : e;
    }

    function s(t) {
        return t.charAt(0).toUpperCase() + t.substr(1);
    }

    function u(t, i) {
        if (
            ((this.$window = o(window)),
                (this.$document = o(document)),
                (this.$element = o(t)),
                (this.options = o.extend({}, l, i)),
                (this.polyfill = this.options.polyfill),
                (this.orientation = this.$element[0].getAttribute("data-orientation") || this.options.orientation),
                (this.onInit = this.options.onInit),
                (this.onSlide = this.options.onSlide),
                (this.onSlideEnd = this.options.onSlideEnd),
                (this.DIMENSION = d.orientation[this.orientation].dimension),
                (this.DIRECTION = this.options.isRTL ? "right" : "left"),
                (this.DIRECTION_STYLE = this.options.isRTL ? "right" : "left"),
                (this.COORDINATE = d.orientation[this.orientation].coordinate),
                this.polyfill && a)
        )
            return !1;
        (this.identifier = "js-" + r + "-" + h++),
        (this.startEvent = this.options.startEvent.join("." + this.identifier + " ") + "." + this.identifier),
        (this.moveEvent = this.options.moveEvent.join("." + this.identifier + " ") + "." + this.identifier),
        (this.endEvent = this.options.endEvent.join("." + this.identifier + " ") + "." + this.identifier),
        (this.toFixed = (this.step + "").replace(".", "").length - 1),
        (this.$fill = o('<div class="' + this.options.fillClass + '" />')),
        (this.$handle = o('<div class="' + this.options.handleClass + '" />')),
        (this.$range = o('<div class="' + this.options.rangeClass + (this.options.isRTL ? " rangeslider-rtl " : "") + " " + this.options[this.orientation + "Class"] + '" id="' + this.identifier + '" />')
            .insertAfter(this.$element)
            .prepend(this.$fill, this.$handle)),
        this.$element.css({
                position: "absolute",
                width: "1px",
                height: "1px",
                overflow: "hidden",
                opacity: "0"
            }),
            (this.handleDown = o.proxy(this.handleDown, this)),
            (this.handleMove = o.proxy(this.handleMove, this)),
            (this.handleEnd = o.proxy(this.handleEnd, this)),
            this.init();
        var e,
            n,
            s = this;
        this.$window.on(
                "resize." + this.identifier,
                ((e = function() {
                        !(function(t, i) {
                            var e = Array.prototype.slice.call(arguments, 2);
                            setTimeout(function() {
                                return t.apply(null, e);
                            }, i);
                        })(function() {
                            s.update(!1, !1);
                        }, 300);
                    }),
                    (n = (n = 20) || 100),
                    function() {
                        if (!e.debouncing) {
                            var t = Array.prototype.slice.apply(arguments);
                            (e.lastReturnVal = e.apply(window, t)), (e.debouncing = !0);
                        }
                        return (
                            clearTimeout(e.debounceTimeout),
                            (e.debounceTimeout = setTimeout(function() {
                                e.debouncing = !1;
                            }, n)),
                            e.lastReturnVal
                        );
                    })
            ),
            this.$document.on(this.startEvent, "#" + this.identifier + ":not(." + this.options.disabledClass + ")", this.handleDown),
            this.$element.on("change." + this.identifier, function(t, i) {
                if (!i || i.origin !== s.identifier) {
                    var e = t.target.value,
                        n = s.getPositionFromValue(e);
                    s.setPosition(n);
                }
            });
    }
    return (
        (u.prototype.init = function() {
            this.update(!0, !1), this.onInit && "function" == typeof this.onInit && this.onInit();
        }),
        (u.prototype.update = function(t, i) {
            (t = t || !1) &&
            ((this.min = n(this.$element[0].getAttribute("min"), 0)),
                (this.max = n(this.$element[0].getAttribute("max"), 100)),
                (this.value = n(this.$element[0].value, Math.round(this.min + (this.max - this.min) / 2))),
                (this.step = n(this.$element[0].getAttribute("step"), 1))),
            (this.handleDimension = e(this.$handle[0], "offset" + s(this.DIMENSION))),
            (this.rangeDimension = e(this.$range[0], "offset" + s(this.DIMENSION))),
            (this.maxHandlePos = this.rangeDimension - this.handleDimension),
            (this.grabPos = this.handleDimension / 2),
            (this.position = this.getPositionFromValue(this.value)),
            this.$element[0].disabled ? this.$range.addClass(this.options.disabledClass) : this.$range.removeClass(this.options.disabledClass),
                this.setPosition(this.position, i);
        }),
        (u.prototype.handleDown = function(t) {
            if (
                (t.preventDefault(),
                    this.$document.on(this.moveEvent, this.handleMove),
                    this.$document.on(this.endEvent, this.handleEnd),
                    this.$range.addClass(this.options.activeClass), !(-1 < (" " + t.target.className + " ").replace(/[\n\t]/g, " ").indexOf(this.options.handleClass)))
            ) {
                var i = this.getRelativePosition(t),
                    e = this.$range[0].getBoundingClientRect()[this.DIRECTION],
                    n = this.getPositionFromNode(this.$handle[0]) - e,
                    s = "vertical" === this.orientation ? this.maxHandlePos - (i - this.grabPos) : i - this.grabPos;
                this.setPosition(s), n <= i && i < n + this.handleDimension && (this.grabPos = i - n);
            }
        }),
        (u.prototype.handleMove = function(t) {
            t.preventDefault();
            var i = this.getRelativePosition(t),
                e = "vertical" === this.orientation ? this.maxHandlePos - (i - this.grabPos) : i - this.grabPos;
            this.setPosition(e);
        }),
        (u.prototype.handleEnd = function(t) {
            t.preventDefault(),
                this.$document.off(this.moveEvent, this.handleMove),
                this.$document.off(this.endEvent, this.handleEnd),
                this.$range.removeClass(this.options.activeClass),
                this.$element.trigger("change", {
                    origin: this.identifier
                }),
                this.onSlideEnd && "function" == typeof this.onSlideEnd && this.onSlideEnd(this.position, this.value);
        }),
        (u.prototype.cap = function(t, i, e) {
            return t < i ? i : e < t ? e : t;
        }),
        (u.prototype.setPosition = function(t, i) {
            var e, n;
            void 0 === i && (i = !0),
                (e = this.getValueFromPosition(this.cap(t, 0, this.maxHandlePos))),
                (n = this.getPositionFromValue(e)),
                (this.$fill[0].style[this.DIMENSION] = n + this.grabPos + "px"),
                (this.$handle[0].style[this.DIRECTION_STYLE] = n + "px"),
                this.setValue(e),
                (this.position = n),
                (this.value = e),
                i && this.onSlide && "function" == typeof this.onSlide && this.onSlide(n, e);
        }),
        (u.prototype.getPositionFromNode = function(t) {
            for (var i = 0; null !== t;)(i += t.offsetLeft), (t = t.offsetParent);
            return i;
        }),
        (u.prototype.getRelativePosition = function(t) {
            var i = s(this.COORDINATE),
                e = this.$range[0].getBoundingClientRect()[this.DIRECTION],
                n = 0;
            return (
                void 0 !== t.originalEvent["client" + i] ?
                (n = t.originalEvent["client" + i]) :
                t.originalEvent.touches && t.originalEvent.touches[0] && void 0 !== t.originalEvent.touches[0]["client" + i] ?
                (n = t.originalEvent.touches[0]["client" + i]) :
                t.currentPoint && void 0 !== t.currentPoint[this.COORDINATE] && (n = t.currentPoint[this.COORDINATE]),
                this.options.isRTL ? e - n : n - e
            );
        }),
        (u.prototype.getPositionFromValue = function(t) {
            var i;
            return (i = (t - this.min) / (this.max - this.min)), Number.isNaN(i) ? 0 : i * this.maxHandlePos;
        }),
        (u.prototype.getValueFromPosition = function(t) {
            var i, e;
            return (i = t / (this.maxHandlePos || 1)), (e = this.step * Math.round((i * (this.max - this.min)) / this.step) + this.min), Number(e.toFixed(this.toFixed));
        }),
        (u.prototype.setValue = function(t) {
            (t === this.value && "" !== this.$element[0].value) || this.$element.val(t).trigger("input", {
                origin: this.identifier
            });
        }),
        (u.prototype.destroy = function() {
            this.$document.off("." + this.identifier),
                this.$window.off("." + this.identifier),
                this.$element
                .off("." + this.identifier)
                .removeAttr("style")
                .removeData("plugin_" + r),
                this.$range && this.$range.length && this.$range[0].parentNode.removeChild(this.$range[0]);
        }),
        (o.fn[r] = function(e) {
            var n = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var t = o(this),
                    i = t.data("plugin_" + r);
                i || t.data("plugin_" + r, (i = new u(this, e))), "string" == typeof e && i[e].apply(i, n);
            });
        }),
        "rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"
    );
});
/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/
(function() {
    var a,
        b,
        c,
        d,
        e,
        f = function(a, b) {
            return function() {
                return a.apply(b, arguments);
            };
        },
        g = [].indexOf ||
        function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1;
        };
    (b = (function() {
        function a() {}
        return (
            (a.prototype.extend = function(a, b) {
                var c, d;
                for (c in b)(d = b[c]), null == a[c] && (a[c] = d);
                return a;
            }),
            (a.prototype.isMobile = function(a) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
            }),
            (a.prototype.createEvent = function(a, b, c, d) {
                var e;
                return (
                    null == b && (b = !1),
                    null == c && (c = !1),
                    null == d && (d = null),
                    null != document.createEvent ?
                    ((e = document.createEvent("CustomEvent")), e.initCustomEvent(a, b, c, d)) :
                    null != document.createEventObject ?
                    ((e = document.createEventObject()), (e.eventType = a)) :
                    (e.eventName = a),
                    e
                );
            }),
            (a.prototype.emitEvent = function(a, b) {
                return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0;
            }),
            (a.prototype.addEvent = function(a, b, c) {
                return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : (a[b] = c);
            }),
            (a.prototype.removeEvent = function(a, b, c) {
                return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b];
            }),
            (a.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
            }),
            a
        );
    })()),
    (c =
        this.WeakMap ||
        this.MozWeakMap ||
        (c = (function() {
            function a() {
                (this.keys = []), (this.values = []);
            }
            return (
                (a.prototype.get = function(a) {
                    var b, c, d, e, f;
                    for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                        if (((c = f[b]), c === a)) return this.values[b];
                }),
                (a.prototype.set = function(a, b) {
                    var c, d, e, f, g;
                    for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                        if (((d = g[c]), d === a)) return void(this.values[c] = b);
                    return this.keys.push(a), this.values.push(b);
                }),
                a
            );
        })())),
    (a =
        this.MutationObserver ||
        this.WebkitMutationObserver ||
        this.MozMutationObserver ||
        (a = (function() {
            function a() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
                    "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
            }
            return (a.notSupported = !0), (a.prototype.observe = function() {}), a;
        })())),
    (d =
        this.getComputedStyle ||
        function(a, b) {
            return (
                (this.getPropertyValue = function(b) {
                    var c;
                    return (
                        "float" === b && (b = "styleFloat"),
                        e.test(b) &&
                        b.replace(e, function(a, b) {
                            return b.toUpperCase();
                        }),
                        (null != (c = a.currentStyle) ? c[b] : void 0) || null
                    );
                }),
                this
            );
        }),
    (e = /(\-([a-z]){1})/g),
    (this.WOW = (function() {
        function e(a) {
            null == a && (a = {}),
                (this.scrollCallback = f(this.scrollCallback, this)),
                (this.scrollHandler = f(this.scrollHandler, this)),
                (this.resetAnimation = f(this.resetAnimation, this)),
                (this.start = f(this.start, this)),
                (this.scrolled = !0),
                (this.config = this.util().extend(a, this.defaults)),
                null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)),
                (this.animationNameCache = new c()),
                (this.wowEvent = this.util().createEvent(this.config.boxClass));
        }
        return (
            (e.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null
            }),
            (e.prototype.init = function() {
                var a;
                return (
                    (this.element = window.document.documentElement), "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), (this.finished = [])
                );
            }),
            (e.prototype.start = function() {
                var b, c, d, e;
                if (
                    ((this.stopped = !1),
                        (this.boxes = function() {
                            var a, c, d, e;
                            for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++)(b = d[a]), e.push(b);
                            return e;
                        }.call(this)),
                        (this.all = function() {
                            var a, c, d, e;
                            for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)(b = d[a]), e.push(b);
                            return e;
                        }.call(this)),
                        this.boxes.length)
                )
                    if (this.disabled()) this.resetStyle();
                    else
                        for (e = this.boxes, c = 0, d = e.length; d > c; c++)(b = e[c]), this.applyStyle(b, !0);
                return (
                    this.disabled() ||
                    (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), (this.interval = setInterval(this.scrollCallback, 50))),
                    this.config.live ?
                    new a(
                        (function(a) {
                            return function(b) {
                                var c, d, e, f, g;
                                for (g = [], c = 0, d = b.length; d > c; c++)
                                    (f = b[c]),
                                    g.push(
                                        function() {
                                            var a, b, c, d;
                                            for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++)(e = c[a]), d.push(this.doSync(e));
                                            return d;
                                        }.call(a)
                                    );
                                return g;
                            };
                        })(this)
                    ).observe(document.body, {
                        childList: !0,
                        subtree: !0
                    }) :
                    void 0
                );
            }),
            (e.prototype.stop = function() {
                return (
                    (this.stopped = !0),
                    this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                    this.util().removeEvent(window, "resize", this.scrollHandler),
                    null != this.interval ? clearInterval(this.interval) : void 0
                );
            }),
            (e.prototype.sync = function(b) {
                return a.notSupported ? this.doSync(this.element) : void 0;
            }),
            (e.prototype.doSync = function(a) {
                var b, c, d, e, f;
                if ((null == a && (a = this.element), 1 === a.nodeType)) {
                    for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++)
                        (b = e[c]), g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push((this.scrolled = !0))) : f.push(void 0);
                    return f;
                }
            }),
            (e.prototype.show = function(a) {
                return (
                    this.applyStyle(a),
                    (a.className = a.className + " " + this.config.animateClass),
                    null != this.config.callback && this.config.callback(a),
                    this.util().emitEvent(a, this.wowEvent),
                    this.util().addEvent(a, "animationend", this.resetAnimation),
                    this.util().addEvent(a, "oanimationend", this.resetAnimation),
                    this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
                    this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
                    a
                );
            }),
            (e.prototype.applyStyle = function(a, b) {
                var c, d, e;
                return (
                    (d = a.getAttribute("data-wow-duration")),
                    (c = a.getAttribute("data-wow-delay")),
                    (e = a.getAttribute("data-wow-iteration")),
                    this.animate(
                        (function(f) {
                            return function() {
                                return f.customStyle(a, b, d, c, e);
                            };
                        })(this)
                    )
                );
            }),
            (e.prototype.animate = (function() {
                return "requestAnimationFrame" in window ?
                    function(a) {
                        return window.requestAnimationFrame(a);
                    } :
                    function(a) {
                        return a();
                    };
            })()),
            (e.prototype.resetStyle = function() {
                var a, b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)(a = d[b]), e.push((a.style.visibility = "visible"));
                return e;
            }),
            (e.prototype.resetAnimation = function(a) {
                var b;
                return a.type.toLowerCase().indexOf("animationend") >= 0 ? ((b = a.target || a.srcElement), (b.className = b.className.replace(this.config.animateClass, "").trim())) : void 0;
            }),
            (e.prototype.customStyle = function(a, b, c, d, e) {
                return (
                    b && this.cacheAnimationName(a),
                    (a.style.visibility = b ? "hidden" : "visible"),
                    c && this.vendorSet(a.style, {
                        animationDuration: c
                    }),
                    d && this.vendorSet(a.style, {
                        animationDelay: d
                    }),
                    e && this.vendorSet(a.style, {
                        animationIterationCount: e
                    }),
                    this.vendorSet(a.style, {
                        animationName: b ? "none" : this.cachedAnimationName(a)
                    }),
                    a
                );
            }),
            (e.prototype.vendors = ["moz", "webkit"]),
            (e.prototype.vendorSet = function(a, b) {
                var c, d, e, f;
                d = [];
                for (c in b)
                    (e = b[c]),
                    (a["" + c] = e),
                    d.push(
                        function() {
                            var b, d, g, h;
                            for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++)(f = g[b]), h.push((a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e));
                            return h;
                        }.call(this)
                    );
                return d;
            }),
            (e.prototype.vendorCSS = function(a, b) {
                var c, e, f, g, h, i;
                for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++)(i = f[c]), (g = g || h.getPropertyCSSValue("-" + i + "-" + b));
                return g;
            }),
            (e.prototype.animationName = function(a) {
                var b;
                try {
                    b = this.vendorCSS(a, "animation-name").cssText;
                } catch (c) {
                    b = d(a).getPropertyValue("animation-name");
                }
                return "none" === b ? "" : b;
            }),
            (e.prototype.cacheAnimationName = function(a) {
                return this.animationNameCache.set(a, this.animationName(a));
            }),
            (e.prototype.cachedAnimationName = function(a) {
                return this.animationNameCache.get(a);
            }),
            (e.prototype.scrollHandler = function() {
                return (this.scrolled = !0);
            }),
            (e.prototype.scrollCallback = function() {
                var a;
                return !this.scrolled ||
                    ((this.scrolled = !1),
                        (this.boxes = function() {
                            var b, c, d, e;
                            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)(a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
                            return e;
                        }.call(this)),
                        this.boxes.length || this.config.live) ?
                    void 0 :
                    this.stop();
            }),
            (e.prototype.offsetTop = function(a) {
                for (var b; void 0 === a.offsetTop;) a = a.parentNode;
                for (b = a.offsetTop;
                    (a = a.offsetParent);) b += a.offsetTop;
                return b;
            }),
            (e.prototype.isVisible = function(a) {
                var b, c, d, e, f;
                return (
                    (c = a.getAttribute("data-wow-offset") || this.config.offset),
                    (f = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset),
                    (e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c),
                    (d = this.offsetTop(a)),
                    (b = d + a.clientHeight),
                    e >= d && b >= f
                );
            }),
            (e.prototype.util = function() {
                return null != this._util ? this._util : (this._util = new b());
            }),
            (e.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent);
            }),
            e
        );
    })());
}.call(this));
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!(function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.moment = t());
})(this, function() {
    "use strict";
    var H;

    function f() {
        return H.apply(null, arguments);
    }

    function a(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
    }

    function F(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e);
    }

    function c(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }

    function L(e) {
        if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
        for (var t in e)
            if (c(e, t)) return;
        return 1;
    }

    function o(e) {
        return void 0 === e;
    }

    function u(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e);
    }

    function V(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
    }

    function G(e, t) {
        for (var n = [], s = e.length, i = 0; i < s; ++i) n.push(t(e[i], i));
        return n;
    }

    function E(e, t) {
        for (var n in t) c(t, n) && (e[n] = t[n]);
        return c(t, "toString") && (e.toString = t.toString), c(t, "valueOf") && (e.valueOf = t.valueOf), e;
    }

    function l(e, t, n, s) {
        return Pt(e, t, n, s, !0).utc();
    }

    function m(e) {
        return (
            null == e._pf &&
            (e._pf = {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidEra: null,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                era: null,
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1,
            }),
            e._pf
        );
    }

    function A(e) {
        if (null == e._isValid) {
            var t = m(e),
                n = j.call(t.parsedDateParts, function(e) {
                    return null != e;
                }),
                n = !isNaN(e._d.getTime()) &&
                t.overflow < 0 &&
                !t.empty &&
                !t.invalidEra &&
                !t.invalidMonth &&
                !t.invalidWeekday &&
                !t.weekdayMismatch &&
                !t.nullInput &&
                !t.invalidFormat &&
                !t.userInvalidated &&
                (!t.meridiem || (t.meridiem && n));
            if ((e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e))) return n;
            e._isValid = n;
        }
        return e._isValid;
    }

    function I(e) {
        var t = l(NaN);
        return null != e ? E(m(t), e) : (m(t).userInvalidated = !0), t;
    }
    var j =
        Array.prototype.some ||
        function(e) {
            for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)
                if (s in t && e.call(this, t[s], s, t)) return !0;
            return !1;
        },
        Z = (f.momentProperties = []),
        z = !1;

    function $(e, t) {
        var n,
            s,
            i,
            r = Z.length;
        if (
            (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
                o(t._i) || (e._i = t._i),
                o(t._f) || (e._f = t._f),
                o(t._l) || (e._l = t._l),
                o(t._strict) || (e._strict = t._strict),
                o(t._tzm) || (e._tzm = t._tzm),
                o(t._isUTC) || (e._isUTC = t._isUTC),
                o(t._offset) || (e._offset = t._offset),
                o(t._pf) || (e._pf = m(t)),
                o(t._locale) || (e._locale = t._locale),
                0 < r)
        )
            for (n = 0; n < r; n++) o((i = t[(s = Z[n])])) || (e[s] = i);
        return e;
    }

    function q(e) {
        $(this, e), (this._d = new Date(null != e._d ? e._d.getTime() : NaN)), this.isValid() || (this._d = new Date(NaN)), !1 === z && ((z = !0), f.updateOffset(this), (z = !1));
    }

    function h(e) {
        return e instanceof q || (null != e && null != e._isAMomentObject);
    }

    function B(e) {
        !1 === f.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e);
    }

    function e(r, a) {
        var o = !0;
        return E(function() {
            if ((null != f.deprecationHandler && f.deprecationHandler(null, r), o)) {
                for (var e, t, n = [], s = arguments.length, i = 0; i < s; i++) {
                    if (((e = ""), "object" == typeof arguments[i])) {
                        for (t in ((e += "\n[" + i + "] "), arguments[0])) c(arguments[0], t) && (e += t + ": " + arguments[0][t] + ", ");
                        e = e.slice(0, -2);
                    } else e = arguments[i];
                    n.push(e);
                }
                B(r + "\nArguments: " + Array.prototype.slice.call(n).join("") + "\n" + new Error().stack), (o = !1);
            }
            return a.apply(this, arguments);
        }, a);
    }
    var J = {};

    function Q(e, t) {
        null != f.deprecationHandler && f.deprecationHandler(e, t), J[e] || (B(t), (J[e] = !0));
    }

    function d(e) {
        return ("undefined" != typeof Function && e instanceof Function) || "[object Function]" === Object.prototype.toString.call(e);
    }

    function X(e, t) {
        var n,
            s = E({}, e);
        for (n in t) c(t, n) && (F(e[n]) && F(t[n]) ? ((s[n] = {}), E(s[n], e[n]), E(s[n], t[n])) : null != t[n] ? (s[n] = t[n]) : delete s[n]);
        for (n in e) c(e, n) && !c(t, n) && F(e[n]) && (s[n] = E({}, s[n]));
        return s;
    }

    function K(e) {
        null != e && this.set(e);
    }
    (f.suppressDeprecationWarnings = !1), (f.deprecationHandler = null);
    var ee =
        Object.keys ||
        function(e) {
            var t,
                n = [];
            for (t in e) c(e, t) && n.push(t);
            return n;
        };

    function r(e, t, n) {
        var s = "" + Math.abs(e);
        return (
            (0 <= e ? (n ? "+" : "") : "-") +
            Math.pow(10, Math.max(0, t - s.length))
            .toString()
            .substr(1) +
            s
        );
    }
    var te = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        ne = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        se = {},
        ie = {};

    function s(e, t, n, s) {
        var i =
            "string" == typeof s ?
            function() {
                return this[s]();
            } :
            s;
        e && (ie[e] = i),
            t &&
            (ie[t[0]] = function() {
                return r(i.apply(this, arguments), t[1], t[2]);
            }),
            n &&
            (ie[n] = function() {
                return this.localeData().ordinal(i.apply(this, arguments), e);
            });
    }

    function re(e, t) {
        return e.isValid() ?
            ((t = ae(t, e.localeData())),
                (se[t] =
                    se[t] ||
                    (function(s) {
                        for (var e, i = s.match(te), t = 0, r = i.length; t < r; t++) ie[i[t]] ? (i[t] = ie[i[t]]) : (i[t] = (e = i[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, ""));
                        return function(e) {
                            for (var t = "", n = 0; n < r; n++) t += d(i[n]) ? i[n].call(e, s) : i[n];
                            return t;
                        };
                    })(t)),
                se[t](e)) :
            e.localeData().invalidDate();
    }

    function ae(e, t) {
        var n = 5;

        function s(e) {
            return t.longDateFormat(e) || e;
        }
        for (ne.lastIndex = 0; 0 <= n && ne.test(e);)(e = e.replace(ne, s)), (ne.lastIndex = 0), --n;
        return e;
    }
    var oe = {};

    function t(e, t) {
        var n = e.toLowerCase();
        oe[n] = oe[n + "s"] = oe[t] = e;
    }

    function _(e) {
        return "string" == typeof e ? oe[e] || oe[e.toLowerCase()] : void 0;
    }

    function ue(e) {
        var t,
            n,
            s = {};
        for (n in e) c(e, n) && (t = _(n)) && (s[t] = e[n]);
        return s;
    }
    var le = {};

    function n(e, t) {
        le[e] = t;
    }

    function he(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    }

    function y(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
    }

    function g(e) {
        var e = +e,
            t = 0;
        return (t = 0 != e && isFinite(e) ? y(e) : t);
    }

    function de(t, n) {
        return function(e) {
            return null != e ? (fe(this, t, e), f.updateOffset(this, n), this) : ce(this, t);
        };
    }

    function ce(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
    }

    function fe(e, t, n) {
        e.isValid() &&
            !isNaN(n) &&
            ("FullYear" === t && he(e.year()) && 1 === e.month() && 29 === e.date() ? ((n = g(n)), e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), We(n, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
    }
    var i = /\d/,
        w = /\d\d/,
        me = /\d{3}/,
        _e = /\d{4}/,
        ye = /[+-]?\d{6}/,
        p = /\d\d?/,
        ge = /\d\d\d\d?/,
        we = /\d\d\d\d\d\d?/,
        pe = /\d{1,3}/,
        ke = /\d{1,4}/,
        ve = /[+-]?\d{1,6}/,
        Me = /\d+/,
        De = /[+-]?\d+/,
        Se = /Z|[+-]\d\d:?\d\d/gi,
        Ye = /Z|[+-]\d\d(?::?\d\d)?/gi,
        k = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    function v(e, n, s) {
        be[e] = d(n) ?
            n :
            function(e, t) {
                return e && s ? s : n;
            };
    }

    function Oe(e, t) {
        return c(be, e) ?
            be[e](t._strict, t._locale) :
            new RegExp(
                M(
                    e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, s, i) {
                        return t || n || s || i;
                    })
                )
            );
    }

    function M(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    var be = {},
        xe = {};

    function D(e, n) {
        var t,
            s,
            i = n;
        for (
            "string" == typeof e && (e = [e]),
            u(n) &&
            (i = function(e, t) {
                t[n] = g(e);
            }),
            s = e.length,
            t = 0; t < s; t++
        )
            xe[e[t]] = i;
    }

    function Te(e, i) {
        D(e, function(e, t, n, s) {
            (n._w = n._w || {}), i(e, n._w, n, s);
        });
    }
    var S,
        Y = 0,
        O = 1,
        b = 2,
        x = 3,
        T = 4,
        N = 5,
        Ne = 6,
        Pe = 7,
        Re = 8;

    function We(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var n = ((t % (n = 12)) + n) % n;
        return (e += (t - n) / 12), 1 == n ? (he(e) ? 29 : 28) : 31 - ((n % 7) % 2);
    }
    (S =
        Array.prototype.indexOf ||
        function(e) {
            for (var t = 0; t < this.length; ++t)
                if (this[t] === e) return t;
            return -1;
        }),
    s("M", ["MM", 2], "Mo", function() {
            return this.month() + 1;
        }),
        s("MMM", 0, 0, function(e) {
            return this.localeData().monthsShort(this, e);
        }),
        s("MMMM", 0, 0, function(e) {
            return this.localeData().months(this, e);
        }),
        t("month", "M"),
        n("month", 8),
        v("M", p),
        v("MM", p, w),
        v("MMM", function(e, t) {
            return t.monthsShortRegex(e);
        }),
        v("MMMM", function(e, t) {
            return t.monthsRegex(e);
        }),
        D(["M", "MM"], function(e, t) {
            t[O] = g(e) - 1;
        }),
        D(["MMM", "MMMM"], function(e, t, n, s) {
            s = n._locale.monthsParse(e, s, n._strict);
            null != s ? (t[O] = s) : (m(n).invalidMonth = e);
        });
    var Ce = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        Ue = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        He = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Fe = k,
        Le = k;

    function Ve(e, t) {
        var n;
        if (e.isValid()) {
            if ("string" == typeof t)
                if (/^\d+$/.test(t)) t = g(t);
                else if (!u((t = e.localeData().monthsParse(t)))) return;
            (n = Math.min(e.date(), We(e.year(), t))), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n);
        }
    }

    function Ge(e) {
        return null != e ? (Ve(this, e), f.updateOffset(this, !0), this) : ce(this, "Month");
    }

    function Ee() {
        function e(e, t) {
            return t.length - e.length;
        }
        for (var t, n = [], s = [], i = [], r = 0; r < 12; r++)(t = l([2e3, r])), n.push(this.monthsShort(t, "")), s.push(this.months(t, "")), i.push(this.months(t, "")), i.push(this.monthsShort(t, ""));
        for (n.sort(e), s.sort(e), i.sort(e), r = 0; r < 12; r++)(n[r] = M(n[r])), (s[r] = M(s[r]));
        for (r = 0; r < 24; r++) i[r] = M(i[r]);
        (this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i")),
        (this._monthsShortRegex = this._monthsRegex),
        (this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")),
        (this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"));
    }

    function Ae(e) {
        return he(e) ? 366 : 365;
    }
    s("Y", 0, 0, function() {
            var e = this.year();
            return e <= 9999 ? r(e, 4) : "+" + e;
        }),
        s(0, ["YY", 2], 0, function() {
            return this.year() % 100;
        }),
        s(0, ["YYYY", 4], 0, "year"),
        s(0, ["YYYYY", 5], 0, "year"),
        s(0, ["YYYYYY", 6, !0], 0, "year"),
        t("year", "y"),
        n("year", 1),
        v("Y", De),
        v("YY", p, w),
        v("YYYY", ke, _e),
        v("YYYYY", ve, ye),
        v("YYYYYY", ve, ye),
        D(["YYYYY", "YYYYYY"], Y),
        D("YYYY", function(e, t) {
            t[Y] = 2 === e.length ? f.parseTwoDigitYear(e) : g(e);
        }),
        D("YY", function(e, t) {
            t[Y] = f.parseTwoDigitYear(e);
        }),
        D("Y", function(e, t) {
            t[Y] = parseInt(e, 10);
        }),
        (f.parseTwoDigitYear = function(e) {
            return g(e) + (68 < g(e) ? 1900 : 2e3);
        });
    var Ie = de("FullYear", !0);

    function je(e, t, n, s, i, r, a) {
        var o;
        return e < 100 && 0 <= e ? ((o = new Date(e + 400, t, n, s, i, r, a)), isFinite(o.getFullYear()) && o.setFullYear(e)) : (o = new Date(e, t, n, s, i, r, a)), o;
    }

    function Ze(e) {
        var t;
        return (
            e < 100 && 0 <= e ? (((t = Array.prototype.slice.call(arguments))[0] = e + 400), (t = new Date(Date.UTC.apply(null, t))), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : (t = new Date(Date.UTC.apply(null, arguments))), t
        );
    }

    function ze(e, t, n) {
        n = 7 + t - n;
        return n - ((7 + Ze(e, 0, n).getUTCDay() - t) % 7) - 1;
    }

    function $e(e, t, n, s, i) {
        var r,
            t = 1 + 7 * (t - 1) + ((7 + n - s) % 7) + ze(e, s, i),
            n = t <= 0 ? Ae((r = e - 1)) + t : t > Ae(e) ? ((r = e + 1), t - Ae(e)) : ((r = e), t);
        return {
            year: r,
            dayOfYear: n
        };
    }

    function qe(e, t, n) {
        var s,
            i,
            r = ze(e.year(), t, n),
            r = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return r < 1 ? (s = r + P((i = e.year() - 1), t, n)) : r > P(e.year(), t, n) ? ((s = r - P(e.year(), t, n)), (i = e.year() + 1)) : ((i = e.year()), (s = r)), {
            week: s,
            year: i
        };
    }

    function P(e, t, n) {
        var s = ze(e, t, n),
            t = ze(e + 1, t, n);
        return (Ae(e) - s + t) / 7;
    }
    s("w", ["ww", 2], "wo", "week"),
        s("W", ["WW", 2], "Wo", "isoWeek"),
        t("week", "w"),
        t("isoWeek", "W"),
        n("week", 5),
        n("isoWeek", 5),
        v("w", p),
        v("ww", p, w),
        v("W", p),
        v("WW", p, w),
        Te(["w", "ww", "W", "WW"], function(e, t, n, s) {
            t[s.substr(0, 1)] = g(e);
        });

    function Be(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t));
    }
    s("d", 0, "do", "day"),
        s("dd", 0, 0, function(e) {
            return this.localeData().weekdaysMin(this, e);
        }),
        s("ddd", 0, 0, function(e) {
            return this.localeData().weekdaysShort(this, e);
        }),
        s("dddd", 0, 0, function(e) {
            return this.localeData().weekdays(this, e);
        }),
        s("e", 0, 0, "weekday"),
        s("E", 0, 0, "isoWeekday"),
        t("day", "d"),
        t("weekday", "e"),
        t("isoWeekday", "E"),
        n("day", 11),
        n("weekday", 11),
        n("isoWeekday", 11),
        v("d", p),
        v("e", p),
        v("E", p),
        v("dd", function(e, t) {
            return t.weekdaysMinRegex(e);
        }),
        v("ddd", function(e, t) {
            return t.weekdaysShortRegex(e);
        }),
        v("dddd", function(e, t) {
            return t.weekdaysRegex(e);
        }),
        Te(["dd", "ddd", "dddd"], function(e, t, n, s) {
            s = n._locale.weekdaysParse(e, s, n._strict);
            null != s ? (t.d = s) : (m(n).invalidWeekday = e);
        }),
        Te(["d", "e", "E"], function(e, t, n, s) {
            t[s] = g(e);
        });
    var Je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        Qe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        Ke = k,
        et = k,
        tt = k;

    function nt() {
        function e(e, t) {
            return t.length - e.length;
        }
        for (var t, n, s, i = [], r = [], a = [], o = [], u = 0; u < 7; u++)
            (s = l([2e3, 1]).day(u)), (t = M(this.weekdaysMin(s, ""))), (n = M(this.weekdaysShort(s, ""))), (s = M(this.weekdays(s, ""))), i.push(t), r.push(n), a.push(s), o.push(t), o.push(n), o.push(s);
        i.sort(e),
            r.sort(e),
            a.sort(e),
            o.sort(e),
            (this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i")),
            (this._weekdaysShortRegex = this._weekdaysRegex),
            (this._weekdaysMinRegex = this._weekdaysRegex),
            (this._weekdaysStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")),
            (this._weekdaysShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")),
            (this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"));
    }

    function st() {
        return this.hours() % 12 || 12;
    }

    function it(e, t) {
        s(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t);
        });
    }

    function rt(e, t) {
        return t._meridiemParse;
    }
    s("H", ["HH", 2], 0, "hour"),
        s("h", ["hh", 2], 0, st),
        s("k", ["kk", 2], 0, function() {
            return this.hours() || 24;
        }),
        s("hmm", 0, 0, function() {
            return "" + st.apply(this) + r(this.minutes(), 2);
        }),
        s("hmmss", 0, 0, function() {
            return "" + st.apply(this) + r(this.minutes(), 2) + r(this.seconds(), 2);
        }),
        s("Hmm", 0, 0, function() {
            return "" + this.hours() + r(this.minutes(), 2);
        }),
        s("Hmmss", 0, 0, function() {
            return "" + this.hours() + r(this.minutes(), 2) + r(this.seconds(), 2);
        }),
        it("a", !0),
        it("A", !1),
        t("hour", "h"),
        n("hour", 13),
        v("a", rt),
        v("A", rt),
        v("H", p),
        v("h", p),
        v("k", p),
        v("HH", p, w),
        v("hh", p, w),
        v("kk", p, w),
        v("hmm", ge),
        v("hmmss", we),
        v("Hmm", ge),
        v("Hmmss", we),
        D(["H", "HH"], x),
        D(["k", "kk"], function(e, t, n) {
            e = g(e);
            t[x] = 24 === e ? 0 : e;
        }),
        D(["a", "A"], function(e, t, n) {
            (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
        }),
        D(["h", "hh"], function(e, t, n) {
            (t[x] = g(e)), (m(n).bigHour = !0);
        }),
        D("hmm", function(e, t, n) {
            var s = e.length - 2;
            (t[x] = g(e.substr(0, s))), (t[T] = g(e.substr(s))), (m(n).bigHour = !0);
        }),
        D("hmmss", function(e, t, n) {
            var s = e.length - 4,
                i = e.length - 2;
            (t[x] = g(e.substr(0, s))), (t[T] = g(e.substr(s, 2))), (t[N] = g(e.substr(i))), (m(n).bigHour = !0);
        }),
        D("Hmm", function(e, t, n) {
            var s = e.length - 2;
            (t[x] = g(e.substr(0, s))), (t[T] = g(e.substr(s)));
        }),
        D("Hmmss", function(e, t, n) {
            var s = e.length - 4,
                i = e.length - 2;
            (t[x] = g(e.substr(0, s))), (t[T] = g(e.substr(s, 2))), (t[N] = g(e.substr(i)));
        });
    k = de("Hours", !0);
    var at,
        ot = {
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                w: "a week",
                ww: "%d weeks",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years",
            },
            months: Ce,
            monthsShort: Ue,
            week: {
                dow: 0,
                doy: 6
            },
            weekdays: Je,
            weekdaysMin: Xe,
            weekdaysShort: Qe,
            meridiemParse: /[ap]\.?m?\.?/i,
        },
        R = {},
        ut = {};

    function lt(e) {
        return e && e.toLowerCase().replace("_", "-");
    }

    function ht(e) {
        for (var t, n, s, i, r = 0; r < e.length;) {
            for (t = (i = lt(e[r]).split("-")).length, n = (n = lt(e[r + 1])) ? n.split("-") : null; 0 < t;) {
                if ((s = dt(i.slice(0, t).join("-")))) return s;
                if (
                    n &&
                    n.length >= t &&
                    (function(e, t) {
                        for (var n = Math.min(e.length, t.length), s = 0; s < n; s += 1)
                            if (e[s] !== t[s]) return s;
                        return n;
                    })(i, n) >=
                    t - 1
                )
                    break;
                t--;
            }
            r++;
        }
        return at;
    }

    function dt(t) {
        var e;
        if (void 0 === R[t] && "undefined" != typeof module && module && module.exports && null != t.match("^[^/\\\\]*$"))
            try {
                (e = at._abbr), require("./locale/" + t), ct(e);
            } catch (e) {
                R[t] = null;
            }
        return R[t];
    }

    function ct(e, t) {
        return e && ((t = o(t) ? mt(e) : ft(e, t)) ? (at = t) : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), at._abbr;
    }

    function ft(e, t) {
        if (null === t) return delete R[e], null;
        var n,
            s = ot;
        if (((t.abbr = e), null != R[e]))
            Q(
                "defineLocaleOverride",
                "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
            ),
            (s = R[e]._config);
        else if (null != t.parentLocale)
            if (null != R[t.parentLocale]) s = R[t.parentLocale]._config;
            else {
                if (null == (n = dt(t.parentLocale))) return ut[t.parentLocale] || (ut[t.parentLocale] = []), ut[t.parentLocale].push({
                    name: e,
                    config: t
                }), null;
                s = n._config;
            }
        return (
            (R[e] = new K(X(s, t))),
            ut[e] &&
            ut[e].forEach(function(e) {
                ft(e.name, e.config);
            }),
            ct(e),
            R[e]
        );
    }

    function mt(e) {
        var t;
        if (!(e = e && e._locale && e._locale._abbr ? e._locale._abbr : e)) return at;
        if (!a(e)) {
            if ((t = dt(e))) return t;
            e = [e];
        }
        return ht(e);
    }

    function _t(e) {
        var t = e._a;
        return (
            t &&
            -2 === m(e).overflow &&
            ((t =
                    t[O] < 0 || 11 < t[O] ?
                    O :
                    t[b] < 1 || t[b] > We(t[Y], t[O]) ?
                    b :
                    t[x] < 0 || 24 < t[x] || (24 === t[x] && (0 !== t[T] || 0 !== t[N] || 0 !== t[Ne])) ?
                    x :
                    t[T] < 0 || 59 < t[T] ?
                    T :
                    t[N] < 0 || 59 < t[N] ?
                    N :
                    t[Ne] < 0 || 999 < t[Ne] ?
                    Ne :
                    -1),
                m(e)._overflowDayOfYear && (t < Y || b < t) && (t = b),
                m(e)._overflowWeeks && -1 === t && (t = Pe),
                m(e)._overflowWeekday && -1 === t && (t = Re),
                (m(e).overflow = t)),
            e
        );
    }
    var yt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        gt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        wt = /Z|[+-]\d\d(?::?\d\d)?/,
        pt = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/],
            ["YYYYMM", /\d{6}/, !1],
            ["YYYY", /\d{4}/, !1],
        ],
        kt = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/],
        ],
        vt = /^\/?Date\((-?\d+)/i,
        Mt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        Dt = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480
        };

    function St(e) {
        var t,
            n,
            s,
            i,
            r,
            a,
            o = e._i,
            u = yt.exec(o) || gt.exec(o),
            o = pt.length,
            l = kt.length;
        if (u) {
            for (m(e).iso = !0, t = 0, n = o; t < n; t++)
                if (pt[t][1].exec(u[1])) {
                    (i = pt[t][0]), (s = !1 !== pt[t][2]);
                    break;
                }
            if (null == i) e._isValid = !1;
            else {
                if (u[3]) {
                    for (t = 0, n = l; t < n; t++)
                        if (kt[t][1].exec(u[3])) {
                            r = (u[2] || " ") + kt[t][0];
                            break;
                        }
                    if (null == r) return void(e._isValid = !1);
                }
                if (s || null == r) {
                    if (u[4]) {
                        if (!wt.exec(u[4])) return void(e._isValid = !1);
                        a = "Z";
                    }
                    (e._f = i + (r || "") + (a || "")), Tt(e);
                } else e._isValid = !1;
            }
        } else e._isValid = !1;
    }

    function Yt(e, t, n, s, i, r) {
        e = [
            (function(e) {
                e = parseInt(e, 10); {
                    if (e <= 49) return 2e3 + e;
                    if (e <= 999) return 1900 + e;
                }
                return e;
            })(e),
            Ue.indexOf(t),
            parseInt(n, 10),
            parseInt(s, 10),
            parseInt(i, 10),
        ];
        return r && e.push(parseInt(r, 10)), e;
    }

    function Ot(e) {
        var t,
            n,
            s,
            i,
            r = Mt.exec(
                e._i
                .replace(/\([^()]*\)|[\n\t]/g, " ")
                .replace(/(\s\s+)/g, " ")
                .replace(/^\s\s*/, "")
                .replace(/\s\s*$/, "")
            );
        r
            ?
            ((t = Yt(r[4], r[3], r[2], r[5], r[6], r[7])),
                (n = r[1]),
                (s = t),
                (i = e),
                n && Qe.indexOf(n) !== new Date(s[0], s[1], s[2]).getDay() ?
                ((m(i).weekdayMismatch = !0), (i._isValid = !1)) :
                ((e._a = t),
                    (e._tzm = ((n = r[8]), (s = r[9]), (i = r[10]), n ? Dt[n] : s ? 0 : 60 * (((n = parseInt(i, 10)) - (s = n % 100)) / 100) + s)),
                    (e._d = Ze.apply(null, e._a)),
                    e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                    (m(e).rfc2822 = !0))) :
            (e._isValid = !1);
    }

    function bt(e, t, n) {
        return null != e ? e : null != t ? t : n;
    }

    function xt(e) {
        var t,
            n,
            s,
            i,
            r,
            a,
            o,
            u,
            l,
            h,
            d,
            c = [];
        if (!e._d) {
            for (
                s = e,
                i = new Date(f.now()),
                n = s._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()],
                e._w &&
                null == e._a[b] &&
                null == e._a[O] &&
                (null != (i = (s = e)._w).GG || null != i.W || null != i.E ?
                    ((u = 1), (l = 4), (r = bt(i.GG, s._a[Y], qe(W(), 1, 4).year)), (a = bt(i.W, 1)), ((o = bt(i.E, 1)) < 1 || 7 < o) && (h = !0)) :
                    ((u = s._locale._week.dow),
                        (l = s._locale._week.doy),
                        (d = qe(W(), u, l)),
                        (r = bt(i.gg, s._a[Y], d.year)),
                        (a = bt(i.w, d.week)),
                        null != i.d ? ((o = i.d) < 0 || 6 < o) && (h = !0) : null != i.e ? ((o = i.e + u), (i.e < 0 || 6 < i.e) && (h = !0)) : (o = u)),
                    a < 1 || a > P(r, u, l) ? (m(s)._overflowWeeks = !0) : null != h ? (m(s)._overflowWeekday = !0) : ((d = $e(r, a, o, u, l)), (s._a[Y] = d.year), (s._dayOfYear = d.dayOfYear))),
                null != e._dayOfYear && ((i = bt(e._a[Y], n[Y])), (e._dayOfYear > Ae(i) || 0 === e._dayOfYear) && (m(e)._overflowDayOfYear = !0), (h = Ze(i, 0, e._dayOfYear)), (e._a[O] = h.getUTCMonth()), (e._a[b] = h.getUTCDate())),
                t = 0; t < 3 && null == e._a[t];
                ++t
            )
                e._a[t] = c[t] = n[t];
            for (; t < 7; t++) e._a[t] = c[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
            24 === e._a[x] && 0 === e._a[T] && 0 === e._a[N] && 0 === e._a[Ne] && ((e._nextDay = !0), (e._a[x] = 0)),
                (e._d = (e._useUTC ? Ze : je).apply(null, c)),
                (r = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
                null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                e._nextDay && (e._a[x] = 24),
                e._w && void 0 !== e._w.d && e._w.d !== r && (m(e).weekdayMismatch = !0);
        }
    }

    function Tt(e) {
        if (e._f === f.ISO_8601) St(e);
        else if (e._f === f.RFC_2822) Ot(e);
        else {
            (e._a = []), (m(e).empty = !0);
            for (var t, n, s, i, r, a = "" + e._i, o = a.length, u = 0, l = ae(e._f, e._locale).match(te) || [], h = l.length, d = 0; d < h; d++)
                (n = l[d]),
                (t = (a.match(Oe(n, e)) || [])[0]) && (0 < (s = a.substr(0, a.indexOf(t))).length && m(e).unusedInput.push(s), (a = a.slice(a.indexOf(t) + t.length)), (u += t.length)),
                ie[n] ? (t ? (m(e).empty = !1) : m(e).unusedTokens.push(n), (s = n), (r = e), null != (i = t) && c(xe, s) && xe[s](i, r._a, r, s)) : e._strict && !t && m(e).unusedTokens.push(n);
            (m(e).charsLeftOver = o - u),
            0 < a.length && m(e).unusedInput.push(a),
                e._a[x] <= 12 && !0 === m(e).bigHour && 0 < e._a[x] && (m(e).bigHour = void 0),
                (m(e).parsedDateParts = e._a.slice(0)),
                (m(e).meridiem = e._meridiem),
                (e._a[x] = (function(e, t, n) {
                    if (null == n) return t;
                    return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((e = e.isPM(n)) && t < 12 && (t += 12), (t = e || 12 !== t ? t : 0)) : t;
                })(e._locale, e._a[x], e._meridiem)),
                null !== (o = m(e).era) && (e._a[Y] = e._locale.erasConvertYear(o, e._a[Y])),
                xt(e),
                _t(e);
        }
    }

    function Nt(e) {
        var t,
            n,
            s,
            i = e._i,
            r = e._f;
        if (((e._locale = e._locale || mt(e._l)), null === i || (void 0 === r && "" === i))) return I({
            nullInput: !0
        });
        if (("string" == typeof i && (e._i = i = e._locale.preparse(i)), h(i))) return new q(_t(i));
        if (V(i)) e._d = i;
        else if (a(r))
            !(function(e) {
                var t,
                    n,
                    s,
                    i,
                    r,
                    a,
                    o = !1,
                    u = e._f.length;
                if (0 === u) return (m(e).invalidFormat = !0), (e._d = new Date(NaN));
                for (i = 0; i < u; i++)
                    (r = 0),
                    (a = !1),
                    (t = $({}, e)),
                    null != e._useUTC && (t._useUTC = e._useUTC),
                    (t._f = e._f[i]),
                    Tt(t),
                    A(t) && (a = !0),
                    (r = (r += m(t).charsLeftOver) + 10 * m(t).unusedTokens.length),
                    (m(t).score = r),
                    o ? r < s && ((s = r), (n = t)) : (null == s || r < s || a) && ((s = r), (n = t), a && (o = !0));
                E(e, n || t);
            })(e);
        else if (r) Tt(e);
        else if (o((r = (i = e)._i))) i._d = new Date(f.now());
        else
            V(r) ?
            (i._d = new Date(r.valueOf())) :
            "string" == typeof r ?
            ((n = i),
                null !== (t = vt.exec(n._i)) ? (n._d = new Date(+t[1])) : (St(n), !1 === n._isValid && (delete n._isValid, Ot(n), !1 === n._isValid && (delete n._isValid, n._strict ? (n._isValid = !1) : f.createFromInputFallback(n))))) :
            a(r) ?
            ((i._a = G(r.slice(0), function(e) {
                    return parseInt(e, 10);
                })),
                xt(i)) :
            F(r) ?
            (t = i)._d ||
            ((s = void 0 === (n = ue(t._i)).day ? n.date : n.day),
                (t._a = G([n.year, n.month, s, n.hour, n.minute, n.second, n.millisecond], function(e) {
                    return e && parseInt(e, 10);
                })),
                xt(t)) :
            u(r) ?
            (i._d = new Date(r)) :
            f.createFromInputFallback(i);
        return A(e) || (e._d = null), e;
    }

    function Pt(e, t, n, s, i) {
        var r = {};
        return (
            (!0 !== t && !1 !== t) || ((s = t), (t = void 0)),
            (!0 !== n && !1 !== n) || ((s = n), (n = void 0)),
            ((F(e) && L(e)) || (a(e) && 0 === e.length)) && (e = void 0),
            (r._isAMomentObject = !0),
            (r._useUTC = r._isUTC = i),
            (r._l = n),
            (r._i = e),
            (r._f = t),
            (r._strict = s),
            (i = new q(_t(Nt((i = r)))))._nextDay && (i.add(1, "d"), (i._nextDay = void 0)),
            i
        );
    }

    function W(e, t, n, s) {
        return Pt(e, t, n, s, !1);
    }
    (f.createFromInputFallback = e(
        "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
        function(e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
        }
    )),
    (f.ISO_8601 = function() {}),
    (f.RFC_2822 = function() {});
    (ge = e("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = W.apply(null, arguments);
        return this.isValid() && e.isValid() ? (e < this ? this : e) : I();
    })),
    (we = e("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = W.apply(null, arguments);
        return this.isValid() && e.isValid() ? (this < e ? this : e) : I();
    }));

    function Rt(e, t) {
        var n, s;
        if (!(t = 1 === t.length && a(t[0]) ? t[0] : t).length) return W();
        for (n = t[0], s = 1; s < t.length; ++s)(t[s].isValid() && !t[s][e](n)) || (n = t[s]);
        return n;
    }
    var Wt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function Ct(e) {
        var e = ue(e),
            t = e.year || 0,
            n = e.quarter || 0,
            s = e.month || 0,
            i = e.week || e.isoWeek || 0,
            r = e.day || 0,
            a = e.hour || 0,
            o = e.minute || 0,
            u = e.second || 0,
            l = e.millisecond || 0;
        (this._isValid = (function(e) {
            var t,
                n,
                s = !1,
                i = Wt.length;
            for (t in e)
                if (c(e, t) && (-1 === S.call(Wt, t) || (null != e[t] && isNaN(e[t])))) return !1;
            for (n = 0; n < i; ++n)
                if (e[Wt[n]]) {
                    if (s) return !1;
                    parseFloat(e[Wt[n]]) !== g(e[Wt[n]]) && (s = !0);
                }
            return !0;
        })(e)),
        (this._milliseconds = +l + 1e3 * u + 6e4 * o + 1e3 * a * 60 * 60),
        (this._days = +r + 7 * i),
        (this._months = +s + 3 * n + 12 * t),
        (this._data = {}),
        (this._locale = mt()),
        this._bubble();
    }

    function Ut(e) {
        return e instanceof Ct;
    }

    function Ht(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
    }

    function Ft(e, n) {
        s(e, 0, 0, function() {
            var e = this.utcOffset(),
                t = "+";
            return e < 0 && ((e = -e), (t = "-")), t + r(~~(e / 60), 2) + n + r(~~e % 60, 2);
        });
    }
    Ft("Z", ":"),
        Ft("ZZ", ""),
        v("Z", Ye),
        v("ZZ", Ye),
        D(["Z", "ZZ"], function(e, t, n) {
            (n._useUTC = !0), (n._tzm = Vt(Ye, e));
        });
    var Lt = /([\+\-]|\d\d)/gi;

    function Vt(e, t) {
        var t = (t || "").match(e);
        return null === t ? null : 0 === (t = 60 * (e = ((t[t.length - 1] || []) + "").match(Lt) || ["-", 0, 0])[1] + g(e[2])) ? 0 : "+" === e[0] ? t : -t;
    }

    function Gt(e, t) {
        var n;
        return t._isUTC ? ((t = t.clone()), (n = (h(e) || V(e) ? e : W(e)).valueOf() - t.valueOf()), t._d.setTime(t._d.valueOf() + n), f.updateOffset(t, !1), t) : W(e).local();
    }

    function Et(e) {
        return -Math.round(e._d.getTimezoneOffset());
    }

    function At() {
        return !!this.isValid() && this._isUTC && 0 === this._offset;
    }
    f.updateOffset = function() {};
    var It = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        jt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function C(e, t) {
        var n,
            s = e,
            i = null;
        return (
            Ut(e) ?
            (s = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            }) :
            u(e) || !isNaN(+e) ?
            ((s = {}), t ? (s[t] = +e) : (s.milliseconds = +e)) :
            (i = It.exec(e)) ?
            ((n = "-" === i[1] ? -1 : 1), (s = {
                y: 0,
                d: g(i[b]) * n,
                h: g(i[x]) * n,
                m: g(i[T]) * n,
                s: g(i[N]) * n,
                ms: g(Ht(1e3 * i[Ne])) * n
            })) :
            (i = jt.exec(e)) ?
            ((n = "-" === i[1] ? -1 : 1), (s = {
                y: Zt(i[2], n),
                M: Zt(i[3], n),
                w: Zt(i[4], n),
                d: Zt(i[5], n),
                h: Zt(i[6], n),
                m: Zt(i[7], n),
                s: Zt(i[8], n)
            })) :
            null == s ?
            (s = {}) :
            "object" == typeof s &&
            ("from" in s || "to" in s) &&
            ((t = (function(e, t) {
                    var n;
                    if (!e.isValid() || !t.isValid()) return {
                        milliseconds: 0,
                        months: 0
                    };
                    (t = Gt(t, e)), e.isBefore(t) ? (n = zt(e, t)) : (((n = zt(t, e)).milliseconds = -n.milliseconds), (n.months = -n.months));
                    return n;
                })(W(s.from), W(s.to))),
                ((s = {}).ms = t.milliseconds),
                (s.M = t.months)),
            (i = new Ct(s)),
            Ut(e) && c(e, "_locale") && (i._locale = e._locale),
            Ut(e) && c(e, "_isValid") && (i._isValid = e._isValid),
            i
        );
    }

    function Zt(e, t) {
        e = e && parseFloat(e.replace(",", "."));
        return (isNaN(e) ? 0 : e) * t;
    }

    function zt(e, t) {
        var n = {};
        return (n.months = t.month() - e.month() + 12 * (t.year() - e.year())), e.clone().add(n.months, "M").isAfter(t) && --n.months, (n.milliseconds = +t - +e.clone().add(n.months, "M")), n;
    }

    function $t(s, i) {
        return function(e, t) {
            var n;
            return (
                null === t ||
                isNaN(+t) ||
                (Q(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), (n = e), (e = t), (t = n)),
                qt(this, C(e, t), s),
                this
            );
        };
    }

    function qt(e, t, n, s) {
        var i = t._milliseconds,
            r = Ht(t._days),
            t = Ht(t._months);
        e.isValid() && ((s = null == s || s), t && Ve(e, ce(e, "Month") + t * n), r && fe(e, "Date", ce(e, "Date") + r * n), i && e._d.setTime(e._d.valueOf() + i * n), s && f.updateOffset(e, r || t));
    }
    (C.fn = Ct.prototype),
    (C.invalid = function() {
        return C(NaN);
    });
    (Ce = $t(1, "add")), (Je = $t(-1, "subtract"));

    function Bt(e) {
        return "string" == typeof e || e instanceof String;
    }

    function Jt(e) {
        return (
            h(e) ||
            V(e) ||
            Bt(e) ||
            u(e) ||
            (function(t) {
                var e = a(t),
                    n = !1;
                e &&
                    (n =
                        0 ===
                        t.filter(function(e) {
                            return !u(e) && Bt(t);
                        }).length);
                return e && n;
            })(e) ||
            (function(e) {
                var t,
                    n,
                    s = F(e) && !L(e),
                    i = !1,
                    r = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
                    a = r.length;
                for (t = 0; t < a; t += 1)(n = r[t]), (i = i || c(e, n));
                return s && i;
            })(e) ||
            null == e
        );
    }

    function Qt(e, t) {
        if (e.date() < t.date()) return -Qt(t, e);
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            s = e.clone().add(n, "months"),
            t = t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(1 + n, "months") - s);
        return -(n + t) || 0;
    }

    function Xt(e) {
        return void 0 === e ? this._locale._abbr : (null != (e = mt(e)) && (this._locale = e), this);
    }
    (f.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"), (f.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
    Xe = e("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e);
    });

    function Kt() {
        return this._locale;
    }
    var en = 126227808e5;

    function tn(e, t) {
        return ((e % t) + t) % t;
    }

    function nn(e, t, n) {
        return e < 100 && 0 <= e ? new Date(e + 400, t, n) - en : new Date(e, t, n).valueOf();
    }

    function sn(e, t, n) {
        return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - en : Date.UTC(e, t, n);
    }

    function rn(e, t) {
        return t.erasAbbrRegex(e);
    }

    function an() {
        for (var e = [], t = [], n = [], s = [], i = this.eras(), r = 0, a = i.length; r < a; ++r) t.push(M(i[r].name)), e.push(M(i[r].abbr)), n.push(M(i[r].narrow)), s.push(M(i[r].name)), s.push(M(i[r].abbr)), s.push(M(i[r].narrow));
        (this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i")),
        (this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i")),
        (this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i")),
        (this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")", "i"));
    }

    function on(e, t) {
        s(0, [e, e.length], 0, t);
    }

    function un(e, t, n, s, i) {
        var r;
        return null == e ?
            qe(this, s, i).year :
            ((r = P(e, s, i)),
                function(e, t, n, s, i) {
                    (e = $e(e, t, n, s, i)), (t = Ze(e.year, 0, e.dayOfYear));
                    return this.year(t.getUTCFullYear()), this.month(t.getUTCMonth()), this.date(t.getUTCDate()), this;
                }.call(this, e, (t = r < t ? r : t), n, s, i));
    }
    s("N", 0, 0, "eraAbbr"),
        s("NN", 0, 0, "eraAbbr"),
        s("NNN", 0, 0, "eraAbbr"),
        s("NNNN", 0, 0, "eraName"),
        s("NNNNN", 0, 0, "eraNarrow"),
        s("y", ["y", 1], "yo", "eraYear"),
        s("y", ["yy", 2], 0, "eraYear"),
        s("y", ["yyy", 3], 0, "eraYear"),
        s("y", ["yyyy", 4], 0, "eraYear"),
        v("N", rn),
        v("NN", rn),
        v("NNN", rn),
        v("NNNN", function(e, t) {
            return t.erasNameRegex(e);
        }),
        v("NNNNN", function(e, t) {
            return t.erasNarrowRegex(e);
        }),
        D(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, t, n, s) {
            s = n._locale.erasParse(e, s, n._strict);
            s ? (m(n).era = s) : (m(n).invalidEra = e);
        }),
        v("y", Me),
        v("yy", Me),
        v("yyy", Me),
        v("yyyy", Me),
        v("yo", function(e, t) {
            return t._eraYearOrdinalRegex || Me;
        }),
        D(["y", "yy", "yyy", "yyyy"], Y),
        D(["yo"], function(e, t, n, s) {
            var i;
            n._locale._eraYearOrdinalRegex && (i = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? (t[Y] = n._locale.eraYearOrdinalParse(e, i)) : (t[Y] = parseInt(e, 10));
        }),
        s(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100;
        }),
        s(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100;
        }),
        on("gggg", "weekYear"),
        on("ggggg", "weekYear"),
        on("GGGG", "isoWeekYear"),
        on("GGGGG", "isoWeekYear"),
        t("weekYear", "gg"),
        t("isoWeekYear", "GG"),
        n("weekYear", 1),
        n("isoWeekYear", 1),
        v("G", De),
        v("g", De),
        v("GG", p, w),
        v("gg", p, w),
        v("GGGG", ke, _e),
        v("gggg", ke, _e),
        v("GGGGG", ve, ye),
        v("ggggg", ve, ye),
        Te(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, s) {
            t[s.substr(0, 2)] = g(e);
        }),
        Te(["gg", "GG"], function(e, t, n, s) {
            t[s] = f.parseTwoDigitYear(e);
        }),
        s("Q", 0, "Qo", "quarter"),
        t("quarter", "Q"),
        n("quarter", 7),
        v("Q", i),
        D("Q", function(e, t) {
            t[O] = 3 * (g(e) - 1);
        }),
        s("D", ["DD", 2], "Do", "date"),
        t("date", "D"),
        n("date", 9),
        v("D", p),
        v("DD", p, w),
        v("Do", function(e, t) {
            return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
        }),
        D(["D", "DD"], b),
        D("Do", function(e, t) {
            t[b] = g(e.match(p)[0]);
        });
    ke = de("Date", !0);
    s("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
        t("dayOfYear", "DDD"),
        n("dayOfYear", 4),
        v("DDD", pe),
        v("DDDD", me),
        D(["DDD", "DDDD"], function(e, t, n) {
            n._dayOfYear = g(e);
        }),
        s("m", ["mm", 2], 0, "minute"),
        t("minute", "m"),
        n("minute", 14),
        v("m", p),
        v("mm", p, w),
        D(["m", "mm"], T);
    var ln,
        _e = de("Minutes", !1),
        ve = (s("s", ["ss", 2], 0, "second"), t("second", "s"), n("second", 15), v("s", p), v("ss", p, w), D(["s", "ss"], N), de("Seconds", !1));
    for (
        s("S", 0, 0, function() {
            return ~~(this.millisecond() / 100);
        }),
        s(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10);
        }),
        s(0, ["SSS", 3], 0, "millisecond"),
        s(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond();
        }),
        s(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond();
        }),
        s(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond();
        }),
        s(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond();
        }),
        s(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond();
        }),
        s(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond();
        }),
        t("millisecond", "ms"),
        n("millisecond", 16),
        v("S", pe, i),
        v("SS", pe, w),
        v("SSS", pe, me),
        ln = "SSSS"; ln.length <= 9; ln += "S"
    )
        v(ln, Me);

    function hn(e, t) {
        t[Ne] = g(1e3 * ("0." + e));
    }
    for (ln = "S"; ln.length <= 9; ln += "S") D(ln, hn);
    (ye = de("Milliseconds", !1)), s("z", 0, 0, "zoneAbbr"), s("zz", 0, 0, "zoneName");
    i = q.prototype;

    function dn(e) {
        return e;
    }
    (i.add = Ce),
    (i.calendar = function(e, t) {
        1 === arguments.length &&
            (arguments[0] ?
                Jt(arguments[0]) ?
                ((e = arguments[0]), (t = void 0)) :
                (function(e) {
                    for (var t = F(e) && !L(e), n = !1, s = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"], i = 0; i < s.length; i += 1) n = n || c(e, s[i]);
                    return t && n;
                })(arguments[0]) && ((t = arguments[0]), (e = void 0)) :
                (t = e = void 0));
        var e = e || W(),
            n = Gt(e, this).startOf("day"),
            n = f.calendarFormat(this, n) || "sameElse",
            t = t && (d(t[n]) ? t[n].call(this, e) : t[n]);
        return this.format(t || this.localeData().calendar(n, this, W(e)));
    }),
    (i.clone = function() {
        return new q(this);
    }),
    (i.diff = function(e, t, n) {
        var s, i, r;
        if (!this.isValid()) return NaN;
        if (!(s = Gt(e, this)).isValid()) return NaN;
        switch (((i = 6e4 * (s.utcOffset() - this.utcOffset())), (t = _(t)))) {
            case "year":
                r = Qt(this, s) / 12;
                break;
            case "month":
                r = Qt(this, s);
                break;
            case "quarter":
                r = Qt(this, s) / 3;
                break;
            case "second":
                r = (this - s) / 1e3;
                break;
            case "minute":
                r = (this - s) / 6e4;
                break;
            case "hour":
                r = (this - s) / 36e5;
                break;
            case "day":
                r = (this - s - i) / 864e5;
                break;
            case "week":
                r = (this - s - i) / 6048e5;
                break;
            default:
                r = this - s;
        }
        return n ? r : y(r);
    }),
    (i.endOf = function(e) {
        var t, n;
        if (void 0 === (e = _(e)) || "millisecond" === e || !this.isValid()) return this;
        switch (((n = this._isUTC ? sn : nn), e)) {
            case "year":
                t = n(this.year() + 1, 0, 1) - 1;
                break;
            case "quarter":
                t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
                break;
            case "month":
                t = n(this.year(), this.month() + 1, 1) - 1;
                break;
            case "week":
                t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case "isoWeek":
                t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case "day":
            case "date":
                t = n(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case "hour":
                (t = this._d.valueOf()), (t += 36e5 - tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1);
                break;
            case "minute":
                (t = this._d.valueOf()), (t += 6e4 - tn(t, 6e4) - 1);
                break;
            case "second":
                (t = this._d.valueOf()), (t += 1e3 - tn(t, 1e3) - 1);
                break;
        }
        return this._d.setTime(t), f.updateOffset(this, !0), this;
    }),
    (i.format = function(e) {
        return (e = e || (this.isUtc() ? f.defaultFormatUtc : f.defaultFormat)), (e = re(this, e)), this.localeData().postformat(e);
    }),
    (i.from = function(e, t) {
        return this.isValid() && ((h(e) && e.isValid()) || W(e).isValid()) ? C({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
    }),
    (i.fromNow = function(e) {
        return this.from(W(), e);
    }),
    (i.to = function(e, t) {
        return this.isValid() && ((h(e) && e.isValid()) || W(e).isValid()) ? C({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
    }),
    (i.toNow = function(e) {
        return this.to(W(), e);
    }),
    (i.get = function(e) {
        return d(this[(e = _(e))]) ? this[e]() : this;
    }),
    (i.invalidAt = function() {
        return m(this).overflow;
    }),
    (i.isAfter = function(e, t) {
        return (e = h(e) ? e : W(e)), !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = _(t) || "millisecond") ? this.valueOf() > e.valueOf() : e.valueOf() < this.clone().startOf(t).valueOf());
    }),
    (i.isBefore = function(e, t) {
        return (e = h(e) ? e : W(e)), !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = _(t) || "millisecond") ? this.valueOf() < e.valueOf() : this.clone().endOf(t).valueOf() < e.valueOf());
    }),
    (i.isBetween = function(e, t, n, s) {
        return (
            (e = h(e) ? e : W(e)),
            (t = h(t) ? t : W(t)), !!(this.isValid() && e.isValid() && t.isValid()) && ("(" === (s = s || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
        );
    }),
    (i.isSame = function(e, t) {
        var e = h(e) ? e : W(e);
        return !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = _(t) || "millisecond") ? this.valueOf() === e.valueOf() : ((e = e.valueOf()), this.clone().startOf(t).valueOf() <= e && e <= this.clone().endOf(t).valueOf()));
    }),
    (i.isSameOrAfter = function(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t);
    }),
    (i.isSameOrBefore = function(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t);
    }),
    (i.isValid = function() {
        return A(this);
    }),
    (i.lang = Xe),
    (i.locale = Xt),
    (i.localeData = Kt),
    (i.max = we),
    (i.min = ge),
    (i.parsingFlags = function() {
        return E({}, m(this));
    }),
    (i.set = function(e, t) {
        if ("object" == typeof e)
            for (
                var n = (function(e) {
                        var t,
                            n = [];
                        for (t in e) c(e, t) && n.push({
                            unit: t,
                            priority: le[t]
                        });
                        return (
                            n.sort(function(e, t) {
                                return e.priority - t.priority;
                            }),
                            n
                        );
                    })((e = ue(e))),
                    s = n.length,
                    i = 0; i < s; i++
            )
                this[n[i].unit](e[n[i].unit]);
        else if (d(this[(e = _(e))])) return this[e](t);
        return this;
    }),
    (i.startOf = function(e) {
        var t, n;
        if (void 0 === (e = _(e)) || "millisecond" === e || !this.isValid()) return this;
        switch (((n = this._isUTC ? sn : nn), e)) {
            case "year":
                t = n(this.year(), 0, 1);
                break;
            case "quarter":
                t = n(this.year(), this.month() - (this.month() % 3), 1);
                break;
            case "month":
                t = n(this.year(), this.month(), 1);
                break;
            case "week":
                t = n(this.year(), this.month(), this.date() - this.weekday());
                break;
            case "isoWeek":
                t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case "day":
            case "date":
                t = n(this.year(), this.month(), this.date());
                break;
            case "hour":
                (t = this._d.valueOf()), (t -= tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5));
                break;
            case "minute":
                (t = this._d.valueOf()), (t -= tn(t, 6e4));
                break;
            case "second":
                (t = this._d.valueOf()), (t -= tn(t, 1e3));
                break;
        }
        return this._d.setTime(t), f.updateOffset(this, !0), this;
    }),
    (i.subtract = Je),
    (i.toArray = function() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
    }),
    (i.toObject = function() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        };
    }),
    (i.toDate = function() {
        return new Date(this.valueOf());
    }),
    (i.toISOString = function(e) {
        if (!this.isValid()) return null;
        var t = (e = !0 !== e) ? this.clone().utc() : this;
        return t.year() < 0 || 9999 < t.year() ?
            re(t, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") :
            d(Date.prototype.toISOString) ?
            e ?
            this.toDate().toISOString() :
            new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", re(t, "Z")) :
            re(t, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
    }),
    (i.inspect = function() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e,
            t = "moment",
            n = "";
        return (
            this.isLocal() || ((t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"), (n = "Z")),
            (t = "[" + t + '("]'),
            (e = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
            this.format(t + e + "-MM-DD[T]HH:mm:ss.SSS" + (n + '[")]'))
        );
    }),
    "undefined" != typeof Symbol &&
        null != Symbol.for &&
        (i[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return "Moment<" + this.format() + ">";
        }),
        (i.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
        }),
        (i.toString = function() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }),
        (i.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
        }),
        (i.valueOf = function() {
            return this._d.valueOf() - 6e4 * (this._offset || 0);
        }),
        (i.creationData = function() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            };
        }),
        (i.eraName = function() {
            for (var e, t = this.localeData().eras(), n = 0, s = t.length; n < s; ++n) {
                if (((e = this.clone().startOf("day").valueOf()), t[n].since <= e && e <= t[n].until)) return t[n].name;
                if (t[n].until <= e && e <= t[n].since) return t[n].name;
            }
            return "";
        }),
        (i.eraNarrow = function() {
            for (var e, t = this.localeData().eras(), n = 0, s = t.length; n < s; ++n) {
                if (((e = this.clone().startOf("day").valueOf()), t[n].since <= e && e <= t[n].until)) return t[n].narrow;
                if (t[n].until <= e && e <= t[n].since) return t[n].narrow;
            }
            return "";
        }),
        (i.eraAbbr = function() {
            for (var e, t = this.localeData().eras(), n = 0, s = t.length; n < s; ++n) {
                if (((e = this.clone().startOf("day").valueOf()), t[n].since <= e && e <= t[n].until)) return t[n].abbr;
                if (t[n].until <= e && e <= t[n].since) return t[n].abbr;
            }
            return "";
        }),
        (i.eraYear = function() {
            for (var e, t, n = this.localeData().eras(), s = 0, i = n.length; s < i; ++s)
                if (((e = n[s].since <= n[s].until ? 1 : -1), (t = this.clone().startOf("day").valueOf()), (n[s].since <= t && t <= n[s].until) || (n[s].until <= t && t <= n[s].since)))
                    return (this.year() - f(n[s].since).year()) * e + n[s].offset;
            return this.year();
        }),
        (i.year = Ie),
        (i.isLeapYear = function() {
            return he(this.year());
        }),
        (i.weekYear = function(e) {
            return un.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
        }),
        (i.isoWeekYear = function(e) {
            return un.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
        }),
        (i.quarter = i.quarters = function(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + (this.month() % 3));
        }),
        (i.month = Ge),
        (i.daysInMonth = function() {
            return We(this.year(), this.month());
        }),
        (i.week = i.weeks = function(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d");
        }),
        (i.isoWeek = i.isoWeeks = function(e) {
            var t = qe(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d");
        }),
        (i.weeksInYear = function() {
            var e = this.localeData()._week;
            return P(this.year(), e.dow, e.doy);
        }),
        (i.weeksInWeekYear = function() {
            var e = this.localeData()._week;
            return P(this.weekYear(), e.dow, e.doy);
        }),
        (i.isoWeeksInYear = function() {
            return P(this.year(), 1, 4);
        }),
        (i.isoWeeksInISOWeekYear = function() {
            return P(this.isoWeekYear(), 1, 4);
        }),
        (i.date = ke),
        (i.day = i.days = function(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t,
                n,
                s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? ((t = e), (n = this.localeData()), (e = "string" != typeof t ? t : isNaN(t) ? ("number" == typeof(t = n.weekdaysParse(t)) ? t : null) : parseInt(t, 10)), this.add(e - s, "d")) : s;
        }),
        (i.weekday = function(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d");
        }),
        (i.isoWeekday = function(e) {
            return this.isValid() ?
                null != e ?
                ((t = e), (n = this.localeData()), (n = "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t), this.day(this.day() % 7 ? n : n - 7)) :
                this.day() || 7 :
                null != e ?
                this :
                NaN;
            var t, n;
        }),
        (i.dayOfYear = function(e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d");
        }),
        (i.hour = i.hours = k),
        (i.minute = i.minutes = _e),
        (i.second = i.seconds = ve),
        (i.millisecond = i.milliseconds = ye),
        (i.utcOffset = function(e, t, n) {
            var s,
                i = this._offset || 0;
            if (!this.isValid()) return null != e ? this : NaN;
            if (null == e) return this._isUTC ? i : Et(this);
            if ("string" == typeof e) {
                if (null === (e = Vt(Ye, e))) return this;
            } else Math.abs(e) < 16 && !n && (e *= 60);
            return (!this._isUTC && t && (s = Et(this)),
                (this._offset = e),
                (this._isUTC = !0),
                null != s && this.add(s, "m"),
                i !== e && (!t || this._changeInProgress ? qt(this, C(e - i, "m"), 1, !1) : this._changeInProgress || ((this._changeInProgress = !0), f.updateOffset(this, !0), (this._changeInProgress = null))),
                this
            );
        }),
        (i.utc = function(e) {
            return this.utcOffset(0, e);
        }),
        (i.local = function(e) {
            return this._isUTC && (this.utcOffset(0, e), (this._isUTC = !1), e && this.subtract(Et(this), "m")), this;
        }),
        (i.parseZone = function() {
            var e;
            return null != this._tzm ? this.utcOffset(this._tzm, !1, !0) : "string" == typeof this._i && (null != (e = Vt(Se, this._i)) ? this.utcOffset(e) : this.utcOffset(0, !0)), this;
        }),
        (i.hasAlignedHourOffset = function(e) {
            return !!this.isValid() && ((e = e ? W(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0);
        }),
        (i.isDST = function() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
        }),
        (i.isLocal = function() {
            return !!this.isValid() && !this._isUTC;
        }),
        (i.isUtcOffset = function() {
            return !!this.isValid() && this._isUTC;
        }),
        (i.isUtc = At),
        (i.isUTC = At),
        (i.zoneAbbr = function() {
            return this._isUTC ? "UTC" : "";
        }),
        (i.zoneName = function() {
            return this._isUTC ? "Coordinated Universal Time" : "";
        }),
        (i.dates = e("dates accessor is deprecated. Use date instead.", ke)),
        (i.months = e("months accessor is deprecated. Use month instead", Ge)),
        (i.years = e("years accessor is deprecated. Use year instead", Ie)),
        (i.zone = e("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
            return null != e ? (this.utcOffset((e = "string" != typeof e ? -e : e), t), this) : -this.utcOffset();
        })),
        (i.isDSTShifted = e("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
            if (!o(this._isDSTShifted)) return this._isDSTShifted;
            var e,
                t = {};
            return (
                $(t, this),
                (t = Nt(t))._a ?
                ((e = (t._isUTC ? l : W)(t._a)),
                    (this._isDSTShifted =
                        this.isValid() &&
                        0 <
                        (function(e, t, n) {
                            for (var s = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), r = 0, a = 0; a < s; a++)((n && e[a] !== t[a]) || (!n && g(e[a]) !== g(t[a]))) && r++;
                            return r + i;
                        })(t._a, e.toArray()))) :
                (this._isDSTShifted = !1),
                this._isDSTShifted
            );
        }));
    w = K.prototype;

    function cn(e, t, n, s) {
        var i = mt(),
            s = l().set(s, t);
        return i[n](s, e);
    }

    function fn(e, t, n) {
        if ((u(e) && ((t = e), (e = void 0)), (e = e || ""), null != t)) return cn(e, t, n, "month");
        for (var s = [], i = 0; i < 12; i++) s[i] = cn(e, i, n, "month");
        return s;
    }

    function mn(e, t, n, s) {
        t = ("boolean" == typeof e ? u(t) && ((n = t), (t = void 0)) : ((t = e), (e = !1), u((n = t)) && ((n = t), (t = void 0))), t || "");
        var i,
            r = mt(),
            a = e ? r._week.dow : 0,
            o = [];
        if (null != n) return cn(t, (n + a) % 7, s, "day");
        for (i = 0; i < 7; i++) o[i] = cn(t, (i + a) % 7, s, "day");
        return o;
    }
    (w.calendar = function(e, t, n) {
        return d((e = this._calendar[e] || this._calendar.sameElse)) ? e.call(t, n) : e;
    }),
    (w.longDateFormat = function(e) {
        var t = this._longDateFormat[e],
            n = this._longDateFormat[e.toUpperCase()];
        return t || !n ?
            t :
            ((this._longDateFormat[e] = n
                    .match(te)
                    .map(function(e) {
                        return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e;
                    })
                    .join("")),
                this._longDateFormat[e]);
    }),
    (w.invalidDate = function() {
        return this._invalidDate;
    }),
    (w.ordinal = function(e) {
        return this._ordinal.replace("%d", e);
    }),
    (w.preparse = dn),
    (w.postformat = dn),
    (w.relativeTime = function(e, t, n, s) {
        var i = this._relativeTime[n];
        return d(i) ? i(e, t, n, s) : i.replace(/%d/i, e);
    }),
    (w.pastFuture = function(e, t) {
        return d((e = this._relativeTime[0 < e ? "future" : "past"])) ? e(t) : e.replace(/%s/i, t);
    }),
    (w.set = function(e) {
        var t, n;
        for (n in e) c(e, n) && (d((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
        (this._config = e), (this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source));
    }),
    (w.eras = function(e, t) {
        for (var n, s = this._eras || mt("en")._eras, i = 0, r = s.length; i < r; ++i) {
            switch (typeof s[i].since) {
                case "string":
                    (n = f(s[i].since).startOf("day")), (s[i].since = n.valueOf());
                    break;
            }
            switch (typeof s[i].until) {
                case "undefined":
                    s[i].until = 1 / 0;
                    break;
                case "string":
                    (n = f(s[i].until).startOf("day").valueOf()), (s[i].until = n.valueOf());
                    break;
            }
        }
        return s;
    }),
    (w.erasParse = function(e, t, n) {
        var s,
            i,
            r,
            a,
            o,
            u = this.eras();
        for (e = e.toUpperCase(), s = 0, i = u.length; s < i; ++s)
            if (((r = u[s].name.toUpperCase()), (a = u[s].abbr.toUpperCase()), (o = u[s].narrow.toUpperCase()), n))
                switch (t) {
                    case "N":
                    case "NN":
                    case "NNN":
                        if (a === e) return u[s];
                        break;
                    case "NNNN":
                        if (r === e) return u[s];
                        break;
                    case "NNNNN":
                        if (o === e) return u[s];
                        break;
                }
        else if (0 <= [r, a, o].indexOf(e)) return u[s];
    }),
    (w.erasConvertYear = function(e, t) {
        var n = e.since <= e.until ? 1 : -1;
        return void 0 === t ? f(e.since).year() : f(e.since).year() + (t - e.offset) * n;
    }),
    (w.erasAbbrRegex = function(e) {
        return c(this, "_erasAbbrRegex") || an.call(this), e ? this._erasAbbrRegex : this._erasRegex;
    }),
    (w.erasNameRegex = function(e) {
        return c(this, "_erasNameRegex") || an.call(this), e ? this._erasNameRegex : this._erasRegex;
    }),
    (w.erasNarrowRegex = function(e) {
        return c(this, "_erasNarrowRegex") || an.call(this), e ? this._erasNarrowRegex : this._erasRegex;
    }),
    (w.months = function(e, t) {
        return e ? (a(this._months) ? this._months : this._months[(this._months.isFormat || He).test(t) ? "format" : "standalone"])[e.month()] : a(this._months) ? this._months : this._months.standalone;
    }),
    (w.monthsShort = function(e, t) {
        return e ? (a(this._monthsShort) ? this._monthsShort : this._monthsShort[He.test(t) ? "format" : "standalone"])[e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
    }),
    (w.monthsParse = function(e, t, n) {
        var s, i;
        if (this._monthsParseExact)
            return function(e, t, n) {
                var s,
                    i,
                    r,
                    e = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)
                        (r = l([2e3, s])), (this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase()), (this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase());
                return n ?
                    "MMM" === t ?
                    -1 !== (i = S.call(this._shortMonthsParse, e)) ?
                    i :
                    null :
                    -1 !== (i = S.call(this._longMonthsParse, e)) ?
                    i :
                    null :
                    "MMM" === t ?
                    -1 !== (i = S.call(this._shortMonthsParse, e)) || -1 !== (i = S.call(this._longMonthsParse, e)) ?
                    i :
                    null :
                    -1 !== (i = S.call(this._longMonthsParse, e)) || -1 !== (i = S.call(this._shortMonthsParse, e)) ?
                    i :
                    null;
            }.call(this, e, t, n);
        for (this._monthsParse || ((this._monthsParse = []), (this._longMonthsParse = []), (this._shortMonthsParse = [])), s = 0; s < 12; s++) {
            if (
                ((i = l([2e3, s])),
                    n &&
                    !this._longMonthsParse[s] &&
                    ((this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i")), (this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i"))),
                    n || this._monthsParse[s] || ((i = "^" + this.months(i, "") + "|^" + this.monthsShort(i, "")), (this._monthsParse[s] = new RegExp(i.replace(".", ""), "i"))),
                    n && "MMMM" === t && this._longMonthsParse[s].test(e))
            )
                return s;
            if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
            if (!n && this._monthsParse[s].test(e)) return s;
        }
    }),
    (w.monthsRegex = function(e) {
        return this._monthsParseExact ?
            (c(this, "_monthsRegex") || Ee.call(this), e ? this._monthsStrictRegex : this._monthsRegex) :
            (c(this, "_monthsRegex") || (this._monthsRegex = Le), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
    }),
    (w.monthsShortRegex = function(e) {
        return this._monthsParseExact ?
            (c(this, "_monthsRegex") || Ee.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) :
            (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Fe), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
    }),
    (w.week = function(e) {
        return qe(e, this._week.dow, this._week.doy).week;
    }),
    (w.firstDayOfYear = function() {
        return this._week.doy;
    }),
    (w.firstDayOfWeek = function() {
        return this._week.dow;
    }),
    (w.weekdays = function(e, t) {
        return (t = a(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"]), !0 === e ? Be(t, this._week.dow) : e ? t[e.day()] : t;
    }),
    (w.weekdaysMin = function(e) {
        return !0 === e ? Be(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
    }),
    (w.weekdaysShort = function(e) {
        return !0 === e ? Be(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
    }),
    (w.weekdaysParse = function(e, t, n) {
        var s, i;
        if (this._weekdaysParseExact)
            return function(e, t, n) {
                var s,
                    i,
                    r,
                    e = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)
                        (r = l([2e3, 1]).day(s)),
                        (this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase()),
                        (this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase()),
                        (this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase());
                return n ?
                    "dddd" === t ?
                    -1 !== (i = S.call(this._weekdaysParse, e)) ?
                    i :
                    null :
                    "ddd" === t ?
                    -1 !== (i = S.call(this._shortWeekdaysParse, e)) ?
                    i :
                    null :
                    -1 !== (i = S.call(this._minWeekdaysParse, e)) ?
                    i :
                    null :
                    "dddd" === t ?
                    -1 !== (i = S.call(this._weekdaysParse, e)) || -1 !== (i = S.call(this._shortWeekdaysParse, e)) || -1 !== (i = S.call(this._minWeekdaysParse, e)) ?
                    i :
                    null :
                    "ddd" === t ?
                    -1 !== (i = S.call(this._shortWeekdaysParse, e)) || -1 !== (i = S.call(this._weekdaysParse, e)) || -1 !== (i = S.call(this._minWeekdaysParse, e)) ?
                    i :
                    null :
                    -1 !== (i = S.call(this._minWeekdaysParse, e)) || -1 !== (i = S.call(this._weekdaysParse, e)) || -1 !== (i = S.call(this._shortWeekdaysParse, e)) ?
                    i :
                    null;
            }.call(this, e, t, n);
        for (this._weekdaysParse || ((this._weekdaysParse = []), (this._minWeekdaysParse = []), (this._shortWeekdaysParse = []), (this._fullWeekdaysParse = [])), s = 0; s < 7; s++) {
            if (
                ((i = l([2e3, 1]).day(s)),
                    n &&
                    !this._fullWeekdaysParse[s] &&
                    ((this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i")),
                        (this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i")),
                        (this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i"))),
                    this._weekdaysParse[s] || ((i = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, "")), (this._weekdaysParse[s] = new RegExp(i.replace(".", ""), "i"))),
                    n && "dddd" === t && this._fullWeekdaysParse[s].test(e))
            )
                return s;
            if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
            if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
            if (!n && this._weekdaysParse[s].test(e)) return s;
        }
    }),
    (w.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ?
            (c(this, "_weekdaysRegex") || nt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) :
            (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Ke), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
    }),
    (w.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ?
            (c(this, "_weekdaysRegex") || nt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) :
            (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = et), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
    }),
    (w.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ?
            (c(this, "_weekdaysRegex") || nt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) :
            (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = tt), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
    }),
    (w.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0);
    }),
    (w.meridiem = function(e, t, n) {
        return 11 < e ? (n ? "pm" : "PM") : n ? "am" : "AM";
    }),
    ct("en", {
            eras: [{
                    since: "0001-01-01",
                    until: 1 / 0,
                    offset: 1,
                    name: "Anno Domini",
                    narrow: "AD",
                    abbr: "AD"
                },
                {
                    since: "0000-12-31",
                    until: -1 / 0,
                    offset: 1,
                    name: "Before Christ",
                    narrow: "BC",
                    abbr: "BC"
                },
            ],
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 === g((e % 100) / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th");
            },
        }),
        (f.lang = e("moment.lang is deprecated. Use moment.locale instead.", ct)),
        (f.langData = e("moment.langData is deprecated. Use moment.localeData instead.", mt));
    var _n = Math.abs;

    function yn(e, t, n, s) {
        t = C(t, n);
        return (e._milliseconds += s * t._milliseconds), (e._days += s * t._days), (e._months += s * t._months), e._bubble();
    }

    function gn(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e);
    }

    function wn(e) {
        return (4800 * e) / 146097;
    }

    function pn(e) {
        return (146097 * e) / 4800;
    }

    function kn(e) {
        return function() {
            return this.as(e);
        };
    }
    (pe = kn("ms")), (me = kn("s")), (Ce = kn("m")), (we = kn("h")), (ge = kn("d")), (Je = kn("w")), (k = kn("M")), (_e = kn("Q")), (ve = kn("y"));

    function vn(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN;
        };
    }
    var ye = vn("milliseconds"),
        ke = vn("seconds"),
        Ie = vn("minutes"),
        w = vn("hours"),
        Mn = vn("days"),
        Dn = vn("months"),
        Sn = vn("years");
    var Yn = Math.round,
        On = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            w: null,
            M: 11
        };

    function bn(e, t, n, s) {
        var i = C(e).abs(),
            r = Yn(i.as("s")),
            a = Yn(i.as("m")),
            o = Yn(i.as("h")),
            u = Yn(i.as("d")),
            l = Yn(i.as("M")),
            h = Yn(i.as("w")),
            i = Yn(i.as("y")),
            r = (r <= n.ss ? ["s", r] : r < n.s && ["ss", r]) || (a <= 1 && ["m"]) || (a < n.m && ["mm", a]) || (o <= 1 && ["h"]) || (o < n.h && ["hh", o]) || (u <= 1 && ["d"]) || (u < n.d && ["dd", u]);
        return (
            ((r = (r = null != n.w ? r || (h <= 1 && ["w"]) || (h < n.w && ["ww", h]) : r) || (l <= 1 && ["M"]) || (l < n.M && ["MM", l]) || (i <= 1 && ["y"]) || ["yy", i])[2] = t),
            (r[3] = 0 < +e),
            (r[4] = s),
            function(e, t, n, s, i) {
                return i.relativeTime(t || 1, !!n, e, s);
            }.apply(null, r)
        );
    }
    var xn = Math.abs;

    function Tn(e) {
        return (0 < e) - (e < 0) || +e;
    }

    function Nn() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e,
            t,
            n,
            s,
            i,
            r,
            a,
            o = xn(this._milliseconds) / 1e3,
            u = xn(this._days),
            l = xn(this._months),
            h = this.asSeconds();
        return h ?
            ((e = y(o / 60)),
                (t = y(e / 60)),
                (o %= 60),
                (e %= 60),
                (n = y(l / 12)),
                (l %= 12),
                (s = o ? o.toFixed(3).replace(/\.?0+$/, "") : ""),
                (i = Tn(this._months) !== Tn(h) ? "-" : ""),
                (r = Tn(this._days) !== Tn(h) ? "-" : ""),
                (a = Tn(this._milliseconds) !== Tn(h) ? "-" : ""),
                (h < 0 ? "-" : "") + "P" + (n ? i + n + "Y" : "") + (l ? i + l + "M" : "") + (u ? r + u + "D" : "") + (t || e || o ? "T" : "") + (t ? a + t + "H" : "") + (e ? a + e + "M" : "") + (o ? a + s + "S" : "")) :
            "P0D";
    }
    var U = Ct.prototype;
    return (
        (U.isValid = function() {
            return this._isValid;
        }),
        (U.abs = function() {
            var e = this._data;
            return (
                (this._milliseconds = _n(this._milliseconds)),
                (this._days = _n(this._days)),
                (this._months = _n(this._months)),
                (e.milliseconds = _n(e.milliseconds)),
                (e.seconds = _n(e.seconds)),
                (e.minutes = _n(e.minutes)),
                (e.hours = _n(e.hours)),
                (e.months = _n(e.months)),
                (e.years = _n(e.years)),
                this
            );
        }),
        (U.add = function(e, t) {
            return yn(this, e, t, 1);
        }),
        (U.subtract = function(e, t) {
            return yn(this, e, t, -1);
        }),
        (U.as = function(e) {
            if (!this.isValid()) return NaN;
            var t,
                n,
                s = this._milliseconds;
            if ("month" === (e = _(e)) || "quarter" === e || "year" === e)
                switch (((t = this._days + s / 864e5), (n = this._months + wn(t)), e)) {
                    case "month":
                        return n;
                    case "quarter":
                        return n / 3;
                    case "year":
                        return n / 12;
                }
            else
                switch (((t = this._days + Math.round(pn(this._months))), e)) {
                    case "week":
                        return t / 7 + s / 6048e5;
                    case "day":
                        return t + s / 864e5;
                    case "hour":
                        return 24 * t + s / 36e5;
                    case "minute":
                        return 1440 * t + s / 6e4;
                    case "second":
                        return 86400 * t + s / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * t) + s;
                    default:
                        throw new Error("Unknown unit " + e);
                }
        }),
        (U.asMilliseconds = pe),
        (U.asSeconds = me),
        (U.asMinutes = Ce),
        (U.asHours = we),
        (U.asDays = ge),
        (U.asWeeks = Je),
        (U.asMonths = k),
        (U.asQuarters = _e),
        (U.asYears = ve),
        (U.valueOf = function() {
            return this.isValid() ? this._milliseconds + 864e5 * this._days + (this._months % 12) * 2592e6 + 31536e6 * g(this._months / 12) : NaN;
        }),
        (U._bubble = function() {
            var e = this._milliseconds,
                t = this._days,
                n = this._months,
                s = this._data;
            return (
                (0 <= e && 0 <= t && 0 <= n) || (e <= 0 && t <= 0 && n <= 0) || ((e += 864e5 * gn(pn(n) + t)), (n = t = 0)),
                (s.milliseconds = e % 1e3),
                (e = y(e / 1e3)),
                (s.seconds = e % 60),
                (e = y(e / 60)),
                (s.minutes = e % 60),
                (e = y(e / 60)),
                (s.hours = e % 24),
                (t += y(e / 24)),
                (n += e = y(wn(t))),
                (t -= gn(pn(e))),
                (e = y(n / 12)),
                (n %= 12),
                (s.days = t),
                (s.months = n),
                (s.years = e),
                this
            );
        }),
        (U.clone = function() {
            return C(this);
        }),
        (U.get = function(e) {
            return (e = _(e)), this.isValid() ? this[e + "s"]() : NaN;
        }),
        (U.milliseconds = ye),
        (U.seconds = ke),
        (U.minutes = Ie),
        (U.hours = w),
        (U.days = Mn),
        (U.weeks = function() {
            return y(this.days() / 7);
        }),
        (U.months = Dn),
        (U.years = Sn),
        (U.humanize = function(e, t) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var n = !1,
                s = On;
            return (
                "object" == typeof e && ((t = e), (e = !1)),
                "boolean" == typeof e && (n = e),
                "object" == typeof t && ((s = Object.assign({}, On, t)), null != t.s && null == t.ss && (s.ss = t.s - 1)),
                (e = this.localeData()),
                (t = bn(this, !n, s, e)),
                n && (t = e.pastFuture(+this, t)),
                e.postformat(t)
            );
        }),
        (U.toISOString = Nn),
        (U.toString = Nn),
        (U.toJSON = Nn),
        (U.locale = Xt),
        (U.localeData = Kt),
        (U.toIsoString = e("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Nn)),
        (U.lang = Xe),
        s("X", 0, 0, "unix"),
        s("x", 0, 0, "valueOf"),
        v("x", De),
        v("X", /[+-]?\d+(\.\d{1,3})?/),
        D("X", function(e, t, n) {
            n._d = new Date(1e3 * parseFloat(e));
        }),
        D("x", function(e, t, n) {
            n._d = new Date(g(e));
        }),
        (f.version = "2.29.4"),
        (H = W),
        (f.fn = i),
        (f.min = function() {
            return Rt("isBefore", [].slice.call(arguments, 0));
        }),
        (f.max = function() {
            return Rt("isAfter", [].slice.call(arguments, 0));
        }),
        (f.now = function() {
            return Date.now ? Date.now() : +new Date();
        }),
        (f.utc = l),
        (f.unix = function(e) {
            return W(1e3 * e);
        }),
        (f.months = function(e, t) {
            return fn(e, t, "months");
        }),
        (f.isDate = V),
        (f.locale = ct),
        (f.invalid = I),
        (f.duration = C),
        (f.isMoment = h),
        (f.weekdays = function(e, t, n) {
            return mn(e, t, n, "weekdays");
        }),
        (f.parseZone = function() {
            return W.apply(null, arguments).parseZone();
        }),
        (f.localeData = mt),
        (f.isDuration = Ut),
        (f.monthsShort = function(e, t) {
            return fn(e, t, "monthsShort");
        }),
        (f.weekdaysMin = function(e, t, n) {
            return mn(e, t, n, "weekdaysMin");
        }),
        (f.defineLocale = ft),
        (f.updateLocale = function(e, t) {
            var n, s;
            return (
                null != t ?
                ((s = ot),
                    null != R[e] && null != R[e].parentLocale ? R[e].set(X(R[e]._config, t)) : ((t = X((s = null != (n = dt(e)) ? n._config : s), t)), null == n && (t.abbr = e), ((s = new K(t)).parentLocale = R[e]), (R[e] = s)),
                    ct(e)) :
                null != R[e] && (null != R[e].parentLocale ? ((R[e] = R[e].parentLocale), e === ct() && ct(e)) : null != R[e] && delete R[e]),
                R[e]
            );
        }),
        (f.locales = function() {
            return ee(R);
        }),
        (f.weekdaysShort = function(e, t, n) {
            return mn(e, t, n, "weekdaysShort");
        }),
        (f.normalizeUnits = _),
        (f.relativeTimeRounding = function(e) {
            return void 0 === e ? Yn : "function" == typeof e && ((Yn = e), !0);
        }),
        (f.relativeTimeThreshold = function(e, t) {
            return void 0 !== On[e] && (void 0 === t ? On[e] : ((On[e] = t), "s" === e && (On.ss = t - 1), !0));
        }),
        (f.calendarFormat = function(e, t) {
            return (e = e.diff(t, "days", !0)) < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse";
        }),
        (f.prototype = i),
        (f.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "GGGG-[W]WW",
            MONTH: "YYYY-MM",
        }),
        f
    );
});

/**
 * @version: 3.0.1
 * @author: Dan Grossman http://www.dangrossman.info/
 * @copyright: Copyright (c) 2012-2018 Dan Grossman. All rights reserved.
 * @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
 * @website: http://www.daterangepicker.com/
 */
// Following the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
!(function(t, a) {
    if ("function" == typeof define && define.amd)
        define(["moment", "jquery"], function(t, e) {
            return e.fn || (e.fn = {}), a(t, e);
        });
    else if ("object" == typeof module && module.exports) {
        var e = "undefined" != typeof window ? window.jQuery : void 0;
        e || (e = require("jquery")).fn || (e.fn = {});
        var i = "undefined" != typeof window && void 0 !== window.moment ? window.moment : require("moment");
        module.exports = a(i, e);
    } else t.daterangepicker = a(t.moment, t.jQuery);
})(this, function(H, R) {
    var i = function(t, e, a) {
        if (
            ((this.parentEl = "body"),
                (this.element = R(t)),
                (this.startDate = H().startOf("day")),
                (this.endDate = H().endOf("day")),
                (this.minDate = !1),
                (this.maxDate = !1),
                (this.maxSpan = !1),
                (this.autoApply = !1),
                (this.singleDatePicker = !1),
                (this.showDropdowns = !1),
                (this.minYear = H().subtract(100, "year").format("YYYY")),
                (this.maxYear = H().add(100, "year").format("YYYY")),
                (this.showWeekNumbers = !1),
                (this.showISOWeekNumbers = !1),
                (this.showCustomRangeLabel = !0),
                (this.timePicker = !1),
                (this.timePicker24Hour = !1),
                (this.timePickerIncrement = 1),
                (this.timePickerSeconds = !1),
                (this.linkedCalendars = !0),
                (this.autoUpdateInput = !0),
                (this.alwaysShowCalendars = !1),
                (this.ranges = {}),
                (this.opens = "right"),
                this.element.hasClass("pull-right") && (this.opens = "left"),
                (this.drops = "down"),
                this.element.hasClass("dropup") && (this.drops = "up"),
                (this.buttonClasses = "btn btn-sm"),
                (this.applyButtonClasses = "btn-primary"),
                (this.cancelButtonClasses = "btn-default"),
                (this.locale = {
                    direction: "ltr",
                    format: H.localeData().longDateFormat("L"),
                    separator: " - ",
                    applyLabel: "Apply",
                    cancelLabel: "Cancel",
                    weekLabel: "W",
                    customRangeLabel: "Custom Range",
                    daysOfWeek: H.weekdaysMin(),
                    monthNames: H.monthsShort(),
                    firstDay: H.localeData().firstDayOfWeek(),
                }),
                (this.callback = function() {}),
                (this.isShowing = !1),
                (this.leftCalendar = {}),
                (this.rightCalendar = {}),
                ("object" == typeof e && null !== e) || (e = {}),
                "string" == typeof(e = R.extend(this.element.data(), e)).template ||
                e.template instanceof R ||
                (e.template =
                    '<div class="daterangepicker"><div class="ranges"></div><div class="calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'),
                (this.parentEl = e.parentEl && R(e.parentEl).length ? R(e.parentEl) : R(this.parentEl)),
                (this.container = R(e.template).appendTo(this.parentEl)),
                "object" == typeof e.locale &&
                ("string" == typeof e.locale.direction && (this.locale.direction = e.locale.direction),
                    "string" == typeof e.locale.format && (this.locale.format = e.locale.format),
                    "string" == typeof e.locale.separator && (this.locale.separator = e.locale.separator),
                    "object" == typeof e.locale.daysOfWeek && (this.locale.daysOfWeek = e.locale.daysOfWeek.slice()),
                    "object" == typeof e.locale.monthNames && (this.locale.monthNames = e.locale.monthNames.slice()),
                    "number" == typeof e.locale.firstDay && (this.locale.firstDay = e.locale.firstDay),
                    "string" == typeof e.locale.applyLabel && (this.locale.applyLabel = e.locale.applyLabel),
                    "string" == typeof e.locale.cancelLabel && (this.locale.cancelLabel = e.locale.cancelLabel),
                    "string" == typeof e.locale.weekLabel && (this.locale.weekLabel = e.locale.weekLabel),
                    "string" == typeof e.locale.customRangeLabel))
        ) {
            (d = document.createElement("textarea")).innerHTML = e.locale.customRangeLabel;
            var i = d.value;
            this.locale.customRangeLabel = i;
        }
        if (
            (this.container.addClass(this.locale.direction),
                "string" == typeof e.startDate && (this.startDate = H(e.startDate, this.locale.format)),
                "string" == typeof e.endDate && (this.endDate = H(e.endDate, this.locale.format)),
                "string" == typeof e.minDate && (this.minDate = H(e.minDate, this.locale.format)),
                "string" == typeof e.maxDate && (this.maxDate = H(e.maxDate, this.locale.format)),
                "object" == typeof e.startDate && (this.startDate = H(e.startDate)),
                "object" == typeof e.endDate && (this.endDate = H(e.endDate)),
                "object" == typeof e.minDate && (this.minDate = H(e.minDate)),
                "object" == typeof e.maxDate && (this.maxDate = H(e.maxDate)),
                this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()),
                this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()),
                "string" == typeof e.applyButtonClasses && (this.applyButtonClasses = e.applyButtonClasses),
                "string" == typeof e.applyClass && (this.applyButtonClasses = e.applyClass),
                "string" == typeof e.cancelButtonClasses && (this.cancelButtonClasses = e.cancelButtonClasses),
                "string" == typeof e.cancelClass && (this.cancelButtonClasses = e.cancelClass),
                "object" == typeof e.maxSpan && (this.maxSpan = e.maxSpan),
                "object" == typeof e.dateLimit && (this.maxSpan = e.dateLimit),
                "string" == typeof e.opens && (this.opens = e.opens),
                "string" == typeof e.drops && (this.drops = e.drops),
                "boolean" == typeof e.showWeekNumbers && (this.showWeekNumbers = e.showWeekNumbers),
                "boolean" == typeof e.showISOWeekNumbers && (this.showISOWeekNumbers = e.showISOWeekNumbers),
                "string" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses),
                "object" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses.join(" ")),
                "boolean" == typeof e.showDropdowns && (this.showDropdowns = e.showDropdowns),
                "number" == typeof e.minYear && (this.minYear = e.minYear),
                "number" == typeof e.maxYear && (this.maxYear = e.maxYear),
                "boolean" == typeof e.showCustomRangeLabel && (this.showCustomRangeLabel = e.showCustomRangeLabel),
                "boolean" == typeof e.singleDatePicker && ((this.singleDatePicker = e.singleDatePicker), this.singleDatePicker && (this.endDate = this.startDate.clone())),
                "boolean" == typeof e.timePicker && (this.timePicker = e.timePicker),
                "boolean" == typeof e.timePickerSeconds && (this.timePickerSeconds = e.timePickerSeconds),
                "number" == typeof e.timePickerIncrement && (this.timePickerIncrement = e.timePickerIncrement),
                "boolean" == typeof e.timePicker24Hour && (this.timePicker24Hour = e.timePicker24Hour),
                "boolean" == typeof e.autoApply && (this.autoApply = e.autoApply),
                "boolean" == typeof e.autoUpdateInput && (this.autoUpdateInput = e.autoUpdateInput),
                "boolean" == typeof e.linkedCalendars && (this.linkedCalendars = e.linkedCalendars),
                "function" == typeof e.isInvalidDate && (this.isInvalidDate = e.isInvalidDate),
                "function" == typeof e.isCustomDate && (this.isCustomDate = e.isCustomDate),
                "boolean" == typeof e.alwaysShowCalendars && (this.alwaysShowCalendars = e.alwaysShowCalendars),
                0 != this.locale.firstDay)
        )
            for (var s = this.locale.firstDay; 0 < s;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), s--;
        var n, r, o;
        if (void 0 === e.startDate && void 0 === e.endDate && R(this.element).is("input[type=text]")) {
            var h = R(this.element).val(),
                l = h.split(this.locale.separator);
            (n = r = null),
            2 == l.length ? ((n = H(l[0], this.locale.format)), (r = H(l[1], this.locale.format))) : this.singleDatePicker && "" !== h && ((n = H(h, this.locale.format)), (r = H(h, this.locale.format))),
                null !== n && null !== r && (this.setStartDate(n), this.setEndDate(r));
        }
        if ("object" == typeof e.ranges) {
            for (o in e.ranges) {
                (n = "string" == typeof e.ranges[o][0] ? H(e.ranges[o][0], this.locale.format) : H(e.ranges[o][0])),
                (r = "string" == typeof e.ranges[o][1] ? H(e.ranges[o][1], this.locale.format) : H(e.ranges[o][1])),
                this.minDate && n.isBefore(this.minDate) && (n = this.minDate.clone());
                var c = this.maxDate;
                if (
                    (this.maxSpan && c && n.clone().add(this.maxSpan).isAfter(c) && (c = n.clone().add(this.maxSpan)),
                        c && r.isAfter(c) && (r = c.clone()), !((this.minDate && r.isBefore(this.minDate, this.timepicker ? "minute" : "day")) || (c && n.isAfter(c, this.timepicker ? "minute" : "day"))))
                ) {
                    var d;
                    (d = document.createElement("textarea")).innerHTML = o;
                    i = d.value;
                    this.ranges[i] = [n, r];
                }
            }
            var m = "<ul>";
            for (o in this.ranges) m += '<li data-range-key="' + o + '">' + o + "</li>";
            this.showCustomRangeLabel && (m += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), (m += "</ul>"), this.container.find(".ranges").prepend(m);
        }
        "function" == typeof a && (this.callback = a),
            this.timePicker || ((this.startDate = this.startDate.startOf("day")), (this.endDate = this.endDate.endOf("day")), this.container.find(".calendar-time").hide()),
            this.timePicker && this.autoApply && (this.autoApply = !1),
            this.autoApply && this.container.addClass("auto-apply"),
            "object" == typeof e.ranges && this.container.addClass("show-ranges"),
            this.singleDatePicker &&
            (this.container.addClass("single"),
                this.container.find(".calendar.left").addClass("single"),
                this.container.find(".calendar.left").show(),
                this.container.find(".calendar.right").hide(),
                this.timePicker || this.container.addClass("auto-apply")),
            ((void 0 === e.ranges && !this.singleDatePicker) || this.alwaysShowCalendars) && this.container.addClass("show-calendar"),
            this.container.addClass("opens" + this.opens),
            this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses),
            this.applyButtonClasses.length && this.container.find(".applyBtn").addClass(this.applyButtonClasses),
            this.cancelButtonClasses.length && this.container.find(".cancelBtn").addClass(this.cancelButtonClasses),
            this.container.find(".applyBtn").html(this.locale.applyLabel),
            this.container.find(".cancelBtn").html(this.locale.cancelLabel),
            this.container
            .find(".calendar")
            .on("click.daterangepicker", ".prev", R.proxy(this.clickPrev, this))
            .on("click.daterangepicker", ".next", R.proxy(this.clickNext, this))
            .on("mousedown.daterangepicker", "td.available", R.proxy(this.clickDate, this))
            .on("change.daterangepicker", "select.yearselect", R.proxy(this.monthOrYearChanged, this))
            .on("change.daterangepicker", "select.monthselect", R.proxy(this.monthOrYearChanged, this))
            .on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", R.proxy(this.timeChanged, this)),
            this.container.find(".ranges").on("click.daterangepicker", "li", R.proxy(this.clickRange, this)),
            this.container.find(".drp-buttons").on("click.daterangepicker", "button.applyBtn", R.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", R.proxy(this.clickCancel, this)),
            this.element.is("input") || this.element.is("button") ?
            this.element.on({
                "click.daterangepicker": R.proxy(this.show, this),
                "focus.daterangepicker": R.proxy(this.show, this),
                "keyup.daterangepicker": R.proxy(this.elementChanged, this),
                "keydown.daterangepicker": R.proxy(this.keydown, this),
            }) :
            (this.element.on("click.daterangepicker", R.proxy(this.toggle, this)), this.element.on("keydown.daterangepicker", R.proxy(this.toggle, this))),
            this.element.is("input") && !this.singleDatePicker && this.autoUpdateInput ?
            (this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.element.trigger("change")) :
            this.element.is("input") && this.autoUpdateInput && (this.element.val(this.startDate.format(this.locale.format)), this.element.trigger("change"));
    };
    return (
        (i.prototype = {
            constructor: i,
            setStartDate: function(t) {
                "string" == typeof t && (this.startDate = H(t, this.locale.format)),
                    "object" == typeof t && (this.startDate = H(t)),
                    this.timePicker || (this.startDate = this.startDate.startOf("day")),
                    this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement),
                    this.minDate &&
                    this.startDate.isBefore(this.minDate) &&
                    ((this.startDate = this.minDate.clone()), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)),
                    this.maxDate &&
                    this.startDate.isAfter(this.maxDate) &&
                    ((this.startDate = this.maxDate.clone()), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)),
                    this.isShowing || this.updateElement(),
                    this.updateMonthsInView();
            },
            setEndDate: function(t) {
                "string" == typeof t && (this.endDate = H(t, this.locale.format)),
                    "object" == typeof t && (this.endDate = H(t)),
                    this.timePicker || (this.endDate = this.endDate.add(1, "d").startOf("day").subtract(1, "second")),
                    this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement),
                    this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()),
                    this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()),
                    this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.maxSpan)),
                    (this.previousRightTime = this.endDate.clone()),
                    this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)),
                    this.isShowing || this.updateElement(),
                    this.updateMonthsInView();
            },
            isInvalidDate: function() {
                return !1;
            },
            isCustomDate: function() {
                return !1;
            },
            updateView: function() {
                this.timePicker &&
                    (this.renderTimePicker("left"),
                        this.renderTimePicker("right"),
                        this.endDate ? this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled") : this.container.find(".right .calendar-time select").attr("disabled", "disabled").addClass("disabled")),
                    this.endDate && this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)),
                    this.updateMonthsInView(),
                    this.updateCalendars(),
                    this.updateFormInputs();
            },
            updateMonthsInView: function() {
                if (this.endDate) {
                    if (!this.singleDatePicker &&
                        this.leftCalendar.month &&
                        this.rightCalendar.month &&
                        (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) &&
                        (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))
                    )
                        return;
                    (this.leftCalendar.month = this.startDate.clone().date(2)),
                    this.linkedCalendars || (this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year()) ?
                        (this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month")) :
                        (this.rightCalendar.month = this.endDate.clone().date(2));
                } else
                    this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") &&
                    this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") &&
                    ((this.leftCalendar.month = this.startDate.clone().date(2)), (this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month")));
                this.maxDate &&
                    this.linkedCalendars &&
                    !this.singleDatePicker &&
                    this.rightCalendar.month > this.maxDate &&
                    ((this.rightCalendar.month = this.maxDate.clone().date(2)), (this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month")));
            },
            updateCalendars: function() {
                if (this.timePicker) {
                    var t, e, a, i;
                    if (this.endDate) {
                        if (
                            ((t = parseInt(this.container.find(".left .hourselect").val(), 10)),
                                (e = parseInt(this.container.find(".left .minuteselect").val(), 10)),
                                (a = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0), !this.timePicker24Hour)
                        )
                            "PM" === (i = this.container.find(".left .ampmselect").val()) && t < 12 && (t += 12), "AM" === i && 12 === t && (t = 0);
                    } else if (
                        ((t = parseInt(this.container.find(".right .hourselect").val(), 10)),
                            (e = parseInt(this.container.find(".right .minuteselect").val(), 10)),
                            (a = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0), !this.timePicker24Hour)
                    )
                        "PM" === (i = this.container.find(".right .ampmselect").val()) && t < 12 && (t += 12), "AM" === i && 12 === t && (t = 0);
                    this.leftCalendar.month.hour(t).minute(e).second(a), this.rightCalendar.month.hour(t).minute(e).second(a);
                }
                this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel();
            },
            renderCalendar: function(t) {
                var e,
                    a = (e = "left" == t ? this.leftCalendar : this.rightCalendar).month.month(),
                    i = e.month.year(),
                    s = e.month.hour(),
                    n = e.month.minute(),
                    r = e.month.second(),
                    o = H([i, a]).daysInMonth(),
                    h = H([i, a, 1]),
                    l = H([i, a, o]),
                    c = H(h).subtract(1, "month").month(),
                    d = H(h).subtract(1, "month").year(),
                    m = H([d, c]).daysInMonth(),
                    f = h.day();
                ((e = []).firstDay = h), (e.lastDay = l);
                for (var p = 0; p < 6; p++) e[p] = [];
                var u = m - f + this.locale.firstDay + 1;
                m < u && (u -= 7), f == this.locale.firstDay && (u = m - 6);
                for (var D = H([d, c, u, 12, n, r]), g = ((p = 0), 0), y = 0; p < 42; p++, g++, D = H(D).add(24, "hour"))
                    0 < p && g % 7 == 0 && ((g = 0), y++),
                    (e[y][g] = D.clone().hour(s).minute(n).second(r)),
                    D.hour(12),
                    this.minDate && e[y][g].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && e[y][g].isBefore(this.minDate) && "left" == t && (e[y][g] = this.minDate.clone()),
                    this.maxDate && e[y][g].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && e[y][g].isAfter(this.maxDate) && "right" == t && (e[y][g] = this.maxDate.clone());
                "left" == t ? (this.leftCalendar.calendar = e) : (this.rightCalendar.calendar = e);
                var k = "left" == t ? this.minDate : this.startDate,
                    b = this.maxDate,
                    C = ("left" == t ? this.startDate : this.endDate, this.locale.direction, '<table class="table-condensed">');
                (C += "<thead>"),
                (C += "<tr>"),
                (this.showWeekNumbers || this.showISOWeekNumbers) && (C += "<th></th>"),
                (k && !k.isBefore(e.firstDay)) || (this.linkedCalendars && "left" != t) ? (C += "<th></th>") : (C += '<th class="prev available"><span></span></th>');
                var v = this.locale.monthNames[e[1][1].month()] + e[1][1].format(" YYYY");
                if (this.showDropdowns) {
                    for (var Y = e[1][1].month(), w = e[1][1].year(), P = (b && b.year()) || this.maxYear, x = (k && k.year()) || this.minYear, M = w == x, S = w == P, I = '<select class="monthselect">', B = 0; B < 12; B++)
                        (!M || B >= k.month()) && (!S || B <= b.month()) ?
                        (I += "<option value='" + B + "'" + (B === Y ? " selected='selected'" : "") + ">" + this.locale.monthNames[B] + "</option>") :
                        (I += "<option value='" + B + "'" + (B === Y ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[B] + "</option>");
                    I += "</select>";
                    for (var A = '<select class="yearselect">', L = x; L <= P; L++) A += '<option value="' + L + '"' + (L === w ? ' selected="selected"' : "") + ">" + L + "</option>";
                    v = I + (A += "</select>");
                }
                if (
                    ((C += '<th colspan="5" class="month">' + v + "</th>"),
                        (b && !b.isAfter(e.lastDay)) || (this.linkedCalendars && "right" != t && !this.singleDatePicker) ? (C += "<th></th>") : (C += '<th class="next available"><span></span></th>'),
                        (C += "</tr>"),
                        (C += "<tr>"),
                        (this.showWeekNumbers || this.showISOWeekNumbers) && (C += '<th class="week">' + this.locale.weekLabel + "</th>"),
                        R.each(this.locale.daysOfWeek, function(t, e) {
                            C += "<th>" + e + "</th>";
                        }),
                        (C += "</tr>"),
                        (C += "</thead>"),
                        (C += "<tbody>"),
                        null == this.endDate && this.maxSpan)
                ) {
                    var E = this.startDate.clone().add(this.maxSpan).endOf("day");
                    (b && !E.isBefore(b)) || (b = E);
                }
                for (y = 0; y < 6; y++) {
                    (C += "<tr>"), this.showWeekNumbers ? (C += '<td class="week">' + e[y][0].week() + "</td>") : this.showISOWeekNumbers && (C += '<td class="week">' + e[y][0].isoWeek() + "</td>");
                    for (g = 0; g < 7; g++) {
                        var W = [];
                        e[y][g].isSame(new Date(), "day") && W.push("today"),
                            5 < e[y][g].isoWeekday() && W.push("weekend"),
                            e[y][g].month() != e[1][1].month() && W.push("off"),
                            this.minDate && e[y][g].isBefore(this.minDate, "day") && W.push("off", "disabled"),
                            b && e[y][g].isAfter(b, "day") && W.push("off", "disabled"),
                            this.isInvalidDate(e[y][g]) && W.push("off", "disabled"),
                            e[y][g].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && W.push("active", "start-date"),
                            null != this.endDate && e[y][g].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && W.push("active", "end-date"),
                            null != this.endDate && e[y][g] > this.startDate && e[y][g] < this.endDate && W.push("in-range");
                        var O = this.isCustomDate(e[y][g]);
                        !1 !== O && ("string" == typeof O ? W.push(O) : Array.prototype.push.apply(W, O));
                        var N = "",
                            j = !1;
                        for (p = 0; p < W.length; p++)(N += W[p] + " "), "disabled" == W[p] && (j = !0);
                        j || (N += "available"), (C += '<td class="' + N.replace(/^\s+|\s+$/g, "") + '" data-title="r' + y + "c" + g + '">' + e[y][g].date() + "</td>");
                    }
                    C += "</tr>";
                }
                (C += "</tbody>"), (C += "</table>"), this.container.find(".calendar." + t + " .calendar-table").html(C);
            },
            renderTimePicker: function(t) {
                if ("right" != t || this.endDate) {
                    var e,
                        a,
                        i,
                        s = this.maxDate;
                    if ((!this.maxSpan || (this.maxDate && !this.startDate.clone().add(this.maxSpan).isAfter(this.maxDate)) || (s = this.startDate.clone().add(this.maxSpan)), "left" == t))(a = this.startDate.clone()), (i = this.minDate);
                    else if ("right" == t) {
                        (a = this.endDate.clone()), (i = this.startDate);
                        var n = this.container.find(".calendar.right .calendar-time");
                        if (
                            "" != n.html() &&
                            (a.hour(a.hour() || n.find(".hourselect option:selected").val()),
                                a.minute(a.minute() || n.find(".minuteselect option:selected").val()),
                                a.second(a.second() || n.find(".secondselect option:selected").val()), !this.timePicker24Hour)
                        ) {
                            var r = n.find(".ampmselect option:selected").val();
                            "PM" === r && a.hour() < 12 && a.hour(a.hour() + 12), "AM" === r && 12 === a.hour() && a.hour(0);
                        }
                        a.isBefore(this.startDate) && (a = this.startDate.clone()), s && a.isAfter(s) && (a = s.clone());
                    }
                    e = '<select class="hourselect">';
                    for (var o = this.timePicker24Hour ? 0 : 1, h = this.timePicker24Hour ? 23 : 12, l = o; l <= h; l++) {
                        var c = l;
                        this.timePicker24Hour || (c = 12 <= a.hour() ? (12 == l ? 12 : l + 12) : 12 == l ? 0 : l);
                        var d = a.clone().hour(c),
                            m = !1;
                        i && d.minute(59).isBefore(i) && (m = !0),
                            s && d.minute(0).isAfter(s) && (m = !0),
                            c != a.hour() || m ?
                            (e += m ? '<option value="' + l + '" disabled="disabled" class="disabled">' + l + "</option>" : '<option value="' + l + '">' + l + "</option>") :
                            (e += '<option value="' + l + '" selected="selected">' + l + "</option>");
                    }
                    (e += "</select> "), (e += ': <select class="minuteselect">');
                    for (l = 0; l < 60; l += this.timePickerIncrement) {
                        var f = l < 10 ? "0" + l : l;
                        (d = a.clone().minute(l)), (m = !1);
                        i && d.second(59).isBefore(i) && (m = !0),
                            s && d.second(0).isAfter(s) && (m = !0),
                            a.minute() != l || m ?
                            (e += m ? '<option value="' + l + '" disabled="disabled" class="disabled">' + f + "</option>" : '<option value="' + l + '">' + f + "</option>") :
                            (e += '<option value="' + l + '" selected="selected">' + f + "</option>");
                    }
                    if (((e += "</select> "), this.timePickerSeconds)) {
                        e += ': <select class="secondselect">';
                        for (l = 0; l < 60; l++) {
                            (f = l < 10 ? "0" + l : l), (d = a.clone().second(l)), (m = !1);
                            i && d.isBefore(i) && (m = !0),
                                s && d.isAfter(s) && (m = !0),
                                a.second() != l || m ?
                                (e += m ? '<option value="' + l + '" disabled="disabled" class="disabled">' + f + "</option>" : '<option value="' + l + '">' + f + "</option>") :
                                (e += '<option value="' + l + '" selected="selected">' + f + "</option>");
                        }
                        e += "</select> ";
                    }
                    if (!this.timePicker24Hour) {
                        e += '<select class="ampmselect">';
                        var p = "",
                            u = "";
                        i && a.clone().hour(12).minute(0).second(0).isBefore(i) && (p = ' disabled="disabled" class="disabled"'),
                            s && a.clone().hour(0).minute(0).second(0).isAfter(s) && (u = ' disabled="disabled" class="disabled"'),
                            12 <= a.hour() ?
                            (e += '<option value="AM"' + p + '>AM</option><option value="PM" selected="selected"' + u + ">PM</option>") :
                            (e += '<option value="AM" selected="selected"' + p + '>AM</option><option value="PM"' + u + ">PM</option>"),
                            (e += "</select>");
                    }
                    this.container.find(".calendar." + t + " .calendar-time").html(e);
                }
            },
            updateFormInputs: function() {
                this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate))) ?
                    this.container.find("button.applyBtn").removeAttr("disabled") :
                    this.container.find("button.applyBtn").attr("disabled", "disabled");
            },
            move: function() {
                var t,
                    e = {
                        top: 0,
                        left: 0
                    },
                    a = R(window).width();
                this.parentEl.is("body") ||
                    ((e = {
                        top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                        left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                    }), (a = this.parentEl[0].clientWidth + this.parentEl.offset().left)),
                    (t = "up" == this.drops ? this.element.offset().top - this.container.outerHeight() - e.top : this.element.offset().top + this.element.outerHeight() - e.top),
                    this.container["up" == this.drops ? "addClass" : "removeClass"]("drop-up"),
                    "left" == this.opens ?
                    (this.container.css({
                        top: t,
                        right: a - this.element.offset().left - this.element.outerWidth(),
                        left: "auto"
                    }), this.container.offset().left < 0 && this.container.css({
                        right: "auto",
                        left: 9
                    })) :
                    "center" == this.opens ?
                    (this.container.css({
                            top: t,
                            left: this.element.offset().left - e.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                            right: "auto"
                        }),
                        this.container.offset().left < 0 && this.container.css({
                            right: "auto",
                            left: 9
                        })) :
                    (this.container.css({
                            top: t,
                            left: this.element.offset().left - e.left,
                            right: "auto"
                        }),
                        this.container.offset().left + this.container.outerWidth() > R(window).width() && this.container.css({
                            left: "auto",
                            right: 0
                        }));
            },
            show: function(t) {
                this.isShowing ||
                    ((this._outsideClickProxy = R.proxy(function(t) {
                            this.outsideClick(t);
                        }, this)),
                        R(document)
                        .on("mousedown.daterangepicker", this._outsideClickProxy)
                        .on("touchend.daterangepicker", this._outsideClickProxy)
                        .on("click.daterangepicker", "[data-bs-toggle=dropdown]", this._outsideClickProxy)
                        .on("focusin.daterangepicker", this._outsideClickProxy),
                        R(window).on(
                            "resize.daterangepicker",
                            R.proxy(function(t) {
                                this.move(t);
                            }, this)
                        ),
                        (this.oldStartDate = this.startDate.clone()),
                        (this.oldEndDate = this.endDate.clone()),
                        (this.previousRightTime = this.endDate.clone()),
                        this.updateView(),
                        this.container.show(),
                        this.move(),
                        this.element.trigger("show.daterangepicker", this),
                        (this.isShowing = !0));
            },
            hide: function(t) {
                this.isShowing &&
                    (this.endDate || ((this.startDate = this.oldStartDate.clone()), (this.endDate = this.oldEndDate.clone())),
                        (this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate)) || this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel),
                        this.updateElement(),
                        R(document).off(".daterangepicker"),
                        R(window).off(".daterangepicker"),
                        this.container.hide(),
                        this.element.trigger("hide.daterangepicker", this),
                        (this.isShowing = !1));
            },
            toggle: function(t) {
                this.isShowing ? this.hide() : this.show();
            },
            outsideClick: function(t) {
                var e = R(t.target);
                "focusin" == t.type || e.closest(this.element).length || e.closest(this.container).length || e.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this));
            },
            showCalendars: function() {
                this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this);
            },
            hideCalendars: function() {
                this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this);
            },
            clickRange: function(t) {
                var e = t.target.getAttribute("data-range-key");
                if ((this.chosenLabel = e) == this.locale.customRangeLabel) this.showCalendars();
                else {
                    var a = this.ranges[e];
                    (this.startDate = a[0]), (this.endDate = a[1]), this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply();
                }
            },
            clickPrev: function(t) {
                R(t.target).parents(".calendar").hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"),
                    this.updateCalendars();
            },
            clickNext: function(t) {
                R(t.target).parents(".calendar").hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")),
                    this.updateCalendars();
            },
            hoverDate: function(t) {
                if (R(t.target).hasClass("available")) {
                    var e = R(t.target).attr("data-title"),
                        a = e.substr(1, 1),
                        i = e.substr(3, 1),
                        r = R(t.target).parents(".calendar").hasClass("left") ? this.leftCalendar.calendar[a][i] : this.rightCalendar.calendar[a][i],
                        o = this.leftCalendar,
                        h = this.rightCalendar,
                        l = this.startDate;
                    this.endDate ||
                        this.container.find(".calendar tbody td").each(function(t, e) {
                            if (!R(e).hasClass("week")) {
                                var a = R(e).attr("data-title"),
                                    i = a.substr(1, 1),
                                    s = a.substr(3, 1),
                                    n = R(e).parents(".calendar").hasClass("left") ? o.calendar[i][s] : h.calendar[i][s];
                                (n.isAfter(l) && n.isBefore(r)) || n.isSame(r, "day") ? R(e).addClass("in-range") : R(e).removeClass("in-range");
                            }
                        });
                }
            },
            clickDate: function(t) {
                if (R(t.target).hasClass("available")) {
                    var e = R(t.target).attr("data-title"),
                        a = e.substr(1, 1),
                        i = e.substr(3, 1),
                        s = R(t.target).parents(".calendar").hasClass("left") ? this.leftCalendar.calendar[a][i] : this.rightCalendar.calendar[a][i];
                    if (this.endDate || s.isBefore(this.startDate, "day")) {
                        if (this.timePicker) {
                            var n = parseInt(this.container.find(".left .hourselect").val(), 10);
                            if (!this.timePicker24Hour) "PM" === (h = this.container.find(".left .ampmselect").val()) && n < 12 && (n += 12), "AM" === h && 12 === n && (n = 0);
                            var r = parseInt(this.container.find(".left .minuteselect").val(), 10),
                                o = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                            s = s.clone().hour(n).minute(r).second(o);
                        }
                        (this.endDate = null), this.setStartDate(s.clone());
                    } else if (!this.endDate && s.isBefore(this.startDate)) this.setEndDate(this.startDate.clone());
                    else {
                        if (this.timePicker) {
                            var h;
                            n = parseInt(this.container.find(".right .hourselect").val(), 10);
                            if (!this.timePicker24Hour) "PM" === (h = this.container.find(".right .ampmselect").val()) && n < 12 && (n += 12), "AM" === h && 12 === n && (n = 0);
                            (r = parseInt(this.container.find(".right .minuteselect").val(), 10)), (o = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0);
                            s = s.clone().hour(n).minute(r).second(o);
                        }
                        this.setEndDate(s.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply());
                    }
                    this.singleDatePicker && (this.setEndDate(this.startDate), this.timePicker || this.clickApply()), this.updateView(), t.stopPropagation();
                }
            },
            calculateChosenLabel: function() {
                var t = !0,
                    e = 0;
                for (var a in this.ranges) {
                    if (this.timePicker) {
                        var i = this.timePickerSeconds ? "YYYY-MM-DD hh:mm:ss" : "YYYY-MM-DD hh:mm";
                        if (this.startDate.format(i) == this.ranges[a][0].format(i) && this.endDate.format(i) == this.ranges[a][1].format(i)) {
                            (t = !1),
                            (this.chosenLabel = this.container
                                .find(".ranges li:eq(" + e + ")")
                                .addClass("active")
                                .attr("data-range-key"));
                            break;
                        }
                    } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[a][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[a][1].format("YYYY-MM-DD")) {
                        (t = !1),
                        (this.chosenLabel = this.container
                            .find(".ranges li:eq(" + e + ")")
                            .addClass("active")
                            .attr("data-range-key"));
                        break;
                    }
                    e++;
                }
                t && (this.showCustomRangeLabel ? (this.chosenLabel = this.container.find(".ranges li:last").addClass("active").attr("data-range-key")) : (this.chosenLabel = null), this.showCalendars());
            },
            clickApply: function(t) {
                this.hide(), this.element.trigger("apply.daterangepicker", this);
            },
            clickCancel: function(t) {
                (this.startDate = this.oldStartDate), (this.endDate = this.oldEndDate), this.hide(), this.element.trigger("cancel.daterangepicker", this);
            },
            monthOrYearChanged: function(t) {
                var e = R(t.target).closest(".calendar").hasClass("left"),
                    a = e ? "left" : "right",
                    i = this.container.find(".calendar." + a),
                    s = parseInt(i.find(".monthselect").val(), 10),
                    n = i.find(".yearselect").val();
                e || ((n < this.startDate.year() || (n == this.startDate.year() && s < this.startDate.month())) && ((s = this.startDate.month()), (n = this.startDate.year()))),
                    this.minDate && (n < this.minDate.year() || (n == this.minDate.year() && s < this.minDate.month())) && ((s = this.minDate.month()), (n = this.minDate.year())),
                    this.maxDate && (n > this.maxDate.year() || (n == this.maxDate.year() && s > this.maxDate.month())) && ((s = this.maxDate.month()), (n = this.maxDate.year())),
                    e ?
                    (this.leftCalendar.month.month(s).year(n), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) :
                    (this.rightCalendar.month.month(s).year(n), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))),
                    this.updateCalendars();
            },
            timeChanged: function(t) {
                var e = R(t.target).closest(".calendar"),
                    a = e.hasClass("left"),
                    i = parseInt(e.find(".hourselect").val(), 10),
                    s = parseInt(e.find(".minuteselect").val(), 10),
                    n = this.timePickerSeconds ? parseInt(e.find(".secondselect").val(), 10) : 0;
                if (!this.timePicker24Hour) {
                    var r = e.find(".ampmselect").val();
                    "PM" === r && i < 12 && (i += 12), "AM" === r && 12 === i && (i = 0);
                }
                if (a) {
                    var o = this.startDate.clone();
                    o.hour(i),
                        o.minute(s),
                        o.second(n),
                        this.setStartDate(o),
                        this.singleDatePicker ? (this.endDate = this.startDate.clone()) : this.endDate && this.endDate.format("YYYY-MM-DD") == o.format("YYYY-MM-DD") && this.endDate.isBefore(o) && this.setEndDate(o.clone());
                } else if (this.endDate) {
                    var h = this.endDate.clone();
                    h.hour(i), h.minute(s), h.second(n), this.setEndDate(h);
                }
                this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right");
            },
            elementChanged: function() {
                if (this.element.is("input") && this.element.val().length) {
                    var t = this.element.val().split(this.locale.separator),
                        e = null,
                        a = null;
                    2 === t.length && ((e = H(t[0], this.locale.format)), (a = H(t[1], this.locale.format))),
                        (this.singleDatePicker || null === e || null === a) && (a = e = H(this.element.val(), this.locale.format)),
                        e.isValid() && a.isValid() && (this.setStartDate(e), this.setEndDate(a), this.updateView());
                }
            },
            keydown: function(t) {
                (9 !== t.keyCode && 13 !== t.keyCode) || this.hide(), 27 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.hide());
            },
            updateElement: function() {
                this.element.is("input") && !this.singleDatePicker && this.autoUpdateInput ?
                    (this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.element.trigger("change")) :
                    this.element.is("input") && this.autoUpdateInput && (this.element.val(this.startDate.format(this.locale.format)), this.element.trigger("change"));
            },
            remove: function() {
                this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData();
            },
        }),
        (R.fn.daterangepicker = function(t, e) {
            var a = R.extend(!0, {}, R.fn.daterangepicker.defaultOptions, t);
            return (
                this.each(function() {
                    var t = R(this);
                    t.data("daterangepicker") && t.data("daterangepicker").remove(), t.data("daterangepicker", new i(t, a, e));
                }),
                this
            );
        }),
        i
    );
});
