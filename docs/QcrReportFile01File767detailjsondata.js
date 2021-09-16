console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/engines/e_ossltest.c.html" 
 , "texte" : "File engines/e_ossltest.c 81 rule violations " 
 , "fic2"  : "./qc/engines/e_ossltest.c.xml" 
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000008"
 , "c3" : "Suspicious bitwise operation"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "20"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "34"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00986"
 , "c1link" : "./qc/engines/e_ossltest.c.html#986"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00986] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00991"
 , "c1link" : "./qc/engines/e_ossltest.c.html#991"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00991] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01016"
 , "c1link" : "./qc/engines/e_ossltest.c.html#1016"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01016] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01020"
 , "c1link" : "./qc/engines/e_ossltest.c.html#1020"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01020] The expression __size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01020"
 , "c1link" : "./qc/engines/e_ossltest.c.html#1020"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01020] The expression __n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01023"
 , "c1link" : "./qc/engines/e_ossltest.c.html#1023"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01023] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01048"
 , "c1link" : "./qc/engines/e_ossltest.c.html#1048"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01048] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01052"
 , "c1link" : "./qc/engines/e_ossltest.c.html#1052"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01052] The expression __size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01052"
 , "c1link" : "./qc/engines/e_ossltest.c.html#1052"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01052] The expression __n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01056"
 , "c1link" : "./qc/engines/e_ossltest.c.html#1056"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01056] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01064"
 , "c1link" : "./qc/engines/e_ossltest.c.html#1064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01064] The expression __size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01064"
 , "c1link" : "./qc/engines/e_ossltest.c.html#1064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01064] The expression __n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01447"
 , "c1link" : "./qc/engines/e_ossltest.c.html#1447"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01447] The expression ( ! __builtin_constant_p(__n)||__n&gt;__builtin_object_size(__dest,2&gt;1)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01446"
 , "c1link" : "./qc/engines/e_ossltest.c.html#1446"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01446] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02974"
 , "c1link" : "./qc/engines/e_ossltest.c.html#2974"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02974] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "03137"
 , "c1link" : "./qc/engines/e_ossltest.c.html#3137"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03137] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03140"
 , "c1link" : "./qc/engines/e_ossltest.c.html#3140"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03140] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03164"
 , "c1link" : "./qc/engines/e_ossltest.c.html#3164"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03164] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03168"
 , "c1link" : "./qc/engines/e_ossltest.c.html#3168"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03168] The expression __buflen&gt;__builtin_object_size(__buf,2&gt;1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03168"
 , "c1link" : "./qc/engines/e_ossltest.c.html#3168"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03168] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03190"
 , "c1link" : "./qc/engines/e_ossltest.c.html#3190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03190] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03190"
 , "c1link" : "./qc/engines/e_ossltest.c.html#3190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03190] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03214"
 , "c1link" : "./qc/engines/e_ossltest.c.html#3214"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03214] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03220"
 , "c1link" : "./qc/engines/e_ossltest.c.html#3220"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03220] The expression __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  ) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03220"
 , "c1link" : "./qc/engines/e_ossltest.c.html#3220"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03220] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03245"
 , "c1link" : "./qc/engines/e_ossltest.c.html#3245"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03245] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03249"
 , "c1link" : "./qc/engines/e_ossltest.c.html#3249"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03249] The expression __len&gt;__builtin_object_size(__dst,2&gt;1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03249"
 , "c1link" : "./qc/engines/e_ossltest.c.html#3249"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03249] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14031"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14031"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14031] The expression  ! error_loaded applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14042"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14042"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14042] The expression error_loaded applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14106"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14106"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14106] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14108"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14108"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14108] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14113"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14113] The expression 16 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14114"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14114"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14114] The expression 64 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14117"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14117] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "14151"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14151"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14151] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14153"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14153"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14153] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14158"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14158] The expression 20 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14159"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14159"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14159] The expression (16 * 4) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14162"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14162"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14162] The expression 0x0008 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14196"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14196"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14196] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14198"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14198"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14198] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14203"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14203"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14203] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14204"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14204"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14204] The expression (16 * 4) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14207"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14207"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14207] The expression 0x0008 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14246"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14246"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14246] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14248"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14248"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14248] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14253"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14253"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14253] The expression 48 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14254"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14254"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14254] The expression (16 * 8) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14257"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14257] The expression 0x0008 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14284"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14284"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14284] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14286"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14286"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14286] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14291"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14291"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14291] The expression 64 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14292"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14292] The expression (16 * 8) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14295"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14295"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14295] The expression 0x0008 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14349"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14349"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14349] The expression  ! init applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14350"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14350"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14350] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14351"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14351"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14351] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14357"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14357"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14357] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14363"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14363"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14363] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14369"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14369"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14369] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14375"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14375"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14375] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14421"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14421"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14421] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14430"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000008[14430] Suspicious bitwise operation with value 0, result is a|0 = a"
}} 
,
{ "ligne" : {
   "c1" : "14466"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14466"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14466] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14474"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14474"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000008[14474] Suspicious bitwise operation with value 0, result is a|0 = a"
}} 
,
{ "ligne" : {
   "c1" : "14508"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14508"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14508] The pointer in is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14509"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14509"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14509] The pointer key is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14511"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14511"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14511] The expression 'ot:' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14511"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14511"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14511] The expression 3 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14526"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14526"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14526] The expression  ! in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14532"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14532"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14532] The expression pub applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14594"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14594"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14594] The expression id applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14602"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14602"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14602] The expression ENGINE_get_static_state()==fns-&gt;static_state applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14602"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14602"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14602] goto statement jump to skip_cbs"
}} 
,
{ "ligne" : {
   "c1" : "14633"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14633"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14633] The expression  ! toadd applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14665"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14665"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14665] The expression  ! digest applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14702"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14702"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14702] The expression  ! cipher applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14873"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14873"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14873] The pointer tmpbuf is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14873"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14873"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[14873] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "14919"
 , "c1link" : "./qc/engines/e_ossltest.c.html#14919"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[14919] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
]
};
console.log('leListeStr 99 main end');
