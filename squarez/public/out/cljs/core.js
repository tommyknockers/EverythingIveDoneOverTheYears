goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3576__auto____1996 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____1996))
{return or__3576__auto____1996;
} else
{var or__3576__auto____1997 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____1997))
{return or__3576__auto____1997;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return goog.global['Error'].call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1998 = coll;

if(cljs.core.truth_(and__3574__auto____1998))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____1998;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____1999 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1999))
{return or__3576__auto____1999;
} else
{var or__3576__auto____2000 = (_count["_"]);

if(cljs.core.truth_(or__3576__auto____2000))
{return or__3576__auto____2000;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2001 = coll;

if(cljs.core.truth_(and__3574__auto____2001))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____2001;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____2002 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2002))
{return or__3576__auto____2002;
} else
{var or__3576__auto____2003 = (_empty["_"]);

if(cljs.core.truth_(or__3576__auto____2003))
{return or__3576__auto____2003;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____2004 = coll;

if(cljs.core.truth_(and__3574__auto____2004))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____2004;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____2005 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2005))
{return or__3576__auto____2005;
} else
{var or__3576__auto____2006 = (_conj["_"]);

if(cljs.core.truth_(or__3576__auto____2006))
{return or__3576__auto____2006;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2013 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____2007 = coll;

if(cljs.core.truth_(and__3574__auto____2007))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2007;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____2008 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2008))
{return or__3576__auto____2008;
} else
{var or__3576__auto____2009 = (_nth["_"]);

if(cljs.core.truth_(or__3576__auto____2009))
{return or__3576__auto____2009;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2014 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2010 = coll;

if(cljs.core.truth_(and__3574__auto____2010))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2010;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____2011 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2011))
{return or__3576__auto____2011;
} else
{var or__3576__auto____2012 = (_nth["_"]);

if(cljs.core.truth_(or__3576__auto____2012))
{return or__3576__auto____2012;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2013.call(this,coll,n);
case  3 :
return _nth__2014.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2016 = coll;

if(cljs.core.truth_(and__3574__auto____2016))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____2016;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____2017 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2017))
{return or__3576__auto____2017;
} else
{var or__3576__auto____2018 = (_first["_"]);

if(cljs.core.truth_(or__3576__auto____2018))
{return or__3576__auto____2018;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2019 = coll;

if(cljs.core.truth_(and__3574__auto____2019))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____2019;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____2020 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2020))
{return or__3576__auto____2020;
} else
{var or__3576__auto____2021 = (_rest["_"]);

if(cljs.core.truth_(or__3576__auto____2021))
{return or__3576__auto____2021;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2028 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____2022 = o;

if(cljs.core.truth_(and__3574__auto____2022))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2022;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____2023 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2023))
{return or__3576__auto____2023;
} else
{var or__3576__auto____2024 = (_lookup["_"]);

if(cljs.core.truth_(or__3576__auto____2024))
{return or__3576__auto____2024;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2029 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2025 = o;

if(cljs.core.truth_(and__3574__auto____2025))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2025;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____2026 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2026))
{return or__3576__auto____2026;
} else
{var or__3576__auto____2027 = (_lookup["_"]);

if(cljs.core.truth_(or__3576__auto____2027))
{return or__3576__auto____2027;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2028.call(this,o,k);
case  3 :
return _lookup__2029.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2031 = coll;

if(cljs.core.truth_(and__3574__auto____2031))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____2031;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____2032 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2032))
{return or__3576__auto____2032;
} else
{var or__3576__auto____2033 = (_contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3576__auto____2033))
{return or__3576__auto____2033;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____2034 = coll;

if(cljs.core.truth_(and__3574__auto____2034))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____2034;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____2035 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2035))
{return or__3576__auto____2035;
} else
{var or__3576__auto____2036 = (_assoc["_"]);

if(cljs.core.truth_(or__3576__auto____2036))
{return or__3576__auto____2036;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2037 = coll;

if(cljs.core.truth_(and__3574__auto____2037))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____2037;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____2038 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2038))
{return or__3576__auto____2038;
} else
{var or__3576__auto____2039 = (_dissoc["_"]);

if(cljs.core.truth_(or__3576__auto____2039))
{return or__3576__auto____2039;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____2040 = coll;

if(cljs.core.truth_(and__3574__auto____2040))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____2040;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____2041 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2041))
{return or__3576__auto____2041;
} else
{var or__3576__auto____2042 = (_disjoin["_"]);

if(cljs.core.truth_(or__3576__auto____2042))
{return or__3576__auto____2042;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2043 = coll;

if(cljs.core.truth_(and__3574__auto____2043))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____2043;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____2044 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2044))
{return or__3576__auto____2044;
} else
{var or__3576__auto____2045 = (_peek["_"]);

if(cljs.core.truth_(or__3576__auto____2045))
{return or__3576__auto____2045;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2046 = coll;

if(cljs.core.truth_(and__3574__auto____2046))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____2046;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____2047 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2047))
{return or__3576__auto____2047;
} else
{var or__3576__auto____2048 = (_pop["_"]);

if(cljs.core.truth_(or__3576__auto____2048))
{return or__3576__auto____2048;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____2049 = coll;

if(cljs.core.truth_(and__3574__auto____2049))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____2049;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____2050 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2050))
{return or__3576__auto____2050;
} else
{var or__3576__auto____2051 = (_assoc_n["_"]);

if(cljs.core.truth_(or__3576__auto____2051))
{return or__3576__auto____2051;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____2052 = o;

if(cljs.core.truth_(and__3574__auto____2052))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____2052;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____2053 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2053))
{return or__3576__auto____2053;
} else
{var or__3576__auto____2054 = (_deref["_"]);

if(cljs.core.truth_(or__3576__auto____2054))
{return or__3576__auto____2054;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____2055 = o;

if(cljs.core.truth_(and__3574__auto____2055))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____2055;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____2056 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2056))
{return or__3576__auto____2056;
} else
{var or__3576__auto____2057 = (_deref_with_timeout["_"]);

if(cljs.core.truth_(or__3576__auto____2057))
{return or__3576__auto____2057;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____2058 = o;

if(cljs.core.truth_(and__3574__auto____2058))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____2058;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____2059 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2059))
{return or__3576__auto____2059;
} else
{var or__3576__auto____2060 = (_meta["_"]);

if(cljs.core.truth_(or__3576__auto____2060))
{return or__3576__auto____2060;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____2061 = o;

if(cljs.core.truth_(and__3574__auto____2061))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____2061;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____2062 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2062))
{return or__3576__auto____2062;
} else
{var or__3576__auto____2063 = (_with_meta["_"]);

if(cljs.core.truth_(or__3576__auto____2063))
{return or__3576__auto____2063;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2070 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____2064 = coll;

if(cljs.core.truth_(and__3574__auto____2064))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2064;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____2065 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2065))
{return or__3576__auto____2065;
} else
{var or__3576__auto____2066 = (_reduce["_"]);

if(cljs.core.truth_(or__3576__auto____2066))
{return or__3576__auto____2066;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2071 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____2067 = coll;

if(cljs.core.truth_(and__3574__auto____2067))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2067;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____2068 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2068))
{return or__3576__auto____2068;
} else
{var or__3576__auto____2069 = (_reduce["_"]);

if(cljs.core.truth_(or__3576__auto____2069))
{return or__3576__auto____2069;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2070.call(this,coll,f);
case  3 :
return _reduce__2071.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____2073 = o;

if(cljs.core.truth_(and__3574__auto____2073))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____2073;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____2074 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2074))
{return or__3576__auto____2074;
} else
{var or__3576__auto____2075 = (_equiv["_"]);

if(cljs.core.truth_(or__3576__auto____2075))
{return or__3576__auto____2075;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____2076 = o;

if(cljs.core.truth_(and__3574__auto____2076))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____2076;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____2077 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2077))
{return or__3576__auto____2077;
} else
{var or__3576__auto____2078 = (_hash["_"]);

if(cljs.core.truth_(or__3576__auto____2078))
{return or__3576__auto____2078;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____2079 = o;

if(cljs.core.truth_(and__3574__auto____2079))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____2079;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____2080 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2080))
{return or__3576__auto____2080;
} else
{var or__3576__auto____2081 = (_seq["_"]);

if(cljs.core.truth_(or__3576__auto____2081))
{return or__3576__auto____2081;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3574__auto____2082 = o;

if(cljs.core.truth_(and__3574__auto____2082))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____2082;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____2083 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2083))
{return or__3576__auto____2083;
} else
{var or__3576__auto____2084 = (_pr_seq["_"]);

if(cljs.core.truth_(or__3576__auto____2084))
{return or__3576__auto____2084;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____2085 = d;

if(cljs.core.truth_(and__3574__auto____2085))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____2085;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____2086 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____2086))
{return or__3576__auto____2086;
} else
{var or__3576__auto____2087 = (_realized_QMARK_["_"]);

if(cljs.core.truth_(or__3576__auto____2087))
{return or__3576__auto____2087;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2088 = null;
var G__2088__2089 = (function (_,n){
return null;
});
var G__2088__2090 = (function (_,n,not_found){
return not_found;
});
G__2088 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2088__2089.call(this,_,n);
case  3 :
return G__2088__2090.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2088;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2092 = null;
var G__2092__2093 = (function (_,f){
return f.call(null);
});
var G__2092__2094 = (function (_,f,start){
return start;
});
G__2092 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2092__2093.call(this,_,f);
case  3 :
return G__2092__2094.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2092;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2096 = null;
var G__2096__2097 = (function (o,k){
return null;
});
var G__2096__2098 = (function (o,k,not_found){
return not_found;
});
G__2096 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2096__2097.call(this,o,k);
case  3 :
return G__2096__2098.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2096;
})()
);
goog.global['Date'].prototype.cljs$core$IEquiv$ = true;
goog.global['Date'].prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString,other.toString);
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
cljs.core.lt_ = (function lt_(x,y){
return (x < y);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2106 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2100 = cljs.core._nth.call(null,cicoll,0);
var n__2101 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2101,cljs.core._count.call(null,cicoll))))
{{
var G__2110 = f.call(null,val__2100,cljs.core._nth.call(null,cicoll,n__2101));
var G__2111 = cljs.core.inc.call(null,n__2101);
val__2100 = G__2110;
n__2101 = G__2111;
continue;
}
} else
{return val__2100;
}
break;
}
}
});
var ci_reduce__2107 = (function (cicoll,f,val){
var val__2102 = val;
var n__2103 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2103,cljs.core._count.call(null,cicoll))))
{{
var G__2112 = f.call(null,val__2102,cljs.core._nth.call(null,cicoll,n__2103));
var G__2113 = cljs.core.inc.call(null,n__2103);
val__2102 = G__2112;
n__2103 = G__2113;
continue;
}
} else
{return val__2102;
}
break;
}
});
var ci_reduce__2108 = (function (cicoll,f,val,idx){
var val__2104 = val;
var n__2105 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2105,cljs.core._count.call(null,cicoll))))
{{
var G__2114 = f.call(null,val__2104,cljs.core._nth.call(null,cicoll,n__2105));
var G__2115 = cljs.core.inc.call(null,n__2105);
val__2104 = G__2114;
n__2105 = G__2115;
continue;
}
} else
{return val__2104;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2106.call(this,cicoll,f);
case  3 :
return ci_reduce__2107.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2108.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2123 = null;
var G__2123__2124 = (function (coll,f){
var this__2116 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2116.a[this__2116.i]),cljs.core.inc.call(null,this__2116.i));
});
var G__2123__2125 = (function (coll,f,start){
var this__2117 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2117.i);
});
G__2123 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2123__2124.call(this,coll,f);
case  3 :
return G__2123__2125.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2123;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2118 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2119 = this;
return this__2119.a.length;
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2120 = this;
return (this__2120.a[this__2120.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2121 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__2121.i),this__2121.a.length)))
{return (new cljs.core.IndexedSeq(this__2121.a,cljs.core.inc.call(null,this__2121.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2122 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2127 = null;
var G__2127__2128 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2127__2129 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2127 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2127__2128.call(this,array,f);
case  3 :
return G__2127__2129.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2127;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2131 = null;
var G__2131__2132 = (function (array,k){
return (array[k]);
});
var G__2131__2133 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2131 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2131__2132.call(this,array,k);
case  3 :
return G__2131__2133.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2131;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2135 = null;
var G__2135__2136 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2135__2137 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2135 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2135__2136.call(this,array,n);
case  3 :
return G__2135__2137.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2135;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3726__auto____2139 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2139))
{var s__2140 = temp__3726__auto____2139;

return cljs.core._first.call(null,s__2140);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2141 = cljs.core.next.call(null,s);
s = G__2141;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2142 = cljs.core.seq.call(null,x);
var n__2143 = 0;

while(true){
if(cljs.core.truth_(s__2142))
{{
var G__2144 = cljs.core.next.call(null,s__2142);
var G__2145 = cljs.core.inc.call(null,n__2143);
s__2142 = G__2144;
n__2143 = G__2145;
continue;
}
} else
{return n__2143;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2146 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2147 = (function() { 
var G__2149__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2150 = conj.call(null,coll,x);
var G__2151 = cljs.core.first.call(null,xs);
var G__2152 = cljs.core.next.call(null,xs);
coll = G__2150;
x = G__2151;
xs = G__2152;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2149 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2149__delegate.call(this, coll, x, xs);
};
G__2149.cljs$lang$maxFixedArity = 2;
G__2149.cljs$lang$applyTo = (function (arglist__2153){
var coll = cljs.core.first(arglist__2153);
var x = cljs.core.first(cljs.core.next(arglist__2153));
var xs = cljs.core.rest(cljs.core.next(arglist__2153));
return G__2149__delegate.call(this, coll, x, xs);
});
return G__2149;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2146.call(this,coll,x);
default:
return conj__2147.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2147.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2154 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2155 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2154.call(this,coll,n);
case  3 :
return nth__2155.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2157 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2158 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2157.call(this,o,k);
case  3 :
return get__2158.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2161 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2162 = (function() { 
var G__2164__delegate = function (coll,k,v,kvs){
while(true){
var ret__2160 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2165 = ret__2160;
var G__2166 = cljs.core.first.call(null,kvs);
var G__2167 = cljs.core.second.call(null,kvs);
var G__2168 = cljs.core.nnext.call(null,kvs);
coll = G__2165;
k = G__2166;
v = G__2167;
kvs = G__2168;
continue;
}
} else
{return ret__2160;
}
break;
}
};
var G__2164 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2164__delegate.call(this, coll, k, v, kvs);
};
G__2164.cljs$lang$maxFixedArity = 3;
G__2164.cljs$lang$applyTo = (function (arglist__2169){
var coll = cljs.core.first(arglist__2169);
var k = cljs.core.first(cljs.core.next(arglist__2169));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2169)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2169)));
return G__2164__delegate.call(this, coll, k, v, kvs);
});
return G__2164;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2161.call(this,coll,k,v);
default:
return assoc__2162.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2162.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2171 = (function (coll){
return coll;
});
var dissoc__2172 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2173 = (function() { 
var G__2175__delegate = function (coll,k,ks){
while(true){
var ret__2170 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2176 = ret__2170;
var G__2177 = cljs.core.first.call(null,ks);
var G__2178 = cljs.core.next.call(null,ks);
coll = G__2176;
k = G__2177;
ks = G__2178;
continue;
}
} else
{return ret__2170;
}
break;
}
};
var G__2175 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2175__delegate.call(this, coll, k, ks);
};
G__2175.cljs$lang$maxFixedArity = 2;
G__2175.cljs$lang$applyTo = (function (arglist__2179){
var coll = cljs.core.first(arglist__2179);
var k = cljs.core.first(cljs.core.next(arglist__2179));
var ks = cljs.core.rest(cljs.core.next(arglist__2179));
return G__2175__delegate.call(this, coll, k, ks);
});
return G__2175;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2171.call(this,coll);
case  2 :
return dissoc__2172.call(this,coll,k);
default:
return dissoc__2173.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2173.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__105__auto____2180 = o;

