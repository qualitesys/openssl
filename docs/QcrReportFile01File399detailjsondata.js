console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/err/err_all.c.html" 
 , "texte" : "File crypto/err/err_all.c 2 rule violations " 
 , "fic2"  : "./qc/crypto/err/err_all.c.xml" 
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
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03236"
 , "c1link" : "./qc/crypto/err/err_all.c.html#3236"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03236] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "04903"
 , "c1link" : "./qc/crypto/err/err_all.c.html#4903"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[04903] The expression 0 is invariable, always true or false"
}} 
]
};
console.log('leListeStr 99 main end');
