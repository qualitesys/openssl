console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/x509/x_req.c.html" 
 , "texte" : "File crypto/x509/x_req.c 2 rule violations " 
 , "fic2"  : "./qc/crypto/x509/x_req.c.xml" 
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
   "c1" : "CRITICAL"
 , "c2" : "QC-CPPCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "1"
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
 , "c1link" : "./qc/crypto/x509/x_req.c.html#2080"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02080] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13828"
 , "c1link" : "./qc/crypto/x509/x_req.c.html#13828"
 , "c2" : "CRITICAL"
 , "c3" : "QC-CPPCWE484[13828] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
]
};
console.log('leListeStr 99 main end');
