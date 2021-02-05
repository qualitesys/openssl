console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/core_algorithm.c.html" 
 , "texte" : "File crypto/core_algorithm.c 7 rule violations " 
 , "fic2"  : "./qc/crypto/core_algorithm.c.xml" 
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
 , "c4" : "4"
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
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "04208"
 , "c1link" : "./qc/crypto/core_algorithm.c.html#4208"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[04208] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "05997"
 , "c1link" : "./qc/crypto/core_algorithm.c.html#5997"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[05997] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "05999"
 , "c1link" : "./qc/crypto/core_algorithm.c.html#5999"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[05999] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "08171"
 , "c1link" : "./qc/crypto/core_algorithm.c.html#8171"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[08171] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "08397"
 , "c1link" : "./qc/crypto/core_algorithm.c.html#8397"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08397] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08424"
 , "c1link" : "./qc/crypto/core_algorithm.c.html#8424"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08424] The expression  ! ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08461"
 , "c1link" : "./qc/crypto/core_algorithm.c.html#8461"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08461] The expression  ! ret applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
