/**
 * Generics Letters
 * 
 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
 * 
 */

function useState<T extends number | string = number>() {
    let state: T;
    function get() {
        return state;
    }
    function set(newValue: T) {
        state = newValue;
    }

    return { get, set }
}

let newState = useState<number | string>();
newState.get();
newState.set("bizarro")
newState.set(123)
