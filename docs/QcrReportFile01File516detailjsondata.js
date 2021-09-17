console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/mem_sec.c.html" 
 , "texte" : "File crypto/mem_sec.c 119 rule violations " 
 , "fic2"  : "./qc/crypto/mem_sec.c.xml" 
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
 , "c4" : "27"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "43"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "31"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "01429"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1429"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01429] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "01592"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1592"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01592] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01595"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1595"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01595] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01595"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1595"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01595] Suspicious mix of Bitwise and Literal expressions in __builtin_object_size(__resolved,2&gt;1)&lt;4096"
}} 
,
{ "ligne" : {
   "c1" : "01619"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1619"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01619] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01621"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1621"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01621] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01623"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1623"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01623] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01623"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1623"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01623] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01645"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1645"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01645] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01645"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1645"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01645] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01645"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1645"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01645] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01669"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1669"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01669] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01671"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1671"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01671] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01675"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1675"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01675] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01675"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1675"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01675] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "01700"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1700"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01700] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01702"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1702"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01702] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01704"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1704"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01704] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01704"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1704"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01704] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02755"
 , "c1link" : "./qc/crypto/mem_sec.c.html#2755"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02755] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02760"
 , "c1link" : "./qc/crypto/mem_sec.c.html#2760"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02760] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02760"
 , "c1link" : "./qc/crypto/mem_sec.c.html#2760"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02760] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02785"
 , "c1link" : "./qc/crypto/mem_sec.c.html#2785"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02785] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "02792"
 , "c1link" : "./qc/crypto/mem_sec.c.html#2792"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02792] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "02792"
 , "c1link" : "./qc/crypto/mem_sec.c.html#2792"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02792] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "02817"
 , "c1link" : "./qc/crypto/mem_sec.c.html#2817"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02817] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "02825"
 , "c1link" : "./qc/crypto/mem_sec.c.html#2825"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02825] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "02825"
 , "c1link" : "./qc/crypto/mem_sec.c.html#2825"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02825] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "05561"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5561"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05561] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05563"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5563"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05563] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05566"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5566"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05566] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05566"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5566"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05566] Suspicious mix of Bitwise and Literal expressions in __nbytes&gt;__builtin_object_size(__buf,0)"
}} 
,
{ "ligne" : {
   "c1" : "05591"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5591"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05591] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05593"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5593"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05593] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05596"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5596"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05596] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05596"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5596"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05596] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05625"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5625"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05625] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05627"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5627"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05627] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05630"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5630"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05630] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05630"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5630"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05630] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05651"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5651"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05651] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05653"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5653"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05653] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05656"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5656"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05656] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05656"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5656"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05656] Suspicious mix of Bitwise and Literal expressions in __size&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05672"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5672"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05672] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05691"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5691"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05691] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05693"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5693"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05693] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05696"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5696"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05696] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05696"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5696"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05696] Suspicious mix of Bitwise and Literal expressions in __builtin_object_size(__buf,2&gt;1)&lt;__len"
}} 
,
{ "ligne" : {
   "c1" : "05716"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5716"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05716] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05721"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5721"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05721] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05721"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5721"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05721] Suspicious mix of Bitwise and Literal expressions in __size *  sizeof (__gid_t)&gt;__builtin_object_size(__list,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05742"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5742"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05742] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05744"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5744"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05744] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05747"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5747"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05747] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05747"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5747"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05747] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05768"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5768"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05768] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05770"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5770"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05770] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05773"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5773"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05773] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05773"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5773"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05773] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05795"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5795"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05795] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05797"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5797"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05797] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05800"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5800"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05800] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05800"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5800"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05800] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05824"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5824"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05824] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05826"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5826"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05826] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05829"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5829"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05829] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05829"
 , "c1link" : "./qc/crypto/mem_sec.c.html#5829"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05829] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06191"
 , "c1link" : "./qc/crypto/mem_sec.c.html#6191"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06191] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06192"
 , "c1link" : "./qc/crypto/mem_sec.c.html#6192"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06192] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "07438"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7438"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07438] The expression __builtin_constant_p(__oflag) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07471"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7471"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07471] The expression __builtin_constant_p(__oflag) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07520"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7520"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07520] The expression  ! secure_mem_initialized applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07528"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7528"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07528] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "07576"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7576"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07576] The pointer ret is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07579"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7579"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07579] The expression  ! secure_mem_initialized applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07582"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7582"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07582] The expression  ! CRYPTO_THREAD_write_lock(sec_malloc_lock) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07601"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7601"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07601] The expression secure_mem_initialized applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07619"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7619"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07619] The expression  ! CRYPTO_secure_allocated(ptr) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07623"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7623"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07623] The expression  ! CRYPTO_THREAD_write_lock(sec_malloc_lock) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07647"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7647"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07647] The expression  ! CRYPTO_secure_allocated(ptr) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07652"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7652"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07652] The expression  ! CRYPTO_THREAD_write_lock(sec_malloc_lock) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07670"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7670"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07670] The expression  ! secure_mem_initialized applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07697"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7697"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07697] The expression  ! CRYPTO_THREAD_write_lock(sec_malloc_lock) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07734"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7734"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07734] The expression bit applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07764"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7764"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07764] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "07776"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7776"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07776] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "07781"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7781"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07781] The pointer temp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08248"
 , "c1link" : "./qc/crypto/mem_sec.c.html#8248"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08248] The pointer temp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08248"
 , "c1link" : "./qc/crypto/mem_sec.c.html#8248"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08248] The pointer temp2 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08248"
 , "c1link" : "./qc/crypto/mem_sec.c.html#8248"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08248] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08248"
 , "c1link" : "./qc/crypto/mem_sec.c.html#8248"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[08248] Suspicious mix of Bitwise and Literal expressions in minsize&lt;= sizeof (SH_LIST)"
}} 
,
{ "ligne" : {
   "c1" : "08248"
 , "c1link" : "./qc/crypto/mem_sec.c.html#8248"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[08248] Suspicious mix of Bitwise and Literal expressions in  sizeof (SH_LIST)&gt;16"
}} 
,
{ "ligne" : {
   "c1" : "08248"
 , "c1link" : "./qc/crypto/mem_sec.c.html#8248"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[08248] Suspicious mix of Bitwise and Literal expressions in  sizeof (SH_LIST)&gt;256"
}} 
,
{ "ligne" : {
   "c1" : "08248"
 , "c1link" : "./qc/crypto/mem_sec.c.html#8248"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08248] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08248"
 , "c1link" : "./qc/crypto/mem_sec.c.html#8248"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08248] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08248"
 , "c1link" : "./qc/crypto/mem_sec.c.html#8248"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08248] The expression i applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[00001] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[00001] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[00001] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[00001] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00001] The expression 0x0 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00001] Suspicious mix of Bitwise and Literal expressions in mprotect(sh.map_result,pgsize,0x0)&lt;0"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00001] The expression 0x0 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00001] Suspicious mix of Bitwise and Literal expressions in mprotect(sh.map_result+ aligned ,pgsize,0x0)&lt;0"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00001] The expression 325 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00001] The expression 0x01 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00001] Suspicious mix of Bitwise and Literal expressions in syscall(325,sh.arena,sh.arena_size,0x01)&lt;0"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00001] The expression  * __errno_location() applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00001] Suspicious mix of Bitwise and Literal expressions in mlock(sh.arena,sh.arena_size)&lt;0"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00001] The expression 16 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00001] Suspicious mix of Bitwise and Literal expressions in madvise(sh.arena,sh.arena_size,16)&lt;0"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[00001] The pointer chunk is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[00001] The pointer buddy is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00001] Suspicious mix of Bitwise and Literal expressions in ( char  *)(ptr)&gt;=sh.arena"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00001] Suspicious mix of Bitwise and Literal expressions in ( char  *)(ptr)&lt; &amp; sh.arena[sh.arena_size]"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00001] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00001] Suspicious mix of Bitwise and Literal expressions in ( char  *)(ptr)&gt;=sh.arena"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00001] Suspicious mix of Bitwise and Literal expressions in ( char  *)(ptr)&lt; &amp; sh.arena[sh.arena_size]"
}} 
]
};
console.log('leListeStr 99 main end');
