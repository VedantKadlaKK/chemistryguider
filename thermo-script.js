let selectedProblem;
let selectedParameters = [];
const userInput = {};

// Define a mapping of symbols to full parameter names
const parameterNames = {
    P: 'Pressure',
    V: 'Volume',
    T: 'Temperature',
    Q: 'Heat',
    m: 'Mass',
    c: 'Specific Heat Capacity',
    ΔT: 'Temperature Change',
    W: 'Work Done',
    H: 'Enthalpy',
};

function proceedToInputs() {
    const problemSelect = document.getElementById('problemSelect');
    selectedProblem = problemSelect.value;
    const parameters = document.getElementById('parameters');
    parameters.innerHTML = ''; // Clear any previous inputs
    selectedParameters = [];

    switch (selectedProblem) {
        case 'idealGasLaw':
            selectedParameters = ['P1', 'V1', 'T1', 'P2', 'V2', 'T2'];
            break;

        case 'heatTransfer':
            selectedParameters = ['Q', 'm', 'c', 'ΔT'];
            break;

        case 'workDone':
            selectedParameters = ['W', 'P', 'V'];
            break;
    }

    selectedParameters.forEach(parameter => {
        const label = document.createElement('label');
        let parameterDisplayName = parameterNames[parameter] || parameter;
        let parameterShortName = parameter[0].toUpperCase() + parameter.slice(1);
        if (parameter === 'T1' || parameter === 'T2') {
            label.textContent = `Temperature (${parameter[1]}) (in units):`;
        } else if (parameter === 'P1' || parameter === 'P2') {
            label.textContent = `Pressure (${parameter[1]}) (in units):`;
        } else if (parameter === 'V1' || parameter === 'V2') {
            label.textContent = `Volume (${parameter[1]}) (in units):`;    

        } else {
            label.textContent = `${parameterDisplayName} (in units):`;
        }
        const input = document.createElement('input');
        input.type = 'number';
        input.id = parameter;
        label.appendChild(input);

        const unitSelector = document.createElement('select');
        unitSelector.id = `${parameter}Unit`;
        unitSelector.innerHTML = '<option value="J">Joules</option><option value="kJ">Kilojoules</option>';
        label.appendChild(unitSelector);

        parameters.appendChild(label);
    });

    // Show the Calculate button
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.style.display = 'block';
}


// Rest of the code remains the same

function calculate() {
    const result = document.getElementById('result');
    result.textContent = ''; // Clear any previous results

    selectedParameters.forEach(parameter => {
        const valueInput = document.getElementById(parameter);
        const unitSelector = document.getElementById(`${parameter}Unit`);
        const unit = unitSelector.value;
        userInput[parameter] = {
            value: parseFloat(valueInput.value),
            unit: unit
        };
    });

    let missingParameter = null;

    switch (selectedProblem) {
        case 'idealGasLaw':
            const { P1, V1, T1, P2, V2, T2 } = userInput;
            missingParameter = calculateMissingIdealGasLaw(P1, V1, T1, P2, V2, T2);
            break;

        case 'heatTransfer':
            const { Q, m, c, ΔT } = userInput;
            missingParameter = calculateMissingHeatTransfer(Q, m, c, ΔT);
            break;

        case 'workDone':
            const { W, P, V } = userInput;
            missingParameter = calculateMissingWorkDone(W, P, V);
            break;

        case 'enthalpyChange':
            const { H1, H2 } = userInput;
            missingParameter = calculateEnthalpyChange(H1, H2);
            break; // Added the enthalpy calculation logic.
    }

    if (missingParameter !== null) {
        // Store the result in a variable
        const calculatedResult = `${missingParameter.value} ${missingParameter.unit}`;
        result.textContent = `Result: ${calculatedResult}`;
        // Show the "Show Process" button after calculation
        const showProcessButton = document.getElementById('showProcessButton');
        showProcessButton.style.display = 'block';
        // Store the result in a data attribute for later retrieval
        result.setAttribute('data-calculated-result', calculatedResult);
    } else {
        result.textContent = 'Please provide at least one missing parameter.';
    }
}


// ... (your existing code) ...

