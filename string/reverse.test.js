import reverse  from './reverse';

test('reverse words',() => {
    expect(reverse("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc")
})

test('reverse words 2',() => {
    expect(reverse("Let's take LeetCode conte\u{1f47e}st")).toBe("s'teL ekat edoCteeL ts\u{1f47e}etnoc")
})
