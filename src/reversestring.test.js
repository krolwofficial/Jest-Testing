const reverseString = require('./reversestring');

test('reverseString function exist', () => {
    expect(reverseString).toBeDefined();
})

test('String reverses', () => {
    expect(reverseString('reverse')).toEqual('esrever');
})