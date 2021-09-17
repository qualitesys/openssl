console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/apps/lib/names.c.html" 
 , "texte" : "File apps/lib/names.c 28 rule violations " 
 , "fic2"  : "./qc/apps/lib/names.c.xml" 
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
   "c1" : "00383"
 , "c1link" : "./qc/apps/lib/names.c.html#383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00383] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/apps/lib/names.c.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00384] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01552"
 , "c1link" : "./qc/apps/lib/names.c.html#1552"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01552] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01557"
 , "c1link" : "./qc/apps/lib/names.c.html#1557"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01557] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01557"
 , "c1link" : "./qc/apps/lib/names.c.html#1557"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01557] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01582"
 , "c1link" : "./qc/apps/lib/names.c.html#1582"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01582] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01589"
 , "c1link" : "./qc/apps/lib/names.c.html#1589"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01589] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01589"
 , "c1link" : "./qc/apps/lib/names.c.html#1589"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01589] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "01614"
 , "c1link" : "./qc/apps/lib/names.c.html#1614"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01614] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01622"
 , "c1link" : "./qc/apps/lib/names.c.html#1622"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01622] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01622"
 , "c1link" : "./qc/apps/lib/names.c.html#1622"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01622] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "02676"
 , "c1link" : "./qc/apps/lib/names.c.html#2676"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02676] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02839"
 , "c1link" : "./qc/apps/lib/names.c.html#2839"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02839] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02866"
 , "c1link" : "./qc/apps/lib/names.c.html#2866"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02866] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02868"
 , "c1link" : "./qc/apps/lib/names.c.html#2868"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02868] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02870"
 , "c1link" : "./qc/apps/lib/names.c.html#2870"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02870] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02870"
 , "c1link" : "./qc/apps/lib/names.c.html#2870"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02870] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02892"
 , "c1link" : "./qc/apps/lib/names.c.html#2892"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02892] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02892"
 , "c1link" : "./qc/apps/lib/names.c.html#2892"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02892] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02892"
 , "c1link" : "./qc/apps/lib/names.c.html#2892"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02892] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02916"
 , "c1link" : "./qc/apps/lib/names.c.html#2916"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02916] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02918"
 , "c1link" : "./qc/apps/lib/names.c.html#2918"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02918] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02922"
 , "c1link" : "./qc/apps/lib/names.c.html#2922"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02922] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02922"
 , "c1link" : "./qc/apps/lib/names.c.html#2922"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02922] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "02947"
 , "c1link" : "./qc/apps/lib/names.c.html#2947"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02947] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02949"
 , "c1link" : "./qc/apps/lib/names.c.html#2949"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02949] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02951"
 , "c1link" : "./qc/apps/lib/names.c.html#2951"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02951] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02951"
 , "c1link" : "./qc/apps/lib/names.c.html#2951"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02951] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
]
};
console.log('leListeStr 99 main end');
