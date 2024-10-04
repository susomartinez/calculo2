<script>
	export let max;

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

	const op = Math.floor(Math.random() * OPERACIONS.length);
	let num1 = Math.floor(Math.random() * max + 1);
	let num2 = Math.floor(Math.random() * max + 1);
	if (op === 1 && num1 < num2) {
		const temp = num1;
		num1 = num2;
		num2 = temp;
	}
	if (op === 3) {
		num1 = num1 * num2;
	}
</script>

<section class="section">
	<div class="operacion">
		<span class="numero">
			{num1}
		</span>
		<span class="operador">
			{OPERACIONS[op].simbolo}
		</span>
		<span class="numero">
			{num2}
		</span>
	</div>
	<span class="resultado">
		{eval(num1 + OPERACIONS[op].op + num2)}
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
