import * as simpleSemver from '..'
import test from 'ava'

// invalid type
for(let key in simpleSemver) {
  test(`Invalid type in function ${key}`, (t) => {
    try {
      const fn = simpleSemver[key]
      fn(1, 2)
    } catch(e) {
      t.is(true, true)
    }
  })
}

for(let key in simpleSemver) {
  test(`Invalid type in function ${key}`, (t) => {
    try {
      const fn = simpleSemver[key]
      fn('1', '2')
    } catch(e) {
      t.is(true, true)
    }
  })
}

for(let key in simpleSemver) {
  test(`Invalid type in function ${key}`, (t) => {
    try {
      const fn = simpleSemver[key]
      fn('1.1', '2.2')
    } catch(e) {
      t.is(true, true)
    }
  })
}

for(let key in simpleSemver) {
  test(`Invalid type in function ${key}`, (t) => {
    try {
      const fn = simpleSemver[key]
      fn('1.1.1.1', '2.2.2.2')
    } catch(e) {
      t.is(true, true)
    }
  })
}

// not used in process, just to show all cases
const allCases = [
  ['11.9.11', '10.10.10'],// 大 小 大 -> 大
  ['11.9.9', '10.10.10'],// 大 小 小 -> 大
  ['11.9.10', '10.10.10'],// 大 小 等 -> 大

  ['11.11.11', '10.10.10'],// 大 大 大 -> 大
  ['11.11.9', '10.10.10'],// 大 大 小 -> 大
  ['11.11.10', '10.10.10'],// 大 大 等 -> 大

  ['11.10.11', '10.10.10'],// 大 等 大 -> 大
  ['11.10.9', '10.10.10'],// 大 等 小 -> 大
  ['11.10.10', '10.10.10'],// 大 等 等 -> 大



  ['10.11.11', '10.10.10'],// 等 大 大 -> 大
  ['10.11.9', '10.10.10'],// 等 大 小 -> 大
  ['10.11.10', '10.10.10'],// 等 大 等 -> 大

  ['10.10.11', '10.10.10'],// 等 等 大 -> 大
  ['10.10.10', '10.10.10'],// 等 等 等 -> 等
  ['10.10.9', '10.10.10'],// 等 等 小 -> 小

  ['10.9.11', '10.10.10'],// 等 小 大 -> 小 
  ['10.9.9', '10.10.10'],// 等 小 小 -> 小
  ['10.9.10', '10.10.10'],// 等 小 等 -> 小




  ['9.9.11', '10.10.10'],// 小 小 大 -> 小
  ['9.9.9', '10.10.10'],/// 小 小 小 -> 小
  ['9.9.10', '10.10.10'],/// 小 小 等 -> 小

  ['9.10.11', '10.10.10'],/// 小 等 大 -> 小
  ['9.10.9', '10.10.10'],// 小 等 小 -> 小
  ['9.10.10', '10.10.10'],// 小 等 等 -> 小

  ['9.11.11', '10.10.10'],// 小 大 大 -> 小
  ['9.11.9', '10.10.10'],// 小 大 小 -> 小
  ['9.11.10', '10.10.10'],// 小 大 等 -> 小
]


const greaterCases = [
  ['11.9.11', '10.10.10'],// 大 小 大 -> 大
  ['11.9.9', '10.10.10'],// 大 小 小 -> 大
  ['11.9.10', '10.10.10'],// 大 小 等 -> 大

  ['11.11.11', '10.10.10'],// 大 大 大 -> 大
  ['11.11.9', '10.10.10'],// 大 大 小 -> 大
  ['11.11.10', '10.10.10'],// 大 大 等 -> 大

  ['11.10.11', '10.10.10'],// 大 等 大 -> 大
  ['11.10.9', '10.10.10'],// 大 等 小 -> 大
  ['11.10.10', '10.10.10'],// 大 等 等 -> 大



  ['10.11.11', '10.10.10'],// 等 大 大 -> 大
  ['10.11.9', '10.10.10'],// 等 大 小 -> 大
  ['10.11.10', '10.10.10'],// 等 大 等 -> 大

  ['10.10.11', '10.10.10'],// 等 等 大 -> 大
]

const equalCases = [
  ['10.10.10', '10.10.10'],// 等 等 等 -> 等
] 

