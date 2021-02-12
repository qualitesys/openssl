console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/providers/legacyprov.c.html" 
 , "texte" : "File providers/legacyprov.c 3 rule violations " 
 , "fic2"  : "./qc/providers/legacyprov.c.xml" 
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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "04148"
 , "c1link" : "./qc/providers/legacyprov.c.html#4148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[04148] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "06639"
 , "c1link" : "./qc/providers/legacyprov.c.html#6639"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[06639] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "06644"
 , "c1link" : "./qc/providers/legacyprov.c.html#6644"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[06644] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
};
console.log('leListeStr 99 main end');
