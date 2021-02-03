console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/o_time.c.html" 
 , "texte" : "File crypto/o_time.c 3 rule violations " 
 , "fic2"  : "./qc/crypto/o_time.c.xml" 
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
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03570"
 , "c1link" : "./qc/crypto/o_time.c.html#3570"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03570] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "04588"
 , "c1link" : "./qc/crypto/o_time.c.html#4588"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[04588] The expression pday applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "04590"
 , "c1link" : "./qc/crypto/o_time.c.html#4590"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[04590] The expression psec applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
