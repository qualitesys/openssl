console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/cmp/cmp_ctx.c.html" 
 , "texte" : "File crypto/cmp/cmp_ctx.c 69 rule violations " 
 , "fic2"  : "./qc/crypto/cmp/cmp_ctx.c.xml" 
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
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "25"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "14"
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
   "c1" : "01178"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#1178"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01178] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01183"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#1183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01183] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01183"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#1183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01183] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01208"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#1208"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01208] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01215"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#1215"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01215] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01215"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#1215"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01215] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "01240"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#1240"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01240] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01248"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#1248"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01248] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01248"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#1248"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01248] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "02301"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#2301"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02301] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02464"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#2464"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02464] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02491"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#2491"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02491] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02493"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#2493"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02493] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02495"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#2495"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02495] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02495"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#2495"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02495] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02517"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#2517"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02517] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02517"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#2517"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02517] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02517"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#2517"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02517] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02541"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#2541"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02541] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02543"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#2543"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02543] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02547"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#2547"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02547] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02547"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#2547"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02547] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "02572"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#2572"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02572] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02574"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#2574"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02574] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02576"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#2576"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02576] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02576"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#2576"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02576] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "12804"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#12804"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[12804] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "12805"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#12805"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[12805] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "14702"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#14702"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14702] The expression  ! ossl_x509_add_certs_new( &amp; untrusted,certs,0x1|0x4) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14703"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#14703"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14703] The expression 0x1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14703"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#14703"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14703] The expression 0x4 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14704"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#14704"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14704] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14748"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#14748"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14748] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14755"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#14755"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14755] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14760"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#14760"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14760] goto statement jump to oom"
}} 
,
{ "ligne" : {
   "c1" : "14770"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#14770"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14770] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14775"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#14775"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14775] goto statement jump to oom"
}} 
,
{ "ligne" : {
   "c1" : "14778"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#14778"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14778] The expression  ! cmp_ctx_set_md(ctx, &amp; ctx-&gt;pbm_owf,672) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14778"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#14778"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14778] The expression 672 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14779"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#14779"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14779] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14783"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#14783"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14783] The expression  ! cmp_ctx_set_md(ctx, &amp; ctx-&gt;digest,672) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14783"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#14783"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14783] The expression 672 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14784"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#14784"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14784] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15171"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15171"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[15171] Suspicious mix of Bitwise and Literal expressions in BIO_vsnprintf(hugebuf, sizeof (hugebuf), format ,args)&gt;0"
}} 
,
{ "ligne" : {
   "c1" : "15458"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15458"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15458] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15599"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15599"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15599] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15622"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15622"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15622] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15645"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15645"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15645] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15671"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15671"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15671] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15698"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15698"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15698] The expression 85 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15698"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15698"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15698] The expression  - 1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15693"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15693"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[15693] Suspicious mix of Bitwise and Literal expressions in OPENSSL_sk_num(ossl_check_const_GENERAL_NAME_sk_type(ctx-&gt;subjectAltNames))&gt;0"
}} 
,
{ "ligne" : {
   "c1" : "15698"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15698"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[15698] Suspicious mix of Bitwise and Literal expressions in X509v3_get_ext_by_NID(exts,85, - 1)&gt;=0"
}} 
,
{ "ligne" : {
   "c1" : "15743"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15743"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15743] The pointer name_dup is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15776"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15776"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15776] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15782"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15782"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15782] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15788"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15788"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15788] The expression  ! OPENSSL_sk_push(ossl_check_GENERAL_NAME_sk_type(ctx-&gt;subjectAltNames),ossl_check_GENERAL_NAME_type(name_dup)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15824"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15824"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15824] The pointer chain is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15839"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15839"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15839] The expression  ! ossl_x509_add_certs_new( &amp; ctx-&gt;untrusted,candidates,0x1|0x4) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15840"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15840"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15840] The expression 0x1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15840"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15840"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15840] The expression 0x4 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15908"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15908"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15908] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15970"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#15970"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15970] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "16113"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#16113"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[16113] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "16136"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#16136"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[16136] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "16159"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#16159"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[16159] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "16327"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#16327"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[16327] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "16456"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#16456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16456] The expression  ! cmp_ctx_set_md(ctx, &amp; ctx-&gt;digest,val) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16460"
 , "c1link" : "./qc/crypto/cmp/cmp_ctx.c.html#16460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16460] The expression  ! cmp_ctx_set_md(ctx, &amp; ctx-&gt;pbm_owf,val) applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
