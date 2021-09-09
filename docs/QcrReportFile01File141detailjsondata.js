console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/asn1/x_long.c.html" 
 , "texte" : "File crypto/asn1/x_long.c 4 rule violations " 
 , "fic2"  : "./qc/crypto/asn1/x_long.c.xml" 
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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "02080"
 , "c1link" : "./qc/crypto/asn1/x_long.c.html#2080"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02080] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "06428"
 , "c1link" : "./qc/crypto/asn1/x_long.c.html#6428"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06428] The expression pad applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06464"
 , "c1link" : "./qc/crypto/asn1/x_long.c.html#6464"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06464] The expression len&gt;( int  ) sizeof ( long  ) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06501"
 , "c1link" : "./qc/crypto/asn1/x_long.c.html#6501"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06501] The expression sign applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
