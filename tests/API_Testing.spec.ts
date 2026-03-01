import { test, expect } from '@playwright/test';

test('GET Request', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

    console.log(response);

    // Check status code
    expect(response.status()).toBe(200);

    // Parse JSON response
    const data = await response.json();

    console.log(data);

    // Validate response body
    expect(data.id).toBe(1);
    expect(data.name).toBeDefined();
    expect(data.email).toContain('@');
});

test('POST Request', async ({ request }) => {

    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            data: {
                title: 'Playwright API',
                body: 'Learning POST request',
                userId: 100
            }
        }
    );

    // Validate status
    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    console.log(responseBody);

    // Validate response body
    expect(responseBody.title).toBe('Playwright API');
    expect(responseBody.userId).toBe(100);
});


test('PUT Request - Update Post', async ({ request }) => {

  const response = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: {
        id: 1,
        title: 'Updated Title',
        body: 'Updated Body',
        userId: 1
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.title).toBe('Updated Title');
  expect(body.body).toBe('Updated Body');
});


test('PATCH Request - Partial Update', async ({ request }) => {

  const response = await request.patch(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: {
        title: 'Partially Updated Title'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.title).toBe('Partially Updated Title');
});


test('DELETE Request - Delete Post', async ({ request }) => {

  const response = await request.delete(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);

  // Some APIs return empty body
  const text = await response.text();
  expect(text).toBe('{}');
});

