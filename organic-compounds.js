const chemicalDatabase = {
    alcohols: {
        "Ethanol": {
            iupacName: "Ethanol",
            commonName: "Ethyl Alcohol",
            structuralFormula: "CH3-CH2-OH"
        },
        "Methanol": {
            iupacName: "Methanol",
            commonName: "Methyl Alcohol",
            structuralFormula: "CH3-OH"
        },
        "Isopropanol": {
            iupacName: "Propan-2-ol",
            commonName: "Isopropyl Alcohol",
            structuralFormula: "CH3-CHOH-CH3"
        },
        "Butanol (n-Butanol)": {
            iupacName: "Butanol",
            commonName: "Butyl Alcohol",
            structuralFormula: "CH3-CH2-CH2-CH2-OH"
        },
        "2-Butanol": {
            iupacName: "2-Butanol",
            commonName: "Sec-Butyl Alcohol",
            structuralFormula: "CH3-CH(OH)-CH2-CH3"
        },
        "Tert-Butanol": {
            iupacName: "2-Methyl-2-propanol",
            commonName: "Tert-Butyl Alcohol",
            structuralFormula: "(CH3)3C-OH"
        },
        "Cyclohexanol": {
            iupacName: "Cyclohexanol",
            commonName: null,
            structuralFormula: "Cyclohexanol"
        },
        "Phenol": {
            iupacName: "Phenol",
            commonName: null,
            structuralFormula: "Phenol"
        },
        "Hexanol (Caproic Acid)": {
            iupacName: "Hexanol",
            commonName: "Caproic Acid",
            structuralFormula: "CH3-CH2-CH2-CH2-CH2-CH2-OH"
        },
        "Pentanol (n-Pentanol)": {
            iupacName: "Pentanol",
            commonName: "Amyl Alcohol",
            structuralFormula: "CH3-CH2-CH2-CH2-CH2-OH"
        },
        "Glycerol": {
            iupacName: "Propane-1,2,3-triol",
            commonName: "Glycerin",
            structuralFormula: "C3H8O3"
        },
        // Add more alcohols and their information here...
    },
    phenols: {
        "Phenol": {
            iupacName: "Phenol",
            commonName: null,
            structuralFormula: "Phenol"
        },
        "Cresol": {
            iupacName: "Methylphenol",
            commonName: null,
            structuralFormula: "Cresol"
        },
        "Hydroquinone": {
            iupacName: "Benzene-1,4-diol",
            commonName: null,
            structuralFormula: "Hydroquinone"
        },
        "Bisphenol A": {
            iupacName: "4,4'-Isopropylidenediphenol",
            commonName: null,
            structuralFormula: "Bisphenol A"
        },
        "Guaiacol": {
            iupacName: "2-Methoxyphenol",
            commonName: null,
            structuralFormula: "Guaiacol"
        },
        "4-Chlorophenol": {
            iupacName: "4-Chlorophenol",
            commonName: null,
            structuralFormula: "4-Chlorophenol"
        },
        // Add more phenols and their information here...
    },
    ethers: {
        "Dimethyl Ether": {
            iupacName: "Dimethyl Ether",
            commonName: null,
            structuralFormula: "CH3-O-CH3"
        },
        "Diethyl Ether": {
            iupacName: "Diethyl Ether",
            commonName: null,
            structuralFormula: "CH3-CH2-O-CH2-CH3"
        },
        "Methyl tert-Butyl Ether (MTBE)": {
            iupacName: "2-Methoxy-2-methylpropane",
            commonName: null,
            structuralFormula: "CH3-C(CH3)3-O-CH3"
        },
        "Dioxane": {
            iupacName: "1,4-Dioxane",
            commonName: null,
            structuralFormula: "Dioxane"
        },
        "Ethyl Vinyl Ether": {
            iupacName: "Ethoxyethene",
            commonName: null,
            structuralFormula: "CH3-CH=CH-O-CH2-CH3"
        },
        "Anisole": {
            iupacName: "Methoxybenzene",
            commonName: null,
            structuralFormula: "Anisole"
        },
        // Add more ethers and their information here...
    }
};



const simpleInfo = {
    alcohols: {
        title: "Alcohols",
        types: ["Primary Alcohol", "Secondary Alcohol", "Tertiary Alcohol"],
        preparation: "Alcohols can be prepared through various methods, including hydration of alkenes and reduction of carbonyl compounds."
    },
    phenols: {
        title: "Phenols",
        types: ["Simple Phenols", "Polyhydric Phenols", "Halogenated Phenols"],
        preparation: "Phenols are often prepared by the hydrolysis of diazonium salts."
    },
    ethers: {
        title: "Ethers",
        types: ["Symmetrical Ethers", "Unsymmetrical Ethers"],
        preparation: "Ethers can be synthesized by the Williamson ether synthesis and other methods."
    }
};

