(function () {
  const U = document.createElement("link").relList;
  if (U && U.supports && U.supports("modulepreload")) return;
  for (const R of document.querySelectorAll('link[rel="modulepreload"]')) m(R);
  new MutationObserver((R) => {
    for (const G of R)
      if (G.type === "childList")
        for (const k of G.addedNodes)
          k.tagName === "LINK" && k.rel === "modulepreload" && m(k);
  }).observe(document, { childList: !0, subtree: !0 });
  function q(R) {
    const G = {};
    return (
      R.integrity && (G.integrity = R.integrity),
      R.referrerPolicy && (G.referrerPolicy = R.referrerPolicy),
      R.crossOrigin === "use-credentials"
        ? (G.credentials = "include")
        : R.crossOrigin === "anonymous"
        ? (G.credentials = "omit")
        : (G.credentials = "same-origin"),
      G
    );
  }
  function m(R) {
    if (R.ep) return;
    R.ep = !0;
    const G = q(R);
    fetch(R.href, G);
  }
})();
function qh(b) {
  return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default")
    ? b.default
    : b;
}
var $i = { exports: {} },
  gu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Po;
function wh() {
  if (Po) return gu;
  Po = 1;
  var b = Symbol.for("react.transitional.element"),
    U = Symbol.for("react.fragment");
  function q(m, R, G) {
    var k = null;
    if (
      (G !== void 0 && (k = "" + G),
      R.key !== void 0 && (k = "" + R.key),
      "key" in R)
    ) {
      G = {};
      for (var dl in R) dl !== "key" && (G[dl] = R[dl]);
    } else G = R;
    return (
      (R = G.ref),
      { $$typeof: b, type: m, key: k, ref: R !== void 0 ? R : null, props: G }
    );
  }
  return (gu.Fragment = U), (gu.jsx = q), (gu.jsxs = q), gu;
}
var ld;
function Yh() {
  return ld || ((ld = 1), ($i.exports = wh())), $i.exports;
}
var o = Yh(),
  Fi = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var td;
