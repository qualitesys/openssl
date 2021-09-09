console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/pem/pem_sign.c.html" 
 , "texte" : "File crypto/pem/pem_sign.c 5 rule violations " 
 , "fic2"  : "./qc/crypto/pem/pem_sign.c.xml" 
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
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "2"
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
   "c1" : "02080"
 , "c1link" : "./qc/crypto/pem/pem_sign.c.html#2080"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02080] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13290"
 , "c1link" : "./qc/crypto/pem/pem_sign.c.html#13290"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13290] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13290"
 , "c1link" : "./qc/crypto/pem/pem_sign.c.html#13290"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13290] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13305"
 , "c1link" : "./qc/crypto/pem/pem_sign.c.html#13305"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13305] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13309"
 , "c1link" : "./qc/crypto/pem/pem_sign.c.html#13309"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13309] goto statement jump to err"
}} 
]
};
console.log('leListeStr 99 main end');
