import test from 'ava';

const {
    createSome,
    createNone,
} = require('../../__dist/cjs/PlainOption/Option');
const { tapOption } = require('../../__dist/cjs/PlainOption/tap');

test('input is Some', (t) => {
    const INPUT_INNER = Symbol('input');

    // eslint-disable-next-line
    let arg;

    t.plan(3);

    const input = createSome(INPUT_INNER);
    const actual = tapOption(input, (v) => {
        t.pass('should call the tap fn');
        arg = v;
    });

    t.is(input, actual, 'should be the expect returned');
    t.is(arg, INPUT_INNER, 'should be the expected arg');
});

test('input is None', (t) => {
    const INPUT_INNER = Symbol('input');

    t.plan(1);

    const input = createNone(INPUT_INNER);
    const actual = tapOption(input, (_v) => {
        t.pass('should not call the tap fn');
    });

    t.is(input, actual, 'should be the expect returned');
});
