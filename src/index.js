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
    return _compareSize(_clean(a), _clean(b), 'greaterThan')
  }

  export function lt(a, b) {
    if(!_validate(a, b)) {
      return false
    }
    return _compareSize(_clean(a), _clean(b), 'lessThan')
  }

  export function eq(a, b) {
    if(!_validate(a, b)) {
      return false
    }
    return _clean(a).join('.') === _clean(b).join('.')
  }

  export function gte(a, b) {
    return gt(a,b) || eq(a,b) 
  }

  export function lte(a, b) {
    return lt(a,b) || eq(a,b) 
  }

  export function neq(a, b) {
    if(!_validate(a, b)) {
      return false
    }
    return !eq(a,b)
  }

  export function validate(data) {
    if (typeof data !== 'string') {
      // throw TypeError('Invalid Type: params should be string')
      return false
    }
    data = data.replace(/-alpha/g, '')
    const arr = data.split('.')
    if (arr.length !== 3) {
      // throw TypeError('Invalid Type: params\'s format should be x.x.x')
      return false
    }
    const pass = arr.every((el) => {
      // if (!/^[0-9]+$/.test(el)) {
      //   throw TypeError('Invalid Type: params should only contain Number and dot(.)')
      // }
      return /^[0-9]+$/.test(el)
    })
    return pass
  }

  function _compareSize(a, b, type) {
    let index = 0
    return _compare(a, b)
    
    function _compare(a, b) {
      let aa = a[index]
      let bb = b[index]
      let expression
      switch(type) {
        case 'greaterThan': 
          expression = aa > bb
          break
        case 'lessThan': 
          expression = aa < bb
          break
      }

      if (expression) {
        return true
      } else if ( aa === bb ){
        index ++
        if (index === 3) {
          return false
        }
        return _compare(a, b)
      } else {
        return false
      }
    }

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