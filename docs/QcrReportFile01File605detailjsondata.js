console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/rc4/rc4_skey.c.html" 
 , "texte" : "File crypto/rc4/rc4_skey.c 5 rule violations " 
 , "fic2"  : "./qc/crypto/rc4/rc4_skey.c.xml" 
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
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "1"
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
   "c1" : "01252"
 , "c1link" : "./qc/crypto/rc4/rc4_skey.c.html#1252"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01252] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "06173"
 , "c1link" : "./qc/crypto/rc4/rc4_skey.c.html#6173"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06173] The expression  sizeof ( unsigned  int  )==1 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06173"
 , "c1link" : "./qc/crypto/rc4/rc4_skey.c.html#6173"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06173] The expression  sizeof ( unsigned  int  )==1 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "06183"
 , "c1link" : "./qc/crypto/rc4/rc4_skey.c.html#6183"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[06183] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "06189"
 , "c1link" : "./qc/crypto/rc4/rc4_skey.c.html#6189"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[06189] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
};
console.log('leListeStr 99 main end');
