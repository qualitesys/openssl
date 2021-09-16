console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/core_fetch.c.html" 
 , "texte" : "File crypto/core_fetch.c 33 rule violations " 
 , "fic2"  : "./qc/crypto/core_fetch.c.xml" 
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
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "3"
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
   "c1" : "01759"
 , "c1link" : "./qc/crypto/core_fetch.c.html#1759"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01759] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "01922"
 , "c1link" : "./qc/crypto/core_fetch.c.html#1922"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01922] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01925"
 , "c1link" : "./qc/crypto/core_fetch.c.html#1925"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01925] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01949"
 , "c1link" : "./qc/crypto/core_fetch.c.html#1949"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01949] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01953"
 , "c1link" : "./qc/crypto/core_fetch.c.html#1953"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01953] The expression __buflen&gt;__builtin_object_size(__buf,2&gt;1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01953"
 , "c1link" : "./qc/crypto/core_fetch.c.html#1953"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01953] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01975"
 , "c1link" : "./qc/crypto/core_fetch.c.html#1975"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01975] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01975"
 , "c1link" : "./qc/crypto/core_fetch.c.html#1975"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01975] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01999"
 , "c1link" : "./qc/crypto/core_fetch.c.html#1999"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01999] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02005"
 , "c1link" : "./qc/crypto/core_fetch.c.html#2005"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02005] The expression __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  ) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02005"
 , "c1link" : "./qc/crypto/core_fetch.c.html#2005"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02005] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02030"
 , "c1link" : "./qc/crypto/core_fetch.c.html#2030"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02030] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02034"
 , "c1link" : "./qc/crypto/core_fetch.c.html#2034"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02034] The expression __len&gt;__builtin_object_size(__dst,2&gt;1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02034"
 , "c1link" : "./qc/crypto/core_fetch.c.html#2034"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02034] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02402"
 , "c1link" : "./qc/crypto/core_fetch.c.html#2402"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02402] The expression ( ! __builtin_constant_p(__n)||__n&gt;__builtin_object_size(__dest,2&gt;1)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02401"
 , "c1link" : "./qc/crypto/core_fetch.c.html#2401"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02401] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03446"
 , "c1link" : "./qc/crypto/core_fetch.c.html#3446"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03446] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03451"
 , "c1link" : "./qc/crypto/core_fetch.c.html#3451"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03451] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03476"
 , "c1link" : "./qc/crypto/core_fetch.c.html#3476"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03476] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03480"
 , "c1link" : "./qc/crypto/core_fetch.c.html#3480"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03480] The expression __size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03480"
 , "c1link" : "./qc/crypto/core_fetch.c.html#3480"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03480] The expression __n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03483"
 , "c1link" : "./qc/crypto/core_fetch.c.html#3483"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03483] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03508"
 , "c1link" : "./qc/crypto/core_fetch.c.html#3508"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03508] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03512"
 , "c1link" : "./qc/crypto/core_fetch.c.html#3512"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03512] The expression __size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03512"
 , "c1link" : "./qc/crypto/core_fetch.c.html#3512"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03512] The expression __n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03516"
 , "c1link" : "./qc/crypto/core_fetch.c.html#3516"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03516] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03524"
 , "c1link" : "./qc/crypto/core_fetch.c.html#3524"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03524] The expression __size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03524"
 , "c1link" : "./qc/crypto/core_fetch.c.html#3524"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03524] The expression __n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07051"
 , "c1link" : "./qc/crypto/core_fetch.c.html#7051"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07051] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "07059"
 , "c1link" : "./qc/crypto/core_fetch.c.html#7059"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07059] The expression data-&gt;force_store applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07059"
 , "c1link" : "./qc/crypto/core_fetch.c.html#7059"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07059] The expression  ! no_store applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07074"
 , "c1link" : "./qc/crypto/core_fetch.c.html#7074"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07074] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "07099"
 , "c1link" : "./qc/crypto/core_fetch.c.html#7099"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07099] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
};
console.log('leListeStr 99 main end');
