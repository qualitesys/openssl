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
   "c1" : "05357"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#5357"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05357] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06714"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6714"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06714] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "06716"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6716"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06716] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06719"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6719"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06719] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "06744"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6744"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06744] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06746"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6746"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06746] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06749"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6749"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06749] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06778"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6778"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06778] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06780"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6780"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06780] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06783"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6783"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06783] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06804"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6804"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06804] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06806"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6806"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06806] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06809"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6809"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06809] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06825"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6825"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06825] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06844"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6844"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06844] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06846"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6846"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06846] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06849"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6849"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06849] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06869"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6869"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06869] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06874"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6874"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06874] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06895"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6895"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06895] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06897"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6897"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06897] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06900"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6900"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06900] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06921"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6921"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06921] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06923"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6923"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06923] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06926"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6926"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06926] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06948"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6948"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06948] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06950"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6950"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06950] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06953"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6953"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06953] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06977"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6977"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06977] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06979"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6979"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06979] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06982"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6982"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06982] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07964"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#7964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07964] The expression a applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07979"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#7979"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07979] The pointer b is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07982"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#7982"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07982] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08000"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8000"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08000] The expression '-' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08000"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8000"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08000] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08001"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8001"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08001] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "08002"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8002"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08002] The expression '0' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08002"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8002"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08002] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08003"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8003"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08003] goto statement jump to end"
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
   "c1" : "08025"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08025] The expression  ! init applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
