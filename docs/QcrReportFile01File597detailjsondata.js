console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/rand/rand_pool.c.html" 
 , "texte" : "File crypto/rand/rand_pool.c 8 rule violations " 
 , "fic2"  : "./qc/crypto/rand/rand_pool.c.xml" 
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
 , "c4" : "3"
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
   "c1" : "02328"
 , "c1link" : "./qc/crypto/rand/rand_pool.c.html#2328"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02328] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13959"
 , "c1link" : "./qc/crypto/rand/rand_pool.c.html#13959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13959] The expression secure applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13974"
 , "c1link" : "./qc/crypto/rand/rand_pool.c.html#13974"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13974] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14028"
 , "c1link" : "./qc/crypto/rand/rand_pool.c.html#14028"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14028] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14028"
 , "c1link" : "./qc/crypto/rand/rand_pool.c.html#14028"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14028] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14094"
 , "c1link" : "./qc/crypto/rand/rand_pool.c.html#14094"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[14094] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "14143"
 , "c1link" : "./qc/crypto/rand/rand_pool.c.html#14143"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14143] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14226"
 , "c1link" : "./qc/crypto/rand/rand_pool.c.html#14226"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14226] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
};
console.log('leListeStr 99 main end');