// Function to show the step-by-step process
// Function to show the step-by-step process
// Function to show the step-by-step process
function showProcess() {
    const steps = [];

    const processContainer = document.getElementById('processContainer');
    processContainer.style.display = 'block';

    const processList = document.getElementById('processList');
    processList.innerHTML = ''; // Clear any previous steps

    const resultText = document.getElementById('result').textContent;
    const problemType = selectedProblem;
    const parameters = selectedParameters;

    // Define the values provided by the user
    const userValues = {};
    for (const param of parameters) {
        userValues[param] = userInput[param].value;
        const unit = userInput[param].unit;
        const paramName = parameterNames[param] || param;
        steps.push(`Given: ${paramName} = ${userValues[param]} ${unit}`);
    }

    // Determine the calculation based on the problem type
    let calculation;
    if (problemType === 'idealGasLaw') {
        calculation = `W = P1 * V1 * T1 / P2 * V2 * T2`;
        steps.push(`Using the Ideal Gas Law formula: ${calculation}`);
    } else if (problemType === 'heatTransfer') {
        calculation = `W = Q = m * c * ΔT`;
        steps.push(`Using the Heat Transfer formula: ${calculation}`);
    } else if (problemType === 'workDone') {
        calculation = `W = P * V`;
        steps.push(`Using the Work Done formula: ${calculation}`);
    }

    // Calculate the result
    const result = `${resultText}`;

    steps.push(`Calculating the result: ${result}`);

    // Display the steps in the processList
    for (const step of steps) {
        const li = document.createElement('li');
        li.textContent = step;
        processList.appendChild(li);
    }
}




// ... (your existing code) ...


function calculateMissingIdealGasLaw(pressure1, volume1, temperature1, pressure2, volume2, temperature2) {
    if (isNaN(pressure1.value)) {
        pressure1.value = (pressure2.value * volume2.value * temperature1.value) / (volume1.value * temperature2.value);
        pressure1.unit = pressure2.unit;
        return { value: pressure1.value, unit: pressure2.unit, name: 'Pressure (P1)' };
    }
    if (isNaN(volume1.value)) {
        volume1.value = (pressure2.value * volume2.value * temperature1.value) / (pressure1.value * temperature2.value);
        volume1.unit = volume2.unit;
        return { value: volume1.value, unit: volume2.unit, name: 'Volume (V1)' };
    }
    if (isNaN(temperature1.value)) {
        temperature1.value = (pressure2.value * volume2.value * temperature1.value) / (pressure1.value * volume1.value);
        temperature1.unit = temperature2.unit;
        return { value: temperature1.value, unit: temperature2.unit, name: 'Temperature (T1)' };
    }
    if (isNaN(pressure2.value)) {
        pressure2.value = (pressure1.value * volume1.value * temperature2.value) / (volume2.value * temperature1.value);
        pressure2.unit = pressure1.unit;
        return { value: pressure2.value, unit: pressure1.unit, name: 'Pressure (P2)' };
    }
    if (isNaN(volume2.value)) {
        volume2.value = (pressure1.value * volume1.value * temperature2.value) / (pressure2.value * temperature1.value);
        volume2.unit = volume1.unit;
        return { value: volume2.value, unit: volume1.unit, name: 'Volume (V2)' };
    }
    if (isNaN(temperature2.value)) {
        temperature2.value = (pressure1.value * volume1.value * temperature2.value) / (pressure2.value * volume2.value);
        temperature2.unit = temperature1.unit;
        return { value: temperature2.value, unit: temperature1.unit, name: 'Temperature (T2)' };
    }

    return null;
}

function calculateMissingHeatTransfer(heatTransfer, mass, specificHeat, temperatureChange) {
    if (isNaN(heatTransfer.value)) {
        heatTransfer.value = mass.value * specificHeat.value * temperatureChange.value;
        heatTransfer.unit = mass.unit;
        return { value: heatTransfer.value, unit: mass.unit, name: 'Heat Transfer (Q)' };
    }
    if (isNaN(mass.value)) {
        mass.value = heatTransfer.value / (specificHeat.value * temperatureChange.value);
        mass.unit = heatTransfer.unit;
        return { value: mass.value, unit: heatTransfer.unit, name: 'Mass (m)' };
    }
    if (isNaN(specificHeat.value)) {
        specificHeat.value = heatTransfer.value / (mass.value * temperatureChange.value);
        specificHeat.unit = heatTransfer.unit;
        return { value: specificHeat.value, unit: heatTransfer.unit, name: 'Specific Heat (c)' };
    }
    if (isNaN(temperatureChange.value)) {
        temperatureChange.value = heatTransfer.value / (mass.value * specificHeat.value);
        temperatureChange.unit = heatTransfer.unit;
        return { value: temperatureChange.value, unit: heatTransfer.unit, name: 'Temperature Change (ΔT)' };
    }

    return null;
}

function calculateMissingWorkDone(workDone, pressure, volume) {
    if (isNaN(workDone.value)) {
        workDone.value = pressure.value * volume.value;
        workDone.unit = pressure.unit;
        return { value: workDone.value, unit: pressure.unit, name: 'Work Done (W)' };
    }
    if (isNaN(pressure.value)) {
        pressure.value = workDone.value / volume.value;
        pressure.unit = workDone.unit;
        return { value: pressure.value, unit: workDone.unit, name: 'Pressure (P)' };
    }
    if (isNaN(volume.value)) {
        volume.value = workDone.value / pressure.value;
        volume.unit = workDone.unit;
        return { value: volume.value, unit: workDone.unit, name: 'Volume (V)' };
    }

    return null;
}
