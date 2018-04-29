// (function (global, factory) {
//   typeof exports === 'object' && typeof module !== 'undefined' 
//     ? module.exports = factory() 
//     : typeof define === 'function' && define.amd 
//       ? define(factory) 
//       : (global.simpleSemver = factory());
// })(this, function() {

  export function gt(a, b) {
    if(!_validate(a, b)) {
      return false
    }
    return _cleanCompare(a, b) === 'GT'
  }

  export function lt(a, b) {
    if(!_validate(a, b)) {
      return false
    }
    return _cleanCompare(a, b) === 'LT'
  }

  export function eq(a, b) {
    if(!_validate(a, b)) {
      return false
    }
    return _cleanCompare(a, b) === 'EQ'
  }

  export function gte(a, b) {
    if(!_validate(a, b)) {
      return false
    }
    const result = _cleanCompare(a, b)
    return result === 'GT' || result === 'EQ' 
  }

  export function lte(a, b) {
    if(!_validate(a, b)) {
      return false
    }
    const result = _cleanCompare(a, b)
    return result === 'LT' || result === 'EQ' 
  }

  export function neq(a, b) {
    if(!_validate(a, b)) {
      return false
    }
    return _cleanCompare(a, b) !== 'EQ'
  }

  export function validate(data) {
    if (typeof data !== 'string') {
      return false
    }
    data = data.replace(/-alpha/g, '')
    const arr = data.split('.')
    if (arr.length !== 3) {
      return false
    }
    const pass = arr.every((el) => {
      return /^[0-9]+$/.test(el)
    })
    return pass
  }

  function _cleanCompare (a, b) {
    return _compareVersion(_clean(a), _clean(b))
  }

  function _compare (a, b) {
    return a === b
      ? 'EQ'
      : a > b
        ? 'GT'
        : 'LT'
  }

  function _compareVersion (a, b) {
    if (a.join('.') === b.join('.')) {
      return 'EQ'
    }

    for(let i = 0; i < a.length; i++) {
      let result = _compare(a[i], b[i])
      switch (result) {
        case 'EQ':
          continue
          break
        case 'GT':
          return 'GT'
        case 'LT':
          return 'LT'
      }
    }

    // let a = [1,2,3]
    // for(let i = 0; i< a.length; i++) {
    //   switch (i) {
    //     case 1:
    //       continue
    //       break
    //     case 0:
    //       console.log('----0')
    //       break
    //     default:
    //       console.log('----default')
    //   }
    //   console.log(i)
    // }
  }



  function _validate(a, b) {
    return validate(a) && validate(b)
  }
  
  function _clean(data) {
    return data.replace(/-alpha/g, '').split('.').map(Number)
  }

  // return {
  //   gt,
  //   lt,
  //   gte,
  //   lte,
  //   eq
  // }

// })