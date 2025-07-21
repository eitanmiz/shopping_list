// main configuration - can be change for test use (for other urls)
export const config = {
//  apiBaseUrl: 'http://localhost:25931/api', // for debug mode - call web api (C#)
  apiBaseUrl: 'http://localhost:5234/api', // release mode - call web api (C#)
  apiNodeBaseUrl: 'http://localhost:3001/api' // call orderSum (nodejs)
};