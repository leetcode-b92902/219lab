#include<stdio.h>
#include<limits.h>

int minPathSum(int** grid, int gridRowSize, int gridColSize) {
    int dpRow[gridColSize];
    dpRow[0] = 0;
    for (int i = 1; i < gridColSize; ++i) {
        dpRow[i] = INT_MAX;
    }
    for (int r = 0; r < gridRowSize; ++r) {
        int prevCell = INT_MAX;
        for (int c = 0; c < gridColSize; ++c) {
            if (dpRow[c] < prevCell) {
                dpRow[c] = grid[r][c] + dpRow[c];
            } else {
                dpRow[c] = grid[r][c] + prevCell;
            }

            prevCell = dpRow[c];
        }
    }
    return dpRow[gridColSize - 1];
}

int main() {
    int r1[3] = {1, 3, 1};
    int r2[3] = {1, 5, 1};
    int r3[3] = {4, 2, 1};
    int *gg[3] = {r1, r2, r3};
    printf("%d\n", minPathSum(gg, 3, 3));
    int r4[4] = {1, 3, 1, 1};
    int r5[4] = {1, 5, 2, 1};
    int r6[4] = {4, 2, 1, 2};
    int *gg2[3] = {r4, r5, r6};
    printf("%d\n", minPathSum(gg2, 3, 4));
    return 0;
}