if(cljs.core.truth_((function (){var and__3574__auto____2181 = x__105__auto____2180;

if(cljs.core.truth_(and__3574__auto____2181))
{return x__105__auto____2180.cljs$core$IMeta$;
} else
{return and__3574__auto____2181;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__105__auto____2180);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2183 = (function (coll){
return coll;
});
var disj__2184 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2185 = (function() { 
var G__2187__delegate = function (coll,k,ks){
while(true){
var ret__2182 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2188 = ret__2182;
var G__2189 = cljs.core.first.call(null,ks);
var G__2190 = cljs.core.next.call(null,ks);
coll = G__2188;
k = G__2189;
ks = G__2190;
continue;
}
} else
{return ret__2182;
}
break;
}
};
var G__2187 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2187__delegate.call(this, coll, k, ks);
};
G__2187.cljs$lang$maxFixedArity = 2;
G__2187.cljs$lang$applyTo = (function (arglist__2191){
var coll = cljs.core.first(arglist__2191);
var k = cljs.core.first(cljs.core.next(arglist__2191));
var ks = cljs.core.rest(cljs.core.next(arglist__2191));
return G__2187__delegate.call(this, coll, k, ks);
});
return G__2187;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2183.call(this,coll);
case  2 :
return disj__2184.call(this,coll,k);
default:
return disj__2185.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2185.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2192 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2193 = x__105__auto____2192;

if(cljs.core.truth_(and__3574__auto____2193))
{return x__105__auto____2192.cljs$core$ICollection$;
} else
{return and__3574__auto____2193;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__105__auto____2192);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2194 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2195 = x__105__auto____2194;

if(cljs.core.truth_(and__3574__auto____2195))
{return x__105__auto____2194.cljs$core$ISet$;
} else
{return and__3574__auto____2195;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__105__auto____2194);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__105__auto____2196 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2197 = x__105__auto____2196;

if(cljs.core.truth_(and__3574__auto____2197))
{return x__105__auto____2196.cljs$core$IAssociative$;
} else
{return and__3574__auto____2197;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__105__auto____2196);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__105__auto____2198 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2199 = x__105__auto____2198;

if(cljs.core.truth_(and__3574__auto____2199))
{return x__105__auto____2198.cljs$core$ISequential$;
} else
{return and__3574__auto____2199;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__105__auto____2198);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__105__auto____2200 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2201 = x__105__auto____2200;

if(cljs.core.truth_(and__3574__auto____2201))
{return x__105__auto____2200.cljs$core$ICounted$;
} else
{return and__3574__auto____2201;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__105__auto____2200);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2202 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2203 = x__105__auto____2202;

if(cljs.core.truth_(and__3574__auto____2203))
{return x__105__auto____2202.cljs$core$IMap$;
} else
{return and__3574__auto____2203;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__105__auto____2202);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__105__auto____2204 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2205 = x__105__auto____2204;

if(cljs.core.truth_(and__3574__auto____2205))
{return x__105__auto____2204.cljs$core$IVector$;
} else
{return and__3574__auto____2205;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__105__auto____2204);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2206 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2206.push(key);
}));
return keys__2206;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__105__auto____2207 = s;

