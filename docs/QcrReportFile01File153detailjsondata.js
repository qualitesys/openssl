console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/bio/b_sock.c.html" 
 , "texte" : "File crypto/bio/b_sock.c 15 rule violations " 
 , "fic2"  : "./qc/crypto/bio/b_sock.c.xml" 
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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000006"
 , "c3" : "Risk of infinite while loop"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "4"
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
   "c1" : "MINOR"
 , "c2" : "QC-CPP000013"
 , "c3" : "Inline assembly code"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03222"
 , "c1link" : "./qc/crypto/bio/b_sock.c.html#3222"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03222] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09581"
 , "c1link" : "./qc/crypto/bio/b_sock.c.html#9581"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09581] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09583"
 , "c1link" : "./qc/crypto/bio/b_sock.c.html#9583"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09583] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10244"
 , "c1link" : "./qc/crypto/bio/b_sock.c.html#10244"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10244] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10579"
 , "c1link" : "./qc/crypto/bio/b_sock.c.html#10579"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10579] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10581"
 , "c1link" : "./qc/crypto/bio/b_sock.c.html#10581"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10581] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "10584"
 , "c1link" : "./qc/crypto/bio/b_sock.c.html#10584"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10584] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10610"
 , "c1link" : "./qc/crypto/bio/b_sock.c.html#10610"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10610] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "10623"
 , "c1link" : "./qc/crypto/bio/b_sock.c.html#10623"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10623] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "10798"
 , "c1link" : "./qc/crypto/bio/b_sock.c.html#10798"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[10798] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "10798"
 , "c1link" : "./qc/crypto/bio/b_sock.c.html#10798"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[10798] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "10802"
 , "c1link" : "./qc/crypto/bio/b_sock.c.html#10802"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10802] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10802"
 , "c1link" : "./qc/crypto/bio/b_sock.c.html#10802"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10802] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "10807"
 , "c1link" : "./qc/crypto/bio/b_sock.c.html#10807"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10807] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "10807"
 , "c1link" : "./qc/crypto/bio/b_sock.c.html#10807"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10807] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
]
};
console.log('leListeStr 99 main end');
