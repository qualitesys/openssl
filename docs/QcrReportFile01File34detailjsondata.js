console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/rc2/rc2_skey.c.html" 
 , "texte" : "File crypto/rc2/rc2_skey.c 2 rule violations " 
 , "fic2"  : "./qc/crypto/rc2/rc2_skey.c.xml" 
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
   "c1" : "00106"
 , "c1link" : "./qc/crypto/rc2/rc2_skey.c.html#106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[00106] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/crypto/rc2/rc2_skey.c.html#139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00139] The expression i-- applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
