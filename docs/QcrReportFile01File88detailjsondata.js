console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/fuzz/bignum-test-bin-bignum.c.html" 
 , "texte" : "File fuzz/bignum-test-bin-bignum.c 2 rule violations " 
 , "fic2"  : "./qc/fuzz/bignum-test-bin-bignum.c.xml" 
 , "fic3"  : "./qc/fuzz/bignum-test-bin-bignum.ccnt.xml" 
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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03269"
 , "c1link" : "./qc/fuzz/bignum-test-bin-bignum.c.html#3269"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03269] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "05175"
 , "c1link" : "./qc/fuzz/bignum-test-bin-bignum.c.html#5175"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[05175] goto statement jump to done"
}} 
]
};
console.log('leListeStr 99 main end');
