console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/provider.c.html" 
 , "texte" : "File crypto/provider.c 4 rule violations " 
 , "fic2"  : "./qc/crypto/provider.c.xml" 
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
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03235"
 , "c1link" : "./qc/crypto/provider.c.html#3235"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03235] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "05461"
 , "c1link" : "./qc/crypto/provider.c.html#5461"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[05461] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "05466"
 , "c1link" : "./qc/crypto/provider.c.html#5466"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[05466] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "05591"
 , "c1link" : "./qc/crypto/provider.c.html#5591"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[05591] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
};
console.log('leListeStr 99 main end');
