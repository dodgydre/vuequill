var ia = Object.defineProperty;
var la = (r, t, e) => t in r ? ia(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var L = (r, t, e) => (la(r, typeof t != "symbol" ? t + "" : t, e), e);
import { defineComponent as oa, ref as Fi, onMounted as aa, onBeforeUnmount as ca, watch as qs, nextTick as Hi, openBlock as ua, createElementBlock as ha, Fragment as fa, renderSlot as da, createElementVNode as pa, useSlots as ga } from "vue";
var zl = typeof global == "object" && global && global.Object === Object && global, ma = typeof self == "object" && self && self.Object === Object && self, Pt = zl || ma || Function("return this")(), se = Pt.Symbol, Kl = Object.prototype, ba = Kl.hasOwnProperty, ya = Kl.toString, vn = se ? se.toStringTag : void 0;
function va(r) {
  var t = ba.call(r, vn), e = r[vn];
  try {
    r[vn] = void 0;
    var n = !0;
  } catch {
  }
  var s = ya.call(r);
  return n && (t ? r[vn] = e : delete r[vn]), s;
}
var Ea = Object.prototype, Aa = Ea.toString;
function Na(r) {
  return Aa.call(r);
}
var wa = "[object Null]", Ta = "[object Undefined]", zi = se ? se.toStringTag : void 0;
function Xe(r) {
  return r == null ? r === void 0 ? Ta : wa : zi && zi in Object(r) ? va(r) : Na(r);
}
function Gt(r) {
  return r != null && typeof r == "object";
}
var be = Array.isArray;
function ie(r) {
  var t = typeof r;
  return r != null && (t == "object" || t == "function");
}
function Gl(r) {
  return r;
}
var xa = "[object AsyncFunction]", Sa = "[object Function]", La = "[object GeneratorFunction]", Oa = "[object Proxy]";
function gi(r) {
  if (!ie(r))
    return !1;
  var t = Xe(r);
  return t == Sa || t == La || t == xa || t == Oa;
}
var Cs = Pt["__core-js_shared__"], Ki = function() {
  var r = /[^.]+$/.exec(Cs && Cs.keys && Cs.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}();
function _a(r) {
  return !!Ki && Ki in r;
}
var qa = Function.prototype, Ca = qa.toString;
function Ee(r) {
  if (r != null) {
    try {
      return Ca.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
var Ia = /[\\^$.*+?()[\]{}|]/g, Ra = /^\[object .+?Constructor\]$/, ka = Function.prototype, Ma = Object.prototype, Ba = ka.toString, ja = Ma.hasOwnProperty, Da = RegExp(
  "^" + Ba.call(ja).replace(Ia, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function $a(r) {
  if (!ie(r) || _a(r))
    return !1;
  var t = gi(r) ? Da : Ra;
  return t.test(Ee(r));
}
function Pa(r, t) {
  return r == null ? void 0 : r[t];
}
function Ae(r, t) {
  var e = Pa(r, t);
  return $a(e) ? e : void 0;
}
var Hs = Ae(Pt, "WeakMap"), Gi = Object.create, Ua = /* @__PURE__ */ function() {
  function r() {
  }
  return function(t) {
    if (!ie(t))
      return {};
    if (Gi)
      return Gi(t);
    r.prototype = t;
    var e = new r();
    return r.prototype = void 0, e;
  };
}();
function Fa(r, t, e) {
  switch (e.length) {
    case 0:
      return r.call(t);
    case 1:
      return r.call(t, e[0]);
    case 2:
      return r.call(t, e[0], e[1]);
    case 3:
      return r.call(t, e[0], e[1], e[2]);
  }
  return r.apply(t, e);
}
function Vl(r, t) {
  var e = -1, n = r.length;
  for (t || (t = Array(n)); ++e < n; )
    t[e] = r[e];
  return t;
}
var Ha = 800, za = 16, Ka = Date.now;
function Ga(r) {
  var t = 0, e = 0;
  return function() {
    var n = Ka(), s = za - (n - e);
    if (e = n, s > 0) {
      if (++t >= Ha)
        return arguments[0];
    } else
      t = 0;
    return r.apply(void 0, arguments);
  };
}
function Va(r) {
  return function() {
    return r;
  };
}
var Tr = function() {
  try {
    var r = Ae(Object, "defineProperty");
    return r({}, "", {}), r;
  } catch {
  }
}(), Wa = Tr ? function(r, t) {
  return Tr(r, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Va(t),
    writable: !0
  });
} : Gl;
const Za = Wa;
var Xa = Ga(Za);
function Ya(r, t) {
  for (var e = -1, n = r == null ? 0 : r.length; ++e < n && t(r[e], e, r) !== !1; )
    ;
  return r;
}
var Ja = 9007199254740991, Qa = /^(?:0|[1-9]\d*)$/;
function Wl(r, t) {
  var e = typeof r;
  return t = t ?? Ja, !!t && (e == "number" || e != "symbol" && Qa.test(r)) && r > -1 && r % 1 == 0 && r < t;
}
function mi(r, t, e) {
  t == "__proto__" && Tr ? Tr(r, t, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : r[t] = e;
}
function Bn(r, t) {
  return r === t || r !== r && t !== t;
}
var tc = Object.prototype, ec = tc.hasOwnProperty;
function Zl(r, t, e) {
  var n = r[t];
  (!(ec.call(r, t) && Bn(n, e)) || e === void 0 && !(t in r)) && mi(r, t, e);
}
function jn(r, t, e, n) {
  var s = !e;
  e || (e = {});
  for (var i = -1, l = t.length; ++i < l; ) {
    var a = t[i], c = n ? n(e[a], r[a], a, e, r) : void 0;
    c === void 0 && (c = r[a]), s ? mi(e, a, c) : Zl(e, a, c);
  }
  return e;
}
var Vi = Math.max;
function nc(r, t, e) {
  return t = Vi(t === void 0 ? r.length - 1 : t, 0), function() {
    for (var n = arguments, s = -1, i = Vi(n.length - t, 0), l = Array(i); ++s < i; )
      l[s] = n[t + s];
    s = -1;
    for (var a = Array(t + 1); ++s < t; )
      a[s] = n[s];
    return a[t] = e(l), Fa(r, this, a);
  };
}
function rc(r, t) {
  return Xa(nc(r, t, Gl), r + "");
}
var sc = 9007199254740991;
function Xl(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= sc;
}
function qr(r) {
  return r != null && Xl(r.length) && !gi(r);
}
function ic(r, t, e) {
  if (!ie(e))
    return !1;
  var n = typeof t;
  return (n == "number" ? qr(e) && Wl(t, e.length) : n == "string" && t in e) ? Bn(e[t], r) : !1;
}
function lc(r) {
  return rc(function(t, e) {
    var n = -1, s = e.length, i = s > 1 ? e[s - 1] : void 0, l = s > 2 ? e[2] : void 0;
    for (i = r.length > 3 && typeof i == "function" ? (s--, i) : void 0, l && ic(e[0], e[1], l) && (i = s < 3 ? void 0 : i, s = 1), t = Object(t); ++n < s; ) {
      var a = e[n];
      a && r(t, a, n, i);
    }
    return t;
  });
}
var oc = Object.prototype;
function bi(r) {
  var t = r && r.constructor, e = typeof t == "function" && t.prototype || oc;
  return r === e;
}
function ac(r, t) {
  for (var e = -1, n = Array(r); ++e < r; )
    n[e] = t(e);
  return n;
}
var cc = "[object Arguments]";
function Wi(r) {
  return Gt(r) && Xe(r) == cc;
}
var Yl = Object.prototype, uc = Yl.hasOwnProperty, hc = Yl.propertyIsEnumerable, fc = Wi(/* @__PURE__ */ function() {
  return arguments;
}()) ? Wi : function(r) {
  return Gt(r) && uc.call(r, "callee") && !hc.call(r, "callee");
};
const zs = fc;
function dc() {
  return !1;
}
var Jl = typeof exports == "object" && exports && !exports.nodeType && exports, Zi = Jl && typeof module == "object" && module && !module.nodeType && module, pc = Zi && Zi.exports === Jl, Xi = pc ? Pt.Buffer : void 0, gc = Xi ? Xi.isBuffer : void 0, Sn = gc || dc, mc = "[object Arguments]", bc = "[object Array]", yc = "[object Boolean]", vc = "[object Date]", Ec = "[object Error]", Ac = "[object Function]", Nc = "[object Map]", wc = "[object Number]", Tc = "[object Object]", xc = "[object RegExp]", Sc = "[object Set]", Lc = "[object String]", Oc = "[object WeakMap]", _c = "[object ArrayBuffer]", qc = "[object DataView]", Cc = "[object Float32Array]", Ic = "[object Float64Array]", Rc = "[object Int8Array]", kc = "[object Int16Array]", Mc = "[object Int32Array]", Bc = "[object Uint8Array]", jc = "[object Uint8ClampedArray]", Dc = "[object Uint16Array]", $c = "[object Uint32Array]", z = {};
z[Cc] = z[Ic] = z[Rc] = z[kc] = z[Mc] = z[Bc] = z[jc] = z[Dc] = z[$c] = !0;
z[mc] = z[bc] = z[_c] = z[yc] = z[qc] = z[vc] = z[Ec] = z[Ac] = z[Nc] = z[wc] = z[Tc] = z[xc] = z[Sc] = z[Lc] = z[Oc] = !1;
function Pc(r) {
  return Gt(r) && Xl(r.length) && !!z[Xe(r)];
}
function yi(r) {
  return function(t) {
    return r(t);
  };
}
var Ql = typeof exports == "object" && exports && !exports.nodeType && exports, Nn = Ql && typeof module == "object" && module && !module.nodeType && module, Uc = Nn && Nn.exports === Ql, Is = Uc && zl.process, Ge = function() {
  try {
    var r = Nn && Nn.require && Nn.require("util").types;
    return r || Is && Is.binding && Is.binding("util");
  } catch {
  }
}(), Yi = Ge && Ge.isTypedArray, vi = Yi ? yi(Yi) : Pc, Fc = Object.prototype, Hc = Fc.hasOwnProperty;
function to(r, t) {
  var e = be(r), n = !e && zs(r), s = !e && !n && Sn(r), i = !e && !n && !s && vi(r), l = e || n || s || i, a = l ? ac(r.length, String) : [], c = a.length;
  for (var h in r)
    (t || Hc.call(r, h)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    Wl(h, c))) && a.push(h);
  return a;
}
function eo(r, t) {
  return function(e) {
    return r(t(e));
  };
}
var zc = eo(Object.keys, Object), Kc = Object.prototype, Gc = Kc.hasOwnProperty;
function Vc(r) {
  if (!bi(r))
    return zc(r);
  var t = [];
  for (var e in Object(r))
    Gc.call(r, e) && e != "constructor" && t.push(e);
  return t;
}
function Ei(r) {
  return qr(r) ? to(r) : Vc(r);
}
function Wc(r) {
  var t = [];
  if (r != null)
    for (var e in Object(r))
      t.push(e);
  return t;
}
var Zc = Object.prototype, Xc = Zc.hasOwnProperty;
function Yc(r) {
  if (!ie(r))
    return Wc(r);
  var t = bi(r), e = [];
  for (var n in r)
    n == "constructor" && (t || !Xc.call(r, n)) || e.push(n);
  return e;
}
function Dn(r) {
  return qr(r) ? to(r, !0) : Yc(r);
}
var Ln = Ae(Object, "create");
function Jc() {
  this.__data__ = Ln ? Ln(null) : {}, this.size = 0;
}
function Qc(r) {
  var t = this.has(r) && delete this.__data__[r];
  return this.size -= t ? 1 : 0, t;
}
var tu = "__lodash_hash_undefined__", eu = Object.prototype, nu = eu.hasOwnProperty;
function ru(r) {
  var t = this.__data__;
  if (Ln) {
    var e = t[r];
    return e === tu ? void 0 : e;
  }
  return nu.call(t, r) ? t[r] : void 0;
}
var su = Object.prototype, iu = su.hasOwnProperty;
function lu(r) {
  var t = this.__data__;
  return Ln ? t[r] !== void 0 : iu.call(t, r);
}
var ou = "__lodash_hash_undefined__";
function au(r, t) {
  var e = this.__data__;
  return this.size += this.has(r) ? 0 : 1, e[r] = Ln && t === void 0 ? ou : t, this;
}
function ye(r) {
  var t = -1, e = r == null ? 0 : r.length;
  for (this.clear(); ++t < e; ) {
    var n = r[t];
    this.set(n[0], n[1]);
  }
}
ye.prototype.clear = Jc;
ye.prototype.delete = Qc;
ye.prototype.get = ru;
ye.prototype.has = lu;
ye.prototype.set = au;
function cu() {
  this.__data__ = [], this.size = 0;
}
function Cr(r, t) {
  for (var e = r.length; e--; )
    if (Bn(r[e][0], t))
      return e;
  return -1;
}
var uu = Array.prototype, hu = uu.splice;
function fu(r) {
  var t = this.__data__, e = Cr(t, r);
  if (e < 0)
    return !1;
  var n = t.length - 1;
  return e == n ? t.pop() : hu.call(t, e, 1), --this.size, !0;
}
function du(r) {
  var t = this.__data__, e = Cr(t, r);
  return e < 0 ? void 0 : t[e][1];
}
function pu(r) {
  return Cr(this.__data__, r) > -1;
}
function gu(r, t) {
  var e = this.__data__, n = Cr(e, r);
  return n < 0 ? (++this.size, e.push([r, t])) : e[n][1] = t, this;
}
function Zt(r) {
  var t = -1, e = r == null ? 0 : r.length;
  for (this.clear(); ++t < e; ) {
    var n = r[t];
    this.set(n[0], n[1]);
  }
}
Zt.prototype.clear = cu;
Zt.prototype.delete = fu;
Zt.prototype.get = du;
Zt.prototype.has = pu;
Zt.prototype.set = gu;
var On = Ae(Pt, "Map");
function mu() {
  this.size = 0, this.__data__ = {
    hash: new ye(),
    map: new (On || Zt)(),
    string: new ye()
  };
}
function bu(r) {
  var t = typeof r;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
}
function Ir(r, t) {
  var e = r.__data__;
  return bu(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
}
function yu(r) {
  var t = Ir(this, r).delete(r);
  return this.size -= t ? 1 : 0, t;
}
function vu(r) {
  return Ir(this, r).get(r);
}
function Eu(r) {
  return Ir(this, r).has(r);
}
function Au(r, t) {
  var e = Ir(this, r), n = e.size;
  return e.set(r, t), this.size += e.size == n ? 0 : 1, this;
}
function Ne(r) {
  var t = -1, e = r == null ? 0 : r.length;
  for (this.clear(); ++t < e; ) {
    var n = r[t];
    this.set(n[0], n[1]);
  }
}
Ne.prototype.clear = mu;
Ne.prototype.delete = yu;
Ne.prototype.get = vu;
Ne.prototype.has = Eu;
Ne.prototype.set = Au;
function no(r, t) {
  for (var e = -1, n = t.length, s = r.length; ++e < n; )
    r[s + e] = t[e];
  return r;
}
var Nu = eo(Object.getPrototypeOf, Object);
const Ai = Nu;
var wu = "[object Object]", Tu = Function.prototype, xu = Object.prototype, ro = Tu.toString, Su = xu.hasOwnProperty, Lu = ro.call(Object);
function Ou(r) {
  if (!Gt(r) || Xe(r) != wu)
    return !1;
  var t = Ai(r);
  if (t === null)
    return !0;
  var e = Su.call(t, "constructor") && t.constructor;
  return typeof e == "function" && e instanceof e && ro.call(e) == Lu;
}
function _u() {
  this.__data__ = new Zt(), this.size = 0;
}
function qu(r) {
  var t = this.__data__, e = t.delete(r);
  return this.size = t.size, e;
}
function Cu(r) {
  return this.__data__.get(r);
}
function Iu(r) {
  return this.__data__.has(r);
}
var Ru = 200;
function ku(r, t) {
  var e = this.__data__;
  if (e instanceof Zt) {
    var n = e.__data__;
    if (!On || n.length < Ru - 1)
      return n.push([r, t]), this.size = ++e.size, this;
    e = this.__data__ = new Ne(n);
  }
  return e.set(r, t), this.size = e.size, this;
}
function Bt(r) {
  var t = this.__data__ = new Zt(r);
  this.size = t.size;
}
Bt.prototype.clear = _u;
Bt.prototype.delete = qu;
Bt.prototype.get = Cu;
Bt.prototype.has = Iu;
Bt.prototype.set = ku;
function Mu(r, t) {
  return r && jn(t, Ei(t), r);
}
function Bu(r, t) {
  return r && jn(t, Dn(t), r);
}
var so = typeof exports == "object" && exports && !exports.nodeType && exports, Ji = so && typeof module == "object" && module && !module.nodeType && module, ju = Ji && Ji.exports === so, Qi = ju ? Pt.Buffer : void 0, tl = Qi ? Qi.allocUnsafe : void 0;
function io(r, t) {
  if (t)
    return r.slice();
  var e = r.length, n = tl ? tl(e) : new r.constructor(e);
  return r.copy(n), n;
}
function Du(r, t) {
  for (var e = -1, n = r == null ? 0 : r.length, s = 0, i = []; ++e < n; ) {
    var l = r[e];
    t(l, e, r) && (i[s++] = l);
  }
  return i;
}
function lo() {
  return [];
}
var $u = Object.prototype, Pu = $u.propertyIsEnumerable, el = Object.getOwnPropertySymbols, Ni = el ? function(r) {
  return r == null ? [] : (r = Object(r), Du(el(r), function(t) {
    return Pu.call(r, t);
  }));
} : lo;
function Uu(r, t) {
  return jn(r, Ni(r), t);
}
var Fu = Object.getOwnPropertySymbols, oo = Fu ? function(r) {
  for (var t = []; r; )
    no(t, Ni(r)), r = Ai(r);
  return t;
} : lo;
function Hu(r, t) {
  return jn(r, oo(r), t);
}
function ao(r, t, e) {
  var n = t(r);
  return be(r) ? n : no(n, e(r));
}
function Ks(r) {
  return ao(r, Ei, Ni);
}
function zu(r) {
  return ao(r, Dn, oo);
}
var Gs = Ae(Pt, "DataView"), Vs = Ae(Pt, "Promise"), Ws = Ae(Pt, "Set"), nl = "[object Map]", Ku = "[object Object]", rl = "[object Promise]", sl = "[object Set]", il = "[object WeakMap]", ll = "[object DataView]", Gu = Ee(Gs), Vu = Ee(On), Wu = Ee(Vs), Zu = Ee(Ws), Xu = Ee(Hs), ge = Xe;
(Gs && ge(new Gs(new ArrayBuffer(1))) != ll || On && ge(new On()) != nl || Vs && ge(Vs.resolve()) != rl || Ws && ge(new Ws()) != sl || Hs && ge(new Hs()) != il) && (ge = function(r) {
  var t = Xe(r), e = t == Ku ? r.constructor : void 0, n = e ? Ee(e) : "";
  if (n)
    switch (n) {
      case Gu:
        return ll;
      case Vu:
        return nl;
      case Wu:
        return rl;
      case Zu:
        return sl;
      case Xu:
        return il;
    }
  return t;
});
const _n = ge;
var Yu = Object.prototype, Ju = Yu.hasOwnProperty;
function Qu(r) {
  var t = r.length, e = new r.constructor(t);
  return t && typeof r[0] == "string" && Ju.call(r, "index") && (e.index = r.index, e.input = r.input), e;
}
var xr = Pt.Uint8Array;
function wi(r) {
  var t = new r.constructor(r.byteLength);
  return new xr(t).set(new xr(r)), t;
}
function th(r, t) {
  var e = t ? wi(r.buffer) : r.buffer;
  return new r.constructor(e, r.byteOffset, r.byteLength);
}
var eh = /\w*$/;
function nh(r) {
  var t = new r.constructor(r.source, eh.exec(r));
  return t.lastIndex = r.lastIndex, t;
}
var ol = se ? se.prototype : void 0, al = ol ? ol.valueOf : void 0;
function rh(r) {
  return al ? Object(al.call(r)) : {};
}
function co(r, t) {
  var e = t ? wi(r.buffer) : r.buffer;
  return new r.constructor(e, r.byteOffset, r.length);
}
var sh = "[object Boolean]", ih = "[object Date]", lh = "[object Map]", oh = "[object Number]", ah = "[object RegExp]", ch = "[object Set]", uh = "[object String]", hh = "[object Symbol]", fh = "[object ArrayBuffer]", dh = "[object DataView]", ph = "[object Float32Array]", gh = "[object Float64Array]", mh = "[object Int8Array]", bh = "[object Int16Array]", yh = "[object Int32Array]", vh = "[object Uint8Array]", Eh = "[object Uint8ClampedArray]", Ah = "[object Uint16Array]", Nh = "[object Uint32Array]";
function wh(r, t, e) {
  var n = r.constructor;
  switch (t) {
    case fh:
      return wi(r);
    case sh:
    case ih:
      return new n(+r);
    case dh:
      return th(r, e);
    case ph:
    case gh:
    case mh:
    case bh:
    case yh:
    case vh:
    case Eh:
    case Ah:
    case Nh:
      return co(r, e);
    case lh:
      return new n();
    case oh:
    case uh:
      return new n(r);
    case ah:
      return nh(r);
    case ch:
      return new n();
    case hh:
      return rh(r);
  }
}
function uo(r) {
  return typeof r.constructor == "function" && !bi(r) ? Ua(Ai(r)) : {};
}
var Th = "[object Map]";
function xh(r) {
  return Gt(r) && _n(r) == Th;
}
var cl = Ge && Ge.isMap, Sh = cl ? yi(cl) : xh, Lh = "[object Set]";
function Oh(r) {
  return Gt(r) && _n(r) == Lh;
}
var ul = Ge && Ge.isSet, _h = ul ? yi(ul) : Oh, qh = 1, Ch = 2, Ih = 4, ho = "[object Arguments]", Rh = "[object Array]", kh = "[object Boolean]", Mh = "[object Date]", Bh = "[object Error]", fo = "[object Function]", jh = "[object GeneratorFunction]", Dh = "[object Map]", $h = "[object Number]", po = "[object Object]", Ph = "[object RegExp]", Uh = "[object Set]", Fh = "[object String]", Hh = "[object Symbol]", zh = "[object WeakMap]", Kh = "[object ArrayBuffer]", Gh = "[object DataView]", Vh = "[object Float32Array]", Wh = "[object Float64Array]", Zh = "[object Int8Array]", Xh = "[object Int16Array]", Yh = "[object Int32Array]", Jh = "[object Uint8Array]", Qh = "[object Uint8ClampedArray]", tf = "[object Uint16Array]", ef = "[object Uint32Array]", H = {};
H[ho] = H[Rh] = H[Kh] = H[Gh] = H[kh] = H[Mh] = H[Vh] = H[Wh] = H[Zh] = H[Xh] = H[Yh] = H[Dh] = H[$h] = H[po] = H[Ph] = H[Uh] = H[Fh] = H[Hh] = H[Jh] = H[Qh] = H[tf] = H[ef] = !0;
H[Bh] = H[fo] = H[zh] = !1;
function Er(r, t, e, n, s, i) {
  var l, a = t & qh, c = t & Ch, h = t & Ih;
  if (e && (l = s ? e(r, n, s, i) : e(r)), l !== void 0)
    return l;
  if (!ie(r))
    return r;
  var d = be(r);
  if (d) {
    if (l = Qu(r), !a)
      return Vl(r, l);
  } else {
    var b = _n(r), p = b == fo || b == jh;
    if (Sn(r))
      return io(r, a);
    if (b == po || b == ho || p && !s) {
      if (l = c || p ? {} : uo(r), !a)
        return c ? Hu(r, Bu(l, r)) : Uu(r, Mu(l, r));
    } else {
      if (!H[b])
        return s ? r : {};
      l = wh(r, b, a);
    }
  }
  i || (i = new Bt());
  var g = i.get(r);
  if (g)
    return g;
  i.set(r, l), _h(r) ? r.forEach(function(y) {
    l.add(Er(y, t, e, y, r, i));
  }) : Sh(r) && r.forEach(function(y, N) {
    l.set(N, Er(y, t, e, N, r, i));
  });
  var m = h ? c ? zu : Ks : c ? Dn : Ei, E = d ? void 0 : m(r);
  return Ya(E || r, function(y, N) {
    E && (N = y, y = r[N]), Zl(l, N, Er(y, t, e, N, r, i));
  }), l;
}
var nf = 1, rf = 4;
function me(r) {
  return Er(r, nf | rf);
}
var sf = "__lodash_hash_undefined__";
function lf(r) {
  return this.__data__.set(r, sf), this;
}
function of(r) {
  return this.__data__.has(r);
}
function Sr(r) {
  var t = -1, e = r == null ? 0 : r.length;
  for (this.__data__ = new Ne(); ++t < e; )
    this.add(r[t]);
}
Sr.prototype.add = Sr.prototype.push = lf;
Sr.prototype.has = of;
function af(r, t) {
  for (var e = -1, n = r == null ? 0 : r.length; ++e < n; )
    if (t(r[e], e, r))
      return !0;
  return !1;
}
function cf(r, t) {
  return r.has(t);
}
var uf = 1, hf = 2;
function go(r, t, e, n, s, i) {
  var l = e & uf, a = r.length, c = t.length;
  if (a != c && !(l && c > a))
    return !1;
  var h = i.get(r), d = i.get(t);
  if (h && d)
    return h == t && d == r;
  var b = -1, p = !0, g = e & hf ? new Sr() : void 0;
  for (i.set(r, t), i.set(t, r); ++b < a; ) {
    var m = r[b], E = t[b];
    if (n)
      var y = l ? n(E, m, b, t, r, i) : n(m, E, b, r, t, i);
    if (y !== void 0) {
      if (y)
        continue;
      p = !1;
      break;
    }
    if (g) {
      if (!af(t, function(N, T) {
        if (!cf(g, T) && (m === N || s(m, N, e, n, i)))
          return g.push(T);
      })) {
        p = !1;
        break;
      }
    } else if (!(m === E || s(m, E, e, n, i))) {
      p = !1;
      break;
    }
  }
  return i.delete(r), i.delete(t), p;
}
function ff(r) {
  var t = -1, e = Array(r.size);
  return r.forEach(function(n, s) {
    e[++t] = [s, n];
  }), e;
}
function df(r) {
  var t = -1, e = Array(r.size);
  return r.forEach(function(n) {
    e[++t] = n;
  }), e;
}
var pf = 1, gf = 2, mf = "[object Boolean]", bf = "[object Date]", yf = "[object Error]", vf = "[object Map]", Ef = "[object Number]", Af = "[object RegExp]", Nf = "[object Set]", wf = "[object String]", Tf = "[object Symbol]", xf = "[object ArrayBuffer]", Sf = "[object DataView]", hl = se ? se.prototype : void 0, Rs = hl ? hl.valueOf : void 0;
function Lf(r, t, e, n, s, i, l) {
  switch (e) {
    case Sf:
      if (r.byteLength != t.byteLength || r.byteOffset != t.byteOffset)
        return !1;
      r = r.buffer, t = t.buffer;
    case xf:
      return !(r.byteLength != t.byteLength || !i(new xr(r), new xr(t)));
    case mf:
    case bf:
    case Ef:
      return Bn(+r, +t);
    case yf:
      return r.name == t.name && r.message == t.message;
    case Af:
    case wf:
      return r == t + "";
    case vf:
      var a = ff;
    case Nf:
      var c = n & pf;
      if (a || (a = df), r.size != t.size && !c)
        return !1;
      var h = l.get(r);
      if (h)
        return h == t;
      n |= gf, l.set(r, t);
      var d = go(a(r), a(t), n, s, i, l);
      return l.delete(r), d;
    case Tf:
      if (Rs)
        return Rs.call(r) == Rs.call(t);
  }
  return !1;
}
var Of = 1, _f = Object.prototype, qf = _f.hasOwnProperty;
function Cf(r, t, e, n, s, i) {
  var l = e & Of, a = Ks(r), c = a.length, h = Ks(t), d = h.length;
  if (c != d && !l)
    return !1;
  for (var b = c; b--; ) {
    var p = a[b];
    if (!(l ? p in t : qf.call(t, p)))
      return !1;
  }
  var g = i.get(r), m = i.get(t);
  if (g && m)
    return g == t && m == r;
  var E = !0;
  i.set(r, t), i.set(t, r);
  for (var y = l; ++b < c; ) {
    p = a[b];
    var N = r[p], T = t[p];
    if (n)
      var w = l ? n(T, N, p, t, r, i) : n(N, T, p, r, t, i);
    if (!(w === void 0 ? N === T || s(N, T, e, n, i) : w)) {
      E = !1;
      break;
    }
    y || (y = p == "constructor");
  }
  if (E && !y) {
    var O = r.constructor, S = t.constructor;
    O != S && "constructor" in r && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof S == "function" && S instanceof S) && (E = !1);
  }
  return i.delete(r), i.delete(t), E;
}
var If = 1, fl = "[object Arguments]", dl = "[object Array]", pr = "[object Object]", Rf = Object.prototype, pl = Rf.hasOwnProperty;
function kf(r, t, e, n, s, i) {
  var l = be(r), a = be(t), c = l ? dl : _n(r), h = a ? dl : _n(t);
  c = c == fl ? pr : c, h = h == fl ? pr : h;
  var d = c == pr, b = h == pr, p = c == h;
  if (p && Sn(r)) {
    if (!Sn(t))
      return !1;
    l = !0, d = !1;
  }
  if (p && !d)
    return i || (i = new Bt()), l || vi(r) ? go(r, t, e, n, s, i) : Lf(r, t, c, e, n, s, i);
  if (!(e & If)) {
    var g = d && pl.call(r, "__wrapped__"), m = b && pl.call(t, "__wrapped__");
    if (g || m) {
      var E = g ? r.value() : r, y = m ? t.value() : t;
      return i || (i = new Bt()), s(E, y, e, n, i);
    }
  }
  return p ? (i || (i = new Bt()), Cf(r, t, e, n, s, i)) : !1;
}
function mo(r, t, e, n, s) {
  return r === t ? !0 : r == null || t == null || !Gt(r) && !Gt(t) ? r !== r && t !== t : kf(r, t, e, n, mo, s);
}
function Mf(r) {
  return function(t, e, n) {
    for (var s = -1, i = Object(t), l = n(t), a = l.length; a--; ) {
      var c = l[r ? a : ++s];
      if (e(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var Bf = Mf();
function Zs(r, t, e) {
  (e !== void 0 && !Bn(r[t], e) || e === void 0 && !(t in r)) && mi(r, t, e);
}
function jf(r) {
  return Gt(r) && qr(r);
}
function Xs(r, t) {
  if (!(t === "constructor" && typeof r[t] == "function") && t != "__proto__")
    return r[t];
}
function Df(r) {
  return jn(r, Dn(r));
}
function $f(r, t, e, n, s, i, l) {
  var a = Xs(r, e), c = Xs(t, e), h = l.get(c);
  if (h) {
    Zs(r, e, h);
    return;
  }
  var d = i ? i(a, c, e + "", r, t, l) : void 0, b = d === void 0;
  if (b) {
    var p = be(c), g = !p && Sn(c), m = !p && !g && vi(c);
    d = c, p || g || m ? be(a) ? d = a : jf(a) ? d = Vl(a) : g ? (b = !1, d = io(c, !0)) : m ? (b = !1, d = co(c, !0)) : d = [] : Ou(c) || zs(c) ? (d = a, zs(a) ? d = Df(a) : (!ie(a) || gi(a)) && (d = uo(c))) : b = !1;
  }
  b && (l.set(c, d), s(d, c, n, i, l), l.delete(c)), Zs(r, e, d);
}
function bo(r, t, e, n, s) {
  r !== t && Bf(t, function(i, l) {
    if (s || (s = new Bt()), ie(i))
      $f(r, t, l, e, bo, n, s);
    else {
      var a = n ? n(Xs(r, l), i, l + "", r, t, s) : void 0;
      a === void 0 && (a = i), Zs(r, l, a);
    }
  }, Dn);
}
function Ti(r, t) {
  return mo(r, t);
}
var re = lc(function(r, t, e) {
  bo(r, t, e);
}), C = /* @__PURE__ */ ((r) => (r[r.TYPE = 3] = "TYPE", r[r.LEVEL = 12] = "LEVEL", r[r.ATTRIBUTE = 13] = "ATTRIBUTE", r[r.BLOT = 14] = "BLOT", r[r.INLINE = 7] = "INLINE", r[r.BLOCK = 11] = "BLOCK", r[r.BLOCK_BLOT = 10] = "BLOCK_BLOT", r[r.INLINE_BLOT = 6] = "INLINE_BLOT", r[r.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", r[r.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", r[r.ANY = 15] = "ANY", r))(C || {});
class Dt {
  constructor(t, e, n = {}) {
    this.attrName = t, this.keyName = e;
    const s = C.TYPE & C.ATTRIBUTE;
    this.scope = n.scope != null ? (
      // Ignore type bits, force attribute bit
      n.scope & C.LEVEL | s
    ) : C.ATTRIBUTE, n.whitelist != null && (this.whitelist = n.whitelist);
  }
  static keys(t) {
    return Array.from(t.attributes).map((e) => e.name);
  }
  add(t, e) {
    return this.canAdd(t, e) ? (t.setAttribute(this.keyName, e), !0) : !1;
  }
  canAdd(t, e) {
    return this.whitelist == null ? !0 : typeof e == "string" ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1;
  }
  remove(t) {
    t.removeAttribute(this.keyName);
  }
  value(t) {
    const e = t.getAttribute(this.keyName);
    return this.canAdd(t, e) && e ? e : "";
  }
}
class Ke extends Error {
  constructor(t) {
    t = "[Parchment] " + t, super(t), this.message = t, this.name = this.constructor.name;
  }
}
const yo = class Ys {
  constructor() {
    this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
  }
  static find(t, e = !1) {
    if (t == null)
      return null;
    if (this.blots.has(t))
      return this.blots.get(t) || null;
    if (e) {
      let n = null;
      try {
        n = t.parentNode;
      } catch {
        return null;
      }
      return this.find(n, e);
    }
    return null;
  }
  create(t, e, n) {
    const s = this.query(e);
    if (s == null)
      throw new Ke(`Unable to create ${e} blot`);
    const i = s, l = (
      // @ts-expect-error Fix me later
      e instanceof Node || e.nodeType === Node.TEXT_NODE ? e : i.create(n)
    ), a = new i(t, l, n);
    return Ys.blots.set(a.domNode, a), a;
  }
  find(t, e = !1) {
    return Ys.find(t, e);
  }
  query(t, e = C.ANY) {
    let n;
    return typeof t == "string" ? n = this.types[t] || this.attributes[t] : t instanceof Text || t.nodeType === Node.TEXT_NODE ? n = this.types.text : typeof t == "number" ? t & C.LEVEL & C.BLOCK ? n = this.types.block : t & C.LEVEL & C.INLINE && (n = this.types.inline) : t instanceof Element && ((t.getAttribute("class") || "").split(/\s+/).some((s) => (n = this.classes[s], !!n)), n = n || this.tags[t.tagName]), n == null ? null : "scope" in n && e & C.LEVEL & n.scope && e & C.TYPE & n.scope ? n : null;
  }
  register(...t) {
    return t.map((e) => {
      const n = "blotName" in e, s = "attrName" in e;
      if (!n && !s)
        throw new Ke("Invalid definition");
      if (n && e.blotName === "abstract")
        throw new Ke("Cannot register abstract class");
      const i = n ? e.blotName : s ? e.attrName : void 0;
      return this.types[i] = e, s ? typeof e.keyName == "string" && (this.attributes[e.keyName] = e) : n && (e.className && (this.classes[e.className] = e), e.tagName && (Array.isArray(e.tagName) ? e.tagName = e.tagName.map((l) => l.toUpperCase()) : e.tagName = e.tagName.toUpperCase(), (Array.isArray(e.tagName) ? e.tagName : [e.tagName]).forEach((l) => {
        (this.tags[l] == null || e.className == null) && (this.tags[l] = e);
      }))), e;
    });
  }
};
yo.blots = /* @__PURE__ */ new WeakMap();
let qn = yo;
function gl(r, t) {
  return (r.getAttribute("class") || "").split(/\s+/).filter((e) => e.indexOf(`${t}-`) === 0);
}
class St extends Dt {
  static keys(t) {
    return (t.getAttribute("class") || "").split(/\s+/).map((e) => e.split("-").slice(0, -1).join("-"));
  }
  add(t, e) {
    return this.canAdd(t, e) ? (this.remove(t), t.classList.add(`${this.keyName}-${e}`), !0) : !1;
  }
  remove(t) {
    gl(t, this.keyName).forEach((e) => {
      t.classList.remove(e);
    }), t.classList.length === 0 && t.removeAttribute("class");
  }
  value(t) {
    const e = (gl(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
    return this.canAdd(t, e) ? e : "";
  }
}
function ks(r) {
  const t = r.split("-"), e = t.slice(1).map((n) => n[0].toUpperCase() + n.slice(1)).join("");
  return t[0] + e;
}
class le extends Dt {
  static keys(t) {
    return (t.getAttribute("style") || "").split(";").map((e) => e.split(":")[0].trim());
  }
  add(t, e) {
    return this.canAdd(t, e) ? (t.style[ks(this.keyName)] = e, !0) : !1;
  }
  remove(t) {
    t.style[ks(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style");
  }
  value(t) {
    const e = t.style[ks(this.keyName)];
    return this.canAdd(t, e) ? e : "";
  }
}
class Rr {
  constructor(t) {
    this.attributes = {}, this.domNode = t, this.build();
  }
  attribute(t, e) {
    e ? t.add(this.domNode, e) && (t.value(this.domNode) != null ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName]);
  }
  build() {
    this.attributes = {};
    const t = qn.find(this.domNode);
    if (t == null)
      return;
    const e = Dt.keys(this.domNode), n = St.keys(this.domNode), s = le.keys(this.domNode);
    e.concat(n).concat(s).forEach((i) => {
      const l = t.scroll.query(i, C.ATTRIBUTE);
      l instanceof Dt && (this.attributes[l.attrName] = l);
    });
  }
  copy(t) {
    Object.keys(this.attributes).forEach((e) => {
      const n = this.attributes[e].value(this.domNode);
      t.format(e, n);
    });
  }
  move(t) {
    this.copy(t), Object.keys(this.attributes).forEach((e) => {
      this.attributes[e].remove(this.domNode);
    }), this.attributes = {};
  }
  values() {
    return Object.keys(this.attributes).reduce(
      (t, e) => (t[e] = this.attributes[e].value(this.domNode), t),
      {}
    );
  }
}
const vo = class {
  constructor(t, e) {
    this.scroll = t, this.domNode = e, qn.blots.set(e, this), this.prev = null, this.next = null;
  }
  static create(t) {
    if (this.tagName == null)
      throw new Ke("Blot definition missing tagName");
    let e, n;
    return Array.isArray(this.tagName) ? (typeof t == "string" ? (n = t.toUpperCase(), parseInt(n, 10).toString() === n && (n = parseInt(n, 10))) : typeof t == "number" && (n = t), typeof n == "number" ? e = document.createElement(this.tagName[n - 1]) : n && this.tagName.indexOf(n) > -1 ? e = document.createElement(n) : e = document.createElement(this.tagName[0])) : e = document.createElement(this.tagName), this.className && e.classList.add(this.className), e;
  }
  // Hack for accessing inherited static methods
  get statics() {
    return this.constructor;
  }
  attach() {
  }
  clone() {
    const t = this.domNode.cloneNode(!1);
    return this.scroll.create(t);
  }
  detach() {
    this.parent != null && this.parent.removeChild(this), qn.blots.delete(this.domNode);
  }
  deleteAt(t, e) {
    this.isolate(t, e).remove();
  }
  formatAt(t, e, n, s) {
    const i = this.isolate(t, e);
    if (this.scroll.query(n, C.BLOT) != null && s)
      i.wrap(n, s);
    else if (this.scroll.query(n, C.ATTRIBUTE) != null) {
      const l = this.scroll.create(this.statics.scope);
      i.wrap(l), l.format(n, s);
    }
  }
  insertAt(t, e, n) {
    const s = n == null ? this.scroll.create("text", e) : this.scroll.create(e, n), i = this.split(t);
    this.parent.insertBefore(s, i || void 0);
  }
  isolate(t, e) {
    const n = this.split(t);
    if (n == null)
      throw new Error("Attempt to isolate at end");
    return n.split(e), n;
  }
  length() {
    return 1;
  }
  offset(t = this.parent) {
    return this.parent == null || this === t ? 0 : this.parent.children.offset(this) + this.parent.offset(t);
  }
  optimize(t) {
    this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
  }
  remove() {
    this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
  }
  replaceWith(t, e) {
    const n = typeof t == "string" ? this.scroll.create(t, e) : t;
    return this.parent != null && (this.parent.insertBefore(n, this.next || void 0), this.remove()), n;
  }
  split(t, e) {
    return t === 0 ? this : this.next;
  }
  update(t, e) {
  }
  wrap(t, e) {
    const n = typeof t == "string" ? this.scroll.create(t, e) : t;
    if (this.parent != null && this.parent.insertBefore(n, this.next || void 0), typeof n.appendChild != "function")
      throw new Ke(`Cannot wrap ${t}`);
    return n.appendChild(this), n;
  }
};
vo.blotName = "abstract";
let Eo = vo;
const Ao = class extends Eo {
  static value(t) {
    return !0;
  }
  index(t, e) {
    return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1;
  }
  position(t, e) {
    let n = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
    return t > 0 && (n += 1), [this.parent.domNode, n];
  }
  value() {
    return {
      [this.statics.blotName]: this.statics.value(this.domNode) || !0
    };
  }
};
Ao.scope = C.INLINE_BLOT;
let et = Ao;
class Pf {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  append(...t) {
    if (this.insertBefore(t[0], null), t.length > 1) {
      const e = t.slice(1);
      this.append(...e);
    }
  }
  at(t) {
    const e = this.iterator();
    let n = e();
    for (; n && t > 0; )
      t -= 1, n = e();
    return n;
  }
  contains(t) {
    const e = this.iterator();
    let n = e();
    for (; n; ) {
      if (n === t)
        return !0;
      n = e();
    }
    return !1;
  }
  indexOf(t) {
    const e = this.iterator();
    let n = e(), s = 0;
    for (; n; ) {
      if (n === t)
        return s;
      s += 1, n = e();
    }
    return -1;
  }
  insertBefore(t, e) {
    t != null && (this.remove(t), t.next = e, e != null ? (t.prev = e.prev, e.prev != null && (e.prev.next = t), e.prev = t, e === this.head && (this.head = t)) : this.tail != null ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = null, this.head = this.tail = t), this.length += 1);
  }
  offset(t) {
    let e = 0, n = this.head;
    for (; n != null; ) {
      if (n === t)
        return e;
      e += n.length(), n = n.next;
    }
    return -1;
  }
  remove(t) {
    this.contains(t) && (t.prev != null && (t.prev.next = t.next), t.next != null && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1);
  }
  iterator(t = this.head) {
    return () => {
      const e = t;
      return t != null && (t = t.next), e;
    };
  }
  find(t, e = !1) {
    const n = this.iterator();
    let s = n();
    for (; s; ) {
      const i = s.length();
      if (t < i || e && t === i && (s.next == null || s.next.length() !== 0))
        return [s, t];
      t -= i, s = n();
    }
    return [null, 0];
  }
  forEach(t) {
    const e = this.iterator();
    let n = e();
    for (; n; )
      t(n), n = e();
  }
  forEachAt(t, e, n) {
    if (e <= 0)
      return;
    const [s, i] = this.find(t);
    let l = t - i;
    const a = this.iterator(s);
    let c = a();
    for (; c && l < t + e; ) {
      const h = c.length();
      t > l ? n(
        c,
        t - l,
        Math.min(e, l + h - t)
      ) : n(c, 0, Math.min(h, t + e - l)), l += h, c = a();
    }
  }
  map(t) {
    return this.reduce((e, n) => (e.push(t(n)), e), []);
  }
  reduce(t, e) {
    const n = this.iterator();
    let s = n();
    for (; s; )
      e = t(e, s), s = n();
    return e;
  }
}
function ml(r, t) {
  const e = t.find(r);
  if (e)
    return e;
  try {
    return t.create(r);
  } catch {
    const n = t.create(C.INLINE);
    return Array.from(r.childNodes).forEach((s) => {
      n.domNode.appendChild(s);
    }), r.parentNode && r.parentNode.replaceChild(n.domNode, r), n.attach(), n;
  }
}
const No = class Qt extends Eo {
  constructor(t, e) {
    super(t, e), this.uiNode = null, this.build();
  }
  appendChild(t) {
    this.insertBefore(t);
  }
  attach() {
    super.attach(), this.children.forEach((t) => {
      t.attach();
    });
  }
  attachUI(t) {
    this.uiNode != null && this.uiNode.remove(), this.uiNode = t, Qt.uiClass && this.uiNode.classList.add(Qt.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
  }
  build() {
    this.children = new Pf(), Array.from(this.domNode.childNodes).filter((t) => t !== this.uiNode).reverse().forEach((t) => {
      try {
        const e = ml(t, this.scroll);
        this.insertBefore(e, this.children.head || void 0);
      } catch (e) {
        if (e instanceof Ke)
          return;
        throw e;
      }
    });
  }
  deleteAt(t, e) {
    if (t === 0 && e === this.length())
      return this.remove();
    this.children.forEachAt(t, e, (n, s, i) => {
      n.deleteAt(s, i);
    });
  }
  descendant(t, e = 0) {
    const [n, s] = this.children.find(e);
    return t.blotName == null && t(n) || t.blotName != null && n instanceof t ? [n, s] : n instanceof Qt ? n.descendant(t, s) : [null, -1];
  }
  descendants(t, e = 0, n = Number.MAX_VALUE) {
    let s = [], i = n;
    return this.children.forEachAt(
      e,
      n,
      (l, a, c) => {
        (t.blotName == null && t(l) || t.blotName != null && l instanceof t) && s.push(l), l instanceof Qt && (s = s.concat(
          l.descendants(t, a, i)
        )), i -= c;
      }
    ), s;
  }
  detach() {
    this.children.forEach((t) => {
      t.detach();
    }), super.detach();
  }
  enforceAllowedChildren() {
    let t = !1;
    this.children.forEach((e) => {
      t || this.statics.allowedChildren.some(
        (n) => e instanceof n
      ) || (e.statics.scope === C.BLOCK_BLOT ? (e.next != null && this.splitAfter(e), e.prev != null && this.splitAfter(e.prev), e.parent.unwrap(), t = !0) : e instanceof Qt ? e.unwrap() : e.remove());
    });
  }
  formatAt(t, e, n, s) {
    this.children.forEachAt(t, e, (i, l, a) => {
      i.formatAt(l, a, n, s);
    });
  }
  insertAt(t, e, n) {
    const [s, i] = this.children.find(t);
    if (s)
      s.insertAt(i, e, n);
    else {
      const l = n == null ? this.scroll.create("text", e) : this.scroll.create(e, n);
      this.appendChild(l);
    }
  }
  insertBefore(t, e) {
    t.parent != null && t.parent.children.remove(t);
    let n = null;
    this.children.insertBefore(t, e || null), t.parent = this, e != null && (n = e.domNode), (this.domNode.parentNode !== t.domNode || this.domNode.nextSibling !== n) && this.domNode.insertBefore(t.domNode, n), t.attach();
  }
  length() {
    return this.children.reduce((t, e) => t + e.length(), 0);
  }
  moveChildren(t, e) {
    this.children.forEach((n) => {
      t.insertBefore(n, e);
    });
  }
  optimize(t) {
    if (super.optimize(t), this.enforceAllowedChildren(), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0)
      if (this.statics.defaultChild != null) {
        const e = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(e);
      } else
        this.remove();
  }
  path(t, e = !1) {
    const [n, s] = this.children.find(t, e), i = [[this, t]];
    return n instanceof Qt ? i.concat(n.path(s, e)) : (n != null && i.push([n, s]), i);
  }
  removeChild(t) {
    this.children.remove(t);
  }
  replaceWith(t, e) {
    const n = typeof t == "string" ? this.scroll.create(t, e) : t;
    return n instanceof Qt && this.moveChildren(n), super.replaceWith(n);
  }
  split(t, e = !1) {
    if (!e) {
      if (t === 0)
        return this;
      if (t === this.length())
        return this.next;
    }
    const n = this.clone();
    return this.parent && this.parent.insertBefore(n, this.next || void 0), this.children.forEachAt(t, this.length(), (s, i, l) => {
      const a = s.split(i, e);
      a != null && n.appendChild(a);
    }), n;
  }
  splitAfter(t) {
    const e = this.clone();
    for (; t.next != null; )
      e.appendChild(t.next);
    return this.parent && this.parent.insertBefore(e, this.next || void 0), e;
  }
  unwrap() {
    this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
  }
  update(t, e) {
    const n = [], s = [];
    t.forEach((i) => {
      i.target === this.domNode && i.type === "childList" && (n.push(...i.addedNodes), s.push(...i.removedNodes));
    }), s.forEach((i) => {
      if (i.parentNode != null && // @ts-expect-error Fix me later
      i.tagName !== "IFRAME" && document.body.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY)
        return;
      const l = this.scroll.find(i);
      l != null && (l.domNode.parentNode == null || l.domNode.parentNode === this.domNode) && l.detach();
    }), n.filter((i) => i.parentNode === this.domNode && i !== this.uiNode).sort((i, l) => i === l ? 0 : i.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach((i) => {
      let l = null;
      i.nextSibling != null && (l = this.scroll.find(i.nextSibling));
      const a = ml(i, this.scroll);
      (a.next !== l || a.next == null) && (a.parent != null && a.parent.removeChild(this), this.insertBefore(a, l || void 0));
    }), this.enforceAllowedChildren();
  }
};
No.uiClass = "";
let Tt = No;
function Uf(r, t) {
  if (Object.keys(r).length !== Object.keys(t).length)
    return !1;
  for (const e in r)
    if (r[e] !== t[e])
      return !1;
  return !0;
}
const $e = class Pe extends Tt {
  constructor(t, e) {
    super(t, e), this.attributes = new Rr(this.domNode);
  }
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const n = e.query(Pe.blotName);
    if (!(n != null && t.tagName === n.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  format(t, e) {
    if (t === this.statics.blotName && !e)
      this.children.forEach((n) => {
        n instanceof Pe || (n = n.wrap(Pe.blotName, !0)), this.attributes.copy(n);
      }), this.unwrap();
    else {
      const n = this.scroll.query(t, C.INLINE);
      if (n == null)
        return;
      n instanceof Dt ? this.attributes.attribute(n, e) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e);
    }
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, n, s) {
    this.formats()[n] != null || this.scroll.query(n, C.ATTRIBUTE) ? this.isolate(t, e).format(n, s) : super.formatAt(t, e, n, s);
  }
  optimize(t) {
    super.optimize(t);
    const e = this.formats();
    if (Object.keys(e).length === 0)
      return this.unwrap();
    const n = this.next;
    n instanceof Pe && n.prev === this && Uf(e, n.formats()) && (n.moveChildren(this), n.remove());
  }
  replaceWith(t, e) {
    const n = super.replaceWith(t, e);
    return this.attributes.copy(n), n;
  }
  update(t, e) {
    super.update(t, e), t.some(
      (n) => n.target === this.domNode && n.type === "attributes"
    ) && this.attributes.build();
  }
  wrap(t, e) {
    const n = super.wrap(t, e);
    return n instanceof Pe && this.attributes.move(n), n;
  }
};
$e.allowedChildren = [$e, et], $e.blotName = "inline", $e.scope = C.INLINE_BLOT, $e.tagName = "SPAN";
let xi = $e;
const Ue = class Js extends Tt {
  constructor(t, e) {
    super(t, e), this.attributes = new Rr(this.domNode);
  }
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const n = e.query(Js.blotName);
    if (!(n != null && t.tagName === n.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  format(t, e) {
    const n = this.scroll.query(t, C.BLOCK);
    n != null && (n instanceof Dt ? this.attributes.attribute(n, e) : t === this.statics.blotName && !e ? this.replaceWith(Js.blotName) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e));
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, n, s) {
    this.scroll.query(n, C.BLOCK) != null ? this.format(n, s) : super.formatAt(t, e, n, s);
  }
  insertAt(t, e, n) {
    if (n == null || this.scroll.query(e, C.INLINE) != null)
      super.insertAt(t, e, n);
    else {
      const s = this.split(t);
      if (s != null) {
        const i = this.scroll.create(e, n);
        s.parent.insertBefore(i, s);
      } else
        throw new Error("Attempt to insertAt after block boundaries");
    }
  }
  replaceWith(t, e) {
    const n = super.replaceWith(t, e);
    return this.attributes.copy(n), n;
  }
  update(t, e) {
    super.update(t, e), t.some(
      (n) => n.target === this.domNode && n.type === "attributes"
    ) && this.attributes.build();
  }
};
Ue.blotName = "block", Ue.scope = C.BLOCK_BLOT, Ue.tagName = "P", Ue.allowedChildren = [
  xi,
  Ue,
  et
];
let Cn = Ue;
const Qs = class extends Tt {
  checkMerge() {
    return this.next !== null && this.next.statics.blotName === this.statics.blotName;
  }
  deleteAt(t, e) {
    super.deleteAt(t, e), this.enforceAllowedChildren();
  }
  formatAt(t, e, n, s) {
    super.formatAt(t, e, n, s), this.enforceAllowedChildren();
  }
  insertAt(t, e, n) {
    super.insertAt(t, e, n), this.enforceAllowedChildren();
  }
  optimize(t) {
    super.optimize(t), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
  }
};
Qs.blotName = "container", Qs.scope = C.BLOCK_BLOT;
let kr = Qs;
class at extends et {
  static formats(t, e) {
  }
  format(t, e) {
    super.formatAt(0, this.length(), t, e);
  }
  formatAt(t, e, n, s) {
    t === 0 && e === this.length() ? this.format(n, s) : super.formatAt(t, e, n, s);
  }
  formats() {
    return this.statics.formats(this.domNode, this.scroll);
  }
}
const Ff = {
  attributes: !0,
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
}, Hf = 100, Fe = class extends Tt {
  constructor(t, e) {
    super(null, e), this.registry = t, this.scroll = this, this.build(), this.observer = new MutationObserver((n) => {
      this.update(n);
    }), this.observer.observe(this.domNode, Ff), this.attach();
  }
  create(t, e) {
    return this.registry.create(this, t, e);
  }
  find(t, e = !1) {
    const n = this.registry.find(t, e);
    return n ? n.scroll === this ? n : e ? this.find(n.scroll.domNode.parentNode, !0) : null : null;
  }
  query(t, e = C.ANY) {
    return this.registry.query(t, e);
  }
  register(...t) {
    return this.registry.register(...t);
  }
  build() {
    this.scroll != null && super.build();
  }
  detach() {
    super.detach(), this.observer.disconnect();
  }
  deleteAt(t, e) {
    this.update(), t === 0 && e === this.length() ? this.children.forEach((n) => {
      n.remove();
    }) : super.deleteAt(t, e);
  }
  formatAt(t, e, n, s) {
    this.update(), super.formatAt(t, e, n, s);
  }
  insertAt(t, e, n) {
    this.update(), super.insertAt(t, e, n);
  }
  optimize(t = [], e = {}) {
    super.optimize(e);
    const n = e.mutationsMap || /* @__PURE__ */ new WeakMap();
    let s = Array.from(this.observer.takeRecords());
    for (; s.length > 0; )
      t.push(s.pop());
    const i = (c, h = !0) => {
      c == null || c === this || c.domNode.parentNode != null && (n.has(c.domNode) || n.set(c.domNode, []), h && i(c.parent));
    }, l = (c) => {
      n.has(c.domNode) && (c instanceof Tt && c.children.forEach(l), n.delete(c.domNode), c.optimize(e));
    };
    let a = t;
    for (let c = 0; a.length > 0; c += 1) {
      if (c >= Hf)
        throw new Error("[Parchment] Maximum optimize iterations reached");
      for (a.forEach((h) => {
        const d = this.find(h.target, !0);
        d != null && (d.domNode === h.target && (h.type === "childList" ? (i(this.find(h.previousSibling, !1)), Array.from(h.addedNodes).forEach((b) => {
          const p = this.find(b, !1);
          i(p, !1), p instanceof Tt && p.children.forEach((g) => {
            i(g, !1);
          });
        })) : h.type === "attributes" && i(d.prev)), i(d));
      }), this.children.forEach(l), a = Array.from(this.observer.takeRecords()), s = a.slice(); s.length > 0; )
        t.push(s.pop());
    }
  }
  update(t, e = {}) {
    t = t || this.observer.takeRecords();
    const n = /* @__PURE__ */ new WeakMap();
    t.map((s) => {
      const i = this.find(s.target, !0);
      return i == null ? null : n.has(i.domNode) ? (n.get(i.domNode).push(s), null) : (n.set(i.domNode, [s]), i);
    }).forEach((s) => {
      s != null && s !== this && n.has(s.domNode) && s.update(n.get(s.domNode) || [], e);
    }), e.mutationsMap = n, n.has(this.domNode) && super.update(n.get(this.domNode), e), this.optimize(t, e);
  }
};
Fe.blotName = "scroll", Fe.defaultChild = Cn, Fe.allowedChildren = [Cn, kr], Fe.scope = C.BLOCK_BLOT, Fe.tagName = "DIV";
let Si = Fe;
const ti = class wo extends et {
  constructor(t, e) {
    super(t, e), this.text = this.statics.value(this.domNode);
  }
  static create(t) {
    return document.createTextNode(t);
  }
  static value(t) {
    return t.data;
  }
  deleteAt(t, e) {
    this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e);
  }
  index(t, e) {
    return this.domNode === t ? e : -1;
  }
  insertAt(t, e, n) {
    n == null ? (this.text = this.text.slice(0, t) + e + this.text.slice(t), this.domNode.data = this.text) : super.insertAt(t, e, n);
  }
  length() {
    return this.text.length;
  }
  optimize(t) {
    super.optimize(t), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof wo && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
  }
  position(t, e = !1) {
    return [this.domNode, t];
  }
  split(t, e = !1) {
    if (!e) {
      if (t === 0)
        return this;
      if (t === this.length())
        return this.next;
    }
    const n = this.scroll.create(this.domNode.splitText(t));
    return this.parent.insertBefore(n, this.next || void 0), this.text = this.statics.value(this.domNode), n;
  }
  update(t, e) {
    t.some((n) => n.type === "characterData" && n.target === this.domNode) && (this.text = this.statics.value(this.domNode));
  }
  value() {
    return this.text;
  }
};
ti.blotName = "text", ti.scope = C.INLINE_BLOT;
let Lr = ti;
const zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Attributor: Dt,
  AttributorStore: Rr,
  BlockBlot: Cn,
  ClassAttributor: St,
  ContainerBlot: kr,
  EmbedBlot: at,
  InlineBlot: xi,
  LeafBlot: et,
  ParentBlot: Tt,
  Registry: qn,
  Scope: C,
  ScrollBlot: Si,
  StyleAttributor: le,
  TextBlot: Lr
}, Symbol.toStringTag, { value: "Module" }));
var te = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function To(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ei = { exports: {} }, ot = -1, st = 1, W = 0;
function In(r, t, e, n, s) {
  if (r === t)
    return r ? [[W, r]] : [];
  if (e != null) {
    var i = Qf(r, t, e);
    if (i)
      return i;
  }
  var l = Li(r, t), a = r.substring(0, l);
  r = r.substring(l), t = t.substring(l), l = Mr(r, t);
  var c = r.substring(r.length - l);
  r = r.substring(0, r.length - l), t = t.substring(0, t.length - l);
  var h = Kf(r, t);
  return a && h.unshift([W, a]), c && h.push([W, c]), Oi(h, s), n && Wf(h), h;
}
function Kf(r, t) {
  var e;
  if (!r)
    return [[st, t]];
  if (!t)
    return [[ot, r]];
  var n = r.length > t.length ? r : t, s = r.length > t.length ? t : r, i = n.indexOf(s);
  if (i !== -1)
    return e = [
      [st, n.substring(0, i)],
      [W, s],
      [st, n.substring(i + s.length)]
    ], r.length > t.length && (e[0][0] = e[2][0] = ot), e;
  if (s.length === 1)
    return [
      [ot, r],
      [st, t]
    ];
  var l = Vf(r, t);
  if (l) {
    var a = l[0], c = l[1], h = l[2], d = l[3], b = l[4], p = In(a, h), g = In(c, d);
    return p.concat([[W, b]], g);
  }
  return Gf(r, t);
}
function Gf(r, t) {
  for (var e = r.length, n = t.length, s = Math.ceil((e + n) / 2), i = s, l = 2 * s, a = new Array(l), c = new Array(l), h = 0; h < l; h++)
    a[h] = -1, c[h] = -1;
  a[i + 1] = 0, c[i + 1] = 0;
  for (var d = e - n, b = d % 2 !== 0, p = 0, g = 0, m = 0, E = 0, y = 0; y < s; y++) {
    for (var N = -y + p; N <= y - g; N += 2) {
      var T = i + N, w;
      N === -y || N !== y && a[T - 1] < a[T + 1] ? w = a[T + 1] : w = a[T - 1] + 1;
      for (var O = w - N; w < e && O < n && r.charAt(w) === t.charAt(O); )
        w++, O++;
      if (a[T] = w, w > e)
        g += 2;
      else if (O > n)
        p += 2;
      else if (b) {
        var S = i + d - N;
        if (S >= 0 && S < l && c[S] !== -1) {
          var R = e - c[S];
          if (w >= R)
            return bl(r, t, w, O);
        }
      }
    }
    for (var B = -y + m; B <= y - E; B += 2) {
      var S = i + B, R;
      B === -y || B !== y && c[S - 1] < c[S + 1] ? R = c[S + 1] : R = c[S - 1] + 1;
      for (var F = R - B; R < e && F < n && r.charAt(e - R - 1) === t.charAt(n - F - 1); )
        R++, F++;
      if (c[S] = R, R > e)
        E += 2;
      else if (F > n)
        m += 2;
      else if (!b) {
        var T = i + d - B;
        if (T >= 0 && T < l && a[T] !== -1) {
          var w = a[T], O = i + w - T;
          if (R = e - R, w >= R)
            return bl(r, t, w, O);
        }
      }
    }
  }
  return [
    [ot, r],
    [st, t]
  ];
}
function bl(r, t, e, n) {
  var s = r.substring(0, e), i = t.substring(0, n), l = r.substring(e), a = t.substring(n), c = In(s, i), h = In(l, a);
  return c.concat(h);
}
function Li(r, t) {
  if (!r || !t || r.charAt(0) !== t.charAt(0))
    return 0;
  for (var e = 0, n = Math.min(r.length, t.length), s = n, i = 0; e < s; )
    r.substring(i, s) == t.substring(i, s) ? (e = s, i = e) : n = s, s = Math.floor((n - e) / 2 + e);
  return xo(r.charCodeAt(s - 1)) && s--, s;
}
function yl(r, t) {
  var e = r.length, n = t.length;
  if (e == 0 || n == 0)
    return 0;
  e > n ? r = r.substring(e - n) : e < n && (t = t.substring(0, e));
  var s = Math.min(e, n);
  if (r == t)
    return s;
  for (var i = 0, l = 1; ; ) {
    var a = r.substring(s - l), c = t.indexOf(a);
    if (c == -1)
      return i;
    l += c, (c == 0 || r.substring(s - l) == t.substring(0, l)) && (i = l, l++);
  }
}
function Mr(r, t) {
  if (!r || !t || r.slice(-1) !== t.slice(-1))
    return 0;
  for (var e = 0, n = Math.min(r.length, t.length), s = n, i = 0; e < s; )
    r.substring(r.length - s, r.length - i) == t.substring(t.length - s, t.length - i) ? (e = s, i = e) : n = s, s = Math.floor((n - e) / 2 + e);
  return So(r.charCodeAt(r.length - s)) && s--, s;
}
function Vf(r, t) {
  var e = r.length > t.length ? r : t, n = r.length > t.length ? t : r;
  if (e.length < 4 || n.length * 2 < e.length)
    return null;
  function s(g, m, E) {
    for (var y = g.substring(E, E + Math.floor(g.length / 4)), N = -1, T = "", w, O, S, R; (N = m.indexOf(y, N + 1)) !== -1; ) {
      var B = Li(
        g.substring(E),
        m.substring(N)
      ), F = Mr(
        g.substring(0, E),
        m.substring(0, N)
      );
      T.length < F + B && (T = m.substring(N - F, N) + m.substring(N, N + B), w = g.substring(0, E - F), O = g.substring(E + B), S = m.substring(0, N - F), R = m.substring(N + B));
    }
    return T.length * 2 >= g.length ? [
      w,
      O,
      S,
      R,
      T
    ] : null;
  }
  var i = s(
    e,
    n,
    Math.ceil(e.length / 4)
  ), l = s(
    e,
    n,
    Math.ceil(e.length / 2)
  ), a;
  if (!i && !l)
    return null;
  l ? i ? a = i[4].length > l[4].length ? i : l : a = l : a = i;
  var c, h, d, b;
  r.length > t.length ? (c = a[0], h = a[1], d = a[2], b = a[3]) : (d = a[0], b = a[1], c = a[2], h = a[3]);
  var p = a[4];
  return [c, h, d, b, p];
}
function Wf(r) {
  for (var t = !1, e = [], n = 0, s = null, i = 0, l = 0, a = 0, c = 0, h = 0; i < r.length; )
    r[i][0] == W ? (e[n++] = i, l = c, a = h, c = 0, h = 0, s = r[i][1]) : (r[i][0] == st ? c += r[i][1].length : h += r[i][1].length, s && s.length <= Math.max(l, a) && s.length <= Math.max(c, h) && (r.splice(e[n - 1], 0, [
      ot,
      s
    ]), r[e[n - 1] + 1][0] = st, n--, n--, i = n > 0 ? e[n - 1] : -1, l = 0, a = 0, c = 0, h = 0, s = null, t = !0)), i++;
  for (t && Oi(r), Yf(r), i = 1; i < r.length; ) {
    if (r[i - 1][0] == ot && r[i][0] == st) {
      var d = r[i - 1][1], b = r[i][1], p = yl(d, b), g = yl(b, d);
      p >= g ? (p >= d.length / 2 || p >= b.length / 2) && (r.splice(i, 0, [
        W,
        b.substring(0, p)
      ]), r[i - 1][1] = d.substring(
        0,
        d.length - p
      ), r[i + 1][1] = b.substring(p), i++) : (g >= d.length / 2 || g >= b.length / 2) && (r.splice(i, 0, [
        W,
        d.substring(0, g)
      ]), r[i - 1][0] = st, r[i - 1][1] = b.substring(
        0,
        b.length - g
      ), r[i + 1][0] = ot, r[i + 1][1] = d.substring(g), i++), i++;
    }
    i++;
  }
}
var vl = /[^a-zA-Z0-9]/, El = /\s/, Al = /[\r\n]/, Zf = /\n\r?\n$/, Xf = /^\r?\n\r?\n/;
function Yf(r) {
  function t(g, m) {
    if (!g || !m)
      return 6;
    var E = g.charAt(g.length - 1), y = m.charAt(0), N = E.match(vl), T = y.match(vl), w = N && E.match(El), O = T && y.match(El), S = w && E.match(Al), R = O && y.match(Al), B = S && g.match(Zf), F = R && m.match(Xf);
    return B || F ? 5 : S || R ? 4 : N && !w && O ? 3 : w || O ? 2 : N || T ? 1 : 0;
  }
  for (var e = 1; e < r.length - 1; ) {
    if (r[e - 1][0] == W && r[e + 1][0] == W) {
      var n = r[e - 1][1], s = r[e][1], i = r[e + 1][1], l = Mr(n, s);
      if (l) {
        var a = s.substring(s.length - l);
        n = n.substring(0, n.length - l), s = a + s.substring(0, s.length - l), i = a + i;
      }
      for (var c = n, h = s, d = i, b = t(n, s) + t(s, i); s.charAt(0) === i.charAt(0); ) {
        n += s.charAt(0), s = s.substring(1) + i.charAt(0), i = i.substring(1);
        var p = t(n, s) + t(s, i);
        p >= b && (b = p, c = n, h = s, d = i);
      }
      r[e - 1][1] != c && (c ? r[e - 1][1] = c : (r.splice(e - 1, 1), e--), r[e][1] = h, d ? r[e + 1][1] = d : (r.splice(e + 1, 1), e--));
    }
    e++;
  }
}
function Oi(r, t) {
  r.push([W, ""]);
  for (var e = 0, n = 0, s = 0, i = "", l = "", a; e < r.length; ) {
    if (e < r.length - 1 && !r[e][1]) {
      r.splice(e, 1);
      continue;
    }
    switch (r[e][0]) {
      case st:
        s++, l += r[e][1], e++;
        break;
      case ot:
        n++, i += r[e][1], e++;
        break;
      case W:
        var c = e - s - n - 1;
        if (t) {
          if (c >= 0 && Oo(r[c][1])) {
            var h = r[c][1].slice(-1);
            if (r[c][1] = r[c][1].slice(
              0,
              -1
            ), i = h + i, l = h + l, !r[c][1]) {
              r.splice(c, 1), e--;
              var d = c - 1;
              r[d] && r[d][0] === st && (s++, l = r[d][1] + l, d--), r[d] && r[d][0] === ot && (n++, i = r[d][1] + i, d--), c = d;
            }
          }
          if (Lo(r[e][1])) {
            var h = r[e][1].charAt(0);
            r[e][1] = r[e][1].slice(1), i += h, l += h;
          }
        }
        if (e < r.length - 1 && !r[e][1]) {
          r.splice(e, 1);
          break;
        }
        if (i.length > 0 || l.length > 0) {
          i.length > 0 && l.length > 0 && (a = Li(l, i), a !== 0 && (c >= 0 ? r[c][1] += l.substring(
            0,
            a
          ) : (r.splice(0, 0, [
            W,
            l.substring(0, a)
          ]), e++), l = l.substring(a), i = i.substring(a)), a = Mr(l, i), a !== 0 && (r[e][1] = l.substring(l.length - a) + r[e][1], l = l.substring(
            0,
            l.length - a
          ), i = i.substring(
            0,
            i.length - a
          )));
          var b = s + n;
          i.length === 0 && l.length === 0 ? (r.splice(e - b, b), e = e - b) : i.length === 0 ? (r.splice(e - b, b, [st, l]), e = e - b + 1) : l.length === 0 ? (r.splice(e - b, b, [ot, i]), e = e - b + 1) : (r.splice(
            e - b,
            b,
            [ot, i],
            [st, l]
          ), e = e - b + 2);
        }
        e !== 0 && r[e - 1][0] === W ? (r[e - 1][1] += r[e][1], r.splice(e, 1)) : e++, s = 0, n = 0, i = "", l = "";
        break;
    }
  }
  r[r.length - 1][1] === "" && r.pop();
  var p = !1;
  for (e = 1; e < r.length - 1; )
    r[e - 1][0] === W && r[e + 1][0] === W && (r[e][1].substring(
      r[e][1].length - r[e - 1][1].length
    ) === r[e - 1][1] ? (r[e][1] = r[e - 1][1] + r[e][1].substring(
      0,
      r[e][1].length - r[e - 1][1].length
    ), r[e + 1][1] = r[e - 1][1] + r[e + 1][1], r.splice(e - 1, 1), p = !0) : r[e][1].substring(0, r[e + 1][1].length) == r[e + 1][1] && (r[e - 1][1] += r[e + 1][1], r[e][1] = r[e][1].substring(r[e + 1][1].length) + r[e + 1][1], r.splice(e + 1, 1), p = !0)), e++;
  p && Oi(r, t);
}
function xo(r) {
  return r >= 55296 && r <= 56319;
}
function So(r) {
  return r >= 56320 && r <= 57343;
}
function Lo(r) {
  return So(r.charCodeAt(0));
}
function Oo(r) {
  return xo(r.charCodeAt(r.length - 1));
}
function Jf(r) {
  for (var t = [], e = 0; e < r.length; e++)
    r[e][1].length > 0 && t.push(r[e]);
  return t;
}
function Ms(r, t, e, n) {
  return Oo(r) || Lo(n) ? null : Jf([
    [W, r],
    [ot, t],
    [st, e],
    [W, n]
  ]);
}
function Qf(r, t, e) {
  var n = typeof e == "number" ? { index: e, length: 0 } : e.oldRange, s = typeof e == "number" ? null : e.newRange, i = r.length, l = t.length;
  if (n.length === 0 && (s === null || s.length === 0)) {
    var a = n.index, c = r.slice(0, a), h = r.slice(a), d = s ? s.index : null;
    t: {
      var b = a + l - i;
      if (d !== null && d !== b || b < 0 || b > l)
        break t;
      var p = t.slice(0, b), g = t.slice(b);
      if (g !== h)
        break t;
      var m = Math.min(a, b), E = c.slice(0, m), y = p.slice(0, m);
      if (E !== y)
        break t;
      var N = c.slice(m), T = p.slice(m);
      return Ms(E, N, T, h);
    }
    t: {
      if (d !== null && d !== a)
        break t;
      var w = a, p = t.slice(0, w), g = t.slice(w);
      if (p !== c)
        break t;
      var O = Math.min(i - w, l - w), S = h.slice(h.length - O), R = g.slice(g.length - O);
      if (S !== R)
        break t;
      var N = h.slice(0, h.length - O), T = g.slice(0, g.length - O);
      return Ms(c, N, T, S);
    }
  }
  if (n.length > 0 && s && s.length === 0)
    t: {
      var E = r.slice(0, n.index), S = r.slice(n.index + n.length), m = E.length, O = S.length;
      if (l < m + O)
        break t;
      var y = t.slice(0, m), R = t.slice(l - O);
      if (E !== y || S !== R)
        break t;
      var N = r.slice(m, i - O), T = t.slice(m, l - O);
      return Ms(E, N, T, S);
    }
  return null;
}
function Br(r, t, e, n) {
  return In(r, t, e, n, !0);
}
Br.INSERT = st;
Br.DELETE = ot;
Br.EQUAL = W;
var td = Br, Or = { exports: {} };
Or.exports;
(function(r, t) {
  var e = 200, n = "__lodash_hash_undefined__", s = 9007199254740991, i = "[object Arguments]", l = "[object Array]", a = "[object Boolean]", c = "[object Date]", h = "[object Error]", d = "[object Function]", b = "[object GeneratorFunction]", p = "[object Map]", g = "[object Number]", m = "[object Object]", E = "[object Promise]", y = "[object RegExp]", N = "[object Set]", T = "[object String]", w = "[object Symbol]", O = "[object WeakMap]", S = "[object ArrayBuffer]", R = "[object DataView]", B = "[object Float32Array]", F = "[object Float64Array]", gt = "[object Int8Array]", mt = "[object Int16Array]", _t = "[object Int32Array]", qt = "[object Uint8Array]", oe = "[object Uint8ClampedArray]", Se = "[object Uint16Array]", Le = "[object Uint32Array]", Ye = /[\\^$.*+?()[\]{}|]/g, x = /\w*$/, M = /^\[object .+?Constructor\]$/, K = /^(?:0|[1-9]\d*)$/, j = {};
  j[i] = j[l] = j[S] = j[R] = j[a] = j[c] = j[B] = j[F] = j[gt] = j[mt] = j[_t] = j[p] = j[g] = j[m] = j[y] = j[N] = j[T] = j[w] = j[qt] = j[oe] = j[Se] = j[Le] = !0, j[h] = j[d] = j[O] = !1;
  var Je = typeof te == "object" && te && te.Object === Object && te, Ur = typeof self == "object" && self && self.Object === Object && self, bt = Je || Ur || Function("return this")(), Hn = t && !t.nodeType && t, U = Hn && !0 && r && !r.nodeType && r, zn = U && U.exports === Hn;
  function Fr(o, u) {
    return o.set(u[0], u[1]), o;
  }
  function yt(o, u) {
    return o.add(u), o;
  }
  function Kn(o, u) {
    for (var f = -1, v = o ? o.length : 0; ++f < v && u(o[f], f, o) !== !1; )
      ;
    return o;
  }
  function Gn(o, u) {
    for (var f = -1, v = u.length, k = o.length; ++f < v; )
      o[k + f] = u[f];
    return o;
  }
  function Qe(o, u, f, v) {
    var k = -1, I = o ? o.length : 0;
    for (v && I && (f = o[++k]); ++k < I; )
      f = u(f, o[k], k, o);
    return f;
  }
  function tn(o, u) {
    for (var f = -1, v = Array(o); ++f < o; )
      v[f] = u(f);
    return v;
  }
  function Vn(o, u) {
    return o == null ? void 0 : o[u];
  }
  function en(o) {
    var u = !1;
    if (o != null && typeof o.toString != "function")
      try {
        u = !!(o + "");
      } catch {
      }
    return u;
  }
  function Wn(o) {
    var u = -1, f = Array(o.size);
    return o.forEach(function(v, k) {
      f[++u] = [k, v];
    }), f;
  }
  function nn(o, u) {
    return function(f) {
      return o(u(f));
    };
  }
  function Zn(o) {
    var u = -1, f = Array(o.size);
    return o.forEach(function(v) {
      f[++u] = v;
    }), f;
  }
  var Hr = Array.prototype, zr = Function.prototype, Oe = Object.prototype, rn = bt["__core-js_shared__"], Xn = function() {
    var o = /[^.]+$/.exec(rn && rn.keys && rn.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), Yn = zr.toString, Ct = Oe.hasOwnProperty, _e = Oe.toString, Kr = RegExp(
    "^" + Yn.call(Ct).replace(Ye, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ae = zn ? bt.Buffer : void 0, qe = bt.Symbol, sn = bt.Uint8Array, ct = nn(Object.getPrototypeOf, Object), Jn = Object.create, Qn = Oe.propertyIsEnumerable, Gr = Hr.splice, ln = Object.getOwnPropertySymbols, Ce = ae ? ae.isBuffer : void 0, tr = nn(Object.keys, Object), Ie = Et(bt, "DataView"), ce = Et(bt, "Map"), vt = Et(bt, "Promise"), Re = Et(bt, "Set"), on = Et(bt, "WeakMap"), ue = Et(Object, "create"), an = rt(Ie), he = rt(ce), cn = rt(vt), un = rt(Re), hn = rt(on), Yt = qe ? qe.prototype : void 0, er = Yt ? Yt.valueOf : void 0;
  function Ut(o) {
    var u = -1, f = o ? o.length : 0;
    for (this.clear(); ++u < f; ) {
      var v = o[u];
      this.set(v[0], v[1]);
    }
  }
  function Vr() {
    this.__data__ = ue ? ue(null) : {};
  }
  function Wr(o) {
    return this.has(o) && delete this.__data__[o];
  }
  function Zr(o) {
    var u = this.__data__;
    if (ue) {
      var f = u[o];
      return f === n ? void 0 : f;
    }
    return Ct.call(u, o) ? u[o] : void 0;
  }
  function nr(o) {
    var u = this.__data__;
    return ue ? u[o] !== void 0 : Ct.call(u, o);
  }
  function fn(o, u) {
    var f = this.__data__;
    return f[o] = ue && u === void 0 ? n : u, this;
  }
  Ut.prototype.clear = Vr, Ut.prototype.delete = Wr, Ut.prototype.get = Zr, Ut.prototype.has = nr, Ut.prototype.set = fn;
  function Z(o) {
    var u = -1, f = o ? o.length : 0;
    for (this.clear(); ++u < f; ) {
      var v = o[u];
      this.set(v[0], v[1]);
    }
  }
  function Xr() {
    this.__data__ = [];
  }
  function Yr(o) {
    var u = this.__data__, f = Me(u, o);
    if (f < 0)
      return !1;
    var v = u.length - 1;
    return f == v ? u.pop() : Gr.call(u, f, 1), !0;
  }
  function Jr(o) {
    var u = this.__data__, f = Me(u, o);
    return f < 0 ? void 0 : u[f][1];
  }
  function Qr(o) {
    return Me(this.__data__, o) > -1;
  }
  function ts(o, u) {
    var f = this.__data__, v = Me(f, o);
    return v < 0 ? f.push([o, u]) : f[v][1] = u, this;
  }
  Z.prototype.clear = Xr, Z.prototype.delete = Yr, Z.prototype.get = Jr, Z.prototype.has = Qr, Z.prototype.set = ts;
  function J(o) {
    var u = -1, f = o ? o.length : 0;
    for (this.clear(); ++u < f; ) {
      var v = o[u];
      this.set(v[0], v[1]);
    }
  }
  function es() {
    this.__data__ = {
      hash: new Ut(),
      map: new (ce || Z)(),
      string: new Ut()
    };
  }
  function ns(o) {
    return de(this, o).delete(o);
  }
  function rs(o) {
    return de(this, o).get(o);
  }
  function ss(o) {
    return de(this, o).has(o);
  }
  function is(o, u) {
    return de(this, o).set(o, u), this;
  }
  J.prototype.clear = es, J.prototype.delete = ns, J.prototype.get = rs, J.prototype.has = ss, J.prototype.set = is;
  function it(o) {
    this.__data__ = new Z(o);
  }
  function ls() {
    this.__data__ = new Z();
  }
  function os(o) {
    return this.__data__.delete(o);
  }
  function as(o) {
    return this.__data__.get(o);
  }
  function cs(o) {
    return this.__data__.has(o);
  }
  function us(o, u) {
    var f = this.__data__;
    if (f instanceof Z) {
      var v = f.__data__;
      if (!ce || v.length < e - 1)
        return v.push([o, u]), this;
      f = this.__data__ = new J(v);
    }
    return f.set(o, u), this;
  }
  it.prototype.clear = ls, it.prototype.delete = os, it.prototype.get = as, it.prototype.has = cs, it.prototype.set = us;
  function ke(o, u) {
    var f = mn(o) || je(o) ? tn(o.length, String) : [], v = f.length, k = !!v;
    for (var I in o)
      (u || Ct.call(o, I)) && !(k && (I == "length" || Ts(I, v))) && f.push(I);
    return f;
  }
  function rr(o, u, f) {
    var v = o[u];
    (!(Ct.call(o, u) && ar(v, f)) || f === void 0 && !(u in o)) && (o[u] = f);
  }
  function Me(o, u) {
    for (var f = o.length; f--; )
      if (ar(o[f][0], u))
        return f;
    return -1;
  }
  function It(o, u) {
    return o && gn(u, yn(u), o);
  }
  function dn(o, u, f, v, k, I, D) {
    var $;
    if (v && ($ = I ? v(o, k, I, D) : v(o)), $ !== void 0)
      return $;
    if (!kt(o))
      return o;
    var G = mn(o);
    if (G) {
      if ($ = Ns(o), !u)
        return vs(o, $);
    } else {
      var P = Ht(o), Q = P == d || P == b;
      if (cr(o))
        return Be(o, u);
      if (P == m || P == i || Q && !I) {
        if (en(o))
          return I ? o : {};
        if ($ = Rt(Q ? {} : o), !u)
          return Es(o, It($, o));
      } else {
        if (!j[P])
          return I ? o : {};
        $ = ws(o, P, dn, u);
      }
    }
    D || (D = new it());
    var lt = D.get(o);
    if (lt)
      return lt;
    if (D.set(o, $), !G)
      var V = f ? As(o) : yn(o);
    return Kn(V || o, function(tt, X) {
      V && (X = tt, tt = o[X]), rr($, X, dn(tt, u, f, v, X, o, D));
    }), $;
  }
  function hs(o) {
    return kt(o) ? Jn(o) : {};
  }
  function fs(o, u, f) {
    var v = u(o);
    return mn(o) ? v : Gn(v, f(o));
  }
  function ds(o) {
    return _e.call(o);
  }
  function ps(o) {
    if (!kt(o) || Ss(o))
      return !1;
    var u = bn(o) || en(o) ? Kr : M;
    return u.test(rt(o));
  }
  function gs(o) {
    if (!lr(o))
      return tr(o);
    var u = [];
    for (var f in Object(o))
      Ct.call(o, f) && f != "constructor" && u.push(f);
    return u;
  }
  function Be(o, u) {
    if (u)
      return o.slice();
    var f = new o.constructor(o.length);
    return o.copy(f), f;
  }
  function pn(o) {
    var u = new o.constructor(o.byteLength);
    return new sn(u).set(new sn(o)), u;
  }
  function fe(o, u) {
    var f = u ? pn(o.buffer) : o.buffer;
    return new o.constructor(f, o.byteOffset, o.byteLength);
  }
  function sr(o, u, f) {
    var v = u ? f(Wn(o), !0) : Wn(o);
    return Qe(v, Fr, new o.constructor());
  }
  function ir(o) {
    var u = new o.constructor(o.source, x.exec(o));
    return u.lastIndex = o.lastIndex, u;
  }
  function ms(o, u, f) {
    var v = u ? f(Zn(o), !0) : Zn(o);
    return Qe(v, yt, new o.constructor());
  }
  function bs(o) {
    return er ? Object(er.call(o)) : {};
  }
  function ys(o, u) {
    var f = u ? pn(o.buffer) : o.buffer;
    return new o.constructor(f, o.byteOffset, o.length);
  }
  function vs(o, u) {
    var f = -1, v = o.length;
    for (u || (u = Array(v)); ++f < v; )
      u[f] = o[f];
    return u;
  }
  function gn(o, u, f, v) {
    f || (f = {});
    for (var k = -1, I = u.length; ++k < I; ) {
      var D = u[k], $ = v ? v(f[D], o[D], D, f, o) : void 0;
      rr(f, D, $ === void 0 ? o[D] : $);
    }
    return f;
  }
  function Es(o, u) {
    return gn(o, Ft(o), u);
  }
  function As(o) {
    return fs(o, yn, Ft);
  }
  function de(o, u) {
    var f = o.__data__;
    return xs(u) ? f[typeof u == "string" ? "string" : "hash"] : f.map;
  }
  function Et(o, u) {
    var f = Vn(o, u);
    return ps(f) ? f : void 0;
  }
  var Ft = ln ? nn(ln, Object) : Os, Ht = ds;
  (Ie && Ht(new Ie(new ArrayBuffer(1))) != R || ce && Ht(new ce()) != p || vt && Ht(vt.resolve()) != E || Re && Ht(new Re()) != N || on && Ht(new on()) != O) && (Ht = function(o) {
    var u = _e.call(o), f = u == m ? o.constructor : void 0, v = f ? rt(f) : void 0;
    if (v)
      switch (v) {
        case an:
          return R;
        case he:
          return p;
        case cn:
          return E;
        case un:
          return N;
        case hn:
          return O;
      }
    return u;
  });
  function Ns(o) {
    var u = o.length, f = o.constructor(u);
    return u && typeof o[0] == "string" && Ct.call(o, "index") && (f.index = o.index, f.input = o.input), f;
  }
  function Rt(o) {
    return typeof o.constructor == "function" && !lr(o) ? hs(ct(o)) : {};
  }
  function ws(o, u, f, v) {
    var k = o.constructor;
    switch (u) {
      case S:
        return pn(o);
      case a:
      case c:
        return new k(+o);
      case R:
        return fe(o, v);
      case B:
      case F:
      case gt:
      case mt:
      case _t:
      case qt:
      case oe:
      case Se:
      case Le:
        return ys(o, v);
      case p:
        return sr(o, v, f);
      case g:
      case T:
        return new k(o);
      case y:
        return ir(o);
      case N:
        return ms(o, v, f);
      case w:
        return bs(o);
    }
  }
  function Ts(o, u) {
    return u = u ?? s, !!u && (typeof o == "number" || K.test(o)) && o > -1 && o % 1 == 0 && o < u;
  }
  function xs(o) {
    var u = typeof o;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? o !== "__proto__" : o === null;
  }
  function Ss(o) {
    return !!Xn && Xn in o;
  }
  function lr(o) {
    var u = o && o.constructor, f = typeof u == "function" && u.prototype || Oe;
    return o === f;
  }
  function rt(o) {
    if (o != null) {
      try {
        return Yn.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function or(o) {
    return dn(o, !0, !0);
  }
  function ar(o, u) {
    return o === u || o !== o && u !== u;
  }
  function je(o) {
    return Ls(o) && Ct.call(o, "callee") && (!Qn.call(o, "callee") || _e.call(o) == i);
  }
  var mn = Array.isArray;
  function De(o) {
    return o != null && ur(o.length) && !bn(o);
  }
  function Ls(o) {
    return hr(o) && De(o);
  }
  var cr = Ce || _s;
  function bn(o) {
    var u = kt(o) ? _e.call(o) : "";
    return u == d || u == b;
  }
  function ur(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= s;
  }
  function kt(o) {
    var u = typeof o;
    return !!o && (u == "object" || u == "function");
  }
  function hr(o) {
    return !!o && typeof o == "object";
  }
  function yn(o) {
    return De(o) ? ke(o) : gs(o);
  }
  function Os() {
    return [];
  }
  function _s() {
    return !1;
  }
  r.exports = or;
})(Or, Or.exports);
var _o = Or.exports, _r = { exports: {} };
_r.exports;
(function(r, t) {
  var e = 200, n = "__lodash_hash_undefined__", s = 1, i = 2, l = 9007199254740991, a = "[object Arguments]", c = "[object Array]", h = "[object AsyncFunction]", d = "[object Boolean]", b = "[object Date]", p = "[object Error]", g = "[object Function]", m = "[object GeneratorFunction]", E = "[object Map]", y = "[object Number]", N = "[object Null]", T = "[object Object]", w = "[object Promise]", O = "[object Proxy]", S = "[object RegExp]", R = "[object Set]", B = "[object String]", F = "[object Symbol]", gt = "[object Undefined]", mt = "[object WeakMap]", _t = "[object ArrayBuffer]", qt = "[object DataView]", oe = "[object Float32Array]", Se = "[object Float64Array]", Le = "[object Int8Array]", Ye = "[object Int16Array]", x = "[object Int32Array]", M = "[object Uint8Array]", K = "[object Uint8ClampedArray]", j = "[object Uint16Array]", Je = "[object Uint32Array]", Ur = /[\\^$.*+?()[\]{}|]/g, bt = /^\[object .+?Constructor\]$/, Hn = /^(?:0|[1-9]\d*)$/, U = {};
  U[oe] = U[Se] = U[Le] = U[Ye] = U[x] = U[M] = U[K] = U[j] = U[Je] = !0, U[a] = U[c] = U[_t] = U[d] = U[qt] = U[b] = U[p] = U[g] = U[E] = U[y] = U[T] = U[S] = U[R] = U[B] = U[mt] = !1;
  var zn = typeof te == "object" && te && te.Object === Object && te, Fr = typeof self == "object" && self && self.Object === Object && self, yt = zn || Fr || Function("return this")(), Kn = t && !t.nodeType && t, Gn = Kn && !0 && r && !r.nodeType && r, Qe = Gn && Gn.exports === Kn, tn = Qe && zn.process, Vn = function() {
    try {
      return tn && tn.binding && tn.binding("util");
    } catch {
    }
  }(), en = Vn && Vn.isTypedArray;
  function Wn(o, u) {
    for (var f = -1, v = o == null ? 0 : o.length, k = 0, I = []; ++f < v; ) {
      var D = o[f];
      u(D, f, o) && (I[k++] = D);
    }
    return I;
  }
  function nn(o, u) {
    for (var f = -1, v = u.length, k = o.length; ++f < v; )
      o[k + f] = u[f];
    return o;
  }
  function Zn(o, u) {
    for (var f = -1, v = o == null ? 0 : o.length; ++f < v; )
      if (u(o[f], f, o))
        return !0;
    return !1;
  }
  function Hr(o, u) {
    for (var f = -1, v = Array(o); ++f < o; )
      v[f] = u(f);
    return v;
  }
  function zr(o) {
    return function(u) {
      return o(u);
    };
  }
  function Oe(o, u) {
    return o.has(u);
  }
  function rn(o, u) {
    return o == null ? void 0 : o[u];
  }
  function Xn(o) {
    var u = -1, f = Array(o.size);
    return o.forEach(function(v, k) {
      f[++u] = [k, v];
    }), f;
  }
  function Yn(o, u) {
    return function(f) {
      return o(u(f));
    };
  }
  function Ct(o) {
    var u = -1, f = Array(o.size);
    return o.forEach(function(v) {
      f[++u] = v;
    }), f;
  }
  var _e = Array.prototype, Kr = Function.prototype, ae = Object.prototype, qe = yt["__core-js_shared__"], sn = Kr.toString, ct = ae.hasOwnProperty, Jn = function() {
    var o = /[^.]+$/.exec(qe && qe.keys && qe.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), Qn = ae.toString, Gr = RegExp(
    "^" + sn.call(ct).replace(Ur, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ln = Qe ? yt.Buffer : void 0, Ce = yt.Symbol, tr = yt.Uint8Array, Ie = ae.propertyIsEnumerable, ce = _e.splice, vt = Ce ? Ce.toStringTag : void 0, Re = Object.getOwnPropertySymbols, on = ln ? ln.isBuffer : void 0, ue = Yn(Object.keys, Object), an = Ft(yt, "DataView"), he = Ft(yt, "Map"), cn = Ft(yt, "Promise"), un = Ft(yt, "Set"), hn = Ft(yt, "WeakMap"), Yt = Ft(Object, "create"), er = rt(an), Ut = rt(he), Vr = rt(cn), Wr = rt(un), Zr = rt(hn), nr = Ce ? Ce.prototype : void 0, fn = nr ? nr.valueOf : void 0;
  function Z(o) {
    var u = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++u < f; ) {
      var v = o[u];
      this.set(v[0], v[1]);
    }
  }
  function Xr() {
    this.__data__ = Yt ? Yt(null) : {}, this.size = 0;
  }
  function Yr(o) {
    var u = this.has(o) && delete this.__data__[o];
    return this.size -= u ? 1 : 0, u;
  }
  function Jr(o) {
    var u = this.__data__;
    if (Yt) {
      var f = u[o];
      return f === n ? void 0 : f;
    }
    return ct.call(u, o) ? u[o] : void 0;
  }
  function Qr(o) {
    var u = this.__data__;
    return Yt ? u[o] !== void 0 : ct.call(u, o);
  }
  function ts(o, u) {
    var f = this.__data__;
    return this.size += this.has(o) ? 0 : 1, f[o] = Yt && u === void 0 ? n : u, this;
  }
  Z.prototype.clear = Xr, Z.prototype.delete = Yr, Z.prototype.get = Jr, Z.prototype.has = Qr, Z.prototype.set = ts;
  function J(o) {
    var u = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++u < f; ) {
      var v = o[u];
      this.set(v[0], v[1]);
    }
  }
  function es() {
    this.__data__ = [], this.size = 0;
  }
  function ns(o) {
    var u = this.__data__, f = Be(u, o);
    if (f < 0)
      return !1;
    var v = u.length - 1;
    return f == v ? u.pop() : ce.call(u, f, 1), --this.size, !0;
  }
  function rs(o) {
    var u = this.__data__, f = Be(u, o);
    return f < 0 ? void 0 : u[f][1];
  }
  function ss(o) {
    return Be(this.__data__, o) > -1;
  }
  function is(o, u) {
    var f = this.__data__, v = Be(f, o);
    return v < 0 ? (++this.size, f.push([o, u])) : f[v][1] = u, this;
  }
  J.prototype.clear = es, J.prototype.delete = ns, J.prototype.get = rs, J.prototype.has = ss, J.prototype.set = is;
  function it(o) {
    var u = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++u < f; ) {
      var v = o[u];
      this.set(v[0], v[1]);
    }
  }
  function ls() {
    this.size = 0, this.__data__ = {
      hash: new Z(),
      map: new (he || J)(),
      string: new Z()
    };
  }
  function os(o) {
    var u = Et(this, o).delete(o);
    return this.size -= u ? 1 : 0, u;
  }
  function as(o) {
    return Et(this, o).get(o);
  }
  function cs(o) {
    return Et(this, o).has(o);
  }
  function us(o, u) {
    var f = Et(this, o), v = f.size;
    return f.set(o, u), this.size += f.size == v ? 0 : 1, this;
  }
  it.prototype.clear = ls, it.prototype.delete = os, it.prototype.get = as, it.prototype.has = cs, it.prototype.set = us;
  function ke(o) {
    var u = -1, f = o == null ? 0 : o.length;
    for (this.__data__ = new it(); ++u < f; )
      this.add(o[u]);
  }
  function rr(o) {
    return this.__data__.set(o, n), this;
  }
  function Me(o) {
    return this.__data__.has(o);
  }
  ke.prototype.add = ke.prototype.push = rr, ke.prototype.has = Me;
  function It(o) {
    var u = this.__data__ = new J(o);
    this.size = u.size;
  }
  function dn() {
    this.__data__ = new J(), this.size = 0;
  }
  function hs(o) {
    var u = this.__data__, f = u.delete(o);
    return this.size = u.size, f;
  }
  function fs(o) {
    return this.__data__.get(o);
  }
  function ds(o) {
    return this.__data__.has(o);
  }
  function ps(o, u) {
    var f = this.__data__;
    if (f instanceof J) {
      var v = f.__data__;
      if (!he || v.length < e - 1)
        return v.push([o, u]), this.size = ++f.size, this;
      f = this.__data__ = new it(v);
    }
    return f.set(o, u), this.size = f.size, this;
  }
  It.prototype.clear = dn, It.prototype.delete = hs, It.prototype.get = fs, It.prototype.has = ds, It.prototype.set = ps;
  function gs(o, u) {
    var f = je(o), v = !f && ar(o), k = !f && !v && De(o), I = !f && !v && !k && hr(o), D = f || v || k || I, $ = D ? Hr(o.length, String) : [], G = $.length;
    for (var P in o)
      (u || ct.call(o, P)) && !(D && // Safari 9 has enumerable `arguments.length` in strict mode.
      (P == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      k && (P == "offset" || P == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      I && (P == "buffer" || P == "byteLength" || P == "byteOffset") || // Skip index properties.
      ws(P, G))) && $.push(P);
    return $;
  }
  function Be(o, u) {
    for (var f = o.length; f--; )
      if (or(o[f][0], u))
        return f;
    return -1;
  }
  function pn(o, u, f) {
    var v = u(o);
    return je(o) ? v : nn(v, f(o));
  }
  function fe(o) {
    return o == null ? o === void 0 ? gt : N : vt && vt in Object(o) ? Ht(o) : lr(o);
  }
  function sr(o) {
    return kt(o) && fe(o) == a;
  }
  function ir(o, u, f, v, k) {
    return o === u ? !0 : o == null || u == null || !kt(o) && !kt(u) ? o !== o && u !== u : ms(o, u, f, v, ir, k);
  }
  function ms(o, u, f, v, k, I) {
    var D = je(o), $ = je(u), G = D ? c : Rt(o), P = $ ? c : Rt(u);
    G = G == a ? T : G, P = P == a ? T : P;
    var Q = G == T, lt = P == T, V = G == P;
    if (V && De(o)) {
      if (!De(u))
        return !1;
      D = !0, Q = !1;
    }
    if (V && !Q)
      return I || (I = new It()), D || hr(o) ? gn(o, u, f, v, k, I) : Es(o, u, G, f, v, k, I);
    if (!(f & s)) {
      var tt = Q && ct.call(o, "__wrapped__"), X = lt && ct.call(u, "__wrapped__");
      if (tt || X) {
        var Jt = tt ? o.value() : o, zt = X ? u.value() : u;
        return I || (I = new It()), k(Jt, zt, f, v, I);
      }
    }
    return V ? (I || (I = new It()), As(o, u, f, v, k, I)) : !1;
  }
  function bs(o) {
    if (!ur(o) || xs(o))
      return !1;
    var u = cr(o) ? Gr : bt;
    return u.test(rt(o));
  }
  function ys(o) {
    return kt(o) && bn(o.length) && !!U[fe(o)];
  }
  function vs(o) {
    if (!Ss(o))
      return ue(o);
    var u = [];
    for (var f in Object(o))
      ct.call(o, f) && f != "constructor" && u.push(f);
    return u;
  }
  function gn(o, u, f, v, k, I) {
    var D = f & s, $ = o.length, G = u.length;
    if ($ != G && !(D && G > $))
      return !1;
    var P = I.get(o);
    if (P && I.get(u))
      return P == u;
    var Q = -1, lt = !0, V = f & i ? new ke() : void 0;
    for (I.set(o, u), I.set(u, o); ++Q < $; ) {
      var tt = o[Q], X = u[Q];
      if (v)
        var Jt = D ? v(X, tt, Q, u, o, I) : v(tt, X, Q, o, u, I);
      if (Jt !== void 0) {
        if (Jt)
          continue;
        lt = !1;
        break;
      }
      if (V) {
        if (!Zn(u, function(zt, pe) {
          if (!Oe(V, pe) && (tt === zt || k(tt, zt, f, v, I)))
            return V.push(pe);
        })) {
          lt = !1;
          break;
        }
      } else if (!(tt === X || k(tt, X, f, v, I))) {
        lt = !1;
        break;
      }
    }
    return I.delete(o), I.delete(u), lt;
  }
  function Es(o, u, f, v, k, I, D) {
    switch (f) {
      case qt:
        if (o.byteLength != u.byteLength || o.byteOffset != u.byteOffset)
          return !1;
        o = o.buffer, u = u.buffer;
      case _t:
        return !(o.byteLength != u.byteLength || !I(new tr(o), new tr(u)));
      case d:
      case b:
      case y:
        return or(+o, +u);
      case p:
        return o.name == u.name && o.message == u.message;
      case S:
      case B:
        return o == u + "";
      case E:
        var $ = Xn;
      case R:
        var G = v & s;
        if ($ || ($ = Ct), o.size != u.size && !G)
          return !1;
        var P = D.get(o);
        if (P)
          return P == u;
        v |= i, D.set(o, u);
        var Q = gn($(o), $(u), v, k, I, D);
        return D.delete(o), Q;
      case F:
        if (fn)
          return fn.call(o) == fn.call(u);
    }
    return !1;
  }
  function As(o, u, f, v, k, I) {
    var D = f & s, $ = de(o), G = $.length, P = de(u), Q = P.length;
    if (G != Q && !D)
      return !1;
    for (var lt = G; lt--; ) {
      var V = $[lt];
      if (!(D ? V in u : ct.call(u, V)))
        return !1;
    }
    var tt = I.get(o);
    if (tt && I.get(u))
      return tt == u;
    var X = !0;
    I.set(o, u), I.set(u, o);
    for (var Jt = D; ++lt < G; ) {
      V = $[lt];
      var zt = o[V], pe = u[V];
      if (v)
        var Ui = D ? v(pe, zt, V, u, o, I) : v(zt, pe, V, o, u, I);
      if (!(Ui === void 0 ? zt === pe || k(zt, pe, f, v, I) : Ui)) {
        X = !1;
        break;
      }
      Jt || (Jt = V == "constructor");
    }
    if (X && !Jt) {
      var fr = o.constructor, dr = u.constructor;
      fr != dr && "constructor" in o && "constructor" in u && !(typeof fr == "function" && fr instanceof fr && typeof dr == "function" && dr instanceof dr) && (X = !1);
    }
    return I.delete(o), I.delete(u), X;
  }
  function de(o) {
    return pn(o, yn, Ns);
  }
  function Et(o, u) {
    var f = o.__data__;
    return Ts(u) ? f[typeof u == "string" ? "string" : "hash"] : f.map;
  }
  function Ft(o, u) {
    var f = rn(o, u);
    return bs(f) ? f : void 0;
  }
  function Ht(o) {
    var u = ct.call(o, vt), f = o[vt];
    try {
      o[vt] = void 0;
      var v = !0;
    } catch {
    }
    var k = Qn.call(o);
    return v && (u ? o[vt] = f : delete o[vt]), k;
  }
  var Ns = Re ? function(o) {
    return o == null ? [] : (o = Object(o), Wn(Re(o), function(u) {
      return Ie.call(o, u);
    }));
  } : Os, Rt = fe;
  (an && Rt(new an(new ArrayBuffer(1))) != qt || he && Rt(new he()) != E || cn && Rt(cn.resolve()) != w || un && Rt(new un()) != R || hn && Rt(new hn()) != mt) && (Rt = function(o) {
    var u = fe(o), f = u == T ? o.constructor : void 0, v = f ? rt(f) : "";
    if (v)
      switch (v) {
        case er:
          return qt;
        case Ut:
          return E;
        case Vr:
          return w;
        case Wr:
          return R;
        case Zr:
          return mt;
      }
    return u;
  });
  function ws(o, u) {
    return u = u ?? l, !!u && (typeof o == "number" || Hn.test(o)) && o > -1 && o % 1 == 0 && o < u;
  }
  function Ts(o) {
    var u = typeof o;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? o !== "__proto__" : o === null;
  }
  function xs(o) {
    return !!Jn && Jn in o;
  }
  function Ss(o) {
    var u = o && o.constructor, f = typeof u == "function" && u.prototype || ae;
    return o === f;
  }
  function lr(o) {
    return Qn.call(o);
  }
  function rt(o) {
    if (o != null) {
      try {
        return sn.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function or(o, u) {
    return o === u || o !== o && u !== u;
  }
  var ar = sr(/* @__PURE__ */ function() {
    return arguments;
  }()) ? sr : function(o) {
    return kt(o) && ct.call(o, "callee") && !Ie.call(o, "callee");
  }, je = Array.isArray;
  function mn(o) {
    return o != null && bn(o.length) && !cr(o);
  }
  var De = on || _s;
  function Ls(o, u) {
    return ir(o, u);
  }
  function cr(o) {
    if (!ur(o))
      return !1;
    var u = fe(o);
    return u == g || u == m || u == h || u == O;
  }
  function bn(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= l;
  }
  function ur(o) {
    var u = typeof o;
    return o != null && (u == "object" || u == "function");
  }
  function kt(o) {
    return o != null && typeof o == "object";
  }
  var hr = en ? zr(en) : ys;
  function yn(o) {
    return mn(o) ? gs(o) : vs(o);
  }
  function Os() {
    return [];
  }
  function _s() {
    return !1;
  }
  r.exports = Ls;
})(_r, _r.exports);
var qo = _r.exports, _i = {};
Object.defineProperty(_i, "__esModule", { value: !0 });
const ed = _o, nd = qo;
var ni;
(function(r) {
  function t(i = {}, l = {}, a = !1) {
    typeof i != "object" && (i = {}), typeof l != "object" && (l = {});
    let c = ed(l);
    a || (c = Object.keys(c).reduce((h, d) => (c[d] != null && (h[d] = c[d]), h), {}));
    for (const h in i)
      i[h] !== void 0 && l[h] === void 0 && (c[h] = i[h]);
    return Object.keys(c).length > 0 ? c : void 0;
  }
  r.compose = t;
  function e(i = {}, l = {}) {
    typeof i != "object" && (i = {}), typeof l != "object" && (l = {});
    const a = Object.keys(i).concat(Object.keys(l)).reduce((c, h) => (nd(i[h], l[h]) || (c[h] = l[h] === void 0 ? null : l[h]), c), {});
    return Object.keys(a).length > 0 ? a : void 0;
  }
  r.diff = e;
  function n(i = {}, l = {}) {
    i = i || {};
    const a = Object.keys(l).reduce((c, h) => (l[h] !== i[h] && i[h] !== void 0 && (c[h] = l[h]), c), {});
    return Object.keys(i).reduce((c, h) => (i[h] !== l[h] && l[h] === void 0 && (c[h] = null), c), a);
  }
  r.invert = n;
  function s(i, l, a = !1) {
    if (typeof i != "object")
      return l;
    if (typeof l != "object")
      return;
    if (!a)
      return l;
    const c = Object.keys(l).reduce((h, d) => (i[d] === void 0 && (h[d] = l[d]), h), {});
    return Object.keys(c).length > 0 ? c : void 0;
  }
  r.transform = s;
})(ni || (ni = {}));
_i.default = ni;
var jr = {};
Object.defineProperty(jr, "__esModule", { value: !0 });
var ri;
(function(r) {
  function t(e) {
    return typeof e.delete == "number" ? e.delete : typeof e.retain == "number" ? e.retain : typeof e.retain == "object" && e.retain !== null ? 1 : typeof e.insert == "string" ? e.insert.length : 1;
  }
  r.length = t;
})(ri || (ri = {}));
jr.default = ri;
var qi = {};
Object.defineProperty(qi, "__esModule", { value: !0 });
const Nl = jr;
class rd {
  constructor(t) {
    this.ops = t, this.index = 0, this.offset = 0;
  }
  hasNext() {
    return this.peekLength() < 1 / 0;
  }
  next(t) {
    t || (t = 1 / 0);
    const e = this.ops[this.index];
    if (e) {
      const n = this.offset, s = Nl.default.length(e);
      if (t >= s - n ? (t = s - n, this.index += 1, this.offset = 0) : this.offset += t, typeof e.delete == "number")
        return { delete: t };
      {
        const i = {};
        return e.attributes && (i.attributes = e.attributes), typeof e.retain == "number" ? i.retain = t : typeof e.retain == "object" && e.retain !== null ? i.retain = e.retain : typeof e.insert == "string" ? i.insert = e.insert.substr(n, t) : i.insert = e.insert, i;
      }
    } else
      return { retain: 1 / 0 };
  }
  peek() {
    return this.ops[this.index];
  }
  peekLength() {
    return this.ops[this.index] ? Nl.default.length(this.ops[this.index]) - this.offset : 1 / 0;
  }
  peekType() {
    const t = this.ops[this.index];
    return t ? typeof t.delete == "number" ? "delete" : typeof t.retain == "number" || typeof t.retain == "object" && t.retain !== null ? "retain" : "insert" : "retain";
  }
  rest() {
    if (this.hasNext()) {
      if (this.offset === 0)
        return this.ops.slice(this.index);
      {
        const t = this.offset, e = this.index, n = this.next(), s = this.ops.slice(this.index);
        return this.offset = t, this.index = e, [n].concat(s);
      }
    } else
      return [];
  }
}
qi.default = rd;
(function(r, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.AttributeMap = t.OpIterator = t.Op = void 0;
  const e = td, n = _o, s = qo, i = _i;
  t.AttributeMap = i.default;
  const l = jr;
  t.Op = l.default;
  const a = qi;
  t.OpIterator = a.default;
  const c = "\0", h = (b, p) => {
    if (typeof b != "object" || b === null)
      throw new Error(`cannot retain a ${typeof b}`);
    if (typeof p != "object" || p === null)
      throw new Error(`cannot retain a ${typeof p}`);
    const g = Object.keys(b)[0];
    if (!g || g !== Object.keys(p)[0])
      throw new Error(`embed types not matched: ${g} != ${Object.keys(p)[0]}`);
    return [g, b[g], p[g]];
  };
  class d {
    constructor(p) {
      Array.isArray(p) ? this.ops = p : p != null && Array.isArray(p.ops) ? this.ops = p.ops : this.ops = [];
    }
    static registerEmbed(p, g) {
      this.handlers[p] = g;
    }
    static unregisterEmbed(p) {
      delete this.handlers[p];
    }
    static getHandler(p) {
      const g = this.handlers[p];
      if (!g)
        throw new Error(`no handlers for embed type "${p}"`);
      return g;
    }
    insert(p, g) {
      const m = {};
      return typeof p == "string" && p.length === 0 ? this : (m.insert = p, g != null && typeof g == "object" && Object.keys(g).length > 0 && (m.attributes = g), this.push(m));
    }
    delete(p) {
      return p <= 0 ? this : this.push({ delete: p });
    }
    retain(p, g) {
      if (typeof p == "number" && p <= 0)
        return this;
      const m = { retain: p };
      return g != null && typeof g == "object" && Object.keys(g).length > 0 && (m.attributes = g), this.push(m);
    }
    push(p) {
      let g = this.ops.length, m = this.ops[g - 1];
      if (p = n(p), typeof m == "object") {
        if (typeof p.delete == "number" && typeof m.delete == "number")
          return this.ops[g - 1] = { delete: m.delete + p.delete }, this;
        if (typeof m.delete == "number" && p.insert != null && (g -= 1, m = this.ops[g - 1], typeof m != "object"))
          return this.ops.unshift(p), this;
        if (s(p.attributes, m.attributes)) {
          if (typeof p.insert == "string" && typeof m.insert == "string")
            return this.ops[g - 1] = { insert: m.insert + p.insert }, typeof p.attributes == "object" && (this.ops[g - 1].attributes = p.attributes), this;
          if (typeof p.retain == "number" && typeof m.retain == "number")
            return this.ops[g - 1] = { retain: m.retain + p.retain }, typeof p.attributes == "object" && (this.ops[g - 1].attributes = p.attributes), this;
        }
      }
      return g === this.ops.length ? this.ops.push(p) : this.ops.splice(g, 0, p), this;
    }
    chop() {
      const p = this.ops[this.ops.length - 1];
      return p && typeof p.retain == "number" && !p.attributes && this.ops.pop(), this;
    }
    filter(p) {
      return this.ops.filter(p);
    }
    forEach(p) {
      this.ops.forEach(p);
    }
    map(p) {
      return this.ops.map(p);
    }
    partition(p) {
      const g = [], m = [];
      return this.forEach((E) => {
        (p(E) ? g : m).push(E);
      }), [g, m];
    }
    reduce(p, g) {
      return this.ops.reduce(p, g);
    }
    changeLength() {
      return this.reduce((p, g) => g.insert ? p + l.default.length(g) : g.delete ? p - g.delete : p, 0);
    }
    length() {
      return this.reduce((p, g) => p + l.default.length(g), 0);
    }
    slice(p = 0, g = 1 / 0) {
      const m = [], E = new a.default(this.ops);
      let y = 0;
      for (; y < g && E.hasNext(); ) {
        let N;
        y < p ? N = E.next(p - y) : (N = E.next(g - y), m.push(N)), y += l.default.length(N);
      }
      return new d(m);
    }
    compose(p) {
      const g = new a.default(this.ops), m = new a.default(p.ops), E = [], y = m.peek();
      if (y != null && typeof y.retain == "number" && y.attributes == null) {
        let T = y.retain;
        for (; g.peekType() === "insert" && g.peekLength() <= T; )
          T -= g.peekLength(), E.push(g.next());
        y.retain - T > 0 && m.next(y.retain - T);
      }
      const N = new d(E);
      for (; g.hasNext() || m.hasNext(); )
        if (m.peekType() === "insert")
          N.push(m.next());
        else if (g.peekType() === "delete")
          N.push(g.next());
        else {
          const T = Math.min(g.peekLength(), m.peekLength()), w = g.next(T), O = m.next(T);
          if (O.retain) {
            const S = {};
            if (typeof w.retain == "number")
              S.retain = typeof O.retain == "number" ? T : O.retain;
            else if (typeof O.retain == "number")
              w.retain == null ? S.insert = w.insert : S.retain = w.retain;
            else {
              const B = w.retain == null ? "insert" : "retain", [F, gt, mt] = h(w[B], O.retain), _t = d.getHandler(F);
              S[B] = {
                [F]: _t.compose(gt, mt, B === "retain")
              };
            }
            const R = i.default.compose(w.attributes, O.attributes, typeof w.retain == "number");
            if (R && (S.attributes = R), N.push(S), !m.hasNext() && s(N.ops[N.ops.length - 1], S)) {
              const B = new d(g.rest());
              return N.concat(B).chop();
            }
          } else
            typeof O.delete == "number" && (typeof w.retain == "number" || typeof w.retain == "object" && w.retain !== null) && N.push(O);
        }
      return N.chop();
    }
    concat(p) {
      const g = new d(this.ops.slice());
      return p.ops.length > 0 && (g.push(p.ops[0]), g.ops = g.ops.concat(p.ops.slice(1))), g;
    }
    diff(p, g) {
      if (this.ops === p.ops)
        return new d();
      const m = [this, p].map((w) => w.map((O) => {
        if (O.insert != null)
          return typeof O.insert == "string" ? O.insert : c;
        const S = w === p ? "on" : "with";
        throw new Error("diff() called " + S + " non-document");
      }).join("")), E = new d(), y = e(m[0], m[1], g, !0), N = new a.default(this.ops), T = new a.default(p.ops);
      return y.forEach((w) => {
        let O = w[1].length;
        for (; O > 0; ) {
          let S = 0;
          switch (w[0]) {
            case e.INSERT:
              S = Math.min(T.peekLength(), O), E.push(T.next(S));
              break;
            case e.DELETE:
              S = Math.min(O, N.peekLength()), N.next(S), E.delete(S);
              break;
            case e.EQUAL:
              S = Math.min(N.peekLength(), T.peekLength(), O);
              const R = N.next(S), B = T.next(S);
              s(R.insert, B.insert) ? E.retain(S, i.default.diff(R.attributes, B.attributes)) : E.push(B).delete(S);
              break;
          }
          O -= S;
        }
      }), E.chop();
    }
    eachLine(p, g = `
`) {
      const m = new a.default(this.ops);
      let E = new d(), y = 0;
      for (; m.hasNext(); ) {
        if (m.peekType() !== "insert")
          return;
        const N = m.peek(), T = l.default.length(N) - m.peekLength(), w = typeof N.insert == "string" ? N.insert.indexOf(g, T) - T : -1;
        if (w < 0)
          E.push(m.next());
        else if (w > 0)
          E.push(m.next(w));
        else {
          if (p(E, m.next(1).attributes || {}, y) === !1)
            return;
          y += 1, E = new d();
        }
      }
      E.length() > 0 && p(E, {}, y);
    }
    invert(p) {
      const g = new d();
      return this.reduce((m, E) => {
        if (E.insert)
          g.delete(l.default.length(E));
        else {
          if (typeof E.retain == "number" && E.attributes == null)
            return g.retain(E.retain), m + E.retain;
          if (E.delete || typeof E.retain == "number") {
            const y = E.delete || E.retain;
            return p.slice(m, m + y).forEach((T) => {
              E.delete ? g.push(T) : E.retain && E.attributes && g.retain(l.default.length(T), i.default.invert(E.attributes, T.attributes));
            }), m + y;
          } else if (typeof E.retain == "object" && E.retain !== null) {
            const y = p.slice(m, m + 1), N = new a.default(y.ops).next(), [T, w, O] = h(E.retain, N.insert), S = d.getHandler(T);
            return g.retain({ [T]: S.invert(w, O) }, i.default.invert(E.attributes, N.attributes)), m + 1;
          }
        }
        return m;
      }, 0), g.chop();
    }
    transform(p, g = !1) {
      if (g = !!g, typeof p == "number")
        return this.transformPosition(p, g);
      const m = p, E = new a.default(this.ops), y = new a.default(m.ops), N = new d();
      for (; E.hasNext() || y.hasNext(); )
        if (E.peekType() === "insert" && (g || y.peekType() !== "insert"))
          N.retain(l.default.length(E.next()));
        else if (y.peekType() === "insert")
          N.push(y.next());
        else {
          const T = Math.min(E.peekLength(), y.peekLength()), w = E.next(T), O = y.next(T);
          if (w.delete)
            continue;
          if (O.delete)
            N.push(O);
          else {
            const S = w.retain, R = O.retain;
            let B = typeof R == "object" && R !== null ? R : T;
            if (typeof S == "object" && S !== null && typeof R == "object" && R !== null) {
              const F = Object.keys(S)[0];
              if (F === Object.keys(R)[0]) {
                const gt = d.getHandler(F);
                gt && (B = {
                  [F]: gt.transform(S[F], R[F], g)
                });
              }
            }
            N.retain(B, i.default.transform(w.attributes, O.attributes, g));
          }
        }
      return N.chop();
    }
    transformPosition(p, g = !1) {
      g = !!g;
      const m = new a.default(this.ops);
      let E = 0;
      for (; m.hasNext() && E <= p; ) {
        const y = m.peekLength(), N = m.peekType();
        if (m.next(), N === "delete") {
          p -= Math.min(y, p - E);
          continue;
        } else
          N === "insert" && (E < p || !g) && (p += y);
        E += y;
      }
      return p;
    }
  }
  d.Op = l.default, d.OpIterator = a.default, d.AttributeMap = i.default, d.handlers = {}, t.default = d, r.exports = d, r.exports.default = d;
})(ei, ei.exports);
var pt = ei.exports;
const q = /* @__PURE__ */ To(pt);
class Lt extends at {
  static value() {
  }
  optimize() {
    (this.prev || this.next) && this.remove();
  }
  length() {
    return 0;
  }
  value() {
    return "";
  }
}
Lt.blotName = "break";
Lt.tagName = "BR";
let xt = class extends Lr {
};
function Dr(r) {
  return r.replace(/[&<>"']/g, (t) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[t]);
}
const Mt = class Mt extends xi {
  static compare(t, e) {
    const n = Mt.order.indexOf(t), s = Mt.order.indexOf(e);
    return n >= 0 || s >= 0 ? n - s : t === e ? 0 : t < e ? -1 : 1;
  }
  formatAt(t, e, n, s) {
    if (Mt.compare(this.statics.blotName, n) < 0 && this.scroll.query(n, C.BLOT)) {
      const i = this.isolate(t, e);
      s && i.wrap(n, s);
    } else
      super.formatAt(t, e, n, s);
  }
  optimize(t) {
    if (super.optimize(t), this.parent instanceof Mt && Mt.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
      const e = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(e), e.wrap(this);
    }
  }
};
L(Mt, "allowedChildren", [Mt, Lt, at, xt]), // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
L(Mt, "order", [
  "cursor",
  "inline",
  // Must be lower
  "link",
  // Chrome wants <a> to be lower
  "underline",
  "strike",
  "italic",
  "bold",
  "script",
  "code"
  // Must be higher
]);
let $t = Mt;
const wl = 1;
class Y extends Cn {
  constructor() {
    super(...arguments);
    L(this, "cache", {});
  }
  delta() {
    return this.cache.delta == null && (this.cache.delta = Co(this)), this.cache.delta;
  }
  deleteAt(e, n) {
    super.deleteAt(e, n), this.cache = {};
  }
  formatAt(e, n, s, i) {
    n <= 0 || (this.scroll.query(s, C.BLOCK) ? e + n === this.length() && this.format(s, i) : super.formatAt(e, Math.min(n, this.length() - e - 1), s, i), this.cache = {});
  }
  insertAt(e, n, s) {
    if (s != null) {
      super.insertAt(e, n, s), this.cache = {};
      return;
    }
    if (n.length === 0)
      return;
    const i = n.split(`
`), l = i.shift();
    l.length > 0 && (e < this.length() - 1 || this.children.tail == null ? super.insertAt(Math.min(e, this.length() - 1), l) : this.children.tail.insertAt(this.children.tail.length(), l), this.cache = {});
    let a = this;
    i.reduce((c, h) => (a = a.split(c, !0), a.insertAt(0, h), h.length), e + l.length);
  }
  insertBefore(e, n) {
    const {
      head: s
    } = this.children;
    super.insertBefore(e, n), s instanceof Lt && s.remove(), this.cache = {};
  }
  length() {
    return this.cache.length == null && (this.cache.length = super.length() + wl), this.cache.length;
  }
  moveChildren(e, n) {
    super.moveChildren(e, n), this.cache = {};
  }
  optimize(e) {
    super.optimize(e), this.cache = {};
  }
  path(e) {
    return super.path(e, !0);
  }
  removeChild(e) {
    super.removeChild(e), this.cache = {};
  }
  split(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (n && (e === 0 || e >= this.length() - wl)) {
      const i = this.clone();
      return e === 0 ? (this.parent.insertBefore(i, this), this) : (this.parent.insertBefore(i, this.next), i);
    }
    const s = super.split(e, n);
    return this.cache = {}, s;
  }
}
Y.blotName = "block";
Y.tagName = "P";
Y.defaultChild = Lt;
Y.allowedChildren = [Lt, $t, at, xt];
class dt extends at {
  attach() {
    super.attach(), this.attributes = new Rr(this.domNode);
  }
  delta() {
    return new q().insert(this.value(), {
      ...this.formats(),
      ...this.attributes.values()
    });
  }
  format(t, e) {
    const n = this.scroll.query(t, C.BLOCK_ATTRIBUTE);
    n != null && this.attributes.attribute(n, e);
  }
  formatAt(t, e, n, s) {
    this.format(n, s);
  }
  insertAt(t, e, n) {
    if (n != null) {
      super.insertAt(t, e, n);
      return;
    }
    const s = e.split(`
`), i = s.pop(), l = s.map((c) => {
      const h = this.scroll.create(Y.blotName);
      return h.insertAt(0, c), h;
    }), a = this.split(t);
    l.forEach((c) => {
      this.parent.insertBefore(c, a);
    }), i && this.parent.insertBefore(this.scroll.create("text", i), a);
  }
}
dt.scope = C.BLOCK_BLOT;
function Co(r) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return r.descendants(et).reduce((e, n) => n.length() === 0 ? e : e.insert(n.value(), ht(n, {}, t)), new q()).insert(`
`, ht(r));
}
function ht(r) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return r == null || ("formats" in r && typeof r.formats == "function" && (t = {
    ...t,
    ...r.formats()
  }, e && delete t["code-token"]), r.parent == null || r.parent.statics.blotName === "scroll" || r.parent.statics.scope !== r.statics.scope) ? t : ht(r.parent, t, e);
}
const ut = class ut extends at {
  // Zero width no break space
  static value() {
  }
  constructor(t, e, n) {
    super(t, e), this.selection = n, this.textNode = document.createTextNode(ut.CONTENTS), this.domNode.appendChild(this.textNode), this.savedLength = 0;
  }
  detach() {
    this.parent != null && this.parent.removeChild(this);
  }
  format(t, e) {
    if (this.savedLength !== 0) {
      super.format(t, e);
      return;
    }
    let n = this, s = 0;
    for (; n != null && n.statics.scope !== C.BLOCK_BLOT; )
      s += n.offset(n.parent), n = n.parent;
    n != null && (this.savedLength = ut.CONTENTS.length, n.optimize(), n.formatAt(s, ut.CONTENTS.length, t, e), this.savedLength = 0);
  }
  index(t, e) {
    return t === this.textNode ? 0 : super.index(t, e);
  }
  length() {
    return this.savedLength;
  }
  position() {
    return [this.textNode, this.textNode.data.length];
  }
  remove() {
    super.remove(), this.parent = null;
  }
  restore() {
    if (this.selection.composing || this.parent == null)
      return null;
    const t = this.selection.getNativeRange();
    for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
    const e = this.prev instanceof xt ? this.prev : null, n = e ? e.length() : 0, s = this.next instanceof xt ? this.next : null, i = s ? s.text : "", {
      textNode: l
    } = this, a = l.data.split(ut.CONTENTS).join("");
    l.data = ut.CONTENTS;
    let c;
    if (e)
      c = e, (a || s) && (e.insertAt(e.length(), a + i), s && s.remove());
    else if (s)
      c = s, s.insertAt(0, a);
    else {
      const h = document.createTextNode(a);
      c = this.scroll.create(h), this.parent.insertBefore(c, this);
    }
    if (this.remove(), t) {
      const h = (p, g) => e && p === e.domNode ? g : p === l ? n + g - 1 : s && p === s.domNode ? n + a.length + g : null, d = h(t.start.node, t.start.offset), b = h(t.end.node, t.end.offset);
      if (d !== null && b !== null)
        return {
          startNode: c.domNode,
          startOffset: d,
          endNode: c.domNode,
          endOffset: b
        };
    }
    return null;
  }
  update(t, e) {
    if (t.some((n) => n.type === "characterData" && n.target === this.textNode)) {
      const n = this.restore();
      n && (e.range = n);
    }
  }
  // Avoid .ql-cursor being a descendant of `<a/>`.
  // The reason is Safari pushes down `<a/>` on text insertion.
  // That will cause DOM nodes not sync with the model.
  //
  // For example ({I} is the caret), given the markup:
  //    <a><span class="ql-cursor">\uFEFF{I}</span></a>
  // When typing a char "x", `<a/>` will be pushed down inside the `<span>` first:
  //    <span class="ql-cursor"><a>\uFEFF{I}</a></span>
  // And then "x" will be inserted after `<a/>`:
  //    <span class="ql-cursor"><a>\uFEFF</a>d{I}</span>
  optimize(t) {
    super.optimize(t);
    let {
      parent: e
    } = this;
    for (; e; ) {
      if (e.domNode.tagName === "A") {
        this.savedLength = ut.CONTENTS.length, e.isolate(this.offset(e), this.length()).unwrap(), this.savedLength = 0;
        break;
      }
      e = e.parent;
    }
  }
  value() {
    return "";
  }
};
L(ut, "blotName", "cursor"), L(ut, "className", "ql-cursor"), L(ut, "tagName", "span"), L(ut, "CONTENTS", "\uFEFF");
let Ve = ut;
var Io = { exports: {} };
(function(r) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (e = !1));
  function s(c, h, d) {
    this.fn = c, this.context = h, this.once = d || !1;
  }
  function i(c, h, d, b, p) {
    if (typeof d != "function")
      throw new TypeError("The listener must be a function");
    var g = new s(d, b || c, p), m = e ? e + h : h;
    return c._events[m] ? c._events[m].fn ? c._events[m] = [c._events[m], g] : c._events[m].push(g) : (c._events[m] = g, c._eventsCount++), c;
  }
  function l(c, h) {
    --c._eventsCount === 0 ? c._events = new n() : delete c._events[h];
  }
  function a() {
    this._events = new n(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var h = [], d, b;
    if (this._eventsCount === 0)
      return h;
    for (b in d = this._events)
      t.call(d, b) && h.push(e ? b.slice(1) : b);
    return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(d)) : h;
  }, a.prototype.listeners = function(h) {
    var d = e ? e + h : h, b = this._events[d];
    if (!b)
      return [];
    if (b.fn)
      return [b.fn];
    for (var p = 0, g = b.length, m = new Array(g); p < g; p++)
      m[p] = b[p].fn;
    return m;
  }, a.prototype.listenerCount = function(h) {
    var d = e ? e + h : h, b = this._events[d];
    return b ? b.fn ? 1 : b.length : 0;
  }, a.prototype.emit = function(h, d, b, p, g, m) {
    var E = e ? e + h : h;
    if (!this._events[E])
      return !1;
    var y = this._events[E], N = arguments.length, T, w;
    if (y.fn) {
      switch (y.once && this.removeListener(h, y.fn, void 0, !0), N) {
        case 1:
          return y.fn.call(y.context), !0;
        case 2:
          return y.fn.call(y.context, d), !0;
        case 3:
          return y.fn.call(y.context, d, b), !0;
        case 4:
          return y.fn.call(y.context, d, b, p), !0;
        case 5:
          return y.fn.call(y.context, d, b, p, g), !0;
        case 6:
          return y.fn.call(y.context, d, b, p, g, m), !0;
      }
      for (w = 1, T = new Array(N - 1); w < N; w++)
        T[w - 1] = arguments[w];
      y.fn.apply(y.context, T);
    } else {
      var O = y.length, S;
      for (w = 0; w < O; w++)
        switch (y[w].once && this.removeListener(h, y[w].fn, void 0, !0), N) {
          case 1:
            y[w].fn.call(y[w].context);
            break;
          case 2:
            y[w].fn.call(y[w].context, d);
            break;
          case 3:
            y[w].fn.call(y[w].context, d, b);
            break;
          case 4:
            y[w].fn.call(y[w].context, d, b, p);
            break;
          default:
            if (!T)
              for (S = 1, T = new Array(N - 1); S < N; S++)
                T[S - 1] = arguments[S];
            y[w].fn.apply(y[w].context, T);
        }
    }
    return !0;
  }, a.prototype.on = function(h, d, b) {
    return i(this, h, d, b, !1);
  }, a.prototype.once = function(h, d, b) {
    return i(this, h, d, b, !0);
  }, a.prototype.removeListener = function(h, d, b, p) {
    var g = e ? e + h : h;
    if (!this._events[g])
      return this;
    if (!d)
      return l(this, g), this;
    var m = this._events[g];
    if (m.fn)
      m.fn === d && (!p || m.once) && (!b || m.context === b) && l(this, g);
    else {
      for (var E = 0, y = [], N = m.length; E < N; E++)
        (m[E].fn !== d || p && !m[E].once || b && m[E].context !== b) && y.push(m[E]);
      y.length ? this._events[g] = y.length === 1 ? y[0] : y : l(this, g);
    }
    return this;
  }, a.prototype.removeAllListeners = function(h) {
    var d;
    return h ? (d = e ? e + h : h, this._events[d] && l(this, d)) : (this._events = new n(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = e, a.EventEmitter = a, r.exports = a;
})(Io);
var sd = Io.exports;
const id = /* @__PURE__ */ To(sd), si = /* @__PURE__ */ new WeakMap(), ii = ["error", "warn", "log", "info"];
let li = "warn";
function Ro(r) {
  if (li && ii.indexOf(r) <= ii.indexOf(li)) {
    for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      e[n - 1] = arguments[n];
    console[r](...e);
  }
}
function Xt(r) {
  return ii.reduce((t, e) => (t[e] = Ro.bind(console, e, r), t), {});
}
Xt.level = (r) => {
  li = r;
};
Ro.level = Xt.level;
const Bs = Xt("quill:events"), ld = ["selectionchange", "mousedown", "mouseup", "click"];
ld.forEach((r) => {
  document.addEventListener(r, function() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    Array.from(document.querySelectorAll(".ql-container")).forEach((s) => {
      const i = si.get(s);
      i && i.emitter && i.emitter.handleDOM(...e);
    });
  });
});
class _ extends id {
  constructor() {
    super(), this.domListeners = {}, this.on("error", Bs.error);
  }
  emit() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    return Bs.log.call(Bs, ...e), super.emit(...e);
  }
  handleDOM(t) {
    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
      n[s - 1] = arguments[s];
    (this.domListeners[t.type] || []).forEach((i) => {
      let {
        node: l,
        handler: a
      } = i;
      (t.target === l || l.contains(t.target)) && a(t, ...n);
    });
  }
  listenDOM(t, e, n) {
    this.domListeners[t] || (this.domListeners[t] = []), this.domListeners[t].push({
      node: e,
      handler: n
    });
  }
}
L(_, "events", {
  EDITOR_CHANGE: "editor-change",
  SCROLL_BEFORE_UPDATE: "scroll-before-update",
  SCROLL_BLOT_MOUNT: "scroll-blot-mount",
  SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
  SCROLL_OPTIMIZE: "scroll-optimize",
  SCROLL_UPDATE: "scroll-update",
  SCROLL_EMBED_UPDATE: "scroll-embed-update",
  SELECTION_CHANGE: "selection-change",
  TEXT_CHANGE: "text-change",
  COMPOSITION_BEFORE_START: "composition-before-start",
  COMPOSITION_START: "composition-start",
  COMPOSITION_BEFORE_END: "composition-before-end",
  COMPOSITION_END: "composition-end"
}), L(_, "sources", {
  API: "api",
  SILENT: "silent",
  USER: "user"
});
const js = Xt("quill:selection");
class ve {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    this.index = t, this.length = e;
  }
}
class od {
  constructor(t, e) {
    this.emitter = e, this.scroll = t, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new ve(0, 0), this.lastRange = this.savedRange, this.lastNative = null, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, () => {
      !this.mouseDown && !this.composing && setTimeout(this.update.bind(this, _.sources.USER), 1);
    }), this.emitter.on(_.events.SCROLL_BEFORE_UPDATE, () => {
      if (!this.hasFocus())
        return;
      const n = this.getNativeRange();
      n != null && n.start.node !== this.cursor.textNode && this.emitter.once(_.events.SCROLL_UPDATE, (s, i) => {
        try {
          this.root.contains(n.start.node) && this.root.contains(n.end.node) && this.setNativeRange(n.start.node, n.start.offset, n.end.node, n.end.offset);
          const l = i.some((a) => a.type === "characterData" || a.type === "childList" || a.type === "attributes" && a.target === this.root);
          this.update(l ? _.sources.SILENT : s);
        } catch {
        }
      });
    }), this.emitter.on(_.events.SCROLL_OPTIMIZE, (n, s) => {
      if (s.range) {
        const {
          startNode: i,
          startOffset: l,
          endNode: a,
          endOffset: c
        } = s.range;
        this.setNativeRange(i, l, a, c), this.update(_.sources.SILENT);
      }
    }), this.update(_.sources.SILENT);
  }
  handleComposition() {
    this.emitter.on(_.events.COMPOSITION_BEFORE_START, () => {
      this.composing = !0;
    }), this.emitter.on(_.events.COMPOSITION_END, () => {
      if (this.composing = !1, this.cursor.parent) {
        const t = this.cursor.restore();
        if (!t)
          return;
        setTimeout(() => {
          this.setNativeRange(t.startNode, t.startOffset, t.endNode, t.endOffset);
        }, 1);
      }
    });
  }
  handleDragging() {
    this.emitter.listenDOM("mousedown", document.body, () => {
      this.mouseDown = !0;
    }), this.emitter.listenDOM("mouseup", document.body, () => {
      this.mouseDown = !1, this.update(_.sources.USER);
    });
  }
  focus() {
    this.hasFocus() || (this.root.focus({
      preventScroll: !0
    }), this.setRange(this.savedRange));
  }
  format(t, e) {
    this.scroll.update();
    const n = this.getNativeRange();
    if (!(n == null || !n.native.collapsed || this.scroll.query(t, C.BLOCK))) {
      if (n.start.node !== this.cursor.textNode) {
        const s = this.scroll.find(n.start.node, !1);
        if (s == null)
          return;
        if (s instanceof et) {
          const i = s.split(n.start.offset);
          s.parent.insertBefore(this.cursor, i);
        } else
          s.insertBefore(this.cursor, n.start.node);
        this.cursor.attach();
      }
      this.cursor.format(t, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
    }
  }
  getBounds(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const n = this.scroll.length();
    t = Math.min(t, n - 1), e = Math.min(t + e, n - 1) - t;
    let s, [i, l] = this.scroll.leaf(t);
    if (i == null)
      return null;
    if (e > 0 && l === i.length()) {
      const [d] = this.scroll.leaf(t + 1);
      if (d) {
        const [b] = this.scroll.line(t), [p] = this.scroll.line(t + 1);
        b === p && (i = d, l = 0);
      }
    }
    [s, l] = i.position(l, !0);
    const a = document.createRange();
    if (e > 0)
      return a.setStart(s, l), [i, l] = this.scroll.leaf(t + e), i == null ? null : ([s, l] = i.position(l, !0), a.setEnd(s, l), a.getBoundingClientRect());
    let c = "left", h;
    if (s instanceof Text) {
      if (!s.data.length)
        return null;
      l < s.data.length ? (a.setStart(s, l), a.setEnd(s, l + 1)) : (a.setStart(s, l - 1), a.setEnd(s, l), c = "right"), h = a.getBoundingClientRect();
    } else {
      if (!(i.domNode instanceof Element))
        return null;
      h = i.domNode.getBoundingClientRect(), l > 0 && (c = "right");
    }
    return {
      bottom: h.top + h.height,
      height: h.height,
      left: h[c],
      right: h[c],
      top: h.top,
      width: 0
    };
  }
  getNativeRange() {
    const t = document.getSelection();
    if (t == null || t.rangeCount <= 0)
      return null;
    const e = t.getRangeAt(0);
    if (e == null)
      return null;
    const n = this.normalizeNative(e);
    return js.info("getNativeRange", n), n;
  }
  getRange() {
    const t = this.scroll.domNode;
    if ("isConnected" in t && !t.isConnected)
      return [null, null];
    const e = this.getNativeRange();
    return e == null ? [null, null] : [this.normalizedToRange(e), e];
  }
  hasFocus() {
    return document.activeElement === this.root || document.activeElement != null && Ds(this.root, document.activeElement);
  }
  normalizedToRange(t) {
    const e = [[t.start.node, t.start.offset]];
    t.native.collapsed || e.push([t.end.node, t.end.offset]);
    const n = e.map((l) => {
      const [a, c] = l, h = this.scroll.find(a, !0), d = h.offset(this.scroll);
      return c === 0 ? d : h instanceof et ? d + h.index(a, c) : d + h.length();
    }), s = Math.min(Math.max(...n), this.scroll.length() - 1), i = Math.min(s, ...n);
    return new ve(i, s - i);
  }
  normalizeNative(t) {
    if (!Ds(this.root, t.startContainer) || !t.collapsed && !Ds(this.root, t.endContainer))
      return null;
    const e = {
      start: {
        node: t.startContainer,
        offset: t.startOffset
      },
      end: {
        node: t.endContainer,
        offset: t.endOffset
      },
      native: t
    };
    return [e.start, e.end].forEach((n) => {
      let {
        node: s,
        offset: i
      } = n;
      for (; !(s instanceof Text) && s.childNodes.length > 0; )
        if (s.childNodes.length > i)
          s = s.childNodes[i], i = 0;
        else if (s.childNodes.length === i)
          s = s.lastChild, s instanceof Text ? i = s.data.length : s.childNodes.length > 0 ? i = s.childNodes.length : i = s.childNodes.length + 1;
        else
          break;
      n.node = s, n.offset = i;
    }), e;
  }
  rangeToNative(t) {
    const e = this.scroll.length(), n = (s, i) => {
      s = Math.min(e - 1, s);
      const [l, a] = this.scroll.leaf(s);
      return l ? l.position(a, i) : [null, -1];
    };
    return [...n(t.index, !1), ...n(t.index + t.length, !0)];
  }
  setNativeRange(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : e, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
    if (js.info("setNativeRange", t, e, n, s), t != null && (this.root.parentNode == null || t.parentNode == null || // @ts-expect-error Fix me later
    n.parentNode == null))
      return;
    const l = document.getSelection();
    if (l != null)
      if (t != null) {
        this.hasFocus() || this.root.focus({
          preventScroll: !0
        });
        const {
          native: a
        } = this.getNativeRange() || {};
        if (a == null || i || t !== a.startContainer || e !== a.startOffset || n !== a.endContainer || s !== a.endOffset) {
          t instanceof Element && t.tagName === "BR" && (e = Array.from(t.parentNode.childNodes).indexOf(t), t = t.parentNode), n instanceof Element && n.tagName === "BR" && (s = Array.from(n.parentNode.childNodes).indexOf(n), n = n.parentNode);
          const c = document.createRange();
          c.setStart(t, e), c.setEnd(n, s), l.removeAllRanges(), l.addRange(c);
        }
      } else
        l.removeAllRanges(), this.root.blur();
  }
  setRange(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _.sources.API;
    if (typeof e == "string" && (n = e, e = !1), js.info("setRange", t), t != null) {
      const s = this.rangeToNative(t);
      this.setNativeRange(...s, e);
    } else
      this.setNativeRange(null);
    this.update(n);
  }
  update() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _.sources.USER;
    const e = this.lastRange, [n, s] = this.getRange();
    if (this.lastRange = n, this.lastNative = s, this.lastRange != null && (this.savedRange = this.lastRange), !Ti(e, this.lastRange)) {
      if (!this.composing && s != null && s.native.collapsed && s.start.node !== this.cursor.textNode) {
        const l = this.cursor.restore();
        l && this.setNativeRange(l.startNode, l.startOffset, l.endNode, l.endOffset);
      }
      const i = [_.events.SELECTION_CHANGE, me(this.lastRange), me(e), t];
      this.emitter.emit(_.events.EDITOR_CHANGE, ...i), t !== _.sources.SILENT && this.emitter.emit(...i);
    }
  }
}
function Ds(r, t) {
  try {
    t.parentNode;
  } catch {
    return !1;
  }
  return r.contains(t);
}
const ad = /^[ -~]*$/;
class cd {
  constructor(t) {
    this.scroll = t, this.delta = this.getDelta();
  }
  applyDelta(t) {
    this.scroll.update();
    let e = this.scroll.length();
    this.scroll.batchStart();
    const n = Tl(t), s = new q();
    return hd(n.ops.slice()).reduce((l, a) => {
      const c = pt.Op.length(a);
      let h = a.attributes || {}, d = !1, b = !1;
      if (a.insert != null) {
        if (s.retain(c), typeof a.insert == "string") {
          const m = a.insert;
          b = !m.endsWith(`
`) && (e <= l || !!this.scroll.descendant(dt, l)[0]), this.scroll.insertAt(l, m);
          const [E, y] = this.scroll.line(l);
          let N = re({}, ht(E));
          if (E instanceof Y) {
            const [T] = E.descendant(et, y);
            T && (N = re(N, ht(T)));
          }
          h = pt.AttributeMap.diff(N, h) || {};
        } else if (typeof a.insert == "object") {
          const m = Object.keys(a.insert)[0];
          if (m == null)
            return l;
          const E = this.scroll.query(m, C.INLINE) != null;
          if (E)
            (e <= l || this.scroll.descendant(dt, l)[0]) && (b = !0);
          else if (l > 0) {
            const [y, N] = this.scroll.descendant(et, l - 1);
            y instanceof xt ? y.value()[N] !== `
` && (d = !0) : y instanceof at && y.statics.scope === C.INLINE_BLOT && (d = !0);
          }
          if (this.scroll.insertAt(l, m, a.insert[m]), E) {
            const [y] = this.scroll.descendant(et, l);
            if (y) {
              const N = re({}, ht(y));
              h = pt.AttributeMap.diff(N, h) || {};
            }
          }
        }
        e += c;
      } else if (s.push(a), a.retain !== null && typeof a.retain == "object") {
        const m = Object.keys(a.retain)[0];
        if (m == null)
          return l;
        this.scroll.updateEmbedAt(l, m, a.retain[m]);
      }
      Object.keys(h).forEach((m) => {
        this.scroll.formatAt(l, c, m, h[m]);
      });
      const p = d ? 1 : 0, g = b ? 1 : 0;
      return e += p + g, s.retain(p), s.delete(g), l + c + p + g;
    }, 0), s.reduce((l, a) => typeof a.delete == "number" ? (this.scroll.deleteAt(l, a.delete), l) : l + pt.Op.length(a), 0), this.scroll.batchEnd(), this.scroll.optimize(), this.update(n);
  }
  deleteText(t, e) {
    return this.scroll.deleteAt(t, e), this.update(new q().retain(t).delete(e));
  }
  formatLine(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.scroll.update(), Object.keys(n).forEach((i) => {
      this.scroll.lines(t, Math.max(e, 1)).forEach((l) => {
        l.format(i, n[i]);
      });
    }), this.scroll.optimize();
    const s = new q().retain(t).retain(e, me(n));
    return this.update(s);
  }
  formatText(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Object.keys(n).forEach((i) => {
      this.scroll.formatAt(t, e, i, n[i]);
    });
    const s = new q().retain(t).retain(e, me(n));
    return this.update(s);
  }
  getContents(t, e) {
    return this.delta.slice(t, t + e);
  }
  getDelta() {
    return this.scroll.lines().reduce((t, e) => t.concat(e.delta()), new q());
  }
  getFormat(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = [], s = [];
    e === 0 ? this.scroll.path(t).forEach((a) => {
      const [c] = a;
      c instanceof Y ? n.push(c) : c instanceof et && s.push(c);
    }) : (n = this.scroll.lines(t, e), s = this.scroll.descendants(et, t, e));
    const [i, l] = [n, s].map((a) => {
      const c = a.shift();
      if (c == null)
        return {};
      let h = ht(c);
      for (; Object.keys(h).length > 0; ) {
        const d = a.shift();
        if (d == null)
          return h;
        h = ud(ht(d), h);
      }
      return h;
    });
    return {
      ...i,
      ...l
    };
  }
  getHTML(t, e) {
    const [n, s] = this.scroll.line(t);
    if (n) {
      const i = n.length();
      return n.length() >= s + e ? Rn(n, s, e, !(s === 0 && e === i)) : Rn(this.scroll, t, e, !0);
    }
    return "";
  }
  getText(t, e) {
    return this.getContents(t, e).filter((n) => typeof n.insert == "string").map((n) => n.insert).join("");
  }
  insertContents(t, e) {
    const n = Tl(e), s = new q().retain(t).concat(n);
    return this.scroll.insertContents(t, n), this.update(s);
  }
  insertEmbed(t, e, n) {
    return this.scroll.insertAt(t, e, n), this.update(new q().retain(t).insert({
      [e]: n
    }));
  }
  insertText(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e = e.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(t, e), Object.keys(n).forEach((s) => {
      this.scroll.formatAt(t, e.length, s, n[s]);
    }), this.update(new q().retain(t).insert(e, me(n)));
  }
  isBlank() {
    if (this.scroll.children.length === 0)
      return !0;
    if (this.scroll.children.length > 1)
      return !1;
    const t = this.scroll.children.head;
    if ((t == null ? void 0 : t.statics.blotName) !== Y.blotName)
      return !1;
    const e = t;
    return e.children.length > 1 ? !1 : e.children.head instanceof Lt;
  }
  removeFormat(t, e) {
    const n = this.getText(t, e), [s, i] = this.scroll.line(t + e);
    let l = 0, a = new q();
    s != null && (l = s.length() - i, a = s.delta().slice(i, i + l - 1).insert(`
`));
    const h = this.getContents(t, e + l).diff(new q().insert(n).concat(a)), d = new q().retain(t).concat(h);
    return this.applyDelta(d);
  }
  update(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    const s = this.delta;
    if (e.length === 1 && e[0].type === "characterData" && // @ts-expect-error Fix me later
    e[0].target.data.match(ad) && this.scroll.find(e[0].target)) {
      const i = this.scroll.find(e[0].target), l = ht(i), a = i.offset(this.scroll), c = e[0].oldValue.replace(Ve.CONTENTS, ""), h = new q().insert(c), d = new q().insert(i.value()), b = n && {
        oldRange: xl(n.oldRange, -a),
        newRange: xl(n.newRange, -a)
      };
      t = new q().retain(a).concat(h.diff(d, b)).reduce((g, m) => m.insert ? g.insert(m.insert, l) : g.push(m), new q()), this.delta = s.compose(t);
    } else
      this.delta = this.getDelta(), (!t || !Ti(s.compose(t), this.delta)) && (t = s.diff(this.delta, n));
    return t;
  }
}
function He(r, t, e) {
  if (r.length === 0) {
    const [g] = $s(e.pop());
    return t <= 0 ? `</li></${g}>` : `</li></${g}>${He([], t - 1, e)}`;
  }
  const [{
    child: n,
    offset: s,
    length: i,
    indent: l,
    type: a
  }, ...c] = r, [h, d] = $s(a);
  if (l > t)
    return e.push(a), l === t + 1 ? `<${h}><li${d}>${Rn(n, s, i)}${He(c, l, e)}` : `<${h}><li>${He(r, t + 1, e)}`;
  const b = e[e.length - 1];
  if (l === t && a === b)
    return `</li><li${d}>${Rn(n, s, i)}${He(c, l, e)}`;
  const [p] = $s(e.pop());
  return `</li></${p}>${He(r, t - 1, e)}`;
}
function Rn(r, t, e) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if ("html" in r && typeof r.html == "function")
    return r.html(t, e);
  if (r instanceof xt)
    return Dr(r.value().slice(t, t + e));
  if (r instanceof Tt) {
    if (r.statics.blotName === "list-container") {
      const h = [];
      return r.children.forEachAt(t, e, (d, b, p) => {
        const g = "formats" in d && typeof d.formats == "function" ? d.formats() : {};
        h.push({
          child: d,
          offset: b,
          length: p,
          indent: g.indent || 0,
          type: g.list
        });
      }), He(h, -1, []);
    }
    const s = [];
    if (r.children.forEachAt(t, e, (h, d, b) => {
      s.push(Rn(h, d, b));
    }), n || r.statics.blotName === "list")
      return s.join("");
    const {
      outerHTML: i,
      innerHTML: l
    } = r.domNode, [a, c] = i.split(`>${l}<`);
    return a === "<table" ? `<table style="border: 1px solid #000;">${s.join("")}<${c}` : `${a}>${s.join("")}<${c}`;
  }
  return r.domNode instanceof Element ? r.domNode.outerHTML : "";
}
function ud(r, t) {
  return Object.keys(t).reduce((e, n) => {
    if (r[n] == null)
      return e;
    const s = t[n];
    return s === r[n] ? e[n] = s : Array.isArray(s) ? s.indexOf(r[n]) < 0 ? e[n] = s.concat([r[n]]) : e[n] = s : e[n] = [s, r[n]], e;
  }, {});
}
function $s(r) {
  const t = r === "ordered" ? "ol" : "ul";
  switch (r) {
    case "checked":
      return [t, ' data-list="checked"'];
    case "unchecked":
      return [t, ' data-list="unchecked"'];
    default:
      return [t, ""];
  }
}
function Tl(r) {
  return r.reduce((t, e) => {
    if (typeof e.insert == "string") {
      const n = e.insert.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
      return t.insert(n, e.attributes);
    }
    return t.push(e);
  }, new q());
}
function xl(r, t) {
  let {
    index: e,
    length: n
  } = r;
  return new ve(e + t, n);
}
function hd(r) {
  const t = [];
  return r.forEach((e) => {
    typeof e.insert == "string" ? e.insert.split(`
`).forEach((s, i) => {
      i && t.push({
        insert: `
`,
        attributes: e.attributes
      }), s && t.push({
        insert: s,
        attributes: e.attributes
      });
    }) : t.push(e);
  }), t;
}
class Ot {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.quill = t, this.options = e;
  }
}
L(Ot, "DEFAULTS", {});
const gr = "\uFEFF";
class Ci extends at {
  constructor(t, e) {
    super(t, e), this.contentNode = document.createElement("span"), this.contentNode.setAttribute("contenteditable", "false"), Array.from(this.domNode.childNodes).forEach((n) => {
      this.contentNode.appendChild(n);
    }), this.leftGuard = document.createTextNode(gr), this.rightGuard = document.createTextNode(gr), this.domNode.appendChild(this.leftGuard), this.domNode.appendChild(this.contentNode), this.domNode.appendChild(this.rightGuard);
  }
  index(t, e) {
    return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : super.index(t, e);
  }
  restore(t) {
    let e = null, n;
    const s = t.data.split(gr).join("");
    if (t === this.leftGuard)
      if (this.prev instanceof xt) {
        const i = this.prev.length();
        this.prev.insertAt(i, s), e = {
          startNode: this.prev.domNode,
          startOffset: i + s.length
        };
      } else
        n = document.createTextNode(s), this.parent.insertBefore(this.scroll.create(n), this), e = {
          startNode: n,
          startOffset: s.length
        };
    else
      t === this.rightGuard && (this.next instanceof xt ? (this.next.insertAt(0, s), e = {
        startNode: this.next.domNode,
        startOffset: s.length
      }) : (n = document.createTextNode(s), this.parent.insertBefore(this.scroll.create(n), this.next), e = {
        startNode: n,
        startOffset: s.length
      }));
    return t.data = gr, e;
  }
  update(t, e) {
    t.forEach((n) => {
      if (n.type === "characterData" && (n.target === this.leftGuard || n.target === this.rightGuard)) {
        const s = this.restore(n.target);
        s && (e.range = s);
      }
    });
  }
}
class fd {
  constructor(t, e) {
    L(this, "isComposing", !1);
    this.scroll = t, this.emitter = e, this.setupListeners();
  }
  setupListeners() {
    this.scroll.domNode.addEventListener("compositionstart", (t) => {
      this.isComposing || this.handleCompositionStart(t);
    }), this.scroll.domNode.addEventListener("compositionend", (t) => {
      this.isComposing && queueMicrotask(() => {
        this.handleCompositionEnd(t);
      });
    });
  }
  handleCompositionStart(t) {
    const e = t.target instanceof Node ? this.scroll.find(t.target, !0) : null;
    e && !(e instanceof Ci) && (this.emitter.emit(_.events.COMPOSITION_BEFORE_START, t), this.scroll.batchStart(), this.emitter.emit(_.events.COMPOSITION_START, t), this.isComposing = !0);
  }
  handleCompositionEnd(t) {
    this.emitter.emit(_.events.COMPOSITION_BEFORE_END, t), this.scroll.batchEnd(), this.emitter.emit(_.events.COMPOSITION_END, t), this.isComposing = !1;
  }
}
const Tn = class Tn {
  constructor(t, e) {
    L(this, "modules", {});
    this.quill = t, this.options = e;
  }
  init() {
    Object.keys(this.options.modules).forEach((t) => {
      this.modules[t] == null && this.addModule(t);
    });
  }
  addModule(t) {
    const e = this.quill.constructor.import(`modules/${t}`);
    return this.modules[t] = new e(this.quill, this.options.modules[t] || {}), this.modules[t];
  }
};
L(Tn, "DEFAULTS", {
  modules: {}
}), L(Tn, "themes", {
  default: Tn
});
let We = Tn;
const dd = (r) => r.parentElement || r.getRootNode().host || null, pd = (r) => {
  const t = r.getBoundingClientRect(), e = "offsetWidth" in r && Math.abs(t.width) / r.offsetWidth || 1, n = "offsetHeight" in r && Math.abs(t.height) / r.offsetHeight || 1;
  return {
    top: t.top,
    right: t.left + r.clientWidth * e,
    bottom: t.top + r.clientHeight * n,
    left: t.left
  };
}, mr = (r) => {
  const t = parseInt(r, 10);
  return Number.isNaN(t) ? 0 : t;
}, Sl = (r, t, e, n, s, i) => r < e && t > n ? 0 : r < e ? -(e - r + s) : t > n ? t - r > n - e ? r + s - e : t - n + i : 0, gd = (r, t) => {
  var i, l, a;
  const e = r.ownerDocument;
  let n = t, s = r;
  for (; s; ) {
    const c = s === e.body, h = c ? {
      top: 0,
      right: ((i = window.visualViewport) == null ? void 0 : i.width) ?? e.documentElement.clientWidth,
      bottom: ((l = window.visualViewport) == null ? void 0 : l.height) ?? e.documentElement.clientHeight,
      left: 0
    } : pd(s), d = getComputedStyle(s), b = Sl(n.left, n.right, h.left, h.right, mr(d.scrollPaddingLeft), mr(d.scrollPaddingRight)), p = Sl(n.top, n.bottom, h.top, h.bottom, mr(d.scrollPaddingTop), mr(d.scrollPaddingBottom));
    if (b || p)
      if (c)
        (a = e.defaultView) == null || a.scrollBy(b, p);
      else {
        const {
          scrollLeft: g,
          scrollTop: m
        } = s;
        p && (s.scrollTop += p), b && (s.scrollLeft += b);
        const E = s.scrollLeft - g, y = s.scrollTop - m;
        n = {
          left: n.left - E,
          top: n.top - y,
          right: n.right - E,
          bottom: n.bottom - y
        };
      }
    s = c || d.position === "fixed" ? null : dd(s);
  }
}, Ar = Xt("quill"), br = new qn();
Tt.uiClass = "ql-ui";
const Nt = class Nt {
  static debug(t) {
    t === !0 && (t = "log"), Xt.level(t);
  }
  static find(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return si.get(t) || br.find(t, e);
  }
  static import(t) {
    return this.imports[t] == null && Ar.error(`Cannot import ${t}. Are you sure it was registered?`), this.imports[t];
  }
  static register(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    if (typeof t != "string") {
      const s = "attrName" in t ? t.attrName : t.blotName;
      typeof s == "string" ? this.register(`formats/${s}`, t, e) : Object.keys(t).forEach((i) => {
        this.register(i, t[i], e);
      });
    } else
      this.imports[t] != null && !n && Ar.warn(`Overwriting ${t} with`, e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && e && typeof e != "boolean" && // @ts-expect-error
      e.blotName !== "abstract" && br.register(e), typeof e.register == "function" && e.register(br);
  }
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.options = md(t, e), this.container = this.options.container, this.container == null) {
      Ar.error("Invalid Quill container", t);
      return;
    }
    this.options.debug && Nt.debug(this.options.debug);
    const n = this.container.innerHTML.trim();
    this.container.classList.add("ql-container"), this.container.innerHTML = "", si.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.emitter = new _();
    const s = Si.blotName, i = this.options.registry.query(s);
    if (!i || !("blotName" in i))
      throw new Error(`Cannot initialize Quill without "${s}" blot`);
    if (this.scroll = new i(this.options.registry, this.root, {
      emitter: this.emitter
    }), this.editor = new cd(this.scroll), this.selection = new od(this.scroll, this.emitter), this.composition = new fd(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.addModule("input"), this.theme.addModule("uiNode"), this.theme.init(), this.emitter.on(_.events.EDITOR_CHANGE, (l) => {
      l === _.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
    }), this.emitter.on(_.events.SCROLL_UPDATE, (l, a) => {
      const c = this.selection.lastRange, [h] = this.selection.getRange(), d = c && h ? {
        oldRange: c,
        newRange: h
      } : void 0;
      At.call(this, () => this.editor.update(null, a, d), l);
    }), this.emitter.on(_.events.SCROLL_EMBED_UPDATE, (l, a) => {
      const c = this.selection.lastRange, [h] = this.selection.getRange(), d = c && h ? {
        oldRange: c,
        newRange: h
      } : void 0;
      At.call(this, () => {
        const b = new q().retain(l.offset(this)).retain({
          [l.statics.blotName]: a
        });
        return this.editor.update(b, [], d);
      }, Nt.sources.USER);
    }), n) {
      const l = this.clipboard.convert({
        html: `${n}<p><br></p>`,
        text: `
`
      });
      this.setContents(l);
    }
    this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable(), this.allowReadOnlyEdits = !1;
  }
  addContainer(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (typeof t == "string") {
      const n = t;
      t = document.createElement("div"), t.classList.add(n);
    }
    return this.container.insertBefore(t, e), t;
  }
  blur() {
    this.selection.setRange(null);
  }
  deleteText(t, e, n) {
    return [t, e, , n] = Kt(t, e, n), At.call(this, () => this.editor.deleteText(t, e), n, t, -1 * e);
  }
  disable() {
    this.enable(!1);
  }
  editReadOnly(t) {
    this.allowReadOnlyEdits = !0;
    const e = t();
    return this.allowReadOnlyEdits = !1, e;
  }
  enable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t);
  }
  focus() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.selection.focus(), t.preventScroll || this.scrollSelectionIntoView();
  }
  format(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _.sources.API;
    return At.call(this, () => {
      const s = this.getSelection(!0);
      let i = new q();
      if (s == null)
        return i;
      if (this.scroll.query(t, C.BLOCK))
        i = this.editor.formatLine(s.index, s.length, {
          [t]: e
        });
      else {
        if (s.length === 0)
          return this.selection.format(t, e), i;
        i = this.editor.formatText(s.index, s.length, {
          [t]: e
        });
      }
      return this.setSelection(s, _.sources.SILENT), i;
    }, n);
  }
  formatLine(t, e, n, s, i) {
    let l;
    return [t, e, l, i] = Kt(
      t,
      e,
      // @ts-expect-error
      n,
      s,
      i
    ), At.call(this, () => this.editor.formatLine(t, e, l), i, t, 0);
  }
  formatText(t, e, n, s, i) {
    let l;
    return [t, e, l, i] = Kt(
      // @ts-expect-error
      t,
      e,
      n,
      s,
      i
    ), At.call(this, () => this.editor.formatText(t, e, l), i, t, 0);
  }
  getBounds(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = null;
    if (typeof t == "number" ? n = this.selection.getBounds(t, e) : n = this.selection.getBounds(t.index, t.length), !n)
      return null;
    const s = this.container.getBoundingClientRect();
    return {
      bottom: n.bottom - s.top,
      height: n.height,
      left: n.left - s.left,
      right: n.right - s.left,
      top: n.top - s.top,
      width: n.width
    };
  }
  getContents() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - t;
    return [t, e] = Kt(t, e), this.editor.getContents(t, e);
  }
  getFormat() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return typeof t == "number" ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length);
  }
  getIndex(t) {
    return t.offset(this.scroll);
  }
  getLength() {
    return this.scroll.length();
  }
  getLeaf(t) {
    return this.scroll.leaf(t);
  }
  getLine(t) {
    return this.scroll.line(t);
  }
  getLines() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    return typeof t != "number" ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e);
  }
  getModule(t) {
    return this.theme.modules[t];
  }
  getSelection() {
    return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) && this.focus(), this.update(), this.selection.getRange()[0];
  }
  getSemanticHTML() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t == "number" && (e = e ?? this.getLength() - t), [t, e] = Kt(t, e), this.editor.getHTML(t, e);
  }
  getText() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t == "number" && (e = e ?? this.getLength() - t), [t, e] = Kt(t, e), this.editor.getText(t, e);
  }
  hasFocus() {
    return this.selection.hasFocus();
  }
  insertEmbed(t, e, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Nt.sources.API;
    return At.call(this, () => this.editor.insertEmbed(t, e, n), s, t);
  }
  insertText(t, e, n, s, i) {
    let l;
    return [t, , l, i] = Kt(t, 0, n, s, i), At.call(this, () => this.editor.insertText(t, e, l), i, t, e.length);
  }
  isEnabled() {
    return this.scroll.isEnabled();
  }
  off() {
    return this.emitter.off(...arguments);
  }
  // @ts-expect-error
  on() {
    return this.emitter.on(...arguments);
  }
  once() {
    return this.emitter.once(...arguments);
  }
  removeFormat() {
    const [t, e, , n] = Kt(...arguments);
    return At.call(this, () => this.editor.removeFormat(t, e), n, t);
  }
  scrollRectIntoView(t) {
    gd(this.root, t);
  }
  /**
   * @deprecated Use Quill#scrollSelectionIntoView() instead.
   */
  scrollIntoView() {
    console.warn("Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead."), this.scrollSelectionIntoView();
  }
  /**
   * Scroll the current selection into the visible area.
   * If the selection is already visible, no scrolling will occur.
   */
  scrollSelectionIntoView() {
    const t = this.selection.lastRange, e = t && this.selection.getBounds(t.index, t.length);
    e && this.scrollRectIntoView(e);
  }
  setContents(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.sources.API;
    return At.call(this, () => {
      t = new q(t);
      const n = this.getLength(), s = this.editor.deleteText(0, n), i = this.editor.insertContents(0, t), l = this.editor.deleteText(this.getLength() - 1, 1);
      return s.compose(i).compose(l);
    }, e);
  }
  setSelection(t, e, n) {
    t == null ? this.selection.setRange(null, e || Nt.sources.API) : ([t, e, , n] = Kt(t, e, n), this.selection.setRange(new ve(Math.max(0, t), e), n), n !== _.sources.SILENT && this.scrollSelectionIntoView());
  }
  setText(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.sources.API;
    const n = new q().insert(t);
    return this.setContents(n, e);
  }
  update() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _.sources.USER;
    const e = this.scroll.update(t);
    return this.selection.update(t), e;
  }
  updateContents(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.sources.API;
    return At.call(this, () => (t = new q(t), this.editor.applyDelta(t)), e, !0);
  }
};
L(Nt, "DEFAULTS", {
  bounds: null,
  modules: {},
  placeholder: "",
  readOnly: !1,
  registry: br,
  theme: "default"
}), L(Nt, "events", _.events), L(Nt, "sources", _.sources), L(Nt, "version", "2.0.0-rc.2"), L(Nt, "imports", {
  delta: q,
  parchment: zf,
  "core/module": Ot,
  "core/theme": We
});
let A = Nt;
function md(r, t) {
  let e = re({
    container: r,
    modules: {
      clipboard: !0,
      keyboard: !0,
      history: !0,
      uploader: !0
    }
  }, t);
  if (!e.theme || e.theme === A.DEFAULTS.theme)
    e.theme = We;
  else if (e.theme = A.import(`themes/${e.theme}`), e.theme == null)
    throw new Error(`Invalid theme ${e.theme}. Did you register it?`);
  const n = me(e.theme.DEFAULTS);
  [n, e].forEach((l) => {
    l.modules = l.modules || {}, Object.keys(l.modules).forEach((a) => {
      l.modules[a] === !0 && (l.modules[a] = {});
    });
  });
  const i = Object.keys(n.modules).concat(Object.keys(e.modules)).reduce((l, a) => {
    const c = A.import(`modules/${a}`);
    return c == null ? Ar.error(`Cannot load ${a} module. Are you sure you registered it?`) : l[a] = c.DEFAULTS || {}, l;
  }, {});
  return e.modules != null && e.modules.toolbar && e.modules.toolbar.constructor !== Object && (e.modules.toolbar = {
    container: e.modules.toolbar
  }), e = re({}, A.DEFAULTS, {
    modules: i
  }, n, e), ["bounds", "container"].forEach((l) => {
    const a = e[l];
    typeof a == "string" && (e[l] = document.querySelector(a));
  }), e.modules = Object.keys(e.modules).reduce((l, a) => (e.modules[a] && (l[a] = e.modules[a]), l), {}), e;
}
function At(r, t, e, n) {
  if (!this.isEnabled() && t === _.sources.USER && !this.allowReadOnlyEdits)
    return new q();
  let s = e == null ? null : this.getSelection();
  const i = this.editor.delta, l = r();
  if (s != null && (e === !0 && (e = s.index), n == null ? s = Ll(s, l, t) : n !== 0 && (s = Ll(s, e, n, t)), this.setSelection(s, _.sources.SILENT)), l.length() > 0) {
    const a = [_.events.TEXT_CHANGE, l, i, t];
    this.emitter.emit(_.events.EDITOR_CHANGE, ...a), t !== _.sources.SILENT && this.emitter.emit(...a);
  }
  return l;
}
function Kt(r, t, e, n, s) {
  let i = {};
  return typeof r.index == "number" && typeof r.length == "number" ? typeof t != "number" ? (s = n, n = e, e = t, t = r.length, r = r.index) : (t = r.length, r = r.index) : typeof t != "number" && (s = n, n = e, e = t, t = 0), typeof e == "object" ? (i = e, s = n) : typeof e == "string" && (n != null ? i[e] = n : s = e), s = s || _.sources.API, [r, t, i, s];
}
function Ll(r, t, e, n) {
  const s = typeof e == "number" ? e : 0;
  if (r == null)
    return null;
  let i, l;
  return t && typeof t.transformPosition == "function" ? [i, l] = [r.index, r.index + r.length].map((a) => (
    // @ts-expect-error -- TODO: add a better type guard around `index`
    t.transformPosition(a, n !== _.sources.USER)
  )) : [i, l] = [r.index, r.index + r.length].map((a) => a < t || a === t && n === _.sources.USER ? a : s >= 0 ? a + s : Math.max(t, a + s)), new ve(i, l - i);
}
class we extends kr {
}
function Ol(r) {
  return r instanceof Y || r instanceof dt;
}
function _l(r) {
  return typeof r.updateContent == "function";
}
class ze extends Si {
  constructor(t, e, n) {
    let {
      emitter: s
    } = n;
    super(t, e), this.emitter = s, this.batch = !1, this.optimize(), this.enable(), this.domNode.addEventListener("dragstart", (i) => this.handleDragStart(i));
  }
  batchStart() {
    Array.isArray(this.batch) || (this.batch = []);
  }
  batchEnd() {
    if (!this.batch)
      return;
    const t = this.batch;
    this.batch = !1, this.update(t);
  }
  emitMount(t) {
    this.emitter.emit(_.events.SCROLL_BLOT_MOUNT, t);
  }
  emitUnmount(t) {
    this.emitter.emit(_.events.SCROLL_BLOT_UNMOUNT, t);
  }
  emitEmbedUpdate(t, e) {
    this.emitter.emit(_.events.SCROLL_EMBED_UPDATE, t, e);
  }
  deleteAt(t, e) {
    const [n, s] = this.line(t), [i] = this.line(t + e);
    if (super.deleteAt(t, e), i != null && n !== i && s > 0) {
      if (n instanceof dt || i instanceof dt) {
        this.optimize();
        return;
      }
      const l = i.children.head instanceof Lt ? null : i.children.head;
      n.moveChildren(i, l), n.remove();
    }
    this.optimize();
  }
  enable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.domNode.setAttribute("contenteditable", t ? "true" : "false");
  }
  formatAt(t, e, n, s) {
    super.formatAt(t, e, n, s), this.optimize();
  }
  insertAt(t, e, n) {
    if (t >= this.length())
      if (n == null || this.scroll.query(e, C.BLOCK) == null) {
        const s = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(s), n == null && e.endsWith(`
`) ? s.insertAt(0, e.slice(0, -1), n) : s.insertAt(0, e, n);
      } else {
        const s = this.scroll.create(e, n);
        this.appendChild(s);
      }
    else
      super.insertAt(t, e, n);
    this.optimize();
  }
  insertBefore(t, e) {
    if (t.statics.scope === C.INLINE_BLOT) {
      const n = this.scroll.create(this.statics.defaultChild.blotName);
      n.appendChild(t), super.insertBefore(n, e);
    } else
      super.insertBefore(t, e);
  }
  insertContents(t, e) {
    const n = this.deltaToRenderBlocks(e.concat(new q().insert(`
`))), s = n.pop();
    if (s == null)
      return;
    this.batchStart();
    const i = n.shift();
    if (i) {
      const c = i.type === "block" && (i.delta.length() === 0 || !this.descendant(dt, t)[0] && t < this.length()), h = i.type === "block" ? i.delta : new q().insert({
        [i.key]: i.value
      });
      Ps(this, t, h);
      const d = i.type === "block" ? 1 : 0, b = t + h.length() + d;
      c && this.insertAt(b - 1, `
`);
      const p = ht(this.line(t)[0]), g = pt.AttributeMap.diff(p, i.attributes) || {};
      Object.keys(g).forEach((m) => {
        this.formatAt(b - 1, 1, m, g[m]);
      }), t = b;
    }
    let [l, a] = this.children.find(t);
    if (n.length && (l && (l = l.split(a), a = 0), n.forEach((c) => {
      if (c.type === "block") {
        const h = this.createBlock(c.attributes, l || void 0);
        Ps(h, 0, c.delta);
      } else {
        const h = this.create(c.key, c.value);
        this.insertBefore(h, l || void 0), Object.keys(c.attributes).forEach((d) => {
          h.format(d, c.attributes[d]);
        });
      }
    })), s.type === "block" && s.delta.length()) {
      const c = l ? l.offset(l.scroll) + a : this.length();
      Ps(this, c, s.delta);
    }
    this.batchEnd(), this.optimize();
  }
  isEnabled() {
    return this.domNode.getAttribute("contenteditable") === "true";
  }
  leaf(t) {
    const e = this.path(t).pop();
    if (!e)
      return [null, -1];
    const [n, s] = e;
    return n instanceof et ? [n, s] : [null, -1];
  }
  line(t) {
    return t === this.length() ? this.line(t - 1) : this.descendant(Ol, t);
  }
  lines() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    const n = (s, i, l) => {
      let a = [], c = l;
      return s.children.forEachAt(i, l, (h, d, b) => {
        Ol(h) ? a.push(h) : h instanceof kr && (a = a.concat(n(h, d, c))), c -= b;
      }), a;
    };
    return n(this, t, e);
  }
  optimize() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.batch || (super.optimize(t, e), t.length > 0 && this.emitter.emit(_.events.SCROLL_OPTIMIZE, t, e));
  }
  path(t) {
    return super.path(t).slice(1);
  }
  remove() {
  }
  update(t) {
    if (this.batch) {
      Array.isArray(t) && (this.batch = this.batch.concat(t));
      return;
    }
    let e = _.sources.USER;
    typeof t == "string" && (e = t), Array.isArray(t) || (t = this.observer.takeRecords()), t = t.filter((n) => {
      let {
        target: s
      } = n;
      const i = this.find(s, !0);
      return i && !_l(i);
    }), t.length > 0 && this.emitter.emit(_.events.SCROLL_BEFORE_UPDATE, e, t), super.update(t.concat([])), t.length > 0 && this.emitter.emit(_.events.SCROLL_UPDATE, e, t);
  }
  updateEmbedAt(t, e, n) {
    const [s] = this.descendant((i) => i instanceof dt, t);
    s && s.statics.blotName === e && _l(s) && s.updateContent(n);
  }
  handleDragStart(t) {
    t.preventDefault();
  }
  deltaToRenderBlocks(t) {
    const e = [];
    let n = new q();
    return t.forEach((s) => {
      const i = s == null ? void 0 : s.insert;
      if (i)
        if (typeof i == "string") {
          const l = i.split(`
`);
          l.slice(0, -1).forEach((c) => {
            n.insert(c, s.attributes), e.push({
              type: "block",
              delta: n,
              attributes: s.attributes ?? {}
            }), n = new q();
          });
          const a = l[l.length - 1];
          a && n.insert(a, s.attributes);
        } else {
          const l = Object.keys(i)[0];
          if (!l)
            return;
          this.query(l, C.INLINE) ? n.push(s) : (n.length() && e.push({
            type: "block",
            delta: n,
            attributes: {}
          }), n = new q(), e.push({
            type: "blockEmbed",
            key: l,
            value: i[l],
            attributes: s.attributes ?? {}
          }));
        }
    }), n.length() && e.push({
      type: "block",
      delta: n,
      attributes: {}
    }), e;
  }
  createBlock(t, e) {
    let n;
    const s = {};
    Object.entries(t).forEach((a) => {
      let [c, h] = a;
      this.query(c, C.BLOCK & C.BLOT) != null ? n = c : s[c] = h;
    });
    const i = this.create(n || this.statics.defaultChild.blotName, n ? t[n] : void 0);
    this.insertBefore(i, e || void 0);
    const l = i.length();
    return Object.entries(s).forEach((a) => {
      let [c, h] = a;
      i.formatAt(0, l, c, h);
    }), i;
  }
}
L(ze, "blotName", "scroll"), L(ze, "className", "ql-editor"), L(ze, "tagName", "DIV"), L(ze, "defaultChild", Y), L(ze, "allowedChildren", [Y, dt, we]);
function Ps(r, t, e) {
  e.reduce((n, s) => {
    const i = pt.Op.length(s);
    let l = s.attributes || {};
    if (s.insert != null) {
      if (typeof s.insert == "string") {
        const a = s.insert;
        r.insertAt(n, a);
        const [c] = r.descendant(et, n), h = ht(c);
        l = pt.AttributeMap.diff(h, l) || {};
      } else if (typeof s.insert == "object") {
        const a = Object.keys(s.insert)[0];
        if (a == null)
          return n;
        if (r.insertAt(n, a, s.insert[a]), r.scroll.query(a, C.INLINE) != null) {
          const [h] = r.descendant(et, n), d = ht(h);
          l = pt.AttributeMap.diff(d, l) || {};
        }
      }
    }
    return Object.keys(l).forEach((a) => {
      r.formatAt(n, i, a, l[a]);
    }), n + i;
  }, t);
}
const Ii = {
  scope: C.BLOCK,
  whitelist: ["right", "center", "justify"]
}, bd = new Dt("align", "align", Ii), ko = new St("align", "ql-align", Ii), Mo = new le("align", "text-align", Ii);
class Bo extends le {
  value(t) {
    let e = super.value(t);
    return e.startsWith("rgb(") ? (e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), `#${e.split(",").map((s) => `00${parseInt(s, 10).toString(16)}`.slice(-2)).join("")}`) : e;
  }
}
const yd = new St("color", "ql-color", {
  scope: C.INLINE
}), Ri = new Bo("color", "color", {
  scope: C.INLINE
}), vd = new St("background", "ql-bg", {
  scope: C.INLINE
}), ki = new Bo("background", "background-color", {
  scope: C.INLINE
});
class Te extends we {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("spellcheck", "false"), e;
  }
  code(t, e) {
    return this.children.map((n) => n.length() <= 1 ? "" : n.domNode.innerText).join(`
`).slice(t, t + e);
  }
  html(t, e) {
    return `<pre>
${Dr(this.code(t, e))}
</pre>`;
  }
}
class nt extends Y {
  static register() {
    A.register(Te);
  }
}
L(nt, "TAB", "  ");
class Mi extends $t {
}
Mi.blotName = "code";
Mi.tagName = "CODE";
nt.blotName = "code-block";
nt.className = "ql-code-block";
nt.tagName = "DIV";
Te.blotName = "code-block-container";
Te.className = "ql-code-block-container";
Te.tagName = "DIV";
Te.allowedChildren = [nt];
nt.allowedChildren = [xt, Lt, Ve];
nt.requiredContainer = Te;
const Bi = {
  scope: C.BLOCK,
  whitelist: ["rtl"]
}, jo = new Dt("direction", "dir", Bi), Do = new St("direction", "ql-direction", Bi), $o = new le("direction", "direction", Bi), Po = {
  scope: C.INLINE,
  whitelist: ["serif", "monospace"]
}, Uo = new St("font", "ql-font", Po);
class Ed extends le {
  value(t) {
    return super.value(t).replace(/["']/g, "");
  }
}
const Fo = new Ed("font", "font-family", Po), Ho = new St("size", "ql-size", {
  scope: C.INLINE,
  whitelist: ["small", "large", "huge"]
}), zo = new le("size", "font-size", {
  scope: C.INLINE,
  whitelist: ["10px", "18px", "32px"]
}), Ad = Xt("quill:keyboard"), Nd = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
class $r extends Ot {
  static match(t, e) {
    return ["altKey", "ctrlKey", "metaKey", "shiftKey"].some((n) => !!e[n] !== t[n] && e[n] !== null) ? !1 : e.key === t.key || e.key === t.which;
  }
  constructor(t, e) {
    super(t, e), this.bindings = {}, Object.keys(this.options.bindings).forEach((n) => {
      this.options.bindings[n] && this.addBinding(this.options.bindings[n]);
    }), this.addBinding({
      key: "Enter",
      shiftKey: null
    }, this.handleEnter), this.addBinding({
      key: "Enter",
      metaKey: null,
      ctrlKey: null,
      altKey: null
    }, () => {
    }), /Firefox/i.test(navigator.userAgent) ? (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !0
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !0
    }, this.handleDelete)) : (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !0,
      prefix: /^.?$/
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !0,
      suffix: /^.?$/
    }, this.handleDelete)), this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !1
    }, this.handleDeleteRange), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !1
    }, this.handleDeleteRange), this.addBinding({
      key: "Backspace",
      altKey: null,
      ctrlKey: null,
      metaKey: null,
      shiftKey: null
    }, {
      collapsed: !0,
      offset: 0
    }, this.handleBackspace), this.listen();
  }
  addBinding(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = Td(t);
    if (s == null) {
      Ad.warn("Attempted to add invalid keyboard binding", s);
      return;
    }
    typeof e == "function" && (e = {
      handler: e
    }), typeof n == "function" && (n = {
      handler: n
    }), (Array.isArray(s.key) ? s.key : [s.key]).forEach((l) => {
      const a = {
        ...s,
        key: l,
        ...e,
        ...n
      };
      this.bindings[a.key] = this.bindings[a.key] || [], this.bindings[a.key].push(a);
    });
  }
  listen() {
    this.quill.root.addEventListener("keydown", (t) => {
      if (t.defaultPrevented || t.isComposing)
        return;
      const n = (this.bindings[t.key] || []).concat(this.bindings[t.which] || []).filter((y) => $r.match(t, y));
      if (n.length === 0)
        return;
      const s = A.find(t.target, !0);
      if (s && s.scroll !== this.quill.scroll)
        return;
      const i = this.quill.getSelection();
      if (i == null || !this.quill.hasFocus())
        return;
      const [l, a] = this.quill.getLine(i.index), [c, h] = this.quill.getLeaf(i.index), [d, b] = i.length === 0 ? [c, h] : this.quill.getLeaf(i.index + i.length), p = c instanceof Lr ? c.value().slice(0, h) : "", g = d instanceof Lr ? d.value().slice(b) : "", m = {
        collapsed: i.length === 0,
        // @ts-expect-error Fix me later
        empty: i.length === 0 && l.length() <= 1,
        format: this.quill.getFormat(i),
        line: l,
        offset: a,
        prefix: p,
        suffix: g,
        event: t
      };
      n.some((y) => {
        if (y.collapsed != null && y.collapsed !== m.collapsed || y.empty != null && y.empty !== m.empty || y.offset != null && y.offset !== m.offset)
          return !1;
        if (Array.isArray(y.format)) {
          if (y.format.every((N) => m.format[N] == null))
            return !1;
        } else if (typeof y.format == "object" && !Object.keys(y.format).every((N) => y.format[N] === !0 ? m.format[N] != null : y.format[N] === !1 ? m.format[N] == null : Ti(y.format[N], m.format[N])))
          return !1;
        return y.prefix != null && !y.prefix.test(m.prefix) || y.suffix != null && !y.suffix.test(m.suffix) ? !1 : y.handler.call(this, i, m, y) !== !0;
      }) && t.preventDefault();
    });
  }
  handleBackspace(t, e) {
    const n = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
    if (t.index === 0 || this.quill.getLength() <= 1)
      return;
    let s = {};
    const [i] = this.quill.getLine(t.index);
    let l = new q().retain(t.index - n).delete(n);
    if (e.offset === 0) {
      const [a] = this.quill.getLine(t.index - 1);
      if (a && !(a.statics.blotName === "block" && a.length() <= 1)) {
        const h = i.formats(), d = this.quill.getFormat(t.index - 1, 1);
        if (s = pt.AttributeMap.diff(h, d) || {}, Object.keys(s).length > 0) {
          const b = new q().retain(t.index + i.length() - 2).retain(1, s);
          l = l.compose(b);
        }
      }
    }
    this.quill.updateContents(l, A.sources.USER), this.quill.focus();
  }
  handleDelete(t, e) {
    const n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
    if (t.index >= this.quill.getLength() - n)
      return;
    let s = {};
    const [i] = this.quill.getLine(t.index);
    let l = new q().retain(t.index).delete(n);
    if (e.offset >= i.length() - 1) {
      const [a] = this.quill.getLine(t.index + 1);
      if (a) {
        const c = i.formats(), h = this.quill.getFormat(t.index, 1);
        s = pt.AttributeMap.diff(c, h) || {}, Object.keys(s).length > 0 && (l = l.retain(a.length() - 1).retain(1, s));
      }
    }
    this.quill.updateContents(l, A.sources.USER), this.quill.focus();
  }
  handleDeleteRange(t) {
    ji({
      range: t,
      quill: this.quill
    }), this.quill.focus();
  }
  handleEnter(t, e) {
    const n = Object.keys(e.format).reduce((i, l) => (this.quill.scroll.query(l, C.BLOCK) && !Array.isArray(e.format[l]) && (i[l] = e.format[l]), i), {}), s = new q().retain(t.index).delete(t.length).insert(`
`, n);
    this.quill.updateContents(s, A.sources.USER), this.quill.setSelection(t.index + 1, A.sources.SILENT), this.quill.focus();
  }
}
const wd = {
  bindings: {
    bold: Us("bold"),
    italic: Us("italic"),
    underline: Us("underline"),
    indent: {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: "Tab",
      format: ["blockquote", "indent", "list"],
      handler(r, t) {
        return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "+1", A.sources.USER), !1);
      }
    },
    outdent: {
      key: "Tab",
      shiftKey: !0,
      format: ["blockquote", "indent", "list"],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler(r, t) {
        return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "-1", A.sources.USER), !1);
      }
    },
    "outdent backspace": {
      key: "Backspace",
      collapsed: !0,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ["indent", "list"],
      offset: 0,
      handler(r, t) {
        t.format.indent != null ? this.quill.format("indent", "-1", A.sources.USER) : t.format.list != null && this.quill.format("list", !1, A.sources.USER);
      }
    },
    "indent code-block": ql(!0),
    "outdent code-block": ql(!1),
    "remove tab": {
      key: "Tab",
      shiftKey: !0,
      collapsed: !0,
      prefix: /\t$/,
      handler(r) {
        this.quill.deleteText(r.index - 1, 1, A.sources.USER);
      }
    },
    tab: {
      key: "Tab",
      handler(r, t) {
        if (t.format.table)
          return !0;
        this.quill.history.cutoff();
        const e = new q().retain(r.index).delete(r.length).insert("	");
        return this.quill.updateContents(e, A.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(r.index + 1, A.sources.SILENT), !1;
      }
    },
    "blockquote empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["blockquote"],
      empty: !0,
      handler() {
        this.quill.format("blockquote", !1, A.sources.USER);
      }
    },
    "list empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["list"],
      empty: !0,
      handler(r, t) {
        const e = {
          list: !1
        };
        t.format.indent && (e.indent = !1), this.quill.formatLine(r.index, r.length, e, A.sources.USER);
      }
    },
    "checklist enter": {
      key: "Enter",
      collapsed: !0,
      format: {
        list: "checked"
      },
      handler(r) {
        const [t, e] = this.quill.getLine(r.index), n = {
          // @ts-expect-error Fix me later
          ...t.formats(),
          list: "checked"
        }, s = new q().retain(r.index).insert(`
`, n).retain(t.length() - e - 1).retain(1, {
          list: "unchecked"
        });
        this.quill.updateContents(s, A.sources.USER), this.quill.setSelection(r.index + 1, A.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "header enter": {
      key: "Enter",
      collapsed: !0,
      format: ["header"],
      suffix: /^$/,
      handler(r, t) {
        const [e, n] = this.quill.getLine(r.index), s = new q().retain(r.index).insert(`
`, t.format).retain(e.length() - n - 1).retain(1, {
          header: null
        });
        this.quill.updateContents(s, A.sources.USER), this.quill.setSelection(r.index + 1, A.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "table backspace": {
      key: "Backspace",
      format: ["table"],
      collapsed: !0,
      offset: 0,
      handler() {
      }
    },
    "table delete": {
      key: "Delete",
      format: ["table"],
      collapsed: !0,
      suffix: /^$/,
      handler() {
      }
    },
    "table enter": {
      key: "Enter",
      shiftKey: null,
      format: ["table"],
      handler(r) {
        const t = this.quill.getModule("table");
        if (t) {
          const [e, n, s, i] = t.getTable(r), l = xd(e, n, s, i);
          if (l == null)
            return;
          let a = e.offset();
          if (l < 0) {
            const c = new q().retain(a).insert(`
`);
            this.quill.updateContents(c, A.sources.USER), this.quill.setSelection(r.index + 1, r.length, A.sources.SILENT);
          } else if (l > 0) {
            a += e.length();
            const c = new q().retain(a).insert(`
`);
            this.quill.updateContents(c, A.sources.USER), this.quill.setSelection(a, A.sources.USER);
          }
        }
      }
    },
    "table tab": {
      key: "Tab",
      shiftKey: null,
      format: ["table"],
      handler(r, t) {
        const {
          event: e,
          line: n
        } = t, s = n.offset(this.quill.scroll);
        e.shiftKey ? this.quill.setSelection(s - 1, A.sources.USER) : this.quill.setSelection(s + n.length(), A.sources.USER);
      }
    },
    "list autofill": {
      key: " ",
      shiftKey: null,
      collapsed: !0,
      format: {
        "code-block": !1,
        blockquote: !1,
        table: !1
      },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler(r, t) {
        if (this.quill.scroll.query("list") == null)
          return !0;
        const {
          length: e
        } = t.prefix, [n, s] = this.quill.getLine(r.index);
        if (s > e)
          return !0;
        let i;
        switch (t.prefix.trim()) {
          case "[]":
          case "[ ]":
            i = "unchecked";
            break;
          case "[x]":
            i = "checked";
            break;
          case "-":
          case "*":
            i = "bullet";
            break;
          default:
            i = "ordered";
        }
        this.quill.insertText(r.index, " ", A.sources.USER), this.quill.history.cutoff();
        const l = new q().retain(r.index - s).delete(e + 1).retain(n.length() - 2 - s).retain(1, {
          list: i
        });
        return this.quill.updateContents(l, A.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(r.index - e, A.sources.SILENT), !1;
      }
    },
    "code exit": {
      key: "Enter",
      collapsed: !0,
      format: ["code-block"],
      prefix: /^$/,
      suffix: /^\s*$/,
      handler(r) {
        const [t, e] = this.quill.getLine(r.index);
        let n = 2, s = t;
        for (; s != null && s.length() <= 1 && s.formats()["code-block"]; )
          if (s = s.prev, n -= 1, n <= 0) {
            const i = new q().retain(r.index + t.length() - e - 2).retain(1, {
              "code-block": null
            }).delete(1);
            return this.quill.updateContents(i, A.sources.USER), this.quill.setSelection(r.index - 1, A.sources.SILENT), !1;
          }
        return !0;
      }
    },
    "embed left": yr("ArrowLeft", !1),
    "embed left shift": yr("ArrowLeft", !0),
    "embed right": yr("ArrowRight", !1),
    "embed right shift": yr("ArrowRight", !0),
    "table down": Cl(!1),
    "table up": Cl(!0)
  }
};
$r.DEFAULTS = wd;
function ql(r) {
  return {
    key: "Tab",
    shiftKey: !r,
    format: {
      "code-block": !0
    },
    handler(t, e) {
      let {
        event: n
      } = e;
      const s = this.quill.scroll.query("code-block"), {
        TAB: i
      } = s;
      if (t.length === 0 && !n.shiftKey) {
        this.quill.insertText(t.index, i, A.sources.USER), this.quill.setSelection(t.index + i.length, A.sources.SILENT);
        return;
      }
      const l = t.length === 0 ? this.quill.getLines(t.index, 1) : this.quill.getLines(t);
      let {
        index: a,
        length: c
      } = t;
      l.forEach((h, d) => {
        r ? (h.insertAt(0, i), d === 0 ? a += i.length : c += i.length) : h.domNode.textContent.startsWith(i) && (h.deleteAt(0, i.length), d === 0 ? a -= i.length : c -= i.length);
      }), this.quill.update(A.sources.USER), this.quill.setSelection(a, c, A.sources.SILENT);
    }
  };
}
function yr(r, t) {
  return {
    key: r,
    shiftKey: t,
    altKey: null,
    [r === "ArrowLeft" ? "prefix" : "suffix"]: /^$/,
    handler(n) {
      let {
        index: s
      } = n;
      r === "ArrowRight" && (s += n.length + 1);
      const [i] = this.quill.getLeaf(s);
      return i instanceof at ? (r === "ArrowLeft" ? t ? this.quill.setSelection(n.index - 1, n.length + 1, A.sources.USER) : this.quill.setSelection(n.index - 1, A.sources.USER) : t ? this.quill.setSelection(n.index, n.length + 1, A.sources.USER) : this.quill.setSelection(n.index + n.length + 1, A.sources.USER), !1) : !0;
    }
  };
}
function Us(r) {
  return {
    key: r[0],
    shortKey: !0,
    handler(t, e) {
      this.quill.format(r, !e.format[r], A.sources.USER);
    }
  };
}
function Cl(r) {
  return {
    key: r ? "ArrowUp" : "ArrowDown",
    collapsed: !0,
    format: ["table"],
    handler(t, e) {
      const n = r ? "prev" : "next", s = e.line, i = s.parent[n];
      if (i != null) {
        if (i.statics.blotName === "table-row") {
          let l = i.children.head, a = s;
          for (; a.prev != null; )
            a = a.prev, l = l.next;
          const c = l.offset(this.quill.scroll) + Math.min(e.offset, l.length() - 1);
          this.quill.setSelection(c, 0, A.sources.USER);
        }
      } else {
        const l = s.table()[n];
        l != null && (r ? this.quill.setSelection(l.offset(this.quill.scroll) + l.length() - 1, 0, A.sources.USER) : this.quill.setSelection(l.offset(this.quill.scroll), 0, A.sources.USER));
      }
      return !1;
    }
  };
}
function Td(r) {
  if (typeof r == "string" || typeof r == "number")
    r = {
      key: r
    };
  else if (typeof r == "object")
    r = me(r);
  else
    return null;
  return r.shortKey && (r[Nd] = r.shortKey, delete r.shortKey), r;
}
function ji(r) {
  let {
    quill: t,
    range: e
  } = r;
  const n = t.getLines(e);
  let s = {};
  if (n.length > 1) {
    const i = n[0].formats(), l = n[n.length - 1].formats();
    s = pt.AttributeMap.diff(l, i) || {};
  }
  t.deleteText(e, A.sources.USER), Object.keys(s).length > 0 && t.formatLine(e.index, 1, s, A.sources.USER), t.setSelection(e.index, A.sources.SILENT);
}
function xd(r, t, e, n) {
  return t.prev == null && t.next == null ? e.prev == null && e.next == null ? n === 0 ? -1 : 1 : e.prev == null ? -1 : 1 : t.prev == null ? -1 : t.next == null ? 1 : null;
}
const Sd = /font-weight:\s*normal/, Ld = ["P", "OL", "UL"], Il = (r) => r && Ld.includes(r.tagName), Od = (r) => {
  Array.from(r.querySelectorAll("br")).filter((t) => Il(t.previousElementSibling) && Il(t.nextElementSibling)).forEach((t) => {
    var e;
    (e = t.parentNode) == null || e.removeChild(t);
  });
}, _d = (r) => {
  Array.from(r.querySelectorAll('b[style*="font-weight"]')).filter((t) => {
    var e;
    return (e = t.getAttribute("style")) == null ? void 0 : e.match(Sd);
  }).forEach((t) => {
    var n;
    const e = r.createDocumentFragment();
    e.append(...t.childNodes), (n = t.parentNode) == null || n.replaceChild(e, t);
  });
};
function qd(r) {
  r.querySelector('[id^="docs-internal-guid-"]') && (_d(r), Od(r));
}
const Cd = /\bmso-list:[^;]*ignore/i, Id = /\bmso-list:[^;]*\bl(\d+)/i, Rd = /\bmso-list:[^;]*\blevel(\d+)/i, kd = (r, t) => {
  const e = r.getAttribute("style"), n = e == null ? void 0 : e.match(Id);
  if (!n)
    return null;
  const s = Number(n[1]), i = e == null ? void 0 : e.match(Rd), l = i ? Number(i[1]) : 1, a = new RegExp(`@list l${s}:level${l}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, "i"), c = t.match(a), h = c && c[1] === "bullet" ? "bullet" : "ordered";
  return {
    id: s,
    indent: l,
    type: h,
    element: r
  };
}, Md = (r) => {
  var l, a;
  const t = Array.from(r.querySelectorAll("[style*=mso-list]")), e = [], n = [];
  t.forEach((c) => {
    (c.getAttribute("style") || "").match(Cd) ? e.push(c) : n.push(c);
  }), e.forEach((c) => {
    var h;
    return (h = c.parentNode) == null ? void 0 : h.removeChild(c);
  });
  const s = r.documentElement.innerHTML, i = n.map((c) => kd(c, s)).filter((c) => c);
  for (; i.length; ) {
    const c = [];
    let h = i.shift();
    for (; h; )
      c.push(h), h = i.length && ((l = i[0]) == null ? void 0 : l.element) === h.element.nextElementSibling && // Different id means the next item doesn't belong to this group.
      i[0].id === h.id ? i.shift() : null;
    const d = document.createElement("ul");
    c.forEach((g) => {
      const m = document.createElement("li");
      m.setAttribute("data-list", g.type), g.indent > 1 && m.setAttribute("class", `ql-indent-${g.indent - 1}`), m.innerHTML = g.element.innerHTML, d.appendChild(m);
    });
    const b = (a = c[0]) == null ? void 0 : a.element, {
      parentNode: p
    } = b ?? {};
    b && (p == null || p.replaceChild(d, b)), c.slice(1).forEach((g) => {
      let {
        element: m
      } = g;
      p == null || p.removeChild(m);
    });
  }
};
function Bd(r) {
  r.documentElement.getAttribute("xmlns:w") === "urn:schemas-microsoft-com:office:word" && Md(r);
}
const jd = [Bd, qd], Dd = (r) => {
  r.documentElement && jd.forEach((t) => {
    t(r);
  });
}, $d = Xt("quill:clipboard"), Pd = [[Node.TEXT_NODE, Jd], [Node.TEXT_NODE, kl], ["br", Kd], [Node.ELEMENT_NODE, kl], [Node.ELEMENT_NODE, zd], [Node.ELEMENT_NODE, Hd], [Node.ELEMENT_NODE, Xd], ["li", Wd], ["ol, ul", Zd], ["pre", Gd], ["tr", Yd], ["b", Fs("bold")], ["i", Fs("italic")], ["strike", Fs("strike")], ["style", Vd]], Ud = [bd, jo].reduce((r, t) => (r[t.keyName] = t, r), {}), Rl = [Mo, ki, Ri, $o, Fo, zo].reduce((r, t) => (r[t.keyName] = t, r), {});
class Ko extends Ot {
  constructor(t, e) {
    super(t, e), this.quill.root.addEventListener("copy", (n) => this.onCaptureCopy(n, !1)), this.quill.root.addEventListener("cut", (n) => this.onCaptureCopy(n, !0)), this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)), this.matchers = [], Pd.concat(this.options.matchers).forEach((n) => {
      let [s, i] = n;
      this.addMatcher(s, i);
    });
  }
  addMatcher(t, e) {
    this.matchers.push([t, e]);
  }
  convert(t) {
    let {
      html: e,
      text: n
    } = t, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (s[nt.blotName])
      return new q().insert(n || "", {
        [nt.blotName]: s[nt.blotName]
      });
    if (!e)
      return new q().insert(n || "", s);
    const i = this.convertHTML(e);
    return $n(i, `
`) && (i.ops[i.ops.length - 1].attributes == null || s.table) ? i.compose(new q().retain(i.length() - 1).delete(1)) : i;
  }
  normalizeHTML(t) {
    Dd(t);
  }
  convertHTML(t) {
    const e = new DOMParser().parseFromString(t, "text/html");
    this.normalizeHTML(e);
    const n = e.body, s = /* @__PURE__ */ new WeakMap(), [i, l] = this.prepareMatching(n, s);
    return Di(this.quill.scroll, n, i, l, s);
  }
  dangerouslyPasteHTML(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : A.sources.API;
    if (typeof t == "string") {
      const s = this.convert({
        html: t,
        text: ""
      });
      this.quill.setContents(s, e), this.quill.setSelection(0, A.sources.SILENT);
    } else {
      const s = this.convert({
        html: e,
        text: ""
      });
      this.quill.updateContents(new q().retain(t).concat(s), n), this.quill.setSelection(t + s.length(), A.sources.SILENT);
    }
  }
  onCaptureCopy(t) {
    var l, a;
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (t.defaultPrevented)
      return;
    t.preventDefault();
    const [n] = this.quill.selection.getRange();
    if (n == null)
      return;
    const {
      html: s,
      text: i
    } = this.onCopy(n, e);
    (l = t.clipboardData) == null || l.setData("text/plain", i), (a = t.clipboardData) == null || a.setData("text/html", s), e && ji({
      range: n,
      quill: this.quill
    });
  }
  onCapturePaste(t) {
    var l, a, c, h;
    if (t.defaultPrevented || !this.quill.isEnabled())
      return;
    t.preventDefault();
    const e = this.quill.getSelection(!0);
    if (e == null)
      return;
    const n = (l = t.clipboardData) == null ? void 0 : l.getData("text/html"), s = (a = t.clipboardData) == null ? void 0 : a.getData("text/plain"), i = Array.from(((c = t.clipboardData) == null ? void 0 : c.files) || []);
    if (!n && i.length > 0) {
      this.quill.uploader.upload(e, i);
      return;
    }
    if (n && i.length > 0) {
      const d = new DOMParser().parseFromString(n, "text/html");
      if (d.body.childElementCount === 1 && ((h = d.body.firstElementChild) == null ? void 0 : h.tagName) === "IMG") {
        this.quill.uploader.upload(e, i);
        return;
      }
    }
    this.onPaste(e, {
      html: n,
      text: s
    });
  }
  onCopy(t) {
    const e = this.quill.getText(t);
    return {
      html: this.quill.getSemanticHTML(t),
      text: e
    };
  }
  onPaste(t, e) {
    let {
      text: n,
      html: s
    } = e;
    const i = this.quill.getFormat(t.index), l = this.convert({
      text: n,
      html: s
    }, i);
    $d.log("onPaste", l, {
      text: n,
      html: s
    });
    const a = new q().retain(t.index).delete(t.length).concat(l);
    this.quill.updateContents(a, A.sources.USER), this.quill.setSelection(a.length() - t.length, A.sources.SILENT), this.quill.scrollSelectionIntoView();
  }
  prepareMatching(t, e) {
    const n = [], s = [];
    return this.matchers.forEach((i) => {
      const [l, a] = i;
      switch (l) {
        case Node.TEXT_NODE:
          s.push(a);
          break;
        case Node.ELEMENT_NODE:
          n.push(a);
          break;
        default:
          Array.from(t.querySelectorAll(l)).forEach((c) => {
            if (e.has(c)) {
              const h = e.get(c);
              h == null || h.push(a);
            } else
              e.set(c, [a]);
          });
          break;
      }
    }), [n, s];
  }
}
Ko.DEFAULTS = {
  matchers: []
};
function xe(r, t, e, n) {
  return n.query(t) ? r.reduce((s, i) => {
    if (i.attributes && i.attributes[t])
      return s.push(i);
    const l = e ? {
      [t]: e
    } : {};
    return s.insert(i.insert, {
      ...l,
      ...i.attributes
    });
  }, new q()) : r;
}
function $n(r, t) {
  let e = "";
  for (let n = r.ops.length - 1; n >= 0 && e.length < t.length; --n) {
    const s = r.ops[n];
    if (typeof s.insert != "string")
      break;
    e = s.insert + e;
  }
  return e.slice(-1 * t.length) === t;
}
function ee(r, t) {
  if (!(r instanceof Element))
    return !1;
  const e = t.query(r);
  return e && e.prototype instanceof at ? !1 : ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(r.tagName.toLowerCase());
}
function Fd(r, t) {
  return r.previousElementSibling && r.nextElementSibling && !ee(r.previousElementSibling, t) && !ee(r.nextElementSibling, t);
}
const vr = /* @__PURE__ */ new WeakMap();
function Go(r) {
  return r == null ? !1 : (vr.has(r) || (r.tagName === "PRE" ? vr.set(r, !0) : vr.set(r, Go(r.parentNode))), vr.get(r));
}
function Di(r, t, e, n, s) {
  return t.nodeType === t.TEXT_NODE ? n.reduce((i, l) => l(t, i, r), new q()) : t.nodeType === t.ELEMENT_NODE ? Array.from(t.childNodes || []).reduce((i, l) => {
    let a = Di(r, l, e, n, s);
    return l.nodeType === t.ELEMENT_NODE && (a = e.reduce((c, h) => h(l, c, r), a), a = (s.get(l) || []).reduce((c, h) => h(l, c, r), a)), i.concat(a);
  }, new q()) : new q();
}
function Fs(r) {
  return (t, e, n) => xe(e, r, !0, n);
}
function Hd(r, t, e) {
  const n = Dt.keys(r), s = St.keys(r), i = le.keys(r), l = {};
  return n.concat(s).concat(i).forEach((a) => {
    let c = e.query(a, C.ATTRIBUTE);
    c != null && (l[c.attrName] = c.value(r), l[c.attrName]) || (c = Ud[a], c != null && (c.attrName === a || c.keyName === a) && (l[c.attrName] = c.value(r) || void 0), c = Rl[a], c != null && (c.attrName === a || c.keyName === a) && (c = Rl[a], l[c.attrName] = c.value(r) || void 0));
  }), Object.entries(l).reduce((a, c) => {
    let [h, d] = c;
    return xe(a, h, d, e);
  }, t);
}
function zd(r, t, e) {
  const n = e.query(r);
  if (n == null)
    return t;
  if (n.prototype instanceof at) {
    const s = {}, i = n.value(r);
    if (i != null)
      return s[n.blotName] = i, new q().insert(s, n.formats(r, e));
  } else if (n.prototype instanceof Cn && !$n(t, `
`) && t.insert(`
`), "blotName" in n && "formats" in n && typeof n.formats == "function")
    return xe(t, n.blotName, n.formats(r, e), e);
  return t;
}
function Kd(r, t) {
  return $n(t, `
`) || t.insert(`
`), t;
}
function Gd(r, t, e) {
  const n = e.query("code-block"), s = n && "formats" in n && typeof n.formats == "function" ? n.formats(r, e) : !0;
  return xe(t, "code-block", s, e);
}
function Vd() {
  return new q();
}
function Wd(r, t, e) {
  const n = e.query(r);
  if (n == null || // @ts-expect-error
  n.blotName !== "list" || !$n(t, `
`))
    return t;
  let s = -1, i = r.parentNode;
  for (; i != null; )
    ["OL", "UL"].includes(i.tagName) && (s += 1), i = i.parentNode;
  return s <= 0 ? t : t.reduce((l, a) => a.attributes && typeof a.attributes.indent == "number" ? l.push(a) : l.insert(a.insert, {
    indent: s,
    ...a.attributes || {}
  }), new q());
}
function Zd(r, t, e) {
  const n = r.tagName === "OL" ? "ordered" : "bullet";
  return xe(t, "list", n, e);
}
function kl(r, t, e) {
  if (!$n(t, `
`)) {
    if (ee(r, e))
      return t.insert(`
`);
    if (t.length() > 0 && r.nextSibling) {
      let n = r.nextSibling;
      for (; n != null; ) {
        if (ee(n, e))
          return t.insert(`
`);
        const s = e.query(n);
        if (s && s.prototype instanceof dt)
          return t.insert(`
`);
        n = n.firstChild;
      }
    }
  }
  return t;
}
function Xd(r, t, e) {
  var i;
  const n = {}, s = r.style || {};
  return s.fontStyle === "italic" && (n.italic = !0), s.textDecoration === "underline" && (n.underline = !0), s.textDecoration === "line-through" && (n.strike = !0), ((i = s.fontWeight) != null && i.startsWith("bold") || // @ts-expect-error Fix me later
  parseInt(s.fontWeight, 10) >= 700) && (n.bold = !0), t = Object.entries(n).reduce((l, a) => {
    let [c, h] = a;
    return xe(l, c, h, e);
  }, t), parseFloat(s.textIndent || 0) > 0 ? new q().insert("	").concat(t) : t;
}
function Yd(r, t, e) {
  var s, i;
  const n = ((s = r.parentElement) == null ? void 0 : s.tagName) === "TABLE" ? r.parentElement : (i = r.parentElement) == null ? void 0 : i.parentElement;
  if (n != null) {
    const a = Array.from(n.querySelectorAll("tr")).indexOf(r) + 1;
    return xe(t, "table", a, e);
  }
  return t;
}
function Jd(r, t, e) {
  var s;
  let n = r.data;
  if (((s = r.parentElement) == null ? void 0 : s.tagName) === "O:P")
    return t.insert(n.trim());
  if (!Go(r)) {
    if (n.trim().length === 0 && n.includes(`
`) && !Fd(r, e))
      return t;
    const i = (l, a) => {
      const c = a.replace(/[^\u00a0]/g, "");
      return c.length < 1 && l ? " " : c;
    };
    n = n.replace(/\r\n/g, " ").replace(/\n/g, " "), n = n.replace(/\s\s+/g, i.bind(i, !0)), (r.previousSibling == null && r.parentElement != null && ee(r.parentElement, e) || r.previousSibling instanceof Element && ee(r.previousSibling, e)) && (n = n.replace(/^\s+/, i.bind(i, !1))), (r.nextSibling == null && r.parentElement != null && ee(r.parentElement, e) || r.nextSibling instanceof Element && ee(r.nextSibling, e)) && (n = n.replace(/\s+$/, i.bind(i, !1)));
  }
  return t.insert(n);
}
class Vo extends Ot {
  constructor(e, n) {
    super(e, n);
    L(this, "lastRecorded", 0);
    L(this, "ignoreChange", !1);
    L(this, "stack", {
      undo: [],
      redo: []
    });
    L(this, "currentRange", null);
    this.quill.on(A.events.EDITOR_CHANGE, (s, i, l, a) => {
      s === A.events.SELECTION_CHANGE ? i && a !== A.sources.SILENT && (this.currentRange = i) : s === A.events.TEXT_CHANGE && (this.ignoreChange || (!this.options.userOnly || a === A.sources.USER ? this.record(i, l) : this.transform(i)), this.currentRange = oi(this.currentRange, i));
    }), this.quill.keyboard.addBinding({
      key: "z",
      shortKey: !0
    }, this.undo.bind(this)), this.quill.keyboard.addBinding({
      key: ["z", "Z"],
      shortKey: !0,
      shiftKey: !0
    }, this.redo.bind(this)), /Win/i.test(navigator.platform) && this.quill.keyboard.addBinding({
      key: "y",
      shortKey: !0
    }, this.redo.bind(this)), this.quill.root.addEventListener("beforeinput", (s) => {
      s.inputType === "historyUndo" ? (this.undo(), s.preventDefault()) : s.inputType === "historyRedo" && (this.redo(), s.preventDefault());
    });
  }
  change(e, n) {
    if (this.stack[e].length === 0)
      return;
    const s = this.stack[e].pop();
    if (!s)
      return;
    const i = this.quill.getContents(), l = s.delta.invert(i);
    this.stack[n].push({
      delta: l,
      range: oi(s.range, l)
    }), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(s.delta, A.sources.USER), this.ignoreChange = !1, this.restoreSelection(s);
  }
  clear() {
    this.stack = {
      undo: [],
      redo: []
    };
  }
  cutoff() {
    this.lastRecorded = 0;
  }
  record(e, n) {
    if (e.ops.length === 0)
      return;
    this.stack.redo = [];
    let s = e.invert(n), i = this.currentRange;
    const l = Date.now();
    if (
      // @ts-expect-error Fix me later
      this.lastRecorded + this.options.delay > l && this.stack.undo.length > 0
    ) {
      const a = this.stack.undo.pop();
      a && (s = s.compose(a.delta), i = a.range);
    } else
      this.lastRecorded = l;
    s.length() !== 0 && (this.stack.undo.push({
      delta: s,
      range: i
    }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift());
  }
  redo() {
    this.change("redo", "undo");
  }
  transform(e) {
    Ml(this.stack.undo, e), Ml(this.stack.redo, e);
  }
  undo() {
    this.change("undo", "redo");
  }
  restoreSelection(e) {
    if (e.range)
      this.quill.setSelection(e.range, A.sources.USER);
    else {
      const n = tp(this.quill.scroll, e.delta);
      this.quill.setSelection(n, A.sources.USER);
    }
  }
}
Vo.DEFAULTS = {
  delay: 1e3,
  maxStack: 100,
  userOnly: !1
};
function Ml(r, t) {
  let e = t;
  for (let n = r.length - 1; n >= 0; n -= 1) {
    const s = r[n];
    r[n] = {
      delta: e.transform(s.delta, !0),
      range: s.range && oi(s.range, e)
    }, e = s.delta.transform(e), r[n].delta.length() === 0 && r.splice(n, 1);
  }
}
function Qd(r, t) {
  const e = t.ops[t.ops.length - 1];
  return e == null ? !1 : e.insert != null ? typeof e.insert == "string" && e.insert.endsWith(`
`) : e.attributes != null ? Object.keys(e.attributes).some((n) => r.query(n, C.BLOCK) != null) : !1;
}
function tp(r, t) {
  const e = t.reduce((s, i) => s + (i.delete || 0), 0);
  let n = t.length() - e;
  return Qd(r, t) && (n -= 1), n;
}
function oi(r, t) {
  if (!r)
    return r;
  const e = t.transformPosition(r.index), n = t.transformPosition(r.index + r.length);
  return {
    index: e,
    length: n - e
  };
}
class Wo extends Ot {
  constructor(t, e) {
    super(t, e), t.root.addEventListener("drop", (n) => {
      var l;
      n.preventDefault();
      let s = null;
      if (document.caretRangeFromPoint)
        s = document.caretRangeFromPoint(n.clientX, n.clientY);
      else if (document.caretPositionFromPoint) {
        const a = document.caretPositionFromPoint(n.clientX, n.clientY);
        s = document.createRange(), s.setStart(a.offsetNode, a.offset), s.setEnd(a.offsetNode, a.offset);
      }
      const i = s && t.selection.normalizeNative(s);
      if (i) {
        const a = t.selection.normalizedToRange(i);
        (l = n.dataTransfer) != null && l.files && this.upload(a, n.dataTransfer.files);
      }
    });
  }
  upload(t, e) {
    const n = [];
    Array.from(e).forEach((s) => {
      var i;
      s && ((i = this.options.mimetypes) != null && i.includes(s.type)) && n.push(s);
    }), n.length > 0 && this.options.handler.call(this, t, n);
  }
}
Wo.DEFAULTS = {
  mimetypes: ["image/png", "image/jpeg"],
  handler(r, t) {
    const e = t.map((n) => new Promise((s) => {
      const i = new FileReader();
      i.onload = (l) => {
        s(l.target.result);
      }, i.readAsDataURL(n);
    }));
    Promise.all(e).then((n) => {
      const s = n.reduce((i, l) => i.insert({
        image: l
      }), new q().retain(r.index).delete(r.length));
      this.quill.updateContents(s, _.sources.USER), this.quill.setSelection(r.index + n.length, _.sources.SILENT);
    });
  }
};
const ep = ["insertText", "insertReplacementText"];
class np extends Ot {
  constructor(t, e) {
    super(t, e), t.root.addEventListener("beforeinput", (n) => {
      this.handleBeforeInput(n);
    }), /Android/i.test(navigator.userAgent) || t.on(A.events.COMPOSITION_BEFORE_START, () => {
      this.handleCompositionStart();
    });
  }
  deleteRange(t) {
    ji({
      range: t,
      quill: this.quill
    });
  }
  replaceText(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    if (t.length === 0)
      return !1;
    if (e) {
      const n = this.quill.getFormat(t.index, 1);
      this.deleteRange(t), this.quill.updateContents(new q().retain(t.index).insert(e, n), A.sources.USER);
    } else
      this.deleteRange(t);
    return this.quill.setSelection(t.index + e.length, 0, A.sources.SILENT), !0;
  }
  handleBeforeInput(t) {
    if (this.quill.composition.isComposing || t.defaultPrevented || !ep.includes(t.inputType))
      return;
    const e = t.getTargetRanges ? t.getTargetRanges()[0] : null;
    if (!e || e.collapsed === !0)
      return;
    const n = rp(t);
    if (n == null)
      return;
    const s = this.quill.selection.normalizeNative(e), i = s ? this.quill.selection.normalizedToRange(s) : null;
    i && this.replaceText(i, n) && t.preventDefault();
  }
  handleCompositionStart() {
    const t = this.quill.getSelection();
    t && this.replaceText(t);
  }
}
function rp(r) {
  var t;
  return typeof r.data == "string" ? r.data : (t = r.dataTransfer) != null && t.types.includes("text/plain") ? r.dataTransfer.getData("text/plain") : null;
}
const sp = /Mac/i.test(navigator.platform), ip = 100, lp = (r) => !!(r.key === "ArrowLeft" || r.key === "ArrowRight" || // RTL scripts or moving from the end of the previous line
r.key === "ArrowUp" || r.key === "ArrowDown" || r.key === "Home" || sp && r.key === "a" && r.ctrlKey === !0);
class op extends Ot {
  constructor(e, n) {
    super(e, n);
    L(this, "isListening", !1);
    L(this, "selectionChangeDeadline", 0);
    this.handleArrowKeys(), this.handleNavigationShortcuts();
  }
  handleArrowKeys() {
    this.quill.keyboard.addBinding({
      key: ["ArrowLeft", "ArrowRight"],
      offset: 0,
      shiftKey: null,
      handler(e, n) {
        let {
          line: s,
          event: i
        } = n;
        if (!(s instanceof Tt) || !s.uiNode)
          return !0;
        const l = getComputedStyle(s.domNode).direction === "rtl";
        return l && i.key !== "ArrowRight" || !l && i.key !== "ArrowLeft" ? !0 : (this.quill.setSelection(e.index - 1, e.length + (i.shiftKey ? 1 : 0), A.sources.USER), !1);
      }
    });
  }
  handleNavigationShortcuts() {
    this.quill.root.addEventListener("keydown", (e) => {
      !e.defaultPrevented && lp(e) && this.ensureListeningToSelectionChange();
    });
  }
  /**
   * We only listen to the `selectionchange` event when
   * there is an intention of moving the caret to the beginning using shortcuts.
   * This is primarily implemented to prevent infinite loops, as we are changing
   * the selection within the handler of a `selectionchange` event.
   */
  ensureListeningToSelectionChange() {
    if (this.selectionChangeDeadline = Date.now() + ip, this.isListening)
      return;
    this.isListening = !0;
    const e = () => {
      this.isListening = !1, Date.now() <= this.selectionChangeDeadline && this.handleSelectionChange();
    };
    document.addEventListener("selectionchange", e, {
      once: !0
    });
  }
  handleSelectionChange() {
    const e = document.getSelection();
    if (!e)
      return;
    const n = e.getRangeAt(0);
    if (n.collapsed !== !0 || n.startOffset !== 0)
      return;
    const s = this.quill.scroll.find(n.startContainer);
    if (!(s instanceof Tt) || !s.uiNode)
      return;
    const i = document.createRange();
    i.setStartAfter(s.uiNode), i.setEndAfter(s.uiNode), e.removeAllRanges(), e.addRange(i);
  }
}
A.register({
  "blots/block": Y,
  "blots/block/embed": dt,
  "blots/break": Lt,
  "blots/container": we,
  "blots/cursor": Ve,
  "blots/embed": Ci,
  "blots/inline": $t,
  "blots/scroll": ze,
  "blots/text": xt,
  "modules/clipboard": Ko,
  "modules/history": Vo,
  "modules/keyboard": $r,
  "modules/uploader": Wo,
  "modules/input": np,
  "modules/uiNode": op
});
class ap extends St {
  add(t, e) {
    let n = 0;
    if (e === "+1" || e === "-1") {
      const s = this.value(t) || 0;
      n = e === "+1" ? s + 1 : s - 1;
    } else
      typeof e == "number" && (n = e);
    return n === 0 ? (this.remove(t), !0) : super.add(t, n.toString());
  }
  canAdd(t, e) {
    return super.canAdd(t, e) || super.canAdd(t, parseInt(e, 10));
  }
  value(t) {
    return parseInt(super.value(t), 10) || void 0;
  }
}
const cp = new ap("indent", "ql-indent", {
  scope: C.BLOCK,
  // @ts-expect-error
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});
class ai extends Y {
}
L(ai, "blotName", "blockquote"), L(ai, "tagName", "blockquote");
class ci extends Y {
  static formats(t) {
    return this.tagName.indexOf(t.tagName) + 1;
  }
}
L(ci, "blotName", "header"), L(ci, "tagName", ["H1", "H2", "H3", "H4", "H5", "H6"]);
class Pn extends we {
}
Pn.blotName = "list-container";
Pn.tagName = "OL";
class Un extends Y {
  static create(t) {
    const e = super.create();
    return e.setAttribute("data-list", t), e;
  }
  static formats(t) {
    return t.getAttribute("data-list") || void 0;
  }
  static register() {
    A.register(Pn);
  }
  constructor(t, e) {
    super(t, e);
    const n = e.ownerDocument.createElement("span"), s = (i) => {
      if (!t.isEnabled())
        return;
      const l = this.statics.formats(e, t);
      l === "checked" ? (this.format("list", "unchecked"), i.preventDefault()) : l === "unchecked" && (this.format("list", "checked"), i.preventDefault());
    };
    n.addEventListener("mousedown", s), n.addEventListener("touchstart", s), this.attachUI(n);
  }
  format(t, e) {
    t === this.statics.blotName && e ? this.domNode.setAttribute("data-list", e) : super.format(t, e);
  }
}
Un.blotName = "list";
Un.tagName = "LI";
Pn.allowedChildren = [Un];
Un.requiredContainer = Pn;
class kn extends $t {
  static create() {
    return super.create();
  }
  static formats() {
    return !0;
  }
  optimize(t) {
    super.optimize(t), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
  }
}
L(kn, "blotName", "bold"), L(kn, "tagName", ["STRONG", "B"]);
class ui extends kn {
}
L(ui, "blotName", "italic"), L(ui, "tagName", ["EM", "I"]);
class ne extends $t {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("href", this.sanitize(t)), e.setAttribute("rel", "noopener noreferrer"), e.setAttribute("target", "_blank"), e;
  }
  static formats(t) {
    return t.getAttribute("href");
  }
  static sanitize(t) {
    return Zo(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL;
  }
  format(t, e) {
    t !== this.statics.blotName || !e ? super.format(t, e) : this.domNode.setAttribute("href", this.constructor.sanitize(e));
  }
}
L(ne, "blotName", "link"), L(ne, "tagName", "A"), L(ne, "SANITIZED_URL", "about:blank"), L(ne, "PROTOCOL_WHITELIST", ["http", "https", "mailto", "tel", "sms"]);
function Zo(r, t) {
  const e = document.createElement("a");
  e.href = r;
  const n = e.href.slice(0, e.href.indexOf(":"));
  return t.indexOf(n) > -1;
}
class hi extends $t {
  static create(t) {
    return t === "super" ? document.createElement("sup") : t === "sub" ? document.createElement("sub") : super.create(t);
  }
  static formats(t) {
    if (t.tagName === "SUB")
      return "sub";
    if (t.tagName === "SUP")
      return "super";
  }
}
L(hi, "blotName", "script"), L(hi, "tagName", ["SUB", "SUP"]);
class fi extends kn {
}
L(fi, "blotName", "strike"), L(fi, "tagName", ["S", "STRIKE"]);
class di extends $t {
}
L(di, "blotName", "underline"), L(di, "tagName", "U");
class Nr extends Ci {
  static create(t) {
    if (window.katex == null)
      throw new Error("Formula module requires KaTeX.");
    const e = super.create(t);
    return typeof t == "string" && (window.katex.render(t, e, {
      throwOnError: !1,
      errorColor: "#f00"
    }), e.setAttribute("data-value", t)), e;
  }
  static value(t) {
    return t.getAttribute("data-value");
  }
  html() {
    const {
      formula: t
    } = this.value();
    return `<span>${t}</span>`;
  }
}
L(Nr, "blotName", "formula"), L(Nr, "className", "ql-formula"), L(Nr, "tagName", "SPAN");
const Bl = ["alt", "height", "width"];
class pi extends at {
  static create(t) {
    const e = super.create(t);
    return typeof t == "string" && e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return Bl.reduce((e, n) => (t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e), {});
  }
  static match(t) {
    return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t);
  }
  static register() {
    /Firefox/i.test(navigator.userAgent) && setTimeout(() => {
      document.execCommand("enableObjectResizing", !1, !1);
    }, 1);
  }
  static sanitize(t) {
    return Zo(t, ["http", "https", "data"]) ? t : "//:0";
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    Bl.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e);
  }
}
L(pi, "blotName", "image"), L(pi, "tagName", "IMG");
const jl = ["height", "width"];
class wr extends dt {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", "true"), e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return jl.reduce((e, n) => (t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e), {});
  }
  static sanitize(t) {
    return ne.sanitize(t);
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    jl.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e);
  }
  html() {
    const {
      video: t
    } = this.value();
    return `<a href="${t}">${t}</a>`;
  }
}
L(wr, "blotName", "video"), L(wr, "className", "ql-video"), L(wr, "tagName", "IFRAME");
const An = new St("code-token", "hljs", {
  scope: C.INLINE
});
class Vt extends $t {
  static formats(t, e) {
    for (; t != null && t !== e.domNode; ) {
      if (t.classList && t.classList.contains(nt.className))
        return super.formats(t, e);
      t = t.parentNode;
    }
  }
  constructor(t, e, n) {
    super(t, e, n), An.add(this.domNode, n);
  }
  format(t, e) {
    t !== Vt.blotName ? super.format(t, e) : e ? An.add(this.domNode, e) : (An.remove(this.domNode), this.domNode.classList.remove(this.statics.className));
  }
  optimize() {
    super.optimize(...arguments), An.value(this.domNode) || this.unwrap();
  }
}
Vt.blotName = "code-token";
Vt.className = "ql-token";
class ft extends nt {
  static create(t) {
    const e = super.create(t);
    return typeof t == "string" && e.setAttribute("data-language", t), e;
  }
  static formats(t) {
    return t.getAttribute("data-language") || "plain";
  }
  static register() {
  }
  // Syntax module will register
  format(t, e) {
    t === this.statics.blotName && e ? this.domNode.setAttribute("data-language", e) : super.format(t, e);
  }
  replaceWith(t, e) {
    return this.formatAt(0, this.length(), Vt.blotName, !1), super.replaceWith(t, e);
  }
}
class wn extends Te {
  attach() {
    super.attach(), this.forceNext = !1, this.scroll.emitMount(this);
  }
  format(t, e) {
    t === ft.blotName && (this.forceNext = !0, this.children.forEach((n) => {
      n.format(t, e);
    }));
  }
  formatAt(t, e, n, s) {
    n === ft.blotName && (this.forceNext = !0), super.formatAt(t, e, n, s);
  }
  highlight(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.children.head == null)
      return;
    const s = `${Array.from(this.domNode.childNodes).filter((l) => l !== this.uiNode).map((l) => l.textContent).join(`
`)}
`, i = ft.formats(this.children.head.domNode);
    if (e || this.forceNext || this.cachedText !== s) {
      if (s.trim().length > 0 || this.cachedText == null) {
        const l = this.children.reduce((c, h) => c.concat(Co(h, !1)), new q()), a = t(s, i);
        l.diff(a).reduce((c, h) => {
          let {
            retain: d,
            attributes: b
          } = h;
          return d ? (b && Object.keys(b).forEach((p) => {
            [ft.blotName, Vt.blotName].includes(p) && this.formatAt(c, d, p, b[p]);
          }), c + d) : c;
        }, 0);
      }
      this.cachedText = s, this.forceNext = !1;
    }
  }
  html(t, e) {
    const [n] = this.children.find(t);
    return `<pre data-language="${n ? ft.formats(n.domNode) : "plain"}">
${Dr(this.code(t, e))}
</pre>`;
  }
  optimize(t) {
    if (super.optimize(t), this.parent != null && this.children.head != null && this.uiNode != null) {
      const e = ft.formats(this.children.head.domNode);
      e !== this.uiNode.value && (this.uiNode.value = e);
    }
  }
}
wn.allowedChildren = [ft];
ft.requiredContainer = wn;
ft.allowedChildren = [Vt, Ve, xt, Lt];
const up = (r, t, e) => {
  if (typeof r.versionString == "string") {
    const n = r.versionString.split(".")[0];
    if (parseInt(n, 10) >= 11)
      return r.highlight(e, {
        language: t
      }).value;
  }
  return r.highlight(t, e).value;
};
class Xo extends Ot {
  static register() {
    A.register(Vt, !0), A.register(ft, !0), A.register(wn, !0);
  }
  constructor(t, e) {
    if (super(t, e), this.options.hljs == null)
      throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
    this.languages = this.options.languages.reduce((n, s) => {
      let {
        key: i
      } = s;
      return n[i] = !0, n;
    }, {}), this.highlightBlot = this.highlightBlot.bind(this), this.initListener(), this.initTimer();
  }
  initListener() {
    this.quill.on(A.events.SCROLL_BLOT_MOUNT, (t) => {
      if (!(t instanceof wn))
        return;
      const e = this.quill.root.ownerDocument.createElement("select");
      this.options.languages.forEach((n) => {
        let {
          key: s,
          label: i
        } = n;
        const l = e.ownerDocument.createElement("option");
        l.textContent = i, l.setAttribute("value", s), e.appendChild(l);
      }), e.addEventListener("change", () => {
        t.format(ft.blotName, e.value), this.quill.root.focus(), this.highlight(t, !0);
      }), t.uiNode == null && (t.attachUI(e), t.children.head && (e.value = ft.formats(t.children.head.domNode)));
    });
  }
  initTimer() {
    let t = null;
    this.quill.on(A.events.SCROLL_OPTIMIZE, () => {
      t && clearTimeout(t), t = setTimeout(() => {
        this.highlight(), t = null;
      }, this.options.interval);
    });
  }
  highlight() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.quill.selection.composing)
      return;
    this.quill.update(A.sources.USER);
    const n = this.quill.getSelection();
    (t == null ? this.quill.scroll.descendants(wn) : [t]).forEach((i) => {
      i.highlight(this.highlightBlot, e);
    }), this.quill.update(A.sources.SILENT), n != null && this.quill.setSelection(n, A.sources.SILENT);
  }
  highlightBlot(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "plain";
    if (e = this.languages[e] ? e : "plain", e === "plain")
      return Dr(t).split(`
`).reduce((s, i, l) => (l !== 0 && s.insert(`
`, {
        [nt.blotName]: e
      }), s.insert(i)), new q());
    const n = this.quill.root.ownerDocument.createElement("div");
    return n.classList.add(nt.className), n.innerHTML = up(this.options.hljs, e, t), Di(this.quill.scroll, n, [(s, i) => {
      const l = An.value(s);
      return l ? i.compose(new q().retain(i.length(), {
        [Vt.blotName]: l
      })) : i;
    }], [(s, i) => s.data.split(`
`).reduce((l, a, c) => (c !== 0 && l.insert(`
`, {
      [nt.blotName]: e
    }), l.insert(a)), i)], /* @__PURE__ */ new WeakMap());
  }
}
Xo.DEFAULTS = {
  hljs: window.hljs,
  interval: 1e3,
  languages: [{
    key: "plain",
    label: "Plain"
  }, {
    key: "bash",
    label: "Bash"
  }, {
    key: "cpp",
    label: "C++"
  }, {
    key: "cs",
    label: "C#"
  }, {
    key: "css",
    label: "CSS"
  }, {
    key: "diff",
    label: "Diff"
  }, {
    key: "xml",
    label: "HTML/XML"
  }, {
    key: "java",
    label: "Java"
  }, {
    key: "javascript",
    label: "JavaScript"
  }, {
    key: "markdown",
    label: "Markdown"
  }, {
    key: "php",
    label: "PHP"
  }, {
    key: "python",
    label: "Python"
  }, {
    key: "ruby",
    label: "Ruby"
  }, {
    key: "sql",
    label: "SQL"
  }]
};
const xn = class xn extends Y {
  static create(t) {
    const e = super.create();
    return t ? e.setAttribute("data-row", t) : e.setAttribute("data-row", $i()), e;
  }
  static formats(t) {
    if (t.hasAttribute("data-row"))
      return t.getAttribute("data-row");
  }
  cellOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  format(t, e) {
    t === xn.blotName && e ? this.domNode.setAttribute("data-row", e) : super.format(t, e);
  }
  row() {
    return this.parent;
  }
  rowOffset() {
    return this.row() ? this.row().rowOffset() : -1;
  }
  table() {
    return this.row() && this.row().table();
  }
};
L(xn, "blotName", "table"), L(xn, "tagName", "TD");
let wt = xn;
class Wt extends we {
  checkMerge() {
    if (super.checkMerge() && this.next.children.head != null) {
      const t = this.children.head.formats(), e = this.children.tail.formats(), n = this.next.children.head.formats(), s = this.next.children.tail.formats();
      return t.table === e.table && t.table === n.table && t.table === s.table;
    }
    return !1;
  }
  optimize(t) {
    super.optimize(t), this.children.forEach((e) => {
      if (e.next == null)
        return;
      const n = e.formats(), s = e.next.formats();
      if (n.table !== s.table) {
        const i = this.splitAfter(e);
        i && i.optimize(), this.prev && this.prev.optimize();
      }
    });
  }
  rowOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  table() {
    return this.parent && this.parent.parent;
  }
}
L(Wt, "blotName", "table-row"), L(Wt, "tagName", "TR");
class jt extends we {
}
L(jt, "blotName", "table-body"), L(jt, "tagName", "TBODY");
class Ze extends we {
  balanceCells() {
    const t = this.descendants(Wt), e = t.reduce((n, s) => Math.max(s.children.length, n), 0);
    t.forEach((n) => {
      new Array(e - n.children.length).fill(0).forEach(() => {
        let s;
        n.children.head != null && (s = wt.formats(n.children.head.domNode));
        const i = this.scroll.create(wt.blotName, s);
        n.appendChild(i), i.optimize();
      });
    });
  }
  cells(t) {
    return this.rows().map((e) => e.children.at(t));
  }
  deleteColumn(t) {
    const [e] = this.descendant(jt);
    e == null || e.children.head == null || e.children.forEach((n) => {
      const s = n.children.at(t);
      s != null && s.remove();
    });
  }
  insertColumn(t) {
    const [e] = this.descendant(jt);
    e == null || e.children.head == null || e.children.forEach((n) => {
      const s = n.children.at(t), i = wt.formats(n.children.head.domNode), l = this.scroll.create(wt.blotName, i);
      n.insertBefore(l, s);
    });
  }
  insertRow(t) {
    const [e] = this.descendant(jt);
    if (e == null || e.children.head == null)
      return;
    const n = $i(), s = this.scroll.create(Wt.blotName);
    e.children.head.children.forEach(() => {
      const l = this.scroll.create(wt.blotName, n);
      s.appendChild(l);
    });
    const i = e.children.at(t);
    e.insertBefore(s, i);
  }
  rows() {
    const t = this.children.head;
    return t == null ? [] : t.children.map((e) => e);
  }
}
L(Ze, "blotName", "table-container"), L(Ze, "tagName", "TABLE");
Ze.allowedChildren = [jt];
jt.requiredContainer = Ze;
jt.allowedChildren = [Wt];
Wt.requiredContainer = jt;
Wt.allowedChildren = [wt];
wt.requiredContainer = Wt;
function $i() {
  return `row-${Math.random().toString(36).slice(2, 6)}`;
}
class hp extends Ot {
  static register() {
    A.register(wt), A.register(Wt), A.register(jt), A.register(Ze);
  }
  constructor() {
    super(...arguments), this.listenBalanceCells();
  }
  balanceTables() {
    this.quill.scroll.descendants(Ze).forEach((t) => {
      t.balanceCells();
    });
  }
  deleteColumn() {
    const [t, , e] = this.getTable();
    e != null && (t.deleteColumn(e.cellOffset()), this.quill.update(A.sources.USER));
  }
  deleteRow() {
    const [, t] = this.getTable();
    t != null && (t.remove(), this.quill.update(A.sources.USER));
  }
  deleteTable() {
    const [t] = this.getTable();
    if (t == null)
      return;
    const e = t.offset();
    t.remove(), this.quill.update(A.sources.USER), this.quill.setSelection(e, A.sources.SILENT);
  }
  getTable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.quill.getSelection();
    if (t == null)
      return [null, null, null, -1];
    const [e, n] = this.quill.getLine(t.index);
    if (e == null || e.statics.blotName !== wt.blotName)
      return [null, null, null, -1];
    const s = e.parent;
    return [s.parent.parent, s, e, n];
  }
  insertColumn(t) {
    const e = this.quill.getSelection();
    if (!e)
      return;
    const [n, s, i] = this.getTable(e);
    if (i == null)
      return;
    const l = i.cellOffset();
    n.insertColumn(l + t), this.quill.update(A.sources.USER);
    let a = s.rowOffset();
    t === 0 && (a += 1), this.quill.setSelection(e.index + a, e.length, A.sources.SILENT);
  }
  insertColumnLeft() {
    this.insertColumn(0);
  }
  insertColumnRight() {
    this.insertColumn(1);
  }
  insertRow(t) {
    const e = this.quill.getSelection();
    if (!e)
      return;
    const [n, s, i] = this.getTable(e);
    if (i == null)
      return;
    const l = s.rowOffset();
    n.insertRow(l + t), this.quill.update(A.sources.USER), t > 0 ? this.quill.setSelection(e, A.sources.SILENT) : this.quill.setSelection(e.index + s.children.length, e.length, A.sources.SILENT);
  }
  insertRowAbove() {
    this.insertRow(0);
  }
  insertRowBelow() {
    this.insertRow(1);
  }
  insertTable(t, e) {
    const n = this.quill.getSelection();
    if (n == null)
      return;
    const s = new Array(t).fill(0).reduce((i) => {
      const l = new Array(e).fill(`
`).join("");
      return i.insert(l, {
        table: $i()
      });
    }, new q().retain(n.index));
    this.quill.updateContents(s, A.sources.USER), this.quill.setSelection(n.index, A.sources.SILENT), this.balanceTables();
  }
  listenBalanceCells() {
    this.quill.on(A.events.SCROLL_OPTIMIZE, (t) => {
      t.some((e) => ["TD", "TR", "TBODY", "TABLE"].includes(e.target.tagName) ? (this.quill.once(A.events.TEXT_CHANGE, (n, s, i) => {
        i === A.sources.USER && this.balanceTables();
      }), !0) : !1);
    });
  }
}
const Dl = Xt("quill:toolbar");
class Pi extends Ot {
  constructor(t, e) {
    var n, s;
    if (super(t, e), Array.isArray(this.options.container)) {
      const i = document.createElement("div");
      i.setAttribute("role", "toolbar"), fp(i, this.options.container), (s = (n = t.container) == null ? void 0 : n.parentNode) == null || s.insertBefore(i, t.container), this.container = i;
    } else
      typeof this.options.container == "string" ? this.container = document.querySelector(this.options.container) : this.container = this.options.container;
    if (!(this.container instanceof HTMLElement)) {
      Dl.error("Container required for toolbar", this.options);
      return;
    }
    this.container.classList.add("ql-toolbar"), this.controls = [], this.handlers = {}, this.options.handlers && Object.keys(this.options.handlers).forEach((i) => {
      var a;
      const l = (a = this.options.handlers) == null ? void 0 : a[i];
      l && this.addHandler(i, l);
    }), Array.from(this.container.querySelectorAll("button, select")).forEach((i) => {
      this.attach(i);
    }), this.quill.on(A.events.EDITOR_CHANGE, () => {
      const [i] = this.quill.selection.getRange();
      this.update(i);
    });
  }
  addHandler(t, e) {
    this.handlers[t] = e;
  }
  attach(t) {
    let e = Array.from(t.classList).find((s) => s.indexOf("ql-") === 0);
    if (!e)
      return;
    if (e = e.slice(3), t.tagName === "BUTTON" && t.setAttribute("type", "button"), this.handlers[e] == null && this.quill.scroll.query(e) == null) {
      Dl.warn("ignoring attaching to nonexistent format", e, t);
      return;
    }
    const n = t.tagName === "SELECT" ? "change" : "click";
    t.addEventListener(n, (s) => {
      let i;
      if (t.tagName === "SELECT") {
        if (t.selectedIndex < 0)
          return;
        const a = t.options[t.selectedIndex];
        a.hasAttribute("selected") ? i = !1 : i = a.value || !1;
      } else
        t.classList.contains("ql-active") ? i = !1 : i = t.value || !t.hasAttribute("value"), s.preventDefault();
      this.quill.focus();
      const [l] = this.quill.selection.getRange();
      if (this.handlers[e] != null)
        this.handlers[e].call(this, i);
      else if (
        // @ts-expect-error
        this.quill.scroll.query(e).prototype instanceof at
      ) {
        if (i = prompt(`Enter ${e}`), !i)
          return;
        this.quill.updateContents(new q().retain(l.index).delete(l.length).insert({
          [e]: i
        }), A.sources.USER);
      } else
        this.quill.format(e, i, A.sources.USER);
      this.update(l);
    }), this.controls.push([e, t]);
  }
  update(t) {
    const e = t == null ? {} : this.quill.getFormat(t);
    this.controls.forEach((n) => {
      const [s, i] = n;
      if (i.tagName === "SELECT") {
        let l = null;
        if (t == null)
          l = null;
        else if (e[s] == null)
          l = i.querySelector("option[selected]");
        else if (!Array.isArray(e[s])) {
          let a = e[s];
          typeof a == "string" && (a = a.replace(/"/g, '\\"')), l = i.querySelector(`option[value="${a}"]`);
        }
        l == null ? (i.value = "", i.selectedIndex = -1) : l.selected = !0;
      } else if (t == null)
        i.classList.remove("ql-active"), i.setAttribute("aria-pressed", "false");
      else if (i.hasAttribute("value")) {
        const l = e[s], a = l === i.getAttribute("value") || l != null && l.toString() === i.getAttribute("value") || l == null && !i.getAttribute("value");
        i.classList.toggle("ql-active", a), i.setAttribute("aria-pressed", a.toString());
      } else {
        const l = e[s] != null;
        i.classList.toggle("ql-active", l), i.setAttribute("aria-pressed", l.toString());
      }
    });
  }
}
Pi.DEFAULTS = {};
function $l(r, t, e) {
  const n = document.createElement("button");
  n.setAttribute("type", "button"), n.classList.add(`ql-${t}`), n.setAttribute("aria-pressed", "false"), e != null ? (n.value = e, n.setAttribute("aria-label", `${t}: ${e}`)) : n.setAttribute("aria-label", t), r.appendChild(n);
}
function fp(r, t) {
  Array.isArray(t[0]) || (t = [t]), t.forEach((e) => {
    const n = document.createElement("span");
    n.classList.add("ql-formats"), e.forEach((s) => {
      if (typeof s == "string")
        $l(n, s);
      else {
        const i = Object.keys(s)[0], l = s[i];
        Array.isArray(l) ? dp(n, i, l) : $l(n, i, l);
      }
    }), r.appendChild(n);
  });
}
function dp(r, t, e) {
  const n = document.createElement("select");
  n.classList.add(`ql-${t}`), e.forEach((s) => {
    const i = document.createElement("option");
    s !== !1 ? i.setAttribute("value", String(s)) : i.setAttribute("selected", "selected"), n.appendChild(i);
  }), r.appendChild(n);
}
Pi.DEFAULTS = {
  container: null,
  handlers: {
    clean() {
      const r = this.quill.getSelection();
      if (r != null)
        if (r.length === 0) {
          const t = this.quill.getFormat();
          Object.keys(t).forEach((e) => {
            this.quill.scroll.query(e, C.INLINE) != null && this.quill.format(e, !1, A.sources.USER);
          });
        } else
          this.quill.removeFormat(r, A.sources.USER);
    },
    direction(r) {
      const {
        align: t
      } = this.quill.getFormat();
      r === "rtl" && t == null ? this.quill.format("align", "right", A.sources.USER) : !r && t === "right" && this.quill.format("align", !1, A.sources.USER), this.quill.format("direction", r, A.sources.USER);
    },
    indent(r) {
      const t = this.quill.getSelection(), e = this.quill.getFormat(t), n = parseInt(e.indent || 0, 10);
      if (r === "+1" || r === "-1") {
        let s = r === "+1" ? 1 : -1;
        e.direction === "rtl" && (s *= -1), this.quill.format("indent", n + s, A.sources.USER);
      }
    },
    link(r) {
      r === !0 && (r = prompt("Enter link URL:")), this.quill.format("link", r, A.sources.USER);
    },
    list(r) {
      const t = this.quill.getSelection(), e = this.quill.getFormat(t);
      r === "check" ? e.list === "checked" || e.list === "unchecked" ? this.quill.format("list", !1, A.sources.USER) : this.quill.format("list", "unchecked", A.sources.USER) : this.quill.format("list", r, A.sources.USER);
    }
  }
};
const pp = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>', gp = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>', mp = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>', bp = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>', yp = '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>', vp = '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>', Ep = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>', Ap = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>', Pl = '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>', Np = '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>', wp = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>', Tp = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>', xp = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>', Sp = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>', Lp = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', Op = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>', _p = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>', qp = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>', Cp = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>', Ip = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>', Rp = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>', kp = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>', Mp = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>', Bp = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>', jp = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>', Dp = '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>', $p = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>', Pp = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>', Up = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>', Mn = {
  align: {
    "": pp,
    center: gp,
    right: mp,
    justify: bp
  },
  background: yp,
  blockquote: vp,
  bold: Ep,
  clean: Ap,
  code: Pl,
  "code-block": Pl,
  color: Np,
  direction: {
    "": wp,
    rtl: Tp
  },
  formula: xp,
  header: {
    1: Sp,
    2: Lp
  },
  italic: Op,
  image: _p,
  indent: {
    "+1": qp,
    "-1": Cp
  },
  link: Ip,
  list: {
    bullet: Rp,
    check: kp,
    ordered: Mp
  },
  script: {
    sub: Bp,
    super: jp
  },
  strike: Dp,
  table: $p,
  underline: Pp,
  video: Up
}, Fp = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>';
let Ul = 0;
function Fl(r, t) {
  r.setAttribute(t, `${r.getAttribute(t) !== "true"}`);
}
class Pr {
  constructor(t) {
    this.select = t, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", () => {
      this.togglePicker();
    }), this.label.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "Enter":
          this.togglePicker();
          break;
        case "Escape":
          this.escape(), e.preventDefault();
          break;
      }
    }), this.select.addEventListener("change", this.update.bind(this));
  }
  togglePicker() {
    this.container.classList.toggle("ql-expanded"), Fl(this.label, "aria-expanded"), Fl(this.options, "aria-hidden");
  }
  buildItem(t) {
    const e = document.createElement("span");
    e.tabIndex = "0", e.setAttribute("role", "button"), e.classList.add("ql-picker-item");
    const n = t.getAttribute("value");
    return n && e.setAttribute("data-value", n), t.textContent && e.setAttribute("data-label", t.textContent), e.addEventListener("click", () => {
      this.selectItem(e, !0);
    }), e.addEventListener("keydown", (s) => {
      switch (s.key) {
        case "Enter":
          this.selectItem(e, !0), s.preventDefault();
          break;
        case "Escape":
          this.escape(), s.preventDefault();
          break;
      }
    }), e;
  }
  buildLabel() {
    const t = document.createElement("span");
    return t.classList.add("ql-picker-label"), t.innerHTML = Fp, t.tabIndex = "0", t.setAttribute("role", "button"), t.setAttribute("aria-expanded", "false"), this.container.appendChild(t), t;
  }
  buildOptions() {
    const t = document.createElement("span");
    t.classList.add("ql-picker-options"), t.setAttribute("aria-hidden", "true"), t.tabIndex = "-1", t.id = `ql-picker-options-${Ul}`, Ul += 1, this.label.setAttribute("aria-controls", t.id), this.options = t, Array.from(this.select.options).forEach((e) => {
      const n = this.buildItem(e);
      t.appendChild(n), e.selected === !0 && this.selectItem(n);
    }), this.container.appendChild(t);
  }
  buildPicker() {
    Array.from(this.select.attributes).forEach((t) => {
      this.container.setAttribute(t.name, t.value);
    }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
  }
  escape() {
    this.close(), setTimeout(() => this.label.focus(), 1);
  }
  close() {
    this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
  }
  selectItem(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const n = this.container.querySelector(".ql-selected");
    t !== n && (n != null && n.classList.remove("ql-selected"), t != null && (t.classList.add("ql-selected"), this.select.selectedIndex = Array.from(t.parentNode.children).indexOf(t), t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e && (this.select.dispatchEvent(new Event("change")), this.close())));
  }
  update() {
    let t;
    if (this.select.selectedIndex > -1) {
      const n = (
        // @ts-expect-error Fix me later
        this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex]
      );
      t = this.select.options[this.select.selectedIndex], this.selectItem(n);
    } else
      this.selectItem(null);
    const e = t != null && t !== this.select.querySelector("option[selected]");
    this.label.classList.toggle("ql-active", e);
  }
}
class Yo extends Pr {
  constructor(t, e) {
    super(t), this.label.innerHTML = e, this.container.classList.add("ql-color-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0, 7).forEach((n) => {
      n.classList.add("ql-primary");
    });
  }
  buildItem(t) {
    const e = super.buildItem(t);
    return e.style.backgroundColor = t.getAttribute("value") || "", e;
  }
  selectItem(t, e) {
    super.selectItem(t, e);
    const n = this.label.querySelector(".ql-color-label"), s = t && t.getAttribute("data-value") || "";
    n && (n.tagName === "line" ? n.style.stroke = s : n.style.fill = s);
  }
}
class Jo extends Pr {
  constructor(t, e) {
    super(t), this.container.classList.add("ql-icon-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach((n) => {
      n.innerHTML = e[n.getAttribute("data-value") || ""];
    }), this.defaultItem = this.container.querySelector(".ql-selected"), this.selectItem(this.defaultItem);
  }
  selectItem(t, e) {
    super.selectItem(t, e);
    const n = t || this.defaultItem;
    if (n != null) {
      if (this.label.innerHTML === n.innerHTML)
        return;
      this.label.innerHTML = n.innerHTML;
    }
  }
}
const Hp = (r) => {
  const {
    overflowY: t
  } = getComputedStyle(r, null);
  return t !== "visible" && t !== "clip";
};
class Qo {
  constructor(t, e) {
    this.quill = t, this.boundsContainer = e || document.body, this.root = t.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, Hp(this.quill.root) && this.quill.root.addEventListener("scroll", () => {
      this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
    }), this.hide();
  }
  hide() {
    this.root.classList.add("ql-hidden");
  }
  position(t) {
    const e = t.left + t.width / 2 - this.root.offsetWidth / 2, n = t.bottom + this.quill.root.scrollTop;
    this.root.style.left = `${e}px`, this.root.style.top = `${n}px`, this.root.classList.remove("ql-flip");
    const s = this.boundsContainer.getBoundingClientRect(), i = this.root.getBoundingClientRect();
    let l = 0;
    if (i.right > s.right && (l = s.right - i.right, this.root.style.left = `${e + l}px`), i.left < s.left && (l = s.left - i.left, this.root.style.left = `${e + l}px`), i.bottom > s.bottom) {
      const a = i.bottom - i.top, c = t.bottom - t.top + a;
      this.root.style.top = `${n - c}px`, this.root.classList.add("ql-flip");
    }
    return l;
  }
  show() {
    this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
  }
}
const zp = [!1, "center", "right", "justify"], Kp = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], Gp = [!1, "serif", "monospace"], Vp = ["1", "2", "3", !1], Wp = ["small", !1, "large", "huge"];
class Fn extends We {
  constructor(t, e) {
    super(t, e);
    const n = (s) => {
      if (!document.body.contains(t.root)) {
        document.body.removeEventListener("click", n);
        return;
      }
      this.tooltip != null && // @ts-expect-error
      !this.tooltip.root.contains(s.target) && // @ts-expect-error
      document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus() && this.tooltip.hide(), this.pickers != null && this.pickers.forEach((i) => {
        i.container.contains(s.target) || i.close();
      });
    };
    t.emitter.listenDOM("click", document.body, n);
  }
  addModule(t) {
    const e = super.addModule(t);
    return t === "toolbar" && this.extendToolbar(e), e;
  }
  buildButtons(t, e) {
    Array.from(t).forEach((n) => {
      (n.getAttribute("class") || "").split(/\s+/).forEach((i) => {
        if (i.startsWith("ql-") && (i = i.slice(3), e[i] != null))
          if (i === "direction")
            n.innerHTML = e[i][""] + e[i].rtl;
          else if (typeof e[i] == "string")
            n.innerHTML = e[i];
          else {
            const l = n.value || "";
            l != null && e[i][l] && (n.innerHTML = e[i][l]);
          }
      });
    });
  }
  buildPickers(t, e) {
    this.pickers = Array.from(t).map((s) => {
      if (s.classList.contains("ql-align") && (s.querySelector("option") == null && En(s, zp), typeof e.align == "object"))
        return new Jo(s, e.align);
      if (s.classList.contains("ql-background") || s.classList.contains("ql-color")) {
        const i = s.classList.contains("ql-background") ? "background" : "color";
        return s.querySelector("option") == null && En(s, Kp, i === "background" ? "#ffffff" : "#000000"), new Yo(s, e[i]);
      }
      return s.querySelector("option") == null && (s.classList.contains("ql-font") ? En(s, Gp) : s.classList.contains("ql-header") ? En(s, Vp) : s.classList.contains("ql-size") && En(s, Wp)), new Pr(s);
    });
    const n = () => {
      this.pickers.forEach((s) => {
        s.update();
      });
    };
    this.quill.on(_.events.EDITOR_CHANGE, n);
  }
}
Fn.DEFAULTS = re({}, We.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula() {
          this.quill.theme.tooltip.edit("formula");
        },
        image() {
          let r = this.container.querySelector("input.ql-image[type=file]");
          r == null && (r = document.createElement("input"), r.setAttribute("type", "file"), r.setAttribute("accept", this.quill.uploader.options.mimetypes.join(", ")), r.classList.add("ql-image"), r.addEventListener("change", () => {
            const t = this.quill.getSelection(!0);
            this.quill.uploader.upload(t, r.files), r.value = "";
          }), this.container.appendChild(r)), r.click();
        },
        video() {
          this.quill.theme.tooltip.edit("video");
        }
      }
    }
  }
});
class ta extends Qo {
  constructor(t, e) {
    super(t, e), this.textbox = this.root.querySelector('input[type="text"]'), this.listen();
  }
  listen() {
    this.textbox.addEventListener("keydown", (t) => {
      t.key === "Enter" ? (this.save(), t.preventDefault()) : t.key === "Escape" && (this.cancel(), t.preventDefault());
    });
  }
  cancel() {
    this.hide(), this.restoreFocus();
  }
  edit() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), this.textbox == null)
      return;
    e != null ? this.textbox.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = "");
    const n = this.quill.getBounds(this.quill.selection.savedRange);
    n != null && this.position(n), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute(`data-${t}`) || ""), this.root.setAttribute("data-mode", t);
  }
  restoreFocus() {
    this.quill.focus({
      preventScroll: !0
    });
  }
  save() {
    let {
      value: t
    } = this.textbox;
    switch (this.root.getAttribute("data-mode")) {
      case "link": {
        const {
          scrollTop: e
        } = this.quill.root;
        this.linkRange ? (this.quill.formatText(this.linkRange, "link", t, _.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t, _.sources.USER)), this.quill.root.scrollTop = e;
        break;
      }
      case "video":
        t = Zp(t);
      case "formula": {
        if (!t)
          break;
        const e = this.quill.getSelection(!0);
        if (e != null) {
          const n = e.index + e.length;
          this.quill.insertEmbed(
            n,
            // @ts-expect-error Fix me later
            this.root.getAttribute("data-mode"),
            t,
            _.sources.USER
          ), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(n + 1, " ", _.sources.USER), this.quill.setSelection(n + 2, _.sources.USER);
        }
        break;
      }
    }
    this.textbox.value = "", this.hide();
  }
}
function Zp(r) {
  let t = r.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || r.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  return t ? `${t[1] || "https"}://www.youtube.com/embed/${t[2]}?showinfo=0` : (t = r.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? `${t[1] || "https"}://player.vimeo.com/video/${t[2]}/` : r;
}
function En(r, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  t.forEach((n) => {
    const s = document.createElement("option");
    n === e ? s.setAttribute("selected", "selected") : s.setAttribute("value", String(n)), r.appendChild(s);
  });
}
const Xp = [["bold", "italic", "link"], [{
  header: 1
}, {
  header: 2
}, "blockquote"]];
class ea extends ta {
  constructor(t, e) {
    super(t, e), this.quill.on(_.events.EDITOR_CHANGE, (n, s, i, l) => {
      if (n === _.events.SELECTION_CHANGE)
        if (s != null && s.length > 0 && l === _.sources.USER) {
          this.show(), this.root.style.left = "0px", this.root.style.width = "", this.root.style.width = `${this.root.offsetWidth}px`;
          const a = this.quill.getLines(s.index, s.length);
          if (a.length === 1) {
            const c = this.quill.getBounds(s);
            c != null && this.position(c);
          } else {
            const c = a[a.length - 1], h = this.quill.getIndex(c), d = Math.min(c.length() - 1, s.index + s.length - h), b = this.quill.getBounds(new ve(h, d));
            b != null && this.position(b);
          }
        } else
          document.activeElement !== this.textbox && this.quill.hasFocus() && this.hide();
    });
  }
  listen() {
    super.listen(), this.root.querySelector(".ql-close").addEventListener("click", () => {
      this.root.classList.remove("ql-editing");
    }), this.quill.on(_.events.SCROLL_OPTIMIZE, () => {
      setTimeout(() => {
        if (this.root.classList.contains("ql-hidden"))
          return;
        const t = this.quill.getSelection();
        if (t != null) {
          const e = this.quill.getBounds(t);
          e != null && this.position(e);
        }
      }, 1);
    });
  }
  cancel() {
    this.show();
  }
  position(t) {
    const e = super.position(t), n = this.root.querySelector(".ql-tooltip-arrow");
    return n.style.marginLeft = "", e !== 0 && (n.style.marginLeft = `${-1 * e - n.offsetWidth / 2}px`), e;
  }
}
L(ea, "TEMPLATE", ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""));
class na extends Fn {
  constructor(t, e) {
    e.modules.toolbar != null && e.modules.toolbar.container == null && (e.modules.toolbar.container = Xp), super(t, e), this.quill.container.classList.add("ql-bubble");
  }
  extendToolbar(t) {
    this.tooltip = new ea(this.quill, this.options.bounds), t.container != null && (this.tooltip.root.appendChild(t.container), this.buildButtons(t.container.querySelectorAll("button"), Mn), this.buildPickers(t.container.querySelectorAll("select"), Mn));
  }
}
na.DEFAULTS = re({}, Fn.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(r) {
          r ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1);
        }
      }
    }
  }
});
const Yp = [[{
  header: ["1", "2", "3", !1]
}], ["bold", "italic", "underline", "link"], [{
  list: "ordered"
}, {
  list: "bullet"
}], ["clean"]];
class ra extends ta {
  constructor() {
    super(...arguments);
    L(this, "preview", this.root.querySelector("a.ql-preview"));
  }
  listen() {
    super.listen(), this.root.querySelector("a.ql-action").addEventListener("click", (e) => {
      this.root.classList.contains("ql-editing") ? this.save() : this.edit("link", this.preview.textContent), e.preventDefault();
    }), this.root.querySelector("a.ql-remove").addEventListener("click", (e) => {
      if (this.linkRange != null) {
        const n = this.linkRange;
        this.restoreFocus(), this.quill.formatText(n, "link", !1, _.sources.USER), delete this.linkRange;
      }
      e.preventDefault(), this.hide();
    }), this.quill.on(_.events.SELECTION_CHANGE, (e, n, s) => {
      if (e != null) {
        if (e.length === 0 && s === _.sources.USER) {
          const [i, l] = this.quill.scroll.descendant(ne, e.index);
          if (i != null) {
            this.linkRange = new ve(e.index - l, i.length());
            const a = ne.formats(i.domNode);
            this.preview.textContent = a, this.preview.setAttribute("href", a), this.show();
            const c = this.quill.getBounds(this.linkRange);
            c != null && this.position(c);
            return;
          }
        } else
          delete this.linkRange;
        this.hide();
      }
    });
  }
  show() {
    super.show(), this.root.removeAttribute("data-mode");
  }
}
L(ra, "TEMPLATE", ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""));
class sa extends Fn {
  constructor(t, e) {
    e.modules.toolbar != null && e.modules.toolbar.container == null && (e.modules.toolbar.container = Yp), super(t, e), this.quill.container.classList.add("ql-snow");
  }
  extendToolbar(t) {
    t.container != null && (t.container.classList.add("ql-snow"), this.buildButtons(t.container.querySelectorAll("button"), Mn), this.buildPickers(t.container.querySelectorAll("select"), Mn), this.tooltip = new ra(this.quill, this.options.bounds), t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
      key: "k",
      shortKey: !0
    }, (e, n) => {
      t.handlers.link.call(t, !n.format.link);
    }));
  }
}
sa.DEFAULTS = re({}, Fn.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(r) {
          if (r) {
            const t = this.quill.getSelection();
            if (t == null || t.length === 0)
              return;
            let e = this.quill.getText(t);
            /^\S+@\S+\.\S+$/.test(e) && e.indexOf("mailto:") !== 0 && (e = `mailto:${e}`);
            const {
              tooltip: n
            } = this.quill.theme;
            n.edit("link", e);
          } else
            this.quill.format("link", !1);
        }
      }
    }
  }
});
A.register({
  "attributors/attribute/direction": jo,
  "attributors/class/align": ko,
  "attributors/class/background": vd,
  "attributors/class/color": yd,
  "attributors/class/direction": Do,
  "attributors/class/font": Uo,
  "attributors/class/size": Ho,
  "attributors/style/align": Mo,
  "attributors/style/background": ki,
  "attributors/style/color": Ri,
  "attributors/style/direction": $o,
  "attributors/style/font": Fo,
  "attributors/style/size": zo
}, !0);
A.register({
  "formats/align": ko,
  "formats/direction": Do,
  "formats/indent": cp,
  "formats/background": ki,
  "formats/color": Ri,
  "formats/font": Uo,
  "formats/size": Ho,
  "formats/blockquote": ai,
  "formats/code-block": nt,
  "formats/header": ci,
  "formats/list": Un,
  "formats/bold": kn,
  "formats/code": Mi,
  "formats/italic": ui,
  "formats/link": ne,
  "formats/script": hi,
  "formats/strike": fi,
  "formats/underline": di,
  "formats/formula": Nr,
  "formats/image": pi,
  "formats/video": wr,
  "modules/syntax": Xo,
  "modules/table": hp,
  "modules/toolbar": Pi,
  "themes/bubble": na,
  "themes/snow": sa,
  "ui/icons": Mn,
  "ui/picker": Pr,
  "ui/icon-picker": Jo,
  "ui/color-picker": Yo,
  "ui/tooltip": Qo
}, !0);
const Hl = {
  essential: [
    [{ header: [1, 2, 3, 4, 5, 6, !1] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
    ["blockquote", "code-block", "link"],
    [{ color: [] }, "clean"]
  ],
  minimal: [
    [{ header: 1 }, { header: 2 }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }, { align: [] }]
  ],
  full: [
    ["bold", "italic", "underline", "strike"],
    // toggled buttons
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }],
    // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }],
    // outdent/indent
    [{ direction: "rtl" }],
    // text direction
    [{ size: ["small", !1, "large", "huge"] }],
    // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, !1] }],
    [{ color: [] }, { background: [] }],
    // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ["link", "video", "image"],
    ["clean"]
    // remove formatting button
  ]
}, ig = /* @__PURE__ */ oa({
  __name: "Editor",
  props: {
    content: {
      type: [String, Object],
      default: null
    },
    contentType: {
      type: String,
      default: "delta",
      validator: (r) => ["delta", "html", "text"].includes(r)
    },
    enable: {
      type: Boolean,
      default: !0
    },
    readOnly: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      required: !1
    },
    theme: {
      type: String,
      default: "snow",
      validator: (r) => ["snow", "bubble", ""].includes(r)
    },
    toolbar: {
      type: [String, Array, Object],
      required: !1,
      validator: (r) => typeof r == "string" && r !== "" ? r.charAt(0) === "#" ? !0 : Object.keys(Hl).indexOf(r) !== -1 : !0
    },
    modules: {
      type: Object,
      required: !1
    },
    options: {
      type: Object,
      required: !1
    },
    globalOptions: {
      type: Object,
      required: !1
    }
  },
  emits: [
    "textChange",
    "selectionChange",
    "editorChange",
    "update:content",
    "blur",
    "focus",
    "ready"
  ],
  setup(r, { expose: t, emit: e }) {
    let n, s;
    const i = Fi(), l = r, a = e;
    aa(() => {
      c();
    }), ca(() => {
      n = null;
    });
    const c = () => {
      if (console.log("test"), !i.value)
        return;
      if (s = d(), console.log(s), l.modules)
        if (Array.isArray(l.modules))
          for (const M of l.modules)
            h(`modules/${M.name}`, M.module);
        else
          h(`modules/${l.modules.name}`, l.modules.module);
      n = new A(i.value, s), B(l.content), n.on("text-change", E), n.on("selection-change", N), n.on("editor-change", T), l.theme !== "bubble" && i.value.classList.remove("ql-bubble"), l.theme !== "snow" && i.value.classList.remove("ql-snow");
      let x = n.getModule("toolbar");
      x && x.container.addEventListener("mousedown", (M) => {
        M.preventDefault();
      }), a("ready", n);
    }, h = (x, M) => {
      A != null && A.imports && x in A.imports || A.register(x, M);
    }, d = () => {
      const x = {};
      if (l.theme !== "" && (x.theme = l.theme), l.readOnly && (x.readOnly = l.readOnly), l.placeholder && (x.placeholder = l.placeholder), l.toolbar && l.toolbar !== "" && (x.modules = {
        toolbar: (() => {
          if (typeof l.toolbar == "object")
            return l.toolbar;
          if (typeof l.toolbar == "string")
            return l.toolbar.charAt(0) === "#" ? l.toolbar : Hl[l.toolbar];
        })()
      }), l.modules) {
        const M = (() => {
          const K = {};
          if (Array.isArray(l.modules))
            for (const j of l.modules)
              K[j.name] = j.options ?? {};
          else
            K[l.modules.name] = l.modules.options ?? {};
          return K;
        })();
        x.modules = Object.assign({}, x.modules, M);
      }
      return Object.assign({}, l.globalOptions, l.options, x);
    }, b = (x) => typeof x == "object" && x ? x.slice() : x, p = (x) => Object.values(x.ops).some(
      (M) => !M.retain || Object.keys(M).length !== 1
    );
    let g;
    const m = (x) => {
      if (typeof g == typeof x) {
        if (x === g)
          return !0;
        if (typeof x == "object" && x && typeof g == "object" && g)
          return !p(g.diff(x));
      }
      return !1;
    }, E = (x, M, K) => {
      g = b(R()), m(l.content) || a("update:content", g), a("textChange", { delta: x, oldContents: M, source: K });
    }, y = Fi(), N = (x, M, K) => {
      y.value = !!(n != null && n.hasFocus()), a("selectionChange", { range: x, oldRange: M, source: K });
    };
    qs(y, (x) => {
      a(x ? "focus" : "blur", i);
    });
    const T = (...x) => {
      x[0] === "text-change" && a("editorChange", {
        name: x[0],
        delta: x[1],
        oldContents: x[2],
        source: x[3]
      }), x[0] === "selection-change" && a("editorChange", {
        name: x[0],
        range: x[1],
        oldRange: x[2],
        source: x[3]
      });
    }, w = () => i.value, O = () => {
      let x = n == null ? void 0 : n.getModule("toolbar");
      return x == null ? void 0 : x.container;
    }, S = () => {
      if (n)
        return n;
      throw `The quill editor hasn't been instantiated yet,
                        make sure to call this method when the editor ready
                        or use v-on:ready="onReady(quill)" event instead.`;
    }, R = (x, M) => l.contentType === "html" ? qt() : l.contentType === "text" ? mt(x, M) : n == null ? void 0 : n.getContents(x, M), B = (x, M = "api") => {
      const K = x || (l.contentType === "delta" ? new q() : "");
      l.contentType === "html" ? oe(K) : l.contentType === "text" ? _t(K, M) : n == null || n.setContents(K, M), g = b(K);
    }, F = (x, M, K = "", j = null, Je = "api") => {
      n == null || n.insertText(x, M, K, j, Je);
    }, gt = (x, M, K, j = "api") => {
      n == null || n.insertEmbed(x, M, K, j);
    }, mt = (x, M) => (n == null ? void 0 : n.getText(x, M)) ?? "", _t = (x, M = "api") => {
      n == null || n.setText(x, M);
    }, qt = () => (n == null ? void 0 : n.root.innerHTML) ?? "", oe = (x) => {
      n && (n.root.innerHTML = x);
    }, Se = (x, M = "api") => {
      const K = n == null ? void 0 : n.clipboard.convert(x);
      K && (n == null || n.setContents(K, M));
    }, Le = () => {
      n == null || n.focus();
    }, Ye = () => {
      Hi(() => {
        if (!ga().toolbar && n) {
          console.log(n.getModule("toolbar"));
          let x = n.getModule("toolbar");
          x == null || x.container.remove();
        }
        c();
      });
    };
    return qs(
      () => l.content,
      (x) => {
        if (!n || !x || m(x))
          return;
        const M = n.getSelection();
        M && Hi(() => n == null ? void 0 : n.setSelection(M)), B(x);
      },
      { deep: !0 }
    ), qs(
      () => l.enable,
      (x) => {
        n && n.enable(x);
      }
    ), t({
      editor: i,
      getEditor: w,
      getToolbar: O,
      getQuill: S,
      getContents: R,
      setContents: B,
      getHTML: qt,
      setHTML: oe,
      pasteHTML: Se,
      focus: Le,
      getText: mt,
      setText: _t,
      reinit: Ye,
      insertText: F,
      insertEmbed: gt
    }), (x, M) => (ua(), ha(fa, null, [
      da(x.$slots, "toolbar"),
      pa("div", {
        ref_key: "editor",
        ref: i
      }, null, 512)
    ], 64));
  }
});
export {
  ig as Editor
};
