const { faker } = require('@faker-js/faker');

// dados do veículo 
const generateVehicleData = () => {
    const date = faker.date.past({ years: 10 });
    const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
    
    return {
        make: faker.helpers.arrayElement(['Audi', 'BMW', 'Ford', 'Honda', 'Mazda', 'Mercedes Benz', 'Nissan', 'Opel', 'Porsche', 'Renault', 'Skoda', 'Suzuki', 'Toyota', 'Volkswagen', 'Volvo']),
        enginePerformance: faker.number.int({ min: 50, max: 500 }).toString(),
        dateOfManufacture: formattedDate,
        numberOfSeats: faker.helpers.arrayElement(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
        fuelType: faker.helpers.arrayElement(['Petrol', 'Diesel', 'Electric Power', 'Gas', 'Other']),
        listPrice: faker.number.int({ min: 500, max: 100000 }).toString(),
        licensePlateNumber: faker.string.alphanumeric(7).toUpperCase(),
        annualMileage: faker.number.int({ min: 100, max: 100000 }).toString()
    };
};

// dados do segurado
const generateInsurantData = () => {
    const birthDate = faker.date.birthdate({ min: 18, max: 70, mode: 'age' });
    const formattedBirthDate = `${(birthDate.getMonth() + 1).toString().padStart(2, '0')}/${birthDate.getDate().toString().padStart(2, '0')}/${birthDate.getFullYear()}`;
    
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        birthDate: formattedBirthDate,
        gender: faker.helpers.arrayElement(['Male', 'Female']),
        streetAddress: faker.location.streetAddress(),
        country: faker.helpers.arrayElement(['Brazil', 'Portugal', 'Spain', 'France', 'Germany', 'Italy', 'United Kingdom', 'United States']),
        zipCode: faker.number.int({ min: 1000, max: 99999999 }).toString(),
        city: faker.location.city(),
        occupation: faker.helpers.arrayElement(['Employee', 'Public Official', 'Selfemployed', 'Unemployed']),
        hobbies: faker.helpers.arrayElements(['Speeding', 'BungeeJumping', 'CliffDiving', 'Skydiving', 'Other'], { min: 1, max: 3 }),
        website: faker.internet.url()
    };
};

// produto
const generateProductData = () => {
    // Pega a data atual e adiciona 1 mês
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 1);
    // Adiciona mais alguns dias para garantir que esteja mais de 1 mês no futuro
    futureDate.setDate(futureDate.getDate() + 5);
    
    const formattedDate = `${(futureDate.getMonth() + 1).toString().padStart(2, '0')}/${futureDate.getDate().toString().padStart(2, '0')}/${futureDate.getFullYear()}`;
    
    return {
        startDate: formattedDate,
        insuranceSum: faker.helpers.arrayElement(['3000000', '5000000', '7000000', '10000000', '15000000', '20000000', '25000000', '30000000', '35000000']),
        meritRating: faker.helpers.arrayElement(['Super Bonus', 'Bonus 1', 'Bonus 2', 'Bonus 3', 'Bonus 4', 'Bonus 5', 'Bonus 6', 'Bonus 7', 'Bonus 8', 'Bonus 9', 'Malus 10', 'Malus 11', 'Malus 12', 'Malus 13', 'Malus 14', 'Malus 15', 'Malus 16', 'Malus 17']),
        damageInsurance: faker.helpers.arrayElement(['No Coverage', 'Partial Coverage', 'Full Coverage']),
        optionalProducts: faker.helpers.arrayElements(['EuroProtection', 'LegalDefenseInsurance'], { min: 1, max: 2 }),
        courtesyCar: faker.helpers.arrayElement(['No', 'Yes'])
    };
};

// cotação
const generateQuoteData = () => {
    // Gera um nome de usuário no formato "Nome.Sobrenome-XYZ00"
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const suffix = faker.string.alphanumeric(2).toUpperCase() + faker.number.int({ min: 10, max: 99 });
    const username = `${firstName}.${lastName}-${suffix}`;

    // Gera um email no formato "Nome_Sobrenome00@dominio.com"
    const emailPrefix = `${faker.person.firstName()}_${faker.person.lastName()}${faker.number.int({ min: 10, max: 99 })}`;
    const email = faker.internet.email({ firstName: emailPrefix });

    return {
        email: email,
        phone: faker.number.int({ min: 10000000000, max: 99999999999 }).toString(),
        username: 'accenture',
        password: 'Accenture123@',
        comments: faker.lorem.sentence()
    };
};

module.exports = {
    generateVehicleData,
    generateInsurantData,
    generateProductData,
    generateQuoteData
}; 
