console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/rsa/rsa_backend.c.html" 
 , "texte" : "File crypto/rsa/rsa_backend.c 160 rule violations " 
 , "fic2"  : "./qc/crypto/rsa/rsa_backend.c.xml" 
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
 , "c2" : "QC-CPP000005"
 , "c3" : "Check pointer declaration to unsigned char"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "39"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "42"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "20"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "28"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "16"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00410"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00410] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00411"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#411"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00411] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01936"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#1936"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01936] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01941"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#1941"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01941] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01941"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#1941"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01941] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01966"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#1966"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01966] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01973"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#1973"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01973] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01973"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#1973"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01973] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "01998"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#1998"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01998] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "02006"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#2006"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02006] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "02006"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#2006"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02006] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "03057"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3057"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[03057] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "03220"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3220"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03220] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03223"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3223"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03223] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03223"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3223"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03223] Suspicious mix of Bitwise and Literal expressions in __builtin_object_size(__resolved,2&gt;1)&lt;4096"
}} 
,
{ "ligne" : {
   "c1" : "03247"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3247"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03247] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03249"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3249"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03249] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03251"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3251"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03251] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03251"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3251"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03251] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03273"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3273"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03273] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03273"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3273"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03273] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03273"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3273"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03273] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03297"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3297"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03297] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03299"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3299"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03299] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03303"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3303"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03303] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03303"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3303"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03303] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "03328"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3328"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03328] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03330"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3330"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03330] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03332"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3332"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03332] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03332"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#3332"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03332] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "15094"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15094"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15094] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "15096"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15096"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15096] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15099"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15099"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15099] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "15099"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15099"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[15099] Suspicious mix of Bitwise and Literal expressions in __nbytes&gt;__builtin_object_size(__buf,0)"
}} 
,
{ "ligne" : {
   "c1" : "15124"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15124] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15126"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15126] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15129"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15129] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15129"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[15129] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "15158"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15158] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15160"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15160"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15160] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15163"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15163] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15163"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[15163] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "15184"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15184"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15184] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15186"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15186"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15186] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15189"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15189"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15189] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15189"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15189"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[15189] Suspicious mix of Bitwise and Literal expressions in __size&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "15205"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15205"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15205] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15224"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15224"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15224] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15226"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15226"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15226] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15229"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15229"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15229] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15229"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15229"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[15229] Suspicious mix of Bitwise and Literal expressions in __builtin_object_size(__buf,2&gt;1)&lt;__len"
}} 
,
{ "ligne" : {
   "c1" : "15249"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15249"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15249] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15254"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15254"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15254] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15254"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15254"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[15254] Suspicious mix of Bitwise and Literal expressions in __size *  sizeof (__gid_t)&gt;__builtin_object_size(__list,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "15275"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15275"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15275] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15277"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15277"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15277] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15280"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15280] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15280"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[15280] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "15301"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15301"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15301] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15303"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15303"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15303] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15306"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15306"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15306] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15306"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15306"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[15306] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "15328"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15328"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15328] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15330"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15330"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15330] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15333"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15333"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15333] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15333"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15333"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[15333] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "15357"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15357"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15357] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15359"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15359"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15359] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15362"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15362"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15362] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15362"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15362"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[15362] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "15440"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15440"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15440] The pointer param_n is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15440"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15440"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15440] The pointer param_e is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15440"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15440"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15440] The pointer param_d is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15495"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15495"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15495] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15503"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15503"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15503] The expression  ! RSA_set0_key(rsa,n,e,d) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15504"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15504"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15504] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15505"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15505"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15505] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15505"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15505"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15505] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15511"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15511"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15511] The expression is_private applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15512"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15512"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15512] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15514"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15514"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15514] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15516"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15516"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15516] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15518"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15518"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15518] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15523"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15523"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15523] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15581"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15581"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15581] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15586"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15586"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15586] The expression 'n' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15587"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15587"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15587] The expression 'e' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15588"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15588"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15588] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15607"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15607"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15607] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15609"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15609"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15609] The expression 'd' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15619"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15619"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15619] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15638"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15638"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15638] The expression  ! ossl_rsa_pss_params_30_is_unrestricted(pss) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15721"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15721"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15721] The pointer param_md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15721"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15721"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15721] The pointer param_mgf is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15721"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15721"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15721] The pointer param_mgf1md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15721"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15721"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15721] The pointer param_saltlen is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15722"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15722"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15722] The pointer param_propq is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15789"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15789"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15789] The expression  ! ossl_rsa_pss_params_30_set_defaults(pss_params) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15812"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15812"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15812] The expression  ! OSSL_PARAM_get_utf8_ptr(param_mgf, &amp; mgfname) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15838"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15838"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15838] The expression  ! OSSL_PARAM_get_utf8_ptr(param_mgf, &amp; mdname) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15839"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15839"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15839] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15841"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15841"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15841] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15848"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15848"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15848] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15864"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15864"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15864] The expression  ! OSSL_PARAM_get_utf8_ptr(param_mgf, &amp; mgf1mdname) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15865"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15865"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15865] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15867"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15867"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15867] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15874"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15874"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15874] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15884"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15884"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15884] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15914"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15914"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15914] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15935"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15935"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15935] The expression ossl_rsa_is_foreign(rsa) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15942"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15942"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15942] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15955"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15955"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15955] The expression  ! rsa_bn_dup_check( &amp; dupkey-&gt;n,rsa-&gt;n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15956"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15956"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15956] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15957"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15957"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15957] The expression  ! rsa_bn_dup_check( &amp; dupkey-&gt;e,rsa-&gt;e) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15958"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15958"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15958] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15964"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15964] The expression  ! rsa_bn_dup_check( &amp; dupkey-&gt;d,rsa-&gt;d) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15965"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15965"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15965] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15968"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15968"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15968] The expression  ! rsa_bn_dup_check( &amp; dupkey-&gt;p,rsa-&gt;p) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15969"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15969"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15969] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15970"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15970"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15970] The expression  ! rsa_bn_dup_check( &amp; dupkey-&gt;q,rsa-&gt;q) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15971"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15971"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15971] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15972"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15972"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15972] The expression  ! rsa_bn_dup_check( &amp; dupkey-&gt;dmp1,rsa-&gt;dmp1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15973"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15973"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15973] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15974"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15974"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15974] The expression  ! rsa_bn_dup_check( &amp; dupkey-&gt;dmq1,rsa-&gt;dmq1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15975"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15975"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15975] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15976"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15976"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15976] The expression  ! rsa_bn_dup_check( &amp; dupkey-&gt;iqmp,rsa-&gt;iqmp) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15977"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15977"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15977] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15988"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15988"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15988] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15988"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#15988"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[15988] Suspicious mix of Bitwise and Literal expressions in (pnum=sk_RSA_PRIME_INFO_num(rsa-&gt;prime_infos))&gt;0"
}} 
,
{ "ligne" : {
   "c1" : "16006"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16006"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[16006] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "16016"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16016"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16016] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16022"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16022"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16022] The expression  ! rsa_bn_dup_check( &amp; duppinfo-&gt;r,pinfo-&gt;r) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16023"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16023"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16023] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16024"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16024"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16024] The expression  ! rsa_bn_dup_check( &amp; duppinfo-&gt;d,pinfo-&gt;d) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16025"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16025"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16025] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16026"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16026"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16026] The expression  ! rsa_bn_dup_check( &amp; duppinfo-&gt;t,pinfo-&gt;t) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16027"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16027"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16027] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16029"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16029] The expression  ! ossl_rsa_multip_calc_product(dupkey) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16030"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16030"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16030] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16055"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16055"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16055] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16058"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16058"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16058] The expression  ! CRYPTO_dup_ex_data(9, &amp; dupkey-&gt;ex_data, &amp; rsa-&gt;ex_data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16058"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16058"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[16058] The expression 9 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "16060"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16060"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16060] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16077"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16077"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16077] The pointer pss is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16134"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16134"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[16134] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "16139"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16139"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[16139] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "16156"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16156] The expression  ! ossl_rsa_pss_get_param_unverified(legacy_pss, &amp; md, &amp; mgf1md, &amp; saltlen, &amp; trailerField) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16203"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16203"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16203] The expression pss-&gt;saltLength applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16207"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16207"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16207] The expression pss-&gt;trailerField applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16217"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16217"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16217] The pointer pss is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16218"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16218"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16218] The pointer algoid is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16219"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16219"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16219] The pointer algp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16235"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16235"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[16235] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "16244"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16244"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16244] The expression  ! ossl_rsa_sync_to_pss_params_30(rsa) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16252"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16252"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16252] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16252"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16252"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[16252] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "16253"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16253"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16253] The pointer rsa is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16255"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16255"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16255] The pointer alg is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16257"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16257] The expression  ! PKCS8_pkey_get0((( void  *)0), &amp; p, &amp; pklen, &amp; alg,p8inf) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16284"
 , "c1link" : "./qc/crypto/rsa/rsa_backend.c.html#16284"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16284] The expression  ! ossl_rsa_param_decode(rsa,alg) applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
