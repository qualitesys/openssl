console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/params.c.html" 
 , "texte" : "File crypto/params.c 4 rule violations " 
 , "fic2"  : "./qc/crypto/params.c.xml" 
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
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03045"
 , "c1link" : "./qc/crypto/params.c.html#3045"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[03045] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "05151"
 , "c1link" : "./qc/crypto/params.c.html#5151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[05151] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "05180"
 , "c1link" : "./qc/crypto/params.c.html#5180"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05180] The expression ( ! ossl_is_little_endian) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06167"
 , "c1link" : "./qc/crypto/params.c.html#6167"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[06167] A pointer is declared but not initialized"
}} 
]
};
console.log('leListeStr 99 main end');
