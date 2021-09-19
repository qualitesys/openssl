console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/dh/dh_group_params.c.html" 
 , "texte" : "File crypto/dh/dh_group_params.c 57 rule violations " 
 , "fic2"  : "./qc/crypto/dh/dh_group_params.c.xml" 
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
 , "c4" : "37"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00986"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#986"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00986] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00991"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#991"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00991] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01016"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#1016"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01016] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01020"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#1020"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01020] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01023"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#1023"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01023] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01048"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#1048"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01048] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01052"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#1052"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01052] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01056"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#1056"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01056] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01064"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#1064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01064] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "02107"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#2107"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02107] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02270"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#2270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02270] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02297"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#2297"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02297] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02299"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#2299"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02299] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02301"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#2301"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02301] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02323"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#2323"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02323] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02323"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#2323"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02323] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02347"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#2347"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02347] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02349"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#2349"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02349] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02353"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#2353"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02353] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02378"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#2378"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02378] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02380"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#2380"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02380] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02382"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#2382"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02382] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02749"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#2749"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02749] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10424"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10424"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10424] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "10426"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10426"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10426] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10429"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10429] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "10454"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10454"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10454] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10456"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10456] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10459"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10459"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10459] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10488"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10488"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10488] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10490"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10490"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10490] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10493"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10493"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10493] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10514"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10514"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10514] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10516"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10516"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10516] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10519"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10519"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10519] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10535"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10535"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10535] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10554"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10554"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10554] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10556"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10556"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10556] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10559"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10559"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10559] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10579"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10579"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10579] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10584"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10584"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10584] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10605"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10605"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10605] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10607"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10607"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10607] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10610"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10610"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10610] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10631"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10631"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10631] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10633"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10633"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10633] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10636"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10636"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10636] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10658"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10658"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10658] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10660"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10660"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10660] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10663"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10663"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10663] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10687"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10687"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10687] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10689"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10689"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10689] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10692"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10692"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10692] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10740"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10740"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10740] The pointer group is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10742"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10742"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10742] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "10772"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10772"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10772] The pointer group is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10796"
 , "c1link" : "./qc/crypto/dh/dh_group_params.c.html#10796"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10796] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
};
console.log('leListeStr 99 main end');
