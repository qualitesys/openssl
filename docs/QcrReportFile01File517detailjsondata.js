console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/modes/cbc128.c.html" 
 , "texte" : "File crypto/modes/cbc128.c 7 rule violations " 
 , "fic2"  : "./qc/crypto/modes/cbc128.c.xml" 
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
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "3"
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
   "c1" : "01589"
 , "c1link" : "./qc/crypto/modes/cbc128.c.html#1589"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01589] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "04916"
 , "c1link" : "./qc/crypto/modes/cbc128.c.html#4916"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[04916] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "04922"
 , "c1link" : "./qc/crypto/modes/cbc128.c.html#4922"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[04922] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "04946"
 , "c1link" : "./qc/crypto/modes/cbc128.c.html#4946"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[04946] The expression len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "04980"
 , "c1link" : "./qc/crypto/modes/cbc128.c.html#4980"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[04980] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "05008"
 , "c1link" : "./qc/crypto/modes/cbc128.c.html#5008"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05008] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "05042"
 , "c1link" : "./qc/crypto/modes/cbc128.c.html#5042"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05042] The expression len applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
