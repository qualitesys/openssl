console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/x509/x509_txt.c.html" 
 , "texte" : "File crypto/x509/x509_txt.c 53 rule violations " 
 , "fic2"  : "./qc/crypto/x509/x509_txt.c.xml" 
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
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00993"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00993] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01025"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#1025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01025] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01037"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#1037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01037] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "02362"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#2362"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02362] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02525"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#2525"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02525] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02552"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#2552"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02552] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02554"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#2554"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02554] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02556"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#2556"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02556] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02578"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#2578"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02578] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02578"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#2578"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02578] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02602"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#2602"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02602] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02604"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#2604"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02604] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02608"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#2608"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02608] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02633"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#2633"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02633] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02635"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#2635"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02635] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02637"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#2637"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02637] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02982"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#2982"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02982] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05943"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#5943"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05943] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05945"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#5945"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05945] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05948"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#5948"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05948] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05973"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#5973"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05973] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05975"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#5975"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05975] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05978"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#5978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05978] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06007"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6007"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06007] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06009"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6009"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06009] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06012"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6012"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06012] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06033"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6033"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06033] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06035"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6035"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06035] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06038"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06038] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06054"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6054"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06054] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06073"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6073"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06073] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06075"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6075"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06075] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06078"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6078"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06078] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06098"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6098"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06098] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06103"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06103] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06124"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06124] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06126"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06126] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06129"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06129] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06150"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6150"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06150] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06152"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06152] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06155"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06155] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06177"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06177] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06179"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6179"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06179] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06182"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6182"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06182] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06206"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6206"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06206] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06208"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6208"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06208] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06211"
 , "c1link" : "./qc/crypto/x509/x509_txt.c.html#6211"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06211] The expression 2&gt;1 is invariable"
}} 
]
};
console.log('leListeStr 99 main end');
