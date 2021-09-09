console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/rand/randfile.c.html" 
 , "texte" : "File crypto/rand/randfile.c 7 rule violations " 
 , "fic2"  : "./qc/crypto/rand/randfile.c.xml" 
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
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "3"
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
   "c1" : "01187"
 , "c1link" : "./qc/crypto/rand/randfile.c.html#1187"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01187] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08913"
 , "c1link" : "./qc/crypto/rand/randfile.c.html#8913"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08913] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08918"
 , "c1link" : "./qc/crypto/rand/randfile.c.html#8918"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08918] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08988"
 , "c1link" : "./qc/crypto/rand/randfile.c.html#8988"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08988] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08994"
 , "c1link" : "./qc/crypto/rand/randfile.c.html#8994"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08994] The expression  ! RAND_status() applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09095"
 , "c1link" : "./qc/crypto/rand/randfile.c.html#9095"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09095] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09121"
 , "c1link" : "./qc/crypto/rand/randfile.c.html#9121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09121] The expression use_randfile applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
