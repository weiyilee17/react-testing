import { http, HttpResponse } from 'msw';

export const handlers = [
  // Intercept the GET request.
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json(
      [
        {
          name: 'Bruce Wayne',
        },
        {
          name: 'Clark Kent',
        },
        {
          name: 'Princes Diana',
        },
      ],
      { status: 200 },
    );
  }),
];
