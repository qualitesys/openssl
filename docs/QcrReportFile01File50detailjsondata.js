console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/apps/pkeyutl.c.html" 
 , "texte" : "File apps/pkeyutl.c 87 rule violations " 
 , "fic2"  : "./qc/apps/pkeyutl.c.xml" 
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
   "c1" : " struct cmsghdr"
 , "c2" : "__cmsg_nxthdr(structmsghdr*;structcmsghdr*)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ssize_t"
 , "c2" : "recv(int;void*;size_t;int)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ssize_t"
 , "c2" : "recvfrom(int;void*;size_t;int;structsockaddr*;socklen_t*)"
 , "c3" : "4"
 , "c4" : "3"
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
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "stat(char*;structstat*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "lstat(char*;structstat*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "fstat(int;structstat*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "fstatat(int;char*;structstat*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "mknod(char*;__mode_t;__dev_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "mknodat(int;char*;__mode_t;__dev_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "open(char*;int)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "openat(int;char*;int)"
 , "c3" : "5"
 , "c4" : "6"
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
   "c1" : "CONF_VALUE"
 , "c2" : "ossl_check_CONF_VALUE_type(CONF_VALUE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_CONF_VALUE_sk_type(structstack_st_CONF_VALUE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_CONF_VALUE_sk_type(structstack_st_CONF_VALUE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_CONF_VALUE_compfunc_type(sk_CONF_VALUE_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_CONF_VALUE_copyfunc_type(sk_CONF_VALUE_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_CONF_VALUE_freefunc_type(sk_CONF_VALUE_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CONF_VALUE"
 , "c2" : "ossl_check_CONF_VALUE_lh_plain_type(CONF_VALUE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CONF_VALUE"
 , "c2" : "ossl_check_const_CONF_VALUE_lh_plain_type(CONF_VALUE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LHASH"
 , "c2" : "ossl_check_const_CONF_VALUE_lh_type(structlhash_st_CONF_VALUE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LHASH"
 , "c2" : "ossl_check_CONF_VALUE_lh_type(structlhash_st_CONF_VALUE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_COMPFUNC"
 , "c2" : "ossl_check_CONF_VALUE_lh_compfunc_type(lh_CONF_VALUE_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_HASHFUNC"
 , "c2" : "ossl_check_CONF_VALUE_lh_hashfunc_type(lh_CONF_VALUE_hashfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_DOALL_FUNC"
 , "c2" : "ossl_check_CONF_VALUE_lh_doallfunc_type(lh_CONF_VALUE_doallfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_OPENSSL_PSTRING_num(structstack_st_OPENSSL_PSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STRING"
 , "c2" : "sk_OPENSSL_PSTRING_value(structstack_st_OPENSSL_PSTRING*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_OPENSSL_PSTRING"
 , "c2" : "sk_OPENSSL_PSTRING_new(sk_OPENSSL_PSTRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_OPENSSL_PSTRING"
 , "c2" : "sk_OPENSSL_PSTRING_new_null(void)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_OPENSSL_PSTRING"
 , "c2" : "sk_OPENSSL_PSTRING_new_reserve(sk_OPENSSL_PSTRING_compfunc;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_OPENSSL_PSTRING_reserve(structstack_st_OPENSSL_PSTRING*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "sk_OPENSSL_PSTRING_free(structstack_st_OPENSSL_PSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "sk_OPENSSL_PSTRING_zero(structstack_st_OPENSSL_PSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STRING"
 , "c2" : "sk_OPENSSL_PSTRING_delete(structstack_st_OPENSSL_PSTRING*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STRING"
 , "c2" : "sk_OPENSSL_PSTRING_delete_ptr(structstack_st_OPENSSL_PSTRING*;OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_OPENSSL_PSTRING_push(structstack_st_OPENSSL_PSTRING*;OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_OPENSSL_PSTRING_unshift(structstack_st_OPENSSL_PSTRING*;OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STRING"
 , "c2" : "sk_OPENSSL_PSTRING_pop(structstack_st_OPENSSL_PSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STRING"
 , "c2" : "sk_OPENSSL_PSTRING_shift(structstack_st_OPENSSL_PSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "sk_OPENSSL_PSTRING_pop_free(structstack_st_OPENSSL_PSTRING*;sk_OPENSSL_PSTRING_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_OPENSSL_PSTRING_insert(structstack_st_OPENSSL_PSTRING*;OPENSSL_STRING*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STRING"
 , "c2" : "sk_OPENSSL_PSTRING_set(structstack_st_OPENSSL_PSTRING*;int;OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_OPENSSL_PSTRING_find(structstack_st_OPENSSL_PSTRING*;OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_OPENSSL_PSTRING_find_ex(structstack_st_OPENSSL_PSTRING*;OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "sk_OPENSSL_PSTRING_sort(structstack_st_OPENSSL_PSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_OPENSSL_PSTRING_is_sorted(structstack_st_OPENSSL_PSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_OPENSSL_PSTRING"
 , "c2" : "sk_OPENSSL_PSTRING_dup(structstack_st_OPENSSL_PSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_OPENSSL_PSTRING"
 , "c2" : "sk_OPENSSL_PSTRING_deep_copy(structstack_st_OPENSSL_PSTRING*;sk_OPENSSL_PSTRING_copyfunc;sk_OPENSSL_PSTRING_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "sk_OPENSSL_PSTRING_compfunc"
 , "c2" : "sk_OPENSSL_PSTRING_set_cmp_func(structstack_st_OPENSSL_PSTRING*;sk_OPENSSL_PSTRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "UI_STRING"
 , "c2" : "ossl_check_UI_STRING_type(UI_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_UI_STRING_sk_type(structstack_st_UI_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_UI_STRING_sk_type(structstack_st_UI_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_UI_STRING_compfunc_type(sk_UI_STRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_UI_STRING_copyfunc_type(sk_UI_STRING_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_UI_STRING_freefunc_type(sk_UI_STRING_freefunc)"
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
   "c1" : "X509V3_EXT_METHOD"
 , "c2" : "ossl_check_X509V3_EXT_METHOD_type(X509V3_EXT_METHOD*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509V3_EXT_METHOD_sk_type(structstack_st_X509V3_EXT_METHOD*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509V3_EXT_METHOD_sk_type(structstack_st_X509V3_EXT_METHOD*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509V3_EXT_METHOD_compfunc_type(sk_X509V3_EXT_METHOD_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509V3_EXT_METHOD_copyfunc_type(sk_X509V3_EXT_METHOD_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509V3_EXT_METHOD_freefunc_type(sk_X509V3_EXT_METHOD_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ACCESS_DESCRIPTION"
 , "c2" : "ossl_check_ACCESS_DESCRIPTION_type(ACCESS_DESCRIPTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ACCESS_DESCRIPTION_sk_type(structstack_st_ACCESS_DESCRIPTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ACCESS_DESCRIPTION_sk_type(structstack_st_ACCESS_DESCRIPTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ACCESS_DESCRIPTION_compfunc_type(sk_ACCESS_DESCRIPTION_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ACCESS_DESCRIPTION_copyfunc_type(sk_ACCESS_DESCRIPTION_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ACCESS_DESCRIPTION_freefunc_type(sk_ACCESS_DESCRIPTION_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "GENERAL_NAME"
 , "c2" : "ossl_check_GENERAL_NAME_type(GENERAL_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_GENERAL_NAME_sk_type(structstack_st_GENERAL_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_GENERAL_NAME_sk_type(structstack_st_GENERAL_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_GENERAL_NAME_compfunc_type(sk_GENERAL_NAME_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_GENERAL_NAME_copyfunc_type(sk_GENERAL_NAME_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_GENERAL_NAME_freefunc_type(sk_GENERAL_NAME_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "GENERAL_NAMES"
 , "c2" : "ossl_check_GENERAL_NAMES_type(GENERAL_NAMES*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_GENERAL_NAMES_sk_type(structstack_st_GENERAL_NAMES*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_GENERAL_NAMES_sk_type(structstack_st_GENERAL_NAMES*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_GENERAL_NAMES_compfunc_type(sk_GENERAL_NAMES_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_GENERAL_NAMES_copyfunc_type(sk_GENERAL_NAMES_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_GENERAL_NAMES_freefunc_type(sk_GENERAL_NAMES_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "DIST_POINT"
 , "c2" : "ossl_check_DIST_POINT_type(DIST_POINT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_DIST_POINT_sk_type(structstack_st_DIST_POINT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_DIST_POINT_sk_type(structstack_st_DIST_POINT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_DIST_POINT_compfunc_type(sk_DIST_POINT_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_DIST_POINT_copyfunc_type(sk_DIST_POINT_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_DIST_POINT_freefunc_type(sk_DIST_POINT_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SXNETID"
 , "c2" : "ossl_check_SXNETID_type(SXNETID*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_SXNETID_sk_type(structstack_st_SXNETID*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_SXNETID_sk_type(structstack_st_SXNETID*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_SXNETID_compfunc_type(sk_SXNETID_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_SXNETID_copyfunc_type(sk_SXNETID_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_SXNETID_freefunc_type(sk_SXNETID_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "POLICYQUALINFO"
 , "c2" : "ossl_check_POLICYQUALINFO_type(POLICYQUALINFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_POLICYQUALINFO_sk_type(structstack_st_POLICYQUALINFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_POLICYQUALINFO_sk_type(structstack_st_POLICYQUALINFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_POLICYQUALINFO_compfunc_type(sk_POLICYQUALINFO_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_POLICYQUALINFO_copyfunc_type(sk_POLICYQUALINFO_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_POLICYQUALINFO_freefunc_type(sk_POLICYQUALINFO_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "POLICYINFO"
 , "c2" : "ossl_check_POLICYINFO_type(POLICYINFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_POLICYINFO_sk_type(structstack_st_POLICYINFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_POLICYINFO_sk_type(structstack_st_POLICYINFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_POLICYINFO_compfunc_type(sk_POLICYINFO_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_POLICYINFO_copyfunc_type(sk_POLICYINFO_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_POLICYINFO_freefunc_type(sk_POLICYINFO_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "POLICY_MAPPING"
 , "c2" : "ossl_check_POLICY_MAPPING_type(POLICY_MAPPING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_POLICY_MAPPING_sk_type(structstack_st_POLICY_MAPPING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_POLICY_MAPPING_sk_type(structstack_st_POLICY_MAPPING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_POLICY_MAPPING_compfunc_type(sk_POLICY_MAPPING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_POLICY_MAPPING_copyfunc_type(sk_POLICY_MAPPING_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_POLICY_MAPPING_freefunc_type(sk_POLICY_MAPPING_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "GENERAL_SUBTREE"
 , "c2" : "ossl_check_GENERAL_SUBTREE_type(GENERAL_SUBTREE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_GENERAL_SUBTREE_sk_type(structstack_st_GENERAL_SUBTREE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_GENERAL_SUBTREE_sk_type(structstack_st_GENERAL_SUBTREE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_GENERAL_SUBTREE_compfunc_type(sk_GENERAL_SUBTREE_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_GENERAL_SUBTREE_copyfunc_type(sk_GENERAL_SUBTREE_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_GENERAL_SUBTREE_freefunc_type(sk_GENERAL_SUBTREE_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_PURPOSE"
 , "c2" : "ossl_check_X509_PURPOSE_type(X509_PURPOSE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_PURPOSE_sk_type(structstack_st_X509_PURPOSE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_PURPOSE_sk_type(structstack_st_X509_PURPOSE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_PURPOSE_compfunc_type(sk_X509_PURPOSE_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_PURPOSE_copyfunc_type(sk_X509_PURPOSE_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_PURPOSE_freefunc_type(sk_X509_PURPOSE_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_POLICY_NODE"
 , "c2" : "ossl_check_X509_POLICY_NODE_type(X509_POLICY_NODE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_POLICY_NODE_sk_type(structstack_st_X509_POLICY_NODE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_POLICY_NODE_sk_type(structstack_st_X509_POLICY_NODE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_POLICY_NODE_compfunc_type(sk_X509_POLICY_NODE_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_POLICY_NODE_copyfunc_type(sk_X509_POLICY_NODE_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_POLICY_NODE_freefunc_type(sk_X509_POLICY_NODE_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ASIdOrRange"
 , "c2" : "ossl_check_ASIdOrRange_type(ASIdOrRange*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ASIdOrRange_sk_type(structstack_st_ASIdOrRange*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ASIdOrRange_sk_type(structstack_st_ASIdOrRange*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ASIdOrRange_compfunc_type(sk_ASIdOrRange_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ASIdOrRange_copyfunc_type(sk_ASIdOrRange_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ASIdOrRange_freefunc_type(sk_ASIdOrRange_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "IPAddressOrRange"
 , "c2" : "ossl_check_IPAddressOrRange_type(IPAddressOrRange*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_IPAddressOrRange_sk_type(structstack_st_IPAddressOrRange*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_IPAddressOrRange_sk_type(structstack_st_IPAddressOrRange*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_IPAddressOrRange_compfunc_type(sk_IPAddressOrRange_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_IPAddressOrRange_copyfunc_type(sk_IPAddressOrRange_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_IPAddressOrRange_freefunc_type(sk_IPAddressOrRange_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "IPAddressFamily"
 , "c2" : "ossl_check_IPAddressFamily_type(IPAddressFamily*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_IPAddressFamily_sk_type(structstack_st_IPAddressFamily*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_IPAddressFamily_sk_type(structstack_st_IPAddressFamily*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_IPAddressFamily_compfunc_type(sk_IPAddressFamily_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_IPAddressFamily_copyfunc_type(sk_IPAddressFamily_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_IPAddressFamily_freefunc_type(sk_IPAddressFamily_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ASN1_STRING"
 , "c2" : "ossl_check_ASN1_STRING_type(ASN1_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ASN1_STRING_sk_type(structstack_st_ASN1_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ASN1_STRING_sk_type(structstack_st_ASN1_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ASN1_STRING_compfunc_type(sk_ASN1_STRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ASN1_STRING_copyfunc_type(sk_ASN1_STRING_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ASN1_STRING_freefunc_type(sk_ASN1_STRING_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "PROFESSION_INFO"
 , "c2" : "ossl_check_PROFESSION_INFO_type(PROFESSION_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_PROFESSION_INFO_sk_type(structstack_st_PROFESSION_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_PROFESSION_INFO_sk_type(structstack_st_PROFESSION_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_PROFESSION_INFO_compfunc_type(sk_PROFESSION_INFO_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_PROFESSION_INFO_copyfunc_type(sk_PROFESSION_INFO_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_PROFESSION_INFO_freefunc_type(sk_PROFESSION_INFO_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ADMISSIONS"
 , "c2" : "ossl_check_ADMISSIONS_type(ADMISSIONS*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ADMISSIONS_sk_type(structstack_st_ADMISSIONS*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ADMISSIONS_sk_type(structstack_st_ADMISSIONS*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ADMISSIONS_compfunc_type(sk_ADMISSIONS_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ADMISSIONS_copyfunc_type(sk_ADMISSIONS_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ADMISSIONS_freefunc_type(sk_ADMISSIONS_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OCSP_CERTID"
 , "c2" : "ossl_check_OCSP_CERTID_type(OCSP_CERTID*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_OCSP_CERTID_sk_type(structstack_st_OCSP_CERTID*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_OCSP_CERTID_sk_type(structstack_st_OCSP_CERTID*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_OCSP_CERTID_compfunc_type(sk_OCSP_CERTID_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_OCSP_CERTID_copyfunc_type(sk_OCSP_CERTID_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_OCSP_CERTID_freefunc_type(sk_OCSP_CERTID_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OCSP_ONEREQ"
 , "c2" : "ossl_check_OCSP_ONEREQ_type(OCSP_ONEREQ*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_OCSP_ONEREQ_sk_type(structstack_st_OCSP_ONEREQ*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_OCSP_ONEREQ_sk_type(structstack_st_OCSP_ONEREQ*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_OCSP_ONEREQ_compfunc_type(sk_OCSP_ONEREQ_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_OCSP_ONEREQ_copyfunc_type(sk_OCSP_ONEREQ_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_OCSP_ONEREQ_freefunc_type(sk_OCSP_ONEREQ_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OCSP_RESPID"
 , "c2" : "ossl_check_OCSP_RESPID_type(OCSP_RESPID*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_OCSP_RESPID_sk_type(structstack_st_OCSP_RESPID*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_OCSP_RESPID_sk_type(structstack_st_OCSP_RESPID*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_OCSP_RESPID_compfunc_type(sk_OCSP_RESPID_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_OCSP_RESPID_copyfunc_type(sk_OCSP_RESPID_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_OCSP_RESPID_freefunc_type(sk_OCSP_RESPID_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OCSP_SINGLERESP"
 , "c2" : "ossl_check_OCSP_SINGLERESP_type(OCSP_SINGLERESP*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_OCSP_SINGLERESP_sk_type(structstack_st_OCSP_SINGLERESP*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_OCSP_SINGLERESP_sk_type(structstack_st_OCSP_SINGLERESP*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_OCSP_SINGLERESP_compfunc_type(sk_OCSP_SINGLERESP_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_OCSP_SINGLERESP_copyfunc_type(sk_OCSP_SINGLERESP_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_OCSP_SINGLERESP_freefunc_type(sk_OCSP_SINGLERESP_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct lhash_st_FUNCTION"
 , "c2" : "lh_FUNCTION_new(unsignedlong;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_FUNCTION_free(structlhash_st_FUNCTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_FUNCTION_flush(structlhash_st_FUNCTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "FUNCTION"
 , "c2" : "lh_FUNCTION_insert(structlhash_st_FUNCTION*;FUNCTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "FUNCTION"
 , "c2" : "lh_FUNCTION_delete(structlhash_st_FUNCTION*;FUNCTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "FUNCTION"
 , "c2" : "lh_FUNCTION_retrieve(structlhash_st_FUNCTION*;FUNCTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "lh_FUNCTION_error(structlhash_st_FUNCTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  long "
 , "c2" : "lh_FUNCTION_num_items(structlhash_st_FUNCTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_FUNCTION_node_stats_bio(structlhash_st_FUNCTION*;BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_FUNCTION_node_usage_stats_bio(structlhash_st_FUNCTION*;BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_FUNCTION_stats_bio(structlhash_st_FUNCTION*;BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  long "
 , "c2" : "lh_FUNCTION_get_down_load(structlhash_st_FUNCTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_FUNCTION_set_down_load(structlhash_st_FUNCTION*;unsignedlong)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_FUNCTION_doall(structlhash_st_FUNCTION*;void)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "pkeyutl_main(int;char*)"
 , "c3" : "107"
 , "c4" : "212"
}} 
,
{ "ligne" : {
   "c1" : "EVP_PKEY_CTX"
 , "c2" : "init_ctx(char*;int*;char*;int;int;char*;int;ENGINE*;int;int;EVP_PKEY*;OSSL_LIB_CTX*;char*)"
 , "c3" : "29"
 , "c4" : "50"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "setup_peer(EVP_PKEY_CTX*;int;char*;ENGINE*)"
 , "c3" : "4"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "do_keyop(EVP_PKEY_CTX*;int;unsignedchar*;size_t*;unsignedchar*;size_t)"
 , "c3" : "6"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "do_raw_keyop(int;EVP_PKEY_CTX*;EVP_MD*;EVP_PKEY*;BIO*;int;unsignedchar*;int;unsignedchar*;size_t*)"
 , "c3" : "24"
 , "c4" : "55"
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
 , "c4" : "23"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "51"
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
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03274"
 , "c1link" : "./qc/apps/pkeyutl.c.html#3274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03274] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09870"
 , "c1link" : "./qc/apps/pkeyutl.c.html#9870"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09870] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09872"
 , "c1link" : "./qc/apps/pkeyutl.c.html#9872"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09872] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10239"
 , "c1link" : "./qc/apps/pkeyutl.c.html#10239"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10239] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10435"
 , "c1link" : "./qc/apps/pkeyutl.c.html#10435"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10435] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10436"
 , "c1link" : "./qc/apps/pkeyutl.c.html#10436"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10436] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10437"
 , "c1link" : "./qc/apps/pkeyutl.c.html#10437"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10437] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10441"
 , "c1link" : "./qc/apps/pkeyutl.c.html#10441"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10441] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "11027"
 , "c1link" : "./qc/apps/pkeyutl.c.html#11027"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[11027] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "11029"
 , "c1link" : "./qc/apps/pkeyutl.c.html#11029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[11029] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "11032"
 , "c1link" : "./qc/apps/pkeyutl.c.html#11032"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[11032] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "11871"
 , "c1link" : "./qc/apps/pkeyutl.c.html#11871"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[11871] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13302"
 , "c1link" : "./qc/apps/pkeyutl.c.html#13302"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13302] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13324"
 , "c1link" : "./qc/apps/pkeyutl.c.html#13324"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13324] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13330"
 , "c1link" : "./qc/apps/pkeyutl.c.html#13330"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13330] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13350"
 , "c1link" : "./qc/apps/pkeyutl.c.html#13350"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13350] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13356"
 , "c1link" : "./qc/apps/pkeyutl.c.html#13356"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13356] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "14503"
 , "c1link" : "./qc/apps/pkeyutl.c.html#14503"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[14503] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "14504"
 , "c1link" : "./qc/apps/pkeyutl.c.html#14504"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[14504] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17359"
 , "c1link" : "./qc/apps/pkeyutl.c.html#17359"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17359] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17665"
 , "c1link" : "./qc/apps/pkeyutl.c.html#17665"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17665] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18003"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18003"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[18003] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18063"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18063"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18063] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18067"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18067"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[18067] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "18069"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18069"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18069] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18073"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18073"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18073] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18097"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18097"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18097] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "18101"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18101"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18101] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "18105"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18105"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18105] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18114"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18114"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18114] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18118"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18118"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18118] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18170"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18170"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18170] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18177"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18177"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18177] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18186"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18186"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18186] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18193"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18193"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18193] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18201"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18201"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18201] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18209"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18209"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18209] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "18215"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18215"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18215] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "18226"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18226"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18226] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "18232"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18232"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18232] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "18243"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18243"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18243] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "18252"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18252"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18252] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "18260"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18260"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18260] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "18272"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18272"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18272] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18281"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18281"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18281] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18298"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18298"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18298] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18332"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18332"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18332] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18341"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18341"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18341] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18358"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18358"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18358] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18365"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18365"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18365] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18378"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18378"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18378] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18388"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18388"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18388] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18408"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18408"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18408] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18416"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18416"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18416] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18431"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18431"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18431] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18437"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18437"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18437] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18451"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18451"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18451] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18453"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18453"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18453] The expression rev applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18472"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18472"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18472] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18476"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18476"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18476] The expression rawin applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18493"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18493"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18493] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18499"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18499"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18499] The expression rawin applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18529"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18529"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18529] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18533"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18533"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18533] The expression asn1parse applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18536"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18536"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18536] The expression hexdump applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18593"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18593"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18593] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18605"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18605"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18605] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18626"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18626"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18626] The expression x applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18638"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18638"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18638] The expression engine_impl applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18654"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18654"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18654] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18671"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18671"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18671] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18696"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18696"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18696] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18703"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18703"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18703] The expression rawin applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18832"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18832"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[18832] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18839"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18839"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18839] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18855"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18855"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18855] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18869"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18869"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18869] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18873"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18873"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18873] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18887"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18887"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18887] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18891"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18891"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18891] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18908"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18908"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18908] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18922"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18922"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18922] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18929"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18929"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18929] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18934"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18934"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18934] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18949"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18949"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18949] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18956"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18956"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18956] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18961"
 , "c1link" : "./qc/apps/pkeyutl.c.html#18961"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18961] goto statement jump to end"
}} 
]
};
console.log('leListeStr 99 main end');
