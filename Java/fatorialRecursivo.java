package melhoriasDeCods;

import javax.swing.JOptionPane;

public class fatorialRecursivo {

	public static void main(String[] args) {

		int numero = Integer.parseInt(JOptionPane.showInputDialog(null, "Digite o número a ser calculado:"));
		if (numero > 0)
			JOptionPane.showMessageDialog(null, fatorial(numero));
		else {
			JOptionPane.showMessageDialog(null, "valor informado invalido");
			fatorialRecursivo.main(null);
		}

	}

	public static int fatorial(int num) {
		if (num == 0) {
			return 1;
		}
		return num * fatorial(num - 1);
	}
}