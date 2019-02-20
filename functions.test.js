const functions = require('./functions');


// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

const nameCheck = () => console.log('Checking Name...');

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    })

    test('User is Kate', () => {
        const user = 'Kate';
        expect(user).toBe('Kate');
    })
})
 


test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
})

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
})

test('Should return null', () => {
    expect(functions.isNull()).toBeNull();
})

test('Should be falsy', () => {
    expect(functions.checkValue(false)).toBeFalsy();
})

// to Equal
test('Should be Wiktor 22 object', () => {
    expect(functions.createUser()).toEqual({
        name: 'Wiktor',
        age: 22
    });
})

// Less (toBeLessThan) than and grater than
test('Should be under 1600', () => {
    const load1 = 400;
    const load2 = 200;
    expect(load1 + load2).toBeLessThanOrEqual(600);
})

//Regex
test('There is no I in team', () =>{
    expect('team').not.toMatch(/I/);
})

//Arrays
test('Admin should be in usernames', () => {
    const usernames = ['wiktor','trele','admin'];
    expect(usernames).toContain('admin');
})

//Working with async data

//Promise
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham');
//         });
// });

//Async
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');

});