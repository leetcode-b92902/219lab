bool isMatch(char* s, char* p) {
    if (*p == 0) {
        return *s == 0;
    }
    char c = *p;
    bool star = *(p + 1) == '*';
    p += star ? 2 : 1;

    if (!star) {
        if (*s == 0 || (c != '.' && *s != c)) {
            return false;
        }
        return isMatch(s + 1, p);
    }
    for (; *s != 0; ++s) {
        if (isMatch(s, p)) {
            return true;
        }
        if (c != '.' && *s != c) {
            return false;
        }
    }
    return isMatch(s, p);
}
