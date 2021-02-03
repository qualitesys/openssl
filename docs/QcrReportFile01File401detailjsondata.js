console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/err/err_blocks.c.html" 
 , "texte" : "File crypto/err/err_blocks.c 4 rule violations " 
 , "fic2"  : "./qc/crypto/err/err_blocks.c.xml" 
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
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03585"
 , "c1link" : "./qc/crypto/err/err_blocks.c.html#3585"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03585] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "05049"
 , "c1link" : "./qc/crypto/err/err_blocks.c.html#5049"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05049] The expression deall applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05230"
 , "c1link" : "./qc/crypto/err/err_blocks.c.html#5230"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[05230] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "05256"
 , "c1link" : "./qc/crypto/err/err_blocks.c.html#5256"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[05256] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
};
console.log('leListeStr 99 main end');
