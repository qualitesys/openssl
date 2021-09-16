console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/ct/ct_log.c.html" 
 , "texte" : "File crypto/ct/ct_log.c 47 rule violations " 
 , "fic2"  : "./qc/crypto/ct/ct_log.c.xml" 
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
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "18"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "01183"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#1183"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01183] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "01346"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#1346"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01346] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01373"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#1373"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01373] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01377"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#1377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01377] The expression __buflen&gt;__builtin_object_size(__buf,2&gt;1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01377"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#1377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01377] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01399"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#1399"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01399] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01399"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#1399"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01399] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01423"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#1423"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01423] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01429"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#1429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01429] The expression __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  ) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01429"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#1429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01429] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01454"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#1454"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01454] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01458"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#1458"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01458] The expression __len&gt;__builtin_object_size(__dst,2&gt;1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01458"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#1458"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01458] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01826"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#1826"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01826] The expression ( ! __builtin_constant_p(__n)||__n&gt;__builtin_object_size(__dest,2&gt;1)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01825"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#1825"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01825] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02861"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#2861"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02861] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02866"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#2866"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02866] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02891"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#2891"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02891] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "02895"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#2895"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02895] The expression __size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02895"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#2895"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02895] The expression __n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02898"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#2898"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02898] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "02923"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#2923"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02923] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "02927"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#2927"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02927] The expression __size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02927"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#2927"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02927] The expression __n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02931"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#2931"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02931] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "02939"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#2939"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02939] The expression __size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02939"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#2939"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02939] The expression __n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13535"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13535"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13535] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13554"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13554"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13554] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13567"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13567"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13567] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13620"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13620"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13620] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13635"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13635"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13635] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13678"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13678"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13678] The pointer pkey_base64 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13741"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13741"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13741] The pointer tmp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13758"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13758"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13758] goto statement jump to mem_err"
}} 
,
{ "ligne" : {
   "c1" : "13774"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13774"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13774] goto statement jump to mem_err"
}} 
,
{ "ligne" : {
   "c1" : "13791"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13791"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13791] The pointer enabled_logs is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13811"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13811"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13811] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "13823"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13823"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13823] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "13841"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13841"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13841] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "13844"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13844"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13844] The expression ',' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "13844"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13844"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13844] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "13851"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13851"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13851] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "13905"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13905"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13905] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13920"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13920"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13920] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13924"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13924"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13924] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13992"
 , "c1link" : "./qc/crypto/ct/ct_log.c.html#13992"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13992] The expression i&lt;OPENSSL_sk_num(ossl_check_const_CTLOG_sk_type(store-&gt;logs)) applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
