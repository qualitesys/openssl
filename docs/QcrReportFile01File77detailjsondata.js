console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/aes/aes_ige.c.html" 
 , "texte" : "File crypto/aes/aes_ige.c 35 rule violations " 
 , "fic2"  : "./qc/crypto/aes/aes_ige.c.xml" 
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "14"
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
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "01214"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#1214"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01214] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "01377"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#1377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01377] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01404"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#1404"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01404] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01408"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#1408"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01408] The expression __buflen&gt;__builtin_object_size(__buf,2&gt;1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01408"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#1408"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01408] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01430"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#1430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01430] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01430"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#1430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01430] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01454"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#1454"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01454] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01460"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#1460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01460] The expression __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  ) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01460"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#1460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01460] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01485"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#1485"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01485] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01489"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#1489"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01489] The expression __len&gt;__builtin_object_size(__dst,2&gt;1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01489"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#1489"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01489] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01857"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#1857"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01857] The expression ( ! __builtin_constant_p(__n)||__n&gt;__builtin_object_size(__dest,2&gt;1)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01856"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#1856"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01856] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03079"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#3079"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03079] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03084"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#3084"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03084] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03109"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#3109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03109] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03113"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#3113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03113] The expression __size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03113"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#3113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03113] The expression __n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03116"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#3116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03116] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03141"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#3141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03141] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03145"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#3145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03145] The expression __size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03145"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#3145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03145] The expression __n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03149"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#3149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03149] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03157"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#3157"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03157] The expression __size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03157"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#3157"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03157] The expression __n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06257"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#6257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06257] The expression len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06283"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#6283"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06283] The expression len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06309"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#6309"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06309] The expression len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06336"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#6336"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06336] The expression len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06369"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#6369"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[06369] The pointer iv is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "06369"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#6369"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[06369] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "06370"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#6370"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[06370] The pointer iv2 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "06370"
 , "c1link" : "./qc/crypto/aes/aes_ige.c.html#6370"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[06370] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
]
};
console.log('leListeStr 99 main end');
