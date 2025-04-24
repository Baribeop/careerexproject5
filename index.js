// WEEK 5 ASSIGNMENT: Working with Drug Data

//Drug Data

const drugs = [
  {
    id: 1,
    name: "Amoxicillin",
    category: "Antibiotic",
    dosageMg: 500,
    isPrescriptionOnly: true,
    stock: 120,
    manufacturer: "Pfizer",
  },

  {
    id: 2,
    name: "Paracetamol",
    category: "Analgesic",
    dosageMg: 1000,
    isPrescriptionOnly: false,
    stock: 200,
    manufacturer: "GSK",
  },

  {
    id: 3,
    name: "Ibuprofen",
    category: "Analgesic",
    dosageMg: 400,
    isPrescriptionOnly: false,
    stock: 150,
    manufacturer: "Bayer",
  },

  {
    id: 4,
    name: "Chloroquine",
    category: "Antimalarial",
    dosageMg: 250,
    isPrescriptionOnly: true,
    stock: 80,
    manufacturer: "Sanofi",
  },

  {
    id: 5,
    name: "Ciprofloxacin",
    category: "Antibiotic",
    dosageMg: 500,
    isPrescriptionOnly: true,
    stock: 70,
    manufacturer: "Pfizer",
  },

  {
    id: 6,
    name: "Loratadine",
    category: "Antihistamine",
    dosageMg: 10,
    isPrescriptionOnly: false,
    stock: 160,
    manufacturer: "Novartis",
  },

  {
    id: 7,
    name: "Metformin",
    category: "Antidiabetic",
    dosageMg: 850,
    isPrescriptionOnly: true,
    stock: 140,
    manufacturer: "Teva",
  },

  {
    id: 8,
    name: "Artemether",
    category: "Antimalarial",
    dosageMg: 20,
    isPrescriptionOnly: true,
    stock: 60,
    manufacturer: "Roche",
  },

  {
    id: 9,
    name: "Aspirin",
    category: "Analgesic",
    dosageMg: 300,
    isPrescriptionOnly: false,
    stock: 180,
    manufacturer: "Bayer",
  },

  {
    id: 10,
    name: "Omeprazole",
    category: "Antacid",
    dosageMg: 20,
    isPrescriptionOnly: true,
    stock: 90,
    manufacturer: "AstraZeneca",
  },

  {
    id: 11,
    name: "Azithromycin",
    category: "Antibiotic",
    dosageMg: 250,
    isPrescriptionOnly: true,
    stock: 50,
    manufacturer: "Pfizer",
  },

  {
    id: 12,
    name: "Cetirizine",
    category: "Antihistamine",
    dosageMg: 10,
    isPrescriptionOnly: false,
    stock: 110,
    manufacturer: "Novartis",
  },

  {
    id: 13,
    name: "Insulin",
    category: "Antidiabetic",
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 30,
    manufacturer: "Novo Nordisk",
  },

  {
    id: 14,
    name: "Artemisinin",
    category: "Antimalarial",
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 50,
    manufacturer: "GSK",
  },

  {
    id: 15,
    name: "Codeine",
    category: "Analgesic",
    dosageMg: 30,
    isPrescriptionOnly: true,
    stock: 20,
    manufacturer: "Teva",
  },

  {
    id: 16,
    name: "Vitamin C",
    category: "Supplement",
    dosageMg: 500,
    isPrescriptionOnly: false,
    stock: 300,
    manufacturer: "Nature’s Bounty",
  },

  {
    id: 17,
    name: "Ranitidine",
    category: "Antacid",
    dosageMg: 150,
    isPrescriptionOnly: false,
    stock: 90,
    manufacturer: "Sanofi",
  },

  {
    id: 18,
    name: "Doxycycline",
    category: "Antibiotic",
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 40,
    manufacturer: "Pfizer",
  },

  {
    id: 19,
    name: "Tramadol",
    category: "Analgesic",
    dosageMg: 50,
    isPrescriptionOnly: true,
    stock: 45,
    manufacturer: "Teva",
  },

  {
    id: 20,
    name: "Folic Acid",
    category: "Supplement",
    dosageMg: 5,
    isPrescriptionOnly: false,
    stock: 250,
    manufacturer: "Nature’s Bounty",
  },
];




//    1. A funtion that returns all drugs that are antibiotics.

const getAllAntibiotic = drugs.filter( function (each){
    return each.category == 'Antibiotic'
})

console.log(getAllAntibiotic)

//    2. A funtion that returns an array of drug names in lowercase.

const drugNamesInLowerCase = drugs.map(function (each){
    return each.name.toLocaleLowerCase()
})

console.log(drugNamesInLowerCase)

//    3. A function that accepts a category and returns all drugs under that category.


const drugsByCategory = (drugCategory) =>{
    return drugs.filter((each) => {
        return each.category == drugCategory 
    })
 }
 
console.log(drugsByCategory('Antibiotic'))

//    4. A function that returns each drug’s name and its manufacturer.

const DrugNameAndManufacturer = drugs.map((each) => {
    return {
        name: each.name,
        manufacturer: each.manufacturer,
    }
}) 

console.log(DrugNameAndManufacturer)

//    5.  A function that returns all drugs that require a prescription.

const getDrugsWithPrescription = drugs.filter((each) => {
    return each.isPrescriptionOnly == true
})

console.log(getDrugsWithPrescription)

//    6. A function that returns a new array, each item follows the format: "Drug: [name] - [dosageMg]mg".

const newArrayContainingDrugAndDossageMass = drugs.map((each)=>{
    return `Drug: [${each.name}] - [${each.dosageMg}]mg`
      
})

console.log(newArrayContainingDrugAndDossageMass)

//    7. A function that returns all drugs with a stock less than 50.

 const drugsWithStockLowerThan50 = drugs.filter((each) =>{
    return each.stock < 50
 })

 console.log(drugsWithStockLowerThan50)

//    8. A function that returns all drugs that are not prescription-only.

const drugsNotisPrescriptionOnly = drugs.filter((each) => {
    return each.isPrescriptionOnly == false
})

console.log(drugsNotisPrescriptionOnly)

//    9. A function that takes a manufacturer name and returns how many drugs are from that company.

const numberOfDrugsByCompany = (manufacturerName) => {
    return drugs.filter((each) => each.manufacturer == manufacturerName ).length
}   


console.log(numberOfDrugsByCompany("Teva"))

//    10.  A function that uses forEach() to count how many drugs are Analgesics.

const countAnalgesicsDrugs = (() => {
  let count = 0;

  drugs.forEach((drug) => {
    if (drug.category === 'Analgesic') {
      return count++;
    } 
  }) 
    return count;
}) 

console.log(countAnalgesicsDrugs())


