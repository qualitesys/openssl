console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/ssl/record/tls_pad.c.html" 
 , "texte" : "File ssl/record/tls_pad.c 6 rule violations " 
 , "fic2"  : "./qc/ssl/record/tls_pad.c.xml" 
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
 , "c4" : "4"
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
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "08316"
 , "c1link" : "./qc/ssl/record/tls_pad.c.html#8316"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[08316] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "08317"
 , "c1link" : "./qc/ssl/record/tls_pad.c.html#8317"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[08317] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10335"
 , "c1link" : "./qc/ssl/record/tls_pad.c.html#10335"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10335] The expression aead applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10387"
 , "c1link" : "./qc/ssl/record/tls_pad.c.html#10387"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10387] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10392"
 , "c1link" : "./qc/ssl/record/tls_pad.c.html#10392"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10392] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10453"
 , "c1link" : "./qc/ssl/record/tls_pad.c.html#10453"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10453] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
};
console.log('leListeStr 99 main end');