if(cljs.core.truth_((function (){var and__3574__auto____2208 = x__105__auto____2207;

if(cljs.core.truth_(and__3574__auto____2208))
{return x__105__auto____2207.cljs$core$ISeq$;
} else
{return and__3574__auto____2208;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__105__auto____2207);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3574__auto____2209 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2209))
{return cljs.core.not.call(null,(function (){var or__3576__auto____2210 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____2210))
{return or__3576__auto____2210;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____2209;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____2211 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2211))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____2211;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____2212 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2212))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____2212;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3574__auto____2213 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2213))
{return (n == n.toFixed());
} else
{return and__3574__auto____2213;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2214 = coll;

if(cljs.core.truth_(and__3574__auto____2214))
{var and__3574__auto____2215 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____2215))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____2215;
}
} else
{return and__3574__auto____2214;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2220 = (function (x){
return true;
});
var distinct_QMARK___2221 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2222 = (function() { 
var G__2224__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2216 = cljs.core.set([y,x]);
var xs__2217 = more;

while(true){
var x__2218 = cljs.core.first.call(null,xs__2217);
var etc__2219 = cljs.core.next.call(null,xs__2217);

if(cljs.core.truth_(xs__2217))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2216,x__2218)))
{return false;
} else
{{
var G__2225 = cljs.core.conj.call(null,s__2216,x__2218);
var G__2226 = etc__2219;
s__2216 = G__2225;
xs__2217 = G__2226;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2224 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2224__delegate.call(this, x, y, more);
};
G__2224.cljs$lang$maxFixedArity = 2;
G__2224.cljs$lang$applyTo = (function (arglist__2227){
var x = cljs.core.first(arglist__2227);
var y = cljs.core.first(cljs.core.next(arglist__2227));
var more = cljs.core.rest(cljs.core.next(arglist__2227));
return G__2224__delegate.call(this, x, y, more);
});
return G__2224;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2220.call(this,x);
case  2 :
return distinct_QMARK___2221.call(this,x,y);
default:
return distinct_QMARK___2222.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2222.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2228 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2228)))
{return r__2228;
} else
{if(cljs.core.truth_(r__2228))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2230 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2231 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2229 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2229,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2229);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2230.call(this,comp);
case  2 :
return sort__2231.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2233 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2234 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2233.call(this,keyfn,comp);
case  3 :
return sort_by__2234.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2236 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2237 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2236.call(this,f,val);
case  3 :
return reduce__2237.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2243 = (function (f,coll){
var temp__3723__auto____2239 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2239))
{var s__2240 = temp__3723__auto____2239;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2240),cljs.core.next.call(null,s__2240));
} else
{return f.call(null);
}
});
var seq_reduce__2244 = (function (f,val,coll){
var val__2241 = val;
var coll__2242 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2242))
{{
var G__2246 = f.call(null,val__2241,cljs.core.first.call(null,coll__2242));
var G__2247 = cljs.core.next.call(null,coll__2242);
val__2241 = G__2246;
coll__2242 = G__2247;
continue;
}
} else
{return val__2241;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2243.call(this,f,val);
case  3 :
return seq_reduce__2244.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2248 = null;
var G__2248__2249 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2248__2250 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2248 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2248__2249.call(this,coll,f);
case  3 :
return G__2248__2250.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2248;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2252 = (function (){
return 0;
});
var _PLUS___2253 = (function (x){
return x;
});
var _PLUS___2254 = (function (x,y){
return (x + y);
});
var _PLUS___2255 = (function() { 
var G__2257__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2257 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2257__delegate.call(this, x, y, more);
};
G__2257.cljs$lang$maxFixedArity = 2;
G__2257.cljs$lang$applyTo = (function (arglist__2258){
var x = cljs.core.first(arglist__2258);
var y = cljs.core.first(cljs.core.next(arglist__2258));
var more = cljs.core.rest(cljs.core.next(arglist__2258));
return G__2257__delegate.call(this, x, y, more);
});
return G__2257;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2252.call(this);
case  1 :
return _PLUS___2253.call(this,x);
case  2 :
return _PLUS___2254.call(this,x,y);
default:
return _PLUS___2255.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2255.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2259 = (function (x){
return (- x);
});
var ___2260 = (function (x,y){
return (x - y);
});
var ___2261 = (function() { 
var G__2263__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2263 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2263__delegate.call(this, x, y, more);
};
G__2263.cljs$lang$maxFixedArity = 2;
G__2263.cljs$lang$applyTo = (function (arglist__2264){
var x = cljs.core.first(arglist__2264);
var y = cljs.core.first(cljs.core.next(arglist__2264));
var more = cljs.core.rest(cljs.core.next(arglist__2264));
return G__2263__delegate.call(this, x, y, more);
});
return G__2263;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2259.call(this,x);
case  2 :
return ___2260.call(this,x,y);
default:
return ___2261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2261.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2265 = (function (){
return 1;
});
var _STAR___2266 = (function (x){
return x;
});
var _STAR___2267 = (function (x,y){
return (x * y);
});
var _STAR___2268 = (function() { 
var G__2270__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2270 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2270__delegate.call(this, x, y, more);
};
G__2270.cljs$lang$maxFixedArity = 2;
G__2270.cljs$lang$applyTo = (function (arglist__2271){
var x = cljs.core.first(arglist__2271);
var y = cljs.core.first(cljs.core.next(arglist__2271));
var more = cljs.core.rest(cljs.core.next(arglist__2271));
return G__2270__delegate.call(this, x, y, more);
});
return G__2270;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2265.call(this);
case  1 :
return _STAR___2266.call(this,x);
case  2 :
return _STAR___2267.call(this,x,y);
default:
return _STAR___2268.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2268.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2272 = (function (x){
return (1 / x);
});
var _SLASH___2273 = (function (x,y){
return (x / y);
});
var _SLASH___2274 = (function() { 
var G__2276__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2276 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2276__delegate.call(this, x, y, more);
};
G__2276.cljs$lang$maxFixedArity = 2;
G__2276.cljs$lang$applyTo = (function (arglist__2277){
var x = cljs.core.first(arglist__2277);
var y = cljs.core.first(cljs.core.next(arglist__2277));
var more = cljs.core.rest(cljs.core.next(arglist__2277));
return G__2276__delegate.call(this, x, y, more);
});
return G__2276;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2272.call(this,x);
case  2 :
return _SLASH___2273.call(this,x,y);
default:
return _SLASH___2274.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2274.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2278 = (function (x){
return true;
});
var _LT___2279 = (function (x,y){
return (x < y);
});
var _LT___2280 = (function() { 
var G__2282__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2283 = y;
var G__2284 = cljs.core.first.call(null,more);
var G__2285 = cljs.core.next.call(null,more);
x = G__2283;
y = G__2284;
more = G__2285;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2282 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2282__delegate.call(this, x, y, more);
};
G__2282.cljs$lang$maxFixedArity = 2;
G__2282.cljs$lang$applyTo = (function (arglist__2286){
var x = cljs.core.first(arglist__2286);
var y = cljs.core.first(cljs.core.next(arglist__2286));
var more = cljs.core.rest(cljs.core.next(arglist__2286));
return G__2282__delegate.call(this, x, y, more);
});
return G__2282;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2278.call(this,x);
case  2 :
return _LT___2279.call(this,x,y);
default:
return _LT___2280.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2280.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2287 = (function (x){
return true;
});
var _LT__EQ___2288 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2289 = (function() { 
var G__2291__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2292 = y;
var G__2293 = cljs.core.first.call(null,more);
var G__2294 = cljs.core.next.call(null,more);
x = G__2292;
y = G__2293;
more = G__2294;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2291 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2291__delegate.call(this, x, y, more);
};
G__2291.cljs$lang$maxFixedArity = 2;
G__2291.cljs$lang$applyTo = (function (arglist__2295){
var x = cljs.core.first(arglist__2295);
var y = cljs.core.first(cljs.core.next(arglist__2295));
var more = cljs.core.rest(cljs.core.next(arglist__2295));
return G__2291__delegate.call(this, x, y, more);
});
return G__2291;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2287.call(this,x);
case  2 :
return _LT__EQ___2288.call(this,x,y);
default:
return _LT__EQ___2289.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2289.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2296 = (function (x){
return true;
});
var _GT___2297 = (function (x,y){
return (x > y);
});
var _GT___2298 = (function() { 
var G__2300__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2301 = y;
var G__2302 = cljs.core.first.call(null,more);
var G__2303 = cljs.core.next.call(null,more);
x = G__2301;
y = G__2302;
more = G__2303;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2300 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2300__delegate.call(this, x, y, more);
};
G__2300.cljs$lang$maxFixedArity = 2;
G__2300.cljs$lang$applyTo = (function (arglist__2304){
var x = cljs.core.first(arglist__2304);
var y = cljs.core.first(cljs.core.next(arglist__2304));
var more = cljs.core.rest(cljs.core.next(arglist__2304));
return G__2300__delegate.call(this, x, y, more);
});
return G__2300;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2296.call(this,x);
case  2 :
return _GT___2297.call(this,x,y);
default:
return _GT___2298.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2298.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2305 = (function (x){
return true;
});
var _GT__EQ___2306 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2307 = (function() { 
var G__2309__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2310 = y;
var G__2311 = cljs.core.first.call(null,more);
var G__2312 = cljs.core.next.call(null,more);
x = G__2310;
y = G__2311;
more = G__2312;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2309 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2309__delegate.call(this, x, y, more);
};
G__2309.cljs$lang$maxFixedArity = 2;
G__2309.cljs$lang$applyTo = (function (arglist__2313){
var x = cljs.core.first(arglist__2313);
var y = cljs.core.first(cljs.core.next(arglist__2313));
var more = cljs.core.rest(cljs.core.next(arglist__2313));
return G__2309__delegate.call(this, x, y, more);
});
return G__2309;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2305.call(this,x);
case  2 :
return _GT__EQ___2306.call(this,x,y);
default:
return _GT__EQ___2307.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2307.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return cljs.core._.call(null,x,1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2314 = (function (x){
return x;
});
var max__2315 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2316 = (function() { 
var G__2318__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2318 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2318__delegate.call(this, x, y, more);
};
G__2318.cljs$lang$maxFixedArity = 2;
G__2318.cljs$lang$applyTo = (function (arglist__2319){
var x = cljs.core.first(arglist__2319);
var y = cljs.core.first(cljs.core.next(arglist__2319));
var more = cljs.core.rest(cljs.core.next(arglist__2319));
return G__2318__delegate.call(this, x, y, more);
});
return G__2318;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2314.call(this,x);
case  2 :
return max__2315.call(this,x,y);
default:
return max__2316.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2316.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2320 = (function (x){
return x;
});
var min__2321 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2322 = (function() { 
var G__2324__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2324 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2324__delegate.call(this, x, y, more);
};
G__2324.cljs$lang$maxFixedArity = 2;
G__2324.cljs$lang$applyTo = (function (arglist__2325){
var x = cljs.core.first(arglist__2325);
var y = cljs.core.first(cljs.core.next(arglist__2325));
var more = cljs.core.rest(cljs.core.next(arglist__2325));
return G__2324__delegate.call(this, x, y, more);
});
return G__2324;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2320.call(this,x);
case  2 :
return min__2321.call(this,x,y);
default:
return min__2322.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2322.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_(cljs.core._GT__EQ_.call(null,q,0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2326 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__2326) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2327 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2327));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2328 = (function (){
return Math.random.call(null);
});
var rand__2329 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2328.call(this);
case  1 :
return rand__2329.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2331 = (function (x){
return true;
});
var _EQ__EQ___2332 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2333 = (function() { 
var G__2335__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2336 = y;
var G__2337 = cljs.core.first.call(null,more);
var G__2338 = cljs.core.next.call(null,more);
x = G__2336;
y = G__2337;
more = G__2338;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2335 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2335__delegate.call(this, x, y, more);
};
G__2335.cljs$lang$maxFixedArity = 2;
G__2335.cljs$lang$applyTo = (function (arglist__2339){
var x = cljs.core.first(arglist__2339);
var y = cljs.core.first(cljs.core.next(arglist__2339));
var more = cljs.core.rest(cljs.core.next(arglist__2339));
return G__2335__delegate.call(this, x, y, more);
});
return G__2335;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2331.call(this,x);
case  2 :
return _EQ__EQ___2332.call(this,x,y);
default:
return _EQ__EQ___2333.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2333.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return cljs.core._LT_.call(null,0,n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return cljs.core._EQ__EQ_.call(null,0,n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2340 = n;
var xs__2341 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2342 = xs__2341;

if(cljs.core.truth_(and__3574__auto____2342))
{return cljs.core.pos_QMARK_.call(null,n__2340);
} else
{return and__3574__auto____2342;
}
})()))
{{
var G__2343 = cljs.core.dec.call(null,n__2340);
var G__2344 = cljs.core.next.call(null,xs__2341);
n__2340 = G__2343;
xs__2341 = G__2344;
continue;
}
} else
{return xs__2341;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2349 = null;
var G__2349__2350 = (function (coll,n){
var temp__3723__auto____2345 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2345))
{var xs__2346 = temp__3723__auto____2345;

return cljs.core.first.call(null,xs__2346);
} else
{throw "Index out of bounds";
}
});
var G__2349__2351 = (function (coll,n,not_found){
var temp__3723__auto____2347 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2347))
{var xs__2348 = temp__3723__auto____2347;

return cljs.core.first.call(null,xs__2348);
} else
{return not_found;
}
});
G__2349 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2349__2350.call(this,coll,n);
case  3 :
return G__2349__2351.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2349;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2353 = (function (){
return "";
});
var str__2354 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2355 = (function() { 
var G__2357__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2358 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2359 = cljs.core.next.call(null,more);
sb = G__2358;
more = G__2359;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2357 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2357__delegate.call(this, x, ys);
};
G__2357.cljs$lang$maxFixedArity = 1;
G__2357.cljs$lang$applyTo = (function (arglist__2360){
var x = cljs.core.first(arglist__2360);
var ys = cljs.core.rest(arglist__2360);
return G__2357__delegate.call(this, x, ys);
});
return G__2357;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2353.call(this);
case  1 :
return str__2354.call(this,x);
default:
return str__2355.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2355.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2361 = (function (s,start){
return s.substring(start);
});
var subs__2362 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2361.call(this,s,start);
case  3 :
return subs__2362.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2364 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__2365 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2364.call(this,ns);
case  2 :
return symbol__2365.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2367 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2368 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2367.call(this,ns);
case  2 :
return keyword__2368.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2370 = cljs.core.seq.call(null,x);
var ys__2371 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2370)))
{return cljs.core.nil_QMARK_.call(null,ys__2371);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2371)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2370),cljs.core.first.call(null,ys__2371))))
{{
var G__2372 = cljs.core.next.call(null,xs__2370);
var G__2373 = cljs.core.next.call(null,ys__2371);
xs__2370 = G__2372;
ys__2371 = G__2373;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return cljs.core.bit_xor.call(null,seed,cljs.core._PLUS_.call(null,hash,2654435769,cljs.core.bit_shift_left.call(null,seed,6),cljs.core.bit_shift_right.call(null,seed,2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2374_SHARP_,p2__2375_SHARP_){
return cljs.core.hash_combine.call(null,p1__2374_SHARP_,cljs.core.hash.call(null,p2__2375_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2376 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2377 = this;
return (new cljs.core.List(this__2377.meta,o,coll,cljs.core.inc.call(null,this__2377.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2378 = this;
return this__2378.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2379 = this;
return this__2379.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2380 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2381 = this;
return this__2381.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2382 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2383 = this;
return (new cljs.core.List(meta,this__2383.first,this__2383.rest,this__2383.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2384 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2385 = this;
return this__2385.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2386 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2387 = this;
return this__2387.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2388 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2389 = this;
return (new cljs.core.List(this__2389.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2390 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2391 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2392 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2393 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2394 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2395 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2396 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2397 = this;
return this__2397.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2398 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2399 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2400){
var items = cljs.core.seq( arglist__2400 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2401 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2402 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2403 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2404 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2404.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2405 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2406 = this;
return this__2406.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2407 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2407.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2407.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2408 = this;
return this__2408.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2409 = this;
return (new cljs.core.Cons(meta,this__2409.first,this__2409.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2410 = null;
var G__2410__2411 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2410__2412 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2410 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2410__2411.call(this,string,f);
case  3 :
return G__2410__2412.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2410;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2414 = null;
var G__2414__2415 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2414__2416 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2414 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2414__2415.call(this,string,k);
case  3 :
return G__2414__2416.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2414;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2418 = null;
var G__2418__2419 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2418__2420 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2418 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2418__2419.call(this,string,n);
case  3 :
return G__2418__2420.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2418;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
goog.global['String']['prototype']['call'] = (function() {
var G__2422 = null;
var G__2422__2423 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2422__2424 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2422 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2422__2423.call(this,_,coll);
case  3 :
return G__2422__2424.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2422;
})()
;
goog.global['String']['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,args),2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2426 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2426;
} else
{lazy_seq.x = x__2426.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2427 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2428 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2429 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2430 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2430.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2431 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2432 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2433 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2434 = this;
return this__2434.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2435 = this;
return (new cljs.core.LazySeq(meta,this__2435.realized,this__2435.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2436 = cljs.core.array.call(null);

var s__2437 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2437)))
{ary__2436.push(cljs.core.first.call(null,s__2437));
{
var G__2438 = cljs.core.next.call(null,s__2437);
s__2437 = G__2438;
continue;
}
} else
{return ary__2436;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2439 = s;
var i__2440 = n;
var sum__2441 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2442 = cljs.core.pos_QMARK_.call(null,i__2440);

if(cljs.core.truth_(and__3574__auto____2442))
{return cljs.core.seq.call(null,s__2439);
} else
{return and__3574__auto____2442;
}
})()))
{{
var G__2443 = cljs.core.next.call(null,s__2439);
var G__2444 = cljs.core.dec.call(null,i__2440);
var G__2445 = cljs.core.inc.call(null,sum__2441);
s__2439 = G__2443;
i__2440 = G__2444;
sum__2441 = G__2445;
continue;
}
} else
{return sum__2441;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2449 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2450 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2451 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2446 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2446))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2446),concat.call(null,cljs.core.rest.call(null,s__2446),y));
} else
{return y;
}
})));
});
var concat__2452 = (function() { 
var G__2454__delegate = function (x,y,zs){
var cat__2448 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2447 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2447))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2447),cat.call(null,cljs.core.rest.call(null,xys__2447),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2448.call(null,concat.call(null,x,y),zs);
};
var G__2454 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2454__delegate.call(this, x, y, zs);
};
G__2454.cljs$lang$maxFixedArity = 2;
G__2454.cljs$lang$applyTo = (function (arglist__2455){
var x = cljs.core.first(arglist__2455);
var y = cljs.core.first(cljs.core.next(arglist__2455));
var zs = cljs.core.rest(cljs.core.next(arglist__2455));
return G__2454__delegate.call(this, x, y, zs);
});
return G__2454;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2449.call(this);
case  1 :
return concat__2450.call(this,x);
case  2 :
return concat__2451.call(this,x,y);
default:
return concat__2452.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2452.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2456 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2457 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2458 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2459 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2460 = (function() { 
var G__2462__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2462 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2462__delegate.call(this, a, b, c, d, more);
};
G__2462.cljs$lang$maxFixedArity = 4;
G__2462.cljs$lang$applyTo = (function (arglist__2463){
var a = cljs.core.first(arglist__2463);
var b = cljs.core.first(cljs.core.next(arglist__2463));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2463)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2463))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2463))));
return G__2462__delegate.call(this, a, b, c, d, more);
});
return G__2462;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2456.call(this,a);
case  2 :
return list_STAR___2457.call(this,a,b);
case  3 :
return list_STAR___2458.call(this,a,b,c);
case  4 :
return list_STAR___2459.call(this,a,b,c,d);
default:
return list_STAR___2460.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2460.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2473 = (function (f,args){
var fixed_arity__2464 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,cljs.core.inc.call(null,fixed_arity__2464)),fixed_arity__2464)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2474 = (function (f,x,args){
var arglist__2465 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2466 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2465,fixed_arity__2466),fixed_arity__2466)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2465));
} else
{return f.cljs$lang$applyTo(arglist__2465);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2465));
}
});
var apply__2475 = (function (f,x,y,args){
var arglist__2467 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2468 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2467,fixed_arity__2468),fixed_arity__2468)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2467));
} else
{return f.cljs$lang$applyTo(arglist__2467);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2467));
}
});
var apply__2476 = (function (f,x,y,z,args){
var arglist__2469 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2470 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2469,fixed_arity__2470),fixed_arity__2470)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2469));
} else
{return f.cljs$lang$applyTo(arglist__2469);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2469));
}
});
var apply__2477 = (function() { 
var G__2479__delegate = function (f,a,b,c,d,args){
var arglist__2471 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2472 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2471,fixed_arity__2472),fixed_arity__2472)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2471));
} else
{return f.cljs$lang$applyTo(arglist__2471);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2471));
}
};
var G__2479 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2479__delegate.call(this, f, a, b, c, d, args);
};
G__2479.cljs$lang$maxFixedArity = 5;
G__2479.cljs$lang$applyTo = (function (arglist__2480){
var f = cljs.core.first(arglist__2480);
var a = cljs.core.first(cljs.core.next(arglist__2480));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2480)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2480))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2480)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2480)))));
return G__2479__delegate.call(this, f, a, b, c, d, args);
});
return G__2479;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2473.call(this,f,a);
case  3 :
return apply__2474.call(this,f,a,b);
case  4 :
return apply__2475.call(this,f,a,b,c);
case  5 :
return apply__2476.call(this,f,a,b,c,d);
default:
return apply__2477.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2477.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2481){
var obj = cljs.core.first(arglist__2481);
var f = cljs.core.first(cljs.core.next(arglist__2481));
var args = cljs.core.rest(cljs.core.next(arglist__2481));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2482 = (function (x){
return false;
});
var not_EQ___2483 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2484 = (function() { 
var G__2486__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2486 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2486__delegate.call(this, x, y, more);
};
G__2486.cljs$lang$maxFixedArity = 2;
G__2486.cljs$lang$applyTo = (function (arglist__2487){
var x = cljs.core.first(arglist__2487);
var y = cljs.core.first(cljs.core.next(arglist__2487));
var more = cljs.core.rest(cljs.core.next(arglist__2487));
return G__2486__delegate.call(this, x, y, more);
});
return G__2486;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2482.call(this,x);
case  2 :
return not_EQ___2483.call(this,x,y);
default:
return not_EQ___2484.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2484.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2488 = pred;
var G__2489 = cljs.core.next.call(null,coll);
pred = G__2488;
coll = G__2489;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3576__auto____2490 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____2490))
{return or__3576__auto____2490;
} else
{{
var G__2491 = pred;
var G__2492 = cljs.core.next.call(null,coll);
pred = G__2491;
coll = G__2492;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return cljs.core.zero_QMARK_.call(null,cljs.core.bit_and.call(null,n,1));
} else
{throw cljs.core.str.call(null,"Argument must be an integer: ",n);
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2493 = null;
var G__2493__2494 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2493__2495 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2493__2496 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2493__2497 = (function() { 
var G__2499__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2499 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2499__delegate.call(this, x, y, zs);
};
G__2499.cljs$lang$maxFixedArity = 2;
G__2499.cljs$lang$applyTo = (function (arglist__2500){
var x = cljs.core.first(arglist__2500);
var y = cljs.core.first(cljs.core.next(arglist__2500));
var zs = cljs.core.rest(cljs.core.next(arglist__2500));
return G__2499__delegate.call(this, x, y, zs);
});
return G__2499;
})()
;
G__2493 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2493__2494.call(this);
case  1 :
return G__2493__2495.call(this,x);
case  2 :
return G__2493__2496.call(this,x,y);
default:
return G__2493__2497.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2493.cljs$lang$maxFixedArity = 2;
G__2493.cljs$lang$applyTo = G__2493__2497.cljs$lang$applyTo;
return G__2493;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2501__delegate = function (args){
return x;
};
var G__2501 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2501__delegate.call(this, args);
};
G__2501.cljs$lang$maxFixedArity = 0;
G__2501.cljs$lang$applyTo = (function (arglist__2502){
var args = cljs.core.seq( arglist__2502 );;
return G__2501__delegate.call(this, args);
});
return G__2501;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2506 = (function (){
return cljs.core.identity;
});
var comp__2507 = (function (f){
return f;
});
var comp__2508 = (function (f,g){
return (function() {
var G__2512 = null;
var G__2512__2513 = (function (){
return f.call(null,g.call(null));
});
var G__2512__2514 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2512__2515 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2512__2516 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2512__2517 = (function() { 
var G__2519__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2519 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2519__delegate.call(this, x, y, z, args);
};
G__2519.cljs$lang$maxFixedArity = 3;
G__2519.cljs$lang$applyTo = (function (arglist__2520){
var x = cljs.core.first(arglist__2520);
var y = cljs.core.first(cljs.core.next(arglist__2520));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2520)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2520)));
return G__2519__delegate.call(this, x, y, z, args);
});
return G__2519;
})()
;
G__2512 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2512__2513.call(this);
case  1 :
return G__2512__2514.call(this,x);
case  2 :
return G__2512__2515.call(this,x,y);
case  3 :
return G__2512__2516.call(this,x,y,z);
default:
return G__2512__2517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2512.cljs$lang$maxFixedArity = 3;
G__2512.cljs$lang$applyTo = G__2512__2517.cljs$lang$applyTo;
return G__2512;
})()
});
var comp__2509 = (function (f,g,h){
return (function() {
var G__2521 = null;
var G__2521__2522 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2521__2523 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2521__2524 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2521__2525 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2521__2526 = (function() { 
var G__2528__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2528 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2528__delegate.call(this, x, y, z, args);
};
G__2528.cljs$lang$maxFixedArity = 3;
G__2528.cljs$lang$applyTo = (function (arglist__2529){
var x = cljs.core.first(arglist__2529);
var y = cljs.core.first(cljs.core.next(arglist__2529));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2529)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2529)));
return G__2528__delegate.call(this, x, y, z, args);
});
return G__2528;
})()
;
G__2521 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2521__2522.call(this);
case  1 :
return G__2521__2523.call(this,x);
case  2 :
return G__2521__2524.call(this,x,y);
case  3 :
return G__2521__2525.call(this,x,y,z);
default:
return G__2521__2526.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2521.cljs$lang$maxFixedArity = 3;
G__2521.cljs$lang$applyTo = G__2521__2526.cljs$lang$applyTo;
return G__2521;
})()
});
var comp__2510 = (function() { 
var G__2530__delegate = function (f1,f2,f3,fs){
var fs__2503 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2531__delegate = function (args){
var ret__2504 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2503),args);
var fs__2505 = cljs.core.next.call(null,fs__2503);

while(true){
if(cljs.core.truth_(fs__2505))
{{
var G__2532 = cljs.core.first.call(null,fs__2505).call(null,ret__2504);
var G__2533 = cljs.core.next.call(null,fs__2505);
ret__2504 = G__2532;
fs__2505 = G__2533;
continue;
}
} else
{return ret__2504;
}
break;
}
};
var G__2531 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2531__delegate.call(this, args);
};
G__2531.cljs$lang$maxFixedArity = 0;
G__2531.cljs$lang$applyTo = (function (arglist__2534){
var args = cljs.core.seq( arglist__2534 );;
return G__2531__delegate.call(this, args);
});
return G__2531;
})()
;
};
var G__2530 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2530__delegate.call(this, f1, f2, f3, fs);
};
G__2530.cljs$lang$maxFixedArity = 3;
G__2530.cljs$lang$applyTo = (function (arglist__2535){
var f1 = cljs.core.first(arglist__2535);
var f2 = cljs.core.first(cljs.core.next(arglist__2535));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2535)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2535)));
return G__2530__delegate.call(this, f1, f2, f3, fs);
});
return G__2530;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2506.call(this);
case  1 :
return comp__2507.call(this,f1);
case  2 :
return comp__2508.call(this,f1,f2);
case  3 :
return comp__2509.call(this,f1,f2,f3);
default:
return comp__2510.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2510.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2536 = (function (f,arg1){
return (function() { 
var G__2541__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2541 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2541__delegate.call(this, args);
};
G__2541.cljs$lang$maxFixedArity = 0;
G__2541.cljs$lang$applyTo = (function (arglist__2542){
var args = cljs.core.seq( arglist__2542 );;
return G__2541__delegate.call(this, args);
});
return G__2541;
})()
;
});
var partial__2537 = (function (f,arg1,arg2){
return (function() { 
var G__2543__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2543 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2543__delegate.call(this, args);
};
G__2543.cljs$lang$maxFixedArity = 0;
G__2543.cljs$lang$applyTo = (function (arglist__2544){
var args = cljs.core.seq( arglist__2544 );;
return G__2543__delegate.call(this, args);
});
return G__2543;
})()
;
});
var partial__2538 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2545__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2545 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2545__delegate.call(this, args);
};
G__2545.cljs$lang$maxFixedArity = 0;
G__2545.cljs$lang$applyTo = (function (arglist__2546){
var args = cljs.core.seq( arglist__2546 );;
return G__2545__delegate.call(this, args);
});
return G__2545;
})()
;
});
var partial__2539 = (function() { 
var G__2547__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2548__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2548 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2548__delegate.call(this, args);
};
G__2548.cljs$lang$maxFixedArity = 0;
G__2548.cljs$lang$applyTo = (function (arglist__2549){
var args = cljs.core.seq( arglist__2549 );;
return G__2548__delegate.call(this, args);
});
return G__2548;
})()
;
};
var G__2547 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2547__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2547.cljs$lang$maxFixedArity = 4;
G__2547.cljs$lang$applyTo = (function (arglist__2550){
var f = cljs.core.first(arglist__2550);
var arg1 = cljs.core.first(cljs.core.next(arglist__2550));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2550)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2550))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2550))));
return G__2547__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__2547;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2536.call(this,f,arg1);
case  3 :
return partial__2537.call(this,f,arg1,arg2);
case  4 :
return partial__2538.call(this,f,arg1,arg2,arg3);
default:
return partial__2539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2539.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2551 = (function (f,x){
return (function() {
var G__2555 = null;
var G__2555__2556 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2555__2557 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2555__2558 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2555__2559 = (function() { 
var G__2561__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__2561 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2561__delegate.call(this, a, b, c, ds);
};
G__2561.cljs$lang$maxFixedArity = 3;
G__2561.cljs$lang$applyTo = (function (arglist__2562){
var a = cljs.core.first(arglist__2562);
var b = cljs.core.first(cljs.core.next(arglist__2562));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2562)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2562)));
return G__2561__delegate.call(this, a, b, c, ds);
});
return G__2561;
})()
;
G__2555 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2555__2556.call(this,a);
case  2 :
return G__2555__2557.call(this,a,b);
case  3 :
return G__2555__2558.call(this,a,b,c);
default:
return G__2555__2559.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2555.cljs$lang$maxFixedArity = 3;
G__2555.cljs$lang$applyTo = G__2555__2559.cljs$lang$applyTo;
return G__2555;
})()
});
var fnil__2552 = (function (f,x,y){
return (function() {
var G__2563 = null;
var G__2563__2564 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2563__2565 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2563__2566 = (function() { 
var G__2568__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__2568 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2568__delegate.call(this, a, b, c, ds);
};
G__2568.cljs$lang$maxFixedArity = 3;
G__2568.cljs$lang$applyTo = (function (arglist__2569){
var a = cljs.core.first(arglist__2569);
var b = cljs.core.first(cljs.core.next(arglist__2569));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2569)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2569)));
return G__2568__delegate.call(this, a, b, c, ds);
});
return G__2568;
})()
;
G__2563 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2563__2564.call(this,a,b);
case  3 :
return G__2563__2565.call(this,a,b,c);
default:
return G__2563__2566.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2563.cljs$lang$maxFixedArity = 3;
G__2563.cljs$lang$applyTo = G__2563__2566.cljs$lang$applyTo;
return G__2563;
})()
});
var fnil__2553 = (function (f,x,y,z){
return (function() {
var G__2570 = null;
var G__2570__2571 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2570__2572 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2570__2573 = (function() { 
var G__2575__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__2575 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2575__delegate.call(this, a, b, c, ds);
};
G__2575.cljs$lang$maxFixedArity = 3;
G__2575.cljs$lang$applyTo = (function (arglist__2576){
var a = cljs.core.first(arglist__2576);
var b = cljs.core.first(cljs.core.next(arglist__2576));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2576)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2576)));
return G__2575__delegate.call(this, a, b, c, ds);
});
return G__2575;
})()
;
G__2570 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2570__2571.call(this,a,b);
case  3 :
return G__2570__2572.call(this,a,b,c);
default:
return G__2570__2573.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2570.cljs$lang$maxFixedArity = 3;
G__2570.cljs$lang$applyTo = G__2570__2573.cljs$lang$applyTo;
return G__2570;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2551.call(this,f,x);
case  3 :
return fnil__2552.call(this,f,x,y);
case  4 :
return fnil__2553.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__2579 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2577 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2577))
{var s__2578 = temp__3726__auto____2577;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__2578)),mpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2578)));
} else
{return null;
}
})));
});

