console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/sha/sha3.c.html" 
 , "texte" : "File crypto/sha/sha3.c 8 rule violations " 
 , "fic2"  : "./qc/crypto/sha/sha3.c.xml" 
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
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/crypto/sha/sha3.c.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00384] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "00809"
 , "c1link" : "./qc/crypto/sha/sha3.c.html#809"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00809] The expression bsz&lt;= sizeof (ctx-&gt;buf) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "00824"
 , "c1link" : "./qc/crypto/sha/sha3.c.html#824"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00824] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "00831"
 , "c1link" : "./qc/crypto/sha/sha3.c.html#831"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[00831] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "00838"
 , "c1link" : "./qc/crypto/sha/sha3.c.html#838"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00838] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "00841"
 , "c1link" : "./qc/crypto/sha/sha3.c.html#841"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00841] The expression len&lt;rem applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "00858"
 , "c1link" : "./qc/crypto/sha/sha3.c.html#858"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00858] The expression len&gt;=bsz applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "00863"
 , "c1link" : "./qc/crypto/sha/sha3.c.html#863"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00863] The expression rem applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
