console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/rc4/rc4_skey.c.html" 
 , "texte" : "File crypto/rc4/rc4_skey.c 7 rule violations " 
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
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03630"
 , "c1link" : "./qc/crypto/rc4/rc4_skey.c.html#3630"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03630] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "05423"
 , "c1link" : "./qc/crypto/rc4/rc4_skey.c.html#5423"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[05423] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "05425"
 , "c1link" : "./qc/crypto/rc4/rc4_skey.c.html#5425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[05425] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07597"
 , "c1link" : "./qc/crypto/rc4/rc4_skey.c.html#7597"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07597] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07625"
 , "c1link" : "./qc/crypto/rc4/rc4_skey.c.html#7625"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07625] The expression  sizeof ( unsigned  int  )==1 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07625"
 , "c1link" : "./qc/crypto/rc4/rc4_skey.c.html#7625"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07625] The expression  sizeof ( unsigned  int  )==1 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "07641"
 , "c1link" : "./qc/crypto/rc4/rc4_skey.c.html#7641"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07641] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
};
console.log('leListeStr 99 main end');
