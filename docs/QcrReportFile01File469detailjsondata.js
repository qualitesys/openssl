console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/evp/mac_lib.c.html" 
 , "texte" : "File crypto/evp/mac_lib.c 7 rule violations " 
 , "fic2"  : "./qc/crypto/evp/mac_lib.c.xml" 
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
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03619"
 , "c1link" : "./qc/crypto/evp/mac_lib.c.html#3619"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[03619] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09635"
 , "c1link" : "./qc/crypto/evp/mac_lib.c.html#9635"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09635] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09685"
 , "c1link" : "./qc/crypto/evp/mac_lib.c.html#9685"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09685] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09881"
 , "c1link" : "./qc/crypto/evp/mac_lib.c.html#9881"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09881] The expression xof applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10027"
 , "c1link" : "./qc/crypto/evp/mac_lib.c.html#10027"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10027] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10078"
 , "c1link" : "./qc/crypto/evp/mac_lib.c.html#10078"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10078] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10091"
 , "c1link" : "./qc/crypto/evp/mac_lib.c.html#10091"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10091] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
};
console.log('leListeStr 99 main end');
