console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/apps/s_client.c.html" 
 , "texte" : "File apps/s_client.c 289 rule violations " 
 , "fic2"  : "./qc/apps/s_client.c.xml" 
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
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "tolower(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "toupper(int)"
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
   "c1" : "SRP_gN_cache"
 , "c2" : "ossl_check_SRP_gN_cache_type(SRP_gN_cache*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_SRP_gN_cache_sk_type(structstack_st_SRP_gN_cache*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_SRP_gN_cache_sk_type(structstack_st_SRP_gN_cache*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_SRP_gN_cache_compfunc_type(sk_SRP_gN_cache_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_SRP_gN_cache_copyfunc_type(sk_SRP_gN_cache_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_SRP_gN_cache_freefunc_type(sk_SRP_gN_cache_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SRP_user_pwd"
 , "c2" : "ossl_check_SRP_user_pwd_type(SRP_user_pwd*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_SRP_user_pwd_sk_type(structstack_st_SRP_user_pwd*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_SRP_user_pwd_sk_type(structstack_st_SRP_user_pwd*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_SRP_user_pwd_compfunc_type(sk_SRP_user_pwd_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_SRP_user_pwd_copyfunc_type(sk_SRP_user_pwd_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_SRP_user_pwd_freefunc_type(sk_SRP_user_pwd_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SRP_gN"
 , "c2" : "ossl_check_SRP_gN_type(SRP_gN*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_SRP_gN_sk_type(structstack_st_SRP_gN*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_SRP_gN_sk_type(structstack_st_SRP_gN*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_SRP_gN_compfunc_type(sk_SRP_gN_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_SRP_gN_copyfunc_type(sk_SRP_gN_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_SRP_gN_freefunc_type(sk_SRP_gN_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "save_errno(void)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "restore_errno(void)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  int "
 , "c2" : "psk_client_cb(SSL*;char*;char*;unsignedint;unsignedchar*;unsignedint)"
 , "c3" : "12"
 , "c4" : "21"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "psk_use_session_cb(SSL*;EVP_MD*;unsignedchar*;size_t*;SSL_SESSION*)"
 , "c3" : "9"
 , "c4" : "28"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ssl_servername_cb(SSL*;int*;void*)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "srp_Verify_N_and_g(BIGNUM*;BIGNUM*)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ssl_srp_verify_param_cb(SSL*;void*)"
 , "c3" : "7"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "ssl_give_srp_client_pwd_cb(SSL*;void*)"
 , "c3" : "2"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "next_proto_cb(SSL*;unsignedchar*;unsignedchar*;unsignedchar*;unsignedint;void*)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "serverinfo_cli_parse_cb(SSL*;unsignedint;unsignedchar*;size_t;int*;void*)"
 , "c3" : "1"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "ssize_t"
 , "c2" : "hexdecode(char*;void*)"
 , "c3" : "8"
 , "c4" : "22"
}} 
,
{ "ligne" : {
   "c1" : "ssize_t"
 , "c2" : "checked_uint8(char*;void*)"
 , "c3" : "3"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "tlsa_import_rr(SSL*;char*)"
 , "c3" : "5"
 , "c4" : "22"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "tlsa_import_rrset(SSL*;structstack_st_OPENSSL_STRING*)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "freeandcopy(char*;char*)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "new_session_cb(SSL*;SSL_SESSION*)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "s_client_main(int;char*)"
 , "c3" : "543"
 , "c4" : "1125"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "print_stuff(BIO*;SSL*;int)"
 , "c3" : "31"
 , "c4" : "110"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ocsp_resp_cb(SSL*;void*)"
 , "c3" : "3"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ldap_ExtendedResponse_parse(char*;long)"
 , "c3" : "6"
 , "c4" : "26"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "is_dNS_name(char*)"
 , "c3" : "7"
 , "c4" : "23"
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
 , "c4" : "37"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000006"
 , "c3" : "Risk of infinite while loop"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "65"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "136"
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
 , "c4" : "31"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-CPP000013"
 , "c3" : "Inline assembly code"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03272"
 , "c1link" : "./qc/apps/s_client.c.html#3272"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03272] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09997"
 , "c1link" : "./qc/apps/s_client.c.html#9997"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09997] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09999"
 , "c1link" : "./qc/apps/s_client.c.html#9999"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09999] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10366"
 , "c1link" : "./qc/apps/s_client.c.html#10366"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10366] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10562"
 , "c1link" : "./qc/apps/s_client.c.html#10562"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10562] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10563"
 , "c1link" : "./qc/apps/s_client.c.html#10563"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10563] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10564"
 , "c1link" : "./qc/apps/s_client.c.html#10564"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10564] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10568"
 , "c1link" : "./qc/apps/s_client.c.html#10568"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10568] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "11154"
 , "c1link" : "./qc/apps/s_client.c.html#11154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[11154] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "11156"
 , "c1link" : "./qc/apps/s_client.c.html#11156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[11156] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "11159"
 , "c1link" : "./qc/apps/s_client.c.html#11159"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[11159] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "11998"
 , "c1link" : "./qc/apps/s_client.c.html#11998"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[11998] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13429"
 , "c1link" : "./qc/apps/s_client.c.html#13429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13429] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13451"
 , "c1link" : "./qc/apps/s_client.c.html#13451"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13451] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13457"
 , "c1link" : "./qc/apps/s_client.c.html#13457"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13457] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13477"
 , "c1link" : "./qc/apps/s_client.c.html#13477"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13477] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13483"
 , "c1link" : "./qc/apps/s_client.c.html#13483"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13483] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "14630"
 , "c1link" : "./qc/apps/s_client.c.html#14630"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[14630] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "14631"
 , "c1link" : "./qc/apps/s_client.c.html#14631"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[14631] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17451"
 , "c1link" : "./qc/apps/s_client.c.html#17451"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17451] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17757"
 , "c1link" : "./qc/apps/s_client.c.html#17757"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17757] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18031"
 , "c1link" : "./qc/apps/s_client.c.html#18031"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[18031] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19107"
 , "c1link" : "./qc/apps/s_client.c.html#19107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19107] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19109"
 , "c1link" : "./qc/apps/s_client.c.html#19109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19109] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19999"
 , "c1link" : "./qc/apps/s_client.c.html#19999"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19999] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20001"
 , "c1link" : "./qc/apps/s_client.c.html#20001"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20001] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20003"
 , "c1link" : "./qc/apps/s_client.c.html#20003"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20003] The expression  ! hint applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20005"
 , "c1link" : "./qc/apps/s_client.c.html#20005"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20005] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20008"
 , "c1link" : "./qc/apps/s_client.c.html#20008"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20008] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20017"
 , "c1link" : "./qc/apps/s_client.c.html#20017"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20017] goto statement jump to out_err"
}} 
,
{ "ligne" : {
   "c1" : "20018"
 , "c1link" : "./qc/apps/s_client.c.html#20018"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20018] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20044"
 , "c1link" : "./qc/apps/s_client.c.html#20044"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20044] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20049"
 , "c1link" : "./qc/apps/s_client.c.html#20049"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20049] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20082"
 , "c1link" : "./qc/apps/s_client.c.html#20082"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20082] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20116"
 , "c1link" : "./qc/apps/s_client.c.html#20116"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20116] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20127"
 , "c1link" : "./qc/apps/s_client.c.html#20127"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20127] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20257"
 , "c1link" : "./qc/apps/s_client.c.html#20257"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20257] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20261"
 , "c1link" : "./qc/apps/s_client.c.html#20261"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20261] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20307"
 , "c1link" : "./qc/apps/s_client.c.html#20307"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20307] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20339"
 , "c1link" : "./qc/apps/s_client.c.html#20339"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20339] The expression  ! c_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20344"
 , "c1link" : "./qc/apps/s_client.c.html#20344"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20344] The expression i applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20385"
 , "c1link" : "./qc/apps/s_client.c.html#20385"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20385] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20387"
 , "c1link" : "./qc/apps/s_client.c.html#20387"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20387] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20388"
 , "c1link" : "./qc/apps/s_client.c.html#20388"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20388] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20418"
 , "c1link" : "./qc/apps/s_client.c.html#20418"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20418] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20468"
 , "c1link" : "./qc/apps/s_client.c.html#20468"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20468] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20498"
 , "c1link" : "./qc/apps/s_client.c.html#20498"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20498] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20517"
 , "c1link" : "./qc/apps/s_client.c.html#20517"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20517] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21281"
 , "c1link" : "./qc/apps/s_client.c.html#21281"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[21281] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "21281"
 , "c1link" : "./qc/apps/s_client.c.html#21281"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21281] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "21285"
 , "c1link" : "./qc/apps/s_client.c.html#21285"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21285] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21285"
 , "c1link" : "./qc/apps/s_client.c.html#21285"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21285] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "21290"
 , "c1link" : "./qc/apps/s_client.c.html#21290"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[21290] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "21290"
 , "c1link" : "./qc/apps/s_client.c.html#21290"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21290] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "21294"
 , "c1link" : "./qc/apps/s_client.c.html#21294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21294] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21294"
 , "c1link" : "./qc/apps/s_client.c.html#21294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21294] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "21315"
 , "c1link" : "./qc/apps/s_client.c.html#21315"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21315] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21325"
 , "c1link" : "./qc/apps/s_client.c.html#21325"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21325] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21331"
 , "c1link" : "./qc/apps/s_client.c.html#21331"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21331] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21337"
 , "c1link" : "./qc/apps/s_client.c.html#21337"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21337] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21342"
 , "c1link" : "./qc/apps/s_client.c.html#21342"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21342] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21349"
 , "c1link" : "./qc/apps/s_client.c.html#21349"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21349] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21355"
 , "c1link" : "./qc/apps/s_client.c.html#21355"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[21355] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21357"
 , "c1link" : "./qc/apps/s_client.c.html#21357"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21357] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21361"
 , "c1link" : "./qc/apps/s_client.c.html#21361"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21361] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21426"
 , "c1link" : "./qc/apps/s_client.c.html#21426"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21426] The expression  ! c_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21434"
 , "c1link" : "./qc/apps/s_client.c.html#21434"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21434] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21450"
 , "c1link" : "./qc/apps/s_client.c.html#21450"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21450] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21454"
 , "c1link" : "./qc/apps/s_client.c.html#21454"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21454] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21464"
 , "c1link" : "./qc/apps/s_client.c.html#21464"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21464] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21464"
 , "c1link" : "./qc/apps/s_client.c.html#21464"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21464] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21481"
 , "c1link" : "./qc/apps/s_client.c.html#21481"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21481] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21486"
 , "c1link" : "./qc/apps/s_client.c.html#21486"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21486] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21491"
 , "c1link" : "./qc/apps/s_client.c.html#21491"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21491] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21503"
 , "c1link" : "./qc/apps/s_client.c.html#21503"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21503] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21523"
 , "c1link" : "./qc/apps/s_client.c.html#21523"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21523] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21529"
 , "c1link" : "./qc/apps/s_client.c.html#21529"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21529] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21533"
 , "c1link" : "./qc/apps/s_client.c.html#21533"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21533] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21587"
 , "c1link" : "./qc/apps/s_client.c.html#21587"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21587] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21599"
 , "c1link" : "./qc/apps/s_client.c.html#21599"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21599] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21759"
 , "c1link" : "./qc/apps/s_client.c.html#21759"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21759] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21843"
 , "c1link" : "./qc/apps/s_client.c.html#21843"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21843] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21871"
 , "c1link" : "./qc/apps/s_client.c.html#21871"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21871] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21912"
 , "c1link" : "./qc/apps/s_client.c.html#21912"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21912] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21953"
 , "c1link" : "./qc/apps/s_client.c.html#21953"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21953] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21958"
 , "c1link" : "./qc/apps/s_client.c.html#21958"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21958] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21963"
 , "c1link" : "./qc/apps/s_client.c.html#21963"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21963] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21965"
 , "c1link" : "./qc/apps/s_client.c.html#21965"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21965] The expression noservername applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21974"
 , "c1link" : "./qc/apps/s_client.c.html#21974"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21974] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21984"
 , "c1link" : "./qc/apps/s_client.c.html#21984"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21984] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21995"
 , "c1link" : "./qc/apps/s_client.c.html#21995"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21995] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22012"
 , "c1link" : "./qc/apps/s_client.c.html#22012"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22012] The expression  ! res applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22016"
 , "c1link" : "./qc/apps/s_client.c.html#22016"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22016] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22038"
 , "c1link" : "./qc/apps/s_client.c.html#22038"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22038] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22054"
 , "c1link" : "./qc/apps/s_client.c.html#22054"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22054] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22062"
 , "c1link" : "./qc/apps/s_client.c.html#22062"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22062] The expression  ! res applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22065"
 , "c1link" : "./qc/apps/s_client.c.html#22065"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22065] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22077"
 , "c1link" : "./qc/apps/s_client.c.html#22077"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22077] The expression  ! res applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22081"
 , "c1link" : "./qc/apps/s_client.c.html#22081"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22081] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22097"
 , "c1link" : "./qc/apps/s_client.c.html#22097"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22097] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22101"
 , "c1link" : "./qc/apps/s_client.c.html#22101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22101] The expression next_proto_neg_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22110"
 , "c1link" : "./qc/apps/s_client.c.html#22110"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22110] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22130"
 , "c1link" : "./qc/apps/s_client.c.html#22130"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22130] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22143"
 , "c1link" : "./qc/apps/s_client.c.html#22143"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22143] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22156"
 , "c1link" : "./qc/apps/s_client.c.html#22156"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22156] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22178"
 , "c1link" : "./qc/apps/s_client.c.html#22178"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22178] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22192"
 , "c1link" : "./qc/apps/s_client.c.html#22192"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22192] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22201"
 , "c1link" : "./qc/apps/s_client.c.html#22201"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22201] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22216"
 , "c1link" : "./qc/apps/s_client.c.html#22216"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22216] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22226"
 , "c1link" : "./qc/apps/s_client.c.html#22226"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22226] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22231"
 , "c1link" : "./qc/apps/s_client.c.html#22231"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22231] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22264"
 , "c1link" : "./qc/apps/s_client.c.html#22264"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22264] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22275"
 , "c1link" : "./qc/apps/s_client.c.html#22275"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22275] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22284"
 , "c1link" : "./qc/apps/s_client.c.html#22284"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22284] The expression sdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22288"
 , "c1link" : "./qc/apps/s_client.c.html#22288"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22288] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22299"
 , "c1link" : "./qc/apps/s_client.c.html#22299"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22299] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22314"
 , "c1link" : "./qc/apps/s_client.c.html#22314"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22314] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22321"
 , "c1link" : "./qc/apps/s_client.c.html#22321"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22321] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22323"
 , "c1link" : "./qc/apps/s_client.c.html#22323"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22323] The expression ignore_unexpected_eof applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22329"
 , "c1link" : "./qc/apps/s_client.c.html#22329"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22329] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22332"
 , "c1link" : "./qc/apps/s_client.c.html#22332"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22332] The expression async applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22348"
 , "c1link" : "./qc/apps/s_client.c.html#22348"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22348] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22359"
 , "c1link" : "./qc/apps/s_client.c.html#22359"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22359] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22370"
 , "c1link" : "./qc/apps/s_client.c.html#22370"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22370] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22382"
 , "c1link" : "./qc/apps/s_client.c.html#22382"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22382] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22391"
 , "c1link" : "./qc/apps/s_client.c.html#22391"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22391] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22408"
 , "c1link" : "./qc/apps/s_client.c.html#22408"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22408] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22413"
 , "c1link" : "./qc/apps/s_client.c.html#22413"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22413] The expression ssl_client_engine applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22418"
 , "c1link" : "./qc/apps/s_client.c.html#22418"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22418] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22430"
 , "c1link" : "./qc/apps/s_client.c.html#22430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22430] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22449"
 , "c1link" : "./qc/apps/s_client.c.html#22449"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22449] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22468"
 , "c1link" : "./qc/apps/s_client.c.html#22468"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22468] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22492"
 , "c1link" : "./qc/apps/s_client.c.html#22492"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22492] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22512"
 , "c1link" : "./qc/apps/s_client.c.html#22512"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22512] The expression alpn_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22514"
 , "c1link" : "./qc/apps/s_client.c.html#22514"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[22514] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "22522"
 , "c1link" : "./qc/apps/s_client.c.html#22522"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22522] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22527"
 , "c1link" : "./qc/apps/s_client.c.html#22527"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22527] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22559"
 , "c1link" : "./qc/apps/s_client.c.html#22559"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22559] The expression state applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22567"
 , "c1link" : "./qc/apps/s_client.c.html#22567"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22567] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22571"
 , "c1link" : "./qc/apps/s_client.c.html#22571"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22571] The expression ct_validation applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22573"
 , "c1link" : "./qc/apps/s_client.c.html#22573"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22573] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22591"
 , "c1link" : "./qc/apps/s_client.c.html#22591"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22591] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22597"
 , "c1link" : "./qc/apps/s_client.c.html#22597"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22597] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22599"
 , "c1link" : "./qc/apps/s_client.c.html#22599"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22599] The expression  ! noservername applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22608"
 , "c1link" : "./qc/apps/s_client.c.html#22608"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22608] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22631"
 , "c1link" : "./qc/apps/s_client.c.html#22631"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22631] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22649"
 , "c1link" : "./qc/apps/s_client.c.html#22649"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22649] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22657"
 , "c1link" : "./qc/apps/s_client.c.html#22657"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22657] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22659"
 , "c1link" : "./qc/apps/s_client.c.html#22659"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22659] The expression enable_pha applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22676"
 , "c1link" : "./qc/apps/s_client.c.html#22676"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22676] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22695"
 , "c1link" : "./qc/apps/s_client.c.html#22695"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22695] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22700"
 , "c1link" : "./qc/apps/s_client.c.html#22700"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22700] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22706"
 , "c1link" : "./qc/apps/s_client.c.html#22706"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22706] The expression fallback_scsv applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22745"
 , "c1link" : "./qc/apps/s_client.c.html#22745"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22745] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22758"
 , "c1link" : "./qc/apps/s_client.c.html#22758"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22758] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22767"
 , "c1link" : "./qc/apps/s_client.c.html#22767"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22767] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22772"
 , "c1link" : "./qc/apps/s_client.c.html#22772"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22772] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22774"
 , "c1link" : "./qc/apps/s_client.c.html#22774"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22774] The expression dane_ee_no_name applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22783"
 , "c1link" : "./qc/apps/s_client.c.html#22783"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22783] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22795"
 , "c1link" : "./qc/apps/s_client.c.html#22795"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22795] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22799"
 , "c1link" : "./qc/apps/s_client.c.html#22799"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22799] The expression c_nbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22802"
 , "c1link" : "./qc/apps/s_client.c.html#22802"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22802] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22807"
 , "c1link" : "./qc/apps/s_client.c.html#22807"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22807] The expression isdtls applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22817"
 , "c1link" : "./qc/apps/s_client.c.html#22817"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22817] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22824"
 , "c1link" : "./qc/apps/s_client.c.html#22824"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22824] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22835"
 , "c1link" : "./qc/apps/s_client.c.html#22835"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22835] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22846"
 , "c1link" : "./qc/apps/s_client.c.html#22846"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22846] The expression enable_timeouts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22856"
 , "c1link" : "./qc/apps/s_client.c.html#22856"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22856] The expression socket_mtu applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22869"
 , "c1link" : "./qc/apps/s_client.c.html#22869"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22869] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "22879"
 , "c1link" : "./qc/apps/s_client.c.html#22879"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22879] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "22893"
 , "c1link" : "./qc/apps/s_client.c.html#22893"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22893] The expression nbio_test applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22900"
 , "c1link" : "./qc/apps/s_client.c.html#22900"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22900] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22904"
 , "c1link" : "./qc/apps/s_client.c.html#22904"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22904] The expression c_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22914"
 , "c1link" : "./qc/apps/s_client.c.html#22914"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22914] The expression c_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22919"
 , "c1link" : "./qc/apps/s_client.c.html#22919"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22919] The expression c_status_req applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22996"
 , "c1link" : "./qc/apps/s_client.c.html#22996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22996] The expression  ! foundit applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23011"
 , "c1link" : "./qc/apps/s_client.c.html#23011"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23011] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23043"
 , "c1link" : "./qc/apps/s_client.c.html#23043"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23043] The expression  ! foundit applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23108"
 , "c1link" : "./qc/apps/s_client.c.html#23108"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23108] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23119"
 , "c1link" : "./qc/apps/s_client.c.html#23119"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23119] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23128"
 , "c1link" : "./qc/apps/s_client.c.html#23128"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23128] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23132"
 , "c1link" : "./qc/apps/s_client.c.html#23132"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23132] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23155"
 , "c1link" : "./qc/apps/s_client.c.html#23155"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23155] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23167"
 , "c1link" : "./qc/apps/s_client.c.html#23167"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23167] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23174"
 , "c1link" : "./qc/apps/s_client.c.html#23174"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23174] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23195"
 , "c1link" : "./qc/apps/s_client.c.html#23195"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[23195] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "23195"
 , "c1link" : "./qc/apps/s_client.c.html#23195"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[23195] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "23199"
 , "c1link" : "./qc/apps/s_client.c.html#23199"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23199] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23199"
 , "c1link" : "./qc/apps/s_client.c.html#23199"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[23199] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "23204"
 , "c1link" : "./qc/apps/s_client.c.html#23204"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23204] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23204"
 , "c1link" : "./qc/apps/s_client.c.html#23204"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23204] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23290"
 , "c1link" : "./qc/apps/s_client.c.html#23290"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23290] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23315"
 , "c1link" : "./qc/apps/s_client.c.html#23315"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[23315] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "23321"
 , "c1link" : "./qc/apps/s_client.c.html#23321"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23321] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23325"
 , "c1link" : "./qc/apps/s_client.c.html#23325"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23325] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23330"
 , "c1link" : "./qc/apps/s_client.c.html#23330"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23330] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23335"
 , "c1link" : "./qc/apps/s_client.c.html#23335"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23335] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23343"
 , "c1link" : "./qc/apps/s_client.c.html#23343"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23343] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23353"
 , "c1link" : "./qc/apps/s_client.c.html#23353"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23353] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23360"
 , "c1link" : "./qc/apps/s_client.c.html#23360"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23360] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23366"
 , "c1link" : "./qc/apps/s_client.c.html#23366"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23366] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23397"
 , "c1link" : "./qc/apps/s_client.c.html#23397"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23397] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23435"
 , "c1link" : "./qc/apps/s_client.c.html#23435"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23435] The expression  ! foundit applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23443"
 , "c1link" : "./qc/apps/s_client.c.html#23443"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23443] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23452"
 , "c1link" : "./qc/apps/s_client.c.html#23452"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23452] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23482"
 , "c1link" : "./qc/apps/s_client.c.html#23482"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23482] The expression  ! foundit applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23490"
 , "c1link" : "./qc/apps/s_client.c.html#23490"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23490] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23495"
 , "c1link" : "./qc/apps/s_client.c.html#23495"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23495] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23505"
 , "c1link" : "./qc/apps/s_client.c.html#23505"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23505] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23542"
 , "c1link" : "./qc/apps/s_client.c.html#23542"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23542] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23550"
 , "c1link" : "./qc/apps/s_client.c.html#23550"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23550] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23553"
 , "c1link" : "./qc/apps/s_client.c.html#23553"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23553] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23565"
 , "c1link" : "./qc/apps/s_client.c.html#23565"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23565] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23575"
 , "c1link" : "./qc/apps/s_client.c.html#23575"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23575] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23592"
 , "c1link" : "./qc/apps/s_client.c.html#23592"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23592] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23597"
 , "c1link" : "./qc/apps/s_client.c.html#23597"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23597] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23601"
 , "c1link" : "./qc/apps/s_client.c.html#23601"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23601] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23635"
 , "c1link" : "./qc/apps/s_client.c.html#23635"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23635] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23638"
 , "c1link" : "./qc/apps/s_client.c.html#23638"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23638] The expression  ! finish applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23653"
 , "c1link" : "./qc/apps/s_client.c.html#23653"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23653] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23664"
 , "c1link" : "./qc/apps/s_client.c.html#23664"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[23664] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "23664"
 , "c1link" : "./qc/apps/s_client.c.html#23664"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[23664] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "23668"
 , "c1link" : "./qc/apps/s_client.c.html#23668"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23668] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23668"
 , "c1link" : "./qc/apps/s_client.c.html#23668"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[23668] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "23673"
 , "c1link" : "./qc/apps/s_client.c.html#23673"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[23673] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "23673"
 , "c1link" : "./qc/apps/s_client.c.html#23673"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[23673] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "23677"
 , "c1link" : "./qc/apps/s_client.c.html#23677"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23677] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23677"
 , "c1link" : "./qc/apps/s_client.c.html#23677"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[23677] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "23700"
 , "c1link" : "./qc/apps/s_client.c.html#23700"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23700] The expression in_init applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23703"
 , "c1link" : "./qc/apps/s_client.c.html#23703"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23703] The expression c_brief applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23712"
 , "c1link" : "./qc/apps/s_client.c.html#23712"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23712] The expression starttls_proto applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23715"
 , "c1link" : "./qc/apps/s_client.c.html#23715"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23715] The expression  ! reconnect applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23719"
 , "c1link" : "./qc/apps/s_client.c.html#23719"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23719] The expression reconnect applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23726"
 , "c1link" : "./qc/apps/s_client.c.html#23726"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23726] goto statement jump to re_start"
}} 
,
{ "ligne" : {
   "c1" : "23733"
 , "c1link" : "./qc/apps/s_client.c.html#23733"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23733] The expression  ! ssl_pending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23735"
 , "c1link" : "./qc/apps/s_client.c.html#23735"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23735] The expression tty_on applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23744"
 , "c1link" : "./qc/apps/s_client.c.html#23744"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23744] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23744"
 , "c1link" : "./qc/apps/s_client.c.html#23744"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23744] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23760"
 , "c1link" : "./qc/apps/s_client.c.html#23760"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23760] The expression write_tty applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23763"
 , "c1link" : "./qc/apps/s_client.c.html#23763"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23763] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23763"
 , "c1link" : "./qc/apps/s_client.c.html#23763"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23763] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23780"
 , "c1link" : "./qc/apps/s_client.c.html#23780"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23780] The expression read_ssl applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23783"
 , "c1link" : "./qc/apps/s_client.c.html#23783"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23783] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23783"
 , "c1link" : "./qc/apps/s_client.c.html#23783"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23783] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23798"
 , "c1link" : "./qc/apps/s_client.c.html#23798"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23798] The expression write_ssl applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23801"
 , "c1link" : "./qc/apps/s_client.c.html#23801"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23801] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23801"
 , "c1link" : "./qc/apps/s_client.c.html#23801"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23801] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23831"
 , "c1link" : "./qc/apps/s_client.c.html#23831"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23831] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23865"
 , "c1link" : "./qc/apps/s_client.c.html#23865"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23865] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23900"
 , "c1link" : "./qc/apps/s_client.c.html#23900"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23900] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23915"
 , "c1link" : "./qc/apps/s_client.c.html#23915"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23915] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23925"
 , "c1link" : "./qc/apps/s_client.c.html#23925"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23925] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23959"
 , "c1link" : "./qc/apps/s_client.c.html#23959"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23959] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23991"
 , "c1link" : "./qc/apps/s_client.c.html#23991"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23991] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24027"
 , "c1link" : "./qc/apps/s_client.c.html#24027"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24027] The expression c_brief applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24031"
 , "c1link" : "./qc/apps/s_client.c.html#24031"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24031] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "24035"
 , "c1link" : "./qc/apps/s_client.c.html#24035"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24035] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "24040"
 , "c1link" : "./qc/apps/s_client.c.html#24040"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24040] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "24066"
 , "c1link" : "./qc/apps/s_client.c.html#24066"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24066] The expression crlf applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24098"
 , "c1link" : "./qc/apps/s_client.c.html#24098"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24098] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "24127"
 , "c1link" : "./qc/apps/s_client.c.html#24127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24127] The expression in_init applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24142"
 , "c1link" : "./qc/apps/s_client.c.html#24142"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[24142] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "24142"
 , "c1link" : "./qc/apps/s_client.c.html#24142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[24142] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "24146"
 , "c1link" : "./qc/apps/s_client.c.html#24146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24146] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24146"
 , "c1link" : "./qc/apps/s_client.c.html#24146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24146] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "24151"
 , "c1link" : "./qc/apps/s_client.c.html#24151"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24151] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24151"
 , "c1link" : "./qc/apps/s_client.c.html#24151"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24151] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24256"
 , "c1link" : "./qc/apps/s_client.c.html#24256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24256] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24261"
 , "c1link" : "./qc/apps/s_client.c.html#24261"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24261] The expression full applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24297"
 , "c1link" : "./qc/apps/s_client.c.html#24297"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24297] The expression c_showcerts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24390"
 , "c1link" : "./qc/apps/s_client.c.html#24390"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24390] The expression (0) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24390"
 , "c1link" : "./qc/apps/s_client.c.html#24390"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24390] The expression (0) is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "24396"
 , "c1link" : "./qc/apps/s_client.c.html#24396"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24396] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24409"
 , "c1link" : "./qc/apps/s_client.c.html#24409"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24409] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24409"
 , "c1link" : "./qc/apps/s_client.c.html#24409"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24409] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24409"
 , "c1link" : "./qc/apps/s_client.c.html#24409"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24409] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24418"
 , "c1link" : "./qc/apps/s_client.c.html#24418"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24418] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24427"
 , "c1link" : "./qc/apps/s_client.c.html#24427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24427] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24443"
 , "c1link" : "./qc/apps/s_client.c.html#24443"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24443] The expression srtp_profile applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24449"
 , "c1link" : "./qc/apps/s_client.c.html#24449"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24449] The expression istls13 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24521"
 , "c1link" : "./qc/apps/s_client.c.html#24521"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24521] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24558"
 , "c1link" : "./qc/apps/s_client.c.html#24558"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24558] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24567"
 , "c1link" : "./qc/apps/s_client.c.html#24567"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24567] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24569"
 , "c1link" : "./qc/apps/s_client.c.html#24569"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24569] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24577"
 , "c1link" : "./qc/apps/s_client.c.html#24577"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24577] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24579"
 , "c1link" : "./qc/apps/s_client.c.html#24579"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24579] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24590"
 , "c1link" : "./qc/apps/s_client.c.html#24590"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24590] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24597"
 , "c1link" : "./qc/apps/s_client.c.html#24597"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24597] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24599"
 , "c1link" : "./qc/apps/s_client.c.html#24599"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24599] goto statement jump to end"
}} 
]
};
console.log('leListeStr 99 main end');
