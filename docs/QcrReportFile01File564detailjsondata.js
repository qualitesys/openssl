console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/pkcs12/p12_crpt.c.html" 
 , "texte" : "File crypto/pkcs12/p12_crpt.c 5 rule violations " 
 , "fic2"  : "./qc/crypto/pkcs12/p12_crpt.c.xml" 
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
   "c1" : "02080"
 , "c1link" : "./qc/crypto/pkcs12/p12_crpt.c.html#2080"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02080] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14219"
 , "c1link" : "./qc/crypto/pkcs12/p12_crpt.c.html#14219"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14219] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14221"
 , "c1link" : "./qc/crypto/pkcs12/p12_crpt.c.html#14221"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14221] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14221"
 , "c1link" : "./qc/crypto/pkcs12/p12_crpt.c.html#14221"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[14221] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "14223"
 , "c1link" : "./qc/crypto/pkcs12/p12_crpt.c.html#14223"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[14223] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
]
};
console.log('leListeStr 99 main end');
