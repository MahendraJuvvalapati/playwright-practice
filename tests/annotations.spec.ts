import {test} from '@playwright/test'
import { assert } from 'node:console'



// test.only('Executing only Test1',async()=>{

//     console.log('Test1...')
// })


test.skip('Skipping  Test2',async()=>{

    console.log('Test2...')
})

test.fixme('Fixing Test3 later', async () => {

    //Marks a test as broken and needs fixing.
    console.log('Test3...');
});


test.fail('Expected to fail Test4', async () => {
    console.log('Test4...');
    // throw new Error('Intentional failure');

});

test('Slow Test5', async () => {
    test.slow() //3x timeout
    console.log('Test5...');
});