/**
 * DOM Functions
 * @author Taylor Rath & Brayden Hermanson
 * @date 04/15/2026
 * @repository https://github.com/tarath01/Media-Tracker
 * @summary
 * Utilities simplify DOM functions throughout the application.
 */

/**
 * Returns first element
 * @param selector
 * @return {HTMLElement}
 */
function get(selector) {
    return document.querySelector(selector);
}

/**
 * Sets textContent of element
 * @param selector
 * @param text
 */
function setText(selector, text) {
    get(selector).textContent = text;
}

/**
 * Sets value of input element
 * @param selector
 * @param value
 */
function setValue(selector, value) {
    get(selector).value = value;
}

/**
 * Retrieves value
 * @param selector
 * @returns {*}
 */

function getValue(selector) {
    return get(selector).value;
}

/**
 * Clears element
 * @param selector
 */
function clear(selector) {
    const elem = get(selector);
    if (elem.value) elem.value = "";
    else elem.textContent = "";
}

/**
 * moves focus
 * @param selector
 */
function focus(selector) {
    get(selector).focus();
}

/**
 * selects text
 * @param selector
 */
function select(selector) {
    get(selector).select();
}

/**
 * runs function while DOM loaded
 * @param func
 */
function load(func) {
    document.addEventListener("DOMContentLoaded", func);
}

/**
 * adds click event listener to selected element
 * @param selector
 * @param func
 */
function addClick(selector, func) {
    get(selector).addEventListener("click", func);
}

export {get, setText, setValue, getValue, clear, 
    focus, select, load, addClick};