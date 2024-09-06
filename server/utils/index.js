function cloneOwnProperties(obj, seen = new WeakMap()) {
    // Handle primitives and functions
    if (typeof obj !== 'object' || obj === null) return obj;
    
    // Handle Date
    if (obj instanceof Date) return new Date(obj);
    
    // Handle Array
    if (Array.isArray(obj)) return obj.map(item => cloneOwnProperties(item, seen));
    
    // Handle circular references
    if (seen.has(obj)) return seen.get(obj);
    
    // Handle Mongoose document
    if (obj.constructor.name === 'model') {
        return cloneOwnProperties(obj.toObject(), seen);
    }
    
    // Handle other objects
    const newObj = Object.create(Object.getPrototypeOf(obj));
    seen.set(obj, newObj);
    
    for (const [key, value] of Object.entries(obj)) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            newObj[key] = cloneOwnProperties(value, seen);
        }
    }
    
    return newObj;
}

module.exports = {
    cloneOwnProperties
}