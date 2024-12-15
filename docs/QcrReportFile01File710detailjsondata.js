console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/sm4/sm4.c.html" 
 , "texte" : "File crypto/sm4/sm4.c 32 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "dummy" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00542"
 , "c5link" : "././qc/crypto/sm4/sm4.c.html#542"
 , "c1" : "uint32_t"
 , "c2" : "rotl(uint32_t;uint8_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00547"
 , "c5link" : "././qc/crypto/sm4/sm4.c.html#547"
 , "c1" : "uint32_t"
 , "c2" : "load_u32_be(uint8_t*;uint32_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00555"
 , "c5link" : "././qc/crypto/sm4/sm4.c.html#555"
 , "c1" : " void "
 , "c2" : "store_u32_be(uint32_t;uint8_t*)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00563"
 , "c5link" : "././qc/crypto/sm4/sm4.c.html#563"
 , "c1" : "uint32_t"
 , "c2" : "SM4_T_non_lin_sub(uint32_t)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00575"
 , "c5link" : "././qc/crypto/sm4/sm4.c.html#575"
 , "c1" : "uint32_t"
 , "c2" : "SM4_T_slow(uint32_t)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00585"
 , "c5link" : "././qc/crypto/sm4/sm4.c.html#585"
 , "c1" : "uint32_t"
 , "c2" : "SM4_T(uint32_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00593"
 , "c5link" : "././qc/crypto/sm4/sm4.c.html#593"
 , "c1" : "uint32_t"
 , "c2" : "SM4_key_sub(uint32_t)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00600"
 , "c5link" : "././qc/crypto/sm4/sm4.c.html#600"
 , "c1" : " int "
 , "c2" : "ossl_sm4_set_key(uint8_t*;SM4_KEY*)"
 , "c3" : "2"
 , "c4" : "19"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00644"
 , "c5link" : "././qc/crypto/sm4/sm4.c.html#644"
 , "c1" : " void "
 , "c2" : "ossl_sm4_encrypt(uint8_t*;uint8_t*;SM4_KEY*)"
 , "c3" : "17"
 , "c4" : "48"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00670"
 , "c5link" : "././qc/crypto/sm4/sm4.c.html#670"
 , "c1" : " void "
 , "c2" : "ossl_sm4_decrypt(uint8_t*;uint8_t*;SM4_KEY*)"
 , "c3" : "17"
 , "c4" : "48"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/crypto/sm4/sm4.c.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-CPP000006"
 , "c3" : "Risk of infinite while loop"
 , "c4" : "16"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "16"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00655"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#655"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[00655] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00655"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#655"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00655] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00656"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#656"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[00656] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00656"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#656"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00656] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00657"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#657"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[00657] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00657"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#657"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00657] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00658"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#658"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[00658] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00658"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#658"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00658] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00659"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#659"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[00659] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00659"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#659"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00659] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00660"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#660"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[00660] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00660"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#660"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00660] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00661"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#661"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[00661] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00661"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#661"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00661] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00662"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#662"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[00662] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00662"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#662"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00662] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00677"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#677"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[00677] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00677"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#677"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00677] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00678"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#678"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[00678] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00678"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#678"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00678] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00679"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#679"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[00679] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00679"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#679"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00679] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00680"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#680"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[00680] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00680"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#680"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00680] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00681"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#681"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[00681] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00681"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#681"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00681] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00682"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#682"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[00682] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00682"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#682"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00682] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00683"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#683"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[00683] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00683"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#683"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00683] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00684"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#684"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[00684] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00684"
 , "c1link" : "./qc/crypto/sm4/sm4.c.html#684"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00684] The expression 0 is invariable, always false"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/crypto/sm4/sm4.c.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
