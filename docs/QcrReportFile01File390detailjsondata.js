console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/engine/eng_openssl.c.html" 
 , "texte" : "File crypto/engine/eng_openssl.c 50 rule violations " 
 , "fic2"  : "./qc/crypto/engine/eng_openssl.c.xml" 
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
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "23"
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
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00986"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#986"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00986] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00991"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#991"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00991] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01016"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#1016"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01016] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01020"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#1020"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01020] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01023"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#1023"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01023] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01048"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#1048"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01048] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01052"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#1052"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01052] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01056"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#1056"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01056] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01064"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#1064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01064] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "02112"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#2112"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02112] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02275"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#2275"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02275] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02302"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#2302"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02302] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02304"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#2304"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02304] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02306"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#2306"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02306] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02328"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#2328"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02328] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02328"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#2328"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02328] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02352"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#2352"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02352] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02354"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#2354"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02354] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02358"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#2358"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02358] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02383"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#2383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02383] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02385"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#2385"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02385] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02387"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#2387"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02387] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "04568"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#4568"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[04568] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "13960"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#13960"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13960] The expression  ! bind_helper(ret) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13974"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#13974"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13974] The expression  ! toadd applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14063"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14063"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14063] The pointer cipher is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14065"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14065"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14065] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14070"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14070"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14070] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "14071"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14071"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14071] The expression 0x8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14108"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14108"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14108] The pointer cipher is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14110"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14110"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14110] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14115"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14115"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14115] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "14116"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14116] The expression 0x8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14146"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14146] The expression  ! init applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14147"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14147"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14147] The pointer cipher is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14148"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14148"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14148] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14154"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14154"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14154] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14170"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14170"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14170] The expression  ! cipher applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14235"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14235"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14235] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14237"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14237"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14237] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14242"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14242"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14242] The expression 20 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14243"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14243"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14243] The expression (16 * 4) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14246"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14246] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "14276"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14276] The expression  ! init applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14277"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14277"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14277] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14278"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14278"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14278] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14294"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14294] The expression  ! digest applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14322"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14322"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14322] The pointer in is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14323"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14323"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14323] The pointer key is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14331"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#14331"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14331] The expression  ! in applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
