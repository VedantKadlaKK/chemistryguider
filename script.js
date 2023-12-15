document.addEventListener('DOMContentLoaded', function () {
    const userQueryInput = document.getElementById('userQuery');
    const submitButton = document.getElementById('submitQuery');
    const answerContainer = document.getElementById('answerContainer');


    // Sample data for elements (replace this with your actual element data)

    const csvData = `AtomicNumber,Element,Symbol,AtomicMass,NumberofNeutrons,NumberofProtons,NumberofElectrons,Period,Group,Phase,Radioactive,Natural,Metal,Nonmetal,Metalloid,Type,AtomicRadius,Electronegativity,FirstIonization,Density,MeltingPoint,BoilingPoint,NumberOfIsotopes,Discoverer,Year,SpecificHeat,NumberofShells,NumberofValence
    1,Hydrogen,H,1.007,0,1,1,1,1,gas,Extremely Low,yes,No,yes,No,Nonmetal,0.79,2.2,13.5984,8.99E-05,14.175,20.28,3,Cavendish,1766,14.304,1,1
    2,Helium,He,4.002,2,2,2,1,18,gas,Extremely Low,yes,No,yes,No,Noble Gas,0.49,Not specified,24.5874,1.79E-04,,4.22,5,Janssen,1868,5.193,1,Not specified
    3,Lithium,Li,6.941,4,3,3,2,1,solid,Low,yes,yes,No,No,Alkali Metal,2.1,0.98,5.3917,5.34E-01,453.85,1615,5,Arfvedson,1817,3.582,2,1
    4,Beryllium,Be,9.012,5,4,4,2,2,solid,Low,yes,yes,No,No,Alkaline Earth Metal,1.4,1.57,9.3227,1.85E+00,1560.15,2742,6,Vaulquelin,1798,1.825,2,2
    5,Boron,B,10.811,6,5,5,2,13,solid,Extremely Low,yes,No,No,yes,Metalloid,1.2,2.04,8.298,2.34E+00,2573.15,4200,6,Gay-Lussac,1808,1.026,2,3
    6,Carbon,C,12.011,6,6,6,2,14,solid,Extremely Low,yes,No,yes,No,Nonmetal,0.91,2.55,11.2603,2.27E+00,3948.15,4300,7,Prehistoric,Not specified,0.709,2,4
    7,Nitrogen,N,14.007,7,7,7,2,15,gas,Extremely Low,yes,No,yes,No,Nonmetal,0.75,3.04,14.5341,1.25E-03,63.29,77.36,8,Rutherford,1772,1.04,2,5
    8,Oxygen,O,15.999,8,8,8,2,16,gas,Extremely Low,yes,No,yes,No,Nonmetal,0.65,3.44,13.6181,1.43E-03,50.5,90.2,8,Priestley/Scheele,1774,0.918,2,6
    9,Fluorine,F,18.998,10,9,9,2,17,gas,Extremely Low,yes,No,yes,No,Halogen,0.57,3.98,17.4228,1.70E-03,53.63,85.03,6,Moissan,1886,0.824,2,7
    10,Neon,Ne,20.18,10,10,10,2,18,gas,Extremely Low,yes,No,yes,No,Noble Gas,0.51,Not specified,21.5645,9.00E-04,24.703,27.07,8,Ramsay and Travers,1898,1.03,2,8
    11,Sodium,Na,22.99,12,11,11,3,1,solid,Low,yes,yes,No,No,Alkali Metal,2.2,0.93,5.1391,9.71E-01,371.15,1156,7,Davy,1807,1.228,3,1
    12,Magnesium,Mg,24.305,12,12,12,3,2,solid,Low,yes,yes,No,No,Alkaline Earth Metal,1.7,1.31,7.6462,1.74E+00,923.15,1363,8,Black,1755,1.023,3,2
    13,Aluminum,Al,26.982,14,13,13,3,13,solid,Low,yes,yes,No,No,Metal,1.8,1.61,5.9858,2.70E+00,933.4,2792,8,Wshler,1827,0.897,3,3
    14,Silicon,Si,28.086,14,14,14,3,14,solid,Low,yes,No,No,yes,Metalloid,1.5,1.9,8.1517,2.33E+00,1683.15,3538,8,Berzelius,1824,0.705,3,4
    15,Phosphorus,P,30.974,16,15,15,3,15,solid,Low,yes,No,yes,No,Nonmetal,1.2,2.19,10.4867,1.82E+00,317.25,553,7,BranBrand,1669,0.769,3,5
    16,Sulfur,S,32.065,16,16,16,3,16,solid,Low,yes,No,yes,No,Nonmetal,1.1,2.58,10.36,2.07E+00,388.51,717.8,10,Prehistoric,Not specified,0.71,3,6
    17,Chlorine,Cl,35.453,18,17,17,3,17,gas,Low,yes,No,yes,No,Halogen,0.97,3.16,12.9676,3.21E-03,172.31,239.11,11,Scheele,1774,0.479,3,7
    18,Argon,Ar,39.948,22,18,18,3,18,gas,Low,yes,No,yes,No,Noble Gas,0.88,Not specified,15.7596,1.78E-03,83.96,87.3,8,Rayleigh and Ramsay,1894,0.52,3,8
    19,Potassium,K,39.098,20,19,19,4,1,solid,Low,yes,yes,No,No,Alkali Metal,2.8,0.82,4.3407,8.62E-01,336.5,1032,10,Davy,1807,0.757,4,1
    20,Calcium,Ca,40.078,20,20,20,4,2,solid,Low,yes,yes,No,No,Alkaline Earth Metal,2.2,1,6.1132,1.54E+00,1112.15,1757,14,Davy,1808,0.647,4,2
    21,Scandium,Sc,44.956,24,21,21,4,3,solid,Low,yes,yes,No,No,Transition Metal,2.1,1.36,6.5615,2.99E+00,1812.15,3109,15,Nilson,1878,0.568,4,Not specified
    22,Titanium,Ti,47.867,26,22,22,4,4,solid,Low,yes,yes,No,No,Transition Metal,2,1.54,6.8281,4.54E+00,1933.15,3560,9,Gregor,1791,0.523,4,Not specified
    23,Vanadium,V,50.942,28,23,23,4,5,solid,Low,yes,yes,No,No,Transition Metal,1.9,1.63,6.7462,6.11E+00,2175.15,3680,9,   del Rio,1801,0.489,4,Not specified
    24,Chromium,Cr,51.996,28,24,24,4,6,solid,Low,yes,yes,No,No,Transition Metal,1.9,1.66,6.7665,7.15E+00,2130.15,2944,9,Vauquelin,1797,0.449,4,Not specified
    25,Manganese,Mn,54.938,30,25,25,4,7,solid,Low,yes,yes,No,No,Transition Metal,1.8,1.55,7.434,7.44E+00,1519.15,2334,11,"Gahn, Scheele",1774,0.479,4,Not specified
    26,Iron,Fe,55.845,30,26,26,4,8,solid,Low,yes,yes,No,No,Transition Metal,1.7,1.83,7.9024,7.87E+00,1808.15,3134,10,Prehistoric,Not specified,0.449,4,Not specified
    27,Cobalt,Co,58.933,32,27,27,4,9,solid,Low,yes,yes,No,No,Transition Metal,1.7,1.88,7.881,8.86E+00,1768.15,3200,14,Brandt,1735,0.421,4,Not specified
    28,Nickel,Ni,58.693,31,28,28,4,10,solid,Low,yes,yes,No,No,Transition Metal,1.6,1.91,7.6398,8.91E+00,1726.15,3186,11,Cronstedt,1751,0.444,4,Not specified
    29,Copper,Cu,63.546,35,29,29,4,11,solid,Low,yes,yes,No,No,Transition Metal,1.6,1.9,7.7264,8.96E+00,1357.75,2835,11,Prehistoric,Not specified,0.385,4,Not specified
    30,Zinc,Zn,65.38,35,30,30,4,12,solid,Low,yes,yes,No,No,Transition Metal,1.5,1.65,9.3942,7.13E+00,692.88,1180,15,Prehistoric,Not specified,0.388,4,Not specified
    31,Gallium,Ga,69.723,39,31,31,4,13,solid,Low,yes,yes,No,No,Metal,1.8,1.81,5.9993,5.91E+00,302.91,2477,14,de Boisbaudran,1875,0.371,4,3
    32,Germanium,Ge,72.64,41,32,32,4,14,solid,Low,yes,No,No,yes,Metalloid,1.5,2.01,7.8994,5.32E+00,1211.45,3106,17,Winkler,1886,0.32,4,4
    33,Arsenic,As,74.922,42,33,33,4,15,solid,Low,yes,No,No,yes,Metalloid,1.3,2.18,9.7886,5.78E+00,1090.15,887,14,Albertus Magnus,1250,0.329,4,5
    34,Selenium,Se,78.96,45,34,34,4,16,solid,Low,yes,No,yes,No,Nonmetal,1.2,2.55,9.7524,4.81E+00,494.15,958,20,Berzelius,1817,0.321,4,6
    35,Bromine,Br,79.904,45,35,35,4,17,liq,Low,yes,No,yes,No,Halogen,1.1,2.96,11.8138,3.12E+00,266.05,332,19,Balard,1826,0.474,4,7
    36,Krypton,Kr,83.798,48,36,36,4,18,gas,Low,yes,No,yes,No,Noble Gas,1,Not specified,13.9996,3.73E-03,115.93,119.93,23,Ramsay and Travers,1898,0.248,4,8
    37,Rubidium,Rb,85.468,48,37,37,5,1,solid,Low,yes,yes,No,No,Alkali Metal,3,0.82,4.1771,1.53E+00,312.79,961,20,Bunsen and Kirchoff,1861,0.363,5,1
    38,Strontium,Sr,87.62,50,38,38,5,2,solid,Low,yes,yes,No,No,Alkaline Earth Metal,2.5,0.95,5.6949,2.64E+00,1042.15,1655,18,Davy,1808,0.301,5,2
    39,Yttrium,Y,88.906,50,39,39,5,3,solid,Low,yes,yes,No,No,Transition Metal,2.3,1.22,6.2173,4.47E+00,1799.15,3609,21,Gadolin,1794,0.298,5,Not specified
    40,Zirconium,Zr,91.224,51,40,40,5,4,solid,Low,yes,yes,No,No,Transition Metal,2.2,1.33,6.6339,6.51E+00,2125.15,4682,20,Klaproth,1789,0.278,5,Not specified
    41,Niobium,Nb,92.906,52,41,41,5,5,solid,Low,yes,yes,No,No,Transition Metal,2.1,1.6,6.7589,8.57E+00,2741.15,5017,24,Hatchett,1801,0.265,5,Not specified
    42,Molybdenum,Mo,95.96,54,42,42,5,6,solid,Low,yes,yes,No,No,Transition Metal,2,2.16,7.0924,1.02E+01,2890.15,4912,20,Scheele,1778,0.251,5,Not specified
    43,Technetium,Tc,98,55,43,43,5,7,artificial,average,No,yes,No,No,Transition Metal,2,1.9,7.28,1.15E+01,2473.15,5150,23,Perrier and Segr?,1937,Not specified,5,Not specified
    44,Ruthenium,Ru,101.07,57,44,44,5,8,solid,Low,yes,yes,No,No,Transition Metal,1.9,2.2,7.3605,1.24E+01,2523.15,4423,16,Klaus,1844,0.238,5,Not specified
    45,Rhodium,Rh,102.906,58,45,45,5,9,solid,Low,yes,yes,No,No,Transition Metal,1.8,2.28,7.4589,1.24E+01,2239.15,3968,20,Wollaston,1803,0.243,5,Not specified
    46,Palladium,Pd,106.42,60,46,46,5,10,solid,Low,yes,yes,No,No,Transition Metal,1.8,2.2,8.3369,1.20E+01,1825.15,3236,21,Wollaston,1803,0.244,5,Not specified
    47,Silver,Ag,107.868,61,47,47,5,11,solid,Low,yes,yes,No,No,Transition Metal,1.8,1.93,7.5762,1.05E+01,1234.15,2435,27,Prehistoric,Not specified,0.235,5,Not specified
    48,Cadmium,Cd,112.411,64,48,48,5,12,solid,Low,yes,yes,No,No,Transition Metal,1.7,1.69,8.9938,8.69E+00,594.33,1040,22,Stromeyer,1817,0.232,5,Not specified
    49,Indium,In,114.818,66,49,49,5,13,solid,Low,yes,yes,No,No,Metal,2,1.78,5.7864,7.31E+00,429.91,2345,34,Reich and Richter,1863,0.233,5,3
    50,Tin,Sn,118.71,69,50,50,5,14,solid,Low,yes,yes,No,No,Metal,1.7,1.96,7.3439,7.29E+00,505.21,2875,28,Prehistoric,Not specified,0.228,5,4
    51,Antimony,Sb,121.76,71,51,51,5,15,solid,Low,yes,No,No,yes,Metalloid,1.5,2.05,8.6084,6.69E+00,904.05,1860,29,Early historic times,Not specified,0.207,5,5
    52,Tellurium,Te,127.6,76,52,52,5,16,solid,Low,yes,No,No,yes,Metalloid,1.4,2.1,9.0096,6.23E+00,722.8,1261,29,von Reichenstein,1782,0.202,5,6
    53,Iodine,I,126.904,74,53,53,5,17,solid,Low,yes,No,yes,No,Halogen,1.3,2.66,10.4513,4.93E+00,386.65,457.4,24,Courtois,1811,0.214,5,7
    54,Xenon,Xe,131.293,77,54,54,5,18,gas,Low,yes,No,yes,No,Noble Gas,1.2,Not specified,12.1298,5.89E-03,161.45,165.03,31,Ramsay and Travers,1898,0.158,5,8
    55,Cesium,Cs,132.905,78,55,55,6,1,solid,Low,yes,yes,No,No,Alkali Metal,3.3,0.79,3.8939,1.87E+00,301.7,944,22,Bunsen and Kirchoff,1860,0.242,6,1
    56,Barium,Ba,137.327,81,56,56,6,2,solid,Low,yes,yes,No,No,Alkaline Earth Metal,2.8,0.89,5.2117,3.59E+00,1002.15,2170,25,Davy,1808,0.204,6,2
    57,Lanthanum,La,138.905,82,57,57,6,3,solid,Low,yes,yes,No,No,Lanthanide,2.7,1.1,5.5769,6.15E+00,1193.15,3737,19,Mosander,1839,0.195,6,Not specified
    58,Cerium,Ce,140.116,82,58,58,6,3,solid,Low,yes,yes,No,No,Lanthanide,2.7,1.12,5.5387,6.77E+00,1071.15,3716,19,Berzelius,1803,0.192,6,Not specified
    59,Praseodymium,Pr,140.908,82,59,59,6,3B,solid,Low,yes,yes,No,No,Lanthanide,2.7,1.13,5.473,6.77E+00,1204.15,3793,15,von Welsbach,1885,0.193,6,Not specified
    60,Neodymium,Nd,144.242,84,60,60,6,3B,solid,Low,yes,yes,No,No,Lanthanide,2.6,1.14,5.525,7.01E+00,1289.15,3347,16,von Welsbach,1885,0.19,6,Not specified
    61,Promethium,Pm,145,84,61,61,6,3B,artificial,average,No,yes,No,No,Lanthanide,2.6,1.13,5.582,7.26E+00,1204.15,3273,14,Marinsky et al.,1945,Not specified,6,Not specified
    62,Samarium,Sm,150.36,88,62,62,6,3B,solid,Low,yes,yes,No,No,Lanthanide,2.6,1.17,5.6437,7.52E+00,1345.15,2067,17,Boisbaudran,1879,0.197,6,Not specified
    63,Europium,Eu,151.964,89,63,63,6,3B,solid,Low,yes,yes,No,No,Lanthanide,2.6,1.2,5.6704,5.24E+00,1095.15,1802,21,Demarcay,1901,0.182,6,Not specified
    64,Gadolinium,Gd,157.25,93,64,64,6,3B,solid,Low,yes,yes,No,No,Lanthanide,2.5,1.2,6.1501,7.90E+00,1585.15,3546,17,de Marignac,1880,0.236,6,Not specified
    65,Terbium,Tb,158.925,94,65,65,6,3B,solid,Low,yes,yes,No,No,Lanthanide,2.5,1.2,5.8638,8.23E+00,1630.15,3503,24,Mosander,1843,0.182,6,Not specified
    66,Dysprosium,Dy,162.5,97,66,66,6,3B,solid,Low,yes,yes,No,No,Lanthanide,2.5,1.22,5.9389,8.55E+00,1680.15,2840,21,de Boisbaudran,1886,0.17,6,Not specified
    67,Holmium,Ho,164.93,98,67,67,6,3B,solid,Low,yes,yes,No,No,Lanthanide,2.5,1.23,6.0215,8.80E+00,1743.15,2993,29,Delafontaine and Soret,1878,0.165,6,Not specified
    68,Erbium,Er,167.259,99,68,68,6,3B,solid,Low,yes,yes,No,No,Lanthanide,2.5,1.24,6.1077,9.07E+00,1795.15,3503,16,Mosander,1843,0.168,6,Not specified
    69,Thulium,Tm,168.934,100,69,69,6,3B,solid,Low,yes,yes,No,No,Lanthanide,2.4,1.25,6.1843,9.32E+00,1818.15,2223,18,Cleve,1879,0.16,6,Not specified
    70,Ytterbium,Yb,173.054,103,70,70,6,3B,solid,Low,yes,yes,No,No,Lanthanide,2.4,1.1,6.2542,6.97E+00,1097.15,1469,16,Marignac,1878,0.155,6,Not specified
    71,Lutetium,Lu,174.967,104,71,71,6,3B,solid,Low,yes,yes,No,No,Lanthanide,2.3,1.27,5.4259,9.84E+00,1936.15,3675,22,Urbain/ von Welsbach,1907,0.154,6,Not specified
    72,Hafnium,Hf,178.49,106,72,72,6,4,solid,Low,yes,yes,No,No,Transition Metal,2.2,1.3,6.8251,1.33E+01,2500.15,4876,17,Coster and von Hevesy,1923,0.144,6,Not specified
    73,Tantalum,Ta,180.948,108,73,73,6,5,solid,Low,yes,yes,No,No,Transition Metal,2.1,1.5,7.5496,1.67E+01,3269.15,5731,19,Ekeberg,1801,0.14,6,Not specified
    74,Wolfram,W,183.84,110,74,74,6,6,solid,Low,yes,yes,No,No,Transition Metal,2,2.36,7.864,1.93E+01,3680.15,5828,22,J. and F. d'Elhuyar,1783,0.132,6,Not specified
    75,Rhenium,Re,186.207,111,75,75,6,7,solid,Low,yes,yes,No,No,Transition Metal,2,1.9,7.8335,2.10E+01,3453.15,5869,21,"Noddack, Berg, and Tacke",1925,0.137,6,Not specified
    76,Osmium,Os,190.23,114,76,76,6,8,solid,Low,yes,yes,No,No,Transition Metal,1.9,2.2,8.4382,2.26E+01,3300.15,5285,19,Tennant,1803,0.13,6,Not specified
    77,Iridium,Ir,192.217,115,77,77,6,9,solid,Low,yes,yes,No,No,Transition Metal,1.9,2.2,8.967,2.26E+01,2716.15,4701,25,Tennant,1804,0.131,6,Not specified
    78,Platinum,Pt,195.084,117,78,78,6,10,solid,Low,yes,yes,No,No,Transition Metal,1.8,2.28,8.9587,2.15E+01,2045.15,4098,32,Ulloa/Wood,1735,0.133,6,Not specified
    79,Gold,Au,196.967,118,79,79,6,11,solid,Low,yes,yes,No,No,Transition Metal,1.8,2.54,9.2255,1.93E+01,1337.73,3129,21,Prehistoric,Not specified,0.129,6,Not specified
    80,Mercury,Hg,200.59,121,80,80,6,12,liq,Low,yes,yes,No,No,Transition Metal,1.8,2,10.4375,1.35E+01,234.43,630,26,Prehistoric,Not specified,0.14,6,Not specified
    81,Thallium,Tl,204.383,123,81,81,6,13,solid,Low,yes,yes,No,No,Metal,2.1,2.04,6.1082,1.19E+01,577.15,1746,28,Crookes,1861,0.129,6,3
    82,Lead,Pb,207.2,125,82,82,6,14,solid,Low,yes,yes,No,No,Metal,1.8,2.33,7.4167,1.13E+01,600.75,2022,29,Prehistoric,Not specified,0.129,6,4
    83,Bismuth,Bi,208.98,126,83,83,6,15,solid,Low,yes,yes,No,No,Metal,1.6,2.02,7.2856,9.81E+00,544.67,1837,19,Geoffroy the Younger,1753,0.122,6,5
    84,Polonium,Po,210,126,84,84,6,16,solid,High radioactivity especially Po-210.,yes,No,No,yes,Metalloid,1.5,2,8.417,9.32E+00,527.15,1235,34,Curie,1898,Not specified,6,6
    85,Astatine,At,210,125,85,85,6,17,solid,High radioactivity primarily from short-lived isotopes.,yes,No,yes,No,Noble Gas,1.4,2.2,9.3,7.00E+00,575.15,610,21,Corson et al.,1940,Not specified,6,7
    86,Radon,Rn,222,136,86,86,6,18,gas,High radioactivity particularly the isotopes Rn-222 and Rn-220.,yes,yes,No,No,Alkali Metal,1.3,Not specified,10.7485,9.73E-03,202.15,211.3,20,Dorn,1900,0.094,6,8
    87,Francium,Fr,223,136,87,87,7,1,solid,High radioactivity primarily from short-lived isotopes.,yes,yes,No,No,Alkaline Earth Metal,Not specified,0.7,4.0727,1.87E+00,300.15,950,21,Perey,1939,Not specified,7,1
    88,Radium,Ra,226,138,88,88,7,2,solid,Very high radioactivity especially Ra-226.,yes,yes,No,No,Actinide,Not specified,0.9,5.2784,5.50E+00,973.15,2010,15,Pierre and Marie Curie,1898,Not specified,7,2
    89,Actinium,Ac,227,138,89,89,7,3,solid,Very high radioactivity particularly Ac-227.,yes,yes,No,No,Actinide,Not specified,1.1,5.17,1.01E+01,1323.15,3471,11,Debierne/Giesel,1899,0.12,7,Not specified
    90,Thorium,Th,232.038,142,90,90,7,3B,solid,Very high radioactivity especially Th-232.,yes,yes,No,No,Actinide,Not specified,1.3,6.3067,1.17E+01,2028.15,5061,12,Berzelius,1828,0.113,7,Not specified
    91,Protactinium,Pa,231.036,140,91,91,7,3B,solid,Very high radioactivity primarily from short-lived isotopes.,yes,yes,No,No,Actinide,Not specified,1.5,5.89,1.54E+01,1873.15,4300,14,Hahn and Meitner,1917,Not specified,7,Not specified
    92,Uranium,U,238.029,146,92,92,7,3B,solid,Very high radioactivity particularly U-235 and U-238.,yes,yes,No,No,Actinide,Not specified,1.38,6.1941,1.90E+01,1405.15,4404,15,Peligot,1841,0.116,7,Not specified
    93,Neptunium,Np,237,144,93,93,7,3B,artificial,Very high radioactivity primarily from short-lived isotopes.,No,yes,No,No,Actinide,Not specified,1.36,6.2657,2.05E+01,913.15,4273,153,McMillan and Abelson,1940,Not specified,7,Not specified
    94,Plutonium,Pu,244,150,94,94,7,3B,artificial,Very high radioactivity primarily from isotopes like Pu-239.,No,yes,No,No,Actinide,Not specified,1.28,6.0262,1.98E+01,913.15,3501,163,Seaborg et al.,1940,Not specified,7,Not specified
    95,Americium,Am,243,148,95,95,7,3B,artificial,Very high radioactivity particularly Am-241.,No,yes,No,No,Actinide,Not specified,1.3,5.9738,1.37E+01,1267.15,2880,133,Seaborg et al.,1944,Not specified,7,Not specified
    96,Curium,Cm,247,151,96,96,7,3B,artificial,Very high radioactivity especially isotopes like Cm-244.,No,yes,No,No,Actinide,Not specified,1.3,5.9915,1.35E+01,1340.15,3383,133,Seaborg et al.,1944,Not specified,7,Not specified
    97,Berkelium,Bk,247,150,97,97,7,3B,artificial,Very high radioactivity primarily from short-lived isotopes.,No,yes,No,No,Actinide,Not specified,1.3,6.1979,1.48E+01,1259.15,983,83,Seaborg et al.,1949,Not specified,7,Not specified
    98,Californium,Cf,251,153,98,98,7,3B,artificial,Very high radioactivity particularly Cf-252.,No,yes,No,No,Actinide,Not specified,1.3,6.2817,1.51E+01,1925.15,1173,123,Seaborg et al.,1950,Not specified,7,Not specified
    99,Einsteinium,Es,252,153,99,99,7,3B,artificial,Very high radioactivity especially isotopes like Es-252.,No,yes,No,No,Actinide,Not specified,1.3,6.42,1.35E+01,1133.15,Not specified,123,Ghiorso et al.,1952,Not specified,7,Not specified
    100,Fermium,Fm,257,157,100,100,7,3B,artificial,Very high radioactivity primarily from short-lived isotopes.,No,yes,No,No,Actinide,Not specified,1.3,6.5,Not specified,Not specified,Not specified,103,Ghiorso et al.,1953,Not specified,7,Not specified
    101,Mendelevium,Md,258,157,101,101,7,3B,artificial,High radioactivity especially its isotopes like Md-258.,No,yes,No,No,Actinide,Not specified,1.3,6.58,Not specified,Not specified,Not specified,33,Ghiorso et al.,1955,Not specified,7,Not specified
    102,Nobelium,No,259,157,102,102,7,3B,artificial,High radioactivity primarily from short-lived isotopes.,No,yes,No,No,Actinide,Not specified,1.3,6.65,Not specified,Not specified,Not specified,73,Ghiorso et al.,1958,Not specified,7,Not specified
    103,Lawrencium,Lr,262,159,103,103,7,3B,artificial,High radioactivity especially its isotopes like Lr-266.,No,yes,No,No,Actinide,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,203,Ghiorso et al.,1961,Not specified,7,Not specified
    104,Rutherfordium,Rf,261,157,104,104,7,4,artificial,High radioactivity primarily from short-lived isotopes.,No,yes,No,No,Transactinide,Not specified,Not specified,Not specified,1.81E+01,Not specified,Not specified,Not specified,Ghiorso et al.,1969,Not specified,7,Not specified
    105,Dubnium,Db,262,157,105,105,7,5,artificial,High radioactivity especially its isotopes like Db-268.,No,yes,No,No,Transactinide,Not specified,Not specified,Not specified,3.90E+01,Not specified,Not specified,Not specified,Ghiorso et al.,1970,Not specified,7,Not specified
    106,Seaborgium,Sg,266,160,106,106,7,6,artificial,High radioactivity particularly its isotopes like Sg-271.,No,yes,No,No,Transactinide,Not specified,Not specified,Not specified,3.50E+01,Not specified,Not specified,Not specified,Ghiorso et al.,1974,Not specified,7,Not specified
    107,Bohrium,Bh,264,157,107,107,7,7,artificial,High radioactivity primarily from short-lived isotopes.,No,yes,No,No,Transactinide,Not specified,Not specified,Not specified,3.70E+01,Not specified,Not specified,Not specified,Armbruster and M?nzenberg,1981,Not specified,7,Not specified
    108,Hassium,Hs,267,159,108,108,7,8,artificial,High radioactivity particularly its isotopes like Hs-277.,No,yes,No,No,Transactinide,Not specified,Not specified,Not specified,4.10E+01,Not specified,Not specified,Not specified,Armbruster and M?nzenberg,1983,Not specified,7,Not specified
    109,Meitnerium,Mt,268,159,109,109,7,9,artificial,Very high radioactivity especially its isotopes like Mt-278.,No,yes,No,No,Transactinide,Not specified,Not specified,Not specified,3.50E+01,Not specified,Not specified,Not specified,GSI Darmstadt West Germany,1982,Not specified,7,Not specified
    110,Darmstadtium ,Ds ,271,161,110,110,7,10,artificial,Very high radioactivity primarily from short-lived isotopes.,No,yes,No,No,Transactinide,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Discovered by the Joint Institute for Nuclear Research (JINR) in Dubna Russia.,1994,Not specified,7,Not specified
    111,Roentgenium ,Rg ,272,161,111,111,7,11,artificial,Very high radioactivity particularly its isotopes like Rg-280.,No,yes,No,No,Transactinide,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Discovered by the Gesellschaft f�r Schwerionenforschung (GSI) in Darmstadt Germany.,1994,Not specified,7,Not specified
    112,Copernicium ,Cn ,285,173,112,112,7,12,artificial,Very high radioactivity especially its isotopes like Cn-285.,No,yes,No,No,Transactinide,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Discovered by the Gesellschaft f�r Schwerionenforschung (GSI) in Darmstadt Germany.,1996,Not specified,7,Not specified
    113,Nihonium,Nh,284,171,113,113,7,13,artificial,Very high radioactivity primarily from short-lived isotopes.,No,yes,No,No,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Discovered by a team of Japanese scientists at RIKEN in Waka Japan.,2004,Not specified,7,3
    114,Flerovium,Fl,289,175,114,114,7,14,artificial,Very high radioactivity particularly its isotopes like Fl-289.,No,yes,No,No,Transactinide,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Discovered by the Joint Institute for Nuclear Research (JINR) in Dubna Russia and the Lawrence Livermore National Laboratory in California USA.,1999,Not specified,7,4
    115,Moscovium,Mc,288,173,115,115,7,15,artificial,Very high radioactivity especially its isotopes like Mc-290.,No,yes,No,No,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Discovered by the Joint Institute for Nuclear Research (JINR) in Dubna Russia.,2010,Not specified,7,5
    116,Livermorium,Lv,292,176,116,116,7,16,artificial,Very high radioactivity primarily from short-lived isotopes.,No,yes,No,No,Transactinide,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Discovered by the Joint Institute for Nuclear Research (JINR) in Dubna Russia and the Lawrence Livermore National Laboratory in California USA.,2000,Not specified,7,6
    117,Tennessine,Ts,295,178,117,117,7,17,artificial,Very high radioactivity particularly its isotopes like Ts-294.,No,,yes,No,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Discovered by a team of scientists at Oak Ridge National Laboratory Vanderbilt University and the University of Tennessee USA.,2010,Not specified,7,7
    118,Oganesson,Og,294,176,118,118,7,18,artificial,Very high radioactivity especially its isotopes like Og-295.,No,,yes,No,Noble Gas,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Not specified,Discovered by the Joint Institute for Nuclear Research (JINR) in Dubna Russia.,2006,Not specified,7,8
    `



    const elementData = [
        {
            element: "hydrogen",
            atomicNumber: 1,
            symbol: "H",
            description: "Hydrogen is the lightest element and the most abundant chemical substance in the universe."
        },
        {
            element: "helium",
            atomicNumber: 2,
            symbol: "He",
            description: "Helium is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas."
        },
        {
            element: "lithium",
            atomicNumber: 3,
            symbol: "Li",
            description: "Lithium is a soft, silver-white metal known for its use in rechargeable batteries."
        },
        {
            element: "beryllium",
            atomicNumber: 4,
            symbol: "Be",
            description: "Beryllium is a hard, brittle, steel-gray metal known for its stiffness and light weight."
        },
        {
            element: "boron",
            atomicNumber: 5,
            symbol: "B",
            description: "Boron is a non-metallic element that can be found in compounds as diverse as borax and boric acid. It plays a crucial role in various industries."
        },
        {
            element: "carbon",
            atomicNumber: 6,
            symbol: "C",
            description: "Carbon is a fundamental element of life and the basis for organic chemistry. It can exist in various forms, including diamond and graphite."
        },
        {
            element: "nitrogen",
            atomicNumber: 7,
            symbol: "N",
            description: "Nitrogen is a colorless, odorless gas that makes up a significant portion of Earth's atmosphere. It is essential for life and is used in various industrial applications."
        },
        {
            element: "oxygen",
            atomicNumber: 8,
            symbol: "O",
            description: "Oxygen is a vital element for most life forms on Earth. It is a colorless, tasteless, and odorless diatomic gas."
        },
        {
            element: "fluorine",
            atomicNumber: 9,
            symbol: "F",
            description: "Fluorine is a highly reactive, pale-yellow gas. It is the most electronegative element and can form compounds with many other elements."
        },
        {
            element: "neon",
            atomicNumber: 10,
            symbol: "Ne",
            description: "Neon is a noble gas known for its use in neon signs. It is colorless, odorless, and inert under most conditions."
        },
        {
            element: "sodium",
            atomicNumber: 11,
            symbol: "Na",
            description: "Sodium is a soft, silvery-white metal. It is highly reactive and is commonly found in compounds like table salt (sodium chloride)."
        },
        {
            element: "magnesium",
            atomicNumber: 12,
            symbol: "Mg",
            description: "Magnesium is a lightweight, silvery-white metal. It is an essential element in biology and is used in various industrial applications."
        },
        {
            element: "aluminum",
            atomicNumber: 13,
            symbol: "Al",
            description: "Aluminum is a lightweight, silvery-white metal. It is the most abundant metal in Earth's crust and has a wide range of industrial uses."
        },
        {
            element: "silicon",
            atomicNumber: 14,
            symbol: "Si",
            description: "Silicon is a non-metallic element. It is the second most abundant element in Earth's crust and is a key component of many minerals."
        },
        {
            element: "phosphorus",
            atomicNumber: 15,
            symbol: "P",
            description: "Phosphorus is a non-metallic element essential for life. It plays a crucial role in DNA, RNA, and ATP, and is commonly found in fertilizers."
        },
        {
            element: "sulfur",
            atomicNumber: 16,
            symbol: "S",
            description: "Sulfur is a non-metallic element known for its distinctive smell. It is an essential element in various amino acids and vitamins."
        },
        {
            element: "chlorine",
            atomicNumber: 17,
            symbol: "Cl",
            description: "Chlorine is a highly reactive, greenish-yellow gas. It is commonly used as a disinfectant and in the production of PVC."
        },
        {
            element: "argon",
            atomicNumber: 18,
            symbol: "Ar",
            description: "Argon is a noble gas that makes up a small portion of Earth's atmosphere. It is used in welding and as a protective gas in various industries."
        },
        {
            element: "potassium",
            atomicNumber: 19,
            symbol: "K",
            description: "Potassium is a soft, silvery-white metal. It is an essential nutrient for humans and is involved in various biological processes."
        },
        {
            element: "calcium",
            atomicNumber: 20,
            symbol: "Ca",
            description: "Calcium is a vital element for the formation of bones and teeth. It also plays a role in muscle contractions and nerve signaling."
        },
        {
            element: "scandium",
            atomicNumber: 21,
            symbol: "Sc",
            description: "Scandium is a rare, silvery-white metal. It is used in aerospace and the production of high-strength aluminum alloys."
        },
        {
            element: "titanium",
            atomicNumber: 22,
            symbol: "Ti",
            description: "Titanium is a strong, lightweight metal known for its corrosion resistance. It is used in aerospace, medical implants, and more."
        },
        {
            element: "vanadium",
            atomicNumber: 23,
            symbol: "V",
            description: "Vanadium is a hard, silvery-gray metal. It is used in the production of steel and is essential for some living organisms."
        },
        {
            element: "chromium",
            atomicNumber: 24,
            symbol: "Cr",
            description: "Chromium is a lustrous, hard metal known for its corrosion resistance. It is used in stainless steel and chrome plating."
        },
        {
            element: "manganese",
            atomicNumber: 25,
            symbol: "Mn",
            description: "Manganese is a gray-white metal used in steel production and batteries. It plays a role in photosynthesis and bone formation in living organisms."
        },
        {
            element: "iron",
            atomicNumber: 26,
            symbol: "Fe",
            description: "Iron is a crucial element for life, involved in oxygen transport in blood (as hemoglobin) and as a component of various enzymes."
        },
        {
            element: "cobalt",
            atomicNumber: 27,
            symbol: "Co",
            description: "Cobalt is a hard, magnetic metal used in alloys and batteries. It is essential for the production of vitamin B12 in living organisms."
        },
        {
            element: "nickel",
            atomicNumber: 28,
            symbol: "Ni",
            description: "Nickel is a silvery-white metal used in coins, stainless steel, and various applications. It can cause allergies in some people."
        },
        {
            element: "copper",
            atomicNumber: 29,
            symbol: "Cu",
            description: "Copper is a reddish-brown metal known for its excellent electrical conductivity. It is used in wiring, plumbing, and more."
        },
        {
            element: "zinc",
            atomicNumber: 30,
            symbol: "Zn",
            description: "Zinc is a bluish-white metal used in galvanizing, batteries, and dietary supplements. It is essential for the immune system in humans."
        },
        {
            element: "gallium",
            atomicNumber: 31,
            symbol: "Ga",
            description: "Gallium is a silvery-blue metal with a low melting point. It is used in semiconductors and as a non-toxic alternative to mercury in thermometers."
        },
        {
            element: "germanium",
            atomicNumber: 32,
            symbol: "Ge",
            description: "Germanium is a gray-white semiconductor used in electronics. It was crucial in the development of early transistors."
        },
        {
            element: "arsenic",
            atomicNumber: 33,
            symbol: "As",
            description: "Arsenic is a metalloid with various forms, some of which are toxic. It has been used historically in pesticides and wood preservatives."
        },
        {
            element: "selenium",
            atomicNumber: 34,
            symbol: "Se",
            description: "Selenium is a non-metal used in electronics and as a dietary trace element. It is essential for some enzymes in living organisms."
        },
        {
            element: "bromine",
            atomicNumber: 35,
            symbol: "Br",
            description: "Bromine is a dark red-brown liquid at room temperature. It is used in flame retardants and as a disinfectant in some water treatment processes."
        },
        {
            element: "krypton",
            atomicNumber: 36,
            symbol: "Kr",
            description: "Krypton is a noble gas that emits a distinctive glow in gas discharge lamps. It is used in lighting and laser applications."
        },
        {
            element: "rubidium",
            atomicNumber: 37,
            symbol: "Rb",
            description: "Rubidium is a soft, silvery-white metal that ignites spontaneously in air. It has limited uses in specialized electronics."
        },
        {
            element: "strontium",
            atomicNumber: 38,
            symbol: "Sr",
            description: "Strontium is a soft, silvery metal used in fireworks and flares to produce red colors. It is also found in some minerals."
        },
        {
            element: "yttrium",
            atomicNumber: 39,
            symbol: "Y",
            description: "Yttrium is a metallic element used in the production of phosphors for color television tubes and LEDs. It has some medical applications as well."
        },
        {
            element: "zirconium",
            atomicNumber: 40,
            symbol: "Zr",
            description: "Zirconium is a corrosion-resistant metal used in nuclear reactors, aerospace applications, and various alloys."
        },
        {
            element: "niobium",
            atomicNumber: 41,
            symbol: "Nb",
            description: "Niobium is a shiny, gray metal used in superalloys for jet engines and in the production of superconductors."
        },
        {
            element: "molybdenum",
            atomicNumber: 42,
            symbol: "Mo",
            description: "Molybdenum is a refractory metal with high melting point. It is used in steel alloys, electrical contacts, and as a catalyst."
        },
        {
            element: "technetium",
            atomicNumber: 43,
            symbol: "Tc",
            description: "Technetium is a synthetic element with no stable isotopes. It is used in nuclear medicine for imaging procedures."
        },
        {
            element: "ruthenium",
            atomicNumber: 44,
            symbol: "Ru",
            description: "Ruthenium is a rare transition metal used in some electrical contacts, jewelry, and as a catalyst in chemical reactions."
        },
        {
            element: "rhodium",
            atomicNumber: 45,
            symbol: "Rh",
            description: "Rhodium is a precious metal, often used as a plating material for jewelry and in catalytic converters in vehicles."
        },
        {
            element: "palladium",
            atomicNumber: 46,
            symbol: "Pd",
            description: "Palladium is a rare and lustrous metal used in catalytic converters, electronics, and jewelry."
        },
        {
            element: "silver",
            atomicNumber: 47,
            symbol: "Ag",
            description: "Silver is a white, shiny metal known for its use in coins, jewelry, and electrical contacts. It has antimicrobial properties."
        },
        {
            element: "cadmium",
            atomicNumber: 48,
            symbol: "Cd",
            description: "Cadmium is a bluish-white metal used in batteries and pigments. It is toxic and regulated in many countries."
        },
        {
            element: "indium",
            atomicNumber: 49,
            symbol: "In",
            description: "Indium is a silvery-white, soft metal used in the production of low-melting-point alloys, semiconductors, and as a coating for bearings."
        },
        {
            element: "tin",
            atomicNumber: 50,
            symbol: "Sn",
            description: "Tin is a malleable, silvery-white metal used for soldering, coating other metals to prevent corrosion (tin plating), and in various alloys."
        },
        {
            element: "antimony",
            atomicNumber: 51,
            symbol: "Sb",
            description: "Antimony is a brittle, silvery-white metalloid used in flame retardants, batteries, and as a dopant in semiconductor materials."
        },
        {
            element: "tellurium",
            atomicNumber: 52,
            symbol: "Te",
            description: "Tellurium is a brittle, silver-white metalloid used in alloys with steel, in photovoltaic solar cells, and in certain semiconductors."
        },
        {
            element: "iodine",
            atomicNumber: 53,
            symbol: "I",
            description: "Iodine is a dark-purple-black, lustrous nonmetal used in medicine, photography, and as a dietary supplement in the form of iodized salt."
        },
        {
            element: "xenon",
            atomicNumber: 54,
            symbol: "Xe",
            description: "Xenon is a noble gas known for its use in certain types of lamps, including xenon arc lamps, and in medical imaging equipment."
        },
        {
            element: "cesium",
            atomicNumber: 55,
            symbol: "Cs",
            description: "Cesium is a soft, silvery-gold alkali metal used in atomic clocks, drilling fluids, and in research involving Bose-Einstein condensates."
        },
        {
            element: "barium",
            atomicNumber: 56,
            symbol: "Ba",
            description: "Barium is a soft, silvery-white alkaline earth metal used in drilling fluids, fireworks, and in medical diagnostic imaging (barium swallow)."
        },
        {
            element: "lanthanum",
            atomicNumber: 57,
            symbol: "La",
            description: "Lanthanum is a soft, malleable, silvery-white rare earth metal used in hybrid car batteries, catalysts, and specialty glass production."
        },
        {
            element: "cerium",
            atomicNumber: 58,
            symbol: "Ce",
            description: "Cerium is a soft, silvery-white rare earth metal used in catalytic converters, self-cleaning ovens, and as a glass polishing agent."
        },
        {
            element: "praseodymium",
            atomicNumber: 59,
            symbol: "Pr",
            description: "Praseodymium is a soft, silvery rare earth metal used in magnets, carbon arc lighting, and as a component in some alloys."
        },
        {
            element: "neodymium",
            atomicNumber: 60,
            symbol: "Nd",
            description: "Neodymium is a silvery rare earth metal used in strong permanent magnets, laser materials, and in the glass industry."
        },
        {
            element: "promethium",
            atomicNumber: 61,
            symbol: "Pm",
            description: "Promethium is a radioactive rare earth metal used in nuclear batteries and as a source of beta radiation for thickness gauges."
        },
        {
            element: "samarium",
            atomicNumber: 62,
            symbol: "Sm",
            description: "Samarium is a silvery rare earth metal used in magnets, control rods in nuclear reactors, and in some specialized glasses."
        },
        {
            element: "europium",
            atomicNumber: 63,
            symbol: "Eu",
            description: "Europium is a silvery-white rare earth metal used in the production of red and blue phosphors for color television screens."
        },
        {
            element: "gadolinium",
            atomicNumber: 64,
            symbol: "Gd",
            description: "Gadolinium is a silvery-white rare earth metal used in medical imaging contrast agents, neutron capture therapy, and as a control material in nuclear reactors."
        },
        {
            element: "terbium",
            atomicNumber: 65,
            symbol: "Tb",
            description: "Terbium is a silvery rare earth metal used in phosphors for fluorescent lamps, in some electronic devices, and as a dopant in solid-state devices."
        },
        {
            element: "dysprosium",
            atomicNumber: 66,
            symbol: "Dy",
            description: "Dysprosium is a silvery rare earth metal used in magnets, nuclear control rods, and in high-temperature materials."
        },
        {
            element: "holmium",
            atomicNumber: 67,
            symbol: "Ho",
            description: "Holmium is a silvery rare earth metal used in nuclear control rods, lasers, and as a dopant in solid-state devices."
        },
        {
            element: "erbium",
            atomicNumber: 68,
            symbol: "Er",
            description: "Erbium is a silvery rare earth metal used in optical amplifiers, color TV tubes, and as a neutron absorber in nuclear reactors."
        },
        {
            element: "thulium",
            atomicNumber: 69,
            symbol: "Tm",
            description: "Thulium is a silvery rare earth metal used in portable X-ray devices, laser eye surgery, and as a radiation source in portable nuclear instruments."
        },
        {
            element: "ytterbium",
            atomicNumber: 70,
            symbol: "Yb",
            description: "Ytterbium is a silvery rare earth metal used in laser systems, stainless steel, and as a doping material for special glass types."
        },
        {
            element: "lutetium",
            atomicNumber: 71,
            symbol: "Lu",
            description: "Lutetium is a silvery rare earth metal used in radiation therapy for cancer treatment and as a catalyst in various chemical reactions."
        },
        {
            element: "hafnium",
            atomicNumber: 72,
            symbol: "Hf",
            description: "Hafnium is a lustrous, silvery-gray transition metal used in nuclear reactors as control rods and in high-temperature alloys."
        },
        {
            element: "tantalum",
            atomicNumber: 73,
            symbol: "Ta",
            description: "Tantalum is a hard, blue-gray transition metal used in capacitors for electronics, surgical implants, and in aircraft and missile parts."
        },
        {
            element: "tungsten",
            atomicNumber: 74,
            symbol: "W",
            description: "Tungsten is a dense, steel-gray transition metal known for its high melting point and is used in lightbulb filaments, electrical wiring, and as a material for high-performance tools."
        },
        {
            element: "rhenium",
            atomicNumber: 75,
            symbol: "Re",
            description: "Rhenium is a silvery-white transition metal used in superalloys for jet engines, as a filament in mass spectrometers, and in electrical contacts."
        },
        {
            element: "osmium",
            atomicNumber: 76,
            symbol: "Os",
            description: "Osmium is a dense, blue-gray transition metal used in electrical contacts, fountain pen nibs, and in some alloys for instrument pivots."
        },
        {
            element: "iridium",
            atomicNumber: 77,
            symbol: "Ir",
            description: "Iridium is a dense, brittle, silvery-white transition metal used in spark plugs, electrical contacts, and as a hardening agent for platinum."
        },
        {
            element: "platinum",
            atomicNumber: 78,
            symbol: "Pt",
            description: "Platinum is a dense, malleable, silvery-white transition metal used in jewelry, catalytic converters, and in laboratory equipment."
        },
        {
            element: "gold",
            atomicNumber: 79,
            symbol: "Au",
            description: "Gold is a dense, soft, yellow transition metal highly valued for its use in jewelry, currency, and as a conductor in electronics."
        },
        {
            element: "mercury",
            atomicNumber: 80,
            symbol: "Hg",
            description: "Mercury is a heavy, silvery-white transition metal known for its liquid state at room temperature and its use in thermometers and dental amalgams."
        },
        {
            element: "thallium",
            atomicNumber: 81,
            symbol: "Tl",
            description: "Thallium is a soft, bluish-white post-transition metal used in certain types of photoelectric cells and in the manufacture of optical lenses."
        },
        {
            element: "lead",
            atomicNumber: 82,
            symbol: "Pb",
            description: "Lead is a heavy, malleable, bluish-gray post-transition metal used in batteries, radiation shielding, and as a building material."
        },
        {
            element: "bismuth",
            atomicNumber: 83,
            symbol: "Bi",
            description: "Bismuth is a brittle, pinkish-white post-transition metal used in cosmetics, pharmaceuticals, and as a replacement for lead in some applications."
        },
        {
            element: "polonium",
            atomicNumber: 84,
            symbol: "Po",
            description: "Polonium is a radioactive post-transition metal used as a neutron source and in some antistatic devices."
        },
        {
            element: "astatine",
            atomicNumber: 85,
            symbol: "At",
            description: "Astatine is a rare, radioactive halogen that has no significant practical uses due to its scarcity and radioactivity."
        },
        {
            element: "radon",
            atomicNumber: 86,
            symbol: "Rn",
            description: "Radon is a radioactive noble gas used in radiation therapy for cancer treatment and as a tracer in geological research."
        },
        {
            element: "francium",
            atomicNumber: 87,
            symbol: "Fr",
            description: "Francium is a highly radioactive alkali metal, and it is extremely rare in nature. It has no significant commercial uses due to its extreme radioactivity and scarcity."
        },
        {
            element: "radium",
            atomicNumber: 88,
            symbol: "Ra",
            description: "Radium is a radioactive alkaline earth metal. It was once used in self-luminous paints for watch dials, but its use has been discontinued due to its radioactivity."
        },
        {
            element: "actinium",
            atomicNumber: 89,
            symbol: "Ac",
            description: "Actinium is a highly radioactive element and is often used as an neutron source and in radiation therapy for cancer treatment."
        },
        {
            element: "thorium",
            atomicNumber: 90,
            symbol: "Th",
            description: "Thorium is a radioactive element used in the production of nuclear fuel and in certain high-temperature applications."
        },
        {
            element: "protactinium",
            atomicNumber: 91,
            symbol: "Pa",
            description: "Protactinium is a radioactive element used in scientific research, particularly in studies of nuclear reactions."
        },
        {
            element: "uranium",
            atomicNumber: 92,
            symbol: "U",
            description: "Uranium is a radioactive element used primarily as a fuel in nuclear reactors and for the production of nuclear weapons."
        },
        {
            element: "neptunium",
            atomicNumber: 93,
            symbol: "Np",
            description: "Neptunium is a radioactive element used in the development of nuclear weapons and as a precursor for plutonium-239 production."
        },
        {
            element: "plutonium",
            atomicNumber: 94,
            symbol: "Pu",
            description: "Plutonium is a radioactive element used in nuclear weapons, nuclear reactors, and as a power source for some spacecraft."
        },
        {
            element: "americium",
            atomicNumber: 95,
            symbol: "Am",
            description: "Americium is a radioactive element used in smoke detectors and as a gamma ray source for industrial radiography."
        },
        {
            element: "curium",
            atomicNumber: 96,
            symbol: "Cm",
            description: "Curium is a radioactive element used in scientific research and as a neutron source for various applications."
        },
        {
            element: "berkelium",
            atomicNumber: 97,
            symbol: "Bk",
            description: "Berkelium is a radioactive element used primarily for scientific research, including the synthesis of new elements."
        },
        {
            element: "californium",
            atomicNumber: 98,
            symbol: "Cf",
            description: "Californium is a radioactive element used in neutron radiography and as a neutron source for scientific research."
        },
        {
            element: "einsteinium",
            atomicNumber: 99,
            symbol: "Es",
            description: "Einsteinium is a synthetic radioactive element used in scientific research, particularly in studies of nuclear reactions."
        },
        {
            element: "fermium",
            atomicNumber: 100,
            symbol: "Fm",
            description: "Fermium is a synthetic radioactive element used primarily for scientific research, including the synthesis of new elements."
        },
        {
            element: "mendelevium",
            atomicNumber: 101,
            symbol: "Md",
            description: "Mendelevium is a synthetic radioactive element used primarily for scientific research, including the synthesis of new elements."
        },
        {
            element: "nobelium",
            atomicNumber: 102,
            symbol: "No",
            description: "Nobelium is a synthetic radioactive element used primarily for scientific research, including the synthesis of new elements."
        },
        {
            element: "lawrencium",
            atomicNumber: 103,
            symbol: "Lr",
            description: "Lawrencium is a synthetic radioactive element used primarily for scientific research, including the study of nuclear reactions."
        },
        {
            element: "rutherfordium",
            atomicNumber: 104,
            symbol: "Rf",
            description: "Rutherfordium is a synthetic element, and its properties are not well-known due to its scarcity and short half-life."
        },
        {
            element: "dubnium",
            atomicNumber: 105,
            symbol: "Db",
            description: "Dubnium is a synthetic element, and its properties are not well-known due to its scarcity and short half-life."
        },
        {
            element: "seaborgium",
            atomicNumber: 106,
            symbol: "Sg",
            description: "Seaborgium is a synthetic element, and its properties are not well-known due to its scarcity and short half-life."
        },
        {
            element: "bohrium",
            atomicNumber: 107,
            symbol: "Bh",
            description: "Bohrium is a synthetic element, and its properties are not well-known due to its scarcity and short half-life."
        },
        {
            element: "hassium",
            atomicNumber: 108,
            symbol: "Hs",
            description: "Hassium is a synthetic element, and its properties are not well-known due to its scarcity and short half-life."
        },
        {
            element: "meitnerium",
            atomicNumber: 109,
            symbol: "Mt",
            description: "Meitnerium is a synthetic element, and its properties are not well-known due to its scarcity and short half-life."
        },
        {
            element: "darmstadtium",
            atomicNumber: 110,
            symbol: "Ds",
            description: "Darmstadtium is a synthetic element, and its properties are not well-known due to its scarcity and short half-life."
        },
        {
            element: "roentgenium",
            atomicNumber: 111,
            symbol: "Rg",
            description: "Roentgenium is a synthetic element, and its properties are not well-known due to its scarcity and short half-life."
        },
        {
            element: "copernicium",
            atomicNumber: 112,
            symbol: "Cn",
            description: "Copernicium is a synthetic element, and its properties are not well-known due to its scarcity and short half-life."
        },
        {
            element: "nihonium",
            atomicNumber: 113,
            symbol: "Nh",
            description: "Nihonium is a synthetic element, and its properties are not well-known due to its scarcity and short half-life."
        },
        {
            element: "flerovium",
            atomicNumber: 114,
            symbol: "Fl",
            description: "Flerovium is a synthetic element, and its properties are not well-known due to its scarcity and short half-life."
        },
        {
            element: "moscovium",
            atomicNumber: 115,
            symbol: "Mc",
            description: "Moscovium is a synthetic element, and its properties are not well-known due to its scarcity and short half-life."
        },
        {
            element: "livermorium",
            atomicNumber: 116,
            symbol: "Lv",
            description: "Livermorium is a synthetic element, and its properties are not well-known due to its scarcity and short half-life."
        },
        {
            element: "tennessine",
            atomicNumber: 117,
            symbol: "Ts",
            description: "Tennessine is a synthetic element, and its properties are not well-known due to its scarcity and short half-life."
        },
        {
            element: "oganesson",
            atomicNumber: 118,
            symbol: "Og",
            description: "Oganesson is a synthetic element, and its properties are not well-known due to its scarcity and short half-life."
        }
    ];

    // Function to find an element's details by name
    function findElementDetails(elementName) {
        for (let i = 0; i < elementData.length; i++) {
            if (elementData[i].element.toLowerCase() === elementName.toLowerCase()) {
                return elementData[i];
            }
        }
        return null;
    }

    function parseCSV(csvData) {
        const rows = csvData.split('\n');
        const data = [];
    
        for (let i = 1; i < rows.length; i++) { // Start from 1 to skip the header
            const row = rows[i].split(',');
            data.push(row);
        }
    
        return data;
    }
    
    // Use the parseCSV function to parse your CSV data string
    const parsedData = parseCSV(csvData);



    // Function to parse CSV data






    // // Function to parse CSV data
    // function parseCSV(csvData) {
    //     const rows = csvData.split('\n');
    //     const data = [];

    //     for (let i = 0; i < rows.length; i++) {
    //         const row = rows[i].split(',');
    //         data.push(row);
    //     }

    //     return data;
    // }

    // Function to find an answer to the user's question from CSV data

// Function to find an answer to the user's question from CSV data
// Function to find an answer to the user's question from CSV data
function findAnswerFromCSV(userQuery) {
    if (!csvData) {
        return 'CSV data is not available. Please add it in your code.';
    }

    // const rows = csvData.trim().split('\n');
    // const headers = rows[0].split(',');
    // const elementName = userQuery.toLowerCase();


    // Extract keywords from the user's question
    const matchNeutrons = userQuery.match(/number of neutrons in (\w+)/i);
    const matchSymbol = userQuery.match(/What is Symbol of (\w+)/i);
    const matchAtomicMass = userQuery.match(/What is Atomic Mass of (\w+)/i);
    const matchProtons = userQuery.match(/number of protons in (\w+)/i);
    const matchElectrons = userQuery.match(/number of electrons in (\w+)/i);
    const matchPeriod = userQuery.match(/What is period of (\w+)/i);
    const matchGroup = userQuery.match(/What is group of (\w+)/i);
    const matchPhase = userQuery.match(/What is phase of (\w+)/i);
    const matchRadioActive = userQuery.match(/Radioactivity of (\w+)/i);
    const matchNatural = userQuery.match(/Natural or not (\w+)/i);
    const matchBoilingPoint = userQuery.match(/what is boiling point of (\w+)/i);
    const matchNumberOfIsotopes = userQuery.match(/number of isotopes in (\w+)/i);
    const matchDiscoverer = userQuery.match(/who discovered (\w+)/i);
    const matchYear = userQuery.match(/discovery year of (\w+)/i);
    const matchSpecificHeat = userQuery.match(/specific heat of (\w+)/i);
    const matchMetal = userQuery.match(/Metal or not (\w+)/i);
    const matchNonmetal = userQuery.match(/Nonmetal or not (\w+)/i);
    const matchMetalloid = userQuery.match(/Metalloid or not (\w+)/i);
    const matchType = userQuery.match(/What is the type of (\w+)/i);
    const matchAtomicRadius = userQuery.match(/What is the Atomic Radius of (\w+)/i);
    const matchElectronegativity = userQuery.match(/What is the Electronegativity of (\w+)/i);
    const matchFirstIonization = userQuery.match(/What is the First Ionization of (\w+)/i);
    const matchDensity= userQuery.match(/What is the Density of (\w+)/i);
    const matchMeltingPoint= userQuery.match(/What is the Melting Point of (\w+)/i);
    const matchNumberofShells= userQuery.match(/Number of Shells in (\w+)/i);
    const matchNumberofValence= userQuery.match(/Number of Valence in (\w+)/i);

    if (matchNeutrons && matchNeutrons.length >= 2) {
        let elementName = matchNeutrons[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const NumberOfNeutrons = parsedData[i][4]; // Number of neutrons from the CSV (fifth column)
                return `The Number of Neutrons for ${parsedData[i][1]} is ${NumberOfNeutrons}`;
            }
        }
    }
    
    if (matchSymbol && matchSymbol.length >= 2) {
        let elementName = matchSymbol[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const Symbol = parsedData[i][2]; // Symbol from the CSV (third column)
                return `The Symbol of ${parsedData[i][1]} is ${Symbol}`;
            }
        }
    }
    
    if (matchAtomicMass && matchAtomicMass.length >= 2) {
        let elementName = matchAtomicMass[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const AtomicMass = parsedData[i][3]; // AtomicMass from the CSV (fourth column)
                return `The Atomic Mass of ${parsedData[i][1]} is ${AtomicMass}`;
            }
        }
    }

    if (matchProtons && matchProtons.length >= 2) {
        let elementName = matchProtons[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const NumberOfProtons = parsedData[i][5]; // Number of Protons from the CSV (6th column)
                return `The Number of Protons in ${parsedData[i][1]} is ${NumberOfProtons}`;
            }
        }
    }
    

    if (matchElectrons && matchElectrons.length >= 2) {
        let elementName = matchElectrons[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const Electrons = parsedData[i][6]; // Number of Electrons from the CSV (7th column)
                return `The Number of Electrons in ${parsedData[i][1]} is ${Electrons}`;
            }
        }
    }
    

    if (matchPeriod && matchPeriod.length >= 2) {
        let elementName = matchPeriod[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const Period = parsedData[i][7]; // Radioactivity from the CSV (11th column)
                return `The Period of ${parsedData[i][1]} is ${Period}`;
            }
        }
    }

    if (matchGroup && matchGroup.length >= 2) {
        let elementName = matchGroup[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const Group = parsedData[i][8]; // Radioactivity from the CSV (11th column)
                return `The Group of ${parsedData[i][1]} is ${Group}`;
            }
        }
    }

    if (matchPhase && matchPhase.length >= 2) {
        let elementName = matchPhase[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const Phase = parsedData[i][9]; // Radioactivity from the CSV (11th column)
                return `The Phase of ${parsedData[i][1]} is ${Phase}`;
            }
        }
    }


    if (matchRadioActive && matchRadioActive.length >= 2) {
        let elementName = matchRadioActive[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const RadioActive = parsedData[i][10]; // Radioactivity from the CSV (11th column)
                return `The Radioactivity of ${parsedData[i][1]} is ${RadioActive}`;
            }
        }
    }
    
    

    if (matchNatural && matchNatural.length >= 2) {
        let elementName = matchNatural[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const Natural = parsedData[i][11]; // Natural from the CSV (12th column)
                return `The natural state of ${parsedData[i][1]} is ${Natural}`;
            }
        }
    }
    
    if (matchBoilingPoint && matchBoilingPoint.length >= 2) {
        let elementName = matchBoilingPoint[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const BoilingPoint = parsedData[i][21]; // BoilingPoint from the CSV (22nd column)
                return `The Boiling Point of ${parsedData[i][1]} is ${BoilingPoint}`;
            }
        }
    }
    
    if (matchNumberOfIsotopes && matchNumberOfIsotopes.length >= 2) {
        let elementName = matchNumberOfIsotopes[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const NumberOfIsotopes = parsedData[i][22]; // Number of isotopes from the CSV (23rd column)
                return `The number of isotopes in ${parsedData[i][1]} are ${NumberOfIsotopes}`;
            }
        }
    }
    
    if (matchDiscoverer && matchDiscoverer.length >= 2) {
        let elementName = matchDiscoverer[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const Discoverer = parsedData[i][23]; // Discoverer from the CSV (24th column)
                return `The Discoverer of ${parsedData[i][1]} is Respected ${Discoverer}`;
            }
        }
    }
    
    if (matchYear && matchYear.length >= 2) {
        let elementName = matchYear[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const Year = parsedData[i][24]; // Year from the CSV (25th column)
                return `The Year of discovery of ${parsedData[i][1]} is ${Year}`;
            }
        }
    }
    
    if (matchSpecificHeat && matchSpecificHeat.length >= 2) {
        let elementName = matchSpecificHeat[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const SpecificHeat = parsedData[i][25]; // Specific Heat from the CSV (26th column)
                return `The specific heat of ${parsedData[i][1]} is ${SpecificHeat}`;
            }
        }
    }

    if (matchMetal && matchMetal.length >= 2) {
        let elementName = matchMetal[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const Metal = parsedData[i][12]; // Metal from the CSV (13th column)
                return `The Metal state of ${parsedData[i][1]} is ${Metal}`;
            }
        }
    }
    
    if (matchNonmetal && matchNonmetal.length >= 2) {
        let elementName = matchNonmetal[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const Nonmetal = parsedData[i][13]; // Nonmetal from the CSV (14th column)
                return `The Nonmetal state of ${parsedData[i][1]} is ${Nonmetal}`;
            }
        }
    }
    
    if (matchMetalloid && matchMetalloid.length >= 2) {
        let elementName = matchMetalloid[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const Metalloid = parsedData[i][14]; // Metalloid from the CSV (15th column)
                return `${Metalloid} , The Metalloid state of ${parsedData[i][1]} is ${Metalloid}`;
            }
        }
    }
    
    if (matchType && matchType.length >= 2) {
        let elementName = matchType[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const Type = parsedData[i][15]; // Type from the CSV (16th column)
                return `The Type of ${parsedData[i][1]} is ${Type}`;
            }
        }
    
    }
    
    if (matchAtomicRadius && matchAtomicRadius.length >= 2) {
        let elementName = matchAtomicRadius[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const AtomicRadius = parsedData[i][16]; // Atomic Radius from the CSV (17th column)
                return `The Atomic Radius of ${parsedData[i][1]} is ${AtomicRadius}`;
            }
        }
    }
    
    if (matchElectronegativity && matchElectronegativity.length >= 2) {
        let elementName = matchElectronegativity[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const Electronegativity = parsedData[i][17]; // Electronegativity from the CSV (18th column)
                return `The Electronegativity of ${parsedData[i][1]} is ${Electronegativity}`;
            }
        }
    }
    
    if (matchFirstIonization && matchFirstIonization.length >= 2) {
        let elementName = matchFirstIonization[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const FirstIonization = parsedData[i][18]; // First Ionization from the CSV (19th column)
                return `The First Ionization of ${parsedData[i][1]} is ${FirstIonization}`;
            }
        }
    }
    
    if (matchDensity && matchDensity.length >= 2) {
        let elementName = matchDensity[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const Density = parsedData[i][19]; // Density from the CSV (20th column)
                return `The Density of ${parsedData[i][1]} is ${Density}`;
            }
        }
    }
    
    if (matchMeltingPoint && matchMeltingPoint.length >= 2) {
        let elementName = matchMeltingPoint[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const MeltingPoint = parsedData[i][20]; // Melting Point from the CSV (21st column)
                return `The Melting Point of ${parsedData[i][1]} is ${MeltingPoint}`;
            }
        }
    }
    
    if (matchNumberofShells && matchNumberofShells.length >= 2) {
        let elementName = matchNumberofShells[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const NumberofShells = parsedData[i][26]; // Number of Shells from the CSV (27th column)
                return `The Number of Shells in ${parsedData[i][1]} is ${NumberofShells}`;
            }
        }
    }

    if (matchNumberofValence && matchNumberofValence.length >= 2) {
        let elementName = matchNumberofValence[1]; // Use 'let' here instead of 'const'
    
        for (let i = 0; i < parsedData.length; i++) {
            const Element = parsedData[i][1].toLowerCase(); // Element name from the CSV (second column)
            if (Element === elementName.toLowerCase()) {
                const NumberofValence = parsedData[i][27]; // NumberofValence from the CSV (28th column)
                return `The Number of Valence in ${parsedData[i][1]} is ${NumberofValence}`;
            }
        }
    }
    
    // console.log(`Comparing: ${elementName} and ${elementLower}`);

    // console.log("Matching Radioactive");
    // console.log(`Query: ${userQuery}`);
    // console.log(`elementName: ${elementName}`);
    // console.log(`elementLower: ${elementLower}`);
    
    return 'Sorry, I couldn\'t find an answer to your question in the CSV file.';
}




