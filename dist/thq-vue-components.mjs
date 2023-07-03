var Q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function K(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var P = { exports: {} };
(function(d, y) {
  (function(g, C) {
    d.exports = C();
  })(Q, function() {
    var g = 1e3, C = 6e4, b = 36e5, L = "millisecond", w = "second", O = "minute", f = "hour", $ = "day", W = "week", p = "month", v = "quarter", M = "year", S = "date", z = "Invalid Date", q = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, X = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, B = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(s) {
      var n = ["th", "st", "nd", "rd"], t = s % 100;
      return "[" + s + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
    } }, I = function(s, n, t) {
      var r = String(s);
      return !r || r.length >= n ? s : "" + Array(n + 1 - r.length).join(t) + s;
    }, G = { s: I, z: function(s) {
      var n = -s.utcOffset(), t = Math.abs(n), r = Math.floor(t / 60), e = t % 60;
      return (n <= 0 ? "+" : "-") + I(r, 2, "0") + ":" + I(e, 2, "0");
    }, m: function s(n, t) {
      if (n.date() < t.date())
        return -s(t, n);
      var r = 12 * (t.year() - n.year()) + (t.month() - n.month()), e = n.clone().add(r, p), i = t - e < 0, a = n.clone().add(r + (i ? -1 : 1), p);
      return +(-(r + (t - e) / (i ? e - a : a - e)) || 0);
    }, a: function(s) {
      return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
    }, p: function(s) {
      return { M: p, y: M, w: W, d: $, D: S, h: f, m: O, s: w, ms: L, Q: v }[s] || String(s || "").toLowerCase().replace(/s$/, "");
    }, u: function(s) {
      return s === void 0;
    } }, N = "en", Y = {};
    Y[N] = B;
    var V = function(s) {
      return s instanceof A;
    }, x = function s(n, t, r) {
      var e;
      if (!n)
        return N;
      if (typeof n == "string") {
        var i = n.toLowerCase();
        Y[i] && (e = i), t && (Y[i] = t, e = i);
        var a = n.split("-");
        if (!e && a.length > 1)
          return s(a[0]);
      } else {
        var o = n.name;
        Y[o] = n, e = o;
      }
      return !r && e && (N = e), e || !r && N;
    }, h = function(s, n) {
      if (V(s))
        return s.clone();
      var t = typeof n == "object" ? n : {};
      return t.date = s, t.args = arguments, new A(t);
    }, u = G;
    u.l = x, u.i = V, u.w = function(s, n) {
      return h(s, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var A = function() {
      function s(t) {
        this.$L = x(t.locale, null, !0), this.parse(t);
      }
      var n = s.prototype;
      return n.parse = function(t) {
        this.$d = function(r) {
          var e = r.date, i = r.utc;
          if (e === null)
            return /* @__PURE__ */ new Date(NaN);
          if (u.u(e))
            return /* @__PURE__ */ new Date();
          if (e instanceof Date)
            return new Date(e);
          if (typeof e == "string" && !/Z$/i.test(e)) {
            var a = e.match(q);
            if (a) {
              var o = a[2] - 1 || 0, c = (a[7] || "0").substring(0, 3);
              return i ? new Date(Date.UTC(a[1], o, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, c)) : new Date(a[1], o, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, c);
            }
          }
          return new Date(e);
        }(t), this.$x = t.x || {}, this.init();
      }, n.init = function() {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, n.$utils = function() {
        return u;
      }, n.isValid = function() {
        return this.$d.toString() !== z;
      }, n.isSame = function(t, r) {
        var e = h(t);
        return this.startOf(r) <= e && e <= this.endOf(r);
      }, n.isAfter = function(t, r) {
        return h(t) < this.startOf(r);
      }, n.isBefore = function(t, r) {
        return this.endOf(r) < h(t);
      }, n.$g = function(t, r, e) {
        return u.u(t) ? this[r] : this.set(e, t);
      }, n.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n.valueOf = function() {
        return this.$d.getTime();
      }, n.startOf = function(t, r) {
        var e = this, i = !!u.u(r) || r, a = u.p(t), o = function(H, _) {
          var T = u.w(e.$u ? Date.UTC(e.$y, _, H) : new Date(e.$y, _, H), e);
          return i ? T : T.endOf($);
        }, c = function(H, _) {
          return u.w(e.toDate()[H].apply(e.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(_)), e);
        }, l = this.$W, m = this.$M, D = this.$D, F = "set" + (this.$u ? "UTC" : "");
        switch (a) {
          case M:
            return i ? o(1, 0) : o(31, 11);
          case p:
            return i ? o(1, m) : o(0, m + 1);
          case W:
            var k = this.$locale().weekStart || 0, R = (l < k ? l + 7 : l) - k;
            return o(i ? D - R : D + (6 - R), m);
          case $:
          case S:
            return c(F + "Hours", 0);
          case f:
            return c(F + "Minutes", 1);
          case O:
            return c(F + "Seconds", 2);
          case w:
            return c(F + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(t) {
        return this.startOf(t, !1);
      }, n.$set = function(t, r) {
        var e, i = u.p(t), a = "set" + (this.$u ? "UTC" : ""), o = (e = {}, e[$] = a + "Date", e[S] = a + "Date", e[p] = a + "Month", e[M] = a + "FullYear", e[f] = a + "Hours", e[O] = a + "Minutes", e[w] = a + "Seconds", e[L] = a + "Milliseconds", e)[i], c = i === $ ? this.$D + (r - this.$W) : r;
        if (i === p || i === M) {
          var l = this.clone().set(S, 1);
          l.$d[o](c), l.init(), this.$d = l.set(S, Math.min(this.$D, l.daysInMonth())).$d;
        } else
          o && this.$d[o](c);
        return this.init(), this;
      }, n.set = function(t, r) {
        return this.clone().$set(t, r);
      }, n.get = function(t) {
        return this[u.p(t)]();
      }, n.add = function(t, r) {
        var e, i = this;
        t = Number(t);
        var a = u.p(r), o = function(m) {
          var D = h(i);
          return u.w(D.date(D.date() + Math.round(m * t)), i);
        };
        if (a === p)
          return this.set(p, this.$M + t);
        if (a === M)
          return this.set(M, this.$y + t);
        if (a === $)
          return o(1);
        if (a === W)
          return o(7);
        var c = (e = {}, e[O] = C, e[f] = b, e[w] = g, e)[a] || 1, l = this.$d.getTime() + t * c;
        return u.w(l, this);
      }, n.subtract = function(t, r) {
        return this.add(-1 * t, r);
      }, n.format = function(t) {
        var r = this, e = this.$locale();
        if (!this.isValid())
          return e.invalidDate || z;
        var i = t || "YYYY-MM-DDTHH:mm:ssZ", a = u.z(this), o = this.$H, c = this.$m, l = this.$M, m = e.weekdays, D = e.months, F = e.meridiem, k = function(_, T, j, U) {
          return _ && (_[T] || _(r, i)) || j[T].slice(0, U);
        }, R = function(_) {
          return u.s(o % 12 || 12, _, "0");
        }, H = F || function(_, T, j) {
          var U = _ < 12 ? "AM" : "PM";
          return j ? U.toLowerCase() : U;
        };
        return i.replace(X, function(_, T) {
          return T || function(j) {
            switch (j) {
              case "YY":
                return String(r.$y).slice(-2);
              case "YYYY":
                return u.s(r.$y, 4, "0");
              case "M":
                return l + 1;
              case "MM":
                return u.s(l + 1, 2, "0");
              case "MMM":
                return k(e.monthsShort, l, D, 3);
              case "MMMM":
                return k(D, l);
              case "D":
                return r.$D;
              case "DD":
                return u.s(r.$D, 2, "0");
              case "d":
                return String(r.$W);
              case "dd":
                return k(e.weekdaysMin, r.$W, m, 2);
              case "ddd":
                return k(e.weekdaysShort, r.$W, m, 3);
              case "dddd":
                return m[r.$W];
              case "H":
                return String(o);
              case "HH":
                return u.s(o, 2, "0");
              case "h":
                return R(1);
              case "hh":
                return R(2);
              case "a":
                return H(o, c, !0);
              case "A":
                return H(o, c, !1);
              case "m":
                return String(c);
              case "mm":
                return u.s(c, 2, "0");
              case "s":
                return String(r.$s);
              case "ss":
                return u.s(r.$s, 2, "0");
              case "SSS":
                return u.s(r.$ms, 3, "0");
              case "Z":
                return a;
            }
            return null;
          }(_) || a.replace(":", "");
        });
      }, n.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n.diff = function(t, r, e) {
        var i, a = this, o = u.p(r), c = h(t), l = (c.utcOffset() - this.utcOffset()) * C, m = this - c, D = function() {
          return u.m(a, c);
        };
        switch (o) {
          case M:
            i = D() / 12;
            break;
          case p:
            i = D();
            break;
          case v:
            i = D() / 3;
            break;
          case W:
            i = (m - l) / 6048e5;
            break;
          case $:
            i = (m - l) / 864e5;
            break;
          case f:
            i = m / b;
            break;
          case O:
            i = m / C;
            break;
          case w:
            i = m / g;
            break;
          default:
            i = m;
        }
        return e ? i : u.a(i);
      }, n.daysInMonth = function() {
        return this.endOf(p).$D;
      }, n.$locale = function() {
        return Y[this.$L];
      }, n.locale = function(t, r) {
        if (!t)
          return this.$L;
        var e = this.clone(), i = x(t, r, !0);
        return i && (e.$L = i), e;
      }, n.clone = function() {
        return u.w(this.$d, this);
      }, n.toDate = function() {
        return new Date(this.valueOf());
      }, n.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, n.toISOString = function() {
        return this.$d.toISOString();
      }, n.toString = function() {
        return this.$d.toUTCString();
      }, s;
    }(), E = A.prototype;
    return h.prototype = E, [["$ms", L], ["$s", w], ["$m", O], ["$H", f], ["$W", $], ["$M", p], ["$y", M], ["$D", S]].forEach(function(s) {
      E[s[1]] = function(n) {
        return this.$g(n, s[0], s[1]);
      };
    }), h.extend = function(s, n) {
      return s.$i || (s(n, A, h), s.$i = !0), h;
    }, h.locale = x, h.isDayjs = V, h.unix = function(s) {
      return h(1e3 * s);
    }, h.en = Y[N], h.Ls = Y, h.p = {}, h;
  });
})(P);
var tt = P.exports;
const J = /* @__PURE__ */ K(tt);
function Z(d, y, g, C, b, L, w, O) {
  var f = typeof d == "function" ? d.options : d;
  y && (f.render = y, f.staticRenderFns = g, f._compiled = !0), C && (f.functional = !0), L && (f._scopeId = "data-v-" + L);
  var $;
  if (w ? ($ = function(v) {
    v = v || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !v && typeof __VUE_SSR_CONTEXT__ < "u" && (v = __VUE_SSR_CONTEXT__), b && b.call(this, v), v && v._registeredComponents && v._registeredComponents.add(w);
  }, f._ssrRegister = $) : b && ($ = O ? function() {
    b.call(
      this,
      (f.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : b), $)
    if (f.functional) {
      f._injectStyles = $;
      var W = f.render;
      f.render = function(M, S) {
        return $.call(S), W(M, S);
      };
    } else {
      var p = f.beforeCreate;
      f.beforeCreate = p ? [].concat(p, $) : [$];
    }
  return {
    exports: d,
    options: f
  };
}
const et = {
  name: "DateTimePrimitive",
  props: {
    date: { type: [String, Date, Number], required: !0 },
    format: { type: String, default: "DD/MM/YYYY" }
  },
  data() {
    return {
      formattedDate: ""
    };
  },
  created() {
    this.formatDate();
  },
  watch: {
    date() {
      this.formatDate();
    },
    format() {
      this.formatDate();
    }
  },
  methods: {
    formatDate() {
      const d = J.unix(new Date(this.date).getTime() / 1e3);
      this.formattedDate = J(d).format(this.format);
    }
  }
};
var nt = function() {
  var y = this, g = y._self._c;
  return g("span", [y._v(y._s(y.formattedDate))]);
}, rt = [], st = /* @__PURE__ */ Z(
  et,
  nt,
  rt,
  !1,
  null,
  null,
  null,
  null
);
const ft = st.exports, it = {
  name: "DangerousHTML",
  props: ["html"],
  mounted() {
    if (!this.html || !this.$refs?.wrapper)
      return;
    const d = document.createRange().createContextualFragment(this.html);
    this.$refs.wrapper.append(d);
  }
};
var at = function() {
  var y = this, g = y._self._c;
  return g("div", { ref: "wrapper", style: { display: "contents" } });
}, ut = [], ot = /* @__PURE__ */ Z(
  it,
  at,
  ut,
  !1,
  null,
  null,
  null,
  null
);
const ct = ot.exports;
export {
  ct as DangerousHTML,
  ft as DateTimePrimitive
};
