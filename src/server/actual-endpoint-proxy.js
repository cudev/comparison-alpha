import http from 'http';
import winston from 'winston';

const Token = process.env.TOKEN || '$2a$10$OPuCAYPgX97JNcxpodt/w.YlkrvMJOtXJmDlXPm.79EexOgO934Nm';
const port = process.env.PROVIDER_PORT || 3003;
const hostname = process.env.PROVIDER_HOST || '127.0.0.1';
const path = process.env.GRAPHQL || '/graphql';

export default function actualEndpointProxy(request, response) {
  const { query, variables } = request.body;
  const postData = JSON.stringify({
    query,
    variables,
  });

  const options = {
    hostname,
    port,
    path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData),
      Token,
    },
  };
  let data = '';
  const req = http.request(options, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      response.status(200).send(data);
    });
  });
  req.on('error', ({ message }) => {
    winston.log(`Request to remote endpoint can't be executed: ${message}`);
    response.status(400).end();
  });
  req.write(postData);
  req.end();
  return req;
}
