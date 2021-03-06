
import {cast} from "../src/services/cast";

describe('Service Cast: ', ()=>{
    it('1) should produce array from array of arrays',()=>{
        expect(cast([10, [11], [12]], 0)).toEqual([10, [11], [12]]);
    });
    it('2) should produce array from array of arrays',()=>{
        expect(cast([10, [11], [12]], 1)).toEqual([ 10, 11, 12 ]);
    });
    it('3) should produce array from array of arrays',()=>{
        expect(cast([10, [[11, 2], 3], [12]], 1)).toEqual([ 10, [ 11, 2 ], 3, 12 ]);
    });
    it('4) should produce array from array of arrays',()=>{
        expect(cast([[10], [[11, [2]], 3], [12]], 2)).toEqual([ 10, 11, [ 2 ], 3, 12 ]);
    });
    it('5) should produce array from array of arrays',()=>{
        expect(cast([10, [[11, [2]], 3], [12]], 2)).toEqual([ 10, 11, [ 2 ], 3, 12 ]);
    });
    it('6) should produce array from array of arrays',()=>{
        expect(cast([10, [[11, [2]], 3], [12]], 200)).toEqual( [ 10, 11, 2, 3, 12 ]);
    });
    it('7) should produce an error', ()=>{
        expect(cast('str', 0) instanceof Error).toBeTruthy();
    });
});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
