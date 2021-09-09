console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/evp/p_legacy.c.html" 
 , "texte" : "File crypto/evp/p_legacy.c 2 rule violations " 
 , "fic2"  : "./qc/crypto/evp/p_legacy.c.xml" 
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
   "c1" : "03249"
 , "c1link" : "./qc/crypto/evp/p_legacy.c.html#3249"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[03249] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10489"
 , "c1link" : "./qc/crypto/evp/p_legacy.c.html#10489"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10489] The expression ret applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