function Ch() {
  if (td) return L;
  td = 1;
  var b = Symbol.for("react.transitional.element"),
    U = Symbol.for("react.portal"),
    q = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    R = Symbol.for("react.profiler"),
    G = Symbol.for("react.consumer"),
    k = Symbol.for("react.context"),
    dl = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    T = Symbol.for("react.memo"),
    A = Symbol.for("react.lazy"),
    Q = Symbol.iterator;
  function al(s) {
    return s === null || typeof s != "object"
      ? null
      : ((s = (Q && s[Q]) || s["@@iterator"]),
        typeof s == "function" ? s : null);
  }
  var xl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    El = Object.assign,
    Dl = {};
  function Hl(s, z, O) {
    (this.props = s),
      (this.context = z),
      (this.refs = Dl),
      (this.updater = O || xl);
  }
  (Hl.prototype.isReactComponent = {}),
    (Hl.prototype.setState = function (s, z) {
      if (typeof s != "object" && typeof s != "function" && s != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, s, z, "setState");
    }),
    (Hl.prototype.forceUpdate = function (s) {
      this.updater.enqueueForceUpdate(this, s, "forceUpdate");
    });
  function ul() {}
  ul.prototype = Hl.prototype;
  function ll(s, z, O) {
    (this.props = s),
      (this.context = z),
      (this.refs = Dl),
      (this.updater = O || xl);
  }
  var W = (ll.prototype = new ul());
  (W.constructor = ll), El(W, Hl.prototype), (W.isPureReactComponent = !0);
  var zl = Array.isArray,
    V = { H: null, A: null, T: null, S: null, V: null },
    Nl = Object.prototype.hasOwnProperty;
  function Jl(s, z, O, M, H, tl) {
    return (
      (O = tl.ref),
      { $$typeof: b, type: s, key: z, ref: O !== void 0 ? O : null, props: tl }
    );
  }
  function kl(s, z) {
    return Jl(s.type, z, void 0, void 0, void 0, s.props);
  }
  function tt(s) {
    return typeof s == "object" && s !== null && s.$$typeof === b;
  }
  function I(s) {
    var z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      s.replace(/[=:]/g, function (O) {
        return z[O];
      })
    );
  }
  var Z = /\/+/g;
  function cl(s, z) {
    return typeof s == "object" && s !== null && s.key != null
      ? I("" + s.key)
      : z.toString(36);
  }
  function _l() {}
  function Cl(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (
          (typeof s.status == "string"
            ? s.then(_l, _l)
            : ((s.status = "pending"),
              s.then(
                function (z) {
                  s.status === "pending" &&
                    ((s.status = "fulfilled"), (s.value = z));
                },
                function (z) {
                  s.status === "pending" &&
                    ((s.status = "rejected"), (s.reason = z));
                }
              )),
          s.status)
        ) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function Sl(s, z, O, M, H) {
    var tl = typeof s;
    (tl === "undefined" || tl === "boolean") && (s = null);
    var X = !1;
    if (s === null) X = !0;
    else
      switch (tl) {
        case "bigint":
        case "string":
        case "number":
          X = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case b:
            case U:
              X = !0;
              break;
            case A:
              return (X = s._init), Sl(X(s._payload), z, O, M, H);
          }
      }
    if (X)
      return (
        (H = H(s)),
        (X = M === "" ? "." + cl(s, 0) : M),
        zl(H)
          ? ((O = ""),
            X != null && (O = X.replace(Z, "$&/") + "/"),
            Sl(H, z, O, "", function (Vt) {
              return Vt;
            }))
          : H != null &&
            (tt(H) &&
              (H = kl(
                H,
                O +
                  (H.key == null || (s && s.key === H.key)
                    ? ""
                    : ("" + H.key).replace(Z, "$&/") + "/") +
                  X
              )),
            z.push(H)),
        1
      );
    X = 0;
    var et = M === "" ? "." : M + ":";
    if (zl(s))
      for (var yl = 0; yl < s.length; yl++)
        (M = s[yl]), (tl = et + cl(M, yl)), (X += Sl(M, z, O, tl, H));
    else if (((yl = al(s)), typeof yl == "function"))
      for (s = yl.call(s), yl = 0; !(M = s.next()).done; )
        (M = M.value), (tl = et + cl(M, yl++)), (X += Sl(M, z, O, tl, H));
    else if (tl === "object") {
      if (typeof s.then == "function") return Sl(Cl(s), z, O, M, H);
      throw (
        ((z = String(s)),
        Error(
          "Objects are not valid as a React child (found: " +
            (z === "[object Object]"
              ? "object with keys {" + Object.keys(s).join(", ") + "}"
              : z) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return X;
  }
  function S(s, z, O) {
    if (s == null) return s;
    var M = [],
      H = 0;
    return (
      Sl(s, M, "", "", function (tl) {
        return z.call(O, tl, H++);
      }),
      M
    );
  }
  function N(s) {
    if (s._status === -1) {
      var z = s._result;
      (z = z()),
        z.then(
          function (O) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 1), (s._result = O));
          },
          function (O) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 2), (s._result = O));
          }
        ),
        s._status === -1 && ((s._status = 0), (s._result = z));
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var Y =
    typeof reportError == "function"
      ? reportError
      : function (s) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var z = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof s == "object" &&
                s !== null &&
                typeof s.message == "string"
                  ? String(s.message)
                  : String(s),
              error: s,
            });
            if (!window.dispatchEvent(z)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", s);
            return;
          }
          console.error(s);
        };
  function hl() {}
  return (
    (L.Children = {
      map: S,
      forEach: function (s, z, O) {
        S(
          s,
          function () {
            z.apply(this, arguments);
          },
          O
        );
      },
      count: function (s) {
        var z = 0;
        return (
          S(s, function () {
            z++;
          }),
          z
        );
      },
      toArray: function (s) {
        return (
          S(s, function (z) {
            return z;
          }) || []
        );
      },
      only: function (s) {
        if (!tt(s))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return s;
      },
    }),
    (L.Component = Hl),
    (L.Fragment = q),
    (L.Profiler = R),
    (L.PureComponent = ll),
    (L.StrictMode = m),
    (L.Suspense = D),
    (L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V),
    (L.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (s) {
        return V.H.useMemoCache(s);
      },
    }),
    (L.cache = function (s) {
      return function () {
        return s.apply(null, arguments);
      };
    }),
    (L.cloneElement = function (s, z, O) {
      if (s == null)
        throw Error(
          "The argument must be a React element, but you passed " + s + "."
        );
      var M = El({}, s.props),
        H = s.key,
        tl = void 0;
      if (z != null)
        for (X in (z.ref !== void 0 && (tl = void 0),
        z.key !== void 0 && (H = "" + z.key),
        z))
          !Nl.call(z, X) ||
            X === "key" ||
            X === "__self" ||
            X === "__source" ||
            (X === "ref" && z.ref === void 0) ||
            (M[X] = z[X]);
      var X = arguments.length - 2;
      if (X === 1) M.children = O;
      else if (1 < X) {
        for (var et = Array(X), yl = 0; yl < X; yl++)
          et[yl] = arguments[yl + 2];
        M.children = et;
      }
      return Jl(s.type, H, void 0, void 0, tl, M);
    }),
    (L.createContext = function (s) {
      return (
        (s = {
          $$typeof: k,
          _currentValue: s,
          _currentValue2: s,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (s.Provider = s),
        (s.Consumer = { $$typeof: G, _context: s }),
        s
      );
    }),
    (L.createElement = function (s, z, O) {
      var M,
        H = {},
        tl = null;
      if (z != null)
        for (M in (z.key !== void 0 && (tl = "" + z.key), z))
          Nl.call(z, M) &&
            M !== "key" &&
            M !== "__self" &&
            M !== "__source" &&
            (H[M] = z[M]);
      var X = arguments.length - 2;
      if (X === 1) H.children = O;
      else if (1 < X) {
        for (var et = Array(X), yl = 0; yl < X; yl++)
          et[yl] = arguments[yl + 2];
        H.children = et;
      }
      if (s && s.defaultProps)
        for (M in ((X = s.defaultProps), X)) H[M] === void 0 && (H[M] = X[M]);
      return Jl(s, tl, void 0, void 0, null, H);
    }),
    (L.createRef = function () {
      return { current: null };
    }),
    (L.forwardRef = function (s) {
      return { $$typeof: dl, render: s };
    }),
    (L.isValidElement = tt),
    (L.lazy = function (s) {
      return { $$typeof: A, _payload: { _status: -1, _result: s }, _init: N };
    }),
    (L.memo = function (s, z) {
      return { $$typeof: T, type: s, compare: z === void 0 ? null : z };
    }),
    (L.startTransition = function (s) {
      var z = V.T,
        O = {};
      V.T = O;
      try {
        var M = s(),
          H = V.S;
        H !== null && H(O, M),
          typeof M == "object" &&
            M !== null &&
            typeof M.then == "function" &&
            M.then(hl, Y);
      } catch (tl) {
        Y(tl);
      } finally {
        V.T = z;
      }
    }),
    (L.unstable_useCacheRefresh = function () {
      return V.H.useCacheRefresh();
    }),
    (L.use = function (s) {
      return V.H.use(s);
    }),
    (L.useActionState = function (s, z, O) {
      return V.H.useActionState(s, z, O);
    }),
    (L.useCallback = function (s, z) {
      return V.H.useCallback(s, z);
    }),
    (L.useContext = function (s) {
      return V.H.useContext(s);
    }),
    (L.useDebugValue = function () {}),
    (L.useDeferredValue = function (s, z) {
      return V.H.useDeferredValue(s, z);
    }),
    (L.useEffect = function (s, z, O) {
      var M = V.H;
      if (typeof O == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return M.useEffect(s, z);
    }),
    (L.useId = function () {
      return V.H.useId();
    }),
    (L.useImperativeHandle = function (s, z, O) {
      return V.H.useImperativeHandle(s, z, O);
    }),
    (L.useInsertionEffect = function (s, z) {
      return V.H.useInsertionEffect(s, z);
    }),
    (L.useLayoutEffect = function (s, z) {
      return V.H.useLayoutEffect(s, z);
    }),
    (L.useMemo = function (s, z) {
      return V.H.useMemo(s, z);
    }),
    (L.useOptimistic = function (s, z) {
      return V.H.useOptimistic(s, z);
    }),
    (L.useReducer = function (s, z, O) {
      return V.H.useReducer(s, z, O);
    }),
    (L.useRef = function (s) {
      return V.H.useRef(s);
    }),
    (L.useState = function (s) {
      return V.H.useState(s);
    }),
    (L.useSyncExternalStore = function (s, z, O) {
      return V.H.useSyncExternalStore(s, z, O);
    }),
    (L.useTransition = function () {
      return V.H.useTransition();
    }),
    (L.version = "19.1.0"),
    L
  );
}
var ed;
function uf() {
  return ed || ((ed = 1), (Fi.exports = Ch())), Fi.exports;
}
var Zl = uf();
const Gh = qh(Zl);
var Ii = { exports: {} },
  bu = {},
  Pi = { exports: {} },
  lf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ad;
function Xh() {
  return (
    ad ||
      ((ad = 1),
      (function (b) {
        function U(S, N) {
          var Y = S.length;
          S.push(N);
          l: for (; 0 < Y; ) {
            var hl = (Y - 1) >>> 1,
              s = S[hl];
            if (0 < R(s, N)) (S[hl] = N), (S[Y] = s), (Y = hl);
            else break l;
          }
        }
        function q(S) {
          return S.length === 0 ? null : S[0];
        }
        function m(S) {
          if (S.length === 0) return null;
          var N = S[0],
            Y = S.pop();
          if (Y !== N) {
            S[0] = Y;
            l: for (var hl = 0, s = S.length, z = s >>> 1; hl < z; ) {
              var O = 2 * (hl + 1) - 1,
                M = S[O],
                H = O + 1,
                tl = S[H];
              if (0 > R(M, Y))
                H < s && 0 > R(tl, M)
                  ? ((S[hl] = tl), (S[H] = Y), (hl = H))
                  : ((S[hl] = M), (S[O] = Y), (hl = O));
              else if (H < s && 0 > R(tl, Y))
                (S[hl] = tl), (S[H] = Y), (hl = H);
              else break l;
            }
          }
          return N;
        }
        function R(S, N) {
          var Y = S.sortIndex - N.sortIndex;
          return Y !== 0 ? Y : S.id - N.id;
        }
        if (
          ((b.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var G = performance;
          b.unstable_now = function () {
            return G.now();
          };
        } else {
          var k = Date,
            dl = k.now();
          b.unstable_now = function () {
            return k.now() - dl;
          };
        }
        var D = [],
          T = [],
          A = 1,
          Q = null,
          al = 3,
          xl = !1,
          El = !1,
          Dl = !1,
          Hl = !1,
          ul = typeof setTimeout == "function" ? setTimeout : null,
          ll = typeof clearTimeout == "function" ? clearTimeout : null,
          W = typeof setImmediate < "u" ? setImmediate : null;
        function zl(S) {
          for (var N = q(T); N !== null; ) {
            if (N.callback === null) m(T);
            else if (N.startTime <= S)
              m(T), (N.sortIndex = N.expirationTime), U(D, N);
            else break;
            N = q(T);
          }
        }
        function V(S) {
          if (((Dl = !1), zl(S), !El))
            if (q(D) !== null) (El = !0), Nl || ((Nl = !0), cl());
            else {
              var N = q(T);
              N !== null && Sl(V, N.startTime - S);
            }
        }
        var Nl = !1,
          Jl = -1,
          kl = 5,
          tt = -1;
        function I() {
          return Hl ? !0 : !(b.unstable_now() - tt < kl);
        }
        function Z() {
          if (((Hl = !1), Nl)) {
            var S = b.unstable_now();
            tt = S;
            var N = !0;
            try {
              l: {
                (El = !1), Dl && ((Dl = !1), ll(Jl), (Jl = -1)), (xl = !0);
                var Y = al;
                try {
                  t: {
                    for (
                      zl(S), Q = q(D);
                      Q !== null && !(Q.expirationTime > S && I());

                    ) {
                      var hl = Q.callback;
                      if (typeof hl == "function") {
                        (Q.callback = null), (al = Q.priorityLevel);
                        var s = hl(Q.expirationTime <= S);
                        if (((S = b.unstable_now()), typeof s == "function")) {
                          (Q.callback = s), zl(S), (N = !0);
                          break t;
                        }
                        Q === q(D) && m(D), zl(S);
                      } else m(D);
                      Q = q(D);
                    }
                    if (Q !== null) N = !0;
                    else {
                      var z = q(T);
                      z !== null && Sl(V, z.startTime - S), (N = !1);
                    }
                  }
                  break l;
                } finally {
                  (Q = null), (al = Y), (xl = !1);
                }
                N = void 0;
              }
            } finally {
              N ? cl() : (Nl = !1);
            }
          }
        }
        var cl;
        if (typeof W == "function")
          cl = function () {
            W(Z);
          };
        else if (typeof MessageChannel < "u") {
          var _l = new MessageChannel(),
            Cl = _l.port2;
          (_l.port1.onmessage = Z),
            (cl = function () {
              Cl.postMessage(null);
            });
        } else
          cl = function () {
            ul(Z, 0);
          };
        function Sl(S, N) {
          Jl = ul(function () {
            S(b.unstable_now());
          }, N);
        }
        (b.unstable_IdlePriority = 5),
          (b.unstable_ImmediatePriority = 1),
          (b.unstable_LowPriority = 4),
          (b.unstable_NormalPriority = 3),
          (b.unstable_Profiling = null),
          (b.unstable_UserBlockingPriority = 2),
          (b.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (b.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (kl = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (b.unstable_getCurrentPriorityLevel = function () {
            return al;
          }),
          (b.unstable_next = function (S) {
            switch (al) {
              case 1:
              case 2:
              case 3:
                var N = 3;
                break;
              default:
                N = al;
            }
            var Y = al;
            al = N;
            try {
              return S();
            } finally {
              al = Y;
            }
          }),
          (b.unstable_requestPaint = function () {
            Hl = !0;
          }),
          (b.unstable_runWithPriority = function (S, N) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var Y = al;
            al = S;
            try {
              return N();
            } finally {
              al = Y;
            }
          }),
          (b.unstable_scheduleCallback = function (S, N, Y) {
            var hl = b.unstable_now();
            switch (
              (typeof Y == "object" && Y !== null
                ? ((Y = Y.delay),
                  (Y = typeof Y == "number" && 0 < Y ? hl + Y : hl))
                : (Y = hl),
              S)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (s = Y + s),
              (S = {
                id: A++,
                callback: N,
                priorityLevel: S,
                startTime: Y,
                expirationTime: s,
                sortIndex: -1,
              }),
              Y > hl
                ? ((S.sortIndex = Y),
                  U(T, S),
                  q(D) === null &&
                    S === q(T) &&
                    (Dl ? (ll(Jl), (Jl = -1)) : (Dl = !0), Sl(V, Y - hl)))
                : ((S.sortIndex = s),
                  U(D, S),
                  El || xl || ((El = !0), Nl || ((Nl = !0), cl()))),
              S
            );
          }),
          (b.unstable_shouldYield = I),
          (b.unstable_wrapCallback = function (S) {
            var N = al;
            return function () {
              var Y = al;
              al = N;
              try {
                return S.apply(this, arguments);
              } finally {
                al = Y;
              }
            };
          });
      })(lf)),
    lf
  );
}
var ud;
function Qh() {
  return ud || ((ud = 1), (Pi.exports = Xh())), Pi.exports;
}
var tf = { exports: {} },
  Kl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd;
function Zh() {
  if (nd) return Kl;
  nd = 1;
  var b = uf();
  function U(D) {
    var T = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var A = 2; A < arguments.length; A++)
        T += "&args[]=" + encodeURIComponent(arguments[A]);
    }
    return (
      "Minified React error #" +
      D +
      "; visit " +
      T +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function q() {}
  var m = {
      d: {
        f: q,
        r: function () {
          throw Error(U(522));
        },
        D: q,
        C: q,
        L: q,
        m: q,
        X: q,
        S: q,
        M: q,
      },
      p: 0,
      findDOMNode: null,
    },
    R = Symbol.for("react.portal");
  function G(D, T, A) {
    var Q =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: R,
      key: Q == null ? null : "" + Q,
      children: D,
      containerInfo: T,
      implementation: A,
    };
  }
  var k = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function dl(D, T) {
    if (D === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : "";
  }
  return (
    (Kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m),
    (Kl.createPortal = function (D, T) {
      var A =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!T || (T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11))
        throw Error(U(299));
      return G(D, T, null, A);
    }),
    (Kl.flushSync = function (D) {
      var T = k.T,
        A = m.p;
      try {
        if (((k.T = null), (m.p = 2), D)) return D();
      } finally {
        (k.T = T), (m.p = A), m.d.f();
      }
    }),
    (Kl.preconnect = function (D, T) {
      typeof D == "string" &&
        (T
          ? ((T = T.crossOrigin),
            (T =
              typeof T == "string"
                ? T === "use-credentials"
                  ? T
                  : ""
                : void 0))
          : (T = null),
        m.d.C(D, T));
    }),
    (Kl.prefetchDNS = function (D) {
      typeof D == "string" && m.d.D(D);
    }),
    (Kl.preinit = function (D, T) {
      if (typeof D == "string" && T && typeof T.as == "string") {
        var A = T.as,
          Q = dl(A, T.crossOrigin),
          al = typeof T.integrity == "string" ? T.integrity : void 0,
          xl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
        A === "style"
          ? m.d.S(D, typeof T.precedence == "string" ? T.precedence : void 0, {
              crossOrigin: Q,
              integrity: al,
              fetchPriority: xl,
            })
          : A === "script" &&
            m.d.X(D, {
              crossOrigin: Q,
              integrity: al,
              fetchPriority: xl,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
      }
    }),
    (Kl.preinitModule = function (D, T) {
      if (typeof D == "string")
        if (typeof T == "object" && T !== null) {
          if (T.as == null || T.as === "script") {
            var A = dl(T.as, T.crossOrigin);
            m.d.M(D, {
              crossOrigin: A,
              integrity: typeof T.integrity == "string" ? T.integrity : void 0,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
          }
        } else T == null && m.d.M(D);
    }),
    (Kl.preload = function (D, T) {
      if (
        typeof D == "string" &&
        typeof T == "object" &&
        T !== null &&
        typeof T.as == "string"
      ) {
        var A = T.as,
          Q = dl(A, T.crossOrigin);
        m.d.L(D, A, {
          crossOrigin: Q,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0,
          type: typeof T.type == "string" ? T.type : void 0,
          fetchPriority:
            typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
          referrerPolicy:
            typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
          imageSrcSet:
            typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
          imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
          media: typeof T.media == "string" ? T.media : void 0,
        });
      }
    }),
    (Kl.preloadModule = function (D, T) {
      if (typeof D == "string")
        if (T) {
          var A = dl(T.as, T.crossOrigin);
          m.d.m(D, {
            as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
            crossOrigin: A,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          });
        } else m.d.m(D);
    }),
    (Kl.requestFormReset = function (D) {
      m.d.r(D);
    }),
    (Kl.unstable_batchedUpdates = function (D, T) {
      return D(T);
    }),
    (Kl.useFormState = function (D, T, A) {
      return k.H.useFormState(D, T, A);
    }),
    (Kl.useFormStatus = function () {
      return k.H.useHostTransitionStatus();
    }),
    (Kl.version = "19.1.0"),
    Kl
  );
}
var cd;
function Lh() {
  if (cd) return tf.exports;
  cd = 1;
  function b() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
      } catch (U) {
        console.error(U);
      }
  }
  return b(), (tf.exports = Zh()), tf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var id;
function Vh() {
  if (id) return bu;
  id = 1;
  var b = Qh(),
    U = uf(),
    q = Lh();
  function m(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function R(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function G(l) {
    var t = l,
      e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), (t.flags & 4098) !== 0 && (e = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function k(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function dl(l) {
    if (G(l) !== l) throw Error(m(188));
  }
  function D(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = G(l)), t === null)) throw Error(m(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((a = u.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return dl(u), l;
          if (n === a) return dl(u), t;
          n = n.sibling;
        }
        throw Error(m(188));
      }
      if (e.return !== a.return) (e = u), (a = n);
      else {
        for (var c = !1, i = u.child; i; ) {
          if (i === e) {
            (c = !0), (e = u), (a = n);
            break;
          }
          if (i === a) {
            (c = !0), (a = u), (e = n);
            break;
          }
          i = i.sibling;
        }
        if (!c) {
          for (i = n.child; i; ) {
            if (i === e) {
              (c = !0), (e = n), (a = u);
              break;
            }
            if (i === a) {
              (c = !0), (a = n), (e = u);
              break;
            }
            i = i.sibling;
          }
          if (!c) throw Error(m(189));
        }
      }
      if (e.alternate !== a) throw Error(m(190));
    }
    if (e.tag !== 3) throw Error(m(188));
    return e.stateNode.current === e ? l : t;
  }
  function T(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = T(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var A = Object.assign,
    Q = Symbol.for("react.element"),
    al = Symbol.for("react.transitional.element"),
    xl = Symbol.for("react.portal"),
    El = Symbol.for("react.fragment"),
    Dl = Symbol.for("react.strict_mode"),
    Hl = Symbol.for("react.profiler"),
    ul = Symbol.for("react.provider"),
    ll = Symbol.for("react.consumer"),
    W = Symbol.for("react.context"),
    zl = Symbol.for("react.forward_ref"),
    V = Symbol.for("react.suspense"),
    Nl = Symbol.for("react.suspense_list"),
    Jl = Symbol.for("react.memo"),
    kl = Symbol.for("react.lazy"),
    tt = Symbol.for("react.activity"),
    I = Symbol.for("react.memo_cache_sentinel"),
    Z = Symbol.iterator;
  function cl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Z && l[Z]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var _l = Symbol.for("react.client.reference");
  function Cl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === _l ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case El:
        return "Fragment";
      case Hl:
        return "Profiler";
      case Dl:
        return "StrictMode";
      case V:
        return "Suspense";
      case Nl:
        return "SuspenseList";
      case tt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case xl:
          return "Portal";
        case W:
          return (l.displayName || "Context") + ".Provider";
        case ll:
          return (l._context.displayName || "Context") + ".Consumer";
        case zl:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case Jl:
          return (
            (t = l.displayName || null), t !== null ? t : Cl(l.type) || "Memo"
          );
        case kl:
          (t = l._payload), (l = l._init);
          try {
            return Cl(l(t));
          } catch {}
      }
    return null;
  }
  var Sl = Array.isArray,
    S = U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    N = q.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Y = { pending: !1, data: null, method: null, action: null },
    hl = [],
    s = -1;
  function z(l) {
    return { current: l };
  }
  function O(l) {
    0 > s || ((l.current = hl[s]), (hl[s] = null), s--);
  }
  function M(l, t) {
    s++, (hl[s] = l.current), (l.current = t);
  }
  var H = z(null),
    tl = z(null),
    X = z(null),
    et = z(null);
  function yl(l, t) {
    switch ((M(X, t), M(tl, l), M(H, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? No(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          (t = No(t)), (l = Oo(t, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    O(H), M(H, l);
  }
  function Vt() {
    O(H), O(tl), O(X);
  }
  function Bn(l) {
    l.memoizedState !== null && M(et, l);
    var t = H.current,
      e = Oo(t, l.type);
    t !== e && (M(tl, l), M(H, e));
  }
  function xu(l) {
    tl.current === l && (O(H), O(tl)),
      et.current === l && (O(et), (du._currentValue = Y));
  }
  var qn = Object.prototype.hasOwnProperty,
    wn = b.unstable_scheduleCallback,
    Yn = b.unstable_cancelCallback,
    md = b.unstable_shouldYield,
    vd = b.unstable_requestPaint,
    zt = b.unstable_now,
    yd = b.unstable_getCurrentPriorityLevel,
    nf = b.unstable_ImmediatePriority,
    cf = b.unstable_UserBlockingPriority,
    Su = b.unstable_NormalPriority,
    gd = b.unstable_LowPriority,
    ff = b.unstable_IdlePriority,
    bd = b.log,
    xd = b.unstable_setDisableYieldValue,
    Sa = null,
    at = null;
  function Kt(l) {
    if (
      (typeof bd == "function" && xd(l),
      at && typeof at.setStrictMode == "function")
    )
      try {
        at.setStrictMode(Sa, l);
      } catch {}
  }
  var ut = Math.clz32 ? Math.clz32 : Td,
    Sd = Math.log,
    pd = Math.LN2;
  function Td(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((Sd(l) / pd) | 0)) | 0;
  }
  var pu = 256,
    Tu = 4194304;
  function ge(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
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
        return l;
    }
  }
  function Eu(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      n = l.suspendedLanes,
      c = l.pingedLanes;
    l = l.warmLanes;
    var i = a & 134217727;
    return (
      i !== 0
        ? ((a = i & ~n),
          a !== 0
            ? (u = ge(a))
            : ((c &= i),
              c !== 0
                ? (u = ge(c))
                : e || ((e = i & ~l), e !== 0 && (u = ge(e)))))
        : ((i = a & ~n),
          i !== 0
            ? (u = ge(i))
            : c !== 0
            ? (u = ge(c))
            : e || ((e = a & ~l), e !== 0 && (u = ge(e)))),
      u === 0
        ? 0
        : t !== 0 &&
          t !== u &&
          (t & n) === 0 &&
          ((n = u & -u),
          (e = t & -t),
          n >= e || (n === 32 && (e & 4194048) !== 0))
        ? t
        : u
    );
  }
  function pa(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Ed(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5e3;
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
  function sf() {
    var l = pu;
    return (pu <<= 1), (pu & 4194048) === 0 && (pu = 256), l;
  }
  function rf() {
    var l = Tu;
    return (Tu <<= 1), (Tu & 62914560) === 0 && (Tu = 4194304), l;
  }
  function Cn(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function Ta(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function zd(l, t, e, a, u, n) {
    var c = l.pendingLanes;
    (l.pendingLanes = e),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= e),
      (l.entangledLanes &= e),
      (l.errorRecoveryDisabledLanes &= e),
      (l.shellSuspendCounter = 0);
    var i = l.entanglements,
      f = l.expirationTimes,
      v = l.hiddenUpdates;
    for (e = c & ~e; 0 < e; ) {
      var x = 31 - ut(e),
        E = 1 << x;
      (i[x] = 0), (f[x] = -1);
      var y = v[x];
      if (y !== null)
        for (v[x] = null, x = 0; x < y.length; x++) {
          var g = y[x];
          g !== null && (g.lane &= -536870913);
        }
      e &= ~E;
    }
    a !== 0 && of(l, a, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
  }
  function of(l, t, e) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var a = 31 - ut(t);
    (l.entangledLanes |= t),
      (l.entanglements[a] = l.entanglements[a] | 1073741824 | (e & 4194090));
  }
  function df(l, t) {
    var e = (l.entangledLanes |= t);
    for (l = l.entanglements; e; ) {
      var a = 31 - ut(e),
        u = 1 << a;
      (u & t) | (l[a] & t) && (l[a] |= t), (e &= ~u);
    }
  }
  function Gn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Xn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function hf() {
    var l = N.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : Jo(l.type));
  }
  function Ad(l, t) {
    var e = N.p;
    try {
      return (N.p = l), t();
    } finally {
      N.p = e;
    }
  }
  var Jt = Math.random().toString(36).slice(2),
    Ll = "__reactFiber$" + Jt,
    $l = "__reactProps$" + Jt,
    Be = "__reactContainer$" + Jt,
    Qn = "__reactEvents$" + Jt,
    Md = "__reactListeners$" + Jt,
    Nd = "__reactHandles$" + Jt,
    mf = "__reactResources$" + Jt,
    Ea = "__reactMarker$" + Jt;
  function Zn(l) {
    delete l[Ll], delete l[$l], delete l[Qn], delete l[Md], delete l[Nd];
  }
  function qe(l) {
    var t = l[Ll];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if ((t = e[Be] || e[Ll])) {
        if (
          ((e = t.alternate),
          t.child !== null || (e !== null && e.child !== null))
        )
          for (l = Uo(l); l !== null; ) {
            if ((e = l[Ll])) return e;
            l = Uo(l);
          }
        return t;
      }
      (l = e), (e = l.parentNode);
    }
    return null;
  }
  function we(l) {
    if ((l = l[Ll] || l[Be])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function za(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(m(33));
  }
  function Ye(l) {
    var t = l[mf];
    return (
      t ||
        (t = l[mf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Bl(l) {
    l[Ea] = !0;
  }
  var vf = new Set(),
    yf = {};
  function be(l, t) {
    Ce(l, t), Ce(l + "Capture", t);
  }
  function Ce(l, t) {
    for (yf[l] = t, l = 0; l < t.length; l++) vf.add(t[l]);
  }
  var Od = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    gf = {},
    bf = {};
  function jd(l) {
    return qn.call(bf, l)
      ? !0
      : qn.call(gf, l)
      ? !1
      : Od.test(l)
      ? (bf[l] = !0)
      : ((gf[l] = !0), !1);
  }
  function zu(l, t, e) {
    if (jd(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
  }
  function Au(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Dt(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  var Ln, xf;
  function Ge(l) {
    if (Ln === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        (Ln = (t && t[1]) || ""),
          (xf =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Ln +
      l +
      xf
    );
  }
  var Vn = !1;
  function Kn(l, t) {
    if (!l || Vn) return "";
    Vn = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var E = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(E.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(E, []);
                } catch (g) {
                  var y = g;
                }
                Reflect.construct(l, [], E);
              } else {
                try {
                  E.call();
                } catch (g) {
                  y = g;
                }
                l.call(E.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                y = g;
              }
              (E = l()) &&
                typeof E.catch == "function" &&
                E.catch(function () {});
            }
          } catch (g) {
            if (g && y && typeof g.stack == "string") return [g.stack, y.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        c = n[0],
        i = n[1];
      if (c && i) {
        var f = c.split(`
`),
          v = i.split(`
`);
        for (
          u = a = 0;
          a < f.length && !f[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; u < v.length && !v[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === f.length || u === v.length)
          for (
            a = f.length - 1, u = v.length - 1;
            1 <= a && 0 <= u && f[a] !== v[u];

          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (f[a] !== v[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || f[a] !== v[u])) {
                  var x =
                    `
` + f[a].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      x.includes("<anonymous>") &&
                      (x = x.replace("<anonymous>", l.displayName)),
                    x
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      (Vn = !1), (Error.prepareStackTrace = e);
    }
    return (e = l ? l.displayName || l.name : "") ? Ge(e) : "";
  }
  function Dd(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ge(l.type);
      case 16:
        return Ge("Lazy");
      case 13:
        return Ge("Suspense");
      case 19:
        return Ge("SuspenseList");
      case 0:
      case 15:
        return Kn(l.type, !1);
      case 11:
        return Kn(l.type.render, !1);
      case 1:
        return Kn(l.type, !0);
      case 31:
        return Ge("Activity");
      default:
        return "";
    }
  }
  function Sf(l) {
    try {
      var t = "";
      do (t += Dd(l)), (l = l.return);
      while (l);
      return t;
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      );
    }
  }
  function dt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function pf(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function _d(l) {
    var t = pf(l) ? "checked" : "value",
      e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
      a = "" + l[t];
    if (
      !l.hasOwnProperty(t) &&
      typeof e < "u" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    ) {
      var u = e.get,
        n = e.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (c) {
            (a = "" + c), n.call(this, c);
          },
        }),
        Object.defineProperty(l, t, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function Mu(l) {
    l._valueTracker || (l._valueTracker = _d(l));
  }
  function Tf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(),
      a = "";
    return (
      l && (a = pf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = a),
      l !== e ? (t.setValue(l), !0) : !1
    );
  }
  function Nu(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Ud = /[\n"\\]/g;
  function ht(l) {
    return l.replace(Ud, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Jn(l, t, e, a, u, n, c, i) {
    (l.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + dt(t))
          : l.value !== "" + dt(t) && (l.value = "" + dt(t))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      t != null
        ? kn(l, c, dt(t))
        : e != null
        ? kn(l, c, dt(e))
        : a != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null &&
        (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.name = "" + dt(i))
        : l.removeAttribute("name");
  }
  function Ef(l, t, e, a, u, n, c, i) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || e != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) return;
      (e = e != null ? "" + dt(e) : ""),
        (t = t != null ? "" + dt(t) : e),
        i || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (l.checked = i ? l.checked : !!a),
      (l.defaultChecked = !!a),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c);
  }
  function kn(l, t, e) {
    (t === "number" && Nu(l.ownerDocument) === l) ||
      l.defaultValue === "" + e ||
      (l.defaultValue = "" + e);
  }
  function Xe(l, t, e, a) {
    if (((l = l.options), t)) {
      t = {};
      for (var u = 0; u < e.length; u++) t["$" + e[u]] = !0;
      for (e = 0; e < l.length; e++)
        (u = t.hasOwnProperty("$" + l[e].value)),
          l[e].selected !== u && (l[e].selected = u),
          u && a && (l[e].defaultSelected = !0);
    } else {
      for (e = "" + dt(e), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === e) {
          (l[u].selected = !0), a && (l[u].defaultSelected = !0);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function zf(l, t, e) {
    if (
      t != null &&
      ((t = "" + dt(t)), t !== l.value && (l.value = t), e == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + dt(e) : "";
  }
  function Af(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(m(92));
        if (Sl(a)) {
          if (1 < a.length) throw Error(m(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), (t = e);
    }
    (e = dt(t)),
      (l.defaultValue = e),
      (a = l.textContent),
      a === e && a !== "" && a !== null && (l.value = a);
  }
  function Qe(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Rd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Mf(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? a
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : a
      ? l.setProperty(t, e)
      : typeof e != "number" || e === 0 || Rd.has(t)
      ? t === "float"
        ? (l.cssFloat = e)
        : (l[t] = ("" + e).trim())
      : (l[t] = e + "px");
  }
  function Nf(l, t, e) {
    if (t != null && typeof t != "object") throw Error(m(62));
    if (((l = l.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? l.setProperty(a, "")
            : a === "float"
            ? (l.cssFloat = "")
            : (l[a] = ""));
      for (var u in t)
        (a = t[u]), t.hasOwnProperty(u) && e[u] !== a && Mf(l, u, a);
    } else for (var n in t) t.hasOwnProperty(n) && Mf(l, n, t[n]);
  }
  function Wn(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Hd = new Map([
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
    Bd =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ou(l) {
    return Bd.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var $n = null;
  function Fn(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Ze = null,
    Le = null;
  function Of(l) {
    var t = we(l);
    if (t && (l = t.stateNode)) {
      var e = l[$l] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (Jn(
              l,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name
            ),
            (t = e.name),
            e.type === "radio" && t != null)
          ) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + ht("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < e.length;
              t++
            ) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var u = a[$l] || null;
                if (!u) throw Error(m(90));
                Jn(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < e.length; t++)
              (a = e[t]), a.form === l.form && Tf(a);
          }
          break l;
        case "textarea":
          zf(l, e.value, e.defaultValue);
          break l;
        case "select":
          (t = e.value), t != null && Xe(l, !!e.multiple, t, !1);
      }
    }
  }
  var In = !1;
  function jf(l, t, e) {
    if (In) return l(t, e);
    In = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (
        ((In = !1),
        (Ze !== null || Le !== null) &&
          (mn(), Ze && ((t = Ze), (l = Le), (Le = Ze = null), Of(t), l)))
      )
        for (t = 0; t < l.length; t++) Of(l[t]);
    }
  }
  function Aa(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[$l] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
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
          ((l = l.type),
          (a = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !a);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function") throw Error(m(231, t, typeof e));
    return e;
  }
  var _t = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Pn = !1;
  if (_t)
    try {
      var Ma = {};
      Object.defineProperty(Ma, "passive", {
        get: function () {
          Pn = !0;
        },
      }),
        window.addEventListener("test", Ma, Ma),
        window.removeEventListener("test", Ma, Ma);
    } catch {
      Pn = !1;
    }
  var kt = null,
    lc = null,
    ju = null;
  function Df() {
    if (ju) return ju;
    var l,
      t = lc,
      e = t.length,
      a,
      u = "value" in kt ? kt.value : kt.textContent,
      n = u.length;
    for (l = 0; l < e && t[l] === u[l]; l++);
    var c = e - l;
    for (a = 1; a <= c && t[e - a] === u[n - a]; a++);
    return (ju = u.slice(l, 1 < a ? 1 - a : void 0));
  }
  function Du(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function _u() {
    return !0;
  }
  function _f() {
    return !1;
  }
  function Fl(l) {
    function t(e, a, u, n, c) {
      (this._reactName = e),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null);
      for (var i in l)
        l.hasOwnProperty(i) && ((e = l[i]), (this[i] = e ? e(n) : n[i]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? _u
          : _f),
        (this.isPropagationStopped = _f),
        this
      );
    }
    return (
      A(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = _u));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = _u));
        },
        persist: function () {},
        isPersistent: _u,
      }),
      t
    );
  }
  var xe = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Uu = Fl(xe),
    Na = A({}, xe, { view: 0, detail: 0 }),
    qd = Fl(Na),
    tc,
    ec,
    Oa,
    Ru = A({}, Na, {
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
      getModifierState: uc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Oa &&
              (Oa && l.type === "mousemove"
                ? ((tc = l.screenX - Oa.screenX), (ec = l.screenY - Oa.screenY))
                : (ec = tc = 0),
              (Oa = l)),
            tc);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : ec;
      },
    }),
    Uf = Fl(Ru),
    wd = A({}, Ru, { dataTransfer: 0 }),
    Yd = Fl(wd),
    Cd = A({}, Na, { relatedTarget: 0 }),
    ac = Fl(Cd),
    Gd = A({}, xe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Xd = Fl(Gd),
    Qd = A({}, xe, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Zd = Fl(Qd),
    Ld = A({}, xe, { data: 0 }),
    Rf = Fl(Ld),
    Vd = {
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
    Kd = {
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
    Jd = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function kd(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = Jd[l])
      ? !!t[l]
      : !1;
  }
  function uc() {
    return kd;
  }
  var Wd = A({}, Na, {
      key: function (l) {
        if (l.key) {
          var t = Vd[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Du(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? Kd[l.keyCode] || "Unidentified"
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
      getModifierState: uc,
      charCode: function (l) {
        return l.type === "keypress" ? Du(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Du(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    $d = Fl(Wd),
    Fd = A({}, Ru, {
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
    Hf = Fl(Fd),
    Id = A({}, Na, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: uc,
    }),
    Pd = Fl(Id),
    l0 = A({}, xe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    t0 = Fl(l0),
    e0 = A({}, Ru, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    a0 = Fl(e0),
    u0 = A({}, xe, { newState: 0, oldState: 0 }),
    n0 = Fl(u0),
    c0 = [9, 13, 27, 32],
    nc = _t && "CompositionEvent" in window,
    ja = null;
  _t && "documentMode" in document && (ja = document.documentMode);
  var i0 = _t && "TextEvent" in window && !ja,
    Bf = _t && (!nc || (ja && 8 < ja && 11 >= ja)),
    qf = " ",
    wf = !1;
  function Yf(l, t) {
    switch (l) {
      case "keyup":
        return c0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Cf(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ve = !1;
  function f0(l, t) {
    switch (l) {
      case "compositionend":
        return Cf(t);
      case "keypress":
        return t.which !== 32 ? null : ((wf = !0), qf);
      case "textInput":
        return (l = t.data), l === qf && wf ? null : l;
      default:
        return null;
    }
  }
  function s0(l, t) {
    if (Ve)
      return l === "compositionend" || (!nc && Yf(l, t))
        ? ((l = Df()), (ju = lc = kt = null), (Ve = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Bf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var r0 = {
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
  function Gf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!r0[l.type] : t === "textarea";
  }
  function Xf(l, t, e, a) {
    Ze ? (Le ? Le.push(a) : (Le = [a])) : (Ze = a),
      (t = Sn(t, "onChange")),
      0 < t.length &&
        ((e = new Uu("onChange", "change", null, e, a)),
        l.push({ event: e, listeners: t }));
  }
  var Da = null,
    _a = null;
  function o0(l) {
    To(l, 0);
  }
  function Hu(l) {
    var t = za(l);
    if (Tf(t)) return l;
  }
  function Qf(l, t) {
    if (l === "change") return t;
  }
  var Zf = !1;
  if (_t) {
    var cc;
    if (_t) {
      var ic = "oninput" in document;
      if (!ic) {
        var Lf = document.createElement("div");
        Lf.setAttribute("oninput", "return;"),
          (ic = typeof Lf.oninput == "function");
      }
      cc = ic;
    } else cc = !1;
    Zf = cc && (!document.documentMode || 9 < document.documentMode);
  }
  function Vf() {
    Da && (Da.detachEvent("onpropertychange", Kf), (_a = Da = null));
  }
  function Kf(l) {
    if (l.propertyName === "value" && Hu(_a)) {
      var t = [];
      Xf(t, _a, l, Fn(l)), jf(o0, t);
    }
  }
  function d0(l, t, e) {
    l === "focusin"
      ? (Vf(), (Da = t), (_a = e), Da.attachEvent("onpropertychange", Kf))
      : l === "focusout" && Vf();
  }
  function h0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Hu(_a);
  }
  function m0(l, t) {
    if (l === "click") return Hu(t);
  }
  function v0(l, t) {
    if (l === "input" || l === "change") return Hu(t);
  }
  function y0(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var nt = typeof Object.is == "function" ? Object.is : y0;
  function Ua(l, t) {
    if (nt(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var e = Object.keys(l),
      a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!qn.call(t, u) || !nt(l[u], t[u])) return !1;
    }
    return !0;
  }
  function Jf(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function kf(l, t) {
    var e = Jf(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = l + e.textContent.length), l <= t && a >= t))
          return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = Jf(e);
    }
  }
  function Wf(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Wf(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function $f(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Nu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Nu(l.document);
    }
    return t;
  }
  function fc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var g0 = _t && "documentMode" in document && 11 >= document.documentMode,
    Ke = null,
    sc = null,
    Ra = null,
    rc = !1;
  function Ff(l, t, e) {
    var a =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    rc ||
      Ke == null ||
      Ke !== Nu(a) ||
      ((a = Ke),
      "selectionStart" in a && fc(a)
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
      (Ra && Ua(Ra, a)) ||
        ((Ra = a),
        (a = Sn(sc, "onSelect")),
        0 < a.length &&
          ((t = new Uu("onSelect", "select", null, t, e)),
          l.push({ event: t, listeners: a }),
          (t.target = Ke))));
  }
  function Se(l, t) {
    var e = {};
    return (
      (e[l.toLowerCase()] = t.toLowerCase()),
      (e["Webkit" + l] = "webkit" + t),
      (e["Moz" + l] = "moz" + t),
      e
    );
  }
  var Je = {
      animationend: Se("Animation", "AnimationEnd"),
      animationiteration: Se("Animation", "AnimationIteration"),
      animationstart: Se("Animation", "AnimationStart"),
      transitionrun: Se("Transition", "TransitionRun"),
      transitionstart: Se("Transition", "TransitionStart"),
      transitioncancel: Se("Transition", "TransitionCancel"),
      transitionend: Se("Transition", "TransitionEnd"),
    },
    oc = {},
    If = {};
  _t &&
    ((If = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Je.animationend.animation,
      delete Je.animationiteration.animation,
      delete Je.animationstart.animation),
    "TransitionEvent" in window || delete Je.transitionend.transition);
  function pe(l) {
    if (oc[l]) return oc[l];
    if (!Je[l]) return l;
    var t = Je[l],
      e;
    for (e in t) if (t.hasOwnProperty(e) && e in If) return (oc[l] = t[e]);
    return l;
  }
  var Pf = pe("animationend"),
    ls = pe("animationiteration"),
    ts = pe("animationstart"),
    b0 = pe("transitionrun"),
    x0 = pe("transitionstart"),
    S0 = pe("transitioncancel"),
    es = pe("transitionend"),
    as = new Map(),
    dc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  dc.push("scrollEnd");
  function pt(l, t) {
    as.set(l, t), be(t, [l]);
  }
  var us = new WeakMap();
  function mt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = us.get(l);
      return e !== void 0
        ? e
        : ((t = { value: l, source: t, stack: Sf(t) }), us.set(l, t), t);
    }
    return { value: l, source: t, stack: Sf(t) };
  }
  var vt = [],
    ke = 0,
    hc = 0;
  function Bu() {
    for (var l = ke, t = (hc = ke = 0); t < l; ) {
      var e = vt[t];
      vt[t++] = null;
      var a = vt[t];
      vt[t++] = null;
      var u = vt[t];
      vt[t++] = null;
      var n = vt[t];
      if (((vt[t++] = null), a !== null && u !== null)) {
        var c = a.pending;
        c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)),
          (a.pending = u);
      }
      n !== 0 && ns(e, u, n);
    }
  }
  function qu(l, t, e, a) {
    (vt[ke++] = l),
      (vt[ke++] = t),
      (vt[ke++] = e),
      (vt[ke++] = a),
      (hc |= a),
      (l.lanes |= a),
      (l = l.alternate),
      l !== null && (l.lanes |= a);
  }
  function mc(l, t, e, a) {
    return qu(l, t, e, a), wu(l);
  }
  function We(l, t) {
    return qu(l, null, null, t), wu(l);
  }
  function ns(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = l.return; n !== null; )
      (n.childLanes |= e),
        (a = n.alternate),
        a !== null && (a.childLanes |= e),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
        (l = n),
        (n = n.return);
    return l.tag === 3
      ? ((n = l.stateNode),
        u &&
          t !== null &&
          ((u = 31 - ut(e)),
          (l = n.hiddenUpdates),
          (a = l[u]),
          a === null ? (l[u] = [t]) : a.push(t),
          (t.lane = e | 536870912)),
        n)
      : null;
  }
  function wu(l) {
    if (50 < uu) throw ((uu = 0), (Si = null), Error(m(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var $e = {};
  function p0(l, t, e, a) {
    (this.tag = l),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
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
  function ct(l, t, e, a) {
    return new p0(l, t, e, a);
  }
  function vc(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function Ut(l, t) {
    var e = l.alternate;
    return (
      e === null
        ? ((e = ct(l.tag, t, l.key, l.mode)),
          (e.elementType = l.elementType),
          (e.type = l.type),
          (e.stateNode = l.stateNode),
          (e.alternate = l),
          (l.alternate = e))
        : ((e.pendingProps = t),
          (e.type = l.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = l.flags & 65011712),
      (e.childLanes = l.childLanes),
      (e.lanes = l.lanes),
      (e.child = l.child),
      (e.memoizedProps = l.memoizedProps),
      (e.memoizedState = l.memoizedState),
      (e.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (e.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (e.sibling = l.sibling),
      (e.index = l.index),
      (e.ref = l.ref),
      (e.refCleanup = l.refCleanup),
      e
    );
  }
  function cs(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return (
      e === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = e.childLanes),
          (l.lanes = e.lanes),
          (l.child = e.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = e.memoizedProps),
          (l.memoizedState = e.memoizedState),
          (l.updateQueue = e.updateQueue),
          (l.type = e.type),
          (t = e.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Yu(l, t, e, a, u, n) {
    var c = 0;
    if (((a = l), typeof l == "function")) vc(l) && (c = 1);
    else if (typeof l == "string")
      c = Eh(l, e, H.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case tt:
          return (l = ct(31, e, t, u)), (l.elementType = tt), (l.lanes = n), l;
        case El:
          return Te(e.children, u, n, t);
        case Dl:
          (c = 8), (u |= 24);
          break;
        case Hl:
          return (
            (l = ct(12, e, t, u | 2)), (l.elementType = Hl), (l.lanes = n), l
          );
        case V:
          return (l = ct(13, e, t, u)), (l.elementType = V), (l.lanes = n), l;
        case Nl:
          return (l = ct(19, e, t, u)), (l.elementType = Nl), (l.lanes = n), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case ul:
              case W:
                c = 10;
                break l;
              case ll:
                c = 9;
                break l;
              case zl:
                c = 11;
                break l;
              case Jl:
                c = 14;
                break l;
              case kl:
                (c = 16), (a = null);
                break l;
            }
          (c = 29),
            (e = Error(m(130, l === null ? "null" : typeof l, ""))),
            (a = null);
      }
    return (
      (t = ct(c, e, t, u)), (t.elementType = l), (t.type = a), (t.lanes = n), t
    );
  }
  function Te(l, t, e, a) {
    return (l = ct(7, l, a, t)), (l.lanes = e), l;
  }
  function yc(l, t, e) {
    return (l = ct(6, l, null, t)), (l.lanes = e), l;
  }
  function gc(l, t, e) {
    return (
      (t = ct(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = e),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var Fe = [],
    Ie = 0,
    Cu = null,
    Gu = 0,
    yt = [],
    gt = 0,
    Ee = null,
    Rt = 1,
    Ht = "";
  function ze(l, t) {
    (Fe[Ie++] = Gu), (Fe[Ie++] = Cu), (Cu = l), (Gu = t);
  }
  function is(l, t, e) {
    (yt[gt++] = Rt), (yt[gt++] = Ht), (yt[gt++] = Ee), (Ee = l);
    var a = Rt;
    l = Ht;
    var u = 32 - ut(a) - 1;
    (a &= ~(1 << u)), (e += 1);
    var n = 32 - ut(t) + u;
    if (30 < n) {
      var c = u - (u % 5);
      (n = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (u -= c),
        (Rt = (1 << (32 - ut(t) + u)) | (e << u) | a),
        (Ht = n + l);
    } else (Rt = (1 << n) | (e << u) | a), (Ht = l);
  }
  function bc(l) {
    l.return !== null && (ze(l, 1), is(l, 1, 0));
  }
  function xc(l) {
    for (; l === Cu; )
      (Cu = Fe[--Ie]), (Fe[Ie] = null), (Gu = Fe[--Ie]), (Fe[Ie] = null);
    for (; l === Ee; )
      (Ee = yt[--gt]),
        (yt[gt] = null),
        (Ht = yt[--gt]),
        (yt[gt] = null),
        (Rt = yt[--gt]),
        (yt[gt] = null);
  }
  var Wl = null,
    pl = null,
    nl = !1,
    Ae = null,
    At = !1,
    Sc = Error(m(519));
  function Me(l) {
    var t = Error(m(418, ""));
    throw (qa(mt(t, l)), Sc);
  }
  function fs(l) {
    var t = l.stateNode,
      e = l.type,
      a = l.memoizedProps;
    switch (((t[Ll] = l), (t[$l] = a), e)) {
      case "dialog":
        F("cancel", t), F("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        F("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < cu.length; e++) F(cu[e], t);
        break;
      case "source":
        F("error", t);
        break;
      case "img":
      case "image":
      case "link":
        F("error", t), F("load", t);
        break;
      case "details":
        F("toggle", t);
        break;
      case "input":
        F("invalid", t),
          Ef(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          Mu(t);
        break;
      case "select":
        F("invalid", t);
        break;
      case "textarea":
        F("invalid", t), Af(t, a.value, a.defaultValue, a.children), Mu(t);
    }
    (e = a.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      t.textContent === "" + e ||
      a.suppressHydrationWarning === !0 ||
      Mo(t.textContent, e)
        ? (a.popover != null && (F("beforetoggle", t), F("toggle", t)),
          a.onScroll != null && F("scroll", t),
          a.onScrollEnd != null && F("scrollend", t),
          a.onClick != null && (t.onclick = pn),
          (t = !0))
        : (t = !1),
      t || Me(l);
  }
  function ss(l) {
    for (Wl = l.return; Wl; )
      switch (Wl.tag) {
        case 5:
        case 13:
          At = !1;
          return;
        case 27:
        case 3:
          At = !0;
          return;
        default:
          Wl = Wl.return;
      }
  }
  function Ha(l) {
    if (l !== Wl) return !1;
    if (!nl) return ss(l), (nl = !0), !1;
    var t = l.tag,
      e;
    if (
      ((e = t !== 3 && t !== 27) &&
        ((e = t === 5) &&
          ((e = l.type),
          (e =
            !(e !== "form" && e !== "button") || qi(l.type, l.memoizedProps))),
        (e = !e)),
      e && pl && Me(l),
      ss(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(m(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (((e = l.data), e === "/$")) {
              if (t === 0) {
                pl = Et(l.nextSibling);
                break l;
              }
              t--;
            } else (e !== "$" && e !== "$!" && e !== "$?") || t++;
          l = l.nextSibling;
        }
        pl = null;
      }
    } else
      t === 27
        ? ((t = pl), re(l.type) ? ((l = Gi), (Gi = null), (pl = l)) : (pl = t))
        : (pl = Wl ? Et(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Ba() {
    (pl = Wl = null), (nl = !1);
  }
  function rs() {
    var l = Ae;
    return (
      l !== null &&
        (lt === null ? (lt = l) : lt.push.apply(lt, l), (Ae = null)),
      l
    );
  }
  function qa(l) {
    Ae === null ? (Ae = [l]) : Ae.push(l);
  }
  var pc = z(null),
    Ne = null,
    Bt = null;
  function Wt(l, t, e) {
    M(pc, t._currentValue), (t._currentValue = e);
  }
  function qt(l) {
    (l._currentValue = pc.current), O(pc);
  }
  function Tc(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        l === e)
      )
        break;
      l = l.return;
    }
  }
  function Ec(l, t, e, a) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var i = n;
          n = u;
          for (var f = 0; f < t.length; f++)
            if (i.context === t[f]) {
              (n.lanes |= e),
                (i = n.alternate),
                i !== null && (i.lanes |= e),
                Tc(n.return, e, l),
                a || (c = null);
              break l;
            }
          n = i.next;
        }
      } else if (u.tag === 18) {
        if (((c = u.return), c === null)) throw Error(m(341));
        (c.lanes |= e),
          (n = c.alternate),
          n !== null && (n.lanes |= e),
          Tc(c, e, l),
          (c = null);
      } else c = u.child;
      if (c !== null) c.return = u;
      else
        for (c = u; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (((u = c.sibling), u !== null)) {
            (u.return = c.return), (c = u);
            break;
          }
          c = c.return;
        }
      u = c;
    }
  }
  function wa(l, t, e, a) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(m(387));
        if (((c = c.memoizedProps), c !== null)) {
          var i = u.type;
          nt(u.pendingProps.value, c.value) ||
            (l !== null ? l.push(i) : (l = [i]));
        }
      } else if (u === et.current) {
        if (((c = u.alternate), c === null)) throw Error(m(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(du) : (l = [du]));
      }
      u = u.return;
    }
    l !== null && Ec(t, l, e, a), (t.flags |= 262144);
  }
  function Xu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!nt(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Oe(l) {
    (Ne = l),
      (Bt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Vl(l) {
    return os(Ne, l);
  }
  function Qu(l, t) {
    return Ne === null && Oe(l), os(l, t);
  }
  function os(l, t) {
    var e = t._currentValue;
    if (((t = { context: t, memoizedValue: e, next: null }), Bt === null)) {
      if (l === null) throw Error(m(308));
      (Bt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else Bt = Bt.next = t;
    return e;
  }
  var T0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (e) {
                  return e();
                });
            };
          },
    E0 = b.unstable_scheduleCallback,
    z0 = b.unstable_NormalPriority,
    Ul = {
      $$typeof: W,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function zc() {
    return { controller: new T0(), data: new Map(), refCount: 0 };
  }
  function Ya(l) {
    l.refCount--,
      l.refCount === 0 &&
        E0(z0, function () {
          l.controller.abort();
        });
  }
  var Ca = null,
    Ac = 0,
    Pe = 0,
    la = null;
  function A0(l, t) {
    if (Ca === null) {
      var e = (Ca = []);
      (Ac = 0),
        (Pe = Ni()),
        (la = {
          status: "pending",
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        });
    }
    return Ac++, t.then(ds, ds), t;
  }
  function ds() {
    if (--Ac === 0 && Ca !== null) {
      la !== null && (la.status = "fulfilled");
      var l = Ca;
      (Ca = null), (Pe = 0), (la = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function M0(l, t) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          e.push(u);
        },
      };
    return (
      l.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var u = 0; u < e.length; u++) (0, e[u])(t);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
            (0, e[u])(void 0);
        }
      ),
      a
    );
  }
  var hs = S.S;
  S.S = function (l, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      A0(l, t),
      hs !== null && hs(l, t);
  };
  var je = z(null);
  function Mc() {
    var l = je.current;
    return l !== null ? l : vl.pooledCache;
  }
  function Zu(l, t) {
    t === null ? M(je, je.current) : M(je, t.pool);
  }
  function ms() {
    var l = Mc();
    return l === null ? null : { parent: Ul._currentValue, pool: l };
  }
  var Ga = Error(m(460)),
    vs = Error(m(474)),
    Lu = Error(m(542)),
    Nc = { then: function () {} };
  function ys(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function Vu() {}
  function gs(l, t, e) {
    switch (
      ((e = l[e]),
      e === void 0 ? l.push(t) : e !== t && (t.then(Vu, Vu), (t = e)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), xs(l), l);
      default:
        if (typeof t.status == "string") t.then(Vu, Vu);
        else {
          if (((l = vl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(m(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (a) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "fulfilled"), (u.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "rejected"), (u.reason = a);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), xs(l), l);
        }
        throw ((Xa = t), Ga);
    }
  }
  var Xa = null;
  function bs() {
    if (Xa === null) throw Error(m(459));
    var l = Xa;
    return (Xa = null), l;
  }
  function xs(l) {
    if (l === Ga || l === Lu) throw Error(m(483));
  }
  var $t = !1;
  function Oc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function jc(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function Ft(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function It(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (il & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (a.pending = t),
        (t = wu(l)),
        ns(l, null, e),
        t
      );
    }
    return qu(l, a, t, e), wu(l);
  }
  function Qa(l, t, e) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (e & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= l.pendingLanes), (e |= a), (t.lanes = e), df(l, e);
    }
  }
  function Dc(l, t) {
    var e = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var u = null,
        n = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var c = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          n === null ? (u = n = c) : (n = n.next = c), (e = e.next);
        } while (e !== null);
        n === null ? (u = n = t) : (n = n.next = t);
      } else u = n = t;
      (e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (l.updateQueue = e);
      return;
    }
    (l = e.lastBaseUpdate),
      l === null ? (e.firstBaseUpdate = t) : (l.next = t),
      (e.lastBaseUpdate = t);
  }
  var _c = !1;
  function Za() {
    if (_c) {
      var l = la;
      if (l !== null) throw l;
    }
  }
  function La(l, t, e, a) {
    _c = !1;
    var u = l.updateQueue;
    $t = !1;
    var n = u.firstBaseUpdate,
      c = u.lastBaseUpdate,
      i = u.shared.pending;
    if (i !== null) {
      u.shared.pending = null;
      var f = i,
        v = f.next;
      (f.next = null), c === null ? (n = v) : (c.next = v), (c = f);
      var x = l.alternate;
      x !== null &&
        ((x = x.updateQueue),
        (i = x.lastBaseUpdate),
        i !== c &&
          (i === null ? (x.firstBaseUpdate = v) : (i.next = v),
          (x.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var E = u.baseState;
      (c = 0), (x = v = f = null), (i = n);
      do {
        var y = i.lane & -536870913,
          g = y !== i.lane;
        if (g ? (P & y) === y : (a & y) === y) {
          y !== 0 && y === Pe && (_c = !0),
            x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var C = l,
              B = i;
            y = t;
            var ol = e;
            switch (B.tag) {
              case 1:
                if (((C = B.payload), typeof C == "function")) {
                  E = C.call(ol, E, y);
                  break l;
                }
                E = C;
                break l;
              case 3:
                C.flags = (C.flags & -65537) | 128;
              case 0:
                if (
                  ((C = B.payload),
                  (y = typeof C == "function" ? C.call(ol, E, y) : C),
                  y == null)
                )
                  break l;
                E = A({}, E, y);
                break l;
              case 2:
                $t = !0;
            }
          }
          (y = i.callback),
            y !== null &&
              ((l.flags |= 64),
              g && (l.flags |= 8192),
              (g = u.callbacks),
              g === null ? (u.callbacks = [y]) : g.push(y));
        } else
          (g = {
            lane: y,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            x === null ? ((v = x = g), (f = E)) : (x = x.next = g),
            (c |= y);
        if (((i = i.next), i === null)) {
          if (((i = u.shared.pending), i === null)) break;
          (g = i),
            (i = g.next),
            (g.next = null),
            (u.lastBaseUpdate = g),
            (u.shared.pending = null);
        }
      } while (!0);
      x === null && (f = E),
        (u.baseState = f),
        (u.firstBaseUpdate = v),
        (u.lastBaseUpdate = x),
        n === null && (u.shared.lanes = 0),
        (ce |= c),
        (l.lanes = c),
        (l.memoizedState = E);
    }
  }
  function Ss(l, t) {
    if (typeof l != "function") throw Error(m(191, l));
    l.call(t);
  }
  function ps(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++) Ss(e[l], t);
  }
  var ta = z(null),
    Ku = z(0);
  function Ts(l, t) {
    (l = Zt), M(Ku, l), M(ta, t), (Zt = l | t.baseLanes);
  }
  function Uc() {
    M(Ku, Zt), M(ta, ta.current);
  }
  function Rc() {
    (Zt = Ku.current), O(ta), O(Ku);
  }
  var Pt = 0,
    K = null,
    sl = null,
    Ol = null,
    Ju = !1,
    ea = !1,
    De = !1,
    ku = 0,
    Va = 0,
    aa = null,
    N0 = 0;
  function Al() {
    throw Error(m(321));
  }
  function Hc(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!nt(l[e], t[e])) return !1;
    return !0;
  }
  function Bc(l, t, e, a, u, n) {
    return (
      (Pt = n),
      (K = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (S.H = l === null || l.memoizedState === null ? nr : cr),
      (De = !1),
      (n = e(a, u)),
      (De = !1),
      ea && (n = zs(t, e, a, u)),
      Es(l),
      n
    );
  }
  function Es(l) {
    S.H = ln;
    var t = sl !== null && sl.next !== null;
    if (((Pt = 0), (Ol = sl = K = null), (Ju = !1), (Va = 0), (aa = null), t))
      throw Error(m(300));
    l === null ||
      ql ||
      ((l = l.dependencies), l !== null && Xu(l) && (ql = !0));
  }
  function zs(l, t, e, a) {
    K = l;
    var u = 0;
    do {
      if ((ea && (aa = null), (Va = 0), (ea = !1), 25 <= u))
        throw Error(m(301));
      if (((u += 1), (Ol = sl = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (S.H = H0), (n = t(e, a));
    } while (ea);
    return n;
  }
  function O0() {
    var l = S.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Ka(t) : t),
      (l = l.useState()[0]),
      (sl !== null ? sl.memoizedState : null) !== l && (K.flags |= 1024),
      t
    );
  }
  function qc() {
    var l = ku !== 0;
    return (ku = 0), l;
  }
  function wc(l, t, e) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~e);
  }
  function Yc(l) {
    if (Ju) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      Ju = !1;
    }
    (Pt = 0), (Ol = sl = K = null), (ea = !1), (Va = ku = 0), (aa = null);
  }
  function Il() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ol === null ? (K.memoizedState = Ol = l) : (Ol = Ol.next = l), Ol;
  }
  function jl() {
    if (sl === null) {
      var l = K.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = sl.next;
    var t = Ol === null ? K.memoizedState : Ol.next;
    if (t !== null) (Ol = t), (sl = l);
    else {
      if (l === null)
        throw K.alternate === null ? Error(m(467)) : Error(m(310));
      (sl = l),
        (l = {
          memoizedState: sl.memoizedState,
          baseState: sl.baseState,
          baseQueue: sl.baseQueue,
          queue: sl.queue,
          next: null,
        }),
        Ol === null ? (K.memoizedState = Ol = l) : (Ol = Ol.next = l);
    }
    return Ol;
  }
  function Cc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ka(l) {
    var t = Va;
    return (
      (Va += 1),
      aa === null && (aa = []),
      (l = gs(aa, l, t)),
      (t = K),
      (Ol === null ? t.memoizedState : Ol.next) === null &&
        ((t = t.alternate),
        (S.H = t === null || t.memoizedState === null ? nr : cr)),
      l
    );
  }
  function Wu(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ka(l);
      if (l.$$typeof === W) return Vl(l);
    }
    throw Error(m(438, String(l)));
  }
  function Gc(l) {
    var t = null,
      e = K.updateQueue;
    if ((e !== null && (t = e.memoCache), t == null)) {
      var a = K.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      e === null && ((e = Cc()), (K.updateQueue = e)),
      (e.memoCache = t),
      (e = t.data[t.index]),
      e === void 0)
    )
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = I;
    return t.index++, e;
  }
  function wt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function $u(l) {
    var t = jl();
    return Xc(t, sl, l);
  }
  function Xc(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(m(311));
    a.lastRenderedReducer = e;
    var u = l.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        (u.next = n.next), (n.next = c);
      }
      (t.baseQueue = u = n), (a.pending = null);
    }
    if (((n = l.baseState), u === null)) l.memoizedState = n;
    else {
      t = u.next;
      var i = (c = null),
        f = null,
        v = t,
        x = !1;
      do {
        var E = v.lane & -536870913;
        if (E !== v.lane ? (P & E) === E : (Pt & E) === E) {
          var y = v.revertLane;
          if (y === 0)
            f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: v.action,
                  hasEagerState: v.hasEagerState,
                  eagerState: v.eagerState,
                  next: null,
                }),
              E === Pe && (x = !0);
          else if ((Pt & y) === y) {
            (v = v.next), y === Pe && (x = !0);
            continue;
          } else
            (E = {
              lane: 0,
              revertLane: v.revertLane,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null,
            }),
              f === null ? ((i = f = E), (c = n)) : (f = f.next = E),
              (K.lanes |= y),
              (ce |= y);
          (E = v.action),
            De && e(n, E),
            (n = v.hasEagerState ? v.eagerState : e(n, E));
        } else
          (y = {
            lane: E,
            revertLane: v.revertLane,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null,
          }),
            f === null ? ((i = f = y), (c = n)) : (f = f.next = y),
            (K.lanes |= E),
            (ce |= E);
        v = v.next;
      } while (v !== null && v !== t);
      if (
        (f === null ? (c = n) : (f.next = i),
        !nt(n, l.memoizedState) && ((ql = !0), x && ((e = la), e !== null)))
      )
        throw e;
      (l.memoizedState = n),
        (l.baseState = c),
        (l.baseQueue = f),
        (a.lastRenderedState = n);
    }
    return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Qc(l) {
    var t = jl(),
      e = t.queue;
    if (e === null) throw Error(m(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch,
      u = e.pending,
      n = t.memoizedState;
    if (u !== null) {
      e.pending = null;
      var c = (u = u.next);
      do (n = l(n, c.action)), (c = c.next);
      while (c !== u);
      nt(n, t.memoizedState) || (ql = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (e.lastRenderedState = n);
    }
    return [n, a];
  }
  function As(l, t, e) {
    var a = K,
      u = jl(),
      n = nl;
    if (n) {
      if (e === void 0) throw Error(m(407));
      e = e();
    } else e = t();
    var c = !nt((sl || u).memoizedState, e);
    c && ((u.memoizedState = e), (ql = !0)), (u = u.queue);
    var i = Os.bind(null, a, u, l);
    if (
      (Ja(2048, 8, i, [l]),
      u.getSnapshot !== t || c || (Ol !== null && Ol.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ua(9, Fu(), Ns.bind(null, a, u, e, t), null),
        vl === null)
      )
        throw Error(m(349));
      n || (Pt & 124) !== 0 || Ms(a, t, e);
    }
    return e;
  }
  function Ms(l, t, e) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: e }),
      (t = K.updateQueue),
      t === null
        ? ((t = Cc()), (K.updateQueue = t), (t.stores = [l]))
        : ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l));
  }
  function Ns(l, t, e, a) {
    (t.value = e), (t.getSnapshot = a), js(t) && Ds(l);
  }
  function Os(l, t, e) {
    return e(function () {
      js(t) && Ds(l);
    });
  }
  function js(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !nt(l, e);
    } catch {
      return !0;
    }
  }
  function Ds(l) {
    var t = We(l, 2);
    t !== null && ot(t, l, 2);
  }
  function Zc(l) {
    var t = Il();
    if (typeof l == "function") {
      var e = l;
      if (((l = e()), De)) {
        Kt(!0);
        try {
          e();
        } finally {
          Kt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function _s(l, t, e, a) {
    return (l.baseState = e), Xc(l, sl, typeof a == "function" ? a : wt);
  }
  function j0(l, t, e, a, u) {
    if (Pu(l)) throw Error(m(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      S.T !== null ? e(!0) : (n.isTransition = !1),
        a(n),
        (e = t.pending),
        e === null
          ? ((n.next = t.pending = n), Us(t, n))
          : ((n.next = e.next), (t.pending = e.next = n));
    }
  }
  function Us(l, t) {
    var e = t.action,
      a = t.payload,
      u = l.state;
    if (t.isTransition) {
      var n = S.T,
        c = {};
      S.T = c;
      try {
        var i = e(u, a),
          f = S.S;
        f !== null && f(c, i), Rs(l, t, i);
      } catch (v) {
        Lc(l, t, v);
      } finally {
        S.T = n;
      }
    } else
      try {
        (n = e(u, a)), Rs(l, t, n);
      } catch (v) {
        Lc(l, t, v);
      }
  }
  function Rs(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (a) {
            Hs(l, t, a);
          },
          function (a) {
            return Lc(l, t, a);
          }
        )
      : Hs(l, t, e);
  }
  function Hs(l, t, e) {
    (t.status = "fulfilled"),
      (t.value = e),
      Bs(t),
      (l.state = e),
      (t = l.pending),
      t !== null &&
        ((e = t.next),
        e === t ? (l.pending = null) : ((e = e.next), (t.next = e), Us(l, e)));
  }
  function Lc(l, t, e) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = e), Bs(t), (t = t.next);
      while (t !== a);
    }
    l.action = null;
  }
  function Bs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function qs(l, t) {
    return t;
  }
  function ws(l, t) {
    if (nl) {
      var e = vl.formState;
      if (e !== null) {
        l: {
          var a = K;
          if (nl) {
            if (pl) {
              t: {
                for (var u = pl, n = At; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (((u = Et(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (n = u.data), (u = n === "F!" || n === "F" ? u : null);
              }
              if (u) {
                (pl = Et(u.nextSibling)), (a = u.data === "F!");
                break l;
              }
            }
            Me(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return (
      (e = Il()),
      (e.memoizedState = e.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qs,
        lastRenderedState: t,
      }),
      (e.queue = a),
      (e = er.bind(null, K, a)),
      (a.dispatch = e),
      (a = Zc(!1)),
      (n = Wc.bind(null, K, !1, a.queue)),
      (a = Il()),
      (u = { state: t, dispatch: null, action: l, pending: null }),
      (a.queue = u),
      (e = j0.bind(null, K, u, n, e)),
      (u.dispatch = e),
      (a.memoizedState = l),
      [t, e, !1]
    );
  }
  function Ys(l) {
    var t = jl();
    return Cs(t, sl, l);
  }
  function Cs(l, t, e) {
    if (
      ((t = Xc(l, t, qs)[0]),
      (l = $u(wt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = Ka(t);
      } catch (c) {
        throw c === Ga ? Lu : c;
      }
    else a = t;
    t = jl();
    var u = t.queue,
      n = u.dispatch;
    return (
      e !== t.memoizedState &&
        ((K.flags |= 2048), ua(9, Fu(), D0.bind(null, u, e), null)),
      [a, n, l]
    );
  }
  function D0(l, t) {
    l.action = t;
  }
  function Gs(l) {
    var t = jl(),
      e = sl;
    if (e !== null) return Cs(t, e, l);
    jl(), (t = t.memoizedState), (e = jl());
    var a = e.queue.dispatch;
    return (e.memoizedState = l), [t, a, !1];
  }
  function ua(l, t, e, a) {
    return (
      (l = { tag: l, create: e, deps: a, inst: t, next: null }),
      (t = K.updateQueue),
      t === null && ((t = Cc()), (K.updateQueue = t)),
      (e = t.lastEffect),
      e === null
        ? (t.lastEffect = l.next = l)
        : ((a = e.next), (e.next = l), (l.next = a), (t.lastEffect = l)),
      l
    );
  }
  function Fu() {
    return { destroy: void 0, resource: void 0 };
  }
  function Xs() {
    return jl().memoizedState;
  }
  function Iu(l, t, e, a) {
    var u = Il();
    (a = a === void 0 ? null : a),
      (K.flags |= l),
      (u.memoizedState = ua(1 | t, Fu(), e, a));
  }
  function Ja(l, t, e, a) {
    var u = jl();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    sl !== null && a !== null && Hc(a, sl.memoizedState.deps)
      ? (u.memoizedState = ua(t, n, e, a))
      : ((K.flags |= l), (u.memoizedState = ua(1 | t, n, e, a)));
  }
  function Qs(l, t) {
    Iu(8390656, 8, l, t);
  }
  function Zs(l, t) {
    Ja(2048, 8, l, t);
  }
  function Ls(l, t) {
    return Ja(4, 2, l, t);
  }
  function Vs(l, t) {
    return Ja(4, 4, l, t);
  }
  function Ks(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function () {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function Js(l, t, e) {
    (e = e != null ? e.concat([l]) : null), Ja(4, 4, Ks.bind(null, t, l), e);
  }
  function Vc() {}
  function ks(l, t) {
    var e = jl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && Hc(t, a[1]) ? a[0] : ((e.memoizedState = [l, t]), l);
  }
  function Ws(l, t) {
    var e = jl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && Hc(t, a[1])) return a[0];
    if (((a = l()), De)) {
      Kt(!0);
      try {
        l();
      } finally {
        Kt(!1);
      }
    }
    return (e.memoizedState = [a, t]), a;
  }
  function Kc(l, t, e) {
    return e === void 0 || (Pt & 1073741824) !== 0
      ? (l.memoizedState = t)
      : ((l.memoizedState = e), (l = Ir()), (K.lanes |= l), (ce |= l), e);
  }
  function $s(l, t, e, a) {
    return nt(e, t)
      ? e
      : ta.current !== null
      ? ((l = Kc(l, e, a)), nt(l, t) || (ql = !0), l)
      : (Pt & 42) === 0
      ? ((ql = !0), (l.memoizedState = e))
      : ((l = Ir()), (K.lanes |= l), (ce |= l), t);
  }
  function Fs(l, t, e, a, u) {
    var n = N.p;
    N.p = n !== 0 && 8 > n ? n : 8;
    var c = S.T,
      i = {};
    (S.T = i), Wc(l, !1, t, e);
    try {
      var f = u(),
        v = S.S;
      if (
        (v !== null && v(i, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var x = M0(f, a);
        ka(l, t, x, rt(l));
      } else ka(l, t, a, rt(l));
    } catch (E) {
      ka(l, t, { then: function () {}, status: "rejected", reason: E }, rt());
    } finally {
      (N.p = n), (S.T = c);
    }
  }
  function _0() {}
  function Jc(l, t, e, a) {
    if (l.tag !== 5) throw Error(m(476));
    var u = Is(l).queue;
    Fs(
      l,
      u,
      t,
      Y,
      e === null
        ? _0
        : function () {
            return Ps(l), e(a);
          }
    );
  }
  function Is(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Y,
      baseState: Y,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wt,
        lastRenderedState: Y,
      },
      next: null,
    };
    var e = {};
    return (
      (t.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: wt,
          lastRenderedState: e,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function Ps(l) {
    var t = Is(l).next.queue;
    ka(l, t, {}, rt());
  }
  function kc() {
    return Vl(du);
  }
  function lr() {
    return jl().memoizedState;
  }
  function tr() {
    return jl().memoizedState;
  }
  function U0(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = rt();
          l = Ft(e);
          var a = It(t, l, e);
          a !== null && (ot(a, t, e), Qa(a, t, e)),
            (t = { cache: zc() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function R0(l, t, e) {
    var a = rt();
    (e = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Pu(l)
        ? ar(t, e)
        : ((e = mc(l, t, e, a)), e !== null && (ot(e, l, a), ur(e, t, a)));
  }
  function er(l, t, e) {
    var a = rt();
    ka(l, t, e, a);
  }
  function ka(l, t, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Pu(l)) ar(t, u);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var c = t.lastRenderedState,
            i = n(c, e);
          if (((u.hasEagerState = !0), (u.eagerState = i), nt(i, c)))
            return qu(l, t, u, 0), vl === null && Bu(), !1;
        } catch {
        } finally {
        }
      if (((e = mc(l, t, u, a)), e !== null))
        return ot(e, l, a), ur(e, t, a), !0;
    }
    return !1;
  }
  function Wc(l, t, e, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Ni(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Pu(l))
    ) {
      if (t) throw Error(m(479));
    } else (t = mc(l, e, a, 2)), t !== null && ot(t, l, 2);
  }
  function Pu(l) {
    var t = l.alternate;
    return l === K || (t !== null && t === K);
  }
  function ar(l, t) {
    ea = Ju = !0;
    var e = l.pending;
    e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
      (l.pending = t);
  }
  function ur(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      (a &= l.pendingLanes), (e |= a), (t.lanes = e), df(l, e);
    }
  }
  var ln = {
      readContext: Vl,
      use: Wu,
      useCallback: Al,
      useContext: Al,
      useEffect: Al,
      useImperativeHandle: Al,
      useLayoutEffect: Al,
      useInsertionEffect: Al,
      useMemo: Al,
      useReducer: Al,
      useRef: Al,
      useState: Al,
      useDebugValue: Al,
      useDeferredValue: Al,
      useTransition: Al,
      useSyncExternalStore: Al,
      useId: Al,
      useHostTransitionStatus: Al,
      useFormState: Al,
      useActionState: Al,
      useOptimistic: Al,
      useMemoCache: Al,
      useCacheRefresh: Al,
    },
    nr = {
      readContext: Vl,
      use: Wu,
      useCallback: function (l, t) {
        return (Il().memoizedState = [l, t === void 0 ? null : t]), l;
      },
      useContext: Vl,
      useEffect: Qs,
      useImperativeHandle: function (l, t, e) {
        (e = e != null ? e.concat([l]) : null),
          Iu(4194308, 4, Ks.bind(null, t, l), e);
      },
      useLayoutEffect: function (l, t) {
        return Iu(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        Iu(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var e = Il();
        t = t === void 0 ? null : t;
        var a = l();
        if (De) {
          Kt(!0);
          try {
            l();
          } finally {
            Kt(!1);
          }
        }
        return (e.memoizedState = [a, t]), a;
      },
      useReducer: function (l, t, e) {
        var a = Il();
        if (e !== void 0) {
          var u = e(t);
          if (De) {
            Kt(!0);
            try {
              e(t);
            } finally {
              Kt(!1);
            }
          }
        } else u = t;
        return (
          (a.memoizedState = a.baseState = u),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: u,
          }),
          (a.queue = l),
          (l = l.dispatch = R0.bind(null, K, l)),
          [a.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Il();
        return (l = { current: l }), (t.memoizedState = l);
      },
      useState: function (l) {
        l = Zc(l);
        var t = l.queue,
          e = er.bind(null, K, t);
        return (t.dispatch = e), [l.memoizedState, e];
      },
      useDebugValue: Vc,
      useDeferredValue: function (l, t) {
        var e = Il();
        return Kc(e, l, t);
      },
      useTransition: function () {
        var l = Zc(!1);
        return (
          (l = Fs.bind(null, K, l.queue, !0, !1)),
          (Il().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, e) {
        var a = K,
          u = Il();
        if (nl) {
          if (e === void 0) throw Error(m(407));
          e = e();
        } else {
          if (((e = t()), vl === null)) throw Error(m(349));
          (P & 124) !== 0 || Ms(a, t, e);
        }
        u.memoizedState = e;
        var n = { value: e, getSnapshot: t };
        return (
          (u.queue = n),
          Qs(Os.bind(null, a, n, l), [l]),
          (a.flags |= 2048),
          ua(9, Fu(), Ns.bind(null, a, n, e, t), null),
          e
        );
      },
      useId: function () {
        var l = Il(),
          t = vl.identifierPrefix;
        if (nl) {
          var e = Ht,
            a = Rt;
          (e = (a & ~(1 << (32 - ut(a) - 1))).toString(32) + e),
            (t = "«" + t + "R" + e),
            (e = ku++),
            0 < e && (t += "H" + e.toString(32)),
            (t += "»");
        } else (e = N0++), (t = "«" + t + "r" + e.toString(32) + "»");
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: kc,
      useFormState: ws,
      useActionState: ws,
      useOptimistic: function (l) {
        var t = Il();
        t.memoizedState = t.baseState = l;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = e), (t = Wc.bind(null, K, !0, e)), (e.dispatch = t), [l, t]
        );
      },
      useMemoCache: Gc,
      useCacheRefresh: function () {
        return (Il().memoizedState = U0.bind(null, K));
      },
    },
    cr = {
      readContext: Vl,
      use: Wu,
      useCallback: ks,
      useContext: Vl,
      useEffect: Zs,
      useImperativeHandle: Js,
      useInsertionEffect: Ls,
      useLayoutEffect: Vs,
      useMemo: Ws,
      useReducer: $u,
      useRef: Xs,
      useState: function () {
        return $u(wt);
      },
      useDebugValue: Vc,
      useDeferredValue: function (l, t) {
        var e = jl();
        return $s(e, sl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = $u(wt)[0],
          t = jl().memoizedState;
        return [typeof l == "boolean" ? l : Ka(l), t];
      },
      useSyncExternalStore: As,
      useId: lr,
      useHostTransitionStatus: kc,
      useFormState: Ys,
      useActionState: Ys,
      useOptimistic: function (l, t) {
        var e = jl();
        return _s(e, sl, l, t);
      },
      useMemoCache: Gc,
      useCacheRefresh: tr,
    },
    H0 = {
      readContext: Vl,
      use: Wu,
      useCallback: ks,
      useContext: Vl,
      useEffect: Zs,
      useImperativeHandle: Js,
      useInsertionEffect: Ls,
      useLayoutEffect: Vs,
      useMemo: Ws,
      useReducer: Qc,
      useRef: Xs,
      useState: function () {
        return Qc(wt);
      },
      useDebugValue: Vc,
      useDeferredValue: function (l, t) {
        var e = jl();
        return sl === null ? Kc(e, l, t) : $s(e, sl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = Qc(wt)[0],
          t = jl().memoizedState;
        return [typeof l == "boolean" ? l : Ka(l), t];
      },
      useSyncExternalStore: As,
      useId: lr,
      useHostTransitionStatus: kc,
      useFormState: Gs,
      useActionState: Gs,
      useOptimistic: function (l, t) {
        var e = jl();
        return sl !== null
          ? _s(e, sl, l, t)
          : ((e.baseState = l), [l, e.queue.dispatch]);
      },
      useMemoCache: Gc,
      useCacheRefresh: tr,
    },
    na = null,
    Wa = 0;
  function tn(l) {
    var t = Wa;
    return (Wa += 1), na === null && (na = []), gs(na, l, t);
  }
  function $a(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function en(l, t) {
    throw t.$$typeof === Q
      ? Error(m(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          m(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l
          )
        ));
  }
  function ir(l) {
    var t = l._init;
    return t(l._payload);
  }
  function fr(l) {
    function t(d, r) {
      if (l) {
        var h = d.deletions;
        h === null ? ((d.deletions = [r]), (d.flags |= 16)) : h.push(r);
      }
    }
    function e(d, r) {
      if (!l) return null;
      for (; r !== null; ) t(d, r), (r = r.sibling);
      return null;
    }
    function a(d) {
      for (var r = new Map(); d !== null; )
        d.key !== null ? r.set(d.key, d) : r.set(d.index, d), (d = d.sibling);
      return r;
    }
    function u(d, r) {
      return (d = Ut(d, r)), (d.index = 0), (d.sibling = null), d;
    }
    function n(d, r, h) {
      return (
        (d.index = h),
        l
          ? ((h = d.alternate),
            h !== null
              ? ((h = h.index), h < r ? ((d.flags |= 67108866), r) : h)
              : ((d.flags |= 67108866), r))
          : ((d.flags |= 1048576), r)
      );
    }
    function c(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function i(d, r, h, p) {
      return r === null || r.tag !== 6
        ? ((r = yc(h, d.mode, p)), (r.return = d), r)
        : ((r = u(r, h)), (r.return = d), r);
    }
    function f(d, r, h, p) {
      var j = h.type;
      return j === El
        ? x(d, r, h.props.children, p, h.key)
        : r !== null &&
          (r.elementType === j ||
            (typeof j == "object" &&
              j !== null &&
              j.$$typeof === kl &&
              ir(j) === r.type))
        ? ((r = u(r, h.props)), $a(r, h), (r.return = d), r)
        : ((r = Yu(h.type, h.key, h.props, null, d.mode, p)),
          $a(r, h),
          (r.return = d),
          r);
    }
    function v(d, r, h, p) {
      return r === null ||
        r.tag !== 4 ||
        r.stateNode.containerInfo !== h.containerInfo ||
        r.stateNode.implementation !== h.implementation
        ? ((r = gc(h, d.mode, p)), (r.return = d), r)
        : ((r = u(r, h.children || [])), (r.return = d), r);
    }
    function x(d, r, h, p, j) {
      return r === null || r.tag !== 7
        ? ((r = Te(h, d.mode, p, j)), (r.return = d), r)
        : ((r = u(r, h)), (r.return = d), r);
    }
    function E(d, r, h) {
      if (
        (typeof r == "string" && r !== "") ||
        typeof r == "number" ||
        typeof r == "bigint"
      )
        return (r = yc("" + r, d.mode, h)), (r.return = d), r;
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case al:
            return (
              (h = Yu(r.type, r.key, r.props, null, d.mode, h)),
              $a(h, r),
              (h.return = d),
              h
            );
          case xl:
            return (r = gc(r, d.mode, h)), (r.return = d), r;
          case kl:
            var p = r._init;
            return (r = p(r._payload)), E(d, r, h);
        }
        if (Sl(r) || cl(r))
          return (r = Te(r, d.mode, h, null)), (r.return = d), r;
        if (typeof r.then == "function") return E(d, tn(r), h);
        if (r.$$typeof === W) return E(d, Qu(d, r), h);
        en(d, r);
      }
      return null;
    }
    function y(d, r, h, p) {
      var j = r !== null ? r.key : null;
      if (
        (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
      )
        return j !== null ? null : i(d, r, "" + h, p);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case al:
            return h.key === j ? f(d, r, h, p) : null;
          case xl:
            return h.key === j ? v(d, r, h, p) : null;
          case kl:
            return (j = h._init), (h = j(h._payload)), y(d, r, h, p);
        }
        if (Sl(h) || cl(h)) return j !== null ? null : x(d, r, h, p, null);
        if (typeof h.then == "function") return y(d, r, tn(h), p);
        if (h.$$typeof === W) return y(d, r, Qu(d, h), p);
        en(d, h);
      }
      return null;
    }
    function g(d, r, h, p, j) {
      if (
        (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
      )
        return (d = d.get(h) || null), i(r, d, "" + p, j);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case al:
            return (
              (d = d.get(p.key === null ? h : p.key) || null), f(r, d, p, j)
            );
          case xl:
            return (
              (d = d.get(p.key === null ? h : p.key) || null), v(r, d, p, j)
            );
          case kl:
            var J = p._init;
            return (p = J(p._payload)), g(d, r, h, p, j);
        }
        if (Sl(p) || cl(p)) return (d = d.get(h) || null), x(r, d, p, j, null);
        if (typeof p.then == "function") return g(d, r, h, tn(p), j);
        if (p.$$typeof === W) return g(d, r, h, Qu(r, p), j);
        en(r, p);
      }
      return null;
    }
    function C(d, r, h, p) {
      for (
        var j = null, J = null, _ = r, w = (r = 0), Yl = null;
        _ !== null && w < h.length;
        w++
      ) {
        _.index > w ? ((Yl = _), (_ = null)) : (Yl = _.sibling);
        var el = y(d, _, h[w], p);
        if (el === null) {
          _ === null && (_ = Yl);
          break;
        }
        l && _ && el.alternate === null && t(d, _),
          (r = n(el, r, w)),
          J === null ? (j = el) : (J.sibling = el),
          (J = el),
          (_ = Yl);
      }
      if (w === h.length) return e(d, _), nl && ze(d, w), j;
      if (_ === null) {
        for (; w < h.length; w++)
          (_ = E(d, h[w], p)),
            _ !== null &&
              ((r = n(_, r, w)),
              J === null ? (j = _) : (J.sibling = _),
              (J = _));
        return nl && ze(d, w), j;
      }
      for (_ = a(_); w < h.length; w++)
        (Yl = g(_, d, w, h[w], p)),
          Yl !== null &&
            (l &&
              Yl.alternate !== null &&
              _.delete(Yl.key === null ? w : Yl.key),
            (r = n(Yl, r, w)),
            J === null ? (j = Yl) : (J.sibling = Yl),
            (J = Yl));
      return (
        l &&
          _.forEach(function (ve) {
            return t(d, ve);
          }),
        nl && ze(d, w),
        j
      );
    }
    function B(d, r, h, p) {
      if (h == null) throw Error(m(151));
      for (
        var j = null, J = null, _ = r, w = (r = 0), Yl = null, el = h.next();
        _ !== null && !el.done;
        w++, el = h.next()
      ) {
        _.index > w ? ((Yl = _), (_ = null)) : (Yl = _.sibling);
        var ve = y(d, _, el.value, p);
        if (ve === null) {
          _ === null && (_ = Yl);
          break;
        }
        l && _ && ve.alternate === null && t(d, _),
          (r = n(ve, r, w)),
          J === null ? (j = ve) : (J.sibling = ve),
          (J = ve),
          (_ = Yl);
      }
      if (el.done) return e(d, _), nl && ze(d, w), j;
      if (_ === null) {
        for (; !el.done; w++, el = h.next())
          (el = E(d, el.value, p)),
            el !== null &&
              ((r = n(el, r, w)),
              J === null ? (j = el) : (J.sibling = el),
              (J = el));
        return nl && ze(d, w), j;
      }
      for (_ = a(_); !el.done; w++, el = h.next())
        (el = g(_, d, w, el.value, p)),
          el !== null &&
            (l &&
              el.alternate !== null &&
              _.delete(el.key === null ? w : el.key),
            (r = n(el, r, w)),
            J === null ? (j = el) : (J.sibling = el),
            (J = el));
      return (
        l &&
          _.forEach(function (Bh) {
            return t(d, Bh);
          }),
        nl && ze(d, w),
        j
      );
    }
    function ol(d, r, h, p) {
      if (
        (typeof h == "object" &&
          h !== null &&
          h.type === El &&
          h.key === null &&
          (h = h.props.children),
        typeof h == "object" && h !== null)
      ) {
        switch (h.$$typeof) {
          case al:
            l: {
              for (var j = h.key; r !== null; ) {
                if (r.key === j) {
                  if (((j = h.type), j === El)) {
                    if (r.tag === 7) {
                      e(d, r.sibling),
                        (p = u(r, h.props.children)),
                        (p.return = d),
                        (d = p);
                      break l;
                    }
                  } else if (
                    r.elementType === j ||
                    (typeof j == "object" &&
                      j !== null &&
                      j.$$typeof === kl &&
                      ir(j) === r.type)
                  ) {
                    e(d, r.sibling),
                      (p = u(r, h.props)),
                      $a(p, h),
                      (p.return = d),
                      (d = p);
                    break l;
                  }
                  e(d, r);
                  break;
                } else t(d, r);
                r = r.sibling;
              }
              h.type === El
                ? ((p = Te(h.props.children, d.mode, p, h.key)),
                  (p.return = d),
                  (d = p))
                : ((p = Yu(h.type, h.key, h.props, null, d.mode, p)),
                  $a(p, h),
                  (p.return = d),
                  (d = p));
            }
            return c(d);
          case xl:
            l: {
              for (j = h.key; r !== null; ) {
                if (r.key === j)
                  if (
                    r.tag === 4 &&
                    r.stateNode.containerInfo === h.containerInfo &&
                    r.stateNode.implementation === h.implementation
                  ) {
                    e(d, r.sibling),
                      (p = u(r, h.children || [])),
                      (p.return = d),
                      (d = p);
                    break l;
                  } else {
                    e(d, r);
                    break;
                  }
                else t(d, r);
                r = r.sibling;
              }
              (p = gc(h, d.mode, p)), (p.return = d), (d = p);
            }
            return c(d);
          case kl:
            return (j = h._init), (h = j(h._payload)), ol(d, r, h, p);
        }
        if (Sl(h)) return C(d, r, h, p);
        if (cl(h)) {
          if (((j = cl(h)), typeof j != "function")) throw Error(m(150));
          return (h = j.call(h)), B(d, r, h, p);
        }
        if (typeof h.then == "function") return ol(d, r, tn(h), p);
        if (h.$$typeof === W) return ol(d, r, Qu(d, h), p);
        en(d, h);
      }
      return (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
        ? ((h = "" + h),
          r !== null && r.tag === 6
            ? (e(d, r.sibling), (p = u(r, h)), (p.return = d), (d = p))
            : (e(d, r), (p = yc(h, d.mode, p)), (p.return = d), (d = p)),
          c(d))
        : e(d, r);
    }
    return function (d, r, h, p) {
      try {
        Wa = 0;
        var j = ol(d, r, h, p);
        return (na = null), j;
      } catch (_) {
        if (_ === Ga || _ === Lu) throw _;
        var J = ct(29, _, null, d.mode);
        return (J.lanes = p), (J.return = d), J;
      } finally {
      }
    };
  }
  var ca = fr(!0),
    sr = fr(!1),
    bt = z(null),
    Mt = null;
  function le(l) {
    var t = l.alternate;
    M(Rl, Rl.current & 1),
      M(bt, l),
      Mt === null &&
        (t === null || ta.current !== null || t.memoizedState !== null) &&
        (Mt = l);
  }
  function rr(l) {
    if (l.tag === 22) {
      if ((M(Rl, Rl.current), M(bt, l), Mt === null)) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (Mt = l);
      }
    } else te();
  }
  function te() {
    M(Rl, Rl.current), M(bt, bt.current);
  }
  function Yt(l) {
    O(bt), Mt === l && (Mt = null), O(Rl);
  }
  var Rl = z(0);
  function an(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (
          e !== null &&
          ((e = e.dehydrated), e === null || e.data === "$?" || Ci(e))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function $c(l, t, e, a) {
    (t = l.memoizedState),
      (e = e(a, t)),
      (e = e == null ? t : A({}, t, e)),
      (l.memoizedState = e),
      l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var Fc = {
    enqueueSetState: function (l, t, e) {
      l = l._reactInternals;
      var a = rt(),
        u = Ft(a);
      (u.payload = t),
        e != null && (u.callback = e),
        (t = It(l, u, a)),
        t !== null && (ot(t, l, a), Qa(t, l, a));
    },
    enqueueReplaceState: function (l, t, e) {
      l = l._reactInternals;
      var a = rt(),
        u = Ft(a);
      (u.tag = 1),
        (u.payload = t),
        e != null && (u.callback = e),
        (t = It(l, u, a)),
        t !== null && (ot(t, l, a), Qa(t, l, a));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var e = rt(),
        a = Ft(e);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = It(l, a, e)),
        t !== null && (ot(t, l, e), Qa(t, l, e));
    },
  };
  function or(l, t, e, a, u, n, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(a, n, c)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Ua(e, a) || !Ua(u, n)
        : !0
    );
  }
  function dr(l, t, e, a) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(e, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(e, a),
      t.state !== l && Fc.enqueueReplaceState(t, t.state, null);
  }
  function _e(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t) a !== "ref" && (e[a] = t[a]);
    }
    if ((l = l.defaultProps)) {
      e === t && (e = A({}, e));
      for (var u in l) e[u] === void 0 && (e[u] = l[u]);
    }
    return e;
  }
  var un =
    typeof reportError == "function"
      ? reportError
      : function (l) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof l == "object" &&
                l !== null &&
                typeof l.message == "string"
                  ? String(l.message)
                  : String(l),
              error: l,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", l);
            return;
          }
          console.error(l);
        };
  function hr(l) {
    un(l);
  }
  function mr(l) {
    console.error(l);
  }
  function vr(l) {
    un(l);
  }
  function nn(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function yr(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Ic(l, t, e) {
    return (
      (e = Ft(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        nn(l, t);
      }),
      e
    );
  }
  function gr(l) {
    return (l = Ft(l)), (l.tag = 3), l;
  }
  function br(l, t, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      (l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          yr(t, e, a);
        });
    }
    var c = e.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        yr(t, e, a),
          typeof u != "function" &&
            (ie === null ? (ie = new Set([this])) : ie.add(this));
        var i = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: i !== null ? i : "",
        });
      });
  }
  function B0(l, t, e, a, u) {
    if (
      ((e.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = e.alternate),
        t !== null && wa(t, e, u, !0),
        (e = bt.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 13:
            return (
              Mt === null ? Ti() : e.alternate === null && Tl === 0 && (Tl = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = u),
              a === Nc
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null ? (e.updateQueue = new Set([a])) : t.add(a),
                  zi(l, a, u)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === Nc
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (e.updateQueue = t))
                    : ((e = t.retryQueue),
                      e === null ? (t.retryQueue = new Set([a])) : e.add(a)),
                  zi(l, a, u)),
              !1
            );
        }
        throw Error(m(435, e.tag));
      }
      return zi(l, a, u), Ti(), !1;
    }
    if (nl)
      return (
        (t = bt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            a !== Sc && ((l = Error(m(422), { cause: a })), qa(mt(l, e))))
          : (a !== Sc && ((t = Error(m(423), { cause: a })), qa(mt(t, e))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (a = mt(a, e)),
            (u = Ic(l.stateNode, a, u)),
            Dc(l, u),
            Tl !== 4 && (Tl = 2)),
        !1
      );
    var n = Error(m(520), { cause: a });
    if (
      ((n = mt(n, e)),
      au === null ? (au = [n]) : au.push(n),
      Tl !== 4 && (Tl = 2),
      t === null)
    )
      return !0;
    (a = mt(a, e)), (e = t);
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (l = u & -u),
            (e.lanes |= l),
            (l = Ic(e.stateNode, a, l)),
            Dc(e, l),
            !1
          );
        case 1:
          if (
            ((t = e.type),
            (n = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ie === null || !ie.has(n)))))
          )
            return (
              (e.flags |= 65536),
              (u &= -u),
              (e.lanes |= u),
              (u = gr(u)),
              br(u, l, e, a),
              Dc(e, u),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var xr = Error(m(461)),
    ql = !1;
  function Gl(l, t, e, a) {
    t.child = l === null ? sr(t, null, e, a) : ca(t, l.child, e, a);
  }
  function Sr(l, t, e, a, u) {
    e = e.render;
    var n = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var i in a) i !== "ref" && (c[i] = a[i]);
    } else c = a;
    return (
      Oe(t),
      (a = Bc(l, t, e, c, n, u)),
      (i = qc()),
      l !== null && !ql
        ? (wc(l, t, u), Ct(l, t, u))
        : (nl && i && bc(t), (t.flags |= 1), Gl(l, t, a, u), t.child)
    );
  }
  function pr(l, t, e, a, u) {
    if (l === null) {
      var n = e.type;
      return typeof n == "function" &&
        !vc(n) &&
        n.defaultProps === void 0 &&
        e.compare === null
        ? ((t.tag = 15), (t.type = n), Tr(l, t, n, a, u))
        : ((l = Yu(e.type, null, a, t, t.mode, u)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !ci(l, u))) {
      var c = n.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : Ua), e(c, a) && l.ref === t.ref)
      )
        return Ct(l, t, u);
    }
    return (
      (t.flags |= 1),
      (l = Ut(n, a)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function Tr(l, t, e, a, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ua(n, a) && l.ref === t.ref)
        if (((ql = !1), (t.pendingProps = a = n), ci(l, u)))
          (l.flags & 131072) !== 0 && (ql = !0);
        else return (t.lanes = l.lanes), Ct(l, t, u);
    }
    return Pc(l, t, e, a, u);
  }
  function Er(l, t, e) {
    var a = t.pendingProps,
      u = a.children,
      n = l !== null ? l.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((a = n !== null ? n.baseLanes | e : e), l !== null)) {
          for (u = t.child = l.child, n = 0; u !== null; )
            (n = n | u.lanes | u.childLanes), (u = u.sibling);
          t.childLanes = n & ~a;
        } else (t.childLanes = 0), (t.child = null);
        return zr(l, t, a, e);
      }
      if ((e & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Zu(t, n !== null ? n.cachePool : null),
          n !== null ? Ts(t, n) : Uc(),
          rr(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          zr(l, t, n !== null ? n.baseLanes | e : e, e)
        );
    } else
      n !== null
        ? (Zu(t, n.cachePool), Ts(t, n), te(), (t.memoizedState = null))
        : (l !== null && Zu(t, null), Uc(), te());
    return Gl(l, t, u, e), t.child;
  }
  function zr(l, t, e, a) {
    var u = Mc();
    return (
      (u = u === null ? null : { parent: Ul._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: e, cachePool: u }),
      l !== null && Zu(t, null),
      Uc(),
      rr(t),
      l !== null && wa(l, t, a, !0),
      null
    );
  }
  function cn(l, t) {
    var e = t.ref;
    if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(m(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function Pc(l, t, e, a, u) {
    return (
      Oe(t),
      (e = Bc(l, t, e, a, void 0, u)),
      (a = qc()),
      l !== null && !ql
        ? (wc(l, t, u), Ct(l, t, u))
        : (nl && a && bc(t), (t.flags |= 1), Gl(l, t, e, u), t.child)
    );
  }
  function Ar(l, t, e, a, u, n) {
    return (
      Oe(t),
      (t.updateQueue = null),
      (e = zs(t, a, e, u)),
      Es(l),
      (a = qc()),
      l !== null && !ql
        ? (wc(l, t, n), Ct(l, t, n))
        : (nl && a && bc(t), (t.flags |= 1), Gl(l, t, e, n), t.child)
    );
  }
  function Mr(l, t, e, a, u) {
    if ((Oe(t), t.stateNode === null)) {
      var n = $e,
        c = e.contextType;
      typeof c == "object" && c !== null && (n = Vl(c)),
        (n = new e(a, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = Fc),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = a),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Oc(t),
        (c = e.contextType),
        (n.context = typeof c == "object" && c !== null ? Vl(c) : $e),
        (n.state = t.memoizedState),
        (c = e.getDerivedStateFromProps),
        typeof c == "function" && ($c(t, e, c, a), (n.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && Fc.enqueueReplaceState(n, n.state, null),
          La(t, a, n, u),
          Za(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps,
        f = _e(e, i);
      n.props = f;
      var v = n.context,
        x = e.contextType;
      (c = $e), typeof x == "object" && x !== null && (c = Vl(x));
      var E = e.getDerivedStateFromProps;
      (x =
        typeof E == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (i = t.pendingProps !== i),
        x ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i || v !== c) && dr(t, n, a, c)),
        ($t = !1);
      var y = t.memoizedState;
      (n.state = y),
        La(t, a, n, u),
        Za(),
        (v = t.memoizedState),
        i || y !== v || $t
          ? (typeof E == "function" && ($c(t, e, E, a), (v = t.memoizedState)),
            (f = $t || or(t, e, f, a, y, v, c))
              ? (x ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = v)),
            (n.props = a),
            (n.state = v),
            (n.context = c),
            (a = f))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (n = t.stateNode),
        jc(l, t),
        (c = t.memoizedProps),
        (x = _e(e, c)),
        (n.props = x),
        (E = t.pendingProps),
        (y = n.context),
        (v = e.contextType),
        (f = $e),
        typeof v == "object" && v !== null && (f = Vl(v)),
        (i = e.getDerivedStateFromProps),
        (v =
          typeof i == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== E || y !== f) && dr(t, n, a, f)),
        ($t = !1),
        (y = t.memoizedState),
        (n.state = y),
        La(t, a, n, u),
        Za();
      var g = t.memoizedState;
      c !== E ||
      y !== g ||
      $t ||
      (l !== null && l.dependencies !== null && Xu(l.dependencies))
        ? (typeof i == "function" && ($c(t, e, i, a), (g = t.memoizedState)),
          (x =
            $t ||
            or(t, e, x, a, y, g, f) ||
            (l !== null && l.dependencies !== null && Xu(l.dependencies)))
            ? (v ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, g, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, g, f)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === l.memoizedProps && y === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && y === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = g)),
          (n.props = a),
          (n.state = g),
          (n.context = f),
          (a = x))
        : (typeof n.componentDidUpdate != "function" ||
            (c === l.memoizedProps && y === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && y === l.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      cn(l, t),
      (a = (t.flags & 128) !== 0),
      n || a
        ? ((n = t.stateNode),
          (e =
            a && typeof e.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && a
            ? ((t.child = ca(t, l.child, null, u)),
              (t.child = ca(t, null, e, u)))
            : Gl(l, t, e, u),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Ct(l, t, u)),
      l
    );
  }
  function Nr(l, t, e, a) {
    return Ba(), (t.flags |= 256), Gl(l, t, e, a), t.child;
  }
  var li = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function ti(l) {
    return { baseLanes: l, cachePool: ms() };
  }
  function ei(l, t, e) {
    return (l = l !== null ? l.childLanes & ~e : 0), t && (l |= xt), l;
  }
  function Or(l, t, e) {
    var a = t.pendingProps,
      u = !1,
      n = (t.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (Rl.current & 2) !== 0),
      c && ((u = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (nl) {
        if ((u ? le(t) : te(), nl)) {
          var i = pl,
            f;
          if ((f = i)) {
            l: {
              for (f = i, i = At; f.nodeType !== 8; ) {
                if (!i) {
                  i = null;
                  break l;
                }
                if (((f = Et(f.nextSibling)), f === null)) {
                  i = null;
                  break l;
                }
              }
              i = f;
            }
            i !== null
              ? ((t.memoizedState = {
                  dehydrated: i,
                  treeContext: Ee !== null ? { id: Rt, overflow: Ht } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (f = ct(18, null, null, 0)),
                (f.stateNode = i),
                (f.return = t),
                (t.child = f),
                (Wl = t),
                (pl = null),
                (f = !0))
              : (f = !1);
          }
          f || Me(t);
        }
        if (
          ((i = t.memoizedState),
          i !== null && ((i = i.dehydrated), i !== null))
        )
          return Ci(i) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        Yt(t);
      }
      return (
        (i = a.children),
        (a = a.fallback),
        u
          ? (te(),
            (u = t.mode),
            (i = fn({ mode: "hidden", children: i }, u)),
            (a = Te(a, u, e, null)),
            (i.return = t),
            (a.return = t),
            (i.sibling = a),
            (t.child = i),
            (u = t.child),
            (u.memoizedState = ti(e)),
            (u.childLanes = ei(l, c, e)),
            (t.memoizedState = li),
            a)
          : (le(t), ai(t, i))
      );
    }
    if (
      ((f = l.memoizedState), f !== null && ((i = f.dehydrated), i !== null))
    ) {
      if (n)
        t.flags & 256
          ? (le(t), (t.flags &= -257), (t = ui(l, t, e)))
          : t.memoizedState !== null
          ? (te(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (te(),
            (u = a.fallback),
            (i = t.mode),
            (a = fn({ mode: "visible", children: a.children }, i)),
            (u = Te(u, i, e, null)),
            (u.flags |= 2),
            (a.return = t),
            (u.return = t),
            (a.sibling = u),
            (t.child = a),
            ca(t, l.child, null, e),
            (a = t.child),
            (a.memoizedState = ti(e)),
            (a.childLanes = ei(l, c, e)),
            (t.memoizedState = li),
            (t = u));
      else if ((le(t), Ci(i))) {
        if (((c = i.nextSibling && i.nextSibling.dataset), c)) var v = c.dgst;
        (c = v),
          (a = Error(m(419))),
          (a.stack = ""),
          (a.digest = c),
          qa({ value: a, source: null, stack: null }),
          (t = ui(l, t, e));
      } else if (
        (ql || wa(l, t, e, !1), (c = (e & l.childLanes) !== 0), ql || c)
      ) {
        if (
          ((c = vl),
          c !== null &&
            ((a = e & -e),
            (a = (a & 42) !== 0 ? 1 : Gn(a)),
            (a = (a & (c.suspendedLanes | e)) !== 0 ? 0 : a),
            a !== 0 && a !== f.retryLane))
        )
          throw ((f.retryLane = a), We(l, a), ot(c, l, a), xr);
        i.data === "$?" || Ti(), (t = ui(l, t, e));
      } else
        i.data === "$?"
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = f.treeContext),
            (pl = Et(i.nextSibling)),
            (Wl = t),
            (nl = !0),
            (Ae = null),
            (At = !1),
            l !== null &&
              ((yt[gt++] = Rt),
              (yt[gt++] = Ht),
              (yt[gt++] = Ee),
              (Rt = l.id),
              (Ht = l.overflow),
              (Ee = t)),
            (t = ai(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (te(),
        (u = a.fallback),
        (i = t.mode),
        (f = l.child),
        (v = f.sibling),
        (a = Ut(f, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = f.subtreeFlags & 65011712),
        v !== null ? (u = Ut(v, u)) : ((u = Te(u, i, e, null)), (u.flags |= 2)),
        (u.return = t),
        (a.return = t),
        (a.sibling = u),
        (t.child = a),
        (a = u),
        (u = t.child),
        (i = l.child.memoizedState),
        i === null
          ? (i = ti(e))
          : ((f = i.cachePool),
            f !== null
              ? ((v = Ul._currentValue),
                (f = f.parent !== v ? { parent: v, pool: v } : f))
              : (f = ms()),
            (i = { baseLanes: i.baseLanes | e, cachePool: f })),
        (u.memoizedState = i),
        (u.childLanes = ei(l, c, e)),
        (t.memoizedState = li),
        a)
      : (le(t),
        (e = l.child),
        (l = e.sibling),
        (e = Ut(e, { mode: "visible", children: a.children })),
        (e.return = t),
        (e.sibling = null),
        l !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [l]), (t.flags |= 16)) : c.push(l)),
        (t.child = e),
        (t.memoizedState = null),
        e);
  }
  function ai(l, t) {
    return (
      (t = fn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function fn(l, t) {
    return (
      (l = ct(22, l, null, t)),
      (l.lanes = 0),
      (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      l
    );
  }
  function ui(l, t, e) {
    return (
      ca(t, l.child, null, e),
      (l = ai(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function jr(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Tc(l.return, t, e);
  }
  function ni(l, t, e, a, u) {
    var n = l.memoizedState;
    n === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: u,
        })
      : ((n.isBackwards = t),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = a),
        (n.tail = e),
        (n.tailMode = u));
  }
  function Dr(l, t, e) {
    var a = t.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    if ((Gl(l, t, a.children, e), (a = Rl.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && jr(l, e, t);
          else if (l.tag === 19) jr(l, e, t);
          else if (l.child !== null) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      a &= 1;
    }
    switch ((M(Rl, a), u)) {
      case "forwards":
        for (e = t.child, u = null; e !== null; )
          (l = e.alternate),
            l !== null && an(l) === null && (u = e),
            (e = e.sibling);
        (e = u),
          e === null
            ? ((u = t.child), (t.child = null))
            : ((u = e.sibling), (e.sibling = null)),
          ni(t, !1, u, e, n);
        break;
      case "backwards":
        for (e = null, u = t.child, t.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && an(l) === null)) {
            t.child = u;
            break;
          }
          (l = u.sibling), (u.sibling = e), (e = u), (u = l);
        }
        ni(t, !0, e, null, n);
        break;
      case "together":
        ni(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ct(l, t, e) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (ce |= t.lanes),
      (e & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((wa(l, t, e, !1), (e & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(m(153));
    if (t.child !== null) {
      for (
        l = t.child, e = Ut(l, l.pendingProps), t.child = e, e.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (e = e.sibling = Ut(l, l.pendingProps)),
          (e.return = t);
      e.sibling = null;
    }
    return t.child;
  }
  function ci(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Xu(l)));
  }
  function q0(l, t, e) {
    switch (t.tag) {
      case 3:
        yl(t, t.stateNode.containerInfo),
          Wt(t, Ul, l.memoizedState.cache),
          Ba();
        break;
      case 27:
      case 5:
        Bn(t);
        break;
      case 4:
        yl(t, t.stateNode.containerInfo);
        break;
      case 10:
        Wt(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (le(t), (t.flags |= 128), null)
            : (e & t.child.childLanes) !== 0
            ? Or(l, t, e)
            : (le(t), (l = Ct(l, t, e)), l !== null ? l.sibling : null);
        le(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((a = (e & t.childLanes) !== 0),
          a || (wa(l, t, e, !1), (a = (e & t.childLanes) !== 0)),
          u)
        ) {
          if (a) return Dr(l, t, e);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          M(Rl, Rl.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Er(l, t, e);
      case 24:
        Wt(t, Ul, l.memoizedState.cache);
    }
    return Ct(l, t, e);
  }
  function _r(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) ql = !0;
      else {
        if (!ci(l, e) && (t.flags & 128) === 0) return (ql = !1), q0(l, t, e);
        ql = (l.flags & 131072) !== 0;
      }
    else (ql = !1), nl && (t.flags & 1048576) !== 0 && is(t, Gu, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          l = t.pendingProps;
          var a = t.elementType,
            u = a._init;
          if (((a = u(a._payload)), (t.type = a), typeof a == "function"))
            vc(a)
              ? ((l = _e(a, l)), (t.tag = 1), (t = Mr(null, t, a, l, e)))
              : ((t.tag = 0), (t = Pc(null, t, a, l, e)));
          else {
            if (a != null) {
              if (((u = a.$$typeof), u === zl)) {
                (t.tag = 11), (t = Sr(null, t, a, l, e));
                break l;
              } else if (u === Jl) {
                (t.tag = 14), (t = pr(null, t, a, l, e));
                break l;
              }
            }
            throw ((t = Cl(a) || a), Error(m(306, t, "")));
          }
        }
        return t;
      case 0:
        return Pc(l, t, t.type, t.pendingProps, e);
      case 1:
        return (a = t.type), (u = _e(a, t.pendingProps)), Mr(l, t, a, u, e);
      case 3:
        l: {
          if ((yl(t, t.stateNode.containerInfo), l === null))
            throw Error(m(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          (u = n.element), jc(l, t), La(t, a, null, e);
          var c = t.memoizedState;
          if (
            ((a = c.cache),
            Wt(t, Ul, a),
            a !== n.cache && Ec(t, [Ul], e, !0),
            Za(),
            (a = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = Nr(l, t, a, e);
              break l;
            } else if (a !== u) {
              (u = mt(Error(m(424)), t)), qa(u), (t = Nr(l, t, a, e));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                pl = Et(l.firstChild),
                  Wl = t,
                  nl = !0,
                  Ae = null,
                  At = !0,
                  e = sr(t, null, a, e),
                  t.child = e;
                e;

              )
                (e.flags = (e.flags & -3) | 4096), (e = e.sibling);
            }
          else {
            if ((Ba(), a === u)) {
              t = Ct(l, t, e);
              break l;
            }
            Gl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          cn(l, t),
          l === null
            ? (e = qo(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = e)
              : nl ||
                ((e = t.type),
                (l = t.pendingProps),
                (a = Tn(X.current).createElement(e)),
                (a[Ll] = t),
                (a[$l] = l),
                Ql(a, e, l),
                Bl(a),
                (t.stateNode = a))
            : (t.memoizedState = qo(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          Bn(t),
          l === null &&
            nl &&
            ((a = t.stateNode = Ro(t.type, t.pendingProps, X.current)),
            (Wl = t),
            (At = !0),
            (u = pl),
            re(t.type) ? ((Gi = u), (pl = Et(a.firstChild))) : (pl = u)),
          Gl(l, t, t.pendingProps.children, e),
          cn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            nl &&
            ((u = a = pl) &&
              ((a = rh(a, t.type, t.pendingProps, At)),
              a !== null
                ? ((t.stateNode = a),
                  (Wl = t),
                  (pl = Et(a.firstChild)),
                  (At = !1),
                  (u = !0))
                : (u = !1)),
            u || Me(t)),
          Bn(t),
          (u = t.type),
          (n = t.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (a = n.children),
          qi(u, n) ? (a = null) : c !== null && qi(u, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = Bc(l, t, O0, null, null, e)), (du._currentValue = u)),
          cn(l, t),
          Gl(l, t, a, e),
          t.child
        );
      case 6:
        return (
          l === null &&
            nl &&
            ((l = e = pl) &&
              ((e = oh(e, t.pendingProps, At)),
              e !== null
                ? ((t.stateNode = e), (Wl = t), (pl = null), (l = !0))
                : (l = !1)),
            l || Me(t)),
          null
        );
      case 13:
        return Or(l, t, e);
      case 4:
        return (
          yl(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          l === null ? (t.child = ca(t, null, a, e)) : Gl(l, t, a, e),
          t.child
        );
      case 11:
        return Sr(l, t, t.type, t.pendingProps, e);
      case 7:
        return Gl(l, t, t.pendingProps, e), t.child;
      case 8:
        return Gl(l, t, t.pendingProps.children, e), t.child;
      case 12:
        return Gl(l, t, t.pendingProps.children, e), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          Wt(t, t.type, a.value),
          Gl(l, t, a.children, e),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (a = t.pendingProps.children),
          Oe(t),
          (u = Vl(u)),
          (a = a(u)),
          (t.flags |= 1),
          Gl(l, t, a, e),
          t.child
        );
      case 14:
        return pr(l, t, t.type, t.pendingProps, e);
      case 15:
        return Tr(l, t, t.type, t.pendingProps, e);
      case 19:
        return Dr(l, t, e);
      case 31:
        return (
          (a = t.pendingProps),
          (e = t.mode),
          (a = { mode: a.mode, children: a.children }),
          l === null
            ? ((e = fn(a, e)),
              (e.ref = t.ref),
              (t.child = e),
              (e.return = t),
              (t = e))
            : ((e = Ut(l.child, a)),
              (e.ref = t.ref),
              (t.child = e),
              (e.return = t),
              (t = e)),
          t
        );
      case 22:
        return Er(l, t, e);
      case 24:
        return (
          Oe(t),
          (a = Vl(Ul)),
          l === null
            ? ((u = Mc()),
              u === null &&
                ((u = vl),
                (n = zc()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= e),
                (u = n)),
              (t.memoizedState = { parent: a, cache: u }),
              Oc(t),
              Wt(t, Ul, u))
            : ((l.lanes & e) !== 0 && (jc(l, t), La(t, null, null, e), Za()),
              (u = l.memoizedState),
              (n = t.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  Wt(t, Ul, a))
                : ((a = n.cache),
                  Wt(t, Ul, a),
                  a !== u.cache && Ec(t, [Ul], e, !0))),
          Gl(l, t, t.pendingProps.children, e),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(m(156, t.tag));
  }
  function Gt(l) {
    l.flags |= 4;
  }
  function Ur(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Xo(t))) {
      if (
        ((t = bt.current),
        t !== null &&
          ((P & 4194048) === P
            ? Mt !== null
            : ((P & 62914560) !== P && (P & 536870912) === 0) || t !== Mt))
      )
        throw ((Xa = Nc), vs);
      l.flags |= 8192;
    }
  }
  function sn(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? rf() : 536870912), (l.lanes |= t), (ra |= t));
  }
  function Fa(l, t) {
    if (!nl)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; )
            t.alternate !== null && (e = t), (t = t.sibling);
          e === null ? (l.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), (e = e.sibling);
          a === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function bl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      e = 0,
      a = 0;
    if (t)
      for (var u = l.child; u !== null; )
        (e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = l),
          (u = u.sibling);
    else
      for (u = l.child; u !== null; )
        (e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = l),
          (u = u.sibling);
    return (l.subtreeFlags |= a), (l.childLanes = e), t;
  }
  function w0(l, t, e) {
    var a = t.pendingProps;
    switch ((xc(t), t.tag)) {
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
        return bl(t), null;
      case 1:
        return bl(t), null;
      case 3:
        return (
          (e = t.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          qt(Ul),
          Vt(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (l === null || l.child === null) &&
            (Ha(t)
              ? Gt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), rs())),
          bl(t),
          null
        );
      case 26:
        return (
          (e = t.memoizedState),
          l === null
            ? (Gt(t),
              e !== null ? (bl(t), Ur(t, e)) : (bl(t), (t.flags &= -16777217)))
            : e
            ? e !== l.memoizedState
              ? (Gt(t), bl(t), Ur(t, e))
              : (bl(t), (t.flags &= -16777217))
            : (l.memoizedProps !== a && Gt(t), bl(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        xu(t), (e = X.current);
        var u = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== a && Gt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(m(166));
            return bl(t), null;
          }
          (l = H.current),
            Ha(t) ? fs(t) : ((l = Ro(u, a, e)), (t.stateNode = l), Gt(t));
        }
        return bl(t), null;
      case 5:
        if ((xu(t), (e = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== a && Gt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(m(166));
            return bl(t), null;
          }
          if (((l = H.current), Ha(t))) fs(t);
          else {
            switch (((u = Tn(X.current)), l)) {
              case 1:
                l = u.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                l = u.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    l = u.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    l = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    (l = u.createElement("div")),
                      (l.innerHTML = "<script></script>"),
                      (l = l.removeChild(l.firstChild));
                    break;
                  case "select":
                    (l =
                      typeof a.is == "string"
                        ? u.createElement("select", { is: a.is })
                        : u.createElement("select")),
                      a.multiple
                        ? (l.multiple = !0)
                        : a.size && (l.size = a.size);
                    break;
                  default:
                    l =
                      typeof a.is == "string"
                        ? u.createElement(e, { is: a.is })
                        : u.createElement(e);
                }
            }
            (l[Ll] = t), (l[$l] = a);
            l: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) l.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === t) break l;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t) break l;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            t.stateNode = l;
            l: switch ((Ql(l, e, a), e)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!a.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Gt(t);
          }
        }
        return bl(t), (t.flags &= -16777217), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Gt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(m(166));
          if (((l = X.current), Ha(t))) {
            if (
              ((l = t.stateNode),
              (e = t.memoizedProps),
              (a = null),
              (u = Wl),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            (l[Ll] = t),
              (l = !!(
                l.nodeValue === e ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Mo(l.nodeValue, e)
              )),
              l || Me(t);
          } else (l = Tn(l).createTextNode(a)), (l[Ll] = t), (t.stateNode = l);
        }
        return bl(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = Ha(t)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(m(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(m(317));
              u[Ll] = t;
            } else
              Ba(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            bl(t), (u = !1);
          } else
            (u = rs()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return t.flags & 256 ? (Yt(t), t) : (Yt(t), null);
        }
        if ((Yt(t), (t.flags & 128) !== 0)) return (t.lanes = e), t;
        if (
          ((e = a !== null), (l = l !== null && l.memoizedState !== null), e)
        ) {
          (a = t.child),
            (u = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (u = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (n = a.memoizedState.cachePool.pool),
            n !== u && (a.flags |= 2048);
        }
        return (
          e !== l && e && (t.child.flags |= 8192),
          sn(t, t.updateQueue),
          bl(t),
          null
        );
      case 4:
        return Vt(), l === null && _i(t.stateNode.containerInfo), bl(t), null;
      case 10:
        return qt(t.type), bl(t), null;
      case 19:
        if ((O(Rl), (u = t.memoizedState), u === null)) return bl(t), null;
        if (((a = (t.flags & 128) !== 0), (n = u.rendering), n === null))
          if (a) Fa(u, !1);
          else {
            if (Tl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = an(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      Fa(u, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      sn(t, l),
                      t.subtreeFlags = 0,
                      l = e,
                      e = t.child;
                    e !== null;

                  )
                    cs(e, l), (e = e.sibling);
                  return M(Rl, (Rl.current & 1) | 2), t.child;
                }
                l = l.sibling;
              }
            u.tail !== null &&
              zt() > dn &&
              ((t.flags |= 128), (a = !0), Fa(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((l = an(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                sn(t, l),
                Fa(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !nl)
              )
                return bl(t), null;
            } else
              2 * zt() - u.renderingStartTime > dn &&
                e !== 536870912 &&
                ((t.flags |= 128), (a = !0), Fa(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = u.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = zt()),
            (t.sibling = null),
            (l = Rl.current),
            M(Rl, a ? (l & 1) | 2 : l & 1),
            t)
          : (bl(t), null);
      case 22:
      case 23:
        return (
          Yt(t),
          Rc(),
          (a = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (e & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (bl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : bl(t),
          (e = t.updateQueue),
          e !== null && sn(t, e.retryQueue),
          (e = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (e = l.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== e && (t.flags |= 2048),
          l !== null && O(je),
          null
        );
      case 24:
        return (
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          qt(Ul),
          bl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function Y0(l, t) {
    switch ((xc(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          qt(Ul),
          Vt(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return xu(t), null;
      case 13:
        if (
          (Yt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(m(340));
          Ba();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return O(Rl), null;
      case 4:
        return Vt(), null;
      case 10:
        return qt(t.type), null;
      case 22:
      case 23:
        return (
          Yt(t),
          Rc(),
          l !== null && O(je),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return qt(Ul), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Rr(l, t) {
    switch ((xc(t), t.tag)) {
      case 3:
        qt(Ul), Vt();
        break;
      case 26:
      case 27:
      case 5:
        xu(t);
        break;
      case 4:
        Vt();
        break;
      case 13:
        Yt(t);
        break;
      case 19:
        O(Rl);
        break;
      case 10:
        qt(t.type);
        break;
      case 22:
      case 23:
        Yt(t), Rc(), l !== null && O(je);
        break;
      case 24:
        qt(Ul);
    }
  }
  function Ia(l, t) {
    try {
      var e = t.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var n = e.create,
              c = e.inst;
            (a = n()), (c.destroy = a);
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (i) {
      ml(t, t.return, i);
    }
  }
  function ee(l, t, e) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var c = a.inst,
              i = c.destroy;
            if (i !== void 0) {
              (c.destroy = void 0), (u = t);
              var f = e,
                v = i;
              try {
                v();
              } catch (x) {
                ml(u, f, x);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (x) {
      ml(t, t.return, x);
    }
  }
  function Hr(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        ps(t, e);
      } catch (a) {
        ml(l, l.return, a);
      }
    }
  }
  function Br(l, t, e) {
    (e.props = _e(l.type, l.memoizedProps)), (e.state = l.memoizedState);
    try {
      e.componentWillUnmount();
    } catch (a) {
      ml(l, t, a);
    }
  }
  function Pa(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? (l.refCleanup = e(a)) : (e.current = a);
      }
    } catch (u) {
      ml(l, t, u);
    }
  }
  function Nt(l, t) {
    var e = l.ref,
      a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          ml(l, t, u);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          ml(l, t, u);
        }
      else e.current = null;
  }
  function qr(l) {
    var t = l.type,
      e = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      ml(l, l.return, u);
    }
  }
  function ii(l, t, e) {
    try {
      var a = l.stateNode;
      nh(a, l.type, e, t), (a[$l] = t);
    } catch (u) {
      ml(l, l.return, u);
    }
  }
  function wr(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && re(l.type)) ||
      l.tag === 4
    );
  }
  function fi(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || wr(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && re(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function si(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode),
        t
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
              ? e.ownerDocument.body
              : e
            ).insertBefore(l, t)
          : ((t =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e),
            t.appendChild(l),
            (e = e._reactRootContainer),
            e != null || t.onclick !== null || (t.onclick = pn));
    else if (
      a !== 4 &&
      (a === 27 && re(l.type) && ((e = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (si(l, t, e), l = l.sibling; l !== null; )
        si(l, t, e), (l = l.sibling);
  }
  function rn(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode), t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (
      a !== 4 &&
      (a === 27 && re(l.type) && (e = l.stateNode), (l = l.child), l !== null)
    )
      for (rn(l, t, e), l = l.sibling; l !== null; )
        rn(l, t, e), (l = l.sibling);
  }
  function Yr(l) {
    var t = l.stateNode,
      e = l.memoizedProps;
    try {
      for (var a = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Ql(t, a, e), (t[Ll] = l), (t[$l] = e);
    } catch (n) {
      ml(l, l.return, n);
    }
  }
  var Xt = !1,
    Ml = !1,
    ri = !1,
    Cr = typeof WeakSet == "function" ? WeakSet : Set,
    wl = null;
  function C0(l, t) {
    if (((l = l.containerInfo), (Hi = On), (l = $f(l)), fc(l))) {
      if ("selectionStart" in l)
        var e = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          e = ((e = l.ownerDocument) && e.defaultView) || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break l;
            }
            var c = 0,
              i = -1,
              f = -1,
              v = 0,
              x = 0,
              E = l,
              y = null;
            t: for (;;) {
              for (
                var g;
                E !== e || (u !== 0 && E.nodeType !== 3) || (i = c + u),
                  E !== n || (a !== 0 && E.nodeType !== 3) || (f = c + a),
                  E.nodeType === 3 && (c += E.nodeValue.length),
                  (g = E.firstChild) !== null;

              )
                (y = E), (E = g);
              for (;;) {
                if (E === l) break t;
                if (
                  (y === e && ++v === u && (i = c),
                  y === n && ++x === a && (f = c),
                  (g = E.nextSibling) !== null)
                )
                  break;
                (E = y), (y = E.parentNode);
              }
              E = g;
            }
            e = i === -1 || f === -1 ? null : { start: i, end: f };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      Bi = { focusedElem: l, selectionRange: e }, On = !1, wl = t;
      wl !== null;

    )
      if (
        ((t = wl), (l = t.child), (t.subtreeFlags & 1024) !== 0 && l !== null)
      )
        (l.return = t), (wl = l);
      else
        for (; wl !== null; ) {
          switch (((t = wl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                (l = void 0),
                  (e = t),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = e.stateNode);
                try {
                  var C = _e(e.type, u, e.elementType === e.type);
                  (l = a.getSnapshotBeforeUpdate(C, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = l);
                } catch (B) {
                  ml(e, e.return, B);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (e = l.nodeType), e === 9)
                )
                  Yi(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Yi(l);
                      break;
                    default:
                      l.textContent = "";
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
              if ((l & 1024) !== 0) throw Error(m(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (wl = l);
            break;
          }
          wl = t.return;
        }
  }
  function Gr(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ae(l, e), a & 4 && Ia(5, e);
        break;
      case 1:
        if ((ae(l, e), a & 4))
          if (((l = e.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (c) {
              ml(e, e.return, c);
            }
          else {
            var u = _e(e.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              ml(e, e.return, c);
            }
          }
        a & 64 && Hr(e), a & 512 && Pa(e, e.return);
        break;
      case 3:
        if ((ae(l, e), a & 64 && ((l = e.updateQueue), l !== null))) {
          if (((t = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            ps(l, t);
          } catch (c) {
            ml(e, e.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Yr(e);
      case 26:
      case 5:
        ae(l, e), t === null && a & 4 && qr(e), a & 512 && Pa(e, e.return);
        break;
      case 12:
        ae(l, e);
        break;
      case 13:
        ae(l, e),
          a & 4 && Zr(l, e),
          a & 64 &&
            ((l = e.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((e = k0.bind(null, e)), dh(l, e))));
        break;
      case 22:
        if (((a = e.memoizedState !== null || Xt), !a)) {
          (t = (t !== null && t.memoizedState !== null) || Ml), (u = Xt);
          var n = Ml;
          (Xt = a),
            (Ml = t) && !n ? ue(l, e, (e.subtreeFlags & 8772) !== 0) : ae(l, e),
            (Xt = u),
            (Ml = n);
        }
        break;
      case 30:
        break;
      default:
        ae(l, e);
    }
  }
  function Xr(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), Xr(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && Zn(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var gl = null,
    Pl = !1;
  function Qt(l, t, e) {
    for (e = e.child; e !== null; ) Qr(l, t, e), (e = e.sibling);
  }
  function Qr(l, t, e) {
    if (at && typeof at.onCommitFiberUnmount == "function")
      try {
        at.onCommitFiberUnmount(Sa, e);
      } catch {}
    switch (e.tag) {
      case 26:
        Ml || Nt(e, t),
          Qt(l, t, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e));
        break;
      case 27:
        Ml || Nt(e, t);
        var a = gl,
          u = Pl;
        re(e.type) && ((gl = e.stateNode), (Pl = !1)),
          Qt(l, t, e),
          fu(e.stateNode),
          (gl = a),
          (Pl = u);
        break;
      case 5:
        Ml || Nt(e, t);
      case 6:
        if (
          ((a = gl),
          (u = Pl),
          (gl = null),
          Qt(l, t, e),
          (gl = a),
          (Pl = u),
          gl !== null)
        )
          if (Pl)
            try {
              (gl.nodeType === 9
                ? gl.body
                : gl.nodeName === "HTML"
                ? gl.ownerDocument.body
                : gl
              ).removeChild(e.stateNode);
            } catch (n) {
              ml(e, t, n);
            }
          else
            try {
              gl.removeChild(e.stateNode);
            } catch (n) {
              ml(e, t, n);
            }
        break;
      case 18:
        gl !== null &&
          (Pl
            ? ((l = gl),
              _o(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                e.stateNode
              ),
              yu(l))
            : _o(gl, e.stateNode));
        break;
      case 4:
        (a = gl),
          (u = Pl),
          (gl = e.stateNode.containerInfo),
          (Pl = !0),
          Qt(l, t, e),
          (gl = a),
          (Pl = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ml || ee(2, e, t), Ml || ee(4, e, t), Qt(l, t, e);
        break;
      case 1:
        Ml ||
          (Nt(e, t),
          (a = e.stateNode),
          typeof a.componentWillUnmount == "function" && Br(e, t, a)),
          Qt(l, t, e);
        break;
      case 21:
        Qt(l, t, e);
        break;
      case 22:
        (Ml = (a = Ml) || e.memoizedState !== null), Qt(l, t, e), (Ml = a);
        break;
      default:
        Qt(l, t, e);
    }
  }
  function Zr(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        yu(l);
      } catch (e) {
        ml(t, t.return, e);
      }
  }
  function G0(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Cr()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new Cr()),
          t
        );
      default:
        throw Error(m(435, l.tag));
    }
  }
  function oi(l, t) {
    var e = G0(l);
    t.forEach(function (a) {
      var u = W0.bind(null, l, a);
      e.has(a) || (e.add(a), a.then(u, u));
    });
  }
  function it(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a],
          n = l,
          c = t,
          i = c;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (re(i.type)) {
                (gl = i.stateNode), (Pl = !1);
                break l;
              }
              break;
            case 5:
              (gl = i.stateNode), (Pl = !1);
              break l;
            case 3:
            case 4:
              (gl = i.stateNode.containerInfo), (Pl = !0);
              break l;
          }
          i = i.return;
        }
        if (gl === null) throw Error(m(160));
        Qr(n, c, u),
          (gl = null),
          (Pl = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Lr(t, l), (t = t.sibling);
  }
  var Tt = null;
  function Lr(l, t) {
    var e = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        it(t, l),
          ft(l),
          a & 4 && (ee(3, l, l.return), Ia(3, l), ee(5, l, l.return));
        break;
      case 1:
        it(t, l),
          ft(l),
          a & 512 && (Ml || e === null || Nt(e, e.return)),
          a & 64 &&
            Xt &&
            ((l = l.updateQueue),
            l !== null &&
              ((a = l.callbacks),
              a !== null &&
                ((e = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = e === null ? a : e.concat(a)))));
        break;
      case 26:
        var u = Tt;
        if (
          (it(t, l),
          ft(l),
          a & 512 && (Ml || e === null || Nt(e, e.return)),
          a & 4)
        ) {
          var n = e !== null ? e.memoizedState : null;
          if (((a = l.memoizedState), e === null))
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  (a = l.type),
                    (e = l.memoizedProps),
                    (u = u.ownerDocument || u);
                  t: switch (a) {
                    case "title":
                      (n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Ea] ||
                          n[Ll] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(a)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title")
                          )),
                        Ql(n, a, e),
                        (n[Ll] = l),
                        Bl(n),
                        (a = n);
                      break l;
                    case "link":
                      var c = Co("link", "href", u).get(a + (e.href || ""));
                      if (c) {
                        for (var i = 0; i < c.length; i++)
                          if (
                            ((n = c[i]),
                            n.getAttribute("href") ===
                              (e.href == null || e.href === ""
                                ? null
                                : e.href) &&
                              n.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              n.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              n.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      (n = u.createElement(a)),
                        Ql(n, a, e),
                        u.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (c = Co("meta", "content", u).get(
                          a + (e.content || "")
                        ))
                      ) {
                        for (i = 0; i < c.length; i++)
                          if (
                            ((n = c[i]),
                            n.getAttribute("content") ===
                              (e.content == null ? null : "" + e.content) &&
                              n.getAttribute("name") ===
                                (e.name == null ? null : e.name) &&
                              n.getAttribute("property") ===
                                (e.property == null ? null : e.property) &&
                              n.getAttribute("http-equiv") ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (e.charSet == null ? null : e.charSet))
                          ) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      (n = u.createElement(a)),
                        Ql(n, a, e),
                        u.head.appendChild(n);
                      break;
                    default:
                      throw Error(m(468, a));
                  }
                  (n[Ll] = l), Bl(n), (a = n);
                }
                l.stateNode = a;
              } else Go(u, l.type, l.stateNode);
            else l.stateNode = Yo(u, a, l.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : n.count--,
                a === null
                  ? Go(u, l.type, l.stateNode)
                  : Yo(u, a, l.memoizedProps))
              : a === null &&
                l.stateNode !== null &&
                ii(l, l.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        it(t, l),
          ft(l),
          a & 512 && (Ml || e === null || Nt(e, e.return)),
          e !== null && a & 4 && ii(l, l.memoizedProps, e.memoizedProps);
        break;
      case 5:
        if (
          (it(t, l),
          ft(l),
          a & 512 && (Ml || e === null || Nt(e, e.return)),
          l.flags & 32)
        ) {
          u = l.stateNode;
          try {
            Qe(u, "");
          } catch (g) {
            ml(l, l.return, g);
          }
        }
        a & 4 &&
          l.stateNode != null &&
          ((u = l.memoizedProps), ii(l, u, e !== null ? e.memoizedProps : u)),
          a & 1024 && (ri = !0);
        break;
      case 6:
        if ((it(t, l), ft(l), a & 4)) {
          if (l.stateNode === null) throw Error(m(162));
          (a = l.memoizedProps), (e = l.stateNode);
          try {
            e.nodeValue = a;
          } catch (g) {
            ml(l, l.return, g);
          }
        }
        break;
      case 3:
        if (
          ((An = null),
          (u = Tt),
          (Tt = En(t.containerInfo)),
          it(t, l),
          (Tt = u),
          ft(l),
          a & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            yu(t.containerInfo);
          } catch (g) {
            ml(l, l.return, g);
          }
        ri && ((ri = !1), Vr(l));
        break;
      case 4:
        (a = Tt),
          (Tt = En(l.stateNode.containerInfo)),
          it(t, l),
          ft(l),
          (Tt = a);
        break;
      case 12:
        it(t, l), ft(l);
        break;
      case 13:
        it(t, l),
          ft(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (e !== null && e.memoizedState !== null) &&
            (gi = zt()),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), oi(l, a)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = e !== null && e.memoizedState !== null,
          v = Xt,
          x = Ml;
        if (
          ((Xt = v || u),
          (Ml = x || f),
          it(t, l),
          (Ml = x),
          (Xt = v),
          ft(l),
          a & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (e === null || f || Xt || Ml || Ue(l)),
              e = null,
              t = l;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                f = e = t;
                try {
                  if (((n = f.stateNode), u))
                    (c = n.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    i = f.stateNode;
                    var E = f.memoizedProps.style,
                      y =
                        E != null && E.hasOwnProperty("display")
                          ? E.display
                          : null;
                    i.style.display =
                      y == null || typeof y == "boolean" ? "" : ("" + y).trim();
                  }
                } catch (g) {
                  ml(f, f.return, g);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (g) {
                  ml(f, f.return, g);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              e === t && (e = null), (t = t.return);
            }
            e === t && (e = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = l.updateQueue),
          a !== null &&
            ((e = a.retryQueue),
            e !== null && ((a.retryQueue = null), oi(l, e))));
        break;
      case 19:
        it(t, l),
          ft(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), oi(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        it(t, l), ft(l);
    }
  }
  function ft(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (wr(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(m(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode,
              n = fi(l);
            rn(l, n, u);
            break;
          case 5:
            var c = e.stateNode;
            e.flags & 32 && (Qe(c, ""), (e.flags &= -33));
            var i = fi(l);
            rn(l, i, c);
            break;
          case 3:
          case 4:
            var f = e.stateNode.containerInfo,
              v = fi(l);
            si(l, v, f);
            break;
          default:
            throw Error(m(161));
        }
      } catch (x) {
        ml(l, l.return, x);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Vr(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Vr(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function ae(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Gr(l, t.alternate, t), (t = t.sibling);
  }
  function Ue(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ee(4, t, t.return), Ue(t);
          break;
        case 1:
          Nt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && Br(t, t.return, e),
            Ue(t);
          break;
        case 27:
          fu(t.stateNode);
        case 26:
        case 5:
          Nt(t, t.return), Ue(t);
          break;
        case 22:
          t.memoizedState === null && Ue(t);
          break;
        case 30:
          Ue(t);
          break;
        default:
          Ue(t);
      }
      l = l.sibling;
    }
  }
  function ue(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        u = l,
        n = t,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ue(u, n, e), Ia(4, n);
          break;
        case 1:
          if (
            (ue(u, n, e),
            (a = n),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (v) {
              ml(a, a.return, v);
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var i = a.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  Ss(f[u], i);
            } catch (v) {
              ml(a, a.return, v);
            }
          }
          e && c & 64 && Hr(n), Pa(n, n.return);
          break;
        case 27:
          Yr(n);
        case 26:
        case 5:
          ue(u, n, e), e && a === null && c & 4 && qr(n), Pa(n, n.return);
          break;
        case 12:
          ue(u, n, e);
          break;
        case 13:
          ue(u, n, e), e && c & 4 && Zr(u, n);
          break;
        case 22:
          n.memoizedState === null && ue(u, n, e), Pa(n, n.return);
          break;
        case 30:
          break;
        default:
          ue(u, n, e);
      }
      t = t.sibling;
    }
  }
  function di(l, t) {
    var e = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (e = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== e && (l != null && l.refCount++, e != null && Ya(e));
  }
  function hi(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Ya(l));
  }
  function Ot(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Kr(l, t, e, a), (t = t.sibling);
  }
  function Kr(l, t, e, a) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ot(l, t, e, a), u & 2048 && Ia(9, t);
        break;
      case 1:
        Ot(l, t, e, a);
        break;
      case 3:
        Ot(l, t, e, a),
          u & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Ya(l)));
        break;
      case 12:
        if (u & 2048) {
          Ot(l, t, e, a), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              c = n.id,
              i = n.onPostCommit;
            typeof i == "function" &&
              i(
                c,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (f) {
            ml(t, t.return, f);
          }
        } else Ot(l, t, e, a);
        break;
      case 13:
        Ot(l, t, e, a);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? Ot(l, t, e, a)
              : lu(l, t)
            : n._visibility & 2
            ? Ot(l, t, e, a)
            : ((n._visibility |= 2),
              ia(l, t, e, a, (t.subtreeFlags & 10256) !== 0)),
          u & 2048 && di(c, t);
        break;
      case 24:
        Ot(l, t, e, a), u & 2048 && hi(t.alternate, t);
        break;
      default:
        Ot(l, t, e, a);
    }
  }
  function ia(l, t, e, a, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l,
        c = t,
        i = e,
        f = a,
        v = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ia(n, c, i, f, u), Ia(8, c);
          break;
        case 23:
          break;
        case 22:
          var x = c.stateNode;
          c.memoizedState !== null
            ? x._visibility & 2
              ? ia(n, c, i, f, u)
              : lu(n, c)
            : ((x._visibility |= 2), ia(n, c, i, f, u)),
            u && v & 2048 && di(c.alternate, c);
          break;
        case 24:
          ia(n, c, i, f, u), u && v & 2048 && hi(c.alternate, c);
          break;
        default:
          ia(n, c, i, f, u);
      }
      t = t.sibling;
    }
  }
  function lu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l,
          a = t,
          u = a.flags;
        switch (a.tag) {
          case 22:
            lu(e, a), u & 2048 && di(a.alternate, a);
            break;
          case 24:
            lu(e, a), u & 2048 && hi(a.alternate, a);
            break;
          default:
            lu(e, a);
        }
        t = t.sibling;
      }
  }
  var tu = 8192;
  function fa(l) {
    if (l.subtreeFlags & tu)
      for (l = l.child; l !== null; ) Jr(l), (l = l.sibling);
  }
  function Jr(l) {
    switch (l.tag) {
      case 26:
        fa(l),
          l.flags & tu &&
            l.memoizedState !== null &&
            Ah(Tt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        fa(l);
        break;
      case 3:
      case 4:
        var t = Tt;
        (Tt = En(l.stateNode.containerInfo)), fa(l), (Tt = t);
        break;
      case 22:
        l.memoizedState === null &&
          ((t = l.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = tu), (tu = 16777216), fa(l), (tu = t))
            : fa(l));
        break;
      default:
        fa(l);
    }
  }
  function kr(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function eu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          (wl = a), $r(a, l);
        }
      kr(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) Wr(l), (l = l.sibling);
  }
  function Wr(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        eu(l), l.flags & 2048 && ee(9, l, l.return);
        break;
      case 3:
        eu(l);
        break;
      case 12:
        eu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), on(l))
          : eu(l);
        break;
      default:
        eu(l);
    }
  }
  function on(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          (wl = a), $r(a, l);
        }
      kr(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          ee(8, t, t.return), on(t);
          break;
        case 22:
          (e = t.stateNode),
            e._visibility & 2 && ((e._visibility &= -3), on(t));
          break;
        default:
          on(t);
      }
      l = l.sibling;
    }
  }
  function $r(l, t) {
    for (; wl !== null; ) {
      var e = wl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ee(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ya(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) (a.return = e), (wl = a);
      else
        l: for (e = l; wl !== null; ) {
          a = wl;
          var u = a.sibling,
            n = a.return;
          if ((Xr(a), a === e)) {
            wl = null;
            break l;
          }
          if (u !== null) {
            (u.return = n), (wl = u);
            break l;
          }
          wl = n;
        }
    }
  }
  var X0 = {
      getCacheForType: function (l) {
        var t = Vl(Ul),
          e = t.data.get(l);
        return e === void 0 && ((e = l()), t.data.set(l, e)), e;
      },
    },
    Q0 = typeof WeakMap == "function" ? WeakMap : Map,
    il = 0,
    vl = null,
    $ = null,
    P = 0,
    fl = 0,
    st = null,
    ne = !1,
    sa = !1,
    mi = !1,
    Zt = 0,
    Tl = 0,
    ce = 0,
    Re = 0,
    vi = 0,
    xt = 0,
    ra = 0,
    au = null,
    lt = null,
    yi = !1,
    gi = 0,
    dn = 1 / 0,
    hn = null,
    ie = null,
    Xl = 0,
    fe = null,
    oa = null,
    da = 0,
    bi = 0,
    xi = null,
    Fr = null,
    uu = 0,
    Si = null;
  function rt() {
    if ((il & 2) !== 0 && P !== 0) return P & -P;
    if (S.T !== null) {
      var l = Pe;
      return l !== 0 ? l : Ni();
    }
    return hf();
  }
  function Ir() {
    xt === 0 && (xt = (P & 536870912) === 0 || nl ? sf() : 536870912);
    var l = bt.current;
    return l !== null && (l.flags |= 32), xt;
  }
  function ot(l, t, e) {
    ((l === vl && (fl === 2 || fl === 9)) || l.cancelPendingCommit !== null) &&
      (ha(l, 0), se(l, P, xt, !1)),
      Ta(l, e),
      ((il & 2) === 0 || l !== vl) &&
        (l === vl &&
          ((il & 2) === 0 && (Re |= e), Tl === 4 && se(l, P, xt, !1)),
        jt(l));
  }
  function Pr(l, t, e) {
    if ((il & 6) !== 0) throw Error(m(327));
    var a = (!e && (t & 124) === 0 && (t & l.expiredLanes) === 0) || pa(l, t),
      u = a ? V0(l, t) : Ei(l, t, !0),
      n = a;
    do {
      if (u === 0) {
        sa && !a && se(l, t, 0, !1);
        break;
      } else {
        if (((e = l.current.alternate), n && !Z0(e))) {
          (u = Ei(l, t, !1)), (n = !1);
          continue;
        }
        if (u === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            (c = l.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            t = c;
            l: {
              var i = l;
              u = au;
              var f = i.current.memoizedState.isDehydrated;
              if ((f && (ha(i, c).flags |= 256), (c = Ei(i, c, !1)), c !== 2)) {
                if (mi && !f) {
                  (i.errorRecoveryDisabledLanes |= n), (Re |= n), (u = 4);
                  break l;
                }
                (n = lt),
                  (lt = u),
                  n !== null && (lt === null ? (lt = n) : lt.push.apply(lt, n));
              }
              u = c;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          ha(l, 0), se(l, t, 0, !0);
          break;
        }
        l: {
          switch (((a = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              se(a, t, xt, !ne);
              break l;
            case 2:
              lt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((t & 62914560) === t && ((u = gi + 300 - zt()), 10 < u)) {
            if ((se(a, t, xt, !ne), Eu(a, 0, !0) !== 0)) break l;
            a.timeoutHandle = jo(
              lo.bind(null, a, e, lt, hn, yi, t, xt, Re, ra, ne, n, 2, -0, 0),
              u
            );
            break l;
          }
          lo(a, e, lt, hn, yi, t, xt, Re, ra, ne, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    jt(l);
  }
  function lo(l, t, e, a, u, n, c, i, f, v, x, E, y, g) {
    if (
      ((l.timeoutHandle = -1),
      (E = t.subtreeFlags),
      (E & 8192 || (E & 16785408) === 16785408) &&
        ((ou = { stylesheets: null, count: 0, unsuspend: zh }),
        Jr(t),
        (E = Mh()),
        E !== null))
    ) {
      (l.cancelPendingCommit = E(
        io.bind(null, l, t, n, e, a, u, c, i, f, x, 1, y, g)
      )),
        se(l, n, c, !v);
      return;
    }
    io(l, t, n, e, a, u, c, i, f);
  }
  function Z0(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        t.flags & 16384 &&
        ((e = t.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var u = e[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!nt(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = t.child), t.subtreeFlags & 16384 && e !== null))
        (e.return = t), (t = e);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function se(l, t, e, a) {
    (t &= ~vi),
      (t &= ~Re),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      a && (l.warmLanes |= t),
      (a = l.expirationTimes);
    for (var u = t; 0 < u; ) {
      var n = 31 - ut(u),
        c = 1 << n;
      (a[n] = -1), (u &= ~c);
    }
    e !== 0 && of(l, e, t);
  }
  function mn() {
    return (il & 6) === 0 ? (nu(0), !1) : !0;
  }
  function pi() {
    if ($ !== null) {
      if (fl === 0) var l = $.return;
      else (l = $), (Bt = Ne = null), Yc(l), (na = null), (Wa = 0), (l = $);
      for (; l !== null; ) Rr(l.alternate, l), (l = l.return);
      $ = null;
    }
  }
  function ha(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && ((l.timeoutHandle = -1), ih(e)),
      (e = l.cancelPendingCommit),
      e !== null && ((l.cancelPendingCommit = null), e()),
      pi(),
      (vl = l),
      ($ = e = Ut(l.current, null)),
      (P = t),
      (fl = 0),
      (st = null),
      (ne = !1),
      (sa = pa(l, t)),
      (mi = !1),
      (ra = xt = vi = Re = ce = Tl = 0),
      (lt = au = null),
      (yi = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var u = 31 - ut(a),
          n = 1 << u;
        (t |= l[u]), (a &= ~n);
      }
    return (Zt = t), Bu(), e;
  }
  function to(l, t) {
    (K = null),
      (S.H = ln),
      t === Ga || t === Lu
        ? ((t = bs()), (fl = 3))
        : t === vs
        ? ((t = bs()), (fl = 4))
        : (fl =
            t === xr
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (st = t),
      $ === null && ((Tl = 1), nn(l, mt(t, l.current)));
  }
  function eo() {
    var l = S.H;
    return (S.H = ln), l === null ? ln : l;
  }
  function ao() {
    var l = S.A;
    return (S.A = X0), l;
  }
  function Ti() {
    (Tl = 4),
      ne || ((P & 4194048) !== P && bt.current !== null) || (sa = !0),
      ((ce & 134217727) === 0 && (Re & 134217727) === 0) ||
        vl === null ||
        se(vl, P, xt, !1);
  }
  function Ei(l, t, e) {
    var a = il;
    il |= 2;
    var u = eo(),
      n = ao();
    (vl !== l || P !== t) && ((hn = null), ha(l, t)), (t = !1);
    var c = Tl;
    l: do
      try {
        if (fl !== 0 && $ !== null) {
          var i = $,
            f = st;
          switch (fl) {
            case 8:
              pi(), (c = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              bt.current === null && (t = !0);
              var v = fl;
              if (((fl = 0), (st = null), ma(l, i, f, v), e && sa)) {
                c = 0;
                break l;
              }
              break;
            default:
              (v = fl), (fl = 0), (st = null), ma(l, i, f, v);
          }
        }
        L0(), (c = Tl);
        break;
      } catch (x) {
        to(l, x);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Bt = Ne = null),
      (il = a),
      (S.H = u),
      (S.A = n),
      $ === null && ((vl = null), (P = 0), Bu()),
      c
    );
  }
  function L0() {
    for (; $ !== null; ) uo($);
  }
  function V0(l, t) {
    var e = il;
    il |= 2;
    var a = eo(),
      u = ao();
    vl !== l || P !== t
      ? ((hn = null), (dn = zt() + 500), ha(l, t))
      : (sa = pa(l, t));
    l: do
      try {
        if (fl !== 0 && $ !== null) {
          t = $;
          var n = st;
          t: switch (fl) {
            case 1:
              (fl = 0), (st = null), ma(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (ys(n)) {
                (fl = 0), (st = null), no(t);
                break;
              }
              (t = function () {
                (fl !== 2 && fl !== 9) || vl !== l || (fl = 7), jt(l);
              }),
                n.then(t, t);
              break l;
            case 3:
              fl = 7;
              break l;
            case 4:
              fl = 5;
              break l;
            case 7:
              ys(n)
                ? ((fl = 0), (st = null), no(t))
                : ((fl = 0), (st = null), ma(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch ($.tag) {
                case 26:
                  c = $.memoizedState;
                case 5:
                case 27:
                  var i = $;
                  if (!c || Xo(c)) {
                    (fl = 0), (st = null);
                    var f = i.sibling;
                    if (f !== null) $ = f;
                    else {
                      var v = i.return;
                      v !== null ? (($ = v), vn(v)) : ($ = null);
                    }
                    break t;
                  }
              }
              (fl = 0), (st = null), ma(l, t, n, 5);
              break;
            case 6:
              (fl = 0), (st = null), ma(l, t, n, 6);
              break;
            case 8:
              pi(), (Tl = 6);
              break l;
            default:
              throw Error(m(462));
          }
        }
        K0();
        break;
      } catch (x) {
        to(l, x);
      }
    while (!0);
    return (
      (Bt = Ne = null),
      (S.H = a),
      (S.A = u),
      (il = e),
      $ !== null ? 0 : ((vl = null), (P = 0), Bu(), Tl)
    );
  }
  function K0() {
    for (; $ !== null && !md(); ) uo($);
  }
  function uo(l) {
    var t = _r(l.alternate, l, Zt);
    (l.memoizedProps = l.pendingProps), t === null ? vn(l) : ($ = t);
  }
  function no(l) {
    var t = l,
      e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ar(e, t, t.pendingProps, t.type, void 0, P);
        break;
      case 11:
        t = Ar(e, t, t.pendingProps, t.type.render, t.ref, P);
        break;
      case 5:
        Yc(t);
      default:
        Rr(e, t), (t = $ = cs(t, Zt)), (t = _r(e, t, Zt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? vn(l) : ($ = t);
  }
  function ma(l, t, e, a) {
    (Bt = Ne = null), Yc(t), (na = null), (Wa = 0);
    var u = t.return;
    try {
      if (B0(l, u, t, e, P)) {
        (Tl = 1), nn(l, mt(e, l.current)), ($ = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw (($ = u), n);
      (Tl = 1), nn(l, mt(e, l.current)), ($ = null);
      return;
    }
    t.flags & 32768
      ? (nl || a === 1
          ? (l = !0)
          : sa || (P & 536870912) !== 0
          ? (l = !1)
          : ((ne = l = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = bt.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        co(t, l))
      : vn(t);
  }
  function vn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        co(t, ne);
        return;
      }
      l = t.return;
      var e = w0(t.alternate, t, Zt);
      if (e !== null) {
        $ = e;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        $ = t;
        return;
      }
      $ = t = l;
    } while (t !== null);
    Tl === 0 && (Tl = 5);
  }
  function co(l, t) {
    do {
      var e = Y0(l.alternate, l);
      if (e !== null) {
        (e.flags &= 32767), ($ = e);
        return;
      }
      if (
        ((e = l.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        $ = l;
        return;
      }
      $ = l = e;
    } while (l !== null);
    (Tl = 6), ($ = null);
  }
  function io(l, t, e, a, u, n, c, i, f) {
    l.cancelPendingCommit = null;
    do yn();
    while (Xl !== 0);
    if ((il & 6) !== 0) throw Error(m(327));
    if (t !== null) {
      if (t === l.current) throw Error(m(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= hc),
        zd(l, e, n, c, i, f),
        l === vl && (($ = vl = null), (P = 0)),
        (oa = t),
        (fe = l),
        (da = e),
        (bi = n),
        (xi = u),
        (Fr = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            $0(Su, function () {
              return ho(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = S.T), (S.T = null), (u = N.p), (N.p = 2), (c = il), (il |= 4);
        try {
          C0(l, t, e);
        } finally {
          (il = c), (N.p = u), (S.T = a);
        }
      }
      (Xl = 1), fo(), so(), ro();
    }
  }
  function fo() {
    if (Xl === 1) {
      Xl = 0;
      var l = fe,
        t = oa,
        e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        (e = S.T), (S.T = null);
        var a = N.p;
        N.p = 2;
        var u = il;
        il |= 4;
        try {
          Lr(t, l);
          var n = Bi,
            c = $f(l.containerInfo),
            i = n.focusedElem,
            f = n.selectionRange;
          if (
            c !== i &&
            i &&
            i.ownerDocument &&
            Wf(i.ownerDocument.documentElement, i)
          ) {
            if (f !== null && fc(i)) {
              var v = f.start,
                x = f.end;
              if ((x === void 0 && (x = v), "selectionStart" in i))
                (i.selectionStart = v),
                  (i.selectionEnd = Math.min(x, i.value.length));
              else {
                var E = i.ownerDocument || document,
                  y = (E && E.defaultView) || window;
                if (y.getSelection) {
                  var g = y.getSelection(),
                    C = i.textContent.length,
                    B = Math.min(f.start, C),
                    ol = f.end === void 0 ? B : Math.min(f.end, C);
                  !g.extend && B > ol && ((c = ol), (ol = B), (B = c));
                  var d = kf(i, B),
                    r = kf(i, ol);
                  if (
                    d &&
                    r &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== d.node ||
                      g.anchorOffset !== d.offset ||
                      g.focusNode !== r.node ||
                      g.focusOffset !== r.offset)
                  ) {
                    var h = E.createRange();
                    h.setStart(d.node, d.offset),
                      g.removeAllRanges(),
                      B > ol
                        ? (g.addRange(h), g.extend(r.node, r.offset))
                        : (h.setEnd(r.node, r.offset), g.addRange(h));
                  }
                }
              }
            }
            for (E = [], g = i; (g = g.parentNode); )
              g.nodeType === 1 &&
                E.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof i.focus == "function" && i.focus(), i = 0;
              i < E.length;
              i++
            ) {
              var p = E[i];
              (p.element.scrollLeft = p.left), (p.element.scrollTop = p.top);
            }
          }
          (On = !!Hi), (Bi = Hi = null);
        } finally {
          (il = u), (N.p = a), (S.T = e);
        }
      }
      (l.current = t), (Xl = 2);
    }
  }
  function so() {
    if (Xl === 2) {
      Xl = 0;
      var l = fe,
        t = oa,
        e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        (e = S.T), (S.T = null);
        var a = N.p;
        N.p = 2;
        var u = il;
        il |= 4;
        try {
          Gr(l, t.alternate, t);
        } finally {
          (il = u), (N.p = a), (S.T = e);
        }
      }
      Xl = 3;
    }
  }
  function ro() {
    if (Xl === 4 || Xl === 3) {
      (Xl = 0), vd();
      var l = fe,
        t = oa,
        e = da,
        a = Fr;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Xl = 5)
        : ((Xl = 0), (oa = fe = null), oo(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (ie = null),
        Xn(e),
        (t = t.stateNode),
        at && typeof at.onCommitFiberRoot == "function")
      )
        try {
          at.onCommitFiberRoot(Sa, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = S.T), (u = N.p), (N.p = 2), (S.T = null);
        try {
          for (var n = l.onRecoverableError, c = 0; c < a.length; c++) {
            var i = a[c];
            n(i.value, { componentStack: i.stack });
          }
        } finally {
          (S.T = t), (N.p = u);
        }
      }
      (da & 3) !== 0 && yn(),
        jt(l),
        (u = l.pendingLanes),
        (e & 4194090) !== 0 && (u & 42) !== 0
          ? l === Si
            ? uu++
            : ((uu = 0), (Si = l))
          : (uu = 0),
        nu(0);
    }
  }
  function oo(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Ya(t)));
  }
  function yn(l) {
    return fo(), so(), ro(), ho();
  }
  function ho() {
    if (Xl !== 5) return !1;
    var l = fe,
      t = bi;
    bi = 0;
    var e = Xn(da),
      a = S.T,
      u = N.p;
    try {
      (N.p = 32 > e ? 32 : e), (S.T = null), (e = xi), (xi = null);
      var n = fe,
        c = da;
      if (((Xl = 0), (oa = fe = null), (da = 0), (il & 6) !== 0))
        throw Error(m(331));
      var i = il;
      if (
        ((il |= 4),
        Wr(n.current),
        Kr(n, n.current, c, e),
        (il = i),
        nu(0, !1),
        at && typeof at.onPostCommitFiberRoot == "function")
      )
        try {
          at.onPostCommitFiberRoot(Sa, n);
        } catch {}
      return !0;
    } finally {
      (N.p = u), (S.T = a), oo(l, t);
    }
  }
  function mo(l, t, e) {
    (t = mt(e, t)),
      (t = Ic(l.stateNode, t, 2)),
      (l = It(l, t, 2)),
      l !== null && (Ta(l, 2), jt(l));
  }
  function ml(l, t, e) {
    if (l.tag === 3) mo(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          mo(t, l, e);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ie === null || !ie.has(a)))
          ) {
            (l = mt(e, l)),
              (e = gr(2)),
              (a = It(t, e, 2)),
              a !== null && (br(e, a, t, l), Ta(a, 2), jt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function zi(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Q0();
      var u = new Set();
      a.set(t, u);
    } else (u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u));
    u.has(e) ||
      ((mi = !0), u.add(e), (l = J0.bind(null, l, t, e)), t.then(l, l));
  }
  function J0(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t),
      (l.pingedLanes |= l.suspendedLanes & e),
      (l.warmLanes &= ~e),
      vl === l &&
        (P & e) === e &&
        (Tl === 4 || (Tl === 3 && (P & 62914560) === P && 300 > zt() - gi)
          ? (il & 2) === 0 && ha(l, 0)
          : (vi |= e),
        ra === P && (ra = 0)),
      jt(l);
  }
  function vo(l, t) {
    t === 0 && (t = rf()), (l = We(l, t)), l !== null && (Ta(l, t), jt(l));
  }
  function k0(l) {
    var t = l.memoizedState,
      e = 0;
    t !== null && (e = t.retryLane), vo(l, e);
  }
  function W0(l, t) {
    var e = 0;
    switch (l.tag) {
      case 13:
        var a = l.stateNode,
          u = l.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    a !== null && a.delete(t), vo(l, e);
  }
  function $0(l, t) {
    return wn(l, t);
  }
  var gn = null,
    va = null,
    Ai = !1,
    bn = !1,
    Mi = !1,
    He = 0;
  function jt(l) {
    l !== va &&
      l.next === null &&
      (va === null ? (gn = va = l) : (va = va.next = l)),
      (bn = !0),
      Ai || ((Ai = !0), I0());
  }
  function nu(l, t) {
    if (!Mi && bn) {
      Mi = !0;
      do
        for (var e = !1, a = gn; a !== null; ) {
          if (l !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = a.suspendedLanes,
                i = a.pingedLanes;
              (n = (1 << (31 - ut(42 | l) + 1)) - 1),
                (n &= u & ~(c & ~i)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((e = !0), xo(a, n));
          } else
            (n = P),
              (n = Eu(
                a,
                a === vl ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (n & 3) === 0 || pa(a, n) || ((e = !0), xo(a, n));
          a = a.next;
        }
      while (e);
      Mi = !1;
    }
  }
  function F0() {
    yo();
  }
  function yo() {
    bn = Ai = !1;
    var l = 0;
    He !== 0 && (ch() && (l = He), (He = 0));
    for (var t = zt(), e = null, a = gn; a !== null; ) {
      var u = a.next,
        n = go(a, t);
      n === 0
        ? ((a.next = null),
          e === null ? (gn = u) : (e.next = u),
          u === null && (va = e))
        : ((e = a), (l !== 0 || (n & 3) !== 0) && (bn = !0)),
        (a = u);
    }
    nu(l);
  }
  function go(l, t) {
    for (
      var e = l.suspendedLanes,
        a = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var c = 31 - ut(n),
        i = 1 << c,
        f = u[c];
      f === -1
        ? ((i & e) === 0 || (i & a) !== 0) && (u[c] = Ed(i, t))
        : f <= t && (l.expiredLanes |= i),
        (n &= ~i);
    }
    if (
      ((t = vl),
      (e = P),
      (e = Eu(
        l,
        l === t ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      (a = l.callbackNode),
      e === 0 ||
        (l === t && (fl === 2 || fl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Yn(a),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((e & 3) === 0 || pa(l, e)) {
      if (((t = e & -e), t === l.callbackPriority)) return t;
      switch ((a !== null && Yn(a), Xn(e))) {
        case 2:
        case 8:
          e = cf;
          break;
        case 32:
          e = Su;
          break;
        case 268435456:
          e = ff;
          break;
        default:
          e = Su;
      }
      return (
        (a = bo.bind(null, l)),
        (e = wn(e, a)),
        (l.callbackPriority = t),
        (l.callbackNode = e),
        t
      );
    }
    return (
      a !== null && a !== null && Yn(a),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function bo(l, t) {
    if (Xl !== 0 && Xl !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var e = l.callbackNode;
    if (yn() && l.callbackNode !== e) return null;
    var a = P;
    return (
      (a = Eu(
        l,
        l === vl ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Pr(l, a, t),
          go(l, zt()),
          l.callbackNode != null && l.callbackNode === e
            ? bo.bind(null, l)
            : null)
    );
  }
  function xo(l, t) {
    if (yn()) return null;
    Pr(l, t, !0);
  }
  function I0() {
    fh(function () {
      (il & 6) !== 0 ? wn(nf, F0) : yo();
    });
  }
  function Ni() {
    return He === 0 && (He = sf()), He;
  }
  function So(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : Ou("" + l);
  }
  function po(l, t) {
    var e = t.ownerDocument.createElement("input");
    return (
      (e.name = t.name),
      (e.value = t.value),
      l.id && e.setAttribute("form", l.id),
      t.parentNode.insertBefore(e, t),
      (l = new FormData(l)),
      e.parentNode.removeChild(e),
      l
    );
  }
  function P0(l, t, e, a, u) {
    if (t === "submit" && e && e.stateNode === u) {
      var n = So((u[$l] || null).action),
        c = a.submitter;
      c &&
        ((t = (t = c[$l] || null)
          ? So(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((n = t), (c = null)));
      var i = new Uu("action", "action", null, a, u);
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (He !== 0) {
                  var f = c ? po(u, c) : new FormData(u);
                  Jc(
                    e,
                    { pending: !0, data: f, method: u.method, action: n },
                    null,
                    f
                  );
                }
              } else
                typeof n == "function" &&
                  (i.preventDefault(),
                  (f = c ? po(u, c) : new FormData(u)),
                  Jc(
                    e,
                    { pending: !0, data: f, method: u.method, action: n },
                    n,
                    f
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Oi = 0; Oi < dc.length; Oi++) {
    var ji = dc[Oi],
      lh = ji.toLowerCase(),
      th = ji[0].toUpperCase() + ji.slice(1);
    pt(lh, "on" + th);
  }
  pt(Pf, "onAnimationEnd"),
    pt(ls, "onAnimationIteration"),
    pt(ts, "onAnimationStart"),
    pt("dblclick", "onDoubleClick"),
    pt("focusin", "onFocus"),
    pt("focusout", "onBlur"),
    pt(b0, "onTransitionRun"),
    pt(x0, "onTransitionStart"),
    pt(S0, "onTransitionCancel"),
    pt(es, "onTransitionEnd"),
    Ce("onMouseEnter", ["mouseout", "mouseover"]),
    Ce("onMouseLeave", ["mouseout", "mouseover"]),
    Ce("onPointerEnter", ["pointerout", "pointerover"]),
    Ce("onPointerLeave", ["pointerout", "pointerover"]),
    be(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    be(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    be("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    be(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    be(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    be(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var cu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    eh = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(cu)
    );
  function To(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e],
        u = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var i = a[c],
              f = i.instance,
              v = i.currentTarget;
            if (((i = i.listener), f !== n && u.isPropagationStopped()))
              break l;
            (n = i), (u.currentTarget = v);
            try {
              n(u);
            } catch (x) {
              un(x);
            }
            (u.currentTarget = null), (n = f);
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((i = a[c]),
              (f = i.instance),
              (v = i.currentTarget),
              (i = i.listener),
              f !== n && u.isPropagationStopped())
            )
              break l;
            (n = i), (u.currentTarget = v);
            try {
              n(u);
            } catch (x) {
              un(x);
            }
            (u.currentTarget = null), (n = f);
          }
      }
    }
  }
  function F(l, t) {
    var e = t[Qn];
    e === void 0 && (e = t[Qn] = new Set());
    var a = l + "__bubble";
    e.has(a) || (Eo(t, l, 2, !1), e.add(a));
  }
  function Di(l, t, e) {
    var a = 0;
    t && (a |= 4), Eo(e, l, a, t);
  }
  var xn = "_reactListening" + Math.random().toString(36).slice(2);
  function _i(l) {
    if (!l[xn]) {
      (l[xn] = !0),
        vf.forEach(function (e) {
          e !== "selectionchange" && (eh.has(e) || Di(e, !1, l), Di(e, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[xn] || ((t[xn] = !0), Di("selectionchange", !1, t));
    }
  }
  function Eo(l, t, e, a) {
    switch (Jo(t)) {
      case 2:
        var u = jh;
        break;
      case 8:
        u = Dh;
        break;
      default:
        u = Vi;
    }
    (e = u.bind(null, t, e, l)),
      (u = void 0),
      !Pn ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? l.addEventListener(t, e, { capture: !0, passive: u })
          : l.addEventListener(t, e, !0)
        : u !== void 0
        ? l.addEventListener(t, e, { passive: u })
        : l.addEventListener(t, e, !1);
  }
  function Ui(l, t, e, a, u) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var i = a.stateNode.containerInfo;
          if (i === u) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var f = c.tag;
              if ((f === 3 || f === 4) && c.stateNode.containerInfo === u)
                return;
              c = c.return;
            }
          for (; i !== null; ) {
            if (((c = qe(i)), c === null)) return;
            if (((f = c.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              a = n = c;
              continue l;
            }
            i = i.parentNode;
          }
        }
        a = a.return;
      }
    jf(function () {
      var v = n,
        x = Fn(e),
        E = [];
      l: {
        var y = as.get(l);
        if (y !== void 0) {
          var g = Uu,
            C = l;
          switch (l) {
            case "keypress":
              if (Du(e) === 0) break l;
            case "keydown":
            case "keyup":
              g = $d;
              break;
            case "focusin":
              (C = "focus"), (g = ac);
              break;
            case "focusout":
              (C = "blur"), (g = ac);
              break;
            case "beforeblur":
            case "afterblur":
              g = ac;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Uf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Yd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = Pd;
              break;
            case Pf:
            case ls:
            case ts:
              g = Xd;
              break;
            case es:
              g = t0;
              break;
            case "scroll":
            case "scrollend":
              g = qd;
              break;
            case "wheel":
              g = a0;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = Zd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Hf;
              break;
            case "toggle":
            case "beforetoggle":
              g = n0;
          }
          var B = (t & 4) !== 0,
            ol = !B && (l === "scroll" || l === "scrollend"),
            d = B ? (y !== null ? y + "Capture" : null) : y;
          B = [];
          for (var r = v, h; r !== null; ) {
            var p = r;
            if (
              ((h = p.stateNode),
              (p = p.tag),
              (p !== 5 && p !== 26 && p !== 27) ||
                h === null ||
                d === null ||
                ((p = Aa(r, d)), p != null && B.push(iu(r, p, h))),
              ol)
            )
              break;
            r = r.return;
          }
          0 < B.length &&
            ((y = new g(y, C, null, e, x)), E.push({ event: y, listeners: B }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((y = l === "mouseover" || l === "pointerover"),
            (g = l === "mouseout" || l === "pointerout"),
            y &&
              e !== $n &&
              (C = e.relatedTarget || e.fromElement) &&
              (qe(C) || C[Be]))
          )
            break l;
          if (
            (g || y) &&
            ((y =
              x.window === x
                ? x
                : (y = x.ownerDocument)
                ? y.defaultView || y.parentWindow
                : window),
            g
              ? ((C = e.relatedTarget || e.toElement),
                (g = v),
                (C = C ? qe(C) : null),
                C !== null &&
                  ((ol = G(C)),
                  (B = C.tag),
                  C !== ol || (B !== 5 && B !== 27 && B !== 6)) &&
                  (C = null))
              : ((g = null), (C = v)),
            g !== C)
          ) {
            if (
              ((B = Uf),
              (p = "onMouseLeave"),
              (d = "onMouseEnter"),
              (r = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((B = Hf),
                (p = "onPointerLeave"),
                (d = "onPointerEnter"),
                (r = "pointer")),
              (ol = g == null ? y : za(g)),
              (h = C == null ? y : za(C)),
              (y = new B(p, r + "leave", g, e, x)),
              (y.target = ol),
              (y.relatedTarget = h),
              (p = null),
              qe(x) === v &&
                ((B = new B(d, r + "enter", C, e, x)),
                (B.target = h),
                (B.relatedTarget = ol),
                (p = B)),
              (ol = p),
              g && C)
            )
              t: {
                for (B = g, d = C, r = 0, h = B; h; h = ya(h)) r++;
                for (h = 0, p = d; p; p = ya(p)) h++;
                for (; 0 < r - h; ) (B = ya(B)), r--;
                for (; 0 < h - r; ) (d = ya(d)), h--;
                for (; r--; ) {
                  if (B === d || (d !== null && B === d.alternate)) break t;
                  (B = ya(B)), (d = ya(d));
                }
                B = null;
              }
            else B = null;
            g !== null && zo(E, y, g, B, !1),
              C !== null && ol !== null && zo(E, ol, C, B, !0);
          }
        }
        l: {
          if (
            ((y = v ? za(v) : window),
            (g = y.nodeName && y.nodeName.toLowerCase()),
            g === "select" || (g === "input" && y.type === "file"))
          )
            var j = Qf;
          else if (Gf(y))
            if (Zf) j = v0;
            else {
              j = h0;
              var J = d0;
            }
          else
            (g = y.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (y.type !== "checkbox" && y.type !== "radio")
                ? v && Wn(v.elementType) && (j = Qf)
                : (j = m0);
          if (j && (j = j(l, v))) {
            Xf(E, j, e, x);
            break l;
          }
          J && J(l, y, v),
            l === "focusout" &&
              v &&
              y.type === "number" &&
              v.memoizedProps.value != null &&
              kn(y, "number", y.value);
        }
        switch (((J = v ? za(v) : window), l)) {
          case "focusin":
            (Gf(J) || J.contentEditable === "true") &&
              ((Ke = J), (sc = v), (Ra = null));
            break;
          case "focusout":
            Ra = sc = Ke = null;
            break;
          case "mousedown":
            rc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (rc = !1), Ff(E, e, x);
            break;
          case "selectionchange":
            if (g0) break;
          case "keydown":
          case "keyup":
            Ff(E, e, x);
        }
        var _;
        if (nc)
          l: {
            switch (l) {
              case "compositionstart":
                var w = "onCompositionStart";
                break l;
              case "compositionend":
                w = "onCompositionEnd";
                break l;
              case "compositionupdate":
                w = "onCompositionUpdate";
                break l;
            }
            w = void 0;
          }
        else
          Ve
            ? Yf(l, e) && (w = "onCompositionEnd")
            : l === "keydown" &&
              e.keyCode === 229 &&
              (w = "onCompositionStart");
        w &&
          (Bf &&
            e.locale !== "ko" &&
            (Ve || w !== "onCompositionStart"
              ? w === "onCompositionEnd" && Ve && (_ = Df())
              : ((kt = x),
                (lc = "value" in kt ? kt.value : kt.textContent),
                (Ve = !0))),
          (J = Sn(v, w)),
          0 < J.length &&
            ((w = new Rf(w, l, null, e, x)),
            E.push({ event: w, listeners: J }),
            _ ? (w.data = _) : ((_ = Cf(e)), _ !== null && (w.data = _)))),
          (_ = i0 ? f0(l, e) : s0(l, e)) &&
            ((w = Sn(v, "onBeforeInput")),
            0 < w.length &&
              ((J = new Rf("onBeforeInput", "beforeinput", null, e, x)),
              E.push({ event: J, listeners: w }),
              (J.data = _))),
          P0(E, l, v, e, x);
      }
      To(E, t);
    });
  }
  function iu(l, t, e) {
    return { instance: l, listener: t, currentTarget: e };
  }
  function Sn(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Aa(l, e)),
          u != null && a.unshift(iu(l, u, n)),
          (u = Aa(l, t)),
          u != null && a.push(iu(l, u, n))),
        l.tag === 3)
      )
        return a;
      l = l.return;
    }
    return [];
  }
  function ya(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function zo(l, t, e, a, u) {
    for (var n = t._reactName, c = []; e !== null && e !== a; ) {
      var i = e,
        f = i.alternate,
        v = i.stateNode;
      if (((i = i.tag), f !== null && f === a)) break;
      (i !== 5 && i !== 26 && i !== 27) ||
        v === null ||
        ((f = v),
        u
          ? ((v = Aa(e, n)), v != null && c.unshift(iu(e, v, f)))
          : u || ((v = Aa(e, n)), v != null && c.push(iu(e, v, f)))),
        (e = e.return);
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var ah = /\r\n?/g,
    uh = /\u0000|\uFFFD/g;
  function Ao(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        ah,
        `
`
      )
      .replace(uh, "");
  }
  function Mo(l, t) {
    return (t = Ao(t)), Ao(l) === t;
  }
  function pn() {}
  function rl(l, t, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || Qe(l, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            Qe(l, "" + a);
        break;
      case "className":
        Au(l, "class", a);
        break;
      case "tabIndex":
        Au(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Au(l, e, a);
        break;
      case "style":
        Nf(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Au(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          l.removeAttribute(e);
          break;
        }
        (a = Ou("" + a)), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (e === "formAction"
              ? (t !== "input" && rl(l, t, "name", u.name, u, null),
                rl(l, t, "formEncType", u.formEncType, u, null),
                rl(l, t, "formMethod", u.formMethod, u, null),
                rl(l, t, "formTarget", u.formTarget, u, null))
              : (rl(l, t, "encType", u.encType, u, null),
                rl(l, t, "method", u.method, u, null),
                rl(l, t, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        (a = Ou("" + a)), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = pn);
        break;
      case "onScroll":
        a != null && F("scroll", l);
        break;
      case "onScrollEnd":
        a != null && F("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(m(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(m(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
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
          l.removeAttribute("xlink:href");
          break;
        }
        (e = Ou("" + a)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
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
          ? l.setAttribute(e, "" + a)
          : l.removeAttribute(e);
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
          ? l.setAttribute(e, "")
          : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0
          ? l.setAttribute(e, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
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
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? l.removeAttribute(e)
          : l.setAttribute(e, a);
        break;
      case "popover":
        F("beforetoggle", l), F("toggle", l), zu(l, "popover", a);
        break;
      case "xlinkActuate":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Dt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Dt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Dt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        zu(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = Hd.get(e) || e), zu(l, e, a));
    }
  }
  function Ri(l, t, e, a, u, n) {
    switch (e) {
      case "style":
        Nf(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(m(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(m(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Qe(l, a)
          : (typeof a == "number" || typeof a == "bigint") && Qe(l, "" + a);
        break;
      case "onScroll":
        a != null && F("scroll", l);
        break;
      case "onScrollEnd":
        a != null && F("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = pn);
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
        if (!yf.hasOwnProperty(e))
          l: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((u = e.endsWith("Capture")),
              (t = e.slice(2, u ? e.length - 7 : void 0)),
              (n = l[$l] || null),
              (n = n != null ? n[e] : null),
              typeof n == "function" && l.removeEventListener(t, n, u),
              typeof a == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (e in l
                  ? (l[e] = null)
                  : l.hasAttribute(e) && l.removeAttribute(e)),
                l.addEventListener(t, a, u);
              break l;
            }
            e in l
              ? (l[e] = a)
              : a === !0
              ? l.setAttribute(e, "")
              : zu(l, e, a);
          }
    }
  }
  function Ql(l, t, e) {
    switch (t) {
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
        F("error", l), F("load", l);
        var a = !1,
          u = !1,
          n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var c = e[n];
            if (c != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(m(137, t));
                default:
                  rl(l, t, n, c, e, null);
              }
          }
        u && rl(l, t, "srcSet", e.srcSet, e, null),
          a && rl(l, t, "src", e.src, e, null);
        return;
      case "input":
        F("invalid", l);
        var i = (n = c = u = null),
          f = null,
          v = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var x = e[a];
            if (x != null)
              switch (a) {
                case "name":
                  u = x;
                  break;
                case "type":
                  c = x;
                  break;
                case "checked":
                  f = x;
                  break;
                case "defaultChecked":
                  v = x;
                  break;
                case "value":
                  n = x;
                  break;
                case "defaultValue":
                  i = x;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (x != null) throw Error(m(137, t));
                  break;
                default:
                  rl(l, t, a, x, e, null);
              }
          }
        Ef(l, n, i, f, v, c, u, !1), Mu(l);
        return;
      case "select":
        F("invalid", l), (a = c = n = null);
        for (u in e)
          if (e.hasOwnProperty(u) && ((i = e[u]), i != null))
            switch (u) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                c = i;
                break;
              case "multiple":
                a = i;
              default:
                rl(l, t, u, i, e, null);
            }
        (t = n),
          (e = c),
          (l.multiple = !!a),
          t != null ? Xe(l, !!a, t, !1) : e != null && Xe(l, !!a, e, !0);
        return;
      case "textarea":
        F("invalid", l), (n = u = a = null);
        for (c in e)
          if (e.hasOwnProperty(c) && ((i = e[c]), i != null))
            switch (c) {
              case "value":
                a = i;
                break;
              case "defaultValue":
                u = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(m(91));
                break;
              default:
                rl(l, t, c, i, e, null);
            }
        Af(l, a, u, n), Mu(l);
        return;
      case "option":
        for (f in e)
          if (e.hasOwnProperty(f) && ((a = e[f]), a != null))
            switch (f) {
              case "selected":
                l.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                rl(l, t, f, a, e, null);
            }
        return;
      case "dialog":
        F("beforetoggle", l), F("toggle", l), F("cancel", l), F("close", l);
        break;
      case "iframe":
      case "object":
        F("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < cu.length; a++) F(cu[a], l);
        break;
      case "image":
        F("error", l), F("load", l);
        break;
      case "details":
        F("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        F("error", l), F("load", l);
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
        for (v in e)
          if (e.hasOwnProperty(v) && ((a = e[v]), a != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, t));
              default:
                rl(l, t, v, a, e, null);
            }
        return;
      default:
        if (Wn(t)) {
          for (x in e)
            e.hasOwnProperty(x) &&
              ((a = e[x]), a !== void 0 && Ri(l, t, x, a, e, void 0));
          return;
        }
    }
    for (i in e)
      e.hasOwnProperty(i) && ((a = e[i]), a != null && rl(l, t, i, a, e, null));
  }
  function nh(l, t, e, a) {
    switch (t) {
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
        var u = null,
          n = null,
          c = null,
          i = null,
          f = null,
          v = null,
          x = null;
        for (g in e) {
          var E = e[g];
          if (e.hasOwnProperty(g) && E != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = E;
              default:
                a.hasOwnProperty(g) || rl(l, t, g, null, a, E);
            }
        }
        for (var y in a) {
          var g = a[y];
          if (((E = e[y]), a.hasOwnProperty(y) && (g != null || E != null)))
            switch (y) {
              case "type":
                n = g;
                break;
              case "name":
                u = g;
                break;
              case "checked":
                v = g;
                break;
              case "defaultChecked":
                x = g;
                break;
              case "value":
                c = g;
                break;
              case "defaultValue":
                i = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(m(137, t));
                break;
              default:
                g !== E && rl(l, t, y, g, a, E);
            }
        }
        Jn(l, c, i, f, v, x, n, u);
        return;
      case "select":
        g = c = i = y = null;
        for (n in e)
          if (((f = e[n]), e.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = f;
              default:
                a.hasOwnProperty(n) || rl(l, t, n, null, a, f);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (f = e[u]),
            a.hasOwnProperty(u) && (n != null || f != null))
          )
            switch (u) {
              case "value":
                y = n;
                break;
              case "defaultValue":
                i = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== f && rl(l, t, u, n, a, f);
            }
        (t = i),
          (e = c),
          (a = g),
          y != null
            ? Xe(l, !!e, y, !1)
            : !!a != !!e &&
              (t != null ? Xe(l, !!e, t, !0) : Xe(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        g = y = null;
        for (i in e)
          if (
            ((u = e[i]),
            e.hasOwnProperty(i) && u != null && !a.hasOwnProperty(i))
          )
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                rl(l, t, i, null, a, u);
            }
        for (c in a)
          if (
            ((u = a[c]),
            (n = e[c]),
            a.hasOwnProperty(c) && (u != null || n != null))
          )
            switch (c) {
              case "value":
                y = u;
                break;
              case "defaultValue":
                g = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(m(91));
                break;
              default:
                u !== n && rl(l, t, c, u, a, n);
            }
        zf(l, y, g);
        return;
      case "option":
        for (var C in e)
          if (
            ((y = e[C]),
            e.hasOwnProperty(C) && y != null && !a.hasOwnProperty(C))
          )
            switch (C) {
              case "selected":
                l.selected = !1;
                break;
              default:
                rl(l, t, C, null, a, y);
            }
        for (f in a)
          if (
            ((y = a[f]),
            (g = e[f]),
            a.hasOwnProperty(f) && y !== g && (y != null || g != null))
          )
            switch (f) {
              case "selected":
                l.selected =
                  y && typeof y != "function" && typeof y != "symbol";
                break;
              default:
                rl(l, t, f, y, a, g);
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
        for (var B in e)
          (y = e[B]),
            e.hasOwnProperty(B) &&
              y != null &&
              !a.hasOwnProperty(B) &&
              rl(l, t, B, null, a, y);
        for (v in a)
          if (
            ((y = a[v]),
            (g = e[v]),
            a.hasOwnProperty(v) && y !== g && (y != null || g != null))
          )
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(m(137, t));
                break;
              default:
                rl(l, t, v, y, a, g);
            }
        return;
      default:
        if (Wn(t)) {
          for (var ol in e)
            (y = e[ol]),
              e.hasOwnProperty(ol) &&
                y !== void 0 &&
                !a.hasOwnProperty(ol) &&
                Ri(l, t, ol, void 0, a, y);
          for (x in a)
            (y = a[x]),
              (g = e[x]),
              !a.hasOwnProperty(x) ||
                y === g ||
                (y === void 0 && g === void 0) ||
                Ri(l, t, x, y, a, g);
          return;
        }
    }
    for (var d in e)
      (y = e[d]),
        e.hasOwnProperty(d) &&
          y != null &&
          !a.hasOwnProperty(d) &&
          rl(l, t, d, null, a, y);
    for (E in a)
      (y = a[E]),
        (g = e[E]),
        !a.hasOwnProperty(E) ||
          y === g ||
          (y == null && g == null) ||
          rl(l, t, E, y, a, g);
  }
  var Hi = null,
    Bi = null;
  function Tn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function No(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Oo(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function qi(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var wi = null;
  function ch() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === wi
        ? !1
        : ((wi = l), !0)
      : ((wi = null), !1);
  }
  var jo = typeof setTimeout == "function" ? setTimeout : void 0,
    ih = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Do = typeof Promise == "function" ? Promise : void 0,
    fh =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Do < "u"
        ? function (l) {
            return Do.resolve(null).then(l).catch(sh);
          }
        : jo;
  function sh(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function re(l) {
    return l === "head";
  }
  function _o(l, t) {
    var e = t,
      a = 0,
      u = 0;
    do {
      var n = e.nextSibling;
      if ((l.removeChild(e), n && n.nodeType === 8))
        if (((e = n.data), e === "/$")) {
          if (0 < a && 8 > a) {
            e = a;
            var c = l.ownerDocument;
            if ((e & 1 && fu(c.documentElement), e & 2 && fu(c.body), e & 4))
              for (e = c.head, fu(e), c = e.firstChild; c; ) {
                var i = c.nextSibling,
                  f = c.nodeName;
                c[Ea] ||
                  f === "SCRIPT" ||
                  f === "STYLE" ||
                  (f === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  e.removeChild(c),
                  (c = i);
              }
          }
          if (u === 0) {
            l.removeChild(n), yu(t);
            return;
          }
          u--;
        } else
          e === "$" || e === "$?" || e === "$!"
            ? u++
            : (a = e.charCodeAt(0) - 48);
      else a = 0;
      e = n;
    } while (e);
    yu(t);
  }
  function Yi(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (((t = t.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Yi(e), Zn(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function rh(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var u = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[Ea])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                l.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                l.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                l.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  l.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = Et(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function oh(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !e) ||
        ((l = Et(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Ci(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState === "complete")
    );
  }
  function dh(l, t) {
    var e = l.ownerDocument;
    if (l.data !== "$?" || e.readyState === "complete") t();
    else {
      var a = function () {
        t(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), (l._reactRetry = a);
    }
  }
  function Et(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var Gi = null;
  function Uo(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?") {
          if (t === 0) return l;
          t--;
        } else e === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Ro(l, t, e) {
    switch (((t = Tn(e)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(m(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(m(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(m(454));
        return l;
      default:
        throw Error(m(451));
    }
  }
  function fu(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    Zn(l);
  }
  var St = new Map(),
    Ho = new Set();
  function En(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var Lt = N.d;
  N.d = { f: hh, r: mh, D: vh, C: yh, L: gh, m: bh, X: Sh, S: xh, M: ph };
  function hh() {
    var l = Lt.f(),
      t = mn();
    return l || t;
  }
  function mh(l) {
    var t = we(l);
    t !== null && t.tag === 5 && t.type === "form" ? Ps(t) : Lt.r(l);
  }
  var ga = typeof document > "u" ? null : document;
  function Bo(l, t, e) {
    var a = ga;
    if (a && typeof t == "string" && t) {
      var u = ht(t);
      (u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
        Ho.has(u) ||
          (Ho.add(u),
          (l = { rel: l, crossOrigin: e, href: t }),
          a.querySelector(u) === null &&
            ((t = a.createElement("link")),
            Ql(t, "link", l),
            Bl(t),
            a.head.appendChild(t)));
    }
  }
  function vh(l) {
    Lt.D(l), Bo("dns-prefetch", l, null);
  }
  function yh(l, t) {
    Lt.C(l, t), Bo("preconnect", l, t);
  }
  function gh(l, t, e) {
    Lt.L(l, t, e);
    var a = ga;
    if (a && l && t) {
      var u = 'link[rel="preload"][as="' + ht(t) + '"]';
      t === "image" && e && e.imageSrcSet
        ? ((u += '[imagesrcset="' + ht(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (u += '[imagesizes="' + ht(e.imageSizes) + '"]'))
        : (u += '[href="' + ht(l) + '"]');
      var n = u;
      switch (t) {
        case "style":
          n = ba(l);
          break;
        case "script":
          n = xa(l);
      }
      St.has(n) ||
        ((l = A(
          {
            rel: "preload",
            href: t === "image" && e && e.imageSrcSet ? void 0 : l,
            as: t,
          },
          e
        )),
        St.set(n, l),
        a.querySelector(u) !== null ||
          (t === "style" && a.querySelector(su(n))) ||
          (t === "script" && a.querySelector(ru(n))) ||
          ((t = a.createElement("link")),
          Ql(t, "link", l),
          Bl(t),
          a.head.appendChild(t)));
    }
  }
  function bh(l, t) {
    Lt.m(l, t);
    var e = ga;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + ht(a) + '"][href="' + ht(l) + '"]',
        n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = xa(l);
      }
      if (
        !St.has(n) &&
        ((l = A({ rel: "modulepreload", href: l }, t)),
        St.set(n, l),
        e.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(ru(n))) return;
        }
        (a = e.createElement("link")),
          Ql(a, "link", l),
          Bl(a),
          e.head.appendChild(a);
      }
    }
  }
  function xh(l, t, e) {
    Lt.S(l, t, e);
    var a = ga;
    if (a && l) {
      var u = Ye(a).hoistableStyles,
        n = ba(l);
      t = t || "default";
      var c = u.get(n);
      if (!c) {
        var i = { loading: 0, preload: null };
        if ((c = a.querySelector(su(n)))) i.loading = 5;
        else {
          (l = A({ rel: "stylesheet", href: l, "data-precedence": t }, e)),
            (e = St.get(n)) && Xi(l, e);
          var f = (c = a.createElement("link"));
          Bl(f),
            Ql(f, "link", l),
            (f._p = new Promise(function (v, x) {
              (f.onload = v), (f.onerror = x);
            })),
            f.addEventListener("load", function () {
              i.loading |= 1;
            }),
            f.addEventListener("error", function () {
              i.loading |= 2;
            }),
            (i.loading |= 4),
            zn(c, t, a);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: i }),
          u.set(n, c);
      }
    }
  }
  function Sh(l, t) {
    Lt.X(l, t);
    var e = ga;
    if (e && l) {
      var a = Ye(e).hoistableScripts,
        u = xa(l),
        n = a.get(u);
      n ||
        ((n = e.querySelector(ru(u))),
        n ||
          ((l = A({ src: l, async: !0 }, t)),
          (t = St.get(u)) && Qi(l, t),
          (n = e.createElement("script")),
          Bl(n),
          Ql(n, "link", l),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function ph(l, t) {
    Lt.M(l, t);
    var e = ga;
    if (e && l) {
      var a = Ye(e).hoistableScripts,
        u = xa(l),
        n = a.get(u);
      n ||
        ((n = e.querySelector(ru(u))),
        n ||
          ((l = A({ src: l, async: !0, type: "module" }, t)),
          (t = St.get(u)) && Qi(l, t),
          (n = e.createElement("script")),
          Bl(n),
          Ql(n, "link", l),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function qo(l, t, e, a) {
    var u = (u = X.current) ? En(u) : null;
    if (!u) throw Error(m(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((t = ba(e.href)),
            (e = Ye(u).hoistableStyles),
            (a = e.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              e.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          l = ba(e.href);
          var n = Ye(u).hoistableStyles,
            c = n.get(l);
          if (
            (c ||
              ((u = u.ownerDocument || u),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, c),
              (n = u.querySelector(su(l))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              St.has(l) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                St.set(l, e),
                n || Th(u, l, e, c.state))),
            t && a === null)
          )
            throw Error(m(528, ""));
          return c;
        }
        if (t && a !== null) throw Error(m(529, ""));
        return null;
      case "script":
        return (
          (t = e.async),
          (e = e.src),
          typeof e == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = xa(e)),
              (e = Ye(u).hoistableScripts),
              (a = e.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(m(444, l));
    }
  }
  function ba(l) {
    return 'href="' + ht(l) + '"';
  }
  function su(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function wo(l) {
    return A({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Th(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = l.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Ql(t, "link", e),
        Bl(t),
        l.head.appendChild(t));
  }
  function xa(l) {
    return '[src="' + ht(l) + '"]';
  }
  function ru(l) {
    return "script[async]" + l;
  }
  function Yo(l, t, e) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + ht(e.href) + '"]');
          if (a) return (t.instance = a), Bl(a), a;
          var u = A({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (l.ownerDocument || l).createElement("style")),
            Bl(a),
            Ql(a, "style", u),
            zn(a, e.precedence, l),
            (t.instance = a)
          );
        case "stylesheet":
          u = ba(e.href);
          var n = l.querySelector(su(u));
          if (n) return (t.state.loading |= 4), (t.instance = n), Bl(n), n;
          (a = wo(e)),
            (u = St.get(u)) && Xi(a, u),
            (n = (l.ownerDocument || l).createElement("link")),
            Bl(n);
          var c = n;
          return (
            (c._p = new Promise(function (i, f) {
              (c.onload = i), (c.onerror = f);
            })),
            Ql(n, "link", a),
            (t.state.loading |= 4),
            zn(n, e.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = xa(e.src)),
            (u = l.querySelector(ru(n)))
              ? ((t.instance = u), Bl(u), u)
              : ((a = e),
                (u = St.get(n)) && ((a = A({}, e)), Qi(a, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                Bl(u),
                Ql(u, "link", a),
                l.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(m(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), zn(a, e.precedence, l));
    return t.instance;
  }
  function zn(l, t, e) {
    for (
      var a = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        c = 0;
      c < a.length;
      c++
    ) {
      var i = a[c];
      if (i.dataset.precedence === t) n = i;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = e.nodeType === 9 ? e.head : e), t.insertBefore(l, t.firstChild));
  }
  function Xi(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function Qi(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var An = null;
  function Co(l, t, e) {
    if (An === null) {
      var a = new Map(),
        u = (An = new Map());
      u.set(e, a);
    } else (u = An), (a = u.get(e)), a || ((a = new Map()), u.set(e, a));
    if (a.has(l)) return a;
    for (
      a.set(l, null), e = e.getElementsByTagName(l), u = 0;
      u < e.length;
      u++
    ) {
      var n = e[u];
      if (
        !(
          n[Ea] ||
          n[Ll] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var i = a.get(c);
        i ? i.push(n) : a.set(c, [n]);
      }
    }
    return a;
  }
  function Go(l, t, e) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        e,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function Eh(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled), typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Xo(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var ou = null;
  function zh() {}
  function Ah(l, t, e) {
    if (ou === null) throw Error(m(475));
    var a = ou;
    if (
      t.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var u = ba(e.href),
          n = l.querySelector(su(u));
        if (n) {
          (l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (a.count++, (a = Mn.bind(a)), l.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = n),
            Bl(n);
          return;
        }
        (n = l.ownerDocument || l),
          (e = wo(e)),
          (u = St.get(u)) && Xi(e, u),
          (n = n.createElement("link")),
          Bl(n);
        var c = n;
        (c._p = new Promise(function (i, f) {
          (c.onload = i), (c.onerror = f);
        })),
          Ql(n, "link", e),
          (t.instance = n);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, l),
        (l = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = Mn.bind(a)),
          l.addEventListener("load", t),
          l.addEventListener("error", t));
    }
  }
  function Mh() {
    if (ou === null) throw Error(m(475));
    var l = ou;
    return (
      l.stylesheets && l.count === 0 && Zi(l, l.stylesheets),
      0 < l.count
        ? function (t) {
            var e = setTimeout(function () {
              if ((l.stylesheets && Zi(l, l.stylesheets), l.unsuspend)) {
                var a = l.unsuspend;
                (l.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (l.unsuspend = t),
              function () {
                (l.unsuspend = null), clearTimeout(e);
              }
            );
          }
        : null
    );
  }
  function Mn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Zi(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var Nn = null;
  function Zi(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Nn = new Map()),
        t.forEach(Nh, l),
        (Nn = null),
        Mn.call(l));
  }
  function Nh(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Nn.get(l);
      if (e) var a = e.get(null);
      else {
        (e = new Map()), Nn.set(l, e);
        for (
          var u = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var c = u[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (e.set(c.dataset.precedence, c), (a = c));
        }
        a && e.set(null, a);
      }
      (u = t.instance),
        (c = u.getAttribute("data-precedence")),
        (n = e.get(c) || a),
        n === a && e.set(null, u),
        e.set(c, u),
        this.count++,
        (a = Mn.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(u, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var du = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: Y,
    _currentValue2: Y,
    _threadCount: 0,
  };
  function Oh(l, t, e, a, u, n, c, i) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Cn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Cn(0)),
      (this.hiddenUpdates = Cn(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = i),
      (this.incompleteTransitions = new Map());
  }
  function Qo(l, t, e, a, u, n, c, i, f, v, x, E) {
    return (
      (l = new Oh(l, t, e, c, i, f, v, E)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = ct(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = zc()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: a, isDehydrated: e, cache: t }),
      Oc(n),
      l
    );
  }
  function Zo(l) {
    return l ? ((l = $e), l) : $e;
  }
  function Lo(l, t, e, a, u, n) {
    (u = Zo(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = Ft(t)),
      (a.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (e = It(l, a, t)),
      e !== null && (ot(e, l, t), Qa(e, l, t));
  }
  function Vo(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function Li(l, t) {
    Vo(l, t), (l = l.alternate) && Vo(l, t);
  }
  function Ko(l) {
    if (l.tag === 13) {
      var t = We(l, 67108864);
      t !== null && ot(t, l, 67108864), Li(l, 67108864);
    }
  }
  var On = !0;
  function jh(l, t, e, a) {
    var u = S.T;
    S.T = null;
    var n = N.p;
    try {
      (N.p = 2), Vi(l, t, e, a);
    } finally {
      (N.p = n), (S.T = u);
    }
  }
  function Dh(l, t, e, a) {
    var u = S.T;
    S.T = null;
    var n = N.p;
    try {
      (N.p = 8), Vi(l, t, e, a);
    } finally {
      (N.p = n), (S.T = u);
    }
  }
  function Vi(l, t, e, a) {
    if (On) {
      var u = Ki(a);
      if (u === null) Ui(l, t, a, jn, e), ko(l, a);
      else if (Uh(u, l, t, e, a)) a.stopPropagation();
      else if ((ko(l, a), t & 4 && -1 < _h.indexOf(l))) {
        for (; u !== null; ) {
          var n = we(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = ge(n.pendingLanes);
                  if (c !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var f = 1 << (31 - ut(c));
                      (i.entanglements[1] |= f), (c &= ~f);
                    }
                    jt(n), (il & 6) === 0 && ((dn = zt() + 500), nu(0));
                  }
                }
                break;
              case 13:
                (i = We(n, 2)), i !== null && ot(i, n, 2), mn(), Li(n, 2);
            }
          if (((n = Ki(a)), n === null && Ui(l, t, a, jn, e), n === u)) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else Ui(l, t, a, null, e);
    }
  }
  function Ki(l) {
    return (l = Fn(l)), Ji(l);
  }
  var jn = null;
  function Ji(l) {
    if (((jn = null), (l = qe(l)), l !== null)) {
      var t = G(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (((l = k(t)), l !== null)) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (jn = l), null;
  }
  function Jo(l) {
    switch (l) {
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
        switch (yd()) {
          case nf:
            return 2;
          case cf:
            return 8;
          case Su:
          case gd:
            return 32;
          case ff:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ki = !1,
    oe = null,
    de = null,
    he = null,
    hu = new Map(),
    mu = new Map(),
    me = [],
    _h =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function ko(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        oe = null;
        break;
      case "dragenter":
      case "dragleave":
        de = null;
        break;
      case "mouseover":
      case "mouseout":
        he = null;
        break;
      case "pointerover":
      case "pointerout":
        hu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        mu.delete(t.pointerId);
    }
  }
  function vu(l, t, e, a, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: e,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [u],
        }),
        t !== null && ((t = we(t)), t !== null && Ko(t)),
        l)
      : ((l.eventSystemFlags |= a),
        (t = l.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l);
  }
  function Uh(l, t, e, a, u) {
    switch (t) {
      case "focusin":
        return (oe = vu(oe, l, t, e, a, u)), !0;
      case "dragenter":
        return (de = vu(de, l, t, e, a, u)), !0;
      case "mouseover":
        return (he = vu(he, l, t, e, a, u)), !0;
      case "pointerover":
        var n = u.pointerId;
        return hu.set(n, vu(hu.get(n) || null, l, t, e, a, u)), !0;
      case "gotpointercapture":
        return (
          (n = u.pointerId), mu.set(n, vu(mu.get(n) || null, l, t, e, a, u)), !0
        );
    }
    return !1;
  }
  function Wo(l) {
    var t = qe(l.target);
    if (t !== null) {
      var e = G(t);
      if (e !== null) {
        if (((t = e.tag), t === 13)) {
          if (((t = k(e)), t !== null)) {
            (l.blockedOn = t),
              Ad(l.priority, function () {
                if (e.tag === 13) {
                  var a = rt();
                  a = Gn(a);
                  var u = We(e, a);
                  u !== null && ot(u, e, a), Li(e, a);
                }
              });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Dn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = Ki(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(e.type, e);
        ($n = a), e.target.dispatchEvent(a), ($n = null);
      } else return (t = we(e)), t !== null && Ko(t), (l.blockedOn = e), !1;
      t.shift();
    }
    return !0;
  }
  function $o(l, t, e) {
    Dn(l) && e.delete(t);
  }
  function Rh() {
    (ki = !1),
      oe !== null && Dn(oe) && (oe = null),
      de !== null && Dn(de) && (de = null),
      he !== null && Dn(he) && (he = null),
      hu.forEach($o),
      mu.forEach($o);
  }
  function _n(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      ki ||
        ((ki = !0),
        b.unstable_scheduleCallback(b.unstable_NormalPriority, Rh)));
  }
  var Un = null;
  function Fo(l) {
    Un !== l &&
      ((Un = l),
      b.unstable_scheduleCallback(b.unstable_NormalPriority, function () {
        Un === l && (Un = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t],
            a = l[t + 1],
            u = l[t + 2];
          if (typeof a != "function") {
            if (Ji(a || e) === null) continue;
            break;
          }
          var n = we(e);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            Jc(n, { pending: !0, data: u, method: e.method, action: a }, a, u));
        }
      }));
  }
  function yu(l) {
    function t(f) {
      return _n(f, l);
    }
    oe !== null && _n(oe, l),
      de !== null && _n(de, l),
      he !== null && _n(he, l),
      hu.forEach(t),
      mu.forEach(t);
    for (var e = 0; e < me.length; e++) {
      var a = me[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < me.length && ((e = me[0]), e.blockedOn === null); )
      Wo(e), e.blockedOn === null && me.shift();
    if (((e = (l.ownerDocument || l).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var u = e[a],
          n = e[a + 1],
          c = u[$l] || null;
        if (typeof n == "function") c || Fo(e);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (c = n[$l] || null))) i = c.formAction;
            else if (Ji(u) !== null) continue;
          } else i = c.action;
          typeof i == "function" ? (e[a + 1] = i) : (e.splice(a, 3), (a -= 3)),
            Fo(e);
        }
      }
  }
  function Wi(l) {
    this._internalRoot = l;
  }
  (Rn.prototype.render = Wi.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      var e = t.current,
        a = rt();
      Lo(e, a, l, t, null, null);
    }),
    (Rn.prototype.unmount = Wi.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          Lo(l.current, 2, null, l, null, null), mn(), (t[Be] = null);
        }
      });
  function Rn(l) {
    this._internalRoot = l;
  }
  Rn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = hf();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < me.length && t !== 0 && t < me[e].priority; e++);
      me.splice(e, 0, l), e === 0 && Wo(l);
    }
  };
  var Io = U.version;
  if (Io !== "19.1.0") throw Error(m(527, Io, "19.1.0"));
  N.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(m(188))
        : ((l = Object.keys(l).join(",")), Error(m(268, l)));
    return (
      (l = D(t)),
      (l = l !== null ? T(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Hh = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Hn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hn.isDisabled && Hn.supportsFiber)
      try {
        (Sa = Hn.inject(Hh)), (at = Hn);
      } catch {}
  }
  return (
    (bu.createRoot = function (l, t) {
      if (!R(l)) throw Error(m(299));
      var e = !1,
        a = "",
        u = hr,
        n = mr,
        c = vr,
        i = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (e = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (i = t.unstable_transitionCallbacks)),
        (t = Qo(l, 1, !1, null, null, e, a, u, n, c, i, null)),
        (l[Be] = t.current),
        _i(l),
        new Wi(t)
      );
    }),
    (bu.hydrateRoot = function (l, t, e) {
      if (!R(l)) throw Error(m(299));
      var a = !1,
        u = "",
        n = hr,
        c = mr,
        i = vr,
        f = null,
        v = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (c = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (f = e.unstable_transitionCallbacks),
          e.formState !== void 0 && (v = e.formState)),
        (t = Qo(l, 1, !0, t, e ?? null, a, u, n, c, i, f, v)),
        (t.context = Zo(null)),
        (e = t.current),
        (a = rt()),
        (a = Gn(a)),
        (u = Ft(a)),
        (u.callback = null),
        It(e, u, a),
        (e = a),
        (t.current.lanes = e),
        Ta(t, e),
        jt(t),
        (l[Be] = t.current),
        _i(l),
        new Rn(t)
      );
    }),
    (bu.version = "19.1.0"),
    bu
  );
}
var fd;
function Kh() {
  if (fd) return Ii.exports;
  fd = 1;
  function b() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
      } catch (U) {
        console.error(U);
      }
  }
  return b(), (Ii.exports = Vh()), Ii.exports;
}
var Jh = Kh();
const kh = ({ className: b }) =>
    o.jsx("svg", {
      className: b,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: o.jsx("path", {
        d: "M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z",
        fill: "currentColor",
      }),
    }),
  Wh = ({ className: b }) =>
    o.jsx("svg", {
      className: b,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: o.jsx("path", {
        d: "M12 5v14m-7-7h14",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  rd = ({ className: b }) =>
    o.jsxs("svg", {
      className: b,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        o.jsx("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2",
          fill: "currentColor",
        }),
        o.jsx("path", {
          d: "M8 8l3 4-3 4m6-8v8",
          stroke: "white",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  $h = ({ className: b }) =>
    o.jsxs("svg", {
      className: b,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        o.jsx("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2",
          fill: "currentColor",
        }),
        o.jsx("path", {
          d: "M7 8h10m-10 4h10m-10 4h7",
          stroke: "white",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  od = ({ className: b }) =>
    o.jsxs("svg", {
      className: b,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        o.jsx("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2",
          fill: "currentColor",
        }),
        o.jsx("path", { d: "M8 8h8l-4 4-4 4V8z", fill: "white" }),
      ],
    }),
  Fh = ({ className: b }) =>
    o.jsxs("svg", {
      className: b,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        o.jsx("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2",
          fill: "currentColor",
        }),
        o.jsx("path", {
          d: "M7 8h3c1.1 0 2 .9 2 2s-.9 2-2 2H7v3m5-7v7m3-7h3",
          stroke: "white",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  Ih = ({ className: b }) =>
    o.jsxs("svg", {
      className: b,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        o.jsx("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2",
          fill: "currentColor",
        }),
        o.jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5", fill: "white" }),
        o.jsx("path", {
          d: "M21 15l-5-5L5 21",
          stroke: "white",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  Ph = ({ className: b }) =>
    o.jsxs("svg", {
      className: b,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        o.jsx("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2",
          fill: "currentColor",
        }),
        o.jsx("path", {
          d: "M8 7h8M8 11h8M8 15h5",
          stroke: "white",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  lm = ({ className: b }) =>
    o.jsxs("svg", {
      className: b,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        o.jsx("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2",
          fill: "currentColor",
        }),
        o.jsx("polygon", { points: "10,8 16,12 10,16", fill: "white" }),
      ],
    }),
  tm = ({ className: b }) =>
    o.jsxs("svg", {
      className: b,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        o.jsx("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2",
          fill: "currentColor",
        }),
        o.jsx("path", {
          d: "M10 7v2m0 2v2m0 2v2M14 7v10",
          stroke: "white",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  em = ({ className: b }) =>
    o.jsxs("svg", {
      className: b,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        o.jsx("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2",
          fill: "currentColor",
        }),
        o.jsx("path", {
          d: "M9 9h6m-6 4h6m-6 4h4",
          stroke: "white",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  dd = ({ className: b }) =>
    o.jsx("svg", {
      className: b,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: o.jsx("path", {
        d: "M20 6L9 17l-5-5",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  am = ({ className: b }) =>
    o.jsx("svg", {
      className: b,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: o.jsx("path", {
        d: "M18 6L6 18M6 6l12 12",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  ef = ({ className: b }) =>
    o.jsx("svg", {
      className: b,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: o.jsx("path", {
        d: "M18 6L6 18M6 6l12 12",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  hd = ({ className: b }) =>
    o.jsx("div", {
      className: `border-2 border-gray-200 border-t-primary-blue rounded-full animate-spin ${b}`,
    }),
  um = ({ className: b }) =>
    o.jsx("svg", {
      className: b,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: o.jsx("path", {
        d: "M8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98M21 5a3 3 0 11-6 0 3 3 0 016 0zM9 12a3 3 0 11-6 0 3 3 0 016 0zM21 19a3 3 0 11-6 0 3 3 0 016 0z",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  nm = ({ onFilesSelected: b, disabled: U = !1 }) => {
    const [q, m] = Zl.useState(!1),
      R = Zl.useRef(null),
      G = (A) => {
        A.preventDefault(), m(!0);
      },
      k = (A) => {
        A.preventDefault(), m(!1);
      },
      dl = (A) => {
        if ((A.preventDefault(), m(!1), U)) return;
        const Q = A.dataTransfer.files;
        Q.length > 0 && b(Q);
      },
      D = () => {
        U || R.current?.click();
      },
      T = (A) => {
        if (U) return;
        const Q = A.target.files;
        Q && Q.length > 0 && b(Q);
      };
    return o.jsxs("div", {
      className: `
        relative rounded-xl p-12 text-center min-h-[200px] 
        flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${
          U
            ? "bg-gray-100 border-2 border-dashed border-gray-200 cursor-not-allowed opacity-60"
            : `bg-gray-50 border-2 border-dashed cursor-pointer ${
                q
                  ? "bg-blue-50 border-primary-blue"
                  : "border-gray-300 hover:bg-gray-100 hover:border-gray-400"
              }`
        }
      `,
      onDragOver: U ? void 0 : G,
      onDragLeave: U ? void 0 : k,
      onDrop: U ? void 0 : dl,
      onClick: U ? void 0 : D,
      children: [
        o.jsxs("div", {
          className: "relative mb-6",
          children: [
            o.jsx("div", {
              className:
                "w-20 h-20 rounded-full flex items-center justify-center shadow-lg",
              style: {
                background: "linear-gradient(135deg, #4285F4 0%, #6FA8F5 100%)",
                boxShadow: "0 4px 12px rgba(66, 133, 244, 0.3)",
              },
              children: o.jsx(kh, { className: "w-8 h-8 text-white" }),
            }),
            o.jsx("div", {
              className:
                "absolute -bottom-1 -right-1 w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center",
              children: o.jsx(Wh, { className: "w-4 h-4 text-white" }),
            }),
          ],
        }),
        o.jsxs("div", {
          className: "space-y-2",
          children: [
            o.jsx("p", {
              className: `text-lg font-medium ${
                U ? "text-gray-400" : "text-gray-700"
              }`,
              children: U
                ? "File already selected"
                : "Drag and drop a file here",
            }),
            !U &&
              o.jsxs("p", {
                className: "text-gray-500 text-sm",
                children: [
                  "or",
                  " ",
                  o.jsx("span", {
                    className:
                      "text-primary-blue underline hover:text-primary-blueDark cursor-pointer",
                    children: "browse files",
                  }),
                ],
              }),
            !U &&
              o.jsx("p", {
                className: "text-gray-400 text-xs mt-2",
                children: "Maximum file size: 100MB",
              }),
          ],
        }),
        o.jsx("input", {
          ref: R,
          type: "file",
          accept:
            ".doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf,.jpg,.jpeg,.png,.gif,.bmp,.svg,.webp,.txt,.md,.rtf,.csv,.mp4,.avi,.mov,.wmv,.flv,.webm,.mkv,.zip,.rar,.7z,.tar,.gz",
          className: "hidden",
          onChange: T,
          disabled: U,
        }),
      ],
    });
  },
  cm = (b) => {
    switch (b) {
      case "excel":
        return o.jsx(rd, { className: "w-5 h-5 text-white" });
      case "word":
        return o.jsx($h, { className: "w-5 h-5 text-white" });
      case "powerpoint":
        return o.jsx(od, { className: "w-5 h-5 text-white" });
      case "pdf":
        return o.jsx(Fh, { className: "w-5 h-5 text-white" });
      case "image":
        return o.jsx(Ih, { className: "w-5 h-5 text-white" });
      case "text":
        return o.jsx(Ph, { className: "w-5 h-5 text-white" });
      case "video":
        return o.jsx(lm, { className: "w-5 h-5 text-white" });
      case "zip":
        return o.jsx(tm, { className: "w-5 h-5 text-white" });
      default:
        return o.jsx(em, { className: "w-5 h-5 text-white" });
    }
  },
  im = (b) => {
    switch (b) {
      case "excel":
        return "bg-office-excel";
      case "word":
        return "bg-office-word";
      case "powerpoint":
        return "bg-office-powerpoint";
      case "pdf":
        return "bg-file-pdf";
      case "image":
        return "bg-file-image";
      case "text":
        return "bg-file-text";
      case "video":
        return "bg-file-video";
      case "zip":
        return "bg-file-zip";
      default:
        return "bg-file-default";
    }
  },
  fm = (b) => {
    switch (b) {
      case "success":
        return "border-success-green bg-success-greenBg";
      case "error":
        return "border-error-red bg-error-redBg";
      case "uploading":
        return "border-warning-yellow bg-warning-yellowBg";
      default:
        return "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm";
    }
  },
  sm = (b) => {
    switch (b) {
      case "success":
        return "Upload complete";
      case "error":
        return "Upload failed";
      case "uploading":
        return "Uploading...";
      default:
        return "";
    }
  },
  rm = (b) => {
    switch (b) {
      case "success":
        return "text-success-green";
      case "error":
        return "text-error-red";
      case "uploading":
        return "text-warning-yellow";
      default:
        return "text-gray-500";
    }
  },
  om = ({ file: b, onDelete: U, onShare: q }) =>
    o.jsxs("div", {
      className: "animate-fadeIn",
      children: [
        o.jsxs("div", {
          className: `
          bg-white border rounded-lg p-4 flex items-center justify-between 
          transition-all duration-200 ease-in-out
          ${fm(b.status)}
        `,
          children: [
            o.jsxs("div", {
              className: "flex items-center space-x-3",
              children: [
                o.jsx("div", {
                  className: `
              w-10 h-10 rounded-md flex items-center justify-center
              ${im(b.type)}
            `,
                  children: cm(b.type),
                }),
                o.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    o.jsx("p", {
                      className: "text-gray-800 text-sm font-medium mb-1",
                      children: b.name,
                    }),
                    o.jsx("p", {
                      className: "text-gray-500 text-xs",
                      children: b.size,
                    }),
                    b.status !== "uploading" &&
                      o.jsx("p", {
                        className: `text-xs font-medium ${rm(b.status)}`,
                        children: sm(b.status),
                      }),
                    b.status === "uploading" &&
                      o.jsx("div", {
                        className: "mt-2",
                        children: o.jsx("div", {
                          className:
                            "bg-gray-200 rounded-sm h-1 w-24 overflow-hidden",
                          children: o.jsx("div", {
                            className:
                              "h-full rounded-sm transition-all duration-300 ease-out",
                            style: {
                              width: `${b.progress || 0}%`,
                              background:
                                "linear-gradient(90deg, #4285F4 0%, #6FA8F5 100%)",
                            },
                          }),
                        }),
                      }),
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              className: "flex items-center space-x-3",
              children: [
                b.status === "uploading" &&
                  o.jsxs(o.Fragment, {
                    children: [
                      o.jsxs("span", {
                        className: "text-gray-500 text-xs font-medium",
                        children: [b.progress || 0, "%"],
                      }),
                      o.jsx(hd, { className: "w-4 h-4" }),
                    ],
                  }),
                b.status === "success" &&
                  o.jsx("div", {
                    className:
                      "w-5 h-5 bg-success-green rounded-full flex items-center justify-center",
                    children: o.jsx(dd, { className: "w-3 h-3 text-white" }),
                  }),
                o.jsx("button", {
                  onClick: () => U(b.id),
                  className:
                    "w-5 h-5 text-gray-400 hover:text-error-red transition-colors duration-200",
                  children: o.jsx(am, { className: "w-full h-full" }),
                }),
              ],
            }),
          ],
        }),
        b.status === "success" &&
          q &&
          o.jsx("div", {
            className: "mt-3 flex justify-center",
            children: o.jsxs("button", {
              onClick: () => q(b),
              className:
                "bg-gradient-to-r from-primary-blue to-primary-blueLight hover:from-primary-blueDark hover:to-primary-blue text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 shadow-lg shadow-primary-blue/30 hover:shadow-xl hover:shadow-primary-blue/40 transform hover:-translate-y-0.5 backdrop-blur-sm border border-white/20 flex items-center space-x-2",
              children: [
                o.jsx(um, { className: "w-4 h-4" }),
                o.jsx("span", { children: "Share File" }),
              ],
            }),
          }),
      ],
    }),
  dm = ({ files: b, onDeleteFile: U, onShareFile: q }) =>
    b.length === 0
      ? null
      : o.jsx("div", {
          className: "mt-6 space-y-3",
          children: b.map((m) =>
            o.jsx(om, { file: m, onDelete: U, onShare: q }, m.id)
          ),
        }),
  af = ({ text: b, disabled: U = !1, speed: q = 5, className: m = "" }) => {
    const R = `${q}s`;
    return o.jsx("div", {
      className: `text-gray-800 bg-clip-text inline-block ${
        U ? "" : "animate-shine"
      } ${m}`,
      style: {
        backgroundImage:
          "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.9) 50%, transparent 100%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: R,
      },
      children: b,
    });
  },
  ye = {
    encrypting: "Encrypting your file...",
    uploading: "Uploading to secure servers...",
    generating: "Generating share code...",
    complete: "Share code generated!",
  },
  hm = (b) => {
    switch (b.toLowerCase().split(".").pop()) {
      case "xls":
      case "xlsx":
        return "excel";
      case "doc":
      case "docx":
        return "word";
      case "ppt":
      case "pptx":
        return "powerpoint";
      case "pdf":
        return "pdf";
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
      case "bmp":
      case "svg":
      case "webp":
        return "image";
      case "txt":
      case "md":
      case "rtf":
      case "csv":
        return "text";
      case "mp4":
      case "avi":
      case "mov":
      case "wmv":
      case "flv":
      case "webm":
      case "mkv":
        return "video";
      case "zip":
      case "rar":
      case "7z":
      case "tar":
      case "gz":
        return "zip";
      default:
        return "other";
    }
  },
  sd = (b) => {
    if (b === 0) return "0 Bytes";
    const U = 1024,
      q = ["Bytes", "KB", "MB", "GB"],
      m = Math.floor(Math.log(b) / Math.log(U));
    return parseFloat((b / Math.pow(U, m)).toFixed(2)) + " " + q[m];
  },
  mm = ({ isOpen: b, onClose: U }) => {
    const [q, m] = Zl.useState([]),
      [R, G] = Zl.useState(""),
      [k, dl] = Zl.useState("upload"),
      [D, T] = Zl.useState(null),
      [A, Q] = Zl.useState({
        step: "encrypting",
        progress: 0,
        message: ye.encrypting,
      }),
      [al, xl] = Zl.useState(""),
      [El, Dl] = Zl.useState(!1),
      Hl = (I) => {
        if ((G(""), q.length > 0)) {
          G(
            "Only 1 file can be uploaded at a time. Please remove the current file first."
          );
          return;
        }
        if (I.length > 1) {
          G(
            "Only 1 file can be uploaded at a time. Please select a single file."
          );
          return;
        }
        const Z = I[0],
          cl = 100 * 1024 * 1024;
        if (Z.size > cl) {
          G(`File size exceeds 100MB limit. Your file is ${sd(Z.size)}.`);
          return;
        }
        const _l = new FileReader();
        (_l.onload = () => {
          const Cl = {
            id: `${Date.now()}-${Math.random()}`,
            name: Z.name,
            size: sd(Z.size),
            type: hm(Z.name),
            status: "uploading",
            progress: 0,
            blob: _l.result,
          };
          m([Cl]), ul(Cl.id);
        }),
          _l.readAsDataURL(Z);
      },
      ul = (I) => {
        let Z = 0;
        const cl = setInterval(() => {
          if (((Z += Math.random() * 25 + 10), Z >= 100)) {
            (Z = 100), clearInterval(cl);
            const _l = Math.random() > 0.1;
            m((Cl) =>
              Cl.map((Sl) =>
                Sl.id === I
                  ? { ...Sl, progress: 100, status: _l ? "success" : "error" }
                  : Sl
              )
            );
          } else
            m((_l) =>
              _l.map((Cl) =>
                Cl.id === I ? { ...Cl, progress: Math.round(Z) } : Cl
              )
            );
        }, 80 + Math.random() * 120);
      },
      ll = (I) => {
        m((Z) => Z.filter((cl) => cl.id !== I)), G("");
      },
      W = async (I) => {
        T(I), dl("share"), zl(I);
      },
      zl = async (I) => {
        if (I)
          try {
            Q({ step: "encrypting", progress: 0, message: ye.encrypting }),
              xl(""),
              Dl(!1),
              Q({ step: "encrypting", progress: 20, message: ye.encrypting });
            const Z = I.blob.split(",")[1];
            Q({ step: "uploading", progress: 50, message: ye.uploading });
            const cl = {
                fileName: I.name,
                fileType: V(I.name),
                fileSize: Nl(I.size),
                fileBlob: Z,
              },
              _l = await fetch("/api/share/upload", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cl),
              });
            if (!_l.ok) throw new Error("Failed to upload file");
            Q({ step: "generating", progress: 80, message: ye.generating });
            const Sl = (await _l.json()).code.toString();
            xl(Sl),
              Q({ step: "complete", progress: 100, message: ye.complete });
          } catch (Z) {
            console.error("Error uploading file:", Z),
              alert(
                "An error occurred while sharing the file. Please try again."
              );
          }
      },
      V = (I) => {
        const Z = I.toLowerCase().split(".").pop();
        return (
          {
            jpg: "image/jpeg",
            jpeg: "image/jpeg",
            png: "image/png",
            gif: "image/gif",
            pdf: "application/pdf",
            txt: "text/plain",
            doc: "application/msword",
            docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            xls: "application/vnd.ms-excel",
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            ppt: "application/vnd.ms-powerpoint",
            pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            zip: "application/zip",
            rar: "application/x-rar-compressed",
            mp4: "video/mp4",
            avi: "video/x-msvideo",
            mov: "video/quicktime",
          }[Z || ""] || "application/octet-stream"
        );
      },
      Nl = (I) => {
        const Z = I.split(" "),
          cl = parseFloat(Z[0]);
        switch (Z[1]) {
          case "KB":
            return Math.round(cl * 1024);
          case "MB":
            return Math.round(cl * 1024 * 1024);
          case "GB":
            return Math.round(cl * 1024 * 1024 * 1024);
          default:
            return Math.round(cl);
        }
      },
      Jl = async () => {
        try {
          await navigator.clipboard.writeText(al),
            Dl(!0),
            setTimeout(() => Dl(!1), 2e3);
        } catch (I) {
          console.error("Failed to copy: ", I);
        }
      },
      kl = () => {
        dl("upload"),
          T(null),
          Q({ step: "encrypting", progress: 0, message: ye.encrypting }),
          xl(""),
          Dl(!1);
      },
      tt = () => {
        m([]),
          G(""),
          dl("upload"),
          T(null),
          Q({ step: "encrypting", progress: 0, message: ye.encrypting }),
          xl(""),
          Dl(!1),
          U();
      };
    return b
      ? o.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50",
          children: o.jsx("div", {
            className:
              "bg-white rounded-2xl w-full max-w-2xl relative overflow-hidden",
            style: {
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            },
            children: o.jsxs("div", {
              className: `flex transition-transform duration-300 ease-out ${
                k === "share" ? "-translate-x-1/2" : "translate-x-0"
              }`,
              style: { width: "200%" },
              children: [
                o.jsxs("div", {
                  className: "w-1/2 flex-shrink-0 p-8",
                  children: [
                    o.jsxs("div", {
                      className: "relative mb-8",
                      children: [
                        o.jsx("button", {
                          onClick: tt,
                          className:
                            "absolute top-0 right-0 text-gray-400 hover:text-gray-600 transition-colors duration-200",
                          children: o.jsx(ef, { className: "w-6 h-6" }),
                        }),
                        o.jsxs("div", {
                          className: "text-center",
                          children: [
                            o.jsx("h1", {
                              className: "text-3xl font-semibold mb-2",
                              children: o.jsx(af, {
                                text: "Upload File",
                                className: "text-3xl font-semibold",
                              }),
                            }),
                            o.jsx("p", {
                              className: "text-gray-500 text-base",
                              children:
                                "Select or drag and drop a single file (max 100MB) to get started",
                            }),
                          ],
                        }),
                      ],
                    }),
                    R &&
                      o.jsx("div", {
                        className:
                          "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg",
                        children: o.jsx("p", {
                          className: "text-red-700 text-sm font-medium",
                          children: R,
                        }),
                      }),
                    o.jsx(nm, { onFilesSelected: Hl, disabled: q.length > 0 }),
                    o.jsx(dm, { files: q, onDeleteFile: ll, onShareFile: W }),
                  ],
                }),
                o.jsxs("div", {
                  className: "w-1/2 flex-shrink-0 p-8",
                  children: [
                    o.jsxs("div", {
                      className: "relative mb-8",
                      children: [
                        o.jsx("button", {
                          onClick: kl,
                          className:
                            "absolute top-0 left-0 text-gray-400 hover:text-gray-600 transition-colors duration-200",
                          children: o.jsx("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: o.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M15 19l-7-7 7-7",
                            }),
                          }),
                        }),
                        o.jsx("button", {
                          onClick: tt,
                          className:
                            "absolute top-0 right-0 text-gray-400 hover:text-gray-600 transition-colors duration-200",
                          children: o.jsx(ef, { className: "w-6 h-6" }),
                        }),
                        o.jsxs("div", {
                          className: "text-center",
                          children: [
                            o.jsx("h1", {
                              className: "text-2xl font-semibold mb-2",
                              children: o.jsx(af, {
                                text: "Share File",
                                className: "text-2xl font-semibold",
                              }),
                            }),
                            o.jsx("p", {
                              className: "text-gray-500 text-sm",
                              children: D?.name,
                            }),
                          ],
                        }),
                      ],
                    }),
                    A.step !== "complete"
                      ? o.jsxs("div", {
                          className: "text-center mb-8",
                          children: [
                            o.jsxs("div", {
                              className: "mb-6",
                              children: [
                                o.jsx(hd, {
                                  className: "w-12 h-12 mx-auto mb-4",
                                }),
                                o.jsx("p", {
                                  className: "text-gray-700 font-medium mb-2",
                                  children: A.message,
                                }),
                                o.jsxs("p", {
                                  className: "text-gray-500 text-sm",
                                  children: [A.progress, "%"],
                                }),
                              ],
                            }),
                            o.jsx("div", {
                              className:
                                "bg-gray-200 rounded-full h-2 w-full overflow-hidden",
                              children: o.jsx("div", {
                                className:
                                  "h-full rounded-full transition-all duration-300 ease-out",
                                style: {
                                  width: `${A.progress}%`,
                                  background:
                                    "linear-gradient(90deg, #4285F4 0%, #6FA8F5 100%)",
                                },
                              }),
                            }),
                          ],
                        })
                      : o.jsxs("div", {
                          className: "text-center mb-8",
                          children: [
                            o.jsxs("div", {
                              className: "mb-6",
                              children: [
                                o.jsxs("video", {
                                  autoPlay: !0,
                                  muted: !0,
                                  loop: !1,
                                  className: "w-16 h-16 mx-auto mb-4",
                                  onLoadedData: (I) => {
                                    const Z = I.target;
                                    (Z.currentTime = 0),
                                      (Z.playbackRate = 1.5),
                                      Z.play();
                                  },
                                  onTimeUpdate: (I) => {
                                    const Z = I.target;
                                    Z.currentTime >= 2.3 &&
                                      (Z.pause(), (Z.currentTime = 2.3));
                                  },
                                  children: [
                                    o.jsx("source", {
                                      src: "/sent.webm",
                                      type: "video/webm",
                                    }),
                                    o.jsx("div", {
                                      className:
                                        "w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto",
                                      children: o.jsx(dd, {
                                        className: "w-6 h-6 text-white",
                                      }),
                                    }),
                                  ],
                                }),
                                o.jsx("p", {
                                  className: "text-gray-700 font-medium mb-2",
                                  children: A.message,
                                }),
                                o.jsx("p", {
                                  className: "text-gray-500 text-sm",
                                  children: "Your file is ready to share",
                                }),
                              ],
                            }),
                            o.jsxs("div", {
                              className:
                                "bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4",
                              children: [
                                o.jsx("p", {
                                  className:
                                    "text-gray-600 text-xs mb-2 font-medium",
                                  children: "Share Code:",
                                }),
                                o.jsx("div", {
                                  className:
                                    "flex justify-center items-center space-x-2",
                                  children: al
                                    .split("")
                                    .map((I, Z) =>
                                      o.jsx(
                                        "div",
                                        {
                                          className:
                                            "w-10 h-12 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center text-2xl font-mono font-bold text-gray-800",
                                          children: I,
                                        },
                                        Z
                                      )
                                    ),
                                }),
                              ],
                            }),
                            o.jsx("button", {
                              onClick: Jl,
                              className: `w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                                El
                                  ? "bg-success-green text-white"
                                  : "bg-gradient-to-r from-primary-blue to-primary-blueLight hover:from-primary-blueDark hover:to-primary-blue text-white shadow-lg shadow-primary-blue/30 hover:shadow-xl hover:shadow-primary-blue/40 transform hover:-translate-y-0.5"
                              }`,
                              disabled: El,
                              children: El ? "Copied!" : "Copy Code",
                            }),
                          ],
                        }),
                  ],
                }),
              ],
            }),
          }),
        })
      : null;
  },
  vm = ({ isOpen: b, onClose: U }) => {
    const [q, m] = Zl.useState(Array(6).fill("")),
      [R, G] = Zl.useState(!1),
      [k, dl] = Zl.useState(null),
      [D, T] = Zl.useState(""),
      A = Array(6)
        .fill(0)
        .map(() => Gh.createRef()),
      Q = (ul, ll) => {
        if (ll.length > 1 || !/^\d*$/.test(ll)) return;
        const W = [...q];
        (W[ul] = ll), m(W), ll && ul < 5 && A[ul + 1].current?.focus();
      },
      al = (ul, ll) => {
        ll.key === "Backspace" &&
          !q[ul] &&
          ul > 0 &&
          A[ul - 1].current?.focus();
      },
      xl = async (ul) => {
        ul.preventDefault();
        const ll = q.join("");
        if (ll.length !== 6) {
          T("Please enter a complete 6-digit code");
          return;
        }
        G(!0), T("");
        try {
          const W = await fetch("/api/share/retrieve", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code: parseInt(ll) }),
          });
          if (!W.ok)
            throw W.status === 404
              ? new Error(
                  "File not found. Please check your code and try again."
                )
              : new Error("Failed to retrieve file");
          const zl = await W.json();
          dl(zl);
        } catch (W) {
          console.error(W),
            T(
              W instanceof Error
                ? W.message
                : "An error occurred while retrieving the file."
            );
        } finally {
          G(!1);
        }
      },
      El = () => {
        if (k)
          try {
            const ul = atob(k.fileBlob),
              ll = new Uint8Array(ul.length);
            for (let Nl = 0; Nl < ul.length; Nl++) ll[Nl] = ul.charCodeAt(Nl);
            const W = new Blob([ll], { type: k.fileType }),
              zl = URL.createObjectURL(W),
              V = document.createElement("a");
            (V.href = zl),
              (V.download = k.fileName),
              document.body.appendChild(V),
              V.click(),
              document.body.removeChild(V),
              URL.revokeObjectURL(zl);
          } catch (ul) {
            console.error("Error downloading file:", ul),
              T("An error occurred while downloading the file.");
          }
      },
      Dl = () => {
        m(Array(6).fill("")), G(!1), dl(null), T(""), U();
      },
      Hl = (ul) => {
        if (ul === 0) return "0 Bytes";
        const ll = 1024,
          W = ["Bytes", "KB", "MB", "GB"],
          zl = Math.floor(Math.log(ul) / Math.log(ll));
        return parseFloat((ul / Math.pow(ll, zl)).toFixed(2)) + " " + W[zl];
      };
    return b
      ? o.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50",
          children: o.jsxs("div", {
            className:
              "bg-white rounded-2xl p-8 w-full max-w-md animate-fadeIn transform transition-all duration-300",
            style: {
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            },
            children: [
              o.jsxs("div", {
                className: "relative mb-8",
                children: [
                  o.jsx("button", {
                    onClick: Dl,
                    className:
                      "absolute top-0 right-0 text-gray-400 hover:text-gray-600 transition-colors duration-200",
                    children: o.jsx(ef, { className: "w-6 h-6" }),
                  }),
                  o.jsxs("div", {
                    className: "text-center",
                    children: [
                      o.jsx("h1", {
                        className: "text-2xl font-semibold mb-2",
                        children: o.jsx(af, {
                          text: "Receive File",
                          className: "text-2xl font-semibold",
                        }),
                      }),
                      o.jsx("p", {
                        className: "text-gray-500 text-sm",
                        children:
                          "Enter the 6-digit share code to receive the file",
                      }),
                    ],
                  }),
                ],
              }),
              D &&
                o.jsx("div", {
                  className:
                    "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg",
                  children: o.jsx("p", {
                    className: "text-red-700 text-sm font-medium",
                    children: D,
                  }),
                }),
              k
                ? o.jsxs("div", {
                    className: "mb-8",
                    children: [
                      o.jsxs("div", {
                        className:
                          "bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6",
                        children: [
                          o.jsx("h3", {
                            className:
                              "text-lg font-semibold text-gray-800 mb-2",
                            children: "File Retrieved",
                          }),
                          o.jsxs("div", {
                            className: "space-y-2 text-sm text-gray-600",
                            children: [
                              o.jsxs("div", {
                                children: [
                                  o.jsx("span", {
                                    className: "font-medium",
                                    children: "Name:",
                                  }),
                                  " ",
                                  k.fileName,
                                ],
                              }),
                              o.jsxs("div", {
                                children: [
                                  o.jsx("span", {
                                    className: "font-medium",
                                    children: "Size:",
                                  }),
                                  " ",
                                  Hl(k.fileSize),
                                ],
                              }),
                              o.jsxs("div", {
                                children: [
                                  o.jsx("span", {
                                    className: "font-medium",
                                    children: "Type:",
                                  }),
                                  " ",
                                  k.fileType,
                                ],
                              }),
                              o.jsxs("div", {
                                children: [
                                  o.jsx("span", {
                                    className: "font-medium",
                                    children: "Uploaded:",
                                  }),
                                  " ",
                                  new Date(k.uploadTime).toLocaleString(),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsx("button", {
                        onClick: El,
                        className:
                          "w-full py-3 px-4 rounded-lg font-medium bg-gradient-to-r from-success-green to-green-500 hover:from-green-600 hover:to-success-green text-white shadow-lg shadow-success-green/30 hover:shadow-xl hover:shadow-success-green/40 transform hover:-translate-y-0.5 transition-all duration-200",
                        children: "Download File",
                      }),
                      o.jsx("button", {
                        onClick: () => {
                          dl(null), m(Array(6).fill("")), T("");
                        },
                        className:
                          "w-full mt-3 py-2 px-4 rounded-lg font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200",
                        children: "Retrieve Another File",
                      }),
                    ],
                  })
                : o.jsx("form", {
                    onSubmit: xl,
                    children: o.jsxs("div", {
                      className: "mb-8",
                      children: [
                        o.jsx("div", {
                          className:
                            "flex justify-center items-center space-x-2 mb-6",
                          children: q.map((ul, ll) =>
                            o.jsx(
                              "input",
                              {
                                ref: A[ll],
                                type: "text",
                                value: ul,
                                onChange: (W) => Q(ll, W.target.value),
                                onKeyDown: (W) => al(ll, W),
                                className:
                                  "w-10 h-12 border-2 border-gray-300 rounded-lg text-center text-2xl font-mono font-bold text-gray-800 focus:border-primary-blue focus:outline-none",
                                maxLength: 1,
                                disabled: R,
                              },
                              ll
                            )
                          ),
                        }),
                        o.jsx("button", {
                          type: "submit",
                          disabled: R,
                          className: `w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                            R
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-gradient-to-r from-primary-blue to-primary-blueLight hover:from-primary-blueDark hover:to-primary-blue text-white shadow-lg shadow-primary-blue/30 hover:shadow-xl hover:shadow-primary-blue/40 transform hover:-translate-y-0.5"
                          }`,
                          children: R ? "Retrieving..." : "Receive File",
                        }),
                      ],
                    }),
                  }),
            ],
          }),
        })
      : null;
  },
  ym = ({ onUploadClick: b, onReceiveClick: U }) =>
    o.jsxs("header", {
      className:
        "relative min-h-screen flex items-center justify-center overflow-hidden",
      children: [
        o.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-200",
        }),
        o.jsx("div", {
          className: "absolute inset-0 opacity-5",
          style: {
            backgroundImage: "url('/graph-paper.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          },
        }),
        o.jsx("div", {
          className:
            "absolute top-[10%] right-[15%] w-24 h-24 md:w-32 md:h-32 bg-secondary-purple/8 rounded-full animate-float",
        }),
        o.jsx("div", {
          className:
            "absolute bottom-[20%] left-[10%] w-16 h-16 md:w-20 md:h-20 bg-primary-blue/6 rounded-full animate-float-delayed",
        }),
        o.jsx("div", {
          className:
            "absolute top-[30%] left-[20%] w-20 h-20 md:w-28 md:h-28 bg-accent-orange/5 rounded-full animate-float-slow",
        }),
        o.jsx("div", {
          className:
            "absolute bottom-[40%] right-[25%] w-14 h-14 md:w-24 md:h-24 bg-office-excel/7 rounded-full animate-float-fast",
        }),
        o.jsxs("div", {
          className:
            "relative z-10 flex flex-col items-start justify-center w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20",
          children: [
            o.jsxs("div", {
              className: "relative flex flex-col gap-2 md:gap-1",
              children: [
                o.jsxs("div", {
                  className: "relative",
                  children: [
                    o.jsx("h1", {
                      className:
                        "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight text-gray-700 font-sans antialiased",
                      children: "File",
                    }),
                    o.jsx("div", {
                      className:
                        "absolute -top-6 -left-8 md:-top-8 md:-left-12 w-16 h-16 md:w-20 md:h-20 bg-office-excel rounded-2xl flex items-center justify-center shadow-lg shadow-office-excel/30 z-20 animate-float backdrop-blur-sm bg-office-excel/90 border border-white/20",
                      children: o.jsx(rd, {
                        className: "w-6 h-6 md:w-8 md:h-8 text-white",
                      }),
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "relative ml-6 md:ml-8",
                  children: [
                    o.jsxs("h1", {
                      className:
                        "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight text-gray-700 font-sans antialiased",
                      children: [
                        "Upl",
                        o.jsx("span", {
                          className:
                            "relative inline-block transform scale-110 bg-gradient-to-r from-secondary-purple to-secondary-purpleLight bg-clip-text text-transparent animate-letter-glow mx-1",
                          children: "o",
                        }),
                        "ader",
                      ],
                    }),
                    o.jsx("div", {
                      className:
                        "absolute top-20 -right-8 md:top-24 md:-right-12 w-12 h-12 md:w-16 md:h-16 bg-office-powerpoint rounded-xl flex items-center justify-center shadow-lg shadow-office-powerpoint/30 z-20 animate-float-delayed backdrop-blur-sm bg-office-powerpoint/90 border border-white/20",
                      children: o.jsx(od, {
                        className: "w-4 h-4 md:w-6 md:h-6 text-white",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("p", {
              className:
                "text-lg md:text-xl lg:text-2xl text-gray-600 mt-8 md:mt-12 max-w-2xl leading-relaxed",
              children: [
                "A simple and modern file sharing tool for",
                " ",
                o.jsx("span", {
                  className: "text-secondary-purple font-semibold",
                  children: "developers",
                }),
                " ",
              ],
            }),
            o.jsxs("div", {
              className: "mt-8 md:mt-12 flex gap-4",
              children: [
                o.jsx("button", {
                  onClick: U,
                  className:
                    "bg-gradient-to-r from-primary-blue to-primary-blueLight hover:from-primary-blueDark hover:to-primary-blue text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-primary-blue/30 hover:shadow-xl hover:shadow-primary-blue/40 transform hover:-translate-y-1 backdrop-blur-sm border border-white/20",
                  children: "Receive Files",
                }),
                o.jsx("button", {
                  onClick: b,
                  className:
                    "text-primary-blue hover:text-primary-blueLight font-semibold px-6 py-4 transition-all duration-300 transform hover:-translate-y-0.5",
                  children: "Upload Files",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  gm = () => {
    const [b, U] = Zl.useState(!1),
      [q, m] = Zl.useState(!1),
      R = () => U(!0),
      G = () => U(!1),
      k = () => m(!0),
      dl = () => m(!1);
    return o.jsxs("div", {
      className: "min-h-screen",
      children: [
        o.jsx(ym, { onUploadClick: R, onReceiveClick: k }),
        o.jsx(mm, { isOpen: b, onClose: G }),
        o.jsx(vm, { isOpen: q, onClose: dl }),
      ],
    });
  };
Jh.createRoot(document.getElementById("root")).render(
  o.jsx(Zl.StrictMode, { children: o.jsx(gm, {}) })
);
