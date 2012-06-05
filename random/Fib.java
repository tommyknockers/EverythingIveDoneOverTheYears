import java.math.BigInteger;
import java.util.*;

public class Fib {
  
  public static Hashtable<BigInteger, BigInteger> numbers = new Hashtable<BigInteger, BigInteger>();
	
	public static void main(String[] args) {
		BigInteger big0 = new BigInteger ("0");
		BigInteger big1 = new BigInteger ("1");
    numbers.put(big0, big0);
    numbers.put(big1, big1);
		
		long N;
		int d;
		
		Scanner scanIn = new Scanner(System.in);
		
		System.out.println("Enter '1' for recursive Fibonacci, 2 for Dijkstra's Fibonacci: ");
		d = scanIn.nextInt();
		System.out.println("Enter an integer:  ");
		if (d == 1)
		{
			N = scanIn.nextInt();
			for (int i = 1; i<=N; i++)
				System.out.println("Finonacci number: " + i + " = " + fib(i));
		}
		else
		{
			N = scanIn.nextInt();
			for (int i = 1; i<=N; i++)
			{
				String stri = "" + i;
				BigInteger bigI = new BigInteger(stri);
				System.out.println("Finonacci number: " + i + " = " + dFib( bigI));
			}
		}
		
		
	}

	public static long fib(int n)
	{
		if (n <= 1) return n;
		else return fib(n-1) + fib(n-2);
	}

	
	public static BigInteger dFib(BigInteger n) {
		BigInteger big0 = new BigInteger ("0");
		BigInteger big1 = new BigInteger ("1");
		BigInteger big2 = new BigInteger ("2");

		if (numbers.contains(n))
			return numbers.get(n);

    else if (n.mod(big2).equals(big0)) {
        //fibs[n] = ((2 * fib((n / 2) - 1)) + fib(n / 2)) * fib(n / 2)
      
      BigInteger temp = n;
      temp = temp.divide(big2);
      temp = temp.subtract(big1);
      temp = dFib(temp);
      temp = temp.multiply(big2);
      BigInteger temp1 = n.divide(big2);
      temp1 = dFib(temp1);
      temp = temp.add(temp1);
      temp = temp.multiply(temp1);
      numbers.put(n, temp);
      return numbers.get(n);
		} else {
      // fibs[n] = (fib((n - 1) / 2) ** 2) + (fib((n+1) / 2) ** 2)
      BigInteger temp = n.subtract(big1);
      temp = temp.divide(big2);
      temp = dFib(temp);
      temp = temp.pow(2);
      BigInteger temp1 = n.add(big1);
      temp1 = temp1.divide(big2);
      temp1 = dFib(temp1);
      temp1 = temp1.pow(2);
      temp = temp.add(temp1);

      numbers.put(n,temp);
      return numbers.get(n);
		}
	}
}

