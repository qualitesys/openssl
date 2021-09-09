console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/des/qud_cksm.c.html" 
 , "texte" : "File crypto/des/qud_cksm.c 4 rule violations " 
 , "fic2"  : "./qc/crypto/des/qud_cksm.c.xml" 
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
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "02285"
 , "c1link" : "./qc/crypto/des/qud_cksm.c.html#2285"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02285] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "03104"
 , "c1link" : "./qc/crypto/des/qud_cksm.c.html#3104"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[03104] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "03104"
 , "c1link" : "./qc/crypto/des/qud_cksm.c.html#3104"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03104] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "03105"
 , "c1link" : "./qc/crypto/des/qud_cksm.c.html#3105"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[03105] A pointer is declared but not initialized"
}} 
]
};
console.log('leListeStr 99 main end');
