console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/bn/bn_intern.c.html" 
 , "texte" : "File crypto/bn/bn_intern.c 39 rule violations " 
 , "fic2"  : "./qc/crypto/bn/bn_intern.c.xml" 
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
 , "c4" : "13"
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
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
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
   "c1" : "01187"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#1187"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01187] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "01350"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#1350"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01350] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01377"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#1377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01377] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01381"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#1381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01381] The expression __buflen&gt;__builtin_object_size(__buf,2&gt;1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01381"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#1381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01381] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01403"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#1403"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01403] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01403"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#1403"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01403] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01427"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#1427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01427] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01433"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#1433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01433] The expression __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  ) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01433"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#1433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01433] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01458"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#1458"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01458] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01462"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#1462"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01462] The expression __len&gt;__builtin_object_size(__dst,2&gt;1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01462"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#1462"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01462] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01830"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#1830"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01830] The expression ( ! __builtin_constant_p(__n)||__n&gt;__builtin_object_size(__dest,2&gt;1)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01829"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#1829"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01829] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03069"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#3069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03069] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03074"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#3074"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03074] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03099"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#3099"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03099] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03103"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#3103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03103] The expression __size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03103"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#3103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03103] The expression __n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03103"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#3103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03103] The expression size_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03106"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#3106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03106] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03131"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#3131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03131] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03135"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#3135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03135] The expression __size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03135"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#3135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03135] The expression __n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03135"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#3135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03135] The expression size_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03139"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#3139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03139] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03147"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#3147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03147] The expression __size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03147"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#3147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03147] The expression __n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03147"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#3147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03147] The expression size_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06363"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#6363"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[06363] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "06377"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#6377"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[06377] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "06397"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#6397"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[06397] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "06416"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#6416"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[06416] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "06455"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#6455"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[06455] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "06471"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#6471"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[06471] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "06486"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#6486"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[06486] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "06496"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#6496"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[06496] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "06555"
 , "c1link" : "./qc/crypto/bn/bn_intern.c.html#6555"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[06555] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
};
console.log('leListeStr 99 main end');
