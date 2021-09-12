console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/rsa/rsa_ossl.c.html" 
 , "texte" : "File crypto/rsa/rsa_ossl.c 265 rule violations " 
 , "fic2"  : "./qc/crypto/rsa/rsa_ossl.c.xml" 
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
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "82"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "55"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "93"
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
 , "c4" : "17"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "01214"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#1214"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01214] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "01219"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#1219"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01219] The expression __l&lt;__u applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01406"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#1406"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01406] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01456"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#1456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01456] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01487"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#1487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01487] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01857"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#1857"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01857] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03081"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#3081"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03081] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03111"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#3111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03111] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03112"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#3112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03112] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03113"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#3113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03113] The expression __size|__n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03113"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#3113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03113] The expression size_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03143"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#3143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03143] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03144"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#3144"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03144] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03145"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#3145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03145] The expression __size|__n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03145"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#3145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03145] The expression size_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03155"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#3155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03155] The expression __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03156"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#3156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03156] The expression __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03157"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#3157"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03157] The expression __size|__n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03157"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#3157"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03157] The expression size_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03168"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#3168"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03168] The expression ( - 1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05878"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#5878"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05878] The expression (( unsigned  int  )0x7fffffff+1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05885"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#5885"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05885] The expression (( unsigned  int  )0x7fffffff+1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05892"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#5892"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05892] The expression (( unsigned  int  )0x7fffffff+1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07405"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7405"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07405] The expression i&lt;len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07425"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07425] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07426"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7426"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07426] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07432"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7432"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07432] The expression i&lt;numrows applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07434"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7434"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07434] The expression j&lt;rowsize applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07518"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7518"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07518] The pointer f is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07518"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7518"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07518] The pointer ret is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07520"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7520"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07520] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07561"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7561"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07561] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "07563"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7563"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07563] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07566"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7566"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07566] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07574"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7574"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07574] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07578"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7578"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07578] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07586"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7586"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07586] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07620"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7620"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07620] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07623"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7623"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07623] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07627"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7627"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07627] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07630"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7630"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07630] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07639"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7639"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07639] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07643"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7643"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07643] The expression  ! BN_MONT_CTX_set_locked( & rsa-&gt;_method_mod_n,rsa-&gt;lock,rsa-&gt;n,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07645"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7645"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07645] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07647"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7647"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07647] The expression  ! rsa-&gt;meth-&gt;bn_mod_exp(ret,f,rsa-&gt;e,rsa-&gt;n,ctx,rsa-&gt;_method_mod_n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07649"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7649"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07649] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07665"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7665"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07665] The pointer ret is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07667"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7667"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07667] The expression  ! CRYPTO_THREAD_write_lock(rsa-&gt;lock) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07676"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7676"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07676] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07685"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7685"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07685] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07688"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7688"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07688] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07690"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7690"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07690] The expression BN_BLINDING_is_current_thread(ret) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07706"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7706"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07706] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07724"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7724"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07724] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07760"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7760"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07760] The pointer f is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07760"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7760"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07760] The pointer ret is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07760"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7760"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07760] The pointer res is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07762"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7762"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07762] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07789"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7789"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07789] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "07791"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7791"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07791] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07794"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7794"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07794] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07802"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7802"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07802] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07806"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7806"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07806] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07814"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7814"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07814] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07833"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7833"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07833] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07836"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7836"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07836] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07840"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7840"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07840] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07843"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7843"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07843] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07852"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7852"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07852] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07856"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7856"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07856] The expression  ! BN_MONT_CTX_set_locked( & rsa-&gt;_method_mod_n,rsa-&gt;lock,rsa-&gt;n,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07858"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7858"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07858] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07864"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7864"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07864] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07872"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7872"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07872] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07878"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7878"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07878] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07881"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7881"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07881] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "07881"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7881"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07881] The expression  ! local_blinding applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07883"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7883"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07883] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07891"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7891"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07891] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07893"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7893"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07893] The expression  ! rsa_blinding_convert(blinding,f,unblind,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07894"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7894"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07894] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07901"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7901"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07901] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07906"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7906"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07906] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07911"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7911"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07911] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07915"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7915"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07915] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07919"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7919"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07919] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07922"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7922"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07922] The expression  ! rsa-&gt;meth-&gt;rsa_mod_exp(ret,f,rsa,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07923"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7923"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07923] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07928"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7928"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07928] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07936"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7936"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07936] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07940"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7940"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07940] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07949"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7949"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07949] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07953"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7953"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07953] The expression  ! rsa-&gt;meth-&gt;bn_mod_exp(ret,f,d,rsa-&gt;n,ctx,rsa-&gt;_method_mod_n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07956"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7956"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07956] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07962"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7962"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07962] The expression blinding applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07963"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7963"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07963] The expression  ! rsa_blinding_invert(blinding,ret,unblind,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07964"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7964"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07964] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07967"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7967"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07967] The expression  ! BN_sub(f,rsa-&gt;n,ret) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07968"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7968"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[07968] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "07992"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7992"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07992] The pointer f is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07992"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7992"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07992] The pointer ret is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07994"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#7994"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07994] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "08021"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8021"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08021] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08023"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8023"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08023] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08026"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8026"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08026] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08034"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8034"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08034] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08038"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08038] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08046"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8046"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08046] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08053"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8053"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08053] The expression flen&gt;num applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08059"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8059"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08059] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08065"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8065"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08065] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08068"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8068"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08068] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08076"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8076"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08076] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08083"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8083"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08083] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08091"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8091"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08091] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08097"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8097"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08097] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08100"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8100"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08100] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08100"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08100] The expression  ! local_blinding applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08102"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08102] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08110"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8110"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08110] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08112"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08112] The expression  ! rsa_blinding_convert(blinding,f,unblind,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08113"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8113"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08113] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08121"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08121] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08126"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08126] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08131"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08131] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08135"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08135] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08139"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08139] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08142"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08142] The expression  ! rsa-&gt;meth-&gt;rsa_mod_exp(ret,f,rsa,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08143"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8143"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08143] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08148"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08148] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08156"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8156"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08156] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08160"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8160"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08160] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08169"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8169"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08169] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08174"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08174] The expression  ! BN_MONT_CTX_set_locked( & rsa-&gt;_method_mod_n,rsa-&gt;lock,rsa-&gt;n,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08177"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8177"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08177] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08179"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8179"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08179] The expression  ! rsa-&gt;meth-&gt;bn_mod_exp(ret,f,d,rsa-&gt;n,ctx,rsa-&gt;_method_mod_n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08182"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8182"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08182] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08188"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08188] The expression blinding applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08189"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8189"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08189] The expression  ! rsa_blinding_invert(blinding,ret,unblind,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08190"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8190"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08190] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08194"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8194"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08194] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08208"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8208"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08208] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08208"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8208"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08208] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08216"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8216"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08216] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08243"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8243"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08243] The pointer f is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08243"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8243"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08243] The pointer ret is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08245"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8245"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[08245] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "08286"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8286"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08286] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08288"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8288"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08288] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08291"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8291"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08291] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08299"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8299"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08299] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08303"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8303"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08303] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08311"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8311"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08311] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08318"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08318] The expression flen&gt;num applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08324"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8324"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08324] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08329"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8329"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08329] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08332"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8332"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08332] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08340"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8340"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08340] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08344"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8344"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08344] The expression  ! BN_MONT_CTX_set_locked( & rsa-&gt;_method_mod_n,rsa-&gt;lock,rsa-&gt;n,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08346"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8346"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08346] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08348"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8348"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08348] The expression  ! rsa-&gt;meth-&gt;bn_mod_exp(ret,f,rsa-&gt;e,rsa-&gt;n,ctx,rsa-&gt;_method_mod_n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08350"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8350"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08350] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08353"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8353"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08353] The expression  ! BN_sub(ret,rsa-&gt;n,ret) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08354"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8354"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08354] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08358"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8358"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08358] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08368"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8368"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08368] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08368"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8368"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08368] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08376"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8376"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08376] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08394"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8394"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08394] The pointer r1 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08394"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8394"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08394] The pointer m1 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08394"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8394"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08394] The pointer vrfy is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08397"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8397"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08397] The pointer r2 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08399"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8399"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08399] The pointer pinfo is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08412"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8412"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08412] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08415"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8415"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08415] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08419"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8419"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08419] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08421"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8421"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08421] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08429"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08429] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08432"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8432"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08432] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08439"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8439"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08439] The expression BN_MONT_CTX_set_locked( & rsa-&gt;_method_mod_p,rsa-&gt;lock,factor,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08442"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8442"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08442] The expression BN_MONT_CTX_set_locked( & rsa-&gt;_method_mod_q,rsa-&gt;lock,factor,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08445"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8445"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08445] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08448"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8448"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08448] The expression i&lt;ex_primes applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08451"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8451"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08451] The expression  ! BN_MONT_CTX_set_locked( & pinfo-&gt;m,rsa-&gt;lock,factor,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08453"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8453"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08453] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08470"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8470"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08470] The expression  ! BN_MONT_CTX_set_locked( & rsa-&gt;_method_mod_n,rsa-&gt;lock,rsa-&gt;n,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08472"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8472"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08472] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08474"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8474"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08474] The expression smooth applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08483"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8483"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08483] The expression  ! bn_from_mont_fixed_top(m1,I,rsa-&gt;_method_mod_q,ctx)|| ! bn_to_mont_fixed_top(m1,m1,rsa-&gt;_method_mod_q,ctx)|| ! bn_from_mont_fixed_top(r1,I,rsa-&gt;_method_mod_p,ctx)|| ! bn_to_mont_fixed_top(r1,r1,rsa-&gt;_method_mod_p,ctx)|| ! BN_mod_exp_mont_consttime_x2(m1,m1,rsa-&gt;dmq1,rsa-&gt;q,rsa-&gt;_method_mod_q,r1,r1,rsa-&gt;dmp1,rsa-&gt;p,rsa-&gt;_method_mod_p,ctx)|| ! bn_mod_sub_fixed_top(r1,r1,m1,rsa-&gt;p)|| ! bn_to_mont_fixed_top(r1,r1,rsa-&gt;_method_mod_p,ctx)|| ! bn_mul_mont_fixed_top(r1,r1,rsa-&gt;iqmp,rsa-&gt;_method_mod_p,ctx)|| ! bn_mul_fixed_top(r0,r1,rsa-&gt;q,ctx)|| ! bn_mod_add_fixed_top(r0,r0,m1,rsa-&gt;n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08515"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8515"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08515] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08517"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8517"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08517] goto statement jump to tail"
}} 
,
{ "ligne" : {
   "c1" : "08525"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8525"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08525] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08528"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8528"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08528] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08537"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8537"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08537] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08544"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8544"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08544] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08548"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8548"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08548] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08553"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8553"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08553] The expression  ! rsa-&gt;meth-&gt;bn_mod_exp(m1,r1,dmq1,rsa-&gt;q,ctx,rsa-&gt;_method_mod_q) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08557"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8557"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08557] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08570"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8570"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08570] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08580"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8580"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08580] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08583"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8583"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08583] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08587"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8587"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08587] The expression  ! rsa-&gt;meth-&gt;bn_mod_exp(r0,r1,dmp1,rsa-&gt;p,ctx,rsa-&gt;_method_mod_p) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08590"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8590"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08590] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08602"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8602"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08602] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08606"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8606"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08606] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08611"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8611"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08611] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08614"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8614"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08614] The expression i&lt;ex_primes applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08616"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8616"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08616] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08618"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8618"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08618] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08623"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8623"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08623] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08639"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8639"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08639] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08642"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8642"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08642] The expression  ! rsa-&gt;meth-&gt;bn_mod_exp(m[i],r1,di,pinfo-&gt;r,ctx,pinfo-&gt;m) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08645"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8645"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08645] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08654"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8654"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08654] The expression  ! BN_sub(r0,r0,m1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08655"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8655"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08655] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08660"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8660"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08660] The expression BN_is_negative(r0) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08661"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8661"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08661] The expression  ! BN_add(r0,r0,rsa-&gt;p) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08662"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8662"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08662] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08664"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8664"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08664] The expression  ! BN_mul(r1,r0,rsa-&gt;iqmp,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08665"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8665"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08665] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08671"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8671"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08671] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08674"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8674"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08674] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08683"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8683"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08683] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08689"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8689"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08689] The expression BN_is_negative(r0) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08690"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8690"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08690] The expression  ! BN_add(r0,r0,rsa-&gt;p) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08691"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8691"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08691] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08692"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8692"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08692] The expression  ! BN_mul(r1,r0,rsa-&gt;q,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08693"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8693"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08693] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08694"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8694"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08694] The expression  ! BN_add(r0,r1,m1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08695"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8695"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08695] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08704"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8704"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08704] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08707"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8707"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08707] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08709"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8709"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08709] The expression i&lt;ex_primes applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08711"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8711"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08711] The expression  ! BN_sub(r1,m[i],r0) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08713"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8713"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08713] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08716"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8716"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08716] The expression  ! BN_mul(r2,r1,pinfo-&gt;t,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08718"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8718"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08718] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08729"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8729"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08729] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08732"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8732"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08732] The expression BN_is_negative(r1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08733"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8733"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08733] The expression  ! BN_add(r1,r1,pinfo-&gt;r) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08735"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8735"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08735] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08737"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8737"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08737] The expression  ! BN_mul(r1,r1,pinfo-&gt;pp,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08739"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8739"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08739] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08741"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8741"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08741] The expression  ! BN_add(r0,r0,r1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08743"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8743"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08743] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08751"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8751"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08751] The expression rsa-&gt;e&&rsa-&gt;n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08752"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8752"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08752] The expression rsa-&gt;meth-&gt;bn_mod_exp==BN_mod_exp_mont applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08753"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8753"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08753] The expression  ! BN_mod_exp_mont(vrfy,r0,rsa-&gt;e,rsa-&gt;n,ctx,rsa-&gt;_method_mod_n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08755"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8755"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08755] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08758"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8758"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08758] The expression  ! rsa-&gt;meth-&gt;bn_mod_exp(vrfy,r0,rsa-&gt;e,rsa-&gt;n,ctx,rsa-&gt;_method_mod_n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08760"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8760"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08760] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08768"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8768"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08768] The expression  ! BN_sub(vrfy,vrfy,I) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08769"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8769"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08769] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08770"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8770"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08770] The expression BN_is_zero(vrfy) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08773"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8773"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08773] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08780"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8780"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08780] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08781"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8781"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08781] The expression BN_is_negative(vrfy) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08782"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8782"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08782] The expression  ! BN_add(vrfy,vrfy,rsa-&gt;n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08783"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8783"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08783] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08784"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8784"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08784] The expression  ! BN_is_zero(vrfy) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08794"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8794"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08794] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08797"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8797"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08797] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08800"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8800"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08800] The expression  ! rsa-&gt;meth-&gt;bn_mod_exp(r0,I,d,rsa-&gt;n,ctx,rsa-&gt;_method_mod_n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08803"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8803"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08803] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08827"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8827"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08827] The pointer pinfo is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08829"
 , "c1link" : "./qc/crypto/rsa/rsa_ossl.c.html#8829"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08829] The expression i&lt;sk_RSA_PRIME_INFO_num(rsa-&gt;prime_infos) applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
