console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/seed/seed_cbc.c.html" 
 , "texte" : "File crypto/seed/seed_cbc.c 2 rule violations " 
 , "fic2"  : "./qc/crypto/seed/seed_cbc.c.xml" 
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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03243"
 , "c1link" : "./qc/crypto/seed/seed_cbc.c.html#3243"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03243] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "04445"
 , "c1link" : "./qc/crypto/seed/seed_cbc.c.html#4445"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[04445] The expression enc applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