const lessCases = [
  ['10.10.9', '10.10.10'],// 等 等 小 -> 小

  ['10.9.11', '10.10.10'],// 等 小 大 -> 小 
  ['10.9.9', '10.10.10'],// 等 小 小 -> 小
  ['10.9.10', '10.10.10'],// 等 小 等 -> 小



  ['9.9.11', '10.10.10'],// 小 小 大 -> 小
  ['9.9.9', '10.10.10'],/// 小 小 小 -> 小
  ['9.9.10', '10.10.10'],/// 小 小 等 -> 小

  ['9.10.11', '10.10.10'],/// 小 等 大 -> 小
  ['9.10.9', '10.10.10'],// 小 等 小 -> 小
  ['9.10.10', '10.10.10'],// 小 等 等 -> 小

  ['9.11.11', '10.10.10'],// 小 大 大 -> 小
  ['9.11.9', '10.10.10'],// 小 大 小 -> 小
  ['9.11.10', '10.10.10'],// 小 大 等 -> 小
]

// gt
greaterCases.forEach((el) => {
  test('gt true', (t) => {
    t.is(simpleSemver.gt(el[0], el[1]), true)
  })
})
lessCases.forEach((el) => {
  test('gt false', (t) => {
    t.is(simpleSemver.gt(el[0], el[1]), false)
  })
})
equalCases.forEach((el) => {
  test('gt false', (t) => {
    t.is(simpleSemver.gt(el[0], el[1]), false)
  })
})



// lt
lessCases.forEach((el) => {
  test('lt true', (t) => {
    t.is(simpleSemver.lt(el[0], el[1]), true)
  })
})

greaterCases.forEach((el) => {
  test('lt false', (t) => {
    t.is(simpleSemver.lt(el[0], el[1]), false)
  })
})

equalCases.forEach((el) => {
  test('lt false', (t) => {
    t.is(simpleSemver.lt(el[0], el[1]), false)
  })
})


// eq
equalCases.forEach((el) => {
  test('eq true', (t) => {
    t.is(simpleSemver.eq(el[0], el[1]), true)
  })
})
greaterCases.forEach((el) => {
  test('eq false', (t) => {
    t.is(simpleSemver.eq(el[0], el[1]), false)
  })
})
lessCases.forEach((el) => {
  test('eq false', (t) => {
    t.is(simpleSemver.eq(el[0], el[1]), false)
  })
})


// neq
equalCases.forEach((el) => {
  test('neq false', (t) => {
    t.is(simpleSemver.neq(el[0], el[1]), false)
  })
})
greaterCases.forEach((el) => {
  test('neq true', (t) => {
    t.is(simpleSemver.neq(el[0], el[1]), true)
  })
})
lessCases.forEach((el) => {
  test('neq true', (t) => {
    t.is(simpleSemver.neq(el[0], el[1]), true)
  })
})


// gte
equalCases.forEach((el) => {
  test('gte true', (t) => {
    t.is(simpleSemver.gte(el[0], el[1]), true)
  })
})
greaterCases.forEach((el) => {
  test('gte true', (t) => {
    t.is(simpleSemver.gte(el[0], el[1]), true)
  })
})
lessCases.forEach((el) => {
  test('gte false', (t) => {
    t.is(simpleSemver.gte(el[0], el[1]), false)
  })
})

// lte
equalCases.forEach((el) => {
  test('lte true', (t) => {
    t.is(simpleSemver.lte(el[0], el[1]), true)
  })
})
greaterCases.forEach((el) => {
  test('lte false', (t) => {
    t.is(simpleSemver.lte(el[0], el[1]), false)
  })
})
lessCases.forEach((el) => {
  test('lte true', (t) => {
    t.is(simpleSemver.lte(el[0], el[1]), true)
  })
})

// other
test('1.10.0  > 1.9.0', (t) => {
  t.is(simpleSemver.gt('1.10.0', '1.9.0'), true)
})

test('-alpha', (t) => {
  t.is(simpleSemver.gt('1.10.0-alpha', '1.9.0'), true)
})


// 1.10.0  > 1.9.0

// non goal
// - prelease version: 1.0.1-alpha, ignore -alpha
// - range


// 2.2.3  1.3.4