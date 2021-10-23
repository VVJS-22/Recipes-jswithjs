const sampleRecipes = [
    {
        id: 1,
        name: 'Briyani',
        servings: 3,
        cookTime: '1:00',
        instructions: `1.Take rice\n 2.Take chicken\n 3.Cook Briyani\n 4.Eat Briyani`,
        incredients: [
            {
                id: 1,
                name: 'Chicken',    
                amount: '1Kg'
            },
            {
                id: 2,
                name: 'Masala',
                amount: '15g'
            }
        ]
    },
    {
        id: 2,
        name: 'Sawarma',
        servings: 5,
        cookTime: '0:45',
        instructions: "Ready Nan\n 2.Ready the chicken\n 2. Roll nan with chicken\n 4. Eat Sawarma",
        incredients: [
            {
                id: 1,
                name: 'Nan',
                amount: '1 Pcs'
            },
            {
                id: 2,
                name: 'Paneer',
                amount: '100g'
            },
            {
                id: 3,
                name: 'Salt',
                amount: '1Tbs'
            }
        ]
    }
]

export default sampleRecipes