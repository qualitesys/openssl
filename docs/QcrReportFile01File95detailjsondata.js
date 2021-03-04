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
   "c1" : "08279"
 , "c1link" : "./qc/ssl/record/tls_pad.c.html#8279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[08279] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "08280"
 , "c1link" : "./qc/ssl/record/tls_pad.c.html#8280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[08280] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10298"
 , "c1link" : "./qc/ssl/record/tls_pad.c.html#10298"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10298] The expression aead applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10350"
 , "c1link" : "./qc/ssl/record/tls_pad.c.html#10350"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10350] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10355"
 , "c1link" : "./qc/ssl/record/tls_pad.c.html#10355"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10355] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10416"
 , "c1link" : "./qc/ssl/record/tls_pad.c.html#10416"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10416] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
};
console.log('leListeStr 99 main end');
