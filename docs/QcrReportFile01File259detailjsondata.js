console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/conf/conf_lib.c.html" 
 , "texte" : "File crypto/conf/conf_lib.c 7 rule violations " 
 , "fic2"  : "./qc/crypto/conf/conf_lib.c.xml" 
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
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03224"
 , "c1link" : "./qc/crypto/conf/conf_lib.c.html#3224"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03224] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "06944"
 , "c1link" : "./qc/crypto/conf/conf_lib.c.html#6944"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[06944] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "06975"
 , "c1link" : "./qc/crypto/conf/conf_lib.c.html#6975"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06975] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07066"
 , "c1link" : "./qc/crypto/conf/conf_lib.c.html#7066"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07066] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "07179"
 , "c1link" : "./qc/crypto/conf/conf_lib.c.html#7179"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07179] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "07262"
 , "c1link" : "./qc/crypto/conf/conf_lib.c.html#7262"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07262] The expression s applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07383"
 , "c1link" : "./qc/crypto/conf/conf_lib.c.html#7383"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07383] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
};
console.log('leListeStr 99 main end');
