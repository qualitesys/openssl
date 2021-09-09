console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/cpuid.c.html" 
 , "texte" : "File crypto/cpuid.c 3 rule violations " 
 , "fic2"  : "./qc/crypto/cpuid.c.xml" 
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
   "c1" : "01429"
 , "c1link" : "./qc/crypto/cpuid.c.html#1429"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01429] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07808"
 , "c1link" : "./qc/crypto/cpuid.c.html#7808"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07808] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07809"
 , "c1link" : "./qc/crypto/cpuid.c.html#7809"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07809] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
]
};
console.log('leListeStr 99 main end');
