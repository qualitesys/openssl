console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/evp/bio_ok.c.html" 
 , "texte" : "File crypto/evp/bio_ok.c 120 rule violations " 
 , "fic2"  : "./qc/crypto/evp/bio_ok.c.xml" 
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
 , "c4" : "32"
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
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "25"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00993"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00993] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01025"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#1025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01025] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01037"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#1037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01037] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "02115"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#2115"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02115] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02278"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#2278"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02278] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02305"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#2305"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02305] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02307"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#2307"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02307] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02309"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#2309"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02309] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02331"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#2331"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02331] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02331"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#2331"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02331] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02355"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#2355"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02355] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02357"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#2357"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02357] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02361"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#2361"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02361] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02386"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#2386"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02386] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02388"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#2388"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02388] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02390"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#2390"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02390] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02757"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#2757"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02757] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05946"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#5946"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05946] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05948"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#5948"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05948] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05951"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#5951"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05951] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05976"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#5976"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05976] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05978"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#5978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05978] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05981"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#5981"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05981] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06010"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6010"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06010] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06012"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6012"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06012] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06015"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6015"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06015] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06036"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6036"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06036] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06038"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06038] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06041"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6041"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06041] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06057"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6057"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06057] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06076"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6076"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06076] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06078"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6078"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06078] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06081"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6081"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06081] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06101"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06101] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06106"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06106] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06127"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06127] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06129"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06129] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06132"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6132"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06132] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06153"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6153"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06153] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06155"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06155] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06158"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06158] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06180"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6180"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06180] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06182"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6182"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06182] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06185"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6185"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06185] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06209"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6209"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06209] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06211"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6211"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06211] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06214"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#6214"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06214] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "11135"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11135"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11135] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11137"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11137"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[11137] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "11169"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11169"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11169] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11195"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11195"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11195] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11196"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11196"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11196] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11222"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11222"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11222] The expression ctx-&gt;blockout applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11265"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11265"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11265] The expression  ! sig_in(b) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11273"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11273"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11273] The expression  ! block_in(b) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11293"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11293"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11293] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11294"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11294"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11294] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11324"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11324"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11324] The expression  ! BIO_test_flags(b,0x08) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11324"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11324"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[11324] The expression 0x08 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "11355"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11355"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11355] The expression  ! block_out(b) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11369"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11369"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11369] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11370"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11370"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11370] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11371"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11371"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11371] The pointer ppmd is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11374"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11374"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11374] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11406"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11406"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11406] The expression  ! block_out(b) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11409"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11409"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11409] The expression ctx-&gt;blockout applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11422"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11422"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[11422] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "11438"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11438"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11438] The expression  ! EVP_DigestInit_ex(ctx-&gt;md,md,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11447"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11447"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11447] The expression BIO_get_init(b) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11462"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11462"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11462] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11480"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11480"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11480] The expression (ossl_is_little_endian) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11493"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11493"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11493] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11494"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11494"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11494] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11495"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11495"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11495] The pointer digest is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11497"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11497"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11497] The pointer md_data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11508"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11508"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11508] The expression  ! EVP_DigestInit_ex(md,digest,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11513"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11513"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11513] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11519"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11519"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11519] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11524"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11524"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11524] The expression  ! EVP_DigestUpdate(md,'The quick brown fox jumped over the lazy dog's back.',strlen('The quick brown fox jumped over the lazy dog's back.')) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11524"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11524"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[11524] The expression 'The quick brown fox jumped over the lazy dog's back.' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "11524"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11524"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[11524] The expression 'The quick brown fox jumped over the lazy dog's back.' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "11525"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11525"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11525] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11526"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11526"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11526] The expression  ! EVP_DigestFinal_ex(md, &amp; (ctx-&gt;buf[ctx-&gt;buf_len]),(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11531"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11531"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11531] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11543"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11543"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11543] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11544"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11544"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11544] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11547"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11547"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11547] The pointer digest is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11549"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11549"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11549] The pointer md_data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11552"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11552"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[11552] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "11557"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11557"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11557] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11559"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11559"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[11559] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "11560"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11560"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11560] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11566"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11566"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11566] The expression  ! EVP_DigestInit_ex(md,digest,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11571"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11571"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11571] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11576"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11576"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11576] The expression  ! EVP_DigestUpdate(md,'The quick brown fox jumped over the lazy dog's back.',strlen('The quick brown fox jumped over the lazy dog's back.')) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11576"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11576"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[11576] The expression 'The quick brown fox jumped over the lazy dog's back.' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "11576"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11576"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[11576] The expression 'The quick brown fox jumped over the lazy dog's back.' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "11577"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11577"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11577] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11578"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11578"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11578] The expression  ! EVP_DigestFinal_ex(md,tmp,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11583"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11583"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11583] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11605"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11605"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11605] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11606"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11606"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11606] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11608"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11608"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11608] The pointer digest is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11621"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11621"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11621] The expression  ! EVP_DigestUpdate(md,( unsigned  char  *) &amp; (ctx-&gt;buf[4]),tl) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11623"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11623"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11623] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11624"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11624"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11624] The expression  ! EVP_DigestFinal_ex(md, &amp; (ctx-&gt;buf[ctx-&gt;buf_len]),(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11629"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11629"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11629] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11640"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11640"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11640] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11641"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11641"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11641] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11650"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11650"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11650] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11668"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11668"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11668] The expression  ! EVP_DigestUpdate(md,( unsigned  char  *) &amp; (ctx-&gt;buf[4]),tl) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11670"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11670"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11670] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11671"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11671"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11671] The expression  ! EVP_DigestFinal_ex(md,tmp,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11676"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11676"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11676] goto statement jump to berr"
}} 
]
};
console.log('leListeStr 99 main end');
