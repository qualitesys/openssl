console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/siphash/siphash.c.html" 
 , "texte" : "File crypto/siphash/siphash.c 48 rule violations " 
 , "fic2"  : "./qc/crypto/siphash/siphash.c.xml" 
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
 , "c2" : "QC-CPP000006"
 , "c3" : "Risk of infinite while loop"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "21"
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
   "c1" : "CRITICAL"
 , "c2" : "QC-CPPCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "01183"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1183"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01183] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "01346"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1346"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01346] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01373"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1373"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01373] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01375"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1375"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01375] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01377"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01377] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01377"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01377] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01399"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1399"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01399] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01399"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1399"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01399] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01399"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1399"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01399] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01423"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1423"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01423] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01425"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01425] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01429"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01429] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01429"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01429] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "01454"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1454"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01454] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01456"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01456] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01458"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1458"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01458] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01458"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1458"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01458] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01825"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1825"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01825] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01826"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#1826"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01826] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03064"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#3064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03064] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03069"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#3069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03069] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03069"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#3069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03069] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03094"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#3094"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03094] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03101"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#3101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03101] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03101"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#3101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03101] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "03126"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#3126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03126] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03134"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#3134"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03134] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03134"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#3134"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03134] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "04692"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4692"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[04692] The pointer end is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "04702"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4702"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[04702] The expression ctx-&gt;len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "04722"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4722"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[04722] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "04722"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4722"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[04722] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "04732"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4732"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[04732] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "04732"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4732"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[04732] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "04737"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4737"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[04737] The expression left applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "04761"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4761"
 , "c2" : "CRITICAL"
 , "c3" : "QC-CPPCWE484[04761] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "04764"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4764"
 , "c2" : "CRITICAL"
 , "c3" : "QC-CPPCWE484[04764] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "04767"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4767"
 , "c2" : "CRITICAL"
 , "c3" : "QC-CPPCWE484[04767] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "04770"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4770"
 , "c2" : "CRITICAL"
 , "c3" : "QC-CPPCWE484[04770] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "04773"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4773"
 , "c2" : "CRITICAL"
 , "c3" : "QC-CPPCWE484[04773] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "04776"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4776"
 , "c2" : "CRITICAL"
 , "c3" : "QC-CPPCWE484[04776] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "04779"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4779"
 , "c2" : "CRITICAL"
 , "c3" : "QC-CPPCWE484[04779] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "04787"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4787"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[04787] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "04787"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4787"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[04787] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "04794"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4794"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[04794] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "04794"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4794"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[04794] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "04801"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4801"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[04801] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "04801"
 , "c1link" : "./qc/crypto/siphash/siphash.c.html#4801"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[04801] The expression 0 is invariable, always false"
}} 
]
};
console.log('leListeStr 99 main end');
