/* El factorial de un entero positivo n, el factorial de n o n factorial se define en principio como el producto de todos los 
números enteros positivos desde 1 (es decir, los números naturales) hasta n. Por ejemplo:
 
5! = 1×2×3×4×5=120.
 
el factorial de 0 es 1.
el numero no puede ser negativo */

public class CalcularFactorial {

    public static long calcularFactorial(int numero) {

        if (numero < 0) {
            throw new IllegalArgumentException("El número debe ser positivo.");
        }
        
        // Caso base: factorial de 0 es 1
        if (numero == 0) {
            return 1;
        }
        
        return numero * calcularFactorial(numero - 1);
    }

    //a fines de resolver el desafio se calcula el factorial de numero 5
    public static void main(String[] args) {
        int numero = 5;
        long factorial = calcularFactorial(numero);
        System.out.println("El factorial de " + numero + " es: " + factorial);
    }
}
