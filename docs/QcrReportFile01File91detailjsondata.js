console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/fuzz/bndiv-test-bin-test-corpus.c.html" 
 , "texte" : "File fuzz/bndiv-test-bin-test-corpus.c 2 rule violations " 
 , "fic2"  : "./qc/fuzz/bndiv-test-bin-test-corpus.c.xml" 
 , "fic3"  : "./qc/fuzz/bndiv-test-bin-test-corpus.ccnt.xml" 
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
   "c1" : "03830"
 , "c1link" : "./qc/fuzz/bndiv-test-bin-test-corpus.c.html#3830"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03830] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "04797"
 , "c1link" : "./qc/fuzz/bndiv-test-bin-test-corpus.c.html#4797"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[04797] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
]
};
console.log('leListeStr 99 main end');
