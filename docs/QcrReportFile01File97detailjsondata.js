console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/fuzz/cms-test-bin-test-corpus.c.html" 
 , "texte" : "File fuzz/cms-test-bin-test-corpus.c 2 rule violations " 
 , "fic2"  : "./qc/fuzz/cms-test-bin-test-corpus.c.xml" 
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
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03833"
 , "c1link" : "./qc/fuzz/cms-test-bin-test-corpus.c.html#3833"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03833] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "04800"
 , "c1link" : "./qc/fuzz/cms-test-bin-test-corpus.c.html#4800"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[04800] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
]
};
console.log('leListeStr 99 main end');
