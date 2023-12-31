var screenSmMax = "1279px", global, factory;

function _itemAutoLoad(t) {
    $.each(t, (function(e, o) {
        $.isArray((o || {})._autoload) && $.each(o._autoload, (function(o, i) {
            try {
                $.isArray(i) ? ("string" == typeof i[1] && !0 === i[2] && (i[1] = t[e][i[1]]()), i[1] ? t[e][i[0]]() : i[2] && t[e][i[2]]()) : t[e][i]()
            } catch (t) {
                console.log("error on loading module %s", e)
            }
        }))
    }))
}

function _autoload() {
    _itemAutoLoad(AVE)
}! function(t, e) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        } : e(t)
    }("undefined" != typeof window ? window : this, (function(t, e) {
        "use strict";
        var o = [],
            i = t.document,
            n = Object.getPrototypeOf,
            s = o.slice,
            r = o.concat,
            a = o.push,
            l = o.indexOf,
            c = {},
            d = c.toString,
            u = c.hasOwnProperty,
            p = u.toString,
            h = p.call(Object),
            f = {},
            m = function(t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            },
            g = function(t) {
                return null != t && t === t.window
            };

        function b(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? c[d.call(t)] || "object" : typeof t
        }
        var C = "3.4.1",
            A = function(t, e) {
                return new A.fn.init(t, e)
            },
            E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function S(t) {
            var e = !!t && "length" in t && t.length,
                o = b(t);
            return !m(t) && !g(t) && ("array" === o || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        A.fn = A.prototype = {
            jquery: C,
            constructor: A,
            length: 0,
            get: function(t) {
                return null == t ? s.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = A.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function(t) {
                return A.each(this, t)
            },
            push: a,
            sort: o.sort,
            splice: o.splice
        }, A.extend = A.fn.extend = function() {
            var t, e, o, i, n, s, r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || m(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = t[e], "__proto__" !== e && r !== i && (c && i && (A.isPlainObject(i) || (n = Array.isArray(i))) ? (o = r[e], s = n && !Array.isArray(o) ? [] : n || A.isPlainObject(o) ? o : {}, n = !1, r[e] = A.extend(c, s, i)) : void 0 !== i && (r[e] = i));
            return r
        }, A.extend({
            expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            isPlainObject: function(t) {
                var e, o;
                return !(!t || "[object Object]" !== d.call(t) || (e = n(t)) && ("function" != typeof(o = u.call(e, "constructor") && e.constructor) || p.call(o) !== h))
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            globalEval: function(t, e) {},
            each: function(t, e) {
                var o, i = 0;
                if (S(t))
                    for (o = t.length; i < o && !1 !== e.call(t[i], i, t[i]); i++);
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i])) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(E, "")
            },
            makeArray: function(t, e) {
                var o = e || [];
                return null != t && (S(Object(t)) ? A.merge(o, "string" == typeof t ? [t] : t) : a.call(o, t)), o
            },
            inArray: function(t, e, o) {
                return null == e ? -1 : l.call(e, t, o)
            },
            merge: function(t, e) {
                for (var o = +e.length, i = 0, n = t.length; i < o; i++) t[n++] = e[i];
                return t.length = n, t
            },
            grep: function(t, e, o) {},
            map: function(t, e, o) {
                var i, n, s = 0,
                    a = [];
                if (S(t))
                    for (i = t.length; s < i; s++) null != (n = e(t[s], s, o)) && a.push(n);
                else
                    for (s in t) null != (n = e(t[s], s, o)) && a.push(n);
                return r.apply([], a)
            },
            guid: 1,
            support: f
        }), "function" == typeof Symbol && (A.fn[Symbol.iterator] = o[Symbol.iterator]), A.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
            c["[object " + e + "]"] = e.toLowerCase()
        }));
        var w = function(t) {
            var e, o, i, s, r, a, l, c, d, u, p, h, f, m, g, v, y, b, C = "sizzle" + 1 * new Date,
                A = t.document,
                E = 0,
                S = 0,
                w = lt(),
                $ = lt(),
                V = lt(),
                _ = lt(),
                T = function(t, e) {
                    return t === e && (u = !0), 0
                },
                k = [],
                P = k.pop,
                I = k.push,
                L = k.slice,
                M = function(t, e) {},
                O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                F = "[\\x20\\t\\r\\n\\f]",
                D = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                R = "\\[" + F + "*(" + D + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + D + "))|)" + F + "*\\]",
                N = ":(" + D + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                z = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
                H = new RegExp("^" + F + "*," + F + "*"),
                G = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
                W = new RegExp(F + "|>"),
                Q = {
                    ID: new RegExp("^#(" + D + ")"),
                    CLASS: new RegExp("^\\.(" + D + ")"),
                    TAG: new RegExp("^(" + D + "|[*])"),
                    ATTR: new RegExp("^" + R),
                    PSEUDO: new RegExp("^" + N),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + O + ")$", "i"),
                    needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
                },
                X = /HTML$/i,
                Z = /^[^{]+\{\s*\[native \w/,
                K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                tt = /[+~]/,
                et = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig");
            I.apply(k = L.call(A.childNodes), A.childNodes), k[A.childNodes.length].nodeType

            function at(t, e, i, n) {
                var s, a, c, d, u, f, v, y = e && e.ownerDocument,
                    E = e ? e.nodeType : 9;
                if (i = i || [], "string" != typeof t || !t || 1 !== E && 9 !== E && 11 !== E) return i;
                if (!n && ((e ? e.ownerDocument || e : A) !== h && p(e), e = e || h, m)) {
                    if (11 !== E && (u = K.exec(t)))
                        if (s = u[1]) {
                            if (9 === E) {
                                if (!(c = e.getElementById(s))) return i;
                                if (c.id === s) return i.push(c), i
                            } else if (y && (c = y.getElementById(s)) && b(e, c) && c.id === s) return i.push(c), i
                        } else {
                            if (u[2]) return I.apply(i, e.getElementsByTagName(t)), i;
                            if ((s = u[3]) && o.getElementsByClassName && e.getElementsByClassName) return I.apply(i, e.getElementsByClassName(s)), i
                        }
                    if (o.qsa && !_[t + " "] && (!g || !g.test(t)) && (1 !== E || "object" !== e.nodeName.toLowerCase())) {
                        if (v = t, y = e, 1 === E && W.test(t)) {
                            for ((d = e.getAttribute("id")) ? d = d.replace(it, nt) : e.setAttribute("id", d = C), a = (f = r(t)).length; a--;) f[a] = "#" + d + " " + bt(f[a]);
                            v = f.join(","), y = tt.test(t) && vt(e.parentNode) || e
                        }
                        try {
                            return I.apply(i, y.querySelectorAll(v)), i
                        } catch (e) {
                            _(t, !0)
                        } finally {
                            d === C && e.removeAttribute("id")
                        }
                    }
                }
                return l(t.replace(z, "$1"), e, i, n)
            }

            function lt() {
                var t = [];
                return function e(o, n) {
                    return t.push(o + " ") > i.cacheLength && delete e[t.shift()], e[o + " "] = n
                }
            }


            function dt(t) {
                var e = h.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }
            
            for (e in o = at.support = {}, s = at.isXML = function(t) {
                    var e = t.namespaceURI,
                        o = (t.ownerDocument || t).documentElement;
                    return !X.test(e || o && o.nodeName || "HTML")
                }, p = at.setDocument = function(t) {
                    var e, n, r = t ? t.ownerDocument || t : A;
                    return r !== h && 9 === r.nodeType && r.documentElement ? (f = (h = r).documentElement, m = !s(h), A !== h && (n = h.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", st, !1) : n.attachEvent && n.attachEvent("onunload", st)), o.attributes = dt((function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    })), o.getElementsByTagName = dt((function(t) {
                        return t.appendChild(h.createComment("")), !t.getElementsByTagName("*").length
                    })), o.getElementsByClassName = Z.test(h.getElementsByClassName), o.getById = dt((function(t) {
                        return f.appendChild(t).id = C, !h.getElementsByName || !h.getElementsByName(C).length
                    })), v = [], g = [], (o.qsa = Z.test(h.querySelectorAll)) && (dt((function(t) {
                        f.appendChild(t).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + F + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + F + "*(?:value|" + O + ")"), t.querySelectorAll("[id~=" + C + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + C + "+*").length || g.push(".#.+[+~]")
                    })), dt((function(t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = h.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + F + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                    }))), (o.matchesSelector = Z.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && dt((function(t) {
                        o.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", N)
                    })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = Z.test(f.compareDocumentPosition), b = e || Z.test(f.contains) ? function(t, e) {
                        var o = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(o.contains ? o.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function(t, e) {}, T = e ? function(t, e) {} : function(t, e) {}, h) : h
                }, at.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== h && p(t), o.matchesSelector && m && !_[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try {
                        var i = y.call(t, e);
                        if (i || o.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {
                        _(e, !0)
                    }
                    return at(e, h, null, [t]).length > 0
                }, at.contains = function(t, e) {
                    return (t.ownerDocument || t) !== h && p(t), b(t, e)
                },
                i = at.selectors = {
                    cacheLength: 50,
                    createPseudo: ct,
                    match: Q,
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
                        CHILD: function(t) {},
                        PSEUDO: function(t) {}
                    },
                    filter: {
                        CLASS: function(t) {
                            var e = w[t + " "];
                            return e || (e = new RegExp("(^|" + F + ")" + t + "(" + F + "|$)")) && w(t, (function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            }))
                        },
                    },
                    pseudos: {}
                }, i.pseudos.nth = i.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) ;

            function yt() {}

            function bt(t) {}

            function Ct(t, e, o) {
                var i = e.dir,
                    n = e.next,
                    s = n || i,
                    r = o && "parentNode" === s,
                    a = S++;
                return e.first ? function(e, o, n) {} : function(e, o, l) {
                    var c, d, u, p = [E, a];
                    if (l) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || r) && t(e, o, l)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || r)
                                if (d = (u = e[C] || (e[C] = {}))[e.uniqueID] || (u[e.uniqueID] = {}), n && n === e.nodeName.toLowerCase()) e = e[i] || e;
                                else {
                                    if ((c = d[s]) && c[0] === E && c[1] === a) return p[2] = c[2];
                                    if (d[s] = p, p[2] = t(e, o, l)) return !0
                                } return !1
                }
            }

            function At(t) {
                return t.length > 1 ? function(e, o, i) {
                    for (var n = t.length; n--;)
                        if (!t[n](e, o, i)) return !1;
                    return !0
                } : t[0]
            }

            function wt(t) {
                for (var e, o, n, s = t.length, r = i.relative[t[0].type], a = r || i.relative[" "], l = r ? 1 : 0, d = Ct((function(t) {
                        return t === e
                    }), a, !0), u = Ct((function(t) {
                        return M(e, t) > -1
                    }), a, !0), p = [function(t, o, i) {
                        var n = !r && (i || o !== c) || ((e = o).nodeType ? d(t, o, i) : u(t, o, i));
                        return e = null, n
                    }]; l < s; l++)
                    if (o = i.relative[t[l].type]) p = [Ct(At(p), o)];
                    else {
                        if ((o = i.filter[t[l].type].apply(null, t[l].matches))[C]) {
                            for (n = ++l; n < s && !i.relative[t[n].type]; n++);
                            return St(l > 1 && At(p), l > 1 && bt(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace(z, "$1"), o, l < n && wt(t.slice(l, n)), n < s && wt(t = t.slice(n)), n < s && bt(t))
                        }
                        p.push(o)
                    }
                return At(p)
            }
            return yt.prototype = i.filters = i.pseudos, i.setFilters = new yt, r = at.tokenize = function(t, e) {
                var o, n, s, r, a, l, c, d = $[t + " "];
                if (d) return e ? 0 : d.slice(0);
                for (a = t, l = [], c = i.preFilter; a;) {
                    for (r in o && !(n = H.exec(a)) || (n && (a = a.slice(n[0].length) || a), l.push(s = [])), o = !1, (n = G.exec(a)) && (o = n.shift(), s.push({
                            value: o,
                            type: n[0].replace(z, " ")
                        }), a = a.slice(o.length)), i.filter) !(n = Q[r].exec(a)) || c[r] && !(n = c[r](n)) || (o = n.shift(), s.push({
                        value: o,
                        type: r,
                        matches: n
                    }), a = a.slice(o.length));
                    if (!o) break
                }
                return e ? a.length : a ? at.error(t) : $(t, l).slice(0)
            }, a = at.compile = function(t, e) {
                var o, n = [],
                    s = [],
                    a = V[t + " "];
                if (!a) {
                    for (e || (e = r(t)), o = e.length; o--;)(a = wt(e[o]))[C] ? n.push(a) : s.push(a);
                    a = V(t, function(t, e) {
                        var o = e.length > 0,
                            n = t.length > 0,
                            s = function(s, r, a, l, d) {
                                var u, f, g, v = 0,
                                    y = "0",
                                    b = s && [],
                                    C = [],
                                    A = c,
                                    S = s || n && i.find.TAG("*", d),
                                    w = E += null == A ? 1 : Math.random() || .1,
                                    $ = S.length;
                                for (d && (c = r === h || r || d); y !== $ && null != (u = S[y]); y++) {
                                    if (n && u) {
                                        for (f = 0, r || u.ownerDocument === h || (p(u), a = !m); g = t[f++];)
                                            if (g(u, r || h, a)) {
                                                l.push(u);
                                                break
                                            }
                                        d && (E = w)
                                    }
                                    o && ((u = !g && u) && v--, s && b.push(u))
                                }
                                if (v += y, o && y !== v) {
                                    for (f = 0; g = e[f++];) g(b, C, r, a);
                                    if (s) {
                                        if (v > 0)
                                            for (; y--;) b[y] || C[y] || (C[y] = P.call(l));
                                        C = Et(C)
                                    }
                                    I.apply(l, C), d && !s && C.length > 0 && v + e.length > 1 && at.uniqueSort(l)
                                }
                                return d && (E = w, c = A), b
                            };
                        return o ? ct(s) : s
                    }(s, n)), a.selector = t
                }
                return a
            }, l = at.select = function(t, e, o, n) {
                var s, l, c, d, u, p = "function" == typeof t && t,
                    h = !n && r(t = p.selector || t);
                if (o = o || [], 1 === h.length) {
                    if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && m && i.relative[l[1].type]) {
                        if (!(e = (i.find.ID(c.matches[0].replace(et, ot), e) || [])[0])) return o;
                        p && (e = e.parentNode), t = t.slice(l.shift().value.length)
                    }
                    for (s = Q.needsContext.test(t) ? 0 : l.length; s-- && (c = l[s], !i.relative[d = c.type]);)
                        if ((u = i.find[d]) && (n = u(c.matches[0].replace(et, ot), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                            if (l.splice(s, 1), !(t = n.length && bt(l))) return I.apply(o, n), o;
                            break
                        }
                }
                return (p || a(t, h))(n, e, !m, o, !e || tt.test(t) && vt(e.parentNode) || e), o
            }, o.sortStable = C.split("").sort(T).join("") === C, o.detectDuplicates = !!u, p(), o.sortDetached = dt((function(t) {
                return 1 & t.compareDocumentPosition(h.createElement("fieldset"))
            })), dt((function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            })) || ut("type|href|height|width", (function(t, e, o) {
                if (!o) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            })), o.attributes && dt((function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            })) || ut("value", (function(t, e, o) {
                if (!o && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            })), dt((function(t) {
                return null == t.getAttribute("disabled")
            })) || ut(O, (function(t, e, o) {
                var i;
                if (!o) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            })), at
        }(t);
        A.find = w, A.expr = w.selectors, A.expr[":"] = A.expr.pseudos, A.uniqueSort = A.unique = w.uniqueSort, A.text = w.getText, A.isXMLDoc = w.isXML, A.contains = w.contains, A.escapeSelector = w.escape;
        var $ = function(t, e, o) {},    
        V = function(t, e) {
                for (var o = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && o.push(t);
                return o
            },
            _ = A.expr.match.needsContext;

        function T(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }
        var x = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function k(t, e, o) {
            return m(e) ? A.grep(t, (function(t, i) {
                return !!e.call(t, i, t) !== o
            })) : e.nodeType ? A.grep(t, (function(t) {
                return t === e !== o
            })) : "string" != typeof e ? A.grep(t, (function(t) {
                return l.call(e, t) > -1 !== o
            })) : A.filter(e, t, o)
        }
        A.filter = function(t, e, o) {
            var i = e[0];
            return o && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? A.find.matchesSelector(i, t) ? [i] : [] : A.find.matches(t, A.grep(e, (function(t) {
                return 1 === t.nodeType
            })))
        }, A.fn.extend({
            find: function(t) {
                var e, o, i = this.length,
                    n = this;
                if ("string" != typeof t) return this.pushStack(A(t).filter((function() {})));
                for (o = this.pushStack([]), e = 0; e < i; e++) A.find(t, n[e], o);
                return i > 1 ? A.uniqueSort(o) : o
            },
            is: function(t) {
                return !!k(this, "string" == typeof t && _.test(t) ? A(t) : t || [], !1).length
            }
        });
        var P, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (A.fn.init = function(t, e, o) {
            var n, s;
            if (!t) return this;
            if (o = o || P, "string" == typeof t) {
                if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : j.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || o).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof A ? e[0] : e, A.merge(this, A.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : i, !0)), x.test(n[1]) && A.isPlainObject(e))
                        for (n in e) m(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return (s = i.getElementById(n[2])) && (this[0] = s, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : m(t) ? void 0 !== o.ready ? o.ready(t) : t(A) : A.makeArray(t, this)
        }).prototype = A.fn, P = A(i);
        var I = /^(?:parents|prev(?:Until|All))/,
            L = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        A.fn.extend({
            has: function(t) {},
            closest: function(t, e) {
                var o, i = 0,
                    n = this.length,
                    s = [],
                    r = "string" != typeof t && A(t);
                if (!_.test(t))
                    for (; i < n; i++)
                        for (o = this[i]; o && o !== e; o = o.parentNode)
                            if (o.nodeType < 11 && (r ? r.index(o) > -1 : 1 === o.nodeType && A.find.matchesSelector(o, t))) {
                                s.push(o);
                                break
                            }
                return this.pushStack(s.length > 1 ? A.uniqueSort(s) : s)
            },
            index: function(t) {
                return t ? "string" == typeof t ? l.call(A(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }
        }), A.each({
            children: function(t) {
                return V(t.firstChild)
            }
        }, (function(t, e) {
            A.fn[t] = function(o, i) {
                var n = A.map(this, e, o);
                return "Until" !== t.slice(-5) && (i = o), i && "string" == typeof i && (n = A.filter(i, n)), this.length > 1 && (L[t] || A.uniqueSort(n), I.test(t) && n.reverse()), this.pushStack(n)
            }
        }));
        var O = /[^\x20\t\r\n\f]+/g;

        function F(t) {
            return t
        }

        function D(t) {
            throw t
        }

        A.Callbacks = function(t) {
            t = "string" == typeof t ? function(t) {
                var e = {};
                return A.each(t.match(O) || [], (function(t, o) {
                    e[o] = !0
                })), e
            }(t) : A.extend({}, t);
            var e, o, i, n, s = [],
                r = [],
                a = -1,
                l = function() {
                    for (n = n || t.once, i = e = !0; r.length; a = -1)
                        for (o = r.shift(); ++a < s.length;) !1 === s[a].apply(o[0], o[1]) && t.stopOnFalse && (a = s.length, o = !1);
                    t.memory || (o = !1), e = !1, n && (s = o ? [] : "")
                },
                c = {
                    add: function() {
                        return s && (o && !e && (a = s.length - 1, r.push(o)), function e(o) {
                            A.each(o, (function(o, i) {
                                m(i) ? t.unique && c.has(i) || s.push(i) : i && i.length && "string" !== b(i) && e(i)
                            }))
                        }(arguments), o && !e && l()), this
                    },
                    disable: function() {
                        return n = r = [], s = o = "", this
                    },
                    lock: function() {
                        return n = r = [], o || e || (s = o = ""), this
                    },
                    fireWith: function(t, o) {
                        return n || (o = [t, (o = o || []).slice ? o.slice() : o], r.push(o), e || l()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    }
                };
            return c
        }, A.extend({
            Deferred: function(e) {
                var o = [
                        ["notify", "progress", A.Callbacks("memory"), A.Callbacks("memory"), 2],
                        ["resolve", "done", A.Callbacks("once memory"), A.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", A.Callbacks("once memory"), A.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    n = {
                        catch: function(t) {
                            return n.then(null, t)
                        },
                        then: function(e, i, n) {
                            var s = 0;

                            function r(e, o, i, n) {
                                return function() {
                                    var a = this,
                                        l = arguments,
                                        c = function() {
                                            var t, c;
                                            if (!(e < s)) {
                                                if ((t = i.apply(a, l)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                                c = t && ("object" == typeof t || "function" == typeof t) && t.then, m(c) ? n ? c.call(t, r(s, o, F, n), r(s, o, D, n)) : (s++, c.call(t, r(s, o, F, n), r(s, o, D, n), r(s, o, F, o.notifyWith))) : (i !== F && (a = void 0, l = [t]), (n || o.resolveWith)(a, l))
                                            }
                                        },
                                        d = n ? c : function() {
                                            try {
                                                c()
                                            } catch (t) {
                                                A.Deferred.exceptionHook && A.Deferred.exceptionHook(t, d.stackTrace), e + 1 >= s && (i !== D && (a = void 0, l = [t]), o.rejectWith(a, l))
                                            }
                                        };
                                    e ? d() : (A.Deferred.getStackHook && (d.stackTrace = A.Deferred.getStackHook()), t.setTimeout(d))
                                }
                            }
                            return A.Deferred((function(t) {
                                o[0][3].add(r(0, t, m(n) ? n : F, t.notifyWith)), o[1][3].add(r(0, t, m(e) ? e : F)), o[2][3].add(r(0, t, m(i) ? i : D))
                            })).promise()
                        },
                        promise: function(t) {
                            return null != t ? A.extend(t, n) : n
                        }
                    },
                    s = {};
                return A.each(o, (function(t, e) {
                    var r = e[2],
                        a = e[5];
                    n[e[1]] = r.add, a && r.add((function() {
                        i = a
                    }), o[3 - t][2].disable, o[3 - t][3].disable, o[0][2].lock, o[0][3].lock), r.add(e[3].fire), s[e[0]] = function() {
                        return s[e[0] + "With"](this === s ? void 0 : this, arguments), this
                    }, s[e[0] + "With"] = r.fireWith
                })), n.promise(s), e && e.call(s, s), s
            }
        });
        
        A.Deferred.exceptionHook = function(e, o) {}, 
        A.readyException = function(e) {};
        var B = A.Deferred();

        function z() {}
        A.fn.ready = function(t) {
            return B.then(t).catch((function(t) {})), this
        }, A.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --A.readyWait : A.isReady) || (A.isReady = !0, !0 !== t && --A.readyWait > 0 || B.resolveWith(i, [A]))
            }
        }), A.ready.then = B.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(A.ready) : (i.addEventListener("DOMContentLoaded", z), t.addEventListener("load", z));
        var H = function(t, e, o, i, n, s, r) {
                var a = 0,
                    l = t.length,
                    c = null == o;
                if ("object" === b(o))
                    for (a in n = !0, o) H(t, e, a, o[a], !0, s, r);
                else if (void 0 !== i && (n = !0, m(i) || (r = !0), c && (r ? (e.call(t, i), e = null) : (c = e, e = function(t, e, o) {
                        return c.call(A(t), o)
                    })), e))
                    for (; a < l; a++) e(t[a], o, r ? i : i.call(t[a], a, e(t[a], o)));
                return n ? t : c ? e.call(t) : l ? e(t[0], o) : s
            },
            G = /^-ms-/,
            W = /-([a-z])/g;

        function q(t, e) {
            return e.toUpperCase()
        }

        function U(t) {
            return t.replace(G, "ms-").replace(W, q)
        }
        var Q = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

        function X() {
            this.expando = A.expando + X.uid++
        }
        X.uid = 1, X.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, Q(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, o) {
                var i, n = this.cache(t);
                if ("string" == typeof e) n[U(e)] = o;
                else
                    for (i in e) n[U(i)] = e[i];
                return n
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][U(e)]
            },
            access: function(t, e, o) {
                return void 0 === e || e && "string" == typeof e && void 0 === o ? this.get(t, e) : (this.set(t, e, o), void 0 !== o ? o : e)
            },
            remove: function(t, e) {
                var o, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        o = (e = Array.isArray(e) ? e.map(U) : (e = U(e)) in i ? [e] : e.match(O) || []).length;
                        for (; o--;) delete i[e[o]]
                    }(void 0 === e || A.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !A.isEmptyObject(e)
            }
        };
        var Y = new X,
            J = new X,
            Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            K = /[A-Z]/g;

        function tt(t, e, o) {
            var i;
            if (void 0 === o && 1 === t.nodeType)
                if (i = "data-" + e.replace(K, "-$&").toLowerCase(), "string" == typeof(o = t.getAttribute(i))) {
                    try {
                        o = function(t) {
                            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Z.test(t) ? JSON.parse(t) : t)
                        }(o)
                    } catch (t) {}
                    J.set(t, e, o)
                } else o = void 0;
            return o
        }
        A.extend({
            data: function(t, e, o) {
                return J.access(t, e, o)
            },
        }), A.fn.extend({
            data: function(t, e) {
                var o, i, n, s = this[0],
                    r = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (n = J.get(s), 1 === s.nodeType && !Y.get(s, "hasDataAttrs"))) {
                        for (o = r.length; o--;) r[o] && 0 === (i = r[o].name).indexOf("data-") && (i = U(i.slice(5)), tt(s, i, n[i]));
                        Y.set(s, "hasDataAttrs", !0)
                    }
                    return n
                }
                return "object" == typeof t ? this.each((function() {
                    J.set(this, t)
                })) : H(this, (function(e) {
                    var o;
                    if (s && void 0 === e) return void 0 !== (o = J.get(s, t)) || void 0 !== (o = tt(s, t)) ? o : void 0;
                    this.each((function() {
                        J.set(this, t, e)
                    }))
                }), null, e, arguments.length > 1, null, !0)
            }
        });
        var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ot = new RegExp("^(?:([+-])=|)(" + et + ")([a-z%]*)$", "i"),
            it = ["Top", "Right", "Bottom", "Left"],
            nt = i.documentElement,
            st = function(t) { },
            rt = {
                composed: !0
            };
        nt.getRootNode && (st = function(t) {
            return A.contains(t.ownerDocument, t) || t.getRootNode(rt) === t.ownerDocument
        });
        var lt = function(t, e, o, i) { };

        function ct(t, e, o, i) {}
        var ht = /^(?:checkbox|radio)$/i,
            ft = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            mt = /^$|^module$|\/(?:java|ecma)script/i,
            gt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function vt(t, e) {
            var o;
            return o = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && T(t, e) ? A.merge([t], o) : o
        }

        function yt(t, e) {
            for (var o = 0, i = t.length; o < i; o++) Y.set(t[o], "globalEval", !e || Y.get(e[o], "globalEval"))
        }
        gt.optgroup = gt.option, gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead, gt.th = gt.td;
        var bt, Ct, At = /<|&#?\w+;/;

        function Et(t, e, o, i, n) {
            for (var s, r, a, l, c, d, u = e.createDocumentFragment(), p = [], h = 0, f = t.length; h < f; h++)
                if ((s = t[h]) || 0 === s)
                    if ("object" === b(s)) A.merge(p, s.nodeType ? [s] : s);
                    else if (At.test(s)) {
                for (r = r || u.appendChild(e.createElement("div")), a = (ft.exec(s) || ["", ""])[1].toLowerCase(), l = gt[a] || gt._default, r.innerHTML = l[1] + A.htmlPrefilter(s) + l[2], d = l[0]; d--;) r = r.lastChild;
                A.merge(p, r.childNodes), (r = u.firstChild).textContent = ""
            } else p.push(e.createTextNode(s));
            for (u.textContent = "", h = 0; s = p[h++];)
                if (i && A.inArray(s, i) > -1) n && n.push(s);
                else if (c = st(s), r = vt(u.appendChild(s), "script"), c && yt(r), o)
                for (d = 0; s = r[d++];) mt.test(s.type || "") && o.push(s);
            return u
        }
        bt = i.createDocumentFragment().appendChild(i.createElement("div")), (Ct = i.createElement("input")).setAttribute("type", "radio"), Ct.setAttribute("checked", "checked"), Ct.setAttribute("name", "t"), bt.appendChild(Ct), f.checkClone = bt.cloneNode(!0).cloneNode(!0).lastChild.checked, bt.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!bt.cloneNode(!0).lastChild.defaultValue;
        var St = /^key/, $t = /^([^.]*)(?:\.(.+)|)/;


        function _t() {
            return !1
        }


        function xt(t, e, o, i, n, s) {
            var r, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof o && (i = i || o, o = void 0), e) xt(t, a, o, i, e[a], s);
                return t
            }
            if (null == i && null == n ? (n = o, i = o = void 0) : null == n && ("string" == typeof o ? (n = i, i = void 0) : (n = i, i = o, o = void 0)), !1 === n) n = _t;
            else if (!n) return t;
            return 1 === s && (r = n, n = function(t) {}, n.guid = r.guid || (r.guid = A.guid++)), t.each((function() {
                A.event.add(this, e, n, i, o)
            }))
        }

        A.event = {
            global: {},
            add: function(t, e, o, i, n) {
                var s, r, a, l, c, d, u, p, h, f, m, g = Y.get(t);
                if (g)
                    for (o.handler && (o = (s = o).handler, n = s.selector), n && A.find.matchesSelector(nt, n), o.guid || (o.guid = A.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(e) {
                            return void 0 !== A && A.event.triggered !== e.type ? A.event.dispatch.apply(t, arguments) : void 0
                        }), c = (e = (e || "").match(O) || [""]).length; c--;) h = m = (a = $t.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), h && (u = A.event.special[h] || {}, h = (n ? u.delegateType : u.bindType) || h, u = A.event.special[h] || {}, d = A.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: o,
                        guid: o.guid,
                        selector: n,
                        needsContext: n && A.expr.match.needsContext.test(n),
                        namespace: f.join(".")
                    }, s), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, f, r) || t.addEventListener && t.addEventListener(h, r)), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = o.guid)), n ? p.splice(p.delegateCount++, 0, d) : p.push(d), A.event.global[h] = !0)
            },
            remove: function(t, e, o, i, n) {
                var s, r, a, l, c, d, u, p, h, f, m, g = Y.hasData(t) && Y.get(t);
                if (g && (l = g.events)) {
                    for (c = (e = (e || "").match(O) || [""]).length; c--;)
                        if (h = m = (a = $t.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), h) {
                            for (u = A.event.special[h] || {}, p = l[h = (i ? u.delegateType : u.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--;) d = p[s], !n && m !== d.origType || o && o.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(s, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(t, d));
                            r && !p.length && (u.teardown && !1 !== u.teardown.call(t, f, g.handle) || A.removeEvent(t, h, g.handle), delete l[h])
                        } else
                            for (h in l) A.event.remove(t, h + e[c], o, i, !0);
                    A.isEmptyObject(l) && Y.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, o, i, n, s, r, a = A.event.fix(t),
                    l = new Array(arguments.length),
                    c = (Y.get(this, "events") || {})[a.type] || [],
                    d = A.event.special[a.type] || {};
                for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (a.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, a)) {
                    for (r = A.event.handlers.call(this, a, c), e = 0;
                        (n = r[e++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = n.elem, o = 0;
                            (s = n.handlers[o++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== s.namespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (i = ((A.event.special[s.origType] || {}).handle || s.handler).apply(n.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                    return d.postDispatch && d.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(t, e) {
                var o, i, n, s, r, a = [],
                    l = e.delegateCount,
                    c = t.target;
                if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                            for (s = [], r = {}, o = 0; o < l; o++) void 0 === r[n = (i = e[o]).selector + " "] && (r[n] = i.needsContext ? A(n, this).index(c) > -1 : A.find(n, this, null, [c]).length), r[n] && s.push(i);
                            s.length && a.push({
                                elem: c,
                                handlers: s
                            })
                        }
                return c = this, l < e.length && a.push({
                    elem: c,
                    handlers: e.slice(l)
                }), a
            },
            addProp: function(t, e) {},
            fix: function(t) {
                return t[A.expando] ? t : new A.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(t) {
                        var e = this || t;
                        return ht.test(e.type) && e.click && T(e, "input") && kt(e, "click", Vt), !1
                    },
                }
            }
        }, A.removeEvent = function(t, e, o) {
            t.removeEventListener && t.removeEventListener(e, o)
        }, A.Event = function(t, e) {
            if (!(this instanceof A.Event)) return new A.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Vt : _t, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && A.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[A.expando] = !0
        }, A.Event.prototype = {
            constructor: A.Event,
            isDefaultPrevented: _t,
            isPropagationStopped: _t,
            isImmediatePropagationStopped: _t,
            isSimulated: !1,
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = t && !this.isSimulated && t.stopPropagation()
            }
        }, A.each({
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
            touches: !0
        }, A.event.addProp), A.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(t, e) {
            A.event.special[t] = {
                delegateType: e
            }
        })), A.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(t, e) {
            A.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var o, i = t.relatedTarget,
                        n = t.handleObj;
                    return i && (i === this || A.contains(this, i)) || (t.type = n.origType, o = n.handler.apply(this, arguments), t.type = e), o
                }
            }
        })), A.fn.extend({
            on: function(t, e, o, i) {
                return xt(this, t, e, o, i)
            },
            off: function(t, e, o) {
                var i, n;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, A(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (n in t) this.off(n, e, t[n]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (o = e, e = void 0), !1 === o && (o = _t), this.each((function() {
                    A.event.remove(this, t, o, e)
                }))
            }
        });
        var Pt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            jt = /<script|<style|<link/i,
            It = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Mt(t, e) {
            return T(t, "table") && T(11 !== e.nodeType ? e : e.firstChild, "tr") && A(t).children("tbody")[0] || t
        }

        function Ot(t) {}


        function Nt(t, e, o, i) {
            e = r.apply([], e);
            var n, s, a, l, c, d, u = 0,
                p = t.length,
                h = p - 1,
                g = e[0],
                v = m(g);
            if (v || p > 1 && "string" == typeof g && !f.checkClone && It.test(g)) return t.each((function(n) {}));
            if (p && (s = (n = Et(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === n.childNodes.length && (n = s), s || i)) {
                for (l = (a = A.map(vt(n, "script"), Ot)).length; u < p; u++) c = n, u !== h && (c = A.clone(c, !0, !0), l && A.merge(a, vt(c, "script"))), o.call(t[u], c, u);
                if (l)
                    for (d = a[a.length - 1].ownerDocument, A.map(a, Ft), u = 0; u < l; u++) c = a[u], mt.test(c.type || "") && !Y.access(c, "globalEval") && A.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? A._evalUrl && !c.noModule && A._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce")
                    }) : y(c.textContent.replace(Lt, ""), c, d))
            }
            return t
        }

        
        A.extend({
            htmlPrefilter: function(t) {
                return t.replace(Pt, "<$1></$2>")
            },
            cleanData: function(t) {
                for (var e, o, i, n = A.event.special, s = 0; void 0 !== (o = t[s]); s++)
                    if (Q(o)) {
                        if (e = o[Y.expando]) {
                            if (e.events)
                                for (i in e.events) n[i] ? A.event.remove(o, i) : A.removeEvent(o, i, e.handle);
                            o[Y.expando] = void 0
                        }
                        o[J.expando] && (o[J.expando] = void 0)
                    }
            }
        }), A.fn.extend({
            append: function() {
                return Nt(this, arguments, (function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Mt(this, t).appendChild(t)
                }))
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (A.cleanData(vt(t, !1)), t.textContent = "");
                return this
            },
            html: function(t) {
                return H(this, (function(t) {
                    var e = this[0] || {},
                        o = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !jt.test(t) && !gt[(ft.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = A.htmlPrefilter(t);
                        try {
                            for (; o < i; o++) 1 === (e = this[o] || {}).nodeType && (A.cleanData(vt(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }), null, t, arguments.length)
            }
        });
        var zt = new RegExp("^(" + et + ")(?!px)[a-z%]+$", "i"),
            Ht = function(e) {
                var o = e.ownerDocument.defaultView;
                return o && o.opener || (o = t), o.getComputedStyle(e)
            },
            Gt = new RegExp(it.join("|"), "i");

        function Wt(t, e, o) {
            var i, n, s, r, a = t.style;
            return (o = o || Ht(t)) && ("" !== (r = o.getPropertyValue(e) || o[e]) || st(t) || (r = A.style(t, e)), !f.pixelBoxStyles() && zt.test(r) && Gt.test(e) && (i = a.width, n = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = o.width, a.width = i, a.minWidth = n, a.maxWidth = s)), void 0 !== r ? r + "" : r
        }

        function qt(t, e) {}
        ! function() {
            function e() {
                if (d) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", nt.appendChild(c).appendChild(d);
                    var e = t.getComputedStyle(d);
                    n = "1%" !== e.top, l = 12 === o(e.marginLeft), d.style.right = "60%", a = 36 === o(e.right), s = 36 === o(e.width), d.style.position = "absolute", r = 12 === o(d.offsetWidth / 3), nt.removeChild(c), d = null
                }
            }

            function o(t) {
                return Math.round(parseFloat(t))
            }
            var n, s, r, a, l, c = i.createElement("div"),
                d = i.createElement("div");
            d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === d.style.backgroundClip, A.extend(f, {
                boxSizingReliable: function() {
                    return e(), s
                },
                pixelBoxStyles: function() {
                    return e(), a
                },
                scrollboxSize: function() {
                    return e(), r
                }
            }))
        }();
        var Qt = i.createElement("div").style,
            Xt = {};

        function Yt(t) {
            return A.cssProps[t] || Xt[t] || (t in Qt ? t : Xt[t] = function(t) {}(t) || t)
        }
        var Jt = /^(none|table(?!-c[ea]).+)/,
            Zt = /^--/,
            Kt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            te = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function ee(t, e, o) {
            var i = ot.exec(e);
            return i ? Math.max(0, i[2] - (o || 0)) + (i[3] || "px") : e
        }

        function oe(t, e, o, i, n, s) {
            var r = "width" === e ? 1 : 0,
                a = 0,
                l = 0;
            if (o === (i ? "border" : "content")) return 0;
            for (; r < 4; r += 2) "margin" === o && (l += A.css(t, o + it[r], !0, n)), i ? ("content" === o && (l -= A.css(t, "padding" + it[r], !0, n)), "margin" !== o && (l -= A.css(t, "border" + it[r] + "Width", !0, n))) : (l += A.css(t, "padding" + it[r], !0, n), "padding" !== o ? l += A.css(t, "border" + it[r] + "Width", !0, n) : a += A.css(t, "border" + it[r] + "Width", !0, n));
            return !i && s >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - .5)) || 0), l
        }

        function ie(t, e, o) {
            var i = Ht(t),
                n = (!f.boxSizingReliable() || o) && "border-box" === A.css(t, "boxSizing", !1, i),
                s = n,
                r = Wt(t, e, i),
                a = "offset" + e[0].toUpperCase() + e.slice(1);
            if (zt.test(r)) {
                if (!o) return r;
                r = "auto"
            }
            return (!f.boxSizingReliable() && n || "auto" === r || !parseFloat(r) && "inline" === A.css(t, "display", !1, i)) && t.getClientRects().length && (n = "border-box" === A.css(t, "boxSizing", !1, i), (s = a in t) && (r = t[a])), (r = parseFloat(r) || 0) + oe(t, e, o || (n ? "border" : "content"), s, i, r) + "px"
        }

        A.extend({
            cssHooks: {},
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
                zoom: !0
            },
            cssProps: {},
            style: function(t, e, o, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var n, s, r, a = U(e),
                        l = Zt.test(e),
                        c = t.style;
                    if (l || (e = Yt(a)), r = A.cssHooks[e] || A.cssHooks[a], void 0 === o) return r && "get" in r && void 0 !== (n = r.get(t, !1, i)) ? n : c[e];
                    "string" == (s = typeof o) && (n = ot.exec(o)) && n[1] && (o = ct(t, e, n), s = "number"), null != o && o == o && ("number" !== s || l || (o += n && n[3] || (A.cssNumber[a] ? "" : "px")), f.clearCloneStyle || "" !== o || 0 !== e.indexOf("background") || (c[e] = "inherit"), r && "set" in r && void 0 === (o = r.set(t, o, i)) || (l ? c.setProperty(e, o) : c[e] = o))
                }
            },
            css: function(t, e, o, i) {
                var n, s, r, a = U(e);
                return Zt.test(e) || (e = Yt(a)), (r = A.cssHooks[e] || A.cssHooks[a]) && "get" in r && (n = r.get(t, !0, o)), void 0 === n && (n = Wt(t, e, i)), "normal" === n && e in te && (n = te[e]), "" === o || o ? (s = parseFloat(n), !0 === o || isFinite(s) ? s || 0 : n) : n
            }
        }), A.each(["height", "width"], (function(t, e) {
            A.cssHooks[e] = {
                get: function(t, o, i) {
                    if (o) return !Jt.test(A.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ie(t, e, i) : lt(t, Kt, (function() {
                        return ie(t, e, i)
                    }))
                },
                set: function(t, o, i) {
                    var n, s = Ht(t),
                        r = !f.scrollboxSize() && "absolute" === s.position,
                        a = (r || i) && "border-box" === A.css(t, "boxSizing", !1, s),
                        l = i ? oe(t, e, i, a, s) : 0;
                    return a && r && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(s[e]) - oe(t, e, "border", !1, s) - .5)), l && (n = ot.exec(o)) && "px" !== (n[3] || "px") && (t.style[e] = o, o = A.css(t, e)), ee(0, o, l)
                }
            }
        })), A.fn.extend({
            css: function(t, e) {
                return H(this, (function(t, e, o) {
                    var i, n, s = {},
                        r = 0;
                    if (Array.isArray(e)) {
                        for (i = Ht(t), n = e.length; r < n; r++) s[e[r]] = A.css(t, e[r], !1, i);
                        return s
                    }
                    return void 0 !== o ? A.style(t, e, o) : A.css(t, e)
                }), t, e, arguments.length > 1)
            }
        });
        

        function ye(t) {
            return (t.match(O) || []).join(" ")
        }

        function be(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function Ce(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(O) || []
        }
        A.fn.extend({
            addClass: function(t) {
                var e, o, i, n, s, r, a, l = 0;
                if (m(t)) return this.each((function(e) {}));
                if ((e = Ce(t)).length)
                    for (; o = this[l++];)
                        if (n = be(o), i = 1 === o.nodeType && " " + ye(n) + " ") {
                            for (r = 0; s = e[r++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                            n !== (a = ye(i)) && o.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, o, i, n, s, r, a, l = 0;
                if (m(t)) return this.each((function(e) {}));
                if (!arguments.length) return this.attr("class", "");
                if ((e = Ce(t)).length)
                    for (; o = this[l++];)
                        if (n = be(o), i = 1 === o.nodeType && " " + ye(n) + " ") {
                            for (r = 0; s = e[r++];)
                                for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                            n !== (a = ye(i)) && o.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var o = typeof t,
                    i = "string" === o || Array.isArray(t);
                return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : m(t) ? this.each((function(o) {})) : this.each((function() {
                    var e, n, s, r;
                    if (i)
                        for (n = 0, s = A(this), r = Ce(t); e = r[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                    else void 0 !== t && "boolean" !== o || ((e = be(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Y.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(t) {
                var e, o, i = 0;
                for (e = " " + t + " "; o = this[i++];)
                    if (1 === o.nodeType && (" " + ye(be(o)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        
        var Ue;
        f.createHTMLDocument = ((Ue = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ue.childNodes.length), A.parseHTML = function(t, e, o) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (o = e, e = !1), e || (f.createHTMLDocument ? ((n = (e = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, e.head.appendChild(n)) : e = i), r = !o && [], (s = x.exec(t)) ? [e.createElement(s[1])] : (s = Et([t], e, r), r && r.length && A(r).remove(), A.merge([], s.childNodes)));
            var n, s, r
        }, A.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each((function(e) {}));
                var e, o, i = this[0];
                return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), o = i.ownerDocument.defaultView, {
                    top: e.top + o.pageYOffset,
                    left: e.left + o.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            }
        }), A.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(t, e) {
            var o = "pageYOffset" === e;
        })), A.each(["top", "left"], (function(t, e) {
            A.cssHooks[e] = qt(f.pixelPosition, (function(t, o) {}))
        })), A.each({
            Height: "height",
            Width: "width"
        }, (function(t, e) {
            A.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, (function(o, i) {
                A.fn[i] = function(n, s) {
                    var r = arguments.length && (o || "boolean" != typeof n),
                        a = o || (!0 === n || !0 === s ? "margin" : "border");
                    return H(this, (function(e, o, n) {
                        var s;
                        return g(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? A.css(e, o, a) : A.style(e, o, n, a)
                    }), e, r ? n : void 0, r)
                }
            }))
        })), A.isArray = Array.isArray, A.parseJSON = JSON.parse, A.nodeName = T, A.isFunction = m, A.isWindow = g, A.camelCase = U, A.type = b, A.now = Date.now, "function" == typeof define && define.amd && define("jquery", [], (function() {
            return A
        }));
        return e || (t.jQuery = t.$ = A), A
    })),
    function(t) {
        var i = "_tmplitem",
            n = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
            s = {},
            r = {},
            a = {
                key: 0,
                data: {}
            },
            l = 0,
            c = 0,
            d = [];

        function u(e, o, i, n) {
            var a = {
                data: n || 0 === n || !1 === n ? n : o ? o.data : {},
                _wrap: o ? o._wrap : null,
                tmpl: null,
                parent: o || null,
                nodes: [],
                nest: b,
            };
            return e && t.extend(a, e, {
                nodes: [],
                parent: o
            }), i && (a.tmpl = i, a._ctnt = a._ctnt || a.tmpl(t, a), a.key = ++l, (d.length ? r : s)[l] = a), a
        }

        function p(e, o, n) {
            var s, r = n ? t.map(n, (function(t) {
                return "string" == typeof t ? e.key ? t.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + i + '="' + e.key + '" $2') : t : p(t, e, t._ctnt)
            })) : e;
            return o ? r : ((r = r.join("")).replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, (function(e, o, i, n) {
                v(s = t(i).get()), o && (s = h(o).concat(s)), n && (s = s.concat(h(n)))
            })), s || h(r))
        }

        function f(e) {
            return new Function("jQuery", "$item", "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + t.trim(e).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, (function(e, o, i, n, s, r, a) {
                var l, c, d, u = t.tmpl.tag[i];
                if (!u) throw "Unknown template tag: " + i;
                return l = u._default || [], r && !/\w$/.test(s) && (s += r, r = ""), s ? (s = g(s), a = a ? "," + g(a) + ")" : r ? ")" : "", c = r ? s.indexOf(".") > -1 ? s + g(r) : "(" + s + ").call($item" + a : s, d = r ? c : "(typeof(" + s + ")==='function'?(" + s + ").call($item):(" + s + "))") : d = c = l.$1 || "null", n = g(n), "');" + u[o ? "close" : "open"].split("$notnull_1").join(s ? "typeof(" + s + ")!=='undefined' && (" + s + ")!=null" : "true").split("$1a").join(d).split("$1").join(c).split("$2").join(n || l.$2 || "") + "__.push('"
            })) + "');}return __;")
        }
        
        function g(t) {
            return t ? t.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
        }

        function v(e) {
            var o, n, a, d, p, h = "_" + c,
                f = {};
            for (a = 0, d = e.length; a < d; a++)
                if (1 === (o = e[a]).nodeType) {
                    for (p = (n = o.getElementsByTagName("*")).length - 1; p >= 0; p--) m(n[p]);
                    m(o)
                }
            function m(e) {
                var o, n, a, d, p = e;
                if (d = e.getAttribute(i)) {
                    for (; p.parentNode && 1 === (p = p.parentNode).nodeType && !(o = p.getAttribute(i)););
                    o !== d && (p = p.parentNode ? 11 === p.nodeType ? 0 : p.getAttribute(i) || 0 : 0, (a = s[d]) || ((a = u(a = r[d], s[p] || r[p])).key = ++l, s[l] = a), c && m(d)), e.removeAttribute(i)
                } else c && (a = t.data(e, "tmplItem")) && (m(a.key), s[a.key] = a, p = (p = t.data(e.parentNode, "tmplItem")) ? p.key : 0);
                if (a) {
                    for (n = a; n && n.key != p;) n.nodes.push(e), n = n.parent;
                    delete a._ctnt, delete a._wrap, t.data(e, "tmplItem", a)
                }
            }
        }

        function b(e, o, i) {
            return t.tmpl(t.template(e), o, i, this)
        }

        t.fn.extend({
            tmpl: function(e, o, i) {
                return t.tmpl(this[0], e, o, i)
            }
        }), t.extend({
            tmpl: function(e, o, i, n) {
                var l, c = !n;
                if (c) n = a, e = t.template[e] || t.template(null, e), r = {};
                else if (!e) return e = n.tmpl, s[n.key] = n, n.nodes = [], n.wrapped && m(n, n.wrapped), t(p(n, null, n.tmpl(t, n)));
                return e ? ("function" == typeof o && (o = o.call(n || {})), i && i.wrapped && m(i, i.wrapped), l = t.isArray(o) ? t.map(o, (function(t) {
                    return t ? u(i, n, e, t) : null
                })) : [u(i, n, e, o)], c ? t(p(n, null, l)) : l) : []
            },
            template: function(e, o) {
                return o ? ("string" == typeof o ? o = f(o) : o instanceof t && (o = o[0] || {}), o.nodeType && (o = t.data(o, "tmpl") || t.data(o, "tmpl", f(o.innerHTML))), "string" == typeof e ? t.template[e] = o : o) : e ? "string" != typeof e ? t.template(null, e) : t.template[e] || t.template(null, n.test(e) ? e : t(e)) : null
            },
            encode: function(t) {
                return ("" + t).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
            }
        }), t.extend(t.tmpl, {
            tag: {
                tmpl: {
                    _default: {
                        $2: "null"
                    },
                    open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"
                },
                wrap: {
                    _default: {
                        $2: "null"
                    },
                    open: "$item.calls(__,$1,$2);__=[];",
                    close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
                },
                each: {
                    _default: {
                        $2: "$index, $value"
                    },
                    open: "if($notnull_1){$.each($1a,function($2){with(this){",
                    close: "}});}"
                },
                if: {
                    open: "if(($notnull_1) && $1a){",
                    close: "}"
                },
                else: {
                    _default: {
                        $1: "true"
                    },
                    open: "}else if(($notnull_1) && $1a){"
                },
                html: {
                    open: "if($notnull_1){__.push($1a);}"
                },
                "=": {
                    _default: {
                        $1: "$data"
                    },
                    open: "if($notnull_1){__.push($.encode($1a));}"
                },
                "!": {
                    open: ""
                }
            }
        })
    }(jQuery), 
    "function" == typeof define , global = this, factory = function(t) {
        "use strict";
        t = t && "default" in t ? t.default : t;
    }, "object" == typeof exports && "undefined" != typeof module ? factory(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], factory) : factory(global.jQuery),

    function(t) {
        var e = [],
            o = 3;

        function i(o) {
            var i = t(this),
                n = null,
                s = null,
                r = t.extend({
                    rowSelector: "> li",
                    submenuSelector: "*",
                    submenuDirection: "right",
                    tolerance: 75,
                    activeRow: null
                }, o),
                a = function(t) {
                    t != r.activeRow && (r.activeRow && r.deactivate(r.activeRow), r.activate(t), r.activeRow = t)
                },
                l = function(t) {
                    var e = c();
                    e ? s = setTimeout((function() {
                        l(t)
                    }), e) : a(t)
                },
                c = function() {
                    if (!r.activeRow || !t(r.activeRow).is(r.submenuSelector)) return 0;
                    var o = i.offset(),
                        s = {
                            x: o.left,
                            y: o.top - r.tolerance
                        },
                        a = {
                            x: o.left + i.outerWidth(),
                            y: s.y
                        },
                        l = {
                            x: o.left,
                            y: o.top + i.outerHeight() + r.tolerance
                        },
                        c = {
                            x: o.left + i.outerWidth(),
                            y: l.y
                        },
                        d = e[e.length - 1],
                        u = e[0];
                    if (!d) return 0;
                    if (u || (u = d), u.x < o.left || u.x > c.x || u.y < o.top || u.y > c.y) return 0;
                    if (n && d.x == n.x && d.y == n.y) return 0;

                    function p(t, e) {
                        return (e.y - t.y) / (e.x - t.x)
                    }
                    var h = a,
                        f = c;
                    "left" == r.submenuDirection ? (h = l, f = s) : "below" == r.submenuDirection ? (h = c, f = l) : "above" == r.submenuDirection && (h = s, f = a);
                    var m = p(d, h),
                        g = p(d, f),
                        v = p(u, h),
                        y = p(u, f);
                    return m < v && g > y ? (n = d, 300) : (n = null, 0)
                };
            i.on("mouseleave", (function() {
                s && clearTimeout(s)
            })).find(r.rowSelector).on("mouseenter", (function() {
                s && clearTimeout(s), l(this)
            }))
        }

        function n(t) {
            e.push({
                x: t.pageX,
                y: t.pageY
            }), e.length > o && e.shift()
        }
        t.fn.menuAim = function(o) {
            return !e.length && t(document).on("mousemove.menuaim", n), this.each((function() {
                i.call(this, o)
            })), this
        }
    }(jQuery),
    $((function() {
        _autoload()
    })),AVE.common = {
        isMobile: function() {
            return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))
        },
        removeBodyScroll: function() {
            $(document.body).addClass("is-unscrolled")
        },
        returnBodyScroll: function() {
            $(document.body).removeClass("is-unscrolled")
        },
        createCategories: function(items){
            AVE.cmsComponentsData.AveCategoryNavComponent.links.forEach(function (topCategory,counter) {
            var component = ``
            topCategory && topCategory.links.forEach(function (category,counter) {
                if(category){
                    var subCategory = `<span class="yCmsComponent c-catalog-body__sub-item js-menu__item--submenu__item -items__${category.isCategory ? "item-title": "child"} c-catalog-body__sub-item--modify"><a href="${category.url}" >${category.linkName}</a></span>`
                    category && category.links.forEach(function (childCategory) {
                        subCategory += `<span class="yCmsComponent c-catalog-body__sub-item js-menu__item--submenu__item -items__${childCategory.isCategory ? "item-title": "child"} c-catalog-body__sub-item--modify"><a href="${childCategory.url}" >${childCategory.linkName}</a></span>`
                    })
                    component += `<div class="-items__item">${subCategory}</div>`
                }
            })
            $('.js-catalog-menu__list').append(`
                <li class="-items__parent-title c-catalog-body__item">
                    <a class="  js-catalog-menu__cat" href="${topCategory.url}" target="_self" ${counter === 0 ? "data-active" : ""} data-val="box-${counter + 1}_1">${topCategory.linkName}<div class="c-catalog-body__item-arrow"></div>
                    </a>
                </li>`);
            $('.i-pos-rel').append(`
            <div class="sub-menu-item js-catalog-menu__box ${counter === 0 ? "active" : ""} js-navigation-menu__item" id="category-box-${counter + 1}_1">
                <div class="js-menu__item__title i-dn"><a href="${topCategory.url}" target="_self" class="">${topCategory.linkName}</a></div>
                <div class="c-catalog-body__sub c-catalog-body__sub--header -single">
                    <div class="-items">
                        <div class="-items-title"><a href="${topCategory.url}" target="_self" class="">${topCategory.linkName}</a></div>
                        <div class="-items__content">${component}</div>
                    </div>
                </div>
            </div>
            `)
            });
        }
    }, AVE.mobileCatalog = {
        data: AVE.cmsComponentsData.AveCategoryNavComponent,
        $topCategoryTmpl: $("#mobileMenuCatalogTopCategory"),
        $childCategoryTmpl: $("#mobileMenuCatalogChildCategory"),
        categoriesStack: [],
        $wrapper: $(".js-mobile-menu-content"),
        getCurrentCategory: function() {
            return this.categoriesStack[this.categoriesStack.length - 1]
        },
        
        popCategoryFromStack: function() {
            this.categoriesStack.pop()
        },
        pushCategoryToStack: function(t) {
            this.getCurrentCategory() !== t && this.categoriesStack.push(t)
        },
        clearCategoriesStack: function() {
            this.categoriesStack = []
        },
        createTopCategoryDOM: function(t) {
            return this.$topCategoryTmpl.tmpl({
                data: {
                    linkName: t.linkName,
                    links: t.links
                }
            })
        },
        renderTopCategory: function() {
            this.pushCategoryToStack(this.data), this.getCurrentCategory().$node || (this.getCurrentCategory().$node = this.createTopCategoryDOM(this.getCurrentCategory())), this.getCurrentCategory().$node.on("click", ".js-mobile-menu-category", (t => {
                const e = $(t.target).data("index"),
                    o = this.getCurrentCategory().links[e];
                this.renderChildCategory(o)
            })), this.getCurrentCategory().$node.on("click", ".js-mobile-menu-back", (() => this.goBack())), this.$wrapper.html(this.getCurrentCategory().$node)
        },
        createChildCategoryDOM: function(t) {
            return this.$childCategoryTmpl.tmpl({
                data: {
                    linkName: t.linkName,
                    url: t.url,
                    links: t.links
                }
            })
        },
        renderChildCategory: function(t) {
            this.pushCategoryToStack(t), t.$node || (t.$node = this.createChildCategoryDOM(t)), this.getCurrentCategory().$node.on("click", ".js-mobile-menu-back", (() => this.goBack())), this.$wrapper.html(t.$node)
        },
        
        goBack: function() {
            this.popCategoryFromStack(), 0 === this.categoriesStack.length ? AVE.mobileMenu.renderTopLvl() : 1 === this.categoriesStack.length && this.renderTopCategory()
        }
    }, AVE.mobileMenu = {
        _autoload: [
            ["bind", true]
        ],
        $node: $(".js-mobile-menu"),
        $content: $(".js-mobile-menu-content"),
        $topLvl: null,
        $lk: null,
        $header: $(".js-header-fix"),
        $headerFixingController: $(".js-header-fixing-controller"),
        $headerBurger: $(".js-header-burger"),
        $headerBurgerIcon: $(".js-header-burger-icon"),
        $itemTmpl: $("#mobileMenuItem"),
        $topLvlTmpl: $("#mobileMenuTopLvl"),
        $lkTmpl: $("#mobileMenuLk"),
        isOpen: !1,
        bind: function() {
            this.$node.on("click", (t => {
                t.target === this.$node[0] && this.close()
            })), this.$headerBurger.on("click", (() => this.toggle())), this.$node.on("click", ".js-mobile-menu-link", (() => {}))
        },
        createCatalogLink: function() {
            return {
                linkName: AVE.cmsComponentsData.AveCategoryNavComponent.linkName,
                htmlClass: "menu-btn--catalog js-mobile-menu-catalog-open"
            }
        },
        createTopLvlLinks: function() {
            return [this.createCatalogLink()]
        },
        createTopLvlDOM: function() {
            return this.$topLvlTmpl.tmpl({
                data: {
                    links: this.createTopLvlLinks()
                }
            })
        },
        renderTopLvl: function() {
            this.$topLvl && this.$topLvl.closest(this.$content).length > 0 || (this.$topLvl || (this.$topLvl = this.createTopLvlDOM()), this.$topLvl.on("click", ".js-mobile-menu-catalog-open", (() => {
                AVE.mobileCatalog.renderTopCategory()
            })), this.$content.html(this.$topLvl))
        },
        open: function() {
            this.renderTopLvl(), this.$headerFixingController.css("padding-top", this.$header.outerHeight() + "px"), this.$header.addClass("header--is-fixed"), this.$node.removeClass("mobile-menu--is-hidden"), this.$headerBurgerIcon.addClass("burger--is-opened"), AVE.common.removeBodyScroll(), this.isOpen = !0,
            AVE.mobileCatalog.renderTopCategory()
        },
        close: function() {
            this.$node.addClass("mobile-menu--is-hidden"), this.$headerBurgerIcon.removeClass("burger--is-opened"), AVE.common.returnBodyScroll(), AVE.mobileCatalog.clearCategoriesStack(), this.isOpen = !1
        },
        toggle: function() {
            this.isOpen ? this.close() : this.open()
        }
    }, AVE.navigation = {
        _autoload: [],
        DATA_ACTIVE: "data-active",
        CLASS_ACTIVE: "active",
        SET_ACTIVE: "setactiverow",
        $categories: [],
        toggleDropdownMenu: function() {
            var t = $(".js-catalog-menu"),
                e = t.find(".js-navigation-menu__title"),
                o = null;
            const i = $(".js-catalog-menu-wrapper"),
                n = $(".js-catalog-menu-content");

            function s(t, e) {
                if (t.toggleClass("active"), o = t.hasClass("active") ? t : null, true) {
                    const n = $(".js-mainHeader"),
                        s = $(".js-navigation-top"),
                        r = n.outerHeight() - s.outerHeight();
                    let a = window.pageYOffset;

                    function i() {
                        const e = window.pageYOffset <= a;
                        n.hasClass("header--is-fixed") ? e ? (t.css("position", "fixed"), t.css("top", r + "px"), a = window.pageYOffset) : (t.css("position", ""), t.css("top", r + a + "px")) : (t.css("position", ""), t.css("top", ""))
                    }
                    t.hasClass("active") ? ($(window).on("scroll", i), i(), AVE.header.lkDropMenu.close()) : $(window).off("scroll", i), e.find(".js-catalog-btn-burger").toggleClass("burger--is-opened")
                }
            }

            function r(t, e) {
                e.css("height", document.body.offsetHeight - t.height() - t.offset().top + "px")
            }
            e.each((function(t, e) {
                const a = "main-catalog" === (e = $(e)).data("type");
                a && 0 === i.children().length && i.append(n.find(".js-content-menu"));
                var l, c = a ? i.find(".js-content-menu") : e.parent().find(".js-content-menu"),
                    d = a ? i.find(".js-blackout-menu") : e.parent().find(".js-blackout-menu");
                e.on("click", (function(t) {
                    t.stopPropagation(), o && o !== c && s(o, e), c.length && (s(c, e), r(c, d))
                })), c.length && (r(c, d), $(window).on("scroll", (function() {
                    l && clearTimeout(l), l = setTimeout((function() {
                        r(c, d)
                    }), 20)
                }))), d.on("click", (function() {
                    s(c, e)
                }))
            })), $(document.body).on("click", (function(t) {
                $(t.target).closest(".js-content-menu").length > 0 || o && s(o, e)
            }))
        },
        toggleCatalogMenu: function() {
            AVE.common.createCategories()
            var t = this,
                e = !0,
                o = $(".js-catalog-menu");
            function i() {
                e && t.$categories.data("open")(), o.toggle(e), e && AVE.gtm.sendAction("trackEvent", "Discovery", "Mainmenu_click"), e = !e
            }
            function n(t) {
                t.stopPropagation()
            }
            t.$categories = o.find(".js-catalog-menu__list"), $(".js-switch-menu").on("click", i).on("click", n), o.on("click", n), $(document.body).on("click", (function() {
                !e && i()
            }))
        },
        toggleMenuCategory: function() {
            var t = this,
                e = $(".js-catalog-menu__box"),
                o = $(".js-catalog-menu__cat");
            t.$categories.length && t.$categories.menuAim({
                activeRow: o[0],
                activate: function(e) {
                    var o = $("#category-" + e.getAttribute("data-val")).addClass(t.CLASS_ACTIVE).outerHeight();
                    e.setAttribute(t.DATA_ACTIVE, ""), t.$categories.css({
                        "min-height": o
                    }), !t.$categories.data(t.SET_ACTIVE) && t.$categories.data(t.SET_ACTIVE, this.setActiveRow)
                },
                deactivate: function(o) {
                    o.removeAttribute(t.DATA_ACTIVE), e.removeClass(t.CLASS_ACTIVE)
                },
                rowSelector: ".js-catalog-menu__cat"
            })
        }
    };

AVE.header = {
    _autoload: ["bindHeaderPopupEvent", "bindSearchPlaceholder", "bindDesktopNavigation", ["bindFixEvent", $(".js-header-fix").length],
        ["headerMiniCart", $(".js-header-minicart-gz-text").length],
        ["bindLkDropMenu", $(".js-header-lk-drop-menu").length > 0]
    ],
    bindDesktopNavigation: function() {
        
        AVE.common.isMobile() || (AVE.navigation.toggleCatalogMenu(), AVE.navigation.toggleDropdownMenu(), AVE.navigation.toggleMenuCategory())
    },
    lkDropMenu: (() => {
        const t = $(".js-header-lk-drop-menu"),
            e = $(document),
            o = t => {};
        return {
            close: function() {
                t.removeClass("drop-menu--is-opened"), e.off("click", o)
            }
        }
    })(),
    addCategories: (() =>{
        AVE.cmsComponentsData.AveCategoryNavComponent.links.forEach(function (category,counter) {
            $('.js-catalog-menu__list').append(`
                <li class="-items__parent-title c-catalog-body__item">
                    <a class="  js-catalog-menu__cat" href="${category.url}" target="_self" data-val="box-${counter + 1}_1">${category.linkName}<div class="c-catalog-body__item-arrow"></div>
                    </a>
                </li>`);
            });
    })
};