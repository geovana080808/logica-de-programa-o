1)
// Declaração das variáveis iniciais
let idade = 67
let categoria;
let resultado = idade;

// Primeiro nível: verifica idosos
if (idade &gt;= 60) {
const nome = &quot;Geovana&quot;;
categoria = &quot;idosa&quot;;
// Segundo nível: verifica adultos
} else {
if (idade &gt; 18) {
categoria = &quot;adulta&quot;;
// Terceiro nível: verifica adolescentes
} else {
if (idade &gt;= 12) {
categoria = &quot;adolescente&quot;;
//Quarto nível: verificado criança
} else {
if (idade &lt; 12) {
categoria = &quot;criança&quot;;
}
}
}
}
// Saída final
console.log(&quot;Categoria: &quot; ,categoria);
console.log(&quot;Idade final: &quot; ,resultado);

2)
// Declaração da variável idade
let idade = 5;

// Verifica se a pessoa não tem idade para votar
if (idade &lt; 16) {
console.log(&quot;Não vota.&quot;);
}

// Verifica o caso de adolescentes com voto facultativo
if (idade &gt;= 16 &amp;&amp; idade &lt; 18) {
console.log(&quot;Voto facultativo.&quot;);
}

// Verifica a faixa etária com voto obrigatório
if (idade &gt;= 18 &amp;&amp; idade &lt; 70) {
console.log(&quot;Voto obrigatório.&quot;);
}

// Verifica o caso de idosos com voto facultativo
if (idade &gt;= 70) {
console.log(&quot;Voto facultativo.&quot;);
}

3)
// Declaração da variável
let numero = -10;

// Primeira Verificação: Número positivo
if (numero &gt; 0) {
console.log(&quot;Positivo&quot;);

// Segunda Verificação: Número negativo
} else
if (numero &lt; 0) {
console.log(&quot;Negativo&quot;);
// Caso padrão: Número zero
} else{
console.log(&quot;Zero&quot;);
}

4)
// Declaração da variável
let combustivel = &quot;Diesel&quot;;

// Verifica se o combustível é Gasolina
if (combustivel === &quot;Gasolina&quot;) {
console.log(&quot;Você escolheu Gasolina&quot;);

// Verifica se o combustível é Álcool
} else
if (combustivel === &quot;Álcool&quot;) {
console.log(&quot;Você escolheu Álcool&quot;);

// Verifica se o combustível é Diesel
} else
if (combustivel === &quot;Diesel&quot;) {
console.log(&quot;Você escolheu Diesel&quot;);

// Caso padrão: qualquer outro valor é considerado inválido
} else {
console.log(&quot;Opção inválida&quot;);
}

5)
// Define a velocidade do veículo
let velocidade = 40;

// Mensagem inicial de atenção para o condutor
console.log(&quot;Atenção&quot;);

// Verifica se a velocidade está dentro do limite permitido
if (velocidade &lt;= 60) {
console.log(&quot;Dentro do limite&quot;);

// Verifica se está na faixa de atenção
} else
if (velocidade &lt;= 80) {
console.log(&quot;Aviso: próximo do limite&quot;);

// Caso padrão: velocidade acima do permitido
} else {
console.log(&quot;Multado&quot;);
}ECHO est� ativado.
