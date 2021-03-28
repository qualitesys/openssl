console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/apps/dgst.c.html" 
 , "texte" : "File apps/dgst.c 62 rule violations " 
 , "fic2"  : "./qc/apps/dgst.c.xml" 
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
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "39"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000010"
 , "c3" : "A switch clause refers to a jump label"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "2"
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
   "c1" : "02456"
 , "c1link" : "./qc/apps/dgst.c.html#2456"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02456] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "18835"
 , "c1link" : "./qc/apps/dgst.c.html#18835"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[18835] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "18922"
 , "c1link" : "./qc/apps/dgst.c.html#18922"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[18922] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18938"
 , "c1link" : "./qc/apps/dgst.c.html#18938"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18938] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18942"
 , "c1link" : "./qc/apps/dgst.c.html#18942"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[18942] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "18944"
 , "c1link" : "./qc/apps/dgst.c.html#18944"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18944] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18948"
 , "c1link" : "./qc/apps/dgst.c.html#18948"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18948] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18957"
 , "c1link" : "./qc/apps/dgst.c.html#18957"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18957] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18966"
 , "c1link" : "./qc/apps/dgst.c.html#18966"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18966] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18979"
 , "c1link" : "./qc/apps/dgst.c.html#18979"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18979] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18990"
 , "c1link" : "./qc/apps/dgst.c.html#18990"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18990] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19020"
 , "c1link" : "./qc/apps/dgst.c.html#19020"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19020] The expression  ! sigopts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19023"
 , "c1link" : "./qc/apps/dgst.c.html#19023"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19023] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19026"
 , "c1link" : "./qc/apps/dgst.c.html#19026"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19026] The expression  ! macopts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19029"
 , "c1link" : "./qc/apps/dgst.c.html#19029"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19029] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19036"
 , "c1link" : "./qc/apps/dgst.c.html#19036"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19036] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19050"
 , "c1link" : "./qc/apps/dgst.c.html#19050"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19050] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19059"
 , "c1link" : "./qc/apps/dgst.c.html#19059"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19059] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19069"
 , "c1link" : "./qc/apps/dgst.c.html#19069"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19069] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19071"
 , "c1link" : "./qc/apps/dgst.c.html#19071"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19071] The expression engine_impl applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19086"
 , "c1link" : "./qc/apps/dgst.c.html#19086"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19086] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19089"
 , "c1link" : "./qc/apps/dgst.c.html#19089"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19089] The expression debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19105"
 , "c1link" : "./qc/apps/dgst.c.html#19105"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19105] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19125"
 , "c1link" : "./qc/apps/dgst.c.html#19125"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19125] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19141"
 , "c1link" : "./qc/apps/dgst.c.html#19141"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19141] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19151"
 , "c1link" : "./qc/apps/dgst.c.html#19151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19151] The expression want_pub applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19167"
 , "c1link" : "./qc/apps/dgst.c.html#19167"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19167] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19176"
 , "c1link" : "./qc/apps/dgst.c.html#19176"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19176] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19200"
 , "c1link" : "./qc/apps/dgst.c.html#19200"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19200] goto statement jump to mac_end"
}} 
,
{ "ligne" : {
   "c1" : "19206"
 , "c1link" : "./qc/apps/dgst.c.html#19206"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19206] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19213"
 , "c1link" : "./qc/apps/dgst.c.html#19213"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19213] goto statement jump to mac_end"
}} 
,
{ "ligne" : {
   "c1" : "19220"
 , "c1link" : "./qc/apps/dgst.c.html#19220"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19220] goto statement jump to mac_end"
}} 
,
{ "ligne" : {
   "c1" : "19226"
 , "c1link" : "./qc/apps/dgst.c.html#19226"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19226] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19242"
 , "c1link" : "./qc/apps/dgst.c.html#19242"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19242] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19264"
 , "c1link" : "./qc/apps/dgst.c.html#19264"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19264] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19266"
 , "c1link" : "./qc/apps/dgst.c.html#19266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19266] The expression do_verify applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19270"
 , "c1link" : "./qc/apps/dgst.c.html#19270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19270] The expression  ! r applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19273"
 , "c1link" : "./qc/apps/dgst.c.html#19273"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19273] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19280"
 , "c1link" : "./qc/apps/dgst.c.html#19280"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19280] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19286"
 , "c1link" : "./qc/apps/dgst.c.html#19286"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19286] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19301"
 , "c1link" : "./qc/apps/dgst.c.html#19301"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19301] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19312"
 , "c1link" : "./qc/apps/dgst.c.html#19312"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19312] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19333"
 , "c1link" : "./qc/apps/dgst.c.html#19333"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19333] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19342"
 , "c1link" : "./qc/apps/dgst.c.html#19342"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19342] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19352"
 , "c1link" : "./qc/apps/dgst.c.html#19352"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19352] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19366"
 , "c1link" : "./qc/apps/dgst.c.html#19366"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19366] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19374"
 , "c1link" : "./qc/apps/dgst.c.html#19374"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19374] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19396"
 , "c1link" : "./qc/apps/dgst.c.html#19396"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19396] The expression  ! out_bin applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19415"
 , "c1link" : "./qc/apps/dgst.c.html#19415"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19415] The expression r applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19528"
 , "c1link" : "./qc/apps/dgst.c.html#19528"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19528] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19547"
 , "c1link" : "./qc/apps/dgst.c.html#19547"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19547] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19557"
 , "c1link" : "./qc/apps/dgst.c.html#19557"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19557] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19564"
 , "c1link" : "./qc/apps/dgst.c.html#19564"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19564] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19568"
 , "c1link" : "./qc/apps/dgst.c.html#19568"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19568] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19571"
 , "c1link" : "./qc/apps/dgst.c.html#19571"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19571] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19578"
 , "c1link" : "./qc/apps/dgst.c.html#19578"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19578] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19589"
 , "c1link" : "./qc/apps/dgst.c.html#19589"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19589] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19599"
 , "c1link" : "./qc/apps/dgst.c.html#19599"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19599] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19602"
 , "c1link" : "./qc/apps/dgst.c.html#19602"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19602] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19615"
 , "c1link" : "./qc/apps/dgst.c.html#19615"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19615] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19621"
 , "c1link" : "./qc/apps/dgst.c.html#19621"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19621] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19625"
 , "c1link" : "./qc/apps/dgst.c.html#19625"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19625] The expression binout applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
