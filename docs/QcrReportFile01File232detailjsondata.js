console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/cmp/cmp_hdr.c.html" 
 , "texte" : "File crypto/cmp/cmp_hdr.c 101 rule violations " 
 , "fic2"  : "./qc/crypto/cmp/cmp_hdr.c.xml" 
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
 , "c2" : "QC-CPP000005"
 , "c3" : "Check pointer declaration to unsigned char"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "31"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "50"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "01189"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#1189"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01189] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "01194"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#1194"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01194] The expression __l&lt;__u applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01381"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#1381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01381] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01431"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#1431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01431] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01462"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#1462"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01462] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01832"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#1832"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01832] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03073"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#3073"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03073] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03103"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#3103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03103] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03104"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#3104"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03104] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03105"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#3105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03105] The expression __size|__n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03105"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#3105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03105] The expression size_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03135"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#3135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03135] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03136"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#3136"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03136] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03137"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#3137"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03137] The expression __size|__n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03137"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#3137"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03137] The expression size_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03147"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#3147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03147] The expression __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03148"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#3148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03148] The expression __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03149"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#3149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03149] The expression __size|__n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03149"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#3149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03149] The expression size_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03160"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#3160"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03160] The expression ( - 1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05870"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#5870"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05870] The expression (( unsigned  int  )0x7fffffff+1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05877"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#5877"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05877] The expression (( unsigned  int  )0x7fffffff+1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05884"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#5884"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05884] The expression (( unsigned  int  )0x7fffffff+1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14891"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#14891"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14891] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14904"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#14904"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14904] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14908"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#14908"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14908] The expression  ! ASN1_INTEGER_get_int64( & pvno,hdr-&gt;pvno) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14917"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#14917"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14917] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14922"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#14922"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14922] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14934"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#14934"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14934] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14955"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#14955"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14955] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14970"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#14970"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14970] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15005"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15005"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15005] The pointer name is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15009"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15009"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15009] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15013"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15013"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15013] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15015"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15015"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15015] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15018"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15018"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15018] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15023"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15023"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15023] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15026"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15026"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15026] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15028"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15028"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15028] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15031"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15031"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15031] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15032"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15032"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15032] The expression  ! X509_NAME_set( & name-&gt;d.directoryName,src) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15033"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15033"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15033] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15055"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15055"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15055] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15066"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15066"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15066] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15077"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15077"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15077] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15086"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15086"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15086] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15083"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15083"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15083] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15088"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15088"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15088] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15106"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[15106] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "15111"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15111] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15130"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15130] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15142"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15142] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15146"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15146] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15156"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15156"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15156] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15153"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15153"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15153] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15158"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15158] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15170"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15170"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15170] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15174"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15174] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15184"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15184"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15184] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15181"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15181"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15181] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15186"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15186"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15186] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15201"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15201"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15201] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15205"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15205"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15205] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15216"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15216"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15216] The pointer itav is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15220"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15220"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15220] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15225"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15225"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15225] The expression i&lt;OPENSSL_sk_num(ossl_check_const_OSSL_CMP_ITAV_sk_type(itavs)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15229"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15229"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15229] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15234"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15234"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15234] The expression  ! ossl_cmp_hdr_generalInfo_push0_item(hdr,itav) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15244"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15244"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15244] The pointer itav is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15245"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15245"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15245] The pointer asn1null is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15249"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15249"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15249] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15256"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15256] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15260"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15260"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15260] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15263"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15263"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15263] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15266"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15266"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15266] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15267"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15267"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15267] The expression  ! ossl_cmp_hdr_generalInfo_push0_item(hdr,itav) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15268"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15268"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15268] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15282"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15282"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15282] The pointer itav is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15286"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15286"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15286] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15292"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15292] The expression i&lt;itavCount applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15296"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15296] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15310"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15310"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15310] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15313"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15313"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15313] The pointer tid is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15322"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15322] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15337"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15337"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15337] The pointer sender is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15346"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15346"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15346] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15350"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15350"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15350] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15374"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15374"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15374] The expression  ! ossl_cmp_hdr_set1_sender(hdr,sender) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15380"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15380"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15380] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15386"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15386"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15386] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15392"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15392"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15392] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15398"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15398"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15398] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15404"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15404"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15404] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15408"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15408"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15408] The expression  ! ossl_cmp_hdr_set1_recipient(hdr,rcp) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15412"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15412"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15412] The expression  ! ossl_cmp_hdr_update_messageTime(hdr) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15420"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15420"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15420] The expression  ! ossl_cmp_asn1_octet_string_set1( & hdr-&gt;recipNonce,ctx-&gt;recipNonce) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15417"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15417"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15417] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15424"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15424"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15424] The expression  ! ossl_cmp_hdr_set_transactionID(ctx,hdr) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15431"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15431] The expression  ! OSSL_CMP_CTX_set1_senderNonce(ctx,hdr-&gt;senderNonce) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15444"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15444"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15444] The expression  ! ossl_cmp_hdr_push1_freeText(hdr,ctx-&gt;freeText) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15441"
 , "c1link" : "./qc/crypto/cmp/cmp_hdr.c.html#15441"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15441] The expression (( void  *)0) is invariable"
}} 
]
};
console.log('leListeStr 99 main end');
