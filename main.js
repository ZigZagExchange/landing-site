!(function (e) {
    var t = {};
    function i(n) {
        if (t[n]) return t[n].exports;
        var s = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
    }
    (i.m = e),
        (i.c = t),
        (i.d = function (e, t, n) {
            i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (i.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (i.t = function (e, t) {
            if ((1 & t && (e = i(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var s in e)
                    i.d(
                        n,
                        s,
                        function (t) {
                            return e[t];
                        }.bind(null, s)
                    );
            return n;
        }),
        (i.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return i.d(t, "a", t), t;
        }),
        (i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (i.p = ""),
        i((i.s = 1));
})([
    function (e, t, i) {
        (function (t) {
            e.exports = (function () {
                "use strict";
                var e = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
                    i = "Expected a function",
                    n = /^\s+|\s+$/g,
                    s = /^[-+]0x[0-9a-f]+$/i,
                    r = /^0b[01]+$/i,
                    a = /^0o[0-7]+$/i,
                    o = parseInt,
                    l = "object" == typeof e && e && e.Object === Object && e,
                    d = "object" == typeof self && self && self.Object === Object && self,
                    u = l || d || Function("return this")(),
                    c = Object.prototype.toString,
                    h = Math.max,
                    p = Math.min,
                    f = function () {
                        return u.Date.now();
                    };
                function v(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t);
                }
                function m(e) {
                    if ("number" == typeof e) return e;
                    if (
                        (function (e) {
                            return (
                                "symbol" == typeof e ||
                                ((function (e) {
                                    return !!e && "object" == typeof e;
                                })(e) &&
                                    "[object Symbol]" == c.call(e))
                            );
                        })(e)
                    )
                        return NaN;
                    if (v(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = v(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(n, "");
                    var i = r.test(e);
                    return i || a.test(e) ? o(e.slice(2), i ? 2 : 8) : s.test(e) ? NaN : +e;
                }
                var g = function (e, t, n) {
                        var s = !0,
                            r = !0;
                        if ("function" != typeof e) throw new TypeError(i);
                        return (
                            v(n) && ((s = "leading" in n ? !!n.leading : s), (r = "trailing" in n ? !!n.trailing : r)),
                            (function (e, t, n) {
                                var s,
                                    r,
                                    a,
                                    o,
                                    l,
                                    d,
                                    u = 0,
                                    c = !1,
                                    g = !1,
                                    b = !0;
                                if ("function" != typeof e) throw new TypeError(i);
                                function y(t) {
                                    var i = s,
                                        n = r;
                                    return (s = r = void 0), (u = t), (o = e.apply(n, i));
                                }
                                function w(e) {
                                    var i = e - d;
                                    return void 0 === d || i >= t || i < 0 || (g && e - u >= a);
                                }
                                function x() {
                                    var e = f();
                                    if (w(e)) return E(e);
                                    l = setTimeout(
                                        x,
                                        (function (e) {
                                            var i = t - (e - d);
                                            return g ? p(i, a - (e - u)) : i;
                                        })(e)
                                    );
                                }
                                function E(e) {
                                    return (l = void 0), b && s ? y(e) : ((s = r = void 0), o);
                                }
                                function T() {
                                    var e = f(),
                                        i = w(e);
                                    if (((s = arguments), (r = this), (d = e), i)) {
                                        if (void 0 === l)
                                            return (function (e) {
                                                return (u = e), (l = setTimeout(x, t)), c ? y(e) : o;
                                            })(d);
                                        if (g) return (l = setTimeout(x, t)), y(d);
                                    }
                                    return void 0 === l && (l = setTimeout(x, t)), o;
                                }
                                return (
                                    (t = m(t) || 0),
                                    v(n) && ((c = !!n.leading), (a = (g = "maxWait" in n) ? h(m(n.maxWait) || 0, t) : a), (b = "trailing" in n ? !!n.trailing : b)),
                                    (T.cancel = function () {
                                        void 0 !== l && clearTimeout(l), (u = 0), (s = d = r = l = void 0);
                                    }),
                                    (T.flush = function () {
                                        return void 0 === l ? o : E(f());
                                    }),
                                    T
                                );
                            })(e, t, { leading: s, maxWait: t, trailing: r })
                        );
                    },
                    b = /^\s+|\s+$/g,
                    y = /^[-+]0x[0-9a-f]+$/i,
                    w = /^0b[01]+$/i,
                    x = /^0o[0-7]+$/i,
                    E = parseInt,
                    T = "object" == typeof e && e && e.Object === Object && e,
                    S = "object" == typeof self && self && self.Object === Object && self,
                    C = T || S || Function("return this")(),
                    k = Object.prototype.toString,
                    O = Math.max,
                    M = Math.min,
                    P = function () {
                        return C.Date.now();
                    };
                function _(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t);
                }
                function L(e) {
                    if ("number" == typeof e) return e;
                    if (
                        (function (e) {
                            return (
                                "symbol" == typeof e ||
                                ((function (e) {
                                    return !!e && "object" == typeof e;
                                })(e) &&
                                    "[object Symbol]" == k.call(e))
                            );
                        })(e)
                    )
                        return NaN;
                    if (_(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = _(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(b, "");
                    var i = w.test(e);
                    return i || x.test(e) ? E(e.slice(2), i ? 2 : 8) : y.test(e) ? NaN : +e;
                }
                var A = function (e, t, i) {
                        var n,
                            s,
                            r,
                            a,
                            o,
                            l,
                            d = 0,
                            u = !1,
                            c = !1,
                            h = !0;
                        if ("function" != typeof e) throw new TypeError("Expected a function");
                        function p(t) {
                            var i = n,
                                r = s;
                            return (n = s = void 0), (d = t), (a = e.apply(r, i));
                        }
                        function f(e) {
                            var i = e - l;
                            return void 0 === l || i >= t || i < 0 || (c && e - d >= r);
                        }
                        function v() {
                            var e = P();
                            if (f(e)) return m(e);
                            o = setTimeout(
                                v,
                                (function (e) {
                                    var i = t - (e - l);
                                    return c ? M(i, r - (e - d)) : i;
                                })(e)
                            );
                        }
                        function m(e) {
                            return (o = void 0), h && n ? p(e) : ((n = s = void 0), a);
                        }
                        function g() {
                            var e = P(),
                                i = f(e);
                            if (((n = arguments), (s = this), (l = e), i)) {
                                if (void 0 === o)
                                    return (function (e) {
                                        return (d = e), (o = setTimeout(v, t)), u ? p(e) : a;
                                    })(l);
                                if (c) return (o = setTimeout(v, t)), p(l);
                            }
                            return void 0 === o && (o = setTimeout(v, t)), a;
                        }
                        return (
                            (t = L(t) || 0),
                            _(i) && ((u = !!i.leading), (r = (c = "maxWait" in i) ? O(L(i.maxWait) || 0, t) : r), (h = "trailing" in i ? !!i.trailing : h)),
                            (g.cancel = function () {
                                void 0 !== o && clearTimeout(o), (d = 0), (n = l = s = o = void 0);
                            }),
                            (g.flush = function () {
                                return void 0 === o ? a : m(P());
                            }),
                            g
                        );
                    },
                    z = function () {};
                function D(e) {
                    e &&
                        e.forEach(function (e) {
                            var t = Array.prototype.slice.call(e.addedNodes),
                                i = Array.prototype.slice.call(e.removedNodes);
                            if (
                                (function e(t) {
                                    var i = void 0,
                                        n = void 0;
                                    for (i = 0; i < t.length; i += 1) {
                                        if ((n = t[i]).dataset && n.dataset.aos) return !0;
                                        if (n.children && e(n.children)) return !0;
                                    }
                                    return !1;
                                })(t.concat(i))
                            )
                                return z();
                        });
                }
                function j() {
                    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                }
                var N = function () {
                        return !!j();
                    },
                    $ = function (e, t) {
                        var i = window.document,
                            n = new (j())(D);
                        (z = t), n.observe(i.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
                    },
                    I = (function () {
                        function e(e, t) {
                            for (var i = 0; i < t.length; i++) {
                                var n = t[i];
                                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                            }
                        }
                        return function (t, i, n) {
                            return i && e(t.prototype, i), n && e(t, n), t;
                        };
                    })(),
                    B =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var i = arguments[t];
                                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                            }
                            return e;
                        },
                    G = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                    F = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    R = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                    H = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
                function q() {
                    return navigator.userAgent || navigator.vendor || window.opera || "";
                }
                var V = new ((function () {
                        function e() {
                            !(function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            })(this, e);
                        }
                        return (
                            I(e, [
                                {
                                    key: "phone",
                                    value: function () {
                                        var e = q();
                                        return !(!G.test(e) && !F.test(e.substr(0, 4)));
                                    },
                                },
                                {
                                    key: "mobile",
                                    value: function () {
                                        var e = q();
                                        return !(!R.test(e) && !H.test(e.substr(0, 4)));
                                    },
                                },
                                {
                                    key: "tablet",
                                    value: function () {
                                        return this.mobile() && !this.phone();
                                    },
                                },
                                {
                                    key: "ie11",
                                    value: function () {
                                        return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
                                    },
                                },
                            ]),
                            e
                        );
                    })())(),
                    W = function (e, t) {
                        var i = void 0;
                        return V.ie11() ? (i = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, { detail: t }) : (i = new CustomEvent(e, { detail: t })), document.dispatchEvent(i);
                    },
                    Y = function (e) {
                        return e.forEach(function (e, t) {
                            return (function (e, t) {
                                var i = e.options,
                                    n = e.position,
                                    s = e.node,
                                    r =
                                        (e.data,
                                        function () {
                                            e.animated &&
                                                ((function (e, t) {
                                                    t &&
                                                        t.forEach(function (t) {
                                                            return e.classList.remove(t);
                                                        });
                                                })(s, i.animatedClassNames),
                                                W("aos:out", s),
                                                e.options.id && W("aos:in:" + e.options.id, s),
                                                (e.animated = !1));
                                        });
                                i.mirror && t >= n.out && !i.once
                                    ? r()
                                    : t >= n.in
                                    ? e.animated ||
                                      ((function (e, t) {
                                          t &&
                                              t.forEach(function (t) {
                                                  return e.classList.add(t);
                                              });
                                      })(s, i.animatedClassNames),
                                      W("aos:in", s),
                                      e.options.id && W("aos:in:" + e.options.id, s),
                                      (e.animated = !0))
                                    : e.animated && !i.once && r();
                            })(e, window.pageYOffset);
                        });
                    },
                    X = function (e) {
                        for (var t = 0, i = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
                            (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)), (i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)), (e = e.offsetParent);
                        return { top: i, left: t };
                    },
                    U = function (e, t, i) {
                        var n = e.getAttribute("data-aos-" + t);
                        if (void 0 !== n) {
                            if ("true" === n) return !0;
                            if ("false" === n) return !1;
                        }
                        return n || i;
                    },
                    K = function (e, t) {
                        return (
                            e.forEach(function (e, i) {
                                var n = U(e.node, "mirror", t.mirror),
                                    s = U(e.node, "once", t.once),
                                    r = U(e.node, "id"),
                                    a = t.useClassNames && e.node.getAttribute("data-aos"),
                                    o = [t.animatedClassName].concat(a ? a.split(" ") : []).filter(function (e) {
                                        return "string" == typeof e;
                                    });
                                t.initClassName && e.node.classList.add(t.initClassName),
                                    (e.position = {
                                        in: (function (e, t, i) {
                                            var n = window.innerHeight,
                                                s = U(e, "anchor"),
                                                r = U(e, "anchor-placement"),
                                                a = Number(U(e, "offset", r ? 0 : t)),
                                                o = r || i,
                                                l = e;
                                            s && document.querySelectorAll(s) && (l = document.querySelectorAll(s)[0]);
                                            var d = X(l).top - n;
                                            switch (o) {
                                                case "top-bottom":
                                                    break;
                                                case "center-bottom":
                                                    d += l.offsetHeight / 2;
                                                    break;
                                                case "bottom-bottom":
                                                    d += l.offsetHeight;
                                                    break;
                                                case "top-center":
                                                    d += n / 2;
                                                    break;
                                                case "center-center":
                                                    d += n / 2 + l.offsetHeight / 2;
                                                    break;
                                                case "bottom-center":
                                                    d += n / 2 + l.offsetHeight;
                                                    break;
                                                case "top-top":
                                                    d += n;
                                                    break;
                                                case "bottom-top":
                                                    d += n + l.offsetHeight;
                                                    break;
                                                case "center-top":
                                                    d += n + l.offsetHeight / 2;
                                            }
                                            return d + a;
                                        })(e.node, t.offset, t.anchorPlacement),
                                        out:
                                            n &&
                                            (function (e, t) {
                                                window.innerHeight;
                                                var i = U(e, "anchor"),
                                                    n = U(e, "offset", t),
                                                    s = e;
                                                return i && document.querySelectorAll(i) && (s = document.querySelectorAll(i)[0]), X(s).top + s.offsetHeight - n;
                                            })(e.node, t.offset),
                                    }),
                                    (e.options = { once: s, mirror: n, animatedClassNames: o, id: r });
                            }),
                            e
                        );
                    },
                    Z = function () {
                        var e = document.querySelectorAll("[data-aos]");
                        return Array.prototype.map.call(e, function (e) {
                            return { node: e };
                        });
                    },
                    J = [],
                    Q = !1,
                    ee = {
                        offset: 120,
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        disable: !1,
                        once: !1,
                        mirror: !1,
                        anchorPlacement: "top-bottom",
                        startEvent: "DOMContentLoaded",
                        animatedClassName: "aos-animate",
                        initClassName: "aos-init",
                        useClassNames: !1,
                        disableMutationObserver: !1,
                        throttleDelay: 99,
                        debounceDelay: 50,
                    },
                    te = function () {
                        return document.all && !window.atob;
                    },
                    ie = function () {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (Q = !0),
                            Q &&
                                ((J = K(J, ee)),
                                Y(J),
                                window.addEventListener(
                                    "scroll",
                                    g(function () {
                                        Y(J, ee.once);
                                    }, ee.throttleDelay)
                                ));
                    },
                    ne = function () {
                        if (((J = Z()), re(ee.disable) || te())) return se();
                        ie();
                    },
                    se = function () {
                        J.forEach(function (e, t) {
                            e.node.removeAttribute("data-aos"),
                                e.node.removeAttribute("data-aos-easing"),
                                e.node.removeAttribute("data-aos-duration"),
                                e.node.removeAttribute("data-aos-delay"),
                                ee.initClassName && e.node.classList.remove(ee.initClassName),
                                ee.animatedClassName && e.node.classList.remove(ee.animatedClassName);
                        });
                    },
                    re = function (e) {
                        return !0 === e || ("mobile" === e && V.mobile()) || ("phone" === e && V.phone()) || ("tablet" === e && V.tablet()) || ("function" == typeof e && !0 === e());
                    };
                return {
                    init: function (e) {
                        return (
                            (ee = B(ee, e)),
                            (J = Z()),
                            ee.disableMutationObserver ||
                                N() ||
                                (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),
                                (ee.disableMutationObserver = !0)),
                            ee.disableMutationObserver || $("[data-aos]", ne),
                            re(ee.disable) || te()
                                ? se()
                                : (document.querySelector("body").setAttribute("data-aos-easing", ee.easing),
                                  document.querySelector("body").setAttribute("data-aos-duration", ee.duration),
                                  document.querySelector("body").setAttribute("data-aos-delay", ee.delay),
                                  -1 === ["DOMContentLoaded", "load"].indexOf(ee.startEvent)
                                      ? document.addEventListener(ee.startEvent, function () {
                                            ie(!0);
                                        })
                                      : window.addEventListener("load", function () {
                                            ie(!0);
                                        }),
                                  "DOMContentLoaded" === ee.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 && ie(!0),
                                  window.addEventListener("resize", A(ie, ee.debounceDelay, !0)),
                                  window.addEventListener("orientationchange", A(ie, ee.debounceDelay, !0)),
                                  J)
                        );
                    },
                    refresh: ie,
                    refreshHard: ne,
                };
            })();
        }.call(this, i(3)));
    },
    function (e, t, i) {
        i(5), (e.exports = i(4));
    },
    function (e, t, i) {
        e.exports = (function () {
            "use strict";
            function e(e, t, i) {
                return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
            }
            function t(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        i.push.apply(i, n);
                }
                return i;
            }
            function i(i) {
                for (var n = 1; n < arguments.length; n++) {
                    var s = null != arguments[n] ? arguments[n] : {};
                    n % 2
                        ? t(Object(s), !0).forEach(function (t) {
                              e(i, t, s[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                        : t(Object(s)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                          });
                }
                return i;
            }
            function n(e) {
                return Array.from(new Set(e));
            }
            function s() {
                return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
            }
            function r(e, t) {
                return e == t;
            }
            function a(e, t) {
                "template" !== e.tagName.toLowerCase()
                    ? console.warn(`Alpine: [${t}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${t}`)
                    : 1 !== e.content.childElementCount && console.warn(`Alpine: <template> tag with [${t}] encountered with an unexpected number of root elements. Make sure <template> has a single root element. `);
            }
            function o(e) {
                return e.toLowerCase().replace(/-(\w)/g, (e, t) => t.toUpperCase());
            }
            function l(e, t) {
                var i;
                return function () {
                    var n = this,
                        s = arguments,
                        r = function () {
                            (i = null), e.apply(n, s);
                        };
                    clearTimeout(i), (i = setTimeout(r, t));
                };
            }
            const d = (e, t, i) => {
                if ((console.warn(`Alpine Error: "${i}"\n\nExpression: "${t}"\nElement:`, e), !s())) throw (Object.assign(i, { el: e, expression: t }), i);
            };
            function u(e, { el: t, expression: i }) {
                try {
                    const n = e();
                    return n instanceof Promise ? n.catch((e) => d(t, i, e)) : n;
                } catch (e) {
                    d(t, i, e);
                }
            }
            function c(e, t, i, n = {}) {
                return u(() => ("function" == typeof t ? t.call(i) : new Function(["$data", ...Object.keys(n)], `var __alpine_result; with($data) { __alpine_result = ${t} }; return __alpine_result`)(i, ...Object.values(n))), {
                    el: e,
                    expression: t,
                });
            }
            const h = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;
            function p(e) {
                const t = m(e.name);
                return h.test(t);
            }
            function f(e, t, i) {
                let n = Array.from(e.attributes).filter(p).map(v),
                    s = n.filter((e) => "spread" === e.type)[0];
                if (s) {
                    let i = c(e, s.expression, t.$data);
                    n = n.concat(Object.entries(i).map(([e, t]) => v({ name: e, value: t })));
                }
                return i
                    ? n.filter((e) => e.type === i)
                    : (function (e) {
                          let t = ["bind", "model", "show", "catch-all"];
                          return e.sort((e, i) => {
                              let n = -1 === t.indexOf(e.type) ? "catch-all" : e.type,
                                  s = -1 === t.indexOf(i.type) ? "catch-all" : i.type;
                              return t.indexOf(n) - t.indexOf(s);
                          });
                      })(n);
            }
            function v({ name: e, value: t }) {
                const i = m(e),
                    n = i.match(h),
                    s = i.match(/:([a-zA-Z0-9\-:]+)/),
                    r = i.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
                return { type: n ? n[1] : null, value: s ? s[1] : null, modifiers: r.map((e) => e.replace(".", "")), expression: t };
            }
            function m(e) {
                return e.startsWith("@") ? e.replace("@", "x-on:") : e.startsWith(":") ? e.replace(":", "x-bind:") : e;
            }
            function g(e, t = Boolean) {
                return e.split(" ").filter(t);
            }
            function b(e, t, i, n, s = !1) {
                if (s) return t();
                if (e.__x_transition && "in" === e.__x_transition.type) return;
                const r = f(e, n, "transition"),
                    a = f(e, n, "show")[0];
                if (a && a.modifiers.includes("transition")) {
                    let n = a.modifiers;
                    if (n.includes("out") && !n.includes("in")) return t();
                    const s = n.includes("in") && n.includes("out");
                    (n = s ? n.filter((e, t) => t < n.indexOf("out")) : n),
                        (function (e, t, i, n) {
                            const s = { duration: w(t, "duration", 150), origin: w(t, "origin", "center"), first: { opacity: 0, scale: w(t, "scale", 95) }, second: { opacity: 1, scale: 100 } };
                            x(e, t, i, () => {}, n, s, "in");
                        })(e, n, t, i);
                } else
                    r.some((e) => ["enter", "enter-start", "enter-end"].includes(e.value))
                        ? (function (e, t, i, n, s) {
                              const r = g(E((i.find((e) => "enter" === e.value) || { expression: "" }).expression, e, t)),
                                  a = g(E((i.find((e) => "enter-start" === e.value) || { expression: "" }).expression, e, t)),
                                  o = g(E((i.find((e) => "enter-end" === e.value) || { expression: "" }).expression, e, t));
                              T(e, r, a, o, n, () => {}, "in", s);
                          })(e, n, r, t, i)
                        : t();
            }
            function y(e, t, i, n, s = !1) {
                if (s) return t();
                if (e.__x_transition && "out" === e.__x_transition.type) return;
                const r = f(e, n, "transition"),
                    a = f(e, n, "show")[0];
                if (a && a.modifiers.includes("transition")) {
                    let n = a.modifiers;
                    if (n.includes("in") && !n.includes("out")) return t();
                    const s = n.includes("in") && n.includes("out");
                    (n = s ? n.filter((e, t) => t > n.indexOf("out")) : n),
                        (function (e, t, i, n, s) {
                            const r = { duration: i ? w(t, "duration", 150) : w(t, "duration", 150) / 2, origin: w(t, "origin", "center"), first: { opacity: 1, scale: 100 }, second: { opacity: 0, scale: w(t, "scale", 95) } };
                            x(e, t, () => {}, n, s, r, "out");
                        })(e, n, s, t, i);
                } else
                    r.some((e) => ["leave", "leave-start", "leave-end"].includes(e.value))
                        ? (function (e, t, i, n, s) {
                              const r = g(E((i.find((e) => "leave" === e.value) || { expression: "" }).expression, e, t)),
                                  a = g(E((i.find((e) => "leave-start" === e.value) || { expression: "" }).expression, e, t)),
                                  o = g(E((i.find((e) => "leave-end" === e.value) || { expression: "" }).expression, e, t));
                              T(e, r, a, o, () => {}, n, "out", s);
                          })(e, n, r, t, i)
                        : t();
            }
            function w(e, t, i) {
                if (-1 === e.indexOf(t)) return i;
                const n = e[e.indexOf(t) + 1];
                if (!n) return i;
                if ("scale" === t && !C(n)) return i;
                if ("duration" === t) {
                    let e = n.match(/([0-9]+)ms/);
                    if (e) return e[1];
                }
                return "origin" === t && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [n, e[e.indexOf(t) + 2]].join(" ") : n;
            }
            function x(e, t, i, n, s, r, a) {
                e.__x_transition && e.__x_transition.cancel && e.__x_transition.cancel();
                const o = e.style.opacity,
                    l = e.style.transform,
                    d = e.style.transformOrigin,
                    u = !t.includes("opacity") && !t.includes("scale"),
                    c = u || t.includes("opacity"),
                    h = u || t.includes("scale"),
                    p = {
                        start() {
                            c && (e.style.opacity = r.first.opacity), h && (e.style.transform = `scale(${r.first.scale / 100})`);
                        },
                        during() {
                            h && (e.style.transformOrigin = r.origin),
                                (e.style.transitionProperty = [c ? "opacity" : "", h ? "transform" : ""].join(" ").trim()),
                                (e.style.transitionDuration = r.duration / 1e3 + "s"),
                                (e.style.transitionTimingFunction = "cubic-bezier(0.4, 0.0, 0.2, 1)");
                        },
                        show() {
                            i();
                        },
                        end() {
                            c && (e.style.opacity = r.second.opacity), h && (e.style.transform = `scale(${r.second.scale / 100})`);
                        },
                        hide() {
                            n();
                        },
                        cleanup() {
                            c && (e.style.opacity = o), h && (e.style.transform = l), h && (e.style.transformOrigin = d), (e.style.transitionProperty = null), (e.style.transitionDuration = null), (e.style.transitionTimingFunction = null);
                        },
                    };
                S(e, p, a, s);
            }
            const E = (e, t, i) => ("function" == typeof e ? i.evaluateReturnExpression(t, e) : e);
            function T(e, t, i, n, s, r, a, o) {
                e.__x_transition && e.__x_transition.cancel && e.__x_transition.cancel();
                const l = e.__x_original_classes || [],
                    d = {
                        start() {
                            e.classList.add(...i);
                        },
                        during() {
                            e.classList.add(...t);
                        },
                        show() {
                            s();
                        },
                        end() {
                            e.classList.remove(...i.filter((e) => !l.includes(e))), e.classList.add(...n);
                        },
                        hide() {
                            r();
                        },
                        cleanup() {
                            e.classList.remove(...t.filter((e) => !l.includes(e))), e.classList.remove(...n.filter((e) => !l.includes(e)));
                        },
                    };
                S(e, d, a, o);
            }
            function S(e, t, i, n) {
                const s = k(() => {
                    t.hide(), e.isConnected && t.cleanup(), delete e.__x_transition;
                });
                (e.__x_transition = {
                    type: i,
                    cancel: k(() => {
                        n("cancelled"), s();
                    }),
                    finish: s,
                    nextFrame: null,
                }),
                    t.start(),
                    t.during(),
                    (e.__x_transition.nextFrame = requestAnimationFrame(() => {
                        let i = 1e3 * Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", ""));
                        0 === i && (i = 1e3 * Number(getComputedStyle(e).animationDuration.replace("s", ""))),
                            t.show(),
                            (e.__x_transition.nextFrame = requestAnimationFrame(() => {
                                t.end(), setTimeout(e.__x_transition.finish, i);
                            }));
                    }));
            }
            function C(e) {
                return !Array.isArray(e) && !isNaN(e);
            }
            function k(e) {
                let t = !1;
                return function () {
                    t || ((t = !0), e.apply(this, arguments));
                };
            }
            function O(e, t, n, s, r) {
                a(t, "x-for");
                let o = M("function" == typeof n ? e.evaluateReturnExpression(t, n) : n),
                    l = (function (e, t, i, n) {
                        let s = f(t, e, "if")[0];
                        if (s && !e.evaluateReturnExpression(t, s.expression)) return [];
                        let r = e.evaluateReturnExpression(t, i.items, n);
                        return C(r) && r >= 0 && (r = Array.from(Array(r).keys(), (e) => e + 1)), r;
                    })(e, t, o, r),
                    d = t;
                l.forEach((n, a) => {
                    let u = (function (e, t, n, s, r) {
                            let a = r ? i({}, r) : {};
                            return (a[e.item] = t), e.index && (a[e.index] = n), e.collection && (a[e.collection] = s), a;
                        })(o, n, a, l, r()),
                        c = (function (e, t, i, n) {
                            let s = f(t, e, "bind").filter((e) => "key" === e.value)[0];
                            return s ? e.evaluateReturnExpression(t, s.expression, () => n) : i;
                        })(e, t, a, u),
                        h = (function (e, t) {
                            if (!e) return;
                            if (void 0 === e.__x_for_key) return;
                            if (e.__x_for_key === t) return e;
                            let i = e;
                            for (; i; ) {
                                if (i.__x_for_key === t) return i.parentElement.insertBefore(i, e);
                                i = !(!i.nextElementSibling || void 0 === i.nextElementSibling.__x_for_key) && i.nextElementSibling;
                            }
                        })(d.nextElementSibling, c);
                    h
                        ? (delete h.__x_for_key, (h.__x_for = u), e.updateElements(h, () => h.__x_for))
                        : ((h = (function (e, t) {
                              let i = document.importNode(e.content, !0);
                              return t.parentElement.insertBefore(i, t.nextElementSibling), t.nextElementSibling;
                          })(t, d)),
                          b(
                              h,
                              () => {},
                              () => {},
                              e,
                              s
                          ),
                          (h.__x_for = u),
                          e.initializeElements(h, () => h.__x_for)),
                        (d = h),
                        (d.__x_for_key = c);
                }),
                    (function (e, t) {
                        for (var i = !(!e.nextElementSibling || void 0 === e.nextElementSibling.__x_for_key) && e.nextElementSibling; i; ) {
                            let e = i,
                                n = i.nextElementSibling;
                            y(
                                i,
                                () => {
                                    e.remove();
                                },
                                () => {},
                                t
                            ),
                                (i = !(!n || void 0 === n.__x_for_key) && n);
                        }
                    })(d, e);
            }
            function M(e) {
                let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                    i = String(e).match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);
                if (!i) return;
                let n = {};
                n.items = i[2].trim();
                let s = i[1].trim().replace(/^\(|\)$/g, ""),
                    r = s.match(t);
                return r ? ((n.item = s.replace(t, "").trim()), (n.index = r[1].trim()), r[2] && (n.collection = r[2].trim())) : (n.item = s), n;
            }
            function P(e, t, i, s, a, l, d) {
                var u = e.evaluateReturnExpression(t, s, a);
                if ("value" === i) {
                    if (ve.ignoreFocusedForValueBinding && document.activeElement.isSameNode(t)) return;
                    if ((void 0 === u && String(s).match(/\./) && (u = ""), "radio" === t.type)) void 0 === t.attributes.value && "bind" === l ? (t.value = u) : "bind" !== l && (t.checked = r(t.value, u));
                    else if ("checkbox" === t.type)
                        "boolean" == typeof u || [null, void 0].includes(u) || "bind" !== l ? "bind" !== l && (Array.isArray(u) ? (t.checked = u.some((e) => r(e, t.value))) : (t.checked = !!u)) : (t.value = String(u));
                    else if ("SELECT" === t.tagName)
                        !(function (e, t) {
                            const i = [].concat(t).map((e) => e + "");
                            Array.from(e.options).forEach((e) => {
                                e.selected = i.includes(e.value || e.text);
                            });
                        })(t, u);
                    else {
                        if (t.value === u) return;
                        t.value = u;
                    }
                } else if ("class" === i)
                    if (Array.isArray(u)) {
                        const e = t.__x_original_classes || [];
                        t.setAttribute("class", n(e.concat(u)).join(" "));
                    } else if ("object" == typeof u)
                        Object.keys(u)
                            .sort((e, t) => u[e] - u[t])
                            .forEach((e) => {
                                u[e] ? g(e).forEach((e) => t.classList.add(e)) : g(e).forEach((e) => t.classList.remove(e));
                            });
                    else {
                        const e = t.__x_original_classes || [],
                            i = u ? g(u) : [];
                        t.setAttribute("class", n(e.concat(i)).join(" "));
                    }
                else
                    (i = d.includes("camel") ? o(i) : i),
                        [null, void 0, !1].includes(u)
                            ? t.removeAttribute(i)
                            : (function (e) {
                                  return [
                                      "disabled",
                                      "checked",
                                      "required",
                                      "readonly",
                                      "hidden",
                                      "open",
                                      "selected",
                                      "autofocus",
                                      "itemscope",
                                      "multiple",
                                      "novalidate",
                                      "allowfullscreen",
                                      "allowpaymentrequest",
                                      "formnovalidate",
                                      "autoplay",
                                      "controls",
                                      "loop",
                                      "muted",
                                      "playsinline",
                                      "default",
                                      "ismap",
                                      "reversed",
                                      "async",
                                      "defer",
                                      "nomodule",
                                  ].includes(e);
                              })(i)
                            ? _(t, i, i)
                            : _(t, i, u);
            }
            function _(e, t, i) {
                e.getAttribute(t) != i && e.setAttribute(t, i);
            }
            function L(e, t, i, n, s, r = {}) {
                const a = { passive: n.includes("passive") };
                let d, u;
                if (
                    (n.includes("camel") && (i = o(i)),
                    n.includes("away")
                        ? ((u = document),
                          (d = (o) => {
                              t.contains(o.target) || (t.offsetWidth < 1 && t.offsetHeight < 1) || (A(e, s, o, r), n.includes("once") && document.removeEventListener(i, d, a));
                          }))
                        : ((u = n.includes("window") ? window : n.includes("document") ? document : t),
                          (d = (o) => {
                              (u !== window && u !== document) || document.body.contains(t)
                                  ? ((function (e) {
                                        return ["keydown", "keyup"].includes(e);
                                    })(i) &&
                                        (function (e, t) {
                                            let i = t.filter((e) => !["window", "document", "prevent", "stop"].includes(e));
                                            if (i.includes("debounce")) {
                                                let e = i.indexOf("debounce");
                                                i.splice(e, C((i[e + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
                                            }
                                            if (0 === i.length) return !1;
                                            if (1 === i.length && i[0] === z(e.key)) return !1;
                                            const n = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((e) => i.includes(e));
                                            return (i = i.filter((e) => !n.includes(e))), !(n.length > 0 && n.filter((t) => (("cmd" !== t && "super" !== t) || (t = "meta"), e[t + "Key"])).length === n.length && i[0] === z(e.key));
                                        })(o, n)) ||
                                    (n.includes("prevent") && o.preventDefault(), n.includes("stop") && o.stopPropagation(), n.includes("self") && o.target !== t) ||
                                    A(e, s, o, r).then((e) => {
                                        !1 === e ? o.preventDefault() : n.includes("once") && u.removeEventListener(i, d, a);
                                    })
                                  : u.removeEventListener(i, d, a);
                          })),
                    n.includes("debounce"))
                ) {
                    let e = n[n.indexOf("debounce") + 1] || "invalid-wait",
                        t = C(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
                    d = l(d, t);
                }
                u.addEventListener(i, d, a);
            }
            function A(e, t, n, s) {
                return e.evaluateCommandExpression(n.target, t, () => i(i({}, s()), {}, { $event: n }));
            }
            function z(e) {
                switch (e) {
                    case "/":
                        return "slash";
                    case " ":
                    case "Spacebar":
                        return "space";
                    default:
                        return (
                            e &&
                            e
                                .replace(/([a-z])([A-Z])/g, "$1-$2")
                                .replace(/[_\s]/, "-")
                                .toLowerCase()
                        );
                }
            }
            function D(e, t, i) {
                return (
                    "radio" === e.type && (e.hasAttribute("name") || e.setAttribute("name", i)),
                    (i, n) => {
                        if (i instanceof CustomEvent && i.detail) return i.detail;
                        if ("checkbox" === e.type) {
                            if (Array.isArray(n)) {
                                const e = t.includes("number") ? j(i.target.value) : i.target.value;
                                return i.target.checked ? n.concat([e]) : n.filter((t) => !r(t, e));
                            }
                            return i.target.checked;
                        }
                        if ("select" === e.tagName.toLowerCase() && e.multiple)
                            return t.includes("number") ? Array.from(i.target.selectedOptions).map((e) => j(e.value || e.text)) : Array.from(i.target.selectedOptions).map((e) => e.value || e.text);
                        {
                            const e = i.target.value;
                            return t.includes("number") ? j(e) : t.includes("trim") ? e.trim() : e;
                        }
                    }
                );
            }
            function j(e) {
                const t = e ? parseFloat(e) : null;
                return C(t) ? t : e;
            }
            const { isArray: N } = Array,
                { getPrototypeOf: $, create: I, defineProperty: B, defineProperties: G, isExtensible: F, getOwnPropertyDescriptor: R, getOwnPropertyNames: H, getOwnPropertySymbols: q, preventExtensions: V, hasOwnProperty: W } = Object,
                { push: Y, concat: X, map: U } = Array.prototype;
            function K(e) {
                return void 0 === e;
            }
            function Z(e) {
                return "function" == typeof e;
            }
            const J = new WeakMap();
            function Q(e, t) {
                J.set(e, t);
            }
            const ee = (e) => J.get(e) || e;
            function te(e, t) {
                return e.valueIsObservable(t) ? e.getProxy(t) : t;
            }
            function ie(e, t, i) {
                X.call(H(i), q(i)).forEach((n) => {
                    let s = R(i, n);
                    s.configurable || (s = he(e, s, te)), B(t, n, s);
                }),
                    V(t);
            }
            class ne {
                constructor(e, t) {
                    (this.originalTarget = t), (this.membrane = e);
                }
                get(e, t) {
                    const { originalTarget: i, membrane: n } = this,
                        s = i[t],
                        { valueObserved: r } = n;
                    return r(i, t), n.getProxy(s);
                }
                set(e, t, i) {
                    const {
                        originalTarget: n,
                        membrane: { valueMutated: s },
                    } = this;
                    return n[t] !== i ? ((n[t] = i), s(n, t)) : "length" === t && N(n) && s(n, t), !0;
                }
                deleteProperty(e, t) {
                    const {
                        originalTarget: i,
                        membrane: { valueMutated: n },
                    } = this;
                    return delete i[t], n(i, t), !0;
                }
                apply(e, t, i) {}
                construct(e, t, i) {}
                has(e, t) {
                    const {
                        originalTarget: i,
                        membrane: { valueObserved: n },
                    } = this;
                    return n(i, t), t in i;
                }
                ownKeys(e) {
                    const { originalTarget: t } = this;
                    return X.call(H(t), q(t));
                }
                isExtensible(e) {
                    const t = F(e);
                    if (!t) return t;
                    const { originalTarget: i, membrane: n } = this,
                        s = F(i);
                    return s || ie(n, e, i), s;
                }
                setPrototypeOf(e, t) {}
                getPrototypeOf(e) {
                    const { originalTarget: t } = this;
                    return $(t);
                }
                getOwnPropertyDescriptor(e, t) {
                    const { originalTarget: i, membrane: n } = this,
                        { valueObserved: s } = this.membrane;
                    s(i, t);
                    let r = R(i, t);
                    if (K(r)) return r;
                    const a = R(e, t);
                    return K(a) ? ((r = he(n, r, te)), r.configurable || B(e, t, r), r) : a;
                }
                preventExtensions(e) {
                    const { originalTarget: t, membrane: i } = this;
                    return ie(i, e, t), V(t), !0;
                }
                defineProperty(e, t, i) {
                    const { originalTarget: n, membrane: s } = this,
                        { valueMutated: r } = s,
                        { configurable: a } = i;
                    if (W.call(i, "writable") && !W.call(i, "value")) {
                        const e = R(n, t);
                        i.value = e.value;
                    }
                    return (
                        B(
                            n,
                            t,
                            (function (e) {
                                return W.call(e, "value") && (e.value = ee(e.value)), e;
                            })(i)
                        ),
                        !1 === a && B(e, t, he(s, i, te)),
                        r(n, t),
                        !0
                    );
                }
            }
            function se(e, t) {
                return e.valueIsObservable(t) ? e.getReadOnlyProxy(t) : t;
            }
            class re {
                constructor(e, t) {
                    (this.originalTarget = t), (this.membrane = e);
                }
                get(e, t) {
                    const { membrane: i, originalTarget: n } = this,
                        s = n[t],
                        { valueObserved: r } = i;
                    return r(n, t), i.getReadOnlyProxy(s);
                }
                set(e, t, i) {
                    return !1;
                }
                deleteProperty(e, t) {
                    return !1;
                }
                apply(e, t, i) {}
                construct(e, t, i) {}
                has(e, t) {
                    const {
                        originalTarget: i,
                        membrane: { valueObserved: n },
                    } = this;
                    return n(i, t), t in i;
                }
                ownKeys(e) {
                    const { originalTarget: t } = this;
                    return X.call(H(t), q(t));
                }
                setPrototypeOf(e, t) {}
                getOwnPropertyDescriptor(e, t) {
                    const { originalTarget: i, membrane: n } = this,
                        { valueObserved: s } = n;
                    s(i, t);
                    let r = R(i, t);
                    if (K(r)) return r;
                    const a = R(e, t);
                    return K(a) ? ((r = he(n, r, se)), W.call(r, "set") && (r.set = void 0), r.configurable || B(e, t, r), r) : a;
                }
                preventExtensions(e) {
                    return !1;
                }
                defineProperty(e, t, i) {
                    return !1;
                }
            }
            function ae(e) {
                let t = void 0;
                return N(e) ? (t = []) : "object" == typeof e && (t = {}), t;
            }
            const oe = Object.prototype;
            function le(e) {
                if (null === e) return !1;
                if ("object" != typeof e) return !1;
                if (N(e)) return !0;
                const t = $(e);
                return t === oe || null === t || null === $(t);
            }
            const de = (e, t) => {},
                ue = (e, t) => {},
                ce = (e) => e;
            function he(e, t, i) {
                const { set: n, get: s } = t;
                return (
                    W.call(t, "value")
                        ? (t.value = i(e, t.value))
                        : (K(s) ||
                              (t.get = function () {
                                  return i(e, s.call(ee(this)));
                              }),
                          K(n) ||
                              (t.set = function (t) {
                                  n.call(ee(this), e.unwrapProxy(t));
                              })),
                    t
                );
            }
            class pe {
                constructor(e) {
                    if (((this.valueDistortion = ce), (this.valueMutated = ue), (this.valueObserved = de), (this.valueIsObservable = le), (this.objectGraph = new WeakMap()), !K(e))) {
                        const { valueDistortion: t, valueMutated: i, valueObserved: n, valueIsObservable: s } = e;
                        (this.valueDistortion = Z(t) ? t : ce), (this.valueMutated = Z(i) ? i : ue), (this.valueObserved = Z(n) ? n : de), (this.valueIsObservable = Z(s) ? s : le);
                    }
                }
                getProxy(e) {
                    const t = ee(e),
                        i = this.valueDistortion(t);
                    if (this.valueIsObservable(i)) {
                        const n = this.getReactiveState(t, i);
                        return n.readOnly === e ? e : n.reactive;
                    }
                    return i;
                }
                getReadOnlyProxy(e) {
                    e = ee(e);
                    const t = this.valueDistortion(e);
                    return this.valueIsObservable(t) ? this.getReactiveState(e, t).readOnly : t;
                }
                unwrapProxy(e) {
                    return ee(e);
                }
                getReactiveState(e, t) {
                    const { objectGraph: i } = this;
                    let n = i.get(t);
                    if (n) return n;
                    const s = this;
                    return (
                        (n = {
                            get reactive() {
                                const i = new ne(s, t),
                                    n = new Proxy(ae(t), i);
                                return Q(n, e), B(this, "reactive", { value: n }), n;
                            },
                            get readOnly() {
                                const i = new re(s, t),
                                    n = new Proxy(ae(t), i);
                                return Q(n, e), B(this, "readOnly", { value: n }), n;
                            },
                        }),
                        i.set(t, n),
                        n
                    );
                }
            }
            class fe {
                constructor(e, t = null) {
                    this.$el = e;
                    const i = this.$el.getAttribute("x-data"),
                        n = "" === i ? "{}" : i,
                        s = this.$el.getAttribute("x-init");
                    let r = { $el: this.$el },
                        a = t ? t.$el : this.$el;
                    Object.entries(ve.magicProperties).forEach(([e, t]) => {
                        Object.defineProperty(r, "$" + e, {
                            get: function () {
                                return t(a);
                            },
                        });
                    }),
                        (this.unobservedData = t ? t.getUnobservedData() : c(e, n, r));
                    let { membrane: o, data: l } = this.wrapDataInObservable(this.unobservedData);
                    var d;
                    (this.$data = l),
                        (this.membrane = o),
                        (this.unobservedData.$el = this.$el),
                        (this.unobservedData.$refs = this.getRefsProxy()),
                        (this.nextTickStack = []),
                        (this.unobservedData.$nextTick = (e) => {
                            this.nextTickStack.push(e);
                        }),
                        (this.watchers = {}),
                        (this.unobservedData.$watch = (e, t) => {
                            this.watchers[e] || (this.watchers[e] = []), this.watchers[e].push(t);
                        }),
                        Object.entries(ve.magicProperties).forEach(([e, t]) => {
                            Object.defineProperty(this.unobservedData, "$" + e, {
                                get: function () {
                                    return t(a, this.$el);
                                },
                            });
                        }),
                        (this.showDirectiveStack = []),
                        this.showDirectiveLastElement,
                        t || ve.onBeforeComponentInitializeds.forEach((e) => e(this)),
                        s && !t && ((this.pauseReactivity = !0), (d = this.evaluateReturnExpression(this.$el, s)), (this.pauseReactivity = !1)),
                        this.initializeElements(this.$el, () => {}, t),
                        this.listenForNewElementsToInitialize(),
                        "function" == typeof d && d.call(this.$data),
                        t ||
                            setTimeout(() => {
                                ve.onComponentInitializeds.forEach((e) => e(this));
                            }, 0);
                }
                getUnobservedData() {
                    return (function (e, t) {
                        let i = e.unwrapProxy(t),
                            n = {};
                        return (
                            Object.keys(i).forEach((e) => {
                                ["$el", "$refs", "$nextTick", "$watch"].includes(e) || (n[e] = i[e]);
                            }),
                            n
                        );
                    })(this.membrane, this.$data);
                }
                wrapDataInObservable(e) {
                    var t = this;
                    let i = l(function () {
                        t.updateElements(t.$el);
                    }, 0);
                    return (function (e, t) {
                        let i = new pe({
                            valueMutated(e, i) {
                                t(e, i);
                            },
                        });
                        return { data: i.getProxy(e), membrane: i };
                    })(e, (e, n) => {
                        t.watchers[n]
                            ? t.watchers[n].forEach((t) => t(e[n]))
                            : Array.isArray(e)
                            ? Object.keys(t.watchers).forEach((i) => {
                                  let s = i.split(".");
                                  "length" !== n && s.reduce((n, s) => (Object.is(e, n[s]) && t.watchers[i].forEach((t) => t(e)), n[s]), t.unobservedData);
                              })
                            : Object.keys(t.watchers)
                                  .filter((e) => e.includes("."))
                                  .forEach((i) => {
                                      let s = i.split(".");
                                      n === s[s.length - 1] && s.reduce((s, r) => (Object.is(e, s) && t.watchers[i].forEach((t) => t(e[n])), s[r]), t.unobservedData);
                                  }),
                            t.pauseReactivity || i();
                    });
                }
                walkAndSkipNestedComponents(e, t, i = () => {}) {
                    !(function e(t, i) {
                        if (!1 === i(t)) return;
                        let n = t.firstElementChild;
                        for (; n; ) e(n, i), (n = n.nextElementSibling);
                    })(e, (e) => (e.hasAttribute("x-data") && !e.isSameNode(this.$el) ? (e.__x || i(e), !1) : t(e)));
                }
                initializeElements(e, t = () => {}, i = !1) {
                    this.walkAndSkipNestedComponents(
                        e,
                        (e) => void 0 === e.__x_for_key && void 0 === e.__x_inserted_me && void this.initializeElement(e, t, !i),
                        (e) => {
                            i || (e.__x = new fe(e));
                        }
                    ),
                        this.executeAndClearRemainingShowDirectiveStack(),
                        this.executeAndClearNextTickStack(e);
                }
                initializeElement(e, t, i = !0) {
                    e.hasAttribute("class") && f(e, this).length > 0 && (e.__x_original_classes = g(e.getAttribute("class"))), i && this.registerListeners(e, t), this.resolveBoundAttributes(e, !0, t);
                }
                updateElements(e, t = () => {}) {
                    this.walkAndSkipNestedComponents(
                        e,
                        (e) => {
                            if (void 0 !== e.__x_for_key && !e.isSameNode(this.$el)) return !1;
                            this.updateElement(e, t);
                        },
                        (e) => {
                            e.__x = new fe(e);
                        }
                    ),
                        this.executeAndClearRemainingShowDirectiveStack(),
                        this.executeAndClearNextTickStack(e);
                }
                executeAndClearNextTickStack(e) {
                    e === this.$el &&
                        this.nextTickStack.length > 0 &&
                        requestAnimationFrame(() => {
                            for (; this.nextTickStack.length > 0; ) this.nextTickStack.shift()();
                        });
                }
                executeAndClearRemainingShowDirectiveStack() {
                    this.showDirectiveStack
                        .reverse()
                        .map(
                            (e) =>
                                new Promise((t, i) => {
                                    e(t, i);
                                })
                        )
                        .reduce(
                            (e, t) =>
                                e.then(() =>
                                    t.then((e) => {
                                        e();
                                    })
                                ),
                            Promise.resolve(() => {})
                        )
                        .catch((e) => {
                            if ("cancelled" !== e) throw e;
                        }),
                        (this.showDirectiveStack = []),
                        (this.showDirectiveLastElement = void 0);
                }
                updateElement(e, t) {
                    this.resolveBoundAttributes(e, !1, t);
                }
                registerListeners(e, t) {
                    f(e, this).forEach(({ type: n, value: s, modifiers: r, expression: a }) => {
                        switch (n) {
                            case "on":
                                L(this, e, s, r, a, t);
                                break;
                            case "model":
                                !(function (e, t, n, s, r) {
                                    var a = "select" === t.tagName.toLowerCase() || ["checkbox", "radio"].includes(t.type) || n.includes("lazy") ? "change" : "input";
                                    L(e, t, a, n, `${s} = rightSideOfExpression($event, ${s})`, () => i(i({}, r()), {}, { rightSideOfExpression: D(t, n, s) }));
                                })(this, e, r, a, t);
                        }
                    });
                }
                resolveBoundAttributes(e, t = !1, i) {
                    let n = f(e, this);
                    n.forEach(({ type: s, value: r, modifiers: o, expression: l }) => {
                        switch (s) {
                            case "model":
                                P(this, e, "value", l, i, s, o);
                                break;
                            case "bind":
                                if ("template" === e.tagName.toLowerCase() && "key" === r) return;
                                P(this, e, r, l, i, s, o);
                                break;
                            case "text":
                                var d = this.evaluateReturnExpression(e, l, i);
                                !(function (e, t, i) {
                                    void 0 === t && String(i).match(/\./) && (t = ""), (e.textContent = t);
                                })(e, d, l);
                                break;
                            case "html":
                                !(function (e, t, i, n) {
                                    t.innerHTML = e.evaluateReturnExpression(t, i, n);
                                })(this, e, l, i);
                                break;
                            case "show":
                                (d = this.evaluateReturnExpression(e, l, i)),
                                    (function (e, t, i, n, s = !1) {
                                        const r = () => {
                                                (t.style.display = "none"), (t.__x_is_shown = !1);
                                            },
                                            a = () => {
                                                1 === t.style.length && "none" === t.style.display ? t.removeAttribute("style") : t.style.removeProperty("display"), (t.__x_is_shown = !0);
                                            };
                                        if (!0 === s) return void (i ? a() : r());
                                        const o = (n, s) => {
                                            i
                                                ? (("none" === t.style.display || t.__x_transition) &&
                                                      b(
                                                          t,
                                                          () => {
                                                              a();
                                                          },
                                                          s,
                                                          e
                                                      ),
                                                  n(() => {}))
                                                : "none" !== t.style.display
                                                ? y(
                                                      t,
                                                      () => {
                                                          n(() => {
                                                              r();
                                                          });
                                                      },
                                                      s,
                                                      e
                                                  )
                                                : n(() => {});
                                        };
                                        n.includes("immediate")
                                            ? o(
                                                  (e) => e(),
                                                  () => {}
                                              )
                                            : (e.showDirectiveLastElement && !e.showDirectiveLastElement.contains(t) && e.executeAndClearRemainingShowDirectiveStack(), e.showDirectiveStack.push(o), (e.showDirectiveLastElement = t));
                                    })(this, e, d, o, t);
                                break;
                            case "if":
                                if (n.some((e) => "for" === e.type)) return;
                                (d = this.evaluateReturnExpression(e, l, i)),
                                    (function (e, t, i, n, s) {
                                        a(t, "x-if");
                                        const r = t.nextElementSibling && !0 === t.nextElementSibling.__x_inserted_me;
                                        if (!i || (r && !t.__x_transition))
                                            !i &&
                                                r &&
                                                y(
                                                    t.nextElementSibling,
                                                    () => {
                                                        t.nextElementSibling.remove();
                                                    },
                                                    () => {},
                                                    e,
                                                    n
                                                );
                                        else {
                                            const i = document.importNode(t.content, !0);
                                            t.parentElement.insertBefore(i, t.nextElementSibling),
                                                b(
                                                    t.nextElementSibling,
                                                    () => {},
                                                    () => {},
                                                    e,
                                                    n
                                                ),
                                                e.initializeElements(t.nextElementSibling, s),
                                                (t.nextElementSibling.__x_inserted_me = !0);
                                        }
                                    })(this, e, d, t, i);
                                break;
                            case "for":
                                O(this, e, l, t, i);
                                break;
                            case "cloak":
                                e.removeAttribute("x-cloak");
                        }
                    });
                }
                evaluateReturnExpression(e, t, n = () => {}) {
                    return c(e, t, this.$data, i(i({}, n()), {}, { $dispatch: this.getDispatchFunction(e) }));
                }
                evaluateCommandExpression(e, t, n = () => {}) {
                    return (function (e, t, i, n = {}) {
                        return u(
                            () => {
                                if ("function" == typeof t) return Promise.resolve(t.call(i, n.$event));
                                let e = Function;
                                if (((e = Object.getPrototypeOf(async function () {}).constructor), Object.keys(i).includes(t))) {
                                    let e = new Function(["dataContext", ...Object.keys(n)], `with(dataContext) { return ${t} }`)(i, ...Object.values(n));
                                    return "function" == typeof e ? Promise.resolve(e.call(i, n.$event)) : Promise.resolve();
                                }
                                return Promise.resolve(new e(["dataContext", ...Object.keys(n)], `with(dataContext) { ${t} }`)(i, ...Object.values(n)));
                            },
                            { el: e, expression: t }
                        );
                    })(e, t, this.$data, i(i({}, n()), {}, { $dispatch: this.getDispatchFunction(e) }));
                }
                getDispatchFunction(e) {
                    return (t, i = {}) => {
                        e.dispatchEvent(new CustomEvent(t, { detail: i, bubbles: !0 }));
                    };
                }
                listenForNewElementsToInitialize() {
                    const e = this.$el;
                    new MutationObserver((e) => {
                        for (let t = 0; t < e.length; t++) {
                            const i = e[t].target.closest("[x-data]");
                            if (i && i.isSameNode(this.$el)) {
                                if ("attributes" === e[t].type && "x-data" === e[t].attributeName) {
                                    const i = e[t].target.getAttribute("x-data") || "{}",
                                        n = c(this.$el, i, { $el: this.$el });
                                    Object.keys(n).forEach((e) => {
                                        this.$data[e] !== n[e] && (this.$data[e] = n[e]);
                                    });
                                }
                                e[t].addedNodes.length > 0 &&
                                    e[t].addedNodes.forEach((e) => {
                                        1 !== e.nodeType || e.__x_inserted_me || (!e.matches("[x-data]") || e.__x ? this.initializeElements(e) : (e.__x = new fe(e)));
                                    });
                            }
                        }
                    }).observe(e, { childList: !0, attributes: !0, subtree: !0 });
                }
                getRefsProxy() {
                    var e = this;
                    return new Proxy(
                        {},
                        {
                            get(t, i) {
                                return (
                                    "$isAlpineProxy" === i ||
                                    (e.walkAndSkipNestedComponents(e.$el, (e) => {
                                        e.hasAttribute("x-ref") && e.getAttribute("x-ref") === i && (n = e);
                                    }),
                                    n)
                                );
                                var n;
                            },
                        }
                    );
                }
            }
            const ve = {
                version: "2.8.2",
                pauseMutationObserver: !1,
                magicProperties: {},
                onComponentInitializeds: [],
                onBeforeComponentInitializeds: [],
                ignoreFocusedForValueBinding: !1,
                start: async function () {
                    s() ||
                        (await new Promise((e) => {
                            "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", e) : e();
                        })),
                        this.discoverComponents((e) => {
                            this.initializeComponent(e);
                        }),
                        document.addEventListener("turbolinks:load", () => {
                            this.discoverUninitializedComponents((e) => {
                                this.initializeComponent(e);
                            });
                        }),
                        this.listenForNewUninitializedComponentsAtRunTime();
                },
                discoverComponents: function (e) {
                    document.querySelectorAll("[x-data]").forEach((t) => {
                        e(t);
                    });
                },
                discoverUninitializedComponents: function (e, t = null) {
                    const i = (t || document).querySelectorAll("[x-data]");
                    Array.from(i)
                        .filter((e) => void 0 === e.__x)
                        .forEach((t) => {
                            e(t);
                        });
                },
                listenForNewUninitializedComponentsAtRunTime: function () {
                    const e = document.querySelector("body");
                    new MutationObserver((e) => {
                        if (!this.pauseMutationObserver)
                            for (let t = 0; t < e.length; t++)
                                e[t].addedNodes.length > 0 &&
                                    e[t].addedNodes.forEach((e) => {
                                        1 === e.nodeType &&
                                            ((e.parentElement && e.parentElement.closest("[x-data]")) ||
                                                this.discoverUninitializedComponents((e) => {
                                                    this.initializeComponent(e);
                                                }, e.parentElement));
                                    });
                    }).observe(e, { childList: !0, attributes: !0, subtree: !0 });
                },
                initializeComponent: function (e) {
                    if (!e.__x)
                        try {
                            e.__x = new fe(e);
                        } catch (e) {
                            setTimeout(() => {
                                throw e;
                            }, 0);
                        }
                },
                clone: function (e, t) {
                    t.__x || (t.__x = new fe(t, e));
                },
                addMagicProperty: function (e, t) {
                    this.magicProperties[e] = t;
                },
                onComponentInitialized: function (e) {
                    this.onComponentInitializeds.push(e);
                },
                onBeforeComponentInitialized: function (e) {
                    this.onBeforeComponentInitializeds.push(e);
                },
            };
            return (
                s() ||
                    ((window.Alpine = ve),
                    window.deferLoadingAlpine
                        ? window.deferLoadingAlpine(function () {
                              window.Alpine.start();
                          })
                        : window.Alpine.start()),
                ve
            );
        })();
    },
    function (e, t) {
        var i;
        i = (function () {
            return this;
        })();
        try {
            i = i || new Function("return this")();
        } catch (e) {
            "object" == typeof window && (i = window);
        }
        e.exports = i;
    },
    function (e, t, i) {
        "use strict";
        i.r(t);
    },
    function (e, t, i) {
        "use strict";
        i.r(t);
        i(2);
        var n = i(0),
            s = i.n(n);
        function r(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
        }
        function a(e, t) {
            void 0 === e && (e = {}),
                void 0 === t && (t = {}),
                Object.keys(t).forEach(function (i) {
                    void 0 === e[i] ? (e[i] = t[i]) : r(t[i]) && r(e[i]) && Object.keys(t[i]).length > 0 && a(e[i], t[i]);
                });
        }
        var o = {
            body: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: { blur: function () {}, nodeName: "" },
            querySelector: function () {
                return null;
            },
            querySelectorAll: function () {
                return [];
            },
            getElementById: function () {
                return null;
            },
            createEvent: function () {
                return { initEvent: function () {} };
            },
            createElement: function () {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function () {},
                    getElementsByTagName: function () {
                        return [];
                    },
                };
            },
            createElementNS: function () {
                return {};
            },
            importNode: function () {
                return null;
            },
            location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
        };
        function l() {
            var e = "undefined" != typeof document ? document : {};
            return a(e, o), e;
        }
        var d = {
            document: o,
            navigator: { userAgent: "" },
            location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
            history: { replaceState: function () {}, pushState: function () {}, go: function () {}, back: function () {} },
            CustomEvent: function () {
                return this;
            },
            addEventListener: function () {},
            removeEventListener: function () {},
            getComputedStyle: function () {
                return {
                    getPropertyValue: function () {
                        return "";
                    },
                };
            },
            Image: function () {},
            Date: function () {},
            screen: {},
            setTimeout: function () {},
            clearTimeout: function () {},
            matchMedia: function () {
                return {};
            },
            requestAnimationFrame: function (e) {
                return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
            },
            cancelAnimationFrame: function (e) {
                "undefined" != typeof setTimeout && clearTimeout(e);
            },
        };
        function u() {
            var e = "undefined" != typeof window ? window : {};
            return a(e, d), e;
        }
        function c(e) {
            return (c = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function h(e, t) {
            return (h =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }
        function p() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
            } catch (e) {
                return !1;
            }
        }
        function f(e, t, i) {
            return (f = p()
                ? Reflect.construct
                : function (e, t, i) {
                      var n = [null];
                      n.push.apply(n, t);
                      var s = new (Function.bind.apply(e, n))();
                      return i && h(s, i.prototype), s;
                  }).apply(null, arguments);
        }
        function v(e) {
            var t = "function" == typeof Map ? new Map() : void 0;
            return (v = function (e) {
                if (null === e || ((i = e), -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
                var i;
                if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t) {
                    if (t.has(e)) return t.get(e);
                    t.set(e, n);
                }
                function n() {
                    return f(e, arguments, c(this).constructor);
                }
                return (n.prototype = Object.create(e.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } })), h(n, e);
            })(e);
        }
        var m = (function (e) {
            var t, i;
            function n(t) {
                var i, n, s;
                return (
                    (i = e.call.apply(e, [this].concat(t)) || this),
                    (n = (function (e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    })(i)),
                    (s = n.__proto__),
                    Object.defineProperty(n, "__proto__", {
                        get: function () {
                            return s;
                        },
                        set: function (e) {
                            s.__proto__ = e;
                        },
                    }),
                    i
                );
            }
            return (i = e), ((t = n).prototype = Object.create(i.prototype)), (t.prototype.constructor = t), (t.__proto__ = i), n;
        })(v(Array));
        function g(e) {
            void 0 === e && (e = []);
            var t = [];
            return (
                e.forEach(function (e) {
                    Array.isArray(e) ? t.push.apply(t, g(e)) : t.push(e);
                }),
                t
            );
        }
        function b(e, t) {
            return Array.prototype.filter.call(e, t);
        }
        function y(e, t) {
            var i = u(),
                n = l(),
                s = [];
            if (!t && e instanceof m) return e;
            if (!e) return new m(s);
            if ("string" == typeof e) {
                var r = e.trim();
                if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
                    var a = "div";
                    0 === r.indexOf("<li") && (a = "ul"),
                        0 === r.indexOf("<tr") && (a = "tbody"),
                        (0 !== r.indexOf("<td") && 0 !== r.indexOf("<th")) || (a = "tr"),
                        0 === r.indexOf("<tbody") && (a = "table"),
                        0 === r.indexOf("<option") && (a = "select");
                    var o = n.createElement(a);
                    o.innerHTML = r;
                    for (var d = 0; d < o.childNodes.length; d += 1) s.push(o.childNodes[d]);
                } else
                    s = (function (e, t) {
                        if ("string" != typeof e) return [e];
                        for (var i = [], n = t.querySelectorAll(e), s = 0; s < n.length; s += 1) i.push(n[s]);
                        return i;
                    })(e.trim(), t || n);
            } else if (e.nodeType || e === i || e === n) s.push(e);
            else if (Array.isArray(e)) {
                if (e instanceof m) return e;
                s = e;
            }
            return new m(
                (function (e) {
                    for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
                    return t;
                })(s)
            );
        }
        y.fn = m.prototype;
        var w = "resize scroll".split(" ");
        function x(e) {
            return function () {
                for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                if (void 0 === i[0]) {
                    for (var s = 0; s < this.length; s += 1) w.indexOf(e) < 0 && (e in this[s] ? this[s][e]() : y(this[s]).trigger(e));
                    return this;
                }
                return this.on.apply(this, [e].concat(i));
            };
        }
        x("click"),
            x("blur"),
            x("focus"),
            x("focusin"),
            x("focusout"),
            x("keyup"),
            x("keydown"),
            x("keypress"),
            x("submit"),
            x("change"),
            x("mousedown"),
            x("mousemove"),
            x("mouseup"),
            x("mouseenter"),
            x("mouseleave"),
            x("mouseout"),
            x("mouseover"),
            x("touchstart"),
            x("touchend"),
            x("touchmove"),
            x("resize"),
            x("scroll");
        var E = {
            addClass: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var n = g(
                    t.map(function (e) {
                        return e.split(" ");
                    })
                );
                return (
                    this.forEach(function (e) {
                        var t;
                        (t = e.classList).add.apply(t, n);
                    }),
                    this
                );
            },
            removeClass: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var n = g(
                    t.map(function (e) {
                        return e.split(" ");
                    })
                );
                return (
                    this.forEach(function (e) {
                        var t;
                        (t = e.classList).remove.apply(t, n);
                    }),
                    this
                );
            },
            hasClass: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var n = g(
                    t.map(function (e) {
                        return e.split(" ");
                    })
                );
                return (
                    b(this, function (e) {
                        return (
                            n.filter(function (t) {
                                return e.classList.contains(t);
                            }).length > 0
                        );
                    }).length > 0
                );
            },
            toggleClass: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var n = g(
                    t.map(function (e) {
                        return e.split(" ");
                    })
                );
                this.forEach(function (e) {
                    n.forEach(function (t) {
                        e.classList.toggle(t);
                    });
                });
            },
            attr: function (e, t) {
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (var i = 0; i < this.length; i += 1)
                    if (2 === arguments.length) this[i].setAttribute(e, t);
                    else for (var n in e) (this[i][n] = e[n]), this[i].setAttribute(n, e[n]);
                return this;
            },
            removeAttr: function (e) {
                for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this;
            },
            transform: function (e) {
                for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
                return this;
            },
            transition: function (e) {
                for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
                return this;
            },
            on: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var n = t[0],
                    s = t[1],
                    r = t[2],
                    a = t[3];
                function o(e) {
                    var t = e.target;
                    if (t) {
                        var i = e.target.dom7EventData || [];
                        if ((i.indexOf(e) < 0 && i.unshift(e), y(t).is(s))) r.apply(t, i);
                        else for (var n = y(t).parents(), a = 0; a < n.length; a += 1) y(n[a]).is(s) && r.apply(n[a], i);
                    }
                }
                function l(e) {
                    var t = (e && e.target && e.target.dom7EventData) || [];
                    t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
                }
                "function" == typeof t[1] && ((n = t[0]), (r = t[1]), (a = t[2]), (s = void 0)), a || (a = !1);
                for (var d, u = n.split(" "), c = 0; c < this.length; c += 1) {
                    var h = this[c];
                    if (s)
                        for (d = 0; d < u.length; d += 1) {
                            var p = u[d];
                            h.dom7LiveListeners || (h.dom7LiveListeners = {}), h.dom7LiveListeners[p] || (h.dom7LiveListeners[p] = []), h.dom7LiveListeners[p].push({ listener: r, proxyListener: o }), h.addEventListener(p, o, a);
                        }
                    else
                        for (d = 0; d < u.length; d += 1) {
                            var f = u[d];
                            h.dom7Listeners || (h.dom7Listeners = {}), h.dom7Listeners[f] || (h.dom7Listeners[f] = []), h.dom7Listeners[f].push({ listener: r, proxyListener: l }), h.addEventListener(f, l, a);
                        }
                }
                return this;
            },
            off: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var n = t[0],
                    s = t[1],
                    r = t[2],
                    a = t[3];
                "function" == typeof t[1] && ((n = t[0]), (r = t[1]), (a = t[2]), (s = void 0)), a || (a = !1);
                for (var o = n.split(" "), l = 0; l < o.length; l += 1)
                    for (var d = o[l], u = 0; u < this.length; u += 1) {
                        var c = this[u],
                            h = void 0;
                        if ((!s && c.dom7Listeners ? (h = c.dom7Listeners[d]) : s && c.dom7LiveListeners && (h = c.dom7LiveListeners[d]), h && h.length))
                            for (var p = h.length - 1; p >= 0; p -= 1) {
                                var f = h[p];
                                (r && f.listener === r) || (r && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === r)
                                    ? (c.removeEventListener(d, f.proxyListener, a), h.splice(p, 1))
                                    : r || (c.removeEventListener(d, f.proxyListener, a), h.splice(p, 1));
                            }
                    }
                return this;
            },
            trigger: function () {
                for (var e = u(), t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                for (var s = i[0].split(" "), r = i[1], a = 0; a < s.length; a += 1)
                    for (var o = s[a], l = 0; l < this.length; l += 1) {
                        var d = this[l];
                        if (e.CustomEvent) {
                            var c = new e.CustomEvent(o, { detail: r, bubbles: !0, cancelable: !0 });
                            (d.dom7EventData = i.filter(function (e, t) {
                                return t > 0;
                            })),
                                d.dispatchEvent(c),
                                (d.dom7EventData = []),
                                delete d.dom7EventData;
                        }
                    }
                return this;
            },
            transitionEnd: function (e) {
                var t = this;
                return (
                    e &&
                        t.on("transitionend", function i(n) {
                            n.target === this && (e.call(this, n), t.off("transitionend", i));
                        }),
                    this
                );
            },
            outerWidth: function (e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
                    }
                    return this[0].offsetWidth;
                }
                return null;
            },
            outerHeight: function (e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
                    }
                    return this[0].offsetHeight;
                }
                return null;
            },
            styles: function () {
                var e = u();
                return this[0] ? e.getComputedStyle(this[0], null) : {};
            },
            offset: function () {
                if (this.length > 0) {
                    var e = u(),
                        t = l(),
                        i = this[0],
                        n = i.getBoundingClientRect(),
                        s = t.body,
                        r = i.clientTop || s.clientTop || 0,
                        a = i.clientLeft || s.clientLeft || 0,
                        o = i === e ? e.scrollY : i.scrollTop,
                        d = i === e ? e.scrollX : i.scrollLeft;
                    return { top: n.top + o - r, left: n.left + d - a };
                }
                return null;
            },
            css: function (e, t) {
                var i,
                    n = u();
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (i = 0; i < this.length; i += 1) for (var s in e) this[i].style[s] = e[s];
                        return this;
                    }
                    if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e);
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                    return this;
                }
                return this;
            },
            each: function (e) {
                return e
                    ? (this.forEach(function (t, i) {
                          e.apply(t, [t, i]);
                      }),
                      this)
                    : this;
            },
            html: function (e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this;
            },
            text: function (e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this;
            },
            is: function (e) {
                var t,
                    i,
                    n = u(),
                    s = l(),
                    r = this[0];
                if (!r || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (r.matches) return r.matches(e);
                    if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
                    if (r.msMatchesSelector) return r.msMatchesSelector(e);
                    for (t = y(e), i = 0; i < t.length; i += 1) if (t[i] === r) return !0;
                    return !1;
                }
                if (e === s) return r === s;
                if (e === n) return r === n;
                if (e.nodeType || e instanceof m) {
                    for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) if (t[i] === r) return !0;
                    return !1;
                }
                return !1;
            },
            index: function () {
                var e,
                    t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                    return e;
                }
            },
            eq: function (e) {
                if (void 0 === e) return this;
                var t = this.length;
                if (e > t - 1) return y([]);
                if (e < 0) {
                    var i = t + e;
                    return y(i < 0 ? [] : [this[i]]);
                }
                return y([this[e]]);
            },
            append: function () {
                for (var e, t = l(), i = 0; i < arguments.length; i += 1) {
                    e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                    for (var n = 0; n < this.length; n += 1)
                        if ("string" == typeof e) {
                            var s = t.createElement("div");
                            for (s.innerHTML = e; s.firstChild; ) this[n].appendChild(s.firstChild);
                        } else if (e instanceof m) for (var r = 0; r < e.length; r += 1) this[n].appendChild(e[r]);
                        else this[n].appendChild(e);
                }
                return this;
            },
            prepend: function (e) {
                var t,
                    i,
                    n = l();
                for (t = 0; t < this.length; t += 1)
                    if ("string" == typeof e) {
                        var s = n.createElement("div");
                        for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(s.childNodes[i], this[t].childNodes[0]);
                    } else if (e instanceof m) for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
                    else this[t].insertBefore(e, this[t].childNodes[0]);
                return this;
            },
            next: function (e) {
                return this.length > 0 ? (e ? (this[0].nextElementSibling && y(this[0].nextElementSibling).is(e) ? y([this[0].nextElementSibling]) : y([])) : this[0].nextElementSibling ? y([this[0].nextElementSibling]) : y([])) : y([]);
            },
            nextAll: function (e) {
                var t = [],
                    i = this[0];
                if (!i) return y([]);
                for (; i.nextElementSibling; ) {
                    var n = i.nextElementSibling;
                    e ? y(n).is(e) && t.push(n) : t.push(n), (i = n);
                }
                return y(t);
            },
            prev: function (e) {
                if (this.length > 0) {
                    var t = this[0];
                    return e ? (t.previousElementSibling && y(t.previousElementSibling).is(e) ? y([t.previousElementSibling]) : y([])) : t.previousElementSibling ? y([t.previousElementSibling]) : y([]);
                }
                return y([]);
            },
            prevAll: function (e) {
                var t = [],
                    i = this[0];
                if (!i) return y([]);
                for (; i.previousElementSibling; ) {
                    var n = i.previousElementSibling;
                    e ? y(n).is(e) && t.push(n) : t.push(n), (i = n);
                }
                return y(t);
            },
            parent: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? y(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                return y(t);
            },
            parents: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) for (var n = this[i].parentNode; n; ) e ? y(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
                return y(t);
            },
            closest: function (e) {
                var t = this;
                return void 0 === e ? y([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
            },
            find: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) for (var n = this[i].querySelectorAll(e), s = 0; s < n.length; s += 1) t.push(n[s]);
                return y(t);
            },
            children: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) for (var n = this[i].children, s = 0; s < n.length; s += 1) (e && !y(n[s]).is(e)) || t.push(n[s]);
                return y(t);
            },
            filter: function (e) {
                return y(b(this, e));
            },
            remove: function () {
                for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this;
            },
        };
        Object.keys(E).forEach(function (e) {
            Object.defineProperty(y.fn, e, { value: E[e], writable: !0 });
        });
        var T,
            S,
            C,
            k = y;
        function O(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t);
        }
        function M() {
            return Date.now();
        }
        function P(e, t) {
            void 0 === t && (t = "x");
            var i,
                n,
                s,
                r = u(),
                a = (function (e) {
                    var t,
                        i = u();
                    return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t;
                })(e);
            return (
                r.WebKitCSSMatrix
                    ? ((n = a.transform || a.webkitTransform).split(",").length > 6 &&
                          (n = n
                              .split(", ")
                              .map(function (e) {
                                  return e.replace(",", ".");
                              })
                              .join(", ")),
                      (s = new r.WebKitCSSMatrix("none" === n ? "" : n)))
                    : (i = (s = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
                "x" === t && (n = r.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                "y" === t && (n = r.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                n || 0
            );
        }
        function _(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
        }
        function L(e) {
            return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
        }
        function A() {
            for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], i = 1; i < arguments.length; i += 1) {
                var n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (null != n && !L(n))
                    for (
                        var s = Object.keys(Object(n)).filter(function (e) {
                                return t.indexOf(e) < 0;
                            }),
                            r = 0,
                            a = s.length;
                        r < a;
                        r += 1
                    ) {
                        var o = s[r],
                            l = Object.getOwnPropertyDescriptor(n, o);
                        void 0 !== l && l.enumerable && (_(e[o]) && _(n[o]) ? (n[o].__swiper__ ? (e[o] = n[o]) : A(e[o], n[o])) : !_(e[o]) && _(n[o]) ? ((e[o] = {}), n[o].__swiper__ ? (e[o] = n[o]) : A(e[o], n[o])) : (e[o] = n[o]));
                    }
            }
            return e;
        }
        function z(e, t) {
            Object.keys(t).forEach(function (i) {
                _(t[i]) &&
                    Object.keys(t[i]).forEach(function (n) {
                        "function" == typeof t[i][n] && (t[i][n] = t[i][n].bind(e));
                    }),
                    (e[i] = t[i]);
            });
        }
        function D() {
            return (
                T ||
                    (T = (function () {
                        var e = u(),
                            t = l();
                        return {
                            touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
                            pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
                            observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
                            passiveListener: (function () {
                                var t = !1;
                                try {
                                    var i = Object.defineProperty({}, "passive", {
                                        get: function () {
                                            t = !0;
                                        },
                                    });
                                    e.addEventListener("testPassiveListener", null, i);
                                } catch (e) {}
                                return t;
                            })(),
                            gestures: "ongesturestart" in e,
                        };
                    })()),
                T
            );
        }
        function j(e) {
            return (
                void 0 === e && (e = {}),
                S ||
                    (S = (function (e) {
                        var t = (void 0 === e ? {} : e).userAgent,
                            i = D(),
                            n = u(),
                            s = n.navigator.platform,
                            r = t || n.navigator.userAgent,
                            a = { ios: !1, android: !1 },
                            o = n.screen.width,
                            l = n.screen.height,
                            d = r.match(/(Android);?[\s\/]+([\d.]+)?/),
                            c = r.match(/(iPad).*OS\s([\d_]+)/),
                            h = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                            p = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                            f = "Win32" === s,
                            v = "MacIntel" === s;
                        return (
                            !c &&
                                v &&
                                i.touch &&
                                ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + l) >= 0 &&
                                ((c = r.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]), (v = !1)),
                            d && !f && ((a.os = "android"), (a.android = !0)),
                            (c || p || h) && ((a.os = "ios"), (a.ios = !0)),
                            a
                        );
                    })(e)),
                S
            );
        }
        function N() {
            return (
                C ||
                    (C = (function () {
                        var e,
                            t = u();
                        return {
                            isEdge: !!t.navigator.userAgent.match(/Edge/g),
                            isSafari: ((e = t.navigator.userAgent.toLowerCase()), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
                        };
                    })()),
                C
            );
        }
        var $ = {
            name: "resize",
            create: function () {
                var e = this;
                A(e, {
                    resize: {
                        observer: null,
                        createObserver: function () {
                            e &&
                                !e.destroyed &&
                                e.initialized &&
                                ((e.resize.observer = new ResizeObserver(function (t) {
                                    var i = e.width,
                                        n = e.height,
                                        s = i,
                                        r = n;
                                    t.forEach(function (t) {
                                        var i = t.contentBoxSize,
                                            n = t.contentRect,
                                            a = t.target;
                                        (a && a !== e.el) || ((s = n ? n.width : (i[0] || i).inlineSize), (r = n ? n.height : (i[0] || i).blockSize));
                                    }),
                                        (s === i && r === n) || e.resize.resizeHandler();
                                })),
                                e.resize.observer.observe(e.el));
                        },
                        removeObserver: function () {
                            e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), (e.resize.observer = null));
                        },
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                        },
                        orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange");
                        },
                    },
                });
            },
            on: {
                init: function (e) {
                    var t = u();
                    e.params.resizeObserver && void 0 !== u().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler));
                },
                destroy: function (e) {
                    var t = u();
                    e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
                },
            },
        };
        function I() {
            return (I =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var B = {
                attach: function (e, t) {
                    void 0 === t && (t = {});
                    var i = u(),
                        n = this,
                        s = new (i.MutationObserver || i.WebkitMutationObserver)(function (e) {
                            if (1 !== e.length) {
                                var t = function () {
                                    n.emit("observerUpdate", e[0]);
                                };
                                i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0);
                            } else n.emit("observerUpdate", e[0]);
                        });
                    s.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), n.observer.observers.push(s);
                },
                init: function () {
                    if (this.support.observer && this.params.observer) {
                        if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                        this.observer.attach(this.$el[0], { childList: this.params.observeSlideChildren }), this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
                    }
                },
                destroy: function () {
                    this.observer.observers.forEach(function (e) {
                        e.disconnect();
                    }),
                        (this.observer.observers = []);
                },
            },
            G = {
                name: "observer",
                params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
                create: function () {
                    z(this, { observer: I({}, B, { observers: [] }) });
                },
                on: {
                    init: function (e) {
                        e.observer.init();
                    },
                    destroy: function (e) {
                        e.observer.destroy();
                    },
                },
            };
        function F(e) {
            var t = l(),
                i = u(),
                n = this.touchEventsData,
                s = this.params,
                r = this.touches;
            if (this.enabled && (!this.animating || !s.preventInteractionOnTransition)) {
                var a = e;
                a.originalEvent && (a = a.originalEvent);
                var o = k(a.target);
                if (
                    ("wrapper" !== s.touchEventsTarget || o.closest(this.wrapperEl).length) &&
                    ((n.isTouchEvent = "touchstart" === a.type), (n.isTouchEvent || !("which" in a) || 3 !== a.which) && !((!n.isTouchEvent && "button" in a && a.button > 0) || (n.isTouched && n.isMoved)))
                ) {
                    !!s.noSwipingClass && "" !== s.noSwipingClass && a.target && a.target.shadowRoot && e.path && e.path[0] && (o = k(e.path[0]));
                    var d = s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass,
                        c = !(!a.target || !a.target.shadowRoot);
                    if (
                        s.noSwiping &&
                        (c
                            ? (function (e, t) {
                                  return (
                                      void 0 === t && (t = this),
                                      (function t(i) {
                                          return i && i !== l() && i !== u() ? (i.assignedSlot && (i = i.assignedSlot), i.closest(e) || t(i.getRootNode().host)) : null;
                                      })(t)
                                  );
                              })(d, a.target)
                            : o.closest(d)[0])
                    )
                        this.allowClick = !0;
                    else if (!s.swipeHandler || o.closest(s.swipeHandler)[0]) {
                        (r.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX), (r.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY);
                        var h = r.currentX,
                            p = r.currentY,
                            f = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
                            v = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
                        if (f && (h <= v || h >= i.innerWidth - v)) {
                            if ("prevent" !== f) return;
                            e.preventDefault();
                        }
                        if (
                            (A(n, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                            (r.startX = h),
                            (r.startY = p),
                            (n.touchStartTime = M()),
                            (this.allowClick = !0),
                            this.updateSize(),
                            (this.swipeDirection = void 0),
                            s.threshold > 0 && (n.allowThresholdMove = !1),
                            "touchstart" !== a.type)
                        ) {
                            var m = !0;
                            o.is(n.focusableElements) && (m = !1), t.activeElement && k(t.activeElement).is(n.focusableElements) && t.activeElement !== o[0] && t.activeElement.blur();
                            var g = m && this.allowTouchMove && s.touchStartPreventDefault;
                            (!s.touchStartForcePreventDefault && !g) || o[0].isContentEditable || a.preventDefault();
                        }
                        this.emit("touchStart", a);
                    }
                }
            }
        }
        function R(e) {
            var t = l(),
                i = this.touchEventsData,
                n = this.params,
                s = this.touches,
                r = this.rtlTranslate;
            if (this.enabled) {
                var a = e;
                if ((a.originalEvent && (a = a.originalEvent), i.isTouched)) {
                    if (!i.isTouchEvent || "touchmove" === a.type) {
                        var o = "touchmove" === a.type && a.targetTouches && (a.targetTouches[0] || a.changedTouches[0]),
                            d = "touchmove" === a.type ? o.pageX : a.pageX,
                            u = "touchmove" === a.type ? o.pageY : a.pageY;
                        if (a.preventedByNestedSwiper) return (s.startX = d), void (s.startY = u);
                        if (!this.allowTouchMove) return (this.allowClick = !1), void (i.isTouched && (A(s, { startX: d, startY: u, currentX: d, currentY: u }), (i.touchStartTime = M())));
                        if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                            if (this.isVertical()) {
                                if ((u < s.startY && this.translate <= this.maxTranslate()) || (u > s.startY && this.translate >= this.minTranslate())) return (i.isTouched = !1), void (i.isMoved = !1);
                            } else if ((d < s.startX && this.translate <= this.maxTranslate()) || (d > s.startX && this.translate >= this.minTranslate())) return;
                        if (i.isTouchEvent && t.activeElement && a.target === t.activeElement && k(a.target).is(i.focusableElements)) return (i.isMoved = !0), void (this.allowClick = !1);
                        if ((i.allowTouchCallbacks && this.emit("touchMove", a), !(a.targetTouches && a.targetTouches.length > 1))) {
                            (s.currentX = d), (s.currentY = u);
                            var c = s.currentX - s.startX,
                                h = s.currentY - s.startY;
                            if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(h, 2)) < this.params.threshold)) {
                                var p;
                                if (void 0 === i.isScrolling)
                                    (this.isHorizontal() && s.currentY === s.startY) || (this.isVertical() && s.currentX === s.startX)
                                        ? (i.isScrolling = !1)
                                        : c * c + h * h >= 25 && ((p = (180 * Math.atan2(Math.abs(h), Math.abs(c))) / Math.PI), (i.isScrolling = this.isHorizontal() ? p > n.touchAngle : 90 - p > n.touchAngle));
                                if ((i.isScrolling && this.emit("touchMoveOpposite", a), void 0 === i.startMoving && ((s.currentX === s.startX && s.currentY === s.startY) || (i.startMoving = !0)), i.isScrolling)) i.isTouched = !1;
                                else if (i.startMoving) {
                                    (this.allowClick = !1),
                                        !n.cssMode && a.cancelable && a.preventDefault(),
                                        n.touchMoveStopPropagation && !n.nested && a.stopPropagation(),
                                        i.isMoved ||
                                            (n.loop && this.loopFix(),
                                            (i.startTranslate = this.getTranslate()),
                                            this.setTransition(0),
                                            this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                            (i.allowMomentumBounce = !1),
                                            !n.grabCursor || (!0 !== this.allowSlideNext && !0 !== this.allowSlidePrev) || this.setGrabCursor(!0),
                                            this.emit("sliderFirstMove", a)),
                                        this.emit("sliderMove", a),
                                        (i.isMoved = !0);
                                    var f = this.isHorizontal() ? c : h;
                                    (s.diff = f), (f *= n.touchRatio), r && (f = -f), (this.swipeDirection = f > 0 ? "prev" : "next"), (i.currentTranslate = f + i.startTranslate);
                                    var v = !0,
                                        m = n.resistanceRatio;
                                    if (
                                        (n.touchReleaseOnEdges && (m = 0),
                                        f > 0 && i.currentTranslate > this.minTranslate()
                                            ? ((v = !1), n.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, m)))
                                            : f < 0 && i.currentTranslate < this.maxTranslate() && ((v = !1), n.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, m))),
                                        v && (a.preventedByNestedSwiper = !0),
                                        !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                                        !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                                        this.allowSlidePrev || this.allowSlideNext || (i.currentTranslate = i.startTranslate),
                                        n.threshold > 0)
                                    ) {
                                        if (!(Math.abs(f) > n.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                        if (!i.allowThresholdMove)
                                            return (
                                                (i.allowThresholdMove = !0),
                                                (s.startX = s.currentX),
                                                (s.startY = s.currentY),
                                                (i.currentTranslate = i.startTranslate),
                                                void (s.diff = this.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                            );
                                    }
                                    n.followFinger &&
                                        !n.cssMode &&
                                        ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()),
                                        n.freeMode &&
                                            (0 === i.velocities.length && i.velocities.push({ position: s[this.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }),
                                            i.velocities.push({ position: s[this.isHorizontal() ? "currentX" : "currentY"], time: M() })),
                                        this.updateProgress(i.currentTranslate),
                                        this.setTranslate(i.currentTranslate));
                                }
                            }
                        }
                    }
                } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", a);
            }
        }
        function H(e) {
            var t = this,
                i = t.touchEventsData,
                n = t.params,
                s = t.touches,
                r = t.rtlTranslate,
                a = t.$wrapperEl,
                o = t.slidesGrid,
                l = t.snapGrid;
            if (t.enabled) {
                var d = e;
                if ((d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), (i.allowTouchCallbacks = !1), !i.isTouched))
                    return i.isMoved && n.grabCursor && t.setGrabCursor(!1), (i.isMoved = !1), void (i.startMoving = !1);
                n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var u,
                    c = M(),
                    h = c - i.touchStartTime;
                if (
                    (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), h < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)),
                    (i.lastClickTime = M()),
                    O(function () {
                        t.destroyed || (t.allowClick = !0);
                    }),
                    !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate)
                )
                    return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
                if (((i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1), (u = n.followFinger ? (r ? t.translate : -t.translate) : -i.currentTranslate), !n.cssMode))
                    if (n.freeMode) {
                        if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                        if (u > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                        if (n.freeModeMomentum) {
                            if (i.velocities.length > 1) {
                                var p = i.velocities.pop(),
                                    f = i.velocities.pop(),
                                    v = p.position - f.position,
                                    m = p.time - f.time;
                                (t.velocity = v / m), (t.velocity /= 2), Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || M() - p.time > 300) && (t.velocity = 0);
                            } else t.velocity = 0;
                            (t.velocity *= n.freeModeMomentumVelocityRatio), (i.velocities.length = 0);
                            var g = 1e3 * n.freeModeMomentumRatio,
                                b = t.velocity * g,
                                y = t.translate + b;
                            r && (y = -y);
                            var w,
                                x,
                                E = !1,
                                T = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                            if (y < t.maxTranslate())
                                n.freeModeMomentumBounce ? (y + t.maxTranslate() < -T && (y = t.maxTranslate() - T), (w = t.maxTranslate()), (E = !0), (i.allowMomentumBounce = !0)) : (y = t.maxTranslate()),
                                    n.loop && n.centeredSlides && (x = !0);
                            else if (y > t.minTranslate())
                                n.freeModeMomentumBounce ? (y - t.minTranslate() > T && (y = t.minTranslate() + T), (w = t.minTranslate()), (E = !0), (i.allowMomentumBounce = !0)) : (y = t.minTranslate()),
                                    n.loop && n.centeredSlides && (x = !0);
                            else if (n.freeModeSticky) {
                                for (var S, C = 0; C < l.length; C += 1)
                                    if (l[C] > -y) {
                                        S = C;
                                        break;
                                    }
                                y = -(y = Math.abs(l[S] - y) < Math.abs(l[S - 1] - y) || "next" === t.swipeDirection ? l[S] : l[S - 1]);
                            }
                            if (
                                (x &&
                                    t.once("transitionEnd", function () {
                                        t.loopFix();
                                    }),
                                0 !== t.velocity)
                            ) {
                                if (((g = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity)), n.freeModeSticky)) {
                                    var k = Math.abs((r ? -y : y) - t.translate),
                                        P = t.slidesSizesGrid[t.activeIndex];
                                    g = k < P ? n.speed : k < 2 * P ? 1.5 * n.speed : 2.5 * n.speed;
                                }
                            } else if (n.freeModeSticky) return void t.slideToClosest();
                            n.freeModeMomentumBounce && E
                                ? (t.updateProgress(w),
                                  t.setTransition(g),
                                  t.setTranslate(y),
                                  t.transitionStart(!0, t.swipeDirection),
                                  (t.animating = !0),
                                  a.transitionEnd(function () {
                                      t &&
                                          !t.destroyed &&
                                          i.allowMomentumBounce &&
                                          (t.emit("momentumBounce"),
                                          t.setTransition(n.speed),
                                          setTimeout(function () {
                                              t.setTranslate(w),
                                                  a.transitionEnd(function () {
                                                      t && !t.destroyed && t.transitionEnd();
                                                  });
                                          }, 0));
                                  }))
                                : t.velocity
                                ? (t.updateProgress(y),
                                  t.setTransition(g),
                                  t.setTranslate(y),
                                  t.transitionStart(!0, t.swipeDirection),
                                  t.animating ||
                                      ((t.animating = !0),
                                      a.transitionEnd(function () {
                                          t && !t.destroyed && t.transitionEnd();
                                      })))
                                : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(y)),
                                t.updateActiveIndex(),
                                t.updateSlidesClasses();
                        } else {
                            if (n.freeModeSticky) return void t.slideToClosest();
                            n.freeMode && t.emit("_freeModeNoMomentumRelease");
                        }
                        (!n.freeModeMomentum || h >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                    } else {
                        for (var _ = 0, L = t.slidesSizesGrid[0], A = 0; A < o.length; A += A < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                            var z = A < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                            void 0 !== o[A + z] ? u >= o[A] && u < o[A + z] && ((_ = A), (L = o[A + z] - o[A])) : u >= o[A] && ((_ = A), (L = o[o.length - 1] - o[o.length - 2]));
                        }
                        var D = (u - o[_]) / L,
                            j = _ < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                        if (h > n.longSwipesMs) {
                            if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && (D >= n.longSwipesRatio ? t.slideTo(_ + j) : t.slideTo(_)), "prev" === t.swipeDirection && (D > 1 - n.longSwipesRatio ? t.slideTo(_ + j) : t.slideTo(_));
                        } else {
                            if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                            t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
                                ? d.target === t.navigation.nextEl
                                    ? t.slideTo(_ + j)
                                    : t.slideTo(_)
                                : ("next" === t.swipeDirection && t.slideTo(_ + j), "prev" === t.swipeDirection && t.slideTo(_));
                        }
                    }
            }
        }
        function q() {
            var e = this.params,
                t = this.el;
            if (!t || 0 !== t.offsetWidth) {
                e.breakpoints && this.setBreakpoint();
                var i = this.allowSlideNext,
                    n = this.allowSlidePrev,
                    s = this.snapGrid;
                (this.allowSlideNext = !0),
                    (this.allowSlidePrev = !0),
                    this.updateSize(),
                    this.updateSlides(),
                    this.updateSlidesClasses(),
                    ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0),
                    this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(),
                    (this.allowSlidePrev = n),
                    (this.allowSlideNext = i),
                    this.params.watchOverflow && s !== this.snapGrid && this.checkOverflow();
            }
        }
        function V(e) {
            this.enabled && (this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
        }
        function W() {
            var e = this.wrapperEl,
                t = this.rtlTranslate;
            if (this.enabled) {
                (this.previousTranslate = this.translate),
                    this.isHorizontal() ? (this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft) : (this.translate = -e.scrollTop),
                    -0 === this.translate && (this.translate = 0),
                    this.updateActiveIndex(),
                    this.updateSlidesClasses();
                var i = this.maxTranslate() - this.minTranslate();
                (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1);
            }
        }
        var Y = !1;
        function X() {}
        var U = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !1,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: 0.02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1,
        };
        function K(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var Z = {
                modular: {
                    useParams: function (e) {
                        var t = this;
                        t.modules &&
                            Object.keys(t.modules).forEach(function (i) {
                                var n = t.modules[i];
                                n.params && A(e, n.params);
                            });
                    },
                    useModules: function (e) {
                        void 0 === e && (e = {});
                        var t = this;
                        t.modules &&
                            Object.keys(t.modules).forEach(function (i) {
                                var n = t.modules[i],
                                    s = e[i] || {};
                                n.on &&
                                    t.on &&
                                    Object.keys(n.on).forEach(function (e) {
                                        t.on(e, n.on[e]);
                                    }),
                                    n.create && n.create.bind(t)(s);
                            });
                    },
                },
                eventsEmitter: {
                    on: function (e, t, i) {
                        var n = this;
                        if ("function" != typeof t) return n;
                        var s = i ? "unshift" : "push";
                        return (
                            e.split(" ").forEach(function (e) {
                                n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][s](t);
                            }),
                            n
                        );
                    },
                    once: function (e, t, i) {
                        var n = this;
                        if ("function" != typeof t) return n;
                        function s() {
                            n.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
                            for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                            t.apply(n, r);
                        }
                        return (s.__emitterProxy = t), n.on(e, s, i);
                    },
                    onAny: function (e, t) {
                        if ("function" != typeof e) return this;
                        var i = t ? "unshift" : "push";
                        return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[i](e), this;
                    },
                    offAny: function (e) {
                        if (!this.eventsAnyListeners) return this;
                        var t = this.eventsAnyListeners.indexOf(e);
                        return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
                    },
                    off: function (e, t) {
                        var i = this;
                        return i.eventsListeners
                            ? (e.split(" ").forEach(function (e) {
                                  void 0 === t
                                      ? (i.eventsListeners[e] = [])
                                      : i.eventsListeners[e] &&
                                        i.eventsListeners[e].forEach(function (n, s) {
                                            (n === t || (n.__emitterProxy && n.__emitterProxy === t)) && i.eventsListeners[e].splice(s, 1);
                                        });
                              }),
                              i)
                            : i;
                    },
                    emit: function () {
                        var e,
                            t,
                            i,
                            n = this;
                        if (!n.eventsListeners) return n;
                        for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++) r[a] = arguments[a];
                        "string" == typeof r[0] || Array.isArray(r[0]) ? ((e = r[0]), (t = r.slice(1, r.length)), (i = n)) : ((e = r[0].events), (t = r[0].data), (i = r[0].context || n)), t.unshift(i);
                        var o = Array.isArray(e) ? e : e.split(" ");
                        return (
                            o.forEach(function (e) {
                                n.eventsAnyListeners &&
                                    n.eventsAnyListeners.length &&
                                    n.eventsAnyListeners.forEach(function (n) {
                                        n.apply(i, [e].concat(t));
                                    }),
                                    n.eventsListeners &&
                                        n.eventsListeners[e] &&
                                        n.eventsListeners[e].forEach(function (e) {
                                            e.apply(i, t);
                                        });
                            }),
                            n
                        );
                    },
                },
                update: {
                    updateSize: function () {
                        var e,
                            t,
                            i = this.$el;
                        (e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth),
                            (t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i[0].clientHeight),
                            (0 === e && this.isHorizontal()) ||
                                (0 === t && this.isVertical()) ||
                                ((e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10)),
                                (t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10)),
                                Number.isNaN(e) && (e = 0),
                                Number.isNaN(t) && (t = 0),
                                A(this, { width: e, height: t, size: this.isHorizontal() ? e : t }));
                    },
                    updateSlides: function () {
                        var e = this;
                        function t(t) {
                            return e.isHorizontal()
                                ? t
                                : {
                                      width: "height",
                                      "margin-top": "margin-left",
                                      "margin-bottom ": "margin-right",
                                      "margin-left": "margin-top",
                                      "margin-right": "margin-bottom",
                                      "padding-left": "padding-top",
                                      "padding-right": "padding-bottom",
                                      marginRight: "marginBottom",
                                  }[t];
                        }
                        function i(e, i) {
                            return parseFloat(e.getPropertyValue(t(i)) || 0);
                        }
                        var n = e.params,
                            s = e.$wrapperEl,
                            r = e.size,
                            a = e.rtlTranslate,
                            o = e.wrongRTL,
                            l = e.virtual && n.virtual.enabled,
                            d = l ? e.virtual.slides.length : e.slides.length,
                            u = s.children("." + e.params.slideClass),
                            c = l ? e.virtual.slides.length : u.length,
                            h = [],
                            p = [],
                            f = [],
                            v = n.slidesOffsetBefore;
                        "function" == typeof v && (v = n.slidesOffsetBefore.call(e));
                        var m = n.slidesOffsetAfter;
                        "function" == typeof m && (m = n.slidesOffsetAfter.call(e));
                        var g = e.snapGrid.length,
                            b = e.slidesGrid.length,
                            y = n.spaceBetween,
                            w = -v,
                            x = 0,
                            E = 0;
                        if (void 0 !== r) {
                            var T, S;
                            "string" == typeof y && y.indexOf("%") >= 0 && (y = (parseFloat(y.replace("%", "")) / 100) * r),
                                (e.virtualSize = -y),
                                a ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
                                n.slidesPerColumn > 1 &&
                                    ((T = Math.floor(c / n.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / n.slidesPerColumn) * n.slidesPerColumn),
                                    "auto" !== n.slidesPerView && "row" === n.slidesPerColumnFill && (T = Math.max(T, n.slidesPerView * n.slidesPerColumn)));
                            for (var C, k, O, M = n.slidesPerColumn, P = T / M, _ = Math.floor(c / n.slidesPerColumn), L = 0; L < c; L += 1) {
                                S = 0;
                                var z = u.eq(L);
                                if (n.slidesPerColumn > 1) {
                                    var D = void 0,
                                        j = void 0,
                                        N = void 0;
                                    if ("row" === n.slidesPerColumnFill && n.slidesPerGroup > 1) {
                                        var $ = Math.floor(L / (n.slidesPerGroup * n.slidesPerColumn)),
                                            I = L - n.slidesPerColumn * n.slidesPerGroup * $,
                                            B = 0 === $ ? n.slidesPerGroup : Math.min(Math.ceil((c - $ * M * n.slidesPerGroup) / M), n.slidesPerGroup);
                                        (D = (j = I - (N = Math.floor(I / B)) * B + $ * n.slidesPerGroup) + (N * T) / M),
                                            z.css({ "-webkit-box-ordinal-group": D, "-moz-box-ordinal-group": D, "-ms-flex-order": D, "-webkit-order": D, order: D });
                                    } else "column" === n.slidesPerColumnFill ? ((N = L - (j = Math.floor(L / M)) * M), (j > _ || (j === _ && N === M - 1)) && (N += 1) >= M && ((N = 0), (j += 1))) : (j = L - (N = Math.floor(L / P)) * P);
                                    z.css(t("margin-top"), 0 !== N ? n.spaceBetween && n.spaceBetween + "px" : "");
                                }
                                if ("none" !== z.css("display")) {
                                    if ("auto" === n.slidesPerView) {
                                        var G = getComputedStyle(z[0]),
                                            F = z[0].style.transform,
                                            R = z[0].style.webkitTransform;
                                        if ((F && (z[0].style.transform = "none"), R && (z[0].style.webkitTransform = "none"), n.roundLengths)) S = e.isHorizontal() ? z.outerWidth(!0) : z.outerHeight(!0);
                                        else {
                                            var H = i(G, "width"),
                                                q = i(G, "padding-left"),
                                                V = i(G, "padding-right"),
                                                W = i(G, "margin-left"),
                                                Y = i(G, "margin-right"),
                                                X = G.getPropertyValue("box-sizing");
                                            if (X && "border-box" === X) S = H + W + Y;
                                            else {
                                                var U = z[0],
                                                    K = U.clientWidth;
                                                S = H + q + V + W + Y + (U.offsetWidth - K);
                                            }
                                        }
                                        F && (z[0].style.transform = F), R && (z[0].style.webkitTransform = R), n.roundLengths && (S = Math.floor(S));
                                    } else (S = (r - (n.slidesPerView - 1) * y) / n.slidesPerView), n.roundLengths && (S = Math.floor(S)), u[L] && (u[L].style[t("width")] = S + "px");
                                    u[L] && (u[L].swiperSlideSize = S),
                                        f.push(S),
                                        n.centeredSlides
                                            ? ((w = w + S / 2 + x / 2 + y),
                                              0 === x && 0 !== L && (w = w - r / 2 - y),
                                              0 === L && (w = w - r / 2 - y),
                                              Math.abs(w) < 0.001 && (w = 0),
                                              n.roundLengths && (w = Math.floor(w)),
                                              E % n.slidesPerGroup == 0 && h.push(w),
                                              p.push(w))
                                            : (n.roundLengths && (w = Math.floor(w)), (E - Math.min(e.params.slidesPerGroupSkip, E)) % e.params.slidesPerGroup == 0 && h.push(w), p.push(w), (w = w + S + y)),
                                        (e.virtualSize += S + y),
                                        (x = S),
                                        (E += 1);
                                }
                            }
                            if (((e.virtualSize = Math.max(e.virtualSize, r) + m), a && o && ("slide" === n.effect || "coverflow" === n.effect) && s.css({ width: e.virtualSize + n.spaceBetween + "px" }), n.setWrapperSize))
                                s.css((((k = {})[t("width")] = e.virtualSize + n.spaceBetween + "px"), k));
                            if (n.slidesPerColumn > 1)
                                if (
                                    ((e.virtualSize = (S + n.spaceBetween) * T),
                                    (e.virtualSize = Math.ceil(e.virtualSize / n.slidesPerColumn) - n.spaceBetween),
                                    s.css((((O = {})[t("width")] = e.virtualSize + n.spaceBetween + "px"), O)),
                                    n.centeredSlides)
                                ) {
                                    C = [];
                                    for (var Z = 0; Z < h.length; Z += 1) {
                                        var J = h[Z];
                                        n.roundLengths && (J = Math.floor(J)), h[Z] < e.virtualSize + h[0] && C.push(J);
                                    }
                                    h = C;
                                }
                            if (!n.centeredSlides) {
                                C = [];
                                for (var Q = 0; Q < h.length; Q += 1) {
                                    var ee = h[Q];
                                    n.roundLengths && (ee = Math.floor(ee)), h[Q] <= e.virtualSize - r && C.push(ee);
                                }
                                (h = C), Math.floor(e.virtualSize - r) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - r);
                            }
                            if ((0 === h.length && (h = [0]), 0 !== n.spaceBetween)) {
                                var te,
                                    ie = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                                u.filter(function (e, t) {
                                    return !n.cssMode || t !== u.length - 1;
                                }).css((((te = {})[ie] = y + "px"), te));
                            }
                            if (n.centeredSlides && n.centeredSlidesBounds) {
                                var ne = 0;
                                f.forEach(function (e) {
                                    ne += e + (n.spaceBetween ? n.spaceBetween : 0);
                                });
                                var se = (ne -= n.spaceBetween) - r;
                                h = h.map(function (e) {
                                    return e < 0 ? -v : e > se ? se + m : e;
                                });
                            }
                            if (n.centerInsufficientSlides) {
                                var re = 0;
                                if (
                                    (f.forEach(function (e) {
                                        re += e + (n.spaceBetween ? n.spaceBetween : 0);
                                    }),
                                    (re -= n.spaceBetween) < r)
                                ) {
                                    var ae = (r - re) / 2;
                                    h.forEach(function (e, t) {
                                        h[t] = e - ae;
                                    }),
                                        p.forEach(function (e, t) {
                                            p[t] = e + ae;
                                        });
                                }
                            }
                            A(e, { slides: u, snapGrid: h, slidesGrid: p, slidesSizesGrid: f }),
                                c !== d && e.emit("slidesLengthChange"),
                                h.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
                                p.length !== b && e.emit("slidesGridLengthChange"),
                                (n.watchSlidesProgress || n.watchSlidesVisibility) && e.updateSlidesOffset();
                        }
                    },
                    updateAutoHeight: function (e) {
                        var t,
                            i = this,
                            n = [],
                            s = i.virtual && i.params.virtual.enabled,
                            r = 0;
                        "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                        var a = function (e) {
                            return s
                                ? i.slides.filter(function (t) {
                                      return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e;
                                  })[0]
                                : i.slides.eq(e)[0];
                        };
                        if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1)
                            if (i.params.centeredSlides)
                                i.visibleSlides.each(function (e) {
                                    n.push(e);
                                });
                            else
                                for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                    var o = i.activeIndex + t;
                                    if (o > i.slides.length && !s) break;
                                    n.push(a(o));
                                }
                        else n.push(a(i.activeIndex));
                        for (t = 0; t < n.length; t += 1)
                            if (void 0 !== n[t]) {
                                var l = n[t].offsetHeight;
                                r = l > r ? l : r;
                            }
                        r && i.$wrapperEl.css("height", r + "px");
                    },
                    updateSlidesOffset: function () {
                        for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
                    },
                    updateSlidesProgress: function (e) {
                        void 0 === e && (e = (this && this.translate) || 0);
                        var t = this.params,
                            i = this.slides,
                            n = this.rtlTranslate;
                        if (0 !== i.length) {
                            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                            var s = -e;
                            n && (s = e), i.removeClass(t.slideVisibleClass), (this.visibleSlidesIndexes = []), (this.visibleSlides = []);
                            for (var r = 0; r < i.length; r += 1) {
                                var a = i[r],
                                    o = (s + (t.centeredSlides ? this.minTranslate() : 0) - a.swiperSlideOffset) / (a.swiperSlideSize + t.spaceBetween);
                                if (t.watchSlidesVisibility || (t.centeredSlides && t.autoHeight)) {
                                    var l = -(s - a.swiperSlideOffset),
                                        d = l + this.slidesSizesGrid[r];
                                    ((l >= 0 && l < this.size - 1) || (d > 1 && d <= this.size) || (l <= 0 && d >= this.size)) && (this.visibleSlides.push(a), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass));
                                }
                                a.progress = n ? -o : o;
                            }
                            this.visibleSlides = k(this.visibleSlides);
                        }
                    },
                    updateProgress: function (e) {
                        if (void 0 === e) {
                            var t = this.rtlTranslate ? -1 : 1;
                            e = (this && this.translate && this.translate * t) || 0;
                        }
                        var i = this.params,
                            n = this.maxTranslate() - this.minTranslate(),
                            s = this.progress,
                            r = this.isBeginning,
                            a = this.isEnd,
                            o = r,
                            l = a;
                        0 === n ? ((s = 0), (r = !0), (a = !0)) : ((r = (s = (e - this.minTranslate()) / n) <= 0), (a = s >= 1)),
                            A(this, { progress: s, isBeginning: r, isEnd: a }),
                            (i.watchSlidesProgress || i.watchSlidesVisibility || (i.centeredSlides && i.autoHeight)) && this.updateSlidesProgress(e),
                            r && !o && this.emit("reachBeginning toEdge"),
                            a && !l && this.emit("reachEnd toEdge"),
                            ((o && !r) || (l && !a)) && this.emit("fromEdge"),
                            this.emit("progress", s);
                    },
                    updateSlidesClasses: function () {
                        var e,
                            t = this.slides,
                            i = this.params,
                            n = this.$wrapperEl,
                            s = this.activeIndex,
                            r = this.realIndex,
                            a = this.virtual && i.virtual.enabled;
                        t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
                            (e = a ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + s + '"]') : t.eq(s)).addClass(i.slideActiveClass),
                            i.loop &&
                                (e.hasClass(i.slideDuplicateClass)
                                    ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass)
                                    : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
                        var o = e
                            .nextAll("." + i.slideClass)
                            .eq(0)
                            .addClass(i.slideNextClass);
                        i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
                        var l = e
                            .prevAll("." + i.slideClass)
                            .eq(0)
                            .addClass(i.slidePrevClass);
                        i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
                            i.loop &&
                                (o.hasClass(i.slideDuplicateClass)
                                    ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass)
                                    : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
                                l.hasClass(i.slideDuplicateClass)
                                    ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)
                                    : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)),
                            this.emitSlidesClasses();
                    },
                    updateActiveIndex: function (e) {
                        var t,
                            i = this.rtlTranslate ? this.translate : -this.translate,
                            n = this.slidesGrid,
                            s = this.snapGrid,
                            r = this.params,
                            a = this.activeIndex,
                            o = this.realIndex,
                            l = this.snapIndex,
                            d = e;
                        if (void 0 === d) {
                            for (var u = 0; u < n.length; u += 1) void 0 !== n[u + 1] ? (i >= n[u] && i < n[u + 1] - (n[u + 1] - n[u]) / 2 ? (d = u) : i >= n[u] && i < n[u + 1] && (d = u + 1)) : i >= n[u] && (d = u);
                            r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
                        }
                        if (s.indexOf(i) >= 0) t = s.indexOf(i);
                        else {
                            var c = Math.min(r.slidesPerGroupSkip, d);
                            t = c + Math.floor((d - c) / r.slidesPerGroup);
                        }
                        if ((t >= s.length && (t = s.length - 1), d !== a)) {
                            var h = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                            A(this, { snapIndex: t, realIndex: h, previousIndex: a, activeIndex: d }),
                                this.emit("activeIndexChange"),
                                this.emit("snapIndexChange"),
                                o !== h && this.emit("realIndexChange"),
                                (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange");
                        } else t !== l && ((this.snapIndex = t), this.emit("snapIndexChange"));
                    },
                    updateClickedSlide: function (e) {
                        var t,
                            i = this.params,
                            n = k(e.target).closest("." + i.slideClass)[0],
                            s = !1;
                        if (n)
                            for (var r = 0; r < this.slides.length; r += 1)
                                if (this.slides[r] === n) {
                                    (s = !0), (t = r);
                                    break;
                                }
                        if (!n || !s) return (this.clickedSlide = void 0), void (this.clickedIndex = void 0);
                        (this.clickedSlide = n),
                            this.virtual && this.params.virtual.enabled ? (this.clickedIndex = parseInt(k(n).attr("data-swiper-slide-index"), 10)) : (this.clickedIndex = t),
                            i.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
                    },
                },
                translate: {
                    getTranslate: function (e) {
                        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                        var t = this.params,
                            i = this.rtlTranslate,
                            n = this.translate,
                            s = this.$wrapperEl;
                        if (t.virtualTranslate) return i ? -n : n;
                        if (t.cssMode) return n;
                        var r = P(s[0], e);
                        return i && (r = -r), r || 0;
                    },
                    setTranslate: function (e, t) {
                        var i = this.rtlTranslate,
                            n = this.params,
                            s = this.$wrapperEl,
                            r = this.wrapperEl,
                            a = this.progress,
                            o = 0,
                            l = 0;
                        this.isHorizontal() ? (o = i ? -e : e) : (l = e),
                            n.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
                            n.cssMode ? (r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l) : n.virtualTranslate || s.transform("translate3d(" + o + "px, " + l + "px, 0px)"),
                            (this.previousTranslate = this.translate),
                            (this.translate = this.isHorizontal() ? o : l);
                        var d = this.maxTranslate() - this.minTranslate();
                        (0 === d ? 0 : (e - this.minTranslate()) / d) !== a && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
                    },
                    minTranslate: function () {
                        return -this.snapGrid[0];
                    },
                    maxTranslate: function () {
                        return -this.snapGrid[this.snapGrid.length - 1];
                    },
                    translateTo: function (e, t, i, n, s) {
                        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === n && (n = !0);
                        var r = this,
                            a = r.params,
                            o = r.wrapperEl;
                        if (r.animating && a.preventInteractionOnTransition) return !1;
                        var l,
                            d = r.minTranslate(),
                            u = r.maxTranslate();
                        if (((l = n && e > d ? d : n && e < u ? u : e), r.updateProgress(l), a.cssMode)) {
                            var c,
                                h = r.isHorizontal();
                            if (0 === t) o[h ? "scrollLeft" : "scrollTop"] = -l;
                            else if (o.scrollTo) o.scrollTo((((c = {})[h ? "left" : "top"] = -l), (c.behavior = "smooth"), c));
                            else o[h ? "scrollLeft" : "scrollTop"] = -l;
                            return !0;
                        }
                        return (
                            0 === t
                                ? (r.setTransition(0), r.setTranslate(l), i && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd")))
                                : (r.setTransition(t),
                                  r.setTranslate(l),
                                  i && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")),
                                  r.animating ||
                                      ((r.animating = !0),
                                      r.onTranslateToWrapperTransitionEnd ||
                                          (r.onTranslateToWrapperTransitionEnd = function (e) {
                                              r &&
                                                  !r.destroyed &&
                                                  e.target === this &&
                                                  (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                                                  r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd),
                                                  (r.onTranslateToWrapperTransitionEnd = null),
                                                  delete r.onTranslateToWrapperTransitionEnd,
                                                  i && r.emit("transitionEnd"));
                                          }),
                                      r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                                      r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))),
                            !0
                        );
                    },
                },
                transition: {
                    setTransition: function (e, t) {
                        this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
                    },
                    transitionStart: function (e, t) {
                        void 0 === e && (e = !0);
                        var i = this.activeIndex,
                            n = this.params,
                            s = this.previousIndex;
                        if (!n.cssMode) {
                            n.autoHeight && this.updateAutoHeight();
                            var r = t;
                            if ((r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionStart"), e && i !== s)) {
                                if ("reset" === r) return void this.emit("slideResetTransitionStart");
                                this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
                            }
                        }
                    },
                    transitionEnd: function (e, t) {
                        void 0 === e && (e = !0);
                        var i = this.activeIndex,
                            n = this.previousIndex,
                            s = this.params;
                        if (((this.animating = !1), !s.cssMode)) {
                            this.setTransition(0);
                            var r = t;
                            if ((r || (r = i > n ? "next" : i < n ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== n)) {
                                if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                                this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
                            }
                        }
                    },
                },
                slide: {
                    slideTo: function (e, t, i, n, s) {
                        if ((void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "number" != typeof e && "string" != typeof e))
                            throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");
                        if ("string" == typeof e) {
                            var r = parseInt(e, 10);
                            if (!isFinite(r)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
                            e = r;
                        }
                        var a = this,
                            o = e;
                        o < 0 && (o = 0);
                        var l = a.params,
                            d = a.snapGrid,
                            u = a.slidesGrid,
                            c = a.previousIndex,
                            h = a.activeIndex,
                            p = a.rtlTranslate,
                            f = a.wrapperEl,
                            v = a.enabled;
                        if ((a.animating && l.preventInteractionOnTransition) || (!v && !n && !s)) return !1;
                        var m = Math.min(a.params.slidesPerGroupSkip, o),
                            g = m + Math.floor((o - m) / a.params.slidesPerGroup);
                        g >= d.length && (g = d.length - 1), (h || l.initialSlide || 0) === (c || 0) && i && a.emit("beforeSlideChangeStart");
                        var b,
                            y = -d[g];
                        if ((a.updateProgress(y), l.normalizeSlideIndex))
                            for (var w = 0; w < u.length; w += 1) {
                                var x = -Math.floor(100 * y),
                                    E = Math.floor(100 * u[w]),
                                    T = Math.floor(100 * u[w + 1]);
                                void 0 !== u[w + 1] ? (x >= E && x < T - (T - E) / 2 ? (o = w) : x >= E && x < T && (o = w + 1)) : x >= E && (o = w);
                            }
                        if (a.initialized && o !== h) {
                            if (!a.allowSlideNext && y < a.translate && y < a.minTranslate()) return !1;
                            if (!a.allowSlidePrev && y > a.translate && y > a.maxTranslate() && (h || 0) !== o) return !1;
                        }
                        if (((b = o > h ? "next" : o < h ? "prev" : "reset"), (p && -y === a.translate) || (!p && y === a.translate)))
                            return a.updateActiveIndex(o), l.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== l.effect && a.setTranslate(y), "reset" !== b && (a.transitionStart(i, b), a.transitionEnd(i, b)), !1;
                        if (l.cssMode) {
                            var S,
                                C = a.isHorizontal(),
                                k = -y;
                            if ((p && (k = f.scrollWidth - f.offsetWidth - k), 0 === t)) f[C ? "scrollLeft" : "scrollTop"] = k;
                            else if (f.scrollTo) f.scrollTo((((S = {})[C ? "left" : "top"] = k), (S.behavior = "smooth"), S));
                            else f[C ? "scrollLeft" : "scrollTop"] = k;
                            return !0;
                        }
                        return (
                            0 === t
                                ? (a.setTransition(0), a.setTranslate(y), a.updateActiveIndex(o), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, n), a.transitionStart(i, b), a.transitionEnd(i, b))
                                : (a.setTransition(t),
                                  a.setTranslate(y),
                                  a.updateActiveIndex(o),
                                  a.updateSlidesClasses(),
                                  a.emit("beforeTransitionStart", t, n),
                                  a.transitionStart(i, b),
                                  a.animating ||
                                      ((a.animating = !0),
                                      a.onSlideToWrapperTransitionEnd ||
                                          (a.onSlideToWrapperTransitionEnd = function (e) {
                                              a &&
                                                  !a.destroyed &&
                                                  e.target === this &&
                                                  (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                                                  a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd),
                                                  (a.onSlideToWrapperTransitionEnd = null),
                                                  delete a.onSlideToWrapperTransitionEnd,
                                                  a.transitionEnd(i, b));
                                          }),
                                      a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                                      a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))),
                            !0
                        );
                    },
                    slideToLoop: function (e, t, i, n) {
                        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                        var s = e;
                        return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, i, n);
                    },
                    slideNext: function (e, t, i) {
                        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                        var n = this.params,
                            s = this.animating;
                        if (!this.enabled) return this;
                        var r = this.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
                        if (n.loop) {
                            if (s && n.loopPreventsSlide) return !1;
                            this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
                        }
                        return this.slideTo(this.activeIndex + r, e, t, i);
                    },
                    slidePrev: function (e, t, i) {
                        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                        var n = this.params,
                            s = this.animating,
                            r = this.snapGrid,
                            a = this.slidesGrid,
                            o = this.rtlTranslate;
                        if (!this.enabled) return this;
                        if (n.loop) {
                            if (s && n.loopPreventsSlide) return !1;
                            this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
                        }
                        function l(e) {
                            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                        }
                        var d,
                            u = l(o ? this.translate : -this.translate),
                            c = r.map(function (e) {
                                return l(e);
                            }),
                            h = r[c.indexOf(u) - 1];
                        return (
                            void 0 === h &&
                                n.cssMode &&
                                r.forEach(function (e) {
                                    !h && u >= e && (h = e);
                                }),
                            void 0 !== h && (d = a.indexOf(h)) < 0 && (d = this.activeIndex - 1),
                            this.slideTo(d, e, t, i)
                        );
                    },
                    slideReset: function (e, t, i) {
                        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
                    },
                    slideToClosest: function (e, t, i, n) {
                        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === n && (n = 0.5);
                        var s = this.activeIndex,
                            r = Math.min(this.params.slidesPerGroupSkip, s),
                            a = r + Math.floor((s - r) / this.params.slidesPerGroup),
                            o = this.rtlTranslate ? this.translate : -this.translate;
                        if (o >= this.snapGrid[a]) {
                            var l = this.snapGrid[a];
                            o - l > (this.snapGrid[a + 1] - l) * n && (s += this.params.slidesPerGroup);
                        } else {
                            var d = this.snapGrid[a - 1];
                            o - d <= (this.snapGrid[a] - d) * n && (s -= this.params.slidesPerGroup);
                        }
                        return (s = Math.max(s, 0)), (s = Math.min(s, this.slidesGrid.length - 1)), this.slideTo(s, e, t, i);
                    },
                    slideToClickedSlide: function () {
                        var e,
                            t = this,
                            i = t.params,
                            n = t.$wrapperEl,
                            s = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                            r = t.clickedIndex;
                        if (i.loop) {
                            if (t.animating) return;
                            (e = parseInt(k(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
                                i.centeredSlides
                                    ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2
                                        ? (t.loopFix(),
                                          (r = n
                                              .children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")")
                                              .eq(0)
                                              .index()),
                                          O(function () {
                                              t.slideTo(r);
                                          }))
                                        : t.slideTo(r)
                                    : r > t.slides.length - s
                                    ? (t.loopFix(),
                                      (r = n
                                          .children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")")
                                          .eq(0)
                                          .index()),
                                      O(function () {
                                          t.slideTo(r);
                                      }))
                                    : t.slideTo(r);
                        } else t.slideTo(r);
                    },
                },
                loop: {
                    loopCreate: function () {
                        var e = this,
                            t = l(),
                            i = e.params,
                            n = e.$wrapperEl;
                        n.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                        var s = n.children("." + i.slideClass);
                        if (i.loopFillGroupWithBlank) {
                            var r = i.slidesPerGroup - (s.length % i.slidesPerGroup);
                            if (r !== i.slidesPerGroup) {
                                for (var a = 0; a < r; a += 1) {
                                    var o = k(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                                    n.append(o);
                                }
                                s = n.children("." + i.slideClass);
                            }
                        }
                        "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = s.length),
                            (e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10))),
                            (e.loopedSlides += i.loopAdditionalSlides),
                            e.loopedSlides > s.length && (e.loopedSlides = s.length);
                        var d = [],
                            u = [];
                        s.each(function (t, i) {
                            var n = k(t);
                            i < e.loopedSlides && u.push(t), i < s.length && i >= s.length - e.loopedSlides && d.push(t), n.attr("data-swiper-slide-index", i);
                        });
                        for (var c = 0; c < u.length; c += 1) n.append(k(u[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
                        for (var h = d.length - 1; h >= 0; h -= 1) n.prepend(k(d[h].cloneNode(!0)).addClass(i.slideDuplicateClass));
                    },
                    loopFix: function () {
                        this.emit("beforeLoopFix");
                        var e,
                            t = this.activeIndex,
                            i = this.slides,
                            n = this.loopedSlides,
                            s = this.allowSlidePrev,
                            r = this.allowSlideNext,
                            a = this.snapGrid,
                            o = this.rtlTranslate;
                        (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
                        var l = -a[t] - this.getTranslate();
                        if (t < n) (e = i.length - 3 * n + t), (e += n), this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
                        else if (t >= i.length - n) {
                            (e = -i.length + t + n), (e += n), this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
                        }
                        (this.allowSlidePrev = s), (this.allowSlideNext = r), this.emit("loopFix");
                    },
                    loopDestroy: function () {
                        var e = this.$wrapperEl,
                            t = this.params,
                            i = this.slides;
                        e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
                    },
                },
                grabCursor: {
                    setGrabCursor: function (e) {
                        if (!(this.support.touch || !this.params.simulateTouch || (this.params.watchOverflow && this.isLocked) || this.params.cssMode)) {
                            var t = this.el;
                            (t.style.cursor = "move"), (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (t.style.cursor = e ? "grabbing" : "grab");
                        }
                    },
                    unsetGrabCursor: function () {
                        this.support.touch || (this.params.watchOverflow && this.isLocked) || this.params.cssMode || (this.el.style.cursor = "");
                    },
                },
                manipulation: {
                    appendSlide: function (e) {
                        var t = this.$wrapperEl,
                            i = this.params;
                        if ((i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)) for (var n = 0; n < e.length; n += 1) e[n] && t.append(e[n]);
                        else t.append(e);
                        i.loop && this.loopCreate(), (i.observer && this.support.observer) || this.update();
                    },
                    prependSlide: function (e) {
                        var t = this.params,
                            i = this.$wrapperEl,
                            n = this.activeIndex;
                        t.loop && this.loopDestroy();
                        var s = n + 1;
                        if ("object" == typeof e && "length" in e) {
                            for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                            s = n + e.length;
                        } else i.prepend(e);
                        t.loop && this.loopCreate(), (t.observer && this.support.observer) || this.update(), this.slideTo(s, 0, !1);
                    },
                    addSlide: function (e, t) {
                        var i = this.$wrapperEl,
                            n = this.params,
                            s = this.activeIndex;
                        n.loop && ((s -= this.loopedSlides), this.loopDestroy(), (this.slides = i.children("." + n.slideClass)));
                        var r = this.slides.length;
                        if (e <= 0) this.prependSlide(t);
                        else if (e >= r) this.appendSlide(t);
                        else {
                            for (var a = s > e ? s + 1 : s, o = [], l = r - 1; l >= e; l -= 1) {
                                var d = this.slides.eq(l);
                                d.remove(), o.unshift(d);
                            }
                            if ("object" == typeof t && "length" in t) {
                                for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u]);
                                a = s > e ? s + t.length : s;
                            } else i.append(t);
                            for (var c = 0; c < o.length; c += 1) i.append(o[c]);
                            n.loop && this.loopCreate(), (n.observer && this.support.observer) || this.update(), n.loop ? this.slideTo(a + this.loopedSlides, 0, !1) : this.slideTo(a, 0, !1);
                        }
                    },
                    removeSlide: function (e) {
                        var t = this.params,
                            i = this.$wrapperEl,
                            n = this.activeIndex;
                        t.loop && ((n -= this.loopedSlides), this.loopDestroy(), (this.slides = i.children("." + t.slideClass)));
                        var s,
                            r = n;
                        if ("object" == typeof e && "length" in e) {
                            for (var a = 0; a < e.length; a += 1) (s = e[a]), this.slides[s] && this.slides.eq(s).remove(), s < r && (r -= 1);
                            r = Math.max(r, 0);
                        } else (s = e), this.slides[s] && this.slides.eq(s).remove(), s < r && (r -= 1), (r = Math.max(r, 0));
                        t.loop && this.loopCreate(), (t.observer && this.support.observer) || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
                    },
                    removeAllSlides: function () {
                        for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                        this.removeSlide(e);
                    },
                },
                events: {
                    attachEvents: function () {
                        var e = l(),
                            t = this.params,
                            i = this.touchEvents,
                            n = this.el,
                            s = this.wrapperEl,
                            r = this.device,
                            a = this.support;
                        (this.onTouchStart = F.bind(this)), (this.onTouchMove = R.bind(this)), (this.onTouchEnd = H.bind(this)), t.cssMode && (this.onScroll = W.bind(this)), (this.onClick = V.bind(this));
                        var o = !!t.nested;
                        if (!a.touch && a.pointerEvents) n.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, o), e.addEventListener(i.end, this.onTouchEnd, !1);
                        else {
                            if (a.touch) {
                                var d = !("touchstart" !== i.start || !a.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                                n.addEventListener(i.start, this.onTouchStart, d),
                                    n.addEventListener(i.move, this.onTouchMove, a.passiveListener ? { passive: !1, capture: o } : o),
                                    n.addEventListener(i.end, this.onTouchEnd, d),
                                    i.cancel && n.addEventListener(i.cancel, this.onTouchEnd, d),
                                    Y || (e.addEventListener("touchstart", X), (Y = !0));
                            }
                            ((t.simulateTouch && !r.ios && !r.android) || (t.simulateTouch && !a.touch && r.ios)) &&
                                (n.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, o), e.addEventListener("mouseup", this.onTouchEnd, !1));
                        }
                        (t.preventClicks || t.preventClicksPropagation) && n.addEventListener("click", this.onClick, !0),
                            t.cssMode && s.addEventListener("scroll", this.onScroll),
                            t.updateOnWindowResize ? this.on(r.ios || r.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", q, !0) : this.on("observerUpdate", q, !0);
                    },
                    detachEvents: function () {
                        var e = l(),
                            t = this.params,
                            i = this.touchEvents,
                            n = this.el,
                            s = this.wrapperEl,
                            r = this.device,
                            a = this.support,
                            o = !!t.nested;
                        if (!a.touch && a.pointerEvents) n.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, o), e.removeEventListener(i.end, this.onTouchEnd, !1);
                        else {
                            if (a.touch) {
                                var d = !("onTouchStart" !== i.start || !a.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                                n.removeEventListener(i.start, this.onTouchStart, d),
                                    n.removeEventListener(i.move, this.onTouchMove, o),
                                    n.removeEventListener(i.end, this.onTouchEnd, d),
                                    i.cancel && n.removeEventListener(i.cancel, this.onTouchEnd, d);
                            }
                            ((t.simulateTouch && !r.ios && !r.android) || (t.simulateTouch && !a.touch && r.ios)) &&
                                (n.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, o), e.removeEventListener("mouseup", this.onTouchEnd, !1));
                        }
                        (t.preventClicks || t.preventClicksPropagation) && n.removeEventListener("click", this.onClick, !0),
                            t.cssMode && s.removeEventListener("scroll", this.onScroll),
                            this.off(r.ios || r.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", q);
                    },
                },
                breakpoints: {
                    setBreakpoint: function () {
                        var e = this.activeIndex,
                            t = this.initialized,
                            i = this.loopedSlides,
                            n = void 0 === i ? 0 : i,
                            s = this.params,
                            r = this.$el,
                            a = s.breakpoints;
                        if (a && (!a || 0 !== Object.keys(a).length)) {
                            var o = this.getBreakpoint(a, this.params.breakpointsBase, this.el);
                            if (o && this.currentBreakpoint !== o) {
                                var l = o in a ? a[o] : void 0;
                                l &&
                                    ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                                        var t = l[e];
                                        void 0 !== t && (l[e] = "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t) ? ("slidesPerView" === e ? parseFloat(t) : parseInt(t, 10)) : "auto");
                                    });
                                var d = l || this.originalParams,
                                    u = s.slidesPerColumn > 1,
                                    c = d.slidesPerColumn > 1,
                                    h = s.enabled;
                                u && !c
                                    ? (r.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column"), this.emitContainerClasses())
                                    : !u &&
                                      c &&
                                      (r.addClass(s.containerModifierClass + "multirow"),
                                      ((d.slidesPerColumnFill && "column" === d.slidesPerColumnFill) || (!d.slidesPerColumnFill && "column" === s.slidesPerColumnFill)) && r.addClass(s.containerModifierClass + "multirow-column"),
                                      this.emitContainerClasses());
                                var p = d.direction && d.direction !== s.direction,
                                    f = s.loop && (d.slidesPerView !== s.slidesPerView || p);
                                p && t && this.changeDirection(), A(this.params, d);
                                var v = this.params.enabled;
                                A(this, { allowTouchMove: this.params.allowTouchMove, allowSlideNext: this.params.allowSlideNext, allowSlidePrev: this.params.allowSlidePrev }),
                                    h && !v ? this.disable() : !h && v && this.enable(),
                                    (this.currentBreakpoint = o),
                                    this.emit("_beforeBreakpoint", d),
                                    f && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - n + this.loopedSlides, 0, !1)),
                                    this.emit("breakpoint", d);
                            }
                        }
                    },
                    getBreakpoint: function (e, t, i) {
                        if ((void 0 === t && (t = "window"), e && ("container" !== t || i))) {
                            var n = !1,
                                s = u(),
                                r = "window" === t ? s.innerHeight : i.clientHeight,
                                a = Object.keys(e).map(function (e) {
                                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                                        var t = parseFloat(e.substr(1));
                                        return { value: r * t, point: e };
                                    }
                                    return { value: e, point: e };
                                });
                            a.sort(function (e, t) {
                                return parseInt(e.value, 10) - parseInt(t.value, 10);
                            });
                            for (var o = 0; o < a.length; o += 1) {
                                var l = a[o],
                                    d = l.point,
                                    c = l.value;
                                "window" === t ? s.matchMedia("(min-width: " + c + "px)").matches && (n = d) : c <= i.clientWidth && (n = d);
                            }
                            return n || "max";
                        }
                    },
                },
                checkOverflow: {
                    checkOverflow: function () {
                        var e = this.params,
                            t = this.isLocked,
                            i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                        e.slidesOffsetBefore && e.slidesOffsetAfter && i ? (this.isLocked = i <= this.size) : (this.isLocked = 1 === this.snapGrid.length),
                            (this.allowSlideNext = !this.isLocked),
                            (this.allowSlidePrev = !this.isLocked),
                            t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
                            t && t !== this.isLocked && ((this.isEnd = !1), this.navigation && this.navigation.update());
                    },
                },
                classes: {
                    addClasses: function () {
                        var e,
                            t,
                            i,
                            n = this.classNames,
                            s = this.params,
                            r = this.rtl,
                            a = this.$el,
                            o = this.device,
                            l = this.support,
                            d =
                                ((e = [
                                    "initialized",
                                    s.direction,
                                    { "pointer-events": l.pointerEvents && !l.touch },
                                    { "free-mode": s.freeMode },
                                    { autoheight: s.autoHeight },
                                    { rtl: r },
                                    { multirow: s.slidesPerColumn > 1 },
                                    { "multirow-column": s.slidesPerColumn > 1 && "column" === s.slidesPerColumnFill },
                                    { android: o.android },
                                    { ios: o.ios },
                                    { "css-mode": s.cssMode },
                                ]),
                                (t = s.containerModifierClass),
                                (i = []),
                                e.forEach(function (e) {
                                    "object" == typeof e
                                        ? Object.keys(e).forEach(function (n) {
                                              e[n] && i.push(t + n);
                                          })
                                        : "string" == typeof e && i.push(t + e);
                                }),
                                i);
                        n.push.apply(n, d), a.addClass([].concat(n).join(" ")), this.emitContainerClasses();
                    },
                    removeClasses: function () {
                        var e = this.$el,
                            t = this.classNames;
                        e.removeClass(t.join(" ")), this.emitContainerClasses();
                    },
                },
                images: {
                    loadImage: function (e, t, i, n, s, r) {
                        var a,
                            o = u();
                        function l() {
                            r && r();
                        }
                        k(e).parent("picture")[0] || (e.complete && s) ? l() : t ? (((a = new o.Image()).onload = l), (a.onerror = l), n && (a.sizes = n), i && (a.srcset = i), t && (a.src = t)) : l();
                    },
                    preloadImages: function () {
                        var e = this;
                        function t() {
                            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                        }
                        e.imagesToLoad = e.$el.find("img");
                        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                            var n = e.imagesToLoad[i];
                            e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t);
                        }
                    },
                },
            },
            J = {},
            Q = (function () {
                function e() {
                    for (var t, i, n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
                    if (
                        (1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? (i = s[0]) : ((t = s[0]), (i = s[1])),
                        i || (i = {}),
                        (i = A({}, i)),
                        t && !i.el && (i.el = t),
                        i.el && k(i.el).length > 1)
                    ) {
                        var a = [];
                        return (
                            k(i.el).each(function (t) {
                                var n = A({}, i, { el: t });
                                a.push(new e(n));
                            }),
                            a
                        );
                    }
                    var o = this;
                    (o.__swiper__ = !0),
                        (o.support = D()),
                        (o.device = j({ userAgent: i.userAgent })),
                        (o.browser = N()),
                        (o.eventsListeners = {}),
                        (o.eventsAnyListeners = []),
                        void 0 === o.modules && (o.modules = {}),
                        Object.keys(o.modules).forEach(function (e) {
                            var t = o.modules[e];
                            if (t.params) {
                                var n = Object.keys(t.params)[0],
                                    s = t.params[n];
                                if ("object" != typeof s || null === s) return;
                                if ((["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && !0 === i[n] && (i[n] = { auto: !0 }), !(n in i) || !("enabled" in s))) return;
                                !0 === i[n] && (i[n] = { enabled: !0 }), "object" != typeof i[n] || "enabled" in i[n] || (i[n].enabled = !0), i[n] || (i[n] = { enabled: !1 });
                            }
                        });
                    var l,
                        d,
                        u = A({}, U);
                    return (
                        o.useParams(u),
                        (o.params = A({}, u, J, i)),
                        (o.originalParams = A({}, o.params)),
                        (o.passedParams = A({}, i)),
                        o.params &&
                            o.params.on &&
                            Object.keys(o.params.on).forEach(function (e) {
                                o.on(e, o.params.on[e]);
                            }),
                        o.params && o.params.onAny && o.onAny(o.params.onAny),
                        (o.$ = k),
                        A(o, {
                            enabled: o.params.enabled,
                            el: t,
                            classNames: [],
                            slides: k(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function () {
                                return "horizontal" === o.params.direction;
                            },
                            isVertical: function () {
                                return "vertical" === o.params.direction;
                            },
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: o.params.allowSlideNext,
                            allowSlidePrev: o.params.allowSlidePrev,
                            touchEvents:
                                ((l = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                                (d = ["mousedown", "mousemove", "mouseup"]),
                                o.support.pointerEvents && (d = ["pointerdown", "pointermove", "pointerup"]),
                                (o.touchEventsTouch = { start: l[0], move: l[1], end: l[2], cancel: l[3] }),
                                (o.touchEventsDesktop = { start: d[0], move: d[1], end: d[2] }),
                                o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                focusableElements: o.params.focusableElements,
                                lastClickTime: M(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0,
                            },
                            allowClick: !0,
                            allowTouchMove: o.params.allowTouchMove,
                            touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                            imagesToLoad: [],
                            imagesLoaded: 0,
                        }),
                        o.useModules(),
                        o.emit("_swiper"),
                        o.params.init && o.init(),
                        o
                    );
                }
                var t,
                    i,
                    n,
                    s = e.prototype;
                return (
                    (s.enable = function () {
                        this.enabled || ((this.enabled = !0), this.params.grabCursor && this.setGrabCursor(), this.emit("enable"));
                    }),
                    (s.disable = function () {
                        this.enabled && ((this.enabled = !1), this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"));
                    }),
                    (s.setProgress = function (e, t) {
                        e = Math.min(Math.max(e, 0), 1);
                        var i = this.minTranslate(),
                            n = (this.maxTranslate() - i) * e + i;
                        this.translateTo(n, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses();
                    }),
                    (s.emitContainerClasses = function () {
                        var e = this;
                        if (e.params._emitClasses && e.el) {
                            var t = e.el.className.split(" ").filter(function (t) {
                                return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
                            });
                            e.emit("_containerClasses", t.join(" "));
                        }
                    }),
                    (s.getSlideClasses = function (e) {
                        var t = this;
                        return e.className
                            .split(" ")
                            .filter(function (e) {
                                return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
                            })
                            .join(" ");
                    }),
                    (s.emitSlidesClasses = function () {
                        var e = this;
                        if (e.params._emitClasses && e.el) {
                            var t = [];
                            e.slides.each(function (i) {
                                var n = e.getSlideClasses(i);
                                t.push({ slideEl: i, classNames: n }), e.emit("_slideClass", i, n);
                            }),
                                e.emit("_slideClasses", t);
                        }
                    }),
                    (s.slidesPerViewDynamic = function () {
                        var e = this.params,
                            t = this.slides,
                            i = this.slidesGrid,
                            n = this.size,
                            s = this.activeIndex,
                            r = 1;
                        if (e.centeredSlides) {
                            for (var a, o = t[s].swiperSlideSize, l = s + 1; l < t.length; l += 1) t[l] && !a && ((r += 1), (o += t[l].swiperSlideSize) > n && (a = !0));
                            for (var d = s - 1; d >= 0; d -= 1) t[d] && !a && ((r += 1), (o += t[d].swiperSlideSize) > n && (a = !0));
                        } else for (var u = s + 1; u < t.length; u += 1) i[u] - i[s] < n && (r += 1);
                        return r;
                    }),
                    (s.update = function () {
                        var e = this;
                        if (e && !e.destroyed) {
                            var t = e.snapGrid,
                                i = e.params;
                            i.breakpoints && e.setBreakpoint(),
                                e.updateSize(),
                                e.updateSlides(),
                                e.updateProgress(),
                                e.updateSlidesClasses(),
                                e.params.freeMode
                                    ? (n(), e.params.autoHeight && e.updateAutoHeight())
                                    : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || n(),
                                i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                                e.emit("update");
                        }
                        function n() {
                            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                                i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
                        }
                    }),
                    (s.changeDirection = function (e, t) {
                        void 0 === t && (t = !0);
                        var i = this.params.direction;
                        return (
                            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                            e === i ||
                                ("horizontal" !== e && "vertical" !== e) ||
                                (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e),
                                this.emitContainerClasses(),
                                (this.params.direction = e),
                                this.slides.each(function (t) {
                                    "vertical" === e ? (t.style.width = "") : (t.style.height = "");
                                }),
                                this.emit("changeDirection"),
                                t && this.update()),
                            this
                        );
                    }),
                    (s.mount = function (e) {
                        var t = this;
                        if (t.mounted) return !0;
                        var i = k(e || t.params.el);
                        if (!(e = i[0])) return !1;
                        e.swiper = t;
                        var n = function () {
                                return "." + (t.params.wrapperClass || "").trim().split(" ").join(".");
                            },
                            s = (function () {
                                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                                    var t = k(e.shadowRoot.querySelector(n()));
                                    return (
                                        (t.children = function (e) {
                                            return i.children(e);
                                        }),
                                        t
                                    );
                                }
                                return i.children(n());
                            })();
                        if (0 === s.length && t.params.createElements) {
                            var r = l().createElement("div");
                            (s = k(r)),
                                (r.className = t.params.wrapperClass),
                                i.append(r),
                                i.children("." + t.params.slideClass).each(function (e) {
                                    s.append(e);
                                });
                        }
                        return (
                            A(t, {
                                $el: i,
                                el: e,
                                $wrapperEl: s,
                                wrapperEl: s[0],
                                mounted: !0,
                                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
                                wrongRTL: "-webkit-box" === s.css("display"),
                            }),
                            !0
                        );
                    }),
                    (s.init = function (e) {
                        return (
                            this.initialized ||
                                !1 === this.mount(e) ||
                                (this.emit("beforeInit"),
                                this.params.breakpoints && this.setBreakpoint(),
                                this.addClasses(),
                                this.params.loop && this.loopCreate(),
                                this.updateSize(),
                                this.updateSlides(),
                                this.params.watchOverflow && this.checkOverflow(),
                                this.params.grabCursor && this.enabled && this.setGrabCursor(),
                                this.params.preloadImages && this.preloadImages(),
                                this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit, !1, !0) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit, !1, !0),
                                this.attachEvents(),
                                (this.initialized = !0),
                                this.emit("init"),
                                this.emit("afterInit")),
                            this
                        );
                    }),
                    (s.destroy = function (e, t) {
                        void 0 === e && (e = !0), void 0 === t && (t = !0);
                        var i,
                            n = this,
                            s = n.params,
                            r = n.$el,
                            a = n.$wrapperEl,
                            o = n.slides;
                        return (
                            void 0 === n.params ||
                                n.destroyed ||
                                (n.emit("beforeDestroy"),
                                (n.initialized = !1),
                                n.detachEvents(),
                                s.loop && n.loopDestroy(),
                                t &&
                                    (n.removeClasses(),
                                    r.removeAttr("style"),
                                    a.removeAttr("style"),
                                    o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                                n.emit("destroy"),
                                Object.keys(n.eventsListeners).forEach(function (e) {
                                    n.off(e);
                                }),
                                !1 !== e &&
                                    ((n.$el[0].swiper = null),
                                    (i = n),
                                    Object.keys(i).forEach(function (e) {
                                        try {
                                            i[e] = null;
                                        } catch (e) {}
                                        try {
                                            delete i[e];
                                        } catch (e) {}
                                    })),
                                (n.destroyed = !0)),
                            null
                        );
                    }),
                    (e.extendDefaults = function (e) {
                        A(J, e);
                    }),
                    (e.installModule = function (t) {
                        e.prototype.modules || (e.prototype.modules = {});
                        var i = t.name || Object.keys(e.prototype.modules).length + "_" + M();
                        e.prototype.modules[i] = t;
                    }),
                    (e.use = function (t) {
                        return Array.isArray(t)
                            ? (t.forEach(function (t) {
                                  return e.installModule(t);
                              }),
                              e)
                            : (e.installModule(t), e);
                    }),
                    (t = e),
                    (n = [
                        {
                            key: "extendedDefaults",
                            get: function () {
                                return J;
                            },
                        },
                        {
                            key: "defaults",
                            get: function () {
                                return U;
                            },
                        },
                    ]),
                    (i = null) && K(t.prototype, i),
                    n && K(t, n),
                    e
                );
            })();
        Object.keys(Z).forEach(function (e) {
            Object.keys(Z[e]).forEach(function (t) {
                Q.prototype[t] = Z[e][t];
            });
        }),
            Q.use([$, G]);
        var ee = Q;
        function te() {
            return (te =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var ie = {
                run: function () {
                    var e = this,
                        t = e.slides.eq(e.activeIndex),
                        i = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                        clearTimeout(e.autoplay.timeout),
                        (e.autoplay.timeout = O(function () {
                            var t;
                            e.params.autoplay.reverseDirection
                                ? e.params.loop
                                    ? (e.loopFix(), (t = e.slidePrev(e.params.speed, !0, !0)), e.emit("autoplay"))
                                    : e.isBeginning
                                    ? e.params.autoplay.stopOnLastSlide
                                        ? e.autoplay.stop()
                                        : ((t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0)), e.emit("autoplay"))
                                    : ((t = e.slidePrev(e.params.speed, !0, !0)), e.emit("autoplay"))
                                : e.params.loop
                                ? (e.loopFix(), (t = e.slideNext(e.params.speed, !0, !0)), e.emit("autoplay"))
                                : e.isEnd
                                ? e.params.autoplay.stopOnLastSlide
                                    ? e.autoplay.stop()
                                    : ((t = e.slideTo(0, e.params.speed, !0, !0)), e.emit("autoplay"))
                                : ((t = e.slideNext(e.params.speed, !0, !0)), e.emit("autoplay")),
                                ((e.params.cssMode && e.autoplay.running) || !1 === t) && e.autoplay.run();
                        }, i));
                },
                start: function () {
                    return void 0 === this.autoplay.timeout && !this.autoplay.running && ((this.autoplay.running = !0), this.emit("autoplayStart"), this.autoplay.run(), !0);
                },
                stop: function () {
                    return (
                        !!this.autoplay.running &&
                        void 0 !== this.autoplay.timeout &&
                        (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), (this.autoplay.timeout = void 0)), (this.autoplay.running = !1), this.emit("autoplayStop"), !0)
                    );
                },
                pause: function (e) {
                    var t = this;
                    t.autoplay.running &&
                        (t.autoplay.paused ||
                            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                            (t.autoplay.paused = !0),
                            0 !== e && t.params.autoplay.waitForTransition
                                ? ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
                                      t.$wrapperEl[0].addEventListener(e, t.autoplay.onTransitionEnd);
                                  })
                                : ((t.autoplay.paused = !1), t.autoplay.run())));
                },
                onVisibilityChange: function () {
                    var e = l();
                    "hidden" === e.visibilityState && this.autoplay.running && this.autoplay.pause(), "visible" === e.visibilityState && this.autoplay.paused && (this.autoplay.run(), (this.autoplay.paused = !1));
                },
                onTransitionEnd: function (e) {
                    var t = this;
                    t &&
                        !t.destroyed &&
                        t.$wrapperEl &&
                        e.target === t.$wrapperEl[0] &&
                        (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
                            t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd);
                        }),
                        (t.autoplay.paused = !1),
                        t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
                },
                onMouseEnter: function () {
                    var e = this;
                    e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause(),
                        ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
                            e.$wrapperEl[0].removeEventListener(t, e.autoplay.onTransitionEnd);
                        });
                },
                onMouseLeave: function () {
                    this.params.autoplay.disableOnInteraction || ((this.autoplay.paused = !1), this.autoplay.run());
                },
                attachMouseEvents: function () {
                    this.params.autoplay.pauseOnMouseEnter && (this.$el.on("mouseenter", this.autoplay.onMouseEnter), this.$el.on("mouseleave", this.autoplay.onMouseLeave));
                },
                detachMouseEvents: function () {
                    this.$el.off("mouseenter", this.autoplay.onMouseEnter), this.$el.off("mouseleave", this.autoplay.onMouseLeave);
                },
            },
            ne = {
                name: "autoplay",
                params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1 } },
                create: function () {
                    z(this, { autoplay: te({}, ie, { running: !1, paused: !1 }) });
                },
                on: {
                    init: function (e) {
                        e.params.autoplay.enabled && (e.autoplay.start(), l().addEventListener("visibilitychange", e.autoplay.onVisibilityChange), e.autoplay.attachMouseEvents());
                    },
                    beforeTransitionStart: function (e, t, i) {
                        e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
                    },
                    sliderFirstMove: function (e) {
                        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
                    },
                    touchEnd: function (e) {
                        e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
                    },
                    destroy: function (e) {
                        e.autoplay.detachMouseEvents(), e.autoplay.running && e.autoplay.stop(), l().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
                    },
                },
            };
        function se() {
            return (se =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var re = {
                toggleEl: function (e, t) {
                    e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t);
                },
                update: function () {
                    var e = this.params.navigation,
                        t = this.navigation.toggleEl;
                    if (!this.params.loop) {
                        var i = this.navigation,
                            n = i.$nextEl,
                            s = i.$prevEl;
                        s && s.length > 0 && (this.isBeginning ? t(s, !0) : t(s, !1), this.params.watchOverflow && this.enabled && s[this.isLocked ? "addClass" : "removeClass"](e.lockClass)),
                            n && n.length > 0 && (this.isEnd ? t(n, !0) : t(n, !1), this.params.watchOverflow && this.enabled && n[this.isLocked ? "addClass" : "removeClass"](e.lockClass));
                    }
                },
                onPrevClick: function (e) {
                    e.preventDefault(), (this.isBeginning && !this.params.loop) || this.slidePrev();
                },
                onNextClick: function (e) {
                    e.preventDefault(), (this.isEnd && !this.params.loop) || this.slideNext();
                },
                init: function () {
                    var e,
                        t,
                        i = this.params.navigation;
                    ((this.params.navigation = (function (e, t, i, n) {
                        var s = l();
                        return (
                            i &&
                                Object.keys(n).forEach(function (i) {
                                    if (!t[i] && !0 === t.auto) {
                                        var r = s.createElement("div");
                                        (r.className = n[i]), e.append(r), (t[i] = r);
                                    }
                                }),
                            t
                        );
                    })(this.$el, this.params.navigation, this.params.createElements, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" })),
                    i.nextEl || i.prevEl) &&
                        (i.nextEl && ((e = k(i.nextEl)), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))),
                        i.prevEl && ((t = k(i.prevEl)), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))),
                        e && e.length > 0 && e.on("click", this.navigation.onNextClick),
                        t && t.length > 0 && t.on("click", this.navigation.onPrevClick),
                        A(this.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }),
                        this.enabled || (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)));
                },
                destroy: function () {
                    var e = this.navigation,
                        t = e.$nextEl,
                        i = e.$prevEl;
                    t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)),
                        i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
                },
            },
            ae = {
                name: "navigation",
                params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
                create: function () {
                    z(this, { navigation: se({}, re) });
                },
                on: {
                    init: function (e) {
                        e.navigation.init(), e.navigation.update();
                    },
                    toEdge: function (e) {
                        e.navigation.update();
                    },
                    fromEdge: function (e) {
                        e.navigation.update();
                    },
                    destroy: function (e) {
                        e.navigation.destroy();
                    },
                    "enable disable": function (e) {
                        var t = e.navigation,
                            i = t.$nextEl,
                            n = t.$prevEl;
                        i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), n && n[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass);
                    },
                    click: function (e, t) {
                        var i = e.navigation,
                            n = i.$nextEl,
                            s = i.$prevEl,
                            r = t.target;
                        if (e.params.navigation.hideOnClick && !k(r).is(s) && !k(r).is(n)) {
                            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === r || e.pagination.el.contains(r))) return;
                            var a;
                            n ? (a = n.hasClass(e.params.navigation.hiddenClass)) : s && (a = s.hasClass(e.params.navigation.hiddenClass)),
                                !0 === a ? e.emit("navigationShow") : e.emit("navigationHide"),
                                n && n.toggleClass(e.params.navigation.hiddenClass),
                                s && s.toggleClass(e.params.navigation.hiddenClass);
                        }
                    },
                },
            };
        s.a.init({ once: !0, disable: "phone", duration: 750, easing: "ease-out-quart" }), ee.use([ne, ae]);
        new ee(".carousel", { slidesPerView: "auto", grabCursor: !0, loop: !0, centeredSlides: !0, initialSlide: 1, spaceBetween: 24, autoplay: { delay: 7e3 }, navigation: { nextEl: ".carousel-next", prevEl: ".carousel-prev" } });
        document.addEventListener("DOMContentLoaded", function () {
            ((e = null) => {
                const t = document.querySelectorAll("a, button, input, select, textarea, label, .form-switch, [tabindex]"),
                    i = (i) => {
                        const n = i ? "" : "none";
                        t.forEach((t) => {
                            (!e || "outline" === e) && t.style.setProperty("outline", n), (!e || "box-shadow" === e) && t.style.setProperty("box-shadow", n);
                        });
                    },
                    n = () => {
                        t.length > 0 && (i(!1), window.addEventListener("keydown", s)), window.removeEventListener("mousedown", n);
                    },
                    s = (e) => {
                        9 === e.keyCode && (i(!0), window.removeEventListener("keydown", s), window.addEventListener("mousedown", n));
                    };
                window.addEventListener("mousedown", n);
            })("outline");
        });
        var oe = document.querySelectorAll(".light-switch");
        oe.length > 0 &&
            oe.forEach(function (e, t) {
                ("true" !== localStorage.getItem("dark-mode") && "dark-mode" in localStorage) || (e.checked = !0),
                    e.addEventListener("change", function () {
                        var i = e.checked;
                        oe.forEach(function (e, n) {
                            n !== t && (e.checked = i);
                        }),
                            e.checked ? (document.documentElement.classList.add("dark"), localStorage.setItem("dark-mode", !0)) : (document.documentElement.classList.remove("dark"), localStorage.setItem("dark-mode", !1));
                    });
            });
    },
]);
