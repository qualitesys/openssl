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
   "c1" : "11143"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11143"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11143] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11145"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11145"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[11145] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "11177"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11177"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11177] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11203"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11203"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11203] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11204"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11204"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11204] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11230"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11230"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11230] The expression ctx-&gt;blockout applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11273"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11273"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11273] The expression  ! sig_in(b) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11281"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11281"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11281] The expression  ! block_in(b) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11301"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11301"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11301] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11302"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11302"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11302] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11332"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11332"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11332] The expression  ! BIO_test_flags(b,0x08) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11332"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11332"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[11332] The expression 0x08 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "11363"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11363"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11363] The expression  ! block_out(b) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11377"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11377"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11377] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11378"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11378"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11378] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11379"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11379"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11379] The pointer ppmd is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11382"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11382"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11382] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11414"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11414"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11414] The expression  ! block_out(b) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11417"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11417"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11417] The expression ctx-&gt;blockout applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11430"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11430"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[11430] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "11446"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11446"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11446] The expression  ! EVP_DigestInit_ex(ctx-&gt;md,md,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11455"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11455"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11455] The expression BIO_get_init(b) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11470"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11470"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11470] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11488"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11488"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11488] The expression (ossl_is_little_endian) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11501"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11501"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11501] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11502"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11502"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11502] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11503"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11503"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11503] The pointer digest is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11505"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11505"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11505] The pointer md_data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11516"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11516"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11516] The expression  ! EVP_DigestInit_ex(md,digest,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11521"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11521"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11521] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11527"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11527"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11527] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11532"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11532"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11532] The expression  ! EVP_DigestUpdate(md,'The quick brown fox jumped over the lazy dog's back.',strlen('The quick brown fox jumped over the lazy dog's back.')) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11532"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11532"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[11532] The expression 'The quick brown fox jumped over the lazy dog's back.' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "11532"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11532"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[11532] The expression 'The quick brown fox jumped over the lazy dog's back.' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "11533"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11533"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11533] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11534"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11534"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11534] The expression  ! EVP_DigestFinal_ex(md, &amp; (ctx-&gt;buf[ctx-&gt;buf_len]),(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11539"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11539"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11539] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11551"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11551"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11551] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11552"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11552"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11552] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11555"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11555"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11555] The pointer digest is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11557"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11557"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11557] The pointer md_data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11560"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11560"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[11560] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "11565"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11565"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11565] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11567"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11567"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[11567] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "11568"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11568"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11568] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11574"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11574"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11574] The expression  ! EVP_DigestInit_ex(md,digest,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11579"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11579"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11579] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11584"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11584"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11584] The expression  ! EVP_DigestUpdate(md,'The quick brown fox jumped over the lazy dog's back.',strlen('The quick brown fox jumped over the lazy dog's back.')) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11584"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11584"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[11584] The expression 'The quick brown fox jumped over the lazy dog's back.' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "11584"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11584"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[11584] The expression 'The quick brown fox jumped over the lazy dog's back.' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "11585"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11585"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11585] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11586"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11586"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11586] The expression  ! EVP_DigestFinal_ex(md,tmp,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11591"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11591"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11591] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11613"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11613"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11613] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11614"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11614"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11614] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11616"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11616"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11616] The pointer digest is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11629"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11629"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11629] The expression  ! EVP_DigestUpdate(md,( unsigned  char  *) &amp; (ctx-&gt;buf[4]),tl) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11631"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11631"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11631] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11632"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11632"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11632] The expression  ! EVP_DigestFinal_ex(md, &amp; (ctx-&gt;buf[ctx-&gt;buf_len]),(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11637"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11637"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11637] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11648"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11648"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11648] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11649"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11649"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[11649] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "11658"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11658"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11658] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11676"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11676"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11676] The expression  ! EVP_DigestUpdate(md,( unsigned  char  *) &amp; (ctx-&gt;buf[4]),tl) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11678"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11678"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11678] goto statement jump to berr"
}} 
,
{ "ligne" : {
   "c1" : "11679"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11679"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11679] The expression  ! EVP_DigestFinal_ex(md,tmp,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11684"
 , "c1link" : "./qc/crypto/evp/bio_ok.c.html#11684"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11684] goto statement jump to berr"
}} 
]
};
console.log('leListeStr 99 main end');
