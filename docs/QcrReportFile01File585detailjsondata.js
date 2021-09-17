console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/poly1305/poly1305.c.html" 
 , "texte" : "File crypto/poly1305/poly1305.c 67 rule violations " 
 , "fic2"  : "./qc/crypto/poly1305/poly1305.c.xml" 
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
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "16"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "38"
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
   "c1" : "01183"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1183"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01183] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "01346"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1346"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01346] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01373"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1373"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01373] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01375"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1375"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01375] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01377"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01377] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01377"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01377] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01399"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1399"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01399] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01399"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1399"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01399] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01399"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1399"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01399] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01423"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1423"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01423] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01425"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01425] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01429"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01429] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01429"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01429] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "01454"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1454"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01454] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01456"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01456] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01458"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1458"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01458] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01458"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1458"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01458] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01825"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1825"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01825] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01826"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#1826"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01826] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03064"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#3064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03064] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03069"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#3069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03069] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03069"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#3069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03069] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03094"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#3094"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03094] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03101"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#3101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03101] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03101"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#3101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03101] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "03126"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#3126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03126] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03134"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#3134"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03134] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03134"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#3134"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03134] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "04698"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4698"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04698] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04698"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4698"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04698] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04699"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4699"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04699] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04699"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4699"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04699] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04700"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4700"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04700] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04700"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4700"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04700] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04701"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4701"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04701] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04701"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4701"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04701] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04729"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4729"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04729] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04729"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4729"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04729] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04730"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4730"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04730] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04730"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4730"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04730] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04731"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4731"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04731] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04731"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4731"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04731] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04737"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4737"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04737] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04737"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4737"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04737] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04738"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4738"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04738] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04738"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4738"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04738] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04739"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4739"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04739] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04739"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4739"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04739] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04769"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4769"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04769] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04769"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4769"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04769] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04770"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4770"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04770] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04770"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4770"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04770] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04771"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4771"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04771] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04771"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4771"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04771] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04772"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4772"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04772] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04772"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4772"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04772] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04788"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4788"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04788] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04788"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4788"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04788] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04789"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4789"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04789] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04789"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4789"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04789] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04790"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4790"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04790] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04790"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4790"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04790] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04791"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4791"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04791] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04791"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4791"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04791] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04818"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4818"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04818] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "04841"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4841"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[04841] The expression rem applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "04855"
 , "c1link" : "./qc/crypto/poly1305/poly1305.c.html#4855"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[04855] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
};
console.log('leListeStr 99 main end');
