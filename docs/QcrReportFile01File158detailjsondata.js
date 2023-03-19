console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/bf/bf_ofb64.c.html" 
 , "texte" : "File crypto/bf/bf_ofb64.c 41 rule violations " 
 , "fic2"  : "./qc/crypto/bf/bf_ofb64.c.xml" 
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
 , "c5" : "00368"
 , "c5link" : "././qc/crypto/bf/bf_ofb64.c.html#368"
 , "c1" : " void "
 , "c2" : "BF_ofb64_encrypt(unsignedchar*;unsignedchar*;long;BF_KEY*;unsignedchar*;int*)"
 , "c3" : "4"
 , "c4" : "32"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/crypto/bf/bf_ofb64.c.png" 

 , "ligneplantuml" : "./qc/crypto/bf/bf_ofb64.c.svg" }

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
"data11" : [
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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "36"
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
 , "c1" : "00376"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[00376] The pointer dp is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00378"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[00378] The pointer iv is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00378"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#378"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[00378] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00382] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00382] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00382] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00382] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00383] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00383] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00383] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00383] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00387"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00387] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00387"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00387] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00387"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00387] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00387"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00387] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00388"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00388] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00388"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00388] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00388"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00388] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00388"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00388] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00389"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00389] The expression l-- applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00394] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00394] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00394] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00394] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00396"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00396] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00396"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00396] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00396"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00396] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00396"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00396] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00402"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#402"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00402] The expression save applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00406] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00406] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00406] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00406] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00407] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00407] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00407] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00407] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00409"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#409"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00409] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00409"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#409"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00409] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00409"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#409"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00409] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00409"
 , "c1link" : "./qc/crypto/bf/bf_ofb64.c.html#409"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00409] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/crypto/bf/bf_ofb64.c.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
