console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/engine/eng_openssl.c.html" 
 , "texte" : "File crypto/engine/eng_openssl.c 80 rule violations " 
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
 , "c4" : "19"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "44"
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
   "c1" : "04572"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#4572"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[04572] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05929"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#5929"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05929] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05931"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#5931"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05931] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05934"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#5934"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05934] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05959"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#5959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05961"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#5961"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05961] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05964"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#5964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05993"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#5993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05993] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05995"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#5995"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05995] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05998"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#5998"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05998] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06019"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6019"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06019] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06021"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06021] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06024"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6024"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06024] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06040"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6040"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06040] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06059"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6059"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06059] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06061"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6061"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06061] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06064"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06064] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06084"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6084"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06084] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06089"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6089"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06089] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06110"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06110] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06112"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06112] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06115"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6115"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06115] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06136"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6136"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06136] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06138"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06138] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06141"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06141] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06163"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06163] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06165"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6165"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06165] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06168"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6168"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06168] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06192"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6192"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06192] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06194"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6194"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06194] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06197"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#6197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06197] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15592"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15592"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15592] The expression  ! bind_helper(ret) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15606"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15606"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15606] The expression  ! toadd applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15695"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15695"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15695] The pointer cipher is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15697"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15697"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15697] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15702"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15702"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15702] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "15703"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15703"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15703] The expression 0x8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15740"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15740"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15740] The pointer cipher is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15742"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15742"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15742] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15747"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15747"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15747] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "15748"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15748"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15748] The expression 0x8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15778"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15778"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15778] The expression  ! init applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15779"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15779"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15779] The pointer cipher is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15780"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15780"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15780] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15786"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15786"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15786] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15802"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15802"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15802] The expression  ! cipher applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15867"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15867"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15867] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15869"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15869"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15869] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15874"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15874"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15874] The expression 20 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15875"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15875"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15875] The expression (16 * 4) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15878"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15878"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15878] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "15908"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15908"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15908] The expression  ! init applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15909"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15909"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15909] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15910"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15910"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15910] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15926"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15926"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15926] The expression  ! digest applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15954"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15954"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15954] The pointer in is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15955"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15955"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15955] The pointer key is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15963"
 , "c1link" : "./qc/crypto/engine/eng_openssl.c.html#15963"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15963] The expression  ! in applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
