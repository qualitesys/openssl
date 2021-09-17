console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/ssl/t1_enc.c.html" 
 , "texte" : "File ssl/t1_enc.c 235 rule violations " 
 , "fic2"  : "./qc/ssl/t1_enc.c.xml" 
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
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000006"
 , "c3" : "Risk of infinite while loop"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "42"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "88"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000017"
 , "c3" : "Dead code"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "30"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "26"
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
 , "c4" : "24"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/ssl/t1_enc.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/ssl/t1_enc.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/ssl/t1_enc.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00964] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/ssl/t1_enc.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/ssl/t1_enc.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/ssl/t1_enc.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00996] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/ssl/t1_enc.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/ssl/t1_enc.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/ssl/t1_enc.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01029] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "02324"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2324"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02324] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02487"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02487] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02490"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2490"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02490] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02490"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2490"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02490] Suspicious mix of Bitwise and Literal expressions in __builtin_object_size(__resolved,2&gt;1)&lt;4096"
}} 
,
{ "ligne" : {
   "c1" : "02514"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2514"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02514] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02516"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2516"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02516] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02518"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2518"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02518] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02518"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2518"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02518] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02540"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2540"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02540] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02540"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2540"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02540] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02540"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2540"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02540] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02564"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2564"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02564] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02566"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2566"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02566] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02570"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2570"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02570] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02570"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2570"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02570] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "02595"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2595"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02595] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02597"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2597"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02597] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02599"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2599"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02599] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02599"
 , "c1link" : "./qc/ssl/t1_enc.c.html#2599"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02599] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05558"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5558"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05558] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05560"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5560"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05560] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05563"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5563"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05563] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05563"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5563"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05563] Suspicious mix of Bitwise and Literal expressions in __nbytes&gt;__builtin_object_size(__buf,0)"
}} 
,
{ "ligne" : {
   "c1" : "05588"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5588"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05588] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05590"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5590"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05590] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05593"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5593"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05593] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05593"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5593"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05593] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05622"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5622"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05622] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05624"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5624"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05624] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05627"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5627"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05627] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05627"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5627"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05627] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05648"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5648"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05648] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05650"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5650"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05650] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05653"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5653"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05653] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05653"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5653"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05653] Suspicious mix of Bitwise and Literal expressions in __size&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05669"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5669"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05669] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05688"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5688"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05688] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05690"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5690"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05690] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05693"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5693"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05693] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05693"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5693"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05693] Suspicious mix of Bitwise and Literal expressions in __builtin_object_size(__buf,2&gt;1)&lt;__len"
}} 
,
{ "ligne" : {
   "c1" : "05713"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5713"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05713] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05718"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5718"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05718] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05718"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5718"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05718] Suspicious mix of Bitwise and Literal expressions in __size *  sizeof (__gid_t)&gt;__builtin_object_size(__list,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05739"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5739"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05739] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05741"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5741"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05741] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05744"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5744"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05744] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05744"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5744"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05744] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05765"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5765"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05765] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05767"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5767"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05767] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05770"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5770"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05770] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05770"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5770"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05770] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05792"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5792"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05792] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05794"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5794"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05794] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05797"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5797"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05797] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05797"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5797"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05797] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05821"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5821"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05821] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05823"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5823"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05823] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05826"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5826"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05826] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05826"
 , "c1link" : "./qc/ssl/t1_enc.c.html#5826"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05826] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06188"
 , "c1link" : "./qc/ssl/t1_enc.c.html#6188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06188] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06189"
 , "c1link" : "./qc/ssl/t1_enc.c.html#6189"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06189] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "16908"
 , "c1link" : "./qc/ssl/t1_enc.c.html#16908"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[16908] Suspicious mix of Bitwise and Literal expressions in len&gt;(size_t )((18446744073709551615UL)/2)"
}} 
,
{ "ligne" : {
   "c1" : "16952"
 , "c1link" : "./qc/ssl/t1_enc.c.html#16952"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[16952] Suspicious mix of Bitwise and Literal expressions in PACKET_remaining(pkt)&lt;len"
}} 
,
{ "ligne" : {
   "c1" : "16966"
 , "c1link" : "./qc/ssl/t1_enc.c.html#16966"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16966] The expression  ! PACKET_peek_sub_packet(pkt,subpkt,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16981"
 , "c1link" : "./qc/ssl/t1_enc.c.html#16981"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[16981] Suspicious mix of Bitwise and Literal expressions in PACKET_remaining(pkt)&lt;2"
}} 
,
{ "ligne" : {
   "c1" : "16994"
 , "c1link" : "./qc/ssl/t1_enc.c.html#16994"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16994] The expression  ! PACKET_peek_net_2(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17008"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17008"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17008] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17021"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[17021] Suspicious mix of Bitwise and Literal expressions in PACKET_remaining(pkt)&lt;3"
}} 
,
{ "ligne" : {
   "c1" : "17035"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17035"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17035] The expression  ! PACKET_peek_net_3(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17049"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17049"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17049] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17062"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17062"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[17062] Suspicious mix of Bitwise and Literal expressions in PACKET_remaining(pkt)&lt;4"
}} 
,
{ "ligne" : {
   "c1" : "17077"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17077"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17077] The expression  ! PACKET_peek_net_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17091"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17091"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17091] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17101"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17101] The expression  ! PACKET_remaining(pkt) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17112"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17112] The expression  ! PACKET_peek_1(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17126"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17126] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17139"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[17139] Suspicious mix of Bitwise and Literal expressions in PACKET_remaining(pkt)&lt;4"
}} 
,
{ "ligne" : {
   "c1" : "17157"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17157"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17157] The expression  ! PACKET_peek_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17175"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17175"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[17175] Suspicious mix of Bitwise and Literal expressions in PACKET_remaining(pkt)&lt;len"
}} 
,
{ "ligne" : {
   "c1" : "17193"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17193"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17193] The expression  ! PACKET_peek_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17206"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17206"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[17206] Suspicious mix of Bitwise and Literal expressions in PACKET_remaining(pkt)&lt;len"
}} 
,
{ "ligne" : {
   "c1" : "17221"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17221"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17221] The expression  ! PACKET_peek_copy_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17233"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17233"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[17233] Suspicious mix of Bitwise and Literal expressions in PACKET_remaining(pkt)&gt;dest_len"
}} 
,
{ "ligne" : {
   "c1" : "17298"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17298"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[17298] Suspicious mix of Bitwise and Literal expressions in PACKET_remaining(pkt)&lt;len"
}} 
,
{ "ligne" : {
   "c1" : "17310"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17310"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17310] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17310"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17310"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17310] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17332"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17332"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17332] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17332"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17332"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17332] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17351"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17351"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17351] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17351"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17351] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17374"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17374"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17374] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17374"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17374"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17374] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17394"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17394"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17394] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17394"
 , "c1link" : "./qc/ssl/t1_enc.c.html#17394"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17394] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20248"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20248"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20248] The pointer kdf is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20255"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20255"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20255] The pointer mdname is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20263"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20263"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20263] The expression fatal applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20283"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20283"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20283] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20291"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20291"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20291] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20309"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20309"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20309] The expression EVP_KDF_derive(kctx,out,olen,params) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20315"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20315"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20315] The expression fatal applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20383"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20383] The expression  ! EVP_CIPHER_CTX_set_params(ctx,params) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20409"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20409"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20409] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20409"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20409"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20409] The pointer mac_secret is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20409"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20409"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20409] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20410"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20410"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20410] The pointer ms is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20410"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20410"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20410] The pointer key is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20410"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20410"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20410] The pointer iv is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20410"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20410] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20411"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20411"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20411] The pointer dd is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20412"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20412"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20412] The pointer c is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20414"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20414"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20414] The pointer comp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20416"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20416"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20416] The pointer m is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20418"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20418"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20418] The pointer mac_secret_size is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20419"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20419"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20419] The pointer mac_ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20420"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20420"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20420] The pointer mac_key is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20432"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20432"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20432] The expression s-&gt;ext.use_etm applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20453"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20453"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20453] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20463"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20463"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20463] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20486"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20486"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20486] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20512"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20512"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20512] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20525"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20525"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20525] The expression s-&gt;ext.use_etm applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20545"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20545"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20545] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20555"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20555"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20555] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20570"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20570"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20570] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20589"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20589"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20589] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20616"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20616"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20616] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20629"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20629"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20629] The expression reuse_dd applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20633"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20633"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20633] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20662"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20662"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20662] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20690"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20690"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[20690] Suspicious mix of Bitwise and Literal expressions in EVP_DigestSignInit_ex(mac_ctx,(( void  *)0),EVP_MD_get0_name(m),s-&gt;ctx-&gt;libctx,s-&gt;ctx-&gt;propq,mac_key,(( void  *)0))&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "20707"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20707"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20707] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20716"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20716"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20716] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "20716"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20716"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000017[20716] The condition is always false. Dead code"
}} 
,
{ "ligne" : {
   "c1" : "20712"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20712"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[20712] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "20719"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20719"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20719] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "20731"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20731"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20731] The expression 0x12 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20738"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20738"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20738] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20760"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20760"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20760] The expression 0x9 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20760"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20760"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20760] The expression 12 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20765"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20765"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20765] The expression 0x11 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20770"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20770"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20770] The expression 0x12 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20783"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20783"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20783] The expression  - 1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20789"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20789"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20789] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20792"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20792"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20792] The expression  ! EVP_CipherInit_ex(dd,c,(( void  *)0),key,iv,(which&amp;0x002)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20802"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20802"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20802] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20808"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20808"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20808] The expression 0x17 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20815"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20815"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20815] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20824"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20824"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20824] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20833"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20833"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20833] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "20833"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20833"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000017[20833] The condition is always false. Dead code"
}} 
,
{ "ligne" : {
   "c1" : "20829"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20829"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[20829] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "20838"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20838"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20838] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "20847"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20847"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20847] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20847"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20847"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20847] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20848"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20848"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20848] The pointer c is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20849"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20849"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20849] The pointer hash is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20850"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20850"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20850] The pointer comp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20858"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20858"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20858] The expression  ! ssl_cipher_get_evp(s-&gt;ctx,s-&gt;session, &amp; c, &amp; hash, &amp; mac_type, &amp; mac_secret_size, &amp; comp,s-&gt;ext.use_etm) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20877"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20877"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20877] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20887"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20887"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20887] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20897"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20897"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20897] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "20897"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20897"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000017[20897] The condition is always false. Dead code"
}} 
,
{ "ligne" : {
   "c1" : "20893"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20893"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[20893] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "20907"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20907"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20907] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "20909"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20909"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20909] The expression  ! tls1_generate_key_block(s,p,num) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20911"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20911"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20911] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20918"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20918"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20918] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "20918"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20918"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000017[20918] The condition is always false. Dead code"
}} 
,
{ "ligne" : {
   "c1" : "20914"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20914"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[20914] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "20921"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20921"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20921] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "20959"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20959] The expression  ! ssl3_digest_cached_records(s,0) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20959"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20959] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "20964"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20964] The expression  ! ssl_handshake_hash(s,hash, sizeof (hash), &amp; hashlen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20969"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20969"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20969] The expression  ! tls1_PRF(s,str,slen,hash,hashlen,(( void  *)0),0,(( void  *)0),0,(( void  *)0),0,s-&gt;session-&gt;master_key,s-&gt;session-&gt;master_key_length,out,finished_size,1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20973"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20973"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20973] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "20977"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20977"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20977] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "20981"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20981"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20981] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "20983"
 , "c1link" : "./qc/ssl/t1_enc.c.html#20983"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20983] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "21002"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21002"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21002] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "21011"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21011"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21011] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21011"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21011"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000017[21011] The condition is always false. Dead code"
}} 
,
{ "ligne" : {
   "c1" : "21007"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21007"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21007] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "21014"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21014"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21014] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21015"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21015"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21015] The expression  ! tls1_PRF(s,'extended master secret',22,hash,hashlen,(( void  *)0),0,(( void  *)0),0,(( void  *)0),0,p,len,out,48,1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21016"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21016"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21016] The expression 'extended master secret' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21017"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21017"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21017] The expression 22 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21023"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21023"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21023] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21028"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21028"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21028] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21033"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21033"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21033] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21034"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21034"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21034] The expression 48 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21034"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21034"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21034] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "21040"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21040"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21040] The expression  ! tls1_PRF(s,'master secret',13,s-&gt;s3.client_random,32,(( void  *)0),0,s-&gt;s3.server_random,32,(( void  *)0),0,p,len,out,48,1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21041"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21041"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21041] The expression 'master secret' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21042"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21042"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21042] The expression 13 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21043"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21043"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21043] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21048"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21048"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21048] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21049"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21049"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21049] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21054"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21054"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21054] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21055"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21055"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21055] The expression 48 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21055"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21055"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21055] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "21065"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21065"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21065] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21065"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21065"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000017[21065] The condition is always false. Dead code"
}} 
,
{ "ligne" : {
   "c1" : "21061"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21061"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21061] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "21076"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21076"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21076] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21087"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21087"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[21087] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "21101"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21101] The expression use_context applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21111"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21111"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21111] goto statement jump to err2"
}} 
,
{ "ligne" : {
   "c1" : "21120"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21120] The expression use_context applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21139"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21139] The expression 'client finished' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21140"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21140"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21140] The expression 15 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21141"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21141"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21141] goto statement jump to err1"
}} 
,
{ "ligne" : {
   "c1" : "21142"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21142] The expression 'server finished' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21143"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21143] The expression 15 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21144"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21144"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21144] goto statement jump to err1"
}} 
,
{ "ligne" : {
   "c1" : "21145"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21145] The expression 'master secret' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21146"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21146] The expression 13 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21147"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21147"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21147] goto statement jump to err1"
}} 
,
{ "ligne" : {
   "c1" : "21148"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21148] The expression 'extended master secret' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21149"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21149] The expression 22 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21150"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21150"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21150] goto statement jump to err1"
}} 
,
{ "ligne" : {
   "c1" : "21151"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21151] The expression 'key expansion' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21152"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21152] The expression 13 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21153"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21153"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21153] goto statement jump to err1"
}} 
,
{ "ligne" : {
   "c1" : "21180"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21180"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21180] goto statement jump to ret"
}} 
,
{ "ligne" : {
   "c1" : "21188"
 , "c1link" : "./qc/ssl/t1_enc.c.html#21188"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21188] goto statement jump to ret"
}} 
]
};
console.log('leListeStr 99 main end');
