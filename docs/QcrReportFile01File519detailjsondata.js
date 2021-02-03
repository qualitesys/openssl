console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/modes/ofb128.c.html" 
 , "texte" : "File crypto/modes/ofb128.c 6 rule violations " 
 , "fic2"  : "./qc/crypto/modes/ofb128.c.xml" 
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
 , "c2" : "QC-CPP000006"
 , "c3" : "Risk of infinite while loop"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "3"
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
   "c1" : "03569"
 , "c1link" : "./qc/crypto/modes/ofb128.c.html#3569"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03569] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "04879"
 , "c1link" : "./qc/crypto/modes/ofb128.c.html#4879"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[04879] The expression len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "04881"
 , "c1link" : "./qc/crypto/modes/ofb128.c.html#4881"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[04881] The expression len-- applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "04857"
 , "c1link" : "./qc/crypto/modes/ofb128.c.html#4857"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[04857] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "04888"
 , "c1link" : "./qc/crypto/modes/ofb128.c.html#4888"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[04888] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "04888"
 , "c1link" : "./qc/crypto/modes/ofb128.c.html#4888"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[04888] The expression 0 is invariable, always true or false"
}} 
]
};
console.log('leListeStr 99 main end');
