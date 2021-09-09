console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/evp/e_sm4.c.html" 
 , "texte" : "File crypto/evp/e_sm4.c 6 rule violations " 
 , "fic2"  : "./qc/crypto/evp/e_sm4.c.xml" 
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
 , "c4" : "4"
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
   "c1" : "01214"
 , "c1link" : "./qc/crypto/evp/e_sm4.c.html#1214"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01214] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09882"
 , "c1link" : "./qc/crypto/evp/e_sm4.c.html#9882"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09882] The expression enc applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09901"
 , "c1link" : "./qc/crypto/evp/e_sm4.c.html#9901"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09901] The expression enc applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09915"
 , "c1link" : "./qc/crypto/evp/e_sm4.c.html#9915"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09915] The expression inl applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09915"
 , "c1link" : "./qc/crypto/evp/e_sm4.c.html#9915"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09915] The expression 128==1 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "09915"
 , "c1link" : "./qc/crypto/evp/e_sm4.c.html#9915"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09915] The expression inl applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
