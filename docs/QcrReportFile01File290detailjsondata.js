console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/cversion.c.html" 
 , "texte" : "File crypto/cversion.c 29 rule violations " 
 , "fic2"  : "./qc/crypto/cversion.c.xml" 
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
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "8"
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
   "c1" : "01187"
 , "c1link" : "./qc/crypto/cversion.c.html#1187"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01187] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "01350"
 , "c1link" : "./qc/crypto/cversion.c.html#1350"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01350] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01377"
 , "c1link" : "./qc/crypto/cversion.c.html#1377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01377] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01379"
 , "c1link" : "./qc/crypto/cversion.c.html#1379"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01379] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01381"
 , "c1link" : "./qc/crypto/cversion.c.html#1381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01381] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01381"
 , "c1link" : "./qc/crypto/cversion.c.html#1381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01381] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01403"
 , "c1link" : "./qc/crypto/cversion.c.html#1403"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01403] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01403"
 , "c1link" : "./qc/crypto/cversion.c.html#1403"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01403] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01403"
 , "c1link" : "./qc/crypto/cversion.c.html#1403"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01403] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01427"
 , "c1link" : "./qc/crypto/cversion.c.html#1427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01427] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01429"
 , "c1link" : "./qc/crypto/cversion.c.html#1429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01429] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01433"
 , "c1link" : "./qc/crypto/cversion.c.html#1433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01433] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01433"
 , "c1link" : "./qc/crypto/cversion.c.html#1433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01433] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "01458"
 , "c1link" : "./qc/crypto/cversion.c.html#1458"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01458] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01460"
 , "c1link" : "./qc/crypto/cversion.c.html#1460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01460] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01462"
 , "c1link" : "./qc/crypto/cversion.c.html#1462"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01462] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01462"
 , "c1link" : "./qc/crypto/cversion.c.html#1462"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01462] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01829"
 , "c1link" : "./qc/crypto/cversion.c.html#1829"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01829] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01830"
 , "c1link" : "./qc/crypto/cversion.c.html#1830"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01830] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03069"
 , "c1link" : "./qc/crypto/cversion.c.html#3069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03069] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03074"
 , "c1link" : "./qc/crypto/cversion.c.html#3074"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03074] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03074"
 , "c1link" : "./qc/crypto/cversion.c.html#3074"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03074] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03099"
 , "c1link" : "./qc/crypto/cversion.c.html#3099"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03099] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03106"
 , "c1link" : "./qc/crypto/cversion.c.html#3106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03106] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03106"
 , "c1link" : "./qc/crypto/cversion.c.html#3106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03106] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "03131"
 , "c1link" : "./qc/crypto/cversion.c.html#3131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03131] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03139"
 , "c1link" : "./qc/crypto/cversion.c.html#3139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03139] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03139"
 , "c1link" : "./qc/crypto/cversion.c.html#3139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03139] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "06214"
 , "c1link" : "./qc/crypto/cversion.c.html#6214"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06214] The expression 1008 is invariable"
}} 
]
};
console.log('leListeStr 99 main end');
