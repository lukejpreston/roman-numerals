test('1 converts to I', () => {
    expect(convertNumberToNumerals(1)).toEqual('I')
})

test('5 converts to V', () => {
    expect(convertNumberToNumerals(5)).toEqual('V')
})

test('10 converts to X', () => {
    expect(convertNumberToNumerals(10)).toEqual('X')
})

test('3 converts to III', () => {
    expect(convertNumberToNumerals(3)).toEqual('III')
})

test('11 converts to XI', () => {
    expect(convertNumberToNumerals(11)).toEqual('XI')
})

test('15 converts to XV', () => {
    expect(convertNumberToNumerals(15)).toEqual('XV')
})

test('20 converts to XX', () => {
    expect(convertNumberToNumerals(20)).toEqual('XX')
})

test('4 converts to IV', () => {
    expect(convertNumberToNumerals(4)).toEqual('IV')
})

test('9 converts to IX', () => {
    expect(convertNumberToNumerals(9)).toEqual('IX')
})