return mapi__2579.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2580 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2580))
{var s__2581 = temp__3726__auto____2580;

var x__2582 = f.call(null,cljs.core.first.call(null,s__2581));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2582)))
{return keep.call(null,f,cljs.core.rest.call(null,s__2581));
} else
{return cljs.core.cons.call(null,x__2582,keep.call(null,f,cljs.core.rest.call(null,s__2581)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__2592 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2589 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2589))
{var s__2590 = temp__3726__auto____2589;

var x__2591 = f.call(null,idx,cljs.core.first.call(null,s__2590));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2591)))
{return kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2590));
} else
{return cljs.core.cons.call(null,x__2591,kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2590)));
}
} else
{return null;
}
})));
});

return keepi__2592.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__2637 = (function (p){
return (function() {
var ep1 = null;
var ep1__2642 = (function (){
return true;
});
var ep1__2643 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2644 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2599 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2599))
{return p.call(null,y);
} else
{return and__3574__auto____2599;
}
})());
});
var ep1__2645 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2600 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2600))
{var and__3574__auto____2601 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____2601))
{return p.call(null,z);
} else
{return and__3574__auto____2601;
}
} else
{return and__3574__auto____2600;
}
})());
});
var ep1__2646 = (function() { 
var G__2648__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2602 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2602))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____2602;
}
})());
};
var G__2648 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2648__delegate.call(this, x, y, z, args);
};
G__2648.cljs$lang$maxFixedArity = 3;
G__2648.cljs$lang$applyTo = (function (arglist__2649){
var x = cljs.core.first(arglist__2649);
var y = cljs.core.first(cljs.core.next(arglist__2649));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2649)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2649)));
return G__2648__delegate.call(this, x, y, z, args);
});
return G__2648;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__2642.call(this);
case  1 :
return ep1__2643.call(this,x);
case  2 :
return ep1__2644.call(this,x,y);
case  3 :
return ep1__2645.call(this,x,y,z);
default:
return ep1__2646.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__2646.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__2638 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__2650 = (function (){
return true;
});
var ep2__2651 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2603 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2603))
{return p2.call(null,x);
} else
{return and__3574__auto____2603;
}
})());
});
var ep2__2652 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2604 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2604))
{var and__3574__auto____2605 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2605))
{var and__3574__auto____2606 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2606))
{return p2.call(null,y);
} else
{return and__3574__auto____2606;
}
} else
{return and__3574__auto____2605;
}
} else
{return and__3574__auto____2604;
}
})());
});
var ep2__2653 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2607 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2607))
{var and__3574__auto____2608 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2608))
{var and__3574__auto____2609 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2609))
{var and__3574__auto____2610 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2610))
{var and__3574__auto____2611 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2611))
{return p2.call(null,z);
} else
{return and__3574__auto____2611;
}
} else
{return and__3574__auto____2610;
}
} else
{return and__3574__auto____2609;
}
} else
{return and__3574__auto____2608;
}
} else
{return and__3574__auto____2607;
}
})());
});
var ep2__2654 = (function() { 
var G__2656__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2612 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2612))
{return cljs.core.every_QMARK_.call(null,(function (p1__2583_SHARP_){
var and__3574__auto____2613 = p1.call(null,p1__2583_SHARP_);

if(cljs.core.truth_(and__3574__auto____2613))
{return p2.call(null,p1__2583_SHARP_);
} else
{return and__3574__auto____2613;
}
}),args);
} else
{return and__3574__auto____2612;
}
})());
};
var G__2656 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2656__delegate.call(this, x, y, z, args);
};
G__2656.cljs$lang$maxFixedArity = 3;
G__2656.cljs$lang$applyTo = (function (arglist__2657){
var x = cljs.core.first(arglist__2657);
var y = cljs.core.first(cljs.core.next(arglist__2657));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2657)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2657)));
return G__2656__delegate.call(this, x, y, z, args);
});
return G__2656;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__2650.call(this);
case  1 :
return ep2__2651.call(this,x);
case  2 :
return ep2__2652.call(this,x,y);
case  3 :
return ep2__2653.call(this,x,y,z);
default:
return ep2__2654.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__2654.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__2639 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__2658 = (function (){
return true;
});
var ep3__2659 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2614 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2614))
{var and__3574__auto____2615 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2615))
{return p3.call(null,x);
} else
{return and__3574__auto____2615;
}
} else
{return and__3574__auto____2614;
}
})());
});
var ep3__2660 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2616 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2616))
{var and__3574__auto____2617 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2617))
{var and__3574__auto____2618 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2618))
{var and__3574__auto____2619 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2619))
{var and__3574__auto____2620 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2620))
{return p3.call(null,y);
} else
{return and__3574__auto____2620;
}
} else
{return and__3574__auto____2619;
}
} else
{return and__3574__auto____2618;
}
} else
{return and__3574__auto____2617;
}
} else
{return and__3574__auto____2616;
}
})());
});
var ep3__2661 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2621 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2621))
{var and__3574__auto____2622 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2622))
{var and__3574__auto____2623 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2623))
{var and__3574__auto____2624 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2624))
{var and__3574__auto____2625 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2625))
{var and__3574__auto____2626 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____2626))
{var and__3574__auto____2627 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2627))
{var and__3574__auto____2628 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____2628))
{return p3.call(null,z);
} else
{return and__3574__auto____2628;
}
} else
{return and__3574__auto____2627;
}
} else
{return and__3574__auto____2626;
}
} else
{return and__3574__auto____2625;
}
} else
{return and__3574__auto____2624;
}
} else
{return and__3574__auto____2623;
}
} else
{return and__3574__auto____2622;
}
} else
{return and__3574__auto____2621;
}
})());
});
var ep3__2662 = (function() { 
var G__2664__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2629 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2629))
{return cljs.core.every_QMARK_.call(null,(function (p1__2584_SHARP_){
var and__3574__auto____2630 = p1.call(null,p1__2584_SHARP_);

if(cljs.core.truth_(and__3574__auto____2630))
{var and__3574__auto____2631 = p2.call(null,p1__2584_SHARP_);

if(cljs.core.truth_(and__3574__auto____2631))
{return p3.call(null,p1__2584_SHARP_);
} else
{return and__3574__auto____2631;
}
} else
{return and__3574__auto____2630;
}
}),args);
} else
{return and__3574__auto____2629;
}
})());
};
var G__2664 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2664__delegate.call(this, x, y, z, args);
};
G__2664.cljs$lang$maxFixedArity = 3;
G__2664.cljs$lang$applyTo = (function (arglist__2665){
var x = cljs.core.first(arglist__2665);
var y = cljs.core.first(cljs.core.next(arglist__2665));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2665)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2665)));
return G__2664__delegate.call(this, x, y, z, args);
});
return G__2664;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__2658.call(this);
case  1 :
return ep3__2659.call(this,x);
case  2 :
return ep3__2660.call(this,x,y);
case  3 :
return ep3__2661.call(this,x,y,z);
default:
return ep3__2662.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__2662.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__2640 = (function() { 
var G__2666__delegate = function (p1,p2,p3,ps){
var ps__2632 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__2667 = (function (){
return true;
});
var epn__2668 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2585_SHARP_){
return p1__2585_SHARP_.call(null,x);
}),ps__2632);
});
var epn__2669 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2586_SHARP_){
var and__3574__auto____2633 = p1__2586_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2633))
{return p1__2586_SHARP_.call(null,y);
} else
{return and__3574__auto____2633;
}
}),ps__2632);
});
var epn__2670 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2587_SHARP_){
var and__3574__auto____2634 = p1__2587_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2634))
{var and__3574__auto____2635 = p1__2587_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____2635))
{return p1__2587_SHARP_.call(null,z);
} else
{return and__3574__auto____2635;
}
} else
{return and__3574__auto____2634;
}
}),ps__2632);
});
var epn__2671 = (function() { 
var G__2673__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2636 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2636))
{return cljs.core.every_QMARK_.call(null,(function (p1__2588_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2588_SHARP_,args);
}),ps__2632);
} else
{return and__3574__auto____2636;
}
})());
};
var G__2673 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2673__delegate.call(this, x, y, z, args);
};
G__2673.cljs$lang$maxFixedArity = 3;
G__2673.cljs$lang$applyTo = (function (arglist__2674){
var x = cljs.core.first(arglist__2674);
var y = cljs.core.first(cljs.core.next(arglist__2674));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2674)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2674)));
return G__2673__delegate.call(this, x, y, z, args);
});
return G__2673;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__2667.call(this);
case  1 :
return epn__2668.call(this,x);
case  2 :
return epn__2669.call(this,x,y);
case  3 :
return epn__2670.call(this,x,y,z);
default:
return epn__2671.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__2671.cljs$lang$applyTo;
return epn;
})()
};
var G__2666 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2666__delegate.call(this, p1, p2, p3, ps);
};
G__2666.cljs$lang$maxFixedArity = 3;
G__2666.cljs$lang$applyTo = (function (arglist__2675){
var p1 = cljs.core.first(arglist__2675);
var p2 = cljs.core.first(cljs.core.next(arglist__2675));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2675)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2675)));
return G__2666__delegate.call(this, p1, p2, p3, ps);
});
return G__2666;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__2637.call(this,p1);
case  2 :
return every_pred__2638.call(this,p1,p2);
case  3 :
return every_pred__2639.call(this,p1,p2,p3);
default:
return every_pred__2640.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__2640.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__2715 = (function (p){
return (function() {
var sp1 = null;
var sp1__2720 = (function (){
return null;
});
var sp1__2721 = (function (x){
return p.call(null,x);
});
var sp1__2722 = (function (x,y){
var or__3576__auto____2677 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2677))
{return or__3576__auto____2677;
} else
{return p.call(null,y);
}
});
var sp1__2723 = (function (x,y,z){
var or__3576__auto____2678 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2678))
{return or__3576__auto____2678;
} else
{var or__3576__auto____2679 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____2679))
{return or__3576__auto____2679;
} else
{return p.call(null,z);
}
}
});
var sp1__2724 = (function() { 
var G__2726__delegate = function (x,y,z,args){
var or__3576__auto____2680 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2680))
{return or__3576__auto____2680;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__2726 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2726__delegate.call(this, x, y, z, args);
};
G__2726.cljs$lang$maxFixedArity = 3;
G__2726.cljs$lang$applyTo = (function (arglist__2727){
var x = cljs.core.first(arglist__2727);
var y = cljs.core.first(cljs.core.next(arglist__2727));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2727)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2727)));
return G__2726__delegate.call(this, x, y, z, args);
});
return G__2726;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__2720.call(this);
case  1 :
return sp1__2721.call(this,x);
case  2 :
return sp1__2722.call(this,x,y);
case  3 :
return sp1__2723.call(this,x,y,z);
default:
return sp1__2724.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__2724.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__2716 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__2728 = (function (){
return null;
});
var sp2__2729 = (function (x){
var or__3576__auto____2681 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2681))
{return or__3576__auto____2681;
} else
{return p2.call(null,x);
}
});
var sp2__2730 = (function (x,y){
var or__3576__auto____2682 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2682))
{return or__3576__auto____2682;
} else
{var or__3576__auto____2683 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2683))
{return or__3576__auto____2683;
} else
{var or__3576__auto____2684 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2684))
{return or__3576__auto____2684;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__2731 = (function (x,y,z){
var or__3576__auto____2685 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2685))
{return or__3576__auto____2685;
} else
{var or__3576__auto____2686 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2686))
{return or__3576__auto____2686;
} else
{var or__3576__auto____2687 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2687))
{return or__3576__auto____2687;
} else
{var or__3576__auto____2688 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2688))
{return or__3576__auto____2688;
} else
{var or__3576__auto____2689 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2689))
{return or__3576__auto____2689;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__2732 = (function() { 
var G__2734__delegate = function (x,y,z,args){
var or__3576__auto____2690 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2690))
{return or__3576__auto____2690;
} else
{return cljs.core.some.call(null,(function (p1__2593_SHARP_){
var or__3576__auto____2691 = p1.call(null,p1__2593_SHARP_);

if(cljs.core.truth_(or__3576__auto____2691))
{return or__3576__auto____2691;
} else
{return p2.call(null,p1__2593_SHARP_);
}
}),args);
}
};
var G__2734 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2734__delegate.call(this, x, y, z, args);
};
G__2734.cljs$lang$maxFixedArity = 3;
G__2734.cljs$lang$applyTo = (function (arglist__2735){
var x = cljs.core.first(arglist__2735);
var y = cljs.core.first(cljs.core.next(arglist__2735));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2735)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2735)));
return G__2734__delegate.call(this, x, y, z, args);
});
return G__2734;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__2728.call(this);
case  1 :
return sp2__2729.call(this,x);
case  2 :
return sp2__2730.call(this,x,y);
case  3 :
return sp2__2731.call(this,x,y,z);
default:
return sp2__2732.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__2732.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__2717 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__2736 = (function (){
return null;
});
var sp3__2737 = (function (x){
var or__3576__auto____2692 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2692))
{return or__3576__auto____2692;
} else
{var or__3576__auto____2693 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2693))
{return or__3576__auto____2693;
} else
{return p3.call(null,x);
}
}
});
var sp3__2738 = (function (x,y){
var or__3576__auto____2694 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2694))
{return or__3576__auto____2694;
} else
{var or__3576__auto____2695 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2695))
{return or__3576__auto____2695;
} else
{var or__3576__auto____2696 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2696))
{return or__3576__auto____2696;
} else
{var or__3576__auto____2697 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2697))
{return or__3576__auto____2697;
} else
{var or__3576__auto____2698 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2698))
{return or__3576__auto____2698;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__2739 = (function (x,y,z){
var or__3576__auto____2699 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2699))
{return or__3576__auto____2699;
} else
{var or__3576__auto____2700 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2700))
{return or__3576__auto____2700;
} else
{var or__3576__auto____2701 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2701))
{return or__3576__auto____2701;
} else
{var or__3576__auto____2702 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2702))
{return or__3576__auto____2702;
} else
{var or__3576__auto____2703 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2703))
{return or__3576__auto____2703;
} else
{var or__3576__auto____2704 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____2704))
{return or__3576__auto____2704;
} else
{var or__3576__auto____2705 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2705))
{return or__3576__auto____2705;
} else
{var or__3576__auto____2706 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____2706))
{return or__3576__auto____2706;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__2740 = (function() { 
var G__2742__delegate = function (x,y,z,args){
var or__3576__auto____2707 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2707))
{return or__3576__auto____2707;
} else
{return cljs.core.some.call(null,(function (p1__2594_SHARP_){
var or__3576__auto____2708 = p1.call(null,p1__2594_SHARP_);

if(cljs.core.truth_(or__3576__auto____2708))
{return or__3576__auto____2708;
} else
{var or__3576__auto____2709 = p2.call(null,p1__2594_SHARP_);

if(cljs.core.truth_(or__3576__auto____2709))
{return or__3576__auto____2709;
} else
{return p3.call(null,p1__2594_SHARP_);
}
}
}),args);
}
};
var G__2742 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2742__delegate.call(this, x, y, z, args);
};
G__2742.cljs$lang$maxFixedArity = 3;
G__2742.cljs$lang$applyTo = (function (arglist__2743){
var x = cljs.core.first(arglist__2743);
var y = cljs.core.first(cljs.core.next(arglist__2743));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2743)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2743)));
return G__2742__delegate.call(this, x, y, z, args);
});
return G__2742;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__2736.call(this);
case  1 :
return sp3__2737.call(this,x);
case  2 :
return sp3__2738.call(this,x,y);
case  3 :
return sp3__2739.call(this,x,y,z);
default:
return sp3__2740.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__2740.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__2718 = (function() { 
var G__2744__delegate = function (p1,p2,p3,ps){
var ps__2710 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__2745 = (function (){
return null;
});
var spn__2746 = (function (x){
return cljs.core.some.call(null,(function (p1__2595_SHARP_){
return p1__2595_SHARP_.call(null,x);
}),ps__2710);
});
var spn__2747 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2596_SHARP_){
var or__3576__auto____2711 = p1__2596_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2711))
{return or__3576__auto____2711;
} else
{return p1__2596_SHARP_.call(null,y);
}
}),ps__2710);
});
var spn__2748 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2597_SHARP_){
var or__3576__auto____2712 = p1__2597_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2712))
{return or__3576__auto____2712;
} else
{var or__3576__auto____2713 = p1__2597_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____2713))
{return or__3576__auto____2713;
} else
{return p1__2597_SHARP_.call(null,z);
}
}
}),ps__2710);
});
var spn__2749 = (function() { 
var G__2751__delegate = function (x,y,z,args){
var or__3576__auto____2714 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2714))
{return or__3576__auto____2714;
} else
{return cljs.core.some.call(null,(function (p1__2598_SHARP_){
return cljs.core.some.call(null,p1__2598_SHARP_,args);
}),ps__2710);
}
};
var G__2751 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2751__delegate.call(this, x, y, z, args);
};
G__2751.cljs$lang$maxFixedArity = 3;
G__2751.cljs$lang$applyTo = (function (arglist__2752){
var x = cljs.core.first(arglist__2752);
var y = cljs.core.first(cljs.core.next(arglist__2752));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2752)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2752)));
return G__2751__delegate.call(this, x, y, z, args);
});
return G__2751;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__2745.call(this);
case  1 :
return spn__2746.call(this,x);
case  2 :
return spn__2747.call(this,x,y);
case  3 :
return spn__2748.call(this,x,y,z);
default:
return spn__2749.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__2749.cljs$lang$applyTo;
return spn;
})()
};
var G__2744 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2744__delegate.call(this, p1, p2, p3, ps);
};
G__2744.cljs$lang$maxFixedArity = 3;
G__2744.cljs$lang$applyTo = (function (arglist__2753){
var p1 = cljs.core.first(arglist__2753);
var p2 = cljs.core.first(cljs.core.next(arglist__2753));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2753)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2753)));
return G__2744__delegate.call(this, p1, p2, p3, ps);
});
return G__2744;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__2715.call(this,p1);
case  2 :
return some_fn__2716.call(this,p1,p2);
case  3 :
return some_fn__2717.call(this,p1,p2,p3);
default:
return some_fn__2718.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__2718.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2766 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2754 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2754))
{var s__2755 = temp__3726__auto____2754;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__2755)),map.call(null,f,cljs.core.rest.call(null,s__2755)));
} else
{return null;
}
})));
});
var map__2767 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2756 = cljs.core.seq.call(null,c1);
var s2__2757 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2758 = s1__2756;

