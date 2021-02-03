console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/mem_sec.c.html" 
 , "texte" : "File crypto/mem_sec.c 16 rule violations " 
 , "fic2"  : "./qc/crypto/mem_sec.c.xml" 
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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03224"
 , "c1link" : "./qc/crypto/mem_sec.c.html#3224"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03224] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07433"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07433] The expression  ! secure_mem_initialized applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07441"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7441"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07441] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "07492"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7492"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07492] The expression  ! secure_mem_initialized applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07509"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7509"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07509] The expression secure_mem_initialized applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07578"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7578"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07578] The expression  ! secure_mem_initialized applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07669"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7669"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07669] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "07681"
 , "c1link" : "./qc/crypto/mem_sec.c.html#7681"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07681] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08153"
 , "c1link" : "./qc/crypto/mem_sec.c.html#8153"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08153] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08153"
 , "c1link" : "./qc/crypto/mem_sec.c.html#8153"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08153] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08153"
 , "c1link" : "./qc/crypto/mem_sec.c.html#8153"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08153] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[00001] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[00001] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[00001] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[00001] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/crypto/mem_sec.c.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00001] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
};
console.log('leListeStr 99 main end');
