console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/idea/i_ofb64.c.html" 
 , "texte" : "File crypto/idea/i_ofb64.c 41 rule violations " 
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
 , "c5" : "00081"
 , "c5link" : "././qc/crypto/idea/i_ofb64.c.html#81"
 , "c1" : " void "
 , "c2" : "IDEA_ofb64_encrypt(unsignedchar*;unsignedchar*;long;IDEA_KEY_SCHEDULE*;unsignedchar*;int*)"
 , "c3" : "5"
 , "c4" : "34"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/crypto/idea/i_ofb64.c.svg" }

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
 , "c1" : "00089"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[00089] The pointer dp is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[00091] The pointer iv is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#91"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[00091] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00100] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00100] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00100] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00100] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00101] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00101] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00101] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00101] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00105] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00105] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00105] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00105] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00106] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00106] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00106] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00106] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00107] The expression l-- applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00112] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00112] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00112] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00112] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00114] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00114] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00114] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00114] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00120] The expression save applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00124] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00124] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00124] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00124] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00125] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00125] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00125] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00125] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00127] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00127] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00127] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/crypto/idea/i_ofb64.c.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00127] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/crypto/idea/i_ofb64.c.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
