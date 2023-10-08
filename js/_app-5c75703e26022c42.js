(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    79742: function (t, e) {
      "use strict";
      (e.byteLength = function (t) {
        var e = s(t),
          r = e[0],
          n = e[1];
        return (3 * (r + n)) / 4 - n;
      }),
        (e.toByteArray = function (t) {
          var e,
            r,
            i = s(t),
            a = i[0],
            u = i[1],
            l = new o((3 * (a + u)) / 4 - u),
            c = 0,
            f = u > 0 ? a - 4 : a;
          for (r = 0; r < f; r += 4)
            (e =
              (n[t.charCodeAt(r)] << 18) |
              (n[t.charCodeAt(r + 1)] << 12) |
              (n[t.charCodeAt(r + 2)] << 6) |
              n[t.charCodeAt(r + 3)]),
              (l[c++] = (e >> 16) & 255),
              (l[c++] = (e >> 8) & 255),
              (l[c++] = 255 & e);
          return (
            2 === u &&
              ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
              (l[c++] = 255 & e)),
            1 === u &&
              ((e =
                (n[t.charCodeAt(r)] << 10) |
                (n[t.charCodeAt(r + 1)] << 4) |
                (n[t.charCodeAt(r + 2)] >> 2)),
              (l[c++] = (e >> 8) & 255),
              (l[c++] = 255 & e)),
            l
          );
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, n = t.length, o = n % 3, i = [], a = 0, s = n - o;
            a < s;
            a += 16383
          )
            i.push(
              (function (t, e, n) {
                for (var o, i = [], a = e; a < n; a += 3)
                  i.push(
                    r[
                      ((o =
                        ((t[a] << 16) & 16711680) +
                        ((t[a + 1] << 8) & 65280) +
                        (255 & t[a + 2])) >>
                        18) &
                        63
                    ] +
                      r[(o >> 12) & 63] +
                      r[(o >> 6) & 63] +
                      r[63 & o]
                  );
                return i.join("");
              })(t, a, a + 16383 > s ? s : a + 16383)
            );
          return (
            1 === o
              ? i.push(r[(e = t[n - 1]) >> 2] + r[(e << 4) & 63] + "==")
              : 2 === o &&
                i.push(
                  r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] +
                    r[(e >> 4) & 63] +
                    r[(e << 2) & 63] +
                    "="
                ),
            i.join("")
          );
        });
      for (
        var r = [],
          n = [],
          o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          i =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          a = 0;
        a < 64;
        ++a
      )
        (r[a] = i[a]), (n[i.charCodeAt(a)] = a);
      function s(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
      }
      (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
    },
    48764: function (t, e, r) {
      "use strict";
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */ var n = r(79742),
        o = r(80645),
        i =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      function a(t) {
        if (t > 2147483647)
          throw RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
        var e = new Uint8Array(t);
        return Object.setPrototypeOf(e, s.prototype), e;
      }
      function s(t, e, r) {
        if ("number" == typeof t) {
          if ("string" == typeof e)
            throw TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return c(t);
        }
        return u(t, e, r);
      }
      function u(t, e, r) {
        if ("string" == typeof t)
          return (function (t, e) {
            if (
              (("string" != typeof e || "" === e) && (e = "utf8"),
              !s.isEncoding(e))
            )
              throw TypeError("Unknown encoding: " + e);
            var r = 0 | h(t, e),
              n = a(r),
              o = n.write(t, e);
            return o !== r && (n = n.slice(0, o)), n;
          })(t, e);
        if (ArrayBuffer.isView(t))
          return (function (t) {
            if (T(t, Uint8Array)) {
              var e = new Uint8Array(t);
              return p(e.buffer, e.byteOffset, e.byteLength);
            }
            return f(t);
          })(t);
        if (null == t)
          throw TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof t
          );
        if (
          T(t, ArrayBuffer) ||
          (t && T(t.buffer, ArrayBuffer)) ||
          ("undefined" != typeof SharedArrayBuffer &&
            (T(t, SharedArrayBuffer) || (t && T(t.buffer, SharedArrayBuffer))))
        )
          return p(t, e, r);
        if ("number" == typeof t)
          throw TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        var n = t.valueOf && t.valueOf();
        if (null != n && n !== t) return s.from(n, e, r);
        var o = (function (t) {
          if (s.isBuffer(t)) {
            var e,
              r = 0 | d(t.length),
              n = a(r);
            return 0 === n.length || t.copy(n, 0, 0, r), n;
          }
          return void 0 !== t.length
            ? "number" != typeof t.length || (e = t.length) != e
              ? a(0)
              : f(t)
            : "Buffer" === t.type && Array.isArray(t.data)
            ? f(t.data)
            : void 0;
        })(t);
        if (o) return o;
        if (
          "undefined" != typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" == typeof t[Symbol.toPrimitive]
        )
          return s.from(t[Symbol.toPrimitive]("string"), e, r);
        throw TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof t
        );
      }
      function l(t) {
        if ("number" != typeof t)
          throw TypeError('"size" argument must be of type number');
        if (t < 0)
          throw RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
      }
      function c(t) {
        return l(t), a(t < 0 ? 0 : 0 | d(t));
      }
      function f(t) {
        for (
          var e = t.length < 0 ? 0 : 0 | d(t.length), r = a(e), n = 0;
          n < e;
          n += 1
        )
          r[n] = 255 & t[n];
        return r;
      }
      function p(t, e, r) {
        var n;
        if (e < 0 || t.byteLength < e)
          throw RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (r || 0))
          throw RangeError('"length" is outside of buffer bounds');
        return (
          Object.setPrototypeOf(
            (n =
              void 0 === e && void 0 === r
                ? new Uint8Array(t)
                : void 0 === r
                ? new Uint8Array(t, e)
                : new Uint8Array(t, e, r)),
            s.prototype
          ),
          n
        );
      }
      function d(t) {
        if (t >= 2147483647)
          throw RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
          );
        return 0 | t;
      }
      function h(t, e) {
        if (s.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || T(t, ArrayBuffer)) return t.byteLength;
        if ("string" != typeof t)
          throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          );
        var r = t.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        for (var o = !1; ; )
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return O(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return k(t).length;
            default:
              if (o) return n ? -1 : O(t).length;
              (e = ("" + e).toLowerCase()), (o = !0);
          }
      }
      function m(t, e, r) {
        var o,
          i,
          a = !1;
        if (
          ((void 0 === e || e < 0) && (e = 0),
          e > this.length ||
            ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0 || (r >>>= 0) <= (e >>>= 0)))
        )
          return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return (function (t, e, r) {
                var n = t.length;
                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                for (var o = "", i = e; i < r; ++i) o += C[t[i]];
                return o;
              })(this, e, r);
            case "utf8":
            case "utf-8":
              return b(this, e, r);
            case "ascii":
              return (function (t, e, r) {
                var n = "";
                r = Math.min(t.length, r);
                for (var o = e; o < r; ++o)
                  n += String.fromCharCode(127 & t[o]);
                return n;
              })(this, e, r);
            case "latin1":
            case "binary":
              return (function (t, e, r) {
                var n = "";
                r = Math.min(t.length, r);
                for (var o = e; o < r; ++o) n += String.fromCharCode(t[o]);
                return n;
              })(this, e, r);
            case "base64":
              return (
                (i = r),
                0 === (o = e) && i === this.length
                  ? n.fromByteArray(this)
                  : n.fromByteArray(this.slice(o, i))
              );
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return (function (t, e, r) {
                for (
                  var n = t.slice(e, r), o = "", i = 0;
                  i < n.length - 1;
                  i += 2
                )
                  o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                return o;
              })(this, e, r);
            default:
              if (a) throw TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (a = !0);
          }
      }
      function v(t, e, r) {
        var n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      function y(t, e, r, n, o) {
        var i;
        if (0 === t.length) return -1;
        if (
          ("string" == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (i = r = +r) != i && (r = o ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (o) return -1;
          r = t.length - 1;
        } else if (r < 0) {
          if (!o) return -1;
          r = 0;
        }
        if (("string" == typeof e && (e = s.from(e, n)), s.isBuffer(e)))
          return 0 === e.length ? -1 : g(t, e, r, n, o);
        if ("number" == typeof e)
          return (
            (e &= 255),
            "function" == typeof Uint8Array.prototype.indexOf
              ? o
                ? Uint8Array.prototype.indexOf.call(t, e, r)
                : Uint8Array.prototype.lastIndexOf.call(t, e, r)
              : g(t, [e], r, n, o)
          );
        throw TypeError("val must be string, number or Buffer");
      }
      function g(t, e, r, n, o) {
        var i,
          a = 1,
          s = t.length,
          u = e.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          (a = 2), (s /= 2), (u /= 2), (r /= 2);
        }
        function l(t, e) {
          return 1 === a ? t[e] : t.readUInt16BE(e * a);
        }
        if (o) {
          var c = -1;
          for (i = r; i < s; i++)
            if (l(t, i) === l(e, -1 === c ? 0 : i - c)) {
              if ((-1 === c && (c = i), i - c + 1 === u)) return c * a;
            } else -1 !== c && (i -= i - c), (c = -1);
        } else
          for (r + u > s && (r = s - u), i = r; i >= 0; i--) {
            for (var f = !0, p = 0; p < u; p++)
              if (l(t, i + p) !== l(e, p)) {
                f = !1;
                break;
              }
            if (f) return i;
          }
        return -1;
      }
      function b(t, e, r) {
        r = Math.min(t.length, r);
        for (var n = [], o = e; o < r; ) {
          var i,
            a,
            s,
            u,
            l = t[o],
            c = null,
            f = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
          if (o + f <= r)
            switch (f) {
              case 1:
                l < 128 && (c = l);
                break;
              case 2:
                128 == (192 & (i = t[o + 1])) &&
                  (u = ((31 & l) << 6) | (63 & i)) > 127 &&
                  (c = u);
                break;
              case 3:
                (i = t[o + 1]),
                  (a = t[o + 2]),
                  128 == (192 & i) &&
                    128 == (192 & a) &&
                    (u = ((15 & l) << 12) | ((63 & i) << 6) | (63 & a)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (c = u);
                break;
              case 4:
                (i = t[o + 1]),
                  (a = t[o + 2]),
                  (s = t[o + 3]),
                  128 == (192 & i) &&
                    128 == (192 & a) &&
                    128 == (192 & s) &&
                    (u =
                      ((15 & l) << 18) |
                      ((63 & i) << 12) |
                      ((63 & a) << 6) |
                      (63 & s)) > 65535 &&
                    u < 1114112 &&
                    (c = u);
            }
          null === c
            ? ((c = 65533), (f = 1))
            : c > 65535 &&
              ((c -= 65536),
              n.push(((c >>> 10) & 1023) | 55296),
              (c = 56320 | (1023 & c))),
            n.push(c),
            (o += f);
        }
        return (function (t) {
          var e = t.length;
          if (e <= 4096) return String.fromCharCode.apply(String, t);
          for (var r = "", n = 0; n < e; )
            r += String.fromCharCode.apply(String, t.slice(n, (n += 4096)));
          return r;
        })(n);
      }
      function w(t, e, r) {
        if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
        if (t + e > r)
          throw RangeError("Trying to access beyond buffer length");
      }
      function x(t, e, r, n, o, i) {
        if (!s.isBuffer(t))
          throw TypeError('"buffer" argument must be a Buffer instance');
        if (e > o || e < i)
          throw RangeError('"value" argument is out of bounds');
        if (r + n > t.length) throw RangeError("Index out of range");
      }
      function E(t, e, r, n, o, i) {
        if (r + n > t.length || r < 0) throw RangeError("Index out of range");
      }
      function S(t, e, r, n, i) {
        return (
          (e = +e),
          (r >>>= 0),
          i || E(t, 0, r, 4),
          o.write(t, e, r, n, 23, 4),
          r + 4
        );
      }
      function j(t, e, r, n, i) {
        return (
          (e = +e),
          (r >>>= 0),
          i || E(t, 0, r, 8),
          o.write(t, e, r, n, 52, 8),
          r + 8
        );
      }
      (e.lW = s),
        (e.h2 = 50),
        (s.TYPED_ARRAY_SUPPORT = (function () {
          try {
            var t = new Uint8Array(1),
              e = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(e, Uint8Array.prototype),
              Object.setPrototypeOf(t, e),
              42 === t.foo()
            );
          } catch (t) {
            return !1;
          }
        })()),
        s.TYPED_ARRAY_SUPPORT ||
          "undefined" == typeof console ||
          "function" != typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(s.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (s.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(s.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (s.isBuffer(this)) return this.byteOffset;
          },
        }),
        (s.poolSize = 8192),
        (s.from = function (t, e, r) {
          return u(t, e, r);
        }),
        Object.setPrototypeOf(s.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(s, Uint8Array),
        (s.alloc = function (t, e, r) {
          return (
            l(t),
            t <= 0
              ? a(t)
              : void 0 !== e
              ? "string" == typeof r
                ? a(t).fill(e, r)
                : a(t).fill(e)
              : a(t)
          );
        }),
        (s.allocUnsafe = function (t) {
          return c(t);
        }),
        (s.allocUnsafeSlow = function (t) {
          return c(t);
        }),
        (s.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== s.prototype;
        }),
        (s.compare = function (t, e) {
          if (
            (T(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)),
            T(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)),
            !s.isBuffer(t) || !s.isBuffer(e))
          )
            throw TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (t === e) return 0;
          for (
            var r = t.length, n = e.length, o = 0, i = Math.min(r, n);
            o < i;
            ++o
          )
            if (t[o] !== e[o]) {
              (r = t[o]), (n = e[o]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (s.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (s.concat = function (t, e) {
          if (!Array.isArray(t))
            throw TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return s.alloc(0);
          if (void 0 === e)
            for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
          var r,
            n = s.allocUnsafe(e),
            o = 0;
          for (r = 0; r < t.length; ++r) {
            var i = t[r];
            if (T(i, Uint8Array))
              o + i.length > n.length
                ? s.from(i).copy(n, o)
                : Uint8Array.prototype.set.call(n, i, o);
            else {
              if (!s.isBuffer(i))
                throw TypeError('"list" argument must be an Array of Buffers');
              i.copy(n, o);
            }
            o += i.length;
          }
          return n;
        }),
        (s.byteLength = h),
        (s.prototype._isBuffer = !0),
        (s.prototype.swap16 = function () {
          var t = this.length;
          if (t % 2 != 0)
            throw RangeError("Buffer size must be a multiple of 16-bits");
          for (var e = 0; e < t; e += 2) v(this, e, e + 1);
          return this;
        }),
        (s.prototype.swap32 = function () {
          var t = this.length;
          if (t % 4 != 0)
            throw RangeError("Buffer size must be a multiple of 32-bits");
          for (var e = 0; e < t; e += 4)
            v(this, e, e + 3), v(this, e + 1, e + 2);
          return this;
        }),
        (s.prototype.swap64 = function () {
          var t = this.length;
          if (t % 8 != 0)
            throw RangeError("Buffer size must be a multiple of 64-bits");
          for (var e = 0; e < t; e += 8)
            v(this, e, e + 7),
              v(this, e + 1, e + 6),
              v(this, e + 2, e + 5),
              v(this, e + 3, e + 4);
          return this;
        }),
        (s.prototype.toString = function () {
          var t = this.length;
          return 0 === t
            ? ""
            : 0 == arguments.length
            ? b(this, 0, t)
            : m.apply(this, arguments);
        }),
        (s.prototype.toLocaleString = s.prototype.toString),
        (s.prototype.equals = function (t) {
          if (!s.isBuffer(t)) throw TypeError("Argument must be a Buffer");
          return this === t || 0 === s.compare(this, t);
        }),
        (s.prototype.inspect = function () {
          var t = "",
            r = e.h2;
          return (
            (t = this.toString("hex", 0, r)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > r && (t += " ... "),
            "<Buffer " + t + ">"
          );
        }),
        i && (s.prototype[i] = s.prototype.inspect),
        (s.prototype.compare = function (t, e, r, n, o) {
          if (
            (T(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)),
            !s.isBuffer(t))
          )
            throw TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            );
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === o && (o = this.length),
            e < 0 || r > t.length || n < 0 || o > this.length)
          )
            throw RangeError("out of range index");
          if (n >= o && e >= r) return 0;
          if (n >= o) return -1;
          if (e >= r) return 1;
          if (this === t) return 0;
          for (
            var i = (o >>>= 0) - (n >>>= 0),
              a = (r >>>= 0) - (e >>>= 0),
              u = Math.min(i, a),
              l = this.slice(n, o),
              c = t.slice(e, r),
              f = 0;
            f < u;
            ++f
          )
            if (l[f] !== c[f]) {
              (i = l[f]), (a = c[f]);
              break;
            }
          return i < a ? -1 : a < i ? 1 : 0;
        }),
        (s.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r);
        }),
        (s.prototype.indexOf = function (t, e, r) {
          return y(this, t, e, r, !0);
        }),
        (s.prototype.lastIndexOf = function (t, e, r) {
          return y(this, t, e, r, !1);
        }),
        (s.prototype.write = function (t, e, r, n) {
          if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
          else if (void 0 === r && "string" == typeof e)
            (n = e), (r = this.length), (e = 0);
          else {
            if (!isFinite(e))
              throw Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (e >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          }
          var o,
            i,
            a,
            s,
            u,
            l,
            c,
            f,
            p = this.length - e;
          if (
            ((void 0 === r || r > p) && (r = p),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          for (var d = !1; ; )
            switch (n) {
              case "hex":
                return (function (t, e, r, n) {
                  r = Number(r) || 0;
                  var o = t.length - r;
                  n ? (n = Number(n)) > o && (n = o) : (n = o);
                  var i = e.length;
                  n > i / 2 && (n = i / 2);
                  for (var a = 0; a < n; ++a) {
                    var s = parseInt(e.substr(2 * a, 2), 16);
                    if (s != s) break;
                    t[r + a] = s;
                  }
                  return a;
                })(this, t, e, r);
              case "utf8":
              case "utf-8":
                return (o = e), (i = r), P(O(t, this.length - o), this, o, i);
              case "ascii":
              case "latin1":
              case "binary":
                return (
                  (a = e),
                  (s = r),
                  P(
                    (function (t) {
                      for (var e = [], r = 0; r < t.length; ++r)
                        e.push(255 & t.charCodeAt(r));
                      return e;
                    })(t),
                    this,
                    a,
                    s
                  )
                );
              case "base64":
                return (u = e), (l = r), P(k(t), this, u, l);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return (
                  (c = e),
                  (f = r),
                  P(
                    (function (t, e) {
                      for (
                        var r, n, o = [], i = 0;
                        i < t.length && !((e -= 2) < 0);
                        ++i
                      )
                        (n = (r = t.charCodeAt(i)) >> 8),
                          o.push(r % 256),
                          o.push(n);
                      return o;
                    })(t, this.length - c),
                    this,
                    c,
                    f
                  )
                );
              default:
                if (d) throw TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (d = !0);
            }
        }),
        (s.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }),
        (s.prototype.slice = function (t, e) {
          var r = this.length;
          (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            (e = void 0 === e ? r : ~~e) < 0
              ? (e += r) < 0 && (e = 0)
              : e > r && (e = r),
            e < t && (e = t);
          var n = this.subarray(t, e);
          return Object.setPrototypeOf(n, s.prototype), n;
        }),
        (s.prototype.readUintLE = s.prototype.readUIntLE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || w(t, e, this.length);
            for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
              n += this[t + i] * o;
            return n;
          }),
        (s.prototype.readUintBE = s.prototype.readUIntBE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || w(t, e, this.length);
            for (var n = this[t + --e], o = 1; e > 0 && (o *= 256); )
              n += this[t + --e] * o;
            return n;
          }),
        (s.prototype.readUint8 = s.prototype.readUInt8 =
          function (t, e) {
            return (t >>>= 0), e || w(t, 1, this.length), this[t];
          }),
        (s.prototype.readUint16LE = s.prototype.readUInt16LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || w(t, 2, this.length),
              this[t] | (this[t + 1] << 8)
            );
          }),
        (s.prototype.readUint16BE = s.prototype.readUInt16BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || w(t, 2, this.length),
              (this[t] << 8) | this[t + 1]
            );
          }),
        (s.prototype.readUint32LE = s.prototype.readUInt32LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || w(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
        (s.prototype.readUint32BE = s.prototype.readUInt32BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || w(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
        (s.prototype.readIntLE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || w(t, e, this.length);
          for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
            n += this[t + i] * o;
          return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n;
        }),
        (s.prototype.readIntBE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || w(t, e, this.length);
          for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256); )
            i += this[t + --n] * o;
          return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
        }),
        (s.prototype.readInt8 = function (t, e) {
          return (
            (t >>>= 0),
            e || w(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          );
        }),
        (s.prototype.readInt16LE = function (t, e) {
          (t >>>= 0), e || w(t, 2, this.length);
          var r = this[t] | (this[t + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (s.prototype.readInt16BE = function (t, e) {
          (t >>>= 0), e || w(t, 2, this.length);
          var r = this[t + 1] | (this[t] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (s.prototype.readInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || w(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (s.prototype.readInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || w(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (s.prototype.readFloatLE = function (t, e) {
          return (
            (t >>>= 0), e || w(t, 4, this.length), o.read(this, t, !0, 23, 4)
          );
        }),
        (s.prototype.readFloatBE = function (t, e) {
          return (
            (t >>>= 0), e || w(t, 4, this.length), o.read(this, t, !1, 23, 4)
          );
        }),
        (s.prototype.readDoubleLE = function (t, e) {
          return (
            (t >>>= 0), e || w(t, 8, this.length), o.read(this, t, !0, 52, 8)
          );
        }),
        (s.prototype.readDoubleBE = function (t, e) {
          return (
            (t >>>= 0), e || w(t, 8, this.length), o.read(this, t, !1, 52, 8)
          );
        }),
        (s.prototype.writeUintLE = s.prototype.writeUIntLE =
          function (t, e, r, n) {
            ((t = +t), (e >>>= 0), (r >>>= 0), n) ||
              x(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var o = 1,
              i = 0;
            for (this[e] = 255 & t; ++i < r && (o *= 256); )
              this[e + i] = (t / o) & 255;
            return e + r;
          }),
        (s.prototype.writeUintBE = s.prototype.writeUIntBE =
          function (t, e, r, n) {
            ((t = +t), (e >>>= 0), (r >>>= 0), n) ||
              x(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var o = r - 1,
              i = 1;
            for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + r;
          }),
        (s.prototype.writeUint8 = s.prototype.writeUInt8 =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || x(this, t, e, 1, 255, 0),
              (this[e] = 255 & t),
              e + 1
            );
          }),
        (s.prototype.writeUint16LE = s.prototype.writeUInt16LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || x(this, t, e, 2, 65535, 0),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              e + 2
            );
          }),
        (s.prototype.writeUint16BE = s.prototype.writeUInt16BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || x(this, t, e, 2, 65535, 0),
              (this[e] = t >>> 8),
              (this[e + 1] = 255 & t),
              e + 2
            );
          }),
        (s.prototype.writeUint32LE = s.prototype.writeUInt32LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || x(this, t, e, 4, 4294967295, 0),
              (this[e + 3] = t >>> 24),
              (this[e + 2] = t >>> 16),
              (this[e + 1] = t >>> 8),
              (this[e] = 255 & t),
              e + 4
            );
          }),
        (s.prototype.writeUint32BE = s.prototype.writeUInt32BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || x(this, t, e, 4, 4294967295, 0),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
        (s.prototype.writeIntLE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var o = Math.pow(2, 8 * r - 1);
            x(this, t, e, r, o - 1, -o);
          }
          var i = 0,
            a = 1,
            s = 0;
          for (this[e] = 255 & t; ++i < r && (a *= 256); )
            t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1),
              (this[e + i] = (((t / a) >> 0) - s) & 255);
          return e + r;
        }),
        (s.prototype.writeIntBE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var o = Math.pow(2, 8 * r - 1);
            x(this, t, e, r, o - 1, -o);
          }
          var i = r - 1,
            a = 1,
            s = 0;
          for (this[e + i] = 255 & t; --i >= 0 && (a *= 256); )
            t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1),
              (this[e + i] = (((t / a) >> 0) - s) & 255);
          return e + r;
        }),
        (s.prototype.writeInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (s.prototype.writeInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          );
        }),
        (s.prototype.writeInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          );
        }),
        (s.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          );
        }),
        (s.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          );
        }),
        (s.prototype.writeFloatLE = function (t, e, r) {
          return S(this, t, e, !0, r);
        }),
        (s.prototype.writeFloatBE = function (t, e, r) {
          return S(this, t, e, !1, r);
        }),
        (s.prototype.writeDoubleLE = function (t, e, r) {
          return j(this, t, e, !0, r);
        }),
        (s.prototype.writeDoubleBE = function (t, e, r) {
          return j(this, t, e, !1, r);
        }),
        (s.prototype.copy = function (t, e, r, n) {
          if (!s.isBuffer(t)) throw TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r || 0 === t.length || 0 === this.length)
          )
            return 0;
          if (e < 0) throw RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length) throw RangeError("Index out of range");
          if (n < 0) throw RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r);
          var o = n - r;
          return (
            this === t && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, n)
              : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
            o
          );
        }),
        (s.prototype.fill = function (t, e, r, n) {
          if ("string" == typeof t) {
            if (
              ("string" == typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : "string" == typeof r && ((n = r), (r = this.length)),
              void 0 !== n && "string" != typeof n)
            )
              throw TypeError("encoding must be a string");
            if ("string" == typeof n && !s.isEncoding(n))
              throw TypeError("Unknown encoding: " + n);
            if (1 === t.length) {
              var o,
                i = t.charCodeAt(0);
              (("utf8" === n && i < 128) || "latin1" === n) && (t = i);
            }
          } else
            "number" == typeof t
              ? (t &= 255)
              : "boolean" == typeof t && (t = Number(t));
          if (e < 0 || this.length < e || this.length < r)
            throw RangeError("Out of range index");
          if (r <= e) return this;
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            "number" == typeof t)
          )
            for (o = e; o < r; ++o) this[o] = t;
          else {
            var a = s.isBuffer(t) ? t : s.from(t, n),
              u = a.length;
            if (0 === u)
              throw TypeError(
                'The value "' + t + '" is invalid for argument "value"'
              );
            for (o = 0; o < r - e; ++o) this[o + e] = a[o % u];
          }
          return this;
        });
      var A = /[^+/0-9A-Za-z-_]/g;
      function O(t, e) {
        e = e || 1 / 0;
        for (var r, n = t.length, o = null, i = [], a = 0; a < n; ++a) {
          if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
            if (!o) {
              if (r > 56319 || a + 1 === n) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = r;
              continue;
            }
            if (r < 56320) {
              (e -= 3) > -1 && i.push(239, 191, 189), (o = r);
              continue;
            }
            r = 65536 + (((o - 55296) << 10) | (r - 56320));
          } else o && (e -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), r < 128)) {
            if ((e -= 1) < 0) break;
            i.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            i.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw Error("Invalid code point");
            if ((e -= 4) < 0) break;
            i.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          }
        }
        return i;
      }
      function k(t) {
        return n.toByteArray(
          (function (t) {
            if ((t = (t = t.split("=")[0]).trim().replace(A, "")).length < 2)
              return "";
            for (; t.length % 4 != 0; ) t += "=";
            return t;
          })(t)
        );
      }
      function P(t, e, r, n) {
        for (var o = 0; o < n && !(o + r >= e.length) && !(o >= t.length); ++o)
          e[o + r] = t[o];
        return o;
      }
      function T(t, e) {
        return (
          t instanceof e ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === e.name)
        );
      }
      var C = (function () {
        for (var t = "0123456789abcdef", e = Array(256), r = 0; r < 16; ++r)
          for (var n = 16 * r, o = 0; o < 16; ++o) e[n + o] = t[r] + t[o];
        return e;
      })();
    },
    94184: function (t, e) {
      var r;
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
        var n = {}.hasOwnProperty;
        function o() {
          for (var t = [], e = 0; e < arguments.length; e++) {
            var r = arguments[e];
            if (r) {
              var i = typeof r;
              if ("string" === i || "number" === i) t.push(r);
              else if (Array.isArray(r)) {
                if (r.length) {
                  var a = o.apply(null, r);
                  a && t.push(a);
                }
              } else if ("object" === i) {
                if (
                  r.toString !== Object.prototype.toString &&
                  !r.toString.toString().includes("[native code]")
                ) {
                  t.push(r.toString());
                  continue;
                }
                for (var s in r) n.call(r, s) && r[s] && t.push(s);
              }
            }
          }
          return t.join(" ");
        }
        t.exports
          ? ((o.default = o), (t.exports = o))
          : void 0 !==
              (r = function () {
                return o;
              }.apply(e, [])) && (t.exports = r);
      })();
    },
    37347: function (t) {
      !(function () {
        function e(t, e) {
          document.addEventListener
            ? t.addEventListener("scroll", e, !1)
            : t.attachEvent("scroll", e);
        }
        function r(t) {
          (this.g = document.createElement("div")),
            this.g.setAttribute("aria-hidden", "true"),
            this.g.appendChild(document.createTextNode(t)),
            (this.h = document.createElement("span")),
            (this.i = document.createElement("span")),
            (this.m = document.createElement("span")),
            (this.j = document.createElement("span")),
            (this.l = -1),
            (this.h.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.i.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.j.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.m.style.cssText =
              "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
            this.h.appendChild(this.m),
            this.i.appendChild(this.j),
            this.g.appendChild(this.h),
            this.g.appendChild(this.i);
        }
        function n(t, e) {
          t.g.style.cssText =
            "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
            e +
            ";";
        }
        function o(t) {
          var e = t.g.offsetWidth,
            r = e + 100;
          return (
            (t.j.style.width = r + "px"),
            (t.i.scrollLeft = r),
            (t.h.scrollLeft = t.h.scrollWidth + 100),
            t.l !== e && ((t.l = e), !0)
          );
        }
        function i(t, r) {
          function n() {
            o(i) && null !== i.g.parentNode && r(i.l);
          }
          var i = t;
          e(t.h, n), e(t.i, n), o(t);
        }
        function a(t, e, r) {
          (e = e || {}),
            (r = r || window),
            (this.family = t),
            (this.style = e.style || "normal"),
            (this.weight = e.weight || "normal"),
            (this.stretch = e.stretch || "normal"),
            (this.context = r);
        }
        var s = null,
          u = null,
          l = null,
          c = null;
        function f(t) {
          return null === c && (c = !!t.document.fonts), c;
        }
        function p(t, e) {
          var r = t.style,
            n = t.weight;
          if (null === l) {
            var o = document.createElement("div");
            try {
              o.style.font = "condensed 100px sans-serif";
            } catch (t) {}
            l = "" !== o.style.font;
          }
          return [r, n, l ? t.stretch : "", "100px", e].join(" ");
        }
        (a.prototype.load = function (t, e) {
          var o = this,
            a = t || "BESbswy",
            l = 0,
            c = e || 3e3,
            d = new Date().getTime();
          return new Promise(function (t, e) {
            if (
              f(o.context) &&
              ((h = o.context),
              null === u &&
                (u =
                  !(!f(h) || !/Apple/.test(window.navigator.vendor)) &&
                  !!(h =
                    /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                      window.navigator.userAgent
                    )) &&
                  603 > parseInt(h[1], 10)),
              !u)
            ) {
              var h,
                m,
                v = new Promise(function (t, e) {
                  !(function r() {
                    new Date().getTime() - d >= c
                      ? e(Error(c + "ms timeout exceeded"))
                      : o.context.document.fonts
                          .load(p(o, '"' + o.family + '"'), a)
                          .then(function (e) {
                            1 <= e.length ? t() : setTimeout(r, 25);
                          }, e);
                  })();
                });
              Promise.race([
                new Promise(function (t, e) {
                  l = setTimeout(function () {
                    e(Error(c + "ms timeout exceeded"));
                  }, c);
                }),
                v,
              ]).then(function () {
                clearTimeout(l), t(o);
              }, e);
            } else
              (m = function () {
                function u() {
                  var e;
                  (e =
                    (-1 != v && -1 != y) ||
                    (-1 != v && -1 != g) ||
                    (-1 != y && -1 != g)) &&
                    ((e = v != y && v != g && y != g) ||
                      (null === s &&
                        (s =
                          !!(e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                            window.navigator.userAgent
                          )) &&
                          (536 > parseInt(e[1], 10) ||
                            (536 === parseInt(e[1], 10) &&
                              11 >= parseInt(e[2], 10)))),
                      (e =
                        s &&
                        ((v == b && y == b && g == b) ||
                          (v == w && y == w && g == w) ||
                          (v == x && y == x && g == x)))),
                    (e = !e)),
                    e &&
                      (null !== E.parentNode && E.parentNode.removeChild(E),
                      clearTimeout(l),
                      t(o));
                }
                var f = new r(a),
                  h = new r(a),
                  m = new r(a),
                  v = -1,
                  y = -1,
                  g = -1,
                  b = -1,
                  w = -1,
                  x = -1,
                  E = document.createElement("div");
                (E.dir = "ltr"),
                  n(f, p(o, "sans-serif")),
                  n(h, p(o, "serif")),
                  n(m, p(o, "monospace")),
                  E.appendChild(f.g),
                  E.appendChild(h.g),
                  E.appendChild(m.g),
                  o.context.document.body.appendChild(E),
                  (b = f.g.offsetWidth),
                  (w = h.g.offsetWidth),
                  (x = m.g.offsetWidth),
                  (function t() {
                    if (new Date().getTime() - d >= c)
                      null !== E.parentNode && E.parentNode.removeChild(E),
                        e(Error(c + "ms timeout exceeded"));
                    else {
                      var r = o.context.document.hidden;
                      (!0 === r || void 0 === r) &&
                        ((v = f.g.offsetWidth),
                        (y = h.g.offsetWidth),
                        (g = m.g.offsetWidth),
                        u()),
                        (l = setTimeout(t, 50));
                    }
                  })(),
                  i(f, function (t) {
                    (v = t), u();
                  }),
                  n(f, p(o, '"' + o.family + '",sans-serif')),
                  i(h, function (t) {
                    (y = t), u();
                  }),
                  n(h, p(o, '"' + o.family + '",serif')),
                  i(m, function (t) {
                    (g = t), u();
                  }),
                  n(m, p(o, '"' + o.family + '",monospace'));
              }),
                document.body
                  ? m()
                  : document.addEventListener
                  ? document.addEventListener("DOMContentLoaded", function t() {
                      document.removeEventListener("DOMContentLoaded", t), m();
                    })
                  : document.attachEvent("onreadystatechange", function t() {
                      ("interactive" == document.readyState ||
                        "complete" == document.readyState) &&
                        (document.detachEvent("onreadystatechange", t), m());
                    });
          });
        }),
          (t.exports = a);
      })();
    },
    24394: function (t, e, r) {
      "use strict";
      r.d(e, {
        K: function () {
          return n;
        },
        k: function () {
          return o;
        },
      });
      var n = function () {},
        o = function () {};
    },
    80645: function (t, e) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (e.read =
        function (t, e, r, n, o) {
          var i,
            a,
            s = 8 * o - n - 1,
            u = (1 << s) - 1,
            l = u >> 1,
            c = -7,
            f = r ? o - 1 : 0,
            p = r ? -1 : 1,
            d = t[e + f];
          for (
            f += p, i = d & ((1 << -c) - 1), d >>= -c, c += s;
            c > 0;
            i = 256 * i + t[e + f], f += p, c -= 8
          );
          for (
            a = i & ((1 << -c) - 1), i >>= -c, c += n;
            c > 0;
            a = 256 * a + t[e + f], f += p, c -= 8
          );
          if (0 === i) i = 1 - l;
          else {
            if (i === u) return a ? NaN : (1 / 0) * (d ? -1 : 1);
            (a += Math.pow(2, n)), (i -= l);
          }
          return (d ? -1 : 1) * a * Math.pow(2, i - n);
        }),
        (e.write = function (t, e, r, n, o, i) {
          var a,
            s,
            u,
            l = 8 * i - o - 1,
            c = (1 << l) - 1,
            f = c >> 1,
            p = 23 === o ? 5.960464477539062e-8 : 0,
            d = n ? 0 : i - 1,
            h = n ? 1 : -1,
            m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            isNaN((e = Math.abs(e))) || e === 1 / 0
              ? ((s = isNaN(e) ? 1 : 0), (a = c))
              : ((a = Math.floor(Math.log(e) / Math.LN2)),
                e * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                (e += a + f >= 1 ? p / u : p * Math.pow(2, 1 - f)) * u >= 2 &&
                  (a++, (u /= 2)),
                a + f >= c
                  ? ((s = 0), (a = c))
                  : a + f >= 1
                  ? ((s = (e * u - 1) * Math.pow(2, o)), (a += f))
                  : ((s = e * Math.pow(2, f - 1) * Math.pow(2, o)), (a = 0)));
            o >= 8;
            t[r + d] = 255 & s, d += h, s /= 256, o -= 8
          );
          for (
            a = (a << o) | s, l += o;
            l > 0;
            t[r + d] = 255 & a, d += h, a /= 256, l -= 8
          );
          t[r + d - h] |= 128 * m;
        });
    },
    2962: function (t, e, r) {
      "use strict";
      r.d(e, {
        PB: function () {
          return p;
        },
        lX: function () {
          return f;
        },
      });
      var n = r(9008),
        o = r.n(n),
        i = r(67294);
      function a() {
        return (a =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function s(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      var u = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        l = function (t, e, r) {
          void 0 === e && (e = []);
          var n = void 0 === r ? {} : r,
            o = n.defaultWidth,
            a = n.defaultHeight;
          return e.reduce(function (e, r, n) {
            return (
              e.push(
                i.createElement("meta", {
                  key: "og:" + t + ":0" + n,
                  property: "og:" + t,
                  content: r.url,
                })
              ),
              r.alt &&
                e.push(
                  i.createElement("meta", {
                    key: "og:" + t + ":alt0" + n,
                    property: "og:" + t + ":alt",
                    content: r.alt,
                  })
                ),
              r.secureUrl &&
                e.push(
                  i.createElement("meta", {
                    key: "og:" + t + ":secure_url0" + n,
                    property: "og:" + t + ":secure_url",
                    content: r.secureUrl.toString(),
                  })
                ),
              r.type &&
                e.push(
                  i.createElement("meta", {
                    key: "og:" + t + ":type0" + n,
                    property: "og:" + t + ":type",
                    content: r.type.toString(),
                  })
                ),
              r.width
                ? e.push(
                    i.createElement("meta", {
                      key: "og:" + t + ":width0" + n,
                      property: "og:" + t + ":width",
                      content: r.width.toString(),
                    })
                  )
                : o &&
                  e.push(
                    i.createElement("meta", {
                      key: "og:" + t + ":width0" + n,
                      property: "og:" + t + ":width",
                      content: o.toString(),
                    })
                  ),
              r.height
                ? e.push(
                    i.createElement("meta", {
                      key: "og:" + t + ":height" + n,
                      property: "og:" + t + ":height",
                      content: r.height.toString(),
                    })
                  )
                : a &&
                  e.push(
                    i.createElement("meta", {
                      key: "og:" + t + ":height" + n,
                      property: "og:" + t + ":height",
                      content: a.toString(),
                    })
                  ),
              e
            );
          }, []);
        },
        c = function (t) {
          var e,
            r,
            n,
            o,
            s,
            c = [];
          t.titleTemplate && (u.templateTitle = t.titleTemplate);
          var f = "";
          t.title
            ? ((f = t.title),
              u.templateTitle &&
                (f = u.templateTitle.replace(/%s/g, function () {
                  return f;
                })))
            : t.defaultTitle && (f = t.defaultTitle),
            f && c.push(i.createElement("title", { key: "title" }, f));
          var p = t.noindex || u.noindex || t.dangerouslySetAllPagesToNoIndex,
            d = t.nofollow || u.nofollow || t.dangerouslySetAllPagesToNoFollow,
            h = "";
          if (t.robotsProps) {
            var m = t.robotsProps,
              v = m.nosnippet,
              y = m.maxSnippet,
              g = m.maxImagePreview,
              b = m.maxVideoPreview,
              w = m.noarchive,
              x = m.noimageindex,
              E = m.notranslate,
              S = m.unavailableAfter;
            h =
              (v ? ",nosnippet" : "") +
              (y ? ",max-snippet:" + y : "") +
              (g ? ",max-image-preview:" + g : "") +
              (w ? ",noarchive" : "") +
              (S ? ",unavailable_after:" + S : "") +
              (x ? ",noimageindex" : "") +
              (b ? ",max-video-preview:" + b : "") +
              (E ? ",notranslate" : "");
          }
          if (
            (p || d
              ? (t.dangerouslySetAllPagesToNoIndex && (u.noindex = !0),
                t.dangerouslySetAllPagesToNoFollow && (u.nofollow = !0),
                c.push(
                  i.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content:
                      (p ? "noindex" : "index") +
                      "," +
                      (d ? "nofollow" : "follow") +
                      h,
                  })
                ))
              : c.push(
                  i.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content: "index,follow" + h,
                  })
                ),
            t.description &&
              c.push(
                i.createElement("meta", {
                  key: "description",
                  name: "description",
                  content: t.description,
                })
              ),
            t.mobileAlternate &&
              c.push(
                i.createElement("link", {
                  rel: "alternate",
                  key: "mobileAlternate",
                  media: t.mobileAlternate.media,
                  href: t.mobileAlternate.href,
                })
              ),
            t.languageAlternates &&
              t.languageAlternates.length > 0 &&
              t.languageAlternates.forEach(function (t) {
                c.push(
                  i.createElement("link", {
                    rel: "alternate",
                    key: "languageAlternate-" + t.hrefLang,
                    hrefLang: t.hrefLang,
                    href: t.href,
                  })
                );
              }),
            t.twitter &&
              (t.twitter.cardType &&
                c.push(
                  i.createElement("meta", {
                    key: "twitter:card",
                    name: "twitter:card",
                    content: t.twitter.cardType,
                  })
                ),
              t.twitter.site &&
                c.push(
                  i.createElement("meta", {
                    key: "twitter:site",
                    name: "twitter:site",
                    content: t.twitter.site,
                  })
                ),
              t.twitter.handle &&
                c.push(
                  i.createElement("meta", {
                    key: "twitter:creator",
                    name: "twitter:creator",
                    content: t.twitter.handle,
                  })
                )),
            t.facebook &&
              t.facebook.appId &&
              c.push(
                i.createElement("meta", {
                  key: "fb:app_id",
                  property: "fb:app_id",
                  content: t.facebook.appId,
                })
              ),
            ((null != (e = t.openGraph) && e.title) || f) &&
              c.push(
                i.createElement("meta", {
                  key: "og:title",
                  property: "og:title",
                  content: (null == (o = t.openGraph) ? void 0 : o.title) || f,
                })
              ),
            ((null != (r = t.openGraph) && r.description) || t.description) &&
              c.push(
                i.createElement("meta", {
                  key: "og:description",
                  property: "og:description",
                  content:
                    (null == (s = t.openGraph) ? void 0 : s.description) ||
                    t.description,
                })
              ),
            t.openGraph)
          ) {
            if (
              ((t.openGraph.url || t.canonical) &&
                c.push(
                  i.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: t.openGraph.url || t.canonical,
                  })
                ),
              t.openGraph.type)
            ) {
              var j = t.openGraph.type.toLowerCase();
              c.push(
                i.createElement("meta", {
                  key: "og:type",
                  property: "og:type",
                  content: j,
                })
              ),
                "profile" === j && t.openGraph.profile
                  ? (t.openGraph.profile.firstName &&
                      c.push(
                        i.createElement("meta", {
                          key: "profile:first_name",
                          property: "profile:first_name",
                          content: t.openGraph.profile.firstName,
                        })
                      ),
                    t.openGraph.profile.lastName &&
                      c.push(
                        i.createElement("meta", {
                          key: "profile:last_name",
                          property: "profile:last_name",
                          content: t.openGraph.profile.lastName,
                        })
                      ),
                    t.openGraph.profile.username &&
                      c.push(
                        i.createElement("meta", {
                          key: "profile:username",
                          property: "profile:username",
                          content: t.openGraph.profile.username,
                        })
                      ),
                    t.openGraph.profile.gender &&
                      c.push(
                        i.createElement("meta", {
                          key: "profile:gender",
                          property: "profile:gender",
                          content: t.openGraph.profile.gender,
                        })
                      ))
                  : "book" === j && t.openGraph.book
                  ? (t.openGraph.book.authors &&
                      t.openGraph.book.authors.length &&
                      t.openGraph.book.authors.forEach(function (t, e) {
                        c.push(
                          i.createElement("meta", {
                            key: "book:author:0" + e,
                            property: "book:author",
                            content: t,
                          })
                        );
                      }),
                    t.openGraph.book.isbn &&
                      c.push(
                        i.createElement("meta", {
                          key: "book:isbn",
                          property: "book:isbn",
                          content: t.openGraph.book.isbn,
                        })
                      ),
                    t.openGraph.book.releaseDate &&
                      c.push(
                        i.createElement("meta", {
                          key: "book:release_date",
                          property: "book:release_date",
                          content: t.openGraph.book.releaseDate,
                        })
                      ),
                    t.openGraph.book.tags &&
                      t.openGraph.book.tags.length &&
                      t.openGraph.book.tags.forEach(function (t, e) {
                        c.push(
                          i.createElement("meta", {
                            key: "book:tag:0" + e,
                            property: "book:tag",
                            content: t,
                          })
                        );
                      }))
                  : "article" === j && t.openGraph.article
                  ? (t.openGraph.article.publishedTime &&
                      c.push(
                        i.createElement("meta", {
                          key: "article:published_time",
                          property: "article:published_time",
                          content: t.openGraph.article.publishedTime,
                        })
                      ),
                    t.openGraph.article.modifiedTime &&
                      c.push(
                        i.createElement("meta", {
                          key: "article:modified_time",
                          property: "article:modified_time",
                          content: t.openGraph.article.modifiedTime,
                        })
                      ),
                    t.openGraph.article.expirationTime &&
                      c.push(
                        i.createElement("meta", {
                          key: "article:expiration_time",
                          property: "article:expiration_time",
                          content: t.openGraph.article.expirationTime,
                        })
                      ),
                    t.openGraph.article.authors &&
                      t.openGraph.article.authors.length &&
                      t.openGraph.article.authors.forEach(function (t, e) {
                        c.push(
                          i.createElement("meta", {
                            key: "article:author:0" + e,
                            property: "article:author",
                            content: t,
                          })
                        );
                      }),
                    t.openGraph.article.section &&
                      c.push(
                        i.createElement("meta", {
                          key: "article:section",
                          property: "article:section",
                          content: t.openGraph.article.section,
                        })
                      ),
                    t.openGraph.article.tags &&
                      t.openGraph.article.tags.length &&
                      t.openGraph.article.tags.forEach(function (t, e) {
                        c.push(
                          i.createElement("meta", {
                            key: "article:tag:0" + e,
                            property: "article:tag",
                            content: t,
                          })
                        );
                      }))
                  : ("video.movie" === j ||
                      "video.episode" === j ||
                      "video.tv_show" === j ||
                      "video.other" === j) &&
                    t.openGraph.video &&
                    (t.openGraph.video.actors &&
                      t.openGraph.video.actors.length &&
                      t.openGraph.video.actors.forEach(function (t, e) {
                        t.profile &&
                          c.push(
                            i.createElement("meta", {
                              key: "video:actor:0" + e,
                              property: "video:actor",
                              content: t.profile,
                            })
                          ),
                          t.role &&
                            c.push(
                              i.createElement("meta", {
                                key: "video:actor:role:0" + e,
                                property: "video:actor:role",
                                content: t.role,
                              })
                            );
                      }),
                    t.openGraph.video.directors &&
                      t.openGraph.video.directors.length &&
                      t.openGraph.video.directors.forEach(function (t, e) {
                        c.push(
                          i.createElement("meta", {
                            key: "video:director:0" + e,
                            property: "video:director",
                            content: t,
                          })
                        );
                      }),
                    t.openGraph.video.writers &&
                      t.openGraph.video.writers.length &&
                      t.openGraph.video.writers.forEach(function (t, e) {
                        c.push(
                          i.createElement("meta", {
                            key: "video:writer:0" + e,
                            property: "video:writer",
                            content: t,
                          })
                        );
                      }),
                    t.openGraph.video.duration &&
                      c.push(
                        i.createElement("meta", {
                          key: "video:duration",
                          property: "video:duration",
                          content: t.openGraph.video.duration.toString(),
                        })
                      ),
                    t.openGraph.video.releaseDate &&
                      c.push(
                        i.createElement("meta", {
                          key: "video:release_date",
                          property: "video:release_date",
                          content: t.openGraph.video.releaseDate,
                        })
                      ),
                    t.openGraph.video.tags &&
                      t.openGraph.video.tags.length &&
                      t.openGraph.video.tags.forEach(function (t, e) {
                        c.push(
                          i.createElement("meta", {
                            key: "video:tag:0" + e,
                            property: "video:tag",
                            content: t,
                          })
                        );
                      }),
                    t.openGraph.video.series &&
                      c.push(
                        i.createElement("meta", {
                          key: "video:series",
                          property: "video:series",
                          content: t.openGraph.video.series,
                        })
                      ));
            }
            t.defaultOpenGraphImageWidth &&
              (u.defaultOpenGraphImageWidth = t.defaultOpenGraphImageWidth),
              t.defaultOpenGraphImageHeight &&
                (u.defaultOpenGraphImageHeight = t.defaultOpenGraphImageHeight),
              t.openGraph.images &&
                t.openGraph.images.length &&
                c.push.apply(
                  c,
                  l("image", t.openGraph.images, {
                    defaultWidth: u.defaultOpenGraphImageWidth,
                    defaultHeight: u.defaultOpenGraphImageHeight,
                  })
                ),
              t.defaultOpenGraphVideoWidth &&
                (u.defaultOpenGraphVideoWidth = t.defaultOpenGraphVideoWidth),
              t.defaultOpenGraphVideoHeight &&
                (u.defaultOpenGraphVideoHeight = t.defaultOpenGraphVideoHeight),
              t.openGraph.videos &&
                t.openGraph.videos.length &&
                c.push.apply(
                  c,
                  l("video", t.openGraph.videos, {
                    defaultWidth: u.defaultOpenGraphVideoWidth,
                    defaultHeight: u.defaultOpenGraphVideoHeight,
                  })
                ),
              t.openGraph.locale &&
                c.push(
                  i.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: t.openGraph.locale,
                  })
                ),
              t.openGraph.site_name &&
                c.push(
                  i.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: t.openGraph.site_name,
                  })
                );
          }
          return (
            t.canonical &&
              c.push(
                i.createElement("link", {
                  rel: "canonical",
                  href: t.canonical,
                  key: "canonical",
                })
              ),
            t.additionalMetaTags &&
              t.additionalMetaTags.length > 0 &&
              t.additionalMetaTags.forEach(function (t) {
                var e, r, n;
                c.push(
                  i.createElement(
                    "meta",
                    a(
                      {
                        key:
                          "meta:" +
                          (null !=
                          (e =
                            null !=
                            (r = null != (n = t.keyOverride) ? n : t.name)
                              ? r
                              : t.property)
                            ? e
                            : t.httpEquiv),
                      },
                      t
                    )
                  )
                );
              }),
            null != (n = t.additionalLinkTags) &&
              n.length &&
              t.additionalLinkTags.forEach(function (t) {
                var e;
                c.push(
                  i.createElement(
                    "link",
                    a(
                      {
                        key:
                          "link" +
                          (null != (e = t.keyOverride) ? e : t.href) +
                          t.rel,
                      },
                      t
                    )
                  )
                );
              }),
            c
          );
        },
        f = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          return (
            s(e, t),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.title,
                r = t.titleTemplate,
                n = t.defaultTitle,
                a = t.dangerouslySetAllPagesToNoIndex,
                s = t.dangerouslySetAllPagesToNoFollow,
                u = t.description,
                l = t.canonical,
                f = t.facebook,
                p = t.openGraph,
                d = t.additionalMetaTags,
                h = t.twitter,
                m = t.defaultOpenGraphImageWidth,
                v = t.defaultOpenGraphImageHeight,
                y = t.defaultOpenGraphVideoWidth,
                g = t.defaultOpenGraphVideoHeight,
                b = t.mobileAlternate,
                w = t.languageAlternates,
                x = t.additionalLinkTags,
                E = t.robotsProps;
              return i.createElement(
                o(),
                null,
                c({
                  title: e,
                  titleTemplate: r,
                  defaultTitle: n,
                  dangerouslySetAllPagesToNoIndex: void 0 !== a && a,
                  dangerouslySetAllPagesToNoFollow: void 0 !== s && s,
                  description: u,
                  canonical: l,
                  facebook: f,
                  openGraph: p,
                  additionalMetaTags: d,
                  twitter: h,
                  defaultOpenGraphImageWidth: m,
                  defaultOpenGraphImageHeight: v,
                  defaultOpenGraphVideoWidth: y,
                  defaultOpenGraphVideoHeight: g,
                  mobileAlternate: b,
                  languageAlternates: w,
                  additionalLinkTags: x,
                  robotsProps: E,
                })
              );
            }),
            e
          );
        })(i.Component),
        p = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          return (
            s(e, t),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.title,
                r = t.noindex,
                n = t.nofollow,
                a = t.robotsProps,
                s = t.description,
                u = t.canonical,
                l = t.openGraph,
                f = t.facebook,
                p = t.twitter,
                d = t.additionalMetaTags,
                h = t.titleTemplate,
                m = t.defaultTitle,
                v = t.mobileAlternate,
                y = t.languageAlternates,
                g = t.additionalLinkTags;
              return i.createElement(
                o(),
                null,
                c({
                  title: e,
                  noindex: void 0 !== r && r,
                  nofollow: n,
                  robotsProps: a,
                  description: s,
                  canonical: u,
                  facebook: f,
                  openGraph: l,
                  additionalMetaTags: d,
                  twitter: p,
                  titleTemplate: h,
                  defaultTitle: m,
                  mobileAlternate: v,
                  languageAlternates: y,
                  additionalLinkTags: g,
                })
              );
            }),
            e
          );
        })(i.Component);
      RegExp(
        "[" +
          Object.keys(
            Object.freeze({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&apos;",
            })
          ).join("") +
          "]",
        "g"
      );
    },
    91118: function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(73620);
        },
      ]);
    },
    49298: function (t, e, r) {
      "use strict";
      var n = r(85893),
        o = r(31202),
        i = r(67294),
        a = r(1785),
        s = r.n(a);
      e.Z = (t) => {
        let {
            portalId: e = "22693050",
            formId: r = "4791aa81-f507-4b87-9b5a-ca782d89b95a",
            target: a = "hubspotForm",
            className: u = "",
            submitText: l = "Submit",
            type: c = "newsletter",
          } = t,
          { hubspotLoaded: f, setHubspotLoaded: p } = (0, i.useContext)(o.x);
        return (
          (0, i.useEffect)(() => {
            if (!f) {
              let t = document.createElement("script");
              t.setAttribute("id", "hubspotScript"),
                (t.src = "https://js.hsforms.net/forms/v2.js"),
                document.body.appendChild(t),
                t.addEventListener("load", () => {
                  p(!0);
                });
            }
            f &&
              window.hbspt &&
              window.hbspt.forms.create({
                region: "na1",
                portalId: e,
                formId: r,
                target: "#" + a,
                submitButtonClass:
                  "cursor-pointer btn-secondary dark:bg-white dark:text-black",
                cssClass: "grid grid-flow-row gap-6 pt-6",
                errorMessageClass: "hidden",
                submitText: l,
                onFormSubmit: function () {
                  var t = document.querySelector(
                    "#" + a + ' input[type="email"]'
                  ).value;
                  "newsletter" == c &&
                    s().dataLayer({
                      dataLayer: {
                        event: "form_submit_success",
                        user_email: t,
                        form_name: "Salesforce Newsletter form",
                        form_type: "Newsletter",
                        element_location: "footer",
                      },
                    }),
                    "contact" == c &&
                      s().dataLayer({
                        dataLayer: {
                          event: "form_submit_success",
                          user_email: t,
                          form_name: "Salesforce Contact form",
                          form_type: "Contact",
                          element_location: "contact",
                        },
                      });
                },
              });
          }, [r, f, e, p, a, l]),
          (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)("div", { id: a, className: u }),
          })
        );
      };
    },
    1259: function (t, e, r) {
      "use strict";
      var n = r(85893),
        o = r(89755),
        i = r.n(o);
      let a = (t) => {
        let { src: e, width: r, quality: n } = t;
        return "https://spaceperspective.com/"
          .concat(e, "?w=")
          .concat(r, "&q=")
          .concat(n || 75);
      };
      e.Z = (t) => (0, n.jsx)(i(), { loader: a, src: t.src, ...t });
    },
    31202: function (t, e, r) {
      "use strict";
      r.d(e, {
        g: function () {
          return a;
        },
        x: function () {
          return i;
        },
      });
      var n = r(85893),
        o = r(67294);
      let i = (0, o.createContext)({}),
        a = (t) => {
          let { children: e } = t,
            [r, a] = (0, o.useState)(!1);
          return (0, n.jsx)(i.Provider, {
            value: { hubspotLoaded: r, setHubspotLoaded: a },
            children: e,
          });
        };
    },
    13991: function (t, e) {
      "use strict";
      var r, n;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          PrefetchKind: function () {
            return r;
          },
          ACTION_REFRESH: function () {
            return o;
          },
          ACTION_NAVIGATE: function () {
            return i;
          },
          ACTION_RESTORE: function () {
            return a;
          },
          ACTION_SERVER_PATCH: function () {
            return s;
          },
          ACTION_PREFETCH: function () {
            return u;
          },
          ACTION_FAST_REFRESH: function () {
            return l;
          },
          ACTION_SERVER_ACTION: function () {
            return c;
          },
        });
      let o = "refresh",
        i = "navigate",
        a = "restore",
        s = "server-patch",
        u = "prefetch",
        l = "fast-refresh",
        c = "server-action";
      ((n = r || (r = {})).AUTO = "auto"),
        (n.FULL = "full"),
        (n.TEMPORARY = "temporary"),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    81516: function (t, e, r) {
      "use strict";
      function n(t, e, r, n) {
        return !1;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(82387),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    15619: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let n = r(38754),
        o = r(61757)._(r(67294)),
        i = n._(r(42636)),
        a = r(3735),
        s = r(80508),
        u = r(83341);
      r(34210);
      let l = r(82387);
      function c(t) {
        return "/" === t[0] ? t.slice(1) : t;
      }
      let f = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image/",
          loader: "custom",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
        p = new Set(),
        d =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        h = new Map([
          [
            "default",
            function (t) {
              let { config: e, src: r, width: n, quality: o } = t;
              return r.endsWith(".svg") && !e.dangerouslyAllowSVG
                ? r
                : (0, l.normalizePathTrailingSlash)(e.path) +
                    "?url=" +
                    encodeURIComponent(r) +
                    "&w=" +
                    n +
                    "&q=" +
                    (o || 75);
            },
          ],
          [
            "imgix",
            function (t) {
              let { config: e, src: r, width: n, quality: o } = t,
                i = new URL("" + e.path + c(r)),
                a = i.searchParams;
              return (
                a.set("auto", a.getAll("auto").join(",") || "format"),
                a.set("fit", a.get("fit") || "max"),
                a.set("w", a.get("w") || n.toString()),
                o && a.set("q", o.toString()),
                i.href
              );
            },
          ],
          [
            "cloudinary",
            function (t) {
              let { config: e, src: r, width: n, quality: o } = t,
                i =
                  ["f_auto", "c_limit", "w_" + n, "q_" + (o || "auto")].join(
                    ","
                  ) + "/";
              return "" + e.path + i + c(r);
            },
          ],
          [
            "akamai",
            function (t) {
              let { config: e, src: r, width: n } = t;
              return "" + e.path + c(r) + "?imwidth=" + n;
            },
          ],
          [
            "custom",
            function (t) {
              let { src: e } = t;
              throw Error(
                'Image with src "' +
                  e +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              );
            },
          ],
        ]);
      function m(t) {
        return void 0 !== t.default;
      }
      function v(t) {
        let {
          config: e,
          src: r,
          unoptimized: n,
          layout: o,
          width: i,
          quality: a,
          sizes: s,
          loader: u,
        } = t;
        if (n) return { src: r, srcSet: void 0, sizes: void 0 };
        let { widths: l, kind: c } = (function (t, e, r, n) {
            let { deviceSizes: o, allSizes: i } = t;
            if (n && ("fill" === r || "responsive" === r)) {
              let t = /(^|\s)(1?\d?\d)vw/g,
                e = [];
              for (let r; (r = t.exec(n)); r) e.push(parseInt(r[2]));
              if (e.length) {
                let t = 0.01 * Math.min(...e);
                return { widths: i.filter((e) => e >= o[0] * t), kind: "w" };
              }
              return { widths: i, kind: "w" };
            }
            if ("number" != typeof e || "fill" === r || "responsive" === r)
              return { widths: o, kind: "w" };
            let a = [
              ...new Set(
                [e, 2 * e].map((t) => i.find((e) => e >= t) || i[i.length - 1])
              ),
            ];
            return { widths: a, kind: "x" };
          })(e, i, o, s),
          f = l.length - 1;
        return {
          sizes: s || "w" !== c ? s : "100vw",
          srcSet: l
            .map(
              (t, n) =>
                u({ config: e, src: r, quality: a, width: t }) +
                " " +
                ("w" === c ? t : n + 1) +
                c
            )
            .join(", "),
          src: u({ config: e, src: r, quality: a, width: l[f] }),
        };
      }
      function y(t) {
        return "number" == typeof t
          ? t
          : "string" == typeof t
          ? parseInt(t, 10)
          : void 0;
      }
      function g(t) {
        var e;
        let r = (null == (e = t.config) ? void 0 : e.loader) || "default",
          n = h.get(r);
        if (n) return n(t);
        throw Error(
          'Unknown "loader" found in "next.config.js". Expected: ' +
            a.VALID_LOADERS.join(", ") +
            ". Received: " +
            r
        );
      }
      function b(t, e, r, n, o, i) {
        if (!t || t.src === d || t["data-loaded-src"] === e) return;
        (t["data-loaded-src"] = e),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (
                t.parentNode &&
                (p.add(e),
                "blur" === n && i(!0),
                null == o ? void 0 : o.current)
              ) {
                let { naturalWidth: e, naturalHeight: r } = t;
                o.current({ naturalWidth: e, naturalHeight: r });
              }
            });
      }
      let w = (t) => {
        let {
          imgAttributes: e,
          heightInt: r,
          widthInt: n,
          qualityInt: i,
          layout: a,
          className: s,
          imgStyle: u,
          blurStyle: l,
          isLazy: c,
          placeholder: f,
          loading: p,
          srcString: d,
          config: h,
          unoptimized: m,
          loader: y,
          onLoadingCompleteRef: g,
          setBlurComplete: w,
          setIntersection: x,
          onLoad: E,
          onError: S,
          isVisible: j,
          noscriptSizes: A,
          ...O
        } = t;
        return (
          (p = c ? "lazy" : p),
          o.default.createElement(
            o.default.Fragment,
            null,
            o.default.createElement("img", {
              ...O,
              ...e,
              decoding: "async",
              "data-nimg": a,
              className: s,
              style: { ...u, ...l },
              ref: (0, o.useCallback)(
                (t) => {
                  x(t),
                    (null == t ? void 0 : t.complete) && b(t, d, 0, f, g, w);
                },
                [x, d, a, f, g, w]
              ),
              onLoad: (t) => {
                b(t.currentTarget, d, 0, f, g, w), E && E(t);
              },
              onError: (t) => {
                "blur" === f && w(!0), S && S(t);
              },
            }),
            (c || "blur" === f) &&
              o.default.createElement(
                "noscript",
                null,
                o.default.createElement("img", {
                  ...O,
                  loading: p,
                  decoding: "async",
                  "data-nimg": a,
                  style: u,
                  className: s,
                  ...v({
                    config: h,
                    src: d,
                    unoptimized: m,
                    layout: a,
                    width: n,
                    quality: i,
                    sizes: A,
                    loader: y,
                  }),
                })
              )
          )
        );
      };
      function x(t) {
        var e;
        let r,
          {
            src: n,
            sizes: l,
            unoptimized: c = !1,
            priority: h = !1,
            loading: b,
            lazyRoot: x = null,
            lazyBoundary: E,
            className: S,
            quality: j,
            width: A,
            height: O,
            style: k,
            objectFit: P,
            objectPosition: T,
            onLoadingComplete: C,
            placeholder: L = "empty",
            blurDataURL: R,
            ...M
          } = t,
          N = (0, o.useContext)(u.ImageConfigContext),
          V = (0, o.useMemo)(() => {
            let t = f || N || a.imageConfigDefault,
              e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
              r = t.deviceSizes.sort((t, e) => t - e);
            return { ...t, allSizes: e, deviceSizes: r };
          }, [N]),
          I = l ? "responsive" : "intrinsic";
        "layout" in M && (M.layout && (I = M.layout), delete M.layout);
        let D = g;
        if ("loader" in M) {
          if (M.loader) {
            let t = M.loader;
            D = (e) => {
              let { config: r, ...n } = e;
              return t(n);
            };
          }
          delete M.loader;
        }
        let B = "";
        if ("object" == typeof (e = n) && (m(e) || void 0 !== e.src)) {
          let t = m(n) ? n.default : n;
          if (!t.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(t)
            );
          if (
            ((R = R || t.blurDataURL),
            (B = t.src),
            !(
              (I && "fill" === I) ||
              ((O = O || t.height), (A = A || t.width), t.height && t.width)
            ))
          )
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(t)
            );
        }
        let U = !h && ("lazy" === b || void 0 === b);
        ((n = "string" == typeof n ? n : B).startsWith("data:") ||
          n.startsWith("blob:")) &&
          ((c = !0), (U = !1)),
          p.has(n) && (U = !1),
          V.unoptimized && (c = !0);
        let [_, F] = (0, o.useState)(!1),
          [z, G, W] = (0, s.useIntersection)({
            rootRef: x,
            rootMargin: E || "200px",
            disabled: !U,
          }),
          H = !U || G,
          q = {
            boxSizing: "border-box",
            display: "block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          Y = {
            boxSizing: "border-box",
            display: "block",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          Z = !1,
          $ = y(A),
          K = y(O),
          X = y(j),
          J = Object.assign({}, k, {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            boxSizing: "border-box",
            padding: 0,
            border: "none",
            margin: "auto",
            display: "block",
            width: 0,
            height: 0,
            minWidth: "100%",
            maxWidth: "100%",
            minHeight: "100%",
            maxHeight: "100%",
            objectFit: P,
            objectPosition: T,
          }),
          Q =
            "blur" !== L || _
              ? {}
              : {
                  backgroundSize: P || "cover",
                  backgroundPosition: T || "0% 0%",
                  filter: "blur(20px)",
                  backgroundImage: 'url("' + R + '")',
                };
        if ("fill" === I)
          (q.display = "block"),
            (q.position = "absolute"),
            (q.top = 0),
            (q.left = 0),
            (q.bottom = 0),
            (q.right = 0);
        else if (void 0 !== $ && void 0 !== K) {
          let t = K / $,
            e = isNaN(t) ? "100%" : 100 * t + "%";
          "responsive" === I
            ? ((q.display = "block"),
              (q.position = "relative"),
              (Z = !0),
              (Y.paddingTop = e))
            : "intrinsic" === I
            ? ((q.display = "inline-block"),
              (q.position = "relative"),
              (q.maxWidth = "100%"),
              (Z = !0),
              (Y.maxWidth = "100%"),
              (r =
                "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27" +
                $ +
                "%27%20height=%27" +
                K +
                "%27/%3e"))
            : "fixed" === I &&
              ((q.display = "inline-block"),
              (q.position = "relative"),
              (q.width = $),
              (q.height = K));
        }
        let tt = { src: d, srcSet: void 0, sizes: void 0 };
        H &&
          (tt = v({
            config: V,
            src: n,
            unoptimized: c,
            layout: I,
            width: $,
            quality: X,
            sizes: l,
            loader: D,
          }));
        let et = n,
          rt = {
            imageSrcSet: tt.srcSet,
            imageSizes: tt.sizes,
            crossOrigin: M.crossOrigin,
            referrerPolicy: M.referrerPolicy,
          },
          nt = o.default.useLayoutEffect,
          ot = (0, o.useRef)(C),
          it = (0, o.useRef)(n);
        (0, o.useEffect)(() => {
          ot.current = C;
        }, [C]),
          nt(() => {
            it.current !== n && (W(), (it.current = n));
          }, [W, n]);
        let at = {
          isLazy: U,
          imgAttributes: tt,
          heightInt: K,
          widthInt: $,
          qualityInt: X,
          layout: I,
          className: S,
          imgStyle: J,
          blurStyle: Q,
          loading: b,
          config: V,
          unoptimized: c,
          placeholder: L,
          loader: D,
          srcString: et,
          onLoadingCompleteRef: ot,
          setBlurComplete: F,
          setIntersection: z,
          isVisible: H,
          noscriptSizes: l,
          ...M,
        };
        return o.default.createElement(
          o.default.Fragment,
          null,
          o.default.createElement(
            "span",
            { style: q },
            Z
              ? o.default.createElement(
                  "span",
                  { style: Y },
                  r
                    ? o.default.createElement("img", {
                        style: {
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        },
                        alt: "",
                        "aria-hidden": !0,
                        src: r,
                      })
                    : null
                )
              : null,
            o.default.createElement(w, at)
          ),
          h
            ? o.default.createElement(
                i.default,
                null,
                o.default.createElement("link", {
                  key: "__nimg-" + tt.src + tt.srcSet + tt.sizes,
                  rel: "preload",
                  as: "image",
                  href: tt.srcSet ? void 0 : tt.src,
                  ...rt,
                })
              )
            : null
        );
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    95569: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let n = r(38754)._(r(67294)),
        o = r(14532),
        i = r(83353),
        a = r(61410),
        s = r(79064),
        u = r(370),
        l = r(69955),
        c = r(24224),
        f = r(80508),
        p = r(81516),
        d = r(64266),
        h = r(13991),
        m = new Set();
      function v(t, e, r, n, o, a) {
        if (!a && !(0, i.isLocalURL)(e)) return;
        if (!n.bypassPrefetchedCheck) {
          let o =
            e +
            "%" +
            r +
            "%" +
            (void 0 !== n.locale
              ? n.locale
              : "locale" in t
              ? t.locale
              : void 0);
          if (m.has(o)) return;
          m.add(o);
        }
        let s = a ? t.prefetch(e, o) : t.prefetch(e, r, n);
        Promise.resolve(s).catch((t) => {});
      }
      function y(t) {
        return "string" == typeof t ? t : (0, a.formatUrl)(t);
      }
      let g = n.default.forwardRef(function (t, e) {
          let r,
            a,
            {
              href: m,
              as: g,
              children: b,
              prefetch: w = null,
              passHref: x,
              replace: E,
              shallow: S,
              scroll: j,
              locale: A,
              onClick: O,
              onMouseEnter: k,
              onTouchStart: P,
              legacyBehavior: T = !1,
              ...C
            } = t;
          (r = b),
            T &&
              ("string" == typeof r || "number" == typeof r) &&
              (r = n.default.createElement("a", null, r));
          let L = n.default.useContext(l.RouterContext),
            R = n.default.useContext(c.AppRouterContext),
            M = null != L ? L : R,
            N = !L,
            V = !1 !== w,
            I = null === w ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL,
            { href: D, as: B } = n.default.useMemo(() => {
              if (!L) {
                let t = y(m);
                return { href: t, as: g ? y(g) : t };
              }
              let [t, e] = (0, o.resolveHref)(L, m, !0);
              return { href: t, as: g ? (0, o.resolveHref)(L, g) : e || t };
            }, [L, m, g]),
            U = n.default.useRef(D),
            _ = n.default.useRef(B);
          T && (a = n.default.Children.only(r));
          let F = T ? a && "object" == typeof a && a.ref : e,
            [z, G, W] = (0, f.useIntersection)({ rootMargin: "200px" }),
            H = n.default.useCallback(
              (t) => {
                (_.current !== B || U.current !== D) &&
                  (W(), (_.current = B), (U.current = D)),
                  z(t),
                  F &&
                    ("function" == typeof F
                      ? F(t)
                      : "object" == typeof F && (F.current = t));
              },
              [B, F, D, W, z]
            );
          n.default.useEffect(() => {
            M && G && V && v(M, D, B, { locale: A }, { kind: I }, N);
          }, [B, D, G, A, V, null == L ? void 0 : L.locale, M, N, I]);
          let q = {
            ref: H,
            onClick(t) {
              T || "function" != typeof O || O(t),
                T &&
                  a.props &&
                  "function" == typeof a.props.onClick &&
                  a.props.onClick(t),
                M &&
                  !t.defaultPrevented &&
                  (function (t, e, r, o, a, s, u, l, c, f) {
                    let { nodeName: p } = t.currentTarget;
                    if (
                      "A" === p.toUpperCase() &&
                      ((function (t) {
                        let e = t.currentTarget.getAttribute("target");
                        return (
                          (e && "_self" !== e) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which)
                        );
                      })(t) ||
                        (!c && !(0, i.isLocalURL)(r)))
                    )
                      return;
                    t.preventDefault();
                    let d = () => {
                      let t = null == u || u;
                      "beforePopState" in e
                        ? e[a ? "replace" : "push"](r, o, {
                            shallow: s,
                            locale: l,
                            scroll: t,
                          })
                        : e[a ? "replace" : "push"](o || r, {
                            forceOptimisticNavigation: !f,
                            scroll: t,
                          });
                    };
                    c ? n.default.startTransition(d) : d();
                  })(t, M, D, B, E, S, j, A, N, V);
            },
            onMouseEnter(t) {
              T || "function" != typeof k || k(t),
                T &&
                  a.props &&
                  "function" == typeof a.props.onMouseEnter &&
                  a.props.onMouseEnter(t),
                M &&
                  (V || !N) &&
                  v(
                    M,
                    D,
                    B,
                    { locale: A, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: I },
                    N
                  );
            },
            onTouchStart(t) {
              T || "function" != typeof P || P(t),
                T &&
                  a.props &&
                  "function" == typeof a.props.onTouchStart &&
                  a.props.onTouchStart(t),
                M &&
                  (V || !N) &&
                  v(
                    M,
                    D,
                    B,
                    { locale: A, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: I },
                    N
                  );
            },
          };
          if ((0, s.isAbsoluteUrl)(B)) q.href = B;
          else if (!T || x || ("a" === a.type && !("href" in a.props))) {
            let t = void 0 !== A ? A : null == L ? void 0 : L.locale,
              e =
                (null == L ? void 0 : L.isLocaleDomain) &&
                (0, p.getDomainLocale)(
                  B,
                  t,
                  null == L ? void 0 : L.locales,
                  null == L ? void 0 : L.domainLocales
                );
            q.href =
              e ||
              (0, d.addBasePath)(
                (0, u.addLocale)(B, t, null == L ? void 0 : L.defaultLocale)
              );
          }
          return T
            ? n.default.cloneElement(a, q)
            : n.default.createElement("a", { ...C, ...q }, r);
        }),
        b = g;
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    80508: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useIntersection", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let n = r(67294),
        o = r(10029),
        i = "function" == typeof IntersectionObserver,
        a = new Map(),
        s = [];
      function u(t) {
        let { rootRef: e, rootMargin: r, disabled: u } = t,
          l = u || !i,
          [c, f] = (0, n.useState)(!1),
          p = (0, n.useRef)(null),
          d = (0, n.useCallback)((t) => {
            p.current = t;
          }, []);
        (0, n.useEffect)(() => {
          if (i) {
            if (l || c) return;
            let t = p.current;
            if (t && t.tagName) {
              let n = (function (t, e, r) {
                let {
                  id: n,
                  observer: o,
                  elements: i,
                } = (function (t) {
                  let e,
                    r = { root: t.root || null, margin: t.rootMargin || "" },
                    n = s.find(
                      (t) => t.root === r.root && t.margin === r.margin
                    );
                  if (n && (e = a.get(n))) return e;
                  let o = new Map(),
                    i = new IntersectionObserver((t) => {
                      t.forEach((t) => {
                        let e = o.get(t.target),
                          r = t.isIntersecting || t.intersectionRatio > 0;
                        e && r && e(r);
                      });
                    }, t);
                  return (
                    (e = { id: r, observer: i, elements: o }),
                    s.push(r),
                    a.set(r, e),
                    e
                  );
                })(r);
                return (
                  i.set(t, (t) => t && f(t)),
                  o.observe(t),
                  function () {
                    if ((i.delete(t), o.unobserve(t), 0 === i.size)) {
                      o.disconnect(), a.delete(n);
                      let t = s.findIndex(
                        (t) => t.root === n.root && t.margin === n.margin
                      );
                      t > -1 && s.splice(t, 1);
                    }
                  }
                );
              })(t, 0, { root: null == e ? void 0 : e.current, rootMargin: r });
              return n;
            }
          } else if (!c) {
            let t = (0, o.requestIdleCallback)(() => f(!0));
            return () => (0, o.cancelIdleCallback)(t);
          }
        }, [l, r, e, c, p.current]);
        let h = (0, n.useCallback)(() => {
          f(!1);
        }, []);
        return [d, c, h];
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    73620: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return M;
          },
        });
      var n = r(85893);
      r(58964);
      var o = r(67294),
        i = r(11163),
        a = r(41664),
        s = r.n(a),
        u = r(94184),
        l = r.n(u);
      let c = (t) => {
          let { active: e, mode: r } = t;
          return (0, n.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 177.55 120",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              d: "m71.34,60.03c-.04-9.62,7.79-17.52,17.41-17.44,9.62-.04,17.52,7.79,17.44,17.41.04,9.62-7.79,17.52-17.41,17.44-9.62.04-17.46-7.73-17.44-17.41Zm-14.02,0c.02,17.32,14.14,31.45,31.46,31.42,17.37.03,31.45-14.14,31.42-31.46.03-17.37-14.09-31.39-31.46-31.42-17.32.02-31.39,14.09-31.42,31.46ZM0,65.2l36.55,32.51c17.07,15.13,37.48,24.37,59.05,21.88,17.93-2.1,34.76-11.8,49.43-28.25l13.89-15.68-20.87-18.55-9.23,10.4,10.4,9.31-4.66,5.2c-12.34,13.81-26.07,22.04-40.51,23.67-17.38,2.02-33.99-5.82-48.19-18.47L9.31,54.8,0,65.2Zm39.5-2.33l9.23-10.4-10.4-9.31,4.66-5.2c12.34-13.81,26.07-22.04,40.51-23.67,17.38-2.02,33.99,5.82,48.19,18.47l36.55,32.44,9.31-10.4-36.55-32.51C123.85,7.08,103.52-2.08,81.95.4c-17.93,2.1-34.84,11.72-49.43,28.25l-13.89,15.68,20.87,18.55Z",
              fill: "#1E1E1E",
              className: l()(
                "transition-all duration-300 dark:fill-white",
                e || "dark" !== r ? "fill-black " : "fill-white"
              ),
            }),
          });
        },
        f = (t) => {
          let { mode: e, width: r = "w-52 md:w-72" } = t;
          return (0, n.jsx)("svg", {
            className: r,
            viewBox: "0 0 1037 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsxs)("g", {
              fill: "dark" === e ? "white" : "black",
              className: "transition-all duration-300 dark:fill-white",
              children: [
                (0, n.jsx)("path", {
                  d: "m9.79,24.06C3.29,22.98-1.05,18.24-1.05,12.28-1.05,5.04,4.3-.18,13.58-.18h39.68v6.84H13.58c-5.55,0-7.31,2.03-7.31,5.49,0,2.91,2.1,5.01,5.96,5.69l34.67,5.89c6.57,1.08,10.83,5.89,10.83,11.72,0,7.25-5.35,12.46-14.63,12.46H-.1v-6.84h43.2c5.49,0,7.31-2.03,7.31-5.42,0-3.05-2.17-5.21-6.03-5.82l-34.6-5.76Z",
                }),
                (0, n.jsx)("path", {
                  d: "m65.46,47.9V-.18h37.79c12.46,0,19.3,5.35,19.3,13.88s-7.72,13.88-19.3,13.88h-29.93v20.32h-7.86Zm7.86-26.68h29.93c7.25,0,11.38-2.78,11.38-7.52s-3.39-7.52-11.38-7.52h-29.93v15.03Z",
                }),
                (0, n.jsx)("path", {
                  d: "m152.82-.72l32.17,48.08h-8.94l-8.4-12.6h-37.65l-8.4,12.6h-8.67L145.03-.72h7.79Zm-18.42,29.12h29.12l-14.56-21.87-14.56,21.87Z",
                }),
                (0, n.jsx)("path", {
                  d: "m217.64,48.44c-22.82,0-34.4-8.6-34.4-24.24v-.68c0-15.64,11.58-24.24,34.4-24.24h.47c18.22,0,30.88,5.89,30.88,16.12v.34h-8.8v-.34c0-6.23-10.23-9.82-22.08-9.82h-.47c-18.08,0-26.07,6.5-26.07,17.95v.68c0,11.58,7.99,17.95,26.07,17.95h.47c11.85,0,22.08-3.59,22.08-9.82v-.34h8.8v.34c0,10.23-12.66,16.12-30.88,16.12h-.47Z",
                }),
                (0, n.jsx)("path", {
                  d: "m257.94,47.9V-.18h52.89v6.43h-45.03v14.76l45.03-.07v6.37l-45.03.07v14.09h45.03v6.43h-52.89Z",
                }),
                (0, n.jsx)("path", {
                  d: "m360.88,47.9V-.18h37.79c12.46,0,19.3,5.35,19.3,13.88s-7.72,13.88-19.3,13.88h-29.93v20.32h-7.86Zm7.86-26.68h29.93c7.25,0,11.38-2.78,11.38-7.52s-3.39-7.52-11.38-7.52h-29.93v15.03Z",
                }),
                (0, n.jsx)("path", {
                  d: "m427.32,47.9V-.18h52.89v6.43h-45.03v14.76l45.03-.07v6.37l-45.03.07v14.09h45.03v6.43h-52.89Z",
                }),
                (0, n.jsx)("path", {
                  d: "m548.2,47.9h-8.94l-12.46-20.32h-27.9v20.32h-7.86V-.18h37.79c12.46,0,19.3,5.35,19.3,13.95,0,6.84-4.47,11.65-12.8,13.27l12.87,20.86Zm-49.3-41.71v15.03h29.93c7.99,0,11.38-2.71,11.38-7.45s-3.39-7.58-11.38-7.58h-29.93Z",
                }),
                (0, n.jsx)("path", {
                  d: "m568.05,24.06c-6.5-1.08-10.83-5.82-10.83-11.78,0-7.25,5.35-12.46,14.63-12.46h39.68v6.84h-39.68c-5.55,0-7.31,2.03-7.31,5.49,0,2.91,2.1,5.01,5.96,5.69l34.67,5.89c6.57,1.08,10.83,5.89,10.83,11.72,0,7.25-5.35,12.46-14.63,12.46h-43.2v-6.84h43.2c5.49,0,7.31-2.03,7.31-5.42,0-3.05-2.17-5.21-6.03-5.82l-34.6-5.76Z",
                }),
                (0, n.jsx)("path", {
                  d: "m623.72,47.9V-.18h37.79c12.46,0,19.3,5.35,19.3,13.88s-7.72,13.88-19.3,13.88h-29.93v20.32h-7.86Zm7.86-26.68h29.93c7.25,0,11.38-2.78,11.38-7.52s-3.39-7.52-11.38-7.52h-29.93v15.03Z",
                }),
                (0, n.jsx)("path", {
                  d: "m690.16,47.9V-.18h52.89v6.43h-45.03v14.76l45.03-.07v6.37l-45.03.07v14.09h45.03v6.43h-52.89Z",
                }),
                (0, n.jsx)("path", {
                  d: "m785.18,48.44c-22.82,0-34.4-8.6-34.4-24.24v-.68c0-15.64,11.58-24.24,34.4-24.24h.47c18.22,0,30.88,5.89,30.88,16.12v.34h-8.8v-.34c0-6.23-10.23-9.82-22.08-9.82h-.47c-18.08,0-26.07,6.5-26.07,17.95v.68c0,11.58,7.99,17.95,26.07,17.95h.47c11.85,0,22.08-3.59,22.08-9.82v-.34h8.8v.34c0,10.23-12.66,16.12-30.88,16.12h-.47Z",
                }),
                (0, n.jsx)("path", {
                  d: "m847.55,6.46h-28.24V-.18h64.33v6.64h-28.24v41.44h-7.85V6.46Z",
                }),
                (0, n.jsx)("path", { d: "m890.02-.18h7.86v48.08h-7.86V-.18Z" }),
                (0, n.jsx)("path", {
                  d: "m904.58-.18h9.28l26.82,41.99L967.49-.18h9.14l-31.02,48.08h-10.09L904.58-.18Z",
                }),
                (0, n.jsx)("path", {
                  d: "m984.09,47.9V-.18h52.89v6.43h-45.03v14.76l45.03-.07v6.37l-45.03.07v14.09h45.03v6.43h-52.89Z",
                }),
              ],
            }),
          });
        };
      var p = r(47374),
        d = r(37347),
        h = r.n(d),
        m = r(1785),
        v = r.n(m),
        y = (t) => {
          let { mainNavigation: e, menuOpen: r, mode: a, setMenuOpen: u } = t,
            d = (0, i.useRouter)(),
            m = () => u(!r),
            [y, g] = (0, o.useState)(0),
            [b, w] = (0, o.useState)(0),
            [x, E] = (0, o.useState)(!1),
            S = (0, o.useRef)(),
            [j, A] = (0, o.useState)("you have not scrolled yet"),
            O = (0, o.useCallback)(() => {
              y > window.scrollY
                ? E(!0)
                : y < window.scrollY &&
                  window.scrollY > window.innerHeight / 2 &&
                  (console.log("down"), E(!1), A("down")),
                g(window.scrollY);
            }, [y]);
          (0, o.useEffect)(
            () => (
              "undefined" != typeof document &&
                window.addEventListener("scroll", O),
              () => {
                window.removeEventListener("scroll", O);
              }
            ),
            [O]
          );
          let k = () => {},
            P = (t) => {
              (window.mouseY = t.clientY), window.mouseY < 200 && E(!0);
            },
            T = () => {
              console.log("book now click"),
                v().dataLayer({
                  dataLayer: {
                    event: "addToCart",
                    ecommerce: {
                      currencyCode: "USD",
                      add: {
                        products: [
                          {
                            name: "Space Explorer - Individual Seat",
                            id: "Individual",
                            price: "1000",
                            brand: "Tour De Space",
                            quantity: 1,
                          },
                        ],
                      },
                    },
                  },
                });
            };
          return (
            (0, o.useEffect)(() => {
              new (h())("neue-haas-grotesk-text", { weight: 500 })
                .load(null, 5e3)
                .then(
                  function () {
                    w(S.current.offsetWidth);
                  },
                  function () {
                    console.log(
                      "Font is not available after waiting 5 seconds"
                    );
                  }
                );
            }, []),
            (0, o.useEffect)(
              () => (
                window.addEventListener("resize", k),
                window.addEventListener("mousemove", P),
                () => {
                  window.removeEventListener("resize", k),
                    window.removeEventListener("mousemove", P);
                }
              ),
              [S]
            ),
            (0, n.jsx)("header", {
              className: "fixed w-full top-0 z-50",
              children: (0, n.jsx)("div", {
                className: "site-container mx-auto px-6",
                children: (0, n.jsxs)("div", {
                  className: " flex justify-between mx-auto px-0 py-5",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "flex items-center justify-between whitespace-nowrap order-1",
                      children: (0, n.jsx)(s(), {
                        href: "/",
                        title: "Home",
                        className:
                          "uppercase tracking-wide mr-1 md:mr-8 xl:mr-12",
                        children: (0, n.jsx)(f, { mode: a }),
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "flex w-10 ease-out mr-auto top-0 z-50 sm:flex order-0 group sm:justify-center sm:items-center h-10 bg-gray-500 dark:bg-white bg-opacity-10 dark:bg-opacity-10 hover:bg-opacity-20 transition-all backdrop-brightness-20 backdrop-blur-md rounded-full xl:hidden items-center justify-end ",
                      children: (0, n.jsx)("div", {
                        className: "flex items-center justify-center mx-auto",
                        children: (0, n.jsx)("button", {
                          onClick: m,
                          type: "button",
                          className: "m-auto",
                          "aria-label": "toggle menu",
                          children: (0, n.jsxs)("svg", {
                            width: "14",
                            height: "12",
                            viewBox: "0 0 17 12",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              (0, n.jsx)("line", {
                                x1: "0",
                                y1: "1",
                                x2: "16",
                                y2: "1",
                                className: "dark:stroke-white stroke-black",
                              }),
                              (0, n.jsx)("line", {
                                x1: "0",
                                y1: "6",
                                x2: "16",
                                y2: "6",
                                className: "dark:stroke-white stroke-black",
                              }),
                              (0, n.jsx)("line", {
                                x1: "0",
                                y1: "11",
                                x2: "16",
                                y2: "11",
                                className: "dark:stroke-white stroke-black",
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, n.jsx)("nav", {
                      className: l()(
                        r ? "translate-x-0" : "-translate-x-full",
                        "block trasnform duration-500 max-w-lg fixed left-0 top-0 z-40 xl:hidden ease-out w-full dark:bg-opacity-100 h-full sm:flex order-0 group sm:justify-center sm:items-center bg-black transition-all"
                      ),
                      children: (0, n.jsxs)("div", {
                        className: "px-6 pt-24 pb-6 min-h mr-auto mb-auto",
                        children: [
                          null == e
                            ? void 0
                            : e.map((t, e) =>
                                (0, n.jsx)(
                                  "div",
                                  {
                                    children: (0, n.jsx)(s(), {
                                      activeClassName: "active",
                                      href: "/".concat(t.slug.current),
                                      onClick: m,
                                      title: t.title,
                                      className: l()(
                                        (
                                          null == d
                                            ? void 0
                                            : d.asPath.includes(
                                                "/".concat(t.slug.current)
                                              )
                                        )
                                          ? "active opacity-100"
                                          : " opacity-70",
                                        "h1 my-2 block text-white"
                                      ),
                                      children: t.title,
                                    }),
                                  },
                                  "nav-".concat(t._id, "-").concat(e)
                                )
                              ),
                          (0, n.jsx)("div", {
                            className: "pt-16 block",
                            children: (0, n.jsx)(s(), {
                              href: "https://reserve.spaceperspective.com/",
                              onClick: T,
                              className: "btn-glow",
                              title: "Book Now",
                              children: "Book Now",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)("nav", {
                      onMouseOver: () => {
                        E(!0);
                      },
                      onMouseOut: () => {
                        E(!1);
                      },
                      id: "MainNav",
                      ref: S,
                      style: {
                        transitionDelay: x
                          ? "0s"
                          : b > 0 && "down" === j
                          ? "1.5s"
                          : "0s",
                        width: x
                          ? b
                          : b > 0
                          ? "down" === j
                            ? "40px"
                            : b
                          : "auto",
                      },
                      className: l()(
                        "",
                        "hidden xl:flex ease-out mr-auto top-0 z-50 order-0 group sm:justify-center sm:items-center h-10 bg-gray-500 dark:bg-white bg-opacity-10 dark:bg-opacity-20 hover:bg-opacity-20 transition-all backdrop-brightness-20 backdrop-blur-md rounded-full -ml-1"
                      ),
                      children: (0, n.jsxs)("div", {
                        className: l()(
                          "flex gap-1 mr-auto w-full top-0 z-50  items-center"
                        ),
                        children: [
                          (0, n.jsx)(s(), {
                            activeClassName: "active",
                            href: "/",
                            legacyBehavior: !0,
                            children: (0, n.jsx)(p.E.a, {
                              title: "Home",
                              href: "/",
                              className: l()(
                                "/" == (null == d ? void 0 : d.asPath)
                                  ? "active"
                                  : "",
                                "hidden btn-nav p-0 cursor-pointer xl:flex nav-logomark items-center w-10 flex-0 flex-shrink-0 justify-center relative z-10"
                              ),
                              children: (0, n.jsx)(c, {
                                active: "/" == (null == d ? void 0 : d.asPath),
                                mode: a,
                              }),
                            }),
                          }),
                          null == e
                            ? void 0
                            : e.map((t, r) =>
                                (0, n.jsx)(
                                  "div",
                                  {
                                    className: l()(
                                      x || "down" !== j
                                        ? "opacity-100"
                                        : "opacity-0",
                                      "hidden lg:block transition-opacity duration-75  h-10"
                                    ),
                                    style: {
                                      transitionDelay: "".concat(
                                        x || "down" !== j
                                          ? ".05" * r
                                          : 1 + ".05" * (e.length - r),
                                        "s"
                                      ),
                                    },
                                    children: (0, n.jsx)(s(), {
                                      activeClassName: "active",
                                      href: "/".concat(t.slug.current),
                                      title: t.title,
                                      className: l()(
                                        (
                                          null == d
                                            ? void 0
                                            : d.asPath.includes(
                                                "/".concat(t.slug.current)
                                              )
                                        )
                                          ? "active"
                                          : "",
                                        "btn-nav"
                                      ),
                                      children: t.title,
                                    }),
                                  },
                                  "nav-".concat(t._id, "-").concat(r)
                                )
                              ),
                        ],
                      }),
                    }),
                    (0, n.jsx)("nav", {
                      className:
                        "hidden md:grid grid-flow-col gap-3 order-last sm:justify-center sm:items-center  bg-opacity-10 hover:bg-opacity-20 transition-all duration-500 backdrop-brightness-20 backdrop-blur-md rounded-full",
                      children: (0, n.jsx)(s(), {
                        href: "https://reserve.spaceperspective.com/",
                        onClick: T,
                        className: "btn-glow",
                        title: "Book Now",
                        children: "Book Now",
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        g = r(1259),
        b = r(49298),
        w = (t) => {
          let { site: e } = t,
            r = (null == e ? void 0 : e.footerNavigation1Title) || "",
            o = (null == e ? void 0 : e.footerNavigation2Title) || "",
            i = (null == e ? void 0 : e.footerNavigation3Title) || "",
            a = (null == e ? void 0 : e.footerNavigation4Title) || "",
            u = (null == e ? void 0 : e.footerNavigation1) || [],
            l = (null == e ? void 0 : e.footerNavigation2) || [],
            c = (null == e ? void 0 : e.footerNavigation3) || [],
            f = (null == e ? void 0 : e.footerNavigation4) || [];
          return (0, n.jsxs)("footer", {
            className: "relative text-base pt-40 z-10 overflow-x-hidden",
            children: [
              (0, n.jsx)("div", {
                className: "site-container",
                children: (0, n.jsxs)("div", {
                  className:
                    "flex z-10 flex-col max-w-lg mr-auto my-20 dark:border-white dark:border dark:border-opacity-30 bg-white dark:bg-black dark:bg-opacity-50 shadow-2xl backdrop-blur-xl rounded-lg p-6 text-black relative",
                  children: [
                    (0, n.jsx)("p", {
                      className:
                        "label absolute top-0 left-0 p-4 px-6 utility-text dark:text-white",
                      children: "Newsletter",
                    }),
                    (0, n.jsx)("p", {
                      className: "text-left mt-4 text-black dark:text-white",
                      children: "Updates from Mission Control",
                    }),
                    (0, n.jsx)(b.Z, {
                      className: "ctct-inline-form",
                      formId: "4791aa81-f507-4b87-9b5a-ca782d89b95a",
                      type: "newsletter",
                    }),
                  ],
                }),
              }),
              (0, n.jsxs)("div", {
                className:
                  "site-container relative z-10 pb-6 mx-auto grid grid-flow-row gap-6",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex-col justify-between  max-w-xl",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "max-w-xs py-20",
                        children: [
                          (0, n.jsx)("p", {
                            className: "mb-2 utility-text",
                            children: "Location",
                          }),
                          "1 Bristow Way",
                          (0, n.jsx)("br", {}),
                          "Titusville, FL 32780",
                          (0, n.jsx)("br", {}),
                          "United States",
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "pb-20",
                        children: (0, n.jsxs)("nav", {
                          className: "grid md:grid-flow-col gap-6",
                          children: [
                            (0, n.jsxs)("ul", {
                              className: "pb-8 md:pb-0",
                              children: [
                                (0, n.jsx)("li", {
                                  children:
                                    r &&
                                    (0, n.jsx)("p", {
                                      className: "mb-2 utility-text",
                                      children: r,
                                    }),
                                }),
                                null == u
                                  ? void 0
                                  : u.map((t) =>
                                      (0, n.jsx)(
                                        "li",
                                        {
                                          children: (0, n.jsx)(s(), {
                                            href: "/".concat(t.slug.current),
                                            className: "py-1 block",
                                            title: t.title,
                                            children: t.title,
                                          }),
                                        },
                                        "footer-nav-1-".concat(t._id)
                                      )
                                    ),
                              ],
                            }),
                            (0, n.jsxs)("ul", {
                              className: "pb-8 md:pb-0",
                              children: [
                                (0, n.jsx)("li", {
                                  children:
                                    o &&
                                    (0, n.jsx)("p", {
                                      className: "mb-2 utility-text",
                                      children: o,
                                    }),
                                }),
                                null == l
                                  ? void 0
                                  : l.map((t) =>
                                      (0, n.jsx)(
                                        "li",
                                        {
                                          children: (0, n.jsx)(s(), {
                                            href: "/".concat(t.slug.current),
                                            className: "py-1 block",
                                            title: t.title,
                                            children: t.title,
                                          }),
                                        },
                                        "footer-nav-2-".concat(t._id)
                                      )
                                    ),
                              ],
                            }),
                            (0, n.jsxs)("ul", {
                              className: "pb-8 md:pb-0",
                              children: [
                                (0, n.jsx)("li", {
                                  children:
                                    i &&
                                    (0, n.jsx)("p", {
                                      className: "mb-2 utility-text",
                                      children: i,
                                    }),
                                }),
                                null == c
                                  ? void 0
                                  : c.map((t) =>
                                      (0, n.jsx)(
                                        "li",
                                        {
                                          children: (0, n.jsx)(s(), {
                                            href: "/".concat(t.slug.current),
                                            className: "py-1 block",
                                            title: t.title,
                                            children: t.title,
                                          }),
                                        },
                                        "footer-nav-3-".concat(t._id)
                                      )
                                    ),
                              ],
                            }),
                            (0, n.jsxs)("ul", {
                              className: "",
                              children: [
                                (0, n.jsx)("li", {
                                  children:
                                    a &&
                                    (0, n.jsx)("p", {
                                      className: "mb-2 utility-text",
                                      children: a,
                                    }),
                                }),
                                null == f
                                  ? void 0
                                  : f.map((t, e) =>
                                      (0, n.jsx)(
                                        "li",
                                        {
                                          children: (0, n.jsx)("a", {
                                            className: "py-1 block",
                                            title: t.name,
                                            target: "blank",
                                            href: "".concat(t.url),
                                            children: t.name,
                                          }),
                                        },
                                        "footer-nav-4-".concat(e)
                                      )
                                    ),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "pb-10",
                    children: (0, n.jsx)("a", {
                      className:
                        "text-sm border rounded-full py-2 px-6 -ml-1 border-opacity-50 border-black dark:border-white",
                      href: "https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=0ab52f19-e16b-4ec2-8ecc-4aa01ef5ea65&ccId=19000101_000001&lang=en_US&selectedMenuKey=CurrentOpenings",
                      title: "Join us in changing the future of space travel",
                      target: "blank",
                      children: "Join our team  ↗",
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "flex gap-4 items-center text-xs",
                    children: (0, n.jsxs)("copy", {
                      className: "text-xs",
                      children: [
                        "© Tour De Space ",
                        new Date().getFullYear(),
                        ". All rights reserved.",
                      ],
                    }),
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                style: { height: "100vh" },
                className:
                  "absolute bottom-0 pointer-events-none left-0 w-screen z-0",
                children: (0, n.jsx)(g.Z, {
                  src: "gradients/footer-gradient.webp",
                  alt: "gradient",
                  className: "max-w-none absolute w-full h-full object-cover",
                  layout: "fill",
                  loading: "lazy",
                }),
              }),
            ],
          });
        },
        x = function (t) {
          let { children: e, site: r, mode: i = "dark" } = t,
            a = (null == r ? void 0 : r.mainNavigation) || [],
            [s, u] = (0, o.useState)(!1);
          return (0, n.jsx)("div", {
            id: "Container",
            className: i,
            children: (0, n.jsxs)("div", {
              className: "bg-white dark:bg-black min-h-screen ",
              children: [
                (0, n.jsx)(y, {
                  mode: i,
                  menuOpen: s,
                  setMenuOpen: u,
                  mainNavigation: a,
                }),
                (0, n.jsx)("main", { children: e }),
                (0, n.jsx)(w, { site: r }),
              ],
            }),
          });
        },
        E = r(19252),
        S = r(4298),
        j = r.n(S),
        A = r(48764).lW;
      function O() {
        return (O =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function k(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = {},
          i = Object.keys(t);
        for (n = 0; n < i.length; n++)
          e.indexOf((r = i[n])) >= 0 || (o[r] = t[r]);
        return o;
      }
      (0, o.forwardRef)(function (t, e) {
        var r = t.style,
          n = t.center,
          i = void 0 === n || n,
          a = t.useNativeValues,
          s = k(t, ["style", "center", "useNativeValues"]);
        return o.createElement(
          "div",
          O(
            {
              style: O(
                {},
                r,
                { width: a ? "100vw" : "calc(var(--vw) * 100)" },
                i
                  ? {
                      position: "relative",
                      transform: "translateX(-50%)",
                      left: "50%",
                    }
                  : void 0
              ),
            },
            s,
            { ref: e }
          )
        );
      }),
        (0, o.forwardRef)(function (t, e) {
          var r = t.style,
            n = k(t, ["style"]);
          return o.createElement(
            "div",
            O({ style: O({}, r, { height: "calc(var(--vh) * 100)" }) }, n, {
              ref: e,
            })
          );
        });
      var P = (0, o.createContext)(void 0),
        T = (0, o.memo)(function (t) {
          var e,
            r = t.prefix,
            n =
              "data:text/javascript;base64," +
              ((e =
                "(function() {\n    var d = document.documentElement;\n    d.style.setProperty('--" +
                r +
                "vw', (d.clientWidth || window.innerWidth) / 100 + 'px');\n    d.style.setProperty('--" +
                r +
                "vh', (d.clientHeight || window.innerHeight) / 100 + 'px');\n}())"),
              "undefined" != typeof window
                ? window.btoa(e)
                : A.from(e).toString("base64"));
          return o.createElement(j(), {
            key: "real-viewport-script",
            strategy: "beforeInteractive",
            src: n,
          });
        }),
        C = function (t) {
          var e,
            r,
            n,
            i = t.children,
            a = t.debounceResize,
            s = void 0 === a || a,
            u = t.variablesPrefix,
            l = void 0 === u ? "" : u,
            c = (0, o.useState)({ vw: void 0, vh: void 0 }),
            f = c[0],
            p = c[1],
            d = ((r = (e = (0, o.useState)())[0]),
            (n = e[1]),
            (0, o.useEffect)(function () {
              var t = window.navigator ? window.navigator.userAgent : "",
                e = t.match(/iPad/i) || t.match(/iPhone/i),
                r = t.match(/WebKit/i),
                o = e && r && !t.match(/CriOS/i),
                i = window.innerHeight;
              function a() {
                n(!(window.innerHeight - 50 > i));
              }
              if (o) {
                if (
                  !("standalone" in window.navigator) ||
                  !window.navigator.standalone
                )
                  return (
                    document.addEventListener("scroll", a),
                    function () {
                      document.removeEventListener("scroll", a);
                    }
                  );
                n(!1);
              }
            }, []),
            { isVisible: r }).isVisible,
            h = (0, o.useCallback)(
              function () {
                var t = parseFloat((0.01 * window.innerWidth).toFixed(4)),
                  e = parseFloat((0.01 * window.innerHeight).toFixed(4));
                document.documentElement.style.setProperty(
                  "--" + l + "vw",
                  t + "px"
                ),
                  document.documentElement.style.setProperty(
                    "--" + l + "vh",
                    e + "px"
                  ),
                  p({ vw: t, vh: e });
              },
              [l]
            );
          return (
            (0, o.useEffect)(
              function () {
                h();
                var t,
                  e = s
                    ? function () {
                        t && window.clearTimeout(t),
                          (t = window.setTimeout(function () {
                            (t = null), h();
                          }, 250));
                      }
                    : h;
                return (
                  window.addEventListener("resize", e),
                  window.addEventListener("orientationchange", e),
                  function () {
                    window.removeEventListener("resize", e),
                      window.removeEventListener("orientationchange", e);
                  }
                );
              },
              [l, s, d, h]
            ),
            (0, o.useEffect)(
              function () {
                var t = window.setTimeout(h, 200);
                return function () {
                  window.clearTimeout(t);
                };
              },
              [d]
            ),
            o.createElement(
              P.Provider,
              { value: O({}, f, { isIOSToolbarVisible: d }) },
              o.createElement(T, { prefix: l }),
              i
            )
          );
        },
        L = r(2962),
        R = r(31202);
      E.Z.addDefaultLocale({
        locale: "en",
        long: {
          year: {
            previous: "last year",
            current: "this year",
            next: "next year",
            past: { one: "{0} year ago", other: "{0} years ago" },
            future: { one: "in {0} year", other: "in {0} years" },
          },
          quarter: {
            previous: "last quarter",
            current: "this quarter",
            next: "next quarter",
            past: { one: "{0} quarter ago", other: "{0} quarters ago" },
            future: { one: "in {0} quarter", other: "in {0} quarters" },
          },
          month: {
            previous: "last month",
            current: "this month",
            next: "next month",
            past: { one: "{0} month ago", other: "{0} months ago" },
            future: { one: "in {0} month", other: "in {0} months" },
          },
          week: {
            previous: "last week",
            current: "this week",
            next: "next week",
            past: { one: "{0} week ago", other: "{0} weeks ago" },
            future: { one: "in {0} week", other: "in {0} weeks" },
          },
          day: {
            previous: "yesterday",
            current: "today",
            next: "tomorrow",
            past: { one: "{0} day ago", other: "{0} days ago" },
            future: { one: "in {0} day", other: "in {0} days" },
          },
          hour: {
            current: "this hour",
            past: { one: "{0} hour ago", other: "{0} hours ago" },
            future: { one: "in {0} hour", other: "in {0} hours" },
          },
          minute: {
            current: "this minute",
            past: { one: "{0} minute ago", other: "{0} minutes ago" },
            future: { one: "in {0} minute", other: "in {0} minutes" },
          },
          second: {
            current: "now",
            past: { one: "{0} second ago", other: "{0} seconds ago" },
            future: { one: "in {0} second", other: "in {0} seconds" },
          },
        },
        short: {
          year: {
            previous: "last yr.",
            current: "this yr.",
            next: "next yr.",
            past: "{0} yr. ago",
            future: "in {0} yr.",
          },
          quarter: {
            previous: "last qtr.",
            current: "this qtr.",
            next: "next qtr.",
            past: { one: "{0} qtr. ago", other: "{0} qtrs. ago" },
            future: { one: "in {0} qtr.", other: "in {0} qtrs." },
          },
          month: {
            previous: "last mo.",
            current: "this mo.",
            next: "next mo.",
            past: "{0} mo. ago",
            future: "in {0} mo.",
          },
          week: {
            previous: "last wk.",
            current: "this wk.",
            next: "next wk.",
            past: "{0} wk. ago",
            future: "in {0} wk.",
          },
          day: {
            previous: "yesterday",
            current: "today",
            next: "tomorrow",
            past: { one: "{0} day ago", other: "{0} days ago" },
            future: { one: "in {0} day", other: "in {0} days" },
          },
          hour: {
            current: "this hour",
            past: "{0} hr. ago",
            future: "in {0} hr.",
          },
          minute: {
            current: "this minute",
            past: "{0} min. ago",
            future: "in {0} min.",
          },
          second: {
            current: "now",
            past: "{0} sec. ago",
            future: "in {0} sec.",
          },
        },
        narrow: {
          year: {
            previous: "last yr.",
            current: "this yr.",
            next: "next yr.",
            past: "{0} yr. ago",
            future: "in {0} yr.",
          },
          quarter: {
            previous: "last qtr.",
            current: "this qtr.",
            next: "next qtr.",
            past: { one: "{0} qtr. ago", other: "{0} qtrs. ago" },
            future: { one: "in {0} qtr.", other: "in {0} qtrs." },
          },
          month: {
            previous: "last mo.",
            current: "this mo.",
            next: "next mo.",
            past: "{0} mo. ago",
            future: "in {0} mo.",
          },
          week: {
            previous: "last wk.",
            current: "this wk.",
            next: "next wk.",
            past: "{0} wk. ago",
            future: "in {0} wk.",
          },
          day: {
            previous: "yesterday",
            current: "today",
            next: "tomorrow",
            past: { one: "{0} day ago", other: "{0} days ago" },
            future: { one: "in {0} day", other: "in {0} days" },
          },
          hour: {
            current: "this hour",
            past: "{0} hr. ago",
            future: "in {0} hr.",
          },
          minute: {
            current: "this minute",
            past: "{0} min. ago",
            future: "in {0} min.",
          },
          second: {
            current: "now",
            past: "{0} sec. ago",
            future: "in {0} sec.",
          },
        },
        now: {
          now: { current: "now", future: "in a moment", past: "just now" },
        },
        mini: {
          year: "{0}yr",
          month: "{0}mo",
          week: "{0}wk",
          day: "{0}d",
          hour: "{0}h",
          minute: "{0}m",
          second: "{0}s",
          now: "now",
        },
        "short-time": {
          year: "{0} yr.",
          month: "{0} mo.",
          week: "{0} wk.",
          day: { one: "{0} day", other: "{0} days" },
          hour: "{0} hr.",
          minute: "{0} min.",
          second: "{0} sec.",
        },
        "long-time": {
          year: { one: "{0} year", other: "{0} years" },
          month: { one: "{0} month", other: "{0} months" },
          week: { one: "{0} week", other: "{0} weeks" },
          day: { one: "{0} day", other: "{0} days" },
          hour: { one: "{0} hour", other: "{0} hours" },
          minute: { one: "{0} minute", other: "{0} minutes" },
          second: { one: "{0} second", other: "{0} seconds" },
        },
      });
      var M = function (t) {
        var e;
        let { Component: r, pageProps: a } = t,
          { site: s } = a,
          u = (null === (e = a.page) || void 0 === e ? void 0 : e.lightMode)
            ? "light"
            : "dark";
        return (
          (0, o.useEffect)(() => {
            v().initialize({ gtmId: "GTM-5DMVHS2" });
          }, []),
          (0, i.useRouter)().asPath.includes("/studio")
            ? (0, n.jsx)(r, { ...a })
            : (0, n.jsxs)(C, {
                children: [
                  (0, n.jsx)(L.lX, {
                    canonical: "https://www.spaceperspective.com/",
                    openGraph: {
                      type: "website",
                      locale: "en_IE",
                      url: "https://www.spaceperspective.com/",
                      site_name: "Tour De Space",
                    },
                    twitter: {
                      handle: "@spaceperspectiv",
                      site: "https://www.spaceperspective.com/",
                      cardType: "summary_large_image",
                    },
                  }),
                  (0, n.jsx)(R.g, {
                    children: (0, n.jsx)(x, {
                      site: s,
                      mode: u,
                      children: (0, n.jsx)(r, { ...a }),
                    }),
                  }),
                ],
              })
        );
      };
    },
    58964: function () {},
    9008: function (t, e, r) {
      t.exports = r(42636);
    },
    89755: function (t, e, r) {
      t.exports = r(15619);
    },
    41664: function (t, e, r) {
      t.exports = r(95569);
    },
    11163: function (t, e, r) {
      t.exports = r(96885);
    },
    4298: function (t, e, r) {
      t.exports = r(85442);
    },
    34155: function (t) {
      var e,
        r,
        n,
        o = (t.exports = {});
      function i() {
        throw Error("setTimeout has not been defined");
      }
      function a() {
        throw Error("clearTimeout has not been defined");
      }
      function s(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === i || !e) && setTimeout)
          return (e = setTimeout), setTimeout(t, 0);
        try {
          return e(t, 0);
        } catch (r) {
          try {
            return e.call(null, t, 0);
          } catch (r) {
            return e.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          e = "function" == typeof setTimeout ? setTimeout : i;
        } catch (t) {
          e = i;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (t) {
          r = a;
        }
      })();
      var u = [],
        l = !1,
        c = -1;
      function f() {
        l &&
          n &&
          ((l = !1), n.length ? (u = n.concat(u)) : (c = -1), u.length && p());
      }
      function p() {
        if (!l) {
          var t = s(f);
          l = !0;
          for (var e = u.length; e; ) {
            for (n = u, u = []; ++c < e; ) n && n[c].run();
            (c = -1), (e = u.length);
          }
          (n = null),
            (l = !1),
            (function (t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === a || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(t);
              try {
                r(t);
              } catch (e) {
                try {
                  return r.call(null, t);
                } catch (e) {
                  return r.call(this, t);
                }
              }
            })(t);
        }
      }
      function d(t, e) {
        (this.fun = t), (this.array = e);
      }
      function h() {}
      (o.nextTick = function (t) {
        var e = Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        u.push(new d(t, e)), 1 !== u.length || l || s(p);
      }),
        (d.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = "browser"),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ""),
        (o.versions = {}),
        (o.on = h),
        (o.addListener = h),
        (o.once = h),
        (o.off = h),
        (o.removeListener = h),
        (o.removeAllListeners = h),
        (o.emit = h),
        (o.prependListener = h),
        (o.prependOnceListener = h),
        (o.listeners = function (t) {
          return [];
        }),
        (o.binding = function (t) {
          throw Error("process.binding is not supported");
        }),
        (o.cwd = function () {
          return "/";
        }),
        (o.chdir = function (t) {
          throw Error("process.chdir is not supported");
        }),
        (o.umask = function () {
          return 0;
        });
    },
    56421: function (t, e, r) {
      "use strict";
      var n,
        o = (n = r(96425)) && n.__esModule ? n : { default: n };
      t.exports = {
        tags: function (t) {
          var e = t.id,
            r = t.events,
            n = t.dataLayer,
            i = t.dataLayerName,
            a = t.preview,
            s = "&gtm_auth=" + t.auth,
            u = "&gtm_preview=" + a;
          return (
            e || (0, o.default)("GTM Id is required"),
            {
              iframe:
                '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' +
                e +
                s +
                u +
                '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
              script:
                "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " +
                JSON.stringify(r).slice(1, -1) +
                "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" +
                s +
                u +
                "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" +
                i +
                "','" +
                e +
                "');",
              dataLayerVar: this.dataLayer(n, i),
            }
          );
        },
        dataLayer: function (t, e) {
          return (
            "\n      window." +
            e +
            " = window." +
            e +
            " || [];\n      window." +
            e +
            ".push(" +
            JSON.stringify(t) +
            ")"
          );
        },
      };
    },
    58676: function (t, e, r) {
      "use strict";
      var n,
        o = (n = r(56421)) && n.__esModule ? n : { default: n };
      t.exports = {
        dataScript: function (t) {
          var e = document.createElement("script");
          return (e.innerHTML = t), e;
        },
        gtm: function (t) {
          var e = o.default.tags(t);
          return {
            noScript: function () {
              var t = document.createElement("noscript");
              return (t.innerHTML = e.iframe), t;
            },
            script: function () {
              var t = document.createElement("script");
              return (t.innerHTML = e.script), t;
            },
            dataScript: this.dataScript(e.dataLayerVar),
          };
        },
        initialize: function (t) {
          var e = t.gtmId,
            r = t.events,
            n = t.dataLayer,
            o = t.dataLayerName,
            i = t.auth,
            a = t.preview,
            s = this.gtm({
              id: e,
              events: void 0 === r ? {} : r,
              dataLayer: n || void 0,
              dataLayerName: void 0 === o ? "dataLayer" : o,
              auth: void 0 === i ? "" : i,
              preview: void 0 === a ? "" : a,
            });
          n && document.head.appendChild(s.dataScript),
            document.head.insertBefore(s.script(), document.head.childNodes[0]),
            document.body.insertBefore(
              s.noScript(),
              document.body.childNodes[0]
            );
        },
        dataLayer: function (t) {
          var e = t.dataLayer,
            r = t.dataLayerName,
            n = void 0 === r ? "dataLayer" : r;
          if (window[n]) return window[n].push(e);
          var i = o.default.dataLayer(e, n),
            a = this.dataScript(i);
          document.head.insertBefore(a, document.head.childNodes[0]);
        },
      };
    },
    1785: function (t, e, r) {
      "use strict";
      var n,
        o = (n = r(58676)) && n.__esModule ? n : { default: n };
      t.exports = o.default;
    },
    96425: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t) {
          console.warn("[react-gtm]", t);
        });
    },
    16014: function (t, e, r) {
      "use strict";
      r.d(e, {
        _: function () {
          return n;
        },
      });
      var n = (0, r(67294).createContext)({
        transformPagePoint: function (t) {
          return t;
        },
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    47374: function (t, e, r) {
      "use strict";
      r.d(e, {
        E: function () {
          return _o;
        },
      });
      var n,
        o,
        i,
        a,
        s,
        u = r(97582),
        l = r(67294),
        c = r(34155),
        f = (void 0 === c || c.env, "production"),
        p = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (t) {
                return !!e[t];
              });
            },
          };
        },
        d = {
          measureLayout: p(["layout", "layoutId", "drag"]),
          animation: p([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: p(["exit"]),
          drag: p(["drag", "dragControls"]),
          focus: p(["whileFocus"]),
          hover: p(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: p(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: p(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: p(["whileInView", "onViewportEnter", "onViewportLeave"]),
        },
        h = r(24394),
        m = (0, l.createContext)({ strict: !1 }),
        v = Object.keys(d),
        y = v.length,
        g = r(16014),
        b = (0, l.createContext)({}),
        w = (0, l.createContext)(null),
        x = r(58868),
        E = r(11741),
        S = { current: null },
        j = !1;
      function A(t) {
        return (
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function O(t) {
        return Array.isArray(t);
      }
      function k(t) {
        return "string" == typeof t || O(t);
      }
      function P(t, e, r, n, o) {
        var i;
        return (
          void 0 === n && (n = {}),
          void 0 === o && (o = {}),
          "function" == typeof e && (e = e(null != r ? r : t.custom, n, o)),
          "string" == typeof e &&
            (e = null === (i = t.variants) || void 0 === i ? void 0 : i[e]),
          "function" == typeof e && (e = e(null != r ? r : t.custom, n, o)),
          e
        );
      }
      function T(t, e, r) {
        var n,
          o,
          i = t.getProps();
        return P(
          i,
          e,
          null != r ? r : i.custom,
          ((n = {}),
          t.forEachValue(function (t, e) {
            return (n[e] = t.get());
          }),
          n),
          ((o = {}),
          t.forEachValue(function (t, e) {
            return (o[e] = t.getVelocity());
          }),
          o)
        );
      }
      function C(t) {
        var e;
        return (
          "function" ==
            typeof (null === (e = t.animate) || void 0 === e
              ? void 0
              : e.start) ||
          k(t.initial) ||
          k(t.animate) ||
          k(t.whileHover) ||
          k(t.whileDrag) ||
          k(t.whileTap) ||
          k(t.whileFocus) ||
          k(t.exit)
        );
      }
      function L(t) {
        return !(!C(t) && !t.variants);
      }
      function R(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var M = r(96681),
        N = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        V = 1,
        I = (0, l.createContext)({}),
        D = (0, l.createContext)({}),
        B = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, u.ZT)(e, t),
            (e.prototype.getSnapshotBeforeUpdate = function () {
              return this.updateProps(), null;
            }),
            (e.prototype.componentDidUpdate = function () {}),
            (e.prototype.updateProps = function () {
              var t = this.props,
                e = t.visualElement,
                r = t.props;
              e && e.setProps(r);
            }),
            (e.prototype.render = function () {
              return this.props.children;
            }),
            e
          );
        })(l.Component),
        U = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "svg",
          "switch",
          "symbol",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function _(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (U.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      var F = {},
        z = ["", "X", "Y", "Z"],
        G = ["transformPerspective", "x", "y", "z"];
      function W(t, e) {
        return G.indexOf(t) - G.indexOf(e);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (t) {
        return z.forEach(function (e) {
          return G.push(t + e);
        });
      });
      var H = new Set(G);
      function q(t) {
        return H.has(t);
      }
      var Y = new Set(["originX", "originY", "originZ"]);
      function Z(t, e) {
        var r = e.layout,
          n = e.layoutId;
        return (
          q(t) ||
          Y.has(t) ||
          ((r || void 0 !== n) && (!!F[t] || "opacity" === t))
        );
      }
      var $ = function (t) {
          return !(null === t || "object" != typeof t || !t.getVelocity);
        },
        K = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        };
      function X(t) {
        return t.startsWith("--");
      }
      var J = r(2969),
        Q = r(11248),
        tt = (0, u.pi)((0, u.pi)({}, Q.Rx), { transform: Math.round }),
        et = {
          borderWidth: J.px,
          borderTopWidth: J.px,
          borderRightWidth: J.px,
          borderBottomWidth: J.px,
          borderLeftWidth: J.px,
          borderRadius: J.px,
          radius: J.px,
          borderTopLeftRadius: J.px,
          borderTopRightRadius: J.px,
          borderBottomRightRadius: J.px,
          borderBottomLeftRadius: J.px,
          width: J.px,
          maxWidth: J.px,
          height: J.px,
          maxHeight: J.px,
          size: J.px,
          top: J.px,
          right: J.px,
          bottom: J.px,
          left: J.px,
          padding: J.px,
          paddingTop: J.px,
          paddingRight: J.px,
          paddingBottom: J.px,
          paddingLeft: J.px,
          margin: J.px,
          marginTop: J.px,
          marginRight: J.px,
          marginBottom: J.px,
          marginLeft: J.px,
          rotate: J.RW,
          rotateX: J.RW,
          rotateY: J.RW,
          rotateZ: J.RW,
          scale: Q.bA,
          scaleX: Q.bA,
          scaleY: Q.bA,
          scaleZ: Q.bA,
          skew: J.RW,
          skewX: J.RW,
          skewY: J.RW,
          distance: J.px,
          translateX: J.px,
          translateY: J.px,
          translateZ: J.px,
          x: J.px,
          y: J.px,
          z: J.px,
          perspective: J.px,
          transformPerspective: J.px,
          opacity: Q.Fq,
          originX: J.$C,
          originY: J.$C,
          originZ: J.px,
          zIndex: tt,
          fillOpacity: Q.Fq,
          strokeOpacity: Q.Fq,
          numOctaves: tt,
        };
      function rt(t, e, r, n) {
        var o,
          i,
          a,
          s,
          u,
          l,
          c = t.style,
          f = t.vars,
          p = t.transform,
          d = t.transformKeys,
          h = t.transformOrigin;
        d.length = 0;
        var m = !1,
          v = !1,
          y = !0;
        for (var g in e) {
          var b = e[g];
          if (X(g)) f[g] = b;
          else {
            var w = et[g],
              x = w && "number" == typeof b ? w.transform(b) : b;
            if (q(g)) {
              if (((m = !0), (p[g] = x), d.push(g), !y)) continue;
              b !== (null !== (l = w.default) && void 0 !== l ? l : 0) &&
                (y = !1);
            } else Y.has(g) ? ((h[g] = x), (v = !0)) : (c[g] = x);
          }
        }
        m
          ? (c.transform = (function (t, e, r, n) {
              var o = t.transform,
                i = t.transformKeys,
                a = e.enableHardwareAcceleration,
                s = e.allowTransformNone,
                u = "";
              i.sort(W);
              for (var l = !1, c = i.length, f = 0; f < c; f++) {
                var p = i[f];
                (u += "".concat(K[p] || p, "(").concat(o[p], ") ")),
                  "z" === p && (l = !0);
              }
              return (
                l || (void 0 !== a && !a)
                  ? (u = u.trim())
                  : (u += "translateZ(0)"),
                n
                  ? (u = n(o, r ? "" : u))
                  : (void 0 === s || s) && r && (u = "none"),
                u
              );
            })(t, r, y, n))
          : n
          ? (c.transform = n({}, ""))
          : !e.transform && c.transform && (c.transform = "none"),
          v &&
            (c.transformOrigin =
              ((o = h.originX),
              (a = void 0 === (i = h.originY) ? "50%" : i),
              (u = void 0 === (s = h.originZ) ? 0 : s),
              ""
                .concat(void 0 === o ? "50%" : o, " ")
                .concat(a, " ")
                .concat(u)));
      }
      var nt = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function ot(t, e, r) {
        for (var n in e) $(e[n]) || Z(n, r) || (t[n] = e[n]);
      }
      function it(t, e, r) {
        var n,
          o,
          i = {},
          a =
            (ot((n = {}), t.style || {}, t),
            Object.assign(
              n,
              ((o = t.transformTemplate),
              (0, l.useMemo)(
                function () {
                  var t = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  rt(t, e, { enableHardwareAcceleration: !r }, o);
                  var n = t.vars,
                    i = t.style;
                  return (0, u.pi)((0, u.pi)({}, n), i);
                },
                [e]
              ))
            ),
            t.transformValues && (n = t.transformValues(n)),
            n);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((i.draggable = !1),
            (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
            (a.touchAction =
              !0 === t.drag
                ? "none"
                : "pan-".concat("x" === t.drag ? "y" : "x"))),
          (i.style = a),
          i
        );
      }
      var at = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "layoutScroll",
      ]);
      function st(t) {
        return at.has(t);
      }
      var ut = function (t) {
        return !st(t);
      };
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (ut = function (t) {
            return t.startsWith("on") ? !st(t) : n(t);
          });
      } catch (t) {}
      function lt(t, e, r) {
        return "string" == typeof t ? t : J.px.transform(e + r * t);
      }
      var ct = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        ft = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function pt(t, e, r, n) {
        var o,
          i,
          a,
          s,
          l,
          c,
          f,
          p,
          d,
          h = e.attrX,
          m = e.attrY,
          v = e.originX,
          y = e.originY,
          g = e.pathLength,
          b = e.pathSpacing,
          w = e.pathOffset;
        rt(
          t,
          (0, u._T)(e, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          r,
          n
        ),
          (t.attrs = t.style),
          (t.style = {});
        var x = t.attrs,
          E = t.style,
          S = t.dimensions;
        x.transform && (S && (E.transform = x.transform), delete x.transform),
          S &&
            (void 0 !== v || void 0 !== y || E.transform) &&
            (E.transformOrigin =
              ((o = void 0 !== y ? y : 0.5),
              (i = lt(void 0 !== v ? v : 0.5, S.x, S.width)),
              (a = lt(o, S.y, S.height)),
              "".concat(i, " ").concat(a))),
          void 0 !== h && (x.x = h),
          void 0 !== m && (x.y = m),
          void 0 !== g &&
            (void 0 === (s = void 0 === b ? 1 : b) && (s = 1),
            void 0 === (l = void 0 === w ? 0 : w) && (l = 0),
            void 0 === (c = !1) && (c = !0),
            (x.pathLength = 1),
            (x[(f = c ? ct : ft).offset] = J.px.transform(-l)),
            (p = J.px.transform(g)),
            (d = J.px.transform(s)),
            (x[f.array] = "".concat(p, " ").concat(d)));
      }
      var dt = function () {
        return (0, u.pi)(
          (0, u.pi)(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          { attrs: {} }
        );
      };
      function ht(t, e) {
        var r = (0, l.useMemo)(
          function () {
            var r = dt();
            return (
              pt(r, e, { enableHardwareAcceleration: !1 }, t.transformTemplate),
              (0, u.pi)((0, u.pi)({}, r.attrs), {
                style: (0, u.pi)({}, r.style),
              })
            );
          },
          [e]
        );
        if (t.style) {
          var n = {};
          ot(n, t.style, t), (r.style = (0, u.pi)((0, u.pi)({}, n), r.style));
        }
        return r;
      }
      var mt = /([a-z])([A-Z])/g,
        vt = function (t) {
          return t.replace(mt, "$1-$2").toLowerCase();
        };
      function yt(t, e, r, n) {
        var o = e.style,
          i = e.vars;
        for (var a in (Object.assign(t.style, o, n && n.getProjectionStyles(r)),
        i))
          t.style.setProperty(a, i[a]);
      }
      var gt = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
      ]);
      function bt(t, e, r, n) {
        for (var o in (yt(t, e, void 0, n), e.attrs))
          t.setAttribute(gt.has(o) ? o : vt(o), e.attrs[o]);
      }
      function wt(t) {
        var e = t.style,
          r = {};
        for (var n in e) ($(e[n]) || Z(n, t)) && (r[n] = e[n]);
        return r;
      }
      function xt(t) {
        var e = wt(t);
        for (var r in t)
          $(t[r]) &&
            (e["x" === r || "y" === r ? "attr" + r.toUpperCase() : r] = t[r]);
        return e;
      }
      function Et(t) {
        return "object" == typeof t && "function" == typeof t.start;
      }
      var St = function (t) {
          return Array.isArray(t);
        },
        jt = function (t) {
          return St(t) ? t[t.length - 1] || 0 : t;
        };
      function At(t) {
        var e = $(t) ? t.get() : t;
        return e && "object" == typeof e && e.mix && e.toValue
          ? e.toValue()
          : e;
      }
      function Ot(t, e, r, n) {
        var o = t.scrapeMotionValuesFromProps,
          i = t.createRenderState,
          a = t.onMount,
          s = {
            latestValues: (function (t, e, r, n) {
              var o = {},
                i = !1 === (null == r ? void 0 : r.initial),
                a = n(t);
              for (var s in a) o[s] = At(a[s]);
              var l = t.initial,
                c = t.animate,
                f = C(t),
                p = L(t);
              e &&
                p &&
                !f &&
                !1 !== t.inherit &&
                (null != l || (l = e.initial), null != c || (c = e.animate));
              var d = i || !1 === l,
                h = d ? c : l;
              return (
                h &&
                  "boolean" != typeof h &&
                  !Et(h) &&
                  (Array.isArray(h) ? h : [h]).forEach(function (e) {
                    var r = P(t, e);
                    if (r) {
                      var n = r.transitionEnd;
                      r.transition;
                      var i = (0, u._T)(r, ["transitionEnd", "transition"]);
                      for (var a in i) {
                        var s = i[a];
                        if (Array.isArray(s)) s = s[d ? s.length - 1 : 0];
                        null !== s && (o[a] = s);
                      }
                      for (var a in n) o[a] = n[a];
                    }
                  }),
                o
              );
            })(e, r, n, o),
            renderState: i(),
          };
        return (
          a &&
            (s.mount = function (t) {
              return a(e, t, s);
            }),
          s
        );
      }
      var kt = function (t) {
          return function (e, r) {
            var n = (0, l.useContext)(b),
              o = (0, l.useContext)(w);
            return r
              ? Ot(t, e, n, o)
              : (0, M.h)(function () {
                  return Ot(t, e, n, o);
                });
          };
        },
        Pt = {
          useVisualState: kt({
            scrapeMotionValuesFromProps: xt,
            createRenderState: dt,
            onMount: function (t, e, r) {
              var n = r.renderState,
                o = r.latestValues;
              try {
                n.dimensions =
                  "function" == typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (t) {
                n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              pt(n, o, { enableHardwareAcceleration: !1 }, t.transformTemplate),
                bt(e, n);
            },
          }),
        },
        Tt = {
          useVisualState: kt({
            scrapeMotionValuesFromProps: wt,
            createRenderState: nt,
          }),
        };
      function Ct(t, e, r, n) {
        return (
          void 0 === n && (n = { passive: !0 }),
          t.addEventListener(e, r, n),
          function () {
            return t.removeEventListener(e, r);
          }
        );
      }
      function Lt(t, e, r, n) {
        (0, l.useEffect)(
          function () {
            var o = t.current;
            if (r && o) return Ct(o, e, r, n);
          },
          [t, e, r, n]
        );
      }
      function Rt(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      ((o = a || (a = {})).Animate = "animate"),
        (o.Hover = "whileHover"),
        (o.Tap = "whileTap"),
        (o.Drag = "whileDrag"),
        (o.Focus = "whileFocus"),
        (o.InView = "whileInView"),
        (o.Exit = "exit");
      var Mt = { pageX: 0, pageY: 0 };
      function Nt(t, e) {
        var r, n, o;
        return (
          void 0 === e && (e = "page"),
          {
            point: t.touches
              ? (void 0 === (r = e) && (r = "page"),
                {
                  x: (n = t.touches[0] || t.changedTouches[0] || Mt)[r + "X"],
                  y: n[r + "Y"],
                })
              : (void 0 === (o = e) && (o = "page"),
                { x: t[o + "X"], y: t[o + "Y"] }),
          }
        );
      }
      var Vt = function (t, e) {
          void 0 === e && (e = !1);
          var r = function (e) {
            return t(e, Nt(e));
          };
          return e
            ? function (t) {
                var e = t instanceof MouseEvent;
                (!e || (e && 0 === t.button)) && r(t);
              }
            : r;
        },
        It = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        Dt = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function Bt(t) {
        if (E.j && null === window.onpointerdown);
        else {
          if (E.j && null === window.ontouchstart) return Dt[t];
          if (E.j && null === window.onmousedown) return It[t];
        }
        return t;
      }
      function Ut(t, e, r, n) {
        return Ct(t, Bt(e), Vt(r, "pointerdown" === e), n);
      }
      function _t(t, e, r, n) {
        return Lt(t, Bt(e), r && Vt(r, "pointerdown" === e), n);
      }
      function Ft(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var zt = Ft("dragHorizontal"),
        Gt = Ft("dragVertical");
      function Wt(t) {
        var e = !1;
        if ("y" === t) e = Gt();
        else if ("x" === t) e = zt();
        else {
          var r = zt(),
            n = Gt();
          r && n
            ? (e = function () {
                r(), n();
              })
            : (r && r(), n && n());
        }
        return e;
      }
      function Ht() {
        var t = Wt(!0);
        return !t || (t(), !1);
      }
      function qt(t, e, r) {
        return function (n, o) {
          var i;
          !Rt(n) ||
            Ht() ||
            (null === (i = t.animationState) ||
              void 0 === i ||
              i.setActive(a.Hover, e),
            null == r || r(n, o));
        };
      }
      var Yt = function (t, e) {
        return !!e && (t === e || Yt(t, e.parentElement));
      };
      function Zt(t) {
        return (0, l.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
      var $t = r(9897),
        Kt = r(16034),
        Xt = new WeakMap(),
        Jt = new WeakMap(),
        Qt = function (t) {
          var e;
          null === (e = Xt.get(t.target)) || void 0 === e || e(t);
        },
        te = function (t) {
          t.forEach(Qt);
        },
        ee = { some: 0, all: 1 };
      function re(t, e, r, n) {
        var o = n.root,
          i = n.margin,
          s = n.amount,
          c = void 0 === s ? "some" : s,
          f = n.once;
        (0, l.useEffect)(
          function () {
            if (t) {
              var n,
                s,
                l,
                p,
                d,
                h,
                m,
                v = {
                  root: null == o ? void 0 : o.current,
                  rootMargin: i,
                  threshold: "number" == typeof c ? c : ee[c],
                };
              return (
                (n = r.getInstance()),
                (s = v.root),
                (l = (0, u._T)(v, ["root"])),
                (p = s || document),
                Jt.has(p) || Jt.set(p, {}),
                (d = Jt.get(p))[(h = JSON.stringify(l))] ||
                  (d[h] = new IntersectionObserver(
                    te,
                    (0, u.pi)({ root: s }, l)
                  )),
                (m = d[h]),
                Xt.set(n, function (t) {
                  var n,
                    o = t.isIntersecting;
                  if (e.isInView !== o) {
                    if (((e.isInView = o), f && !o && e.hasEnteredView)) return;
                    o && (e.hasEnteredView = !0),
                      null === (n = r.animationState) ||
                        void 0 === n ||
                        n.setActive(a.InView, o);
                    var i = r.getProps(),
                      s = o ? i.onViewportEnter : i.onViewportLeave;
                    null == s || s(t);
                  }
                }),
                m.observe(n),
                function () {
                  Xt.delete(n), m.unobserve(n);
                }
              );
            }
          },
          [t, o, i, c]
        );
      }
      function ne(t, e, r, n) {
        var o = n.fallback,
          i = void 0 === o || o;
        (0, l.useEffect)(
          function () {
            t &&
              i &&
              ("production" !== f &&
                (0, Kt.O)(
                  !1,
                  "IntersectionObserver not available on this device. whileInView animations will trigger on mount."
                ),
              requestAnimationFrame(function () {
                e.hasEnteredView = !0;
                var t,
                  n = r.getProps().onViewportEnter;
                null == n || n(null),
                  null === (t = r.animationState) ||
                    void 0 === t ||
                    t.setActive(a.InView, !0);
              }));
          },
          [t]
        );
      }
      var oe = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        ie = {
          inView: oe(function (t) {
            var e = t.visualElement,
              r = t.whileInView,
              n = t.onViewportEnter,
              o = t.onViewportLeave,
              i = t.viewport,
              a = void 0 === i ? {} : i,
              s = (0, l.useRef)({ hasEnteredView: !1, isInView: !1 }),
              u = !!(r || n || o);
            a.once && s.current.hasEnteredView && (u = !1),
              ("undefined" == typeof IntersectionObserver ? ne : re)(
                u,
                s.current,
                e,
                a
              );
          }),
          tap: oe(function (t) {
            var e = t.onTap,
              r = t.onTapStart,
              n = t.onTapCancel,
              o = t.whileTap,
              i = t.visualElement,
              s = e || r || n || o,
              u = (0, l.useRef)(!1),
              c = (0, l.useRef)(null),
              f = { passive: !(r || e || n || v) };
            function p() {
              var t;
              null === (t = c.current) || void 0 === t || t.call(c),
                (c.current = null);
            }
            function d() {
              var t;
              return (
                p(),
                (u.current = !1),
                null === (t = i.animationState) ||
                  void 0 === t ||
                  t.setActive(a.Tap, !1),
                !Ht()
              );
            }
            function h(t, r) {
              d() &&
                (Yt(i.getInstance(), t.target)
                  ? null == e || e(t, r)
                  : null == n || n(t, r));
            }
            function m(t, e) {
              d() && (null == n || n(t, e));
            }
            function v(t, e) {
              var n;
              p(),
                u.current ||
                  ((u.current = !0),
                  (c.current = (0, $t.z)(
                    Ut(window, "pointerup", h, f),
                    Ut(window, "pointercancel", m, f)
                  )),
                  null === (n = i.animationState) ||
                    void 0 === n ||
                    n.setActive(a.Tap, !0),
                  null == r || r(t, e));
            }
            _t(i, "pointerdown", s ? v : void 0, f), Zt(p);
          }),
          focus: oe(function (t) {
            var e = t.whileFocus,
              r = t.visualElement;
            Lt(
              r,
              "focus",
              e
                ? function () {
                    var t;
                    null === (t = r.animationState) ||
                      void 0 === t ||
                      t.setActive(a.Focus, !0);
                  }
                : void 0
            ),
              Lt(
                r,
                "blur",
                e
                  ? function () {
                      var t;
                      null === (t = r.animationState) ||
                        void 0 === t ||
                        t.setActive(a.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: oe(function (t) {
            var e = t.onHoverStart,
              r = t.onHoverEnd,
              n = t.whileHover,
              o = t.visualElement;
            _t(o, "pointerenter", e || n ? qt(o, !0, e) : void 0, {
              passive: !e,
            }),
              _t(o, "pointerleave", r || n ? qt(o, !1, r) : void 0, {
                passive: !r,
              });
          }),
        },
        ae = 0,
        se = function () {
          return ae++;
        };
      function ue() {
        var t = (0, l.useContext)(w);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          r = t.onExitComplete,
          n = t.register,
          o = (0, M.h)(se);
        return (
          (0, l.useEffect)(function () {
            return n(o);
          }, []),
          !e && r
            ? [
                !1,
                function () {
                  return null == r ? void 0 : r(o);
                },
              ]
            : [!0]
        );
      }
      function le(t, e) {
        if (!Array.isArray(e)) return !1;
        var r = e.length;
        if (r !== t.length) return !1;
        for (var n = 0; n < r; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      var ce = r(6773);
      function fe(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let pe = ["duration", "bounce"],
        de = ["stiffness", "damping", "mass"];
      function he(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function me(t) {
        var { from: e = 0, to: r = 1, restSpeed: n = 2, restDelta: o } = t,
          i = (0, u._T)(t, ["from", "to", "restSpeed", "restDelta"]);
        let a = { done: !1, value: e },
          {
            stiffness: s,
            damping: l,
            mass: c,
            velocity: f,
            duration: p,
            isResolvedFromDuration: d,
          } = (function (t) {
            let e = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              t
            );
            if (!he(t, de) && he(t, pe)) {
              let r = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: r = 0,
                mass: n = 1,
              }) {
                let o, i;
                (0, h.K)(
                  t <= 1e4,
                  "Spring duration must be 10 seconds or less"
                );
                let a = 1 - e;
                (a = (0, ce.u)(0.05, 1, a)),
                  (t = (0, ce.u)(0.01, 10, t / 1e3)),
                  a < 1
                    ? ((o = (e) => {
                        let n = e * a,
                          o = n * t,
                          i = fe(e, a);
                        return 0.001 - ((n - r) / i) * Math.exp(-o);
                      }),
                      (i = (e) => {
                        let n = e * a * t,
                          i = Math.pow(a, 2) * Math.pow(e, 2) * t,
                          s = fe(Math.pow(e, 2), a);
                        return (
                          ((0.001 - o(e) > 0 ? -1 : 1) *
                            ((n * r + r - i) * Math.exp(-n))) /
                          s
                        );
                      }))
                    : ((o = (e) =>
                        Math.exp(-e * t) * ((e - r) * t + 1) - 0.001),
                      (i = (e) => Math.exp(-e * t) * (t * t * (r - e))));
                let s = (function (t, e, r) {
                  let n = r;
                  for (let r = 1; r < 12; r++) n -= t(n) / e(n);
                  return n;
                })(o, i, 5 / t);
                if (((t *= 1e3), isNaN(s)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(s, 2) * n;
                  return {
                    stiffness: e,
                    damping: 2 * a * Math.sqrt(n * e),
                    duration: t,
                  };
                }
              })(t);
              (e = Object.assign(Object.assign(Object.assign({}, e), r), {
                velocity: 0,
                mass: 1,
              })).isResolvedFromDuration = !0;
            }
            return e;
          })(i),
          m = ve,
          v = ve;
        function y() {
          let t = f ? -f / 1e3 : 0,
            n = r - e,
            i = l / (2 * Math.sqrt(s * c)),
            a = Math.sqrt(s / c) / 1e3;
          if (
            (void 0 === o && (o = Math.min(Math.abs(r - e) / 100, 0.4)), i < 1)
          ) {
            let e = fe(a, i);
            (m = (o) => {
              let s = Math.exp(-i * a * o);
              return (
                r -
                s *
                  (((t + i * a * n) / e) * Math.sin(e * o) +
                    n * Math.cos(e * o))
              );
            }),
              (v = (r) => {
                let o = Math.exp(-i * a * r);
                return (
                  i *
                    a *
                    o *
                    ((Math.sin(e * r) * (t + i * a * n)) / e +
                      n * Math.cos(e * r)) -
                  o *
                    (Math.cos(e * r) * (t + i * a * n) -
                      e * n * Math.sin(e * r))
                );
              });
          } else if (1 === i)
            m = (e) => r - Math.exp(-a * e) * (n + (t + a * n) * e);
          else {
            let e = a * Math.sqrt(i * i - 1);
            m = (o) => {
              let s = Math.exp(-i * a * o),
                u = Math.min(e * o, 300);
              return (
                r -
                (s * ((t + i * a * n) * Math.sinh(u) + e * n * Math.cosh(u))) /
                  e
              );
            };
          }
        }
        return (
          y(),
          {
            next: (t) => {
              let e = m(t);
              if (d) a.done = t >= p;
              else {
                let i = 1e3 * v(t),
                  s = Math.abs(r - e) <= o;
                a.done = Math.abs(i) <= n && s;
              }
              return (a.value = a.done ? r : e), a;
            },
            flipTarget: () => {
              (f = -f), ([e, r] = [r, e]), y();
            },
          }
        );
      }
      me.needsInterpolation = (t, e) =>
        "string" == typeof t || "string" == typeof e;
      let ve = (t) => 0;
      var ye = r(59180);
      let ge = (t) => (e) => 1 - t(1 - e),
        be = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        we = (t) => (e) => e * e * ((t + 1) * e - t),
        xe = (t) => t,
        Ee = (t) => Math.pow(t, 2),
        Se = ge(Ee),
        je = be(Ee),
        Ae = (t) => 1 - Math.sin(Math.acos(t)),
        Oe = ge(Ae),
        ke = be(Oe),
        Pe = we(1.525),
        Te = ge(Pe),
        Ce = be(Pe),
        Le = ((t) => {
          let e = we(1.525);
          return (t) =>
            (t *= 2) < 1 ? 0.5 * e(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
        })(),
        Re = (t) => {
          if (1 === t || 0 === t) return t;
          let e = t * t;
          return t < 0.36363636363636365
            ? 7.5625 * e
            : t < 0.7272727272727273
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255
            : 10.8 * t * t - 20.52 * t + 10.72;
        },
        Me = ge(Re);
      function Ne({
        from: t = 0,
        to: e = 1,
        ease: r,
        offset: n,
        duration: o = 300,
      }) {
        let i = { done: !1, value: t },
          a = Array.isArray(e) ? e : [t, e],
          s = (
            n && n.length === a.length
              ? n
              : (function (t) {
                  let e = t.length;
                  return t.map((t, r) => (0 !== r ? r / (e - 1) : 0));
                })(a)
          ).map((t) => t * o);
        function u() {
          return (0, ye.s)(s, a, {
            ease: Array.isArray(r)
              ? r
              : a.map(() => r || je).splice(0, a.length - 1),
          });
        }
        let l = u();
        return {
          next: (t) => ((i.value = l(t)), (i.done = t >= o), i),
          flipTarget: () => {
            a.reverse(), (l = u());
          },
        };
      }
      let Ve = {
        keyframes: Ne,
        spring: me,
        decay: function ({
          velocity: t = 0,
          from: e = 0,
          power: r = 0.8,
          timeConstant: n = 350,
          restDelta: o = 0.5,
          modifyTarget: i,
        }) {
          let a = { done: !1, value: e },
            s = r * t,
            u = e + s,
            l = void 0 === i ? u : i(u);
          return (
            l !== u && (s = l - e),
            {
              next: (t) => {
                let e = -s * Math.exp(-t / n);
                return (
                  (a.done = !(e > o || e < -o)),
                  (a.value = a.done ? l : l + e),
                  a
                );
              },
              flipTarget: () => {},
            }
          );
        },
      };
      var Ie = r(54735);
      function De(t, e, r = 0) {
        return t - e - r;
      }
      let Be = (t) => {
        let e = ({ delta: e }) => t(e);
        return {
          start: () => Ie.ZP.update(e, !0),
          stop: () => Ie.qY.update(e),
        };
      };
      function Ue(t) {
        let e, r, n;
        var o,
          {
            from: i,
            autoplay: a = !0,
            driver: s = Be,
            elapsed: l = 0,
            repeat: c = 0,
            repeatType: f = "loop",
            repeatDelay: p = 0,
            onPlay: d,
            onStop: h,
            onComplete: m,
            onRepeat: v,
            onUpdate: y,
          } = t,
          g = (0, u._T)(t, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]);
        let { to: b } = g,
          w = 0,
          x = g.duration,
          E = !1,
          S = !0,
          j = (function (t) {
            if (Array.isArray(t.to)) return Ne;
            if (Ve[t.type]) return Ve[t.type];
            let e = new Set(Object.keys(t));
            if (e.has("ease") || (e.has("duration") && !e.has("dampingRatio")));
            else if (
              e.has("dampingRatio") ||
              e.has("stiffness") ||
              e.has("mass") ||
              e.has("damping") ||
              e.has("restSpeed") ||
              e.has("restDelta")
            )
              return me;
            return Ne;
          })(g);
        (null === (o = j.needsInterpolation) || void 0 === o
          ? void 0
          : o.call(j, i, b)) &&
          ((n = (0, ye.s)([0, 100], [i, b], { clamp: !1 })),
          (i = 0),
          (b = 100));
        let A = j(Object.assign(Object.assign({}, g), { from: i, to: b }));
        return (
          a &&
            (null == d || d(),
            (e = s(function (t) {
              if ((S || (t = -t), (l += t), !E)) {
                let t = A.next(Math.max(0, l));
                (r = t.value), n && (r = n(r)), (E = S ? t.done : l <= 0);
              }
              var o;
              (null == y || y(r), E) &&
                (0 === w && (null != x || (x = l)),
                w < c
                  ? ((o = l),
                    (S ? o >= x + p : o <= -p) &&
                      (w++,
                      "reverse" === f
                        ? (l = (function (t, e, r = 0, n = !0) {
                            return n ? De(e + -t, e, r) : e - (t - e) + r;
                          })(l, x, p, (S = w % 2 == 0)))
                        : ((l = De(l, x, p)), "mirror" === f && A.flipTarget()),
                      (E = !1),
                      v && v()))
                  : (e.stop(), m && m()));
            })).start()),
          {
            stop: () => {
              null == h || h(), e.stop();
            },
          }
        );
      }
      var _e = r(99296),
        Fe = function (t) {
          return 1e3 * t;
        };
      let ze = (t, e) => 1 - 3 * e + 3 * t,
        Ge = (t, e) => 3 * e - 6 * t,
        We = (t) => 3 * t,
        He = (t, e, r) => ((ze(e, r) * t + Ge(e, r)) * t + We(e)) * t,
        qe = (t, e, r) => 3 * ze(e, r) * t * t + 2 * Ge(e, r) * t + We(e);
      var Ye = {
          linear: xe,
          easeIn: Ee,
          easeInOut: je,
          easeOut: Se,
          circIn: Ae,
          circInOut: ke,
          circOut: Oe,
          backIn: Pe,
          backInOut: Ce,
          backOut: Te,
          anticipate: Le,
          bounceIn: Me,
          bounceInOut: (t) =>
            t < 0.5 ? 0.5 * (1 - Re(1 - 2 * t)) : 0.5 * Re(2 * t - 1) + 0.5,
          bounceOut: Re,
        },
        Ze = function (t) {
          if (Array.isArray(t)) {
            (0, h.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            var e = (0, u.CR)(t, 4);
            return (function (t, e, r, n) {
              if (t === e && r === n) return xe;
              let o = new Float32Array(11);
              for (let e = 0; e < 11; ++e) o[e] = He(0.1 * e, t, r);
              return (i) =>
                0 === i || 1 === i
                  ? i
                  : He(
                      (function (e) {
                        let n = 0,
                          i = 1;
                        for (; 10 !== i && o[i] <= e; ++i) n += 0.1;
                        --i;
                        let a = n + 0.1 * ((e - o[i]) / (o[i + 1] - o[i])),
                          s = qe(a, t, r);
                        return s >= 0.001
                          ? (function (t, e, r, n) {
                              for (let o = 0; o < 8; ++o) {
                                let o = qe(e, r, n);
                                if (0 === o) break;
                                e -= (He(e, r, n) - t) / o;
                              }
                              return e;
                            })(e, a, t, r)
                          : 0 === s
                          ? a
                          : (function (t, e, r, n, o) {
                              let i,
                                a,
                                s = 0;
                              do {
                                (i = He((a = e + (r - e) / 2), n, o) - t) > 0
                                  ? (r = a)
                                  : (e = a);
                              } while (Math.abs(i) > 1e-7 && ++s < 10);
                              return a;
                            })(e, n, n + 0.1, t, r);
                      })(i),
                      e,
                      n
                    );
            })(e[0], e[1], e[2], e[3]);
          }
          return "string" == typeof t
            ? ((0, h.k)(
                void 0 !== Ye[t],
                "Invalid easing type '".concat(t, "'")
              ),
              Ye[t])
            : t;
        },
        $e = r(28407),
        Ke = function (t, e) {
          return (
            "zIndex" !== t &&
            !!(
              "number" == typeof e ||
              Array.isArray(e) ||
              ("string" == typeof e && $e.P.test(e) && !e.startsWith("url("))
            )
          );
        },
        Xe = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        Je = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        Qe = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        tr = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        er = {
          x: Xe,
          y: Xe,
          z: Xe,
          rotate: Xe,
          rotateX: Xe,
          rotateY: Xe,
          rotateZ: Xe,
          scaleX: Je,
          scaleY: Je,
          scale: Je,
          opacity: Qe,
          backgroundColor: Qe,
          color: Qe,
          default: Je,
        },
        rr = function (t, e) {
          var r;
          return (
            (r = St(e) ? tr : er[t] || er.default), (0, u.pi)({ to: e }, r(e))
          );
        },
        nr = r(16777);
      let or = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function ir(t) {
        let [e, r] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = r.match(nr.KP) || [];
        if (!n) return t;
        let o = r.replace(n, ""),
          i = or.has(e) ? 1 : 0;
        return n !== r && (i *= 100), e + "(" + i + o + ")";
      }
      let ar = /([a-z-]*)\(.*?\)/g,
        sr = Object.assign(Object.assign({}, $e.P), {
          getAnimatableNone: (t) => {
            let e = t.match(ar);
            return e ? e.map(ir).join(" ") : t;
          },
        });
      var ur = r(87405),
        lr = (0, u.pi)((0, u.pi)({}, et), {
          color: ur.$,
          backgroundColor: ur.$,
          outlineColor: ur.$,
          fill: ur.$,
          stroke: ur.$,
          borderColor: ur.$,
          borderTopColor: ur.$,
          borderRightColor: ur.$,
          borderBottomColor: ur.$,
          borderLeftColor: ur.$,
          filter: sr,
          WebkitFilter: sr,
        }),
        cr = function (t) {
          return lr[t];
        };
      function fr(t, e) {
        var r,
          n = cr(t);
        return (
          n !== sr && (n = $e.P),
          null === (r = n.getAnimatableNone) || void 0 === r
            ? void 0
            : r.call(n, e)
        );
      }
      var pr = { current: !1 },
        dr = !1;
      function hr(t) {
        return (
          0 === t ||
          ("string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" "))
        );
      }
      function mr(t) {
        return "number" == typeof t ? 0 : fr("", t);
      }
      function vr(t, e) {
        return t[e] || t.default || t;
      }
      function yr(t, e, r, n) {
        return (
          void 0 === n && (n = {}),
          pr.current && (n = { type: !1 }),
          e.start(function (o) {
            var i,
              a,
              s,
              l,
              c,
              f,
              p,
              d,
              m,
              v,
              y,
              g =
                ((l = r),
                (p =
                  null !== (c = (f = vr(n, t)).from) && void 0 !== c
                    ? c
                    : e.get()),
                (d = Ke(t, l)),
                "none" === p && d && "string" == typeof l
                  ? (p = fr(t, l))
                  : hr(p) && "string" == typeof l
                  ? (p = mr(l))
                  : !Array.isArray(l) &&
                    hr(l) &&
                    "string" == typeof p &&
                    (l = mr(p)),
                (m = Ke(t, p)),
                (0, h.K)(
                  m === d,
                  "You are trying to animate "
                    .concat(t, ' from "')
                    .concat(p, '" to "')
                    .concat(l, '". ')
                    .concat(
                      p,
                      " is not an animatable value - to enable this animation set "
                    )
                    .concat(p, " to a value animatable to ")
                    .concat(l, " via the `style` property.")
                ),
                m && d && !1 !== f.type
                  ? function () {
                      var r,
                        n,
                        i,
                        a,
                        s,
                        c,
                        d,
                        m,
                        v,
                        y,
                        g,
                        b,
                        w,
                        x = {
                          from: p,
                          to: l,
                          velocity: e.getVelocity(),
                          onComplete: o,
                          onUpdate: function (t) {
                            return e.set(t);
                          },
                        };
                      return "inertia" === f.type || "decay" === f.type
                        ? (function ({
                            from: t = 0,
                            velocity: e = 0,
                            min: r,
                            max: n,
                            power: o = 0.8,
                            timeConstant: i = 750,
                            bounceStiffness: a = 500,
                            bounceDamping: s = 10,
                            restDelta: u = 1,
                            modifyTarget: l,
                            driver: c,
                            onUpdate: f,
                            onComplete: p,
                            onStop: d,
                          }) {
                            let h;
                            function m(t) {
                              return (
                                (void 0 !== r && t < r) ||
                                (void 0 !== n && t > n)
                              );
                            }
                            function v(t) {
                              return void 0 === r
                                ? n
                                : void 0 === n ||
                                  Math.abs(r - t) < Math.abs(n - t)
                                ? r
                                : n;
                            }
                            function y(t) {
                              null == h || h.stop(),
                                (h = Ue(
                                  Object.assign(Object.assign({}, t), {
                                    driver: c,
                                    onUpdate: (e) => {
                                      var r;
                                      null == f || f(e),
                                        null === (r = t.onUpdate) ||
                                          void 0 === r ||
                                          r.call(t, e);
                                    },
                                    onComplete: p,
                                    onStop: d,
                                  })
                                ));
                            }
                            function g(t) {
                              y(
                                Object.assign(
                                  {
                                    type: "spring",
                                    stiffness: a,
                                    damping: s,
                                    restDelta: u,
                                  },
                                  t
                                )
                              );
                            }
                            if (m(t)) g({ from: t, velocity: e, to: v(t) });
                            else {
                              let n,
                                a,
                                s = o * e + t;
                              void 0 !== l && (s = l(s));
                              let c = v(s),
                                f = c === r ? -1 : 1;
                              y({
                                type: "decay",
                                from: t,
                                velocity: e,
                                timeConstant: i,
                                power: o,
                                restDelta: u,
                                modifyTarget: l,
                                onUpdate: m(s)
                                  ? (t) => {
                                      (n = a),
                                        (a = t),
                                        (e = (0, _e.R)(
                                          t - n,
                                          (0, Ie.$B)().delta
                                        )),
                                        ((1 === f && t > c) ||
                                          (-1 === f && t < c)) &&
                                          g({ from: t, to: c, velocity: e });
                                    }
                                  : void 0,
                              });
                            }
                            return {
                              stop: () => (null == h ? void 0 : h.stop()),
                            };
                          })((0, u.pi)((0, u.pi)({}, x), f))
                        : Ue(
                            (0, u.pi)(
                              (0, u.pi)(
                                {},
                                ((r = f),
                                (n = x),
                                (i = t),
                                Array.isArray(n.to) &&
                                  ((null !== (a = r.duration) &&
                                    void 0 !== a) ||
                                    (r.duration = 0.8)),
                                Array.isArray(n.to) &&
                                  null === n.to[0] &&
                                  ((n.to = (0, u.ev)([], (0, u.CR)(n.to), !1)),
                                  (n.to[0] = n.from)),
                                (s = r).when,
                                s.delay,
                                s.delayChildren,
                                s.staggerChildren,
                                s.staggerDirection,
                                s.repeat,
                                s.repeatType,
                                s.repeatDelay,
                                s.from,
                                Object.keys(
                                  (0, u._T)(s, [
                                    "when",
                                    "delay",
                                    "delayChildren",
                                    "staggerChildren",
                                    "staggerDirection",
                                    "repeat",
                                    "repeatType",
                                    "repeatDelay",
                                    "from",
                                  ])
                                ).length ||
                                  (r = (0, u.pi)(
                                    (0, u.pi)({}, r),
                                    rr(i, n.to)
                                  )),
                                (0, u.pi)(
                                  (0, u.pi)({}, n),
                                  ((d = (c = r).ease),
                                  (m = c.times),
                                  (v = c.yoyo),
                                  (y = c.flip),
                                  (g = c.loop),
                                  (b = (0, u._T)(c, [
                                    "ease",
                                    "times",
                                    "yoyo",
                                    "flip",
                                    "loop",
                                  ])),
                                  (w = (0, u.pi)({}, b)),
                                  m && (w.offset = m),
                                  b.duration && (w.duration = Fe(b.duration)),
                                  b.repeatDelay &&
                                    (w.repeatDelay = Fe(b.repeatDelay)),
                                  d &&
                                    (w.ease =
                                      Array.isArray(d) &&
                                      "number" != typeof d[0]
                                        ? d.map(Ze)
                                        : Ze(d)),
                                  "tween" === b.type && (w.type = "keyframes"),
                                  (v || g || y) &&
                                    ((0, h.K)(
                                      !dr,
                                      "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."
                                    ),
                                    (dr = !0),
                                    v
                                      ? (w.repeatType = "reverse")
                                      : g
                                      ? (w.repeatType = "loop")
                                      : y && (w.repeatType = "mirror"),
                                    (w.repeat = g || v || y || b.repeat)),
                                  "spring" !== b.type && (w.type = "keyframes"),
                                  w)
                                ))
                              ),
                              {
                                onUpdate: function (t) {
                                  var e;
                                  x.onUpdate(t),
                                    null === (e = f.onUpdate) ||
                                      void 0 === e ||
                                      e.call(f, t);
                                },
                                onComplete: function () {
                                  var t;
                                  x.onComplete(),
                                    null === (t = f.onComplete) ||
                                      void 0 === t ||
                                      t.call(f);
                                },
                              }
                            )
                          );
                    }
                  : function () {
                      var t,
                        r,
                        n = jt(l);
                      return (
                        e.set(n),
                        o(),
                        null === (t = null == f ? void 0 : f.onUpdate) ||
                          void 0 === t ||
                          t.call(f, n),
                        null === (r = null == f ? void 0 : f.onComplete) ||
                          void 0 === r ||
                          r.call(f),
                        { stop: function () {} }
                      );
                    }),
              b =
                null !==
                  (s =
                    null !== (a = (vr((i = n), t) || {}).delay) && void 0 !== a
                      ? a
                      : i.delay) && void 0 !== s
                  ? s
                  : 0,
              w = function () {
                return (y = g());
              };
            return (
              b ? (v = window.setTimeout(w, Fe(b))) : w(),
              function () {
                clearTimeout(v), null == y || y.stop();
              }
            );
          })
        );
      }
      var gr = r(33234),
        br = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        wr = [
          Q.Rx,
          J.px,
          J.aQ,
          J.RW,
          J.vw,
          J.vh,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        xr = function (t) {
          return wr.find(br(t));
        },
        Er = (0, u.ev)((0, u.ev)([], (0, u.CR)(wr), !1), [ur.$, $e.P], !1);
      function Sr(t, e, r) {
        void 0 === r && (r = {});
        var n,
          o = T(t, e, r.custom),
          i = (o || {}).transition,
          a = void 0 === i ? t.getDefaultTransition() || {} : i;
        r.transitionOverride && (a = r.transitionOverride);
        var s = o
            ? function () {
                return jr(t, o, r);
              }
            : function () {
                return Promise.resolve();
              },
          l = (
            null === (n = t.variantChildren) || void 0 === n ? void 0 : n.size
          )
            ? function (n) {
                void 0 === n && (n = 0);
                var o,
                  i,
                  s,
                  l,
                  c,
                  f,
                  p,
                  d = a.delayChildren,
                  h = a.staggerChildren,
                  m = a.staggerDirection;
                return (
                  (l = r),
                  void 0 === (o = (void 0 === d ? 0 : d) + n) && (o = 0),
                  void 0 === (i = h) && (i = 0),
                  void 0 === (s = m) && (s = 1),
                  (c = []),
                  (f = (t.variantChildren.size - 1) * i),
                  (p =
                    1 === s
                      ? function (t) {
                          return void 0 === t && (t = 0), t * i;
                        }
                      : function (t) {
                          return void 0 === t && (t = 0), f - t * i;
                        }),
                  Array.from(t.variantChildren)
                    .sort(Ar)
                    .forEach(function (t, r) {
                      c.push(
                        Sr(
                          t,
                          e,
                          (0, u.pi)((0, u.pi)({}, l), { delay: o + p(r) })
                        ).then(function () {
                          return t.notifyAnimationComplete(e);
                        })
                      );
                    }),
                  Promise.all(c)
                );
              }
            : function () {
                return Promise.resolve();
              },
          c = a.when;
        if (!c) return Promise.all([s(), l(r.delay)]);
        var f = (0, u.CR)("beforeChildren" === c ? [s, l] : [l, s], 2),
          p = f[0],
          d = f[1];
        return p().then(d);
      }
      function jr(t, e, r) {
        var n,
          o = void 0 === r ? {} : r,
          i = o.delay,
          a = void 0 === i ? 0 : i,
          s = o.transitionOverride,
          l = o.type,
          c = t.makeTargetAnimatable(e),
          f = c.transition,
          p = void 0 === f ? t.getDefaultTransition() : f,
          d = c.transitionEnd,
          h = (0, u._T)(c, ["transition", "transitionEnd"]);
        s && (p = s);
        var m = [],
          v =
            l &&
            (null === (n = t.animationState) || void 0 === n
              ? void 0
              : n.getState()[l]);
        for (var y in h) {
          var g = t.getValue(y),
            b = h[y];
          if (
            !(
              !g ||
              void 0 === b ||
              (v &&
                (function (t, e) {
                  var r = t.protectedKeys,
                    n = t.needsAnimating,
                    o = r.hasOwnProperty(e) && !0 !== n[e];
                  return (n[e] = !1), o;
                })(v, y))
            )
          ) {
            var w = (0, u.pi)({ delay: a }, p);
            t.shouldReduceMotion &&
              q(y) &&
              (w = (0, u.pi)((0, u.pi)({}, w), { type: !1, delay: 0 }));
            var x = yr(y, g, b, w);
            m.push(x);
          }
        }
        return Promise.all(m).then(function () {
          d &&
            (function (t, e) {
              var r = T(t, e),
                n = r ? t.makeTargetAnimatable(r, !1) : {},
                o = n.transitionEnd,
                i = void 0 === o ? {} : o;
              n.transition;
              var a = (0, u._T)(n, ["transitionEnd", "transition"]);
              for (var s in (a = (0, u.pi)((0, u.pi)({}, a), i))) {
                var l = jt(a[s]);
                t.hasValue(s)
                  ? t.getValue(s).set(l)
                  : t.addValue(s, (0, gr.B)(l));
              }
            })(t, d);
        });
      }
      function Ar(t, e) {
        return t.sortNodePosition(e);
      }
      var Or = [a.Animate, a.InView, a.Focus, a.Hover, a.Tap, a.Drag, a.Exit],
        kr = (0, u.ev)([], (0, u.CR)(Or), !1).reverse(),
        Pr = Or.length;
      function Tr(t) {
        return (
          void 0 === t && (t = !1),
          {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var Cr = {
        animation: oe(function (t) {
          var e = t.visualElement,
            r = t.animate;
          e.animationState ||
            (e.animationState = (function (t) {
              var e,
                r = function (e) {
                  return Promise.all(
                    e.map(function (e) {
                      return (function (t, e, r) {
                        var n;
                        if (
                          (void 0 === r && (r = {}),
                          t.notifyAnimationStart(e),
                          Array.isArray(e))
                        )
                          n = Promise.all(
                            e.map(function (e) {
                              return Sr(t, e, r);
                            })
                          );
                        else if ("string" == typeof e) n = Sr(t, e, r);
                        else {
                          var o =
                            "function" == typeof e ? T(t, e, r.custom) : e;
                          n = jr(t, o, r);
                        }
                        return n.then(function () {
                          return t.notifyAnimationComplete(e);
                        });
                      })(t, e.animation, e.options);
                    })
                  );
                },
                n =
                  (((e = {})[a.Animate] = Tr(!0)),
                  (e[a.InView] = Tr()),
                  (e[a.Hover] = Tr()),
                  (e[a.Tap] = Tr()),
                  (e[a.Drag] = Tr()),
                  (e[a.Focus] = Tr()),
                  (e[a.Exit] = Tr()),
                  e),
                o = {},
                i = !0,
                s = function (e, r) {
                  var n = T(t, r);
                  if (n) {
                    n.transition;
                    var o = n.transitionEnd,
                      i = (0, u._T)(n, ["transition", "transitionEnd"]);
                    e = (0, u.pi)((0, u.pi)((0, u.pi)({}, e), i), o);
                  }
                  return e;
                };
              function l(e, a) {
                for (
                  var l,
                    c = t.getProps(),
                    f = t.getVariantContext(!0) || {},
                    p = [],
                    d = new Set(),
                    h = {},
                    m = 1 / 0,
                    v = 0;
                  v < Pr;
                  v++
                )
                  !(function (r) {
                    var o,
                      v = kr[r],
                      y = n[v],
                      g = null !== (l = c[v]) && void 0 !== l ? l : f[v],
                      b = k(g),
                      w = v === a ? y.isActive : null;
                    !1 === w && (m = r);
                    var x = g === f[v] && g !== c[v] && b;
                    if (
                      (x && i && t.manuallyAnimateOnMount && (x = !1),
                      (y.protectedKeys = (0, u.pi)({}, h)),
                      (y.isActive || null !== w) &&
                        (g || y.prevProp) &&
                        !Et(g) &&
                        "boolean" != typeof g)
                    ) {
                      var E =
                          ((o = y.prevProp),
                          "string" == typeof g ? g !== o : !!O(g) && !le(g, o)),
                        S =
                          E ||
                          (v === a && y.isActive && !x && b) ||
                          (r > m && b),
                        j = Array.isArray(g) ? g : [g],
                        A = j.reduce(s, {});
                      !1 === w && (A = {});
                      var P = y.prevResolvedValues,
                        T = void 0 === P ? {} : P,
                        C = (0, u.pi)((0, u.pi)({}, T), A),
                        L = function (t) {
                          (S = !0), d.delete(t), (y.needsAnimating[t] = !0);
                        };
                      for (var R in C) {
                        var M = A[R],
                          N = T[R];
                        h.hasOwnProperty(R) ||
                          (M !== N
                            ? St(M) && St(N)
                              ? !le(M, N) || E
                                ? L(R)
                                : (y.protectedKeys[R] = !0)
                              : void 0 !== M
                              ? L(R)
                              : d.add(R)
                            : void 0 !== M && d.has(R)
                            ? L(R)
                            : (y.protectedKeys[R] = !0));
                      }
                      (y.prevProp = g),
                        (y.prevResolvedValues = A),
                        y.isActive && (h = (0, u.pi)((0, u.pi)({}, h), A)),
                        i && t.blockInitialAnimation && (S = !1),
                        S &&
                          !x &&
                          p.push.apply(
                            p,
                            (0, u.ev)(
                              [],
                              (0, u.CR)(
                                j.map(function (t) {
                                  return {
                                    animation: t,
                                    options: (0, u.pi)({ type: v }, e),
                                  };
                                })
                              ),
                              !1
                            )
                          );
                    }
                  })(v);
                if (((o = (0, u.pi)({}, h)), d.size)) {
                  var y = {};
                  d.forEach(function (e) {
                    var r = t.getBaseTarget(e);
                    void 0 !== r && (y[e] = r);
                  }),
                    p.push({ animation: y });
                }
                var g = !!p.length;
                return (
                  i &&
                    !1 === c.initial &&
                    !t.manuallyAnimateOnMount &&
                    (g = !1),
                  (i = !1),
                  g ? r(p) : Promise.resolve()
                );
              }
              return {
                isAnimated: function (t) {
                  return void 0 !== o[t];
                },
                animateChanges: l,
                setActive: function (e, r, o) {
                  if (n[e].isActive === r) return Promise.resolve();
                  null === (i = t.variantChildren) ||
                    void 0 === i ||
                    i.forEach(function (t) {
                      var n;
                      return null === (n = t.animationState) || void 0 === n
                        ? void 0
                        : n.setActive(e, r);
                    }),
                    (n[e].isActive = r);
                  var i,
                    a = l(o, e);
                  for (var s in n) n[s].protectedKeys = {};
                  return a;
                },
                setAnimateFunction: function (e) {
                  r = e(t);
                },
                getState: function () {
                  return n;
                },
              };
            })(e)),
            Et(r) &&
              (0, l.useEffect)(
                function () {
                  return r.subscribe(e);
                },
                [r]
              );
        }),
        exit: oe(function (t) {
          var e = t.custom,
            r = t.visualElement,
            n = (0, u.CR)(ue(), 2),
            o = n[0],
            i = n[1],
            s = (0, l.useContext)(w);
          (0, l.useEffect)(
            function () {
              r.isPresent = o;
              var t,
                n,
                u =
                  null === (t = r.animationState) || void 0 === t
                    ? void 0
                    : t.setActive(a.Exit, !o, {
                        custom:
                          null !== (n = null == s ? void 0 : s.custom) &&
                          void 0 !== n
                            ? n
                            : e,
                      });
              o || null == u || u.then(i);
            },
            [o]
          );
        }),
      };
      let Lr = (t) => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
        Rr = (t) => Lr(t) && t.hasOwnProperty("z");
      var Mr = r(80734);
      let Nr = (t, e) => Math.abs(t - e);
      function Vr(t, e) {
        if ((0, Mr.e)(t) && (0, Mr.e)(e)) return Nr(t, e);
        if (Lr(t) && Lr(e)) {
          let r = Nr(t.x, e.x),
            n = Nr(t.y, e.y),
            o = Rr(t) && Rr(e) ? Nr(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2) + Math.pow(o, 2));
        }
      }
      var Ir = (function () {
        function t(t, e, r) {
          var n = this,
            o = (void 0 === r ? {} : r).transformPagePoint;
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (n.lastMoveEvent && n.lastMoveEventInfo) {
                var t = Ur(n.lastMoveEventInfo, n.history),
                  e = null !== n.startEvent,
                  r = Vr(t.offset, { x: 0, y: 0 }) >= 3;
                if (e || r) {
                  var o = t.point,
                    i = (0, Ie.$B)().timestamp;
                  n.history.push((0, u.pi)((0, u.pi)({}, o), { timestamp: i }));
                  var a = n.handlers,
                    s = a.onStart,
                    l = a.onMove;
                  e ||
                    (s && s(n.lastMoveEvent, t),
                    (n.startEvent = n.lastMoveEvent)),
                    l && l(n.lastMoveEvent, t);
                }
              }
            }),
            (this.handlePointerMove = function (t, e) {
              (n.lastMoveEvent = t),
                (n.lastMoveEventInfo = Dr(e, n.transformPagePoint)),
                Rt(t) && 0 === t.buttons
                  ? n.handlePointerUp(t, e)
                  : Ie.ZP.update(n.updatePoint, !0);
            }),
            (this.handlePointerUp = function (t, e) {
              n.end();
              var r = n.handlers,
                o = r.onEnd,
                i = r.onSessionEnd,
                a = Ur(Dr(e, n.transformPagePoint), n.history);
              n.startEvent && o && o(t, a), i && i(t, a);
            }),
            !(t.touches && t.touches.length > 1))
          ) {
            (this.handlers = e), (this.transformPagePoint = o);
            var i = Dr(Nt(t), this.transformPagePoint),
              a = i.point,
              s = (0, Ie.$B)().timestamp;
            this.history = [(0, u.pi)((0, u.pi)({}, a), { timestamp: s })];
            var l = e.onSessionStart;
            l && l(t, Ur(i, this.history)),
              (this.removeListeners = (0, $t.z)(
                Ut(window, "pointermove", this.handlePointerMove),
                Ut(window, "pointerup", this.handlePointerUp),
                Ut(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          (t.prototype.updateHandlers = function (t) {
            this.handlers = t;
          }),
          (t.prototype.end = function () {
            this.removeListeners && this.removeListeners(),
              Ie.qY.update(this.updatePoint);
          }),
          t
        );
      })();
      function Dr(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function Br(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function Ur(t, e) {
        var r = t.point;
        return {
          point: r,
          delta: Br(r, _r(e)),
          offset: Br(r, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            for (
              var r = t.length - 1, n = null, o = _r(t);
              r >= 0 && ((n = t[r]), !(o.timestamp - n.timestamp > Fe(0.1)));

            )
              r--;
            if (!n) return { x: 0, y: 0 };
            var i = (o.timestamp - n.timestamp) / 1e3;
            if (0 === i) return { x: 0, y: 0 };
            var a = { x: (o.x - n.x) / i, y: (o.y - n.y) / i };
            return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
          })(e),
        };
      }
      function _r(t) {
        return t[t.length - 1];
      }
      var Fr = r(72453),
        zr = r(9326);
      function Gr(t) {
        return t.max - t.min;
      }
      function Wr(t, e, r) {
        return (
          void 0 === e && (e = 0), void 0 === r && (r = 0.01), Vr(t, e) < r
        );
      }
      function Hr(t, e, r, n) {
        void 0 === n && (n = 0.5),
          (t.origin = n),
          (t.originPoint = (0, Fr.C)(e.min, e.max, t.origin)),
          (t.scale = Gr(r) / Gr(e)),
          (Wr(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = (0, Fr.C)(r.min, r.max, t.origin) - t.originPoint),
          (Wr(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function qr(t, e, r, n) {
        Hr(t.x, e.x, r.x, null == n ? void 0 : n.originX),
          Hr(t.y, e.y, r.y, null == n ? void 0 : n.originY);
      }
      function Yr(t, e, r) {
        (t.min = r.min + e.min), (t.max = t.min + Gr(e));
      }
      function Zr(t, e, r) {
        (t.min = e.min - r.min), (t.max = t.min + Gr(e));
      }
      function $r(t, e, r) {
        Zr(t.x, e.x, r.x), Zr(t.y, e.y, r.y);
      }
      function Kr(t, e, r) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0,
        };
      }
      function Xr(t, e) {
        var r,
          n = e.min - t.min,
          o = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min &&
            ((n = (r = (0, u.CR)([o, n], 2))[0]), (o = r[1])),
          { min: n, max: o }
        );
      }
      function Jr(t, e, r) {
        return { min: Qr(t, e), max: Qr(t, r) };
      }
      function Qr(t, e) {
        var r;
        return "number" == typeof t
          ? t
          : null !== (r = t[e]) && void 0 !== r
          ? r
          : 0;
      }
      var tn = function () {
          return {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
        },
        en = function () {
          return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        };
      function rn(t) {
        return [t("x"), t("y")];
      }
      function nn(t) {
        var e = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        };
      }
      function on(t) {
        return void 0 === t || 1 === t;
      }
      function an(t) {
        var e = t.scale,
          r = t.scaleX,
          n = t.scaleY;
        return !on(e) || !on(r) || !on(n);
      }
      function sn(t) {
        var e, r;
        return (
          an(t) ||
          ((e = t.x) && "0%" !== e) ||
          ((r = t.y) && "0%" !== r) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY
        );
      }
      function un(t, e, r, n, o) {
        return void 0 !== o && (t = n + o * (t - n)), n + r * (t - n) + e;
      }
      function ln(t, e, r, n, o) {
        void 0 === e && (e = 0),
          void 0 === r && (r = 1),
          (t.min = un(t.min, e, r, n, o)),
          (t.max = un(t.max, e, r, n, o));
      }
      function cn(t, e) {
        var r = e.x,
          n = e.y;
        ln(t.x, r.translate, r.scale, r.originPoint),
          ln(t.y, n.translate, n.scale, n.originPoint);
      }
      function fn(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function pn(t, e, r) {
        var n = (0, u.CR)(r, 3),
          o = n[0],
          i = n[1],
          a = n[2],
          s = void 0 !== e[a] ? e[a] : 0.5,
          l = (0, Fr.C)(t.min, t.max, s);
        ln(t, e[o], e[i], l, e.scale);
      }
      var dn = ["x", "scaleX", "originX"],
        hn = ["y", "scaleY", "originY"];
      function mn(t, e) {
        pn(t.x, e, dn), pn(t.y, e, hn);
      }
      function vn(t, e) {
        return nn(
          (function (t, e) {
            if (!e) return t;
            var r = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: r.y, left: r.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var yn = new WeakMap(),
        gn = (function () {
          function t(t) {
            (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = en()),
              (this.visualElement = t);
          }
          return (
            (t.prototype.start = function (t, e) {
              var r = this,
                n = (void 0 === e ? {} : e).snapToCursor,
                o = void 0 !== n && n;
              !1 !== this.visualElement.isPresent &&
                (this.panSession = new Ir(
                  t,
                  {
                    onSessionStart: function (t) {
                      r.stopAnimation(),
                        o && r.snapToCursor(Nt(t, "page").point);
                    },
                    onStart: function (t, e) {
                      var n,
                        o = r.getProps(),
                        i = o.drag,
                        s = o.dragPropagation,
                        u = o.onDragStart;
                      (!i ||
                        s ||
                        (r.openGlobalLock && r.openGlobalLock(),
                        (r.openGlobalLock = Wt(i)),
                        r.openGlobalLock)) &&
                        ((r.isDragging = !0),
                        (r.currentDirection = null),
                        r.resolveConstraints(),
                        r.visualElement.projection &&
                          ((r.visualElement.projection.isAnimationBlocked = !0),
                          (r.visualElement.projection.target = void 0)),
                        rn(function (t) {
                          var e,
                            n,
                            o = r.getAxisMotionValue(t).get() || 0;
                          if (J.aQ.test(o)) {
                            var i =
                              null ===
                                (n =
                                  null === (e = r.visualElement.projection) ||
                                  void 0 === e
                                    ? void 0
                                    : e.layout) || void 0 === n
                                ? void 0
                                : n.actual[t];
                            i && (o = Gr(i) * (parseFloat(o) / 100));
                          }
                          r.originPoint[t] = o;
                        }),
                        null == u || u(t, e),
                        null === (n = r.visualElement.animationState) ||
                          void 0 === n ||
                          n.setActive(a.Drag, !0));
                    },
                    onMove: function (t, e) {
                      var n = r.getProps(),
                        o = n.dragPropagation,
                        i = n.dragDirectionLock,
                        a = n.onDirectionLock,
                        s = n.onDrag;
                      if (o || r.openGlobalLock) {
                        var u,
                          l,
                          c = e.offset;
                        if (i && null === r.currentDirection)
                          return (
                            (r.currentDirection =
                              (void 0 === u && (u = 10),
                              (l = null),
                              Math.abs(c.y) > u
                                ? (l = "y")
                                : Math.abs(c.x) > u && (l = "x"),
                              l)),
                            void (
                              null !== r.currentDirection &&
                              (null == a || a(r.currentDirection))
                            )
                          );
                        r.updateAxis("x", e.point, c),
                          r.updateAxis("y", e.point, c),
                          r.visualElement.syncRender(),
                          null == s || s(t, e);
                      }
                    },
                    onSessionEnd: function (t, e) {
                      return r.stop(t, e);
                    },
                  },
                  {
                    transformPagePoint:
                      this.visualElement.getTransformPagePoint(),
                  }
                ));
            }),
            (t.prototype.stop = function (t, e) {
              var r = this.isDragging;
              if ((this.cancel(), r)) {
                var n = e.velocity;
                this.startAnimation(n);
                var o = this.getProps().onDragEnd;
                null == o || o(t, e);
              }
            }),
            (t.prototype.cancel = function () {
              var t, e;
              (this.isDragging = !1),
                this.visualElement.projection &&
                  (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                (this.panSession = void 0),
                !this.getProps().dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (e = this.visualElement.animationState) ||
                  void 0 === e ||
                  e.setActive(a.Drag, !1);
            }),
            (t.prototype.updateAxis = function (t, e, r) {
              var n = this.getProps().drag;
              if (r && bn(t, n, this.currentDirection)) {
                var o,
                  i,
                  a,
                  s,
                  u,
                  l = this.getAxisMotionValue(t),
                  c = this.originPoint[t] + r[t];
                this.constraints &&
                  this.constraints[t] &&
                  ((o = c),
                  (i = this.constraints[t]),
                  (a = this.elastic[t]),
                  (s = i.min),
                  (u = i.max),
                  void 0 !== s && o < s
                    ? (o = a ? (0, Fr.C)(s, o, a.min) : Math.max(o, s))
                    : void 0 !== u &&
                      o > u &&
                      (o = a ? (0, Fr.C)(u, o, a.max) : Math.min(o, u)),
                  (c = o)),
                  l.set(c);
              }
            }),
            (t.prototype.resolveConstraints = function () {
              var t,
                e,
                r,
                n,
                o,
                i,
                a = this,
                s = this.getProps(),
                u = s.dragConstraints,
                l = s.dragElastic,
                c = (this.visualElement.projection || {}).layout,
                f = this.constraints;
              u && A(u)
                ? this.constraints ||
                  (this.constraints = this.resolveRefConstraints())
                : (this.constraints =
                    !(!u || !c) &&
                    ((t = c.actual),
                    (e = u.top),
                    (r = u.left),
                    (n = u.bottom),
                    (o = u.right),
                    { x: Kr(t.x, r, o), y: Kr(t.y, e, n) })),
                (this.elastic =
                  (void 0 === (i = l) && (i = 0.35),
                  !1 === i ? (i = 0) : !0 === i && (i = 0.35),
                  { x: Jr(i, "left", "right"), y: Jr(i, "top", "bottom") })),
                f !== this.constraints &&
                  c &&
                  this.constraints &&
                  !this.hasMutatedConstraints &&
                  rn(function (t) {
                    var e, r, n;
                    a.getAxisMotionValue(t) &&
                      (a.constraints[t] =
                        ((e = c.actual[t]),
                        (n = {}),
                        void 0 !== (r = a.constraints[t]).min &&
                          (n.min = r.min - e.min),
                        void 0 !== r.max && (n.max = r.max - e.min),
                        n));
                  });
            }),
            (t.prototype.resolveRefConstraints = function () {
              var t = this.getProps(),
                e = t.dragConstraints,
                r = t.onMeasureDragConstraints;
              if (!e || !A(e)) return !1;
              var n = e.current;
              (0, h.k)(
                null !== n,
                "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
              );
              var o = this.visualElement.projection;
              if (!o || !o.layout) return !1;
              var i =
                  ((s = o.root),
                  (u = vn(n, this.visualElement.getTransformPagePoint())),
                  (l = s.scroll) && (fn(u.x, l.x), fn(u.y, l.y)),
                  u),
                a = { x: Xr((c = o.layout.actual).x, i.x), y: Xr(c.y, i.y) };
              if (r) {
                var s,
                  u,
                  l,
                  c,
                  f,
                  p,
                  d,
                  m = r(
                    ((p = (f = a).x),
                    {
                      top: (d = f.y).min,
                      right: p.max,
                      bottom: d.max,
                      left: p.min,
                    })
                  );
                (this.hasMutatedConstraints = !!m), m && (a = nn(m));
              }
              return a;
            }),
            (t.prototype.startAnimation = function (t) {
              var e = this,
                r = this.getProps(),
                n = r.drag,
                o = r.dragMomentum,
                i = r.dragElastic,
                a = r.dragTransition,
                s = r.dragSnapToOrigin,
                l = r.onDragTransitionEnd,
                c = this.constraints || {};
              return Promise.all(
                rn(function (r) {
                  if (bn(r, n, e.currentDirection)) {
                    var l,
                      f =
                        null !== (l = null == c ? void 0 : c[r]) && void 0 !== l
                          ? l
                          : {};
                    s && (f = { min: 0, max: 0 });
                    var p = (0, u.pi)(
                      (0, u.pi)(
                        {
                          type: "inertia",
                          velocity: o ? t[r] : 0,
                          bounceStiffness: i ? 200 : 1e6,
                          bounceDamping: i ? 40 : 1e7,
                          timeConstant: 750,
                          restDelta: 1,
                          restSpeed: 10,
                        },
                        a
                      ),
                      f
                    );
                    return e.startAxisValueAnimation(r, p);
                  }
                })
              ).then(l);
            }),
            (t.prototype.startAxisValueAnimation = function (t, e) {
              return yr(t, this.getAxisMotionValue(t), 0, e);
            }),
            (t.prototype.stopAnimation = function () {
              var t = this;
              rn(function (e) {
                return t.getAxisMotionValue(e).stop();
              });
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var e,
                r,
                n = "_drag" + t.toUpperCase();
              return (
                this.visualElement.getProps()[n] ||
                this.visualElement.getValue(
                  t,
                  null !==
                    (r =
                      null === (e = this.visualElement.getProps().initial) ||
                      void 0 === e
                        ? void 0
                        : e[t]) && void 0 !== r
                    ? r
                    : 0
                )
              );
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this;
              rn(function (r) {
                if (bn(r, e.getProps().drag, e.currentDirection)) {
                  var n = e.visualElement.projection,
                    o = e.getAxisMotionValue(r);
                  if (n && n.layout) {
                    var i = n.layout.actual[r],
                      a = i.min,
                      s = i.max;
                    o.set(t[r] - (0, Fr.C)(a, s, 0.5));
                  }
                }
              });
            }),
            (t.prototype.scalePositionWithinConstraints = function () {
              var t,
                e = this,
                r = this.getProps(),
                n = r.drag,
                o = r.dragConstraints,
                i = this.visualElement.projection;
              if (A(o) && i && this.constraints) {
                this.stopAnimation();
                var a = { x: 0, y: 0 };
                rn(function (t) {
                  var r = e.getAxisMotionValue(t);
                  if (r) {
                    var n,
                      o,
                      i,
                      s,
                      u,
                      l = r.get();
                    a[t] =
                      ((n = { min: l, max: l }),
                      (o = e.constraints[t]),
                      (i = 0.5),
                      (s = Gr(n)),
                      (u = Gr(o)) > s
                        ? (i = (0, zr.Y)(o.min, o.max - s, n.min))
                        : s > u && (i = (0, zr.Y)(n.min, n.max - u, o.min)),
                      (0, ce.u)(0, 1, i));
                  }
                });
                var s = this.visualElement.getProps().transformTemplate;
                (this.visualElement.getInstance().style.transform = s
                  ? s({}, "")
                  : "none"),
                  null === (t = i.root) || void 0 === t || t.updateScroll(),
                  i.updateLayout(),
                  this.resolveConstraints(),
                  rn(function (t) {
                    if (bn(t, n, null)) {
                      var r = e.getAxisMotionValue(t),
                        o = e.constraints[t],
                        i = o.min,
                        s = o.max;
                      r.set((0, Fr.C)(i, s, a[t]));
                    }
                  });
              }
            }),
            (t.prototype.addListeners = function () {
              var t,
                e = this;
              yn.set(this.visualElement, this);
              var r = Ut(
                  this.visualElement.getInstance(),
                  "pointerdown",
                  function (t) {
                    var r = e.getProps(),
                      n = r.drag,
                      o = r.dragListener;
                    n && (void 0 === o || o) && e.start(t);
                  }
                ),
                n = function () {
                  A(e.getProps().dragConstraints) &&
                    (e.constraints = e.resolveRefConstraints());
                },
                o = this.visualElement.projection,
                i = o.addEventListener("measure", n);
              o &&
                !o.layout &&
                (null === (t = o.root) || void 0 === t || t.updateScroll(),
                o.updateLayout()),
                n();
              var a = Ct(window, "resize", function () {
                return e.scalePositionWithinConstraints();
              });
              return (
                o.addEventListener("didUpdate", function (t) {
                  var r = t.delta,
                    n = t.hasLayoutChanged;
                  e.isDragging &&
                    n &&
                    (rn(function (t) {
                      var n = e.getAxisMotionValue(t);
                      n &&
                        ((e.originPoint[t] += r[t].translate),
                        n.set(n.get() + r[t].translate));
                    }),
                    e.visualElement.syncRender());
                }),
                function () {
                  a(), r(), i();
                }
              );
            }),
            (t.prototype.getProps = function () {
              var t = this.visualElement.getProps(),
                e = t.drag,
                r = t.dragDirectionLock,
                n = t.dragPropagation,
                o = t.dragConstraints,
                i = t.dragElastic,
                a = t.dragMomentum;
              return (0, u.pi)((0, u.pi)({}, t), {
                drag: void 0 !== e && e,
                dragDirectionLock: void 0 !== r && r,
                dragPropagation: void 0 !== n && n,
                dragConstraints: void 0 !== o && o,
                dragElastic: void 0 === i ? 0.35 : i,
                dragMomentum: void 0 === a || a,
              });
            }),
            t
          );
        })();
      function bn(t, e, r) {
        return !((!0 !== e && e !== t) || (null !== r && r !== t));
      }
      var wn = {
          pan: oe(function (t) {
            var e = t.onPan,
              r = t.onPanStart,
              n = t.onPanEnd,
              o = t.onPanSessionStart,
              i = t.visualElement,
              a = e || r || n || o,
              s = (0, l.useRef)(null),
              u = (0, l.useContext)(g._).transformPagePoint,
              c = {
                onSessionStart: o,
                onStart: r,
                onMove: e,
                onEnd: function (t, e) {
                  (s.current = null), n && n(t, e);
                },
              };
            (0, l.useEffect)(function () {
              null !== s.current && s.current.updateHandlers(c);
            }),
              _t(
                i,
                "pointerdown",
                a &&
                  function (t) {
                    s.current = new Ir(t, c, { transformPagePoint: u });
                  }
              ),
              Zt(function () {
                return s.current && s.current.end();
              });
          }),
          drag: oe(function (t) {
            var e = t.dragControls,
              r = t.visualElement,
              n = (0, M.h)(function () {
                return new gn(r);
              });
            (0, l.useEffect)(
              function () {
                return e && e.subscribe(n);
              },
              [n, e]
            ),
              (0, l.useEffect)(
                function () {
                  return n.addListeners();
                },
                [n]
              );
          }),
        },
        xn = r(21560),
        En = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "LayoutAnimationStart",
          "SetAxisTarget",
          "Unmount",
        ],
        Sn = function (t) {
          var e = t.treeType,
            r = void 0 === e ? "" : e,
            n = t.build,
            o = t.getBaseTarget,
            i = t.makeTargetAnimatable,
            a = t.measureViewportBox,
            s = t.render,
            l = t.readValueFromInstance,
            c = t.removeValueFromRenderState,
            f = t.sortNodePosition,
            p = t.scrapeMotionValuesFromProps;
          return function (t, e) {
            var d,
              h,
              m,
              v,
              y,
              g = t.parent,
              b = t.props,
              w = t.presenceId,
              x = t.blockInitialAnimation,
              E = t.visualState,
              S = t.shouldReduceMotion;
            void 0 === e && (e = {});
            var j = !1,
              A = E.latestValues,
              O = E.renderState,
              P =
                ((d = En.map(function () {
                  return new xn.L();
                })),
                (h = {}),
                (m = {
                  clearAllListeners: function () {
                    return d.forEach(function (t) {
                      return t.clear();
                    });
                  },
                  updatePropListeners: function (t) {
                    En.forEach(function (e) {
                      var r,
                        n = "on" + e,
                        o = t[n];
                      null === (r = h[e]) || void 0 === r || r.call(h),
                        o && (h[e] = m[n](o));
                    });
                  },
                }),
                d.forEach(function (t, e) {
                  (m["on" + En[e]] = function (e) {
                    return t.add(e);
                  }),
                    (m["notify" + En[e]] = function () {
                      for (var e = [], r = 0; r < arguments.length; r++)
                        e[r] = arguments[r];
                      return t.notify.apply(t, (0, u.ev)([], (0, u.CR)(e), !1));
                    });
                }),
                m),
              T = new Map(),
              R = new Map(),
              M = {},
              N = (0, u.pi)({}, A);
            function V() {
              v && j && (I(), s(v, O, b.style, W.projection));
            }
            function I() {
              n(W, O, A, e, b);
            }
            function D() {
              P.notifyUpdate(A);
            }
            function B(t, e) {
              var r = e.onChange(function (e) {
                  (A[t] = e), b.onUpdate && Ie.ZP.update(D, !1, !0);
                }),
                n = e.onRenderRequest(W.scheduleRender);
              R.set(t, function () {
                r(), n();
              });
            }
            var U = p(b);
            for (var _ in U) {
              var F = U[_];
              void 0 !== A[_] && $(F) && F.set(A[_], !1);
            }
            var z = C(b),
              G = L(b),
              W = (0, u.pi)(
                (0, u.pi)(
                  {
                    treeType: r,
                    current: null,
                    depth: g ? g.depth + 1 : 0,
                    parent: g,
                    children: new Set(),
                    presenceId: w,
                    shouldReduceMotion: S,
                    variantChildren: G ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: !!(null == g
                      ? void 0
                      : g.isMounted()),
                    blockInitialAnimation: x,
                    isMounted: function () {
                      return !!v;
                    },
                    mount: function (t) {
                      (j = !0),
                        (v = W.current = t),
                        W.projection && W.projection.mount(t),
                        G &&
                          g &&
                          !z &&
                          (y = null == g ? void 0 : g.addVariantChild(W)),
                        T.forEach(function (t, e) {
                          return B(e, t);
                        }),
                        null == g || g.children.add(W),
                        W.setProps(b);
                    },
                    unmount: function () {
                      var t;
                      null === (t = W.projection) ||
                        void 0 === t ||
                        t.unmount(),
                        Ie.qY.update(D),
                        Ie.qY.render(V),
                        R.forEach(function (t) {
                          return t();
                        }),
                        null == y || y(),
                        null == g || g.children.delete(W),
                        P.clearAllListeners(),
                        (v = void 0),
                        (j = !1);
                    },
                    addVariantChild: function (t) {
                      var e,
                        r = W.getClosestVariantNode();
                      if (r)
                        return (
                          null === (e = r.variantChildren) ||
                            void 0 === e ||
                            e.add(t),
                          function () {
                            return r.variantChildren.delete(t);
                          }
                        );
                    },
                    sortNodePosition: function (t) {
                      return f && r === t.treeType
                        ? f(W.getInstance(), t.getInstance())
                        : 0;
                    },
                    getClosestVariantNode: function () {
                      return G
                        ? W
                        : null == g
                        ? void 0
                        : g.getClosestVariantNode();
                    },
                    getLayoutId: function () {
                      return b.layoutId;
                    },
                    getInstance: function () {
                      return v;
                    },
                    getStaticValue: function (t) {
                      return A[t];
                    },
                    setStaticValue: function (t, e) {
                      return (A[t] = e);
                    },
                    getLatestValues: function () {
                      return A;
                    },
                    setVisibility: function (t) {
                      W.isVisible !== t &&
                        ((W.isVisible = t), W.scheduleRender());
                    },
                    makeTargetAnimatable: function (t, e) {
                      return void 0 === e && (e = !0), i(W, t, b, e);
                    },
                    measureViewportBox: function () {
                      return a(v, b);
                    },
                    addValue: function (t, e) {
                      W.hasValue(t) && W.removeValue(t),
                        T.set(t, e),
                        (A[t] = e.get()),
                        B(t, e);
                    },
                    removeValue: function (t) {
                      var e;
                      T.delete(t),
                        null === (e = R.get(t)) || void 0 === e || e(),
                        R.delete(t),
                        delete A[t],
                        c(t, O);
                    },
                    hasValue: function (t) {
                      return T.has(t);
                    },
                    getValue: function (t, e) {
                      var r = T.get(t);
                      return (
                        void 0 === r &&
                          void 0 !== e &&
                          ((r = (0, gr.B)(e)), W.addValue(t, r)),
                        r
                      );
                    },
                    forEachValue: function (t) {
                      return T.forEach(t);
                    },
                    readValue: function (t) {
                      var r;
                      return null !== (r = A[t]) && void 0 !== r
                        ? r
                        : l(v, t, e);
                    },
                    setBaseTarget: function (t, e) {
                      N[t] = e;
                    },
                    getBaseTarget: function (t) {
                      if (o) {
                        var e = o(b, t);
                        if (void 0 !== e && !$(e)) return e;
                      }
                      return N[t];
                    },
                  },
                  P
                ),
                {
                  build: function () {
                    return I(), O;
                  },
                  scheduleRender: function () {
                    Ie.ZP.render(V, !1, !0);
                  },
                  syncRender: V,
                  setProps: function (t) {
                    (t.transformTemplate || b.transformTemplate) &&
                      W.scheduleRender(),
                      (b = t),
                      P.updatePropListeners(t),
                      (M = (function (t, e, r) {
                        var n;
                        for (var o in e) {
                          var i = e[o],
                            a = r[o];
                          if ($(i)) t.addValue(o, i);
                          else if ($(a)) t.addValue(o, (0, gr.B)(i));
                          else if (a !== i)
                            if (t.hasValue(o)) {
                              var s = t.getValue(o);
                              s.hasAnimated || s.set(i);
                            } else
                              t.addValue(
                                o,
                                (0, gr.B)(
                                  null !== (n = t.getStaticValue(o)) &&
                                    void 0 !== n
                                    ? n
                                    : i
                                )
                              );
                        }
                        for (var o in r) void 0 === e[o] && t.removeValue(o);
                        return e;
                      })(W, p(b), M));
                  },
                  getProps: function () {
                    return b;
                  },
                  getVariant: function (t) {
                    var e;
                    return null === (e = b.variants) || void 0 === e
                      ? void 0
                      : e[t];
                  },
                  getDefaultTransition: function () {
                    return b.transition;
                  },
                  getTransformPagePoint: function () {
                    return b.transformPagePoint;
                  },
                  getVariantContext: function (t) {
                    if ((void 0 === t && (t = !1), t))
                      return null == g ? void 0 : g.getVariantContext();
                    if (!z) {
                      var e =
                        (null == g ? void 0 : g.getVariantContext()) || {};
                      return void 0 !== b.initial && (e.initial = b.initial), e;
                    }
                    for (var r = {}, n = 0; n < An; n++) {
                      var o = jn[n],
                        i = b[o];
                      (k(i) || !1 === i) && (r[o] = i);
                    }
                    return r;
                  },
                }
              );
            return W;
          };
        },
        jn = (0, u.ev)(["initial"], (0, u.CR)(Or), !1),
        An = jn.length;
      function On(t) {
        return "string" == typeof t && t.startsWith("var(--");
      }
      var kn = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function Pn(t, e, r) {
        void 0 === r && (r = 1),
          (0, h.k)(
            r <= 4,
            'Max CSS variable fallback depth detected in property "'.concat(
              t,
              '". This may indicate a circular fallback dependency.'
            )
          );
        var n = (0, u.CR)(
            (function (t) {
              var e = kn.exec(t);
              if (!e) return [,];
              var r = (0, u.CR)(e, 3);
              return [r[1], r[2]];
            })(t),
            2
          ),
          o = n[0],
          i = n[1];
        if (o) {
          var a = window.getComputedStyle(e).getPropertyValue(o);
          return a ? a.trim() : On(i) ? Pn(i, e, r + 1) : i;
        }
      }
      var Tn = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        Cn = function (t) {
          return Tn.has(t);
        },
        Ln = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        Rn = function (t) {
          return t === Q.Rx || t === J.px;
        };
      ((i = s || (s = {})).width = "width"),
        (i.height = "height"),
        (i.left = "left"),
        (i.right = "right"),
        (i.top = "top"),
        (i.bottom = "bottom");
      var Mn = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        Nn = function (t, e) {
          return function (r, n) {
            var o = n.transform;
            if ("none" === o || !o) return 0;
            var i = o.match(/^matrix3d\((.+)\)$/);
            if (i) return Mn(i[1], e);
            var a = o.match(/^matrix\((.+)\)$/);
            return a ? Mn(a[1], t) : 0;
          };
        },
        Vn = new Set(["x", "y", "z"]),
        In = G.filter(function (t) {
          return !Vn.has(t);
        }),
        Dn = {
          width: function (t, e) {
            var r = t.x,
              n = e.paddingLeft,
              o = e.paddingRight;
            return (
              r.max -
              r.min -
              parseFloat(void 0 === n ? "0" : n) -
              parseFloat(void 0 === o ? "0" : o)
            );
          },
          height: function (t, e) {
            var r = t.y,
              n = e.paddingTop,
              o = e.paddingBottom;
            return (
              r.max -
              r.min -
              parseFloat(void 0 === n ? "0" : n) -
              parseFloat(void 0 === o ? "0" : o)
            );
          },
          top: function (t, e) {
            return parseFloat(e.top);
          },
          left: function (t, e) {
            return parseFloat(e.left);
          },
          bottom: function (t, e) {
            var r = t.y;
            return parseFloat(e.top) + (r.max - r.min);
          },
          right: function (t, e) {
            var r = t.x;
            return parseFloat(e.left) + (r.max - r.min);
          },
          x: Nn(4, 13),
          y: Nn(5, 14),
        },
        Bn = function (t, e, r, n) {
          void 0 === r && (r = {}),
            void 0 === n && (n = {}),
            (e = (0, u.pi)({}, e)),
            (n = (0, u.pi)({}, n));
          var o = Object.keys(e).filter(Cn),
            i = [],
            a = !1,
            s = [];
          if (
            (o.forEach(function (o) {
              var u,
                l = t.getValue(o);
              if (t.hasValue(o)) {
                var c = r[o],
                  f = xr(c),
                  p = e[o];
                if (St(p)) {
                  var d = p.length,
                    m = null === p[0] ? 1 : 0;
                  f = xr((c = p[m]));
                  for (var v = m; v < d; v++)
                    u
                      ? (0, h.k)(
                          xr(p[v]) === u,
                          "All keyframes must be of the same type"
                        )
                      : ((u = xr(p[v])),
                        (0, h.k)(
                          u === f || (Rn(f) && Rn(u)),
                          "Keyframes must be of the same dimension as the current value"
                        ));
                } else u = xr(p);
                if (f !== u)
                  if (Rn(f) && Rn(u)) {
                    var y,
                      g = l.get();
                    "string" == typeof g && l.set(parseFloat(g)),
                      "string" == typeof p
                        ? (e[o] = parseFloat(p))
                        : Array.isArray(p) &&
                          u === J.px &&
                          (e[o] = p.map(parseFloat));
                  } else
                    (null == f ? void 0 : f.transform) &&
                    (null == u ? void 0 : u.transform) &&
                    (0 === c || 0 === p)
                      ? 0 === c
                        ? l.set(u.transform(c))
                        : (e[o] = f.transform(p))
                      : (a ||
                          ((y = []),
                          In.forEach(function (e) {
                            var r = t.getValue(e);
                            void 0 !== r &&
                              (y.push([e, r.get()]),
                              r.set(e.startsWith("scale") ? 1 : 0));
                          }),
                          y.length && t.syncRender(),
                          (i = y),
                          (a = !0)),
                        s.push(o),
                        (n[o] = void 0 !== n[o] ? n[o] : e[o]),
                        Ln(l, p));
              }
            }),
            !s.length)
          )
            return { target: e, transitionEnd: n };
          var l = s.indexOf("height") >= 0 ? window.pageYOffset : null,
            c = (function (t, e, r) {
              var n = e.measureViewportBox(),
                o = e.getInstance(),
                i = getComputedStyle(o),
                a = i.display,
                s = {};
              "none" === a && e.setStaticValue("display", t.display || "block"),
                r.forEach(function (t) {
                  s[t] = Dn[t](n, i);
                }),
                e.syncRender();
              var u = e.measureViewportBox();
              return (
                r.forEach(function (r) {
                  Ln(e.getValue(r), s[r]), (t[r] = Dn[r](u, i));
                }),
                t
              );
            })(e, t, s);
          return (
            i.length &&
              i.forEach(function (e) {
                var r = (0, u.CR)(e, 2),
                  n = r[0],
                  o = r[1];
                t.getValue(n).set(o);
              }),
            t.syncRender(),
            null !== l && window.scrollTo({ top: l }),
            { target: c, transitionEnd: n }
          );
        },
        Un = {
          treeType: "dom",
          readValueFromInstance: function (t, e) {
            if (q(e)) {
              var r = cr(e);
              return (r && r.default) || 0;
            }
            var n = window.getComputedStyle(t);
            return (X(e) ? n.getPropertyValue(e) : n[e]) || 0;
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          },
          getBaseTarget: function (t, e) {
            var r;
            return null === (r = t.style) || void 0 === r ? void 0 : r[e];
          },
          measureViewportBox: function (t, e) {
            return vn(t, e.transformPagePoint);
          },
          resetTransform: function (t, e, r) {
            var n = r.transformTemplate;
            (e.style.transform = n ? n({}, "") : "none"), t.scheduleRender();
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform;
          },
          removeValueFromRenderState: function (t, e) {
            delete e.vars[t], delete e.style[t];
          },
          makeTargetAnimatable: function (t, e, r, n) {
            var o = r.transformValues;
            void 0 === n && (n = !0);
            var i = e.transition,
              a = e.transitionEnd,
              s = (0, u._T)(e, ["transition", "transitionEnd"]),
              l = (function (t, e, r) {
                var n,
                  o,
                  i = {};
                for (var a in t)
                  i[a] =
                    null !==
                      (n = (function (t, e) {
                        if (e) return (e[t] || e.default || e).from;
                      })(a, e)) && void 0 !== n
                      ? n
                      : null === (o = r.getValue(a)) || void 0 === o
                      ? void 0
                      : o.get();
                return i;
              })(s, i || {}, t);
            if ((o && (a && (a = o(a)), s && (s = o(s)), l && (l = o(l))), n)) {
              !(function (t, e, r) {
                var n,
                  o,
                  i,
                  a = Object.keys(e).filter(function (e) {
                    return !t.hasValue(e);
                  }),
                  s = a.length;
                if (s)
                  for (var u = 0; u < s; u++) {
                    var l,
                      c = a[u],
                      f = e[c],
                      p = null;
                    Array.isArray(f) && (p = f[0]),
                      null === p &&
                        (p =
                          null !==
                            (o =
                              null !== (n = r[c]) && void 0 !== n
                                ? n
                                : t.readValue(c)) && void 0 !== o
                            ? o
                            : e[c]),
                      null != p &&
                        ("string" == typeof p &&
                        (/^\-?\d*\.?\d+$/.test(p) || /^0[^.\s]+$/.test(p))
                          ? (p = parseFloat(p))
                          : ((l = p),
                            !Er.find(br(l)) && $e.P.test(f) && (p = fr(c, f))),
                        t.addValue(c, (0, gr.B)(p)),
                        (null !== (i = r[c]) && void 0 !== i) || (r[c] = p),
                        t.setBaseTarget(c, p));
                  }
              })(t, s, l);
              var c = (function (t, e, r, n) {
                var o,
                  i,
                  a = (function (t, e, r) {
                    var n,
                      o = (0, u._T)(e, []),
                      i = t.getInstance();
                    if (!(i instanceof Element))
                      return { target: o, transitionEnd: r };
                    for (var a in (r && (r = (0, u.pi)({}, r)),
                    t.forEachValue(function (t) {
                      var e = t.get();
                      if (On(e)) {
                        var r = Pn(e, i);
                        r && t.set(r);
                      }
                    }),
                    o)) {
                      var s = o[a];
                      if (On(s)) {
                        var l = Pn(s, i);
                        l &&
                          ((o[a] = l),
                          r &&
                            ((null !== (n = r[a]) && void 0 !== n) ||
                              (r[a] = s)));
                      }
                    }
                    return { target: o, transitionEnd: r };
                  })(t, e, n);
                return (
                  (o = e = a.target),
                  (i = n = a.transitionEnd),
                  Object.keys(o).some(Cn)
                    ? Bn(t, o, r, i)
                    : { target: o, transitionEnd: i }
                );
              })(t, s, l, a);
              (a = c.transitionEnd), (s = c.target);
            }
            return (0, u.pi)({ transition: i, transitionEnd: a }, s);
          },
          scrapeMotionValuesFromProps: wt,
          build: function (t, e, r, n, o) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? "visible" : "hidden"),
              rt(e, r, n, o.transformTemplate);
          },
          render: yt,
        },
        _n = Sn(Un),
        Fn = Sn(
          (0, u.pi)((0, u.pi)({}, Un), {
            getBaseTarget: function (t, e) {
              return t[e];
            },
            readValueFromInstance: function (t, e) {
              var r;
              return q(e)
                ? (null === (r = cr(e)) || void 0 === r ? void 0 : r.default) ||
                    0
                : ((e = gt.has(e) ? e : vt(e)), t.getAttribute(e));
            },
            scrapeMotionValuesFromProps: xt,
            build: function (t, e, r, n, o) {
              pt(e, r, n, o.transformTemplate);
            },
            render: bt,
          })
        ),
        zn = function (t, e) {
          return _(t)
            ? Fn(e, { enableHardwareAcceleration: !1 })
            : _n(e, { enableHardwareAcceleration: !0 });
        };
      function Gn(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      var Wn = {
          correct: function (t, e) {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!J.px.test(t)) return t;
              t = parseFloat(t);
            }
            var r = Gn(t, e.target.x),
              n = Gn(t, e.target.y);
            return "".concat(r, "% ").concat(n, "%");
          },
        },
        Hn = "_$css",
        qn = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, u.ZT)(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this,
                e = this.props,
                r = e.visualElement,
                n = e.layoutGroup,
                o = e.switchLayoutGroup,
                i = e.layoutId,
                a = r.projection;
              Object.assign(F, Yn),
                a &&
                  ((null == n ? void 0 : n.group) && n.group.add(a),
                  (null == o ? void 0 : o.register) && i && o.register(a),
                  a.root.didUpdate(),
                  a.addEventListener("animationComplete", function () {
                    t.safeToRemove();
                  }),
                  a.setOptions(
                    (0, u.pi)((0, u.pi)({}, a.options), {
                      onExitComplete: function () {
                        return t.safeToRemove();
                      },
                    })
                  )),
                (N.hasEverUpdated = !0);
            }),
            (e.prototype.getSnapshotBeforeUpdate = function (t) {
              var e = this,
                r = this.props,
                n = r.layoutDependency,
                o = r.visualElement,
                i = r.drag,
                a = r.isPresent,
                s = o.projection;
              return (
                s &&
                  ((s.isPresent = a),
                  i || t.layoutDependency !== n || void 0 === n
                    ? s.willUpdate()
                    : this.safeToRemove(),
                  t.isPresent === a ||
                    (a
                      ? s.promote()
                      : s.relegate() ||
                        Ie.ZP.postRender(function () {
                          var t;
                          (null === (t = s.getStack()) || void 0 === t
                            ? void 0
                            : t.members.length) || e.safeToRemove();
                        }))),
                null
              );
            }),
            (e.prototype.componentDidUpdate = function () {
              var t = this.props.visualElement.projection;
              t &&
                (t.root.didUpdate(),
                !t.currentAnimation && t.isLead() && this.safeToRemove());
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this.props,
                e = t.visualElement,
                r = t.layoutGroup,
                n = t.switchLayoutGroup,
                o = e.projection;
              o &&
                (o.scheduleCheckAfterUnmount(),
                (null == r ? void 0 : r.group) && r.group.remove(o),
                (null == n ? void 0 : n.deregister) && n.deregister(o));
            }),
            (e.prototype.safeToRemove = function () {
              var t = this.props.safeToRemove;
              null == t || t();
            }),
            (e.prototype.render = function () {
              return null;
            }),
            e
          );
        })(l.Component),
        Yn = {
          borderRadius: (0, u.pi)((0, u.pi)({}, Wn), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }),
          borderTopLeftRadius: Wn,
          borderTopRightRadius: Wn,
          borderBottomLeftRadius: Wn,
          borderBottomRightRadius: Wn,
          boxShadow: {
            correct: function (t, e) {
              var r = e.treeScale,
                n = e.projectionDelta,
                o = t,
                i = t.includes("var("),
                a = [];
              i &&
                (t = t.replace(kn, function (t) {
                  return a.push(t), Hn;
                }));
              var s = $e.P.parse(t);
              if (s.length > 5) return o;
              var u = $e.P.createTransformer(t),
                l = "number" != typeof s[0] ? 1 : 0,
                c = n.x.scale * r.x,
                f = n.y.scale * r.y;
              (s[0 + l] /= c), (s[1 + l] /= f);
              var p = (0, Fr.C)(c, f, 0.5);
              "number" == typeof s[2 + l] && (s[2 + l] /= p),
                "number" == typeof s[3 + l] && (s[3 + l] /= p);
              var d = u(s);
              if (i) {
                var h = 0;
                d = d.replace(Hn, function () {
                  var t = a[h];
                  return h++, t;
                });
              }
              return d;
            },
          },
        },
        Zn = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        $n = Zn.length,
        Kn = function (t) {
          return "string" == typeof t ? parseFloat(t) : t;
        },
        Xn = function (t) {
          return "number" == typeof t || J.px.test(t);
        };
      function Jn(t, e) {
        var r;
        return null !== (r = t[e]) && void 0 !== r ? r : t.borderRadius;
      }
      var Qn = eo(0, 0.5, Oe),
        to = eo(0.5, 0.95, xe);
      function eo(t, e, r) {
        return function (n) {
          return n < t ? 0 : n > e ? 1 : r((0, zr.Y)(t, e, n));
        };
      }
      function ro(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function no(t, e) {
        ro(t.x, e.x), ro(t.y, e.y);
      }
      function oo(t, e, r, n, o) {
        return (
          (t = n + (1 / r) * ((t -= e) - n)),
          void 0 !== o && (t = n + (1 / o) * (t - n)),
          t
        );
      }
      function io(t, e, r, n, o) {
        var i = (0, u.CR)(r, 3),
          a = i[0],
          s = i[1],
          l = i[2];
        !(function (t, e, r, n, o, i, a) {
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = 1),
            void 0 === n && (n = 0.5),
            void 0 === i && (i = t),
            void 0 === a && (a = t),
            J.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, Fr.C)(a.min, a.max, e / 100) - a.min)),
            "number" == typeof e)
          ) {
            var s = (0, Fr.C)(i.min, i.max, n);
            t === i && (s -= e),
              (t.min = oo(t.min, e, r, s, o)),
              (t.max = oo(t.max, e, r, s, o));
          }
        })(t, e[a], e[s], e[l], e.scale, n, o);
      }
      var ao = ["x", "scaleX", "originX"],
        so = ["y", "scaleY", "originY"];
      function uo(t, e, r, n) {
        io(t.x, e, ao, null == r ? void 0 : r.x, null == n ? void 0 : n.x),
          io(t.y, e, so, null == r ? void 0 : r.y, null == n ? void 0 : n.y);
      }
      function lo(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function co(t) {
        return lo(t.x) && lo(t.y);
      }
      function fo(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      var po = r(10010),
        ho = (function () {
          function t() {
            this.members = [];
          }
          return (
            (t.prototype.add = function (t) {
              (0, po.y4)(this.members, t), t.scheduleRender();
            }),
            (t.prototype.remove = function (t) {
              if (
                ((0, po.cl)(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead)
              ) {
                var e = this.members[this.members.length - 1];
                e && this.promote(e);
              }
            }),
            (t.prototype.relegate = function (t) {
              var e,
                r = this.members.findIndex(function (e) {
                  return t === e;
                });
              if (0 === r) return !1;
              for (var n = r; n >= 0; n--) {
                var o = this.members[n];
                if (!1 !== o.isPresent) {
                  e = o;
                  break;
                }
              }
              return !!e && (this.promote(e), !0);
            }),
            (t.prototype.promote = function (t, e) {
              var r,
                n = this.lead;
              t !== n &&
                ((this.prevLead = n),
                (this.lead = t),
                t.show(),
                n &&
                  (n.instance && n.scheduleRender(),
                  t.scheduleRender(),
                  (t.resumeFrom = n),
                  e && (t.resumeFrom.preserveOpacity = !0),
                  n.snapshot &&
                    ((t.snapshot = n.snapshot),
                    (t.snapshot.latestValues =
                      n.animationValues || n.latestValues),
                    (t.snapshot.isShared = !0)),
                  (null === (r = t.root) || void 0 === r
                    ? void 0
                    : r.isUpdating) && (t.isLayoutDirty = !0),
                  !1 === t.options.crossfade && n.hide()));
            }),
            (t.prototype.exitAnimationComplete = function () {
              this.members.forEach(function (t) {
                var e, r, n, o, i;
                null === (r = (e = t.options).onExitComplete) ||
                  void 0 === r ||
                  r.call(e),
                  null ===
                    (i =
                      null === (n = t.resumingFrom) || void 0 === n
                        ? void 0
                        : (o = n.options).onExitComplete) ||
                    void 0 === i ||
                    i.call(o);
              });
            }),
            (t.prototype.scheduleRender = function () {
              this.members.forEach(function (t) {
                t.instance && t.scheduleRender(!1);
              });
            }),
            (t.prototype.removeLeadSnapshot = function () {
              this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
            }),
            t
          );
        })();
      function mo(t, e, r) {
        var n = t.x.translate / e.x,
          o = t.y.translate / e.y,
          i = "translate3d(".concat(n, "px, ").concat(o, "px, 0) ");
        if (((i += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") ")), r)) {
          var a = r.rotate,
            s = r.rotateX,
            u = r.rotateY;
          a && (i += "rotate(".concat(a, "deg) ")),
            s && (i += "rotateX(".concat(s, "deg) ")),
            u && (i += "rotateY(".concat(u, "deg) "));
        }
        var l = t.x.scale * e.x,
          c = t.y.scale * e.y;
        return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" ===
          (i += "scale(".concat(l, ", ").concat(c, ")"))
          ? "none"
          : i;
      }
      var vo = function (t, e) {
          return t.depth - e.depth;
        },
        yo = (function () {
          function t() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (t.prototype.add = function (t) {
              (0, po.y4)(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.remove = function (t) {
              (0, po.cl)(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.forEach = function (t) {
              this.isDirty && this.children.sort(vo),
                (this.isDirty = !1),
                this.children.forEach(t);
            }),
            t
          );
        })();
      function go(t) {
        var e = t.attachResizeListener,
          r = t.defaultParent,
          n = t.measureScroll,
          o = t.checkIsScrollRoot,
          i = t.resetTransform;
        return (function () {
          function t(t, e, n) {
            var o = this;
            void 0 === e && (e = {}),
              void 0 === n && (n = null == r ? void 0 : r()),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                o.isUpdating && ((o.isUpdating = !1), o.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                o.nodes.forEach(Ao), o.nodes.forEach(Oo);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = t),
              (this.latestValues = e),
              (this.root = n ? n.root || n : this),
              (this.path = n
                ? (0, u.ev)((0, u.ev)([], (0, u.CR)(n.path), !1), [n], !1)
                : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (var i = 0; i < this.path.length; i++)
              this.path[i].shouldResetTransform = !0;
            this.root === this && (this.nodes = new yo());
          }
          return (
            (t.prototype.addEventListener = function (t, e) {
              return (
                this.eventHandlers.has(t) ||
                  this.eventHandlers.set(t, new xn.L()),
                this.eventHandlers.get(t).add(e)
              );
            }),
            (t.prototype.notifyListeners = function (t) {
              for (var e = [], r = 1; r < arguments.length; r++)
                e[r - 1] = arguments[r];
              var n = this.eventHandlers.get(t);
              null == n || n.notify.apply(n, (0, u.ev)([], (0, u.CR)(e), !1));
            }),
            (t.prototype.hasListeners = function (t) {
              return this.eventHandlers.has(t);
            }),
            (t.prototype.registerPotentialNode = function (t, e) {
              this.potentialNodes.set(t, e);
            }),
            (t.prototype.mount = function (t, r) {
              var n = this;
              if ((void 0 === r && (r = !1), !this.instance)) {
                (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
                  (this.instance = t);
                var o = this.options,
                  i = o.layoutId,
                  a = o.layout,
                  s = o.visualElement;
                if (
                  (s && !s.getInstance() && s.mount(t),
                  this.root.nodes.add(this),
                  null === (l = this.parent) ||
                    void 0 === l ||
                    l.children.add(this),
                  this.id && this.root.potentialNodes.delete(this.id),
                  r && (a || i) && (this.isLayoutDirty = !0),
                  e)
                ) {
                  var l,
                    c,
                    f = function () {
                      return (n.root.updateBlockedByResize = !1);
                    };
                  e(t, function () {
                    (n.root.updateBlockedByResize = !0),
                      clearTimeout(c),
                      (c = window.setTimeout(f, 250)),
                      N.hasAnimatedSinceResize &&
                        ((N.hasAnimatedSinceResize = !1), n.nodes.forEach(jo));
                  });
                }
                i && this.root.registerSharedNode(i, this),
                  !1 !== this.options.animate &&
                    s &&
                    (i || a) &&
                    this.addEventListener("didUpdate", function (t) {
                      var e,
                        r,
                        o,
                        i,
                        a,
                        l = t.delta,
                        c = t.hasLayoutChanged,
                        f = t.hasRelativeTargetChanged,
                        p = t.layout;
                      if (n.isTreeAnimationBlocked())
                        return (
                          (n.target = void 0), void (n.relativeTarget = void 0)
                        );
                      var d =
                          null !==
                            (r =
                              null !== (e = n.options.transition) &&
                              void 0 !== e
                                ? e
                                : s.getDefaultTransition()) && void 0 !== r
                            ? r
                            : Ro,
                        h = s.getProps(),
                        m = h.onLayoutAnimationStart,
                        v = h.onLayoutAnimationComplete,
                        y = !n.targetLayout || !fo(n.targetLayout, p) || f,
                        g = !c && f;
                      if (
                        (null === (o = n.resumeFrom) || void 0 === o
                          ? void 0
                          : o.instance) ||
                        g ||
                        (c && (y || !n.currentAnimation))
                      ) {
                        n.resumeFrom &&
                          ((n.resumingFrom = n.resumeFrom),
                          (n.resumingFrom.resumingFrom = void 0)),
                          n.setAnimationOrigin(l, g);
                        var b = (0, u.pi)((0, u.pi)({}, vr(d, "layout")), {
                          onPlay: m,
                          onComplete: v,
                        });
                        s.shouldReduceMotion && ((b.delay = 0), (b.type = !1)),
                          n.startAnimation(b);
                      } else c || 0 !== n.animationProgress || n.finishAnimation(), n.isLead() && (null === (a = (i = n.options).onExitComplete) || void 0 === a || a.call(i));
                      n.targetLayout = p;
                    });
              }
            }),
            (t.prototype.unmount = function () {
              var t, e;
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.remove(this),
                null === (e = this.parent) ||
                  void 0 === e ||
                  e.children.delete(this),
                (this.instance = void 0),
                Ie.qY.preRender(this.updateProjection);
            }),
            (t.prototype.blockUpdate = function () {
              this.updateManuallyBlocked = !0;
            }),
            (t.prototype.unblockUpdate = function () {
              this.updateManuallyBlocked = !1;
            }),
            (t.prototype.isUpdateBlocked = function () {
              return this.updateManuallyBlocked || this.updateBlockedByResize;
            }),
            (t.prototype.isTreeAnimationBlocked = function () {
              var t;
              return (
                this.isAnimationBlocked ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isTreeAnimationBlocked()) ||
                !1
              );
            }),
            (t.prototype.startUpdate = function () {
              var t;
              this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                null === (t = this.nodes) || void 0 === t || t.forEach(ko));
            }),
            (t.prototype.willUpdate = function (t) {
              if ((void 0 === t && (t = !0), this.root.isUpdateBlocked()))
                null === (r = (e = this.options).onExitComplete) ||
                  void 0 === r ||
                  r.call(e);
              else if (
                (this.root.isUpdating || this.root.startUpdate(),
                !this.isLayoutDirty)
              ) {
                this.isLayoutDirty = !0;
                for (var e, r, n, o = 0; o < this.path.length; o++) {
                  var i = this.path[o];
                  (i.shouldResetTransform = !0), i.updateScroll();
                }
                var a = this.options,
                  s = a.layoutId,
                  u = a.layout;
                if (void 0 !== s || u) {
                  var l =
                    null === (n = this.options.visualElement) || void 0 === n
                      ? void 0
                      : n.getProps().transformTemplate;
                  (this.prevTransformTemplateValue =
                    null == l ? void 0 : l(this.latestValues, "")),
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate");
                }
              }
            }),
            (t.prototype.didUpdate = function () {
              if (this.isUpdateBlocked())
                return (
                  this.unblockUpdate(),
                  this.clearAllSnapshots(),
                  void this.nodes.forEach(Eo)
                );
              this.isUpdating &&
                ((this.isUpdating = !1),
                this.potentialNodes.size &&
                  (this.potentialNodes.forEach(Mo),
                  this.potentialNodes.clear()),
                this.nodes.forEach(So),
                this.nodes.forEach(bo),
                this.nodes.forEach(wo),
                this.clearAllSnapshots(),
                Ie.iW.update(),
                Ie.iW.preRender(),
                Ie.iW.render());
            }),
            (t.prototype.clearAllSnapshots = function () {
              this.nodes.forEach(xo), this.sharedNodes.forEach(Po);
            }),
            (t.prototype.scheduleUpdateProjection = function () {
              Ie.ZP.preRender(this.updateProjection, !1, !0);
            }),
            (t.prototype.scheduleCheckAfterUnmount = function () {
              var t = this;
              Ie.ZP.postRender(function () {
                t.isLayoutDirty
                  ? t.root.didUpdate()
                  : t.root.checkUpdateFailed();
              });
            }),
            (t.prototype.updateSnapshot = function () {
              if (!this.snapshot && this.instance) {
                var t = this.measure(),
                  e = this.removeTransform(this.removeElementScroll(t));
                Vo(e),
                  (this.snapshot = {
                    measured: t,
                    layout: e,
                    latestValues: {},
                  });
              }
            }),
            (t.prototype.updateLayout = function () {
              if (
                this.instance &&
                (this.updateScroll(),
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                  this.isLayoutDirty)
              ) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                  for (var t, e = 0; e < this.path.length; e++)
                    this.path[e].updateScroll();
                var r = this.measure();
                Vo(r);
                var n = this.layout;
                (this.layout = {
                  measured: r,
                  actual: this.removeElementScroll(r),
                }),
                  (this.layoutCorrected = en()),
                  (this.isLayoutDirty = !1),
                  (this.projectionDelta = void 0),
                  this.notifyListeners("measure", this.layout.actual),
                  null === (t = this.options.visualElement) ||
                    void 0 === t ||
                    t.notifyLayoutMeasure(
                      this.layout.actual,
                      null == n ? void 0 : n.actual
                    );
              }
            }),
            (t.prototype.updateScroll = function () {
              this.options.layoutScroll &&
                this.instance &&
                ((this.isScrollRoot = o(this.instance)),
                (this.scroll = n(this.instance)));
            }),
            (t.prototype.resetTransform = function () {
              if (i) {
                var t,
                  e = this.isLayoutDirty || this.shouldResetTransform,
                  r = this.projectionDelta && !co(this.projectionDelta),
                  n =
                    null === (t = this.options.visualElement) || void 0 === t
                      ? void 0
                      : t.getProps().transformTemplate,
                  o = null == n ? void 0 : n(this.latestValues, ""),
                  a = o !== this.prevTransformTemplateValue;
                e &&
                  (r || sn(this.latestValues) || a) &&
                  (i(this.instance, o),
                  (this.shouldResetTransform = !1),
                  this.scheduleRender());
              }
            }),
            (t.prototype.measure = function () {
              var t = this.options.visualElement;
              if (!t) return en();
              var e = t.measureViewportBox(),
                r = this.root.scroll;
              return r && (fn(e.x, r.x), fn(e.y, r.y)), e;
            }),
            (t.prototype.removeElementScroll = function (t) {
              var e = en();
              no(e, t);
              for (var r = 0; r < this.path.length; r++) {
                var n = this.path[r],
                  o = n.scroll,
                  i = n.options,
                  a = n.isScrollRoot;
                if (n !== this.root && o && i.layoutScroll) {
                  if (a) {
                    no(e, t);
                    var s = this.root.scroll;
                    s && (fn(e.x, -s.x), fn(e.y, -s.y));
                  }
                  fn(e.x, o.x), fn(e.y, o.y);
                }
              }
              return e;
            }),
            (t.prototype.applyTransform = function (t, e) {
              void 0 === e && (e = !1);
              var r = en();
              no(r, t);
              for (var n = 0; n < this.path.length; n++) {
                var o = this.path[n];
                !e &&
                  o.options.layoutScroll &&
                  o.scroll &&
                  o !== o.root &&
                  mn(r, { x: -o.scroll.x, y: -o.scroll.y }),
                  sn(o.latestValues) && mn(r, o.latestValues);
              }
              return sn(this.latestValues) && mn(r, this.latestValues), r;
            }),
            (t.prototype.removeTransform = function (t) {
              var e,
                r = en();
              no(r, t);
              for (var n = 0; n < this.path.length; n++) {
                var o = this.path[n];
                if (o.instance && sn(o.latestValues)) {
                  an(o.latestValues) && o.updateSnapshot();
                  var i = en();
                  no(i, o.measure()),
                    uo(
                      r,
                      o.latestValues,
                      null === (e = o.snapshot) || void 0 === e
                        ? void 0
                        : e.layout,
                      i
                    );
                }
              }
              return sn(this.latestValues) && uo(r, this.latestValues), r;
            }),
            (t.prototype.setTargetDelta = function (t) {
              (this.targetDelta = t), this.root.scheduleUpdateProjection();
            }),
            (t.prototype.setOptions = function (t) {
              var e;
              this.options = (0, u.pi)(
                (0, u.pi)((0, u.pi)({}, this.options), t),
                { crossfade: null === (e = t.crossfade) || void 0 === e || e }
              );
            }),
            (t.prototype.clearMeasurements = function () {
              (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
            }),
            (t.prototype.resolveTargetDelta = function () {
              var t,
                e,
                r,
                n,
                o = this.options,
                i = o.layout,
                a = o.layoutId;
              this.layout &&
                (i || a) &&
                (!this.targetDelta &&
                  !this.relativeTarget &&
                  ((this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    this.relativeParent.layout &&
                    ((this.relativeTarget = en()),
                    (this.relativeTargetOrigin = en()),
                    $r(
                      this.relativeTargetOrigin,
                      this.layout.actual,
                      this.relativeParent.layout.actual
                    ),
                    no(this.relativeTarget, this.relativeTargetOrigin))),
                (this.relativeTarget || this.targetDelta) &&
                  (this.target ||
                    ((this.target = en()), (this.targetWithTransforms = en())),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  (null === (n = this.relativeParent) || void 0 === n
                    ? void 0
                    : n.target)
                    ? ((t = this.target),
                      (e = this.relativeTarget),
                      (r = this.relativeParent.target),
                      Yr(t.x, e.x, r.x),
                      Yr(t.y, e.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.actual
                          ))
                        : no(this.target, this.layout.actual),
                      cn(this.target, this.targetDelta))
                    : no(this.target, this.layout.actual),
                  this.attemptToResolveRelativeTarget &&
                    ((this.attemptToResolveRelativeTarget = !1),
                    (this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                      !!this.relativeParent.resumingFrom ==
                        !!this.resumingFrom &&
                      !this.relativeParent.options.layoutScroll &&
                      this.relativeParent.target &&
                      ((this.relativeTarget = en()),
                      (this.relativeTargetOrigin = en()),
                      $r(
                        this.relativeTargetOrigin,
                        this.target,
                        this.relativeParent.target
                      ),
                      no(this.relativeTarget, this.relativeTargetOrigin)))));
            }),
            (t.prototype.getClosestProjectingParent = function () {
              if (this.parent && !sn(this.parent.latestValues))
                return (this.parent.relativeTarget ||
                  this.parent.targetDelta) &&
                  this.parent.layout
                  ? this.parent
                  : this.parent.getClosestProjectingParent();
            }),
            (t.prototype.calcProjection = function () {
              var t,
                e = this.options,
                r = e.layout,
                n = e.layoutId;
              if (
                ((this.isTreeAnimating = !!(
                  (null === (t = this.parent) || void 0 === t
                    ? void 0
                    : t.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation
                )),
                this.isTreeAnimating ||
                  (this.targetDelta = this.relativeTarget = void 0),
                this.layout && (r || n))
              ) {
                var o = this.getLead();
                no(this.layoutCorrected, this.layout.actual),
                  (function (t, e, r, n) {
                    void 0 === n && (n = !1);
                    var o,
                      i,
                      a,
                      s,
                      u = r.length;
                    if (u) {
                      e.x = e.y = 1;
                      for (var l = 0; l < u; l++)
                        (s = (a = r[l]).projectionDelta),
                          "contents" !==
                            (null ===
                              (i =
                                null === (o = a.instance) || void 0 === o
                                  ? void 0
                                  : o.style) || void 0 === i
                              ? void 0
                              : i.display) &&
                            (n &&
                              a.options.layoutScroll &&
                              a.scroll &&
                              a !== a.root &&
                              mn(t, { x: -a.scroll.x, y: -a.scroll.y }),
                            s &&
                              ((e.x *= s.x.scale),
                              (e.y *= s.y.scale),
                              cn(t, s)),
                            n && sn(a.latestValues) && mn(t, a.latestValues));
                    }
                  })(
                    this.layoutCorrected,
                    this.treeScale,
                    this.path,
                    !!this.resumingFrom || this !== o
                  );
                var i = o.target;
                if (i) {
                  this.projectionDelta ||
                    ((this.projectionDelta = tn()),
                    (this.projectionDeltaWithTransform = tn()));
                  var a = this.treeScale.x,
                    s = this.treeScale.y,
                    u = this.projectionTransform;
                  qr(
                    this.projectionDelta,
                    this.layoutCorrected,
                    i,
                    this.latestValues
                  ),
                    (this.projectionTransform = mo(
                      this.projectionDelta,
                      this.treeScale
                    )),
                    (this.projectionTransform !== u ||
                      this.treeScale.x !== a ||
                      this.treeScale.y !== s) &&
                      ((this.hasProjected = !0),
                      this.scheduleRender(),
                      this.notifyListeners("projectionUpdate", i));
                }
              }
            }),
            (t.prototype.hide = function () {
              this.isVisible = !1;
            }),
            (t.prototype.show = function () {
              this.isVisible = !0;
            }),
            (t.prototype.scheduleRender = function (t) {
              var e, r, n;
              void 0 === t && (t = !0),
                null === (r = (e = this.options).scheduleRender) ||
                  void 0 === r ||
                  r.call(e),
                t &&
                  (null === (n = this.getStack()) ||
                    void 0 === n ||
                    n.scheduleRender()),
                this.resumingFrom &&
                  !this.resumingFrom.instance &&
                  (this.resumingFrom = void 0);
            }),
            (t.prototype.setAnimationOrigin = function (t, e) {
              var r,
                n = this;
              void 0 === e && (e = !1);
              var o = this.snapshot,
                i = (null == o ? void 0 : o.latestValues) || {},
                a = (0, u.pi)({}, this.latestValues),
                s = tn();
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !e);
              var l = en(),
                c = null == o ? void 0 : o.isShared,
                f =
                  1 >=
                  ((null === (r = this.getStack()) || void 0 === r
                    ? void 0
                    : r.members.length) || 0),
                p = !(
                  !c ||
                  f ||
                  !0 !== this.options.crossfade ||
                  this.path.some(Lo)
                );
              (this.animationProgress = 0),
                (this.mixTargetDelta = function (e) {
                  var r,
                    o,
                    u,
                    d = e / 1e3;
                  To(s.x, t.x, d),
                    To(s.y, t.y, d),
                    n.setTargetDelta(s),
                    n.relativeTarget &&
                      n.relativeTargetOrigin &&
                      n.layout &&
                      (null === (u = n.relativeParent) || void 0 === u
                        ? void 0
                        : u.layout) &&
                      ($r(l, n.layout.actual, n.relativeParent.layout.actual),
                      (r = n.relativeTarget),
                      (o = n.relativeTargetOrigin),
                      Co(r.x, o.x, l.x, d),
                      Co(r.y, o.y, l.y, d)),
                    c &&
                      ((n.animationValues = a),
                      (function (t, e, r, n, o, i) {
                        var a, s, u, l;
                        o
                          ? ((t.opacity = (0, Fr.C)(
                              0,
                              null !== (a = r.opacity) && void 0 !== a ? a : 1,
                              Qn(n)
                            )),
                            (t.opacityExit = (0, Fr.C)(
                              null !== (s = e.opacity) && void 0 !== s ? s : 1,
                              0,
                              to(n)
                            )))
                          : i &&
                            (t.opacity = (0, Fr.C)(
                              null !== (u = e.opacity) && void 0 !== u ? u : 1,
                              null !== (l = r.opacity) && void 0 !== l ? l : 1,
                              n
                            ));
                        for (var c = 0; c < $n; c++) {
                          var f = "border".concat(Zn[c], "Radius"),
                            p = Jn(e, f),
                            d = Jn(r, f);
                          (void 0 !== p || void 0 !== d) &&
                            (p || (p = 0),
                            d || (d = 0),
                            0 === p || 0 === d || Xn(p) === Xn(d)
                              ? ((t[f] = Math.max(
                                  (0, Fr.C)(Kn(p), Kn(d), n),
                                  0
                                )),
                                (J.aQ.test(d) || J.aQ.test(p)) && (t[f] += "%"))
                              : (t[f] = d));
                        }
                        (e.rotate || r.rotate) &&
                          (t.rotate = (0, Fr.C)(
                            e.rotate || 0,
                            r.rotate || 0,
                            n
                          ));
                      })(a, i, n.latestValues, d, p, f)),
                    n.root.scheduleUpdateProjection(),
                    n.scheduleRender(),
                    (n.animationProgress = d);
                }),
                this.mixTargetDelta(0);
            }),
            (t.prototype.startAnimation = function (t) {
              var e,
                r,
                n = this;
              this.notifyListeners("animationStart"),
                null === (e = this.currentAnimation) ||
                  void 0 === e ||
                  e.stop(),
                this.resumingFrom &&
                  (null === (r = this.resumingFrom.currentAnimation) ||
                    void 0 === r ||
                    r.stop()),
                this.pendingAnimation &&
                  (Ie.qY.update(this.pendingAnimation),
                  (this.pendingAnimation = void 0)),
                (this.pendingAnimation = Ie.ZP.update(function () {
                  var e, r;
                  (N.hasAnimatedSinceResize = !0),
                    (n.currentAnimation =
                      (void 0 ===
                        (e = (0, u.pi)((0, u.pi)({}, t), {
                          onUpdate: function (e) {
                            var r;
                            n.mixTargetDelta(e),
                              null === (r = t.onUpdate) ||
                                void 0 === r ||
                                r.call(t, e);
                          },
                          onComplete: function () {
                            var e;
                            null === (e = t.onComplete) ||
                              void 0 === e ||
                              e.call(t),
                              n.completeAnimation();
                          },
                        })) && (e = {}),
                      yr("", (r = $(0) ? 0 : (0, gr.B)(0)), 1e3, e),
                      {
                        stop: function () {
                          return r.stop();
                        },
                        isAnimating: function () {
                          return r.isAnimating();
                        },
                      })),
                    n.resumingFrom &&
                      (n.resumingFrom.currentAnimation = n.currentAnimation),
                    (n.pendingAnimation = void 0);
                }));
            }),
            (t.prototype.completeAnimation = function () {
              var t;
              this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0)),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.exitAnimationComplete(),
                (this.resumingFrom =
                  this.currentAnimation =
                  this.animationValues =
                    void 0),
                this.notifyListeners("animationComplete");
            }),
            (t.prototype.finishAnimation = function () {
              var t;
              this.currentAnimation &&
                (null === (t = this.mixTargetDelta) ||
                  void 0 === t ||
                  t.call(this, 1e3),
                this.currentAnimation.stop()),
                this.completeAnimation();
            }),
            (t.prototype.applyTransformsToTarget = function () {
              var t = this.getLead(),
                e = t.targetWithTransforms,
                r = t.target,
                n = t.layout,
                o = t.latestValues;
              e &&
                r &&
                n &&
                (no(e, r),
                mn(e, o),
                qr(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  o
                ));
            }),
            (t.prototype.registerSharedNode = function (t, e) {
              var r, n, o;
              this.sharedNodes.has(t) || this.sharedNodes.set(t, new ho()),
                this.sharedNodes.get(t).add(e),
                e.promote({
                  transition:
                    null === (r = e.options.initialPromotionConfig) ||
                    void 0 === r
                      ? void 0
                      : r.transition,
                  preserveFollowOpacity:
                    null ===
                      (o =
                        null === (n = e.options.initialPromotionConfig) ||
                        void 0 === n
                          ? void 0
                          : n.shouldPreserveFollowOpacity) || void 0 === o
                      ? void 0
                      : o.call(n, e),
                });
            }),
            (t.prototype.isLead = function () {
              var t = this.getStack();
              return !t || t.lead === this;
            }),
            (t.prototype.getLead = function () {
              var t;
              return (
                (this.options.layoutId &&
                  (null === (t = this.getStack()) || void 0 === t
                    ? void 0
                    : t.lead)) ||
                this
              );
            }),
            (t.prototype.getPrevLead = function () {
              var t;
              return this.options.layoutId
                ? null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.prevLead
                : void 0;
            }),
            (t.prototype.getStack = function () {
              var t = this.options.layoutId;
              if (t) return this.root.sharedNodes.get(t);
            }),
            (t.prototype.promote = function (t) {
              var e = void 0 === t ? {} : t,
                r = e.needsReset,
                n = e.transition,
                o = e.preserveFollowOpacity,
                i = this.getStack();
              i && i.promote(this, o),
                r && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                n && this.setOptions({ transition: n });
            }),
            (t.prototype.relegate = function () {
              var t = this.getStack();
              return !!t && t.relegate(this);
            }),
            (t.prototype.resetRotation = function () {
              var t = this.options.visualElement;
              if (t) {
                for (var e = !1, r = {}, n = 0; n < z.length; n++) {
                  var o = "rotate" + z[n];
                  t.getStaticValue(o) &&
                    ((e = !0),
                    (r[o] = t.getStaticValue(o)),
                    t.setStaticValue(o, 0));
                }
                if (e) {
                  for (var o in (null == t || t.syncRender(), r))
                    t.setStaticValue(o, r[o]);
                  t.scheduleRender();
                }
              }
            }),
            (t.prototype.getProjectionStyles = function (t) {
              void 0 === t && (t = {});
              var e,
                r,
                n,
                o,
                i,
                a,
                s = {};
              if (!this.instance || this.isSVG) return s;
              if (!this.isVisible) return { visibility: "hidden" };
              s.visibility = "";
              var u =
                null === (e = this.options.visualElement) || void 0 === e
                  ? void 0
                  : e.getProps().transformTemplate;
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (s.opacity = ""),
                  (s.pointerEvents = At(t.pointerEvents) || ""),
                  (s.transform = u ? u(this.latestValues, "") : "none"),
                  s
                );
              var l = this.getLead();
              if (!this.projectionDelta || !this.layout || !l.target) {
                var c = {};
                return (
                  this.options.layoutId &&
                    ((c.opacity =
                      null !== (r = this.latestValues.opacity) && void 0 !== r
                        ? r
                        : 1),
                    (c.pointerEvents = At(t.pointerEvents) || "")),
                  this.hasProjected &&
                    !sn(this.latestValues) &&
                    ((c.transform = u ? u({}, "") : "none"),
                    (this.hasProjected = !1)),
                  c
                );
              }
              var f = l.animationValues || l.latestValues;
              this.applyTransformsToTarget(),
                (s.transform = mo(
                  this.projectionDeltaWithTransform,
                  this.treeScale,
                  f
                )),
                u && (s.transform = u(f, s.transform));
              var p = this.projectionDelta,
                d = p.x,
                h = p.y;
              for (var m in ((s.transformOrigin = ""
                .concat(100 * d.origin, "% ")
                .concat(100 * h.origin, "% 0")),
              l.animationValues
                ? (s.opacity =
                    l === this
                      ? null !==
                          (o =
                            null !== (n = f.opacity) && void 0 !== n
                              ? n
                              : this.latestValues.opacity) && void 0 !== o
                        ? o
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : f.opacityExit)
                : (s.opacity =
                    l === this
                      ? null !== (i = f.opacity) && void 0 !== i
                        ? i
                        : ""
                      : null !== (a = f.opacityExit) && void 0 !== a
                      ? a
                      : 0),
              F))
                if (void 0 !== f[m]) {
                  var v = F[m],
                    y = v.correct,
                    g = v.applyTo,
                    b = y(f[m], l);
                  if (g) for (var w = g.length, x = 0; x < w; x++) s[g[x]] = b;
                  else s[m] = b;
                }
              return (
                this.options.layoutId &&
                  (s.pointerEvents =
                    l === this ? At(t.pointerEvents) || "" : "none"),
                s
              );
            }),
            (t.prototype.clearSnapshot = function () {
              this.resumeFrom = this.snapshot = void 0;
            }),
            (t.prototype.resetTree = function () {
              this.root.nodes.forEach(function (t) {
                var e;
                return null === (e = t.currentAnimation) || void 0 === e
                  ? void 0
                  : e.stop();
              }),
                this.root.nodes.forEach(Eo),
                this.root.sharedNodes.clear();
            }),
            t
          );
        })();
      }
      function bo(t) {
        t.updateLayout();
      }
      function wo(t) {
        var e,
          r,
          n,
          o,
          i =
            null !==
              (r =
                null === (e = t.resumeFrom) || void 0 === e
                  ? void 0
                  : e.snapshot) && void 0 !== r
              ? r
              : t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          var a = t.layout,
            s = a.actual,
            u = a.measured;
          "size" === t.options.animationType
            ? rn(function (t) {
                var e = i.isShared ? i.measured[t] : i.layout[t],
                  r = Gr(e);
                (e.min = s[t].min), (e.max = e.min + r);
              })
            : "position" === t.options.animationType &&
              rn(function (t) {
                var e = i.isShared ? i.measured[t] : i.layout[t],
                  r = Gr(s[t]);
                e.max = e.min + r;
              });
          var l = tn();
          qr(l, s, i.layout);
          var c = tn();
          i.isShared
            ? qr(c, t.applyTransform(u, !0), i.measured)
            : qr(c, s, i.layout);
          var f = !co(l),
            p = !1;
          if (
            !t.resumeFrom &&
            ((t.relativeParent = t.getClosestProjectingParent()),
            t.relativeParent && !t.relativeParent.resumeFrom)
          ) {
            var d = t.relativeParent,
              h = d.snapshot,
              m = d.layout;
            if (h && m) {
              var v = en();
              $r(v, i.layout, h.layout);
              var y = en();
              $r(y, s, m.actual), fo(v, y) || (p = !0);
            }
          }
          t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: i,
            delta: c,
            layoutDelta: l,
            hasLayoutChanged: f,
            hasRelativeTargetChanged: p,
          });
        } else
          t.isLead() &&
            (null === (o = (n = t.options).onExitComplete) ||
              void 0 === o ||
              o.call(n));
        t.options.transition = void 0;
      }
      function xo(t) {
        t.clearSnapshot();
      }
      function Eo(t) {
        t.clearMeasurements();
      }
      function So(t) {
        var e = t.options.visualElement;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) &&
          e.notifyBeforeLayoutMeasure(),
          t.resetTransform();
      }
      function jo(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function Ao(t) {
        t.resolveTargetDelta();
      }
      function Oo(t) {
        t.calcProjection();
      }
      function ko(t) {
        t.resetRotation();
      }
      function Po(t) {
        t.removeLeadSnapshot();
      }
      function To(t, e, r) {
        (t.translate = (0, Fr.C)(e.translate, 0, r)),
          (t.scale = (0, Fr.C)(e.scale, 1, r)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function Co(t, e, r, n) {
        (t.min = (0, Fr.C)(e.min, r.min, n)),
          (t.max = (0, Fr.C)(e.max, r.max, n));
      }
      function Lo(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      var Ro = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function Mo(t, e) {
        for (var r = t.root, n = t.path.length - 1; n >= 0; n--)
          if (t.path[n].instance) {
            r = t.path[n];
            break;
          }
        var o = (r && r !== t.root ? r.instance : document).querySelector(
          '[data-projection-id="'.concat(e, '"]')
        );
        o && t.mount(o, !0);
      }
      function No(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function Vo(t) {
        No(t.x), No(t.y);
      }
      var Io = go({
          attachResizeListener: function (t, e) {
            return Ct(t, "resize", e);
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
          checkIsScrollRoot: function () {
            return !0;
          },
        }),
        Do = { current: void 0 },
        Bo = go({
          measureScroll: function (t) {
            return { x: t.scrollLeft, y: t.scrollTop };
          },
          defaultParent: function () {
            if (!Do.current) {
              var t = new Io(0, {});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (Do.current = t);
            }
            return Do.current;
          },
          resetTransform: function (t, e) {
            t.style.transform = null != e ? e : "none";
          },
          checkIsScrollRoot: function (t) {
            return "fixed" === window.getComputedStyle(t).position;
          },
        }),
        Uo = (0, u.pi)((0, u.pi)((0, u.pi)((0, u.pi)({}, Cr), ie), wn), {
          measureLayout: function (t) {
            var e = (0, u.CR)(ue(), 2),
              r = e[0],
              n = e[1],
              o = (0, l.useContext)(I);
            return l.createElement(
              qn,
              (0, u.pi)({}, t, {
                layoutGroup: o,
                switchLayoutGroup: (0, l.useContext)(D),
                isPresent: r,
                safeToRemove: n,
              })
            );
          },
        }),
        _o = (function (t) {
          function e(t, e) {
            var r, n, o, i, a, s, c;
            return (
              void 0 === e && (e = {}),
              (n = (r = (function (t, e) {
                var r, n, o;
                return (
                  (r = e.forwardMotionProps),
                  (n = _(t) ? Pt : Tt),
                  (0, u.pi)((0, u.pi)({}, n), {
                    preloadedFeatures: Uo,
                    useRender:
                      (void 0 === (o = void 0 !== r && r) && (o = !1),
                      function (t, e, r, n, i, a) {
                        var s = i.latestValues,
                          c = (_(t) ? ht : it)(e, s, a),
                          f = (function (t, e, r) {
                            var n = {};
                            for (var o in t)
                              (ut(o) ||
                                (!0 === r && st(o)) ||
                                (!e && !st(o)) ||
                                (t.draggable && o.startsWith("onDrag"))) &&
                                (n[o] = t[o]);
                            return n;
                          })(e, "string" == typeof t, o),
                          p = (0, u.pi)((0, u.pi)((0, u.pi)({}, f), c), {
                            ref: n,
                          });
                        return (
                          r && (p["data-projection-id"] = r),
                          (0, l.createElement)(t, p)
                        );
                      }),
                    createVisualElement: zn,
                    projectionNodeConstructor: Bo,
                    Component: t,
                  })
                );
              })(t, e)).preloadedFeatures),
              (o = r.createVisualElement),
              (i = r.projectionNodeConstructor),
              (a = r.useRender),
              (s = r.useVisualState),
              (c = r.Component),
              n &&
                (function (t) {
                  for (var e in t)
                    null !== t[e] &&
                      ("projectionNodeConstructor" === e
                        ? (d.projectionNodeConstructor = t[e])
                        : (d[e].Component = t[e]));
                })(n),
              (0, l.forwardRef)(function (t, e) {
                var r,
                  p,
                  O,
                  P,
                  T,
                  L,
                  U,
                  _,
                  F,
                  z,
                  G,
                  W,
                  H,
                  q,
                  Y,
                  Z,
                  $,
                  K,
                  X,
                  J,
                  Q,
                  tt,
                  et,
                  rt,
                  nt,
                  ot,
                  it,
                  at =
                    ((W = t.layoutId),
                    (H =
                      null === (G = (0, l.useContext)(I)) || void 0 === G
                        ? void 0
                        : G.id) && void 0 !== W
                      ? H + "-" + W
                      : W);
                t = (0, u.pi)((0, u.pi)({}, t), { layoutId: at });
                var st = (0, l.useContext)(g._),
                  ut = null,
                  lt =
                    ((Y = (q = (function (t, e) {
                      if (C(t)) {
                        var r = t.initial,
                          n = t.animate;
                        return {
                          initial: !1 === r || k(r) ? r : void 0,
                          animate: k(n) ? n : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, l.useContext)(b))).initial),
                    (Z = q.animate),
                    (0, l.useMemo)(
                      function () {
                        return { initial: Y, animate: Z };
                      },
                      [R(Y), R(Z)]
                    )),
                  ct = st.isStatic
                    ? void 0
                    : (0, M.h)(function () {
                        if (N.hasEverUpdated) return V++;
                      }),
                  ft = s(t, st.isStatic);
                return (
                  !st.isStatic &&
                    E.j &&
                    ((lt.visualElement =
                      (($ = (0, u.pi)((0, u.pi)({}, st), t)),
                      (K = o),
                      (X = (0, l.useContext)(m)),
                      (J = (0, l.useContext)(b).visualElement),
                      (Q = (0, l.useContext)(w)),
                      j ||
                        (function () {
                          if (((j = !0), E.j))
                            if (window.matchMedia) {
                              var t = window.matchMedia(
                                  "(prefers-reduced-motion)"
                                ),
                                e = function () {
                                  return (S.current = t.matches);
                                };
                              t.addListener(e), e();
                            } else S.current = !1;
                        })(),
                      (tt = (0, u.CR)((0, l.useState)(S.current), 1)[0]),
                      (rt =
                        "never" !==
                          (et = (0, l.useContext)(g._).reducedMotion) &&
                        ("always" === et || tt)),
                      (nt = (0, l.useRef)(void 0)),
                      K || (K = X.renderer),
                      !nt.current &&
                        K &&
                        (nt.current = K(c, {
                          visualState: ft,
                          parent: J,
                          props: $,
                          presenceId: null == Q ? void 0 : Q.id,
                          blockInitialAnimation:
                            !1 === (null == Q ? void 0 : Q.initial),
                          shouldReduceMotion: rt,
                        })),
                      (ot = nt.current),
                      (0, x.L)(function () {
                        null == ot || ot.syncRender();
                      }),
                      (0, l.useEffect)(function () {
                        var t;
                        null ===
                          (t = null == ot ? void 0 : ot.animationState) ||
                          void 0 === t ||
                          t.animateChanges();
                      }),
                      (0, x.L)(function () {
                        return function () {
                          return null == ot ? void 0 : ot.notifyUnmount();
                        };
                      }, []),
                      ot)),
                    (r = t),
                    (p = lt.visualElement),
                    (O = i || d.projectionNodeConstructor),
                    (T = r.layoutId),
                    (L = r.layout),
                    (U = r.drag),
                    (_ = r.dragConstraints),
                    (F = r.layoutScroll),
                    (z = (0, l.useContext)(D)),
                    !O ||
                      !p ||
                      (null == p ? void 0 : p.projection) ||
                      ((p.projection = new O(
                        ct,
                        p.getLatestValues(),
                        null === (P = p.parent) || void 0 === P
                          ? void 0
                          : P.projection
                      )),
                      p.projection.setOptions({
                        layoutId: T,
                        layout: L,
                        alwaysMeasureLayout: !!U || (_ && A(_)),
                        visualElement: p,
                        scheduleRender: function () {
                          return p.scheduleRender();
                        },
                        animationType: "string" == typeof L ? L : "both",
                        initialPromotionConfig: z,
                        layoutScroll: F,
                      })),
                    (ut = (function (t, e, r) {
                      var n = [],
                        o = (0, l.useContext)(m);
                      if (!e) return null;
                      "production" !== f &&
                        r &&
                        o.strict &&
                        (0, h.k)(
                          !1,
                          "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead."
                        );
                      for (var i = 0; i < y; i++) {
                        var a = v[i],
                          s = d[a],
                          c = s.isEnabled,
                          p = s.Component;
                        c(t) &&
                          p &&
                          n.push(
                            l.createElement(
                              p,
                              (0, u.pi)({ key: a }, t, { visualElement: e })
                            )
                          );
                      }
                      return n;
                    })(t, lt.visualElement, n))),
                  l.createElement(
                    B,
                    {
                      visualElement: lt.visualElement,
                      props: (0, u.pi)((0, u.pi)({}, st), t),
                    },
                    ut,
                    l.createElement(
                      b.Provider,
                      { value: lt },
                      a(
                        c,
                        t,
                        ct,
                        ((it = lt.visualElement),
                        (0, l.useCallback)(
                          function (t) {
                            var r;
                            t &&
                              (null === (r = ft.mount) ||
                                void 0 === r ||
                                r.call(ft, t)),
                              it && (t ? it.mount(t) : it.unmount()),
                              e &&
                                ("function" == typeof e
                                  ? e(t)
                                  : A(e) && (e.current = t));
                          },
                          [it]
                        )),
                        ft,
                        st.isStatic,
                        lt.visualElement
                      )
                    )
                  )
                );
              })
            );
          }
          if ("undefined" == typeof Proxy) return e;
          var r = new Map();
          return new Proxy(e, {
            get: function (t, n) {
              return r.has(n) || r.set(n, e(n)), r.get(n);
            },
          });
        })();
    },
    10010: function (t, e, r) {
      "use strict";
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function o(t, e) {
        var r = t.indexOf(e);
        r > -1 && t.splice(r, 1);
      }
      r.d(e, {
        cl: function () {
          return o;
        },
        y4: function () {
          return n;
        },
      });
    },
    11741: function (t, e, r) {
      "use strict";
      r.d(e, {
        j: function () {
          return n;
        },
      });
      var n = "undefined" != typeof document;
    },
    21560: function (t, e, r) {
      "use strict";
      r.d(e, {
        L: function () {
          return o;
        },
      });
      var n = r(10010),
        o = (function () {
          function t() {
            this.subscriptions = [];
          }
          return (
            (t.prototype.add = function (t) {
              var e = this;
              return (
                (0, n.y4)(this.subscriptions, t),
                function () {
                  return (0, n.cl)(e.subscriptions, t);
                }
              );
            }),
            (t.prototype.notify = function (t, e, r) {
              var n = this.subscriptions.length;
              if (n)
                if (1 === n) this.subscriptions[0](t, e, r);
                else
                  for (var o = 0; o < n; o++) {
                    var i = this.subscriptions[o];
                    i && i(t, e, r);
                  }
            }),
            (t.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (t.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            t
          );
        })();
    },
    96681: function (t, e, r) {
      "use strict";
      r.d(e, {
        h: function () {
          return o;
        },
      });
      var n = r(67294);
      function o(t) {
        var e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    58868: function (t, e, r) {
      "use strict";
      r.d(e, {
        L: function () {
          return o;
        },
      });
      var n = r(67294),
        o = r(11741).j ? n.useLayoutEffect : n.useEffect;
    },
    16034: function (t, e, r) {
      "use strict";
      r.d(e, {
        O: function () {
          return o;
        },
      });
      var n = new Set();
      function o(t, e, r) {
        t || n.has(e) || (console.warn(e), r && console.warn(r), n.add(e));
      }
    },
    33234: function (t, e, r) {
      "use strict";
      r.d(e, {
        B: function () {
          return s;
        },
      });
      var n = r(54735),
        o = r(99296),
        i = r(21560),
        a = (function () {
          function t(t) {
            var e = this;
            (this.version = "6.5.1"),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new i.L()),
              (this.velocityUpdateSubscribers = new i.L()),
              (this.renderSubscribers = new i.L()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, r) {
                void 0 === r && (r = !0), (e.prev = e.current), (e.current = t);
                var o = (0, n.$B)(),
                  i = o.delta,
                  a = o.timestamp;
                e.lastUpdated !== a &&
                  ((e.timeDelta = i),
                  (e.lastUpdated = a),
                  n.ZP.postRender(e.scheduleVelocityCheck)),
                  e.prev !== e.current && e.updateSubscribers.notify(e.current),
                  e.velocityUpdateSubscribers.getSize() &&
                    e.velocityUpdateSubscribers.notify(e.getVelocity()),
                  r && e.renderSubscribers.notify(e.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return n.ZP.postRender(e.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== e.lastUpdated &&
                  ((e.prev = e.current),
                  e.velocityUpdateSubscribers.notify(e.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity = !isNaN(parseFloat(this.current)));
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t);
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? (0, o.R)(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (t.prototype.start = function (t) {
              var e = this;
              return (
                this.stop(),
                new Promise(function (r) {
                  (e.hasAnimated = !0), (e.stopAnimation = t(r));
                }).then(function () {
                  return e.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            t
          );
        })();
      function s(t) {
        return new a(t);
      }
    },
    54735: function (t, e, r) {
      "use strict";
      r.d(e, {
        qY: function () {
          return d;
        },
        ZP: function () {
          return b;
        },
        iW: function () {
          return h;
        },
        $B: function () {
          return g;
        },
      });
      let n = (1 / 60) * 1e3,
        o =
          "undefined" != typeof performance
            ? () => performance.now()
            : () => Date.now(),
        i =
          "undefined" != typeof window
            ? (t) => window.requestAnimationFrame(t)
            : (t) => setTimeout(() => t(o()), n),
        a = !0,
        s = !1,
        u = !1,
        l = { delta: 0, timestamp: 0 },
        c = ["read", "update", "preRender", "render", "postRender"],
        f = c.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                r = [],
                n = 0,
                o = !1,
                i = !1,
                a = new WeakSet(),
                s = {
                  schedule: (t, i = !1, s = !1) => {
                    let u = s && o,
                      l = u ? e : r;
                    return (
                      i && a.add(t),
                      -1 === l.indexOf(t) &&
                        (l.push(t), u && o && (n = e.length)),
                      t
                    );
                  },
                  cancel: (t) => {
                    let e = r.indexOf(t);
                    -1 !== e && r.splice(e, 1), a.delete(t);
                  },
                  process: (u) => {
                    if (o) i = !0;
                    else {
                      if (
                        ((o = !0),
                        ([e, r] = [r, e]),
                        (r.length = 0),
                        (n = e.length))
                      )
                        for (let r = 0; r < n; r++) {
                          let n = e[r];
                          n(u), a.has(n) && (s.schedule(n), t());
                        }
                      (o = !1), i && ((i = !1), s.process(u));
                    }
                  },
                };
              return s;
            })(() => (s = !0))),
            t
          ),
          {}
        ),
        p = c.reduce((t, e) => {
          let r = f[e];
          return (
            (t[e] = (t, e = !1, n = !1) => (s || y(), r.schedule(t, e, n))), t
          );
        }, {}),
        d = c.reduce((t, e) => ((t[e] = f[e].cancel), t), {}),
        h = c.reduce((t, e) => ((t[e] = () => f[e].process(l)), t), {}),
        m = (t) => f[t].process(l),
        v = (t) => {
          (s = !1),
            (l.delta = a ? n : Math.max(Math.min(t - l.timestamp, 40), 1)),
            (l.timestamp = t),
            (u = !0),
            c.forEach(m),
            (u = !1),
            s && ((a = !1), i(v));
        },
        y = () => {
          (s = !0), (a = !0), u || i(v);
        },
        g = () => l;
      var b = p;
    },
    19252: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return Pt;
        },
      });
      var n,
        o = "en",
        i = {},
        a = {};
      function s(t) {
        return i[t] ? t : a[t.toLowerCase()] ? a[t.toLowerCase()] : void 0;
      }
      function u(t) {
        var e =
          (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
            .localeMatcher || "lookup";
        switch (e) {
          case "lookup":
          case "best fit":
            return (function (t) {
              var e = s(t);
              if (e) return e;
              for (var r = t.split("-"); t.length > 1; ) {
                r.pop();
                var n = s((t = r.join("-")));
                if (n) return n;
              }
            })(t);
          default:
            throw RangeError('Invalid "localeMatcher" option: '.concat(e));
        }
      }
      var l = {
        af: function (t) {
          return 1 == t ? "one" : "other";
        },
        am: function (t) {
          return t >= 0 && t <= 1 ? "one" : "other";
        },
        ar: function (t) {
          var e = String(t).split("."),
            r = Number(e[0]) == t && e[0].slice(-2);
          return 0 == t
            ? "zero"
            : 1 == t
            ? "one"
            : 2 == t
            ? "two"
            : r >= 3 && r <= 10
            ? "few"
            : r >= 11 && r <= 99
            ? "many"
            : "other";
        },
        ast: function (t) {
          var e = !String(t).split(".")[1];
          return 1 == t && e ? "one" : "other";
        },
        be: function (t) {
          var e = String(t).split("."),
            r = Number(e[0]) == t,
            n = r && e[0].slice(-1),
            o = r && e[0].slice(-2);
          return 1 == n && 11 != o
            ? "one"
            : n >= 2 && n <= 4 && (o < 12 || o > 14)
            ? "few"
            : (r && 0 == n) || (n >= 5 && n <= 9) || (o >= 11 && o <= 14)
            ? "many"
            : "other";
        },
        br: function (t) {
          var e = String(t).split("."),
            r = Number(e[0]) == t,
            n = r && e[0].slice(-1),
            o = r && e[0].slice(-2),
            i = r && e[0].slice(-6);
          return 1 == n && 11 != o && 71 != o && 91 != o
            ? "one"
            : 2 == n && 12 != o && 72 != o && 92 != o
            ? "two"
            : (3 == n || 4 == n || 9 == n) &&
              (o < 10 || o > 19) &&
              (o < 70 || o > 79) &&
              (o < 90 || o > 99)
            ? "few"
            : 0 != t && r && 0 == i
            ? "many"
            : "other";
        },
        bs: function (t) {
          var e = String(t).split("."),
            r = e[0],
            n = e[1] || "",
            o = !e[1],
            i = r.slice(-1),
            a = r.slice(-2),
            s = n.slice(-1),
            u = n.slice(-2);
          return (o && 1 == i && 11 != a) || (1 == s && 11 != u)
            ? "one"
            : (o && i >= 2 && i <= 4 && (a < 12 || a > 14)) ||
              (s >= 2 && s <= 4 && (u < 12 || u > 14))
            ? "few"
            : "other";
        },
        ceb: function (t) {
          var e = String(t).split("."),
            r = e[0],
            n = e[1] || "",
            o = !e[1],
            i = r.slice(-1),
            a = n.slice(-1);
          return (o && (1 == r || 2 == r || 3 == r)) ||
            (o && 4 != i && 6 != i && 9 != i) ||
            (!o && 4 != a && 6 != a && 9 != a)
            ? "one"
            : "other";
        },
        cs: function (t) {
          var e = String(t).split("."),
            r = e[0],
            n = !e[1];
          return 1 == t && n
            ? "one"
            : r >= 2 && r <= 4 && n
            ? "few"
            : n
            ? "other"
            : "many";
        },
        cy: function (t) {
          return 0 == t
            ? "zero"
            : 1 == t
            ? "one"
            : 2 == t
            ? "two"
            : 3 == t
            ? "few"
            : 6 == t
            ? "many"
            : "other";
        },
        da: function (t) {
          var e = String(t).split("."),
            r = e[0],
            n = Number(e[0]) == t;
          return 1 != t && (n || (0 != r && 1 != r)) ? "other" : "one";
        },
        dsb: function (t) {
          var e = String(t).split("."),
            r = e[0],
            n = e[1] || "",
            o = !e[1],
            i = r.slice(-2),
            a = n.slice(-2);
          return (o && 1 == i) || 1 == a
            ? "one"
            : (o && 2 == i) || 2 == a
            ? "two"
            : (o && (3 == i || 4 == i)) || 3 == a || 4 == a
            ? "few"
            : "other";
        },
        dz: function (t) {
          return "other";
        },
        es: function (t) {
          var e = String(t).split("."),
            r = e[0],
            n = !e[1],
            o = r.slice(-6);
          return 1 == t ? "one" : 0 != r && 0 == o && n ? "many" : "other";
        },
        ff: function (t) {
          return t >= 0 && t < 2 ? "one" : "other";
        },
        fr: function (t) {
          var e = String(t).split("."),
            r = e[0],
            n = !e[1],
            o = r.slice(-6);
          return t >= 0 && t < 2
            ? "one"
            : 0 != r && 0 == o && n
            ? "many"
            : "other";
        },
        ga: function (t) {
          var e = Number(String(t).split(".")[0]) == t;
          return 1 == t
            ? "one"
            : 2 == t
            ? "two"
            : e && t >= 3 && t <= 6
            ? "few"
            : e && t >= 7 && t <= 10
            ? "many"
            : "other";
        },
        gd: function (t) {
          var e = Number(String(t).split(".")[0]) == t;
          return 1 == t || 11 == t
            ? "one"
            : 2 == t || 12 == t
            ? "two"
            : (e && t >= 3 && t <= 10) || (e && t >= 13 && t <= 19)
            ? "few"
            : "other";
        },
        he: function (t) {
          var e = String(t).split("."),
            r = e[0],
            n = !e[1],
            o = Number(e[0]) == t,
            i = o && e[0].slice(-1);
          return 1 == t && n
            ? "one"
            : 2 == r && n
            ? "two"
            : n && (t < 0 || t > 10) && o && 0 == i
            ? "many"
            : "other";
        },
        is: function (t) {
          var e = String(t).split("."),
            r = e[0],
            n = Number(e[0]) == t,
            o = r.slice(-1),
            i = r.slice(-2);
          return (n && 1 == o && 11 != i) || !n ? "one" : "other";
        },
        it: function (t) {
          var e = String(t).split("."),
            r = e[0],
            n = !e[1],
            o = r.slice(-6);
          return 1 == t && n ? "one" : 0 != r && 0 == o && n ? "many" : "other";
        },
        ksh: function (t) {
          return 0 == t ? "zero" : 1 == t ? "one" : "other";
        },
        lt: function (t) {
          var e = String(t).split("."),
            r = e[1] || "",
            n = Number(e[0]) == t,
            o = n && e[0].slice(-1),
            i = n && e[0].slice(-2);
          return 1 == o && (i < 11 || i > 19)
            ? "one"
            : o >= 2 && o <= 9 && (i < 11 || i > 19)
            ? "few"
            : 0 != r
            ? "many"
            : "other";
        },
        lv: function (t) {
          var e = String(t).split("."),
            r = e[1] || "",
            n = r.length,
            o = Number(e[0]) == t,
            i = o && e[0].slice(-1),
            a = o && e[0].slice(-2),
            s = r.slice(-2),
            u = r.slice(-1);
          return (o && 0 == i) ||
            (a >= 11 && a <= 19) ||
            (2 == n && s >= 11 && s <= 19)
            ? "zero"
            : (1 == i && 11 != a) ||
              (2 == n && 1 == u && 11 != s) ||
              (2 != n && 1 == u)
            ? "one"
            : "other";
        },
        mk: function (t) {
          var e = String(t).split("."),
            r = e[0],
            n = e[1] || "",
            o = !e[1],
            i = r.slice(-1),
            a = r.slice(-2),
            s = n.slice(-1),
            u = n.slice(-2);
          return (o && 1 == i && 11 != a) || (1 == s && 11 != u)
            ? "one"
            : "other";
        },
        mt: function (t) {
          var e = String(t).split("."),
            r = Number(e[0]) == t && e[0].slice(-2);
          return 1 == t
            ? "one"
            : 0 == t || (r >= 2 && r <= 10)
            ? "few"
            : r >= 11 && r <= 19
            ? "many"
            : "other";
        },
        pa: function (t) {
          return 0 == t || 1 == t ? "one" : "other";
        },
        pl: function (t) {
          var e = String(t).split("."),
            r = e[0],
            n = !e[1],
            o = r.slice(-1),
            i = r.slice(-2);
          return 1 == t && n
            ? "one"
            : n && o >= 2 && o <= 4 && (i < 12 || i > 14)
            ? "few"
            : (n && 1 != r && (0 == o || 1 == o)) ||
              (n && o >= 5 && o <= 9) ||
              (n && i >= 12 && i <= 14)
            ? "many"
            : "other";
        },
        pt: function (t) {
          var e = String(t).split("."),
            r = e[0],
            n = !e[1],
            o = r.slice(-6);
          return 0 == r || 1 == r
            ? "one"
            : 0 != r && 0 == o && n
            ? "many"
            : "other";
        },
        ro: function (t) {
          var e = String(t).split("."),
            r = !e[1],
            n = Number(e[0]) == t && e[0].slice(-2);
          return 1 == t && r
            ? "one"
            : !r || 0 == t || (n >= 2 && n <= 19)
            ? "few"
            : "other";
        },
        ru: function (t) {
          var e = String(t).split("."),
            r = e[0],
            n = !e[1],
            o = r.slice(-1),
            i = r.slice(-2);
          return n && 1 == o && 11 != i
            ? "one"
            : n && o >= 2 && o <= 4 && (i < 12 || i > 14)
            ? "few"
            : (n && 0 == o) ||
              (n && o >= 5 && o <= 9) ||
              (n && i >= 11 && i <= 14)
            ? "many"
            : "other";
        },
        se: function (t) {
          return 1 == t ? "one" : 2 == t ? "two" : "other";
        },
        si: function (t) {
          var e = String(t).split("."),
            r = e[0],
            n = e[1] || "";
          return 0 == t || 1 == t || (0 == r && 1 == n) ? "one" : "other";
        },
        sl: function (t) {
          var e = String(t).split("."),
            r = e[0],
            n = !e[1],
            o = r.slice(-2);
          return n && 1 == o
            ? "one"
            : n && 2 == o
            ? "two"
            : (n && (3 == o || 4 == o)) || !n
            ? "few"
            : "other";
        },
      };
      function c(t) {
        return "pt-PT" === t
          ? t
          : (function (t) {
              var e = t.match(f);
              if (!e) throw TypeError("Invalid locale: ".concat(t));
              return e[1];
            })(t);
      }
      (l.as = l.am),
        (l.az = l.af),
        (l.bg = l.af),
        (l.bn = l.am),
        (l.brx = l.af),
        (l.ca = l.ast),
        (l.ce = l.af),
        (l.chr = l.af),
        (l.de = l.ast),
        (l.ee = l.af),
        (l.el = l.af),
        (l.en = l.ast),
        (l.et = l.ast),
        (l.eu = l.af),
        (l.fa = l.am),
        (l.fi = l.ast),
        (l.fil = l.ceb),
        (l.fo = l.af),
        (l.fur = l.af),
        (l.fy = l.ast),
        (l.gl = l.ast),
        (l.gu = l.am),
        (l.ha = l.af),
        (l.hi = l.am),
        (l.hr = l.bs),
        (l.hsb = l.dsb),
        (l.hu = l.af),
        (l.hy = l.ff),
        (l.ia = l.ast),
        (l.id = l.dz),
        (l.ig = l.dz),
        (l.ja = l.dz),
        (l.jgo = l.af),
        (l.jv = l.dz),
        (l.ka = l.af),
        (l.kea = l.dz),
        (l.kk = l.af),
        (l.kl = l.af),
        (l.km = l.dz),
        (l.kn = l.am),
        (l.ko = l.dz),
        (l.ku = l.af),
        (l.ky = l.af),
        (l.lb = l.af),
        (l.lkt = l.dz),
        (l.lo = l.dz),
        (l.ml = l.af),
        (l.mn = l.af),
        (l.mr = l.af),
        (l.ms = l.dz),
        (l.my = l.dz),
        (l.nb = l.af),
        (l.ne = l.af),
        (l.nl = l.ast),
        (l.nn = l.af),
        (l.no = l.af),
        (l.or = l.af),
        (l.pcm = l.am),
        (l.ps = l.af),
        (l.rm = l.af),
        (l.sah = l.dz),
        (l.sc = l.ast),
        (l.sd = l.af),
        (l.sk = l.cs),
        (l.so = l.af),
        (l.sq = l.af),
        (l.sr = l.bs),
        (l.su = l.dz),
        (l.sv = l.ast),
        (l.sw = l.ast),
        (l.ta = l.af),
        (l.te = l.af),
        (l.th = l.dz),
        (l.ti = l.pa),
        (l.tk = l.af),
        (l.to = l.dz),
        (l.tr = l.af),
        (l.ug = l.af),
        (l.uk = l.ru),
        (l.ur = l.ast),
        (l.uz = l.af),
        (l.vi = l.dz),
        (l.wae = l.af),
        (l.wo = l.dz),
        (l.yi = l.ast),
        (l.yo = l.dz),
        (l.yue = l.dz),
        (l.zh = l.dz),
        (l.zu = l.am);
      var f = /^([a-z0-9]+)/i;
      function p(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var d = (function () {
        var t, e;
        function r(t, e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, r);
          var n = r.supportedLocalesOf(t);
          if (0 === n.length) throw RangeError("Unsupported locale: " + t);
          if (e && "cardinal" !== e.type)
            throw RangeError('Only "cardinal" "type" is supported');
          this.$ = l[c(n[0])];
        }
        return (
          (e = [
            {
              key: "supportedLocalesOf",
              value: function (t) {
                return (
                  "string" == typeof t && (t = [t]),
                  t.filter(function (t) {
                    return l[c(t)];
                  })
                );
              },
            },
          ]),
          (t = [
            {
              key: "select",
              value: function (t) {
                return this.$(t);
              },
            },
          ]) && p(r.prototype, t),
          e && p(r, e),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })();
      function h(t) {
        return (h =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function m(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function v(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? m(Object(r), !0).forEach(function (e) {
                var n;
                (n = r[e]),
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function y(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r,
              n,
              o =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
            if (null != o) {
              var i = [],
                a = !0,
                s = !1;
              try {
                for (
                  o = o.call(t);
                  !(a = (r = o.next()).done) &&
                  (i.push(r.value), !e || i.length !== e);
                  a = !0
                );
              } catch (t) {
                (s = !0), (n = t);
              } finally {
                try {
                  a || null == o.return || o.return();
                } finally {
                  if (s) throw n;
                }
              }
              return i;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return g(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return g(t, e);
            }
          })(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function g(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function b(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var w = [
          "second",
          "minute",
          "hour",
          "day",
          "week",
          "month",
          "quarter",
          "year",
        ],
        x = ["auto", "always"],
        E = ["long", "short", "narrow"],
        S = ["lookup", "best fit"],
        j = (function () {
          var t;
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, e);
            var n = r.numeric,
              i = r.style,
              a = r.localeMatcher;
            if (
              ((this.numeric = "always"),
              (this.style = "long"),
              (this.localeMatcher = "lookup"),
              void 0 !== n)
            ) {
              if (0 > x.indexOf(n))
                throw RangeError('Invalid "numeric" option: '.concat(n));
              this.numeric = n;
            }
            if (void 0 !== i) {
              if (0 > E.indexOf(i))
                throw RangeError('Invalid "style" option: '.concat(i));
              this.style = i;
            }
            if (void 0 !== a) {
              if (0 > S.indexOf(a))
                throw RangeError('Invalid "localeMatcher" option: '.concat(a));
              this.localeMatcher = a;
            }
            if (
              ("string" == typeof t && (t = [t]),
              t.push(o),
              (this.locale = e.supportedLocalesOf(t, {
                localeMatcher: this.localeMatcher,
              })[0]),
              !this.locale)
            )
              throw Error("No supported locale was found");
            d.supportedLocalesOf(this.locale).length > 0
              ? (this.pluralRules = new d(this.locale))
              : console.warn(
                  '"'.concat(this.locale, '" locale is not supported')
                ),
              "undefined" != typeof Intl && Intl.NumberFormat
                ? ((this.numberFormat = new Intl.NumberFormat(this.locale)),
                  (this.numberingSystem =
                    this.numberFormat.resolvedOptions().numberingSystem))
                : (this.numberingSystem = "latn"),
              (this.locale = u(this.locale, {
                localeMatcher: this.localeMatcher,
              }));
          }
          return (
            (t = [
              {
                key: "format",
                value: function () {
                  var t = y(O(arguments), 2),
                    e = t[0],
                    r = t[1];
                  return this.getRule(e, r).replace(
                    "{0}",
                    this.formatNumber(Math.abs(e))
                  );
                },
              },
              {
                key: "formatToParts",
                value: function () {
                  var t = y(O(arguments), 2),
                    e = t[0],
                    r = t[1],
                    n = this.getRule(e, r),
                    o = n.indexOf("{0}");
                  if (o < 0) return [{ type: "literal", value: n }];
                  var i = [];
                  return (
                    o > 0 && i.push({ type: "literal", value: n.slice(0, o) }),
                    (i = i.concat(
                      this.formatNumberToParts(Math.abs(e)).map(function (t) {
                        return v(v({}, t), {}, { unit: r });
                      })
                    )),
                    o + 3 < n.length - 1 &&
                      i.push({ type: "literal", value: n.slice(o + 3) }),
                    i
                  );
                },
              },
              {
                key: "getRule",
                value: function (t, e) {
                  var r = i[this.locale][this.style][e];
                  if ("string" == typeof r) return r;
                  if ("auto" === this.numeric)
                    if (-2 === t || -1 === t) {
                      var n =
                        r["previous".concat(-1 === t ? "" : "-" + Math.abs(t))];
                      if (n) return n;
                    } else if (1 === t || 2 === t) {
                      var o =
                        r["next".concat(1 === t ? "" : "-" + Math.abs(t))];
                      if (o) return o;
                    } else if (0 === t && r.current) return r.current;
                  var a =
                    r[
                      t < 0 || (0 === t && 1 / t == -1 / 0) ? "past" : "future"
                    ];
                  return "string" == typeof a
                    ? a
                    : a[
                        (this.pluralRules &&
                          this.pluralRules.select(Math.abs(t))) ||
                          "other"
                      ] || a.other;
                },
              },
              {
                key: "formatNumber",
                value: function (t) {
                  return this.numberFormat
                    ? this.numberFormat.format(t)
                    : String(t);
                },
              },
              {
                key: "formatNumberToParts",
                value: function (t) {
                  return this.numberFormat && this.numberFormat.formatToParts
                    ? this.numberFormat.formatToParts(t)
                    : [{ type: "integer", value: this.formatNumber(t) }];
                },
              },
              {
                key: "resolvedOptions",
                value: function () {
                  return {
                    locale: this.locale,
                    style: this.style,
                    numeric: this.numeric,
                    numberingSystem: this.numberingSystem,
                  };
                },
              },
            ]),
            b(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        })();
      (j.supportedLocalesOf = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ("string" == typeof t) t = [t];
        else if (!Array.isArray(t))
          throw TypeError('Invalid "locales" argument');
        return t.filter(function (t) {
          return u(t, e);
        });
      }),
        (j.addLocale = function (t) {
          if (!t) throw Error("No locale data passed");
          (i[t.locale] = t), (a[t.locale.toLowerCase()] = t.locale);
        }),
        (j.setDefaultLocale = function (t) {
          o = t;
        }),
        (j.getDefaultLocale = function () {
          return o;
        }),
        (j.PluralRules = d);
      var A = 'Invalid "unit" argument';
      function O(t) {
        if (t.length < 2) throw TypeError('"unit" argument is required');
        return [
          (function (t) {
            if (((t = Number(t)), Number.isFinite && !Number.isFinite(t)))
              throw RangeError(
                "".concat('Invalid "number" argument', ": ").concat(t)
              );
            return t;
          })(t[0]),
          (function (t) {
            if ("symbol" === h(t)) throw TypeError(A);
            if (
              "string" != typeof t ||
              ("s" === t[t.length - 1] && (t = t.slice(0, t.length - 1)),
              0 > w.indexOf(t))
            )
              throw RangeError("".concat(A, ": ").concat(t));
            return t;
          })(t[1]),
        ];
      }
      function k(t) {
        return (k =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function P(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var T = (function () {
        var t;
        function e() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, e),
            (this.cache = {});
        }
        return (
          (t = [
            {
              key: "get",
              value: function () {
                for (
                  var t = this.cache, e = arguments.length, r = Array(e), n = 0;
                  n < e;
                  n++
                )
                  r[n] = arguments[n];
                for (var o = 0; o < r.length; o++) {
                  var i = r[o];
                  if ("object" !== k(t)) return;
                  t = t[i];
                }
                return t;
              },
            },
            {
              key: "put",
              value: function () {
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                  e[r] = arguments[r];
                for (
                  var n = e.pop(), o = e.pop(), i = this.cache, a = 0;
                  a < e.length;
                  a++
                ) {
                  var s = e[a];
                  "object" !== k(i[s]) && (i[s] = {}), (i = i[s]);
                }
                return (i[o] = n);
              },
            },
          ]),
          P(e.prototype, t),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      })();
      function C(t) {
        return (C =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function L(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function R(t) {
        return (R =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var M = {}.constructor;
      function N(t) {
        switch (t) {
          case "second":
            return 1;
          case "minute":
            return 60;
          case "hour":
            return 3600;
          case "day":
            return 86400;
          case "week":
            return 604800;
          case "month":
            return 2630016;
          case "year":
            return 31556952;
        }
      }
      function V(t) {
        return void 0 !== t.factor ? t.factor : N(t.unit || t.formatAs) || 1;
      }
      function I(t) {
        return "floor" === t ? Math.floor : Math.round;
      }
      function D(t) {
        return "floor" === t ? 1 : 0.5;
      }
      function B(t) {
        return (B =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function U(t, e) {
        var r,
          n = e.prevStep,
          o = e.timestamp,
          i = e.now,
          a = e.future,
          s = e.round;
        return (
          n &&
            (n.id || n.unit) &&
            (r = t["threshold_for_".concat(n.id || n.unit)]),
          void 0 === r &&
            void 0 !== t.threshold &&
            "function" == typeof (r = t.threshold) &&
            (r = r(i, a)),
          void 0 === r && (r = t.minTime),
          "object" === B(r) &&
            (r = n && n.id && void 0 !== r[n.id] ? r[n.id] : r.default),
          "function" == typeof r &&
            (r = r(o, {
              future: a,
              getMinTimeForUnit: function (t, e) {
                return _(t, e || (n && n.formatAs), { round: s });
              },
            })),
          void 0 === r &&
            t.test &&
            (r = t.test(o, { now: i, future: a }) ? 0 : 9007199254740991),
          void 0 === r &&
            (n
              ? t.formatAs &&
                n.formatAs &&
                (r = _(t.formatAs, n.formatAs, { round: s }))
              : (r = 0)),
          void 0 === r &&
            console.warn(
              "[javascript-time-ago] A step should specify `minTime`:\n" +
                JSON.stringify(t, null, 2)
            ),
          r
        );
      }
      function _(t, e, r) {
        var n,
          o = r.round,
          i = N(t);
        if (((n = N("now" === e ? t : e)), void 0 !== i && void 0 !== n))
          return i - n * (1 - D(o));
      }
      function F(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var z = {};
      function G(t) {
        return z[t];
      }
      function W(t) {
        if (!t) throw Error("[javascript-time-ago] No locale data passed.");
        z[t.locale] = t;
      }
      var H = {
        steps: [
          { formatAs: "now" },
          { formatAs: "second" },
          { formatAs: "minute" },
          { formatAs: "hour" },
          { formatAs: "day" },
          { formatAs: "week" },
          { formatAs: "month" },
          { formatAs: "year" },
        ],
        labels: "long",
      };
      function q(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Y(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? q(Object(r), !0).forEach(function (e) {
                var n;
                (n = r[e]),
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : q(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var Z = Y(
          Y({}, H),
          {},
          {
            steps: H.steps.filter(function (t) {
              return "second" !== t.formatAs;
            }),
          }
        ),
        $ = [
          { factor: 1, unit: "now" },
          { threshold: 1, threshold_for_now: 45.5, factor: 1, unit: "second" },
          { threshold: 45.5, factor: 60, unit: "minute" },
          { threshold: 150, granularity: 5, factor: 60, unit: "minute" },
          { threshold: 1350, factor: 1800, unit: "half-hour" },
          {
            threshold: 2550,
            threshold_for_minute: 3150,
            factor: 3600,
            unit: "hour",
          },
          { threshold: 73800, factor: 86400, unit: "day" },
          { threshold: 475200, factor: 604800, unit: "week" },
          { threshold: 2116800, factor: 2630016, unit: "month" },
          { threshold: 27615168, factor: 31556952, unit: "year" },
        ],
        K = {
          gradation: $,
          flavour: "long",
          units: ["now", "minute", "hour", "day", "week", "month", "year"],
        },
        X = {
          gradation: $,
          flavour: "long-time",
          units: ["now", "minute", "hour", "day", "week", "month", "year"],
        };
      function J(t) {
        return t instanceof Date ? t : new Date(t);
      }
      var Q = [
          { formatAs: "second" },
          { formatAs: "minute" },
          { formatAs: "hour" },
        ],
        tt = {};
      "object" === ("undefined" == typeof Intl ? "undefined" : C(Intl)) &&
      "function" == typeof Intl.DateTimeFormat
        ? Q.push(
            {
              minTime: function (t, e) {
                return e.future, (0, e.getMinTimeForUnit)("day");
              },
              format: function (t, e) {
                return (
                  tt[e] || (tt[e] = {}),
                  tt[e].dayMonth ||
                    (tt[e].dayMonth = new Intl.DateTimeFormat(e, {
                      month: "short",
                      day: "numeric",
                    })),
                  tt[e].dayMonth.format(J(t))
                );
              },
            },
            {
              minTime: function (t, e) {
                return e.future
                  ? (t -
                      (new Date(new Date(t).getFullYear(), 0).getTime() - 1)) /
                      1e3
                  : (new Date(new Date(t).getFullYear() + 1, 0).getTime() - t) /
                      1e3;
              },
              format: function (t, e) {
                return (
                  tt[e] || (tt[e] = {}),
                  tt[e].dayMonthYear ||
                    (tt[e].dayMonthYear = new Intl.DateTimeFormat(e, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })),
                  tt[e].dayMonthYear.format(J(t))
                );
              },
            }
          )
        : Q.push(
            { formatAs: "day" },
            { formatAs: "week" },
            { formatAs: "month" },
            { formatAs: "year" }
          );
      var et = { steps: Q, labels: ["mini", "short-time", "narrow", "short"] };
      function rt(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function nt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? rt(Object(r), !0).forEach(function (e) {
                var n;
                (n = r[e]),
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : rt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var ot = nt(
        nt({}, et),
        {},
        { steps: [{ formatAs: "now" }].concat(et.steps) }
      );
      function it(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function at(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? it(Object(r), !0).forEach(function (e) {
                var n;
                (n = r[e]),
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : it(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var st = at(
        at({}, et),
        {},
        {
          steps: et.steps.filter(function (t) {
            return "second" !== t.formatAs;
          }),
        }
      );
      function ut(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function lt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ut(Object(r), !0).forEach(function (e) {
                var n;
                (n = r[e]),
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ut(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var ct = lt(
        lt({}, st),
        {},
        { steps: [{ formatAs: "now" }].concat(st.steps) }
      );
      function ft(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function pt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ft(Object(r), !0).forEach(function (e) {
                var n;
                (n = r[e]),
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ft(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var dt = pt(
          pt({}, et),
          {},
          {
            steps: et.steps
              .filter(function (t) {
                return "second" !== t.formatAs;
              })
              .map(function (t) {
                return "minute" === t.formatAs
                  ? pt(pt({}, t), {}, { minTime: 60 })
                  : t;
              }),
          }
        ),
        ht = {
          steps: [
            { formatAs: "second" },
            { formatAs: "minute" },
            { formatAs: "hour" },
            { formatAs: "day" },
            { formatAs: "month" },
            { formatAs: "year" },
          ],
          labels: ["mini", "short-time", "narrow", "short"],
        };
      function mt(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function vt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? mt(Object(r), !0).forEach(function (e) {
                var n;
                (n = r[e]),
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : mt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var yt = vt(
        vt({}, ht),
        {},
        { steps: [{ formatAs: "now" }].concat(ht.steps) }
      );
      function gt(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function bt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? gt(Object(r), !0).forEach(function (e) {
                var n;
                (n = r[e]),
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : gt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var wt = bt(
        bt({}, ht),
        {},
        {
          steps: ht.steps.filter(function (t) {
            return "second" !== t.formatAs;
          }),
        }
      );
      function xt(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Et(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? xt(Object(r), !0).forEach(function (e) {
                var n;
                (n = r[e]),
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : xt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var St = Et(
        Et({}, wt),
        {},
        { steps: [{ formatAs: "now" }].concat(wt.steps) }
      );
      function jt(t) {
        return (jt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function At(t, e) {
        if (t) {
          if ("string" == typeof t) return Ot(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r)
          )
            return Array.from(t);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return Ot(t, e);
        }
      }
      function Ot(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function kt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var Pt = (function () {
          var t;
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              r = (
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              ).polyfill;
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, e),
              "string" == typeof t && (t = [t]),
              (this.locale = (function (t, e) {
                for (
                  var r,
                    n = (function (t, e) {
                      var r =
                        ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                        t["@@iterator"];
                      if (r) return (r = r.call(t)).next.bind(r);
                      if (
                        Array.isArray(t) ||
                        (r = (function (t, e) {
                          if (t) {
                            if ("string" == typeof t) return L(t, e);
                            var r = Object.prototype.toString
                              .call(t)
                              .slice(8, -1);
                            if (
                              ("Object" === r &&
                                t.constructor &&
                                (r = t.constructor.name),
                              "Map" === r || "Set" === r)
                            )
                              return Array.from(t);
                            if (
                              "Arguments" === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            )
                              return L(t, e);
                          }
                        })(t))
                      ) {
                        r && (t = r);
                        var n = 0;
                        return function () {
                          return n >= t.length
                            ? { done: !0 }
                            : { done: !1, value: t[n++] };
                        };
                      }
                      throw TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })(t);
                  !(r = n()).done;

                ) {
                  var o = r.value;
                  if (e(o)) return o;
                  for (var i = o.split("-"); i.length > 1; )
                    if ((i.pop(), e((o = i.join("-"))))) return o;
                }
                throw Error(
                  "No locale data has been registered for any of the locales: ".concat(
                    t.join(", ")
                  )
                );
              })(t.concat(e.getDefaultLocale()), G)),
              "undefined" != typeof Intl &&
                Intl.NumberFormat &&
                (this.numberFormat = new Intl.NumberFormat(this.locale)),
              !1 === r
                ? ((this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat),
                  (this.IntlPluralRules = Intl.PluralRules))
                : ((this.IntlRelativeTimeFormat = j),
                  (this.IntlPluralRules = j.PluralRules)),
              (this.relativeTimeFormatCache = new T()),
              (this.pluralRulesCache = new T());
          }
          return (
            (t = [
              {
                key: "format",
                value: function (t, e, r) {
                  r ||
                    (e &&
                    !(function (t) {
                      return (
                        "string" == typeof t ||
                        (void 0 !== R(t) &&
                          null !== t &&
                          t.constructor === M &&
                          (Array.isArray(t.steps) ||
                            Array.isArray(t.gradation) ||
                            Array.isArray(t.flavour) ||
                            "string" == typeof t.flavour ||
                            Array.isArray(t.labels) ||
                            "string" == typeof t.labels ||
                            Array.isArray(t.units) ||
                            "function" == typeof t.custom))
                      );
                    })(e)
                      ? ((r = e), (e = void 0))
                      : (r = {})),
                    e || (e = Z),
                    "string" == typeof e &&
                      (e = (function (t) {
                        switch (t) {
                          case "default":
                          case "round":
                            return H;
                          case "round-minute":
                            return Z;
                          case "approximate":
                          default:
                            return K;
                          case "time":
                          case "approximate-time":
                            return X;
                          case "mini":
                            return ht;
                          case "mini-now":
                            return yt;
                          case "mini-minute":
                            return wt;
                          case "mini-minute-now":
                            return St;
                          case "twitter":
                            return et;
                          case "twitter-now":
                            return ot;
                          case "twitter-minute":
                            return st;
                          case "twitter-minute-now":
                            return ct;
                          case "twitter-first-minute":
                            return dt;
                        }
                      })(e));
                  var n,
                    o,
                    i,
                    a,
                    s,
                    u,
                    l,
                    c = (function (t) {
                      if (
                        t.constructor === Date ||
                        ("object" === jt(t) && "function" == typeof t.getTime)
                      )
                        return t.getTime();
                      if ("number" == typeof t) return t;
                      throw Error(
                        "Unsupported relative time formatter input: "
                          .concat(jt(t), ", ")
                          .concat(t)
                      );
                    })(t),
                    f = this.getLabels(e.flavour || e.labels),
                    p = f.labels,
                    d = f.labelsType;
                  void 0 !== e.now && (l = e.now),
                    void 0 === l && void 0 !== r.now && (l = r.now),
                    void 0 === l && (l = Date.now());
                  var h = (l - c) / 1e3,
                    m = r.future || h < 0,
                    v =
                      ((n = G(this.locale).now),
                      (o = G(this.locale).long),
                      (i = p.now || (n && n.now))
                        ? "string" == typeof i
                          ? i
                          : m
                          ? i.future
                          : i.past
                        : o && o.second && o.second.current
                        ? o.second.current
                        : void 0);
                  if (e.custom) {
                    var y = e.custom({
                      now: l,
                      date: new Date(c),
                      time: c,
                      elapsed: h,
                      locale: this.locale,
                    });
                    if (void 0 !== y) return y;
                  }
                  var g =
                      ((a = e.units),
                      (s = Object.keys(p)),
                      v && s.push("now"),
                      a &&
                        (s = a.filter(function (t) {
                          return "now" === t || s.indexOf(t) >= 0;
                        })),
                      s),
                    b = r.round || e.round,
                    w =
                      (function (t) {
                        if (Array.isArray(t)) return t;
                      })(
                        (u = (function (t, e, r) {
                          var n = r.now,
                            o = r.future,
                            i = r.round,
                            a = r.units,
                            s = r.getNextStep,
                            u = (function (t, e, r) {
                              var n = r.now,
                                o = r.future,
                                i = r.round;
                              if (0 !== t.length) {
                                var a = (function t(e, r, n) {
                                  var o =
                                      arguments.length > 3 &&
                                      void 0 !== arguments[3]
                                        ? arguments[3]
                                        : 0,
                                    i = U(
                                      e[o],
                                      (function (t) {
                                        for (
                                          var e = 1;
                                          e < arguments.length;
                                          e++
                                        ) {
                                          var r =
                                            null != arguments[e]
                                              ? arguments[e]
                                              : {};
                                          e % 2
                                            ? F(Object(r), !0).forEach(
                                                function (e) {
                                                  var n;
                                                  (n = r[e]),
                                                    e in t
                                                      ? Object.defineProperty(
                                                          t,
                                                          e,
                                                          {
                                                            value: n,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                          }
                                                        )
                                                      : (t[e] = n);
                                                }
                                              )
                                            : Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(
                                                t,
                                                Object.getOwnPropertyDescriptors(
                                                  r
                                                )
                                              )
                                            : F(Object(r)).forEach(function (
                                                e
                                              ) {
                                                Object.defineProperty(
                                                  t,
                                                  e,
                                                  Object.getOwnPropertyDescriptor(
                                                    r,
                                                    e
                                                  )
                                                );
                                              });
                                        }
                                        return t;
                                      })(
                                        {
                                          prevStep: e[o - 1],
                                          timestamp: n.now - 1e3 * r,
                                        },
                                        n
                                      )
                                    );
                                  return void 0 === i || Math.abs(r) < i
                                    ? o - 1
                                    : o === e.length - 1
                                    ? o
                                    : t(e, r, n, o + 1);
                                })(t, e, {
                                  now: n,
                                  future: o || e < 0,
                                  round: i,
                                });
                                if (-1 !== a) {
                                  var s = t[a];
                                  return s.granularity &&
                                    0 ==
                                      I(i)(Math.abs(e) / V(s) / s.granularity) *
                                        s.granularity &&
                                    a > 0
                                    ? t[a - 1]
                                    : s;
                                }
                              }
                            })(
                              (t = t.filter(function (t) {
                                var e = t.unit,
                                  r = t.formatAs;
                                return !(e = e || r) || a.indexOf(e) >= 0;
                              })),
                              e,
                              { now: n, future: o, round: i }
                            );
                          return s
                            ? u
                              ? [t[t.indexOf(u) - 1], u, t[t.indexOf(u) + 1]]
                              : [void 0, void 0, t[0]]
                            : u;
                        })(e.gradation || e.steps || Z.steps, h, {
                          now: l,
                          units: g,
                          round: b,
                          future: m,
                          getNextStep: !0,
                        }))
                      ) ||
                      (function (t, e) {
                        var r,
                          n,
                          o =
                            null == t
                              ? null
                              : ("undefined" != typeof Symbol &&
                                  t[Symbol.iterator]) ||
                                t["@@iterator"];
                        if (null != o) {
                          var i = [],
                            a = !0,
                            s = !1;
                          try {
                            for (
                              o = o.call(t);
                              !(a = (r = o.next()).done) &&
                              (i.push(r.value), 3 !== i.length);
                              a = !0
                            );
                          } catch (t) {
                            (s = !0), (n = t);
                          } finally {
                            try {
                              a || null == o.return || o.return();
                            } finally {
                              if (s) throw n;
                            }
                          }
                          return i;
                        }
                      })(u) ||
                      At(u, 3) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })(),
                    x = w[0],
                    E = w[1],
                    S = w[2],
                    j =
                      this.formatDateForStep(c, E, h, {
                        labels: p,
                        labelsType: d,
                        nowLabel: v,
                        now: l,
                        future: m,
                        round: b,
                      }) || "";
                  return r.getTimeToNextUpdate
                    ? [
                        j,
                        (function (t, e, r) {
                          var n,
                            o = r.prevStep,
                            i = r.nextStep,
                            a = r.now,
                            s = r.future,
                            u = r.round,
                            l = t.getTime ? t.getTime() : t,
                            c = function (t) {
                              return (function (t, e, r) {
                                var n = r.now,
                                  o = r.round;
                                if (N(t)) {
                                  var i = 1e3 * N(t),
                                    a = Math.abs(e - n),
                                    s = I(o)(a / i) * i;
                                  return e > n
                                    ? s > 0
                                      ? a - s + ((1 - D(o)) * i + 1)
                                      : a - s + 1
                                    : -(a - s) + D(o) * i;
                                }
                              })(t, l, { now: a, round: u });
                            },
                            f = (function (t, e, r) {
                              var n = r.now,
                                o = r.future;
                              if (t) {
                                var i,
                                  a,
                                  s,
                                  u,
                                  l =
                                    void 0 ===
                                    (u = U(t, {
                                      timestamp: e,
                                      now: (a = (i = {
                                        now: n,
                                        future: o,
                                        round: r.round,
                                        prevStep: r.prevStep,
                                      }).now),
                                      future: (s = i.future),
                                      round: i.round,
                                      prevStep: i.prevStep,
                                    }))
                                      ? void 0
                                      : s
                                      ? e - 1e3 * u + 1
                                      : 0 === u && e === a
                                      ? 31536e9
                                      : e + 1e3 * u;
                                if (void 0 === l) return;
                                return l - n;
                              }
                              return o ? e - n + 1 : 31536e9;
                            })(s ? e : i, l, {
                              future: s,
                              now: a,
                              round: u,
                              prevStep: s ? o : e,
                            });
                          if (void 0 !== f) {
                            if (
                              e &&
                              (e.getTimeToNextUpdate &&
                                (n = e.getTimeToNextUpdate(l, {
                                  getTimeToNextUpdateForUnit: c,
                                  getRoundFunction: I,
                                  now: a,
                                  future: s,
                                  round: u,
                                })),
                              void 0 === n)
                            ) {
                              var p = e.unit || e.formatAs;
                              p && (n = c(p));
                            }
                            return void 0 === n ? f : Math.min(n, f);
                          }
                        })(c, E, {
                          nextStep: S,
                          prevStep: x,
                          now: l,
                          future: m,
                          round: b,
                        }),
                      ]
                    : j;
                },
              },
              {
                key: "formatDateForStep",
                value: function (t, e, r, n) {
                  var o = this,
                    i = n.labels,
                    a = n.labelsType,
                    s = n.nowLabel,
                    u = n.now,
                    l = n.future,
                    c = n.round;
                  if (e) {
                    if (e.format)
                      return e.format(t, this.locale, {
                        formatAs: function (t, e) {
                          return o.formatValue(e, t, { labels: i, future: l });
                        },
                        now: u,
                        future: l,
                      });
                    var f = e.unit || e.formatAs;
                    if (!f)
                      throw Error(
                        "[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(
                          JSON.stringify(e)
                        )
                      );
                    if ("now" === f) return s;
                    var p = Math.abs(r) / V(e);
                    e.granularity &&
                      (p = I(c)(p / e.granularity) * e.granularity);
                    var d = -1 * Math.sign(r) * I(c)(p);
                    switch ((0 === d && (d = l ? 0 : -0), a)) {
                      case "long":
                      case "short":
                      case "narrow":
                        return this.getFormatter(a).format(d, f);
                      default:
                        return this.formatValue(d, f, { labels: i, future: l });
                    }
                  }
                },
              },
              {
                key: "formatValue",
                value: function (t, e, r) {
                  var n = r.labels,
                    o = r.future;
                  return this.getFormattingRule(n, e, t, { future: o }).replace(
                    "{0}",
                    this.formatNumber(Math.abs(t))
                  );
                },
              },
              {
                key: "getFormattingRule",
                value: function (t, e, r, n) {
                  var o = n.future;
                  if ((this.locale, "string" == typeof (t = t[e]))) return t;
                  var i =
                    t[
                      0 === r
                        ? o
                          ? "future"
                          : "past"
                        : r < 0
                        ? "past"
                        : "future"
                    ] || t;
                  return "string" == typeof i
                    ? i
                    : i[this.getPluralRules().select(Math.abs(r))] || i.other;
                },
              },
              {
                key: "formatNumber",
                value: function (t) {
                  return this.numberFormat
                    ? this.numberFormat.format(t)
                    : String(t);
                },
              },
              {
                key: "getFormatter",
                value: function (t) {
                  return (
                    this.relativeTimeFormatCache.get(this.locale, t) ||
                    this.relativeTimeFormatCache.put(
                      this.locale,
                      t,
                      new this.IntlRelativeTimeFormat(this.locale, { style: t })
                    )
                  );
                },
              },
              {
                key: "getPluralRules",
                value: function () {
                  return (
                    this.pluralRulesCache.get(this.locale) ||
                    this.pluralRulesCache.put(
                      this.locale,
                      new this.IntlPluralRules(this.locale)
                    )
                  );
                },
              },
              {
                key: "getLabels",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  "string" == typeof t && (t = [t]),
                    (t = (t = t.map(function (t) {
                      switch (t) {
                        case "tiny":
                        case "mini-time":
                          return "mini";
                        default:
                          return t;
                      }
                    })).concat("long"));
                  for (
                    var e,
                      r = G(this.locale),
                      n = (function (t, e) {
                        var r =
                          ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                        if (r) return (r = r.call(t)).next.bind(r);
                        if (Array.isArray(t) || (r = At(t))) {
                          r && (t = r);
                          var n = 0;
                          return function () {
                            return n >= t.length
                              ? { done: !0 }
                              : { done: !1, value: t[n++] };
                          };
                        }
                        throw TypeError(
                          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })(t);
                    !(e = n()).done;

                  ) {
                    var o = e.value;
                    if (r[o]) return { labelsType: o, labels: r[o] };
                  }
                },
              },
            ]),
            kt(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        })(),
        Tt = "en";
      (Pt.getDefaultLocale = function () {
        return Tt;
      }),
        (Pt.setDefaultLocale = function (t) {
          return (Tt = t);
        }),
        (Pt.addDefaultLocale = function (t) {
          if (n)
            return console.error(
              "[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`."
            );
          (n = !0), Pt.setDefaultLocale(t.locale), Pt.addLocale(t);
        }),
        (Pt.addLocale = function (t) {
          W(t), j.addLocale(t);
        }),
        (Pt.locale = Pt.addLocale),
        (Pt.addLabels = function (t, e, r) {
          var n = G(t);
          n || (W({ locale: t }), (n = G(t))), (n[e] = r);
        });
    },
    6773: function (t, e, r) {
      "use strict";
      r.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (t, e, r) => Math.min(Math.max(r, t), e);
    },
    80734: function (t, e, r) {
      "use strict";
      r.d(e, {
        e: function () {
          return n;
        },
      });
      let n = (t) => "number" == typeof t;
    },
    59180: function (t, e, r) {
      "use strict";
      r.d(e, {
        s: function () {
          return k;
        },
      });
      var n = r(9326),
        o = r(72453),
        i = r(22960),
        a = r(78059),
        s = r(34582),
        u = r(24394);
      function l(t, e, r) {
        return (
          r < 0 && (r += 1),
          r > 1 && (r -= 1),
          r < 1 / 6
            ? t + 6 * (e - t) * r
            : r < 0.5
            ? e
            : r < 2 / 3
            ? t + (e - t) * (2 / 3 - r) * 6
            : t
        );
      }
      function c({ hue: t, saturation: e, lightness: r, alpha: n }) {
        (t /= 360), (r /= 100);
        let o = 0,
          i = 0,
          a = 0;
        if ((e /= 100)) {
          let n = r < 0.5 ? r * (1 + e) : r + e - r * e,
            s = 2 * r - n;
          (o = l(s, n, t + 1 / 3)), (i = l(s, n, t)), (a = l(s, n, t - 1 / 3));
        } else o = i = a = r;
        return {
          red: Math.round(255 * o),
          green: Math.round(255 * i),
          blue: Math.round(255 * a),
          alpha: n,
        };
      }
      let f = (t, e, r) => {
          let n = t * t;
          return Math.sqrt(Math.max(0, r * (e * e - n) + n));
        },
        p = [i.$, a.m, s.J],
        d = (t) => p.find((e) => e.test(t)),
        h = (t) =>
          `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        m = (t, e) => {
          let r = d(t),
            n = d(e);
          (0, u.k)(!!r, h(t)), (0, u.k)(!!n, h(e));
          let i = r.parse(t),
            l = n.parse(e);
          r === s.J && ((i = c(i)), (r = a.m)),
            n === s.J && ((l = c(l)), (n = a.m));
          let p = Object.assign({}, i);
          return (t) => {
            for (let e in p) "alpha" !== e && (p[e] = f(i[e], l[e], t));
            return (p.alpha = (0, o.C)(i.alpha, l.alpha, t)), r.transform(p);
          };
        };
      var v = r(87405),
        y = r(28407),
        g = r(80734),
        b = r(9897);
      function w(t, e) {
        return (0, g.e)(t)
          ? (r) => (0, o.C)(t, e, r)
          : v.$.test(t)
          ? m(t, e)
          : j(t, e);
      }
      let x = (t, e) => {
          let r = [...t],
            n = r.length,
            o = t.map((t, r) => w(t, e[r]));
          return (t) => {
            for (let e = 0; e < n; e++) r[e] = o[e](t);
            return r;
          };
        },
        E = (t, e) => {
          let r = Object.assign(Object.assign({}, t), e),
            n = {};
          for (let o in r)
            void 0 !== t[o] && void 0 !== e[o] && (n[o] = w(t[o], e[o]));
          return (t) => {
            for (let e in n) r[e] = n[e](t);
            return r;
          };
        };
      function S(t) {
        let e = y.P.parse(t),
          r = e.length,
          n = 0,
          o = 0,
          i = 0;
        for (let t = 0; t < r; t++)
          n || "number" == typeof e[t] ? n++ : void 0 !== e[t].hue ? i++ : o++;
        return { parsed: e, numNumbers: n, numRGB: o, numHSL: i };
      }
      let j = (t, e) => {
        let r = y.P.createTransformer(e),
          n = S(t),
          o = S(e);
        return n.numHSL === o.numHSL &&
          n.numRGB === o.numRGB &&
          n.numNumbers >= o.numNumbers
          ? (0, b.z)(x(n.parsed, o.parsed), r)
          : ((0, u.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            (r) => `${r > 0 ? e : t}`);
      };
      var A = r(6773);
      let O = (t, e) => (r) => (0, o.C)(t, e, r);
      function k(t, e, { clamp: r = !0, ease: o, mixer: i } = {}) {
        let a = t.length;
        (0, u.k)(
          a === e.length,
          "Both input and output ranges must be the same length"
        ),
          (0, u.k)(
            !o || !Array.isArray(o) || o.length === a - 1,
            "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."
          ),
          t[0] > t[a - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
        let s = (function (t, e, r) {
            var n;
            let o = [],
              i =
                r ||
                ("number" == typeof (n = t[0])
                  ? O
                  : "string" == typeof n
                  ? v.$.test(n)
                    ? m
                    : j
                  : Array.isArray(n)
                  ? x
                  : "object" == typeof n
                  ? E
                  : void 0),
              a = t.length - 1;
            for (let r = 0; r < a; r++) {
              let n = i(t[r], t[r + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[r] : e;
                n = (0, b.z)(t, n);
              }
              o.push(n);
            }
            return o;
          })(e, o, i),
          l =
            2 === a
              ? (function ([t, e], [r]) {
                  return (o) => r((0, n.Y)(t, e, o));
                })(t, s)
              : (function (t, e) {
                  let r = t.length,
                    o = r - 1;
                  return (i) => {
                    let a = 0,
                      s = !1;
                    if (
                      (i <= t[0]
                        ? (s = !0)
                        : i >= t[o] && ((a = o - 1), (s = !0)),
                      !s)
                    ) {
                      let e = 1;
                      for (; e < r && !(t[e] > i) && e !== o; e++);
                      a = e - 1;
                    }
                    let u = (0, n.Y)(t[a], t[a + 1], i);
                    return e[a](u);
                  };
                })(t, s);
        return r ? (e) => l((0, A.u)(t[0], t[a - 1], e)) : l;
      }
    },
    72453: function (t, e, r) {
      "use strict";
      r.d(e, {
        C: function () {
          return n;
        },
      });
      let n = (t, e, r) => -r * t + r * e + t;
    },
    9897: function (t, e, r) {
      "use strict";
      r.d(e, {
        z: function () {
          return o;
        },
      });
      let n = (t, e) => (r) => e(t(r)),
        o = (...t) => t.reduce(n);
    },
    9326: function (t, e, r) {
      "use strict";
      r.d(e, {
        Y: function () {
          return n;
        },
      });
      let n = (t, e, r) => {
        let n = e - t;
        return 0 === n ? 1 : (r - t) / n;
      };
    },
    99296: function (t, e, r) {
      "use strict";
      function n(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      r.d(e, {
        R: function () {
          return n;
        },
      });
    },
    22960: function (t, e, r) {
      "use strict";
      r.d(e, {
        $: function () {
          return o;
        },
      });
      var n = r(78059);
      let o = {
        test: (0, r(23953).i)("#"),
        parse: function (t) {
          let e = "",
            r = "",
            n = "",
            o = "";
          return (
            t.length > 5
              ? ((e = t.substr(1, 2)),
                (r = t.substr(3, 2)),
                (n = t.substr(5, 2)),
                (o = t.substr(7, 2)))
              : ((e = t.substr(1, 1)),
                (r = t.substr(2, 1)),
                (n = t.substr(3, 1)),
                (o = t.substr(4, 1)),
                (e += e),
                (r += r),
                (n += n),
                (o += o)),
            {
              red: parseInt(e, 16),
              green: parseInt(r, 16),
              blue: parseInt(n, 16),
              alpha: o ? parseInt(o, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    34582: function (t, e, r) {
      "use strict";
      r.d(e, {
        J: function () {
          return s;
        },
      });
      var n = r(11248),
        o = r(2969),
        i = r(16777),
        a = r(23953);
      let s = {
        test: (0, a.i)("hsl", "hue"),
        parse: (0, a.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: r, alpha: a = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          o.aQ.transform((0, i.Nw)(e)) +
          ", " +
          o.aQ.transform((0, i.Nw)(r)) +
          ", " +
          (0, i.Nw)(n.Fq.transform(a)) +
          ")",
      };
    },
    87405: function (t, e, r) {
      "use strict";
      r.d(e, {
        $: function () {
          return s;
        },
      });
      var n = r(16777),
        o = r(22960),
        i = r(34582),
        a = r(78059);
      let s = {
        test: (t) => a.m.test(t) || o.$.test(t) || i.J.test(t),
        parse: (t) =>
          a.m.test(t)
            ? a.m.parse(t)
            : i.J.test(t)
            ? i.J.parse(t)
            : o.$.parse(t),
        transform: (t) =>
          (0, n.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? a.m.transform(t)
            : i.J.transform(t),
      };
    },
    78059: function (t, e, r) {
      "use strict";
      r.d(e, {
        m: function () {
          return u;
        },
      });
      var n = r(11248),
        o = r(16777),
        i = r(23953);
      let a = (0, o.uZ)(0, 255),
        s = Object.assign(Object.assign({}, n.Rx), {
          transform: (t) => Math.round(a(t)),
        }),
        u = {
          test: (0, i.i)("rgb", "red"),
          parse: (0, i.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: r, alpha: i = 1 }) =>
            "rgba(" +
            s.transform(t) +
            ", " +
            s.transform(e) +
            ", " +
            s.transform(r) +
            ", " +
            (0, o.Nw)(n.Fq.transform(i)) +
            ")",
        };
    },
    23953: function (t, e, r) {
      "use strict";
      r.d(e, {
        d: function () {
          return i;
        },
        i: function () {
          return o;
        },
      });
      var n = r(16777);
      let o = (t, e) => (r) =>
          !!(
            ((0, n.HD)(r) && n.mj.test(r) && r.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(r, e))
          ),
        i = (t, e, r) => (o) => {
          if (!(0, n.HD)(o)) return o;
          let [i, a, s, u] = o.match(n.KP);
          return {
            [t]: parseFloat(i),
            [e]: parseFloat(a),
            [r]: parseFloat(s),
            alpha: void 0 !== u ? parseFloat(u) : 1,
          };
        };
    },
    28407: function (t, e, r) {
      "use strict";
      r.d(e, {
        P: function () {
          return p;
        },
      });
      var n = r(87405),
        o = r(11248),
        i = r(16777);
      let a = "${c}",
        s = "${n}";
      function u(t) {
        "number" == typeof t && (t = `${t}`);
        let e = [],
          r = 0,
          u = t.match(i.dA);
        u &&
          ((r = u.length),
          (t = t.replace(i.dA, a)),
          e.push(...u.map(n.$.parse)));
        let l = t.match(i.KP);
        return (
          l && ((t = t.replace(i.KP, s)), e.push(...l.map(o.Rx.parse))),
          { values: e, numColors: r, tokenised: t }
        );
      }
      function l(t) {
        return u(t).values;
      }
      function c(t) {
        let { values: e, numColors: r, tokenised: o } = u(t),
          l = e.length;
        return (t) => {
          let e = o;
          for (let o = 0; o < l; o++)
            e = e.replace(
              o < r ? a : s,
              o < r ? n.$.transform(t[o]) : (0, i.Nw)(t[o])
            );
          return e;
        };
      }
      let f = (t) => ("number" == typeof t ? 0 : t),
        p = {
          test: function (t) {
            var e, r, n, o;
            return (
              isNaN(t) &&
              (0, i.HD)(t) &&
              (null !==
                (r =
                  null === (e = t.match(i.KP)) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== r
                ? r
                : 0) +
                (null !==
                  (o =
                    null === (n = t.match(i.dA)) || void 0 === n
                      ? void 0
                      : n.length) && void 0 !== o
                  ? o
                  : 0) >
                0
            );
          },
          parse: l,
          createTransformer: c,
          getAnimatableNone: function (t) {
            let e = l(t);
            return c(t)(e.map(f));
          },
        };
    },
    11248: function (t, e, r) {
      "use strict";
      r.d(e, {
        Fq: function () {
          return i;
        },
        Rx: function () {
          return o;
        },
        bA: function () {
          return a;
        },
      });
      var n = r(16777);
      let o = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        i = Object.assign(Object.assign({}, o), { transform: (0, n.uZ)(0, 1) }),
        a = Object.assign(Object.assign({}, o), { default: 1 });
    },
    2969: function (t, e, r) {
      "use strict";
      r.d(e, {
        $C: function () {
          return c;
        },
        RW: function () {
          return i;
        },
        aQ: function () {
          return a;
        },
        px: function () {
          return s;
        },
        vh: function () {
          return u;
        },
        vw: function () {
          return l;
        },
      });
      var n = r(16777);
      let o = (t) => ({
          test: (e) =>
            (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        i = o("deg"),
        a = o("%"),
        s = o("px"),
        u = o("vh"),
        l = o("vw"),
        c = Object.assign(Object.assign({}, a), {
          parse: (t) => a.parse(t) / 100,
          transform: (t) => a.transform(100 * t),
        });
    },
    16777: function (t, e, r) {
      "use strict";
      r.d(e, {
        HD: function () {
          return u;
        },
        KP: function () {
          return i;
        },
        Nw: function () {
          return o;
        },
        dA: function () {
          return a;
        },
        mj: function () {
          return s;
        },
        uZ: function () {
          return n;
        },
      });
      let n = (t, e) => (r) => Math.max(Math.min(r, e), t),
        o = (t) => (t % 1 ? Number(t.toFixed(5)) : t),
        i = /(-)?([\d]*\.?[\d])+/g,
        a =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        s =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
      function u(t) {
        return "string" == typeof t;
      }
    },
    97582: function (t, e, r) {
      "use strict";
      r.d(e, {
        CR: function () {
          return c;
        },
        FC: function () {
          return h;
        },
        Jh: function () {
          return u;
        },
        KL: function () {
          return m;
        },
        XA: function () {
          return l;
        },
        ZT: function () {
          return o;
        },
        _T: function () {
          return a;
        },
        ev: function () {
          return p;
        },
        fl: function () {
          return f;
        },
        mG: function () {
          return s;
        },
        pi: function () {
          return i;
        },
        qq: function () {
          return d;
        },
      });
      var n = function (t, e) {
        return (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          })(t, e);
      };
      function o(t, e) {
        if ("function" != typeof e && null !== e)
          throw TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function r() {
          this.constructor = t;
        }
        n(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var o in (e = arguments[r]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      };
      function a(t, e) {
        var r = {};
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) &&
            0 > e.indexOf(n) &&
            (r[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(t); o < n.length; o++)
            0 > e.indexOf(n[o]) &&
              Object.prototype.propertyIsEnumerable.call(t, n[o]) &&
              (r[n[o]] = t[n[o]]);
        }
        return r;
      }
      function s(t, e, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function a(t) {
            try {
              u(n.next(t));
            } catch (t) {
              i(t);
            }
          }
          function s(t) {
            try {
              u(n.throw(t));
            } catch (t) {
              i(t);
            }
          }
          function u(t) {
            var e;
            t.done
              ? o(t.value)
              : ((e = t.value) instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })
                ).then(a, s);
          }
          u((n = n.apply(t, e || [])).next());
        });
      }
      function u(t, e) {
        var r,
          n,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(s) {
          return function (u) {
            return (function (s) {
              if (r) throw TypeError("Generator is already executing.");
              for (; i && ((i = 0), s[0] && (a = 0)), a; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (o =
                        2 & s[0]
                          ? n.return
                          : s[0]
                          ? n.throw || ((o = n.return) && o.call(n), 0)
                          : n.next) &&
                      !(o = o.call(n, s[1])).done)
                  )
                    return o;
                  switch (((n = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                    case 0:
                    case 1:
                      o = s;
                      break;
                    case 4:
                      return a.label++, { value: s[1], done: !1 };
                    case 5:
                      a.label++, (n = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                        a.label = s[1];
                        break;
                      }
                      if (6 === s[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = s);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(s);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  s = e.call(t, a);
                } catch (t) {
                  (s = [6, t]), (n = 0);
                } finally {
                  r = o = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, u]);
          };
        }
      }
      function l(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          r = e && t[e],
          n = 0;
        if (r) return r.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return (
                t && n >= t.length && (t = void 0),
                { value: t && t[n++], done: !t }
              );
            },
          };
        throw TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function c(t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n,
          o,
          i = r.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
            a.push(n.value);
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            n && !n.done && (r = i.return) && r.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function f() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(c(arguments[e]));
        return t;
      }
      function p(t, e, r) {
        if (r || 2 == arguments.length)
          for (var n, o = 0, i = e.length; o < i; o++)
            (!n && o in e) ||
              (n || (n = Array.prototype.slice.call(e, 0, o)), (n[o] = e[o]));
        return t.concat(n || Array.prototype.slice.call(e));
      }
      function d(t) {
        return this instanceof d ? ((this.v = t), this) : new d(t);
      }
      function h(t, e, r) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var n,
          o = r.apply(t, e || []),
          i = [];
        return (
          (n = {}),
          a("next"),
          a("throw"),
          a("return"),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function a(t) {
          o[t] &&
            (n[t] = function (e) {
              return new Promise(function (r, n) {
                i.push([t, e, r, n]) > 1 || s(t, e);
              });
            });
        }
        function s(t, e) {
          try {
            var r;
            (r = o[t](e)).value instanceof d
              ? Promise.resolve(r.value.v).then(u, l)
              : c(i[0][2], r);
          } catch (t) {
            c(i[0][3], t);
          }
        }
        function u(t) {
          s("next", t);
        }
        function l(t) {
          s("throw", t);
        }
        function c(t, e) {
          t(e), i.shift(), i.length && s(i[0][0], i[0][1]);
        }
      }
      function m(t) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var e,
          r = t[Symbol.asyncIterator];
        return r
          ? r.call(t)
          : ((t = l(t)),
            (e = {}),
            n("next"),
            n("throw"),
            n("return"),
            (e[Symbol.asyncIterator] = function () {
              return this;
            }),
            e);
        function n(r) {
          e[r] =
            t[r] &&
            function (e) {
              return new Promise(function (n, o) {
                !(function (t, e, r, n) {
                  Promise.resolve(n).then(function (e) {
                    t({ value: e, done: r });
                  }, e);
                })(n, o, (e = t[r](e)).done, e.value);
              });
            };
        }
      }
      "function" == typeof SuppressedError && SuppressedError;
    },
  },
  function (t) {
    var e = function (e) {
      return t((t.s = e));
    };
    t.O(0, [774, 179], function () {
      return e(91118), e(96885);
    }),
      (_N_E = t.O());
  },
]);
