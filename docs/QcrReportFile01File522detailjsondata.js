console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/modes/xts128.c.html" 
 , "texte" : "File crypto/modes/xts128.c 6 rule violations " 
 , "fic2"  : "./qc/crypto/modes/xts128.c.xml" 
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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03569"
 , "c1link" : "./qc/crypto/modes/xts128.c.html#3569"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03569] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "04891"
 , "c1link" : "./qc/crypto/modes/xts128.c.html#4891"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04891] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04892"
 , "c1link" : "./qc/crypto/modes/xts128.c.html#4892"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04892] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04901"
 , "c1link" : "./qc/crypto/modes/xts128.c.html#4901"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[04901] The expression (ossl_is_little_endian) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "04922"
 , "c1link" : "./qc/crypto/modes/xts128.c.html#4922"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[04922] The expression enc applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "04940"
 , "c1link" : "./qc/crypto/modes/xts128.c.html#4940"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[04940] The expression (ossl_is_little_endian) applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
