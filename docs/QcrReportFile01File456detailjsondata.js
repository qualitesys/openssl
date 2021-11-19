console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/evp/kem.c.html" 
 , "texte" : "File crypto/evp/kem.c 70 rule violations " 
 , "fic2"  : "./qc/crypto/evp/kem.c.xml" 
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
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "37"
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
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/crypto/evp/kem.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/evp/kem.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/crypto/evp/kem.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00993"
 , "c1link" : "./qc/crypto/evp/kem.c.html#993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00993] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/evp/kem.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/crypto/evp/kem.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01025"
 , "c1link" : "./qc/crypto/evp/kem.c.html#1025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01025] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/evp/kem.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01037"
 , "c1link" : "./qc/crypto/evp/kem.c.html#1037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01037] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "02076"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2076"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02076] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02239"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2239"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02239] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02266"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02266] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02268"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2268"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02268] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02270"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02270] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02292"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02292] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02292"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02292] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02316"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2316"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02316] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02318"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02318] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02322"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02322] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02347"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2347"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02347] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02349"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2349"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02349] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02351"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02351] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08064"
 , "c1link" : "./qc/crypto/evp/kem.c.html#8064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08064] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09421"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9421"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09421] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "09423"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9423"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09423] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09426"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9426"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09426] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "09451"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9451"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09451] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09453"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9453"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09453] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09456"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09456] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09485"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9485"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09485] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09487"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09487] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09490"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9490"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09490] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09511"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9511"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09511] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09513"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09513] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09516"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9516"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09516] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09532"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9532"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09532] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09551"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9551"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09551] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09553"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9553"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09553] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09556"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9556"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09556] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09576"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9576"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09576] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09581"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9581"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09581] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09602"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9602"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09602] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09604"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9604"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09604] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09607"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9607"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09607] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09628"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9628"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09628] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09630"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9630"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09630] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09633"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9633"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09633] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09655"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9655"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09655] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09657"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9657"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09657] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09660"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9660"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09660] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09684"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9684"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09684] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09686"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9686"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09686] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09689"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9689"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09689] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "11559"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11559"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11559] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11576"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11576"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11576] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11590"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11590"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11590] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11643"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11643"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11643] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11653"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11653"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[11653] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "11683"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11683"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11683] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11699"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11699"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11699] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11715"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11715"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11715] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11731"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11731"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11731] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11741"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11741"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11741] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11928"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11928"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[11928] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "11938"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11938"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11938] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11942"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11942"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[11942] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "11947"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11947"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11947] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "12079"
 , "c1link" : "./qc/crypto/evp/kem.c.html#12079"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[12079] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "12193"
 , "c1link" : "./qc/crypto/evp/kem.c.html#12193"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[12193] The pointer provctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "12220"
 , "c1link" : "./qc/crypto/evp/kem.c.html#12220"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[12220] The pointer provctx is declared but not initialized"
}} 
]
};
console.log('leListeStr 99 main end');
