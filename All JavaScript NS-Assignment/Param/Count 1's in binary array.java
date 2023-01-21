import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class Main {
    public static void main (String[] args) {
        // Your code here
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            int count = 0;
            int left = 0, right = n - 1;
            while (left <= right) {
                int mid = (left + right) / 2;
                if (arr[mid] == 1) {
                    count += mid - left + 1;
                    left = mid + 1;
                } 
                else {
                    right = mid - 1;
                }
            }
            System.out.println(count);
        }
    }
}
