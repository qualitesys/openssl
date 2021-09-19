console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/evp/legacy_wp.c.html" 
 , "texte" : "File crypto/evp/legacy_wp.c 23 rule violations " 
 , "fic2"  : "./qc/crypto/evp/legacy_wp.c.xml" 
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
   "c1" : "01229"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#1229"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01229] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01234"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#1234"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01234] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01259"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#1259"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01259] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01263"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#1263"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01263] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01266"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#1266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01266] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01291"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#1291"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01291] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01295"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#1295"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01295] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01299"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#1299"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01299] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01307"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#1307"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01307] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "03285"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#3285"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[03285] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "03448"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#3448"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03448] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03451"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#3451"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03451] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03475"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#3475"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03475] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03477"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#3477"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03477] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03479"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#3479"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03479] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03501"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#3501"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03501] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03501"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#3501"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03501] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03525"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#3525"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03525] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03527"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#3527"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03527] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03531"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#3531"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03531] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03556"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#3556"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03556] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03558"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#3558"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03558] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03560"
 , "c1link" : "./qc/crypto/evp/legacy_wp.c.html#3560"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03560] The expression 2&gt;1 is invariable"
}} 
]
};
console.log('leListeStr 99 main end');
