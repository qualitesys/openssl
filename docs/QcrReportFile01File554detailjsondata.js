console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/pem/pem_oth.c.html" 
 , "texte" : "File crypto/pem/pem_oth.c 3 rule violations " 
 , "fic2"  : "./qc/crypto/pem/pem_oth.c.xml" 
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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "02080"
 , "c1link" : "./qc/crypto/pem/pem_oth.c.html#2080"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02080] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13276"
 , "c1link" : "./qc/crypto/pem/pem_oth.c.html#13276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13276] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13281"
 , "c1link" : "./qc/crypto/pem/pem_oth.c.html#13281"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13281] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
]
};
console.log('leListeStr 99 main end');
