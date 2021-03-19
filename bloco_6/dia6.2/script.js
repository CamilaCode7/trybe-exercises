let states = document.getElementById('dropdown-estado');
function criandoOptions() {
	const stateOptions = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < stateOptions.length; index += 1) {
		let options = document.createElement('option');
		states.appendChild(options).innerText = stateOptions[index];
		states.appendChild(options).value = stateOptions[index];
	}
}
criandoOptions()