if(cljs.core.truth_(and__3574__auto____2758))
{return s2__2757;
} else
{return and__3574__auto____2758;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2756),cljs.core.first.call(null,s2__2757)),map.call(null,f,cljs.core.rest.call(null,s1__2756),cljs.core.rest.call(null,s2__2757)));
} else
{return null;
}
})));
});
var map__2768 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2759 = cljs.core.seq.call(null,c1);
var s2__2760 = cljs.core.seq.call(null,c2);
var s3__2761 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____2762 = s1__2759;

if(cljs.core.truth_(and__3574__auto____2762))
{var and__3574__auto____2763 = s2__2760;

if(cljs.core.truth_(and__3574__auto____2763))
{return s3__2761;
} else
{return and__3574__auto____2763;
}
} else
{return and__3574__auto____2762;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2759),cljs.core.first.call(null,s2__2760),cljs.core.first.call(null,s3__2761)),map.call(null,f,cljs.core.rest.call(null,s1__2759),cljs.core.rest.call(null,s2__2760),cljs.core.rest.call(null,s3__2761)));
} else
{return null;
}
})));
});
var map__2769 = (function() { 
var G__2771__delegate = function (f,c1,c2,c3,colls){
var step__2765 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2764 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2764)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__2764),step.call(null,map.call(null,cljs.core.rest,ss__2764)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__2676_SHARP_){
return cljs.core.apply.call(null,f,p1__2676_SHARP_);
}),step__2765.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__2771 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2771__delegate.call(this, f, c1, c2, c3, colls);
};
G__2771.cljs$lang$maxFixedArity = 4;
G__2771.cljs$lang$applyTo = (function (arglist__2772){
var f = cljs.core.first(arglist__2772);
var c1 = cljs.core.first(cljs.core.next(arglist__2772));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2772)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2772))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2772))));
return G__2771__delegate.call(this, f, c1, c2, c3, colls);
});
return G__2771;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__2766.call(this,f,c1);
case  3 :
return map__2767.call(this,f,c1,c2);
case  4 :
return map__2768.call(this,f,c1,c2,c3);
default:
return map__2769.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__2769.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,n)))
{var temp__3726__auto____2773 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2773))
{var s__2774 = temp__3726__auto____2773;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__2774),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__2774)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__2777 = (function (n,coll){
while(true){
var s__2775 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2776 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2776))
{return s__2775;
} else
{return and__3574__auto____2776;
}
})()))
{{
var G__2778 = cljs.core.dec.call(null,n);
var G__2779 = cljs.core.rest.call(null,s__2775);
n = G__2778;
coll = G__2779;
continue;
}
} else
{return s__2775;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2777.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__2780 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2781 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__2780.call(this,n);
case  2 :
return drop_last__2781.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__2783 = cljs.core.seq.call(null,coll);
var lead__2784 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__2784))
{{
var G__2785 = cljs.core.next.call(null,s__2783);
var G__2786 = cljs.core.next.call(null,lead__2784);
s__2783 = G__2785;
lead__2784 = G__2786;
continue;
}
} else
{return s__2783;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__2789 = (function (pred,coll){
while(true){
var s__2787 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2788 = s__2787;

if(cljs.core.truth_(and__3574__auto____2788))
{return pred.call(null,cljs.core.first.call(null,s__2787));
} else
{return and__3574__auto____2788;
}
})()))
{{
var G__2790 = pred;
var G__2791 = cljs.core.rest.call(null,s__2787);
pred = G__2790;
coll = G__2791;
continue;
}
} else
{return s__2787;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2789.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2792 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2792))
{var s__2793 = temp__3726__auto____2792;

return cljs.core.concat.call(null,s__2793,cycle.call(null,s__2793));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__2794 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2795 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__2794.call(this,n);
case  2 :
return repeat__2795.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__2797 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2798 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__2797.call(this,n);
case  2 :
return repeatedly__2798.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2804 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2800 = cljs.core.seq.call(null,c1);
var s2__2801 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2802 = s1__2800;

if(cljs.core.truth_(and__3574__auto____2802))
{return s2__2801;
} else
{return and__3574__auto____2802;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__2800),cljs.core.cons.call(null,cljs.core.first.call(null,s2__2801),interleave.call(null,cljs.core.rest.call(null,s1__2800),cljs.core.rest.call(null,s2__2801))));
} else
{return null;
}
})));
});
var interleave__2805 = (function() { 
var G__2807__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2803 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2803)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__2803),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__2803)));
} else
{return null;
}
})));
};
var G__2807 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2807__delegate.call(this, c1, c2, colls);
};
G__2807.cljs$lang$maxFixedArity = 2;
G__2807.cljs$lang$applyTo = (function (arglist__2808){
var c1 = cljs.core.first(arglist__2808);
var c2 = cljs.core.first(cljs.core.next(arglist__2808));
var colls = cljs.core.rest(cljs.core.next(arglist__2808));
return G__2807__delegate.call(this, c1, c2, colls);
});
return G__2807;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__2804.call(this,c1,c2);
default:
return interleave__2805.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__2805.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__2811 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____2809 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2809))
{var coll__2810 = temp__3723__auto____2809;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__2810),cat.call(null,cljs.core.rest.call(null,coll__2810),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__2811.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2812 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__2813 = (function() { 
var G__2815__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__2815 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2815__delegate.call(this, f, coll, colls);
};
G__2815.cljs$lang$maxFixedArity = 2;
G__2815.cljs$lang$applyTo = (function (arglist__2816){
var f = cljs.core.first(arglist__2816);
var coll = cljs.core.first(cljs.core.next(arglist__2816));
var colls = cljs.core.rest(cljs.core.next(arglist__2816));
return G__2815__delegate.call(this, f, coll, colls);
});
return G__2815;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__2812.call(this,f,coll);
default:
return mapcat__2813.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__2813.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2817 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2817))
{var s__2818 = temp__3726__auto____2817;

var f__2819 = cljs.core.first.call(null,s__2818);
var r__2820 = cljs.core.rest.call(null,s__2818);

if(cljs.core.truth_(pred.call(null,f__2819)))
{return cljs.core.cons.call(null,f__2819,filter.call(null,pred,r__2820));
} else
{return filter.call(null,pred,r__2820);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__2822 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__2822.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__2821_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__2821_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2829 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__2830 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2823 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2823))
{var s__2824 = temp__3726__auto____2823;

var p__2825 = cljs.core.take.call(null,n,s__2824);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2825))))
{return cljs.core.cons.call(null,p__2825,partition.call(null,n,step,cljs.core.drop.call(null,step,s__2824)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__2831 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2826 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2826))
{var s__2827 = temp__3726__auto____2826;

var p__2828 = cljs.core.take.call(null,n,s__2827);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2828))))
{return cljs.core.cons.call(null,p__2828,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__2827)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__2828,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__2829.call(this,n,step);
case  3 :
return partition__2830.call(this,n,step,pad);
case  4 :
return partition__2831.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2837 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__2838 = (function (m,ks,not_found){
var sentinel__2833 = cljs.core.lookup_sentinel;
var m__2834 = m;
var ks__2835 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__2835))
{var m__2836 = cljs.core.get.call(null,m__2834,cljs.core.first.call(null,ks__2835),sentinel__2833);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__2833,m__2836)))
{return not_found;
} else
{{
var G__2840 = sentinel__2833;
var G__2841 = m__2836;
var G__2842 = cljs.core.next.call(null,ks__2835);
sentinel__2833 = G__2840;
m__2834 = G__2841;
ks__2835 = G__2842;
continue;
}
}
} else
{return m__2834;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__2837.call(this,m,ks);
case  3 :
return get_in__2838.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__2843,v){
var vec__2844__2845 = p__2843;
var k__2846 = cljs.core.nth.call(null,vec__2844__2845,0,null);
var ks__2847 = cljs.core.nthnext.call(null,vec__2844__2845,1);

if(cljs.core.truth_(ks__2847))
{return cljs.core.assoc.call(null,m,k__2846,assoc_in.call(null,cljs.core.get.call(null,m,k__2846),ks__2847,v));
} else
{return cljs.core.assoc.call(null,m,k__2846,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__2848,f,args){
var vec__2849__2850 = p__2848;
var k__2851 = cljs.core.nth.call(null,vec__2849__2850,0,null);
var ks__2852 = cljs.core.nthnext.call(null,vec__2849__2850,1);

if(cljs.core.truth_(ks__2852))
{return cljs.core.assoc.call(null,m,k__2851,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__2851),ks__2852,f,args));
} else
{return cljs.core.assoc.call(null,m,k__2851,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__2851),args));
}
};
var update_in = function (m,p__2848,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__2848, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__2853){
var m = cljs.core.first(arglist__2853);
var p__2848 = cljs.core.first(cljs.core.next(arglist__2853));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2853)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2853)));
return update_in__delegate.call(this, m, p__2848, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2854 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2855 = this;
var new_array__2856 = cljs.core.aclone.call(null,this__2855.array);

new_array__2856.push(o);
return (new cljs.core.Vector(this__2855.meta,new_array__2856));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2857 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2857.array.length,0)))
{var vector_seq__2858 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__2857.array.length)))
{return cljs.core.cons.call(null,(this__2857.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__2858.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__2859 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2860 = this;
var count__2861 = this__2860.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__2861,0)))
{return (this__2860.array[cljs.core.dec.call(null,count__2861)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2862 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2862.array.length,0)))
{var new_array__2863 = cljs.core.aclone.call(null,this__2862.array);

new_array__2863.pop();
return (new cljs.core.Vector(this__2862.meta,new_array__2863));
} else
{throw "Can't pop empty vector";
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2864 = this;
return (new cljs.core.Vector(meta,this__2864.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2865 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__2865.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2879 = null;
var G__2879__2880 = (function (coll,n){
var this__2866 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2867 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2867))
{return cljs.core._LT_.call(null,n,this__2866.array.length);
} else
{return and__3574__auto____2867;
}
})()))
{return (this__2866.array[n]);
} else
{return null;
}
});
var G__2879__2881 = (function (coll,n,not_found){
var this__2868 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2869 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2869))
{return cljs.core._LT_.call(null,n,this__2868.array.length);
} else
{return and__3574__auto____2869;
}
})()))
{return (this__2868.array[n]);
} else
{return not_found;
}
});
G__2879 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2879__2880.call(this,coll,n);
case  3 :
return G__2879__2881.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2879;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2870 = this;
return this__2870.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2883 = null;
var G__2883__2884 = (function (v,f){
var this__2871 = this;
return cljs.core.ci_reduce.call(null,this__2871.array,f);
});
var G__2883__2885 = (function (v,f,start){
var this__2872 = this;
return cljs.core.ci_reduce.call(null,this__2872.array,f,start);
});
G__2883 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__2883__2884.call(this,v,f);
case  3 :
return G__2883__2885.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2883;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2873 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2874 = this;
return this__2874.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2875 = this;
var new_array__2876 = cljs.core.aclone.call(null,this__2875.array);

