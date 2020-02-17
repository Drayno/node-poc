import HttpClient from './http-client';

export default (resource: string) =>
  new HttpClient(resource);
