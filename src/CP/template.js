export const _competitve_programming_template =
    `#include <bits/stdc++.h>
#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>

using namespace std;
using namespace __gnu_pbds;

typedef tree<int, null_type, less_equal<int>, rb_tree_tag, tree_order_statistics_node_update> ordered_set;

#define loop(i, k, n) for (auto i = k; i <= n; ++i)
#define rloop(i, k, n) for (auto i = k; i >= n; --i)
#define FAST_IO \
ios_base::sync_with_stdio(0); \
cin.tie(0);                   \
cout.tie(0);

const int MAX_N = 1e5 + 5;
const long long MOD = 1e9 + 7;
const long long INF = 1e9 + 7;

typedef long long ll;
typedef vector<int> vi;
typedef pair<int, int> ii;
typedef vector<ii> vii;
typedef vector<vi> vvi;

#define LSOne(S) (S & (-S))
#define isBitSet(S, i) ((S >> i) & 1)
int input()
{
int temp;
cin >> temp;
return temp;
}

void solve()
{

}

int main()
{
FAST_IO;
int tc = input();
for (int t = 1; t <= tc; t++)
    solve();
return 0;
}`;

export const basic_cpp_template = `
#include<bits/stdc++.h>
using namespace std;

/*===== TREENODE CODE =====
struct TreeNode {
    int val;
    TreeNode * left;
    TreeNode * right;
    TreeNode(): val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x): val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode * left, TreeNode * right): val(x), left(left), right(right) {}
};
*/

/* == GRAPH NODE TEMPLATE CODE ===
struct Node {
    int val;
    vector < Node * > neighbors;
    Node(): val(0), neighbors({}) {};
    Node(int x): val(x), neighbors({}) {};
    Node(int x, vector < Node * > neighbors): val(x), neighbors(neighbors) {};
};
*/

int main(){
    return 0;
}
`;