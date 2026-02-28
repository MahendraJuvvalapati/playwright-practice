import {test} from '@playwright/test'


test.describe('Group1',async()=>{


    test('Test1',async()=>{
        console.log("test 1...")
    })

     test('Test2',async()=>{
        console.log("test 2...")
    })
})

test.describe('Group2',async()=>{


    test('Test3',async()=>{
        console.log("test 3...")
    })

     test('Test4',async()=>{
        console.log("test 4...")
    })
})


// to run specific group of tests use ---  npx playwright test grouping -g 'Group2'