(new_array__2876[k] = v);
return (new cljs.core.Vector(this__2875.meta,new_array__2876));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2887 = null;
var G__2887__2888 = (function (coll,k){
var this__2877 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__2887__2889 = (function (coll,k,not_found){
var this__2878 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__2887 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2887__2888.call(this,coll,k);
case  3 :
return G__2887__2889.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2887;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__2891 = null;
var G__2891__2892 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2891__2893 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2891 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2891__2892.call(this,_,k);
case  3 :
return G__2891__2893.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2891;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__2895){
var args = cljs.core.seq( arglist__2895 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__2896 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__2897 = array.length;

var i__2898 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2898,len__2897)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__2898]))))
{return i__2898;
} else
{{
var G__2899 = cljs.core._PLUS_.call(null,i__2898,incr);
i__2898 = G__2899;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___2901 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___2902 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____2900 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2900))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2900;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___2901.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___2902.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2905 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2906 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2907 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2907.keys.length)))
{return cljs.core.map.call(null,(function (p1__2904_SHARP_){
return cljs.core.vector.call(null,p1__2904_SHARP_,(this__2907.strobj[p1__2904_SHARP_]));
}),this__2907.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2908 = this;
return (new cljs.core.ObjMap(meta,this__2908.keys,this__2908.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2909 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2910 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2910))
{return this__2909.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2910;
}
})()))
{var new_keys__2911 = cljs.core.aclone.call(null,this__2909.keys);
var new_strobj__2912 = goog.object.clone.call(null,this__2909.strobj);

new_keys__2911.splice(cljs.core.scan_array.call(null,1,k,new_keys__2911),1);
cljs.core.js_delete.call(null,new_strobj__2912,k);
return (new cljs.core.ObjMap(this__2909.meta,new_keys__2911,new_strobj__2912));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2913 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__2913.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2914 = this;
return this__2914.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2915 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2916 = this;
return this__2916.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2917 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__2918 = goog.object.clone.call(null,this__2917.strobj);
var overwrite_QMARK___2919 = new_strobj__2918.hasOwnProperty(k);

(new_strobj__2918[k] = v);
if(cljs.core.truth_(overwrite_QMARK___2919))
{return (new cljs.core.ObjMap(this__2917.meta,this__2917.keys,new_strobj__2918));
} else
{var new_keys__2920 = cljs.core.aclone.call(null,this__2917.keys);

new_keys__2920.push(k);
return (new cljs.core.ObjMap(this__2917.meta,new_keys__2920,new_strobj__2918));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__2917.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__2921 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__2921.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2924 = null;
var G__2924__2925 = (function (coll,k){
var this__2922 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__2924__2926 = (function (coll,k,not_found){
var this__2923 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__2923.strobj,(this__2923.strobj[k]),not_found);
});
G__2924 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2924__2925.call(this,coll,k);
case  3 :
return G__2924__2926.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2924;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__2929 = null;
var G__2929__2930 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2929__2931 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2929 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2929__2930.call(this,_,k);
case  3 :
return G__2929__2931.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2929;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2933 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2934 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2935 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2935.count)))
{var hashes__2936 = cljs.core.js_keys.call(null,this__2935.hashobj);

return cljs.core.mapcat.call(null,(function (p1__2928_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__2935.hashobj[p1__2928_SHARP_])));
}),hashes__2936);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2937 = this;
return (new cljs.core.HashMap(meta,this__2937.count,this__2937.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2938 = this;
var h__2939 = cljs.core.hash.call(null,k);
var bucket__2940 = (this__2938.hashobj[h__2939]);
var i__2941 = (cljs.core.truth_(bucket__2940)?cljs.core.scan_array.call(null,2,k,bucket__2940):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__2941)))
{return coll;
} else
{var new_hashobj__2942 = goog.object.clone.call(null,this__2938.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__2940.length)))
{cljs.core.js_delete.call(null,new_hashobj__2942,h__2939);
} else
{var new_bucket__2943 = cljs.core.aclone.call(null,bucket__2940);

new_bucket__2943.splice(i__2941,2);
(new_hashobj__2942[h__2939] = new_bucket__2943);
}
return (new cljs.core.HashMap(this__2938.meta,cljs.core.dec.call(null,this__2938.count),new_hashobj__2942));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2944 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__2944.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2945 = this;
return this__2945.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2946 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2947 = this;
return this__2947.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2948 = this;
var h__2949 = cljs.core.hash.call(null,k);
var bucket__2950 = (this__2948.hashobj[h__2949]);

if(cljs.core.truth_(bucket__2950))
{var new_bucket__2951 = cljs.core.aclone.call(null,bucket__2950);
var new_hashobj__2952 = goog.object.clone.call(null,this__2948.hashobj);

(new_hashobj__2952[h__2949] = new_bucket__2951);
var temp__3723__auto____2953 = cljs.core.scan_array.call(null,2,k,new_bucket__2951);

if(cljs.core.truth_(temp__3723__auto____2953))
{var i__2954 = temp__3723__auto____2953;

(new_bucket__2951[cljs.core.inc.call(null,i__2954)] = v);
return (new cljs.core.HashMap(this__2948.meta,this__2948.count,new_hashobj__2952));
} else
{new_bucket__2951.push(k,v);
return (new cljs.core.HashMap(this__2948.meta,cljs.core.inc.call(null,this__2948.count),new_hashobj__2952));
}
} else
{var new_hashobj__2955 = goog.object.clone.call(null,this__2948.hashobj);

(new_hashobj__2955[h__2949] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__2948.meta,cljs.core.inc.call(null,this__2948.count),new_hashobj__2955));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__2956 = this;
var bucket__2957 = (this__2956.hashobj[cljs.core.hash.call(null,k)]);
var i__2958 = (cljs.core.truth_(bucket__2957)?cljs.core.scan_array.call(null,2,k,bucket__2957):null);