// // Add an event listener for file input changes
// csvFileInput.addEventListener('change', function () {
//     const file = csvFileInput.files[0];

//     if (file) {
//         const reader = new FileReader();

//         reader.onload = function (e) {
//             // Parse CSV data
//             csvData = parseCSV(e.target.result);
//         };

//         reader.onerror = function (e) {
//             console.error("Error reading the CSV file. Please make sure it's a valid CSV file.");
//             csvData = null; // Set csvData to null to indicate an error
//         };

//         reader.readAsText(file);
//     }
// });



function showAnswerContainer() {
    const elementCard = document.querySelector('.element-card');
    elementCard.style.display = 'block';
}

submitButton.addEventListener('click', function () {
    const userQuery = userQueryInput.value;
    let answer = '';

    // First, try to find element details
    const elementDetails = findElementDetails(userQuery);

    if (elementDetails) {
        // Display element details
        answer = `Element: ${elementDetails.element}<br>Atomic Number: ${elementDetails.atomicNumber}<br>Symbol: ${elementDetails.symbol}<br>Description: ${elementDetails.description}`;
    } else {
        // If not an element name, search in CSV data
        answer = findAnswerFromCSV(userQuery);
    }

    // Display the answer
    answerContainer.innerHTML = answer;

    // Show the answer container
    showAnswerContainer();
});

});


