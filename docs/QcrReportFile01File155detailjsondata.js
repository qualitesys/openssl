console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/bf/bf_cfb64.c.html" 
 , "texte" : "File crypto/bf/bf_cfb64.c 43 rule violations " 
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
 , "c5" : "00369"
 , "c5link" : "././qc/crypto/bf/bf_cfb64.c.html#369"
 , "c1" : " void "
 , "c2" : "BF_cfb64_encrypt(unsignedchar*;unsignedchar*;long;BF_KEY*;unsignedchar*;int*;int)"
 , "c3" : "7"
 , "c4" : "39"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/crypto/bf/bf_cfb64.c.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "38"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[00377] The pointer iv is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[00377] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00380"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#380"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00380] The expression encrypt applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00381"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00381] The expression l-- applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00383] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00383] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00383] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00383] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00385"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00385] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00385"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00385] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00385"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00385] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00385"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00385] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00390] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00390] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00390] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00390] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00392"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00392] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00392"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00392] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00392"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00392] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00392"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00392] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00401"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#401"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00401] The expression l-- applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00403] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00403] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00403] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00403] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00405"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00405] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00405"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00405] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00405"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00405] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00405"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00405] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00410] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00410] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00410] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00410] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00412"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00412] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00412"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00412] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00412"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00412] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00412"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00412] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00422"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#422"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00422] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00422"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#422"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00422] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00422"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#422"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00422] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00422"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#422"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00422] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00422"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#422"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00422] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00422"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#422"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00422] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/crypto/bf/bf_cfb64.c.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