if(cljs.core.truth_(i__2958))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2963 = null;
var G__2963__2964 = (function (coll,k){
var this__2959 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__2963__2965 = (function (coll,k,not_found){
var this__2960 = this;
var bucket__2961 = (this__2960.hashobj[cljs.core.hash.call(null,k)]);
var i__2962 = (cljs.core.truth_(bucket__2961)?cljs.core.scan_array.call(null,2,k,bucket__2961):null);

if(cljs.core.truth_(i__2962))
{return (bucket__2961[cljs.core.inc.call(null,i__2962)]);
} else
{return not_found;
}
});
G__2963 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2963__2964.call(this,coll,k);
case  3 :
return G__2963__2965.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2963;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__2967 = ks.length;

var i__2968 = 0;
var out__2969 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2968,len__2967)))
{{
var G__2970 = cljs.core.inc.call(null,i__2968);
var G__2971 = cljs.core.assoc.call(null,out__2969,(ks[i__2968]),(vs[i__2968]));
i__2968 = G__2970;
out__2969 = G__2971;
continue;
}
} else
{return out__2969;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__2972 = null;
var G__2972__2973 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2972__2974 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2972 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2972__2973.call(this,_,k);
case  3 :
return G__2972__2974.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2972;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__2976 = cljs.core.seq.call(null,keyvals);
var out__2977 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__2976))
{{
var G__2978 = cljs.core.nnext.call(null,in$__2976);
var G__2979 = cljs.core.assoc.call(null,out__2977,cljs.core.first.call(null,in$__2976),cljs.core.second.call(null,in$__2976));
in$__2976 = G__2978;
out__2977 = G__2979;
continue;
}
} else
{return out__2977;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__2980){
var keyvals = cljs.core.seq( arglist__2980 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__2981_SHARP_,p2__2982_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____2983 = p1__2981_SHARP_;

if(cljs.core.truth_(or__3576__auto____2983))
{return or__3576__auto____2983;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__2982_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__2984){
var maps = cljs.core.seq( arglist__2984 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__2987 = (function (m,e){
var k__2985 = cljs.core.first.call(null,e);
var v__2986 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__2985)))
{return cljs.core.assoc.call(null,m,k__2985,f.call(null,cljs.core.get.call(null,m,k__2985),v__2986));
} else
{return cljs.core.assoc.call(null,m,k__2985,v__2986);
}
});
var merge2__2989 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__2987,(function (){var or__3576__auto____2988 = m1;

if(cljs.core.truth_(or__3576__auto____2988))
{return or__3576__auto____2988;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__2989,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__2990){
var f = cljs.core.first(arglist__2990);
var maps = cljs.core.rest(arglist__2990);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__2992 = cljs.core.ObjMap.fromObject([],{});
var keys__2993 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__2993))
{var key__2994 = cljs.core.first.call(null,keys__2993);
var entry__2995 = cljs.core.get.call(null,map,key__2994);

{
var G__2996 = (cljs.core.truth_(entry__2995)?cljs.core.assoc.call(null,ret__2992,key__2994,entry__2995):ret__2992);
var G__2997 = cljs.core.next.call(null,keys__2993);
ret__2992 = G__2996;
keys__2993 = G__2997;
continue;
}
} else
{return ret__2992;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__2998 = this;
return (new cljs.core.Set(this__2998.meta,cljs.core.dissoc.call(null,this__2998.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2999 = this;
var and__3574__auto____3000 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____3000))
{var and__3574__auto____3001 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____3001))
{return cljs.core.every_QMARK_.call(null,(function (p1__2991_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__2991_SHARP_);
}),other);
} else
{return and__3574__auto____3001;
}
} else
{return and__3574__auto____3000;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3002 = this;
return (new cljs.core.Set(this__3002.meta,cljs.core.assoc.call(null,this__3002.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3003 = this;
return cljs.core.keys.call(null,this__3003.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3004 = this;
return (new cljs.core.Set(meta,this__3004.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3005 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3005.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3006 = this;
return this__3006.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3007 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3008 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3011 = null;
var G__3011__3012 = (function (coll,v){
var this__3009 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3011__3013 = (function (coll,v,not_found){
var this__3010 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3010.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3011 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3011__3012.call(this,coll,v);
case  3 :
return G__3011__3013.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3011;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3015 = null;
var G__3015__3016 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3015__3017 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3015 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3015__3016.call(this,_,k);
case  3 :
return G__3015__3017.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3015;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3020 = cljs.core.seq.call(null,coll);
var out__3021 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3020))))
{{
var G__3022 = cljs.core.rest.call(null,in$__3020);
var G__3023 = cljs.core.conj.call(null,out__3021,cljs.core.first.call(null,in$__3020));
in$__3020 = G__3022;
out__3021 = G__3023;
continue;
}
} else
{return out__3021;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3024 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3723__auto____3025 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3723__auto____3025))
{var e__3026 = temp__3723__auto____3025;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3026));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3024,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3019_SHARP_){
var temp__3723__auto____3027 = cljs.core.find.call(null,smap,p1__3019_SHARP_);

if(cljs.core.truth_(temp__3723__auto____3027))
{var e__3028 = temp__3723__auto____3027;

return cljs.core.second.call(null,e__3028);
} else
{return p1__3019_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3036 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3029,seen){
while(true){
var vec__3030__3031 = p__3029;
var f__3032 = cljs.core.nth.call(null,vec__3030__3031,0,null);
var xs__3033 = vec__3030__3031;

var temp__3726__auto____3034 = cljs.core.seq.call(null,xs__3033);

if(cljs.core.truth_(temp__3726__auto____3034))
{var s__3035 = temp__3726__auto____3034;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3032)))
{{
var G__3037 = cljs.core.rest.call(null,s__3035);
var G__3038 = seen;
p__3029 = G__3037;
seen = G__3038;
continue;
}
} else
{return cljs.core.cons.call(null,f__3032,step.call(null,cljs.core.rest.call(null,s__3035),cljs.core.conj.call(null,seen,f__3032)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3036.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3039 = cljs.core.Vector.fromArray([]);
var s__3040 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3040)))
{{
var G__3041 = cljs.core.conj.call(null,ret__3039,cljs.core.first.call(null,s__3040));
var G__3042 = cljs.core.next.call(null,s__3040);
ret__3039 = G__3041;
s__3040 = G__3042;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3039);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3576__auto____3043 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3043))
{return or__3576__auto____3043;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3044 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__3044,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__3044));
}
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3576__auto____3045 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3045))
{return or__3576__auto____3045;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3046 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__3046,-1)))
{return cljs.core.subs.call(null,x,2,i__3046);
} else
{return null;
}
} else
{return "﷐'else";
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3049 = cljs.core.ObjMap.fromObject([],{});
var ks__3050 = cljs.core.seq.call(null,keys);
var vs__3051 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3052 = ks__3050;

if(cljs.core.truth_(and__3574__auto____3052))
{return vs__3051;
} else
{return and__3574__auto____3052;
}
})()))
{{
var G__3053 = cljs.core.assoc.call(null,map__3049,cljs.core.first.call(null,ks__3050),cljs.core.first.call(null,vs__3051));
var G__3054 = cljs.core.next.call(null,ks__3050);
var G__3055 = cljs.core.next.call(null,vs__3051);
map__3049 = G__3053;
ks__3050 = G__3054;
vs__3051 = G__3055;
continue;
}
} else
{return map__3049;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3058 = (function (k,x){
return x;
});
var max_key__3059 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3060 = (function() { 
var G__3062__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3047_SHARP_,p2__3048_SHARP_){
return max_key.call(null,k,p1__3047_SHARP_,p2__3048_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3062 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3062__delegate.call(this, k, x, y, more);
};
G__3062.cljs$lang$maxFixedArity = 3;
G__3062.cljs$lang$applyTo = (function (arglist__3063){
var k = cljs.core.first(arglist__3063);
var x = cljs.core.first(cljs.core.next(arglist__3063));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3063)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3063)));
return G__3062__delegate.call(this, k, x, y, more);
});
return G__3062;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3058.call(this,k,x);
case  3 :
return max_key__3059.call(this,k,x,y);
default:
return max_key__3060.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3060.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3064 = (function (k,x){
return x;
});
var min_key__3065 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3066 = (function() { 
var G__3068__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3056_SHARP_,p2__3057_SHARP_){
return min_key.call(null,k,p1__3056_SHARP_,p2__3057_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3068 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3068__delegate.call(this, k, x, y, more);
};
G__3068.cljs$lang$maxFixedArity = 3;
G__3068.cljs$lang$applyTo = (function (arglist__3069){
var k = cljs.core.first(arglist__3069);
var x = cljs.core.first(cljs.core.next(arglist__3069));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3069)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3069)));
return G__3068__delegate.call(this, k, x, y, more);
});
return G__3068;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3064.call(this,k,x);
case  3 :
return min_key__3065.call(this,k,x,y);
default:
return min_key__3066.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3066.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3072 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3073 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3070 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3070))
{var s__3071 = temp__3726__auto____3070;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3071),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3071)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3072.call(this,n,step);
case  3 :
return partition_all__3073.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3075 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3075))
{var s__3076 = temp__3726__auto____3075;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3076))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3076),take_while.call(null,pred,cljs.core.rest.call(null,s__3076)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3077 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3078 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3079 = this;
return this__3079.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3080 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core._seq.call(null,rng)))))
{return (new cljs.core.Range(this__3080.meta,cljs.core._PLUS_.call(null,this__3080.start,this__3080.step),this__3080.end,this__3080.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3081 = this;
var comp__3082 = (cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3081.step))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3082.call(null,this__3081.start,this__3081.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3083 = this;
return (new cljs.core.Range(meta,this__3083.start,this__3083.end,this__3083.step));
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3084 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3084.meta);
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3096 = null;
var G__3096__3097 = (function (rng,n){
var this__3085 = this;
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,rng))))
{return cljs.core._PLUS_.call(null,this__3085.start,cljs.core._STAR_.call(null,n,this__3085.step));
} else
{if(cljs.core.truth_((function (){var and__3574__auto____3086 = cljs.core._GT_.call(null,this__3085.start,this__3085.end);

if(cljs.core.truth_(and__3574__auto____3086))
{return cljs.core._EQ_.call(null,this__3085.step,0);
} else
{return and__3574__auto____3086;
}
})()))
{return this__3085.start;
} else
{throw "Index out of bounds";
}
}
});
var G__3096__3098 = (function (rng,n,not_found){
var this__3087 = this;
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,rng))))
{return cljs.core._PLUS_.call(null,this__3087.start,cljs.core._STAR_.call(null,n,this__3087.step));
} else
{if(cljs.core.truth_((function (){var and__3574__auto____3088 = cljs.core._GT_.call(null,this__3087.start,this__3087.end);

if(cljs.core.truth_(and__3574__auto____3088))
{return cljs.core._EQ_.call(null,this__3087.step,0);
} else
{return and__3574__auto____3088;
}
})()))
{return this__3087.start;
} else
{return not_found;
}
}
});
G__3096 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3096__3097.call(this,rng,n);
case  3 :
return G__3096__3098.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3096;
})()
;
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3089 = this;
return this__3089.meta;
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3100 = null;
var G__3100__3101 = (function (rng,f){
var this__3090 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3100__3102 = (function (rng,f,s){
var this__3091 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3100 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3100__3101.call(this,rng,f);
case  3 :
return G__3100__3102.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3100;
})()
;
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3092 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3093 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{if(cljs.core.truth_((function (){var and__3574__auto____3094 = cljs.core._EQ_.call(null,this__3093.start,0);

if(cljs.core.truth_(and__3574__auto____3094))
{var and__3574__auto____3095 = cljs.core._LT_.call(null,this__3093.start,this__3093.end);

if(cljs.core.truth_(and__3574__auto____3095))
{return cljs.core._EQ_.call(null,this__3093.step,1);
} else
{return and__3574__auto____3095;
}
} else
{return and__3574__auto____3094;
}
})()))
{return cljs.core._.call(null,this__3093.end,this__3093.start);
} else
{if(cljs.core.truth_("﷐'else"))
{return goog.global['Math']['ceil'].call(null,cljs.core._SLASH_.call(null,cljs.core._.call(null,this__3093.end,this__3093.start),this__3093.step));
} else
{return null;
}
}
}
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3104 = (function (){
return range.call(null,0,goog.global['Number']['MAX_VALUE'],1);
});
var range__3105 = (function (end){
return range.call(null,0,end,1);
});
var range__3106 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3107 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3104.call(this);
case  1 :
return range__3105.call(this,start);
case  2 :
return range__3106.call(this,start,end);
case  3 :
return range__3107.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3109 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3109))
{var s__3110 = temp__3726__auto____3109;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3110),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3110)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3112 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3112))
{var s__3113 = temp__3726__auto____3112;

var fst__3114 = cljs.core.first.call(null,s__3113);
var fv__3115 = f.call(null,fst__3114);
var run__3116 = cljs.core.cons.call(null,fst__3114,cljs.core.take_while.call(null,(function (p1__3111_SHARP_){
return cljs.core._EQ_.call(null,fv__3115,f.call(null,p1__3111_SHARP_));
}),cljs.core.next.call(null,s__3113)));

return cljs.core.cons.call(null,run__3116,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3116),s__3113))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,cljs.core.inc.call(null,cljs.core.get.call(null,counts,x,0)));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3131 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____3127 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____3127))
{var s__3128 = temp__3723__auto____3127;

return reductions.call(null,f,cljs.core.first.call(null,s__3128),cljs.core.rest.call(null,s__3128));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3132 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3129 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3129))
{var s__3130 = temp__3726__auto____3129;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3130)),cljs.core.rest.call(null,s__3130));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3131.call(this,f,init);
case  3 :
return reductions__3132.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3135 = (function (f){
return (function() {
var G__3140 = null;
var G__3140__3141 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3140__3142 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3140__3143 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3140__3144 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3140__3145 = (function() { 
var G__3147__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3147 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3147__delegate.call(this, x, y, z, args);
};
G__3147.cljs$lang$maxFixedArity = 3;
G__3147.cljs$lang$applyTo = (function (arglist__3148){
var x = cljs.core.first(arglist__3148);
var y = cljs.core.first(cljs.core.next(arglist__3148));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3148)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3148)));
return G__3147__delegate.call(this, x, y, z, args);
});
return G__3147;
})()
;
G__3140 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3140__3141.call(this);
case  1 :
return G__3140__3142.call(this,x);
case  2 :
return G__3140__3143.call(this,x,y);
case  3 :
return G__3140__3144.call(this,x,y,z);
default:
return G__3140__3145.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3140.cljs$lang$maxFixedArity = 3;
G__3140.cljs$lang$applyTo = G__3140__3145.cljs$lang$applyTo;
return G__3140;
})()
});
var juxt__3136 = (function (f,g){
return (function() {
var G__3149 = null;
var G__3149__3150 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3149__3151 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3149__3152 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3149__3153 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3149__3154 = (function() { 
var G__3156__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3156 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3156__delegate.call(this, x, y, z, args);
};
G__3156.cljs$lang$maxFixedArity = 3;
G__3156.cljs$lang$applyTo = (function (arglist__3157){
var x = cljs.core.first(arglist__3157);
var y = cljs.core.first(cljs.core.next(arglist__3157));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3157)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3157)));
return G__3156__delegate.call(this, x, y, z, args);
});
return G__3156;
})()
;
G__3149 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3149__3150.call(this);
case  1 :
return G__3149__3151.call(this,x);
case  2 :
return G__3149__3152.call(this,x,y);
case  3 :
return G__3149__3153.call(this,x,y,z);
default:
return G__3149__3154.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3149.cljs$lang$maxFixedArity = 3;
G__3149.cljs$lang$applyTo = G__3149__3154.cljs$lang$applyTo;
return G__3149;
})()
});
var juxt__3137 = (function (f,g,h){
return (function() {
var G__3158 = null;
var G__3158__3159 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3158__3160 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3158__3161 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3158__3162 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3158__3163 = (function() { 
var G__3165__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3165 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3165__delegate.call(this, x, y, z, args);
};
G__3165.cljs$lang$maxFixedArity = 3;
G__3165.cljs$lang$applyTo = (function (arglist__3166){
var x = cljs.core.first(arglist__3166);
var y = cljs.core.first(cljs.core.next(arglist__3166));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3166)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3166)));
return G__3165__delegate.call(this, x, y, z, args);
});
return G__3165;
})()
;
G__3158 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3158__3159.call(this);
case  1 :
return G__3158__3160.call(this,x);
case  2 :
return G__3158__3161.call(this,x,y);
case  3 :
return G__3158__3162.call(this,x,y,z);
default:
return G__3158__3163.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3158.cljs$lang$maxFixedArity = 3;
G__3158.cljs$lang$applyTo = G__3158__3163.cljs$lang$applyTo;
return G__3158;
})()
});
var juxt__3138 = (function() { 
var G__3167__delegate = function (f,g,h,fs){
var fs__3134 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3168 = null;
var G__3168__3169 = (function (){
return cljs.core.reduce.call(null,(function (p1__3117_SHARP_,p2__3118_SHARP_){
return cljs.core.conj.call(null,p1__3117_SHARP_,p2__3118_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3134);
});
var G__3168__3170 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3119_SHARP_,p2__3120_SHARP_){
return cljs.core.conj.call(null,p1__3119_SHARP_,p2__3120_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3134);
});
var G__3168__3171 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3121_SHARP_,p2__3122_SHARP_){
return cljs.core.conj.call(null,p1__3121_SHARP_,p2__3122_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3134);
});
var G__3168__3172 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3123_SHARP_,p2__3124_SHARP_){
return cljs.core.conj.call(null,p1__3123_SHARP_,p2__3124_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3134);
});
var G__3168__3173 = (function() { 
var G__3175__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3125_SHARP_,p2__3126_SHARP_){
return cljs.core.conj.call(null,p1__3125_SHARP_,cljs.core.apply.call(null,p2__3126_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3134);
};
var G__3175 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3175__delegate.call(this, x, y, z, args);
};
G__3175.cljs$lang$maxFixedArity = 3;
G__3175.cljs$lang$applyTo = (function (arglist__3176){
var x = cljs.core.first(arglist__3176);
var y = cljs.core.first(cljs.core.next(arglist__3176));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3176)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3176)));
return G__3175__delegate.call(this, x, y, z, args);
});
return G__3175;
})()
;
G__3168 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3168__3169.call(this);
case  1 :
return G__3168__3170.call(this,x);
case  2 :
return G__3168__3171.call(this,x,y);
case  3 :
return G__3168__3172.call(this,x,y,z);
default:
return G__3168__3173.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3168.cljs$lang$maxFixedArity = 3;
G__3168.cljs$lang$applyTo = G__3168__3173.cljs$lang$applyTo;
return G__3168;
})()
};
var G__3167 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3167__delegate.call(this, f, g, h, fs);
};
G__3167.cljs$lang$maxFixedArity = 3;
G__3167.cljs$lang$applyTo = (function (arglist__3177){
var f = cljs.core.first(arglist__3177);
var g = cljs.core.first(cljs.core.next(arglist__3177));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3177)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3177)));
return G__3167__delegate.call(this, f, g, h, fs);
});
return G__3167;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3135.call(this,f);
case  2 :
return juxt__3136.call(this,f,g);
case  3 :
return juxt__3137.call(this,f,g,h);
default:
return juxt__3138.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3138.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3179 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3182 = cljs.core.next.call(null,coll);
coll = G__3182;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3180 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3178 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____3178))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3574__auto____3178;
}
})()))
{{
var G__3183 = cljs.core.dec.call(null,n);
var G__3184 = cljs.core.next.call(null,coll);
n = G__3183;
coll = G__3184;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3179.call(this,n);
case  2 :
return dorun__3180.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3185 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3186 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3185.call(this,n);
case  2 :
return doall__3186.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3188 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3188),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3188),1)))
{return cljs.core.first.call(null,matches__3188);
} else
{return cljs.core.vec.call(null,matches__3188);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3189 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3189)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3189),1)))
{return cljs.core.first.call(null,matches__3189);
} else
{return cljs.core.vec.call(null,matches__3189);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3190 = cljs.core.re_find.call(null,re,s);
var match_idx__3191 = s.search(re);
var match_str__3192 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3190))?cljs.core.first.call(null,match_data__3190):match_data__3190);
var post_match__3193 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__3191,cljs.core.count.call(null,match_str__3192)));

if(cljs.core.truth_(match_data__3190))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3190,re_seq.call(null,re,post_match__3193));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new goog.global['RegExp'](s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3194_SHARP_){
return print_one.call(null,p1__3194_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
goog.global['print'].call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____3195 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____3195))
{var and__3574__auto____3198 = (function (){var x__105__auto____3196 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3197 = x__105__auto____3196;

if(cljs.core.truth_(and__3574__auto____3197))
{return x__105__auto____3196.cljs$core$IMeta$;
} else
{return and__3574__auto____3197;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__105__auto____3196);
}
})();

if(cljs.core.truth_(and__3574__auto____3198))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____3198;
}
} else
{return and__3574__auto____3195;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__105__auto____3199 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3200 = x__105__auto____3199;

if(cljs.core.truth_(and__3574__auto____3200))
{return x__105__auto____3199.cljs$core$IPrintable$;
} else
{return and__3574__auto____3200;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__105__auto____3199);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3201 = cljs.core.first.call(null,objs);
var sb__3202 = (new goog.string.StringBuffer());

var G__3203__3204 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3203__3204))
{var obj__3205 = cljs.core.first.call(null,G__3203__3204);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3205,first_obj__3201)))
{} else
{sb__3202.append(" ");
}
var G__3206__3207 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3205,opts));

while(true){
if(cljs.core.truth_(G__3206__3207))
{var string__3208 = cljs.core.first.call(null,G__3206__3207);

sb__3202.append(string__3208);
{
var G__3209 = cljs.core.next.call(null,G__3206__3207);
G__3206__3207 = G__3209;
continue;
}
} else
{}
break;
}
{
var G__3210 = cljs.core.next.call(null,G__3203__3204);
G__3203__3204 = G__3210;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__3202);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3211 = cljs.core.first.call(null,objs);

var G__3212__3213 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3212__3213))
{var obj__3214 = cljs.core.first.call(null,G__3212__3213);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3214,first_obj__3211)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3215__3216 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3214,opts));

