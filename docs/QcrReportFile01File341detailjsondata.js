console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/dso/dso_dl.c.html" 
 , "texte" : "File crypto/dso/dso_dl.c 23 rule violations " 
 , "fic2"  : "./qc/crypto/dso/dso_dl.c.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "16"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00961"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#961"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00961] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00966"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#966"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00966] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00991"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#991"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00991] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00995"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#995"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00995] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "00998"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#998"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00998] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01023"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#1023"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01023] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01027"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#1027"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01027] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01031"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#1031"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01031] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01039"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#1039"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01039] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "02082"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#2082"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02082] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02245"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#2245"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02245] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02272"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#2272"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02272] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02274"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#2274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02274] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02276"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#2276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02276] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02298"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#2298"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02298] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02298"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#2298"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02298] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02322"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#2322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02322] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02324"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#2324"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02324] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02328"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#2328"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02328] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02353"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#2353"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02353] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02355"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#2355"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02355] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02357"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#2357"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02357] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02724"
 , "c1link" : "./qc/crypto/dso/dso_dl.c.html#2724"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02724] The expression 2&gt;1 is invariable"
}} 
]
};
console.log('leListeStr 99 main end');
