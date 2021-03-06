import {Monad} from "./monad";
import {Pr} from "./types/pr";
import {MF} from "./types/mf";

/**
 * Class ErrorM - return given value or produce Error if take Error or get Error after execution of f(v).
 * @extends {Monad}
 */
export class ErrorM<T> extends Monad<T> {
    /**
     * Chains the operations on a monadic values.
     * @method bind
     * @param {function(v: T) => Pr<U>} f - transformation function for a monad.
     * @param {any} v - underlying value for a monad.
     * @return {Pr<U>  | Error} transformed by f() value v or Error.
     */
    bind<T, U>(f: MF<T, U>, v: any): Pr<U> | Error{
        if(v !== v || v === Infinity|| v === -Infinity || v instanceof Error){
            return this.fail(v);
        } else {
            const vL: any = this.just(f, v);
            return (vL !== vL || vL === Infinity|| vL === -Infinity || vL instanceof Error) ? this.fail(vL) : vL;
        }
    }
}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.