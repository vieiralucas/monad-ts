import {Maybe} from "./maybe";
import {ErrorM} from "./error";
import {clone} from "./services/clone";
import {MF} from "./types/mf";
import {Monad} from "./monad";

/**
 * Class AsyncFlow - for composing monads in an async flow (pipe), based on Promise.
 * @extends {Monad}
 */
export class AsyncFlow<T> extends Monad<T> {
    /**
     * @type {any}
     * @protected
     */
    protected flow: any;
    /**
     * @type {Maybe}
     * @protected
     */
    protected maybe: Maybe<T>;
    /**
     * @type {ErrorM}
     * @protected
     */
    protected err: ErrorM<T>;

    /**
     * Creates an instance of class AsyncFlow.
     * @param {any} [initV = 0] initV - initial value of new flow (pipe).
     * @param {boolean} [encapsulate = true] encapsulate - flag, if true then the init value will be cloned.
     */
    constructor(
        initV: any = 0,
        encapsulate: boolean = true
    ){
        super();
        /**
         * Keep initial flow (pipe) value.
         * @type {any}
         */
        this.flow = encapsulate ? clone(initV) : initV;
        /**
         * The instance of Maybe.
         * @type {Maybe}
         */
        this.maybe = new Maybe();
        /**
         * The instance of ErrorM.
         * @type {ErrorM}
         */
        this.err = new ErrorM();
    }

    /**
     * Binds initial value to the transformation function.
     * @method bind
     * @param {function(v: T) => Pr<U>} f - transformation function.
     * @return {Promise<T>}
     */
    bind<T, U>(f: MF<T, U>): Promise<U>{
        return new Promise((resolve: any) =>{
            resolve(this.err.bind(v => this.maybe.bind((v: any) => f(v), v), this.flow));
        })
    }
}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.