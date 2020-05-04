import {lis,lcs,lcsubstr} from './lis-lcs-lcsubstring';


test('longest-increasing-subsequence',() => {
    expect(lis( [10,9,2,5,3,7,101,18])).toBe(4);
})

test('Longest Common Subsequence',() => {
    expect(lcs('abcde','ace')).toBe(3);
    expect(lcs('abc','abc')).toBe(3);
    expect(lcs('abc','def')).toBe(0);
})
test('longest common substring',() => {
    expect(lcsubstr('ABCD','CBCE')).toBe(2);
    expect(lcsubstr('ABCD','EACB')).toBe(1);
})