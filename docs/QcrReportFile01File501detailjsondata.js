console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/lhash/lhash.c.html" 
 , "texte" : "File crypto/lhash/lhash.c 7 rule violations " 
 , "fic2"  : "./qc/crypto/lhash/lhash.c.xml" 
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
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03565"
 , "c1link" : "./qc/crypto/lhash/lhash.c.html#3565"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03565] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "05186"
 , "c1link" : "./qc/crypto/lhash/lhash.c.html#5186"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[05186] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "05202"
 , "c1link" : "./qc/crypto/lhash/lhash.c.html#5202"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[05202] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "05207"
 , "c1link" : "./qc/crypto/lhash/lhash.c.html#5207"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[05207] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "05301"
 , "c1link" : "./qc/crypto/lhash/lhash.c.html#5301"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[05301] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "05475"
 , "c1link" : "./qc/crypto/lhash/lhash.c.html#5475"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05475] The expression use_arg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05710"
 , "c1link" : "./qc/crypto/lhash/lhash.c.html#5710"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05710] The expression  * c applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
