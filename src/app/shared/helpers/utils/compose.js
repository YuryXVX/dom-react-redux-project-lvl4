const compose = (...fns) => (args) => fns.reduceRight((acc, fn) => fn(acc), args) 
export {compose};