console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/ssl/record/ssl3_record.c.html" 
 , "texte" : "File ssl/record/ssl3_record.c 165 rule violations " 
 , "fic2"  : "./qc/ssl/record/ssl3_record.c.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "dummy" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "intmax_t"
 , "c2" : "strtoimax(char*;char*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "uintmax_t"
 , "c2" : "strtoumax(char*;char*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "intmax_t"
 , "c2" : "wcstoimax(__gwchar_t*;__gwchar_t*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "uintmax_t"
 , "c2" : "wcstoumax(__gwchar_t*;__gwchar_t*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "atoi(char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " long  int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "atol(char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " long  long  int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "atoll(char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  int "
 , "c2" : "__bswap_32(unsignedint)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "__uint64_t"
 , "c2" : "__bswap_64(__uint64_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "__uint16_t"
 , "c2" : "__uint16_identity(__uint16_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "__uint32_t"
 , "c2" : "__uint32_identity(__uint32_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "__uint64_t"
 , "c2" : "__uint64_identity(__uint64_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "gnu_dev_major(__dev_t)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "gnu_dev_minor(__dev_t)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "__dev_t"
 , "c2" : "gnu_dev_makedev(unsignedint;unsignedint)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "bsearch(void*;void*;size_t;size_t;__compar_fn_t)"
 , "c3" : "6"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : " double  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "atof(char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "realpath(char*;char*)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "ptsname_r(int;char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "wctomb(char*;wchar_t)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "size_t"
 , "c2" : "mbstowcs(wchar_t*;char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "size_t"
 , "c2" : "wcstombs(char*;wchar_t*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "getchar(void)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "fgetc_unlocked(FILE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "getc_unlocked(FILE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "getchar_unlocked(void)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "putchar(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "fputc_unlocked(int;FILE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "putc_unlocked(int;FILE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "putchar_unlocked(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "feof_unlocked(FILE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "ferror_unlocked(FILE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "sprintf(char*;char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "vsprintf(char*;char*;__gnuc_va_list)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "snprintf(char*;size_t;char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "vsnprintf(char*;size_t;char*;__gnuc_va_list)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "fprintf(FILE*;char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "printf(char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "vprintf(char*;__gnuc_va_list)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "vfprintf(FILE*;char*;__gnuc_va_list)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "dprintf(int;char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "vdprintf(int;char*;__gnuc_va_list)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "fgets(char*;int;FILE*)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "size_t"
 , "c2" : "fread(void*;size_t;size_t;FILE*)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "size_t"
 , "c2" : "fread_unlocked(void*;size_t;size_t;FILE*)"
 , "c3" : "8"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "ossl_check_OPENSSL_STRING_type(char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_OPENSSL_STRING_sk_type(structstack_st_OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_OPENSSL_STRING_sk_type(structstack_st_OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_OPENSSL_STRING_compfunc_type(sk_OPENSSL_STRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_OPENSSL_STRING_copyfunc_type(sk_OPENSSL_STRING_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_OPENSSL_STRING_freefunc_type(sk_OPENSSL_STRING_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "ossl_check_OPENSSL_CSTRING_type(char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_OPENSSL_CSTRING_sk_type(structstack_st_OPENSSL_CSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_OPENSSL_CSTRING_sk_type(structstack_st_OPENSSL_CSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_OPENSSL_CSTRING_compfunc_type(sk_OPENSSL_CSTRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_OPENSSL_CSTRING_copyfunc_type(sk_OPENSSL_CSTRING_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_OPENSSL_CSTRING_freefunc_type(sk_OPENSSL_CSTRING_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "ossl_check_OPENSSL_BLOCK_type(void*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_OPENSSL_BLOCK_sk_type(structstack_st_OPENSSL_BLOCK*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_OPENSSL_BLOCK_sk_type(structstack_st_OPENSSL_BLOCK*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_OPENSSL_BLOCK_compfunc_type(sk_OPENSSL_BLOCK_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_OPENSSL_BLOCK_copyfunc_type(sk_OPENSSL_BLOCK_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_OPENSSL_BLOCK_freefunc_type(sk_OPENSSL_BLOCK_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "ossl_check_void_type(void*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_void_sk_type(structstack_st_void*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_void_sk_type(structstack_st_void*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_void_compfunc_type(sk_void_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_void_copyfunc_type(sk_void_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_void_freefunc_type(sk_void_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "pthread_equal(pthread_t;pthread_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ssize_t"
 , "c2" : "read(int;void*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ssize_t"
 , "c2" : "readlink(char*;char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ssize_t"
 , "c2" : "readlinkat(int;char*;char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "getcwd(char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "getwd(char*)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "size_t"
 , "c2" : "confstr(int;char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "getgroups(int;__gid_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "ttyname_r(int;char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "getlogin_r(char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "gethostname(char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "getdomainname(char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " void  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "bcopy(void*;void*;size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "bzero(void*;size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "memcpy(void*;void*;size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "memmove(void*;void*;size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "memset(void*;int;size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "explicit_bzero(void*;size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "strcpy(char*;char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "strncpy(char*;char*;size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "stpncpy(char*;char*;size_t)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "strcat(char*;char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "strncat(char*;char*;size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "BIO"
 , "c2" : "ossl_check_BIO_type(BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_BIO_sk_type(structstack_st_BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_BIO_sk_type(structstack_st_BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_BIO_compfunc_type(sk_BIO_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_BIO_copyfunc_type(sk_BIO_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_BIO_freefunc_type(sk_BIO_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_ALGOR"
 , "c2" : "ossl_check_X509_ALGOR_type(X509_ALGOR*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_ALGOR_sk_type(structstack_st_X509_ALGOR*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_ALGOR_sk_type(structstack_st_X509_ALGOR*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_ALGOR_compfunc_type(sk_X509_ALGOR_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_ALGOR_copyfunc_type(sk_X509_ALGOR_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_ALGOR_freefunc_type(sk_X509_ALGOR_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ASN1_STRING_TABLE"
 , "c2" : "ossl_check_ASN1_STRING_TABLE_type(ASN1_STRING_TABLE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ASN1_STRING_TABLE_sk_type(structstack_st_ASN1_STRING_TABLE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ASN1_STRING_TABLE_sk_type(structstack_st_ASN1_STRING_TABLE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ASN1_STRING_TABLE_compfunc_type(sk_ASN1_STRING_TABLE_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ASN1_STRING_TABLE_copyfunc_type(sk_ASN1_STRING_TABLE_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ASN1_STRING_TABLE_freefunc_type(sk_ASN1_STRING_TABLE_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ASN1_TYPE"
 , "c2" : "ossl_check_ASN1_TYPE_type(ASN1_TYPE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ASN1_TYPE_sk_type(structstack_st_ASN1_TYPE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ASN1_TYPE_sk_type(structstack_st_ASN1_TYPE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ASN1_TYPE_compfunc_type(sk_ASN1_TYPE_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ASN1_TYPE_copyfunc_type(sk_ASN1_TYPE_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ASN1_TYPE_freefunc_type(sk_ASN1_TYPE_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ASN1_OBJECT"
 , "c2" : "ossl_check_ASN1_OBJECT_type(ASN1_OBJECT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ASN1_OBJECT_sk_type(structstack_st_ASN1_OBJECT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ASN1_OBJECT_sk_type(structstack_st_ASN1_OBJECT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ASN1_OBJECT_compfunc_type(sk_ASN1_OBJECT_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ASN1_OBJECT_copyfunc_type(sk_ASN1_OBJECT_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ASN1_OBJECT_freefunc_type(sk_ASN1_OBJECT_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ASN1_INTEGER"
 , "c2" : "ossl_check_ASN1_INTEGER_type(ASN1_INTEGER*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ASN1_INTEGER_sk_type(structstack_st_ASN1_INTEGER*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ASN1_INTEGER_sk_type(structstack_st_ASN1_INTEGER*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ASN1_INTEGER_compfunc_type(sk_ASN1_INTEGER_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ASN1_INTEGER_copyfunc_type(sk_ASN1_INTEGER_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ASN1_INTEGER_freefunc_type(sk_ASN1_INTEGER_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ASN1_UTF8STRING"
 , "c2" : "ossl_check_ASN1_UTF8STRING_type(ASN1_UTF8STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ASN1_UTF8STRING_sk_type(structstack_st_ASN1_UTF8STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ASN1_UTF8STRING_sk_type(structstack_st_ASN1_UTF8STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ASN1_UTF8STRING_compfunc_type(sk_ASN1_UTF8STRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ASN1_UTF8STRING_copyfunc_type(sk_ASN1_UTF8STRING_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ASN1_UTF8STRING_freefunc_type(sk_ASN1_UTF8STRING_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ASN1_GENERALSTRING"
 , "c2" : "ossl_check_ASN1_GENERALSTRING_type(ASN1_GENERALSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ASN1_GENERALSTRING_sk_type(structstack_st_ASN1_GENERALSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ASN1_GENERALSTRING_sk_type(structstack_st_ASN1_GENERALSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ASN1_GENERALSTRING_compfunc_type(sk_ASN1_GENERALSTRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ASN1_GENERALSTRING_copyfunc_type(sk_ASN1_GENERALSTRING_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ASN1_GENERALSTRING_freefunc_type(sk_ASN1_GENERALSTRING_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STRING"
 , "c2" : "ossl_check_OPENSSL_STRING_lh_plain_type(OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STRING"
 , "c2" : "ossl_check_const_OPENSSL_STRING_lh_plain_type(OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LHASH"
 , "c2" : "ossl_check_const_OPENSSL_STRING_lh_type(structlhash_st_OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LHASH"
 , "c2" : "ossl_check_OPENSSL_STRING_lh_type(structlhash_st_OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_COMPFUNC"
 , "c2" : "ossl_check_OPENSSL_STRING_lh_compfunc_type(lh_OPENSSL_STRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_HASHFUNC"
 , "c2" : "ossl_check_OPENSSL_STRING_lh_hashfunc_type(lh_OPENSSL_STRING_hashfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_DOALL_FUNC"
 , "c2" : "ossl_check_OPENSSL_STRING_lh_doallfunc_type(lh_OPENSSL_STRING_doallfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_CSTRING"
 , "c2" : "ossl_check_OPENSSL_CSTRING_lh_plain_type(OPENSSL_CSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_CSTRING"
 , "c2" : "ossl_check_const_OPENSSL_CSTRING_lh_plain_type(OPENSSL_CSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LHASH"
 , "c2" : "ossl_check_const_OPENSSL_CSTRING_lh_type(structlhash_st_OPENSSL_CSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LHASH"
 , "c2" : "ossl_check_OPENSSL_CSTRING_lh_type(structlhash_st_OPENSSL_CSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_COMPFUNC"
 , "c2" : "ossl_check_OPENSSL_CSTRING_lh_compfunc_type(lh_OPENSSL_CSTRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_HASHFUNC"
 , "c2" : "ossl_check_OPENSSL_CSTRING_lh_hashfunc_type(lh_OPENSSL_CSTRING_hashfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_DOALL_FUNC"
 , "c2" : "ossl_check_OPENSSL_CSTRING_lh_doallfunc_type(lh_OPENSSL_CSTRING_doallfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ERR_GET_LIB(unsignedlong)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ERR_GET_FUNC(unsignedlong)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ERR_GET_RFLAGS(unsignedlong)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ERR_GET_REASON(unsignedlong)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ERR_FATAL_ERROR(unsignedlong)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ERR_COMMON_ERROR(unsignedlong)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ERR_STRING_DATA"
 , "c2" : "ossl_check_ERR_STRING_DATA_lh_plain_type(ERR_STRING_DATA*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ERR_STRING_DATA"
 , "c2" : "ossl_check_const_ERR_STRING_DATA_lh_plain_type(ERR_STRING_DATA*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LHASH"
 , "c2" : "ossl_check_const_ERR_STRING_DATA_lh_type(structlhash_st_ERR_STRING_DATA*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LHASH"
 , "c2" : "ossl_check_ERR_STRING_DATA_lh_type(structlhash_st_ERR_STRING_DATA*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_COMPFUNC"
 , "c2" : "ossl_check_ERR_STRING_DATA_lh_compfunc_type(lh_ERR_STRING_DATA_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_HASHFUNC"
 , "c2" : "ossl_check_ERR_STRING_DATA_lh_hashfunc_type(lh_ERR_STRING_DATA_hashfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_DOALL_FUNC"
 , "c2" : "ossl_check_ERR_STRING_DATA_lh_doallfunc_type(lh_ERR_STRING_DATA_doallfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_NAME"
 , "c2" : "ossl_check_X509_NAME_type(X509_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_NAME_sk_type(structstack_st_X509_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_NAME_sk_type(structstack_st_X509_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_NAME_compfunc_type(sk_X509_NAME_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_NAME_copyfunc_type(sk_X509_NAME_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_NAME_freefunc_type(sk_X509_NAME_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509"
 , "c2" : "ossl_check_X509_type(X509*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_sk_type(structstack_st_X509*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_sk_type(structstack_st_X509*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_compfunc_type(sk_X509_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_copyfunc_type(sk_X509_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_freefunc_type(sk_X509_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_REVOKED"
 , "c2" : "ossl_check_X509_REVOKED_type(X509_REVOKED*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_REVOKED_sk_type(structstack_st_X509_REVOKED*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_REVOKED_sk_type(structstack_st_X509_REVOKED*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_REVOKED_compfunc_type(sk_X509_REVOKED_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_REVOKED_copyfunc_type(sk_X509_REVOKED_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_REVOKED_freefunc_type(sk_X509_REVOKED_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_CRL"
 , "c2" : "ossl_check_X509_CRL_type(X509_CRL*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_CRL_sk_type(structstack_st_X509_CRL*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_CRL_sk_type(structstack_st_X509_CRL*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_CRL_compfunc_type(sk_X509_CRL_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_CRL_copyfunc_type(sk_X509_CRL_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_CRL_freefunc_type(sk_X509_CRL_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_NAME_ENTRY"
 , "c2" : "ossl_check_X509_NAME_ENTRY_type(X509_NAME_ENTRY*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_NAME_ENTRY_sk_type(structstack_st_X509_NAME_ENTRY*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_NAME_ENTRY_sk_type(structstack_st_X509_NAME_ENTRY*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_NAME_ENTRY_compfunc_type(sk_X509_NAME_ENTRY_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_NAME_ENTRY_copyfunc_type(sk_X509_NAME_ENTRY_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_NAME_ENTRY_freefunc_type(sk_X509_NAME_ENTRY_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_EXTENSION"
 , "c2" : "ossl_check_X509_EXTENSION_type(X509_EXTENSION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_EXTENSION_sk_type(structstack_st_X509_EXTENSION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_EXTENSION_sk_type(structstack_st_X509_EXTENSION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_EXTENSION_compfunc_type(sk_X509_EXTENSION_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_EXTENSION_copyfunc_type(sk_X509_EXTENSION_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_EXTENSION_freefunc_type(sk_X509_EXTENSION_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_ATTRIBUTE"
 , "c2" : "ossl_check_X509_ATTRIBUTE_type(X509_ATTRIBUTE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_ATTRIBUTE_sk_type(structstack_st_X509_ATTRIBUTE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_ATTRIBUTE_sk_type(structstack_st_X509_ATTRIBUTE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_ATTRIBUTE_compfunc_type(sk_X509_ATTRIBUTE_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_ATTRIBUTE_copyfunc_type(sk_X509_ATTRIBUTE_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_ATTRIBUTE_freefunc_type(sk_X509_ATTRIBUTE_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_TRUST"
 , "c2" : "ossl_check_X509_TRUST_type(X509_TRUST*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_TRUST_sk_type(structstack_st_X509_TRUST*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_TRUST_sk_type(structstack_st_X509_TRUST*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_TRUST_compfunc_type(sk_X509_TRUST_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_TRUST_copyfunc_type(sk_X509_TRUST_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_TRUST_freefunc_type(sk_X509_TRUST_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_INFO"
 , "c2" : "ossl_check_X509_INFO_type(X509_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_INFO_sk_type(structstack_st_X509_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_INFO_sk_type(structstack_st_X509_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_INFO_compfunc_type(sk_X509_INFO_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_INFO_copyfunc_type(sk_X509_INFO_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_INFO_freefunc_type(sk_X509_INFO_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_LOOKUP"
 , "c2" : "ossl_check_X509_LOOKUP_type(X509_LOOKUP*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_LOOKUP_sk_type(structstack_st_X509_LOOKUP*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_LOOKUP_sk_type(structstack_st_X509_LOOKUP*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_LOOKUP_compfunc_type(sk_X509_LOOKUP_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_LOOKUP_copyfunc_type(sk_X509_LOOKUP_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_LOOKUP_freefunc_type(sk_X509_LOOKUP_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_OBJECT"
 , "c2" : "ossl_check_X509_OBJECT_type(X509_OBJECT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_OBJECT_sk_type(structstack_st_X509_OBJECT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_OBJECT_sk_type(structstack_st_X509_OBJECT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_OBJECT_compfunc_type(sk_X509_OBJECT_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_OBJECT_copyfunc_type(sk_X509_OBJECT_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_OBJECT_freefunc_type(sk_X509_OBJECT_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_VERIFY_PARAM"
 , "c2" : "ossl_check_X509_VERIFY_PARAM_type(X509_VERIFY_PARAM*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_VERIFY_PARAM_sk_type(structstack_st_X509_VERIFY_PARAM*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_VERIFY_PARAM_sk_type(structstack_st_X509_VERIFY_PARAM*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_VERIFY_PARAM_compfunc_type(sk_X509_VERIFY_PARAM_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_VERIFY_PARAM_copyfunc_type(sk_X509_VERIFY_PARAM_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_VERIFY_PARAM_freefunc_type(sk_X509_VERIFY_PARAM_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "PKCS7_SIGNER_INFO"
 , "c2" : "ossl_check_PKCS7_SIGNER_INFO_type(PKCS7_SIGNER_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_PKCS7_SIGNER_INFO_sk_type(structstack_st_PKCS7_SIGNER_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_PKCS7_SIGNER_INFO_sk_type(structstack_st_PKCS7_SIGNER_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_PKCS7_SIGNER_INFO_compfunc_type(sk_PKCS7_SIGNER_INFO_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_PKCS7_SIGNER_INFO_copyfunc_type(sk_PKCS7_SIGNER_INFO_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_PKCS7_SIGNER_INFO_freefunc_type(sk_PKCS7_SIGNER_INFO_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "PKCS7_RECIP_INFO"
 , "c2" : "ossl_check_PKCS7_RECIP_INFO_type(PKCS7_RECIP_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_PKCS7_RECIP_INFO_sk_type(structstack_st_PKCS7_RECIP_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_PKCS7_RECIP_INFO_sk_type(structstack_st_PKCS7_RECIP_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_PKCS7_RECIP_INFO_compfunc_type(sk_PKCS7_RECIP_INFO_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_PKCS7_RECIP_INFO_copyfunc_type(sk_PKCS7_RECIP_INFO_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_PKCS7_RECIP_INFO_freefunc_type(sk_PKCS7_RECIP_INFO_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "PKCS7"
 , "c2" : "ossl_check_PKCS7_type(PKCS7*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_PKCS7_sk_type(structstack_st_PKCS7*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_PKCS7_sk_type(structstack_st_PKCS7*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_PKCS7_compfunc_type(sk_PKCS7_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_PKCS7_copyfunc_type(sk_PKCS7_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_PKCS7_freefunc_type(sk_PKCS7_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SCT"
 , "c2" : "ossl_check_SCT_type(SCT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_SCT_sk_type(structstack_st_SCT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_SCT_sk_type(structstack_st_SCT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_SCT_compfunc_type(sk_SCT_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_SCT_copyfunc_type(sk_SCT_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_SCT_freefunc_type(sk_SCT_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CTLOG"
 , "c2" : "ossl_check_CTLOG_type(CTLOG*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_CTLOG_sk_type(structstack_st_CTLOG*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_CTLOG_sk_type(structstack_st_CTLOG*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_CTLOG_compfunc_type(sk_CTLOG_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_CTLOG_copyfunc_type(sk_CTLOG_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_CTLOG_freefunc_type(sk_CTLOG_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SRTP_PROTECTION_PROFILE"
 , "c2" : "ossl_check_SRTP_PROTECTION_PROFILE_type(SRTP_PROTECTION_PROFILE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_SRTP_PROTECTION_PROFILE_sk_type(structstack_st_SRTP_PROTECTION_PROFILE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_SRTP_PROTECTION_PROFILE_sk_type(structstack_st_SRTP_PROTECTION_PROFILE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_SRTP_PROTECTION_PROFILE_compfunc_type(sk_SRTP_PROTECTION_PROFILE_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_SRTP_PROTECTION_PROFILE_copyfunc_type(sk_SRTP_PROTECTION_PROFILE_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_SRTP_PROTECTION_PROFILE_freefunc_type(sk_SRTP_PROTECTION_PROFILE_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SSL_CIPHER"
 , "c2" : "ossl_check_SSL_CIPHER_type(SSL_CIPHER*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_SSL_CIPHER_sk_type(structstack_st_SSL_CIPHER*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_SSL_CIPHER_sk_type(structstack_st_SSL_CIPHER*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_SSL_CIPHER_compfunc_type(sk_SSL_CIPHER_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_SSL_CIPHER_copyfunc_type(sk_SSL_CIPHER_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_SSL_CIPHER_freefunc_type(sk_SSL_CIPHER_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SSL_COMP"
 , "c2" : "ossl_check_SSL_COMP_type(SSL_COMP*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_SSL_COMP_sk_type(structstack_st_SSL_COMP*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_SSL_COMP_sk_type(structstack_st_SSL_COMP*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_SSL_COMP_compfunc_type(sk_SSL_COMP_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_SSL_COMP_copyfunc_type(sk_SSL_COMP_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_SSL_COMP_freefunc_type(sk_SSL_COMP_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "packet_forward(PACKET*;size_t)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "size_t"
 , "c2" : "PACKET_remaining(PACKET*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  char "
 , "c2" : "PACKET_end(PACKET*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  char "
 , "c2" : "PACKET_data(PACKET*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_buf_init(PACKET*;unsignedchar*;size_t)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "PACKET_null_init(PACKET*)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_equal(PACKET*;void*;size_t)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_peek_sub_packet(PACKET*;PACKET*;size_t)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_get_sub_packet(PACKET*;PACKET*;size_t)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_peek_net_2(PACKET*;unsignedint*)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_get_net_2(PACKET*;unsignedint*)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_get_net_2_len(PACKET*;size_t*)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_peek_net_3(PACKET*;unsignedlong*)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_get_net_3(PACKET*;unsignedlong*)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_get_net_3_len(PACKET*;size_t*)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_peek_net_4(PACKET*;unsignedlong*)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_get_net_4(PACKET*;unsignedlong*)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_get_net_4_len(PACKET*;size_t*)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_peek_1(PACKET*;unsignedint*)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_get_1(PACKET*;unsignedint*)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_get_1_len(PACKET*;size_t*)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_peek_4(PACKET*;unsignedlong*)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_get_4(PACKET*;unsignedlong*)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_peek_bytes(PACKET*;unsignedchar*;size_t)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_get_bytes(PACKET*;unsignedchar*;size_t)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_peek_copy_bytes(PACKET*;unsignedchar*;size_t)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_copy_bytes(PACKET*;unsignedchar*;size_t)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_copy_all(PACKET*;unsignedchar*;size_t;size_t*)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_memdup(PACKET*;unsignedchar*;size_t*)"
 , "c3" : "3"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_strndup(PACKET*;char*)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_contains_zero_byte(PACKET*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_forward(PACKET*;size_t)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_get_length_prefixed_1(PACKET*;PACKET*)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_as_length_prefixed_1(PACKET*;PACKET*)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_get_length_prefixed_2(PACKET*;PACKET*)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_as_length_prefixed_2(PACKET*;PACKET*)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "PACKET_get_length_prefixed_3(PACKET*;PACKET*)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_danetls_record_num(structstack_st_danetls_record*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "danetls_record"
 , "c2" : "sk_danetls_record_value(structstack_st_danetls_record*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_danetls_record"
 , "c2" : "sk_danetls_record_new(sk_danetls_record_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_danetls_record"
 , "c2" : "sk_danetls_record_new_null(void)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_danetls_record"
 , "c2" : "sk_danetls_record_new_reserve(sk_danetls_record_compfunc;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_danetls_record_reserve(structstack_st_danetls_record*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "sk_danetls_record_free(structstack_st_danetls_record*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "sk_danetls_record_zero(structstack_st_danetls_record*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "danetls_record"
 , "c2" : "sk_danetls_record_delete(structstack_st_danetls_record*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "danetls_record"
 , "c2" : "sk_danetls_record_delete_ptr(structstack_st_danetls_record*;danetls_record*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_danetls_record_push(structstack_st_danetls_record*;danetls_record*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_danetls_record_unshift(structstack_st_danetls_record*;danetls_record*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "danetls_record"
 , "c2" : "sk_danetls_record_pop(structstack_st_danetls_record*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "danetls_record"
 , "c2" : "sk_danetls_record_shift(structstack_st_danetls_record*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "sk_danetls_record_pop_free(structstack_st_danetls_record*;sk_danetls_record_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_danetls_record_insert(structstack_st_danetls_record*;danetls_record*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "danetls_record"
 , "c2" : "sk_danetls_record_set(structstack_st_danetls_record*;int;danetls_record*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_danetls_record_find(structstack_st_danetls_record*;danetls_record*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_danetls_record_find_ex(structstack_st_danetls_record*;danetls_record*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "sk_danetls_record_sort(structstack_st_danetls_record*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_danetls_record_is_sorted(structstack_st_danetls_record*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_danetls_record"
 , "c2" : "sk_danetls_record_dup(structstack_st_danetls_record*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_danetls_record"
 , "c2" : "sk_danetls_record_deep_copy(structstack_st_danetls_record*;sk_danetls_record_copyfunc;sk_danetls_record_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "sk_danetls_record_compfunc"
 , "c2" : "sk_danetls_record_set_cmp_func(structstack_st_danetls_record*;sk_danetls_record_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "CRYPTO_UP_REF(int*;int*;void*)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "CRYPTO_DOWN_REF(int*;int*;void*)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " struct lhash_st_SSL_SESSION"
 , "c2" : "lh_SSL_SESSION_new(unsignedlong;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_SSL_SESSION_free(structlhash_st_SSL_SESSION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_SSL_SESSION_flush(structlhash_st_SSL_SESSION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SSL_SESSION"
 , "c2" : "lh_SSL_SESSION_insert(structlhash_st_SSL_SESSION*;SSL_SESSION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SSL_SESSION"
 , "c2" : "lh_SSL_SESSION_delete(structlhash_st_SSL_SESSION*;SSL_SESSION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SSL_SESSION"
 , "c2" : "lh_SSL_SESSION_retrieve(structlhash_st_SSL_SESSION*;SSL_SESSION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "lh_SSL_SESSION_error(structlhash_st_SSL_SESSION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  long "
 , "c2" : "lh_SSL_SESSION_num_items(structlhash_st_SSL_SESSION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_SSL_SESSION_node_stats_bio(structlhash_st_SSL_SESSION*;BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_SSL_SESSION_node_usage_stats_bio(structlhash_st_SSL_SESSION*;BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_SSL_SESSION_stats_bio(structlhash_st_SSL_SESSION*;BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  long "
 , "c2" : "lh_SSL_SESSION_get_down_load(structlhash_st_SSL_SESSION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_SSL_SESSION_set_down_load(structlhash_st_SSL_SESSION*;unsignedlong)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_SSL_SESSION_doall(structlhash_st_SSL_SESSION*;void)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct lhash_st_X509_NAME"
 , "c2" : "lh_X509_NAME_new(unsignedlong;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_X509_NAME_free(structlhash_st_X509_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_X509_NAME_flush(structlhash_st_X509_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_NAME"
 , "c2" : "lh_X509_NAME_insert(structlhash_st_X509_NAME*;X509_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_NAME"
 , "c2" : "lh_X509_NAME_delete(structlhash_st_X509_NAME*;X509_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_NAME"
 , "c2" : "lh_X509_NAME_retrieve(structlhash_st_X509_NAME*;X509_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "lh_X509_NAME_error(structlhash_st_X509_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  long "
 , "c2" : "lh_X509_NAME_num_items(structlhash_st_X509_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_X509_NAME_node_stats_bio(structlhash_st_X509_NAME*;BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_X509_NAME_node_usage_stats_bio(structlhash_st_X509_NAME*;BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_X509_NAME_stats_bio(structlhash_st_X509_NAME*;BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  long "
 , "c2" : "lh_X509_NAME_get_down_load(structlhash_st_X509_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_X509_NAME_set_down_load(structlhash_st_X509_NAME*;unsignedlong)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_X509_NAME_doall(structlhash_st_X509_NAME*;void)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ssl_has_cert(SSL*;int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "tls1_get_peer_groups(SSL*;uint16_t*;size_t*)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_EX_CALLBACK_num(structstack_st_EX_CALLBACK*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "EX_CALLBACK"
 , "c2" : "sk_EX_CALLBACK_value(structstack_st_EX_CALLBACK*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_EX_CALLBACK"
 , "c2" : "sk_EX_CALLBACK_new(sk_EX_CALLBACK_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_EX_CALLBACK"
 , "c2" : "sk_EX_CALLBACK_new_null(void)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_EX_CALLBACK"
 , "c2" : "sk_EX_CALLBACK_new_reserve(sk_EX_CALLBACK_compfunc;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_EX_CALLBACK_reserve(structstack_st_EX_CALLBACK*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "sk_EX_CALLBACK_free(structstack_st_EX_CALLBACK*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "sk_EX_CALLBACK_zero(structstack_st_EX_CALLBACK*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "EX_CALLBACK"
 , "c2" : "sk_EX_CALLBACK_delete(structstack_st_EX_CALLBACK*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "EX_CALLBACK"
 , "c2" : "sk_EX_CALLBACK_delete_ptr(structstack_st_EX_CALLBACK*;EX_CALLBACK*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_EX_CALLBACK_push(structstack_st_EX_CALLBACK*;EX_CALLBACK*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_EX_CALLBACK_unshift(structstack_st_EX_CALLBACK*;EX_CALLBACK*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "EX_CALLBACK"
 , "c2" : "sk_EX_CALLBACK_pop(structstack_st_EX_CALLBACK*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "EX_CALLBACK"
 , "c2" : "sk_EX_CALLBACK_shift(structstack_st_EX_CALLBACK*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "sk_EX_CALLBACK_pop_free(structstack_st_EX_CALLBACK*;sk_EX_CALLBACK_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_EX_CALLBACK_insert(structstack_st_EX_CALLBACK*;EX_CALLBACK*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "EX_CALLBACK"
 , "c2" : "sk_EX_CALLBACK_set(structstack_st_EX_CALLBACK*;int;EX_CALLBACK*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_EX_CALLBACK_find(structstack_st_EX_CALLBACK*;EX_CALLBACK*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_EX_CALLBACK_find_ex(structstack_st_EX_CALLBACK*;EX_CALLBACK*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "sk_EX_CALLBACK_sort(structstack_st_EX_CALLBACK*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_EX_CALLBACK_is_sorted(structstack_st_EX_CALLBACK*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_EX_CALLBACK"
 , "c2" : "sk_EX_CALLBACK_dup(structstack_st_EX_CALLBACK*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_EX_CALLBACK"
 , "c2" : "sk_EX_CALLBACK_deep_copy(structstack_st_EX_CALLBACK*;sk_EX_CALLBACK_copyfunc;sk_EX_CALLBACK_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "sk_EX_CALLBACK_compfunc"
 , "c2" : "sk_EX_CALLBACK_set_cmp_func(structstack_st_EX_CALLBACK*;sk_EX_CALLBACK_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct lhash_st_MEM"
 , "c2" : "lh_MEM_new(unsignedlong;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_MEM_free(structlhash_st_MEM*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_MEM_flush(structlhash_st_MEM*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "MEM"
 , "c2" : "lh_MEM_insert(structlhash_st_MEM*;MEM*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "MEM"
 , "c2" : "lh_MEM_delete(structlhash_st_MEM*;MEM*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "MEM"
 , "c2" : "lh_MEM_retrieve(structlhash_st_MEM*;MEM*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "lh_MEM_error(structlhash_st_MEM*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  long "
 , "c2" : "lh_MEM_num_items(structlhash_st_MEM*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_MEM_node_stats_bio(structlhash_st_MEM*;BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_MEM_node_usage_stats_bio(structlhash_st_MEM*;BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_MEM_stats_bio(structlhash_st_MEM*;BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  long "
 , "c2" : "lh_MEM_get_down_load(structlhash_st_MEM*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_MEM_set_down_load(structlhash_st_MEM*;unsignedlong)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_MEM_doall(structlhash_st_MEM*;void)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "ossl_sleep(unsignedlong)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ossl_ends_with_dirsep(char*)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ossl_is_absolute_path(char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "SSL3_RECORD_clear(SSL3_RECORD*;size_t)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "SSL3_RECORD_release(SSL3_RECORD*;size_t)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "SSL3_RECORD_set_seq_num(SSL3_RECORD*;unsignedchar*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ssl3_record_app_data_waiting(SSL*)"
 , "c3" : "5"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "early_data_count_ok(SSL*;size_t;size_t;int)"
 , "c3" : "9"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ssl3_get_record(SSL*)"
 , "c3" : "85"
 , "c4" : "181"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ssl3_do_uncompress(SSL*;SSL3_RECORD*)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ssl3_do_compress(SSL*;SSL3_RECORD*)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ssl3_enc(SSL*;SSL3_RECORD*;size_t;int;SSL_MAC_BUF*;size_t)"
 , "c3" : "20"
 , "c4" : "37"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "tls1_enc(SSL*;SSL3_RECORD*;size_t;int;SSL_MAC_BUF*;size_t)"
 , "c3" : "71"
 , "c4" : "132"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "ssl3_cbc_record_digest_supported(EVP_MD_CTX*)"
 , "c3" : "7"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "n_ssl3_mac(SSL*;SSL3_RECORD*;unsignedchar*;int)"
 , "c3" : "9"
 , "c4" : "39"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "tls1_mac(SSL*;SSL3_RECORD*;unsignedchar*;int)"
 , "c3" : "22"
 , "c4" : "55"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "dtls1_process_record(SSL*;DTLS1_BITMAP*)"
 , "c3" : "23"
 , "c4" : "62"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "dtls1_get_record(SSL*)"
 , "c3" : "23"
 , "c4" : "72"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "dtls_buffer_listen_record(SSL*;size_t;unsignedchar*;size_t)"
 , "c3" : "2"
 , "c4" : "12"
}} 
] 
}} 
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
 , "c4" : "43"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000006"
 , "c3" : "Risk of infinite while loop"
 , "c4" : "4"
}}
,
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
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "33"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "47"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03274"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#3274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03274] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07123"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#7123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07123] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07125"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#7125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07125] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "08228"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#8228"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[08228] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "08424"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#8424"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[08424] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "08425"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#8425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[08425] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "08426"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#8426"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[08426] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "08430"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#8430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[08430] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09016"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#9016"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09016] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09018"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#9018"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09018] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09021"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#9021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09021] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09860"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#9860"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09860] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10941"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#10941"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10941] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10963"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#10963"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10963] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10969"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#10969"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10969] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10989"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#10989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10989] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10995"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#10995"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10995] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "12100"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#12100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[12100] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "12101"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#12101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[12101] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "12780"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#12780"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[12780] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13856"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#13856"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13856] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13858"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#13858"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13858] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "14952"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#14952"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14952] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14993"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#14993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14993] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15035"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#15035"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15035] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15070"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#15070"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15070] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15254"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#15254"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[15254] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "15276"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#15276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[15276] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "15295"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#15295"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[15295] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "15318"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#15318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[15318] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "15338"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#15338"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[15338] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "15518"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#15518"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[15518] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18022"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18022"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[18022] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18069"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[18069] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18107"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[18107] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18134"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18134"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18134] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18134"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18134"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18134] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18134"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18134"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18134] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18224"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18224"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[18224] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18264"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18264"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18264] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18545"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18545"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[18545] The expression  ! (0) is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "18583"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18583"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18583] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18607"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18607"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18607] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18608"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18608"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18608] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18666"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18666"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18666] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18675"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18675"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[18675] The expression (0) is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "18676"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18676"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18676] goto statement jump to skip_decryption"
}} 
,
{ "ligne" : {
   "c1" : "18709"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18709"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[18709] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18775"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18775"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18775] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18788"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18788"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18788] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18793"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18793"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18793] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18796"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18796"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18796] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18810"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18810"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18810] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18816"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18816"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18816] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18816"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18816"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[18816] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "18812"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18812"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[18812] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "18819"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18819"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18819] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18819"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18819"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[18819] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "18863"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18863"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18863] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18884"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18884"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18884] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18911"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18911"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18911] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18926"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18926"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18926] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18946"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18946"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18946] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18964"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18964"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18964] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18984"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18984"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18984] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18988"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18988"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[18988] The expression  ! (0) is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "18994"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18994"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18994] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19004"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19004] The expression  ! (0) is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "19010"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19010"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19010] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19024"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19024"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19024] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19027"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19027"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19027] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19036"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19036"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19036] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19040"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19040"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19040] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19123"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19123] The expression sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19199"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19199"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19199] The expression  ! sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19257"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19257] The expression  ! sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19309"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19309"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19309] The expression sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19439"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19439"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19439] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19446"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19446"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19446] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19448"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19448"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19448] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19448"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19448"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19448] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19448"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19448"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19448] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19448"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19448"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19448] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19448"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19448"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19448] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19477"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19477"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19477] The expression sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19507"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19507"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19507] The expression  ! sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19515"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19515"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19515] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19548"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19548"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19548] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19571"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19571"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19571] The expression provided applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19594"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19594"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19594] The expression  ! sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19655"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19655"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19655] The expression  ! sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19714"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19714"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19714] The expression pad applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19746"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19746"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19746] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19748"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19748"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19748] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19753"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19753"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19753] The expression sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19807"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19807"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19807] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19807"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19807"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19807] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19807"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19807"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19807] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19807"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19807"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19807] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19807"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19807"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19807] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19838"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19838"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19838] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19854"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19854"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19854] The expression sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19868"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19868"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19868] The expression stream_mac applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19889"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19889"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19889] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19891"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19891"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19891] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19891"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19891"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19891] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19891"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19891"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19891] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19891"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19891"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19891] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19891"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19891"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19891] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19933"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19933"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19933] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19933"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19933"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19933] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "19929"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19929"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[19929] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "19938"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19938"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19938] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19938"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19938"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19938] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "19951"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19951"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19951] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19951"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19951"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19951] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "19947"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19947"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[19947] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "19954"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19954"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19954] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19954"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19954"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19954] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "20024"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20024"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20024] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20077"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20077"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20077] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20081"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20081"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20081] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20082"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20082"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20082] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20089"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20089"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20089] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20089"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20089"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20089] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "20085"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20085"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[20085] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "20092"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20092"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20092] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20092"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20092"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20092] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "20126"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20126"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20126] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20127"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20127"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20127] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20149"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20149"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20149] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20157"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20157"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20157] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20176"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20176"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20176] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20181"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20181"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20181] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20199"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20199"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20199] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20240"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20240"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20240] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20241"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20241"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20241] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20244"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20244"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20244] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20259"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20259"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20259] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20259"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20259"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20259] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20259"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20259"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20259] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20264"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20264"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20264] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20264"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20264"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20264] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20264"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20264"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20264] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20276"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20276"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20276] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20277"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20277"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20277] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20285"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20285"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20285] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20286"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20286"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20286] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20293"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20293"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20293] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20294"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20294"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20294] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20307"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20307"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20307] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20308"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20308"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20308] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20329"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20329"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20329] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20330"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20330"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20330] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20339"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20339"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20339] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20349"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20349"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20349] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20350"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20350"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20350] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20356"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20356"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20356] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20357"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20357"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20357] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20366"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20366"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20366] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20374"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20374"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20374] The expression is_next_epoch applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20385"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20385"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20385] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20386"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20386"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20386] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20396"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20396"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20396] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20397"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20397"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20397] goto statement jump to again"
}} 
]
};
console.log('leListeStr 99 main end');
