console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/rc2/rc2_skey.c.html" 
 , "texte" : "File crypto/rc2/rc2_skey.c 4 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "dummy" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00099"
 , "c5link" : "././qc/crypto/rc2/rc2_skey.c.html#99"
 , "c1" : " void "
 , "c2" : "RC2_set_key(RC2_KEY*;int;unsignedchar*;int)"
 , "c3" : "8"
 , "c4" : "29"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/crypto/rc2/rc2_skey.c.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-CPP000005"
 , "c3" : "Check pointer declaration to unsigned char"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/crypto/rc2/rc2_skey.c.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[00102] The pointer k is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/crypto/rc2/rc2_skey.c.html#102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[00102] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/crypto/rc2/rc2_skey.c.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[00103] The pointer ki is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/crypto/rc2/rc2_skey.c.html#135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00135] The expression i-- applies to a single value or variable, might be ambiguous."
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/crypto/rc2/rc2_skey.c.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
