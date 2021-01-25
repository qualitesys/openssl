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
   "c1" : "07128"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#7128"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07128] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07130"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#7130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07130] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "08233"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#8233"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[08233] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "08429"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#8429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[08429] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
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
   "c1" : "08431"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#8431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[08431] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "08435"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#8435"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[08435] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
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
   "c1" : "09023"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#9023"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09023] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09026"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#9026"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09026] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09865"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#9865"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09865] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10946"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#10946"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10946] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10968"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#10968"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10968] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10974"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#10974"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10974] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10994"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#10994"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10994] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "11000"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#11000"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[11000] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "12105"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#12105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[12105] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "12106"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#12106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[12106] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "12785"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#12785"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[12785] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13861"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#13861"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13861] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13863"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#13863"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13863] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "14957"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#14957"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14957] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14998"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#14998"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14998] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15040"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#15040"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15040] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15075"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#15075"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15075] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15259"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#15259"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[15259] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "15281"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#15281"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[15281] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "15300"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#15300"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[15300] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "15323"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#15323"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[15323] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "15343"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#15343"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[15343] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "15523"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#15523"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[15523] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18027"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18027"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[18027] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18074"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18074"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[18074] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18112"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[18112] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18139"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18139"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18139] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18139"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18139"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18139] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18139"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18139"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18139] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18229"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18229"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[18229] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18269"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18269"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18269] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18550"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18550"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[18550] The expression  ! (0) is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "18588"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18588"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18588] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18612"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18612"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18612] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18613"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18613"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18613] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18671"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18671"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18671] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18680"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18680"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[18680] The expression (0) is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "18681"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18681"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18681] goto statement jump to skip_decryption"
}} 
,
{ "ligne" : {
   "c1" : "18714"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18714"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[18714] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18780"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18780"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18780] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18793"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18793"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18793] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18798"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18798"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18798] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18801"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18801"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18801] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18815"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18815"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18815] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18821"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18821"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18821] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18821"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18821"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[18821] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "18817"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18817"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[18817] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "18824"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18824"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18824] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18824"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18824"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[18824] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "18868"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18868"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18868] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18889"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18889"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18889] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18916"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18916"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18916] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18931"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18931"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18931] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18951"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18951"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18951] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18969"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18969"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18969] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18989"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18989"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18989] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18993"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[18993] The expression  ! (0) is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "18999"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#18999"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18999] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19009"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19009"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19009] The expression  ! (0) is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "19015"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19015"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19015] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19029"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19029"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19029] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19032"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19032"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19032] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19041"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19041"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19041] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19045"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19045"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19045] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19128"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19128"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19128] The expression sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19204"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19204"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19204] The expression  ! sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19262"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19262"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19262] The expression  ! sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19314"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19314"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19314] The expression sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19444"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19444"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19444] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19451"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19451"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19451] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19453"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19453"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19453] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19453"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19453"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19453] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19453"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19453"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19453] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19453"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19453"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19453] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19453"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19453"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19453] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19482"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19482"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19482] The expression sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19512"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19512"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19512] The expression  ! sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19520"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19520"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19520] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19553"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19553"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19553] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19576"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19576"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19576] The expression provided applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19599"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19599"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19599] The expression  ! sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19660"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19660"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19660] The expression  ! sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19719"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19719"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19719] The expression pad applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19751"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19751"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19751] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19753"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19753"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19753] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19758"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19758"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19758] The expression sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19812"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19812"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19812] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19812"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19812"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19812] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19812"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19812"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19812] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19812"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19812"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19812] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19812"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19812"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19812] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19843"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19843"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19843] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19859"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19859"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19859] The expression sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19873"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19873"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19873] The expression stream_mac applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19894"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19894"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19894] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19896"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19896"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19896] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19896"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19896"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19896] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19896"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19896"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19896] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19896"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19896"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19896] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19896"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19896"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19896] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
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
   "c1" : "19934"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19934"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[19934] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "19943"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19943"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19943] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19943"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19943"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19943] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "19956"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19956"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19956] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19956"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19956"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19956] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "19952"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19952"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[19952] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "19959"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19959] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19959"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#19959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19959] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "20029"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20029] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
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
   "c1" : "20086"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20086"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20086] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20087"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20087"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20087] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20094"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20094"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20094] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20094"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20094"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20094] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "20090"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20090"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[20090] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "20097"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20097"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20097] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20097"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20097"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20097] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "20131"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20131"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20131] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20132"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20132"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20132] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20154"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20154"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20154] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20162"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20162"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20162] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20181"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20181"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20181] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20186"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20186"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20186] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20204"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20204"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20204] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20245"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20245"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20245] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20246"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20246"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20246] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20249"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20249"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20249] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
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
   "c1" : "20269"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20269"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20269] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20269"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20269"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20269] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20269"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20269"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20269] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20281"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20281"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20281] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20282"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20282"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20282] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20290"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20290"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20290] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20291"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20291"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20291] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20298"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20298"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20298] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20299"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20299"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20299] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20312"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20312"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20312] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20313"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20313"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20313] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20334"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20334"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20334] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20335"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20335"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20335] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20344"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20344"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20344] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20354"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20354"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20354] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20355"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20355"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20355] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20361"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20361"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20361] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20362"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20362"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20362] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20371"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20371"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20371] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20379"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20379"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20379] The expression is_next_epoch applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20390"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20390"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20390] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20391"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20391"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20391] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "20401"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20401"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20401] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20402"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20402"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20402] goto statement jump to again"
}} 
]
};
console.log('leListeStr 99 main end');