const detailedInfo = {
    alcohols: {
        title: "Alcohols",
        types: {
            primary: {
                structure: "R-CH2-OH",
                properties: "Primary alcohols have one alkyl group (R) attached to the carbon atom with the hydroxyl group.",
            },
            secondary: {
                structure: "R2-CHOH",
                properties: "Secondary alcohols have two alkyl groups (R) attached to the carbon atom with the hydroxyl group.",
            },
            tertiary: {
                structure: "R3-COH",
                properties: "Tertiary alcohols have three alkyl groups (R) attached to the carbon atom with the hydroxyl group.",
            },
        },
        preparation: "Alcohols can be prepared through various methods, including hydroboration-oxidation, reduction of carbonyl compounds, and Grignard reactions."
    },
    phenols: {
        title: "Phenols",
        types: {
            "Simple Phenols": {
                structure: "Ar-OH",
                properties: "Simple phenols have the general structure Ar-OH, where Ar represents an aromatic ring."
            },
            "Polyhydric Phenols": {
                structure: "Ar-(OH)n",
                properties: "Polyhydric phenols have multiple hydroxyl (-OH) groups and include compounds like resorcinol."
            },
        },
        preparation: "Phenols are often prepared by the hydrolysis of diazonium salts."
    },
    ethers: {
        title: "Ethers",
        types: {
            "Symmetrical Ethers": {
                structure: "R-O-R",
                properties: "Symmetrical ethers have two identical alkyl or aryl groups bonded to an oxygen atom."
            },
            "Unsymmetrical Ethers": {
                structure: "R1-O-R2",
                properties: "Unsymmetrical ethers have two different alkyl or aryl groups bonded to an oxygen atom."
            },
        },
        preparation: "Ethers can be synthesized by the Williamson ether synthesis and other methods."
    }
};



document.addEventListener("DOMContentLoaded", function () {
    const chemicalTypeSelect = document.getElementById("chemical-type");
    const compoundListSelect = document.getElementById("compound-list");
    const infoDetailSelect = document.getElementById("info-detail");
    const iupacNameDiv = document.getElementById("iupac-name");
    const structuralFormulaDiv = document.getElementById("structural-formula");
    const infoOutputDiv = document.getElementById("info-output");
    const showInfoButton = document.getElementById("show-info");

    // Function to populate the compound list based on the selected chemical type
    function populateCompoundList() {
        const selectedType = chemicalTypeSelect.value;
        const compounds = Object.keys(chemicalDatabase[selectedType]);
        compoundListSelect.innerHTML = ""; // Clear previous options
        compounds.forEach((compound) => {
            const option = document.createElement("option");
            option.value = compound;
            option.textContent = compound;
            compoundListSelect.appendChild(option);
        });
        // Clear previous selections
        iupacNameDiv.textContent = "IUPAC Name: ";
        structuralFormulaDiv.textContent = "Structural Formula: ";
        infoOutputDiv.textContent = ""; // Clear previous information
    }

    // Initial population of the compound list
    populateCompoundList();

    // Update the compound list when the chemical type changes
    chemicalTypeSelect.addEventListener("change", populateCompoundList);

    // Display information for the selected compound and detail level
    showInfoButton.addEventListener("click", function () {
        const selectedType = chemicalTypeSelect.value;
        const selectedCompound = compoundListSelect.value;
        const selectedDetail = infoDetailSelect.value;

        if (selectedType && selectedCompound) {
            let info;
            if (selectedDetail === "simple") {
                info = simpleInfo[selectedType];
            } else if (selectedDetail === "detailed") {
                info = detailedInfo[selectedType];
            }

            if (info) {
                // Display information in the output div
                infoOutputDiv.innerHTML = `Title: ${info.title}<br>`;
                if (selectedDetail === "simple") {
                    infoOutputDiv.innerHTML += `Types: ${info.types.join(", ")}<br>`;
                    infoOutputDiv.innerHTML += `Preparation: ${info.preparation}`;
                } else if (selectedDetail === "detailed") {
                    for (const type in info.types) {
                        infoOutputDiv.innerHTML += `<br>${type}:<br>Structure: ${info.types[type].structure}<br>Properties: ${info.types[type].properties}<br>`;
                    }
                    infoOutputDiv.innerHTML += `Preparation: ${info.preparation}`;
                }
                // Display IUPAC name and structural formula
                if (chemicalDatabase[selectedType][selectedCompound]) {
                    iupacNameDiv.innerHTML = "IUPAC Name: " + chemicalDatabase[selectedType][selectedCompound].iupacName;
                    structuralFormulaDiv.innerHTML = "Structural Formula: " + chemicalDatabase[selectedType][selectedCompound].structuralFormula;
                }
            }
        }
    });
});
