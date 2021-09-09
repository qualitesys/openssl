console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/ec/ec_oct.c.html" 
 , "texte" : "File crypto/ec/ec_oct.c 4 rule violations " 
 , "fic2"  : "./qc/crypto/ec/ec_oct.c.xml" 
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
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
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
   "c1" : "02674"
 , "c1link" : "./qc/crypto/ec/ec_oct.c.html#2674"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02674] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10205"
 , "c1link" : "./qc/crypto/ec/ec_oct.c.html#10205"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10205] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10205"
 , "c1link" : "./qc/crypto/ec/ec_oct.c.html#10205"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10205] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10218"
 , "c1link" : "./qc/crypto/ec/ec_oct.c.html#10218"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10218] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
};
console.log('leListeStr 99 main end');
