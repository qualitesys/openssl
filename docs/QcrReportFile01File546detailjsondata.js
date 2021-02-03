console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/params.c.html" 
 , "texte" : "File crypto/params.c 4 rule violations " 
 , "fic2"  : "./qc/crypto/params.c.xml" 
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
   "c1" : "03660"
 , "c1link" : "./qc/crypto/params.c.html#3660"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03660] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "05142"
 , "c1link" : "./qc/crypto/params.c.html#5142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[05142] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "05171"
 , "c1link" : "./qc/crypto/params.c.html#5171"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05171] The expression ( ! ossl_is_little_endian) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06333"
 , "c1link" : "./qc/crypto/params.c.html#6333"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06333] The expression ( double  )((18446744073709551615UL)-65535)+65536.0 is invariable, always true or false"
}} 
]
};
console.log('leListeStr 99 main end');
