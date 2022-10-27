export default `#graphql
  type LogGroup {
    arn: String
    logGroupName: String
  }

  type Query {
    listLambdaFuncs: [String]
    getLogGroups: [LogGroup]
  }
`;
