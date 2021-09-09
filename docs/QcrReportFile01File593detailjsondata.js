console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/punycode.c.html" 
 , "texte" : "File crypto/punycode.c 3 rule violations " 
 , "fic2"  : "./qc/crypto/punycode.c.xml" 
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
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "01864"
 , "c1link" : "./qc/crypto/punycode.c.html#1864"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[01864] The condition of do while loop is constant, infinite loop risk : 1"
}} 
,
{ "ligne" : {
   "c1" : "01864"
 , "c1link" : "./qc/crypto/punycode.c.html#1864"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01864] The expression 1 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01864"
 , "c1link" : "./qc/crypto/punycode.c.html#1864"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01864] The expression 1 is invariable, always true or false"
}} 
]
};
console.log('leListeStr 99 main end');
