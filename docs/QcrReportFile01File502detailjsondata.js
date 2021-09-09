console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/init.c.html" 
 , "texte" : "File crypto/init.c 18 rule violations " 
 , "fic2"  : "./qc/crypto/init.c.xml" 
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
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "3"
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
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "01429"
 , "c1link" : "./qc/crypto/init.c.html#1429"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01429] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17003"
 , "c1link" : "./qc/crypto/init.c.html#17003"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[17003] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "17008"
 , "c1link" : "./qc/crypto/init.c.html#17008"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[17008] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "17011"
 , "c1link" : "./qc/crypto/init.c.html#17011"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17011] The expression  ! ossl_init_thread() applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17012"
 , "c1link" : "./qc/crypto/init.c.html#17012"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[17012] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "17019"
 , "c1link" : "./qc/crypto/init.c.html#17019"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[17019] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "17199"
 , "c1link" : "./qc/crypto/init.c.html#17199"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17199] The expression  ! async_init() applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17244"
 , "c1link" : "./qc/crypto/init.c.html#17244"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17244] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17244"
 , "c1link" : "./qc/crypto/init.c.html#17244"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17244] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17252"
 , "c1link" : "./qc/crypto/init.c.html#17252"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17252] The expression  ! base_inited applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17256"
 , "c1link" : "./qc/crypto/init.c.html#17256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17256] The expression stopped applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17302"
 , "c1link" : "./qc/crypto/init.c.html#17302"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17302] The expression async_inited applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17307"
 , "c1link" : "./qc/crypto/init.c.html#17307"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17307] The expression load_crypto_strings_inited applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17370"
 , "c1link" : "./qc/crypto/init.c.html#17370"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17370] The expression stopped applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17401"
 , "c1link" : "./qc/crypto/init.c.html#17401"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17401] The expression  ! aloaddone applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17469"
 , "c1link" : "./qc/crypto/init.c.html#17469"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17469] The expression  ! loading applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17531"
 , "c1link" : "./qc/crypto/init.c.html#17531"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17531] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17533"
 , "c1link" : "./qc/crypto/init.c.html#17533"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[17533] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
};
console.log('leListeStr 99 main end');
