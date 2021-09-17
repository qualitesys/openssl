console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/ec/ec2_oct.c.html" 
 , "texte" : "File crypto/ec/ec2_oct.c 94 rule violations " 
 , "fic2"  : "./qc/crypto/ec/ec2_oct.c.xml" 
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
 , "c4" : "26"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "15"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "30"
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
 , "c4" : "11"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "01182"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#1182"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01182] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01187"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#1187"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01187] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01187"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#1187"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01187] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01212"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#1212"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01212] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01219"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#1219"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01219] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01219"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#1219"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01219] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "01244"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#1244"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01244] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01252"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#1252"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01252] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01252"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#1252"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01252] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "02293"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#2293"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02293] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02456"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#2456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02456] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02483"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#2483"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02483] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02485"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#2485"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02485] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02487"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#2487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02487] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02487"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#2487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02487] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02509"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#2509"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02509] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02509"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#2509"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02509] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02509"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#2509"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02509] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02533"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#2533"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02533] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02535"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#2535"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02535] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02539"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#2539"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02539] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02539"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#2539"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02539] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "02564"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#2564"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02564] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02566"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#2566"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02566] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02568"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#2568"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02568] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02568"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#2568"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02568] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "09716"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9716"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09716] The pointer tmp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09716"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9716"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09716] The pointer x is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09716"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9716"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09716] The pointer y is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09716"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9716"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09716] The pointer z is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09730"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9730"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09730] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09752"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9752"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09752] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09754"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9754"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09754] The expression  ! BN_GF2m_mod_arr(x,x_,group-&gt;poly) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09755"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9755"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09755] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09756"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9756"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09756] The expression BN_is_zero(x) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09757"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9757"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09757] The expression  ! BN_GF2m_mod_sqrt_arr(y,group-&gt;b,group-&gt;poly,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09758"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9758"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09758] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09760"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9760"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09760] The expression  ! group-&gt;meth-&gt;field_sqr(group,tmp,x,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09761"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9761"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09761] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09762"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9762"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09762] The expression  ! group-&gt;meth-&gt;field_div(group,tmp,group-&gt;b,tmp,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09763"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9763"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09763] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09764"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9764"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09764] The expression  ! BN_GF2m_add(tmp,group-&gt;a,tmp) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09765"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9765"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09765] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09766"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9766"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09766] The expression  ! BN_GF2m_add(tmp,x,tmp) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09767"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9767"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09767] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09769"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9769"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09769] The expression  ! BN_GF2m_mod_solve_quad_arr(z,tmp,group-&gt;poly,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09791"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9791"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09791] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09795"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9795"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09795] The expression  ! group-&gt;meth-&gt;field_mul(group,y,x,z,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09796"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9796"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09796] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09798"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9798"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09798] The expression  ! BN_GF2m_add(y,y,x) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09799"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9799"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09799] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09803"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9803"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09803] The expression  ! EC_POINT_set_affine_coordinates(group,point,x,y,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09804"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9804"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09804] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09828"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9828"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09828] The pointer x is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09828"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9828"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09828] The pointer y is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09828"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9828"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09828] The pointer yxi is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09846"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9846"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09846] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09849"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9849"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09849] The expression EC_POINT_is_at_infinity(group,point) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09887"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9887"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09887] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09896"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9896"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09896] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09916"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9916"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09916] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09918"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9918"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09918] The expression  ! EC_POINT_get_affine_coordinates(group,point,x,y,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09919"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9919"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09919] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09923"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9923"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09923] The expression  ! group-&gt;meth-&gt;field_div(group,yxi,y,x,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09924"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9924"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09924] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09925"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9925"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09925] The expression BN_is_odd(yxi) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09938"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9938"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09938] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09952"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9952"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09952] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09964"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9964"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09964] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09980"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9980"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09980] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09984"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9984"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09984] The expression used_ctx applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09992"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#9992"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09992] The expression used_ctx applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10010"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10010"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10010] The pointer x is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10010"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10010"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10010] The pointer y is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10010"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10010"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10010] The pointer yxi is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10087"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10087"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10087] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "10106"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10106"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10106] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10108"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10108"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10108] The expression  ! BN_bin2bn(buf+1,field_len,x) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10109"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10109"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10109] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10110"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[10110] Suspicious mix of Bitwise and Literal expressions in BN_num_bits(x)&gt;m"
}} 
,
{ "ligne" : {
   "c1" : "10116"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10116"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10116] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10120"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10120] The expression  ! EC_POINT_set_compressed_coordinates(group,point,x,y_bit,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10121"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10121"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10121] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10123"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10123] The expression  ! BN_bin2bn(buf+1+field_len,field_len,y) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10124"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10124"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10124] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10125"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[10125] Suspicious mix of Bitwise and Literal expressions in BN_num_bits(y)&gt;m"
}} 
,
{ "ligne" : {
   "c1" : "10131"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10131"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10131] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10139"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10139] The expression BN_is_zero(x) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10146"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10146"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10146] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10149"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10149] The expression  ! group-&gt;meth-&gt;field_div(group,yxi,y,x,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10150"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10150"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10150] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10157"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10157"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10157] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10166"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10166"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10166] The expression  ! EC_POINT_set_affine_coordinates(group,point,x,y,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10167"
 , "c1link" : "./qc/crypto/ec/ec2_oct.c.html#10167"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10167] goto statement jump to err"
}} 
]
};
console.log('leListeStr 99 main end');
