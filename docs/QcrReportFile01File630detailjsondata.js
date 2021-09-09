console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/rsa/rsa_x931.c.html" 
 , "texte" : "File crypto/rsa/rsa_x931.c 5 rule violations " 
 , "fic2"  : "./qc/crypto/rsa/rsa_x931.c.xml" 
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
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "02107"
 , "c1link" : "./qc/crypto/rsa/rsa_x931.c.html#2107"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02107] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "06640"
 , "c1link" : "./qc/crypto/rsa/rsa_x931.c.html#6640"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[06640] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "06640"
 , "c1link" : "./qc/crypto/rsa/rsa_x931.c.html#6640"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[06640] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "06681"
 , "c1link" : "./qc/crypto/rsa/rsa_x931.c.html#6681"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[06681] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "06681"
 , "c1link" : "./qc/crypto/rsa/rsa_x931.c.html#6681"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[06681] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
]
};
console.log('leListeStr 99 main end');
