console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/sha/sha3.c.html" 
 , "texte" : "File crypto/sha/sha3.c 7 rule violations " 
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "2"
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
   "c1" : "00383"
 , "c1link" : "./qc/crypto/sha/sha3.c.html#383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00383] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/crypto/sha/sha3.c.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00384] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "00809"
 , "c1link" : "./qc/crypto/sha/sha3.c.html#809"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00809] Suspicious mix of Bitwise and Literal expressions in bsz&lt;= sizeof (ctx-&gt;buf)"
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
   "c1" : "00863"
 , "c1link" : "./qc/crypto/sha/sha3.c.html#863"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00863] The expression rem applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
