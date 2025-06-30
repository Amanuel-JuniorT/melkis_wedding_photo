(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) c(h);
  new MutationObserver((h) => {
    for (const o of h)
      if (o.type === "childList")
        for (const g of o.addedNodes)
          g.tagName === "LINK" && g.rel === "modulepreload" && c(g);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(h) {
    const o = {};
    return (
      h.integrity && (o.integrity = h.integrity),
      h.referrerPolicy && (o.referrerPolicy = h.referrerPolicy),
      h.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : h.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function c(h) {
    if (h.ep) return;
    h.ep = !0;
    const o = s(h);
    fetch(h.href, o);
  }
})();
var Pf = { exports: {} },
  mi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var u1;
function no() {
  if (u1) return mi;
  u1 = 1;
  var u = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function s(c, h, o) {
    var g = null;
    if (
      (o !== void 0 && (g = "" + o),
      h.key !== void 0 && (g = "" + h.key),
      "key" in h)
    ) {
      o = {};
      for (var m in h) m !== "key" && (o[m] = h[m]);
    } else o = h;
    return (
      (h = o.ref),
      { $$typeof: u, type: c, key: g, ref: h !== void 0 ? h : null, props: o }
    );
  }
  return (mi.Fragment = i), (mi.jsx = s), (mi.jsxs = s), mi;
}
var f1;
function uo() {
  return f1 || ((f1 = 1), (Pf.exports = no())), Pf.exports;
}
var Ve = uo(),
  ts = { exports: {} },
  lt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var s1;
function fo() {
  if (s1) return lt;
  s1 = 1;
  var u = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    h = Symbol.for("react.profiler"),
    o = Symbol.for("react.consumer"),
    g = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    v = Symbol.for("react.memo"),
    E = Symbol.for("react.lazy"),
    z = Symbol.iterator;
  function O(p) {
    return p === null || typeof p != "object"
      ? null
      : ((p = (z && p[z]) || p["@@iterator"]),
        typeof p == "function" ? p : null);
  }
  var D = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    B = Object.assign,
    q = {};
  function Y(p, C, Z) {
    (this.props = p),
      (this.context = C),
      (this.refs = q),
      (this.updater = Z || D);
  }
  (Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (p, C) {
      if (typeof p != "object" && typeof p != "function" && p != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, p, C, "setState");
    }),
    (Y.prototype.forceUpdate = function (p) {
      this.updater.enqueueForceUpdate(this, p, "forceUpdate");
    });
  function X() {}
  X.prototype = Y.prototype;
  function et(p, C, Z) {
    (this.props = p),
      (this.context = C),
      (this.refs = q),
      (this.updater = Z || D);
  }
  var K = (et.prototype = new X());
  (K.constructor = et), B(K, Y.prototype), (K.isPureReactComponent = !0);
  var Q = Array.isArray,
    G = { H: null, A: null, T: null, S: null, V: null },
    V = Object.prototype.hasOwnProperty;
  function nt(p, C, Z, L, F, ht) {
    return (
      (Z = ht.ref),
      { $$typeof: u, type: p, key: C, ref: Z !== void 0 ? Z : null, props: ht }
    );
  }
  function rt(p, C) {
    return nt(p.type, C, void 0, void 0, void 0, p.props);
  }
  function ot(p) {
    return typeof p == "object" && p !== null && p.$$typeof === u;
  }
  function St(p) {
    var C = { "=": "=0", ":": "=2" };
    return (
      "$" +
      p.replace(/[=:]/g, function (Z) {
        return C[Z];
      })
    );
  }
  var yt = /\/+/g;
  function st(p, C) {
    return typeof p == "object" && p !== null && p.key != null
      ? St("" + p.key)
      : C.toString(36);
  }
  function Tt() {}
  function P(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (
          (typeof p.status == "string"
            ? p.then(Tt, Tt)
            : ((p.status = "pending"),
              p.then(
                function (C) {
                  p.status === "pending" &&
                    ((p.status = "fulfilled"), (p.value = C));
                },
                function (C) {
                  p.status === "pending" &&
                    ((p.status = "rejected"), (p.reason = C));
                }
              )),
          p.status)
        ) {
          case "fulfilled":
            return p.value;
          case "rejected":
            throw p.reason;
        }
    }
    throw p;
  }
  function Rt(p, C, Z, L, F) {
    var ht = typeof p;
    (ht === "undefined" || ht === "boolean") && (p = null);
    var tt = !1;
    if (p === null) tt = !0;
    else
      switch (ht) {
        case "bigint":
        case "string":
        case "number":
          tt = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case u:
            case i:
              tt = !0;
              break;
            case E:
              return (tt = p._init), Rt(tt(p._payload), C, Z, L, F);
          }
      }
    if (tt)
      return (
        (F = F(p)),
        (tt = L === "" ? "." + st(p, 0) : L),
        Q(F)
          ? ((Z = ""),
            tt != null && (Z = tt.replace(yt, "$&/") + "/"),
            Rt(F, C, Z, "", function (we) {
              return we;
            }))
          : F != null &&
            (ot(F) &&
              (F = rt(
                F,
                Z +
                  (F.key == null || (p && p.key === F.key)
                    ? ""
                    : ("" + F.key).replace(yt, "$&/") + "/") +
                  tt
              )),
            C.push(F)),
        1
      );
    tt = 0;
    var ee = L === "" ? "." : L + ":";
    if (Q(p))
      for (var xt = 0; xt < p.length; xt++)
        (L = p[xt]), (ht = ee + st(L, xt)), (tt += Rt(L, C, Z, ht, F));
    else if (((xt = O(p)), typeof xt == "function"))
      for (p = xt.call(p), xt = 0; !(L = p.next()).done; )
        (L = L.value), (ht = ee + st(L, xt++)), (tt += Rt(L, C, Z, ht, F));
    else if (ht === "object") {
      if (typeof p.then == "function") return Rt(P(p), C, Z, L, F);
      throw (
        ((C = String(p)),
        Error(
          "Objects are not valid as a React child (found: " +
            (C === "[object Object]"
              ? "object with keys {" + Object.keys(p).join(", ") + "}"
              : C) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return tt;
  }
  function U(p, C, Z) {
    if (p == null) return p;
    var L = [],
      F = 0;
    return (
      Rt(p, L, "", "", function (ht) {
        return C.call(Z, ht, F++);
      }),
      L
    );
  }
  function j(p) {
    if (p._status === -1) {
      var C = p._result;
      (C = C()),
        C.then(
          function (Z) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 1), (p._result = Z));
          },
          function (Z) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 2), (p._result = Z));
          }
        ),
        p._status === -1 && ((p._status = 0), (p._result = C));
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var k =
    typeof reportError == "function"
      ? reportError
      : function (p) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var C = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof p == "object" &&
                p !== null &&
                typeof p.message == "string"
                  ? String(p.message)
                  : String(p),
              error: p,
            });
            if (!window.dispatchEvent(C)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", p);
            return;
          }
          console.error(p);
        };
  function At() {}
  return (
    (lt.Children = {
      map: U,
      forEach: function (p, C, Z) {
        U(
          p,
          function () {
            C.apply(this, arguments);
          },
          Z
        );
      },
      count: function (p) {
        var C = 0;
        return (
          U(p, function () {
            C++;
          }),
          C
        );
      },
      toArray: function (p) {
        return (
          U(p, function (C) {
            return C;
          }) || []
        );
      },
      only: function (p) {
        if (!ot(p))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return p;
      },
    }),
    (lt.Component = Y),
    (lt.Fragment = s),
    (lt.Profiler = h),
    (lt.PureComponent = et),
    (lt.StrictMode = c),
    (lt.Suspense = y),
    (lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G),
    (lt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (p) {
        return G.H.useMemoCache(p);
      },
    }),
    (lt.cache = function (p) {
      return function () {
        return p.apply(null, arguments);
      };
    }),
    (lt.cloneElement = function (p, C, Z) {
      if (p == null)
        throw Error(
          "The argument must be a React element, but you passed " + p + "."
        );
      var L = B({}, p.props),
        F = p.key,
        ht = void 0;
      if (C != null)
        for (tt in (C.ref !== void 0 && (ht = void 0),
        C.key !== void 0 && (F = "" + C.key),
        C))
          !V.call(C, tt) ||
            tt === "key" ||
            tt === "__self" ||
            tt === "__source" ||
            (tt === "ref" && C.ref === void 0) ||
            (L[tt] = C[tt]);
      var tt = arguments.length - 2;
      if (tt === 1) L.children = Z;
      else if (1 < tt) {
        for (var ee = Array(tt), xt = 0; xt < tt; xt++)
          ee[xt] = arguments[xt + 2];
        L.children = ee;
      }
      return nt(p.type, F, void 0, void 0, ht, L);
    }),
    (lt.createContext = function (p) {
      return (
        (p = {
          $$typeof: g,
          _currentValue: p,
          _currentValue2: p,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (p.Provider = p),
        (p.Consumer = { $$typeof: o, _context: p }),
        p
      );
    }),
    (lt.createElement = function (p, C, Z) {
      var L,
        F = {},
        ht = null;
      if (C != null)
        for (L in (C.key !== void 0 && (ht = "" + C.key), C))
          V.call(C, L) &&
            L !== "key" &&
            L !== "__self" &&
            L !== "__source" &&
            (F[L] = C[L]);
      var tt = arguments.length - 2;
      if (tt === 1) F.children = Z;
      else if (1 < tt) {
        for (var ee = Array(tt), xt = 0; xt < tt; xt++)
          ee[xt] = arguments[xt + 2];
        F.children = ee;
      }
      if (p && p.defaultProps)
        for (L in ((tt = p.defaultProps), tt))
          F[L] === void 0 && (F[L] = tt[L]);
      return nt(p, ht, void 0, void 0, null, F);
    }),
    (lt.createRef = function () {
      return { current: null };
    }),
    (lt.forwardRef = function (p) {
      return { $$typeof: m, render: p };
    }),
    (lt.isValidElement = ot),
    (lt.lazy = function (p) {
      return { $$typeof: E, _payload: { _status: -1, _result: p }, _init: j };
    }),
    (lt.memo = function (p, C) {
      return { $$typeof: v, type: p, compare: C === void 0 ? null : C };
    }),
    (lt.startTransition = function (p) {
      var C = G.T,
        Z = {};
      G.T = Z;
      try {
        var L = p(),
          F = G.S;
        F !== null && F(Z, L),
          typeof L == "object" &&
            L !== null &&
            typeof L.then == "function" &&
            L.then(At, k);
      } catch (ht) {
        k(ht);
      } finally {
        G.T = C;
      }
    }),
    (lt.unstable_useCacheRefresh = function () {
      return G.H.useCacheRefresh();
    }),
    (lt.use = function (p) {
      return G.H.use(p);
    }),
    (lt.useActionState = function (p, C, Z) {
      return G.H.useActionState(p, C, Z);
    }),
    (lt.useCallback = function (p, C) {
      return G.H.useCallback(p, C);
    }),
    (lt.useContext = function (p) {
      return G.H.useContext(p);
    }),
    (lt.useDebugValue = function () {}),
    (lt.useDeferredValue = function (p, C) {
      return G.H.useDeferredValue(p, C);
    }),
    (lt.useEffect = function (p, C, Z) {
      var L = G.H;
      if (typeof Z == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return L.useEffect(p, C);
    }),
    (lt.useId = function () {
      return G.H.useId();
    }),
    (lt.useImperativeHandle = function (p, C, Z) {
      return G.H.useImperativeHandle(p, C, Z);
    }),
    (lt.useInsertionEffect = function (p, C) {
      return G.H.useInsertionEffect(p, C);
    }),
    (lt.useLayoutEffect = function (p, C) {
      return G.H.useLayoutEffect(p, C);
    }),
    (lt.useMemo = function (p, C) {
      return G.H.useMemo(p, C);
    }),
    (lt.useOptimistic = function (p, C) {
      return G.H.useOptimistic(p, C);
    }),
    (lt.useReducer = function (p, C, Z) {
      return G.H.useReducer(p, C, Z);
    }),
    (lt.useRef = function (p) {
      return G.H.useRef(p);
    }),
    (lt.useState = function (p) {
      return G.H.useState(p);
    }),
    (lt.useSyncExternalStore = function (p, C, Z) {
      return G.H.useSyncExternalStore(p, C, Z);
    }),
    (lt.useTransition = function () {
      return G.H.useTransition();
    }),
    (lt.version = "19.1.0"),
    lt
  );
}
var c1;
function hs() {
  return c1 || ((c1 = 1), (ts.exports = fo())), ts.exports;
}
var Cn = hs(),
  es = { exports: {} },
  Si = {},
  ls = { exports: {} },
  as = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r1;
function so() {
  return (
    r1 ||
      ((r1 = 1),
      (function (u) {
        function i(U, j) {
          var k = U.length;
          U.push(j);
          t: for (; 0 < k; ) {
            var At = (k - 1) >>> 1,
              p = U[At];
            if (0 < h(p, j)) (U[At] = j), (U[k] = p), (k = At);
            else break t;
          }
        }
        function s(U) {
          return U.length === 0 ? null : U[0];
        }
        function c(U) {
          if (U.length === 0) return null;
          var j = U[0],
            k = U.pop();
          if (k !== j) {
            U[0] = k;
            t: for (var At = 0, p = U.length, C = p >>> 1; At < C; ) {
              var Z = 2 * (At + 1) - 1,
                L = U[Z],
                F = Z + 1,
                ht = U[F];
              if (0 > h(L, k))
                F < p && 0 > h(ht, L)
                  ? ((U[At] = ht), (U[F] = k), (At = F))
                  : ((U[At] = L), (U[Z] = k), (At = Z));
              else if (F < p && 0 > h(ht, k))
                (U[At] = ht), (U[F] = k), (At = F);
              else break t;
            }
          }
          return j;
        }
        function h(U, j) {
          var k = U.sortIndex - j.sortIndex;
          return k !== 0 ? k : U.id - j.id;
        }
        if (
          ((u.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var o = performance;
          u.unstable_now = function () {
            return o.now();
          };
        } else {
          var g = Date,
            m = g.now();
          u.unstable_now = function () {
            return g.now() - m;
          };
        }
        var y = [],
          v = [],
          E = 1,
          z = null,
          O = 3,
          D = !1,
          B = !1,
          q = !1,
          Y = !1,
          X = typeof setTimeout == "function" ? setTimeout : null,
          et = typeof clearTimeout == "function" ? clearTimeout : null,
          K = typeof setImmediate < "u" ? setImmediate : null;
        function Q(U) {
          for (var j = s(v); j !== null; ) {
            if (j.callback === null) c(v);
            else if (j.startTime <= U)
              c(v), (j.sortIndex = j.expirationTime), i(y, j);
            else break;
            j = s(v);
          }
        }
        function G(U) {
          if (((q = !1), Q(U), !B))
            if (s(y) !== null) (B = !0), V || ((V = !0), st());
            else {
              var j = s(v);
              j !== null && Rt(G, j.startTime - U);
            }
        }
        var V = !1,
          nt = -1,
          rt = 5,
          ot = -1;
        function St() {
          return Y ? !0 : !(u.unstable_now() - ot < rt);
        }
        function yt() {
          if (((Y = !1), V)) {
            var U = u.unstable_now();
            ot = U;
            var j = !0;
            try {
              t: {
                (B = !1), q && ((q = !1), et(nt), (nt = -1)), (D = !0);
                var k = O;
                try {
                  e: {
                    for (
                      Q(U), z = s(y);
                      z !== null && !(z.expirationTime > U && St());

                    ) {
                      var At = z.callback;
                      if (typeof At == "function") {
                        (z.callback = null), (O = z.priorityLevel);
                        var p = At(z.expirationTime <= U);
                        if (((U = u.unstable_now()), typeof p == "function")) {
                          (z.callback = p), Q(U), (j = !0);
                          break e;
                        }
                        z === s(y) && c(y), Q(U);
                      } else c(y);
                      z = s(y);
                    }
                    if (z !== null) j = !0;
                    else {
                      var C = s(v);
                      C !== null && Rt(G, C.startTime - U), (j = !1);
                    }
                  }
                  break t;
                } finally {
                  (z = null), (O = k), (D = !1);
                }
                j = void 0;
              }
            } finally {
              j ? st() : (V = !1);
            }
          }
        }
        var st;
        if (typeof K == "function")
          st = function () {
            K(yt);
          };
        else if (typeof MessageChannel < "u") {
          var Tt = new MessageChannel(),
            P = Tt.port2;
          (Tt.port1.onmessage = yt),
            (st = function () {
              P.postMessage(null);
            });
        } else
          st = function () {
            X(yt, 0);
          };
        function Rt(U, j) {
          nt = X(function () {
            U(u.unstable_now());
          }, j);
        }
        (u.unstable_IdlePriority = 5),
          (u.unstable_ImmediatePriority = 1),
          (u.unstable_LowPriority = 4),
          (u.unstable_NormalPriority = 3),
          (u.unstable_Profiling = null),
          (u.unstable_UserBlockingPriority = 2),
          (u.unstable_cancelCallback = function (U) {
            U.callback = null;
          }),
          (u.unstable_forceFrameRate = function (U) {
            0 > U || 125 < U
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (rt = 0 < U ? Math.floor(1e3 / U) : 5);
          }),
          (u.unstable_getCurrentPriorityLevel = function () {
            return O;
          }),
          (u.unstable_next = function (U) {
            switch (O) {
              case 1:
              case 2:
              case 3:
                var j = 3;
                break;
              default:
                j = O;
            }
            var k = O;
            O = j;
            try {
              return U();
            } finally {
              O = k;
            }
          }),
          (u.unstable_requestPaint = function () {
            Y = !0;
          }),
          (u.unstable_runWithPriority = function (U, j) {
            switch (U) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                U = 3;
            }
            var k = O;
            O = U;
            try {
              return j();
            } finally {
              O = k;
            }
          }),
          (u.unstable_scheduleCallback = function (U, j, k) {
            var At = u.unstable_now();
            switch (
              (typeof k == "object" && k !== null
                ? ((k = k.delay),
                  (k = typeof k == "number" && 0 < k ? At + k : At))
                : (k = At),
              U)
            ) {
              case 1:
                var p = -1;
                break;
              case 2:
                p = 250;
                break;
              case 5:
                p = 1073741823;
                break;
              case 4:
                p = 1e4;
                break;
              default:
                p = 5e3;
            }
            return (
              (p = k + p),
              (U = {
                id: E++,
                callback: j,
                priorityLevel: U,
                startTime: k,
                expirationTime: p,
                sortIndex: -1,
              }),
              k > At
                ? ((U.sortIndex = k),
                  i(v, U),
                  s(y) === null &&
                    U === s(v) &&
                    (q ? (et(nt), (nt = -1)) : (q = !0), Rt(G, k - At)))
                : ((U.sortIndex = p),
                  i(y, U),
                  B || D || ((B = !0), V || ((V = !0), st()))),
              U
            );
          }),
          (u.unstable_shouldYield = St),
          (u.unstable_wrapCallback = function (U) {
            var j = O;
            return function () {
              var k = O;
              O = j;
              try {
                return U.apply(this, arguments);
              } finally {
                O = k;
              }
            };
          });
      })(as)),
    as
  );
}
var h1;
function co() {
  return h1 || ((h1 = 1), (ls.exports = so())), ls.exports;
}
var is = { exports: {} },
  Ft = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var d1;
function ro() {
  if (d1) return Ft;
  d1 = 1;
  var u = hs();
  function i(y) {
    var v = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var E = 2; E < arguments.length; E++)
        v += "&args[]=" + encodeURIComponent(arguments[E]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      v +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var c = {
      d: {
        f: s,
        r: function () {
          throw Error(i(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    h = Symbol.for("react.portal");
  function o(y, v, E) {
    var z =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: z == null ? null : "" + z,
      children: y,
      containerInfo: v,
      implementation: E,
    };
  }
  var g = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(y, v) {
    if (y === "font") return "";
    if (typeof v == "string") return v === "use-credentials" ? v : "";
  }
  return (
    (Ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
    (Ft.createPortal = function (y, v) {
      var E =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!v || (v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11))
        throw Error(i(299));
      return o(y, v, null, E);
    }),
    (Ft.flushSync = function (y) {
      var v = g.T,
        E = c.p;
      try {
        if (((g.T = null), (c.p = 2), y)) return y();
      } finally {
        (g.T = v), (c.p = E), c.d.f();
      }
    }),
    (Ft.preconnect = function (y, v) {
      typeof y == "string" &&
        (v
          ? ((v = v.crossOrigin),
            (v =
              typeof v == "string"
                ? v === "use-credentials"
                  ? v
                  : ""
                : void 0))
          : (v = null),
        c.d.C(y, v));
    }),
    (Ft.prefetchDNS = function (y) {
      typeof y == "string" && c.d.D(y);
    }),
    (Ft.preinit = function (y, v) {
      if (typeof y == "string" && v && typeof v.as == "string") {
        var E = v.as,
          z = m(E, v.crossOrigin),
          O = typeof v.integrity == "string" ? v.integrity : void 0,
          D = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
        E === "style"
          ? c.d.S(y, typeof v.precedence == "string" ? v.precedence : void 0, {
              crossOrigin: z,
              integrity: O,
              fetchPriority: D,
            })
          : E === "script" &&
            c.d.X(y, {
              crossOrigin: z,
              integrity: O,
              fetchPriority: D,
              nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            });
      }
    }),
    (Ft.preinitModule = function (y, v) {
      if (typeof y == "string")
        if (typeof v == "object" && v !== null) {
          if (v.as == null || v.as === "script") {
            var E = m(v.as, v.crossOrigin);
            c.d.M(y, {
              crossOrigin: E,
              integrity: typeof v.integrity == "string" ? v.integrity : void 0,
              nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            });
          }
        } else v == null && c.d.M(y);
    }),
    (Ft.preload = function (y, v) {
      if (
        typeof y == "string" &&
        typeof v == "object" &&
        v !== null &&
        typeof v.as == "string"
      ) {
        var E = v.as,
          z = m(E, v.crossOrigin);
        c.d.L(y, E, {
          crossOrigin: z,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0,
          type: typeof v.type == "string" ? v.type : void 0,
          fetchPriority:
            typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
          referrerPolicy:
            typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
          imageSrcSet:
            typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
          imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
          media: typeof v.media == "string" ? v.media : void 0,
        });
      }
    }),
    (Ft.preloadModule = function (y, v) {
      if (typeof y == "string")
        if (v) {
          var E = m(v.as, v.crossOrigin);
          c.d.m(y, {
            as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
            crossOrigin: E,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          });
        } else c.d.m(y);
    }),
    (Ft.requestFormReset = function (y) {
      c.d.r(y);
    }),
    (Ft.unstable_batchedUpdates = function (y, v) {
      return y(v);
    }),
    (Ft.useFormState = function (y, v, E) {
      return g.H.useFormState(y, v, E);
    }),
    (Ft.useFormStatus = function () {
      return g.H.useHostTransitionStatus();
    }),
    (Ft.version = "19.1.0"),
    Ft
  );
}
var o1;
function ho() {
  if (o1) return is.exports;
  o1 = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (i) {
        console.error(i);
      }
  }
  return u(), (is.exports = ro()), is.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var g1;
function oo() {
  if (g1) return Si;
  g1 = 1;
  var u = co(),
    i = hs(),
    s = ho();
  function c(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function h(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function o(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function g(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (o(t) !== t) throw Error(c(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = o(t)), e === null)) throw Error(c(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var f = n.alternate;
      if (f === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === f.child) {
        for (f = n.child; f; ) {
          if (f === l) return m(n), t;
          if (f === a) return m(n), e;
          f = f.sibling;
        }
        throw Error(c(188));
      }
      if (l.return !== a.return) (l = n), (a = f);
      else {
        for (var r = !1, d = n.child; d; ) {
          if (d === l) {
            (r = !0), (l = n), (a = f);
            break;
          }
          if (d === a) {
            (r = !0), (a = n), (l = f);
            break;
          }
          d = d.sibling;
        }
        if (!r) {
          for (d = f.child; d; ) {
            if (d === l) {
              (r = !0), (l = f), (a = n);
              break;
            }
            if (d === a) {
              (r = !0), (a = f), (l = n);
              break;
            }
            d = d.sibling;
          }
          if (!r) throw Error(c(189));
        }
      }
      if (l.alternate !== a) throw Error(c(190));
    }
    if (l.tag !== 3) throw Error(c(188));
    return l.stateNode.current === l ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = v(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var E = Object.assign,
    z = Symbol.for("react.element"),
    O = Symbol.for("react.transitional.element"),
    D = Symbol.for("react.portal"),
    B = Symbol.for("react.fragment"),
    q = Symbol.for("react.strict_mode"),
    Y = Symbol.for("react.profiler"),
    X = Symbol.for("react.provider"),
    et = Symbol.for("react.consumer"),
    K = Symbol.for("react.context"),
    Q = Symbol.for("react.forward_ref"),
    G = Symbol.for("react.suspense"),
    V = Symbol.for("react.suspense_list"),
    nt = Symbol.for("react.memo"),
    rt = Symbol.for("react.lazy"),
    ot = Symbol.for("react.activity"),
    St = Symbol.for("react.memo_cache_sentinel"),
    yt = Symbol.iterator;
  function st(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (yt && t[yt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Tt = Symbol.for("react.client.reference");
  function P(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Tt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case B:
        return "Fragment";
      case Y:
        return "Profiler";
      case q:
        return "StrictMode";
      case G:
        return "Suspense";
      case V:
        return "SuspenseList";
      case ot:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case D:
          return "Portal";
        case K:
          return (t.displayName || "Context") + ".Provider";
        case et:
          return (t._context.displayName || "Context") + ".Consumer";
        case Q:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case nt:
          return (
            (e = t.displayName || null), e !== null ? e : P(t.type) || "Memo"
          );
        case rt:
          (e = t._payload), (t = t._init);
          try {
            return P(t(e));
          } catch {}
      }
    return null;
  }
  var Rt = Array.isArray,
    U = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    j = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = { pending: !1, data: null, method: null, action: null },
    At = [],
    p = -1;
  function C(t) {
    return { current: t };
  }
  function Z(t) {
    0 > p || ((t.current = At[p]), (At[p] = null), p--);
  }
  function L(t, e) {
    p++, (At[p] = t.current), (t.current = e);
  }
  var F = C(null),
    ht = C(null),
    tt = C(null),
    ee = C(null);
  function xt(t, e) {
    switch ((L(tt, e), L(ht, t), L(F, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Hh(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Hh(e)), (t = qh(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Z(F), L(F, t);
  }
  function we() {
    Z(F), Z(ht), Z(tt);
  }
  function Yn(t) {
    t.memoizedState !== null && L(ee, t);
    var e = F.current,
      l = qh(e, t.type);
    e !== l && (L(ht, t), L(F, l));
  }
  function bi(t) {
    ht.current === t && (Z(F), Z(ht)),
      ee.current === t && (Z(ee), (di._currentValue = k));
  }
  var Xn = Object.prototype.hasOwnProperty,
    Gn = u.unstable_scheduleCallback,
    Ln = u.unstable_cancelCallback,
    Y1 = u.unstable_shouldYield,
    X1 = u.unstable_requestPaint,
    _e = u.unstable_now,
    G1 = u.unstable_getCurrentPriorityLevel,
    gs = u.unstable_ImmediatePriority,
    ys = u.unstable_UserBlockingPriority,
    Ei = u.unstable_NormalPriority,
    L1 = u.unstable_LowPriority,
    vs = u.unstable_IdlePriority,
    j1 = u.log,
    Q1 = u.unstable_setDisableYieldValue,
    ba = null,
    le = null;
  function Ke(t) {
    if (
      (typeof j1 == "function" && Q1(t),
      le && typeof le.setStrictMode == "function")
    )
      try {
        le.setStrictMode(ba, t);
      } catch {}
  }
  var ae = Math.clz32 ? Math.clz32 : w1,
    Z1 = Math.log,
    V1 = Math.LN2;
  function w1(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Z1(t) / V1) | 0)) | 0;
  }
  var Ai = 256,
    _i = 4194304;
  function ml(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Mi(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      f = t.suspendedLanes,
      r = t.pingedLanes;
    t = t.warmLanes;
    var d = a & 134217727;
    return (
      d !== 0
        ? ((a = d & ~f),
          a !== 0
            ? (n = ml(a))
            : ((r &= d),
              r !== 0
                ? (n = ml(r))
                : l || ((l = d & ~t), l !== 0 && (n = ml(l)))))
        : ((d = a & ~f),
          d !== 0
            ? (n = ml(d))
            : r !== 0
            ? (n = ml(r))
            : l || ((l = a & ~t), l !== 0 && (n = ml(l)))),
      n === 0
        ? 0
        : e !== 0 &&
          e !== n &&
          (e & f) === 0 &&
          ((f = n & -n),
          (l = e & -e),
          f >= l || (f === 32 && (l & 4194048) !== 0))
        ? e
        : n
    );
  }
  function Ea(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function K1(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ms() {
    var t = Ai;
    return (Ai <<= 1), (Ai & 4194048) === 0 && (Ai = 256), t;
  }
  function Ss() {
    var t = _i;
    return (_i <<= 1), (_i & 62914560) === 0 && (_i = 4194304), t;
  }
  function jn(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Aa(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function J1(t, e, l, a, n, f) {
    var r = t.pendingLanes;
    (t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0);
    var d = t.entanglements,
      S = t.expirationTimes,
      M = t.hiddenUpdates;
    for (l = r & ~l; 0 < l; ) {
      var R = 31 - ae(l),
        H = 1 << R;
      (d[R] = 0), (S[R] = -1);
      var T = M[R];
      if (T !== null)
        for (M[R] = null, R = 0; R < T.length; R++) {
          var x = T[R];
          x !== null && (x.lane &= -536870913);
        }
      l &= ~H;
    }
    a !== 0 && ps(t, a, 0),
      f !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(r & ~e));
  }
  function ps(t, e, l) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - ae(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 4194090));
  }
  function bs(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - ae(l),
        n = 1 << a;
      (n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n);
    }
  }
  function Qn(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Zn(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Es() {
    var t = j.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : t1(t.type));
  }
  function F1(t, e) {
    var l = j.p;
    try {
      return (j.p = t), e();
    } finally {
      j.p = l;
    }
  }
  var Je = Math.random().toString(36).slice(2),
    Kt = "__reactFiber$" + Je,
    $t = "__reactProps$" + Je,
    ql = "__reactContainer$" + Je,
    Vn = "__reactEvents$" + Je,
    W1 = "__reactListeners$" + Je,
    $1 = "__reactHandles$" + Je,
    As = "__reactResources$" + Je,
    _a = "__reactMarker$" + Je;
  function wn(t) {
    delete t[Kt], delete t[$t], delete t[Vn], delete t[W1], delete t[$1];
  }
  function Cl(t) {
    var e = t[Kt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[ql] || l[Kt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = Gh(t); t !== null; ) {
            if ((l = t[Kt])) return l;
            t = Gh(t);
          }
        return e;
      }
      (t = l), (l = t.parentNode);
    }
    return null;
  }
  function Yl(t) {
    if ((t = t[Kt] || t[ql])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ma(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(c(33));
  }
  function Xl(t) {
    var e = t[As];
    return (
      e ||
        (e = t[As] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Gt(t) {
    t[_a] = !0;
  }
  var _s = new Set(),
    Ms = {};
  function Sl(t, e) {
    Gl(t, e), Gl(t + "Capture", e);
  }
  function Gl(t, e) {
    for (Ms[t] = e, t = 0; t < e.length; t++) _s.add(e[t]);
  }
  var k1 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Ts = {},
    xs = {};
  function I1(t) {
    return Xn.call(xs, t)
      ? !0
      : Xn.call(Ts, t)
      ? !1
      : k1.test(t)
      ? (xs[t] = !0)
      : ((Ts[t] = !0), !1);
  }
  function Ti(t, e, l) {
    if (I1(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function xi(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Re(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  var Kn, zs;
  function Ll(t) {
    if (Kn === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        (Kn = (e && e[1]) || ""),
          (zs =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Kn +
      t +
      zs
    );
  }
  var Jn = !1;
  function Fn(t, e) {
    if (!t || Jn) return "";
    Jn = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var H = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(H.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(H, []);
                } catch (x) {
                  var T = x;
                }
                Reflect.construct(t, [], H);
              } else {
                try {
                  H.call();
                } catch (x) {
                  T = x;
                }
                t.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                T = x;
              }
              (H = t()) &&
                typeof H.catch == "function" &&
                H.catch(function () {});
            }
          } catch (x) {
            if (x && T && typeof x.stack == "string") return [x.stack, T.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var f = a.DetermineComponentFrameRoot(),
        r = f[0],
        d = f[1];
      if (r && d) {
        var S = r.split(`
`),
          M = d.split(`
`);
        for (
          n = a = 0;
          a < S.length && !S[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < M.length && !M[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === S.length || n === M.length)
          for (
            a = S.length - 1, n = M.length - 1;
            1 <= a && 0 <= n && S[a] !== M[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (S[a] !== M[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || S[a] !== M[n])) {
                  var R =
                    `
` + S[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      R.includes("<anonymous>") &&
                      (R = R.replace("<anonymous>", t.displayName)),
                    R
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (Jn = !1), (Error.prepareStackTrace = l);
    }
    return (l = t ? t.displayName || t.name : "") ? Ll(l) : "";
  }
  function P1(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ll(t.type);
      case 16:
        return Ll("Lazy");
      case 13:
        return Ll("Suspense");
      case 19:
        return Ll("SuspenseList");
      case 0:
      case 15:
        return Fn(t.type, !1);
      case 11:
        return Fn(t.type.render, !1);
      case 1:
        return Fn(t.type, !0);
      case 31:
        return Ll("Activity");
      default:
        return "";
    }
  }
  function Os(t) {
    try {
      var e = "";
      do (e += P1(t)), (t = t.return);
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function he(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Rs(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function t0(t) {
    var e = Rs(t) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var n = l.get,
        f = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (r) {
            (a = "" + r), f.call(this, r);
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (r) {
            a = "" + r;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function zi(t) {
    t._valueTracker || (t._valueTracker = t0(t));
  }
  function Ds(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = Rs(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Oi(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var e0 = /[\n"\\]/g;
  function de(t) {
    return t.replace(e0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Wn(t, e, l, a, n, f, r, d) {
    (t.name = ""),
      r != null &&
      typeof r != "function" &&
      typeof r != "symbol" &&
      typeof r != "boolean"
        ? (t.type = r)
        : t.removeAttribute("type"),
      e != null
        ? r === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + he(e))
          : t.value !== "" + he(e) && (t.value = "" + he(e))
        : (r !== "submit" && r !== "reset") || t.removeAttribute("value"),
      e != null
        ? $n(t, r, he(e))
        : l != null
        ? $n(t, r, he(l))
        : a != null && t.removeAttribute("value"),
      n == null && f != null && (t.defaultChecked = !!f),
      n != null &&
        (t.checked = n && typeof n != "function" && typeof n != "symbol"),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (t.name = "" + he(d))
        : t.removeAttribute("name");
  }
  function Us(t, e, l, a, n, f, r, d) {
    if (
      (f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.type = f),
      e != null || l != null)
    ) {
      if (!((f !== "submit" && f !== "reset") || e != null)) return;
      (l = l != null ? "" + he(l) : ""),
        (e = e != null ? "" + he(e) : l),
        d || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = d ? t.checked : !!a),
      (t.defaultChecked = !!a),
      r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (t.name = r);
  }
  function $n(t, e, l) {
    (e === "number" && Oi(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function jl(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var n = 0; n < l.length; n++) e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        (n = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== n && (t[l].selected = n),
          n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + he(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          (t[n].selected = !0), a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Ns(t, e, l) {
    if (
      e != null &&
      ((e = "" + he(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + he(l) : "";
  }
  function Bs(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(c(92));
        if (Rt(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (e = l);
    }
    (l = he(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a);
  }
  function Ql(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var l0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Hs(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : a
      ? t.setProperty(e, l)
      : typeof l != "number" || l === 0 || l0.has(e)
      ? e === "float"
        ? (t.cssFloat = l)
        : (t[e] = ("" + l).trim())
      : (t[e] = l + "px");
  }
  function qs(t, e, l) {
    if (e != null && typeof e != "object") throw Error(c(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var n in e)
        (a = e[n]), e.hasOwnProperty(n) && l[n] !== a && Hs(t, n, a);
    } else for (var f in e) e.hasOwnProperty(f) && Hs(t, f, e[f]);
  }
  function kn(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var a0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    i0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ri(t) {
    return i0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var In = null;
  function Pn(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Zl = null,
    Vl = null;
  function Cs(t) {
    var e = Yl(t);
    if (e && (t = e.stateNode)) {
      var l = t[$t] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Wn(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + de("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[$t] || null;
                if (!n) throw Error(c(90));
                Wn(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              (a = l[e]), a.form === t.form && Ds(a);
          }
          break t;
        case "textarea":
          Ns(t, l.value, l.defaultValue);
          break t;
        case "select":
          (e = l.value), e != null && jl(t, !!l.multiple, e, !1);
      }
    }
  }
  var tu = !1;
  function Ys(t, e, l) {
    if (tu) return t(e, l);
    tu = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((tu = !1),
        (Zl !== null || Vl !== null) &&
          (yn(), Zl && ((e = Zl), (t = Vl), (Vl = Zl = null), Cs(e), t)))
      )
        for (e = 0; e < t.length; e++) Cs(t[e]);
    }
  }
  function Ta(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[$t] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(c(231, e, typeof l));
    return l;
  }
  var De = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    eu = !1;
  if (De)
    try {
      var xa = {};
      Object.defineProperty(xa, "passive", {
        get: function () {
          eu = !0;
        },
      }),
        window.addEventListener("test", xa, xa),
        window.removeEventListener("test", xa, xa);
    } catch {
      eu = !1;
    }
  var Fe = null,
    lu = null,
    Di = null;
  function Xs() {
    if (Di) return Di;
    var t,
      e = lu,
      l = e.length,
      a,
      n = "value" in Fe ? Fe.value : Fe.textContent,
      f = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++);
    var r = l - t;
    for (a = 1; a <= r && e[l - a] === n[f - a]; a++);
    return (Di = n.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Ui(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Ni() {
    return !0;
  }
  function Gs() {
    return !1;
  }
  function kt(t) {
    function e(l, a, n, f, r) {
      (this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = f),
        (this.target = r),
        (this.currentTarget = null);
      for (var d in t)
        t.hasOwnProperty(d) && ((l = t[d]), (this[d] = l ? l(f) : f[d]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? Ni
          : Gs),
        (this.isPropagationStopped = Gs),
        this
      );
    }
    return (
      E(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Ni));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Ni));
        },
        persist: function () {},
        isPersistent: Ni,
      }),
      e
    );
  }
  var pl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Bi = kt(pl),
    za = E({}, pl, { view: 0, detail: 0 }),
    n0 = kt(za),
    au,
    iu,
    Oa,
    Hi = E({}, za, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: uu,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Oa &&
              (Oa && t.type === "mousemove"
                ? ((au = t.screenX - Oa.screenX), (iu = t.screenY - Oa.screenY))
                : (iu = au = 0),
              (Oa = t)),
            au);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : iu;
      },
    }),
    Ls = kt(Hi),
    u0 = E({}, Hi, { dataTransfer: 0 }),
    f0 = kt(u0),
    s0 = E({}, za, { relatedTarget: 0 }),
    nu = kt(s0),
    c0 = E({}, pl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    r0 = kt(c0),
    h0 = E({}, pl, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    d0 = kt(h0),
    o0 = E({}, pl, { data: 0 }),
    js = kt(o0),
    g0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    y0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    v0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function m0(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = v0[t])
      ? !!e[t]
      : !1;
  }
  function uu() {
    return m0;
  }
  var S0 = E({}, za, {
      key: function (t) {
        if (t.key) {
          var e = g0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Ui(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? y0[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: uu,
      charCode: function (t) {
        return t.type === "keypress" ? Ui(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Ui(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    p0 = kt(S0),
    b0 = E({}, Hi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Qs = kt(b0),
    E0 = E({}, za, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: uu,
    }),
    A0 = kt(E0),
    _0 = E({}, pl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    M0 = kt(_0),
    T0 = E({}, Hi, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    x0 = kt(T0),
    z0 = E({}, pl, { newState: 0, oldState: 0 }),
    O0 = kt(z0),
    R0 = [9, 13, 27, 32],
    fu = De && "CompositionEvent" in window,
    Ra = null;
  De && "documentMode" in document && (Ra = document.documentMode);
  var D0 = De && "TextEvent" in window && !Ra,
    Zs = De && (!fu || (Ra && 8 < Ra && 11 >= Ra)),
    Vs = " ",
    ws = !1;
  function Ks(t, e) {
    switch (t) {
      case "keyup":
        return R0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Js(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var wl = !1;
  function U0(t, e) {
    switch (t) {
      case "compositionend":
        return Js(e);
      case "keypress":
        return e.which !== 32 ? null : ((ws = !0), Vs);
      case "textInput":
        return (t = e.data), t === Vs && ws ? null : t;
      default:
        return null;
    }
  }
  function N0(t, e) {
    if (wl)
      return t === "compositionend" || (!fu && Ks(t, e))
        ? ((t = Xs()), (Di = lu = Fe = null), (wl = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Zs && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var B0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Fs(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!B0[t.type] : e === "textarea";
  }
  function Ws(t, e, l, a) {
    Zl ? (Vl ? Vl.push(a) : (Vl = [a])) : (Zl = a),
      (e = En(e, "onChange")),
      0 < e.length &&
        ((l = new Bi("onChange", "change", null, l, a)),
        t.push({ event: l, listeners: e }));
  }
  var Da = null,
    Ua = null;
  function H0(t) {
    Rh(t, 0);
  }
  function qi(t) {
    var e = Ma(t);
    if (Ds(e)) return t;
  }
  function $s(t, e) {
    if (t === "change") return e;
  }
  var ks = !1;
  if (De) {
    var su;
    if (De) {
      var cu = "oninput" in document;
      if (!cu) {
        var Is = document.createElement("div");
        Is.setAttribute("oninput", "return;"),
          (cu = typeof Is.oninput == "function");
      }
      su = cu;
    } else su = !1;
    ks = su && (!document.documentMode || 9 < document.documentMode);
  }
  function Ps() {
    Da && (Da.detachEvent("onpropertychange", tc), (Ua = Da = null));
  }
  function tc(t) {
    if (t.propertyName === "value" && qi(Ua)) {
      var e = [];
      Ws(e, Ua, t, Pn(t)), Ys(H0, e);
    }
  }
  function q0(t, e, l) {
    t === "focusin"
      ? (Ps(), (Da = e), (Ua = l), Da.attachEvent("onpropertychange", tc))
      : t === "focusout" && Ps();
  }
  function C0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return qi(Ua);
  }
  function Y0(t, e) {
    if (t === "click") return qi(e);
  }
  function X0(t, e) {
    if (t === "input" || t === "change") return qi(e);
  }
  function G0(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ie = typeof Object.is == "function" ? Object.is : G0;
  function Na(t, e) {
    if (ie(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Xn.call(e, n) || !ie(t[n], e[n])) return !1;
    }
    return !0;
  }
  function ec(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function lc(t, e) {
    var l = ec(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = ec(l);
    }
  }
  function ac(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? ac(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function ic(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Oi(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Oi(t.document);
    }
    return e;
  }
  function ru(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var L0 = De && "documentMode" in document && 11 >= document.documentMode,
    Kl = null,
    hu = null,
    Ba = null,
    du = !1;
  function nc(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    du ||
      Kl == null ||
      Kl !== Oi(a) ||
      ((a = Kl),
      "selectionStart" in a && ru(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ba && Na(Ba, a)) ||
        ((Ba = a),
        (a = En(hu, "onSelect")),
        0 < a.length &&
          ((e = new Bi("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = Kl))));
  }
  function bl(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var Jl = {
      animationend: bl("Animation", "AnimationEnd"),
      animationiteration: bl("Animation", "AnimationIteration"),
      animationstart: bl("Animation", "AnimationStart"),
      transitionrun: bl("Transition", "TransitionRun"),
      transitionstart: bl("Transition", "TransitionStart"),
      transitioncancel: bl("Transition", "TransitionCancel"),
      transitionend: bl("Transition", "TransitionEnd"),
    },
    ou = {},
    uc = {};
  De &&
    ((uc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Jl.animationend.animation,
      delete Jl.animationiteration.animation,
      delete Jl.animationstart.animation),
    "TransitionEvent" in window || delete Jl.transitionend.transition);
  function El(t) {
    if (ou[t]) return ou[t];
    if (!Jl[t]) return t;
    var e = Jl[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in uc) return (ou[t] = e[l]);
    return t;
  }
  var fc = El("animationend"),
    sc = El("animationiteration"),
    cc = El("animationstart"),
    j0 = El("transitionrun"),
    Q0 = El("transitionstart"),
    Z0 = El("transitioncancel"),
    rc = El("transitionend"),
    hc = new Map(),
    gu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  gu.push("scrollEnd");
  function be(t, e) {
    hc.set(t, e), Sl(e, [t]);
  }
  var dc = new WeakMap();
  function oe(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = dc.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: Os(e) }), dc.set(t, e), e);
    }
    return { value: t, source: e, stack: Os(e) };
  }
  var ge = [],
    Fl = 0,
    yu = 0;
  function Ci() {
    for (var t = Fl, e = (yu = Fl = 0); e < t; ) {
      var l = ge[e];
      ge[e++] = null;
      var a = ge[e];
      ge[e++] = null;
      var n = ge[e];
      ge[e++] = null;
      var f = ge[e];
      if (((ge[e++] = null), a !== null && n !== null)) {
        var r = a.pending;
        r === null ? (n.next = n) : ((n.next = r.next), (r.next = n)),
          (a.pending = n);
      }
      f !== 0 && oc(l, n, f);
    }
  }
  function Yi(t, e, l, a) {
    (ge[Fl++] = t),
      (ge[Fl++] = e),
      (ge[Fl++] = l),
      (ge[Fl++] = a),
      (yu |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function vu(t, e, l, a) {
    return Yi(t, e, l, a), Xi(t);
  }
  function Wl(t, e) {
    return Yi(t, null, null, e), Xi(t);
  }
  function oc(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, f = t.return; f !== null; )
      (f.childLanes |= l),
        (a = f.alternate),
        a !== null && (a.childLanes |= l),
        f.tag === 22 &&
          ((t = f.stateNode), t === null || t._visibility & 1 || (n = !0)),
        (t = f),
        (f = f.return);
    return t.tag === 3
      ? ((f = t.stateNode),
        n &&
          e !== null &&
          ((n = 31 - ae(l)),
          (t = f.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        f)
      : null;
  }
  function Xi(t) {
    if (50 < ii) throw ((ii = 0), (_f = null), Error(c(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var $l = {};
  function V0(t, e, l, a) {
    (this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ne(t, e, l, a) {
    return new V0(t, e, l, a);
  }
  function mu(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Ue(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = ne(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function gc(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Gi(t, e, l, a, n, f) {
    var r = 0;
    if (((a = t), typeof t == "function")) mu(t) && (r = 1);
    else if (typeof t == "string")
      r = Kd(t, l, F.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case ot:
          return (t = ne(31, l, e, n)), (t.elementType = ot), (t.lanes = f), t;
        case B:
          return Al(l.children, n, f, e);
        case q:
          (r = 8), (n |= 24);
          break;
        case Y:
          return (
            (t = ne(12, l, e, n | 2)), (t.elementType = Y), (t.lanes = f), t
          );
        case G:
          return (t = ne(13, l, e, n)), (t.elementType = G), (t.lanes = f), t;
        case V:
          return (t = ne(19, l, e, n)), (t.elementType = V), (t.lanes = f), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case X:
              case K:
                r = 10;
                break t;
              case et:
                r = 9;
                break t;
              case Q:
                r = 11;
                break t;
              case nt:
                r = 14;
                break t;
              case rt:
                (r = 16), (a = null);
                break t;
            }
          (r = 29),
            (l = Error(c(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = ne(r, l, e, n)), (e.elementType = t), (e.type = a), (e.lanes = f), e
    );
  }
  function Al(t, e, l, a) {
    return (t = ne(7, t, a, e)), (t.lanes = l), t;
  }
  function Su(t, e, l) {
    return (t = ne(6, t, null, e)), (t.lanes = l), t;
  }
  function pu(t, e, l) {
    return (
      (e = ne(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var kl = [],
    Il = 0,
    Li = null,
    ji = 0,
    ye = [],
    ve = 0,
    _l = null,
    Ne = 1,
    Be = "";
  function Ml(t, e) {
    (kl[Il++] = ji), (kl[Il++] = Li), (Li = t), (ji = e);
  }
  function yc(t, e, l) {
    (ye[ve++] = Ne), (ye[ve++] = Be), (ye[ve++] = _l), (_l = t);
    var a = Ne;
    t = Be;
    var n = 32 - ae(a) - 1;
    (a &= ~(1 << n)), (l += 1);
    var f = 32 - ae(e) + n;
    if (30 < f) {
      var r = n - (n % 5);
      (f = (a & ((1 << r) - 1)).toString(32)),
        (a >>= r),
        (n -= r),
        (Ne = (1 << (32 - ae(e) + n)) | (l << n) | a),
        (Be = f + t);
    } else (Ne = (1 << f) | (l << n) | a), (Be = t);
  }
  function bu(t) {
    t.return !== null && (Ml(t, 1), yc(t, 1, 0));
  }
  function Eu(t) {
    for (; t === Li; )
      (Li = kl[--Il]), (kl[Il] = null), (ji = kl[--Il]), (kl[Il] = null);
    for (; t === _l; )
      (_l = ye[--ve]),
        (ye[ve] = null),
        (Be = ye[--ve]),
        (ye[ve] = null),
        (Ne = ye[--ve]),
        (ye[ve] = null);
  }
  var Wt = null,
    Dt = null,
    gt = !1,
    Tl = null,
    Me = !1,
    Au = Error(c(519));
  function xl(t) {
    var e = Error(c(418, ""));
    throw (Ca(oe(e, t)), Au);
  }
  function vc(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Kt] = t), (e[$t] = a), l)) {
      case "dialog":
        ft("cancel", e), ft("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ft("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ui.length; l++) ft(ui[l], e);
        break;
      case "source":
        ft("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ft("error", e), ft("load", e);
        break;
      case "details":
        ft("toggle", e);
        break;
      case "input":
        ft("invalid", e),
          Us(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          zi(e);
        break;
      case "select":
        ft("invalid", e);
        break;
      case "textarea":
        ft("invalid", e), Bs(e, a.value, a.defaultValue, a.children), zi(e);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      Bh(e.textContent, l)
        ? (a.popover != null && (ft("beforetoggle", e), ft("toggle", e)),
          a.onScroll != null && ft("scroll", e),
          a.onScrollEnd != null && ft("scrollend", e),
          a.onClick != null && (e.onclick = An),
          (e = !0))
        : (e = !1),
      e || xl(t);
  }
  function mc(t) {
    for (Wt = t.return; Wt; )
      switch (Wt.tag) {
        case 5:
        case 13:
          Me = !1;
          return;
        case 27:
        case 3:
          Me = !0;
          return;
        default:
          Wt = Wt.return;
      }
  }
  function Ha(t) {
    if (t !== Wt) return !1;
    if (!gt) return mc(t), (gt = !0), !1;
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || Gf(t.type, t.memoizedProps))),
        (l = !l)),
      l && Dt && xl(t),
      mc(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(c(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((l = t.data), l === "/$")) {
              if (e === 0) {
                Dt = Ae(t.nextSibling);
                break t;
              }
              e--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || e++;
          t = t.nextSibling;
        }
        Dt = null;
      }
    } else
      e === 27
        ? ((e = Dt), rl(t.type) ? ((t = Zf), (Zf = null), (Dt = t)) : (Dt = e))
        : (Dt = Wt ? Ae(t.stateNode.nextSibling) : null);
    return !0;
  }
  function qa() {
    (Dt = Wt = null), (gt = !1);
  }
  function Sc() {
    var t = Tl;
    return (
      t !== null &&
        (te === null ? (te = t) : te.push.apply(te, t), (Tl = null)),
      t
    );
  }
  function Ca(t) {
    Tl === null ? (Tl = [t]) : Tl.push(t);
  }
  var _u = C(null),
    zl = null,
    He = null;
  function We(t, e, l) {
    L(_u, e._currentValue), (e._currentValue = l);
  }
  function qe(t) {
    (t._currentValue = _u.current), Z(_u);
  }
  function Mu(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Tu(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var f = n.dependencies;
      if (f !== null) {
        var r = n.child;
        f = f.firstContext;
        t: for (; f !== null; ) {
          var d = f;
          f = n;
          for (var S = 0; S < e.length; S++)
            if (d.context === e[S]) {
              (f.lanes |= l),
                (d = f.alternate),
                d !== null && (d.lanes |= l),
                Mu(f.return, l, t),
                a || (r = null);
              break t;
            }
          f = d.next;
        }
      } else if (n.tag === 18) {
        if (((r = n.return), r === null)) throw Error(c(341));
        (r.lanes |= l),
          (f = r.alternate),
          f !== null && (f.lanes |= l),
          Mu(r, l, t),
          (r = null);
      } else r = n.child;
      if (r !== null) r.return = n;
      else
        for (r = n; r !== null; ) {
          if (r === t) {
            r = null;
            break;
          }
          if (((n = r.sibling), n !== null)) {
            (n.return = r.return), (r = n);
            break;
          }
          r = r.return;
        }
      n = r;
    }
  }
  function Ya(t, e, l, a) {
    t = null;
    for (var n = e, f = !1; n !== null; ) {
      if (!f) {
        if ((n.flags & 524288) !== 0) f = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var r = n.alternate;
        if (r === null) throw Error(c(387));
        if (((r = r.memoizedProps), r !== null)) {
          var d = n.type;
          ie(n.pendingProps.value, r.value) ||
            (t !== null ? t.push(d) : (t = [d]));
        }
      } else if (n === ee.current) {
        if (((r = n.alternate), r === null)) throw Error(c(387));
        r.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(di) : (t = [di]));
      }
      n = n.return;
    }
    t !== null && Tu(e, t, l, a), (e.flags |= 262144);
  }
  function Qi(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ie(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ol(t) {
    (zl = t),
      (He = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Jt(t) {
    return pc(zl, t);
  }
  function Zi(t, e) {
    return zl === null && Ol(t), pc(t, e);
  }
  function pc(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), He === null)) {
      if (t === null) throw Error(c(308));
      (He = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else He = He.next = e;
    return l;
  }
  var w0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                });
            };
          },
    K0 = u.unstable_scheduleCallback,
    J0 = u.unstable_NormalPriority,
    Yt = {
      $$typeof: K,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function xu() {
    return { controller: new w0(), data: new Map(), refCount: 0 };
  }
  function Xa(t) {
    t.refCount--,
      t.refCount === 0 &&
        K0(J0, function () {
          t.controller.abort();
        });
  }
  var Ga = null,
    zu = 0,
    Pl = 0,
    ta = null;
  function F0(t, e) {
    if (Ga === null) {
      var l = (Ga = []);
      (zu = 0),
        (Pl = Df()),
        (ta = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return zu++, e.then(bc, bc), e;
  }
  function bc() {
    if (--zu === 0 && Ga !== null) {
      ta !== null && (ta.status = "fulfilled");
      var t = Ga;
      (Ga = null), (Pl = 0), (ta = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function W0(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var n = 0; n < l.length; n++) (0, l[n])(e);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        }
      ),
      a
    );
  }
  var Ec = U.S;
  U.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      F0(t, e),
      Ec !== null && Ec(t, e);
  };
  var Rl = C(null);
  function Ou() {
    var t = Rl.current;
    return t !== null ? t : Mt.pooledCache;
  }
  function Vi(t, e) {
    e === null ? L(Rl, Rl.current) : L(Rl, e.pool);
  }
  function Ac() {
    var t = Ou();
    return t === null ? null : { parent: Yt._currentValue, pool: t };
  }
  var La = Error(c(460)),
    _c = Error(c(474)),
    wi = Error(c(542)),
    Ru = { then: function () {} };
  function Mc(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Ki() {}
  function Tc(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(Ki, Ki), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), zc(t), t);
      default:
        if (typeof e.status == "string") e.then(Ki, Ki);
        else {
          if (((t = Mt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(c(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  (n.status = "rejected"), (n.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), zc(t), t);
        }
        throw ((ja = e), La);
    }
  }
  var ja = null;
  function xc() {
    if (ja === null) throw Error(c(459));
    var t = ja;
    return (ja = null), t;
  }
  function zc(t) {
    if (t === La || t === wi) throw Error(c(483));
  }
  var $e = !1;
  function Du(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Uu(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function ke(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ie(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (vt & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (a.pending = e),
        (e = Xi(t)),
        oc(t, null, l),
        e
      );
    }
    return Yi(t, a, e, l), Xi(t);
  }
  function Qa(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), bs(t, l);
    }
  }
  function Nu(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        f = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var r = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          f === null ? (n = f = r) : (f = f.next = r), (l = l.next);
        } while (l !== null);
        f === null ? (n = f = e) : (f = f.next = e);
      } else n = f = e;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: f,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l);
      return;
    }
    (t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e);
  }
  var Bu = !1;
  function Za() {
    if (Bu) {
      var t = ta;
      if (t !== null) throw t;
    }
  }
  function Va(t, e, l, a) {
    Bu = !1;
    var n = t.updateQueue;
    $e = !1;
    var f = n.firstBaseUpdate,
      r = n.lastBaseUpdate,
      d = n.shared.pending;
    if (d !== null) {
      n.shared.pending = null;
      var S = d,
        M = S.next;
      (S.next = null), r === null ? (f = M) : (r.next = M), (r = S);
      var R = t.alternate;
      R !== null &&
        ((R = R.updateQueue),
        (d = R.lastBaseUpdate),
        d !== r &&
          (d === null ? (R.firstBaseUpdate = M) : (d.next = M),
          (R.lastBaseUpdate = S)));
    }
    if (f !== null) {
      var H = n.baseState;
      (r = 0), (R = M = S = null), (d = f);
      do {
        var T = d.lane & -536870913,
          x = T !== d.lane;
        if (x ? (ct & T) === T : (a & T) === T) {
          T !== 0 && T === Pl && (Bu = !0),
            R !== null &&
              (R = R.next =
                {
                  lane: 0,
                  tag: d.tag,
                  payload: d.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var I = t,
              W = d;
            T = e;
            var Et = l;
            switch (W.tag) {
              case 1:
                if (((I = W.payload), typeof I == "function")) {
                  H = I.call(Et, H, T);
                  break t;
                }
                H = I;
                break t;
              case 3:
                I.flags = (I.flags & -65537) | 128;
              case 0:
                if (
                  ((I = W.payload),
                  (T = typeof I == "function" ? I.call(Et, H, T) : I),
                  T == null)
                )
                  break t;
                H = E({}, H, T);
                break t;
              case 2:
                $e = !0;
            }
          }
          (T = d.callback),
            T !== null &&
              ((t.flags |= 64),
              x && (t.flags |= 8192),
              (x = n.callbacks),
              x === null ? (n.callbacks = [T]) : x.push(T));
        } else
          (x = {
            lane: T,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            R === null ? ((M = R = x), (S = H)) : (R = R.next = x),
            (r |= T);
        if (((d = d.next), d === null)) {
          if (((d = n.shared.pending), d === null)) break;
          (x = d),
            (d = x.next),
            (x.next = null),
            (n.lastBaseUpdate = x),
            (n.shared.pending = null);
        }
      } while (!0);
      R === null && (S = H),
        (n.baseState = S),
        (n.firstBaseUpdate = M),
        (n.lastBaseUpdate = R),
        f === null && (n.shared.lanes = 0),
        (ul |= r),
        (t.lanes = r),
        (t.memoizedState = H);
    }
  }
  function Oc(t, e) {
    if (typeof t != "function") throw Error(c(191, t));
    t.call(e);
  }
  function Rc(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) Oc(l[t], e);
  }
  var ea = C(null),
    Ji = C(0);
  function Dc(t, e) {
    (t = Qe), L(Ji, t), L(ea, e), (Qe = t | e.baseLanes);
  }
  function Hu() {
    L(Ji, Qe), L(ea, ea.current);
  }
  function qu() {
    (Qe = Ji.current), Z(ea), Z(Ji);
  }
  var Pe = 0,
    at = null,
    pt = null,
    Ht = null,
    Fi = !1,
    la = !1,
    Dl = !1,
    Wi = 0,
    wa = 0,
    aa = null,
    $0 = 0;
  function Nt() {
    throw Error(c(321));
  }
  function Cu(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ie(t[l], e[l])) return !1;
    return !0;
  }
  function Yu(t, e, l, a, n, f) {
    return (
      (Pe = f),
      (at = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (U.H = t === null || t.memoizedState === null ? or : gr),
      (Dl = !1),
      (f = l(a, n)),
      (Dl = !1),
      la && (f = Nc(e, l, a, n)),
      Uc(t),
      f
    );
  }
  function Uc(t) {
    U.H = en;
    var e = pt !== null && pt.next !== null;
    if (((Pe = 0), (Ht = pt = at = null), (Fi = !1), (wa = 0), (aa = null), e))
      throw Error(c(300));
    t === null ||
      Lt ||
      ((t = t.dependencies), t !== null && Qi(t) && (Lt = !0));
  }
  function Nc(t, e, l, a) {
    at = t;
    var n = 0;
    do {
      if ((la && (aa = null), (wa = 0), (la = !1), 25 <= n))
        throw Error(c(301));
      if (((n += 1), (Ht = pt = null), t.updateQueue != null)) {
        var f = t.updateQueue;
        (f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0);
      }
      (U.H = ad), (f = e(l, a));
    } while (la);
    return f;
  }
  function k0() {
    var t = U.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Ka(e) : e),
      (t = t.useState()[0]),
      (pt !== null ? pt.memoizedState : null) !== t && (at.flags |= 1024),
      e
    );
  }
  function Xu() {
    var t = Wi !== 0;
    return (Wi = 0), t;
  }
  function Gu(t, e, l) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
  }
  function Lu(t) {
    if (Fi) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      Fi = !1;
    }
    (Pe = 0), (Ht = pt = at = null), (la = !1), (wa = Wi = 0), (aa = null);
  }
  function It() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ht === null ? (at.memoizedState = Ht = t) : (Ht = Ht.next = t), Ht;
  }
  function qt() {
    if (pt === null) {
      var t = at.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = pt.next;
    var e = Ht === null ? at.memoizedState : Ht.next;
    if (e !== null) (Ht = e), (pt = t);
    else {
      if (t === null)
        throw at.alternate === null ? Error(c(467)) : Error(c(310));
      (pt = t),
        (t = {
          memoizedState: pt.memoizedState,
          baseState: pt.baseState,
          baseQueue: pt.baseQueue,
          queue: pt.queue,
          next: null,
        }),
        Ht === null ? (at.memoizedState = Ht = t) : (Ht = Ht.next = t);
    }
    return Ht;
  }
  function ju() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ka(t) {
    var e = wa;
    return (
      (wa += 1),
      aa === null && (aa = []),
      (t = Tc(aa, t, e)),
      (e = at),
      (Ht === null ? e.memoizedState : Ht.next) === null &&
        ((e = e.alternate),
        (U.H = e === null || e.memoizedState === null ? or : gr)),
      t
    );
  }
  function $i(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ka(t);
      if (t.$$typeof === K) return Jt(t);
    }
    throw Error(c(438, String(t)));
  }
  function Qu(t) {
    var e = null,
      l = at.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = at.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = ju()), (at.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = St;
    return e.index++, l;
  }
  function Ce(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ki(t) {
    var e = qt();
    return Zu(e, pt, t);
  }
  function Zu(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue,
      f = a.pending;
    if (f !== null) {
      if (n !== null) {
        var r = n.next;
        (n.next = f.next), (f.next = r);
      }
      (e.baseQueue = n = f), (a.pending = null);
    }
    if (((f = t.baseState), n === null)) t.memoizedState = f;
    else {
      e = n.next;
      var d = (r = null),
        S = null,
        M = e,
        R = !1;
      do {
        var H = M.lane & -536870913;
        if (H !== M.lane ? (ct & H) === H : (Pe & H) === H) {
          var T = M.revertLane;
          if (T === 0)
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: M.action,
                  hasEagerState: M.hasEagerState,
                  eagerState: M.eagerState,
                  next: null,
                }),
              H === Pl && (R = !0);
          else if ((Pe & T) === T) {
            (M = M.next), T === Pl && (R = !0);
            continue;
          } else
            (H = {
              lane: 0,
              revertLane: M.revertLane,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null,
            }),
              S === null ? ((d = S = H), (r = f)) : (S = S.next = H),
              (at.lanes |= T),
              (ul |= T);
          (H = M.action),
            Dl && l(f, H),
            (f = M.hasEagerState ? M.eagerState : l(f, H));
        } else
          (T = {
            lane: H,
            revertLane: M.revertLane,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null,
          }),
            S === null ? ((d = S = T), (r = f)) : (S = S.next = T),
            (at.lanes |= H),
            (ul |= H);
        M = M.next;
      } while (M !== null && M !== e);
      if (
        (S === null ? (r = f) : (S.next = d),
        !ie(f, t.memoizedState) && ((Lt = !0), R && ((l = ta), l !== null)))
      )
        throw l;
      (t.memoizedState = f),
        (t.baseState = r),
        (t.baseQueue = S),
        (a.lastRenderedState = f);
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Vu(t) {
    var e = qt(),
      l = e.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      n = l.pending,
      f = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var r = (n = n.next);
      do (f = t(f, r.action)), (r = r.next);
      while (r !== n);
      ie(f, e.memoizedState) || (Lt = !0),
        (e.memoizedState = f),
        e.baseQueue === null && (e.baseState = f),
        (l.lastRenderedState = f);
    }
    return [f, a];
  }
  function Bc(t, e, l) {
    var a = at,
      n = qt(),
      f = gt;
    if (f) {
      if (l === void 0) throw Error(c(407));
      l = l();
    } else l = e();
    var r = !ie((pt || n).memoizedState, l);
    r && ((n.memoizedState = l), (Lt = !0)), (n = n.queue);
    var d = Cc.bind(null, a, n, t);
    if (
      (Ja(2048, 8, d, [t]),
      n.getSnapshot !== e || r || (Ht !== null && Ht.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ia(9, Ii(), qc.bind(null, a, n, l, e), null),
        Mt === null)
      )
        throw Error(c(349));
      f || (Pe & 124) !== 0 || Hc(a, e, l);
    }
    return l;
  }
  function Hc(t, e, l) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = at.updateQueue),
      e === null
        ? ((e = ju()), (at.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
  }
  function qc(t, e, l, a) {
    (e.value = l), (e.getSnapshot = a), Yc(e) && Xc(t);
  }
  function Cc(t, e, l) {
    return l(function () {
      Yc(e) && Xc(t);
    });
  }
  function Yc(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ie(t, l);
    } catch {
      return !0;
    }
  }
  function Xc(t) {
    var e = Wl(t, 2);
    e !== null && re(e, t, 2);
  }
  function wu(t) {
    var e = It();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), Dl)) {
        Ke(!0);
        try {
          l();
        } finally {
          Ke(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ce,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Gc(t, e, l, a) {
    return (t.baseState = l), Zu(t, pt, typeof a == "function" ? a : Ce);
  }
  function I0(t, e, l, a, n) {
    if (tn(t)) throw Error(c(485));
    if (((t = e.action), t !== null)) {
      var f = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (r) {
          f.listeners.push(r);
        },
      };
      U.T !== null ? l(!0) : (f.isTransition = !1),
        a(f),
        (l = e.pending),
        l === null
          ? ((f.next = e.pending = f), Lc(e, f))
          : ((f.next = l.next), (e.pending = l.next = f));
    }
  }
  function Lc(t, e) {
    var l = e.action,
      a = e.payload,
      n = t.state;
    if (e.isTransition) {
      var f = U.T,
        r = {};
      U.T = r;
      try {
        var d = l(n, a),
          S = U.S;
        S !== null && S(r, d), jc(t, e, d);
      } catch (M) {
        Ku(t, e, M);
      } finally {
        U.T = f;
      }
    } else
      try {
        (f = l(n, a)), jc(t, e, f);
      } catch (M) {
        Ku(t, e, M);
      }
  }
  function jc(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            Qc(t, e, a);
          },
          function (a) {
            return Ku(t, e, a);
          }
        )
      : Qc(t, e, l);
  }
  function Qc(t, e, l) {
    (e.status = "fulfilled"),
      (e.value = l),
      Zc(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), Lc(t, l)));
  }
  function Ku(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = l), Zc(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function Zc(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Vc(t, e) {
    return e;
  }
  function wc(t, e) {
    if (gt) {
      var l = Mt.formState;
      if (l !== null) {
        t: {
          var a = at;
          if (gt) {
            if (Dt) {
              e: {
                for (var n = Dt, f = Me; n.nodeType !== 8; ) {
                  if (!f) {
                    n = null;
                    break e;
                  }
                  if (((n = Ae(n.nextSibling)), n === null)) {
                    n = null;
                    break e;
                  }
                }
                (f = n.data), (n = f === "F!" || f === "F" ? n : null);
              }
              if (n) {
                (Dt = Ae(n.nextSibling)), (a = n.data === "F!");
                break t;
              }
            }
            xl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = It()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vc,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = rr.bind(null, at, a)),
      (a.dispatch = l),
      (a = wu(!1)),
      (f = ku.bind(null, at, !1, a.queue)),
      (a = It()),
      (n = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (l = I0.bind(null, at, n, f, l)),
      (n.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function Kc(t) {
    var e = qt();
    return Jc(e, pt, t);
  }
  function Jc(t, e, l) {
    if (
      ((e = Zu(t, e, Vc)[0]),
      (t = ki(Ce)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = Ka(e);
      } catch (r) {
        throw r === La ? wi : r;
      }
    else a = e;
    e = qt();
    var n = e.queue,
      f = n.dispatch;
    return (
      l !== e.memoizedState &&
        ((at.flags |= 2048), ia(9, Ii(), P0.bind(null, n, l), null)),
      [a, f, t]
    );
  }
  function P0(t, e) {
    t.action = e;
  }
  function Fc(t) {
    var e = qt(),
      l = pt;
    if (l !== null) return Jc(e, l, t);
    qt(), (e = e.memoizedState), (l = qt());
    var a = l.queue.dispatch;
    return (l.memoizedState = t), [e, a, !1];
  }
  function ia(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = at.updateQueue),
      e === null && ((e = ju()), (at.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Ii() {
    return { destroy: void 0, resource: void 0 };
  }
  function Wc() {
    return qt().memoizedState;
  }
  function Pi(t, e, l, a) {
    var n = It();
    (a = a === void 0 ? null : a),
      (at.flags |= t),
      (n.memoizedState = ia(1 | e, Ii(), l, a));
  }
  function Ja(t, e, l, a) {
    var n = qt();
    a = a === void 0 ? null : a;
    var f = n.memoizedState.inst;
    pt !== null && a !== null && Cu(a, pt.memoizedState.deps)
      ? (n.memoizedState = ia(e, f, l, a))
      : ((at.flags |= t), (n.memoizedState = ia(1 | e, f, l, a)));
  }
  function $c(t, e) {
    Pi(8390656, 8, t, e);
  }
  function kc(t, e) {
    Ja(2048, 8, t, e);
  }
  function Ic(t, e) {
    return Ja(4, 2, t, e);
  }
  function Pc(t, e) {
    return Ja(4, 4, t, e);
  }
  function tr(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function er(t, e, l) {
    (l = l != null ? l.concat([t]) : null), Ja(4, 4, tr.bind(null, e, t), l);
  }
  function Ju() {}
  function lr(t, e) {
    var l = qt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && Cu(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function ar(t, e) {
    var l = qt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && Cu(e, a[1])) return a[0];
    if (((a = t()), Dl)) {
      Ke(!0);
      try {
        t();
      } finally {
        Ke(!1);
      }
    }
    return (l.memoizedState = [a, e]), a;
  }
  function Fu(t, e, l) {
    return l === void 0 || (Pe & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = uh()), (at.lanes |= t), (ul |= t), l);
  }
  function ir(t, e, l, a) {
    return ie(l, e)
      ? l
      : ea.current !== null
      ? ((t = Fu(t, l, a)), ie(t, e) || (Lt = !0), t)
      : (Pe & 42) === 0
      ? ((Lt = !0), (t.memoizedState = l))
      : ((t = uh()), (at.lanes |= t), (ul |= t), e);
  }
  function nr(t, e, l, a, n) {
    var f = j.p;
    j.p = f !== 0 && 8 > f ? f : 8;
    var r = U.T,
      d = {};
    (U.T = d), ku(t, !1, e, l);
    try {
      var S = n(),
        M = U.S;
      if (
        (M !== null && M(d, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var R = W0(S, a);
        Fa(t, e, R, ce(t));
      } else Fa(t, e, a, ce(t));
    } catch (H) {
      Fa(t, e, { then: function () {}, status: "rejected", reason: H }, ce());
    } finally {
      (j.p = f), (U.T = r);
    }
  }
  function td() {}
  function Wu(t, e, l, a) {
    if (t.tag !== 5) throw Error(c(476));
    var n = ur(t).queue;
    nr(
      t,
      n,
      e,
      k,
      l === null
        ? td
        : function () {
            return fr(t), l(a);
          }
    );
  }
  function ur(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: k,
      baseState: k,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ce,
        lastRenderedState: k,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ce,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function fr(t) {
    var e = ur(t).next.queue;
    Fa(t, e, {}, ce());
  }
  function $u() {
    return Jt(di);
  }
  function sr() {
    return qt().memoizedState;
  }
  function cr() {
    return qt().memoizedState;
  }
  function ed(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ce();
          t = ke(l);
          var a = Ie(e, t, l);
          a !== null && (re(a, e, l), Qa(a, e, l)),
            (e = { cache: xu() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function ld(t, e, l) {
    var a = ce();
    (l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      tn(t)
        ? hr(e, l)
        : ((l = vu(t, e, l, a)), l !== null && (re(l, t, a), dr(l, e, a)));
  }
  function rr(t, e, l) {
    var a = ce();
    Fa(t, e, l, a);
  }
  function Fa(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (tn(t)) hr(e, n);
    else {
      var f = t.alternate;
      if (
        t.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = e.lastRenderedReducer), f !== null)
      )
        try {
          var r = e.lastRenderedState,
            d = f(r, l);
          if (((n.hasEagerState = !0), (n.eagerState = d), ie(d, r)))
            return Yi(t, e, n, 0), Mt === null && Ci(), !1;
        } catch {
        } finally {
        }
      if (((l = vu(t, e, n, a)), l !== null))
        return re(l, t, a), dr(l, e, a), !0;
    }
    return !1;
  }
  function ku(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Df(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      tn(t))
    ) {
      if (e) throw Error(c(479));
    } else (e = vu(t, l, a, 2)), e !== null && re(e, t, 2);
  }
  function tn(t) {
    var e = t.alternate;
    return t === at || (e !== null && e === at);
  }
  function hr(t, e) {
    la = Fi = !0;
    var l = t.pending;
    l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e);
  }
  function dr(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), bs(t, l);
    }
  }
  var en = {
      readContext: Jt,
      use: $i,
      useCallback: Nt,
      useContext: Nt,
      useEffect: Nt,
      useImperativeHandle: Nt,
      useLayoutEffect: Nt,
      useInsertionEffect: Nt,
      useMemo: Nt,
      useReducer: Nt,
      useRef: Nt,
      useState: Nt,
      useDebugValue: Nt,
      useDeferredValue: Nt,
      useTransition: Nt,
      useSyncExternalStore: Nt,
      useId: Nt,
      useHostTransitionStatus: Nt,
      useFormState: Nt,
      useActionState: Nt,
      useOptimistic: Nt,
      useMemoCache: Nt,
      useCacheRefresh: Nt,
    },
    or = {
      readContext: Jt,
      use: $i,
      useCallback: function (t, e) {
        return (It().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: Jt,
      useEffect: $c,
      useImperativeHandle: function (t, e, l) {
        (l = l != null ? l.concat([t]) : null),
          Pi(4194308, 4, tr.bind(null, e, t), l);
      },
      useLayoutEffect: function (t, e) {
        return Pi(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Pi(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = It();
        e = e === void 0 ? null : e;
        var a = t();
        if (Dl) {
          Ke(!0);
          try {
            t();
          } finally {
            Ke(!1);
          }
        }
        return (l.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, l) {
        var a = It();
        if (l !== void 0) {
          var n = l(e);
          if (Dl) {
            Ke(!0);
            try {
              l(e);
            } finally {
              Ke(!1);
            }
          }
        } else n = e;
        return (
          (a.memoizedState = a.baseState = n),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (a.queue = t),
          (t = t.dispatch = ld.bind(null, at, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = It();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = wu(t);
        var e = t.queue,
          l = rr.bind(null, at, e);
        return (e.dispatch = l), [t.memoizedState, l];
      },
      useDebugValue: Ju,
      useDeferredValue: function (t, e) {
        var l = It();
        return Fu(l, t, e);
      },
      useTransition: function () {
        var t = wu(!1);
        return (
          (t = nr.bind(null, at, t.queue, !0, !1)),
          (It().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = at,
          n = It();
        if (gt) {
          if (l === void 0) throw Error(c(407));
          l = l();
        } else {
          if (((l = e()), Mt === null)) throw Error(c(349));
          (ct & 124) !== 0 || Hc(a, e, l);
        }
        n.memoizedState = l;
        var f = { value: l, getSnapshot: e };
        return (
          (n.queue = f),
          $c(Cc.bind(null, a, f, t), [t]),
          (a.flags |= 2048),
          ia(9, Ii(), qc.bind(null, a, f, l, e), null),
          l
        );
      },
      useId: function () {
        var t = It(),
          e = Mt.identifierPrefix;
        if (gt) {
          var l = Be,
            a = Ne;
          (l = (a & ~(1 << (32 - ae(a) - 1))).toString(32) + l),
            (e = "«" + e + "R" + l),
            (l = Wi++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "»");
        } else (l = $0++), (e = "«" + e + "r" + l.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: $u,
      useFormState: wc,
      useActionState: wc,
      useOptimistic: function (t) {
        var e = It();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = ku.bind(null, at, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Qu,
      useCacheRefresh: function () {
        return (It().memoizedState = ed.bind(null, at));
      },
    },
    gr = {
      readContext: Jt,
      use: $i,
      useCallback: lr,
      useContext: Jt,
      useEffect: kc,
      useImperativeHandle: er,
      useInsertionEffect: Ic,
      useLayoutEffect: Pc,
      useMemo: ar,
      useReducer: ki,
      useRef: Wc,
      useState: function () {
        return ki(Ce);
      },
      useDebugValue: Ju,
      useDeferredValue: function (t, e) {
        var l = qt();
        return ir(l, pt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = ki(Ce)[0],
          e = qt().memoizedState;
        return [typeof t == "boolean" ? t : Ka(t), e];
      },
      useSyncExternalStore: Bc,
      useId: sr,
      useHostTransitionStatus: $u,
      useFormState: Kc,
      useActionState: Kc,
      useOptimistic: function (t, e) {
        var l = qt();
        return Gc(l, pt, t, e);
      },
      useMemoCache: Qu,
      useCacheRefresh: cr,
    },
    ad = {
      readContext: Jt,
      use: $i,
      useCallback: lr,
      useContext: Jt,
      useEffect: kc,
      useImperativeHandle: er,
      useInsertionEffect: Ic,
      useLayoutEffect: Pc,
      useMemo: ar,
      useReducer: Vu,
      useRef: Wc,
      useState: function () {
        return Vu(Ce);
      },
      useDebugValue: Ju,
      useDeferredValue: function (t, e) {
        var l = qt();
        return pt === null ? Fu(l, t, e) : ir(l, pt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Vu(Ce)[0],
          e = qt().memoizedState;
        return [typeof t == "boolean" ? t : Ka(t), e];
      },
      useSyncExternalStore: Bc,
      useId: sr,
      useHostTransitionStatus: $u,
      useFormState: Fc,
      useActionState: Fc,
      useOptimistic: function (t, e) {
        var l = qt();
        return pt !== null
          ? Gc(l, pt, t, e)
          : ((l.baseState = t), [t, l.queue.dispatch]);
      },
      useMemoCache: Qu,
      useCacheRefresh: cr,
    },
    na = null,
    Wa = 0;
  function ln(t) {
    var e = Wa;
    return (Wa += 1), na === null && (na = []), Tc(na, t, e);
  }
  function $a(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function an(t, e) {
    throw e.$$typeof === z
      ? Error(c(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          c(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function yr(t) {
    var e = t._init;
    return e(t._payload);
  }
  function vr(t) {
    function e(A, b) {
      if (t) {
        var _ = A.deletions;
        _ === null ? ((A.deletions = [b]), (A.flags |= 16)) : _.push(b);
      }
    }
    function l(A, b) {
      if (!t) return null;
      for (; b !== null; ) e(A, b), (b = b.sibling);
      return null;
    }
    function a(A) {
      for (var b = new Map(); A !== null; )
        A.key !== null ? b.set(A.key, A) : b.set(A.index, A), (A = A.sibling);
      return b;
    }
    function n(A, b) {
      return (A = Ue(A, b)), (A.index = 0), (A.sibling = null), A;
    }
    function f(A, b, _) {
      return (
        (A.index = _),
        t
          ? ((_ = A.alternate),
            _ !== null
              ? ((_ = _.index), _ < b ? ((A.flags |= 67108866), b) : _)
              : ((A.flags |= 67108866), b))
          : ((A.flags |= 1048576), b)
      );
    }
    function r(A) {
      return t && A.alternate === null && (A.flags |= 67108866), A;
    }
    function d(A, b, _, N) {
      return b === null || b.tag !== 6
        ? ((b = Su(_, A.mode, N)), (b.return = A), b)
        : ((b = n(b, _)), (b.return = A), b);
    }
    function S(A, b, _, N) {
      var w = _.type;
      return w === B
        ? R(A, b, _.props.children, N, _.key)
        : b !== null &&
          (b.elementType === w ||
            (typeof w == "object" &&
              w !== null &&
              w.$$typeof === rt &&
              yr(w) === b.type))
        ? ((b = n(b, _.props)), $a(b, _), (b.return = A), b)
        : ((b = Gi(_.type, _.key, _.props, null, A.mode, N)),
          $a(b, _),
          (b.return = A),
          b);
    }
    function M(A, b, _, N) {
      return b === null ||
        b.tag !== 4 ||
        b.stateNode.containerInfo !== _.containerInfo ||
        b.stateNode.implementation !== _.implementation
        ? ((b = pu(_, A.mode, N)), (b.return = A), b)
        : ((b = n(b, _.children || [])), (b.return = A), b);
    }
    function R(A, b, _, N, w) {
      return b === null || b.tag !== 7
        ? ((b = Al(_, A.mode, N, w)), (b.return = A), b)
        : ((b = n(b, _)), (b.return = A), b);
    }
    function H(A, b, _) {
      if (
        (typeof b == "string" && b !== "") ||
        typeof b == "number" ||
        typeof b == "bigint"
      )
        return (b = Su("" + b, A.mode, _)), (b.return = A), b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case O:
            return (
              (_ = Gi(b.type, b.key, b.props, null, A.mode, _)),
              $a(_, b),
              (_.return = A),
              _
            );
          case D:
            return (b = pu(b, A.mode, _)), (b.return = A), b;
          case rt:
            var N = b._init;
            return (b = N(b._payload)), H(A, b, _);
        }
        if (Rt(b) || st(b))
          return (b = Al(b, A.mode, _, null)), (b.return = A), b;
        if (typeof b.then == "function") return H(A, ln(b), _);
        if (b.$$typeof === K) return H(A, Zi(A, b), _);
        an(A, b);
      }
      return null;
    }
    function T(A, b, _, N) {
      var w = b !== null ? b.key : null;
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return w !== null ? null : d(A, b, "" + _, N);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case O:
            return _.key === w ? S(A, b, _, N) : null;
          case D:
            return _.key === w ? M(A, b, _, N) : null;
          case rt:
            return (w = _._init), (_ = w(_._payload)), T(A, b, _, N);
        }
        if (Rt(_) || st(_)) return w !== null ? null : R(A, b, _, N, null);
        if (typeof _.then == "function") return T(A, b, ln(_), N);
        if (_.$$typeof === K) return T(A, b, Zi(A, _), N);
        an(A, _);
      }
      return null;
    }
    function x(A, b, _, N, w) {
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return (A = A.get(_) || null), d(b, A, "" + N, w);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case O:
            return (
              (A = A.get(N.key === null ? _ : N.key) || null), S(b, A, N, w)
            );
          case D:
            return (
              (A = A.get(N.key === null ? _ : N.key) || null), M(b, A, N, w)
            );
          case rt:
            var it = N._init;
            return (N = it(N._payload)), x(A, b, _, N, w);
        }
        if (Rt(N) || st(N)) return (A = A.get(_) || null), R(b, A, N, w, null);
        if (typeof N.then == "function") return x(A, b, _, ln(N), w);
        if (N.$$typeof === K) return x(A, b, _, Zi(b, N), w);
        an(b, N);
      }
      return null;
    }
    function I(A, b, _, N) {
      for (
        var w = null, it = null, J = b, $ = (b = 0), Qt = null;
        J !== null && $ < _.length;
        $++
      ) {
        J.index > $ ? ((Qt = J), (J = null)) : (Qt = J.sibling);
        var dt = T(A, J, _[$], N);
        if (dt === null) {
          J === null && (J = Qt);
          break;
        }
        t && J && dt.alternate === null && e(A, J),
          (b = f(dt, b, $)),
          it === null ? (w = dt) : (it.sibling = dt),
          (it = dt),
          (J = Qt);
      }
      if ($ === _.length) return l(A, J), gt && Ml(A, $), w;
      if (J === null) {
        for (; $ < _.length; $++)
          (J = H(A, _[$], N)),
            J !== null &&
              ((b = f(J, b, $)),
              it === null ? (w = J) : (it.sibling = J),
              (it = J));
        return gt && Ml(A, $), w;
      }
      for (J = a(J); $ < _.length; $++)
        (Qt = x(J, A, $, _[$], N)),
          Qt !== null &&
            (t &&
              Qt.alternate !== null &&
              J.delete(Qt.key === null ? $ : Qt.key),
            (b = f(Qt, b, $)),
            it === null ? (w = Qt) : (it.sibling = Qt),
            (it = Qt));
      return (
        t &&
          J.forEach(function (yl) {
            return e(A, yl);
          }),
        gt && Ml(A, $),
        w
      );
    }
    function W(A, b, _, N) {
      if (_ == null) throw Error(c(151));
      for (
        var w = null, it = null, J = b, $ = (b = 0), Qt = null, dt = _.next();
        J !== null && !dt.done;
        $++, dt = _.next()
      ) {
        J.index > $ ? ((Qt = J), (J = null)) : (Qt = J.sibling);
        var yl = T(A, J, dt.value, N);
        if (yl === null) {
          J === null && (J = Qt);
          break;
        }
        t && J && yl.alternate === null && e(A, J),
          (b = f(yl, b, $)),
          it === null ? (w = yl) : (it.sibling = yl),
          (it = yl),
          (J = Qt);
      }
      if (dt.done) return l(A, J), gt && Ml(A, $), w;
      if (J === null) {
        for (; !dt.done; $++, dt = _.next())
          (dt = H(A, dt.value, N)),
            dt !== null &&
              ((b = f(dt, b, $)),
              it === null ? (w = dt) : (it.sibling = dt),
              (it = dt));
        return gt && Ml(A, $), w;
      }
      for (J = a(J); !dt.done; $++, dt = _.next())
        (dt = x(J, A, $, dt.value, N)),
          dt !== null &&
            (t &&
              dt.alternate !== null &&
              J.delete(dt.key === null ? $ : dt.key),
            (b = f(dt, b, $)),
            it === null ? (w = dt) : (it.sibling = dt),
            (it = dt));
      return (
        t &&
          J.forEach(function (io) {
            return e(A, io);
          }),
        gt && Ml(A, $),
        w
      );
    }
    function Et(A, b, _, N) {
      if (
        (typeof _ == "object" &&
          _ !== null &&
          _.type === B &&
          _.key === null &&
          (_ = _.props.children),
        typeof _ == "object" && _ !== null)
      ) {
        switch (_.$$typeof) {
          case O:
            t: {
              for (var w = _.key; b !== null; ) {
                if (b.key === w) {
                  if (((w = _.type), w === B)) {
                    if (b.tag === 7) {
                      l(A, b.sibling),
                        (N = n(b, _.props.children)),
                        (N.return = A),
                        (A = N);
                      break t;
                    }
                  } else if (
                    b.elementType === w ||
                    (typeof w == "object" &&
                      w !== null &&
                      w.$$typeof === rt &&
                      yr(w) === b.type)
                  ) {
                    l(A, b.sibling),
                      (N = n(b, _.props)),
                      $a(N, _),
                      (N.return = A),
                      (A = N);
                    break t;
                  }
                  l(A, b);
                  break;
                } else e(A, b);
                b = b.sibling;
              }
              _.type === B
                ? ((N = Al(_.props.children, A.mode, N, _.key)),
                  (N.return = A),
                  (A = N))
                : ((N = Gi(_.type, _.key, _.props, null, A.mode, N)),
                  $a(N, _),
                  (N.return = A),
                  (A = N));
            }
            return r(A);
          case D:
            t: {
              for (w = _.key; b !== null; ) {
                if (b.key === w)
                  if (
                    b.tag === 4 &&
                    b.stateNode.containerInfo === _.containerInfo &&
                    b.stateNode.implementation === _.implementation
                  ) {
                    l(A, b.sibling),
                      (N = n(b, _.children || [])),
                      (N.return = A),
                      (A = N);
                    break t;
                  } else {
                    l(A, b);
                    break;
                  }
                else e(A, b);
                b = b.sibling;
              }
              (N = pu(_, A.mode, N)), (N.return = A), (A = N);
            }
            return r(A);
          case rt:
            return (w = _._init), (_ = w(_._payload)), Et(A, b, _, N);
        }
        if (Rt(_)) return I(A, b, _, N);
        if (st(_)) {
          if (((w = st(_)), typeof w != "function")) throw Error(c(150));
          return (_ = w.call(_)), W(A, b, _, N);
        }
        if (typeof _.then == "function") return Et(A, b, ln(_), N);
        if (_.$$typeof === K) return Et(A, b, Zi(A, _), N);
        an(A, _);
      }
      return (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
        ? ((_ = "" + _),
          b !== null && b.tag === 6
            ? (l(A, b.sibling), (N = n(b, _)), (N.return = A), (A = N))
            : (l(A, b), (N = Su(_, A.mode, N)), (N.return = A), (A = N)),
          r(A))
        : l(A, b);
    }
    return function (A, b, _, N) {
      try {
        Wa = 0;
        var w = Et(A, b, _, N);
        return (na = null), w;
      } catch (J) {
        if (J === La || J === wi) throw J;
        var it = ne(29, J, null, A.mode);
        return (it.lanes = N), (it.return = A), it;
      } finally {
      }
    };
  }
  var ua = vr(!0),
    mr = vr(!1),
    me = C(null),
    Te = null;
  function tl(t) {
    var e = t.alternate;
    L(Xt, Xt.current & 1),
      L(me, t),
      Te === null &&
        (e === null || ea.current !== null || e.memoizedState !== null) &&
        (Te = t);
  }
  function Sr(t) {
    if (t.tag === 22) {
      if ((L(Xt, Xt.current), L(me, t), Te === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Te = t);
      }
    } else el();
  }
  function el() {
    L(Xt, Xt.current), L(me, me.current);
  }
  function Ye(t) {
    Z(me), Te === t && (Te = null), Z(Xt);
  }
  var Xt = C(0);
  function nn(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || Qf(l))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function Iu(t, e, l, a) {
    (e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : E({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Pu = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = ce(),
        n = ke(a);
      (n.payload = e),
        l != null && (n.callback = l),
        (e = Ie(t, n, a)),
        e !== null && (re(e, t, a), Qa(e, t, a));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = ce(),
        n = ke(a);
      (n.tag = 1),
        (n.payload = e),
        l != null && (n.callback = l),
        (e = Ie(t, n, a)),
        e !== null && (re(e, t, a), Qa(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = ce(),
        a = ke(l);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = Ie(t, a, l)),
        e !== null && (re(e, t, l), Qa(e, t, l));
    },
  };
  function pr(t, e, l, a, n, f, r) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, f, r)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Na(l, a) || !Na(n, f)
        : !0
    );
  }
  function br(t, e, l, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && Pu.enqueueReplaceState(e, e.state, null);
  }
  function Ul(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = E({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  var un =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Er(t) {
    un(t);
  }
  function Ar(t) {
    console.error(t);
  }
  function _r(t) {
    un(t);
  }
  function fn(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Mr(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function tf(t, e, l) {
    return (
      (l = ke(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        fn(t, e);
      }),
      l
    );
  }
  function Tr(t) {
    return (t = ke(t)), (t.tag = 3), t;
  }
  function xr(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var f = a.value;
      (t.payload = function () {
        return n(f);
      }),
        (t.callback = function () {
          Mr(e, l, a);
        });
    }
    var r = l.stateNode;
    r !== null &&
      typeof r.componentDidCatch == "function" &&
      (t.callback = function () {
        Mr(e, l, a),
          typeof n != "function" &&
            (fl === null ? (fl = new Set([this])) : fl.add(this));
        var d = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: d !== null ? d : "",
        });
      });
  }
  function id(t, e, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && Ya(e, l, n, !0),
        (l = me.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Te === null ? Tf() : l.alternate === null && Ut === 0 && (Ut = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === Ru
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  zf(t, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Ru
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  zf(t, a, n)),
              !1
            );
        }
        throw Error(c(435, l.tag));
      }
      return zf(t, a, n), Tf(), !1;
    }
    if (gt)
      return (
        (e = me.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = n),
            a !== Au && ((t = Error(c(422), { cause: a })), Ca(oe(t, l))))
          : (a !== Au && ((e = Error(c(423), { cause: a })), Ca(oe(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (n &= -n),
            (t.lanes |= n),
            (a = oe(a, l)),
            (n = tf(t.stateNode, a, n)),
            Nu(t, n),
            Ut !== 4 && (Ut = 2)),
        !1
      );
    var f = Error(c(520), { cause: a });
    if (
      ((f = oe(f, l)),
      ai === null ? (ai = [f]) : ai.push(f),
      Ut !== 4 && (Ut = 2),
      e === null)
    )
      return !0;
    (a = oe(a, l)), (l = e);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = n & -n),
            (l.lanes |= t),
            (t = tf(l.stateNode, a, t)),
            Nu(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (f = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (f !== null &&
                  typeof f.componentDidCatch == "function" &&
                  (fl === null || !fl.has(f)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = Tr(n)),
              xr(n, t, l, a),
              Nu(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var zr = Error(c(461)),
    Lt = !1;
  function Zt(t, e, l, a) {
    e.child = t === null ? mr(e, null, l, a) : ua(e, t.child, l, a);
  }
  function Or(t, e, l, a, n) {
    l = l.render;
    var f = e.ref;
    if ("ref" in a) {
      var r = {};
      for (var d in a) d !== "ref" && (r[d] = a[d]);
    } else r = a;
    return (
      Ol(e),
      (a = Yu(t, e, l, r, f, n)),
      (d = Xu()),
      t !== null && !Lt
        ? (Gu(t, e, n), Xe(t, e, n))
        : (gt && d && bu(e), (e.flags |= 1), Zt(t, e, a, n), e.child)
    );
  }
  function Rr(t, e, l, a, n) {
    if (t === null) {
      var f = l.type;
      return typeof f == "function" &&
        !mu(f) &&
        f.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = f), Dr(t, e, f, a, n))
        : ((t = Gi(l.type, null, a, e, e.mode, n)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((f = t.child), !cf(t, n))) {
      var r = f.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Na), l(r, a) && t.ref === e.ref)
      )
        return Xe(t, e, n);
    }
    return (
      (e.flags |= 1),
      (t = Ue(f, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Dr(t, e, l, a, n) {
    if (t !== null) {
      var f = t.memoizedProps;
      if (Na(f, a) && t.ref === e.ref)
        if (((Lt = !1), (e.pendingProps = a = f), cf(t, n)))
          (t.flags & 131072) !== 0 && (Lt = !0);
        else return (e.lanes = t.lanes), Xe(t, e, n);
    }
    return ef(t, e, l, a, n);
  }
  function Ur(t, e, l) {
    var a = e.pendingProps,
      n = a.children,
      f = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((a = f !== null ? f.baseLanes | l : l), t !== null)) {
          for (n = e.child = t.child, f = 0; n !== null; )
            (f = f | n.lanes | n.childLanes), (n = n.sibling);
          e.childLanes = f & ~a;
        } else (e.childLanes = 0), (e.child = null);
        return Nr(t, e, a, l);
      }
      if ((l & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Vi(e, f !== null ? f.cachePool : null),
          f !== null ? Dc(e, f) : Hu(),
          Sr(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Nr(t, e, f !== null ? f.baseLanes | l : l, l)
        );
    } else
      f !== null
        ? (Vi(e, f.cachePool), Dc(e, f), el(), (e.memoizedState = null))
        : (t !== null && Vi(e, null), Hu(), el());
    return Zt(t, e, n, l), e.child;
  }
  function Nr(t, e, l, a) {
    var n = Ou();
    return (
      (n = n === null ? null : { parent: Yt._currentValue, pool: n }),
      (e.memoizedState = { baseLanes: l, cachePool: n }),
      t !== null && Vi(e, null),
      Hu(),
      Sr(e),
      t !== null && Ya(t, e, a, !0),
      null
    );
  }
  function sn(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(c(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function ef(t, e, l, a, n) {
    return (
      Ol(e),
      (l = Yu(t, e, l, a, void 0, n)),
      (a = Xu()),
      t !== null && !Lt
        ? (Gu(t, e, n), Xe(t, e, n))
        : (gt && a && bu(e), (e.flags |= 1), Zt(t, e, l, n), e.child)
    );
  }
  function Br(t, e, l, a, n, f) {
    return (
      Ol(e),
      (e.updateQueue = null),
      (l = Nc(e, a, l, n)),
      Uc(t),
      (a = Xu()),
      t !== null && !Lt
        ? (Gu(t, e, f), Xe(t, e, f))
        : (gt && a && bu(e), (e.flags |= 1), Zt(t, e, l, f), e.child)
    );
  }
  function Hr(t, e, l, a, n) {
    if ((Ol(e), e.stateNode === null)) {
      var f = $l,
        r = l.contextType;
      typeof r == "object" && r !== null && (f = Jt(r)),
        (f = new l(a, f)),
        (e.memoizedState =
          f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = Pu),
        (e.stateNode = f),
        (f._reactInternals = e),
        (f = e.stateNode),
        (f.props = a),
        (f.state = e.memoizedState),
        (f.refs = {}),
        Du(e),
        (r = l.contextType),
        (f.context = typeof r == "object" && r !== null ? Jt(r) : $l),
        (f.state = e.memoizedState),
        (r = l.getDerivedStateFromProps),
        typeof r == "function" && (Iu(e, l, r, a), (f.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function" ||
          (typeof f.UNSAFE_componentWillMount != "function" &&
            typeof f.componentWillMount != "function") ||
          ((r = f.state),
          typeof f.componentWillMount == "function" && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == "function" &&
            f.UNSAFE_componentWillMount(),
          r !== f.state && Pu.enqueueReplaceState(f, f.state, null),
          Va(e, a, f, n),
          Za(),
          (f.state = e.memoizedState)),
        typeof f.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      f = e.stateNode;
      var d = e.memoizedProps,
        S = Ul(l, d);
      f.props = S;
      var M = f.context,
        R = l.contextType;
      (r = $l), typeof R == "object" && R !== null && (r = Jt(R));
      var H = l.getDerivedStateFromProps;
      (R =
        typeof H == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function"),
        (d = e.pendingProps !== d),
        R ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((d || M !== r) && br(e, f, a, r)),
        ($e = !1);
      var T = e.memoizedState;
      (f.state = T),
        Va(e, a, f, n),
        Za(),
        (M = e.memoizedState),
        d || T !== M || $e
          ? (typeof H == "function" && (Iu(e, l, H, a), (M = e.memoizedState)),
            (S = $e || pr(e, l, S, a, T, M, r))
              ? (R ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof f.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = M)),
            (f.props = a),
            (f.state = M),
            (f.context = r),
            (a = S))
          : (typeof f.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (f = e.stateNode),
        Uu(t, e),
        (r = e.memoizedProps),
        (R = Ul(l, r)),
        (f.props = R),
        (H = e.pendingProps),
        (T = f.context),
        (M = l.contextType),
        (S = $l),
        typeof M == "object" && M !== null && (S = Jt(M)),
        (d = l.getDerivedStateFromProps),
        (M =
          typeof d == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function") ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((r !== H || T !== S) && br(e, f, a, S)),
        ($e = !1),
        (T = e.memoizedState),
        (f.state = T),
        Va(e, a, f, n),
        Za();
      var x = e.memoizedState;
      r !== H ||
      T !== x ||
      $e ||
      (t !== null && t.dependencies !== null && Qi(t.dependencies))
        ? (typeof d == "function" && (Iu(e, l, d, a), (x = e.memoizedState)),
          (R =
            $e ||
            pr(e, l, R, a, T, x, S) ||
            (t !== null && t.dependencies !== null && Qi(t.dependencies)))
            ? (M ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" &&
                  f.componentWillUpdate(a, x, S),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(a, x, S)),
              typeof f.componentDidUpdate == "function" && (e.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (r === t.memoizedProps && T === t.memoizedState) ||
                (e.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (r === t.memoizedProps && T === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = x)),
          (f.props = a),
          (f.state = x),
          (f.context = S),
          (a = R))
        : (typeof f.componentDidUpdate != "function" ||
            (r === t.memoizedProps && T === t.memoizedState) ||
            (e.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (r === t.memoizedProps && T === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (f = a),
      sn(t, e),
      (a = (e.flags & 128) !== 0),
      f || a
        ? ((f = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : f.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = ua(e, t.child, null, n)),
              (e.child = ua(e, null, l, n)))
            : Zt(t, e, l, n),
          (e.memoizedState = f.state),
          (t = e.child))
        : (t = Xe(t, e, n)),
      t
    );
  }
  function qr(t, e, l, a) {
    return qa(), (e.flags |= 256), Zt(t, e, l, a), e.child;
  }
  var lf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function af(t) {
    return { baseLanes: t, cachePool: Ac() };
  }
  function nf(t, e, l) {
    return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= Se), t;
  }
  function Cr(t, e, l) {
    var a = e.pendingProps,
      n = !1,
      f = (e.flags & 128) !== 0,
      r;
    if (
      ((r = f) ||
        (r =
          t !== null && t.memoizedState === null ? !1 : (Xt.current & 2) !== 0),
      r && ((n = !0), (e.flags &= -129)),
      (r = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (gt) {
        if ((n ? tl(e) : el(), gt)) {
          var d = Dt,
            S;
          if ((S = d)) {
            t: {
              for (S = d, d = Me; S.nodeType !== 8; ) {
                if (!d) {
                  d = null;
                  break t;
                }
                if (((S = Ae(S.nextSibling)), S === null)) {
                  d = null;
                  break t;
                }
              }
              d = S;
            }
            d !== null
              ? ((e.memoizedState = {
                  dehydrated: d,
                  treeContext: _l !== null ? { id: Ne, overflow: Be } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (S = ne(18, null, null, 0)),
                (S.stateNode = d),
                (S.return = e),
                (e.child = S),
                (Wt = e),
                (Dt = null),
                (S = !0))
              : (S = !1);
          }
          S || xl(e);
        }
        if (
          ((d = e.memoizedState),
          d !== null && ((d = d.dehydrated), d !== null))
        )
          return Qf(d) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        Ye(e);
      }
      return (
        (d = a.children),
        (a = a.fallback),
        n
          ? (el(),
            (n = e.mode),
            (d = cn({ mode: "hidden", children: d }, n)),
            (a = Al(a, n, l, null)),
            (d.return = e),
            (a.return = e),
            (d.sibling = a),
            (e.child = d),
            (n = e.child),
            (n.memoizedState = af(l)),
            (n.childLanes = nf(t, r, l)),
            (e.memoizedState = lf),
            a)
          : (tl(e), uf(e, d))
      );
    }
    if (
      ((S = t.memoizedState), S !== null && ((d = S.dehydrated), d !== null))
    ) {
      if (f)
        e.flags & 256
          ? (tl(e), (e.flags &= -257), (e = ff(t, e, l)))
          : e.memoizedState !== null
          ? (el(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (el(),
            (n = a.fallback),
            (d = e.mode),
            (a = cn({ mode: "visible", children: a.children }, d)),
            (n = Al(n, d, l, null)),
            (n.flags |= 2),
            (a.return = e),
            (n.return = e),
            (a.sibling = n),
            (e.child = a),
            ua(e, t.child, null, l),
            (a = e.child),
            (a.memoizedState = af(l)),
            (a.childLanes = nf(t, r, l)),
            (e.memoizedState = lf),
            (e = n));
      else if ((tl(e), Qf(d))) {
        if (((r = d.nextSibling && d.nextSibling.dataset), r)) var M = r.dgst;
        (r = M),
          (a = Error(c(419))),
          (a.stack = ""),
          (a.digest = r),
          Ca({ value: a, source: null, stack: null }),
          (e = ff(t, e, l));
      } else if (
        (Lt || Ya(t, e, l, !1), (r = (l & t.childLanes) !== 0), Lt || r)
      ) {
        if (
          ((r = Mt),
          r !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : Qn(a)),
            (a = (a & (r.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== S.retryLane))
        )
          throw ((S.retryLane = a), Wl(t, a), re(r, t, a), zr);
        d.data === "$?" || Tf(), (e = ff(t, e, l));
      } else
        d.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = S.treeContext),
            (Dt = Ae(d.nextSibling)),
            (Wt = e),
            (gt = !0),
            (Tl = null),
            (Me = !1),
            t !== null &&
              ((ye[ve++] = Ne),
              (ye[ve++] = Be),
              (ye[ve++] = _l),
              (Ne = t.id),
              (Be = t.overflow),
              (_l = e)),
            (e = uf(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return n
      ? (el(),
        (n = a.fallback),
        (d = e.mode),
        (S = t.child),
        (M = S.sibling),
        (a = Ue(S, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = S.subtreeFlags & 65011712),
        M !== null ? (n = Ue(M, n)) : ((n = Al(n, d, l, null)), (n.flags |= 2)),
        (n.return = e),
        (a.return = e),
        (a.sibling = n),
        (e.child = a),
        (a = n),
        (n = e.child),
        (d = t.child.memoizedState),
        d === null
          ? (d = af(l))
          : ((S = d.cachePool),
            S !== null
              ? ((M = Yt._currentValue),
                (S = S.parent !== M ? { parent: M, pool: M } : S))
              : (S = Ac()),
            (d = { baseLanes: d.baseLanes | l, cachePool: S })),
        (n.memoizedState = d),
        (n.childLanes = nf(t, r, l)),
        (e.memoizedState = lf),
        a)
      : (tl(e),
        (l = t.child),
        (t = l.sibling),
        (l = Ue(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((r = e.deletions),
          r === null ? ((e.deletions = [t]), (e.flags |= 16)) : r.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function uf(t, e) {
    return (
      (e = cn({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function cn(t, e) {
    return (
      (t = ne(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function ff(t, e, l) {
    return (
      ua(e, t.child, null, l),
      (t = uf(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Yr(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Mu(t.return, e, l);
  }
  function sf(t, e, l, a, n) {
    var f = t.memoizedState;
    f === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
        })
      : ((f.isBackwards = e),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = a),
        (f.tail = l),
        (f.tailMode = n));
  }
  function Xr(t, e, l) {
    var a = e.pendingProps,
      n = a.revealOrder,
      f = a.tail;
    if ((Zt(t, e, a.children, l), (a = Xt.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Yr(t, l, e);
          else if (t.tag === 19) Yr(t, l, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      a &= 1;
    }
    switch ((L(Xt, a), n)) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          (t = l.alternate),
            t !== null && nn(t) === null && (n = l),
            (l = l.sibling);
        (l = n),
          l === null
            ? ((n = e.child), (e.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          sf(e, !1, n, l, f);
        break;
      case "backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (((t = n.alternate), t !== null && nn(t) === null)) {
            e.child = n;
            break;
          }
          (t = n.sibling), (n.sibling = l), (l = n), (n = t);
        }
        sf(e, !0, l, null, f);
        break;
      case "together":
        sf(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Xe(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (ul |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Ya(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(c(153));
    if (e.child !== null) {
      for (
        t = e.child, l = Ue(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (l = l.sibling = Ue(t, t.pendingProps)),
          (l.return = e);
      l.sibling = null;
    }
    return e.child;
  }
  function cf(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Qi(t)));
  }
  function nd(t, e, l) {
    switch (e.tag) {
      case 3:
        xt(e, e.stateNode.containerInfo),
          We(e, Yt, t.memoizedState.cache),
          qa();
        break;
      case 27:
      case 5:
        Yn(e);
        break;
      case 4:
        xt(e, e.stateNode.containerInfo);
        break;
      case 10:
        We(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (tl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
            ? Cr(t, e, l)
            : (tl(e), (t = Xe(t, e, l)), t !== null ? t.sibling : null);
        tl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (Ya(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          n)
        ) {
          if (a) return Xr(t, e, l);
          e.flags |= 128;
        }
        if (
          ((n = e.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          L(Xt, Xt.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), Ur(t, e, l);
      case 24:
        We(e, Yt, t.memoizedState.cache);
    }
    return Xe(t, e, l);
  }
  function Gr(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Lt = !0;
      else {
        if (!cf(t, l) && (e.flags & 128) === 0) return (Lt = !1), nd(t, e, l);
        Lt = (t.flags & 131072) !== 0;
      }
    else (Lt = !1), gt && (e.flags & 1048576) !== 0 && yc(e, ji, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType,
            n = a._init;
          if (((a = n(a._payload)), (e.type = a), typeof a == "function"))
            mu(a)
              ? ((t = Ul(a, t)), (e.tag = 1), (e = Hr(null, e, a, t, l)))
              : ((e.tag = 0), (e = ef(null, e, a, t, l)));
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === Q)) {
                (e.tag = 11), (e = Or(null, e, a, t, l));
                break t;
              } else if (n === nt) {
                (e.tag = 14), (e = Rr(null, e, a, t, l));
                break t;
              }
            }
            throw ((e = P(a) || a), Error(c(306, e, "")));
          }
        }
        return e;
      case 0:
        return ef(t, e, e.type, e.pendingProps, l);
      case 1:
        return (a = e.type), (n = Ul(a, e.pendingProps)), Hr(t, e, a, n, l);
      case 3:
        t: {
          if ((xt(e, e.stateNode.containerInfo), t === null))
            throw Error(c(387));
          a = e.pendingProps;
          var f = e.memoizedState;
          (n = f.element), Uu(t, e), Va(e, a, null, l);
          var r = e.memoizedState;
          if (
            ((a = r.cache),
            We(e, Yt, a),
            a !== f.cache && Tu(e, [Yt], l, !0),
            Za(),
            (a = r.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: a, isDehydrated: !1, cache: r.cache }),
              (e.updateQueue.baseState = f),
              (e.memoizedState = f),
              e.flags & 256)
            ) {
              e = qr(t, e, a, l);
              break t;
            } else if (a !== n) {
              (n = oe(Error(c(424)), e)), Ca(n), (e = qr(t, e, a, l));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Dt = Ae(t.firstChild),
                  Wt = e,
                  gt = !0,
                  Tl = null,
                  Me = !0,
                  l = mr(e, null, a, l),
                  e.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((qa(), a === n)) {
              e = Xe(t, e, l);
              break t;
            }
            Zt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          sn(t, e),
          t === null
            ? (l = Zh(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : gt ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = _n(tt.current).createElement(l)),
                (a[Kt] = e),
                (a[$t] = t),
                wt(a, l, t),
                Gt(a),
                (e.stateNode = a))
            : (e.memoizedState = Zh(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          Yn(e),
          t === null &&
            gt &&
            ((a = e.stateNode = Lh(e.type, e.pendingProps, tt.current)),
            (Wt = e),
            (Me = !0),
            (n = Dt),
            rl(e.type) ? ((Zf = n), (Dt = Ae(a.firstChild))) : (Dt = n)),
          Zt(t, e, e.pendingProps.children, l),
          sn(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            gt &&
            ((n = a = Dt) &&
              ((a = Bd(a, e.type, e.pendingProps, Me)),
              a !== null
                ? ((e.stateNode = a),
                  (Wt = e),
                  (Dt = Ae(a.firstChild)),
                  (Me = !1),
                  (n = !0))
                : (n = !1)),
            n || xl(e)),
          Yn(e),
          (n = e.type),
          (f = e.pendingProps),
          (r = t !== null ? t.memoizedProps : null),
          (a = f.children),
          Gf(n, f) ? (a = null) : r !== null && Gf(n, r) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((n = Yu(t, e, k0, null, null, l)), (di._currentValue = n)),
          sn(t, e),
          Zt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            gt &&
            ((t = l = Dt) &&
              ((l = Hd(l, e.pendingProps, Me)),
              l !== null
                ? ((e.stateNode = l), (Wt = e), (Dt = null), (t = !0))
                : (t = !1)),
            t || xl(e)),
          null
        );
      case 13:
        return Cr(t, e, l);
      case 4:
        return (
          xt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = ua(e, null, a, l)) : Zt(t, e, a, l),
          e.child
        );
      case 11:
        return Or(t, e, e.type, e.pendingProps, l);
      case 7:
        return Zt(t, e, e.pendingProps, l), e.child;
      case 8:
        return Zt(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return Zt(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          We(e, e.type, a.value),
          Zt(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (n = e.type._context),
          (a = e.pendingProps.children),
          Ol(e),
          (n = Jt(n)),
          (a = a(n)),
          (e.flags |= 1),
          Zt(t, e, a, l),
          e.child
        );
      case 14:
        return Rr(t, e, e.type, e.pendingProps, l);
      case 15:
        return Dr(t, e, e.type, e.pendingProps, l);
      case 19:
        return Xr(t, e, l);
      case 31:
        return (
          (a = e.pendingProps),
          (l = e.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((l = cn(a, l)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l))
            : ((l = Ue(t.child, a)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l)),
          e
        );
      case 22:
        return Ur(t, e, l);
      case 24:
        return (
          Ol(e),
          (a = Jt(Yt)),
          t === null
            ? ((n = Ou()),
              n === null &&
                ((n = Mt),
                (f = xu()),
                (n.pooledCache = f),
                f.refCount++,
                f !== null && (n.pooledCacheLanes |= l),
                (n = f)),
              (e.memoizedState = { parent: a, cache: n }),
              Du(e),
              We(e, Yt, n))
            : ((t.lanes & l) !== 0 && (Uu(t, e), Va(e, null, null, l), Za()),
              (n = t.memoizedState),
              (f = e.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (e.memoizedState = n),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = n),
                  We(e, Yt, a))
                : ((a = f.cache),
                  We(e, Yt, a),
                  a !== n.cache && Tu(e, [Yt], l, !0))),
          Zt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(c(156, e.tag));
  }
  function Ge(t) {
    t.flags |= 4;
  }
  function Lr(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Fh(e))) {
      if (
        ((e = me.current),
        e !== null &&
          ((ct & 4194048) === ct
            ? Te !== null
            : ((ct & 62914560) !== ct && (ct & 536870912) === 0) || e !== Te))
      )
        throw ((ja = Ru), _c);
      t.flags |= 8192;
    }
  }
  function rn(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Ss() : 536870912), (t.lanes |= e), (ra |= e));
  }
  function ka(t, e) {
    if (!gt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), (e = e.sibling);
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ot(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = t),
          (n = n.sibling);
    else
      for (n = t.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = t),
          (n = n.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = l), e;
  }
  function ud(t, e, l) {
    var a = e.pendingProps;
    switch ((Eu(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ot(e), null;
      case 1:
        return Ot(e), null;
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          qe(Yt),
          we(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ha(e)
              ? Ge(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Sc())),
          Ot(e),
          null
        );
      case 26:
        return (
          (l = e.memoizedState),
          t === null
            ? (Ge(e),
              l !== null ? (Ot(e), Lr(e, l)) : (Ot(e), (e.flags &= -16777217)))
            : l
            ? l !== t.memoizedState
              ? (Ge(e), Ot(e), Lr(e, l))
              : (Ot(e), (e.flags &= -16777217))
            : (t.memoizedProps !== a && Ge(e), Ot(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        bi(e), (l = tt.current);
        var n = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && Ge(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(c(166));
            return Ot(e), null;
          }
          (t = F.current),
            Ha(e) ? vc(e) : ((t = Lh(n, a, l)), (e.stateNode = t), Ge(e));
        }
        return Ot(e), null;
      case 5:
        if ((bi(e), (l = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && Ge(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(c(166));
            return Ot(e), null;
          }
          if (((t = F.current), Ha(e))) vc(e);
          else {
            switch (((n = _n(tt.current)), t)) {
              case 1:
                t = n.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                t = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    t = n.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    t = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    (t = n.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof a.is == "string"
                        ? n.createElement("select", { is: a.is })
                        : n.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size);
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? n.createElement(l, { is: a.is })
                        : n.createElement(l);
                }
            }
            (t[Kt] = e), (t[$t] = a);
            t: for (n = e.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === e) break t;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === e) break t;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
            e.stateNode = t;
            t: switch ((wt(t, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Ge(e);
          }
        }
        return Ot(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && Ge(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(c(166));
          if (((t = tt.current), Ha(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (n = Wt),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (t[Kt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Bh(t.nodeValue, l)
              )),
              t || xl(e);
          } else (t = _n(t).createTextNode(a)), (t[Kt] = e), (e.stateNode = t);
        }
        return Ot(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((n = Ha(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!n) throw Error(c(318));
              if (
                ((n = e.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(c(317));
              n[Kt] = e;
            } else
              qa(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Ot(e), (n = !1);
          } else
            (n = Sc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return e.flags & 256 ? (Ye(e), e) : (Ye(e), null);
        }
        if ((Ye(e), (e.flags & 128) !== 0)) return (e.lanes = l), e;
        if (
          ((l = a !== null), (t = t !== null && t.memoizedState !== null), l)
        ) {
          (a = e.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool);
          var f = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (f = a.memoizedState.cachePool.pool),
            f !== n && (a.flags |= 2048);
        }
        return (
          l !== t && l && (e.child.flags |= 8192),
          rn(e, e.updateQueue),
          Ot(e),
          null
        );
      case 4:
        return we(), t === null && Hf(e.stateNode.containerInfo), Ot(e), null;
      case 10:
        return qe(e.type), Ot(e), null;
      case 19:
        if ((Z(Xt), (n = e.memoizedState), n === null)) return Ot(e), null;
        if (((a = (e.flags & 128) !== 0), (f = n.rendering), f === null))
          if (a) ka(n, !1);
          else {
            if (Ut !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((f = nn(t)), f !== null)) {
                  for (
                    e.flags |= 128,
                      ka(n, !1),
                      t = f.updateQueue,
                      e.updateQueue = t,
                      rn(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;

                  )
                    gc(l, t), (l = l.sibling);
                  return L(Xt, (Xt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null &&
              _e() > on &&
              ((e.flags |= 128), (a = !0), ka(n, !1), (e.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = nn(f)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                rn(e, t),
                ka(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !f.alternate &&
                  !gt)
              )
                return Ot(e), null;
            } else
              2 * _e() - n.renderingStartTime > on &&
                l !== 536870912 &&
                ((e.flags |= 128), (a = !0), ka(n, !1), (e.lanes = 4194304));
          n.isBackwards
            ? ((f.sibling = e.child), (e.child = f))
            : ((t = n.last),
              t !== null ? (t.sibling = f) : (e.child = f),
              (n.last = f));
        }
        return n.tail !== null
          ? ((e = n.tail),
            (n.rendering = e),
            (n.tail = e.sibling),
            (n.renderingStartTime = _e()),
            (e.sibling = null),
            (t = Xt.current),
            L(Xt, a ? (t & 1) | 2 : t & 1),
            e)
          : (Ot(e), null);
      case 22:
      case 23:
        return (
          Ye(e),
          qu(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Ot(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Ot(e),
          (l = e.updateQueue),
          l !== null && rn(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && Z(Rl),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          qe(Yt),
          Ot(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, e.tag));
  }
  function fd(t, e) {
    switch ((Eu(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          qe(Yt),
          we(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return bi(e), null;
      case 13:
        if (
          (Ye(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(c(340));
          qa();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return Z(Xt), null;
      case 4:
        return we(), null;
      case 10:
        return qe(e.type), null;
      case 22:
      case 23:
        return (
          Ye(e),
          qu(),
          t !== null && Z(Rl),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return qe(Yt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jr(t, e) {
    switch ((Eu(e), e.tag)) {
      case 3:
        qe(Yt), we();
        break;
      case 26:
      case 27:
      case 5:
        bi(e);
        break;
      case 4:
        we();
        break;
      case 13:
        Ye(e);
        break;
      case 19:
        Z(Xt);
        break;
      case 10:
        qe(e.type);
        break;
      case 22:
      case 23:
        Ye(e), qu(), t !== null && Z(Rl);
        break;
      case 24:
        qe(Yt);
    }
  }
  function Ia(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var f = l.create,
              r = l.inst;
            (a = f()), (r.destroy = a);
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (d) {
      _t(e, e.return, d);
    }
  }
  function ll(t, e, l) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var f = n.next;
        a = f;
        do {
          if ((a.tag & t) === t) {
            var r = a.inst,
              d = r.destroy;
            if (d !== void 0) {
              (r.destroy = void 0), (n = e);
              var S = l,
                M = d;
              try {
                M();
              } catch (R) {
                _t(n, S, R);
              }
            }
          }
          a = a.next;
        } while (a !== f);
      }
    } catch (R) {
      _t(e, e.return, R);
    }
  }
  function Qr(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Rc(e, l);
      } catch (a) {
        _t(t, t.return, a);
      }
    }
  }
  function Zr(t, e, l) {
    (l.props = Ul(t.type, t.memoizedProps)), (l.state = t.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      _t(t, e, a);
    }
  }
  function Pa(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      _t(t, e, n);
    }
  }
  function xe(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          _t(t, e, n);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          _t(t, e, n);
        }
      else l.current = null;
  }
  function Vr(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      _t(t, t.return, n);
    }
  }
  function rf(t, e, l) {
    try {
      var a = t.stateNode;
      Od(a, t.type, l, e), (a[$t] = e);
    } catch (n) {
      _t(t, t.return, n);
    }
  }
  function wr(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && rl(t.type)) ||
      t.tag === 4
    );
  }
  function hf(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || wr(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && rl(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function df(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = An));
    else if (
      a !== 4 &&
      (a === 27 && rl(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (df(t, e, l), t = t.sibling; t !== null; )
        df(t, e, l), (t = t.sibling);
  }
  function hn(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && rl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (hn(t, e, l), t = t.sibling; t !== null; )
        hn(t, e, l), (t = t.sibling);
  }
  function Kr(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      wt(e, a, l), (e[Kt] = t), (e[$t] = l);
    } catch (f) {
      _t(t, t.return, f);
    }
  }
  var Le = !1,
    Bt = !1,
    of = !1,
    Jr = typeof WeakSet == "function" ? WeakSet : Set,
    jt = null;
  function sd(t, e) {
    if (((t = t.containerInfo), (Yf = Rn), (t = ic(t)), ru(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              f = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, f.nodeType;
            } catch {
              l = null;
              break t;
            }
            var r = 0,
              d = -1,
              S = -1,
              M = 0,
              R = 0,
              H = t,
              T = null;
            e: for (;;) {
              for (
                var x;
                H !== l || (n !== 0 && H.nodeType !== 3) || (d = r + n),
                  H !== f || (a !== 0 && H.nodeType !== 3) || (S = r + a),
                  H.nodeType === 3 && (r += H.nodeValue.length),
                  (x = H.firstChild) !== null;

              )
                (T = H), (H = x);
              for (;;) {
                if (H === t) break e;
                if (
                  (T === l && ++M === n && (d = r),
                  T === f && ++R === a && (S = r),
                  (x = H.nextSibling) !== null)
                )
                  break;
                (H = T), (T = H.parentNode);
              }
              H = x;
            }
            l = d === -1 || S === -1 ? null : { start: d, end: S };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Xf = { focusedElem: t, selectionRange: l }, Rn = !1, jt = e;
      jt !== null;

    )
      if (
        ((e = jt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (jt = t);
      else
        for (; jt !== null; ) {
          switch (((e = jt), (f = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && f !== null) {
                (t = void 0),
                  (l = e),
                  (n = f.memoizedProps),
                  (f = f.memoizedState),
                  (a = l.stateNode);
                try {
                  var I = Ul(l.type, n, l.elementType === l.type);
                  (t = a.getSnapshotBeforeUpdate(I, f)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (W) {
                  _t(l, l.return, W);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  jf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      jf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(c(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (jt = t);
            break;
          }
          jt = e.return;
        }
  }
  function Fr(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        al(t, l), a & 4 && Ia(5, l);
        break;
      case 1:
        if ((al(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (r) {
              _t(l, l.return, r);
            }
          else {
            var n = Ul(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (r) {
              _t(l, l.return, r);
            }
          }
        a & 64 && Qr(l), a & 512 && Pa(l, l.return);
        break;
      case 3:
        if ((al(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            Rc(t, e);
          } catch (r) {
            _t(l, l.return, r);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Kr(l);
      case 26:
      case 5:
        al(t, l), e === null && a & 4 && Vr(l), a & 512 && Pa(l, l.return);
        break;
      case 12:
        al(t, l);
        break;
      case 13:
        al(t, l),
          a & 4 && kr(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = md.bind(null, l)), qd(t, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Le), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Bt), (n = Le);
          var f = Bt;
          (Le = a),
            (Bt = e) && !f ? il(t, l, (l.subtreeFlags & 8772) !== 0) : al(t, l),
            (Le = n),
            (Bt = f);
        }
        break;
      case 30:
        break;
      default:
        al(t, l);
    }
  }
  function Wr(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Wr(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && wn(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var zt = null,
    Pt = !1;
  function je(t, e, l) {
    for (l = l.child; l !== null; ) $r(t, e, l), (l = l.sibling);
  }
  function $r(t, e, l) {
    if (le && typeof le.onCommitFiberUnmount == "function")
      try {
        le.onCommitFiberUnmount(ba, l);
      } catch {}
    switch (l.tag) {
      case 26:
        Bt || xe(l, e),
          je(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        Bt || xe(l, e);
        var a = zt,
          n = Pt;
        rl(l.type) && ((zt = l.stateNode), (Pt = !1)),
          je(t, e, l),
          si(l.stateNode),
          (zt = a),
          (Pt = n);
        break;
      case 5:
        Bt || xe(l, e);
      case 6:
        if (
          ((a = zt),
          (n = Pt),
          (zt = null),
          je(t, e, l),
          (zt = a),
          (Pt = n),
          zt !== null)
        )
          if (Pt)
            try {
              (zt.nodeType === 9
                ? zt.body
                : zt.nodeName === "HTML"
                ? zt.ownerDocument.body
                : zt
              ).removeChild(l.stateNode);
            } catch (f) {
              _t(l, e, f);
            }
          else
            try {
              zt.removeChild(l.stateNode);
            } catch (f) {
              _t(l, e, f);
            }
        break;
      case 18:
        zt !== null &&
          (Pt
            ? ((t = zt),
              Xh(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                l.stateNode
              ),
              vi(t))
            : Xh(zt, l.stateNode));
        break;
      case 4:
        (a = zt),
          (n = Pt),
          (zt = l.stateNode.containerInfo),
          (Pt = !0),
          je(t, e, l),
          (zt = a),
          (Pt = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Bt || ll(2, l, e), Bt || ll(4, l, e), je(t, e, l);
        break;
      case 1:
        Bt ||
          (xe(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && Zr(l, e, a)),
          je(t, e, l);
        break;
      case 21:
        je(t, e, l);
        break;
      case 22:
        (Bt = (a = Bt) || l.memoizedState !== null), je(t, e, l), (Bt = a);
        break;
      default:
        je(t, e, l);
    }
  }
  function kr(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        vi(t);
      } catch (l) {
        _t(e, e.return, l);
      }
  }
  function cd(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Jr()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Jr()),
          e
        );
      default:
        throw Error(c(435, t.tag));
    }
  }
  function gf(t, e) {
    var l = cd(t);
    e.forEach(function (a) {
      var n = Sd.bind(null, t, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function ue(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          f = t,
          r = e,
          d = r;
        t: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (rl(d.type)) {
                (zt = d.stateNode), (Pt = !1);
                break t;
              }
              break;
            case 5:
              (zt = d.stateNode), (Pt = !1);
              break t;
            case 3:
            case 4:
              (zt = d.stateNode.containerInfo), (Pt = !0);
              break t;
          }
          d = d.return;
        }
        if (zt === null) throw Error(c(160));
        $r(f, r, n),
          (zt = null),
          (Pt = !1),
          (f = n.alternate),
          f !== null && (f.return = null),
          (n.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) Ir(e, t), (e = e.sibling);
  }
  var Ee = null;
  function Ir(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ue(e, t),
          fe(t),
          a & 4 && (ll(3, t, t.return), Ia(3, t), ll(5, t, t.return));
        break;
      case 1:
        ue(e, t),
          fe(t),
          a & 512 && (Bt || l === null || xe(l, l.return)),
          a & 64 &&
            Le &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var n = Ee;
        if (
          (ue(e, t),
          fe(t),
          a & 512 && (Bt || l === null || xe(l, l.return)),
          a & 4)
        ) {
          var f = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (l = t.memoizedProps),
                    (n = n.ownerDocument || n);
                  e: switch (a) {
                    case "title":
                      (f = n.getElementsByTagName("title")[0]),
                        (!f ||
                          f[_a] ||
                          f[Kt] ||
                          f.namespaceURI === "http://www.w3.org/2000/svg" ||
                          f.hasAttribute("itemprop")) &&
                          ((f = n.createElement(a)),
                          n.head.insertBefore(
                            f,
                            n.querySelector("head > title")
                          )),
                        wt(f, a, l),
                        (f[Kt] = t),
                        Gt(f),
                        (a = f);
                      break t;
                    case "link":
                      var r = Kh("link", "href", n).get(a + (l.href || ""));
                      if (r) {
                        for (var d = 0; d < r.length; d++)
                          if (
                            ((f = r[d]),
                            f.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              f.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              f.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              f.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            r.splice(d, 1);
                            break e;
                          }
                      }
                      (f = n.createElement(a)),
                        wt(f, a, l),
                        n.head.appendChild(f);
                      break;
                    case "meta":
                      if (
                        (r = Kh("meta", "content", n).get(
                          a + (l.content || "")
                        ))
                      ) {
                        for (d = 0; d < r.length; d++)
                          if (
                            ((f = r[d]),
                            f.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              f.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              f.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              f.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              f.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            r.splice(d, 1);
                            break e;
                          }
                      }
                      (f = n.createElement(a)),
                        wt(f, a, l),
                        n.head.appendChild(f);
                      break;
                    default:
                      throw Error(c(468, a));
                  }
                  (f[Kt] = t), Gt(f), (a = f);
                }
                t.stateNode = a;
              } else Jh(n, t.type, t.stateNode);
            else t.stateNode = wh(n, a, t.memoizedProps);
          else
            f !== a
              ? (f === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : f.count--,
                a === null
                  ? Jh(n, t.type, t.stateNode)
                  : wh(n, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                rf(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        ue(e, t),
          fe(t),
          a & 512 && (Bt || l === null || xe(l, l.return)),
          l !== null && a & 4 && rf(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (ue(e, t),
          fe(t),
          a & 512 && (Bt || l === null || xe(l, l.return)),
          t.flags & 32)
        ) {
          n = t.stateNode;
          try {
            Ql(n, "");
          } catch (x) {
            _t(t, t.return, x);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((n = t.memoizedProps), rf(t, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (of = !0);
        break;
      case 6:
        if ((ue(e, t), fe(t), a & 4)) {
          if (t.stateNode === null) throw Error(c(162));
          (a = t.memoizedProps), (l = t.stateNode);
          try {
            l.nodeValue = a;
          } catch (x) {
            _t(t, t.return, x);
          }
        }
        break;
      case 3:
        if (
          ((xn = null),
          (n = Ee),
          (Ee = Mn(e.containerInfo)),
          ue(e, t),
          (Ee = n),
          fe(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            vi(e.containerInfo);
          } catch (x) {
            _t(t, t.return, x);
          }
        of && ((of = !1), Pr(t));
        break;
      case 4:
        (a = Ee),
          (Ee = Mn(t.stateNode.containerInfo)),
          ue(e, t),
          fe(t),
          (Ee = a);
        break;
      case 12:
        ue(e, t), fe(t);
        break;
      case 13:
        ue(e, t),
          fe(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (bf = _e()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), gf(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var S = l !== null && l.memoizedState !== null,
          M = Le,
          R = Bt;
        if (
          ((Le = M || n),
          (Bt = R || S),
          ue(e, t),
          (Bt = R),
          (Le = M),
          fe(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = n ? e._visibility & -2 : e._visibility | 1,
              n && (l === null || S || Le || Bt || Nl(t)),
              l = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                S = l = e;
                try {
                  if (((f = S.stateNode), n))
                    (r = f.style),
                      typeof r.setProperty == "function"
                        ? r.setProperty("display", "none", "important")
                        : (r.display = "none");
                  else {
                    d = S.stateNode;
                    var H = S.memoizedProps.style,
                      T =
                        H != null && H.hasOwnProperty("display")
                          ? H.display
                          : null;
                    d.style.display =
                      T == null || typeof T == "boolean" ? "" : ("" + T).trim();
                  }
                } catch (x) {
                  _t(S, S.return, x);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                S = e;
                try {
                  S.stateNode.nodeValue = n ? "" : S.memoizedProps;
                } catch (x) {
                  _t(S, S.return, x);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), (e = e.return);
            }
            l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), gf(t, l))));
        break;
      case 19:
        ue(e, t),
          fe(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), gf(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ue(e, t), fe(t);
    }
  }
  function fe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (wr(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(c(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              f = hf(t);
            hn(t, f, n);
            break;
          case 5:
            var r = l.stateNode;
            l.flags & 32 && (Ql(r, ""), (l.flags &= -33));
            var d = hf(t);
            hn(t, d, r);
            break;
          case 3:
          case 4:
            var S = l.stateNode.containerInfo,
              M = hf(t);
            df(t, M, S);
            break;
          default:
            throw Error(c(161));
        }
      } catch (R) {
        _t(t, t.return, R);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Pr(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Pr(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function al(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Fr(t, e.alternate, e), (e = e.sibling);
  }
  function Nl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ll(4, e, e.return), Nl(e);
          break;
        case 1:
          xe(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Zr(e, e.return, l),
            Nl(e);
          break;
        case 27:
          si(e.stateNode);
        case 26:
        case 5:
          xe(e, e.return), Nl(e);
          break;
        case 22:
          e.memoizedState === null && Nl(e);
          break;
        case 30:
          Nl(e);
          break;
        default:
          Nl(e);
      }
      t = t.sibling;
    }
  }
  function il(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        n = t,
        f = e,
        r = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          il(n, f, l), Ia(4, f);
          break;
        case 1:
          if (
            (il(n, f, l),
            (a = f),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (M) {
              _t(a, a.return, M);
            }
          if (((a = f), (n = a.updateQueue), n !== null)) {
            var d = a.stateNode;
            try {
              var S = n.shared.hiddenCallbacks;
              if (S !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < S.length; n++)
                  Oc(S[n], d);
            } catch (M) {
              _t(a, a.return, M);
            }
          }
          l && r & 64 && Qr(f), Pa(f, f.return);
          break;
        case 27:
          Kr(f);
        case 26:
        case 5:
          il(n, f, l), l && a === null && r & 4 && Vr(f), Pa(f, f.return);
          break;
        case 12:
          il(n, f, l);
          break;
        case 13:
          il(n, f, l), l && r & 4 && kr(n, f);
          break;
        case 22:
          f.memoizedState === null && il(n, f, l), Pa(f, f.return);
          break;
        case 30:
          break;
        default:
          il(n, f, l);
      }
      e = e.sibling;
    }
  }
  function yf(t, e) {
    var l = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && Xa(l));
  }
  function vf(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Xa(t));
  }
  function ze(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) th(t, e, l, a), (e = e.sibling);
  }
  function th(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ze(t, e, l, a), n & 2048 && Ia(9, e);
        break;
      case 1:
        ze(t, e, l, a);
        break;
      case 3:
        ze(t, e, l, a),
          n & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Xa(t)));
        break;
      case 12:
        if (n & 2048) {
          ze(t, e, l, a), (t = e.stateNode);
          try {
            var f = e.memoizedProps,
              r = f.id,
              d = f.onPostCommit;
            typeof d == "function" &&
              d(
                r,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (S) {
            _t(e, e.return, S);
          }
        } else ze(t, e, l, a);
        break;
      case 13:
        ze(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        (f = e.stateNode),
          (r = e.alternate),
          e.memoizedState !== null
            ? f._visibility & 2
              ? ze(t, e, l, a)
              : ti(t, e)
            : f._visibility & 2
            ? ze(t, e, l, a)
            : ((f._visibility |= 2),
              fa(t, e, l, a, (e.subtreeFlags & 10256) !== 0)),
          n & 2048 && yf(r, e);
        break;
      case 24:
        ze(t, e, l, a), n & 2048 && vf(e.alternate, e);
        break;
      default:
        ze(t, e, l, a);
    }
  }
  function fa(t, e, l, a, n) {
    for (n = n && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var f = t,
        r = e,
        d = l,
        S = a,
        M = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          fa(f, r, d, S, n), Ia(8, r);
          break;
        case 23:
          break;
        case 22:
          var R = r.stateNode;
          r.memoizedState !== null
            ? R._visibility & 2
              ? fa(f, r, d, S, n)
              : ti(f, r)
            : ((R._visibility |= 2), fa(f, r, d, S, n)),
            n && M & 2048 && yf(r.alternate, r);
          break;
        case 24:
          fa(f, r, d, S, n), n && M & 2048 && vf(r.alternate, r);
          break;
        default:
          fa(f, r, d, S, n);
      }
      e = e.sibling;
    }
  }
  function ti(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          n = a.flags;
        switch (a.tag) {
          case 22:
            ti(l, a), n & 2048 && yf(a.alternate, a);
            break;
          case 24:
            ti(l, a), n & 2048 && vf(a.alternate, a);
            break;
          default:
            ti(l, a);
        }
        e = e.sibling;
      }
  }
  var ei = 8192;
  function sa(t) {
    if (t.subtreeFlags & ei)
      for (t = t.child; t !== null; ) eh(t), (t = t.sibling);
  }
  function eh(t) {
    switch (t.tag) {
      case 26:
        sa(t),
          t.flags & ei &&
            t.memoizedState !== null &&
            Fd(Ee, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        sa(t);
        break;
      case 3:
      case 4:
        var e = Ee;
        (Ee = Mn(t.stateNode.containerInfo)), sa(t), (Ee = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = ei), (ei = 16777216), sa(t), (ei = e))
            : sa(t));
        break;
      default:
        sa(t);
    }
  }
  function lh(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function li(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (jt = a), ih(a, t);
        }
      lh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) ah(t), (t = t.sibling);
  }
  function ah(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        li(t), t.flags & 2048 && ll(9, t, t.return);
        break;
      case 3:
        li(t);
        break;
      case 12:
        li(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), dn(t))
          : li(t);
        break;
      default:
        li(t);
    }
  }
  function dn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (jt = a), ih(a, t);
        }
      lh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          ll(8, e, e.return), dn(e);
          break;
        case 22:
          (l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), dn(e));
          break;
        default:
          dn(e);
      }
      t = t.sibling;
    }
  }
  function ih(t, e) {
    for (; jt !== null; ) {
      var l = jt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ll(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Xa(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (jt = a);
      else
        t: for (l = t; jt !== null; ) {
          a = jt;
          var n = a.sibling,
            f = a.return;
          if ((Wr(a), a === l)) {
            jt = null;
            break t;
          }
          if (n !== null) {
            (n.return = f), (jt = n);
            break t;
          }
          jt = f;
        }
    }
  }
  var rd = {
      getCacheForType: function (t) {
        var e = Jt(Yt),
          l = e.data.get(t);
        return l === void 0 && ((l = t()), e.data.set(t, l)), l;
      },
    },
    hd = typeof WeakMap == "function" ? WeakMap : Map,
    vt = 0,
    Mt = null,
    ut = null,
    ct = 0,
    mt = 0,
    se = null,
    nl = !1,
    ca = !1,
    mf = !1,
    Qe = 0,
    Ut = 0,
    ul = 0,
    Bl = 0,
    Sf = 0,
    Se = 0,
    ra = 0,
    ai = null,
    te = null,
    pf = !1,
    bf = 0,
    on = 1 / 0,
    gn = null,
    fl = null,
    Vt = 0,
    sl = null,
    ha = null,
    da = 0,
    Ef = 0,
    Af = null,
    nh = null,
    ii = 0,
    _f = null;
  function ce() {
    if ((vt & 2) !== 0 && ct !== 0) return ct & -ct;
    if (U.T !== null) {
      var t = Pl;
      return t !== 0 ? t : Df();
    }
    return Es();
  }
  function uh() {
    Se === 0 && (Se = (ct & 536870912) === 0 || gt ? ms() : 536870912);
    var t = me.current;
    return t !== null && (t.flags |= 32), Se;
  }
  function re(t, e, l) {
    ((t === Mt && (mt === 2 || mt === 9)) || t.cancelPendingCommit !== null) &&
      (oa(t, 0), cl(t, ct, Se, !1)),
      Aa(t, l),
      ((vt & 2) === 0 || t !== Mt) &&
        (t === Mt &&
          ((vt & 2) === 0 && (Bl |= l), Ut === 4 && cl(t, ct, Se, !1)),
        Oe(t));
  }
  function fh(t, e, l) {
    if ((vt & 6) !== 0) throw Error(c(327));
    var a = (!l && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Ea(t, e),
      n = a ? gd(t, e) : xf(t, e, !0),
      f = a;
    do {
      if (n === 0) {
        ca && !a && cl(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), f && !dd(l))) {
          (n = xf(t, e, !1)), (f = !1);
          continue;
        }
        if (n === 2) {
          if (((f = e), t.errorRecoveryDisabledLanes & f)) var r = 0;
          else
            (r = t.pendingLanes & -536870913),
              (r = r !== 0 ? r : r & 536870912 ? 536870912 : 0);
          if (r !== 0) {
            e = r;
            t: {
              var d = t;
              n = ai;
              var S = d.current.memoizedState.isDehydrated;
              if ((S && (oa(d, r).flags |= 256), (r = xf(d, r, !1)), r !== 2)) {
                if (mf && !S) {
                  (d.errorRecoveryDisabledLanes |= f), (Bl |= f), (n = 4);
                  break t;
                }
                (f = te),
                  (te = n),
                  f !== null && (te === null ? (te = f) : te.push.apply(te, f));
              }
              n = r;
            }
            if (((f = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          oa(t, 0), cl(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (f = n), f)) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              cl(a, e, Se, !nl);
              break t;
            case 2:
              te = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((e & 62914560) === e && ((n = bf + 300 - _e()), 10 < n)) {
            if ((cl(a, e, Se, !nl), Mi(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = Ch(
              sh.bind(null, a, l, te, gn, pf, e, Se, Bl, ra, nl, f, 2, -0, 0),
              n
            );
            break t;
          }
          sh(a, l, te, gn, pf, e, Se, Bl, ra, nl, f, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Oe(t);
  }
  function sh(t, e, l, a, n, f, r, d, S, M, R, H, T, x) {
    if (
      ((t.timeoutHandle = -1),
      (H = e.subtreeFlags),
      (H & 8192 || (H & 16785408) === 16785408) &&
        ((hi = { stylesheets: null, count: 0, unsuspend: Jd }),
        eh(e),
        (H = Wd()),
        H !== null))
    ) {
      (t.cancelPendingCommit = H(
        yh.bind(null, t, e, f, l, a, n, r, d, S, R, 1, T, x)
      )),
        cl(t, f, r, !M);
      return;
    }
    yh(t, e, f, l, a, n, r, d, S);
  }
  function dd(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            f = n.getSnapshot;
          n = n.value;
          try {
            if (!ie(f(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        (l.return = e), (e = l);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function cl(t, e, l, a) {
    (e &= ~Sf),
      (e &= ~Bl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var n = e; 0 < n; ) {
      var f = 31 - ae(n),
        r = 1 << f;
      (a[f] = -1), (n &= ~r);
    }
    l !== 0 && ps(t, l, e);
  }
  function yn() {
    return (vt & 6) === 0 ? (ni(0), !1) : !0;
  }
  function Mf() {
    if (ut !== null) {
      if (mt === 0) var t = ut.return;
      else (t = ut), (He = zl = null), Lu(t), (na = null), (Wa = 0), (t = ut);
      for (; t !== null; ) jr(t.alternate, t), (t = t.return);
      ut = null;
    }
  }
  function oa(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && ((t.timeoutHandle = -1), Dd(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      Mf(),
      (Mt = t),
      (ut = l = Ue(t.current, null)),
      (ct = e),
      (mt = 0),
      (se = null),
      (nl = !1),
      (ca = Ea(t, e)),
      (mf = !1),
      (ra = Se = Sf = Bl = ul = Ut = 0),
      (te = ai = null),
      (pf = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ae(a),
          f = 1 << n;
        (e |= t[n]), (a &= ~f);
      }
    return (Qe = e), Ci(), l;
  }
  function ch(t, e) {
    (at = null),
      (U.H = en),
      e === La || e === wi
        ? ((e = xc()), (mt = 3))
        : e === _c
        ? ((e = xc()), (mt = 4))
        : (mt =
            e === zr
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (se = e),
      ut === null && ((Ut = 1), fn(t, oe(e, t.current)));
  }
  function rh() {
    var t = U.H;
    return (U.H = en), t === null ? en : t;
  }
  function hh() {
    var t = U.A;
    return (U.A = rd), t;
  }
  function Tf() {
    (Ut = 4),
      nl || ((ct & 4194048) !== ct && me.current !== null) || (ca = !0),
      ((ul & 134217727) === 0 && (Bl & 134217727) === 0) ||
        Mt === null ||
        cl(Mt, ct, Se, !1);
  }
  function xf(t, e, l) {
    var a = vt;
    vt |= 2;
    var n = rh(),
      f = hh();
    (Mt !== t || ct !== e) && ((gn = null), oa(t, e)), (e = !1);
    var r = Ut;
    t: do
      try {
        if (mt !== 0 && ut !== null) {
          var d = ut,
            S = se;
          switch (mt) {
            case 8:
              Mf(), (r = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              me.current === null && (e = !0);
              var M = mt;
              if (((mt = 0), (se = null), ga(t, d, S, M), l && ca)) {
                r = 0;
                break t;
              }
              break;
            default:
              (M = mt), (mt = 0), (se = null), ga(t, d, S, M);
          }
        }
        od(), (r = Ut);
        break;
      } catch (R) {
        ch(t, R);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (He = zl = null),
      (vt = a),
      (U.H = n),
      (U.A = f),
      ut === null && ((Mt = null), (ct = 0), Ci()),
      r
    );
  }
  function od() {
    for (; ut !== null; ) dh(ut);
  }
  function gd(t, e) {
    var l = vt;
    vt |= 2;
    var a = rh(),
      n = hh();
    Mt !== t || ct !== e
      ? ((gn = null), (on = _e() + 500), oa(t, e))
      : (ca = Ea(t, e));
    t: do
      try {
        if (mt !== 0 && ut !== null) {
          e = ut;
          var f = se;
          e: switch (mt) {
            case 1:
              (mt = 0), (se = null), ga(t, e, f, 1);
              break;
            case 2:
            case 9:
              if (Mc(f)) {
                (mt = 0), (se = null), oh(e);
                break;
              }
              (e = function () {
                (mt !== 2 && mt !== 9) || Mt !== t || (mt = 7), Oe(t);
              }),
                f.then(e, e);
              break t;
            case 3:
              mt = 7;
              break t;
            case 4:
              mt = 5;
              break t;
            case 7:
              Mc(f)
                ? ((mt = 0), (se = null), oh(e))
                : ((mt = 0), (se = null), ga(t, e, f, 7));
              break;
            case 5:
              var r = null;
              switch (ut.tag) {
                case 26:
                  r = ut.memoizedState;
                case 5:
                case 27:
                  var d = ut;
                  if (!r || Fh(r)) {
                    (mt = 0), (se = null);
                    var S = d.sibling;
                    if (S !== null) ut = S;
                    else {
                      var M = d.return;
                      M !== null ? ((ut = M), vn(M)) : (ut = null);
                    }
                    break e;
                  }
              }
              (mt = 0), (se = null), ga(t, e, f, 5);
              break;
            case 6:
              (mt = 0), (se = null), ga(t, e, f, 6);
              break;
            case 8:
              Mf(), (Ut = 6);
              break t;
            default:
              throw Error(c(462));
          }
        }
        yd();
        break;
      } catch (R) {
        ch(t, R);
      }
    while (!0);
    return (
      (He = zl = null),
      (U.H = a),
      (U.A = n),
      (vt = l),
      ut !== null ? 0 : ((Mt = null), (ct = 0), Ci(), Ut)
    );
  }
  function yd() {
    for (; ut !== null && !Y1(); ) dh(ut);
  }
  function dh(t) {
    var e = Gr(t.alternate, t, Qe);
    (t.memoizedProps = t.pendingProps), e === null ? vn(t) : (ut = e);
  }
  function oh(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Br(l, e, e.pendingProps, e.type, void 0, ct);
        break;
      case 11:
        e = Br(l, e, e.pendingProps, e.type.render, e.ref, ct);
        break;
      case 5:
        Lu(e);
      default:
        jr(l, e), (e = ut = gc(e, Qe)), (e = Gr(l, e, Qe));
    }
    (t.memoizedProps = t.pendingProps), e === null ? vn(t) : (ut = e);
  }
  function ga(t, e, l, a) {
    (He = zl = null), Lu(e), (na = null), (Wa = 0);
    var n = e.return;
    try {
      if (id(t, n, e, l, ct)) {
        (Ut = 1), fn(t, oe(l, t.current)), (ut = null);
        return;
      }
    } catch (f) {
      if (n !== null) throw ((ut = n), f);
      (Ut = 1), fn(t, oe(l, t.current)), (ut = null);
      return;
    }
    e.flags & 32768
      ? (gt || a === 1
          ? (t = !0)
          : ca || (ct & 536870912) !== 0
          ? (t = !1)
          : ((nl = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = me.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        gh(e, t))
      : vn(e);
  }
  function vn(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        gh(e, nl);
        return;
      }
      t = e.return;
      var l = ud(e.alternate, e, Qe);
      if (l !== null) {
        ut = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ut = e;
        return;
      }
      ut = e = t;
    } while (e !== null);
    Ut === 0 && (Ut = 5);
  }
  function gh(t, e) {
    do {
      var l = fd(t.alternate, t);
      if (l !== null) {
        (l.flags &= 32767), (ut = l);
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ut = t;
        return;
      }
      ut = t = l;
    } while (t !== null);
    (Ut = 6), (ut = null);
  }
  function yh(t, e, l, a, n, f, r, d, S) {
    t.cancelPendingCommit = null;
    do mn();
    while (Vt !== 0);
    if ((vt & 6) !== 0) throw Error(c(327));
    if (e !== null) {
      if (e === t.current) throw Error(c(177));
      if (
        ((f = e.lanes | e.childLanes),
        (f |= yu),
        J1(t, l, f, r, d, S),
        t === Mt && ((ut = Mt = null), (ct = 0)),
        (ha = e),
        (sl = t),
        (da = l),
        (Ef = f),
        (Af = n),
        (nh = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            pd(Ei, function () {
              return bh(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = U.T), (U.T = null), (n = j.p), (j.p = 2), (r = vt), (vt |= 4);
        try {
          sd(t, e, l);
        } finally {
          (vt = r), (j.p = n), (U.T = a);
        }
      }
      (Vt = 1), vh(), mh(), Sh();
    }
  }
  function vh() {
    if (Vt === 1) {
      Vt = 0;
      var t = sl,
        e = ha,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        (l = U.T), (U.T = null);
        var a = j.p;
        j.p = 2;
        var n = vt;
        vt |= 4;
        try {
          Ir(e, t);
          var f = Xf,
            r = ic(t.containerInfo),
            d = f.focusedElem,
            S = f.selectionRange;
          if (
            r !== d &&
            d &&
            d.ownerDocument &&
            ac(d.ownerDocument.documentElement, d)
          ) {
            if (S !== null && ru(d)) {
              var M = S.start,
                R = S.end;
              if ((R === void 0 && (R = M), "selectionStart" in d))
                (d.selectionStart = M),
                  (d.selectionEnd = Math.min(R, d.value.length));
              else {
                var H = d.ownerDocument || document,
                  T = (H && H.defaultView) || window;
                if (T.getSelection) {
                  var x = T.getSelection(),
                    I = d.textContent.length,
                    W = Math.min(S.start, I),
                    Et = S.end === void 0 ? W : Math.min(S.end, I);
                  !x.extend && W > Et && ((r = Et), (Et = W), (W = r));
                  var A = lc(d, W),
                    b = lc(d, Et);
                  if (
                    A &&
                    b &&
                    (x.rangeCount !== 1 ||
                      x.anchorNode !== A.node ||
                      x.anchorOffset !== A.offset ||
                      x.focusNode !== b.node ||
                      x.focusOffset !== b.offset)
                  ) {
                    var _ = H.createRange();
                    _.setStart(A.node, A.offset),
                      x.removeAllRanges(),
                      W > Et
                        ? (x.addRange(_), x.extend(b.node, b.offset))
                        : (_.setEnd(b.node, b.offset), x.addRange(_));
                  }
                }
              }
            }
            for (H = [], x = d; (x = x.parentNode); )
              x.nodeType === 1 &&
                H.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
            for (
              typeof d.focus == "function" && d.focus(), d = 0;
              d < H.length;
              d++
            ) {
              var N = H[d];
              (N.element.scrollLeft = N.left), (N.element.scrollTop = N.top);
            }
          }
          (Rn = !!Yf), (Xf = Yf = null);
        } finally {
          (vt = n), (j.p = a), (U.T = l);
        }
      }
      (t.current = e), (Vt = 2);
    }
  }
  function mh() {
    if (Vt === 2) {
      Vt = 0;
      var t = sl,
        e = ha,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        (l = U.T), (U.T = null);
        var a = j.p;
        j.p = 2;
        var n = vt;
        vt |= 4;
        try {
          Fr(t, e.alternate, e);
        } finally {
          (vt = n), (j.p = a), (U.T = l);
        }
      }
      Vt = 3;
    }
  }
  function Sh() {
    if (Vt === 4 || Vt === 3) {
      (Vt = 0), X1();
      var t = sl,
        e = ha,
        l = da,
        a = nh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Vt = 5)
        : ((Vt = 0), (ha = sl = null), ph(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (
        (n === 0 && (fl = null),
        Zn(l),
        (e = e.stateNode),
        le && typeof le.onCommitFiberRoot == "function")
      )
        try {
          le.onCommitFiberRoot(ba, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = U.T), (n = j.p), (j.p = 2), (U.T = null);
        try {
          for (var f = t.onRecoverableError, r = 0; r < a.length; r++) {
            var d = a[r];
            f(d.value, { componentStack: d.stack });
          }
        } finally {
          (U.T = e), (j.p = n);
        }
      }
      (da & 3) !== 0 && mn(),
        Oe(t),
        (n = t.pendingLanes),
        (l & 4194090) !== 0 && (n & 42) !== 0
          ? t === _f
            ? ii++
            : ((ii = 0), (_f = t))
          : (ii = 0),
        ni(0);
    }
  }
  function ph(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Xa(e)));
  }
  function mn(t) {
    return vh(), mh(), Sh(), bh();
  }
  function bh() {
    if (Vt !== 5) return !1;
    var t = sl,
      e = Ef;
    Ef = 0;
    var l = Zn(da),
      a = U.T,
      n = j.p;
    try {
      (j.p = 32 > l ? 32 : l), (U.T = null), (l = Af), (Af = null);
      var f = sl,
        r = da;
      if (((Vt = 0), (ha = sl = null), (da = 0), (vt & 6) !== 0))
        throw Error(c(331));
      var d = vt;
      if (
        ((vt |= 4),
        ah(f.current),
        th(f, f.current, r, l),
        (vt = d),
        ni(0, !1),
        le && typeof le.onPostCommitFiberRoot == "function")
      )
        try {
          le.onPostCommitFiberRoot(ba, f);
        } catch {}
      return !0;
    } finally {
      (j.p = n), (U.T = a), ph(t, e);
    }
  }
  function Eh(t, e, l) {
    (e = oe(l, e)),
      (e = tf(t.stateNode, e, 2)),
      (t = Ie(t, e, 2)),
      t !== null && (Aa(t, 2), Oe(t));
  }
  function _t(t, e, l) {
    if (t.tag === 3) Eh(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Eh(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (fl === null || !fl.has(a)))
          ) {
            (t = oe(l, t)),
              (l = Tr(2)),
              (a = Ie(e, l, 2)),
              a !== null && (xr(l, a, e, t), Aa(a, 2), Oe(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function zf(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new hd();
      var n = new Set();
      a.set(e, n);
    } else (n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n));
    n.has(l) ||
      ((mf = !0), n.add(l), (t = vd.bind(null, t, e, l)), e.then(t, t));
  }
  function vd(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      Mt === t &&
        (ct & l) === l &&
        (Ut === 4 || (Ut === 3 && (ct & 62914560) === ct && 300 > _e() - bf)
          ? (vt & 2) === 0 && oa(t, 0)
          : (Sf |= l),
        ra === ct && (ra = 0)),
      Oe(t);
  }
  function Ah(t, e) {
    e === 0 && (e = Ss()), (t = Wl(t, e)), t !== null && (Aa(t, e), Oe(t));
  }
  function md(t) {
    var e = t.memoizedState,
      l = 0;
    e !== null && (l = e.retryLane), Ah(t, l);
  }
  function Sd(t, e) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    a !== null && a.delete(e), Ah(t, l);
  }
  function pd(t, e) {
    return Gn(t, e);
  }
  var Sn = null,
    ya = null,
    Of = !1,
    pn = !1,
    Rf = !1,
    Hl = 0;
  function Oe(t) {
    t !== ya &&
      t.next === null &&
      (ya === null ? (Sn = ya = t) : (ya = ya.next = t)),
      (pn = !0),
      Of || ((Of = !0), Ed());
  }
  function ni(t, e) {
    if (!Rf && pn) {
      Rf = !0;
      do
        for (var l = !1, a = Sn; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var f = 0;
            else {
              var r = a.suspendedLanes,
                d = a.pingedLanes;
              (f = (1 << (31 - ae(42 | t) + 1)) - 1),
                (f &= n & ~(r & ~d)),
                (f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0);
            }
            f !== 0 && ((l = !0), xh(a, f));
          } else
            (f = ct),
              (f = Mi(
                a,
                a === Mt ? f : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (f & 3) === 0 || Ea(a, f) || ((l = !0), xh(a, f));
          a = a.next;
        }
      while (l);
      Rf = !1;
    }
  }
  function bd() {
    _h();
  }
  function _h() {
    pn = Of = !1;
    var t = 0;
    Hl !== 0 && (Rd() && (t = Hl), (Hl = 0));
    for (var e = _e(), l = null, a = Sn; a !== null; ) {
      var n = a.next,
        f = Mh(a, e);
      f === 0
        ? ((a.next = null),
          l === null ? (Sn = n) : (l.next = n),
          n === null && (ya = l))
        : ((l = a), (t !== 0 || (f & 3) !== 0) && (pn = !0)),
        (a = n);
    }
    ni(t);
  }
  function Mh(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        f = t.pendingLanes & -62914561;
      0 < f;

    ) {
      var r = 31 - ae(f),
        d = 1 << r,
        S = n[r];
      S === -1
        ? ((d & l) === 0 || (d & a) !== 0) && (n[r] = K1(d, e))
        : S <= e && (t.expiredLanes |= d),
        (f &= ~d);
    }
    if (
      ((e = Mt),
      (l = ct),
      (l = Mi(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (mt === 2 || mt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Ln(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Ea(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && Ln(a), Zn(l))) {
        case 2:
        case 8:
          l = ys;
          break;
        case 32:
          l = Ei;
          break;
        case 268435456:
          l = vs;
          break;
        default:
          l = Ei;
      }
      return (
        (a = Th.bind(null, t)),
        (l = Gn(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && Ln(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Th(t, e) {
    if (Vt !== 0 && Vt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var l = t.callbackNode;
    if (mn() && t.callbackNode !== l) return null;
    var a = ct;
    return (
      (a = Mi(
        t,
        t === Mt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (fh(t, a, e),
          Mh(t, _e()),
          t.callbackNode != null && t.callbackNode === l
            ? Th.bind(null, t)
            : null)
    );
  }
  function xh(t, e) {
    if (mn()) return null;
    fh(t, e, !0);
  }
  function Ed() {
    Ud(function () {
      (vt & 6) !== 0 ? Gn(gs, bd) : _h();
    });
  }
  function Df() {
    return Hl === 0 && (Hl = ms()), Hl;
  }
  function zh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Ri("" + t);
  }
  function Oh(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function Ad(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var f = zh((n[$t] || null).action),
        r = a.submitter;
      r &&
        ((e = (e = r[$t] || null)
          ? zh(e.formAction)
          : r.getAttribute("formAction")),
        e !== null && ((f = e), (r = null)));
      var d = new Bi("action", "action", null, a, n);
      t.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Hl !== 0) {
                  var S = r ? Oh(n, r) : new FormData(n);
                  Wu(
                    l,
                    { pending: !0, data: S, method: n.method, action: f },
                    null,
                    S
                  );
                }
              } else
                typeof f == "function" &&
                  (d.preventDefault(),
                  (S = r ? Oh(n, r) : new FormData(n)),
                  Wu(
                    l,
                    { pending: !0, data: S, method: n.method, action: f },
                    f,
                    S
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Uf = 0; Uf < gu.length; Uf++) {
    var Nf = gu[Uf],
      _d = Nf.toLowerCase(),
      Md = Nf[0].toUpperCase() + Nf.slice(1);
    be(_d, "on" + Md);
  }
  be(fc, "onAnimationEnd"),
    be(sc, "onAnimationIteration"),
    be(cc, "onAnimationStart"),
    be("dblclick", "onDoubleClick"),
    be("focusin", "onFocus"),
    be("focusout", "onBlur"),
    be(j0, "onTransitionRun"),
    be(Q0, "onTransitionStart"),
    be(Z0, "onTransitionCancel"),
    be(rc, "onTransitionEnd"),
    Gl("onMouseEnter", ["mouseout", "mouseover"]),
    Gl("onMouseLeave", ["mouseout", "mouseover"]),
    Gl("onPointerEnter", ["pointerout", "pointerover"]),
    Gl("onPointerLeave", ["pointerout", "pointerover"]),
    Sl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Sl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Sl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Sl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Sl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Sl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ui =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Td = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ui)
    );
  function Rh(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        n = a.event;
      a = a.listeners;
      t: {
        var f = void 0;
        if (e)
          for (var r = a.length - 1; 0 <= r; r--) {
            var d = a[r],
              S = d.instance,
              M = d.currentTarget;
            if (((d = d.listener), S !== f && n.isPropagationStopped()))
              break t;
            (f = d), (n.currentTarget = M);
            try {
              f(n);
            } catch (R) {
              un(R);
            }
            (n.currentTarget = null), (f = S);
          }
        else
          for (r = 0; r < a.length; r++) {
            if (
              ((d = a[r]),
              (S = d.instance),
              (M = d.currentTarget),
              (d = d.listener),
              S !== f && n.isPropagationStopped())
            )
              break t;
            (f = d), (n.currentTarget = M);
            try {
              f(n);
            } catch (R) {
              un(R);
            }
            (n.currentTarget = null), (f = S);
          }
      }
    }
  }
  function ft(t, e) {
    var l = e[Vn];
    l === void 0 && (l = e[Vn] = new Set());
    var a = t + "__bubble";
    l.has(a) || (Dh(e, t, 2, !1), l.add(a));
  }
  function Bf(t, e, l) {
    var a = 0;
    e && (a |= 4), Dh(l, t, a, e);
  }
  var bn = "_reactListening" + Math.random().toString(36).slice(2);
  function Hf(t) {
    if (!t[bn]) {
      (t[bn] = !0),
        _s.forEach(function (l) {
          l !== "selectionchange" && (Td.has(l) || Bf(l, !1, t), Bf(l, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[bn] || ((e[bn] = !0), Bf("selectionchange", !1, e));
    }
  }
  function Dh(t, e, l, a) {
    switch (t1(e)) {
      case 2:
        var n = Id;
        break;
      case 8:
        n = Pd;
        break;
      default:
        n = Ff;
    }
    (l = n.bind(null, e, l, t)),
      (n = void 0),
      !eu ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: n })
          : t.addEventListener(e, l, !0)
        : n !== void 0
        ? t.addEventListener(e, l, { passive: n })
        : t.addEventListener(e, l, !1);
  }
  function qf(t, e, l, a, n) {
    var f = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var r = a.tag;
        if (r === 3 || r === 4) {
          var d = a.stateNode.containerInfo;
          if (d === n) break;
          if (r === 4)
            for (r = a.return; r !== null; ) {
              var S = r.tag;
              if ((S === 3 || S === 4) && r.stateNode.containerInfo === n)
                return;
              r = r.return;
            }
          for (; d !== null; ) {
            if (((r = Cl(d)), r === null)) return;
            if (((S = r.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              a = f = r;
              continue t;
            }
            d = d.parentNode;
          }
        }
        a = a.return;
      }
    Ys(function () {
      var M = f,
        R = Pn(l),
        H = [];
      t: {
        var T = hc.get(t);
        if (T !== void 0) {
          var x = Bi,
            I = t;
          switch (t) {
            case "keypress":
              if (Ui(l) === 0) break t;
            case "keydown":
            case "keyup":
              x = p0;
              break;
            case "focusin":
              (I = "focus"), (x = nu);
              break;
            case "focusout":
              (I = "blur"), (x = nu);
              break;
            case "beforeblur":
            case "afterblur":
              x = nu;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              x = Ls;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = f0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = A0;
              break;
            case fc:
            case sc:
            case cc:
              x = r0;
              break;
            case rc:
              x = M0;
              break;
            case "scroll":
            case "scrollend":
              x = n0;
              break;
            case "wheel":
              x = x0;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = d0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = Qs;
              break;
            case "toggle":
            case "beforetoggle":
              x = O0;
          }
          var W = (e & 4) !== 0,
            Et = !W && (t === "scroll" || t === "scrollend"),
            A = W ? (T !== null ? T + "Capture" : null) : T;
          W = [];
          for (var b = M, _; b !== null; ) {
            var N = b;
            if (
              ((_ = N.stateNode),
              (N = N.tag),
              (N !== 5 && N !== 26 && N !== 27) ||
                _ === null ||
                A === null ||
                ((N = Ta(b, A)), N != null && W.push(fi(b, N, _))),
              Et)
            )
              break;
            b = b.return;
          }
          0 < W.length &&
            ((T = new x(T, I, null, l, R)), H.push({ event: T, listeners: W }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((T = t === "mouseover" || t === "pointerover"),
            (x = t === "mouseout" || t === "pointerout"),
            T &&
              l !== In &&
              (I = l.relatedTarget || l.fromElement) &&
              (Cl(I) || I[ql]))
          )
            break t;
          if (
            (x || T) &&
            ((T =
              R.window === R
                ? R
                : (T = R.ownerDocument)
                ? T.defaultView || T.parentWindow
                : window),
            x
              ? ((I = l.relatedTarget || l.toElement),
                (x = M),
                (I = I ? Cl(I) : null),
                I !== null &&
                  ((Et = o(I)),
                  (W = I.tag),
                  I !== Et || (W !== 5 && W !== 27 && W !== 6)) &&
                  (I = null))
              : ((x = null), (I = M)),
            x !== I)
          ) {
            if (
              ((W = Ls),
              (N = "onMouseLeave"),
              (A = "onMouseEnter"),
              (b = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((W = Qs),
                (N = "onPointerLeave"),
                (A = "onPointerEnter"),
                (b = "pointer")),
              (Et = x == null ? T : Ma(x)),
              (_ = I == null ? T : Ma(I)),
              (T = new W(N, b + "leave", x, l, R)),
              (T.target = Et),
              (T.relatedTarget = _),
              (N = null),
              Cl(R) === M &&
                ((W = new W(A, b + "enter", I, l, R)),
                (W.target = _),
                (W.relatedTarget = Et),
                (N = W)),
              (Et = N),
              x && I)
            )
              e: {
                for (W = x, A = I, b = 0, _ = W; _; _ = va(_)) b++;
                for (_ = 0, N = A; N; N = va(N)) _++;
                for (; 0 < b - _; ) (W = va(W)), b--;
                for (; 0 < _ - b; ) (A = va(A)), _--;
                for (; b--; ) {
                  if (W === A || (A !== null && W === A.alternate)) break e;
                  (W = va(W)), (A = va(A));
                }
                W = null;
              }
            else W = null;
            x !== null && Uh(H, T, x, W, !1),
              I !== null && Et !== null && Uh(H, Et, I, W, !0);
          }
        }
        t: {
          if (
            ((T = M ? Ma(M) : window),
            (x = T.nodeName && T.nodeName.toLowerCase()),
            x === "select" || (x === "input" && T.type === "file"))
          )
            var w = $s;
          else if (Fs(T))
            if (ks) w = X0;
            else {
              w = C0;
              var it = q0;
            }
          else
            (x = T.nodeName),
              !x ||
              x.toLowerCase() !== "input" ||
              (T.type !== "checkbox" && T.type !== "radio")
                ? M && kn(M.elementType) && (w = $s)
                : (w = Y0);
          if (w && (w = w(t, M))) {
            Ws(H, w, l, R);
            break t;
          }
          it && it(t, T, M),
            t === "focusout" &&
              M &&
              T.type === "number" &&
              M.memoizedProps.value != null &&
              $n(T, "number", T.value);
        }
        switch (((it = M ? Ma(M) : window), t)) {
          case "focusin":
            (Fs(it) || it.contentEditable === "true") &&
              ((Kl = it), (hu = M), (Ba = null));
            break;
          case "focusout":
            Ba = hu = Kl = null;
            break;
          case "mousedown":
            du = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (du = !1), nc(H, l, R);
            break;
          case "selectionchange":
            if (L0) break;
          case "keydown":
          case "keyup":
            nc(H, l, R);
        }
        var J;
        if (fu)
          t: {
            switch (t) {
              case "compositionstart":
                var $ = "onCompositionStart";
                break t;
              case "compositionend":
                $ = "onCompositionEnd";
                break t;
              case "compositionupdate":
                $ = "onCompositionUpdate";
                break t;
            }
            $ = void 0;
          }
        else
          wl
            ? Ks(t, l) && ($ = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              ($ = "onCompositionStart");
        $ &&
          (Zs &&
            l.locale !== "ko" &&
            (wl || $ !== "onCompositionStart"
              ? $ === "onCompositionEnd" && wl && (J = Xs())
              : ((Fe = R),
                (lu = "value" in Fe ? Fe.value : Fe.textContent),
                (wl = !0))),
          (it = En(M, $)),
          0 < it.length &&
            (($ = new js($, t, null, l, R)),
            H.push({ event: $, listeners: it }),
            J ? ($.data = J) : ((J = Js(l)), J !== null && ($.data = J)))),
          (J = D0 ? U0(t, l) : N0(t, l)) &&
            (($ = En(M, "onBeforeInput")),
            0 < $.length &&
              ((it = new js("onBeforeInput", "beforeinput", null, l, R)),
              H.push({ event: it, listeners: $ }),
              (it.data = J))),
          Ad(H, t, M, l, R);
      }
      Rh(H, e);
    });
  }
  function fi(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function En(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t,
        f = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          f === null ||
          ((n = Ta(t, l)),
          n != null && a.unshift(fi(t, n, f)),
          (n = Ta(t, e)),
          n != null && a.push(fi(t, n, f))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function va(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Uh(t, e, l, a, n) {
    for (var f = e._reactName, r = []; l !== null && l !== a; ) {
      var d = l,
        S = d.alternate,
        M = d.stateNode;
      if (((d = d.tag), S !== null && S === a)) break;
      (d !== 5 && d !== 26 && d !== 27) ||
        M === null ||
        ((S = M),
        n
          ? ((M = Ta(l, f)), M != null && r.unshift(fi(l, M, S)))
          : n || ((M = Ta(l, f)), M != null && r.push(fi(l, M, S)))),
        (l = l.return);
    }
    r.length !== 0 && t.push({ event: e, listeners: r });
  }
  var xd = /\r\n?/g,
    zd = /\u0000|\uFFFD/g;
  function Nh(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        xd,
        `
`
      )
      .replace(zd, "");
  }
  function Bh(t, e) {
    return (e = Nh(e)), Nh(t) === e;
  }
  function An() {}
  function bt(t, e, l, a, n, f) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || Ql(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            Ql(t, "" + a);
        break;
      case "className":
        xi(t, "class", a);
        break;
      case "tabIndex":
        xi(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        xi(t, l, a);
        break;
      case "style":
        qs(t, a, f);
        break;
      case "data":
        if (e !== "object") {
          xi(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        (a = Ri("" + a)), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" &&
            (l === "formAction"
              ? (e !== "input" && bt(t, e, "name", n.name, n, null),
                bt(t, e, "formEncType", n.formEncType, n, null),
                bt(t, e, "formMethod", n.formMethod, n, null),
                bt(t, e, "formTarget", n.formTarget, n, null))
              : (bt(t, e, "encType", n.encType, n, null),
                bt(t, e, "method", n.method, n, null),
                bt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        (a = Ri("" + a)), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = An);
        break;
      case "onScroll":
        a != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ft("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(c(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(c(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (l = Ri("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "" + a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        ft("beforetoggle", t), ft("toggle", t), Ti(t, "popover", a);
        break;
      case "xlinkActuate":
        Re(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Re(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Re(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Re(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Re(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Re(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Re(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Re(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Re(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Ti(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = a0.get(l) || l), Ti(t, l, a));
    }
  }
  function Cf(t, e, l, a, n, f) {
    switch (l) {
      case "style":
        qs(t, a, f);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(c(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(c(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Ql(t, a)
          : (typeof a == "number" || typeof a == "bigint") && Ql(t, "" + a);
        break;
      case "onScroll":
        a != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ft("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = An);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ms.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (e = l.slice(2, n ? l.length - 7 : void 0)),
              (f = t[$t] || null),
              (f = f != null ? f[l] : null),
              typeof f == "function" && t.removeEventListener(e, f, n),
              typeof a == "function")
            ) {
              typeof f != "function" &&
                f !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, n);
              break t;
            }
            l in t
              ? (t[l] = a)
              : a === !0
              ? t.setAttribute(l, "")
              : Ti(t, l, a);
          }
    }
  }
  function wt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ft("error", t), ft("load", t);
        var a = !1,
          n = !1,
          f;
        for (f in l)
          if (l.hasOwnProperty(f)) {
            var r = l[f];
            if (r != null)
              switch (f) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, e));
                default:
                  bt(t, e, f, r, l, null);
              }
          }
        n && bt(t, e, "srcSet", l.srcSet, l, null),
          a && bt(t, e, "src", l.src, l, null);
        return;
      case "input":
        ft("invalid", t);
        var d = (f = r = n = null),
          S = null,
          M = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var R = l[a];
            if (R != null)
              switch (a) {
                case "name":
                  n = R;
                  break;
                case "type":
                  r = R;
                  break;
                case "checked":
                  S = R;
                  break;
                case "defaultChecked":
                  M = R;
                  break;
                case "value":
                  f = R;
                  break;
                case "defaultValue":
                  d = R;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (R != null) throw Error(c(137, e));
                  break;
                default:
                  bt(t, e, a, R, l, null);
              }
          }
        Us(t, f, d, S, M, r, n, !1), zi(t);
        return;
      case "select":
        ft("invalid", t), (a = r = f = null);
        for (n in l)
          if (l.hasOwnProperty(n) && ((d = l[n]), d != null))
            switch (n) {
              case "value":
                f = d;
                break;
              case "defaultValue":
                r = d;
                break;
              case "multiple":
                a = d;
              default:
                bt(t, e, n, d, l, null);
            }
        (e = f),
          (l = r),
          (t.multiple = !!a),
          e != null ? jl(t, !!a, e, !1) : l != null && jl(t, !!a, l, !0);
        return;
      case "textarea":
        ft("invalid", t), (f = n = a = null);
        for (r in l)
          if (l.hasOwnProperty(r) && ((d = l[r]), d != null))
            switch (r) {
              case "value":
                a = d;
                break;
              case "defaultValue":
                n = d;
                break;
              case "children":
                f = d;
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(c(91));
                break;
              default:
                bt(t, e, r, d, l, null);
            }
        Bs(t, a, n, f), zi(t);
        return;
      case "option":
        for (S in l)
          if (l.hasOwnProperty(S) && ((a = l[S]), a != null))
            switch (S) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                bt(t, e, S, a, l, null);
            }
        return;
      case "dialog":
        ft("beforetoggle", t), ft("toggle", t), ft("cancel", t), ft("close", t);
        break;
      case "iframe":
      case "object":
        ft("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ui.length; a++) ft(ui[a], t);
        break;
      case "image":
        ft("error", t), ft("load", t);
        break;
      case "details":
        ft("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ft("error", t), ft("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (M in l)
          if (l.hasOwnProperty(M) && ((a = l[M]), a != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, e));
              default:
                bt(t, e, M, a, l, null);
            }
        return;
      default:
        if (kn(e)) {
          for (R in l)
            l.hasOwnProperty(R) &&
              ((a = l[R]), a !== void 0 && Cf(t, e, R, a, l, void 0));
          return;
        }
    }
    for (d in l)
      l.hasOwnProperty(d) && ((a = l[d]), a != null && bt(t, e, d, a, l, null));
  }
  function Od(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          f = null,
          r = null,
          d = null,
          S = null,
          M = null,
          R = null;
        for (x in l) {
          var H = l[x];
          if (l.hasOwnProperty(x) && H != null)
            switch (x) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = H;
              default:
                a.hasOwnProperty(x) || bt(t, e, x, null, a, H);
            }
        }
        for (var T in a) {
          var x = a[T];
          if (((H = l[T]), a.hasOwnProperty(T) && (x != null || H != null)))
            switch (T) {
              case "type":
                f = x;
                break;
              case "name":
                n = x;
                break;
              case "checked":
                M = x;
                break;
              case "defaultChecked":
                R = x;
                break;
              case "value":
                r = x;
                break;
              case "defaultValue":
                d = x;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(c(137, e));
                break;
              default:
                x !== H && bt(t, e, T, x, a, H);
            }
        }
        Wn(t, r, d, S, M, R, f, n);
        return;
      case "select":
        x = r = d = T = null;
        for (f in l)
          if (((S = l[f]), l.hasOwnProperty(f) && S != null))
            switch (f) {
              case "value":
                break;
              case "multiple":
                x = S;
              default:
                a.hasOwnProperty(f) || bt(t, e, f, null, a, S);
            }
        for (n in a)
          if (
            ((f = a[n]),
            (S = l[n]),
            a.hasOwnProperty(n) && (f != null || S != null))
          )
            switch (n) {
              case "value":
                T = f;
                break;
              case "defaultValue":
                d = f;
                break;
              case "multiple":
                r = f;
              default:
                f !== S && bt(t, e, n, f, a, S);
            }
        (e = d),
          (l = r),
          (a = x),
          T != null
            ? jl(t, !!l, T, !1)
            : !!a != !!l &&
              (e != null ? jl(t, !!l, e, !0) : jl(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        x = T = null;
        for (d in l)
          if (
            ((n = l[d]),
            l.hasOwnProperty(d) && n != null && !a.hasOwnProperty(d))
          )
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                bt(t, e, d, null, a, n);
            }
        for (r in a)
          if (
            ((n = a[r]),
            (f = l[r]),
            a.hasOwnProperty(r) && (n != null || f != null))
          )
            switch (r) {
              case "value":
                T = n;
                break;
              case "defaultValue":
                x = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(c(91));
                break;
              default:
                n !== f && bt(t, e, r, n, a, f);
            }
        Ns(t, T, x);
        return;
      case "option":
        for (var I in l)
          if (
            ((T = l[I]),
            l.hasOwnProperty(I) && T != null && !a.hasOwnProperty(I))
          )
            switch (I) {
              case "selected":
                t.selected = !1;
                break;
              default:
                bt(t, e, I, null, a, T);
            }
        for (S in a)
          if (
            ((T = a[S]),
            (x = l[S]),
            a.hasOwnProperty(S) && T !== x && (T != null || x != null))
          )
            switch (S) {
              case "selected":
                t.selected =
                  T && typeof T != "function" && typeof T != "symbol";
                break;
              default:
                bt(t, e, S, T, a, x);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var W in l)
          (T = l[W]),
            l.hasOwnProperty(W) &&
              T != null &&
              !a.hasOwnProperty(W) &&
              bt(t, e, W, null, a, T);
        for (M in a)
          if (
            ((T = a[M]),
            (x = l[M]),
            a.hasOwnProperty(M) && T !== x && (T != null || x != null))
          )
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(c(137, e));
                break;
              default:
                bt(t, e, M, T, a, x);
            }
        return;
      default:
        if (kn(e)) {
          for (var Et in l)
            (T = l[Et]),
              l.hasOwnProperty(Et) &&
                T !== void 0 &&
                !a.hasOwnProperty(Et) &&
                Cf(t, e, Et, void 0, a, T);
          for (R in a)
            (T = a[R]),
              (x = l[R]),
              !a.hasOwnProperty(R) ||
                T === x ||
                (T === void 0 && x === void 0) ||
                Cf(t, e, R, T, a, x);
          return;
        }
    }
    for (var A in l)
      (T = l[A]),
        l.hasOwnProperty(A) &&
          T != null &&
          !a.hasOwnProperty(A) &&
          bt(t, e, A, null, a, T);
    for (H in a)
      (T = a[H]),
        (x = l[H]),
        !a.hasOwnProperty(H) ||
          T === x ||
          (T == null && x == null) ||
          bt(t, e, H, T, a, x);
  }
  var Yf = null,
    Xf = null;
  function _n(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Hh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function qh(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Gf(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Lf = null;
  function Rd() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Lf
        ? !1
        : ((Lf = t), !0)
      : ((Lf = null), !1);
  }
  var Ch = typeof setTimeout == "function" ? setTimeout : void 0,
    Dd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Yh = typeof Promise == "function" ? Promise : void 0,
    Ud =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Yh < "u"
        ? function (t) {
            return Yh.resolve(null).then(t).catch(Nd);
          }
        : Ch;
  function Nd(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function rl(t) {
    return t === "head";
  }
  function Xh(t, e) {
    var l = e,
      a = 0,
      n = 0;
    do {
      var f = l.nextSibling;
      if ((t.removeChild(l), f && f.nodeType === 8))
        if (((l = f.data), l === "/$")) {
          if (0 < a && 8 > a) {
            l = a;
            var r = t.ownerDocument;
            if ((l & 1 && si(r.documentElement), l & 2 && si(r.body), l & 4))
              for (l = r.head, si(l), r = l.firstChild; r; ) {
                var d = r.nextSibling,
                  S = r.nodeName;
                r[_a] ||
                  S === "SCRIPT" ||
                  S === "STYLE" ||
                  (S === "LINK" && r.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(r),
                  (r = d);
              }
          }
          if (n === 0) {
            t.removeChild(f), vi(e);
            return;
          }
          n--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? n++
            : (a = l.charCodeAt(0) - 48);
      else a = 0;
      l = f;
    } while (l);
    vi(e);
  }
  function jf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          jf(l), wn(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function Bd(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[_a])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((f = t.getAttribute("rel")),
                f === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                f !== n.rel ||
                t.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                t.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                t.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((f = t.getAttribute("src")),
                (f !== (n.src == null ? null : n.src) ||
                  t.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  t.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  f &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var f = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === f) return t;
      } else return t;
      if (((t = Ae(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Hd(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = Ae(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Qf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function qd(t, e) {
    var l = t.ownerDocument;
    if (t.data !== "$?" || l.readyState === "complete") e();
    else {
      var a = function () {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function Ae(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var Zf = null;
  function Gh(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (e === 0) return t;
          e--;
        } else l === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Lh(t, e, l) {
    switch (((e = _n(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(c(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(c(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(c(454));
        return t;
      default:
        throw Error(c(451));
    }
  }
  function si(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    wn(t);
  }
  var pe = new Map(),
    jh = new Set();
  function Mn(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Ze = j.d;
  j.d = { f: Cd, r: Yd, D: Xd, C: Gd, L: Ld, m: jd, X: Zd, S: Qd, M: Vd };
  function Cd() {
    var t = Ze.f(),
      e = yn();
    return t || e;
  }
  function Yd(t) {
    var e = Yl(t);
    e !== null && e.tag === 5 && e.type === "form" ? fr(e) : Ze.r(t);
  }
  var ma = typeof document > "u" ? null : document;
  function Qh(t, e, l) {
    var a = ma;
    if (a && typeof e == "string" && e) {
      var n = de(e);
      (n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        jh.has(n) ||
          (jh.add(n),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement("link")),
            wt(e, "link", t),
            Gt(e),
            a.head.appendChild(e)));
    }
  }
  function Xd(t) {
    Ze.D(t), Qh("dns-prefetch", t, null);
  }
  function Gd(t, e) {
    Ze.C(t, e), Qh("preconnect", t, e);
  }
  function Ld(t, e, l) {
    Ze.L(t, e, l);
    var a = ma;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + de(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + de(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + de(l.imageSizes) + '"]'))
        : (n += '[href="' + de(t) + '"]');
      var f = n;
      switch (e) {
        case "style":
          f = Sa(t);
          break;
        case "script":
          f = pa(t);
      }
      pe.has(f) ||
        ((t = E(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l
        )),
        pe.set(f, t),
        a.querySelector(n) !== null ||
          (e === "style" && a.querySelector(ci(f))) ||
          (e === "script" && a.querySelector(ri(f))) ||
          ((e = a.createElement("link")),
          wt(e, "link", t),
          Gt(e),
          a.head.appendChild(e)));
    }
  }
  function jd(t, e) {
    Ze.m(t, e);
    var l = ma;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        n =
          'link[rel="modulepreload"][as="' + de(a) + '"][href="' + de(t) + '"]',
        f = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = pa(t);
      }
      if (
        !pe.has(f) &&
        ((t = E({ rel: "modulepreload", href: t }, e)),
        pe.set(f, t),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(ri(f))) return;
        }
        (a = l.createElement("link")),
          wt(a, "link", t),
          Gt(a),
          l.head.appendChild(a);
      }
    }
  }
  function Qd(t, e, l) {
    Ze.S(t, e, l);
    var a = ma;
    if (a && t) {
      var n = Xl(a).hoistableStyles,
        f = Sa(t);
      e = e || "default";
      var r = n.get(f);
      if (!r) {
        var d = { loading: 0, preload: null };
        if ((r = a.querySelector(ci(f)))) d.loading = 5;
        else {
          (t = E({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = pe.get(f)) && Vf(t, l);
          var S = (r = a.createElement("link"));
          Gt(S),
            wt(S, "link", t),
            (S._p = new Promise(function (M, R) {
              (S.onload = M), (S.onerror = R);
            })),
            S.addEventListener("load", function () {
              d.loading |= 1;
            }),
            S.addEventListener("error", function () {
              d.loading |= 2;
            }),
            (d.loading |= 4),
            Tn(r, e, a);
        }
        (r = { type: "stylesheet", instance: r, count: 1, state: d }),
          n.set(f, r);
      }
    }
  }
  function Zd(t, e) {
    Ze.X(t, e);
    var l = ma;
    if (l && t) {
      var a = Xl(l).hoistableScripts,
        n = pa(t),
        f = a.get(n);
      f ||
        ((f = l.querySelector(ri(n))),
        f ||
          ((t = E({ src: t, async: !0 }, e)),
          (e = pe.get(n)) && wf(t, e),
          (f = l.createElement("script")),
          Gt(f),
          wt(f, "link", t),
          l.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        a.set(n, f));
    }
  }
  function Vd(t, e) {
    Ze.M(t, e);
    var l = ma;
    if (l && t) {
      var a = Xl(l).hoistableScripts,
        n = pa(t),
        f = a.get(n);
      f ||
        ((f = l.querySelector(ri(n))),
        f ||
          ((t = E({ src: t, async: !0, type: "module" }, e)),
          (e = pe.get(n)) && wf(t, e),
          (f = l.createElement("script")),
          Gt(f),
          wt(f, "link", t),
          l.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        a.set(n, f));
    }
  }
  function Zh(t, e, l, a) {
    var n = (n = tt.current) ? Mn(n) : null;
    if (!n) throw Error(c(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = Sa(l.href)),
            (l = Xl(n).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = Sa(l.href);
          var f = Xl(n).hoistableStyles,
            r = f.get(t);
          if (
            (r ||
              ((n = n.ownerDocument || n),
              (r = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(t, r),
              (f = n.querySelector(ci(t))) &&
                !f._p &&
                ((r.instance = f), (r.state.loading = 5)),
              pe.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                pe.set(t, l),
                f || wd(n, t, l, r.state))),
            e && a === null)
          )
            throw Error(c(528, ""));
          return r;
        }
        if (e && a !== null) throw Error(c(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = pa(l)),
              (l = Xl(n).hoistableScripts),
              (a = l.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(c(444, t));
    }
  }
  function Sa(t) {
    return 'href="' + de(t) + '"';
  }
  function ci(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Vh(t) {
    return E({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function wd(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        wt(e, "link", l),
        Gt(e),
        t.head.appendChild(e));
  }
  function pa(t) {
    return '[src="' + de(t) + '"]';
  }
  function ri(t) {
    return "script[async]" + t;
  }
  function wh(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + de(l.href) + '"]');
          if (a) return (e.instance = a), Gt(a), a;
          var n = E({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Gt(a),
            wt(a, "style", n),
            Tn(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          n = Sa(l.href);
          var f = t.querySelector(ci(n));
          if (f) return (e.state.loading |= 4), (e.instance = f), Gt(f), f;
          (a = Vh(l)),
            (n = pe.get(n)) && Vf(a, n),
            (f = (t.ownerDocument || t).createElement("link")),
            Gt(f);
          var r = f;
          return (
            (r._p = new Promise(function (d, S) {
              (r.onload = d), (r.onerror = S);
            })),
            wt(f, "link", a),
            (e.state.loading |= 4),
            Tn(f, l.precedence, t),
            (e.instance = f)
          );
        case "script":
          return (
            (f = pa(l.src)),
            (n = t.querySelector(ri(f)))
              ? ((e.instance = n), Gt(n), n)
              : ((a = l),
                (n = pe.get(f)) && ((a = E({}, l)), wf(a, n)),
                (t = t.ownerDocument || t),
                (n = t.createElement("script")),
                Gt(n),
                wt(n, "link", a),
                t.head.appendChild(n),
                (e.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(c(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Tn(a, l.precedence, t));
    return e.instance;
  }
  function Tn(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        f = n,
        r = 0;
      r < a.length;
      r++
    ) {
      var d = a[r];
      if (d.dataset.precedence === e) f = d;
      else if (f !== n) break;
    }
    f
      ? f.parentNode.insertBefore(t, f.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function Vf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function wf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var xn = null;
  function Kh(t, e, l) {
    if (xn === null) {
      var a = new Map(),
        n = (xn = new Map());
      n.set(l, a);
    } else (n = xn), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), n = 0;
      n < l.length;
      n++
    ) {
      var f = l[n];
      if (
        !(
          f[_a] ||
          f[Kt] ||
          (t === "link" && f.getAttribute("rel") === "stylesheet")
        ) &&
        f.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var r = f.getAttribute(e) || "";
        r = t + r;
        var d = a.get(r);
        d ? d.push(f) : a.set(r, [f]);
      }
    }
    return a;
  }
  function Jh(t, e, l) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function Kd(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Fh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var hi = null;
  function Jd() {}
  function Fd(t, e, l) {
    if (hi === null) throw Error(c(475));
    var a = hi;
    if (
      e.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var n = Sa(l.href),
          f = t.querySelector(ci(n));
        if (f) {
          (t = f._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = zn.bind(a)), t.then(a, a)),
            (e.state.loading |= 4),
            (e.instance = f),
            Gt(f);
          return;
        }
        (f = t.ownerDocument || t),
          (l = Vh(l)),
          (n = pe.get(n)) && Vf(l, n),
          (f = f.createElement("link")),
          Gt(f);
        var r = f;
        (r._p = new Promise(function (d, S) {
          (r.onload = d), (r.onerror = S);
        })),
          wt(f, "link", l),
          (e.instance = f);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (a.count++,
          (e = zn.bind(a)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function Wd() {
    if (hi === null) throw Error(c(475));
    var t = hi;
    return (
      t.stylesheets && t.count === 0 && Kf(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var l = setTimeout(function () {
              if ((t.stylesheets && Kf(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                (t.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function zn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Kf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var On = null;
  function Kf(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (On = new Map()),
        e.forEach($d, t),
        (On = null),
        zn.call(t));
  }
  function $d(t, e) {
    if (!(e.state.loading & 4)) {
      var l = On.get(t);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), On.set(t, l);
        for (
          var n = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            f = 0;
          f < n.length;
          f++
        ) {
          var r = n[f];
          (r.nodeName === "LINK" || r.getAttribute("media") !== "not all") &&
            (l.set(r.dataset.precedence, r), (a = r));
        }
        a && l.set(null, a);
      }
      (n = e.instance),
        (r = n.getAttribute("data-precedence")),
        (f = l.get(r) || a),
        f === a && l.set(null, n),
        l.set(r, n),
        this.count++,
        (a = zn.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        f
          ? f.parentNode.insertBefore(n, f.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(n, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var di = {
    $$typeof: K,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0,
  };
  function kd(t, e, l, a, n, f, r, d) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = jn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = jn(0)),
      (this.hiddenUpdates = jn(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = f),
      (this.onRecoverableError = r),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = d),
      (this.incompleteTransitions = new Map());
  }
  function Wh(t, e, l, a, n, f, r, d, S, M, R, H) {
    return (
      (t = new kd(t, e, l, r, d, S, M, H)),
      (e = 1),
      f === !0 && (e |= 24),
      (f = ne(3, null, null, e)),
      (t.current = f),
      (f.stateNode = t),
      (e = xu()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (f.memoizedState = { element: a, isDehydrated: l, cache: e }),
      Du(f),
      t
    );
  }
  function $h(t) {
    return t ? ((t = $l), t) : $l;
  }
  function kh(t, e, l, a, n, f) {
    (n = $h(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = ke(e)),
      (a.payload = { element: l }),
      (f = f === void 0 ? null : f),
      f !== null && (a.callback = f),
      (l = Ie(t, a, e)),
      l !== null && (re(l, t, e), Qa(l, t, e));
  }
  function Ih(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Jf(t, e) {
    Ih(t, e), (t = t.alternate) && Ih(t, e);
  }
  function Ph(t) {
    if (t.tag === 13) {
      var e = Wl(t, 67108864);
      e !== null && re(e, t, 67108864), Jf(t, 67108864);
    }
  }
  var Rn = !0;
  function Id(t, e, l, a) {
    var n = U.T;
    U.T = null;
    var f = j.p;
    try {
      (j.p = 2), Ff(t, e, l, a);
    } finally {
      (j.p = f), (U.T = n);
    }
  }
  function Pd(t, e, l, a) {
    var n = U.T;
    U.T = null;
    var f = j.p;
    try {
      (j.p = 8), Ff(t, e, l, a);
    } finally {
      (j.p = f), (U.T = n);
    }
  }
  function Ff(t, e, l, a) {
    if (Rn) {
      var n = Wf(a);
      if (n === null) qf(t, e, a, Dn, l), e1(t, a);
      else if (eo(n, t, e, l, a)) a.stopPropagation();
      else if ((e1(t, a), e & 4 && -1 < to.indexOf(t))) {
        for (; n !== null; ) {
          var f = Yl(n);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var r = ml(f.pendingLanes);
                  if (r !== 0) {
                    var d = f;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; r; ) {
                      var S = 1 << (31 - ae(r));
                      (d.entanglements[1] |= S), (r &= ~S);
                    }
                    Oe(f), (vt & 6) === 0 && ((on = _e() + 500), ni(0));
                  }
                }
                break;
              case 13:
                (d = Wl(f, 2)), d !== null && re(d, f, 2), yn(), Jf(f, 2);
            }
          if (((f = Wf(a)), f === null && qf(t, e, a, Dn, l), f === n)) break;
          n = f;
        }
        n !== null && a.stopPropagation();
      } else qf(t, e, a, null, l);
    }
  }
  function Wf(t) {
    return (t = Pn(t)), $f(t);
  }
  var Dn = null;
  function $f(t) {
    if (((Dn = null), (t = Cl(t)), t !== null)) {
      var e = o(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = g(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Dn = t), null;
  }
  function t1(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (G1()) {
          case gs:
            return 2;
          case ys:
            return 8;
          case Ei:
          case L1:
            return 32;
          case vs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var kf = !1,
    hl = null,
    dl = null,
    ol = null,
    oi = new Map(),
    gi = new Map(),
    gl = [],
    to =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function e1(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        hl = null;
        break;
      case "dragenter":
      case "dragleave":
        dl = null;
        break;
      case "mouseover":
      case "mouseout":
        ol = null;
        break;
      case "pointerover":
      case "pointerout":
        oi.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gi.delete(e.pointerId);
    }
  }
  function yi(t, e, l, a, n, f) {
    return t === null || t.nativeEvent !== f
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: f,
          targetContainers: [n],
        }),
        e !== null && ((e = Yl(e)), e !== null && Ph(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t);
  }
  function eo(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return (hl = yi(hl, t, e, l, a, n)), !0;
      case "dragenter":
        return (dl = yi(dl, t, e, l, a, n)), !0;
      case "mouseover":
        return (ol = yi(ol, t, e, l, a, n)), !0;
      case "pointerover":
        var f = n.pointerId;
        return oi.set(f, yi(oi.get(f) || null, t, e, l, a, n)), !0;
      case "gotpointercapture":
        return (
          (f = n.pointerId), gi.set(f, yi(gi.get(f) || null, t, e, l, a, n)), !0
        );
    }
    return !1;
  }
  function l1(t) {
    var e = Cl(t.target);
    if (e !== null) {
      var l = o(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = g(l)), e !== null)) {
            (t.blockedOn = e),
              F1(t.priority, function () {
                if (l.tag === 13) {
                  var a = ce();
                  a = Qn(a);
                  var n = Wl(l, a);
                  n !== null && re(n, l, a), Jf(l, a);
                }
              });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Un(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Wf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        (In = a), l.target.dispatchEvent(a), (In = null);
      } else return (e = Yl(l)), e !== null && Ph(e), (t.blockedOn = l), !1;
      e.shift();
    }
    return !0;
  }
  function a1(t, e, l) {
    Un(t) && l.delete(e);
  }
  function lo() {
    (kf = !1),
      hl !== null && Un(hl) && (hl = null),
      dl !== null && Un(dl) && (dl = null),
      ol !== null && Un(ol) && (ol = null),
      oi.forEach(a1),
      gi.forEach(a1);
  }
  function Nn(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      kf ||
        ((kf = !0),
        u.unstable_scheduleCallback(u.unstable_NormalPriority, lo)));
  }
  var Bn = null;
  function i1(t) {
    Bn !== t &&
      ((Bn = t),
      u.unstable_scheduleCallback(u.unstable_NormalPriority, function () {
        Bn === t && (Bn = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            n = t[e + 2];
          if (typeof a != "function") {
            if ($f(a || l) === null) continue;
            break;
          }
          var f = Yl(l);
          f !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Wu(f, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function vi(t) {
    function e(S) {
      return Nn(S, t);
    }
    hl !== null && Nn(hl, t),
      dl !== null && Nn(dl, t),
      ol !== null && Nn(ol, t),
      oi.forEach(e),
      gi.forEach(e);
    for (var l = 0; l < gl.length; l++) {
      var a = gl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < gl.length && ((l = gl[0]), l.blockedOn === null); )
      l1(l), l.blockedOn === null && gl.shift();
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          f = l[a + 1],
          r = n[$t] || null;
        if (typeof f == "function") r || i1(l);
        else if (r) {
          var d = null;
          if (f && f.hasAttribute("formAction")) {
            if (((n = f), (r = f[$t] || null))) d = r.formAction;
            else if ($f(n) !== null) continue;
          } else d = r.action;
          typeof d == "function" ? (l[a + 1] = d) : (l.splice(a, 3), (a -= 3)),
            i1(l);
        }
      }
  }
  function If(t) {
    this._internalRoot = t;
  }
  (Hn.prototype.render = If.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(c(409));
      var l = e.current,
        a = ce();
      kh(l, a, t, e, null, null);
    }),
    (Hn.prototype.unmount = If.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          kh(t.current, 2, null, t, null, null), yn(), (e[ql] = null);
        }
      });
  function Hn(t) {
    this._internalRoot = t;
  }
  Hn.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Es();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < gl.length && e !== 0 && e < gl[l].priority; l++);
      gl.splice(l, 0, t), l === 0 && l1(t);
    }
  };
  var n1 = i.version;
  if (n1 !== "19.1.0") throw Error(c(527, n1, "19.1.0"));
  j.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(c(188))
        : ((t = Object.keys(t).join(",")), Error(c(268, t)));
    return (
      (t = y(e)),
      (t = t !== null ? v(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var ao = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qn.isDisabled && qn.supportsFiber)
      try {
        (ba = qn.inject(ao)), (le = qn);
      } catch {}
  }
  return (
    (Si.createRoot = function (t, e) {
      if (!h(t)) throw Error(c(299));
      var l = !1,
        a = "",
        n = Er,
        f = Ar,
        r = _r,
        d = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (f = e.onCaughtError),
          e.onRecoverableError !== void 0 && (r = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (d = e.unstable_transitionCallbacks)),
        (e = Wh(t, 1, !1, null, null, l, a, n, f, r, d, null)),
        (t[ql] = e.current),
        Hf(t),
        new If(e)
      );
    }),
    (Si.hydrateRoot = function (t, e, l) {
      if (!h(t)) throw Error(c(299));
      var a = !1,
        n = "",
        f = Er,
        r = Ar,
        d = _r,
        S = null,
        M = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (f = l.onUncaughtError),
          l.onCaughtError !== void 0 && (r = l.onCaughtError),
          l.onRecoverableError !== void 0 && (d = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (S = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (M = l.formState)),
        (e = Wh(t, 1, !0, e, l ?? null, a, n, f, r, d, S, M)),
        (e.context = $h(null)),
        (l = e.current),
        (a = ce()),
        (a = Qn(a)),
        (n = ke(a)),
        (n.callback = null),
        Ie(l, n, a),
        (l = a),
        (e.current.lanes = l),
        Aa(e, l),
        Oe(e),
        (t[ql] = e.current),
        Hf(t),
        new Hn(e)
      );
    }),
    (Si.version = "19.1.0"),
    Si
  );
}
var y1;
function go() {
  if (y1) return es.exports;
  y1 = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (i) {
        console.error(i);
      }
  }
  return u(), (es.exports = oo()), es.exports;
}
var yo = go();
function pi(u) {
  let i = u[0],
    s = u[1],
    c = u[2];
  return Math.sqrt(i * i + s * s + c * c);
}
function cs(u, i) {
  return (u[0] = i[0]), (u[1] = i[1]), (u[2] = i[2]), u;
}
function vo(u, i, s, c) {
  return (u[0] = i), (u[1] = s), (u[2] = c), u;
}
function v1(u, i, s) {
  return (u[0] = i[0] + s[0]), (u[1] = i[1] + s[1]), (u[2] = i[2] + s[2]), u;
}
function m1(u, i, s) {
  return (u[0] = i[0] - s[0]), (u[1] = i[1] - s[1]), (u[2] = i[2] - s[2]), u;
}
function mo(u, i, s) {
  return (u[0] = i[0] * s[0]), (u[1] = i[1] * s[1]), (u[2] = i[2] * s[2]), u;
}
function So(u, i, s) {
  return (u[0] = i[0] / s[0]), (u[1] = i[1] / s[1]), (u[2] = i[2] / s[2]), u;
}
function ns(u, i, s) {
  return (u[0] = i[0] * s), (u[1] = i[1] * s), (u[2] = i[2] * s), u;
}
function po(u, i) {
  let s = i[0] - u[0],
    c = i[1] - u[1],
    h = i[2] - u[2];
  return Math.sqrt(s * s + c * c + h * h);
}
function bo(u, i) {
  let s = i[0] - u[0],
    c = i[1] - u[1],
    h = i[2] - u[2];
  return s * s + c * c + h * h;
}
function S1(u) {
  let i = u[0],
    s = u[1],
    c = u[2];
  return i * i + s * s + c * c;
}
function Eo(u, i) {
  return (u[0] = -i[0]), (u[1] = -i[1]), (u[2] = -i[2]), u;
}
function Ao(u, i) {
  return (u[0] = 1 / i[0]), (u[1] = 1 / i[1]), (u[2] = 1 / i[2]), u;
}
function rs(u, i) {
  let s = i[0],
    c = i[1],
    h = i[2],
    o = s * s + c * c + h * h;
  return (
    o > 0 && (o = 1 / Math.sqrt(o)),
    (u[0] = i[0] * o),
    (u[1] = i[1] * o),
    (u[2] = i[2] * o),
    u
  );
}
function B1(u, i) {
  return u[0] * i[0] + u[1] * i[1] + u[2] * i[2];
}
function p1(u, i, s) {
  let c = i[0],
    h = i[1],
    o = i[2],
    g = s[0],
    m = s[1],
    y = s[2];
  return (
    (u[0] = h * y - o * m), (u[1] = o * g - c * y), (u[2] = c * m - h * g), u
  );
}
function _o(u, i, s, c) {
  let h = i[0],
    o = i[1],
    g = i[2];
  return (
    (u[0] = h + c * (s[0] - h)),
    (u[1] = o + c * (s[1] - o)),
    (u[2] = g + c * (s[2] - g)),
    u
  );
}
function Mo(u, i, s, c, h) {
  const o = Math.exp(-c * h);
  let g = i[0],
    m = i[1],
    y = i[2];
  return (
    (u[0] = s[0] + (g - s[0]) * o),
    (u[1] = s[1] + (m - s[1]) * o),
    (u[2] = s[2] + (y - s[2]) * o),
    u
  );
}
function To(u, i, s) {
  let c = i[0],
    h = i[1],
    o = i[2],
    g = s[3] * c + s[7] * h + s[11] * o + s[15];
  return (
    (g = g || 1),
    (u[0] = (s[0] * c + s[4] * h + s[8] * o + s[12]) / g),
    (u[1] = (s[1] * c + s[5] * h + s[9] * o + s[13]) / g),
    (u[2] = (s[2] * c + s[6] * h + s[10] * o + s[14]) / g),
    u
  );
}
function xo(u, i, s) {
  let c = i[0],
    h = i[1],
    o = i[2],
    g = s[3] * c + s[7] * h + s[11] * o + s[15];
  return (
    (g = g || 1),
    (u[0] = (s[0] * c + s[4] * h + s[8] * o) / g),
    (u[1] = (s[1] * c + s[5] * h + s[9] * o) / g),
    (u[2] = (s[2] * c + s[6] * h + s[10] * o) / g),
    u
  );
}
function zo(u, i, s) {
  let c = i[0],
    h = i[1],
    o = i[2];
  return (
    (u[0] = c * s[0] + h * s[3] + o * s[6]),
    (u[1] = c * s[1] + h * s[4] + o * s[7]),
    (u[2] = c * s[2] + h * s[5] + o * s[8]),
    u
  );
}
function Oo(u, i, s) {
  let c = i[0],
    h = i[1],
    o = i[2],
    g = s[0],
    m = s[1],
    y = s[2],
    v = s[3],
    E = m * o - y * h,
    z = y * c - g * o,
    O = g * h - m * c,
    D = m * O - y * z,
    B = y * E - g * O,
    q = g * z - m * E,
    Y = v * 2;
  return (
    (E *= Y),
    (z *= Y),
    (O *= Y),
    (D *= 2),
    (B *= 2),
    (q *= 2),
    (u[0] = c + E + D),
    (u[1] = h + z + B),
    (u[2] = o + O + q),
    u
  );
}
const Ro = (function () {
  const u = [0, 0, 0],
    i = [0, 0, 0];
  return function (s, c) {
    cs(u, s), cs(i, c), rs(u, u), rs(i, i);
    let h = B1(u, i);
    return h > 1 ? 0 : h < -1 ? Math.PI : Math.acos(h);
  };
})();
function Do(u, i) {
  return u[0] === i[0] && u[1] === i[1] && u[2] === i[2];
}
class Ct extends Array {
  constructor(i = 0, s = i, c = i) {
    return super(i, s, c), this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(i) {
    this[0] = i;
  }
  set y(i) {
    this[1] = i;
  }
  set z(i) {
    this[2] = i;
  }
  set(i, s = i, c = i) {
    return i.length ? this.copy(i) : (vo(this, i, s, c), this);
  }
  copy(i) {
    return cs(this, i), this;
  }
  add(i, s) {
    return s ? v1(this, i, s) : v1(this, this, i), this;
  }
  sub(i, s) {
    return s ? m1(this, i, s) : m1(this, this, i), this;
  }
  multiply(i) {
    return i.length ? mo(this, this, i) : ns(this, this, i), this;
  }
  divide(i) {
    return i.length ? So(this, this, i) : ns(this, this, 1 / i), this;
  }
  inverse(i = this) {
    return Ao(this, i), this;
  }
  len() {
    return pi(this);
  }
  distance(i) {
    return i ? po(this, i) : pi(this);
  }
  squaredLen() {
    return S1(this);
  }
  squaredDistance(i) {
    return i ? bo(this, i) : S1(this);
  }
  negate(i = this) {
    return Eo(this, i), this;
  }
  cross(i, s) {
    return s ? p1(this, i, s) : p1(this, this, i), this;
  }
  scale(i) {
    return ns(this, this, i), this;
  }
  normalize() {
    return rs(this, this), this;
  }
  dot(i) {
    return B1(this, i);
  }
  equals(i) {
    return Do(this, i);
  }
  applyMatrix3(i) {
    return zo(this, this, i), this;
  }
  applyMatrix4(i) {
    return To(this, this, i), this;
  }
  scaleRotateMatrix4(i) {
    return xo(this, this, i), this;
  }
  applyQuaternion(i) {
    return Oo(this, this, i), this;
  }
  angle(i) {
    return Ro(this, i);
  }
  lerp(i, s) {
    return _o(this, this, i, s), this;
  }
  smoothLerp(i, s, c) {
    return Mo(this, this, i, s, c), this;
  }
  clone() {
    return new Ct(this[0], this[1], this[2]);
  }
  fromArray(i, s = 0) {
    return (this[0] = i[s]), (this[1] = i[s + 1]), (this[2] = i[s + 2]), this;
  }
  toArray(i = [], s = 0) {
    return (i[s] = this[0]), (i[s + 1] = this[1]), (i[s + 2] = this[2]), i;
  }
  transformDirection(i) {
    const s = this[0],
      c = this[1],
      h = this[2];
    return (
      (this[0] = i[0] * s + i[4] * c + i[8] * h),
      (this[1] = i[1] * s + i[5] * c + i[9] * h),
      (this[2] = i[2] * s + i[6] * c + i[10] * h),
      this.normalize()
    );
  }
}
const b1 = new Ct();
let Uo = 1,
  No = 1,
  E1 = !1;
class Bo {
  constructor(i, s = {}) {
    i.canvas || console.error("gl not passed as first argument to Geometry"),
      (this.gl = i),
      (this.attributes = s),
      (this.id = Uo++),
      (this.VAOs = {}),
      (this.drawRange = { start: 0, count: 0 }),
      (this.instancedCount = 0),
      this.gl.renderer.bindVertexArray(null),
      (this.gl.renderer.currentGeometry = null),
      (this.glState = this.gl.renderer.state);
    for (let c in s) this.addAttribute(c, s[c]);
  }
  addAttribute(i, s) {
    if (
      ((this.attributes[i] = s),
      (s.id = No++),
      (s.size = s.size || 1),
      (s.type =
        s.type ||
        (s.data.constructor === Float32Array
          ? this.gl.FLOAT
          : s.data.constructor === Uint16Array
          ? this.gl.UNSIGNED_SHORT
          : this.gl.UNSIGNED_INT)),
      (s.target =
        i === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER),
      (s.normalized = s.normalized || !1),
      (s.stride = s.stride || 0),
      (s.offset = s.offset || 0),
      (s.count =
        s.count ||
        (s.stride ? s.data.byteLength / s.stride : s.data.length / s.size)),
      (s.divisor = s.instanced || 0),
      (s.needsUpdate = !1),
      (s.usage = s.usage || this.gl.STATIC_DRAW),
      s.buffer || this.updateAttribute(s),
      s.divisor)
    ) {
      if (
        ((this.isInstanced = !0),
        this.instancedCount && this.instancedCount !== s.count * s.divisor)
      )
        return (
          console.warn(
            "geometry has multiple instanced buffers of different length"
          ),
          (this.instancedCount = Math.min(
            this.instancedCount,
            s.count * s.divisor
          ))
        );
      this.instancedCount = s.count * s.divisor;
    } else
      i === "index"
        ? (this.drawRange.count = s.count)
        : this.attributes.index ||
          (this.drawRange.count = Math.max(this.drawRange.count, s.count));
  }
  updateAttribute(i) {
    const s = !i.buffer;
    s && (i.buffer = this.gl.createBuffer()),
      this.glState.boundBuffer !== i.buffer &&
        (this.gl.bindBuffer(i.target, i.buffer),
        (this.glState.boundBuffer = i.buffer)),
      s
        ? this.gl.bufferData(i.target, i.data, i.usage)
        : this.gl.bufferSubData(i.target, 0, i.data),
      (i.needsUpdate = !1);
  }
  setIndex(i) {
    this.addAttribute("index", i);
  }
  setDrawRange(i, s) {
    (this.drawRange.start = i), (this.drawRange.count = s);
  }
  setInstancedCount(i) {
    this.instancedCount = i;
  }
  createVAO(i) {
    (this.VAOs[i.attributeOrder] = this.gl.renderer.createVertexArray()),
      this.gl.renderer.bindVertexArray(this.VAOs[i.attributeOrder]),
      this.bindAttributes(i);
  }
  bindAttributes(i) {
    i.attributeLocations.forEach((s, { name: c, type: h }) => {
      if (!this.attributes[c]) {
        console.warn(`active attribute ${c} not being supplied`);
        return;
      }
      const o = this.attributes[c];
      this.gl.bindBuffer(o.target, o.buffer),
        (this.glState.boundBuffer = o.buffer);
      let g = 1;
      h === 35674 && (g = 2), h === 35675 && (g = 3), h === 35676 && (g = 4);
      const m = o.size / g,
        y = g === 1 ? 0 : g * g * 4,
        v = g === 1 ? 0 : g * 4;
      for (let E = 0; E < g; E++)
        this.gl.vertexAttribPointer(
          s + E,
          m,
          o.type,
          o.normalized,
          o.stride + y,
          o.offset + E * v
        ),
          this.gl.enableVertexAttribArray(s + E),
          this.gl.renderer.vertexAttribDivisor(s + E, o.divisor);
    }),
      this.attributes.index &&
        this.gl.bindBuffer(
          this.gl.ELEMENT_ARRAY_BUFFER,
          this.attributes.index.buffer
        );
  }
  draw({ program: i, mode: s = this.gl.TRIANGLES }) {
    this.gl.renderer.currentGeometry !== `${this.id}_${i.attributeOrder}` &&
      (this.VAOs[i.attributeOrder] || this.createVAO(i),
      this.gl.renderer.bindVertexArray(this.VAOs[i.attributeOrder]),
      (this.gl.renderer.currentGeometry = `${this.id}_${i.attributeOrder}`)),
      i.attributeLocations.forEach((h, { name: o }) => {
        const g = this.attributes[o];
        g.needsUpdate && this.updateAttribute(g);
      });
    let c = 2;
    this.attributes.index?.type === this.gl.UNSIGNED_INT && (c = 4),
      this.isInstanced
        ? this.attributes.index
          ? this.gl.renderer.drawElementsInstanced(
              s,
              this.drawRange.count,
              this.attributes.index.type,
              this.attributes.index.offset + this.drawRange.start * c,
              this.instancedCount
            )
          : this.gl.renderer.drawArraysInstanced(
              s,
              this.drawRange.start,
              this.drawRange.count,
              this.instancedCount
            )
        : this.attributes.index
        ? this.gl.drawElements(
            s,
            this.drawRange.count,
            this.attributes.index.type,
            this.attributes.index.offset + this.drawRange.start * c
          )
        : this.gl.drawArrays(s, this.drawRange.start, this.drawRange.count);
  }
  getPosition() {
    const i = this.attributes.position;
    if (i.data) return i;
    if (!E1)
      return (
        console.warn("No position buffer data found to compute bounds"),
        (E1 = !0)
      );
  }
  computeBoundingBox(i) {
    i || (i = this.getPosition());
    const s = i.data,
      c = i.size;
    this.bounds ||
      (this.bounds = {
        min: new Ct(),
        max: new Ct(),
        center: new Ct(),
        scale: new Ct(),
        radius: 1 / 0,
      });
    const h = this.bounds.min,
      o = this.bounds.max,
      g = this.bounds.center,
      m = this.bounds.scale;
    h.set(1 / 0), o.set(-1 / 0);
    for (let y = 0, v = s.length; y < v; y += c) {
      const E = s[y],
        z = s[y + 1],
        O = s[y + 2];
      (h.x = Math.min(E, h.x)),
        (h.y = Math.min(z, h.y)),
        (h.z = Math.min(O, h.z)),
        (o.x = Math.max(E, o.x)),
        (o.y = Math.max(z, o.y)),
        (o.z = Math.max(O, o.z));
    }
    m.sub(o, h), g.add(h, o).divide(2);
  }
  computeBoundingSphere(i) {
    i || (i = this.getPosition());
    const s = i.data,
      c = i.size;
    this.bounds || this.computeBoundingBox(i);
    let h = 0;
    for (let o = 0, g = s.length; o < g; o += c)
      b1.fromArray(s, o),
        (h = Math.max(h, this.bounds.center.squaredDistance(b1)));
    this.bounds.radius = Math.sqrt(h);
  }
  remove() {
    for (let i in this.VAOs)
      this.gl.renderer.deleteVertexArray(this.VAOs[i]), delete this.VAOs[i];
    for (let i in this.attributes)
      this.gl.deleteBuffer(this.attributes[i].buffer),
        delete this.attributes[i];
  }
}
let Ho = 1;
const A1 = {};
class qo {
  constructor(
    i,
    {
      vertex: s,
      fragment: c,
      uniforms: h = {},
      transparent: o = !1,
      cullFace: g = i.BACK,
      frontFace: m = i.CCW,
      depthTest: y = !0,
      depthWrite: v = !0,
      depthFunc: E = i.LEQUAL,
    } = {}
  ) {
    i.canvas || console.error("gl not passed as first argument to Program"),
      (this.gl = i),
      (this.uniforms = h),
      (this.id = Ho++),
      s || console.warn("vertex shader not supplied"),
      c || console.warn("fragment shader not supplied"),
      (this.transparent = o),
      (this.cullFace = g),
      (this.frontFace = m),
      (this.depthTest = y),
      (this.depthWrite = v),
      (this.depthFunc = E),
      (this.blendFunc = {}),
      (this.blendEquation = {}),
      (this.stencilFunc = {}),
      (this.stencilOp = {}),
      this.transparent &&
        !this.blendFunc.src &&
        (this.gl.renderer.premultipliedAlpha
          ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
          : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)),
      (this.vertexShader = i.createShader(i.VERTEX_SHADER)),
      (this.fragmentShader = i.createShader(i.FRAGMENT_SHADER)),
      (this.program = i.createProgram()),
      i.attachShader(this.program, this.vertexShader),
      i.attachShader(this.program, this.fragmentShader),
      this.setShaders({ vertex: s, fragment: c });
  }
  setShaders({ vertex: i, fragment: s }) {
    if (
      (i &&
        (this.gl.shaderSource(this.vertexShader, i),
        this.gl.compileShader(this.vertexShader),
        this.gl.getShaderInfoLog(this.vertexShader) !== "" &&
          console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${_1(i)}`)),
      s &&
        (this.gl.shaderSource(this.fragmentShader, s),
        this.gl.compileShader(this.fragmentShader),
        this.gl.getShaderInfoLog(this.fragmentShader) !== "" &&
          console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${_1(s)}`)),
      this.gl.linkProgram(this.program),
      !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS))
    )
      return console.warn(this.gl.getProgramInfoLog(this.program));
    this.uniformLocations = new Map();
    let c = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
    for (let g = 0; g < c; g++) {
      let m = this.gl.getActiveUniform(this.program, g);
      this.uniformLocations.set(
        m,
        this.gl.getUniformLocation(this.program, m.name)
      );
      const y = m.name.match(/(\w+)/g);
      (m.uniformName = y[0]), (m.nameComponents = y.slice(1));
    }
    this.attributeLocations = new Map();
    const h = [],
      o = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
    for (let g = 0; g < o; g++) {
      const m = this.gl.getActiveAttrib(this.program, g),
        y = this.gl.getAttribLocation(this.program, m.name);
      y !== -1 && ((h[y] = m.name), this.attributeLocations.set(m, y));
    }
    this.attributeOrder = h.join("");
  }
  setBlendFunc(i, s, c, h) {
    (this.blendFunc.src = i),
      (this.blendFunc.dst = s),
      (this.blendFunc.srcAlpha = c),
      (this.blendFunc.dstAlpha = h),
      i && (this.transparent = !0);
  }
  setBlendEquation(i, s) {
    (this.blendEquation.modeRGB = i), (this.blendEquation.modeAlpha = s);
  }
  setStencilFunc(i, s, c) {
    (this.stencilRef = s),
      (this.stencilFunc.func = i),
      (this.stencilFunc.ref = s),
      (this.stencilFunc.mask = c);
  }
  setStencilOp(i, s, c) {
    (this.stencilOp.stencilFail = i),
      (this.stencilOp.depthFail = s),
      (this.stencilOp.depthPass = c);
  }
  applyState() {
    this.depthTest
      ? this.gl.renderer.enable(this.gl.DEPTH_TEST)
      : this.gl.renderer.disable(this.gl.DEPTH_TEST),
      this.cullFace
        ? this.gl.renderer.enable(this.gl.CULL_FACE)
        : this.gl.renderer.disable(this.gl.CULL_FACE),
      this.blendFunc.src
        ? this.gl.renderer.enable(this.gl.BLEND)
        : this.gl.renderer.disable(this.gl.BLEND),
      this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
      this.gl.renderer.setFrontFace(this.frontFace),
      this.gl.renderer.setDepthMask(this.depthWrite),
      this.gl.renderer.setDepthFunc(this.depthFunc),
      this.blendFunc.src &&
        this.gl.renderer.setBlendFunc(
          this.blendFunc.src,
          this.blendFunc.dst,
          this.blendFunc.srcAlpha,
          this.blendFunc.dstAlpha
        ),
      this.gl.renderer.setBlendEquation(
        this.blendEquation.modeRGB,
        this.blendEquation.modeAlpha
      ),
      this.stencilFunc.func || this.stencilOp.stencilFail
        ? this.gl.renderer.enable(this.gl.STENCIL_TEST)
        : this.gl.renderer.disable(this.gl.STENCIL_TEST),
      this.gl.renderer.setStencilFunc(
        this.stencilFunc.func,
        this.stencilFunc.ref,
        this.stencilFunc.mask
      ),
      this.gl.renderer.setStencilOp(
        this.stencilOp.stencilFail,
        this.stencilOp.depthFail,
        this.stencilOp.depthPass
      );
  }
  use({ flipFaces: i = !1 } = {}) {
    let s = -1;
    this.gl.renderer.state.currentProgram === this.id ||
      (this.gl.useProgram(this.program),
      (this.gl.renderer.state.currentProgram = this.id)),
      this.uniformLocations.forEach((h, o) => {
        let g = this.uniforms[o.uniformName];
        for (const m of o.nameComponents) {
          if (!g) break;
          if (m in g) g = g[m];
          else {
            if (Array.isArray(g.value)) break;
            g = void 0;
            break;
          }
        }
        if (!g) return M1(`Active uniform ${o.name} has not been supplied`);
        if (g && g.value === void 0)
          return M1(`${o.name} uniform is missing a value parameter`);
        if (g.value.texture)
          return (s = s + 1), g.value.update(s), us(this.gl, o.type, h, s);
        if (g.value.length && g.value[0].texture) {
          const m = [];
          return (
            g.value.forEach((y) => {
              (s = s + 1), y.update(s), m.push(s);
            }),
            us(this.gl, o.type, h, m)
          );
        }
        us(this.gl, o.type, h, g.value);
      }),
      this.applyState(),
      i &&
        this.gl.renderer.setFrontFace(
          this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW
        );
  }
  remove() {
    this.gl.deleteProgram(this.program);
  }
}
function us(u, i, s, c) {
  c = c.length ? Co(c) : c;
  const h = u.renderer.state.uniformLocations.get(s);
  if (c.length)
    if (h === void 0 || h.length !== c.length)
      u.renderer.state.uniformLocations.set(s, c.slice(0));
    else {
      if (Yo(h, c)) return;
      h.set ? h.set(c) : Xo(h, c), u.renderer.state.uniformLocations.set(s, h);
    }
  else {
    if (h === c) return;
    u.renderer.state.uniformLocations.set(s, c);
  }
  switch (i) {
    case 5126:
      return c.length ? u.uniform1fv(s, c) : u.uniform1f(s, c);
    case 35664:
      return u.uniform2fv(s, c);
    case 35665:
      return u.uniform3fv(s, c);
    case 35666:
      return u.uniform4fv(s, c);
    case 35670:
    case 5124:
    case 35678:
    case 36306:
    case 35680:
    case 36289:
      return c.length ? u.uniform1iv(s, c) : u.uniform1i(s, c);
    case 35671:
    case 35667:
      return u.uniform2iv(s, c);
    case 35672:
    case 35668:
      return u.uniform3iv(s, c);
    case 35673:
    case 35669:
      return u.uniform4iv(s, c);
    case 35674:
      return u.uniformMatrix2fv(s, !1, c);
    case 35675:
      return u.uniformMatrix3fv(s, !1, c);
    case 35676:
      return u.uniformMatrix4fv(s, !1, c);
  }
}
function _1(u) {
  let i = u.split(`
`);
  for (let s = 0; s < i.length; s++) i[s] = s + 1 + ": " + i[s];
  return i.join(`
`);
}
function Co(u) {
  const i = u.length,
    s = u[0].length;
  if (s === void 0) return u;
  const c = i * s;
  let h = A1[c];
  h || (A1[c] = h = new Float32Array(c));
  for (let o = 0; o < i; o++) h.set(u[o], o * s);
  return h;
}
function Yo(u, i) {
  if (u.length !== i.length) return !1;
  for (let s = 0, c = u.length; s < c; s++) if (u[s] !== i[s]) return !1;
  return !0;
}
function Xo(u, i) {
  for (let s = 0, c = u.length; s < c; s++) u[s] = i[s];
}
let fs = 0;
function M1(u) {
  fs > 100 ||
    (console.warn(u),
    fs++,
    fs > 100 &&
      console.warn("More than 100 program warnings - stopping logs."));
}
const ss = new Ct();
let Go = 1;
class Lo {
  constructor({
    canvas: i = document.createElement("canvas"),
    width: s = 300,
    height: c = 150,
    dpr: h = 1,
    alpha: o = !1,
    depth: g = !0,
    stencil: m = !1,
    antialias: y = !1,
    premultipliedAlpha: v = !1,
    preserveDrawingBuffer: E = !1,
    powerPreference: z = "default",
    autoClear: O = !0,
    webgl: D = 2,
  } = {}) {
    const B = {
      alpha: o,
      depth: g,
      stencil: m,
      antialias: y,
      premultipliedAlpha: v,
      preserveDrawingBuffer: E,
      powerPreference: z,
    };
    (this.dpr = h),
      (this.alpha = o),
      (this.color = !0),
      (this.depth = g),
      (this.stencil = m),
      (this.premultipliedAlpha = v),
      (this.autoClear = O),
      (this.id = Go++),
      D === 2 && (this.gl = i.getContext("webgl2", B)),
      (this.isWebgl2 = !!this.gl),
      this.gl || (this.gl = i.getContext("webgl", B)),
      this.gl || console.error("unable to create webgl context"),
      (this.gl.renderer = this),
      this.setSize(s, c),
      (this.state = {}),
      (this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO }),
      (this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD }),
      (this.state.cullFace = !1),
      (this.state.frontFace = this.gl.CCW),
      (this.state.depthMask = !0),
      (this.state.depthFunc = this.gl.LEQUAL),
      (this.state.premultiplyAlpha = !1),
      (this.state.flipY = !1),
      (this.state.unpackAlignment = 4),
      (this.state.framebuffer = null),
      (this.state.viewport = { x: 0, y: 0, width: null, height: null }),
      (this.state.textureUnits = []),
      (this.state.activeTextureUnit = 0),
      (this.state.boundBuffer = null),
      (this.state.uniformLocations = new Map()),
      (this.state.currentProgram = null),
      (this.extensions = {}),
      this.isWebgl2
        ? (this.getExtension("EXT_color_buffer_float"),
          this.getExtension("OES_texture_float_linear"))
        : (this.getExtension("OES_texture_float"),
          this.getExtension("OES_texture_float_linear"),
          this.getExtension("OES_texture_half_float"),
          this.getExtension("OES_texture_half_float_linear"),
          this.getExtension("OES_element_index_uint"),
          this.getExtension("OES_standard_derivatives"),
          this.getExtension("EXT_sRGB"),
          this.getExtension("WEBGL_depth_texture"),
          this.getExtension("WEBGL_draw_buffers")),
      this.getExtension("WEBGL_compressed_texture_astc"),
      this.getExtension("EXT_texture_compression_bptc"),
      this.getExtension("WEBGL_compressed_texture_s3tc"),
      this.getExtension("WEBGL_compressed_texture_etc1"),
      this.getExtension("WEBGL_compressed_texture_pvrtc"),
      this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
      (this.vertexAttribDivisor = this.getExtension(
        "ANGLE_instanced_arrays",
        "vertexAttribDivisor",
        "vertexAttribDivisorANGLE"
      )),
      (this.drawArraysInstanced = this.getExtension(
        "ANGLE_instanced_arrays",
        "drawArraysInstanced",
        "drawArraysInstancedANGLE"
      )),
      (this.drawElementsInstanced = this.getExtension(
        "ANGLE_instanced_arrays",
        "drawElementsInstanced",
        "drawElementsInstancedANGLE"
      )),
      (this.createVertexArray = this.getExtension(
        "OES_vertex_array_object",
        "createVertexArray",
        "createVertexArrayOES"
      )),
      (this.bindVertexArray = this.getExtension(
        "OES_vertex_array_object",
        "bindVertexArray",
        "bindVertexArrayOES"
      )),
      (this.deleteVertexArray = this.getExtension(
        "OES_vertex_array_object",
        "deleteVertexArray",
        "deleteVertexArrayOES"
      )),
      (this.drawBuffers = this.getExtension(
        "WEBGL_draw_buffers",
        "drawBuffers",
        "drawBuffersWEBGL"
      )),
      (this.parameters = {}),
      (this.parameters.maxTextureUnits = this.gl.getParameter(
        this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS
      )),
      (this.parameters.maxAnisotropy = this.getExtension(
        "EXT_texture_filter_anisotropic"
      )
        ? this.gl.getParameter(
            this.getExtension("EXT_texture_filter_anisotropic")
              .MAX_TEXTURE_MAX_ANISOTROPY_EXT
          )
        : 0);
  }
  setSize(i, s) {
    (this.width = i),
      (this.height = s),
      (this.gl.canvas.width = i * this.dpr),
      (this.gl.canvas.height = s * this.dpr),
      this.gl.canvas.style &&
        Object.assign(this.gl.canvas.style, {
          width: i + "px",
          height: s + "px",
        });
  }
  setViewport(i, s, c = 0, h = 0) {
    (this.state.viewport.width === i && this.state.viewport.height === s) ||
      ((this.state.viewport.width = i),
      (this.state.viewport.height = s),
      (this.state.viewport.x = c),
      (this.state.viewport.y = h),
      this.gl.viewport(c, h, i, s));
  }
  setScissor(i, s, c = 0, h = 0) {
    this.gl.scissor(c, h, i, s);
  }
  enable(i) {
    this.state[i] !== !0 && (this.gl.enable(i), (this.state[i] = !0));
  }
  disable(i) {
    this.state[i] !== !1 && (this.gl.disable(i), (this.state[i] = !1));
  }
  setBlendFunc(i, s, c, h) {
    (this.state.blendFunc.src === i &&
      this.state.blendFunc.dst === s &&
      this.state.blendFunc.srcAlpha === c &&
      this.state.blendFunc.dstAlpha === h) ||
      ((this.state.blendFunc.src = i),
      (this.state.blendFunc.dst = s),
      (this.state.blendFunc.srcAlpha = c),
      (this.state.blendFunc.dstAlpha = h),
      c !== void 0
        ? this.gl.blendFuncSeparate(i, s, c, h)
        : this.gl.blendFunc(i, s));
  }
  setBlendEquation(i, s) {
    (i = i || this.gl.FUNC_ADD),
      !(
        this.state.blendEquation.modeRGB === i &&
        this.state.blendEquation.modeAlpha === s
      ) &&
        ((this.state.blendEquation.modeRGB = i),
        (this.state.blendEquation.modeAlpha = s),
        s !== void 0
          ? this.gl.blendEquationSeparate(i, s)
          : this.gl.blendEquation(i));
  }
  setCullFace(i) {
    this.state.cullFace !== i &&
      ((this.state.cullFace = i), this.gl.cullFace(i));
  }
  setFrontFace(i) {
    this.state.frontFace !== i &&
      ((this.state.frontFace = i), this.gl.frontFace(i));
  }
  setDepthMask(i) {
    this.state.depthMask !== i &&
      ((this.state.depthMask = i), this.gl.depthMask(i));
  }
  setDepthFunc(i) {
    this.state.depthFunc !== i &&
      ((this.state.depthFunc = i), this.gl.depthFunc(i));
  }
  setStencilMask(i) {
    this.state.stencilMask !== i &&
      ((this.state.stencilMask = i), this.gl.stencilMask(i));
  }
  setStencilFunc(i, s, c) {
    (this.state.stencilFunc === i &&
      this.state.stencilRef === s &&
      this.state.stencilFuncMask === c) ||
      ((this.state.stencilFunc = i || this.gl.ALWAYS),
      (this.state.stencilRef = s || 0),
      (this.state.stencilFuncMask = c || 0),
      this.gl.stencilFunc(i || this.gl.ALWAYS, s || 0, c || 0));
  }
  setStencilOp(i, s, c) {
    (this.state.stencilFail === i &&
      this.state.stencilDepthFail === s &&
      this.state.stencilDepthPass === c) ||
      ((this.state.stencilFail = i),
      (this.state.stencilDepthFail = s),
      (this.state.stencilDepthPass = c),
      this.gl.stencilOp(i, s, c));
  }
  activeTexture(i) {
    this.state.activeTextureUnit !== i &&
      ((this.state.activeTextureUnit = i),
      this.gl.activeTexture(this.gl.TEXTURE0 + i));
  }
  bindFramebuffer({ target: i = this.gl.FRAMEBUFFER, buffer: s = null } = {}) {
    this.state.framebuffer !== s &&
      ((this.state.framebuffer = s), this.gl.bindFramebuffer(i, s));
  }
  getExtension(i, s, c) {
    return s && this.gl[s]
      ? this.gl[s].bind(this.gl)
      : (this.extensions[i] || (this.extensions[i] = this.gl.getExtension(i)),
        s
          ? this.extensions[i]
            ? this.extensions[i][c].bind(this.extensions[i])
            : null
          : this.extensions[i]);
  }
  sortOpaque(i, s) {
    return i.renderOrder !== s.renderOrder
      ? i.renderOrder - s.renderOrder
      : i.program.id !== s.program.id
      ? i.program.id - s.program.id
      : i.zDepth !== s.zDepth
      ? i.zDepth - s.zDepth
      : s.id - i.id;
  }
  sortTransparent(i, s) {
    return i.renderOrder !== s.renderOrder
      ? i.renderOrder - s.renderOrder
      : i.zDepth !== s.zDepth
      ? s.zDepth - i.zDepth
      : s.id - i.id;
  }
  sortUI(i, s) {
    return i.renderOrder !== s.renderOrder
      ? i.renderOrder - s.renderOrder
      : i.program.id !== s.program.id
      ? i.program.id - s.program.id
      : s.id - i.id;
  }
  getRenderList({ scene: i, camera: s, frustumCull: c, sort: h }) {
    let o = [];
    if (
      (s && c && s.updateFrustum(),
      i.traverse((g) => {
        if (!g.visible) return !0;
        g.draw &&
          ((c && g.frustumCulled && s && !s.frustumIntersectsMesh(g)) ||
            o.push(g));
      }),
      h)
    ) {
      const g = [],
        m = [],
        y = [];
      o.forEach((v) => {
        v.program.transparent
          ? v.program.depthTest
            ? m.push(v)
            : y.push(v)
          : g.push(v),
          (v.zDepth = 0),
          !(v.renderOrder !== 0 || !v.program.depthTest || !s) &&
            (v.worldMatrix.getTranslation(ss),
            ss.applyMatrix4(s.projectionViewMatrix),
            (v.zDepth = ss.z));
      }),
        g.sort(this.sortOpaque),
        m.sort(this.sortTransparent),
        y.sort(this.sortUI),
        (o = g.concat(m, y));
    }
    return o;
  }
  render({
    scene: i,
    camera: s,
    target: c = null,
    update: h = !0,
    sort: o = !0,
    frustumCull: g = !0,
    clear: m,
  }) {
    c === null
      ? (this.bindFramebuffer(),
        this.setViewport(this.width * this.dpr, this.height * this.dpr))
      : (this.bindFramebuffer(c), this.setViewport(c.width, c.height)),
      (m || (this.autoClear && m !== !1)) &&
        (this.depth &&
          (!c || c.depth) &&
          (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)),
        (this.stencil || !c || c.stencil) &&
          (this.enable(this.gl.STENCIL_TEST), this.setStencilMask(255)),
        this.gl.clear(
          (this.color ? this.gl.COLOR_BUFFER_BIT : 0) |
            (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) |
            (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
        )),
      h && i.updateMatrixWorld(),
      s && s.updateMatrixWorld(),
      this.getRenderList({
        scene: i,
        camera: s,
        frustumCull: g,
        sort: o,
      }).forEach((v) => {
        v.draw({ camera: s });
      });
  }
}
function jo(u, i) {
  return (u[0] = i[0]), (u[1] = i[1]), (u[2] = i[2]), (u[3] = i[3]), u;
}
function Qo(u, i, s, c, h) {
  return (u[0] = i), (u[1] = s), (u[2] = c), (u[3] = h), u;
}
function Zo(u, i) {
  let s = i[0],
    c = i[1],
    h = i[2],
    o = i[3],
    g = s * s + c * c + h * h + o * o;
  return (
    g > 0 && (g = 1 / Math.sqrt(g)),
    (u[0] = s * g),
    (u[1] = c * g),
    (u[2] = h * g),
    (u[3] = o * g),
    u
  );
}
function Vo(u, i) {
  return u[0] * i[0] + u[1] * i[1] + u[2] * i[2] + u[3] * i[3];
}
function wo(u) {
  return (u[0] = 0), (u[1] = 0), (u[2] = 0), (u[3] = 1), u;
}
function Ko(u, i, s) {
  s = s * 0.5;
  let c = Math.sin(s);
  return (
    (u[0] = c * i[0]),
    (u[1] = c * i[1]),
    (u[2] = c * i[2]),
    (u[3] = Math.cos(s)),
    u
  );
}
function T1(u, i, s) {
  let c = i[0],
    h = i[1],
    o = i[2],
    g = i[3],
    m = s[0],
    y = s[1],
    v = s[2],
    E = s[3];
  return (
    (u[0] = c * E + g * m + h * v - o * y),
    (u[1] = h * E + g * y + o * m - c * v),
    (u[2] = o * E + g * v + c * y - h * m),
    (u[3] = g * E - c * m - h * y - o * v),
    u
  );
}
function Jo(u, i, s) {
  s *= 0.5;
  let c = i[0],
    h = i[1],
    o = i[2],
    g = i[3],
    m = Math.sin(s),
    y = Math.cos(s);
  return (
    (u[0] = c * y + g * m),
    (u[1] = h * y + o * m),
    (u[2] = o * y - h * m),
    (u[3] = g * y - c * m),
    u
  );
}
function Fo(u, i, s) {
  s *= 0.5;
  let c = i[0],
    h = i[1],
    o = i[2],
    g = i[3],
    m = Math.sin(s),
    y = Math.cos(s);
  return (
    (u[0] = c * y - o * m),
    (u[1] = h * y + g * m),
    (u[2] = o * y + c * m),
    (u[3] = g * y - h * m),
    u
  );
}
function Wo(u, i, s) {
  s *= 0.5;
  let c = i[0],
    h = i[1],
    o = i[2],
    g = i[3],
    m = Math.sin(s),
    y = Math.cos(s);
  return (
    (u[0] = c * y + h * m),
    (u[1] = h * y - c * m),
    (u[2] = o * y + g * m),
    (u[3] = g * y - o * m),
    u
  );
}
function $o(u, i, s, c) {
  let h = i[0],
    o = i[1],
    g = i[2],
    m = i[3],
    y = s[0],
    v = s[1],
    E = s[2],
    z = s[3],
    O,
    D,
    B,
    q,
    Y;
  return (
    (D = h * y + o * v + g * E + m * z),
    D < 0 && ((D = -D), (y = -y), (v = -v), (E = -E), (z = -z)),
    1 - D > 1e-6
      ? ((O = Math.acos(D)),
        (B = Math.sin(O)),
        (q = Math.sin((1 - c) * O) / B),
        (Y = Math.sin(c * O) / B))
      : ((q = 1 - c), (Y = c)),
    (u[0] = q * h + Y * y),
    (u[1] = q * o + Y * v),
    (u[2] = q * g + Y * E),
    (u[3] = q * m + Y * z),
    u
  );
}
function ko(u, i) {
  let s = i[0],
    c = i[1],
    h = i[2],
    o = i[3],
    g = s * s + c * c + h * h + o * o,
    m = g ? 1 / g : 0;
  return (u[0] = -s * m), (u[1] = -c * m), (u[2] = -h * m), (u[3] = o * m), u;
}
function Io(u, i) {
  return (u[0] = -i[0]), (u[1] = -i[1]), (u[2] = -i[2]), (u[3] = i[3]), u;
}
function Po(u, i) {
  let s = i[0] + i[4] + i[8],
    c;
  if (s > 0)
    (c = Math.sqrt(s + 1)),
      (u[3] = 0.5 * c),
      (c = 0.5 / c),
      (u[0] = (i[5] - i[7]) * c),
      (u[1] = (i[6] - i[2]) * c),
      (u[2] = (i[1] - i[3]) * c);
  else {
    let h = 0;
    i[4] > i[0] && (h = 1), i[8] > i[h * 3 + h] && (h = 2);
    let o = (h + 1) % 3,
      g = (h + 2) % 3;
    (c = Math.sqrt(i[h * 3 + h] - i[o * 3 + o] - i[g * 3 + g] + 1)),
      (u[h] = 0.5 * c),
      (c = 0.5 / c),
      (u[3] = (i[o * 3 + g] - i[g * 3 + o]) * c),
      (u[o] = (i[o * 3 + h] + i[h * 3 + o]) * c),
      (u[g] = (i[g * 3 + h] + i[h * 3 + g]) * c);
  }
  return u;
}
function tg(u, i, s = "YXZ") {
  let c = Math.sin(i[0] * 0.5),
    h = Math.cos(i[0] * 0.5),
    o = Math.sin(i[1] * 0.5),
    g = Math.cos(i[1] * 0.5),
    m = Math.sin(i[2] * 0.5),
    y = Math.cos(i[2] * 0.5);
  return (
    s === "XYZ"
      ? ((u[0] = c * g * y + h * o * m),
        (u[1] = h * o * y - c * g * m),
        (u[2] = h * g * m + c * o * y),
        (u[3] = h * g * y - c * o * m))
      : s === "YXZ"
      ? ((u[0] = c * g * y + h * o * m),
        (u[1] = h * o * y - c * g * m),
        (u[2] = h * g * m - c * o * y),
        (u[3] = h * g * y + c * o * m))
      : s === "ZXY"
      ? ((u[0] = c * g * y - h * o * m),
        (u[1] = h * o * y + c * g * m),
        (u[2] = h * g * m + c * o * y),
        (u[3] = h * g * y - c * o * m))
      : s === "ZYX"
      ? ((u[0] = c * g * y - h * o * m),
        (u[1] = h * o * y + c * g * m),
        (u[2] = h * g * m - c * o * y),
        (u[3] = h * g * y + c * o * m))
      : s === "YZX"
      ? ((u[0] = c * g * y + h * o * m),
        (u[1] = h * o * y + c * g * m),
        (u[2] = h * g * m - c * o * y),
        (u[3] = h * g * y - c * o * m))
      : s === "XZY" &&
        ((u[0] = c * g * y - h * o * m),
        (u[1] = h * o * y - c * g * m),
        (u[2] = h * g * m + c * o * y),
        (u[3] = h * g * y + c * o * m)),
    u
  );
}
const eg = jo,
  lg = Qo,
  ag = Vo,
  ig = Zo;
class ng extends Array {
  constructor(i = 0, s = 0, c = 0, h = 1) {
    super(i, s, c, h), (this.onChange = () => {}), (this._target = this);
    const o = ["0", "1", "2", "3"];
    return new Proxy(this, {
      set(g, m) {
        const y = Reflect.set(...arguments);
        return y && o.includes(m) && g.onChange(), y;
      },
    });
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  get w() {
    return this[3];
  }
  set x(i) {
    (this._target[0] = i), this.onChange();
  }
  set y(i) {
    (this._target[1] = i), this.onChange();
  }
  set z(i) {
    (this._target[2] = i), this.onChange();
  }
  set w(i) {
    (this._target[3] = i), this.onChange();
  }
  identity() {
    return wo(this._target), this.onChange(), this;
  }
  set(i, s, c, h) {
    return i.length
      ? this.copy(i)
      : (lg(this._target, i, s, c, h), this.onChange(), this);
  }
  rotateX(i) {
    return Jo(this._target, this._target, i), this.onChange(), this;
  }
  rotateY(i) {
    return Fo(this._target, this._target, i), this.onChange(), this;
  }
  rotateZ(i) {
    return Wo(this._target, this._target, i), this.onChange(), this;
  }
  inverse(i = this._target) {
    return ko(this._target, i), this.onChange(), this;
  }
  conjugate(i = this._target) {
    return Io(this._target, i), this.onChange(), this;
  }
  copy(i) {
    return eg(this._target, i), this.onChange(), this;
  }
  normalize(i = this._target) {
    return ig(this._target, i), this.onChange(), this;
  }
  multiply(i, s) {
    return (
      s ? T1(this._target, i, s) : T1(this._target, this._target, i),
      this.onChange(),
      this
    );
  }
  dot(i) {
    return ag(this._target, i);
  }
  fromMatrix3(i) {
    return Po(this._target, i), this.onChange(), this;
  }
  fromEuler(i, s) {
    return tg(this._target, i, i.order), s || this.onChange(), this;
  }
  fromAxisAngle(i, s) {
    return Ko(this._target, i, s), this.onChange(), this;
  }
  slerp(i, s) {
    return $o(this._target, this._target, i, s), this.onChange(), this;
  }
  fromArray(i, s = 0) {
    return (
      (this._target[0] = i[s]),
      (this._target[1] = i[s + 1]),
      (this._target[2] = i[s + 2]),
      (this._target[3] = i[s + 3]),
      this.onChange(),
      this
    );
  }
  toArray(i = [], s = 0) {
    return (
      (i[s] = this[0]),
      (i[s + 1] = this[1]),
      (i[s + 2] = this[2]),
      (i[s + 3] = this[3]),
      i
    );
  }
}
const ug = 1e-6;
function fg(u, i) {
  return (
    (u[0] = i[0]),
    (u[1] = i[1]),
    (u[2] = i[2]),
    (u[3] = i[3]),
    (u[4] = i[4]),
    (u[5] = i[5]),
    (u[6] = i[6]),
    (u[7] = i[7]),
    (u[8] = i[8]),
    (u[9] = i[9]),
    (u[10] = i[10]),
    (u[11] = i[11]),
    (u[12] = i[12]),
    (u[13] = i[13]),
    (u[14] = i[14]),
    (u[15] = i[15]),
    u
  );
}
function sg(u, i, s, c, h, o, g, m, y, v, E, z, O, D, B, q, Y) {
  return (
    (u[0] = i),
    (u[1] = s),
    (u[2] = c),
    (u[3] = h),
    (u[4] = o),
    (u[5] = g),
    (u[6] = m),
    (u[7] = y),
    (u[8] = v),
    (u[9] = E),
    (u[10] = z),
    (u[11] = O),
    (u[12] = D),
    (u[13] = B),
    (u[14] = q),
    (u[15] = Y),
    u
  );
}
function cg(u) {
  return (
    (u[0] = 1),
    (u[1] = 0),
    (u[2] = 0),
    (u[3] = 0),
    (u[4] = 0),
    (u[5] = 1),
    (u[6] = 0),
    (u[7] = 0),
    (u[8] = 0),
    (u[9] = 0),
    (u[10] = 1),
    (u[11] = 0),
    (u[12] = 0),
    (u[13] = 0),
    (u[14] = 0),
    (u[15] = 1),
    u
  );
}
function rg(u, i) {
  let s = i[0],
    c = i[1],
    h = i[2],
    o = i[3],
    g = i[4],
    m = i[5],
    y = i[6],
    v = i[7],
    E = i[8],
    z = i[9],
    O = i[10],
    D = i[11],
    B = i[12],
    q = i[13],
    Y = i[14],
    X = i[15],
    et = s * m - c * g,
    K = s * y - h * g,
    Q = s * v - o * g,
    G = c * y - h * m,
    V = c * v - o * m,
    nt = h * v - o * y,
    rt = E * q - z * B,
    ot = E * Y - O * B,
    St = E * X - D * B,
    yt = z * Y - O * q,
    st = z * X - D * q,
    Tt = O * X - D * Y,
    P = et * Tt - K * st + Q * yt + G * St - V * ot + nt * rt;
  return P
    ? ((P = 1 / P),
      (u[0] = (m * Tt - y * st + v * yt) * P),
      (u[1] = (h * st - c * Tt - o * yt) * P),
      (u[2] = (q * nt - Y * V + X * G) * P),
      (u[3] = (O * V - z * nt - D * G) * P),
      (u[4] = (y * St - g * Tt - v * ot) * P),
      (u[5] = (s * Tt - h * St + o * ot) * P),
      (u[6] = (Y * Q - B * nt - X * K) * P),
      (u[7] = (E * nt - O * Q + D * K) * P),
      (u[8] = (g * st - m * St + v * rt) * P),
      (u[9] = (c * St - s * st - o * rt) * P),
      (u[10] = (B * V - q * Q + X * et) * P),
      (u[11] = (z * Q - E * V - D * et) * P),
      (u[12] = (m * ot - g * yt - y * rt) * P),
      (u[13] = (s * yt - c * ot + h * rt) * P),
      (u[14] = (q * K - B * G - Y * et) * P),
      (u[15] = (E * G - z * K + O * et) * P),
      u)
    : null;
}
function H1(u) {
  let i = u[0],
    s = u[1],
    c = u[2],
    h = u[3],
    o = u[4],
    g = u[5],
    m = u[6],
    y = u[7],
    v = u[8],
    E = u[9],
    z = u[10],
    O = u[11],
    D = u[12],
    B = u[13],
    q = u[14],
    Y = u[15],
    X = i * g - s * o,
    et = i * m - c * o,
    K = i * y - h * o,
    Q = s * m - c * g,
    G = s * y - h * g,
    V = c * y - h * m,
    nt = v * B - E * D,
    rt = v * q - z * D,
    ot = v * Y - O * D,
    St = E * q - z * B,
    yt = E * Y - O * B,
    st = z * Y - O * q;
  return X * st - et * yt + K * St + Q * ot - G * rt + V * nt;
}
function x1(u, i, s) {
  let c = i[0],
    h = i[1],
    o = i[2],
    g = i[3],
    m = i[4],
    y = i[5],
    v = i[6],
    E = i[7],
    z = i[8],
    O = i[9],
    D = i[10],
    B = i[11],
    q = i[12],
    Y = i[13],
    X = i[14],
    et = i[15],
    K = s[0],
    Q = s[1],
    G = s[2],
    V = s[3];
  return (
    (u[0] = K * c + Q * m + G * z + V * q),
    (u[1] = K * h + Q * y + G * O + V * Y),
    (u[2] = K * o + Q * v + G * D + V * X),
    (u[3] = K * g + Q * E + G * B + V * et),
    (K = s[4]),
    (Q = s[5]),
    (G = s[6]),
    (V = s[7]),
    (u[4] = K * c + Q * m + G * z + V * q),
    (u[5] = K * h + Q * y + G * O + V * Y),
    (u[6] = K * o + Q * v + G * D + V * X),
    (u[7] = K * g + Q * E + G * B + V * et),
    (K = s[8]),
    (Q = s[9]),
    (G = s[10]),
    (V = s[11]),
    (u[8] = K * c + Q * m + G * z + V * q),
    (u[9] = K * h + Q * y + G * O + V * Y),
    (u[10] = K * o + Q * v + G * D + V * X),
    (u[11] = K * g + Q * E + G * B + V * et),
    (K = s[12]),
    (Q = s[13]),
    (G = s[14]),
    (V = s[15]),
    (u[12] = K * c + Q * m + G * z + V * q),
    (u[13] = K * h + Q * y + G * O + V * Y),
    (u[14] = K * o + Q * v + G * D + V * X),
    (u[15] = K * g + Q * E + G * B + V * et),
    u
  );
}
function hg(u, i, s) {
  let c = s[0],
    h = s[1],
    o = s[2],
    g,
    m,
    y,
    v,
    E,
    z,
    O,
    D,
    B,
    q,
    Y,
    X;
  return (
    i === u
      ? ((u[12] = i[0] * c + i[4] * h + i[8] * o + i[12]),
        (u[13] = i[1] * c + i[5] * h + i[9] * o + i[13]),
        (u[14] = i[2] * c + i[6] * h + i[10] * o + i[14]),
        (u[15] = i[3] * c + i[7] * h + i[11] * o + i[15]))
      : ((g = i[0]),
        (m = i[1]),
        (y = i[2]),
        (v = i[3]),
        (E = i[4]),
        (z = i[5]),
        (O = i[6]),
        (D = i[7]),
        (B = i[8]),
        (q = i[9]),
        (Y = i[10]),
        (X = i[11]),
        (u[0] = g),
        (u[1] = m),
        (u[2] = y),
        (u[3] = v),
        (u[4] = E),
        (u[5] = z),
        (u[6] = O),
        (u[7] = D),
        (u[8] = B),
        (u[9] = q),
        (u[10] = Y),
        (u[11] = X),
        (u[12] = g * c + E * h + B * o + i[12]),
        (u[13] = m * c + z * h + q * o + i[13]),
        (u[14] = y * c + O * h + Y * o + i[14]),
        (u[15] = v * c + D * h + X * o + i[15])),
    u
  );
}
function dg(u, i, s) {
  let c = s[0],
    h = s[1],
    o = s[2];
  return (
    (u[0] = i[0] * c),
    (u[1] = i[1] * c),
    (u[2] = i[2] * c),
    (u[3] = i[3] * c),
    (u[4] = i[4] * h),
    (u[5] = i[5] * h),
    (u[6] = i[6] * h),
    (u[7] = i[7] * h),
    (u[8] = i[8] * o),
    (u[9] = i[9] * o),
    (u[10] = i[10] * o),
    (u[11] = i[11] * o),
    (u[12] = i[12]),
    (u[13] = i[13]),
    (u[14] = i[14]),
    (u[15] = i[15]),
    u
  );
}
function og(u, i, s, c) {
  let h = c[0],
    o = c[1],
    g = c[2],
    m = Math.hypot(h, o, g),
    y,
    v,
    E,
    z,
    O,
    D,
    B,
    q,
    Y,
    X,
    et,
    K,
    Q,
    G,
    V,
    nt,
    rt,
    ot,
    St,
    yt,
    st,
    Tt,
    P,
    Rt;
  return Math.abs(m) < ug
    ? null
    : ((m = 1 / m),
      (h *= m),
      (o *= m),
      (g *= m),
      (y = Math.sin(s)),
      (v = Math.cos(s)),
      (E = 1 - v),
      (z = i[0]),
      (O = i[1]),
      (D = i[2]),
      (B = i[3]),
      (q = i[4]),
      (Y = i[5]),
      (X = i[6]),
      (et = i[7]),
      (K = i[8]),
      (Q = i[9]),
      (G = i[10]),
      (V = i[11]),
      (nt = h * h * E + v),
      (rt = o * h * E + g * y),
      (ot = g * h * E - o * y),
      (St = h * o * E - g * y),
      (yt = o * o * E + v),
      (st = g * o * E + h * y),
      (Tt = h * g * E + o * y),
      (P = o * g * E - h * y),
      (Rt = g * g * E + v),
      (u[0] = z * nt + q * rt + K * ot),
      (u[1] = O * nt + Y * rt + Q * ot),
      (u[2] = D * nt + X * rt + G * ot),
      (u[3] = B * nt + et * rt + V * ot),
      (u[4] = z * St + q * yt + K * st),
      (u[5] = O * St + Y * yt + Q * st),
      (u[6] = D * St + X * yt + G * st),
      (u[7] = B * St + et * yt + V * st),
      (u[8] = z * Tt + q * P + K * Rt),
      (u[9] = O * Tt + Y * P + Q * Rt),
      (u[10] = D * Tt + X * P + G * Rt),
      (u[11] = B * Tt + et * P + V * Rt),
      i !== u &&
        ((u[12] = i[12]), (u[13] = i[13]), (u[14] = i[14]), (u[15] = i[15])),
      u);
}
function gg(u, i) {
  return (u[0] = i[12]), (u[1] = i[13]), (u[2] = i[14]), u;
}
function q1(u, i) {
  let s = i[0],
    c = i[1],
    h = i[2],
    o = i[4],
    g = i[5],
    m = i[6],
    y = i[8],
    v = i[9],
    E = i[10];
  return (
    (u[0] = Math.hypot(s, c, h)),
    (u[1] = Math.hypot(o, g, m)),
    (u[2] = Math.hypot(y, v, E)),
    u
  );
}
function yg(u) {
  let i = u[0],
    s = u[1],
    c = u[2],
    h = u[4],
    o = u[5],
    g = u[6],
    m = u[8],
    y = u[9],
    v = u[10];
  const E = i * i + s * s + c * c,
    z = h * h + o * o + g * g,
    O = m * m + y * y + v * v;
  return Math.sqrt(Math.max(E, z, O));
}
const C1 = (function () {
  const u = [1, 1, 1];
  return function (i, s) {
    let c = u;
    q1(c, s);
    let h = 1 / c[0],
      o = 1 / c[1],
      g = 1 / c[2],
      m = s[0] * h,
      y = s[1] * o,
      v = s[2] * g,
      E = s[4] * h,
      z = s[5] * o,
      O = s[6] * g,
      D = s[8] * h,
      B = s[9] * o,
      q = s[10] * g,
      Y = m + z + q,
      X = 0;
    return (
      Y > 0
        ? ((X = Math.sqrt(Y + 1) * 2),
          (i[3] = 0.25 * X),
          (i[0] = (O - B) / X),
          (i[1] = (D - v) / X),
          (i[2] = (y - E) / X))
        : m > z && m > q
        ? ((X = Math.sqrt(1 + m - z - q) * 2),
          (i[3] = (O - B) / X),
          (i[0] = 0.25 * X),
          (i[1] = (y + E) / X),
          (i[2] = (D + v) / X))
        : z > q
        ? ((X = Math.sqrt(1 + z - m - q) * 2),
          (i[3] = (D - v) / X),
          (i[0] = (y + E) / X),
          (i[1] = 0.25 * X),
          (i[2] = (O + B) / X))
        : ((X = Math.sqrt(1 + q - m - z) * 2),
          (i[3] = (y - E) / X),
          (i[0] = (D + v) / X),
          (i[1] = (O + B) / X),
          (i[2] = 0.25 * X)),
      i
    );
  };
})();
function vg(u, i, s, c) {
  let h = pi([u[0], u[1], u[2]]);
  const o = pi([u[4], u[5], u[6]]),
    g = pi([u[8], u[9], u[10]]);
  H1(u) < 0 && (h = -h), (s[0] = u[12]), (s[1] = u[13]), (s[2] = u[14]);
  const y = u.slice(),
    v = 1 / h,
    E = 1 / o,
    z = 1 / g;
  (y[0] *= v),
    (y[1] *= v),
    (y[2] *= v),
    (y[4] *= E),
    (y[5] *= E),
    (y[6] *= E),
    (y[8] *= z),
    (y[9] *= z),
    (y[10] *= z),
    C1(i, y),
    (c[0] = h),
    (c[1] = o),
    (c[2] = g);
}
function mg(u, i, s, c) {
  const h = u,
    o = i[0],
    g = i[1],
    m = i[2],
    y = i[3],
    v = o + o,
    E = g + g,
    z = m + m,
    O = o * v,
    D = o * E,
    B = o * z,
    q = g * E,
    Y = g * z,
    X = m * z,
    et = y * v,
    K = y * E,
    Q = y * z,
    G = c[0],
    V = c[1],
    nt = c[2];
  return (
    (h[0] = (1 - (q + X)) * G),
    (h[1] = (D + Q) * G),
    (h[2] = (B - K) * G),
    (h[3] = 0),
    (h[4] = (D - Q) * V),
    (h[5] = (1 - (O + X)) * V),
    (h[6] = (Y + et) * V),
    (h[7] = 0),
    (h[8] = (B + K) * nt),
    (h[9] = (Y - et) * nt),
    (h[10] = (1 - (O + q)) * nt),
    (h[11] = 0),
    (h[12] = s[0]),
    (h[13] = s[1]),
    (h[14] = s[2]),
    (h[15] = 1),
    h
  );
}
function Sg(u, i) {
  let s = i[0],
    c = i[1],
    h = i[2],
    o = i[3],
    g = s + s,
    m = c + c,
    y = h + h,
    v = s * g,
    E = c * g,
    z = c * m,
    O = h * g,
    D = h * m,
    B = h * y,
    q = o * g,
    Y = o * m,
    X = o * y;
  return (
    (u[0] = 1 - z - B),
    (u[1] = E + X),
    (u[2] = O - Y),
    (u[3] = 0),
    (u[4] = E - X),
    (u[5] = 1 - v - B),
    (u[6] = D + q),
    (u[7] = 0),
    (u[8] = O + Y),
    (u[9] = D - q),
    (u[10] = 1 - v - z),
    (u[11] = 0),
    (u[12] = 0),
    (u[13] = 0),
    (u[14] = 0),
    (u[15] = 1),
    u
  );
}
function pg(u, i, s, c, h) {
  let o = 1 / Math.tan(i / 2),
    g = 1 / (c - h);
  return (
    (u[0] = o / s),
    (u[1] = 0),
    (u[2] = 0),
    (u[3] = 0),
    (u[4] = 0),
    (u[5] = o),
    (u[6] = 0),
    (u[7] = 0),
    (u[8] = 0),
    (u[9] = 0),
    (u[10] = (h + c) * g),
    (u[11] = -1),
    (u[12] = 0),
    (u[13] = 0),
    (u[14] = 2 * h * c * g),
    (u[15] = 0),
    u
  );
}
function bg(u, i, s, c, h, o, g) {
  let m = 1 / (i - s),
    y = 1 / (c - h),
    v = 1 / (o - g);
  return (
    (u[0] = -2 * m),
    (u[1] = 0),
    (u[2] = 0),
    (u[3] = 0),
    (u[4] = 0),
    (u[5] = -2 * y),
    (u[6] = 0),
    (u[7] = 0),
    (u[8] = 0),
    (u[9] = 0),
    (u[10] = 2 * v),
    (u[11] = 0),
    (u[12] = (i + s) * m),
    (u[13] = (h + c) * y),
    (u[14] = (g + o) * v),
    (u[15] = 1),
    u
  );
}
function Eg(u, i, s, c) {
  let h = i[0],
    o = i[1],
    g = i[2],
    m = c[0],
    y = c[1],
    v = c[2],
    E = h - s[0],
    z = o - s[1],
    O = g - s[2],
    D = E * E + z * z + O * O;
  D === 0 ? (O = 1) : ((D = 1 / Math.sqrt(D)), (E *= D), (z *= D), (O *= D));
  let B = y * O - v * z,
    q = v * E - m * O,
    Y = m * z - y * E;
  return (
    (D = B * B + q * q + Y * Y),
    D === 0 &&
      (v ? (m += 1e-6) : y ? (v += 1e-6) : (y += 1e-6),
      (B = y * O - v * z),
      (q = v * E - m * O),
      (Y = m * z - y * E),
      (D = B * B + q * q + Y * Y)),
    (D = 1 / Math.sqrt(D)),
    (B *= D),
    (q *= D),
    (Y *= D),
    (u[0] = B),
    (u[1] = q),
    (u[2] = Y),
    (u[3] = 0),
    (u[4] = z * Y - O * q),
    (u[5] = O * B - E * Y),
    (u[6] = E * q - z * B),
    (u[7] = 0),
    (u[8] = E),
    (u[9] = z),
    (u[10] = O),
    (u[11] = 0),
    (u[12] = h),
    (u[13] = o),
    (u[14] = g),
    (u[15] = 1),
    u
  );
}
function z1(u, i, s) {
  return (
    (u[0] = i[0] + s[0]),
    (u[1] = i[1] + s[1]),
    (u[2] = i[2] + s[2]),
    (u[3] = i[3] + s[3]),
    (u[4] = i[4] + s[4]),
    (u[5] = i[5] + s[5]),
    (u[6] = i[6] + s[6]),
    (u[7] = i[7] + s[7]),
    (u[8] = i[8] + s[8]),
    (u[9] = i[9] + s[9]),
    (u[10] = i[10] + s[10]),
    (u[11] = i[11] + s[11]),
    (u[12] = i[12] + s[12]),
    (u[13] = i[13] + s[13]),
    (u[14] = i[14] + s[14]),
    (u[15] = i[15] + s[15]),
    u
  );
}
function O1(u, i, s) {
  return (
    (u[0] = i[0] - s[0]),
    (u[1] = i[1] - s[1]),
    (u[2] = i[2] - s[2]),
    (u[3] = i[3] - s[3]),
    (u[4] = i[4] - s[4]),
    (u[5] = i[5] - s[5]),
    (u[6] = i[6] - s[6]),
    (u[7] = i[7] - s[7]),
    (u[8] = i[8] - s[8]),
    (u[9] = i[9] - s[9]),
    (u[10] = i[10] - s[10]),
    (u[11] = i[11] - s[11]),
    (u[12] = i[12] - s[12]),
    (u[13] = i[13] - s[13]),
    (u[14] = i[14] - s[14]),
    (u[15] = i[15] - s[15]),
    u
  );
}
function Ag(u, i, s) {
  return (
    (u[0] = i[0] * s),
    (u[1] = i[1] * s),
    (u[2] = i[2] * s),
    (u[3] = i[3] * s),
    (u[4] = i[4] * s),
    (u[5] = i[5] * s),
    (u[6] = i[6] * s),
    (u[7] = i[7] * s),
    (u[8] = i[8] * s),
    (u[9] = i[9] * s),
    (u[10] = i[10] * s),
    (u[11] = i[11] * s),
    (u[12] = i[12] * s),
    (u[13] = i[13] * s),
    (u[14] = i[14] * s),
    (u[15] = i[15] * s),
    u
  );
}
class vl extends Array {
  constructor(
    i = 1,
    s = 0,
    c = 0,
    h = 0,
    o = 0,
    g = 1,
    m = 0,
    y = 0,
    v = 0,
    E = 0,
    z = 1,
    O = 0,
    D = 0,
    B = 0,
    q = 0,
    Y = 1
  ) {
    return super(i, s, c, h, o, g, m, y, v, E, z, O, D, B, q, Y), this;
  }
  get x() {
    return this[12];
  }
  get y() {
    return this[13];
  }
  get z() {
    return this[14];
  }
  get w() {
    return this[15];
  }
  set x(i) {
    this[12] = i;
  }
  set y(i) {
    this[13] = i;
  }
  set z(i) {
    this[14] = i;
  }
  set w(i) {
    this[15] = i;
  }
  set(i, s, c, h, o, g, m, y, v, E, z, O, D, B, q, Y) {
    return i.length
      ? this.copy(i)
      : (sg(this, i, s, c, h, o, g, m, y, v, E, z, O, D, B, q, Y), this);
  }
  translate(i, s = this) {
    return hg(this, s, i), this;
  }
  rotate(i, s, c = this) {
    return og(this, c, i, s), this;
  }
  scale(i, s = this) {
    return dg(this, s, typeof i == "number" ? [i, i, i] : i), this;
  }
  add(i, s) {
    return s ? z1(this, i, s) : z1(this, this, i), this;
  }
  sub(i, s) {
    return s ? O1(this, i, s) : O1(this, this, i), this;
  }
  multiply(i, s) {
    return (
      i.length ? (s ? x1(this, i, s) : x1(this, this, i)) : Ag(this, this, i),
      this
    );
  }
  identity() {
    return cg(this), this;
  }
  copy(i) {
    return fg(this, i), this;
  }
  fromPerspective({ fov: i, aspect: s, near: c, far: h } = {}) {
    return pg(this, i, s, c, h), this;
  }
  fromOrthogonal({ left: i, right: s, bottom: c, top: h, near: o, far: g }) {
    return bg(this, i, s, c, h, o, g), this;
  }
  fromQuaternion(i) {
    return Sg(this, i), this;
  }
  setPosition(i) {
    return (this.x = i[0]), (this.y = i[1]), (this.z = i[2]), this;
  }
  inverse(i = this) {
    return rg(this, i), this;
  }
  compose(i, s, c) {
    return mg(this, i, s, c), this;
  }
  decompose(i, s, c) {
    return vg(this, i, s, c), this;
  }
  getRotation(i) {
    return C1(i, this), this;
  }
  getTranslation(i) {
    return gg(i, this), this;
  }
  getScaling(i) {
    return q1(i, this), this;
  }
  getMaxScaleOnAxis() {
    return yg(this);
  }
  lookAt(i, s, c) {
    return Eg(this, i, s, c), this;
  }
  determinant() {
    return H1(this);
  }
  fromArray(i, s = 0) {
    return (
      (this[0] = i[s]),
      (this[1] = i[s + 1]),
      (this[2] = i[s + 2]),
      (this[3] = i[s + 3]),
      (this[4] = i[s + 4]),
      (this[5] = i[s + 5]),
      (this[6] = i[s + 6]),
      (this[7] = i[s + 7]),
      (this[8] = i[s + 8]),
      (this[9] = i[s + 9]),
      (this[10] = i[s + 10]),
      (this[11] = i[s + 11]),
      (this[12] = i[s + 12]),
      (this[13] = i[s + 13]),
      (this[14] = i[s + 14]),
      (this[15] = i[s + 15]),
      this
    );
  }
  toArray(i = [], s = 0) {
    return (
      (i[s] = this[0]),
      (i[s + 1] = this[1]),
      (i[s + 2] = this[2]),
      (i[s + 3] = this[3]),
      (i[s + 4] = this[4]),
      (i[s + 5] = this[5]),
      (i[s + 6] = this[6]),
      (i[s + 7] = this[7]),
      (i[s + 8] = this[8]),
      (i[s + 9] = this[9]),
      (i[s + 10] = this[10]),
      (i[s + 11] = this[11]),
      (i[s + 12] = this[12]),
      (i[s + 13] = this[13]),
      (i[s + 14] = this[14]),
      (i[s + 15] = this[15]),
      i
    );
  }
}
function _g(u, i, s = "YXZ") {
  return (
    s === "XYZ"
      ? ((u[1] = Math.asin(Math.min(Math.max(i[8], -1), 1))),
        Math.abs(i[8]) < 0.99999
          ? ((u[0] = Math.atan2(-i[9], i[10])),
            (u[2] = Math.atan2(-i[4], i[0])))
          : ((u[0] = Math.atan2(i[6], i[5])), (u[2] = 0)))
      : s === "YXZ"
      ? ((u[0] = Math.asin(-Math.min(Math.max(i[9], -1), 1))),
        Math.abs(i[9]) < 0.99999
          ? ((u[1] = Math.atan2(i[8], i[10])), (u[2] = Math.atan2(i[1], i[5])))
          : ((u[1] = Math.atan2(-i[2], i[0])), (u[2] = 0)))
      : s === "ZXY"
      ? ((u[0] = Math.asin(Math.min(Math.max(i[6], -1), 1))),
        Math.abs(i[6]) < 0.99999
          ? ((u[1] = Math.atan2(-i[2], i[10])),
            (u[2] = Math.atan2(-i[4], i[5])))
          : ((u[1] = 0), (u[2] = Math.atan2(i[1], i[0]))))
      : s === "ZYX"
      ? ((u[1] = Math.asin(-Math.min(Math.max(i[2], -1), 1))),
        Math.abs(i[2]) < 0.99999
          ? ((u[0] = Math.atan2(i[6], i[10])), (u[2] = Math.atan2(i[1], i[0])))
          : ((u[0] = 0), (u[2] = Math.atan2(-i[4], i[5]))))
      : s === "YZX"
      ? ((u[2] = Math.asin(Math.min(Math.max(i[1], -1), 1))),
        Math.abs(i[1]) < 0.99999
          ? ((u[0] = Math.atan2(-i[9], i[5])), (u[1] = Math.atan2(-i[2], i[0])))
          : ((u[0] = 0), (u[1] = Math.atan2(i[8], i[10]))))
      : s === "XZY" &&
        ((u[2] = Math.asin(-Math.min(Math.max(i[4], -1), 1))),
        Math.abs(i[4]) < 0.99999
          ? ((u[0] = Math.atan2(i[6], i[5])), (u[1] = Math.atan2(i[8], i[0])))
          : ((u[0] = Math.atan2(-i[9], i[10])), (u[1] = 0))),
    u
  );
}
const R1 = new vl();
class Mg extends Array {
  constructor(i = 0, s = i, c = i, h = "YXZ") {
    super(i, s, c),
      (this.order = h),
      (this.onChange = () => {}),
      (this._target = this);
    const o = ["0", "1", "2"];
    return new Proxy(this, {
      set(g, m) {
        const y = Reflect.set(...arguments);
        return y && o.includes(m) && g.onChange(), y;
      },
    });
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(i) {
    (this._target[0] = i), this.onChange();
  }
  set y(i) {
    (this._target[1] = i), this.onChange();
  }
  set z(i) {
    (this._target[2] = i), this.onChange();
  }
  set(i, s = i, c = i) {
    return i.length
      ? this.copy(i)
      : ((this._target[0] = i),
        (this._target[1] = s),
        (this._target[2] = c),
        this.onChange(),
        this);
  }
  copy(i) {
    return (
      (this._target[0] = i[0]),
      (this._target[1] = i[1]),
      (this._target[2] = i[2]),
      this.onChange(),
      this
    );
  }
  reorder(i) {
    return (this._target.order = i), this.onChange(), this;
  }
  fromRotationMatrix(i, s = this.order) {
    return _g(this._target, i, s), this.onChange(), this;
  }
  fromQuaternion(i, s = this.order, c) {
    return (
      R1.fromQuaternion(i),
      this._target.fromRotationMatrix(R1, s),
      c || this.onChange(),
      this
    );
  }
  fromArray(i, s = 0) {
    return (
      (this._target[0] = i[s]),
      (this._target[1] = i[s + 1]),
      (this._target[2] = i[s + 2]),
      this
    );
  }
  toArray(i = [], s = 0) {
    return (i[s] = this[0]), (i[s + 1] = this[1]), (i[s + 2] = this[2]), i;
  }
}
class ds {
  constructor() {
    (this.parent = null),
      (this.children = []),
      (this.visible = !0),
      (this.matrix = new vl()),
      (this.worldMatrix = new vl()),
      (this.matrixAutoUpdate = !0),
      (this.worldMatrixNeedsUpdate = !1),
      (this.position = new Ct()),
      (this.quaternion = new ng()),
      (this.scale = new Ct(1)),
      (this.rotation = new Mg()),
      (this.up = new Ct(0, 1, 0)),
      (this.rotation._target.onChange = () =>
        this.quaternion.fromEuler(this.rotation, !0)),
      (this.quaternion._target.onChange = () =>
        this.rotation.fromQuaternion(this.quaternion, void 0, !0));
  }
  setParent(i, s = !0) {
    this.parent && i !== this.parent && this.parent.removeChild(this, !1),
      (this.parent = i),
      s && i && i.addChild(this, !1);
  }
  addChild(i, s = !0) {
    ~this.children.indexOf(i) || this.children.push(i),
      s && i.setParent(this, !1);
  }
  removeChild(i, s = !0) {
    ~this.children.indexOf(i) &&
      this.children.splice(this.children.indexOf(i), 1),
      s && i.setParent(null, !1);
  }
  updateMatrixWorld(i) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.worldMatrixNeedsUpdate || i) &&
        (this.parent === null
          ? this.worldMatrix.copy(this.matrix)
          : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
        (this.worldMatrixNeedsUpdate = !1),
        (i = !0));
    for (let s = 0, c = this.children.length; s < c; s++)
      this.children[s].updateMatrixWorld(i);
  }
  updateMatrix() {
    this.matrix.compose(this.quaternion, this.position, this.scale),
      (this.worldMatrixNeedsUpdate = !0);
  }
  traverse(i) {
    if (!i(this))
      for (let s = 0, c = this.children.length; s < c; s++)
        this.children[s].traverse(i);
  }
  decompose() {
    this.matrix.decompose(this.quaternion._target, this.position, this.scale),
      this.rotation.fromQuaternion(this.quaternion);
  }
  lookAt(i, s = !1) {
    s
      ? this.matrix.lookAt(this.position, i, this.up)
      : this.matrix.lookAt(i, this.position, this.up),
      this.matrix.getRotation(this.quaternion._target),
      this.rotation.fromQuaternion(this.quaternion);
  }
}
const Tg = new vl(),
  xg = new Ct(),
  zg = new Ct();
class Og extends ds {
  constructor(
    i,
    {
      near: s = 0.1,
      far: c = 100,
      fov: h = 45,
      aspect: o = 1,
      left: g,
      right: m,
      bottom: y,
      top: v,
      zoom: E = 1,
    } = {}
  ) {
    super(),
      Object.assign(this, {
        near: s,
        far: c,
        fov: h,
        aspect: o,
        left: g,
        right: m,
        bottom: y,
        top: v,
        zoom: E,
      }),
      (this.projectionMatrix = new vl()),
      (this.viewMatrix = new vl()),
      (this.projectionViewMatrix = new vl()),
      (this.worldPosition = new Ct()),
      (this.type = g || m ? "orthographic" : "perspective"),
      this.type === "orthographic" ? this.orthographic() : this.perspective();
  }
  perspective({
    near: i = this.near,
    far: s = this.far,
    fov: c = this.fov,
    aspect: h = this.aspect,
  } = {}) {
    return (
      Object.assign(this, { near: i, far: s, fov: c, aspect: h }),
      this.projectionMatrix.fromPerspective({
        fov: c * (Math.PI / 180),
        aspect: h,
        near: i,
        far: s,
      }),
      (this.type = "perspective"),
      this
    );
  }
  orthographic({
    near: i = this.near,
    far: s = this.far,
    left: c = this.left || -1,
    right: h = this.right || 1,
    bottom: o = this.bottom || -1,
    top: g = this.top || 1,
    zoom: m = this.zoom,
  } = {}) {
    return (
      Object.assign(this, {
        near: i,
        far: s,
        left: c,
        right: h,
        bottom: o,
        top: g,
        zoom: m,
      }),
      (c /= m),
      (h /= m),
      (o /= m),
      (g /= m),
      this.projectionMatrix.fromOrthogonal({
        left: c,
        right: h,
        bottom: o,
        top: g,
        near: i,
        far: s,
      }),
      (this.type = "orthographic"),
      this
    );
  }
  updateMatrixWorld() {
    return (
      super.updateMatrixWorld(),
      this.viewMatrix.inverse(this.worldMatrix),
      this.worldMatrix.getTranslation(this.worldPosition),
      this.projectionViewMatrix.multiply(
        this.projectionMatrix,
        this.viewMatrix
      ),
      this
    );
  }
  updateProjectionMatrix() {
    return this.type === "perspective"
      ? this.perspective()
      : this.orthographic();
  }
  lookAt(i) {
    return super.lookAt(i, !0), this;
  }
  project(i) {
    return (
      i.applyMatrix4(this.viewMatrix),
      i.applyMatrix4(this.projectionMatrix),
      this
    );
  }
  unproject(i) {
    return (
      i.applyMatrix4(Tg.inverse(this.projectionMatrix)),
      i.applyMatrix4(this.worldMatrix),
      this
    );
  }
  updateFrustum() {
    this.frustum ||
      (this.frustum = [
        new Ct(),
        new Ct(),
        new Ct(),
        new Ct(),
        new Ct(),
        new Ct(),
      ]);
    const i = this.projectionViewMatrix;
    (this.frustum[0].set(i[3] - i[0], i[7] - i[4], i[11] - i[8]).constant =
      i[15] - i[12]),
      (this.frustum[1].set(i[3] + i[0], i[7] + i[4], i[11] + i[8]).constant =
        i[15] + i[12]),
      (this.frustum[2].set(i[3] + i[1], i[7] + i[5], i[11] + i[9]).constant =
        i[15] + i[13]),
      (this.frustum[3].set(i[3] - i[1], i[7] - i[5], i[11] - i[9]).constant =
        i[15] - i[13]),
      (this.frustum[4].set(i[3] - i[2], i[7] - i[6], i[11] - i[10]).constant =
        i[15] - i[14]),
      (this.frustum[5].set(i[3] + i[2], i[7] + i[6], i[11] + i[10]).constant =
        i[15] + i[14]);
    for (let s = 0; s < 6; s++) {
      const c = 1 / this.frustum[s].distance();
      this.frustum[s].multiply(c), (this.frustum[s].constant *= c);
    }
  }
  frustumIntersectsMesh(i, s = i.worldMatrix) {
    if (
      !i.geometry.attributes.position ||
      ((!i.geometry.bounds || i.geometry.bounds.radius === 1 / 0) &&
        i.geometry.computeBoundingSphere(),
      !i.geometry.bounds)
    )
      return !0;
    const c = xg;
    c.copy(i.geometry.bounds.center), c.applyMatrix4(s);
    const h = i.geometry.bounds.radius * s.getMaxScaleOnAxis();
    return this.frustumIntersectsSphere(c, h);
  }
  frustumIntersectsSphere(i, s) {
    const c = zg;
    for (let h = 0; h < 6; h++) {
      const o = this.frustum[h];
      if (c.copy(o).dot(i) + o.constant < -s) return !1;
    }
    return !0;
  }
}
function Rg(u, i) {
  return (
    (u[0] = i[0]),
    (u[1] = i[1]),
    (u[2] = i[2]),
    (u[3] = i[4]),
    (u[4] = i[5]),
    (u[5] = i[6]),
    (u[6] = i[8]),
    (u[7] = i[9]),
    (u[8] = i[10]),
    u
  );
}
function Dg(u, i) {
  let s = i[0],
    c = i[1],
    h = i[2],
    o = i[3],
    g = s + s,
    m = c + c,
    y = h + h,
    v = s * g,
    E = c * g,
    z = c * m,
    O = h * g,
    D = h * m,
    B = h * y,
    q = o * g,
    Y = o * m,
    X = o * y;
  return (
    (u[0] = 1 - z - B),
    (u[3] = E - X),
    (u[6] = O + Y),
    (u[1] = E + X),
    (u[4] = 1 - v - B),
    (u[7] = D - q),
    (u[2] = O - Y),
    (u[5] = D + q),
    (u[8] = 1 - v - z),
    u
  );
}
function Ug(u, i) {
  return (
    (u[0] = i[0]),
    (u[1] = i[1]),
    (u[2] = i[2]),
    (u[3] = i[3]),
    (u[4] = i[4]),
    (u[5] = i[5]),
    (u[6] = i[6]),
    (u[7] = i[7]),
    (u[8] = i[8]),
    u
  );
}
function Ng(u, i, s, c, h, o, g, m, y, v) {
  return (
    (u[0] = i),
    (u[1] = s),
    (u[2] = c),
    (u[3] = h),
    (u[4] = o),
    (u[5] = g),
    (u[6] = m),
    (u[7] = y),
    (u[8] = v),
    u
  );
}
function Bg(u) {
  return (
    (u[0] = 1),
    (u[1] = 0),
    (u[2] = 0),
    (u[3] = 0),
    (u[4] = 1),
    (u[5] = 0),
    (u[6] = 0),
    (u[7] = 0),
    (u[8] = 1),
    u
  );
}
function Hg(u, i) {
  let s = i[0],
    c = i[1],
    h = i[2],
    o = i[3],
    g = i[4],
    m = i[5],
    y = i[6],
    v = i[7],
    E = i[8],
    z = E * g - m * v,
    O = -E * o + m * y,
    D = v * o - g * y,
    B = s * z + c * O + h * D;
  return B
    ? ((B = 1 / B),
      (u[0] = z * B),
      (u[1] = (-E * c + h * v) * B),
      (u[2] = (m * c - h * g) * B),
      (u[3] = O * B),
      (u[4] = (E * s - h * y) * B),
      (u[5] = (-m * s + h * o) * B),
      (u[6] = D * B),
      (u[7] = (-v * s + c * y) * B),
      (u[8] = (g * s - c * o) * B),
      u)
    : null;
}
function D1(u, i, s) {
  let c = i[0],
    h = i[1],
    o = i[2],
    g = i[3],
    m = i[4],
    y = i[5],
    v = i[6],
    E = i[7],
    z = i[8],
    O = s[0],
    D = s[1],
    B = s[2],
    q = s[3],
    Y = s[4],
    X = s[5],
    et = s[6],
    K = s[7],
    Q = s[8];
  return (
    (u[0] = O * c + D * g + B * v),
    (u[1] = O * h + D * m + B * E),
    (u[2] = O * o + D * y + B * z),
    (u[3] = q * c + Y * g + X * v),
    (u[4] = q * h + Y * m + X * E),
    (u[5] = q * o + Y * y + X * z),
    (u[6] = et * c + K * g + Q * v),
    (u[7] = et * h + K * m + Q * E),
    (u[8] = et * o + K * y + Q * z),
    u
  );
}
function qg(u, i, s) {
  let c = i[0],
    h = i[1],
    o = i[2],
    g = i[3],
    m = i[4],
    y = i[5],
    v = i[6],
    E = i[7],
    z = i[8],
    O = s[0],
    D = s[1];
  return (
    (u[0] = c),
    (u[1] = h),
    (u[2] = o),
    (u[3] = g),
    (u[4] = m),
    (u[5] = y),
    (u[6] = O * c + D * g + v),
    (u[7] = O * h + D * m + E),
    (u[8] = O * o + D * y + z),
    u
  );
}
function Cg(u, i, s) {
  let c = i[0],
    h = i[1],
    o = i[2],
    g = i[3],
    m = i[4],
    y = i[5],
    v = i[6],
    E = i[7],
    z = i[8],
    O = Math.sin(s),
    D = Math.cos(s);
  return (
    (u[0] = D * c + O * g),
    (u[1] = D * h + O * m),
    (u[2] = D * o + O * y),
    (u[3] = D * g - O * c),
    (u[4] = D * m - O * h),
    (u[5] = D * y - O * o),
    (u[6] = v),
    (u[7] = E),
    (u[8] = z),
    u
  );
}
function Yg(u, i, s) {
  let c = s[0],
    h = s[1];
  return (
    (u[0] = c * i[0]),
    (u[1] = c * i[1]),
    (u[2] = c * i[2]),
    (u[3] = h * i[3]),
    (u[4] = h * i[4]),
    (u[5] = h * i[5]),
    (u[6] = i[6]),
    (u[7] = i[7]),
    (u[8] = i[8]),
    u
  );
}
function Xg(u, i) {
  let s = i[0],
    c = i[1],
    h = i[2],
    o = i[3],
    g = i[4],
    m = i[5],
    y = i[6],
    v = i[7],
    E = i[8],
    z = i[9],
    O = i[10],
    D = i[11],
    B = i[12],
    q = i[13],
    Y = i[14],
    X = i[15],
    et = s * m - c * g,
    K = s * y - h * g,
    Q = s * v - o * g,
    G = c * y - h * m,
    V = c * v - o * m,
    nt = h * v - o * y,
    rt = E * q - z * B,
    ot = E * Y - O * B,
    St = E * X - D * B,
    yt = z * Y - O * q,
    st = z * X - D * q,
    Tt = O * X - D * Y,
    P = et * Tt - K * st + Q * yt + G * St - V * ot + nt * rt;
  return P
    ? ((P = 1 / P),
      (u[0] = (m * Tt - y * st + v * yt) * P),
      (u[1] = (y * St - g * Tt - v * ot) * P),
      (u[2] = (g * st - m * St + v * rt) * P),
      (u[3] = (h * st - c * Tt - o * yt) * P),
      (u[4] = (s * Tt - h * St + o * ot) * P),
      (u[5] = (c * St - s * st - o * rt) * P),
      (u[6] = (q * nt - Y * V + X * G) * P),
      (u[7] = (Y * Q - B * nt - X * K) * P),
      (u[8] = (B * V - q * Q + X * et) * P),
      u)
    : null;
}
class Gg extends Array {
  constructor(i = 1, s = 0, c = 0, h = 0, o = 1, g = 0, m = 0, y = 0, v = 1) {
    return super(i, s, c, h, o, g, m, y, v), this;
  }
  set(i, s, c, h, o, g, m, y, v) {
    return i.length
      ? this.copy(i)
      : (Ng(this, i, s, c, h, o, g, m, y, v), this);
  }
  translate(i, s = this) {
    return qg(this, s, i), this;
  }
  rotate(i, s = this) {
    return Cg(this, s, i), this;
  }
  scale(i, s = this) {
    return Yg(this, s, i), this;
  }
  multiply(i, s) {
    return s ? D1(this, i, s) : D1(this, this, i), this;
  }
  identity() {
    return Bg(this), this;
  }
  copy(i) {
    return Ug(this, i), this;
  }
  fromMatrix4(i) {
    return Rg(this, i), this;
  }
  fromQuaternion(i) {
    return Dg(this, i), this;
  }
  fromBasis(i, s, c) {
    return this.set(i[0], i[1], i[2], s[0], s[1], s[2], c[0], c[1], c[2]), this;
  }
  inverse(i = this) {
    return Hg(this, i), this;
  }
  getNormalMatrix(i) {
    return Xg(this, i), this;
  }
}
let Lg = 0;
class jg extends ds {
  constructor(
    i,
    {
      geometry: s,
      program: c,
      mode: h = i.TRIANGLES,
      frustumCulled: o = !0,
      renderOrder: g = 0,
    } = {}
  ) {
    super(),
      i.canvas || console.error("gl not passed as first argument to Mesh"),
      (this.gl = i),
      (this.id = Lg++),
      (this.geometry = s),
      (this.program = c),
      (this.mode = h),
      (this.frustumCulled = o),
      (this.renderOrder = g),
      (this.modelViewMatrix = new vl()),
      (this.normalMatrix = new Gg()),
      (this.beforeRenderCallbacks = []),
      (this.afterRenderCallbacks = []);
  }
  onBeforeRender(i) {
    return this.beforeRenderCallbacks.push(i), this;
  }
  onAfterRender(i) {
    return this.afterRenderCallbacks.push(i), this;
  }
  draw({ camera: i } = {}) {
    i &&
      (this.program.uniforms.modelMatrix ||
        Object.assign(this.program.uniforms, {
          modelMatrix: { value: null },
          viewMatrix: { value: null },
          modelViewMatrix: { value: null },
          normalMatrix: { value: null },
          projectionMatrix: { value: null },
          cameraPosition: { value: null },
        }),
      (this.program.uniforms.projectionMatrix.value = i.projectionMatrix),
      (this.program.uniforms.cameraPosition.value = i.worldPosition),
      (this.program.uniforms.viewMatrix.value = i.viewMatrix),
      this.modelViewMatrix.multiply(i.viewMatrix, this.worldMatrix),
      this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
      (this.program.uniforms.modelMatrix.value = this.worldMatrix),
      (this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix),
      (this.program.uniforms.normalMatrix.value = this.normalMatrix)),
      this.beforeRenderCallbacks.forEach(
        (c) => c && c({ mesh: this, camera: i })
      );
    let s = this.program.cullFace && this.worldMatrix.determinant() < 0;
    this.program.use({ flipFaces: s }),
      this.geometry.draw({ mode: this.mode, program: this.program }),
      this.afterRenderCallbacks.forEach(
        (c) => c && c({ mesh: this, camera: i })
      );
  }
}
const U1 = new Uint8Array(4);
function N1(u) {
  return (u & (u - 1)) === 0;
}
let Qg = 1;
class Zg {
  constructor(
    i,
    {
      image: s,
      target: c = i.TEXTURE_2D,
      type: h = i.UNSIGNED_BYTE,
      format: o = i.RGBA,
      internalFormat: g = o,
      wrapS: m = i.CLAMP_TO_EDGE,
      wrapT: y = i.CLAMP_TO_EDGE,
      wrapR: v = i.CLAMP_TO_EDGE,
      generateMipmaps: E = c === (i.TEXTURE_2D || i.TEXTURE_CUBE_MAP),
      minFilter: z = E ? i.NEAREST_MIPMAP_LINEAR : i.LINEAR,
      magFilter: O = i.LINEAR,
      premultiplyAlpha: D = !1,
      unpackAlignment: B = 4,
      flipY: q = c == (i.TEXTURE_2D || i.TEXTURE_3D),
      anisotropy: Y = 0,
      level: X = 0,
      width: et,
      height: K = et,
      length: Q = 1,
    } = {}
  ) {
    (this.gl = i),
      (this.id = Qg++),
      (this.image = s),
      (this.target = c),
      (this.type = h),
      (this.format = o),
      (this.internalFormat = g),
      (this.minFilter = z),
      (this.magFilter = O),
      (this.wrapS = m),
      (this.wrapT = y),
      (this.wrapR = v),
      (this.generateMipmaps = E),
      (this.premultiplyAlpha = D),
      (this.unpackAlignment = B),
      (this.flipY = q),
      (this.anisotropy = Math.min(
        Y,
        this.gl.renderer.parameters.maxAnisotropy
      )),
      (this.level = X),
      (this.width = et),
      (this.height = K),
      (this.length = Q),
      (this.texture = this.gl.createTexture()),
      (this.store = { image: null }),
      (this.glState = this.gl.renderer.state),
      (this.state = {}),
      (this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR),
      (this.state.magFilter = this.gl.LINEAR),
      (this.state.wrapS = this.gl.REPEAT),
      (this.state.wrapT = this.gl.REPEAT),
      (this.state.anisotropy = 0);
  }
  bind() {
    this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id &&
      (this.gl.bindTexture(this.target, this.texture),
      (this.glState.textureUnits[this.glState.activeTextureUnit] = this.id));
  }
  update(i = 0) {
    const s = !(this.image === this.store.image && !this.needsUpdate);
    if (
      ((s || this.glState.textureUnits[i] !== this.id) &&
        (this.gl.renderer.activeTexture(i), this.bind()),
      !!s)
    ) {
      if (
        ((this.needsUpdate = !1),
        this.flipY !== this.glState.flipY &&
          (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY),
          (this.glState.flipY = this.flipY)),
        this.premultiplyAlpha !== this.glState.premultiplyAlpha &&
          (this.gl.pixelStorei(
            this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
            this.premultiplyAlpha
          ),
          (this.glState.premultiplyAlpha = this.premultiplyAlpha)),
        this.unpackAlignment !== this.glState.unpackAlignment &&
          (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment),
          (this.glState.unpackAlignment = this.unpackAlignment)),
        this.minFilter !== this.state.minFilter &&
          (this.gl.texParameteri(
            this.target,
            this.gl.TEXTURE_MIN_FILTER,
            this.minFilter
          ),
          (this.state.minFilter = this.minFilter)),
        this.magFilter !== this.state.magFilter &&
          (this.gl.texParameteri(
            this.target,
            this.gl.TEXTURE_MAG_FILTER,
            this.magFilter
          ),
          (this.state.magFilter = this.magFilter)),
        this.wrapS !== this.state.wrapS &&
          (this.gl.texParameteri(
            this.target,
            this.gl.TEXTURE_WRAP_S,
            this.wrapS
          ),
          (this.state.wrapS = this.wrapS)),
        this.wrapT !== this.state.wrapT &&
          (this.gl.texParameteri(
            this.target,
            this.gl.TEXTURE_WRAP_T,
            this.wrapT
          ),
          (this.state.wrapT = this.wrapT)),
        this.wrapR !== this.state.wrapR &&
          (this.gl.texParameteri(
            this.target,
            this.gl.TEXTURE_WRAP_R,
            this.wrapR
          ),
          (this.state.wrapR = this.wrapR)),
        this.anisotropy &&
          this.anisotropy !== this.state.anisotropy &&
          (this.gl.texParameterf(
            this.target,
            this.gl.renderer.getExtension("EXT_texture_filter_anisotropic")
              .TEXTURE_MAX_ANISOTROPY_EXT,
            this.anisotropy
          ),
          (this.state.anisotropy = this.anisotropy)),
        this.image)
      ) {
        if (
          (this.image.width &&
            ((this.width = this.image.width),
            (this.height = this.image.height)),
          this.target === this.gl.TEXTURE_CUBE_MAP)
        )
          for (let c = 0; c < 6; c++)
            this.gl.texImage2D(
              this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + c,
              this.level,
              this.internalFormat,
              this.format,
              this.type,
              this.image[c]
            );
        else if (ArrayBuffer.isView(this.image))
          this.target === this.gl.TEXTURE_2D
            ? this.gl.texImage2D(
                this.target,
                this.level,
                this.internalFormat,
                this.width,
                this.height,
                0,
                this.format,
                this.type,
                this.image
              )
            : (this.target === this.gl.TEXTURE_2D_ARRAY ||
                this.target === this.gl.TEXTURE_3D) &&
              this.gl.texImage3D(
                this.target,
                this.level,
                this.internalFormat,
                this.width,
                this.height,
                this.length,
                0,
                this.format,
                this.type,
                this.image
              );
        else if (this.image.isCompressedTexture)
          for (let c = 0; c < this.image.length; c++)
            this.gl.compressedTexImage2D(
              this.target,
              c,
              this.internalFormat,
              this.image[c].width,
              this.image[c].height,
              0,
              this.image[c].data
            );
        else
          this.target === this.gl.TEXTURE_2D
            ? this.gl.texImage2D(
                this.target,
                this.level,
                this.internalFormat,
                this.format,
                this.type,
                this.image
              )
            : this.gl.texImage3D(
                this.target,
                this.level,
                this.internalFormat,
                this.width,
                this.height,
                this.length,
                0,
                this.format,
                this.type,
                this.image
              );
        this.generateMipmaps &&
          (!this.gl.renderer.isWebgl2 &&
          (!N1(this.image.width) || !N1(this.image.height))
            ? ((this.generateMipmaps = !1),
              (this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE),
              (this.minFilter = this.gl.LINEAR))
            : this.gl.generateMipmap(this.target)),
          this.onUpdate && this.onUpdate();
      } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
        for (let c = 0; c < 6; c++)
          this.gl.texImage2D(
            this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + c,
            0,
            this.gl.RGBA,
            1,
            1,
            0,
            this.gl.RGBA,
            this.gl.UNSIGNED_BYTE,
            U1
          );
      else
        this.width
          ? this.target === this.gl.TEXTURE_2D
            ? this.gl.texImage2D(
                this.target,
                this.level,
                this.internalFormat,
                this.width,
                this.height,
                0,
                this.format,
                this.type,
                null
              )
            : this.gl.texImage3D(
                this.target,
                this.level,
                this.internalFormat,
                this.width,
                this.height,
                this.length,
                0,
                this.format,
                this.type,
                null
              )
          : this.gl.texImage2D(
              this.target,
              0,
              this.gl.RGBA,
              1,
              1,
              0,
              this.gl.RGBA,
              this.gl.UNSIGNED_BYTE,
              U1
            );
      this.store.image = this.image;
    }
  }
}
class os extends Bo {
  constructor(
    i,
    {
      width: s = 1,
      height: c = 1,
      widthSegments: h = 1,
      heightSegments: o = 1,
      attributes: g = {},
    } = {}
  ) {
    const m = h,
      y = o,
      v = (m + 1) * (y + 1),
      E = m * y * 6,
      z = new Float32Array(v * 3),
      O = new Float32Array(v * 3),
      D = new Float32Array(v * 2),
      B = E > 65536 ? new Uint32Array(E) : new Uint16Array(E);
    os.buildPlane(z, O, D, B, s, c, 0, m, y),
      Object.assign(g, {
        position: { size: 3, data: z },
        normal: { size: 3, data: O },
        uv: { size: 2, data: D },
        index: { data: B },
      }),
      super(i, g);
  }
  static buildPlane(
    i,
    s,
    c,
    h,
    o,
    g,
    m,
    y,
    v,
    E = 0,
    z = 1,
    O = 2,
    D = 1,
    B = -1,
    q = 0,
    Y = 0
  ) {
    const X = q,
      et = o / y,
      K = g / v;
    for (let Q = 0; Q <= v; Q++) {
      let G = Q * K - g / 2;
      for (let V = 0; V <= y; V++, q++) {
        let nt = V * et - o / 2;
        if (
          ((i[q * 3 + E] = nt * D),
          (i[q * 3 + z] = G * B),
          (i[q * 3 + O] = m / 2),
          (s[q * 3 + E] = 0),
          (s[q * 3 + z] = 0),
          (s[q * 3 + O] = m >= 0 ? 1 : -1),
          (c[q * 2] = V / y),
          (c[q * 2 + 1] = 1 - Q / v),
          Q === v || V === y)
        )
          continue;
        let rt = X + V + Q * (y + 1),
          ot = X + V + (Q + 1) * (y + 1),
          St = X + V + (Q + 1) * (y + 1) + 1,
          yt = X + V + Q * (y + 1) + 1;
        (h[Y * 6] = rt),
          (h[Y * 6 + 1] = ot),
          (h[Y * 6 + 2] = yt),
          (h[Y * 6 + 3] = ot),
          (h[Y * 6 + 4] = St),
          (h[Y * 6 + 5] = yt),
          Y++;
      }
    }
  }
}
function Vg({ item: u }) {
  const i = Cn.useRef(null);
  return (
    Cn.useEffect(() => {
      const s = new Lo({ alpha: !0 }),
        c = s.gl;
      i.current.appendChild(c.canvas);
      const h = new Og(c);
      (h.fov = 45), (h.position.z = 5);
      const o = new ds(),
        g = new os(c),
        m = new Zg(c),
        y = new qo(c, {
          vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
          fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          gl_FragColor = color;
        }
      `,
          uniforms: { tMap: { value: m } },
        }),
        v = new jg(c, { geometry: g, program: y });
      v.setParent(o);
      const E = () => {
          const D = i.current.clientWidth,
            B = i.current.clientHeight;
          s.setSize(D, B), h.perspective({ aspect: D / B });
        },
        z = new Image();
      (z.crossOrigin = "anonymous"),
        (z.src = u.image),
        (z.onload = () => {
          (m.image = z), i.current.clientWidth, i.current.clientHeight;
          const D = z.naturalWidth / z.naturalHeight,
            B = (h.fov * Math.PI) / 180,
            Y = 2 * Math.tan(B / 2) * h.position.z,
            X = Y * D;
          v.scale.set(X, Y, 1);
        }),
        window.addEventListener("resize", E),
        E();
      const O = () => {
        s.render({ scene: o, camera: h }), requestAnimationFrame(O);
      };
      return (
        O(),
        () => {
          window.removeEventListener("resize", E),
            c &&
              c.canvas &&
              c.canvas.parentNode &&
              c.canvas.parentNode.removeChild(c.canvas);
        }
      );
    }, [u]),
    Ve.jsx("div", { className: "w-full h-screen relative", ref: i })
  );
}
const wg = "/assets/IMG_20250630_131518_715-DDbisyMj.jpg",
  Kg = "/assets/IMG_20250630_131518_858-TXgkUC6C.jpg",
  Jg = "/assets/IMG_20250630_131519_190-DHcRcdRz.jpg",
  Fg = "/assets/IMG_20250630_131519_377-xC2HW5mc.jpg";
function Wg() {
  const u = [
      { image: wg, text: "1" },
      { image: Kg, text: "2" },
      { image: Jg, text: "3" },
      { image: Fg, text: "4" },
    ],
    [i, s] = Cn.useState(0),
    c = u[i],
    h = () => s((g) => (g + 1) % u.length),
    o = () => s((g) => (g - 1 + u.length) % u.length);
  return Ve.jsxs("div", {
    className: "relative w-full overflow-hidden bg-black",
    style: { height: "100dvh" },
    children: [
      Ve.jsx(Vg, { item: c }),
      Ve.jsx("button", {
        className:
          "absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg border border-white/30 text-white p-3 rounded-full shadow-lg hover:scale-110 hover:bg-white/20 transition z-20",
        onClick: o,
        children: "◀",
      }),
      Ve.jsx("button", {
        className:
          "absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg border border-white/30 text-white p-3 rounded-full shadow-lg hover:scale-110 hover:bg-white/20 transition z-20",
        onClick: h,
        children: "▶",
      }),
      Ve.jsx("div", {
        className:
          "absolute bottom-0 left-0 right-0 px-4 py-3 bg-white/5 backdrop-blur-lg flex justify-center gap-4 z-20 rounded-t-xl shadow-inner",
        children: u.map((g, m) =>
          Ve.jsx(
            "img",
            {
              src: g.image,
              alt: `Thumbnail ${m}`,
              className: `w-16 h-16 object-cover cursor-pointer rounded-xl transition-all duration-300 transform hover:scale-110 ${
                m === i
                  ? "ring-2 ring-white shadow-lg"
                  : "opacity-60 hover:opacity-100"
              }`,
              onClick: () => s(m),
            },
            m
          )
        ),
      }),
    ],
  });
}
yo.createRoot(document.getElementById("root")).render(
  Ve.jsx(Cn.StrictMode, { children: Ve.jsx(Wg, {}) })
);
