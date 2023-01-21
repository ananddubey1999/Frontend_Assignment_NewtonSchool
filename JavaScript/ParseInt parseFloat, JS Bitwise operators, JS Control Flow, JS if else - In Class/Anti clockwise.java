import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class Main {
    public static void main (String[] args) {
                      // Your code here
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int arr[][] = new int[n][n];
        for(int i =0; i<n; i++){
                for(int j= 0; j<n; j++){
                       arr[i][j] = sc.nextInt(); 
                }
        }
        int i = n, k = 0, flag = 0, j = 0;
        while (i > 0) {
                for (j = flag; j < i; j++) {
                        System.out.print(arr[j][k] + " ");
                }
                i = i - 1;
                j = j - 1;
                k = j;
                if (i > 0) {
                        for (j = n - i; j < i + 1; j++) {
                                System.out.print(arr[k][j] + " ");
                        }
                        for (j = k - 1; j > n - i - 2; j--) {
                                System.out.print(arr[j][k] + " ");
                        }
                }
                else {
                        break;
                }
                j = j + 1;
                k = j;
                i = i - 1;
                if (i > 0) {
                        for (j = i; j > n - i - 2; j--) {
                                System.out.print(arr[k][j] + " ");
                        }
                        k = k + 1;
                        i = i + 1;
                        flag = flag + 1;
                }
                else {
                        break;
                }
        }
    }
}
