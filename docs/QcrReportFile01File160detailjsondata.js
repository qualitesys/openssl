console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/bio/bio_dump.c.html" 
 , "texte" : "File crypto/bio/bio_dump.c 4 rule violations " 
 , "fic2"  : "./qc/crypto/bio/bio_dump.c.xml" 
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
 , "c4" : "2"
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
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "02324"
 , "c1link" : "./qc/crypto/bio/bio_dump.c.html#2324"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02324] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10500"
 , "c1link" : "./qc/crypto/bio/bio_dump.c.html#10500"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10500] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10601"
 , "c1link" : "./qc/crypto/bio/bio_dump.c.html#10601"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10601] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10614"
 , "c1link" : "./qc/crypto/bio/bio_dump.c.html#10614"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10614] The expression  ! j applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
