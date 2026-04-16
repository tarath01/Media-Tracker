/**
 *
 * @author Taylor Rath & Brayden Hermanson
 * @date 04/15/2026
 * @repository https://github.com/tarath01/Media-Tracker
 * @summary
 * Module handles retrieving, storing, and removing data used within application.
 */

/**
 * Retrieves and parses JSON data from storage
 * @function retrieve
 * @param key - localStorage to read
 * @returns {any|null} - JSON value
 */
function retrieve(key) {
    const json = localStorage.getItem(key);
    if(json) {
        return JSON.parse(json);
    } else {
        return null;
    }
}

/**
 * Stores Data in localStorage after converting
 * @param key datas saved under
 * @param data serialize and store data
 */
function store(key, data) { 
    localStorage.setItem(key, JSON.stringify(data)); 
}

/**
 * Removes key from localStorage
 * @param key - key to remove from storage
 */
function remove(key) { 
    localStorage.removeItem(key); 
}

export {retrieve, store, remove}