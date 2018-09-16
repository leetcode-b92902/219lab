typedef int Mat6[6][6];
const MOD = 1000000007;

void Mat6Mut (Mat6 a, Mat6 b, Mat6 c) {
    for (int i = 0; i < 6; ++i){
        for (int j = 0; j < 6; ++j) {
            int ij = 0;
            for (int k = 0; k < 6; ++k) {
                ij = (ij + (((long long)a[i][k]) * b[k][j]) % MOD) % MOD; 
            }
            c[i][j] = ij;
        }
    }
}

void dumpMat6 (int m[6][6]) {
    for (int i = 0; i < 6; ++i) {
        for (int j = 0; j < 6; ++j) {
            printf("%d ", m[i][j]);
        }
        printf("\n");
    }
}

int checkRecord(int n) {
    Mat6 t = {
          /* p0 l0 L0 p1 l1 L1 */
    /*p0*/ { 1, 1, 0, 1, 0, 0},
    /*l0*/ { 1, 0, 1, 1, 0, 0},
    /*L0*/ { 1, 0, 0, 1, 0, 0},
    /*p1*/ { 0, 0, 0, 1, 1, 0},
    /*l1*/ { 0, 0, 0, 1, 0, 1},
    /*L1*/ { 0, 0, 0, 1, 0, 0}
    };
    Mat6 c = {
        {1, 0, 0, 0, 0, 0},
        {0, 1, 0, 0, 0, 0},
        {0, 0, 1, 0, 0, 0},
        {0, 0, 0, 1, 0, 0},
        {0, 0, 0, 0, 1, 0},
        {0, 0, 0, 0, 0, 1}
    };
    
    for (;n > 0; n >>= 1) {
        Mat6 prev;
        if (n & 1) {
            memcpy(prev, c, sizeof(Mat6));
            Mat6Mut(prev, t, c);
        }
        memcpy(prev, t, sizeof(Mat6));
        Mat6Mut(prev, prev, t);
    }
    int ans = 0;
    for (int i = 0; i < 6; ++i) {
        ans = (ans + c[0][i]) % MOD;
    }

    return ans;
}
