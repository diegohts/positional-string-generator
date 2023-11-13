function generateFields() {
    const lineNumber = document.getElementById('lineNumber').value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    for (let i = 1; i <= lineNumber; i++) {
        const lineDiv = document.createElement('div');
        lineDiv.classList.add('line');

        const indexField = document.createElement('input');
        indexField.type = 'text';
        indexField.value = i;
        lineDiv.appendChild(createField('Índice:', indexField));

        const nameField = document.createElement('input');
        nameField.type = 'text';
        lineDiv.appendChild(createField('Campo:', nameField));

        const valueField = document.createElement('input');
        valueField.type = 'text';
        lineDiv.appendChild(createField('Valor:', valueField));

        const sizeField = document.createElement('input');
        sizeField.type = 'number';
        lineDiv.appendChild(createField('Tamanho:', sizeField));

        const selectField = document.createElement('select');
        selectField.innerHTML = '<option value="">Nenhuma das opções</option><option value="numeric">Numérico</option><option value="alphanumeric">Alfanumérico</option>';
        lineDiv.appendChild(createField('Tipo:', selectField));

        outputDiv.appendChild(lineDiv);
    }

    const generateStringButton = document.createElement('button');
    generateStringButton.textContent = 'Gerar String Posicional';
    generateStringButton.onclick = generateString;
    outputDiv.appendChild(generateStringButton);

    const resultTextArea = document.createElement('textarea');
    resultTextArea.id = 'resultTextArea';
    resultTextArea.rows = 4;
    resultTextArea.placeholder = 'String Posicional Gerada';
    outputDiv.appendChild(resultTextArea);
    resultTextArea.style.display = 'none';
}

function createField(labelText, inputField) {
    const fieldDiv = document.createElement('div');
    const label = document.createElement('label');
    label.textContent = labelText;
    fieldDiv.appendChild(label);
    fieldDiv.appendChild(inputField);
    return fieldDiv;
}

function generateString() {
    const lines = document.querySelectorAll('.line');
    let resultString = '';

    lines.forEach((line) => {
        const values = Array.from(line.getElementsByTagName('input')).map((input) => input.value);
        const selectValue = line.querySelector('select').value;

        if (selectValue === 'numeric') {
            values[2] = values[2].padStart(values[3], '0');
        } else if (selectValue === 'alphanumeric') {
            values[2] = values[2].padEnd(values[3]);
        }

        resultString += values[2];
    });

    const resultTextArea = document.getElementById('resultTextArea');
    resultTextArea.value = resultString;
    resultTextArea.style.display = 'block';
}
