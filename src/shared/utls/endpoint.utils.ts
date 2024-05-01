export class EndpointUtils {
  private static readonly API_URL: string = 'http://localhost:3000';

  static readonly Path: any = {
    API: {
      ping: `${EndpointUtils.API_URL}/ping`,
    },
    USER: {
      users: `${EndpointUtils.API_URL}/users`,
      user: `${EndpointUtils.API_URL}/users/:id`,
      new: `${EndpointUtils.API_URL}/users/register`,
      authenticate: `${EndpointUtils.API_URL}/users/authenticate`,
    }
  };
}
