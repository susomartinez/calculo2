<script>
	export let max;
	export let operacions = [0];
	export let indice = 0;

	const OPERACIONS = [
		{
			nome: 'suma',
			simbolo: '+',
			op: '+'
		},
		{
			nome: 'resta',
			simbolo: '-',
			op: '-'
		},
		{
			nome: 'multiplicacion',
			simbolo: 'x',
			op: '*'
		},
		{
			nome: 'division',
			simbolo: '÷',
			op: '/'
		}
	];

	let num1, num2;

	$: num1 = Math.floor(Math.random() * max + 1) + indice - indice;
	$: num2 = Math.floor(Math.random() * max + 1) + indice - indice;
	$: if (operacions[indice] === 1 && num1 < num2) {
		const temp = num1;
		num1 = num2;
		num2 = temp;
	}
	$: if (operacions[indice] === 3) {
		num1 = num1 * num2;
	}
</script>

<section class="section">
	<div class="operacion">
		<span class="numero">
			{num1}
		</span>
		<span class="operador">
			{OPERACIONS[operacions[indice]].simbolo}
		</span>
		<span class="numero">
			{num2}
		</span>
	</div>
	<span class="resultado">
		{eval(num1 + OPERACIONS[operacions[indice]].op + num2)}
	</span>
</section>

<style>
	.operacion {
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.8rem;
		font-size: 9rem;
	}
	.numero {
		color: white;
	}
	.operador {
		color: yellow;
	}
	.resultado {
		color: gray;
		font-size: 2rem;
	}
</style>
