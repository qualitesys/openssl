console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/conf/conf_sap.c.html" 
 , "texte" : "File crypto/conf/conf_sap.c 4 rule violations " 
 , "fic2"  : "./qc/crypto/conf/conf_sap.c.xml" 
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
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "02102"
 , "c1link" : "./qc/crypto/conf/conf_sap.c.html#2102"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02102] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13873"
 , "c1link" : "./qc/crypto/conf/conf_sap.c.html#13873"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13873] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13874"
 , "c1link" : "./qc/crypto/conf/conf_sap.c.html#13874"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13874] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13877"
 , "c1link" : "./qc/crypto/conf/conf_sap.c.html#13877"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13877] The expression openssl_configured applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
