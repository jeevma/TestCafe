import { fixture, Selector, test } from 'testcafe'

fixture `Getting started with testcafe`
    .page `https://devexpress.github.io/testcafe/example/`;

test("First TestCafe Test", async t=>{
    await t.typeText('#developer-name', 'sanjiv')
    await t.click('#submit_button')
});