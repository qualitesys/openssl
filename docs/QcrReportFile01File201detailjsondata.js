console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/bn/bn_print.c.html" 
 , "texte" : "File crypto/bn/bn_print.c 65 rule violations " 
 , "fic2"  : "./qc/crypto/bn/bn_print.c.xml" 
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
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "42"
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
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "3"
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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00993"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00993] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01025"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#1025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01025] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01037"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#1037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01037] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "02297"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2297"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02297] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02460"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02460] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02487"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02487] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02489"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2489"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02489] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02491"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2491"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02491] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02513"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02513] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02513"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02513] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02537"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2537"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02537] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02539"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2539"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02539] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02543"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2543"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02543] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02568"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2568"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02568] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02570"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2570"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02570] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02572"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2572"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02572] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05363"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#5363"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05363] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06720"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6720"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06720] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "06722"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6722"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06722] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06725"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6725"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06725] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "06750"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6750"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06750] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06752"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6752"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06752] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06755"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6755"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06755] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06784"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6784"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06784] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06786"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6786"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06786] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06789"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6789"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06789] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06810"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6810"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06810] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06812"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6812"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06812] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06815"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6815"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06815] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06831"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6831"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06831] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06850"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6850"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06850] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06852"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6852"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06852] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06855"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6855"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06855] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06875"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6875"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06875] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06880"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6880"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06880] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06901"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6901"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06901] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06903"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6903"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06903] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06906"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6906"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06906] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06927"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6927"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06927] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06929"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6929"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06929] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06932"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6932"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06932] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06954"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6954"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06954] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06956"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6956"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06956] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06959"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06983"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6983"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06983] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06985"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6985"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06985] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06988"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6988"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06988] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07973"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#7973"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07973] The expression a applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07988"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#7988"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07988] The pointer b is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07991"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#7991"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07991] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08009"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8009"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08009] The expression '-' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08009"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8009"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08009] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08010"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8010"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08010] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "08011"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8011"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08011] The expression '0' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08011"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8011"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08011] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08012"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8012"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08012] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "08018"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8018"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08018] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08019"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8019"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08019] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "08034"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8034"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08034] The expression  ! init applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
