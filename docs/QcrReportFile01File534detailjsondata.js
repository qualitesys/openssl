console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/idea/i_cfb64.c.html" 
 , "texte" : "File crypto/idea/i_cfb64.c 43 rule violations " 
 , "fic2"  : "./qc/crypto/idea/i_cfb64.c.xml" 
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
 , "c5" : "00082"
 , "c5link" : "././qc/crypto/idea/i_cfb64.c.html#82"
 , "c1" : " void "
 , "c2" : "IDEA_cfb64_encrypt(unsignedchar*;unsignedchar*;long;IDEA_KEY_SCHEDULE*;unsignedchar*;int*;int)"
 , "c3" : "8"
 , "c4" : "41"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/crypto/idea/i_cfb64.c.png" 

 , "ligneplantuml" : "./qc/crypto/idea/i_cfb64.c.svg" }

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
 , "c1" : "00090"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[00090] The pointer iv is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#90"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[00090] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#98"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00098] The expression encrypt applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#99"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00099] The expression l-- applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00101] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00101] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00101] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00101] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00103] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00103] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00103] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00103] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00108] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00108] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00108] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00108] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00110] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00110] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00110] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00110] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#119"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[00119] The expression l-- applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00121] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00121] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00121] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00121] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00123] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00123] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00123] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00123] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00128] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00128] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00128] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00128] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00130] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00130] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00130] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00130] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00140] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00140] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00140] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00140] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00140] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/crypto/idea/i_cfb64.c.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[00140] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/crypto/idea/i_cfb64.c.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
