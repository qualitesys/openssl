console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/ec/ecx_key.c.html" 
 , "texte" : "File crypto/ec/ecx_key.c 4 rule violations " 
 , "fic2"  : "./qc/crypto/ec/ecx_key.c.xml" 
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03235"
 , "c1link" : "./qc/crypto/ec/ecx_key.c.html#3235"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03235] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "04949"
 , "c1link" : "./qc/crypto/ec/ecx_key.c.html#4949"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[04949] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "05046"
 , "c1link" : "./qc/crypto/ec/ecx_key.c.html#5046"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[05046] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "05055"
 , "c1link" : "./qc/crypto/ec/ecx_key.c.html#5055"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[05055] goto statement jump to err"
}} 
]
};
console.log('leListeStr 99 main end');
