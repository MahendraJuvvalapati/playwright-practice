import { test } from '@playwright/test';

test('test1 @smoke', async () => {
    console.log('Test1...');
});

test('test2 @regression', async () => {
    console.log('Test2...');
});

test('test3 @sanity', async () => {
    console.log('Test3...');
});

test('test4', { tag: '@smoke' }, async () => {
    console.log('Test4...');
});

test('test5',{ tag: '@sanity' },async () => {
    console.log('Test5...');
});


//to run specific tags ---- npx playwright test tags.spec.ts -g 'sanity'