console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/sha/sha3.c.html" 
 , "texte" : "File crypto/sha/sha3.c 4 rule violations " 
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
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00817"
 , "c1link" : "./qc/crypto/sha/sha3.c.html#817"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00817] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "00824"
 , "c1link" : "./qc/crypto/sha/sha3.c.html#824"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[00824] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "00831"
 , "c1link" : "./qc/crypto/sha/sha3.c.html#831"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00831] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "00856"
 , "c1link" : "./qc/crypto/sha/sha3.c.html#856"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00856] The expression rem applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
