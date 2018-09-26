bool partMatchNonStar(char *s, char *p, int len) {
    for (int i = 0; i < len; ++i) {
        if (p[i] != '?' && p[i] != s[i]) {
            return false;
        }
    }
    return true;
}

bool isMatch(char* s, char* p) {
    char *s_end = strchr(s, 0);
    char *p_end = strchr(p, 0);

    char *star = strchr(p, '*');
    if (star == NULL) {
        return ((s_end - s) == (p_end - p)) && partMatchNonStar(s, p, p_end - p);
    }
    if ((s_end - s) < (star - p) || !partMatchNonStar(s, p, star - p)) {
        return false;
    }
    s += (star - p);
    p = star;

    if (p_end[-1] != '*') {
        star = p_end - 1;
        while (star > p && *star != '*') {
            --star;
        }
        int tail_len = p_end - star - 1;
        char *s_tail = s_end - tail_len;
        if (s_tail < s || !partMatchNonStar(s_tail, star + 1, tail_len)) {
            return false;
        }
        s_end = s_tail;
        p_end = star + 1;
    }

    while (p < p_end) {
        while (p < p_end && *p == '*') {
            ++p;
        }
        if (p == p_end) {
            return true;
        }
        char *slice = p;
        p = strchr(p, '*');
        assert(p != NULL && p < p_end);

        int slice_len = p - slice;
        bool matched = false;
        for (; (s + slice_len) <= s_end && !matched; ++s) {
            matched = partMatchNonStar(s, slice, slice_len);
            if (matched) {
                break;
            }
        }
        if (!matched) {
            return false;
        }

        s += slice_len;
    }
    return true;
}
