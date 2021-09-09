console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/info.c.html" 
 , "texte" : "File crypto/info.c 4 rule violations " 
 , "fic2"  : "./qc/crypto/info.c.xml" 
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
 , "c2" : "QC-CPP000006"
 , "c3" : "Risk of infinite while loop"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "1"
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
   "c1" : "01209"
 , "c1link" : "./qc/crypto/info.c.html#1209"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01209] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10315"
 , "c1link" : "./qc/crypto/info.c.html#10315"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[10315] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "10315"
 , "c1link" : "./qc/crypto/info.c.html#10315"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10315] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10315"
 , "c1link" : "./qc/crypto/info.c.html#10315"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10315] The expression 0 is invariable, always true or false"
}} 
]
};
console.log('leListeStr 99 main end');
