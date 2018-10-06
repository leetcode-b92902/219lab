void countChar(char *s, int count[26]) {
    memset(count, 0, sizeof(int) * 26);
    for (; *s != 0; ++s) {
        count[*s - 'a'] += 1;
    }    
}

/**
 * Return an array of size *returnSize.
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** wordSubsets(char** A, int ASize, char** B, int BSize, int* returnSize) {
    int BConstrain[26];
    memset(BConstrain, 0, sizeof(BConstrain));
    for (int i = 0; i < BSize; ++i) {
        int bCount[26];
        countChar(B[i], bCount);
        for (int c = 0; c < 26; ++c) {
            if (bCount[c] > BConstrain[c]) {
                BConstrain[c] = bCount[c];
            }
        }
    }
    
    char **ret = malloc(sizeof(char *) * ASize);
    int retTail = 0;
    for (int i = 0; i < ASize; ++i) {
        int aCount[26];
        bool isUniversal = true;
        countChar(A[i], aCount);
        for (int c = 0; c < 26; ++c) {
            if (aCount[c] < BConstrain[c]) {
                isUniversal = false;
                break;
            }
        }
        if (isUniversal) {
            ret[retTail] = A[i];
            retTail += 1;
        }
    }
    *returnSize = retTail;
    return realloc(ret, sizeof(char *) * retTail);   
}