while(true){
if(cljs.core.truth_(G__3215__3216))
{var string__3217 = cljs.core.first.call(null,G__3215__3216);

cljs.core.string_print.call(null,string__3217);
{
var G__3218 = cljs.core.next.call(null,G__3215__3216);
G__3215__3216 = G__3218;
continue;
}
} else
{}
break;
}
{
var G__3219 = cljs.core.next.call(null,G__3212__3213);
G__3212__3213 = G__3219;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3220){
var objs = cljs.core.seq( arglist__3220 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3221){
var objs = cljs.core.seq( arglist__3221 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3222){
var objs = cljs.core.seq( arglist__3222 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3223){
var objs = cljs.core.seq( arglist__3223 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3224){
var objs = cljs.core.seq( arglist__3224 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3225 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3225,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____3226 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3226))
{var nspc__3227 = temp__3726__auto____3226;

return cljs.core.str.call(null,nspc__3227,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____3228 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3228))
{var nspc__3229 = temp__3726__auto____3228;

return cljs.core.str.call(null,nspc__3229,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3230 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3230,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator){
this.state = state;
this.meta = meta;
this.validator = validator;
})
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3231 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3231.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3232 = this;
return this__3232.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3233 = this;
return this__3233.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3234 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an exception.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3241 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__3242 = (function() { 
var G__3244__delegate = function (x,p__3235){
var map__3236__3237 = p__3235;
var map__3236__3238 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3236__3237))?cljs.core.apply.call(null,cljs.core.hash_map,map__3236__3237):map__3236__3237);
var validator__3239 = cljs.core.get.call(null,map__3236__3238,"﷐'validator");
var meta__3240 = cljs.core.get.call(null,map__3236__3238,"﷐'meta");

return (new cljs.core.Atom(x,meta__3240,validator__3239));
};
var G__3244 = function (x,var_args){
var p__3235 = null;
if (goog.isDef(var_args)) {
  p__3235 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3244__delegate.call(this, x, p__3235);
};
G__3244.cljs$lang$maxFixedArity = 1;
G__3244.cljs$lang$applyTo = (function (arglist__3245){
var x = cljs.core.first(arglist__3245);
var p__3235 = cljs.core.rest(arglist__3245);
return G__3244__delegate.call(this, x, p__3235);
});
return G__3244;
})()
;
atom = function(x,var_args){
var p__3235 = var_args;
switch(arguments.length){
case  1 :
return atom__3241.call(this,x);
default:
return atom__3242.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3242.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3726__auto____3246 = a.validator;

if(cljs.core.truth_(temp__3726__auto____3246))
{var v__3247 = temp__3726__auto____3246;

if(cljs.core.truth_(v__3247.call(null,newval)))
{} else
{throw "Validator rejected reference state";
}
} else
{}
return a.state = newval;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3248 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3249 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3250 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3251 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3252 = (function() { 
var G__3254__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3254 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3254__delegate.call(this, a, f, x, y, z, more);
};
G__3254.cljs$lang$maxFixedArity = 5;
G__3254.cljs$lang$applyTo = (function (arglist__3255){
var a = cljs.core.first(arglist__3255);
var f = cljs.core.first(cljs.core.next(arglist__3255));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3255)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3255))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3255)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3255)))));
return G__3254__delegate.call(this, a, f, x, y, z, more);
});
return G__3254;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3248.call(this,a,f);
case  3 :
return swap_BANG___3249.call(this,a,f,x);
case  4 :
return swap_BANG___3250.call(this,a,f,x,y);
case  5 :
return swap_BANG___3251.call(this,a,f,x,y,z);
default:
return swap_BANG___3252.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3252.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for a var/ref/agent/atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an exception. If the current state (root
* value if var) is not acceptable to the new validator, an exception
* will be thrown and the validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3256){
var iref = cljs.core.first(arglist__3256);
var f = cljs.core.first(cljs.core.next(arglist__3256));
var args = cljs.core.rest(cljs.core.next(arglist__3256));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for a namespace/var/ref/agent/atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3257 = (function (){
return gensym.call(null,"G__");
});
var gensym__3258 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3257.call(this);
case  1 :
return gensym__3258.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3260 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3260.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3261 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3261.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3261.state,this__3261.f);
}
return cljs.core.deref.call(null,this__3261.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3262){
var body = cljs.core.seq( arglist__3262 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3263__3264 = options;
var map__3263__3265 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3263__3264))?cljs.core.apply.call(null,cljs.core.hash_map,map__3263__3264):map__3263__3264);
var keywordize_keys__3266 = cljs.core.get.call(null,map__3263__3265,"﷐'keywordize-keys");
var keyfn__3267 = (cljs.core.truth_(keywordize_keys__3266)?cljs.core.keyword:cljs.core.str);
var f__3273 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__159__auto____3272 = (function iter__3268(s__3269){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3269__3270 = s__3269;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3269__3270)))
{var k__3271 = cljs.core.first.call(null,s__3269__3270);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3267.call(null,k__3271),thisfn.call(null,(x[k__3271]))]),iter__3268.call(null,cljs.core.rest.call(null,s__3269__3270)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3272.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3273.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3274){
var x = cljs.core.first(arglist__3274);
var options = cljs.core.rest(arglist__3274);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3275 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3279__delegate = function (args){
var temp__3723__auto____3276 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3275),args);

if(cljs.core.truth_(temp__3723__auto____3276))
{var v__3277 = temp__3723__auto____3276;

return v__3277;
} else
{var ret__3278 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3275,cljs.core.assoc,args,ret__3278);
return ret__3278;
}
};
var G__3279 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3279__delegate.call(this, args);
};
G__3279.cljs$lang$maxFixedArity = 0;
G__3279.cljs$lang$applyTo = (function (arglist__3280){
var args = cljs.core.seq( arglist__3280 );;
return G__3279__delegate.call(this, args);
});
return G__3279;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3282 = (function (f){
while(true){
var ret__3281 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3281)))
{{
var G__3285 = ret__3281;
f = G__3285;
continue;
}
} else
{return ret__3281;
}
break;
}
});
var trampoline__3283 = (function() { 
var G__3286__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3286 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3286__delegate.call(this, f, args);
};
G__3286.cljs$lang$maxFixedArity = 1;
G__3286.cljs$lang$applyTo = (function (arglist__3287){
var f = cljs.core.first(arglist__3287);
var args = cljs.core.rest(arglist__3287);
return G__3286__delegate.call(this, f, args);
});
return G__3286;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3282.call(this,f);
default:
return trampoline__3283.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3283.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3288 = (function (){
return rand.call(null,1);
});
var rand__3289 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3288.call(this);
case  1 :
return rand__3289.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3291 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3291,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3291,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3300 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3301 = (function (h,child,parent){
var or__3576__auto____3292 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3576__auto____3292))
{return or__3576__auto____3292;
} else
{var or__3576__auto____3293 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3576__auto____3293))
{return or__3576__auto____3293;
} else
{var and__3574__auto____3294 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3574__auto____3294))
{var and__3574__auto____3295 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3574__auto____3295))
{var and__3574__auto____3296 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3574__auto____3296))
{var ret__3297 = true;
var i__3298 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3576__auto____3299 = cljs.core.not.call(null,ret__3297);

if(cljs.core.truth_(or__3576__auto____3299))
{return or__3576__auto____3299;
} else
{return cljs.core._EQ_.call(null,i__3298,cljs.core.count.call(null,parent));
}
})()))
{return ret__3297;
} else
{{
var G__3303 = isa_QMARK_.call(null,h,child.call(null,i__3298),parent.call(null,i__3298));
var G__3304 = cljs.core.inc.call(null,i__3298);
ret__3297 = G__3303;
i__3298 = G__3304;
continue;
}
}
break;
}
} else
{return and__3574__auto____3296;
}
} else
{return and__3574__auto____3295;
}
} else
{return and__3574__auto____3294;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3300.call(this,h,child);
case  3 :
return isa_QMARK___3301.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3305 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3306 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3305.call(this,h);
case  2 :
return parents__3306.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3308 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3309 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3308.call(this,h);
case  2 :
return ancestors__3309.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3311 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3312 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3311.call(this,h);
case  2 :
return descendants__3312.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3322 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3323 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3317 = "﷐'parents".call(null,h);
var td__3318 = "﷐'descendants".call(null,h);
var ta__3319 = "﷐'ancestors".call(null,h);
var tf__3320 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3576__auto____3321 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3317.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3319.call(null,tag),parent)))
{throw cljs.core.str.call(null,tag,"already has",parent,"as ancestor");
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3319.call(null,parent),tag)))
{throw cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor");
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3317,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3320.call(null,"﷐'ancestors".call(null,h),tag,td__3318,parent,ta__3319),"﷐'descendants":tf__3320.call(null,"﷐'descendants".call(null,h),parent,ta__3319,tag,td__3318)});
})());

if(cljs.core.truth_(or__3576__auto____3321))
{return or__3576__auto____3321;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3322.call(this,h,tag);
case  3 :
return derive__3323.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3329 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3330 = (function (h,tag,parent){
var parentMap__3325 = "﷐'parents".call(null,h);
var childsParents__3326 = (cljs.core.truth_(parentMap__3325.call(null,tag))?cljs.core.disj.call(null,parentMap__3325.call(null,tag),parent):cljs.core.set([]));
var newParents__3327 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3326))?cljs.core.assoc.call(null,parentMap__3325,tag,childsParents__3326):cljs.core.dissoc.call(null,parentMap__3325,tag));
var deriv_seq__3328 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3314_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3314_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3314_SHARP_),cljs.core.second.call(null,p1__3314_SHARP_)));
}),cljs.core.seq.call(null,newParents__3327)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3325.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3315_SHARP_,p2__3316_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3315_SHARP_,p2__3316_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3328));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3329.call(this,h,tag);
case  3 :
return underive__3330.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3332 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3576__auto____3334 = (cljs.core.truth_((function (){var and__3574__auto____3333 = xprefs__3332;

if(cljs.core.truth_(and__3574__auto____3333))
{return xprefs__3332.call(null,y);
} else
{return and__3574__auto____3333;
}
})())?true:null);

if(cljs.core.truth_(or__3576__auto____3334))
{return or__3576__auto____3334;
} else
{var or__3576__auto____3336 = (function (){var ps__3335 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3335))))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3335),prefer_table)))
{} else
{}
{
var G__3339 = cljs.core.rest.call(null,ps__3335);
ps__3335 = G__3339;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3336))
{return or__3576__auto____3336;
} else
{var or__3576__auto____3338 = (function (){var ps__3337 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3337))))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3337),y,prefer_table)))
{} else
{}
{
var G__3340 = cljs.core.rest.call(null,ps__3337);
ps__3337 = G__3340;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3338))
{return or__3576__auto____3338;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3576__auto____3341 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3576__auto____3341))
{return or__3576__auto____3341;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3350 = cljs.core.reduce.call(null,(function (be,p__3342){
var vec__3343__3344 = p__3342;
var k__3345 = cljs.core.nth.call(null,vec__3343__3344,0,null);
var ___3346 = cljs.core.nth.call(null,vec__3343__3344,1,null);
var e__3347 = vec__3343__3344;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3345)))
{var be2__3349 = (cljs.core.truth_((function (){var or__3576__auto____3348 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3576__auto____3348))
{return or__3576__auto____3348;
} else
{return cljs.core.dominates.call(null,k__3345,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3347:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3349),k__3345,prefer_table)))
{} else
{throw cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3345," and ",cljs.core.first.call(null,be2__3349),", and neither is preferred");
}
return be2__3349;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3350))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3350));
return cljs.core.second.call(null,best_entry__3350);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3351 = mf;

if(cljs.core.truth_(and__3574__auto____3351))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3574__auto____3351;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3576__auto____3352 = (_reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3352))
{return or__3576__auto____3352;
} else
{var or__3576__auto____3353 = (_reset["_"]);

if(cljs.core.truth_(or__3576__auto____3353))
{return or__3576__auto____3353;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3574__auto____3354 = mf;

if(cljs.core.truth_(and__3574__auto____3354))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3574__auto____3354;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3576__auto____3355 = (_add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3355))
{return or__3576__auto____3355;
} else
{var or__3576__auto____3356 = (_add_method["_"]);

if(cljs.core.truth_(or__3576__auto____3356))
{return or__3576__auto____3356;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3357 = mf;

if(cljs.core.truth_(and__3574__auto____3357))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3574__auto____3357;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3358 = (_remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3358))
{return or__3576__auto____3358;
} else
{var or__3576__auto____3359 = (_remove_method["_"]);

if(cljs.core.truth_(or__3576__auto____3359))
{return or__3576__auto____3359;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3574__auto____3360 = mf;

if(cljs.core.truth_(and__3574__auto____3360))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3574__auto____3360;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3576__auto____3361 = (_prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3361))
{return or__3576__auto____3361;
} else
{var or__3576__auto____3362 = (_prefer_method["_"]);

if(cljs.core.truth_(or__3576__auto____3362))
{return or__3576__auto____3362;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3363 = mf;

if(cljs.core.truth_(and__3574__auto____3363))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3574__auto____3363;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3364 = (_get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3364))
{return or__3576__auto____3364;
} else
{var or__3576__auto____3365 = (_get_method["_"]);

if(cljs.core.truth_(or__3576__auto____3365))
{return or__3576__auto____3365;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3366 = mf;

if(cljs.core.truth_(and__3574__auto____3366))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3574__auto____3366;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3576__auto____3367 = (_methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3367))
{return or__3576__auto____3367;
} else
{var or__3576__auto____3368 = (_methods["_"]);

if(cljs.core.truth_(or__3576__auto____3368))
{return or__3576__auto____3368;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3369 = mf;

if(cljs.core.truth_(and__3574__auto____3369))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3574__auto____3369;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3576__auto____3370 = (_prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3370))
{return or__3576__auto____3370;
} else
{var or__3576__auto____3371 = (_prefers["_"]);

if(cljs.core.truth_(or__3576__auto____3371))
{return or__3576__auto____3371;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3574__auto____3372 = mf;

if(cljs.core.truth_(and__3574__auto____3372))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3574__auto____3372;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3576__auto____3373 = (_invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3373))
{return or__3576__auto____3373;
} else
{var or__3576__auto____3374 = (_invoke["_"]);

if(cljs.core.truth_(or__3576__auto____3374))
{return or__3576__auto____3374;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3375 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3376 = cljs.core._get_method.call(null,mf,dispatch_val__3375);

if(cljs.core.truth_(target_fn__3376))
{} else
{throw cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3375);
}
return cljs.core.apply.call(null,target_fn__3376,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3377 = this;
cljs.core.swap_BANG_.call(null,this__3377.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3377.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3377.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3377.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3378 = this;
cljs.core.swap_BANG_.call(null,this__3378.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3378.method_cache,this__3378.method_table,this__3378.cached_hierarchy,this__3378.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3379 = this;
cljs.core.swap_BANG_.call(null,this__3379.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3379.method_cache,this__3379.method_table,this__3379.cached_hierarchy,this__3379.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3380 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3380.cached_hierarchy),cljs.core.deref.call(null,this__3380.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3380.method_cache,this__3380.method_table,this__3380.cached_hierarchy,this__3380.hierarchy);
}
var temp__3723__auto____3381 = cljs.core.deref.call(null,this__3380.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3723__auto____3381))
{var target_fn__3382 = temp__3723__auto____3381;

return target_fn__3382;
} else
{var temp__3723__auto____3383 = cljs.core.find_and_cache_best_method.call(null,this__3380.name,dispatch_val,this__3380.hierarchy,this__3380.method_table,this__3380.prefer_table,this__3380.method_cache,this__3380.cached_hierarchy);

if(cljs.core.truth_(temp__3723__auto____3383))
{var target_fn__3384 = temp__3723__auto____3383;

return target_fn__3384;
} else
{return cljs.core.deref.call(null,this__3380.method_table).call(null,this__3380.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3385 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3385.prefer_table)))
{throw cljs.core.str.call(null,"Preference conflict in multimethod '",this__3385.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x);
} else
{}
cljs.core.swap_BANG_.call(null,this__3385.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3385.method_cache,this__3385.method_table,this__3385.cached_hierarchy,this__3385.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3386 = this;
return cljs.core.deref.call(null,this__3386.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3387 = this;
return cljs.core.deref.call(null,this__3387.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3388 = this;
return cljs.core.do_invoke.call(null,mf,this__3388.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3389__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3389 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3389__delegate.call(this, _, args);
};
G__3389.cljs$lang$maxFixedArity = 1;
G__3389.cljs$lang$applyTo = (function (arglist__3390){
var _ = cljs.core.first(arglist__3390);
var args = cljs.core.rest(arglist__3390);
return G__3389__delegate.call(this, _, args);
});
return G__3389;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
