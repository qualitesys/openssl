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
 , "c5" : "00370"
 , "c5link" : "././qc/crypto/bf/bf_cfb64.c.html#370"
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
 , "c1" : "00378"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[00378] The pointer iv is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00378"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#378"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[00378] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00381"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00381] The expression encrypt applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#382"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00382] The expression l-- applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00384] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00384] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00384] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00384] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00386] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00386] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00386] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00386] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00391] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00391] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00391] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00391] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00393] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00393] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00393] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00393] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00402"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#402"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00402] The expression l-- applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00404"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00404] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00404"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00404] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00404"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00404] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00404"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00404] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00406] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00406] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00406] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00406] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00411"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#411"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00411] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00411"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#411"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00411] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00411"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#411"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00411] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00411"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#411"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00411] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00413"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00413] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00413"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00413] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00413"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00413] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00413"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00413] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00423] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00423] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00423] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00423] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00423] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/crypto/bf/bf_cfb64.c.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00423] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/crypto/bf/bf_cfb64.c.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
